---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-newspapers-and-periodicals-other-than-daily-in-print
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other newspapers and periodicals, other than daily, in print

## 1. Scope and Applicability

This category is other printed newspapers, journals and periodicals issued less than four times weekly, including periodicals devoted to specific subjects and zines. Confirm the title's actual serial publication plan, issue sequence, intended readership and residual subject category from the publisher. A zine label or an ISSN alone does not establish applicability. Exclude general-interest periodicals and business, professional or academic periodicals; exclude general reference books (including serial instalments), systematically organized contact directories, daily publications and online-only content. A single one-off artist booklet is not automatically a periodical. [unsd-cpc3-2025]

The representative technology here is a black, water-in-oil emulsion digital-stencil duplicator printing one uncoated paper sheet, followed by actual cutting/slitting and manual folding into a self-cover subject zine, without glue, metal stitches or lamination. Require the publisher to establish that the output is a serial specific-subject publication in this category. The Riso Pop workshop establishes the physical existence of single-sheet folded Riso zines, not their serial classification. RISO's manufacturer evidence establishes thermal stencil making, proofing, drum printing and emulsion-ink technology, not this publisher's production volume or recipe. These independent facts support a transparent representative route; they do not prove one named factory uses every cited product. [risopop-folded-zines; riso-sf-eii-2019; riso-emulsion-technology]

