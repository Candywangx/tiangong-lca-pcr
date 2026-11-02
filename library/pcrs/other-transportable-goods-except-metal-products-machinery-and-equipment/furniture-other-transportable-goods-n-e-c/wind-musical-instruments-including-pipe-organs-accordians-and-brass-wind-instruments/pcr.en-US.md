---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wind-musical-instruments-including-pipe-organs-accordians-and-brass-wind-instruments
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Lacquer-finished piston-valve brass trumpet manufacture

## 1. Scope and Applicability

This method covers complete new lacquer-finished acoustic piston-valve brass trumpets from actual purchased metal supply forms and disjoint finished components through component forming/machining where performed, joining, surface preparation, lacquer application, final assembly, adjustment, functional inspection and unique first quality release. The terminal includes the actual bell, lead/main tubing, complete functioning piston/valve casing/spring/slide system, supports and supplied usable mouthpiece when included. Pitch, alloy grade, bought versus made parts, coating chemistry and accessories are dataset qualifiers. Independent manufacturer evidence supports a transparent technical synthesis, not one observed SKU, common plant, order, certification or measured bill of materials. [yamaha-bell; yamaha-casing; yamaha-piston; yamaha-mouthpipe; yamaha-final; yamaha-manual; adams-eb.]

Exclude woodwind/reed instruments, accordions, pipe organs, rotary-valve trumpets, cornets/flugelhorns as reference products, toy/non-musical devices, electronic/MIDI instruments or amplified speaker products, separately sold bells/tubes/mouthpieces, bare-metal and plated-body finish routes, and mere repacking of bought whole instruments. The broader native wind-instrument family positively includes manufactured brass-wind articles but does not make these excluded routes methodologically equivalent. A purchased plated piston or mouthpiece retains its upstream plating once without inventing an onsite plating bath. The Adams default plated Eb example is countercontext for finish and accessory variation; optional lacquer is not a measured common process. [un-cpc3-notes; yamaha-finish; adams-eb.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wind-musical-instruments-including-pipe-organs-accordians-and-brass-wind-instruments |
| classification_refs | CPC 3.0 38330; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38330.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete new lacquer-finished acoustic piston-valve brass trumpets in an explicit supplied configuration |
| excluded_products | Woodwind/reed/accordion/organ; rotary and other brass reference products; parts; electronic/toys; plated or bare body; whole-instrument repacking |
| representative_product | Complete piston-valve lacquered trumpet with declared pitch/configuration |
| production_route | Actual metal/component supply → real onsite component work → joining/cleaning/buffing/lacquer → final assembly/adjustment/function acceptance |
| market_state | Complete first-quality-released article at plant with supplied mouthpiece/accessory scope declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete trumpet producing musical sound acoustically with a functioning air-column and actual configuration |
| How much | 1 kg of measured net complete first-accepted configuration |
| How well | Real appearance, valve operation, air-leak, pitch adjustment and test-playing acceptance to the declared manufacturer/order specification; retain criteria without universal test numbers |
| How long or cycle | One manufacturing cohort first release; actual later original-cohort services reported separately over observed H; no default life |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wind musical instruments (including pipe organs, accordians and brass-wind instruments) `426979e0-dbcc-48d8-b69d-d2d9a9541521` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete acoustic trumpet configuration; piston valve system; actual tuning pitch and specification; bell lead main and valve slide configuration; actual alloys grades and supply forms; onsite versus purchased component work; lacquer formulation and application curing route; supplied mouthpiece and usable accessories scope; net mass excluding packing case and separate accessory bottles; calibrated weighing and unique first acceptance; production cohort Q and closing released FG; original service cohort Q_H and observed H; raw WIP and unassigned service inherited vectors; complete gross physical legs and packaging ownership; actual postwork permission tests and disposition; native limits and provider coverage |

Record every required qualifier in dataset metadata, process notes, reference-flow comments or product description; missing qualifiers make the reference definition incomplete. All core native restrictions and exclusions also remain in the complete finished consumer card.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished | Mass | kg | Use cp_release measured same-configuration complete first-accepted net kg; Q directly sums measured net amounts, without deriving weight from item count or tube geometry. Closing FG is already included. |
| native_extensive | all inventory rows | Actual extensive property of each row | Declared unit of each row | Do not impose Mass/kg on MJ/m3/h. Preserve physical V and burden A separately; after real raw-unit conversion only calc_quotient divides once. |
| whole_preparation | all preparation rows | Mass | kg | Procure complete supplied preparation once; constituents/carried water are analytical subledgers, actual onsite additions remain separate. |
| no_density_inference | all mass-volume bridges | Actual substance Mass and Volume | kg; m3 | Item↔kg needs real same-configuration net-mass measurement; Number of items to item is only the same physical unit with factor 1. Area is not this reference basis; secondary-property coefficients imply neither density nor weight. Integrated totals are not multiplied by time. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received sheet/tube/rod, disjoint components, whole preparations and utility supply states |
| starting_condition_role | Foreground interface with inherited supplier upstream burdens |
| product_classification_scope | Narrow complete lacquered piston-valve brass trumpet subset within 38330; not the whole classification leaf |
| recursive_input_rule | Whole supply upstream once; internal same-identity/amount/history components cancel; purchased finished-instrument repacking is not manufacturing |
| upstream_dataset_requirement | Match real alloy supply working, components, preparations, utilities, tooling, transport and waste-treatment providers; disclose gaps |
| disclosure | Configuration, actual route/supply owner, first-release Q, original Q_H/H services, gross physical/burden dimensions, unresolved scope and exclusions |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_chain | manufacturing_system | Start at real received alloy sheet/tube/rod and component supply states. Include actual cutting, hammering/spinning, tube drawing/sizing/bending, removable filler recovery, valve machining/broaching/brazing/grinding when performed, solder assembly, cleaning/buffing, lacquer application and actual curing/drying, lubrication, adjustment and final function/appearance/play testing. Do not impose hydraulic forming, a kiln, every hand operation, a plating bath or a particular energy system on all plants. | `yamaha-bell`; `yamaha-casing`; `yamaha-piston`; `yamaha-mouthpipe`; `yamaha-final` |
| boundary_supply | all inputs | One documented upstream interface per actual whole supply: the complete bought preparation or component is procured once; internal resin/solvent/water/alloy constituents are assay subledgers. Onsite preparation instead lists each real purchased ingredient, extra carrier, mixing energy and loss separately and does not also purchase its internal output. Purchased finished valve blocks, springs and bells include supplier manufacturing; remove only duplicated onsite work, never their upstream burden. | `yamaha-casing`; `yamaha-piston`; `yamaha-final`; `ilcd-attributional-2010` |
| boundary_q | first release | Choose first quality release, not net delivery. Q is the sum of measured net mass of each complete configuration first released during the production cohort once. Closing released FG is already in Q: never add it as additional production or deduct its manufacturing burden. Failed, held and sample instruments lacking acceptance do not enter Q. Reinspection, return, authorised or unauthorised postrelease work and shipping create no new Q. | `yamaha-final`; `ilcd-attributional-2010` |
| boundary_history | materials and WIP | Retain raw physical opening/closing quantities separately from every inherited exchange-specific burden vector. Manufacturing B_open/B_close includes raw stock, WIP and genuinely unused/unassigned non-WIP stores or service charges, excluding released FG manufacturing already assigned to Q. Stock-corrected consumption is not corrected twice. Internal component handoffs use matching identity/amount/history and cancel in consolidation; their BOM is not another external product or reference output. | `ilcd-attributional-2010` |
| boundary_actual | all processes | Collect all real failed batches, zero-output periods, start/stop, idle, cleanup, samples, repair, rework and losses. Q=0 keeps real raw quantities and burdens and yields no unit result. A missing UUID, provider or future factory amount is not zero or a cut-off. Add every actual unlisted single material, alloy, whole preparation, gas, fuel, tool, waste outlet and chemically identified emission before claiming site completeness. | `ilcd-attributional-2010` |
| boundary_services | fg_service | Storage, handling, packaging and dispatch remain actual separately attributed service ledgers H with original cohort Q_H and observed horizon. Original manufacturing history is carried for identity but never purchased again. Only unused/unassigned services/charges carry; performed original-cohort services remain assigned even when FG closes in stock. Actual rework needs manufacturer/specification permission and postwork test/acceptance/disposition for continued conformity; missing permission or failed tests never erase occurred flows or burdens. A damaged or dented piston must not simply be reinserted; preserve the manufacturer instruction to contact its dealer. Natural humidity exchange needs no invented work authorisation. | `yamaha-manual`; `ilcd-attributional-2010` |
| boundary_physical | all physical gates | Reconcile manufacture, released-FG/service and combined physical gates from complete gross legs, independent opening/closing wet stocks and actual reaction/transfer terms. Gross physical legs never shrink by allocation or economic shares. Track each relevant alloy/element and independent H2O phases, dissolved/particle species and measured emissions; COD, VOC, NOx, total metal, ions-total and PM are indicators, not single molecules. No one residual may determine two unknowns; no invented oxidation, water formation, alloy loss or density. | `ilcd-attributional-2010` |
| boundary_pack | packaging_assets | For each actual packaging material retain opening empty/attached WIP/attached FG/reusable stocks and six event legs P/I/ER/S/EO/W separately, plus real disjoint repairs and water exchange. Closing is complete wet mass. Internal reuse cancels. Newly received material/water retained in closing still has real influx; X_in/X_out remove only overlaps with other same-side flow terms, never closing stocks or opposite direction. Supplier-included I has real mass and one upstream owner. Whole wet article and contents/tare bridge must be disjoint. Apply the complete cp_pack identity with real F_in/F_out and subtract only proved OTHER same-side X; no stock/opposite-side cancellation. | `ilcd-attributional-2010` |
| boundary_waste | all waste | Actual ordinary manufacturing waste, failed pieces, samples or scrap sold externally retain incurred manufacturing and treatment burdens. No automatic T_other subtraction, avoided product credit, yield allocation or recycling credit follows shipment/sale. One actual mixed waste outlet is one Waste exchange; measured source pools sum to its whole wet total without additive duplicate provider/treatment. Only a real separately functioning other cohort/product and justified allocation/handover permits one burden-vector transfer; physical gross remains complete. If independently measured origin-W partitions are used instead of the actual mixed total, they are a nonadditive representation of that same one outlet and one provider, not additional disposals. Actual collection gate and source-process handoffs must be explicit. | `ilcd-attributional-2010` |
| boundary_energy | utilities | Use actual native extensive energy units for electricity, heat and each fuel. Record any actual steam/hot-water carrier kg, external Product condensate/water return and thermal states/enthalpy separately from delivered MJ with one supplier water/energy boundary; no duplicated provider purchase, default steam/boiler or automatic return credit. Gas totals already integrated over an interval are not multiplied by time again; only measured rates are integrated. | `ilcd-attributional-2010` |
| boundary_downstream | dataset boundary | Declare cradle-to-first-release with linked upstream and production-waste treatment; distinguish measured gate-to-gate from incomplete supplier-linked coverage. Actual subsequent foreground services are separate original-cohort results. Downstream distribution, musician practice/use maintenance and end-of-life scenarios are outside this manufacturing result; owner manual handling guidance is not evidence of factory quantities, service life or certification. | `yamaha-manual`; `ilcd-attributional-2010` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| components | Metal and component preparation | required | Actual make/buy branch; received states documented | manufacturing | Q |
| assembly_finish | Joining cleaning polishing and lacquer finishing | required | Actual remaining work only | manufacturing | Q |
| release | Final assembly adjustment and first release | required | Complete instrument first accepted | manufacturing | Q |
| fg_service | Released FG services | conditional | Real storage handling packing dispatch returns or postrelease work | original-cohort service and custody | Q_H; H |
| packaging_assets | Packaging and asset custody | conditional | Actual material events and asset services or custody | manufacturing or original-cohort service and custody | Q; Q_H; H |

Every card uses actual single-event gross V as its physical dimension; separate burden results use A_c/A_H and create no second procurement. Conditional cards do not establish that a plant has that flow; each actual omitted single flow needs a new card, never zero or an other collection. For one real mixed waste outlet enable mixed_bin or the actual single mixed-bin card only; source W cards become non-additive subledgers.

### Process: Metal and component preparation (`components`)

#### Inputs

##### Product flows

###### Brass (`brass_sheet`)

Actual sheet supplied for bell cutting and forming; record alloy assay and sheet supply form without imposing a grade or composition. Purchasing this worked sheet inherits rolling upstream once. No pure-copper or nickel-silver substitution. Qualify the actual sheet and upstream working on this card.

- Selected flow: Brass sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-bell`; `ilcd-attributional-2010`

###### Brass (`brass_tube`)

Actual purchased tube blank for the lead pipe or slide; record prior drawing and supply form. Perform only remaining real sizing and bending; no repetition of completed supplier work. No pure-copper or nickel-silver substitution. Qualify the actual tube and upstream working on this card.

- Selected flow: Brass tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-mouthpipe`; `ilcd-attributional-2010`

###### Brass (`brass_rod`)

Actual rod used to machine one declared brace or valve component. Distinguish this solid supply from hollow tube and purchased finished components. Native Product/Mass is a copper-zinc alloy formally classified as bars, rods and profiles, of copper. Use this binding only for the actual solid rod on this card; sheet and hollow tube are excluded. The generic alloy basename does not override the native supply-form limitation. Independently substantiate the actual Cu/Zn composition, alloy grade, supply state, upstream working and supplier/provider compatibility; do not assume a composition or grade. No pure-copper or nickel-silver substitution.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-casing`; `ilcd-attributional-2010`

###### Copper-nickel-zinc alloy tube blank (`nickelsilver_tube`)

Only an actual nickel-silver tube; no elemental silver and no pure copper substitution.

- Selected flow: Copper-nickel-zinc alloy tube blank
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Formed brass trumpet bell (`bell_bought`)

Only a purchased formed bell with its actual finish state; exclude its metal sheet and completed forming from onsite purchase totals. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Piston-valve casing subassembly for trumpet (`valve_block`)

One purchased valve block in a declared machining state. Upstream includes its own constituent casings and joining; separately supplied pistons and springs are disjoint. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Finished trumpet piston valve (`piston_bought`)

Actual individual supplied piston; identify metal and coating with supplier evidence. A copper or steel generic hydraulic valve is not an instrument piston. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Finished brass trumpet valve slide (`valve_slide`)

Actual supplied valve slide with inner and outer tubing identified. Do not count its tubes again as purchased blanks. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Finished brass trumpet main tuning slide (`main_slide`)

One real purchased main slide; identify matched bore and configuration without imposing a dimension. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Finished brass trumpet brace (`braces`)

One actual supplied brace; declare finish and attached fasteners. Components bundled in a valve block remain its subledger. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Finished trumpet water-key assembly (`waterkey`)

Actual supplied water key includes only documented constituent pieces; identify whether spring and sealing pad are already included. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Finished trumpet finger button (`finger_button`)

One actual supplied button; retain actual metal and inlay identity and count as disjoint from supplied piston assemblies. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Polymer trumpet valve guide (`guide`)

One actual separately purchased valve guide; identify real polymer formulation and supplied whole piece. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Felt trumpet valve bumper (`felt`)

One supplied felt bumper with actual fibre blend and moisture; no assumed wool composition. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Cork trumpet water-key pad (`cork`)

Only the actual discrete cork sealing pad; do not count it separately if included in a bought water key. Native Product/Mass covers manufactured natural or agglomerated cork articles at plant production mix. Narrow to this one actual cork sealing pad, recording its real natural/agglomerated state and any included binder; no raw bark, generic biomass, rubber pad, default binder recipe or duplicate bought water-key contents.

- Selected flow: Articles of natural cork, agglomerated cork and articles thereof `9dee16fe-f882-489f-9b63-3c0ee5148e02`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Finished brass trumpet mouthpiece (`mouthpiece`)

Conditional supplied usable mouthpiece with declared finish and configuration. Exclude a separately customer-supplied mouthpiece from product mass; no mandatory bundled mouthpiece assumption. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### Springs and leaves for springs, of iron or steel (`spring`)

Only an actual separate iron/steel manufactured spring, production mix at plant. The broad native spring family does not set coil dimensions or stiffness. Count none already inside a bought subassembly. Native manufactured finished iron/steel spring family, production mix at plant, Mass/kg; no material grade, stiffness, coil dimensions or geography is fixed. Misleading Chinese generic fluid wording does not override the concordant spring names/route/Product type.

- Selected flow: Springs and leaves for springs, of iron or steel `650cda2f-7baa-413f-ac22-ff0da54ea8ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Trumpet piston metal tube blank (`piston_blank`)

Only actual onsite piston manufacture: bind the real single alloy and supply tube with separate measured constituent pathway tubes when supplied separately. No assumed Monel or stainless composition.

- Selected flow: Trumpet piston metal tube blank
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Trumpet piston air-path metal tube (`pathway_tube`)

Only an actual independently supplied pathway tube inserted into a piston. Specify its single alloy; not an additional purchase when supplied within a finished piston.

- Selected flow: Trumpet piston air-path metal tube
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Fusible metal bending alloy (`bending_alloy`)

Only a real supplied single fusible alloy used as a removable mandrel filler. Record full alloy assay and recovery stock; no prescribed lead/cadmium content or operational recipe. Internal melt-out and reuse is a loop.

- Selected flow: Fusible metal bending alloy
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-bell`; `yamaha-mouthpipe`

###### Tube-drawing lubricant preparation (`drawing_fluid`)

Actual complete bought drawing preparation; measure whole formulation once. Active compounds and carrier are assay subledgers; actual onsite dilution adds separate water.

- Selected flow: Tube-drawing lubricant preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Metal-cutting fluid concentrate (`cutting_fluid`)

Actual bought whole cutting-fluid concentrate; its premixed water is included once. Separate real dilution water and recoverable sump stocks without losing retained influx. Native Product/Mass metalworking-fluid family expressly includes machining and stamping, with no fixed concentration, grade, supplier geography or recipe. Narrow to this one actual whole supplied cutting-fluid concentrate compatible with the operation; record real oil/water/additive assays and source state. Do not treat its carrier water as another receipt or substitute a pure oil, compressed gas or a separately assembled onsite formulation without its own inputs.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Alternating current (`electricity_components`)

Conditional actual CN consumption-mix grid-average AC below 1 kV supplied to user; native reference Net calorific value/MJ is an energy measure, not fuel combustion. Convert metered kWh with exact 3.6 MJ/kWh. Other geography/voltage/supply needs its own compatible row; no generic substitution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Tap water (`water_components`)

Only actual treated potable municipal water supplied as Product at plant; record treatment and provider. Adopt Mass/kg only; secondary Volume coefficient is not density. Independently measured state-specific density is required for a mass-volume bridge. Exclude water already in purchased whole preparation; separately added water remains an influx even in closing wet stock.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Finished trumpet valve top cap (`valve_top_cap`)

Only an actual separately purchased single top cap with declared metal and finish; excluded as another purchase when included in a whole bought valve block. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-manual`; `yamaha-structure`

###### Finished trumpet valve bottom cap (`valve_bottom_cap`)

Only an actual separately supplied bottom cap with declared metal and finish; preserve its assembly boundary and no double count inside another bought component. Native Product/Mass is the complete manufactured musical-instrument parts/accessories family at plant production mix. Use only the single actual supplied trumpet part named by this card, with its real material, machining/finish state, make-or-buy boundary and supplier compatibility independently documented. The isolated next-category comment “384 Sports goods” is a classification-heading defect; it does not make a sports article eligible. Neither a complete trumpet nor raw alloy nor an arbitrary engine/hydraulic part is this input. Complete supplied subassemblies own their constituents once, and these separate part cards apply only outside that included supply.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_components`
- Sources: `yamaha-manual`; `yamaha-structure`

##### Elementary flows

###### Atmospheric water vapour uptake (`humidity_in_components`)

Conditional actual natural humidity uptake during manufacturing or storage/handling; independently measure water mass and ambient state. This is not purchased water, repair-only water, a liquid discharge, or an assumed authorised work operation.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

#### Outputs

##### Waste flows

###### Trumpet-process aqueous effluent (`effluent_components`)

Only one actual external mixed aqueous effluent outlet; whole wet mass once with independently measured dissolved/particulate components as non-additive analytical subledgers. A separate elementary discharge is recorded only for actual post-treatment environmental release beyond the selected provider boundary.

- Selected flow: Trumpet-process aqueous effluent
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`vapour_components`)

Only real H2O gas emission to unspecified air, CAS 7732-18-5, Elementary Mass/kg. Native multilingual synonyms include isotope/ice/hydroxyl strings; those do not change the selected ordinary gaseous H2O identity. No liquid mist or structural/reaction water inference; natural storage desorption is included when real.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_components`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

### Process: Joining cleaning polishing and lacquer finishing (`assembly_finish`)

#### Inputs

##### Product flows

###### Tin solder (`solder`)

Only actual tin-dominant solder for metal joining. Native welding-material Product at factory with examples in electronics does not restrict use exclusively to electronics; it prescribes no lead/silver/copper fraction. Whole flux-cored supply is a different whole preparation and not alloy plus duplicated flux.

- Selected flow: Tin solder `ea4c87ef-6623-4c40-831f-ef146fd4b4d8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Copper-based solder (`braze`)

Only actual copper-based joining alloy compatible with the native dense metal joint use; composition and delivered form require collection. A silver-dominant filler needs its own compatible identity and a new atomic card.

- Selected flow: Copper-based solder `70972c8b-0052-4f75-9cac-6a94bdbd6b9a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Metal-joining flux preparation (`flux`)

Actual complete supplied flux for the documented joining route. Wave-solder no-clean native is incompatible and is not adopted. Separate flux is absent if already inside a whole supplied solder preparation.

- Selected flow: Metal-joining flux preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Aqueous metal-cleaning preparation (`cleaner`)

Actual whole purchased aqueous metal cleaner; record formulation and carried water once. No invented acid or alkali recipe. Add each actual separately supplied bath chemical as its own card.

- Selected flow: Aqueous metal-cleaning preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Metal-buffing polishing preparation (`polish`)

Actual complete supplied abrasive polishing preparation. The inspected bulk-polish native has Aluminium-content reference and does not establish whole formulation Mass; it is not bound here.

- Selected flow: Metal-buffing polishing preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Trumpet clear-lacquer coating preparation (`lacquer`)

Actual whole supplied clear lacquer with its declared resin and carrier chemistry; electrostatic application alone proves neither powder nor UV curing. No imposed resin or solvent.

- Selected flow: Trumpet clear-lacquer coating preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Clear-lacquer thinning preparation (`thinner`)

Conditional actual separately purchased whole thinner; no assumed solvent composition. Solvents inside purchased lacquer are not another purchase.

- Selected flow: Clear-lacquer thinning preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Trumpet valve lubricating oil preparation (`valve_oil`)

Actual complete supplied valve-oil formulation with supplier compatibility. Petroleum fraction with fixed calorific qualifier is not adopted without matching evidence; no oil dose is prescribed.

- Selected flow: Trumpet valve lubricating oil preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Trumpet slide lubricating grease preparation (`slide_grease`)

Actual supplied whole slide grease; distinguish grease from liquid valve oil and from components already inside the bought preparation.

- Selected flow: Trumpet slide lubricating grease preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Cotton buffing cloth wheel (`buff_cloth`)

Only an actual cotton cloth wheel; collect supplier fibre confirmation and replacement/wear. The abrasive compound is separate only when supplied independently.

- Selected flow: Cotton buffing cloth wheel
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Aluminium-oxide grinding wheel (`grind_wheel`)

Only actual supplied bonded aluminium-oxide wheel with its whole binder and backing. Do not assume this abrasive where another composition is used.

- Selected flow: Aluminium-oxide grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Lacquer spray-booth filter cartridge (`filter`)

Only actual complete replaceable spray filter. Measure empty/dry and retained wet mass separately without counting retained lacquer twice.

- Selected flow: Lacquer spray-booth filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_assembly_finish`
- Sources: `yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### Alternating current (`electricity_assembly_finish`)

Conditional actual CN consumption-mix grid-average AC below 1 kV supplied to user; native reference Net calorific value/MJ is an energy measure, not fuel combustion. Convert metered kWh with exact 3.6 MJ/kWh. Other geography/voltage/supply needs its own compatible row; no generic substitution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Tap water (`water_assembly_finish`)

Only actual treated potable municipal water supplied as Product at plant; record treatment and provider. Adopt Mass/kg only; secondary Volume coefficient is not density. Independently measured state-specific density is required for a mass-volume bridge. Exclude water already in purchased whole preparation; separately added water remains an influx even in closing wet stock.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Pipeline natural gas fuel (`gas`)

Only actual gaseous fuel consumed by an onsite burner or brazing kiln. Record composition and delivered state; a native with methane CAS and unit Mass/Volume coefficients both 1 is not adopted as mixed-gas composition or density. Purchased heat is an alternative supply owner.

- Selected flow: Pipeline natural gas fuel
- Flow property / unit: Volume / m3
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Purchased industrial process heat (`heat`)

Only actual purchased delivered heat, technology and supplier declared; measure useful transfer independently. No assumed boiler or onsite fuel duplicating the same supply.

- Selected flow: Purchased industrial process heat
- Flow property / unit: Net calorific value / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Delivered steam carrier (`steam_in`)

Conditional real external steam carrier in kg; record pressure/temperature and actual enthalpy. Steam-provider water/energy coverage is one owner, not extra purchases.

- Selected flow: Delivered steam carrier
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Heat-exchange water carrier (`thermal_water_in`)

Only real external hot-water carrier supply with independent mass and enthalpy; do not count it together with water already in a whole steam/hot-water provider twice.

- Selected flow: Heat-exchange water carrier
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

##### Elementary flows

###### Atmospheric water vapour uptake (`humidity_in_assembly_finish`)

Conditional actual natural humidity uptake during manufacturing or storage/handling; independently measure water mass and ambient state. This is not purchased water, repair-only water, a liquid discharge, or an assumed authorised work operation.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Oxygen in process air (`air_o2_inputs`)

Only actual gaseous o2 crossing the physical boundary in the declared direction and medium, including non-reacted pass-through when measured. Composition and gas mass are independent; no aggregate air exchange is added to these species. Purchased cylinder gas requires a separate Product identity and provider. Native Elementary/Mass O2 CAS7782-44-7 uses Resources from air / Renewable element resources from air. Use only independently measured ordinary gaseous O2 in this actual direction; no liquid/isotope/ionic synonym substitution, assumed air fraction, total-element residual or aggregate-air duplicate. Purchased whole air or protective gas retains its own Product/provider ownership; its contained gas is not additionally a free atmospheric Resource.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Dinitrogen in process air (`air_n2_inputs`)

Only actual gaseous n2 crossing the physical boundary in the declared direction and medium, including non-reacted pass-through when measured. Composition and gas mass are independent; no aggregate air exchange is added to these species. Purchased cylinder gas requires a separate Product identity and provider. Native Elementary/Mass N2 CAS7727-37-9 uses Resources from air / Renewable element resources from air. Use only independently measured ordinary gaseous N2 in this actual direction; no liquid/isotope/ionic synonym substitution, assumed air fraction, total-element residual or aggregate-air duplicate. Purchased whole air or protective gas retains its own Product/provider ownership; its contained gas is not additionally a free atmospheric Resource.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Argon in process air (`air_ar_inputs`)

Only actual gaseous ar crossing the physical boundary in the declared direction and medium, including non-reacted pass-through when measured. Composition and gas mass are independent; no aggregate air exchange is added to these species. Purchased cylinder gas requires a separate Product identity and provider. Native Elementary/Mass Ar CAS7440-37-1 uses Resources from air / Renewable element resources from air. Use only independently measured ordinary gaseous Ar in this actual direction; no liquid/isotope/ionic synonym substitution, assumed air fraction, total-element residual or aggregate-air duplicate. Purchased whole air or protective gas retains its own Product/provider ownership; its contained gas is not additionally a free atmospheric Resource.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Returned condensate (`condensate_return`)

Only actual external Product return of condensate with receiving supplier and thermal state; physical gross return differs from inventory burden carry and gives no automatic credit.

- Selected flow: Returned condensate
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Returned heat-exchange water (`thermal_water_return`)

Only actual external Product return of water at measured thermal state. Internal recirculation cancels and is not new purchase, environmental water, or negative heat supply.

- Selected flow: Returned heat-exchange water
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

##### Waste flows

###### Trumpet-process aqueous effluent (`effluent_assembly_finish`)

Only one actual external mixed aqueous effluent outlet; whole wet mass once with independently measured dissolved/particulate components as non-additive analytical subledgers. A separate elementary discharge is recorded only for actual post-treatment environmental release beyond the selected provider boundary.

- Selected flow: Trumpet-process aqueous effluent
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Brass machining shavings (`brass_shavings`)

Real separate brass-shaving outlet; assay coolant attachment and alloy independently. Sale or recycling does not subtract incurred manufacture or treatment burdens. Native Waste/Mass is collected machining scrap/shavings/turnings at plant GLO, with no further treatment included. Narrow to the actual separate brass-machining shavings and independently measured retained coolant/water/contamination; no nickel-silver substitution, remelted product, municipal mixed bin or assumed downstream recycling credit. One actual treatment owner is added only outside this collection boundary.

- Selected flow: Metal scrap, shavings and turnings `2a5ca712-1e70-48bf-b665-e6d49a55f3cb`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Copper-nickel-zinc alloy scrap (`nickelsilver_scrap`)

Only separately exported nickel-silver scrap; it is not silver metal or the same mass as a combined waste-bin total.

- Selected flow: Copper-nickel-zinc alloy scrap
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Collected metal-buffing dust (`polish_dust`)

One real captured mixed powder waste stream to a treatment provider; preserve component/element assays without calling PM a single molecule. Airborne residual needs its own actual chemical/particle identity.

- Selected flow: Collected metal-buffing dust
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Metal-finishing wet sludge (`sludge`)

Only a real separate wet sludge outlet; independent water and solids measurement, not a second estimate of the already measured effluent.

- Selected flow: Metal-finishing wet sludge
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Discarded lacquer preparation residue (`lacquer_residue`)

One actual separate whole lacquer residue outlet including real solvent and resin. If captured within discarded filter it is only a subledger of that outlet.

- Selected flow: Discarded lacquer preparation residue
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Discarded lacquer filter cartridge (`spent_filter`)

One real whole used wet filter outlet with retained lacquer included once; avoid separate identical residue output and assign treatment once.

- Selected flow: Discarded lacquer filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Spent metalworking-fluid emulsion (`spent_fluid`)

Only a real separate exported spent emulsion. Whole wet mass and composition subledger are disjoint from another mixed effluent or waste-bin total.

- Selected flow: Spent metalworking-fluid emulsion
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Discarded fusible bending alloy (`bending_residue`)

Actual separately discarded alloy with contamination assay; internal recovered reusable filler is stock and an internal loop, not saleable coproduct by default.

- Selected flow: Discarded fusible bending alloy
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Rejected complete trumpet (`rejected_instrument`)

Only actual discarded complete instruments after disposition. They never enter accepted Q and keep all failed work burdens; no automatic coproduct or avoided-metal credit.

- Selected flow: Rejected complete trumpet
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Mixed trumpet-workshop solid waste (`mixed_bin`)

Conditional single actual mixed external bin. Source pools are independently measured subledgers whose sum equals the one wet bin total; no simultaneous separate shavings/filter/cloth/packaging Waste outputs for the same matter. One provider and treatment once.

- Selected flow: Mixed trumpet-workshop solid waste
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`vapour_assembly_finish`)

