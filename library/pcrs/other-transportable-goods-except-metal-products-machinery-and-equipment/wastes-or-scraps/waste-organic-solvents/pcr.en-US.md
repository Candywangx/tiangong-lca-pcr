---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-organic-solvents
language: en-US
status: candidate
content_maturity: draft_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Waste organic solvents — segregated resin-contaminated acetone from FRP tool cleaning to regeneration reception

## 1. Scope and Applicability

This is a technical synthesis for one segregated acetone-dominant liquid waste stream formed by cleaning uncured styrene-containing unsaturated polyester resin from hand tools in open-mould FRP manufacture. It covers actual feed preparation and delivery until first quality release at an identified authorised regeneration receiver, before any distillation. Each concrete package establishes its real batch origin, liquid/solid/phase state, composition, safety and acceptance; no factory values or same-SKU equivalence are asserted. [epa-frp-1991; adeq-ranger-2020]

The selected stream is non-halogenated; verify segregation and actual contamination rather than infer this from acetone's molecular identity. UNSD's October 2026 explanation links 39940 to HS 2022 3825.41 and .49, covering halogenated and other waste organic solvents. This method selects only the stated acetone route within that family and preserves the June 2025 classification coordinate. R11 and R13 describe off-site recycling at the same Arkansas facility in different periods; its earlier R4 describes on-site recovery. They establish historical route evidence, not independent plants, this package's receiver, or current permission. [un-cpc3-2025; un-cpc3-2026; adeq-ranger-2020; adeq-ranger-2022; adeq-ranger-r4]

Exclude ethyl acetate or other principal solvents, mixed-solvent selection, unused solvent, finished regenerated acetone, a solvent-distillation service, resin-production sludge or still bottoms, clinical/pharmaceutical waste and gaseous VOC. CPC3.0 p205 lists 39940 separately from 39950 and clinical/pharmaceutical waste; that listing is classification context, not a recipe or a claim that every 39940 stream uses this method. [un-cpc3-2025]

The EPA guide also describes other solvents, emulsifiers, on-site stills and resin-dependent runaway-reaction concerns. Those adjacent alternatives are not silently included. Historical advice about solvent concentration, recovery or fire behaviour is not a default acceptance threshold for this wet feed. Actual receiving tests and permissions control the terminal gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-organic-solvents |
| classification_refs | CPC 3.0 39940, accepted narrower spent solvent feed at first off-site receiver acceptance under docs/adr/2026-11-22-accept-cpc-39940-segregated-spent-acetone-at-offsite-regeneration-reception.md |
| covered_products | One source-segregated non-halogenated acetone-dominant wet resin-contaminated liquid after identified FRP hand-tool cleaning, supplied for actual solvent regeneration |
| excluded_products | Halogenated waste solvents; other principal solvents; virgin or regenerated solvent product; distillation service; still bottoms; chemical sludge; clinical/pharmaceutical waste; air emissions |
| representative_product | Resin-contaminated spent acetone liquid from FRP tool cleaning |
| production_route | Actual supplied acetone use on uncured polyester-resin tools; segregated collection; only actual separation; storage and batch testing; transport and authorised receiver acceptance before regeneration |
| market_state | Whole wet contaminated liquid recovery feed at receiving acceptance; measured composition and material/service status; not pure acetone |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide source-traceable resin-contaminated spent acetone accepted for actual regeneration |
| How much | 1 kg net whole wet liquid first quality-released for the selected cohort within the declared period at the actual receiving gate |
| How well | Batch-specific assay and receiver-approved contamination, reactivity, safe-container and authorised receiving requirements; no default concentration or yield |
| How long or cycle | One unique first-release cohort; preserve actual storage/transport duration and original history; no new output from retest or return |
| reference_flow_link | accepted_feed |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Resin-contaminated spent acetone liquid from FRP tool cleaning |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source plant and open-mould line; tool-cleaning campaign; solvent prior use and supply formulation; principal acetone assay; non-halogenated segregation and contamination evidence; water/phase state; resin and styrene assay; identified oils and solids; wet/dry test basis; actual volume/density/temperature if converted; original cohort and per-exchange history; Q first-release gate and declared period; WIP/FG opening and closing; all failures and Q0; receiver identity and authorisation; preacceptance and actual acceptance/rejection; real route and provider scope; each component P/N_ext/ER and original dispatch; owner and included service scope; true incremental services and original Qc; each actual emission species and medium; allocation goal and evidence; unbound core Product identity |

