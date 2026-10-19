---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.virgin-pet-chip-spun-uncarded-staple
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Virgin PET chip-spun uncarded staple fibre manufacture

## 1. Scope and Applicability

This method covers manufacture of virgin PET homopolymer, undyed monocomponent solid round-section cut staple from purchased fibre-grade chips, with spin-draw and final finish at declared as-released moisture. The connected route dries/conditions chips, melts/filters/spins them, air-quenches filaments to can tow, draws and crimps the tow, dries/finishes it, then cuts, bales and releases uncarded/uncombed staple [jrc-polymers-2007]. Tow in cans is a real internal intermediate, not filament yarn, monofilament/strip or another reference product. No use-specific new identity is created.

JRC supplies this particular chip-to-can-tow-to-staple sequence; EPA independently distinguishes melt spinning from solvent/reaction spinning and cut staple from tow/continuous-filament yarn [epa-synthetic-fibres]. The manufacturer brochure corroborates industrial conversion stages, not one common SKU or plant across all sources [neumag-staple-2023]. Numerical temperatures, draw ratios, finish recipes, yields, capacities, emissions and standard moisture/regain are not transferred. Factory records must establish actual quantities and conditions. Scientific review and classification mapping acceptance remain pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.virgin-pet-chip-spun-uncarded-staple |
| classification_refs | CPC 3.0: 35510, narrower semantic subset; no mapping approval |
| covered_products | Virgin PET homopolymer, monocomponent undyed solid round-section drawn/crimped cut staple, not carded or combed, with declared spin-draw/final finish and as-released moisture |
| excluded_products | Continuous tow sold as such; filament yarn; monofilament/strip; carded/combed fibre; other polymers; recycled feed; bicomponent/hollow/dope-dyed fibre; PET chips as output; regenerated cellulose; direct-polymerisation melt feed |
| representative_product | Virgin PET chip-spun uncarded staple fibre manufacture |
| production_route | Purchased PET chips → crystallising/drying → extrusion/filtration/spinneret → air quench/spin-draw finish/can tow → creeling/drawing → crimping → drying/final finish → cutting/baling → production quality release |
| market_state | Baled textile staple at factory production-release gate, including measured residual moisture and retained finish in net fibre mass; wrapper and strap tare excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply specified uncarded virgin PET staple as textile raw material |
| How much | 1 kg newly accepted net fibre at the production-release gate |
| How well | Actual buyer acceptance for polymer/virgin identity, cut length, fineness, crimp, tenacity/elongation, finish and moisture; no default thresholds |
| How long or cycle | One matched actual production/reporting period with complete contributing runs and WIP burden carry-over; no use-life function claimed |
| reference_flow_link | pet_staple |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Polyester short fiber `03377e13-45a0-4774-9cc8-37c8c60523f2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PET homopolymer / 100% virgin polymer and actual chip grade/additives; chip-fed extruder route with can-tow intermediate; uncarded/uncombed / solid round monocomponent undyed staple; actual cut-length distribution / dtex / tenacity/elongation and crimp acceptance methods; spin-draw/final finish identities / retained active content and supplied state; as-released moisture / oven-dry method / conditioning and regain convention; net fibre mass / packaging tare and unique first-release lot IDs; production-release Q gate / WIP and carried burdens / separate finished-goods ledger; actual site/supply geography / factory production mix and utility providers; full reporting period / failures/rework and included warehouse/dispatch service extent |

Declare every qualifier in the concrete dataset. The reference is new production-release mass, not unconditional functional equivalence or actual net delivered quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is positive newly accepted net fibre at first production release under cp_output; 1 kg includes measured retained finish and water. Exclude all packaging tare. Returns and repeat acceptance never create the same mass again. |
| moisture_basis | material and product mass | Mass | kg | Use actual as-released weighing as denominator. Record wet-basis water fraction w and dry nonwater mass D=m(1-w); assay retained finish separately to obtain polymer mass. Dry-basis regain R=m_water/D gives m=D(1+R). A contractual standard regain changes reported mass only through an explicit measured conversion, never silently changes Q. |
| linear_density | fibre fineness and length | Linear density | tex; dtex | tex and dtex are linear density, not volume density: 1 tex = 1 g/km and 1 dtex = 1 g/10000 m. A length conversion requires measured total relevant filament length and matching fineness; bale count, area and length alone never imply kg. Use actual mean net bale mass M measured by cp_output for count-to-mass, m=n*M, with configuration and spread retained. |
| formulations | finish and additive inputs | Mass | kg | Whole purchased wet formulation is the external input. Active fraction and carrier water are subledgers, not extra purchases; onsite blending uses actual individual ingredients, mixing energy and losses. Distinguish chip-borne additives from new additions. |
| raw_conversion | liquid/gas and energy measurements | Mass; energy | kg; MJ | Before normalize_period, convert actual integrated volumes using independently supported composition/density at stated conditions, or integrate rates over duration. An already integrated volume is never multiplied by time again. Electricity MJ = measured kWh * 3.6; count energy once. Steam mass/enthalpy and condensate are paired, not a second heat purchase. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased virgin fibre-grade PET chips and actual separately acquired finishes/utilities/packaging at plant receipt; no onsite polymer synthesis |
| starting_condition_role | Foreground gate-to-gate polymer-to-fibre conversion with separately linked upstream suppliers |
| product_classification_scope | Only the stated uncarded virgin PET cut-staple route within CPC 35510; not whole-leaf coverage |
| recursive_input_rule | Tow in cans and internal PET returns are tracked physical transfers with inherited burdens, not purchased fibre or additional Q. Purchased staple/tow changes this starting condition and requires review. |
| upstream_dataset_requirement | Compatible actual virgin fibre-grade chip, finish formulation, packaging and utility providers; a broad flow UUID establishes identity only, not a supplier or cradle-to-gate quantity |
| disclosure | Declare stages, can-tow residence, actual energy/finish systems, quality gate, full period, moisture/finish basis, WIP burdens, included warehouse/dispatch ledger scope, actual geography and upstream gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | pet_staple | Include chip receipt/conditioning, extrusion/filtration/spinning, quench/finish/can handling, creeling/drawing/crimping/drying/final finish, cutting, baling and unique production release. Keep substage meters and internal tow transfers within the connected process. | `jrc-polymers-2007`; `neumag-staple-2023` |
| boundary_services | pet_staple | Retain all attributable actual utilities, start/stop/failed-run energy, cooling/air preparation, abatement, cleaning, packaging, handling and rework. Add a specific atomic card for every real fuel, cleaning chemical, replacement part, waste or measured emission not already listed. Conditional rows are absent only with recorded nonoccurrence, not presumed zero. | `jrc-polymers-2007`; `epa-synthetic-fibres` |
| boundary_release_and_storage | pet_staple | The terminal quantity gate is new production release, not net delivery. In the production ledger Q already contains every newly released bale, including bales still in closing finished-goods stock: never add that stock again as production output. Keep a separate finished-goods warehouse/dispatch mass and carried-burden ledger, including opening/closing stock, returns and actual included storage/packaging/handling/dispatch services. Reconcile release+opening FG+returns=dispatch+closing FG+documented withdrawals on one mass basis. Cancel internal release/receipt and their inherited burden on consolidation; do not cancel real service burdens. Attribute those services to the matching release cohort or retained stock, and disclose unobserved future services. A delivery dataset needs a separately declared delivery Q and full FG burden carry-over; no equality of release and delivery is assumed. |  |
| boundary_reaction_water | pet_staple | This chip-fed remelt route has no inherent polymerisation reaction-water output. Separate chip/finish water, bath water, condensate and physical evaporation from any independently evidenced hydrolysis/degradation species and water consumed/formed. Do not introduce PTA/MEG synthesis, polymerisation-water factors, COD species, or a pair of unknown reaction water and unknown outlet fitted to the same residual. A material change to an integrated synthesis route requires scope review. | `jrc-polymers-2007`; `epa-synthetic-fibres` |
| boundary_excluded | pet_staple | Foreground excludes virgin chip synthesis, recycled-flake preparation, melt-direct polycondensation, fibre carding/combing, yarn/monofilament/strip production, textile conversion, use and end of life. Declare transport legs and capital/infrastructure treatment explicitly; upstream coverage is required before any cradle-to-gate claim. | `jrc-polymers-2007`; `epa-synthetic-fibres` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pet_staple | Connected chip-to-uncarded-staple manufacture | required | Declared virgin PET chip-fed can-tow route | Retain every substage record and internal tow mass/burden handover | per 1 kg reference flow |

### Process: Chip-to-uncarded-staple manufacture (`pet_staple`)

Retain physical records and accumulated burdens for every intermediate tow, bath and same-cohort rework; cancel internal handovers within the connected boundary. Conditional utility/packaging cards do not assert universal occurrence; real distinct formulations, fuels, packaging, controlled species and destinations require individual atomic rows.

#### Inputs

##### Product flows

###### Virgin fibre-grade PET chips (`pet_chips`)

Purchased virgin PET homopolymer chips, with actual supplier grade, IV, delustrant/additive content, crystallinity and moisture certified. The native identity is generic PET granulate: CAS, grade, virgin status, route, mix and supply geography are unspecified, not inferred. Bottle-grade and fixed-purity candidates are not substituted. All chip constituents enter once as supplied; no monomers or inherited additives are procured again.

- Selected flow: polyethylene terephthalate (PET) granulate `4f19f119-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_feed`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Metered purchased electricity (`electricity`)

Collect actual electricity for receipt, chip crystallising/drying, extrusion, filtration, spin manifold, quench-air conditioning, tow cans, drawing, crimping, drying, cutting, baling, controls, compressors, abatement and declared lot-linked handling/storage/dispatch. Record stage subledgers; no catalogue power or successful-run-only estimate. Specify voltage, supplier and geography before background matching.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Purchased process steam (`steam`)

Conditional on real imported steam for tow drawing/heating/drying. Meter supply mass and enthalpy conditions and returned condensate separately. Internally generated steam is an internal utility; count its actual external fuel and water and emissions instead of a second purchased steam burden.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Process make-up water (`water`)

Actual purchased deionised water for onsite finish dilution, drawing baths or cooling make-up, if used. Record each destination; recirculating volumes are not new intake. Carrier water already bought in either finish emulsion is a constituent subledger, not this second purchase. Other water qualities require their own atomic rows.

- Selected flow: Deionised water
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Purchased spin-draw finish formulation (`spin_finish`)

One actual commercial aqueous spin-draw finish supplied to the spinning/tow preparation stage. Record whole wet supplied formulation, supplier identifier, assayed active fraction and carrier water. No generic recipe, active-only procurement or duplicate water. If compounded onsite, replace this purchase with separately acquired actual ingredients and collect mixing energy and losses.

- Selected flow: Aqueous PET spin-draw finish emulsion
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Purchased final-finish formulation (`final_finish`)

One actual customer-specified final-finish formulation applied after tow drying before cutting. Record the full commercial formulation independently of spin-draw finish. If one supplied formulation serves both points, split metered issues between stages and reconcile their sum to one procurement total.

- Selected flow: Aqueous PET final-finish emulsion
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Purchased nitrogen (`nitrogen`)

Only where an actual inerting or blanketing circuit imports nitrogen. Record purity, gas state, meter pressure/temperature and normal-volume definition. Never assume a nitrogen demand from the general process diagram.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Bale wrapper (`bale_wrap`)

Conditional actual PP woven bale wrapper, weighed separately from fibre Q. Measure waste and replacement wrapping as well as accepted-bale wrapping; another wrapper construction requires its own specific row.

- Selected flow: Woven polypropylene bale wrapping cloth
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `jrc-polymers-2007`

###### Bale strapping (`bale_strap`)

Conditional actual steel strap, net issued mass with cut-offs and re-strapping retained. Do not infer the strap composition from a bale count or omit packaging because Q excludes tare.

- Selected flow: Steel bale strapping
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `jrc-polymers-2007`

###### Baler hydraulic-oil make-up (`hydraulic_oil`)

Conditional actual mineral hydraulic oil purchased for the bale press. Use measured make-up and oil-stock changes, distinguish retained oil, spills and exported spent oil, and add other real lubricants as separate rows.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_feed`
- Sources:

