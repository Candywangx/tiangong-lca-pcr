---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.bicycle-structural-parts
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Finished lug-brazed steel bicycle frame manufacturing

## 1. Scope and Applicability

Manufacture of a new standalone finished diamond frame for a nonmotorized bicycle, using identified cold-worked non-stainless chrome-moly steel tube members, supplied steel socket lugs/bottom-bracket shell/rear dropouts, qualified uncoated copper-zinc filler and formulated brazing flux. Scope starts at received manufactured tubes and components, includes local cut/trim/miter/fit/alignment and lug brazing, specified braze-ons, actual cleaning/surface preparation, spray-applied metal etch primer and solvent-borne alkyd colour stove-enamel with actual electric baking, conditional clear enamel, final interface/geometry/finish acceptance and independent frame-only dispatch. Actual matched grade/butt profile/socket/joining/finish qualification and released drawings govern; no universal material recipe or Mercian brand specification is mandated.

Exclude complete bicycles and riding/service outputs, frame-and-fork sets, forks/headsets/bottom-bracket cartridges/wheels/brakes/transmission, wheelchair components, motorized/e-bike/motorcycle frames, aluminium/titanium/carbon/stainless frames, suspension/step-through/folding/tandem structures, TIG-welded or lugless fillet-only frames, uncoated intermediate-only outputs, bought-complete-frame finishing-only routes, repair/restoration and upstream tube butting/steelmaking/lug casting. Heat-treated or joining-sensitive grades requiring different qualified filler/thermal practice are outside this cold-worked brass-lug subroute. Customer complete-bike assembly, use/maintenance and end of life excluded. Attributable actual factory inspection/type/sample testing included; foreground alone is not full cradle-to-gate or proof of riding performance/life.

