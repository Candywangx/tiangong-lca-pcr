---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-books-n-e-c-in-print
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Adult literary fiction paperbacks: wet sheetfed offset and EVA perfect binding

## 1. Scope and Applicability

This PCR selects one remaining book product: a complete adult general-interest literary fiction novel in a flexible paper cover, with uncoated chemical-pulp text and cover sheets, conventionally printed by wet sheetfed offset, folded/gathered, milled at the spine, bound with non-reactive EVA hotmelt and trimmed. The novel is offered as a self-contained reading title to the general public, rather than a periodical installment, teaching resource, reference compilation or professional work. Verify the actual text, publisher's intended audience, editorial purpose and publication schedule. A novel used incidentally by a reader in education does not automatically become a textbook; an educational edition primarily designed for a formal study programme is excluded.

UN CPC 3.0 explicitly includes general-interest literary fiction under 32299. Its neighbouring entries distinguish educational, general-reference, directory, professional and children's titles; frequency distinguishes periodicals. CPC does not prescribe paper grade, binding or printing technology. The selected route is a deliberately narrower methodological subset, not coverage of all 32299 products or all book processes. No HS definition is imported. [unsd-cpc3-books]

The product has printed black narrative text and an optional separately measured CMYK printed cover, without illustrations changing its editorial purpose. Exclude children's/juvenile titles, textbooks/workbooks/teachers' resources, dictionaries/encyclopaedias/atlases, contact directories, professional/technical/scholarly books, newspapers and periodicals at any frequency, printed musical compositions, commercial catalogues/advertising, audio/e-books, loose sheets and blank stationery. Other general-interest forms such as cookbooks, travel guides, poetry and religious books are outside this selected novel subset even when classified in the same leaf. Exclude hardcover, sewing/thread/staples/spirals/PUR, coated stock, lamination/varnish/foil/inserts, board/pop-up/toy/electronic structures, digital/web/heatset/waterless/UV/EB printing and integrated papermaking.

EPA's sheetfed description, a real book printer's adult-trade capabilities, a binder manufacturer's milling/EVA/softcover options and a process-free plate original support the existence of the selected technical operations. Their combination is an author-selected representative route requiring job-level verification; these independent sources do not prove one factory's installed configuration, recipe, quantities or provider. No advertised capacity, grammage, temperature, retention factor, lifetime or historical emissions rate is adopted. [epa-eiip-printing; walsworth-books; mm-antaro; kodak-process-free]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-books-n-e-c-in-print |
| classification_refs | CPC 3.0 32299; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Complete adult general-interest prose fiction novels made in the specified uncoated-sheet, wet-sheetfed, non-reactive-EVA, flexible-paper-cover construction |
| excluded_products | Educational/reference/directory/professional/children's titles; periodicals/music/advertising/audio/electronic products; other general-interest book forms; alternative stock, finishing, printing and binding routes listed in section 1 |
| representative_product | One declared adult novel edition, black narrative text, optional CMYK cover, uncoated chemical-pulp paper, milled-spine EVA paperback, complete and accepted at printer gate |
| production_route | File/prepress; process-free CTP plate imaging; text and cover wet sheetfed offset and absorption/oxidative setting; fold/gather; spine milling; EVA spine/side glue and cover attachment; three-side trim; inspect; pack |
| market_state | Newly manufactured, first-quality-released complete novel at factory gate; dispatch packaging is accounted separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the complete printed narrative of one declared adult general-interest literary fiction novel edition |
| How much | 1 kg net accepted complete novels of that edition; report copy count and measured net copy mass as supporting information |
| How well | Verified edition/text/page sequence, legibility and print register, complete cover and trimmed dimensions, binding integrity and purchaser-agreed acceptance tests; declare measured criteria and results, without a universal performance threshold |
| How long or cycle | One manufacturing lot at first quality release; reading duration, rereading count, reader satisfaction and service lifetime are not quantified |
| reference_flow_link | `finished_novel` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | adult general-interest fiction and editorial-purpose evidence; edition/title and complete narrative; non-periodical publication schedule; text/cover page and copy count; trim size; net accepted mass and measured moisture; text and cover chemical-pulp paper grade/grammage/furnish/recycled fraction; ink colour/SKU and conventional setting; process-free plate/coating; EVA spine and side adhesive grade; absence of sewing and excluded finishing; binding/print acceptance criteria; first-release lot/cohort identity; site/period; provider geography/year/voltage/amount basis; physical and burden ownership; uncertainty and unresolved scope |

