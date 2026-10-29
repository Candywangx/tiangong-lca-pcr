---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.uncoated-autoclaved-cellulose-fibre-cement-flat-board
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated autoclaved cellulose fibre cement flat-board manufacture

## 1. Scope and Applicability

This PCR covers complete manufacture of bare uninstalled flat cellulose-fibre cement board from purchased Portland cement, prepared cellulose pulp, quartz-rich sand and every actually used separate supply, through first quality release, with subsequent observed packing/storage/handling/dispatch recorded as a separate service account. The selected route is pulp dispersion/refining and actual sand preparation → dosing/slurry mixing → Hatschek sieve/felt/format-roll forming and dewatering → green cutting/stacking/pressing → documented precuring → steam autoclaving → cooling/de-stacking → actual drying/final trim and tests → first release. It is a transparent technical synthesis of manufacturer and certification evidence, not an asserted same-SKU, same-plant recipe or contemporary order. bba-superflex-2019; uac-fibre-cement-2024; iibcc-cutting-2010; swisspearl-manufacture.

Cellulose pulp means discrete prepared plant fibres, not wood chips or wood wool. Cellulose is the only reinforcing fibre in this selected method; a real polymer retention aid is a separately supplied preparation, not automatically a reinforcing fibre. Exclude asbestos, PVA/glass/basalt or other reinforcement, gypsum matrices, resin/wood-particle agglomerates, corrugated/moulded roofing, patterned or coated boards, externally faced/laminated boards, composites with dissimilar layers and installed roof/wall systems. Those require a distinct applicability decision. Same-formulation thin-layer accumulation inherent in Hatschek forming remains included; it is not the excluded dissimilar-layer composite. Cement manufacture is upstream, not whole-board manufacture. No formulation, fibre share, water/cement ratio, curing temperature/time, strength, density, operating recipe, installation test threshold or service life is prescribed. The declared unit is manufacturing supply, not proven installed performance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.uncoated-autoclaved-cellulose-fibre-cement-flat-board |
| classification_refs | CPC 3.0 37570; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Whole uncoated uninstalled autoclaved cellulose-pulp-reinforced Portland-cement/quartz flat board at first quality release |
| excluded_products | Cellulose pulp means discrete prepared plant fibres, not wood chips or wood wool. Cellulose is the only reinforcing fibre in this selected method; a real polymer retention aid is a separately supplied preparation, not automatically a reinforcing fibre. Exclude asbestos, PVA/glass/basalt or other reinforcement, gypsum matrices, resin/wood-particle agglomerates, corrugated/moulded roofing, patterned or coated boards, externally faced/laminated boards, composites with dissimilar layers and installed roof/wall systems. Those require a distinct applicability decision. Same-formulation thin-layer accumulation inherent in Hatschek forming remains included; it is not the excluded dissimilar-layer composite. Cement manufacture is upstream, not whole-board manufacture. No formulation, fibre share, water/cement ratio, curing temperature/time, strength, density, operating recipe, installation test threshold or service life is prescribed. The declared unit is manufacturing supply, not proven installed performance. |
| representative_product | UCO Superflex-type bare flat-board terminal; physical/method synthesis reference rather than a required SKU |
| production_route | Purchased raw supplies → pulp dispersion/refining and actual sand preparation → slurry mixing → Hatschek forming/dewatering → green cutting/stacking/pressing → precuring and steam autoclaving → cooling/de-stacking/drying/trim/tests → first release |
| market_state | Whole manufactured bare flat board at actual moisture and specification; service horizon separately disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a specified whole manufactured bare cellulose-cement flat board for downstream use; installed-system function is not quantified |
| How much | 1 kg net whole board newly first-quality-released at actual recorded moisture and configuration |
| How well | Actual manufacturer specification and recorded integrity/dimension/moisture/phase and actually claimed performance tests; no universal class/threshold |
| How long or cycle | One first-release manufacturing cohort; disclose original Qc and actual observed service horizon H separately; no assumed building life |
| reference_flow_link | finished_board |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Boards, blocks and similar articles of vegetable fibre, straw or wood waste agglomerated with mineral binders `483a8bb8-bab7-476a-bdae-aae74e8d2aab` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Whole bare flat board with cellulose pulp as the only reinforcing fibre and hydrated Portland-cement/quartz matrix; No asbestos wood chips wood wool gypsum matrix polymer/mineral reinforcement coating or installed system; Actual site reporting period supply geography and the explicitly selected Hatschek/press/autoclave route; Actual pulp preparation and silica milling state and each whole purchased formulation with additive/carrier-water subledgers; Actual precuring autoclave drying de-stacking trim tests acceptance and disposition records; Measured whole-board first-release net mass moisture composition phase state and configuration range; Actual single-face projected outline geometry and independent same-configuration mass/area/count measurements; Actual manufacturer/specification permission and postwork tests for any post-release work; Unique first-release Q already including retained closing finished goods and zero-output/failed operation records; Opening/closing raw/WIP/unassigned-store inheritance vectors distinct from released FG; Original cohort Qc and observed horizon H for all performed post-release services; Actual steam carrier mass pressure temperature enthalpy condensate and supplier water/energy ownership; Each packaging P/I/ER/S/EO/W physical leg and opening/closing empty attached and reusable stocks; Installed assets fluids and new/removed repairs as full physical stocks and separately assigned current service; Independent molecular species phase origin receiving medium and physical/element balance evidence; Native identity restrictions from every adopted card and local provider compatibility evidence |

