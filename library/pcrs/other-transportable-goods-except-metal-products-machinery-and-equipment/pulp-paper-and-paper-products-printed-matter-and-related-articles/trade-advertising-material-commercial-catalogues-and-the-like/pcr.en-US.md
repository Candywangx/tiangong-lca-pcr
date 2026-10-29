---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.trade-advertising-material-commercial-catalogues-and-the-like
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Trade advertising material and commercial catalogues: sheetfed offset, wire saddle-stitched product catalogue

## 1. Scope and Applicability

This PCR covers one narrower physical subset: complete paper commercial product catalogues commissioned to promote a seller's goods and support purchasing, with uncoated body sheets, a flexible uncoated unlaminated paper cover, conventional CMYK wet sheetfed offset absorption/oxidative setting, process-free CTP plates, folding/gathering, round zinc-coated carbon-steel wire saddle stitching and three-side trimming. Delivery is accepted stock at the printer gate, packed for a declared subsequent commercial distribution purpose. Catalogue copies contain product descriptions/images and a purchasing/contact route; the job brief, actual contents and intended audience/distribution evidence establish commercial purpose. The title or binding alone cannot establish classification.

UN CPC3.0 code32620 and parent3262 identify trade advertising material/commercial catalogues; the official code page and explanatory-notes p152 state no frequency, paper, binding, page-count or manufacturing requirement. This PCR's construction is an explicit technical selection, not a claim about the whole leaf. Adjacent notes distinguish systematically organized contact directories, general books and newspapers/periodicals with their own frequency rules (pp148–150). A regularly reissued price catalogue is not automatically a periodical, nor is a business directory automatically commercial advertising; ambiguous mixed-content editions need classification review. No HS-derived definition is asserted. [unsd-cpc3]

Exclude ordinary contact directories, textbooks/reference/general books, music, editorial newspapers/journals, loose flyers/posters, self-cover or hard-case constructions, sewn/spiral/perfect/PUR/EVA binding, digital/waterless/gravure/flexographic/web heatset/coldset/radiation-cured printing, lamination/foil/varnish/inserts, non-paper substrates and integrated papermaking. Creative/publishing/printing services sold without this physical product, online advertising, postal distribution, consumer use/end-of-life and advertising reach/sales conversion are not reference outputs. Outbound freight after printer-gate handover is outside this gate and must be separately modelled when a downstream study requires it.

