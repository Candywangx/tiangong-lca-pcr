---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.directories-in-print
language: en-US
status: candidate
content_maturity: draft_methodology
sync_with: pcr.zh-CN.md
---

# Directories, in print

## 1. Scope and Applicability

This PCR addresses a printed directory whose principal content is a systematically organized collection of contact information: a telephone, business/trade, municipal or city directory. Descriptions of listed entities may accompany the contacts. A book about a profession, a dictionary, an encyclopaedia or a magazine with a contact page does not become a directory merely because its subject is similar. A supplier's product/price catalogue is not automatically a contact directory. Establish the publication's primary purpose from the actual listing structure, contents and commissioning specification. [unsd-cpc3-2025]

One transparent representative technology is selected: a single-colour black-ink directory, uncoated woodfree paper text and flexible uncoated paper cover, conventional wet sheetfed offset with absorption/oxidative setting, process-free CTP plates, folding and signature gathering, milled-spine nonreactive EVA perfect binding and three-side trimming. Black-only printing applies to both text and cover; no colour inserts, coated stock, varnish, lamination, foil, index tabs, sewing or electronic component is assumed. This is a route-specific subset, not all manufacturing technologies within the classification. The printer's publishing page demonstrates directory production and alternative sheetfed/web/digital offerings; the binder manufacturer establishes offset gathering, milling, EVA and trimming options. Neither establishes one actual factory recipe or proves that all those options occur together in a particular job. Actual job/equipment/material evidence is required. [lithographics-publishing; epa-ctg-2006; mm-antaro-perfect-binding]

Directory-specific production starts with an approved edition snapshot: contact-field layout, alphabetic/geographic/industry sorting, listing sequence, index/page cross-references and data cut-off. File preflight and imposed proofs must verify that names, contact digits and index locators remain readable and consistent after folding, milling and trimming. A wrong section, duplicate signature, omitted listing page, unreadable small type or index-to-page mismatch can invalidate an otherwise correctly glued book. Corrected files and reprinted signatures remain attributable to the same edition/lot; they do not generate another accepted reference output. These are declared foreground acceptance requirements derived from the directory function, not numerical standards claimed from classification notes.

Exclude online directories, contact-database access and directory enquiry services; general reference books; newspapers and periodicals (including business, professional and academic issues); pure advertising catalogues; alternative web/digital/waterless/UV/EB routes; hardcover, saddle stitch, coil, PUR and loose-leaf formats. An annual edition label alone does not make a contact directory a periodical: assess the actual principal content. Do not extend this identity to another CPC. Future revisions for this same directory category retain this unique PCR identity.