Other printing, colour and binding technologies within the category require additional route-specific methodology review under this same category identity. This authored route excludes offset coldset/heatset, toner, inkjet, gravure, UV/EB curing, multi-colour passes, separate covers, purchased printed inserts, adhesive/wire binding and on-site combustion or effluent treatment. Do not import another category's identity because its equipment is similar. Do not claim this representative method covers every technology in the leaf.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-newspapers-and-periodicals-other-than-daily-in-print |
| classification_refs | CPC 3.0 32490; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Serial specific-subject non-daily printed zines in the residual other-periodical category, with the monochrome stencil and single-sheet folded construction in section 1 |
| excluded_products | General-interest and business/professional/academic periodicals; daily and online-only publications; reference books and directories; one-off booklets without serial evidence; other routes listed in section 1 |
| representative_product | An actual issue of a continuing single-subject fanzine, printed in black on one uncoated sheet and folded with its own cover; title, topic, frequency, layout and grade collected rather than invented |
| production_route | Received unprinted sheet and composite master roll; digital imposition, thermal master making, proof/replacement, black emulsion drum printing, ambient setting, cut/slit/fold, first finished-product quality release and actual packing |
| market_state | Complete readable folded issue at first finished-product quality release, measured net moisture state, before transport packing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete readable issue of the declared serial subject zine; a manufacturing declared unit, not equal reading service across titles |
| How much | 1 kg net accepted folded zine |
| How well | Actual page order, folds/opening, readability, ink transfer/smudge acceptance and cut integrity meet the declared publisher specification; no universal acceptance limit |
| How long or cycle | Declared issue and complete production cohort through first finished-product quality release; no assumed reading or storage lifetime |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other newspapers and periodicals, other than daily, in print `1571683e-44b0-4509-ac75-a5a3f56d075c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Publisher/title/issue/seriality evidence; actual issues per week and residual subject category; readership and exclusions decision; site/period/cohort; sheet and folded dimensions/page imposition; uncoated furnish/grammage/moisture and grain; black-ink SKU/full wet formulation/carbon origins; complete master composite/SKU and used-master fate; machine/thermal master route; original/replacement/confidential masters and proof count; single-sided image layout and actual passes; ambient setting/ink-transfer acceptance; cutting/slitting/fold geometry; first-release lot ids/net mass/tare; stocks/WIP/rework/failures; low-voltage supply/provider; conditional cleaning/heat/packaging; receiving treatment; physical and allocated ledgers/uncertainty |

Declare these qualifiers in the dataset. The finished-product identity explicitly covers this category and specific-subject zines; it supplies no printing recipe or provider inventory. The adjacent next-category heading appended to its comment is not adopted as scope. Other blank identities never mean zero quantity; identity confirmation is not scientific approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_release for the net mass Q of newly produced lots at their first finished-product quality release. Include retained paper, ink and moisture; exclude transport packing, rejects and previously released stock. |
| sheet_master_basis | paper; master | Mass | kg | Collect count, dimensions, actual grammage and independently measured mass/tare under cp_material and cp_master. Sheet area or master count is a cross-check, not a default conversion; roll core and end fittings are not stencil web mass. |
| mixture_basis | ink_black; cleaner; wastewater | Mass | kg | Preserve whole supplied or exported mixture mass. Constituent/species mass uses actual full wet-mass fractions and measured water; solids and non-water mass are different. Volume requires compatible measured density and temperature. |
| energy_basis | electricity; room_heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh, convert electrical energy by 1 kWh = 3.6 MJ, and record delivered room heat separately. This quantity convention does not assert a boiler or a fuel input. |
| particle_basis | pm_fine; pm_middle; pm_coarse | Mass | kg | Report disjoint aerodynamic size intervals using matching concentration/air-volume/time bases. Captured dust and indoor circulating dust are not additional outdoor releases. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unprinted uncoated sheets, complete composite master roll and supplied black emulsion ink received at the printing studio; complete upstream supply nodes retained |
| starting_condition_role | intermediate_input |
| product_classification_scope | CPC 3.0 32490 only, restricted to section 1's representative serial zine construction and technology |
| recursive_input_rule | Refeeding a sheet, replacing a master and internally reworking a fold are internal operations, not new external product purchases. An externally supplied already printed issue needs its real supplier history and separate review; never recursively charge this complete method to its own sheet transfer. |
| upstream_dataset_requirement | Actual compatible paper manufacture/furnish, stencil-composite manufacture, emulsion formulation and cartridge supply, electricity, water, conditional heat/cleaner/tissue/box, inbound transport and each receiving waste treatment; one actual provider per purchase |
| disclosure | Report complete gross stage/stock accounts, supply and waste boundaries, operating/idle/cleanup time and uncertainty. Editorial content creation, delivery to readers, reading and end of life lie outside this manufacturing unit. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stencil | zine | Include file imposition and any scanning used for this issue, thermal master creation/loading, every proof and remade/confidential master, drum printing, actual idle setting, slitting/cutting/folding, acceptance and cleanup. An unused proof consumes paper, ink and power even if the issue fails. | riso-sf-eii-2019; risopop-folded-zines |
| boundary_chemistry | ink_black; master | Purchased emulsion and composite master are whole manufactured inputs with upstream manufacture. Their internal ingredients are composition ledgers, not duplicate purchases. No offset fountain, aluminium plate, blanket wash or toner is implied. | riso-emulsion-technology; riso-sf-eii-2019 |
| boundary_utilities | zine | Meter low-voltage electricity for file preparation, master making, proofing, print, standby, extraction and any powered cutting/packing. Separately retain attributable room services. This route has no process dryer, fuel burner or oxidiser; actual on-site combustion requires a separately reviewed combustion node, not a zero-emission omission. | riso-sf-eii-2019 |
| boundary_receivers | residues | Distinguish collected spent master, ink, tissue, cartridge/core and aqueous cleaning streams from actual outdoor emissions. A supplier's disposal description does not select incineration or grant recovery credits; actual receiver and transport are required. | riso-sf-eii-2019; epa-eiip-printing-2002 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| zine | Stencil-print and fold serial subject zine | required | Section 1 construction; conditional individual exchanges only when actually present | Aggregate foreground unit with separate stage and stock ledgers | per 1 kg reference flow |

Stage records distinguish sheet receipt, digital imposition, thermal stencil and proof/reproof, production printing, ambient setting, cut/slit/fold and release/packing. Retain paper/ink retained in drum, active master, unprinted stock, printed WIP, spoiled sheets, finished goods and returns at both period ends. Internal transfers match mass/state/time at both ends; none is a second reference output. The single-sheet route needs no separately purchased cover or binding material. Extra colours or glued/stapled construction require route review, not fictitious zero rows.

Quantity preparation for every card below distinguishes new production from continued accepted cohorts. Q includes only each new lot's first quality release, including newly released closing finished goods once. Opening already-released finished goods, genuine customer returns and reinspection/rework do not create Q. Preserve their original issue, cohort, release event and first-release net Qc, with the complete exchange-indexed physical V and attributed burden A vectors: native quantity/unit, provider and whole/component boundary, gate, stage, state/phase, medium and original period. Carry raw, WIP, finished and returned stock provenance across periods without replacing inherited vectors by current averages or repeating manufacture. Attribute actual later repacking, reinspection, rework, wash/repair, transport, cleanup and losses to the original cohort as separately dated incremental exchanges once. Any continued-cohort or later-service view uses original positive Qc separately from new-production Q; the per-1-kg cards below describe new production only. Unknown Qc or inherited V/A remains unknown and requires review; Q = 0 never erases absolute inventories or actual old-cohort services. Ordinary reader delivery remains outside the manufacturing boundary.

### Process: Stencil-print and fold serial subject zine (`zine`)

#### Inputs

##### Product flows

###### Uncoated sheet (`paper`)

Actual unprinted absorbent uncoated graphic-paper sheet, including the self-cover. Collect supplier furnish, recycled content, grain, grammage, moisture and net sheet mass. The retained broad paper candidate classifies wood-free paper; do not infer wood-free furnish from the zine's printing route. The selected physical sheet remains UUID-unresolved until actual furnish and provider match.

- Selected flow: Uncoated printing paper sheet
- Flow property / unit: Mass / kg
- Amount rule: Record attributable consumption per 1 kg reference flow using cp_material and the once-only division of the attributable raw cohort amount by Q; retain gross receipts, returns and stock movements separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `riso-sf-eii-2019`; `risopop-folded-zines`

###### Composite stencil (`master`)

One supplied thermal digital-duplicator stencil web composite. Obtain its actual plastic/fibrous support/coating specification rather than calling it pure rice paper, PET film or offset plate. Track roll changes, unused web, tails, initial/replacement and confidential masters, active master retained on the drum and complete roll/core tare separately. No assumed masters per issue or copies per master.

- Selected flow: Thermal digital-duplicator composite stencil web
- Flow property / unit: Mass / kg
- Amount rule: Record attributable stencil-web consumption per 1 kg reference flow using cp_master and the once-only division of the attributable raw cohort amount by Q; core and package mass remain separate physical records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_master`
- Sources: `riso-sf-eii-2019`

###### Black emulsion ink (`ink_black`)

One actually supplied black water-in-oil digital-duplicator ink formulation. Require full water, plant/petroleum oil, pigment, emulsifier and other actual ingredient fractions, CAS/UVCB specification and carbon origins. SDS hazardous ingredients alone are insufficient. Weigh net ink and drum/cartridge opening/closing residuals; purchasing a cartridge is not proof all its ink was consumed. Its manufacturing/cartridge background is linked once; carbon black, vegetable oil and formulation water are not second purchases.

