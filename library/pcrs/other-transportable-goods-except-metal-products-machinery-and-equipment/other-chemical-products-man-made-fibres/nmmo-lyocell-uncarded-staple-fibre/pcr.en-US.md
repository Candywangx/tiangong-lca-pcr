---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.nmmo-lyocell-uncarded-staple-fibre
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# NMMO-route lyocell uncarded staple fibre manufacture and supply


## 1. Scope and Applicability

This PCR covers one industrial route: dissolving-grade wood pulp physically dissolved in aqueous N-methylmorpholine N-oxide (NMMO), solution spinning and aqueous precipitation, washing, spin finishing, drying, cutting to staple and supply as uncarded, uncombed fibre. The actual order of cutting, washing and drying is declared; the primary sources document different industrial arrangements and are not presented as one factory. Sources jrc-polymers-2007, lenzing-lyocell-technology and cirfs-lyocell-production establish the route and real staple endpoint. They supply no default recipe, operating setting, solvent recovery rate, allocation share or factory inventory. This methodology defines collection for a future actual site, rather than asserting measured performance.

The terminal reference gate is actual net delivered fibre Q at the producing site dispatch gate, after the declared packing, warehousing, handling and loading operations. P is newly positive quality-released fibre transferred to the supply ledger. Q and P are independently reconciled and are not assumed equal. The reference is 1 kg of fibre in its measured as-supplied moisture and finish state, excluding all packaging tare. Neither pulp, polymer, dope, wet tow, a held bale nor an internal release is terminal delivered fibre.

Exclude viscose/modal xanthation and chemical regeneration, cupro, acetate/triacetate dissolution or synthesis, synthetic high-polymer fibres, sold tow, wound continuous filament yarn, carded/combed fibre, spun staple yarn and fabrics. Cross-linked, dyed, blended, functionalised and recycled-feedstock variants require a separately evidenced extension; do not infer them from a generic cellulose identity. The material PCR for prepared artificial staple fibres starts after this unprepared supply state; artificial filament yarn has a different terminal form. This bounded method proposes only a narrower relation to CPC 3.0 35540. It does not create or accept a mapping.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.nmmo-lyocell-uncarded-staple-fibre |
| classification_refs | CPC 3.0: 35540; proposed narrower scope, acceptance pending |
| covered_products | Unblended, unmodified lyocell staple from dissolving-grade wood pulp and aqueous NMMO, supplied before carding or combing |
| excluded_products | Viscose, modal, cupro, cellulose acetate/triacetate, synthetic fibres, tow for sale, filament yarn, prepared fibre, spun yarn, functionalised/recycled-feedstock variants without an evidenced extension |
| representative_product | One declared lyocell staple grade and cut length, at measured supplied moisture/finish state |
| production_route | Pulp receipt, NMMO direct dissolution and filtration, solution spinning, aqueous precipitation, washing, finishing, drying and cutting in documented site order; NMMO/water recovery, packing, storage and dispatch |
| market_state | Net delivered uncarded staple fibre at producing-site dispatch gate; packaging and finish/moisture disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of uncarded lyocell staple fibre for subsequent textile or nonwoven manufacture |
| How much | 1 kg net actual delivered fibre Q at the producing-site dispatch gate |
| How well | One documented grade, cut length, linear density, supplied moisture and finish state; no packaging tare in Q |
| How long or cycle | One reconciled production-to-delivery cohort; no service lifetime is claimed |
| reference_flow_link | delivered_fibre |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Regenerated cellulose staple fibre `d0e37315-a795-4f13-85b9-325c681d3c57` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | NMMO direct-dissolution lyocell route and dissolving wood-pulp origin; single grade / staple cut length and linear density specification; uncarded / uncombed / unblended and unmodified condition; actual operation order and site technology; as-supplied net fibre mass / measured moisture basis and finish add-on; packaging components / tare and loading gate; P new-release and Q actual-delivery definitions with unique lot lineage; opening and closing WIP/finished stocks with carried burdens; returns / failed runs / zero-output runs and rework; site / geography / production and delivery cohort periods; actual NMMO formulation assay and separate water/finish subledgers; recovery / purge / effluent treatment and measured emission destinations; upstream providers / transport and shared-service allocation evidence |

