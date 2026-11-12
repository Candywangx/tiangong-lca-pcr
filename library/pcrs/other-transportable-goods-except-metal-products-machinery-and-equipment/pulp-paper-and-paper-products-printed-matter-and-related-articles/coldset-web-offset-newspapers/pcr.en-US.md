---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.coldset-web-offset-newspapers
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Coldset wet-web-offset daily newspapers and periodicals

## 1. Scope and Applicability

This PCR covers conventional wet-web-offset coldset printing of folded, unbound daily newspapers, journals and periodicals in newspaper form on absorbent uncoated newsprint, from separately supplied prepared plates and newsprint reels through make-ready, CMYK press operation, dampening and cleaning, cutting/folding, quality acceptance and actual bundling. Coldset sets by absorption/oxidation; heatset evaporates ink oils in a dryer; UV curing uses different reactive ink and radiation equipment. Absence of a dryer/UV unit is verified from actual plant configuration and operating records, never inferred from a daily-newspaper label. Waterless printing, heatset/hybrid webs, UV/EB inks/coatings, publication gravure, flexography, digital printing, bound journals, glued/stapled products and separately manufactured inserts are outside this authored route. [jrc-sts-2020, defra-sg6-2011, epa-litho-ctg-2006]

The sole classification scope is CPC 3.0 32300, “Newspapers and periodicals, daily, in print”. Its official explanatory note includes newspapers, journals and periodicals published at least four times a week; daily does not require seven publications per week. Identify the actual serial title, publisher, news/editorial or periodical reading purpose and content, publication schedule and dates, issue number, edition and regional edition from publication and print-job records. Reconcile the scheduled frequency with actual dated issues and document interruptions; multiple print runs or regional editions of one scheduled issue do not by themselves establish additional scheduled publications. Unproven frequency or purpose requires applicability review. Products published less than four times a week, including CPC 32410/32420/32490, are excluded even when the press, paper and finishing match. Books, standalone advertising leaflets and online-only publications do not qualify through newspaper appearance alone. This is a route-limited subset of 32300, not all manufacturing routes within that category. [un-cpc3-notes-2025]

Concrete route evidence is ColdsetInnovation Fulda’s technical sheet (rotary offset coldset, process colours) and its operator offering of both daily and weekly newspapers. These support the existence of the coldset newspaper route, not a generic recipe, a measured factory inventory or a verified publisher-job-machine linkage. Weekly production is outside this PCR and demonstrates that equipment alone does not establish daily-category applicability. The manufacturer’s Naumann Commander CL case supports reelstands, offset units and jaw folding; its general Commander CL documentation shows that hot-air drying is optional. No unreported supplier, furnace, ink formula, water chemistry or current factory emissions are inferred. Heatset glossy magazines and bound academic journals remain outside the route. [coldsetinnovation-production, coldsetinnovation-offering, kba-naumann-2017, kba-commander-cl]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.coldset-web-offset-newspapers |
| classification_refs | CPC 3.0 32300; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Daily printed newspapers, journals and periodicals in folded unbound newspaper form on uncoated absorbent newsprint, published at least four times a week; actual news/editorial or periodical reading purpose and wet-coldset route required |
| excluded_products | Non-daily publications including CPC 32410/32420/32490; books, standalone advertising leaflets and online-only publications; heatset/hybrid, UV/EB, waterless, gravure/flexo/digital, bound magazines/journals, glued/stitched articles, separate inserts |
| representative_product | Actual dated issue/edition/regional edition and grade of a qualifying daily CMYK coldset newspaper-form publication; named producer technical evidence establishes route, without its quantitative defaults |
| production_route | Supplied reels and prepared plates; wet offset coldset, dampening, cleaning, cut/fold, acceptance and actual bundling; off-site waste/effluent treatment |
| market_state | Net folded newspaper at dispatch and measured moisture, excluding transport packing and inserts |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply physical daily newspaper-form publication for its declared news/editorial or periodical reading purpose, at actual contracted print quality; manufacturing declared unit, not automatic reading-service equivalence |
| How much | 1 kg net accepted newspaper |
| How well | Declare actual pages, dimensions, grammage, moisture, imaged/CMYK coverage, readability and acceptance; no universal thresholds |
| How long or cycle | Same declared dated issue, edition/regional edition, campaign and dispatch acceptance within the evidenced publication schedule of at least four times a week; no assumed storage/reading lifetime |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual serial title/publisher/news or periodical reading purpose/content; publication schedule/dates (at least four times a week), issue/edition/regional edition and interruptions; wet-coldset and evidence of no heatset/UV; newsprint uncoated/moisture/furnish/grammage; net mass/tare; pages/dimensions/imaged area; each colour SKU/full formulation/carbon origin; fountain and wash complete formulas/dilution/dose; prepared-plate route and upstream node; voltage/supply basis; fold/bundle state; stage materials and captured dust; actual outdoor species; waste receiving treatment; site/period; allocation/uncertainty |

Declare all qualifiers in the data package. Database identity does not establish site quantity, background compatibility, classification acceptance or scientific approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | finished | Mass | kg | Use cp_mass to weigh campaign accepted net newspaper P; exclude packing, cores, separate inserts and rejects. The reference is 1 kg, not copy count, area or paper-input mass. |
| formula_basis | material, liquid, residue and elementary-species rows | Mass | kg | Distinguish supplied-mixture mass, pure-species mass, water, solids and active content. Link actual supplier recipe/concentration and provider reference definition; database recipe descriptors are not default quantities. |
| electricity_basis | electricity | Net calorific value | MJ | Preserve the original Net calorific value electrical-energy property; reconcile actual voltage, supply boundary and metered kWh with MJ = 3.6 * kWh. |
| particle_partition | pm25; pm2510; pm10 | Mass | kg | Measure compatible separate size-interval masses; do not add cumulative PM10 to the fine fraction. Collected waste dust stays separate from outdoor escape. |

The Amount objects retain the dispatch-based X/P convention. Apply it only after the production–stock–dispatch bridge in section 8: X includes the compatible original-cohort exchange history carried into the selected dispatch extent, not just invoices or meter readings dated in the dispatch period. P remains accepted net newspaper at printer dispatch; a first-release manufacturing quantity is only an auxiliary stock/service basis and never replaces this reference gate. Retain absolute records when P is zero or unknown; no normalized result is established in that case.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received traceable newsprint reels and prepared wet-offset aluminium plates, with complete upstream papermaking/prepress nodes linked |
| starting_condition_role | intermediate_input |
| product_classification_scope | CPC 3.0 32300 only, daily printed newspapers/journals/periodicals published at least four times a week; narrower wet-coldset unbound newsprint subset; CPC 32410/32420/32490 excluded [un-cpc3-notes-2025] |
| recursive_input_rule | Internal returned paper and fountain recirculation do not cross the node. Externally received printed newspapers/rework retain original supply and treatment history; no recursive method call may invent that background |
| upstream_dataset_requirement | Actual route/state/site/time/quantity-compatible newsprint, prepared plates, each ink/chemical, electricity/water, packing, transport and residue/wastewater receiving treatment; unknown is not zero |
| disclosure | Disclose the aggregated print node and all upstream/receiver links; exclude editorial work, reader distribution/use/end-of-life and separate inserts. Actual boilers, heatset/UV or direct water discharge require separately reviewed nodes before any complete-route claim |

