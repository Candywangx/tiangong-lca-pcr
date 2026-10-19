---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.printing-ink
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# PY12 toluene-based publication-gravure printing ink

## 1. Scope and Applicability

This PCR covers one bounded liquid ink system: C.I. Pigment Yellow 12 dry preparation bead-milled onsite into a purchased rosin-modified phenolic resin solution in toluene, followed by let-down, filtration, quality release, steel-drum filling, storage and actual factory-gate delivery for publication gravure on paper. The supported electricity configuration is a Chinese plant using below-1-kV grid supply. It does not claim that the ink native record specifies China. The reference gate is actual net delivery, not newly quality-released production. [wipo-py12-gravure-2004; epa-eiip-ink-manufacture-2005]

Exclude water-borne, UV/EB-curable, offset, flexographic, screen, inkjet and toner systems; other pigments, dye/carbinol routes, nitrocellulose or polyurethane vehicles, onsite resin synthesis/cooking, pigment synthesis/flushing, and pure purchased-dispersion blending. Purchased complete pigment dispersion is an upstream formulation input for a different declared route, not evidence that onsite milling occurred. Paints/varnishes under 35110 and artists’ colours under 35120 remain separate methods. No generic colour/vehicle union is authorized. Printing, downstream drying/curing and solvent recovery at the printer are outside this manufacturing-and-delivery system.

The patent comparative examples support the specific pigment/resin/solvent/bead-milling combination. Their laboratory recipe is not an industrial default, dosage interval, yield, release fraction, electricity intensity or approved performance benchmark. Collect the actual commercial formulation and properties. No printing-service equivalence follows from 1 kg wet delivered ink.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.printing-ink |
| classification_refs | CPC 3.0: 35130 Printing ink; bounded subset; classification acceptance remains separate |
| covered_products | PY12 toluene-based publication-gravure printing ink |
| excluded_products | All routes, pigments and forms excluded in section 1; paints, artists’ colours and printing services |
| representative_product | Liquid PY12 pigment ink in purchased rosin-modified phenolic/toluene vehicle, delivered in steel drums |
| production_route | Receipt and wet preparation dosing; premix and bead mill; let-down and filtration; QC/rework; drum filling; stock/dispatch reconciliation; cleaning and actual waste/air-release management |
| market_state | Net wet liquid ink actually handed over at factory gate; declared pigment grade, solids, solvent and viscosity state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | PY12 toluene-based publication-gravure printing ink |
| How much | 1 kg net actually delivered ink, excluding drum and other packaging mass |
| How well | One declared PY12 grade and purchased resin-vehicle formulation meets site release and delivery specifications: pigment content, nonvolatiles, solvent composition, viscosity at test temperature, colour strength/shade and dispersion fineness; actual tests required, no imposed patent limits |
| How long or cycle | Declared actual reporting period and traceable delivery/batch cohort; no use lifetime |
| reference_flow_link | dp_delivered |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Gravure Ink c2ed843f-16bf-462a-8ff7-ae78e95e5c4c |
| Reference flow property | Mass 93a60a56-a3c8-11da-a746-0800200b9a66 |
| Reference unit group | Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 |
| Reference unit | kg |
| Required qualifiers | actual delivery gate and period; net Q and return convention; lot cohort; PY12 CAS/grade/surface treatment; vehicle resin chemistry and supplied solids; solvent/impurity composition; viscosity and temperature; pigment/nonvolatile fractions; paper publication-gravure use; plant and geography; below-1-kV CN electricity; drum specification; WIP/finished-stock and carried-burden records; capture/treatment recipients |