- Selected flow: Black water-in-oil digital-duplicator emulsion ink
- Flow property / unit: Mass / kg
- Amount rule: Record attributable whole-ink consumption per 1 kg reference flow using cp_ink and the once-only division of the attributable raw cohort amount by Q; retain whole and constituent accounts separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ink`
- Sources: `riso-emulsion-technology`; `riso-sf-eii-2019`

###### Low-voltage electricity (`electricity`)

Purchased alternating-current supply at the actual low-voltage studio meter. Include master-making thermal head, computer/scanner, proof/run/standby, ventilation and actual powered finishing. Installed rating times advertised throughput is not measured job energy. The selected identity is CN grid-average customer-side supply below 1 kV; use it only for compatible actual voltage/geography/provider/period/loss boundaries. Other supplies remain unresolved; a 1-35 kV flow cannot substitute.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record attributable delivered electricity per 1 kg reference flow using cp_energy, the measured kWh-to-MJ conversion and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `riso-sf-eii-2019`

###### Purchased water (`water`)

Conditional actual treated liquid tap-water addition for approved cleaning. No separate fountain water is inherent in stencil printing; water already in the purchased emulsion stays in that ink's composition ledger. Meter actual additions and distinguish retained tissue water, collected wastewater and evaporation. The selected broad treated-process-water identity has a Mass reference and no fixed treatment recipe; require actual tap quality, treatment, geography and provider. A Hong Kong water-plant record or a viscose-use record with an ecosystem-toxicity reference property is not substituted.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Record attributable fresh-water input per 1 kg reference flow using cp_water and the once-only division of the attributable raw cohort amount by Q; convert volume only with measured compatible density.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `riso-sf-eii-2019`

###### Supplied room heat (`room_heat`)

Conditional actual externally supplied hot-water space-heating service attributable to the occupied production room. Meter delivered thermal energy and disclose supply/return convention, occupied times and actual causal share. No process heating or positive heat requirement is imposed; electric room heating remains within electricity and is not purchased again here.

- Selected flow: Purchased hot-water space-heating energy
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record actual attributable delivered room heat per 1 kg reference flow using cp_energy and the once-only division of the attributable raw cohort amount by Q; documented absence is not an estimated zero load.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `riso-sf-eii-2019`

###### Cleaning tissue (`wipe`)

Conditional actual cellulose tissue used on the roller/platen. Record dry supplied tissue, reuse, retained ink/cleaner and as-discarded mass separately. The manufacturer permits soft cloth or tissue; this representative consumable card is tissue only. A different actual cloth needs its own audited material/recipient exchange, not substitution by raw cotton.

- Selected flow: Cellulose cleaning tissue
- Flow property / unit: Mass / kg
- Amount rule: Record attributable fresh tissue consumption per 1 kg reference flow using cp_material and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `riso-sf-eii-2019`

###### Aqueous cleaner (`cleaner`)

Conditional one actual equipment-approved aqueous touch-panel cleaner formulation. Obtain the full supplied formula, water fraction, actual application and operating instructions. This card does not impose solvent cleaning: the manufacturer prohibits alcohol/solvent on the exterior. No offset wash, invented surfactant or dosing rate substitutes for the actual product.

- Selected flow: Aqueous touch-panel cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Record attributable whole-cleaner consumption per 1 kg reference flow using cp_material and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `riso-sf-eii-2019`

###### Dispatch box (`box`)

Conditional actual complete corrugated box used for this issue, including its manufactured adhesive. Collect actual mass, fibre composition, reuse/ownership and supplier packaging boundary. Do not adopt fixed primary/recycled fibre shares, a box per copy or separately purchase imaginary box constituents. Any actually added tape or band needs its own specific card before dataset completeness.

For each actual atomic packaging component, classify external inward events exclusively as purchased P (including packaging paid within the goods price without a separate invoice), first external nonpurchase provision N_ext (borrowed, leased, entrusted or supplied with goods), or genuine same-item external return ER evidenced by that item's prior outward movement. First nonpurchase entry without prior outward proof is N_ext, not free reuse or ER. Opening stock and internal circulation are not new external provision. Preserve the original owner/custody/cohort and complete prior V/A/provider/gate/state/medium/period vector; an unknown prior burden is not zero. Use cp_pack for all gross movements, stocks and actual incremental services, without invented reuse counts, lifetimes or credits.

- Selected flow: Corrugated paperboard dispatch box
- Flow property / unit: Mass / kg
- Amount rule: Record the new-production cohort's actual box material per 1 kg reference flow using cp_pack and one division by its positive Q. Retain gross P, N_ext, ER and EO quantities and stock movements without burden shares; old-cohort packaging and actual later service remain on their original Qc account, never current Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `risopop-folded-zines`

##### Waste flows

No waste input is prescribed for this received-unprinted-sheet route. Internally reused proof sheets are internal transfers; external recovered or already printed inputs need distinct supplier and applicability review.

##### Elementary flows

No direct environmental resource withdrawal is prescribed. Purchased water and electricity are product inputs, not elementary extraction duplicates.

#### Outputs

##### Product flows

###### Qualified folded issue (`finished`)

One complete monochrome serial subject zine at first finished-product quality release, with retained ink and measured moisture, excluding transport packing. A proof, merely printed flat sheet, stored already released issue or second acceptance after rework is not new reference output. The selected manufactured finished-periodical identity has the matching category and includes specific-subject zines; the narrower physical route and first-release state remain mandatory qualifiers, not an inferred generic background.

- Selected flow: Other newspapers and periodicals, other than daily, in print `1571683e-44b0-4509-ac75-a5a3f56d075c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `unsd-cpc3-2025`; `risopop-folded-zines`

###### Box accompanying dispatch (`dispatch_box`)

Conditional physical corrugated box leaving with issue lots, distinguished by new-production or already-released original cohort. Its mass excludes the contained zines and is not part of Q. Keep every gross attached dispatch, empty external return and service outward leg as mutually exclusive EO events, separate from waste; ER never nets them away. Reconcile all cp_pack opening/closing stocks; purchased boxes remaining in stock are not all dispatched. Only attached dispatch belongs to this card; other actual packaging/service/waste exchanges retain their own atomic records. This output is packaging, not a second reference product.

- Selected flow: Corrugated paperboard dispatch box
- Flow property / unit: Mass / kg
- Amount rule: Record actual gross box mass dispatched with the new-production cohort per 1 kg reference flow using cp_pack and one division by its positive Q. Preserve every EO leg separately from ER and waste; old-FG dispatch and later service stay on their original Qc account without another finished output or current-Q normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `risopop-folded-zines`

