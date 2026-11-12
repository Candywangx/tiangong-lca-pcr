---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.children-s-books-in-print
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Children's books, in print

## 1. Scope and Applicability

This PCR selects complete non-textbook children's paper books: fiction, non-fiction, child-directed reference titles, picture books and printed drawing/colouring activity books that meet that content/purpose test. Its representative construction is uncoated printed paper pages, a flexible uncoated paper cover, conventional wet sheetfed offset printing, process-free coated aluminium plates and milled-spine non-reactive EVA perfect binding. No numeric age threshold, standard page count, ink coverage, paper weight or copy mass is prescribed. The publisher's audience statement and actual contents establish child-directed purpose; an illustrated adult book or a formal-study workbook does not qualify merely because children can use it. [un-cpc3-children]

UN CPC 3.0 includes talking books within the children's leaf, but this manufacturing method excludes sound modules, batteries, electronics and bundled toys. It also excludes sticker books and toy books explicitly excluded by the official leaf. Board pages, pop-ups, moving parts, attached play objects, hard cases, sewn/stapled/spiral/PUR binding, perforated tear-out sheets, loose cards, blank sketch pads, laminated/coated/varnished/foil finishes, digital/web/heatset/UV/EB printing and integrated papermaking are outside this selected route. These are construction/method exclusions, not a claim that every excluded construction is outside the statistical children's category. Actual additional construction requires a separate applicability assessment. The method covers a narrower subset of 32292 and no other CPC leaf. [un-cpc3-children; epa-print-process; mm-eva-binder]

For a picture book described by HS 4903 terminology, document that pictures carry the primary interest and accompanying text is subordinate, as chapter 49 note 6 specifies. That test is not imposed on every children's novel. Drawing/colouring books need actual printed designs or prompts and child-directed publication evidence; the heading alone does not classify blank stationery or mixed toy kits. Record the intended age audience without deriving a safety category from it. Document each activity-page structure, one/two-sided printing, image/text role, opening and binding requirements and specified colouring medium where relevant. This PCR establishes no learning outcome, universal lay-flat function, bleed-through guarantee, children's safety compliance or regulatory approval. [wco-hs49-2022; printninja-colouring]

CPC's adjacent newspaper/periodical definitions use publication frequency; 32292 itself specifies no issue-frequency threshold. A periodical is not converted to a book by a child audience or a monthly sales record. Verify actual title/publication form and purpose. The technical sources demonstrate feasible operations and options; they supply no factory recipe, provider match, emissions, lifetime or default inventory amount. [un-cpc3-children; epa-print-process; printninja-colouring]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.children-s-books-in-print |
| classification_refs | CPC 3.0 32292; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Complete child-directed non-textbook fiction/non-fiction, reference, picture and printed drawing/colouring books of the selected uncoated flexible-cover EVA-bound construction. |
| excluded_products | Formal-study textbooks/workbooks; adult/general-public publications; periodicals; sticker/toy/electronic/sound-module books; blank pads/cards; excluded structures, finishes and printing/binding routes in section 1. |
| representative_product | One declared children's colouring or picture-book design with uncoated paper pages and flexible uncoated paper cover, conventional wet sheetfed offset and non-reactive EVA milled-spine perfect binding, without detachable/activity inserts. |
| production_route | File/prepress; process-free CTP; body and cover wet sheetfed offset; absorption/oxidative setting; fold/gather; spine mill; EVA glue and cover attach; trim; first quality release; pack. |
| market_state | Accepted complete new books at the manufacturing gate; all retained paper, ink, glue and powder belong to net book mass; transport packaging remains separate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the declared printed children's reading, picture or drawing/colouring content as a complete bound paper book. |
| How much | 1 kg net accepted complete children's books of one declared design and new manufacturing cohort; retain copy and page counts. |
| How well | Meet documented design-specific print/line clarity, page sequence/completeness, cover attachment and binding acceptance; for colouring designs, record intended medium and actual paper/print/opening acceptance without universal performance assumptions. |
| How long or cycle | One manufacturing cohort through first quality release at factory gate; no reading, learning or colouring-service duration is quantified. |
| reference_flow_link | `finished_children_book` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Children's books, in print `cb6650ca-2d33-48b1-b06b-59fc038a2df9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | title/design and child-directed non-textbook purpose; declared audience age without assumed threshold; actual picture/text/function and printed activity structure; pages/sheets/copies and one/two-sided layout; trim dimensions; paper/cover grade, furnish, grammage and moisture; complete net mass and packaging tare; conventional ink colour/SKU/composition and carbon origin; process-free plate coating/grade; actual fountain/wash recipe and supplied state; non-reactive EVA spine/side grades; opening and binding acceptance; absence of excluded structures/finishes/electronics; site/period/new cohort and first-release register; each exchange's owner/cohort/inherited vector; suppliers, utilities, waste receivers and allocation evidence |