The physical map is reel/prepared-plate receipt -> make-ready/plate change -> dampening and wet-coldset offset -> cut/fold -> acceptance/bundling. Cleaning and collection branches distinguish internal return, measured outdoor release and separate exported residues. Retain stage meters, stocks, material ledgers and equal mass/state/time at both ends of internal links. Dryer, UV and boiler presence/absence needs actual configuration evidence; coldset does not imply zero VOC, and substrate/formulation/cleaning losses govern real emitted species. Combustion of supplied utilities stays in its supplier node; actual fossil and biogenic CO2 both remain in that LCI even when a greenhouse-gas reporting convention excludes biogenic carbon. [defra-sg6-2011, epa-litho-ctg-2006]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| print | Wet-coldset printing, folding and bundling | required | Declared paper/prepared-plate and supplied-utility route; conditional exchanges only when actually present | foreground | 1 kg net accepted newspaper |

Retain complete physical dispatch and maintenance accounts: net newspaper includes actual retained ink, paper water and every constituent belonging to the unbound newspaper. Delivered straps/film and other actual packing remain separate from P; maintain reel-core/wrapping returns, pallet and reusable-container stocks/returns, formulation drums and other supply packaging, press parts/filters and maintenance replacements. Actual packaging offcuts, returned consumables, recovery/laundry and receiver streams each need their own verified atomic exchanges and compatible upstream/receiver links before a complete dataset claim; absence or exclusion needs explicit study-boundary and physical evidence. No fixed packing rate, replacement lifetime or loss fraction is supplied.

Apply cp_packaging to every actual packaging component and reusable-container movement, including supply packaging and borrowed, rented or entrusted articles. Its shared ledger does not combine different materials into one flow card: independently exchanged materials, services, wastes and transport require their own atomic records and compatible providers before completeness. Keep the existing strap and film cards for their specific materials.

### Process: Wet-coldset printing, folding and bundling (`print`)

#### Inputs

##### Product flows

###### Newsprint (`newsprint`)

Unprinted, uncoated, absorbent newsprint reels. Use actual grade, fibre source, ash, moisture, grammage and supplier gate; retain reel core and wrapping separately from net paper. This broad newsprint identity does not select a fibre recipe. The existing newsprint PCR is an upstream papermaking node only; use it only when its pulp/finish/utility boundary matches the actual supplier. Other suppliers need their own complete upstream datasets.

- Selected flow: Newsprint `fdb2fcca-2716-4503-8c49-59e5b557e654`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper`
- Sources: `coldsetinnovation-production`; `defra-sg6-2011`

###### Alternating current (`electricity`)

Purchased grid-average electricity at the 1–35 kV user boundary only. Reconcile voltage, country/time mix, transformer losses and provider boundary before linking. Include reel handling, press drives, dampening circulation, compressed-air generation, electric cooling, cleaning, extraction, folding and bundling, with stage meters; do not duplicate compressor/chiller electricity as purchased air/cold. Other intake voltages require another verified identity, not this UUID. The reference property is Net calorific value, used here as the database electrical-energy quantity convention; it is not a fuel or steam useful-heat claim.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Water, process (`water`)

Supplied liquid process water for dampening make-up and actual cleaning. Meter external supply and distinguish formulation water, recycled loop water, retained moisture, exported liquids and evaporation. It is a purchased product, not an elementary freshwater withdrawal or discharge. Its broad legacy classification is not evidence of a particular water source or treatment; supplier quality/density and boundary remain required.

- Selected flow: Water, process `d8ad9111-4304-46fb-bc23-9a2f36d65a83`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Solvent-based Flat Printing Ink (`ink_black`)

One separately purchased black conventional oil-based coldset process-ink paste, with its actual SKU, lot and complete supplied formulation. The broad flat-printing-ink identity is conditional on compatible oil-based chemistry and absorption/oxidation setting; it does not prove colour, coldset suitability or the provider recipe. Record every pigment, petroleum/vegetable vehicle, resin/binder, wax, drier and other additive by actual identity/CAS, mass fraction and carbon origin; the fractions must close the supplied paste mass. SDS hazardous-ingredient disclosure alone is not a full formulation. Purchased paste is one exchange; do not also count its constituent purchases unless ink is actually blended in a separately modelled node. The GOOD NEWS source establishes an available coldset ink family only, not the ink used by the cited printer or a recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulas`
- Sources: `epa-litho-ctg-2006`; `hubergroup-good-news`

###### Solvent-based Flat Printing Ink (`ink_cyan`)

One separately purchased cyan conventional oil-based coldset process-ink paste, with its actual SKU, lot and complete supplied formulation. The broad flat-printing-ink identity is conditional on compatible oil-based chemistry and absorption/oxidation setting; it does not prove colour, coldset suitability or the provider recipe. Record every pigment, petroleum/vegetable vehicle, resin/binder, wax, drier and other additive by actual identity/CAS, mass fraction and carbon origin; the fractions must close the supplied paste mass. SDS hazardous-ingredient disclosure alone is not a full formulation. Purchased paste is one exchange; do not also count its constituent purchases unless ink is actually blended in a separately modelled node. The GOOD NEWS source establishes an available coldset ink family only, not the ink used by the cited printer or a recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulas`
- Sources: `epa-litho-ctg-2006`; `hubergroup-good-news`

###### Solvent-based Flat Printing Ink (`ink_magenta`)

One separately purchased magenta conventional oil-based coldset process-ink paste, with its actual SKU, lot and complete supplied formulation. The broad flat-printing-ink identity is conditional on compatible oil-based chemistry and absorption/oxidation setting; it does not prove colour, coldset suitability or the provider recipe. Record every pigment, petroleum/vegetable vehicle, resin/binder, wax, drier and other additive by actual identity/CAS, mass fraction and carbon origin; the fractions must close the supplied paste mass. SDS hazardous-ingredient disclosure alone is not a full formulation. Purchased paste is one exchange; do not also count its constituent purchases unless ink is actually blended in a separately modelled node. The GOOD NEWS source establishes an available coldset ink family only, not the ink used by the cited printer or a recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulas`
- Sources: `epa-litho-ctg-2006`; `hubergroup-good-news`

###### Solvent-based Flat Printing Ink (`ink_yellow`)