###### Replacement melt filter (`new_filter`)

Actual consumed stainless-steel melt filter, matched to replacement and stock records; distinguish reusable cleaned filters from purchased replacements. Polymer retained in spent filters belongs to its measured waste subledger.

- Selected flow: Stainless-steel melt filter
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_feed`
- Sources: `jrc-polymers-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Newly released uncarded PET staple (`pet_staple`)

Terminal Product output: virgin PET textile staple, industrial route, production mix at factory. It is uncarded and uncombed, monocomponent, undyed, solid round-section, drawn/crimped/cut and finished, newly released against the actual buyer specification, net of all wrapping/straps. The native record declares 100% virgin material and textile-fibre industrial production mix at factory; CAS and geography/locationOfSupply are not declared. It specifies no chip route, cut length, fineness, moisture or finish. Declare these independently; no CN/HK or universal provider is inferred. Native descriptive remarks are not recipes or numeric acceptance criteria.

- Selected flow: Polyester short fiber `03377e13-45a0-4774-9cc8-37c8c60523f2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_output`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Returned steam condensate (`condensate`)

Conditional actual condensate crossing back to the steam supplier, measured separately with temperature and quality. Do not count internal recirculation as export or apply a substitution credit without a compatible supplier boundary.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

##### Waste flows

###### Extruder purge (`pet_purge`)

