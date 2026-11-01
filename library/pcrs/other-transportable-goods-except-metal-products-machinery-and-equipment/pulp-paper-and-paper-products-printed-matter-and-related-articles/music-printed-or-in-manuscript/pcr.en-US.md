---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.music-printed-or-in-manuscript
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Printed music: dry-toner saddle-stitched paper score booklets

## 1. Scope and Applicability

This method covers one physical product: a complete black-on-white musical-notation score booklet, printed on purchased dry uncoated paper by monochrome dry electrophotographic transfer and oil-less belt fusing, folded, gathered, saddle-stapled through the spine and face-trimmed. The outer folded sheet is the self-cover of the same paper stock. Its intended use is reading musical notation during rehearsal or performance; the declared gate is accepted manufacture at the printer, with dispatch packaging accounted separately. It is neither a performance service nor a quantified lifetime of music access.

CPC 3.0 32520 identifies printed musical compositions distributed as sheet music, folios or books, including electronic text in its notes, and excludes retailing others' music and print/copy-right licensing. It prescribes no publication frequency, paper grade, binding or printing route. Here only the stated physical booklet subset is covered. Actual notated content, product/job brief and distribution purpose establish applicability; music-themed prose, educational workbooks, contact directories, commercial catalogues, advertising and online advertising do not become this product through binding appearance. No HS-based definition is imported. Handwritten originals, electronic delivery, loose sheets/folios, coil, adhesive/sewn/hardcase binding, colour print, offset/inkjet/UV/EB routes, coated/synthetic substrates and special inserts/laminates are outside this method. [unsd-cpc3-2025]