The dedicated product flow identifies complete manufactured children's printed books, not an educational-only book, printed sheet or service. Its source's inclusion of talking books does not extend this selected physical construction to electronics. A UUID supplies no manufacturing average or provider. Every qualifier must be carried in concrete dataset metadata or equivalent records. Mass-normalized results are not evidence of equal reading or colouring function across designs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh complete first-released net books at measured moisture, excluding dispatch packaging; collect using cp_release. |
| `cohort_basis` | all inventory rows | reference-product Mass | kg | New-cohort exchanges use per 1 kg reference flow, after closing its raw physical ledger and dividing attributable new-cohort amount by Q from cp_release. Existing cohorts retain their original denominator Qc; section 8 prevents a second Q and cross-cohort normalization. |
| `composition_basis` | supplied preparations and wastes | actual whole-mixture Mass | kg | Preserve complete supplied formulation versus analytical constituent basis. Constituent assay is a disaggregation of one physical mixture, not another procurement exchange or duplicate provider. Record density, moisture, concentration and conditions before any conversion. |
| `utility_units` | utilities | actual metered property | MJ; m3 | Electricity uses exact 1 kWh = 3.6 MJ. Gas volume requires actual temperature, pressure, wet/dry composition and compressibility compatible with its provider. Delivered heat requires independent supply/return enthalpy and mass records; neither fuel calorific value nor a heat label proves delivered enthalpy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unprinted dry paper and finished process-free coated plates received at the printing site, with supplied ink, EVA glue and actual press preparations. |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | Only the selected non-textbook children's printed-book subset of CPC 3.0 32292; no whole-leaf or accepted-mapping assertion. |
| recursive_input_rule | Purchased already printed books/blocks and genuine returned same items retain upstream/inherited exchanges and original cohort Qc; never relabel them as virgin paper, new formation or a second new-book output. Resale and later rework/service remain separate. |
| upstream_dataset_requirement | Compatible actual supplier production/delivery for paper, complete coated plates, each supplied preparation/ink/glue, utilities and packaging; exact delivered state and unit basis and each receiver/treatment need verification. |
| disclosure | All stage gates, stock/cohort boundaries, outsourcing and transport legs, providers, excluded operations, data/UUID gaps, physical residuals, burden assignment and uncertainty; consumer use and end of life are outside this factory-gate study. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_children_scope` | applicability | Verify non-textbook child-directed content from actual publication/specification. Distinguish picture/colouring tasks from formal-study workbooks, blank stationery, sticker/toy books and electronic additions. Enforce every selected construction condition; no age-derived safety or learning claim. | un-cpc3-children; wco-hs49-2022; printninja-colouring |
| `b_route` | factory | Include prepress/CTP and make-ready, separate body/cover wet offset, setting, folding/gathering, milling, spine/side EVA application, covering, trimming, first-release inspection, packing, cleaning and attributable support services. Excluded finishes/routes require new assessment rather than a substituted flow UUID. | epa-print-process; epa-offset-ctg; kodak-process-free; mm-eva-binder |
| `b_providers_once` | supply and treatment | Include actual upstream paper/pulp/plate-coating/ink/glue/packaging manufacture and delivery and offsite treatment once. A complete preparation/book/container provider and its embodied components cannot both be loaded. Survey actual lubricants, blankets, filters, replacement parts, refrigerants and incoming supply packaging; add each occurring exchange separately, with a documented infrastructure/cut-off decision and missing-data disclosure. | ilcd-allocation-2010; epa-offset-ctg |
| `b_stages` | physical ledger | Preserve each stage's internal_in/internal_out by material state and cohort. For each component: opening + external_in + internal_in + formation = closing + external_out + internal_out + consumption. Formation/consumption require a real defined conversion with reactants/products; moving unchanged stock between bins is neither. Sum stages with matching internal links cancelled once; circulation/rework never becomes an external purchase or credit. | epa-print-process; mm-eva-binder |
| `b_releases` | waste and air | Count actual post-control outdoor releases separately from captured dust, transferred liquids and contaminated cloth. Retained ink/glue/powder are in the book. Conventional setting is not a heatset dryer. Optional gas/steam is actual ancillary heat only; supplier electricity/heat emissions remain upstream. Survey unlisted actual species and media before dataset completeness. | epa-offset-ctg; epa-gas-combustion; epa-species-method |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `children_book_manufacture` | Manufacture of ordinary paper children's books | required | selected child-directed design and verified sheetfed/uncoated/non-reactive EVA construction | foreground | 1 kg net first-released complete children's books |

Stage gates are prepress/plate → print body/cover → set/fold/gather → mill/glue/cover → trim/inspect → pack. One factory process below avoids artificial intermediate final products, while cp_stages retains raw-paper, printed-sheet, gathered-block, new/old finished-book and reusable-package stocks as mutually exclusive states. Blank paper becomes printed material through actual ink transfer; ink oxygen uptake and moisture changes need real component balances. Paper-to-signature and block-to-bound-book conversions identify every retained constituent and outgoing trim; paper mass is not destroyed by a stage rename.

Each card is one physical exchange, conditional where stated. The cards do not prescribe positive occurrence or claim exhaustive recipe coverage. Before a real dataset is complete, separately identify/measure any actual additional chemical, aid, emission, waste or packaging component. Whole-stream mixture cards retain actual assays in the physical ledger; assays do not add parallel procurement. For each packaging component cp_pack records first purchase, first non-purchase external entry, genuine same-item returns, gross dispatch, owner return and waste as distinct legs even when a single card locates the material. Missing data are not absence.

### Process: Children's book manufacture (`children_book_manufacture`)

#### Inputs

##### Product flows

###### Body paper (`body_paper`)

Unprinted uncoated body sheets. Measure actual grade, furnish/recycled share, dimensions, grammage, moisture and job issues; include intentionally blank reverse pages in the actual design, without inferring ink coverage from page count.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_materials; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `printninja-colouring`; `epa-print-process`

###### Cover paper (`cover_paper`)

Separate heavyweight uncoated flexible paper cover stock. No hard board, laminate or surface finish. Preserve cover versus body grade and quantities even when they share a broad paper identity.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_materials; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `mm-eva-binder`; `epa-print-process`

###### Process free plate (`process_free_plate`)

Complete purchased photosensitive-coated plate, CTP-imaged and developed on press. Bare grained/anodized substrate is not this plate. Weigh coating plus metal, record make-ready and coating fate; no off-press developer/rinse is presumed. UUID unresolved.

- Selected flow: Finished process-free coated aluminium offset plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_materials; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `kodak-process-free`

###### Ink black (`ink_black`)

One complete supplied black conventional oil-based offset paste, only if used. Positive lithographic/offset identity is broad; verify actual SKU, setting by absorption/oxidation, oil/solvent/pigment/resin/wax and carbon origin. General solvent/heat commentary prescribes neither recipe nor dryer. No component-provider duplication.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_preparations; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparations`
- Sources: `epa-offset-ctg`

###### Ink cyan (`ink_cyan`)

