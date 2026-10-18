---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artists-students-or-signboard-painters-colours-modifying-tints-amusement-colours-and-the-like
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# PW6 rutile titanium-white aqueous acrylic artist colour

## 1. Scope and Applicability

This PCR covers one product: wet, heavy-body titanium-white acrylic artist paint with PW6 rutile pigment dispersed into purchased aqueous acrylic gel, supplied in white HDPE pails at first quality release after filling. The manufacturer's Heavy Body Titanium White item 1380 is a real product archetype, not a disclosed recipe or a claim that this route reproduces that brand. The gel/dispersant/defoamer route is supported qualitatively by the manufacturer's DIY method; actual purchased grades and formulation must be documented.

Industrial or architectural paints/varnishes under CPC 35110, printing and writing inks, dry pigment products, soluble dyes, oil/alkyd colours, solvent acrylics, UV-cured coatings, watercolour pans, other pigments and drawing services are excluded. The scope is a narrower subset of CPC 35120; it does not cover the whole leaf. Downstream dilution, brush washing, painting, substrate service, drying and end-of-life are separate studies. No area, hiding-power, colour-strength or lifetime equivalence follows from a kilogram of wet colour. Sources: `golden-product`, `golden-diy`, `golden-making`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artists-students-or-signboard-painters-colours-modifying-tints-amusement-colours-and-the-like |
| classification_refs | CPC 3.0:35120; narrower |
| covered_products | PW6 rutile titanium-white wet aqueous acrylic heavy-body artist colour |
| excluded_products | CPC35110 industrial/architectural coatings; printing ink; oil/alkyd/solvent/UV colours; dyes; dry pigment; other colours |
| representative_product | Heavy-body titanium-white artist colour; GOLDEN item 1380 illustrates product identity only |
| production_route | Purchased dry rutile PW6, supplied Extra Heavy Gel Gloss, Universal Dispersant, Heavy Body Defoamer and separately added water; physical dispersion/milling, blending, QC, filling; actual formula required |
| market_state | Wet aqueous paste, net contents of filled HDPE pail; first quality release, not actual dispatch |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Newly quality-released net PW6 acrylic artist colour at the filled-pail production gate |
| How much | 1 kg |
| How well | Declared rutile PW6 identity, acrylic binder grade, wet solids/water, actual viscosity test and lot release specification; no universal numeric colour or service target |
| How long or cycle | One complete matched production cohort; no use-stage life |
| reference_flow_link | o_new |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Water-Based Paint `47411f13-cc57-455b-ba23-dafbaeef17db` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | artist use; PW6 rutile and CAS; binder/additive commercial grades and lots; full supplied masses and composition subledgers; wet solids/water; actual release specification and tests; pail and closure materials/net fill; site/geography and period; unique first-release cohort Q; WIP/return burden carry; utility mix and waste receivers |