Every required qualifier must appear in dataset metadata, process notes, reference-flow comments or equivalent fields; a missing qualifier makes that dataset reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_supply_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the unique positive net delivered fibre at the declared gate, not P. Weigh each delivered bale net of all packaging; record moisture/finish state and exclude cancelled/held dispatches. Returns and reshipments cannot manufacture a second accepted quantity. |
| fibre_moisture | all fibre and pulp masses | Mass | kg | Keep wet net fibre, dry cellulose, non-cellulosic pulp solids, finish solids, residual NMMO and water as separate measured components. Drying-test mass loss is not automatically pure water; use the actual validated method. Convert wet-basis moisture w to dry fibre mass only with declared scope: dry mass = wet mass × (1-w); dry-basis regain r gives wet mass = dry mass × (1+r). Do not apply either factor twice or erase finish. |
| whole_formulation | external solution inputs | Mass | kg | Procure whole NMMO solution and whole spin-finish emulsion once. Assayed NMMO/active finish and carrier water are constituent subledgers, never duplicate purchases. Onsite blending instead records separately purchased ingredients plus actual blend losses and energy. |
| utility_dimensions | metered utilities | Energy or volume | kWh, MJ, m3 | Preserve electricity and useful steam heat separately; steam mass needs measured pressure/temperature/quality and return-condensate enthalpy for heat conversion. Rate × duration yields volume; an already integrated volume gets no second duration multiplier. Convert volume to mass only with independent fluid-state density, not a secondary flow-property factor. |
| physical_ledger | fibre and recovery processes | Mass and elements | kg | Close total physical mass and relevant elemental ledgers independently of the species/reaction ledger. Direct dissolution, aqueous precipitation and water evaporation do not establish stoichiometric reaction water. Independently evidence any real degradation, cleaning or treatment reactions and actual species; never solve unknown reaction water and an unknown outlet from the same residual, or infer species from COD. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received dissolving wood pulp, purchased whole NMMO solution, finish emulsion, utilities and packing at the producing site; upstream inputs and transport remain linked |
| starting_condition_role | Foreground receipt gate for one NMMO-route fibre/supply system, with inherited opening-stock burdens |
| product_classification_scope | Only uncarded lyocell staple within proposed CPC 3.0 35540 narrower scope; no filament-yarn or prepared-fibre substitution |
| recursive_input_rule | Externally received same-category fibre remains an explicit upstream-linked input. Internal recovered solvent, water, fibre returns and transfer P retain their lineage and cancel on consolidation; they are not fresh procurement or new production |
| upstream_dataset_requirement | Use route-, supplied-state-, geography- and property-compatible datasets for pulp, whole solutions, energy, packaging, transport and waste treatment. An identity UUID does not establish a provider quantity |
| disclosure | Declare all actual process owners, start/end gates, P/Q, WIP/finished opening/closing stocks and carried burdens, treatment cut points, internal transfer cancellation, stock cohort method and allocated services |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| route_scope | all processes | Keep NMMO direct dissolution distinct from chemical derivatisation/regeneration and synthetic polymer manufacture. No source recipe, recovery percentage or nominal grade becomes a plant value. | jrc-polymers-2007; lenzing-lyocell-technology; cirfs-lyocell-production |
| complete_gate | all processes | Include actual receipt handling, dissolution, filtration, spinning, precipitation, washing, cutting, finishing, drying, solvent/water recovery, treatment services, packing, storage, handling and dispatch to the selected Q gate. Add atomic rows and protocols for every actual stabiliser, cleaning/regeneration chemical, fuel, refrigerant, packing component, treatment reagent and measured emission absent from these baseline cards; missing collection is not zero. Model internal boilers and treatment explicitly if present, with no purchased-steam or offsite-treatment double count. | jrc-polymers-2007; lenzing-lyocell-technology |
| period_stock | all processes | Collect full raw period numerators including failed and zero-output runs, rework and opening/closing WIP with inherited burdens. Supply ledger on a consistent component basis: opening finished fibre + P + external accepted receipts + physical returns + independently measured moisture gains = Q + closing finished fibre + other documented physical outlets + independently measured moisture losses. Packaging is separate. Identify repeat dispatches as physical transfers without new accepted Q; reverse/correct prior delivery acceptance for returns while retaining inherited burdens, and release returned stock once without new P. Reconcile each unique lot and its moisture state; do not force as-supplied masses of different moisture into equality. Manufacturing output is P, never P plus closing stock of that same P. Carry the burdens of all undelivered stock; include them when its cohort is delivered, not again as new production. Internal P output/input cancels on consolidation. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fibreline | Direct dissolution, fibre formation and staple finishing | required | Actual operation in the declared route; conditional exchanges require records | manufacturing | per 1 kg reference flow; internal transfers by actual cohort attribution |
| recovery | NMMO and water recovery | required | Actual operation in the declared route; conditional exchanges require records | manufacturing | per 1 kg reference flow; internal transfers by actual cohort attribution |
| supply | Packing, finished storage and actual dispatch | required | Actual operation in the declared route; conditional exchanges require records | supply | per 1 kg reference flow; internal transfers by actual cohort attribution |

