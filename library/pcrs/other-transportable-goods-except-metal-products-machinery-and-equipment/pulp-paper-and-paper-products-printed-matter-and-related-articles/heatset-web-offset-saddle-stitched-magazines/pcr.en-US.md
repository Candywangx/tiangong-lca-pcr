---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.heatset-web-offset-saddle-stitched-magazines
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# General-interest non-daily heatset web-offset saddle-stitched paper magazines

## 1. Scope and Applicability

This PCR covers finished general-interest paper magazines published less than four times a week, made from purchased coated reels by conventional wet heatset web offset, hot-air solvent evaporation with natural-gas firing and thermal VOC treatment, chilling, folding/gathering, steel-wire saddle stitching and trimming. A separately printed coated paper cover follows the same heatset route, or a declared self-cover uses body stock. It includes thermal process-free aluminium plates as one explicitly selected plate route and customer-side 1-35 kV grid electricity. Integrated and separate dryer/oxidiser systems require their own metering and capture diagrams. [eu-sts-bref-2020; pgm-magazines; kodak-sonora-2026; contiweb-ecoset]

The publication supplies recurring general-interest reading for the public: for example, current affairs across political, social and business news, culture and everyday life. Classification requires the actual issue contents, intended readers and editorial/distribution purpose, as well as title, edition, issue number/date and publication schedule. General-interest reporting about business does not by itself make a periodical a professional/business publication; a specialist or academic audience and purpose cannot be relabelled as general interest. [un-cpc3-periodicals-2025]

The Week publisher describes a paper magazine digesting world news and current affairs for readers seeking varied perspectives, with weekly print delivery. It is a real content/function example, independent of the PGM heatset saddle-stitch offering. These sources support a transparent category-and-route synthesis; they do not identify a common publisher order, printer, machine or measured factory inventory. Any concrete dataset must verify both its publication identity and this physical route. [theweek-editorial-purpose; theweek-weekly-print; pgm-magazines]

The PGM product offering establishes a real manufacturing route. Equipment and plate documents are independent examples: this PCR does not assert that PGM installs Contiweb/Kodak, a specific burner or a particular recipe. No single-plant quantities, historical virtual-plant shares, regulatory VOC thresholds or advertising savings are defaults.

