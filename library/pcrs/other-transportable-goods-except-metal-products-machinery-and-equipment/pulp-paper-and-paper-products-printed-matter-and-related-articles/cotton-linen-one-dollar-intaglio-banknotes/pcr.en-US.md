---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cotton-linen-one-dollar-intaglio-banknotes
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Cotton-linen one-dollar intaglio banknotes

## 1. Scope and Applicability

This PCR covers a paper security-printing unit for new US one-dollar Federal Reserve notes: after actual unprinted cotton-linen currency paper and named prepared-ink handoffs, steel-plate intaglio, vault drying, letterpress serial/seal printing, inspection/recovery, cutting, banding/shrink packing and aqueous-caustic cylinder wiping with wastewater pretreatment, ending at Federal Reserve pickup readiness. BEP and its Western Currency Facility originals establish this route subset, not an industry recipe or current site certification.

The unit starts at actual prepared paper, ink and printing-plate handoffs; it does not claim BEP purchases all ink or plates. Actual same-site ink blending, fibre preparation/papermaking, engraving/plating and central heat supply must appear as quantified linked units with conserved handoffs in a complete manufacturing lifecyclemodel, replacing the corresponding supplied backgrounds. Their absence prevents a claim of complete factory LCI. Confidential formulations may support actual backgrounds through protected supplier audit, but no constituents or ink doses may be invented.

Polymer notes, other pure-cotton notes without this cotton-linen construction, variants with composite metal/polymer security strips or added fluorescent coatings, adhesive-backed/liner-supported stamps, securities and cheques are excluded. Embedded red/blue fibres remain within actual paper-provider composition and are not presumed to be a particular fluorescent substance. Security substrate, two printing technologies and wiping/pretreatment establish a material methodology difference; face-value purpose alone does not.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cotton-linen-one-dollar-intaglio-banknotes |
| classification_refs | CPC 3.0 32610; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | This new one-dollar cotton-linen paper-note subset with steel intaglio/letterpress numbering and aqueous-caustic wiping/pretreatment |
| excluded_products | Polymer and other notes; composite security strips/additional fluorescent coatings; stamps and adhesive backs/liners; cheques, securities, circulated notes; UV/electron-beam or solvent heat-set routes |
| representative_product | Cotton-linen one-dollar intaglio banknotes |
| production_route | Prepared-material handoff → green-back steel intaglio → vault drying → black-face steel intaglio → vault drying → inspection/letterpress numbering and seals → cutting/fit-note recovery → banding/shrink wrapping; aqueous wiping → coagulation/centrifugation and pH adjustment → POTW |
| market_state | Accepted unissued new finished paper notes, packed at gate for delivery; net reference mass excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Physical manufacture output of printed and security-accepted one-dollar paper notes in this subset |
| How much | 1 kg net accepted finished notes |
| How well | Declared issue design/series, paper grade, ink batches, numbering, cutting and security acceptance; no universal numeric quality threshold |
| How long or cycle | Factory-gate output over a named production period, without default circulation lifetime, financial-service function or face-value equivalence |
| reference_flow_link | `finished_notes` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unused postage, revenue or similar stamps, stamp-impressed paper, cheque forms, banknotes, stock, share or bond certificates and similar documents of title `209872aa-113b-401e-90a2-d640b3506711` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/period/series/accepted design; cotton-linen paper lot/moisture/red-blue fibres and actual upstream; each colour/technology ink formulation/provider; actual drying/wiping/pretreatment version; plate preparation; delivered reagent strengths; each packing construction/adhesive back; utility delivery basis; accepted net mass/reject-rework stocks; waste receivers and environmental releases; model boundary and data gaps |

