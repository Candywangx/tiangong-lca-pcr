---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.sailing-vessel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured composite auxiliary-diesel sailing vessels

## 1. Scope and Applicability

Manufacture of one configured new non-inflatable cruising monohull sailboat with wet-laid monolithic glass/polyester hull and inner grid, injected glass/polyester/balsa sandwich deck, fixed cast-iron fin keel, classic aluminium rig, woven-polyester mainsail/headsail and mechanical shaft-drive marine auxiliary diesel. Jeanneau historical model documents support this architecture, not universal factory recipes, quantities or actual boat weight. Other hull/core/resin routes, motor-only craft, racing dinghies, inflatable boats, motorless configurations, incomplete hulls, repair/refit and independent parts require separate applicability decisions. Existing sail-textile and propeller methodologies concern supplied parts; they do not cover complete-boat composite moulding, rig/outfit integration and acceptance mass. Navigation/sailing services, passenger transport, trips, propulsion in service, lifetime, maintenance and disposal are excluded. Candidate methodology awaits scientific review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.sailing-vessel |
| classification_refs | CPC 3.0 49410; narrower candidate boundary; no accepted mapping asserted |
| covered_products | Configured complete composite cruising auxiliary-diesel sailing monohull |
| excluded_products | Other hull/resin/core/propulsion routes, inflatable/motor-only/motorless/incomplete craft, repair and loose parts |
| representative_product | Declared complete boat architecture exemplified by historical SUN ODYSSEY349 standard classic rig/deep fixed keel; no catalogue values adopted |
| production_route | Wet-laid hull/grid; injected balsa sandwich deck; joining/keel/shaft/outfit; rig/sails; factory acceptance |
| market_state | New complete accepted configured sailboat at declared yard gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of one complete declared composite auxiliary-diesel sailing vessel |
| How much | 1 kg accepted net complete unit; one accepted complete unit has physically verified M kg |
| How well | Meet actual controlled design/BOM and acceptance plan for laminate/cure/bond integrity, watertightness, keel/rudder/shaft/rig function, permanent electrical/plumbing/safety outfit and mass state; retain actual criteria/results without invented tolerances or regulatory approval |
| How long or cycle | One manufacturing delivery; no nautical-mile, passenger or lifetime unit |
| reference_flow_link | `finished_vessel` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sailboats (except inflatable), with or without auxiliary motor `8afadbed-02c2-49dd-8389-f9c4bc8d108f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Hull/boat number; drawing/BOM revision; actual resin/gelcoat/initiator/glass/core and joint specifications; mould/cure/trim route; hull/deck/keel/rig/sails/engine/interior/electrical/plumbing/safety configuration; supplier inclusions/working fluids; actual acceptance checks; site/period; weighing method/calibration/tare/raw readings/dry state; signed configuration corrections and positive net M kg; tank-content and delivery-support exclusions; upstream/transport/receiver coverage |

Declare all qualifiers in dataset metadata or equivalent notes. The official Chinese public label is retained verbatim; actual propulsion is the declared marine diesel supported by the bilingual public comment and broad class, without interpreting the display label as an electric-only requirement. One kg of manufacture does not establish equal sailing function.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mass_reference` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `engine_count` | marine_engine | Number of items | Item(s) | Retain public item count; separately measure supplied installed engine kg and included prefilled-fluid scope for physical M, with actual count ledger. No assumed kg/item or rewrite to Mass. |
| `electric_energy` | electricity rows | Net calorific value | MJ | Meter actual stage energy; 1 kWh =3.6 MJ. Normalize MJ/unit by M; equipment rating is not a measurement. |

## 5. System Boundary

