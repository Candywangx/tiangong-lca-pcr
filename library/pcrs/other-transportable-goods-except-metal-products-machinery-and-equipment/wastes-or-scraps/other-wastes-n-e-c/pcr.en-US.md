---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-wastes-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Whole crude soybean oil deodorizer distillate at first bulk release

## 1. Scope and Applicability

This method covers one traceable lot of whole crude distillate condensed from chemically refined soybean oil deodorization in a single scrubber, held separately and first released in bulk at the refinery tank outlet for contracted tocopherol/sterol recovery. It is a non-infectious industrial residual product, not a biological treatment stream. Require lot-specific safety classification, composition and receiver acceptance; this method makes no universal non-hazardous claim. [cafc-adm-2009; cbp-n079775; aocs-deodorization]

Historical customs evidence supports residual-product identity, not current plant composition, waste-law status or blanket classification of every distillate. The October 2026 CPC explanatory note supplies the HS 2022 3825.90 linkage; the June 2025 classification denominator is unchanged. No tariff rate is prescribed. [unsd-cpc3-2026]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-wastes-n-e-c |
| classification_refs | CPC 3.0 39990, accepted narrower association under docs/adr/2026-11-21-accept-cpc-39990-whole-crude-soybean-deodorizer-distillate.md |
| covered_products | Whole crude soybean deodorizer distillate from chemical refining only |
| excluded_products | Physical-refining fatty acid distillates; selective hot/cold scrubber fractions; isolated tocopherols, sterols and commercial fatty acids; soapstock; feed preparations; edible soybean oil; municipal waste, sewage sludge, waste solvents and chemical wastes under other HS branches; brewery wastewater; downstream recovery services. |
| representative_product | Unfractionated single-scrubber crude residual lot |
| production_route | Chemical refining; deodorization; whole condensate recovery; segregated storage; first release |
| market_state | Bulk crude residual feedstock; record solid/paste/liquid state at actual handover temperature |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole crude soybean oil deodorizer distillate at first bulk release |
| How much | 1 kg |
| How well | Accepted for contracted recovery on lot analysis; no purity or yield default |
| How long or cycle | One original release cohort; no resale or transfer creates new production |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole crude soybean oil deodorizer distillate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Soybean origin; chemical-refining route; single-scrubber whole recovery; site and operator; lot and time; first release and receiver; wet/as-received mass; moisture and composition test basis; temperature and physical state; hazard/transport class; contracted use; upstream burden and allocation; heating and cleaning configuration |

Declare every required qualifier in dataset metadata, process notes or reference-flow comments. Missing qualifiers make the reference incomplete. Product UUID remains unbound until the exact whole residual Product flow is verified.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mass_basis | reference_product | Mass | kg | Use net as-received whole lot mass excluding tank and vehicle tare. Water is part of the declared whole product; measure moisture and never silently switch to dry mass or tocopherol mass. |
| meter_energy | release_electricity | Energy | kWh | Keep electrical meter kWh distinct from supplier native property. 1 kWh = 3.6 MJ; a common energy unit group does not establish net calorific value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole condensate at the dedicated single-scrubber discharge before release holding |
| starting_condition_role | intermediate_product |
| product_classification_scope | Only the bounded whole chemical-refining soybean residual product |
| recursive_input_rule | Include compatible upstream refinery burdens for incoming crude lot; recurse through provider coverage without overlap |
| upstream_dataset_requirement | Exact source refinery, route, output cohort, allocation, utilities and gate coverage; unknown coverage blocks a complete study |
| disclosure | Foreground release gate only; upstream production remains required. No avoided recovery credit. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | release | Include segregated holding, heating, pumping, sampling, cleaning and actual release. Ending gate is the refinery outlet before external carriage. Record title, operator, custody point and receiver contract independently; outsourced operations stay included. | aocs-deodorization; cafc-adm-2009 |
| boundary_state | release | Cooling or heating without separation may retain crude identity; exclude reaction, neutralisation, solvent extraction, esterification, fractionation and selective condensation. Verify actual lot route. | aocs-deodorization; cafc-adm-2009 |
| boundary_transport | release | Accept only lots with documented composition, compatibility, transport classification, temperature limits, closed bulk vessel and receiver acceptance. Do not infer safety from tariff identity. Exclude infectious, mixed unknown and unassessed hazardous lots. | aocs-deodorization; cafc-adm-2009 |
| boundary_equipment | release | This configuration has no circulating packaging or pallet pool. Tank and vehicle are equipment, not product tare. If drums, liners or pallets actually cross the gate, this bulk configuration is incomplete: add each material and every purchase, first non-purchase external receipt and traceable same-item return, outward transfer, retirement and stock event before use. Allocate actual purchase, transport and service burdens once, even when omitted by suppliers; missing supplier coverage remains unresolved. | aocs-deodorization; cafc-adm-2009 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| release | Segregated whole crude lot release | required | Verified eligible original lot | foreground | reference_product |

