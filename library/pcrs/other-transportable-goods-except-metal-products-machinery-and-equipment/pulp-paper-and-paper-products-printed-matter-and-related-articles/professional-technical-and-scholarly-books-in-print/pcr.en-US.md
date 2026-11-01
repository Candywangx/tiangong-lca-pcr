---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.professional-technical-and-scholarly-books-in-print
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Professional, technical and scholarly books, in print

## 1. Scope and Applicability

This PCR concerns specialized printed titles serving academic research or the practice of a profession. Verify the actual manuscript, intended readers and publisher's purpose: a research monograph, advanced technical treatise or professional practice book can qualify; an academic subject alone does not distinguish it from a formal-programme textbook, a reference work for the general public, or a journal. UN CPC 3.0 places this category under Books, in print → Other books, in print. Its explanatory note describes specialist research, advanced knowledge and occupational use; it prescribes no binding, printing technology, lifespan or publication interval. Adjacent notes distinguish formal-study textbooks, public reference works and contact directories. The frequency thresholds apply to newspapers and periodicals, not to a book's reprint schedule. [unsd-cpc3-2025]

The representative manufacturing subset is a complete professional or scholarly paperback: purchased dry uncoated woodfree text sheets and flexible uncoated paper cover; finished process-free aluminium CTP plates; conventional wet sheetfed offset with absorption/oxidative ink setting; folding and gathering; spine milling; nonreactive EVA hotmelt binding; three-side trimming, acceptance and packing. The methodological title retains the category identity, while this construction is narrower than its classification leaf. No claim of full-leaf, all-printing or all-binding coverage is made. Digital, web/heatset, UV/EB, PUR, sewn, stapled, spiral, hard-case, coated/laminated/varnished/foiled, loose-leaf, electronic and audio products require another assessed route. Sewing thread is absent from this selected construction; do not add it because a database candidate exists.

EPA distinguishes this sheetfed process from heated web ink drying. The binder manufacturer's document demonstrates offset gathering, milling, EVA options and softcover production; other configurations in that document remain alternatives. A real printer offers scientific, technical and professional books on several platforms, which establishes commercial plausibility without proving a particular job's route, adhesive SKU, formulation, provider or quantities. [epa-eiip-2002; epa-ctg-2006; mm-antaro; walsworth-books]

The print master must represent the approved title and edition, with complete preliminary matter, chapters, illustrations, tables, equations, references, appendices and index where the manuscript requires them. Record proof approval, corrected-file identity, page/signature sequence and legibility of specialist symbols and graphics. A book need not contain every listed element; document genuine absence against its approved manuscript. These are production-integrity checks, not scientific endorsement of the author's assertions. The publisher's production guidance supports controlled manuscripts, design and print-ready files; numerical acceptance tolerances remain the actual job's specification. [chicago-production]

