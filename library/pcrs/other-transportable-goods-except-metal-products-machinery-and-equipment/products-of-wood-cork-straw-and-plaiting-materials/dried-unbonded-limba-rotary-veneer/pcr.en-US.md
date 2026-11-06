---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.dried-unbonded-limba-rotary-veneer
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dried unbonded limba rotary veneer

## 1. Scope and Applicability

This PCR concerns unbonded, unbacked, dried sheets rotary-peeled from identified limba (*Terminalia superba* Engl. & Diels) logs, with finished thickness not exceeding 6 mm. It covers a mill using electric mechanical equipment and externally supplied steam for indirect bath-heating of logs and indirect dryer coils. The sheet is an intermediate for later veneering or plywood manufacture; no panel strength, installed life or adhesive performance is declared here. ITTO confirms the species and its suitability for peeling; EPA distinguishes this steam-coil route from direct-fired drying (`itto-limba`; `epa-veneer-2002`).

The operational distinction is a species-segregated limba peeling and drying account, with moisture distribution, rejected sheets and every repeat dryer pass traced to the original lot. FAO reports that uneven moisture in some Terminalia veneers can require repeat drying; that observation is a reason to collect the actual history, not an assumed limba drying schedule or compulsory second pass (`fao-tropical-utilization`). No tropical-average density, yield, heat intensity, emission factor or target moisture is supplied.

Exclude sliced or longitudinally sawn sheets, green veneer sold without the declared drying operation, other species or unknown mixtures, bonded/composed sheets, plywood, LVL, backed/coated veneer, densified wood and any preservative-treated product. On-site combustion, direct-fired drying, thermal oxidation and diesel material handling are outside this narrowly specified utility route. A site using them requires an expanded reviewed method with its own atomic fuel, ash and emission accounts; their burdens cannot be deleted to fit this PCR.