One separately purchased yellow conventional oil-based coldset process-ink paste, with its actual SKU, lot and complete supplied formulation. The broad flat-printing-ink identity is conditional on compatible oil-based chemistry and absorption/oxidation setting; it does not prove colour, coldset suitability or the provider recipe. Record every pigment, petroleum/vegetable vehicle, resin/binder, wax, drier and other additive by actual identity/CAS, mass fraction and carbon origin; the fractions must close the supplied paste mass. SDS hazardous-ingredient disclosure alone is not a full formulation. Purchased paste is one exchange; do not also count its constituent purchases unless ink is actually blended in a separately modelled node. The GOOD NEWS source establishes an available coldset ink family only, not the ink used by the cited printer or a recipe.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulas`
- Sources: `epa-litho-ctg-2006`; `hubergroup-good-news`

###### Prepared aluminium wet-offset printing plate (`plate`)

One ready-to-print presensitized aluminium offset plate with the actual coating, imaging/development route, dimensions and net mass, received from a separately inventoried prepress node. Plate counts/area require actual measured mass conversion, not a stock thickness assumption. This node does not omit prepress: supplier plate substrate, coating, imaging, developer/wash and their electricity/wastes must be in the linked upstream dataset. If imaging/development is inside the inventoried node, add each actual chemical and wastewater as audited atomic exchanges before completeness. Bare aluminium substrate is not a prepared plate. The polystyrene-route PS Plate and combined non-daily plates/files record are not adopted.

- Selected flow: Prepared aluminium wet-offset printing plate
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Coldset wet-offset fountain-solution concentrate (`fount`)

One actual supplied fountain-concentrate SKU; retain complete wet formulation, water, gum/synthetic polymer, each acid/buffer salt, wetting agent/alcohol substitute, corrosion inhibitor, biocide and defoamer actually present. Do not invent an acid, surfactant or dose from an industry example. Record dilution and incoming concentrate water in the physical ledger without a second purchased-water exchange. Additional separately dosed chemicals require their own atomic cards. Alcohol-free operation must be demonstrated by actual complete composition, not its marketing name.

- Selected flow: Coldset wet-offset fountain-solution concentrate
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulas`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Isopropanol (`ipa`)

Conditional separate IPA purchase/dose, CAS 67-63-0. This record describes a China production mix; provider country/gate and purity/water convention must match before a background is linked. Record its measured purity and quantity; do not apply the rejected optical-assembly/antiseptic record or import a generic IPA percentage. IPA already contained in a purchased concentrate is accounted in its constituent ledger, not again as this purchase.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulas`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Coldset offset blanket-and-roller wash formulation (`wash`)

One actually supplied coldset-compatible blanket/roller wash SKU, separate from fountain concentrate. Require full hydrocarbon/ester/alcohol/water/additive composition, CAS or defined UVCB fraction, batch mass and method of use. Record automatic cycles and manual cleaning, including make-ready and changeovers. The inkjet-printhead cleaners do not identify this product. Unidentified oil fractions require supplier speciation and emission analysis; they cannot be converted to zero VOC or assigned a single named hydrocarbon.

- Selected flow: Coldset offset blanket-and-roller wash formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulas`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Wet-offset printing rubber blanket (`blanket`)

Actual press-compatible composite blanket, with elastomer, textile backing, metal backing if present, net mass and replacement history. One supplied assembly is one purchase, not purchases of fictitiously separated constituents. Charge actual replacement/use over the declared campaign; no universal lifetime.

- Selected flow: Wet-offset printing rubber blanket
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Cotton fabric (`cloth`)

Conditional actual cotton wiping cloth, only when fibre specification confirms cotton fabric. Positive fabric/cloth/woven-fabric names support the physical textile, while the raw-cotton CPC01921 and cotton-plant comment are source-quality limitations requiring clarification; no raw-cotton cultivation background is selected. Record textile mass, reuse/laundering cycles and clean cloth versus absorbed ink/wash. Synthetic/nonwoven substitutes need separate identities and laundering burdens. It is not an elementary fibre emission.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Polypropylene packaging strap (`strap`)

Conditional actual PP bundling strap, measured net mass, recycled content and grade. Raw polypropylene resin, fibre, twine and a cable tie are not the same manufactured strip; UUID unresolved. Do not prescribe a strap per copy or a resin-to-strap yield. Other actual band materials require their own cards.

Use cp_packaging to distinguish first purchase, first external nonpurchase receipt and evidenced same-item external return, retaining all gross legs, stocks and original component/cohort exchange vectors; net issue alone is insufficient.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Polyethylene film (`film`)

Conditional actual PE bundling/wrapping film, CAS 9002-88-4, with measured thickness, grade, additives, recycled fraction and provider. Name/CAS/comment support film; the CPC 29220 luggage classification is an acknowledged source defect requiring clarification, not evidence of luggage. A coated/laminated film or other polymer is not represented. Packaging is excluded from reference newspaper mass and remains an input.

Use the same cp_packaging receipt, ownership/cohort and gross-leg ledger as strap, including procurement embedded in a whole supplied price. No separate invoice does not mean no purchase; a return does not erase actual film waste, replacement or transport.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Petroleum-derived wet-offset machine lubricating oil (`lubricant`)

Conditional actual petroleum-fraction machine lubricant. This is not synthetic PAO; collect actual grade, additives and provider basis. UUID remains unresolved: a candidate with a hard 40.5 MJ/kg calorific-value qualifier requires actual numeric specification and gross/net, dry/wet and temperature-basis compatibility before adoption. A Mass reference or stating that the value is not a heat input does not waive the restriction. Reconcile fill/top-up, stock, retained charge and separately exported used oil; do not equate consumption with direct combustion.

- Selected flow: Petroleum-derived wet-offset machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### refrigerant, R134a (tetrafluoroethane) (`r134a_input`)

Conditional actual R134a purchased make-up for an identified electric fountain/ink-circuit chiller. Verify equipment nameplate, CAS 811-97-2, refrigerant certificate, charging/recovery and stocks. The selected generic R134a/tetrafluoroethane product has a native Mass/kg reference and no freezing, ship or proxy-use restriction; raw CAS, purity, delivery state, supplier and background are unspecified and require actual certification. The different plant candidate that references Aluminium content and the freezing/ship/proxy-use records are not used. Identity does not establish this chiller quantity or exclude its physical refrigerant from the balance. No universal leakage rate, initial charge or cooling duty is supplied; leakage and recovered material are different fates.

- Selected flow: refrigerant, R134a (tetrafluoroethane) `210b4222-adda-4097-9e79-f2c9a6c172e4`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Printed Matter (`finished`)

Exactly one reference output: accepted net folded, unbound coldset newspapers at dispatch, excluding transport straps/film, reel cores, inserts made elsewhere and rejects. This broad mechanically printed material identity includes the explicitly limited paper newspaper subset; it does not select paper 3D printing, postal discounts or another route. Its CPC 32690 metadata differs from the sole 32300 category and requires controller/provider clarification. The name route explicitly covers printing on paper or other substrates; its synonyms positively identify printed matter on paper. The general mechanically-printed description applies here; the appended postal and paper-3D examples are not adopted as production methods. Physical identity, supplier background and classification acceptance are separate questions. Folding/bundling are aggregated with printing, so an internal intermediate printed web is not another reference output.

- Selected flow: Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `coldsetinnovation-production`; `defra-sg6-2011`

##### Waste flows

###### waste paper (unspecified) (`spoilage`)

Externally exported paper spoilage, make-ready paper and trim within a single separately weighed paper-waste stream. Retain printed/unprinted composition, ink loading, moisture, contaminants, origin and receiving recycling/disposal route. Internally returned material is not external waste; separately exported streams with different receiver/composition require separate rows. The unspecified physical identity does not select landfill or a credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Waste solid (`spent_plate`)

