---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.polyester-gfrp-ornamental-dome-shells
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Moulded polyester GFRP ornamental dome-shell manufacture

## 1. Scope and Applicability

Full manufacture of the real polyester-gelcoated, chopped-glass GFRP ornamental dome-shell subtype through actual forming/cure/clean firstrelease, with actual tooling/producer history and separately attributable observed packaging/service loads. The complete section9 context is mandatory. Complete-product admission requires actual physical identity; a polymer/glass component or unrelated article cannot stand in for the finished shell.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.polyester-gfrp-ornamental-dome-shells |
| classification_refs | CPC 3.0 36950; narrower product and route boundary |
| covered_products | Cured/cleaned shaped ornamental polyesterGFRP dome shell or finished factoryshellsegment with actual wholecomposition/geometry/gate fit. |
| excluded_products | Rawresin/fibre/semifinishedflat/profile stock; PPpedestal; pipe/covering/sanitary/door/window/appliance/wholebuilding; undocumented mixedroof or alteredmaterials/route. |
| representative_product | Real gelcoated polyester/glass rigid ornamental shell, actual drawing/finish/lot, no nominal mass/glassfraction default. |
| production_route | Actual pattern/mould history→release/whole liquidresin and gelcoat plus real catalystdosing→gelcoating→choppedglass/resin sprayup/rolling→cure/demould→actualtrim/drill/clean/test/identify→firstrelease. |
| market_state | Bare complete cured/cleaned shaped factoryarticle before installation; packages/frames/insulation/othermaterials cannot be silently treated as GFRPshell mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a whole shaped polyesterGFRP ornamental architectural dome article for later installation. |
| How much | 1 kg |
| How well | Actual approveddrawing, material/wholegeometry/cure/clean state and complete native/producer/gate admission. |
| How long or cycle | One unique original firstrelease cohort; no installed life/load equivalence or repair extension. |
| reference_flow_link | dome_shell |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glass Fiber Reinforced Plastics `589634bd-8183-4b26-a5a9-d57f54363a8b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actualdrawing and complete shell/segment geometry; polyester/gelcoat/glassgrade and full suppliedcomposition; actual purchasedpremix versus on-site dosing; cured/cleaned finish and any actual embeddedmaterial; fixed plantgate and unique originalnetQ; actual provider/site/time/geography; complete pattern/mould/utility/treatment producer histories; full raw/WIP/FG/tool/chemical/containerstocks and vectors; actual species/particle/medium and reactive/water evidence; all actual package directions and compatible provider serviceunits; complete sourcecontradictions and native37117debt; observed originalcohort services and nonoverlapping burdens |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calibrated actual wholebare netkg at fixed cured/cleaned firstgate, excluding every tare/othermaterial not in qualified endpoint; cp_acceptance and cp_cohorts. No catalog area/density/itemmass conversion. |
| `whole_preparation` | all actual formulations | Whole mass plus nested composition | kg | Purchased whole laminating-resin solution and gelcoat preparations are each weighed once with actual polyester, styrene, pigment/filler/promoter/inhibitor/carrier assays nested. Upstream resin manufacture is complete and separately qualified; polyester-backbone condensation chemistry is not silently located in the shellfabrication unit. Actual separately dosed styrene and actual curing-agent preparation are separate inputs; a preincluded ingredient is not purchased again. EPA documents prepromoted resin in tanks/drums, gelcoat and resin with separately hand-mixed or gun-injected catalyst, and typicalMEKP/BPOalternatives; none is an imposed Stromberg factoryrecipe. Before study use, establish actual purchased-versus-inhouse formulation and the exact individual additive/initiator supplies with atomic cards. No guessed pigment, filler, styrene/catalyst percentage, promoter or phlegmatiser is authorized. Sources:`cbp-cupola-1993`;`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`. |
| `reactive_species` | actual reactive and environmental streams | Actual species and elements | kg | Use actual independent reactionextent/speciation/phase/element evidence; no reactingstyrene conservation or totalVOC/PM/species/activeoxygen surrogate; cp_species. |
| `physical_service` | actual tools/packages/wastes | Whole physical mass and compatible service | kg | Whole receiverQt/fleet/stock once, physical Qt/Qanalysis separately from evidenced modelledA/Q; cp_assets/cp_pack/cp_recovery/cp_cohorts. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual whole purchased resin/gelcoat/glass and individual real supplies with complete upstreams; actual pattern/mould history included. |
| starting_condition_role | foreground_start |
| product_classification_scope | Narrow ornamentalGFRPcupola shell; earlier-heading exclusions and current residual36950 context, not wholeleafcoverage or acceptededge. |
| recursive_input_rule | Actual same-category returns/purchased article retain true original history and gate; no newQ, virgin production or repaircredit. Purchased finishedshell bypassing formation is outside this method. |
| upstream_dataset_requirement | Complete actual composition/state/route/site/time/transport-compatible producers; in-house tooling/utilities/treatment may be separately modelled only as complete linked real producers, not emptygeneric background. |
| disclosure | All ordered qualifiers, full source/native/wholeproduct limitations, originalQ and actual physical versus attributable producer histories. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `include_complete_manufacture` | The genuine manufacturing boundary includes actual drawing/pattern/mould production and maintenance, release preparation, resin/gelcoat receipt/storage/mixing/dosing, gelcoat application, chopped-fibre/resin spray layup and rolling/consolidation, cure, demoulding, actual trimming/drilling/cleaning/identification/testing and first release. Actual in-house tooling is not removed by calling a mould an external service: either retain its complete own material/energy/waste/emission history or link a separately modelled COMPLETEactual producer with matching whole-tool physical interfaces. A public generic mould/background is not presumed available or qualified. Same-history aggregate provider and decomposed actual inputs cannot both be added. Sources:`stromberg-gfrp-fabrication`;`stromberg-dome-manufacture`;`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`. | `stromberg-gfrp-fabrication`; `epa-frp-fabrication-2007`; `epa-frp-prevention-1991` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| dome_line | Whole dome-shell manufacture and observed originalcohort services | required | Actual selected route and qualified full producers | foreground | 1 kg reference flow |

### Process: Complete ornamental dome-shell manufacture (`dome_line`)

#### Inputs

##### Product flows

###### Unsaturated polyester laminating resin in styrene (`laminating_resin`)

One actual whole supplied solution; nested polymer/monomer/additives, no duplicate pure-polyester or premixed styrene purchase.

- Selected flow: Unsaturated polyester laminating resin in styrene
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `cbp-cupola-1993`; `epa-frp-fabrication-2007`

###### Polyester gel-coat preparation (`polyester_gelcoat`)

One actual whole supplied gelcoat; actual color/UV/monomer/filler/cure formulation, not assumed polyurethane or epoxy.

- Selected flow: Polyester gel-coat preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `stromberg-dome-manufacture`; `epa-frp-prevention-1991`

###### Glass-fibre roving for spray layup (`glass_roving`)

Actual sized glass roving chopped during application; verify E/AR grade and whole sizing/coating; no glassfraction default.

- Selected flow: Glass-fibre roving for spray layup
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `stromberg-gfrp-fabrication`; `epa-frp-fabrication-2007`

###### Methyl ethyl ketone peroxide curing-agent preparation (`mekp_preparation`)

Only where this actual separate whole preparation is used; supplier peroxide/carrier/speciation/activeoxygen convention, never assumed pureMEKP or prescribed concentration.

- Selected flow: Methyl ethyl ketone peroxide curing-agent preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `epa-frp-fabrication-2007`

###### Benzoyl peroxide curing-agent preparation (`bpo_preparation`)

Separate actual source-supported alternative, only when present; no presumption that both initiators are used or one fits every lot.

- Selected flow: Benzoyl peroxide curing-agent preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `epa-frp-fabrication-2007`

###### Separately dosed styrene monomer (`extra_styrene`)

Only actual separate supply/dosing; preincluded resin/gelcoat monomer is a nested component, not this purchase.

- Selected flow: Separately dosed styrene monomer
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `cbp-cupola-1993`; `epa-frp-prevention-1991`

###### Mould-release wax preparation (`release_wax`)

Actual complete release-wax product where used; retain solvent/carrier fate and applied/stock/residual amounts.

- Selected flow: Mould-release wax preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `epa-frp-fabrication-2007`

###### Aqueous polyvinyl-alcohol release-barrier preparation (`pva_barrier`)

Only actual separate barrier preparation; not a mandatory painted-product step or duplicate water input.

- Selected flow: Aqueous polyvinyl-alcohol release-barrier preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `epa-frp-fabrication-2007`

###### Acetone cleaning solvent (`acetone`)

Actual whole supplied solvent and actual recovery/makeup; any formulated substitute requires its own exact whole-preparation row.

- Selected flow: Acetone cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `epa-frp-fabrication-2007`; `epa-frp-prevention-1991`

###### Process water (`process_water`)

Only actual external water use; preincluded formulation water and internal reuse are nested/separate streams, not duplicate makeup.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `epa-frp-prevention-1991`

###### Electricity at fabrication supply (`electricity`)

Actual complete tooling/fabrication/extraction/cleanup/handling loads; kWh×3.6MJ/kWh is only unit conversion. No native electricity property/UUID finalized.

- Selected flow: Electricity at fabrication supply
- Flow property / unit: Energy / MJ
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `epa-frp-fabrication-2007`

###### Compressed air (`compressed_air`)

Only actual air-assisted/pneumatic supply with measured state/composition and complete producer; airless spraying does not imply zero other loads.

- Selected flow: Compressed air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `epa-frp-prevention-1991`

###### Architectural GFRP dome production mould (`mould`)

One actual whole reusable mould; actual material/dimensions/wholemass/fleet/producer history, no assumed wood/steel/GRP life or per-tool mass.

- Selected flow: Architectural GFRP dome production mould
- Flow property / unit: Mass / kg
- Amount rule: Keep complete actual physical article/fleet/stock separately; model evidenced attributable wholearticle serviceA/positive originalQ with compatible provider units once; no assumed itemmass/lifetime/shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `stromberg-gfrp-fabrication`; `epa-frp-prevention-1991`

###### Architectural dome production pattern (`pattern`)

Actual whole pattern/model service history; complete actual inhouse or linked producer, no separate purchase if already embedded in mould history.

- Selected flow: Architectural dome production pattern
- Flow property / unit: Mass / kg
- Amount rule: Keep complete actual physical article/fleet/stock separately; model evidenced attributable wholearticle serviceA/positive originalQ with compatible provider units once; no assumed itemmass/lifetime/shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `stromberg-gfrp-fabrication`

###### Equipment-cleaning wiping cloth (`wiping_cloth`)

Actual whole wiping article and material; no default cotton/polymer or life; retain absorbed solvent/resin as components of later whole waste.

- Selected flow: Equipment-cleaning wiping cloth
- Flow property / unit: Mass / kg
- Amount rule: Keep complete actual physical article/fleet/stock separately; model evidenced attributable wholearticle serviceA/positive originalQ with compatible provider units once; no assumed itemmass/lifetime/shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-frp-prevention-1991`

