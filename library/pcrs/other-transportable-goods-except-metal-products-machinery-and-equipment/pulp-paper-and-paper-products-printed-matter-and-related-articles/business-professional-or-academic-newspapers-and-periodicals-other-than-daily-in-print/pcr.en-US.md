---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.business-professional-or-academic-newspapers-and-periodicals-other-than-daily-in-print
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Business, professional or academic newspapers and periodicals, other than daily, in print

## 1. Scope and Applicability

The product boundary is a physical business, professional or academic newspaper, journal or periodical published less than four times a week. Scientific and medical journals are included. Printed general reference works, serial dictionary/encyclopaedia instalments, contact-information directories, professional monographs, general-interest publications, other subject periodicals, online editions and blank writing journals are excluded by product purpose, not by whether they share a printing machine. A journal's volume/issue, continuing title and professional readership must be evidenced independently of binding or its marketing name. The classification definition establishes no material quantity. [un-cpc3-32420]

This independently selected representative method is one monochrome professional/academic periodical issue, conventionally sheetfed wet-offset printed on purchased coated paper, with a self-cover of the same stock, folded/nested signatures, steel-wire saddle stitching and final trim. It is a transparent bounded construction, not a claim that every product in the leaf is made this way or that a named publisher uses this exact configuration. Publishing evidence explains plate/blanket transfer, imposition and signatures; EPA distinguishes sheetfed absorption/oxidation from heatset web drying; first-party bindery evidence supports wire stitching through the fold. [chicago-journal-production; epa-printing-eiip-2002; newman-saddle-stitching]