This broad industrial-solid-waste identity is restricted to this one actual solid spent coated-aluminium plate stream with its complete substrate/retained coating, ink, solvent and water mass. Measure actual solid physical state, constituent composition, as-exported wet/dry basis, contamination and receiver acceptance; separately collected streams remain separate atomic rows. The broad identity establishes neither a pure-material recycling stream nor hazard class or treatment. Actual spent aluminium plate with residual photosensitive coating, ink and cleaning contamination. Measure substrate plus contamination mass and receiver specification separately from incoming prepared-plate mass; no automatic pure-aluminium recovery credit. The photopolymer flexographic plate record is not a compatible substitute.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Waste liquid (`spent_wash`)

Use this broad industrial-waste-liquid identity only for the physically liquid whole-mixture transfer named here. Measure whole-liquid as-exported mass, volume and compatible density at recorded temperature, actual water mass fraction and separately measured suspended/dissolved solids, organic constituents and receiver acceptance; whole mass = volume × compatible density. Non-water mass = whole mass × (1 − actual water fraction), not automatically dry solids; water-specific and solids/volatile-loss methods must be independently validated. Generic hazardous-language metadata does not establish site hazard status. Separately removed spent wash, with measured water, solvent fractions, ink, solids and hazard/receiver information. Not all purchased solvent becomes air emission; measured retained solvent in exported liquid is a separate fate. Do not combine with fountain purge, used oil or aqueous wastewater. Recycling/distillation treatment is included through an actual linked receiver dataset.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Waste solid (`spent_cloth`)

This broad industrial-solid-waste identity is restricted to this one actual solid contaminated cotton cloth stream with its complete substrate/retained coating, ink, solvent and water mass. Measure actual solid physical state, constituent composition, as-exported wet/dry basis, contamination and receiver acceptance; separately collected streams remain separate atomic rows. The broad identity establishes neither a pure-material recycling stream nor hazard class or treatment. Conditional exported contaminated cotton cloth; weigh dry textile and absorbed ink/wash/water, retaining full stream mass and receiver hazards. Closed-container storage and actual time/temperature matter to solvent retention. Retention from a regulatory example is not an automatic site fraction. Exclude cloth sent to a separately inventoried laundry return loop from one-way disposal.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Collected paper-fibre-and-ink dust (`collected_dust`)

One actually collected dry dust stream from paper handling/cutting/folding and press-room controls, with actual fibre, mineral, ink and moisture composition. Record weighed collected mass, internal return, equipment deposits and exported receiver mass. Captured dust is not an outdoor elementary release; kiln dust and generic particulate emissions are not this waste identity. The broad non-metal industrial-dust waste identity conditionally locates only this actual captured paper/ink-dust stream; no default composition, treatment or airborne release is selected. Mixed or separate capture streams must retain their own measured composition, moisture, source/receiver and provider-basis evidence.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources: `defra-sg6-2011`

###### Waste liquid (`spent_fount`)

Use this broad industrial-waste-liquid identity only for the physically liquid whole-mixture transfer named here. Measure whole-liquid as-exported mass, volume and compatible density at recorded temperature, actual water mass fraction and separately measured suspended/dissolved solids, organic constituents and receiver acceptance; whole mass = volume × compatible density. Non-water mass = whole mass × (1 − actual water fraction), not automatically dry solids; water-specific and solids/volatile-loss methods must be independently validated. Generic hazardous-language metadata does not establish site hazard status. Actually removed fountain-loop purge, one separately stored/exported solution with measured water, dissolved salts/additives, ink and solvents. Internal recirculation does not cross the node boundary. If purge joins aqueous wastewater before the boundary, retain stage transfer records and report the combined receiver exchange once; do not count both outgoing liquids.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Waste liquid (`ww`)

Use this broad industrial-waste-liquid identity only for the physically liquid whole-mixture transfer named here. Measure whole-liquid as-exported mass, volume and compatible density at recorded temperature, actual water mass fraction and separately measured suspended/dissolved solids, organic constituents and receiver acceptance; whole mass = volume × compatible density. Non-water mass = whole mass × (1 − actual water fraction), not automatically dry solids; water-specific and solids/volatile-loss methods must be independently validated. Generic hazardous-language metadata does not establish site hazard status. Actually discharged aqueous cleaning wastewater sent to a declared off-site treatment operator, preserving wet mass, density/volume, suspended ink/paper solids, organic solvents, salts, metals where present and receiver acceptance. Printing-plate processing wastewater is not adopted for this press-only stream; manganese-residue wash wastewater is incompatible. No direct river/sewer elementary discharge or on-site treatment is assumed. On-site treatment/direct discharge needs its own verified treatment node and actual species/carrier-water rows before completeness.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Used lubricating oil (`spent_oil`)

Conditional separately exported machine used oil, with measured contamination, residual water and actual receiver route. It is not spent blanket wash and does not prescribe combustion. Maintain stock/retained-charge reconciliation and no automatic recycling credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Waste ink (`waste_ink`)

One separately removed residual coldset ink paste with actual colour/composition, water/solvent and receiver. This offset/coldset residue identity is not an on-disc-label waste or an assumed waste fraction. If ink is already contained in exported wash or cloth, track constituents there and do not duplicate it as a separate waste exchange.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### Waste solid (`spent_blanket`)

This broad industrial-solid-waste identity is restricted to this one actual solid composite rubber-blanket stream with its complete substrate/retained coating, ink, solvent and water mass. Measure actual solid physical state, constituent composition, as-exported wet/dry basis, contamination and receiver acceptance; separately collected streams remain separate atomic rows. The broad identity establishes neither a pure-material recycling stream nor hazard class or treatment. Conditional actual removed composite blanket with textile/elastomer/backing and ink/cleaner contamination. Record net exported mass, reuse and receiver. It is not pure waste rubber or a generic cloth offcut.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

##### Elementary flows

###### isopropanol (`ipa_air`)

Conditional actual isopropanol emission only when CAS 67-63-0 is confirmed in the actual formulation or emission analysis. Outdoor air, unspecified subcompartment, kg of this species; indoor workplace concentration alone is not a site-boundary exchange. Pair outlet/fugitive measurements and species material balance, retaining water/solvent in product, liquid, cloth, stocks and recovery separately. No default positive amount, zero emission or universal retention. These three chemically specific cards do not stand for unidentified petroleum fractions or all VOC. Additional measured species require separate audited cards before complete inventory.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### ethanol (`ethanol_air`)

Conditional actual ethanol emission only when CAS 64-17-5 is confirmed in the actual formulation or emission analysis. Outdoor air, unspecified subcompartment, kg of this species; indoor workplace concentration alone is not a site-boundary exchange. Pair outlet/fugitive measurements and species material balance, retaining water/solvent in product, liquid, cloth, stocks and recovery separately. No default positive amount, zero emission or universal retention. These three chemically specific cards do not stand for unidentified petroleum fractions or all VOC. Additional measured species require separate audited cards before complete inventory.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### ethylene glycol (`glycol_air`)

Conditional actual ethylene glycol emission only when CAS 107-21-1 is confirmed in the actual formulation or emission analysis. Outdoor air, unspecified subcompartment, kg of this species; indoor workplace concentration alone is not a site-boundary exchange. Pair outlet/fugitive measurements and species material balance, retaining water/solvent in product, liquid, cloth, stocks and recovery separately. No default positive amount, zero emission or universal retention. These three chemically specific cards do not stand for unidentified petroleum fractions or all VOC. Additional measured species require separate audited cards before complete inventory.

