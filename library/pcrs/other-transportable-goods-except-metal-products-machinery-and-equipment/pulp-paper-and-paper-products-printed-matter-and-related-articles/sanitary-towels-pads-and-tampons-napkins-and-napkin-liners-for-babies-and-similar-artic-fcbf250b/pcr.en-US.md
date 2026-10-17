---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sanitary-towels-pads-and-tampons-napkins-and-napkin-liners-for-babies-and-similar-artic-fcbf250b
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Conversion of fluff-pulp/SAP disposable taped baby diapers

## 1. Scope and Applicability

This PCR covers converter-gate manufacture of unused, fluff-pulp/sodium-polyacrylate disposable taped baby diapers. The representative actual product design is the fragrance-free US Pampers Swaddlers taped diaper, size 4; manufacturer construction and fastening instructions support the component boundary, not a verified proprietary factory recipe. Apply to a concrete measured lot with its actual component specification. The required design contains PP/PE topsheet, polyester acquisition layer, ECF-purified cellulose/SAP core, PE/PP outer cover, PP cuff and fastening components, elastane, polymer adhesive, balm and wetness indicator. No per-diaper mass, recipe fraction or absorption capacity is prescribed. [pampers-swaddlers-construction; pampers-diaper-components]

The method is a purchased-component, electrically powered dry defibration/forming, assembly and pack-out route. Wet pulping, integrated pulp production, on-site combustion, purchased heat/steam, solvent coating/printing and on-site effluent treatment require a separately evidenced route extension. Purchased printed/coated components retain their embedded material burdens upstream. Sanititary pads/tampons, adult incontinence products, cloth/reusable diapers, swimming diapers, pull-on pants and fluff-free cores are outside this methodology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sanitary-towels-pads-and-tampons-napkins-and-napkin-liners-for-babies-and-similar-artic-fcbf250b |
| classification_refs | CPC 3.0 32196; narrower |
| covered_products | Disposable taped baby diapers with fluff-pulp/SAP core; purchased-component electric conversion |
| excluded_products | Pads; tampons; adult incontinence; reusable; swimming; pull-on; fluff-free designs |
| representative_product | Pampers Swaddlers fragrance-free taped baby diaper, US size 4 design; actual lot specification required |
| production_route | Purchased ECF chemical fluff pulp sheets and distinct component inputs → dry defibration/SAP dosing/core forming → assembly and electric adhesive/coating application → cutting/QC/pack-out; one aggregate foreground unit, separate stage meters |
| market_state | Unused, complete, accepted diaper at converter dispatch gate, actual moisture; accompanying packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a specified complete taped baby diaper designed to contain infant excreta |
| How much | 1 kg accepted complete net diaper product; this is a manufacturing declared unit |
| How well | Declared actual size, component specification and lot acceptance tests; no generic absorption or leak-protection equivalence |
| How long or cycle | One manufacturing cycle to converter gate for a single-use product; use duration is outside the unit |
| reference_flow_link | `diaper_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sanitary towels (pads) and tampons, napkins and napkin liners for babies and similar articles, of any material `aaedb37f-8a1a-4dea-aa96-3613fa13bb0e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Taped baby diaper; size and lot; complete BOM; pulp and SAP identity; material and supplied-state of each component; actual net moisture; fragrance/lotion/indicator state; accepted QC protocol/results; all-electric converter route and supply voltage; packaging exclusion; provider dataset bases; site/year; external waste and emission routes |