The selected case receives separately prepared ready-to-print aluminium plates, uses oil-based black paste ink and wet dampening, and includes pile setting/drying, folding, signature sequence verification, wire stitching, trim, acceptance and dispatch packing. No on-site press coating, laminate, glue binding, thermal web dryer, UV/EB curing, fuel combustion, purchased process heat or refrigeration plant is assumed. Installation records must establish this case. Coloured printing, separate cover stock, adhesive/hardcase/thread binding, coldset/heatset webs, gravure, digital printing and other configurations need reviewed additions within this same identity before use; they cannot inherit completeness from this representative inventory. Editorial/research work, subscriptions, digital hosting and reader distribution/use/end-of-life are outside the manufacturing node. [epa-offset-ctg-2006]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.business-professional-or-academic-newspapers-and-periodicals-other-than-daily-in-print |
| classification_refs | CPC 3.0 32420; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Physical non-daily professional/academic serial issues matching the monochrome coated-sheet self-cover wet-offset and wire-saddle-stitched construction |
| excluded_products | General reference books including serial instalments, directories, monographs, blank notebooks, online-only content, general-interest/other periodicals and the other constructions in section 1 |
| representative_product | A declared professional or academic serial issue with black text/grayscale figures, self-cover, nested signatures and wire stitches; no default pagination, format, grammage, run length or frequency within the category |
| production_route | Supplied coated paper and prepared plates; wet sheetfed offset, pile setting, folding/nesting, issue/sequence control, saddle stitching, trim, first acceptance and packing |
| market_state | Complete readable issue at printer gate; net mass includes self-cover, retained ink/powder, stitches and moisture; excludes transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture complete professional/academic serial issues of the declared title, volume, issue and physical construction |
| How much | 1 kg net newly accepted complete issues |
| How well | Contracted legibility, grayscale reproduction, edition/issue identity, complete correct page sequence, signature nesting, trim and stitch integrity; declare actual acceptance criteria, not universal thresholds |
| How long or cycle | A fixed reporting period for this title/issue/construction and site through first quality release; no assumed reading life or reading-service equivalence |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Business, professional or academic newspapers and periodicals, other than daily, in print `40eab261-c65d-482a-8a05-d13cfa6f35f8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Title/ISSN if assigned; business/professional/academic purpose; actual frequency less than four weekly; volume/issue/edition and page map; site/period; coated sheet stock, fibre/coating/grammage/moisture; monochrome oil-based wet sheetfed route and prepared-plate provider; sheet imposition/formes/signatures/duplex passes; self-cover; measured accepted net mass/tare; wire alloy/coating/diameter and stitch count; complete ink/fountain/wash/powder formulas; actual utilities; first-release/rework/WIP/FG ledgers; packing ownership/returns; waste receivers; actual emitted species; allocation and uncertainty |

The selected UUID identifies the finished physical business/professional/academic non-daily periodical category, with Mass/kg and an explicit less-than-four-weekly definition. It supplies neither a route-specific journal-production background nor site quantities or classification-mapping acceptance. The declared representative construction and every qualifier remain required; the product is not changed to fit the identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_acceptance measures Q, net complete issues first released in the period; include their stitches, self-cover, retained constituents and actual moisture. Exclude shipping tare, inserts outside this construction, rejects, opening finished stock and repeat release of the same item. |
| sheet_mass | paper; paper_waste | Mass | kg | cp_materials records net sheet mass. Area times measured grammage may cross-check it only for the same grade/moisture and measured sheets; page count is not sheet count, and imposed blank/trim areas remain material. |
| electricity_units | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the native electrical-energy convention and compatible supply boundary; 1 kWh = 3.6 MJ. This property does not turn electricity into fuel or purchased useful heat. |
| mixture_basis | ink; fountain; wash; powder; maintenance_oil; maintenance_grease | Mass | kg | Retain whole supplied-mixture mass and complete measured/certified constituent fractions separately; water, solids and active substance are distinct bases. Components of one purchase are not additional purchases. |
| air_species | ipa_air; ethanol_air; pm25; pm2510; pm10; water_air | Mass | kg | Report actual species/size-interval mass to outdoor air. Match concentration and volume conditions; do not equate TVOC carbon mass with a solvent, indoor exposure with emission, or nested PM totals with disjoint fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unprinted coated sheet paper, ready-to-print imaged/coated aluminium plates and supplied consumables received at printer gate |
| starting_condition_role | intermediate_input |
| product_classification_scope | Sole CPC 3.0 32420 identity; representative monochrome sheetfed self-cover saddle-stitched subset, not all technologies in the leaf |
| recursive_input_rule | Internal signatures, return sheets, rework and recirculating fountain liquid stay internal. Externally supplied printed sections need explicit supplier/history and a reviewed boundary extension, not recursive reuse of the finished-issue reference. |
| upstream_dataset_requirement | Compatible paper manufacture including pulp/coating, complete plate preparation including imaging/development, every actual material/utility, inbound transport and receiving waste treatment; match physical state, provider gate, geography, time and reference quantity |
| disclosure | Declare outsourcing and shared services, installed equipment, utility boundaries, exclusions, missing evidence, opening/closing stock and actual operating modes; supplier identity is not proof of full route coverage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | journal | Include receipt/tare, issue/forme preflight, make-ready and plate changes, both-side sheet printing, wet dampening, pile setting, cleaning, folding/nesting, stitching/trim, first release and packing. Keep imposition/plate-preparation burdens at the actual provider once. | epa-printing-eiip-2002; chicago-journal-production; newman-saddle-stitching |
| boundary_utilities | journal | Account for drives, compressors, extraction, pile drying/ventilation, folders/stitchers/trimmers, cleaning and common services over run, idle, failed lots and shutdown. Verify no combustion, purchased process heat or refrigeration in this case; if present, extend reviewed atomic input/emission/stock records before completeness. | epa-offset-ctg-2006 |
| boundary_transfers | journal | Aggregate physical stages into one foreground node while retaining paired equal mass/state/time transfers and stage stocks. Count a material, provider service or waste crossing once; internal circulation is neither a fresh purchase nor a disposal credit. | epa-printing-eiip-2002 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| journal | Professional/academic issue sheetfed printing and saddle-stitch finishing | required | Selected section 1 construction; conditional cards require actual occurrence evidence | foreground | per 1 kg reference flow |

Physical stages are paper/plate receipt -> issue/edition and imposition check -> make-ready/duplex sheetfed printing and pile setting -> folding/nesting -> wire stitching/three-side trim -> first quality release -> packing/FG storage. Record each forme and signature against the issue's page map, blank pages, creep/trim allowance and covers. Wrong issue/sequence, missing/duplicate signatures, scuffed unset sheets and failed stitches go to rework/reject accounts rather than accepted output. Self-cover is part of the same stock; there is no second cover-paper purchase. No default waste allowance, ink coverage or stitch mass follows from pagination. [chicago-journal-production; newman-saddle-stitching]

For each material/component/species account k at stage s, use the same state and unit on both sides of each internal leg: S_close(s,k) = S_open(s,k) + R_external(s,k) + T_in(s,k) + F(s,k) - T_out(s,k) - O_external(s,k) - C(s,k). S is actual stock including WIP; R_external is only a receipt across the whole foreground gate; O_external is disjoint final product, return, waste or outdoor release across that gate. T_out(s,k) = T_in(t,k) for each paired transfer to stage t, with matching identity/state/unit/time. A same-state warehouse-to-press transfer is T, never a second R_external or formation F. F/C record only evidenced actual species/state transformation, paired to reactant/product accounts and reaction evidence; for conserved total material mass F = C = 0. Real oxygen uptake or other boundary reactants require measured external inputs, not invented formed mass. After summing stages, internal T legs cancel: sum(S_close - S_open) = sum(R_external - O_external + F - C). Apply this combined equation only to the aggregated journal node; preserve stage discrepancies instead of cancelling unrelated states. Electricity retains its independent energy account, not a material-formation term.

Physical stock/transfer amounts do not assign environmental burdens. Carry the original provider burden vector on its actual receipt and traceable WIP/return cohort once; an internal transfer carries that vector without a new provider purchase. The attribution/allocation ledger is derived separately, with evidence of causal shared-service use. Previously accepted returned/reworked issues retain their original cohort denominator, not a new Q; never-released WIP can enter Q only on its first release, with documented carried burden and no duplicate original purchase. Record an unnormalized Q0 pool until defensible cohort attribution is resolved. This original-cohort rule also covers unreworked, unreturned opening/old FG receiving later packing, inspection, storage or other actual service. For each exchange retain its original physical vector V and separate burden attribution A, including original numerator unit, provider/background and prior foreground exchanges, gate, state/phase/medium, period and owner/cohort. Do not multiply V by an A share. A continued-cohort view carries that complete prior vector once and adds only actual subsequent service exchanges; a service-only view identifies the same prior vector by reference and reports only the service increment, without claiming a new manufacture.

Every nonreference card records the unallocated period exchange X_i in the stated numerator unit and uses its named collection protocol and normalize_period. Each card's X_i/Q expression applies to its matched new-manufacture pool; it never directs later old-FG service into an unrelated current new-Q pool. For every such service, whether or not returned/reworked, normalize the actual cohort-attributable increment by that cohort's original valid Qc in kg, retaining its original basis and complete prior exchange vector. A service-only or continued view uses that same Qc, or an explicitly justified reviewed service basis disclosed separately; it creates no new first-release Q. Keep gross physical totals before attribution and the separate attributed burden results. If Q, Qc, prior vectors or service attribution are unresolved, retain the relevant absolute inventory for review rather than dividing, dropping activity or assuming zero; current Q = 0 does not invalidate an evidenced positive original Qc. Conditional absence needs evidence; unknown is not zero. This is a collection method, not measured factory data.

### Process: Professional/academic issue manufacture (`journal`)

#### Inputs

##### Product flows

###### Coated sheet stock including self-cover (`paper`)

Unprinted coated sheets of one actual stock; retain supplier pulp/fibre, coating, sheet size, grammage and moisture, net receipt mass and pallet/wrap tare. Broad coated-paper identity does not require on-press varnish or establish a mill recipe. Paper manufacture/coating remains in its compatible upstream node.

- Selected flow: coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: X_paper/Q for the fixed reporting period; net stock use reconciled by cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `chicago-journal-production`

###### Black sheetfed offset paste ink (`ink`)

One purchased black oil-based paste formulation, suitable for absorption/oxidation setting. Native flat-ink identity is broad, not a colour/SKU or complete formulation. Record pigment, petroleum/vegetable vehicles, binder/resin, driers, waxes and other actual ingredients with CAS/UVCB and carbon origin. Whole ink is one purchase; constituent balances do not duplicate it as chemical purchases. No colour coverage or retention percentage is prescribed.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass / kg
- Amount rule: X_ink/Q for the fixed reporting period; cp_formulas includes all starts, washups and failed formes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulas`
- Sources: `epa-offset-ctg-2006`

###### Supplied prepared aluminium printing plate (`plate`)

One imaged/coated, ready-to-print wet-offset plate received from the actual prepress provider. Record dimensions, coating, net mass and issue/forme/side reuse. Include substrate, coating, imaging, developer/rinse where used and their wastes at that supplier once. Bare aluminium, polystyrene PS plate and a combined files/plate service cannot replace this physical assembly.

- Selected flow: Prepared imaged aluminium wet-offset printing plate
- Flow property / unit: Mass / kg
- Amount rule: X_plate/Q for the fixed reporting period; weighed issue/forme changes and consumed stock under cp_consumables.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `chicago-journal-production`; `epa-printing-eiip-2002`