All amounts below use the same release cohort and denominator Q: net kg first accepted product, counted once. Conditional interfaces require evidence of presence or documented absence, never an assumed zero. Internal recirculation is not an external receipt. Add separately every actual unlisted fuel, heat carrier, chemical, waste or emission with its species, compartment and evidence before a complete study; absence of default emission cards does not establish zero emissions.

### Process: Whole crude release (`release`)

#### Inputs

##### Product flows

###### Whole crude soybean oil deodorizer distillate before release (`crude_intake`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Whole crude soybean oil deodorizer distillate before release
- Flow property / unit: Mass / kg
- Amount rule: Measured newly recovered net receipt from the single scrubber into the dedicated lot tank. Carry opening unreleased heel as stock with its inherited burden; never treat previously released stock as new crude production.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crude_intake`
- Sources: `aocs-deodorization`

###### Electricity at release tank meter (`release_electricity`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Electricity at release tank meter
- Flow property / unit: Energy / kWh
- Amount rule: Metered tank pumping and tracing electricity attributable to the lot; exclude supplier-meter overlap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release_electricity`
- Sources: `aocs-deodorization`

###### Purchased steam for tank heating (`release_steam`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Purchased steam for tank heating
- Flow property / unit: Mass / kg
- Amount rule: Conditional on actual steam heating; collect delivered steam mass and pressure, temperature and condensate state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release_steam`
- Sources: `aocs-deodorization`

###### Water for tank cleaning (`cleaning_water`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Water for tank cleaning
- Flow property / unit: Mass / kg
- Amount rule: Conditional on actual water cleaning within the lot boundary; meter delivered water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning_water`
- Sources: `aocs-deodorization`

###### Sodium hydroxide aqueous cleaning solution (`cleaning_naoh`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Sodium hydroxide aqueous cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Conditional on actual use; weigh solution and record NaOH mass fraction; never count dry active mass as solution mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning_naoh`
- Sources: `aocs-deodorization`

#### Outputs

##### Product flows

###### Whole crude soybean oil deodorizer distillate (`reference_product`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Whole crude soybean oil deodorizer distillate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reference_product`
- Sources: `aocs-deodorization`

###### Returned steam condensate (`steam_condensate`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Conditional on actual off-site condensate return; measure returned mass and avoid supplier credit duplication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam_condensate`
- Sources: `aocs-deodorization`

##### Waste flows

###### Off-specification crude soybean oil deodorizer distillate (`offspec_distillate`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Off-specification crude soybean oil deodorizer distillate
- Flow property / unit: Mass / kg
- Amount rule: Conditional on rejection; weigh separately and document receiver and disposal or rework route.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offspec_distillate`
- Sources: `aocs-deodorization`

###### Spent alkaline tank-cleaning liquor (`cleaning_liquor`)

One atomic exchange across the release-process boundary; obtain its amount under the linked lot protocol.

- Selected flow: Spent alkaline tank-cleaning liquor
- Flow property / unit: Mass / kg
- Amount rule: Conditional on actual alkaline cleaning; weigh or meter with measured density and document treatment provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning_liquor`
- Sources: `aocs-deodorization`

## 7. Allocation and Co-product Handling

