---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sheetfed-offset-eva-perfect-bound-paperback-books
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sheetfed offset printed, EVA perfect bound educational textbooks

## 1. Scope and Applicability

This manufacturing method selects purchased dry uncoated paper sheets, finished process-free aluminium plates, conventional wet sheetfed offset with absorption/oxidative ink setting, folding/gathering, milled-spine non-reactive EVA perfect binding, a printed flexible uncoated paper cover and three-side trimming. No laminate, varnish, foil, sewn reinforcement, hard case, board pages, pop-up structures, plastic toys or electronic modules are part of the reference construction. Main evidence is the EPA sheetfed process description, a real book printer capability record, a binder manufacturer’s offset/EVA configuration and plate/adhesive technical originals; none supplies a universal recipe.

This PCR covers only printed educational textbooks primarily intended for students or teachers in formal study programmes, within the physical route above. Verify the primary teaching purpose and course or learning structure from the publisher’s specification, job brief and actual contents; a title, subject, reader age or use of a book in a classroom alone is insufficient. The complete CPC 3.0 32210 note includes workbooks, teachers’ manuals, resource materials and interactive materials; these qualify here only as complete printed paper books satisfying every construction and route condition. Electronic modules, inserts and alternative binding remain excluded. Knowledge summaries and/or practice questions are typical in the CPC note, not mandatory features of every textbook. [unsd-cpc3-2025]

General reference books, directories, professional/technical/scholarly books, non-textbook children’s books, other general-interest books, printed music and trade-advertising/commercial catalogues are excluded, even where their manufacturing construction matches. A music, scientific or child-oriented subject does not itself resolve textbook purpose; substantiate primary use in a formal study programme rather than relabelling another category. One broad Printed Matter product identity is retained only for the qualified complete educational textbook, with supplier-background and quantity compatibility independently required. [unsd-cpc3-2025]

Every amount other than the declared reference extent and exact unit conversions is produced by the specified future foreground collection protocols. Conditional cards are a constituent/route survey, not assumed positive flows. An actual extra ingredient, aid, waste, refrigerant or release must be separately identified and measured before a concrete dataset is complete. Record the actual edition/revision, student or teacher audience, subject/course and learning sequence, and the specified text, summaries, exercises and answer material where present. Check these against the approved job proof and finished gathering; no missing, duplicated, misordered or wrong-edition pages may count as accepted textbook output. No source’s historical plant amount, emission rate, retention fraction or supplier formulation is a default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sheetfed-offset-eva-perfect-bound-paperback-books |
| classification_refs | CPC 3.0 32210; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Complete printed educational textbooks primarily for students or teachers in formal study programmes, including workbooks, teachers’ manuals, resource and interactive materials only in the declared sheetfed/uncoated/nonreactive-EVA/unlaminated paperback form. |
| excluded_products | General reference books, directories, professional/technical/scholarly books, non-textbook children’s books, other general-interest books, printed music and trade-advertising/commercial catalogues are outside this PCR; shared manufacture does not confer textbook identity. Also excluded: hardcover, sewn/stitched/spiral/PUR, board/pop-up/toy/electronic products; loose-sheet/folio sets and non-printed handwritten originals; laminated/varnished/foiled/insertion-rich publications; heatset/web, saddle-stitched or loose/folded forms; alternative printing/drying routes, 3D/prototype printing, non-paper substrates, postal/licensing/performance services and integrated paper production. |
| representative_product | Complete educational textbook of one declared edition and student/teacher course design, with uncoated pages, printed flexible paper cover and EVA milled-spine perfect binding. |
| production_route | CTP process-free plate → conventional wet sheetfed offset → absorption/oxidative setting → fold/gather → mill/glue/cover → trim/inspect/dispatch. |
| market_state | Accepted complete educational textbook at printer factory gate; dispatch packaging recorded separately. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide accepted printed educational text and any specified learning/practice/teacher material for a declared formal study programme in the complete bound textbook construction. |
| How much | 1 kg net accepted complete educational textbooks of one declared edition/design; count/page information accompanies mass. |
| How well | Match the approved edition/job proof, legibility/print specification and course/learning sequence; verify complete correctly ordered text, summaries, exercises and answers where actually specified, plus cover and binding integrity with recorded acceptance tests. No universal lifetime, lay-flat performance, paper grammage, learning effect or national textbook standard. |
| How long or cycle | One manufacturing lot at factory gate. Reading/learning service life or educational attainment is not quantified and requires a separately declared service study. |
| reference_flow_link | `finished_book` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | title/design and edition/revision; primary educational purpose for students/teachers in a formal study programme; subject/course, audience and course/learning structure; approved proof and complete text/summaries/exercises/answers where actually specified; sheet/page/copy count; net accepted lot mass; trim dimensions; text/cover paper grade/furnish/grammage/moisture; wet sheetfed conventional ink grade and oil/solvent/carbon origin; process-free plate grade/coating; actual fountain/wash constituents and concentrations; non-reactive EVA formulation and spine/side glue; milling/cover/trim acceptance; absence of excluded structure/finish/cure; factory/period; utilities/provider bases; waste destinations; allocation and uncertainty. |

The broad Printed Matter identity covers mechanically printed paper-substrate material with no mandatory unbound, 3D or postal-service route. This PCR narrows it to accepted complete printed educational textbooks containing all retained pages, cover, ink, EVA glue and any powder, excluding dispatch packaging. The source CPC32690 does not correctly describe this educational subset and the unrelated Paper 3D printing sentence does not establish this route; both remain source-quality debts. Mailing use in the comment is not a postal-service exchange. No arbitrary generic printed-matter, 3D, mailing or intermediate-sheet background may replace the verified actual textbook-manufacturing model. All required qualifiers must appear in dataset metadata, reference-flow notes or equivalent records. Mass-based results do not establish equal reading, learning or durability across designs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net complete-publication mass at measured moisture, including retained paper/cover/ink/EVA/powder and excluding dispatch packaging; collect using cp_finished. |
| `same_denominator` | all inventory rows | reference-product Mass | kg | All amounts, protocol aggregation and calculations use per 1 kg reference flow. First close physical lot records, then divide compatible unallocated physical exchanges by the same accepted net lot mass; never use input paper tonnes, rejected-book mass or printed sheets as the denominator. |
| `formulation_basis` | chemical rows | actual supplied or active-component Mass | kg | Preserve supplied formulation versus active ingredient, concentration, purity and carrier-water ownership. Supplier amounts and backgrounds must represent the same basis; no default SDS fraction, solution density or raw-material mass multiplier. |
| `utility_basis` | electricity and gas separately | Net calorific value; Volume | MJ; m3 | Electricity has exact 1 kWh = 3.6 MJ conversion. Preserve gas meter T/P, composition, wet/dry and compressibility, and match provider m3. Purchased steam/net heat is not in this selected route; an MJ property alone would not establish delivered enthalpy or pressure. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry unprinted purchased paper sheets and finished process-free coated aluminium plates received at the print plant, with actual supplied ink/EVA and chemicals. |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | Only the route-qualified complete printed educational-textbook subset of CPC 3.0 32210; verify primary formal-study purpose and actual course/learning structure. No other CPC category is included; this authoring scope does not establish accepted mapping or whole-leaf coverage. |
| recursive_input_rule | Purchased complete same-category bound publications are not raw paper inputs. Declare any such rework/resale separately, trace its actual upstream production and prohibit duplicate final reference output or invented recursion cut-off. |
| upstream_dataset_requirement | Actual supplier paper/pulp, complete plate, formulated ink/EVA, chemicals, electricity and packaging with compatible quantity/state and production/delivery/treatment routes. |
| disclosure | Site/period/job designs, all included/excluded stages, suppliers, cure/heat distinction, outsourcing, flows without providers/UUIDs, physical balances and burden allocation; downstream teaching/reading, distribution, use and disposal excluded. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_complete_route` | all datasets | Include CTP/prepress, make-ready, text and cover wet offset, setting/stacking, folding/gathering, spine milling, EVA spine/side gluing, cover attachment, three-side trimming, quality control, packing and attributable utilities/collection. Scope starts at dry purchased paper and finished process-free plates; no premade printed book block replaces printing. | `epa-eiip-2002`; `kodak-sonora-process-free`; `mm-antaro-perfect-binding` |
| `b_structure_guard` | applicability | Require a flexible unlaminated paper cover and uncoated text sheets with non-reactive EVA perfect binding. Exclude hard cases, cloth, sewing, staples/spirals, PUR, board-page/three-dimensional/toy/electronic books, inserts, foil/varnish/film finishing, waterless/digital/gravure/flexographic, heatset/coldset web, UV/EB and integrated pulping/papermaking. Any actual excluded operation needs a separately assessed methodology before reuse. Loose-sheet/folio sets, non-printed manuscripts, electronic text, postal/licensing/retail/performance services, non-paper substrates and 3D prototypes remain excluded. | `mm-antaro-perfect-binding`; `epa-ctg-2006`; `walsworth-book-printing`; `unsd-cpc3-2025` |
| `b_educational_content_guard` | educational textbook applicability | Require documented primary educational use by students or teachers in a formal study programme and actual course/learning structure, in addition to every selected physical route condition. Check publisher/job specifications and actual contents, edition/revision and audience. Other book, directory, printed-music and commercial categories do not inherit applicability from shared construction; supplier capabilities and subject labels alone cannot qualify a textbook or an actual site route. | `unsd-cpc3-2025`; `epa-eiip-2002`; `mm-antaro-perfect-binding` |
| `b_upstream` | supplied inputs | Link actual paper/pulp, plate coating/aluminium, formulated ink, chemical, formulated EVA adhesive and packaging production/delivery backgrounds. Pulp/chemical recovery, bleaching, mill fuel/steam and wastewater remain within the actual paper supplier model when included there. The paper BREF informs that upstream coverage; sawmill or plywood evidence does not substitute for papermaking. Do not re-add the same upstream component burdens to complete formulation backgrounds. | `jrc-paper-bref-2015`; `epa-ctg-2006` |
| `b_physical_links` | internal stages | One aggregated manufacturing unit preserves independent stage meters and physical ledgers. Printed signatures, printed covers and gathered blocks pass between stages at identical outgoing/incoming physical quantities, including moisture and ink/glue state; they are not additional final-reference outputs. Internal rework is recorded as circulation rather than an external input/output or a second avoided burden. | `epa-eiip-2002`; `mm-antaro-perfect-binding` |
| `b_emission_boundary` | outdoor releases and wastes | Count actual factory releases after capture/abatement, with species and media; indoor exposure, transferred wastes and collected dust are separate facts. Auxiliary gas heat is conditional and not conventional ink drying. Heatset solvent evaporation factors and UV/EB electricity cannot be assigned to this non-heatset route. Offsite waste treatment and supplied-electricity emissions are linked once as backgrounds. | `epa-ctg-2006`; `epa-gas-ap42-2026`; `epa-method18-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `book_manufacture` | Sheetfed offset printed, EVA perfect bound educational textbooks | required | verified formal-study educational purpose, actual course/learning design and selected complete bound-textbook construction | foreground | 1 kg accepted net complete educational textbooks |

