---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-ethylene-in-primary-forms
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Virgin high-pressure LDPE homopolymer granulate, bulk supplied

## 1. Scope and Applicability

This method addresses the material need to produce primary virgin LDPE resin from monomer with high-pressure radical reaction, incomplete single-pass conversion, recovery/purge and pellet conditioning. It reuses the retained semantic PCR directory rather than creating another classification-derived record. It excludes purchased-resin conversion. Each actual grade/route is selected and evidenced before a dataset is represented; the four source-supported initiation/reactor variants below are distinct alternatives, not one averaged technology. `ec-polymers-bref-2007` `lyb-lupotech-2025`

The real commercial grade Lupolen 2420K establishes a non-additivated pellet supply form, with bulk containers among the documented delivery options. Its TDS does not identify the polymerisation reactor, initiator recipe or manufacturing geography; a producer must supply those actual qualifiers. Its typical MFR/density are not mandatory limits, density conversions or substitutes for site COA. Do not infer homopolymer chemistry merely from a broad name: verify monomers and grade declarations. This method does not prescribe Trigonox B, heptane or propanal for that SKU. `lyb-lupolen-2420k-2026`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-ethylene-in-primary-forms |
| classification_refs | CPC 3.0 34710 is broader than this LDPE-only method; no accepted mapping is established here. |
| covered_products | Virgin non-additivated branched LDPE ethylene homopolymer, newly polymerised and supplied as accepted bulk granulate; each actual grade and reactor route remains separate. |
| excluded_products | HDPE; LLDPE; EVA and acrylic copolymers; UHMWPE; recycled resin; bio-attributed or mass-balance claims without separate evidence; filled, coloured, crosslinked or additive/masterbatch compounds; purchased-resin conversion; pipe, film, fibre and finished articles; bagged delivery. |
| representative_product | Non-additivated virgin LDPE pellets; Lupolen 2420K is a real commercial grade example, not a fixed plant recipe or reactor assignment. A dataset declares its own supplier grade and acceptance specification. `lyb-lupolen-2420k-2026` |
| production_route | High-pressure free-radical polymerisation of delivered ethylene: declare tubular oxygen-only, tubular peroxide/oxygen, tubular peroxide-only, or peroxide-initiated stirred autoclave. Preserve reactor zoning, chain-transfer chemistry, carrier, actual conversions, recycle/purge and finishing. Do not average routes merely because the reference UUID is broad. `ec-polymers-bref-2007` `lyb-lupotech-2025` |
| market_state | Degassed, dried, accepted solid granulate at the bulk-loading factory gate; net resin mass excludes tanker/container tare and transport packaging. No downstream film service is represented. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply qualified virgin LDPE resin for subsequent conversion. |
| How much | 1 kg net accepted supplied granulate of one declared grade, route and state. |
| How well | Grade-specific COA acceptance for LDPE identity, melt-flow test basis, density test basis, branching/grade designation, additive absence, moisture and residual volatiles; do not replace contracted limits with typical brochure values. |
| How long or cycle | One complete matched production and supply reporting period; no service lifetime. |
| reference_flow_link | bulk_supplied_ldpe |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site and period; virgin ethylene source and impurity specification; LDPE homopolymer grade and non-additivated state; reactor and initiation route; actual initiator/carrier/modifier identities; acceptance and test basis; net dry/degassed bulk-granulate state; moisture and residual species; Q and stock/burden carry; utility and treatment gates |

Required qualifiers must be declared in dataset metadata or equivalent traceable fields. Native reference is generic LDPE granulate: no grade, CAS, route, location or quantity is inferred. Mass is the only native reference property with coefficient 1; it is not density.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference mass and terminal inventory are 1 kg net accepted supplied LDPE granulate; tare/packaging excluded, declared moisture and residual volatiles retained in species ledger. |
| `reporting_basis` | all inventory rows |  |  | Collect complete raw-period numerators. native_conversion and matched_period_ledger precede normalize_period, the sole division owner; cards and protocol aggregation refer to that same result per reference flow. No double normalisation. |
| `formulation_species` | p_primary | Mass | kg | Whole purchased formulations are physical input mass. Active assay, water, carrier and impurities are component subledgers; internally mixed recipes use separately purchased raw ingredients, not both ingredients and a second purchased blend. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh ethylene delivered to the resin plant, with source, purity/impurity certificate, pressure, temperature and delivery mode declared; purchased chemicals and utilities at their actual supply gates. |
| starting_condition_role | Primary resin manufacture from monomer; foreground gate-to-gate plus linked upstream burdens for cradle-to-gate use. |
| product_classification_scope | Only the specified virgin LDPE granulate subset of CPC 3.0 34710; classification does not establish grade or methodology equivalence. |
| recursive_input_rule | Internally recovered ethylene, internal pellets and returned same-line rework retain physical transfer IDs and carried burdens; they are not new external procurement. Purchased same-category resin is a separate upstream input, never evidence of primary polymerisation; a purchased-resin-only conversion lies outside scope. |
| upstream_dataset_requirement | Link actual ethylene route/source and each externally acquired formulation, ingredient, carrier, oil, utility and waste-treatment service to compatible upstream datasets; disclose missing providers without inventing recipes or quantities. |
| disclosure | Declare site geography/time, grade, reactor and initiation route, all process steps, supply form, inter-site transfers, utility generation, heat export and waste/air/water treatment scope. The selected LDPE native flow has no CAS, route, grade, comment or supply geography; these are foreground qualifiers, not implied native facts. |