##### Waste flows

###### Rejected paper (`paper_waste`)

One actually collected outgoing paper stream containing proofs, spoiled printed sheets and cut/slit trim where co-collected. Weigh net wet stream and retained ink/moisture; identify receiver and contamination acceptance. Separate different receiver streams when present. Internal reused sheets, separately captured fine dust and master composite are excluded from this paper stream.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Record actual external paper-waste mass per 1 kg reference flow using cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-sf-eii-2019`; `risopop-folded-zines`

###### Used stencil (`spent_master`)

One used thermal composite master stream from the disposal box, including actual retained ink and water. Keep master web, roll/core, paper proofs and free ink residues distinct. Neither bare paper recycling nor aluminium-plate recycling identifies this ink-contaminated composite; disposal-box emptying is not evidence of combustion at the studio.

- Selected flow: Ink-contaminated used thermal duplicator stencil
- Flow property / unit: Mass / kg
- Amount rule: Record actual external whole used-master mass per 1 kg reference flow using cp_master, cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-sf-eii-2019`

###### Removed black emulsion (`waste_ink`)

Conditional separately collected bulk black duplicator-ink residue. Collect its actual water/solid/oil composition and receiving treatment. Ink remaining on master, tissue, discarded cartridge or paper is a constituent of those whole streams, not repeated here. Offset-specific waste ink is not assumed compatible.

- Selected flow: Waste black digital-duplicator emulsion ink
- Flow property / unit: Mass / kg
- Amount rule: Record separately removed whole-ink residue per 1 kg reference flow using cp_ink, cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-emulsion-technology`; `riso-sf-eii-2019`

###### Used tissue (`spent_wipe`)

Conditional one collected cellulose-tissue stream with actual retained ink, water and cleaner. Weigh the whole outgoing contaminated tissue, not only dry cellulose. Do not duplicate absorbed liquid as wastewater or bulk ink. Retain actual receiver/hazard determination rather than assigning it from a generic database comment.

- Selected flow: Ink-contaminated cellulose cleaning tissue
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole contaminated-tissue mass per 1 kg reference flow using cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-sf-eii-2019`

###### Collected cleaning liquid (`wastewater`)

Conditional actual physically liquid aqueous cleaning batch transferred to an external treatment operator. Measure whole wet mass, water fraction, independently determined solids and organic composition/density/temperature. Non-water mass is not automatically dry solids. No direct water-body discharge is represented; on-site treatment requires a separately reviewed node and actual pollutant/carrier-water exchanges.

- Selected flow: Aqueous digital-duplicator cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole outgoing cleaning liquid per 1 kg reference flow using cp_water, cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-sf-eii-2019`; `epa-eiip-printing-2002`

###### Depleted cartridge (`empty_cartridge`)

Conditional whole depleted black-ink cartridge assembly actually discarded, with label/cap and retained emulsion. The manual allows more than one cartridge polymer; do not assume pure PP or PE. A refill/return remains a paired stock/return transfer until it actually leaves; any separately removed material becomes its own specific exchange, not an additional whole-cartridge count.

- Selected flow: Depleted black duplicator-ink cartridge assembly
- Flow property / unit: Mass / kg
- Amount rule: Record actual discarded whole assembly per 1 kg reference flow using cp_pack, cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-sf-eii-2019`

###### Depleted master core (`empty_core`)

Conditional complete depleted master-roll core assembly actually discarded, with its actual fittings, label and unused residual web. Confirm components from the supplied SKU. Keep usable closing web and active drum master in stock; neither counts as discarded core. If components are physically separated at the reporting boundary, replace the assembly exchange with disjoint measured component streams.