###### Spray-overspray catch paper (`catch_paper`)

Only actually used whole supplied catchpaper; actual treatment/additives remain in supplied article, not guessed fire-retardant recipe/certification.

- Selected flow: Spray-overspray catch paper
- Flow property / unit: Mass / kg
- Amount rule: Keep complete actual physical article/fleet/stock separately; model evidenced attributable wholearticle serviceA/positive originalQ with compatible provider units once; no assumed itemmass/lifetime/shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-frp-prevention-1991`

###### Fabrication-extraction filter cartridge (`filter_cartridge`)

Only actual installed whole filter; matching actual control producer/service units and full media/fleet history, not assumed capture efficiency.

- Selected flow: Fabrication-extraction filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Keep complete actual physical article/fleet/stock separately; model evidenced attributable wholearticle serviceA/positive originalQ with compatible provider units once; no assumed itemmass/lifetime/shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-frp-fabrication-2007`

###### Resin-supply transport drum (`supply_drum`)

One actual whole drum article, independently measured emptytare/material/liner; resin quantity excludes its shell. Group only identical actual article grades.

- Selected flow: Resin-supply transport drum
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-frp-prevention-1991`

###### Glass-roving supply carton (`roving_carton`)

Only actual carton packaging; record supplier inclusion and separate actual liner/other package if supplied separately.

- Selected flow: Glass-roving supply carton
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-frp-prevention-1991`

###### Protective dome transport crate (`transport_crate`)

Actual whole crate with declared material/components/tare/provider and physical history; material not specified by FAQ, so no inferred woodencrate or weight.

- Selected flow: Protective dome transport crate
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `stromberg-dome-faq`

###### Organic-peroxide preparation supply HDPE can (`peroxide_can`)

Only actual matching HDPEcan supply; independent emptytare/components and actual fill, no PDSnominalcapacity/netfill-to-canmass conversion or supplierdefault.

- Selected flow: Organic-peroxide preparation supply HDPE can
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `nouryon-mekp-basis-2026`

###### Returned protective dome transport crate (`returned_crate`)

Actual externally returned whole crate, not a new crate purchase, negative production demand or new productQ.

- Selected flow: Returned protective dome transport crate
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `stromberg-dome-faq`

#### Outputs

##### Product flows

###### Glass Fiber Reinforced Plastics (`dome_shell`)

Whole qualifying cured/cleaned shaped polyesterGFRP shell/segment at its fixed first-release gate; actualdrawing/grade/state admission mandatory.