All consumption, losses and releases are future data collection requirements. No per-copy weight, page count, grammage, formulation proportion, yield, lifetime, emission rate or allocation share is a default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.directories-in-print |
| classification_refs | CPC 3.0 32230; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Printed collections of systematically organized contact information with optional entity descriptions, in the selected black-only sheetfed/EVA softcover construction. |
| excluded_products | Dictionaries/encyclopaedias and other general reference books; professional prose books; daily or non-daily periodicals; product-price advertising catalogues without directory function; online/database/enquiry services; other printing, binding and finishing constructions. |
| representative_product | One edition of a black-only business/trade contact directory, with ordered entity listings, category index and page locators, uncoated woodfree text/cover and nonreactive EVA milled-spine binding. No standard dimensions, listing count or mass are imposed. |
| production_route | Approved directory snapshot and imposition → CTP imaging → text/cover wet sheetfed offset and setting → folding/gathering by signature sequence → milling/EVA gluing/cover attachment → trimming → listing/index/page and binding acceptance → packing. |
| market_state | Newly first-released complete printed directories at printer gate; retained text, cover, ink, glue and actual powder included; delivery packaging separately accounted. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete printed contact directory of one declared edition and listing/index design. |
| How much | 1 kg net newly accepted complete printed directories of the same design and reporting-period lot cohort. |
| How well | Meet commissioned contact legibility, listing sequence/completeness, index-to-page accuracy, page order, trim and binding requirements; record tests, sampling and disposition. No contact-response success or universal durability is implied. |
| How long or cycle | One edition's manufacturing cycle at factory gate. Record edition/data cut-off and expected supersession separately; no assumed annual replacement or equal information-service duration. |
| reference_flow_link | `directory_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Directories, in print `dca7a7f7-919e-4862-9a73-964fff152f94` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | directory title and edition; directory purpose and listed entity class; geographic/industry/alphabetic scope; data cut-off and supersession policy; listing count and contact fields; sorting/index and page-locator design; total pages/signatures and index pages; trim size and gutter; type legibility and proof approval; text/cover woodfree paper grade, grammage and moisture; black ink SKU/setting chemistry; process-free plate coating; fountain concentrate, added IPA and wash composition; nonreactive EVA spine/side grades; calibrated net mass and copy counts; first quality release and failed/reworked lots; production site/period; utilities and supplier boundaries; packaging ownership/stock/returns; allocation drivers and uncertainty. |

Declare all required qualifiers in dataset metadata, product/reference-flow notes or equivalent records. The native directory identity is a finished manufactured Product flow for systematically organized contact information, with Mass/kg reference and the matching directory classification. It identifies the declared directory category without prescribing the selected printing/binding route, a supplier background, copy weight or burden. Retain every route/edition qualifier and actual provider/quantity check; no broad printed-matter or 3D identity is substituted. Mass results do not establish equal numbers of usable contacts or equal lookup service across different editions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted complete directory net mass at recorded moisture under cp_release; include retained ink/glue/powder and exclude dispatch packaging. |
| `one_basis` | all inventory rows | reference product mass | kg | Every exchange, collection aggregation and calculation uses per 1 kg reference flow. Reconcile raw period/lot amounts and first quality release Q before a single final normalization; input sheets, impressions, listings and dispatch copies are not substitutes for Q. |
| `quantity_ownership` | supplied formulations and wastes | whole-stream mass | kg | Quantify each supplied ink/concentrate/wash/EVA grade once as a whole formulation; constituent assays support balances, not duplicate input exchanges. Retain actual density, temperature, moisture and concentration if converting records. Whole liquid mass is not dry solids. |
| `electric_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert actual metered electricity by 1 kWh = 3.6 MJ. A flow's property label does not establish voltage, provider or heating duty. |
| `gas_volume` | natural_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve meter/provider temperature, absolute pressure, wet/dry basis, composition and compressibility; establish compatible delivered volumes. For the separate consolidated mass balance, gas mass = compatible metered volume × actual gas density established by calibrated measurement or documented composition/T/P/Z calculation under cp_energy. Keep the inventory exchange in native m3. No generic density or pure-methane composition. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved directory contact/index file supplied to print production; purchased dry unprinted text/cover sheets and finished process-free plates; actual complete supplied formulations. |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | Only printed contact directories in CPC 3.0 32230, limited to the selected black-only sheetfed, uncoated woodfree, flexible-cover, nonreactive-EVA construction. |
| recursive_input_rule | A purchased already printed directory or signature is not raw paper. Identify external production separately, retain upstream burdens and matched transfers, and prevent duplicate final output. An internal corrected/reprinted signature remains internal rework. |
| upstream_dataset_requirement | Compatible actual paper/pulp, plate, ink/concentrate/wash, adhesive, utilities, maintenance, packaging and transport/treatment backgrounds. Each supplier stage is owned once; flow UUIDs supply no production burden. |
| disclosure | Factory/outsourced stages and reporting period, approved edition scope, starting file state, excluded contact-research/editorial services, included file preflight, all supplier/treatment links, stocks/WIP, physical balances and separately allocated loads. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_directory` | applicability | Confirm systematically organized contact information as the principal product and preserve actual listing/index/edition qualifiers. Similar subject matter, binding or publication frequency cannot extend this identity to general reference books or periodicals. | `unsd-cpc3-2025` |
| `b_route` | production | Include file preflight/proofs, CTP exposure, make-ready, text and cover offset, setting, folding/gathering, milling, EVA spine/side gluing, trimming, directory-specific acceptance, cleanup, packing and attributable extraction/compression/cooling/standby. No heatset dryer, UV curing, separate plate developer bath or processor rinse belongs to the selected route. Plate production, coating removal/fate and startup waste still belong. | `epa-ctg-2006`; `epa-eiip-2002`; `kodak-sonora-process-free`; `mm-antaro-perfect-binding` |
| `b_supplier` | purchased inputs | Include actual upstream paper production and delivery, complete coated plates, formulated materials and packaging once. Use supplier-compatible state/quantity/geography/year and avoid adding ingredients already covered by a whole-formulation provider. Outsourced printing/binding is not a zero-burden service. | `epa-eiip-2002` |
| `b_transfer` | internal stages and stocks | Preserve identical physical transfers of printed signatures, covers and gathered blocks between stages; they are not additional final references. Track opening/closing raw stock, WIP, accepted finished goods, held/rejected stock and all internal rework. Include setup, failed lots, corrected pages, cleanup and closing WIP loads; do not erase them at a period boundary. | `epa-eiip-2002`; `mm-antaro-perfect-binding` |
| `b_release_boundary` | waste and outdoor emissions | Separate captured dust, liquid/cloth waste and outdoor species after actual controls. Include ancillary gas only when attributable heating exists; it is not the ink-setting mechanism. Offsite power/treatment emissions stay in their background provider. Record water/ambient-air/combustion-air contributions needed to close balances, with each actual elementary exchange separately identified. | `epa-ctg-2006`; `epa-method18-2025`; `epa-gas-ap42-2026` |
| `b_service_limit` | downstream use | Exclude contact-data research/verification and editorial work before the approved production-file gate, directory distribution/lookup use and end of life from this foreground boundary; disclose them when a larger lifecycle study includes them. Printer preflight, corrections/proofs and all actual factory energy remain included. Never claim full information-service or cradle-to-grave coverage from this gate-to-gate dataset. | `unsd-cpc3-2025`; `lithographics-publishing` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `directory_manufacture` | Black sheetfed offset, EVA-bound printed contact directory | required | Actual approved edition and selected construction confirmed | foreground | 1 kg net first-released complete directories |

One aggregated foreground process retains separate stage accounts: directory file/approved index → plate imaging → body/cover printing → signature folding and verified sequence gathering → spine preparation/gluing → trim and directory release → packaging/dispatch. Preserve actual stage transfers and meter records, without counting internal blocks as purchased products or new final output. A replacement signature made to correct an index error retains its original lot lineage.

Cards below are individual exchanges; conditional cards require occurrence/absence evidence, not an assumed positive amount or zero. Actual additional colour, chemical, oil, refrigerant, treatment chemical, package component, waste stream or emission species requires its own compatible atomic card before a concrete dataset can claim completeness. Multiple actual grades or separately transferred streams must remain separate. Source references explain routes/measurement needs, not quantities.

### Process: Printed contact directory manufacture (`directory_manufacture`)

#### Inputs

##### Product flows

###### Uncoated printing, writing and packaging paper (`text_paper`)

Purchased dry unprinted woodfree text sheets for ordered contact listings and index pages. Record actual furnish, recycled fraction, grammage, moisture, sheet format, imposition and supplier; native broad identity supplies no recipe. Reconcile startup and corrected-signature sheets separately from retained pages.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_material; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epa-eiip-2002`

###### Uncoated printing, writing and packaging paper (`cover_paper`)

Purchased uncoated woodfree flexible cover paper, printed in black only; no laminate, jacket or casing board. Weigh separately from text stock and retain cover spoil, orientation and edition/contents match.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_material; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `mm-antaro-perfect-binding`

###### Finished process-free coated aluminium offset plate (`plate`)

One actual finished coated plate grade, CTP imaged and developed on press. Count actual plate changes for listing/index corrections and measure whole plate mass/coating fate; bare aluminium substrate is not the supplied plate.

- Selected flow: Finished process-free coated aluminium offset plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_material; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `kodak-sonora-process-free`

###### Conventional oil-based black sheetfed offset paste ink (`black_ink`)

One as-supplied black formulation for text and cover, setting by absorption/oxidation. Capture SKU, complete pigment/oil/resin/wax composition, fossil/biogenic carbon and provider scope; no heatset, water-based or radiation-curable substitute. Count embedded components only in constituent balances. The broad native non-water planographic identity is conditional on the actual conventional oil-based black paste SKU; its generic glycol-ester examples and heat categorization neither specify ingredients nor require heatset drying.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_formula; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formula`
- Sources: `epa-ctg-2006`

###### Aqueous wet-offset fountain concentrate (`fountain_concentrate`)

One actual supplied aqueous concentrate grade, with supplier composition, density, concentration and carrier-water mass. It is not the diluted press bath or a selector for several chemicals. Add separately purchased water and separately dosed IPA only outside this formulation; no duplicated component providers.

- Selected flow: Aqueous wet-offset fountain concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_formula; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formula`
- Sources: `epa-ctg-2006`

###### Isopropanol added separately to fountain bath (`ipa_addition`)