###### Fountain concentrate (`fountain`)

One supplied wet-offset concentrate SKU with full water/gum/resin/acid/buffer/wetting-agent and other actual constituents. Record dilution, additions, pan/loop stocks and purge. No assumed IPA or glycol recipe; any separately purchased dosing chemical requires its own audited card. Premix water/solvent is not a second purchased exchange.

- Selected flow: Wet-offset fountain-solution concentrate
- Flow property / unit: Mass / kg
- Amount rule: X_fountain/Q for the fixed reporting period using cp_formulas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulas`
- Sources: `epa-offset-ctg-2006`

###### Blanket/roller wash (`wash`)

One actual hydrocarbon-based supplied cleaning formulation; require full solvent/UVCB/additive/water composition, batch and blanket compatibility. Capture manual and automatic cycles, colour/forme changes and shutdown. Inkjet printhead cleaner is incompatible; an unidentified oil fraction is not pure heptane or a zero emission.

- Selected flow: Hydrocarbon-based offset blanket and roller wash formulation
- Flow property / unit: Mass / kg
- Amount rule: X_wash/Q for the fixed reporting period using cp_formulas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulas`
- Sources: `epa-offset-ctg-2006`

###### Purchased process water (`water`)

External liquid water for dampening dilution and washing; retain supplier treatment/quality and measured density/temperature if converting volume. This Mass/kg product is not elementary abstraction, a Hong Kong tap-water provider, or an assumed universal water density. Internal pan circulation and water already in a formulation are not new receipts.

- Selected flow: Process water `d8ad9111-4304-46fb-bc23-9a2f36d65a83`
- Flow property / unit: Mass / kg
- Amount rule: X_water/Q for the fixed reporting period using cp_utilities; reconcile formulation and paper water in cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-printing-eiip-2002`

###### Delivered grid electricity (`electricity`)

Native identity is China grid-average 1-35 kV consumption supply, Net calorific value/MJ. Use only compatible site supply; other countries/voltages need another verified identity. Meter run/make-ready/idle/cleaning, compressor/extraction and all finishing/packing loads; internal compressed air is not also purchased air. No UK technical source establishes a Chinese factory quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: X_electricity/Q for the fixed reporting period after kWh-to-MJ conversion; cp_utilities retains kWh and supply boundary.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-printing-eiip-2002`

###### Saddle-stitch steel wire (`wire`)

Actual iron/non-alloy steel wire formed through the nested signature fold. Measure wire mass/length with actual diameter/coating/alloy, retained staples, offcuts and rejected stitches. The generic steel-wire record does not select a coated-wire supplier or a staple mass; other alloys are outside this conditional identity.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: X_wire/Q for the fixed reporting period using cp_consumables; no count-only mass default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `newman-saddle-stitching`

###### Composite transfer blanket (`blanket`)

One purchased rubber/textile-backed offset blanket assembly, conditional on actual replacement/consumption. Record construction and any metal backing, net mass, opening/closing installed stock and reuse. No bedding or paper-machine-felt proxy; no assumed lifetime.

- Selected flow: Composite rubber-textile offset printing blanket
- Flow property / unit: Mass / kg
- Amount rule: X_blanket/Q for the fixed reporting period using cp_consumables, including stock/service reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `epa-printing-eiip-2002`

###### Cotton wiping fabric (`cloth`)

Conditional confirmed cotton textile makeup for press cleaning; record dry fabric mass, laundering and returns separately from retained solvent. No raw-cotton or water-treatment-cloth substitute. A different fibre/composite requires its own card.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass / kg
- Amount rule: X_cloth/Q for the fixed reporting period using cp_consumables; reused cloth is not a fresh purchase every cycle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `epa-offset-ctg-2006`

###### Anti-setoff powder (`powder`)

Conditional one starch-based supplied spray-powder preparation for sheet piles. Establish actual composition/particle size, additions, product retention, collected dust and airborne loss; do not impose use or substitute pure starch for a formulated product. Absence needs installed-press and product records. Verify compatibility with actual duplex/multiple passes: the manufacturer's hydrophobic starch variant is not suitable for multiple passes; sugar and calcium-carbonate alternatives do not inherit this selected material identity.

- Selected flow: Starch-based sheetfed anti-setoff spray-powder preparation
- Flow property / unit: Mass / kg
- Amount rule: X_powder/Q for the fixed reporting period using cp_formulas and actual fate records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulas`
- Sources: `heidelberg-powder-2010`

###### Dispatch box (`box`)

Conditional whole corrugated box for dispatch, excluded from net journal mass. Record actual fibre recipe/grade, tare, stock, receipt, issue, return, retained packing on closing FG and loss. No fibre-ratio-specific box UUID is adopted without a match. Customer-owned packaging is physically recorded with ownership rather than silently omitted or charged twice. Apply cp_packaging and packaging_balance to distinguish first purchased entry P (including paid bundled supply without a separate invoice), first external non-purchased entry N_ext and evidenced same-item external return ER. Free or borrowed supply is not zero burden or internal reuse. Follow normalize_period for later packing of old FG; retain its original cohort rather than assigning that service to current new output.

- Selected flow: Corrugated paperboard dispatch box
- Flow property / unit: Mass / kg
- Amount rule: X_box/Q for the fixed reporting period using cp_packaging; distinguish purchased contents/tare, opening stock and supplier-included packaging burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `chicago-journal-production`

###### Maintenance oil (`maintenance_oil`)

Conditional one actually supplied machine lubricating oil formulation; retain petroleum/synthetic base, additives, grade, installed charge and measured service use. A hard calorific-value or route restriction is not waived by recording mass. No automatic combustion or oil-loss fraction.

- Selected flow: Formulated printing-machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: X_maintenance_oil/Q for the fixed reporting period using cp_consumables; separate installed stock and exported used oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `epa-printing-eiip-2002`

###### Maintenance grease (`maintenance_grease`)

Conditional one actual machine grease, including base oil, thickener and additives. Grease is not liquid oil; weigh application and replacement against installed stocks and retained/removed fates without a universal maintenance interval.

- Selected flow: Formulated printing-machine lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: X_maintenance_grease/Q for the fixed reporting period using cp_consumables.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `epa-printing-eiip-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Newly accepted complete issues (`finished`)

Exactly one reference output: the complete correct professional/academic issue after page/issue, stitch and print acceptance, including self-cover, retained constituents and wire. Net first-release output Q includes accepted issues still in closing FG and excludes opening FG dispatch. This category-specific finished-product identity does not supply a journal-production background or approve its classification mapping. Internal signatures/rework are not additional reference outputs.