The reference UUID is a broad water-based-paint physical identity, not a supplier, proprietary recipe or industrial-paint substitution. Its full native limitations are retained on o_new. Missing actual product/route/state qualifiers make a foreground dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_reference | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique first quality-released net wet paint mass after filling, excluding pail/closure/label. Q>0; returned/reaccepted product contributes no new Q. Production release and dispatch are not assumed equal. |
| mu_supplied | i_pigment; i_gel; i_dispersant; i_defoamer; i_water | Mass | kg | Measure complete supplied wet mass; active/solids/water are non-additive composition subledgers. No SDS-bound recipe, pigment-volume-concentration or performance inference. |
| mu_volume | metered liquids | Volume and independently measured density | m3 and kg/m3 | Convert integrated volume once using measured same-liquid density at stated temperature. A rate needs actual duration; an already integrated volume gets no extra time factor. No native secondary factor is assumed to be density. |
| mu_energy | i_power | Energy | MJ | Keep raw meter readings and convert kWh to MJ once; retain source voltage/geography/mix. |
| mu_stock | all inventory rows | Mass and carried burden | kg | Match raw numerator and positive first-release cohort once; preserve failed runs, rework, opening/closing WIP and burden carry. Finished inventory is a post-release ledger and is not an extra production output on top of Q. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of purchased pigment, aqueous gel and formulated additives, separate water and ready-made packaging |
| starting_condition_role | Foreground manufacturing start; upstream supply and inbound freight remain background requirements |
| product_classification_scope | Narrow PW6 aqueous acrylic artist-colour subset of CPC35120, distinct from CPC35110 and printing ink |
| recursive_input_rule | Purchased finished paint/intermediates are explicit supplied articles with independent backgrounds; same-cohort return ledgers cancel internal transfers and do not recursively produce paint |
| upstream_dataset_requirement | Actual supplier formulation and pigment grade; utilities by actual geography/technology; each packaging article and off-site waste transport/treatment |
| disclosure | Declare all actual operations and additions, cut-offs, meter allocation, stock and return carry, outsourced processing and off-site waste receivers; primary examples supply no default inventory |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_manufacture | colour_make | Include receipt and pre-release storage, weighing, dispersion/milling, blending, QC and its consumed samples, rework, pumping, pail filling/closing/labelling, pre-release handling, extraction, cleaning and segregated waste transfer. Include actual ancillary burdens; extend atomic rows for every real addition before claiming completeness. | `golden-making`; `golden-diy` |
| sb_gate | o_new | Stop at first quality release after filling. Finished-goods warehouse and dispatch are separate ledgers with their actual burdens retained in any expanded study. On consolidation cancel internal handover Q; never add same-cohort closing finished inventory as another output to Q. If switching to a delivery gate, retain opening/closing finished stock and burdens and exclude undelivered goods from delivery Q; that is a separately declared profile. |  |
| sb_use | downstream | Painting, substrate preparation, dilution, film drying, brush washing and service/end-of-life are outside this manufacturing gate; the delivered wet water is not a factory evaporation emission. | `golden-water` |
| sb_route | colour_make | This is physical dispersion into purchased binder, with no on-site polymerization or cooked-varnish reaction assumed. No reaction water is invented to close mass. Collected washwater goes off-site; on-site treatment, fuel, solvent cleaning, compressed air or other actual equipment requires explicit added operations and individual exchanges. | `epa-paint`; `golden-water` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| colour_make | PW6 dispersion, blending and pail release | required | Declared dry-pigment/purchased-gel route only | Physical manufacturing including associated pre-release operations and return ledger | o_new; 1 kg |

### Process: PW6 colour manufacture (`colour_make`)

Every non-reference measured exchange below is reported by calc_report from its unnormalised cohort ledger. The output o_new alone defines the 1 kg reference. Internal WIP stocks and their burdens are collected under cp_period; they are not new procurement or additional co-products. Actual extra ingredients, cleaning agents, wastes and pollutant species require their own cards rather than a collection row.

#### Inputs

##### Product flows

###### Dry rutile white pigment (`i_pigment`)

Weigh the actual separately purchased PW6 rutile pigment powder, CAS 13463-67-7, including its supplied surface treatment and moisture. Native identity is industrial-grade pigment, production mix at plant, with no declared geography; it includes rutile and anatase. Require a rutile pigment certificate and actual grade/assay. The native CPC 35499 and Chinese synonym 四氧化钛 are metadata debts; CAS and principal name/comment identify TiO2. Do not infer a manufacturing route, food suitability or pigment fraction from that record.

- Selected flow: Titanium Dioxide `12525dde-1d7a-4024-9ea3-5b90912a48f8`
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_material; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `golden-product`

###### Purchased acrylic binder gel (`i_gel`)

Record this one complete supplied acrylic gel by its own invoice and lot. It is the declared binder for this bounded route, not dry acrylic resin. Polymer, water, preservative and other constituents inside the gel are composition subledgers, never duplicate purchases. Confirm actual grade and period availability; the historical DIY article does not establish the current formulation or the proprietary recipe of Heavy Body Titanium White.

- Selected flow: GOLDEN Extra Heavy Gel Gloss, supplied aqueous formulation
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_material; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `golden-diy`