Declare all required qualifiers in consumable metadata/reference/process comments. The whole reference includes its actual incorporated water and constituents, excludes removable shipping packaging, and inherits all native restrictions in finished_board.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of calibrated net whole-board masses at the documented first quality release and actual moisture condition; exclude removable packaging. Retained closing FG is already in Q. Measure each configuration or an explicit traceable sampling range, never borrow catalogue/secondary-property density. |
| native_energy | energy rows | Energy | MJ | Preserve each native extensive numerator. Electricity uses its verified Net calorific value/MJ reference; exact 1 kWh = 3.6 MJ conversion precedes attribution. Actual heat uses its real energy convention. Fuel carrier mass and net/gross heat are separate linked subledgers, never duplicated full providers. Mass/kg rules do not constrain MJ, kWh or m3 numerators. |
| actual_area | geometry disclosure | Area | m2 | Record actual single-face projected outline area after finishing. L times W only for a verified rectangle; use measured or traceable drawing-specific geometry for cutouts/nonrectangles, never a bounding box or doubled faces. Area is a qualifier here; no area/weight conversion without independent same-configuration measurements. |
| native_count | count and configuration | Number of items | item | Item(s) and item are equivalent counts with factor 1. Count-to-kg needs measured net whole-board M on a calibrated scale for the same configuration, actual moisture, stated sampling range and uncertainty; never use a secondary Mass coefficient or assumed per-piece mass. Physical machinery count and current service burden are separate. |
| native_volume | liquid gas and rate conversion | Volume | m3 | Use cumulative liquid/gas volume once; integrate only a true rate over actual time. Density must be independently measured for that substance at actual composition, temperature, pressure and moisture; never use water density for oil or gas. Native hydraulic-fluid m3 and physical mass are linked by such density, not by its label. |
| phase_basis | water and mineral state | Mass | kg | Distinguish supplied carrier water, free moisture, liquid/vapour phase change and mineral structural/reaction water with independent phase-sensitive evidence and real composition/extent. Dry-mass assay is not another purchase or a second reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receive cement pulp sand and each actual separate supply in its real supplied state; upstream and transport included |
| starting_condition_role | Actual foreground supply fact with inherited history; not a history-free cut-off |
| product_classification_scope | Semantic bare autoclaved cellulose-cement flat-board subset of CPC3.0:37570 |
| recursive_input_rule | Same-category purchased/returned board retains origin/full inheritance and cannot replace omitted manufacture |
| upstream_dataset_requirement | Match each real supply form route geography period and provider with disclosed boundary composition and allocation |
| disclosure | First-release manufacturing gate; separate service H; full gross physical legs; per-exchange inheritance and native restrictions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_scope | whole route | Collect real whole purchased raw supplies and their transport, pulp dispersion/refining, actual silica wet milling if performed, dosing/mixing, Hatschek sieve/felt/format-roll forming, dewatering and green cutting, stacking/pressing, documented precuring then steam autoclaving, cooling/de-stacking, actual drying and dry trim, inspection and first quality release. Internal return loops retain actual wet mass, composition and inherited burden. Air-only curing, extrusion and flow-on are not interchangeable branches. Sources describe a transparent technical synthesis, not one complete contemporary factory order. | uac-fibre-cement-2024; bba-superflex-2019; iibcc-cutting-2010; swisspearl-manufacture |
| b_gate | manufacturing cohort | Q is the sum of net intact whole boards newly passing first quality release in this cohort at measured moisture; retained closing FG from that cohort is already in Q. Do not deduct its manufacturing burden or add Q and closing FG as two manufacturing outputs. Gross shipments, returns and reinspection never create new production. Retain all failed boards, destructive samples, startup/shutdown, idle, cleaning and actual rework burdens. Q=0 retains actual burdens and stock/physical records without a unit result. | bba-superflex-2019; ilcd-allocation-2010 |
| b_service | post-release service | Record actual performed packing/storage/handling/dispatch service increments by original cohort c and observation horizon H against its original Qc. Finished boards remaining in stock do not cancel service already performed. Only unused/unassigned service or charge may carry forward. The board-only FG bridge uses whole net board mass including actual incorporated water: opening released FG + newly first-released Q + actual returned-board mass + actual material/water incorporated into boards during permitted service = closing released FG + gross shipped-board mass + board destruction/waste + actual board-material/water outlegs. Packaging and supporting asset/fluid stocks are reconciled separately in the full service gate under b_physical/b_packaging, rather than added to a board-only bridge without their own stocks. Keep original delivery identity and original composition/burden links for each return; actual returned mass need not equal original delivered mass. Return handling, moisture changes and permitted rework are real increments. Combine manufacturing and FG/service gates by cancelling internal Q exactly once; this is not a net-delivery-Q method. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed. | bba-superflex-2019; ilcd-allocation-2010 |
| b_inheritance | each exchange vector | Use calc_burden for each exchange in its own extensive unit. Carry opening and closing raw material, unreleased WIP and genuinely unassigned non-WIP stores with their full inherited upstream and performed-processing vectors. Closing manufacturing vectors exclude first-released FG. Do not cancel physical new material/water ingress merely because it remains in a closing wet stock. Material consumption already corrected for stocks must not receive a second stock deduction. Keep item/batch transfers and every per-flow vector rather than transferring a mass-only total. Independently record each raw/WIP/non-WIP physical quantity and every complete historical exchange vector; a mass total cannot replace per-exchange history. | ilcd-allocation-2010 |
| b_physical | each gross physical gate | Define physical ownership of every stock and leg before reconciling the gates. The manufacturing board-material gate contains raw materials, unreleased WIP and unreleased stores, and outputs first-release Q once; it excludes released FG stock. The board FG bridge contains released FG stocks and that same incoming Q, not raw/WIP. Each gate also retains its actual full packaging, installed asset, fluid and repair subledgers with no fractional physical stocks; a physically shared utility has one separately declared stock boundary. The combined gate takes the union of all physical stocks once and cancels internal Q and paired transfers. Reconcile the full wet opening/closing state in every declared stock boundary. For each gate: opening full physical stocks + all actual external inputs = closing full physical stocks + all actual external outputs. Enumerate each raw supply, each water phase, steam carrier mass, each ambient/exhaust species, condensate/product return, waste, sample, shipment and new/removed part. Deduplicate X_in/X_out only against other actual incoming/outgoing terms already counted, including whole-article P/I embedded inputs. Never suppress a real new ingress because it remains in closing stock. Cancel internal paired transfers only at the combined gate; do not scale physical gross legs by economic or other burden shares. | uac-fibre-cement-2024; ilcd-allocation-2010 |
| b_chemistry | water and carbon balances | Establish actual cement/mineral phases, hydration extent, structural water, free water, liquid/gas phase transfer, cellulose moisture and carbon independently. Whole reference mass includes all actual board constituents and water at release. Element balances for relevant C/H/O/Ca/Si/Al/Fe/N/S and total physical mass are independent checks; one residual cannot solve two unknowns. No automatic calcination CO2, fibre oxidation, carbonation uptake or permanent storage/credit is assumed. NOx, VOC, COD, total carbon and dust-size results are indicators, not a specific molecular mass. Captured dust is not also an air release. | uac-fibre-cement-2024; iibcc-cutting-2010 |
| b_packaging | each packaging article | For every physical packaging article use opening empty + opening WIP/FG-attached + opening reusable + P (paid procurement (standalone or bundled)d) + I (first non-purchased external ingress) + ER (external returns received) + X_in = closing empty + closing WIP/FG-attached + closing reusable + S (out with gross physical shipments) + EO (external returns out) + W (waste) + X_out. P and I are disjoint upstream owners; supplier inclusion never erases the real physical ingress. Embedded material/water/fasteners already in a whole article occur once. Internal reuse cancels; it creates no purchase, net-board Q or automatic coproduct. Record each actual return/transfer/waste leg and contamination/repair separately. Add actual separately measured material/water X_in on the incoming side and X_out on the outgoing side of this formal equation. Deduplicate only the same corresponding already-counted same-side flow term, never stocks/opposite flows/an existing card; retain actual retained influx and complete wet closing stock, with each wet P/I once. If there is one real co-collected waste stream, article W values are independently measured conserving origin subaccounts, not invented separated outlets or additive component-plus-whole treatment.  Apply packaging_receipt_basis to distinguish each actual P/I/ER receipt. | bba-superflex-2019; ilcd-allocation-2010 |
| b_utilities | steam electricity assets and fluids | The selected autoclave requires real steam/thermal records; no boiler or supplier is inferred from a diagram. Choose and disclose the actual utility interface. A purchased whole steam supply has one energy/water upstream owner; record carrier mass and actual pressure/temperature/quality and enthalpy separately from MJ. Actual externally returned condensate or warm exchanger water is a Product return at measured mass/composition/thermal state; do not duplicate supplied water or assume nonexistent return. Electricity, each actual fuel and thermal supply remain separate exchanges. For machinery/autoclave/rollers/plates/mesh/felt/blades and every repair or fluid, retain full gross acquisitions, installed/unused/removed stocks, water and disposal; current service burden uses measured use and justified service attribution, with no fixed life or one machine per kg. Actual on-site boiler/fuel/water-treatment or different drying technology requires explicit additional atomic rows and evidence before use. | swisspearl-manufacture; bba-superflex-2019; ilcd-allocation-2010 |
| b_supply | whole formulation and recursion | Each whole purchased cement blend, pulp preparation or chemical formulation has one upstream purchase owner; assay, active ingredient and carrier water are non-additive composition subledgers. Actual on-site preparation instead records each purchased component and real mixing energy/loss. Same-category returned/recovered material is traced by origin and inherited burdens; a bought finished board cannot substitute for omitted manufacture. Add every actual unlisted chemical, packaging component, water leg, emitted species or waste as a concrete atomic row with a protocol and reviewed identity; unknown is not zero or a plural other-material bucket. | uac-fibre-cement-2024; ilcd-allocation-2010 |
| packaging_receipt_basis | each packaging receipt | For every actual packaging article, classify each whole external receipt once. P is paid procurement, including paid packaging bundled with another supply without a separate invoice. I is all first non-purchased external ingress: standalone gifts, loans, rental or pool receipts and non-purchased supplier-attached packaging; supplier attachment is only an I subset. ER requires this same item or an auditable configuration-matched batch linked to this site's own prior outward record; custody or another party's use alone does not prove a return. P, I and ER are disjoint. Existing I cards and their raw protocols cover the same physical article for every such I origin; no new material, UUID or quantity is presumed. X_in/X_out remain disjoint material/water-change terms, never a substitute for whole-article receipt. Retain gross physical quantity, owner/custodian, payment or non-purchase basis, origin, prior-outward link where required, native state/unit and inherited manufacturing/service vector. Non-purchase is neither a new manufacture nor automatic zero burden: attribute actual used service and incremental transport/handling once to its proper original cohort and denominator, retaining unused service separately without a default lifetime or credit. This is the declared conserving foreground accounting implementation, not a claim that the cited source prescribes these variable names. | `ilcd-allocation-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | Receipt and cellulose/silica preparation and mixing | required | Actual selected manufacture and supporting activities | supporting_process | finished_board |
| form | Hatschek forming dewatering green trimming and pressing | required | Actual selected manufacture and supporting activities | supporting_process | finished_board |
| cure | Precuring steam autoclaving cooling and de-stacking | required | Actual selected manufacture and supporting activities | supporting_process | finished_board |
| finish | Drying final trim inspection and first quality release | required | Actual selected manufacture and supporting activities | reference_output | finished_board |
| service | Observed post-release packing storage handling and dispatch | conditional | Actual observed services | supporting_process | finished_board |
| utilities | Actual electricity mobile handling and asset service | required | Actual selected manufacture and supporting activities | supporting_process | finished_board |
| waterloop | Whitewater recovery cleanup and off-site residue handover | required | Actual selected manufacture and supporting activities | supporting_process | finished_board |

### Process: Receipt and cellulose/silica preparation and mixing (`prepare`)

#### Inputs

##### Product flows

###### Portland cement (`cement`)

Actual whole ordinary Portland cement supplied as finished hydraulic powder, with cement type/blend/phase and supplier formulation disclosed. Do not purchase clinker constituents again or infer a strength grade from a candidate identity. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Native whole gray hydraulic Portland-cement powder, factory production ready for delivery, with explicit OPC/Type I aliases and no fixed strength grade. Qualify actual cement composition, setting class, moisture and supplier preparation. Calcination belongs to its one upstream supply, not another foreground clinker or CaO purchase. Its paving-article taxonomy is inconsistent with the positive powder/binder definition and is disclosed as taxonomy debt; it does not make this a paving block.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Unbleached kraft wood pulp for fibre cement (`pulp`)

Record actual unbleached kraft wood pulp for fibre cement as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Purchased unbleached non-dissolving kraft wood pulp for reinforcement, with supplier confirmation of wood origin, pulping and bleaching state, moisture and additives. Native route is kraft pulping; paper-use commentary describes pulp production upstream and does not put digestion/black liquor in this foreground. Native dissolving-grade classification is inconsistent with its broad papermaking-pulp description; do not infer a dissolving specification. No bamboo, recovered fibre, chips or viscose solution is substituted. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Kraft pulp `75bdc15b-dfa7-4b4a-a6ad-4c79d08794d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pulp`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Refined silica sand (`sand`)

Actual quartz-rich refined sand supply before any foreground wet ball milling; retain mineralogy, grain-size distribution, moisture and supplier preparation. Quantify real milling electricity, media wear, water and losses rather than copying the case-study fineness or sand share. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Native whole quartz/silica-sand raw batch-preparation input at plant, Mass/kg, with explicit silica-sand/quartz-sand names and no native grain cutoff. Qualify actual crystalline mineral mixture, impurities, supplier preparation, moisture and grain distribution; site milling and water are separate actual operations. No pure-SiO2 component purchase, fixed purity or size is inferred.

- Selected flow: Quartz `ddee14c5-2a28-4224-9b84-68dc5956972f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sand`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Aluminium hydroxide powder (`alumina`)

Conditional actual aluminium hydroxide powder supply only after chemical/phase and whole-supply confirmation. A source word alumina does not establish Al(OH)3. Do not substitute a 65% native preparation or double-count it with aluminiumoxide. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Aluminium hydroxide powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alumina`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Silica fume (`silicafume`)

Conditional actual silica-fume whole supply with amorphous structure, densification, carrier moisture and producer route documented. Quartz powder and wollastonite are different physical identities. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Silica fume
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_silicafume`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Iron(III) oxide pigment (`redoxide`)

Only an actual separately supplied iron(III) oxide pigment; record manufacturing route and any whole preparation/carrier. Bulk-coloured variants need separate applicability review and cannot turn this uncoated natural-board route into a paint process. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Native whole iron-oxide pigment Product family explicitly includes red ferric-oxide colorants as well as other colours. This conditional row selects only the actual separately supplied red Fe(III)-oxide pigment and its whole grade/preparation; not yellow hydroxide, black magnetite, iron ore or an active-oxide fraction of a purchased paint. Supplier assay, carrier/additives and actual in-body-colour applicability remain required; no coating operation, composition or performance is presumed.

- Selected flow: Iron oxide pigment `6a04e79b-6699-4502-8fde-188df47058c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_redoxide`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Aqueous anionic polyacrylamide retention preparation (`pam`)

Conditional one actual whole purchased aqueous anionic polyacrylamide retention preparation, if used. Record concentration, carrier water and all formulation constituents in a non-additive subledger. A monomer, cationic grade or dry polymer identity cannot represent this whole preparation. If prepared on site instead, split actual purchased polymer, water, mixing energy and losses with one procurement owner per supply. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Aqueous anionic polyacrylamide retention preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pam`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Process water (`water`)