Songburd's actual print options establish saddle-stitched musical scores and black-and-white printing as real products. Ricoh's production-printer original establishes dry electrostatic transfer, oil-less belt fusing, uncoated stock and an optional saddle-stitch finisher/face trimmer. These independent originals support the selected representative construction and available technology; they do not prove that Songburd uses Ricoh, a particular site's machine/recipe, or any material amount. The selected self-cover, uncoated stock and monochrome route must be confirmed from the actual job. No catalogue speed, toner yield, TEC, page limit, grammage, recipe, lifetime or emission threshold is adopted as a plant value. [songburd-score-options; ricoh-dry-toner-2019]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.music-printed-or-in-manuscript |
| classification_refs | CPC 3.0 32520; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Complete self-covered uncoated paper musical-score booklets with black dry toner and steel saddle staples, accepted for notation reading. |
| excluded_products | Prose/music-study books without the selected score identity; directories; advertising/catalogues; digital/manuscript/loose/folio products; other substrates, print routes, colours and binding constructions; publishing, retail, licensing, distribution and performance services. |
| representative_product | One job/design of a monochrome self-covered saddle-stitched paper rehearsal/performance score booklet. |
| production_route | File checking/imposition → dry electrostatic image transfer → oil-less belt fusing → gather/fold → saddle staple → face trim/inspect → pack. |
| market_state | Newly first-quality-released complete score at printer gate; packaging excluded from net score mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the actual musical composition in a complete paper notation booklet for rehearsal/performance reading. |
| How much | 1 kg net accepted complete score booklets of one design and construction. |
| How well | Correct notation, page sequence/completeness, legibility at declared music size, toner adhesion, fold/staple security, safe staple closure and design-specific opening/page-turning acceptance; no universal lay-flat or durability claim. |
| How long or cycle | One manufacturing lot at first quality release; no prescribed use life, performance count, practice duration or replacement interval. |
| reference_flow_link | `finished_score` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Music, printed or in manuscript `0bbb62f1-a18e-4e41-846b-53791377656b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | composition/title and design; actual musical notation and intended rehearsal/performance reading; distribution purpose and gate; rights/print authority declaration; trim size and orientation; page/sheet/copy count; notation/toner-adhesion and page-turning acceptance; self-cover and paper SKU/furnish/grammage/moisture; monochrome dry-toner SKU and whole formulation basis; dry-transfer/oil-less fusing equipment configuration; steel staple grade/coating and count; no excluded finishing; first-release lot/cohort and measured accepted net kg; raw/WIP/new-old-FG stocks; packaging components/owner/return history; site/period/providers; allocation and uncertainty |

The reference UUID is a product identity, not a measured production process or provider average. It is restricted here to the complete physical score including retained paper, toner and staples. No loose-paper intermediate, finished-score purchase, publication service, digital file or educational-book UUID substitutes for this reference. Required qualifiers belong in the concrete dataset's metadata or equivalent records. Results per kg do not establish equal musical repertoire, performance service or useful life across designs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net mass of complete first-released scores including retained toner/staples and actual moisture, excluding dispatch packs; collect using cp_release. |
| `basis_cohort` | all inventory rows | reference-product mass | kg | Express this lot's exchanges per 1 kg reference flow. cp_release defines Q as kg of this new lot first released once, including newly released closing FG once. Old FG and its Qc, same-item returns, recirculation, rework and later services never add new Q. |
| `stock_state` | materials and scores | Mass | kg | Separate raw, WIP, newly released FG, old FG and reusable-package stocks by item/state/cohort/owner; tare and measured moisture are explicit. Sales or monthly dispatch kg are not the universal denominator. |
| `electric_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use metered kWh × 3.6 MJ/kWh for the actual <1 kV customer supply, with grid/year/provider and scope reconciled; catalogue power/TEC/yield does not measure job consumption. |
| `whole_components` | toner and chemicals | Mass | kg | Whole supplied formulation and analytical component subledgers have exclusive provider ownership. Components already included in a complete formulation background are not additional purchases or burdens. Require actual density/temperature and composition for volume or component conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dry unprinted uncoated paper, finished dry black toner and steel staple supplies at printer reception; electronic print file is the information input. |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | The selected physical notated score booklet subset of CPC 3.0 32520 only; no whole-leaf or other-category coverage claim. |
| recursive_input_rule | Purchased complete printed scores and returned accepted same items retain upstream/cohort vectors; disclose resale/rework separately. They are not newly manufactured raw paper and cannot create another first-release output or a zero-burden recursion cut. |
| upstream_dataset_requirement | Match actual paper manufacture, complete toner/staple manufacture, electricity, conditional maintenance inputs and each package provider by grade, state, quantity, geography/year and boundary; include delivery/treatment once. |
| disclosure | Declare exact job/site/period, gate, outsourcing, maintenance/infrastructure choices, foreground versus background ownership, species and media, inventories, allocation, uncertainties and specific gaps; downstream sales/distribution/use/end of life outside this gate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | score manufacture | Include file preparation/imposition, setup/test sheets, dry toner transfer/fusing, gathering/folding, saddle stitching, trimming, quality acceptance, packing and attributable extraction, ventilation, maintenance and utility activity. No plate/fountain/offset wash, EVA glue or sewing thread is prescribed in this construction. Verify their absence in the actual job. | `ricoh-dry-toner-2019`; `songburd-score-options` |
| `b_classification` | applicability | Verify actual musical-composition notation and intended reading/distribution independently of format. Keep manuscripts, electronic text and other physical constructions outside this route. Printed music rights are a declared applicability fact, not a licence-service inventory or an environmental allocation driver. | `unsd-cpc3-2025` |
| `b_stage` | each physical state j and stage | Retain opening_j + external_receipts_j + internal_in_j + actual_formation_j = closing_j + external_dispatch_j + internal_out_j + actual_consumption_j. Attach separately measured waste/release legs to their own states. Transformation consumes input states and forms distinct output states with component/mass closure; it never creates material. Same-state store transfers are internal links, neither external receipts nor formation. Matched internal_out/internal_in cancel when aggregating the plant. | `ricoh-dry-toner-2019` |
| `b_gate` | providers and releases | Include actual input production/delivery and transferred waste treatment once through compatible backgrounds. Indoor concentration or a device chamber rate is not an outdoor elementary exchange; assess ventilation/outlet transfer and controls. Captured dust and cartridge residues are waste, not emitted toner. No electricity-provider emission is re-added as a factory emission. | `dguv-laser-emissions`; `ilcd-allocation-2010` |
| `b_utility_extensions` | actual heat, fuels or additional inputs | The representative printing/fusing route uses electricity. Survey attributable space heat, cooling, transport and maintenance; absence needs records. Any actual fuel, purchased heat, refrigerant, extra formulation or separately transferred waste requires its own atomic row, identity, measurement and compatible provider before the concrete dataset is complete. This survey obligation does not assert that any listed carrier occurs. | `ricoh-dry-toner-2019`; `ilcd-allocation-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `score_manufacture` | Dry-toner saddle-stitched score manufacture | required | verified complete selected notation booklet and route | foreground | 1 kg net first-released complete scores |

File/imposition → paper feed/transfer/fuse → printed sheets → fold/gather → staple/trim → first release → pack. Stages remain in one foreground unit with distinct meter/state ledgers under b_stage. Pre-release correction and test sheets remain production burden. Stage state changes, failed jobs, idle and cleanup activity cannot disappear because no accepted copy was produced.

Each card below is one exchange. Amounts retain the gross physical vector V and the separately attributable burden vector A; a negative economic value never changes a physical mass. Conditional cards require observation of actual occurrence or documented absence, not a default positive amount or zero. UUIDs do not establish recipe, measurements, supplier datasets or permission to omit unlisted actual flows.

### Process: Score booklet manufacture (`score_manufacture`)

#### Inputs

##### Product flows

###### Paper for all score sheets (`paper`)

Unprinted dry uncoated woodfree paper for inner pages and same-stock self-cover. Weigh job issues and retained raw/WIP stocks; verify furnish, grammage, moisture, sheet area and actual toner/fuser compatibility. The broad identity is not a paper-mill provider.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_material; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `ricoh-dry-toner-2019`

###### Black dry electrophotographic toner formulation (`black_toner`)

Whole as-supplied black dry toner, excluding its bottle/cartridge tare. Obtain actual SKU, composition including undisclosed SDS constituents, carbon origin and issued/recovered/retained/wasted mass. Offset/gravure ink, inkjet liquid, pure carbon black and finished printer identities cannot replace this formulation; UUID unresolved.

- Selected flow: Black dry electrophotographic toner formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_material; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `ricoh-dry-toner-2019`

###### Steel saddle-stitch staple supply (`steel_staples`)

Use the broad base-metal office article identity only for the actual finished steel staple supply in strips/cartridges for saddle stitching, not loose-leaf fittings, baling wire, coil binding or a generic fastener average. Verify steel/coating, count, measured net staple mass and cartridge/wire form. No default steel mass or staples per score; count must reconcile actual acceptance.

- Selected flow: Fittings for loose-leaf binders or files, letter clips, letter corners, paper clips, indexing tags and similar office articles, of base metal, staples in strips, of base metal `336f70f3-7cc0-429e-9cde-b5df1fa7d4fd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_material; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `ricoh-dry-toner-2019`