- Selected flow: ethylene glycol `08a91e70-3ddc-11dd-938a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### particles (PM2.5) (`pm25`)

Conditional actual outdoor escape of particles up to 2.5 micrometres aerodynamic diameter from paper handling/cutting/folding or ink mist, after installed controls and including actual fugitive releases. Outdoor air, unspecified subcompartment; composition is measured paper fibre, mineral, ink or their mixture. Do not insert a wood-processing dust factor. Retain distinct aerodynamic intervals; compatible total-minus-finer differences may be used only with matched sampling basis and propagated uncertainty. Captured/returned dust, nested PM10 totals and indoor recirculating aerosols are not additional releases.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources: `defra-sg6-2011`

###### particles (PM2.5 - PM10) (`pm2510`)

Conditional actual outdoor escape of particles above 2.5 and up to 10 micrometres aerodynamic diameter from paper handling/cutting/folding or ink mist, after installed controls and including actual fugitive releases. Outdoor air, unspecified subcompartment; composition is measured paper fibre, mineral, ink or their mixture. Do not insert a wood-processing dust factor. Retain distinct aerodynamic intervals; compatible total-minus-finer differences may be used only with matched sampling basis and propagated uncertainty. Captured/returned dust, nested PM10 totals and indoor recirculating aerosols are not additional releases.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources: `defra-sg6-2011`

###### particles (> PM10) (`pm10`)

Conditional actual outdoor escape of particles above 10 micrometres aerodynamic diameter from paper handling/cutting/folding or ink mist, after installed controls and including actual fugitive releases. Outdoor air, unspecified subcompartment; composition is measured paper fibre, mineral, ink or their mixture. Do not insert a wood-processing dust factor. Retain distinct aerodynamic intervals; compatible total-minus-finer differences may be used only with matched sampling basis and propagated uncertainty. Captured/returned dust, nested PM10 totals and indoor recirculating aerosols are not additional releases.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources: `defra-sg6-2011`

###### water vapour (`water_air`)

Actual process-water evaporation reaching outdoor air, unspecified subcompartment. Reconcile dampening/cleaning water, supplied formulation water, incoming paper moisture, retained product water, purges/wastewater and stock changes with inlet/outlet ambient humidity at compatible conditions; report net process-added water vapour and avoid counting ambient carrier water as generated evaporation. Do not treat the full purchased-water volume as evaporated or add internal-loop evaporation twice. This is water vapour, not liquid freshwater discharge.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

###### HFC-134a (`r134a`)

Conditional real R134a leakage, CAS 811-97-2, from a confirmed chiller to outdoor air, unspecified subcompartment. Reconcile charge, purchased make-up, recovery, exports and stock, with uncertainty; purchase is not automatically leakage. The source has no official Chinese baseName, so the canonical chemical token is retained. No other refrigerant or fluorinated anaesthetic may be substituted.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual physical amount X of this atomic exchange over the same declared campaign divided by measured accepted net newspaper mass P; preserve raw unit, interval and basis before separate environmental-burden allocation. Conditional rows require actual presence/absence evidence; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant`
- Sources: `defra-sg6-2011`; `epa-litho-ctg-2006`

## 7. Allocation and Co-product Handling