The broad reference record includes baby diapers and specifies finished manufactured product at plant. Its other subcategories do not define this PCR. Every concrete dataset must declare the qualifiers above; mass equivalence alone does not establish functional equivalence across sizes or products.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `diaper_output` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg complete net accepted diapers at dispatch moisture. All inventory and collection aggregation use this same reference_flow basis. Do not substitute pure pulp/SAP mass or include packaging. |
| `net_batch_basis` | All inventory rows | Mass | kg | Collect raw Q by cp_output and raw external period totals A_i on the same complete pool. The expressions q_i=A_i/Q on inventory cards denote the single normalize_net_product calculation; they do not instruct another division. Counts corroborate measured net mass and never establish an assumed item weight. |
| `received_pulp_basis` | `fluff_pulp` | Mass | kg | Keep measured as-received mass and dry-solids fraction s separate. Supplier AD reporting is a declared convention, not received moisture. Verify conversion and background reference basis before linking. |
| `electric_energy_basis` | `grid_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert delivered kWh to MJ by 3.6 only. Preserve supplier voltage/mix and losses; internal step-down losses are in foreground consumption if inside the gate, not an extra purchased electricity input. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased pulp sheets and individually declared components at converter receipt; actual supplier grade/state/route and inbound freight boundary disclosed |
| starting_condition_role | foreground_module |
| product_classification_scope | CPC32196 taped infant-diaper subset only; method is independent from the classification label |
| recursive_input_rule | No recursive diaper manufacturing for purchased completed diapers: record the actual input and compatible upstream dataset, disclose refurbishment/rework. Internal rework remains internal; do not purchase the same rejected unit again. |
| upstream_dataset_requirement | Supplier-specific component manufacture and transport consistent with reference properties; for pulp include actual wood sourcing, kraft pulping/recovery, ECF bleaching, drying and wastewater treatment. Use BREF only for relevant pulp process/reporting context, not a lumber dataset or a diaper recipe. |
| disclosure | Converter module versus cradle-to-gate aggregate; geography/year; complete component BOM; supplied subassembly states; actual product moisture; utility and treatment boundaries; all exclusions and gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete` | `conversion` | Include receipt/handling, dry defibration, SAP dosing/core forming, web and film assembly, elastics/fasteners, actual coating, cutting, inspection/rejects, pack-out, dust collection and attributable electric auxiliaries. Explicitly retain upstream burdens for every input; do not present a converter module as a full lifecycle result. | pampers-swaddlers-construction; ea-nappies-2008; pampers-manufacturing-traceability |
| `upstream_pulp_boundary` | `fluff_pulp` | Purchased pulp manufacture is upstream, including recovery/boilers and mill treatment. Supplier wet/AD/oven-dry bases must be reconciled with received mass. Do not bring sawmill evidence into pulp process quantities. Retain upstream biogenic CO2 exchanges and carbon origin even if a climate reporting convention excludes them from a subtotal. | jrc-pulp-paper-bref-2015 |
| `physical_network` | `conversion` | Aggregate manufacture and packaging into one foreground unit so the same complete product is output only once. Retain stage meters and a separate physical process diagram/balances. Each internal transfer has equal mass/identity at both ends; internal recirculation and collected return are not external exchange or credited waste. | ea-nappies-2008 |
| `actual_air_path` | `conversion` | Inspect dry defibration/core-forming/cutting exhaust and fugitive pathways. BREF7.1.10 establishes possible paper-cutting dust, not a diaper/SAP factor. Keep capture and external particulate emission separate and measured; classify size and composition without correction flows. Additional actual volatilized species need separate verified elementary rows before dataset completion. | jrc-pulp-paper-bref-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `conversion` | Purchased-component diaper conversion and pack-out | required | Declared electrically powered dry route | foreground | 1 kg accepted complete net diapers |

Physical stages: receipt → dry pulp defibration → metered pulp/SAP core forming → web/film/fastener/elastic/actual-coating assembly → cutting → QC → retail and shipping pack-out. Dust collection and internal rework link to their actual stage. Stage quantities remain auditable even though the external unit is aggregated. Conditional cards are used only for the actual lot; absent cards require documented absence, not a missing-data zero. Formulations and supplied finished webs are single real product exchanges; never use a component bundle in place of separate materials physically received.

### Process: Diaper conversion and pack-out (`conversion`)

#### Inputs

##### Product flows

###### Delivered fluff pulp (`fluff_pulp`)

Delivered ECF-bleached, non-dissolving chemical fluff pulp sheets for dry defibration. Record actual grade, kraft route, producer, as-received moisture and delivery mass. A broad non-dissolving pulp identity is usable only with these qualifiers; it does not select a supplier dataset or a universal dry-matter factor.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction; jrc-pulp-paper-bref-2015

###### Sodium polyacrylate SAP granules (`sap`)

Crosslinked sodium polyacrylate superabsorbent granules, recorded by delivered formulation mass, actual CAS/neutralization/crosslinking and supplier grade. Do not substitute acrylic acid, polyacrylamide or polyacrylate-2; do not import an absorption multiplier.

- Selected flow: Crosslinked sodium polyacrylate superabsorbent granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### PP/PE topsheet web (`topsheet`)

One delivered PP/PE nonwoven topsheet grade. Record fibre chemistry, bonding route, surfactant finish and emollient state from the supplier. The broad nonwoven identity does not imply spunbonding. A pre-coated web includes its coating in received mass; then the separate emollient input is absent.

- Selected flow: Non-woven fabric `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### PP leak-barrier cuff web (`cuff_web`)

One PP nonwoven cuff grade, separately metered from topsheet and outer facing. Retain the actual coating and pigment content. No fictional separate ingredient exchange is created for a finish already supplied on the web.

- Selected flow: Non-woven fabric `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### PP outer facing web (`outer_facing`)

Delivered PP nonwoven outer facing; record print/finish mass within the actual supplied grade. It is separate from the PE backsheet in this route. A purchased PE/PP laminate must instead be represented by its real one-piece input identity before using this dataset.

- Selected flow: Non-woven fabric `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Polyester acquisition layer (`acquisition_web`)

Delivered polyester nonwoven acquisition/distribution web. Confirm whether the supplied grade includes PE binder fibres or other constituents; the polyester identity is conditional on an actually polyester web and a compatible supplier inventory.

Require supplier proof of actual nonwoven polyester construction and compatible reference basis; a different quilted/composite construction requires identity review.

- Selected flow: Textile, nonwoven polyester `5ac0c411-47ce-40ed-8ce1-9aaf9c351ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Nonwoven core wrap (`core_wrap_nonwoven`)

Conditional: one actual nonwoven core wrap web, with polymer grade and bonding declared. This construction detail is not disclosed for every Swaddlers lot; establish it by supplier BOM/disassembly. Do not add this row merely because another product has a wrap.

