---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.general-reference-books-in-print
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# General reference books, in print

## 1. Scope and Applicability

This PCR has one product-category identity for CPC 3.0 32220. The classification includes titles primarily intended for general reference by the public at large: dictionaries, encyclopedias, thesauruses, atlases and books of maps/charts, including serial installments of such titles. Verify publication purpose and readership from the publisher's brief and actual content, independently of binding or a database label. A contact-information directory, a formal-study textbook, an occupation-specific scholarly title, a children's reference book, or a newspaper/journal/periodical does not become this product because its subject is similar. A serial installment of a reference title must retain its identified parent work, volume/part and edition; it is not automatically a periodical. [unsd-cpc3-2025]

The transparent representative technology here is a monochrome dictionary or encyclopedia volume made by conventional wet sheetfed offset on uncoated sheets, folded and gathered into signatures, sewn through their intact spine folds with polyester thread, glued-off/backlined with aqueous PVAc dispersion, trimmed, and cased into a separately made unlaminated paper-covered greyboard case. The case has two boards and a separate spine strip, with cotton mull and creped-paper backlining and paper endpapers. Three independently recorded adhesive uses are spine/backlining, case making and casing-in. This selected subset does not claim that all general-reference titles use this construction. No production quantity, paper grade, glue solids fraction, per-copy mass, durability or opening angle is supplied as a default. [epa-eiip-2002, schmedt-adhesive-guide, schmedt-board, schmedt-machine-thread, mm-ventura]

The dataset is a manufacturing-gate mass reference, accompanied by title/edition, entry/index completeness, pagination and design-specific opening acceptance. It is not a measurement of knowledge, successful lookups or equal reading life. Atlas-specific colour accuracy/cartographic folds, loose-leaf updates, thumb-index cutting, ribbons/headbands, dust jackets, foils, varnish, lamination, coated stock, softcover or adhesive-only binding, animal/hotmelt/PUR glues, digital/web/UV/EB/waterless routes and integrated papermaking are outside this selected technology. Assess any such change within this same CPC identity through a reviewed revision; do not silently apply this route or create a parallel category identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.general-reference-books-in-print |
| classification_refs | CPC 3.0 32220; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | General-public printed dictionaries and encyclopedia volumes, including identified reference-title installments, only with the declared monochrome sheetfed/uncoated/sewn/paper-covered hardcase construction. |
| excluded_products | Contact directories; formal-study textbooks; specialized professional/technical/scholarly or children's titles; daily/non-daily newspapers and periodicals; advertising catalogues; electronic/audio publications; all alternative physical constructions and routes excluded in section 1. |
| representative_product | One edition/volume design of a complete sewn dictionary or encyclopedia with uncoated text/endpapers, printed paper wrap over greyboard, polyester thread, cotton mull, paper backliner and aqueous PVAc adhesives. |
| production_route | File/edition proof and imposition → process-free CTP → black wet sheetfed offset and absorption/oxidative setting → fold/gather/verify → thread sew/nip/glue-off/backline/dry → three-side trim; parallel cut board/print wrap/case make → case-in/press/joint set/dry → quality release → pack. |
| market_state | First-quality-released complete bound volume at manufacturing gate, net of dispatch packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared general-public reference content in a complete printed dictionary or encyclopedia volume with the specified sewn hardcase construction. |
| How much | 1 kg net first-quality-released complete books of one declared edition/volume/design; report accepted copies, page count and measured mass distribution alongside mass. |
| How well | Accepted correct edition, entry/index and page/signature completeness; readable fine text and guide words; declared opacity/show-through, gutter readability, sewing/endpaper/hinge integrity and design-specific opening/handling acceptance. No universal lifetime, lay-flat or pull-strength claim. |
| How long or cycle | One declared manufacturing reporting period and its traceable new production lots at factory gate; reference-use lifetime is outside this mass-based dataset. |
| reference_flow_link | `finished_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | General reference books, in print `faecd451-3d0a-4faf-a9be-c3e940aa1cf5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | general-reference purpose and public readership; title and publisher; edition/language/volume/parent work for installments; page/signature/entry-index completeness; trim size and spine thickness; accepted copies and net mass/moisture; text opacity/grammage/furnish/grain; endpaper/wrap/board/spine-strip grades and dimensions; polyester thread and stitch pattern; mull/backliner; three actual PVAc grades/wet solids/water; conventional black ink and fountain/wash formulations; process-free plate grade and on-press fate; opening/hinge/print acceptance; factory/period/new-lot and rework identifiers; gate/outsourcing; utility providers and conditions; packaging ownership/FG stocks; allocation and uncertainty. |

Declare every required qualifier in dataset metadata, reference-flow notes or equivalent records. The selected native reference identifies manufactured general-public reference books, including dictionaries/encyclopedias and reference-title installments, with Mass/kg. This PCR narrows that product identity to the declared complete sewn paper-covered hardcase volume and all its retained components. An unbound sheet, printed intermediate, postal service or 3D prototype is not the reference. A matching actual construction-specific complete-volume provider is required; a generic printed-matter average is insufficient. This qualified flow does not create a shared PCR identity with any other CPC.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the calibrated measured net mass of complete first-released books at recorded moisture, including all retained components; exclude packaging. Collect using cp_release. |
| `same_basis` | all inventory rows | reference-product Mass | kg | Every final exchange and protocol aggregation uses per 1 kg reference flow. Close physical period/lot ledgers and burden attribution separately before one final division by positive accepted net mass Q; neither incoming paper, printed sheets, shipments nor repeated rework acceptance is Q. |
| `formulation_basis` | wet chemical and glue inputs | supplied preparation Mass | kg | Keep each complete supplied ink/concentrate/wash/glue wet formulation and its provider once. Constituents and water are internal composition evidence, not extra purchased exchanges unless separately supplied. Any component replacement must reconcile a complete recipe and retire the whole-preparation burden. |
| `electricity_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use the native reference property for the selected electricity identity. Convert meter kWh with exactly 3.6 MJ/kWh and match voltage, grid, year and provider basis. |
| `gas_volume` | natural_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Reconcile meter and provider pressure, temperature, wet/dry composition and compressibility before use. The native secondary mass factor does not establish density, pure methane or standard-volume conditions. |
| `heat_service` | purchased_heat | delivered thermal energy | MJ | Determine useful imported heat from compatible supply/return enthalpy and flow; subtract returned carrier enthalpy. Do not equate water circulation with consumed water or add the same provider fuel. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dry unprinted paper/greyboard/backliner/mull/thread, complete process-free plates and supplied formulations received at the manufacturing site; neither a preprinted book block nor a finished purchased case is this starting gate. |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | CPC 3.0 32220 general-public reference books only; selected dictionary/encyclopedia sewn hardcase subset, not the complete leaf. |
| recursive_input_rule | An incoming already printed or bound same-category volume is a separately traced rework/resale transfer, not blank paper. Preserve its prior burden once and do not count it as newly produced reference output. |
| upstream_dataset_requirement | Actual production/delivery of each paper/board/textile/plate/formulation/utility/packaging input and actual outgoing waste treatment, with compatible grade, state, quantity, geography, time and ownership. |
| disclosure | Actual equipment and complete jobs; reporting period; outsourcing and all internal transfers; included/excluded stages; full utility/maintenance/packaging survey; physical and burden ledgers; providers, unresolved identities, sampling/uncertainty and incomplete evidence. Downstream distribution, reference use and book end-of-life are excluded. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_reference_identity` | applicability | Confirm general-public reference purpose and actual edition/volume independently from printed format. A reference-title installment retains its parent identity; contact-information collections and independent periodicals are excluded even with similar subject matter. | `unsd-cpc3-2025` |
| `b_sewn_case` | selected technology | Preserve intact folded signatures for through-fold sewing, with endpapers, nipping/glue-off/backlining and a separately formed two-board/spine-strip/paper-wrap case followed by casing-in. No spine milling, adhesive-only paperback substitution or inferred universal lookup lifetime. | `cps-manufacturing-2018`; `mm-ventura`; `schmedt-board` |
| `b_full_gate` | all datasets | Include proof/imposition/CTP, text and wrap make-ready/printing/setting, folding/gathering/sewing, separate case making, drying/pressing/trimming, release, packing, cleaning and attributable compressor/cooling/extraction/standby. Keep stages and parallel case/block stocks distinguishable inside the aggregate process. | `epa-eiip-2002`; `cps-manufacturing-2018` |
| `b_upstream_once` | supplied exchanges | Include each actual supplier's raw materials, production and delivery once. Paper/board mill pulp recovery, fuel, water and treatment remain in their compatible suppliers. Inks, glues and concentrates use complete supplied preparations; no additional duplicate resin, solvent, pigment or carrier-water production. | `epa-ctg-2006`; `schmedt-adhesive-guide` |
| `b_process_free` | plate route | Exclude a separate developer/rinse processor only when the finished process-free plate and on-press development are demonstrated. Include plate manufacture/coating, imaging, startup paper/ink/water use, coating destination and plate waste; manufacturer avoidance claims are not zero burden for all prepress. | `kodak-sonora-2026` |
| `b_outdoor_boundary` | waste and emissions | Record actual outdoor residual emissions after capture, separately from indoor exposure, collected dust and liquid/cloth waste. Conventional ink absorption/oxidation is not heatset drying; auxiliary gas, imported heat and electric glue drying are separately metered services. Actual extra species/consumables require their own specific exchanges before completeness. | `epa-ctg-2006`; `epa-method18-2025`; `epa-gas-ap42` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `reference_manufacture` | Monochrome offset, sewn paper-covered hardcase general-reference volume manufacture | required | Actual general-reference purpose and all declared construction/route conditions verified | foreground | 1 kg first-released net complete reference books |