Primary records establish feasible sheetfed printing, saddle stitching, complete wire and process-free plate technologies, not one actual producer's combined equipment, formulation or measurements. The printer and machine sources offer alternative routes; the PGM catalogue capability is heatset/web and is counterevidence to any claim that all catalogues follow this method. All non-reference quantities are future foreground collection obligations. There is no default recipe, performance life, scrap yield, stitch count, mass per copy or emission factor. [breese-sheetfed, demago-catalogues, mm-primera, bekaert-stitching-wire, kodak-process-free, pgm-counterexample]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.trade-advertising-material-commercial-catalogues-and-the-like |
| classification_refs | CPC 3.0 32620; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Seller's commercial product catalogue meeting the declared paper, conventional sheetfed and round-wire saddle-stitch construction and verified goods-promotion/ordering purpose. |
| excluded_products | Ordinary directories/books/editorial periodicals; loose/folded advertising sheets; alternative substrates, printing/cure, binding and finishing; online/publishing/advertising/distribution services. |
| representative_product | Complete uncoated-body, separate flexible uncoated-cover catalogue, CMYK wet sheetfed offset and round zinc-coated carbon-steel wire saddle stitch, trimmed and quality released. |
| production_route | Prepress/CTP → make-ready/wet sheetfed print/setting → fold/gather/cover-feed → wire-form/stitch/trim → inspect/pack/printer-gate handover. |
| market_state | Accepted complete physical catalogue at printer gate; shipping components and gross dispatch/returns recorded separately from net reference mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared seller's product-promotion and ordering content as an accepted complete physical catalogue. |
| How much | 1 kg net accepted complete catalogues of one declared design and first-release cohort; report copies/pages alongside measured mass. |
| How well | Actual agreed print legibility/colour specification, page completeness/order, fold/trim dimensions, staple integrity/position and safe handling acceptance; no universal functional equivalence across designs. |
| How long or cycle | One manufacturing lot at printer gate; actual edition/campaign dates are qualifiers, not a quantified advertising-effect lifetime. |
| reference_flow_link | `catalogue` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Trade advertising material, commercial catalogues and the like `65e0a956-9e06-4fc3-8d4d-720826b93fd1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | seller/design and edition; actual contents and commercial promotion/ordering purpose; intended audience and distribution handover; first-release cohort and net accepted mass; copies/pages and trim dimensions; body/cover grade/furnish/grammage/moisture; complete CMYK ink SKU/setting/carbon origin; process-free plate construction/coating; actual fount/wash composition and delivered dilution state; round wire steel/coating/diameter and staple acceptance; absence of glue/thread and excluded finishing; actual site/equipment/period; utility voltage/grid and heat/fuel survey; supplier/treatment ownership; component acquisition/return history; allocation and uncertainty |

Net mass contains all retained body/cover paper, ink, coating transferred from plates, powder, wire and zinc at measured moisture. Shipping packaging is excluded. UUID identity supplies no factory recipe or quantitative background. Record every qualifier in dataset metadata, reference-flow description or equivalent evidence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net complete-catalogue mass after first quality release, including retained staples/ink/powder and excluding shipping packaging; collect using cp_release. |
| `cohort_basis` | all inventory rows | compatible cohort exchange property | kg; MJ | Final basis is per 1 kg reference flow. Qc is unique new-lot first-release net kg including newly accepted closing FG once; an old cohort uses its original Qc. No monthly sales/input-paper/dispatch-only denominator. |
| `formulation_unit` | chemical rows | supplied formulation Mass | kg | Preserve whole-formulation versus component/dilution state and actual measured density, assay and carbon origin. Analytical components cannot duplicate a whole-formulation provider. |
| `energy_unit` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert actual kWh to MJ by3.6; retain meter voltage/geography/year/provider basis. Electricity is not purchased heat or steam enthalpy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unprinted dry paper, finished coated process-free plates, complete supplied formulations and coated stitching wire received at printer gate. |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | Only the declared physical commercial product-catalogue subset of32620; no all-leaf or all-process coverage. |
| recursive_input_rule | Purchased already printed catalogues are not virgin paper or new production; retain origin/cohort/inherited exchange vector and original reference basis. Same-item return/rework cannot generate another first-release output. |
| upstream_dataset_requirement | Compatible actual paper manufacture, plate/coating, whole ink/fount/wash/wire, utility supply, packaging acquisition and waste treatment backgrounds once, matching delivered state, quantity and ownership. |
| disclosure | Design/site/period; gate and actual commercial handover; stages/outsourcing; excluded routes and site heat/fuel survey; physicalV, burdenA and stock ownership; unresolved identity/provider/quantity and scope. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | catalogue manufacture | Include prepress/CTP, make-ready, body/cover wet sheetfed printing and setting, folding/gathering, cover feeding, wire forming/stitching, trimming, inspection, packing and attributable cooling/compressed-air/collection/cleanup/standby. Supplier technology existence does not establish this site's configuration or quantities. | `epa-eiip-2002`; `epa-ctg-2006`; `mm-primera`; `breese-sheetfed` |
| `b_content` | applicability | Verify seller goods-promotion/ordering contents, commission and intended distribution independently of title/binding. Exclude services, books/directories/editorial periodicals and incompatible constructions. No publication-frequency threshold is imposed on32620 by this method. | `unsd-cpc3`; `demago-catalogues` |
| `b_utilities` | bounded electric foreground | This selected configuration uses electrically driven stages and electric ancillary service, without onsite combustion, purchased steam/heat or thermal ink dryer. Actual site survey must demonstrate this scope; missing evidence is a gap, not zero. If fuel/heat/refrigerant loss or another excluded operation occurs, retain its quantities and require a separately assessed atomic extension before claiming dataset completeness. | `epa-ctg-2006`; `breese-sheetfed` |
| `b_heat_guard` | any proposed heat extension | Meter supply and return mass independently and use separate incoming/outgoing enthalpy streams at actual pressure/temperature/quality/reference state; reconcile actual leak/blowdown/condensate/storage-energy terms. Use mass×(supply enthalpy−return enthalpy) only after proving matched mass at the same boundary. Do not invent an efficiency or equate electrical MJ with delivered steam heat. This guard does not approve an unassessed heat route. | `ilcd-2010` |
| `b_stage` | stage and stock accounts | For each material/state and stage, retain S0 + external receipts + internal_in + actual transformation formation = S1 + external outward legs + internal_out + actual transformation consumption. Record every loss/emission and documented species transformation; formation/consumption are real conversion terms, not same-state stock transfers. Internal_out and the receiving internal_in must match identity/state/cohort/quantity and cancel on consolidation. Component assay ledgers are nested under whole products, never added as extra mass. | `epa-eiip-2002`; `ilcd-2010` |
| `b_cohort` | first release and subsequent handling | Preserve raw/WIP/new FG/old FG/reusable stocks as mutually exclusive locations. Qc records each new physical item only on its first quality release; include new closing FG once. Opening FG, old accepted stock, true same-item external returns, rework, repacking or later service do not create Q. Preserve each inherited exchange vector with owner/cohort and original Qc; add only actual later services on that original basis or an explicitly reviewed service reference. Keep Q=0/idle/cleanup/failed-lot burdens pending assignment; never divide them by current new Q merely because the reporting month matches. | `ilcd-2010` |
| `b_packaging` | each packaging component | Record first external purchased P even if its cost is included in a whole consignment without a separate invoice; first genuinely non-purchased borrowed/leased/entrusted/supplied-with-goods N_ext; ER only with proof of the same item and its preceding outward leg. Preserve owner/cohort/inherited vector and raw/WIP/attached-FG/reusable stock location without overlap. Keep gross dispatch, owner-return, waste and all actual transport legs separately, never netted. A zero price is not zero burden; whole-container and component providers each have one owner, not both. | `ilcd-2010` |
| `b_backgrounds` | upstream and wastes | Link input production/delivery and outgoing receiver treatment once; whole formulated ink/fount/wash/coated wire/complete packaging already containing components excludes duplicate component production. Direct outdoor species are post-control site exchanges; transferred wastewater is a treatment handover, captured dust is waste and ambient intake is not a new process emission. | `epa-ctg-2006`; `ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `catalogue_manufacture` | Commercial product catalogue, wet sheetfed and wire saddle stitch | required | Verified commercial purpose and declared complete construction/electric site scope | foreground | 1 kg accepted net complete catalogue |

Physical stages: prepress/CTP → body/cover print and setting → fold/gather/cover-feed → wire-form/stitch/trim → release → pack/gross dispatch. Preserve stage-specific material states, coat/ink/water transformations, meters and internal links under b_stage. There is only one final reference output. Outward shipping components do not enlarge Q.

Cards are one atomic physical material/stream each; repeated broad UUIDs do not merge distinct roles or owners. Quantities below describe the compatible cohort inventory after cp_cohorts attribution, with unallocated physicalV retained separately from burdenA and stock carry-forward. Unknown occurrence is not zero. Survey actual maintenance parts/blankets/lubricants, consumable spools/cores, incoming supply packaging, treatment chemicals, additional fount/wash constituents, refrigerants and any other species; each actual extra exchange needs a specific atomic row, unit/provider/quantity and scope review before a dataset can be called complete. No invented replacement life or generic mixed card fills those gaps.

### Process: Commercial catalogue manufacture (`catalogue_manufacture`)

#### Inputs

##### Product flows

###### Uncoated printing, writing and packaging paper (`body_paper`)