One complete supplied cyan conventional oil-based offset paste, only if used. Positive lithographic/offset identity is broad; verify actual SKU, setting by absorption/oxidation, oil/solvent/pigment/resin/wax and carbon origin. General solvent/heat commentary prescribes neither recipe nor dryer. No component-provider duplication.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_preparations; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparations`
- Sources: `epa-offset-ctg`

###### Ink magenta (`ink_magenta`)

One complete supplied magenta conventional oil-based offset paste, only if used. Positive lithographic/offset identity is broad; verify actual SKU, setting by absorption/oxidation, oil/solvent/pigment/resin/wax and carbon origin. General solvent/heat commentary prescribes neither recipe nor dryer. No component-provider duplication.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_preparations; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparations`
- Sources: `epa-offset-ctg`

###### Ink yellow (`ink_yellow`)

One complete supplied yellow conventional oil-based offset paste, only if used. Positive lithographic/offset identity is broad; verify actual SKU, setting by absorption/oxidation, oil/solvent/pigment/resin/wax and carbon origin. General solvent/heat commentary prescribes neither recipe nor dryer. No component-provider duplication.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_preparations; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparations`
- Sources: `epa-offset-ctg`

###### Fountain preparation (`fountain_preparation`)

One actual purchased fountain preparation as delivered, including its carrier water. Distinguish concentrate from ready-to-use bath and separately metered dilution water. Verify whole composition including omitted SDS constituents; source pen-cleaning sentence is irrelevant and remains a metadata defect. No generic formulation provider.

- Selected flow: Fountain Solution (Regular Type) `fbf227a3-cbc3-4787-a400-bbb850581abb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_preparations; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparations`
- Sources: `epa-offset-ctg`

###### Blanket wash (`blanket_wash`)

Actual whole supplied blanket/roller wash, conditional on compatible petroleum formulation. Record SDS/CAS/UVCB, species, water and density; inkjet printhead cleaners are not substitutes. Other actual cleaning chemistry needs a separate reviewed atomic row. UUID unresolved.

- Selected flow: Petroleum-distillate offset blanket wash formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_preparations; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparations`
- Sources: `epa-offset-ctg`

###### Eva spine (`eva_spine`)

Complete non-reactive EVA bookbinding spine hotmelt, with actual tackifier/wax and grade verified. Not pure EVA resin, adhesive film or PUR. Record applied, retained and purged amounts and melt/standby cycle; marketing non-toxic/pollution-free claims establish no safety or zero release.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_binding; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `mm-eva-binder`; `henkel-spine-hotmelt`

###### Eva side (`eva_side`)

Separate actual non-reactive EVA side-glue formulation when used. Keep its supplier grade and issue/return/retention separate from spine glue; if the same SKU is used at both points, count each measured issue once and the supplier production for its total once.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_binding; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `mm-eva-binder`

###### Tap water (`tap_water`)

Separately supplied tap water for dampening dilution and washing. Meter distinct uses, preserve source treatment and measured density/temperature for volume conversion; do not repurchase water already carried in formulations.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_utilities; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-offset-ctg`

###### Electricity (`electricity`)

Customer-side 1–35 kV grid-average AC only if compatible with actual supply. Meter CTP, press, compressor, cooling, dust extraction, binder/glue heaters, trimming and packing; retain all setup/idle/cleanup electricity and match geography/year/voltage/provider losses.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_utilities; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-print-process`; `mm-eva-binder`

###### Gas heat fuel (`gas_heat_fuel`)

Only actual ancillary gas heating, not assumed conventional ink drying. Record gas meter T/P, moisture, composition, compressibility and actual heating function; compare delivered volume with provider convention before conversion. Do not add purchased heat covering the same combustion.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_utilities; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-gas-combustion`

###### Purchased steam heat (`purchased_steam_heat`)

Conditional independently purchased heat service. Meter supply and return masses/enthalpies, leaks, blowdown and storage; provider must match delivery boundary. Available heat candidates use calorific-value or sector constraints, which do not establish delivered enthalpy. UUID/property identity remains pending.

- Selected flow: Purchased industrial steam heat
- Flow property / unit: Delivered thermal energy / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_utilities; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-gas-combustion`

###### Starch powder (`starch_powder`)

Only actual unmodified starch anti-setoff powder. Verify feedstock, size distribution and absence of coatings/additives; coated powder needs its complete formulation. Retained book powder, recovered residue and airborne bins are disjoint, not a purchased-to-air factor.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_materials; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `heidelberg-powder`

###### Cotton wipe (`cotton_wipe`)

Conditional actual cotton wiping textile. Positive cloth names identify the textile but raw-cotton taxonomy/plant commentary are source defects. Verify dry textile grade/mass and reuse ownership; retained wash/ink belongs to outgoing whole cloth, not new textile purchase.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_materials; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg`

###### Dispatch box (`dispatch_box`)

Conditional complete dispatch carton, with actual fibre recipe, converted-box mass and provider. A folding box or a box fixing a different recycled share is not interchangeable. cp_pack includes first purchase even when included in an all-in delivered price; no invoice line is not zero acquisition.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_pack; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `epa-print-process`

###### Dispatch film (`dispatch_film`)

Conditional PE transport film, CAS 9002-88-4, not cover laminate. Name/CAS/comment support PE despite a conflicting source taxonomy. Weigh complete actual film and additives, retain classification debt, and apply component/owner/cohort packaging ledger.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_pack; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `epa-print-process`

###### Wood pallet (`wood_pallet`)

Only one actual complete wooden pallet, narrowed from the broad finished wood-load-board identity. Record dimensions, treatment, measured tare, owner, original cohort and inherited exchange vector. No prescribed number of trips, automatic zero cost/load or component-plus-whole provider.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_pack; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

##### Waste flows

None for this selected factory input boundary.

##### Elementary flows

No direct abstraction is presumed; actual abstraction requires a separately verified exchange.

#### Outputs

##### Product flows

###### Finished children book (`finished_children_book`)

One net kg of the complete selected child-directed printed book construction after first quality release. Include all retained pages/cover/ink/EVA/powder; exclude packaging. New closing finished goods enter Q once at first release; opening/old finished goods, returns, rework and later service do not create another Q.

- Selected flow: Children's books, in print `cb6650ca-2d33-48b1-b06b-59fc038a2df9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `un-cpc3-children`; `mm-eva-binder`