| route_id | Reactor/initiation | Required distinct coverage |
| --- | --- | --- |
| t_oxygen | Tubular, oxygen/air initiation | Actual air composition, compression, heat transfer, recycle/purge; do not insert an absent peroxide. |
| t_peroxide | Tubular, peroxide initiation | Every actual peroxide/formulation, injection zone, carrier, modifier and cooling/heat recovery. |
| t_combined | Tubular, peroxide and oxygen/air initiation | Both actual initiation supplies, each recorded once with component ledgers and route-specific conversion. |
| a_peroxide | Stirred autoclave, peroxide initiation | Actual peroxide/carrier, agitation, feed/zone cooling and downstream separation; no tubular oxygen-only substitution. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `primary_chain` | Include fresh-feed receipt and qualification, actual purification if present, initiator storage/dilution/dosing, primary and hyper-compression, the selected reactor and temperature zones, cooling, HP/LP separation, recycle compression, oil/wax separation, purification purge, melt extrusion, underwater pelletising, drying, silo degassing, quality acceptance, bulk loading, cleaning and attributable on-site environmental treatment. Record each actual purchased catalyst, solvent, moderator and auxiliary separately; the listed LDPE branches do not use a Ziegler/Phillips catalyst. `ec-polymers-bref-2007` `lyb-lupotech-2025`  `ec-polymers-bref-2007`; `lyb-lupotech-2025` | `ec-polymers-bref-2007`; `lyb-lupotech-2025` |
| `actual_atomic_extension` | Each inventory card denotes one exchange at its actual physical supply/discharge gate. Conditional cards are included only when documented; demonstrated absence is not_applicable, not an invented zero. Add one fully specified card per additional actual peroxide, formulation, carrier, modifier, catalyst, refrigerant, fuel, purge constituent, waste or emitted molecule. No broad flow UUID permits replacement of a hard CAS, grade, medium or route. Whole purchased formulations cross the boundary once; their assayed species and carrier water are subledgers, not duplicate purchases. On-site dilution instead records separately acquired ingredients and actual energy/losses. `nouryon-trigonox-b-2025`  `nouryon-trigonox-b-2025` | `nouryon-trigonox-b-2025` |
| `environment_gates` | At each recovery/purge destination distinguish internal return, exported feedstock, external waste-treatment transfer and final environmental discharge. Keep each molecular constituent in the raw species ledger. Captured gas oxidised on site is an internal transfer; count actual fuel/air/energy and post-treatment species, not both captured gas and its combustion products as emissions. Off-site wastewater is one measured physical waste stream with a constituent subledger; do not also emit its constituents locally. Record every actual final waterborne species separately when on-site discharge is included. `ec-polymers-bref-2007`  `ec-polymers-bref-2007` | `ec-polymers-bref-2007` |

## 6. Process Inventory Structure

Every card amount and protocol aggregation below describes the same final reporting result from normalize_period. Its calculation dependency applies to all inventory rows under section 8, including internal transfers. The finite direct-reference basis fields do not perform any arithmetic; collection_method preserves the raw period numerator. All conversions, carry/stock attribution and the one division belong to the section 8 rules.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_primary | Integrated primary LDPE manufacture | required | One declared high-pressure route and grade | Receipt/preparation, compression, polymerisation, separation/recycle/purge, extrusion/pelletising, degassing/QC and actual on-site utilities/treatment | primary_granulate |
| p_bulk_gate | Bulk acceptance and loading gate | required | Same declared grade/route/state; separate physical loading and acceptance boundary | Internal transfer and stock custody, actual gate burdens and new accepted bulk supply | bulk_supplied_ldpe |

The primary process is an integrated foreground unit, not a claim that all operations use one meter. cp_feed, cp_energy, cp_production, cp_recovery, cp_environment and cp_water retain operation/stream ownership and internal species/utility ledgers. High/low-pressure recycle, purified returns and captured gas are actual internal transfers and must reconcile; omitting separate procurement cards for them does not remove their energy, losses or chemistry. Conditional named example cards are not an exhaustive recipe. Add every actual distinct exchange before reporting; missing species/amounts remain explicit.

### Process: Primary LDPE manufacture (`p_primary`)

#### Inputs

##### Product flows

###### Fresh monomer (`fresh_ethylene`)

Record fresh supplied ethylene separately from recycled circulation; assay ethylene and each impurity. No universal purity or upstream route is implied. The screened refinery-grade identity is not used as a generic source.

