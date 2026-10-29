---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.kraftliner-uncoated
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Uncoated all-virgin unbleached kraftliner

## 1. Scope and Applicability

This method covers uncoated, all-virgin, unbleached sulphate wood-fibre kraftliner reels for the facing of corrugated board. Verify kraft route, wood/long-short fibre composition and virgin origin on a dry-fibre basis for every ply; declare face and core/back plies separately, whether single- or multi-ply. Every fibre ply must meet this definition; internal same-grade broke retains its virgin provenance. Exclude externally recovered-fibre core plies, testliner, white-top/bleached variants, pigment-coated or laminated board, fluting, corrugated board and boxes. End use or a kraft trade name cannot replace fibre evidence. [jrc-pulp-bref-2015; mondi-containerboard-fibre]

Applicability additionally requires actual machine-finished or machine-glazed reels, finished-paper grammage strictly >115 g/m², roll width strictly >36 cm, and measured Mullen bursting strength at least the corresponding minimum in boundary_classification. UN CPC 3.0 p.146 directly defines 32132 through HS 2022 4804.11 and 4804.19; this unbleached subset uses 4804.11. Chapter 48 Notes 3, 6 and 8 and Subheading Note 1 apply together. The official minimum of 80% chemical sulphate/soda wood fibre is by total fibre mass; this method retains its stricter all-virgin unbleached sulphate wood-fibre requirement in every ply and does not admit soda or recovered-fibre substitutions. Actual finishing and surface sizing must remain within Note 3, subject to Note 7; otherwise-processed, coated or laminated products are excluded. [un-cpc3-2025; wco-hs2022-48]

Verify the actual lot's finish, width, grammage and corresponding Mullen test result, method and specimen basis under cp_output and validation_classification. Failure or missing proof stops this PCR's classification applicability. Corrugated-facing use alone is insufficient: JRC §7.1.11.5 also describes liner/corrugating-medium weights below 100 g/m². These are classification definition thresholds, never LCI defaults, factory measurements, fibre recipes or assumed market grades. [un-cpc3-2025; wco-hs2022-48; jrc-pulp-bref-2015]

Mondi documents a fresh-fibre top ply with a recycled base, while the BREF distinguishes primary-fibre linerboard and recycled testliner. This method is therefore a defined subset, not a classification-derived recipe or minimum virgin-fibre threshold. Metsä white-top examples support ply-specific inspection, but their bleaching/coating routes are excluded here. [mondi-containerboard-fibre; metsa-white-kraftliner; jrc-pulp-bref-2015]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.kraftliner-uncoated |
| classification_refs | CPC 3.0 32132; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | All-virgin unbleached sulphate wood-fibre uncoated kraftliner reels, with actual face/core/back ply declarations and all boundary_classification finish/grammage/width/Mullen conditions verified |
| excluded_products | Testliner or external recovered-fibre plies; white-top/bleached pulp; coating/lamination; fluting, corrugated board and boxes; nonwood or non-kraft pulping; reels failing or lacking proof of boundary_classification conditions |
| representative_product | Virgin unbleached brown kraftliner reel |
| production_route | Papermaking from verified purchased unbleached kraft wood pulp, or integrated chip-to-kraft-pulp cooking/washing/screening/recovery and papermaking; common stock preparation, ply forming, pressing, drying, actual sizing, actual calendering, winding/trimming and packing |
| market_state | Accepted saleable reels at mill gate; measured net paper mass and moisture; core/wrapper separately inventoried |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply kraftliner for downstream corrugated-board facings |
| How much | 1 kg accepted net paper mass at declared actual delivery moisture |
| How well | Declare grammage, moisture, thickness, strength grade/test methods, ply fibre composition and sizing; require machine-finished or machine-glazed reels, grammage >115 g/m², width >36 cm and corresponding minimum Mullen bursting strength under boundary_classification; additional site/receiver quality requirements need actual evidence |
| How long or cycle | One mill-gate supply; no packaging service life implied |
| reference_flow_link | reference_product |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Dry-fibre and wood/long-short fibre composition in every virgin unbleached kraft ply; face/core/back and ply grammage; proof of no external recovered fibre; moisture/net mass/tare; grammage and strength test methods; sizing chemistry; purchased/integrated route and measured supply shares if mixed; recovery/CHP/steam interfaces; site, year and delivery state; actual machine-finished/machine-glazed state and finishing/surface-treatment evidence; measured finished-roll width in cm and finished-paper grammage in g/m²; same-lot corresponding Mullen bursting result in kPa, actual method/version, sampling, specimen construction/conditioning and grammage basis; original test report and boundary_classification minimum/comparison with interpolation or extrapolation calculation where needed |


Declare these qualifiers in dataset metadata, process notes, reference comments or equivalent fields; missing qualifiers leave the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | For the same site, single formulation and period, cp_output and cp_lineage measure first-released net reel paper Q excluding core/wrap, including newly accepted closing FG once, with no repeat Q from old FG or actual returns; each row is per 1 kg reference flow. Q=0 retains absolute quantities and cannot be divided. |


Physical mass/water/carbon balances retain delivery wet mass and measured lot dry fractions. Derive dry fibre, dry chemicals and dry sludge from actual wet mass times measured solids; air-dry pulp kg is not oven-dry kg. Convert packaging counts using measured item mass. Match purchased-pulp dryness, chip solid/bulk volume, gas T/P and steam enthalpy bases separately to backgrounds; secondary database coefficients are not assumed density or recipes. Record electricity under its actual Net calorific value/MJ property; convert metered kWh using the unit-group conversion 3.6 MJ/kWh, which is not a fuel calorific value or efficiency. Collect missing site quantities; historical BREF/AP-42 numbers cannot fill them. [jrc-pulp-bref-2015]

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased route: delivered unbleached kraft wood pulp; integrated route: received debarked chips and external make-up |
| starting_condition_role | Foreground receiving interface, not an upstream burden cut-off |
| product_classification_scope | CPC 3.0 32132 narrower; physical scope requires virgin unbleached kraft wood fibre in each ply plus every boundary_classification condition; failure or missing evidence stops applicability, with no accepted mapping established here |
| recursive_input_rule | A purchased same-category liner or outsourced rework return retains its supplied product burden; record only actual incremental operations. This method does not replace finishing-only methodology or recreate supplied finished-board production |
| upstream_dataset_requirement | Verify pulp species/route/unbleached state/dryness/recovery boundary; chips, chemical assay, water/electricity/fuel, actual input transport and external treatment datasets. Flow identity resolution is not a complete background dataset |
| disclosure | Route and measured supply shares, site/period, pulp output/paper grades, internal links, CHP imports/own-use/exports, outlet media/treatment, actual emissions and gaps |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | mill foreground | Include stock preparation/refining, separate ply furnish, forming/pressing, drying, actual sizing, actual calendering, winding/trimming/packing, water/waste treatment and actual utilities. Integrated chip handling/cooking/washing/screening and chemical recovery apply only to the internally produced pulp fraction. | jrc-pulp-bref-2015 |
| `boundary_recovery` | integrated kraft fraction | Include actual black-liquor evaporation, recovery furnace, smelt/green liquor, recausticising, lime kiln and NCG collection/combustion. Internal wet pulp is not dried/baled as market pulp unless it actually leaves the site. Purchased route includes upstream pulp/recovery once through the supplier dataset, without duplicating those foreground units. | jrc-pulp-bref-2015; epa-chemical-pulping-1990 |
| `boundary_utilities` | steam and CHP | Onsite fuel, abatement, generation and final emissions plus physical internal steam/power links form one utility system. Never add a purchased-heat/electricity background for the same onsite output; purchased utilities use only true external interfaces. Keep imports and exports gross and separate. | jrc-pulp-bref-2015 |
| `boundary_links` | internal physical links | Record both ends of fibre/broke, black/white/green liquor, lime mud/lime, steam/condensate and captured NCG links with identical period, state and amount; reconcile storage changes. Internal black liquor is neither an external fuel purchase nor a discharged waste. | jrc-pulp-bref-2015; epa-chemical-pulping-1990 |
| `boundary_upstream` | completed product system | Retain upstream forestry/chip preparation, purchased pulp, reagent/fuel/water supply, input transport and external waste treatment. Foreground ends at accepted reels at mill gate; corrugation, box conversion, outbound customer delivery, use and end of life remain outside this foreground. | jrc-pulp-bref-2015 |
| `boundary_complete` | additional actual flows | The rows are a mandatory screening list, not a complete site recipe. Add each actual aid, nutrient, lubricant, refrigerant, other fuel, packaging item, metal/mineral emission or distinct waste as one audited atomic row. Measured absence is distinct from missing evidence. | jrc-pulp-bref-2015 |