- Selected flow: Glass Fiber Reinforced Plastics `589634bd-8183-4b26-a5a9-d57f54363a8b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `stromberg-dome-manufacture`; `cbp-cupola-1993`

###### Recovered acetone cleaning solvent (`recovered_solvent`)

Only actual external saleable whole recovered solvent with actual composition/state/function; internal recycle is a separately conserved stream, not this external output or credit.

- Selected flow: Recovered acetone cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `epa-frp-prevention-1991`

###### Resin-supply transport drum returned to supplier (`drum_return`)

Actual whole serviceable drum outward return and residual-state components; no automatic emptytare or negative manufacture credit.

- Selected flow: Resin-supply transport drum returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-frp-prevention-1991`

###### Glass-roving supply carton returned to supplier (`carton_return`)

Only actual external return; distinct from on-site reuse or discarded contaminated carton.

- Selected flow: Glass-roving supply carton returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-frp-prevention-1991`

###### Organic-peroxide supply HDPE can returned to its owner (`peroxide_can_return`)

Only actual permitted wholearticle return with retainedcontents/state documented; no emptytare or recovery credit assumed.

- Selected flow: Organic-peroxide supply HDPE can returned to its owner
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `nouryon-mekp-basis-2026`

###### Protective dome transport crate supplied with article (`crate_supplied`)

Whole actual outward crate independent of bareQ, deliveryloops and associated manufacturing/service vector.

- Selected flow: Protective dome transport crate supplied with article
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `stromberg-dome-faq`

###### Protective dome transport crate returned to its owner (`crate_return_out`)

Only actual distinct outward empty/usable article return, not the same supplied movement counted again.

- Selected flow: Protective dome transport crate returned to its owner
- Flow property / unit: Mass / kg
- Amount rule: Record full actual wholearticle directionBt, recipient and stock/genealogy independently; physical analyticalBt/Qanalysis. Any new manufacturing/service demand is separately evidenced attributableA/Q, with no duplicate embeddedhistory or returncredit; cp_pack; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `stromberg-dome-faq`

##### Waste flows

###### Cured GFRP shell trimming scrap (`gfrp_trim`)

Actual segregated whole cuttings/rejected shell including real finish/components; no clean-regrind or remelting of crosslinked thermoset is presumed.

- Selected flow: Cured GFRP shell trimming scrap
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `epa-frp-prevention-1991`

###### Uncured polyester laminating-resin waste (`resin_waste`)

Actual separate whole mixture and actual curestate/receiver; no duplicate retainedresin on paper/filter or invented cure-to-nonhazardous assumption.

- Selected flow: Uncured polyester laminating-resin waste
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `epa-frp-prevention-1991`

###### Polyester gel-coat preparation waste (`gelcoat_waste`)

Actual separately collected gelcoat mixture only; attached overspray belongs within whole substrate waste once.

- Selected flow: Polyester gel-coat preparation waste
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `epa-frp-prevention-1991`

###### Spent acetone cleaning-solvent mixture (`spent_solvent`)

One actual whole solvent/resin/water mixture to its receiver; no pureacetone proxy, assumed recovery yield or automatic coproduct.

- Selected flow: Spent acetone cleaning-solvent mixture
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `epa-frp-prevention-1991`

###### GFRP-fabrication cleaning wastewater (`cleaning_wastewater`)

Actual whole aqueous cleaning drain where present, with emulsifier/organic/solid subledgers; final provider discharges belong once, not a duplicated untreated-water emission.

- Selected flow: GFRP-fabrication cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `epa-frp-prevention-1991`

###### Separately collected GFRP fabrication dust (`collected_dust`)

Only genuinely separated collected material delivered as its own stream; material retained on filter/paper is nested there instead.

- Selected flow: Separately collected GFRP fabrication dust
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Sources: `epa-frp-fabrication-2007`

###### Contaminated spent fabrication filter cartridge (`spent_filter`)

One actual whole spentfilter containing media and retainedresin/glass/liquor/water once; drysubstrate is only a component.

- Selected flow: Contaminated spent fabrication filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-frp-prevention-1991`

###### Resin-contaminated overspray catch paper (`spent_paper`)

Whole actual contaminated sheet including actual coating/overspray/glass/moisture; no extra phantom resin/glass waste exchange.

- Selected flow: Resin-contaminated overspray catch paper
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-frp-prevention-1991`

###### Solvent-and-resin-contaminated wiping cloth (`spent_wipe`)

Whole actual discarded cloth including substrate/absorbedsolvent/resin/water, not emptycloth plus duplicate contents.

- Selected flow: Solvent-and-resin-contaminated wiping cloth
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-frp-prevention-1991`

###### Contaminated discarded resin-supply drum (`spent_drum`)

Whole actual discarded drum with liners and residualresin/solvent/water; no forced emptytare, reusecount or disposal route.

- Selected flow: Contaminated discarded resin-supply drum
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-frp-prevention-1991`

###### Contaminated discarded glass-roving carton (`spent_carton`)

Whole actual discarded carton including real retained material/moisture; segregated contents only if physically removed.

- Selected flow: Contaminated discarded glass-roving carton
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-frp-prevention-1991`

###### Contaminated discarded organic-peroxide supply HDPE can (`spent_peroxide_can`)

Actual whole receiver transfer includes container and actual retainedformulation/carrier/water once; specific receiver/handling/state required, not bareHDPE plus extra phantomresidue.

- Selected flow: Contaminated discarded organic-peroxide supply HDPE can
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `nouryon-mekp-basis-2026`; `epa-frp-prevention-1991`

###### Contaminated discarded dome transport crate (`spent_crate`)

One actual whole receiver transfer including substrate/retained packing/resin/finish/water; nested composition and provider/service ledgers remain distinct.

- Selected flow: Contaminated discarded dome transport crate
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `stromberg-dome-faq`; `epa-frp-prevention-1991`

###### Retired architectural GFRP dome mould (`retired_mould`)

Whole actual retiredtool with actual coating/retainedmaterial and receiver; actual full fleet transfer independent of attributed service share.

- Selected flow: Retired architectural GFRP dome mould
- Flow property / unit: Mass / kg
- Amount rule: Actual whole physical receiver transferQt and full provider quantity recorded once, physical analyticalQt/Qanalysis; linked modelled treatment/service demand is evidenced attributableA/Q for each original servedcohort in compatible provider units, never fullQt recharged to each; cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `stromberg-gfrp-fabrication`

##### Elementary flows

###### Styrene to air (`styrene_air`)

Actual species-resolved final stack/fugitive/upset release; distinguish chemically incorporated monomer and gas sent to treatment.

- Selected flow: Styrene to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-frp-fabrication-2007`

###### Acetone to air (`acetone_air`)

Actual cleanup-solvent species release separately from styrene and totalVOC, with actual controls/uncertainty.

- Selected flow: Acetone to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-frp-fabrication-2007`

###### Chopped glass fibre particulate to air (`glass_air`)

Only actual composition/morphology-qualified looseglass particulate; no totalPM-to-pureglass or default particle-size conversion.