- Selected flow: Non-woven fabric `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Cellulose tissue core wrap (`core_wrap_tissue`)

Conditional: actual purchased cellulose tissue wrap, if used in the declared lot. The historic UK nappy description supports this possibility, not a current Swaddlers default. Disclose whether it replaces or accompanies the nonwoven wrap and meter each physical web once.

- Selected flow: Toilet or facial tissue stock, towel or napkin stock and similar paper, cellulose wadding and webs of cellulose fibres `3070a34a-8d40-426e-9299-7c367b0dca21`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: ea-nappies-2008

###### Printed PE barrier film (`backsheet`)

One delivered PE barrier film grade including its supplied fillers, print and finish. Verify actual PE chemistry/CAS9002-88-4, film state, porosity and provider; this UUID carries an inconsistent external classification, so physical identity alone is retained conditionally. The supplied pigment solids are inside this input, not a second fictitious pigment purchase.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### PP mechanical fastening tab (`hook_fastener`)

One actual PP mechanical hook tab grade, excluding a separately delivered PE carrier. Record its mass, receiving state and supplier manufacture; PP resin or filament is not a finished hook tab.

The broad plastic-product identity locates this one actual finished PP mechanical hook component, not PP resin, a collection of fasteners or a metal part. Require the actual hook geometry, PP/additive composition, supplied subassembly state, process and compatible supplier reference mass; no molding route or fastening performance is inferred.

- Selected flow: Commodity plastic products `5b5f649d-db2b-426c-9bd2-aff11fce2e3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### PP nonwoven landing strip (`landing_web`)

Conditional on a separately delivered PP nonwoven landing strip. Record actual fastening-compatible web grade and coatings; a supplied complete fastening assembly is one real input instead and requires its own identity.

- Selected flow: Non-woven fabric `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### PE fastening-tab carrier film (`tab_carrier`)

Conditional on PE carrier film delivered separately from the PP hook. Record the PE grade and adhesive already present. Exclude this separate row when the complete fastening tab is purchased as a single component.

Verify actual PE-film grade/composition, CAS9002-88-4 and supplier physical/reference state; the unresolved source metadata does not establish a compatible delivered background.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Elastane elastic strand (`elastic_strand`)

Actual elastane strands for leg/waist fit, not natural rubber. Confirm the polyether-polyurea copolymer identity described by the selected record and actual strand form with the supplier; a different elastomer chemistry requires a different identity.

Require actual continuous elastic-strand form and supplier/source confirmation that the broad fibre identity applies, with the declared chemistry and delivered mass; mixed fabric/staple metadata does not establish strand manufacture. If the source is limited to fabric or staple fibre, a compatible strand identity is required.

- Selected flow: Spandex `b722c9ee-6aa7-46ec-ba55-bde79502aaca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Solid thermoplastic construction adhesive (`construction_adhesive`)

One purchased solvent-free thermoplastic hot-melt construction adhesive grade. Supplier proof of this physical route is required: the producer only discloses polymer adhesives, not every proprietary grade. If the actual glue is reactive or waterborne this row is unavailable. Measure glue issue/returns and incorporation/purge separately.

Require the actual entire supplied solid, solvent-free, reversibly softened thermoplastic formulation and compatible provider mass; no vulcanization, rubber article or chemical curing is inferred.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Solid thermoplastic elastic attachment adhesive (`elastic_adhesive`)

Conditional: a second, separately supplied hot-melt adhesive grade for elastics. If one grade serves both roles, partition the single metered issue into disjoint role totals rather than duplicating it. Chemistry/provider conditions are the same as construction_adhesive.

The same actual solid thermoplastic formulation and provider-state requirements apply; role subdivision never duplicates one physical adhesive purchase.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Topsheet emollient coating formulation (`emollient`)

One actual purchased emollient/balm formulation applied to the topsheet. Record product name, complete composition, solids, lot and incorporation mass. Producer disclosure confirms the balm, but does not disclose a complete recipe; do not assume petrolatum, stearyl alcohol or aloe. Absent as an on-site input for pre-coated topsheet.

The broad functional Coating identity represents the complete actual supplied balm coating, not a pure ingredient. Record delivered phase, full supplier formulation/SDS, water/volatile/solid fractions and delivery versus incorporated mass before background linkage. Separate actual application charge, retained amount, stock/return and purge; no chemical recipe or coating temperature is defaulted.

- Selected flow: Coating `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### Wetness-indicator formulation (`wetness_indicator`)

One actual delivered pH-sensitive wetness-indicator formulation with a water-soluble colorant. Record product/colour chemistry, carrier, solids and application route from the provider. It is neither the generic construction adhesive nor an inferred pure dye. If already included in purchased film, count it in that film only.

The broad functional Coating identity represents this separately supplied complete pH-sensitive indicator coating. Verify actual supplied formulation/SDS, phase, colorant/carrier chemistry, water/volatiles/solids, application and compatible supplier mass; absent raw CAS does not verify a particular colorant. Charge, retained coating and independent purge remain separate measured accounts, without imposing a hot-melt, aqueous or solvent recipe.

- Selected flow: Coating `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: pampers-swaddlers-construction

###### PE retail pack bag (`pack_bag`)

Delivered PE bag used for the actual pack count, including supplied print. Record net packaging mass and packaging losses separately. Packaging accompanies the net diaper output but never enlarges its reference mass denominator.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: ea-nappies-2008

###### Corrugated shipping carton (`pack_carton`)

One real corrugated transport box grade. Record actual fibre mix, print, provider and mass; do not impose the candidate database box recipe of 16.6% virgin/83.4% recycled fibre.