###### Customer electricity below 1 kV (`electricity`)

Customer-side <1 kV CN grid-average supply only where actual connection/geography/year matches. Meter file processing, engine/charging/fusing, finishing, extraction and packing, plus setup, warm-up, standby and cleanup. Use actual kWh and the verified MJ property; no catalogue TEC or maximum-power proxy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_utility; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `ricoh-dry-toner-2019`

###### Conditional separately supplied cleaning water (`tap_water`)

Purchased treated tap water only if actually added for permitted maintenance/cleaning; dry image transfer has no prescribed fountain circuit. Meter separately, retain actual density/temperature for volume conversion, and do not duplicate water included in a supplied cleaning formulation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_utility; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `dguv-laser-emissions`

###### Isopropanol cleaning component (`ipa_cleaner`)

Conditional actual approved cleaning component, CAS 67-63-0, active-component mass with measured purity/concentration and carrier-water ownership. No particular cleaning recipe is prescribed. The optical-assembly restricted candidate is not assigned to this unverified grade; UUID unresolved.

- Selected flow: Isopropanol cleaning component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_material; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `dguv-laser-emissions`

###### Cotton wiping cloth (`cotton_wipe`)

Conditional actual cotton cloth for approved maintenance only. Require fibre/finish, measured dry new/reissued mass, reusable history and wash-provider scope; a water-treatment-specific cloth is not a substitute. Confirm provider compatibility; no default replacement life. Positive fabric/cloth names identify cotton textile; raw-cotton classification and plant commentary remain source-quality debts, not a raw-fibre provider.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_material; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `dguv-laser-emissions`

###### Finished corrugated dispatch box (`box_in`)

One whole finished corrugated box component, actual fibre mix/grade/moisture/tare measured. The candidate fixing 16.6% primary and 83.4% recycled fibre is not assigned without actual matching composition. This card records gross external inward movements by P, N_ext and ER under cp_pack; production-provider burden is charged only by the component acquisition/cohort ledger.

- Selected flow: Finished corrugated dispatch box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_pack; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### PE dispatch film inward (`film_in`)

Actual PE film component only, not score lamination or PP/PET/multilayer film. CAS9002-88-4 and native film description support material identity despite inconsistent source classification; actual grade/additives/provider remain required. Gross P/N_ext/ER inward mass and inherited vectors remain separate.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_pack; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Wooden pallet inward (`pallet_in`)

Finished wooden board/slat pallet only if actual complete construction matches the named native product, not raw lumber or photovoltaic-site packaging. The inconsistent active classification is a source-quality debt, not proof of electricity. Retain owner, serial/cohort, acquisition form, gross P/N_ext/ER and previous outward identifiers. No zero burden from free receipt.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_pack; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

##### Waste flows

No boundary input in this group for the selected construction.

##### Elementary flows

No direct natural-resource abstraction prescribed; supplied tap water is a product.

#### Outputs

##### Product flows

###### Complete first-released musical score (`finished_score`)

Complete notated self-cover score after fusing, folding, saddle stitching, trimming and quality checks. Net mass includes retained paper/toner/steel and measured moisture, not dispatch packs. This is the unique first-production reference output; warehouse transfers and gross later dispatch are recorded in cp_release, not another reference output.

- Selected flow: Music, printed or in manuscript `0bbb62f1-a18e-4e41-846b-53791377656b`
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

###### Finished corrugated box outward (`box_out`)

The same physical box construction as box_in, leaving with scores or as a separate owner return. Record gross dispatch and owner-return legs separately, with cohort and inherited exchange vector. Never net these against receipts or against waste; no new production/provider charge solely on re-dispatch.

- Selected flow: Finished corrugated box outward
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_pack; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### PE film outward (`film_out`)

Whole retained dispatch film physically leaving with scores; distinguish any genuine same-component owner return by prior outward record. Film offcuts leaving as waste are separate. No second supplier production burden for this outward leg.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_pack; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Wooden pallet outward (`pallet_out`)

Gross outward pallet with shipment and gross separate owner-return legs, traced to pallet_in owner/cohort/history. Count each leg and actual transport without netting; repeated movement does not create new pallets or another original manufacture burden.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_pack; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

##### Waste flows

###### Printed paper trim/reject stream (`paper_trim`)

One actual separately collected paper trim/reject stream, with toner/metal contamination, moisture and receiver acceptance documented. Split clean trim from stapled reject scores if separately transferred. Do not also place retained staples/toner in separate waste masses unless physically separated. No default recycling credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_waste; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ricoh-dry-toner-2019`

###### Collected dry waste toner (`toner_residue`)

One separately transferred physically solid dry toner residue stream, weighed whole with actual composition/contamination and receiver. Broad industrial solid-waste identity supplies no hazard class or recycling process. Spent cartridge housings, developer and filter assemblies are distinct streams requiring their own cards if present. No emitted-toner assumption.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_waste; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ricoh-dry-toner-2019`

###### Separated steel staple rejects (`staple_reject`)