- Selected flow: Chopped glass fibre particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-frp-fabrication-2007`

###### GFRP laminate dust to air (`gfrp_dust_air`)

Actual cured composite dust with resin/glass/finish composition and release medium; not pureglass, resinmist or captured material counted twice.

- Selected flow: GFRP laminate dust to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-frp-fabrication-2007`; `epa-frp-prevention-1991`

###### Polyester-resin aerosol to air (`resin_aerosol_air`)

Actual uncured resin/gelcoat droplet mixture separately from monomervapour; retained mixture and volatile components must not doublecount the same material.

- Selected flow: Polyester-resin aerosol to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-frp-fabrication-2007`

###### Carbon dioxide to air (`co2_air`)

Only independently evidenced actual final CO2 from included reaction/decomposition/control producer; a PDSdecomposition list is not normalcure chemistry or an emission factor. Full actual generatingproducer interfaces remain mandatory.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `nouryon-mekp-basis-2026`; `epa-frp-fabrication-2007`

###### Water vapour to air (`water_air`)

Only actual final water release with independent supplied/free/reaction/phase evidence; no condensation/crosslinking water default.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual attributable amountA/positive originalQ once; full physical raw transfer and composition retained independently under cp_cohorts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-frp-prevention-1991`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_hierarchy` | Avoid allocation by actual subdivision/direct attribution. Remaining exchange burdens use demonstrated determining physical causality for each exchange/function; only residual multifunctionality lacking such a relation uses justified actual exit-state market values. Full physical coproduct, waste, packaging and tool stocks/transfers never shrink with environmental shares. Internal recycle, returned containers, failed/uncured material and treatment service are not automatic coproducts or substitution credits. Actual saleable recovered solvent needs whole composition/state/function and complete recovery burdens; no neat-solvent/zero/recycling credit assumption. Sources:`ilcd-allocation-2010`;`epa-frp-prevention-1991`. | `ilcd-allocation-2010`; `epa-frp-prevention-1991` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | dome_line | Whole finished article and original gateQ | unnormalised actual records | article/segmentID; drawing; resin/glass/gelcoat/embeddedcomponents; fullroute; cured/cleanedstate; actualbarekg; independenttare; dimensions; moisture/finish; test/firstrelease/reject; parentreturnIDs | Quality officer: weigh whole qualified bare shells on calibrated scales at one fixed actual completed-cure/clean firstgate; verify material/shape/finish/embeddedcomponents against actual approved drawing and nativewholeProduct. Retain actual supplier cure/test method and uncertainty, all failures/destructive specimens and original unique eventIDs. Counts, nominal density, area or catalog examples never establish kg. | kg | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |
| cp_materials | dome_line | Whole formulations and actual dosing | unnormalised actual records | lot/provider/SDS/CoA; rawwholekg; polymer/monomer/carrier/pigment/filler; initiator/speciation/activeoxygen conventions; actualseparatedosing; opening/closing tanks/WIP; recoverystocks; supplierhistory; failedruns | Materials accountant/laboratory: retain raw whole receipts/consumption and actual mixture certificates with independent component/state assays. Establish actual purchasedpremixes versus onsiteformulation; independently log every actual ingredient/dose and add its exactatomic row before qualification, without doublecounting preincluded styrene/catalyst/carrier. Complete actual upstream resins/glass/gelcoat and transport are matched, no virgin/recycled or polymerproxy assumption. | kg | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |
| cp_utilities | dome_line | Actual utilities and linked producers | unnormalised actual records | meter/time/state; rawkWh/MJ; airkg/volume/pressure/temperature/composition; actualwater; mould/booth/cure/extraction/cleanup/idle/test/service loads; producerunits/boundary/history | Utilities engineer: meter complete actual tooling/fabrication/support/failedzerooutput operations and actual postgate service horizon. Retain actual cure/spray/control configuration and complete qualified upstream or separatelymodelled on-site producers. kWh×3.6 is unit conversion only; gasdensity/state and any actual thermal/combustion interfaces need independent actual records. | kg; kWh; MJ | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |
| cp_recovery | dome_line | Whole recovery and receiver interfaces | unnormalised actual records | rawstreamID; wholegross/tare/netkg; actualcurestate; composition/resin/solvent/water; separations; internalrecovery; receiverQt/units; completeproducerburdens; stocks; physicalcohortprovenance; nonoverlapservicevectors | Environmental/recovery engineer: match whole actual liquid/solid/gas send/receive and composition, retained components, separatedcuttings and complete treatment/recovery loads. Physical receiverQt is recorded once; independently substantiate originalcohort serviceA and compatibleproviderunits. Internal recycle cancels, no default closedloop/pure solvent/hazardstatus/credit. | kg | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |
| cp_species | dome_line | Species, elements, phases and true final outlets | unnormalised actual records | actualspecies/CAS/medium; integratedgasvolume or rateseries; concentration; conditions; aerosol/particlecomposition/morphology/size; samplemethod/QC/uncertainty; reactionextent; relevantC/H/O/Si/otherassays; allstocks/waterphases | Analytical/environment officer: use documented matrixappropriate species/aerosol/particulate sampling and analytical QA with detection/condensation/recovery limits. Concentration×matchedintegratedvolume or rateintegration gives actualspecies mass, not extra time. Independently verify reactive incorporation/byproducts/water and full elemental/wholemass closure; actual unmeasured matrix/species uncertainty is unresolved, no totalVOC/PM surrogate or fitted residual. | kg; m3; mg/m3 | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |
| cp_assets | dome_line | Whole tooling/filter/cloth articles and service vectors | unnormalised actual records | articleID; actualmaterial/dimensions/wholekg; own/producerhistory; opening/closing installed/spare/new/returned/retired; actualcharges; retainedresin/glass/solvent/water; receiverQt; originalQ; providerunits; evidencedservicevectors | Asset/tooling custodian: independently weigh complete actual article/fleet and nested components, trace real tooling manufacture/maintenance and every servingcohort; supplier aggregate and own decomposed history must not overlap. Fullretired/contaminated receiver transfers remain actualwholemass once, distinct from nonoverlap attributable serviceA/Q. No invented lifetime, share, itemmass or unknownproviderconversion. | kg; item | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |
| cp_pack | dome_line | Each actual whole package and all physical directions | unnormalised actual records | article/material/linerID; owner/provider; newreceipts; attachedincoming; suppliedgrossout; externalreturnin/out; wasteticketQt; empty/attachedWIP/FG/reusablestocks; netbareQ; retainedcontents/moisture; embeddedburdens; originalcohorts/servicevectors | Packaging custodian: calibrated actual wholepackage and tare/component weights for each real drum/carton/crate SKU, independently reconcile receipt/grossout/returns/waste/stocks by recipient and genealogy. No assumed wood/liner/wrap, drumcapacity-to-kg, reuse credit or allocation-shrunk physical movement. Every additional actual supplied package material has an atomic card and complete nonoverlapping providerhistory before study use. | kg | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |
| cp_cohorts | dome_line | Separate full physical, eventQ and attributable histories | unnormalised actual records | uniqueoriginaleventID/Q; fullraw/WIP/FG/equipment/tool/packstocks; allactualinputs/outputs/returns; originalbasisdelivery/remainingstates/loss/otherdispositions; actualwater/finishchanges; inheritedvectors; periodfailure/reworkloads; closingWIPcarry; lateroriginalcohortservices | Production controller: reconcile raw physical quantities independently of unique firstreleaseQ and exchange-specific attributable vectors. Partition all disjoint originalpostgate states/dispositions; cancel gross loops without new events, include all incurred failures/idle/destructivetests, carry actual WIP and complete providerhistory once and preserve originalQ for later services. Raw totals remain undivided, including zero/unknownQ and unproved shares. Materialchanging repair is excluded until actual permission plus independent added/removed materials/repairWIP and individual atomiccards establish it. | kg; provider unit | each event/lot and complete meter/stock period | all actual production/tool/stock and oldcohort histories including failed/zero-output periods | actual factory, suppliers and complete linked producers | per 1 kg reference flow | calibration; original assays/tickets; actual method/sampling QA; complete provenance and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `event_basis` | all inventory rows | Q=sum unique positive original barefirstrelease netkg at one actual cured/cleaned gate; no additional event for return/rework/retest/dispatch. Keep full physical postgate states/dispositions independently. | original_eventIDs; cp_acceptance; cp_cohorts | originalQ and full physical bridge | `stromberg-gfrp-specification` |
| `cohort_attribution` | all inventory rows | Construct attributableA from openingWIP inherited exchangevectors plus all incurred period loads including failures/idle/destructivetests, less independently substantiated closingWIP carry and traced other dispositions. Later services retain originalcohortQ; providerembedded and own decomposed history cannot overlap. Physical whole transfers/stocks remain full separately. | cp_cohorts; cp_materials; cp_utilities; cp_recovery; cp_assets; cp_pack | actual attributableA in compatible provider units | `ilcd-allocation-2010` |
| `normalize_cohort` | all inventory rows | For each modelled exchange divide actualattributableA in compatibleunits by original positiveQ inkg exactly once. Reference eventdome_shell isQ/Q=1kg; it is not an extra physical external transfer. WholewasteQt/Qanalysis or packageBt/Qanalysis is a distinct physicalanalytical display, not automatically each cohort’s modelled demandA/Q. Zero/unknownQ leaves raw totals unresolved. | A; Q; cp_cohorts; cp_acceptance | one exchange amount per1kg reference flow | `ilcd-allocation-2010` |
| `physical_chemical_closure` | all inventory rows | Whole-mass and actual relevant C/H/O/Si/other-element ledgers are independent of environmental allocation. Track actual resin/gelcoat/fibre/retained release agent/finish components, supplied carriers and moisture, uncured/cured stocks, reaction incorporation/by-products, evaporation, liquidwaste and true outlets. No generic thermoset reaction yields default water, CO2, zero loss or a density. Physical stream closure and elemental assay do not identify an unknown molecular species, and a residual cannot determine two unknowns. Waste solvent or recovery condensate is weighed as the whole mixture with nested resin/monomer/water components, not automatically neat acetone or clean water. Sources:`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`. | cp_materials; cp_recovery; cp_species; cp_assets; cp_pack | independent wholemass/element/species/water ledgers and gaps | `epa-frp-fabrication-2007`; `epa-frp-prevention-1991` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | reference and actual lot | Real whole thermosetglass/polyester shaped article and native/finishedstage fit, explicit actualgrade/drawing/geometry/embeddedcomposition; no component or unrelated productproxy. | cp_acceptance; fullnative/source context |
| complete_manufacture | actual producers and material route | Full pattern/mould/dosing/gelcoat/sprayup/rolling/cure/demould/finish/test and actual utilities/cleaning/treatment/source-specific chemistry; every real added material or emission has atomic identity before study use. | cp_materials; cp_utilities; cp_species; cp_recovery; cp_assets |
| three_ledgers | all actual histories | Full physical stocks/transfers, unique originalQ and nonoverlap attributable provider/environment vectors are separately complete; preserve unknownshares/units and all actual receivercomposition. | cp_cohorts; cp_assets; cp_pack |
| source_limits | sources and quantities | All full source qualifications/alternatives/contradictions retained in bothnormative projections; no source fraction/density/mass/life/factor/certification or available-provider default. | section9 complete units; original sources; actual studyrecords |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_whole_scope` | Verify real cured/cleaned wholeGFRPshell/segment and actual composition/drawing/gate/provider; reject rawcomponent, PPpedestal, mixedroof and namedneighbour proxies. | `stromberg-dome-manufacture`; `wco-hs2022-ch39` |
| `validate_actual_route` | Retain complete actual known tooling, formulation/dosing, forming/cure/finish and utility/treatment hardware with qualified fullproducer interfaces; no dummy background or futureSOP closure of a true coremethod/identity conflict. | `epa-frp-fabrication-2007`; `epa-frp-prevention-1991` |
| `validate_accounts` | Verify originalpositiveQ, complete rawstocks/history/dispositions, one A/Q division and separately full physical Qt/Bt and nonoverlap providerdemands; no duplicated attachedmaterial waste, loops or inheritedburden. | `ilcd-allocation-2010` |
| `validate_complete_context` | Every complete qualification below must remain in both language normative units; source tables and short summaries alone are insufficient. | `stromberg-gfrp-specification`; `cbp-cupola-1993`; `epa-frp-fabrication-2007` |