Overlap decision: the current material scan has no independent bicycle-frame method; retained complete-cycle/parts/carriage leaves are scaffolds. A complete bicycle may contain the same frame production steps, but this output is independently accepted finished frame, excludes fork/wheel/brake/drive assembly and needs member butt/trim, socket joining, frame-datum/interface control and frame-only net mass. Reuse shared manufacturing evidence and generic normalization/allocation, not whole-cycle reference or riding-service tests. Scientific review and methodology approval remain pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.bicycle-structural-parts |
| classification_refs | CPC:3.0:49942; narrower; category context, no accepted mapping |
| covered_products | Manufacture of a new standalone finished diamond frame for a nonmotorized bicycle, using identified cold-worked non-stainless chrome-moly steel tube members, supplied steel socket lugs/bottom-bracket shell/rear dropouts, qualified uncoated copper-zinc filler and formulated brazing flux. Scope starts at received manufactured tubes and components, includes local cut/trim/miter/fit/alignment and lug brazing, specified braze-ons, actual cleaning/surface preparation, spray-applied metal etch primer and solvent-borne alkyd colour stove-enamel with actual electric baking, conditional clear enamel, final interface/geometry/finish acceptance and independent frame-only dispatch. Actual matched grade/butt profile/socket/joining/finish qualification and released drawings govern; no universal material recipe or Mercian brand specification is mandated. |
| excluded_products | Exclude complete bicycles and riding/service outputs, frame-and-fork sets, forks/headsets/bottom-bracket cartridges/wheels/brakes/transmission, wheelchair components, motorized/e-bike/motorcycle frames, aluminium/titanium/carbon/stainless frames, suspension/step-through/folding/tandem structures, TIG-welded or lugless fillet-only frames, uncoated intermediate-only outputs, bought-complete-frame finishing-only routes, repair/restoration and upstream tube butting/steelmaking/lug casting. Heat-treated or joining-sensitive grades requiring different qualified filler/thermal practice are outside this cold-worked brass-lug subroute. Customer complete-bike assembly, use/maintenance and end of life excluded. Attributable actual factory inspection/type/sample testing included; foreground alone is not full cradle-to-gate or proof of riding performance/life. |
| representative_product | One finished standalone steel diamond bicycle frame in one declared geometry, specified tube/lug/dropout/bridge/braze-on configuration, accepted coated state. Mercian/Reynolds are process/material examples, no mandatory model or supplier. |
| production_route | Received tube inspection, butt-aware cutting and miter preparation; Lugged frame alignment, brazing and braze-on completion; Surface preparation, metal primer and electric-baked enamel; Frame-only geometry/interface acceptance, weighing and dispatch |
| market_state | New complete finished frame alone at frame maker dispatch; wheels/fork/headset/bottom-bracket cartridge and loose parts/packaging outside M. Permanently retained filler, fittings and dry finish included. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of one declared finished frame-only structural part. |
| How much | 1kg accepted net frame output from actual M kg per complete same-configuration finished frame. An accepted unit is one complete frame, not complete bicycle, frameset, rider load or tube kit. |
| How well | Current released geometry/grade/butt/lug/thermal/finish specification, frame alignment and shell/head/seat/dropout interfaces, actual contract-defined inspection and attributable sample/type testing. No universal rider load or fatigue cycle prescribed. |
| How long or cycle | One manufacturing acceptance and dispatch cycle, not a service life or distance output. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete finished lug-brazed steel diamond bicycle frame |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/drawing revision/frame serial/size; nonmotorized diamond geometry and frame-only delivery; actual grade/heat/seam or seamless supply route/member part/butt profile and trim ends; lugs/shell/dropout material/angles/socket gaps; braze-on and bridge configuration; integral right hanger; qualified filler/flux batch/SDS/joint thermal practice and inspection; actual hearth fuel/energy and extraction; actual blast media/thin-wall compatibility, metal primer/colour/clearcoat formulations/electric bake/masking; complete finished frame net M kg/retained filler/finish and original calibrated weighing/independent stock mass closure; site/period/accepted frame count/rework/type/sample test allocation; current geometry/interface/test contract and upstream/identity gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | cut_power; join_power; finish_power; inspection_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh and multiply by3.6MJ/kWh; no rated power or assumed duty. |
| hearth_energy | hearth_gas | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use contemporaneous measured site supplied fuel calorific value on a stated lower/higher heating-value basis with actual delivered volume/reference conditions and uncertainty. No generic gas density/LHV or2012Jiangsu project conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received identified manufactured frame-member tubing, supplied lugs/shell/dropouts/bridge/fittings and actual filler/flux/coating/utility inputs; local member preparation, brazed frame build, actual finishing, interface acceptance and frame-only dispatch. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:49942; narrower standalone lug-brazed steel diamond frame |
| recursive_input_rule | Purchased tube butting/drawing/heat treatment and lug casting upstream. Bought complete frame cannot also be charged with its tubes/lugs or local joint work; finishing-only outside this route. Whole-cycle wheel/brake/drive/fork assembly is downstream, not frame material. |
| upstream_dataset_requirement | Compatible actual tube grade/profile/supply process, finished lug/shell/dropout parts, exact filler/flux/coating, utility/fuel, transport and treatment datasets with composition/property/state disclosures before extending foreground. |
| disclosure | Site/period and supplier scope, drawing/member/joining/finish/acceptance state, actual in-house versus bought operations, rework/sample-test attribution, missing upstream/support/transport/treatment; no automatic full cradle-to-gate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_tubing | prepare | Record each actual member grade/profile/length/end as one physical stock. Tubing may be supplied by different routes; do not infer seamless supply from butted geometry. At frame maker only actual trims/miter/forms included, not mandrel butting/smelting. | butting-frame-method; joining-frame-method |
| boundary_fittings | join | Exact upper/lower/seat lug, shell, distinct left/right dropout and each bridge/boss content declared. Whole purchased parts pool not a selected exchange; actual other cable guides/eyelets/pins/seat-clamp screws need separate specified rows if not contained. | mercian-frame-method |
| boundary_finish | finish | Include actual received wet primer/colour/clear formulation once including contained solvents; only separately added thinner/cleaner additional input. Retained dry film contributes M; actual solvent release/wet residue outside it. Metallic/candy/powder or gas-oven variants need new specific records, not alternative labels on this selected row. | mercian-frame-method |
| boundary_test | acceptance | Actual frame-only production checks and attributed type/sample tests with fixtures/support demand/rejects included. Fork/rider/running gear used temporarily in a test is support apparatus, not retained frame output; actual burden and reusable support allocation declared. Customer complete-cycle compliance not established by this frame foreground. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Received tube inspection, butt-aware cutting and miter preparation | required | Verify actual member grade/heat/profile and trim allowance; cut/miter/shape/drill and dry-fit to released geometry. Received tube butting is not local frame manufacture. | foreground_manufacturing | 1kg accepted finished frame; conditional exchanges only where actual |
| `join` | Lugged frame alignment, brazing and braze-on completion | required | Fit actual supplied upper/lower/seat lugs, shell and distinct rear dropouts; align/pin/qualify gaps and braze with actual thermal/filler/flux procedure; add specified bridge/bosses and inspect joints/alignment. | foreground_manufacturing | 1kg accepted finished frame; conditional exchanges only where actual |
| `finish` | Surface preparation, metal primer and electric-baked enamel | required | Actual flux removal, compatible conditional blasting, masking/primer/colour enamel/electric baking and conditional clear enamel; verify film/interface cleanliness. Exact chemicals and actual additions per supplier records, no universal duration or recipe. | foreground_manufacturing | 1kg accepted finished frame; conditional exchanges only where actual |
| `acceptance` | Frame-only geometry/interface acceptance, weighing and dispatch | required | Record current frame serial/configuration, datum alignment/dropout spacing/thread-seat/braze/finish checks and actual attributable sample/type tests; independently weigh complete finished frame without fork/running gear. | foreground_manufacturing | 1kg accepted finished frame; conditional exchanges only where actual |