This aggregate preserves a stage ledger: edition proof/CTP → print text and wrap → fold/gather/check signature order → sew/nip/glue-off/endpaper/backline/dry → trim book block; in parallel cut panels/spine strip/wrap → cold-glue case make/dry; then case-in/press/joint set/dry → verify/release → pack. Cases and sewn blocks are internal WIP, with matched incoming/outgoing identifiers and quantities; they are not additional final reference outputs. Record actual drying, optional rounding and quality hold time without assuming energy from a machine catalogue.

Each card identifies one exchange: the unique production reference or a separately traced factory receipt, actual dispatch, waste or release. Accompanying dispatch packaging is a physical output without a second functional reference; packaging on closing FG remains stock. Supplier packaging, returnable pallets/containers, tape/labels, press blankets/rollers, filters, lubricants, replacement parts and any refrigerant leak must be surveyed from actual receipts and maintenance records; add a specific atomic row for each occurring item before claiming a complete dataset. Record lease/ownership and useful-life allocation for durable equipment if the study includes it; disclose any infrastructure exclusion. No unobserved item is assigned a default zero or hidden in a generic consumables row.
### Process: Sewn hardcase general-reference book manufacture (`reference_manufacture`)

#### Inputs

##### Product flows

###### Uncoated text paper (`text_stock`)

Dry unprinted woodfree uncoated sheets for dictionary entries and index pages. Record opacity, show-through acceptance, fibre furnish, grammage, moisture, grain direction, sheet format and supplier; thin paper is a measured design choice, never a default weight.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_paper: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paper`
- Sources: `epa-eiip-2002`

###### Uncoated endsheet paper (`endsheet_stock`)

Separate unprinted uncoated paper for front and rear endpapers connecting the sewn block to the case. Record fold/grain, dimensions and stock issues; do not include it again in text-sheet consumption.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_paper: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paper`
- Sources: `schmedt-adhesive-guide`

###### Uncoated case covering paper (`case_wrap`)

One uncoated paper wrap printed in black by the selected sheetfed route, turned over the two boards and spine strip. Record panel, hinge and turn-in geometry and cutting waste; film, varnish, foil and cloth coverings are excluded.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_paper: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paper`
- Sources: `schmedt-board`; `epa-eiip-2002`

###### Solid bookbinding greyboard (`case_board`)

Purchased solid greyboard sheets cut into front and rear panels. Verify actual recycled/virgin furnish, thickness, moisture, panel count, cut plan and rigidity; do not substitute corrugated packing board or the supplier example recipe.

- Selected flow: Solid bookbinding greyboard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-board`

###### Paperboard case spine strip (`spine_strip`)

One separately measured paperboard strip in the case spine. Preserve actual strip grade, width and consumption separately from the two rigid panels and internal book-block backliner.

- Selected flow: Paperboard case spine strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-board`

###### Polyester book-sewing thread (`sewing_thread`)

Uncoated polyester machine-sewing thread through folded signatures. Verify polymer/filament construction and twist, weigh spool depletion minus core and returned thread; length conversion requires the actual measured linear density, not a catalogue coefficient.

- Selected flow: Polyester book-sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-machine-thread`; `mm-ventura`

###### Cotton open-weave book spine mull (`mull`)

Dry cotton open-weave mull reinforces the sewn spine and hinge connection. Record fibre proof, widths, overlaps, roll issues and offcuts; cotton raw fibre and a finished glued composite are different inputs.

- Selected flow: Cotton open-weave book spine mull
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-adhesive-guide`

###### Creped paper book-block backliner (`backliner`)

A separate dry creped paper spine liner over the sewn block, with measured grade, moisture, width and trim. The broad finished creped/crinkled/embossed/perforated paper/board identity applies only to this actual creped-paper grade, not the other forms or an already glued composite. It is distinct from the case spine strip.

- Selected flow: Paper and paperboard, creped, crinkled, embossed or perforated `1000e2c4-0fd1-4139-a6ff-7b0cff8abc05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-adhesive-guide`

###### Aqueous PVAc dispersion spine adhesive (`spine_glue`)

One complete supplied PVAc-based aqueous formulation for gluing-off/endpaper attachment and backlining the sewn block, with separately recorded uses. Verify SKU and suitability on the actual paper; measure supplied wet mass, solids, water, residual monomer and cleanup. No pure-polymer background plus duplicate complete adhesive.

- Selected flow: Aqueous PVAc dispersion spine adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-adhesive-guide`

###### Aqueous PVAc dispersion case-making adhesive (`case_glue`)

One supplied PVAc dispersion applied cold to uncoated covering paper and board by a compatible case maker. Record the distinct SKU and wet issues/returns/retained dry film; heated animal glue, EVA and PUR are outside this selected construction.

- Selected flow: Aqueous PVAc dispersion case-making adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-adhesive-guide`

###### Aqueous PVAc dispersion casing-in adhesive (`casing_glue`)

One compatible supplied aqueous PVAc formulation bonding endpapers/block to case. Record actual application mass, drying/pressing cycle, retained water and rejects; do not import a published solids percentage or drying time.

- Selected flow: Aqueous PVAc dispersion casing-in adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_binding: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `schmedt-adhesive-guide`

###### Finished process-free aluminium offset plate (`plate`)

Finished photosensitive-coated aluminium plate for text and case-wrap formes, CTP-imaged and developed on press. Weigh complete plates by forme, recto/verso and replacement event; bare aluminium is not the plate. Include coating fate and make-ready, without a separate developer bath.

- Selected flow: Finished process-free aluminium offset plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_print: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_print`
- Sources: `kodak-sonora-2026`

###### Conventional black offset paste ink (`black_ink`)