The broad packaging record positively includes corrugated cases; use it only for this one actual delivered carton, never an aggregated bag/carton/wrap bundle. Require actual fibre composition, board construction, print/glue, moisture, grade and supplier/plant-gate mass compatibility. No 16.6%/83.4% fibre recipe or generic-world supplier dataset is adopted.

The source record's English name is “Packaging materials, unspecified”; the selected-flow display below narrows that verified broad identity to this single corrugated carton. Its generic name does not authorize a packaging bundle or establish a supplier match.

- Selected flow: Corrugated shipping carton `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: ea-nappies-2008

###### Purchased medium-voltage electricity (`grid_electricity`)

Conditional on actual 1–35 kV grid-average supply to the user. Meter the delivered supply point, including electric defibration, forming, bonding/heating, compressed air, HVAC, inspection and packaging within scope. Retain this record’s Net calorific value property label/MJ; kWh-to-MJ conversion by 3.6 does not select a geographic mix or prove a different voltage. Record supplier, year and loss boundary; use a different verified identity for a different delivery voltage.

The raw CN supply geography and MV grid-average consumption mix do not default the actual site country or background. Require actual site/country/year/provider and voltage/loss-boundary compatibility before linkage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: pampers-manufacturing-traceability

###### Purchased tap water for cleaning (`cleaning_water`)

Conditional: externally supplied tap water for actual converter cleaning and relevant auxiliaries. This dry converting route has no pulping or wet forming water. Measure supplied kg or convert metered m3 using measured site density; the broad physical identity does not identify a local waterworks dataset.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: ea-nappies-2008

###### Aqueous neutral cleaning detergent formulation (`cleaning_detergent`)

Conditional on the named neutral aqueous cleaner actually used; record purchased formulation mass, complete supplier composition, dilution and route. Add a separate atomic row for each additional cleaning product used. Textile soaping formulations are not assumed compatible.

The broad hard-surface cleaning-agent identity conditionally locates this one complete neutral aqueous delivered formulation. Confirm actual cleaning purpose, full grade/SDS composition, supplied concentration and measured pH, water fraction, dilution water, phase and compatible provider mass basis. It does not establish a laundry/soaping recipe, pure surfactant mass or supplier background.

- Selected flow: Washing Agent `1ee04905-0d1a-453e-9d3a-9ce612d79be0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: ea-nappies-2008

#### Outputs

##### Product flows

###### Accepted complete net diapers (`diaper_output`)

The sole reference product output is 1 kg of complete, unused, accepted taped diapers at actual dispatch moisture, including pulp, SAP, all webs/films, tabs, elastics, retained glue, pigments, balm and indicator. Exclude retail/transport packaging, rejected units and removable test specimens from net product mass. Record packaging accompanying delivery separately.

- Selected flow: Sanitary towels (pads) and tampons, napkins and napkin liners for babies and similar articles, of any material `aaedb37f-8a1a-4dea-aa96-3613fa13bb0e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_output`
- Sources: pampers-swaddlers-construction; ea-nappies-2008

##### Waste flows

###### Captured fluff-pulp dust (`captured_pulp_dust`)

Conditional: separately captured pulp dust before SAP mixing, leaving the boundary to a named receiver. Confirm composition, moisture and no hazardous contamination; broad industrial dust physical identity is conditional, not an air emission. Internal return is only a measured internal transfer, not this external waste.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Captured absorbent-core dust (`captured_core_dust`)

Conditional: a physically separate collector stream after pulp/SAP mixing; measure actual cellulose/SAP fractions and receiver conditions. Do not call this pure SAP or add its total to pre-mix dust if both labels refer to one bin. Reuse of broad Dust identity is limited to an actually collected particulate waste.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Unused diaper conversion rejects (`mixed_rejects`)

Actual composite rejects/trim leaving as one receiver stream; include constituents, glue contamination and moisture. Exclude excreta and post-consumer diapers. Disassembly or segregated recovery fractions cannot also be counted as complete rejected units.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Segregated PP nonwoven trim (`pp_trim`)

Conditional: separately collected PP nonwoven trim at dispatch. Record coatings and receiving route. A mandatory mechanical-recycling UUID is not a default for unspecific waste removal. If in mixed_rejects, this separate amount is absent.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Segregated PE barrier-film trim (`pe_trim`)

Conditional: segregated PE film trim, including actual fillers/print/glue state and receiver. It must not be linked to PET waste or to already-cleaned recycled PE without proof of treatment state.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Segregated polyester acquisition-web trim (`pet_trim`)

Conditional: one separately collected polyester nonwoven trim stream, with actual binder, finish and receiver. Exclude any amount already in composite rejects.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Segregated cellulose tissue-wrap trim (`tissue_trim`)

Conditional on actual tissue wrap and separate collection; record adhesive contamination and receiving grade. Paper recycling treatment is not inferred solely from the material name.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Segregated elastane-strand trim (`elastic_trim`)

Conditional: one separate elastane trim stream; retain polymer grade, glue contamination and receiving conditions. Do not describe it as natural-rubber waste.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Solid thermoplastic adhesive purge (`adhesive_purge`)