One actual separated solid steel staple reject stream only, with grade/coating and receiver; no raw wire product or mixed municipal waste substitute. Weigh full stream at handover. Staples retained in paper rejects remain there and are not counted again.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_waste; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ricoh-dry-toner-2019`

###### Spent cotton wipe stream (`wipe_waste`)

Conditional separately transferred physically solid cotton wipes including measured retained toner/solvent/water. Retain laundering return history and actual receiver/treatment. Measure whole outgoing mass; no assumed dry cloth equals wet outgoing waste, no duplicated residue or evaporation.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_waste; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `dguv-laser-emissions`

###### Spent cleaning liquid (`cleaning_liquid`)

Conditional one separately transferred physically liquid cleaning mixture. Measure whole wet mass, or volume with compatible measured density/temperature, water fraction and independent suspended/dissolved/organic constituents. Non-water mass is not necessarily dry solids. General hazardous wording in the native comment is not a site legal classification; no direct-water release implied.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_waste; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `dguv-laser-emissions`

###### PE packaging film offcuts (`film_waste`)

One actual separately transferred PE-film offcut/reject waste stream, including actual dirt/additives. Native waste identity has no required cleaning/recycling operation; match receiver state and weigh as delivered. Packaging delivered with scores remains film_out, not this waste stream.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_waste; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ilcd-allocation-2010`

##### Elementary flows

###### Ozone to outdoor air (`ozone_air`)

Conditional actual ozone CAS10028-15-6 after control, net of compatible inlet background and actual reaction/decay. Air/unspecified is used only where a more precise compartment is unavailable; no long-term/soil or indoor identity. Office-equipment screening proves possible species, not this engine emission or a rate.

- Selected flow: ozone `08a91e70-3ddc-11dd-9756-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `dguv-laser-emissions`

###### Styrene to outdoor air (`styrene_air`)

Conditional actual styrene CAS100-42-5 reaching outdoor air after ventilation/control. Require calibrated species mass and actual toner/material survey; no SDS ingredient fraction, chamber limit or TVOC-as-carbon substituted for emitted mass.

- Selected flow: styrene `08a91e70-3ddc-11dd-9910-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `dguv-laser-emissions`

###### Benzene to outdoor air (`benzene_air`)

Conditional actual benzene CAS71-43-2 after control. Site species measurement and ventilation transfer determine mass; office-device observations and detection limits cannot be assumed plant zero. Use the verified air/unspecified identity only where a more precise air compartment is unavailable.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `dguv-laser-emissions`

###### Isopropanol to outdoor air (`ipa_air`)

Conditional actual CAS67-63-0 from verified cleaning operations, after retention/waste/recovery and control. Measure distinct outlets/time intervals and compatible inlet correction; do not assume all supplied cleaner evaporates or add a TVOC total to species.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `dguv-laser-emissions`

###### Particles up to 2.5 micrometres (`pm25`)

Measured outdoor residual particulate mass in the non-overlapping size bin ≤2.5 µm after control. Survey printing, toner replacement, trimming and cleaning separately. Particle number and airborne mass are different quantities; no number-to-mass default.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `dguv-laser-emissions`

###### Particles above 2.5 to 10 micrometres (`pmcoarse`)

Measured outdoor residual mass in the disjoint >2.5 to ≤10 µm bin; retained dust is waste. Never add cumulative PM10 to this bin and pm25. Establish actual filterable/condensable scope and measurement uncertainty.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `dguv-laser-emissions`

###### Particles above 10 micrometres (`pmlarge`)

Measured outdoor residual mass strictly above 10 µm, distinct from cumulative PM10/TSP and captured solids. Species/size absence requires site evidence; no paper mill or offset factor transferred.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `dguv-laser-emissions`

###### Net water vapour to outdoor air (`water_vapour`)