### Complete source applicability and accounting context

This subtype is a manufactured, cured and cleaned rigid GFRP ornamental dome shell or genuinely finished shaped shell segment, including its actual polyester gel coat and glass/polyester laminate. It is not raw resin, glass roving, a flat/profiled feedstock, an injection-moulded PP pedestal, sanitaryware, pipe, floor/wall covering, a door/window, an appliance enclosure or a complete prefabricated building. A shaped factorysegment is an actual finished building article in its own right; no whole installed roof-system performance is claimed. The selected unit is netkg of that whole article at one fixed first-quality-release gate, never an assumed per-dome weight, area conversion or packing-only receipt. Sources:`stromberg-dome-manufacture`;`un-cpc3-2025`.

The actual whole native Product is Glass Fiber Reinforced Plastics, officialChinese玻璃钢制品, with Production mix, in the factory and Production of FRP name components. Its hard comment specifies fine glass fibres combined with a THERMOSETTING resin. It has no fixed CAS, purity, geometry, grade, glass fraction, finish, supplier or geography. Primary product/process evidence and actual lot/drawing/composition/cured-state/gate admission must establish that the whole terminal shell is this composite article; a glass or polyester component, raw thermoplastic pellet, uncured feed, mould or unrelated end product is not a proxy. NativeCPC37117 remains contrary metadata, not silently edited or used as sole fit/rejection. Its promotional strength/eco-friendly comment is not scientific proof, a provider or an impact claim.