PET melt purge and start-up strand material actually exported as waste; record composition, moisture and destination. Internal remelt returns are tracked loops and not this external waste a second time.

- Selected flow: PET extrusion purge waste
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residual`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Rejected fibre and captured PET dust (`offspec_fibre`)

One PET fibrous waste stream removed from the line, including captured same-polymer dust only if actually managed together. Distinct waste destinations/compositions need separate rows. Reworked fibre retains burden and does not become waste until it leaves the foreground.

- Selected flow: Off-specification PET staple fibre waste
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residual`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Exported finish-bearing wastewater (`wastewater`)

Conditional actual wastewater sent to external treatment after measured onsite handling. Record wet mass, dissolved/dispersed constituents and treatment destination; COD is a treatment indicator, not a chemical species or a reaction-water estimate. Onsite treatment needs its own real energy, chemicals, sludge and species rows.

- Selected flow: PET fibre spin-finish wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residual`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Spent melt filter (`spent_filter`)

Conditional discarded stainless-steel filter with its measured retained PET; count replacement filters as separate actual product inputs when consumed, including their composition and stock. Filter cleaning consumables and emissions are additional atomic exchanges if present.

- Selected flow: PET-contaminated stainless-steel melt filter
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residual`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Spent baler oil (`spent_oil`)