###### Purchased wetting dispersant (`i_dispersant`)

Record the whole separately purchased surfactant formulation used to wet dry PW6. Retain lot, supplier composition disclosure and water/active subledger. Do not substitute one imagined pure surfactant, copy a DIY mixing ratio, or count its water again as fresh water.

- Selected flow: GOLDEN Universal Dispersant, supplied formulation
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_material; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `golden-diy`

###### Purchased heavy-body defoamer (`i_defoamer`)

Record this separately purchased formulated additive at actual wet supplied mass. The source lists oils or silicones as possible defoamer types; it does not identify this product as pure silicone or mineral oil. Obtain supplier evidence and record its actual full formulation without inferring a recipe from SDS ranges.

- Selected flow: GOLDEN Defoamer Heavy Body, supplied formulation
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_material; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `golden-diy`

###### Separately added formulation water (`i_water`)

Record only separately acquired distilled water actually added to the dispersion or let-down. Water already delivered inside gel/dispersant/defoamer remains in those supplied masses. Volume requires independently measured temperature-specific water density, not a secondary native property factor.

- Selected flow: Distilled water
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_material; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `golden-diy`

###### Cleaning water (`i_cleanwater`)

Measure actual fresh cleaning water separately from formula water and internal reuse. Include all cohort-attributable vessel, mill, filler and floor cleaning. This route sends collected washwater to an off-site receiver; no on-site RO, flocculation chemical or recovery percentage is assumed.

- Selected flow: Tap water for equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_material; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `golden-water`

###### Purchased electricity (`i_power`)

Meter dispersion, mixing, pumping, filling, extraction, cleaning and pre-release handling, including failed runs and standby attributable to the cohort. Retain actual supply geography, voltage and mix. The inspected CN, <1 kV, consumption-mix-to-user identity is not adopted for an unspecified site. Convert recorded kWh once to MJ using 3.6 MJ/kWh.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Raw cohort numerator from cp_energy; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

###### Supplied HDPE paint pail body (`i_pail`)

This route fills white HDPE pails. Weigh actual supplied body, including moulding and actual recycled content in its background. A resin row is not a finished pail. The manufacturer lists a 128 oz HDPE pail as a real market example; nominal volume does not establish product net mass or this dataset pack size.

- Selected flow: HDPE paint pail body
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_pack; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `golden-product`

###### Supplied HDPE closure (`i_lid`)

Apply this specific row only to a documented HDPE lid. Weigh separately from body and net paint; supplier proof is required and the reference product page does not specify closure polymer. A different polymer, gasket, handle or liner requires its own actual atomic row before completeness can be asserted; do not quietly assume it is included or absent.

- Selected flow: HDPE paint pail lid
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_pack; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Supplied paper label (`i_label`)

Weigh the actual finished paper label; declare printing and adhesive within the supplied article background, not a separate fictitious ink purchase by the paint maker. Native name is broad, with no geography/route/comment. Its retained historical classification is provenance, not confirmation of a supplier or active taxonomy.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_pack; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Corrugated transport carton (`i_carton`)

Record each actual single supplied carton attributable to the release cohort, including actual packing rejects. Where no secondary carton is used, retain evidence of absence. This specific carton is not a packaging-material selector; additional tape or pallet exchanges require separate cards if present.

- Selected flow: Corrugated fibreboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_pack; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Previously released paint returned for rework (`i_return`)

Record actual same-product returns crossing back into manufacture, at their measured wet mass. Preserve original release and burden identifiers in a return ledger; this is not a new procurement. Internal transfers and original carried burdens cancel on consolidation. Only incremental rework burdens are added once to the original cohort, with any cross-period restatement disclosed.