### Process: Direct dissolution, fibre formation and staple finishing (`fibreline`)

#### Inputs

##### Product flows

###### Dissolving-grade wood pulp (`wood_pulp`)

Whole received pulp including measured moisture; assay cellulose and other dry solids separately. Record wood origin and bleaching grade; no polymer granule or textile-fibre substitution.

- Selected flow: Dissolving-grade wood pulp
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Aqueous N-methylmorpholine N-oxide solution (`fresh_nmmo`)

Whole external purchased makeup solution, with supplier formulation, assay, hydration/carrier-water basis and packaging declared. Internal recovered solution is a different physical row; constituent NMMO and water are not extra purchases.

- Selected flow: Aqueous N-methylmorpholine N-oxide solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Recovered aqueous NMMO solution (`nmmo_return_in`)

Internal transfer paired with nmmo_return_out using measured solution mass, NMMO assay, water and contaminants. No avoided-virgin credit or fresh purchase; cancel paired quantities and burdens once.

- Selected flow: Recovered aqueous NMMO solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Process water (`fibre_water`)

External makeup water for actual premix, aqueous precipitation, washing and cleaning; internal recovered water is separate. Disclose supply/treatment and prevent solution-carrier water duplication.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Recovered process water (`water_return_in`)

Internal transfer paired with water_return_out, retaining residual NMMO/solids assays. It is not purchased makeup or an automatic effluent discharge.

- Selected flow: Recovered process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Aqueous lyocell spin-finish emulsion (`spin_finish`)

One actual purchased spin-finish formulation including carrier water; retain composition/SDS, active solids, application losses, fibre retention and effluent share from records. No assumed recipe or add-on.

- Selected flow: Aqueous lyocell spin-finish emulsion
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Electricity (`fibreline_electricity`)

Actual process-owned meter or documented causal service assignment, including idle, failed runs and rework; do not duplicate recovery or warehouse meters in fibreline totals.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Purchased process steam (`fibreline_steam`)

Actual purchased steam and heat duty with steam state and returned condensate documented. Onsite boiler instead requires separate actual fuel/air/emission accounting and no duplicate purchased-steam burden.

- Selected flow: Purchased process steam
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

#### Outputs

##### Product flows

###### Regenerated cellulose staple fibre (`released_fibre`)