The broad mechanically printed-material identity is used only for this fully qualified complete paper novel, including retained cover, pages, ink, glue and powder. It has no mandatory unbound state; its paper-printing route is compatible with this subset. Source classification 32690 and an unrelated 3D-prototype sentence remain metadata defects needing clarification. Mailing language is not a purchased postal-service identity. No generic printed-matter average, intermediate signature, educational book, or 3D provider may replace the actual complete-novel model. UUID compatibility does not establish supplier, quantity or scientific approval. Declare every qualifier in the concrete data package. A mass reference does not establish equivalent reading service across editions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure complete net accepted novel mass after trimming and first quality release using cp_release; include retained components, exclude dispatch packaging. |
| `same_basis` | all inventory rows | reference-product Mass | kg | Final values use per 1 kg reference flow. Keep gross physical records and cohort ownership before normalization; first-release Q and inherited old-cohort Qc are distinct under release_cohorts. Never divide all monthly sales, returns or services by current new Q. |
| `supplied_basis` | formulation rows | Mass | kg | Record as-supplied ink, fountain concentrate, blanket wash and EVA formulations individually. Assayed components explain retention/releases and do not add duplicate purchase/provider inputs. Volume conversion requires actual formulation density and temperature. |
| `utilities` | electricity; natural_gas; hot_water_heat | actual reference property | MJ; m3 | Electricity uses the verified Net calorific value property and exact 1 kWh = 3.6 MJ. Gas uses Volume, with actual T/P, humidity, composition and compressibility matched to provider. Heat requires a separately verified delivered-energy property/provider and heat_ledger, never an assumed efficiency or mass-as-heat substitution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry unprinted text and cover paper sheets, complete process-free coated plates and as-supplied ink, fountain concentrate, wash and EVA received at printer |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | Adult general-interest fiction novel subset of CPC 3.0 32299 only, in the selected complete-paperback construction |
| recursive_input_rule | Purchased complete novels, opening finished stock and same-item returns retain their actual original upstream exchange vectors and cohort identities; they cannot become virgin paper receipts or newly formed output by relabelling or reinspection |
| upstream_dataset_requirement | Actual compatible paper, complete plate, complete formulations, utilities, each packaging component, transport and treatment backgrounds; retain production, delivery and end-of-life ownership once |
| disclosure | Edition/site/period, included outsourced stages, new and old cohorts, suppliers, all boundary exclusions, meters and balances, unresolved identities/providers/ranges, allocation rationale and quality limits; downstream distribution, retail, reading and novel disposal excluded |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_novel_scope` | applicability | Confirm adult fiction, general readership, complete non-periodical title and each structural/route qualifier from the actual job. Similar binding does not admit excluded editorial categories or the rest of 32299. | `unsd-cpc3-books`; `walsworth-books` |
| `b_route` | manufacturing | Include file preparation, CTP, plate make-ready and coating fate, body/cover printing and setting, fold/gather, milling, glue melting/standby/purges, cover pressing, trimming, quality release, packing, cleaning, compressors, cooling and dust extraction. Keep stage records inside novel_manufacture. | `epa-eiip-printing`; `mm-antaro`; `kodak-process-free` |
| `b_provider_once` | inputs and background models | Use one complete-formulation or explicitly complete component-supply model per actual purchase; do not add assayed ink/glue components or paper's mill energy again. Verify constituent closure, delivered state and actual provider scope. The same applies to whole containers and their components. | `ilcd-allocation-2010` |
| `b_stage_conservation` | each stage and constituent | Retain S0 + external_in + internal_in + formation = S1 + external_out + internal_out + consumption + residual. Formation/consumption require real transformation and constituent/stoichiometric evidence; matched same-state transfers are neither formation nor external receipts. At aggregation, each internal_out equals the receiving internal_in and cancels. Retain water/oxygen/carbon uptake and actual evaporation/oxidation separately; unexplained residual is uncertainty, not an identified emission. | `epa-eiip-printing` |
| `b_cohorts` | products and services | Apply release_cohorts to raw stock, WIP, new and old finished goods, failed lots and same-item returns. Internal rework and same-state warehouse transfers preserve physical identity and inherited exchange vectors; they do not generate new Q, upstream purchases or avoided burdens. | `ilcd-allocation-2010` |
| `b_gate` | waste, emissions and transport | Include actual incoming delivery and attributable waste transport/treatment once, with all gross packaging dispatch/return legs. Record outdoor releases after controls; distinguish captured dust, sewer/offsite waste and indoor exposure. Auxiliary heating is separate from ink setting; supplier electricity/heat emissions remain in backgrounds. Extra actual fuels, refrigerants, maintenance parts or chemicals require individual surveyed rows and provider review before dataset completeness. | `epa-eiip-printing` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `novel_manufacture` | Adult fiction novel wet-offset printing and EVA paperback binding | required | Actual complete edition and selected route verified | foreground | 1 kg net first-quality-released complete novel |

Stage graph: prepress/CTP → text and cover offset/setting → folding/gathering → spine milling/EVA binding/cover → trim/release → pack. Retain separate stage meters and physical signatures/covers/blocks, with matched internal links, even in this aggregated unit. The final book contains all retained components; their transfer into it is not a second external product output.

For every inventory row, section 8 release_cohorts and cohort_service govern which exchange belongs to which new or old cohort and how actual added services are assigned. This includes rows with a direct per-kg amount field; that field does not authorize dividing old or unrelated exchanges by new Q.

Every card denotes one physical exchange, with quantity to be collected, rather than a default positive recipe. Separate physically distinct grades, colours, waste streams, outlets and media. Conditional absence needs job/site evidence. No numerical ranges are established by the available boundary-compatible evidence; important-row range needs remain explicit in review metadata. Extra constituents or emissions require additional atomic identification before a concrete dataset can be called complete.

### Process: Adult fiction novel manufacture (`novel_manufacture`)

#### Inputs

##### Product flows

###### Uncoated printing, writing and packaging paper (`text_paper`)

Unprinted dry uncoated chemical-pulp sheets for the novel text. Measure by grade, moisture and lot; do not use printed signatures or incoming packaging mass.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_materials per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-printing`

###### Uncoated printing, writing and packaging paper (`cover_paper`)

Separate heavier uncoated chemical-pulp flexible cover stock. No coating, laminate, case board or jacket; measure separately even if it shares the text-paper UUID.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_materials per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `mm-antaro`

###### Finished process-free coated aluminium offset plate (`process_free_plate`)

One complete supplied coated plate, not bare cut/grained/anodized substrate. Measure whole plate and coating fate, CTP and make-ready. No separate developer/rinse in this route; UUID unresolved.

- Selected flow: Finished process-free coated aluminium offset plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_materials per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `kodak-process-free`

###### Solvent-based planographic printing ink (`ink_black`)