Declare every qualifier in dataset metadata, reference-flow description, process notes or an equivalent consumed field. The reference has no confirmed compatible Tiangong Product UUID; this is an explicit core identity limitation, not a claim that a generic solvent UUID fits.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_wet_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use whole wet accepted liquid net of all container components. Q includes only this cohort's net mass first accepted during the declared period. Its part remaining in closing FG is already counted once; opening carried-over FG, previously released returns and closing stock from older cohorts are excluded from current Q. No pure-acetone-equivalent or dry-resin denominator. |
| wet_assay | all wet solvent rows | Mass | kg | Measure water, principal acetone, styrene and actual residues/other identified species as subaccounts of the same whole flow. Assay fractions sum consistently with measured uncertainty; no extra constituent purchases/outputs. Any oil/solid is identified, not a catch-all balance residual. |
| actual_conversions | all inventory rows | Actual property | declared numerator unit | Keep raw integrated readings and true rates distinct; use independent material/state-specific density only where volume-to-mass is needed. Measure component mass for actual article counts. Convert and allocate before the sole §8 division; no assumed plant values. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied acetone entering the identified uncured-polyester tool-cleaning use, plus actual tool residue and their linked histories |
| starting_condition_role | Observable formation inlet, not purchased finished waste and not a zero-burden declaration |
| product_classification_scope | Narrower methodological scope within CPC3.0:39940; keep 39950 and clinical/pharmaceutical exclusions |
| recursive_input_rule | Same-batch dirty/ready/returned solvent preserves original composition and per-exchange vector; internal transfers cancel, no recursive new supplier or Q |
| upstream_dataset_requirement | One compatible provider per actual supplied formulation or service; disclose previous use/material status and supplier-included scope; inherit once with complementary attribution |
| disclosure | Actual source, wet state and assay, physical and burden gates, receiver and acceptance, all WIP/FG and failures, component receipts/ownership/history, incremental services, core and auxiliary identity gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_single_route | all processes | Model only segregated liquid spent acetone from cleaning uncured styrene-containing unsaturated-polyester resin from hand tools in one identified open-mould FRP production operation. Record the source line and cleaning campaign. Acetone CAS67-64-1 identifies the principal solvent constituent, not the whole contaminated supply. Establish its predominance by batch assay; do not mix solvent families or select another principal solvent within this record. | un-cpc3-2025; epa-frp-1991; adeq-ranger-2020 |
| b_formation_history | clean; prepare | Start with the actual supplied acetone entering its identified cleaning use and the actual uncured resin residue transferred from tools. Describe that use before calling the liquid waste. Record gross physical amounts separately from the attributed burden. Link solvent manufacture/supply and the already incurred use history through one exchange-specific vector and cohort; neither an internal dirty-solvent transfer nor withdrawal from stores is a new purchase. Do not charge a purchased resin formulation again as separate polyester and styrene inputs. | epa-frp-1991; ilcd-attributional-2010 |
| b_actual_preparation | prepare; delivery | Include closed collection, actual settling/decanting or filtration only where performed, protected storage, sampling, analysis, filling, labelling, weighing, loading and actual transport to the identified authorised solvent-regeneration receiver. Keep each separation loss and receiving rejection. No evaporation-to-disposal, solvent substitution, resin curing, distillation or regenerated-solvent production is assumed inside this gate. Source descriptions establish a feasible technical route, not a present factory inventory or a receiver permit. | epa-frp-1991; adeq-ranger-2020 |
| b_release_gate | accepted_feed | Q is the sum of this cohort's net whole-liquid mass first quality-released as regeneration feed during the declared period at the actual receiver acceptance gate. Identify every batch and first-acceptance date once. Producer ready stock still awaiting that first receiving acceptance remains WIP. Only the part of this period's first-accepted cohort remaining in closing FG has already contributed to Q once and must not be added again. Opening carried-over FG, previously released returns and closing stock from older cohorts never enter current Q. Shipment, retesting, reacceptance, ownership change and return create no new Q. V is generator-to-receiver gross dispatch, not the receiver's subsequent D_after; reverse movements are also physical ledgers separate from Q. A concrete dataset needs actual receiver identity, authorisation for this stream, preacceptance specification, weighbridge and acceptance/rejection records. | epa-frp-1991; adeq-ranger-2020 |
| b_all_events | all processes | Retain start-up, shutdown, idle storage, failed campaigns, spills, sampling, cleaning and rework including Q=0 periods. Record opening/closing solvent, residue and WIP by composition and inherited exchange vector. Cancel internal transfers in the combined physical gate and transfer the same burden once. Post-release warehouse, handling and dispatch services remain on their original cohort Qc; record actual duration H as an allocation driver, never as the production denominator. | epa-frp-1991; ilcd-attributional-2010 |
| b_component_receipts | packaging; attached components | For each actual packaging/container/attached component collect every external first physical receipt in a material/form/type/direction-specific atomic row: P is new procurement, N_ext is first non-procurement receipt including supplier-accompanied, entrusted, borrowed or leased articles, and ER is a true external return with prior outward dispatch. They are mutually exclusive. A component included in the whole purchased consignment price is procurement P even without a separate invoice. Opening stock cannot replace current receipts; internal stores/WIP/FG issues and reuse cancel. A missing actual receipt interface or measured quantity makes the concrete package incomplete; a symbol or copied purchase UUID is insufficient. | epa-frp-1991; ilcd-attributional-2010 |
| b_owner_scope | packaging; contract manufacturing; services | Independently record ownership, original cohort, inherited per-exchange vector, supplier-included manufacture/transport/cleaning scope and actual incremental rental/return service. First non-purchased receipt never implies zero burden, a fresh product Q, ownership transfer or credit. Assign acquisition or inherited component burdens once, then only real incremental services, across contract manufacturing and service interfaces as well as owned operations. Add a new component X only for an actual additional material; same-side duplication is removed by exact event identity, not by subtracting unrelated receipts. | ilcd-attributional-2010 |
| b_atomic_completeness | all exchanges | Cards are concrete candidate interfaces, conditional on actual occurrence. Add a separate specific card, measured amount and provider/scope for every additional actual ingredient, oil, glass fibre, chemical, fuel, heat source, packaging part, waste or emitted species/medium; never hide them in other, total VOC or a zero bundle. Missing actual interfaces are incompleteness, not not_applicable. Whole wet solvent and its acetone/water/resin assay subaccounts are non-additive. One exchange has one actual provider; imported supplier burdens must not duplicate explicit foreground operations. | epa-frp-1991 |
| b_evidence_route | clean; prepare; delivery | Separate the actual source use, whole contaminated waste, receiving feed and downstream recovered solvent/service. EPA's off-site reclamation discussion establishes a possible route, not this lot's recovery yield, solvent fraction or air release. R11/R13 condition 37 distinguishes incoming pollutant, waste dispatched, measured composition and waste awaiting shipment; its rolling regulatory emissions credit is neither an LCA substitution credit nor a speciated measured air emission. Verify non-halogenated segregation and receiver compatibility. | epa-frp-1990; epa-frp-1991; adeq-ranger-2020; adeq-ranger-2022 |
| b_actual_handover | outsourced preparation; receiving release | Identify the actual site and contractor performing each preparation, packaging and receiving step, with measured handover and provider-included scope. Contracting, invoicing, stock transfer, resale or a repeated receiving test does not manufacture a new feed cohort. This method's reporting output is the unique first receiving acceptance of the specified waste; it is not manufacture of fresh or regenerated solvent. Annual waste reports can corroborate generator, reporting-year quantity and management destination, but cannot replace consignment weighing, batch composition or actual acceptance. | adeq-ranger-2022; epa-biennial-report |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| clean | Acetone use and dirty-liquid formation | required | Actual route, conditional suboperations only when performed | Physical and burden gates preserved separately | per 1 kg reference flow |
| prepare | Actual separation, storage and supply preparation | required | Actual route, conditional suboperations only when performed | Physical and burden gates preserved separately | per 1 kg reference flow |
| packaging | Atomic container/component receipts and movements | required | Actual route, conditional suboperations only when performed | Physical and burden gates preserved separately | per 1 kg reference flow |
| delivery | Actual haul and first receiving release | required | Actual route, conditional suboperations only when performed | Physical and burden gates preserved separately | per 1 kg reference flow |

All following cards report the same one-time §8 result per 1 kg reference flow. Collection protocols retain absolute raw events; conditional cards are not default zeroes or claims of installed equipment. Add every actual missing material/form/type-specific interface before treating a concrete package as complete. Do not add whole wet streams to their composition subaccounts.

### Process: Acetone use and dirty-liquid formation (`clean`)

#### Inputs

##### Product flows

###### Actual supplied cleaning acetone (`acetone_supply`)

One whole supplied solvent formulation at the cleaning-use inlet, with supplier assay and actual virgin/regenerated origin. Record its complete supplied mass and upstream vector once. A broad acetone Product identity can support the chemical, but its wafer-use description alone neither establishes nor disproves the actual supplied grade/formulation. Verify complete supplier scope before binding; a fixed 5 mol/L hydrometallurgical solution cannot substitute for an unmeasured cleaning formulation. No neat-solvent density or purity is assumed.

- Selected flow: Acetone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_formation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formation`
- Sources: `epa-frp-1991`

###### Residue transferred from the tools (`tool_resin_residue`)

Weigh/otherwise trace the actual whole formulated residue removed from the identified tools into this cleaning campaign. It is a transfer from the preceding lay-up operation, not a new resin purchase; its historical vector has an explicit parent allocation. Polyester, styrene and additives are non-additive assay subaccounts. Disclose actual catalysts/fillers and retained glass as distinct additional actual interfaces if they cross separately.

- Selected flow: Uncured styrene-containing unsaturated polyester resin residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_formation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formation`
- Sources: `epa-frp-1991`

##### Waste flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

##### Elementary flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

#### Outputs

##### Product flows

###### Internal dirty-liquid transfer (`dirty_transfer_out`)

Measure the whole wet liquid leaving the cleaning-use gate for preparation, before any downstream separation. This is an internal matched transfer to dirty_transfer_in. It cancels at the combined gate with its exchange vector and never adds Q or a second supplier. Dissolved resin and water are not additional outputs on top of this wet amount.

- Selected flow: Resin-contaminated spent acetone liquid from FRP tool cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_formation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formation`
- Sources: `epa-frp-1991`

##### Waste flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

##### Elementary flows

###### Actual acetone release to external air (`use_acetone_air`)

CAS67-64-1; Elementary emission to air, unspecified, not indoor workplace air, water, soil or long-term/stratospheric air. Measure this stage and actual discharge medium; use a more specific compatible compartment when known. Native synonym lists include poor translations, but formal acetone identity and CAS are controlling; they do not license other ketones. Reconcile volatilised acetone with measured batch inventories independently of any total VOC index; no default evaporation fraction.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_emissions_clean. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions_clean`
- Sources: `epa-frp-1991`

###### Actual styrene release to external air (`use_styrene_air`)

CAS100-42-5; only actual styrene monomer carried from the resin into this stage and emitted to air, unspecified. No styrene epoxide/alpha-methylstyrene, indoor-air or resin-polymer mass substitution. Verify formal native name, all comments and compartment; poor synonym terms do not broaden the species. Collect actual speciated release; a total VOC value or resin mass is not styrene emission. Add any other real emitted species/medium individually.

- Selected flow: styrene `08a91e70-3ddc-11dd-9910-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_emissions_clean. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions_clean`
- Sources: `epa-frp-1991`

### Process: Actual separation, storage and supply preparation (`prepare`)

#### Inputs

##### Product flows

###### Internal dirty-liquid receipt (`dirty_transfer_in`)

Use the same measured batch and vector as dirty_transfer_out. This internal inlet does not imply external purchase, zero-burden waste, newly manufactured acetone or recovered product. Track actual opening WIP and contamination acquired during storage separately.

- Selected flow: Resin-contaminated spent acetone liquid from FRP tool cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_preparation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_preparation`
- Sources: `epa-frp-1991`

###### Low-voltage grid electricity if actually supplied (`preparation_electricity`)

This conditional Product identity describes CN grid-average consumption mix delivered to a user at <1 kV, not a generation technology or an unbundled transmission service. Verify actual geography and provider coverage independently; another geography or voltage requires its own compatible identity. Its native reference property is Net calorific value and its reporting unit is MJ; this is provider metadata, not a claim that an electricity meter measures calorific value. Collect metered electrical Energy in kWh independently, with Technical Energy `f6811440-ee37-11de-8a39-0800200c9a66` and Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` supporting the MJ/kWh conversion. A shared unit group alone cannot establish another provider's native property. Meter actual pumping/ventilation/analysis/filling and allocated idle/cleanup electricity; historical US observations supply no factory consumption or provider match. Use the exact native English and Chinese names of the selected dataset in the concrete package.