This is a protocol for collecting a future foreground inventory, not a measured factory dataset. Fixed quantities are only the reference extent and exact unit conversions. No universal paper grammage, recipe, yield, emissions fraction, book weight, useful lifetime or reading-equivalence factor is supplied. Site-specific missing data and range evidence needs remain explicit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.professional-technical-and-scholarly-books-in-print |
| classification_refs | CPC 3.0 32291; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Specialized research, advanced technical and professional-practice titles in the declared complete uncoated-paper EVA-bound paperback construction. |
| excluded_products | Formal-programme textbooks; public general-reference works; contact directories; children's/general-interest books; periodicals; advertising catalogues; printed music as such; electronic/audio services; every alternative structure or printing/binding route excluded in section 1. |
| representative_product | One approved edition of a specialist scholarly monograph or professional technical book, complete with its manuscript-required diagrams, formulae and index, in an unlaminated flexible-paper-cover EVA paperback. |
| production_route | Approved print master → CTP → wet sheetfed text/cover offset and setting → fold/gather → mill/EVA glue/attach cover → trim/inspect → pack and factory-gate dispatch. |
| market_state | First-quality-released complete printed book at printer gate; net book mass includes retained ink and adhesive, and excludes transport packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the approved specialized textual and graphical content as a complete printed professional, technical or scholarly book of a declared title and edition. |
| How much | 1 kg accepted net complete new books of the same design; retain copy count, page count and measured mass distribution. |
| How well | Approved manuscript/edition, complete ordered signatures and required back matter; legible diagrams, symbols, equations and index; accepted trim, cover attachment and binding integrity under the actual job specification. |
| How long or cycle | One manufacturing lot to first quality release at factory gate; no default reading service life, update interval, obsolescence date or equal professional outcome. |
| reference_flow_link | `finished_book` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Professional, technical and scholarly books, in print `482807bc-2a34-471b-b72e-6e431c1f0d9c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | professional/research purpose and intended readership; title and edition and approved master identity; required figures/tables/equations/index and proof acceptance; page/signature/copy count and trim size; text/cover grade and furnish and moisture; wet sheetfed ink SKU and colour and setting mechanism; finished process-free plate grade; fountain/wash full formulations; nonreactive EVA spine/side grade and binding acceptance; net first-release cohort Q and closing new FG; raw/WIP/old FG and return identities; site and period and outsourced stages; utility voltage/geography/year and heat/fuel bases; packaging component owners and P/N_ext/ER legs; provider ownership and allocation drivers; measured uncertainty and explicit gaps |

The reference UUID identifies the complete category product at plant; it does not establish a complete-book provider inventory or numerical recipe. Keep every qualifier in dataset metadata or equivalent records. Mass-based inventories compare manufacturing quantities and do not establish equal scientific value, professional utility, content length or reading service across editions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh complete accepted new books after final trim, excluding dispatch packaging and including retained paper/ink/EVA/powder at recorded moisture; collect with cp_release. |
| `cohort_basis` | all inventory rows | Mass | kg | For the compatible new production cohort use per 1 kg reference flow. Q is the net mass first released in that cohort, including newly released closing FG once; opening FG and previously released books never enlarge Q. Preserve raw V and assigned A before normalization. |
| `return_basis` | returned_book; old_book_dispatch | Mass | kg | A genuine same-item return retains original cohort c, original accepted mass Qc and inherited exchange vector. Re-release, rework, repacking or dispatch does not create Q. Normalize original and additional service exchanges against that original Qc or a separately declared reviewed service basis, never indiscriminately against current new Q. |
| `formulation_basis` | supplied chemical formulations | Mass | kg | Weigh the whole supplied SKU, record water/solids/constituents and density/temperature for any volume conversion. Analytical component accounts are linked subledgers, not additional whole-formulation purchases or duplicate providers. |
| `electric_basis` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Native electricity uses MJ; 1 kWh = 3.6 MJ exactly. Match declared 1–35 kV supply and provider geography/year; bills alone do not identify a provider. |
| `gas_basis` | natural_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve actual metering T/P, wet/dry basis, composition and compressibility; reconcile to provider volume. A secondary unit coefficient or methane CAS does not prove gas density, composition or heating value. |
| `heat_basis` | purchased_heat | delivered energy | MJ | Collect supply and return mass and specific enthalpy independently. When masses differ use separate enthalpy streams plus measured leakage, blowdown and storage terms. Mass in kg × specific enthalpy in kJ/kg gives kJ; under calc_heat reconcile all energy terms in kJ, then divide net kJ by 1000 exactly once to report MJ (1 MJ = 1000 kJ). Preserve already-MJ meter units and avoid duplicate conversion. Use m(hs−hr) only after proving equal mass at the same boundary; no invented efficiency. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved manuscript/master and purchased dry unprinted text/cover sheets, finished process-free plates and actual supplied formulations at the printer; inherited WIP/FG/returns identified separately. |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | Only the declared professional/technical/scholarly printed-book subset; one classification coordinate does not broaden the physical route. |
| recursive_input_rule | Complete bought-in or returned books retain upstream production and original cohort evidence. Do not treat them as virgin paper, create another first-release output or cut off recursion with zero burdens. |
| upstream_dataset_requirement | Compatible paper, finished plate, complete formulated ink/fountain/wash/EVA, packaging, utilities, transport and waste-treatment providers, each with documented amount/state/route/geography/year and owned stages. |
| disclosure | Included site and contractors; edition and reporting period; original-content creation boundary; source/provider limits; raw/WIP/new-old FG and reusable stocks; all gross legs, balances, attribution and gaps; downstream use/disposal excluded. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_content_gate` | applicability | Check specialized professional/research use from the real publication and commission. Academic subject, ISBN, periodic reprint or binding alone is insufficient; distinguish formal-course, public-reference and serial-periodical purposes before using this category. No HS-derived extra definition is imposed. | `unsd-cpc3-2025` |
| `b_route` | book_manufacture | Include production preflight/proofs, CTP, make-ready and corrective sheets, text and cover printing, setting, folding, gathering, milling, EVA melting/application, cover pressing, trimming, QC, packing, attributable maintenance and utilities. Confirm the selected construction from job/equipment/material records. | `epa-eiip-2002`; `epa-ctg-2006`; `mm-antaro`; `kodak-sonora` |
| `b_master_integrity` | print master and release | Reconcile approved edition, final files and all manuscript-required content with plate/imposition records and sampled finished copies; record rejected/corrected impressions and their material/energy costs. Original research, authorship and rights administration are outside this manufacturing study; disclose that limit rather than implying all publishing services are included. | `chicago-production` |
| `b_provider_once` | upstream and outsourced stages | Link each actually supplied whole product or formulation once. If disaggregating a provider, replace its owned portions explicitly; do not add contained pigments/resins/water to a whole recipe, paper mill to a complete paper background, or contractor operations to the same complete service twice. Retained book components are not additional final products. | `ilcd-lca-2010` |
| `b_stage_balance` | every physical stage | For material/state k at stage s record B + external_in + internal_in + formation = C + external_out + internal_out + consumption + discrepancy. Formation/consumption are only real conversion between defined states: raw sheets become ink-bearing signatures, then gathered blocks and glued/trimmed books. Retain component mass, moisture and conversion links; do not create total matter from a bookkeeping state change. Same-state warehouse transfers are internal legs, never external receipts or formation. Match internal_out to the receiving internal_in; these cancel on consolidation. | `epa-eiip-2002`; `mm-antaro` |
| `b_stock_cohort` | raw/WIP/FG/return records | Keep raw, WIP, newly released FG, previously released FG and reusable assets mutually exclusive at each cut-off. Track genuine outward and same-item return identities, owners, original cohorts and inherited V/A per exchange. Include current closing-new-FG first release once; failed lots, idle, cleanup and zero-Q burdens remain visible pending justified assignment. | `ilcd-lca-2010` |
| `b_environment` | wastes and emissions | Measure each actual stream and species after capture at its true boundary. Collected dust, spent liquids and indoor circulation are not outdoor elementary releases. Factory boiler emissions are separate from purchased electricity/heat or offsite treatment backgrounds. No process-free plate-processor bath is assumed; plate manufacture and on-press coating fate still require accounting. | `epa-ctg-2006`; `epa-method18`; `epa-gas-2026`; `kodak-sonora` |
| `b_additions` | actual additional exchanges | Survey ancillary heat/fuel, refrigeration leakage, lubricants, blankets, rollers, filters, incoming packaging and transport. Add each actually present specific exchange and provider/receiver basis before claiming completeness. Missing observation cannot establish absence or a cut-off. Alternative printing/binding structures require applicability review rather than automatic reuse. | `ilcd-lca-2010`; `epa-ctg-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `book_manufacture` | Professional and scholarly paperback manufacture | required | Approved specialist-use title/edition in the selected sheetfed uncoated EVA construction | foreground | 1 kg accepted net new complete books |

One consolidated factory process contains the physical stages in b_route; stage ledgers and meters remain separately inspectable. Internal signatures, covers and blocks retain matching quantities, states and provenance without additional consolidated exchanges. External cards below represent one exchange each; conditional cards do not assert its occurrence. A real dataset must retain distinct streams, sites, destinations, colour/SKU and service legs even when several share a compatible flow UUID.

### Process: Professional and scholarly book manufacture (`book_manufacture`)

#### Inputs

##### Product flows

###### Text paper (`text_paper`)

Purchased dry unprinted uncoated woodfree sheets. Measure grade/furnish/recycled fraction, grammage, moisture and sheet size; the broad paper identity sets none of them. Reconcile issued paper with signatures, WIP and rejects.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_materials; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`

###### Flexible cover paper (`cover_paper`)

Uncoated flexible cover stock, separately weighed from text stock. No board case, laminate, jacket or varnish. Record actual cover grade and print passes, including rejects.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_materials; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `mm-antaro`

###### Finished process-free offset plate (`plate`)

Finished photosensitive-coated aluminium plate imaged by CTP and developed on press. A cut/grained/anodized substrate is incomplete and is not selected. Measure finished plate count/mass/coating, imaging energy and coating fate in make-ready/waste.

- Selected flow: Finished process-free aluminium offset plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_materials; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `kodak-sonora`

###### Black paste ink (`ink_black`)

One as-supplied black conventional oil-based offset paste SKU; record text/cover use, full formulation, setting and carbon origins. The broad solvent-based planographic identity has offset synonyms and no hard heatset requirement; generic solvent examples are not this SKU's recipe.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_formulations; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Cyan paste ink (`ink_cyan`)

Conditional one cyan offset paste SKU for actual colour figures or cover, retaining its own formulation and plate/pass records. Do not infer colour coverage, positive use, heat drying or a soy fraction from the generic UUID.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_formulations; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Magenta paste ink (`ink_magenta`)

Conditional one magenta conventional oil-based offset paste SKU. Weigh actual issue/recovery and retain full supplied formulation ownership; pigments analysed inside it are not extra purchases.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_formulations; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Yellow paste ink (`ink_yellow`)