Record actual process water as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. External process-water makeup used as reaction/slurry medium. Native GLO at-plant identity does not verify a local water supplier or treatment burden; supply geography, quality and upstream owner must be measured/disclosed. Internal recovered water and carrier water already inside a purchased formulation are not another purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Steel wire for pulp-bale binding (`pulpwire`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Existing card is I only: first non-purchased whole-article ingress, standalone or supplier-attached, not paid procurement P. Measure the complete wet article once, with its one upstream burden owner kept separately. Actual single whole steel wire for pulp-bale binding, including first non-purchased external ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Steel wire for pulp-bale binding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pulpwire`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Kraft paper cement sack (`sack`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Existing card is I only: first non-purchased whole-article ingress, standalone or supplier-attached, not paid procurement P. Measure the complete wet article once, with its one upstream burden owner kept separately. Record actual kraft paper cement sack as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One actual whole kraft paper valve/open-mouth cement sack, including its actual integral construction. Native Paper bag includes kraft sacks but does not establish liner/coating composition or provider compatibility. first non-purchased external ingress remains a gross physical input with one upstream owner; separate embedded components only in a non-additive composition ledger. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sack`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Polypropylene woven sand sack (`ppbag`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Existing card is I only: first non-purchased whole-article ingress, standalone or supplier-attached, not paid procurement P. Measure the complete wet article once, with its one upstream burden owner kept separately. Actual single whole polypropylene woven sand sack, including first non-purchased external ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Polypropylene woven sand sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ppbag`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Aluminium oxide powder (`aluminiumoxide`)

Conditional actual Al2O3 supply only with chemical/phase and moisture confirmation; distinct from hydrated alumina/Al(OH)3 and from the aluminium-element subledger. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Aluminium oxide powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aluminiumoxide`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Steel ball-mill grinding media (`millmedia`)

Actual whole steel ball-mill grinding media with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Steel ball-mill grinding media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_millmedia`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Wet uncured cellulose cement sheet trimmings for internal recovery (`wettrimin`)

Internal transfer of the actual wet uncured cellulose cement sheet trimmings for internal recovery with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Wet uncured cellulose cement sheet trimmings for internal recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wettrimin`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Recovered cellulose cement process water (`recyclewaterin`)

Internal transfer of the actual recovered cellulose cement process water with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Recovered cellulose cement process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recyclewaterin`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Steel pulp-bale binding wire P (`pulpwire_p`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Actual paid standalone or bundled new article only; no supplier-included or returned purchase duplication. Actual single whole steel wire for pulp-bale binding, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Steel wire for pulp-bale binding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Steel pulp-bale binding wire ER (`pulpwire_er`)

Actual intact external return received into this article ownership pool; not new purchase or internal reuse. Actual single whole steel wire for pulp-bale binding, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Steel wire for pulp-bale binding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole kraft paper cement sack P (`sack_p`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Actual paid standalone or bundled new article only; no supplier-included or returned purchase duplication. Record actual kraft paper cement sack as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One actual whole kraft paper valve/open-mouth cement sack, including its actual integral construction. Native Paper bag includes kraft sacks but does not establish liner/coating composition or provider compatibility. Supplier-included ingress remains a gross physical input with one upstream owner; separate embedded components only in a non-additive composition ledger. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole kraft paper cement sack ER (`sack_er`)

Actual intact external return received into this article ownership pool; not new purchase or internal reuse. Record actual kraft paper cement sack as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One actual whole kraft paper valve/open-mouth cement sack, including its actual integral construction. Native Paper bag includes kraft sacks but does not establish liner/coating composition or provider compatibility. Supplier-included ingress remains a gross physical input with one upstream owner; separate embedded components only in a non-additive composition ledger. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole polypropylene woven sand sack P (`ppbag_p`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Actual paid standalone or bundled new article only; no supplier-included or returned purchase duplication. Actual single whole polypropylene woven sand sack, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polypropylene woven sand sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole polypropylene woven sand sack ER (`ppbag_er`)

Actual intact external return received into this article ownership pool; not new purchase or internal reuse. Actual single whole polypropylene woven sand sack, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polypropylene woven sand sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet cellulose cement silica slurry (`slurryout`)

Internal transfer of the actual wet cellulose cement silica slurry with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Wet cellulose cement silica slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slurryout`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Steel pulp-bale binding wire S (`pulpwire_s`)

Actual packaging leaving on gross physical shipments only, independent of board production Q. Actual single whole steel wire for pulp-bale binding, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Steel wire for pulp-bale binding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Steel pulp-bale binding wire EO (`pulpwire_eo`)

Actual intact article returned externally to its supplier/pool only; not shipment S, internal reuse or credit. Actual single whole steel wire for pulp-bale binding, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Steel wire for pulp-bale binding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole kraft paper cement sack S (`sack_s`)

Actual packaging leaving on gross physical shipments only, independent of board production Q. Record actual kraft paper cement sack as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One actual whole kraft paper valve/open-mouth cement sack, including its actual integral construction. Native Paper bag includes kraft sacks but does not establish liner/coating composition or provider compatibility. Supplier-included ingress remains a gross physical input with one upstream owner; separate embedded components only in a non-additive composition ledger. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole kraft paper cement sack EO (`sack_eo`)

Actual intact article returned externally to its supplier/pool only; not shipment S, internal reuse or credit. Record actual kraft paper cement sack as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One actual whole kraft paper valve/open-mouth cement sack, including its actual integral construction. Native Paper bag includes kraft sacks but does not establish liner/coating composition or provider compatibility. Supplier-included ingress remains a gross physical input with one upstream owner; separate embedded components only in a non-additive composition ledger. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole polypropylene woven sand sack S (`ppbag_s`)

Actual packaging leaving on gross physical shipments only, independent of board production Q. Actual single whole polypropylene woven sand sack, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polypropylene woven sand sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole polypropylene woven sand sack EO (`ppbag_eo`)

Actual intact article returned externally to its supplier/pool only; not shipment S, internal reuse or credit. Actual single whole polypropylene woven sand sack, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polypropylene woven sand sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

##### Waste flows

###### Waste pulp-bale steel binding wire (`wastewire`)

Actual waste pulp-bale steel binding wire at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This is a separate Waste exchange only for an actual separately transferred material stream. If the site has one co-collected packaging outflow, this article W is its measured origin/component subaccount under mixed_pack_waste, not another additive whole-stream waste or treatment.

- Selected flow: Waste pulp-bale steel binding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewire`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Waste kraft paper cement sack (`wastesack`)

Actual waste kraft paper cement sack at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This is a separate Waste exchange only for an actual separately transferred material stream. If the site has one co-collected packaging outflow, this article W is its measured origin/component subaccount under mixed_pack_waste, not another additive whole-stream waste or treatment.

- Selected flow: Waste kraft paper cement sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastesack`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Waste polypropylene woven sand sack (`wastepp`)

Actual waste polypropylene woven sand sack at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This is a separate Waste exchange only for an actual separately transferred material stream. If the site has one co-collected packaging outflow, this article W is its measured origin/component subaccount under mixed_pack_waste, not another additive whole-stream waste or treatment.

- Selected flow: Waste polypropylene woven sand sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastepp`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Worn steel ball-mill grinding media (`usedmillmedia`)

Actual worn steel ball-mill grinding media at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Worn steel ball-mill grinding media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedmillmedia`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

##### Elementary flows

###### Portland cement dust to air (`cementair`)

Actual separately characterized Portland-cement particulate release at raw handling/mixing; do not equate it with crystalline quartz, cured-board dust or an arbitrary individual calcium compound. Keep full physical emitted mass and independently measured phase/element subledgers. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Portland cement dust to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cementair`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

### Process: Hatschek forming dewatering green trimming and pressing (`form`)

#### Inputs

##### Product flows

###### Wet cellulose cement silica slurry (`slurryin`)

Internal transfer of the actual wet cellulose cement silica slurry with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Wet cellulose cement silica slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slurryin`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Water for green-sheet jet cutting (`jetwater`)

Record actual water for green-sheet jet cutting as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Water for green-sheet jet cutting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_jetwater`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Polyester Hatschek forming felt (`felt`)

Actual whole polyester hatschek forming felt with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Polyester Hatschek forming felt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_felt`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Stainless-steel Hatschek cylinder mesh (`screen`)

Actual whole stainless-steel hatschek cylinder mesh with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Stainless-steel Hatschek cylinder mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_screen`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Steel Hatschek format roller (`roller`)

Actual whole steel hatschek format roller with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Steel Hatschek format roller
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roller`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Steel sheet for fibre-cement stacking and pressing (`plate`)

Record actual steel sheet for fibre-cement stacking and pressing as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Actual plain steel sheet used for stacking/pressing, with its real steel grade, finish, dimensions and condition. Native permits cold/hot-rolled steel sheet and specifies an iron alloy with minor constituents; it does not identify a fabricated roller, mould assembly or stainless mesh. Record full installed stock and replacement mass separately from current service burden. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Steel sheet `13082a6a-e820-45ec-89f5-3c2c3650495b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plate`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Sapphire water-jet orifice nozzle (`nozzle`)

Actual whole sapphire water-jet orifice nozzle with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Sapphire water-jet orifice nozzle
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nozzle`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uncured cellulose fibre cement flat sheet (`greenout`)

Internal transfer of the actual uncured cellulose fibre cement flat sheet with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Uncured cellulose fibre cement flat sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_greenout`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Wet uncured cellulose cement sheet trimmings for internal recovery (`wettrimout`)

Internal transfer of the actual wet uncured cellulose cement sheet trimmings for internal recovery with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Wet uncured cellulose cement sheet trimmings for internal recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wettrimout`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Cellulose cement Hatschek whitewater (`whitewaterout`)

Internal transfer of the actual cellulose cement hatschek whitewater with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Cellulose cement Hatschek whitewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_whitewaterout`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

##### Waste flows

###### Spent polyester Hatschek forming felt (`usedfelt`)

Actual spent polyester hatschek forming felt at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Spent polyester Hatschek forming felt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedfelt`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Spent stainless-steel Hatschek cylinder mesh (`usedscreen`)

Actual spent stainless-steel hatschek cylinder mesh at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Spent stainless-steel Hatschek cylinder mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedscreen`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Retired steel fibre-cement pressing sheet (`usedplate`)

Actual retired steel fibre-cement pressing sheet at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Retired steel fibre-cement pressing sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedplate`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Retired steel Hatschek format roller (`usedroller`)

Actual retired steel hatschek format roller at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Retired steel Hatschek format roller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedroller`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Spent sapphire water-jet nozzle (`usednozzle`)

Actual spent sapphire water-jet nozzle at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Spent sapphire water-jet nozzle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usednozzle`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

###### Unrecovered uncured cellulose cement sheet reject (`greenreject`)

Actual unrecovered uncured cellulose cement sheet reject at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Unrecovered uncured cellulose cement sheet reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_greenreject`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`; `iibcc-cutting-2010`

##### Elementary flows

### Process: Precuring steam autoclaving cooling and de-stacking (`cure`)

#### Inputs

##### Product flows

###### Uncured cellulose fibre cement flat sheet (`greenin`)

Internal transfer of the actual uncured cellulose fibre cement flat sheet with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Uncured cellulose fibre cement flat sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_greenin`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`

###### Saturated steam for autoclave curing (`steam`)

Actual autoclave steam supply as one thermal exchange with independently metered carrier mass and actual pressure/temperature/quality/enthalpy. The heat MJ and carrier kg are linked subledgers of one supplied service, not two full upstream providers. Establish the real supplier/on-site boundary before using this row; wood-panel hot-press or fixed high-pressure chemical-industry heat is not a matching identity. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Saturated steam for autoclave curing
- Flow property / unit: Energy / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`

###### Actual external autoclave-steam carrier mass (`steam_carrier`)

Actual external carrier kg of the same one whole autoclave-steam supply whose heat is recorded in steam/MJ. Independently measure mass, actual pressure/temperature/quality/phase and enthalpy reference over the same interval; no secondary coefficient as density or guessed steam conditions. This is physical gross disclosure, not another water/heat purchase or upstream provider. Internal steam circulation cancels; an on-site boiler is not presumed.

- Selected flow: Actual external autoclave-steam carrier mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot condensate returned to steam supplier (`condensate`)

Only actual external product-quality condensate returned to its supplier. Measure full mass, contamination, actual temperature/pressure/enthalpy and supplier water/energy convention. Internal condensate recirculation cancels internally; drain purge is not this Product return. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Hot condensate returned to steam supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condensate`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`

###### Autoclaved cellulose fibre cement flat sheet before finishing (`curedout`)

Internal transfer of the actual autoclaved cellulose fibre cement flat sheet before finishing with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Autoclaved cellulose fibre cement flat sheet before finishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curedout`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`

##### Waste flows

##### Elementary flows

###### Water vapour to air (`vapourout`)

Record actual water vapour to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular water vapour (CAS 7732-18-5) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Gaseous H2O only; no liquid condensate, ice, heavy or tritiated water. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vapourout`
- Sources: `uac-fibre-cement-2024`; `swisspearl-manufacture`

### Process: Drying final trim inspection and first quality release (`finish`)

#### Inputs

##### Product flows

###### Autoclaved cellulose fibre cement flat sheet before finishing (`curedin`)

Internal transfer of the actual autoclaved cellulose fibre cement flat sheet before finishing with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Autoclaved cellulose fibre cement flat sheet before finishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curedin`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

###### Diamond-tipped steel fibre-cement trimming blade (`blade`)

Actual whole diamond-tipped steel fibre-cement trimming blade with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Diamond-tipped steel fibre-cement trimming blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blade`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

###### Purchased heat for board drying (`dryheat`)

One actual external thermal supply at the board-drying interface only when present, with named heat carrier, actual state, energy meter and water/energy upstream owner. No furnace, fuel, steam or fixed drying schedule is inferred from the word drying; actual direct-firing requires its own fuel and all species rows before use. Electric drying instead remains in its measured electrical operation account. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Purchased heat for board drying
- Flow property / unit: Energy / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dryheat`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uncoated autoclaved cellulose fibre cement flat board (`finished_board`)

One intact whole uncoated flat board after actual curing/finishing and first quality acceptance, weighed net of removable packaging at its real moisture state. This row is the only reference output. Closing FG already first released is included in Q and carries its manufacturing inheritance without a second manufacture output. The native Product family is a manufactured whole mineral-binder/vegetable-fibre article at plant. Restrict it here to a bare flat board with refined cellulose pulp in a hydrated Portland-cement/silica matrix after Hatschek forming and autoclave curing; no asbestos, wood chips/wool, gypsum matrix, other reinforcing fibre, coating or installed system. Native CPC37520 is a broader classification label and does not establish a CPC37570 mapping or authorize wood-wool methodology reuse. No native recipe, performance, density, geography or lifetime is inferred. The specific terminal is supported by bba-superflex-2019 and uac-fibre-cement-2024; it is neither slurry nor an uncured pressed intermediate. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Boards, blocks and similar articles of vegetable fibre, straw or wood waste agglomerated with mineral binders `483a8bb8-bab7-476a-bdae-aae74e8d2aab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_board`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

##### Waste flows

###### Worn diamond-tipped steel fibre-cement trimming blade (`usedblade`)

Actual worn diamond-tipped steel fibre-cement trimming blade at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Worn diamond-tipped steel fibre-cement trimming blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedblade`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

###### Cured cellulose cement board offcut (`hardoffcut`)

Actual cured cellulose cement board offcut at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Cured cellulose cement board offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hardoffcut`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

###### Rejected cured cellulose cement board (`reject`)

Actual rejected cured cellulose cement board at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Rejected cured cellulose cement board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

###### Destructively tested cellulose cement board specimen (`sample`)

Actual destructively tested cellulose cement board specimen at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Destructively tested cellulose cement board specimen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sample`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

###### Collected cellulose cement silica board dust (`dust`)

Actual collected cellulose cement silica board dust at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Collected cellulose cement silica board dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

##### Elementary flows

###### Crystalline quartz dust to air (`quartzair`)

Only independently determined actual crystalline quartz airborne mass in the true receiving medium; mineralogy, free silica, particle size and sampling basis remain explicit. Total dust, amorphous silica fume and the returned sand-to-water identity are not this species/medium. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Crystalline quartz dust to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quartzair`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

###### Cellulose dust to air (`celluloseair`)

Only actual independently resolved cellulose particulate release; preserve fibre chemistry, size and receiving medium. Do not infer cellulose mass from total PM, VOC, soot or the composition of captured dust. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Cellulose dust to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_celluloseair`
- Sources: `bba-superflex-2019`; `iibcc-cutting-2010`

### Process: Observed post-release packing storage handling and dispatch (`service`)

#### Inputs

##### Product flows

###### Wooden transport pallet (`pallet`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Existing card is P only: actual paid procurement, standalone or bundled, of a matching new or used article, excluding supplier-included I and return receipt ER. Measure the complete wet article once, with its one upstream burden owner kept separately. Record actual wooden transport pallet as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One whole wooden-board/slat pallet supplied at plant/lumber-mill interface. Native electrical-energy taxonomy is an isolated classification defect; the bilingual name, wood-board/slat route and Mass reference consistently identify a physical wooden pallet. No EURO size, item mass, reuse life or treatment is inferred. Retain fasteners and treatment in the actual whole article once. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pallet`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene stretch wrapping film (`film`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Existing card is P only: actual paid procurement, standalone or bundled, of a matching new or used article, excluding supplier-included I and return receipt ER. Measure the complete wet article once, with its one upstream burden owner kept separately. Record actual polyethylene stretch wrapping film as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One finished polyethylene stretch wrapping film; native broad Plastic Film permits this manufactured article without a fixed polymer, but actual PE grade/layers/additives and provider must be confirmed. It is not PE granulate, TPT, a laminated board, or a whole packaging bundle. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_film`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene terephthalate packaging strap (`strap`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Existing card is P only: actual paid procurement, standalone or bundled, of a matching new or used article, excluding supplier-included I and return receipt ER. Measure the complete wet article once, with its one upstream burden owner kept separately. Actual single whole polyethylene terephthalate packaging strap, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Polyethylene terephthalate packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_strap`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Paperboard edge protector (`edge`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Existing card is P only: actual paid procurement, standalone or bundled, of a matching new or used article, excluding supplier-included I and return receipt ER. Measure the complete wet article once, with its one upstream burden owner kept separately. Actual single whole paperboard edge protector, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Paperboard edge protector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edge`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Returned uncoated autoclaved cellulose fibre cement flat board (`returnboard`)

Only an actually returned whole board with original delivery and manufacturing-cohort identity; original mass/composition and burden remain linked while actual return moisture/mass and any missing portion are measured independently. No new Q arises. Manufacturer/specification permission, postwork tests, acceptance and disposition govern any work; broken boards are not presumed restored. The native Product family is a manufactured whole mineral-binder/vegetable-fibre article at plant. Restrict it here to a bare flat board with refined cellulose pulp in a hydrated Portland-cement/silica matrix after Hatschek forming and autoclave curing; no asbestos, wood chips/wool, gypsum matrix, other reinforcing fibre, coating or installed system. Native CPC37520 is a broader classification label and does not establish a CPC37570 mapping or authorize wood-wool methodology reuse. No native recipe, performance, density, geography or lifetime is inferred. The specific terminal is supported by bba-superflex-2019 and uac-fibre-cement-2024; it is neither slurry nor an uncured pressed intermediate. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This Product return is only an actual intact board still compatible with the whole-product state; damaged/rejected waste uses returned_board_waste with actual state and disposition, never forced into this Product.

- Selected flow: Boards, blocks and similar articles of vegetable fibre, straw or wood waste agglomerated with mineral binders `483a8bb8-bab7-476a-bdae-aae74e8d2aab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_returnboard`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole wooden transport pallet I (`pallet_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Actual packaging first received externally without purchase, attached or standalone; preserve physical ingress even if supplier burden includes it. Record actual wooden transport pallet as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One whole wooden-board/slat pallet supplied at plant/lumber-mill interface. Native electrical-energy taxonomy is an isolated classification defect; the bilingual name, wood-board/slat route and Mass reference consistently identify a physical wooden pallet. No EURO size, item mass, reuse life or treatment is inferred. Retain fasteners and treatment in the actual whole article once. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole wooden transport pallet ER (`pallet_er`)

Actual intact external return received into this article ownership pool; not new purchase or internal reuse. Record actual wooden transport pallet as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One whole wooden-board/slat pallet supplied at plant/lumber-mill interface. Native electrical-energy taxonomy is an isolated classification defect; the bilingual name, wood-board/slat route and Mass reference consistently identify a physical wooden pallet. No EURO size, item mass, reuse life or treatment is inferred. Retain fasteners and treatment in the actual whole article once. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene stretch wrapping film I (`film_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Actual packaging first received externally without purchase, attached or standalone; preserve physical ingress even if supplier burden includes it. Record actual polyethylene stretch wrapping film as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One finished polyethylene stretch wrapping film; native broad Plastic Film permits this manufactured article without a fixed polymer, but actual PE grade/layers/additives and provider must be confirmed. It is not PE granulate, TPT, a laminated board, or a whole packaging bundle. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene stretch wrapping film ER (`film_er`)

Actual intact external return received into this article ownership pool; not new purchase or internal reuse. Record actual polyethylene stretch wrapping film as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One finished polyethylene stretch wrapping film; native broad Plastic Film permits this manufactured article without a fixed polymer, but actual PE grade/layers/additives and provider must be confirmed. It is not PE granulate, TPT, a laminated board, or a whole packaging bundle. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene terephthalate packaging strap I (`strap_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Actual packaging first received externally without purchase, attached or standalone; preserve physical ingress even if supplier burden includes it. Actual single whole polyethylene terephthalate packaging strap, including first non-purchased external ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polyethylene terephthalate packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene terephthalate packaging strap ER (`strap_er`)

Actual intact external return received into this article ownership pool; not new purchase or internal reuse. Actual single whole polyethylene terephthalate packaging strap, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polyethylene terephthalate packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Paperboard edge protector I (`edge_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Actual packaging first received externally without purchase, attached or standalone; preserve physical ingress even if supplier burden includes it. Actual single whole paperboard edge protector, including first non-purchased external ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paperboard edge protector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Paperboard edge protector ER (`edge_er`)

Actual intact external return received into this article ownership pool; not new purchase or internal reuse. Actual single whole paperboard edge protector, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paperboard edge protector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Actual separate sawn pallet repair board (`repair_wood`)

One actual separately supplied sawn wood board, with measured species, treatment/coatings, dimensions, wet/dry mass and provider state. It is not a whole pallet, fibreboard or sawdust; real separately purchased fasteners/glue/coatings need their own actual atomic rows. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: Actual separate sawn pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Actual treated tap-water supply for observed service (`service_water`)

Only actual matching treated municipal potable-quality liquid supply, one provider boundary, Mass/kg; no fixed geography or treatment process. Native secondary Volume is not observed density. Water inside a whole wet article, atmospheric uptake and internal recirculation are not another purchase. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

##### Waste flows

###### Actual damaged cured cellulose-cement board waste received (`returned_board_waste`)

Only actual broken/rejected cured-board waste received from the original delivery, with measured whole composition/water and damage, original dispatch mass and cohort/burden links. It is not a qualifying intact Product return or new purchased board. Preserve actual changed mass and historical vectors; no manufacture reversal, automatic credit or presumed restoration. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: Actual damaged cured cellulose-cement board waste received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

##### Elementary flows

###### Actual atmospheric water-vapour uptake during service (`service_humidity`)

Only independently observed ordinary atmospheric H2O-vapour ingress into boards/packaging during storage/handling or actual work. Not purchased liquid, rainfall, emitted vapour or water-equivalent indicator. Resource identity must match actual phase and native extensive unit before binding; no humidity fraction/density/uptake assumed. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: Actual atmospheric water-vapour uptake during service
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Uncoated autoclaved cellulose fibre cement flat board (`shipboard`)

Gross physical whole-board shipment, traced to original first-release cohort and observed service horizon, is a bridge movement rather than another production reference. Keep real outgoing board mass/moisture and full packaging; use no allocation share to shrink physical movement. The native Product family is a manufactured whole mineral-binder/vegetable-fibre article at plant. Restrict it here to a bare flat board with refined cellulose pulp in a hydrated Portland-cement/silica matrix after Hatschek forming and autoclave curing; no asbestos, wood chips/wool, gypsum matrix, other reinforcing fibre, coating or installed system. Native CPC37520 is a broader classification label and does not establish a CPC37570 mapping or authorize wood-wool methodology reuse. No native recipe, performance, density, geography or lifetime is inferred. The specific terminal is supported by bba-superflex-2019 and uac-fibre-cement-2024; it is neither slurry nor an uncured pressed intermediate. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Boards, blocks and similar articles of vegetable fibre, straw or wood waste agglomerated with mineral binders `483a8bb8-bab7-476a-bdae-aae74e8d2aab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shipboard`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole wooden transport pallet S (`pallet_s`)

Actual packaging leaving on gross physical shipments only, independent of board production Q. Record actual wooden transport pallet as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One whole wooden-board/slat pallet supplied at plant/lumber-mill interface. Native electrical-energy taxonomy is an isolated classification defect; the bilingual name, wood-board/slat route and Mass reference consistently identify a physical wooden pallet. No EURO size, item mass, reuse life or treatment is inferred. Retain fasteners and treatment in the actual whole article once. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Whole wooden transport pallet EO (`pallet_eo`)

Actual intact article returned externally to its supplier/pool only; not shipment S, internal reuse or credit. Record actual wooden transport pallet as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One whole wooden-board/slat pallet supplied at plant/lumber-mill interface. Native electrical-energy taxonomy is an isolated classification defect; the bilingual name, wood-board/slat route and Mass reference consistently identify a physical wooden pallet. No EURO size, item mass, reuse life or treatment is inferred. Retain fasteners and treatment in the actual whole article once. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene stretch wrapping film S (`film_s`)

Actual packaging leaving on gross physical shipments only, independent of board production Q. Record actual polyethylene stretch wrapping film as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One finished polyethylene stretch wrapping film; native broad Plastic Film permits this manufactured article without a fixed polymer, but actual PE grade/layers/additives and provider must be confirmed. It is not PE granulate, TPT, a laminated board, or a whole packaging bundle. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene stretch wrapping film EO (`film_eo`)

Actual intact article returned externally to its supplier/pool only; not shipment S, internal reuse or credit. Record actual polyethylene stretch wrapping film as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One finished polyethylene stretch wrapping film; native broad Plastic Film permits this manufactured article without a fixed polymer, but actual PE grade/layers/additives and provider must be confirmed. It is not PE granulate, TPT, a laminated board, or a whole packaging bundle. Reference unit group: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene terephthalate packaging strap S (`strap_s`)

Actual packaging leaving on gross physical shipments only, independent of board production Q. Actual single whole polyethylene terephthalate packaging strap, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polyethylene terephthalate packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Polyethylene terephthalate packaging strap EO (`strap_eo`)

Actual intact article returned externally to its supplier/pool only; not shipment S, internal reuse or credit. Actual single whole polyethylene terephthalate packaging strap, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Polyethylene terephthalate packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Paperboard edge protector S (`edge_s`)

Actual packaging leaving on gross physical shipments only, independent of board production Q. Actual single whole paperboard edge protector, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paperboard edge protector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Paperboard edge protector EO (`edge_eo`)

Actual intact article returned externally to its supplier/pool only; not shipment S, internal reuse or credit. Actual single whole paperboard edge protector, including supplier-included ingress where present. Apply b_packaging separately to this article; distinguish P/I upstream ownership and each gross physical leg. Supplier preparation, actual coating/liner and any included water are recorded once, not inferred. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Independently reconcile P/I/ER/S/EO/W and disjoint empty/WIP-attached/FG-attached/reusable stocks. No leg event or zero is presumed; damaged waste needs its actual Waste identity.

- Selected flow: Paperboard edge protector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_physical`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

##### Waste flows

###### Waste wooden transport pallet (`wastepallet`)

Actual waste wooden transport pallet at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This is a separate Waste exchange only for an actual separately transferred material stream. If the site has one co-collected packaging outflow, this article W is its measured origin/component subaccount under mixed_pack_waste, not another additive whole-stream waste or treatment.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastepallet`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Waste polyethylene stretch film (`wastefilm`)

Actual waste polyethylene stretch film at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This is a separate Waste exchange only for an actual separately transferred material stream. If the site has one co-collected packaging outflow, this article W is its measured origin/component subaccount under mixed_pack_waste, not another additive whole-stream waste or treatment.

- Selected flow: Waste polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastefilm`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Waste polyethylene terephthalate packaging strap (`wastestrap`)

Actual waste polyethylene terephthalate packaging strap at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This is a separate Waste exchange only for an actual separately transferred material stream. If the site has one co-collected packaging outflow, this article W is its measured origin/component subaccount under mixed_pack_waste, not another additive whole-stream waste or treatment.

- Selected flow: Waste polyethylene terephthalate packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastestrap`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Waste paperboard edge protector (`wasteedge`)

Actual waste paperboard edge protector at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. This is a separate Waste exchange only for an actual separately transferred material stream. If the site has one co-collected packaging outflow, this article W is its measured origin/component subaccount under mixed_pack_waste, not another additive whole-stream waste or treatment.

- Selected flow: Waste paperboard edge protector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wasteedge`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Actual separately removed pallet repair wood (`removed_wood`)

Native Wood waste Waste/Mass explicitly covers wood-product and packaging residues. Match actual separately removed wood-board treatment, coatings, contamination, hazards and receiver. Agglomerated-waste classification is disclosed taxonomy debt, not a default briquette or treatment. Not mixed municipal waste, bark, wood ash, sawdust or a new Product. If already in whole-pallet W, keep this as that event component subaccount, no second waste/treatment. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Actual separately collected aqueous service wastewater (`service_wastewater`)

One actual separately collected liquid wastewater stream with independently measured liquid mass, solids/species, coating/preservative or cement contamination and destination. Not fixed-concentration alkaline liquor, clean water to river or generic treatment service. Components in this one measured mixture are non-additive subaccounts; one real treatment owner. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: Actual separately collected aqueous service wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Actual single co-collected mixed packaging waste stream (`mixed_pack_waste`)

Conditional only when the site actually transfers one co-collected mixture of the identified wood, paperboard/paper, PE/PET/PP or steel packaging residues. Independently identify measured composition, contamination and wet mass at its real removal gate. Record that whole mixture as one Waste exchange and its actual treatment once. Each article W and moisture/origin split is a non-additive measured subledger summing to this whole event; do not invent seven separated outlets or add component Waste amounts to the same mixed total. Actual separately transferred wastes use their own specific W cards instead. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed. This row is only gross custody at the explicitly declared shared removal boundary: manufacturing-origin burdens remain with original manufacturing Q and actual service increments with original Qc/H. Trace actual cross-process custody and cancel internal transfers once; shared collection does not transfer manufacturing or treatment burdens into a new service function.

- Selected flow: Actual single co-collected mixed packaging waste stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

###### Actual cured cellulose-cement board service waste stream (`service_board_waste`)

One actual separately transferred cured-board waste stream from returned damage, actual trimming/retesting or disposition. Measure whole board material/water/contamination and destination. Retain original cohort manufacture and actual performed service; incoming damaged waste and new generated waste join this outflow only when physically co-collected, with origin subaccounts and one treatment owner. No assumed board repair/restoration or new Q. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: Actual cured cellulose-cement board service waste stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

##### Elementary flows

###### Actual service water vapour to current air (`service_vapour`)

Only actual ordinary H2O vapour CAS7732-18-5 to current unspecified air, Mass/kg, from observed board/packaging storage/handling or actual work. Independently speciate and match phase/compartment; not droplets, ice, heavy/tritiated water or ether aliases. A known different subcompartment needs its correct identity; no evaporation yield/density assumed. Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_changes`
- Sources: `bba-superflex-2019`; `ilcd-allocation-2010`

### Process: Actual electricity mobile handling and asset service (`utilities`)

#### Inputs

##### Product flows

###### Electricity grid mix China (`electricity`)

Record actual electricity grid mix china as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. CN customer-side grid-average alternating-current supply at 1–35 kV only, with actual reporting year, regional supplier mix and transmission/transformer losses disclosed by its supplying process. Native reference property is Net calorific value/MJ. Other voltage, geography, self-generation or heat is a separate identity and provider; no German grid or production-at-generator substitution. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Diesel fuel for mobile plant handling (`diesel`)

Record actual diesel fuel for mobile plant handling as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Whole supplied refined/distillate diesel preparation for actual mobile handling, including real blend and sulfur specification. Native broad identity allows petroleum/biomass origin; separately establish actual fossil/biogenic carbon before emissions attribution. Its secondary energy-property coefficient is not a density or a verified heating value; independently measure density and net/gross heating value for the actual fuel. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_diesel`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Petroleum lubricating oil (`lubricant`)

Record actual petroleum lubricating oil as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Petroleum lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lubricant`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Mineral hydraulic oil (`hydraulic`)

Record actual mineral hydraulic oil as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. One complete mineral-base hydraulic fluid with all supplied performance additives. Native allows mineral or synthetic base but this card is limited to verified mineral-base supply. Reference is Volume/m3, not Mass/kg; retain actual temperature, water/contamination and independently measured fluid density for the physical mass balance. Do not import a base-oil constituent again. Reference unit group: Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`; reference unit m3. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydraulic`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Steel bearing replacement assembly (`repair`)

Actual whole steel bearing replacement assembly with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Steel bearing replacement assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_repair`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Fibre cement Hatschek production-line machinery (`plant`)

Actual whole fibre cement hatschek production-line machinery with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Fibre cement Hatschek production-line machinery
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plant`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Steel fibre-cement curing autoclave (`autoclave`)

Actual whole steel fibre-cement curing autoclave with measured configuration/materials and installed condition; measure physical stock and new/removed repairs independently from current service consumption. Include actual fabrication and attached fluid/water once; no arbitrary life, density or item mass. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Steel fibre-cement curing autoclave
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_autoclave`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Cooling makeup water (`coolwater`)

Record actual cooling makeup water as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Cooling makeup water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coolwater`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

###### Oxygen in air (`oxygenin`)

Actual molecular/physical oxygen in air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Only actual ordinary gaseous oxygen O2, CAS7782-44-7, Elementary Resource from air, Mass/kg. It is a gross atmospheric intake paired independently with actual exhaust, not manufactured gas, liquid, isotope/ion or a fixed dry-air fraction. Native alias noise cannot redefine canonical species/type/media; actual gross species and state must be measured. No total-air or reaction-water residual substitutes for this quantity.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oxygenin`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Nitrogen in air (`nitrogenin`)

Actual molecular/physical nitrogen in air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Only actual ordinary gaseous dinitrogen N2, CAS7727-37-9, Elementary Resource from air, Mass/kg. It is a gross atmospheric intake paired independently with actual exhaust, not manufactured gas, liquid, isotope/ion or a fixed dry-air fraction. Native alias noise cannot redefine canonical species/type/media; actual gross species and state must be measured. No total-air or reaction-water residual substitutes for this quantity.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitrogenin`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Argon in air (`argonin`)

Actual molecular/physical argon in air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Only actual ordinary gaseous argon Ar, CAS7440-37-1, Elementary Resource from air, Mass/kg. It is a gross atmospheric intake paired independently with actual exhaust, not manufactured gas, liquid, isotope/ion or a fixed dry-air fraction. Native alias noise cannot redefine canonical species/type/media; actual gross species and state must be measured. No total-air or reaction-water residual substitutes for this quantity.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_argonin`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Carbon dioxide in ambient air (`co2in`)

Actual molecular/physical carbon dioxide in ambient air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Carbon dioxide in ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co2in`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Water vapour in ambient air (`vapourin`)

Actual molecular/physical water vapour in ambient air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Water vapour in ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vapourin`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Warm cooling water returned to supplier (`returncool`)

Record actual warm cooling water returned to supplier as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Warm cooling water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_returncool`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

##### Waste flows

###### Spent petroleum lubricating oil (`usedlube`)

Actual spent petroleum lubricating oil at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Spent petroleum lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedlube`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Spent mineral hydraulic oil (`usedhydraulic`)

Actual spent mineral hydraulic oil at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedhydraulic`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Removed steel bearing assembly (`usedrepair`)

Actual removed steel bearing assembly at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Removed steel bearing assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_usedrepair`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Retired fibre-cement Hatschek machinery (`retiredplant`)

Actual retired fibre-cement hatschek machinery at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Retired fibre-cement Hatschek machinery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_retiredplant`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Retired steel fibre-cement autoclave (`retiredautoclave`)

Actual retired steel fibre-cement autoclave at its recorded wet/contaminated state and receiver, separated from each other waste. Record full gross removal, moisture/material composition, origin and treatment, without an automatic burden subtraction for external sale or handover. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Retired steel fibre-cement autoclave
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_retiredautoclave`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

##### Elementary flows

###### Carbon dioxide fossil to air (`co2fossil`)

Record actual carbon dioxide fossil to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular carbon dioxide (fossil) (CAS 124-38-9) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Fossil origin requires actual carbon evidence; incoming ambient gas is a separate physical leg. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co2fossil`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Carbon monoxide to air (`co`)

Record actual carbon monoxide to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular carbon monoxide (fossil) (CAS 630-08-0) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Fossil origin requires actual carbon evidence; incoming ambient gas is a separate physical leg. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Nitrogen monoxide to air (`no`)

Record actual nitrogen monoxide to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular nitrogen monoxide (CAS 10102-43-9) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. HNO/nitroxyl synonyms do not authorize nitroxyl mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_no`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Nitrogen dioxide to air (`no2`)

Record actual nitrogen dioxide to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular nitrogen dioxide (CAS 10102-44-0) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Native N2O4 synonyms are not NO2 mass; actual gas-state/dimer speciation must be established independently. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_no2`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Sulfur dioxide to air (`so2`)

Record actual sulfur dioxide to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular sulfur dioxide (CAS 7446-09-5) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_so2`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Oxygen to air (`oxygenout`)

Record actual oxygen to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular oxygen (CAS 7782-44-7) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oxygenout`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Nitrogen to air (`nitrogenout`)

Record actual nitrogen to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular dinitrogen (CAS 7727-37-9) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitrogenout`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Argon to air (`argonout`)

Record actual argon to air as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. Only actual molecular argon (CAS 7440-37-1) crossing to unspecified outdoor air; no long-term, indoor, soil or water compartment. Retain gross species and phase independently from total exhaust/air and pollutant indicators. Native synonym lists contain loose or alternative names; they do not authorize another CAS/species, isotope, aqueous solution, NOx-equivalent or PM-size substitution. Stable natural argon only; no argon-41 radioactive identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_argonout`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Methane fossil to air (`methane`)

Actual molecular/physical methane fossil to air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Only actual ordinary gaseous CH4, CAS74-82-8, emitted to current unspecified air, Mass/kg; qualify real source origin and receiving compartment before use. Canonical CAS/name/Elementary medium governs noisy isotope, radical, liquid or unrelated carbon/chemical aliases, which are not adopted. Fossil CH4 is not soot, graphite, carbon black, biogas mixture or a CO2 equivalent. Measure this molecular species independently without a fuel factor or assumed conversion.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_methane`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Dinitrogen monoxide to air (`n2o`)

Actual molecular/physical dinitrogen monoxide to air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations. Only actual ordinary gaseous N2O, CAS10024-97-2, emitted to current unspecified air, Mass/kg; qualify real source origin and receiving compartment before use. Canonical CAS/name/Elementary medium governs noisy isotope, radical, liquid or unrelated carbon/chemical aliases, which are not adopted. N2O is neither NO, NO2 nor N2O4, a NOx equivalent, a compressed Product or a long-term correction flow. Measure this molecular species independently without a fuel factor or assumed conversion.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_n2o`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

###### Fossil diesel soot to air (`soot`)

Actual molecular/physical fossil diesel soot to air with independently established origin, phase, composition, sampling and receiving/resource medium. Atmospheric inlet species are separate gross legs from exhaust and carbon uptake; no air aggregate is added again. Indicator equivalents, total gas or a wrong resource/emission medium cannot establish this identity. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Fossil diesel soot to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soot`
- Sources: `uac-fibre-cement-2024`; `ilcd-allocation-2010`

### Process: Whitewater recovery cleanup and off-site residue handover (`waterloop`)

#### Inputs

##### Product flows

###### Water for plant cleanup (`rinse`)

Record actual water for plant cleanup as one physically specific whole exchange; retain supply/form/phase, original meter or weighing and complete composition without counting embedded constituents twice. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Water for plant cleanup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rinse`
- Sources: `uac-fibre-cement-2024`; `iibcc-cutting-2010`

###### Cellulose cement Hatschek whitewater (`whitewaterin`)

Internal transfer of the actual cellulose cement hatschek whitewater with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Cellulose cement Hatschek whitewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_whitewaterin`
- Sources: `uac-fibre-cement-2024`; `iibcc-cutting-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered cellulose cement process water (`recyclewaterout`)

Internal transfer of the actual recovered cellulose cement process water with matched sending/receiving batch, full wet mass, solids/free/structural water, actual processing state and inherited per-exchange vector. Never use the finished-board UUID for this intermediate. Both legs are retained by stage and cancel at the combined boundary; no new purchase or Q. Recovery is limited to documented compatible uncured scrap/water, never assumed regeneration of broken cured board. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Recovered cellulose cement process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recyclewaterout`
- Sources: `uac-fibre-cement-2024`; `iibcc-cutting-2010`

##### Waste flows

###### Dewatered cellulose cement silica process-water sludge (`sludge`)

Actual dewatered cellulose/cement/silica whitewater sludge exported for treatment, weighed wet with independently measured solids and composition. It is not recovered clean water or a wastewater indicator. Retain its origin and ordinary manufacturing/treatment burdens even if sold. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Dewatered cellulose cement silica process-water sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sludge`
- Sources: `uac-fibre-cement-2024`; `iibcc-cutting-2010`

###### Cellulose cement process-water purge (`purge`)

Actual cement/cellulose process-water purge to an identified off-site treatment receiver; measure wet mass, composition and each dissolved/suspended subledger without inventing a molecule from COD. A new actual direct-discharge route needs its own species/media evidence and separate atomic emission rows. UUID unresolved for this specific exchange; retain its atomic identity and obtain a compatible provider/native reference before binding. Record an evidenced absence as not_applicable only when this exact exchange is absent; unknown quantities are not zero. All quantities and source conditions are future foreground collection requirements rather than invented factory observations.

- Selected flow: Cellulose cement process-water purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_purge`
- Sources: `uac-fibre-cement-2024`; `iibcc-cutting-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | each multifunctional process | This is attributional accounting. Assign exclusive supplies/operations to their actual cohort/function first; use separate meters or defensible virtual subdivision before allocation. Retain zero/failed campaigns and their actual causal owner; lack of saleable output never deletes them. Industrial manufacturing descriptions do not justify an LCA allocation key. | ilcd-allocation-2010 |
| a_causality | remaining shared exchanges | For every remaining exchange independently establish its determining physical cause with real records. Autoclave heat needs actual load composition/temperature/moisture/enthalpy and losses; installed equipment/pressing need actual occupied service and intensity; transport needs limiting mass/volume plus duration/distance; parallel storage needs actual occupied area/volume and time. A convenient overall tonne share or installed rating is not proof. Record alternatives, causal test, uncertainty and sensitivity; do not arbitrarily choose physical versus economic allocation. | ilcd-allocation-2010 |
| a_residual | genuine common-process residue only | Only a genuine residual shared flow that cannot be subdivided or assigned by determining physical causality may use contemporaneous market value at the actual common-process gate, quantity and physical/quality condition. Derive gate values transparently by removing later product-specific conditioning/transport/packing from downstream prices; document actual sales/costs and sensitivity. No fixed fraction, catalogue retail price or automatic market-value key applies to every exchange. | ilcd-allocation-2010 |
| a_waste | waste reject sample and outward sales | Ordinary manufacturing rejects, broken boards, samples, captured dust, sludge and their treatment retain the cohort manufacturing/treatment burdens despite off-site handover or sale. T_out is allowed once only for a real distinct cohort/function with a defensible allocation/handover decision and equal receiver inheritance vector; it is not a waste mass deduction or automatic avoided-product credit. All gross physical legs remain full. Internal wet scrap recovery is neither a new purchase nor an extra first-released output. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols collect undivided raw observations. In the aggregation_rule column per reference flow is the final display basis of the single section 8 calculation, not an instruction to divide raw collection. Actual aggregation/attribution first retains raw quantities and inheritance, and calc_normalize alone performs A_e/Qc once.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cement | prepare | cement | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_pulp | prepare | pulp | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. Trace actual kraft wood-pulp supply/bleaching/additives/moisture and dispersion/refining; do not add embedded wood or upstream black liquor as foreground purchases. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_sand | prepare | sand | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. Record actual delivered crystalline-quartz sand grade, supplier preparation and moisture, then actual site milling/return-water boundary separately. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_alumina | prepare | alumina | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_silicafume | prepare | silicafume | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_redoxide | prepare | redoxide | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_pam | prepare | pam | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_water | prepare | water | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_pulpwire | prepare | pulpwire | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_sack | prepare | sack | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_ppbag | prepare | ppbag | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_slurryout | prepare | slurryout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wastewire | prepare | wastewire | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wastesack | prepare | wastesack | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wastepp | prepare | wastepp | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_slurryin | form | slurryin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_jetwater | form | jetwater | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_felt | form | felt | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_screen | form | screen | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_roller | form | roller | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | item | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_plate | form | plate | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_nozzle | form | nozzle | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | item | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_greenout | form | greenout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedfelt | form | usedfelt | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedscreen | form | usedscreen | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedplate | form | usedplate | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedroller | form | usedroller | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usednozzle | form | usednozzle | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_greenin | cure | greenin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_steam | cure | steam | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. Meter actual autoclave heat and the same supply carrier kg/state/enthalpy independently, linked to steam_carrier and actual condensate return; one provider owner, no invented boiler or conversion factor. | MJ; kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_condensate | cure | condensate | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. Measure full actual return mass/quality/state/enthalpy at the external supplier gate; no allocation shrinkage, stock correction or return-created credit. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_curedout | cure | curedout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_curedin | finish | curedin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_blade | finish | blade | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_finished_board | finish | finished_board | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedblade | finish | usedblade | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_hardoffcut | finish | hardoffcut | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_reject | finish | reject | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_sample | finish | sample | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_dust | finish | dust | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_pallet | service | pallet | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_film | service | film | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_strap | service | strap | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_edge | service | edge | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wastepallet | service | wastepallet | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wastefilm | service | wastefilm | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wastestrap | service | wastestrap | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wasteedge | service | wasteedge | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_shipboard | service | shipboard | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_returnboard | service | returnboard | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_electricity | utilities | electricity | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | MJ | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_diesel | utilities | diesel | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | MJ | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_lubricant | utilities | lubricant | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_hydraulic | utilities | hydraulic | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | m3 | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_repair | utilities | repair | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_plant | utilities | plant | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | item | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_autoclave | utilities | autoclave | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | item | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_coolwater | utilities | coolwater | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_returncool | utilities | returncool | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedlube | utilities | usedlube | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedhydraulic | utilities | usedhydraulic | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedrepair | utilities | usedrepair | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_retiredplant | utilities | retiredplant | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_retiredautoclave | utilities | retiredautoclave | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_sludge | waterloop | sludge | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_purge | waterloop | purge | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_rinse | waterloop | rinse | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_co2fossil | utilities | co2fossil | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_co | utilities | co | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_no | utilities | no | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_no2 | utilities | no2 | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_so2 | utilities | so2 | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_oxygenin | utilities | oxygenin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_nitrogenin | utilities | nitrogenin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_argonin | utilities | argonin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_co2in | utilities | co2in | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_vapourin | utilities | vapourin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_oxygenout | utilities | oxygenout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_nitrogenout | utilities | nitrogenout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_argonout | utilities | argonout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_vapourout | cure | vapourout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_quartzair | finish | quartzair | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_celluloseair | finish | celluloseair | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_cementair | prepare | cementair | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_aluminiumoxide | prepare | aluminiumoxide | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_millmedia | prepare | millmedia | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_usedmillmedia | prepare | usedmillmedia | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_methane | utilities | methane | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_n2o | utilities | n2o | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_soot | utilities | soot | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_dryheat | finish | dryheat | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | MJ | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wettrimout | form | wettrimout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_wettrimin | prepare | wettrimin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_greenreject | form | greenreject | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_whitewaterout | form | whitewaterout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_whitewaterin | waterloop | whitewaterin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_recyclewaterout | waterloop | recyclewaterout | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_recyclewaterin | prepare | recyclewaterin | foreground_record | cohort and original reading; unit and total-or-rate flag; time interval; supply form moisture and phase; opening/closing stocks and all gross legs; independent density geometry or enthalpy evidence; per-exchange inheritance vector; attribution and allocation evidence; original Qc and H | Measure this actual exchange with calibrated weighing/meters, original supply records and traceable sampling. Distinguish total/rate and net/gross; collect undivided raw values. Independently measure actual-fluid density for native m3; steam carrier kg and thermal state for heat; first-release net weighing for boards. Embedded constituents stay in subledgers. | kg | Every supply/operation/cohort or continuous metering | Full reporting period including failure/zero-output/start-stop/idle/cleanup/rework and actual service H | Named site stage external interface and original manufacturing cohort | per reference flow | Calibration/raw logs; supplier/receiver records; sampling/lab results; actual compatibility and uncertainty |
| cp_gate | finish | first release and actual geometry | foreground_record | cohort/serial; net mass and moisture; actual one-face outline/dimensions; configuration range; release tests/permission; opening/closing FG; returns and original deliveries | Match calibrated net weighing to actual first-release records; independently measure same-configuration geometry and mass without nominal density. | kg | Each item or traceable cohort sample | Whole cohort and service H | Release gate and subsequent FG stocks | Preserve undivided raw release mass and event IDs; calc_raw assembles Q; only calc_normalize normalizes. | Calibration sampling specification complete release/nonconformity disposition |
| cp_vectors | utilities | physical stocks inheritance and services | foreground_record | per-material/water-phase gross legs; packaging P/I/ER/S/EO/W; installed/unused repair and fluid stocks; each flow historical vector; service intensity/H; once-only genuine handover decision | Independently reconcile manufacture, FG/service and combined gates; retain full wet closing stocks and real new influx simultaneously; burden attribution never scales physical legs. Record row_id, actual process/direction/cohort, every physical raw/WIP/non-WIP/asset/fluid quantity and each inherited exchange vector. Do not repeat already-net stock corrections. Work permission controls authorization/acceptance, not capture of real unapproved/failed burdens. | native extensive unit | Each event and opening/closing | Full reporting period and service H | Each real external interface and internal pair | Preserve undivided gross physical legs and inherited vectors; no normalization in collection. | Physical counts paired transfers supplier water/energy convention and causal allocation records |
| cp_pack_physical | service | seven actual package physical directions | foreground_record | row_id; actual process_id prepare or service; article/material/design/ownership; P/I/ER/S/EO/W; disjoint open/close empty/attached-WIP/attached-FG/reusable; wet/dry mass and moisture; supplier-included burden owner; original Qc/H; measured component W and actual whole mixed removal/treatment ID ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Identify each actual atomic direction and gate in the named row; independently count/weigh full wet articles. Manufacturing uses Q, actual postrelease original Qc/H. No event or zero is presumed. Whole P/I embeds water once. Actual mixed Waste has one removal/treatment; component W is a measured conserving non-additive origin ledger.  Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each actual event and stock boundary | complete manufacture and observed H for original Qc | actual named manufacture/service/external gates | per reference flow | measured tickets calibration phase assays and disposition records |
| cp_service_changes | service | actual board and packaging material water and waste changes | foreground_record | row_id; actual phase/species; board or package stock owner; original delivery/Qc/H; actual added/removed wet/dry material; atmospheric uptake/evaporation; liquid supplier/treatment; actual permission/posttests/acceptance/disposition; disjoint repair-WIP; actual single mixed waste identity and destination | Independently sample and weigh each actual material/water stream and receiving phase; ordinary storage/handling moisture is recorded without fictitious work. Record actual unapproved/failed work loads and hold/waste disposition. One residual cannot determine dry material and water.  Actual movements and caused loads are recorded even for unapproved, failed or rejected work. Permission, continued configuration, required postwork tests and acceptance govern authorization and qualifying stock only, never whether actual facts are collected. Keep actual hold/disjoint repair-WIP/waste custody once under original Qc/H; natural storage moisture exchange needs no fabricated work permission. Deduplicate material/water only against the same measured corresponding same-side flow term, never stock, opposite flow or an existing card. Retained influx and full closing wet stock both remain; one whole wet P/I receipt counts embedded water once. No event, restoration, fixed quantity, density or credit is presumed. | kg | each actual event and stock boundary | complete manufacture and observed H for original Qc | actual named manufacture/service/external gates | per reference flow | measured tickets calibration phase assays and disposition records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert original quantities to each actual extensive unit; use cumulative volume once and integrate only real rates. Establish one purchase owner from actual supply/composition; do not re-correct stock-corrected material consumption. Use exclusive subdivision and actual exchange-specific causal attribution to form undivided I_e or S_e; Q is the sum of unique first-release net board masses from cp_gate. | raw readings; cp_gate; cp_vectors | I_e; S_e; Q | ilcd-allocation-2010 |
| calc_burden | all inventory rows | A_e = B_open_e + I_e + S_e + T_in_e - B_close_e - T_out_e. Preserve each e native unit; B contains full historical vectors only for raw materials, unreleased WIP and truly unassigned stores; B_close excludes first-released FG. S includes performed original-cohort service and is not deducted for retained FG; only unused/unassigned service/charge carries forward. Capital/repairs/fluids enter S by actual consumed service, not again as full capital purchases in I. Do not double-deduct stock-corrected consumption. T_out requires a_waste genuine other-cohort/function handover with equal receiver vector, not ordinary waste sale. | B_open_e; I_e; S_e; T_in_e; B_close_e; T_out_e; cp_vectors | A_e | ilcd-allocation-2010 |
| calc_physical | all inventory rows | For each gate full opening wet physical stocks plus actual gross external inputs equal full closing wet physical stocks plus actual gross external outputs, under b_physical/b_packaging. Manufacture outputs Q once; the FG bridge uses that same Q and actual G/R plus real water/material increments; combine by cancelling internal Q and paired internal recoveries. Packaging six legs and repair/water X deduplicate only other already counted terms, never real new influx retained in closing wet stock. Independently balance relevant elements and each species, without fitting several unknowns from one residual. | physical opening stocks; physical incoming legs; physical closing stocks; physical outgoing legs; cp_vectors | physical gate and element reconciliations; V_e | uac-fibre-cement-2024; ilcd-allocation-2010 |
| calc_normalize | all inventory rows | q_e = A_e / Qc, once only when Qc>0; manufacturing Qc is cohort first-release Q, while post-release service uses that same original-cohort Q with actual H disclosed. Q0 retains A_e and physical inheritance without a unit result. Cards and aggregation only reference this result without further division. Reference output is 1 kg whole board. For physical disclosures of packaging P/I/ER/S/EO/W, FG custody movements including damaged-board Waste ingress and board-waste outlegs, actual repair-material/water X legs, paired internal material/water/WIP/recovery transfers and actual thermal-carrier ingress/egress or Product returns, replace the numerator by actual full gross V_e in its own native extensive unit and use this same sole q_e=V_e/Qc once. Do not add historical burden, stock-correct the measured leg, economically scale it, create another provider purchase or credit. Actual manufacturing and supply/cleaning/repair/treatment service burdens remain uniquely assigned in A_e separately, never erased by this override. Manufacturing Qc=Q; postrelease uses original Qc/observed H; internal pairs cancel once on consolidation. Asset-card current service equivalents and full physical acquisitions/installed-stock ledgers remain independent, without replacing service by new-purchase mass or buying twice. | A_e; Qc; cp_gate; cp_vectors; V_e | q_e | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every row | Confirm complete native physical identity/restrictions per row; unresolved auxiliaries retain concrete names without collection labels or wrong-family binding. | Original supply records; actual query member; complete direct read and property/unit chain |
| dq_route | whole manufacture | Confirm cellulose rather than wood particles/wool or other reinforcement, and actual Hatschek/press/autoclave terminal; do not present multi-factory sources as one recipe. | Complete primary originals; process and terminal test records |
| dq_measure | all quantities | Collect calibrated original units, moisture/phase, total/rate, real geometry and independent density/enthalpy with uncertainty. | Calibration logs and relevant substance/configuration sampling/lab |
| dq_cohort | Q stocks and services | Complete first-release identities and all-flow historical vectors including failed/zero output, retained FG and performed services; no double stock deduction. | Cohort ledger physical counts release/return original-delivery bridge |
| dq_allocation | shared burdens | Independent per-exchange causal evidence and genuine residual common-gate values; waste sale never automatic T_out. | Subdivision metering causal alternatives actual market-state and sensitivity |
| dq_complete | all material water packaging asset gas and waste legs | Complete each gross physical leg, wet stock, supplier-included packaging and species; add actual unlisted flows as atomic cards/protocols; missing is not zero. | Gate balances six-leg packaging repair/water records treatment receipt and gas speciation |
| dq_quality | release and postwork | Actual specification work permission and postwork acceptance/disposition; no assumed restoration of broken hydraulic board or copied source thresholds. | Manufacturer permission original tests and nonconformity disposition |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | product and route | Confirm the actual bare whole flat terminal, cellulose-only reinforcement, supply composition and Hatschek/press/autoclave route against primary evidence and site records. Apply every native restriction in the adopted flow cards. Whole mineral-binder/plant-fibre identity is not authority to model asbestos, wood-wool/particle agglomerates, gypsum, polymer/glass reinforcement, coated products or installed systems. | uac-fibre-cement-2024; bba-superflex-2019 |
| v_quantity | Q and normalization | Verify unique first-release IDs/Q, measured moisture/geometry/configuration, all zero/failed runs and original cohort service horizon. Q includes closing FG; manufacturing closing burden excludes it. Raw protocols do not divide; every non-reference amount reuses the one calc_normalize result. Q0 must not emit a unit result. Check each native numerator unit separately. | bba-superflex-2019; ilcd-allocation-2010 |
| v_balances | manufacturing FG and combined physical/burden gates | Independently close wet mass, relevant elements, water phases, each packaging cycle, repair/asset/fluid stocks and inherited exchange vectors using b_physical/b_packaging and calc_burden. Check external steam/condensate enthalpy and provider ownership, gross species and true flow-rate integration. Do not close two unknowns with one residual, scale gross physical legs by allocation, or erase real ingress retained in closing stock. Quantitative unknowns remain unresolved. | uac-fibre-cement-2024; ilcd-allocation-2010 |
| v_disposition | quality and post-release work | Retain actual specification permission, postwork tests, acceptance and disposition for post-release drying/trim/rework; a delivery/reinspection is not another release and a broken hydrated board is not presumed restored. Track wet/dry cut dimensional changes after autoclave, dust collection versus actual atmospheric releases and each actual residue destination. Do not substitute source test thresholds or assume wet cutting eliminated dry trim. | bba-superflex-2019; iibcc-cutting-2010 |
| v_allocation | data use and uncertainty | Verify exclusive/virtual subdivision before each exchange-specific causal key and the genuine residual common-gate market-value decision. Waste sale/handover alone grants no burden subtraction or credit. Report missing evidence and sensitivity by rule; no numerical site balance, scientific approval or translation approval follows from structural checking. | ilcd-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual board supply as downstream secondary/background data with full boundary/qualifiers and separate applicability review |
| allowed_use | Attributional modelling with compatible bare flat terminal real route geography/period supply and moisture/configuration |
| excluded_use | Manufacturing recipes; structural/construction thresholds; installed function; other reinforcement/matrix/coating; automatic carbon-storage credit |
| required_metadata | Whole bare flat board with cellulose pulp as the only reinforcing fibre and hydrated Portland-cement/quartz matrix; No asbestos wood chips wood wool gypsum matrix polymer/mineral reinforcement coating or installed system; Actual site reporting period supply geography and the explicitly selected Hatschek/press/autoclave route; Actual pulp preparation and silica milling state and each whole purchased formulation with additive/carrier-water subledgers; Actual precuring autoclave drying de-stacking trim tests acceptance and disposition records; Measured whole-board first-release net mass moisture composition phase state and configuration range; Actual single-face projected outline geometry and independent same-configuration mass/area/count measurements; Actual manufacturer/specification permission and postwork tests for any post-release work; Unique first-release Q already including retained closing finished goods and zero-output/failed operation records; Opening/closing raw/WIP/unassigned-store inheritance vectors distinct from released FG; Original cohort Qc and observed horizon H for all performed post-release services; Actual steam carrier mass pressure temperature enthalpy condensate and supplier water/energy ownership; Each packaging P/I/ER/S/EO/W physical leg and opening/closing empty attached and reusable stocks; Installed assets fluids and new/removed repairs as full physical stocks and separately assigned current service; Independent molecular species phase origin receiving medium and physical/element balance evidence; Native identity restrictions from every adopted card and local provider compatibility evidence |
| required_quality_disclosure | Per-source and actual quantities; native restrictions; unresolved identities/values; Q/H; all gate balances; allocation sensitivity and unreviewed scope |
| update_trigger | Reassess changes in material/supplied formulation/reinforcement/forming-curing/thermal interface/surface/measurement gate/native identity/evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| uac-fibre-cement-2024 | dataset | UAC Berhad / IBU.data. UAC Fiber Cement Board; EPD-UAC-20240059-IBC3-EN; 2024; dataset 00.04.000. https://ibudata.lca-data.com/datasetdetail/process.xhtml?lang=en&uuid=0f740c32-3d92-40d0-bceb-1a0bbf005d16&version=00.04.000 | Whole cellulose/cement/silica product family and full Hatschek green-sheet recovery precuring autoclave and finishing route; family-average and optional material/geometric limits; no copied EPD numbers or utility assumptions |
| bba-superflex-2019 | official_guidance | British Board of Agrément. Certificate 19/5636 Product Sheet 1 UCO Superflex. First issue 4 April 2019; amended 22 May 2024. Sections 1–3 and 15–19. https://uac.com.my/wp-content/uploads/2026/01/webdownload.pdf | Bare flat-board terminal composition forming/autoclaving finishing quality nonconformity calibration packaging and separate finishes/damaged-board exclusions; no current certification design threshold or life claim |
| iibcc-cutting-2010 | literature | Ang S.H.; Yam K.P.; Ho S.C. Cutting technology of autoclaved cellulose fibre reinforced cement board. IIBCC 2010 pp.213–222. https://www.iibcc.biz/wp-content/uploads/2019/05/IIBCC2010-Proceedings-Cutting-technology-autoclaved-cellulose-fiber-reinforced-cement-board.pdf | Independent manufacturer case: process Figure1; silica preparation; wet cutting and dry finishing waste/dust; Tables1 and4–5 and shrinkage counterevidence against assuming wet cutting eliminates dry finishing; no operating recipe or numeric factor |
| swisspearl-manufacture | handbook | Swisspearl. How fibre cement is made. Manufacturer full webpage snapshot 20 October 2026. https://www.swisspearl.com/company/fibre-cement/how-fibre-cement-is-made?redirect=no | Cellulose bale dispersion/refining and Hatschek/pressing qualitative sequence; steam-autoclave versus air-cure and flow-on synthetic-fibre surface-treatment countercontexts; no claim of same UAC plant/SKU or copied conditions |
| ilcd-allocation-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010; sections7.9.2–7.9.3 pp.255–268. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision; exchange-specific determining physical causality; serial/parallel services; residual common-process exit-state market values and uncertainty; industrial product/recipe claims excluded |