Only real H2O gas emission to unspecified air, CAS 7732-18-5, Elementary Mass/kg. Native multilingual synonyms include isotope/ice/hydroxyl strings; those do not change the selected ordinary gaseous H2O identity. No liquid mist or structural/reaction water inference; natural storage desorption is included when real.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Oxygen in process air (`air_o2_outputs`)

Only actual gaseous o2 crossing the physical boundary in the declared direction and medium, including non-reacted pass-through when measured. Composition and gas mass are independent; no aggregate air exchange is added to these species. Purchased cylinder gas requires a separate Product identity and provider. Native Elementary/Mass O2 CAS7782-44-7 uses Emissions to air, unspecified. Use only independently measured ordinary gaseous O2 in this actual direction; no liquid/isotope/ionic synonym substitution, assumed air fraction, total-element residual or aggregate-air duplicate. Actual vent origin and gross throughflow remain separate from net formation and purchased-gas ownership.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Dinitrogen in process air (`air_n2_outputs`)

Only actual gaseous n2 crossing the physical boundary in the declared direction and medium, including non-reacted pass-through when measured. Composition and gas mass are independent; no aggregate air exchange is added to these species. Purchased cylinder gas requires a separate Product identity and provider. Native Elementary/Mass N2 CAS7727-37-9 uses Emissions to air, unspecified. Use only independently measured ordinary gaseous N2 in this actual direction; no liquid/isotope/ionic synonym substitution, assumed air fraction, total-element residual or aggregate-air duplicate. Actual vent origin and gross throughflow remain separate from net formation and purchased-gas ownership.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Argon in process air (`air_ar_outputs`)

