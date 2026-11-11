---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-nmp-gbl-methylamine-synthesis
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Unformulated N-methyl-2-pyrrolidone from gamma-butyrolactone and monomethylamine

## 1. Scope and Applicability

This method covers newly manufactured, unformulated bulk liquid N-methyl-2-pyrrolidone (NMP, CAS872-50-4) from supplied gamma-butyrolactone (GBL) and anhydrous monomethylamine (MMA), by continuous non-catalytic liquid-phase synthesis and distillation. Its modelling need is the coupling of ring-opening/cyclisation, reaction-water formation, excess-amine recovery, NMP/heavy-end separation, optional caustic-assisted purification and stock-linked gate acceptance. Stage measurements remain visible within one aggregate foreground unit. The patent supports a historical process configuration, not a compulsory operating recipe. [Sources: `basf-nmp-process-2007`; `epa-nmp-scope-2017`.]

Exclude deliberate aqueous NMP solutions, electrolyte or solvent formulations, recovered spent NMP, pharmaceutical dosage forms, other lactams and mixed-amine/catalytic routes. Supplier GBL/MMA manufacture remains in actual upstream datasets; an integrated maleic-anhydride or butanediol production chain is not silently inside this receiving-to-gate unit. Specialty low-water/low-metal grades need their actual added polishing, loss and acceptance data; a commercial grade specification is not a universal purity default. NMP’s five-membered lactam identity motivates a proposed residual heterocyclic subset; competing current amide boundaries require the assessment below. This is not every CPC34160 compound or every pharmaceutical ring family. [Sources: `epa-nmp-scope-2017`; `basf-nmp-product`; `unsd-cpc-2025`; `wco-hs29-2022`.]