First subdivide and directly attribute issues/grades/stages. Keep unallocated physical paper fibre, pigments/minerals, vehicles/resins, water, energy and fossil/biogenic carbon separate from allocated environmental burdens. Internal return is not a co-product and receives no automatic substitution credit. Never multiply waste-paper or other co-product physical output by burden shares, or change equal internal-link quantities through allocation. Shared meters first use measured time/load, dampening/cleaning cycles and operating conditions as causal drivers; retain make-ready, plate changes, idle and reject burdens instead of dividing only by accepted copy count. If subdivision is impossible, disclose defensible causal physical allocation and sensitivity; economic allocation needs separate justification/review. Scrap paper/plate sale does not automatically establish co-products or credits. These are author methodological rules informed by process differentiation, not a claim that BAT prescribes LCA allocation. [defra-sg6-2011]

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | print | finished | meter/laboratory/transfer record | gross dispatch mass; measured strap/film tare; net newspaper mass; serial title/publisher; news or periodical reading purpose/content; publication schedule and actual dates; issue/edition/regional edition; interruptions; accepted issue/batch; copy count; actual moisture; stock and acceptance; item/lot and dispatch/return event IDs; original cohort/denominator and full exchange V/A vectors; opening/closing raw/WIP/new FG/old FG/purchased FG/externally held stocks; prior outward and rework/service history; auxiliary first-release Qc when used; zero/unknown P accounts | Weigh accepted folded copies/bundles on calibrated scales; subtract measured external packing; reconcile only qualifying daily publications from the same declared route/dated issue/edition/regional edition. Retain publication and job records to verify at least four publications per week; do not count repeated print runs or regional editions of one issue as extra scheduled publications. Inserts and rejects excluded. Copy counts and measured mean net copy mass are QA, not an unverified reference replacement. Before normalizing any protocol, reconcile a production–stock–dispatch ledger by actual item/lot, issue/edition, original manufacturing cohort, stage, site and period. Retain mutually exclusive opening and closing raw-material, WIP, newly manufactured FG, older FG, purchased finished-newspaper and externally held/returned-item stocks, with location, owner/custodian, measured mass/moisture/state and transfer history. For each stock pool, opening stock plus actual receipts and stage internal_in must equal closing stock plus actual outward movements and stage internal_out, with real transformation, incorporation, rejects, waste, emissions and measured state changes separately reconciled. Match internal_in/internal_out at both ends and cancel them only when consolidating the same boundary. Transformation of existing stock is not a second external receipt. Keep paper/water/solids/carbon balances on compatible bases rather than assuming gross input mass equals newspaper mass. For every original cohort retain its complete per-exchange physical vector V and separately its burden vector A: original quantity, unit, composition/state, flow identity, provider/receiver and provider reference basis, phase, source period, collection evidence, allocation method and original denominator/extent. Carry the attributable original vectors through WIP and new/old FG into each actual dispatch, with measured item/lot linkage and an explicit conservation bridge for the portions dispatched, still stored, lost or rejected. A retained per-unit vector is expanded on its own original compatible denominator exactly once before joining absolute amounts; do not divide it twice or replace its original denominator with the current P. Purchased finished newspapers inherit their verified upstream vector once, without also inventing in-house paper/ink manufacture. Missing original vectors, denominator or a defensible stock split remains an evidence gap and prevents complete normalization. Current-period purchases X = 0 while dispatching old FG never proves zero manufacture. P is the selected campaign's accepted net dispatch extent from cp_mass, traced to these cohorts. Keep every gross dispatch/return/re-dispatch event, but count the same physical newspaper only once in the linked manufacturing reference extent; a repeat outward movement is a service event, not another manufactured output. True same-item return needs its prior outward/item evidence; re-acceptance, rework, sorting and repacking keep the original cohort and vector. Replacement newly printed copies have their own new lot and measured quantities. An auxiliary Qc may record a cohort's first qualified manufacturing release, including new closing FG once; old FG, purchases, same-item returns and rework do not create Qc. Qc is not P. Later storage, handling, rework, repacking and return transport retain their actual incremental exchange vectors and original served-cohort denominator (including its original Qc when that was the evidenced service basis), with the bridge to the selected dispatch portion disclosed. Do not load services for an old cohort onto unrelated current P, manufacture a lifetime/turn count, or carry a service twice with inherited manufacture. For each exchange, sum only the compatible absolute inherited manufacturing portions and actual attributable service portions for the selected dispatch extent to obtain X for X/P. Preserve the complete gross physical V accounts independently of burden shares in A; burden allocation never scales gross dispatch, waste or transport mass. Unsold closing FG/WIP retain their histories rather than being silently charged to current dispatch or discarded. P = 0 or unknown retains all absolute failed-run, make-ready, idle, cleanup, waste and service accounts and their unresolved cohort attribution; do not divide by zero, invent equivalent output or silently drop them. An incomplete campaign/cohort bridge cannot establish a complete 1 kg dataset. These are foreground traceability and author methodological requirements, not an allocation policy inferred from EPA VOC balances. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_paper | print | newsprint | meter/laboratory/transfer record | supplier lot; grade; fibre/ash; reel gross/core/wrapper tare; net paper; moisture; stocks; splice/make-ready/trim; upstream supply | Traceable receipt and reel-use weighing, actual grammage/area and moisture tests; reconcile output, waste and stocks per stage. Record supplier furnish and uncoated state without importing pulp or wood-processing defaults. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_formulas | print | ink_black; ink_cyan; ink_magenta; ink_yellow; fount; ipa; wash | meter/laboratory/transfer record | SKU; colour; lot; supplier; every ingredient identity/CAS or UVCB; wet mass fraction; water/solids; fossil/biogenic carbon; density/T; dilution; additions; stocks; retained/exported/evaporated material; provider reference | Weigh supplied batches/dosing and reconcile stocks; obtain complete supplier formulation, including nonhazardous ingredients omitted by SDS. Full fractions close each supplied mixture. Use documented analytical speciation for unresolved UVCB fractions and retained product/residue. Actual separately blended ingredients require distinct exchanges in a separate preparation node; never count both paste and its ingredients. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_utilities | print | electricity; water | meter/laboratory/transfer record | stage meter; boundary voltage/country/time; kWh; transformer/compressor/chiller loads/losses; water mass/volume/density/T; stocks; formulation water; cooling-loop make-up; provider gate | Read calibrated supply and stage meters across make-ready, runs, cleaning, idle and finishing; reconcile the node boundary and actual causal allocation. Preserve original units and provider quantity definition. No fuel, steam, useful-heat or dryer requirement is inferred from machine capacity. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_consumables | print | plate; blanket; cloth; lubricant | meter/laboratory/transfer record | component/SKU; composition; actual incoming mass; lubricant calorific-value specification/basis; area/count and measured mass; replacement; reuse/laundry; stocks; prepress imaging/developer upstream; provider | Weigh and inventory actual components, reconcile replacement/use and supplier/prepress boundaries. Retain physical internal links at identical mass/state/time at both ends; no arbitrary lifetime or unmeasured count-to-mass factor. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_packaging | print | strap; film | meter/laboratory/transfer record | actual component/resin/grade; supplied mass; net issued mass; rejects/return; reference packing tare; receiver/provider; component/item ID; purchase_receipt including embedded procurement; first_external_nonpurchase; ER and prior outward evidence; owner/custodian/original cohort; complete prior exchange V/A vectors and original denominator; disjoint stock pools; internal_in/internal_out; gross_dispatch/owner_return/other_external_outward/waste_out; EO destination; all actual transport legs; whole-container/component provider coverage; incremental services | Weigh each component independently and reconcile issue/return; retained external packing remains an input and is excluded from product denominator. Actually supplied composite purchases are not fictitiously decomposed into double purchases. For each actual packaging component/item, classify each receipt once as purchase_receipt (first actual procurement, including an embedded whole-delivery price), first_external_nonpurchase (first borrowed/rented/entrusted or other nonpurchased arrival with goods), or evidenced_return (ER, the same item with its prior outward record). Unknown prior history is unresolved, not automatically ER or a new zero-burden item. Preserve owner, custodian, original procurement/manufacturing cohort, first provider and complete original per-exchange V/A vectors, units, states, phases, periods, reference bases and denominators. Nonpurchase is not zero burden. Record external outward EO separately, identifying sale/dispatch, return to owner/custodian, repair/laundry/recovery and waste, destination, same-item identity and actual transport leg. Reconcile mutually exclusive opening/closing packaging pools by component, owner, custody, cohort and location: unused, in use/attached, externally held, returned awaiting inspection/rework, and segregated waste; do not count one item in two pools. opening + purchase_receipt + first_external_nonpurchase + ER + internal_in = closing + gross_dispatch + owner_return + other_external_outward + waste_out + internal_out, with the outward categories disjoint and actual transformation or material loss separately evidenced. Keep all gross outward, return and waste legs and their actual loaded/empty transport, quantities, distance, mode and provider; net issue/return is a reconciliation aid only. Pair stage internal links and cancel on consolidation, not external round trips. Inherited manufacture is carried once; use either the whole-container provider or its actually covered component providers once, documenting coverage and any uncovered actual component/service, never both for the same supply. New cleaning, repair, replacement and transport services remain separately attributed to the actual served owner/cohort and original basis under the newspaper bridge; no automatic credits, invented prices/shares, negative-fee clipping or default number of trips applies. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_residues | print | spoilage; spent_plate; spent_wash; spent_cloth; spent_fount; ww; spent_oil; waste_ink; spent_blanket | meter/laboratory/transfer record | stage; stream; physical state; whole as-exported mass; liquid volume/density/temperature; water-specific fraction; independently verified solids; water/solvent; fibre/ink/minerals/coating/metals; hazard; stocks; internal return; receiving treatment and transport | Weigh actual separate external streams and paired composition samples; preserve receiver transfer manifests. If streams combine before node exit, retain internal constituents/transfers and count the receiver exchange once. Resolve aqueous off-site treatment versus direct discharge; a plate-wash or unrelated wastewater is not a press-wash proxy. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_species | print | ipa_air; ethanol_air; glycol_air | meter/laboratory/transfer record | actual CAS/species/UVCB; raw concentration and air volume; T/P; wet/dry/reference oxygen; operating interval; outlet/fugitive capture; calibration/blanks; retained product/cloth/liquid; carbon origin; method/uncertainty ; matched inlet/background species concentration and independent inlet/outlet integrated volumes; gross legs; background-correction ownership; uncertainty | Use species-resolved validated outlet/fugitive sampling such as documented GC analysis appropriate to the real composition, with simultaneous flow and actual operating intervals; reconcile species material balance. Total carbon FID/VOC compliance values require response and molecular/carbon conversion and speciation, never arbitrary full attribution to IPA. Unidentified oil fractions or unmeasured fugitive releases remain unresolved.  Measure matched ventilation inlet and final outdoor outlet/fugitive boundaries in the same operating intervals and compatible gas states. Retain both gross species masses and calculate the net contribution under species_release; concentration already corrected for inlet background must not receive that correction again. Missing inlet/boundary coverage remains an explicit evidence gap, not assumed zero background. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_dust | print | collected_dust; pm25; pm2510; pm10 | meter/laboratory/transfer record | source stage; complete as-collected/exported dust wet mass, measured moisture and independently verified solids; aerodynamic cut; compatible concentration/air volume/T/P/wet-dry basis; control state; fibre/mineral/ink; collected/deposited/returned mass; receiver; uncertainty | Calibrated size-resolved outlet and actual fugitive sampling paired with air-flow records; independently weigh capture and internal return. Cover handling, cutting/folding, cleaning and ink-mist conditions. Use no wood/dry-paper default factor; unmeasured is unresolved, not zero. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_water | print | water_air | meter/laboratory/transfer record | water supply/formulation/loop; product moisture; residue liquid; stocks; process air humidity/volume; T/P; ambient baseline | Close actual water ledger with measured supplied, retained and exported water and/or humidity/flow change; retain measurement uncertainty and ambient correction. Unknown evaporation is pending, not the difference of unrelated campaigns. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |
| cp_refrigerant | print | r134a_input; r134a | meter/laboratory/transfer record | equipment/nameplate; refrigerant CAS/certificate; initial/final charge and cylinder stocks; purchased make-up; recovered/exported gas; service log; losses; provider | Traceable charge/recovery and cylinder weighing with calibrated scales, paired service/leak records; compare net mass changes for the same period. Recovered refrigerant is not air leakage; if exported, add a separate actual receiver flow before completeness. Other refrigerants require individually verified input/release cards. | Original row unit and basis | Each batch/matched metering interval | Same complete campaign, including make-ready, cleaning, idle and rejects | Selected grade/issue/node; upstream and receiver identified | per 1 kg reference flow | Calibration, original records, composition certificates, sample chain and uncertainty |