- Selected flow: Depleted duplicator-master roll-core assembly
- Flow property / unit: Mass / kg
- Amount rule: Record actual discarded whole core assembly per 1 kg reference flow using cp_master, cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-sf-eii-2019`

###### Captured paper dust (`collected_dust`)

Conditional one actually collected paper/ink dust waste stream from feeding and cutting/folding. Weigh collected mass, moisture, composition and recipient separately from airborne size fractions and paper rejects. No wood-process dust factor or default generation rate applies.

- Selected flow: Captured paper-and-ink cutting dust
- Flow property / unit: Mass / kg
- Amount rule: Record actual captured externally removed dust per 1 kg reference flow using cp_air, cp_residue and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `riso-sf-eii-2019`

##### Elementary flows

###### Net evaporated water (`water_air`)

Actual water vapour reaching outdoor air, unspecified subcompartment, CAS 7732-18-5. Reconcile emulsion/paper/cleaner water with product, drum stocks, tissue and liquid waste, plus matched inlet/outlet humidity. Neither all ink water nor all purchased water is automatically emitted; unchanged ambient humidity is not process-added evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual net process-added water vapour per 1 kg reference flow using cp_water and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `riso-emulsion-technology`

###### Fine particles (`pm_fine`)

Conditional actual outdoor release at or below 2.5 micrometres aerodynamic diameter from this route, including evidenced fugitive loss. Identify paper/mineral/ink composition and disjoint capture versus escape. Indoor concentration or an emission-factor analogy alone is not the site-boundary quantity.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual outdoor fine-particle mass per 1 kg reference flow using cp_air and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `riso-sf-eii-2019`; `epa-eiip-printing-2002`

###### Middle particle interval (`pm_middle`)

Conditional outdoor particles above 2.5 and up to 10 micrometres aerodynamic diameter. Only compatible concurrent cumulative measurements may be differenced; retain uncertainty and flag a negative residual instead of clipping it. Do not add cumulative PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual outdoor middle-interval particle mass per 1 kg reference flow using cp_air and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `riso-sf-eii-2019`; `epa-eiip-printing-2002`

###### Coarse particles (`pm_coarse`)

Conditional actual outdoor particles above 10 micrometres aerodynamic diameter. Measured captured cutting dust is a waste, not this air release. Match sampling time, air volume, temperature/pressure and dry/wet convention; missing size coverage remains explicit.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual outdoor coarse-particle mass per 1 kg reference flow using cp_air and the once-only division of the attributable raw cohort amount by Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `riso-sf-eii-2019`; `epa-eiip-printing-2002`

This is not a declaration that these four elementary rows exhaust actual emissions. Full actual ink/cleaner chemistry and measurements must identify any organic vapour, aerosol constituent or other important release, with one verified atomic row for each actual species/medium before a complete dataset claim. Unknown petroleum fractions are not assigned to a convenient alkane, to total VOC as a species, or to zero. No fuel-combustion gases are invented for the selected electrically operated equipment.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | zine | First subdivide by issue/cohort and stage. Directly attribute masters, proofs, ink, remake/cleaning and measured energy to their causing jobs, including failed jobs. For remaining shared loads, substantiate causal time/load/occupancy drivers; only then use a documented physical allocation with sensitivity, or justified economic allocation if physical causation cannot be established. No universal shares. | riso-sf-eii-2019 |
| allocation_ledgers | all inventory rows | Preserve gross unallocated material, water, carbon, energy, waste and stock accounts separately from the attributed environmental-burden ledger. Burden shares never scale physical co-products, outgoing waste or paired internal links. Attribute a common provider once; do not add a second stencil/ink ingredient background to its whole-product purchase. | epa-eiip-printing-2002 |
| allocation_recovery | residues | Internal sheet reuse is not a co-product or a second released zine. Paper sale, cartridge return and core recovery do not automatically earn substitution credits. Retain actual receiver treatment and ownership; any expanded system or co-product choice needs explicit study-specific justification without double counting treatment. | riso-sf-eii-2019 |

These are declared LCA accounting rules for this method; the equipment manual does not itself prescribe LCA allocation. The EPA chemical-fate balance is not evidence for an LCA allocation policy. Document actual causal allocation evidence separately; do not invent prices or shares, clip negative fees/residuals to zero, or award automatic return/recovery credits.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | zine | finished | foreground_record | title/issue/cohort; lot id; original first release event and net Qc; new first-release Q including new closing FG; net/gross/tare kg; moisture; copy count; page/fold/ink acceptance; opening/closing raw/WIP/new and old finished/returned goods; dispatch/returns/rework/rejects; complete exchange-indexed inherited V/A with native unit/provider/boundary/gate/stage/state/phase/medium/original period; later-service event/cohort/period | Weigh complete folded accepted lots on calibrated scales; subtract measured transport tare. Link each lot's first quality release once, including new closing FG once. Reconcile counts to measured mass without an assumed copy weight. Previously released stock, genuine returned copies and repeated rework acceptance do not create Q or another manufacture. Preserve their original issue/release/Qc and complete inherited vectors through each stock transfer; unknown inheritance stays unknown. Record actual later service/loss increments once on that original cohort, with any service view divided separately by known positive Qc, never unrelated current Q. | kg | each release, stock/service event and period close | Complete declared new cohort and separately dated original accepted cohorts | Declared title, route, site and reference moisture state | per 1 kg reference flow | Scale calibration, unique release log, original Qc/vector provenance, physical stock and acceptance/service records |
| cp_material | zine | paper; wipe; cleaner | foreground_record | SKU/lot; supplier; net/gross/tare; full composition; paper furnish/grain/grammage/moisture/area; cleaner formula/density/temperature; opening/receipts/returns/closing; stage issue/unused return; WIP | Weigh and reconcile each actual supplied product independently. Record proof, remake, setting, cutting and fold losses. Count whole cleaner once; keep formulation fractions separately. Retain raw unnormalized material and cohort burdens, including opening/closing WIP carry-forward. | kg | each lot/issue and period close | Same cohort including failed and cleanup activity | Received supplies and every actual stage | per 1 kg reference flow | Calibrated weights, supplier specification, complete formula, matched stock ledger |
| cp_master | zine | master; spent_master; empty_core | foreground_record | roll SKU/composite; gross/web/core/fittings tare; opening/closing usable web; active drum master; original/replacement/confidential master ids; proof/reproof; unused tails; wet spent mass/retained ink | Measure actual web use and cores by tare/weighing; reconcile master-event counters with roll change and used-master collection. Do not assume one master per issue or constant mass per master. Keep retained active master and ink in stocks, not outgoing waste. | kg; count as cross-check | each master event/roll change/period close | Full same-cohort master preparation and disposal | Actual machine/drum and disposal box | per 1 kg reference flow | Event log, SKU composition, scale/tare records and used-master reconciliation |
| cp_ink | zine | ink_black; waste_ink | foreground_record | cartridge/SKU/lot; net ink/tare; full wet ingredient fractions/CAS/UVCB/carbon origins; receipts/returns; opening/closing drum/cartridge ink; paper/master/tissue/waste retained fractions | Obtain complete supplied formulation, weigh delivered and retained ink and reconcile all fates. Distinguish emulsion water from purchased cleaning water. A manufacturer ingredient family is not a full recipe or default emission/retention factor. | kg | each cartridge/job/period close | Same cohort, including idle deterioration, proofs, remakes and failed jobs | Actual black drum and ink provider | per 1 kg reference flow | Supplier full composition, calibrated net/tare weights, fate analyses and uncertainty |
| cp_energy | zine | electricity; room_heat | foreground_record | actual supply voltage/provider/time; start/end stage meters; kWh/MJ; master/print/standby/cleanup; computer/extraction/finishing; shared occupancy/load; heat supply/return; excluded boiler boundary | Use calibrated boundary/submeters and matched time/load observations. Keep electrical and delivered heat quantities separate and include attributable idle/failed/cleanup loads. Do not use nameplate maximum power or advertised copies per minute as consumption. | kWh; MJ | operating modes and whole period | Complete matched production/idle/cleanup period | Studio supply and shared room boundary | per 1 kg reference flow | Meter logs, voltage/provider records and causal shared-load reconciliation |
| cp_water | zine | water; wastewater; water_air | foreground_record | actual added water; volume/density/temperature; paper/ink/cleaner water; drum/stock/WIP/product moisture; spent tissue/master; outgoing liquid; inlet/outlet humidity/airflow | Weigh/meter actual additions and sample actual water content in retained/exported material. Derive net process-added evaporation from compatible water balance or matched humid-air measurements, retaining uncertainty; no assumption that all emulsion water immediately evaporates. | kg; measured m3 if converted | additions/sampling/period close | Same cohort and matched water/air interval | Entire declared material and air boundary | per 1 kg reference flow | Meter/calibration, moisture/density methods, ambient baseline and residual balance |
| cp_pack | zine | box; dispatch_box; empty_cartridge | foreground_record | atomic assembly/component id/material/unit/mass/count/tare; owner/custody/deposit/original cohort; P/N_ext/ER inward event and same-item prior outward proof; supplier-included packaging/provider boundary; inherited exchange-indexed V/A/provider/gate/stage/state/phase/medium/period; disjoint opening/closing empty-awaiting-decision, reusable-ready, raw-attached, WIP-attached, new-FG-attached and old-FG-attached stocks; gross EO attached dispatch/empty external return/service outward and separate waste; internal paired legs; actual wash/repair/transport/loss/service records; retained ink | Weigh each actual assembly. P is genuine purchase including packaging already paid within the goods price without a separate invoice; N_ext is first external nonpurchase borrowing/lease/entrustment/with-goods provision; ER requires evidence of the same item's prior outward movement. Classify each inward event once; opening stock/internal circulation is none of these. EO outward categories and waste are disjoint; preserve every gross leg and actual transport, never net ER against EO. Each stock item occupies one physical state/location; reusable status never adds another mass. Retain original owner/cohort and complete inherited vectors, with unknown prior burden explicit. Count compatible whole manufacture or disjoint component providers once, plus actual later wash/repair/transport/loss/service increments once; no free nonpurchase assumption, invented cycles/lifetime or credit. Reconcile new/old-cohort packaging separately from zine net mass and Q/Qc. Preserve cartridge packaging carried by the purchased whole-ink background exactly once, plus its physical return/waste fate. Add actual extra tape/band/wrapper individually. | kg | each inward/outward/internal/service event and period close | Original owner/issue/cohort and separately dated packaging/service periods | Supply ownership, all stock states, studio boundary and every external gate | per 1 kg reference flow | Receipts/bundled-price or nonpurchase custody evidence, same-item outward/return chain, original cohort vectors, calibrated tare, gross transport/service records and stock balance |
| cp_residue | zine | paper_waste; spent_master; waste_ink; spent_wipe; wastewater; empty_cartridge; empty_core; collected_dust | foreground_record | stream id/phase; whole wet mass; water/solids/ink/composite composition; density/temperature when liquid; collection/opening/closing; receiver/transport/treatment; retained constituents | Weigh disjoint whole external streams with composition samples and receiver records. If physically combined before gate, record one actual mixture and retain internal component transfers; do not count both. No generic hazard or recycling assumption; closing residues remain stock, not exported waste. | kg | each collection/consignment and period close | Same cohort, cleanup and all residue stocks | Actual source stage and external receiver | per 1 kg reference flow | Transfer manifests, analyses, calibrated weights, actual receiver acceptance and uncertainty |
| cp_air | zine | pm_fine; pm_middle; pm_coarse; collected_dust; actual additional species | foreground_record | actual species/CAS/phase/carbon origin; size intervals; inlet/outlet concentration and measured volume; time/T/P/wet-dry; controls/fugitive paths; captured/deposited/returned mass; limits/uncertainty | Match species-resolved concentration to simultaneous air volume or integrate measured flow rate over time. Correct inlet baseline; avoid counting integrated volume twice with duration. Assess ink/cleaner constituents and actual aerosols beyond these starter rows; unresolved important fractions prevent an exhaustive inventory claim. | kg | representative real modes and complete interval integration | Same cohort with proofing, idle, cleanup and failures | Outdoor boundary after controls plus actual fugitives | per 1 kg reference flow | Sampling chain, calibration/blanks, speciation/size methods, measured flow/time and detection limits |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_quantity | finished | Q = sum(net kg of new lots at first finished-product quality release), including newly released closing FG once whether dispatched or retained. Preserve original issue/cohort/release and its original first-release net Qc for already-released FG and genuine returns. Opening/closing FG, dispatch, returns, downgrades and moisture changes have separate physical reconciliation; old FG, sales, returns and repeated rework release never create Q or repeat manufacture. | cp_release | New-production Q in kg; separately retained original Qc in kg | risopop-folded-zines |
| period_normalization | all inventory rows | For new production only, v_i = V_i / Q for strictly positive Q. V_i is the unallocated physical exchange of the selected new cohort in its declared native unit; burden shares never scale it. Separately normalize that cohort's attributed/allocated A by Q; A does not replace V_i or the original provider-labelled receipt vector. For shared loads retain the full common physical meter and causally identified cohort uses, then allocate only burdens with justified evidence. Sum raw new-cohort totals including setup, proofs, replacement masters, cleanup, idle and wholly failed zero-output lots before dividing once; never average lot ratios. Include opening WIP's complete carried inventory once and retain closing WIP's measured embedded V/A for later completion, without forcing all burden onto completed units. For already-released FG, genuine returns and rework, continue the original issue/release/Qc and complete exchange-indexed V/A/provider/whole-component boundary/gate/stage/state/phase/medium/original-period vectors through raw/WIP/FG/returned stocks; no current-average substitution or repeated manufacture. Assign actual later repacking/reinspection/rework/wash/repair/transport/cleanup/loss increments once to that original cohort with their actual periods. A separately reported continued-cohort/service view divides the original cohort's continued vector or separately identified service increment by original positive Qc, never current new Q; disclose which view is reported and do not add inherited manufacture twice. Internal rework enters Q only on first final release; old FG and returns never create Q. When Q = 0 retain absolute new-production/idle/failed/cleanup accounts and require review; real old-cohort services remain on original Qc. Unknown Qc or inherited burden remains unknown, with absolute service/stock accounts retained and no invented normalized value. | cp_release; cp_material; cp_master; cp_ink; cp_energy; cp_water; cp_pack; cp_residue; cp_air | New-production physical v_i per 1 kg reference flow and separate burden; original-Qc continued/service views and complete stock vectors | epa-eiip-printing-2002 |
| energy_conversion | electricity | Delivered electrical MJ = metered kWh * 3.6. Preserve voltage, provider and loss boundary; count common meter and submeter totals only once before period_normalization. | cp_energy | electrical MJ before normalization | riso-sf-eii-2019 |
| physical_stock_balance | zine | For each stage/storage account and conserved component on one measured state/unit basis: closing = opening + external_in + internal_in - external_out - internal_out + reported_residual. external_in/out cross the whole declared foreground boundary; internal_in/out cross only its stage/storage boundaries. Pair each internal transfer's source and destination at identical component mass/state/time; summing all accounts cancels the two internal legs, leaving closing_total = opening_total + external_in_total - external_out_total + residual_total. External outputs include disjoint product, waste and environmental fates. Residual is the calculated closing-minus-accounted discrepancy, not an exchange or a source; disclose it without adjusting observations. No receipt or same-state transfer is formation. For actual chemical species transformation, separately evidence paired stoichiometric formation/consumption while conserving elemental mass; evaporation is a water-state transfer, not water creation. Preserve gross raw provider-labelled receipts and returns; no burden share or Q changes this physical equation. For each atomic packaging component and owner/cohort: closing_total = opening_total + P + N_ext + ER - EO - external_waste + residual_total. P/N_ext/ER are mutually exclusive inward events; EO sums disjoint gross new/old-FG attached dispatch, empty external return and service outward events, once and separate from waste. ER requires same-item prior outward evidence; internal paired transfers cancel. Opening/closing stocks distinguish empty-awaiting-decision, reusable-ready, raw-attached, WIP-attached, new-FG-attached and old-FG-attached locations without overlapping mass. Preserve count/mass conversion, gate/state/provider, original owner/cohort V/A and each actual transport leg; no burden shares scale gross quantities. Later wash/repair/transport/loss increments enter the original account once, never another manufacture or zine Q. Whole/component providers cannot overlap, including whole-ink cartridge coverage. | cp_material; cp_master; cp_ink; cp_water; cp_pack; cp_residue; cp_air; cp_release | Unallocated stage/stock and consolidated component balances with measured residuals | epa-eiip-printing-2002 |
| composition_fates | ink_black; cleaner; spent_master; waste_ink; spent_wipe; wastewater; empty_cartridge | Constituent kg = whole-mixture kg * actual wet-mass fraction. Close supplied formulation fractions with uncertainty and reconcile opening + receipts against product retention, outgoing waste, emissions and closing stocks. Keep carrier water, dry solids and organic species distinct; uncertain residual is not a measured emission or a second purchase. | cp_material; cp_master; cp_ink; cp_water; cp_residue; cp_air | Disjoint raw constituent and carbon/water fates | riso-emulsion-technology; epa-eiip-printing-2002 |
| measured_air_mass | pm_fine; pm_middle; pm_coarse | For matching intervals, mass kg = sum(species or interval concentration in mg/m3 * measured air volume in m3) / 1000000, with matched T/P/wet-dry basis and inlet correction. Use disjoint size intervals; cumulative PM10 minus concurrent PM2.5 gives only the middle interval. Do not invent a size split or equate workplace concentration to outdoor emission. | cp_air | Raw outdoor kg before period_normalization | epa-eiip-printing-2002 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| category_identity | finished | Establish seriality, actual frequency and residual subject category independently of equipment, broad UUID or another accepted PCR edge. Boundary uncertainty between general-interest, professional and other periodicals requires review. | Publisher publication plan, issue history, intended readership and content-category decision |
| core_materials | paper; master; ink_black; finished | Resolve reference identity and full actual material composition without substituting conflicting route/form/furnish records. Retain specific identity gaps; missing primary identity or a hard physical conflict requires explicit review. | Official native identity/property/unit records and actual supplier/publisher specifications |
| period_integrity | all inventory rows | Reconcile new first-release Q including new closing FG once, complete zero-output/idle/failed/cleanup activity and opening/closing raw/WIP/FG/return/residue stocks. Preserve original issue/release/Qc and complete inherited exchange V/A/provider/boundary/gate/stage/state/phase/medium/period vectors; unknown remains unknown. Later service/loss belongs once to that original cohort and any service view uses original positive Qc separately; no current averages, unrelated Q or repeated manufacture. | cp_release and stage/cohort/stock ledgers with original Qc, complete vector provenance and separately dated actual service records |
| provider_once | all purchased rows | Match actual supply state, voltage, geography, property/unit and provider boundary once; whole formulations and composite packaging include upstream manufacture without overlapping constituent providers. Verify packaging P including bundled-price purchase, first nonpurchase N_ext and same-item evidenced ER, disjoint EO/waste and every gross transport/service leg. Nonpurchase is not free; preserve original owner/cohort vectors and disjoint cp_pack stocks, actual wash/repair increments and whole-ink cartridge background once without invented cycles or credit. | Supplier data/reference basis, bundled-price/custody and prior-outward evidence, complete inherited V/A, paired physical/burden accounts and gross stock/transport/service records |
| chemistry_air | ink_black; cleaner; elementary outputs | Complete supplier formulation and actual fate/species assessment required; partial SDS, low-odour claims and regulatory total VOC do not establish zero or species-complete emissions. No Riso-specific factors are supplied. | Full formulation, cp_ink, cp_water, cp_air, receiver analysis and quantified uncertainty |
| translation_context | all inventory rows | Preserve ordered rule ids, whole amount objects, process/direction/type, reference denominator and full H2/ancestor conditions in both languages; UUID-bearing names use official Chinese baseName. | Both Markdown renderings, generated projection and field-level author audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_category | finished | Check publisher evidence against the category exclusions and selected stencil/fold construction. Similar paper-processing equipment never admits another CPC product under this identity. | unsd-cpc3-2025; risopop-folded-zines |
| validate_denominator | all inventory rows | Require one finished reference row at 1 kg, linked by finished; match EN/ZH denominator, raw aggregation and once-only normalization. Verify new closing FG enters Q once; old FG/returns/rework never create Q. Require original issue/release/Qc and complete inherited exchange V/A/provider/boundary/gate/stage/state/phase/medium/period vectors; later actual service/loss stays on original cohort and any service view uses known positive Qc separately. Reject current-average substitution, charging old service to new Q, repeated manufacture, ignored zero-output/idle/failed/cleanup accounts and unexplained WIP/FG/return differences; retain unknowns and absolute accounts. | riso-sf-eii-2019 |
| validate_stencil | master; spent_master; ink_black; paper_waste | Reconcile original/replacement masters, proof/remake sheets, residual drum ink, collected composite masters and paper waste separately. No constant stencil yield, ink dose, spare-part life or zero evaporation is presumed. | riso-sf-eii-2019; riso-emulsion-technology |
| validate_completeness | zine | Report performed, skipped and unresolved checks separately from identity success. Unknown reference/primary identity, full formula, important site quantity/species or receiver remains explicit and prevents a complete applicable dataset claim. Ordinary auxiliary identity gaps alone do not establish a global methodology hold. Assess every actual additional consumable, container, part, service and release with its own atomic exchange before claiming complete site coverage. | epa-eiip-printing-2002; riso-sf-eii-2019 |
| validate_ledgers | all inventory rows | Keep gross physical mass/water/carbon/energy accounts and allocated burdens distinct, with paired internal legs cancelling. Check packaging closing = opening + P + N_ext + ER - EO - external_waste + residual on each component/owner/cohort basis: inward classes exclusive, ER same-item prior outward proven, EO categories and waste exclusive, all gross legs/actual transport retained, cp_pack stocks disjoint and complete. Count compatible whole or disjoint component manufacture and actual wash/repair/service increments once; preserve unknown prior burden, original owner/cohort vectors and whole-ink cartridge inclusion. Reject free nonpurchase, netted-away legs, invented reuse counts/credits, duplicate manufacture or new Q. No summed nested PM totals, automatic recovery credit, invented prices/shares or clipping negative fees/residuals. Preserve source scope and uncertainty; EPA fate balances do not authorize LCA allocation. | epa-eiip-printing-2002 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate unit-process methodology for producing a site inventory; not measured plant data |
| downstream_use | secondary_dataset or background_dataset only after actual applicability, identities, quantities and compatible upstream/receiver links are independently checked |
| allowed_use | The declared monochrome digital-stencil single-sheet folded serial subject zine within CPC 3.0 32490 |
| excluded_use | Whole-leaf/all-technology coverage; other CPC products; equal reading-service claims; a complete lifecycle or complete site inventory inferred from tooling success |
| required_metadata | All reference qualifiers; unique cohort and first-release Q; raw and carried WIP/FG/return records; master/ink composition; supply/receiver boundaries; physical and allocated accounts; source limits |
| required_quality_disclosure | Core/auxiliary identity gaps, identity evidence period and any unavailable verification, formulation/species/quantity coverage, detection limits, uncertainty and independent review state |
| update_trigger | Changed serial subject/category, sheet/furnish, stencil/ink chemistry, colour/passes, folding/binding, utility/cleaning/packaging/provider, new emission or treatment; retain this category identity for a revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p150 and reference books/directories pp148-149. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundary only, including specific-subject zines and frequency; no process quantities, recipe or printing route imposed. |
| risopop-folded-zines | handbook | Riso Pop, Riso Folded Zine Workshop, first-party page, retrieved 2026-10-27. https://www.risopop.com/workshops?category=zine+making | Existence of single-sheet folded Riso zines only. Workshop output does not prove serial publication, residual subject category, black ink, production scale or a measured LCI. |
| riso-sf-eii-2019 | handbook | RISO, SF EII Series User's Guide, 065-36003, 2019. https://us.riso.com/wp-content/uploads/2019/08/UsersGuide_9450_ENG-RI-US-redux.pdf | Printed pp15-16/PDF17-18 paper/dust context; p25/PDF27 master/proof/print; pp137-145/PDF139-147 consumables; pp148-150/PDF150-152 maintenance. Equipment-specific process/material evidence; no default yields, compositions, power consumption, emissions or local disposal route. |
| riso-emulsion-technology | handbook | RISO, Ink Development Technology, For RISOGRAPH section, retrieved 2026-10-27. https://www.riso.co.jp/english/tech_portal/core/ink.html | Water-in-oil emulsion and separation/setting mechanism, distinct from ComColor inkjet. No full black-ink recipe, retained/evaporated fraction, marketing CO2 savings or universal emission factor adopted. |
| epa-eiip-printing-2002 | official_guidance | US EPA, EIIP Volume II Chapter 15, May 2002, section 4.1, PDF31-32. https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | General material-balance/measurement method caution only, used by analogy to audit actual chemical fates. No claim that its offset/other-print factors characterize digital stencil or that its regulatory VOC convention is a full LCI. |