One black as-supplied conventional offset paste-ink formulation. Black is used for text and optionally cover; CMY are conditional cover colours. Verify actual oil/solvent chemistry and absorption/oxidative setting, full SKU and provider. Broad solvent/offset identity does not force heatset or prescribe glycol-esters. Assay components without a second upstream purchase.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_formulations per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-eiip-printing`

###### Solvent-based planographic printing ink (`ink_cyan`)

One cyan as-supplied conventional offset paste-ink formulation. Black is used for text and optionally cover; CMY are conditional cover colours. Verify actual oil/solvent chemistry and absorption/oxidative setting, full SKU and provider. Broad solvent/offset identity does not force heatset or prescribe glycol-esters. Assay components without a second upstream purchase.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_formulations per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-eiip-printing`

###### Solvent-based planographic printing ink (`ink_magenta`)

One magenta as-supplied conventional offset paste-ink formulation. Black is used for text and optionally cover; CMY are conditional cover colours. Verify actual oil/solvent chemistry and absorption/oxidative setting, full SKU and provider. Broad solvent/offset identity does not force heatset or prescribe glycol-esters. Assay components without a second upstream purchase.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_formulations per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-eiip-printing`

###### Solvent-based planographic printing ink (`ink_yellow`)

One yellow as-supplied conventional offset paste-ink formulation. Black is used for text and optionally cover; CMY are conditional cover colours. Verify actual oil/solvent chemistry and absorption/oxidative setting, full SKU and provider. Broad solvent/offset identity does not force heatset or prescribe glycol-esters. Assay components without a second upstream purchase.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_formulations per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-eiip-printing`

###### Aqueous wet-offset fountain concentrate (`fountain_concentrate`)

One actual supplied aqueous concentrate formulation. Supplier-grade chemical identity and whole-formulation UUID remain unresolved. Record all constituents and carrier water inside this whole input; separately added tap water is not its carrier water. No assumed alcohol fraction.

- Selected flow: Aqueous wet-offset fountain concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_formulations per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-eiip-printing`

###### Petroleum-distillate conventional-offset blanket wash formulation (`blanket_wash`)

One specific supplied conventional blanket-wash formulation; verify UVCB/CAS, density, water and emulsifier content. Coal-tar wash oil is not a matching formulation. A vegetable-ester alternative needs separate review; UUID unresolved, no default dose or evaporation.

- Selected flow: Petroleum-distillate conventional-offset blanket wash formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_formulations per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formulations`
- Sources: `epa-eiip-printing`

###### Hot melt adhesive (`eva_spine`)

One actual non-reactive solvent-free EVA-based spine-glue formulation, including its tackifier and wax. Measure separately by actual grade, pot cycle, retained mass and purge. The broad hotmelt identity does not prove EVA recipe, zero emissions, PUR compatibility or a melt temperature.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_binding per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `mm-antaro`

###### Hot melt adhesive (`eva_side`)

One actual non-reactive solvent-free EVA-based side-glue formulation, including its tackifier and wax. Measure separately by actual grade, pot cycle, retained mass and purge. The broad hotmelt identity does not prove EVA recipe, zero emissions, PUR compatibility or a melt temperature.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_binding per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binding`
- Sources: `mm-antaro`

###### Tap water (`water`)

Separately purchased treated tap water added to fountain/wash or attributable utility circuits. Meter added water and actual density/temperature; exclude formulation-carried water already supplied. It is not an elementary withdrawal.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_utilities per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-eiip-printing`

###### Alternating current (`electricity`)

Customer-side 1–35 kV grid-average AC, conditional on actual delivery voltage and grid. Meter all stages including compressor, cooling, extraction and glue-pot idle; match year/geography/provider. Use actual kWh times 3.6 for MJ; no UV cure is implied.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_utilities per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `mm-antaro`

###### natural gas in the gaseous state (`natural_gas`)

Conditional actual gaseous pipeline natural gas for auxiliary plant heat, not presumed ink drying. Match actual delivered m3 at recorded T/P, wet/dry, composition and compressibility; a methane CAS and equal secondary-property numbers are not a pure-methane recipe or measured density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_utilities per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Heat (`hot_water_heat`)

Conditional purchased hot-water energy from an actually verified natural-gas district/industrial heat provider. Record independent supply/return enthalpy legs under heat_ledger. The source uses Net calorific value/MJ; its secondary volume coefficient does not establish delivery temperature, pressure, water mass or usable heat. Never duplicate upstream generation or count circulation as fresh water.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_utilities per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Starch (`starch_powder`)

Conditional unmodified starch anti-setoff component with actual supplier/feedstock, grade, coating and particle distribution. Pure starch identity does not stand for a coated formulation. Track retention, separately captured residue and airborne fraction; purchased mass is not emitted mass.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_materials per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Finished corrugated shipping carton (`carton_in`)

One complete corrugated dispatch carton with actual fibre recipe, mass, owner and provider. A database carton fixes an unverified 16.6/83.4 fibre recipe and is not adopted. Preserve P/N_ext/ER and whole/component ownership under cp_packaging; UUID unresolved.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_packaging per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene film (`film_in`)

One PE dispatch-film component, CAS9002-88-4, not cover laminate or PET/PP. Record actual grade/additives, mass, owner and provider; source classification and extraneous polyester commentary need clarification. Preserve P/N_ext/ER, without assuming receipt equals consumed film.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_packaging per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Wooden pallets (`pallet_in`)

One actual wooden-board/slat pallet at the stated lumber-mill supply boundary; require compatible finished state, construction, nails/treatment and provider. Trace reusable owner/cohort and inherited vectors; new acquisition and same-item return are different events, with no default lifetime.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_packaging per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Cotton fabric (`cotton_wipe`)