Declare every qualifier in metadata or traceable collection records. The broad reference-flow display does not expand this PCR scope.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net accepted notes weighed with calibrated cp_output; exclude packaging, work in progress and rejects. No individual-note mass is fixed. |
| `common_denominator` | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Every row uses the same lot/period accepted net output mass as denominator. Preserve raw numerator units; collection aggregation and inventory are per 1 kg reference flow. Missing or zero denominator prevents normalization. |
| `solution_basis` | solutions, inks and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Separate whole supplied wet formulation/solution mass from active-substance mass using actual batch strength, not literature defaults. Additional water is separate; included carrier water or adhesive is not counted twice. |
| `electricity_units` | `electricity` | Electrical energy | MJ | Convert actual below-1-kV US user-side metered electricity by 1 kWh = 3.6 MJ; verify actual voltage and transformer/loss boundary. Unknown US/GLO identity and provider remain pending. |
| `heat_basis` | `steam` | Net delivered enthalpy energy | MJ | Require actual steam/condensate mass, pressure, temperature, dryness and provider net-delivery definition; unknown heat/background compatibility remains pending, never inferred from a steam MJ property or pressure candidate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual prepared unprinted currency paper, four named ink formulations, engraved plates and auxiliary/utility handoffs at the printing unit, from verified external supply or required linked same-site upstream |
| starting_condition_role | Explicit foreground handoff; neither asserts all purchases nor removes paper/ink/plate/heat preparation burdens |
| product_classification_scope | Narrower one-dollar paper security-printing subset of CPC3.0:32610 |
| recursive_input_rule | Internal rework and fit-note recovery retain conserved physical circulation; circulated returned notes are not virgin paper and do not recursively invoke finished-output production |
| upstream_dataset_requirement | Actual compatible substrate, prepared-ink, reagent, plate/plating, packing, energy, water and delivery backgrounds; real same-site stages must be quantified/linked and replace matching backgrounds; downstream waste/POTW treatment remains required |
| disclosure | Actual providers, upstream/downstream coverage and conserved handoffs, route/series/version, exclusions/extensions, unit/concentration/energy bases, air/water/solid-release measurements and unresolved fields |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | applicability | Select only this one-dollar cotton-linen, steel-intaglio/letterpress and aqueous-caustic wiping route. BEP original one-dollar offset exception takes precedence over the mixed-denomination PWS general description. Exclude polymer, composite security strips, added fluorescent coatings, adhesive stamps, securities/cheques and other printing/curing routes. | bep-manufacture; uscep-one-dollar; bep-wcf-pws-2018 |
| b_handoff | upstream coverage | Actual in-house ink blending, paper manufacture, engraving/plating and central utilities cannot disappear at a modelling handoff. Each needs atomic inventory, actual measurements/releases and compatible reference quantity; conserve both ends of its handoff and replace rather than duplicate supplied backgrounds. | bep-manufacture; bep-wcf-pws-2018; jrc-paper-bref-2015 |
| b_physical | stage and allocation ledgers | Aggregate one printing-treatment foreground unit while retaining stage paper/water/ink/carbon and stock ledgers. Internal transfers/rework are neither extra final products nor outgoing releases. Keep physical balances separate from allocated environmental burdens; allocation fractions never scale actual waste/co-product delivery quantities. |  |
| b_waste | water and waste boundary | Include wiping and actual wastewater pretreatment; separate paper waste, collected dust, wet sludge, segregated spent solvent and sewer effluent. Sewer handoff is not direct freshwater elementary release; link actual POTW treatment and its releases. Historical PWS disposal/hazard state cannot establish current receiver conditions. | bep-wcf-pws-2018 |
| b_air | air and utility releases | Record actual outdoor boundary releases by species; indoor exposure is not outdoor discharge and size bins cannot overlap. Measure central boilers independently within linked utility units; paper cutting or printing factors cannot stand in for boiler emissions. Retain actual biogenic CO2 in LCI regardless of a GHG reporting convention; retained product carbon is not emitted carbon. | jrc-paper-bref-2015; niosh-bep-1988; bep-stewardship |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_currency_printing` | Printing, drying, numbering/inspection, cutting/packing and wiping pretreatment | required | declared prepared-input handoff | foreground | `finished_notes` |

Follow the physical sequence in section 2; keep raw-wipe-to-treatment transfers and in-process printed sheets as stage ledgers, without duplicate external product flows. Finish and pack within the same aggregate unit with exactly one finished_notes product output. Every additional actual chemical, filter medium, cleaning cloth, lubricant grade, packing layer or emission species needs its own atomic row; missing current evidence never means zero.

### Process: Currency printing and wiping pretreatment (`p_currency_printing`)

#### Inputs

##### Product flows

###### Unprinted cotton-linen currency paper sheets (`security_paper`)

One actual supplied unprinted paper grade with red/blue embedded security fibres. The official 75% cotton/25% linen description identifies this substrate; it does not specify input pulp coefficients, fibre colour chemistry, moisture, wet-strength resin or a complete recipe. Obtain actual Crane lot specification and upstream fibre preparation, papermaking, chemicals, heat, broke and effluent coverage. No wood-pulp sheet or finished-security-document UUID replaces this input.

- Selected flow: Unprinted cotton-linen currency paper sheets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-manufacture`; `uscep-one-dollar`; `jrc-paper-bref-2015`

###### Green intaglio currency printing ink (`ink_green_intaglio`)

One actual green intaglio formulation supplied to its named press stage. Record complete wet formulation mass, batch, carrier/solids and prepared-ink provider. Keep the other colour and the other printing technology as separate exchanges even if one physical formula is eventually verified. BEP describes internal blending: require a quantified upstream ink-preparation unit or verified supplier dataset, not a fictitious purchase or a reconstructed confidential recipe. No pigment-only, water-based, UV, flexographic or solvent gravure identity is presumed.

- Selected flow: Green intaglio currency printing ink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_ink and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `bep-manufacture`; `nist-intaglio-1992`