Conditional one yellow conventional offset paste SKU; actual setting must be absorption/oxidation. An optical-assembly-only ink is incompatible. Additional spot colours require individually identified cards and complete job records.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_formulations; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Aqueous offset fountain concentrate (`fountain_concentrate`)

One actual supplied aqueous fountain-concentrate formulation, including its carrier water. Record every actual ingredient/CAS and concentration, including unpublished constituents; no default alcohol or glycol recipe. Component analysis and any replaced provider portions remain reconciled once.

- Selected flow: Aqueous offset fountain concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_formulations; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Petroleum-distillate offset blanket wash formulation (`blanket_wash`)

One actual as-supplied conventional offset blanket/roller wash, with complete hydrocarbon UVCB, water/additive and supplier records. A gasoline fraction, printhead cleaner or isolated solvent is not the whole wash. A different actual wash chemistry needs a specific replacement identity review.

- Selected flow: Petroleum-distillate offset blanket wash formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_formulations; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### EVA spine adhesive (`eva_spine`)

One complete nonreactive EVA thermoplastic book-spine hotmelt formulation. The generic hotmelt identity does not specify EVA grade, tackifier/wax shares or temperature. Record actual SKU, pot issues/returns/purges and melt/standby energy; no pure-EVA polymer substitution.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_binding; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `mm-antaro`; `henkel-hotmelt`

###### EVA side adhesive (`eva_side`)

Conditional one separately supplied nonreactive EVA side-glue SKU, if this construction uses it. Weigh separately from spine glue; if exactly the same SKU, sum only disjoint weighed issues. Actual PUR/PVA or other side glue is outside the selected two-EVA construction and requires route review.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_binding; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `mm-antaro`

###### Separately added tap water (`water`)

Purchased treated tap water added to fountain/wash/cooling circuits. Meter uses separately and preserve temperature/density; exclude water already owned by complete supplied formulations. Reconcile liquid, product-moisture, vapour and stock paths.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_water; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-ctg-2006`

###### Grid electricity (`electricity`)

Conditional compatible CN customer-side 1–35 kV AC grid-average supply. Meter CTP, press, compressors, cooling/extraction, folding, binder/glue-pot, trimmer, QC and packing including setup and idle. Other supply geography/voltage needs a compatible identity/provider, not this UUID by default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_utilities; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-eiip-2002`; `mm-antaro`

###### Auxiliary pipeline natural gas (`natural_gas`)

Conditional compressed/pipeline gas used for an actual attributable boiler or space heating. It is not conventional ink drying. Preserve volume convention, measured composition and burner service; methane CAS and broad comments do not establish pure CH4 or an emission factor.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_utilities; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-gas-2026`

###### Purchased steam-derived heat (`purchased_heat`)

Conditional delivered heat from an outside provider. Measure separate supply/return enthalpy flows and leakage/blowdown/storage, matching the provider boundary. A chemical-bath steam-heat identity is not adopted for book production; specific heat identity and provider remain unresolved.

- Selected flow: Purchased steam-derived heat
- Flow property / unit: Delivered enthalpy / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_utilities; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ilcd-lca-2010`

###### Starch anti-setoff component (`starch_powder`)

Conditional actual unmodified starch in anti-setoff powder. Verify feedstock, coating/additives and particle sizes rather than treating all powder as pure starch. Separate retained powder, collected residue and outdoor particle bins; provider ownership of a whole coated powder cannot be counted again as components.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_materials; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `heidelberg-powder`

###### Cotton press-cleaning cloth (`cotton_cloth`)

Conditional actual cotton textile used for cleaning, weighed dry separately from retained wash/ink and tracked through laundering/reuse. Fabric names support this material; raw-cotton classification and plant comment are source defects, not permission to use an agricultural cotton background. Require actual fibre/provider proof.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_materials; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-ctg-2006`

###### Complete corrugated shipping box input (`shipping_box`)

Conditional one complete corrugated box component. Measure actual fibre grade, whole mass, coating and owner, distinguishing first purchases P, first nonpurchase entries N_ext and proven same-item returns ER. A box fixing an unverified fibre recipe is not adopted.

- Selected flow: Complete corrugated shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_packaging; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### PE dispatch film input (`pe_wrap`)

Conditional actual polyethylene film, CAS 9002-88-4, including measured additives and grade; not cover lamination. Its source classification conflicts with positive film names/CAS. Keep that defect visible while verifying the actual film/provider; no PP/PET/multilayer substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_packaging; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### Genuine same-item book return (`returned_book`)

Conditional physical receipt supported by the same item's earlier outward record. Carry title/edition, owner, original cohort c, Qc and every inherited exchange vector; no new production quantity or virgin-paper receipt. Unproven returns remain separately unresolved.

- Selected flow: Professional, technical and scholarly books, in print `482807bc-2a34-471b-b72e-6e431c1f0d9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_returns; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_returns`
- Sources: `ilcd-lca-2010`

##### Waste flows

No prescribed boundary exchange in this group; any actual exception requires a specific recorded exchange.

##### Elementary flows

No prescribed boundary exchange in this group; any actual exception requires a specific recorded exchange.


#### Outputs

##### Product flows

###### First-released complete books (`finished_book`)

The only new production reference. Weigh complete accepted books of the approved specialist title/edition after binding/trim/content checks, including all retained components, excluding packaging. Q includes new closing FG once; already released returned or reworked copies do not re-enter Q.

- Selected flow: Professional, technical and scholarly books, in print `482807bc-2a34-471b-b72e-6e431c1f0d9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `unsd-cpc3-2025`; `chicago-production`

###### Previously released book redispatch (`old_book_dispatch`)

Conditional gross outward movement of the original-cohort returned/reworked book. Retain original vector plus actual added service and transport; keep separate from first-release finished_book and do not net it against returns or create another Q.

- Selected flow: Professional, technical and scholarly books, in print `482807bc-2a34-471b-b72e-6e431c1f0d9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_returns; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_returns`
- Sources: `ilcd-lca-2010`

###### Complete corrugated box outward (`box_out`)

Conditional same specific box component leaving with a shipment or returning to its owner. Record gross dispatch and owner-return as distinct leg records with inherited vectors and actual transport; neither is box consumption or a negative purchase merely because ownership differs.

- Selected flow: Complete corrugated shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_packaging; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### PE film outward (`film_out`)

Conditional actual PE film dispatched with books or returned to its owner. Keep each gross leg, state and cohort separate; exclude the film from net book mass and record independent trim/waste. A net receipt/return balance cannot replace physical legs or transport.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_packaging; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

##### Waste flows

###### Paper trimming waste (`paper_trim`)

One actual segregated paper trim stream; preserve as-exported whole mass, moisture, ink/glue contamination and receiver acceptance. Reject books or packaging collected separately need separate stream records; neither sale nor a generic UUID grants a recycling credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `mm-antaro`