Required qualifiers must appear in dataset metadata, reference comments or equivalent foreground documentation. Their absence makes applicability incomplete. Native Gravure Ink supports low-viscosity toluene-based production mix at plant, with no specified geography, CAS, exact pigment grade or recipe. Those additional qualifiers need the cited route evidence and actual foreground records.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_gate | dp_delivered | Mass | kg | Q is positive unique net actual delivery of the same product/route/state cohort, not production release P. Weigh net ink with tare and trace outward/return events; undelivered finished goods are excluded from Q. |
| mu_wet | mf_vehicle; mf_py12; mf_toluene | Mass | kg | Use supplied whole preparation mass. Active pigment/resin, carrier solvent and water are subledgers. Volumes require actual formulation- and temperature-specific density with uncertainty, never a secondary native coefficient treated as density. |
| mu_energy | mf_electricity | Energy | MJ | Retain raw meter kWh; convert once using 1 kWh = 3.6 MJ before the single reporting normalization. Resolve the native Net calorific value reference property through its energy unit group to MJ; this is an energy dimension, not a fuel combustion prescription. |
| mu_integrals | all inventory rows | Measured physical quantity | kg; MJ; m3 | Rate times observed duration is valid for a measured rate. An already integrated volume gets no second time multiplier. Keep raw volume, duration, temperature, pressure and calibration as applicable. |
| mu_mass_species | all inventory rows | Mass and species | kg | Reconcile total physical mass and relevant elements separately from actual measured species. This physical mixing route assumes no chemical reaction or reaction-water term; do not invent reaction water, total VOC or another outlet to close a residual, and do not infer species from COD. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased PY12 dry preparation, whole resin/toluene vehicle, separate toluene, packaging and utilities received at plant; opening WIP and finished stocks enter with traceable physical quantities and carried upstream/foreground burdens |
| starting_condition_role | Foreground receipt-to-actual-factory-gate-delivery; cradle-to-gate results additionally attach upstream production, inbound transport and actual treatment |
| product_classification_scope | Bounded PY12 toluene publication-gravure ink subset of CPC35130; not complete printing-ink coverage |
| recursive_input_rule | No recursive copy of this ink process for purchased vehicle or dispersion; use actual independent upstream formulation datasets. Internal P transfer is paired and eliminated, not another procurement |
| upstream_dataset_requirement | Match grade, wet/dry form, concentrations, route, delivery point, geography and period for each actual input. Identity UUID does not establish a supplier or numeric burden; unresolved auxiliary matches stay explicit |
| disclosure | Document included storage, packaging, handling/dispatch, rework, shared utilities, actual capture/waste recipients, stock and carried burdens, exclusions and uncertainty. Outbound transport beyond factory-gate handover is a separate declared extension |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_route | manufacture | Include dosing, onsite pigment wetting/bead milling, let-down, cooling/extraction, filtering, tests, failures and rework. Whole purchased vehicle upstream production remains attached; its solvent/resin subledgers are not duplicate inputs. | epa-eiip-ink-manufacture-2005, wipo-py12-gravure-2004 |
| sb_delivery | delivery | Include real filling, packaging, finished storage, handling, dispatch and associated losses up to actual factory-gate delivery. Preserve opening/closing finished stocks with burdens; consolidate paired P transfers exactly once. Printing drying/curing does not enter this boundary. | epa-eiip-ink-manufacture-2005 |
| sb_releases | manufacture; cleaning | Separate retained product solvent, collected liquid/solid waste, captured material, actual after-control emissions and inventory changes. Record each actual VOC/high-impact species and medium separately; no default release, capture percentage or recovery credit. Add atomic rows for any additional actual high-impact species, fuel, heat, packaging or treatment exchange; retain measured zeros and justified absence. | epa-eiip-ink-manufacture-2005 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Premix, bead milling and finishing | required | Selected onsite PY12 dispersion route | Manufacture quality-released bulk P; collect shared energy once | P kg internal transfer, reported per 1 kg reference flow |
| delivery | Filling, stock and factory-gate delivery | required | All delivered lots | Terminal actual net delivery Q | 1 kg reference flow |
| cleaning | Cleaning and collected waste management | required | Actual operations; unused stream requires evidence of zero/absence | Retain actual cleaning inputs, captured wastes and releases | per 1 kg reference flow |

### Process: Premix, bead milling and finishing (`manufacture`)

#### Inputs

##### Product flows

###### Rosin-modified phenolic resin solution in toluene (`mf_vehicle`)

Purchased whole liquid vehicle, including its resin and toluene. Assay solids, solvent composition and any impurities as subledgers; do not also procure their contained masses. No resin synthesis/cooking is performed in this route.

- Selected flow: Rosin-modified phenolic resin solution in toluene
- Flow property / unit: Mass / kg
- Amount rule: A_mf_vehicle / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `wipo-py12-gravure-2004`

###### C.I. Pigment Yellow 12 dry pigment preparation (`mf_py12`)

One declared PY12 commercial grade; retain CAS, surface treatment, active pigment and moisture. It is not a dye, arbitrary colour blend or purchased pigment dispersion. The patent comparative grade establishes a route, not a prescribed supplier or dosage.