CurrentCPC3.0 names the residual builders-ware leaf separately from plastic semi-manufactures, pipe, covering, sanitary, packaging and appliance/electrical neighbours. WCOHS2022Chapter39Note11 applies only when no earlier sub-ChapterII heading covers the actual product, and11(h) explicitly names ornamental architectural cupolas. Complete heading3925 distinguishes tanks, doors/windows, shutters/blinds and residualOther; this candidate uses the actual shaped ornamental cupola branch. Historical primaryCBPHQ952857 describes actual Stromberg cupola-domes of unsaturated polyester dissolved in styrene/catalysts plus glass fibres, and explicitly classifies them under392590 throughNote11(h), while its cast-stone and glass-reinforced-plaster products are different. The1993ruling is a historical product case; no old duty, present legal approval, currentSKU/factory recipe or accepted PCR edge is inferred. Sources:`wco-hs2022-ch39`;`cbp-cupola-1993`;`un-cpc3-2025`.

Complete manufacturer fabrication context: approved drawings lead to a carved model, then a mould made from fiberglass, steel, wood or rubber according to detail; a designed mix of polyester OR epoxy resin is sprayed with alkali-resistant glass fibres. The dome-specific source describes a thin rigid laminate shell: polyester-resin gel coat is sprayed into a mould, and after it becomes tack-free layers of chopped glass fibre OR glass fabric and resin are added; reinforcing ribs, rods and struts may be added if necessary, and gel coat may be pigmented or painted. This method selects the real polyester-gelcoated chopped-glass open-mould branch, preserving those alternatives rather than claiming one common recipe or forcing epoxy/fabric/coating/reinforcement into it. Actual supplier and approved drawing determine whether a proposed lot fits. Sources:`stromberg-gfrp-fabrication`;`stromberg-dome-manufacture`.

Preserve the manufacturer’s full material qualification, including conflicting values: itsGFRPspecification lists a moulded surface over glass-reinforced polyester laminate with structural reinforcing as required; UV-inhibitedNPG-ISO polyester gel coat AND polyurethane as surface options; isophthalic polyester resin, E-type random chopped glass, glasscontent25–30wt% AND glasscontent15wt%maximum, nominal/minimum shell and gelcoat dimensions, specificgravity1.5 and mechanical/fire/tolerance examples. These are not one self-consistent measured lot recipe. Do not pick a convenient fraction, infer density or transfer its old test thresholds as category defaults. Current fabrication page says alkali-resistant glass while the archivedspecification saysE-type: actual reinforcementgrade/finish must be verified, not silently unified. The source additionally requires unit/drawing serial identification and cure/clean before shipment; its removal-of-incompatible/toxic-material language is not an independent non-toxicity certification. Sources:`stromberg-gfrp-specification`;`stromberg-gfrp-fabrication`.

Whole-product limits include the actual source counterexamples. The dome page describes large pie-shaped factory sections bolted together on site, optional ribs/rods/struts, an exterior fiberglass roof on a GFRCcornice/drum, and a fiberglass–insulation–fiberglass sandwich; another example is GFRS/stone-faced material. These are not an all-GFRP whole installed assembly. This method may bind the complete cured shaped GFRPshell/segment only when its actual delivered composition fits the nativefamily and its full forming/finishing history is included. Required embedded hardware, core, insulation, stone/gypsum/cement, polyurethane finish or additional components cannot be deleted to force that binding: identify each actual material and review the whole endpoint. Onsite bolts, framing, insulation, installation and field painting do not silently become part of a bare factoryshell. Sources:`stromberg-dome-manufacture`;`stromberg-gfrp-specification`.

The genuine manufacturing boundary includes actual drawing/pattern/mould production and maintenance, release preparation, resin/gelcoat receipt/storage/mixing/dosing, gelcoat application, chopped-fibre/resin spray layup and rolling/consolidation, cure, demoulding, actual trimming/drilling/cleaning/identification/testing and first release. Actual in-house tooling is not removed by calling a mould an external service: either retain its complete own material/energy/waste/emission history or link a separately modelled COMPLETEactual producer with matching whole-tool physical interfaces. A public generic mould/background is not presumed available or qualified. Same-history aggregate provider and decomposed actual inputs cannot both be added. Sources:`stromberg-gfrp-fabrication`;`stromberg-dome-manufacture`;`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`.

Purchased whole laminating-resin solution and gelcoat preparations are each weighed once with actual polyester, styrene, pigment/filler/promoter/inhibitor/carrier assays nested. Upstream resin manufacture is complete and separately qualified; polyester-backbone condensation chemistry is not silently located in the shellfabrication unit. Actual separately dosed styrene and actual curing-agent preparation are separate inputs; a preincluded ingredient is not purchased again. EPA documents prepromoted resin in tanks/drums, gelcoat and resin with separately hand-mixed or gun-injected catalyst, and typicalMEKP/BPOalternatives; none is an imposed Stromberg factoryrecipe. Before study use, establish actual purchased-versus-inhouse formulation and the exact individual additive/initiator supplies with atomic cards. No guessed pigment, filler, styrene/catalyst percentage, promoter or phlegmatiser is authorized. Sources:`cbp-cupola-1993`;`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`.

A commercialMEKPcuring preparation is a whole actual supplied formulation, potentially a mixture of peroxide species and carriers; an active-oxygen assay is not automatically a massfraction of one pureMEKPformula, free water or carrier. BPOpreparations likewise retain actual wetting/carrier composition. Record complete supplied mass and supplier assay/speciation conventions, independent density at actual state where used, and actual consumed/retained/waste components. Thermal/chemical cure consumes reactive styrene and initiator into products and by-products; do not conserve each reacting molecule or assume all monomer evaporates. Crosslinking actual polyester/styrene is distinct from upstream condensation; reactionwater and all gas/condensate must have independent actual chemistry/extent evidence, not a theoretical recipe or fitted residual. Sources:`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`. Additional primary formulation basis:`nouryon-mekp-basis-2026`; not a selected factoryrecipe.

Retain actual utility, ventilation, extraction, booth, cleanup, recovery and treatment units with their complete real burdens. Airless versus air-assisted spraying, ambient versus actual heated cure, water/substitute-solvent versus acetone cleaning and any controls are actual configurations, not default plant hardware. Separately modelled on-site combustion/recovery/treatment producers require matched whole gas/liquid/condensate interfaces and full actual reagent/fuel/air/O2/water/energy/species/waste inventories. Do not call known on-site equipment offsite, omit it to fit a purchasedutility label, or link an empty disposal stub. No fixed VOC suppression, capture efficiency, factor or assumed zero/available provider closes that evidence need. Sources:`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`.