Only actual gaseous ar crossing the physical boundary in the declared direction and medium, including non-reacted pass-through when measured. Composition and gas mass are independent; no aggregate air exchange is added to these species. Purchased cylinder gas requires a separate Product identity and provider. Native Elementary/Mass Ar CAS7440-37-1 uses Emissions to air, unspecified. Use only independently measured ordinary gaseous Ar in this actual direction; no liquid/isotope/ionic synonym substitution, assumed air fraction, total-element residual or aggregate-air duplicate. Actual vent origin and gross throughflow remain separate from net formation and purchased-gas ownership.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### carbon dioxide (fossil) (`carbon_dioxide`)

Conditional independently identified actual Carbon dioxide release to air; quantify this molecular species from independent measurement and actual carbon/origin context. Total VOC/COD/NOx or a mass residual does not establish this species or a default emission factor. Only fossil CO2 gas, CAS 124-38-9, Elementary emission to unspecified air, Mass/kg; fossil origin needs independent records. Dry-ice/ion synonyms do not licence liquid/solid/ionic flow substitution or CO2 uptake credit.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Methane (`methane`)

Conditional independently identified actual Methane release to air; quantify this molecular species from independent measurement and actual carbon/origin context. Total VOC/COD/NOx or a mass residual does not establish this species or a default emission factor. No UUID is adopted: the inspected exact fossil-methane native mixes carbon-black, graphite, nanotube and unrelated molecular synonyms with CH4; hard particle/structure conflicts remain unresolved. Preserve actual independently measured CH4 and fossil-origin evidence.