Classification is a proposed narrower relation requiring independent review. CPC3.0 35220 expressly includes cyclic amides and therefore is material contrary evidence; it must not be dismissed merely because NMP is heterocyclic. NMP is specifically a five-membered lactam: HS2022 heading2933 includes lactams and subheading2933.79 covers other lactams. Chapter29 Note3 gives the later heading priority when goods fall under two or more headings, supporting assessment of this specific lactam under2933 rather than the general carboxyamide heading2924. The historical HS2017 2933.79 to CPC2.1 34160 correspondence is corroboration of past taxonomy only. No current CPC3.0/HS correspondence, authoritative product ruling or accepted mapping is asserted; actual molecular/whole-product evidence and the competing CPC35220/35230 boundaries remain part of controller review. [Sources: `unsd-cpc-2025`; `wco-hs29-2022`.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-nmp-gbl-methylamine-synthesis |
| classification_refs | CPC 3.0 34160; narrower product and route boundary |
| covered_products | New unformulated bulk liquid NMP from supplied GBL and anhydrous MMA |
| excluded_products | Intentional mixtures; recovered spent solvent; dosage forms; other molecules; catalytic or mixed-amine routes |
| representative_product | Accepted liquid NMP with actual assay, water, residual GBL/MMA, impurity and colour specification |
| production_route | Continuous non-catalytic GBL/MMA synthesis; amine/water recovery; NMP distillation; actual optional caustic purification; bulk storage/loading |
| market_state | Unformulated bulk liquid at plant gate; actual supply state and grade disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unformulated NMP for industrial downstream use |
| How much | 1 kg |
| How well | Meet actual declared sale/acceptance specification; no assumed assay, water, metal or colour limit |
| How long or cycle | One declared representative complete production period |
| reference_flow_link | accepted_nmp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | N-Methyl-2-pyrrolidone (NMP) `5c41bfdd-a740-4672-aa66-88df7ea25f81` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS and whole product identity; grade/SKU; assay/water/GBL/MMA/impurities; unformulated liquid state; net mass excluding packaging; plant/geography/period; GBL and MMA upstream route/readiness; feed states; synthesis/recovery/refining configuration; caustic use and composition; utilities and supplier reference bases; controls and receivers; co-products; event-locked first-acceptance Q/Q0 and same-basis D_new/FG_new/L_new reconciliation; allocation and uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference product is 1 kg net whole accepted liquid, including measured trace water and impurities and excluding packaging. Assay-corrected NMP component mass is separate and never changes the denominator. |
| quantity_basis | all inventory rows | Declared exchange property | Declared exchange unit | Retain every original numerator unit; convert volume only with compatible measured density/composition/state, gas with actual T/P and convention, and steam with a common enthalpy datum. Fractions and percentages are distinguished. UUID identity does not verify provider quantity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplied liquid GBL and anhydrous MMA at actual receiving gates, linked to complete compatible supplier backgrounds |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | One residual heterocyclic lactam subset; classification is not process evidence |
| recursive_input_rule | Record purchased NMP as a separate same-category input with its upstream burden and purpose; internal recycle is paired and cancels at this aggregate boundary |
| upstream_dataset_requirement | Actual supplier GBL/MMA production, grade, delivery state, composition and geography; caustic solution and utilities require whole-flow compatible quantity bases |
| disclosure | Receipt through synthesis/recovery/refining and accepted bulk gate, including storage, start/stop, cleaning, controls, waste destinations and raw/WIP/FG carryover; upstream linked separately |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | nmp_unit | Retain receipt/preheating, liquid-phase synthesis, depressurisation, MMA/water recovery, NMP refining and accepted storage/loading as metered stages. Record each recycle and paired transfer before aggregation; no intermediate NMP is a second reference output. | `basf-nmp-process-2007`; `epa-nmp-scope-2017` |
| boundary_controls | nmp_unit | Locate final releases after actual control and retain fugitive/start-stop losses. External treatment receives one physical waste stream; internal treatment requires its actual atomic reagents, fuel, residue and final species. Bulk gate excludes deliberate formulation and transport packaging; actual packaged delivery requires separate packaging exchanges and a declared extension. | `jrc-cww-2016`; `epa-nmp-scope-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| nmp_unit | GBL/MMA synthesis, recovery and bulk gate supply | required | Declared continuous non-catalytic liquid-phase route | foreground | 1 kg |

Retain the actual stage diagram and independent reaction, amine/water, refining and utility meters. Useful recovered amine export is conditional; internal recycle, off-site treatment and sale are mutually exclusive destinations for the same physical portion. The cards are starting atomic exchanges; add every actual extra additive, cleaning reagent, heat carrier, refrigeration leak, co-product and final pollutant before claiming full study coverage. No source yields, recipes, purity limits or removal efficiencies are adopted as defaults.

### Process: Integrated NMP production (`nmp_unit`)

#### Inputs

##### Product flows

###### Gamma-butyrolactone feed (`gbl_feed`)

Weigh fresh supplied GBL CAS96-48-0 and analyse water, GBL and actual organic impurities. Record supplier readiness and stocks; internal recovered GBL is a paired internal transfer, never another purchase.

- Selected flow: Gamma-butyrolactone, supplied liquid
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### Anhydrous monomethylamine feed (`mma_feed`)

Use only actual anhydrous monomethylamine CAS74-89-5, received under documented pressure/state and fed as liquid in the declared route. Preserve whole reagent mass, assay, impurities and fresh/recovered distinction. A supplied aqueous or mixed-amine formulation requires a different whole exchange and reviewed scope.

- Selected flow: Methylamine `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### Conditional purification caustic (`caustic_solution`)

Include only when actual sodium-hydroxide-assisted purification is used. Weigh the entire purchased solution and analyse concentration; retain NaOH and water in the component ledger. Never substitute pure NaOH kg for solution kg or impose the patent dose. Another reagent requires its own row.

- Selected flow: Aqueous sodium hydroxide purification reagent
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### Conditional nitrogen supply (`nitrogen`)

Include actual fresh nitrogen for pressure maintenance, blanketing or drying only where used; meter mass or convert actual gas volume using measured composition, temperature, absolute pressure, moisture and compressibility and the provider reference condition.

- Selected flow: Nitrogen for pressure maintenance and blanketing
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Purchased electricity (`electricity`)

Submeter receiving pumps, reactor auxiliaries, recovery/refining columns, vacuum, cooling, storage and controls. Preserve supplier voltage and mix; convert measured kWh to MJ using 3.6 MJ/kWh without a mass conversion.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Purchased indirect-heating steam (`indirect_steam`)

Include actual imported steam for feed heating and reboilers; measure mass, pressure, temperature and dryness. Retain return condensate separately and verify the provider enthalpy basis. Internal recovered reaction heat is an internal energy link.

- Selected flow: Purchased indirect-heating steam
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Process-water makeup (`process_water`)

Measure fresh water actually added for cleaning, aqueous purification or gas control. Do not add a fictitious feed-water amount because the reaction generates water. Reused process water remains an internal transfer.

- Selected flow: Process-water makeup
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Cooling-water makeup (`cooling_water`)

Conditional on an evaporative cooling system within the boundary. Meter makeup independently of recirculation; retain evaporation, drift, blowdown and stock changes. A cooling service imported from outside needs its own compatible provider boundary.

- Selected flow: Recirculating-cooling water makeup
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

#### Outputs

##### Product flows

###### Accepted unformulated liquid NMP (`accepted_nmp`)

1 kg net whole liquid product at its unique measured first-acceptance event gate, excluding transport packaging. Include measured water and impurities; assay mass is separate. Lock Q at that event: later physical loss or disposition does not reduce production already accepted, and return/retest never adds a new acceptance. The reference row is an accounting coordinate; record actual external dispatch, loss and stocks once in the independent physical ledger.

- Selected flow: N-Methyl-2-pyrrolidone (NMP) `5c41bfdd-a740-4672-aa66-88df7ea25f81`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reference`
- Sources: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### Returned heating condensate (`condensate_return`)

Conditional actual clean indirect-heating condensate leaving to the steam supplier. Measure mass and thermodynamic state; keep physical water and return enthalpy separate from polluted reaction water. Do not assume a provider credit.

- Selected flow: Returned indirect-steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Conditional exported recovered amine solution (`recovered_mma_export`)

Only an actual specification-compliant, accepted externally useful aqueous MMA solution is a co-product. Measure entire solution, water and all solutes. Internal amine recycle has no output at this aggregate gate; a discard is the amine-water waste row instead. Do not represent this solution with the pure methylamine UUID.

- Selected flow: Recovered aqueous monomethylamine solution
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outputs`
- Sources: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

##### Waste flows

###### Amine-recovery aqueous purge (`amine_water_waste`)

Weigh the actual purge leaving amine/water recovery for external treatment; analyse water, MMA, NMP, GBL and actual other constituents. Retain receiver and treatment. This is neither saleable solution nor a freshwater elementary emission.

- Selected flow: Monomethylamine-bearing aqueous recovery purge
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### NMP refining bottoms (`refining_bottoms`)

Measure the whole actual final heavy-bottom residue, including retained NMP, GBL, oligomers, water and purification salts where present. Keep internal reprocessed heavies as paired transfers. Characterise each chemical constituent without claiming each is a separate physical waste shipment.

- Selected flow: NMP distillation heavy-bottom residue
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Cleaning effluent (`cleaning_effluent`)

Collect each actual cleaning campaign discharged outside the boundary, with NMP/MMA/GBL, cleaning reagent and water analysis and receiver. Record every actual added cleaning reagent as a separate input before completion.

- Selected flow: NMP-unit cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Cooling-system blowdown (`cooling_blowdown`)

Conditional actual cooling blowdown sent to treatment. Measure the whole aqueous stream, dissolved salts and any cooling chemicals; do not substitute it for process purge or ignore separate fresh cooling additives.

- Selected flow: Recirculating-cooling blowdown
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Captured process vent sent outside for treatment (`captured_vent`)

Only the actual captured whole gas stream crossing to an external abatement provider. Record carrier gas and species composition, source and receiver. Final atmospheric residuals below are disjoint; if abatement is inside the boundary, this is an internal link and all its reagent, energy, residue and final emissions must be added.

- Selected flow: Captured NMP-and-methylamine process vent
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

##### Elementary flows

###### NMP released to outdoor air (`nmp_air`)

Screen actual final vent, vacuum, storage, loading and fugitive losses; measure NMP CAS872-50-4 after actual capture/control. Low volatility does not prove zero. The product UUID cannot identify an elementary emission.

- Selected flow: N-Methyl-2-pyrrolidone to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Methylamine released to outdoor air (`mma_air`)

Measure actual residual monomethylamine CAS74-89-5 in disjoint final outlets and fugitives. Separate solution transfers and captured gas. Total amines, ammonia and methylamine are not interchangeable species masses.

- Selected flow: Monomethylamine to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### GBL released to outdoor air (`gbl_air`)

Conditional on actual GBL CAS96-48-0 in residual gas or aerosol. Preserve phase, concentration basis and non-overlapping source coverage. Unmeasured evaporative loss is unresolved, not a default emission factor.

- Selected flow: Gamma-butyrolactone to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Nitrogen released to outdoor air (`nitrogen_air`)

Conditional actual final nitrogen release from pressurising or blanketing. Reconcile supplied gas, captured treatment transfer and dissolved/stock nitrogen; distinguish molecular nitrogen from amine nitrogen and any actual chemically formed nitrogen species.

- Selected flow: Dinitrogen to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

###### Water vapour released to outdoor air (`water_vapour`)

Measure actual water evaporated at final cooling or process outlets. Separate reaction-generated water from incoming utility water in the water ledger, and exclude internally condensed return and entrained organic mass. Drift droplets require their own phase-specific row when present.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange attributable to the new first-accepted cohort / Q; cp_reference. Carry inherited exchange vectors and keep later services for old cohorts separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jrc-cww-2016`; `basf-nmp-process-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | nmp_unit | Keep whole unallocated physical streams first. Subdivide or virtually subdivide dedicated synthesis, amine export conditioning, refining, storage and treatment services using actual meters. Water formation, internal amine recycle, returned condensate and discarded residue have no assumed saleable co-product share. | `jrc-ilcd-general-2010` |
| allocation_causality | nmp_unit | For genuine inseparable useful exported co-products, test flow-specific determining physical causality from measured operation response. Total mass, contained nitrogen and heat value are not universal allocation keys. Assign embodied reactant burdens only through a supported chemical/physical fate; never allocate the full methylamine input solely by sales names. | `jrc-ilcd-general-2010` |
| allocation_residual | nmp_unit | For remaining joint environmental burdens in an attributional study, disclose same-period separation-gate values and use a_i=m_i*p_i/sum(m_j*p_j) for actual useful functions, after causality/subdivision. Align currency and physical grade/state, test price sensitivity; unknown or nonpositive values require review. Preserve full output mass/species ledgers independently of burden shares. No simultaneous avoided-product credit; waste treatment remains with its causing service. | `jrc-ilcd-general-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | nmp_unit | accepted_nmp | measurement | lot id; unique first-acceptance event id/time; measured accepted whole kg on acceptance basis; assay/water/impurities; immutable cohort; net D_new dispatch/return links; FG_new closing accepted stock; L_new other net post-acceptance destinations/losses; opening FG; returns; rework/retests; original Q0; basis conversions/uncertainty | Calibrated net scale or tank gauge plus measured temperature-compatible density, validated chromatography/water analysis and immutable event/lot records. Lock authoritative Q to the sum of unique measured first-acceptance event masses on one acceptance basis. Reconcile, do not redefine, Q using disjoint net D_new + FG_new + L_new on that same basis: net dispatch is corrected for linked returns; L_new retains all other net post-acceptance loss/use/downgrade/waste or closing transfer into rework/WIP. Internal gross loops and reacceptance do not create Q. D_new+FG_new alone is valid only when every other post-acceptance net disposition is zero. Opening FG and old returns retain original Q0; zero/unknown Q supports raw records only. | kg | Every lot and continuous meter; reconcile each period | One representative complete period covering start/stop, off-spec recovery and cleaning | Declared plant and all nmp_unit stages/controls | per 1 kg reference flow | Calibration, assay validation, sample custody, stock linkage, detection limits and uncertainty |
| cp_material | nmp_unit | gbl_feed; mma_feed; caustic_solution | measurement | supplier; CAS; whole kg; composition fractions; feed T/P; raw/WIP stocks; purchased fresh; recovered transfers; inherited vector | Reconcile calibrated receipts/issues and each actual transfer; representative whole-stream composition sampling. Measure opening and closing raw/WIP physical quantities and inherited per-exchange quantities and burden vectors; internal pairs must agree. | kg | Every lot and continuous meter; reconcile each period | One representative complete period covering start/stop, off-spec recovery and cleaning | Declared plant and all nmp_unit stages/controls | per 1 kg reference flow | Calibration, assay validation, sample custody, stock linkage, detection limits and uncertainty |
| cp_utility | nmp_unit | nitrogen; electricity; indirect_steam; process_water; cooling_water; condensate_return | measurement | stage; meter; original unit; kWh; steam/return kg; T/P/dryness/enthalpy; gas convention; water kg; stock; service cohort | Submeter stages and auxiliary/control duties; reconcile imported steam and return, gas state conversion and full cooling/process water. Identify later old-cohort services separately using original accepted Q0 rather than current Q. | kg; MJ | Every lot and continuous meter; reconcile each period | One representative complete period covering start/stop, off-spec recovery and cleaning | Declared plant and all nmp_unit stages/controls | per 1 kg reference flow | Calibration, assay validation, sample custody, stock linkage, detection limits and uncertainty |
| cp_outputs | nmp_unit | recovered_mma_export | measurement | whole kg; MMA/water/NMP/GBL fractions; gate; receiver; actual useful specification; lot stock; price currency; vector | Weigh and assay the whole exported solution, prove actual useful destination, and distinguish export, recycle and disposal. Keep unallocated physical output separately from co-function burden allocation. | kg | Every lot and continuous meter; reconcile each period | One representative complete period covering start/stop, off-spec recovery and cleaning | Declared plant and all nmp_unit stages/controls | per 1 kg reference flow | Calibration, assay validation, sample custody, stock linkage, detection limits and uncertainty |
| cp_waste | nmp_unit | amine_water_waste; refining_bottoms; cleaning_effluent; cooling_blowdown | measurement | source stage; whole kg; water and each constituent; campaign; stock; receiver/treatment; invoice or manifest; inherited vector | Weigh actual transfers, sample representative composition and retain receiver treatment evidence. Resolve water/organic/salt mass and nitrogen; do not turn off-site transfer into direct air/water release. | kg | Every lot and continuous meter; reconcile each period | One representative complete period covering start/stop, off-spec recovery and cleaning | Declared plant and all nmp_unit stages/controls | per 1 kg reference flow | Calibration, assay validation, sample custody, stock linkage, detection limits and uncertainty |
| cp_release | nmp_unit | captured_vent; nmp_air; mma_air; gbl_air; nitrogen_air; water_vapour | measurement | source/outlet; CAS; phase; measured concentration/flow/time; wet/dry T/P; capture; controls/downtime; fugitive loss; detection limits | Screen actual feed/reaction impurity species and measure disjoint final outlets and diffuse losses with validated representative sampling. Integrate compatible concentrations and flows over operating states; record captured off-site whole gas separately. Unknown species remain a gap; add actual on-site water outfalls and each pollutant atomically if present. | kg | Every lot and continuous meter; reconcile each period | One representative complete period covering start/stop, off-spec recovery and cleaning | Declared plant and all nmp_unit stages/controls | per 1 kg reference flow | Calibration, assay validation, sample custody, stock linkage, detection limits and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_cohort | all inventory rows | For measured event-locked Q>0 divide actual site exchanges attributable to that first-accepted cohort by Q, preserving numerator units, all post-acceptance losses and services within the declared scope. Carry documented own-foreground raw/WIP per-exchange vectors from earlier periods once and add current incremental site operations once. Separate provider-embedded upstream historical burdens from those own-foreground vectors: represent a provider as either the linked aggregate input dataset or non-overlapping expanded upstream stages, never both. Preserve separately allocated environmental vectors and the unallocated physical ledger; do not shrink co-product mass by a burden share. accepted_nmp = 1 kg is the normalized reference coordinate, not an additional physical external output. Purchase date, dispatch timing and residual available stock never redefine Q. | cp_reference; cp_material; cp_utility; cp_outputs; cp_waste; cp_release | Amounts per 1 kg reference flow | `jrc-ilcd-general-2010` |
| acceptance_event_bridge | nmp_unit | Q = sum of unique first-acceptance event masses measured and locked on the stated whole-product acceptance basis. The general cross-check is Q = D_new + FG_new + L_new, with mutually exclusive signed net custody/stock/destination records on that same basis and zero opening stock of this newly first-accepted cohort; reconcile composition/moisture and other basis changes from measured data. D_new is net accepted dispatch after linked returns, FG_new is closing accepted FG, and L_new is every other net post-acceptance disposition including actual loss/use/downgrade/waste and closing rework/WIP transfer. A 100 kg acceptance with 60 kg net dispatch, 30 kg closing FG and 10 kg loss retains Q=100 kg, not90 kg. Internal gross loops, return/retest events and acceptance itself are not extra physical external outputs. An unexplained residual remains unresolved; never set loss to zero or recalculate Q to force closure. | cp_reference; cp_material; cp_outputs; cp_waste; cp_release | Locked Q and complete acceptance/stock/destination reconciliation | `jrc-ilcd-general-2010` |
| stocks_and_services | nmp_unit | Reconcile actual opening raw/WIP/FG plus receipts and physical production with actual external outputs, consumption, loss, waste and closing stocks by stock class and immutable cohort; internal transfers cancel only once in the aggregate ledger. Lock original accepted Q/Q0 and preserve unallocated whole physical/component/species quantities separately from attributed burden vectors. Every raw/WIP transfer carries its own prior foreground exchange vector once; any supplier background already included in its linked provider is not added again as a separate historical site vector. Post-acceptance return, storage, rework or retest is an incremental service of that original accepted cohort divided by original Q0, with actual losses retained. Unknown Q0 permits a raw correction only. Never add old FG/returns/reacceptance to new Q, allocate their services to current Q, or count both acceptance and dispatch as separate external physical output. | cp_reference; cp_material; cp_utility; cp_outputs; cp_waste | Cohort stock and service ledgers | `jrc-ilcd-general-2010` |
| reaction_balance | nmp_unit | For total mass and conserved elemental C/H/N/O/Na check inputs + opening stocks = external outputs + closing stocks, with paired internal links cancelling and uncertainty disclosed. For every reactive species X use opening X + inputs X + actual G_X = outputs X + closing X + actual C_X. The net GBL + MMA to NMP + water chemistry has molecular equation C4H6O2 + CH5N = C5H9NO + H2O; establish actual reaction extent from assay and fates, not a prescribed yield. NaOH-assisted GBL conversion, side reactions, salts and oligomers require actual measured species/stoichiometry. Never conserve water, GBL or MMA as if inert; unexplained residual stays a finding, not invented emission. | cp_material; cp_reference; cp_outputs; cp_waste; cp_release | Unallocated mass/element/species ledgers | `basf-nmp-process-2007`; `epa-nmp-scope-2017`; `jrc-cww-2016` |
| utility_and_release | nmp_unit | Calculate net steam heat as imported kg times supply enthalpy minus returned kg times return enthalpy on one datum; convert kJ/1000 to MJ. Preserve physical water separately and follow actual provider gross/net basis, avoiding a second heat credit. For releases integrate species concentration times compatible measured flow and operating time; distinguish wet/dry gas, aerosol and censored results. Divide cohort-attributable totals by its accepted quantity; do not impose default density or removal factor. | cp_utility; cp_release; cp_reference | Heat/water and final species exchanges | `jrc-cww-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Match actual whole product/reagent/waste/elementary identity, state, composition, property/unit and provider reference. NMP and DMSO share solvent uses but never identity; pure MMA cannot stand for exported aqueous solution. Unresolved ordinary UUIDs/providers remain explicit gaps. | Native direct reads, supplier assay and delivery/receiver records |
| quality_methods | nmp_unit | Retain actual stage completeness, feed impurity conversion, water generation, recycle and treatment fates, calibration and representative abnormal-state coverage. Patent examples and commercial specialty grades are not generic activity parameters, efficiencies or purity targets. | `basf-nmp-process-2007`; `epa-nmp-scope-2017`; `basf-nmp-product`; `jrc-cww-2016` |
| quality_cohorts | cp_reference | Prove event-locked unique first-acceptance Q, the disjoint same-basis D_new/FG_new/L_new bridge and all post-acceptance physical losses; carry raw/WIP/FG own-foreground vectors once without duplicating provider-embedded upstream history. Retain old-service original Q0, non-detects, unknown original denominator, analytical uncertainty, missing species and allocation sensitivity as explicit study gaps. | Lot reconciliation, measurement and missing-data register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_nmp | Require exactly one final unformulated liquid NMP product output with verified mass chain and all qualifiers. Reject DMSO, another lactam, recovered spent-solvent blend, formulation, elementary flow or component-only assay mass as reference. | `basf-nmp-process-2007`; `epa-nmp-scope-2017` |
| validate_quantity | all inventory rows | Require finite actual quantities, measured immutable Q>0, one acceptance basis and equivalent bilingual1kg reference. Check every first-acceptance event, net dispatch/return/FG/other-loss bridge, raw/WIP/FG physical and own-foreground vectors, non-overlap with provider background, old-service Q0 and compatible conversions. Loss after acceptance cannot lower Q; gross loops/returns/retests cannot raise it. Q=0 or unknown retains raw records only; normalization never replaces physical ledger outputs. | `jrc-ilcd-general-2010` |
| validate_chemistry | nmp_unit | Check unallocated mass/elements separately from reactive species G/C and water generation/consumption. Verify recycle pairs, each physical destination, whole-solution export vs pure component, actual purification salts and post-control releases; no invented residual or universal yield. | `basf-nmp-process-2007`; `epa-nmp-scope-2017`; `jrc-cww-2016` |
| validate_allocation | nmp_unit | Check genuine useful functions, subdivision then determining physical causality and disclosed residual value shares; retain full physical mass and original-cohort vectors. Captured vent, wastewater, condensate and internal recycle receive no automatic co-product share or avoided-product credit. | `jrc-ilcd-general-2010` |
| validate_completeness | nmp_unit | Study completion requires actual source/receiver-specific inventory, provider bases, raw evidence and all added on-site controls/packaging/cleaning/release species. Structural or measurement success does not establish methodology approval, translation review or a qualified plant dataset. | `jrc-cww-2016`; `jrc-ilcd-general-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared fresh GBL/anhydrous-MMA route to unformulated bulk NMP with compatible supplier/treatment links and actual grade/gate |
| excluded_use | Universal CPC34160 or NMP production mix; recovered solvent; deliberate formulations; mixed amines; catalyst routes; automatic qualified study or comparative assertion |
| required_metadata | All reference qualifiers; stage boundaries; actual feed/purification compositions; upstream readiness; final outlets/receivers; stock/cohort/Q/Q0 vectors; allocation and provider pins |
| required_quality_disclosure | Identity/provider gaps, native classification debt, actual period/coverage, measured uncertainty, censored releases, species/stock closure and allocation sensitivity; separate review/science/study states |
| update_trigger | Change of feed route/state/composition, synthesis/purification/control, grade/gate, co-product use, stock/service assignment or provider convention |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| basf-nmp-process-2007 | literature | BASF, US7227029B2, Method for the continuous production of N-methyl-2-pyrrolidone, 2007-06-05; https://patents.google.com/patent/US7227029B2/en | Description paragraphs on liquid GBL/MMA reaction, amine/water recovery, conditional NaOH work-up, NMP side draw and recycle. Historical qualitative configuration only; no example operating parameters, assay/GC area percent, yield or additive rate is adopted. |
| epa-nmp-scope-2017 | official_guidance | US EPA, Scope of the Risk Evaluation for N-Methylpyrrolidone, EPA-740-R1-7005, June2017, AppendixB pp58–59; https://www.epa.gov/sites/default/files/2017-06/documents/nmp_scope_6-22-17_0.pdf | Qualitative GBL/MMA ring-opening, cyclisation/dehydration and distillation corroboration; alternative aqueous/integrated routes and recycling counterevidence. Historical preliminary compilation, not a yield/emission default or current regulatory/health determination. |
| basf-nmp-product | literature | BASF, N-Methylpyrrolidone Life Science commercial product page, snapshot2026-11-08; https://products.basf.com/global/en/ci/n-methylpyrrolidone-life-scien | Actual CAS872-50-4 commercial product, bulk supply and specialty grade differentiation; no manufacturer purity/low-amine/water value promoted to a universal grade or route default. |
| jrc-cww-2016 | official_guidance | European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector, 2016, JRC103096, BAT2–4 pp543–544/PDF573–574; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Horizontal chemical-stream inventory, reaction/side-product flow sheets and source-specific water/gas monitoring. Not NMP-specific factors or legal emission limits; actual atomic exchanges and measurement remain foreground requirements. |
| jrc-ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3 pp255–264/PDF275–284; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, determining flow-specific physical causality and residual exit-value allocation. Q/Q0, first acceptance, stock/vector and later-service rules are explicit PCR foreground protocol synthesis, not quoted ILCD factory formulas. |
| unsd-cpc-2025 | official_guidance | UNSD, CPC Version3.0 Structure and Explanatory Notes, 30June2025, subclasses34160,35220 and35230; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current category and competing35220 cyclic-amide/35230 ring-family boundaries, including actual contrary evidence; no automatic current HS correspondence, product ruling or positive mapping acceptance. |
| wco-hs29-2022 | official_guidance | WCO, HS2022 Chapter29, Notes1/2/3/7, headings2924 and2933, other lactams2933.79; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0629_2022e.pdf?la=en | Specific lactam2933.79 and Chapter29 Note3 later-heading precedence over general carboxyamide2924 where competing headings apply; separate-compound and specified-ring/preparation boundary context. No automatic current CPC correspondence or authoritative customs product ruling. |