- Selected flow: Business, professional or academic newspapers and periodicals, other than daily, in print `40eab261-c65d-482a-8a05-d13cfa6f35f8`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc3-32420`; `chicago-journal-production`

##### Waste flows

###### Exported paper spoilage and trim (`paper_waste`)

One separately weighed outgoing paper-waste stream, including actual imposition/trim loss and rejected signatures, with ink/coating/moisture. Remove separately sorted wire and keep collected dust separate. Different recipients or compositions require separate exchanges; internal reusable sheets remain stocks, not outgoing waste. There is no default recycling credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: X_paper_waste/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `newman-saddle-stitching`; `epa-printing-eiip-2002`

###### Spent coated plate (`spent_plate`)

Whole spent aluminium plate with measured retained coating/ink/water and receiver acceptance. Bare aluminium scrap does not automatically identify this contaminated assembly; plate preparation waste at the provider is not duplicated here.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: X_spent_plate/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-printing-eiip-2002`

###### Spent fountain liquid (`spent_fountain`)

One actual externally removed aqueous fountain-purge mixture, including dissolved additives, ink and solvent. Keep wet whole-liquid mass, density/temperature, water-specific fraction and independently assessed solids. Internal recirculation is not purge. If it joins another liquid before exit, use one outgoing combined-stream card and retain internal constituent records, not two external quantities.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Amount rule: X_spent_fountain/Q for the fixed reporting period using cp_residues; off-site receiving treatment is required.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-offset-ctg-2006`

###### Spent cleaning liquid (`spent_wash`)

One physically liquid hydrocarbon wash stream with its whole ink/solvent/water/solids mass, measured density/temperature and actual receiver. Retained wash in cloth, separately removed ink and emitted solvent are disjoint fates. This is not direct river discharge or a dry-solids quantity.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Amount rule: X_spent_wash/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-offset-ctg-2006`

###### Spent composite blanket (`spent_blanket`)

Conditional whole worn rubber/textile blanket with coating/metal/ink/solvent contamination actually present, reused or sent to a named receiver. Not pure rubber waste, and not an assumed replacement every issue.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: X_spent_blanket/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-printing-eiip-2002`

###### Contaminated cotton cloth (`spent_cloth`)

Conditional whole exported solid cotton wipe with absorbed ink/wash/water; record clean textile and retained liquid independently inside the whole stream. Laundry/return is a service loop with actual makeup and receiver, not one-way disposal on every use.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: X_spent_cloth/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-offset-ctg-2006`

###### Collected paper/powder dust (`collected_dust`)

One actual captured solid dust stream with measured fibre/coating/ink/powder/moisture composition, stock/return and external receiver. This physically collected mixture is not an airborne elementary emission or kiln ash. If collectors export different streams, split them rather than assume one composition.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: X_collected_dust/Q for the fixed reporting period using cp_dust.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `epa-printing-eiip-2002`

###### Stitch-wire offcuts (`wire_waste`)

Actual segregated wire/offcut and rejected staple stream, with alloy/coating, contamination and receiver. Retained staples in rejected whole journals must be sorted/weighed or retained in that composite waste, never counted in both.

- Selected flow: Segregated saddle-stitch steel-wire scrap
- Flow property / unit: Mass / kg
- Amount rule: X_wire_waste/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `newman-saddle-stitching`

###### Collected black ink residue (`waste_ink`)

Only separately collected residual black paste; measure composition/physical state and receiver. Ink already on paper, in liquid/cloth or on the spent plate is not this additional exchange.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass / kg
- Amount rule: X_waste_ink/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-offset-ctg-2006`

###### Discarded corrugated box (`waste_box`)

Conditional actual discarded corrugated box after return/reuse decisions. Record contamination and receiver, and distinguish incoming supplier wrap from dispatch boxes and packaging on closing FG. Returned boxes are paired custody/stock transfers, not waste.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: X_waste_box/Q for the fixed reporting period using cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `chicago-journal-production`

###### Removed used oil (`spent_oil`)

Conditional separately collected liquid maintenance oil with actual water/contamination and receiver. Oil retained in cloth, installed equipment or grease is excluded from this stream; no automatic energy-recovery route.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: X_spent_oil/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-printing-eiip-2002`

###### Removed used grease (`spent_grease`)

Conditional separately collected spent grease including thickener/oil and contamination. It is distinct from liquid oil and grease retained on wiping material or machinery.

- Selected flow: Separately collected used printing-machine lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: X_spent_grease/Q for the fixed reporting period using cp_residues.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-printing-eiip-2002`

##### Elementary flows

###### Isopropanol to outdoor air (`ipa_air`)

Conditional CAS 67-63-0 emission only when actual formulation/analysis confirms it; no separate IPA purchase is assumed. Outdoor air, unspecified subcompartment, species mass; occupational indoor concentration is insufficient. Other actual solvents need independent atomic cards, not total VOC allocated to IPA.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: X_ipa_air/Q for the fixed reporting period after species-resolved concentration/volume calculation using cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-offset-ctg-2006`

###### Ethanol to outdoor air (`ethanol_air`)

Conditional CAS 64-17-5 only when actual concentrate/wash composition or analysis identifies ethanol. Species mass to outdoor air, unspecified subcompartment, not an assumed ingredient or total organic-carbon emission. Record fossil/biogenic origin for any transformation ledger.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: X_ethanol_air/Q for the fixed reporting period after species-resolved concentration/volume calculation using cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-offset-ctg-2006`

###### Fine outdoor particles (`pm25`)

Actual escaped particles up to 2.5 micrometres aerodynamic diameter from handling, ink mist, spray powder or finishing. Outdoor air, unspecified; measure composition, collector state and fugitive escape. Collected dust and indoor recirculating particles are separate fates.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: X_pm25/Q for the fixed reporting period using cp_dust; no generic paper/wood factor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `epa-printing-eiip-2002`

###### Middle outdoor particle interval (`pm2510`)

Actual escaped particles above 2.5 and up to 10 micrometres aerodynamic diameter to outdoor air, unspecified. Compatible cumulative PM10 minus PM2.5 may establish this interval with uncertainty; do not also add cumulative PM10 as another exchange.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: X_pm2510/Q for the fixed reporting period using cp_dust and nonoverlapping aerodynamic-size calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `epa-printing-eiip-2002`

###### Coarse outdoor particles (`pm10`)

Actual escaped particles above 10 micrometres aerodynamic diameter to outdoor air, unspecified. A total-minus-PM10 difference requires identical monitoring conditions; unknown coarse fraction is not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: X_pm10/Q for the fixed reporting period using cp_dust and nonoverlapping aerodynamic-size calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `epa-printing-eiip-2002`

###### Process-added water vapour (`water_air`)

CAS 7732-18-5 water vapour reaching outdoor air, unspecified; reconcile water in paper/formulations, dilution, product moisture, residues, stocks and measured air humidity. Retain gross inlet/outlet moisture separately; unchanged ambient humidity is not generated process water. Liquid effluent is not vapour.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: X_water_air/Q for the fixed reporting period using cp_water; uncertainty and unresolved reaction/stock terms remain explicit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-printing-eiip-2002`