Conditional separately purchased IPA, CAS 67-63-0, only with actual dosing evidence. Record delivered purity, carrier and actual water; this is the supplied IPA grade, not concentrate-contained IPA. Unverified purity or provider basis remains pending. Native identity is China production mix; it does not declare delivered purity, so verify actual chemical assay and compatible whole-product supplier basis.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_formula; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formula`
- Sources: `epa-ctg-2006`

###### Petroleum-distillate offset blanket wash formulation (`blanket_wash`)

One actual supplied conventional-ink blanket/roller wash. Retain UVCB/CAS and constituent disclosure, aqueous fraction and measured whole mass. It is neither printhead cleaner nor neat solvent assumed to represent a blend; separately purchased added water is measured once.

- Selected flow: Petroleum-distillate offset blanket wash formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_formula; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formula`
- Sources: `epa-ctg-2006`

###### Tap water (`tap_water`)

Actual separately metered treated liquid water added to fountain/cleaning circuits. Native reference is Mass/kg; record density/temperature if starting from volume. Exclude carrier water already owned by whole supplied formulations; supplier treatment/distribution must match.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_water; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-ctg-2006`

###### Starch (`powder`)

Conditional actual unmodified starch anti-setoff powder. Verify feedstock, grade and absence of a hydrophobic coating; weigh retained, captured and emitted portions separately. A coated blend needs its own specific formulation, not this identity.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_material; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `heidelberg-powder-2010`

###### Dry cotton wiping cloth (`cotton_wipe`)

Conditional actual cotton cloth issued for manual cleanup. Record fibre/grade, clean dry mass, new versus laundered return and service ownership. Retained solvent/ink belongs to the outgoing contaminated-cloth mass, without another purchase.

- Selected flow: Dry cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_material; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epa-ctg-2006`

###### Nonreactive EVA spine-binding hotmelt formulation (`eva_spine`)

Actual solid solvent-free EVA-based spine glue, including supplied tackifier/wax. Measure spine application, glue-pot start/standby and purge separately; pure EVA polymer and PUR are not this exchange. Supplier grade and retained mass must match milling/bond tests.

- Selected flow: Nonreactive EVA spine-binding hotmelt formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_formula; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formula`
- Sources: `mm-antaro-perfect-binding`

###### Nonreactive EVA side-binding hotmelt formulation (`eva_side`)

Actual separate side-glue grade/application if the selected binder uses it. Measure separately from spine glue; if one delivered SKU serves both roles, the two issue subaccounts sum to its single purchase/provider amount. Document absence where no side adhesive is used.

- Selected flow: Nonreactive EVA side-binding hotmelt formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_formula; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formula`
- Sources: `mm-antaro-perfect-binding`

###### Alternating current (`electricity`)

Conditional native identity for actual CN customer-side 1–35 kV grid-average supply, not arbitrary voltage/geography. Sum disjoint metered file/CTP, press, compression/cooling, dust extraction, folding/binding/electric glue-pot, trim and packing loads with setup, idle, failed runs and cleanup. A different supply needs compatible identity/provider review.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_energy; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-eiip-2002`; `mm-antaro-perfect-binding`

###### natural gas in the gaseous state (`natural_gas`)

Conditional actual pipeline/compressed gaseous natural gas for attributable auxiliary heating only, not conventional-ink drying. Native reference is Volume/m3; CAS methane metadata does not establish a pure-methane fuel. Preserve composition, volume conditions, burner duty and actual supplier basis.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_energy; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-gas-ap42-2026`

###### Finished corrugated shipping carton (`carton`)

Conditional complete actual dispatch carton, including its supplied adhesive/printing; measure whole mass and grade/fibre recipe. Retain unused and closing-FG cartons; no default recycled fraction or double-counted paper-component provider.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Polyethylene dispatch film (`pe_film`)

Conditional actual PE dispatch film, CAS 9002-88-4 polymer identity subject to actual grade/additives; not cover lamination. Weigh shipped, offcut and closing-FG portions and retain supply-pack ownership separately. Native name/CAS identifies PE film, but source CPC29220 is inconsistent and remains a source-quality debt; no PET or leather background is adopted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Polypropylene packing strap (`pp_strap`)

Conditional actual PP strap, CAS 9003-07-0 polymer subject to grade/additives. Record complete strap mass and its own waste; never infer presence from a packaging convention.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Wooden transport pallet (`wood_pallet`)

Conditional actual complete wooden pallet receipt; specify wood species, moisture, treatment, nails and ownership. Whole pallet provider covers components once. Returnable pallets retain cycle/return/closing records; no default per-trip loss.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Mineral hydraulic oil (`hydraulic_oil`)

Conditional actual mineral hydraulic-oil replacement allocated to this process with measured grade, viscosity, formulation and replacement interval. Initial machine fill, top-up, internal circulation and outgoing used oil are distinct records. Use the selected native Mass/kg reference; its separate volume coefficient is not a density. Confirm actual mineral base oil/additives and compatible refining/provider scope.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_material; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Finished offset rubber printing blanket (`rubber_blanket`)

Conditional replacement of one actual finished blanket grade including textile backing, not bare rubber resin. Measure mass/service use and causal replacement ownership; no assumed life per directory.