- Selected flow: Polymerisation-grade ethylene
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-polymers-bref-2007`

###### Commercial DTBP supply (`dtbp_supply`)

Conditional when actually purchased for either peroxide route. Count the entire delivered commercial product once, including measured non-active fraction; assayed DTBP CAS110-05-4, active oxygen and impurities are separate subledgers. Do not assume the minimum specification is the batch assay.

- Selected flow: Di-tert-butyl peroxide, commercial Trigonox B
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `nouryon-trigonox-b-2025`

###### Separately purchased peroxide carrier (`heptane_makeup`)

Only separately acquired n-heptane CAS142-82-5 for the actual dilution recipe; do not duplicate heptane already included in a purchased peroxide solution. Native name says production mix, at plant; route and geography are unspecified. The patent is a laboratory example, not a recipe requirement.

- Selected flow: Heptane `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `arkema-wo2025133548`

###### Chain-transfer agent (`propanal_modifier`)

CAS123-38-6, conditional on actual separate supply and recipe; record assay, carrier and reaction/incorporation fate. The patent example does not prescribe this modifier for all grades or for Lupolen2420K.

- Selected flow: Propanal
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `arkema-wo2025133548`

###### Oxygen initiation air (`initiation_air`)

Only actual tubular oxygen/air initiation; specify dry/wet standard conditions and measured oxygen composition. Meter the supplied air once; its oxygen/nitrogen/water are constituent subledgers. Do not enter purchased oxygen simultaneously unless it is a distinct real supply.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-polymers-bref-2007`

###### Compressor lubricant makeup (`compressor_oil`)

Actual lubricant formulation, supplier and makeup/loss/retained oil; no proxy assumption that oil is ethylene or polymer. Split any distinct synthetic oil or additive supply as its own row.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-polymers-bref-2007`; `lyb-lupotech-2025`

###### Primary plant purchased electricity (`primary_electricity`)

Actual voltage, geography, grid/provider and period for compression, reactor agitation, cooling, recycle, extrusion, drying and environmental equipment; exclude separately owned gate meters. Screened CN grid identity cannot silently represent another location.

- Selected flow: Medium-voltage alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-polymers-bref-2007`

###### Purchased steam (`steam_import`)

Actual imported steam at specified pressure, temperature, enthalpy and condensate-return boundary. Keep steam mass/water subledger independently. Do not also purchase the fuel used by its external supplier.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-polymers-bref-2007`

###### On-site combustion fuel (`natural_gas`)

Conditional on actual on-site boiler/oxidiser use. Retain integrated dry/wet gas volume, composition, pressure and temperature, measured heating basis and actual combustion species. No further multiplication by duration for integrated volume. Other actual fuels require separate rows.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-polymers-bref-2007`

###### Treated process-water makeup (`water_makeup`)

Actual incoming treated water for cooling and underwater pelletising, washing and utility makeup. Native flow specifies treated industrial water but no site, treatment route or quality; verify those locally. Internal recirculation is not fresh withdrawal. Separate steam/condensate and all other actual water sources by gate.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ec-polymers-bref-2007`

###### Purchased purge nitrogen (`nitrogen_purge`)

Conditional on actual purging/inerting; native flow gives no CAS, route, grade or geography. Verify gaseous supply, purity and actual purge destination. Do not transplant CN or GLO labels from other nitrogen candidates.

- Selected flow: nitrogen `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-polymers-bref-2007`

###### Silo degassing air supply (`degassing_air`)

Actual air supplied for pellet degassing/conveying, separately metered from initiation. Declare gas conditions and carrier energy boundary; if generated on site record atmospheric intake and actual compressor electricity without a second purchased-air burden.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-polymers-bref-2007`

##### Elementary flows

###### On-site combustion atmospheric air (`combustion_air`)

Only the actual atmospheric intake for included on-site combustion; measured/engineered oxygen, nitrogen, humidity and inert composition in subledger. Keep separate from purchased initiation air and silo air.

- Selected flow: Air
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

#### Outputs

##### Product flows

###### Accepted internal granulate transfer (`primary_granulate`)

Actual qualified dry/degassed LDPE granulate transferred to the bulk gate; retain transfer/lot IDs, residual monomer and carried upstream burdens. This is an internal intermediate, not the terminal reference, even though its native granulate UUID is the same.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_production.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_production`
- Sources: `ec-polymers-bref-2007`; `lyb-lupotech-2025`

###### Separately sold off-grade granulate (`offgrade_granulate`)

Only actual separately sold LDPE off-grade granulate; record its true grade/function, price/allocation and destination. Broad native LDPE identity does not qualify it as accepted declared-grade output. Waste granulate instead uses the waste row; internal rework is not an extra sale.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_production.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_production`
- Sources: `ec-polymers-bref-2007`

###### Recovered monomer exported for feedstock (`recovered_ethylene_export`)

Only actual feedstock export beyond the foreground boundary to a cracker/purifier; record ethylene and each impurity, quality and destination. Internal HP/LP recycle stays in the loop ledger and is neither a purchase nor an exported credit.

- Selected flow: Recovered ethylene
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery`
- Sources: `ec-polymers-bref-2007`