Actual dry cotton cleaning cloth, new supply separated from reissued reusable cloth. Positive cloth name/synonyms support textile identity; raw-cotton classification/comment remain metadata defects. Require actual weave/fibre/grade and textile provider, not cotton cultivation alone.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_materials per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-printing`

##### Waste flows

No external incoming waste is selected; actual use requires separate identity and boundary review.

##### Elementary flows

No direct resource abstraction is selected; purchased tap water is a product input. Actual abstraction needs its own atomic flow and review.

#### Outputs

##### Product flows

###### Printed Matter (`finished_novel`)

Only the complete qualified adult literary fiction paperback first released in the new lot. cp_release measures all retained paper/cover/ink/EVA/powder in net Q. Earlier finished stock, same-item returns, rework and later dispatch cannot create Q; preserve their original Qc and per-exchange vectors.

- Selected flow: Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `unsd-cpc3-books`

###### Finished corrugated shipping carton (`carton_out`)

Actual gross outward carton as a separate packaging component, excluded from net novel mass. Preserve dispatch-to-customer versus owner-return legs, original owner/cohort/vector and real transport. It is not another production reference or an automatic disposal credit.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_packaging per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene film (`film_out`)

Actual gross outward PE film as a separate packaging component, excluded from net novel mass. Preserve dispatch-to-customer versus owner-return legs, original owner/cohort/vector and real transport. It is not another production reference or an automatic disposal credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_packaging per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Wooden pallets (`pallet_out`)

Actual gross outward wooden pallet as a separate packaging component, excluded from net novel mass. Preserve dispatch-to-customer versus owner-return legs, original owner/cohort/vector and real transport. It is not another production reference or an automatic disposal credit.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_packaging per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

###### waste paper (unspecified) (`paper_trim`)

One actual mixed paper trim/make-ready/rejected-novel stream only when collected together. Require receiver acceptance of ink/EVA/powder/moisture; separately collected grades stay separate. Retained book mass and waste are disjoint, with no assumed recovery credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Waste solid (`plate_waste`)

One actual spent complete solid metal-backed offset plate with coating/ink residue. Broad solid-waste identity is limited to this single whole as-exported stream; measure actual moisture, solids/chemistry, contamination and receiver. Do not replace it with clean pure-material scrap, double count retained contaminants, or infer hazard/treatment from the generic name.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Waste solid (`rag_waste`)

One actual one physically solid contaminated cotton-cloth stream. Broad solid-waste identity is limited to this single whole as-exported stream; measure actual moisture, solids/chemistry, contamination and receiver. Do not replace it with clean pure-material scrap, double count retained contaminants, or infer hazard/treatment from the generic name.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Waste solid (`eva_waste`)

One actual cooled solid EVA hotmelt purge. Broad solid-waste identity is limited to this single whole as-exported stream; measure actual moisture, solids/chemistry, contamination and receiver. Do not replace it with clean pure-material scrap, double count retained contaminants, or infer hazard/treatment from the generic name.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Waste solid (`powder_waste`)

One actual separately collected starch spray residue. Broad solid-waste identity is limited to this single whole as-exported stream; measure actual moisture, solids/chemistry, contamination and receiver. Do not replace it with clean pure-material scrap, double count retained contaminants, or infer hazard/treatment from the generic name.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Waste ink (`ink_waste`)

Separately collected conventional offset-ink residue, not the same ink already weighed in wash liquid, cloth or paper. Confirm the actual state/composition and receiver; broad offset/coldset name does not import a coldset process.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-eiip-printing`

###### Waste liquid (`wash_liquid_waste`)

One separately transferred whole used petroleum-distillate blanket-wash mixture stream, physically liquid at handover. Weigh whole mass, independently assay water, dissolved/suspended solids and nonaqueous volatiles; non-water mass is not automatically dry solids. Sewer/offsite treatment is a waste transfer, not direct freshwater emission.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-eiip-printing`

###### Waste liquid (`fountain_liquid_waste`)

One separately transferred whole spent aqueous fountain mixture stream, physically liquid at handover. Weigh whole mass, independently assay water, dissolved/suspended solids and nonaqueous volatiles; non-water mass is not automatically dry solids. Sewer/offsite treatment is a waste transfer, not direct freshwater emission.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `epa-eiip-printing`

###### Dust (`collected_dust`)

One separately captured spine-milling/trimming paper dust stream, with measured whole mass/moisture and actual ink/glue contamination. Generic waste-dust identity supplies no paper composition or capture factor; never add it again as airborne PM.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `mm-antaro`

###### Discarded corrugated shipping carton (`carton_waste`)

One actual segregated carton waste from incoming or dispatch packaging. Retain owner/cohort, as-exported mass and contamination; receiver/identity needs remain unresolved rather than treating it as clean printing-paper trim.

- Selected flow: Discarded corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### packaging waste (plastic) (`film_waste`)

One actual as-generated PE packaging-film waste stream before treatment. Confirm polymer/additives/contamination and receiver; not washed recycled PE resin. Gross outward waste and packaging return remain separate.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Wood waste (`pallet_waste`)

One actual wood-packaging waste stream from a discarded wooden pallet. Confirm whole as-exported composition, nails/treatment/contamination and receiver acceptance; account steel/components only once. The broad wood-packaging name/comment supports identity; the agglomerated source classification is a metadata debt, not proof this whole stream is briquetted. No percentage or recycling default is adopted.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_wastes per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

##### Elementary flows

###### isopropanol (`ipa_air`)

Conditional measured outdoor isopropanol CAS67-63-0 after actual capture/controls, from a verified constituent source. Air/unspecified identity only when finer location is unavailable. No assumed IPA recipe, emission fraction, indoor-exposure substitution or TVOC-as-carbon conversion.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-printing`