###### Green letterpress currency printing ink (`ink_green_letterpress`)

One actual green letterpress formulation supplied to its named press stage. Record complete wet formulation mass, batch, carrier/solids and prepared-ink provider. Keep the other colour and the other printing technology as separate exchanges even if one physical formula is eventually verified. BEP describes internal blending: require a quantified upstream ink-preparation unit or verified supplier dataset, not a fictitious purchase or a reconstructed confidential recipe. No pigment-only, water-based, UV, flexographic or solvent gravure identity is presumed.

- Selected flow: Green letterpress currency printing ink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_ink and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `bep-manufacture`; `nist-intaglio-1992`

###### Black intaglio currency printing ink (`ink_black_intaglio`)

One actual black intaglio formulation supplied to its named press stage. Record complete wet formulation mass, batch, carrier/solids and prepared-ink provider. Keep the other colour and the other printing technology as separate exchanges even if one physical formula is eventually verified. BEP describes internal blending: require a quantified upstream ink-preparation unit or verified supplier dataset, not a fictitious purchase or a reconstructed confidential recipe. No pigment-only, water-based, UV, flexographic or solvent gravure identity is presumed.

- Selected flow: Black intaglio currency printing ink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_ink and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `bep-manufacture`; `nist-intaglio-1992`

###### Black letterpress currency printing ink (`ink_black_letterpress`)

One actual black letterpress formulation supplied to its named press stage. Record complete wet formulation mass, batch, carrier/solids and prepared-ink provider. Keep the other colour and the other printing technology as separate exchanges even if one physical formula is eventually verified. BEP describes internal blending: require a quantified upstream ink-preparation unit or verified supplier dataset, not a fictitious purchase or a reconstructed confidential recipe. No pigment-only, water-based, UV, flexographic or solvent gravure identity is presumed.

- Selected flow: Black letterpress currency printing ink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_ink and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `bep-manufacture`; `nist-intaglio-1992`

###### US user-side low-voltage alternating current (`electricity`)

One actual US user-side grid-average alternating-current exchange below 1 kV, conditional on the measured supply voltage. Record stage meters, auxiliaries, inspection, vault conditioning, wiping/treatment and shrink heating. Require actual US grid/year/provider and incoming voltage, transformation and loss boundary. No compatible US/GLO flow identity has been established; keep the flow UUID blank and do not use a CN supply or generation-specific identity. Metered kWh convert by 1 kWh = 3.6 MJ; other actual voltages require their own verified exchange.

- Selected flow: US user-side low-voltage alternating current
- Flow property / unit: Electrical energy / MJ
- Amount rule: Measure this row boundary quantity using cp_energy and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `bep-stewardship`

###### Softened water for aqueous cylinder wiping (`water`)

Record additional soft-water makeup once, separate from water already present in purchased reagent solutions. Declare the actual softening technology and provider; use an ion-exchange identity only with proof of that actual treatment route. Retain measured density and temperature for the mass/water balance; a database mass coefficient is not water density.

- Selected flow: Softened water for aqueous cylinder wiping
- Flow property / unit: Volume / m3
- Amount rule: Measure this row boundary quantity using cp_water and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `bep-wcf-pws-2018`

###### Sodium hydroxide solution, 50% (`sodium_hydroxide`)

Source-qualified branch only: one whole supplied 50% aqueous NaOH solution, reflecting the historical WCF PWS supply condition. Select this identity only when actual site/period and current lot certificate confirm the concentration and whole-solution provider basis. The PWS is not a current factory-wide default or a wiping-bath recipe. If delivered strength differs or is unknown, retain a separately specified actual sodium-hydroxide solution exchange with blank UUID until verified; do not force it into this 50% identity or assign zero. Separate actual active NaOH and included carrier water in subledgers without duplicate inputs. No dose or bath percentage is fixed; historical neutral-water research cannot prove current caustic absence.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-wcf-pws-2018`; `nist-intaglio-1992`

###### Aqueous sulfonated castor oil wiping surfactant solution (`castor_oil`)

One actual delivered surfactant formulation. PWS terminology and its solution strength are case evidence, not a universal molecular salt or recipe: current SDS/CAS, sulfation versus sulfonation, counterion, active fraction and provider must resolve the chemistry. Ordinary castor oil, soap and sulfonated kerosene are rejected as replacements.

- Selected flow: Aqueous sulfonated castor oil wiping surfactant solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-wcf-pws-2018`

###### White spirit and special boiling point industrial spirits (`mineral_spirits`)

Only actual non-fuel petroleum mineral spirits used for press cleaning. Verify SDS, boiling/flash range, aromatic fraction and supplied grade; the broad record also includes other distillates, which this PCR does not select. Its official Chinese baseName is mistranslated, while classification and both comments identify petroleum solvent, not beverage alcohol or ethanol. No solvent loss or species emission fraction is assumed.