P is newly positive quality-released uncarded lyocell staple transferred internally to received_fibre; not terminal Q. Native identity is generic regenerated cellulose staple fibre, with empty mix/location and route components, no CAS, no geographic/locationOfSupply or medium restriction, no grade/moisture/finish specification and one Mass reference property. It does not establish lyocell technology, supplier quantities or regional representativeness; these require the declared wood-pulp/NMMO route and actual lot evidence. Preserved source classification 399 is legacy metadata, distinct from current 35540.

- Selected flow: Regenerated cellulose staple fibre `d0e37315-a795-4f13-85b9-325c681d3c57`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Spent aqueous NMMO liquor (`spent_liquor_out`)

Internal whole-liquor transfer paired with spent_liquor_in, including NMMO, water, dissolved solids and finish contamination. Do not also count it as wastewater leaving the consolidated site.

- Selected flow: Spent aqueous NMMO liquor
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Returned steam condensate (`fibreline_condensate_return`)

Actual external condensate returned to the steam supplier, including measured mass, state and enthalpy. Retain physical water mass separately from useful heat MJ; do not credit return heat twice or confuse it with internal process-water recovery.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### Unrecovered off-spec lyocell staple fibre (`offspec_fibre`)

Only material actually leaving as waste; distinguish recoverable internal rework and quarantine. Retain moisture, finish and residual solvent plus actual treatment and carried burden.

- Selected flow: Unrecovered off-spec lyocell staple fibre
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Cellulose-rich dope filtration residue (`dope_filter_residue`)

Whole wet residue with retained NMMO/water measured; do not count its embedded solution again as an external solvent loss stream.

- Selected flow: Cellulose-rich dope filtration residue
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Lyocell fibreline wastewater (`fibre_effluent`)

Only actual purge leaving the fibreline recovery loop for declared onsite/offsite treatment; measure integrated effluent, NMMO, solids and treatment destination. COD is a quality measurement, not a molecular emission identity.

- Selected flow: Lyocell fibreline wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

##### Elementary flows

###### Water, to air (`fibreline_water_air`)

Measured external evaporation/vent water after actual capture; internal condensate or recycled water is not an elementary emission. Physical phase transfer is not reaction-water formation.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Cellulose particulate, to air (`fibreline_cellulose_dust`)

Actual uncaptured cellulose dust with sampling basis and air compartment. Collected dust belongs in the appropriate waste/rework ledger and is not simultaneously emitted.

- Selected flow: Cellulose particulate, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### N-methylmorpholine N-oxide, to air (`fibreline_nmmo_air`)

Only an independently identified and quantified external NMMO loss/aerosol after capture. No automatic volatilisation assumption or solvent-balance-residual emission factor; actual other species require separate measured rows.