Physical stage graph: file/prepress → CTP plate imaging → body/cover sheetfed wet offset and setting → fold/gather → spine milling/EVA glue/cover pressing → trim/accept → pack/dispatch. Stage-linked signatures, covers and blocks remain internal to book_manufacture; preserve identical link quantities and independent stage meter/job records. The inventory below contains factory-boundary exchanges once.

Retain complete dispatch, supply-packaging and maintenance physical accounts: full shipped bound-publication construction, delivered boxes/film, their independent offcuts, incoming sheet/plate/ink/glue packaging and cores, pallet/container stocks and returns, press blankets/rollers/filters/replacement parts and actual lubricants or hydraulic oils. Each actual added material/waste requires a verified atomic exchange and compatible supplier/receiver basis before completeness; no default dose, loss, replacement lifetime or omission. A lubricant candidate with a hard calorific-value descriptor needs actual numeric specification/basis proof. Keep infrastructure/exclusion decisions explicit and reconcile ambient/combustion intake air/oxygen with the water/carbon ledgers.

### Process: Bound paper publication manufacture (`book_manufacture`)

#### Inputs

##### Product flows

###### Uncoated printing, writing and packaging paper (`body_paper`)

Purchased dry uncoated chemical-pulp printing paper in sheets, without preprinting. Record furnish, recycled fraction, grammage, moisture, sheet format and supplier; the broad uncoated-paper identity does not supply those values. Link actual papermaking/transport background once.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_materials. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-paper-bref-2015`; `epa-eiip-2002`

###### Uncoated printing, writing and packaging paper (`cover_stock`)

Purchased dry uncoated heavyweight paper for one flexible soft cover; no casing board, cloth, film laminate, jacket or surface varnish. Measure cover stock separately from text stock even when both use the same broad paper identity.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_materials. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `walsworth-book-printing`; `mm-antaro-perfect-binding`

###### Finished process-free aluminium offset printing plate (`plate`)

Purchased finished photosensitive-coated aluminium plate, imaged by CTP and developed on press. A cut/grained aluminium substrate is not the finished plate. Capture plate count, measured mass, supplier coating/grade, make-ready sheets and coating fate; no developer bath or plate-rinse inputs in this selected route.

- Selected flow: Finished process-free aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_materials. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `kodak-sonora-process-free`

###### Solvent-based Flat Printing Ink (`ink_black`)

This broad non-water solvent/oil-based flat-printing-ink identity has positive offset/lithographic synonyms and no hard heatset or radiation-curing route. Its general examples of glycol-esters and classification by heat needed do not prescribe the actual formulation or force a dryer. Adopt only for the actual compatible conventional oil-based paste of this colour, setting by absorption/oxidation; preserve full SKU/composition, carbon origin and supplier/background matching. Water-based, UV/EB and incompatible heatset formulations remain excluded. One as-supplied black conventional paste-ink formulation used on the text or cover. Record each job/colour separately, supplier grade, SDS/CAS constituents, mineral distillate, soybean/linseed oil, resin/pigment/wax shares and carbon origin. A soy or mineral-oil-free claim is not a complete recipe or proof of zero VOC. Do not separately add ingredients already in a linked full-ink background. Applicable only if this colour is used.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `wadden-voc-1995`; `huber-conventional-ink`

###### Solvent-based Flat Printing Ink (`ink_cyan`)

This broad non-water solvent/oil-based flat-printing-ink identity has positive offset/lithographic synonyms and no hard heatset or radiation-curing route. Its general examples of glycol-esters and classification by heat needed do not prescribe the actual formulation or force a dryer. Adopt only for the actual compatible conventional oil-based paste of this colour, setting by absorption/oxidation; preserve full SKU/composition, carbon origin and supplier/background matching. Water-based, UV/EB and incompatible heatset formulations remain excluded. One as-supplied cyan conventional paste-ink formulation used on the text or cover. Record each job/colour separately, supplier grade, SDS/CAS constituents, mineral distillate, soybean/linseed oil, resin/pigment/wax shares and carbon origin. A soy or mineral-oil-free claim is not a complete recipe or proof of zero VOC. Do not separately add ingredients already in a linked full-ink background. Applicable only if this colour is used.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `wadden-voc-1995`; `huber-conventional-ink`

###### Solvent-based Flat Printing Ink (`ink_magenta`)

This broad non-water solvent/oil-based flat-printing-ink identity has positive offset/lithographic synonyms and no hard heatset or radiation-curing route. Its general examples of glycol-esters and classification by heat needed do not prescribe the actual formulation or force a dryer. Adopt only for the actual compatible conventional oil-based paste of this colour, setting by absorption/oxidation; preserve full SKU/composition, carbon origin and supplier/background matching. Water-based, UV/EB and incompatible heatset formulations remain excluded. One as-supplied magenta conventional paste-ink formulation used on the text or cover. Record each job/colour separately, supplier grade, SDS/CAS constituents, mineral distillate, soybean/linseed oil, resin/pigment/wax shares and carbon origin. A soy or mineral-oil-free claim is not a complete recipe or proof of zero VOC. Do not separately add ingredients already in a linked full-ink background. Applicable only if this colour is used.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `wadden-voc-1995`; `huber-conventional-ink`

###### Solvent-based Flat Printing Ink (`ink_yellow`)

This broad non-water solvent/oil-based flat-printing-ink identity has positive offset/lithographic synonyms and no hard heatset or radiation-curing route. Its general examples of glycol-esters and classification by heat needed do not prescribe the actual formulation or force a dryer. Adopt only for the actual compatible conventional oil-based paste of this colour, setting by absorption/oxidation; preserve full SKU/composition, carbon origin and supplier/background matching. Water-based, UV/EB and incompatible heatset formulations remain excluded. One as-supplied yellow conventional paste-ink formulation used on the text or cover. Record each job/colour separately, supplier grade, SDS/CAS constituents, mineral distillate, soybean/linseed oil, resin/pigment/wax shares and carbon origin. A soy or mineral-oil-free claim is not a complete recipe or proof of zero VOC. Do not separately add ingredients already in a linked full-ink background. Applicable only if this colour is used.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `wadden-voc-1995`; `huber-conventional-ink`

###### Tap water (`water`)

Purchased treated tap water added separately to the fountain and washing circuits. Meter both uses separately and exclude water already carried in supplied chemical solutions. Record temperature/density for volume-to-mass conversion and provider; no generic density or supplier case amount.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_water. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-ctg-2006`