Measure actual final styrene and acetone species/medium separately from totalVOC, gas transferred to treatment, resin aerosol and glass/composite particulate. Use matrix-appropriate sampling/speciation/QC and matched integrated gas volume or measured rate integration; never multiply integrated volume by time again. Separate chopped loose glass from actual resin-coated aerosol and cured composite dust by real composition/morphology/size evidence; totalPM cannot become pureglass by assumption. Count true final receiver/provider releases once, preserving fugitive/startup/upset and nondetect uncertainty. EPA factors describe monomer evaporation and do NOT include cleanup-solvent emissions; this PCR adopts no historical factor, suppression range or unqualified sampling method as a universal default. Sources:`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`.

Maintain three independent accounts: full physical raw/WIP/finished/tool/container transfers and stocks; the unique original first-acceptance eventsQ; and attributable environmental/provider-service vectors. Lock each event’s original bare netkg and declared cure/finish/moisture basis at the fixed quality gate. Q is the sum of unique positive original events, not another external physical output. Returns, reinspection, reworking, reshipment and stockmovement create no second acceptance. Do not restore lost material/water to survivors while also counting the loss; later measured mass/finish/moisture changes are separate physical changes and original-basis conversions, not a new or retroactively enlargedQ.

The general original-basis postgate bridge partitions disjoint net remaining deliveries, every actual on-site accepted state, irreversible losses and other terminal dispositions. Gross return/rework loops cancel by genealogy; delivery plus closingFG works only when no other states/exits exist. Keep all actual physical raw/WIP/finished/equipment/chemical-tank/tool/container histories separately, including opening inherited vectors, failed/zero-output/destructive-test loads and actual closingWIP carry to future cohorts. Later services retain the original cohortQ. Do not add an upstreamaggregate history and the same decomposed history twice. Zero/unknownQ keeps raw totals and the result unresolved, never division or deletion. Material-changing repair requires actual manufacturer permission, compatible drawings/materials and acceptance, independently measured added/removed materials, repairWIP and specific atomic cards; source promotional repairability does not authorize a repair branch or life extension.

Whole-mass and actual relevant C/H/O/Si/other-element ledgers are independent of environmental allocation. Track actual resin/gelcoat/fibre/retained release agent/finish components, supplied carriers and moisture, uncured/cured stocks, reaction incorporation/by-products, evaporation, liquidwaste and true outlets. No generic thermoset reaction yields default water, CO2, zero loss or a density. Physical stream closure and elemental assay do not identify an unknown molecular species, and a residual cannot determine two unknowns. Waste solvent or recovery condensate is weighed as the whole mixture with nested resin/monomer/water components, not automatically neat acetone or clean water. Sources:`epa-frp-fabrication-2007`;`epa-frp-prevention-1991`.

Actual supply drums, roving cartons and protective transport crates are whole individual articles with declared actual material/liner/tare/ownership/stock histories; no universal drum volume-to-mass, woodcrate, PEwrap or fixed protectivefiller is assumed. The domeFAQ establishes crating, but does not identify crate material; a wooden-box description for a GFRC product is not this GFRP packaging recipe. Record every actual included package receipt, attached inward/outward movement, return and discarded receiver transfer independently from netQ and inherited burdens. Group only genuinely identical whole articles; separately supplied liners/wrap/packing/fasteners need their own atomic cards and full upstreams before study use. Empty tare/residual contents are components, not duplicated purchases/physical wastes. Sources:`stromberg-dome-faq`;`epa-frp-prevention-1991`.

Moulds, patterns, cloth and filters retain full actual dimensions, whole mass, installed/spare/received/returned/retired stocks, chemical charges and serving histories. Service attribution does not invent per-item mass, fleet shrinkage, lifetime or a common cohort. A discarded contaminated filter, catchpaper, wipe, drum or crate is ONE whole actual receiver transfer containing substrate plus retained resin/glass/solvent/liquor and water once. Nested drysubstrate and retained components are not additional external waste or treatment demands unless physically separated before the boundary. Separately collected trim/dust is a distinct physical stream only when actually removed into its own receiver. Sources:`epa-frp-prevention-1991`.

For shared articles or waste, record full actual receiverQt and full actual provider quantity once, known component/physical-cohort provenance separately, and distinct evidenced nonoverlapping per-served-cohort service/burden vectors with compatible provider units and originalQ. Physical analytical displayQt/Qanalysis is not automatically modelled demandA/Q for every cohort. Do not shrink actual waste mass by a service share or recharge the full transfer to each cohort. Unknown oldcohort, provider units or nonoverlap stays unresolved. Synthetic test only, never empirical default: actual contaminatedfilter10kg=8substrate+2retainedpigment, with supportednew25%/old75% treatmentservice, gives2.5/7.5kg-equivalent demands; newQ100/oldQ200 gives0.025/0.0375kg-equivalent perreference, while the actual receiver still gets10kg once and no extra2kg attached-powder exchange exists.

Primary peroxide qualification: Nouryon’s actual27May2026ButanoxM-50PDS identifies a MEKPsolution in dimethylphthalate, depicts several peroxide structures includingH2O2, and separately reports totalactiveoxygen. Its applications expressly require a cobaltaccelerator and contrast a benzoylperoxide/amineaccelerator system; this is not proof of the actual domefactory supplier, catalyst/promoter or formulation. Promoter identity and embedded-versus-separate dose require actual supplier data and atomic inputs if separately supplied. Its regionalstandardpack uses HDPEcans with the same nominalcapacity but different net solutionfills; neither netfill nor nominalcapacity establishes emptycan mass or a universal count-to-kg conversion. Major decompositionproducts and thermal/storage conditions describe that product context, not normalcure stoichiometry, an assumed emission list, water/CO2 yield, safety approval or processrecipe. No PDSpercentage/density/packsize or lowwater/polarcompound/performance claim is adopted as a PCRdefault. Sources:`nouryon-mekp-basis-2026`.

Additional complete manufacturer assembly context: the currentGFRPpage says domes/cupolas can be resined together into a one-piece watertight structure, while the dome-specific archivedpage describes pie-shaped segments bolted together on site. These are source alternatives, not a single guaranteed joint, no-joint, bonding or assembly method. This firstgate reference requires actual evidence of the complete shaped factoryarticle being released. A factory or field bonding/assembly branch needs its real individual resin/adhesive/fastener/material interfaces, operations and providerhistory; it cannot be silently omitted if present, or added by name to imply a complete installed dome. Sources:`stromberg-gfrp-fabrication`;`stromberg-dome-manufacture`.

Additional complete manufacturer finish/mass limits: source finishes include real copper in fiberglass gelcoat, factory or field goldleaf, paint, embedded mosaic tiles or merely moulded tile patterns; these are distinct actualmaterial/operation cases, not interchangeable appearances. The olddomepage gives a typical2lb/ft2, currentGFRPpage2–4lb/ft2, and FAQ3–5lb/ft2 plus a10ft/300lb example. None is an independently measured bare mass for this actual configuration, a universal density or a count/area-to-mass conversion. Keep actual drawn parts, coating/core/embedded materials, gross/tare/net weighing and dimensional state; do not use source claims of hurricane survival, indefinite life, easyrepair or low shipping impact as category performance, longevity, repair permission or environmental advantages. Sources:`stromberg-dome-manufacture`;`stromberg-dome-faq`;`stromberg-gfrp-fabrication`.