###### Rejected printed books (`book_rejects`)

Conditional one separately dispatched rejected-book stream, including actual retained cover/ink/EVA and moisture. Retain reasons such as wrong edition/signature/figure, rework attempts and cohort costs; no Q for failed copies and no duplicate paper/ink/glue waste for the same mass.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `mm-antaro`; `chicago-production`

###### Spent coated aluminium plate (`spent_plate`)

One whole solid spent plate stream with measured aluminium, coating, retained ink/wash/water and receiver. The broad solid-waste UUID is a location for this specific stream, not pure aluminium scrap, automatic hazard status or a treatment process.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `kodak-sonora`

###### Segregated ink residue (`waste_ink`)

One segregated actual offset ink residue stream. Weigh and characterize its whole supplied/wet state; the same retained ink in paper, rag or liquid streams is not also assigned here.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Spent blanket wash (`wash_liquid`)

One physically liquid whole used-wash mixture leaving the plant; measure density/temperature, water-specific fraction and independent solids/volatile constituents. Nonwater mass is not automatically dry solids. No duplicate ink, oil or carrier-water waste component exchange.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Spent fountain solution (`fountain_liquid`)

One separate whole liquid fountain bleed/cleanout with actual water, organic constituents, salts and ink. Preserve sewer/offsite receiver and whole-transfer basis; this is not direct freshwater emission or paper-mill wastewater.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Contaminated solid cotton cloth (`rag_waste`)

Conditional discarded solid cloth stream with independently measured dry textile and retained ink/solvent/water. Reusable cloth sent to laundering remains a service/asset movement with its actual loads and return legs; do not also discard it. The broad UUID does not establish contamination or receiver compatibility.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-ctg-2006`

###### Cooled EVA adhesive purge (`glue_purge`)

Conditional one cooled solid EVA formulation purge including actual paper/ink contamination. Weigh separately from recovered internal glue and glue in rejected books; a hot liquid or different chemistry needs another compatible identity.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `mm-antaro`

###### Collected spine-milling dust (`paper_dust`)

One separately collected/exported dust stream from milling/cutting. Measure whole mass, moisture and actual cellulose/ink/glue content; never also count captured dust as atmospheric PM. Generic dust comments do not supply composition or loss fractions.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `mm-antaro`

###### Collected starch powder residue (`powder_residue`)

Conditional separately collected solid starch-based residue, characterized with actual coatings/ink/paper. Keep distinct from retained powder, paper dust and airborne bins; broad solid waste has no default receiver/treatment credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_wastes; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `heidelberg-powder`

###### Discarded corrugated packaging (`box_waste`)

Conditional one specific discarded cardboard packaging stream, measured whole with contamination and moisture. Distinguish it from reusable box outward/owner return; record incoming supplier packaging as well as dispatch-box rejects.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_packaging; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### Discarded PE packaging film (`pe_waste`)

Conditional one as-generated PE packaging scrap stream with actual additives/contamination and receiver. A cleaned recycled-PE product is a different state; do not net this waste against dispatch film or assume recycling credit.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_packaging; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

##### Elementary flows

###### Isopropanol to outdoor air (`ipa_air`)

Conditional measured IPA, CAS 67-63-0, actually reaching outdoor air. Survey actual supplied chemistry and vents, correct matched inlet species mass and moisture, and retain calibration/recovery/LOD. No assumed alcohol recipe or TVOC-to-species fraction.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method18`; `epa-ctg-2006`

###### Acetic acid to outdoor air (`acetic_air`)

Conditional actual acetic acid, CAS 64-19-7, from verified chemistry/thermal history and validated sampling. EVA-class SDS lists possible decomposition products but proves neither routine positive emissions nor the selected glue's degradation temperature or factor.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `eva-sds`; `epa-method18`

###### Outdoor PM up to 2.5 micrometres (`pm_fine`)

Measure actual residual outdoor particles at or below 2.5 micrometres after control; keep inlet subtraction, filterable/condensable definition and source/outlet intervals. No cumulative PM10/TSP addition or collected-dust duplication.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `heidelberg-powder`; `epa-gas-2026`

###### Outdoor PM above 2.5 to 10 micrometres (`pm_coarse`)

Measure only the disjoint interval above 2.5 and up to 10 micrometres, with compatible sampling definitions. Cumulative PM10 minus PM2.5 requires matched boundaries and valid uncertainty; unresolved fractions stay gaps.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `heidelberg-powder`; `epa-gas-2026`

###### Outdoor PM above 10 micrometres (`pm_large`)

Measure the nonoverlapping above-10-micrometre outdoor residual. Select actual air subcompartment; the adopted unspecified-air identity is not the distinct long-term release candidate. No imported paper-mill emission factor.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `heidelberg-powder`

###### Net outdoor water vapour (`water_vapour`)

Integrate actual outlet minus matched inlet water-vapour mass after condensation/control. Reconcile paper/formulation moisture, liquid bleeds and storage, plus actual combustion hydrogen if present. Do not assign all supplied water or an unmeasured balance residual to this species.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_water; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-method18`; `epa-gas-2026`

###### Outdoor fossil CO2 (`co2_fossil`)

Conditional actual fossil carbon mineralisation in attributable onsite combustion/oxidation, with measured fuel and outlet/carbon balance. Retained ink/glue carbon is not CO2; exclude upstream utility/treatment releases already owned by providers and avoid long-term or correction-flow identities.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-2026`

###### Outdoor biogenic CO2 (`co2_biogenic`)

Conditional documented actual onsite mineralisation of biogenic carbon, not paper carbon retained in books and not an automatic CO2 offset. Keep fossil/biogenic source split, quantity and method evidence; a delayed-emission correction flow is incompatible.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `ilcd-lca-2010`

###### Outdoor fossil CO (`co_fossil`)

Conditional measured fossil carbon monoxide from actual onsite fuel combustion. Match carbon origin, outlet and time, not a purchased CO product or biogenic CO identity; no default complete combustion fraction.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-2026`

###### Outdoor fossil methane (`methane_fossil`)

Conditional actual fossil methane leakage/unburned gas, CAS 74-82-8. Verify species and source despite erroneous unrelated database synonyms. Fuel consumption is not methane emission; assess leakage separately from stack combustion without duplicated outlets.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-2026`

###### Outdoor nitrogen oxides (`nox`)

Conditional actual NOx from auxiliary combustion. Establish monitoring/exchange/LCIA mass basis and any NO2-equivalent conversion. N2O is separate, and NO/NO2 components cannot be added again to their aggregate. No default factor or unproved equivalent basis.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-2026`

###### Outdoor nitrous oxide (`n2o`)

Conditional actual N2O, CAS 10024-97-2, from attributable onsite combustion with equipment/load and analytical evidence. It is not part of the NOx aggregate and is not supplied anaesthetic gas.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-2026`

###### Outdoor sulfur dioxide (`so2`)