### Process: Received tube inspection, butt-aware cutting and miter preparation (`prepare`)

Verify actual member grade/heat/profile and trim allowance; cut/miter/shape/drill and dry-fit to released geometry. Received tube butting is not local frame manufacture.

#### Inputs

##### Product flows

###### Supplied cold-worked chrome-moly steel bicycle top tube (`top_tube`)

One actual top tube grade/heat/part number/shape/end and wall profile, received kg and issue/return records. Trace butt location and trim allowance before local mitering; different grades/left-right specifications separate. Purchased tube forming/butting is upstream.

- Selected flow: Supplied cold-worked chrome-moly steel bicycle top tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Supplied cold-worked chrome-moly steel bicycle down tube (`down_tube`)

One actual down tube grade/heat/part number/shape/end and wall profile, received kg and issue/return records. Trace butt location and trim allowance before local mitering; different grades/left-right specifications separate. Purchased tube forming/butting is upstream.

- Selected flow: Supplied cold-worked chrome-moly steel bicycle down tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Supplied cold-worked chrome-moly steel bicycle seat tube (`seat_tube`)

One actual seat tube grade/heat/part number/shape/end and wall profile, received kg and issue/return records. Trace butt location and trim allowance before local mitering; different grades/left-right specifications separate. Purchased tube forming/butting is upstream.

- Selected flow: Supplied cold-worked chrome-moly steel bicycle seat tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Supplied cold-worked chrome-moly steel bicycle head tube (`head_tube`)

One actual head tube grade/heat/part number/shape/end and wall profile, received kg and issue/return records. Trace actual constant-wall profile; different grades/left-right specifications separate. Purchased tube forming/butting is upstream.

- Selected flow: Supplied cold-worked chrome-moly steel bicycle head tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Supplied cold-worked chrome-moly steel bicycle chainstay tube (`chainstay`)

One actual chainstay tube grade/heat/part number/shape/end and wall profile, received kg and issue/return records. Trace butt location and trim allowance before local mitering; different grades/left-right specifications separate. Purchased tube forming/butting is upstream.

- Selected flow: Supplied cold-worked chrome-moly steel bicycle chainstay tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Supplied cold-worked chrome-moly steel bicycle seatstay tube (`seatstay`)

One actual seatstay tube grade/heat/part number/shape/end and wall profile, received kg and issue/return records. Trace butt location and trim allowance before local mitering; different grades/left-right specifications separate. Purchased tube forming/butting is upstream.

- Selected flow: Supplied cold-worked chrome-moly steel bicycle seatstay tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Alternating current (`cut_power`)

Actual below1kV cut/miter/shape/drill/filing/fixture preparation demand, not tube-making energy charged locally.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Low-alloy steel scrap (`tube_scrap`)

Actual separately collected clean low-alloy tube offcuts to recycling, measured kg after internal reuse; not mixed brazed/painted frame rejects.