- Selected flow: Finished offset rubber printing blanket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_material; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epa-ctg-2006`

##### Waste flows

No preset boundary exchange in this group for the selected route; add an individually identified atomic row when the actual survey establishes one.

##### Elementary flows

No preset boundary exchange in this group for the selected route; add an individually identified atomic row when the actual survey establishes one.

#### Outputs

##### Product flows

###### Complete printed contact directory, black sheetfed offset, EVA perfect bound (`directory_output`)

The only final reference output. First release requires the same approved edition/listing/index, full signature sequence, correct locators, readable contacts and binding/trim acceptance. Weigh complete retained construction net of dispatch packages; no generic printed-matter UUID is adopted.

- Selected flow: Directories, in print `dca7a7f7-919e-4862-9a73-964fff152f94`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `unsd-cpc3-2025`

###### Corrugated carton attached to dispatched directories (`carton_dispatch`)

Conditional physical packaging transfer, separate from net directory output. Match the same component receipt/grade and dispatch or return document; do not add another upstream load merely because the package is shown at both boundaries. Closing-FG packaging remains in stock, not this dispatched amount.

- Selected flow: Corrugated carton attached to dispatched directories
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Polyethylene film attached to dispatched directories (`film_dispatch`)

Conditional physical packaging transfer, separate from net directory output. Match the same component receipt/grade and dispatch or return document; do not add another upstream load merely because the package is shown at both boundaries. Closing-FG packaging remains in stock, not this dispatched amount. Native name/CAS identifies PE film, but source CPC29220 is inconsistent and remains a source-quality debt; no PET or leather background is adopted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Polypropylene strap attached to dispatched directories (`strap_dispatch`)

Conditional physical packaging transfer, separate from net directory output. Match the same component receipt/grade and dispatch or return document; do not add another upstream load merely because the package is shown at both boundaries. Closing-FG packaging remains in stock, not this dispatched amount.

- Selected flow: Polypropylene strap attached to dispatched directories
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Wooden pallet dispatched with directories (`pallet_dispatch`)

Conditional physical packaging transfer, separate from net directory output. Match the same component receipt/grade and dispatch or return document; do not add another upstream load merely because the package is shown at both boundaries. Closing-FG packaging remains in stock, not this dispatched amount.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Reusable wooden pallet returned to its owner (`pallet_return`)

Conditional actual reusable whole wooden pallet returned to its owner, separate from a directory dispatch and from discarded pallet waste. Match the actual receipt/ownership, grade, return mass and closing stock; returning the same pallet adds no second supplier production load.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

###### Clean unprinted paper offcuts (`clean_trim`)

One actually segregated clean trim stream. Retain paper grade/moisture and receiver; do not mix with printed spoil by assumption.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Printed paper spoil (`printed_spoil`)

One separately collected printed startup/corrected-signature/trim stream; record retained ink/powder and moisture. Broad waste-paper identity requires actual receiver acceptance.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Rejected complete EVA-bound directories (`failed_directory`)

Actual failed complete directories transferred to waste, including paper/cover/ink/EVA. Retain rejection reason and lot mass; these units are not Q, and reinspection cannot create a second output. This broad industrial solid-waste identity locates only this single actual whole physically solid transfer, not pure-component mass or a default treatment/hazard class.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Spent coated aluminium offset plates (`spent_plate`)

Whole actual spent plate stream, including coating/ink contamination. Record metal and nonmetal composition and receiver; pure clean aluminium scrap is not automatically compatible. This broad industrial solid-waste identity locates only this single actual whole physically solid transfer, not pure-component mass or a default treatment/hazard class.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `kodak-sonora-process-free`

###### Waste ink (`ink_residue`)

One actual separately collected conventional-offset ink residue. Weigh containers/press residues with retained solvent and exclude ink already owned by paper, wash or cloth waste.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Spent aqueous offset fountain bath (`spent_fountain`)

Whole actual transferred aqueous mixture, with water-specific assay, solids/other constituents and compatible mass/volume/density/temperature. It is not direct river discharge or dry residue. The broad waste-liquid identity describes this actual whole liquid only; its generic hazard wording is not a site hazard determination, and independently measured nonwater mass is not automatically dry solids.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Spent petroleum-distillate blanket wash (`spent_wash`)

One separately transferred whole liquid containing actual solvent/ink/water. Weigh and assay state/composition and receiver; nonwater mass is not automatically dry solids. The broad waste-liquid identity describes this actual whole liquid only; its generic hazard wording is not a site hazard determination, and independently measured nonwater mass is not automatically dry solids.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Ink-and-solvent-contaminated cotton wiping cloth (`dirty_wipe`)

One solid contaminated-cloth stream including measured retained liquids. Record sealed storage losses and actual laundering/disposal route; reused internal cloth is circulation, not new waste each wipe. This broad industrial solid-waste identity locates only this single actual whole physically solid transfer, not pure-component mass or a default treatment/hazard class.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Cooled solid nonreactive EVA adhesive purge (`eva_purge`)

Actual separately collected cooled solid purge with paper/ink contamination. Internal glue return is not external waste; hot liquid/PUR needs a different state/identity. This broad industrial solid-waste identity locates only this single actual whole physically solid transfer, not pure-component mass or a default treatment/hazard class.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Captured paper spine-milling dust (`milling_dust`)

One collected whole dust stream from milling/trim, with actual moisture, ink and EVA. Weigh receiver transfers and stock changes; this is waste, not outdoor PM or dry paper assumed by default.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Collected starch anti-setoff powder residue (`powder_residue`)

Conditional separately collected powder residue with measured paper/ink contamination, kept apart from milling dust, retained page powder and airborne particles. This broad industrial solid-waste identity locates only this single actual whole physically solid transfer, not pure-component mass or a default treatment/hazard class.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Waste corrugated shipping carton (`carton_waste`)

One actual cardboard carton discard/offcut stream, with supplier-pack versus dispatch-pack origin and receiver. Match component receipts, FG and returns; do not assign all receipts to waste. The native comment contains an expert 2% example; that quantity is rejected and supplies no default loss rate here.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `epa-eiip-2002`

###### Waste polyethylene dispatch film (`film_waste`)

One actual untreated PE film discard stream, including contamination; not cleaned recycled granulate. Measure separately from PP strap.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `epa-eiip-2002`

###### Waste polypropylene packing strap (`strap_waste`)

One actual PP strap discard stream, with polymer/additive/contamination and receiver evidence; no assumed PE identity.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `epa-eiip-2002`

###### Discarded wooden transport pallet (`pallet_waste`)

One actually discarded whole wooden pallet, with wood moisture/nails/treatment and receiver. Reusable pallet return remains a product transfer, not this discard. This broad industrial solid-waste identity locates only this single actual whole physically solid transfer, not pure-component mass or a default treatment/hazard class.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_pack; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `epa-eiip-2002`

###### Used mineral hydraulic oil (`used_oil`)

Conditional actually drained whole oil stream with contamination and receiver; do not count internal recirculation or duplicate spent blanket wash.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### Spent finished offset rubber blanket (`spent_blanket`)

Conditional actual complete spent blanket with textile/ink/solvent contamination and actual receiver; no pure-rubber recycling assumption. This broad industrial solid-waste identity locates only this single actual whole physically solid transfer, not pure-component mass or a default treatment/hazard class.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_waste; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

##### Elementary flows

###### isopropanol (`ipa_air`)

Conditional measured CAS 67-63-0 to outdoor air/unspecified after controls, only when actual fountain/wash composition and emission survey establish it. No fixed evaporation or retention fraction; match ambient inlet correction and species calibration.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ctg-2006`; `epa-method18-2025`

###### particles (PM2.5) (`pm25`)

Conditional net outdoor air/unspecified release after capture, diameter up to 2.5 micrometres; separately assess milling/cutting, powder and actual ancillary heat. Disjoint bins only; captured dust and cumulative PM10/TSP are not added again. Preserve filterable/condensable definitions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `mm-antaro-perfect-binding`; `heidelberg-powder-2010`; `epa-gas-ap42-2026`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Conditional net outdoor air/unspecified release after capture, diameter above 2.5 and up to 10 micrometres; separately assess milling/cutting, powder and actual ancillary heat. Disjoint bins only; captured dust and cumulative PM10/TSP are not added again. Preserve filterable/condensable definitions.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `mm-antaro-perfect-binding`; `heidelberg-powder-2010`; `epa-gas-ap42-2026`

###### particles (> PM10) (`pmlarge`)