- Selected flow: C.I. Pigment Yellow 12 dry pigment preparation
- Flow property / unit: Mass / kg
- Amount rule: A_mf_py12 / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `wipo-py12-gravure-2004`

###### Toluene (`mf_toluene`)

Separately purchased formulation/let-down toluene only; CAS 108-88-3, production mix at plant, native geography unspecified. Its native residual CPC35499 classification is disclosed metadata debt; physical identity is consistent. Solvent already inside the vehicle is not added again.

- Selected flow: Toluene 33ac34b7-d691-4eda-8563-daef49a05157
- Flow property / unit: Mass / kg
- Amount rule: A_mf_toluene / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `wipo-py12-gravure-2004`

###### Glass grinding beads (`mf_beads`)

Actual make-up/replacement beads consumed by the bead mill; initial media charge and closing retained charge reconciled, not a fresh full charge every batch.

- Selected flow: Glass grinding beads
- Flow property / unit: Mass / kg
- Amount rule: A_mf_beads / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Polypropylene filter bag (`mf_filter`)

One filter medium; weigh actual replacement consumption. Captured ink is counted in residue mass and not as additional polymer procurement.

- Selected flow: Polypropylene filter bag
- Flow property / unit: Mass / kg
- Amount rule: A_mf_filter / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Alternating current (`mf_electricity`)

Native identity is CN, grid-average consumption mix to user, below 1 kV. It is not medium-voltage electricity or a universal supplier. Include milling, mixing, extraction, cooling, filtration, filling, warehouse handling, cleaning and allocated shared services once; internally generated compressed air is not a second purchase.

- Selected flow: Alternating current 50657322-939c-4829-a87b-47c093bfa6a7
- Flow property / unit: Energy / MJ
- Amount rule: A_mf_electricity / Q MJ
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-eiip-ink-manufacture-2005`

#### Outputs

##### Product flows

###### Gravure Ink (`mf_bulk`)

Internal quality-released bulk transfer P, not the terminal reference output. Preserve the native toluene-based low-viscosity production mix at plant; no native geography or CAS is specified. The paper and resin/pigment qualifiers come from this PCR and foreground records, not a more specific native grade.

- Selected flow: Gravure Ink c2ed843f-16bf-462a-8ff7-ae78e95e5c4c
- Flow property / unit: Mass / kg
- Amount rule: A_mf_bulk / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `wipo-py12-gravure-2004`

##### Waste flows

###### Rejected PY12 toluene gravure ink (`mf_reject`)

Discarded wet ink only, with actual receiving treatment operator and mass/composition; returned ink retained for rework stays internal and is not a waste output or new accepted production.

- Selected flow: Rejected PY12 toluene gravure ink
- Flow property / unit: Mass / kg
- Amount rule: A_mf_reject / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Spent glass grinding beads (`mf_beads_waste`)

Actual separated spent media to its recipient; distinguish adhering ink from dry bead mass and avoid duplicating the same residue in filter waste.

- Selected flow: Spent glass grinding beads
- Flow property / unit: Mass / kg
- Amount rule: A_mf_beads_waste / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manufacture`
- Sources: `epa-eiip-ink-manufacture-2005`

##### Elementary flows

###### Toluene to air (`mf_toluene_air`)

Actual after-control stack plus fugitive toluene, measured/speciated independently of total physical closure. Record medium, capture path and control performance; no assumption that all input solvent evaporates.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: A_mf_toluene_air / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-eiip-ink-manufacture-2005`

###### C.I. Pigment Yellow 12 dust to air (`mf_pigment_air`)

Uncaptured pigment-bearing airborne dust after control. Record actual composition and particle-size evidence; do not assume PM2.5 or turn captured filter material into an elementary emission.

- Selected flow: C.I. Pigment Yellow 12 dust to air
- Flow property / unit: Mass / kg
- Amount rule: A_mf_pigment_air / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-eiip-ink-manufacture-2005`

### Process: Filling, stock and factory-gate delivery (`delivery`)

#### Inputs

##### Product flows

###### Gravure Ink (`dp_bulk`)

Same physical P transfer as mf_bulk; preserve the same native limitations. Match lot and transferred burdens, then eliminate this paired internal transfer when consolidating. Opening/closing finished stocks and their carried burdens are separately reconciled in cp_delivery.

- Selected flow: Gravure Ink c2ed843f-16bf-462a-8ff7-ae78e95e5c4c
- Flow property / unit: Mass / kg
- Amount rule: A_dp_bulk / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `wipo-py12-gravure-2004`