The foreground begins at actual raw formulation/reinforcement/core and supplied-component receipts at the declared yard and ends at complete configured factory acceptance. Hull and deck moulding, local joining/finishing, rig/propulsion/permanent outfitting, rework, actual factory launch/checks and receiver-bound wastes are included. Tooling service and actual mould maintenance are attributed by documented causal use; do not assume a mould lifetime or universally require replacement per boat. Supplied finished keel/coating, mast, engine, sails and internals are measured at their actual supply gate; do not repeat supplier manufacturing or contained fluids. Purchased finished hull/deck would change the declared local-moulding route and needs a documented separate applicability model, not simultaneous stock plus finished-hull inputs. Optional cleaning chemistry/curing initiator, local coatings, heating, compressed air, ancillary plant and dock/sea trials enter only if actual route requires/performs them, each as an explicit atomic card. No default packaging; actual shipping cradle/cover requires its own exchange and exclusion from M. Raw-material extraction, upstream manufacture, inbound transport and waste treatment are represented only by matched separately linked datasets; absent links are gaps and prohibit a full cradle-to-gate claim.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual uncured formulations/dry glass and balsa plus supplied finished components at yard receipts |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | Configured non-inflatable composite sailboat manufacture; narrower CPC49410 |
| recursive_input_rule | Link actual matching supplier production/delivery scope; keep composite formulations and purchased assemblies distinct from their included constituents |
| upstream_dataset_requirement | Match resin/diluent/core/fibre state, supplier geography/period, component completeness/property, transport and waste receiver before broader boundary claims |
| disclosure | Manufacturing foreground only; disclose BOM, supplier-scope, measurement and link gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hull` | Wet-laid hull and inner-grid moulding | required | Actual mould preparation, gelcoat application, glass/resin lay-up, qualified cure, demoulding and trimming; no universal mat schedule | foreground | declared same accepted boat; q_item / M |
| `deck` | Injected balsa-sandwich deck moulding | required | Actual mould/gelcoat, dry reinforcement and core lay-up, resin injection, cure and trimming; pumps/rework measured | foreground | declared same accepted boat; q_item / M |
| `assembly` | Hull-deck joining keel propulsion and permanent outfitting | required | Actual joint plan, keel/rudder/shaft installation and complete declared permanent interior/electrical/plumbing/safety outfit | foreground | declared same accepted boat; q_item / M |
| `rigging` | Mast rigging sail and deck-equipment integration | required | Install declared mast/boom, standing/running rig, separate sails and sailing winches; purchased complete supply boundaries preserved | foreground | declared same accepted boat; q_item / M |
| `acceptance` | Factory launch commissioning and complete-boat acceptance | required | Actual performed water-tight/function/rig/engine checks, launch/yard trial and independent net-M reconciliation; sea trial conditional if performed | final_product | finished_vessel; 1 kg |

### Process: Wet-laid hull and inner-grid moulding (`hull`)

#### Inputs

##### Product flows

###### Uncured unsaturated polyester laminating resin formulation (`polyester_hull`)

One actual supplier-certified raw unsaturated-polyester laminating formulation, including its supplied reactive diluent; retain SDS, solids and constituent scope. Weigh net issues/returns and cured retention. Public raw-resin identity is conditional on certified unsaturated-polyester scope; do not duplicate included styrene, promoter or additives as fresh receipts. Other formulations need separate cards.

- Selected flow: Unsaturated polyester resin `6af057bf-05f5-446b-b69c-e66c5b8e66e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Dry E-glass chopped-strand reinforcement mat (`glass_mat_hull`)

Only if the actual controlled lay-up for this stage uses this single dry mat with certified fibre, sizing/binder and delivery moisture. Weigh issue/return and offcut; purchased cured composite is not reinforcement. Other roving or fabric schedules need distinct physical cards and actual quantity. No prescribed glass/resin fraction.

- Selected flow: Dry E-glass chopped-strand reinforcement mat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One uncured pigmented polyester marine gelcoat formulation (`gelcoat_hull`)

Actual locally applied single gelcoat specified by the moulding plan; weigh net mixed issues/returns and cured retained layer. Verify product/SDS/colour and included resin/diluent/pigment; do not count its constituents again. Manufacturer gelcoat architecture does not establish a universal chemistry, thickness or dose.

- Selected flow: One uncured pigmented polyester marine gelcoat formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One methyl-ethyl-ketone-peroxide curing-initiator formulation (`initiator_hull`)

Conditional on the actual qualified resin/gelcoat curing plan using this single supplier formulation. Weigh net formulation and retain peroxide concentration/phlegmatiser/compatibility and lot. Included pre-catalyst is excluded; peroxide-trimer elementary emissions do not identify supplied curing product. No universal initiator ratio or curing temperature.

- Selected flow: One methyl-ethyl-ketone-peroxide curing-initiator formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One paraffin-wax mould-release formulation (`release_agent_hull`)

Only when actual mould preparation uses this single certified formulation; weigh make-up/return and retained residue, with supplier solvent/purity scope. Other release chemistries require distinct cards. Meter tooling maintenance separately and allocate by actual use, not default boat count.

- Selected flow: One paraffin-wax mould-release formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage grid electricity (`electricity_hull`)

Meter actual attributable stage electricity including idle/rework and resin-injection pumps where used. Public identity requires grid-average user-side AC below1kV; other generation/voltage needs separate card. Installed equipment ratings are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Pure liquid acetone cleaning solvent (`acetone_cleaner`)