Purchased unprinted dry uncoated body sheets. Record actual furnish, recycled content, grammage, moisture, dimensions, grain and supplier; broad identity is not a paper-mill recipe. Account for make-ready and trimming separately.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_materials and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`

###### Uncoated printing, writing and packaging paper (`cover_paper`)

Separate flexible uncoated paper cover stock; weigh separately from body paper even when its UUID is shared. No board case, film, varnish or preprinted cover is included. Verify actual cover strength and fold/creasing acceptance.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_materials and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `demago-catalogues`

###### Finished process-free photosensitive aluminium offset printing plate (`plate`)

Complete supplied coated CTP plate, not a cut/grained/anodized substrate. Record coating chemistry, whole plate mass/count, plate imaging, on-press coating fate and make-ready losses. No separate developer/plate processor is used; this does not eliminate plate production or press wastes.

- Selected flow: Finished process-free photosensitive aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_materials and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `kodak-process-free`

###### Solvent-based planographic printing ink (`ink_black`)

One complete as-supplied black conventional oil-based paste formulation. Require compatible non-radiation sheetfed setting, actual SKU, full ingredient/solvent and fossil/biogenic carbon records. The native generic offset synonyms support identity; its glycol-ester examples and heat-based classification do not prescribe a recipe or a heatset dryer. Record this colour separately; supplier ink production once, with constituent assays as analytical subledgers only.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_formulations and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `huber-sheetfed-ink`

###### Solvent-based planographic printing ink (`ink_cyan`)

One complete as-supplied cyan conventional oil-based paste formulation. Require compatible non-radiation sheetfed setting, actual SKU, full ingredient/solvent and fossil/biogenic carbon records. The native generic offset synonyms support identity; its glycol-ester examples and heat-based classification do not prescribe a recipe or a heatset dryer. Record this colour separately; supplier ink production once, with constituent assays as analytical subledgers only.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_formulations and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `huber-sheetfed-ink`

###### Solvent-based planographic printing ink (`ink_magenta`)

One complete as-supplied magenta conventional oil-based paste formulation. Require compatible non-radiation sheetfed setting, actual SKU, full ingredient/solvent and fossil/biogenic carbon records. The native generic offset synonyms support identity; its glycol-ester examples and heat-based classification do not prescribe a recipe or a heatset dryer. Record this colour separately; supplier ink production once, with constituent assays as analytical subledgers only.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_formulations and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `huber-sheetfed-ink`

###### Solvent-based planographic printing ink (`ink_yellow`)

One complete as-supplied yellow conventional oil-based paste formulation. Require compatible non-radiation sheetfed setting, actual SKU, full ingredient/solvent and fossil/biogenic carbon records. The native generic offset synonyms support identity; its glycol-ester examples and heat-based classification do not prescribe a recipe or a heatset dryer. Record this colour separately; supplier ink production once, with constituent assays as analytical subledgers only.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_formulations and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`; `huber-sheetfed-ink`

###### Round zinc-coated carbon-steel stitching wire (`stitch_wire`)

One finished wire on a spool, formed/cut/clinched into saddle staples at the fold. Record steel grade, round cross-section, actual diameter, zinc/coating mass, supply route, spool tare, retained staples and cut/mis-stitch scrap. Manufacturer capability proves a technique, not actual site wire dimensions or dose. No separate steel/zinc backgrounds if a complete coated-wire background owns them.

- Selected flow: Round zinc-coated carbon-steel stitching wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_stitch and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stitch`
- Sources: `bekaert-stitching-wire`; `mm-primera`; `demago-catalogues`

###### Aqueous offset fountain-solution concentrate (`fount_concentrate`)

One purchased complete aqueous concentrate SKU, before site dilution. Weigh the supplied formulation, obtain complete composition including non-SDS fractions, carrier water, active content and density at measured conditions. Do not add its component production or carried water a second time. The generic regular fountain-solution record does not establish concentrate-versus-ready-use provider basis.

- Selected flow: Aqueous offset fountain-solution concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_formulations and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Isopropanol added separately to fountain circuit (`ipa_addition`)

Conditional separately supplied isopropanol CAS67-63-0, with actual purity/carrier mass and provider scope. Count only addition not already in concentrate. A candidate restricted to optical assembly is not adopted. Alcohol-free operation needs documented absence; no required positive amount or zero default.

- Selected flow: Isopropanol added separately to fountain circuit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_formulations and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Petroleum-distillate conventional offset blanket-wash formulation (`wash`)

One complete supplied blanket/roller wash formulation; require actual UVCB/CAS, distillation range, constituents, carrier water, carbon origins and non-heatset compatibility. Not coal-tar wash oil or printhead cleaner. Track organic constituents through retention, liquid/cloth waste and ventilation; alternative ester chemistry requires separate identity/route assessment.

- Selected flow: Petroleum-distillate conventional offset blanket-wash formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_formulations and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-ctg-2006`

###### Cotton fabric (`cloth`)

Conditional actual dry cotton wiping cloth. Native fabric/cloth synonyms identify textile; the raw-cotton classification and crop comment remain source-quality debts. Require finished-cloth supplier/background, not raw fibre cultivation alone. New acquisition, same-item laundry return and contamination are separately tracked; no generic replacement life.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_materials and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-ctg-2006`

###### Starch (`powder`)

Conditional unmodified starch anti-setoff powder, without an assumed hydrophobic coating. Require actual grade/feedstock and applied, retained, captured and airborne quantities. Coated or mixed powder requires its own formulation/components; published grain sizes or humidity tips are not default LCI values.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_materials and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `heidelberg-powder`

###### Tap water (`water`)

Separately supplied treated municipal water for fountain dilution and washing, with distinct meters. Exclude water in concentrate/wash from this purchase row, but include it once in the water subledger. Measured density and temperature support volume-to-mass conversion; native secondary volume coefficient is not a universal density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_water and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-ctg-2006`

###### Alternating current (`electricity`)

Customer-side China (CN) grid-average AC at1–35 kV only when actual supply matches; the native geography is CN, not a global grid. Meter prepress, CTP, make-ready/press, cooling/compressed air, folding, stitching, trimming, dust extraction, packing and attributable standby/cleanup. Preserve actual grid/geography/year/loss ownership. Native reference property is Net calorific value/MJ, not thermal steam enthalpy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_energy and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-eiip-2002`; `mm-primera`

###### Finished corrugated shipping carton (`carton_in`)

Actual complete transport carton; require grade, complete mass and actual virgin/recycled furnish. A database box fixing16.6% primary/83.4% recycled fibre is not adopted for an unknown carton. Apply cp_packaging P/N_ext/ER classes and preserve all physical legs; supplier manufacture once.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_packaging and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-2010`

###### Polyethylene film (`film_in`)

One PE dispatch film component, CAS9002-88-4; not catalogue lamination. Native name/CAS and film description support identity while source luggage classification remains a metadata debt. Obtain actual polymer/additives/grade/thickness and mass. Apply component ownership and gross transport records; do not replace with PET or a film-conversion service.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_packaging and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`pallet_in`)