- Selected flow: Low-alloy steel scrap `ff8a3b67-c882-4ecb-9d95-bd7c8002497e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

##### Elementary flows

### Process: Lugged frame alignment, brazing and braze-on completion (`join`)

Fit actual supplied upper/lower/seat lugs, shell and distinct rear dropouts; align/pin/qualify gaps and braze with actual thermal/filler/flux procedure; add specified bridge/bosses and inspect joints/alignment.

#### Inputs

##### Product flows

###### Finished steel upper-head bicycle frame lug (`upper_lug`)

One actual supplied upper-head socket geometry/grade kg, angular fit and capillary-gap qualification; locally filed lug counted as supplied material plus actual work, not raw casting again.

- Selected flow: Finished steel upper-head bicycle frame lug
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Finished steel lower-head bicycle frame lug (`lower_lug`)

One supplied lower-head lug model/angle/interface kg; not interchangeable with upper lug, distinct grade or geometry separately recorded.

- Selected flow: Finished steel lower-head bicycle frame lug
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Finished steel bicycle seat-cluster lug (`seat_lug`)

One actual seat-cluster lug grade/socket/clamp interface kg; declare included seat-clamp hardware and do not add it twice.

- Selected flow: Finished steel bicycle seat-cluster lug
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Finished steel bicycle bottom-bracket shell (`bb_shell`)

One actual supplied shell material/thread/diameter/socket geometry kg. Bottom-bracket bearing/cartridge not part of frame-only output.

- Selected flow: Finished steel bicycle bottom-bracket shell
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Finished steel bicycle left rear dropout (`left_dropout`)

One actual left dropout grade/slot/interface kg; specified rear axle alignment to frame datum; right derailleur-hanger dropout separate.

- Selected flow: Finished steel bicycle left rear dropout
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Finished steel bicycle right rear dropout with integral derailleur hanger (`right_dropout`)

One actual right dropout grade/slot/hanger geometry kg; removable separate hangers outside this integral-hanger subset.

- Selected flow: Finished steel bicycle right rear dropout with integral derailleur hanger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Finished steel bicycle rear brake bridge (`brake_bridge`)

One actual specified supplied bridge geometry kg and frame brake/mudguard interfaces. Whole brake assembly or building bridge not substitute.

- Selected flow: Finished steel bicycle rear brake bridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Finished steel threaded bicycle bottle-mount boss (`bottle_boss`)

Conditional one actual boss thread/grade kg, individually supplied and positioned to drawing. Cable guides/rack eyelets are distinct rows when installed, not a braze-on pool.

- Selected flow: Finished steel threaded bicycle bottle-mount boss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Brass (`brazing_rod`)

One actual supplied uncoated copper-zinc brazing rod alloy/diameter/SDS kg qualified for these actual tubes/lugs. Public brass rod-material identity establishes no filler grade, recipe or temperature. Not silver solder, bronze or copper substituted.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Supplied borate-based bicycle-frame brazing flux powder (`brazing_flux`)

One actual dry formulated flux with identified SDS/chemistry and issue/return kg, supplier-qualified temperature range and residues; no universal borax purity assumed.

- Selected flow: Supplied borate-based bicycle-frame brazing flux powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Site-supplied gaseous natural gas for brazing hearth (`hearth_gas`)

Conditional actual gas-fired hearth only; independently meter delivered fuel energy MJ from actual volume/reference conditions and contemporaneous measured supplier calorific value. Source does not mandate this fuel; electric/other-fuel joins need distinct rows and actual records.

- Selected flow: Site-supplied gaseous natural gas for brazing hearth
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### Alternating current (`join_power`)

Actual below1kV joining support/alignment/fume-extraction energy; thermal fuel separate and actual outsourced supplied lugs upstream.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Particulate matter, particle size unspecified (`brazing_particle_air`)

Only actual post-control immediate unspecified-air brazing/filing particulate sampling, unspecified size; exact Cu/Zn species or size fractions need separate identified atomic records, not this assumed PM quantity.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

###### carbon dioxide (fossil) (`fossil_co2_air`)

Only actual fossil hearth-fuel combustion evidenced by post-control measurement or current site fuel-carbon balance with fossil origin, retained carbon/incomplete combustion and actual exhaust boundary; immediate air unspecified. No borrowed gas emission factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_join.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_join`
- Sources:

### Process: Surface preparation, metal primer and electric-baked enamel (`finish`)

Actual flux removal, compatible conditional blasting, masking/primer/colour enamel/electric baking and conditional clear enamel; verify film/interface cleanliness. Exact chemicals and actual additions per supplier records, no universal duration or recipe.

#### Inputs

##### Product flows

###### Supplied cast-steel shot for bicycle-frame surface preparation (`blast_media`)

Conditional actual one shot grade/size distribution kg of makeup only, compatible thin-wall treatment; circulating shot transfer not fresh input. Alternative grit or sanding abrasive separate.

- Selected flow: Supplied cast-steel shot for bicycle-frame surface preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Supplied solvent-borne metal etch-primer formulation (`etch_primer`)

One actual specific metal etch primer SDS/binder/acid/solvent/colour kg, qualified to substrate/topcoat; not wall/cosmetic primer, no universal phosphoric-acid fraction.