- Selected flow: N-methylmorpholine N-oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibreline`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

### Process: NMMO and water recovery (`recovery`)

#### Inputs

##### Product flows

###### Electricity (`recovery_electricity`)

Actual process-owned meter or documented causal service assignment, including idle, failed runs and rework; do not duplicate recovery or warehouse meters in fibreline totals.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Purchased process steam (`recovery_steam`)

Actual purchased steam and heat duty with steam state and returned condensate documented. Onsite boiler instead requires separate actual fuel/air/emission accounting and no duplicate purchased-steam burden.

- Selected flow: Purchased process steam
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Spent aqueous NMMO liquor (`spent_liquor_in`)

Exact internal counterpart of spent_liquor_out; include filtration/purification/concentration as actually installed, with separately identified consumables and all startup/shutdown losses.

- Selected flow: Spent aqueous NMMO liquor
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Process water (`recovery_water`)

Measured external recovery/cleaning makeup; distinguish recovered condensate and resin-regeneration water if used. Add each actual regeneration chemical separately rather than assuming an acid/alkali recipe.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

#### Outputs

##### Product flows

###### Recovered aqueous NMMO solution (`nmmo_return_out`)

Internal solution delivered back to nmmo_return_in; retain composition and recovery stock. Recovery fraction is calculated from actual consistent NMMO masses and period stocks, never a published percentage.

- Selected flow: Recovered aqueous NMMO solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Recovered process water (`water_return_out`)

Internal separated water delivered to water_return_in, with measured residual solvent/solid content and destination. No external discharge credit.

- Selected flow: Recovered process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Returned steam condensate (`recovery_condensate_return`)

Actual external condensate return from recovery heating. Steam input water mass and returned condensate remain in the physical water ledger; energy burden follows net actual heat and documented supplier convention once.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### NMMO recovery purge wastewater (`recovery_purge`)

Actual aqueous purge to declared treatment, with whole liquid mass and constituent NMMO/degradation-solute assays. Preserve treatment burdens and add actual final species only after evidenced treatment.

- Selected flow: NMMO recovery purge wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### NMMO recovery filtration residue (`recovery_residue`)

Actual removed wet solids with measured retained solution, disposal route and replacement-filter burden. Additional spent resin/carbon requires its own atomic row when present.

- Selected flow: NMMO recovery filtration residue
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

##### Elementary flows

###### Water, to air (`recovery_water_air`)

Measured external evaporation/vent water after actual capture; internal condensate or recycled water is not an elementary emission. Physical phase transfer is not reaction-water formation.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### N-methylmorpholine N-oxide, to air (`recovery_nmmo_air`)

Only an independently identified and quantified external NMMO loss/aerosol after capture. No automatic volatilisation assumption or solvent-balance-residual emission factor; actual other species require separate measured rows.

- Selected flow: N-methylmorpholine N-oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

### Process: Packing, finished storage and actual dispatch (`supply`)

#### Inputs

##### Product flows

###### Electricity (`supply_electricity`)

Actual process-owned meter or documented causal service assignment, including idle, failed runs and rework; do not duplicate recovery or warehouse meters in fibreline totals.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Regenerated cellulose staple fibre (`received_fibre`)

Internal counterpart of released_fibre P; finished opening stock is independently carried with its historical burdens. Native generic regenerated-cellulose identity has no specified route, grade, moisture, finish, CAS, geography/locationOfSupply or medium; empty mix/location and route name components do not establish lyocell or a regional mix. Current CPC35540 and preserved legacy source399 are disclosed distinctly. The actual wood-pulp/NMMO uncarded staple cohort supplies the missing specificity.

- Selected flow: Regenerated cellulose staple fibre `d0e37315-a795-4f13-85b9-325c681d3c57`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Polyethylene bale wrapping film (`pe_wrap`)

Whole actual PE wrapping mass including trims and damaged wraps; excluded from fibre Q. Declare resin/additives, recycled share, supplier and material structure; substitute no generic packaging bundle.

- Selected flow: Polyethylene bale wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Polyethylene terephthalate bale strap (`pet_strap`)

Actual PET strap separately from wrapping; record composition, receipts, stock and discarded strap. Another actual strap material needs its own identity, not relabelling.

- Selected flow: Polyethylene terephthalate bale strap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

##### Elementary flows

###### Water, from air (`supply_water_air_in`)

Only independently measured atmospheric moisture absorbed during actual fibre conditioning/storage. Keep whole fibre mass and moisture components separate; never infer this input as an unconstrained mass-balance closure or count purchased conditioning water here. Demonstrated absence can be recorded without inventing a zero.

- Selected flow: Water, from air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`

#### Outputs

##### Product flows

###### Regenerated cellulose staple fibre (`delivered_fibre`)

Terminal Product output selected by reference_flow_link. Q is unique actual net delivered NMMO-route wood-pulp lyocell uncarded/uncombed staple, at measured supplied moisture and finish, excluding PE/PET tare. Native generic regenerated cellulose staple has empty mix/location and route components; CAS, grade, moisture, finish, medium and geography/locationOfSupply are not specified. It establishes neither a lyocell-specific background provider nor regional representativeness. Preserve current CPC35540 separately from historical source399 metadata. Actual lot route/form/state/supply gate must establish applicability; the unspecified native supplier is not a contrary route. P internal transfer and any independently real coproduct cannot be hidden if they share this UUID.