Conditional net outdoor air/unspecified release after capture, diameter above 10 micrometres; separately assess milling/cutting, powder and actual ancillary heat. Disjoint bins only; captured dust and cumulative PM10/TSP are not added again. Preserve filterable/condensable definitions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `mm-antaro-perfect-binding`; `heidelberg-powder-2010`; `epa-gas-ap42-2026`

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional actual ancillary gas combustion/leak species to outdoor air/unspecified, CAS 124-38-9. Establish measured species mass and applicable fossil origin; no boiler factor, complete oxidation or pure-methane fuel assumption. Offsite power/treatment emissions are excluded from this direct exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42-2026`

###### carbon monoxide (fossil) (`co_fossil`)

Conditional actual ancillary gas combustion/leak species to outdoor air/unspecified, CAS 630-08-0. Establish measured species mass and applicable fossil origin; no boiler factor, complete oxidation or pure-methane fuel assumption. Offsite power/treatment emissions are excluded from this direct exchange.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42-2026`

###### methane (fossil) (`methane`)

Conditional actual ancillary gas combustion/leak species to outdoor air/unspecified, CAS 74-82-8. Establish measured species mass and applicable fossil origin; no boiler factor, complete oxidation or pure-methane fuel assumption. Offsite power/treatment emissions are excluded from this direct exchange. The native synonym list contains unrelated carbon/chemical names; identity is limited to the explicit methane/fossil name, CAS74-82-8 and outdoor-air category, with synonym contamination recorded as a source-quality debt.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42-2026`

###### nitrous oxide (`n2o`)

Conditional actual ancillary gas combustion/leak species to outdoor air/unspecified, CAS 10024-97-2. Establish measured species mass and applicable fossil origin; no boiler factor, complete oxidation or pure-methane fuel assumption. Offsite power/treatment emissions are excluded from this direct exchange.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42-2026`

###### sulfur dioxide (`so2`)

Conditional actual ancillary gas combustion/leak species to outdoor air/unspecified, CAS 7446-09-5. Establish measured species mass and applicable fossil origin; no boiler factor, complete oxidation or pure-methane fuel assumption. Offsite power/treatment emissions are excluded from this direct exchange.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42-2026`

###### Nitrogen oxides as NO2-equivalent, excluding N2O (`nox_air`)

Conditional actual ancillary combustion NOx only after monitoring/exchange/LCIA NO2-equivalent mass compatibility is demonstrated. Do not add NO and NO2 again or substitute N2O. Quantity convention and native identity remain pending until verified.

- Selected flow: Nitrogen oxides as NO2-equivalent, excluding N2O
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_air; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42-2026`

###### Net water vapour to outdoor air (`water_vapour`)

