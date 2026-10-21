---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.retreaded-pneumatic-tyres-of-rubber
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Cold pre-cure retreading of used commercial pneumatic rubber tyres

## 1. Scope and Applicability

This method covers finished rubber pneumatic commercial truck/bus tyres made by cold pre-cure retreading of genuinely previously used, individually traceable, structurally suitable casings. Inspection/rejection, buffing, skiving/repair, purchased pre-vulcanized tread and uncured bonding gum, actual cement use, building, enveloped pressure/temperature curing, finishing and first quality release form the complete foreground route. “Cold” describes pre-cure retreading; curing still consumes energy. The route is synthesized from independent industrial primary evidence, not attributed to a single SKU or plant. No temperature, recipe, rejection rate, tyre mass or life is prescribed.

Exclude new tyres (36111/36112/36113), inner tubes and solid/cushion tyres (36114), separate camel-back or other tread supply (36115), regrooving alone, reclaimed-rubber manufacture, aircraft/OTR/passenger-tyre applications and hot mold-cure routes pending explicit scope review. Buying finished tyres and relabelling them is not this manufacturing route. Different vehicle uses alone do not justify duplicate methodology. Upstream rubber, cord and new-tyre PCRs end at different products; none substitutes for this finished retread.

The reference gate is FIRST positive quality release of newly retreaded complete tyres, not actual dispatch. Q is the measured net kg of unique newly accepted finished tyres in the matched product/route/state cohort, excluding rim, separate tube/flap, envelope and transport packaging. Reinspection of a return does not create new Q. Production outputs contain Q once: closing finished stock containing part of Q is not a second production output. Real post-release storage/packing/handling/dispatch remains in a separately traced service ledger. Allocate it to the actual serviced cohort, carry opening/closing finished-stock burdens, cancel internal handovers on combination, and disclose temporal cut-off/provisional carryover. A delivered-product study must build a separate actual-delivery balance including stock carry; never silently equate Q with deliveries.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.retreaded-pneumatic-tyres-of-rubber |
| classification_refs | CPC 3.0 36120; this bounded cold pre-cure commercial-tyre subset only |
| covered_products | Finished retreaded pneumatic rubber truck/bus tyres from previously used suitable casings |
| excluded_products | Exclude new tyres (36111/36112/36113), inner tubes and solid/cushion tyres (36114), separate camel-back or other tread supply (36115), regrooving alone, reclaimed-rubber manufacture, aircraft/OTR/passenger-tyre applications and hot mold-cure routes pending explicit scope review. Buying finished tyres and relabelling them is not this manufacturing route. Different vehicle uses alone do not justify duplicate methodology. Upstream rubber, cord and new-tyre PCRs end at different products; none substitutes for this finished retread. |
| representative_product | One qualified configuration of complete unmounted cold-pre-cure retread, reported by net mass |
| production_route | Receive and inspect used casing → buff/clean/skive/repair → apply actual cement, uncured cushion gum and purchased pre-cured tread → build/envelope/autoclave cure → finish/inspect/first release; trace actual post-release services separately |
| market_state | Finished quality-released complete retread at plant, ready for its declared supply specification; dispatch is separately recorded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide finished complete retreaded pneumatic tyres of the declared specification as manufactured articles |
| How much | 1 kg net finished tyre at first quality release, drawn from a specified configuration; count/mass measurements support interpretation |
| How well | Accepted to declared size, construction, load/speed/axle requirements and applicable approval/test evidence; no generic equality to a new tyre |
| How long or cycle | One retreading production and first-release event; no mileage service or assumed number of later retreads |
| reference_flow_link | retread_released |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retreaded pneumatic tyres, of rubber `4832efc8-8f09-4682-b099-62d79e496310` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | previously used commercial truck/bus pneumatic casing and traceable casing identity/history; actual legal and economic casing status with accepted Product or Waste type and burden-transfer method; cold pre-cure route with separately supplied pre-vulcanized tread and uncured bonding layer; tyre size/construction/rim fit and load index and speed symbol and axle and approved specification; inspection rejection and repairs and cure record and unique first release Q net kg excluding packaging; actual site and period and source suppliers and formulations and utility supplies; opening/closing WIP and raw-material/finished-stock quantities and carried burden vectors; returns/rework lineage and separate post-release storage/packing/dispatch ledger; measured count and net-mass distribution without fixed lifetime or retread count |