###### water vapour (`water_vapour`)

Actual outdoor net water-vapour mass from dampening/wash/paper/formulation moisture and, separately, conditional combustion. Match incoming humidity/airflow, condensate, retained product/waste water, leaks and stocks. Do not assume all water evaporates or identify the unmeasured residual as emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### particles (PM2.5) (`pm25`)

Actual outdoor particulate mass up to 2.5 micrometres from measured milling/powder or conditional auxiliary combustion after control. Captured dust is separate; retain disjoint size bins and filterable/condensable basis, never add cumulative PM10/TSP totals.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### particles (PM2.5 - PM10) (`pmcoarse`)

Actual outdoor particles above 2.5 and up to 10 micrometres; separate from pm25 and larger dust. Use matched size-resolved measurements, outlet/control and actual process coverage; no book-milling factor from paper mills.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Outdoor particles larger than 10 micrometres (`pmover10`)

Actual outdoor disjoint particle bin above 10 micrometres, not cumulative PM10. Exact medium/size identity remains unresolved. Measure independently from captured waste dust and retain actual outlet and size-method evidence.

- Selected flow: Outdoor particles larger than 10 micrometres
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional fossil CO2 from actual auxiliary combustion or documented fossil-organic oxidation. Require actual species mass and fossil/biogenic provenance; no default combustion factor, pure methane composition or oxidation efficiency. Retained book carbon is not released carbon; utility-provider emissions are not factory emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### carbon dioxide (biogenic) (`co2_biogenic`)

Conditional biogenic CO2 from proven on-site biogenic-carbon mineralisation. Require actual species mass and fossil/biogenic provenance; no default combustion factor, pure methane composition or oxidation efficiency. Retained book carbon is not released carbon; utility-provider emissions are not factory emissions.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### carbon monoxide (fossil) (`carbon_monoxide`)

Conditional fossil CO from actual auxiliary gas combustion. Require actual species mass and fossil/biogenic provenance; no default combustion factor, pure methane composition or oxidation efficiency. Retained book carbon is not released carbon; utility-provider emissions are not factory emissions.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### methane (fossil) (`methane`)

Conditional fossil methane from actual gas leakage or incomplete combustion. Require actual species mass and fossil/biogenic provenance; no default combustion factor, pure methane composition or oxidation efficiency. Retained book carbon is not released carbon; utility-provider emissions are not factory emissions.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### nitrous oxide (`nitrous_oxide`)

Conditional N2O from actual auxiliary combustion. Require actual species mass and fossil/biogenic provenance; no default combustion factor, pure methane composition or oxidation efficiency. Retained book carbon is not released carbon; utility-provider emissions are not factory emissions.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### sulfur dioxide (`sulfur_dioxide`)

Conditional SO2 from actual measured fuel sulfur/combustion conditions. Require actual species mass and fossil/biogenic provenance; no default combustion factor, pure methane composition or oxidation efficiency. Retained book carbon is not released carbon; utility-provider emissions are not factory emissions.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen oxides (`nox`)

Conditional auxiliary-combustion NOx, air/unspecified only when finer location is unavailable. Monitoring, exchange and characterization must share a demonstrated NO2-equivalent mass convention; Mass/kg alone does not establish it. Exclude N2O and do not add NO/NO2 again; quantity-basis proof remains pending.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the actual atomic physical exchange using cp_emissions per 1 kg reference flow; retain gross physical legs, inherited vectors and actual service ownership. Conditional absence requires evidence; missing data are not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