Conditional actual net water vapour after condensation/control, with matched incoming ambient humidity/flow subtraction. Distinguish paper/formulation water, condensate and actual combustion water using fuel hydrogen evidence; no all-supply-evaporation or residual-equals-release assumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual physical exchange per 1 kg reference flow using cp_water; preserve raw lot/period accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-eiip-2002`; `epa-method18-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_physical_first` | all ledgers | Close gross physical material/water/carbon and packaging ledgers before allocating environmental burdens. Preserve actual product and waste mass; never multiply physical outflows by an environmental-load share. Show gross physical exchange/Q and attributed burden/Q as distinct accounts. EIIP supports emission/material accounting, not the LCA allocation hierarchy. Apply ILCD 7.9 partitioning only within its attributional scope: document study goal/decision context, LCI approach and why allocation cannot be avoided by subdivision, virtual subdivision or goal-compatible system expansion/substitution. This manufacturing PCR supplies no consequential substitution scenario or blanket ILCD-compliance claim. | `epa-eiip-2002`; `ec-jrc-ilcd-2010` |
| `a_cause` | shared equipment | Prefer job segregation, direct metering or subdivision, including virtual subdivision where process understanding quantifies an exchange exclusively related to a job. Assign directory-specific file correction, plate changes, reprinted listing/index signatures and cleanup to their causal lot; record job order and changeover responsibility. For remaining shared compression/cooling/press/binder/standby loads use demonstrated exchange-specific causal runtime, impressions/printed area/passes or metered thermal demand, with the full competing-job denominator. Runtime alone requires comparable service intensity; justify differing operating modes and split loads where needed. Do not impose one key on all exchanges or use title, listing count, selling price or accepted mass as a default causal share. | `ec-jrc-ilcd-2010` |
| `a_residual` | unavoidable shared loads | Document why actual/virtual subdivision is infeasible and test a determining physical relationship for each residual exchange; a convenient mass, time or other physical ratio without causal evidence is not sufficient. Only for loads with no justified determining physical relationship may residual economic allocation use evidenced co-function amounts and representative market values at the same process boundary and delivered condition. State numerator, full competing-function denominator, price period, boundary adjustments, uncertainty and sensitivity; unavailable causal data is a gap, not proof of no causal relationship or permission to invent an equal/physical/economic share. Across all functions, allocated exchange quantities and provider burdens must sum to their original totals. Failed Q=0 lots retain physical and energy loads in failed/WIP ledgers and later justified cohort assignment; they cannot be divided by zero or silently deleted. Normalize the final attributable account once by the same Q. | `ec-jrc-ilcd-2010` |
| `a_recovery` | paper/plate and reusable packaging | Record actual receiving process and ownership; sale does not automatically create a co-product credit. Declare treatment/recycling burden and any goal-compatible, evidenced substitution separately, with no duplicated avoided production or switching between attributional partitioning and consequential credits. Before recycling allocation, identify the treatment boundary, valuable secondary function, changes in material properties and true joint process under ILCD 7.9.3 VI; these conditions cannot be inferred from a sale or a waste UUID. Preserve actual signed prices and treatment/gate fees, including zero/negative values, for review of the applicable case; do not clip them to zero or invent a fee-based share, recycling rate or credit. Unresolved case/receiver evidence leaves allocation pending without deleting treatment burdens. Incoming returnable packaging, reuse cycles, closing stock, return and discard stay physically reconciled; any per-use burden needs documented service/ownership and original component/provider evidence under cp_pack and calc_pack. | `ec-jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `directory_manufacture` | directory first release | required future foreground record | edition/cut-off; layout revision; listing/index checksum; signatures/pages; ordered copies; first accepted copies/net kg; moisture; release date; failed/held/rework lineage; sample design; package tare; opening/closing FG; dispatch/returns | Check approved contact fields and index locators against imposed proofs and sampled finished directories; verify signature sequence/page completeness, trim/gutter and binding. Weigh accepted complete net directories on calibrated scales. Separate first release from reinspection of already counted items. | kg; copies; pages | every job and release | full declared reporting period with lot cohort reconciliation | actual edition, factory and declared outsourced stages | per 1 kg reference flow | signed proof/release register; test results; scale calibration; sampling uncertainty; FG reconciliation |
| `cp_material` | `directory_manufacture` | each paper/plate/aid/maintenance exchange | required future foreground record | lot/stage; supplier/grade; count; mass; sheet area/grammage; moisture; opening/receipts/issues/returns/closing raw stock and WIP; plate area/coating; service replacement | Weigh each actual grade, reconcile goods receipt and stage issues/returns, measure plate/maintenance component mass. Retain actual woodfree furnish and uncoated state. Paper area/grammage is a check, not invented yield or accepted output. | kg; sheets; m2 | every receipt/job/replacement and period close | full reporting period including setup/failed/corrected runs | factory stages and actual suppliers | per 1 kg reference flow | calibrated weighing; purchase/issue records; furnish/coating specification; stock/WIP account |
| `cp_formula` | `directory_manufacture` | each complete formulation and separately added IPA | required future foreground record | grade/SKU; whole delivered/issued/returned mass; complete composition/CAS including unlisted SDS ingredients; concentration/water/carbon origin; measured density/temperature; retained constituents; stock; supplier background boundary | Weigh each supplied ink/concentrate/wash/EVA formulation once. Record separate IPA addition only outside the purchased concentrate. Assay constituents for water/carbon/species balances and provider matching; do not also enter those embedded ingredients as purchased inputs. Weigh spine/side application and purges separately. | kg; m3 | every job/material change and period close | actual edition/period including startup and cleanup | printer, formulation supplier and binder | per 1 kg reference flow | delivery/weighing logs; current supplier formulation; assay; background ownership ledger |
| `cp_energy` | `directory_manufacture` | electricity and gas separately | required future foreground record | device/stage/job; start/end meter; kWh; voltage/grid/year/provider; gas m3/T/P/Z/wet-dry/composition; running/startup/idle/cleanup hours; all competing jobs; fuel/heat ownership | Submeter file/CTP, press, compressor/cooling, dust collection, folders/binder/glue pots, trim and packing; reconcile total bills and all period loads. Meter actual ancillary gas separately. Document absence of purchased steam/heat for this selected electric-glue route; an observed other utility requires a new atomic card and applicability review. | kWh; MJ; m3 | job/stage meters and bill periods | entire declared period including failed jobs, WIP and standby | actual facility and attributable service providers | per 1 kg reference flow | calibration; meter/bill reconciliation; equipment logs; causal allocation and gas-volume compatibility |
| `cp_water` | `directory_manufacture` | tap water and net vapour separately | required future foreground record | source/treatment; added water meter; density/T; formulation water; paper moisture; inlet/outlet humidity/airflow/T/P; condensate; spent liquid water; retained product water; stocks; combustion hydrogen | Meter separately purchased water, retain whole-formulation carrier water as constituent information, sample liquid streams and product moisture. Measure net outdoor vapour with matched ambient inlet correction; do not call an unexplained balance residual evaporation. | kg; m3 | each filling/bleed/job and representative air survey | matched reporting period and actual operating modes | factory wet-offset/cleanup and any verified ancillary heater | per 1 kg reference flow | water-specific assay; calibrated meters/air measurements; density basis; full water balance |
| `cp_waste` | `directory_manufacture` | each segregated outgoing stream | required future foreground record | bin/stage/lot; net whole-stream mass/tare; moisture; liquid volume/density/T; water-specific fraction; independently determined solids/nonwater constituents; retained paper/ink/glue/solvent; opening/closing waste stock; dispatch/receiver/treatment | Weigh each actual stream at transfer, reconcile generated/held/dispatched amounts and receiver acceptance. Keep clean trim, printed spoil, failed bound directories, milling dust, used plates, spent liquids and contaminated cloth separate where physically segregated. Never count the same retained ink in two outgoing streams. | kg; m3 | collection/dispatch and period close | complete period including cleanup and stock change | factory transfer point and actual receiver | per 1 kg reference flow | weighing tickets; composition/moisture assays; legal transfer/receiver records; waste stock balance |
| `cp_pack` | `directory_manufacture` | each packaging receipt/dispatch/return/waste | required future foreground record | event id/date/direction; component id/material/grade; owner and original cohort; complete mass/tare and unit; mutually exclusive first purchased receipt P/first external non-purchase N_ext/true inward return ER; prior outward event and same-item continuity for ER; incoming raw-supply attachment; gross dispatch D; outward owner return EO; opening/closing unused/raw-attached/WIP-attached/FG-attached/held/waste stocks; discarded outward component W; receiver; original per-exchange physical and attributed/provider vectors with references/quantities/units; whole-supply included scope; incremental rental/cleaning/transport service and original cohort Q_c | Weigh carton, PE film, PP strap and pallet separately if present, for every actual inward/outward event and stock state, including incoming supply packs and unsent WIP/FG. Classify each inward event once: P is first purchased entry, including components covered by an invoiced whole supply; N_ext is first external non-purchase entry, including borrowed, rented, entrusted or free components; ER requires the same component and proven prior outward transfer, not merely absence of an invoice. Distinguish gross dispatch from outward owner returns and actual component waste. Preserve original owner/cohort and each original exchange vector, even across periods; a true return does not acquire production again. Establish whether the whole-supply provider already covers each component before assigning its production once. Free/non-purchase does not mean zero burden; unresolved scope stays a gap. Record actual incremental services separately without adding services already covered by a provider. | kg; items | receipt/packing/dispatch/return and close | same lot cohort and reporting period as directory | printer stores/packing and actual owner/receiver | per 1 kg reference flow | event weighing/BOM and stock reconciliation; purchase/non-purchase agreement; prior outward and same-item return proof; owner/cohort lineage; original exchange/provider scope and service records |
| `cp_air` | `directory_manufacture` | each outdoor species/particle bin | required future foreground record | constituent survey/CAS; outlet; operation mode; concentration; airflow; T/P/humidity; inlet background; interval; calibration/response/recovery; detection limit; PM cut/filterable/condensable; controls; fossil/biogenic origin | Measure representative printing, setup, cleaning, storage and actual heat cycles after controls. Validate species recovery/method for the actual matrix, sum distinct outlets/intervals and document detection-limit treatment. TVOC carbon/calibration-gas equivalents are QA totals, not identified chemical mass. Add each actually identified extra species separately. | kg; mg/m3; m3/time | representative surveys and material/control changes | full actual period and all significant operating modes | outdoor factory release; no supplier/treatment double count | per 1 kg reference flow | validated sampling/lab reports; airflow closure; inlet correction; response factors; disjoint PM evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_release` | directory_output | Q is sum of measured net kg at first quality release for newly manufactured directories of the defined cohort; alternatively accepted copies times calibrated same-design sampled mean kg, checked against lot weighing. Reinspection/internal rework of already released units adds no Q. Dispatch = opening accepted FG + first release + physical customer returns - closing accepted FG - destruction/other transfers, with returned goods never recounted as new manufacture. | cp_release; cohort lineage; calibrated mass; FG movements | Q in kg and reconciled accepted FG account |  |
| `calc_stock` | whole directory_manufacture consolidated physical unit only | For one common mass basis: S_open + E_in = S_close + E_product + E_return + E_waste + E_air + R. S contains mutually exclusive raw/WIP/FG/held/waste stocks; E terms are actual external boundary transfers, not first release Q. Record water, ambient/combustion intake and other actual mass crossings needed for closure. For every stage link and lot/state/unit, T_out(a,b) = T_in(b,a); sum internal incoming minus outgoing legs is zero in this consolidated equation. Internal transfer is neither external receipt nor formation. Chemical reaction creates no total mass; species consumption/formation, if evidenced, is paired in separate constituent accounts. R is signed unexplained residual, never an invented source. | cp_material; cp_formula; cp_release; cp_pack; cp_waste; cp_water; cp_air; matched stage transfer ledger | gross consolidated physical account and signed residual R | `epa-eiip-2002` |
| `calc_normalize` | all inventory rows | After stock/cohort reconciliation, compatible gross physical exchange per reference = gross cohort exchange / Q. Separately, attributed environmental load per reference = (directly assigned + justified shared cohort load) / Q. Carry opening-WIP embodied amounts/provider loads to their original cohort and carry closing-WIP/failed Q=0 amounts forward explicitly; do not attach all period receipts to period releases. Preserve each original provider reference and quantity alongside its attribution. Apply no second allocation or normalization. | cp_release; all raw protocols; original provider and allocation ledgers; Q; opening and closing WIP/cohort lineage | each physical exchange and separately attributed load per 1 kg reference flow |  |
| `calc_species` | each measured outdoor species | Species kg = sum of compatible outlet concentration times integrated outlet flow minus matched incoming species mass, with calibrated unit/response/recovery corrections. Convert mg to kg by dividing by 1000000. Unknown residual VOC is an identified-data gap, not a known species. | cp_air; cp_formula; measured matched flows and intervals | species kg before the single normalization | `epa-method18-2025`; `epa-method25a-2017` |
| `calc_formula_balance` | each constituent | Actual constituent mass = whole supplied formulation mass times measured/verified constituent fraction. Reconcile opening/purchases with retained accepted/failed product, waste, outdoor release, transformations and closing stock. Use these component quantities as balances only while a complete formulation provider owns production. | cp_formula; cp_water; cp_waste; cp_air | constituent/water/carbon balance without duplicate purchase | `epa-ctg-2006` |
| `calc_pack` | each package component | On the same component/mass basis, B_open + P + N_ext + ER = B_close + D + EO + W + R_pack. P, N_ext and ER are mutually exclusive measured inward events as defined in cp_pack. D is gross outward dispatch, including attached directory/supply packaging, without netting ER; EO is outward return to an owner, excluded from D; W is actual outward discarded component mass. B stocks contain disjoint unused, raw-supply-attached, WIP-attached, FG-attached, held and awaiting-disposal states; waste still on site remains stock, not W. R_pack is a signed unexplained residual, not invented receipt. Match internal stage legs and cancel them on consolidation under calc_stock; detaching/reusing a component is not new purchase or material formation. Keep all packaging outside directory net Q. Reconcile gross physical vectors separately from attributed/provider vectors, retaining each original exchange direction, quantity, unit, provider reference, owner and cohort; inherit those on ER rather than charging production again. Assign each component's production once, within the whole-supply provider where already covered or through an evidenced separate component provider, never both and never zero solely for N_ext/no invoice. Additional actual rental, cleaning and return-transport service exchanges retain their service scope and original cohort denominator Q_c (that cohort's Q), not automatically this period's new Q; no extra Q is created by circulation or service. Retain Q_c=0/failed/WIP service loads pending justified cohort assignment under calc_normalize. | cp_pack; cp_release; cp_waste; matched internal stage legs; original owner/cohort and per-exchange physical/provider ledgers | gross component-event closure and separate once-only provider/service attribution |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_directory` | applicability and release | Verify contact directory purpose, edition/cut-off, ordered listings and index/page integrity; test readability and gutter after binding/trim. A cover title, annual date or common printing route does not establish classification. | actual publication contents; signed specification/proofs; finished-copy tests; release register |
| `dq_complete` | all stages | Survey all actual inputs/wastes/species and period modes. Record conditional absence with evidence; missing observation is not zero. No complete quantitative dataset while core reference/forming identities, provider quantities or material balances remain unresolved. Auxiliary UUID gaps are row-specific rather than proof that the entire methodology is invalid. | stage/chemical survey; calibrated original logs; explicit gaps; performed/skipped checks |
| `dq_basis` | quantity and provider links | Match whole formulation, unit/property, gas conditions, moisture/phase and waste receiver state. Paper input/retained output, gross/allocated and count/mass are distinct. Never borrow a factory amount, supplier capacity or historic retention fraction. | native identity and support chain; supplier specifications; raw metering; stock and ownership records |
| `dq_translation` | both renderings | Preserve ordered rule/row/protocol/source identities, quantities, conditions and complete Amount fields; use official Chinese baseName for every UUID-bearing selected flow. | bilingual field comparison and source/native records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_category` | reference dataset | Require a complete physical contact directory with actual organized contact content, edition/index qualifiers and selected representative construction. Reject a generic book, catalogue, magazine or database-access identity even when printed by the same machine. | `unsd-cpc3-2025` |
| `v_quality` | accepted output | Confirm Q includes only new lots' first quality-released net directory mass. Reconcile signatures/pages, contact legibility, index locators, gutter/trim and binding acceptance with rejected/reprinted pages. A later reinspection or internal rework never creates a second denominator. | `mm-antaro-perfect-binding` |
| `v_accounts` | physical and load ledgers | Reconcile opening/closing raw, WIP, FG, held/rejected and waste stocks, dispatch/returns and all retained constituents. Keep failed Q=0 loads, setup, changeovers, cleanup and standby; explain discrepancies with measured uncertainty. Keep gross physical and allocated burden accounts separate and normalize once. | `epa-eiip-2002` |
| `v_formulation` | purchased chemicals and providers | One actual whole supplied formulation per exchange, with composition and density basis; do not add its embedded components or its provider load twice. Separate added IPA and tap water from concentrate-carried quantities. EVA is nonreactive bookbinding formulation, not pure EVA resin or PUR. | `epa-ctg-2006`; `mm-antaro-perfect-binding` |
| `v_emissions` | waste/air/water | Captured dust is not emitted PM; use disjoint PM2.5, 2.5–10 and >10 bins after controls. Waste liquids are whole transferred mixtures; nonwater fraction is not automatically dry solids or direct discharge. Validate actual VOC species, NOx as declared NO2-equivalent excluding N2O, fossil/biogenic carbon and net water vapour; no factor, total VOC or residual substitutes for identified release. | `epa-method18-2025`; `epa-method25a-2017`; `epa-gas-ap42-2026` |
| `v_identity` | all exchanges | Recheck compatible native state-100 type, full name/route/use/form/phase, CAS/species/medium and reference property → unit group → unit. Missing reference or forming-flow identity requires explicit review; ordinary auxiliary identity gaps remain individually visible. No blank UUID implies zero quantity, approved provider or publication readiness. |  |
| `v_packaging` | packaging and FG | Check each actual component's measured inward P/N_ext/ER and outward gross D/owner return EO/waste W against disjoint opening/closing stocks under calc_pack, including raw-supply, WIP and unsent-FG attachment. Reject overlap, netted dispatch/returns and ER without prior outward same-item proof. Verify original owner/cohort and each exchange's original physical and attributed/provider vectors survive returns and period boundaries; whole-supply and separate component production must cover the actual component once. No invoice, first loan, rent or free supply cannot establish zero burden; unresolved provider scope remains explicit. Verify actual incremental rental/cleaning/transport services separately against included provider scope and original Q_c, without new Q or automatic division by new releases. Packaging must not inflate directory Q or disappear when FG remains unsent; retain failed/Q_c=0 and stock loads. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Route-specific manufacture of one declared printed contact-directory edition at printer gate, after actual foreground and identity review. |
| allowed_use | The stated black sheetfed, uncoated woodfree, process-free-plate, EVA-bound subset with complete directory acceptance, measured lot/period accounts and compatible actual providers. |
| excluded_use | Whole-leaf average; other CPC identities; full directory information/lookup service, equal contact utility or universal annual replacement; other printing/binding routes; ready-to-use numerical dataset inferred from a UUID or this methodology. |
| required_metadata | Every reference qualifier; actual edition/job/site/period; raw and allocated ledgers; WIP/FG/reject disposition; actual material grades; provider/packaging ownership; source limits; performed/skipped checks. |
| required_quality_disclosure | Scientific/translation review status, unresolved reference/forming and auxiliary identities separately, missing measurements/providers, uncertainty, physical residuals, allocation sensitivity and excluded service/lifecycle scope. |
| update_trigger | Listing/index design or edition scope, cut-off, paper/ink/fount/wash/EVA grade, printing/binding route, utilities, supplier/control/treatment, packaging ownership or acceptance changes. Same category revisions retain this PCR identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | PDF/printed p.149 directory contact-information boundary; p.148 general-reference and p.150 periodical distinctions. No printing route, quantity or acceptance threshold. |
| `lithographics-publishing` | `literature` | Lithographics, Publishing, official capabilities; https://lithographicsinc.com/services/publishing/ | Publishing paragraphs on directories, one/four-colour production and sheetfed/web/digital alternatives, plus prepress/proof workflow. Supports candidate route availability, not a job's combined EVA/uncoated recipe, quantities or whole-leaf representation. |
| `epa-ctg-2006` | `official_guidance` | EPA-453/R-06-002, Control Techniques Guidelines for Offset Lithographic Printing and Letterpress Printing, September 2006; https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | IV.A PDF12–14/printed6–8: directories, sheetfed versus web, paste ink, absorption/oxidation, fountain and wash. Historical regulatory proportions/retention/emission assumptions are not LCI defaults. |
| `epa-eiip-2002` | `official_guidance` | EPA EIIP Volume II Chapter 15, Preferred and Alternative Methods for Estimating Air Emissions from Printing, Packaging and Graphic Arts, May 2002; https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Section2.1.1/Figure15.2-1 PDF14–15 and accounting discussion PDF27/31; process decomposition and material records. No universal directory recipe, factor or per-copy weight. |
| `ec-jrc-ilcd-2010` | `official_guidance` | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, EUR 24708 EN; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Sections 7.9.1–7.9.3, PDF275–292/printed255–272: attributional applicability, subdivision/virtual subdivision, exchange-specific determining physical causality, residual boundary-specific economic allocation and 100% conservation. 7.9.3 VI addresses recycling case boundaries, valuable secondary functions and negative-value treatment; it is not a default credit, price adjustment, recycling rate or factory allocation key. This PCR applies these conditions to its manufacturing ledgers and requires actual evidence; it does not claim full ILCD compliance or quantify consequential substitution. |
| `kodak-sonora-process-free` | `literature` | Kodak SONORA Process Free Plates Sustainability datasheet; https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | PDF1 only: no separate plate processor chemistry/rinse for this route. Not zero entire-plant water, plate manufacture, coating fate, energy or startup waste. |
| `mm-antaro-perfect-binding` | `literature` | Müller Martini Antaro official perfect-binder documentation; https://mullermartini.com/en/product/antaro/ | Offset gathering/three-knife trimmer, milling/spine preparation and EVA/PO/PUR options; select only EVA softcover. No guaranteed directory job, output rate, thickness, grammage or binding-test threshold adopted. |
| `heidelberg-powder-2010` | `literature` | Heidelberg News270, Small Grains that Have a Big Effect, 2010; https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | Printed/PDF53: powder materials differ. Conditional unmodified starch only; no dose, coating composition, particle distribution or emitted fraction. |
| `epa-method18-2025` | `official_guidance` | EPA Method18, Gaseous Organic Compound Emissions by Gas Chromatography, 1 April2025 copy; https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | PDF1–2 sections1–2; species/calibration method with volatility, condensation and polymerisation limits. Requires actual-matrix validation; no measured release is asserted. |
| `epa-method25a-2017` | `official_guidance` | EPA Method25A, Total Gaseous Organic Concentration Using a Flame Ionization Analyzer, 3 August2017 copy; https://www.epa.gov/sites/default/files/2017-08/documents/method_25a.pdf | PDF1 sections1–2; carbon or calibration-gas equivalent total differs from chemical species mass. No universal response/speciation factor. |
| `epa-gas-ap42-2026` | `official_guidance` | EPA AP42 Section1.4, Natural Gas Combustion, retained October2026 copy; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | PDF1–3 sections1.4.1–1.4.3; ancillary combustion source/species survey only. No boiler factor, standard gas composition, thermal efficiency or print-dryer assumption adopted. |