Declare every Required qualifier in the concrete data package. Mass-based supply is not a tyre-kilometre functional comparison.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net_mass | retread_released | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q > 0 is the unique newly quality-released tyre net mass measured by cp_output, on the declared first-release gate. Keep actual count and tare. Do not replace Q with shipments or tyre-count × an invented weight. |
| whole_formulation | material inputs | Mass | kg | Purchased tread, cushion/repair gum, patch and cement are whole commercial supplies. Assay solids, solvent and water belong to constituent subledgers, not duplicate external purchases. Onsite blending requires actual separately acquired ingredients and blending energy/losses. |
| raw_utility_state | utility and emission rows | declared row property | declared row unit | Convert original measurements before one normalization: power × operating duration is energy; integrated liquid/gas volume gets no second time factor. Use measured density or documented enthalpy/state where required; a secondary flow-property coefficient is not density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received previously used casings before screening, plus complete acquired tread/repair/cement supplies and utilities |
| starting_condition_role | Product or Waste as demonstrated by actual original identity, native type and legal/economic state; not selected to fit a reference schema |
| product_classification_scope | CPC 3.0 36120; this bounded cold pre-cure commercial-tyre subset only |
| recursive_input_rule | A separately bought retreaded finished tyre is not an incoming used casing. Trace returned same-tyre rework internally without a new external purchase or new release. An externally prepared casing shifts operations upstream and requires explicit boundary reconciliation; do not silently omit screening/buffing/repair. |
| upstream_dataset_requirement | Match actual casing burden-transfer methodology, transport/conditioning, supplied tread and formulated materials, and utility providers. No automatic zero prior casing burden or avoided-new-tyre credit; unresolved prior burdens must be disclosed and resolved for dataset use. |
| disclosure | The reference gate is FIRST positive quality release of newly retreaded complete tyres, not actual dispatch. Q is the measured net kg of unique newly accepted finished tyres in the matched product/route/state cohort, excluding rim, separate tube/flap, envelope and transport packaging. Reinspection of a return does not create new Q. Production outputs contain Q once: closing finished stock containing part of Q is not a second production output. Real post-release storage/packing/handling/dispatch remains in a separately traced service ledger. Allocate it to the actual serviced cohort, carry opening/closing finished-stock burdens, cancel internal handovers on combination, and disclose temporal cut-off/provisional carryover. A delivered-product study must build a separate actual-delivery balance including stock carry; never silently equate Q with deliveries. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | p_retread | Include all actual reception/screening failures, preparation, repair, cement/tread building, enveloped curing, finishing, tests/rework and waste/emission controls. Bought pre-cured tread manufacture stays in its matched upstream supply. Hot mold-cure is excluded, not modelled with the cold process inventories. | `bandag-process`; `epa-retreading` |
| boundary_release | retread_released | The reference gate is FIRST positive quality release of newly retreaded complete tyres, not actual dispatch. Q is the measured net kg of unique newly accepted finished tyres in the matched product/route/state cohort, excluding rim, separate tube/flap, envelope and transport packaging. Reinspection of a return does not create new Q. Production outputs contain Q once: closing finished stock containing part of Q is not a second production output. Real post-release storage/packing/handling/dispatch remains in a separately traced service ledger. Allocate it to the actual serviced cohort, carry opening/closing finished-stock burdens, cancel internal handovers on combination, and disclose temporal cut-off/provisional carryover. A delivered-product study must build a separate actual-delivery balance including stock carry; never silently equate Q with deliveries. |  |
| boundary_casing | used_casing_product; used_casing_waste | For each received casing batch preserve ownership/acceptance, previous use, payment or gate fee, jurisdiction/status documentation, treatment obligations, native type and selected LCA transfer rule. Record exactly one Product or Waste input for that physical batch. Commercial payment alone does not settle legal waste status. Do not force a Waste record into Product, assume burden-free used feed, or erase burdens of rejected casings. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_retread | Cold pre-cure retreading of used commercial pneumatic rubber tyres | required | Actual cold pre-cure used-casing manufacturing route only | Consolidated process with separate operation/material/utility/status/emission/stock/service owners below | 1 kg |

### Process: Cold pre-cure retreading of used commercial pneumatic rubber tyres (`p_retread`)