##### Waste flows

###### Paper trim (`paper_trim`)

One actual jointly collected outgoing paper trim/reject stream. Preserve ink/glue/moisture and receiver acceptance; separately collected clean trim, rejected books or cartons require separate quantities/rows. No virgin-paper avoidance credit is presumed.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-print-process`

###### Spent plate (`spent_plate`)

Only the single solid spent coated-aluminium plate stream at handover, with all residue. Broad solid-waste identity does not mean clean aluminium or a default treatment/hazard status; weigh whole stream and verify receiver composition/state.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `kodak-process-free`

###### Discarded ink (`discarded_ink`)

One segregated actual waste-ink transfer. Keep whole mass, water/solvent/solids and receiver route; ink already in rejected books, wash or cloth is not added here again.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-offset-ctg`

###### Spent wash (`spent_wash`)

Only this one actual physically liquid whole spent blanket-wash liquid transfer. Measure mass or compatible volume/density/temperature, water-specific fraction and independent non-water constituents. Non-water mass is not automatically dry solids. Receiver/treatment required; not a direct water emission.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-offset-ctg`

###### Spent fountain (`spent_fountain`)

Only this one actual physically liquid whole spent fountain bath liquid transfer. Measure mass or compatible volume/density/temperature, water-specific fraction and independent non-water constituents. Non-water mass is not automatically dry solids. Receiver/treatment required; not a direct water emission.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-offset-ctg`

###### Glue purge (`glue_purge`)

One actual whole cooled solid non-reactive EVA purge stream at handover, conditional on separate collection. Include retained water/ink/solvent/other contamination and actual receiver. Internal reuse is circulation, not outgoing waste; do not also count its constituents elsewhere.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-offset-ctg`; `heidelberg-powder`

###### Dirty cloth (`dirty_cloth`)

One actual whole solid contaminated cotton wiping cloth stream at handover, conditional on separate collection. Include retained water/ink/solvent/other contamination and actual receiver. Internal reuse is circulation, not outgoing waste; do not also count its constituents elsewhere.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-offset-ctg`; `heidelberg-powder`

###### Powder residue (`powder_residue`)

One actual whole separately collected solid starch-powder residue stream at handover, conditional on separate collection. Include retained water/ink/solvent/other contamination and actual receiver. Internal reuse is circulation, not outgoing waste; do not also count its constituents elsewhere.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-offset-ctg`; `heidelberg-powder`

###### Collected paper dust (`collected_paper_dust`)

One captured milling/trimming dust stream leaving for treatment. Weigh whole actual moist dust with cellulose/ink/glue contamination and receiver; no dry-paper-only assumption or simultaneous reporting as airborne PM.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `mm-eva-binder`

###### Film offcut (`film_offcut`)

Conditional one actual untreated PE packing-film waste transfer. Preserve additive/contamination/state and receiving operation; cleaned recycled PE is not the same as-generated exchange.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-print-process`

###### Carton waste (`carton_waste`)

Only separately dispatched actual cardboard packaging waste, identified by component/owner/cohort in cp_pack. Keep coating/adhesive/moisture and receiver; do not count the same carton in paper trim or net it against owner returns.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_waste; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-print-process`

##### Elementary flows

###### Ipa air (`ipa_air`)

Conditional actual isopropanol, CAS 67-63-0, to outdoor air from documented preparation/operation. Species-specific calibrated sampling and matched inlet/outlet flow are required. No assumed alcohol fraction, emission fraction or TVOC-as-carbon substitution.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-offset-ctg`; `epa-species-method`

###### Water vapour (`water_vapour`)

Actual net outdoor vapour after control, with ambient inlet water/humidity corrected on compatible flow bases. Reconcile paper/formulation water, condensate, stocks, liquid transfers and any fuel-hydrogen origin. A water-balance residual is not measured evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-species-method`; `epa-offset-ctg`

###### Pm25 (`pm25`)

Actual post-control outdoor particles in disjoint diameter bin up to 2.5 micrometres, from measured printing powder, milling/trim and actual ancillary combustion outlets. Captured dust remains waste; cumulative PM10/TSP and filterable/condensable totals cannot overlap these bins.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `heidelberg-powder`; `epa-gas-combustion`

###### Pmcoarse (`pmcoarse`)

Actual post-control outdoor particles in disjoint diameter bin above 2.5 through 10 micrometres, from measured printing powder, milling/trim and actual ancillary combustion outlets. Captured dust remains waste; cumulative PM10/TSP and filterable/condensable totals cannot overlap these bins.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `heidelberg-powder`; `epa-gas-combustion`

###### Pmover10 (`pmover10`)

Actual post-control outdoor particles in disjoint diameter bin above 10 micrometres, from measured printing powder, milling/trim and actual ancillary combustion outlets. Captured dust remains waste; cumulative PM10/TSP and filterable/condensable totals cannot overlap these bins.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `heidelberg-powder`; `epa-gas-combustion`

###### Co2 fossil (`co2_fossil`)

Conditional actual outdoor fossil CO2 from site-verified ancillary combustion/oxidation or leakage as relevant. Establish source, species and fossil/biogenic origin by measurement or documented actual-fuel balance. No complete-combustion factor, efficiency or paper-carbon-to-air assumption; NOx mass/NO2-equivalent basis needs explicit compatibility.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-combustion`

###### Co2 bio (`co2_bio`)

Conditional actual outdoor biogenic CO2 from site-verified ancillary combustion/oxidation or leakage as relevant. Establish source, species and fossil/biogenic origin by measurement or documented actual-fuel balance. No complete-combustion factor, efficiency or paper-carbon-to-air assumption; NOx mass/NO2-equivalent basis needs explicit compatibility.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-combustion`

###### Co fossil (`co_fossil`)

Conditional actual outdoor fossil CO from site-verified ancillary combustion/oxidation or leakage as relevant. Establish source, species and fossil/biogenic origin by measurement or documented actual-fuel balance. No complete-combustion factor, efficiency or paper-carbon-to-air assumption; NOx mass/NO2-equivalent basis needs explicit compatibility.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-combustion`