Only one actual finished wooden pallet from this broader native family. Record complete pallet mass, construction, treatment, fasteners, owner and acquisition/cohort history. This is not a loose slat or photovoltaic-installation-specific pallet. First purchase, genuine first non-purchase entry and same-item return are distinct; whole pallet and its components cannot both own manufacture.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_packaging and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-2010`

##### Waste flows

No exchange in this group for the selected construction; site survey must verify absence.

##### Elementary flows

No exchange in this group for the selected construction; site survey must verify absence.

#### Outputs

##### Product flows

###### Trade advertising material, commercial catalogues and the like (`catalogue`)

Only the accepted complete commercial product catalogue specified here: paper body/cover, retained ink/powder and round coated-steel staples, excluding shipping packaging. Weigh after trim, legibility/page-order and binding acceptance. Count unique new items only on first quality release, including new accepted closing FG once. Broad native commercial identity provides neither per-copy mass nor a supplier manufacturing average.

- Selected flow: Trade advertising material, commercial catalogues and the like `65e0a956-9e06-4fc3-8d4d-720826b93fd1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `unsd-cpc3`; `demago-catalogues`

###### Finished corrugated shipping carton (`carton_out`)

Only the actual carton crossing outward as a packaging component. Keep gross dispatch, true owner-return and transfers to another cohort as separate transaction legs, with original owner/cohort/inherited vector. The compatible total is never netted against returns, and is not a second manufactured reference product. Physical outward mass does not automatically create avoided-production credit. Retain every actual transport leg.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_packaging and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-2010`

###### Polyethylene film (`film_out`)

Only the actual PE film crossing outward as a packaging component. Keep gross dispatch, true owner-return and transfers to another cohort as separate transaction legs, with original owner/cohort/inherited vector. The compatible total is never netted against returns, and is not a second manufactured reference product. Physical outward mass does not automatically create avoided-production credit. Retain every actual transport leg.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_packaging and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`pallet_out`)

Only the actual wooden pallet crossing outward as a packaging component. Keep gross dispatch, true owner-return and transfers to another cohort as separate transaction legs, with original owner/cohort/inherited vector. The compatible total is never netted against returns, and is not a second manufactured reference product. Physical outward mass does not automatically create avoided-production credit. Retain every actual transport leg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_packaging and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-2010`

##### Waste flows

###### waste paper (unspecified) (`paper_trim`)

One separately collected unbound paper trim/make-ready stream. Preserve moisture/ink composition and receiver; paper packaging waste is distinct. No paper-only amount for stapled complete rejects.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Waste solid (`catalogue_reject`)

One physically solid outgoing rejected complete catalogue stream with retained steel/zinc, paper, ink and moisture. Weigh whole stream; analytical components are not additional waste exchanges. Internal rework is not outgoing waste.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Waste solid (`plate_waste`)

One separately handed-over spent coated aluminium plate stream, including actual residual ink/coating. Broad industrial solid identity does not assert pure aluminium, remelting, hazard status or a recovery credit; receiver/route must match.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Waste ink (`ink_waste`)

One segregated conventional offset-ink residue stream from pots/press; preserve whole as-exported composition and receiving treatment. Ink retained in rag, liquid, paper or catalogue is not also this waste.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Waste liquid (`wash_waste`)

One outgoing physically liquid spent blanket-wash mixture with ink/solvent/water; whole-liquid mass/volume and compatible density/temperature, water-specific assay and independent solids/volatiles required. Non-water mass is not automatically dry solids; no hazardous-waste default from broad commentary.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Waste liquid (`fount_waste`)

One separate spent fountain liquid handover to sewer treatment or offsite treatment; record receiver and actual formulation/ink/water. Keep separate from wash liquid. Treatment transfer is not a direct water-compartment emission.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Waste solid (`cloth_waste`)

One discarded contaminated solid cotton-cloth stream including retained liquid/ink; whole mass and composition required. Reusable laundry handover remains an owned same-item service loop, with its transport/service records, not fresh cloth production and disposal each turn.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Zinc-coated stitching-wire scrap (`wire_waste`)

One separately collected cut/mis-stitch wire stream. Verify steel/zinc/contamination and receiver, whole mass, and separate it from staples remaining in rejected catalogues. Wafer-production waste wire does not establish this identity.

- Selected flow: Zinc-coated stitching-wire scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### packaging waste (plastic) (`film_waste`)

One outgoing as-generated PE packaging-film scrap stream. Verify polymer/additives/contamination and treatment receiver; not cleaned recycled resin or a PET stream.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Packaging waste, cardboard (`carton_waste`)

One outgoing cardboard shipping-carton waste stream generated during packing; whole mass at actual moisture and coating/contamination. It is not paper catalogue trim and not an assumed recycling credit. The native comment's2% expert-estimate quantity is not adopted.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Discarded complete wooden pallet (`pallet_waste`)

One genuinely discarded pallet stream, with fasteners/coatings and whole moisture-correctly recorded mass. An owner-return pallet is not waste; a primary-production wood residue or agglomerated-briquette flow does not establish this identity.

- Selected flow: Discarded complete wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Captured paper-cutting dust (`paper_dust`)

One captured paper-cutting dust stream handed to treatment, including actual ink, moisture and any powder contamination. It is not airborne emission or dry pure cellulose by assumption.

- Selected flow: Captured paper-cutting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

###### Waste solid (`powder_waste`)

One separately collected solid starch spray-powder residue stream. Record actual moisture/ink and receiver; exclude powder retained on catalogues, dust in another bin and measured airborne PM. No positive amount from source capability alone.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_waste and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`; `ilcd-2010`

##### Elementary flows

###### isopropanol (`ipa_air`)

CAS67-63-0; actual species-specific outdoor release only after constituent survey, matched ventilation/outlet monitoring and control. Native compartment is emissions to air, unspecified; use a separately verified more specific compartment when known. No indoor exposure, TVOC-as-carbon/species equivalence or duplicate outlet sums. PM bins are disjoint; captured dust is separate. Missing observations are gaps, not zero.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_air and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18`; `epa-method25a`; `heidelberg-powder`

###### heptane (`heptane_air`)

CAS142-82-5; conditional actual n-heptane from verified wash/formulation and validated species analysis; not a stand-in for all petroleum hydrocarbons. Native compartment is emissions to air, unspecified; use a separately verified more specific compartment when known. No indoor exposure, TVOC-as-carbon/species equivalence or duplicate outlet sums. PM bins are disjoint; captured dust is separate. Missing observations are gaps, not zero.

- Selected flow: heptane `fe0acd60-3ddc-11dd-a663-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_air and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18`; `epa-method25a`; `heidelberg-powder`

###### particles (PM2.5) (`pm25`)