These are specific starter exchanges, not a closed catalogue of every possible factory material or pollutant. Record every actual additional supply wrapping/core/pallet, chemical container/filter/part, fuel/heat/refrigerant, separate dosing chemical, adhesive/colour, wastewater stream and emitted species as its own reviewed card before claiming completeness. Track composition and ownership at receipt; returned containers retain paired stock/return records. A supplier background may already include packaging manufacture: reconcile that boundary once while preserving the actual foreground packaging/waste mass. Direct environmental discharges require actual receiving medium/species, not a waste-treatment transfer label.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_cause | journal | First subdivide by issue/forme/stage and attribute measured paper, ink, plates, cleaning and wire to actual jobs. For shared electricity/extraction/maintenance use measured load-time, actual impressions/passes, wash cycles or demonstrated causal service use before a justified allocation; no default revenue/copy/mass share. Record evidence and sensitivity when causality cannot be resolved. | epa-printing-eiip-2002 |
| allocation_ledgers | journal | Maintain gross physical material/water/carbon/energy balances, stocks and equal internal links separately from attributed/allocated environmental burdens. Do not multiply physical waste or transfer quantities by burden shares. Apply the selected burden attribution once, then the sole applicable cohort-denominator normalization under normalize_period, including original Qc for later old-FG service; do not successively divide each stage/lot. | epa-printing-eiip-2002 |
| allocation_residuals | journal | Paper, wire or plate resale is not automatic co-product status or an avoided-virgin credit. Internal return and recovered service remain internal; require explicit receiver, method and study-boundary evidence for any separately reviewed allocation/system expansion. | epa-printing-eiip-2002 |