###### Recovered solvent exported (`recovered_heptane_export`)

Conditional on actual recovered n-heptane export meeting a declared reuse specification. Native production-mix, at-plant identity does not establish recovered purity or provider; disclose this compatibility debt and verify before linking a background provider. Internal return remains internal.

- Selected flow: Heptane `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery`
- Sources: `arkema-wo2025133548`

###### Actually saleable polyethylene wax (`wax_sale`)

Actual separated oligomeric wax sold with composition, oil content, quality and allocation; mutually exclusive with the waste-wax destination for the same mass.

- Selected flow: Polyethylene wax
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery`
- Sources: `ec-polymers-bref-2007`

###### Actually exported recovered steam (`steam_export`)

Only metered externally useful recovered steam with pressure/temperature and condensate boundary. Internal recovered steam is an internal energy ledger, not an additional export. Include water mass and stated allocation.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-polymers-bref-2007`; `lyb-lupotech-2025`

##### Waste flows

###### Separated waste wax (`waste_wax`)

Actual discarded oligomeric wax, with entrained oil and solvent composition, treatment and destination; exclude any mass already sold.

- Selected flow: Polyethylene wax residue
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Spent compressor oil (`waste_oil`)

Actual drained/lost oil sent to external treatment; reconcile new oil, retained oil, wax-associated oil and oily effluent without double counting.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Discarded resin (`discarded_pellets`)

Actual discarded granulate, separate from sold off-grade and internal returns; trace failed and transition-grade batches and their burdens.

- Selected flow: Waste LDPE granulate
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Wastewater sent off site (`wastewater_transfer`)

One actual external liquid waste stream, with water, oil, polymer fines and every identified dissolved species in a non-additive constituent ledger. Retain flow, concentration, sampling and receiving treatment; no additional local elementary emission for those same constituents.

- Selected flow: Polymerisation-plant wastewater
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

##### Elementary flows