- Selected flow: Electricity, alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_utilities. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `epa-frp-1991`

###### Potable cleanup water if actually used (`cleanup_water`)

Conditional separate potable treated municipal/public supply for actual cleaning, not a default dilution ingredient for the solvent feed. Native Product Mass/kg is the reference; secondary Volume coefficient is not evidence for solvent or site water density. Verify actual supplier, treatment/quality and geographic match; do not use this UUID for direct environmental water withdrawal, DI water or wastewater. Collect actual mass or independently justified conversion and every contaminated-water destination.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_utilities. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `epa-frp-1991`

###### Actual replaceable filtration bag (`filter_bag`)

Only if this actual bag material/form is used during receiver-approved filtration. Record clean bag mass and each replacement, retained solvent and solids separately in the spent whole bag. A molded polypropylene diaphragm is not this felt filter. A different medium/material or unfiltered route requires its own actual interface or documented absence; this card is not evidence that filtering occurred.

- Selected flow: Polypropylene felt solvent filtration bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_preparation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_preparation`
- Sources: `epa-frp-1991`

##### Waste flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

##### Elementary flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

#### Outputs

##### Product flows

###### Pending-acceptance supply transfer (`ready_transfer_out`)

Whole wet prepared liquid with batch assay and measured net mass. It remains WIP until first acceptance at the actual regeneration receiver. Match ready_transfer_in; internal gross movement and its burden cancel. Sampling, rejects and evaporative losses are separate measured outlets and do not become this supply.

- Selected flow: Resin-contaminated spent acetone liquid from FRP tool cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_preparation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_preparation`
- Sources: `epa-frp-1991`

##### Waste flows

###### Actual separated wet resin residue (`wet_resin_residue`)

Only an actual settling/decanting/filtration outlet, with wet mass, acetone, styrene, water and solids subaccounts and its actual hazardous-waste receiver. Do not create a downstream distillation bottom here or substitute water-treatment sludge. Unseparated contamination remains in the whole solvent feed, not both outlets.

- Selected flow: Wet uncured polyester resin separation residue containing acetone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_preparation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_preparation`
- Sources: `epa-frp-1991`

###### Actual discarded whole filter bag (`spent_filter_bag`)

Conditional whole discarded bag plus retained liquid/solids; distinguish clean bag tare and wet contents as non-additive subaccounts. Do not also report its retained residue in wet_resin_residue. Record actual destination and treatment scope.

- Selected flow: Acetone-contaminated polypropylene felt filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_preparation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_preparation`
- Sources: `epa-frp-1991`

###### Actual segregated cleanup effluent (`cleanup_effluent`)

Only actual separately collected aqueous cleaning effluent, with measured wet mass/composition and actual external treatment provider. It is neither environmental water emission nor regeneration feed by default. No intentional dilution or sewer disposal is authorised by this method; any real aqueous-phase separation has its own measured outlet.

- Selected flow: Acetone-contaminated aqueous equipment-cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_preparation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_preparation`
- Sources: `epa-frp-1991`

###### Destructively tested solvent sample (`solvent_sample`)

Measure whole liquid removed for destructive analysis and its actual laboratory waste route; assays are not further mass outputs. A non-destructive sample physically returned is reconciled with the original batch, not a new receipt/purchase or Q.

- Selected flow: Resin-contaminated spent acetone analytical sample waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_preparation. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_preparation`
- Sources: `epa-frp-1991`

##### Elementary flows

###### Actual acetone release to external air (`prep_acetone_air`)

CAS67-64-1; Elementary emission to air, unspecified, not indoor workplace air, water, soil or long-term/stratospheric air. Measure this stage and actual discharge medium; use a more specific compatible compartment when known. Native synonym lists include poor translations, but formal acetone identity and CAS are controlling; they do not license other ketones. Reconcile volatilised acetone with measured batch inventories independently of any total VOC index; no default evaporation fraction.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_emissions_prepare. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions_prepare`
- Sources: `epa-frp-1991`

###### Actual styrene release to external air (`prep_styrene_air`)

CAS100-42-5; only actual styrene monomer carried from the resin into this stage and emitted to air, unspecified. No styrene epoxide/alpha-methylstyrene, indoor-air or resin-polymer mass substitution. Verify formal native name, all comments and compartment; poor synonym terms do not broaden the species. Collect actual speciated release; a total VOC value or resin mass is not styrene emission. Add any other real emitted species/medium individually.

- Selected flow: styrene `08a91e70-3ddc-11dd-9910-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_emissions_prepare. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions_prepare`
- Sources: `epa-frp-1991`

### Process: Atomic container/component receipts and movements (`packaging`)

#### Inputs

##### Product flows

###### Unlined steel solvent shipping drum body — New procurement receipt (`drum_p`)

Conditional only on actual use of the actual approved unlined steel body; exclude detachable closure/gasket/label tare. P only: new procurement, including the component cost inside a whole purchased consignment. Retain its own receipt and measured net component mass; no ER or N_ext is relabelled as purchase. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Unlined steel solvent shipping drum body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Unlined steel solvent shipping drum body — First external non-procurement receipt (`drum_n`)

Conditional only on actual use of the actual approved unlined steel body; exclude detachable closure/gasket/label tare. N_ext only: first supplier-accompanied, entrusted, borrowed or leased physical receipt with no prior outward dispatch of that same article. Collect its real material/type and quantity, owner, original cohort, inherited exchange vector and included supplier scope; do not copy the P flow binding or invent a purchase/return. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Unlined steel solvent shipping drum body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Unlined steel solvent shipping drum body — True external return received (`drum_er`)

Conditional only on actual use of the actual approved unlined steel body; exclude detachable closure/gasket/label tare. ER only: prove the corresponding prior outward dispatch of the same identified article. Preserve original cohort and remaining vector, add only real incremental return/cleaning service. This is not a first non-purchase receipt or a fresh procurement load. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Unlined steel solvent shipping drum body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Steel solvent-drum closure — New procurement receipt (`closure_p`)

Conditional only on actual use of the actual separate steel closure including its defined integral metal parts; exclude separate gasket. P only: new procurement, including the component cost inside a whole purchased consignment. Retain its own receipt and measured net component mass; no ER or N_ext is relabelled as purchase. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Steel solvent-drum closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Steel solvent-drum closure — First external non-procurement receipt (`closure_n`)

Conditional only on actual use of the actual separate steel closure including its defined integral metal parts; exclude separate gasket. N_ext only: first supplier-accompanied, entrusted, borrowed or leased physical receipt with no prior outward dispatch of that same article. Collect its real material/type and quantity, owner, original cohort, inherited exchange vector and included supplier scope; do not copy the P flow binding or invent a purchase/return. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Steel solvent-drum closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Steel solvent-drum closure — True external return received (`closure_er`)

Conditional only on actual use of the actual separate steel closure including its defined integral metal parts; exclude separate gasket. ER only: prove the corresponding prior outward dispatch of the same identified article. Preserve original cohort and remaining vector, add only real incremental return/cleaning service. This is not a first non-purchase receipt or a fresh procurement load. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Steel solvent-drum closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### PTFE solvent-drum closure gasket — New procurement receipt (`gasket_p`)

Conditional only on actual use of the actual separate PTFE gasket with verified composition and waste compatibility; no assumed elastomer equivalence. P only: new procurement, including the component cost inside a whole purchased consignment. Retain its own receipt and measured net component mass; no ER or N_ext is relabelled as purchase. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: PTFE solvent-drum closure gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### PTFE solvent-drum closure gasket — First external non-procurement receipt (`gasket_n`)

Conditional only on actual use of the actual separate PTFE gasket with verified composition and waste compatibility; no assumed elastomer equivalence. N_ext only: first supplier-accompanied, entrusted, borrowed or leased physical receipt with no prior outward dispatch of that same article. Collect its real material/type and quantity, owner, original cohort, inherited exchange vector and included supplier scope; do not copy the P flow binding or invent a purchase/return. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: PTFE solvent-drum closure gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### PTFE solvent-drum closure gasket — True external return received (`gasket_er`)

Conditional only on actual use of the actual separate PTFE gasket with verified composition and waste compatibility; no assumed elastomer equivalence. ER only: prove the corresponding prior outward dispatch of the same identified article. Preserve original cohort and remaining vector, add only real incremental return/cleaning service. This is not a first non-purchase receipt or a fresh procurement load. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: PTFE solvent-drum closure gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Adhesive paper solvent-waste identification label — New procurement receipt (`label_p`)

Conditional only on actual use of one supplied adhesive-paper label article; its paper/adhesive composition is a non-additive subaccount. P only: new procurement, including the component cost inside a whole purchased consignment. Retain its own receipt and measured net component mass; no ER or N_ext is relabelled as purchase. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Adhesive paper solvent-waste identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Adhesive paper solvent-waste identification label — First external non-procurement receipt (`label_n`)

Conditional only on actual use of one supplied adhesive-paper label article; its paper/adhesive composition is a non-additive subaccount. N_ext only: first supplier-accompanied, entrusted, borrowed or leased physical receipt with no prior outward dispatch of that same article. Collect its real material/type and quantity, owner, original cohort, inherited exchange vector and included supplier scope; do not copy the P flow binding or invent a purchase/return. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Adhesive paper solvent-waste identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Adhesive paper solvent-waste identification label — True external return received (`label_er`)

Conditional only on actual use of one supplied adhesive-paper label article; its paper/adhesive composition is a non-additive subaccount. ER only: prove the corresponding prior outward dispatch of the same identified article. Preserve original cohort and remaining vector, add only real incremental return/cleaning service. This is not a first non-purchase receipt or a fresh procurement load. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Adhesive paper solvent-waste identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Incremental container return service (`return_service`)

Only an actual additional contracted empty-drum movement not already included in the incoming supplier or main haul service. Record real distance/gross empty load and article cohort with one provider. No rental duration is converted to new drums or new solvent output; separately expose real rental/cleaning service if incurred and not already covered.

- Selected flow: Road freight service returning empty steel solvent drums
- Flow property / unit: Transport service / tkm
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_service_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service_packaging`
- Sources: `ilcd-attributional-2010`