One supplied black oil-based conventional offset paste used for entries, index and case wrap, setting by penetration/oxidation. Broad native identity is conditional on actual SKU, oil/carbon origin and supplier compatibility; its heat-classification/glycol-ester examples are not a recipe or mandatory dryer. Weigh issue/return and stock, including startup and cleaning.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_print: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_print`
- Sources: `epa-ctg-2006`

###### Aqueous buffered offset fountain concentrate (`fountain_concentrate`)

One complete supplied aqueous concentrate SKU for conventional dampening. Obtain full supplier composition including water, buffer, wetting aid, biocide and undisclosed SDS remainder; this single formulation is not a collection of alternative chemicals. Link the whole preparation once; component decomposition may replace it only with a reconciled complete recipe.

- Selected flow: Aqueous buffered offset fountain concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_print: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_print`
- Sources: `epa-ctg-2006`

###### Isopropanol (`ipa_addition`)

Conditional separately purchased isopropanol addition, CAS 67-63-0, only with actual batch/assay and compatible China production mix. Concentrate-carried alcohol is already in the concentrate row. Record active mass and any purchased carrier water once; verified alcohol-free operation may establish absence.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_print: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_print`
- Sources: `epa-ctg-2006`

###### Petroleum-distillate conventional offset blanket wash (`blanket_wash`)

One supplied petroleum-distillate wash formulation, including actual water/emulsifier, used on blanket and rollers. Require current UVCB/CAS, distillation range and speciation; an inkjet cleaner, pure heptane, vegetable ester or waste solvent is not interchangeable.

- Selected flow: Petroleum-distillate conventional offset blanket wash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_print: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_print`
- Sources: `epa-ctg-2006`

###### Starch (`powder`)

Conditional dry uncoated unmodified starch anti-setoff powder. Verify feedstock, grade and particle distribution. Separate powder retained on sheets/books, collected powder and outdoor particulate; purchase mass is not airborne mass.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_print: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_print`
- Sources: `heidelberg-powder-2010`

###### Dry cotton press wiping cloth (`wipe_cloth`)

Conditional actual cotton cloth issued new or returned from laundering, weighed dry separately from retained solvent. Record ownership, reuse returns and laundering burden; do not treat every reissue as new cotton production. Fabric/cloth names are positive physical evidence, while raw-cotton classification/plant commentary remain metadata defects; no raw-fibre cultivation or water-treatment cloth provider substitutes for actual finished wiping fabric.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_print: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_print`
- Sources: `epa-ctg-2006`

###### Alternating current (`electricity`)

Conditional China user-side 1–35 kV grid-average AC identity. Meter prepress, press, compressor, chiller, folding, sewing, case maker, glue drying, pressing, trimming, extraction, packing, setup and standby separately. Match actual voltage, provider, year and geography. Convert kWh to MJ by 3.6 exactly.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_energy: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-eiip-2002`; `mm-ventura`

###### Tap water (`tap_water`)

Separately supplied treated liquid water for dampening dilution and print/glue equipment cleaning, metered by use. Exclude water already inside concentrate, wash and wet glues. Volume-to-mass needs actual compatible density and temperature; supplied tap water is not elementary river abstraction.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_water: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-ctg-2006`; `schmedt-adhesive-guide`

###### natural gas in the gaseous state (`natural_gas`)

Conditional pipeline gaseous natural gas solely for attributable on-site auxiliary heating, not a presumed heatset dryer. Preserve meter/supplier T/P, compressibility, wet/dry composition and volume convention. Source CAS 74-82-8 does not make the gas pure methane; secondary mass coefficient is not density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collect using cp_energy: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-gas-ap42`

###### Purchased heat delivered in hot water (`purchased_heat`)

Conditional imported net thermal service delivered in hot water for actual attributable auxiliary heating, with measured supply/return enthalpy, flow and losses. The broad manufacturing-heat identity leaves source/carrier unspecified; its Net calorific value/MJ reference establishes the native energy dimension, not a temperature, pressure, efficiency or usable-enthalpy default. Require actual hot-water/provider compatibility; this is useful heat, not water consumption, and provider fuel is linked once. It is distinct from electric drying and on-site gas heat.

- Selected flow: Heat for manufacturing `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_energy: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Finished corrugated dispatch carton (`carton_in`)

Conditional complete purchased carton with measured mass, grade and actual fibre recipe, for protecting heavy reference volumes. Record receipt, issue, damaged cartons, returns and boxed finished-goods stocks; a fixed recycled-share box identity is not a universal carton. A carton paid within a bundled supply remains P without a separate invoice. Keep actual first non-purchase components and proven same-item external returns as distinct cp_pack events and add their specific atomic exchanges where present; this purchase card does not silently stand for them.

- Selected flow: Finished corrugated dispatch carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_pack: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

###### Polyethylene film (`film_in`)

Conditional PE dispatch wrap, CAS 9002-88-4, not cover lamination. Verify polymer, additives, thickness, actual mass and supplier. Native baseName/CAS support film but its luggage classification is a retained metadata defect; no PET/PP substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_pack: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

##### Waste flows

No exchange in this group in the selected route; actual additional exchanges require specific identification before completeness.

##### Elementary flows

No exchange in this group in the selected route; actual additional exchanges require specific identification before completeness.

#### Outputs

##### Product flows

###### Complete general-reference volume at first release (`finished_reference`)

The one final quantitative reference: a first-quality-released complete general-reference dictionary or encyclopedia volume in this monochrome, sewn, paper-covered hardcase construction. Net accepted mass includes retained text, endpapers, ink, thread, mull, backliner, case paper/boards/glue/powder and measured moisture; excludes dispatch packaging. The general-reference-book identity supplies neither an actual construction-specific provider nor a universal book mass.

- Selected flow: General reference books, in print `faecd451-3d0a-4faf-a9be-c3e940aa1cf5`
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

###### Finished corrugated dispatch carton (`carton_out`)

Physical packaging actually dispatched with first-release-cohort books, separately from net book mass. Cartons on closing packaged finished goods remain stock, not this dispatch output. Keep opening-FG shipments separate and do not create a second accepted-book denominator or coproduct credit.

- Selected flow: Finished corrugated dispatch carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_pack: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

###### Polyethylene film (`film_out`)

Physical PE wrap retained on dispatched first-release books, recorded separately from offcuts, supply returns and closing wrapped finished goods. This physical output carries no separate product-function allocation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_pack: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

##### Waste flows

###### waste paper (unspecified) (`unprinted_trim`)

One separately collected unprinted text/endsheet/wrap cutting stream at measured moisture, only if combined in the same bin and receiver route. Weigh physically separate bins separately; distinguish reusable blank stock from exported waste.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### waste paper (unspecified) (`printed_trim`)

One collected printed make-ready/rejected-sheet/three-side trim stream, recording actual ink, powder and moisture. Count missing/wrong dictionary signatures as rejects, not accepted pages. Do not count the same paper again in destroyed whole-book waste.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

###### waste paper (unspecified) (`board_trim`)

Separate greyboard/spine-strip cutting waste if the actual receiver accepts this grade. Track panel cutting yield from the job cut plan; do not multiply finished-cover mass by an assumed universal trim percentage.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `schmedt-board`

###### Rejected sewn paper-covered hardcase reference book (`rejected_books`)

The generic industrial-solid-waste locator is restricted to this one actual physically solid whole transfer, including retained constituents/moisture, with a compatible measured receiver route. It establishes no default purity, hazard class, treatment or recovery credit. One whole mixed-material rejected book transfer, with retained thread, glue, ink, board and paper. Record destruction/dismantling and receiver; it is not pure recovered paper by default. Internal repairs/rebinding remain WIP until accepted once or genuinely exported.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Spent coated aluminium offset plate (`spent_plate`)

The generic industrial-solid-waste locator is restricted to this one actual physically solid whole transfer, including retained constituents/moisture, with a compatible measured receiver route. It establishes no default purity, hazard class, treatment or recovery credit. One spent metal-backed plate stream with remaining coating/ink, measured as exported. Record recycler and coating fate; do not report complete plate mass as pure aluminium or claim automatic avoided virgin metal.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `kodak-sonora-2026`

###### Waste ink (`waste_ink`)