This method selects an attributional manufacturing inventory. ILCD §§7.9.2–7.9.3 provide the allocation approach within their stated situation limits; they are not a book recipe or a claim of full ILCD compliance. The following ledger/cohort implementation is this PCR's application of that approach and the declared foreground protocols. EPA VOC accounting does not justify LCA burden allocation.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_physical_vector` | all exchanges | Preserve unallocated physicalV separately from environmental burdenA for each exchange, stage, owner and cohort. Never reduce exported books, packaging, waste or emissions by a burden share. Preserve each inherited vector entry with its original provider and quantity basis. | `ilcd-allocation-2010` |
| `a_subdivide` | shared operations | Prefer separate job/stage data and virtual subdivision. Assign only the residual shared load using exchange-specific determining physical causality; retain measured driver numerator, complete denominator, window and uncertainty. Test press demand by actual sheet area/passes/runtime, glue-pot cycles and packed service separately; none is a universal allocation key. | `ilcd-allocation-2010` |
| `a_residual_value` | unresolved shared burden | Only after physical causality is unavailable, assess economic allocation at the actual joint-process gate and condition. Require complete amounts, prices and genuine conditioning/transport cost adjustments for every co-function, with sensitivity. Missing prices, negative/zero fees or an unproven joint process require review; no clip-to-zero, absolute-fee shortcut or forced share is authorized here. | `ilcd-allocation-2010` |
| `a_recycling` | trim, plates and packaging recovery | Identify actual stream status, receiver and responsibility. Record treatment and material transfers once; a sale or deposit is not an automatic virgin-material credit. Recycling/substitution and negative-value treatment cases require their own reviewed model, compatible provider boundary and explicit ownership before any credit or residual allocation. | `ilcd-allocation-2010` |
| `a_release_services` | new/old cohorts and reuse | Use release_cohorts and cohort_service for inherited burdens and actual additional service. Q=0, idle, cleanup and failed production retain their loads and stocks for justified causal assignment or explicit review, without a fabricated denominator. Reusable packaging requires measured service ownership; zero purchase price or an absent invoice never means zero burden. | `ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `novel_manufacture` | reference novel and cohort | future foreground record | title/edition; adult audience/purpose; publication schedule; page/trim/construction; lot/cohort; first-release timestamp; accepted copies; measured net mass/moisture; S0/S1 raw/WIP/newFG/oldFG; dispatch; returns; rejects | Inspect content and job brief; weigh accepted complete same-edition novels on calibrated scales after trim/binding checks, excluding packaging; trace first release and every stock movement. Sample mass only with documented design/uncertainty and checked lot weighing. Aggregation ownership conditions: release_cohorts preserves original Qc separately. | kg; copies | each lot first release and stock closure | full declared period with actual new/old cohort coverage | actual printer and declared outsourced operations | per 1 kg reference flow | originals; calibration; sampling; acceptance; identity and stock reconciliation |
| `cp_materials` | `novel_manufacture` | text/cover paper, plate, powder and cloth | future foreground record | row/grade/SKU; supplier; batch; moisture/solids; mass/tare; S0/S1; external/internal in/out; formation/consumption; stage/job; retained and waste fractions | Weigh each material/state separately and reconcile stage-conservation records; record complete plate coating and its fate, dry cloth and retained contaminants independently. Actual raw/WIP inventories must not overlap finished stock. Aggregation ownership conditions: keep physicalV and cohort ownership before assignment. | kg | every receipt/issue/return and closure | full declared period including make-ready, failures and cleaning | actual stage and supplier boundary | per 1 kg reference flow | scales; supplier specs; job issues; moisture/constituent assays; closure residuals |
| `cp_formulations` | `novel_manufacture` | each supplied ink, fountain concentrate and blanket wash | future foreground record | colour/SKU; supplier; supplied mass; density/T; complete composition/CAS/water/solids; fossil/biogenic carbon; purchase/stock/issue; retention; residue; evaporation | Weigh each whole supplied formulation separately; obtain current technical/SDS and complete supplier disclosures or validated analyses. Assess VOC species for the actual chemistry. Use component quantities for physical reconciliation; link upstream formulation or exhaustive component model once. Aggregation ownership conditions: current-cohort assignments under cohort_service. | kg; m3 | each job/material change and closure | setup, production, shutdown, storage and wash cycles in period | actual press, supplier and capture system | per 1 kg reference flow | supplier originals; assays; density conditions; inventory and species closure |
| `cp_binding` | `novel_manufacture` | spine and side EVA | future foreground record | separate glue grades/masses; formulation; melt/standby/start/stop; pot T/time; purges; internal recovery; retained glue; binder settings; quality tests | Weigh each as-supplied non-reactive EVA formulation and each purge; log heater meter and actual thermal history. Test complete binding and reconcile retained mass. No catalogue dose, temperature or lifetime is presumed. Aggregation ownership conditions: preserve failed/rework cohort assignment. | kg; MJ | each lot, pot cycle and cleanup | full period including idle and failed binding | actual binder and glue supplier | per 1 kg reference flow | glue specification; scales; heater meter; quality and purge records |
| `cp_utilities` | `novel_manufacture` | electricity, gas and hot-water service separately | future foreground record | meter/device/stage; kWh; voltage/grid/year; gas volume/T/P/wet-dry/Z/composition; heating function; hot-water supply/return masses/P/T/h; leaks/bleeds/makeup/storage; service driver | Meter prepress, printing, compressor, cooling, extraction, folding, binding/glue pot, trimming and packing; reconcile bills and independent shared meters. Measure gas separately if used. For purchased hot-water energy apply heat_ledger and verify property/provider; on-site fuel and purchased heat cannot both own the same generation. Aggregation ownership conditions: exchange-specific causal burden assignment. | MJ; kWh; m3; kg | each job/cycle; utility-bill closure | full period including standby, Q=0 and cleanup | actual plant and utility delivery boundary | per 1 kg reference flow | calibration; bills; grid/voltage; gas conditions; paired enthalpy/flow readings |
| `cp_packaging` | `novel_manufacture` | each carton, film and pallet in/out/waste leg | future foreground record | component/whole-container ID; owner; cohort; inherited exchange vector/provider; P; N_ext; ER with original outward ID; raw/WIP/newFG/oldFG/reusable S0/S1; conversion; gross dispatch; owner return; waste; trips/mass/distance/mode | For every component distinguish first external purchase P, including a component paid within an all-in package without separate invoice; first non-purchase external receipt N_ext from loan/rental/entrustment/supplied goods; genuine same-item external return ER linked to a preceding outward movement. Inspect actual whole-container/component ownership once; weigh each gross leg and retain actual outward/return/waste transport. Same-state internal transfers are stock movements, not external receipts/formation. Measure actual reuse service and repairs; no default life or cycle count. Aggregation ownership conditions: retain gross physical legs and original cohort bases under cohort_service. | kg; items; t km | each receipt, dispatch, return, repair, waste and stock closure | full period with opening and closing component cohorts | printer, actual owner, provider and transport/treatment receiver | per 1 kg reference flow | invoices/contracts including all-in price; custody/outward links; weights; trip logs; inherited vectors; mutually exclusive stocks |
| `cp_wastes` | `novel_manufacture` | each separately transferred waste | future foreground record | row/bin/state/receiver; whole as-exported mass; density/T/volume; actual water fraction; independent solids/volatile and chemical assays; stock; destination; gate fee/value | Weigh each actual separate stream at handover and reconcile contaminants once; wet mixture mass is not dry solids. Measure moisture and solids independently. Preserve paper trim versus dust, ink versus retained ink in liquid/rags, and packaging component waste versus new purchases. Confirm legal status and actual receiver route. Aggregation ownership conditions: physicalV unallocated; burdenA assigned independently. | kg | every collection/dispatch and closure | complete reporting period and waste stocks | actual plant, transporter and treatment/recycling gate | per 1 kg reference flow | scale/tare; assays; receiver acceptance; transfer notes; treatment scope/value evidence |
| `cp_emissions` | `novel_manufacture` | each outdoor chemical and particle bin | future foreground record | outlet/source/species/CAS; medium/subcompartment; composition/carbon origin; flow and concentration/time; T/P/humidity; control; inlet/outlet match; LOD/recovery; PM size/cumulative basis; NOx equivalent basis | Survey actual formulations, milling/powder and conditional combustion; use validated species-specific measurement and paired ventilation balances with compatible bases. Reconcile retained product/waste/stock and transformations; do not identify a balance residual as a chemical. Keep captured dust distinct; subtract inlet only with matched measurement/airflow closure. TVOC/carbon equivalents are QA until demonstrated species conversion. Aggregation ownership conditions: release_cohorts and cohort_service retain causal ownership. | kg; mg/m3; m3/time | representative setup/run/wash/idle/upset surveys and period closure | actual full reporting period and operating modes | actual outdoor plant releases after controls | per 1 kg reference flow | original assays; sampling/recovery/LOD/calibration; control and ventilation closure; explicit missing species |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `release_cohorts` | all inventory rows | Q is the measured net mass of newly made complete novels first passing quality release in this lot, including that cohort's newly released closing FG exactly once. Opening FG, earlier cohort Qc, same-item returns, reinspection/rework, later packing/storage/dispatch and service never create Q. WIP is excluded until first release; count and mass reconcile to unique copy/lot IDs. Retain each old cohort's original per-exchange vector and original accepted Qc. | cp_release; cp_materials; unique lot and first-release records | new-cohort Q and separate original Qc histories | `ilcd-allocation-2010` |
| `cohort_service` | all inventory rows | For a positive new-cohort Q, report each compatible assigned exchange divided by that Q per 1 kg reference flow, retaining gross unallocated physicalV alongside burdenA. Preserve old-cohort exchange vectors entry by entry; add actual additional service to that cohort using its original accepted Qc or an explicitly reviewed causal service method. Do not spread old stock/return burdens or all services over current Q. Q=0, idle/cleanup and failed-lot burdens remain in raw ledgers pending justified assignment/review; no zeroing or forced division. | cp_release; cp_packaging; all actual exchange and service records; allocation evidence | cohort-specific physical and burden accounts per 1 kg reference flow, with unassigned loads disclosed | `ilcd-allocation-2010` |
| `stage_balance` | each stage and conserved constituent | Apply b_stage_conservation with measured states and real transformations. S0 and S1 raw/WIP/newFG/oldFG/reusable stocks are disjoint. Internal links cancel only with matching material, state, quantity, owner and cohort. For each packaging component, external_in = P + N_ext + ER; ER preserves original vector and cannot generate another provider purchase. Dispatch, owner return and waste retain separate legs and transport. | cp_materials; cp_release; cp_packaging; cp_wastes; cp_emissions | stage/factory physical balances and explicit residuals | `epa-eiip-printing` |
| `heat_ledger` | hot_water_heat | Delivered heat requires independent supply and return enthalpy flows: measured integral of supply mass flow times supply enthalpy minus return mass flow times return enthalpy, on one consistent reference state and boundary. Reconcile actual leaks, bleeds, makeup, other material enthalpy crossings and stored-energy change to distinguish delivered, useful and lost heat. Use m times (hs minus hr) only after proving matching boundary mass over the same interval with those terms resolved. No assumed boiler efficiency. | cp_utilities; compatible enthalpy/property/provider definition; supply/return and all side-flow/storage records | actual delivered hot-water energy in MJ, with independent mass/energy closure | `ilcd-allocation-2010` |
| `species_mass` | each actual elementary release | Integrate compatible measured outlet species concentration times outlet flow and subtract measured matching inlet species mass; convert to kg with actual units/T/P/humidity, validated recovery and nonoverlapping intervals. Establish chemistry, carbon origin and medium; reconcile controls, stocks, product retention and waste. Missing speciation or NOx quantity convention stays unresolved. | cp_emissions; cp_formulations; cp_utilities | actual outdoor species mass before cohort assignment | `epa-eiip-printing` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | novel and route | Adult prose fiction and general readership, complete edition/page sequence, non-periodical purpose and every physical/printing/binding qualifier must be independently verified; catalogue options alone cannot qualify a job. | editorial/job brief; actual publication; equipment and supplier specifications; acceptance |
| `dq_amounts` | all rows | Collect actual amounts, composition, state, provider and compatible units; document sampling/calibration uncertainty and source limitations. Identity evidence, maximum equipment capacity and safety/environmental claims supply no recipe or default quantity. | primary factory and supplier records; calibrated meter/scale; original methods |
| `dq_cohorts` | stocks, returns and services | Reconcile unique first-release Q, old Qc, disjoint stocks and per-exchange inherited vectors; keep gross P/N_ext/ER and transport legs, no double whole/component ownership. | stock and custody ledgers; first-release/return links; provider-vector and transport audit |
| `dq_completeness` | concrete dataset | Reconcile all actual extra constituents, fuels, aids, maintenance, wastewater, leaks and emission species separately. No unobserved flow is zero. Missing ordinary auxiliary UUID is a row gap; actual reference/primary physical conflict blocks that use, while missing quantities/providers prevent quantitative completeness. | complete site/constituent survey; physical balances; receiver/provider evidence; performed/skipped checks and explicit gaps |
| `dq_allocation` | burden account | Preserve raw physicalV and assigned burdenA separately, including residual and Q=0 loads. Retain causal evidence, denominator, gate values/fees and sensitivity; unsupported allocation remains review-required. | original allocation records and independent method review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference dataset | Check adult general-interest fiction and non-periodical identity, all exclusions and complete novel qualifiers. Do not replace this independent record with the prior multi-category manufacturing PCR. No whole-leaf/all-technology applicability follows from one representative route or a generic printed-material UUID. | `unsd-cpc3-books`; `walsworth-books` |
| `v_reference` | finished_novel and all rows | Require one final reference row, 1 kg net complete novel, same final denominator and matching EN/ZH identities/units/rules. Check unique first release, new closing FG once, old Qc inheritance, returns/rework and all additional-service ownership; retained ink/glue/powder belongs in net book mass. | `ilcd-allocation-2010` |
| `v_physical` | all physical stages | Close material/water/carbon and energy by actual state, stocks and transformation, cancelling matched internal links. Require separately metered water, formulation-carried water and retained/waste/air water without duplicate inputs. Unexplained residuals and missing quantity bases stay explicit; no invented yield or plant recipe. | `epa-eiip-printing` |
| `v_packaging` | each component | Verify P includes all-in purchases, N_ext is genuinely first external non-purchase receipt, ER has preceding same-item outward proof; audit owner/cohort/inherited vector, all disjoint inventories, gross dispatch/owner-return/waste and each actual transport leg. Whole-container and component supply providers occur once, with measured reuse service or pending review. | `ilcd-allocation-2010` |
| `v_utilities` | utilities and provider selection | Recheck actual voltage/grid/year, gas-volume conditions and hot-water property/energy boundary. Heat mass mismatch requires independent enthalpy legs and actual side-flow/storage terms. Distinguish on-site generation, purchased heat and electric heating, with no duplicated generation or assumed efficiency. | `ilcd-allocation-2010` |
| `v_species` | emissions and wastes | Verify flow type, CAS where applicable, outdoor medium and exact measurement basis. PM size bins are disjoint; never add cumulative PM10/TSP to their sum or captured dust. Preserve fossil/biogenic carbon, retained carbon and actual combustion; do not infer all VOC escapes or equate TVOC-as-carbon to species. Each actual extra species needs separate identity and quantity review. | `epa-eiip-printing` |
| `v_burden_gaps` | completed quantitative dataset | Review allocation separately from physical balances and database identity. Unresolved values/fees, incompatible providers, unassigned Q=0 loads, missing species/quantities or unsupported service basis prevent a completeness claim. Ordinary auxiliary UUID gaps are specific row debts, not evidence that all methodology is unavailable. Scientific and bilingual acceptance remain independent reviews. | `ilcd-allocation-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacturing input for the same qualified adult novel edition and construction, after actual data and provider review |
| allowed_use | Route-specific factory-gate production with measured new/old cohorts, complete compatible supply/treatment models and disclosed uncertainty |
| excluded_use | All-books or all-32299 average; excluded editorial categories/technologies; equal reading-service/lifetime claim; fabricated default recipe or ready quantitative dataset inferred from UUIDs |
| required_metadata | Full reference qualifiers; original edition/cohort and first release; actual site/year/providers; boundary and source limitations; grade/formulation; physical and burden/transport ownership; allocation and measurement methods |
| required_quality_disclosure | Range/UUID/provider/quantity/species gaps; balance residuals; uncertainty; allocation sensitivity; Q=0 loads; performed and skipped validation; excluded scope |
| update_trigger | Editorial audience/purpose, edition/construction, stock/formulation, plate/printing/binding, utilities/provider boundary, cohort/service method, packaging ownership, receiver or measurement changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-books` | `official_guidance` | UNSD CPC 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; official code page https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/32299 | PDF/printed pp.148–152: book categories, 32299 adult/general-interest fiction applicability, audio exclusion, periodical frequency and music/advertising separation. Classification evidence only; no manufacturing recipe or HS rule adopted. |
| `epa-eiip-printing` | `official_guidance` | US EPA EIIP Vol. II Chapter 15, Preferred and Alternative Methods for Estimating Air Emissions from Printing, Packaging and Graphic Arts, May 2002, https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | §2.1.1/PDF14–15, Figure15.2-1 and §4.1/PDF31 onward: wet sheetfed operations, setting, materials and physical record accounting. Historical air-emission guidance, not LCA allocation, universal factors, recipes or actual site observations. |
| `mm-antaro` | `literature` | Müller Martini, Antaro official product page, https://mullermartini.com/en/product/antaro/ | Paragraphs under Compact, Top class end products and Unbeatable variability: gathering/offset, milling, EVA option and softcover/trim capability; configuration must be verified. No catalogue amount, speed, grammage, formula or life adopted. |
| `kodak-process-free` | `literature` | Kodak SONORA Process Free Plates Sustainability datasheet, 2026 one-page edition, https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | PDF1: absence of a separate plate processor/rinse in this selected option. Does not eliminate plate manufacture, coating fate, make-ready, press wash or other factory waste. |
| `walsworth-books` | `literature` | Walsworth, Full-Service Commercial Book Printing, https://www.walsworth.com/book-printing | Print Platforms, Cover Decorations and Markets We Serve, 27 October 2026 page: real adult-trade printer with sheetfed and perfect-binding options, alongside alternatives. Technical existence and contrary-route context only; no proof of one exact EVA job, supplier or recipe. |
| `ilcd-allocation-2010` | `official_guidance` | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | §§7.9.2–7.9.3, printed255–272/PDF275–292, especially255–258 and263–266: attributional subdivision, exchange-specific determining physical causality, residual gate/condition economic allocation and special recycling/negative-fee limits. General method assessed for this manufacturing study; cohort, packaging and heat-ledger implementation requires actual foreground evidence; no blanket ILCD compliance or recycling formula claimed. |