###### Isopropanol (`ipa_input`)

Conditional actual isopropanol component in fountain solution, CAS 67-63-0. Determine active mass from measured supplied formulation and actual composition; include carrier water once. Match China production mix where this UUID is used. Alcohol-free operation requires absence evidence, not an assumed positive or zero amount.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Ethylene glycol active component for actual fountain formulation (`glycol_input`)

Conditional ethylene glycol component, CAS 107-21-1, only when the supplier formula proves its use. The available candidate has an explicit electrolyte-solvent use in its name route; this hard use restriction is not waived by the generalComment describing pure ethylene-glycol production. Identity remains unresolved for the actual fountain component; confirm actual grade and compatible production/provider basis. The small-offset MSDS establishes possible identity only, with no concentration.

- Selected flow: Ethylene glycol active component for actual fountain formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-eiip-2002`; `intaglio-fountain-msds`

###### 2-Butoxyethanol (`butoxyethanol_input`)

Conditional actual fountain/cleaning chemical component, CAS 111-76-2; require current supplier constituent disclosure, supplied quantity, concentration and purity. This row is active-component mass, not the entire aqueous preparation. Include its carrier water once and do not duplicate a full preparation background. These examples do not prescribe a fountain recipe; any other actual constituent needs its own specific row and identity/basis review.

- Selected flow: 2-Butoxyethanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `epa-eiip-2002`

###### Dipropylene glycol monomethyl ether (`dpgme_input`)

Conditional actual fountain/cleaning chemical component, CAS 34590-94-8; require current supplier constituent disclosure, supplied quantity, concentration and purity. This row is active-component mass, not the entire aqueous preparation. Include its carrier water once and do not duplicate a full preparation background. These examples do not prescribe a fountain recipe; any other actual constituent needs its own specific row and identity/basis review.

- Selected flow: Dipropylene glycol monomethyl ether
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `epa-eiip-2002`

###### phosphoric acid (`phosphoric_acid`)

The generic H3PO4 molecular identity has a verified Mass/kg reference and no solution-concentration or sector restriction. Raw CAS, delivered purity/state and active-versus-solution provider definition are unspecified; require actual CAS/assay and amount-basis evidence. It identifies the actual H3PO4 component, not an assumed 85% solution or a pure-acid supplier dataset. Conditional actual fountain/cleaning chemical component, CAS 7664-38-2; require current supplier constituent disclosure, supplied quantity, concentration and purity. This row is active-component mass, not the entire aqueous preparation. Include its carrier water once and do not duplicate a full preparation background. These examples do not prescribe a fountain recipe; any other actual constituent needs its own specific row and identity/basis review.

- Selected flow: phosphoric acid `49c501ce-9480-4d08-9e7d-c826fd42bf98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `epa-eiip-2002`

###### Sodium hydroxide active component (`sodium_hydroxide`)

Conditional actual fountain/cleaning chemical component, CAS 1310-73-2; require current supplier constituent disclosure, supplied quantity, concentration and purity. This row is active-component mass, not the entire aqueous preparation. Include its carrier water once and do not duplicate a full preparation background. These examples do not prescribe a fountain recipe; any other actual constituent needs its own specific row and identity/basis review.

- Selected flow: Sodium hydroxide active component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `epa-eiip-2002`

###### Gum arabic dry component (`gum_arabic`)

Conditional actual hydrophilic gum component in fountain solution; supplier dry solids determine mass. A solution UUID without a known concentration is not a dry-polymer input. Track actual buffer salts and biocides individually if present; this row does not stand for all fountain additives.

- Selected flow: Gum arabic dry component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Conventional offset blanket wash petroleum-distillate formulation (`cleaner`)

Conditional actual supplied conventional-ink blanket/roller wash. Record supplier SDS, hydrocarbon UVCB/CAS and analytical species, aqueous/emulsifier content, distillation range and fossil/biogenic origin. A printhead cleaner or a heatset-only product is not this flow. If vegetable-esters are used, replace with a separately verified specific formulation and preserve upstream crop/ester production; no assumption that it shares the petroleum identity.

- Selected flow: Conventional offset blanket wash petroleum-distillate formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `wadden-voc-1995`

###### Hot melt adhesive (`eva_glue`)

Actual non-reactive, solvent-free EVA-based solid bookbinding hotmelt, supplied as a complete formulation including tackifier and wax. Broad thermoplastic hotmelt identity is conditional on supplier proof of the EVA grade; it is not pure EVA polymer or PUR moisture-curing adhesive. Weigh spine/side glue separately before summing; record melt-pot energy, temperatures and purges. Do not transplant a commercial grade melting point or formula as a default.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_binding. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `mm-antaro-perfect-binding`; `henkel-eva-bookbinding`

###### Alternating current (`electricity`)

Conditional customer-side 1–35 kV grid-average AC supply. Direct reference property is Net calorific value/MJ, not an unspecified energy token. Meter CTP, press, compressor, fountain cooling, dust extraction, folding, binder/glue-pot, trimmer and packing separately; convert metered kWh to MJ using 3.6 MJ/kWh. Match actual voltage, grid, geography/year and provider losses. Electric glue melting is distinct from UV/EB ink curing, which is excluded.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_utilities. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-eiip-2002`; `mm-antaro-perfect-binding`

###### natural gas in the gaseous state (`natural_gas`)

Conditional pipeline/compressed gaseous natural gas for attributable auxiliary boiler or space/process heating, never presumed print drying. Reference property is Volume/m3. Retain meter and supplier temperature/pressure, wet/dry basis, gas composition, compressibility, calorific basis and actual heating function. Prove compatibility with supplier/background m3; a secondary mass coefficient is not a density. No coal gas or heatset dryer is represented by this row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_utilities. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-gas-ap42-2026`

###### Starch (`powder`)

Conditional unmodified starch component of actual anti-setoff powder. Verify plant/feedstock source, grade, particle distribution and any coating; the broad starch identity is not a formulated coated powder. Quantify separately retained powder, collected residue and airborne particles; never infer airborne emission equals powder purchased.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_materials. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `heidelberg-powder-2010`

###### Finished corrugated shipping box (`box`)

Conditional actual dispatch carton, with measured complete box mass, grade and virgin/recycled fractions. A folding carton or a box identity fixing a different fibre recipe is not interchangeable. Include supplier box manufacture once; shipping packaging is excluded from net book reference mass.

- Selected flow: Finished corrugated shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_materials. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`

###### Polyethylene film (`pe_wrap`)

Conditional actual polyethylene dispatch film, CAS 9002-88-4; not book-cover lamination. Name/CAS/comment identify film but source CPC29220 conflicts with that identity. Retain actual PE grade, additives, mass and provider, with classification clarification outstanding. No substitution for PP/PET/multilayer film.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_materials. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`

###### Cotton fabric (`wipe_cloth`)

Positive fabric/cloth/woven-fabric names identify actual cotton textile, while raw-cotton CPC01921 and the cotton-plant comment remain source-quality debts. No raw-cotton cultivation background or water-treatment-specific cloth is selected. Conditional actual supplied cotton wiping cloth for manual conventional-press cleaning. Weigh dry new/reissued cloth separately from retained ink/solvent and returned reusable cloth. Confirm fibre composition/grade; polyester or composite cloth needs its own verified material row. Output contaminated cloth includes only this material and its measured retained constituents, without counting the same material twice.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_materials. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-ctg-2006`

###### Water, process (`fount_carrier_water`)

The broad process-water product identity is used only for actual liquid water in this supplied formulation, with grade/treatment and supplier quantity basis independently documented. It supplies no treatment, concentration, carrier-water amount or supplier background and is not the separately metered tap-water purchase or an elementary abstraction. Conditional water physically delivered within purchased fountain concentrate or its aqueous chemical preparations when the fountain inventory is modelled by components. Determine actual water mass and grade from complete supplier composition and delivery records; this is distinct from separately purchased tap water. Do not duplicate this water in a complete-concentrate background or in the tap-water meter row. If all fountain components arrive dry or water-free, retain documented absence rather than assume a quantity.

- Selected flow: Water, process `d8ad9111-4304-46fb-bc23-9a2f36d65a83`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_formulations. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `epa-eiip-2002`

##### Waste flows

No factory-boundary exchange in this group for the selected route.

##### Elementary flows

No factory-boundary exchange in this group for the selected route.

#### Outputs

##### Product flows

###### Printed Matter (`finished_book`)

Reference object: accepted complete educational textbook of the declared edition, student/teacher audience and formal study programme, with uncoated pages, printed flexible paper cover, conventional sheetfed wet offset and nonreactive EVA perfect binding, at printer gate. Count and weigh only accepted net textbooks after trimming, correct-edition/page-sequence/content-completeness and binding quality checks, including every retained component and excluding dispatch packaging. The broad Printed Matter UUID is conditional on this complete paper-textbook construction; source CPC32690 and unrelated 3D commentary remain quality debts, not a 3D route or a postal service. It supplies neither a per-copy weight nor a manufacturing burden.

- Selected flow: Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finished`
- Sources: `unsd-cpc3-2025`; `mm-antaro-perfect-binding`