Only if actual mould/laminating-tool cleaning uses this single certified pure solvent; weigh net fresh receipt/recovery and separate contained spent solvent and measured airborne acetone. Recovered internal solvent is not fresh input. Mixtures need distinct composition cards. No cleaning solvent is mandatory.

- Selected flow: Pure liquid acetone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

#### Outputs

##### Waste flows

###### Segregated cured glass-polyester hull-trimming offcut (`grp_offcut`)

Only actual separately collected single waste exported across receiver gate. Weigh on recorded moisture basis with resin/glass/balsa/solvent/water contamination and treatment receipt. Internal reuse/recovery is separate; no implicit environmental discharge or avoided-product credit.

- Selected flow: Segregated cured glass-polyester hull-trimming offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Contained uncured unsaturated-polyester resin waste (`uncured_resin`)

Only actual separately collected single waste exported across receiver gate. Weigh on recorded moisture basis with resin/glass/balsa/solvent/water contamination and treatment receipt. Internal reuse/recovery is separate; no implicit environmental discharge or avoided-product credit.

- Selected flow: Contained uncured unsaturated-polyester resin waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Contained spent acetone cleaning solution (`spent_acetone`)

Only actual separately collected single waste exported across receiver gate. Weigh on recorded moisture basis with resin/glass/balsa/solvent/water contamination and treatment receipt. Internal reuse/recovery is separate; no implicit environmental discharge or avoided-product credit.

- Selected flow: Contained spent acetone cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Captured dry cured glass-polyester trimming dust (`captured_dust`)

Only actual separately collected single waste exported across receiver gate. Weigh on recorded moisture basis with resin/glass/balsa/solvent/water contamination and treatment receipt. Internal reuse/recovery is separate; no implicit environmental discharge or avoided-product credit.

- Selected flow: Captured dry cured glass-polyester trimming dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Measured immediate airborne styrene (`styrene_air`)

Conditional on actual species-specific measured post-control release during this attributable manufacturing stage. Public identity is immediate air, submedium unspecified; dust particle size unspecified, CO2 fossil origin verified separately. Integrate matched concentration/exhaust-volume conditions, remove measured background and retain uncertainty. No necessary release, recipe-derived loss or legal limit used as quantity; captured waste is separate. Deck emissions require their own attributed stage cards if observed.

- Selected flow: styrene `08a91e70-3ddc-11dd-9910-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Measured immediate airborne acetone (`acetone_air`)

Conditional on actual species-specific measured post-control release during this attributable manufacturing stage. Public identity is immediate air, submedium unspecified; dust particle size unspecified, CO2 fossil origin verified separately. Integrate matched concentration/exhaust-volume conditions, remove measured background and retain uncertainty. No necessary release, recipe-derived loss or legal limit used as quantity; captured waste is separate. Deck emissions require their own attributed stage cards if observed.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Measured airborne particulate of unspecified size (`air_dust`)

Conditional on actual species-specific measured post-control release during this attributable manufacturing stage. Public identity is immediate air, submedium unspecified; dust particle size unspecified, CO2 fossil origin verified separately. Integrate matched concentration/exhaust-volume conditions, remove measured background and retain uncertainty. No necessary release, recipe-derived loss or legal limit used as quantity; captured waste is separate. Deck emissions require their own attributed stage cards if observed.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Injected balsa-sandwich deck moulding (`deck`)

#### Inputs

##### Product flows

###### Uncured unsaturated polyester laminating resin formulation (`polyester_deck`)

One actual supplier-certified raw unsaturated-polyester laminating formulation, including its supplied reactive diluent; retain SDS, solids and constituent scope. Weigh net issues/returns and cured retention. Public raw-resin identity is conditional on certified unsaturated-polyester scope; do not duplicate included styrene, promoter or additives as fresh receipts. Other formulations need separate cards.

- Selected flow: Unsaturated polyester resin `6af057bf-05f5-446b-b69c-e66c5b8e66e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Dry E-glass chopped-strand reinforcement mat (`glass_mat_deck`)

Only if the actual controlled lay-up for this stage uses this single dry mat with certified fibre, sizing/binder and delivery moisture. Weigh issue/return and offcut; purchased cured composite is not reinforcement. Other roving or fabric schedules need distinct physical cards and actual quantity. No prescribed glass/resin fraction.

- Selected flow: Dry E-glass chopped-strand reinforcement mat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One uncured pigmented polyester marine gelcoat formulation (`gelcoat_deck`)