Conditional exported spent hydraulic oil, separated from fibre/finish wastewater. Reconcile equipment oil stocks and any measured spills; no arbitrary loss percentage.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residual`
- Sources:

##### Elementary flows

###### Physical water evaporation (`water_vapour`)

Measured physical water release from chip drying, finish carrier water and any real drawing bath/dryer. Quantify independently of unidentified outlets; account product moisture and liquid discharge. Purchased-polymer remelting creates no inherent polymerisation reaction water.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residual`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

###### Residual PET dust after capture (`pet_dust_air`)

Only independently identified and measured PET particulate emissions after actual abatement, distinct from captured waste. Measure actual finish aerosols and volatile species separately where present; never assign unknown aerosol composition to PET or invent an emission factor.

- Selected flow: PET particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: A_j/Q as one reporting normalization; A_j is the raw actual-period numerator from this card protocol after physical conversion and burden roll-forward, still un-divided, and Q is unique new-release net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residual`
- Sources: `jrc-polymers-2007`; `epa-synthetic-fibres`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_internal | pet_staple | Prevent allocation by treating tow, finish recirculation, reusable cans and same-lot rework as internal transfers. Track their masses and accumulated burdens. A returned released bale is not new production when inspected or repacked; retain original release identity and add actual incremental rework burden. |  |
| allocation_shared | pet_staple | Submeter or subdivide shared utilities and warehouse services first. If unavoidable, use a documented physical causal driver such as measured equipment time/load, actual processed mass or measured occupied bale-days, specific to the service. Retain complete site totals and allocation to other products/old FG, not just this successful output. Do not invent a universal yield, operating load or draw ratio. | `jrc-ilcd-allocation-2010` |
| allocation_waste | pet_staple | No automatic avoided-virgin credit for PET waste, captured dust, condensate or packaging. Determine actual waste/product status, destination and any genuine coproduct independently; apply a disclosed compatible allocation/treatment convention without omitting waste burdens or changing reference Q. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | pet_staple | Unique release and mass | release/weighing/test records | lot_id; first_release_id; prior_release_id; gross; tare; net; moisture_wet_basis; retained_finish; polymer_fraction; cut_length; dtex; crimp; tenacity; elongation; acceptance; time; M; bale_configuration | Owner: production quality manager. Calibrated weighing at first release after cutting/baling, with real moisture and retained-finish assays on matching lots; subtract wrappers/straps. Identify previously released returned mass so it cannot enter new Q. Collect M and distribution by configuration when counts are used. Retain raw masses and tests only, without division. Aggregation context: Sum unique positive newly released net mass as Q; final reporting uses normalize_period once per 1 kg reference flow. aggregation_rule labels the final report basis, not division during collection. | kg; kg/kg; dtex; mm | each lot/release | Matched full period; release cohort | Factory production release; buyer specification | per 1 kg reference flow | Calibration, tare tests, assay method, lot acceptance and duplicate-release audit |
| cp_feed | pet_staple | External solid materials and oil | issue/return/stock ledger | material_id; supplier_grade; lot; opening; receipts; unused_returns; closing; wet_mass; moisture; composition; stage; filter_replacement; oil_makeup | Owner: materials accountant. Weigh actual chip/filter/oil issues and unused returns, reconcile receipt and stock, link certificates and stage/lot. Include start-up, failure and rework issues, not only good runs; independently retain water/additive subledgers. No A/Q in collection. Aggregation context: Retain raw net external use and stage totals; carry into cp_burden, then normalize_period once per 1 kg reference flow. aggregation_rule labels the final report basis, not division during collection. | kg | each issue and stock close | Full period including zero-output runs | Receipt to connected fibre line | per 1 kg reference flow | Supplier certificate, scale, stock reconciliation, replacement log |
| cp_finish | pet_staple | Actual finish formulations | commercial formulation and dosing ledger | formulation_id; supply_lot; wet_issue; return; active_fraction; carrier_water; bath_opening; bath_closing; dilution_water; dosing_point; retain; discharge; mixing_energy | Owner: finish preparation supervisor. Meter each whole supplied emulsion and destinations at both application points; assay active and water, reconcile retained finish, bath stocks and effluent. Onsite mixing records each separately purchased ingredient and losses. Do not count carrier/active masses as new procurement. Retain raw records, no division. Aggregation context: Sum each actual external formulation once; route raw totals through cp_burden and normalize_period once per 1 kg reference flow. aggregation_rule labels the final report basis, not division during collection. | kg; kg/kg; MJ | each supply/dose and period close | Full matched period and bath carry-over | Spin-draw and final-finish circuits | per 1 kg reference flow | Supplier/SDS identity, assays, dosing/stock and wastewater reconciliation |
| cp_utilities | pet_staple | Stage utility burdens | meters and service records | stage; carrier; supplier; geography; voltage; opening_meter; closing_meter; time; rate; integrated_volume; temperature; pressure; density; purity; steam_enthalpy; condensate; runtime; other_product_share | Owner: utilities engineer. Capture complete measured stage and site totals including drying/air preparation, compressor, heating, abatement, failed batches, idle/changeover and rework. Distinguish utility import from internal generation/recirculation; document allocation. Convert raw units with convert_raw, but collect no normalized values. Aggregation context: Raw attributed totals with shared-service allocation retained; cp_burden then normalize_period once per 1 kg reference flow. aggregation_rule labels the final report basis, not division during collection. | kWh; MJ; kg; m3; h | continuous meters plus each batch | Entire matched period, shutdown and restarts included | Declared facility services and real providers | per 1 kg reference flow | Meter calibration, bill reconciliation, density/enthalpy basis and allocation evidence |
| cp_pack | pet_staple | Packaging and finished-goods services | issue/weighing and warehouse ledger | lot; wrapper; strap; net_issue; offcut; rewrap; first_release; opening_FG; closing_FG; dispatch; returns; withdrawal; inherited_burden; storage_days; handling_energy; dispatch_energy; service_cohort | Owner: packaging/warehouse manager. Weigh each packaging component and actual waste. Maintain a separate FG mass/burden ledger and meter real included storage, handling, dispatch and repacking by cohort; do not assume deliveries equal releases or add FG closing stock to production output. Preserve raw totals and opening-stock burden. Aggregation context: Retain raw cohort totals; eliminate internal handovers once on consolidation; cp_burden then normalize_period once per 1 kg reference flow. aggregation_rule labels the final report basis, not division during collection. | kg; MJ; bale-day | each pack/transfer and period close | Full period with explicit release and service cohorts | Pack-out and declared onsite FG services | per 1 kg reference flow | Tare/component measurements, FG reconciliation, service drivers and burden transfers |
| cp_residual | pet_staple | Atomic residuals and species | waste manifests/sampling | stream; species; medium; wet_mass; water; polymer; finish; filter_metal; concentration; sample_time; integrated_flow; dry_wet_basis; abatement; destination; internal_return; reaction_evidence | Owner: environmental engineer. Weigh waste streams and sample actual outlet species/compartments; preserve sampling coverage and outlet flows. Measure phase water independently; identify actual reaction species only with independent evidence. Record captured and residual emissions separately, with no COD-to-species or closure-residual fitting. No collection normalization. Aggregation context: Retain raw stream totals and uncertainty; cp_burden then normalize_period once per 1 kg reference flow. aggregation_rule labels the final report basis, not division during collection. | kg; m3; kg/m3 | each event and representative sampling | Full period including starts, failures and cleaning | Every actual outlet after onsite control | per 1 kg reference flow | Weighbridge/manifests, assay/sampling plan, species evidence and treatment boundary |
| cp_burden | pet_staple | Period WIP, failure and stock burden reconciliation | linked mass and burden ledger | period; run_id; stage; lot; opening_WIP; closing_WIP; opening_carried_exchange; closing_carried_exchange; zero_output_runs; rework_transfer; FG_transfer; other_outputs; actual_period_exchange; released_cohort_services | Owner: LCI accountant, reconciled with production and warehouse owners. Preserve every raw numerator by stage and cohort, plus opening/closing WIP and FG carried burdens. Carry closing WIP forward and consume opening burden once when released. Failed/zero-output runs and rework remain assigned or transparently carried to the matching product; never dropped or double counted. Collect un-divided amounts only; do not execute A/Q here. Aggregation context: Preserve reconciled raw A_j and Q separately for normalize_period; final basis per 1 kg reference flow, no prior division. aggregation_rule labels the final report basis, not division during collection. | kg; MJ; exchange-specific units | each transfer/run and period close | Full campaign across relevant period boundaries | Connected line plus separately bounded FG services | per 1 kg reference flow | Mass/burden roll-forward, stage records, failure log, allocation and cohort reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert raw physical quantities to each row unit before normalization: electricity MJ=3.6*kWh; liquid mass=integrated_volume*measured_density; gas mass uses actual composition and stated pressure/temperature basis; rate totals=sum(rate*duration). Never multiply integrated volume by duration. | raw_quantity; density; composition; temperature; pressure; duration; cp_utilities | converted raw quantities |  |
| release_q | pet_staple | Q=sum(unique first-release accepted net fibre kg), with measured residual water/finish included and packaging tare excluded. Count released material once even if later returned, reworked, repacked or reaccepted. Q>0 is required for reporting; zero-output periods retain all raw burdens for explicit matched-cohort carry-over. | accepted_net_mass; first_release_id; prior_release_id; cp_output | Q |  |
| burden_rollforward | all inventory rows | For each exchange j, assemble raw A_j=actual attributed period exchange+opening WIP carried exchange-closing WIP carried exchange, with documented attribution to other real outputs where needed. Internal transfers/rework cancel, not their incremental burdens. Add only matched-cohort FG service increments from the separate ledger; do not import old FG production burdens into new-release Q. Every closing burden has one next-period receiver. | actual_period_exchange; opening_carried_exchange; closing_carried_exchange; FG_service_increment; cp_burden; cp_pack | A_j |  |
| normalize_period | all inventory rows | q_j=A_j/Q is the sole reporting normalization to per 1 kg reference flow. All protocols supply un-divided raw numerators, after convert_raw and burden_rollforward. Card amount formulas and aggregation references describe this same operation, not successive divisions. Terminal pet_staple=Q/Q=1 kg. | A_j; Q; cp_burden; cp_output | q_j |  |
| physical_reconciliation | all inventory rows | For each constituent separately, opening process stocks+external inputs=Q constituent+other measured external Product outputs+external wastes/emissions+closing WIP/process stocks, after cancelling internal transfers. Include returned condensate in the non-reference Product-output subledger. Record measured packaging carried with released bales as a separate physical output/subledger excluded from net fibre Q; count that packaging once without creating extra fibre output. Q already contains newly released FG stock, so do not add closing FG in this production equation. Use a separate FG equation under boundary_release_and_storage. Reconcile PET, finish active, water, filter metal and packaging separately, and relevant elements from actual species assays; disclose measurement uncertainty and unexplained difference rather than fit unknown reaction water or outlet. | raw_materials; Q; waste; emissions; opening_stocks; closing_stocks; cp_residual; cp_burden; other_outputs; released_packaging; cp_utilities; cp_pack | constituent and elemental reconciliation |  |
| moisture_and_regain | pet_staple | For the same weighed lot, D=m*(1-w); m_water=m*w; polymer=D-measured_nonwater_finish-other_measured_nonpolymer_constituents. R=m_water/D. Any contractual mass D*(1+R_standard) is separately labelled and cannot silently replace as-released Q; no universal w, finish fraction or R_standard is supplied. | net_mass; w; finish_nonwater; nonpolymer_constituents; cp_output | D; m_water; polymer; R |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inputs and reference | Verify actual polymer, virgin chip route, full supplied formulations and finished uncarded form against certificates. UUID broad identity never supplies absent geography, grade, water, oil or quantities. | Supplier certificates; native fields; lot acceptance |
| period | all inventory rows | One complete matched period/cohort; failed starts, zero output, rework, WIP and FG burden transfers are explicit. No successful-batch-only denominator or omitted negative balance. | cp_output; cp_burden; cp_pack |
| measurement | all measured quantities | Retain raw units, calibration, tare, assays, density/state, substage utility totals, uncertainty and any shared-service driver. Missing measurement remains a concrete-data gap, never an invented default. | Raw meter and lab records |
| completeness | all physical outlets | Identify every actual stream and species; distinguish physical water from reaction chemistry, purchased formulations from constituent subledgers, capture from release and internal circulation from external supply. | Mass/element balance and outlet evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | pet_staple | Reject filament yarn, monofilament/strip, sold tow, carded/combed fibre, recycled or non-PET feed, hollow/bicomponent/dope-dyed fibre and integrated-polymerisation substitution within this route. Check actual cut staple and reference row pet_staple against the reference UUID in both languages. | `jrc-polymers-2007`; `epa-synthetic-fibres` |
| validate_denominator | all inventory rows | Require unique positive new-release Q, actual as-released wet/finish basis, tare exclusion and once-only normalization. Reject use of delivery mass, added closing FG production, repeat returns/reacceptance output, or count/area/length conversions without measured mass evidence. |  |
| validate_burden | all inventory rows | Require full period, failed/zero-output burdens, WIP/FG carry-over and independent protocols with raw undivided numerators. Closing burden must roll forward once, opening burden must be consumed once, and real included warehouse/dispatch/packaging/rework burdens must survive internal elimination. |  |
| validate_physical | all material rows | Check complete wet/dry/finish and relevant elemental closure with independently evidenced outlet species; no inherent remelt polymerisation water, COD species, duplicated formulation/carrier procurement or residual-fitting. Distinguish linear from volume density and integrated volume from a rate. |  |
| validate_native | all UUID-bearing rows | Preserve complete native identity restrictions in consumable card descriptions. Supplier, grade, geography, route and measurement compatibility require actual evidence. Blank auxiliary UUIDs require later matching, not fabricated certainty or a replacement final reference. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified input to fibre preparation, yarn or nonwoven models after provider/basis matching |
| allowed_use | Declared 1 kg production-release uncarded virgin PET staple for this chip-fed route |
| excluded_use | Whole CPC coverage, use-life equivalence, delivery-Q equivalence, other polymers/routes and scientific-approval claims |
| required_metadata | All required qualifiers; exact boundary/services; Q and period; upstream providers; units; allocation; WIP/FG burden ledger; moisture/finish; geography |
| required_quality_disclosure | Raw-data completeness, uncertainty, unobserved future services, provider gaps and independent scientific review pending |
| update_trigger | Polymer/grade/virgin status, route, finish, moisture/reference gate, site/services, supplier or measurement change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-polymers-2007 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | August 2007, §§10.2.6–10.2.7, printed pp.167–168 (PDF193–194), Figures10.7–10.9: chip conditioning and can-tow spinning/finishing/cut/bale sequence. No temperature, recipe, yield, moisture or performance values adopted. |
| epa-synthetic-fibres | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c06s09_0.pdf | AP-42 §6.9, 9/90 reformatted1/95, §6.9.2.1 and Figure6.9-2, PDF2–3: independent melt-versus-solvent route and staple-versus-tow/yarn distinction; actual oil/aerosol controls require collection. No generic emission factors, fixed filament counts or plant recipe adopted. |
| neumag-staple-2023 | handbook | https://www.oerlikon.com/ecoma/files/DL_ONE_Staple_Fiber_Technology_2023_en.pdf?download=true | 2023 manufacturer brochure, printed p.2 “The idea” on PDF2 spread: industrial extrusion/spinning/drawing/crimping/cutting/baling steps only. Other one/two-step and integrated-polycondensation systems, marketing savings and capacities are not the selected factory/SKU or numeric defaults. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, First edition March2010, section7.9.3, printed pp.257–258 (PDF277–278); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Method support for attributional cases where allocation rather than substitution is selected: virtual subdivision and flow-specific determining physical causality support the measured shared-utility and warehouse-service allocation rule. The process literature supplies manufacturing context, not this LCA method. No generic mass/time share, economic coefficient, production/yield/utility factor, substitution credit or PEF/CFF conformity is established; actual service-specific drivers, site totals and cohort attribution remain required. |