Conditional net water vapour from actual paper moisture/fusing or cleaning, after matched inlet humidity and outlet air mass closure, condensate and retained liquid/water stocks. No assumption that all tap water evaporates; an unexplained balance residual is not an identified water release.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual gross physical exchange per 1 kg reference flow using cp_air; preserve the distinct cohort and provider burden assignment under Section 7.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ricoh-dry-toner-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_framework` | modelling framework | Declare attributional modelling and why subdivision/allocation is appropriate to the study decision context. ILCD §§7.9.2–7.9.3 support the hierarchy used here; this does not claim full ILCD conformity or silently select substitution for a consequential study. | `ilcd-allocation-2010` |
| `a_subdivide` | every shared exchange | First use job/stage-specific measured records or justified virtual subdivision. Direct paper, toner and staples follow actual use and losses by design/cohort. Retain setup, rejected output, idle, warm-up and cleanup burdens; do not allocate them away as zero output. | `ilcd-allocation-2010` |
| `a_causal` | remaining shared loads | Determine exchange-specific physical causality with evidence, not a universal sales/mass/page key: machine runtime only for comparable service intensity, measured fuser/engine activity for electric consumption, actual occupied area/volume × duration for shared storage/space services, actual limiting mass/volume × distance for transport. Document each numerator, all co-functions in the denominator, units and sensitivity; unsupported drivers remain pending review. | `ilcd-allocation-2010` |
| `a_residual` | irreducible shared process burdens | Only after documenting unavailable subdivision and determining physical causality, consider consistent representative process-gate economic values for the actual co-functions/conditions, in a common currency/period and with justified quantity basis. Missing values, zero denominators, mixed product/service conditions or negative/gate-fee values require an explicit reviewed method and sensitivity; do not use max(value,0), invent prices or force a share. Without valid evidence keep the residual unallocated and the affected dataset incomplete. | `ilcd-allocation-2010` |
| `a_vectors` | physical V and burden A | Preserve unallocated physical vector V for every exchange and state balance. Assign only attributable burden vector A exchange by exchange; retain each original cohort's inherited vector and actual added service vector separately. Physical goods/waste masses do not shrink by environmental-load shares. All assigned shares plus explicitly pending residual equal the original burden, with no provider/component double counting. | `ilcd-allocation-2010` |
| `a_release_cohort` | first release and later services | Qc is the immutable measured net first-release kg of cohort c; Q is the newly first-released lot's Qc, not current sales. Determine Qc from unique first-release events; reconcile subsequent movements with c_release_stock_bridge, never an unconditional dispatch-plus-closing identity. Opening old FG has its previous Qc and vector; genuine same-item returns/re-dispatch/rework do not create Q. Carry the original exchange vector unchanged where the item is unchanged, and assign only actual additional service through its original Qc or a separately justified explicit service method. Do not divide every old-cohort/service exchange by the current new lot's Q. If Q or the relevant Qc is zero/unknown, retain absolute failure/idle/cleanup/service amounts and attribution evidence pending a valid denominator; never divide by zero or silently drop them. | `ilcd-allocation-2010` |
| `a_pack_components` | each packaging component and owner/cohort | Distinguish P: first external purchase, including a component contained in a purchased whole-pack price without a separate invoice; N_ext: genuine first non-purchase external acquisition such as loan, lease, consignment or accompanying goods; ER: actual same-component return with a proven preceding outward movement. An unproven return is not ER. Opening stock and transfers between raw, WIP, new FG, old FG and reusable inventory are not new acquisition. Preserve component owner, acquisition history, remaining stock and inherited exchange vector. Record physical gross dispatch, owner return and waste separately, and each actual transport leg; do not net legs. | `ilcd-allocation-2010` |
| `a_pack_burdens` | packaging backgrounds and reuse | Assign whole-container or component-manufacture/provider burden once, with documented exclusive ownership. A free/loaned component is not zero burden; use evidenced inherited burdens or explicitly reviewed supplier rental/reuse service scope. Existing reusable components retain original vectors and actual repair/wash/transport increments; do not invent lifetime/cycles or recharge new manufacture on every return. If a whole-container provider already includes components or return logistics, do not add them again. Missing previous burdens/lifetime/service allocation remains a specific gap. | `ilcd-allocation-2010` |
| `a_recovery` | exported wastes | Disclose actual legal/economic state, receiver and treatment boundary for each stream. A sale, free transfer or gate fee alone establishes neither co-product status nor an avoided virgin-material credit. No default recycling/substitution credit here; any such model requires separately justified recycling/true-joint-process evidence and consistent boundary ownership. Sections 7.9.2–7.9.3 alone do not supply an arbitrary recycling factor or zero-value clipping rule. | `ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `score_manufacture` | new score reference and cohort ledger | future measured foreground record | title/design; notated content and purpose; rights declaration; page/sheet/copy count; construction; acceptance record/time; net lot kg; measured sample copy mass and uncertainty; moisture; packaging tare; cohort c and Qc; opening/closing new-old FG; gross dispatch; actual same-item return ID; prior outward ID; rework; added service ; post-release waste/loss; disjoint repair stocks; other gross transfers; measured material/water state changes | Weigh complete first-quality-released scores on calibrated scales excluding packs. Count-to-mass requires same-design measured representative net copy mass and reconciliation to lot weighing. Record every first-release identity exactly once; separately trace old FG, same-item returns and later work. | kg; copies | each first release and every subsequent movement | full declared lot/reporting period and linked original cohort history | actual job/site and declared outsourced stages | per 1 kg reference flow | calibration; original release sheets; matched warehouse/dispatch/return records; sampling and moisture evidence |
| `cp_material` | `score_manufacture` | each paper/toner/staple and conditional cleaning input | future measured foreground record | item/SKU; stage/job/cohort/owner; supplier and provider scope; current SDS/full composition; CAS; supplied versus component basis; concentration/purity; paper grade/furnish/grammage/moisture; staple coating/form; measured gross/tare/net mass; opening/closing raw/WIP; external receipt; internal_in/out; actual formation/consumption; retention; waste; formulation/carrier ownership | Weigh receipts/issues/returns and state stocks with calibrated instruments. Measure actual toner/paper/staple use, not cartridge yield, nominal grammage or assumed staple mass. Reconcile supplied formulation and analytical component mass without a second provider charge. Record any actual extra maintenance part/chemical/cartridge/filter individually before completeness. | kg | each job/material/grade change and stock closure | complete lot including failed setup and cleanup | actual site/stages and verified suppliers | per 1 kg reference flow | invoices; calibrated stock/issue records; complete supplier disclosures; assays; stage balances |
| `cp_utility` | `score_manufacture` | electricity and conditional supplied water | future measured foreground record | device/stage/job; electric meter start/end; kWh; voltage; grid/geography/year/provider; time in setup/fuse/finishing/idle/cleanup; water source/treatment; meter volume; actual density/temperature; included carrier water; common-service pool and driver denominator; heat/fuel survey | Use calibrated submeters and reconcile full-period bills. Separate direct and shared services and retain all operating states. Water volume conversion needs measured compatible density; no default m3-to-kg. Record actual fuel/heat/refrigerant occurrence separately and add atomic cards/providers before modelling an expanded actual site scope. | kWh; MJ; kg; m3 | each job/stage interval and bill/stock closure | full representative lot/period including nonproduction states | actual printer, finishing, attributable utilities and space services | per 1 kg reference flow | meter calibration; tariff/provider boundary; water source; activity records; causal assignment |
| `cp_pack` | `score_manufacture` | each corrugated box, PE film and wooden pallet | future measured component ledger | component ID/material/grade; owner; cohort c; acquisition/previous outward IDs; P; N_ext; ER; whole-pack inclusion; prior exchange vector; open/close raw/WIP/new-old-FG/reusable stock; internal_in/out; packaging use; gross dispatch; owner-return; waste; repair/wash; actual mass/distance/load by transport leg; provider scope/cost basis | Weigh/count each component, match external acquisitions to contracts and bundled purchase records, prove same-item ER against prior outward ID. Place every component in one mutually exclusive stock state at a time. Record embedded packaging with no individual invoice as P if first purchased. Preserve inherited vectors and separate actual new services. Reconcile each gross leg; do not net returns/dispatch or assume free supply is burden-free. | kg; items; km; tonne-km | every acquisition/movement/repair/waste and stock closure | declared reporting period plus acquisition/return/cohort history | all actual inbound, dispatch and reusable package owners/providers | per 1 kg reference flow | invoices/contracts; whole-pack bill boundaries; serial/cohort ledgers; scale records; transport and provider records |
| `cp_waste` | `score_manufacture` | each separately transferred actual waste | future measured foreground record | stream/state/bin; job/cohort; whole outgoing net mass; moisture; independent solids/water/organic fractions; retained toner/steel/solvent; receiver and treatment; opening/closing; gross transfers and actual returns; legal/economic state; fee/value evidence | Weigh each segregated as-exported stream at handover. For liquid use measured whole wet mass or compatible volume/density/temperature and independent composition; non-water fraction is not automatically dry solids. Separate collected powder, cartridge/filter assemblies, paper rejects and actual separated metal. Do not count the same retained constituents twice. | kg; m3 | each collection/handover and closure | entire lot/period including maintenance/upsets | actual site/receiver boundaries | per 1 kg reference flow | calibrated weighing/assays; receiver acceptance; legal transfer; stocks and treatment boundary |
| `cp_air` | `score_manufacture` | each actual outdoor species/particle bin/water vapour | future measured foreground record | source/device/job; toner/material survey; CAS; outlet and inlet flow/concentration; T/P/humidity; dry/wet/normal basis; sampling duration; operating phase; control/decay/capture; species calibration/recovery/LOD; disjoint PM cuts and mass/number distinction; humidity/condensate; uncertainty | Survey actual print/fuse, toner replacement, trim, cleanup and maintenance states. Use competent calibrated species-specific methods validated for the actual matrix and outlet, and measured ventilation transfer. Integrate matched outlet/inlet mass on consistent bases; inspect reaction/storage/condensation rather than using an unexplained residual as a species. Chamber thresholds, indoor observations and particle numbers do not establish outdoor kg. | kg; mg/m3; m3/time | representative surveys and integrated actual operating intervals | declared lot/period including setup, routine, maintenance and upset states | actual outdoor outlets after controls; indoor evidence separately identified | per 1 kg reference flow | laboratory method validation; calibration/recovery/LOD; air balance; operating and control logs |
| `cp_assignment` | `score_manufacture` | separate V and A ledgers | future measured and reviewed assignment record | exchange ID; original cohort/Qc; physical V; inherited vector; direct A; residual shared pool; driver/unit/all co-functions; market-gate values/currency/period; zero/negative/missing cases; additional service; provider included components; assignment sensitivity | Implement Section 7 exchange by exchange. Preserve physical balances before assignment and prove assigned burden plus explicit residual equals source burden. Retain original vectors and current service increments separately; justify any change in provider or service methodology. Missing/negative economic bases are reviewed, not clipped. | native exchange units; kg basis; common currency where justified | each pool/cohort/provider/method change and reporting closure | current activity plus original cohorts | actual shared processes and all co-functions in each denominator | per 1 kg reference flow | physical/causal evidence; economic originals if used; conservation audit; explicit unresolved cases |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference` | finished_score | 1 kg denotes complete accepted net scores. Qc = measured kg of first-quality-released cohort c; unique first-release event records establish Qc independently of later dispatch, returns, repair and loss. Count conversion uses actual same-design measured mean net mass and accepted count, reconciled to lot weighing; old FG/returns/services add no new Q. | cp_release; first-release records; calibrated mass | unique reference production and Qc ledger | `ricoh-dry-toner-2019` |
| c_release_stock_bridge | finished_score | Qc is obtained only from unique measured first-quality-release events, not reconstructed from dispatch plus closing FG. For each original cohort and declared observation interval retain the gross physical bridge: opening released FG and disjoint post-release repair stocks + unique first releases within this interval + actual same-item external returns + other actual inward transfers + independently measured material/water gains = closing released FG and disjoint repair stocks + gross dispatch + post-release waste/loss exits + other actual outward transfers + independently measured material/water losses. Preserve original release state/mass, current measured states, item IDs, prior outward links and stock-boundary ownership; cancel internal movement within the included stock set. Returns/re-dispatch, repair or later damage never create or subtract a first-release event. The dispatch-plus-closing shortcut is permissible only after proving all omitted opening, return, loss, transfer and state-change terms are zero and dispatch is not repeated. Missing closure stays unresolved; already-incurred manufacturing and actual subsequent service burdens retain their original cohort Qc.  Every outward/inward movement and material/water state-change term is disjoint: the same measured evaporation, removal or added matter appears once, either in an explicit boundary leg or its corresponding state-change term, never both. | cp_release; cp_waste; cp_material; original_release_events; gross_stock_movements; measured_state_changes | first_release_and_subsequent_stock_reconciliation | `ilcd-allocation-2010` |
| `c_normalize` | all inventory rows | For a compatible new-lot exchange use measured physical V divided by that lot's positive Q for physical disclosure, and separately assigned A divided by the same Q for the model burden account. Preserve raw values. Old-cohort inherited exchanges and added later services use their original positive Qc or an explicit reviewed service basis, never automatic current-new-Q division. Zero/unknown denominators retain absolute records and require review. | cp_release; cp_assignment; relevant physical protocol | physical and assigned exchange per 1 kg reference flow with cohort provenance | `ilcd-allocation-2010` |
| `c_stage` | each state j | opening_j + external_receipts_j + internal_in_j + actual_formation_j = closing_j + external_dispatch_j + internal_out_j + actual_consumption_j. Trace real input consumption to formed output composition; matched internal legs cancel at plant aggregation. Same-state re-storage forms nothing. Retain measured residual/uncertainty, no forced closure to a named emission. | cp_material; cp_pack; cp_waste; cp_air; stage/state records | state and component reconciliation | `ricoh-dry-toner-2019` |
| `c_power` | electricity | Metered MJ = actual kWh × 3.6; avoid duplicate whole-engine and fuser submeter totals. Assignment and cohort normalization occur after this exact conversion. | cp_utility; compatible meter coverage | measured electricity MJ before assignment | `ricoh-dry-toner-2019` |
| `c_heat_extension` | any actual added thermal-service row | Delivered net thermal service = independently integrated supplied mass × supply enthalpy minus independently integrated returned mass × return enthalpy, with explicitly measured leakage/blowdown/condensate, other boundary legs and storage change on the same boundary. Use m(hs−hr) only if supply and return masses match on that boundary and interval. Use actual pressure/state/enthalpy basis; no invented efficiency or fuel-equivalent double count with a complete heat provider. | cp_utility; actual separate thermal meters and enthalpy/state records | reviewed added thermal-service quantity and boundary residual | `ilcd-allocation-2010` |
| `c_species` | actual outdoor elemental rows | Integrate actual outlet species mass minus matched inlet background on compatible flow/T/P/humidity bases, including controls/reaction/storage as applicable. Keep TVOC response equivalents separate, and cumulative PM and particle number outside the disjoint mass sum. No default species fraction. | cp_air; validated species and ventilation methods | actual net species kg and measurement uncertainty | `dguv-laser-emissions` |
| `c_pack` | each packaging component | Opening stocks + P + N_ext + proven ER + matched internal_in = closing stocks + gross dispatch + owner-return + waste + matched internal_out, adjusted only for documented real repair/transformation component additions/losses. All stock categories are mutually exclusive. Carry inherited A plus actual service increments; whole-container/component provider burden belongs once. | cp_pack; cp_assignment; provider ownership | component physical ledger and distinct burden vector | `ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_score` | reference product | Confirm actual notation/composition and purpose, self-cover, dry monochrome toner, steel spine staples and acceptance including page order, music readability, toner adhesion and page turning. No claimed service-life equality. | actual job file/specification; complete sample; quality-release and rights declaration |
| `dq_measure` | all cards | Replace no unmeasured amount with zero or a manufacturer yield. Collect every actual extra formulation/maintenance/packaging/utility/waste/emission as a separate atomic row before completeness. Unresolved UUID is distinct from measured absence or unavailable provider. | calibrated raw records; full ingredient/utility survey; explicit row gaps |
| `dq_identity` | UUID/property/provider | Verify actual native name/type/form/route/CAS/region/comments, reference property→unit group→unit and actual provider boundary. Broad compatible identities are narrowed by measured grade/state; hard incompatible form/route stays unbound. | direct state100 native record; support chain; supplier specification and provider check |
| `dq_cohort` | stocks and normalization | Preserve first-release identity/Qc, new closing FG, original old-cohort vectors and actual later services. Reject monthly sales as a universal denominator and preserve Q0/idle/failed-job/cleanup absolute burdens. | matched lot/stock/dispatch/return histories; per-exchange vector reconciliation |
| `dq_pack` | reusable and dispatch components | Reconcile purchased bundled P, first non-purchase N_ext and proven same-item ER, each owner/cohort and mutually exclusive stocks; retain gross dispatch, owner-return, waste and actual transport legs. No invented cycles/free-zero assumption. | contracts/invoices; prior outward IDs; component/provider and transport ledger |
| `dq_emission` | air/water/solids | Competent matrix-appropriate methods must distinguish indoor from outdoor, captured dust from airborne mass, particle number from mass, TVOC from species, and wet liquid from non-water/dry solids. Actual added fuel combustion requires its own species/carbon-origin assessment. | laboratory/ventilation/control and stream assays; residual and uncertainty disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | application | Require all scope qualifiers and actual notated-score content/purpose. Check the selected dry-toner/self-cover/steel-saddle construction at the stated gate; no whole-CPC-leaf, catalogue/prose-book or electronic-service substitution. | `unsd-cpc3-2025`; `songburd-score-options`; `ricoh-dry-toner-2019` |
| `v_reference` | completed reference | Check unique finished_score output, complete net retained-component mass, same denominator and reference chain in both languages. Paper input, shipped gross kg, old FG, returned scores and intermediate sheets cannot redefine Q. | `ricoh-dry-toner-2019` |
| `v_states` | material and component accounts | Reconcile b_stage/c_stage and cp_pack with real formation/consumption and matching internal legs, mutually exclusive stock states, measured moisture/contamination and complete gross outward/return/waste transports. Report uncertainty/residuals instead of artificial closure. | `ricoh-dry-toner-2019`; `ilcd-allocation-2010` |
| `v_assignment` | all burden pools and cohorts | Verify direct/subdivided then causal then justified residual assignment, complete denominators and vector conservation. Unresolved fee/value/negative-value cases stay pending; no clip-to-zero, default recycling credit or replacement of old inherited vectors by current averages. Q0 and missing Qc retain absolute activity. | `ilcd-allocation-2010` |
| `v_identity` | every actual exchange | Match native identity/property/unit and actual supplier/receiver scope. The toner, conditional cleaner and corrugated-box identity/provider gaps remain explicit; identity success cannot manufacture a recipe or measured amount. Whole formulation/container and component provider ownership must be exclusive. | `ilcd-allocation-2010` |
| `v_emissions` | emissions and waste | Require actual outlet/species/PM-bin and water balances after capture, with validated methods, moisture and units. Never transfer office-device test thresholds/rates to this plant, infer zero from non-detection without method/LOD, sum overlapping PM, or classify every captured toner gram as an air release. | `dguv-laser-emissions` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacturing input for the verified physical score-booklet route with declared gate and cohort provenance after actual foreground collection and review. |
| allowed_use | Complete black dry-toner, self-covered uncoated paper saddle-stapled score manufacture with actual compatible providers, measured quantities and explicit unresolved scope. |
| excluded_use | Whole-leaf/all-printing average; ordinary books/directories/advertising; electronic/licensing/retail/performance services; universal useful-life or repertoire equivalence; alternative printing/binding/substrate route; ready-to-use numerical LCI inferred from UUIDs or catalogue specifications. |
| required_metadata | All reference qualifiers; site/period; first-release/cohort histories; complete paper/toner/staple specifications; actual supplier/receiver and foreground/background boundaries; package component ownership; stock/transport/service and allocation ledgers. |
| required_quality_disclosure | Measurement and sampling uncertainty; species/media/particle coverage; physical residuals; native identity and actual-provider gaps; performed/skipped checks; pending assignments and omitted/out-of-scope stages. |
| update_trigger | Change in score design/acceptance, paper/toner/staple grade, self-cover, print/fuse/binding route, site/provider, packaging ownership/history, emissions control, collection period or assignment method. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | PDF/printed151, 32520 inclusion/distribution and retail/licensing exclusions, with neighbouring pp.148–152 category context; no frequency, process, grade or HS rule adopted. |
| `songburd-score-options` | `literature` | Songburd Music, Print Options; https://songburdconnect.com/print-options/ | Printing Options, Binding/Saddle Stitch and Black & White sections; actual score configurations only, not proof of the site's dry-toner equipment, self-cover/paper grade, recipe, quantities or lifetime. |
| `ricoh-dry-toner-2019` | `literature` | Ricoh Canada, Pro8310s/8310/8320s/8320 B&W Production Printer brochure, ©2019; https://assets.ricoh-usa.com/j2jqn9lauv41/28NYDSS6aM8eAFsZX7evnX/0db49e139c4ede5a822cb00156b760a2/pro8310s-8320s-8310-8320.pdf | PDF3–4 and7–8: uncoated paper, dry electrostatic transfer, oil-less belt fusing, optional saddle stitching/face trim and actual toner supplies; capability/route only. No TEC, nominal toner yield, speed, paper weight or staple/page limits become plant LCI values. |
| `ilcd-allocation-2010` | `official_guidance` | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment—Detailed guidance, first edition March2010; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | §§7.9.2–7.9.3, printed255–272/PDF275–292: attributional context, subdivision, exchange-specific determining physical causality, residual process-gate market value, reuse/recycling limits and 100% conservation. No arbitrary recovery/lifetime factor, fee clipping, or generic waste credit adopted. |
| `dguv-laser-emissions` | `official_guidance` | DGUV Institute for Occupational Safety and Health (IFA), Safe laser printers—laser copiers; https://www.dguv.de/ifa/praxishilfen/hazardous-substances/laserdrucker-kopierer/index.jsp | Studies and advice from IFA: dust/ozone/benzene/styrene screening and setup/toner-replacement context. Office-device, indoor and tested-model limits are retained; no industrial outdoor quantity, universal absence, chemical recipe or emission factor inferred. |