These are author-designed LCA accounting requirements informed by physical process and material-balance evidence; the sources do not prescribe journal-specific LCA allocation shares.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | journal | finished | foreground_record | title/ISSN; frequency; volume/issue/edition; lot/item identity; first-release date; gross/tare/net kg; moisture; copies; page/signature map; print/trim/stitch acceptance; opening/closing FG; dispatch/returns; original owner/cohort/Qc/basis; complete prior exchange V/A/provider/gate/state/phase/medium/period vectors; actual later services and attribution | Calibrated net weighing or traceable weighed lots of complete accepted issues. Reconcile first-release identifiers against stocks and dispatch; copy sampling requires actual same-configuration mass and uncertainty. Wrong issue/sequence or incomplete binding cannot pass by mass alone. Trace all later old-FG service, including unreturned packing/inspection, to original Qc and complete prior foreground/background vectors; distinguish service-only increment from continued-cohort view without new manufacture or first release. | kg | each lot and first release | complete fixed period including zero-output lots and rework | same title/issue/construction and printer | per 1 kg reference flow | signed acceptance, calibrated weighings, issue/page checks, original-cohort/Qc/vector evidence, later-service attribution and FG ledger |
| cp_materials | journal | paper | foreground_record | supplier/grade; coated sheet size; fibre/coating; grammage/moisture; receipt gross/tare; opening/closing unused and stage WIP; sheets issued/returned; forme/side/pass; trim/blank area; rejects/rework; provider | Weigh net stock and stage transfers; reconcile count-area-grammage against actual moisture and imposition. Include all makeup and failed runs. Distinguish stage transformation from a new receipt; same self-cover stock crosses purchase boundary once. | kg; m2; sheets | receipt/forme and period boundaries | complete same period | receipt, press, pile setting, folding and finishing | per 1 kg reference flow | scale and grammage/moisture tests, supplier specification, imposed sheet/page map |
| cp_formulas | journal | ink; fountain; wash; powder | foreground_record | actual SKU/lot; full constituent CAS/UVCB/mass fractions/water/solids/carbon origin; density/T; receipt/stock/return; measured dose; pan/wash/powder stocks; retention/residue/emission | Weigh supplied mixtures and dose records; obtain full formulas including nonhazardous constituents omitted from SDS. Reconcile complete fractions, stock and disjoint fates; do not invent generic acid/solvent/powder recipes. | kg | each batch/change/wash | make-ready, runs, failed lots, idle, cleanup and shutdown | actual press and suppliers | per 1 kg reference flow | full composition certificates, balance records, analytical methods/uncertainty |
| cp_consumables | journal | plate; wire; blanket; cloth; maintenance_oil; maintenance_grease | foreground_record | assembly/grade; issue/forme/side; plate area/net mass/coating/imaging provider; wire alloy/coating/diameter/length/mass/stitches; replacement/service/installed stock; oil/grease full grade/formula; fabric reuse/laundry | Weigh assemblies and actual consumed/replaced makeup, retain installed and stores stocks, paired reuse/laundry and receiver records. Wire counts/length convert only with actual measured compatible mass data. Record outsourced plate preparation once. | kg; m; count | receipt/change/service and period | complete same period and attributed service interval | press, fold/stitch/trim and actual supplier/laundry | per 1 kg reference flow | scales, component specifications, service logs, plate-provider boundary and uncertainty |
| cp_utilities | journal | electricity; water | foreground_record | meters/boundaries; kWh; country/voltage/grid/provider; run/idle/makeup/cleanup loads; compressor/extraction; water kg/volume/density/T/source/treatment; actual heat/fuel/refrigeration presence | Read calibrated supply/stage meters at matched boundaries. Preserve raw kWh and water basis. Meter or causally attribute common services with full run/idle/failed/cleanup coverage; rated power times advertised output is not measurement. | kWh; MJ; kg | matched readings and interval modes | complete same period | whole journal node and actual shared services | per 1 kg reference flow | calibrated meters, equipment/supply diagrams, source/voltage/provider evidence |
| cp_packaging | journal | box; waste_box | foreground_record | component/item identity; actual material/grade/state; owner/custodian/cohort; original unit and measured quantity conversion; acquisition/payment/bundled-paid evidence; P/N_ext/ER classification; same-item prior outward record; complete prior V/A/provider/gate/state/phase/medium/period vectors; supplier-included burden; gross/tare/net contents; mutually exclusive opening/closing empty/raw/WIP/FG/reusable/waste stocks; all gross new/old-FG dispatch; EO owner-return/service outward; external waste; each actual transport/wash/repair/loss leg | Weigh each actual packing component. P is first procured entry, including packaging paid within a bundle even without a separate packaging invoice. N_ext is first actual external non-purchased supply, including loan, lease, customer/entrusted or goods-accompanying packaging; it is incoming, never an outgoing term. ER requires the same item's prior evidenced outward leg, owner/cohort continuity and prior vectors; a loan/lease/entrusted receipt without that prior outward is N_ext, not ER. P/N_ext/ER are mutually exclusive per entry event; opening stock and internal movement are not new entries. Reconcile ownership/custody, all stock states and gross movements under packaging_balance. Retain complete prior foreground/background vectors and unknown history as unresolved, never zero because free. Count manufacture/provider burden once at its actual boundary, including supplier-included supply; charge actual later washing/repair/transport/loss once to the applicable cohort without invented reuse cycles, lifetime or credit. | kg | receipt/pack/dispatch/return | complete same period | receiving, packing and FG stores | per 1 kg reference flow | measured tare/conversion and stock records; acquisition/bundled payment and ownership/custody evidence; same-item prior outward/cohort/vector records; all gross transfer/transport and receiver evidence |
| cp_residues | journal | paper_waste; spent_plate; spent_fountain; spent_wash; spent_blanket; spent_cloth; wire_waste; waste_ink; spent_oil; spent_grease | foreground_record | stream/stage; whole mass/state; water-specific fraction; independently assessed solids; density/T for liquids; actual contamination; opening/closing waste; internal return; receiver/transport/treatment | Weigh disjoint outgoing streams and waste stocks; sample whole mixtures. Distinguish water from nonwater and dry solids from volatile organic mass. Count merged outlet once, retain internal transfers/composition. Capture all rejects and cleanup residues; no arbitrary drying of waste quantities. | kg | generation/consignment and stocks | complete same period including stored waste | each actual stream and receiver | per 1 kg reference flow | scale records, samples, manifests, compatible receiver basis and uncertainty |
| cp_species | journal | ipa_air; ethanol_air | foreground_record | actual CAS/species/formulation; c in species mg/m3; matched volume/flow-time/T/P/wet-dry/oxygen basis; outlet/fugitive/control state; blanks/detection; retained/waste/stock/transformations; carbon origin ; matched inlet/background species concentration and independent inlet/outlet integrated volumes; gross legs; background-correction ownership; uncertainty | Validated species-resolved sampling with simultaneous flow and representative operating-mode coverage, reconciled with material/species balance. Do not treat total FID carbon as a pure solvent, or a workplace concentration/rated fan capacity as boundary mass. Additional actual species need separate cards.  Measure matched ventilation inlet and final outdoor outlet/fugitive boundaries in the same operating intervals and compatible gas states. Retain both gross species masses and calculate the net contribution under species_mass; concentration already corrected for inlet background must not receive that correction again. Missing inlet/boundary coverage remains an explicit evidence gap, not assumed zero background. | mg/m3; m3; kg | matched monitoring intervals | complete period modes including cleanup and fugitive losses | final outdoor boundary, not internal circulation | per 1 kg reference flow | analytical calibration, sampling chain, flow/basis, coverage and uncertainty |
| cp_dust | journal | collected_dust; pm25; pm2510; pm10 | foreground_record | source/collector; fibre/coating/ink/starch/moisture; capture/return/export/stocks; matched air volumes/concentrations and aerodynamic cuts; fugitive/bypass; uncertainty | Weigh captured/exported dust separately; measure outdoor disjoint size intervals or compatible cumulative differences, with matching flow/conditions. Retain missing size fractions and monitoring modes as gaps. Do not use a wood-dust emission factor. | kg; mg/m3; m3 | collection and matched air intervals | complete same period and finishing/cleanup modes | press/powder/folding/trim and outdoor boundary | per 1 kg reference flow | collector/bin weights, composition, size-resolved tests and uncertainty |
| cp_water | journal | water_air | foreground_record | paper/formulation/supply water; pan/stock/WIP/product moisture; liquid/cloth/waste water; inlet/outlet humidity/flow/T/P; reaction water and uncertainty | Reconcile measured water and stocks with net process-added vapour, retaining separate gross inlet/outlet moisture. Validate any oxidation-related reactant/product water and oxygen terms before physical closure; no assumed supply-to-evaporation fraction. | kg | period and matched monitoring | complete same period | all material/water stocks and final air boundary | per 1 kg reference flow | water-specific analysis, moisture tests, humidity/flow records and residual uncertainty |