### Exchange, stock and release accounting

For each actual site, formulation, ply recipe, fibre provenance and production period, maintain a gross physical vector V and a separate attributed burden vector A, both indexed by exchange identity, origin, phase, compartment, process and period. Do not pool different recipes, recovered-fibre substitutions, grades or provider routes into one formulation. Site-specific single- or multi-ply furnish and purchased/integrated shares must be measured; the PCR prescribes no universal recipe. Ordinary non-pigmented sizing is declared separately from actual coating/barrier treatment. A genuinely coated or laminated product is excluded. Actual calendering, slitting and reeling remain in the mill route when performed. [jrc-pulp-bref-2015; cp_lineage]

Opening and closing raw material, pulp, liquor, WIP, broke and finished-paper stocks retain their complete exchange-specific inherited vectors, including the providers and prior energy, emissions and treatment already carried. Receipt, stage issue, internal transfer, loss, waste, sale and stock are separate legs. For every conserved constituent, opening stock + true external arrivals + measured formation = external departures + measured consumption/transformation + closing stock, with matched internal transfers cancelling only in the aggregate. Keep gross leg measurements before allocation. Water, carbon, fibre, Na, S, Ca and energy balances have independent observations; one residual cannot identify several missing quantities. [cp_lineage; cp_balance]

Q is net paper mass first accepted and released during the period for this one formulation, including newly accepted closing finished goods once. Reconcile production, first release, gross dispatch, opening/closing finished goods and returns by lot. Dispatch of previously accepted opening stock carries its inherited A and does not create new Q. Preserve the original service/release record Qc for an already released lot: actual customer return, reinspection, repacking or rework carries its inherited vector plus actual incremental exchanges; a repeat dispatch is not a new manufacture or a second Qc. A rejected, unreleased or failed lot has Q = 0 until real first acceptance; retain its raw/WIP burden, rework, treatment and final destination. Idle operation, start-up, grade change, cleanup and failed production remain in the accounts. When Q = 0, keep absolute V and A and report normalization unavailable; never divide by zero, invent a service or erase the exchanges. [cp_output; cp_lineage]

For each card e, retain measured gross external g_e and its physical normalized display g_e/Q in that card's native property/unit. Retain A_e separately, following actual stock provenance, direct assignment and residual allocation; it is not a multiplier on real coproduct masses. The reference output is 1 kg net paper. If stock or release provenance is incomplete, neither period purchases/Q nor dispatch/Q establishes a complete attributable dataset. Missing values are unknown, not zero. Protocols and row conditions below apply to every card; no range, recipe, density, yield, price, emission factor, recovery credit or arbitrary balance tolerance is supplied. Report observed lot ranges and uncertainty with their original bases, not as industry defaults. [cp_lineage; cp_output; cp_balance]

### Packaging custody and physical service

Apply this ledger independently to each actual paperboard core, uncoated paper wrapper and single-layer PE wrap, and add a separate atomic card for any other real component before claiming completeness. Identify material, physical form, packaging type, wet/dry mass, measured count-to-mass conversion, direction, receipt, custody, owner, provider and prior burden vector. Core/wrap/film never enters net reference paper mass. P means genuinely purchased provision, including a batch purchase without a separate component invoice. N_ext means first external non-purchased entry, including borrowed, leased, entrusted or non-purchased supplied-with-goods items. ER is the same physical item returning externally after a documented previous outward leg. A fresh borrowed core without a previous outward record is N_ext, not ER. Existing stock and internal circulation are neither P nor N_ext. These entries are disjoint, recorded at actual receipt; do not relabel a real new entry as internal reuse or remove only an OTHER duplicate and call that complete coverage. [cp_pack]

For each component, opening empty + raw-attached + WIP-attached + finished-attached + reusable stock, together with P + N_ext + ER, reconciles to the corresponding closing stocks + every gross external outward leg + external waste, with internal attach/detach/repair/reuse legs paired. Distinguish shipment attached to current product, shipment attached to old finished stock, empty returns to owner, loan/service outward and waste, retaining actual custody and receipt. Gross dispatch may include repeated circulation and is not purchased manufacture. Inherit the whole manufacturing provider once at its true first entry, including the prior vector on non-purchased items; unknown prior burden stays unknown rather than zero. Allocate only the attributable manufacturing/service share using actual measured service and stock records, retaining unconsumed closing vectors. Record repair, washing, replacement, transport and losses once when real. No invented lifetime, reuse count, loss fraction, free entry, new paper Q, avoided product or recycling credit follows from circulation. [cp_pack; cp_lineage]

### Provider and receiver interfaces

A whole purchased pulp, wood-chip lot, chemical formulation, size or external mixed stream receives its whole compatible provider once. Dry fibre, water, active ingredients, carrier and source partitions are analytical components of that same whole, not additional purchases. Independently supplied dilution water or separately purchased chemical is a different measured exchange. Inherit upstream forestry/harvest/chipping, actual kraft pulping and recovery, chemical manufacture, utilities and delivery from verified providers. Trace actual provider scopes and transport modes/loads/distances; a provider identity alone does not fill missing upstream operations. [cp_material; cp_receivers]

Record purchased steam, imported electricity, own CHP power/heat, condensate returns, internal recovered water and truly external reclaimed water at their actual distinct interfaces. Reused internal white water/condensate has a paired transfer and retains carried treatment/energy; no second water-manufacturing provider or recovery credit is added. External reclaimed water has its own supplier treatment/gate and measured quality; it cannot be silently omitted or charged again as virgin abstraction. Coupled heat/power/recovery burdens are counted once. Incoming and outgoing utility quantities remain gross, with state, energy basis and recipient service verified; a net utility bill cannot replace them. [cp_utility; cp_water; cp_receivers]

A collected co-product must have a documented physical receiver function and acceptance, not merely a sale price. For every external waste, retain actual composition, wet/dry basis, legal/physical status, sender/receiver receipts and the real treatment function and emissions once. Source paper formation and the actual receiver service are both retained; purchasing finished packaging alone is not the production route of this PCR. Every actual chemical, pollutant or other exchange absent from the screening cards remains a specific declared gap until added and verified. [cp_receivers; cp_waste]

### Chemical, phase and compartment observations

Retain independent gas wet/dry volume, T/P, composition, carbon origin, actual emission compartment and phase; liquid water, vapour and aerosol are distinct. Pure molecular mass conversions require actual species identity and reporting basis. Total PM, COD/BOD, NOx and total metals are analytical aggregates, not substances with one molecular weight. Measure or independently establish their species fractions and analytical equivalence before a dependent conversion; do not infer several unknown species from a single balance residual. No catalogue grammage, density or background coefficient repairs a missing native area-to-mass chain. Retain actual paired lot area and measured net mass when such conversion is required. [cp_air; cp_water; cp_balance]