Maintain distinct stage ledgers for receive/inspect → buff/clean/skive → repair → cement/cushion/tread building → envelope/cure/cool → finish/test/first release, plus post-release services. No foreground preparation is omitted by selecting an already prepared intermediate. Conditional cards are not zero defaults; add every actual separate exchange, emission species, fuel/utility, packaging material and waste needed by the real site.

#### Inputs

##### Product flows

###### Used pneumatic truck/bus tyre casing (`used_casing_product`)

Use only for actual received non-waste Product casings with acceptance/status evidence. This is the whole used casing before screening, including the share later rejected, not a newly made tyre or a bought buffed/repaired intermediate. Mutually exclusive with used_casing_waste for the same physical casing. Its prior burden-transfer rule is required, not assumed zero.

- Selected flow: Used pneumatic truck/bus tyre casing
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_casing`
- Sources: `bandag-process`; `epa-retreading`

###### Pre-vulcanized rubber tyre tread (`precured_tread`)

Whole separately purchased pre-cured tread, including actual supplied compound, cut-to-fit loss and supplier route. Do not use uncured camel-back or a finished tyre as the same identity.

- Selected flow: Pre-vulcanized rubber tyre tread
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bandag-process`

###### Uncured retread cushion gum (`cushion_gum`)

Whole purchased uncured bonding-gum formulation between casing and pre-cured tread; cure/compatibility and lot records are required. Its constituents are not additional purchases.

- Selected flow: Uncured retread cushion gum
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bandag-process`

###### Uncured tyre repair filling rubber (`repair_gum`)

Whole acquired repair/filling compound actually used after skiving; keep failed repairs and separate from the bonding layer. Record absent use only with repair logs.

- Selected flow: Uncured tyre repair filling rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bandag-process`

###### Reinforced tyre repair patch (`repair_patch`)

One complete purchased repair patch article including its reinforcement/rubber; actual type and mass from repair records. Distinct patch types require separate concrete dataset rows.

- Selected flow: Reinforced tyre repair patch
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bandag-process`

###### Formulated rubber retreading cement (`cement`)

Whole actual supplied cement formulation, including solvent or water carrier. Record actual product/SDS, solids and carrier composition, received/issued/returned quantities and evaporative losses; no fixed solvent or dry-resin substitution. Other separately purchased repair adhesive requires its own row.

- Selected flow: Formulated rubber retreading cement
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `epa-retreading`

###### Electricity (`electricity`)

Meter actual inspection, buffing/dust extraction, repair/building, compressed air generation, vacuum/enveloping, curing, cooling, controls and auxiliary loads. Include idle/failed cycles and traced actual warehouse/handling services without charging the same meter twice.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `bandag-process`

###### Purchased steam (`steam`)

Conditional on actual imported steam for the selected cold pre-cure equipment. Preserve supply mass, pressure/temperature, enthalpy and condensate return in the utility subledger. Report useful energy on the stated convention without subtracting a return twice or inventing steam use. Onsite steam requires actual separate fuel/water/emission rows and no duplicate purchased steam.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources:

###### Supplied process water (`water`)

Record actual cooling make-up, cleaning or test water once at the supply boundary; internal circulation is not a repeated purchase. Do not duplicate water already in cement formulation or imported steam.

- Selected flow: Supplied process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources:

###### Reusable rubber retreading envelope (`envelope`)

Record actual new/replacement envelope supply and independently evidenced consumption allocation over measured service, with opening/closing stocks, repairs and worn exits. Do not assume one new envelope per tyre or a fixed lifetime.

- Selected flow: Reusable rubber retreading envelope
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `bandag-process`

###### Low-density polyethylene tyre wrapping film (`ldpe_wrap`)

Only actual separately acquired single-material LDPE wrap. Record issue, return/reuse, waste, opening/closing stock and mass leaving with tyres; other packaging materials require separate rows. All real packing burdens remain in the traced service ledger, never net tyre Q.

- Selected flow: Low-density polyethylene tyre wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Paper tyre identification label (`paper_label`)

Record one whole purchased paper label article with its actual coating/adhesive included in the supplier product; separate other label types. Keep inventory, release/dispatch, returns and disposal evidence.

- Selected flow: Paper tyre identification label
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

###### Waste used pneumatic truck/bus tyre casing (`used_casing_waste`)

Use only when the actual received casing is Waste according to original/native identity and documented legal/economic condition. Record physical mass, gate fee and treatment/transfer burdens without changing native type. Mutually exclusive with used_casing_product for the same batch; absence needs status evidence.

- Selected flow: Waste used pneumatic truck/bus tyre casing
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_casing`
- Sources: `epa-retreading`