##### Waste flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

##### Elementary flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

#### Outputs

##### Product flows

###### Unlined steel solvent shipping drum body — Component carried on gross outward dispatch (`drum_s`)

Conditional only on actual use of the actual approved unlined steel body; exclude detachable closure/gasket/label tare. S only: measure the component accompanying every gross outward content shipment including pending/failed/reversed batches, separately from net solvent Q. Never count the same outward movement as EO as well. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Unlined steel solvent shipping drum body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Unlined steel solvent shipping drum body — Separate outward return (`drum_eo`)

Conditional only on actual use of the actual approved unlined steel body; exclude detachable closure/gasket/label tare. EO only: actual separate outward return to its owner/provider, excluding S. Preserve article event identity and vector once; no negative acquisition or automatic credit. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Unlined steel solvent shipping drum body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Steel solvent-drum closure — Component carried on gross outward dispatch (`closure_s`)

Conditional only on actual use of the actual separate steel closure including its defined integral metal parts; exclude separate gasket. S only: measure the component accompanying every gross outward content shipment including pending/failed/reversed batches, separately from net solvent Q. Never count the same outward movement as EO as well. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Steel solvent-drum closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Steel solvent-drum closure — Separate outward return (`closure_eo`)

Conditional only on actual use of the actual separate steel closure including its defined integral metal parts; exclude separate gasket. EO only: actual separate outward return to its owner/provider, excluding S. Preserve article event identity and vector once; no negative acquisition or automatic credit. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Steel solvent-drum closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### PTFE solvent-drum closure gasket — Component carried on gross outward dispatch (`gasket_s`)

Conditional only on actual use of the actual separate PTFE gasket with verified composition and waste compatibility; no assumed elastomer equivalence. S only: measure the component accompanying every gross outward content shipment including pending/failed/reversed batches, separately from net solvent Q. Never count the same outward movement as EO as well. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: PTFE solvent-drum closure gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### PTFE solvent-drum closure gasket — Separate outward return (`gasket_eo`)

Conditional only on actual use of the actual separate PTFE gasket with verified composition and waste compatibility; no assumed elastomer equivalence. EO only: actual separate outward return to its owner/provider, excluding S. Preserve article event identity and vector once; no negative acquisition or automatic credit. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: PTFE solvent-drum closure gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Adhesive paper solvent-waste identification label — Component carried on gross outward dispatch (`label_s`)

Conditional only on actual use of one supplied adhesive-paper label article; its paper/adhesive composition is a non-additive subaccount. S only: measure the component accompanying every gross outward content shipment including pending/failed/reversed batches, separately from net solvent Q. Never count the same outward movement as EO as well. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Adhesive paper solvent-waste identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Adhesive paper solvent-waste identification label — Separate outward return (`label_eo`)

Conditional only on actual use of one supplied adhesive-paper label article; its paper/adhesive composition is a non-additive subaccount. EO only: actual separate outward return to its owner/provider, excluding S. Preserve article event identity and vector once; no negative acquisition or automatic credit. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Adhesive paper solvent-waste identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

##### Waste flows

###### Unlined steel solvent shipping drum body — Actual discarded component (`drum_w`)

Conditional only on actual use of the actual approved unlined steel body; exclude detachable closure/gasket/label tare. W only: actual discard to a named waste receiver. Record clean component mass separately from adhering solvent/resin and its own whole-contaminated-article waste measurement, without duplicating those contents elsewhere. Retain residual burden and real treatment scope. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Spent unlined steel solvent shipping drum body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Steel solvent-drum closure — Actual discarded component (`closure_w`)

Conditional only on actual use of the actual separate steel closure including its defined integral metal parts; exclude separate gasket. W only: actual discard to a named waste receiver. Record clean component mass separately from adhering solvent/resin and its own whole-contaminated-article waste measurement, without duplicating those contents elsewhere. Retain residual burden and real treatment scope. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Spent steel solvent-drum closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### PTFE solvent-drum closure gasket — Actual discarded component (`gasket_w`)

Conditional only on actual use of the actual separate PTFE gasket with verified composition and waste compatibility; no assumed elastomer equivalence. W only: actual discard to a named waste receiver. Record clean component mass separately from adhering solvent/resin and its own whole-contaminated-article waste measurement, without duplicating those contents elsewhere. Retain residual burden and real treatment scope. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Spent ptfe solvent-drum closure gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

###### Adhesive paper solvent-waste identification label — Actual discarded component (`label_w`)

Conditional only on actual use of one supplied adhesive-paper label article; its paper/adhesive composition is a non-additive subaccount. W only: actual discard to a named waste receiver. Record clean component mass separately from adhering solvent/resin and its own whole-contaminated-article waste measurement, without duplicating those contents elsewhere. Retain residual burden and real treatment scope. All receipts and outward events are measured individually and close with empty/WIP/FG/reusable opening/closing stocks in the same physical gate. Whole assemblies are disaggregated from supplier mass evidence; do not assume a drum size or mass.

- Selected flow: Spent adhesive paper solvent-waste identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_packaging. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

##### Elementary flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

### Process: Actual haul and first receiving release (`delivery`)

#### Inputs

##### Product flows

###### Pending-acceptance supply receipt (`ready_transfer_in`)

Receive the identical internal pending-feed batch and vector from ready_transfer_out. Retain all outbound and reverse movements with gross contents/packaging separately. Neither transport nor reweighing creates a new provider, procurement event or Q.

- Selected flow: Resin-contaminated spent acetone liquid from FRP tool cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_delivery. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_delivery`
- Sources: `epa-frp-1991`

###### Actual external hazardous-feed haul (`haul_feed`)

One real contracted hauler for the identified route to the authorised receiver. Collect actual distance, gross carried content plus packaging mass, loading constraint, vehicle and rejected/empty movements; retain tonne-kilometres and provider scope. Carrier fuel/combustion already in the service is not duplicated as foreground diesel/exhaust. If transport is own-operated instead, expose each actual fuel and exhaust species before use.

- Selected flow: Road freight transport of drummed resin-contaminated acetone waste
- Flow property / unit: Transport service / tkm
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_delivery. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_delivery`
- Sources: `epa-frp-1991`; `ilcd-attributional-2010`

##### Waste flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

##### Elementary flows

No default exchange in this group; every actual occurrence requires its own atomic card and measurement.

#### Outputs

##### Product flows

###### First released feed at actual receiving gate (`accepted_feed`)