##### Waste flows

###### waste paper (unspecified) (`paper_trim`)

One mixed paper reject/trim stream leaving the factory, including make-ready sheets, rejected books and trimming where actually collected together. The broad waste-paper identity is conditional on receiver acceptance of the declared ink/EVA contamination and moisture. Keep collection bins and clean/contaminated fractions separately measured; split physically separate receiver streams rather than conceal them in this aggregate. No avoided-production credit by default.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-eiip-2002`; `mm-antaro-perfect-binding`

###### Waste solid (`aluminium_plate_waste`)

This broad industrial-solid-waste identity is limited to this one actual physically solid whole stream at handover, including retained coating/ink/solvent/water and actual contamination. Weigh the whole as-exported stream; independently measure moisture/constituents/solids and receiver acceptance. It is not a pure-material recycling flow or a default hazard/disposal category; separately collected streams stay separate. Spent metal-backed offset plate, with actual coating/ink residue and receiving recycler route. Raw fabrication scrap, flexographic photopolymer plate and Bayer slag are different identities; no aluminium-only mass assumed for the whole plate.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `kodak-sonora-process-free`

###### Waste ink (`ink_waste`)

One actual collected offset-ink residue stream; weigh ink left in containers, press and separately segregated cleanup residue. Do not also count the same ink in rag, solvent-waste or paper-waste rows; retain actual solids/solvent composition and receiver.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Waste solid (`solvent_rag`)

This broad industrial-solid-waste identity is limited to this one actual physically solid whole stream at handover, including retained coating/ink/solvent/water and actual contamination. Weigh the whole as-exported stream; independently measure moisture/constituents/solids and receiver acceptance. It is not a pure-material recycling flow or a default hazard/disposal category; separately collected streams stay separate. Actual outgoing wiping-cloth stream; record dry cloth and retained ink/solvent mass, sealed storage, evaporative loss before dispatch, laundering/disposal receiver and whether the cloth is reusable. No default solvent-retention factor.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Waste liquid (`cleaner_waste`)

Use this broad industrial waste-liquid identity only for the actual physically liquid whole-mixture transfer of this named stream. Measure whole mass, volume and compatible density at recorded temperature, water-specific mass fraction and independent suspended/dissolved/non-aqueous constituents. Whole-liquid mass = volume × compatible density; non-water mass = whole mass × (1 − actual water fraction), not automatically dry solids. Validate water-specific and solids/volatile-loss methods; generic hazardous language does not establish site hazard status. Actual separately collected used wash with solvent, ink and any water; receiver identity and treatment are required. It is not used lubricating oil or ethyl-acetate concentrate. Do not duplicate ink segregated to the ink-waste stream.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Waste liquid (`fountain_waste`)

Use this broad industrial waste-liquid identity only for the actual physically liquid whole-mixture transfer of this named stream. Measure whole mass, volume and compatible density at recorded temperature, water-specific mass fraction and independent suspended/dissolved/non-aqueous constituents. Whole-liquid mass = volume × compatible density; non-water mass = whole mass × (1 − actual water fraction), not automatically dry solids. Validate water-specific and solids/volatile-loss methods; generic hazardous language does not establish site hazard status. One outgoing liquid stream, measured with actual water, IPA/glycol, salts and ink contamination and receiver sewer/offsite route. It is not paper-mill wastewater, silicon-process aqueous output or manganese-slag washing wastewater. Transfer to treatment is a waste exchange, not direct freshwater emission.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Waste solid (`glue_waste`)

This broad industrial-solid-waste identity is limited to this one actual physically solid whole stream at handover, including retained coating/ink/solvent/water and actual contamination. Weigh the whole as-exported stream; independently measure moisture/constituents/solids and receiver acceptance. For this row confirm cooled solid nonreactive EVA purge; hot liquid or different chemistry requires its own compatible exchange and receiver basis. It is not a pure-material recycling flow or a default hazard/disposal category; separately collected streams stay separate. Actual non-reactive EVA formulation purge or rejected glue, including actual paper/ink contamination. No substitution of cleaned waste PE, PUR residues or unspecified wafer hazardous waste. Internal returned glue remains inside the physical balance, not an external waste flow.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Packaging waste, plastic (`pe_waste`)

This broad plastic-packaging-waste identity locates only the actual as-generated PE dispatch-film offcuts; it has no hard washing/mechanical-recycling condition. Actual polymer/additives/contamination, whole-stream quantity and receiving operation remain required. Conditional actual separate PE film trim/reject stream leaving for treatment; record polymer, dirt/ink contamination and receiver. A cleaned mechanically recycled PE record includes a different delivered state and is not used as this untreated waste identity.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Dust (`paper_dust_collected`)

Use whole as-collected/exported dust mass with measured moisture and independently verified solids; a dry-paper-only mass is not assumed. The generic bilingual dust comment does not establish paper composition or a factor. One separately collected paper spine-milling/cutting dust stream crossing the factory gate; this broad captured industrial Dust waste is restricted by actual cellulose/ink/EVA composition and receiver acceptance. Weigh collected dust, exclude internal recirculation and never also report it as airborne PM. Anti-setoff starch residue is weighed separately and needs a specific row if dispatched separately.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `mm-antaro-perfect-binding`; `heidelberg-powder-2010`

###### Waste solid (`powder_waste`)

This broad industrial-solid-waste identity is limited to this one actual physically solid whole stream at handover, including retained coating/ink/solvent/water and actual contamination. Weigh the whole as-exported stream; independently measure moisture/constituents/solids and receiver acceptance. It is not a pure-material recycling flow or a default hazard/disposal category; separately collected streams stay separate. Conditional separately collected outgoing unmodified-starch spray-powder residue, with actual paper/ink contamination and receiver. Weigh independently from paper milling dust and powder retained on books; internal reuse is not outgoing waste and airborne residuals belong to the disjoint particulate rows. Do not substitute a starch product or a mixed chemically incompatible waste.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_wastes. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `heidelberg-powder-2010`

##### Elementary flows

###### isopropanol (`ipa_air`)

Conditional measured isopropanol, CAS 67-63-0, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### ethylene glycol (`glycol_air`)

Conditional measured ethylene glycol, CAS 107-21-1, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: ethylene glycol `08a91e70-3ddc-11dd-938a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### 2-n-butoxy-1-ethanol (`butoxyethanol_air`)

Conditional measured 2-butoxyethanol, CAS 111-76-2, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: 2-n-butoxy-1-ethanol `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### dipropylene glycol methyl ether (`dpgme_air`)

Conditional measured dipropylene glycol methyl ether, CAS 34590-94-8, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: dipropylene glycol methyl ether `fe0acd60-3ddc-11dd-a4b9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### toluene (`toluene_air`)

Conditional measured toluene, CAS 108-88-3, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### o-xylene (`oxylene_air`)

Conditional measured o-xylene, CAS 95-47-6, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: o-xylene `08a91e70-3ddc-11dd-974c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### heptane (`nheptane_air`)

Conditional measured n-heptane, CAS 142-82-5, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: heptane `fe0acd60-3ddc-11dd-a663-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### hexane (`hexane_air`)