###### Steel drum with closure (`dp_drum`)

One assembled solvent-compatible drum. Measure empty mass separately from net ink, retain actual reuse/return history and cleaning. A compatible Mass/kg identity for the complete drum remains to be verified. Record separately any actual non-integral packaging components.

- Selected flow: Steel drum with closure
- Flow property / unit: Mass / kg
- Amount rule: A_dp_drum / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `epa-eiip-ink-manufacture-2005`

#### Outputs

##### Product flows

###### Gravure Ink (`dp_delivered`)

Terminal Product output: exactly 1 kg net delivered liquid PY12 toluene publication-gravure ink; excludes packaging mass. Native identity remains low-viscosity toluene-based production mix at plant, geography unspecified; it supplies no recipe, loss, energy, supplier or application factor.

- Selected flow: Gravure Ink c2ed843f-16bf-462a-8ff7-ae78e95e5c4c
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `wipo-py12-gravure-2004`

##### Waste flows

###### Discarded PY12 gravure ink from filling and storage (`dp_loss`)

Actual wet loss or disposed expired ink with destination. Undelivered good stock is carried, not counted as delivered Q or discarded by default.

- Selected flow: Discarded PY12 gravure ink from filling and storage
- Flow property / unit: Mass / kg
- Amount rule: A_dp_loss / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `epa-eiip-ink-manufacture-2005`

##### Elementary flows

###### Toluene to air (`dp_toluene_air`)

Actual independently supported after-control filling, finished-storage and dispatch toluene releases. The environmental monitoring lead supplies species evidence to the dispatch owner; exclude sources already counted in manufacture or cleaning.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: A_dp_toluene_air / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `epa-eiip-ink-manufacture-2005`

### Process: Cleaning and collected waste management (`cleaning`)

#### Inputs

##### Product flows

###### Toluene (`cl_toluene`)

Separately acquired fresh cleaning toluene only; same CAS and native limitations as mf_toluene. Assign invoices/withdrawals disjointly between formulation and cleaning. Internal recirculation is not repeated external purchase.

- Selected flow: Toluene 33ac34b7-d691-4eda-8563-daef49a05157
- Flow property / unit: Mass / kg
- Amount rule: A_cl_toluene / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Tap water (`cl_water`)

Treated municipal water, production mix at plant; native geography unspecified and treatment varies by source. Ancillary aqueous cleaning/cooling make-up only if used, not a water-based ink carrier. Mass is the reference property; native secondary volume coefficient is not a measured site density.

- Selected flow: Tap water d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36
- Flow property / unit: Mass / kg
- Amount rule: A_cl_water / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Polypropylene cleaning wipe (`cl_wipe`)

Specific dry wipe material; independently weigh solvent retained in used wipes and do not procure it a second time.

- Selected flow: Polypropylene cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: A_cl_wipe / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

#### Outputs

##### Waste flows

###### Spent toluene cleaning liquor (`cl_spent_solvent`)

Whole collected liquid with resin/pigment content, water fraction and actual receiving operator. It is neither emitted to air nor credited as recovered solvent without a separate verified recovery system.

- Selected flow: Spent toluene cleaning liquor
- Flow property / unit: Mass / kg
- Amount rule: A_cl_spent_solvent / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Ink-contaminated cleaning wastewater (`cl_washwater`)

Whole actual aqueous waste to its recipient, with independently measured pollutants. Collection/transfer is a waste exchange, not direct discharge; model actual treatment and any verified releases separately.

- Selected flow: Ink-contaminated cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_cl_washwater / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Used polypropylene filter bag with retained ink (`cl_used_filter`)

Whole captured solid, filter polymer plus retained ink; identify composition, hazardous constituents, destination and receiving facility. Do not duplicate ink drained into spent cleaning liquor.

- Selected flow: Used polypropylene filter bag with retained ink
- Flow property / unit: Mass / kg
- Amount rule: A_cl_used_filter / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

###### Used polypropylene wipe with retained ink (`cl_used_wipe`)

One actual solid stream to its receiving facility; retain water/solvent subledgers and avoid counting the same collected material as an elementary flow.

- Selected flow: Used polypropylene wipe with retained ink
- Flow property / unit: Mass / kg
- Amount rule: A_cl_used_wipe / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

##### Elementary flows

###### Toluene to air (`cl_toluene_air`)