The complete wet feed first accepted for solvent regeneration, including measured water and dissolved/suspended contaminants, with an actual lawful receiver and stream-specific acceptance. CAS67-64-1 denotes its principal acetone constituent only. This Product-facing reference has no verified compatible native UUID; do not substitute pure acetone, regenerated solvent, a Waste flow, an air emission or a distillation service. The core identity remains unresolved. Q includes only this cohort's first-accepted net mass within the declared period, excluding packaging and repeat acceptance. The part of that mass retained in closing FG is counted once already, never added again. Opening FG, previously released returns and older-cohort closing stock are not current Q.

- Selected flow: Resin-contaminated spent acetone liquid from FRP tool cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: `cp_release`
- Sources: `epa-frp-1991`; `adeq-ranger-2020`

##### Waste flows

###### Actual failed or receiving-rejected liquid (`rejected_feed`)

Whole off-spec liquid actually sent to another authorised waste-management route, with the same source/assay history. A returned batch still awaiting remediation remains WIP rather than this external outlet. Neither rework nor later acceptance yields Q twice. Include real sampling withdrawals as their own specific measured waste interface before completing a data package.

- Selected flow: Rejected resin-contaminated spent acetone liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_delivery. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_delivery`
- Sources: `epa-frp-1991`

##### Elementary flows

###### Actual acetone release to external air (`gate_acetone_air`)

CAS67-64-1; Elementary emission to air, unspecified, not indoor workplace air, water, soil or long-term/stratospheric air. Measure this stage and actual discharge medium; use a more specific compatible compartment when known. Native synonym lists include poor translations, but formal acetone identity and CAS are controlling; they do not license other ketones. Reconcile volatilised acetone with measured batch inventories independently of any total VOC index; no default evaporation fraction.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_emissions_delivery. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions_delivery`
- Sources: `epa-frp-1991`

###### Actual styrene release to external air (`gate_styrene_air`)

CAS100-42-5; only actual styrene monomer carried from the resin into this stage and emitted to air, unspecified. No styrene epoxide/alpha-methylstyrene, indoor-air or resin-polymer mass substitution. Verify formal native name, all comments and compartment; poor synonym terms do not broaden the species. Collect actual speciated release; a total VOC value or resin mass is not styrene emission. Add any other real emitted species/medium individually.