- Selected flow: White spirit and special boiling point industrial spirits `5fb93398-c4c6-4b60-bb16-ca956bc35985`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-wcf-pws-2018`

###### Currency denomination binding band (`paper_band`)

One supplied binding-band grade, including any coating/printing or adhesive that is already part of it. Producer confirms bands but not stock composition; obtain actual paper/polymer construction and do not import a generic steel band or raw paper identity. Report stock and counted bands with measured mass.

- Selected flow: Currency denomination binding band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-manufacture`

###### Plastic film (`shrink_film`)

This one plastic shrink-film grade is used for the actual packing levels once each. Broad film identity includes several polymers; require actual layer structure, resin, additives, gauge, recycled fraction and provider. No PE, PVC, composite foil or laminate composition is presumed; conflicting polymer/provider data block linkage. Packaging stays outside net note mass but inside its inventory.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-manufacture`

###### Printed currency-pack barcode label (`barcode_label`)

One actual finished label construction with declared stock, ink and any adhesive backing. Count and weigh the supplied label; do not add its embedded adhesive as a second supplied input. An electronics-only packing label does not establish this supplied label identity. A gum-backed stamp, its release liner and this packing label are different products.

- Selected flow: Printed currency-pack barcode label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-manufacture`

###### Engraved steel currency intaglio printing plate (`printing_plate`)

One prepared durable engraved plate product, with actual steel/coating and preparation provider. Record attributable replacement/repair over documented useful production, not full plate mass at every pass. Actual in-house engraving/plating requires linked foreground units and their separate chemicals and releases; copper/nickel/chromium are not an invented plate composition.

- Selected flow: Engraved steel currency intaglio printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_tooling and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tooling`
- Sources: `bep-manufacture`; `bep-wcf-pws-2018`

###### Steam for currency-printing conditioning (`steam`)

Conditional only when an actual supplied steam service is used in this handoff. Require steam mass, measured absolute pressure (with any gauge-pressure conversion documented), temperature, dryness, condensate-return mass/state, line losses and provider net-delivered-heat definition. Pressure/state are currently unknown: retain raw records and an explicit gap, without calculating enthalpy, inventing steam properties or choosing a pressure-specific UUID. Quantify net delivered enthalpy only after these measurements and the provider reference basis are verified; boiler fuel or an unqualified steam MJ property cannot replace it. Same-site boiler supply requires a quantified linked utility unit with real fuel and emissions.

- Selected flow: Steam for currency-printing conditioning
- Flow property / unit: Net delivered enthalpy energy / MJ
- Amount rule: Measure this row boundary quantity using cp_heat and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `bep-stewardship`

###### Calcium chloride aqueous coagulation solution (`calcium_chloride`)

One whole supplied aqueous coagulation solution used in ink separation. Historical PWS nominal supply strength is source-specific; actual current lot strength, solution reference mass and provider route must be proven. No compatible whole-solution identity is established; dry or unspecified-strength calcium chloride cannot replace it, and CN supply does not prove US delivery. Keep the UUID blank without fixing a dose; include actual manufacture and carrier water once.

- Selected flow: Calcium chloride aqueous coagulation solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-wcf-pws-2018`

###### Sulfuric acid aqueous pretreatment reagent (`sulfuric_acid`)

One actual supplied acid solution for pH control, with lot strength and titration/dosing records. Source does not state supply strength: neither a 98% solution nor oleum can identify this input without matching actual delivery evidence. No generic acid dose or neutralization salt yield is assigned.