Actual outdoor post-control mass in diameter up to2.5 micrometres. Native compartment is emissions to air, unspecified; use a separately verified more specific compartment when known. No indoor exposure, TVOC-as-carbon/species equivalence or duplicate outlet sums. PM bins are disjoint; captured dust is separate. Missing observations are gaps, not zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_air and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18`; `epa-method25a`; `heidelberg-powder`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Actual outdoor post-control mass above2.5 and up to10 micrometres. Native compartment is emissions to air, unspecified; use a separately verified more specific compartment when known. No indoor exposure, TVOC-as-carbon/species equivalence or duplicate outlet sums. PM bins are disjoint; captured dust is separate. Missing observations are gaps, not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_air and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18`; `epa-method25a`; `heidelberg-powder`

###### particles (> PM10) (`pmover10`)

Actual outdoor post-control mass above10 micrometres. Native compartment is emissions to air, unspecified; use a separately verified more specific compartment when known. No indoor exposure, TVOC-as-carbon/species equivalence or duplicate outlet sums. PM bins are disjoint; captured dust is separate. Missing observations are gaps, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_air and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-method18`; `epa-method25a`; `heidelberg-powder`

###### water vapour (`water_vapour`)

CAS7732-18-5; actual net outdoor water vapour after matched inlet/outlet humidity, flow and condensation measurements; not all purchased/carried water or an unidentified balance residual. Native compartment is emissions to air, unspecified; use a separately verified more specific compartment when known. No indoor exposure, TVOC-as-carbon/species equivalence or duplicate outlet sums. PM bins are disjoint; captured dust is separate. Missing observations are gaps, not zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the compatible cohort exchange amount per 1 kg reference flow using cp_water and cp_cohorts; retain this row's stock provenance, unallocated physicalV and separately assigned burdenA. No default amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-method18`; `epa-method25a`; `heidelberg-powder`

## 7. Allocation and Co-product Handling