### Classification applicability

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_classification` | finished reference reels | Require all original ply/route/unbleached/uncoated conditions and verified machine-finished or machine-glazed state, roll width >36 cm and finished-paper grammage w >115 g/m². Under HS 2022 Chapter 48 Subheading Note 1, minimum Mullen bursting strength B_min in kPa at grammage in g/m² is (115,393), (125,417), (200,637), (300,824), (400,961). For any other weight use the original note's linearly interpolated or extrapolated equivalent: between adjacent anchors calculate B_min = B1 + (w - w1) * (B2 - B1) / (w2 - w1); above 400 continue the last segment. Retain the selected anchors and calculation. The 115 anchor does not admit w =115 or less. Actual corresponding Mullen bursting strength B must be >=B_min; width =36 cm or less fails. Chapter Notes 3/6/8 and heading 4804 apply together; permissible finishing/surface sizing does not establish the required finish state by itself, and the formal >=80% total-fibre wood sulphate/soda definition never relaxes this PCR's every-ply all-virgin unbleached sulphate wood-fibre scope. Missing, incompatible or failed evidence stops applicability; do not substitute SCT, another generic strength or an assumed grade. These definition values are not LCI amounts or site defaults. | un-cpc3-2025; wco-hs2022-48 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| kraftliner_mill | Kraftliner manufacture and delivery mill unit | required | Declared purchased or integrated kraft route; every ply within one product scope | foreground production | 1 kg reference flow |


Aggregate papermaking, finishing and packing in one foreground unit with one finished reference output. Retain the following physical process graph separately from the allocated burden ledger; aggregation must preserve stage metering.

| Stage | Internal physical links and measurements |
| --- | --- |
| purchased_pulp | Purchased pulp → repulp/stock → ply chests; lot dryness, virgin origin, wood-pulp route |
| integrated_pulp | Chips → actual screening → cooking → washing/screening → internal wet pulp → ply chests; dry wood/fibre/dissolved organics/rejects/stocks |
| recovery | Weak liquor → evaporation/condensate treatment → recovery furnace → smelt/green liquor → clarify/causticise → white liquor → cooking; lime mud → kiln → lime → causticising |
| paper | Face/core/back furnish → form → press → dry → actual sizing/redrying → wind/trim → pack; white-water/broke return, ply grammage, core/wrap tare |
| utilities | Recovery/auxiliary boiler and CHP → steam headers → heat users → condensate; generation → own-use/export; separate imported electricity/steam interfaces |
| environment | Collected NCG → actual combustion/abatement → final outlets/bypass; river intake → use → actual treatment → freshwater outlet or offsite transfer; solids/dust to actual recipient |


When purchased and internal wet pulp are both used, measure their dry-fibre shares by lot. Purchased-pulp upstream burdens follow purchased shares; onsite cooking/recovery follows internally produced shares; common papermaking/utilities follow metering and the allocation rules below. The graph is not a stoichiometric recipe and historical examples are not generic consumption values. [jrc-pulp-bref-2015; epa-chemical-pulping-1990]

### Process: Kraftliner manufacture and delivery mill unit (`kraftliner_mill`)

#### Inputs

##### Product flows

###### Unbleached kraft wood pulp (`kraft_pulp`)

Purchased, virgin, unbleached non-dissolving sulphate wood pulp only; declare softwood/hardwood blend and measured dry matter. The broad non-dissolving identity includes this subset; it does not select a kraft/unbleached supplier dataset. Convert shipment wet or air-dry supplier reference quantities from their documented dryness, without assuming a standard dryness. Internal integrated wet pulp is not this external input.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For kraft_pulp, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Wood chips (`woodchips`)

Integrated route starts with received debarked untreated wood chips; declare actual wood species, wet mass, dry fraction and origin. The Volume/m3 reference supplies no solid/bulk convention: meter packing and volume basis and match the supplier reference. No adhesive-treated waste wood or plywood processing evidence establishes kraft pulping.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: For woodchips, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Sodium hydroxide (`sodium_hydroxide`)

Conditional external industrial NaOH make-up: this source explicitly requires 95–98% purity and describes crystalline solid. Verify actual supplier solid grade, assay, remaining water/impurities and native wet/dry reference basis before linkage; other actual solution/grade requires a compatible identity. Record supplied whole mass once and effective NaOH/carrier-water/impurity fractions separately for Na and water balances. Internal regenerated white liquor is not another purchase; actual subsequent dilution water is metered separately without repurchasing water already in the reagent.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For sodium_hydroxide, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Sodium sulfide (`sodium_sulfide`)

Conditional external industrial Na2S make-up for integrated kraft cooking; record hydrate, assay and carrier water. Recovered white-liquor sulphide is internal.

- Selected flow: Sodium sulfide
- Flow property / unit: Mass / kg
- Amount rule: For sodium_sulfide, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Sodium sulfate (`sodium_sulfate`)

External anhydrous Na2SO4 make-up if present; record assay, mineral/synthetic supplier route and sodium/sulphur balance. No charge default or circulating salt addition is assumed.

- Selected flow: Sodium sulfate `eb53c69e-ff4b-47f4-b8b3-879d82e2f9bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For sodium_sulfate, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Calcium oxide quicklime (`quicklime`)

External CaO make-up to integrated recausticising only. Record purity and origin; regenerated kiln lime and lime mud circulate internally. External limestone is a different atomic input if used.

- Selected flow: Calcium Oxide `7467387c-cf99-412c-a58f-5824e126aed1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For quicklime, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Starch (`starch`)

Conditional native dry starch for actual wet-end or surface sizing; declare botanical source, solids and dose. Chemically modified starch is a separate identity. A starch size does not imply a pigment coating.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For starch, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Rosin size (`rosin`)

Conditional papermaking rosin size; record specific formulation, active content and purchased formulation mass. Generic resin is not an accepted surrogate.

- Selected flow: Rosin size
- Flow property / unit: Mass / kg
- Amount rule: For rosin, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Aluminium sulfate (`alum`)

Conditional dry aluminium-sulphate powder in papermaking or effluent treatment; meter each stage, assay/hydration and total external consumption once. A solution is a different purchased formulation.

- Selected flow: Aluminium sulfate, powder `1c9f77ea-7da1-42a6-a2ec-d2d4580913c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For alum, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Electricity (`electricity_in`)

Only actual 1–35 kV consumer-side grid-average electricity uses this native Net calorific value/MJ interface. Source geography CN does not establish the actual provider region, year, mix, voltage or transmission/distribution losses; verify all before background linkage. Meter imported electricity separately from onsite CHP gross generation, auxiliaries, self-use and exports; kWh × 3.6 converts electrical energy to MJ, not a fuel calorific value.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: For electricity_in, retain original measured quantity by interface, lot, direction and state; use cp_utility, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Steam (`steam_in`)

Conditional actual external process heat supplied as industrial-boiler steam in either existing route. Source has no pressure/temperature field and native Gross calorific value/MJ; it proves neither 11.0 MPaG nor saturated state nor net delivered enthalpy. Record actual supplier generation/gate, steam mass, absolute/gauge P, T, dryness, delivery/return and other outgoing enthalpies, condensate and losses. Use a verified provider conversion to its GCV reference demand; mass and useful net enthalpy stay separate. Missing conversion is quantity-linkage pending, not zero. Internal recovery/onsite boiler steam remains an equal-endpoint internal transfer, not external heat background or a second fuel burden.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: For steam_in, retain original measured quantity by interface, lot, direction and state; use cp_utility, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Natural gas (`natural_gas`)

Actual pipeline gas to kiln/auxiliary boiler only. Reference quantity is Volume/m3: record T/P, wet/dry composition, compressibility and supplier/background m3 convention. Secondary database mass coefficients are not density. Meter fuel and direct combustion emissions without adding a second heat dataset for the same boiler.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: For natural_gas, retain original measured quantity by interface, lot, direction and state; use cp_utility, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Wood bark fuel (`bark_fuel`)

Conditional externally supplied ground wood/bark fuel covered by hog-fuel physical identity; declare bark share, contamination, moisture and measured heating value. Internal wood rejects are physical transfers, not bought fuel. A pure unground bark stream needs a distinct identity.