- Selected flow: Water-Based Paint `47411f13-cc57-455b-ba23-dafbaeef17db`
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_period; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_period`

#### Outputs

##### Product flows

###### Newly accepted artist colour (`o_new`)

The sole quantitative reference is first quality release of net PW6 rutile aqueous acrylic heavy-body artist colour in filled pails, before finished-goods storage or dispatch. Native identity is broader: water-based paint, production mix at plant, acrylic or alkyd binder options and unspecified geography. This PCR selects only its physically consistent acrylic/PW6 artist subset, not industrial or architectural paint and not a branded recipe. Native water-soluble, zero-fume and 90%-less-VOC claims are unverified and do not define this inventory or performance.

- Selected flow: Water-Based Paint `47411f13-cc57-455b-ba23-dafbaeef17db`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `golden-product`

###### Reaccepted returned colour (`o_reaccepted`)

Measure same-product returns leaving the rework ledger after reacceptance. This real Product output shares the broad UUID with o_new but is not new production and never increases Q. Pair it to i_return and original cohort; incremental losses/rework utilities remain visible. Do not relabel it as waste or hide it to force a unique UUID match.

- Selected flow: Water-Based Paint `47411f13-cc57-455b-ba23-dafbaeef17db`
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_period; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_period`

##### Waste flows

###### Discarded wet artist paint (`w_reject`)

Weigh unrecoverable same-product paste with its water/solids composition and receiver. Retained rework and WIP are stock/return ledgers, not this waste. The inspected surface-finishing waste row is not adopted as manufacturing residue without route confirmation.

- Selected flow: Rejected PW6 acrylic artist paint paste
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_outlets; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `golden-water`

###### Collected equipment washwater (`w_wash`)

Record wet washwater to the off-site receiver, assays and solids entrainment. It is a technosphere waste, not an elementary water emission; record receiver treatment separately in the background. COD/BOD are quality indicators and cannot supply individual chemical emissions or recipe fractions.

- Selected flow: Acrylic paint equipment washwater
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_outlets; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `golden-water`

###### Captured pigment dust (`w_dust`)

Record actual captured dry pigment sent off-site. Distinguish retained return-to-batch material from discarded dust and residual stack release. The inspected TiO2 elementary flow is indoor air and cannot represent an outdoor stack release or this waste.

- Selected flow: Captured rutile titanium dioxide pigment dust
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_outlets; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `epa-paint`

###### Rejected HDPE pail body (`w_pail`)

Weigh actual rejected bodies and attached paint, with container and paint subledgers. Avoid counting the attached paint again in w_reject; document receiver and net material recovery without a default credit.

- Selected flow: Rejected HDPE paint pail body
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_pack; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Rejected HDPE lid (`w_lid`)

Record rejected lids separately from bodies and preserve actual material identity. Any lid seal or other discarded packaging material has its own row when present.

- Selected flow: Rejected HDPE paint pail lid
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_pack; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

##### Elementary flows

###### Manufacturing water evaporation to air (`e_water`)

Record independently supported manufacturing evaporation only, in the native emissions-to-air-unspecified compartment. Water retained in supplied wet paint is not evaporated here. Downstream painting/drying is outside this gate; do not import those losses or fit evaporation to an unexplained mass residual. Native isotope/synonym noise does not change CAS 7732-18-5 ordinary water identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_outlets; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `golden-water`

###### Residual pigment release to outdoor air (`e_tio2`)

Use actual post-control species mass and outdoor compartment supported by sampling or an independently supported species balance. Captured dust is w_dust. No AP-42 percentage or generic particulate total is treated as measured TiO2; do not use the inspected indoor-air UUID.