This is an attributional manufacturing inventory. Establish the study decision context before applying ILCD's attributional provisions; a consequential comparison needs separately reviewed system expansion/substitution choices. EPA material balances support organic-material accounting only, never the LCA shared-load hierarchy. [ilcd-2010]

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_two_ledgers` | all exchanges | Retain unallocated physicalV by stage/state and all output/stock legs. Apply burdenA attribution only to environmental inventory loads; do not multiply actual catalogue/waste/output masses by a burden share to force closure. Every acquired whole/component provider has one burden owner. | `ilcd-2010` |
| `a_subdivide` | shared press/finishing/ancillary service | First subdivide or virtually subdivide using actual job/colour meters, material issue and machine records, separately identifying make-ready, operation, cleaning, standby and failed production. Directly assign uniquely attributable exchanges before allocating only the remaining shared loads. | `ilcd-2010` |
| `a_causal` | residual shared exchanges | Establish a determining physical cause for each exchange: measured area/passes, processing time with intensity, cleaning demand, or occupied volume/area×duration for compatible storage. Document the driver, all served jobs/cohorts including old stock/services, complete denominator, uncertainty and why alternatives are weaker. Printed pages, sales mass, price or one monthly denominator cannot stand for every exchange. Shares must conserve the pre-allocation inventory. | `ilcd-2010` |
| `a_economic` | residual without supported causal assignment | Only after documenting failed subdivision/causal options, use evidence of process-gate co-function values in the same condition, quantities, currency and period, correcting demonstrable extra transport/conditioning from later sale prices. Missing/zero/negative/fee values or an unsupported denominator remain specific review cases; no arbitrary share, absolute-value shortcut or clipping to zero. Do not calculate a forced result without an actual defensible basis. | `ilcd-2010` |
| `a_recovery` | paper/metal/packaging recovery | Preserve receiver/state/value and explicit burden ownership. A scrap sale or owner-return is not an automatic negative input or avoided virgin-material credit. ILCD recycling rules require the real joint process, property changes and actual positive/negative-value treatment boundary. Keep this unresolved where evidence is absent; no invented recycling rate, number of cycles, negative-fee clip or universal cutoff. Any approved separate scenario must not duplicate the main treatment/provider inventory. | `ilcd-2010` |
| `a_cohorts` | returns, rework, packaging reuse | Transport/carry-forward an item or component's original exchange vector with its owner/cohort; do not repurchase its manufacture on ER or reallocate old FG to current new Q. Add actual new handling/laundry/storage/transport/waste services on original Qc or a separately reviewed service basis. Retain Q=0 and failed/idle loads with explicit attribution or pending review, never erase them. | `ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `catalogue_manufacture` | complete first-release catalogue | future foreground measurement | seller/design/edition; actual contents/commission; audience/distribution purpose; cohort/item/lot IDs; new first release; copies/pages; calibrated net mass; tare/moisture; rejected mass; opening/new/old closing FG; order/colour/staple acceptance | Inspect actual contents and job brief; weigh complete accepted catalogue lots after trim on calibrated scales excluding shipping packaging. Reconcile count with same-design measured sample mass and sampling uncertainty. Deduplicate first release by item/lot; retain new accepted closing stock. Aggregation conditions: only compatible unique cohort first-release Qc. | kg; copies | each lot/release and stock closure | declared representative job/cycle period | actual printer and declared design | per 1 kg reference flow | job content/specification; scale calibration; acceptance/stock logs; sample design |
| `cp_materials` | `catalogue_manufacture` | separate body/cover/plate/cloth/powder | future foreground measurement | row/stage/cohort; supplier/grade; P/N_ext/ER where relevant; receipts/issues/returns; S0/S1 raw/WIP; actual net mass; moisture; coating; powder/cloth state; spools/cores | Weigh deliveries/issues/leftovers and reconcile stage ledger; distinguish same-state transfer from actual printed/formed product transformation. Record plate coating fate and paper make-ready/trim; no sheet-count default mass. Aggregation conditions: retain raw physicalV, carry-forward and original Qc. | kg | each delivery/job and closure | declared job/cycle period | site and actual supplier | per 1 kg reference flow | weigh tickets; supplier specs; calibration; matched stage records |
| `cp_formulations` | `catalogue_manufacture` | each whole ink/fount/wash and separate IPA | future foreground measurement | SKU/colour/cohort; supplied mass/volume; assay/purity/density/T; complete constituents/CAS; carrier water; fossil/biogenic origin; made-up dilution; retained/waste/air/stock fractions; provider ownership | Weigh each whole supplied formulation and separately added substance; obtain full supplier composition beyond public SDS. Measure dilution water separately. Keep assays nested, not additive provider exchanges. Evaluate actual organic species and concentration/state compatibility. Aggregation conditions: compatible cohort amount and single provider owner. | kg; m3 | each SKU/job/mixture and closure | actual material batches in reporting period | site and actual formulation supplier | per 1 kg reference flow | full supplier disclosure/assays; density/T; calibrated weights; constituent balance |
| `cp_stitch` | `catalogue_manufacture` | coated round stitching wire | future foreground measurement | wire grade/route; diameter/roundness/coating; spool net/tare; head setup; actual staple count/length; retained/cut/mis-stitch mass; rejected catalogue identity | Weigh whole coated wire issued/returned and independent scrap; verify round wire supplier route, measured staple retention and bindery acceptance. Counts only convert using measured compatible wire geometry/density or weighed staple samples with uncertainty, never a universal2-staple dose. Aggregation conditions: retained wire and waste disjoint. | kg; count | each job/spool/setup | declared job/cycle period | actual stitching line and wire supplier | per 1 kg reference flow | wire certificate; scale records; stitch/pull/handling acceptance; reconciliation |
| `cp_energy` | `catalogue_manufacture` | electricity and site utility survey | future foreground measurement | meter/voltage; kWh; stage/job; grid/year/provider; start/stop/standby/cleanup; intensity/runtime; all served jobs; heat/fuel/refrigerant audit; any supply/return mass/h/T/P | Calibrated stage submeters and bills, including compressed air/cooling/extraction; reconcile unmetered loads with documented causal evidence. Verify bounded electric configuration. Record any heat/fuel occurrence as retained out-of-scope extension debt, with independent supply/return streams and loss/storage terms. Aggregation conditions: compatible cohort burden only, preserve idle/failed/old-cohort services. | kWh; MJ | each stage/job and bill closure | representative cycles including Q=0 periods | actual site utility service | per 1 kg reference flow | meters/bills; load tests; survey/absence evidence; full driver denominator |
| `cp_water` | `catalogue_manufacture` | municipal and formulation water, vapour | future foreground measurement | separate meter; source/treatment; volume/mass/density/T; carried water; incoming paper moisture; product/waste stocks; inlet/outlet humidity/airflow/T/P; condensate | Meter separately added water; assay actual formulation and paper moisture; reconcile all physical water states. Integrate measured matched vapour inlet/outlet mass, condensate and stock change. No unmeasured residual as identified vapour. Aggregation conditions: each compatible cohort water amount. | kg; m3 | fills/bleeds/lots and representative ventilation cycles | actual job/cycle period | site circuits and outdoor boundary | per 1 kg reference flow | calibration; water-specific assay; humidity/flow closure; uncertainty |
| `cp_packaging` | `catalogue_manufacture` | each carton/film/pallet component | future foreground component/ownership ledger | component/item/owner/cohort IDs; original Qc and inherited vector; first purchased P including bundled price; first non-purchase N_ext; prior outward link for ER; raw/WIP/attached-newFG/attached-oldFG/reusable S0/S1; gross dispatch; owner-return; waste; component mass/grade; every transport leg; whole/component provider | Inspect contracts/consignment and item history, weigh components with tare and match every ER to its genuine preceding outward leg. No standalone invoice is needed for P if bought as part of a whole. Separate borrowed/leased/entrusted/supplied first entry from same-item return and same-state internal reissue. Reconcile each location once; measure actual loss/repair/transport without invented reuse lives. Aggregation conditions: manufacture once on actual acquisition basis and carry vector to served original cohorts; actual later services separately. | kg; count; distance | each acquisition/movement/dispatch/return and closure | component history plus declared service period | site/owner/carrier and actual receiver | per 1 kg reference flow | purchase/bundled contract; consignment/ownership; item-linked movements; gross transport and stock records |
| `cp_waste` | `catalogue_manufacture` | each separate whole outgoing waste | future foreground measurement | stream/bin/cohort; whole mass/tare/state; water-specific fraction; independent solids/volatiles; actual components; volume/density/T; S0/S1; receiver/route/value/fee; transport | Weigh each actual segregated whole transfer; retain wet/dry definitions, actual contamination and receiver acceptance. Keep treatment, laundry/owner return and internal rework distinct. Never add analytical components to whole waste or count paper/staples in multiple outgoing streams. Aggregation conditions: compatible cohort leg and actual treatment ownership. | kg; m3 | each collection/transfer/closure | declared period including failed lots | site handover and actual receiver | per 1 kg reference flow | calibrated weigh/assay and transfer records; receiver/fee agreement; balance |
| `cp_air` | `catalogue_manufacture` | each actual outdoor organic species/PM bin | future foreground monitoring | source/cohort/time; constituent/CAS survey; outlet/inlet flow/concentration/T/P/humidity; instrument response/recovery; blanks/LOD; control; PM cut/filterable/condensable definition; carbon origin | Competent species analysis validated for actual volatility/matrix over make-ready, steady print, cleaning and storage; integrate matched ventilation measurements. GC Method18 has polymerisation/low-vapour-pressure limits; FIA carbon/calibration-gas equivalents are not species masses. Establish disjoint PM cuts, no captured-dust double count. Aggregation conditions: compatible cohort species amounts; preserve LOD/unknowns. | kg; mg/m3; m3/time | representative cycles and material/control changes | actual job/cycle period | site post-control outdoor boundary | per 1 kg reference flow | calibration/recovery; blanks; matched flow/conditions; control and sample coverage |
| `cp_cohorts` | `catalogue_manufacture` | physicalV and inherited burdenA | future traceable accounting | all row/stage/state IDs; first-release Qc; raw/WIP/new-oldFG/reusable stocks; P/N_ext/ER; internal links; transformations; gross outward/waste; each exchange vector/owner/provider; direct/shared/idle/failure/service loads; causal/economic evidence | Reconcile physical stages and mutually exclusive stocks before attributing burdens. Carry opening/imported item vectors without re-adding original manufacture. Deduplicate acquisition and first release; partition only supported shared load residues. Keep every unmatched return, price/fee ambiguity, missing vector and Q=0 load explicitly pending. Aggregation conditions: new compatible amounts on Qc, inherited/later amounts on original Qc or explicitly reviewed service basis. | row-native kg or MJ; cohort kg | each movement/job and period closure | original cohort history and current services | complete declared site/provider boundary | per 1 kg reference flow | original vectors and acceptance IDs; provider ownership; stage/stock closure; allocation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cohort_normalize` | all inventory rows | For a positive unique first-release cohort Qc, divide that cohort's compatible attributable row amount by Qc to report per1 kg reference flow. Preserve physicalV before burdenA and stock attribution. This division applies neither to unrelated current-month purchases nor old-cohort inventories/services. If Qc=0 retain the raw load and assignment gap without division. | row-native amount; cp_cohorts; cp_release; original Qc | compatible normalized row and explicit unresolved load | `ilcd-2010` |
| `release_count_mass` | cp_release | Unique first-release accepted kg = same-design first-released copies × calibrated measured mean net complete-copy mass, verified against lot weighing; include newly accepted closing FG once. Reconcile FG0 + first release + genuine ER + matched internal FG_in = FG1 + gross dispatch + owner-return + withdrawal to rework/waste + matched internal FG_out; restored already accepted items enter through their matched return, not another release. | cp_release; calibrated sample mass; cp_cohorts | Qc and FG movement reconciliation | `ilcd-2010` |
| `stage_balance` | cp_materials; cp_stitch; cp_cohorts | For each material/state and stage apply b_stage, including actual formation/consumption at real conversions and all losses/transfers. Matched internal_out/in cancel on consolidation. Transfers between raw/WIP/FG/reusable locations in the same state create neither external receipt nor transformation formation. | S0; S1; actual receipts/outward/losses; internal_in; internal_out; measured transformation map | unallocated stage/state physicalV and residual uncertainty | `epa-eiip-2002` |
| `component_assay` | cp_formulations; cp_waste | Analytical component mass = measured whole mixture mass × measured/verified mass fraction. Volume requires actual compatible density at recorded T. Whole liquid×(1−water-specific fraction) gives non-water mass, not automatically dry solids. Keep assays nested and provider burden once. | whole mass; constituent/water assays; density/T; cp_formulations; cp_waste | component balance supporting one whole exchange | `epa-ctg-2006` |
| `electricity_conversion` | electricity | MJ = measured kWh ×3.6, followed by compatible cohort attribution and normalization; no thermal efficiency factor. | cp_energy; cp_cohorts | electricity MJ per1 kg reference flow | `ilcd-2010` |
| `air_species` | cp_air | Species kg = integral of matched outlet flow×species concentration minus matched incoming species mass on consistent T/P/humidity basis, converted to kg. Sum disjoint outlets/times only; retain sign/uncertainty for review rather than clipping negative results. PM bins cannot include cumulative PM10/TSP again. | cp_air; compatible response/recovery and flow evidence | actual outdoor species/PM physical mass | `epa-method18`; `epa-method25a` |
| `burden_partition` | cp_cohorts | Assign directly attributable inventory first; distribute only residual shared loads using evidenced exchange-specific causal shares, or approved process-gate value shares after a_economic. Sum all assigned burdens plus explicit pending residue back to original inventory; physical outputs do not get mechanically scaled by shares. | full shared inventory; complete served cohort/driver set; signed value/fee evidence; cp_cohorts | burdenA vectors and conservation/pending-residue check | `ilcd-2010` |
| `packaging_closure` | cp_packaging | For each mutually exclusive component location, S0 + P + N_ext + proven ER + matched internal_in = S1 + gross dispatch + owner-return + waste + matched internal_out, with genuine repair/component changes explicit. P includes bundled first procurement; N_ext is first non-purchased external entry; ER requires same-item prior outward. Preserve every original vector and all transports; provider charge/production is owned once. | cp_packaging; cp_cohorts; component owner/history; all gross legs | component physical closure and acquisition/service ownership | `ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | catalogue and each atomic row | Verify actual commercial content/distribution purpose, complete physical construction, official bilingual flow names, native type/property/unit/state/route and supplier compatibility. UUID discovery is not site confirmation or a default provider. | content/job brief; exact native identity and support-chain records; supplier/receiver scope |
| `dq_basis` | all rows/cohorts | Preserve first-release Qc, new closing FG once, original old-cohort reference and each inherited exchange vector. No sales-month denominator or repeated manufacture on same-item returns. | acceptance IDs; original vectors; mutually exclusive stock and gross leg records |
| `dq_composition` | formulations and products | Obtain whole recipes, water/carbon origins, retained components and true process transformations; public SDS may omit ingredients. No formulation factor or foreign plant dose is a default. | supplier disclosure/assays; stage/component balances and uncertainty |
| `dq_coverage` | site and period | Cover startup, failed lots, Q=0/idle, cleanup, stocks/returns and every actual extra material/species. Record absence evidence, missing data and out-of-scope extensions separately. | meter/utility/material survey; representative monitoring; explicit unresolved register |
| `dq_allocation` | burdenA and provider links | Evidence subdivision and each residual causal/value denominator, preserving negative/fee uncertainty and total inventory; whole/container/component, acquisition, treatment and transport cannot each charge the same burden twice. | ILCD scope decision; driver/price records; provider ownership and reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference | Confirm actual commercial goods-promotion/ordering contents and distribution purpose plus every construction qualifier. The code's title is insufficient; no whole32620 coverage, campaign-effect service equivalence, publication service or ordinary directory/book substitution. | `unsd-cpc3`; `demago-catalogues` |
| `v_release` | Qc and stock | Check unique new first quality release, complete net mass and one final output. New closing FG counts once; opening FG/old cohorts/ER/rework/later service cannot create Q. Every inherited row uses original Qc or approved service method. Retain Q=0/failure/idle/cleanup loads and explicit unresolved assignment. | `ilcd-2010` |
| `v_physical` | stage and components | Reconcile stage/state physicalV with internal_in/out, real formation/consumption and mutually exclusive stocks. Same-state transfer is not acquisition or formation. Match retained paper/ink/water/wire/zinc/powder to accepted/rejected products; whole plus analytical components cannot double mass. | `epa-eiip-2002`; `bekaert-stitching-wire` |
| `v_packaging` | each component | Verify bundled first purchases P, first true non-purchase N_ext and same-item prior-outward ER evidence, ownership and inherited vector. Keep gross dispatch/owner-return/waste and every transport leg separate. Check whole-container/component and acquisition/reuse provider burdens once; zero cost proves no burden exemption. | `ilcd-2010` |
| `v_allocation` | burdenA | Independently assess subdivision, each physical causal driver and full served denominator, residual gate value/fee evidence and recycling boundary. Missing or negative values are review cases, not clipped zero. Sum assigned plus pending loads to total without scaling actual physical output masses. | `ilcd-2010` |
| `v_utilities` | actual site | Verify electric-only declared scope and actual voltage/grid/provider basis; retain actual heat/fuel/refrigerant additions as extension gaps. Any heat proposal needs independent supply/return masses and enthalpies, leakage/blowdown/storage reconciliation and no assumed efficiency. | `epa-ctg-2006`; `ilcd-2010` |
| `v_air_water` | emissions and treatment | Confirm actual species/CAS/medium, inlet/outlet basis and method recovery, disjoint PM bins and no captured-dust double count. TVOC-carbon equivalents are not species mass; unmeasured water/organic residuals remain uncertainty. Keep treatment transfers out of direct emissions. | `epa-method18`; `epa-method25a`; `epa-ctg-2006` |
| `v_completeness` | dataset delivery | Report accepted inputs, checks performed/skipped, findings and completeness. Missing actual site/provider/quantity evidence or unreviewed extension cannot pass as a completed quantitative dataset. A coherent draft method and identity lookup do not establish scientific/translation approval or mapping acceptance. | `ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Route-specific physical commercial product-catalogue manufacturing input after real foreground/provider evidence and independent review. |
| allowed_use | Declared uncoated, conventional CMYK wet sheetfed, round zinc-coated wire saddle-stitch catalogue at printer gate with actual measurements and cohort/component ownership. |
| excluded_use | Whole-leaf/industry average; books/directories/editorial periodicals; other printing/binding/finishing; online/publishing/distribution or equal advertising-effect service; ready-made inventory inferred from machine capability or UUID. |
| required_metadata | Every reference qualifier; actual site/period/route/providers; original cohort basis and exchange vectors; stock and component acquisition/return history; physicalV/burdenA; transport/treatment ownership; allocation evidence. |
| required_quality_disclosure | Measurement/recipe/identity/provider gaps; site-scope restrictions; residual balances; unassigned Q=0/old-cohort loads; uncertainty; performed/skipped review/checks and incompleteness. |
| update_trigger | Changed design/content/distribution gate, stock/ink/fount/wash/wire, printing/setting/finishing, plate, utility/control/receiver/provider, cohort/reuse method or evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3` | `official_guidance` | UNSD CPC3.0 code32620 official detail, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/32620 ; CPC3.0 Explanatory Notes30June2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Code hierarchy326/3262/32620 and PDF/printed148–152; content categories, directory and periodical distinctions.32620 has no extra frequency/construction note. No HS rule or manufacturing recipe inferred. |
| `epa-eiip-2002` | `official_guidance` | EPA EIIP VolumeII Chapter15, May2002, https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | PDF14–15 §2.1.1/Figure15.2-1 sheetfed process; PDF27–31 material accounting/site-specific data limitations. Historical retention/VOC factors not adopted; not a LCA allocation source. |
| `epa-ctg-2006` | `official_guidance` | EPA-453/R-06-002, September2006, https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | PDF12–14/printed6–8 §IV.A; conventional sheetfed ink setting, fountain and wash separation. No historic solvent fraction/retention/regulatory threshold used as an LCI default. |
| `ilcd-2010` | `official_guidance` | JRC ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | PDF275–292/printed255–272 §§7.9.2–7.9.3 including scope, subdivision/virtual subdivision, determining physical causality, serial/parallel services, residual process-gate economic value, recycling positive/negative value and100% rule. Cohort/packaging equations are this PCR's declared accounting implementation, not quoted ILCD factory formulas; heat guard is dimensional conservation, not an ILCD steam factor. |
| `demago-catalogues` | `literature` | Demago Print, Catalogues, magazines, notebooks (Stapled binding), https://www.demagoprint.com/publications-catalogues-magazines-notebooks-stapled-binding-c-562_1802.html | “How the binding works”, “Materials and preparation” and alternatives; real folded/collated wire-stapled catalogue offering, with uncoated options. Not proof of selected wet offset/site/recipe; advertised2 staples/page counts/quantities/lifetimes not defaults. |
| `mm-primera` | `literature` | Müller Martini PrimeraPRO, https://mullermartini.com/en/product/primera-pro/ | Saddle-stitch equipment, gathering/stitch/eject and automatic three-knife trim paragraphs. No speed, format, number of staples or site configuration imported. |
| `bekaert-stitching-wire` | `literature` | Bekaert Stitching wire official product page, https://www.bekaert.com/en/products/consumer-goods/domestic/stitching-wire | Coated round/flat wire, zinc alternative, C-steel/wire features and staple formation; only selected round zinc-coated steel here. Actual wire grade/route/coating/quantity still collected. No nominal-PDF content or generic diameter/dose adopted. |
| `breese-sheetfed` | `literature` | Breese Publishing Digital and Prepress Printing Services, https://www.breesepub.com/services/digital-and-prepress-printing-services | Sheetfed catalogue production and separate bindery saddle-stitch/fold options; alternatives include web/digital/coatings, so capability does not certify a combined job, uncoated recipe or electric-only site. |
| `kodak-process-free` | `literature` | Kodak SONORA Process Free Plates Sustainability datasheet, https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | PDF1 absence of a separate chemical processor/rinse for this plate option only. Plate/coating production, on-press coating fate and make-ready still required; no environmental-zero claim. |
| `huber-sheetfed-ink` | `literature` | hubergroup RAPIDAECO official product page, https://www.hubergroup.com/us/en/product-finder/product/rapida-eco | Conventional quick-setting sheetfed process ink on absorbent substrates, four colours and IPA-free alternatives. Mineral-oil-free claim is neither full composition nor zero emissions/site supplier proof. |
| `heidelberg-powder` | `literature` | Heidelberg News270(2010), https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | PDF/printed53 “Small Grains that Have a Big Effect”; starch versus calcium-carbonate/sugar and coated powder alternatives; no dose, grain-size range, humidity or emission fraction adopted. |
| `epa-method18` | `official_guidance` | EPA Method18 web copy1April2025, https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | PDF1–2 §§1–4; GC species calibration, humidity/interference and low-vapour-pressure/polymerisation limitations. Method requires competent matrix-specific validation; no claim of site monitoring or regulatory certification. |
| `epa-method25a` | `official_guidance` | EPA Method25A web copy3August2017, https://www.epa.gov/sites/default/files/2017-08/documents/method_25a.pdf | PDF1 §§1–2 distinguishes calibration-gas/carbon equivalent from individual species mass. No automatic response factor. |
| `pgm-counterexample` | `literature` | PGM Advertising Materials and Catalogues, https://www.pgm.lv/en/services/advertising-materials-and-catalogues/ | Possibilities/Equipment describes heatset/web catalogue capability and alternative finishing; counterexample only, not selected sheetfed supplier, recipe or quantity evidence. |