Avoid allocation by actual subdivision/direct attribution. Remaining exchange burdens use demonstrated determining physical causality for each exchange/function; only residual multifunctionality lacking such a relation uses justified actual exit-state market values. Full physical coproduct, waste, packaging and tool stocks/transfers never shrink with environmental shares. Internal recycle, returned containers, failed/uncured material and treatment service are not automatic coproducts or substitution credits. Actual saleable recovered solvent needs whole composition/state/function and complete recovery burdens; no neat-solvent/zero/recycling credit assumption. Sources:`ilcd-allocation-2010`;`epa-frp-prevention-1991`.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacture inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matched cured shaped polyesterGFRPornamental shell/segment after complete real lot/provider/method qualification; installation model remains separate. |
| excluded_use | Wholeinstalledcupola/roofsystem equivalence; arbitraryFRPmarket average; omittedcore/metal/insulation/cement/gypsum; PPpedestal; approval/load/warranty/life/lowimpact claims. |
| required_metadata | All ordered qualifiers, actualplant/provider/time/geography, fullnative/source context, whole material and actualgeometry/state, originalgateQ, complete tooling/raw/WIP/FG/chemical/packstocks, species/phasewater and actual producerinterfaces. |
| required_quality_disclosure | All actual method/matrix/sampling uncertainty, current quantitative/UUID/provider/unit/history/share gaps, material contradictions and distinct scoped document/language review, independent scientific approval, actual-study qualification and mapping acceptance states. |
| update_trigger | Actual change in resin/glass/gelcoat/additives, moulding/cure/finish/embeddedcomposition, geometry/gate/provider, emissions/treatment, packaging/stock/service or new material evidence. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations,CPC Version3.0 Explanatory Notes,30June2025,36950 and adjacent363/364/369 titles; completePDF177–179. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current residual builders-ware title and named semifinished/profile/pipe/floor/wall/sanitary/packaging neighbours only; no manufacturing recipe or accepted mapping. |
| `wco-hs2022-ch39` | official_guidance | WCO,HS2022 Chapter39,completeNote11 and headings3922–3926,PDF3/9. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0739_2022e.pdf | Note11 earlier-heading proviso and(h) expressly naming ornamental cupolas; distinguish raw material, cover/profile/pipe/sanitary/door-window and whole-building functions. No current duty or acceptance claim. |
| `cbp-cupola-1993` | official_guidance | USCBP,HQ952857,2March1993,completefacts/polyesterCupola analysis/holding; actual full primaryAPI rendition. https://rulings.cbp.gov/api/ruling/952857 | Real historical Stromberg fiberglass/unsaturated-polyester/styrene/catalyst cupola-domes under392590 viaNote11(h), contrasted with cast stone and glass-reinforced plaster. Historical case only, not current tax/legal approval, current SKU recipe or measured factory LCI. |
| `stromberg-dome-manufacture` | handbook | Stromberg,Fiberglass reinforced domes,complete manufacturerproduct/process and projectcounterexamples,undated archived manufacturerpage. https://old.strombergarchitectural.com/products/domes/materials/gfrp--glass-fiber-reinforced-polymer--domes | Real thin rigid polyester-gelcoated glass/resin shell fabrication, optional reinforcement/finishes and shaped factorysegments. Preserve mixed GFRC/insulation/stone examples and site-bolting boundary; no weights/performance/warranty/repair defaults. |
| `stromberg-gfrp-fabrication` | handbook | Stromberg,GFRP materials,Fabrication and Applications,actual manufacturerHTMLsnapshot2026-11-08. https://www.strombergarchitectural.com/materials/gfrp/ | Actual drawing/model/mould and sprayed glass/resin manufacture; polyester/epoxy and mouldmaterial alternatives, not one common formulation. |
| `stromberg-gfrp-specification` | handbook | Stromberg,GFRP CSI Specifications,Section06610,completeparts1–3,undated archivedmanufacturerpage. https://old.strombergarchitectural.com/gfrpspecifications | Product qualification, gelcoat/polyurethane options, actual drawing/serial/cure/clean/handling requirements and explicit contradictoryglassfraction/nominalproperty context. No selected fraction/density/tolerance/certification default. |
| `stromberg-dome-faq` | handbook | Stromberg,Architectural Dome FAQ,ExteriorDomes,actual manufacturerHTMLsnapshot2026-11-08. https://www.strombergarchitectural.com/architectural-dome-faq/ | Polyester-dome and crate/shipment/attachment context, no inferred crate material or current transport factor. Catalog weights and load/environmental claims are not reference-mass/functional defaults. |
| `epa-frp-fabrication-2007` | official_guidance | USEPA,AP42§4.4 Polyester Resin Plastic Products Fabrication,February2007text/Table4.4-2May2008update,complete§§4.4.1–4.4.2. https://www.epa.gov/sites/default/files/2020-10/documents/c04s04.pdf | Independent industrial polyester/styrene/peroxide chemistry; open-mould gelcoat/sprayup/rolling/cure, alternative processes and real styrene/acetone/particulate pathways. No source recipe/cure time/monomer percentage/control efficiency/emission factor or closed-process/staple analogy adopted. |
| `epa-frp-prevention-1991` | official_guidance | USEPA,EPA/625/7-91/014,Guides to Pollution Prevention:The Fiberglass-Reinforced and Composite Plastics Industry,October1991,completeoriginalPDF11/12/15/18/19/37,printed6/7/10/14/15/34. https://archive.epa.gov/airquality/community/web/pdf/01058.pdf | Premixed/prepromoted liquid resin versus actual separate catalyst/solvent dosing; actual drum/carton/rag/overspray/solvent/recovery/waste interfaces. Keep epoxy/continuous-coating alternatives distinct; no waste fraction, nonhazardous status, storage/cure condition or recycling credit default. |
| `ilcd-allocation-2010` | official_guidance | EuropeanCommissionJRC,ILCDHandbook GeneralguideforLCA—Detailedguidance,FirsteditionMarch2010,§7.9.3.1–.2,printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Subdivision/direct attribution and exchange-specific determining physical causality, then justified actual exit-condition market values for residual multifunctionality; not universal mass/equal shares or automatic recovery credit. |
| `nouryon-mekp-basis-2026` | handbook | Nouryon,ButanoxM-50 ProductDataSheet,visiblefooter27May2026,completePDF1–4 inclchemicaldrawing/applications/packing/decomposition/disclaimer. https://www.nouryon.com/globalassets/inriver/resources/pds-butanox-m-50-thermoset-composites-glo-en.pdf | Illustrative real MEKPsolution/DMP/activeoxygen and HDPEcan regionalfill basis; no actual StrombergSKU/supplier/formulation claim. Keep cobaltaccelerator and BPOaminecomparison as thisproduct conditions; no dose/density/water/cure/storage/tare/decompositionfactor/default. |