- Selected flow: Hog fuel `5f5a176e-cae4-4978-be10-76bf7b92a3d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For bark_fuel, retain original measured quantity by interface, lot, direction and state; use cp_utility, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Cardboard tube or Paper core (`paper_core`)

Actual paperboard winding cores; tare is excluded from accepted first-released net paper Q. Maintain complete physical opening/closing stocks, new receipts, returned receipts, dispatches, internal reuse, damaged/lost/discarded cores, measured unit masses and destinations, reconciling stock change. Repeated circulation is not repeated new-core manufacture. Attribute new-core provision and return/cleaning/repair transport or utilities from actual period service and stock records; retain gross dispatch/return masses physically even if burdens are allocated. No universal reuse cycles, loss rate, core mass or automatic recycling credit.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For paper_core, retain original measured quantity by interface, lot, direction and state; use cp_pack, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Receive and record P, N_ext and ER separately and disjointly; total receipts are not automatically consumption. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

###### Kraft wrapping paper (`wrap_paper`)

Conditional actual uncoated kraft reel-wrapping sheet, separate from the finished kraftliner and its net mass. Broad uncoated packaging-paper names/comment are compatible, while source CPC32129 wood-free graphic paper is a classification conflict pending source/provider clarification. Verify actual kraft fibre route, recovered/virgin content, grammage, sizing/additives, moisture, supplied whole mass and provider wet/dry/gate basis. This is not a formed bag, sulphite-only grade, coated/laminated wrap or proof of the finished reference identity; no default wrapping recipe.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For wrap_paper, retain original measured quantity by interface, lot, direction and state; use cp_pack, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Receive and record P, N_ext and ER separately and disjointly; total receipts are not automatically consumption. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

###### PE film (`pe_film`)

Conditional actual PE reel-wrap film only, with no backing, adhesive or lamination for this single-film identity. Verify PE resin grade, thickness, additives, whole supplied mass, physical structure and provider reference/gate; actual composite wrap needs separate compatible identities and no duplicated constituents. Concordant names/CAS9002-88-4/comment support PE film; CPC29220 luggage/handbags is a disclosed source classification defect pending source/provider clarification. No universal formulation or default recycling credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For pe_film, retain original measured quantity by interface, lot, direction and state; use cp_pack, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Receive and record P, N_ext and ER separately and disjointly; total receipts are not automatically consumption. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

###### Sulfuric acid (`sulfuric_acid`)

Conditional external industrial sulphuric acid, chemical-synthesis supply in sealed containers/pipeline, for actual tall-oil acidulation or other declared non-bleaching use. Source name requires 93–98% H2SO4; verify actual concentration, impurities, grade, supplier route/gate and native mixture basis, without a default concentration. Count whole supplied solution once; acid and carrier water are constituent balances, not additional purchases. Generator waste acid/internal recovered streams are different internal links or separately compatible external identities.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For sulfuric_acid, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Externally supplied process water (`process_water`)

Actual treated water purchased at the mill interface; whole treatment/abstraction provider once, with measured quality and supplier basis.

Native reference is Mass/kg; use measured supplied mass or measured volume times independently measured density at the same temperature/quality, without assuming 1000 kg/m3.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this interface's gross quantity and stock destination using cp_water; cp_lineage and the full period gross/first-release paper formula retain g_e/Q and separate A_e; recorded absence differs from unknown; no default range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### External reclaimed process water (`reclaimed_water`)

True external reclaimed water only, with receiver function and treatment supplier; internal white water is a separate paired internal link.

Native volume reference supports this actual external reclaimed-water quantity; its secondary mass coefficient is a screening assumption and is not adopted as measured density. Actual quality, treatment provider and handover gate still require verification.

- Selected flow: Reclaimed water `8c86c0f7-24f0-4c12-852f-93d9dd1980e7`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure this interface's gross quantity and stock destination using cp_water; cp_lineage and the full period gross/first-release paper formula retain g_e/Q and separate A_e; recorded absence differs from unknown; no default range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### External limestone make-up (`limestone`)

Conditional actual external mineral-carbonate make-up to the integrated lime cycle; actual purity, wet/dry state, provenance and carbonate carbon separately measured. Regenerated lime mud is internal.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this interface's gross quantity and stock destination using cp_material; cp_lineage and the full period gross/first-release paper formula retain g_e/Q and separate A_e; recorded absence differs from unknown; no default range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

##### Elementary flows

###### Water river (`fresh_water`)

Actual river abstraction at site; record catchment, intake and return/evaporation separately. Purchased treated water and other resource compartments require separate identities; do not add river abstraction to a purchased-water supply that already includes it.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: For fresh_water, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

#### Outputs

##### Product flows

###### Uncoated virgin unbleached kraftliner reel (`reference_product`)

One saleable, accepted uncoated all-virgin unbleached sulphate-fibre linerboard reel output at mill gate after drying, winding, trimming and packaging. Net paper mass excludes core and wrap; actual moisture and ply dry-fibre composition are declared. Intermediate web transfers stay inside this foreground unit.

The broader Product identity explicitly includes uncoated packaging paper. Its qualified branch here is the finished all-virgin unbleached sulphate wood-fibre kraftliner reel for corrugated facings: JRC §7.1.11.5 describes primary-fibre unbleached kraftliner and delivery in reels to corrugated-board plants. Retain every original reference qualifier and verify each actual ply, route, grammage, strength, moisture/net paper mass, finished-reel gate and receiving function. The native CPC32129 graphic-paper classification conflicts with the broader packaging name/synonym and requires source/provider clarification; the classification alone neither proves nor excludes this physical branch. This locator does not certify a factory, grade, supplier/background quantity or allocation. Core, wrapper and PE film retain their distinct quantities, histories and providers even if a broad locator is shared; they remain outside net paper Q. [jrc-pulp-bref-2015]

This finished output also requires every boundary_classification finish/grammage/width/Mullen condition, with corresponding lot test evidence under cp_output; the broad Product locator and corrugated-facing use cannot supply missing classification proof. [un-cpc3-2025; wco-hs2022-48]

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `jrc-pulp-bref-2015`

###### Electricity (`electricity_export`)

Conditional site-generated CHP electricity exported at its actual voltage/interface; physical exported MJ are separate from imported grid power and internal use. The customer-side grid-consumption UUID is not used for generation exports.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: For electricity_export, retain original measured quantity by interface, lot, direction and state; use cp_utility, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Heat district heating (`heat_export`)

Conditional actual useful heat delivered to a manufacturing customer at a documented handover interface. Broad Heat for manufacturing has unspecified heat carrier, no opposed fuel route and native Net calorific value/MJ; it does not establish site CHP, pressure, provider generation, customer gate or an enthalpy conversion. Meter actual carrier mass/state, supply/return and other outlet enthalpies, losses and gross generation/self-use/exports separately; verify the native reference conversion with provider/customer. Do not equate net enthalpy automatically to NCV or model purchased-heat production for the same onsite fuel/recovery output. Unknown compatibility remains pending, with no default credit or export share.

- Selected flow: Heat for manufacturing `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: For heat_export, retain original measured quantity by interface, lot, direction and state; use cp_utility, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Crude tall oil (`tall_oil`)

Conditional crude tall-oil output from soap acidulation in integrated kraft; distinguish crude product from soap and distilled fractions. Record actual gate quality, net mass and destination; no species-independent yield is prescribed.

- Selected flow: tall oil `923fd725-d53a-438c-af51-24064c0778f5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For tall_oil, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Turpentine (`turpentine`)

Conditional crude sulphate turpentine recovered and shipped from integrated pulping; record actual quality/sulphur content and recipient. Product capture is not an atmospheric release; residual uncollected species require separate emissions.

- Selected flow: turpentine `e331e6cb-8692-488a-b17c-3c4f7b5355ce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For turpentine, retain original measured quantity by interface, lot, direction and state; use cp_material, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Paperboard core gross outward (`paper_core_outward`)

Retain gross legs attached to current/old finished goods, empty owner returns, loans and service dispatches with owner, receipt and prior outward identity. Only a real subsequent external return can be ER. This component is outside net paper Q and inherits manufacturing/service vectors by actual stocks and service. The corresponding input card material/form/provider restrictions also apply.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: cp_pack measures component mass for each outward leg, converting counts only with measured same-lot item mass; the full period gross/first-release paper formula retains g_e/Q and cp_lineage retains A_e; no new Q, assumed lifetime or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

###### Uncoated paper wrapper gross outward (`wrap_paper_outward`)

Retain gross legs attached to current/old finished goods, empty owner returns, loans and service dispatches with owner, receipt and prior outward identity. Only a real subsequent external return can be ER. This component is outside net paper Q and inherits manufacturing/service vectors by actual stocks and service. The corresponding input card material/form/provider restrictions also apply.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: cp_pack measures component mass for each outward leg, converting counts only with measured same-lot item mass; the full period gross/first-release paper formula retains g_e/Q and cp_lineage retains A_e; no new Q, assumed lifetime or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

###### PE wrap film gross outward (`pe_film_outward`)

Retain gross legs attached to current/old finished goods, empty owner returns, loans and service dispatches with owner, receipt and prior outward identity. Only a real subsequent external return can be ER. This component is outside net paper Q and inherits manufacturing/service vectors by actual stocks and service. The corresponding input card material/form/provider restrictions also apply.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: cp_pack measures component mass for each outward leg, converting counts only with measured same-lot item mass; the full period gross/first-release paper formula retains g_e/Q and cp_lineage retains A_e; no new Q, assumed lifetime or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

##### Waste flows

###### Kraft pulp screening rejects (`rejects`)

Conditional actual external unbleached kraft fibre-screening knots/fibre bundles. Broad industrial Waste solid explicitly includes discarded industrial material; it establishes neither exact composition nor treatment. Keep this stream distinct from the other solid rows despite a shared locator. Measure wet handover mass, dry solids, fibre/lignin, mineral and entrained cooking liquor, carbon origin, stocks and recipient/provider basis and legal waste status. Internal recooking, reuse, recovery or burning is an equal-endpoint internal link, not this waste export; no blended default or energy/recycling credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For rejects, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Green liquor dregs (`dregs`)

Conditional actual separately exported green-liquor clarification dregs. Broad industrial Waste solid explicitly includes discarded industrial material; it establishes neither exact composition nor treatment. Keep this stream distinct from the other solid rows despite a shared locator. Measure wet handover mass, dry solids, inorganic/Na/S/Ca fractions and entrained green liquor, carbon origin, stocks and recipient/provider basis and legal waste status. Internal recooking, reuse, recovery or burning is an equal-endpoint internal link, not this waste export; no blended default or energy/recycling credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For dregs, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Lime slaker grits (`grits`)