ITTO warns that limba is not naturally durable and is vulnerable to biological attack. Untreated status must be evidenced and storage exposure, rejected damaged material and protective handling disclosed. This PCR neither recommends omitting needed preservation nor establishes durability, phytosanitary fitness or suitability for an exposed end use. If treatment has occurred at any supply stage, this untreated scope does not apply (`itto-limba`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.dried-unbonded-limba-rotary-veneer |
| classification_refs | CPC 3.0 31512; narrower: limba, rotary-cut, dried, unbonded, indirect externally supplied steam route |
| covered_products | Untreated limba rotary veneer, graded and cooled at first final manufacturing acceptance at the veneer mill, finished thickness ≤6 mm |
| excluded_products | Other species; unknown tropical mix; sawn/sliced sheets; green sale; bonded or treated sheets; finished multilayer panels; on-site combustion route |
| representative_product | First-accepted net limba sheet cohort, with measured acceptance moisture, thickness distribution and grade; dispatch and accepted closing stock traced separately |
| production_route | Species-verified logs → debarking/bucking → indirect steam-heated bath conditioning → rotary peeling/clipping → indirect steam-coil drying and recorded repeat passes → cooling/grading/trimming → dispatch preparation |
| market_state | Unbonded, unbacked, untreated, dried intermediate sheet at first final manufacturing acceptance; later dispatch services remain linked to that same cohort; packaging excluded from reference wood mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide limba veneer as an intermediate sheet for a declared subsequent use |
| How much | 1 kg net newly first-accepted sheet at its measured first-acceptance moisture, whether newly dispatched or held as accepted closing finished goods |
| How well | Identified Terminalia superba; rotary cut; thickness ≤6 mm; actual grade, dimensions and customer moisture acceptance declared; no durability or structural-panel equivalence |
| How long or cycle | One manufacturing first-acceptance cohort; later storage, dispatch, return or retest services stay with the original cohort; no installed service life assigned |
| reference_flow_link | `limba_delivery` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of tropical non-coniferous wood `0857dea2-e29d-4414-bce7-f9cf3372a229` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species and supplier identity; harvest country/region and plantation/natural-forest provenance; untreated status throughout supply; rotary route; finished thickness and dimensions; sheet grade and rejects; first-acceptance moisture on dry basis and sampling; original accepted net wood mass and cohort id/date; newly accepted dispatch and newly accepted closing finished goods; opening raw/WIP/accepted-FG and carried quantity/burden vectors; returns/retests/reacceptance and later services; conditioning/dryer steam boundary and condensate ledger; dryer pass history; protected-storage duration/exposure; reporting period/site; dispatch service coverage and packaging exclusion |

Every required qualifier must be declared in dataset metadata, process notes, reference-flow comment or an equivalent field of the foreground package. The broad tropical flow UUID is qualified by this narrower PCR; its name alone does not establish limba identity or authorize another species. A record does not establish an applicable background provider merely because its flow UUID matches.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| delivered_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference quantity is 1 kg net wood at first final manufacturing acceptance after the declared drying, grading and final trim. For a reporting period define Q_new=D_new+A_new: newly first-accepted dispatch plus newly first-accepted closing finished goods, each lot once at its original acceptance moisture/mass. Exclude packaging, rejects, opening accepted FG, returns, retests and reacceptance. Inherited raw/WIP vectors follow their eventual accepted cohort. Later old-cohort services use only its original accepted net mass. Q_new=0 or an unavailable original denominator stays unnormalized/unresolved; use cp_lot. |
| moisture_basis | wood inputs, veneer and solid residues | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record moisture separately for each stream/lot. Dry-basis moisture u=(wet mass−oven-dry mass)/oven-dry mass; dry wood mass=wet mass/(1+u). Percent dry basis is divided by 100 before using u. A wet-basis result is not interchangeable. Retain paired sample masses and constant-mass evidence under cp_moisture (`usda-wood-moisture-2021`). |
| dimensional_conversion | sheet area or volume records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Area, thickness or volume is supplementary. Conversion to reference mass requires a measured density for the same species, moisture, temperature and sheet state, or direct weighing of that lot. No handbook density converts green log volume to delivered dry veneer mass. |
| utility_basis | electricity and steam heat | Energy | MJ | Convert metered electricity from kWh using 3.6 MJ/kWh. Steam heat is net heat actually delivered at the stated inlet/condensate-return boundary, measured from compatible steam/return masses and enthalpies. Steam mass alone and gross calorific value do not identify this net heat amount. Preserve supplier reference-state compatibility. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified untreated limba logs received at mill gate, including bark where present; moisture and stock recorded |
| starting_condition_role | Foreground intake fact; upstream forestry, harvest and freight burdens remain in linked log supply |
| product_classification_scope | Limba subset of tropical non-coniferous thin sheets ≤6 mm; classification does not establish forest provenance or method applicability |
| recursive_input_rule | Purchased veneer is outside this log-to-sheet route. Keep raw, WIP and accepted-FG stock identities and inherited vectors; internal rework/repeat drying/returns/reacceptance never create a second first-accepted output. External same-category sheet input requires a reviewed purchased-sheet route. |
| upstream_dataset_requirement | Match log species/provenance, forestry/land-use treatment and mill delivery gate; match electricity voltage/geography/period and actual net steam supply boundary; link treatment of each exported waste |
| disclosure | Declare intake, first-acceptance and dispatch gates; Q_new and original old-cohort denominators; inherited stock vectors; utility suppliers and separate steam/process-water circuits; route exclusions, forest/land-use coverage, freight ownership, storage losses, infrastructure, unmeasured exchanges and background mismatches |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_species | Use supplier and lot evidence to identify Terminalia superba and segregate its accepted output, residues and rejects. Unknown mixtures fail applicability. Record plantation/natural-forest provenance without assuming that tropical origin establishes land-use neutrality. | `itto-limba`; `un-cpc-3` |
| boundary_stages | Include log storage loss, debarking/bucking, conditioning, peeling, clipping, drying, cooling, repeated passes, grading, trim, packaging actually used and associated wastewater/emissions. The end gate precedes adhesive composing, layup or downstream pressing. | `epa-veneer-2002`; `usda-wood-moisture-2021` |
| boundary_utility | Use electric drives and purchased steam only. Steam heats the conditioning bath and dryer air through closed indirect heat exchangers/coils, with no designed steam contact with wood or process water. Preserve the utility steam/condensate mass, state, enthalpy, return, stock and loss ledger separately from the process-water balance. Do not duplicate supplier fuel/boiler emissions. Direct injection/contact, coil leakage into process water, combustion or diesel handling requires route review and explicit atomic mass exchanges before application. | `epa-veneer-2002` |
| boundary_repeat | Preserve original-lot and first-acceptance-cohort identity through moisture sorting, every repeat pass, storage, dispatch, return and retest. Add actual service quantities to that cohort, never create another accepted-output quantity or transfer old-cohort services to new output. No universal repeat rate or Terminalia temperature schedule is inferred. | `fao-tropical-utilization`; `epa-veneer-2002` |
| boundary_completeness | Physical inputs/outputs must close across stock, water and dry wood with stated uncertainty. Record additional actual exchanges separately, disclose any excluded capital/infrastructure scope and keep unresolved identities or unmeasured releases visible. Untreated sheet manufacture gives no preservation or end-use approval. | `itto-limba`; `usda-wood-moisture-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| log_prepare | Limba intake, electric handling, debarking and bucking | required | Every log-to-sheet lot | foreground operation | per 1 kg originally first-accepted reference veneer |
| condition | Indirect steam-heated log conditioning | required | Actual conditioning batch and water circuit | foreground operation | per 1 kg originally first-accepted reference veneer |
| peel | Rotary peeling and green clipping | required | Knife cutting, no sawing/slicing substitution | foreground operation | per 1 kg originally first-accepted reference veneer |
| dry | Indirect steam-coil drying, moisture sorting and cooling | required | Initial and all actual repeat passes | foreground operation | per 1 kg originally first-accepted reference veneer |
| dispatch | Grading, final trim and dispatch preparation | required | Accepted cooled sheets and actual packaging | reference-product operation | 1 kg reference flow |

The following cards are a minimum exchange register, not default quantities. Interstage wood transfers are recorded in the physical batch ledger and cancel in the aggregated mill dataset. They are not additional purchased inputs or final co-products. Every card belongs to an identified first-acceptance cohort. New-cohort quantities use Q_new; old-cohort storage, dispatch, repacking, return, retest or repeat-drying quantities use that cohort’s original accepted net mass, never the unrelated period Q_new. Opening raw/WIP/FG physical and allocated-burden vectors are retained without resetting or duplicating earlier quantities; raw/WIP not yet accepted remains carried stock, while inherited material completed into new accepted output carries its vector into that cohort. Missing denominators or Q_new=0 leave the relevant quantities unnormalized/unresolved. An operation-specific throughput is supplementary evidence only. Product and waste versions of the same residue apply to disjoint documented destinations.

The elementary-flow UUIDs below refer to emissions to air, unspecified. Preserve actual release location and compartment evidence; if a more specific receiving compartment is required, select its verified identity rather than silently changing this UUID’s meaning.

### Process: Limba log preparation (`log_prepare`)

#### Inputs

##### Product flows

###### Untreated limba veneer logs (`limba_logs`)

Species and origin documentation must identify limba; OSB-prepared logs, emergy biomass and dry wood are not substitutes.

- Selected flow: Untreated limba veneer logs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net received log mass, including recorded bark; adjust receipts and stock for the output period. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot`
- Sources: `itto-limba`

###### Alternating current (`intake_electricity`)

The selected identity is user-side grid-average electricity below 1 kV. Match actual voltage, supplier boundary, geography and period; other supply requires a distinct verified flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity attributable to handling, debarking and bucking; convert recorded kWh to MJ. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Untreated limba bark sold as a co-product (`sold_bark`)

Positive sale or contractual product status must be documented; physical bark is counted once.

- Selected flow: Untreated limba bark sold as a co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh bark with a demonstrated product destination and documented moisture; distinct from waste_bark. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `corrim-allocation-2025`

##### Waste flows

###### Bark (`waste_bark`)

This verified identity is a Waste flow, not a sold-product identity.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh discarded debarking residue sent to a named waste handler; exclude sold_bark. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

###### sawdust waste (`bucking_sawdust`)

Use this untreated waste identity only for the stated recovery/combustion route; sold sawdust requires a separate product identity and allocation status.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh collected untreated bucking sawdust sent for combustion/recovery; record moisture and actual destination. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

##### Elementary flows

###### particles (PM2.5) (`intake_pm25`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from log_prepare after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (PM2.5 - PM10) (`intake_pm_middle`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from log_prepare after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (> PM10) (`intake_pm_coarse`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from log_prepare after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

### Process: Log conditioning (`condition`)

#### Inputs

##### Product flows

###### Alternating current (`conditioning_electricity`)

The selected identity is user-side grid-average electricity below 1 kV. Match actual voltage, supplier boundary, geography and period; other supply requires a distinct verified flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity attributable to conditioning circulation; convert recorded kWh to MJ. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources:

###### Water, tap (`conditioning_water`)

Applies only to actual purchased tap water for the conditioning circuit; add separate withdrawal flows if water source differs.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter only new tap-water makeup, not circulating volume; convert volumetric readings using documented water density. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-veneer-2002`

###### Net delivered heat from process steam (`conditioning_heat`)

Do not substitute a gross-calorific steam flow or industrial steam mass for the unresolved net-heat identity.

- Selected flow: Net delivered heat from process steam
- Flow property / unit: Net delivered heat / MJ
- Amount rule: Net heat delivered for log conditioning from inlet/return measurements and compatible enthalpy states. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`
- Sources: `epa-veneer-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Limba log-conditioning wastewater (`conditioning_wastewater`)

Wastewater leaves to a treatment provider; it is not a direct elementary water emission. Condensate return stays in the steam boundary ledger.

- Selected flow: Limba log-conditioning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure blowdown sent off-site, including suspended/dissolved load characterization; internal recirculation is not discharge. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-veneer-2002`

##### Elementary flows

### Process: Rotary peeling and clipping (`peel`)

#### Inputs

##### Product flows

###### Alternating current (`peeling_electricity`)

The selected identity is user-side grid-average electricity below 1 kV. Match actual voltage, supplier boundary, geography and period; other supply requires a distinct verified flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity attributable to rotary lathe, clipper and extraction; convert recorded kWh to MJ. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources:

###### Mineral hydraulic oil (`hydraulic_oil`)

Conditional on actual oil chemistry. Generic hydraulic fluid may be mineral or synthetic; PAO lubricating-oil naming conflicts do not establish this flow.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual makeup plus replacements less recoverable stock, for mineral-oil hydraulic equipment only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_auxiliaries`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Untreated limba peeler core (`sold_core`)

A cylindrical residual core is not kiln-dried sawnwood, complete veneer or blended hog fuel.

- Selected flow: Untreated limba peeler core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh cores with actual product destination and moisture; exclude waste_core. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `corrim-allocation-2025`

###### Untreated green limba veneer clipping sold as a co-product (`sold_green_clip`)

Separate green clipping from dried rejects because water content and processing burdens differ.

- Selected flow: Untreated green limba veneer clipping sold as a co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh sold green clipping and sample its own moisture; not the finished sheet reference. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `corrim-allocation-2025`

##### Waste flows

###### Discarded untreated limba peeler core (`waste_core`)

Retain the specific physical form when the waste identity is unresolved.

- Selected flow: Discarded untreated limba peeler core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh discarded cores separately from sold_core and link their treatment. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

###### Discarded untreated green limba veneer clipping (`waste_green_clip`)

No generic agglomerated waste or masonry offcut identity is substituted.

- Selected flow: Discarded untreated green limba veneer clipping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh waste green clipping; record treatment and exclude sold_green_clip. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

###### Spent mineral hydraulic oil (`spent_oil`)

Conditional on actual oil changes; disclose any unmeasured leakage and add its actual environmental compartment separately.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure drained mineral hydraulic oil, stock and collection receipts; exclude recovered internal recirculation. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_auxiliaries`
- Sources:

##### Elementary flows

###### particles (PM2.5) (`peel_pm25`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from peel after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (PM2.5 - PM10) (`peel_pm_middle`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from peel after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (> PM10) (`peel_pm_coarse`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from peel after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

### Process: Drying, moisture sorting and cooling (`dry`)

#### Inputs

##### Product flows

###### Alternating current (`drying_electricity`)

The selected identity is user-side grid-average electricity below 1 kV. Match actual voltage, supplier boundary, geography and period; other supply requires a distinct verified flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity attributable to dryer fans, cooling and moisture sorting, including repeats; convert recorded kWh to MJ. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources:

###### Net delivered heat from process steam (`drying_heat`)

Do not substitute a gross-calorific steam flow or industrial steam mass for the unresolved net-heat identity.

- Selected flow: Net delivered heat from process steam
- Flow property / unit: Net delivered heat / MJ
- Amount rule: Net heat delivered for initial and repeat drying from inlet/return measurements and compatible enthalpy states. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`
- Sources: `epa-veneer-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### acetic acid (`dryer_acetic`)

Candidate natural-wood release, not an adhesive or combustion assumption. Test actual limba and equipment; missing measurement is not zero. Match the receiving air compartment.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured substance-specific load released to air over initial and repeat drying, with actual capture deducted once. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### methanol (`dryer_methanol`)

Candidate natural-wood release, not an adhesive or combustion assumption. Test actual limba and equipment; missing measurement is not zero. Match the receiving air compartment.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured substance-specific load released to air over initial and repeat drying, with actual capture deducted once. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### formaldehyde (`dryer_formaldehyde`)

Candidate natural-wood release, not an adhesive or combustion assumption. Test actual limba and equipment; missing measurement is not zero. Match the receiving air compartment.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured substance-specific load released to air over initial and repeat drying, with actual capture deducted once. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### water vapour (`dryer_water`)

Do not equate all green wet-mass loss to water; separate wood loss and volatile substances.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Evaporated water from paired green/dry moisture and dry-wood records, reconciled with exhaust and condensate. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `usda-wood-moisture-2021`

###### particles (PM2.5) (`dryer_pm25`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from dry after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (PM2.5 - PM10) (`dryer_pm_middle`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from dry after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (> PM10) (`dryer_pm_coarse`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from dry after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

### Process: Grading and dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Alternating current (`dispatch_electricity`)

The selected identity is user-side grid-average electricity below 1 kV. Match actual voltage, supplier boundary, geography and period; other supply requires a distinct verified flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity attributable to grading, final trim and dispatch preparation; convert recorded kWh to MJ. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources:

###### Corrugated cardboard (`cardboard`)

Use only actual type C/E/F corrugated board with fibre content and recycled multilayer state matching the selected record; other cardboard requires another identity.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed corrugated protective sheet consumption attributable to dispatched veneer; zero applicability requires a packaging record. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_auxiliaries`
- Sources: `corrim-allocation-2025`

###### Polypropylene packaging strap (`pp_strap`)

Conditional on actual PP strap; do not identify fabricated strap as polypropylene resin or rope. Add other actual packaging as separate cards.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh actual polypropylene strap used for sheet bundles, excluding unused recovered stock. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_auxiliaries`
- Sources: `corrim-allocation-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of tropical non-coniferous wood (`limba_delivery`)

Only this product output is the quantitative reference, booked once at first final manufacturing acceptance. Newly accepted dispatch and accepted closing FG form Q_new; opening accepted FG, returns, retests and reacceptance do not form new reference output. Packaging and rejects are excluded. Later dispatch services retain this original denominator.

- Selected flow: Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of tropical non-coniferous wood `0857dea2-e29d-4414-bce7-f9cf3372a229`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot`
- Sources: `itto-limba`

###### Untreated dry limba veneer trim sold as a co-product (`sold_dry_trim`)

It receives only burdens incurred before its separation node; no undelivered final packaging burden.

- Selected flow: Untreated dry limba veneer trim sold as a co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh marketable dry trim separately from discarded dry sheets; record moisture and destination. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `corrim-allocation-2025`

##### Waste flows

###### Discarded untreated dry limba veneer sheet (`waste_dry_sheet`)

Retain defect and lot evidence; a damaged/rejected sheet is not accepted reference output.

- Selected flow: Discarded untreated dry limba veneer sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh unmarketable dry sheets and trim, including damage and rejected repeat-dry lots; exclude sold_dry_trim. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `fao-tropical-utilization`

##### Elementary flows

###### particles (PM2.5) (`trim_pm25`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from dispatch after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (PM2.5 - PM10) (`trim_pm_middle`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from dispatch after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

###### particles (> PM10) (`trim_pm_coarse`)

Match air compartment, filterable/condensable boundary, test state and fugitive coverage. Never add PM10 total to its PM2.5 component.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual released disjoint size-bin mass from dispatch after capture; use compatible measured cumulative totals only. Assign the measured quantity to its first-acceptance cohort or carried unfinished-stock vector; do not pool old-stock services with new production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-veneer-2002`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_separate | First subdivide metered stages and directly assign burdens to their actual operation/lot. Drying and repeats follow the wood actually dried; packaging follows the actual packed product. Earlier green residues do not receive later drying burdens. | `corrim-allocation-2025`; `epa-veneer-2002` |
| allocation_mass | For remaining inseparable common burdens at a documented separation node, apply measured oven-dry mass shares among the continuing wood stream (accepted veneer only at the final node) and genuine saleable wood co-products leaving that node. Record all candidate products, moisture, stock and the numerator/denominator; disclose this as a chosen physical allocation rule and test an economic-share sensitivity when values materially differ. CORRIM is method precedent from softwood plywood, not evidence that limba has the same shares. | `corrim-allocation-2025`; `usda-wood-moisture-2021` |
| allocation_waste | Document product versus waste status by actual contracts and destinations. Waste is not an allocation co-product merely because it is recovered or burned elsewhere. Include the responsibility for treatment; no assumed avoided-fuel credit. Retain sold/waste quantities as disjoint flows. | `corrim-allocation-2025` |
| allocation_ledgers | Preserve the complete pre-allocation physical wood, water, residue and emission ledger. Allocate burdens in a separate linked ledger; never multiply physical output mass by an allocation fraction to force a material balance. Internal rework and repeat drying have no co-product share. | `corrim-allocation-2025`; `fao-tropical-utilization` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lot | log_prepare; dispatch | wood intake and reference output | weighing and lot ledger | lot id; first-acceptance cohort id/date/moisture/original accepted net kg; D_new; A_new; Q_new; opening/closing raw/WIP/accepted-FG masses and quantity/burden vectors; material/cohort transfers; dispatched old FG; returns/retests/reacceptance; later-service quantities and original denominators; botanical species/provenance/treatment; received logs; rejects; thickness/grade; storage exposure | Use calibrated scales and remove tare/packaging at intake, first final acceptance and dispatch. Identify every first-accepted lot once; reconcile D_new+A_new at original acceptance state separately from opening accepted FG and returns. Preserve inherited raw/WIP/FG vectors and assign transfers without duplicate burdens. Measure later dispatch moisture/mass separately without resetting original accepted kg; link all later services to their original cohort and denominator. Retain raw quantities when Q_new=0 or that denominator is missing. | kg; mm | each lot and stock reconciliation | declared reporting period including seasonal supply changes | one identified limba line and its storage areas | per 1 kg reference flow | scale certificates; lot/stock links; species and treatment evidence; delivery acceptance |
| cp_moisture | log_prepare; peel; dry; dispatch | wet and oven-dry wood basis | paired test record | sample location; lot; pass number; sheet position; wet sample mass; constant oven-dry mass; meter indication; target and measured exit moisture; rejected/redried mass; cohort id; original accepted net kg; new/old/unfinished-stock attribution | Immediately protect and weigh representative samples; oven-dry to constant mass using a documented wood method; validate species/thickness-adjusted rapid measurements against paired oven samples. Sample across sheet and lot, including wetter portions; assess volatile-extractive bias in oven mass loss and retain its uncertainty; do not prescribe a lumber oven schedule as a veneer dryer setting. Keep quantities assigned to their source cohort or unfinished-stock vector; never divide an old-cohort service by unrelated new output. | kg; fraction dry basis | intake; every dryer pass; first final acceptance; each later dispatch/retest; each residue stream | same production period and all actual repeats | same species, thickness and equipment configuration | per 1 kg reference flow | sample chain; constant-mass record; calibration; drying history; sampling uncertainty |
| cp_electricity | log_prepare; condition; peel; dry; dispatch | user-side electricity | stage meter | stage; meter id; voltage; kWh start/end; pass and lot; downtime; shared-load attribution; cohort id; original accepted net kg; new/old/unfinished-stock attribution | Read calibrated stage meters and reconcile with site bills; record allocation of genuinely shared loads; count fan, circulation, cooling and electric handling use. Keep quantities assigned to their source cohort or unfinished-stock vector; never divide an old-cohort service by unrelated new output. | kWh; MJ | each batch/pass or continuous logger | full declared production period, including repeat drying and downtime | identified line plus documented shared auxiliaries | per 1 kg reference flow | meter calibration; supplier voltage/period; site reconciliation |
| cp_steam | condition; dry | externally delivered steam heat | heat and condensate balance | meter boundary; steam/return mass; pressure; temperature; steam quality; inlet/return enthalpy; loss location; stage/pass; supplier quantity definition; cohort id; original accepted net kg; new/old/unfinished-stock attribution | Meter inlet steam and return at the declared boundary, or use a calibrated net heat meter, retaining both utility mass and energy evidence. Track pressure, temperature, enthalpy, steam quality, condensate return, utility stock and each real non-return/vent/leak. The coils are indirect: no steam is assigned as contact water. Identify any actual utility mass release with its own atomic exchange before claiming completeness; a coil leak into wood/bath requires route review. Split conditioning/initial/repeat heat and preserve source-cohort attribution. | kg; MJ; pressure and temperature with units | each batch/pass and utility period | same period as accepted veneer; actual repeats retained | external supplier interface and respective coils | per 1 kg reference flow | meter certificates; supplier definition; state/enthalpy trace; utility reconciliation |
| cp_water | condition; dry | conditioning makeup, wastewater and evaporated water | water balance | fresh makeup; blowdown; moisture inputs/outputs; condensate; evaporation; stock; return destination; suspended/dissolved loads; cohort id; original accepted net kg; new/old/unfinished-stock attribution | Read process tap-water makeup/blowdown meters and sample wastewater; pair wood moisture with dry-wood balance to calculate wood/process-water evaporation. Keep the closed steam/condensate circuit in a separate mass/enthalpy ledger: neither inlet steam nor returned condensate enters the process-water account in this indirect route. Reconcile real utility losses separately with explicit atomic exchanges; missing loss measurements remain unresolved. Preserve each source-cohort or unfinished-stock vector. | kg | batch and period; moisture each pass | same production and stock period | conditioning circuit and dryer | per 1 kg reference flow | meter and sampling evidence; physical water reconciliation and residual |
| cp_residues | log_prepare; peel; dispatch | solid residues, co-products and rejects | destination ledger | species; source stage; lot; green/dry state; wet mass; dry-basis moisture; stock; product/waste status; contract; treatment or purchaser; value; cohort id; original accepted net kg; new/old/unfinished-stock attribution | Weigh each separate stream; measure its own moisture; reconcile sale, waste transfer and stock. Record reject reason and actual separation node; no class-wide yield inference. Keep quantities assigned to their source cohort or unfinished-stock vector; never divide an old-cohort service by unrelated new output. | kg; monetary unit identified | each dispatch/container and batch reject | full same period including storage damage | all residue collection points and named receivers | per 1 kg reference flow | weighbridge slips; contracts; moisture tests; treatment receipts; stock and value records |
| cp_auxiliaries | peel; dispatch | oil and packaging | procurement/use/waste ledger | exact oil chemistry; cardboard grade; strap material; quantities issued; returned; stock; spent oil; actual packaging consumption; cohort id; original accepted net kg; new/old/unfinished-stock attribution | Weigh supplies and waste; reconcile issue and stock records; confirm oil chemistry and actual packaging components with specification sheets; add any further atomic exchange actually used. Keep quantities assigned to their source cohort or unfinished-stock vector; never divide an old-cohort service by unrelated new output. | kg | each issue/change and period | same period and equipment/packing configuration | scoped line and dispatch | per 1 kg reference flow | supplier sheets; weighing; stock; waste receipt; packaging record |
| cp_air | log_prepare; peel; dry; dispatch | speciated organics and disjoint PM | emission measurement | stage and stack; lot/species; pass; substance; concentration; detection limit; gas flow; temperature; pressure; moisture; duration; capture; fugitive release; PM2.5/PM10/total and filterable/condensable method; cohort id; original accepted net kg; new/old/unfinished-stock attribution | Representative tests of actual limba operations; cover heated/cooling exhausts and fugitives, initial/repeat passes and actual controls. Match concentration and gas volume state. Quantify each detected substance; investigate additional compounds. No softwood default or total-VOC surrogate for individual substances. Keep quantities assigned to their source cohort or unfinished-stock vector; never divide an old-cohort service by unrelated new output. | kg; concentration and gas-volume units explicit | representative operating tests, continuous logs where available and after process changes | full operating period represented, gaps stated | actual receiving air compartment at each scoped operation | per 1 kg reference flow | test method; blank/detection data; operating and control logs; uncertainty; unmeasured coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_intensity | all inventory rows | For new first-accepted cohorts Q_new=D_new+A_new at original first-acceptance net kg. The attributable quantity vector N_new combines inherited consumed raw/WIP vectors with actual added services assigned to that new accepted output, without duplicating prior quantities or including retained raw/WIP or old FG. For Q_new>0, intensity=N_new/Q_new. Keep incomplete-cohort vectors as stock. For an older accepted cohort, supplement intensity=actual later service vector/original accepted net kg and append it once to the inherited vector. Do not use unrelated Q_new, current shipment kg, returned/retested quantity or reacceptance as a substitute denominator. At Q_new=0, retain new/unfinished quantities without division; if an original denominator is absent, keep the old supplement unnormalized and unresolved. | cp_lot; applicable quantity protocol | quantity per 1 kg reference flow |  |
| dry_wood_account | all wood streams | For each separate stream, u=(wet mass−oven-dry mass)/oven-dry mass and dry wood=wet mass/(1+u). Reconcile physical received wood and all opening raw/WIP/FG against dispatch, closing raw/WIP/FG, distinct residues/rejects and measured losses; first acceptance is an internal classification, not an additional physical export. Separately reconcile Q_new and inherited cohort vectors so closing newly accepted FG is not counted twice. Preserve each residual and moisture-state change. | cp_lot; cp_moisture; cp_residues | dry-wood ledger and balance residual | `usda-wood-moisture-2021` |
| steam_net | conditioning_heat; drying_heat | Net heat equals inlet steam mass times compatible inlet enthalpy less returned condensate mass times compatible return enthalpy, adjusted only for losses within the declared delivery boundary. Reconcile conditioning, initial drying and repeat-pass shares to the supplier total. No gross-to-net conversion without the actual reference states. | cp_steam | delivered net MJ per 1 kg reference flow | `epa-veneer-2002` |
| repeat_account | dry | Retain each actual dryer pass and its heat, electricity, measured moisture, rejected mass and accepted destination. Sum repeat consumption without counting the same sheet mass as newly produced; separately record final rejects. Do not impute a second pass to every limba lot. | cp_moisture; cp_lot; cp_steam; cp_electricity | traceable repeat-pass consumption and output account | `fao-tropical-utilization`; `epa-veneer-2002` |
| air_load | all air rows | Integrate compatible substance concentration times exhaust flow times duration, plus actual fugitives, for each operation and pass. Keep actual emissions before allocation, detection limits and control capture distinct; add extra verified substances separately. Missing evidence remains unmeasured. | cp_air | substance load per 1 kg reference flow | `epa-veneer-2002` |
| pm_disjoint | all PM rows | For comparable cumulative test results, fine=PM2.5, middle=PM10−PM2.5 and coarse=total PM−PM10. Results must be nonnegative and share test state, filterable/condensable scope and sampling boundary. Unknown fractions remain unresolved; do not assign an invented split. | cp_air | three nonoverlapping size-bin loads | `epa-veneer-2002` |
| water_account | dryer_water; conditioning_water; conditioning_wastewater | Keep two linked but distinct balances. Process water: wood moisture plus new tap-water makeup equals moisture in accepted/stock wood and residues plus process wastewater, process evaporation and the disclosed residual. Utility circuit: inlet steam/condensate mass equals returned condensate plus documented utility stock change and each real separately identified loss/release; retain compatible inlet/return enthalpies for net heat. In the selected indirect conditioning/coils route, no utility steam mass enters process contact water or wood. Do not treat utility venting as wood evaporation or duplicate returned water. Any direct injection/contact or coil leak into the process needs route review and an explicit atomic mass input; it is not covered silently. | cp_water; cp_moisture; cp_residues; cp_steam | physical water balance and disclosed residual | `usda-wood-moisture-2021` |
| stage_allocation | allocation ledger | At each actual separation node, the continuing wood stream receives the fraction of common burden equal to its measured oven-dry mass divided by the sum of the continuing wood and genuine exported co-product dry masses. Carry this burden forward and split it again only at the next actual node; at final separation the continuing stream becomes accepted veneer. Add only that stream’s dedicated later burdens. Preserve the complete physical ledger unchanged and disclose economic sensitivity. | cp_residues; stage utility records; cp_moisture | separate pre/post allocation burden account | `corrim-allocation-2025` |

### Worked first-acceptance cohort examples

These are arithmetic illustrations of the accounting rule, not factory observations, process factors, default ranges or approval evidence. Each vector may contain multiple distinct exchanges; the scalar electricity illustrations below show the same cohort rule for one component. Keep physical and allocated-burden vectors separately.

| Case | Inputs | Formula and result | Treatment |
| --- | --- | --- | --- |
| New first-accepted production | D_new=600 kg; A_new=400 kg, both measured at their original first acceptance; consumed opening raw/WIP electricity vector=30 MJ; current electricity assigned to this accepted output=70 MJ; another 20 MJ belongs to unfinished closing WIP | Q_new=600+400=1000 kg; N_new=30+70=100 MJ; electricity intensity=100/1000=0.10 MJ/kg | Count the 400 kg new accepted closing FG once. Carry its proportional inherited vector as FG; do not add that same vector again on later dispatch. Carry the separate unfinished-WIP 20 MJ until its eventual first acceptance; it is not spread over this 1000 kg. |
| Opening accepted FG and later services | Old cohort original accepted net mass Q_old=500 kg; inherited electricity vector=80 MJ; this period ships 200 kg of that old cohort, with actual storage/dispatch electricity supplement=10 MJ; unrelated Q_new=1000 kg | Old supplement=10/500=0.02 MJ/kg; updated old-cohort electricity=(80+10)/500=0.18 MJ/kg; added new first-accepted mass from old dispatch=0 kg | Append 10 MJ once to the old cohort. Do not divide by the unrelated 1000 kg or reset its denominator to 200 kg shipped. Track the 200 kg dispatch/300 kg remaining FG and their vector lineage; later services may refine the same old cohort, not create output again. |
| Returns and zero new acceptance | Q_new=0 kg; old cohort return/retest=50 kg; actual old-cohort retest electricity=5 MJ; known Q_old=500 kg; unfinished new WIP adds 12 MJ | New accepted quantity from return/retest=0 kg; old supplement=5/500=0.01 MJ/kg; 12/0 is not calculated | Keep 12 MJ as an unfinished-stock vector, not zero intensity or a transfer to the old cohort. If Q_old is missing, keep the 5 MJ raw supplement unnormalized/unresolved; neither 50 kg returned nor a later unrelated new output replaces it. |

First-acceptance and dispatch moisture are separate observations. If later storage changes moisture or mass, preserve original accepted net kg, moisture and dry-wood identity together with actual later mass/loss records; never increase Q by reweighing or retesting. Opening accepted FG keeps its inherited vector, while raw/WIP consumed into genuinely new accepted output transfers its inherited vector exactly once. A first-accepted cohort held in closing FG may still lack actual later storage/packing/dispatch services: disclose that incomplete dispatch-gate coverage and append those services only when measured, without inventing a factor or booking new accepted output.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_species | scope and reference | Trace species, country and plantation/natural-forest provenance; reject unidentified mixed-lot borrowing. Untreated status is verified separately from any end-use protection requirement. | supplier/lot documentation and treatment declaration |
| dq_drying | conditioning and drying | Represent wetter sheet areas, batch variation, all repeat passes, rejects and storage damage; report sample variability. Do not transfer generic lumber schedules, species density or softwood emission values. | paired moisture samples; pass logs; customer acceptance; metering |
| dq_identity | each exchange | Confirm physical/chemical identity, material state, flow type, compartment, property and unit. Blank UUIDs remain unresolved; selected flow identity does not select a compatible provider automatically. | direct identities, supplier specifications and background boundaries |
| dq_complete | complete line | Reconcile dry wood/water/stock and stage meters; quantify separately actual additional lubricants, cleaning chemicals, packaging, wastes or emissions. Document uncertainty, detection limits, unmeasured scope and infrastructure exclusions. | physical balance residuals; complete flow register; independent scope review |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | Exactly one reference output is limba_delivery, 1 kg net sheet mass, with the verified tropical product UUID and all required limba/route/moisture/thickness qualifiers. Species alone does not establish untreated state, supplier provenance or a compatible background. | `itto-limba`; `un-cpc-3` |
| validate_route | Verify electric handling, external steam, closed indirect conditioning heat exchangers/dryer coils and unbonded first-acceptance gate. Check separate utility mass/enthalpy and process-water ledgers, actual utility losses and explicit atomic release coverage. Direct steam contact/injection, coil leakage into process water, combustion, treatment, composing, backing or alternate cutting route cannot pass by omission; require route review and the actual exchanges. | `epa-veneer-2002`; `usda-wood-moisture-2021` |
| validate_lot | Reconcile first-acceptance ids and Q_new=D_new+A_new, once at original acceptance moisture/mass, against raw/WIP/FG and stock transfers. Exclude opening accepted FG, returns, retests, reacceptance and repeat throughput from new Q. Preserve inherited raw/WIP/FG quantity and burden vectors. Verify every later old-cohort service uses its original accepted net kg and is appended once; Q_new=0 or missing original denominators stays unnormalized/unresolved. Reference wood excludes packaging. | `fao-tropical-utilization`; `usda-wood-moisture-2021` |
| validate_physical | Dry-wood/water residuals, allocation shares and dedicated downstream burdens must be traceable. No product/waste overlap, mass balance by allocation, duplicate steam supply fuel or overlapping PM bins. Do not add a VOC total to its individual constituents. | `corrim-allocation-2025`; `epa-veneer-2002` |
| validate_limits | Unknown UUIDs, missing sample distributions, unmeasured emissions, incompatible net-steam references and omitted scope remain explicit gaps. No zero from missing records, no whole-site completeness from a method check, and no durability claim for untreated limba. | `itto-limba`; `epa-veneer-2002` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground log-to-dried-unbonded-limba-veneer intermediate production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Subsequent veneering/plywood input with matching species, route, grade, first-acceptance moisture/mass and supplier definitions. State whether later storage/packing/dispatch services have actually been appended; a closing-FG first-acceptance dataset is not complete dispatch-gate coverage until then. Disclose review and gaps. |
| excluded_use | Other tropical species or generic tropical blend; sliced/sawn/green/bonded/treated product; on-site combustion route; complete panel or installed-service comparison; assumed durability or phytosanitary approval |
| required_metadata | All reference qualifiers; supplier/forest and treatment provenance; original first-acceptance ids/masses/moisture; opening/closing raw/WIP/FG vectors and transfers; Q_new components; returns/retests and old-cohort supplements; moisture/pass history; separate process-water/steam mass/enthalpy accounts; physical/allocation ledgers; actual dispatch-service coverage |
| required_quality_disclosure | Sampling/meter uncertainty; storage losses and rejects; unnormalized Q_new=0 or missing-denominator quantities; inherited vectors and unfinished-stock coverage; pending later dispatch services; blank UUIDs, unmeasured scope, background compatibility, allocation sensitivity and independent review state |
| update_trigger | Changed species/forest source, treatment status, cutting/drying/heat route, moisture or quality target, packaging, emission controls, allocation/destination, reference identity or new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3 | official_guidance | UNSD, CPC Ver.3.0 structure, 30 June 2025, subclass 31512. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Tropical thin-sheet classification ≤6 mm; does not establish a species recipe or method approval |
| itto-limba | official_guidance | ITTO Tropical Timber, Limba/Fraké (Terminalia superba), Scientific Name; Natural Distribution; Natural Durability; Drying Defects; Rotary Veneer Cutting. https://www.tropicaltimber.info/specie/limbafrake-terminalia-superba/ | Botanical identity, African distribution, peeling suitability and biological/drying limitations; no density, kiln schedule, treatment recipe or universal process factor adopted |
| fao-tropical-utilization | official_guidance | FAO, Unasylva no.118, The utilization of low-quality tropical timber, Wood-based panels paragraphs discussing Terminalia moisture and repeated dryer passes. https://www.fao.org/4/l2015e/l2015e04.htm | Qualitative counterevidence against uniform tropical drying and unrecorded repeats; not a compulsory limba schedule or measured limba repeat rate |
| epa-veneer-2002 | official_guidance | US EPA, AP-42 §10.5 Plywood Manufacturing, January 2002, pp.10.5-1 to 10.5-4 and Figure10.5-1. https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | Pre-bonding veneer processes, indirect steam coils, moisture sorting/redrying and actual emission measurement boundaries; no US plywood quantitative values transferred |
| usda-wood-moisture-2021 | handbook | USDA FPL, Wood handbook—wood as an engineering material, FPL-GTR-282, 2021, printed pp.10-3–10-4 and 13-1–13-2; PDF pp.255–256,323–324. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Veneer cutting distinctions, oven-dry moisture denominator, sampling and constant-mass evidence; no lumber schedule adopted as veneer dryer setting |
| corrim-allocation-2025 | literature | CORRIM, Life Cycle Assessment of Softwood Plywood Production – Western Region, edited 22 July 2025, §3.2.6, PDF p.16. https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Western-Plywood-Report-Final-07222025.pdf | Physical mass-allocation and product-specific packaging method precedent only; softwood survey amounts, species and shares are not limba evidence |