##### Elementary flows

#### Outputs

##### Product flows

###### Retreaded pneumatic tyres, of rubber (`retread_released`)

The sole terminal reference is the newly quality-released complete retread, 1 kg net tyre; not a bought new tyre or only tread. Native identity: Product flow, “Finished product, manufactured”, “Production mix, at plant”; only Mass with reference coefficient 1. No CAS, grade, casing history, cold/hot route, specified geography/locationOfSupply, service life or density is declared. The comment says “362 Other rubber products”, inconsistent with the 36120 classification tree; retain this isolated metadata debt. This broad finished-retread identity is compatible only after actual casing, tyre specification, process and gate qualification. It is not a new tyre, prepared casing, tyre tread, provider inventory or proof of performance. The reference gate is FIRST positive quality release of newly retreaded complete tyres, not actual dispatch. Q is the measured net kg of unique newly accepted finished tyres in the matched product/route/state cohort, excluding rim, separate tube/flap, envelope and transport packaging. Reinspection of a return does not create new Q. Production outputs contain Q once: closing finished stock containing part of Q is not a second production output. Real post-release storage/packing/handling/dispatch remains in a separately traced service ledger. Allocate it to the actual serviced cohort, carry opening/closing finished-stock burdens, cancel internal handovers on combination, and disclose temporal cut-off/provisional carryover. A delivered-product study must build a separate actual-delivery balance including stock carry; never silently equate Q with deliveries.

- Selected flow: Retreaded pneumatic tyres, of rubber `4832efc8-8f09-4682-b099-62d79e496310`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_output`
- Sources: `bandag-process`

###### Returned reusable used tyre casing (`returned_casing`)

Only an actual external return of a still non-waste usable casing with custody and status evidence; retain its carried burdens and reconcile input/reject/service burden ownership. It is not accepted new retread Q or an automatic coproduct credit. Waste rejects use rejected_casing.

- Selected flow: Returned reusable used tyre casing
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_casing`
- Sources:

###### Returned water condensate (`condensate_return`)

Actual external clean utility-water return only; retain mass, condition and separate enthalpy/accounting convention. Internal recirculation cancels. Wastewater uses its waste row; this physical exit remains in closure even if no sale/credit occurs.

- Selected flow: Returned water condensate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources:

##### Waste flows

###### Rejected waste pneumatic tyre casing (`rejected_casing`)

Whole actual casing rejected at incoming inspection or later processing/final tests; retain screening effort, repairs, energy and treatment burden, including zero-output failures.

- Selected flow: Rejected waste pneumatic tyre casing
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-retreading`

###### Waste tyre rubber buffings (`buffings`)

Captured worn-tread buffings and rubber dust, with actual moisture/contamination and recovery destination. Captured solids are not also air emissions; a genuine sold Product outlet needs its own documented type and allocation, not silent waste relabelling.

- Selected flow: Waste tyre rubber buffings
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-retreading`

###### Waste uncured rubber repair offcuts (`repair_offcuts`)

Actual externally discarded uncured cushion/repair offcuts with one compatible physical identity; incompatible compounds or cured tread cuttings require distinct rows. Internal reuse is not an external purchase or waste exit.

- Selected flow: Waste uncured rubber repair offcuts
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-retreading`

###### Waste cured rubber tread cuttings (`cured_offcuts`)

Separate actual precured-tread trimming and cured finishing scraps, measured at external exit; do not mix into uncured compound or hide failed build burdens.

- Selected flow: Waste cured rubber tread cuttings
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-retreading`

###### Waste rubber cement formulation (`spent_cement`)

Whole discarded cement formulation with actual solvent/water/solids fractions; container or contaminated wipe is a different waste and requires a separate row when present.

- Selected flow: Waste rubber cement formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-retreading`

###### Process wastewater (`wastewater`)

One separately characterized external aqueous stream with measured mass/composition and actual treatment destination. Distinct incompatible streams require separate rows; dissolved species subledgers are not duplicate procurement.

- Selected flow: Process wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-retreading`

###### Waste rubber retreading envelope (`worn_envelope`)

Measured worn envelope retirement/disposal after actual reuse; retain prior service and stock evidence.