- Selected flow: Sulfuric acid aqueous pretreatment reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-wcf-pws-2018`

###### Currency press hydraulic lubricating oil (`hydraulic_oil`)

One actual hydraulic-oil grade, conditional on attributable makeup/replacement. Measure additions, drained oil and stored inventory; leakage entering wiping effluent belongs to that effluent composition, not a second environmental emission. An identity restricted to vacuum-distilled or PAO oil requires actual matching grade evidence. Separate other actual oil grades and their waste handoffs.

- Selected flow: Currency press hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_material and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `bep-wcf-pws-2018`

#### Outputs

##### Product flows

###### Unused postage, revenue or similar stamps, stamp-impressed paper, cheque forms, banknotes, stock, share or bond certificates and similar documents of title (`finished_notes`)

Exactly one final product output: accepted new US one-dollar cotton-linen paper notes, numbered/cut and awaiting Federal Reserve pickup. Broad finished-document flow contains this subset without contradictory route. Exclude bands/film/labels, rejects, face-value dollars and in-process sheets from net output. Recovered fit notes count once only after final acceptance.

- Selected flow: Unused postage, revenue or similar stamps, stamp-impressed paper, cheque forms, banknotes, stock, share or bond certificates and similar documents of title `209872aa-113b-401e-90a2-d640b3506711`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `bep-manufacture`; `uscep-one-dollar`

##### Waste flows

###### waste paper (unspecified) (`security_paper_waste`)

One segregated outgoing stream of destroyed/rejected cotton-linen currency paper and cutting trim with actual retained ink/fibres. Broad paper-waste identity does not establish clean grade, recycling or authorized destruction. Confirm whole handoff mass, moisture, contamination, secure recipient and treatment. Fit-note recovery before destruction is internal rework, not this waste. Keep clean unprinted trim separate if separately handed off.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_waste and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `bep-manufacture`; `bep-stewardship`; `jrc-paper-bref-2015`

###### Centrifuged intaglio-ink coagulation sludge (`ink_sludge`)

One actual separated wet centrifuge sludge/cake handoff containing ink, salts, entrained oil and water. Confirm actual physical state, net wet mass excluding the container, independently measured water and method-defined dry solids, chemistry and receiver acceptance. A generic solid-waste identity is eligible only after actual wet solid/cake state is verified; a liquid slurry must not be labelled solid, and moisture does not require a dry-solids reference. No current lot/state evidence establishes that selection, so retain this specific exchange with blank UUID. Historical PWS solid-precipitate and disposal wording is case evidence, not current hazard/fate certification; pharmaceutical BOD wastewater and slag are incompatible.

- Selected flow: Centrifuged intaglio-ink coagulation sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_waste and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `bep-wcf-pws-2018`

###### Waste liquid (`spent_wipe`)

Only the single whole pH-adjusted post-pretreatment aqueous effluent handoff to the sanitary sewer/POTW. Verify composition, wet mass/volume-density and receiver capacity/acceptance. Internal raw wipe transfer to onsite treatment is a stage ledger with conserved quantity, not another outgoing row. Not an elementary freshwater discharge; require downstream POTW treatment and its actual environmental releases. Record whole-liquid volume V, sample temperature T and density rho at the same T/composition, giving net wet mass m = V × rho; alternatively weigh net mass after tare. Independently measure water mass fraction: water mass is m × w_H2O, and non-water mass is m × (1 − w_H2O). Non-water is not synonymous with dry or suspended solids: dissolved salts, solvent and oil require separate analytical subledgers. Constituents and pollutant loads qualify the one whole-liquid exchange and downstream treatment; never duplicate them as additional waste handoffs.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_waste and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `bep-wcf-pws-2018`

###### Waste liquid (`spent_solvent`)

One separately collected liquid spent-mineral-spirits stream if it actually leaves for recovery/treatment. Record solvent, water and ink content plus whole delivered mass and named recipient. Solvent already routed into wiping effluent is counted there only. Do not default to hazardous disposal or assume total cleaning-solvent input is emitted. Record whole-liquid volume V, sample temperature T and density rho at the same T/composition, giving net wet mass m = V × rho; alternatively weigh net mass after tare. Independently measure water mass fraction: water mass is m × w_H2O, and non-water mass is m × (1 − w_H2O). Non-water is not synonymous with dry or suspended solids: dissolved salts, solvent and oil require separate analytical subledgers. Constituents and pollutant loads qualify the one whole-liquid exchange and downstream treatment; never duplicate them as additional waste handoffs.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_waste and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `bep-wcf-pws-2018`

###### Dust (`captured_dust`)

One actual captured paper/ink cutting or handling dust waste stream, not airborne discharge. Broad industrial-dust identity is conditional on collector-stage, moisture, paper/ink composition and recipient acceptance. Weigh whole collected handoff and reconcile retained collector stocks. Dust remaining indoors is neither a second waste handoff nor an outdoor elementary emission.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_waste and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`; `niosh-bep-1988`

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Measure only the actual post-capture outdoor-air release of this non-overlapping particle-size bin, unspecified air subcompartment. Include cutting and dry sheet/ink handling; no positive emission factor or default control efficiency. Preserve sampling, flow rate, collection efficiency, operating hours and uncertainty. Never sum nested total PM, PM10 and PM2.5 as separate releases; obtain a size split or mark completeness pending.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_air and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`; `niosh-bep-1988`; `epa-pm201a-2020`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Measure only the actual post-capture outdoor-air release of this non-overlapping particle-size bin, unspecified air subcompartment. Include cutting and dry sheet/ink handling; no positive emission factor or default control efficiency. Preserve sampling, flow rate, collection efficiency, operating hours and uncertainty. Never sum nested total PM, PM10 and PM2.5 as separate releases; obtain a size split or mark completeness pending.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_air and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`; `niosh-bep-1988`; `epa-pm201a-2020`

###### particles (> PM10) (`pm_large`)