One separately segregated conventional offset ink residue stream, weighed net of container tare. Ink remaining in rags, wash or printed rejects is owned by those streams, never added again here.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-ctg-2006`

###### Spent aqueous offset fountain solution (`fountain_waste`)

The generic waste-liquid locator applies only to this one actual whole physically liquid transfer. Measure complete wet mass, compatible density/temperature, water-specific fraction and independent constituents; generic hazardous wording is not the actual legal hazard determination. One whole outgoing fountain-solution liquid with water, additives, IPA and ink contamination as actually present. Weigh/sample before sewer or offsite transfer; treatment is a waste-service background, not direct freshwater emission or paper-mill wastewater.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-ctg-2006`

###### Spent petroleum-distillate offset wash liquid (`wash_waste`)

The generic waste-liquid locator applies only to this one actual whole physically liquid transfer. Measure complete wet mass, compatible density/temperature, water-specific fraction and independent constituents; generic hazardous wording is not the actual legal hazard determination. One collected liquid wash/ink/water mixture with measured retained constituents and receiver. Preserve whole wet mass, actual water fraction and nonaqueous content; non-water mass is not automatically dry solids.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-ctg-2006`

###### PVAc adhesive equipment washwater (`glue_wash`)

The generic waste-liquid locator applies only to this one actual whole physically liquid transfer. Measure complete wet mass, compatible density/temperature, water-specific fraction and independent constituents; generic hazardous wording is not the actual legal hazard determination. One actual liquid glue-equipment cleaning stream with PVAc dispersion solids and actual preservatives/monomer. Record wet mass, water-specific assay, suspended/dissolved constituents and destination separately from fountain and solvent wash.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `schmedt-adhesive-guide`

###### Cured PVAc bookbinding adhesive residue (`solid_glue`)

The generic industrial-solid-waste locator is restricted to this one actual physically solid whole transfer, including retained constituents/moisture, with a compatible measured receiver route. It establishes no default purity, hazard class, treatment or recovery credit. Conditional separately collected solid glue skin/cleanout residue. Record its actual moisture and paper/fabric contamination; liquid rejected dispersion belongs to a separate specific liquid row, not this solid one.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Solvent-contaminated cotton wiping cloth (`rag_waste`)

The generic industrial-solid-waste locator is restricted to this one actual physically solid whole transfer, including retained constituents/moisture, with a compatible measured receiver route. It establishes no default purity, hazard class, treatment or recovery credit. One outgoing cloth stream carrying measured retained ink, solvent and water. Track laundering return versus disposal, sealed storage and evaporation before handover. No default retained solvent factor or duplicate pure-solvent mass transfer.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-ctg-2006`

###### Polyester sewing-thread offcuts (`thread_waste`)

The generic industrial-solid-waste locator is restricted to this one actual physically solid whole transfer, including retained constituents/moisture, with a compatible measured receiver route. It establishes no default purity, hazard class, treatment or recovery credit. Conditional separately collected polyester thread ends and setup rejects. Weigh net of spool cores; include mixed book-bound thread only in whole rejected books, not this row.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `schmedt-machine-thread`

###### Cotton spine-mull offcuts (`mull_waste`)

The generic industrial-solid-waste locator is restricted to this one actual physically solid whole transfer, including retained constituents/moisture, with a compatible measured receiver route. It establishes no default purity, hazard class, treatment or recovery credit. Conditional separate dry mull cutting waste; record glue contamination where present and actual receiver. Glued composite rejected blocks remain in their whole transfer stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Captured book-trimming paper dust (`paper_dust`)

The waste-type Dust identity locates captured material only; general bilingual commentary supplies no cellulose composition, persistence claim or emitted fraction. Measure whole exported dust and actual receiver compatibility. One separately captured cutting-dust stream with actual fibre/ink/board/glue composition and moisture. This sewn route has no milled-away signature spines. Collected dust is not outdoor PM and cannot be counted in both ledgers.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_waste: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### As-generated PE dispatch-film offcuts (`film_waste`)

Conditional separately dispatched PE wrap offcuts/rejects, with actual contamination and receiver. Do not substitute washed recycled pellets or deduct an assumed recovery credit.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_pack: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

###### waste paper (unspecified) (`carton_waste`)

One actual discarded corrugated-carton stream, separately measured from usable returned cartons, raw packaging stocks and cartons on closing finished goods. Include incoming supplier corrugated packaging with documented owner/custodian and receiver obligations, component entry/history and provider coverage, without duplicate purchase production or treating a non-purchase component as burden-free.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_pack: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

##### Elementary flows

###### isopropanol (`ipa_air`)

Conditional CAS 67-63-0 gas reaching outdoor air after control, from actual dampening/wash use and storage. Measure compatible inlet/outlet species concentration and flow across setup, run and cleanup; indoor exposure and material purchase are not release mass.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18-2025`; `epa-ctg-2006`

###### heptane (`heptane_air`)

Conditional specifically identified n-heptane gas, CAS 142-82-5, in actual wash emissions to outdoor air. It is not total petroleum VOC, hexane, or the complete wash mixture; retain analytical recovery and uncharacterised remainder.

- Selected flow: heptane `fe0acd60-3ddc-11dd-a663-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18-2025`

###### 2-n-butoxy-1-ethanol (`butoxy_air`)

Conditional outdoor gaseous 2-butoxyethanol, CAS 111-76-2, only after proving the actual formulation contains it. Validate sampling recovery/volatility in this matrix; no historical fountain recipe or VOC fraction is assigned.

- Selected flow: 2-n-butoxy-1-ethanol `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18-2025`; `epa-ctg-2006`

###### Vinyl acetate to outdoor air (`vinyl_acetate_air`)

Conditional actual residual vinyl acetate monomer, CAS 108-05-4, emitted from the selected PVAc preparations to outdoor air, unspecified subcompartment only where source location detail is unavailable. Require supplier residual-monomer and site species evidence; neither polymer mass nor acetic acid is this emission. Indoor, long-term, stratospheric and location-specific alternatives cannot replace this selected air compartment.

- Selected flow: vinyl acetate `4d9a8790-3ddd-11dd-8dc4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### Water vapour to outdoor air (`water_vapour`)

Actual net water vapour from dampening and dispersion-glue drying after matched ambient correction; include separately proven combustion water if gas operates. Measure humidity/airflow and retain condensate, retained product moisture, liquid transfers and stocks. No all-supplied-water evaporation assumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_water: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### particles (PM2.5) (`pm25`)

Actual outdoor residual particle mass after capture in the disjoint bin diameter at most 2.5 micrometres. Survey cutting, board conversion, powder and any actual burner separately; do not add cumulative PM10/TSP or captured dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `heidelberg-powder-2010`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Actual outdoor residual particle mass after capture in the disjoint bin diameter above 2.5 and at most 10 micrometres. Survey cutting, board conversion, powder and any actual burner separately; do not add cumulative PM10/TSP or captured dust.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `heidelberg-powder-2010`

###### particles (> PM10) (`pmover10`)

Actual outdoor residual particle mass after capture in the disjoint bin diameter above 10 micrometres. Survey cutting, board conversion, powder and any actual burner separately; do not add cumulative PM10/TSP or captured dust.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `heidelberg-powder-2010`

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional actual outdoor gas from attributable on-site natural-gas heating/leakage; species CAS 124-38-9. Establish outlet/measurement and compatible fuel composition; no default factor, pure-methane assumption or offsite electricity/heat-provider emissions. NOx excludes N2O and requires a declared NO2-equivalent basis consistent with the chosen LCIA mapping.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`

###### carbon monoxide (fossil) (`co_fossil`)

Conditional actual outdoor gas from attributable on-site natural-gas heating/leakage; species CAS 630-08-0. Establish outlet/measurement and compatible fuel composition; no default factor, pure-methane assumption or offsite electricity/heat-provider emissions. NOx excludes N2O and requires a declared NO2-equivalent basis consistent with the chosen LCIA mapping.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`