This is an attributional supply dataset with an explicit allocation partition. Document why subdivision cannot remove joint production and why substitution/system expansion does not answer this dataset goal; consequential recovery-credit claims require a separate model. The general allocation hierarchy is supported by ILCD, not by the oil-processing chapter. [jrc-ilcd-2010]

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_upstream | release | Residual-product or waste tariff language does not prove burden-free supply. First subdivide refinery operations and directly assign dedicated recovery burdens. For inseparable joint production, document causal physical allocation; if not defensible, document economic allocation over the same period with masses, prices, currencies and sensitivity. Do not prescribe a numerical share or import an oil dataset already carrying all burdens plus a second full utility inventory. | jrc-ilcd-2010 |
| allocation_release | release | Directly assign lot-specific holding, heating, cleaning and rejection burdens. Shared tank time or metered use requires documented allocation across all serviced lots, retaining burdens for failed lots. Do not shift all failure burden to disposal or divide by gross intake. Retain physical outgoing condensate without unverified substitution credits. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_crude_intake | release | crude_intake | New whole-crude receipt | source lot; receiving tank; gross/tare; transfer meter; opening/closing unreleased WIP; original exchange burden vector; moisture; sampling temperature | Weigh new as-received crude net of equipment tare, or calibrated mass-meter transfer from the named single scrubber. Do not add opening heel to new receipts; carry it in the WIP ledger with its inherited upstream burden. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Scale/mass-meter calibration; source formation records; WIP burden ledger |
| cp_release_electricity | release | release_electricity | Tank electricity meter readings | meter id; voltage; supplier; location; start/end kWh; tracing/pumping runtime; allocation to lot; supplier included-scope | Read calibrated electrical meter differences in kWh for actual pumping/tracing and shared idle periods. Record exact supplier gate and property independently; no net-calorific-value property is presumed. Remove overlap with crude-provider electricity. | kWh | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Meter calibration and wiring coverage; supplier scope; allocation logs |
| cp_release_steam | release | release_steam | Steam delivery record | steam meter; delivered kg; pressure; temperature; dryness; supplier gate; heat/mass billing convention; return condensate agreement; lot heat time | Meter delivered steam mass for actual indirect tank heating; retain thermal state and actual supplier coverage. If billed in heat units, collect supplier enthalpy convention and condensate-return basis before conversion; do not assume a fixed MJ/kg. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Steam-meter calibration; supplier enthalpy/billing statement; heating and return logs |
| cp_cleaning_water | release | cleaning_water | Cleaning water meter record | cleaning event; water meter; delivered kg or volume; density and temperature if volumetric; tank; lot service allocation; supplier gate | Meter actual external tank-cleaning water separately from condensate and formulated cleaner water. Convert volume only using compatible measured density; record returned or discharged destination. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Water-meter calibration; density measurement; cleaning work order |
| cp_cleaning_naoh | release | cleaning_naoh | Cleaning solution receipt and use | supplier; formulation; batch; NaOH mass fraction; gross/tare; used solution kg; opening/closing stock; purchased premix or on-site dilution | Weigh the actual sodium hydroxide aqueous formulation consumed, preserving supplied concentration. Active NaOH assay is a non-additive subledger, not a second purchase. Record dilution water separately only when supplied separately, avoiding premix water duplication. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Formulation certificate; scales; stock/use reconciliation; cleaning record |
| cp_reference_product | release | reference_product | First quality-release weigh record | unique original lot; quality-release timestamp; gross/tare; net as-received kg; moisture assay; temperature/state; receiver acceptance; released FG; actual dispatch timestamp | Use calibrated scale or mass-meter records for first accepted whole-product mass, excluding equipment tare. Distinguish first release from dispatch; include newly released closing FG in Q once and exclude historical FG, reinspection, resale and previously released returns. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Calibrated weighing; signed quality/receiver release; unique lot FG history |
| cp_offspec_distillate | release | offspec_distillate | Rejected crude removal ticket | lot; rejection stage; reason; net wet kg; destination; internal rework or external removal; inherited exchange vector | Weigh off-spec whole crude separately at its actual external removal gate. Internal rework cancels within its original lot and is not an external waste input/output; carry inherited burdens and all actual added service. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Rejection certificate; calibrated net weights; treatment or rework receipt |
| cp_cleaning_liquor | release | cleaning_liquor | Spent alkaline liquor removal ticket | cleaning event; whole liquor wet kg; NaOH/oil content; volume and measured density if used; tank; treatment receiver; external gate | Weigh or meter the actual spent alkaline cleaning liquor and measure density when converting volume. Preserve whole wet mass and separately assay contaminants; do not add pollutant assays again to waste mass or call retained liquor an elementary emission. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Calibrated weights/meters; density and composition test; treatment receipt |
| cp_steam_condensate | release | steam_condensate | External condensate return record | return meter; net kg; temperature; pressure; supplier return gate; actual return enthalpy and credit convention | Meter condensate actually returned across the supplier gate, with thermal state and return-credit convention. Internal recirculation is not this exchange. Reconcile returned mass with steam supply and actual losses without imposing equality. | kg | Each lot and each event | Complete declared release cohort | Same refinery and actual contractor interfaces | per 1 kg reference flow | Condensate-meter calibration; thermal state; supplier billing reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_denominator | reference_product | Q = sum of net kg first accepted original releases in the cohort, including newly released product still in closing finished stock, excluding tare, rejected quantities, historical released opening stock and re-releases. Record internal rework without a new external intake. | cp_reference_product | Q | aocs-deodorization |
| cohort_inventory | all inventory rows | Divide each attributable cohort amount by the same Q; input crude includes allocated opening stock and excludes closing stock retained for later cohorts. Reconcile whole material separately from water, steam condensate and cleaning. | Q; collection records | Exchange per 1 kg reference flow | aocs-deodorization |
| stock_closure | crude_intake; reference_product; offspec_distillate | Unreleased gate: opening unreleased crude + new crude receipt = Q + closing unreleased crude + rejected or sampled removal + measured losses. Finished-stock gate: opening released stock + Q + genuine previously released external returns = closing released stock + all dispatch + finished-stock waste or loss. Keep internal rework inside its original gate; Q cancels when gates combine, so closing finished stock is not added again as production. Investigate residual error using measured uncertainty, not a fabricated tolerance. | stock and weigh records | closure evidence | aocs-deodorization |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_lot | release | Measure moisture, fatty acids, tocopherols and sterols on a declared basis with sampling and analytical uncertainty. Literature sample values are not plant defaults, yield factors or acceptance limits. | Lot certificate; pmc-soybean-2020 |
| quality_burden | release | Obtain exact supplier gate and utilities coverage, documented allocation, hazard/transport assessment and signed receiver acceptance before complete LCI use. Unknown amounts stay unknown. | Supplier records; signed lot release |