Independently quantified after-control cleaning/tank-storage fugitives not already in cp_air. Reconcile retained solvent in waste, product and inventory; residual uncertainty remains explicit.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: A_cl_toluene_air / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `epa-eiip-ink-manufacture-2005`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_trace | all inventory rows | Trace physical lots and causal service use before allocation. Retain every failed/zero-output run, test, cleaning and rework burden attributable to the selected product cohort. Assign shared services by measured machine time/load or another documented physical driver; never dilute with other colours or routes. No patent output yield is assumed. | epa-eiip-ink-manufacture-2005 |
| al_stock | manufacture; delivery | Maintain separate WIP, production-transfer and finished-stock ledgers and carried burden vectors by lot. Production transfer P is paired with its receipt, then cancelled in consolidation. Do not count P plus closing stock as two production outputs. Q remains actual net delivery; closing undelivered stock and its burdens are carried, never included in Q or granted an avoided-production credit. Opening stock delivered now brings its historical burdens. | epa-eiip-ink-manufacture-2005 |
| al_returns | delivery; cleaning | Link every return/reacceptance/rework event to its original lot and delivery. A return cancels the relevant delivery contribution and restores traceable stock and carried burdens; a later handover enters net delivered Q only after that cancellation, never as a second unique delivery. Returned reacceptance is not new production. Disclose cross-period reconciliation; nonpositive Q cannot be normalized. Captured residues or solvents are wastes unless actual coproduct functionality and receiving system are separately demonstrated; no default substitution credit. | epa-eiip-ink-manufacture-2005 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Protocol aggregation states the reporting basis only. Collection retains raw undivided numerators; each card A_r / Q and its aggregation basis are the same single cr_report_once operation in Calculation Rules, never sequential divisions.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_manufacture | manufacture | Material, WIP, P and rejects | batch ledger | lot; product/route/state; period; full supplied vehicle/pigment/toluene issues and returns; active/solvent/water assays; opening/closing WIP masses and carried burdens; P transfers; failures/zero output; rework links; beads/filter consumed; rejects and receivers | Owner: production/material-accounting lead. Calibrated weighing, issue/return slips, batch/QC sheets and opening/closing WIP counts; pair P by lot with delivery receipt. Retain all runs, including failed and zero-output runs. Retain undivided raw period numerator records, conversions and carried WIP/finished-stock burden vectors; do not execute A/Q during collection. | kg | Each batch and stock close | Complete actual period plus historical carry records | Selected ink line and causal shared services | per 1 kg reference flow | Scales; batch identity; assays; stock/burden ledger; acceptance and disposal receipts |
| cp_delivery | delivery | Finished stock, drums, Q and returns | delivery stock ledger | lot; P receipt; opening/closing finished mass and carried burdens; drum tare/closure; filled gross/net; accepted dispatch event; returns/original event; reacceptance; storage residence/handling/filling loads; spills/expiry and receiver; positive net Q; after-control filling/storage toluene concentrations and measured integrated gas volumes | Owner: warehouse/dispatch controller. Use calibrated gross-minus-tare and signed factory-gate handover/return documents, unique event IDs and physical stock reconciliation; quality release alone is not delivery. Trace returns across periods and restored burdens; no reacceptance creates output. Retain actual included storage, packaging, handling and dispatch burdens. The environmental monitoring lead provides independent species/air-medium and control evidence for filling/storage/dispatch releases, including fugitive sources; no closure residual substitutes for measurement. Retain undivided raw period numerator records, conversions and carried WIP/finished-stock burden vectors; do not execute A/Q during collection. | kg; event; residence time | Each handover/return and stock close | Complete actual period and returned-lot history | Declared factory-gate handover; selected lots only | per 1 kg reference flow | Net weight/tare; signed receipts; unique IDs; physical stocks; historical burden vectors |
| cp_energy | manufacture | Purchased electricity for whole declared system | meter record | period; opening/closing kWh; submeter; voltage; CN provider/grid period; machine hours/load; milling/cooling/extraction/filling/storage/handling/cleaning allocations; historical stock energy burden | Owner: site energy engineer. Meter all included operations once and reconcile shared meter allocation without duplicating downstream row purchases; retain raw kWh, use mu_energy for MJ. A different voltage or country requires a compatible identity, not silent reuse of the CN below-1-kV native row. Retain undivided raw period numerator records, conversions and carried WIP/finished-stock burden vectors; do not execute A/Q during collection. | kWh; MJ | Continuous meters and each reporting close | Same complete period, plus carried-stock energy | All included operations at selected site | per 1 kg reference flow | Meter calibration; voltage; bills; causal allocation and no double counting |
| cp_air | manufacture | Manufacturing toluene and PY12 dust to air | species monitoring | species/CAS; medium; source; sampled concentrations; measured flow rates and duration or integrated volume; standard conditions; stack/fugitive split; capture; control inlet/outlet; retained solvent in ink/stocks/wastes; dust composition/size; detection limits | Owner: environmental monitoring lead. Retain independently supported species masses using measured concentrations and appropriately integrated gas volumes, or a verified species-specific model with all retention paths. Separate captured waste from air releases, do not infer pollutant mass from a total-mass or COD residual. Record actual high-impact impurity species as additional separate rows if present. Retain undivided raw period numerator records, conversions and carried WIP/finished-stock burden vectors; do not execute A/Q during collection. | kg; concentration; gas volume | Representative source campaigns linked to actual batches and period | Whole actual period including start-up/failure/cleaning interface | Manufacturing sources only; cp_cleaning handles disjoint cleaning sources | per 1 kg reference flow | Laboratory reports; species/medium; detection limits; gas integration; uncertainty |
| cp_cleaning | cleaning | Cleaning inputs, liquid/solid waste and cleaning emissions | cleaning and transfer record | event/lot; fresh toluene; water mass or volume/density/temperature; dry wipe; return loop; spent liquor/washwater/used filter/used wipe gross and composition; retained solvent/water; tank opening/closing; recipient/treatment; actual after-control cleaning toluene emission evidence | Owner: cleaning and waste coordinator. Weigh fresh supply and each separate captured liquid/solid stream; record receiving facility and actual treatment. Keep independent species analysis and cleaning source measurements with no overlap with cp_air. Closed circulation is internal; no automatic recovery yield or substitution credit. Retain undivided raw period numerator records, conversions and carried WIP/finished-stock burden vectors; do not execute A/Q during collection. | kg; m3 if measured | Each cleaning/transfer and tank close | Same complete actual period including failure/rework cleaning | Selected line plus causally allocated shared cleaning | per 1 kg reference flow | Weighing; composition; storage; manifests/recipient; species monitoring |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cr_match_ledgers | all inventory rows | Before normalization, construct raw attributable A_r for the delivered cohort from actual supplies and services plus opening WIP/finished-stock burden vectors and their historical records, less quantities/burdens genuinely retained in closing WIP/finished stocks. Trace actual returns and failure/rework causes; do not erase failures or invent negative burdens. Close physical production and stock accounts separately, pair mf_bulk with dp_bulk by P and cancel the internal transfer when consolidated. Unresolved stock/burden attribution is a data gap, never zero. | raw supplies; raw services; WIP records; finished-stock records; carried burden vectors; P; delivery events | A_r; positive Q | epa-eiip-ink-manufacture-2005 |
| cr_report_once | all inventory rows | For each exchange r report x_r = A_r / Q once, after raw unit conversion and lot/burden matching. Q is unique positive net actually delivered kg of the declared cohort after linked return cancellations; dp_delivered is 1 kg. Inventory amount cards and protocol aggregation refer to this same operation, not additional divisions. Never normalize failed runs separately or replace Q with P. | A_r; Q | x_r per 1 kg reference flow | epa-eiip-ink-manufacture-2005 |
| cr_physical_balances | manufacture; delivery | Before attribution or normalization, close physical kg ledgers: manufacturing opening WIP plus actual wet material input equals P plus closing WIP plus actual waste and air/water outlets. Separately, delivery opening bulk-buffer/filling-WIP/finished stock plus P and actual returns equals gross outward handovers plus closing bulk-buffer/filling-WIP/finished stock plus measured filling/storage waste and air outlets. Stock burdens travel with these same lots. P is an internal release, never a second terminal output; its inclusion does not authorize adding same-lot closing stock again as production. Net delivered Q follows the linked return convention in cp_delivery; it excludes every undelivered closing stock. Packaging has its own physical ledger, outside net ink mass. Species/element checks use independent assays and monitored species, not an unknown outlet fitted to either residual. | raw wet masses; P; WIP masses; finished stocks; gross handovers; linked returns; independent assays | separate physical mass balances | epa-eiip-ink-manufacture-2005 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify complete native names/routes/form/grade/geography/reference dimensions; qualify actual providers independently. Explicitly retain toluene residual classification debt, CN below-1-kV electricity limits and unspecified ink/water geography. Unresolved auxiliary UUIDs require later matching, not invented substitutions. | Direct native records; supplier documents; traceable exact support chain |
| dq_complete | all inventory rows | Preserve actual complete reporting period, matched product/route/state, failed and zero-output runs, rework/returns, opening/closing WIP and finished goods plus carried burdens. Record zero/absence with evidence and independently measured actual species; investigate mass/element residuals without fitting them. | Raw ledgers; historical burden vectors; QC; monitoring and uncertainty |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_gate | dp_delivered | Require a unique terminal Product output with the reference UUID and exactly 1 kg; both languages select dp_delivered. P transfers and stocks cannot be substituted for Q. Require positive matched net delivery, returned-event cancellation and stock/burden closure before accepting dataset amounts. | epa-eiip-ink-manufacture-2005 |
| val_quantities | all inventory rows | Verify complete raw numerator coverage, one raw conversion and one cr_report_once operation, paired/cancelled internal transfers, no repeated purchased formulation components, no duplicate return production and no omitted warehouse/dispatch/cleaning/failure burdens. Retain undelivered stocks and historical burdens separately. | epa-eiip-ink-manufacture-2005 |
| val_species | manufacture; cleaning | Validate physical mass/elements independently of actual species evidence. Require after-control medium, sampling/model basis, captured liquid/solid recipients and no assumed total-solvent release or recovery credit. Hazardous minor constituents cannot disappear by a generic mass cutoff. Unmeasured applicable pathways remain explicit gaps. | epa-eiip-ink-manufacture-2005 |
| val_route | all inventory rows | Reject incompatible colour/vehicle/milling form, water/UV/toner route, native hard CAS/grade/medium or reference dimension. Require the packaging reference dimension to support measured mass, including its declared closure coverage. A record UUID or schema pass alone does not establish scientific or supplier applicability. | wipo-py12-gravure-2004 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared paper publication-gravure ink input with the same formulation/state and actual delivery gate |
| allowed_use | Foreground study or qualified background use after full upstream, site, supplier, inventory-carry and waste-treatment matching |
| excluded_use | Universal printing ink; other colours/vehicles/routes; printed-area equivalence; legal/food-contact suitability; default recovery credit; science approval from technical checks |
| required_metadata | actual delivery gate and period; net Q and return convention; lot cohort; PY12 CAS/grade/surface treatment; vehicle resin chemistry and supplied solids; solvent/impurity composition; viscosity and temperature; pigment/nonvolatile fractions; paper publication-gravure use; plant and geography; below-1-kV CN electricity; drum specification; WIP/finished-stock and carried-burden records; capture/treatment recipients |
| required_quality_disclosure | Actual period, recipe, provider/voltage/geography, opening/closing stock and burden vectors, failed/zero-output/rework/return handling, included storage/packing/dispatch, species evidence, waste recipients, UUID gaps, uncertainty and explicit exclusions |
| update_trigger | Pigment/vehicle/solvent/form/route or delivery-gate change; native identity correction; material stock/burden or control-system change; new representative foreground evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-eiip-ink-manufacture-2005 | official_guidance | US EPA, EIIP Volume II Chapter 8, February 2005, sections 2.1-2.3 and 4-5. https://www.epa.gov/sites/production/files/2015-08/documents/ii08_feb2005.pdf | Manufacturing operations, filling, cleaning, source/species-specific emission assessment and material-balance cautions. US historical technical guidance; no adopted numeric emission/default loss/control factor, recipe or universal LCA stock-allocation formula. Raw stock/normalization protocols are explicit requirements of this PCR. |
| wipo-py12-gravure-2004 | literature | Ciba Specialty Chemicals, WO2004013237A1, Organic solvent-based printing inks, 12 February 2004, printed p15 (PDF p16), Comparative Examples A and B. https://patents.google.com/patent/WO2004013237A1/en | Primary patent original scanned publication acquired through Google Patents PDF mirror, visually verified p16. Supports PY12 dry pigment bead-milled into rosin-modified phenolic resin solution in toluene with additional toluene. Comparative laboratory examples only; does not establish factory quantities, yield, emissions, energy, contemporary supplier coverage or approval. Dye/carbinol embodiments excluded. |