- Selected flow: Methane
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### carbon monoxide (fossil) (`carbon_monoxide`)

Conditional independently identified actual Carbon monoxide release to air; quantify this molecular species from independent measurement and actual carbon/origin context. Total VOC/COD/NOx or a mass residual does not establish this species or a default emission factor. Only fossil CO gas, CAS 630-08-0, Elementary emission to unspecified air, Mass/kg; no refrigerated-liquid or aggregate exhaust substitution despite those native synonyms.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Nitrogen dioxide (`nitrogen_dioxide`)

Conditional independently identified actual Nitrogen dioxide release to air; quantify this molecular species from independent measurement and actual carbon/origin context. Total VOC/COD/NOx or a mass residual does not establish this species or a default emission factor.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Nitrogen monoxide (`nitric_oxide`)

Conditional independently identified actual Nitrogen monoxide release to air; quantify this molecular species from independent measurement and actual carbon/origin context. Total VOC/COD/NOx or a mass residual does not establish this species or a default emission factor.

- Selected flow: Nitrogen monoxide
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Ethanol (`ethanol`)

Conditional independently identified actual Ethanol release to air; quantify this molecular species from independent measurement and actual carbon/origin context. Total VOC/COD/NOx or a mass residual does not establish this species or a default emission factor.

- Selected flow: Ethanol
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Acetone (`acetone`)

Conditional independently identified actual Acetone release to air; quantify this molecular species from independent measurement and actual carbon/origin context. Total VOC/COD/NOx or a mass residual does not establish this species or a default emission factor. No UUID is adopted: the inspected acetone native also carries incompatible ether/ketal aliases; molecular identity remains unresolved for that binding, not permission to treat mixed solvent as acetone.

- Selected flow: Acetone
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assembly_finish`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

### Process: Final assembly adjustment and first release (`release`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_release`)

Conditional actual CN consumption-mix grid-average AC below 1 kV supplied to user; native reference Net calorific value/MJ is an energy measure, not fuel combustion. Convert metered kWh with exact 3.6 MJ/kWh. Other geography/voltage/supply needs its own compatible row; no generic substitution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_release`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Tap water (`water_release`)

Only actual treated potable municipal water supplied as Product at plant; record treatment and provider. Adopt Mass/kg only; secondary Volume coefficient is not density. Independently measured state-specific density is required for a mass-volume bridge. Exclude water already in purchased whole preparation; separately added water remains an influx even in closing wet stock.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_release`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

##### Elementary flows

###### Atmospheric water vapour uptake (`humidity_in_release`)

Conditional actual natural humidity uptake during manufacturing or storage/handling; independently measure water mass and ambient state. This is not purchased water, repair-only water, a liquid discharge, or an assumed authorised work operation.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_release`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Wind musical instruments (including pipe organs, accordians and brass-wind instruments) (`finished`)

Exactly the complete new lacquer-finished acoustic piston-valve brass trumpet: bell, lead/main tubes, actual valve casings/pistons/springs/slides/braces and usable supplied mouthpiece if included; native Product, manufactured finished product, production mix at plant, Mass/kg. No native grade, alloy fraction, pitch or geography is specified. Broad family identity does not extend this method to organs, accordions, woodwinds, parts, toys or electronic products. The Chinese generic comment mistranslates flow as airflow; the bilingual names, manufactured route, Product type and reference Mass agree on an article. Measure full accepted net configuration excluding disposable packing/case and separately supplied accessory bottles. First release Q counts each accepted whole instrument once including closing FG; paired internal component transfers cancel.

- Selected flow: Wind musical instruments (including pipe organs, accordians and brass-wind instruments) `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `yamaha-structure`; `yamaha-final`; `yamaha-manual`; `adams-eb`; `un-cpc3-notes`

##### Waste flows

###### Trumpet-process aqueous effluent (`effluent_release`)

Only one actual external mixed aqueous effluent outlet; whole wet mass once with independently measured dissolved/particulate components as non-additive analytical subledgers. A separate elementary discharge is recorded only for actual post-treatment environmental release beyond the selected provider boundary.

- Selected flow: Trumpet-process aqueous effluent
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_release`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`vapour_release`)

Only real H2O gas emission to unspecified air, CAS 7732-18-5, Elementary Mass/kg. Native multilingual synonyms include isotope/ice/hydroxyl strings; those do not change the selected ordinary gaseous H2O identity. No liquid mist or structural/reaction water inference; natural storage desorption is included when real.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_release`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

### Process: Released FG services (`fg_service`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_fg_service`)

Conditional actual CN consumption-mix grid-average AC below 1 kV supplied to user; native reference Net calorific value/MJ is an energy measure, not fuel combustion. Convert metered kWh with exact 3.6 MJ/kWh. Other geography/voltage/supply needs its own compatible row; no generic substitution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Tap water (`water_fg_service`)

Only actual treated potable municipal water supplied as Product at plant; record treatment and provider. Adopt Mass/kg only; secondary Volume coefficient is not density. Independently measured state-specific density is required for a mass-volume bridge. Exclude water already in purchased whole preparation; separately added water remains an influx even in closing wet stock.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Held released trumpet received (`fg_received`)

Only a real external receipt or separately modelled paired internal handoff of previously released complete FG. Preserve original Q_H and history vector; it is not a new manufacture purchase. Native Product/Mass is the manufactured whole wind-instrument family at plant production mix; this card uses only the same complete lacquered piston-valve brass trumpet and actual original configuration/cohort. Its broad name and mistranslated airflow comment do not identify a bell, loose valve, rotary instrument, plated body, toy or electronic instrument. Use this Product interface only while actual disposition and whole-article state support it; genuinely discarded material retains its separate actual Waste record. The returned/held wet physical state and historical burden are measured independently and create no new Q.