Each protocol normalizes its compatible atomic exchange X to X/P only after the production–stock–dispatch and packaging bridges above, with P the selected campaign's accepted net dispatch newspaper kg from cp_mass. X retains the original-cohort manufacturing and actual service histories and their original bases; it is not restricted to current-period procurement. Keep unnormalized gross stage amounts, mutually exclusive stocks and physical ledgers before allocation, including zero/unknown P accounts. Formulation/species coverage is exhaustive for actual materials rather than selected easy-to-measure constituents. Missing full supplier formula, unidentified volatile fractions, important fugitive releases or receiver treatment prevents a complete dataset. A separately purchased/blended additional ingredient requires its own audited card; so do other actual papers, colours, packing, refrigerants, wastes and emitted species. No default factory quantities are supplied. [epa-litho-ctg-2006, defra-sg6-2011]

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| net_campaign | finished | P = sum(accepted newspaper bundle gross mass - measured packing tare - mass of material not belonging to that newspaper); exclude rejects/other routes by batch. Apply the section 8 unique-item dispatch and original-cohort stock bridge: retain every gross dispatch/return, count the same newspaper once in its manufacturing reference extent, and keep re-dispatch as a service event. Internal stage transfers are not a second output. Auxiliary first-release Qc does not replace dispatch P. | cp_mass | P | coldsetinnovation-production |
| campaign_normalization | all inventory rows | x = X / P only for known positive P after the section 8 bridge; X is the compatible unallocated physical exchange history attributable to the selected net dispatch extent, including inherited original-cohort portions and actual services on their original denominator/basis. Preserve complete gross V and separate A, reconcile WIP/new-old FG/purchases/returns/closing stocks, and never scale gross V by burden shares. Current procurement alone is insufficient; P zero/unknown retains absolute failure/idle/cleanup accounts without division. Paper input, printed area, copy counts and Qc do not replace P. | cp_mass; all applicable row protocols | x | defra-sg6-2011 |
| electricity_units | electricity | MJ = 3.6 * kWh; preserve metered electrical quantity and supply voltage/boundary before normalization by P. | cp_utilities; cp_mass | MJ per kg | defra-sg6-2011 |
| constituent_mass | ink_black; ink_cyan; ink_magenta; ink_yellow; fount; wash; ipa | m_i = supplied_mass * actual_wet_mass_fraction_i; all supplied-mixture fractions sum to 1 with uncertainty disclosed. Preserve whole formulation, water, dry solids and active bases; constituent ledgers are not duplicate purchases. | cp_formulas | kg constituent in physical balance | epa-litho-ctg-2006 |
| species_release | ipa_air; ethanol_air; glycol_air | L_i = sum(c_out,k × V_out,k - c_in,k × V_in,k) × 0.000001 for independently identified species concentrations in mg/m3 and independently integrated volumes in m3 on matched time, temperature/pressure and wet/dry/reference bases. Retain gross inlet and outlet/fugitive masses separately and disjointly; integrate an actual flow rate over time once, not an already integrated volume. If c is already a validated background-corrected result on the same measured boundary, apply no second inlet subtraction. Reconcile stocks, retained product, liquids/cloth, recovered fates and real reaction/abatement; total FID carbon/TVOC or response equivalents require species-specific conversion and never become additional solvent mass. A negative or uncertainty-dominated balance is retained for investigation or a separately justified actual uptake model, not clamped to zero or relabelled as a positive emission. Missing inlet or outlet coverage prevents a complete net-release claim. Normalize the supported net result by P once. | cp_species; cp_formulas; cp_mass ; matched_inlet_concentration; matched_outlet_concentration; integrated_inlet_volume; integrated_outlet_volume; gas_state_and_time; prior_background_correction | kg species per kg | epa-litho-ctg-2006 |
| particle_intervals | pm25; pm2510; pm10 | Compatible cumulative PM10 minus same-condition PM2.5 yields only the middle interval; total particles minus PM10 yields only the coarse interval. Match volume/T/P/wet-dry/sampling periods and uncertainty; no arbitrary size split, and do not clip a negative difference to zero to hide measurement conflict. | cp_dust; cp_mass | Separate kg interval per kg | defra-sg6-2011 |
| refrigerant_balance | r134a_input; r134a | Leakage = initial equipment and cylinder stock + external purchase/receipts - final equipment and cylinder stock - exported recovery/other measured removals, for the same period and chemical identity; retain uncertainty and service measurements, never equate purchase with leakage. | cp_refrigerant; cp_mass | kg leakage per kg | defra-sg6-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Check actual name, CAS, hard route, medium/submedium, carbon origin, reference property/unit. Separate identity acceptance from provider quantity compatibility and disclose misplaced classifications. | Provider and identity originals |
| physical_balances | print | Close independent stage physical paper-fibre/pigment/mineral/vehicle/resin dry solids, water, energy and fossil/biogenic carbon, including actual oxidation/oxygen exchange, deposits, dust and stocks. Measurable oxidation changes require reactant/product evidence and separate species exchanges; do not force an unmeasured input total to equal finished mass. | Original stage ledgers, composition tests and uncertainty |
| full_formulas | print | A data package cannot claim completeness without every ink/fountain/wash complete formula. Unknown ingredients remain specific debts; a hazard-ingredient table or site typical ratio is not the full formula. | Full supplier formulas, lots and species samples |
| air_completeness | print | Reconcile complete formulations with actual paper dust, ink mist, volatiles and refrigerant. Detection limits require methods/uncertainty and do not establish true zero. Do not add VOC or total-carbon summary to its individual LCI species. | Outlet/fugitive measurements, analytical response and control conditions |
| coverage | print | Same-period coverage includes make-ready, cleaning, changes, downtime, rejects and all supply/transport/receiving treatment; limited invoices or advertised capacity are not a complete factory survey. | Campaign records and external links |