Actual locally applied single gelcoat specified by the moulding plan; weigh net mixed issues/returns and cured retained layer. Verify product/SDS/colour and included resin/diluent/pigment; do not count its constituents again. Manufacturer gelcoat architecture does not establish a universal chemistry, thickness or dose.

- Selected flow: One uncured pigmented polyester marine gelcoat formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One methyl-ethyl-ketone-peroxide curing-initiator formulation (`initiator_deck`)

Conditional on the actual qualified resin/gelcoat curing plan using this single supplier formulation. Weigh net formulation and retain peroxide concentration/phlegmatiser/compatibility and lot. Included pre-catalyst is excluded; peroxide-trimer elementary emissions do not identify supplied curing product. No universal initiator ratio or curing temperature.

- Selected flow: One methyl-ethyl-ketone-peroxide curing-initiator formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One paraffin-wax mould-release formulation (`release_agent_deck`)

Only when actual mould preparation uses this single certified formulation; weigh make-up/return and retained residue, with supplier solvent/purity scope. Other release chemistries require distinct cards. Meter tooling maintenance separately and allocate by actual use, not default boat count.

- Selected flow: One paraffin-wax mould-release formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Dry end-grain balsa block core panel (`balsa_core`)

One actual certified balsa block core, on delivered moisture basis, issued to the injected sandwich deck; weigh issues/returns and trims, identify density grade and included carrier/bonding. Lumber-core plywood, foam and whole cured deck are not this core. No default density or absorption.

- Selected flow: Dry end-grain balsa block core panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage grid electricity (`electricity_deck`)

Meter actual attributable stage electricity including idle/rework and resin-injection pumps where used. Public identity requires grid-average user-side AC below1kV; other generation/voltage needs separate card. Installed equipment ratings are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Segregated cured glass-polyester-balsa deck-trimming offcut (`deck_trim`)

Only actual separately collected single waste exported across receiver gate. Weigh on recorded moisture basis with resin/glass/balsa/solvent/water contamination and treatment receipt. Internal reuse/recovery is separate; no implicit environmental discharge or avoided-product credit.

- Selected flow: Segregated cured glass-polyester-balsa deck-trimming offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Hull-deck joining keel propulsion and permanent outfitting (`assembly`)

#### Inputs

##### Product flows

###### One marine plywood structural floor panel (`plywood_floor`)

Actual controlled structural plywood panel in hull inner grid/floor integration, identified by species, bond class, thickness, moisture and supplied finish; weigh net installed panel. Local cutting/finishing requires separate actual atomic stock/waste/chemical exchanges. No universal plywood species or mass.

- Selected flow: One marine plywood structural floor panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One mixed structural polyester bonding-paste formulation (`bonding_compound`)

Only if actual hull/deck/grid joint plan uses this single supplied compound. Weigh net mixed issues/returns and retained joint material; identify cured acceptance and supplier included filler/catalyst. Mechanical joining and other chemistries need their own cards; no adhesive is made mandatory by the example architecture.