Conditional: separately removed solid thermoplastic adhesive purge of one identified grade. Create a distinct row for another incompatible purge grade; do not use wafer-production glue residue.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Diaper emollient-coating purge (`emollient_purge`)

Conditional on on-site balm coating and separately removed purge of the actual formulation; keep composition and receiver. A contaminated cleaning wipe is a different waste requiring its own row.

Measure actual phase at handoff, full balm composition, water/solids and whole mass or representative density if converted from volume. The phase is not established by application equipment: retain the UUID gap until an actually compatible solid, semi-solid or liquid identity and receiver basis is verified.

- Selected flow: Diaper emollient-coating purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### Diaper wetness-indicator purge (`indicator_purge`)

Conditional on on-site indicator application and separately removed purge of its actual formulation. Record carrier, colourant and receiver; never combine this with adhesive purge merely because both use a heated applicator.

Measure actual handoff phase, full indicator formulation, water/solids and whole mass or representative density if converted. Retain the UUID gap while phase and receiver compatibility remain unknown; do not force this purge into solid adhesive waste or liquid wastewater.

- Selected flow: Diaper wetness-indicator purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: pampers-swaddlers-construction

###### PE retail-bag packaging trim (`pack_bag_trim`)

Conditional: actual separate pack-bag waste, measured apart from incorporated bags. Record print and receiving state; do not duplicate a bin already recorded as pe_trim.

Broad industrial solid-waste identity applies only to this independently collected actual solid stream. Preserve its named stage, material/adhesive/coating composition, moisture, weighed whole mass, inventory and actual receiver acceptance/treatment; do not merge streams, infer a hazardous status, cleaned/recycled grade or credit, or count constituents and their composite waste twice.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: ea-nappies-2008

###### Corrugated carton packaging trim (`pack_board_trim`)

Conditional: actual cardboard packaging trim/rejected boxes of the declared grade. Record glue, coatings and receiver. The record’s illustrative loss percentage is not an amount rule.

- Selected flow: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: ea-nappies-2008

###### Cleaning wastewater to external treatment (`cleaning_wastewater`)

Conditional: one actual aqueous converter-cleaning effluent stream to a sewer or external treatment provider, with volume, density, detergent/solids composition and receiver conditions. It is neither a freshwater withdrawal nor a direct environmental release. Do not reuse manganese-residue washing wastewater. No on-site treatment is implied.

The broad industrial liquid-waste identity locates only this independent whole wet aqueous stream delivered to the actual named external receiver. Weigh whole wet kg or convert actual volume with a measured representative density; record water, solids, cleaner and other contamination, collection stage and acceptance/treatment conditions. Keep H2O and contaminant subledgers without a second external waste/water exchange; no hazard class, generic disposal route, credit or freshwater release is inferred.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: ea-nappies-2008

##### Elementary flows

###### Fine airborne particles (`pm_fine`)

Conditional on measured particles (PM2.5) actually crossing to outdoor air, unspecified subcompartment, from dry defibration/forming/cutting. Use this non-overlapping size interval only; retain sampling method, exhaust flow, controls, fugitive coverage and site composition. Do not treat captured or internally returned dust as an emission, or assume a positive amount from a database match.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: jrc-pulp-paper-bref-2015; ea-nappies-2008

###### Coarse airborne particles (`pm_coarse`)

Conditional on measured particles (PM2.5–PM10) actually crossing to outdoor air, unspecified subcompartment, from dry defibration/forming/cutting. Use this non-overlapping size interval only; retain sampling method, exhaust flow, controls, fugitive coverage and site composition. Do not treat captured or internally returned dust as an emission, or assume a positive amount from a database match.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: jrc-pulp-paper-bref-2015; ea-nappies-2008

###### Large airborne particles (`pm_large`)