###### Nox (`nox`)

Conditional actual outdoor NOx excluding N2O from site-verified ancillary combustion/oxidation or leakage as relevant. Establish source, species and fossil/biogenic origin by measurement or documented actual-fuel balance. No complete-combustion factor, efficiency or paper-carbon-to-air assumption; NOx mass/NO2-equivalent basis needs explicit compatibility.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-combustion`

###### So2 (`so2`)

Conditional actual outdoor SO2 from site-verified ancillary combustion/oxidation or leakage as relevant. Establish source, species and fossil/biogenic origin by measurement or documented actual-fuel balance. No complete-combustion factor, efficiency or paper-carbon-to-air assumption; NOx mass/NO2-equivalent basis needs explicit compatibility.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-combustion`

###### Methane (`methane`)

Conditional actual outdoor fossil CH4 from site-verified ancillary combustion/oxidation or leakage as relevant. Establish source, species and fossil/biogenic origin by measurement or documented actual-fuel balance. No complete-combustion factor, efficiency or paper-carbon-to-air assumption; NOx mass/NO2-equivalent basis needs explicit compatibility.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-combustion`

###### N2o (`n2o`)

Conditional actual outdoor N2O from site-verified ancillary combustion/oxidation or leakage as relevant. Establish source, species and fossil/biogenic origin by measurement or documented actual-fuel balance. No complete-combustion factor, efficiency or paper-carbon-to-air assumption; NOx mass/NO2-equivalent basis needs explicit compatibility.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual unallocated physical amount using cp_emissions; for the new cohort divide its compatible measured physical exchange by Q in kg to report per 1 kg reference flow. Retain original-cohort exceptions in section 8; missing records are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-gas-combustion`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_framework` | shared processes | Declare an attributional study context. Subdivide or virtually subdivide by actual job/stage first; use determining physical relationships for the remaining exchange-specific shared loads. Metered runtime is suitable only with evidenced service intensity; sheet area/passes or heat demand likewise need an actual causal basis and complete service-population denominator. | ilcd-allocation-2010 |
| `a_residual` | residual joint load | Only after documenting unavailable subdivision/physical causality may a justified residual economic basis use actual co-function value in its gate condition. Missing prices, disputed charges, zero/negative values or incomplete denominators require method review; do not clip fees to zero or force shares. No generic mass/page/sales split. | ilcd-allocation-2010 |
| `a_two_accounts` | all exchanges | Maintain unallocated physicalV and environmental burdenA separately. Each assigned load records its source exchange, original owner/cohort and driver. Shares close over the full served population; physical waste/product/return masses remain intact. Include setup, failures, idle and cleanup; unidentified attribution stays explicit rather than disappearing into a successful new lot. | ilcd-allocation-2010 |
| `a_recovery` | recovered paper, plates and packaging | Record actual waste/product status, receiver and treatment. A sale or return creates no automatic substitution credit. Recycling and reuse scenarios require explicit system/burden ownership and method review; a whole supplier/treatment and its component providers cannot both be charged. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Q is the net kg in a unique first-quality-release register for new books of the declared cohort, including newly accepted closing finished goods exactly once. Opening finished goods and prior cohorts are outside Q. Genuine same-item returns, internal rework, reacceptance and later storage/repacking/service never create a second Q. Opening raw materials and WIP carry their actual inherited exchange vectors into the consuming new cohort; they are not new external receipts or zero-burden material. Keep raw, WIP, new finished, old finished and reusable-package states mutually exclusive, including ownership and component identity at each boundary.

For each original cohort c preserve Qc and a vector of each inherited exchange j, with quantity, property/unit, provider, scope, physical state and assigned burden. Transferring the same item between owners/states carries that vector rather than manufacturing another book. Newly incurred service exchanges/burdens are attached to that original cohort and divided by its Qc only where the original study basis supports this, or represented as a separately declared service with an explicit method. Do not divide all period activity by current new Q. For Q = 0 retain raw failed-job, setup, idle, cleanup and inventory/service ledgers without division; investigate attribution separately. Monthly sales mass is not a universal denominator.

Packaging is a component ledger, including packaging supplied with paper/ink/plates/glue as well as dispatch packages. P is the first external purchase of that component, including components included in an all-in package price even without a separate invoice line. N_ext is its actual first external non-purchase entry by loan, lease, consignment, customer provision or accompanying supply, with owner and inherited evidence. ER is a genuine same-item return only if a prior outward leg and identity/quantity link exist. ER is neither new P nor N_ext; a newly received replacement without that link is a separately classified first entry. Record opening/closing components by owner/cohort/state, internal transfers, gross dispatch, owner-return outward, waste and other real exits independently. Never net actual transport legs or component mass against returns. Acquisition cost does not define environmental burden. Provider ownership at whole-container versus component level is decided once; actual reuse/service sharing requires evidence, not an assumed trip life.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | children_book_manufacture | finished books and Q | future measured foreground | title/design; child audience/purpose; picture/text/activity; first-release item/lot id; new/old cohort; accepted copies; calibrated net masses; moisture; reject/rework/return; opening/closing finished stock; packaging tare | Weigh complete accepted books on calibrated scales after trimming/binding inspection; retain copy sampling and lot weighing reconciliation. Unique first-release register establishes Q, not dispatch or sales; audit all reacceptance links. | kg; copies | each first release and stock close | declared cohort through complete release/stock cycle | actual manufacturer and declared design | per 1 kg reference flow | scale calibration; acceptance/proof; contents and publisher brief; unique release and stock records |
| `cp_stages` | children_book_manufacture | each component state and cohort | future physical ledger | stage; owner/cohort/component; opening; external_in/out; internal_in/out; formation/consumption; closing; moisture; inherited exchange/provider vector | Weigh and reconcile each stage at its real gate, including paper/signatures/covers/blocks/finished books and circulation. Record conversions and reacting/retained components; verify matched internal transfers cancel only on aggregation. | kg | each transfer/conversion and period close | entire cohort including incomplete WIP | all actual printing/binding stages and declared outsourcing | per 1 kg reference flow | calibrated gate records; component balances; no overlapping stock states |
| `cp_materials` | children_book_manufacture | each paper, plate, powder, cloth | future measured foreground | material/grade; supplier; delivered quantity; stock/issue/return; coating; furnish; moisture; sheet/plate dimensions/count; dry/wet basis; actual route | Weigh actual whole materials at receipt/issue and reconcile inventory with stages. Measure plate including coating; verify actual process-free route. Separate body/cover and every actual extra material; supplier capability is not a recipe. | kg | each receipt/job/material change; stock close | all setup/production/cleanup of cohort | actual manufacturer and supplier scope | per 1 kg reference flow | purchase/issue/tare records; specifications; calibration; balance residuals |
| `cp_preparations` | children_book_manufacture | each ink, fountain preparation and wash | future measured foreground | job/colour/SKU; supplied mass/volume; density/T; complete composition/CAS; active/carrier fractions; fossil/biogenic origin; beginning/end; issue/recovery; retained/waste/release | Weigh whole supplied preparation and reconcile containers/stock; obtain full supplier formula or assay beyond SDS omissions. Actual chemical constituent balances are analytical subledgers; link the complete preparation provider once, or explicitly replace with compatible component modelling without duplication. | kg; m3 | each issue, colour/formulation change and stock close | full job including storage and wash | actual press and preparation supplier | per 1 kg reference flow | SDS plus complete formulation/assays; scales; densities; supplier and provider ownership |
| `cp_binding` | children_book_manufacture | spine and side EVA separately | future measured foreground | glue/SKU/chemistry; issue/return/purge; retained mass; pot heating/standby; thermal history; binder setup; pull/opening acceptance | Weigh whole supplied glue by application point; log actual pot heat and cleaning, verify non-reactive EVA and actual retained/purged components. Manufacturer glue compatibility proves no actual dose, temperature or safety result. | kg; MJ | each job, melt and cleaning cycle | setup, production, failure and standby | actual binder and outsourced binding if included | per 1 kg reference flow | glue supplier composition; weighing; metering; binding acceptance; purge receiver |
| `cp_utilities` | children_book_manufacture | electricity, gas, tap water and heat separately | future measured foreground | meter start/end; device/stage/job; electricity voltage/grid/year; water density/T; gas T/P/wet-dry/composition/Z; steam supply/return mass/enthalpy/time; leaks/blowdown/storage; provider; shared service population | Submeter and reconcile bills over identical time windows. Preserve all idle/failed/cleanup service. Match volume conventions and supplied state. For heat measure independent supply/return enthalpy flows and losses/storage; no assumed efficiency, mass equality or calorific-to-delivered-heat identity. | MJ; kWh; kg; m3 | each job/cycle and bill/stock close | full reporting period and every attributable cycle | actual site/support devices and suppliers | per 1 kg reference flow | calibrated meters; utility invoices/assays; state records; complete driver denominator |
| `cp_pack` | children_book_manufacture | each packaging component and leg | future measured physical and ownership ledger | component/id; owner/cohort; inherited vector; P; N_ext origin; ER and prior-outward link; opening/closing raw/WIP/new-FG/old-FG/reusable state; internal legs; grossdispatch; owner-return outward; waste; route/distance/load; price inclusion; whole/component provider | Weigh/count each complete actual component and link all custody movements. Audit first external acquisition even in a bundled price, first loan/lease/consignment/accompanying supply, and proven same-item returns. Preserve disjoint stocks and every transport leg; reconcile provider ownership and actual reuse services without a default life. | kg; pieces; tonne-km | each entry/exit/use and stock close | all packaging movements serving new and old cohorts | incoming supply and actual dispatch/return receivers | per 1 kg reference flow | custody/purchase/loan records; prior outward proof; scales; carrier records; inherited vectors and ownership reconciliation |
| `cp_waste` | children_book_manufacture | each outgoing waste transfer | future measured foreground | stream/bin; component/owner/cohort; state; whole mass; moisture/water fraction; independent solids/solvent/metal/polymer; liquid volume/density/T; stocks; receiver/treatment; actual waste status | Weigh segregated streams at handover. Liquid whole mass and non-water composition are distinct; dry residue alone cannot represent all non-water material. Preserve every component exactly once across ink, cloth, wash, books, dust and packaging; verify actual treatment and transport. | kg; m3 | each bin/dispatch and stock close | full period including failures and cleanup | actual site and receiving treatment boundary | per 1 kg reference flow | calibrated weights; sampling methods; receiver acceptance and transfer/transport documents |
| `cp_emissions` | children_book_manufacture | each species and disjoint PM bin | future measured foreground | source/outlet/stage/job; actual constituents/CAS; time; inlet/outlet flow/concentration; T/P/humidity; dry/wet basis; calibration/response/recovery; LOD; PM cut/filterable/condensable; control; carbon source; fuel/oxygen balance | Survey actual constituents and all operating modes, then validate species-specific sampling for the actual matrix. Integrate matched inlet/outlet flux after control, include fugitive/storage/cleanup outlets. TVOC equivalents are QA only without demonstrated conversion; no uncharacterized residual assigned a species. Retain inlet air/oxygen/water and transformations in balance subledgers. | kg; mg/m3; m3/time | representative setup/run/idle/cleanup/heat surveys | every actual operating mode and period | outdoor factory releases; upstream supplier emissions separate | per 1 kg reference flow | competent analytical methods/calibration; outlet/inlet closure; LOD/uncertainty; complete source survey |
| `cp_loads` | children_book_manufacture | exchange-specific burdenA | future measured allocation evidence | exchange j; owner/cohort; original Qc; provider; physicalV; measured dedicated/shared activity; complete served population; driver; residual prices/fees/status; added service; uncertainty | Preserve raw physical ledger; separately assign loads by justified direct/subdivision/physical relationships and review any residual economic basis. Carry inherited vectors and attach actual new services to their own cohorts. Retain unassigned loads and Q=0 periods for review. | original exchange unit; kg reference output | every assignment and period close | identical service windows for all beneficiaries | full relevant shared-service population | per 1 kg reference flow | meters/job tickets; causal evidence; price/fee originals where justified; share closure and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `first_release_q` | cp_release | Q = sum of unique first-released net new-book masses, including new closing finished goods once; trace same-design sampled copy mass against calibrated lot weights. Exclude opening/old FG and repeated release of returns/rework. | first-release register; complete net mass; cohort; stock reconciliation | Q in kg and excluded/repeated-item audit | un-cpc3-children |
| `cohort_normalization` | all inventory rows | For compatible new-cohort quantities report physicalV_j / Q and separately burdenA_j / Q only when Q is positive; physicalV is the closed unallocated cohort ledger and burdenA the independently assigned load ledger. Inherited exchange vectors and added old-cohort services retain original Qc or an explicitly reviewed service basis. Q=0 remains raw and unnormalized, never deleted or shifted automatically. | cp_release; cp_stages; cp_loads; original Qc; physicalV_j; burdenA_j | separate physical and burden values per 1 kg reference flow with original-cohort service records | ilcd-allocation-2010 |
| `stage_closure` | cp_stages | For each component/state, opening + external_in + internal_in + formation = closing + external_out + internal_out + consumption. Pair identical internal links before summing; conversions need balanced constituent inputs/products. Unchanged transfers create no formation or external receipt. | stage/state/cohort quantities; actual conversion; moisture/composition | closed physical stage and aggregate ledgers with residuals | epa-print-process |
| `preparation_constituents` | cp_preparations | Actual constituent mass = measured whole preparation mass times independently verified mass fraction; include carrier water and retained mass once. Reconcile input/stock, actual conversions, book retention, disjoint wastes and air; a discrepancy is uncertainty, not identified release. | whole mass; actual composition; cp_stages; cp_waste; cp_emissions | analytical constituent ledger without duplicate whole/component provider | epa-offset-ctg |
| `packaging_closure` | cp_pack | For each component/owner/cohort, opening + P + N_ext + ER + internal_in = closing + grossdispatch + owner-return outward + waste + other real exits + internal_out. Stock transformation from unissued to packed is an internal state movement, not acquisition; recover same-item prior-outward proof before ER. Preserve each transport leg. | cp_pack; unique component identity; previous outward; inherited vector | full component/custody balance and provider ownership | ilcd-allocation-2010 |
| `steam_service` | purchased_steam_heat | Meter supply enthalpy flux and return enthalpy flux independently. Delivered boundary energy = supply enthalpy inflow minus return/outward enthalpy flows minus measured boundary storage change, with real leakage/blowdown and other exchanges explicit on their correct side. Only proven matched supply/return mass at the same boundary permits m times (hs minus hr). No efficiency is inferred. | cp_utilities; mass/time; h_supply; h_return; actual exits; storage; boundary | delivered MJ with heat/water/provider reconciliation | epa-gas-combustion |
| `species_flux` | cp_emissions | Integrate species concentration times compatible outlet flow minus matched inlet species flux over the actual windows; convert to kg and retain recovery, humidity and detection limits. Distinct outlets/time windows only. Do not clip negative residuals or label TVOC-as-carbon as a chemical species. | concentrations; inlet/outlet flow/time/state; calibration; composition | outdoor species kg and residual/uncertainty before cohort normalization | epa-species-method |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_child_design` | reference | Actual child-directed non-textbook content and physical construction must meet scope. Record image/text/activity layout, age audience, colour/blank pages and declared medium/opening/binding acceptance without deriving safety or learning performance. | publisher brief; actual contents/proofs; material/route evidence; first-release acceptance |
| `dq_cohorts` | stocks and services | Keep disjoint raw/WIP/new-FG/old-FG/reusable stocks and individual inherited exchange vectors; no repeat Q or blanket normalization to current sales. No unmeasured zero. | unique first-release/return links; component/cohort ledger; original Qc and service attribution |
| `dq_identity_provider` | each row | Verify actual flow type, whole/active state, names/routes/CAS, reference property, unit group and unit against compatible delivered material and provider. Broad identity, successful search and manufacturer's capability do not prove a plant recipe or amount. | native identities; supplier/receiver specification; actual invoice/assay/meter; provider matching |
| `dq_completeness` | whole factory | Survey unlisted formulations, aids, packages, spare parts, chemicals, emissions/media and utilities; add each actual atomic exchange before declaring dataset complete. A UUID gap is local and explicit, while an unresolved reference/material physical conflict blocks that affected model. | complete source/material survey; stage/chemical/water/carbon balances; explicit gaps and exclusions |
| `dq_uncertainty` | results | Preserve measured residuals, detection limits, uncertainty and performed/skipped checks; identify source scope, vintage and supplier limits. No source recipe, emission factor, fixed lifetime, universal yield or safety result is imported. | calibration/sampling design; originals/locators; reconciliations; allocation sensitivity and independent review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference | Verify the complete selected children's book, actual audience/non-textbook purpose, image/text/activity structure and all construction qualifiers. No electronics, toy/sticker structure or blank stationery silently enters this route; no whole-leaf, learning or safety approval claim. | un-cpc3-children; wco-hs49-2022; printninja-colouring |
| `v_release` | reference amount | One output is 1 kg net first-released complete books including retained constituents, excluding packaging. Audit Q's first-release register, new closing FG, old cohorts, genuine same-item returns and repeated rework/service. No second Q. | un-cpc3-children |
| `v_physical` | stages and mixtures | Close all raw/stage/component/water/carbon accounts, including matched internal links and real formation/consumption. Whole preparations/books/packages and their analytical components/providers are reconciled once. Preserve whole transferred waste and real receiver/treatment; residuals require investigation. | epa-print-process; epa-offset-ctg |
| `v_packaging` | every packaging component | Verify P including bundled purchase, first N_ext with custody and ER with same-item prior-outward proof. Audit mutually exclusive owner/cohort stocks, inherited vectors, gross dispatch, owner-return outward, waste and every actual transport leg. No netting or cost-based zero load. | ilcd-allocation-2010 |
| `v_loads` | shared loads and cohorts | Check physicalV independently from burdenA, one supplier/treatment ownership, actual drivers and complete share denominators, original Qc inheritance and newly added services. Keep Q=0 and unresolved allocation/fees visible; independent review is needed before forcing a numerical result. | ilcd-allocation-2010 |
| `v_utilities_air` | utilities and releases | Match electricity/gas provider units and heat supply/return boundaries, mass and enthalpy including leakage/blowdown/storage. Verify each outdoor species and disjoint PM bin after control; no captured-dust duplicate, assumed fuel recipe, NOx/NO2 basis substitution, TVOC species substitution or deletion of biogenic carbon. | epa-species-method; epa-gas-combustion; heidelberg-powder |
| `v_gaps` | complete dataset | A blank UUID, unresolved delivered-state/provider, incomplete formula, missing measurement or method denominator remains a specific gap. Conditional absence needs site evidence. Reject incompatible reference or primary material matches and disclose all actual excluded operations, incomplete checks and uncertainty. | epa-offset-ctg |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Completed actual manufacturing inventory for the declared child-directed ordinary paper-book design and selected route, following provider/data/method review. |
| allowed_use | Compatible factory-gate production of the qualified non-textbook children's books with actual amounts, suppliers, original-cohort ledgers and uncertainty; independent scope and methodology review required. |
| excluded_use | Whole-32292 average; textbooks/adult/periodical/sticker/toy/electronic products; other constructions/routes; equal reading/learning/colouring service or safety-compliance claims; a quantitative dataset inferred from UUIDs, machine brochures or sales totals. |
| required_metadata | All reference qualifiers; site/time/design/cohort/Q and original Qc; raw/stage/component/packaging ownership; suppliers/routes/providers; formulation and heat/volume bases; system/allocation decisions. |
| required_quality_disclosure | Actual measured versus missing/absent data; local UUID/provider gaps; original-cohort and Q=0 handling; physical/burden ledger residuals; source limits, exclusions, uncertainty and independent science/translation review. |
| update_trigger | Change in audience/purpose, page/activity structure, stock/printing/setting/binding/formulation, supplier/utility/receiver, cohort/period, packaging/reuse, controls, acceptance or identity evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-children | official_guidance | UNSD CPC 3.0 Code 32292 original page https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/32292 ; CPC 3.0 Explanatory Notes 30 June 2025 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Original leaf and PDF148–150, especially149: audience, non-textbook products and sticker/toy exclusions; neighbouring textbook/periodical distinction. No age, process or quantity rule supplied. |
| wco-hs49-2022 | official_guidance | WCO HS 2022 Chapter49 https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1049_2022e.pdf?la=en | PDF1 chapter note6 and4903 heading: picture/text relation and drawing/colouring heading only; not a whole-CPC equivalence, safety or manufacturing rule. |
| printninja-colouring | literature | PrintNinja Coloring Book Printing https://printninja.com/printing-products/coloring-book-printing/ | First-party sections Why Offset Printing, Paper Options, Binding Options and Special Features: actual children's colouring/offset/uncoated/perfect-binding possibilities and alternative/perforated forms; no plant recipe, universal opening/bleed-through guarantee, paper weight, price or quantity adopted. |
| epa-print-process | official_guidance | EPA EIIP VolumeII Chapter15, May2002 https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Section2.1.1, PDF14–15, printed15.2-4/5 and Figure15.2-1; sheetfed books, wet-offset stages and absorption/oxidation. Process evidence only, not LCA allocation or current plant quantities. |
| epa-offset-ctg | official_guidance | EPA-453/R-06-002 September2006 https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | IV.A, PDF12–14, printed6–8: paste ink, fount/wash and distinct VOC origins/setting modes. Historical proportions/retention factors and compliance thresholds are not adopted; not an LCA load-allocation source. |
| kodak-process-free | literature | Kodak SONORA Process Free Plates Sustainability datasheet https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | PDF1: selected absence of separate processor chemicals/rinse; does not remove plate production/coating fate, CTP/make-ready or actual press water. |
| mm-eva-binder | literature | Müller Martini Antaro official documentation https://mullermartini.com/en/product/antaro/ | Offset gathering/trimmer, milling/spine preparation, EVA/PO/PUR options and softcover configuration paragraphs; selects only non-reactive EVA. No speed, thickness, trip life, glue amount or actual site configuration adopted. |
| henkel-spine-hotmelt | literature | Henkel TECHNOMELT GA485D official product page https://next.henkel-adhesives.com/us/en/products/industrial-adhesives/central-pdp.html/technomelt-ga-485d/SAP_IB-95677.html | Softcover-spine hotmelt compatible with EVA/paper as a technical existence example; actual full formulation, SKU match, temperature/dose and testing still need supplier/site evidence. |
| heidelberg-powder | literature | Heidelberg News270(2010), Small Grains that Have a Big Effect https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | PDF/printed53: starch and alternative/coated powder distinctions only. No particle distribution, application rate, humidity setting or emission fraction adopted. |
| epa-species-method | official_guidance | EPA Method18 web copy 1April2025 https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | PDF1–2 sections1–4: industrial gas species separation/calibration, volatility and polymerisation limits, humidity correction. Actual matrix validation required; web copy identifies eCFR as official legal text. No site measurement or universal recovery supplied. |
| epa-gas-combustion | official_guidance | EPA AP42 §1.4 Natural Gas Combustion, October2026 public copy https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | PDF1–3 §1.4.1–1.4.3: ancillary boilers/heat and source-dependent species only. No average composition, factor, efficiency or delivered-enthalpy method is imported; heat balances are explicit foreground metering obligations. |
| ilcd-allocation-2010 | official_guidance | JRC ILCD Handbook, General guide for LCA—Detailed guidance, first edition2010 https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | §7.9.2–7.9.3, PDF275–289/printed255–269, especially subdivision255–256, physical relations257–263 and residual market values264–268: attributional multifunctionality hierarchy and ownership review. Negative waste values/reuse need specific provisions; no automatic credit or fee-clipping method adopted. |