###### methane (fossil) (`methane`)

Conditional actual outdoor gas from attributable on-site natural-gas heating/leakage; species CAS 74-82-8. Establish outlet/measurement and compatible fuel composition; no default factor, pure-methane assumption or offsite electricity/heat-provider emissions. NOx excludes N2O and requires a declared NO2-equivalent basis consistent with the chosen LCIA mapping.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`

###### Nitrogen oxides (`nox`)

Conditional actual outdoor gas from attributable on-site natural-gas heating/leakage; species CAS 11104-93-1. Establish outlet/measurement and compatible fuel composition; no default factor, pure-methane assumption or offsite electricity/heat-provider emissions. NOx excludes N2O and requires a declared NO2-equivalent basis consistent with the chosen LCIA mapping.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`

###### nitrous oxide (`n2o`)

Conditional actual outdoor gas from attributable on-site natural-gas heating/leakage; species CAS 10024-97-2. Establish outlet/measurement and compatible fuel composition; no default factor, pure-methane assumption or offsite electricity/heat-provider emissions. NOx excludes N2O and requires a declared NO2-equivalent basis consistent with the chosen LCIA mapping.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`

###### sulfur dioxide (`so2`)

Conditional actual outdoor gas from attributable on-site natural-gas heating/leakage; species CAS 7446-09-5. Establish outlet/measurement and compatible fuel composition; no default factor, pure-methane assumption or offsite electricity/heat-provider emissions. NOx excludes N2O and requires a declared NO2-equivalent basis consistent with the chosen LCIA mapping.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect using cp_air: this row's reconciled gross physical exchange for the same original cohort divided by that cohort's positive first-release net mass Q, giving the amount per 1 kg reference flow; keep attributed A separate and normalize once only at the end. Conditional absence needs evidence; missing measurement is not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_physical_first` | all accounts | Keep gross physical V independently from attributed environmental-load A and the original supplier/provider vector. V includes all receipts, stocks, WIP, failed runs, rework, cleanup, internal legs and actual waste/releases; never multiply physical book/waste/transfer quantities by an allocation share to force closure. |  |
| `a_causal_subdivision` | shared operations | Avoid allocation using job/stage submetering and subdivision first. Attribute remaining setup/press/sewing/case-making/cleaning/drying/standby by supported causal measurements such as actual runtime, sheet passes/area, stitch cycles or delivered heat; record every eligible job/WIP/failed-job driver in the denominator. Page count, sales value or a convenient mass share is not a default cause. Retain the original provider vector, split it once by the documented shares, and prove the shares sum to one over the entire eligible account. |  |
| `a_cohort` | release and WIP | Keep each lot's original cohort and carried V/A through opening WIP, internal repairs, rebinding, returns and later release. Charge Q=0 failure/startup/cleanup to its causal production cohort or disclose a separately retained unresolved cost account; never drop it, reset its denominator, or divide by zero. A lot may enter Q only on its first genuine quality release. Closing WIP retains its attributable load for later release. |  |
| `a_recycling_packaging` | waste and packaging | No default avoided-production credit for paper/board/plates and no separate product function for transport packaging. Preserve measured waste, provider and receiver obligations once. For owned returnables retain stock/returns and evidenced reuse/life accounting; a return is not fresh manufacture. Document any separately justified co-product/recycling method and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The producer must collect the following records; this PCR supplies no factory measurements. The reporting period covers setup, normal production, quality holds, failed jobs, internal rework, cleaning, shutdown and stock counts. Keep complete gross period V before selecting the first-release cohort C; retain original records from any opening WIP so a cross-period book is not assigned only its final casing-in costs. Each protocol's final aggregation is the same per 1 kg reference flow, after the explicit calculations below; raw measurements remain unnormalized.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `reference_manufacture` | first-released complete reference books and Q | required future foreground record | title; public-reference purpose; edition/language/volume/parent; approved proof; signature/entry/index completeness; lot/cohort; first-release event; accepted copies; individual/lot net mass; measured moisture; opening/hinge/text-opacity acceptance; packing tare; prior release/rework flag | Verify the edition against publisher instructions and approved specimen; inspect signature order, missing/duplicate pages, guide words/index and gutter readability. Weigh complete dry-to-acceptance books on calibrated scales net of dispatch packaging; record moisture. Reconcile first release once against serialized lot records and calibrated copy sampling checked against lot weighing. | kg; copies | each lot and release event; period stock count | declared complete period with opening WIP history and closing holds | actual printing/binding site and declared contractors | per 1 kg reference flow | signed proof/release register; calibration; sample plan and net weighing; rejection/rework history |
| `cp_paper` | `reference_manufacture` | text, endsheet and case-wrap paper separately | required future foreground record | supplier/grade; fibre/recycled fraction; grammage; opacity; dimensions/grain; moisture; received/issued/returned mass; opening/closing blank stock; printed signatures/wraps; stage transfer IDs; make-ready; offcuts | Weigh each paper grade and stage separately. Reconcile imposition and full-sheet area with actual grammage only as a checked secondary estimate; count signatures, recto/verso passes and discarded forms. Preserve moisture and independent transfers of printed wrap versus text. | kg; sheets; m2 | receipt; job setup/run; each stock/transfer event | complete period including failed formes and repeat printing | text and wrap press/folding stores within declared site | per 1 kg reference flow | stock cards/invoices; calibrated scales; imposition/cut plans; opacity and grain specifications |
| `cp_binding` | `reference_manufacture` | board/strip/thread/mull/backliner and each wet glue | required future foreground record | stage/lot; panel and spine-strip cut plan/count/mass; thread polymer/twist/spool/core/return; stitch pattern; mull/backliner grade/roll; three glue SKUs; wet issue/return/stock; solids/water/residual monomer; sewn-block/case WIP; paired transfers; nip/press/dry cycle; rejected/repair books | Weigh distinct components and wet glue formulations. Check thread length only against actual measured linear density, subtract spool cores. Log intact-fold sewing and each glue use separately. Record case and block construction, cold-gluing compatibility, drying/pressing, water retained/evaporated and adhesion/opening tests; reconcile independently made cases with matched blocks. | kg; m; cycles | each lot, component change, glue issue and cleanup; period closure | complete period and carried WIP production history | sewing, backlining, case-making and casing-in including disclosed outsourcing | per 1 kg reference flow | BOM/cut plans; supplier TDS/SDS/full recipe; balances; sewing/hinge acceptance and calibrated weighing |
| `cp_print` | `reference_manufacture` | complete plates, ink, concentrate, separate IPA, wash, powder and cloth | required future foreground record | job/forme/side; replacement plates/coating; black ink SKU; concentrate/wash batch; full composition/CAS/carbon source; wet mass/density/T; stock/issue/return; fountain dilution; IPA separately added; retained ink/powder; rags; startup/reprint/cleaning events | Measure as-supplied quantities for each formulation and separately delivered IPA/water. Retain supplier composition beyond public SDS omissions; audit whole-versus-component provider ownership. Weigh complete plates and trace on-press coating to paper/wash. Record waste/retention/emission links without adopting historic retention factors. | kg; L; plates | each job, formulation and plate change; cleanup; period stocks | complete period including make-ready, zero-output jobs and storage | actual CTP, sheetfed press and cleaning area | per 1 kg reference flow | original issues/returns; weighed plate/chemical stocks; composition assays and current equipment/grade proof |
| `cp_energy` | `reference_manufacture` | electricity, conditional gas and imported heat separately | required future foreground record | device/stage/job/cohort; meter starts/ends; kWh/voltage; grid/provider/year; gas m3/T/P/Z/composition/wet-dry; heat supply/return flow/enthalpy; runtime/drivers; startup/standby/cleanup; bill reconciliation; original provider vector | Submeter all process and shared equipment, including air compression, chillers, ventilation, sewing, cold-glue drying and press/joint heaters. Retain imported-heat provider once; retain actual on-site gas emissions separately. Reconcile raw meters to bills before causal subdivision and A assignment, including Q=0 jobs and closing WIP. | kWh; MJ; m3 | job/cycle or continuous meters; each bill/period closure | representative complete reporting period, not steady-state samples only | manufacturing site and attributed outsourced energy only | per 1 kg reference flow | calibration; bills; provider conditions; complete driver denominator; energy balance and uncertainty |
| `cp_water` | `reference_manufacture` | separately supplied water, internal carrier water and outdoor vapour | required future foreground record | source/grade; use submeter; T/density; dilution/cleaning; formulation water; paper/board/glue moisture; liquid waste water; supply/return/condensate; inlet/outlet humidity/flow/T/P; WIP and product water; fuel hydrogen if applicable | Meter purchased water separately by use. Treat formulation water as contained mass in whole supplies, not another purchase. Sample liquid/product moisture and match humidity/airflow at inlet/outlet; reconcile physical water and any actual reaction-generated combustion water with fuel evidence. A residual is a gap, not known evaporation. | kg; m3 | fills/cleaning/drying campaigns and period closure | all actual production and cleaning modes in declared period | plant boundary plus matched carrier-water accounts | per 1 kg reference flow | water bills/meters; moisture/assay methods; psychrometric basis; calibrated flow/T/P and balance residuals |
| `cp_waste` | `reference_manufacture` | each physically separate waste stream | required future foreground record | stage/lot/bin; stream identity/state; net whole mass; tare; liquid volume/density/T; water-specific fraction; independent solids/nonwater contents; ink/glue/thread/board contamination; internal returns; dispatch/stock; receiver/treatment | Weigh each stream where it exits or enters measured waste stock. Keep unprinted/printed trim, board, whole rejected books, plate, ink, fountain, wash, glue liquids/solids, cloth, thread, mull and captured dust separate when physically separated. Do not split a whole waste mass into fictitious duplicate component transfers. | kg; m3 | collection and handover; period waste-stock counts | complete period with cleanup, failed production and stock changes | plant exit and named waste storage/receiver | per 1 kg reference flow | bin/weighbridge records; receiver acceptance; water/solid assays; treatment contracts and physical balance |
| `cp_pack` | `reference_manufacture` | carton/film receipts, accompanying output, waste, returns and FG stocks | required future foreground record | ownership/provider; receipt/issue/return; carton/film grade/mass; opening/closing raw packaging; packaged FG by original cohort; opening-FG dispatch; first-release dispatch; unpack/repack; scraps; supply packaging; pallet/container/tape/label survey; component/item and event IDs; owner/custodian and original owner-cohort; mutually exclusive P/N_ext/ER entry class; purchase/bundled-price or loan/lease/commission/customer/accompanying-goods evidence; same-item prior outward event and owner-cohort proof for ER; each exchange original V/A/provider/gate/phase/period vector; packing-WIP and reusable stock states; gross dispatch/owner-return/other outward/waste and actual transport; actual wash/repair service | Weigh each material, reconcile receipt/returns and on-book packaging at shipment and closing FG. Separate opening-FG shipments from current first-release output; retain rejected/repacked and closing-FG packaging. Record actual returnable ownership, service/reuse burdens and extra materials as separate atomic exchanges. Classify each component at its first external entry to the traced item/owner-cohort account as purchase P, including a bundled paid component without a separate invoice, or first non-purchase N_ext, including borrowed, leased, commissioned, customer-owned or accompanying-goods components. Use ER only for a genuine external return linked to the same item and original owner-cohort by its prior outward record; internal R and other T transfers are neither first external entry nor ER. Keep unresolved classification/history/provider burdens as explicit gaps, never zero. Reconcile every gross leg and mutually exclusive stock state; preserve original burden vectors and add actual wash/repair/transport increments once. | kg; units | receipt, packing, dispatch, returns and period count | complete period with opening and closing packaged FG and prior outward/item history | factory stores/packing and actual return loop | per 1 kg reference flow | packaging stock/ownership records; dispatch and FG reconciliation; tare weights; reusable-service evidence; purchase/bundled-price and non-purchase agreements; matched item/owner-cohort outward-return chain; provider coverage and actual service/transport records |
| `cp_air` | `reference_manufacture` | each actual outdoor chemical species and disjoint particle bin | required future foreground record | stage/outlet/time; actual formulation/fuel species; CAS; inlet/outlet concentration and flow; T/P/humidity/dry-normal basis; detection limit/recovery; calibration response; particle cut and filterable/condensable definition; control efficiency; species/NOx basis; source/cohort | Survey actual formulations then validate species sampling against the matrix. Measure complete operating, cleaning/storage/drying and any auxiliary-burner cycles; integrate distinct sources after compatible ambient subtraction and capture. Check low-volatility/polymerizing limitations of Method 18; TVOC as carbon is QA only until species composition/response is demonstrated. | kg; mg/m3; m3/time | representative campaigns covering every actual mode and period | complete reporting-period activity with declared extrapolation and uncertainty | actual outdoor air boundary, not indoor exposure or offsite providers | per 1 kg reference flow | accredited/competent sampling report; blanks/calibration/recovery; ventilation closure; detection/uncertainty and source-specific applicability |