Conditional on measured particles (>PM10) actually crossing to outdoor air, unspecified subcompartment, from dry defibration/forming/cutting. Use this non-overlapping size interval only; retain sampling method, exhaust flow, controls, fugitive coverage and site composition. Do not treat captured or internally returned dust as an emission, or assume a positive amount from a database match.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i=A_i/Q; actual external batch total and net accepted batch mass from the linked protocol; conditional absence requires proof
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: jrc-pulp-paper-bref-2015; ea-nappies-2008

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | `conversion` | First investigate subdivision or system expansion to avoid allocation; isolate the actual lot/line with direct meters where subdivision is possible. If expansion is justified, include the additional functions and report the expanded system as a whole. Only after documenting why these approaches are unavailable, partition unavoidable shared energy/services using a relevant measured physical relationship; if unavailable, justify an alternative relationship with actual economic records and sensitivity. No universal mass or price fraction applies. Review before choosing substitution; no automatic scrap credit. | ec-pef-allocation-2021 |
| `physical_vs_burden` | `conversion` | Keep unallocated physical mass/water/carbon ledgers and diagrams separate from attributed environmental-burden ledgers. Physical coproduct or waste outputs and internal transfers stay at measured quantities; never mechanically multiply their physical output by the diaper allocation fraction. Attribute only justified common burdens without changing conservation. | ec-pef-allocation-2021 |
| `waste_rework` | `conversion` | Rejects are not saleable coproducts by default. Document any real external coproduct function/receiver before allocating. Internal rework remains physical recovery, without displacement credit; external waste treatment stays connected to the actual stream and actual receiver. | ec-pef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `conversion` | diaper_output | Calibrated dispatch and QC records | lot; size; date; accepted batches; gross and packaging tare; removed samples; reject mass; net Q; actual moisture; QC test method/results | Weigh complete accepted net diapers with calibrated scales and independently verified packaging tare; never infer item mass from marketing size or age. Retain raw production, dispatch, QC, returns and opening/closing feed, WIP and finished-stock records for the complete matched site/SKU/state/route period, including failed and zero-output runs, rejects, rework, changeovers, starts/stops, cleaning and attributable idle operations with their actual burdens. Q is unique newly generated accepted complete net diaper production in this pool, excluding packaging, rejects and removed samples. Use calibrated accepted-production weighing, or reconcile dispatch plus closing minus opening accepted stock with actual transfers/returns; do not reapply a stock correction to production already measured. Count a returned and reaccepted net batch once; internal rework is not new output. Track opening/closing WIP and stocks with their embodied material and carried production burdens, transferring rather than duplicating or dropping them; opening product dispatched is not new production. Retain the raw positive Q and each raw period total A_i without division here; normalize_net_product is the sole normalization step. If Q<=0 or the pool/burden match is unestablished, preserve raw records and leave normalized exchanges unavailable. | kg | Each lot and dispatch | Complete representative operating period, including changeovers, starts and losses | Declared line and SKU | per 1 kg reference flow | Scale calibration; tare samples; lot QA and stock reconciliation |
| `cp_material` | `conversion` | Each material input | Supplier/BOM and issue records | flow row; grade; CAS/composition; supplier; received/issued/returned stocks; moisture/solids; incorporation; internal rework; pigment/finish; coating state; density or web area/areal mass if converted |Weigh issues minus unused returns or reconcile opening+receipts-closing stock with transfer corrections. Screen all actual attributable maintenance oils/greases, filters, wipes and replacement consumables from service/issue/return/stock records. Document exclusions or supported absence; add separate atomic inputs and external spent streams with actual chemistry/form/quantity/receiver before dataset use, never a generic per-machine default. Keep row-specific stage logs; supplied subassemblies and embedded ingredients cannot be counted again. Supplier reference basis must be separately verified. A_i=sum disjoint external consumption totals for the matching lots; record incorporation, losses and stock change separately Retain each A_i as its raw matched-period total in the stated numerator unit, without prior division by Q; normalize_net_product performs the only normalization using cp_output Q.| kg | Each receipt/lot/shift | Same period/lots as Q | Declared product grades and line | per 1 kg reference flow | Supplier specifications; calibrated scale/roll meter; BOM/disassembly and stock balance |
| `cp_energy` | `conversion` | grid_electricity | Revenue/submeter and operating logs | delivered kWh; voltage; supplier; mix/year; meter boundary; stage kWh; machine hours/load; HVAC/compressor scope; allocation driver; losses |Read calibrated delivered-power meter and stage meters, reconcile bills and loss boundaries. Collect electric heating and compressed-air/HVAC energy, including idle/start-up attributable to the lot; avoid meter overlaps. A_e=3.6 times the justified attributed delivered kWh; stage and auxiliary totals reconcile to the same purchase meter Retain each A_i as its raw matched-period total in the stated numerator unit, without prior division by Q; normalize_net_product performs the only normalization using cp_output Q.| kWh; MJ | Interval meter and each campaign | Same complete period as Q | Factory delivery and declared stages | per 1 kg reference flow | Meter calibration, invoice, supply contract, driver justification |
| `cp_waste` | `conversion` | Each separate outgoing production/material waste | Collector and receiver records | row/bin id; stage; actual handoff phase; weighed whole net kg; representative density if volume converted; moisture; cellulose/SAP/polymer/glue fractions; contamination; internal return; receiver/treatment; stored waste |Weigh each real separately received stream and inspect composition. Reconcile generation, internal return, stored material and removal tickets. Distinguish composite rejects from separately recovered fractions. A_i=sum net external quantities after stock reconciliation; internally returned material is excluded Retain each A_i as its raw matched-period total in the stated numerator unit, without prior division by Q; normalize_net_product performs the only normalization using cp_output Q.| kg | Each collection and removal | Same period, with waste stock correction | Actual named collector and receiver | per 1 kg reference flow | Scale tickets; waste composition; receiver contract; return logs |
| `cp_cleaning` | `conversion` | Water, cleaner and effluent separately | Cleaning meter and receiver records | water volume/mass; actual density; cleaner grade/composition/mass/dilution; effluent volume/density; contaminants; retained water; receiver; vapour or other exit; stock |Meter each actual input and effluent; sample water density and effluent composition using documented lab methods. Keep sewer handoff distinct from a direct discharge; complete any actual evaporation/discharge row before dataset use. Aggregate each stream separately; use actual density for m3-to-kg; retain whole physical water balance without conflating wastewater and tap input Retain each A_i as its raw matched-period total in the stated numerator unit, without prior division by Q; normalize_net_product performs the only normalization using cp_output Q.| kg; m3 | Each cleaning event and discharge | Matching lots and relevant auxiliary period | Declared line cleaning/auxiliaries | per 1 kg reference flow | Meters; lab density/analysis; cleaning logs; receiving conditions |
| `cp_air` | `conversion` | Each actual non-overlapping particulate interval | Stack/fugitive monitoring | source/vent id; control; sample method/time; particle cuts; concentration and basis; dry/wet/reference gas volume; period exhaust; run/load; fugitive pathway; below-detection bounds; composition |Use actual calibrated exhaust-flow and concentration/particle-size measurements representative of route and controls; align gas bases. Inventory all relevant vents and fugitive paths. If only total dust is known, retain the size-resolution gap rather than fabricate fractions. A_j=sum concentration_j times matching exhaust volume times 10^-6 plus independently measured fugitive kg; size bins mutually exclusive; no PM10 total added to its sub-bins Retain each A_i as its raw matched-period total in the stated numerator unit, without prior division by Q; normalize_net_product performs the only normalization using cp_output Q.| mg/m3; m3; kg | Validated sampling campaign with operational logs | Matched operating conditions and period Q | Outdoor air across converter boundary | per 1 kg reference flow | Lab methods/calibration; particle cut definitions; vent map; coverage and detection bounds |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_net_product` | Every external inventory row | For Q>0 with the complete matched pool and carried burdens established by cp_output, calculate q_i=A_i/Q exactly once from each raw external row total in its native numerator unit. Collection protocols retain raw totals; identical card expressions are references to this calculation. Convert native units before this step and do not divide an already normalized value again. Preserve complete physical exchange quantities and stock transfers separately from justified attributed environmental burdens. If Q<=0 or matching is unresolved, retain raw records and leave q_i unavailable. | A_i actual row total; Q measured complete net accepted kg; cp_output plus linked row protocol | Row unit per 1 kg net accepted diapers | pampers-manufacturing-traceability |
| `pulp_reference_conversion` | `fluff_pulp` | m_dry=m_received*s; m_provider=m_dry/s_provider | Measured received mass and solids s; separately declared supplier reference solids s_provider>0 | Provider-reference kg consistent with linked inventory. Use 0.90 only if that provider explicitly uses BREF AD convention; never default received s. | jrc-pulp-paper-bref-2015 |
| `electricity_conversion` | `grid_electricity` | A_e=3.6*E_kWh; retain the raw campaign MJ total for normalize_net_product only | cp_energy; cp_output | Raw campaign MJ; normalized MJ/kg only in normalize_net_product | pampers-manufacturing-traceability |
| `mass_water_carbon_ledgers` | `conversion` | At the production acceptance boundary, inputs + opening raw-material/WIP stock = newly accepted net diapers Q + separately identified other product/material transfers out + accompanying packaging + wastes/emissions + unused-material returns + closing raw-material/WIP stock; include any actual transfers into production and match their quantities at both ends. Do not add finished stocks of those same accepted diapers to this production ledger. Where actual finished storage/dispatch is included, keep a linked finished-stock ledger: opening finished stock + newly accepted production transferred in + other actual returns/transfers in = actual dispatch + other actual withdrawals/transfers out + closing finished stock. Returned/reaccepted lot transfers do not create new Q. On consolidation cancel the acceptance/rework handoffs and use actual external product dispatch with closing finished stock, never Q as an extra physical output as well. Retain all actual included handling, packing, storage and dispatch operations and their complete burdens, assigned to the matched lot/cohort; this clarification changes neither Q nor operation coverage. balance each material on measured dry/wet basis, water and carbon separately. Internal transfer quantities cancel. Preserve measured residual and uncertainty, not a forced yield. Each ledger uses receipts and actual handoffs at its own stated boundary consistently, not stock-adjusted consumption plus the same stock movements twice. Keep measured material-specific water/carbon fractions and origins for every actual component, formulation, auxiliary and packaging; unknown fractions/origins remain unknown. Water includes material/formulation moisture, retained product, shipped packaging, separate whole-wet waste and stocks; any measured net vapour subtracts matching incoming-air humidity before a reviewed outdoor-water elementary row is used. Constituent H2O/contaminants are subledgers, not duplicate external wastewater exchanges. Packaging receipts+opening reconcile independently to measured shipped tare, external scraps/returns and closing stocks, all outside Q. | cp_material; cp_output; cp_waste; cp_cleaning; cp_air | Unallocated physical ledgers, with fibre/polymer carbon retained in product and origin identified | ea-nappies-2008 |
| `exclusive_particle_bins` | pm_fine; pm_coarse; pm_large | If cumulative PM10 and PM2.5 are available on identical sampling bases, PM2.5–10=PM10-PM2.5; if total dust on that same basis is available, >PM10=total dust-PM10. Reject negative or mismatched-basis differences. Otherwise measure each size interval; do not infer missing bins or add cumulative totals to fractions. | cp_air | kg/kg; outdoor-air unspecified | jrc-pulp-paper-bref-2015 |
| `shared_burden` | Unavoidable shared utilities | B_lot=B_common*d_lot/sum(d_k), only for an evidenced relevant driver d; add directly metered lot burdens separately. Keep the physical quantities unchanged in the source ledgers. | cp_energy; measured driver and other coproduct records | attributed burden | ec-pef-allocation-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | All rows and reference | Actual physical chemistry/form/route, Chinese official UUID display, reference property/unit and supplier reference basis separately verified. Blank identities or unresolved provider conversions block those dataset exchanges, not proof of zero. | Supplier specs; original identity fields; basis records |
| `dq_quantities` | All amounts | No recipe, single-diaper mass, absorption multiplier or default emissions. Retain calibration, uncertainty, stock movements, actual component mass and allocation rationale for matching lots. | cp_output; cp_material; cp_energy; cp_waste; cp_cleaning; cp_air |
| `dq_scope` | Full dataset | List all actual component, utility, loss and emission pathways, including embedded pigments/finishes, formulation solids and actual attributable maintenance consumables/spent streams. Actual phase, maintenance and water-path uncertainty requires evidence or reviewed atomic extensions before dataset completeness, not invented zero or guessed recipes. Extend atomic inventory before use when an actual missing material, fuel, steam, volatile species, water exit or waste appears. Missing periods/particle bins remain explicitly inconclusive. | Plant diagram; lot BOM/disassembly; monitoring and receiver map |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `diaper_output` | Require exactly one complete product output tied to the reference, Q>0, net mass including all actual retained components, and matching 1 kg denominator in all rows/protocols/calculations and both languages. Reject packaging in Q, invented item masses, size mixing without lot separation and duplicate intermediate reference outputs. | pampers-swaddlers-construction |
| `validate_boundary_identity` | `conversion` | Validate route, BOM, supplied-component states, upstream pulp boundary and supplier property/basis compatibility. Unresolved SAP/formulation/fastener/waste UUIDs and unknown grade conversions remain dataset blockers until resolved or documented absent. Do not silently use a near-name chemical or unrelated wastewater. | jrc-pulp-paper-bref-2015; pampers-swaddlers-construction |
| `validate_conservation` | `conversion` | Require separate physical and burden ledgers, conserved internal links, packaging and reject stock reconciliation, and complete water/carbon balance with reported residuals/uncertainty. No automatic waste/coproduct credits or mechanical allocation of physical output. | ec-pef-allocation-2021; ea-nappies-2008 |
| `validate_air_completeness` | pm_fine; pm_coarse; pm_large | Require correct outdoor-air medium, mutually exclusive particle intervals, actual exhaust/fugitive coverage and gas bases. Captured dust must not be counted as airborne emission. Missing monitoring is unknown, not zero; a total-only measurement cannot justify three resolved fractions. Additional real emissions require separately verified species/media. | jrc-pulp-paper-bref-2015 |
| `validate_claims` | Comparison and completeness | Do not compare a kilogram manufacturing unit with an excreta-containment service without separately evidenced count, tested function, usage and end-of-life scenarios. Report checks performed/skipped, errors, unknown coverage and unresolved provider identity separately from PCR maturity; an authored candidate is not independent scientific approval. | ea-nappies-2008 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Transparent converter inventory for the defined design and measured route; aggregate with verified upstream and freight datasets |
| excluded_use | Whole-class CPC coverage, service-equivalent comparison, use/end-of-life conclusions, other diaper routes or unresolved exchange amounts |
| required_metadata | Product size/lot/BOM and QC; provider/grade/quantity bases; actual site/year; net mass/moisture and excluded packaging; all component/waste/air conditions; foreground/upstream/freight boundaries; complete source and flow references |
| required_quality_disclosure | Unresolved identities/conversions, monitoring and period coverage, conditional absences, shared-burden drivers, balance residuals/uncertainty, reference physical subset and source limitations |
| update_trigger | Changed formulation, web/film/fastener state, pulp route, utility delivery, QC specification, waste/emission route or newly resolved evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| pampers-swaddlers-construction | literature | https://www.pampers.com/en-us/products/pampers-swaddlers-diapers | Producer product/Ingredients and How to use sections; Swaddlers taped construction and fragrance-free state. Manufacturer evidence, not independent approval. No marketing performance, weight, recipe or confidential plant specifics adopted. |
| pampers-diaper-components | literature | https://www.pampers.com/en-us/about-us/quality-and-safety/article/whats-in-a-pampers-diaper | Producer component-function disclosure; material families and their role, not quantitative performance or universal formulation. |
| pampers-manufacturing-traceability | literature | https://www.pampers.com/en-us/about-us/quality-and-safety/article/manufacturing-process | Manufacturer continuous assembly/inspection/packaging and lot/material traceability. Collection protocols and normalization are explicit PCR requirements, not quantities from this page. |
| ea-nappies-2008 | official_guidance | https://assets.publishing.service.gov.uk/media/5a7c4054e5274a1b00422810/scho0808boir-e-e.pdf | Environment Agency SC010018/SR2 (2008), sections1.2–1.3, printed3/PDF7 and figure1.1 printed5/PDF9. Historical UK2006 component and lifecycle structure only; no table1.2 weight/percentages, use rate or study impacts used as defaults. |
| jrc-pulp-paper-bref-2015 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | JRC2015: net-production and AD convention printed49/PDF87; kraft mill processes3.1 printed196/PDF234; paper cutting dust7.1.10 printed670/PDF708. Pulp supplier reporting/process context and qualitative paper-cutting dust potential; no diaper/SAP BAT claim, emission factor or source-mill default. |
| ec-pef-allocation-2021 | official_guidance | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Commission Recommendation(EU)2021/2279 Annex I4.5, PDF63–64. Generic multifunctionality hierarchy, without a universal driver/share, substitution credit or full PEF/CFF claim. |