Protocols keep unnormalized raw totals in their native units; their aggregation basis is the stated reference, implemented only once by normalize_period. The reporting pool is fixed before observing yield and cannot exclude failed lots. If Q = 0, preserve its absolute inventory and review attribution/period scope rather than dividing by zero or dropping activity. If a previously accepted item is returned/reworked, it contributes no new first-release Q; retain its burdens under its traceable cohort. The same rule applies to all later services on unreturned/unreworked old FG: each protocol identifies original Qc, complete prior V/A and foreground/background/provider/gate/state/phase/medium/period vectors, then records only actual added service in the applicable original cohort. Shared current-period services require causal cohort attribution; no part is silently shifted onto another new-Q pool. Keep service-only and continued views distinct and avoid adding a referenced inherited vector twice. Unknown history, Qc or attribution remains an absolute unresolved account, not zero; an evidenced original Qc can support the service view even when current new Q = 0. Opening/closing WIP carries actual material and documented embodied burdens across periods without charging both the incoming WIP burden and its original period purchases again. [epa-printing-eiip-2002]

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_period | finished | Q = sum(net kg of complete lots/items first quality-released in the fixed period). Include newly accepted closing FG; exclude opening FG dispatch and duplicate rework release. Reconcile closing FG = opening FG + new release + returned accepted stock - dispatch - scrapped/other removals, with internal rework traced separately. Q must be positive to normalize. | cp_acceptance | Q in kg and FG reconciliation | chicago-journal-production |
| normalize_period | all inventory rows | For the matched new-manufacture pool, x_i = X_i / Q for the complete issue/route/site/period; Q is accepted_period first release, including new closing FG once. Sum raw exchange totals, including zero-output failures, WIP stock movements, internal rework and cleanup, before the sole division. For every actual later service to old FG, including unreturned/unreworked packing or inspection, use service_increment_i = actual cohort-attributable added exchange / original valid Qc, in its original numerator unit and kg basis, never current unrelated new Q. A continued view carries each complete original V/A/provider/background/foreground/gate/state/phase/medium/period vector once and adds the increment; a service-only view references that vector and reports the increment alone. Neither creates new manufacture or Q. An explicitly justified reviewed service basis must be disclosed separately. Unresolved Q/Qc/history/attribution stays absolute for review, not zero; positive original Qc remains usable when current Q = 0. Never average lot ratios or divide intermediates independently; finished = 1 kg. Keep gross physical V and attributed burden A separately, with one evidenced attribution before burden normalization and no burden share applied to physical V. | cp_acceptance; applicable row protocol; period and allocation ledgers | each numerator unit per 1 kg reference flow | epa-printing-eiip-2002 |
| stock_reconcile | journal material/component/species accounts | For each stage and same-state account: S_close = S_open + R_external + T_in + F - T_out - O_external - C. Paired T_out = T_in in identity/state/unit/time; internal receipts are T, never external receipts or formation. Sum stages only after matching legs: sum(S_close - S_open) = sum(R_external - O_external + F - C). R/O cross the whole foreground gate once; F/C are evidenced paired transformations, zero for conserved total material mass. Retain WIP/rework/failed lots, actual boundary reactants and uncertainty. Keep original provider vectors, burden attribution and Q separate from this physical balance. | cp_materials; cp_formulas; cp_consumables; cp_residues; cp_acceptance | unallocated stage and combined-node physical ledger | epa-printing-eiip-2002 |
| electricity_conversion | electricity | X_electricity in MJ = metered attributable kWh * 3.6, with raw gross and attributed service totals retained; normalize_period performs the sole applicable Q or original-Qc division for that cohort, including later old-FG service. | cp_utilities | MJ period amount | epa-printing-eiip-2002 |
| constituent_ledger | ink; fountain; wash; powder; maintenance_oil; maintenance_grease | constituent kg = whole supplied-mixture kg * actual wet mass fraction; fractions close the whole mixture with uncertainty. Track water/solids/carbon separately; constituent accounts do not add purchases to the whole-mixture exchange. | cp_formulas; cp_consumables | constituent physical masses and fate ledger | epa-offset-ctg-2006 |
| species_mass | ipa_air; ethanol_air | X_j = sum(c_out,k × V_out,k - c_in,k × V_in,k) × 0.000001 for independently identified species concentrations in mg/m3 and independently integrated volumes in m3 on matched time, temperature/pressure and wet/dry/reference bases. Retain gross inlet and outlet/fugitive masses separately and disjointly; integrate an actual flow rate over time once, not an already integrated volume. If c is already a validated background-corrected result on the same measured boundary, apply no second inlet subtraction. Reconcile stocks, retained product, liquids/cloth, recovered fates and real reaction/abatement; total FID carbon/TVOC or response equivalents require species-specific conversion and never become additional solvent mass. A negative or uncertainty-dominated balance is retained for investigation or a separately justified actual uptake model, not clamped to zero or relabelled as a positive emission. Missing inlet or outlet coverage prevents a complete net-release claim. Pass the supported period kg to normalize_period once. | cp_species; cp_formulas; cp_residues ; matched_inlet_concentration; matched_outlet_concentration; integrated_inlet_volume; integrated_outlet_volume; gas_state_and_time; prior_background_correction | species period kg before normalize_period | epa-printing-eiip-2002; epa-offset-ctg-2006 |
| particle_intervals | pm25; pm2510; pm10 | Same-condition cumulative PM10 minus PM2.5 gives only 2.5-10 micrometre mass; total particulate minus PM10 gives only >10 mass. Propagate uncertainty and retain negative conflicts for investigation; do not clip them or invent size shares. | cp_dust | disjoint outdoor particle period kg | epa-printing-eiip-2002 |
| packaging_balance | box; waste_box | For each component/item in matched state/unit: Opening + P + N_ext + ER = Closing + Ship + EO + W. P/N_ext/ER use the mutually exclusive cp_packaging entry tests; ER requires same-item prior outward/cohort/vector evidence. Opening/Closing each sum mutually exclusive on-site empty/raw, WIP, packed FG, reusable and waste-awaiting-removal stocks; moving between those states is internal, not a fresh entry or external discard. Ship is every gross outward dispatch packing leg on both new and old FG; EO is every disjoint owner-return/service/other evidenced outward leg, and W is external waste removal, not waste merely generated into closing stock. Correct for packing released from opening FG and incoming returns through the matched stocks and ER, without duplicating either. Retain all gross legs and each actual transport, wash, repair and loss; never net repeated outward/return legs. Keep owner/custody/cohort, complete inherited V/A and provider vectors, upstream-included manufacture once and actual added service separately. Unknown prior non-purchased burdens are not zero; no assumed reuse cycles, credits or box mass in journal Q. | cp_packaging; cp_acceptance | packaging physical ledger before normalize_period | chicago-journal-production |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| product_purpose | journal | Establish professional/academic serial purpose and less-than-four-weekly frequency. A blank journal, directory, encyclopedia instalment or technical monograph fails this boundary even if printed identically. | Publisher masthead, title/issue records, page content category and actual frequency |
| issue_integrity | finished | Verify correct issue/edition, page/signature sequence, self-cover, stitch integrity and actual print acceptance; mass alone cannot detect mixed/duplicate/missing signatures. | Signed page/forme/imposition map and release/reject records |
| quantity_chain | all inventory rows | Reference kg, raw numerator unit, applicable new-manufacture Q or original-cohort Qc, collection aggregation and formulas agree. All later old-FG services retain complete prior V/A/foreground/background/provider/gate/state/phase/medium/period vectors and only actual added services; service-only/continued views do not repeat manufacture or shift burdens to new output. Counts/area/length use actual measured conversion; no factory quantity follows from identity. Unknown quantities/history remain absolute unresolved accounts. | Raw weighing/meter/stock records, calibration, original Qc/vector and service-attribution evidence and matched bases |
| composition_and_identity | all inventory rows | Confirm native type/form/route/CAS/medium/property and actual provider boundary. Full formulas and contaminated waste state are required, including nonhazardous constituents; adjacent chemistry/grade or an unrelated waste route cannot fill a gap. | Native and supplier originals, full composition and receiver specifications |
| period_completeness | journal | Include failed Q0 lots, all makeup/cleanup/idle energy, WIP/rework/FG stocks, packaging returns and actual maintenance. Include unreturned old-FG services under original cohorts even when current Q = 0. Verify packaging P including bundled-paid supply, first external non-purchased N_ext, and ER only with same-item prior outward/owner/cohort/vectors; retain mutually exclusive gross stocks, all new/old-FG Ship, EO owner-return/service, W and every actual transport leg. Free/history-unknown supply is not zero; manufacture/provider once and actual added service remain separate, without invented reuse counts or credits. Explain stock/burden carryover; no yield-based sample selection. | Fixed period plan, complete job logs, acquisition/prior-outward/cohort/vector/transport records and physical/allocated ledgers |
| emissions_and_balances | journal | Maintain separate dry solids, water, fossil/biogenic carbon and energy balances including actual oxidation/oxygen, stocks and residues. Require actual additional species and missing particle intervals; non-detect is method-limited, not true zero. | Supplier/analytical data, measured outdoor/collector records and residual uncertainty |
| evidence_limits | journal | Distinguish primary technical facts, author accounting rules and site data requirements. Historical retention/thresholds, advertised capacities and a source's equipment options are not measured site defaults or complete LCI. | Source sections/limitations, site configuration and disclosed unresolved scope |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_product | journal | Confirm the sole classification and product purpose/frequency, then the declared monochrome coated-sheet self-cover wet-offset/saddle-stitch route. Other products and unreviewed configurations cannot inherit this method. | un-cpc3-32420; epa-printing-eiip-2002 |
| validate_reference | finished | Require exactly one product output linked by finished with 1 kg accepted complete issues. Check net mass/tare, first-release Q and page/issue/stitch integrity; opening FG dispatch and internal rework never create another denominator. | chicago-journal-production; newman-saddle-stitching |
| validate_ledgers | all inventory rows | Check positive manufacturing Q or retained unnormalized Q0 inventory; failed/cleanup/WIP/FG coverage, paired internal transfers, complete receipts/ownership/returns/wastes and single provider charging. Trace every later old-FG service, including unreturned packing/inspection, to original valid Qc or separately justified reviewed service basis and complete prior V/A/foreground/background/provider/gate/state/phase/medium/period vectors. Check actual service increments and distinct service-only/continued views without new Q, duplicate manufacture, or assignment to another new lot; unresolved history/quantity is not zero. Check packaging P including bundled-paid supply, incoming first non-purchased N_ext, and ER only with same-item prior outward and owner/cohort/vector continuity. Verify mutually exclusive gross stock states, all new/old-FG dispatch, EO owner-return/service, external waste and each actual transport/wash/repair/loss leg; no netting of cycles, invented reuse life/credit or packaging in journal Q. Separate physical and allocated ledgers and normalize once by the applicable cohort denominator. | epa-printing-eiip-2002 |
| validate_species | journal | Verify actual CAS/phase/receiving medium, species mass/air conditions and disjoint PM intervals. Captured dust, retained solvent, wastes and outdoor emissions are not duplicate fates. Unknown recipes/species, major quantities, providers or receivers prevent a complete dataset claim. | epa-offset-ctg-2006; epa-printing-eiip-2002 |
| validate_projection | journal | EN/ZH must preserve ordered row/rule/protocol ids, amount objects, units, qualifiers, formulas and ancestor context. Empty auxiliary UUIDs remain explicit review debts; reference/primary hard conflicts require a specific applicability decision. Tool checks do not approve methodology or translation. | un-cpc3-32420 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process_dataset |
| downstream_use | secondary_dataset; background_dataset after actual site/upstream/receiver verification |
| allowed_use | Manufacturing inventory of the declared professional/academic non-daily issue and representative construction at printer gate |
| excluded_use | Whole-leaf technology coverage, other CPC identities, blank writing journals, books/directories, online publishing, reading-service equivalence and complete LCI inferred from UUID success |
| required_metadata | All reference qualifiers; actual Q/first-release/period; issue/forme/signature map; material/formula/provider boundaries; WIP/FG/rework/failed lots; packaging ownership/returns; utility modes; residues/species; allocation and physical ledgers |
| required_quality_disclosure | Scientific and translation review state; unresolved identities/current native freshness; actual measured, calculated, missing and excluded exchanges; source limits, uncertainty, performed/skipped checks and incompleteness |
| update_trigger | Title-purpose/frequency boundary or route change; colour/cover/plate/binding/stock/formula/provider change; new equipment/utilities/emitted species; revised receiver, supply basis or stock/allocation method; retain this unique category identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-32420 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, printed pp148-150 (PDF pp148-150), subclasses 32220/32230 and 32420/32490; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product-purpose distinction and 32420 frequency less than four weekly, including scientific/medical journals; excludes online periodicals. Classification evidence only, no quantity, physical recipe or technology prevalence. |
| chicago-journal-production | handbook | University of Chicago Press, How Books and Journals Are Produced, Print Technologies: Printing and Binding, https://www.chicagomanualofstyle.org/help-tools/production-technologies.html (accessed 2026-10-27) | Plate/blanket transfer, sheet/web distinction, imposition and signatures. Production overview, not a named factory's route, stock choice, yield or energy evidence; numerical examples are not defaults. |
| epa-printing-eiip-2002 | official_guidance | US EPA, EIIP Volume II Chapter 15, Preferred and Alternative Methods for Estimating Air Emissions from Printing, Packaging, and Graphic Arts, May 2002, section 2.1.1 printed pp15.2-4/5 (PDF14/15), section 4.1 printed pp15.4-1/2 (PDF31/32); https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Sheetfed offset physical diagram, penetration/oxidation versus heatset distinction, material-balance/record method context. Author selects collection/accounting requirements; no default recipe, emission/retention factor or site throughput. |
| epa-offset-ctg-2006 | official_guidance | US EPA, Control Techniques Guidelines for Offset Lithographic Printing and Letterpress Printing, EPA-453/R-06-002, September 2006, IV.A and VOC-source overview, printed pp6-9 (PDF12-15); https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | Paste ink constituent families, sheetfed setting, fountain/wash chemistry and separate VOC sources. Historical US control guidance; retention percentages, doses, thresholds and efficiencies are not site defaults or current legal advice. |
| newman-saddle-stitching | handbook | Newman Thomson, Saddle Stitching, process and artwork/creep sections; https://www.newmanthomson.com/service/saddle-stitching/ (accessed 2026-10-27) | First-party fold/wire/nesting and trim-creep explanation; self-cover is an available construction. Does not establish a particular academic title, wire grade, universal page limit or quantities. |
| heidelberg-powder-2010 | handbook | Heidelberger Druckmaschinen, Heidelberg News 270 (2010), Small Grains that Have a Big Effect, printed/PDF p53; https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | First-party anti-setoff function, starch/sugar/calcium-carbonate alternatives and hydrophobic-starch multiple-pass restriction. Selected starch preparation needs actual specification; no recommended grain size, humidity, grade, dose or performance claim becomes a default. |