Conditional actual separately exported lime-slaker/recausticising grits. Broad industrial Waste solid explicitly includes discarded industrial material; it establishes neither exact composition nor treatment. Keep this stream distinct from the other solid rows despite a shared locator. Measure wet handover mass, dry solids, Ca/mineral/Na/S fractions and entrained alkaline liquor, carbon origin, stocks and recipient/provider basis and legal waste status. Internal recooking, reuse, recovery or burning is an equal-endpoint internal link, not this waste export; no blended default or energy/recycling credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For grits, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Boiler ash (`ash`)

Actual separately exported recovery-boiler ash only; retain distinct measured fly/bottom fractions. Broad ash Waste/Mass has no opposed fuel/treatment fields. Record mineral/Na/S/Ca/carbon composition, contaminants, wet/dry solids, water, stocks and receiver/provider basis; no assumed coal-ash composition, sludge blend or treatment credit. Internally returned recovery ash is an equal-endpoint Na/S circulation, not an external waste or another recovered chemical input.

- Selected flow: ash `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For ash, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Bark/wood auxiliary-boiler ash (`bark_ash`)

Actual separately exported bark/wood auxiliary-boiler ash only; retain distinct measured fly/bottom fractions. Broad ash Waste/Mass has no opposed fuel/treatment fields. Record mineral/Na/S/Ca/carbon composition, contaminants, wet/dry solids, water, stocks and receiver/provider basis; no assumed coal-ash composition, sludge blend or treatment credit. Internally returned recovery ash is an equal-endpoint Na/S circulation, not an external waste or another recovered chemical input.

- Selected flow: ash `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For bark_ash, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Primary sludge pulp paper wastewater (`primary_sludge`)

External primary clarification sludge; record fibre/mineral content, liquor contamination, wet/dry solids and receiver. The broad paper-production sludge identity includes this physically limited sludge; it does not establish treatment or solids. Biological excess sludge remains a separate row with its actual origin.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For primary_sludge, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Biological sludge pulp paper wastewater (`bio_sludge`)

External biological excess sludge from the declared pulp/paper wastewater treatment only; record biomass/mineral contamination, solids and receiver. The broader paper-production sludge identity is conditional on these facts; onsite incineration remains internal and generates separate final emissions.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For bio_sludge, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Waste paper unbleached kraft paper (`offsite_broke`)

External clean unbleached kraft paper trim/broke to a declared recycler only. Internally repulped broke retains virgin origin and appears in stage ledger, not as waste leaving the mill or new recovered-fibre input.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For offsite_broke, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Pulp paper wastewater (`effluent_offsite`)

Conditional actual untreated pulp/paper wastewater handed to an external treatment operator. Broad industrial Waste liquid explicitly includes wastewater without an opposing source/route. Native Mass/kg is whole wet handover mass, weighed or matched measured volume times actual effluent density at the same T/state; retain H2O fraction, suspended/dissolved solids, liquor/chemicals, COD/BOD/N/P, stocks and receiver/provider wet/dry basis separately. Indicator loads are not whole liquid mass. The same offsite-treatment branch is mutually exclusive with foreground water/pollutant releases subsequently modelled at the external provider; actual split branches have distinct records.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For effluent_offsite, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Collected unbleached paper-cutting dust (`collected_dust`)

Actual captured and separately exported unbleached-paper dry-cutting/winding dust. Broad industrial collector Dust supports the collected Waste/Mass identity without a contrary material/route; record actual fibres, sizing/minerals, moisture, contaminants, collection device, stocks and receiver/provider reference and status. Captured, internally repulped and exported material remain separate weighed quantities with equal internal endpoints; not atmospheric PM. Record actual post-control emissions in three disjoint particle bins without default capture, purity, loss share or credit.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For collected_dust, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Screened untreated wood-chip rejects (`wood_reject`)

Conditional actual separately exported untreated wood-chip screening rejects/fines. Broad industrial Waste solid explicitly includes discarded industrial material; it establishes neither exact composition nor treatment. Keep this stream distinct from the other solid rows despite a shared locator. Measure wet handover mass, dry solids, wood/bark/mineral, moisture and contamination state, carbon origin, stocks and recipient/provider basis and legal waste status. Internal recooking, reuse, recovery or burning is an equal-endpoint internal link, not this waste export; no blended default or energy/recycling credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For wood_reject, retain original measured quantity by interface, lot, direction and state; use cp_waste, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Paperboard core external waste (`paper_core_waste`)

Only a real discarded handover; retain separate wet/dry mass, contamination/composition, legal status, stock leg, receiver and actual treatment function. Internal reuse, empty outward service and this waste leg are disjoint. Inherit prior burdens and count treatment once.

The broad paper-packaging-waste identity applies only to actual onsite retirement/discard of this paper component; independently measure composition/contamination, exclude incompatible non-paper layers and adopt no catalogue loss percentage.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: cp_pack and cp_waste measure this component handover and stock change; the full period gross/first-release paper formula displays g_e/Q and cp_lineage separately retains A_e; unknown is not zero, with no default recovery rate or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

###### Uncoated paper wrapper external waste (`wrap_paper_waste`)

Only a real discarded handover; retain separate wet/dry mass, contamination/composition, legal status, stock leg, receiver and actual treatment function. Internal reuse, empty outward service and this waste leg are disjoint. Inherit prior burdens and count treatment once.

The broad paper-packaging-waste identity applies only to actual onsite retirement/discard of this paper component; independently measure composition/contamination, exclude incompatible non-paper layers and adopt no catalogue loss percentage.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: cp_pack and cp_waste measure this component handover and stock change; the full period gross/first-release paper formula displays g_e/Q and cp_lineage separately retains A_e; unknown is not zero, with no default recovery rate or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

###### PE wrap film external waste (`pe_film_waste`)

Only a real discarded handover; retain separate wet/dry mass, contamination/composition, legal status, stock leg, receiver and actual treatment function. Internal reuse, empty outward service and this waste leg are disjoint. Inherit prior burdens and count treatment once.

The broad plastic-packaging-waste identity includes this measured PE wrap without a contrary grade, cleaning or treatment restriction. Verify actual polymer, non-paper layers, moisture, contamination, receiver and treatment; no recycled-material provider or avoided-production credit follows from this waste identity.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: cp_pack and cp_waste measure this component handover and stock change; the full period gross/first-release paper formula displays g_e/Q and cp_lineage separately retains A_e; unknown is not zero, with no default recovery rate or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-bref-2015`

##### Elementary flows

###### Carbon dioxide fossil air (`co2_fossil`)

Actual fossil-carbon CO2 from fuel/chemical inputs at final outlets. Retain origin balance; exclude biogenic and mineral carbonate carbon from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For co2_fossil, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Carbon dioxide biogenic air (`co2_bio`)

Actual biogenic CO2 from black liquor/wood fuel and other biogenic carbon at final outlets; retain in LCI even if a GHG reporting convention omits it. Lime-kiln CO2 origin follows carbonate carbon transfer and make-up provenance, not the kiln label.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For co2_bio, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Carbon monoxide air (`co`)

Actual fossil-origin CO at final air outlets; quantify origin separately from biogenic CO, not by stack location alone.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For co, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Non-methane volatile organic compounds (`nmvoc`)

Conditional actual unburned NMVOC discharged to air at declared kraft cooking/evaporation/recovery or other existing mill stages. Source BREF printed205–206 identifies condensate methanol/other VOC and possible recovery emissions; internal condensate content, collected NCG sent for combustion and recovered turpentine are not assumed air releases. Collect actual outlet-specific speciation, post-control mass, carbon origin and gas wet/dry/normal-condition records. Native Mass/kg is chemical mass, not kgC or propane-equivalent monitoring: reconcile the measurement/LCI/LCIA convention using actual composition and conversion, otherwise quantity linkage remains pending. Exclude methane. An aggregate NMVOC and its individually listed methanol/terpene or organic reduced-sulphur constituents are alternative characterization representations for the same physical release, never additive; retain constituent C/S ledgers without double counting the four TRS rows or captured coproducts. No assumed positive release, zero, factor or recipe.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For nmvoc, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Nitrogen oxides air (`nox`)

Actual NOx aggregate at final air outlets; determine whether monitoring, LCI and LCIA use NO2-equivalent or actual species mass. Mass/kg alone does not establish the equivalence. Pending definition blocks dataset use; exclude N2O and do not duplicate NO or NO2.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For nox, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Sulfur dioxide air (`so2`)

Actual SO2 species at final outlets, including NCG combustion where present; not a generic sulphur-oxide or sulphur-as-S surrogate.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For so2, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Dinitrogen monoxide air (`n2o`)

Actual N2O species from actual combustion or biological treatment; quantify independently of NOx, with no default factor.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For n2o, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Hydrogen sulfide air (`h2s`)

Uncaptured hydrogen sulphide at actual final stack/diffuse outlets of integrated kraft. Collected NCG burnt internally is not also released as H2S.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For h2s, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Methanethiol air 74-93-1 (`methyl_mercaptan`)

Actual uncollected methyl mercaptan, CAS74-93-1, at final air outlets. Speciate TRS; do not add TRS-as-S to these species.

- Selected flow: methyl mercaptan `fe0acd60-3ddc-11dd-9e59-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For methyl_mercaptan, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Dimethyl sulfide air 75-18-3 (`dimethyl_sulfide`)