Coldset absorption-only newspapers, sheetfed nonheatset/EVA perfect-bound books, gravure, UV/digital/waterless presses, glue-only/perfect binding, thread sewing, hardcovers, plastic-film substrates, laminated/coated-on-press covers and separately sheetfed printed covers are excluded. Business, professional or academic periodicals (CPC 32420), other specific-subject periodicals including zines (CPC 32490), online editions and publications issued four or more times a week are also excluded. This record has a single general-interest non-daily product identity; matching printing or binding does not extend it to another content category. [un-cpc3-periodicals-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.heatset-web-offset-saddle-stitched-magazines |
| classification_refs | CPC 3.0 32410; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | General-interest print magazines issued less than four times a week, on coated paper by heatset web offset and saddle stitching, with declared self/separate paper cover |
| excluded_products | CPC 32420 business/professional/academic and CPC 32490 other specific-subject periodicals; online editions; publications issued four or more times a week; other routes in section 1; no full-leaf coverage |
| representative_product | General-interest news/current-affairs print magazine; The Week illustrates content and weekly delivery only, PGM the heatset saddle-stitch route only; actual issue and physical specifications verified separately |
| production_route | Purchased coated paper; process-free plate imaging; wet heatset print/dry/abatement/chill; folded signatures; wire saddle stitching; trim; conditional packing |
| market_state | Accepted complete magazine at printer gate; transport packaging excluded from net reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete readable general-interest non-daily printed magazine of the declared physical construction |
| How much | 1 kg accepted net complete magazines, including retained ink, paper cover, moisture and metal stitches |
| How well | Declared trim size, page sequence, print/colour acceptance and stitch integrity; this mass unit is not a claim of equal reading service across titles |
| How long or cycle | One declared production campaign through gate acceptance; reading life, distribution and disposal reported only in a separate downstream model |
| reference_flow_link | `finished_magazine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual general-interest contents and intended readership/editorial/distribution purpose; title, edition, issue number/date and schedule proving publication less than four times a week; site/geography/period; accepted net kg and moisture; format/page count; body and cover grade/grammage/furnish; self-cover or separate cover; wet heatset/plate route; ink and fountain/wash formulations; dryer fuel/control/capture/bypass; chiller/silicone if fitted; wire alloy/coating/diameter/count; packaging; provider quantity compatibility |

Missing qualifiers make a dataset reference incomplete. Broad UUID identity does not establish a supplier dataset or accept any CPC mapping.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_magazine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_mass accepted net kg of complete magazines, excluding boxes/wrap and rejected copies. Denominator is identical for every inventory and protocol in the same manufacturing view: Q_acc counts only unique first manufacturing releases, including new closing FG once. Old FG dispatch, reinspection and same-item return/rework retain original Qc and create no new Q_acc; later services have a separate original-cohort view. Declare product moisture; do not replace accepted mass with gross paper input or copy count. |
| `gas_basis` | natural_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Match recorded T/P, dry/wet state, composition and compressibility to supplier reference m3; unknown compatibility is pending. Do not use the nonreference Mass meanValue as density. |
| `energy_basis` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain source meter kWh and convert with verified unit group, 1 kWh = 3.6 MJ; do not reinterpret the property as boiler heat. Meter 1-35 kV delivered electricity with matching background. |
| `species_basis` | all elementary emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use chemical species mass and actual receiving medium. mg C/Nm3 TVOC is carbon-equivalent, not solvent kg; monitor flow/concentration wet/dry/T/P conventions must agree. NO/NO2 speciation is required before use of their UUIDs; NOx-as-NO2 totals remain pending without it. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unprinted coated paper and complete plate/chemicals enter the printer gate. |
| starting_condition_role | Paper/pulp/coating manufacture remains upstream; foreground is printing and finishing. |
| product_classification_scope | Only CPC 32410 general-interest print magazines published less than four times a week that also match this physical route; CPC 32420 and 32490 are excluded. |
| recursive_input_rule | A same-category purchased printed input keeps its measured state and distinct supplier; never use this full PCR again on an internal signature or self-linked output. |
| upstream_dataset_requirement | Link route/grade-compatible paper, plate, each ink/additive, wire, electricity, gas, water, packaging and each waste treatment; identity UUID alone is insufficient. |
| disclosure | Site, dates, meters, moisture, capture/control/bypass, internal circulation, outsourcing, exclusions and unresolved actual evidence. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | p_magazine | Include receipt, imaging, make-ready, wet printing, drying/oxidation, chill/remoistening when installed, folding/gathering, wire stitching, trim, waste/emissions and dispatch packing. Distribution/use/end of life are outside the foreground gate. | `eu-sts-bref-2020`; `pgm-magazines`; `kodak-sonora-2026` |
| `boundary_upstream` | purchased paper | Paper background must actually cover pulp/furnish preparation, forming, drying and mill coating of the declared grade, with upstream emissions/waste and allocation disclosed. Woodworking/plywood surveys cannot establish papermaking. Do not duplicate mill broke or mill dust as printer emissions. | `eu-paper-bref-2015` |
| `boundary_control` | dryer and press | Retain a stage-specific extraction/control diagram. Split stack after treatment, fugitive room loss and bypass; capture and destruction are distinct. Internal solvent incineration/heat recovery is not an external fuel/avoided-emission credit. Keep fuel and ink/additive carbon origins separate. | `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `contiweb-ecoset` |
| `boundary_aggregate` | p_magazine | Aggregate actual interstage signature/cover transfer and packaging into one foreground unit with separate stage meters. Keep transfer ledgers at identical quantity/state on both ends. Only finished_magazine is the external reference-product output. | `pgm-magazines`; `muller-primera` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_magazine` | Print, heatset dry/control and saddle-stitch magazine | required | Physical route in section 1; listed optional exchanges only where present | One aggregate foreground unit; distinct stage records | per 1 kg reference flow |

Physical sequence: paper/plate receipt → imaging and make-ready → wet offset → dryer/thermal treatment → chill → fold/gather and optional paper cover → wire stitches → trim → acceptance/packing. Flue-gas recirculation, chill-water loops and signature transfers remain physical internal records. The environmental burden ledger is derived afterward, never a replacement for the physical diagram.

Quantity preparation for every card and collection protocol: Q_acc is new net complete-magazine mass at the unique first manufacturing quality release at the declared printer gate. Identify title/edition/issue, lot, original release event/date and original released cohort mass Qc. Newly released closing finished goods (FG) enter Q_acc once even if not dispatched; opening already released FG, its dispatch, reinspection, repacking and same-item return/rework never create new Q_acc. Unreleased opening work in progress (WIP) enters new Q_acc only on its first completed release. Rejects remain outside Q_acc. These rules retain actual raw stocks, WIP, new/old FG and real returns within the method.

For each exchange, retain a complete gross physical vector V and a separate attributed inventory/burden vector A in native units, with exchange/row and event IDs, quantity/property/unit and conversion, provider/background and boundary gate, phase/medium, source period, owner/custody, lot/cohort and release lineage. Carry every prior exchange coordinate through opening/closing raw stock, WIP, FG and real returns, including embedded material, energy, water, waste and emission burdens; one kg stock is not a substitute for its complete vectors. Transfer the measured opening vectors into their actual uses once and retain closing embedded vectors for their later use/completion, including unreleased WIP; unknown prior values remain unknown, never zero or a new purchase. Keep all period gross meters and outputs even when some burden remains embedded in closing WIP rather than in released new Q_acc. Pair stage internal_in/internal_out at equal state, quantity and inherited vectors and cancel them on aggregation; actual transformation is not a second external receipt. Physical V is never multiplied by an A allocation share. Record the causal evidence for attributed amounts, residuals and uncertainty without inventing shares.

Actual later reinspection, repacking, rework, cleaning, transport, losses and other services for already released FG/returns retain their original cohort and Qc. Record each incremental exchange once in a separately identified continued-cohort/service view on that original Qc, alongside the retained prior vectors; disclose any extension beyond the original manufacturing gate separately. Do not recharge prior manufacture, create new manufacturing Q_acc, or divide these services by unrelated current new output. For new Q_acc zero or unknown, keep all absolute exchanges, idle/failed/startup/cleanup activity and supported original-cohort service views; no undefined division or discarded inventory.

Controlled packaging direction ledger under cp_material/cp_waste: keep a separate atomic ledger for shipping_box, pe_wrap and every other actual component (including paper-roll cores/wrap and supplied containers), outside net magazine Q_acc. Each event records component/item and event ID, material/grade, mass and count with measured conversion, property/unit, state, owner/custody, cohort, provider/gate/phase/medium/period and complete prior V/A. Classify incoming legs exclusively as P (first genuine purchase, including a paid supplied bundle without a separate component invoice), N_ext (first external nonpurchase provision, including borrowed, leased, entrusted or accompanying items), or ER (return of the identical item with its documented prior outward event and vectors). No invoice does not establish nonpurchase; first borrowing is N_ext unless a true prior outward is proved. Opening stock and internal circulation create no new provision. Unproved prior entry/return status remains unresolved rather than an invented ER or free input.

For each component, classify opening/closing quantities into mutually exclusive empty-unattached, raw-attached, WIP-attached, new-FG-attached, old-FG-attached and unattached reusable-stock states; reusable items currently attached or empty in use belong only to their actual state. Reconcile opening + P + N_ext + ER against closing and every gross outward leg, with separately evidenced real losses/conversions and paired internal state transfers cancelling. Every outward event has one disjoint purpose/direction: accompanying new FG, accompanying old FG, EO external return to owner/custodian, service outward, external waste, or other actual empty/item outward; record recipient, ownership/custody transfer, state and cohort. EO retains prior vectors and does not erase the earlier P/N_ext or create a credit. Record all empty returns, service returns and accompanying returns as actual inward legs using the P/N_ext/ER tests, not net consumption. Match each outward/inward leg to its actual transport mode, mass/count, distance and service evidence, including external washing/repair, loss and treatment. Do not net repeated movements away. These equally controlled direction-specific records are nonreference exchanges; add verified atomic dataset rows for every actual component/recipient and service needed for completeness, never a second magazine reference output.

Charge compatible whole-component manufacture/provision once at its first entry, carrying any evidenced inherited nonpurchase provision; alternatively use its verified constituent components once, never both whole and constituent providers. Supplier-included packaging stays included once while all gross physical legs remain. Later ER, EO, internal reuse or old-FG dispatch carries prior vectors, with only actual incremental repair/wash/transport/loss/service burdens added once. Unknown prior/provider burden remains explicit; free-of-charge does not mean zero burden. No assumed lifetime/cycles, invented price/share, negative-fee clipping or automatic recovery credit closes a gap. These are foreground collection/lineage requirements; EPA solvent material-balance guidance does not establish an LCA allocation policy.

### Process: Magazine manufacture (`p_magazine`)

#### Inputs

##### Product flows

###### Body paper (`body_paper`)

Unprinted purchased coated body-paper reel; declare fibre furnish, mill coating, grade, grammage, moisture and roll/core tare. A coating record is not evidence that the paper is already printed.

- Selected flow: coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `pgm-magazines`; `eu-paper-bref-2015`; `eu-sts-bref-2020`

###### Cover paper (`cover_paper`)

Unprinted coated paper for a separately printed paper cover, same wet heatset route; record its actual heavier or same grammage separately. For a self-cover, this exchange is absent and the cover sheets remain in body_paper; never count the same stock twice.

- Selected flow: coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `pgm-magazines`; `eu-paper-bref-2015`

###### Process free plate (`process_free_plate`)

Purchased complete coated plate, thermal imaging on site. Bare grained aluminium substrate is not the plate. Preserve manufacture/coating upstream. Collect actual coating remaining on spent plate or transferred to ink, waste or paper during imaging/press startup, using product instructions and plant evidence to establish destinations; no assumed coating-transfer fraction or separate developer bath in this selected route.

- Selected flow: Coated thermal process-free aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `kodak-sonora-2026`

###### Ink black (`ink_black`)

Black formulated heatset offset paste ink only; measure this colour separately. Broad solvent-based flat-printing identity is conditional on actual heatset grade, binder, solvent CAS/composition and supplier reference kg. Do not transfer the database prose into a solvent recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Ink cyan (`ink_cyan`)

Cyan formulated heatset offset paste ink only; measure this colour separately. Broad solvent-based flat-printing identity is conditional on actual heatset grade, binder, solvent CAS/composition and supplier reference kg. Do not transfer the database prose into a solvent recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Ink magenta (`ink_magenta`)

Magenta formulated heatset offset paste ink only; measure this colour separately. Broad solvent-based flat-printing identity is conditional on actual heatset grade, binder, solvent CAS/composition and supplier reference kg. Do not transfer the database prose into a solvent recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Ink yellow (`ink_yellow`)

Yellow formulated heatset offset paste ink only; measure this colour separately. Broad solvent-based flat-printing identity is conditional on actual heatset grade, binder, solvent CAS/composition and supplier reference kg. Do not transfer the database prose into a solvent recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Process water (`process_water`)

Purchased treated tap water for fountain dilution, washing and conditional remoistening/cooling makeup; separately meter stage uses before aggregation. Internal recirculation is not fresh input. Preserve reference Volume/m3 and actual density if converted.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured campaign amount under cp_water divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-sts-bref-2020`; `contiweb-ecoset`

###### Fountain concentrate (`fountain_concentrate`)

One purchased concentrate formulation, with supplier dilution instructions and actual additive chemistry. Concentrate kg excludes separately purchased dilution water and IPA; purchased premix water/IPA must not be counted again. Regular working fountain solution is not proof of concentrate identity.

- Selected flow: Acidified wet-offset fountain-solution concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Ipa makeup (`ipa_makeup`)

Only separately purchased isopropanol CAS 67-63-0 added on site; record purity, concentration and total product mass versus pure species. Not a mandatory positive amount for IPA-free printing.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Blanket wash (`blanket_wash`)

One actual purchased low-volatility wash blend; retain CAS/species, flash point, water fraction, blanket/roller compatibility, evaporation and waste destinations. Inkjet printhead cleaner is incompatible.

- Selected flow: Hydrocarbon-based offset blanket and roller wash formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Cotton wipe (`cotton_wipe`)

Purchased cotton fabric cut for wiping, excluding synthetic-blend cloth; record reuse/laundry cycles and new makeup mass, not repeated circulation as new purchase. The selected name and woven-cotton synonyms support finished fabric; its raw-cotton CPC field and cotton-fibre description require source clarification. Verify actual manufactured fabric, finishing and provider; this is not raw cotton fibre or a water-treatment chemical background.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Silicone emulsion (`silicone_emulsion`)

Conditional actual chill-roll application: collect the complete emulsion grade, polymer CAS, dry-polymer fraction, carrier water, other ingredients and supplier dataset. A primary polysiloxane UUID cannot represent the whole emulsion; no application rate is prescribed.

- Selected flow: PDMS-based heatset chill-roll silicone emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `contiweb-ecoset`

###### Stitch wire (`stitch_wire`)

Iron/non-alloy steel wire formed into saddle staples through the fold; collect alloy, diameter, metal coating, number and measured wire mass. Actual coated grade/provider must be compatible; do not use recovered steel-band recipes or infer mass from stitch count alone.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `hohner-wire-stitching`; `muller-primera`

###### Electricity (`electricity`)

Metered grid-average medium-voltage alternating current delivered at 1-35 kV to the reporting plant; stage meters cover imaging, press, fans, chiller, folder, stitcher, trim and packing. Require voltage/geography/supplier compatibility; the flow property is Net calorific value, reference MJ; 1 kWh = 3.6 MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured campaign amount under cp_energy divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `eu-sts-bref-2020`; `contiweb-ecoset`

###### Natural gas (`natural_gas`)

Pipeline compressed gaseous natural gas for dryer and thermal oxidiser; meter fuel separately by equipment where possible, count an integrated meter once. Reference Volume/m3, with actual T/P, wet/dry convention, composition and compressibility matched to the supplier background. The database secondary mass coefficient is not a density. The CAS 74-82-8 and pressurised-methane synonyms do not establish pure methane, a methane fraction or a fixed pressure: the bilingual name, route and comment describe compressed pipeline-delivered natural gas at consumption without those numerical limits. Preserve this ambiguity for source/provider clarification. Use only actual matching gaseous supply, not LNG, raw extraction gas, an arbitrary fuel mix or an already-combusted process exchange.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured campaign amount under cp_energy divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `eu-sts-bref-2020`; `contiweb-ecoset`

###### Shipping box (`shipping_box`)

Conditional corrugated dispatch box; measure box mass separately from accepted magazine net mass and link upstream box manufacture. This UUID is limited to 16.6% primary and 83.4% recycled fibre. Link it only if actual fibre composition and supplier technology/basis match; otherwise retain a box identity gap and resolve a compatible record before dataset completion. These source fractions are compatibility conditions, never a factory recipe or quantity default.

Apply the controlled packaging direction ledger to each actual box: P/N_ext/ER entry and EO/other gross outward purposes, owner/custody/cohort, inherited provider/V/A and disjoint empty/attached/reusable stocks. Include every new/old-FG accompanying box, empty return, service/waste leg and actual transport outside net magazine Q_acc; first provision once and actual later increments once, including bundled-paid and nonpurchased boxes.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `pgm-magazines`

###### Pe wrap (`pe_wrap`)

Conditional actual polyethylene wrapping film CAS 9002-88-4; retain thickness, recycled content and supplier. Physical name/CAS/comment identify film despite a conflicting CPC29220 field; supplier clarification remains required.

Apply the same component-specific P/N_ext/ER/EO, stock, inherited provider/V/A and complete gross direction/transport ledger to actual film. Distinguish film attached to raw/WIP/new or old FG, empty/reusable stock, accompanying dispatch/return, service and waste; preserve first provision once and later actual increments, never free nonpurchase provision or netting of gross legs.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `pgm-magazines`

###### R134a makeup (`r134a_makeup`)

Only when the installed chiller uses CAS 811-97-2; measure charging/recovery/service records. Onboard-fishery R134a dataset route is rejected; do not apply its leakage rate. A different installed refrigerant requires its own atomic row. The generic Product/Mass/kg record expressly names R134a and has no ship/use/charging route restriction; it does not declare CAS, purity or liquid/gas state. Actual nameplate, SDS/certificate and supplier evidence must establish R134a/CAS 811-97-2, actual supply state/purity and kg basis; never infer an R134a installation from a chiller name.

- Selected flow: refrigerant, R134a (tetrafluoroethane) `210b4222-adda-4097-9e79-f2c9a6c172e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_chiller divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chiller`
- Sources: `eu-sts-bref-2020`

###### Actual formulated machine guideway lubricating oil (`maintenance_oil`)

One actually supplied formulated guideway/felt-pad oil used in the installed printing or stitching equipment. Record supplier/SDS, petroleum or synthetic base, additives, viscosity and actual application/stock changes; obey that machine's instructions. Hohner section 4.1.1 is an equipment example, not an imposed universal grade or interval. Do not substitute a wax/solvent lubricant or infer a dose from operating hours.

- Selected flow: Actual formulated machine guideway lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `hohner-wire-stitching`; `eu-sts-bref-2020`

###### Actual formulated high-temperature machine lubricating grease (`maintenance_grease`)

One actual supplied high-temperature grease for guideways/friction points on the installed equipment. Record base oil, thickener/additives, consistency, supplier grade and weighed application/replenishment. A liquid lubricating-oil UUID is not the complete grease. Equipment instructions establish the need to collect maintenance, not a default recipe, dose or universal brand.

- Selected flow: Actual formulated high-temperature machine lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_material divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `hohner-wire-stitching`; `eu-sts-bref-2020`

#### Outputs

##### Product flows

###### Finished magazine (`finished_magazine`)

Accepted complete paper magazine at gate, heatset ink, folded/gathered, metal saddle stitches and declared paper cover. The full identity explicitly names mechanically printed material, paper-substrate printing and printed-paper synonyms. Its general comment separately describes paper-3D prototyping, but does not limit this flow to an additive-manufactured prototype. Conditional use therefore requires an actual complete mechanically printed paper magazine with the stated binding/gate qualifiers; neither the side description nor the broad name proves final binding, a magazine-specific background or postal-service quantity. Preserve the CPC32690 mismatch and the mixed-topic comment for source/provider clarification. This PCR limits the physical product; it does not reinterpret the UUID as a complete magazine-specific background dataset.

- Selected flow: Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `pgm-magazines`; `eu-sts-bref-2020`

##### Waste flows

###### Paper trim (`paper_trim`)

Weigh printed make-ready rejects and trim paper sent outside the plant, declare retained ink/moisture and remove sorted wire; excludes collected fine dust and internal recirculation. Actual recipient and treatment required.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`; `pgm-magazines`

###### Collected paper dust (`collected_paper_dust`)

One collected cellulose-paper dust stream from cutting/folding extraction sent outside the plant; measure separately from paper_trim and airborne PM. Broad waste-paper identity used only when actual paper/ink composition and recipient support it; kiln dust is rejected.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`

###### Spent plate (`spent_plate`)

Used aluminium plate leaving for recycling; declare residual coating/ink, alloy, recipient acceptance and treatment. Do not use this broad scrap identity as a proxy for unmanufactured input plate.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `kodak-sonora-2026`; `eu-sts-bref-2020`

###### Waste ink (`waste_ink`)

Collected press ink residue including transferred plate coating only where present; quantify composition and distinguish liquid waste, cloth and ink retained on waste paper.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Spent fountain (`spent_fountain`)

Collect spent fountain bath separately with actual alcohol, biocide, ink and water composition; record offsite recipient, not direct freshwater emission.

- Selected flow: Spent acidified offset fountain solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Spent wash (`spent_wash`)

One collected liquid wash stream; record dissolved ink and water, separate from cloth and atmospheric solvent loss; no unrelated process wastewater UUID.

- Selected flow: Spent hydrocarbon blanket wash liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Soiled wipe (`soiled_wipe`)

One contaminated cotton cloth waste stream with actual retained solvent/ink, route and laundry/reuse status. Do not also put retained liquid into spent_wash.

- Selected flow: Solvent-and-ink contaminated cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### Wire trim (`wire_trim`)

Actual steel-wire fabrication offcuts and rejected staples, segregated at the printer and sent for recycling; declare alloy/coating, ink contamination and recipient. The broad steel-fabrication scrap record can identify this physical subset, but its welding example and 5% estimated loss are not required process steps or quantity defaults. Wafer-wire and specifically incompatible machining scraps remain excluded.

- Selected flow: Steel scrap `a7c886ee-6447-4af3-89ea-ed0828fb115c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `pgm-magazines`; `hohner-wire-stitching`

###### Pe trim (`pe_trim`)

Conditional unwashed film offcuts, actual contamination and receiver. A cleaned mechanically recycled material is downstream of this gate and is rejected as the waste exchange.

- Selected flow: Unwashed polyethylene wrapping-film offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `pgm-magazines`; `hohner-wire-stitching`

###### Spent silicone (`spent_silicone`)

Only when actual emulsion is collected as one liquid stream; record concentration and destination, separate from transfer onto paper or water discharge.

- Selected flow: Spent PDMS chill-roll emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`; `contiweb-ecoset`

###### Cooling blowdown (`cooling_blowdown`)

Conditional actual cooling-loop blowdown; declare inhibitors, contamination, recipient and treatment. Closed-loop circulation is not discharge. Direct environmental releases need actual pollutant-specific elementary rows.

- Selected flow: Chiller cooling-water blowdown sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-bref-2020`; `contiweb-ecoset`

###### Used lubricating oil (`spent_maintenance_oil`)

One separately collected used petroleum-based or synthetic lubricating oil stream from actual equipment maintenance. Record contamination, net oil-stream mass and receiver; do not include removed grease, wiping cloth or their retained oil again. Oil left in equipment, reused oil and measured releases remain separate stock/destination records. No fixed used-oil fraction or waste-treatment route is assumed.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `hohner-wire-stitching`; `eu-sts-bref-2020`

###### Separately collected spent machine lubricating grease (`spent_maintenance_grease`)

One actually removed and separately collected used grease stream, with base oil, thickener, contamination and recipient documented. A used liquid-oil identity does not establish complete grease identity. Grease retained on the machine or wiping cloth is not counted again here; absence of a separate collected stream needs recorded applicability evidence.

- Selected flow: Separately collected spent machine lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_waste divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `hohner-wire-stitching`; `eu-sts-bref-2020`

##### Elementary flows

###### Co2 fossil (`co2_fossil`)

Fossil carbon from natural gas and ink/wash solvents oxidised on site; separate carbon origins and retained/destroyed carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Co2 biogenic (`co2_biogenic`)

Biogenic carbon only where actually oxidised, including evidenced bio-solvent/additive; do not delete it under a GHG reporting convention. Paper carbon retained in product is not current CO2 emission.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Co fossil (`co_fossil`)

Measured CO from fossil feed carbon; do not assign a mixed-origin CO total wholly to fossil carbon.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Co biogenic (`co_biogenic`)

Conditional biogenic CO, separately supported origin; when unseparated, carbon-origin completeness remains pending.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Nitrogen monoxide (`nitrogen_monoxide`)

NO chemical mass only, CAS 10102-43-9. A NOx-as-NO2 monitor total cannot be inserted as NO kg.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Nitrogen dioxide (`nitrogen_dioxide`)

NO2 chemical mass, CAS 10102-44-0; combined NOx requires documented speciation and basis conversion, with no duplicate aggregate NOx exchange.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Nitrous oxide (`nitrous_oxide`)

N2O CAS 10024-97-2 measured or independently supported; it is excluded from NO/NO2 and NOx equivalence.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Methane fossil (`methane_fossil`)

Unburned fossil methane from actual leaks or combustion slip; do not call all organic carbon methane.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Sulfur dioxide (`sulfur_dioxide`)

SO2 actual gas/fuel sulfur basis, CAS 7446-09-5; not a generic sulfur-oxide aggregate.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Pm fine (`pm_fine`)

PM2.5 escaping final exhaust/fugitive factory boundary; include actual cutting/folding and combustion sources separately in raw records.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Pm coarse (`pm_coarse`)

Only the PM2.5-PM10 fraction; subtract PM2.5 from a measured PM10 cumulative total on the same sampling basis; never add cumulative PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Pm large (`pm_large`)

Only >PM10 escaping the boundary, distinguish collected dust; incomplete particle-size measurements remain explicit.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Ipa air (`ipa_air`)

Isopropanol from actual fountain/wash recipe and release, CAS 67-63-0; sum disjoint post-control stack and room-fugitive amounts.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Ethanol air (`ethanol_air`)

Ethanol CAS 64-17-5 only when actual concentrate or separately documented chemical feed contains it; separate fossil/biogenic carbon for destruction.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Butoxyethanol air (`butoxyethanol_air`)

2-butoxyethanol CAS 111-76-2 only after actual additive/wash identity and emissions are evidenced; no inferred glycol-ether recipe.

- Selected flow: 2-n-butoxy-1-ethanol `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Toluene air (`toluene_air`)

Toluene CAS 108-88-3 only if analytical or supplier composition evidence identifies it; it is not assumed for modern heatset ink.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Heptane air (`heptane_air`)

n-Heptane CAS 142-82-5 only when confirmed in actual wash/ink emission; not a proxy for all petroleum hydrocarbons.

- Selected flow: heptane `fe0acd60-3ddc-11dd-a663-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Dodecane air (`dodecane_air`)

n-Dodecane CAS 112-40-3 only when chemical speciation confirms it. Mineral oil/C12-C15 distillate is not pure dodecane.

- Selected flow: dodecane `fe0acd60-3ddc-11dd-a822-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### Hexadecane air (`hexadecane_air`)

n-Hexadecane CAS 544-76-3 only when chemical speciation confirms it; do not assign unknown UVCB residual to this species.

- Selected flow: hexadecane `08a91e70-3ddc-11dd-946f-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_emission divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### R134a air (`r134a_air`)

HFC-134a CAS 811-97-2 only for actual installed equipment losses from service mass balance; no default rate.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_chiller divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chiller`
- Sources: `eu-sts-bref-2020`; `contiweb-ecoset`

###### Water vapour (`water_vapour`)

Actual water vapour leaving the plant from paper/fountain moisture and combustion; distinguish supply water, product water, waste liquid and chemical reaction water. Record inlet-air humidity and matched exhaust/condensate time bases; unchanged ambient water passing through combustion or ventilation is not newly generated foreground water vapour. Keep gross physical inlet/outlet moisture separately from the net anthropogenic release, including material evaporation and reaction water. Offsite liquid waste is not a water-vapour or direct freshwater release.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured campaign amount under cp_water divided by accepted campaign net kg; conditional absence requires recorded applicability evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-sts-bref-2020`; `contiweb-ecoset`

Receipt and maintenance completeness: collect incoming paper-roll cores/outer wrap, actual ink/fountain/wash/grease containers and their tare, material and retained residue separately from net contents. Returned/refilled containers and internal reuse remain paired stock/transfer records; each actually discarded container material, worn blanket/filter/part and other packing input/residual requires its own verified atomic row and recipient before a dataset is complete. Do not invent container types, losses, allocation cycles or include chemical residue twice. Packaging included by a supplier background must not be recharged as a duplicate upstream burden; actual gate packaging stock and waste remain physical records. The oil/grease rows below the input and waste groups apply only to actual maintenance and cannot be substituted for one another. [eu-sts-bref-2020; epa-offset-ctg-2006; hohner-wire-stitching]

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | p_magazine | First use actual job/stage meters and identified materials. Separately account for make-ready, cleaning, start-up/shutdown and rejects attributable to each campaign; document causal remaining shared-service drivers. Do not allocate all ink or heat simply by sales revenue or copy count. | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |
| `allocation_physical` | physical ledgers | Keep full unallocated physical outputs, stock changes and paired internal transfers in mass/water/carbon/solvent ledgers. Apply an agreed share only to the environmental burden ledger. Do not mechanically multiply co-product physical output by that share. | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |
| `allocation_scrap` | waste and recovered heat | Declare scrap classification and actual treatment/recipient. No automatic avoided-virgin credit for paper, plate or wire waste and no credit for internally recovered heat. Any system expansion belongs to a separately justified downstream study and must not duplicate waste treatment. | `eu-sts-bref-2020`; `eu-paper-bref-2015` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `p_magazine` | reference acceptance | foreground_record | job id, period, accepted copies, net accepted kg, moisture, covers, stitches, box/wrap tare, rejected kg; title/edition/issue, lot/cohort, unique first manufacturing release event/date, original Qc, opening/closing raw/WIP/new and old FG, real return/rework and dispatch IDs | Weigh accepted complete magazines on calibrated scales or reconcile traceable net weighing records. Representative copy sampling needs a measured count-to-mass record; no generic copy mass. Preserve batch totals. Establish Q_acc from unique first manufacturing quality releases only; count newly released closing FG once, opening unreleased WIP only at its first completed release, and never add old FG dispatch/reinspection/repacking or same-item returned/reworked released product. Retain original Qc and release lineage for later services under quantity preparation. | kg | each campaign and release/return event | Matched production campaign including startup/cleaning/control outages; linked prior and later cohort periods | Declared printer and actual equipment/stages | per 1 kg reference flow | Calibrated records, supplier identity/basis, raw totals, uncertainty and exclusions; unique release register and complete stock/cohort bridge |
| `cp_material` | `p_magazine` | material input | foreground_record | purchase/stock/return kg, job and colour, grade, CAS, formulation, dry/wet basis, coating, wire length/mass, reuse, supplier dataset; exchange/event and original cohort/release IDs, complete opening/closing raw/WIP/FG/return V/A/provider/gate/phase/medium/period; each packaging component P/N_ext/ER/EO, prior outward ID, owner/custody, state, mass/count conversion and all gross direction/recipient/transport/service records | Use opening + receipts - closing - returns by product/colour and stage; weigh waste/retained fractions. Preserve formulation mass and separate active-species mass. Reconcile paper and cover, plate, cotton and wire; include startup. This net-use bridge does not replace complete gross external legs or inherited vectors. Apply quantity preparation and the controlled packaging direction ledger, including paid bundles and first nonpurchase provision; carry raw/WIP/FG/real-return vectors without recharging manufacture. Keep complete unnormalized physical V and separately supported A in native units; campaign_normalization alone divides the selected manufacturing numerator by its Q_acc, with old-cohort services separately on original Qc. | kg | each receipt/job/stock and packaging movement | Matched production campaign including startup/cleaning/control outages; linked prior and later cohort periods | Declared printer and actual equipment/stages | per 1 kg reference flow | Calibrated records, supplier identity/basis, raw totals, uncertainty and exclusions; complete exchange vectors, component stocks, entry/prior-outward and recipient/transport evidence |
| `cp_energy` | `p_magazine` | power and fuel | foreground_record | stage meter readings, voltage, gas m3, T/P, wet/dry, composition, Z, provider m3, run/idle/cleaning, integrated/separate dryer/control, recovery and bypass; complete exchange V/A/provider/gate/phase/medium/period and raw/WIP/FG/return cohort vectors, actual service and embedded closing-WIP quantities | Read calibrated electricity and gas meters at matched campaign boundaries. Separate equipment and idle/make-ready where measurable; integrated common meter counted once. Preserve gas supplier-volume conversion evidence and kWh/MJ conversion. Keep every gross period meter reading; attribute actual released-cohort use separately from measured embedded closing WIP and old-cohort later services using quantity preparation. Carry prior energy vectors once, not all period energy onto current new Q_acc. Preserve unnormalized V/A in native units; campaign_normalization divides only the selected manufacturing numerator once. | MJ; m3 | continuous and campaign/service | Matched production campaign including startup/cleaning/control outages; linked prior and later cohort periods | Declared printer and actual equipment/stages | per 1 kg reference flow | Calibrated records, supplier identity/basis, raw totals, uncertainty and exclusions; meter-to-cohort/closing-WIP and original-Qc service bridge |
| `cp_water` | `p_magazine` | water balance | foreground_record | input m3, fountain dilution, washing, cooling makeup/blowdown, emulsion carrier, paper moisture in/out, condensate, vapour, combustion-generated water, stores; exchange/event and original cohort/release IDs, complete inherited V/A/provider/gate/phase/medium/source-period vectors | Meter each fresh water use and weigh/assay actual water in paper/liquids. Retain liquid/water-vapour output and reaction-water records; internal loop water is not new input. Harmonize measured density. Apply quantity preparation to complete exchange-indexed V/A/provider/gate/phase/medium/period and raw/WIP/FG/real-return cohort carryover. Keep gross native totals, closing embedded burdens and actual later original-Qc services separately; campaign_normalization divides only the supported new-manufacturing numerator once. | m3; kg | campaign and monitoring | Matched production campaign including startup/cleaning/control outages; linked prior/later cohort periods | Declared printer and actual equipment/stages | per 1 kg reference flow | Calibrated records, supplier identity/basis, raw totals, uncertainty and exclusions; complete vector/stock and original-cohort service evidence |
| `cp_waste` | `p_magazine` | external residuals | foreground_record | stream id, net kg, ink/solvent/moisture/coating, dust bins, sorted wire, receiver, waste code, treatment, containers/tare, internal return; exchange/event and original cohort/release IDs, complete inherited V/A/provider/gate/phase/medium/source-period vectors; per-component gross accompanying/empty/EO/service/waste directions, owner/custody, recipient and actual transport | Weigh each outgoing stream and obtain acceptance/transfer records. Distinguish entrained liquid from cloth and ink-on-paper from separate ink residue. Collected dust is not air emission. Track returned material internally. Apply quantity preparation to complete exchange-indexed V/A/provider/gate/phase/medium/period and raw/WIP/FG/real-return cohort carryover. Keep gross native totals, closing embedded burdens and actual later original-Qc services separately; campaign_normalization divides only the supported new-manufacturing numerator once. Apply the component-specific controlled packaging direction ledger; chemical residue and container tare remain disjoint. | kg | each consignment/campaign | Matched production campaign including startup/cleaning/control outages; linked prior/later cohort periods | Declared printer and actual equipment/stages | per 1 kg reference flow | Calibrated records, supplier identity/basis, raw totals, uncertainty and exclusions; complete vector/stock and original-cohort service evidence |
| `cp_emission` | `p_magazine` | species and controls | foreground_record | species/CAS, material source fraction, stack/room/bypass id, time, actual airflow, concentration, carbon/species basis, T/P, wet/dry, capture and destruction, NO/NO2 split, particle sizes, retention/waste carbon; exchange/event and original cohort/release IDs, complete inherited V/A/provider/gate/phase/medium/source-period vectors | Use appropriate source tests/GC speciation and flow measurements over actual operating modes, or a closed species material balance with measured retention/waste/capture/destruction. Assess uncertainty and detection limits. TVOC alone cannot supply species amounts. For each matched interval use species-mass concentration times measured exhaust volume, or integrate concentration times measured volume rate over actual duration; do not multiply an already integrated volume by duration again. Use matching wet/dry, temperature, absolute pressure and oxygen-correction conventions; a concentration or rated fan flow alone is not campaign mass. Keep startup, bypass and ventilation inlet baselines, and record carbon-to-species conversion only for an identified molecular composition. Keep unknown species as incompleteness and add verified atomic rows before dataset completion. Apply quantity preparation to complete exchange-indexed V/A/provider/gate/phase/medium/period and raw/WIP/FG/real-return cohort carryover. Keep gross native totals, closing embedded burdens and actual later original-Qc services separately; campaign_normalization divides only the supported new-manufacturing numerator once. | kg | representative modes, full campaign coverage | Matched production campaign including startup/cleaning/control outages; linked prior/later cohort periods | Declared printer and actual equipment/stages | per 1 kg reference flow | Calibrated records, supplier identity/basis, raw totals, uncertainty and exclusions; complete vector/stock and original-cohort service evidence |
| `cp_chiller` | `p_magazine` | chiller chemical mass | foreground_record | equipment/refrigerant CAS, charge, recovery, stock, additions, losses, service dates, actual installed route; exchange/event and original cohort/release IDs, complete inherited V/A/provider/gate/phase/medium/source-period vectors | Reconcile service/stock charge balance on the installed chiller. Apply quantity preparation to complete exchange-indexed V/A/provider/gate/phase/medium/period and raw/WIP/FG/real-return cohort carryover. Keep gross native totals, closing embedded burdens and actual later original-Qc services separately; campaign_normalization divides only the supported new-manufacturing numerator once. Internal charge cycling is not repeated input; no leakage default. Record documented absence if not installed. | kg | service and campaign | Matched production campaign including startup/cleaning/control outages; linked prior/later cohort periods | Declared printer and actual equipment/stages | per 1 kg reference flow | Calibrated records, supplier identity/basis, raw totals, uncertainty and exclusions; complete vector/stock and original-cohort service evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_normalization` | all inventory rows | a_i = B_i / Q_acc; B_i is the supported attributed external exchange coordinate A for newly first-released manufacture in its stated unit, including inherited opening vectors actually used once; Q_acc is cp_mass unique first manufacturing-release net kg. Finished_magazine is 1 kg. Use one complete matched reporting-period pool for the same product, grade, route, site and reference state, retaining all startup/shutdown, wholly failed or zero-output batches, rejects, WIP and rework. Sum supported attributable numerator totals before dividing once by strictly positive Q_acc; newly released closing FG counts once, old FG dispatch/reinspection/repacking and same-item return/rework add no Q_acc. Bridge every opening/use/closing raw/WIP/FG/real-return exchange V/A/provider/gate/phase/medium/source-period and cohort under quantity preparation; measured closing-WIP embedded burden remains there until later completion, not wholly on current released Q_acc, while the full period gross meters remain. Later actual services, cleanup, transport and losses of released goods are separate incremental original-cohort views divided only by the supported original Qc, with prior vectors retained and no repeated manufacture. Keep physical V unallocated and pair/cancel internal transfers; transformation is no second receipt. Never average batch ratios, omit failed/idle/cleanup activity or invent allocation shares from EPA solvent balances. Zero/unknown Q_acc or Qc retains absolute exchanges and uncertainty without division or loss of accounts; require review of unresolved attribution. | B_i; Q_acc; cp_mass | a_i | `epa-printing-eiip-2002` |
| `species_release` | solvent species | For each confirmed species j, reconcile input_j + opening_j = retained_j + waste_j + closing_j + destroyed_j + emitted_j. emitted_j comprises disjoint stack, room fugitive and bypass only; internal captured/recirculated gas is not emitted. Keep destroyed carbon for CO2/CO origin balances. | cp_material; cp_waste; cp_emission | species kg per 1 kg reference flow | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |
| `carbon_water_reconcile` | p_magazine | Maintain separate unallocated fossil/biogenic carbon and water ledgers, including paper/cover/ink/stitches product state, discarded materials, moisture evaporation, fuel/solvent destruction and measured gases. Preserve carbon in retained product and wastes; do not call destroyed solvent an avoided emission. Reaction water and combustion air belong to the physical balance, not assumed mass-loss closure. | cp_material; cp_water; cp_waste; cp_emission | physical balances and reported residuals | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `basis_identity` | all rows | Flow UUID/medium/species identity and actual supplier quantity/background compatibility are separate acceptance checks. An unresolved UUID or provider basis stays explicit, not an approximate positive match. | Supplier declarations and complete identity records |
| `full_period` | p_magazine | Same campaign/accepted mass across EN/ZH, meters, stock changes, waste and emissions; include rejects and bypass periods. Reconcile unique first releases/new closing FG, original Qc and old-FG/return later services across periods; keep every gross meter and embedded closing-WIP vector without charging it all to current released Q_acc. Zero/unknown new Q retains absolute failed/idle/cleanup and service accounts. Historical factors are not substituted for measurement. | cp_mass; cp_energy; cp_emission; release/cohort registers and complete exchange carryover |
| `speciation_completeness` | elementary rows | List actual species beyond the conditional starter rows and resolve every relevant CAS/medium with its own row. No assumed positive dodecane/toluene/IPA or zero unknown residue. Explain non-detects, missing speciation and NOx/PM basis gaps. | cp_emission |
| `balances` | physical and burden accounts | Keep paired internal transfers, unallocated material/water/carbon totals and the allocated burden ledger separately; record residual and uncertainty rather than forcing a default recipe. Check every raw/WIP/FG/real-return inherited V/A/provider/gate/phase/medium/period coordinate and original cohort. For each actual packaging component reconcile disjoint stocks, P including paid bundles, N_ext, proven same-item ER, EO and every gross accompanying/empty/service/waste/transport leg outside Q_acc; provision whole or components once, actual later services once, unknown/free provision never zero by assumption. | cp_material; cp_water; cp_emission; cp_waste; complete stock, prior-outward, provider and direction/service evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_magazine | Require exactly one complete reference output, net mass, moisture and physical construction. Intermediate signatures and shipping packaging cannot replace it; cross-stage transfers match on both ends. Verify actual issue contents, intended readers and editorial/distribution purpose against general-interest scope, retaining title, edition, issue number/date and schedule evidence; reject excluded content categories or frequency even when the physical route matches. | `pgm-magazines`; `un-cpc3-periodicals-2025` |
| `validate_emissions` | elementary rows | Validate CAS, source carbon origin, outdoor-air receiving boundary and chemical mass. Do not combine NO/NO2 with a NOx aggregate or N2O; do not sum nested PM totals or collected dust with air releases. Missing source/speciation/detection evidence is incomplete, not a pass. | `eu-sts-bref-2020`; `epa-offset-ctg-2006` |
| `validate_control` | drying and control | Check operating, startup/shutdown and bypass coverage; reconcile captured, destroyed, retained and emitted solvent/carbon. Measured stack TVOC mg C/Nm3 without speciation does not prove full LCI or zero fugitive emissions. | `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002` |
| `validate_basis` | all inventory rows | Every manufacturing amount, collection aggregation and calculation uses the same 1 kg accepted net denominator from unique first manufacturing release. Verify new closing FG once, original Qc, no extra Q from old FG dispatch/reinspection/returned rework, complete inherited exchange V/A/provider/gate/phase/medium/period through raw/WIP/FG/returns and measured closing-WIP burden carryover while gross period meters remain complete. Validate later actual services on original-cohort Qc separately, and zero/unknown-Q absolute inventories without lost failed/idle/cleanup activity. Verify per-component P/N_ext/ER/EO ownership/prior-outward tests, disjoint packaging stocks and all gross outward/return/waste/service/transport directions outside magazine Q; whole or constituent provision once, actual later increments once, no invented cycles/share/credit or free/unknown burden as zero. UUID identity does not prove complete site data. Unknown m3 basis, formulation, inherited burden or waste recipient remains explicit and prevents a complete dataset claim. | `epa-printing-eiip-2002` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after independently checked site evidence and upstream link completeness |
| downstream_use | One declared gate-to-gate foreground inventory per accepted kg with linked upstream supply/treatment; can be embedded in a separately scoped lifecycle model |
| allowed_use | Manufacturing of general-interest print magazines issued less than four times a week and matching the coated-paper heatset wire-stitched route; actual publication identity and route evidence required |
| excluded_use | CPC 32420 or 32490 applicability, full CPC 32410 coverage, online editions, publications issued four or more times a week, reading-service equivalence, other excluded routes, a background inferred from an identity UUID alone |
| required_metadata | Reference qualifiers, period/site, stocks and accepted mass, flows/properties/providers, capture/abatement/bypass, formulas, physical and allocated accounts, sources and actual waste routes |
| required_quality_disclosure | Unresolved identities and basis, speciation coverage, particle-size/NOx limitations, detection limits, unmeasured scope and uncertainty; no scientific approval inferred from tooling |
| update_trigger | Paper/cover/ink/fountain/wash/plate/wire grade change, dryer/control/fuel or chiller change, changed supplier m3/MJ basis, new species or packaging/waste route |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-sts-bref-2020` | `official_guidance` | European Commission/JRC, STS BREF 2020, chapter 11 §§11.2,11.3.1,11.3.2.4,11.3.3,11.4.1,11.4.3.2; printed pp344-375, PDF pp383-414. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf | Heatset route, separated solvent balances, thermal control, wastes and combustion monitoring; no historical virtual-plant percentages or measured default factors. |
| `epa-offset-ctg-2006` | `official_guidance` | US EPA, EPA-453/R-06-002, September 2006, §§IV-VI and VIII, printed pp6-14,18-20; PDF pp12-20,24-26. https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | Independent offset ink/fountain/wash and capture evidence; US guidance, no transplanted legal thresholds or efficiency. |
| `epa-printing-eiip-2002` | `official_guidance` | US EPA, EIIP Volume II Chapter 15, May 2002, §4.1, PDF pp31-32. https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Material-balance and measurement method selection; no default chemical recipe. |
| `eu-paper-bref-2015` | `official_guidance` | European Commission/JRC, Production of Pulp, Paper and Board BREF 2015, §§7.1.4 and 7.1.10, printed pp665,670; PDF pp703,708. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Purchased paper upstream manufacturing, broke and cutting scope; not printing-site emission factors or wood-processing evidence. |
| `pgm-magazines` | `handbook` | Poligrafijas grupa Mukusala, Magazines, official snapshot 2026-10-12, Heatset / Saddle stitched magazines / equipment headings. https://www.pgm.lv/en/services/magazines/ | Real heatset saddle-stitched magazine product and cover/paper alternatives; single producer, no universal size/grammage/run length. |
| `contiweb-ecoset` | `handbook` | Contiweb, Ecoset/T hot air dryer, official snapshot 2026-10-12, dryer/chill sections. https://www.contiweb.com/web-offset/drying-and-chilling/ecoset | Equipment illustration for afterburning/chilling, gas and silicone; no assertion installed at PGM, no marketing savings or zero-emission defaults. |
| `kodak-sonora-2026` | `handbook` | Kodak, SONORA Ultra and UltraXR Process Free Plates, brochure K-1228.26.07.13.EN.02, 2026, PDF pp4-5 process elimination and p6 technical table. https://www.kodak.com/content/pdfs/print/KODAK-SONORA-UltraXR-Process-Free-Plates-brochure-EN.pdf | Complete process-free plate example with heatset application; no manufacturer recipe or imaging-energy default. |
| `hohner-wire-stitching` | `handbook` | Hohner, Universal 43/6 S operating instructions, §§1.5,2.4,4.1-4.1.1, PDF/printed pp7,11,39. https://www.hohner-postpress.com/fileadmin/mediathek/schmalheftkoepfe/universal43-6-s/manuals/43-6S_MNL_EN_436009798_436010716.pdf | Wire stitching use, steel-wire hardware and separate oil/grease maintenance; no generic wire gauge, staple count, lubricant recipe or dose. |
| `muller-primera` | `handbook` | Muller Martini, Primera PRO, official snapshot 2026-10-12, saddle-stitcher, gathering and three-knife trimmer. https://mullermartini.com/en/product/primera-pro/ | Gathering, stitching and trimming process; no default speed/yield. |
| `un-cpc3-periodicals-2025` | `official_guidance` | UNSD, CPC Ver. 3.0 Explanatory Notes, updated 30 June 2025, printed/PDF p150, 32300 and 32410/32420/32490. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | General-interest content and publication-frequency boundary and adjacent exclusions; classification frequency is not a production or LCI default. |
| `theweek-editorial-purpose` | `handbook` | The Week, About Us, updated 22 May 2026, opening purpose paragraphs and The Week magazine section; accessed 27 October 2026. https://theweek.com/about-us | Real general-interest world-news/current-affairs reading function; content example only, no printer, machine, binding, page-count or inventory assumption. |
| `theweek-weekly-print` | `handbook` | The Week UK, official subscription page, PRINT + DIGITAL offer, weekly printed delivery statement; accessed 27 October 2026. https://theweek.com/uk/subscription | Real weekly print distribution; no production run, paper grade, lifespan or specific printer attribution. |