All service events carry their original lot and exchange-specific burden vector. Carry WIP burden into first release only once. A cohort with Q = 0 cannot be normalized: retain its physical stocks, failures and service burdens for the documented subsequent cohort or the actual disposal destination, never erase them. Previously released returns, reinspection and cross-period handling do not create new Q; retain original burdens and record only the actual added service and evidenced reversals. This dataset ends at the first documented quality release at the refinery outlet before external carriage; later FG holding, dispatch service, external transport and returns belong to a linked post-release service account, not this first-release inventory. Retain the finished-stock ledger to reconcile those physical events and their inherited burdens.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | release | Require exact route, whole condensate state and lot origin. Reject physical-refining Waste-flow bindings, isolated compounds and source-oil substitutions. | unsd-cpc3-2026; cafc-adm-2009; pmc-soybean-2020 |
| validation_quantity | release | Require Q > 0, first-release uniqueness, net mass and stock closure; normalize all rows to the same 1 kg reference flow. Do not use recovered vitamin mass, dry mass or truck gross mass as Q. | unsd-cpc3-2026; cafc-adm-2009; pmc-soybean-2020 |
| validation_completeness | release | Unresolved flow identities, empirical amounts, supplier burdens or safety evidence prevent complete study qualification. Record all actual atomic exchanges and conditional absences. Mechanical PCR checks do not approve methodology or factory data. | unsd-cpc3-2026; cafc-adm-2009; pmc-soybean-2020 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Incoming whole crude feedstock for separately modelled recovery |
| allowed_use | Only compatible crude chemical-refining soybean lots with matching gate and disclosed allocation |
| excluded_use | Physical-refining fatty acid distillates; selective hot/cold scrubber fractions; isolated tocopherols, sterols and commercial fatty acids; soapstock; feed preparations; edible soybean oil; municipal waste, sewage sludge, waste solvents and chemical wastes under other HS branches; brewery wastewater; downstream recovery services. |
| required_metadata | All reference qualifiers, cohort Q, actual native flow/property/unit identities, upstream source coverage |
| required_quality_disclosure | Measured coverage, unresolved identities, allocation sensitivity, uncertainty and safety acceptance |
| update_trigger | Change of source oil, refining mode, scrubber arrangement, state, gate, receiver specification or supplier coverage |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2026 | official_guidance | UNSD CPC 3.0 explanatory notes, 23 October 2026, CPC3 row 1947; June 2025 frozen structure: https://unstats.un.org/unsd/econstats/classifications/cpc | HS 2022 3825.90 link and adjacent exclusions; the case-specific mapping decision is recorded separately |
| cafc-adm-2009 | official_guidance | ADM v United States, 2008-1342, majority opinion, 26 March 2009: https://www.cafc.uscourts.gov/opinions-orders/08-1342.pdf | Whole residual product identity; lower 3824.90 judgment reversed; no plant quantities |
| cbp-n079775 | official_guidance | US CBP NY N079775, 30 October 2009: https://rulings.cbp.gov/ruling/N079775 | Separate soybean distillate recovery-feedstock ruling; historical import only |
| aocs-deodorization | handbook | AOCS Lipid Library, Deodorization, revised 23 July 2019: https://www.aocs.org/resource/deodorization/ | Condensation, chemical/physical route distinction and dedicated release inventory design; no default operating values or allocation share |
| pmc-soybean-2020 | literature | Processing impact on tocopherols and triglycerides composition of soybean oil and its deodorizer distillate evaluated by high-performance liquid chromatography: https://pmc.ncbi.nlm.nih.gov/articles/PMC7763106/ | Original plant samples justify lot analysis and variability disclosure; not customs-lot or plant yield evidence |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance (2010), section 7.9; https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 | General multifunctionality, subdivision and allocation hierarchy; PCR-specific partition and empirical shares require study evidence |