- Selected flow: Wind musical instruments (including pipe organs, accordians and brass-wind instruments) `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

###### Returned released trumpet (`fg_return`)

Actual externally returned whole instrument measured as received with changed water, parts, loss and packaging separated. Preserve original delivery reference; do not assume returned mass equals original delivery or new Q. Native Product/Mass is the manufactured whole wind-instrument family at plant production mix; this card uses only the same complete lacquered piston-valve brass trumpet and actual original configuration/cohort. Its broad name and mistranslated airflow comment do not identify a bell, loose valve, rotary instrument, plated body, toy or electronic instrument. Use this Product interface only while actual disposition and whole-article state support it; genuinely discarded material retains its separate actual Waste record. The returned/held wet physical state and historical burden are measured independently and create no new Q.

- Selected flow: Wind musical instruments (including pipe organs, accordians and brass-wind instruments) `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

###### Springs and leaves for springs, of iron or steel (`repair_spring`)

Only actual separate new replacement iron/steel finished spring. Keep its influx even when retained in closing FG; it is not an entire new instrument. Native manufactured finished iron/steel spring family, production mix at plant, Mass/kg; no material grade, stiffness, coil dimensions or geography is fixed. Misleading Chinese generic fluid wording does not override the concordant spring names/route/Product type.

- Selected flow: Springs and leaves for springs, of iron or steel `650cda2f-7baa-413f-ac22-ff0da54ea8ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

###### Trumpet valve lubricating oil preparation (`repair_oil`)

Actual whole repair oil preparation once, distinct from historic manufacture oil. Already performed service stays with original cohort even while FG remains held.

- Selected flow: Trumpet valve lubricating oil preparation
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

##### Elementary flows

###### Atmospheric water vapour uptake (`humidity_in_fg_service`)

Conditional actual natural humidity uptake during manufacturing or storage/handling; independently measure water mass and ambient state. This is not purchased water, repair-only water, a liquid discharge, or an assumed authorised work operation.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Released trumpet gross shipment (`fg_shipped`)

All actual gross shipped complete FG; use actual mass and original serial/cohort. Shipment is not first production and closing FG is not added to Q again. Native Product/Mass is the manufactured whole wind-instrument family at plant production mix; this card uses only the same complete lacquered piston-valve brass trumpet and actual original configuration/cohort. Its broad name and mistranslated airflow comment do not identify a bell, loose valve, rotary instrument, plated body, toy or electronic instrument. Use this Product interface only while actual disposition and whole-article state support it; genuinely discarded material retains its separate actual Waste record. The returned/held wet physical state and historical burden are measured independently and create no new Q.

- Selected flow: Wind musical instruments (including pipe organs, accordians and brass-wind instruments) `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

###### Held trumpet external transfer (`fg_held_out`)

Only an actual gross external held/returned transfer with recipient and disposition; burden handover requires independent justified function/cohort decision. Native Product/Mass is the manufactured whole wind-instrument family at plant production mix; this card uses only the same complete lacquered piston-valve brass trumpet and actual original configuration/cohort. Its broad name and mistranslated airflow comment do not identify a bell, loose valve, rotary instrument, plated body, toy or electronic instrument. Use this Product interface only while actual disposition and whole-article state support it; genuinely discarded material retains its separate actual Waste record. The returned/held wet physical state and historical burden are measured independently and create no new Q.

- Selected flow: Wind musical instruments (including pipe organs, accordians and brass-wind instruments) `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

##### Waste flows

###### Trumpet-process aqueous effluent (`effluent_fg_service`)

Only one actual external mixed aqueous effluent outlet; whole wet mass once with independently measured dissolved/particulate components as non-additive analytical subledgers. A separate elementary discharge is recorded only for actual post-treatment environmental release beyond the selected provider boundary.

- Selected flow: Trumpet-process aqueous effluent
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

###### Removed trumpet spring (`removed_spring`)

Real removed spring as one Waste outlet only when independently discarded; alloy and oil attachment separate from a whole mixed-bin subledger.

- Selected flow: Removed trumpet spring
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

###### Discarded held trumpet (`fg_failed`)

Only real discarded FG after failed or unauthorised work. Retain all actual physical legs and increments; permission/post-tests decide continued conformity and disposition, never whether occurred work is collected.

- Selected flow: Discarded held trumpet
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-manual`; `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`vapour_fg_service`)

Only real H2O gas emission to unspecified air, CAS 7732-18-5, Elementary Mass/kg. Native multilingual synonyms include isotope/ice/hydroxyl strings; those do not change the selected ordinary gaseous H2O identity. No liquid mist or structural/reaction water inference; natural storage desorption is included when real.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-final`; `ilcd-attributional-2010`

### Process: Packaging and asset custody (`packaging_assets`)

#### Inputs

##### Product flows

###### Corrugated shipping carton (`carton_P`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_I`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_ER`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene protective bag (`pe_bag_P`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual polyethylene protective bag separate paid procurement receipt event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a whole polyethylene bag at plant production mix, CAS9002-88-4; it is not polyethylene resin, polypropylene/PET film or foam. Use the actual complete PE protective bag with declared closures, wet state and supply/return condition; no fixed thickness or reuse life.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene protective bag (`pe_bag_I`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual polyethylene protective bag first non-purchased external ingress event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a whole polyethylene bag at plant production mix, CAS9002-88-4; it is not polyethylene resin, polypropylene/PET film or foam. Use the actual complete PE protective bag with declared closures, wet state and supply/return condition; no fixed thickness or reuse life.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene protective bag (`pe_bag_ER`)