- Selected flow: Regenerated cellulose staple fibre `d0e37315-a795-4f13-85b9-325c681d3c57`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

##### Waste flows

###### Waste polyethylene wrapping film (`pe_scrap`)

Actual wrap trim and damaged film crossing the waste boundary; exclude internally reused wrap, retain actual treatment and stock.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Waste PET bale strap (`pet_scrap`)

Actual discarded strap with treatment route; do not equate waste to total purchased strap or reduce fibre Q by strap mass twice.

- Selected flow: Waste PET bale strap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Waste lyocell staple fibre from handling (`supply_fibre_loss`)

Measured unrecoverable warehouse/loading loss with finish/moisture and lot attribution. Returned or held fibre is stock/rework until a real waste decision is recorded.

- Selected flow: Waste lyocell staple fibre from handling
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

##### Elementary flows

###### Cellulose particulate, to air (`supply_cellulose_dust`)

Actual uncaptured cellulose dust with sampling basis and air compartment. Collected dust belongs in the appropriate waste/rework ledger and is not simultaneously emitted.

- Selected flow: Cellulose particulate, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`; `lenzing-lyocell-technology`

###### Water, to air (`supply_water_air_out`)

Independently measured actual moisture loss during fibre storage/loading, with receiving air compartment and lot state recorded. It changes as-supplied fibre mass but creates neither chemical reaction water nor new dry cellulose output.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; one report operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: `jrc-polymers-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| internal_loops | internal transfers | Keep P and NMMO/water transfers explicit in the process inventories and cancel matched internal exchanges on consolidation. Their energy, losses, waste treatment and carried burdens remain. Internal recovery is neither a coproduct credit nor fresh production. |  |
| shared_services | shared services and stock | Prefer direct process/lot metering. Subdivide shared facilities; otherwise document causal physical drivers and sensitivity. Carry stock burdens to delivered cohorts by a consistent explicit method. Sold secondary material requires real product/specification and an independently justified allocation method; waste price alone is not product evidence. No default share or avoided-burden credit. | jrc-ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fibreline | fibreline | atomic exchanges and service burdens | period ledger | process owner; period; lot; meter start/end; receipts/issues; whole formulation mass and assays; output and disposition; internal transfer IDs; opening/closing WIP/stock; inherited burden vector; failed/zero-output runs; rework; steam mass and state; condensate mass and enthalpy; independently measured moisture gains/losses; integrated volume or rate and duration; density evidence | The named process owner retains unnormalised raw records, full boundary numerators and opening/closing carried burdens. Reconcile each atomic exchange and paired transfers; no A_i/Q in collection. Retain all failed and zero-output operation burdens; causally assign shared services once. Supply owner also retains P, Q, dispatch/acceptance/return IDs, stock lineage and tare/moisture tests. | kg; kWh; MJ; m3; h | each lot and meter interval | complete reporting period plus stock-origin periods | one declared site, route and grade; named owner | per 1 kg reference flow | calibration; invoices; assays; mass ledger; stock/burden reconciliation; treatment manifests |
| cp_recovery | recovery | atomic exchanges and service burdens | period ledger | process owner; period; lot; meter start/end; receipts/issues; whole formulation mass and assays; output and disposition; internal transfer IDs; opening/closing WIP/stock; inherited burden vector; failed/zero-output runs; rework; steam mass and state; condensate mass and enthalpy; independently measured moisture gains/losses; integrated volume or rate and duration; density evidence | The named process owner retains unnormalised raw records, full boundary numerators and opening/closing carried burdens. Reconcile each atomic exchange and paired transfers; no A_i/Q in collection. Retain all failed and zero-output operation burdens; causally assign shared services once. Supply owner also retains P, Q, dispatch/acceptance/return IDs, stock lineage and tare/moisture tests. | kg; kWh; MJ; m3; h | each lot and meter interval | complete reporting period plus stock-origin periods | one declared site, route and grade; named owner | per 1 kg reference flow | calibration; invoices; assays; mass ledger; stock/burden reconciliation; treatment manifests |
| cp_supply | supply | atomic exchanges and service burdens | period ledger | process owner; period; lot; meter start/end; receipts/issues; whole formulation mass and assays; output and disposition; internal transfer IDs; opening/closing WIP/stock; inherited burden vector; failed/zero-output runs; rework; steam mass and state; condensate mass and enthalpy; independently measured moisture gains/losses; integrated volume or rate and duration; density evidence | The named process owner retains unnormalised raw records, full boundary numerators and opening/closing carried burdens. Reconcile each atomic exchange and paired transfers; no A_i/Q in collection. Retain all failed and zero-output operation burdens; causally assign shared services once. Supply owner also retains P, Q, dispatch/acceptance/return IDs, stock lineage and tare/moisture tests. | kg; kWh; MJ; m3; h | each lot and meter interval | complete reporting period plus stock-origin periods | one declared site, route and grade; named owner | per 1 kg reference flow | calibration; invoices; assays; mass ledger; stock/burden reconciliation; treatment manifests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_burdens | all inventory rows | Retain full raw period exchange vector R_i. Derive unnormalised delivered-cohort numerator A_i = opening carried vector + current attributable vector - closing carried vector - separately documented other-outlet carried vector. Apply documented lot tracing or consistent causal stock-layer method at WIP and finished-stock gates. Include failed/zero-output and rework burdens; cancel internal P, NMMO and water transfers once without cancelling their actual processing burdens. Preserve every undelivered burden for later delivery. | R_i; opening_carried_vector; closing_carried_vector; other_outlet_carried_vector; cp_fibreline; cp_recovery; cp_supply | A_i |  |
| normalize_supply | all inventory rows | a_i = A_i / Q. This is the sole normalisation to 1 kg net actual delivered reference flow; the card amount and protocol aggregation describe this same report operation, not additional divisions. Q must be positive and from the identical product, route, supplied state and delivered cohort; no positive Q means no per-kg result. | A_i; Q; cp_supply | a_i |  |
| constituent_accounts | all solution and fibre rows | For each whole commercial solution or wet fibre mass, multiply by independently measured matching constituent fraction for its subledger only. Close NMMO, water, cellulose and finish with stock changes, measured residues, effluent, actual emissions and independently identified transformation species. Internal solution recovery is not external purchase; no fixed solvent recovery fraction or residual-fitted outlet. | whole_mass; constituent_assay; stock_changes; measured_outlets | constituent_ledger |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | Verify actual grade, state, route, supplier, geography and full native identity; a generic reference UUID supplies no recipe or provider amount. Keep unresolved auxiliary UUIDs explicit and match real providers before dataset use. | Direct identity records; product and supplier specifications |
| period_completeness | all processes | Reconcile raw period inputs, internal transfers, positive accepted release P, Q delivery, all stocks and carried burdens including failures/rework; investigate residuals with measured uncertainty, never force closure. | Lot ledger; calibrated scales/meters; opening/closing burden vectors |
| environment | recovery and treatment | Identify each actual outlet and receiving medium from sampling/analysis and treatment evidence. Wastewater to a treatment provider is not the same as a direct elemental water discharge. Do not infer zero air emissions or reaction-water stoichiometry from a closed-loop label. | Sampling methods; permits/monitoring; treatment contracts and mass/species ledgers |
| quantities | all inputs and outputs | No source-paper recipe, lab setting, claimed recovery rate or industry allocation share substitutes for actual matched records. Missing auxiliaries require completion, not invented quantities or an automatic downgrade of this authored collection method. | Originals, real source scope and foreground protocol evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| terminal | delivered_fibre | Exactly one explicit terminal Product row is selected by reference_flow_link, with the same UUID in both languages. Real internal or coproduct rows sharing that UUID remain visible. Terminal quantity is 1 kg supplied-state fibre, not pulp, dope, tow, P, stock, gross bale or yarn. |  |
| normalisation | all inventory rows | Require positive Q, matched raw cohort and carried burdens, once-only normalize_supply, separately reconciled P/Q and all opening/closing WIP/finished stocks. Returns/re-acceptance do not create new production. Missing raw data, untraced stocks or unexplained duplicate exchanges make the produced dataset incomplete. |  |
| atomic_completeness | all processes | Every real material, utility, waste, treatment and elementary species is one correctly typed exchange with its own amount, unit, process owner and collection link. Conditional absence needs actual evidence; all additional actual consumables/outlets must be added as atomic rows before dataset completion. Do not emit wastewater treatment twice or invent molecular species from COD, stock residuals or physical evaporation. |  |
| readiness | dataset use | Scientific review, classification acceptance and publication are independent pending decisions. Structural/measurement/native-format checks establish neither methodology approval nor measured plant performance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared-route supplied lyocell staple input for later spinning or nonwoven manufacture, once a complete real dataset is produced and reviewed |
| allowed_use | Only matching uncarded staple grade/state/supply gate, with provider and geography compatibility evaluated |
| excluded_use | Filament yarn, viscose/modal/cupro/acetate, synthetic fibres, prepared fibre and unqualified cross-route averages; no producer-brand footprint claim |
| required_metadata | All reference qualifiers; site/route/period; primary records; upstream/treatment links; P/Q; stock/burden cohort; moisture/finish; packaging and dispatch gate |
| required_quality_disclosure | Completeness, uncertainty, stock carry, native generic-identity limits, auxiliary UUID/provider gaps, service allocation, exclusions and pending scientific review |
| update_trigger | Changed route, feedstock, functional treatment, staple state, process order, moisture basis, recovery configuration, supplier, geography or terminal gate |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-polymers-2007 | official_guidance | European Commission (2007), Reference Document on Best Available Techniques in the Production of Polymers, section 11.2.4, printed pp.179–180. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | Industrial direct-dissolution, precipitation, cutting, washing, finishing and recovery architecture only; no numerical recovery rate, consumption factor, operating recipe or emission claim adopted. Diagram winding does not define this staple terminal gate. |
| lenzing-lyocell-technology | literature | Lenzing, Fiber Technologies: Explore Lenzing’s Production Processes, Process A: Lyocell, publisher web snapshot 2026-10-16. https://www.lenzing.com/technology-production/technologies/ | Producer primary evidence of a commercial pulp/NMMO route and cut fibre endpoint. Actual operation order and product qualification are site-specific. No brand-wide inventory, solvent-recovery percentage or alternative cellulose feedstock assumed. |
| cirfs-lyocell-production | literature | CIRFS, Lyocell, Production, publisher web snapshot 2026-10-16. https://www.cirfs.org/man-made-fibers/Fibre-range/lyocell | Independent industry-origin description of commercial staple-fibre production and aqueous NMMO recovery; qualitative corroboration, not the same plant or a quantitative inventory. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, First edition March2010, section7.9.3, printed pp.257–258 (PDF277–278); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | LCA method support only for attributional cases where allocation rather than substitution is selected: virtual subdivision and flow-specific determining physical causality support direct metering, subdivision and documented causal-driver allocation of shared services. The process sources establish fibre/recovery architecture, not this LCA method. No default physical/economic share, stock-layer formula, recovery rate, yield/utility/emission factor, automatic coproduct status, avoided-burden credit or PEF/CFF conformity is established. Actual stock lineage, service drivers, sensitivity and any genuine secondary-product allocation remain independently evidenced. |