- Selected flow: Titanium dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Raw cohort numerator from cp_outlets; report per reference flow once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `epa-paint`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_cohort | colour_make | Use direct job/lot metering for this one colour; allocate shared manufacturing support by documented causal driver and retain the full unallocated totals and residual reconciliation. Do not use a generic paint energy split, revenue ratio, solvent credit or artist-use benefit. |  |
| al_returns | i_return; o_reaccepted | Same-product reacceptance is not a co-product or new saleable production. Pair original mass/burden ids; cancel transferred original burdens and count incremental rework once on the original cohort. Reopened cohorts require a disclosed restatement. A zero-output failure retains its losses/energy in the matched cohort; if Q=0 retain a raw failure record and do not divide or emit a per-kg result. |  |
| al_waste | waste outputs | Off-spec paste, dust, washwater and rejected packaging are separately measured wastes. Actual recovery and receiver treatment require evidence; none is an automatic negative product burden. Any genuine separately sold co-product requires a distinct boundary/allocation review before this single-product profile is used. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Every aggregation_rule states the final reporting basis only. Its owner collects unnormalised raw numerator and stock/burden evidence in collection_method. Section 8 calc_report performs the sole A_i/Q report; the cards and aggregation_rule refer to that same operation and never divide again.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | colour_make | o_new | Quality release and calibrated weighing | lot; product identity; first-release timestamp/id; gross/tare/net kg; acceptance; rejected samples; prior-release id; Q | QC owner and filling supervisor reconcile calibrated net fills to unique first release. Deduplicate prior releases, returns and reacceptance. Keep raw Q in kg, packaging excluded; no division. Finished warehouse handover and dispatch are separate raw ledgers. | kg | Each filled lot and release | Complete actual period and traced cohort, including failed/zero-output runs and all periods carrying WIP or returns | Declared site and this PW6 acrylic route only | per 1 kg reference flow | Scale calibration, signed release and cohort id audit |
| cp_period | colour_make | i_return; o_reaccepted; WIP | Stock and burden ledger | period; lot; opening/closing WIP kg and composition; carried material/energy/waste burdens by exchange id; internal transfer ids; first release ids; returned/reaccepted kg and original burden ids; Q | Production accountant owns the raw matched-cohort ledger. Record all period activity, zero-output failures, rework and WIP carry; trace opening burdens from prior periods and carry closing burdens forward. Pair return transfers with original cohorts and preserve incremental rework. Collect physical stock and burden ledgers separately, with no A/Q division; final-stock movements after first release do not create production outputs. | kg; MJ | Each movement and period close | Complete actual period and traced cohort, including failed/zero-output runs and all periods carrying WIP or returns | Declared site and this PW6 acrylic route only | per 1 kg reference flow | Signed stocktake, prior-period burden ledger and non-duplication reconciliation |
| cp_material | colour_make | purchased ingredients and water | Weighing and supplier records | exchange id; lot; supplied wet kg; receipts/issues/returns; stock; assay/solids/water; supplier article; temperature; volume or rate and duration; density source | Material custodian records raw actual weighed issues and losses, including failed batches and cleaning; reconcile opening and closing raw stock and matched WIP burdens. Keep each complete commercial formulation as one external purchase; composition fractions are a separate non-additive subledger. Retain raw converted numerators without division. | kg | Each issue and batch | Complete actual period and traced cohort, including failed/zero-output runs and all periods carrying WIP or returns | Declared site and this PW6 acrylic route only | per 1 kg reference flow | Invoices, scales, supplier CoA and composition disclosure |
| cp_energy | colour_make | i_power | Meter and operating log | meter id; start/end kWh; time; run/failure/rework id; shared support total; causal allocation; WIP carry | Utilities owner collects full attributable actual-period meter numerators and matched carried burdens. Include failed runs, standby, filling, ventilation, cleaning and handling; reconcile shared totals before conversion. Preserve raw kWh and converted MJ, no division. | kWh; MJ | Per run and meter interval | Complete actual period and traced cohort, including failed/zero-output runs and all periods carrying WIP or returns | Declared site and this PW6 acrylic route only | per 1 kg reference flow | Meter calibration, job logs and support allocation reconciliation |
| cp_pack | colour_make | individual packaging rows | Packaging count, mass and reject log | article id; polymer; component; count; measured item kg; used/rejected/recovered count; attached paint; supplier; cohort; carried burdens | Packaging supervisor counts and weighs each supplied article and each waste separately. Retain full packing/repacking/failed-fill quantities, component evidence and coating residue subledgers, matched with WIP carry. Record raw numerators only; include actual ancillary packaging and avoid double-counting article constituents. | kg; count | Each fill/packing lot | Complete actual period and traced cohort, including failed/zero-output runs and all periods carrying WIP or returns | Declared site and this PW6 acrylic route only | per 1 kg reference flow | Weighed component samples, supplier bill of materials and reject tickets |
| cp_outlets | colour_make | waste and elementary outputs | Weighbridge, sampling and receiver records | species/stream id; wet kg; water/solid fractions; sample/time; air compartment; control inlet/capture/outlet; destination; receiver; stock and burden carry; uncertainty | Environmental owner collects raw actual wet waste and independently supported emitted-species numerators after controls, including failures and all retained WIP burdens. Distinguish fresh water, retained free water, internal recycle, washwater, capture and evaporation. Do not derive unknown reaction water and unknown emissions from one residual or translate COD into species. This physical blending route has no claimed net reaction-water source. No division in collection. | kg | Each outlet movement and sampling interval | Complete actual period and traced cohort, including failed/zero-output runs and all periods carrying WIP or returns | Declared site and this PW6 acrylic route only | per 1 kg reference flow | Waste tickets, receiver acceptance, species methods and independent uncertainty/balance evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_conversion | all inventory rows | Perform only required raw conversions: kg=integrated m3 × independently measured kg/m3; integrated volume=rate × actual duration only for a rate; MJ=kWh × 3.6. Composition fractions of purchased gel/additives do not create extra procurement. | raw_volume; density; temperature; rate; duration; raw_kWh | converted raw numerators |  |
| calc_cohort | all inventory rows | Build each raw attributable numerator A_i from complete actual-period activity plus opening WIP carried burdens minus closing WIP carried burdens, using traced cohort ids. Preserve zero-output losses and incremental rework. Cancel only documented internal stock/return transfers and original burden duplicates; never delete a real burden. Reopened returned cohorts retain original unique release Q and receive disclosed incremental-burden restatement. Unresolved carry or cross-cohort attribution blocks a complete dataset. | period_totals; opening_WIP_burdens; closing_WIP_burdens; cohort_ids; return_ids | A_i |  |
| calc_report | all inventory rows | Report q_i = A_i / Q once for the complete matched positive first-release cohort, after raw conversions and burden carry reconciliation. Q is raw newly accepted net wet paint kg; o_new is 1 kg. Cards and protocol aggregation describe this same reporting operation, not successive divisions. i_return and o_reaccepted retain measured paired loop mass per this same Q and cancel on consolidation; they do not increase Q or represent a second saleable product. | A_i; Q; cp_release; cp_period | per 1 kg reference flow |  |
| calc_balance | all inventory rows | Reconcile physical wet mass independently before burden normalization: opening WIP + external formulation/cleaning material issues (excluding packaging) + returned paint = closing WIP + newly released Q + reaccepted returned mass + separately measured wastes + separately supported air releases. Packaging has its own supplied/retained/rejected stock balance; energy is not mass. Reconcile water and Ti across actual product/waste/stock species using supplier assay and measured outlet evidence. Physical carrier evaporation is not reaction water. Neither an unknown outlet nor a hypothetical species may be solved by fitting the same unexplained residual. | raw_mass_ledger; water_subledger; Ti_assay; measured_outlets; WIP; return_ledger | mass and element reconciliation with uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Keep full supplied product/chemical/phase/grade, native route/geography/medium restrictions and actual supplier compatibility. Broad native identities give no recipe or quantities; unresolved auxiliary UUID is a linkage gap, not zero use. Reference must retain the selected PW6 aqueous acrylic artist scope. | Supplier specification and identity audit |
| dq_raw | all protocols | Retain full actual-period raw records, owner signoff, all failures and stock/burden carry, single calc_report operation and uncertainty. No invented foreground measurements or industry averages. | Raw and derived ledgers with reproducible reconciliation |
| dq_formula | formulated supplies | Confirm each actual commercial grade. Supplier ingredient/active/water composition is a non-additive subledger; SDS ranges do not define recipe or pigment loading. If this named-gel route cannot be demonstrated, do not silently substitute another binder/route. | Supplier bills, CoA, recipe issue records |
| dq_sources | method evidence | The four Golden pages are one manufacturer evidence family. The historical DIY article and water-reclamation case are qualitative only. EPA independently distinguishes physical paint manufacture from cooked varnish; its solvent/particulate/control factors are not adopted. Product viscosity and lightfastness labels are not lifetime or colour-equivalence factors. | `golden-product`; `golden-diy`; `golden-water`; `epa-paint` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_reference | o_new | Require one explicit o_new link, the declared reference UUID, 1 kg net mass and matching bilingual scope. i_return/o_reaccepted are real paired Product exchanges sharing the UUID and cannot be hidden or counted as a second new reference. |  |
| vr_denominator | all inventory rows | Require Q>0 unique first release, raw A_i and full WIP/return carry with only one calc_report division. Reject Q inferred from dispatch or Q plus same-cohort closing finished stock. An actual delivery study needs its own stock/burden reconciliation. |  |
| vr_completeness | colour_make | Every actual ingredient, utility, packaging component, rework burden, waste stream and emitted species must be individually present or supported absent. Auxiliary unresolved UUIDs and supplier gaps remain disclosed; no data package can claim complete linked inventory while applicable gaps remain. |  |
| vr_balance | calc_balance | Require physical mass, water and Ti reconciliation supported independently from actual species evidence, allowing stated measurement uncertainty without assigning unknown chemistry to a residual. Keep waste receiver transfers distinct from elementary emissions. |  |
| vr_claims | dataset profile | Do not infer service life, coverage, pigment/binder recipe, dry-film function, zero VOC, product safety or scientific approval from identity or finite structural checks. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground physical manufacture of the declared PW6 aqueous acrylic artist colour |
| downstream_use | Background-linked manufacturing inventory at first quality release |
| allowed_use | Declared product/route/phase cohort only; separate expansion for warehouse/dispatch |
| excluded_use | Full CPC35120 coverage, industrial paint or ink proxy, service/colour/lifetime comparison, undisclosed proprietary recipe |
| required_metadata | All reference qualifiers, raw period and cohort ids, Q gate, stock/return and burden ledgers, supplier native compatibility, all additional atomic rows |
| required_quality_disclosure | Measurement uncertainty, all unresolved links, native metadata debts, historical source limits, allocations, exclusions and missing evidence |
| update_trigger | Changed pigment/binder/formulation, supply article, process, packaging, release/delivery gate, site/period or new contrary identity evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| golden-product | handbook | https://goldenartistcolors.com/products/heavy-body-acrylic-color-titanium-white | Manufacturer item 1380: real PW6 rutile heavy-body artist white and HDPE-pail market example. Identity only; no supplied recipe, density, fill-mass conversion, performance equivalence or lifetime adopted. |
| golden-making | handbook | https://goldenartistcolors.com/discover-golden/how-we-make-our-paints | Manufacturer qualitative mixing, milling, testing and before-shipping QC; no measured site inputs or universal recipe. Same publisher as other Golden pages. |
| golden-diy | handbook | https://justpaint.org/just-make-paint/ | Golden Artist Colors, Just Make Paint, 1 October 2000: purchased acrylic gel, dry-pigment dispersion and separate formulated dispersant/defoamer route, water and packaging functions. Historical DIY method only; no ratio, additive concentration, pH, industrial yield, current product availability or proprietary recipe adopted. |
| golden-water | handbook | https://goldenartistcolors.com/resources/golden-manufacturing-water-reclamation-process | Ben Gavett manufacturer case: carrier water versus equipment cleaning, washwater and pigment/polymer residue. Qualitative completeness only; its water-use ratio, RO recovery, transport distance, on-site treatment and COD cannot be transferred as this site inventory or species emissions. Same manufacturer evidence family. |
| epa-paint | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c06s04.pdf | US EPA AP-42 6.4, May 1983 reformatted January 1995, p.1: independent physical dispersion/mixing/packaging versus cooked-varnish process distinction. Solvent-paint archetype; no artist recipe, generic loss/emission/control factors or quantitative default adopted. |