Conditional actual SO2, CAS 7446-09-5, from actual fuel sulfur/odorant and combustion. Retain measured sulfur and outlet evidence; sulfur oxides as a different aggregate is not a substitute, and a literature low-emission statement does not establish zero.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record measured physical exchange per 1 kg reference flow using cp_emissions; retain the compatible cohort and original unallocated records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-2026`

## 7. Allocation and Co-product Handling

The following selects attributional manufacturing inventory treatment. ILCD chapter 7.9 concerns attributional multifunctionality; its decision-context limitations and annex 14.4 recycling distinctions apply. It is not permission to use attributional partitioning for a consequential claim. EPA VOC accounting supplies no LCA allocation hierarchy. [ilcd-lca-2010]

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_physical_load` | all inventory rows | Retain unallocated physical vector V by exchange, stage, owner and cohort, independently of environmental-load vector A. Burden shares do not shrink actual accepted books, wastes, purchased components or return/dispatch legs. Document which representation a model consumes; do not add V-based complete providers and already expanded A for the same service. | `ilcd-lca-2010` |
| `a_subdivision` | shared processes | First separate title/edition jobs and directly meter distinguishable prepress, printing, binding, cleanup and utility operations. Apply justified virtual subdivision to uniquely attributable inputs before partitioning only the genuinely joint remainder. Keep setup, idle, failed-run and cleaning records, including periods with Q = 0. | `ilcd-lca-2010` |
| `a_causal` | remaining shared loads | Test the determining physical relationship for each load: matched press runtime and load, actual sheet area/passes and ink coverage, binder/glue service, occupied space-time or measured thermal duty as applicable. Document why the selected driver changes that load, its numerator and complete denominator including other users and failed/idle activity. Page count, copy mass, topic or selling price alone is not demonstrated causality. If unsupported, retain unresolved allocation for that load. | `ilcd-lca-2010` |
| `a_residual_value` | residual truly joint multifunctional loads | Only after documenting infeasible subdivision and absence of determining physical causality may a reviewed residual market-value method be considered. Use comparable quantities and actual prices at the joint point and condition, removing downstream-specific packaging/transport/services. If all necessary values and product/waste roles are justified and the positive denominator is valid, the proposed share is quantity_i × price_i divided by the sum over all relevant cofunctions; record period and sensitivity. Missing, zero or negative fee/value cases require explicit method review; never clip negative values to zero or force a ratio without support. | `ilcd-lca-2010` |
| `a_cohort` | new production, WIP and old FG | First-release Q is a physical cohort fact, not monthly sales. Transfer inherited exchange-specific V/A from earlier WIP into its actual production cohort and carry closing WIP forward. Carry A for newly released closing FG with those books; later sale cannot allocate that burden again. Returned/old FG retains original Qc and vector plus actual additional service. Do not divide unrelated period purchases, all old services or all returns by current new Q. | `ilcd-lca-2010` |
| `a_waste_recycling` | trim, plates, packaging and reused assets | Preserve full waste mass and actual receiver/treatment. A sale, nonpurchase entry, zero invoice or return does not establish zero embodied load, co-product status or avoided virgin production. Identify waste-treatment function versus recovered product and apply the study's reviewed recycling model with explicit ownership once; no automatic substitution credit. Unresolved fee, quality, displacement or provider boundaries remain gaps. | `ilcd-lca-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols collect real future records, not numbers inferred from equipment capability or database identity. Preserve calibrated originals and the exact reporting period, participating sites and title/edition lots. Every applicable row uses a compatible cohort's per 1 kg reference flow basis; different physical and burden denominators remain separately labelled. Zero-Q records are retained unnormalized until their assignment is justified.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `book_manufacture` | first-release complete book | future foreground measurement | title; edition; master hash; professional/research purpose; approved proofs; required figures/tables/equations/index; signature/page/copy count; accepted net masses; moisture; first-release time; original cohort; opening/closing FG; packaging tare | Inspect approved manuscript against imposition and sampled finished copies; record symbol/figure legibility, page sequence and binding/trim acceptance. Weigh using calibrated scales or traceable same-design measured copy sampling, reconciled to lot weights. Record first quality release separately from sale. Aggregation scope: per 1 kg reference flow; cp_release establishes compatible new Q only. | kg; copies | every job and release; stock closure | declared lot and reporting period, including opening WIP and new closing FG | actual printer and declared finishing contractor | per 1 kg reference flow | signed master/release record; scale calibration; sampling plan; rejected/corrected-copy log |
| `cp_materials` | `book_manufacture` | paper, finished plate, starch, cloth separately | future foreground measurement | stage; lot; SKU; supplier; state; sheets/count; gross/tare/net mass; moisture; fibre/coating/solids; B/C stocks; external/internal movements; formation/consumption; transport; inherited vector | Weigh actual receipts, issues and states; verify supplier specifications and finished-plate coating. Close stage/component balances under calc_stage; same-state transfers are internal. Survey blankets, rollers, lubricants and refrigeration separately and add actual atomic exchanges before completeness. Aggregation scope: per 1 kg reference flow for compatible cohort V; A assigned independently. | kg; sheets | each receipt/job/transfer; period stock closure | declared period with each production cohort identified | actual print/bind/pack stages and attributable contractors | per 1 kg reference flow | invoices; weighing; supplier certificates; stage ledgers; uncertainty and discrepancies |
| `cp_formulations` | `book_manufacture` | each colour ink and whole fount/wash SKU | future foreground measurement | stage; colour; SKU; batch; whole mass; density/temperature; complete ingredients/CAS; concentration; water/volatile/solid fractions; carbon origin; issue/recovery; product retention; waste/air fate; provider-owned components | Weigh each complete formulation and stock changes; obtain full supplier recipe/assay including ingredients absent from public SDS. Maintain analytical constituent balances and water subledger without adding their quantities/providers to an already owned whole formulation. Aggregation scope: per 1 kg reference flow for compatible cohort; whole/component ownership reconciled first. | kg; m3 | each job, batch and formula change; period closure | real batches during setup, run and cleanup | press, dampening, washing and storage | per 1 kg reference flow | actual SDS plus complete supplier disclosure/assays; calibrated weighing; density and recovery evidence |
| `cp_binding` | `book_manufacture` | spine and side EVA separately | future foreground measurement | edition/job; glue SKU; chemistry; actual formulation; pot B/C; issues; returns; purges; retained glue; temperature/residence; setup/idle/running heater energy; milling and pull/handling acceptance | Verify nonreactive EVA grades for both used positions; weigh separate supplied issues and cooled purges; log melt-pot and binder energy. Reconcile glue in accepted/rejected books and WIP; source capability cannot establish a recipe or consumption. Aggregation scope: per 1 kg reference flow for compatible cohort. | kg; MJ | each job and pot filling/cleaning | complete actual binding and standby cycles | actual binder and contractor if included | per 1 kg reference flow | supplier grade/recipe; weighing; meter logs; approved binding tests |
| `cp_utilities` | `book_manufacture` | electricity; gas; purchased heat as separate exchanges | future foreground measurement | meter/device/stage; start/end; kWh; voltage; grid/region/year; gas m3; T/P; wet/dry; composition; compressibility; heating value; burner duty; supply/return masses in kg and specific enthalpies in kJ/kg; leaks/blowdown/storage with original energy units; full shared drivers | Submeter all stages and reconcile bills, distinguishing electricity, actual auxiliary gas and imported heat. Retain original units for all heat records, including already-MJ meters; apply the common-kJ balance and single net-kJ-to-MJ conversion in calc_heat. Preserve actual function, provider boundary and causal load evidence; never infer heatset drying, efficiency or steam-return mass equality. Add other actual fuels individually. Aggregation scope: per 1 kg reference flow for compatible cohort A/V; zero-Q records retained. | MJ; kJ; kWh; m3; kg; kJ/kg | continuous or each complete cycle; bill reconciliation | actual setup, production, failed, idle and cleanup intervals | included plant utilities and declared outside heat supplier | per 1 kg reference flow | meter calibration; gas assays; T/P bases; enthalpy evidence; provider and shared-denominator records |
| `cp_water` | `book_manufacture` | supplied water and net vapour separately | future foreground measurement | source; stage; volume; density/T; formula carrier water; paper moisture; B/C; makeup; bleed; condensate; product/waste water; inlet/outlet airflow and humidity; fuel hydrogen if relevant | Meter separately added water and independently quantify formulation/paper water and outgoing liquids. Measure matched inlet/outlet vapour on compatible bases, including control condensate. Reconcile actual water formation/consumption; residual is not an identified release. Aggregation scope: per 1 kg reference flow for compatible cohort; preserve whole-mixture subledger ownership. | kg; m3 | each fill/bleed and representative full cycle; stock closure | declared period and actual humidity/production conditions | actual fountain/wash/cooling and outdoor outlets | per 1 kg reference flow | calibrated meters; moisture-specific methods; humidity/flow data; liquid assays and balance uncertainty |
| `cp_wastes` | `book_manufacture` | each segregated whole waste stream | future foreground measurement | stream/bin; job/cohort; physical state; whole gross/tare/net mass; water fraction; independently measured solids/volatile fraction; constituents; receiver; treatment; fees/value; dispatch time; transport; B/C | Weigh every specific waste at transfer, retaining actual as-exported moisture and contamination. Distinguish rejected books, paper trim, collected dust, plates, ink, wash, fountain bleed, cloth and cooled glue; do not add contained components again. Aggregation scope: per 1 kg reference flow for compatible cohort; physical V never scaled by A shares. | kg; m3 | every collection/dispatch and stock closure | actual reporting period including stored waste and cleanup | factory gate and declared treatment contractor | per 1 kg reference flow | receiver acceptance; weighbridge; assays; contracts; actual treatment ownership and fee evidence |
| `cp_packaging` | `book_manufacture` | each packaging component and leg | future foreground measurement | component/SKU/state; owner; cohort; original inherited V/A; raw/WIP/new-old FG/reusable B/C; first purchase P; first nonpurchase N_ext; same-item prior outward proof and ER; internal_in/out; real conversion; grossdispatch; owner-return; waste; transport; bundled price/provider ownership | Identify each box/film and every actual additional incoming/outgoing/reusable component. P includes first outside purchase even when embedded in a package price with no separate invoice; N_ext covers genuine first loan/rental/entrusted/with-goods entry. ER requires a proven same physical item's prior outward leg. Preserve each gross outward/owner-return/waste leg and actual transport; close calc_pack by component/state without netting. Aggregation scope: per 1 kg reference flow for compatible cohort; old services retain Qc or reviewed service basis. | kg; items; tonne-km | every first entry, shipment, return, discard and stock closure | actual period and original reusable/FG cohorts | all included supplier and dispatch packaging boundaries | per 1 kg reference flow | contracts/invoices including bundled charges; component weights; owner and same-item linkage; stock and transport evidence |
| `cp_returns` | `book_manufacture` | returned/old book and actual added services | future foreground measurement | same-item identity; title/edition; owner; prior outward date; cohort c; Qc; inherited vector per exchange; physical gross return/outward; rework/repack/storage; added materials/energy/waste/transport; FG B/C | Match genuine return to the original outward item; carry its full compatible exchange vector, identify actual new service separately, and retain all physical legs. Record purchased complete books separately with an actual compatible provider; no duplicate whole-book and component expansion. Aggregation scope: per 1 kg reference flow of original cohort Qc or explicitly reviewed service basis; no new Q. | kg; service units | every return/rework/re-dispatch and closure | original cohort plus actual service interval | actual receiving/servicing/dispatch site | per 1 kg reference flow | original release/outward records; exchange vector; rework/service meters and transport records |
| `cp_emissions` | `book_manufacture` | each actual outdoor species and disjoint particle bin | future foreground measurement | outlet/stage/time; actual ingredient/CAS survey; compound/carbon origin; inlet/outlet concentrations and flows; T/P; humidity; wet/dry/normal basis; response; recovery; calibration; LOD; filterable/condensable particle bins; control; NOx mass convention | Survey actual fount/wash/ink/glue/thermal chemistry, including species not prelisted here. Use competent validated compound-specific sampling and matched airflow integration over setup/run/cleaning/idle; Method18 excludes very low-volatility/polymerizing compounds unless another valid method covers them. Keep TVOC equivalents as QA rather than an additional species sum; residuals and nondetect uncertainty remain explicit. Aggregation scope: per 1 kg reference flow for compatible cohort; each outlet/time counted once. | kg; mg/m3; m3/time | representative complete operating cycles and each chemistry/control change | actual period and outlet conditions including abnormal cycles | factory outdoor vents/stacks/fugitives; offsite providers excluded | per 1 kg reference flow | laboratory/method competence; calibration/recovery/blank/LOD data; ventilation closure; actual carbon/species and PM definitions |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_cohort` | all inventory rows | For a compatible new cohort with Q > 0, report physical exchange V_i / Q and assigned burden A_i / Q as different quantities. Q is total first-released net new book mass, with newly released closing FG once. Reconcile opening/closing raw and WIP and inherited vectors first; do not use all purchases or monthly sales as every numerator/denominator. If Q = 0 preserve records without division and leave assignment explicit. | cp_release; cp_materials; cp_utilities; compatible V; separately assigned A | per 1 kg reference flow physical and burden records with scope | ilcd-lca-2010 |
| `calc_copy_mass` | cp_release | Cohort accepted kg = sum of first-released accepted copy count by same-design stratum × its calibrated measured mean net copy mass; reconcile total lot weighing and moisture. Never substitute a generic book weight or include dispatch packaging. | cp_release; stratum counts; same-design measured masses | first-release Q in kg | chicago-production |
| `calc_returns` | returned_book; old_book_dispatch | Carry each original exchange vector Vc_i and Ac_i with its actual same-item/cohort movement. Add measured new service vectors deltaV_i and deltaA_i separately; use original Qc for that cohort or an explicit reviewed service extent. Do not book inherited whole-book providers/components twice, net outward against return, or add copies to new Q. | cp_returns; original Qc; original exchange vectors; actual added services | original and incremental per-cohort inventory, no new reference production | ilcd-lca-2010 |
| `calc_stage` | all physical stages | For each material/state, B + external_in + internal_in + real formation = C + external_out + internal_out + real consumption + discrepancy. Transformation links reconcile underlying components and moisture. Same-state transfer is only internal_in/out; paired legs cancel across the consolidated process. Treat book-quality release as the Q event, not extra material formation in addition to an already counted complete book. | cp_materials; cp_formulations; cp_binding; cp_release; cp_wastes; cp_water | closed state-specific V ledger with explained discrepancies | epa-eiip-2002; mm-antaro |
| `calc_pack` | each packaging component | At component/state level B + P + N_ext + ER + internal_in + actual formation = C + grossdispatch + owner-return + waste + internal_out + actual consumption + discrepancy. P, N_ext and ER are mutually exclusive entry facts; same-state inventory movement creates no formation. Sum mutually exclusive raw/WIP/new-old-FG/reusable stocks; keep owners/cohorts and inherited V/A. Use either whole-container or disaggregated component providers once, with actual repair/clean/transport additions; a zero separate price is not zero load. | cp_packaging; component weights; owner/cohort records; original outward proof; compatible providers | full physical component/leg ledger and separately attributed A | ilcd-lca-2010 |
| `calc_components` | complete supplied formulations | Analytical component mass = whole delivered mass × actual measured/verified mass fraction. Convert volume only with compatible measured density and temperature. Analytical water, carbon, pigments/resins and volatile fractions are linked subaccounts; only disjoint replaced provider portions become independent exchanges. | cp_formulations; cp_water; actual composition/density | constituent balances without whole/component double counting | epa-ctg-2006 |
| `calc_electric` | electricity | MJ = metered kWh × 3.6. Apply compatible cohort/service assignment separately from this exact unit conversion. | cp_utilities; metered kWh | electricity MJ before attribution | ilcd-lca-2010 |
| `calc_heat` | purchased_heat | Delivered control-volume heat is reconciled from the sum of supply mass × specific enthalpy minus the sum of return mass × specific enthalpy, with separately observed leakage/blowdown/other outlet and stored-energy terms at the declared boundary. Each kg × kJ/kg stream is kJ. Convert every energy term to kJ before combining with its declared control-volume sign; an already-MJ term is multiplied by 1000 only to enter this common-kJ balance. Divide the reconciled net kJ by 1000 exactly once to report MJ (1 MJ = 1000 kJ); an already-MJ meter reading used directly on the same delivered-heat basis is not divided again. Derive useful heat only from a complete energy balance; m(hs−hr) needs proven equal mass and, with m in kg and h in kJ/kg, yields kJ before this single division by 1000. Do not add boiler fuel again when included in a complete purchased-heat provider. | cp_utilities; independent mass/enthalpy streams; leaks/blowdown; stored energy; provider boundary | explicitly based delivered MJ and unresolved balance if incomplete | ilcd-lca-2010 |
| `calc_species` | each elementary air row | Integrate compatible outlet species mass flows minus matched inlet species mass flows, with measured response/recovery and correct wet/dry T/P bases. Count distinct outlet/time windows once; identify actual transformation and retention in product/waste before interpreting a balance. Unidentified organic remainder is not a known species. | cp_emissions; cp_water; actual compound analyses; matched ventilation | actual species kg with uncertainty before cohort normalization | epa-method18; epa-ctg-2006 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_purpose_master` | reference product | Verify intended specialist use and approved edition; check required page/signature, diagram, equation, table, reference and index completeness against the real master. Professional topic does not prove this category or scientific correctness. | publication/commission; approved files and proofs; final-copy acceptance |
| `dq_site_recipe` | inputs and operations | Verify actual equipment configuration, paper/plate/glue/ink/fount/wash SKU and complete formulations. Machine and manufacturer records establish possible technology, not the site's recipe, provider match or measured amount. | equipment/job logs; suppliers and assays; calibrated field records |
| `dq_ranges` | all important flows | Obtain independent boundary-compatible range evidence or real foreground uncertainty before quantitative completion. This draft supplies no invented empirical ranges, plant factors, emission fractions or lifetimes; preserve each missing amount/range need and distinguish unobserved from demonstrated absence. | actual measured distributions; source applicability; explicit unresolved register |
| `dq_vectors` | all cohorts and packaging | Audit per-exchange inherited V/A, mutually exclusive stocks, P/N_ext/ER and gross legs. Shared-load denominators cover all real users and intervals, not merely current sales; preserve zero-Q loads and incomplete allocation. | original cohort vectors; inventory/owner contracts; period balance and driver coverage |
| `dq_environment` | wastes and emissions | Retain whole as-exported waste mass with independent water/solid/volatile analyses, actual receiver and treatment. Check species/CAS, carbon origin, air subcompartment, nonoverlapping PM bins and NOx basis; generic comments and factors cannot replace site evidence. | laboratory/receiver records; ventilation/combustion survey; mass/water/carbon reconciliation |
| `dq_identity` | every UUID/provider | Exact native name/type/property/unit and route constraints establish only conditional identity. Verify site grade, form, geography/year and provider-owned stages separately; source classification/synonym defects remain disclosed. Missing UUID/provider/quantity is not zero or universal methodological rejection. | original database detail and support chain; compatible actual provider and specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference dataset | Confirm real professional/research purpose and selected physical route, complete approved title/edition and functional-unit qualifiers. Distinguish textbooks/general reference/directories/periodicals; do not infer book classification from an academic subject or a journal frequency rule. | `unsd-cpc3-2025`; `chicago-production` |
| `v_Q` | release and stocks | Check only one new reference output, Q first release and new closing FG once. Opening FG, already released returns, rework and later services cannot increase Q; record failed/idle/cleanup and zero-Q loads. Check WIP and old-cohort exchange vectors rather than redistributing all period purchases over current Q. | `ilcd-lca-2010` |
| `v_balance` | stage and component ledgers | Verify each internal_out/internal_in pair, real state transformation and underlying component balance, mutually exclusive stocks and observed discrepancies. Same-state transfer is not receipt/formation. Retained ink/EVA/powder stay in full book mass; waste, airborne matter and product components are not double counted. | `epa-eiip-2002`; `mm-antaro` |
| `v_pack` | packaging and returns | Reconcile every component's first purchase including bundled prices, first nonpurchase entry and proven same-item ER, owners/cohorts, inherited vectors, gross dispatch/owner-return/waste and actual transport. Reject net-only ledgers, free-entry zero-load assumptions and duplicated whole-container/component providers. | `ilcd-lca-2010` |
| `v_loads` | assignment and recycling | Keep V separate from A; verify subdivision and each load-specific causal driver before any justified residual economic method. Missing/negative fees or values stay for review, never clip0. Audit waste/recovery function, actual treatment, provider ownership and any proposed credit once; no automatic credit from sales or returns. | `ilcd-lca-2010` |
| `v_utility` | electricity, fuel and heat | Match native MJ/m3 units, actual electricity CN/voltage and provider, gas T/P/composition basis and separate supply/return heat streams. Missing leakage/blowdown/storage or mass equality prevents forced enthalpy simplification. No default boiler efficiency or combustion/print-drying factor. | `ilcd-lca-2010`; `epa-gas-2026` |
| `v_species` | elementary outputs | Verify actual outdoor compounds, matched inlet/outlet quantities and relevant media; exclude indoor/long-term/correction candidates. Check disjoint PM bins, fossil/biogenic carbon and NOx-equivalent basis separately from N2O. TVOC equivalents, uncharacterized residuals, collected dust and offsite provider emissions are not additional identified factory species. | `epa-method18`; `epa-gas-2026`; `epa-ctg-2006` |
| `v_gaps` | concrete dataset completion | Inspect actual extra chemicals, spot colours, maintenance parts, reusable packaging, transport and refrigeration. Add each real atomic exchange and disclose performed/skipped checks, amounts, ranges, sources and unresolved identities/providers/allocation. Mechanical consistency does not establish scientific, bilingual or classification acceptance. | `ilcd-lca-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Compatible route-specific specialist printed-book production input only after real foreground inventory and independent review. |
| allowed_use | The declared title/edition and manufacturing subset with compatible actual providers, complete cohort/component ledgers, measured quantities and uncertainty. |
| excluded_use | All-books or entire-classification average; alternative printing/binding construction; equal learning/professional/research service, content validity, lifetime or avoided-material claim; numerical dataset inferred from equipment capability or UUIDs. |
| required_metadata | Every reference qualifier; site/contractor/year; composition and provider scope; actual Q/Qc and V/A basis; stock/packaging/return legs; shared drivers and reviewed residual method; sources and transport/treatment ownership. |
| required_quality_disclosure | Sampling/calibration and balance discrepancies; actual chemistry/species/media and process coverage; unresolved range, identity, site/provider and allocation needs; performed/skipped checks and scientific/translation review status. |
| update_trigger | Change in intended use, edition/master, page/figure/index design, paper/ink/plate/glue/fount/wash grade, printing/binding route, site/provider/year, utilities/control, packaging system, return service or allocation evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed pp.148–150; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual category/use, adjacent textbook/reference/directory distinctions and periodical-frequency context; no HS definition, construction or process requirement inferred. |
| `chicago-production` | `literature` | University of Chicago, How Books and Journals Are Produced, retained 27 October 2026; https://www.chicagomanualofstyle.org/help-tools/production-technologies.html | Design, Electronic Workflow and Print Technologies sections: production/master and print-ready-file integrity context. Job-specific equation/index checks are this PCR's collection obligations, not universal numerical tests or LCI quantities. |
| `epa-eiip-2002` | `official_guidance` | EPA, EIIP Volume II Chapter 15, May 2002, §2.1.1 PDF14–15, Fig15.2-1; https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Sheetfed offset books, dampening, penetration/oxidation and physical-stage survey; historical source description only, no universal recipe, factor or LCA allocation authority. |
| `epa-ctg-2006` | `official_guidance` | EPA-453/R-06-002, September 2006, IV.A, PDF12–14/printed6–8; https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | Actual ink/fountain/wash source categories and heatset contrast; no regulatory retention/VOC percentages, recipe or LCA allocation hierarchy adopted. |
| `mm-antaro` | `literature` | Müller Martini, Antaro official product page, retained 12 October 2026; https://mullermartini.com/en/product/antaro/ | Compact/flexible, Top class end products and Unbeatable variability paragraphs: offset gathering, milling, EVA options, softcover and trimming; alternatives and catalog limits are not actual site settings or quantities. |
| `kodak-sonora` | `literature` | Kodak, SONORA Process Free Plates Sustainability datasheet, PDF1, retained original with 2026 copyright; https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | Processor-chemical/rinse exclusion for the specific process-free route; not proof of zero upstream plate burdens, on-press waste or plant water. |
| `henkel-hotmelt` | `literature` | Henkel, TECHNOMELT GA485D official product page, retained 12 October 2026; https://next.henkel-adhesives.com/us/en/products/industrial-adhesives/central-pdp.html/technomelt-ga-485d/SAP_IB-95677.html | Soft-cover spine bookbinding hotmelt existence only; does not establish EVA composition, actual selected SKU, temperature, consumption or provider. |
| `walsworth-books` | `literature` | Walsworth, Commercial Book Printing, retained 12 October 2026; https://www.walsworth.com/book-printing | Markets/Print Platforms/Binding options: scientific, technical and professional book production and available platforms. No single-job sheetfed/EVA combination, formulation, factory amount or provider match is established. |
| `ilcd-lca-2010` | `official_guidance` | JRC, ILCD Handbook General Guide for LCA—Detailed Guidance, first edition March 2010, §§7.9.2–7.9.3 PDF275–288/printed255–268 and annex14.4; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional decision-context limits, subdivision, determining physical causality, justified residual joint-point value, service-specific drivers and recycling distinctions. Negative waste-fee adjustment is an outlook requiring further method development, not permission to clip0 or invent a credit. |
| `epa-method18` | `official_guidance` | EPA Method18, web copy dated 1 April 2025, §§1–2 and4, PDF1–2; https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | Compound survey/calibration, interference and moisture correction; polymerizing/very low-volatility exclusions remain. Internet copy itself refers to the official regulatory version; used as technical design guidance, not a legal compliance assertion or measured emission result. |
| `epa-gas-2026` | `official_guidance` | EPA AP42 §1.4 Natural Gas Combustion, October 2026 retained copy, §§1.4.1–1.4.3 PDF1–3; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Conditional actual boiler/furnace and species survey only. No average gas composition/heating value, factor, efficiency or quantity transferred to book production. |
| `heidelberg-powder` | `literature` | Heidelberg News270, 2010, Small Grains that Have a Big Effect, PDF/printed53; https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | Distinct starch/sugar/calcium-carbonate powders and coating alternatives; survey actual powder type and fate only, no catalog particle size, application rate or airborne fraction adopted. |
| `eva-sds` | `literature` | BÜHNEN, Hotmelt Adhesives with product code A (Ethylenvinylacetate), SDS revision4 January2018 v2, PDF4 §10.6; https://www.buehnen.de/files/datenblaetter/Safety_Data_Sheet_EVA-A.pdf | EVA-class possible acetic-acid/hydrocarbon decomposition survey; not the actual selected formulation or proof of emissions, temperature, density or VOC fraction. |