- Selected flow: styrene `08a91e70-3ddc-11dd-9910-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s single §8 reporting result from the absolute records in cp_emissions_delivery. No second normalization.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emissions_delivery`
- Sources: `epa-frp-1991`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_goal | attributional inventory | Declare an attributional study and the material/waste status at each real gate. Identify the true common process and technically comparable solvent quality rather than allocating the whole boat factory merely because waste originated there. Industrial process evidence does not establish LCA allocation. No arbitrary physical/economic switch, fixed share, avoided virgin-solvent credit or recovery yield is permitted. Consequential substitution requires another declared method. | ilcd-attributional-2010 |
| a_dedication | each exchange | First isolate exclusively measured operations and virtual subdivisions. Retain the complete physical cleaning/formation ledger while assigning only the documented share of historical solvent production and prior use to this feed. Record the complement on its actual other function, and test conservation of every inherited exchange vector. Do not assign all previous cleaning to waste by default or discard it because waste has no purchase invoice. | ilcd-attributional-2010 |
| a_causality | remaining joint exchanges | For each genuinely inseparable exchange establish a determining physical causal relation between that exchange and the actual functions. Document tests, mechanism, quantities and the selected driver; mass alone is not causality for every chemical, energy or service. Shared transport and storage need the real capacity constraint and time/distance where causally relevant. Dedicated flow assignments precede this step. | ilcd-attributional-2010 |
| a_residual_value | only unresolved common-process residual | Only after dedication/subdivision and determining physical causality leave a real residual, use documented contemporaneous market values at the same common gate, condition, quality and bulk state for the remaining actual co-functions. Separate negative treatment fees and paid waste-management service from positive material value. A downstream purified acetone price is not the wet-feed gate price. Record uncertainty and sensitivity; a missing causal/value basis remains unresolved, never an invented factor. | ilcd-attributional-2010 |
| a_once | whole solvent; packaging; services; returns | Keep non-additive origin shares of the same whole solvent output, not parallel providers for its constituent assays. Each historical burden vector enters once; actual rework and return/rental services add only incremental exchanges on the original cohort. Packaging P/N_ext/ER quantities remain physical and mutually exclusive independently of who owns or pays. Return of an article is not a new purchase or co-product and yields no automatic credit. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule cells below declare the final reporting basis only. Every raw field, collection method, event total and absolute inherited/allocated vector remains unnormalised in collection storage. §8 normalise_once is the sole division for the corresponding original cohort; protocol/card labels reuse its result. Field separators in machine tables are ASCII semicolons.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | delivery | First release and receiver acceptance | raw event record | batch; source line; first release ID; receiver; authorisation scope; gross mass; tare; net whole-liquid mass; assay; sample; Q; original Qc; acceptance; rejection; closing released FG; first_acceptance_date; cohort_id; reporting_period; O_FG; C_FG; R_old; D_after; X_FG; | Calibrated paired gross/tare weighing at actual receiver and batch-specific sampling/acceptance. Record this cohort's raw net mass once only if its first acceptance falls in the declared period, with first-acceptance date and original cohort ID. Record opening/closing FG, previously released returns and subsequent accepted-stock withdrawals separately; these do not add current Q. No division. Retain authorisation and specification without assuming the historical permit remains current. | kg | Every batch and receiving decision | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_shipment_assay | delivery | Whole dispatch and independent component assay | raw event record | consignment_id; batch_ids; container_ids; sample_population; sampling_plan; composite_method; sample_time; laboratory; assay_method; mass_fraction_w_ij; whole_net_waste_W_j; incoming_pollutant_I_i; pollutant_shipped_m_ij; awaiting_shipment_stock; dispatch_time; receiver_handover; received_net_mass; acceptance_id; contractor_site; provider_scope; uncertainty | Weigh whole net waste separately from packaging and incoming pollutant purchases. Link each laboratory result to the exact shipped population, documented mixing/stratification and mass-weighted composite method; a calendar-month composite cannot establish every lot's concentration. Collect receiving weighing and acceptance independently from dispatch. Retain the regulatory record only as corroboration of its own period/scope; raw fields remain absolute. | kg; kg/kg | Every consignment, sample population and receiving decision | Actual dispatch and sampling intervals with opening/closing stocks and the independently identified acceptance date | Actual generator, preparation contractor, carrier, laboratory and receiver | per 1 kg reference flow | Gross/tare calibration; sampling plan; chain of custody; independent laboratory report; manifest/waybill; signed receiving decision |
| cp_formation | clean | Solvent use and dirty-liquid formation | raw event record | supplier formulation; net supplied mass; prior origin; resin residue mass; tool/line; cleaning use; circulating solvent; opening/closing solvent; opening/closing resin; dirty transfer; phase; water; acetone; styrene; actual oil; solids; inherited exchange vector | Weigh actual solvent/residue and matched dirty-liquid transfer; reconcile source use, samples and calibrated inventories with assay. Preserve whole formulation and constituents as non-additive subaccounts. Collect all raw totals without division; additional actual chemical identities are individually measured. | kg | Every receipt, cleaning campaign and stock boundary | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_preparation | prepare | Separation, samples and wet contamination | raw event record | batch; operation actually performed; wet inlet; wet feed; resin outlet; filter clean tare; filter wet discard; samples; effluent; phase; water; acetone; styrene; oil species; dry residue; test method; volume; temperature; independently measured density; WIP opening/closing | Weigh each actual whole wet outlet separately with matched samples. Determine composition, free-water/phase state and dry residue using applicable laboratory methods; test reactivity/flash properties required by the receiver. Record wet/dry definitions and uncertainty. Collect integrated volume as volume and rate/time separately; never infer solvent density from water or use one mass residual for two unknowns. No division of raw totals. | kg | Each operation, outlet, sample and stock boundary | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_utilities | prepare | Actual electricity and cleanup-water readings | raw event record | meter; start/end reading; unit; voltage; location; supplier; water quality; actual mass or volume and independent density; operating/idle/startstop/cleaning; supplier included scope | Collect unnormalised metered totals and actual process attribution, with kWh and mass/volume preserved. Trace any mass conversion independently at the actual state. No assumed steam, boiler, condensate return, cooling-water circuit or heat supply. If any occurs, collect its own atomic exchange, return state and provider energy/water scope before completing the package. | kWh; kg; m3 | Each meter interval and campaign including idle | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_packaging | packaging | Every atomic packaging receipt and movement | raw event record | event ID; material; form; type; component; direction; measured clean mass; count; measured mass per article; owner; supplier; price-included scope; P; N_ext; ER; original dispatch; O_empty; O_WIP; O_FG; O_reusable; C_empty; C_WIP; C_FG; C_reusable; S; EO; W; adhering contents; cohort; inherited per-exchange vector; incremental services | Weigh/trace supplier mass for every actual component and event including first non-purchase receipt. Disaggregate only with real component evidence, subtract clean tare from wet content once. Reconcile counts with measured configuration-specific mass, never guessed kg/article. P/N_ext/ER are mutually exclusive and independently evidenced; ER needs the previous dispatch. Record stocks across empty/WIP/FG/reusable states and cancel internal issues. No division of raw measurements. | kg; item | Every receipt, dispatch, return, discard and stock boundary | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_delivery | delivery | Real receiving route and all reverse movements | raw event record | batch; hauler; vehicle; receiver; route; distance; gross content; packaging; net accepted; rejected; returned; WIP; physical V; provider coverage; inherited vector | Match waybills, actual route records, weighings and receiver decisions. Retain absolute tkm from actual carried gross mass and distance; distinguish content and container. Reconcile matched internal handovers without new purchase or Q. Collect rejection/return and external treatment provider data; no division. | kg; km; tkm | Every consignment and movement | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_emissions_clean | clean | Actual species and discharge medium | raw event record | stage; species; CAS; discharge medium; source; measured concentration; actual gas flow rate; duration; integrated gas volume; temperature; pressure; calibration; acetone mass; styrene mass; liquid losses; sampling uncertainty | Use speciated measurements at actual discharge conditions or independently justified substance balances with measured inventories. Distinguish integrated volume from rates; retain conversions and media. Capture/reuse is internal until actually crossing an outlet. Total VOC/COD cannot replace molecular species. Retain failures/leaks without default evaporation/reaction fractions; raw totals remain unnormalised. | kg; m3; s | Each stage and actual emission interval | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_emissions_prepare | prepare | Actual species and discharge medium | raw event record | stage; species; CAS; discharge medium; source; measured concentration; actual gas flow rate; duration; integrated gas volume; temperature; pressure; calibration; acetone mass; styrene mass; liquid losses; sampling uncertainty | Use speciated measurements at actual discharge conditions or independently justified substance balances with measured inventories. Distinguish integrated volume from rates; retain conversions and media. Capture/reuse is internal until actually crossing an outlet. Total VOC/COD cannot replace molecular species. Retain failures/leaks without default evaporation/reaction fractions; raw totals remain unnormalised. | kg; m3; s | Each stage and actual emission interval | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_emissions_delivery | delivery | Actual species and discharge medium | raw event record | stage; species; CAS; discharge medium; source; measured concentration; actual gas flow rate; duration; integrated gas volume; temperature; pressure; calibration; acetone mass; styrene mass; liquid losses; sampling uncertainty | Use speciated measurements at actual discharge conditions or independently justified substance balances with measured inventories. Distinguish integrated volume from rates; retain conversions and media. Capture/reuse is internal until actually crossing an outlet. Total VOC/COD cannot replace molecular species. Retain failures/leaks without default evaporation/reaction fractions; raw totals remain unnormalised. | kg; m3; s | Each stage and actual emission interval | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_history_clean | clean | Cohort and vector conservation | raw event record | cohort; original material status; original gate; each exchange ID; inherited absolute quantity/burden; ownership; supplier included scope; O_WIP; C_WIP; O_FG; C_FG; failures; rework; Q0; transfers; complementary function | Link each physical cohort and its complete original exchange vector across actual internal/external interfaces. Reconcile opening plus additions against closing plus assigned outputs/losses, keeping complementary allocations. Do not reset history at free receipt, waste declaration or ownership change; no division. | native exchange units | Every batch and period boundary | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_history_prepare | prepare | Cohort and vector conservation | raw event record | cohort; original material status; original gate; each exchange ID; inherited absolute quantity/burden; ownership; supplier included scope; O_WIP; C_WIP; O_FG; C_FG; failures; rework; Q0; transfers; complementary function | Link each physical cohort and its complete original exchange vector across actual internal/external interfaces. Reconcile opening plus additions against closing plus assigned outputs/losses, keeping complementary allocations. Do not reset history at free receipt, waste declaration or ownership change; no division. | native exchange units | Every batch and period boundary | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_history_delivery | delivery | Cohort and vector conservation | raw event record | cohort; original material status; original gate; each exchange ID; inherited absolute quantity/burden; ownership; supplier included scope; O_WIP; C_WIP; O_FG; C_FG; failures; rework; Q0; transfers; complementary function | Link each physical cohort and its complete original exchange vector across actual internal/external interfaces. Reconcile opening plus additions against closing plus assigned outputs/losses, keeping complementary allocations. Do not reset history at free receipt, waste declaration or ownership change; no division. | native exchange units | Every batch and period boundary | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_history_packaging | packaging | Cohort and vector conservation | raw event record | cohort; original material status; original gate; each exchange ID; inherited absolute quantity/burden; ownership; supplier included scope; O_WIP; C_WIP; O_FG; C_FG; failures; rework; Q0; transfers; complementary function | Link each physical cohort and its complete original exchange vector across actual internal/external interfaces. Reconcile opening plus additions against closing plus assigned outputs/losses, keeping complementary allocations. Do not reset history at free receipt, waste declaration or ownership change; no division. | native exchange units | Every batch and period boundary | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_allocation_clean | clean | Exchange-specific attribution | raw event record | study goal; exchange; exclusive function; subdivision; determining mechanism; measured driver; common gate; material/service status; contemporaneous price; residual; uncertainty; complement | Retain raw absolute quantities before attribution. Test dedication/virtual subdivision, then determining physical causality per exchange, then only a real residual common-gate value basis. Record all actual co-functions and conservation of assigned plus complement vectors. No generic physical/economic selector or predetermined share; no division by product quantity here. | native exchange units | Every changed allocation and reporting period | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_allocation_prepare | prepare | Exchange-specific attribution | raw event record | study goal; exchange; exclusive function; subdivision; determining mechanism; measured driver; common gate; material/service status; contemporaneous price; residual; uncertainty; complement | Retain raw absolute quantities before attribution. Test dedication/virtual subdivision, then determining physical causality per exchange, then only a real residual common-gate value basis. Record all actual co-functions and conservation of assigned plus complement vectors. No generic physical/economic selector or predetermined share; no division by product quantity here. | native exchange units | Every changed allocation and reporting period | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_allocation_delivery | delivery | Exchange-specific attribution | raw event record | study goal; exchange; exclusive function; subdivision; determining mechanism; measured driver; common gate; material/service status; contemporaneous price; residual; uncertainty; complement | Retain raw absolute quantities before attribution. Test dedication/virtual subdivision, then determining physical causality per exchange, then only a real residual common-gate value basis. Record all actual co-functions and conservation of assigned plus complement vectors. No generic physical/economic selector or predetermined share; no division by product quantity here. | native exchange units | Every changed allocation and reporting period | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_allocation_packaging | packaging | Exchange-specific attribution | raw event record | study goal; exchange; exclusive function; subdivision; determining mechanism; measured driver; common gate; material/service status; contemporaneous price; residual; uncertainty; complement | Retain raw absolute quantities before attribution. Test dedication/virtual subdivision, then determining physical causality per exchange, then only a real residual common-gate value basis. Record all actual co-functions and conservation of assigned plus complement vectors. No generic physical/economic selector or predetermined share; no division by product quantity here. | native exchange units | Every changed allocation and reporting period | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_service_packaging | packaging | Incremental post-release or return services | raw event record | original cohort; Qc; H; actual handling; storage; rental; return haul; provider; covered supplier scope; actual increment; inherited vector | Collect only actual incremental unnormalised service exchanges with original released cohort. H records measured duration and any causally justified allocation driver, never production mass. Services already included upstream are excluded from a second charge. No new Q and no raw division. | native exchange units; h | Every actual service event | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |
| cp_service_delivery | delivery | Incremental post-release or return services | raw event record | original cohort; Qc; H; actual handling; storage; rental; return haul; provider; covered supplier scope; actual increment; inherited vector | Collect only actual incremental unnormalised service exchanges with original released cohort. H records measured duration and any causally justified allocation driver, never production mass. Services already included upstream are excluded from a second charge. No new Q and no raw division. | native exchange units; h | Every actual service event | Full declared period plus actual opening/closing and original-cohort history; include failures and Q0 | Identified source, actual preparation/packaging sites, hauler and receiving gate as applicable | per 1 kg reference flow | Calibrated original records, material identity, representative samples, dated reconciliation, full provider scope and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert each raw measurement into its reporting numerator unit before attribution. Use 1 kWh = 3.6 MJ; kg remains kg. The permits report pounds: verify the actual weighing/laboratory unit and whether the quantity is whole waste or constituent mass. For a confirmed avoirdupois pound use 1 lb av = 0.45359237 kg (and 1 t = 1000 kg where actually reported); do not infer an instrument unit from the permit heading alone. For actual liquid volume L use measured density in kg/L at the same composition/temperature to obtain kg. A measured integrated volume needs no time multiplier; integrate a true rate over its actual interval. Counts require measured configuration-specific component mass. No assumed solvent/water density, dry/wet factor or per-drum mass. | raw_reading; raw_unit; actual_state; measured_density; cp_utilities; cp_preparation; cp_packaging | absolute_converted_amount | epa-frp-1991; adeq-ranger-2022 |
| shipment_component | whole waste and composition subaccounts | For each actually represented shipment population j and constituent i, m_ij = W_j * w_ij, with W_j the net whole wet waste mass in kg and w_ij the independently measured representative mass fraction in kg/kg. Convert an assay reported in percent to mass fraction by dividing by 100 once. A pooled sample may be applied only to its justified mass-weighted population; do not invent individual lot fractions. Sum component masses only across compatible populations/periods. Keep incoming pollutant I_i, awaiting-shipment stock, dispatch W_j and receiving-accepted Q distinct. m_ij is a non-additive subaccount of W_j, not another whole flow, product Q, measured air emission or avoided burden. Do not infer releases from incoming-minus-dispatched pollutant without independent stock, other outlets and transformation evidence. | cp_shipment_assay; cp_release; cp_formation; cp_emissions_clean; cp_emissions_prepare; cp_emissions_delivery | measured_component_subaccount | adeq-ranger-2020; adeq-ranger-2022 |
| whole_mass | all physical gates | For each pre-release physical gate, opening WIP plus actual external receipts plus matched internal inflows equals closing WIP plus matched internal outflows plus first release Q at the receiving gate plus actual external rejected/waste/sample exits and species emissions/losses. Q occurs only at the delivery receiving gate, not at formation or preparation. The dirty/ready haul stays an internal matched movement within the composite boundary. At the receiver, keep a separate cohort-tagged accepted-stock ledger for the same period: O_FG + Q + R_old = C_FG + D_after + X_FG. O_FG is opening accepted stock; R_old is actual external return of already released material; D_after is actual subsequent withdrawal/dispatch from accepted stock; X_FG is other mutually exclusive actual outflow, including losses. The upstream waybill to the receiver is not D_after. Current Q excludes opening/returned previously released stock and older-cohort closing stock; only this period's first-accepted cohort contributes once, including its retained closing part. Never add C_FG to Q. In the combined gate cancel dirty/ready transfers and the internal first-release Q handover to FG; retain opening/closing WIP and FG, actual external receipts/returns and all actual external whole-liquid/solid exits, samples and species losses exactly once. Same-batch returns within this boundary cancel instead of becoming an external receipt. Whole wet flow and assays are non-additive; relevant element/acetone balances remain independent. | cp_formation; cp_preparation; cp_release; cp_delivery; cp_emissions_clean; cp_emissions_prepare; cp_emissions_delivery; cp_history_clean; cp_history_prepare; cp_history_delivery; cp_history_packaging | gate_residuals | epa-frp-1991 |
| component_closure | packaging | For every material/type/component k in one physical gate: O_k + P_k + N_ext_k + ER_k = C_k + S_k + EO_k + W_k. O/C include empty, attached WIP/FG and reusable stock. P is new procurement; N_ext is first external non-procurement physical receipt; ER has matched prior outward dispatch. All three are mutually exclusive. S is carried on gross outward dispatch and EO is separate outward return. Internal issues/reuse cancel. Reconcile every measured event and each inherited vector; an additional real X requires its own actual row and exact same-side duplicate evidence before removal. | cp_packaging; cp_history_clean; cp_history_prepare; cp_history_delivery; cp_history_packaging; cp_service_packaging; cp_service_delivery | component_residuals | ilcd-attributional-2010; epa-frp-1991 |
| assign_vector | all exchanges | For each exchange retain its original cohort vector. Add measured incremental quantities converted by raw_units and allocate dedicated/subdivided portions first, then only justified determining physical causality, and only the actual remaining common-process residual at contemporaneous same-state gate value. Opening/closing WIP and output shares preserve each exchange plus its complementary assignments. A is the absolute assigned numerator for the selected reference cohort; gross physical quantity is not automatically its burden. No division by Q in this step. | absolute_converted_amount; cp_allocation_clean; cp_allocation_prepare; cp_allocation_delivery; cp_allocation_packaging; cp_history_clean; cp_history_prepare; cp_history_delivery; cp_history_packaging | A | ilcd-attributional-2010 |
| release_total | accepted_feed | Q = sum of this cohort's net whole-liquid batch masses first quality-released during the declared period at the actual receiving gate. Exclude packaging, opening carried-over FG, previously released returns, older-cohort closing stock, repeats, returned/retested masses, rejected feed and samples. Pending never-accepted stock is WIP. Only the retained closing part of this period's first-accepted cohort has already entered Q once; never add it again. | cp_release; cp_history_clean; cp_history_prepare; cp_history_delivery; cp_history_packaging | Q | epa-frp-1991; adeq-ranger-2020 |
| normalise_once | all inventory rows | For Q > 0 the reported exchange result is A / Q per 1 kg reference flow, exactly once after raw-unit conversion and actual attribution. Reference output is 1 kg. Inventory cards and protocol aggregation labels name this same reporting basis and do not perform another division. Raw collection stores absolute measurements only. Preserve A and history for Q = 0 without a unit result; retain all failed/idle/cleanup burdens. | A; Q; cp_release; cp_history_clean; cp_history_prepare; cp_history_delivery; cp_history_packaging | reported_exchange | ilcd-attributional-2010 |
| service_original_cohort | incremental services | Attach actual incremental service burden to its original cohort and its original accepted Qc; any revised cohort result includes that increment through the same single division by Qc. Keep H only as an actually measured causal service-allocation driver. Do not divide services by new production Q or by H, reset acquisition, duplicate supplier-included service, or count a new release. Qc = 0 retains burden without a unit result. | cp_service_packaging; cp_service_delivery; cp_history_clean; cp_history_prepare; cp_history_delivery; cp_history_packaging; cp_allocation_clean; cp_allocation_prepare; cp_allocation_delivery; cp_allocation_packaging | original_cohort_service_result | ilcd-attributional-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all exchanges | Record actual supplier, formal physical identity, grade/form/route, whole formulation and scope; native support is identity only and not a quantity or permit. No missing actual row may be hidden in other. | Supplier records; full assay; native identity restrictions; actual event completeness |
| dq_measurement | all measurements | Keep calibrated weighing/metering, method/state/unit, sample representativeness, raw readings, detection limits and uncertainty. No invented plant data, moisture, density, yield, fire threshold or recovery credit. | Calibration certificates; laboratory results; gross/tare records; independent conversions |
| dq_time | entire cohort and period | Cover all campaigns, failures, idle and cleaning, opening/closing WIP/FG, actual route and original history. Distinguish the historical public sources from current site observations. | Dated batch ledgers; stocktake; chain of custody; actual receiver decision |
| dq_vectors | allocation and component flows | Reconcile exchange-specific inherited/assigned/complementary vectors, P/N_ext/ER physical mutual exclusivity, ownership and supplier-included scope independently. A generic symbol alone is not a receipt interface. | Component event IDs and measurements; original dispatch; supplier scope; causal/value evidence |
| dq_applicability | source synthesis | The EPA industrial guide supports physical route/context; the Arkansas historical permit corroborates real off-site waste-acetone recycling in boat fabrication. Neither is this dataset supplier, contemporary permit, universal concentration or yield. The ILCD attributional guidance supports only the declared allocation hierarchy and status/history decisions, without importing its illustrative infinite-recycling factors. | Complete source context; adjacent safety/route counterexamples; receiver/site records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference; native identities | Confirm source cleaning operation, liquid state, principal acetone assay, resin/water/oil/solid contamination and exclusion of clinical/pharmaceutical, chemical sludge, air VOC, pure virgin/regenerated solvent and distillation service. Match complete native formal name, route, grade/purity, CAS, geography, type, comments, reference-property/unit-group versions and unit. An unverified core Product identity stays unavailable; a Waste/Elementary flow cannot be promoted to Product by renaming. | un-cpc3-2025; epa-frp-1991 |
| v_reception | accepted_feed | Require actual receiver authorisation and stream-specific acceptance/rejection records with batch chain of custody, gross/tare/net mass, sample representativeness and agreed contamination/compatibility specification. Measure ignition/flash and reactivity properties by applicable methods on this real waste where acceptance/safety requires them. Historical guide concentrations and neat-solvent data are not present waste thresholds. Unknown receiving permission or unsafe/reactive rejected feed cannot be counted in Q. | epa-frp-1991; adeq-ranger-2020 |
| v_release | production and service ledgers | Recompute Q only from this cohort's net masses first accepted during the declared period, not gross dispatch V, container count, service duration H, retests or returns. Exclude opening carried-over FG, previously released returns and older-cohort closing stock. The part of this period's first-accepted cohort retained in closing FG has already entered Q once; do not add it again or equate all closing FG with Q. Stock never yet accepted remains WIP; previously released stock remains FG. Preserve failure/Q=0 and all physical movements, original Qc and incremental post-release services. No unit result exists when its own original Q or Qc is zero. | ilcd-attributional-2010 |
| v_physical | each physical gate | Close whole physical mass for formation, preparation and the combined gate with opening/closing WIP, actual external receipts, gross shipments, returns, samples, separated residues, losses and each actual emitted species/medium. Independently close relevant element/acetone balances using real compositions/reactions; do not fit two unknowns with one residual. Assay constituents are subaccounts of a whole wet flow. Distinguish actual water, including free water and any phase/reaction/structural water when demonstrated; a dry-residue test or COD/VOC index is not a named chemical mass. | epa-frp-1991 |
| v_packaging | each component and physical gate | For each component k verify O_k + P_k + N_ext_k + ER_k = C_k + S_k + EO_k + W_k in the same material/type/unit/physical gate. O/C include empty, WIP-attached, FG-attached and reusable stocks; S is gross outward carried quantity, EO is separate outward return, W is actual waste. Require actual atomic receipt records for all three mutually exclusive inlet classes, prior dispatch for ER, actual measurements and event identity. Internal reuse cancels; neither ownership nor opening stock substitutes for receipts. Reconcile acquisition/inherited vectors and supplier-included scope once across owned, entrusted, rental and return-service operations. | ilcd-attributional-2010; epa-frp-1991 |
| v_normalization | all reported amounts | Retain unnormalised raw readings. Convert actual raw units/rates, resolve exchange-specific allocation and inherited vectors, then divide the assigned absolute numerator by its unique Q exactly once in §8. Cards and collection reporting basis refer to that same result. Do not divide again in aggregation, provider linking or component assays. Measured integrated volume is not multiplied by time; only real rates are integrated. Solvent density is independently measured at its composition and temperature, never borrowed from water or a secondary property coefficient. | ilcd-attributional-2010 |
| v_missing | concrete data package | Check every actual atomic exchange, supplier coverage, baseline/closing inventories, assay, safety condition and inherited history. A missing realised receipt or emission interface is incomplete data; ordinary auxiliary/provider UUID gaps stay specifically unbound and do not by themselves invalidate the entire generic method. Core product/terminal/method evidence gaps remain explicit. Quantities, concentrations, densities, yields and credits must not be fabricated. | epa-frp-1991; ilcd-attributional-2010 |
| v_shipment_assay | shipment and receiving records | Reconcile whole net waste and its independent component masses with the actual composite-sample population and laboratory method. A pooled monthly result is not a per-lot assay; pollutant mass is not whole waste mass. Pending dispatch is stock, dispatched mass is not necessarily received/accepted mass, and only unique receiving acceptance contributes Q. Verify non-halogenated segregation and actual contractor/handover records. Do not derive LCA releases or substitution credit from a regulatory credit or a biennial report. | adeq-ranger-2020; adeq-ranger-2022; epa-biennial-report |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Only the declared wet source-specific regeneration-feed inlet at the actual acceptance gate |
| allowed_use | Source-compatible attributional modelling with verified core identity, actual receiving evidence, complete physical/vector history and disclosed method uncertainty |
| excluded_use | Pure virgin/regenerated acetone; other solvents; distillation service; universal recycling yield/credit; clinical waste; blanket coverage of CPC39940 |
| required_metadata | All §3 qualifiers, original cohort/gates, source assay, receiver authorisation/acceptance, provider scope, exact evidence references, measured quantities and P/N_ext/ER events |
| required_quality_disclosure | Measurement and allocation uncertainty, unbound core/auxiliary identities, historical-source limits, completeness of actual receipt/emission interfaces and Q0/service treatment |
| update_trigger | Change of principal solvent, source use/resin, composition/state, actual receiving route/permission/specification, package type or provider scope, allocation goal/evidence or native identity restriction |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes, 30 June 2025, p205; adjacent pp204-206. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification identity and adjacent 39950/clinical exclusions only; no composition or acceptance threshold |
| epa-frp-1991 | official_guidance | US EPA. Guides to Pollution Prevention: The Fiberglass-Reinforced and Composite Plastics Industry, EPA/625/7-91/014, October 1991; printed pp6-11 and 14-15, Appendix A. https://archive.epa.gov/airquality/community/web/pdf/01058.pdf | Real acetone tool-cleaning formation, uncured resin contamination, segregation/storage, actual conditional separation and off-site recovery route; adjacent solvent/still/reactivity alternatives retained; no default quantitative factors or LCA allocation |
| adeq-ranger-2020 | official_guidance | Arkansas DEQ. White River Marine Group LLC d/b/a Ranger Boats Fiberglass, Permit 0979-AOP-R11, 14 September 2020; printed p6 (PDF p9), condition 37 printed pp42-43 (PDF pp45-46). https://adeq.state.ar.us/downloads/WebDatabases/PermitsOnline/Air/0979-AOP-R11.pdf | Historical off-site waste-acetone route; separate whole waste, incoming pollutant, composite-laboratory composition, shipped pollutant and awaiting-shipment records. No current receiver permission, per-lot assay, LCA credit or measured release |
| adeq-ranger-2022 | official_guidance | Arkansas DEQ. White River Marine Group LLC - Ranger Boats Manufacturing Facility, Permit 0979-AOP-R13, 9 November 2022; printed p6 (PDF p9), condition 37 printed pp42-43 (PDF pp45-46). https://adeq.state.ar.us/downloads/WebDatabases/PermitsOnline/Air/0979-AOP-R13.pdf | Later evidence at the same facility of off-site recycling and distinct whole-waste/composition/shipment-stock accounts; not an independent plant, current receiver approval or LCA emissions credit |
| adeq-ranger-r4 | official_guidance | Arkansas DEQ. Ranger Boats/Wood Manufacturing Co. Inc., Permit 979-AOP-R4, Renewal 1; printed pp7 and32 (PDF pp13 and38). https://adeq.state.ar.us/downloads/WebDatabases/PermitsOnline/Air/0979-AOP-R4.pdf | Earlier same-facility on-site acetone recovery/reuse is a different route/period; exclude its still and recovered-product output from the selected off-site-feed boundary |
| epa-frp-1990 | official_guidance | US EPA. Assessment of VOC Emissions from Fiberglass Boat Manufacturing, EPA-600/2-90-019, May 1990, printed pp33-35 and model-plant context pp36-39. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9102344M.TXT | Distinguish cleaning loss, on-site batch reclamation and off-site waste reclamation; historical general estimates and model plants do not measure this lot or supply a waste fraction, recovery yield or emissions factor |
| epa-biennial-report | official_guidance | US EPA. Biennial Hazardous Waste Report. https://www.epa.gov/hwgenerators/biennial-hazardous-waste-report | Reporting-year generator, waste nature/quantity and disposition corroboration only; not shipment weight, chemical assay, receiving acceptance or methodology approval |
| un-cpc3-2026 | official_guidance | UNSD. CPC Version 3 explanatory notes, 23 October 2026, CPC3 worksheet A1943:D1943; adjacent rows 1940-1941 and1945. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 39940 explanation links HS2022 3825.41/.49; adjacent clinical/pharmaceutical and chemical-industry waste are separate. Corroborates classification family only, preserving the frozen June2025 coordinate |
| ilcd-attributional-2010 | handbook | European Commission JRC. ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, First edition March 2010; §§7.9.2-7.9.3 and Annex14.4, especially printed pp255-268 and350-351. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional goal, dedicated/virtual subdivision, exchange-specific determining physical causality, residual contemporaneous common-gate value, waste/material status and true prior material history; not industrial solvent chemistry or illustrative infinite recycling factors |