Actual uncollected dimethyl sulphide, CAS75-18-3, at final air outlets; not dimethyl sulfoxide or another near-name substance.

- Selected flow: dimethyl sulfide `4d9a8790-3ddd-11dd-8e3b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For dimethyl_sulfide, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Dimethyl disulfide air 624-92-0 (`dimethyl_disulfide`)

Actual uncollected dimethyl disulphide, CAS624-92-0, at final air outlets; distinguish from thiram and other sulphur compounds.

- Selected flow: dimethyldisulfide `fe0acd60-3ddc-11dd-ac1e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For dimethyl_disulfide, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Particulates < 2.5 um air (`pm25`)

Actual final-outlet particulate bin ≤2.5 micrometres from combustion and cutting/winding/handling after capture. Collected dust is a separate solid flow; no emission factor is prescribed.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For pm25, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Particulates > 2.5 um and < 10 um air (`pm2510`)

Actual disjoint final-outlet particulate bin >2.5 to ≤10 micrometres. Derive from compatible same-outlet/same-period cumulative measurements only; never add cumulative PM10 to PM2.5.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For pm2510, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Particulates > PM10 (`pm10plus`)

Actual final-outlet particulate bin >10 micrometres, including dry cutting and winding where present. Derive from measured total and cumulative PM10 on matching definitions; incompatible measurements remain pending.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For pm10plus, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Water freshwater liquid emission (`water_return`)

Conditional actual liquid H2O carrier finally discharged to a documented freshwater receiver after onsite treatment, CAS7732-18-5, native Volume/m3. Derive actual water-component mass from measured final mixed-effluent wet mass and water fraction or equivalent verified water account, then divide by water density at discharge temperature. Whole mixed-effluent volume is not automatically pure-water volume. COD/BOD/N/P/TSS/species are separate overlapping load ledgers, not extra carrier masses. Exclude this direct release for the same branch sent to external treatment; document real split branches. Distinguish resource abstraction, internal condensate and air vapour.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: For water_return, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Water vapour (`water_vapour`)

Conditional actual positive H2O vapour emitted to air from paper drying/redrying, liquor evaporation vents and other declared stages including actual combustion-formed water. Measure a complete stage water account with incoming fibre/reagent/fuel water, actual reaction water, product moisture, liquid discharge, solids moisture, condensate recovery/internal circulation and stock change. Steam delivery is not assumed entirely evaporated; recovered condensate/vapour is an internal equal-endpoint link. Distinguish vapour from aerosols/PM, liquid freshwater discharge and abstraction; no default evaporation fraction, positive quantity or zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For water_vapour, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### COD Chemical oxygen demand water (`cod`)

Measured oxygen-equivalent COD load in actual freshwater final discharge; retain method and sample coverage. COD is an indicator, not a chemical mass recipe; it cannot hide individually significant substances.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For cod, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### BOD Biological oxygen demand water (`bod`)

Measured BOD oxygen-equivalent load in freshwater final discharge; declare test duration/method and never substitute COD. Avoid duplicate impact counting of aggregate indicators and resolved constituents.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For bod, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Nitrogen total water (`nitrogen_water`)

Measured total bound nitrogen excluding N2, as kg N, in freshwater final discharge; include organic N when the declared total requires it. Inorganic-only totals are not silently treated as total N.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For nitrogen_water, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Phosphorus total water (`phosphorus_water`)

Measured total phosphorus as kg P in freshwater final discharge; record digestion/analytical method. Do not add separately resolved phosphate burdens twice.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For phosphorus_water, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Suspended solids water (`suspended_solids`)

Actual measured suspended dry solids in freshwater final discharge; not total dissolved solids, offsite sludge or a chemical species.

- Selected flow: Suspended solids water
- Flow property / unit: Mass / kg
- Amount rule: For suspended_solids, retain original measured quantity by interface, lot, direction and state; use cp_water, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### carbon monoxide (biogenic) (`co_bio`)

Actual biogenic-origin CO at final air outlets; reconcile wood/black-liquor carbon and measured incomplete combustion.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For co_bio, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### methane (fossil) (`methane_fossil`)

Actual fossil CH4 from gas handling and incomplete combustion, at final outdoor air; quantify separately from biogenic CH4.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For methane_fossil, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### methane (biogenic) (`methane_bio`)

Actual biogenic CH4 from actual biomass combustion or wastewater systems; measure conditions and carbon provenance; no default anaerobic treatment is assumed.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: For methane_bio, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

###### Carbon dioxide, mineral carbonate origin (`co2_mineral`)

Actual mineral-carbon CO2 from external carbonate calcination only; distinguish it from biogenic carbonate generated by kraft recovery and fossil-fuel carbon. No unverified origin substitution.