- Selected flow: Supplied solvent-borne metal etch-primer formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Paint (Solvent-based) (`colour_enamel`)

One actual supplied solvent-borne alkyd colour stove-enamel formulation with supplier SDS/bake compatibility, issues/returns/retained dry film. No generic drying-rate or environmental-benefit claim from public comment adopted.

- Selected flow: Paint (Solvent-based) `d8cbeec3-56d9-4b41-a5f6-6a754958182c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Paint (Solvent-based) (`clear_enamel`)

Conditional one actual separately supplied solvent-borne alkyd clear stove-enamel formulation kg; different from colour product with separate supplier/SDS/issue/film records. Contained solvent not also input separately.

- Selected flow: Paint (Solvent-based) `d8cbeec3-56d9-4b41-a5f6-6a754958182c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Tap water (`wash_water`)

Conditional actual purchased municipal makeup product kg for flux removal/preparation. Actual cleaner/flux-contaminated outgoing wastewater separately identified; no water-resource exchange substituted.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Alternating current (`finish_power`)

Actual below1kV shot/clean/spray/extraction/electric oven demand for this actual electric-bake subroute; gas oven/purchased heat must be added separately if actual.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste paint (`paint_residue`)

Actual separated wet solvent-based colour-enamel overspray residue to declared treatment, measured kg and composition. Other primer/clearcoat/filter/cleaner residues separately recorded, not pooled.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Spent steel-shot blasting residue (`spent_shot`)

Only actual spent steel-shot residue after internal recovery, identified oxide/flux/coating contamination and destination kg. Captured dust not air emission.

- Selected flow: Spent steel-shot blasting residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Only actual post-control immediate-air total xylene CAS1330-20-7 species mass where current SDS and release sampling support it; all isomers, not p-xylene only, no presumed xylene constituent or VOC factor.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

### Process: Frame-only geometry/interface acceptance, weighing and dispatch (`acceptance`)

Record current frame serial/configuration, datum alignment/dropout spacing/thread-seat/braze/finish checks and actual attributable sample/type tests; independently weigh complete finished frame without fork/running gear.

#### Inputs

##### Product flows

###### Alternating current (`inspection_power`)

Actual below1kV alignment/interface/finish inspection, attributed sample/type tests and complete-frame calibrated weighing equipment demand. No riding power.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`film`)

Conditional actual noncellular nonadhesive protective film kg outside M; cartons/end protectors/fixtures individually added if present.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete finished lug-brazed steel diamond bicycle frame (`finished_machine`)

1kg complete accepted frame-only output with specified brazed lugs/shell/dropouts/bridges/braze-ons and retained finish; actual net M excludes fork/headset/bottom-bracket cartridge/wheels/rider/packaging.