- Selected flow: Waste rubber retreading envelope
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `epa-retreading`

###### Waste low-density polyethylene wrapping film (`waste_wrap`)

Actual discarded LDPE wrap, separate from reusable returns and mass shipped with tyres; retain treatment route.

- Selected flow: Waste low-density polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `epa-retreading`

###### Waste paper tyre labels (`waste_label`)

Actual discarded paper label article, separate from labels accompanying the tyre and intact reusable returns.

- Selected flow: Waste paper tyre labels
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `epa-retreading`

##### Elementary flows

###### Rubber particulate to air (`rubber_dust_air`)

Only measured/justified actual escaping rubber particulate at declared air compartment and sampling point, after capture. Keep captured buffings separate. Determine any independently emitted specific compound separately.

- Selected flow: Rubber particulate to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

###### n-Heptane to air (`heptane_air`)

Conditional template for this one actual chemical only: use solely if current actual supplier composition and site speciation identify n-heptane. No universal solvent identity or emission factor is imposed. Other actual volatile species must each have their own atomic row; an unresolved species cannot be hidden in this row, a total-VOC pseudo-flow or a zero.

- Selected flow: n-Heptane to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

###### Water vapour to air (`water_air`)

Actual evaporated free/carrier/process water at the stated compartment, not invented reaction water. Preserve separate phase and composition evidence. No general water-forming reaction is assumed for rubber bonding/vulcanization.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, using the matched raw-cohort numerator and one reporting division after actual raw-unit conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | p_retread | For an explicitly declared attributional case where allocation is justified, first subdivide actual operations and virtually assign exchange-specific burdens using demonstrated determining physical causal relationships. Apply different drivers to different exchanges when causally required; an arbitrary mass split is not physical causality. Only remaining indivisible burdens lacking such a relationship may use justified co-function market values at that same process exit state and gate, with quantities, price period, sensitivity and 100% burden conservation. Physical/economic allocation are not unrestricted alternatives. | `ilcd-attributional-2010` |
| allocation_casing | cp_casing | Do not use this process-allocation hierarchy as a universal recycled-content cut-off or allocation across imagined future tyre lives. For actual casing transfer, identify upstream systems, condition, legal/economic state and the study-specific applicable reuse/waste method with independent evidence; match its carried burdens. Preserve fee/negative-value treatment functions. No fixed number of retreads, equal per-life division or avoided-new-tyre production credit is authorized. | `ilcd-attributional-2010` |
| allocation_rejects | p_retread | Retain all failed/rejected/rework burdens in the matched raw cohort. Actual useful recovered materials must be classified and treated through the documented method; waste handling is not a negative input credit. A return or internal recovery cancels only its internal transfer, never its real processing energy/losses. | `ilcd-attributional-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_casing | p_retread | Casing status and reception owner | raw period record and linked physical/burden ledger | serial identity; prior use/retread history if known; ownership; receipt/return/reject dates; acceptance; native type; jurisdiction/legal status; payment/gate fee; incoming and outgoing kg; opening/closing stock; carried burdens; selected transfer method | Retain complete undivided physical/financial/status originals and calibrate weighing. Inspect all actual receipts, including rejects and no-output screening. Select one Product or Waste input for each physical batch; record external returns separately. No normalization in collection. | kg; count; currency and date | Each receipt/lot/cycle/meter interval and period stock close | Complete declared raw period and matched first-release cohort, with all carryover | Named actual site, supply boundary and traced services | per 1 kg reference flow | custody documents; status determination; weigh tickets; upstream burden provenance |
| cp_materials | p_retread | Material issue and repair/build owner | raw period record and linked physical/burden ledger | supplier; product/SDS/COA; formulation and compatible repair type; whole supplied mass; solids/solvent/water; receipts/issues/returns; opening/closing material and WIP; lost material; lot/casing links; carried burden vectors | Reconcile whole commercial supplies to stock, issues, actual incorporation, external losses and internal returns. Preserve all failed builds/repairs and carried WIP burdens. Assays are subledgers, not additional procurement. Separate every actually separately supplied material. No numerator division. | kg; stated assay units | Each receipt/lot/cycle/meter interval and period stock close | Complete declared raw period and matched first-release cohort, with all carryover | Named actual site, supply boundary and traced services | per 1 kg reference flow | purchase/issue records; supplier compatibility; repair/build records; mass calibration |
| cp_utilities | p_retread | Metering and curing owner | raw period record and linked physical/burden ledger | meter interval and state; inspection/buffing/building/cure/cooling operation; envelope/vacuum cycle; raw electricity; steam mass/enthalpy; water; condensate return; compression and treatment energy; idle/failure/rework; shared-meter causal drivers; stock carry | Preserve raw totals at actual supply points and each unit-operation record. Distinguish rate from integrated volume. Internal steam/air/water circuits are subledgers; document externally supplied compressed air/heat or onsite fuel as separate actual exchanges if present, without double charging electricity. Preserve no-output loads; no normalization. | MJ; kg; m3 and actual conditions | Each receipt/lot/cycle/meter interval and period stock close | Complete declared raw period and matched first-release cohort, with all carryover | Named actual site, supply boundary and traced services | per 1 kg reference flow | meter calibration; utilities invoices; cure charts; shared-load drivers |
| cp_output | p_retread | Quality and production release owner | raw period record and linked physical/burden ledger | unique casing/batch; configuration; inspection/rejection/repair/cure record; first release date; measured net kg Q; count; tare; failed tests; returns/reacceptance; opening/closing WIP; carried burdens; separate finished-stock and shipment ledger | Calibrated weighing and deduplicated first acceptance establish Q for one matched cohort. Record all raw period burdens and WIP without removing zero-output runs. Track post-release stock/services separately with burden carry and internal-transfer cancellation; no collection-side division and no extra output for closing finished inventory. | kg excluding packaging; count | Each receipt/lot/cycle/meter interval and period stock close | Complete declared raw period and matched first-release cohort, with all carryover | Named actual site, supply boundary and traced services | per 1 kg reference flow | quality approvals; scales; serial trace; stock and burden reconciliations |
| cp_packaging | p_retread | Warehouse, envelope and dispatch service owner | raw period record and linked physical/burden ledger | each packaging/envelope identity and kg; opening/closing stocks; new/replacement supply; reuse/return/repair; issue; discard; package mass accompanying tyres; storage occupancy/time; handling; shipment/return cohort; energy and carried burdens | Keep a complete independent physical ledger for each actual packaging material/envelope. Include material leaving with the tyre, waste, external return, reuse and retained stock. Match real service burdens to the release cohort using traceable direct/causal assignment; retain unmatched finished-stock carry until resolved. Do not count reuse as new purchase, packaging as net Q, or internal handover as a second product. No division here. | kg; time; area/volume; raw service energy | Each receipt/lot/cycle/meter interval and period stock close | Complete declared raw period and matched first-release cohort, with all carryover | Named actual site, supply boundary and traced services | per 1 kg reference flow | stock/return manifests; service allocation records; actual dispatch evidence |
| cp_waste | p_retread | Waste segregation and treatment owner | raw period record and linked physical/burden ledger | individual waste identity/type; point of generation; kg wet/dry; contamination; captured/external/recovered/internal fraction; rejected casing lineage; opening/closing stocks; treatment destination; carried burdens | Weigh and reconcile each actual external stream and treatment burden. Separate captured buffings from emitted particles and whole discarded tyres from cuttings. Add each distinct contaminated wipe, container or other real waste separately; retain zero-output burdens and internal-recovery provenance, without normalization. | kg; composition and phase | Each receipt/lot/cycle/meter interval and period stock close | Complete declared raw period and matched first-release cohort, with all carryover | Named actual site, supply boundary and traced services | per 1 kg reference flow | weighbridge; waste transfer/treatment records; analyses |
| cp_emissions | p_retread | Environmental measurement and balance owner | raw period record and linked physical/burden ledger | species and CAS where applicable; compartment/emission point; actual formulation composition; concentration; flow rate or integrated volume; duration; temperature/pressure; capture/removal; detection limits; independent solids/liquid/gas composition; free/carrier/phase water; material and element ledgers | Preserve undivided raw period analytical and activity records for every actual species and route operation. Identify each actual VOC/cure emission individually, including those not named in template cards; unknown speciation is a disclosed data gap, never total-VOC identity, zero or a fit to closure. Establish actual reaction-water chemistry independently if relevant. Do not multiply integrated volume by time or derive two unknown outlets from one residual. | kg; concentration; m3 and conditions; time | Each receipt/lot/cycle/meter interval and period stock close | Complete declared raw period and matched first-release cohort, with all carryover | Named actual site, supply boundary and traced services | per 1 kg reference flow | sampling/laboratory records; actual SDS/COA; measured mass/element balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_cohort | all nonreference inventory rows | For each exchange/burden i form unnormalized A_i = opening WIP carried i + actual full-period i - closing WIP carried i - amounts and burdens assigned to other cohorts. Reconcile raw-material stocks before issue consumption; retain unsuccessful/zero-output runs, test losses, internal returns and rework once. Post-release service A_i is separately assigned to the same newly released cohort with opening/closing finished-stock carry, rather than subtracting that cohort’s finished mass from production Q. Do not erase failed production as “other cohorts” or remove its burdens solely because Q=0 in that sub-run. | cp_casing; cp_materials; cp_utilities; cp_output; cp_packaging; cp_waste; cp_emissions | A_i in original converted row units, with burden lineage |  |
| normalize_period | all inventory rows | For Q > 0 from cp_output, report a_i = A_i / Q once, in row units per 1 kg reference flow; terminal output is 1 kg. Card amount expressions and protocol aggregation labels describe this same single reporting operation, not successive divisions. A zero-output sub-run keeps its numerator in the matched cohort; if the complete cohort has Q=0, retain raw burdens and report no finite normalized product dataset. | A_i; Q; cp_output | a_i per 1 kg reference flow |  |
| physical_closure | p_retread | Keep independent UNNORMALIZED physical ledgers. The production ledger contains only its actual external material inputs and opening raw-material/WIP stocks on the left, and new quality release Q plus all production-stage external Product exits (including returned reusable casings, condensate and any actually qualified sold output), Waste exits, emitted species and closing raw-material/WIP stocks on the right. Closing finished stock is outside this production ledger and is never added again alongside Q. In the separate finished-store/service ledger, opening finished stock plus new release and actual external returns equal actual exits, service losses and closing finished stock, with carried burdens and return/rework lineage. On combination cancel the internal Q handover and all other internal transfers: retain actual external exits and opening/closing stock once, not both Q and the downstream stock/exits as extra final outputs. Each packaging material has its own complete physical ledger: opening stock plus new supply and actual external returns equal mass accompanying tyres, waste, external returns-out and closing stock; internal reuse cancels and is not new supply. Include every real external Product outlet/utility return and accompanying packaging mass in any consolidated physical/element closure, never in net tyre Q. Energy-only utility rows carry their corresponding physical masses in utility subledgers; services are not kg material inputs. Independently verify relevant C/S/Zn/metal and water fractions, actual species, crosslinking and free/phase/reaction water. No COD/residual fitting, fixed sulfur conversion, assumed combustion or generic reaction-water term. | cp_casing; cp_materials; cp_utilities; cp_output; cp_packaging; cp_waste; cp_emissions | independent physical balances and diagnosed discrepancies |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | reference product | Require genuinely used suitable casings, specified cold pre-cure route and finished first-release evidence; reject new-tyre/tread-only substitutions. Actual tyre specification must qualify the broad native identity. | receipt, inspection, repair, cure and acceptance records |
| quality_complete | all inventory rows | No omitted failed/zero-output runs, stock carry, real rework, utility returns or post-release service burdens. Unknown field/species/provider is disclosed with resolution need; no zero defaults or invented recipe. | raw period ledgers and traceable carry vectors |
| quality_native | all inventory rows | Native identity: Product flow, “Finished product, manufactured”, “Production mix, at plant”; only Mass with reference coefficient 1. No CAS, grade, casing history, cold/hot route, specified geography/locationOfSupply, service life or density is declared. The comment says “362 Other rubber products”, inconsistent with the 36120 classification tree; retain this isolated metadata debt. This broad finished-retread identity is compatible only after actual casing, tyre specification, process and gate qualification. It is not a new tyre, prepared casing, tyre tread, provider inventory or proof of performance. | complete exact native fields and version-bound support chain; actual supplier/site compatibility |
| quality_data | data package | Report sampling uncertainty, detection limits, temporal/geographic/technology coverage and omitted burden significance. Species, legal status, prior casing burdens and method applicability require actual evidence before concrete data use; ordinary auxiliary UUID/provider matching is not a reason to invent identities. | quality dossier and source applicability decisions |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | retread_released | Require the linked unique Product output and the declared finished-retread UUID, exact Mass/kg relationship, actual cold-pre-cure scope, positive unique first-release Q, and matched cohort. Do not use prepared casing or pre-cured tread as terminal reference. | `bandag-process` |
| validate_status | used_casing_product; used_casing_waste | Check exclusive incoming type from complete actual evidence, prior burden methodology and returned/rejected casing balance. A native Product output does not force incoming Waste into Product. Missing actual status/burden evidence blocks the concrete data package’s usability, not permission to infer zero. |  |
| validate_accounting | all inventory rows | Check raw_cohort and exactly one normalize_period, Q versus deliveries, all failed/rework/WIP/carried burdens, complete separate finished-stock/service ledger and packaging physical ledger. Internal transfers cancel only when combined; no duplicate new production for reacceptance or closing stock. |  |
| validate_atomic_balance | p_retread | Check every actual supplied formulation and individual output, utility return and packaging exit; no duplicate ingredient procurement. Check raw units/state, full physical/element closure and independent species/water evidence. Template n-heptane applies only when actually identified; add every other actual species as its own row rather than dropping it or using total VOC. |  |
| validate_allocation | p_retread | Check attributional case, subdivision/virtual subdivision and exchange-specific determining physical causality before any residual same-process-gate economic allocation. Check 100% conservation and sensitivity, no blanket physical/economic choice, fixed tyre life/count, automatic zero prior burden or avoided production credit. | `ilcd-attributional-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset when the stated foreground has complete verified records |
| downstream_use | Mass-based supply modelling for this qualified cold-pre-cure retread at the first-release gate; actual-delivery and use phases require explicit additional ledgers/models |
| allowed_use | Declared configuration/site/period attributional product inventories with documented casing transfer and actual service burdens |
| excluded_use | No universal tyre/new-tyre substitution, passenger/aircraft/OTR/hot-cure coverage, fixed retread count, assumed equal rolling resistance/mileage, safety certification or automatic environmental superiority. A service comparison needs real bounded load/axle/route/pressure, observed performance/lifetime and replacements; never invent them. |
| required_metadata | All required qualifiers, reference gate, native limitations, supplier/provider mapping, status/burden-transfer method, raw period, stock and service ledgers, actual quantities and allocation evidence |
| required_quality_disclosure | Authored candidate methodology, scientific review pending; technical sources give qualitative route support, not one plant recipe, factors, approvals or complete PEF/ILCD compliance. Disclose every measured-data/identity/method gap and sensitivity. |
| update_trigger | Casing status/transfer method, hot/cold route, construction/specification, supply recipe, energy system, emissions, gate/stock practice or source/native identity changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| bandag-process | handbook | Bandag, The Bandag Retreading Process, Steps 1–7. https://www.bandag.eu/en/why-retread/the-bandag-retreading-process | Primary industrial sequence: casing screening, buffing/skiving, pre-cured tread plus uncured bonding layer, enveloped cure and sale approval. Qualitative only; performance/marketing claims and future retread counts are not adopted. |
| bandag-cold | handbook | Bandag, Think Environment, Effective processing. https://www.bandag.eu/en/think-environment | Confirms industrial pre-vulcanized tread and “cold” pre-cure distinction from hotcap. No temperature ratio, savings, rolling resistance or performance default is used. Same publisher as bandag-process, not independent corroboration. |
| epa-retreading | literature | Monsanto Research Corporation, Draft Report: Identification and Control of Hydrocarbon Emissions from Rubber Processing Operations, 23 November 1977, prepared for US EPA, Contract No. 68-02-1411, Task 17, §11.1–11.2, printed124–127 (PDF140–143), NSCEP9100KABM. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100KABM.TXT | Independent historical process evidence for receiving/rejection, buffing/cement, precure autoclave distinction, finishing/inspection/shipping and organic-release scope. Also describes hot routes, excluded here. No recipe masses, emission factors, operational instructions or contemporary legal-status rule adopted. Contractor technical draft: its opinions are not necessarily EPA views and do not establish EPA endorsement. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment – Detailed guidance, First edition March2010, §7.9.2–7.9.3, printed255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Primary LCA method for the stated attributional process subdivision/virtual subdivision, determining physical causality per exchange, residual same-gate/condition economic allocation and total conservation. No automatic waste cut-off, fixed reuse cycles, recipe, credit or full-method conformance; tyre transfer needs its own applicable method/evidence. |