Conditional actual polyethylene protective bag external return received event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a whole polyethylene bag at plant production mix, CAS9002-88-4; it is not polyethylene resin, polypropylene/PET film or foam. Use the actual complete PE protective bag with declared closures, wet state and supply/return condition; no fixed thickness or reuse life.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Paper wrapping tissue (`tissue_P`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual paper wrapping tissue separate paid procurement receipt event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Paper wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Paper wrapping tissue (`tissue_I`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual paper wrapping tissue first non-purchased external ingress event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Paper wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Paper wrapping tissue (`tissue_ER`)

Conditional actual paper wrapping tissue external return received event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Paper wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene foam insert (`foam_P`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual polyethylene foam insert separate paid procurement receipt event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Polyethylene foam insert
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene foam insert (`foam_I`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual polyethylene foam insert first non-purchased external ingress event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Polyethylene foam insert
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene foam insert (`foam_ER`)

Conditional actual polyethylene foam insert external return received event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Polyethylene foam insert
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Reusable wooden pallet (`pallet_P`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual reusable wooden pallet separate paid procurement receipt event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass family is a complete manufactured wooden load platform at plant production mix; this card is one actual wooden pallet, not a loose repair block, whole machine or fixed EURO specification. Record real components, retained moisture, new/used condition and owner; no default trips or life and no duplicate separate procurement of integral parts.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Reusable wooden pallet (`pallet_I`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual reusable wooden pallet first non-purchased external ingress event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass family is a complete manufactured wooden load platform at plant production mix; this card is one actual wooden pallet, not a loose repair block, whole machine or fixed EURO specification. Record real components, retained moisture, new/used condition and owner; no default trips or life and no duplicate separate procurement of integral parts.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Reusable wooden pallet (`pallet_ER`)

Conditional actual reusable wooden pallet external return received event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass family is a complete manufactured wooden load platform at plant production mix; this card is one actual wooden pallet, not a loose repair block, whole machine or fixed EURO specification. Record real components, retained moisture, new/used condition and owner; no default trips or life and no duplicate separate procurement of integral parts.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### HDPE lubricant bottle (`bottle_P`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual hdpe lubricant bottle separate paid procurement receipt event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: HDPE lubricant bottle
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### HDPE lubricant bottle (`bottle_I`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual hdpe lubricant bottle first non-purchased external ingress event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: HDPE lubricant bottle
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### HDPE lubricant bottle (`bottle_ER`)

Conditional actual hdpe lubricant bottle external return received event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: HDPE lubricant bottle
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Steel lacquer supply can (`tin_P`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual steel lacquer supply can separate paid procurement receipt event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a steel can, with no specified coating, food-canning route or supplier geography. Use only the actual complete steel lacquer-supply can within its native small-container class (capacity not exceeding300L, no mechanical/thermal equipment or compressed/liquefied-gas service), confirmed from the real article. No can-body/ends duplication, raw steel or whole lacquer preparation substitution. Retained residue/water belongs to a disjoint whole-content/tare ledger; a discarded contaminated can uses its actual Waste route.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Steel lacquer supply can (`tin_I`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual steel lacquer supply can first non-purchased external ingress event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a steel can, with no specified coating, food-canning route or supplier geography. Use only the actual complete steel lacquer-supply can within its native small-container class (capacity not exceeding300L, no mechanical/thermal equipment or compressed/liquefied-gas service), confirmed from the real article. No can-body/ends duplication, raw steel or whole lacquer preparation substitution. Retained residue/water belongs to a disjoint whole-content/tare ledger; a discarded contaminated can uses its actual Waste route.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Steel lacquer supply can (`tin_ER`)

Conditional actual steel lacquer supply can external return received event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a steel can, with no specified coating, food-canning route or supplier geography. Use only the actual complete steel lacquer-supply can within its native small-container class (capacity not exceeding300L, no mechanical/thermal equipment or compressed/liquefied-gas service), confirmed from the real article. No can-body/ends duplication, raw steel or whole lacquer preparation substitution. Retained residue/water belongs to a disjoint whole-content/tare ledger; a discarded contaminated can uses its actual Waste route.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Trumpet carrying case (`case_P`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual trumpet carrying case separate paid procurement receipt event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Trumpet carrying case
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Trumpet carrying case (`case_I`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual trumpet carrying case first non-purchased external ingress event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; first non-purchased external ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Trumpet carrying case
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Trumpet carrying case (`case_ER`)

Conditional actual trumpet carrying case external return received event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Trumpet carrying case
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Wood pallet repair block (`pallet_repair_wood`)

One actual separately supplied repair block; not a whole pallet. Retain new influx plus complete closing wet asset mass.

- Selected flow: Wood pallet repair block
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Liquid water added to packaging (`pack_water_in`)

Only real separately added liquid water not already inside whole wet P/I. X_in removes overlap with other incoming flow terms only; closing wet-stock retention never cancels actual influx.

- Selected flow: Liquid water added to packaging
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Metalworking machine service (`asset_machine`)

Actual attributable machine service in hours with measured utilisation and supplier coverage; physical machine stock and acquisition are recorded separately, no fixed lifetime or whole machine per kg.

- Selected flow: Metalworking machine service
- Flow property / unit: Duration / h
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `ilcd-attributional-2010`

###### Trumpet forming jig service (`asset_jig`)

Actual jig service measured by real use hours and replacement history; inherited unused service can carry, already performed service cannot be removed because FG remains in stock.

- Selected flow: Trumpet forming jig service
- Flow property / unit: Duration / h
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `ilcd-attributional-2010`

###### Acquired metalworking machine (`asset_acquired`)

Only actual external whole-machine asset receipt with independent gross kg and history; no duplicate service-provider burden purchase. Separate asset mass from attributed service dimensions.

- Selected flow: Acquired metalworking machine
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `ilcd-attributional-2010`

##### Elementary flows

###### Atmospheric water vapour uptake by packaging (`pack_humidity`)

Actual natural water-vapour uptake by this separately balanced packaging pool; measure independently in kg. Keep new moisture influx and full wet closing stock. This is not liquid repair water; if already in a measured whole wet ingress, remove only that same-side overlapping flow term. Do not duplicate humidity measured under fg_service for the identical pool/event.

- Selected flow: Atmospheric water vapour uptake by packaging
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Corrugated shipping carton (`carton_S`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_EO`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene protective bag (`pe_bag_S`)

Conditional actual polyethylene protective bag gross physical shipment event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a whole polyethylene bag at plant production mix, CAS9002-88-4; it is not polyethylene resin, polypropylene/PET film or foam. Use the actual complete PE protective bag with declared closures, wet state and supply/return condition; no fixed thickness or reuse life.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene protective bag (`pe_bag_EO`)

Conditional actual polyethylene protective bag external return sent event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a whole polyethylene bag at plant production mix, CAS9002-88-4; it is not polyethylene resin, polypropylene/PET film or foam. Use the actual complete PE protective bag with declared closures, wet state and supply/return condition; no fixed thickness or reuse life.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Paper wrapping tissue (`tissue_S`)

Conditional actual paper wrapping tissue gross physical shipment event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Paper wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Paper wrapping tissue (`tissue_EO`)

Conditional actual paper wrapping tissue external return sent event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Paper wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene foam insert (`foam_S`)

Conditional actual polyethylene foam insert gross physical shipment event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Polyethylene foam insert
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene foam insert (`foam_EO`)

Conditional actual polyethylene foam insert external return sent event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Polyethylene foam insert
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Reusable wooden pallet (`pallet_S`)

Conditional actual reusable wooden pallet gross physical shipment event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass family is a complete manufactured wooden load platform at plant production mix; this card is one actual wooden pallet, not a loose repair block, whole machine or fixed EURO specification. Record real components, retained moisture, new/used condition and owner; no default trips or life and no duplicate separate procurement of integral parts.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Reusable wooden pallet (`pallet_EO`)

Conditional actual reusable wooden pallet external return sent event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass family is a complete manufactured wooden load platform at plant production mix; this card is one actual wooden pallet, not a loose repair block, whole machine or fixed EURO specification. Record real components, retained moisture, new/used condition and owner; no default trips or life and no duplicate separate procurement of integral parts.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### HDPE lubricant bottle (`bottle_S`)

Conditional actual hdpe lubricant bottle gross physical shipment event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: HDPE lubricant bottle
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### HDPE lubricant bottle (`bottle_EO`)

Conditional actual hdpe lubricant bottle external return sent event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: HDPE lubricant bottle
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Steel lacquer supply can (`tin_S`)

Conditional actual steel lacquer supply can gross physical shipment event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a steel can, with no specified coating, food-canning route or supplier geography. Use only the actual complete steel lacquer-supply can within its native small-container class (capacity not exceeding300L, no mechanical/thermal equipment or compressed/liquefied-gas service), confirmed from the real article. No can-body/ends duplication, raw steel or whole lacquer preparation substitution. Retained residue/water belongs to a disjoint whole-content/tare ledger; a discarded contaminated can uses its actual Waste route.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Steel lacquer supply can (`tin_EO`)

Conditional actual steel lacquer supply can external return sent event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger. Native Product/Mass is a steel can, with no specified coating, food-canning route or supplier geography. Use only the actual complete steel lacquer-supply can within its native small-container class (capacity not exceeding300L, no mechanical/thermal equipment or compressed/liquefied-gas service), confirmed from the real article. No can-body/ends duplication, raw steel or whole lacquer preparation substitution. Retained residue/water belongs to a disjoint whole-content/tare ledger; a discarded contaminated can uses its actual Waste route.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Trumpet carrying case (`case_S`)

Conditional actual trumpet carrying case gross physical shipment event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Trumpet carrying case
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Trumpet carrying case (`case_EO`)

Conditional actual trumpet carrying case external return sent event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Trumpet carrying case
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

##### Waste flows

###### Corrugated shipping carton (`carton_W`)

Conditional actual corrugated shipping carton waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene protective bag (`pe_bag_W`)

Conditional actual polyethylene protective bag waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Polyethylene protective bag
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Paper wrapping tissue (`tissue_W`)

Conditional actual paper wrapping tissue waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Paper wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Polyethylene foam insert (`foam_W`)

Conditional actual polyethylene foam insert waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Polyethylene foam insert
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Reusable wooden pallet (`pallet_W`)

Conditional actual reusable wooden pallet waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Reusable wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### HDPE lubricant bottle (`bottle_W`)

Conditional actual hdpe lubricant bottle waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: HDPE lubricant bottle
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Steel lacquer supply can (`tin_W`)

Conditional actual steel lacquer supply can waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Steel lacquer supply can
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Trumpet carrying case (`case_W`)

Conditional actual trumpet carrying case waste exit event only; collect complete gross leg V independently, including water attached at that event. One material and one direction. P and I are disjoint procurement events; supplier-included ingress retains real mass and one upstream owner. ER is a real external receipt; S includes all gross outward articles; EO records actual external returns; W is a separate outlet only if actually segregated. Opening/closing empty, attached WIP/FG and reusable stocks are all retained. No economic fraction, stock correction, second purchase/provider or credit is applied to V. Whole-content and tare bridge is disjoint; a single mixed waste bin uses only its one Waste exchange and this pool W becomes its non-additive source subledger.

- Selected flow: Trumpet carrying case
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### Removed pallet wood block (`pallet_old_wood`)

One real removed old wood-block Waste outlet; not an automatic whole-pallet retirement or avoided credit.

- Selected flow: Removed pallet wood block
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Liquid water drained from packaging (`pack_water_out`)

Only real separately drained liquid water Waste; X_out removes overlap with other outgoing terms only. Do not assume environmental discharge; treatment/receiver is actual.

- Selected flow: Liquid water drained from packaging
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Retired metalworking machine (`asset_retired`)

Only real segregated external retired-machine Waste gross kg; treatment once, no automatic recycling credit or instantaneous whole-service deduction.

- Selected flow: Retired metalworking machine
- Flow property / unit: Mass / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`pack_vapour`)

Only actual ordinary H2O gas desorption from the separately balanced packaging pool to unspecified air, CAS 7732-18-5, Elementary Mass/kg; isotope/ice aliases are not adopted. Retain full wet closing mass and avoid duplicating fg_service water emission for the same event. Liquid drainage is a different actual outlet.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing cohort D=Q; original-cohort service and its gross legs D=original Q_H. No further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | shared manufacturing and service | Use attributional modelling only where consistent with the study decision context. First dedicate or physically subdivide instrument configurations and service cohorts; then virtual subdivision assigns each exclusively caused exchange. Buying one complete valve block or preparation does not justify allocating its constituents a second time. | `ilcd-attributional-2010` |
| allocation_causality | remaining individual exchanges | For each remaining shared exchange identify and quantify determining physical causality; use measured machine demand/time, material embodiment, actual heating requirement or a supported service driver only where it determines that exchange. Do not freely choose mass/count/time/economics or a single universal key. Reconcile shares to observed totals and document limitations. | `ilcd-attributional-2010` |
| allocation_residual | true common residual process | Only demonstrably inseparable residual after subdivision and exchange-specific causality may use contemporaneous actual values of true co-functions at the same common process gate and actual condition/quantity. Derive any translated market value by removing downstream-only finishing/packing/transport. No fixed price or share; lack of reliable values is an unresolved allocation issue, not permission to assign arbitrary economics. Apply the residual key once to that residual vector, never to gross physical legs. | `ilcd-attributional-2010` |
| allocation_history | cohort vectors | Keep one owner per supply, inherited opening/closing vector and work increment. Only justified true other-function/cohort handover is T_other once; ordinary waste/sale is not. Performed original-cohort services and released-FG manufacturing are not unused stock. Capital equipment/jig physical stocks, repairs, actual new/old parts and installed fluids remain separate from service burdens and measured utilisation; no fixed asset lifetime or a whole machine per kg. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect unnormalised raw observations only. Aggregation per reference flow declares the final basis; collection does not divide. Complete calc_raw and the applicable independent burden/gross attribution, then calc_quotient executes once per dimension. Gross V is not stock-corrected or economically allocated; performed original-cohort service is not deducted for closing FG.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | release | finished | measurement | serial; configuration; pitch; metal_grade; finish; supplied_mouthpiece; included_components; acceptance_event; first_release_time; measured_net_mass_kg; scale_calibration; failures; held_FG_O_C; original_cohort; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Weigh each complete first-accepted same-configuration instrument on a calibrated scale, excluding disposable packaging, carrying case and separate accessory bottles. Retain actual supplied usable mouthpiece mass only if included. Sum measured net kg over the full cohort directly; serial/event reconciliation prevents duplicate release. Do not infer mass from count, tube geometry or a native secondary coefficient. | kg | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_material_components | components | each actual supplied material or component | measurement | row_id; lot; supply_form; grade; alloy_or_formulation_assay; whole_preparation; make_buy; upstream_completed_work; raw_receipts; rate_or_total; raw_unit; density_state; O_C_raw_WIP_nonWIP; per_exchange_history_vector; owner; uncertainty; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Measure each whole actual supply and disjoint issued amount, with raw stock/WIP and unassigned non-WIP stores separately. Identify all actual components of supplied assemblies in a non-additive BOM; separate only independently supplied atoms. Supplier included packing is its actual I leg; one upstream owner. Whole bought mixtures are not procured again as active ingredients and carrier; actual onsite preparation adds real separate ingredients/energy/loss. | kg; original native extensive unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_material_assembly_finish | assembly_finish | each actual supplied material or component | measurement | row_id; lot; supply_form; grade; alloy_or_formulation_assay; whole_preparation; make_buy; upstream_completed_work; raw_receipts; rate_or_total; raw_unit; density_state; O_C_raw_WIP_nonWIP; per_exchange_history_vector; owner; uncertainty; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Measure each whole actual supply and disjoint issued amount, with raw stock/WIP and unassigned non-WIP stores separately. Identify all actual components of supplied assemblies in a non-additive BOM; separate only independently supplied atoms. Supplier included packing is its actual I leg; one upstream owner. Whole bought mixtures are not procured again as active ingredients and carrier; actual onsite preparation adds real separate ingredients/energy/loss. | kg; original native extensive unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_utilities_components | components | each individual electricity water fuel heat carrier | measurement | row_id; submeter; supplier_boundary; voltage; geography; thermal_technology; total_or_rate; time_interval; original_unit; actual_gas_state; measured_density; gas_composition; carrier_mass; thermal_states; enthalpy; return_mass; O_C_charge; owner; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Collect independent actual meters and stock/flow observations. Convert raw units before attribution. Metered electricity kWh uses 3.6 MJ/kWh; already integrated gas/liquid volume is not integrated again. Density belongs to that actual substance/state, not water by default or secondary native coefficients. Keep delivered energy, physical carriers and external Product returns separate with one supplier water/energy owner. | MJ; kg; m3; original meter unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_utilities_assembly_finish | assembly_finish | each individual electricity water fuel heat carrier | measurement | row_id; submeter; supplier_boundary; voltage; geography; thermal_technology; total_or_rate; time_interval; original_unit; actual_gas_state; measured_density; gas_composition; carrier_mass; thermal_states; enthalpy; return_mass; O_C_charge; owner; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Collect independent actual meters and stock/flow observations. Convert raw units before attribution. Metered electricity kWh uses 3.6 MJ/kWh; already integrated gas/liquid volume is not integrated again. Density belongs to that actual substance/state, not water by default or secondary native coefficients. Keep delivered energy, physical carriers and external Product returns separate with one supplier water/energy owner. | MJ; kg; m3; original meter unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_utilities_release | release | each individual electricity water fuel heat carrier | measurement | row_id; submeter; supplier_boundary; voltage; geography; thermal_technology; total_or_rate; time_interval; original_unit; actual_gas_state; measured_density; gas_composition; carrier_mass; thermal_states; enthalpy; return_mass; O_C_charge; owner; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Collect independent actual meters and stock/flow observations. Convert raw units before attribution. Metered electricity kWh uses 3.6 MJ/kWh; already integrated gas/liquid volume is not integrated again. Density belongs to that actual substance/state, not water by default or secondary native coefficients. Keep delivered energy, physical carriers and external Product returns separate with one supplier water/energy owner. | MJ; kg; m3; original meter unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_species_components | components | each actual species and medium | measurement | row_id; molecular_identity; CAS; phase; source; fossil_origin; receiver_medium; sampling_point; gas_or_liquid_total; actual_rate; interval; concentration; reference_state; independent_mass; detection_limit; element_balance; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Measure independent actual molecule/state/receiver evidence and flow totals. Only a measured rate is integrated; concentration multiplies the matching volume/mass basis once. Total metal/ions/COD/VOC/NOx/PM are quality indicators and cannot name a molecule. Distinguish natural uptake/desorption, free/phase water, reaction and structural water; unknown remains unknown. | kg; actual concentration/volume/rate unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_species_assembly_finish | assembly_finish | each actual species and medium | measurement | row_id; molecular_identity; CAS; phase; source; fossil_origin; receiver_medium; sampling_point; gas_or_liquid_total; actual_rate; interval; concentration; reference_state; independent_mass; detection_limit; element_balance; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Measure independent actual molecule/state/receiver evidence and flow totals. Only a measured rate is integrated; concentration multiplies the matching volume/mass basis once. Total metal/ions/COD/VOC/NOx/PM are quality indicators and cannot name a molecule. Distinguish natural uptake/desorption, free/phase water, reaction and structural water; unknown remains unknown. | kg; actual concentration/volume/rate unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_species_release | release | each actual species and medium | measurement | row_id; molecular_identity; CAS; phase; source; fossil_origin; receiver_medium; sampling_point; gas_or_liquid_total; actual_rate; interval; concentration; reference_state; independent_mass; detection_limit; element_balance; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Measure independent actual molecule/state/receiver evidence and flow totals. Only a measured rate is integrated; concentration multiplies the matching volume/mass basis once. Total metal/ions/COD/VOC/NOx/PM are quality indicators and cannot name a molecule. Distinguish natural uptake/desorption, free/phase water, reaction and structural water; unknown remains unknown. | kg; actual concentration/volume/rate unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_waste_components | components | each actual external waste outlet | measurement | row_id; actual_bin; source_pool; gross_wet_mass; solids_water_assay; contaminants; segregation; receiver; treatment_owner; treatment_boundary; ordinary_waste_or_true_function; disposal_sale; burden_history; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Weigh real segregated outlets independently. When one mixed bin is exported, retain just that one Waste exchange; source pools are measured non-additive subledgers summing to the wet total. Treat once; internal recovery loops cancel but real handling/energy/loss remain. Ordinary waste/sale never subtracts already incurred burdens. | kg | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_waste_assembly_finish | assembly_finish | each actual external waste outlet | measurement | row_id; actual_bin; source_pool; gross_wet_mass; solids_water_assay; contaminants; segregation; receiver; treatment_owner; treatment_boundary; ordinary_waste_or_true_function; disposal_sale; burden_history; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Weigh real segregated outlets independently. When one mixed bin is exported, retain just that one Waste exchange; source pools are measured non-additive subledgers summing to the wet total. Treat once; internal recovery loops cancel but real handling/energy/loss remain. Ordinary waste/sale never subtracts already incurred burdens. | kg | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_waste_release | release | each actual external waste outlet | measurement | row_id; actual_bin; source_pool; gross_wet_mass; solids_water_assay; contaminants; segregation; receiver; treatment_owner; treatment_boundary; ordinary_waste_or_true_function; disposal_sale; burden_history; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Weigh real segregated outlets independently. When one mixed bin is exported, retain just that one Waste exchange; source pools are measured non-additive subledgers summing to the wet total. Treat once; internal recovery loops cancel but real handling/energy/loss remain. Ordinary waste/sale never subtracts already incurred burdens. | kg | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_service | fg_service | each real original-cohort FG work and utility leg | measurement | row_id; serial; original_release_Q_H; H_start_end; gross_G_R; receipt_shipping_mass; changed_parts_water; actual_work; permission; posttests; acceptance; disposition; historical_manufacture_vector; incremental_service_vector; performed_or_unused_charge; raw_FG_O_C; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Retain all real receipt/storage/handling/packing/shipping/returns and rework including failed or unauthorised events. Manufacturer/spec permission plus posttests establishes continued conformity only, never whether occurred work exists. Keep actual naturally changed water and component masses. Link original manufacturing history without another supplier purchase; already performed H work stays assigned, only unused/unassigned charges carry. First-release denominator remains original Q_H; no net-delivery reinterpretation. | kg; MJ; m3; h; original native unit | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_pack | packaging_assets | each material P I ER S EO W and disjoint repair/water leg | measurement | material_pool; row_id; direction; P; I; ER; S_gross; EO; W; wet_empty_attachedWIP_attachedFG_reusable_O_C; owner; whole_article_contents_tare; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence; production_Q_or_original_Q_H; H; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | For every actual packaging pool use O + P + I + ER + F_in - X_in = C + S_gross + EO + W + F_out - X_out. O/C are complete wet empty, attached WIP/FG and reusable stocks once. F_in/F_out are independently measured real additional material, part or water contributions entering/leaving outside other gross terms. X removes ONLY proved duplicate portions already in an OTHER same-side actual flow term, never stocks, the opposite side, card existence or an assumption. New repair matter/water retained at closing remains both real influx and complete wet closing mass. Use whole wet articles OR a disjoint measured constituent/water decomposition; explicit paired component-to-article internal handoffs cancel on consolidation. One actual mixed external outlet is represented by one independently measured total OR complete independently measured origin-W partitions with one provider and nonadditive composition subledgers; never add both, force unknown shares from a residual or duplicate segregated outlets. Keep actual origin process/event and collection gate; cross-process source contributions require matched internal handoffs, not an invented second external disposal.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |
| cp_asset | packaging_assets | each asset article part fluid or service dimension | measurement | row_id; actual_asset; complete_wet_mass; new_old_parts; installed_fluid; O_C_stock; gross_receipt_return_discard; service_hours; actual_capacity_use; service_owner; unused_charge; repair; original_Q_H_H; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | Keep complete physical asset custody and measured service burden dimensions separate; document acquisition owner, actual utilisation and repair/replacement history without fixed life or whole asset per kg. Actual new/old parts and fluid species require their own cards. New parts/fluid retained in closing remain both influx and full wet closing mass. No duplicate service provider purchase. | kg; h | each event and opening/closing | complete observed cohort and original-cohort H including failures and zero output | actual supplier site process and external gate | per reference flow | calibration; original logs; sampling; provider boundary; uncertainty; gross/burden reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all observations | Convert raw rate/total units to the actual native extensive unit before attribution. Integrate only real rates over their observed interval; density and composition are independently evidenced for that substance/state. Measured electricity: E_MJ=3.6*E_kWh. No reference denominator is applied here. | raw_observation; raw_unit; interval; actual_state; density; composition | U_native | `ilcd-attributional-2010` |
| calc_manufacture | manufacturing burden dimensions | A_c=B_open+U_burden-B_close-T_other, elementwise after dedicated/subdivided and exchange-specific causality or justified true residual allocation. B_close excludes released FG already assigned to Q and already performed original-cohort service. T_other exists only for a true other-function/cohort justified handover once; ordinary waste/sales remain in A_c. Stock-corrected U_burden has no duplicate stock deduction. Physical gross V is independent. U_burden is the exchange-specific upstream and actual foreground burden vector assembled once from measured native observations and compatible provider boundaries; raw U_native and full gross physical V_i are not that vector. | B_open; U_burden; B_close; T_other; attribution_record | A_c | `ilcd-attributional-2010` |
| calc_service | original-cohort service burden dimensions | A_H=C_open+U_H-C_unused_close-T_other_H after actual attribution. Historical manufacture is not another U_H purchase. Only genuinely unused/unassigned service charges carry; work already performed stays assigned despite closing FG. Keep all failures and unauthorised work plus observed H; D is original first-release Q_H. | C_open; U_H; C_unused_close; T_other_H; Q_H; H | A_H | `ilcd-attributional-2010` |
| calc_physical | all gross physical card dimensions | V_i is the complete measured actual leg in that direction and native extensive unit. No B_open+U-B_close, economic share or burden vector replaces V_i; no stock correction or allocation is applied to a gross card. Deduplicate only genuinely overlapping same-side flow terms X. Keep new influx plus full wet closing stock. These physical disclosures create no second procurement/provider burden or credit; associated burden dimension is separately owned once in A_c/A_H. | gross_event; direction; native_unit; same_side_overlap | V_i | `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | q=N/D. Execute this sole quotient once for each tagged dimension: physical cards N=V_i; burden result N=A_c or A_H separately. D=Q for first-release manufacture; D=original Q_H for H services and their physical legs. Reference output is 1 kg. Q and Q_H are measured first-accepted net whole-instrument kg, never delivered mass. D=0 retains raw real flows/burdens with no unit q. Cards and aggregation reference this exact result without another division. H selects the actually observed interval only; never divide its accrued load by H again. Observed held/returned FG keeps original Q_H without subtracting prior manufacture or performed service. | N; D; V_i; A_c; A_H; Q; Q_H; H | q | `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all cards | Record actual complete product/component/material/species identity and every native restriction, CAS, form, route, grade, phase, geography, receiver, reference property and actual provider coverage. Unknown is disclosed; replace incompatible bindings, never invent a matching supplier. | full native records; supplier specifications; configuration and acceptance |
| dq_measurement | all protocols | Preserve raw calibrated observations, original units, rate versus total, configuration/cohort/site/horizon, each failure and uncertainty/detection limits. Verify the one reference output, denominator and sole quotient in both languages; a finite check is not verification of future plant data. | calibration; raw metering; serial acceptance; raw-to-result trace |
| dq_completeness | all gates | Require complete raw/WIP/FG and per-flow inherited vectors, gross legs, actual packing six events, asset/part/fluid stocks and once-only providers. Do not conceal actual flows in zero or unspecified combined input collections; a single actual mixed waste outlet is explicitly supported by measured source subledgers. | physical/element/species balances; supply-owner matrix; waste receipts |
| dq_evidence | all sources | Manufacturer originals support qualitative route/terminal and countercontext only. No universal composition, mass, dimensions, tolerance, dose, process settings, emission/yield/life factor is inferred. ILCD allocation is attributional; it is not trumpet chemistry. Report ordinary collection/provider gaps separately from any true core hold and pending independent methodology/translation review. | source scope and limitations; conflicting context; gap register |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_terminal | reference and all cards | Verify one complete functioning lacquered piston-valve brass trumpet and its supplied configuration against positive primary and full native identity. Hard material/form/route/phase/type/media conflicts block the affected binding; a genuinely unconfirmed whole core identity leaves draft/unmapped/unusable. Ordinary auxiliary/provider collection gaps do not establish a core hold. | `yamaha-structure`; `yamaha-final`; `un-cpc3-notes` |
| validation_q | first release and services | Count first accepted net mass once including closing FG; cancel paired internal Q/parts transfers. No delivery/reinspection/rework creates new production. Original service cohort denominator and observation horizon remain explicit. Q=0 gives no unit result; all failed/unauthorised actual work and losses remain. | `yamaha-final`; `ilcd-attributional-2010` |
| validation_inventory | all inventory rows | Every card represents one atom/event, preserves all qualifiers, matching official localized UUID name, complete native restrictions and correct extensive property/unit. All collection records retain unnormalised raw units; one quotient calculates each physical V or independently attributed burden numerator exactly once. Cards and aggregation only reference that one result. | `ilcd-attributional-2010` |
| validation_balances | manufacture FG and combined gates | Reconcile complete wet physical gates, relevant independent elements/species, opening/closing raw/WIP and per-flow burden vectors, packing six events, real assets/repairs/fluids, actual gas and thermal carriers. Keep new influx and full wet closing stocks together. No economic scaling of gross mass, two-unknown residual, indicator-to-molecule conversion or duplicate mixed-waste treatment. | `ilcd-attributional-2010` |
| validation_scope | all claims | Keep native identity evidence distinct from manufacturing qualitative evidence and allocation methodology. No default BOM, alloy fraction, mass per instrument, density from secondary property, film thickness, tuning/leak tolerance, test value, heat/time/pressure recipe, life, yield, energy factor, emission factor or approval claim. Scientific/translation review and accepted mapping/publication are independent. | `yamaha-final`; `yamaha-finish`; `adams-eb`; `ilcd-attributional-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Configuration/route-specific attributional first-release manufacture; actual original-cohort services as separate Q_H/H results |
| excluded_use | Whole-38330 coverage, industry average, repacking as manufacture, other instruments/finishes, default factors, certification/approval or avoided credits |
| required_metadata | complete acoustic trumpet configuration; piston valve system; actual tuning pitch and specification; bell lead main and valve slide configuration; actual alloys grades and supply forms; onsite versus purchased component work; lacquer formulation and application curing route; supplied mouthpiece and usable accessories scope; net mass excluding packing case and separate accessory bottles; calibrated weighing and unique first acceptance; production cohort Q and closing released FG; original service cohort Q_H and observed H; raw WIP and unassigned service inherited vectors; complete gross physical legs and packaging ownership; actual postwork permission tests and disposition; native limits and provider coverage |
| required_quality_disclosure | Measured and unknown, all conditions, ordinary auxiliary/provider gaps versus true core holds, native restrictions, once-only attribution, gross/burden reconciliation, representativeness/uncertainty and unreviewed scope |
| update_trigger | Terminal/configuration/alloy/supply form, finish route, native/provider, actual atom, Q gate, service cohort, allocation or evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| yamaha-bell | literature | Manufacturing the bell; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/; retrieval 2026-10-20 UTC | Qualitative Manufacturing the bell context for actual trumpet manufacture only; no default dimensions, dose, tolerance, recipe or factor. All Yamaha pages are one corporate source family. |
| yamaha-casing | literature | Manufacturing the valve casings; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing002.html; retrieval 2026-10-20 UTC | Qualitative Manufacturing the valve casings context for actual trumpet manufacture only; no default dimensions, dose, tolerance, recipe or factor. All Yamaha pages are one corporate source family. |
| yamaha-piston | literature | Manufacturing the pistons; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing003.html; retrieval 2026-10-20 UTC | Qualitative Manufacturing the pistons context for actual trumpet manufacture only; no default dimensions, dose, tolerance, recipe or factor. All Yamaha pages are one corporate source family. |
| yamaha-mouthpipe | literature | Manufacturing the mouth pipe; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing004.html; retrieval 2026-10-20 UTC | Qualitative Manufacturing the mouth pipe context for actual trumpet manufacture only; no default dimensions, dose, tolerance, recipe or factor. All Yamaha pages are one corporate source family. |
| yamaha-final | literature | Final assembly and coating; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing005.html; retrieval 2026-10-20 UTC | Qualitative Final assembly and coating context for actual trumpet manufacture only; no default dimensions, dose, tolerance, recipe or factor. All Yamaha pages are one corporate source family. |
| yamaha-finish | literature | Choosing on the basis of the material and the coating; https://www.yamaha.com/en/musical_instrument_guide/trumpet/selection/; retrieval 2026-10-20 UTC | Qualitative Choosing on the basis of the material and the coating context for actual trumpet manufacture only; no default dimensions, dose, tolerance, recipe or factor. All Yamaha pages are one corporate source family. |
| yamaha-structure | literature | Learn the names of the parts; https://www.yamaha.com/en/musical_instrument_guide/trumpet/mechanism/; retrieval 2026-10-20 UTC | Qualitative Learn the names of the parts context for actual trumpet manufacture only; no default dimensions, dose, tolerance, recipe or factor. All Yamaha pages are one corporate source family. |
| adams-eb | literature | Adams Eb Trumpet; https://www.adams-music.com/en/brass/trumpet/eb; retrieval 2026-10-20 UTC | Independent whole-product/configuration countercontext: supplied case and oils but no standard mouthpiece; default plate versus optional lacquer/raw; no common plant BOM or quantitative reuse. |
| yamaha-manual | handbook | Trumpet Cornet Flugelhorn Rotary Trumpet Piccolo Trumpet Owners Manual; https://usa.yamaha.com/files/download/other_assets/8/326908/trumpet_en_om_b0.pdf; retrieval 2026-10-20 UTC | Whole trumpet/piston/slide nomenclature and conditional lubrication/handling; adjacent rotary/cornet/flugelhorn countercontext. Owner instructions provide no factory quantity or permission to restore damaged products. |
| un-cpc3-notes | official_guidance | CPC Version 3.0 Explanatory Notes; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieval 2026-10-20 UTC | CPC 3.0 p.190: whole wind instruments versus electrical instruments and parts; classification only. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA – Detailed guidance, first edition March 2010, 7.9.2–7.9.3 printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and exchange-specific physical causality then true residual same-gate/state market value; accounting synthesis for once-only ownership and explicit uncertainty. Not instrument manufacture chemistry or plant quantities. |