### Calculation Rules

The following formulas operate on declared same-state, same-unit accounts. O and C denote opening and closing physical stocks; the cohort symbol is written C_cohort where needed to avoid confusing it with closing stock. V is physical quantity; A is an attributed burden/provider account, never an extra physical mass. Every matching internal leg has the same material state, quantity, moisture basis, unit, lot and transfer identifier at both ends.

For the complete factory V account, accepted books retained on site belong to closing FG; only actual shipments cross external_out. First release Q is the separate production-reference event, not another shipment or a second physical external output. Never add Q to shipments and closing FG. The reference-product card expresses this production quantity; packaging output cards express actual accompanying dispatch, and packaging on closing FG stays in stock. For a shared meter without physical cohort subdivision, retain the whole gross V account; only A is causally split. Do not relabel an A share as measured physical V. Any per-cohort physical quotient requires directly traceable physical records; otherwise disclose that V remains at its complete account scope while the normalized burden uses A/Q.

In the packaging equations, returns from use is one identified internal leg R between packaged-use and raw-packaging accounts, excluded from the other T legs. An external returned receipt belongs only to external receipts, never R as well. Cancel R once at whole-unit consolidation. For each actual component, external receipts = P + N_ext + ER as mutually exclusive events: P is first external purchase into the traced item/owner-cohort account, including components paid within a whole supply price without their own invoice; N_ext is first actual external non-purchase entry through borrowing, lease, commission, customer ownership or accompanying goods; ER requires the same item and original owner-cohort plus a matched prior outward event. Missing history does not establish ER or zero burden. EO denotes gross external owner-return or other outward transfer, excluding accompanying book dispatch and waste. Record all these external legs without netting them against one another. Retain disjoint opening/closing raw packaging, packing WIP, packaging on newly first-released FG, packaging on previously released FG and reusable-store stocks, split by item/owner-cohort; each physical component occupies one state at a time. In-use reusable items outside FG retain their own state account. Neither an internal R/T transfer nor a stock-state change creates a purchase or fresh manufacture. Preserve each exchange's original physical V, attributed A, provider, gate, phase, period and original-cohort Q basis. Later actual service remains on its causally supported original-cohort basis rather than current new-book Q. Link a covered whole-container or component provider once, retain the actual uncovered component/service obligations, and add only actual incremental wash, repair and transport once. No separate invoice, no payment or returnability implies neither zero upstream burden nor invented lifetime, cycles or credit. For gross physical air, retain matched inlet/outlet carrier legs or remove the same unchanged inert carrier on both sides; actual reactive oxygen/nitrogen uptake, reaction products and humidity changes cannot be removed this way. Reconcile them from actual composition and flow, not assumed pure methane or an inferred balance residual.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stage_v` | each stage/material-state stock account | O_s + external_in_s + T_in_s + formation_s = C_s + external_out_s + T_out_s + consumption_s + residual_s. A same-state internal receipt belongs only to T_in_s, never external_in_s or formation_s. For each internal transfer t from s to r, T_out_s,t = T_in_r,t. For conserved whole mass, formation_s = consumption_s = 0 and include actual water/air/reactant masses. For species transformations only, record evidenced paired consumed/formed species through the same reaction event and its stoichiometric mass balance; a receipt is not formation. | cp_paper; cp_binding; cp_print; cp_water; cp_waste; cp_pack; stage stock and transfer records | gross stage V and explicit residuals in the declared physical unit |  |
| `calc_whole_v` | complete reference_manufacture boundary | Sum the stage equations over the complete declared unit: sum(T_in_s) = sum(T_out_s), so O_unit + external_in_unit + formation_unit = C_unit + external_out_unit + consumption_unit + residual_unit. Eliminate internal legs only after exact pair matching; do not add them again as receipts or count them as final books. Keep same-species transformation terms paired; for whole mass they are zero, with all actual reactants/products included. External_out includes actually dispatched books, separately accompanying packaging, rejects, wastes and actual releases, not their sum plus duplicate contained components. Retained accepted books remain closing FG; Q is a separate production-release memorandum and is not added to external_out. | calc_stage_v; cp_release; complete gross period inventory | reconciled unallocated whole-unit V with unmatched legs/residuals disclosed |  |
| `calc_q` | cp_release | Q = sum of calibrated net complete-book mass at each unique lot's first quality release in the selected original cohort; Q must be positive for a normalized result. Count-based Q requires accepted copies times the measured same-design mean net mass, verified against lot weighing/moisture. Repaired/rebound or previously released returned books cannot create a second Q. Q=0 lots retain V and A; opening released FG dispatches are not current first release. | cp_release; release IDs; original cohort; net mass and moisture | Q in kg and complete exclusion/rework register |  |
| `calc_a` | each attributable provider/utility burden vector | Direct measured job subdivision first; for a remaining shared account j, A_j,c = original_provider_vector_j × d_j,c / sum(d_j,k) across every eligible cohort, WIP and Q=0 account k. Record the evidence for causal driver d, keep its full denominator and prove sum(A_j,c) = original_provider_vector_j. Do not rescale gross V by this share. Retain opening WIP's original A, add actual newly attributed load and carry closing WIP A forward; the provider remains the same and is linked once. | cp_energy; job/stage records; original provider vector; all drivers; opening/closing WIP A | disjoint attributed burden A with conserved original provider vector |  |
| `calc_normalize` | all inventory rows | First close gross period V and select original first-release production cohort C_cohort with all carried earlier records, causal failed/startup/cleanup costs and closing-WIP separation. Physical quantity per reference = V_row,C_cohort / Q; burden quantity per reference = A_row,C_cohort / Q, retained as a separate ledger. Divide once after closure/subdivision/allocation; do not divide again at each internal stage or attach the provider to both V and A. If cohort history or Q is unresolved, retain unnormalized evidence and do not issue a completed normalized dataset. | calc_whole_v; calc_q; calc_a; original cohort history; each linked collection protocol | physical and attributed results separately per 1 kg reference flow |  |
| `calc_formulation` | supplied formulations and associated water ledger | Supplied constituent mass = measured supplied formulation mass × evidenced actual constituent mass fraction. Use the complete formulation input/provider once; this calculation checks retention/waste/release and internal carrier water. If replacing it with components, fractions including water and undisclosed remainder must close to the supplied mass and replace, rather than add to, the complete background. | cp_binding; cp_print; cp_water; current complete supplier composition | actual contained-constituent/water checks and provider ownership | epa-ctg-2006 |
| `calc_air_species` | each actual air species | Outdoor species kg = integrated matched outlet flow × species concentration minus compatible integrated incoming species mass, converted on common T/P/humidity and calibrated response/recovery. Sum disjoint outlet/time intervals only; do not replace a species by TVOC carbon or assign an unmeasured residual to a named species. | cp_air; time/flow/species/ambient observations | outdoor species mass before cohort attribution and normalization | epa-method18-2025 |
| `calc_pack_v` | each packaging material and ownership account | For direct raw-to-FG packing: opening raw packaging + external receipts + returns from use + matched internal T_in = closing raw packaging + packaging issued + external returns + raw waste + matched internal T_out; packaging issued + opening packaging on FG = closing packaging on FG + packaging on dispatched books + packing waste + returns from use, with opening/current FG cohorts separate. External receipts = P + N_ext + ER; external returns and other outward transfers belong to EO, excluding book-dispatch packaging and waste. When packing WIP or reusable states occur, apply calc_stage_v to each disjoint state and include all matched transfers instead of forcing those stocks into raw/FG. For each component/item-owner-cohort, the consolidated account is O_all_states + P + N_ext + ER = C_all_states + gross accompanying dispatch + EO + gross waste + disclosed residual. O_all_states and C_all_states include raw, packing WIP, new-FG, old-FG, reusable-store and any separate in-use stocks exactly once. Cancel paired internal/reuse legs at whole-unit boundary, retaining R separately from other T. Split extra ownership/receiver transfers explicitly; no manufactured receipt or default reuse credit. Keep gross transport and actual incremental wash/repair services separately, with each original provider vector covered once and unresolved obligations retained. | cp_pack; cp_release; shipment/FG/ownership records | complete physical packaging balance and correct current-cohort accompanying output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference` | finished_reference | Verify public-reference purpose, title/edition/parent installment and actual content; verify signature/index completeness and fine-print/gutter/opening/hinge acceptance with the actual sewn hardcase sample. Mass alone is not functional equivalence. | publisher brief; approved proof; complete specimen/BOM; release/acceptance records |
| `dq_identity` | each exchange | Verify native type, full name/route/form/CAS/media, reference property→unitgroup→unit, actual provider grade/state/quantity and Chinese official display. Historical records do not prove current database status; missing auxiliary identity is a local gap, while an incompatible reference or primary formation route requires explicit review. | original native records and reading dates; property/unit records; supplier/receiver specification; documented unresolved/rejected candidates |
| `dq_ledgers` | V, A, Q and stocks | Close each stage and whole-unit account with explicit matched T_in/T_out, original cohort continuity, water/solid/organic-carbon checks, complete Q=0 and cleanup/energy records and independent provider-vector conservation. Derive tolerances from measurement uncertainty; no default balance allowance or loss. Check component-level P/N_ext/ER exclusivity, same-item/owner-cohort prior outward proof for ER, disjoint raw/WIP/new-FG/old-FG/reusable stocks and gross dispatch/EO/waste/transport; verify provider coverage and actual wash/repair increments once. | original weigh/meter/transfer records; lot/WIP/FG histories; uncertainty and residual register; provider/driver reconciliation; component entry and outward-return evidence; service/transport records |
| `dq_coverage` | all actual site operations | Survey extra supplies, supplier packaging, pallet/tape/labels, press maintenance/lubricant/filter/refrigerant, wastes and species; add separate atomic rows where present. Missing values are gaps, measured absence is evidence, and a successful identity match is not a measured amount. | full receipt/equipment/SDS/maintenance survey; sampling and provider evidence; gap/absence register |
| `dq_sources` | evidence reuse | Keep the source's edition, product, route and page limits. CPC notes classify purpose only; supplier options and old single-factory descriptions supply neither actual job proof nor quantities. No recipe, release fraction, machine capacity, service lifetime or emission factor is adopted as a default. | primary locators and applicability assessment; actual job/supplier documents; disclosed source acquisition limits |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_applicability` | reference identity | Confirm only the general-reference leaf, public readership and declared dictionary/encyclopedia construction. Exclude contact directories and periodicals independently of matching theme. Verify the manufactured complete general-reference-book identity, edition/part and all physical qualifiers; unbound intermediates and generic printing-service/printed-matter providers cannot substitute for the declared complete volume. | `unsd-cpc3-2025` |
| `v_construction` | material/process evidence | Match signature count/order and thread through intact folds, endpapers, board/strip/wrap geometry, separate case/block WIP, mull/backliner and all three cold dispersion-glue uses to actual records. An adhesive-only paperback, milled spine, colour/atlas variant or premade case cannot silently satisfy this method. | `cps-manufacturing-2018`; `schmedt-adhesive-guide`; `schmedt-machine-thread` |
| `v_v_a_q` | inventories and normalization | Execute calc_stage_v and calc_whole_v with same-state paired internal legs; execute separate calc_a and calc_q. Reject duplicated provider vectors, repeated Q from rework/returns, dropped Q=0 jobs/cleanup, omitted closing WIP/FG or unmatched opening costs. Require cp_pack and calc_pack_v component entry classes, same-item original owner-cohort outward-return proof and complete gross legs/stocks; reject netted external returns, free-as-zero burdens, duplicated container/component providers or invented reuse cycles/credits. Normalize once only after these ledgers close; unresolved history/basis is incomplete data, not a passing quantitative dataset. |  |
| `v_water_chemicals` | all preparations and water | Reconcile supplied wet glues/ink/fountain/wash, retained dry matter/water, cleanup waste, outdoor vapour and stocks. Whole preparation plus components/carrier-water burdens cannot coexist. Use actual density/assay and no assumed generic glue solids or all-water evaporation. | `epa-ctg-2006`; `schmedt-adhesive-guide` |
| `v_emissions` | outdoor air and waste | Resolve each actual organic species/medium and disjoint PM bin after control; collected dust and waste liquid are not elementary air/water emissions. Keep carbon origin and any combustion-water/reaction evidence; NOx-equivalent basis and N2O are separate. Gas/heat/electricity backgrounds and on-site combustion must not duplicate each other. Add actual unlisted species before completeness. | `epa-method18-2025`; `epa-gas-ap42` |
| `v_readiness` | completed foreground dataset | Report performed/skipped checks, missing identities/providers/measurements, sampling limits, residuals and scientific/translation review state. Structural/finite checks establish declared consistency only, not independent methodology approval, database currency, actual measured completeness or publication readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input of the same declared complete general-reference volume at manufacturing gate after actual foreground data and provider review. |
| allowed_use | One verified edition/volume of the selected monochrome uncoated sheetfed, through-fold sewn, paper-covered hardcase dictionary/encyclopedia construction, with complete original-cohort records and compatible providers. |
| excluded_use | Whole-leaf technology average; directory/periodical/textbook/professional/children's title substitution; colour atlas or excluded finishing/binding route; equivalent lifetime/knowledge/lookups claim; publication-ready quantitative dataset inferred from UUIDs, supplier options or check success. |
| required_metadata | All reference qualifiers; actual gate/stage/job history; site/geography/period; supplier grades/recipes/units; native-record evidence dates; original V/A/provider vector/Q/cohort; WIP/FG/packaging ownership; actual allocation and receiver methods. |
| required_quality_disclosure | Measured versus required/unmeasured fields; identity/provider/reaction/species gaps; source limits; unreviewed scope; uncertainty/residuals; performed/skipped tests; scientific and bilingual review status. |
| update_trigger | Changed title purpose, edition/design, signature/board/glue/ink/fount/wash construction, print/drying/binding/finish route, provider/utility conditions, release/cohort practice, stocks, treatment or evidence. Revisions of this CPC retain the same PCR identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | PDF/printed pp.148–150: general-reference purpose/public readership, examples/installments and neighbouring content/periodical exclusions only. No production quantities or route prescribed. |
| `epa-eiip-2002` | `official_guidance` | EPA EIIP Volume II Chapter 15, Preferred and Alternative Methods for Estimating Air Emissions from Printing, Packaging and Graphic Arts, May 2002; https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | PDF14–15, §2.1.1 and Figure15.2-1: sheetfed books, wet offset and penetration/oxidation; qualitative process/record context only, no historic factors or emission shares. |
| `epa-ctg-2006` | `official_guidance` | EPA-453/R-06-002, Control Techniques Guidelines for Offset Lithographic Printing and Letterpress Printing, September 2006; https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | PDF12–15/printed6–9, §IV.A and source overview: separate ink/fountain/wash formulations and emissions; historical recipes, retention/regulatory factors are not adopted. |
| `kodak-sonora-2026` | `literature` | Kodak SONORA Process Free Plates Sustainability datasheet, 2026 retained edition, K-1020.26.07.13.EN.03; https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | PDF1: absence of separate plate processor chemicals/rinse for the declared grade; manufacturer marketing comparison does not remove plate/coating/on-press burdens or prove the actual site's grade. |
| `cps-manufacturing-2018` | `handbook` | Thomson Reuters Core Publishing Solutions, Guide to Book Manufacturing, July 2018, bindery pp.8-3–8-6 and glossary11-20–11-21; https://cdn2.hubspot.net/hubfs/213379/docs/Compact-CPS-BMWGuide-July2018-Ed.pdf | PDF53–56,94–95: separate case making, block binding and casing-in; through-fold sewing/cold glue and endpapers. Historical first-party process text only; no diagram/numeric reuse or proof of the actual site's configured route. |
| `mm-ventura` | `literature` | Müller Martini, Florjančič Tisk hardcover production case study, retained 2026 web edition; https://mullermartini.com/en/producttyp/hardcover-production/ | “Wide range of print runs”/printing-room paragraphs: sheetfed offset, folding, thread sewing and hardcover line coexist as real route options. Not proof of this reference-book job, exact glue/materials, factory configuration or amounts; digital foil/UV options are excluded. |
| `schmedt-board` | `literature` | Schmedt, Cardboard for bookbinding; https://www.schmedt.com/material/cardboard/ | Introductory physical construction: front/rear boards, spine and covering sheet form a hardcover; greyboard differs from cover material. No thickness, furnish or recycled-content default. |
| `schmedt-machine-thread` | `literature` | Schmedt, Product information – machine sewing thread, December 2015; https://www.schmedt.de/ww2000/pdf/e-pi_machine_sewing_threads.pdf | PDF1: polyester versus cotton/mixed threads, spool/core and linear-density conventions; no example thread weight, coating, length factor or required SKU adopted. |
| `schmedt-adhesive-guide` | `literature` | Schmedt, Guide: Adhesives for bookbinding; https://www.schmedt.com/guides-tutorials/adhesive-glue-guide/ | “Dispersion glue”, “Backlining”, “Spine-binding”, machine case-making and casing-in sections: aqueous dispersion options, drying/pressing and application distinctions. PVAc grade and substrate suitability require actual supplier proof; not a universal recipe or quantity. |
| `heidelberg-powder-2010` | `literature` | Heidelberg News270, “Small Grains that Have a Big Effect”, 2010; https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | PDF/printed53: actual starch versus other/coated anti-setoff powders; product-specific powder survey only, no application rate, size distribution or emitted fraction imported. |
| `epa-method18-2025` | `official_guidance` | EPA Method18, Measurement of Gaseous Organic Compound Emissions by Gas Chromatography, 1 April2025 web copy; https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | PDF1–2, §§1,2,4: species calibration, humidity and volatility/polymerization limitations. Internet copy directs readers to the official regulation; matrix validation remains necessary and no measured emission is claimed. |
| `epa-gas-ap42` | `official_guidance` | EPA AP42 §1.4 Natural Gas Combustion, retained October2026 corrected copy; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | PDF1–3, §§1.4.1–1.4.3: auxiliary combustion/fuel composition and equipment-dependent species only. No factor, efficiency, average heating value, sulphur content or complete oxidation assumed. |