Conditional measured n-hexane, CAS 110-54-3, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: hexane `08a91e70-3ddc-11dd-947d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### benzene (`benzene_air`)

Conditional measured benzene, CAS 71-43-2, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### ethyl benzene (`ethylbenzene_air`)

Conditional measured ethylbenzene, CAS 100-41-4, reaching outdoor air through press-room ventilation, wash/storage, or applicable ancillary combustion; air/unspecified subcompartment only where location detail is unavailable. Establish current site constituent presence and calibrated species mass. Historical shop observations are a screening list, not default positive emissions or universal fractions. Correct incoming ambient concentration, recovery, humidity and sampling duration. No indoor-worker exposure row, TVOC-as-carbon substitution or duplicate vent/stack total. For low-volatility glycols, demonstrate sampling recovery and method applicability; Method 18 alone is not universal.

- Selected flow: ethyl benzene `fe0acd60-3ddc-11dd-a2eb-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18-2025`; `epa-method25a-2017`; `epa-ctg-2006`; `wadden-voc-1995`

###### particles (PM2.5) (`pm25`)

Actual outdoor residual airborne particulate mass in the disjoint bin diameter up to 2.5 micrometres, after capture/control. Assess cutting/milling, starch powdering and actual gas combustion separately, then sum only mutually exclusive outlet measurements. Cumulative PM10/TSP must not be added to this bin series. Collected dust is a separate physical waste; internal recirculation is not emission. No paper-mill or sawmill emission factor is transferred to book manufacture.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `mm-antaro-perfect-binding`; `heidelberg-powder-2010`; `epa-gas-ap42-2026`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Actual outdoor residual airborne particulate mass in the disjoint bin diameter above 2.5 and up to 10 micrometres, after capture/control. Assess cutting/milling, starch powdering and actual gas combustion separately, then sum only mutually exclusive outlet measurements. Cumulative PM10/TSP must not be added to this bin series. Collected dust is a separate physical waste; internal recirculation is not emission. No paper-mill or sawmill emission factor is transferred to book manufacture.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `mm-antaro-perfect-binding`; `heidelberg-powder-2010`; `epa-gas-ap42-2026`

###### particles (> PM10) (`pmover10`)

Actual outdoor residual airborne particulate mass in the disjoint bin diameter above 10 micrometres, after capture/control. Assess cutting/milling, starch powdering and actual gas combustion separately, then sum only mutually exclusive outlet measurements. Cumulative PM10/TSP must not be added to this bin series. Collected dust is a separate physical waste; internal recirculation is not emission. No paper-mill or sawmill emission factor is transferred to book manufacture.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `mm-antaro-perfect-binding`; `heidelberg-powder-2010`; `epa-gas-ap42-2026`

###### carbon dioxide (fossil) (`co2_fossil`)

Fossil CO2 from actual auxiliary gas combustion or oxidation of fossil organic matter. Use actual outlet/species data or documented fuel composition/carbon balance with equipment-specific evidence. No default combustion factor, efficiency or complete-oxidation fraction. Retained paper/ink carbon is an output stock, not CO2. Separate fossil and biogenic carbon and do not delete biogenic CO2 under a GHG reporting convention. NOx excludes N2O: document whether monitoring, exchange and LCIA all use NO2-equivalent mass; unknown basis stays pending and NO/NO2 are not added again. Offsite electricity and waste-treatment emissions belong to their linked backgrounds, not these factory rows.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-ap42-2026`

###### carbon dioxide (biogenic) (`co2_bio`)

Biogenic CO2 only from documented on-site mineralisation of biogenic material. Use actual outlet/species data or documented fuel composition/carbon balance with equipment-specific evidence. No default combustion factor, efficiency or complete-oxidation fraction. Retained paper/ink carbon is an output stock, not CO2. Separate fossil and biogenic carbon and do not delete biogenic CO2 under a GHG reporting convention. NOx excludes N2O: document whether monitoring, exchange and LCIA all use NO2-equivalent mass; unknown basis stays pending and NO/NO2 are not added again. Offsite electricity and waste-treatment emissions belong to their linked backgrounds, not these factory rows.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-ap42-2026`

###### carbon monoxide (fossil) (`co`)

Fossil carbon monoxide from actual ancillary natural gas combustion. Use actual outlet/species data or documented fuel composition/carbon balance with equipment-specific evidence. No default combustion factor, efficiency or complete-oxidation fraction. Retained paper/ink carbon is an output stock, not CO2. Separate fossil and biogenic carbon and do not delete biogenic CO2 under a GHG reporting convention. NOx excludes N2O: document whether monitoring, exchange and LCIA all use NO2-equivalent mass; unknown basis stays pending and NO/NO2 are not added again. Offsite electricity and waste-treatment emissions belong to their linked backgrounds, not these factory rows.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-ap42-2026`

###### Nitrogen oxides (`nox`)

NOx from actual ancillary gas combustion. Use actual outlet/species data or documented fuel composition/carbon balance with equipment-specific evidence. No default combustion factor, efficiency or complete-oxidation fraction. Retained paper/ink carbon is an output stock, not CO2. Separate fossil and biogenic carbon and do not delete biogenic CO2 under a GHG reporting convention. NOx excludes N2O: document whether monitoring, exchange and LCIA all use NO2-equivalent mass; unknown basis stays pending and NO/NO2 are not added again. Offsite electricity and waste-treatment emissions belong to their linked backgrounds, not these factory rows.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-ap42-2026`

###### sulfur dioxide (`so2`)

Sulfur dioxide from actual ancillary gas combustion. Use actual outlet/species data or documented fuel composition/carbon balance with equipment-specific evidence. No default combustion factor, efficiency or complete-oxidation fraction. Retained paper/ink carbon is an output stock, not CO2. Separate fossil and biogenic carbon and do not delete biogenic CO2 under a GHG reporting convention. NOx excludes N2O: document whether monitoring, exchange and LCIA all use NO2-equivalent mass; unknown basis stays pending and NO/NO2 are not added again. Offsite electricity and waste-treatment emissions belong to their linked backgrounds, not these factory rows.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-ap42-2026`

###### methane (fossil) (`methane`)

Fossil methane from actual gas leakage/incomplete combustion. Use actual outlet/species data or documented fuel composition/carbon balance with equipment-specific evidence. No default combustion factor, efficiency or complete-oxidation fraction. Retained paper/ink carbon is an output stock, not CO2. Separate fossil and biogenic carbon and do not delete biogenic CO2 under a GHG reporting convention. NOx excludes N2O: document whether monitoring, exchange and LCIA all use NO2-equivalent mass; unknown basis stays pending and NO/NO2 are not added again. Offsite electricity and waste-treatment emissions belong to their linked backgrounds, not these factory rows.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-ap42-2026`

###### nitrous oxide (`n2o`)

Nitrous oxide from actual auxiliary combustion. Use actual outlet/species data or documented fuel composition/carbon balance with equipment-specific evidence. No default combustion factor, efficiency or complete-oxidation fraction. Retained paper/ink carbon is an output stock, not CO2. Separate fossil and biogenic carbon and do not delete biogenic CO2 under a GHG reporting convention. NOx excludes N2O: document whether monitoring, exchange and LCIA all use NO2-equivalent mass; unknown basis stays pending and NO/NO2 are not added again. Offsite electricity and waste-treatment emissions belong to their linked backgrounds, not these factory rows.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-ap42-2026`

###### acetic acid (`acetic_acid_air`)

Conditional outdoor acetic acid, CAS64-19-7, only when actual EVA grade/degradation conditions and validated assay establish this species. An EVA-A supplier SDS lists acetic acid as a decomposition product; it does not prove routine emissions from the selected bookbinding glue or prescribe a temperature/factor. Record actual glue grade, residence/thermal history, normal and upset coverage, ventilation and species mass. Do not infer a positive exchange from a successful UUID search or replace unidentified degradation hydrocarbons with this acid.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_emissions. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `buehnen-eva-decomposition`; `epa-method18-2025`

###### water vapour (`water_vapour`)