- Selected flow: Carbon dioxide, mineral carbonate origin
- Flow property / unit: Mass / kg
- Amount rule: For co2_mineral, retain original measured quantity by interface, lot, direction and state; use cp_air, cp_lineage and the full period gross/first-release paper formula for gross external g_e/Q; retain attributed A_e separately without scaling physical flows by allocation. Unknown is not zero; no universal numerical range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | multiple grades/co-products | First test subdivision or system expansion; retain expanded-system results as such. Directly assign separable operations. For remaining joint burdens use a demonstrated relevant physical relationship; use gate-value allocation only when earlier choices are unsuitable and justified. No universal mass, energy or revenue share is prescribed. | eu-pef-allocation-2021 |
| `allocation_chp` | joint heat/power | Separate recovery chemical functions, process heat, actual power/heat exports and other grades using metered physical service/energy balances and a justified joint-burden model. Any exergy method requires actual T/P and declared reference conditions. Do not use kg steam as delivered MJ; avoid simultaneous export credit and allocation of the same service. | eu-pef-allocation-2021; jrc-pulp-bref-2015 |
| `allocation_ledgers` | physical and burden accounts | Keep full physical mass/water/carbon/energy flows and matched internal links before allocation. Allocate environmental joint burdens in a separate ledger; never multiply real co-product masses or exported energy by the linerboard allocation share. The paper reference remains 1 kg. | eu-pef-allocation-2021 |
| `allocation_causality_residual` | all coproducts and joint services | Assign exchange-level causality and verifiable process subdivision/services first. Only after rejecting earlier methods with reasons may residual joint burdens be allocated by actual coproduct/service values at the same gate, period and quality state. Use real quantities, verifiable prices, currency and dates; missing value data remains pending. Allocate coupled heat/power and chemical recovery once, keep physical V unscaled, and reconcile residual closure and sensitivity. | eu-pef-allocation-2021 |
| `allocation_residues` | waste and recovered products | Distinguish captured internally reused dust/broke/chemicals, external waste requiring treatment, and actual marketed co-products. Receiving-party records determine fate; do not grant automatic zero burden or avoided-production credit to a waste stream. Report sensitivity to material allocation choices. | eu-pef-allocation-2021 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols aggregate per 1 kg reference flow while retaining cp_lineage exchange originals and V/A, cp_pack gross quantities and actual service burdens with unconsumed closing vectors, and cp_receivers original handover quantities. The table aggregation basis does not remove those independent ledgers or any preceding conditions.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | kraftliner_mill | net accepted paper | production and shipment | lot; first-release Q and original Qc; opening/closing raw/WIP/FG exchange vectors; real returns/rejection/failedQ0/idle/cleanup; route; ply dry-fibre origin/species; ply grammage; strength/test; reel net/gross/core/wrap mass; moisture; rejects; stocks; actual machine-finished/machine-glazed state and finishing/surface-treatment records; measured finished-roll width; finished-paper grammage; corresponding same-lot Mullen bursting kPa, method/version, sampling, specimen construction/conditioning and grammage basis; original report; threshold anchors/calculation/comparison and applicability decision | Calibrate scales; subtract tare from accepted saleable reels; test lot moisture and fibre records; reconcile shipment/stock and production; keep dry-mass ledger separately. Verify finish records, measure actual finished width and grammage, and retain corresponding representative Mullen tests on the declared specimen basis. Compare all conditions under boundary_classification; missing/incompatible evidence or failure stops applicability. SCT or another generic strength is not a Mullen substitute. The HS note does not specify an ISO method number; disclose the actual method and verify compatibility rather than inventing one. | kg; dry fraction; cm; g/m²; kPa | Each lot/continuous meters and representative tests; monthly totals | Complete representative consecutive period covering seasons, grades, start-up and disturbances; prefer 12 months and justify shorter campaigns | Declared site/route, every stage and true boundary outlet | per 1 kg reference flow | Calibration, methods, lot/time matching; uncertainties/gaps and receiving records; original classification evidence and comparison under un-cpc3-2025 and wco-hs2022-48 |
| cp_material | kraftliner_mill | each actual material | receipts issues stocks | supplier; identity; unbleached/kraft proof; species; wet/dry mass; solids; assay/hydrate; whole formulation/active/remaining additives/water; core receipts/returns/dispatch/reuse/loss/opening-closing stocks; volume/packing; transport; stocks; dose by stage | Reconcile receipts, stock changes, actual stage issues and returns; retain SDS/supplier reference amounts and upstream scope. Split virgin purchased pulp from internal wet pulp and same-grade broke. | kg; m3; solids | Each lot/continuous meters and representative tests; monthly totals | Complete representative consecutive period covering seasons, grades, start-up and disturbances; prefer 12 months and justify shorter campaigns | Declared site/route, every stage and true boundary outlet | per 1 kg reference flow | Calibration, methods, lot/time matching; uncertainties/gaps and receiving records |
| cp_utility | kraftliner_mill | fuel/steam/power | meters invoices supplier | imports; own generation/use; exports; meter interface/voltage; fuel origin/composition; T/P; wet/dry; compressibility; calorific basis; steam quality/enthalpy and return; boiler stage | Use calibrated separate import/export meters; retain matched supplier reference definitions. Balance steam delivery/return and CHP net generation/own use; never infer pressure or delivered heat from a UUID unit. | MJ; kWh; kg; m3; T/P | Each lot/continuous meters and representative tests; monthly totals | Complete representative consecutive period covering seasons, grades, start-up and disturbances; prefer 12 months and justify shorter campaigns | Declared site/route, every stage and true boundary outlet | per 1 kg reference flow | Calibration, methods, lot/time matching; uncertainties/gaps and receiving records |
| cp_water | kraftliner_mill | abstraction final water indicators | meters composite samples lab | intake/outlet/catchment; flow; paired concentration; method; COD/BOD oxygen basis; N/P element basis; TSS; temperature; stocks; H2O fraction; water/effluent density at T; stage vapour; combustion/reaction water; recovered condensate; evaporation; offsite transfer | Use calibrated intake/outlet meters and representative time/flow-matched final-outlet composite sampling; retain laboratory methods/detection limits. Calculate actual loads, not dilution-based concentration proxies. | m3; mg/l; kg | Each lot/continuous meters and representative tests; monthly totals | Complete representative consecutive period covering seasons, grades, start-up and disturbances; prefer 12 months and justify shorter campaigns | Declared site/route, every stage and true boundary outlet | per 1 kg reference flow | Calibration, methods, lot/time matching; uncertainties/gaps and receiving records |
| cp_air | kraftliner_mill | final atmospheric species/bins | CEMS stack fugitive lab | outlet; equipment; fuel/carbon origin; species/CAS; concentration; gas volume; time; wet/dry normal conditions; abatement/bypass; TRS speciation; NMVOC/speciation and chemical-mass vs kgC/propane convention; aggregate/species overlap; NOx equivalent; cumulative PM definitions | Use calibrated representative stack/fugitive measurements matched to actual exhaust/time and operating states; include start-up/bypass. Record cutting/winding exhaust and collection separately. No default historical emission factor is adopted. | kg; mg/m3; m3; hours | Each lot/continuous meters and representative tests; monthly totals | Complete representative consecutive period covering seasons, grades, start-up and disturbances; prefer 12 months and justify shorter campaigns | Declared site/route, every stage and true boundary outlet | per 1 kg reference flow | Calibration, methods, lot/time matching; uncertainties/gaps and receiving records |
| cp_waste | kraftliner_mill | each distinct external waste | weighbridge analyses receipt | origin; solid/liquid state; wet/dry mass; volume; measured density at T/state; H2O fraction; composition; contaminant/entrained liquor; recipient; treatment; stock changes; transport | Weigh/measure each external transfer with representative solids/composition tests and receiving-party receipts. Separate primary/biological sludge and ash sources; internal reuse/burning is not an offsite waste transfer. | kg; m3; dry fraction | Each lot/continuous meters and representative tests; monthly totals | Complete representative consecutive period covering seasons, grades, start-up and disturbances; prefer 12 months and justify shorter campaigns | Declared site/route, every stage and true boundary outlet | per 1 kg reference flow | Calibration, methods, lot/time matching; uncertainties/gaps and receiving records |
| cp_balance | kraftliner_mill | internal links and joint burdens | stage meters physical and cost accounts | link id; sender/receiver; date; fibre/wood/water/carbon/Na/S/Ca; liquor solids; energy/enthalpy; stocks; uncertainties; grade/co-product amounts; gate prices; allocation rationale | Reconcile link pairs on identical physical bases including stock changes; retain unallocated physical and allocated burden ledgers. Trace lime-carbon origin from actual material chemistry; justify allocation without modifying physical co-product outputs. | kg; m3; MJ; currency | Each lot/continuous meters and representative tests; monthly totals | Complete representative consecutive period covering seasons, grades, start-up and disturbances; prefer 12 months and justify shorter campaigns | Declared site/route, every stage and true boundary outlet | per 1 kg reference flow | Calibration, methods, lot/time matching; uncertainties/gaps and receiving records |
| cp_lineage | kraftliner_mill | exchange-specific physical and burden inheritance | lot production/stock/first-release | formulation/lot/species and ply dry-fibre origin; each exchange raw quantity/unit/state/compartment; opening/closing raw/WIP/broke/FG V and A; first Q; original Qc; gross dispatch/actual returns/failedQ0/idle/cleanup; provider hash/scope; destination | Trace each receipt, issue, transformation, release and stock by exchange; do not add source partitions to whole providers; reconcile V independently of A; retain absolute quantities at Q=0 | kg; m3; MJ; native units | Every lot and stock leg | Same complete production period including idle and disturbances | Same site/formulation, all stages and actual receiver interfaces | per 1 kg reference flow | Scale/meter calibration; provenance; first release and actual return receipts; gaps/uncertainty |
| cp_pack | kraftliner_mill | every real packaging component in every direction | receipts/custody/ownership/stocks/dispatch/waste | material/form/type; count and measured item mass; P/N_ext/ER receipt; prior outward for ER; owner/custody; manufacturing provider and inherited vector; empty/raw/WIP/FG/reusable opening/closing; gross outward/discard and receiver; washing/repair/transport | Pair each disjoint actual first entry with item/lot records; no separate invoice is required for batch P; attach/detach is internal; first borrowed/leased/entrusted/non-purchased supplied-with-goods entry is N_ext; only same-item external return is ER; reconcile and inherit per component | kg; count | Each receipt/dispatch/state change | Same period plus actual prior-period records | Every real component and handover interface | per 1 kg reference flow | Receipt/return/dispatch/waste signatures; calibration; ownership/prior burden gaps |
| cp_receivers | kraftliner_mill | whole provider chain and actual receiver function | supplier process/handover/service acceptance | actual whole formulation/wood/mixed stream; species/route/recovery and forestry; steam/power/water interface/coupled scope; transport; coproduct function/acceptance; waste composition/treatment; raw quantities and supplier-basis conversion evidence | Read native physical restrictions and whole provider scope per interface; reconcile both handover sides and real service; whole provider once, components not extra purchases; treatment/emissions not duplicated; gaps stay pending | Each native unit | Each provider/receiver and change | Same period and actual upstream representative period | Every real input/output interface | per 1 kg reference flow | Independent originals and bilateral receipts; scope/conversion/function gaps |