- Selected flow: One mixed structural polyester bonding-paste formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One finished epoxy-barrier-coated cast-iron fin keel (`keel`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished epoxy-barrier-coated cast-iron fin keel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished glass-polyester sailboat rudder (`rudder`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished glass-polyester sailboat rudder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished hexagonal-head steel keel bolt (`steel_bolt`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One complete marine compression-ignition auxiliary engine (`marine_engine`)

One actual marine piston diesel auxiliary engine for mechanical shaft propulsion. Count supplied installed engines preserving public Number of items; separately measure actual supplied engine kg and included heat exchanger, gearbox and prefilled fluids for boat mass reconciliation. Class43110 excludes road/aircraft and is appropriate only to verified marine duty. No catalogue engine kg/item.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_count.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_count`
- Sources:

###### One finished marine shaft-drive reduction gearbox (`reduction_gear`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished marine shaft-drive reduction gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished stainless-steel propeller shaft (`propeller_shaft`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished stainless-steel propeller shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished fixed three-blade ship propeller (`propeller`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: Ships' propellers and blades therefor `8f01d846-f812-4209-a4c1-9f2daa531e79`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished lead-acid engine-starting battery (`starter_battery`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished lead-acid engine-starting battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One PVC-insulated copper low-voltage boat cable (`electrical_cable`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One PVC-insulated copper low-voltage boat cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished manual marine bilge-water pump (`bilge_pump`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished manual marine bilge-water pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One empty finished rotomoulded polyethylene fuel tank (`fuel_tank`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One empty finished rotomoulded polyethylene fuel tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One empty finished rotomoulded polyethylene fresh-water tank (`water_tank`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One empty finished rotomoulded polyethylene fresh-water tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One empty finished rotomoulded polyethylene sewage holding tank (`holding_tank`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One empty finished rotomoulded polyethylene sewage holding tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One complete sealed glazed hull portlight (`portlight`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One complete sealed glazed hull portlight
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One complete manual-pump marine toilet (`marine_toilet`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One complete manual-pump marine toilet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage grid electricity (`electricity_assembly`)

Meter actual attributable stage electricity including idle/rework and resin-injection pumps where used. Public identity requires grid-average user-side AC below1kV; other generation/voltage needs separate card. Installed equipment ratings are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

### Process: Mast rigging sail and deck-equipment integration (`rigging`)

#### Inputs

##### Product flows

###### One complete aluminium classic sailing mast (`mast`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One complete aluminium classic sailing mast
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished aluminium sailing boom (`boom`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished aluminium sailing boom
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished stainless-steel standing-rigging stay (`standing_rig`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished stainless-steel standing-rigging stay
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished polyester mainsheet rope (`running_line`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: One finished polyester mainsheet rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One complete horizontally cut woven-polyester mainsail (`mainsail`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: Tarpaulins, sails for boats etc., awnings, sunblinds, tents and camping goods (including pneumatic mattresses) `176ee965-23e5-444c-8b6c-9457334cae4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One complete horizontally cut woven-polyester headsail (`headsail`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: Tarpaulins, sails for boats etc., awnings, sunblinds, tents and camping goods (including pneumatic mattresses) `176ee965-23e5-444c-8b6c-9457334cae4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One finished self-tailing sailing winch (`sail_winch`)

One actual declared supplied design/material/size/completeness, measured net at receipt/installation. Preserve exact finished configuration, supplier included internals/finish/fluids and drawings. A complete supplied assembly replaces its included stock and supplier operations; local fabrication expands its own atomic inventory. For the sail cards weigh each finished woven-polyester sail separately, excluding covers; no catalogue sail area-to-kg conversion.

- Selected flow: Pulley tackle and hoists other than skip hoists, winches and capstans, jacks `7984041f-134f-4b73-89b9-30d9be48684f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage grid electricity (`electricity_rigging`)

Meter actual attributable stage electricity including idle/rework and resin-injection pumps where used. Public identity requires grid-average user-side AC below1kV; other generation/voltage needs separate card. Installed equipment ratings are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

### Process: Factory launch commissioning and complete-boat acceptance (`acceptance`)

#### Inputs

##### Product flows

###### User-side low-voltage grid electricity (`electricity_acceptance`)

Meter actual attributable stage electricity including idle/rework and resin-injection pumps where used. Public identity requires grid-average user-side AC below1kV; other generation/voltage needs separate card. Installed equipment ratings are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Supplied drinking-quality test and cleaning water (`cleaning_water`)

Actual supplied drinking-quality tap-water make-up for factory commissioning/cleaning. Weigh or meter with actual density/temperature, retain recovered/residual tank water outside net M. Not a direct natural resource abstraction, not wastewater and not use-phase freshwater supply.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Consumed pure fossil diesel auxiliary-engine test fuel (`test_diesel`)

Only actual consumed petroleum-derived diesel at attributable manufacturing acceptance tests, with origin certificate and tank balance; measure supplied, consumed, returned and delivery residual separately. No biodiesel mixture, nominal full tank or brochure hourly factor. Residual service fuel is outside net M and separately disclosed as ancillary delivery supply.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete composite auxiliary-diesel sailing vessel (`finished_vessel`)

One complete declared non-inflatable cruising monohull with wet-laid glass/polyester hull, injected glass/polyester/balsa deck, fixed cast-iron fin keel, aluminium mast/boom, stainless standing rig, woven-polyester mainsail and headsail, shaft-drive marine diesel and declared permanent accommodation/electrical/plumbing/safety outfit. Record positive physically verified net M kg through controlled acceptance records and independent weighing provenance/configuration reconciliation. Public broad finished-boat identity is narrowed by this single declared configuration, not a pooled product category.

- Selected flow: Sailboats (except inflatable), with or without auxiliary motor `8afadbed-02c2-49dd-8389-f9c4bc8d108f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Contained spent aqueous boat-cleaning solution (`spent_water`)

Only actual separately collected single waste exported across receiver gate. Weigh on recorded moisture basis with resin/glass/balsa/solvent/water contamination and treatment receipt. Internal reuse/recovery is separate; no implicit environmental discharge or avoided-product credit.

- Selected flow: Contained spent aqueous boat-cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Measured immediate fossil carbon-dioxide air release (`air_co2`)

Conditional on actual species-specific measured post-control release during this attributable manufacturing stage. Public identity is immediate air, submedium unspecified; dust particle size unspecified, CO2 fossil origin verified separately. Integrate matched concentration/exhaust-volume conditions, remove measured background and retain uncertainty. No necessary release, recipe-derived loss or legal limit used as quantity; captured waste is separate. Deck emissions require their own attributed stage cards if observed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; mass_reference; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_order` | shared operations | Separate model/order and direct stage meters before allocation. For shared resin injection, cure/ventilation, mould maintenance and commissioning use recorded occupied tool time, monitored energy or demonstrated causal capacity, retaining rejected boats/rework and idle burden. Mass alone does not explain different laminate/rig/test complexity. Document actual driver totals/denominators and sensitivity; no universal coefficient. |  |
| `recovery_export` | single wastes | Track internal resin/solvent/material recovery without export double count. Separately measured offcuts, uncured resin and contaminated cleaning solution go to their actual receiver. Treat actual valuable co-products by documented subdivision/causal relation, with explicit alternate-model sensitivity if physical causality is unavailable; do not silently apply market-price allocation or recycling credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_vessel | controlled physical acceptance mass | configuration; accepted net mass M; boat/configuration ID; M kg; actual original weighing method and readings; calibration/tare/dry state; installed and unstepped parts; tank contents; signed net correction ledger; accepted counts | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted boat/configuration | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | accepted net mass per unit | current signed raw physical weighing and delivery-state correction evidence; survey_provenance and net_configuration |
| cp_configuration | all processes | declared configuration | as-built configuration and route record | hull/BOM/drawing revisions; laminate/core/cure/joint plan; supplied scope/charges; rig/sails/engine/permanent fit; make-or-buy; actual tests; delivery state | Record actual controlled BOM, stage route and complete accepted configuration. Trace each component and chemical lot to supplier included scope and actual acceptance criteria/results; retain deviations/rework. Do not infer complete factory inventory from historical specifications. | kg | each order/design change/acceptance | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | qualifier records accompany actual exchange amounts; no nominal value substitution | controlled design/BOM; SDS/lot certificates; supply and test gate evidence |
| cp_stock | hull; deck; assembly; acceptance | single formulation or dry stock | net issued material balance | one formulation/grade/fibre/core; lot; kg issue/return/stock; supplier included constituents; moisture/solids; actual retained/trim/waste; water density/temperature if metered | Weigh each actual material/formulation net issue separately; reconcile beginning/ending stock, returns, installed retention, collected waste and measured emissions. Supplied UPR/gelcoat/initiator each has its own included-constituent scope; purchased mixtures cannot be counted again as fresh constituent mass. For water meter actual volume and measured density at recorded temperature to obtain kg. No catalogue density or loss ratio. | kg | each issue/return/lot/stage | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | attributable net material kg / accepted units of the same configuration | calibrated scales/meters; lot/SDS; stock and constituent balance |
| cp_parts | assembly; rigging | single supplied component | measured supplied installed part | one supplied design/material/finish; kg and traceable count; included internals/working fluids; prefill; installation return; supplier boundary | Weigh each actual supplied installed component or use verified supplier raw measured mass of the identical configuration, preserving finish, internals and included charges. Weigh each finished mainsail and headsail independently, not sail area times catalogue cloth mass. Separate supplied assemblies from local material/fabrication and their excluded packaging. Trace additional retained working-fluid fills as distinct actual atomic cards; no supplier-precharge duplication. | kg | each actual component receipt/installation | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | attributable installed component kg / accepted units of the same configuration | physical measurement; supplier included-scope certificate; installation ledger |
| cp_count | assembly | marine_engine | actual installed engine count | marine duty/configuration; supplied installed Item(s); separately measured engine kg; included gearbox/heat exchanger/prefill; lot; installation ledger | Count actual supplied installed marine engines of the same design. Separately weigh or verify raw measured supplied engine kg and included precharge/completeness for physical boat mass; retain count as public exchange property. No default engine kg/item. | Item(s) | each supplied/installed engine | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | attributable installed engine count / accepted units of the same configuration | marine-duty/supplier-scope certificate; engine kg/count ledger |
| cp_energy | hull; deck; assembly; rigging; acceptance | electricity | actual stage electricity | site/order/stage; kWh/MJ; interval/calibration; pump/cure/ventilation/idle/rework attribution | Meter attributable actual stage electric energy; convert1 kWh =3.6 MJ and retain actual causal shared drivers. No power-rating or nominal cycle-time consumption. | MJ | each metered order interval | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | attributable stage energy / accepted units of the same configuration | meter calibration; bill and actual stage driver |
| cp_fuel | acceptance | test_diesel | consumed trial-fuel balance | one certified fossil grade; actual fill/consumed/return/residual kg; density/temperature if metered; actual test scope/time | Weigh or meter with actual density/temperature and reconcile consumed test fuel separately from delivered residual service fuel and net-M exclusions. Record actual manufacturing acceptance intervals; no use-voyage consumption or brochure factor. | kg | each actually performed acceptance trial | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | attributable consumed test fuel kg / accepted units of the same configuration | fuel origin; calibrated meter/scale; actual test/tank ledger |
| cp_waste | hull; deck; acceptance | single exported waste | segregated receiver-gate waste | single waste; composition/moisture; kg export/recovery; receiver/treatment gate | Weigh cured laminate offcuts, uncured resin, captured dust, spent acetone and spent aqueous solution as separate actual exports with contamination and receiver records. Internal recovery is not export; contained solutions are not natural-water emissions. | kg | each waste export/order | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | attributable exported waste kg / accepted units of the same configuration | scale; composition/moisture; receiver receipt |
| cp_emission | hull; acceptance | single actual air species | species-specific post-control monitoring | chemical/CAS/origin; immediate air/submedium; dust size; actual concentration/exhaust volume/reference conditions/interval; control/background/uncertainty | Measure species-specific actual post-control concentration and exhaust volume on identical reference conditions, integrate attributable intervals and correct measured background. Verify styrene/acetone chemical identity and fossil CO2 origin independently. Selected air submedium and dust size are unspecified; specific measurements require separately matched identities. No mandatory release or total-VOC-to-styrene equivalence. | kg | each representative actual emitting interval | same declared manufacturing and acceptance period; disclose gaps | declared yard and controlled manufacturing acceptance trials | attributable measured species kg / accepted units of the same configuration | monitoring/flow calibration; speciation/medium/origin evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `survey_provenance` | cp_mass; finished_vessel | Require current controlled original physical weighing/weight-inspection records for this accepted boat, including calibrated adequate-capacity crane/gantry load-cell readings or another actually demonstrated traceable method, measured empty lifting-sling/support tare and zero, dry state/wind/stability conditions, repeated observations and uncertainty, date/operator/witness and signatures. WS2017 H.3.1 explains physical calibration, tare and keelboat lifting principles; do not import racing hull-weight definitions or minimums. Acceptance records must cite these actual originals; the collection interface alone does not establish M. No whole-boat platform scale is presumed. No actual boat measurements are supplied by this PCR. | ws-weighing-2017; cp_mass |
| `net_configuration` | cp_mass; cp_parts; cp_count | Reconcile raw weighed assembly to exactly one complete accepted BOM: include hull/deck/keel, mast/boom/standing and running rig, both declared finished sails, engine and permanent accommodation/electrical/plumbing/safety outfit plus retained working lubricant/coolant. If mast/sails are delivered detached, independently measure the same identified accepted parts and sign the add/remove ledger; do not estimate missing rig mass. Exclude lifting gear/cradle/packaging, people/cargo/loose non-BOM gear, tank service fuel/freshwater/sewage, test ballast and unintended bilge water, each with actual measured correction. Reconcile constituent retained masses and independent supplied engine kg/prefill against net M; avoid double count. Displacement, deadweight, tonnage, catalogue estimate and full-tank weight are not substitute M. | cp_configuration; cp_mass; cp_stock; cp_parts; cp_count |
| `quality_coverage` | complete inventory | Current controlled lay-up/core/cure/joint and as-built full BOM determine actual exchanges, not this illustrative list. Expand every actual additional roving/fabric, solvent, promoter, joint, local coating, working fluid, cabin fixture, exhaust/cooling/steering/navigation/safety unit, mould service, packaging, transport or receiving treatment as a separate specific card. Match supplier inclusions, actual stock/retention/export/emission balances and upstream links; report uncertainty and gaps. Missing original mass/route/BOM records prohibit claims of an observed physically complete dataset. No universal yield, dose, density, sail mass, engine mass, fluid fill, mould life or release factor. | cp_configuration; cp_stock; cp_parts; cp_waste; cp_emission |
| `quality_source_limits` | external architecture and weighing | Jeanneau IndexA manual p.13 and model-year2014 specification unnumbered pp.1–3 (updatedNovember2013, non-contractual) establish a historical composite/rig/shaft-outfit example only. Manufacturer originals are retained from an owner-community mirror. WS manual January2017 physical pp.135–136/printedH47–H48 supplies historical measurement principles, not current regulatory obligations or complete-unit PCR definitions. No catalogue mass/area, numeric acceptance tolerance or operating fraction adopted. The method requires current independent physical records and scientific review. | jeanneau-owner-manual; jeanneau-spec-2014; ws-weighing-2017 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Check declared complete configuration, positive actual net M kg, cp_mass originals and independent survey_provenance/net_configuration. Preserve each public property and normalize its unit amount by M. Separate Item(s) engine count from supplied measured engine kg; retained precharge appears once. |  |
| `validation_route` | all processes | Require actual mould/lay-up/injection/cure/joint/trim records, resin/gelcoat/core/fibre identities and component supply gates; reconcile inputs, retention, exports and measured releases. Purchased assemblies do not duplicate constituent production. Review unlisted cabin/electrical/plumbing/navigation/safety and actual trial exchanges before completeness claims. |  |
| `validation_identity` | all rows | Verify substance/type/reference property/unit group plus actual route/state/concentration/medium and official bilingual names. Wafer-route acetone is not cleaning solvent; elementary acetone/styrene is not purchased product; waste solutions are not tap/resource water. Marine class43110 engine is not road class43123. Immediate air is not long-term/soil/indoor; unspecified dust is not a measured size fraction. Unresolved identities remain explicit row gaps. |  |
| `validation_claims` | dataset claims | A mechanical PCR check does not establish scientific approval, observed factory completeness, current class/legal conformity, sailing performance or lifetime. Missing actual mass survey, qualifier, BOM or linked upstream/receiver evidence must be disclosed before any complete dataset claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured composite auxiliary-diesel sailing-vessel manufacturing foreground; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete configured boat manufacture scaled by actual net M, with matched supplier/transport/receiver links separately disclosed |
| excluded_use | Sailing trips/passenger/voyage transport/use fuel/maintenance/life/disposal, other hull/propulsion routes or methodology approval |
| required_metadata | Reference qualifiers; current complete as-built BOM/route/chemical lots/supply gates; calibration/raw weights/tare/dry/delivery/add-remove records and signed M; engine count with independent supplied kg/precharge; sail inclusion; actual acceptance/fuel residual/water exclusions; site/period/allocation and matched links |
| required_quality_disclosure | Identity/BOM/route/mass/raw-measurement/link gaps; source vintage/mirror/applicability; rework/recovery/exports; uncertainty and allocation sensitivity |
| update_trigger | Hull/core/resin/cure/joint/finish route; keel/rig/sails/engine/permanent fit or supplier completeness; mass inspection/delivery/tank state; yard/period/test plan or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jeanneau-owner-manual | handbook | Jeanneau / SPBI S.A., SUN ODYSSEY349 Owner's Manual158918, IndexA, historical model manual; printed/physical p.13. Manufacturer original retained from owner-community mirror: https://jeanneau349.com/index_htm_files/Jeanneau%20SO349%20-%20Owners%20Manual.pdf | Historical wet-laid monolithic glass/polyester hull/grid and injected glass/polyester/balsa deck architecture. No dimensions, engine maximum mass, recipe or actual M adopted. |
| jeanneau-spec-2014 | handbook | Jeanneau, SUN ODYSSEY349 Model year2014 specification, updatedNovember2013, non-contractual, unnumbered physical pp.1–3. Manufacturer original retained from owner-community mirror: https://www.jeanneau349.com/index_htm_files/Jeanneau%20SO%20349%20Specs.pdf | Historical fixed coated cast-iron keel/classic aluminium mast/stainless standing rig/woven Dacron sails, marine shaft engine and permanent outfit example. Alternative sail/keel/option routes are not pooled. No catalogue kg/area/performance, certification or factory quantities adopted. |
| ws-weighing-2017 | handbook | World Sailing, International Measurers' Manual, VersionJanuary2017, H.3/H.3.1, printedH47–H48, physical PDFpp.135–136. https://www.sailing.org/tools/documents/IMManual2017-%5B21963%5D.pdf | Historical physical calibration, dry/wind/tare/zero and crane/gantry keelboat weighing principles; source hull-weight definitions and racing minimums are excluded. Does not supply actual complete-boat M, legal mandate, numerical tolerance or current equipment record. |