Conditional actual net water vapour reaching outdoor air after actual condensation/control, from wet-offset dampening/cleaning, incoming paper/formulation moisture and separately identified auxiliary-combustion water. Integrate matched outlet and inlet water-vapour mass with measured humidity, airflow and temperature/pressure; retain ambient carrier water, condensate, liquid transfers, product water and stocks separately. Do not assume all supplied water evaporates, use an unmeasured water-balance residual as a known release, or duplicate internal circulation. Actual fuel hydrogen/composition is needed for combustion-water reconciliation; no pure-methane default.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual unallocated physical exchange amount per 1 kg reference flow using cp_water. Conditional occurrence requires site evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-eiip-2002`; `epa-method18-2025`; `epa-gas-ap42-2026`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_separate_ledger` | all quantities | First retain unallocated physical paper/water/chemical/carbon balances and matched internal transfers. Allocate only the attributable environmental-load account. The accepted physical books and exported waste masses are not mechanically multiplied by a burden share. |  |
| `a_job_assignment` | multi-title operations | Use job-specific purchases/meters first. Separate setup/make-ready, printing, binding, cleaning and standby. Allocate remaining shared activities by measured causal drivers such as attributable press runtime, printed sheet area/passes or heat service, documenting numerator, complete denominator and consistency. Topic, selling price or printed page count alone is not evidence of equal production demand. | `epa-eiip-2002` |
| `a_waste_receivers` | paper and plate recovery | Declare each stream composition, receiver and burden ownership. Sales of paper trim or plates do not automatically turn waste into a co-product or create an avoided virgin-material credit. Any justified recycling/substitution scenario is separately disclosed with the affected burden ledger and no duplicated treatment or credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_finished` | `book_manufacture` | accepted complete educational textbooks | future foreground measured record | batch/publication design; primary formal-study educational purpose; subject/course and learning structure; student/teacher audience; edition/revision and approved proof; complete correctly ordered text/summaries/exercises/answers where actually specified; finished dimensions; page count; accepted copies; sampled/measured net publication masses; moisture; binding pull/handling result; packaging tare | Weigh accepted complete bound paper publications with calibrated scales after trimming; retain sampling design and lot reconciliation, exclude dispatch packaging. Count-to-mass uses same-design measured mean and accepted copies, checked against lot mass. Reject missing, duplicated, misordered or wrong-edition pages against the approved job proof before counting accepted textbook output. | kg; copies | each production lot | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |
| `cp_materials` | `book_manufacture` | paper plates powder packaging | future foreground measured record | job and stage; supplier/grade; receipt/reissue; beginning/end stock; sheets/count; actual mass; grammage; dimensions; fibre/coating/polymer; moisture; receiver | Use calibrated weighing plus invoices and stage/job issue records; reconcile paper stock with printed-sheet, cover, bookblock and trimming ledgers; measure plate and packaging mass rather than generic count factors. | kg | each receipt and job; stock period closure | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |
| `cp_formulations` | `book_manufacture` | ink fount wash constituents | future foreground measured record | job/colour/material batch; supplied mass/volume; current SDS/CAS and technical formulation; active concentration; carrier water; solvent and vegetable-oil origin; density/temperature; retention in publications/waste; stock movements | Weigh purchases/issues/returns and containers; get complete supplier constituent/carbon-source records, including constituents omitted from public SDS. Use assays or documented measured composition. Track ink as complete supplied formulations and split fount chemical components with carrier water once; demonstrate full-formulation versus component background ownership. | kg; m3 | each job/material change; inventory closure | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |
| `cp_binding` | `book_manufacture` | EVA adhesive | future foreground measured record | job; EVA spine and side glue grade/composition; issued/recovered/purged mass; glue-pot/startup temperature; heater meter; binder speed/setup; paper residue; accepted binding quality | Weigh actual supplied thermoplastic glue and segregated purges, log actual melt/standby cycle and energy; reconcile glue retained in accepted/rejected bound publications. No universal glue coat thickness, thermal setting or consumption. | kg; MJ | each job and melt-pot cleaning | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |
| `cp_utilities` | `book_manufacture` | electricity and conditional gas separately | future foreground measured record | stage/device/job; meter start/end; electric kWh/voltage; grid/year/provider; gas volume; temperature/pressure; composition/wet-dry/Z; calorific basis; burner/heating function; runtime and shared denominator | Use calibrated submetering and reconciled bills for all stages, including CTP, make-ready, compressors, cooling and glue melting/standby. Meter actual auxiliary gas heat separately. Prove supplier gas-volume compatibility and document causal shared-load assignment; no heatset or UV electricity assumed. | MJ; kWh; m3 | metered by job/stage and reconciled each bill period | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |
| `cp_water` | `book_manufacture` | separately supplied water and actual water vapour | future foreground measured record | fountain and wash meter; water source/treatment; volume; density/temperature; carrier water; incoming paper moisture; inlet/outlet ambient humidity/airflow; condensate; combustion-water provenance; changes/bleeds; evaporation; product/waste water; stock | Meter added water and weigh/sample formulations and outgoing liquids. Reconcile carrier water against chemical inputs and prevent double counting in purchased aqueous formulations. Record water balance even when no direct abstraction/discharge occurs. | kg; m3 | each filling/bleed and lot | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |
| `cp_wastes` | `book_manufacture` | each outgoing waste stream | future foreground measured record | bin/stream/stage/job; physical state; whole as-exported mass; liquid volume/density/temperature; water-specific fraction and independently verified solids; paper/ink/EVA/polymer/metal/solvent composition; measured tare/net mass; internal returns; dispatch/receiver; treatment and legal transfer record | Weigh each segregated actual stream at its transfer point and retain receiver acceptance. Close stocks and internal return records before summing dispatch; separate paper dust from paper trim and airborne release. Waste type is established by composition/state, not only by a database label. | kg | each collection/dispatch; inventory closure | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |
| `cp_emissions` | `book_manufacture` | each actual air species and particle bin | future foreground measured record | job/stage/source/outlet; supplier constituent survey; CAS; sampling interval; exhaust/inlet airflow; inlet and outlet concentration; T/P/humidity; dry/wet/normal basis; calibration gas/response/recovery; detection limit; PM cut/filterable-condensable basis; NOx definition; controls; fossil/biogenic carbon | Measure representative setup, steady operation, cleaning, storage and heat cycles. Use competent species analysis validated for the actual matrix, ventilation balance for fugitive outlets and separately measured combustion outlets. Include inlet ambient subtraction only with compatible inlet/outlet bases and airflow closure; document residuals/LOD instead of assigning missing species zero. Capture quality records and assign PM bins without overlap. | kg; mg/m3; m3/time | representative surveys across actual operating cycles and reporting period | Declared reporting period and representative actual job/cycle coverage | Actual printer, referenced design and attributable outsourced stages only if declared | per 1 kg reference flow | Original logs/invoices/assays, calibration, supplier specification, reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | Normalized physical exchange = compatible unallocated measured period/lot exchange / accepted net publication mass in kg; retain raw amount before allocation. | actual exchange; cp_finished accepted kg; causal burden assignment | exchange per 1 kg reference flow |  |
| `copy_to_mass` | cp_finished | Accepted kg = accepted copy count × same-design calibrated measured mean net copy mass in kg; verify against lot weighing and moisture. | cp_finished | accepted net lot mass |  |
| `component_mass` | actual component rows | Component mass = actual supplied formulation mass × actual measured/verified mass fraction; convert volume only using the actual formulation density at recorded conditions. Carrier water and complete-background ownership are reconciled once. | cp_formulations; cp_water | actual component and carrier masses | epa-ctg-2006 |
| `vent_species_mass` | each measured species | Release species mass = integrated outlet flow × outlet species concentration minus integrated matched incoming species mass, converted to kg on consistent temperature/pressure/humidity bases. Sum distinct outlets and time windows only; retain recovery/response and ventilation-closure evidence. | cp_emissions | outdoor species kg before normalization | epa-method18-2025; wadden-voc-1995 |
| `constituent_balance` | each actual organic constituent | Beginning stock + actual external constituent receipts + independently evidenced process formation = constituent in external product/material dispatch + constituent in complete transferred waste + outdoor constituent release + mutually exclusive ending stocks + independently evidenced process conversion out of this constituent. Use one declared physical boundary/period and the v_balance stock/cohort bridge; include actual incoming same-item returns without calling them new production. A rejected book leaving as waste contributes only through its complete waste leg; one held on site contributes only to its relevant ending stock. Accepted books held on site likewise belong only to ending finished stock, not external dispatch. Retention assays in accepted/rejected books and waste are composition subledgers of those whole endpoints, never additional terminal masses. Match stage internal_out/internal_in and cancel them on aggregation; genuine transformation is not another receipt or a second export. Reconcile actual transformations with measured composition/carbon and other participating legs, not an assumed reaction or residual emission. A residual is an uncertainty/gap, not an identified emission. | cp_formulations; cp_wastes; cp_emissions | physical constituent balance and discrepancy | epa-eiip-2002; epa-ctg-2006 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_construction` | reference product | Verify actual paper/cover/binding/print construction and complete educational-textbook state, primary formal-study purpose, course/learning structure, edition and student/teacher audience. Check text, summaries, exercises and answers only where specified, against the approved proof and page/gathering order. Supplier catalog options are not site verification, and a subject label is not evidence of textbook purpose. | job specification, publisher/content evidence, supplier and acceptance records |
| `dq_coverage` | all rows and stages | No unobserved exchange is assigned zero. Reconcile all actual extra constituents, aids, treatment chemicals, utilities, waste and emission species as separate atomic rows before declaring a concrete dataset complete. | meter and constituent survey, physical balances and explicit gaps |
| `dq_source_scope` | external evidence | Preserve historical/source-specific route and grade limitations. Classification, identity rows, eco claims, abstract-only studies and BREF BAT values are not generic manufacturing recipes or emission data. | original source locators, scope assessment and supplier evidence |
| `dq_ledgers` | physical and burden accounts | Keep complete mass/water/carbon inventory, internal stage linkage and separately assigned burdens over one design/period. Record shared-load denominator and measurement uncertainty; separate source identity from provider/quantity compatibility. | calibrated originals, receiver records and allocation sensitivity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | reference dataset | Verify the broad Printed Matter UUID only for the declared complete educational-textbook subset, with formal-study purpose, course/learning structure, edition/audience, physical qualifiers, accepted net mass, one final output and the same denominator in both languages. Other content categories cannot share this PCR’s reference by construction alone. Disclose source CPC32690 and unrelated 3D commentary and re-check provider scope; no printed-matter average, postal service, intermediate sheet or prototype is implied. | `unsd-cpc3-2025` |
| `v_educational_scope` | claimed educational textbook | Confirm primary student/teacher use in a formal study programme from actual publisher/job/content records and declared course/learning structure; do not classify another book, directory, printed score or commercial catalogue by its title alone. Verify the declared edition and complete correctly ordered text and any specified summaries/exercises/answers against the approved proof. Verify the complete physical route from real job/equipment/supplier/acceptance records. Actual configuration, paper/ink/glue SKU, formulas and quantities remain required; supplier capability alone cannot complete the dataset. Only the narrower physical subset of CPC32210 is covered; author checks establish neither whole-leaf coverage, an accepted mapping nor scientific methodology approval. | `unsd-cpc3-2025`; `epa-eiip-2002`; `mm-antaro-perfect-binding` |
| `v_balance` | factory physical ledger | Close gross unallocated physical V over the declared factory boundary/period: beginning inventory + all actual external receipts (purchases and separately identified returns) + actual additional boundary air/oxygen/water legs not already counted in receipts = external net-book dispatch + other external material returns/exports + complete outgoing wastes + outdoor releases + mutually exclusive ending inventories. Preserve measured moisture/composition and actual transformations; pair stage internal_out/internal_in and cancel them on aggregation. Retained ink/glue/powder/carbon are within complete books or whole waste/stock endpoints; composition assays do not add terminal mass. Exported rejected books enter only their complete waste leg, including paper_trim where actually co-collected; held rejected books enter only their closing reject stock. Book bridge: reconcile opening finished goods + newly first-accepted production + already-accepted same-item inward returns admitted to finished goods + transfers of already-accepted books from other declared stock states = physical dispatch from finished goods + actual transfers to rework/reject/waste states + closing finished goods. These inward terms are disjoint: a first quality release is not also another stock transfer, and a returned book held for inspection/rework enters only that stock state until its actual transfer to finished goods. Retain a matching ledger for every other stock state. Accepted first production and external dispatch are linked but not equal. For each original cohort c, Qc is the net mass first released by quality control from a new production lot, including new accepted closing finished goods once. Q in normalize_lot/copy_to_mass means that first-accepted mass, not dispatch, opening old finished goods, reinspection, same-item returns or rework of already accepted books. Previously unaccepted work may enter Qc only on its first release. Preserve each exchange's complete unallocated V, burden A, provider, phase and period vector with original cohort ownership through opening/closing stock, returns and rework; later actual inspection, storage, repacking, transport or rework services add only their real new exchanges to that original cohort. Externally acquired complete books retain their actual prior production/provider history under recursive_input_rule and do not become newly manufactured Q here. Never multiply physical V by a shared-load A fraction. Keep Q=0, idle, failed and cleanup records; do not divide by zero, erase burdens or move them to a convenient positive-Q window. For a service-only period with no new first acceptance, retain its actual incremental inspection/repacking/rework/storage/transport exchanges under the identified original cohort c and the original positive Qc. Under normalize_lot, the compatible exchange is the complete cohort-owned exchange over its recorded phases/periods: for each separate exchange e, normalize cumulative unallocated Vce by original Qc and separately normalize attributable Ace by that same Qc; retain each period delta and its providers, never add the previously reported cumulative vector a second time. copy_to_mass and cp_finished establish Qc from the original first-release count/mass evidence; old-stock dispatch and service-only activity do not replace that denominator. Do not divide a current service-only numerator by current new-Q=0 or by another new lot. If original cohort/Qc/prior vector or causal ownership is missing, retain the actual service delta and mark the cohort calculation and methodological dataset review incomplete rather than fabricate Q or declare a fresh manufacturing output. This retains the original manufacturing dataset and its subsequent service amendments; it does not turn the service-only period into a new 1 kg manufacturing lot. Dataset review must reconcile cp_finished, cohort identity, original Qc, prior cumulative vector, actual period deltas and physical stock/dispatch bridge before treating normalize_lot as supported. Legacy validate-dataset checks protocol-ID presence only; its pass does not perform these value/cohort/provider checks or establish this methodological validation. Any shared new service attribution follows a_job_assignment with its measured complete causal denominator and disclosed unresolved ownership. Packaging: close an independent gross component ledger for box, pe_wrap and every other actual supply/dispatch packaging item, separate from the 1 kg net book: opening packaging + P + N_ext + ER = D + EO + packaging waste + closing packaging. Classify inward events mutually exclusively from actual transaction/ownership and item history: P is actual purchased packaging, including packaging paid within a bundled goods purchase even without a separate invoice price; N_ext is actual first external nonpurchase receipt, such as borrowed/rented, customer-consigned or genuinely nonpurchased accompanying packaging, not an outward term. Neither term implies new manufacture of a reused item. ER requires the same identified item/component and ownercohort, its matching prior recorded outward D or EO event, custody/timing and inherited complete prior V/A/provider/phase/period vector; a first loan or unmatched first receipt is not ER. Retain unmatched receipts as explicit unresolved inward legs until their transaction/history is evidenced, not as zero or a fabricated return. D is actual complete packaging outward with goods; EO is actual separately outward empty/return packaging, including return to its lender/owner. Preserve each event, owner/custodian and ownership changes; separately identify any additional real boundary leg. These are physical crossings, including each genuine return/reissue, not assumed net consumption. Closing unused, in-use, returned and rejected packaging states are mutually exclusive by item/location; packaging outside the factory is not also factory closing stock, even if still owned. Retain its separate offsite ownership history. pe_waste covers only its actual trim/reject stream and cannot stand for N_ext. Preserve ownercohort and each leg's V/A/provider/phase/period, actual gross shipped/returned mass and actual distance/mode/load transport. First nonpurchase supply is not free of environmental load: obtain actual owner/provider manufacturing history and burden ownership, plus actual rental/handling/cleaning/repair services when present; a zero invoice or bundled price is not zero burden. Preserve the inherited prior vector on N_ext and ER and add only genuine new service exchanges. Link actual packaging manufacture once using actual whole-item or complete component providers without overlap, including any packaging already in the purchased-goods background; all physical packaging legs remain recorded regardless of that background ownership. Repeated use/returns do not manufacture it again or imply a default reuse count. When combining packaging and nonpackaging ledgers, include every whole leg once and exclude the packaging portions from the other account; do not sum component assays again. Keep full actual inbound/return/waste/stock records without narrowing the reporting window to remove old finished goods, returns or rework. EPA VOC accounting supports constituent reconciliation, not an LCA burden-allocation policy. Record discrepancies and calibration/measurement uncertainty, with no default yield/loss, invented price/share, negative-fee clipping or automatic recovery credit. | `epa-eiip-2002`; `epa-ctg-2006` |
| `v_voc_species` | organic material and air account | Reconcile each measured constituent entering ink/fount/wash/glue against product retention, liquid/cloth waste, stocks and outdoor release. Material SDS is a survey input, not an emission factor. TVOC as carbon or calibration-gas equivalent is QA evidence; convert with demonstrated response/composition before deriving species masses. Do not add the aggregate to its constituent sum or treat an uncharacterised remainder as a known elementary chemical. | `epa-method18-2025`; `epa-method25a-2017`; `wadden-voc-1995` |
| `v_particles_carbon` | dust and combustion | Use disjoint PM2.5, PM2.5–10 and PM>10 masses after control; collected dust is not airborne mass. Document filterable/condensable definitions, NOx quantity basis and separate N2O. Distinguish mineral-distillate, vegetable-oil, paper and glue fossil/biogenic carbon; biogenic CO2 cannot be deleted and retained carbon is not released carbon. | `epa-gas-ap42-2026`; `heidelberg-powder-2010` |
| `v_identity_and_gaps` | all exchanges | Verify actual constituent/grade, supplier route, flow type, direct-read reference property, unit group, medium and source metadata. Missing UUID, ingredient proportions, species mass, gas volume convention, NOx-equivalent basis or provider link remains an explicit gap; it is not zero, a neighbouring product, or a complete background. Separate measured absence from missing observation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Route-specific educational-textbook manufacture input in an explicitly compatible downstream model; completed production dataset only after actual data/bases/gaps review. |
| allowed_use | The declared complete educational-textbook paperback construction at factory gate for verified formal-study purpose, edition/audience and course/learning structure, with actual compatible supplier backgrounds, complete foreground measurements and disclosed uncertainty. Producer acceptance and receiver modelling must use the same qualified textbook and net-mass extent. |
| excluded_use | Other CPC book/directory/music/advertising categories and universal printed-matter or all-textbook averages; equal learning/reading service or educational-attainment claim; 3D/prototype, postal/licensing/performance services, non-paper or loose-sheet forms, alternative printing/cure/binding routes; ready-to-use quantitative dataset inferred from UUIDs or historical examples. |
| required_metadata | All reference qualifiers, providers/geography/year, actual grade/formulations, study boundary, upstream/treatment ownership, allocation and collection period. |
| required_quality_disclosure | Measurement/sampling uncertainty, species/PM/media coverage, physical-balance residuals, unresolved UUIDs and provider bases, excluded scope and performed/skipped checks. |
| update_trigger | Change in cover/text stock, ink/wash/fount/EVA formulation, printing/drying/binding route, design/period/provider, capture/treatment, acceptance or identity evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Complete 32210 note, PDF/printed p.148: primary formal-study educational purpose, typical summaries/practice and included workbook/teacher/resource/interactive types. Adjacent pp.148–149 and prior pp.151–152 book/music/commercial context delimit excluded categories; none prescribes printing routes or quantities. |
| `epa-ctg-2006` | `official_guidance` | EPA Control Techniques Guidelines for Offset Lithographic Printing and Letterpress Printing, EPA-453/R-06-002, September 2006; https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | Section IV.A, printed pp.6–8/PDF12–14 and comparative IV.B/source overview printed p.9/PDF15; ink, fountain, wash routes and separate source accounting. Historical retention/regulatory numbers are not default LCI values. |
| `epa-eiip-2002` | `official_guidance` | EPA EIIP Volume II Chapter 15, Preferred and Alternative Methods for Estimating Air Emissions from Printing, Packaging and Graphic Arts, May 2002; https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Section2.1.1/PDF14–15 and material-balance sections/PDF27,31; conventional sheetfed books/brochures process, original Figure15.2-1 and record accounting, not generic factors/speciation. |
| `jrc-paper-bref-2015` | `official_guidance` | JRC Best Available Techniques Reference Document for the Production of Pulp, Paper and Board, 2015; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Sections7.1.4/PDF703 and7.1.10/PDF708, BAT49/50/PDF849 (printed811), including coating-effluent limits outside this uncoated-book method; upstream paper production/broke/cutting/effluent coverage only. Not a book-printing, VOC or spine-milling factor source. |
| `mm-antaro-perfect-binding` | `literature` | Müller Martini Antaro perfect binder official product documentation; https://mullermartini.com/en/product/antaro/ | Offset jobs and softcover brochures (official page paragraphs beginning “Combined with a gathering machine”, “The perfect binder features” and “Depending on its configuration”); gathering, spine milling, EVA/PO/PUR options and three-knife trimming; select only non-reactive EVA softcover, no catalogue speed/thickness default. |
| `henkel-eva-bookbinding` | `literature` | Henkel TECHNOMELT GA485D official product documentation; https://next.henkel-adhesives.com/us/en/products/industrial-adhesives/central-pdp.html/technomelt-ga-485d/SAP_IB-95677.html | Softcover spine hotmelt compatibility example; no universal formulation, amount, heating temperature or claimed supplier match. |
| `kodak-sonora-process-free` | `literature` | Kodak SONORA Process Free Plates Sustainability datasheet; https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | PDF1; no separate plate-processing chemicals/water for that route; plate manufacture, on-press coating fate and make-ready remain included. |
| `walsworth-book-printing` | `literature` | Walsworth Commercial Book Printing official capabilities; https://www.walsworth.com/book-printing | Actual producer offers sheetfed, web/digital and binding/finish options across educational, juvenile and technical titles. Options do not prove a single factory recipe or that all titles follow this PCR. |
| `huber-conventional-ink` | `literature` | hubergroup RAPIDA ECO official product documentation; https://www.hubergroup.com/us/en/product-finder/product/rapida-eco | Conventional sheetfed absorbent-substrate and mineral-oil-free/IPA-free alternatives. Neither claim establishes soybean feedstock, a complete recipe or zero emissions. |
| `wadden-voc-1995` | `literature` | Wadden et al., Determination of VOC Emission Rates and Compositions for Offset Printing, Journal of the Air & Waste Management Association45,547–555(1995); https://stacks.cdc.gov/view/cdc/202943/cdc_202943_DS1.pdf | PDF2–3 and6; DOI10.1080/10473289.1995.10467386; three historical mixed-process shops. Ventilation/species methodology and survey candidates only, not modern universal recipes, rates, proportions or per-book burdens. |
| `intaglio-fountain-msds` | `literature` | Intaglio Printmaker Fountain Solution Material Safety Data Sheet; https://intaglioprintmaker.com/wp-content/uploads/2022/08/Fountain-Solution-MSDS.pdf | PDF1, sections1–2; undated historic ready-to-use small-offset example, CAS107-21-1 with unavailable concentration. Not proof of industrial-machine grade or recipe. |
| `epa-method18-2025` | `official_guidance` | EPA Method18, Gaseous Organic Compound Emissions by Gas Chromatography, 1 April2025 web copy; https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | Sections1–2/PDF1–2; species identification, calibration and humidity correction with stated volatility/polymerisation limitations. Method design must be validated for the actual matrix; not proof of measured emissions here. |
| `epa-method25a-2017` | `official_guidance` | EPA Method25A, Total Gaseous Organic Concentration Using a Flame Ionization Analyzer, 3 August2017 web copy; https://www.epa.gov/sites/default/files/2017-08/documents/method_25a.pdf | Sections1–2/PDF1; calibration-gas or carbon equivalents are distinct from species mass. No automatic universal response/conversion. |
| `epa-gas-ap42-2026` | `official_guidance` | EPA AP42 Section1.4 Natural Gas Combustion, October2026 corrected public copy; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Sections1.4.1–1.4.3/PDF1–3; actual auxiliary gas boilers/furnaces and equipment-dependent species. No boiler factor imported into print drying, no average fuel/calorific value or factor adopted. |
| `heidelberg-powder-2010` | `literature` | Heidelberg News270(2010), Small Grains that Have a Big Effect; https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | PDF/printed53; starch, sugar and calcium-carbonate alternatives and coated powder differences. Only actual declared starch component here; no particle distribution, application rate or airborne fraction taken as a default. |
| `buehnen-eva-decomposition` | `literature` | BÜHNEN Hotmelt Adhesives with product code A (Ethylenvinylacetate), SDS4 January2018 version2; https://www.buehnen.de/files/datenblaetter/Safety_Data_Sheet_EVA-A.pdf | PDF4 section10.6; EVA-class decomposition can yield acetic acid and hydrocarbons, only a survey condition requiring actual grade/thermal history. Not proof of positive emissions from the selected bookbinding glue; no recipe/temperature/factor adopted. |
| `songburd-music-print-options` | `literature` | Songburd Music Print Options; https://songburdconnect.com/print-options/ | Retained prior structural context for excluded score/parts, perfect-bound, saddle-stitch, coil and folio options only. Does not establish educational-textbook purpose, this producer’s EVA/wet sheetfed route, recipe/quantity or lay-flat performance. |
| `pgm-advertising-catalogues` | `literature` | Poligrāfijas grupa Mūkusala, Advertising Materials and Catalogues; https://www.pgm.lv/en/services/advertising-materials-and-catalogues/ | First-party “Possibilities” and “Equipment” sections describe heatset/web advertising/catalogues with perfect-binder and saddle-stitch alternatives. Negative applicability context only: not proof of this sheetfed/nonreactive-EVA supplier route, job, paper/adhesive SKU or quantities; no advertised capacity/grammage/defaults adopted. |