- Selected flow: Complete finished lug-brazed steel diamond bicycle frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Attribute actual member/part issue-return-stock and measured utility demand to drawing/size/grade/finish-specific work orders and matched accepted frame count. Include actual rework/rejects and sample-test burden. Different frame sizes/configurations not mixed under one mean M without disclosed stratification. |  |
| allocation_shared | shared operations | Separate operations first. If inseparable, document causal actual cutting/joining/fixture occupancy, sprayed area/bake rack occupancy and inspection/test demand. Reconcile totals and assess alternative drivers; fixed frame setup/inspection not automatically proportional to net frame kg. |  |
| allocation_scrap | waste | Separate internal stock/shot reuse, outgoing clean offcuts, brazed/painted rejects, flux/wet-paint residues and genuine co-products. No automatic avoided steel/paint credit or3% assumed scrap factor. Economic allocation only with actual co-product and no causal physical basis, actual price period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | accepted complete output | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | every accepted finished frame | matched manufacturing/acceptance period | actual complete frame weighing station | accepted net mass per unit | calibrated complete frame readings/tare; no fork/running gear/support load/packaging; independent retained-member/filler/finish mass balance |
| cp_prepare | prepare | independent atomic exchanges | foreground_record | drawing/grade/heat/member/butt profile/trim end; received and issued-returned kg; cut/miter geometry; meters; low-alloy offcuts | Record each actual exchange separately with identified supplier issues/returns and independent stock/part kg, calibrated utility meters, actual site supplied fuel calorimetry/reference volume, or post-control species sampling/exhaust/time. Record model/drawing/size/grade/finish configuration, work orders, stock/rework, matched same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacturing/acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier grade/profile/part/SDS contents; calibration/sampling/calorimetry uncertainty; stock/accepted count closure |
| cp_join | join | independent atomic exchanges | foreground_record | lug/shell/left-right dropout/bridge/boss fit-list and supplier contents; actual kg; socket gap/datum/pin; filler/flux/SDS and thermal procedure; current fuel calorimetry/meter; joint/alignment and actual exhaust samples | Record each actual exchange separately with identified supplier issues/returns and independent stock/part kg, calibrated utility meters, actual site supplied fuel calorimetry/reference volume, or post-control species sampling/exhaust/time. Record model/drawing/size/grade/finish configuration, work orders, stock/rework, matched same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacturing/acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier grade/profile/part/SDS contents; calibration/sampling/calorimetry uncertainty; stock/accepted count closure |
| cp_finish | finish | independent atomic exchanges | foreground_record | exact media/cleaner/primer/colour/clear SDS and issue-return-stock/film; actual water/meter/electric bake; species/exhaust/time and distinct waste masses | Record each actual exchange separately with identified supplier issues/returns and independent stock/part kg, calibrated utility meters, actual site supplied fuel calorimetry/reference volume, or post-control species sampling/exhaust/time. Record model/drawing/size/grade/finish configuration, work orders, stock/rework, matched same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacturing/acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier grade/profile/part/SDS contents; calibration/sampling/calorimetry uncertainty; stock/accepted count closure |
| cp_acceptance | acceptance | independent atomic exchanges | foreground_record | serial/drawing/size/complete frame-only inclusion; original geometry/interface/test results and accepted/reject/tested count/period; calibrated net readings/tare and independent finished frame mass balance | Record each actual exchange separately with identified supplier issues/returns and independent stock/part kg, calibrated utility meters, actual site supplied fuel calorimetry/reference volume, or post-control species sampling/exhaust/time. Record model/drawing/size/grade/finish configuration, work orders, stock/rework, matched same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacturing/acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier grade/profile/part/SDS contents; calibration/sampling/calorimetry uncertainty; stock/accepted count closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | top_tube; down_tube; seat_tube; head_tube; chainstay; seatstay; cut_power; tube_scrap; upper_lug; lower_lug; seat_lug; bb_shell; left_dropout; right_dropout; brake_bridge; bottle_boss; brazing_rod; brazing_flux; hearth_gas; join_power; brazing_particle_air; fossil_co2_air; blast_media; etch_primer; colour_enamel; clear_enamel; wash_water; finish_power; paint_residue; spent_shot; xylene_air; inspection_power; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is actual attributed process exchange after measured issues/returns/stock/reclaim/rework divided by matched complete accepted frame count. M is independently measured for the same finished frame-only configuration. Preserve kg or MJ numerator; actual supplied lugs/shell/dropouts/rods kg, with counts supplementary. Count/area/volume conversions need contemporaneous same-part physical mass/profile or actual gas state/calorimetry and uncertainty. No catalogue frame/frame-plus-fork mass, density, tube-kit theoretical mass, rider load, assumed gas LHV or percentage scrap.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | Weigh the complete accepted finished frame with all permanently retained specified fittings, filler and dry coating using a calibrated appropriate-capacity instrument and controlled support/fixture tare. Exclude fork/headset/BB cartridge/wheels/rider/test loads/loose accessories/packaging; no frame-plus-fork catalogue mass. Retain serial/geometry/finish state, original readings/date/instrument/calibration/repeats/uncertainty. Independently reconcile received retained tube/part masses, trim/filing losses, retained filler and cured coating against M. Missing physical originals block dataset use. | original complete-frame net weighing and independent retained mass balance |
| quality_members | prepare; join | Trace each member grade/heat/shape/wall/butt profile/end mark and received supply route. Preserve sufficient actual qualified thick-end joint length after trimming; use supplier profile and released drawing, no universal butt length/wall/density/strength. Head tube, front triangle and distinct left/right stays not a mixed tube set. Tube-maker seamless/welded/mandrel/heat treatment not presumed local. | reynolds-frame-method; joining-frame-method; butting-frame-method; actual member drawings |
| quality_joining | join | Require actual matched tube/lug/shell/dropout geometry, capillary gap, datum/pinning and qualified filler/flux/thermal procedure with traceable temperature/time observations and inspections where required by the released plan. Actual overheating/misalignment/rework recorded. Brass rod identity is not a universal recommendation. Joining-sensitive heat-treated/silver-only grades, TIG wire/flux-cored wire and titanium/stainless not interchangeable. Supplier joining FAQ is grade-specific guidance, not legal certification or numeric factory pass thresholds. | joining-frame-method; mercian-frame-method; current qualified joint procedure/results |
| quality_geometry | join; acceptance | Verify actual frame-datum geometry and alignment, head/seat tube and shell axes, rear dropout parallelism/spacing, integral hanger alignment, specified bridge/brake and braze-on positions. Inspect actual shell/head/seat thread/fit interfaces and remove coating intrusions without assuming fitted headset/BB. Current contractual frame-only test plan/results, sampled configuration/count/period/instruments/fixtures/reject attribution required; no imported rider load, fatigue cycles, riding life or whole-cycle compliance claim. | mercian-frame-method; current frame geometry and inspection/test originals |
| quality_finish | finish | Trace actual metal etch primer, one colour enamel and optional one clear enamel chemistry/SDS/supplier batches and actual compatibility/cure schedule with cold-worked substrate/braze. Record masking, dry film/adhesion/appearance and interface cleanliness under current specifications. Blasting only actual approved media/thin-wall method; no presumed steel shot, universal blast pressure, coating thickness, four-week painting duration, recipe or environmental superiority. Received solvents inside paint counted once; actual additions/species separately. | mercian-frame-method; actual SDS/cure/masking and film records |
| quality_identity | all flows | Actual public property/unit/state retained. Broad bicycle-parts or unfinished/spectacle-frame identity cannot establish exact finished bicycle-frame output. Project-specific2012NGCC gas/density/LHV not frame-maker fuel; flux Volume not powder kg. Brass rod and solvent-based paint qualify one actual formulation/supplied form, not all filler/resin choices. Low-alloy scrap uses actual clean measured offcuts, not3% example. Cast-steel shot/non-ferrous-ore and mixed spent abrasive/non-metal classes remain unresolved, not rewritten. | public flow/property/unit chain and actual supplier qualification |
| quality_release | elementary | Only actual post-control particulate mass with unspecified size/air subcompartment, actual fossil CO2 origin/site carbon balance, or actual total xylene CAS1330-20-7 immediate-air species supported by current chemical/SDS/exhaust observations. No obligatory emissions, total VOC substituted as xylene, NOx guessed as NO2, fuel upstream emission as factory release or captured dust as air. Any actual metal/boron/fluoride/size species and actual wastewater/sludge separately identified with correct medium/property and measurements. | original post-control sampling/exhaust/time and current fuel/SDS balances |
| quality_coverage | dataset | Close full actual member/part/chemical/meter/stock/test inventory. Add actual separate cable guides, eyelets, braze-on bosses/pins/clamp hardware, cleaners/added solvents/masking tape/decals/clearcoat or other finishes, captured dust, contaminated flux/shot/sludge/filters and packaging when present and not contained. Different grades/left-right parts/paint formulations each separate atomic row and protocol. Preserve measured/calculated/estimated/missing/excluded/not-applicable status and uncertainty, disclose upstream stock/component/transport/support/treatment gaps; no pooled parts or claim of complete cradle-to-gate. | complete actual frame BOM, supplier SDS/contents and stock/meter closure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Exactly1kg complete accepted finished frame-only output; reference name equals finished_machine name. Candidate blank UUID only with precise registered gap. Require original cp_mass actual M kg and independent retained tube/part/filler/film closure. Formula/schema pass does not establish physical data or scientific approval. |  |
| validation_basis | inventory | Verify stable lowercase row/rule/protocol links, same-size/grade/finish accepted frame count, actual kg/MJ numerator and normalize_mass. Reject frameset/whole-bike/rider/mixed configuration denominators and catalogue/density/project gas conversions. |  |
| validation_scope | dataset | Verify actual local member preparation and qualified lug-brass joining, declared supplied tube/lug scope, wet electric-baked finish and independent frame-only acceptance/dispatch. Whole bike/fork/suspension/welded/carbon/powered/repair and finishing-only routes require other applicable methodology, not this identity. |  |
| validation_release | elementary | Exact measured species/origin/immediate-air medium and conditional quantity. Technosphere tap water, resource abstraction, actual contaminated wastewater, captured solid residue/treatment and direct air species remain separate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of a new standalone finished diamond frame for a nonmotorized bicycle, using identified cold-worked non-stainless chrome-moly steel tube members, supplied steel socket lugs/bottom-bracket shell/rear dropouts, qualified uncoated copper-zinc filler and formulated brazing flux. Scope starts at received manufactured tubes and components, includes local cut/trim/miter/fit/alignment and lug brazing, specified braze-ons, actual cleaning/surface preparation, spray-applied metal etch primer and solvent-borne alkyd colour stove-enamel with actual electric baking, conditional clear enamel, final interface/geometry/finish acceptance and independent frame-only dispatch. Actual matched grade/butt profile/socket/joining/finish qualification and released drawings govern; no universal material recipe or Mercian brand specification is mandated. |
| excluded_use | Exclude complete bicycles and riding/service outputs, frame-and-fork sets, forks/headsets/bottom-bracket cartridges/wheels/brakes/transmission, wheelchair components, motorized/e-bike/motorcycle frames, aluminium/titanium/carbon/stainless frames, suspension/step-through/folding/tandem structures, TIG-welded or lugless fillet-only frames, uncoated intermediate-only outputs, bought-complete-frame finishing-only routes, repair/restoration and upstream tube butting/steelmaking/lug casting. Heat-treated or joining-sensitive grades requiring different qualified filler/thermal practice are outside this cold-worked brass-lug subroute. Customer complete-bike assembly, use/maintenance and end of life excluded. Attributable actual factory inspection/type/sample testing included; foreground alone is not full cradle-to-gate or proof of riding performance/life. |
| required_metadata | model/drawing revision/frame serial/size; nonmotorized diamond geometry and frame-only delivery; actual grade/heat/seam or seamless supply route/member part/butt profile and trim ends; lugs/shell/dropout material/angles/socket gaps; braze-on and bridge configuration; integral right hanger; qualified filler/flux batch/SDS/joint thermal practice and inspection; actual hearth fuel/energy and extraction; actual blast media/thin-wall compatibility, metal primer/colour/clearcoat formulations/electric bake/masking; complete finished frame net M kg/retained filler/finish and original calibrated weighing/independent stock mass closure; site/period/accepted frame count/rework/type/sample test allocation; current geometry/interface/test contract and upstream/identity gaps |
| required_quality_disclosure | Candidate; scientific review pending. Original frame-only net M/uncertainty/retained mass closure, current tube butt/trim/grade/supplier route and qualified joining/geometry/interfaces/finish, actual counts/site/test period/rework/support allocation, chemical/fuel properties and species measurements, unresolved identities/upstream/transport/treatment coverage. Per-kg frame manufacturing not equal riding/service performance or approved cradle-to-gate. |
| update_trigger | Tube/member/grade/butt/supply, geometry/lugs/thermal/filler/flux/braze-ons/dropout, primer/enamel/cure, site/period/test/accepted state, new identities/evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| mercian-frame-method | handbook | Mercian, Our Craft, undated official HTML, Skilled Traditional Bespoke / Precision Brazing / Final Frame Details / painting / Crafted Checked Complete; unpaginated. https://www.merciancycles.co.uk/our-craft | Illustrative hand lug-brazing/alignment, specified fittings, preparation/etch-primer/baked finish and final frame interface inspection. No compulsory brand/grade, filler/fuel/alkyd formulation/electric oven, paint duration, life or environmental comparison; actual current supplier/thermal/finish records required. |
| reynolds-frame-method | handbook | Reynolds Technology, 525 Cold-Worked Chrome-Moly Steel, undated official supplier page, material/use sections; unpaginated. https://www.reynoldstechnology.biz/materials/steel/s-525/ | Cold-worked alloy/butted member and cutting/mitering context only; not proof of the illustrated Mercian grade, current stock availability, numeric density/UTS or service-life/fatigue equivalence. Actual member profile/grade supplied records govern. |
| joining-frame-method | handbook | Reynolds Technology, Welding and Joining supplier FAQ, undated, joining methods/butt-profile trimming/filler supply; unpaginated. https://www.reynoldstechnology.biz/faqs-on-reynolds-steel-tubing/welding-and-joining/ | Grade-dependent joining compatibility and butt-aware trim; rejects assuming one filler/thermal method for every steel. Historical531/753 examples limited to stated historical/grade context. No ER70 TIG wire as brazing rod, universal trim length or current conformity inferred. |
| butting-frame-method | handbook | Reynolds Technology, How is butted tubing made?, undated official supplier description, supply routes and Mandrel Press; unpaginated. https://www.reynoldstechnology.biz/materials/how-butted-tubing-is-made/ | Explains supplied profile generation and seamless-versus-welded alternatives upstream; requires actual supply-route/butt tracing. No billet dimensions/heat temperature/density or assumption that these tube-making processes occur at frame site. |