###### Residual ethylene to air (`ethylene_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Ethylene
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Carrier heptane to air (`heptane_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: n-Heptane
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `arkema-wo2025133548`

###### Modifier propanal to air (`propanal_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Propanal
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `arkema-wo2025133548`

###### Initiator-derived acetone to air (`acetone_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Acetone
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `nouryon-trigonox-b-2025`

###### Actual methane to air (`methane_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Methane
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `nouryon-trigonox-b-2025`

###### Initiator-derived tert-butanol to air (`tert_butanol_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: tert-Butanol
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `nouryon-trigonox-b-2025`

###### Polymer particles to air (`polymer_dust_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Polyethylene particulate matter
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### On-site fossil carbon dioxide (`fossil_co2_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Incomplete-combustion carbon monoxide (`co_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Combustion nitric oxide (`no_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Nitrogen monoxide
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Combustion nitrogen dioxide (`no2_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Fuel-sulfur dioxide (`so2_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Nitrogen leaving the actual gas balance (`nitrogen_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Nitrogen
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Unreacted oxygen leaving the actual gas balance (`oxygen_air`)

Conditional on this actual substance reaching air after recovery/abatement; retain molecular identity, source point, compartment, measured raw-period mass and control efficiency evidence. Sample all actual routine, start/stop, leak and emergency releases; no generic VOC-to-species split or inferred zero.

- Selected flow: Oxygen
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### Water vapour to air (`water_vapour_air`)

Reconcile actual evaporated cooling/pellet water, feed humidity and combustion water in the water ledger; no water is inferred from ethylene addition polymerisation or a closure residual.

- Selected flow: Water vapour
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_environment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ec-polymers-bref-2007`

###### On-site treated water discharge (`treated_water_out`)

Conditional on actual on-site final surface-water discharge, with receiving medium and measured water fraction; separately identify every actual dissolved substance and suspended material in additional atomic rows. COD remains an indicator, not a molecular emission or water-reaction factor. Mutually exclusive with external waste transfer for the same water.

- Selected flow: Water, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ec-polymers-bref-2007`

### Process: Bulk supply gate (`p_bulk_gate`)

#### Inputs

##### Product flows

###### Physical internal granulate receipt (`internal_granulate_receipt`)

Exactly match primary_granulate lot/transfer and carried burden. Retain receipts, returns, opening/closing silo stocks and actual loading loss; remove paired internal transfers only when aggregating the whole foreground.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_gate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`
- Sources: `ec-polymers-bref-2007`; `lyb-lupolen-2420k-2026`

###### Bulk-gate electricity (`gate_electricity`)

Actual separately owned conveying/loading and gate-cleaning meter; site voltage, provider and geography required. Exclude primary_electricity meter coverage and any customer transport.

- Selected flow: Medium-voltage alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_gate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`
- Sources: `ec-polymers-bref-2007`

#### Outputs

##### Product flows

###### Terminal accepted bulk supplied LDPE (`bulk_supplied_ldpe`)

Unique terminal reference: new positive accepted supply of the declared grade/route/state; calibrated net loading weight excludes tare, returns, rework, off-grade and duplicate lots. Residual monomer/moisture remain declared in the supplied product species ledger.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`
- Sources: `lyb-lupolen-2420k-2026`

##### Waste flows

###### Collected loading spillage (`loading_waste`)

Only actually discarded captured spillage; recovered same-line material is a separately tracked internal return, not this waste or accepted supply.

- Selected flow: Waste LDPE granulate
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_gate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`
- Sources: `ec-polymers-bref-2007`

##### Elementary flows

###### Uncaptured loading dust (`loading_dust_air`)

Actual uncollected dust to air at loading after capture; distinguish collected spillage and captured dust sent to waste from final emissions.

- Selected flow: Polyethylene particulate matter
- Flow property / unit: Mass / kg
- Amount rule: Reported foreground amount on the declared reference-flow basis; cp_gate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`
- Sources: `ec-polymers-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `direct_attribution` | First segregate by site, reactor route and accepted resin grade; directly attribute feed, utilities and treatment using matched meters and batch/campaign records. Shared burdens need measured physical drivers and a stated allocation rationale and sensitivity. Do not infer equal utility consumption or blend routes from a common generic flow identity. `ec-polymers-bref-2007`  `ec-polymers-bref-2007` | `ec-polymers-bref-2007`; `jrc-ilcd-allocation-2010` |
| `secondary_outputs` | Wax, off-grade resin and actually exported steam are separately quantified outputs, never extra accepted reference output. Avoid allocation where subdivision is possible. If a sold output requires allocation, record actual quality/function and quantities, then identify and apply supported determining physical causal relationships to each exchange, including virtual subdivision where possible. Only remaining burdens that cannot be assigned this way may use documented market values for actual co-functions at the same process-exit condition; explain why physical assignment is unavailable, document matched-period quantities/prices, and report sensitivity. Waste is not silently promoted to coproduct. Recycle is not an avoided virgin purchase credit. Heat recovered and used internally reduces measured import only; no second export credit. `ec-polymers-bref-2007` `lyb-lupotech-2025`  `ec-polymers-bref-2007`; `lyb-lupotech-2025` | `ec-polymers-bref-2007`; `lyb-lupotech-2025`; `jrc-ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed` | p_primary | Individual fresh chemical, formulation and air supply | delivery and stock ledger | lot ID; material/formulation/CAS; supplier; assay and component/carrier fractions; receipt and return masses; tank openings/closings; dosing; gas conditions; impurities; each actual initiator/modifier identity | Owner: primary plant material custodian. Retain raw delivery, calibrated scale/tank and dosing records for the entire period, including failed and transition runs; keep externally purchased formulations and assayed components separate. Record gas volume or rate with its original unit/time basis. Do not divide by output here. | Raw kg; m3 with stated conditions; kWh; MJ; concentrations in original laboratory units, by record type | Each receipt, run, meter interval, analysis and stock boundary | Complete matched reporting period including failed/zero-output operations and opening/closing WIP | Declared site and this protocol process owner; same grade/route/state; retain submeter/stream boundaries | per 1 kg reference flow | supplier certificates; calibration; component assay; opening/closing reconciliation; recipe and source route evidence |
| `cp_energy` | p_primary | Each primary utility and fuel | meter and utility balance | meter ID and operation owner; interval readings; actual utility grade; voltage; pressure/temperature; integrated gas volume or flow rate and duration; gas composition; heating basis; steam enthalpy and condensate; internal recovery; export; downtime | Owner: primary plant energy engineer. Preserve raw meter differences and fuel records, including failed/zero-output operations, maintenance, recovery and pollution control. Distinguish purchased utilities from on-site generation; no raw-period output division. An integrated volume is already accumulated; rate records retain their measured duration. | Raw kg; m3 with stated conditions; kWh; MJ; concentrations in original laboratory units, by record type | Each receipt, run, meter interval, analysis and stock boundary | Complete matched reporting period including failed/zero-output operations and opening/closing WIP | Declared site and this protocol process owner; same grade/route/state; retain submeter/stream boundaries | per 1 kg reference flow | calibrations; supplier/geography; energy allocation meter diagram; enthalpy/heat-value evidence; import/export receipts |
| `cp_production` | p_primary | Internal and off-grade LDPE production | batch and stock genealogy | run ID; reactor and initiation route; grade; recipe; start/end; accepted internal output; off-grade; failed/zero-output runs; returned/reworked lot IDs; opening/closing WIP and silo mass; species fractions; incoming and outgoing carried burden vectors | Owner: production supervisor. Preserve original run, QC, weighing and inventory records for every included run; identify both physical stock mass and inherited burden by lot. No presumption that polymerisation feed equals accepted output, and no division by product quantity. | Raw kg; m3 with stated conditions; kWh; MJ; concentrations in original laboratory units, by record type | Each receipt, run, meter interval, analysis and stock boundary | Complete matched reporting period including failed/zero-output operations and opening/closing WIP | Declared site and this protocol process owner; same grade/route/state; retain submeter/stream boundaries | per 1 kg reference flow | reactor logs; COA; moisture/residual-monomer tests; WIP and rework reconciliation; failed-batch burden retention |
| `cp_recovery` | p_primary | Each recovered species and purge destination | recycle, purge and destination ledger | loop/stream ID; route; gross circulation; fresh makeup; purge/export; wax and oil separation; species mass/composition including ethylene and every actual impurity; retained gas/liquid/polymer inventory; source/destination; sale or waste | Owner: recovery engineer. Retain raw flowmeters, actual gas/liquid analyses, oil/wax weighings and destination receipts. Record internal transfers without external purchase credits and distinguish true purification/abatement species changes. Preserve unknowns explicitly; do not divide by output. | Raw kg; m3 with stated conditions; kWh; MJ; concentrations in original laboratory units, by record type | Each receipt, run, meter interval, analysis and stock boundary | Complete matched reporting period including failed/zero-output operations and opening/closing WIP | Declared site and this protocol process owner; same grade/route/state; retain submeter/stream boundaries | per 1 kg reference flow | stream diagram; GC and sampling; tank calibration; purifier/cracker transfer receipts; actual sale specification |
| `cp_environment` | p_primary | Every waste and air substance | source-resolved emission and waste record | source ID; molecular/CAS identity; compartment; raw concentration and flow or mass; dry/wet and standard conditions; timestamps; uptime/downtime/emergency; capture/treatment efficiency; destination; molecular inventory; carbon source; uncertainty and detection limit | Owner: site environmental engineer. Preserve original species-resolved monitoring, sampling, leak/emergency logs, waste weigh tickets and treatment records for the full period. Keep pre-treatment capture and final discharge distinct, including failed/zero-output runs; never infer a molecular split from total VOC/COD or divide records by output. | Raw kg; m3 with stated conditions; kWh; MJ; concentrations in original laboratory units, by record type | Each receipt, run, meter interval, analysis and stock boundary | Complete matched reporting period including failed/zero-output operations and opening/closing WIP | Declared site and this protocol process owner; same grade/route/state; retain submeter/stream boundaries | per 1 kg reference flow | sampling plan; laboratory species analysis; validated raw emission method; LDAR; waste receiver; balances and uncertainties |
| `cp_water` | p_primary | Physical water and waterborne species | water and speciation ledger | each intake; recirculation; steam/condensate; feed moisture; evaporation; wastewater; actual final waterborne species; phase water; opening/closing stocks; independently supported water formation/consumption; concentration and integrated volume | Owner: site water-balance engineer. Keep original water meters, analyses, steam balances and moisture tests. Separate physical/elemental closure from supported chemical species and phase changes; no residual-derived reaction water. Raw period quantities remain unnormalised. | Raw kg; m3 with stated conditions; kWh; MJ; concentrations in original laboratory units, by record type | Each receipt, run, meter interval, analysis and stock boundary | Complete matched reporting period including failed/zero-output operations and opening/closing WIP | Declared site and this protocol process owner; same grade/route/state; retain submeter/stream boundaries | per 1 kg reference flow | water-meter calibration; species analysis; receiving-water identity; independent reaction evidence; uncertainty |
| `cp_gate` | p_bulk_gate | Unique accepted bulk supply and gate burdens | loading, acceptance and stock genealogy | transfer and lot IDs; grade/route/state; net accepted supplied mass; gross/tare; COA; receipt/return/rework; opening/closing silo stocks; loading electricity; spillage/dust; inherited burden vector; period start/end | Owner: bulk-gate quality and dispatch custodian. Preserve raw calibrated weighbridge/loading and gate energy records; reconcile lot-level acceptance and returns once, retain non-output losses and carried WIP burdens. Identify new positive acceptance of this exact grade/route/state; do not divide any exchange by output in collection. | Raw kg; m3 with stated conditions; kWh; MJ; concentrations in original laboratory units, by record type | Each receipt, run, meter interval, analysis and stock boundary | Complete matched reporting period including failed/zero-output operations and opening/closing WIP | Declared site and this protocol process owner; same grade/route/state; retain submeter/stream boundaries | per 1 kg reference flow | weighbridge calibration; signed COA and release; lot genealogy; no duplicate acceptance; gate meter boundary |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `native_conversion` | all raw inventory records | Before reporting normalisation, convert each raw numerator to its declared card unit using traceable native units: t to kg and kWh to MJ only as appropriate; a rate is integrated over measured duration, while integrated volume is not multiplied by time again. Convert volume to mass only with actual temperature/pressure/composition and an independently valid density or gas relation. No default resin/solvent density, heating value or secondary property coefficient. | raw_records; unit_evidence; cp_feed; cp_energy; cp_environment; cp_water; cp_gate | converted_raw_period_amounts |  |
| `matched_period_ledger` | all raw inventory records | Preserve the complete chosen-period burden vector A_i by site/grade/route/state, including all failed and zero-output operation and actual treatment burdens. Reconcile opening WIP/rework inherited burdens into the completed lots and carry closing WIP burdens forward once; no discarded operation may be omitted, and no inherited vector may be charged twice. Match transfers and reverse only genuine paired internal transfers for whole-foreground aggregation. Keep physical stock mass and burden carry ledgers separate, with explicit allocation of each burden to supplied, retained, off-grade or waste lots. This rule does not divide by Q. | converted_raw_period_amounts; cp_production; cp_recovery; cp_gate | matched_A_i; stock_and_carry_reconciliation |  |
| `accepted_supply` | bulk_supplied_ldpe | Q is the sum of unique new positive accepted net supplied kg of this declared grade/route/state in the matched period, reconciled to gross minus tare, quality release, returns, rework and opening/closing finished stock. Intermediate transfer, sold off-grade, losses and repeated acceptance do not increase Q. No report normalisation exists when Q is zero. | cp_gate; cp_production; acceptance_and_stock_records | Q | `lyb-lupolen-2420k-2026` |
| `normalize_period` | all inventory rows | Sole reporting-normalisation owner: q_i = matched_A_i / Q, for common positive Q after native_conversion and matched_period_ledger. Each card and protocol aggregation describes this same reported result per 1 kg reference flow; neither performs a second division. The terminal output is 1 kg. Keep raw numerator, conversion, carry/allocation and common Q traceable. | matched_A_i; Q | reported_inventory_per_1_kg |  |
| `species_and_elements` | p_primary; p_bulk_gate | Reconcile physical mass and each applicable element (C, H, O, N, S and formulation-specific elements) from complete inputs plus opening stock to outputs plus closing stock. Independently track actual polymer, residual ethylene, every impurity/modifier/carrier/initiator, oil, wax and decomposition product in all gas/liquid/solid phases and inventories. Distinguish single-pass conversion, recycle recovery, fresh-feed utilisation and accepted yield; measure each needed relation rather than assuming 100%. DTBP may form acetone, methane and tert-butanol, but the source supplies no universal split. Species unknowns remain unknown and require investigation, not residual-fitting. | cp_feed; cp_production; cp_recovery; cp_environment; cp_gate | physical_element_and_species_reconciliation | `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` |
| `independent_water` | p_primary; p_bulk_gate | Keep a distinct water ledger for supply/carrier/feed moisture, steam/condensate, evaporation, final effluent, retained/free water and stocks. Ethylene addition to the polyethylene repeat chain does not itself produce condensation water. Any water from actual side reaction, peroxide chemistry, fuel oxidation or purification requires independent molecular/pathway evidence and measured inputs; phase changes do not create water. Do not solve an unknown reaction-water term and another unknown outlet from the same closure residual; COD and carbon closure cannot supply either term. | cp_water; cp_feed; cp_energy; cp_environment | water_reconciliation_and_unresolved_terms | `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `grade_and_route` | reference and all lots | Record real grade and monomer identity, reactor/initiator/carrier chemistry, non-additivated state, net delivery form and test conditions. The same native LDPE UUID is not grade equivalence; suppliers must demonstrate acceptance and route independently. | supplier COA; actual production logs; grade specification; reference qualifiers |
| `complete_period` | all inventory rows | Use a complete common period across manufacturing and dispatch, including failures, shutdowns and zero-output operation. Retain boundaries, uncertainty, allocation, WIP/rework and inherited burden genealogy without dropping or recharging burdens. | meter/run/stock reconciliation and retained raw numerator ledger |
| `native_identity_limits` | UUID-bearing cards | LDPE: generic Product granulate, no CAS/route/grade/geography/comment. Heptane: CAS142-82-5, production mix at plant, no geography/route; recovered quality/provider still needs checking. Process Water: treated industrial water without explicit geography/route/quality. Nitrogen: generic Mass identity without CAS/route/grade/geography. Each has only reference Mass coefficient1; no native density or calorific assumption. Use their full restrictions and separately measure quantity/provider compatibility. | complete native flow and exact reference-property/unit chain; provider records |
| `species_completeness` | material and environmental ledgers | Track all actual purchased chemicals/formulations and all process/waste/emission species, not just carbon or the selected reference. Unidentified consequential species, unmeasured actual losses or contradictory reference/route must block the dataset claim and be reported; an auxiliary blank UUID alone does not invent such a method gap. | complete physical/element/species and independent water audits |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `reference_identity` | Require one explicit terminal link to bulk_supplied_ldpe, a Product output matching the declared LDPE reference UUID and 1 kg net basis in both languages. Preserve the same native UUID on physically distinct internal and off-grade granulate rows where applicable; those rows do not become terminal references. Reject HDPE slurry/gas-phase, LLDPE, EVA, recycled, film or compound identities for this output.   |
| `single_normalisation` | Verify a complete matched raw-period numerator and common positive accepted supply Q. Only normalize_period performs reporting division, after native conversions and burden carry reconciliation. Reject a second A/Q in collection, aggregation, cards or downstream calculation. Keep failed/zero-output operation, returns/rework, transition grades, opening/closing WIP and inherited burdens; no denominator if Q is zero.   |
| `molecule_and_water_checks` | Check total physical mass and every applicable element independently from actual molecular reaction/recovery pathways and the separate water ledger. Track ethylene, polymer, each modifier/carrier/initiator and its decomposition products, retained volatiles and inventory changes; quantify actual contaminants and unexplained residuals. Ethylene addition polymerisation itself has no condensation-water stoichiometry. No residual, carbon-only closure or COD may invent species, water or 100% conversion/yield. `ec-polymers-bref-2007` `nouryon-trigonox-b-2025`  `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` | `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` |
| `coverage_and_sources` | Disclose missing measurements, unidentified species and unverified provider links. Before a foreground dataset is usable, resolve its actual reference/route, all material species and consequential missing amounts; a PCR protocol does not fabricate those measurements. Preserve full native names, geography, medium and exact property-to-unit relations and source limitations. Schema or UUID equality alone is not scientific validation.   |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Primary foreground LDPE resin manufacture and bulk supply; explicitly gate-to-gate unless upstream links are included. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared-grade LDPE resin feedstock for separately modelled conversion, after applicability and evidence review. |
| excluded_use | Generic interchangeable polyethylene family, recycled resin, EVA/LLDPE/HDPE, additive compound, pipe/film/fibre conversion or full service-life claims. |
| required_metadata | Site/time; actual grade, route and species; accepted bulk Q and stock/carry reconciliation; reference UUID and property/unit; upstream source gates; utility geography; allocation and treatment scope. |
| required_quality_disclosure | Raw evidence and uncertainty, failures/zero-output inclusion, WIP/rework carried burdens, missing providers/UUIDs/measurements, native limitations and species/water balance residuals. Source examples are not supplier measurements. |
| update_trigger | Change in grade, reactor/initiation/recipe, carrier, supply origin/state, recovery/purge or abatement, energy source, accepted-output definition or material measurement evidence. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `ec-polymers-bref-2007` | official_guidance | European Commission, Production of Polymers BREF, August 2007, sections 3.2.1.1, 3.2.2, 3.3.1 and Table 3.9; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | Industrial route differences, incomplete single-pass conversion, compression/recycle/purge, wax separation, extrusion/degassing and environmental coverage. European historical description; 1999 survey aggregates are not present-site factors. Table 3.9 VOC/COD and primary-energy values cannot supply individual molecular flows or utility meters. |
| `lyb-lupotech-2025` | literature | LyondellBasell, Lupotech brochure 8735/25/08, pages 1–2 and Figures 1–2; https://www.lyondellbasell.com/globalassets/lyb/our-solutions/technologies/petrochemical/polyethylene/cta/Lupotech.pdf | Distinct tubular T and autoclave A process sequences and heat recovery. No process solvent/catalyst describes the reaction medium, not absence of peroxide carriers, modifiers or compressor oil. Recovery marketing is not measured 100% recovery. No assignment of a reactor or recipe to a named SKU. |
| `nouryon-trigonox-b-2025` | literature | Nouryon, Trigonox B Product Data Sheet, 2025-12-4, pages 1–2; https://www.nouryon.com/globalassets/inriver/resources/pds-trigonox-b-polymer-production-glo-en.pdf | Commercial DTBP initiator, CAS 110-05-4, usable in tubular/autoclave LDPE; assay, active oxygen and physical density are different quantities; acetone, methane and tert-butanol are major decomposition products. No recipe, emission split or universal dose. Chlorobenzene is a half-life test medium, not an inferred plant input. |
| `lyb-lupolen-2420k-2026` | literature | LyondellBasell, Lupolen 2420K Technical Data Sheet, locally acquired publication date 10/15/2026, pages 1–3; https://productsafety.lyondellbasell.com/DirectRequest?ProductGuid=79326e74-b73c-4977-9f56-b9e12367c004&ResponseTypeGuid=f1e32c20-d810-4db0-b25e-8e23a59f3733 | Real non-additivated LDPE pellet grade and bulk-container delivery example. Typical properties are not specification limits or bulk density; film test and conversion temperatures are downstream tests, not polymerisation conditions. Regional sales availability is not manufacturing geography. No medical/pharmaceutical use or SKU reactor/initiator claim. |
| `arkema-wo2025133548` | literature | Arkema France, WO2025133548A1, published 2025-06-26, French original printed page 22, Protocole expérimental; https://patents.google.com/patent/WO2025133548A1 | Specific heptane carrier and propionaldehyde chain-transfer-agent example in a laboratory batch stirred high-pressure autoclave. The tested peresters, laboratory scale and measured results are case-specific; no industrial recipe, DTBP amount, commercial grade identity, yield or scale-up factor is adopted. |
| `jrc-ilcd-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality method context: virtual subdivision and determining physical causality, then justified process-gate market value for remaining burdens. Supports allocation choices only; no LDPE recipe, universal mass/price share, recovered-material credit, heat substitution credit or full PEF/CFF claim. |