## 9. Validation Rules

Require exactly one product output linked by finished and the reference UUID, equal to 1 kg net accepted newspaper. English/Chinese reference amounts, row IDs, chemical identity, denominator, collection aggregation and formulas must match. Verify serial title/publisher, actual dated publication schedule of at least four times a week, issue/edition/regional edition and news/editorial or periodical reading purpose/content against publication and job records; unexplained interruptions or unproven applicability require review, and CPC 32410/32420/32490 are excluded even on matching equipment. Verify actual coldset equipment and absence of heatset/UV operation independently of frequency. [un-cpc3-notes-2025] Missing newsprint/prepress supply, complete ink/fountain/wash formulas, actual outdoor species, provider basis, receiver treatment or important quantities prevents completeness. A blank atomic-flow UUID is not zero; correction flows, adjacent chemicals and contrary routes cannot close it. Particle intervals do not overlap; captured/returned dust is not duplicated as outdoor emission; merged residues cross the boundary once. Keep physical and allocated-burden ledgers and expose performed/skipped/unresolved checks. No universal recipe, furnace, VOC/dust/leakage or wet/dry quantity defaults are supplied. Different old AP-42 newspaper-retention and later CTG values are applicability cautions, never proof of zero factory VOC. [epa-ap42-printing-1981, epa-litho-ctg-2006, defra-sg6-2011]

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | CPC 3.0 32300 daily newspaper-form publications (at least four times a week), wet-coldset unbound newsprint manufacture with compatible upstream and receiving-treatment links |
| excluded_use | Non-daily publications including CPC 32410/32420/32490 even on matching routes; books, standalone advertising leaflets, online-only publications; all-periodical coverage, heatset/UV/waterless/bound journals, full reading service, complete LCI/LCIA from identity success without formulas/site quantities |
| required_metadata | Required qualifiers; P; physical/burden ledgers; each colour formula; supply/receiver; method selection and quantity bases |
| required_quality_disclosure | Measured/unmeasured exchanges, blank UUIDs, formula/species gaps, source classification defects, missing official Chinese name, provider matching, allocation/uncertainty and review state |
| update_trigger | Changed paper/printing/setting/binding route, formulas, prepress, utilities, packing, treatment, species or provider reference |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Printed/PDF p150, 32300: daily includes newspapers, journals and periodicals published at least four times a week; 32410/32420/32490 are less-than-four-times-weekly categories and excluded. Classification frequency is an applicability boundary, not an LCI quantity, seven-day production requirement or evidence of a particular printing route. |
| jrc-sts-2020 | official_guidance | European Commission JRC, BAT Reference Document on Surface Treatment Using Organic Solvents (2020), https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf | §11.2 printed pp344–345/PDF383–384: generic wet-offset and coldset/heatset distinction only; §21.7.3.1–2 printed p989/PDF1028: newspaper versus magazine route context. Heatset virtual-plant tables, quantities and limits not adopted. |
| defra-sg6-2011 | official_guidance | UK Defra, Sector Guidance Note SG6 (11), February 2011, https://assets.publishing.service.gov.uk/media/5a80811ded915d74e33facf5/surface-treatment-using-solvents-sector-guidance-note-sg-6-11.pdf | §§3.36–3.38 printed p30/PDF36: coldset absorption/oxidation, dampening and blanket cleaning; Table 9 printed p32/PDF38: coldset cleaning solvent releases; finishing printed p34/PDF40: paper cutting/trim dust and collected waste. Table 9 contains a contradictory parenthetical on lithographic dampening; it is not adopted over the explicit §3.36 wet-offset description. Historical technical scope only, no current legal compliance, limits or factor defaults. |
| epa-litho-ctg-2006 | official_guidance | US EPA, Control Techniques Guidelines for Offset Lithographic Printing and Letterpress Printing, EPA-453/R-06-002 (September 2006), https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1009O71.txt | IV.A printed pp7–8/PDF13–14, comparative letterpress IV.B and VOC-source overview printed p9/PDF15, and Appendix A printed p19/PDF25: constituent families, fountain aids, cleaning, species/material-fate and volatile-content test scope. D6419/Method24 cited only as method-selection discussion, not acquired full procedures. Regulatory VOC/ink-oil/shop-towel retention percentages are not universal factory factors. |
| epa-ap42-printing-1981 | official_guidance | US EPA AP-42 §4.9.1 General Graphic Printing, 4/81 reformatted 1/95, https://www.epa.gov/sites/default/files/2020-10/documents/c4s09-1.pdf | §4.9.1.1.1/PDF1–2: historic newspaper line contrasted with a heatset publication-line figure; §4.9.1.2/Table4.9.1-1/PDF6–7: old retention defaults explicitly excluded. No zero-VOC conclusion, ink ratio or generic factor adopted; plant evidence and later CTG need separate applicability assessment. |
| coldsetinnovation-production | literature | ColdsetInnovation Fulda, COLDSET / ZEITUNGSPRODUKTION, producer technical sheet, https://www.coldsetinnovation.de/wp-content/uploads/2017/08/A4_Coldset-Innovation_Technische-Daten_Zeitungsproduktion_webRZ.pdf | PDF1: explicit rotary offset coldset and process-colour newspaper route; no spot colours. Product formats, screen/tone settings and area coverage are site specifications, not universal mass/ink/quality defaults; actual ink formula and emissions undisclosed. |
| coldsetinnovation-offering | literature | ColdsetInnovation Fulda, first-party newspaper production offering, https://www.coldsetinnovation.de/ | Zeitungsdruck: same coldset operator produces daily and weekly newspapers. Supports coldset route existence only; weekly production is outside this PCR and shows that equipment alone cannot establish 32300 applicability. No verified publisher-job-machine linkage, coverage of every periodical, supplied recipe or measured LCI; optional stitches/special formats remain outside the selected unbound route. |
| kba-naumann-2017 | literature | Koenig & Bauer, Modern Commander CL to mark the 50th anniversary of the company (11 October 2017), https://investors.koenig-bauer.com/en/publications/press-releases/details/article/modern-commander-cl-to-mark-the-50th-anniversary-of-the-company/ | Named operating newspaper installation with reelstands, offset towers and KF5 jaw folder. Hardware case only; no full plant survey, current recipe/utility/zero-release assumption. |
| kba-commander-cl | literature | Koenig & Bauer, Commander CL product description, https://www.koenig-bauer.com/en/products/p/commander-cl | Spray dampening and optional wash/plate change/heatset extension. Installed features and dryer absence must be checked; capability is not operating inventory. |
| hubergroup-good-news | literature | hubergroup, INKREDIBLE GOOD NEWS, https://www.hubergroup.com/us/en/print-solutions-division/family/inkredible/inkredible-good-news | First-party coldset process-ink family existence only; not a full recipe or proof of a named printer’s supply. Supplier complete formulation, SKU/colour and actual consumption are mandatory. |