Measure only the actual post-capture outdoor-air release of this non-overlapping particle-size bin, unspecified air subcompartment. Include cutting and dry sheet/ink handling; no positive emission factor or default control efficiency. Preserve sampling, flow rate, collection efficiency, operating hours and uncertainty. Never sum nested total PM, PM10 and PM2.5 as separate releases; obtain a size split or mark completeness pending.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_air and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`; `niosh-bep-1988`; `epa-pm201a-2020`

###### water vapour (`water_vapour`)

Only actual evaporated process-water mass released to outdoor air, with baseline humidity and retained paper/solution moisture separated. Verify water balance across fresh solution water, soft makeup, stocks, effluent, sludge and paper. Do not count humidifier circulation or boiler-stack water here if already in linked utility supply.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_air and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `bep-wcf-pws-2018`; `jrc-paper-bref-2015`

###### formaldehyde (`formaldehyde`)

CAS 50-00-0, actual immediate outdoor-air release only; exclude indoor exposure and long-term-air records. Historical NIOSH paper/ink offgassing motivates screening, not a current resin recipe, positive emission, total VOC proxy or concentration-to-output factor. Require current formulation/retained-paper evidence and appropriate outdoor exhaust/abatement measurement; separately record each other actual volatile species.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this row boundary quantity using cp_air and normalize by same-period accepted net note mass; no default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `niosh-bep-1988`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_rework | recovery | Recovered fit notes are internal rework. Count once in finally accepted mass and retain actual rejected waste separately. Face-value currency is neither product mass nor an environmental allocation driver. | bep-manufacture; bep-stewardship |
| a_shared | shared operations | Prefer submetering, batches and separable processes. Allocate shared printing, vault conditioning, wiping and treatment burdens with verified causal drivers such as actual area/coverage, machine time, paper mass or pollutant load where justified. Never assume equal ink formulation/dose across denominations or allocate by banknote monetary value. |  |
| a_physical | co-products and credits | First retain unallocated physical outputs and paper/water/carbon balances. If a real marketable recovered co-product exists, record physical delivery/receiver and selected method, allocate burdens separately and disclose sensitivity. Secure destruction, replacement printing and recycling benefit do not automatically establish avoided burdens or negative emissions. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | p_currency_printing | finished notes | weighing/acceptance | lot; series; paper grade; accepted net mass; packaging tare; count; WIP/rework/reject stocks | Calibrated weighing of accepted notes excluding packaging; reconcile serial/QC and stocks without a fixed per-note mass. Aggregation procedure: sum same-period accepted net mass; finished_notes = 1 kg per 1 kg reference flow. | kg | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_material | p_currency_printing | individual supplied product | weighing/provider | row grade; lot; SDS/CAS; phase; delivered strength; start/end stock; receipts; returns; packing structure; provider reference quantity | Individual weighed deliveries/issues and stock reconciliation; preserve whole solution/packing supply with constituent subledgers and compatible actual providers. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | kg | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_ink | p_currency_printing | individual ink formulation | provider/issues/retention | colour/technology formulation ID; lot; whole wet mass; carrier/solids; provider preparation; issues/returns/stocks; paper retention; wiping losses | Weigh issues and stocks independently for each ink; close retained ink, wiping effluent, waste and releases using auditable provider evidence, never invented confidential recipes. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | kg | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_energy | p_currency_printing | electricity | submeters/causal driver | stage meter starts/ends; auxiliaries/vault/packing/treatment; voltage; geography/period; grid provider/losses; allocation driver | Calibrated meters/bill reconciliation with allocation basis; convert kWh to MJ and prevent duplicate transformation/supply burdens. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | MJ | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_water | p_currency_printing | soft water | flow/water balance | water meter; softening route; density/temperature; reagent carrier water; paper moisture; circulation/stocks; effluent/sludge/evaporation | Meter makeup; close constituent water without treating circulation as extra external withdrawal; use measured density for mass subledgers. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | m3 | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_heat | p_currency_printing | steam | delivered enthalpy/provider | steam mass; pressure; temperature; dryness; returned condensate; time; line loss; provider reference enthalpy; boiler upstream | Collect steam/condensate mass, absolute pressure, temperature and dryness; calculate net delivered enthalpy only after state and provider reference are verified. Unknown pressure/state/basis is an explicit gap, not an assumed enthalpy. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | MJ | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_tooling | p_currency_printing | engraved plate | durable-tool records | plate ID; steel/coating; preparation/repair; received mass; discard; lifetime accepted impressions; opening/closing stock; provider | Link calibrated weights/tool histories to actual replacement/repair; retain physical plate handoffs and attribute by documented useful-production driver without invented life. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | kg | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_waste | p_currency_printing | individual outgoing waste | weighing/sample/receiver | net wet mass; container tare; volume V; sample temperature T; density rho at matching T/composition; measured water fraction; dissolved/suspended/non-water analytical bases; ink/oil/salts; physical state; hazard state; stocks; handoff ticket; receiver/treatment | Weigh each net stream after tare or convert measured volume using density at matching temperature/composition; independently measure water fraction and method-defined dry/suspended solids, retaining dissolved salts/solvents/oil separately. Representative sampling and receiver/permit/destruction/POTW checks are required; constituents never create duplicate external exchanges. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | kg | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |
| cp_air | p_currency_printing | individual outdoor species/size bin | exhaust/boundary monitoring | species/CAS; size interval; medium/submedium; concentration; blanks/detection limits; gas-flow basis; moisture/T/P; time; control/fugitive path; stocks; composition; uncertainty | Validated sampling/lab method suitable for actual exhaust; integrate net concentration times matched T/P wet/dry volumetric gas flow rate over operating time, or sum net concentration times already integrated interval gas volume without another time factor. Apply compatible unit conversions and retain raw species mass before normalization, covering uncaptured paths. Indoor occupational data cannot become LCI; retain detection limits rather than default zero. Aggregation procedure: divide same-period attributable measured row quantity by same-period accepted net note kg, keeping physical and allocated-burden ledgers separate; per 1 kg reference flow. | kg | each lot/shift and actual handoff | complete named production period including startup/reject/rework | route site and actual linked providers/receivers | per 1 kg reference flow | calibration, lot/source, raw records, SDS/composition, balance residual and provider compatibility |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | Divide each same-period attributable row quantity by accepted net note kg; finished_notes is 1 kg of the same reference output; missing or zero denominator blocks. Retain physical, concentration and moisture subledgers rather than scaling physical mass by environmental allocation shares. | each cp record; accepted net mass | row reference quantities |  |
| `liquid_balance` | `spent_wipe`; `spent_solvent` | For each whole liquid use net wet m = V × rho at measured matching T/composition, or net weighing. Independently measured w_H2O gives water m × w_H2O and non-water m × (1 − w_H2O); non-water is not dry/suspended solids. Conserve water and each actual constituent across input, retention, stock, cake, liquid and release ledgers without duplicate outgoing exchanges. | cp_water; cp_material; cp_ink; cp_waste; cp_air | wet mass, constituent balances and residual uncertainty |  |
| `delivery_basis` | supply and background | Verify whole wet/active, heat/electricity/volume and background reference bases separately for every provider using measured conversions; absent compatibility cannot establish complete linkage. Database secondary coefficients replace neither density nor provider reference basis. | provider reference quantity; each cp | auditable compatible link |  |

Particle-measurement applicability: EPA Method201A (2020 Internet method copy) is a candidate size-fraction sampling method for filterable stationary-source PM only when actual exhaust is free of entrained water droplets and the sampling-flow, traverse and temperature conditions are met. Subtract matched nested PM2.5 from PM10 measurements on the same source/gas/time basis to obtain the 2.5–10 micrometre fraction; the above-10 fraction additionally needs compatible total-filterable-PM measurement. Separately assess complete condensable-PM coverage: a hot-filterable result cannot establish zero condensables and condensables already included cannot be added twice. Droplet-laden exhaust, fugitive paths and individual species require independently suitable measurements. This PCR establishes no regulatory qualification. Source: `epa-pm201a-2020`.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_scope | route | Confirm actual one-dollar route, paper/inks/security fibres and absence of added strips/coatings/adhesive back; PWS is not all current factories. | current design, lots and site sequence |
| q_complete | all rows | Unknown UUIDs/providers/gas species/heat bases stay pending and prevent complete-LCI claims. Add, search and directly verify each additional actual atomic flow; confidentiality is no reason to assume zero releases. | row records and coverage matrix |
| q_auxiliaries | packing, maintenance and containers | Verify each actual packing layer/label liner, replacement part, filter medium, cleaning wipe, other oil grade, sludge drum and transport container separately by material/grade, tare, receipts, returns, repair/reuse and actual handoff. Add one atomic exchange per actual supplied or discarded item before claiming complete coverage; unknown construction or occurrence remains a specific gap, never an assumed recipe or zero. Keep durable-item physical receipts/returns/stocks separate from burdens attributed over documented service; do not reduce actual delivered mass by allocation shares. | supplier specifications, maintenance/tool records and handoff/tare records |
| q_balance | paper/water/carbon | Retain paper/ink/water/carbon/packing retention, loss, stock and handoff ledgers with balance residuals and uncertainty; the 75/25 fibre description cannot determine finished-note carbon. | weighing, analyses and stage linkage |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | data package | Declare every reference qualifier and named route; classification label, broad UUID or same-purpose other denomination cannot prove applicability. Keep pending scientific review explicit; determine current mapping acceptance from the canonical mapping and its ADRs. | bep-manufacture; uscep-one-dollar |
| v_basis | all rows | Align bilingual reference amount/unit, row IDs, denominator, collection aggregation and calculations; exactly one final product output matches finished_notes reference row/UUID. Conserve stage physical quantities/internal handoffs and check allocated burden ledgers separately. |  |
| v_identity | UUID and providers | Check each actual flow name, CAS, phase, route, classification, medium/submedium, reference property and unit; identity lookup does not prove actual provider/basis compatibility. Blank UUIDs and specific conflicts remain pending; neither correction flows nor approximate elementary identities replace actual releases. |  |
| v_emissions | air/water/waste | Require non-overlapping PM bins; collected dust/internal reuse/indoor exposure cannot duplicate outdoor releases; close actual species composition/monitoring. Distinguish sewer effluent handoff from environmental-water release and retain wet-sludge composition/receiver conditions. Unknowns cannot be reported as zero or complete pass. | jrc-paper-bref-2015; bep-wcf-pws-2018; niosh-bep-1988 |
| v_full_model | lifecyclemodel completeness | Verify actual upstream paper/ink/plate/utility, delivery and downstream sewer/waste coverage behind prepared-input handoffs; replace matching backgrounds with quantified linked foreground for real same-site manufacture. Historical/site percentages, occupational exposure, tonnage or avoided totals are not universal recipe/LCI defaults. | bep-manufacture; bep-wcf-pws-2018; nist-intaglio-1992; niosh-bep-1988 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Background only for this declared note-printing unit; complete manufacture needs the actual linked units |
| allowed_use | Manufacturing models with compatible providers/current route/reference bases and completeness disclosure |
| excluded_use | Whole CPC leaf, other notes/documents, financial-service/circulation-lifetime comparison, confidential-recipe inference or complete-factory claims omitting upstream |
| required_metadata | all reference qualifiers; foreground handoffs; upstream/downstream coverage; every supplied/background reference basis; actual sampling/acceptance period |
| required_quality_disclosure | identity/concentration/energy/provider uncertainties; release screening; physical/burden ledgers; quantitative uncertainty; scientific review/mapping state |
| update_trigger | Reassess on changed issue security structure, paper/ink, drying/wiping/treatment, packing/provider, energy or actual monitoring |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bep-manufacture | official_guidance | BEP, The Buck Starts Here: How Money is Made, https://www.bep.gov/currency/how-money-is-made | one-dollar offset exception, cotton-linen paper and distinct ink/print/acceptance/packing routes; no ink dose, dwell-time or packing-count coefficients |
| uscep-one-dollar | official_guidance | US Currency Education Program, $1 Note, https://www.uscurrency.gov/denominations/1 | one-dollar paper and embedded red/blue fibre identity, without fibre/chemical input recipe |
| bep-wcf-pws-2018 | official_guidance | BEP WCF, Wastewater Pretreatment Plant Maintenance Services PWS, Version01/24/2018, PDF pp.1–2; government-authored original mirror: https://imlive.s3.amazonaws.com/Federal%20Government/ID84027261251878272595468497169786081421/PWS_Wastewater_Treatment__Mar-2019_Clean.pdf | WCF case wiping supply/pretreatment and sewer handoff; verify actual batch/current version, without default dose, concentration or hazard/fate; mixed-denomination offset wording does not apply to one-dollar |
| bep-stewardship | official_guidance | BEP, Environmental Stewardship, https://www.bep.gov/about-bep/environmental-stewardship | inspection recovery and central utility scope; dated multi-denomination savings are not product factors |
| jrc-paper-bref-2015 | official_guidance | JRC, Production of Pulp, Paper and Board BREF2015, §§7.1.1–7.1.2,7.1.4,7.1.10; printed pp.660–661,665,670 / PDF pp.698–699,703,708; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | upstream paper stages and cutting-dust mechanisms, cotton-linen stages need provider proof; no woodworking evidence or historical/BAT number transfer |
| nist-intaglio-1992 | literature | NISTIR4752, January1992, annual report September1988, printed pp.1,3 / PDF pp.9,11; https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir4752.pdf | historical prototype cure/wipe route distinctions and counterevidence against ordinary solvent gravure; no research resin/recipe/dose adoption |
| niosh-bep-1988 | official_guidance | NIOSH HETA87-266-1860, January1988, PDF p.4 process description; https://stacks.cdc.gov/view/cdc/171954/cdc_171954_DS1.pdf | historical paper/ink offgassing and ink/particle screening, indoor/outdoor distinction; no current wet-strength resin/ink formula or occupational concentration-to-LCI inference |
| epa-pm201a-2020 | official_guidance | EPA Method201A, October7,2020 Internet copy, §§1–4 / PDF pp.1–3; §12.3.2 and §12.5 equations28–29,45–47; https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | Filterable stationary-source size-sampling applicability, entrained-droplet exclusion, nested differencing and condensable coverage limits; sampled gas volume versus sampling rate and size-fraction mass/volume concentration definitions (not a factory release factor); no universal printing factor or current legal/compliance claim |