Use cp_output and cp_lineage to retain first Q, all stock provenance and gross exchanges; display g_e/Q per 1 kg reference flow and attribute A_e independently. Nameplate capacity, gross reel mass, gross dispatch or a different period is not the denominator; Q=0 has no normalized result.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Physical display per 1 kg reference flow is measured card gross g_e / first-released net paper Q; cp_output and cp_lineage reconcile new closing FG once, old stocks and original Qc; Q=0 retains absolute amounts. Attribute A_e independently by real provenance and allocation without scaling physical coproducts. | cp_output; cp_lineage; cp_material; cp_utility; cp_water; cp_air; cp_waste; cp_pack; cp_receivers | gross exchange per reference flow; separate attributed vector | jrc-pulp-bref-2015 |
| outlet_load | final air/water exchanges | Integrate matched concentration × discharged volume, retaining dimensional conversion, gas normal/wet/dry bases and observed abnormal intervals; retain oxygen-equivalent/element definitions for indicators. | cp_air; cp_water | period outlet load | jrc-pulp-bref-2015 |
| balance_check | internal physical links | Reconcile sent/received link amounts and stock changes on the same period/state; dry paper mass reconciles to actual ply dry fibre, additives and losses; do not invent a closure tolerance. | cp_balance; cp_material; cp_output | physical balance with residual uncertainty | jrc-pulp-bref-2015 |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Match identity, medium, species, carbon origin, actual route, property and unit; a UUID is not a site amount or supply dataset. | direct identity; cp_material; cp_air; cp_water |
| dq_layers | reference product | Retain ply dry-fibre origin/unbleached kraft proof, measured grammage and grade; reject applicability to external recovered-fibre plies. Require complete corresponding finish/width/grammage/Mullen evidence and passing boundary_classification comparison; a trade grade or SCT result alone is insufficient. | cp_output; supplier evidence; un-cpc3-2025; wco-hs2022-48 |
| dq_scope | route and background links | Count purchased-pulp upstream/onsite integrated recovery, utilities and offsite treatment once; disclose gaps and incompatible supplier quantity bases. | cp_material; cp_utility; cp_balance; cp_waste |
| dq_primary | all amounts | Use actual site quantities, representative measurement and matching periods; disclose detection limits/non-detect rules. Unknowns are not zero and historical single-mill ranges are not substitutes. | cp_output; all collection protocols |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference and basis | Require one accepted finished reel reference output with all qualifiers, actual net paper mass/moisture and one common per-1-kg denominator; no duplicate same-identity intermediate/final outputs. Unresolved reference identity prevents complete methodology delivery. | jrc-pulp-bref-2015 |
| `validation_route` | ply and route | Verify every ply is virgin unbleached kraft wood fibre. Check actual purchased/internal dry-fibre shares and exclude recovered-core variants; no trade-label or classification-only applicability. | jrc-pulp-bref-2015; mondi-containerboard-fibre |
| `validation_double_count` | recovery and energy | Reconcile physical internal links and separate burden accounts; purchased pulp contains upstream recovery once, integrated production contains onsite recovery once. Do not double count black liquor as bought fuel/waste or onsite CHP as a purchased energy background. | jrc-pulp-bref-2015; epa-chemical-pulping-1990 |
| `validation_emissions` | final outlets | Check outdoor-air/freshwater compartment, true species/origin, pressure/gas definitions and NOx equivalence. PM bins must be disjoint; TRS and species, NOx and NO/NO2, and indicators/constituents must not duplicate impacts. Keep biogenic CO2; collected internally reused dust is not external air/waste. | jrc-pulp-bref-2015 |
| `validation_gaps` | completed dataset | Missing UUID, quantity, field method, supplier reference basis, emission equivalence or unsupported relationship remains pending; report checks performed/skipped and completeness. Measured non-occurrence differs from unknown. This PCR never establishes scientific approval or native TIDAS schema validity. | jrc-pulp-bref-2015 |


| `validation_lineage_pack` | every card, stock and packaging service | Reconcile first Q including new closing FG once; retain original Qc, real returns, Q0 and idle/cleanup. Per component reconcile P/N_ext/ER against every empty/raw/WIP/FG/reusable stock, gross outward and waste leg; ER needs the same prior outward item, and a new non-purchased entry is not burden-free. Whole provider once, physical V conserved independently of allocated A; deleting duplicates does not supply missing first entries; unmeasured/unreviewed scope remains explicit. | jrc-pulp-bref-2015 |

### Classification applicability check

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_classification` | finished reference reels and lot evidence | Check boundary_classification as a conjunction: original all-virgin unbleached sulphate wood-fibre/uncoated scope, permitted actual processing and machine-finished/machine-glazed state, measured width >36 cm, measured finished-paper w >115 g/m², and corresponding measured Mullen B >=B_min from the original five anchors and linear interpolation/extrapolation rule. Verify cp_output lot/sample linkage, actual method/version, specimen construction/conditioning and grammage basis, units, selected anchors, calculation and comparison in the original report. Do not substitute SCT or unrelated strength, copy a catalogue value or claim an ISO number specified by the HS note. Any failed condition stops applicability; missing or incompatible evidence leaves applicability unestablished and also stops use under this scope. Keep actual rejected/failed production and its inherited exchanges under existing Q/V/A rules; a classification stop never erases burdens or creates defaults. This test neither accepts a mapping nor approves a supplier dataset. | un-cpc3-2025; wco-hs2022-48; jrc-pulp-bref-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional mill-gate product dataset for the physically limited route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to downstream corrugating models after verified identity, ply composition, delivery state, quantity basis and boundary |
| excluded_use | Testliner, white/bleached grades, other pulping routes, whole corrugated-box life cycle, unreviewed industry average or unresolved-identity dataset |
| required_metadata | All reference qualifiers; supplier backgrounds/transport; physical graph/balances and burden ledger; utility interfaces/recovery shares; allocation; treatment/outlets; site period |
| required_quality_disclosure | Actual collection coverage, verified/unresolved identities, basis compatibility, abnormalities/gaps, uncertainty, scientifically unreviewed scope and source applicability limitations |
| update_trigger | Change of ply fibre origin, pulping/sizing, recovery/CHP, fuel/steam pressure, supplier quantity basis, grade or outlet |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pulp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board, 2015; DOI 10.2791/370629; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | §2.1.1–2.1.2 purchased/integrated route; §2.2.2 monitoring; §3.1 cooking/washing/recovery; §7.1/7.2 papermaking, sizing, reeling dust and plies. Method only; no historical case, recipe, concentration or BAT numerical inventory default. §7.1.11.5 printed p.677/PDF715 includes liner/corrugating-medium weights below 100 g/m², counterevidence to classification by end use alone, not a factory lot or inventory default. |
| epa-chemical-pulping-1990 | official_guidance | US EPA, AP-42 §10.2 Chemical Wood Pulping, September 1990, reformatted January 1995; pp.10.2-1–10.2-3; https://www.epa.gov/sites/default/files/2020-10/documents/c10s02.pdf | Integrated kraft recovery loop and reduced-sulphur species only. Historical batch/continuous and direct/indirect evaporation are alternatives, not a site prescription. No numerical values/factors; does not establish onsite recovery at a purchased-pulp paper mill. |
| eu-pef-allocation-2021 | official_guidance | European Commission, Recommendation C(2021)9332 final / (EU)2021/2279, Annex I §4.5, pp.63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Multifunctionality hierarchy and justification only; no claim of complete PEF compliance or fixed CHP shares. |
| mondi-containerboard-fibre | literature | Mondi, Containerboard Paper, product ranges, retrieved 2026-10-27; https://www.mondigroup.com/products-and-solutions/containerboard/ | Producer original: fresh top/recycled base in SmartKraft Brown is counterevidence to applicability by kraft name alone; no industry recipe or quantity. |
| metsa-white-kraftliner | literature | Metsä Board, White kraftliner, product-layer description, retrieved 2026-10-27; https://www.metsagroup.com/metsaboard/explore-paperboard/paperboard-as-packaging-material/white-krafliner/ | Producer original supports ply-specific review; white/coated examples are outside this unbleached/uncoated route and supply no default quantities. |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, updated 30 June 2025, p.146, subclass 32132; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Direct definition of 32132 through HS 2022 4804.11 and 4804.19; classification context for this narrower unbleached branch, not a recipe, accepted mapping or whole-leaf coverage claim. |
| wco-hs2022-48 | official_guidance | World Customs Organization, HS Nomenclature 2022, Chapter 48, Chapter Notes 3/6/7/8 (PDF pp.1–2), Subheading Note 1 and Mullen table (PDF p.3), heading 4804 and subheadings 4804.11/.19 (PDF p.5); https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1048_2022e.pdf | Actual finish, reel form, strict >115 g/m² and >36 cm conditions and minimum Mullen bursting kPa at original grammage anchors with linear interpolation/extrapolation; Note 3 finishing/surface-sizing limits and formal total-fibre definition. This PCR retains stricter every-ply all-virgin unbleached sulphate wood fibre. Classification definition only, not LCI/factory defaults, an invented ISO test number or customs ruling. |
