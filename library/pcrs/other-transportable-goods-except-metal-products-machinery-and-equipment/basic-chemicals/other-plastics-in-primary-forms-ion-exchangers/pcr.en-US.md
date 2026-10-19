---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-plastics-in-primary-forms-ion-exchangers
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Wet sodium-form sulfonated styrene-DVB gel resin by solvent-assisted SO3 manufacture

## 1. Scope and Applicability

This method covers manufacture of new strong-acid cation exchange resin from purchased virgin, unfunctionalized styrene-divinylbenzene gel beads: DCE swelling, SO3 dissolved onsite in DCE, sulfonation, separation and actual agent recovery, hydration, NaOH conversion to Na form, washing, screening, controlled drainage, acceptance, storage, packing and dispatch. The terminal gate is actual net delivered wet beads, not newly quality-released production. Upstream bead polymerization is linked background, never silently excluded from cradle-to-gate results.

US4209592A Example 3 supports gel-bead SO3/DCE sulfonation; Example 1 independently specifies hydration, aqueous NaOH sodium conversion and washing; Example 2 describes agent recovery. This synthesis combines disclosed unit operations; it does not claim an industrial plant or named commercial SKU uses that exact chain. Example 3 prose gives six hours but Table 2 prints 16 hours; neither residence time nor any charge, capacity, moisture, recovery or yield from the examples becomes a default. DuPont IRC120 Na confirms a real gel/sulfonate/Na/wet bead market state, not this manufacturing recipe, procurement specification or site. Its typical water retention, particle density, shipping weight and volumetric capacity are different dimensions and are not conversion factors. LANXESS S1567 documents a distinct solvent-free, monodisperse route: that counterexample is excluded, so solvent use is not imposed on the whole resin category. `rohm-haas-so3-sulphonation-1980` `dupont-irc120-na-2024` `lanxess-s1567-2020`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-plastics-in-primary-forms-ion-exchangers |
| classification_refs | CPC 3.0 34790; this specific resin method is narrower; no mapping acceptance implied. |
| covered_products | New Na-form sulfonate-functionalized styrene-DVB gel beads from the stated solvent-assisted SO3 route, supplied wet after declared drainage. |
| excluded_products | Unfunctionalized plastics and GPPS; LDPE/PVC/PET; macroporous or acrylic resins; anion/weak-acid/chelating resins; H/Ca/other supplied ionic forms; dry powders; mixed beds; spent/regenerated service resin; onsite monomer polymerization; sulfuric-acid-only or solvent-free sulfonation; pharmaceutical/food/potable conformity claims; installed treatment service. |
| representative_product | Industrial softening Na-form sulfonated gel beads; actual supplier grade and acceptance conditions declared. IRC120 Na is a market-state example only. |
| production_route | Purchased gel precursor → DCE swelling and SO3/DCE sulfonation → separation/recovery → hydration → aqueous NaOH conversion → washing/screening/drainage → net delivered wet resin. |
| market_state | Sodium-form swollen gel beads at the producer dispatch gate, reproducibly drained, no separately pooled shipping water, no transport tare in product mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply new Na-form strong-acid gel cation exchanger for subsequent industrial use. |
| How much | 1 kg actual net delivered accepted wet resin of one grade, ionic form, route and drainage state. |
| How well | Verify matrix, gel structure, sulfonate groups, Na-form conversion, bead integrity/size, moisture and actual residual solvent/acid/salt against declared COA limits and methods; no manufacturer typical values are universal limits. |
| How long or cycle | One complete matched production/storage/delivery period; no treatment capacity or service-life functional equivalence. |
| reference_flow_link | supplied_resin |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cation Exchange Resin `8fb3a705-f250-4f6d-afff-46d8ca7bee2b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site and supply geography; matched cohort and reporting period; virgin gel precursor and crosslink metric; DCE/SO3 route and full commercial feed compositions; functional sulfonate and Na fraction; actual grade acceptance and residual DCE/free acid/salt; drainage and equilibrated moisture method; wet net delivered Q and inventory burden carry; dry-mass/capacity/bed-volume test conditions; actual utilities packaging treatment and dispatch interfaces |

Declare all qualifiers in dataset metadata, process notes, reference comments or equivalent traceable fields. Native limits of the precursor and final resin are retained in their full inventory descriptions; a native coefficient 1 is a reference-unit relationship, never density.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg terminal actual net delivered wet resin; weighed product includes retained moisture after declared drainage, excludes packaging and separately free liquid. Q is not the quality-release total R. |
| wet_and_capacity | all inventory rows | Mass | kg | Dry fraction, Na occupancy, sulfonate capacity and equilibrated bed volume are separately assayed subledgers. Capacity eq/L or meq/g cannot replace wet kg; only a matched state/test/density can support a labelled derived comparison, never an unconditional kg conversion. |
| whole_solution | all inventory rows | Mass | kg | Whole external formulations are procured once. Carrier water, active SO3/NaOH and impurities are constituents, not extra purchases. Onsite mixing instead records actual separate feeds and mixing burdens. |
| one_reporting_owner | all inventory rows |  |  | Protocols collect undivided raw-period numerators and inventory/carry evidence. convert_raw and cohort_ledger precede normalize_period, the only division owner. Cards and aggregation fields refer to that same operation; they are not sequential divisions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased virgin nonfunctionalized styrene-DVB gel beads and separate commercial SO3, DCE, NaOH solution and water at resin plant receipt. |
| starting_condition_role | foreground_starting_point; upstream precursor and reagent production remain required linked background |
| product_classification_scope | Only the stated new wet Na-form gel resin within CPC 3.0 34790. |
| recursive_input_rule | Internal recovered agent and return/rework transfers retain batch identity and burden without a new purchase or new output. Purchased finished resin or spent service resin changes this boundary and is excluded. |
| upstream_dataset_requirement | Match each actual bead, whole formulation, water, utility, packaging and treatment provider separately with technology, grade, whole-supply quantity, location and time. A UUID is physical identity, not a background dataset or recipe. |
| disclosure | Declare all recovery, abatement, utility generation interfaces, foreground storage/packing/handling/loading, stock and return boundaries. Utility generation fuels, losses and emissions remain inside linked full modules; no silent truncation. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| manufacture_boundary | p_resin | Include every actual receipt, swelling, reagent blending, sulfonation, separation, agent recovery, hydration, sodium conversion, wash, screening, drainage, testing, abatement and utility duty through actual dispatch. Storage, packaging, handling/loading and rework loads remain included, whether or not product leaves in the release period. | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| actual_atomic_exchanges | p_resin | Each physical product/waste transfer and each environmental species/compartment has one atomic row. Add actual filters, cooling make-up, neutralizers, fuels, packaging components and emissions separately when present. Whole mixed effluent is one waste stream with constituent subledgers; do not duplicate it as direct species emissions. | rohm-haas-so3-sulphonation-1980 |
| route_separation | p_resin | Solvent-free sulfuric-acid production is a real separate route and cannot inherit this DCE/SO3 inventory. No named commercial grade is assigned this process without site evidence; no food, drinking-water or pharmaceutical conformity follows from the reference. | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024; lanxess-s1567-2020 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_resin | Solvent-assisted gel resin functionalization through actual wet-bead dispatch | required | This method covers manufacture of new strong-acid cation exchange resin from purchased virgin, unfunctionalized styrene-divinylbenzene gel beads: DCE swelling, SO3 dissolved onsite in DCE, sulfonation, separation and actual agent recovery, hydration, NaOH conversion to Na form, washing, screening, controlled drainage, acceptance, storage, packing and dispatch. The terminal gate is actual net delivered wet beads, not newly quality-released production. Upstream bead polymerization is linked background, never silently excluded from cradle-to-gate results. | integrated foreground with separate operation and stock ledgers | supplied_resin |

### Process: Resin functionalization and delivery (`p_resin`)

#### Inputs

##### Product flows

###### Unfunctionalized gel precursor (`gel_beads`)

Purchased virgin non-sulfonated crosslinked styrene-DVB gel beads, with actual crosslink definition, size, moisture and residual monomer specified. Native CAS 9052-95-3; production mix at plant; all other name components except the basename/mix are empty. Its comment describes 5–75 mol% DVB based on styrene, gel catalyst-carrier use and large surface/fine pore structures. The use example does not restrict the beads to catalysis; verify a gel precursor, not a macroporous adsorbent or functionalized resin. Do not equate a weight-percent crosslink recipe with that native molar description. No geography, specific supplier, exact crosslink grade or synthesis recipe is supplied. CPC35499 is retained as coarse native classification debt, not the proposed PCR classification. Link the actual upstream bead manufacture once.

- Selected flow: Poly(styrene-divinylbenzene) `406f1abc-391a-43d9-841c-47df9f3e5004`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using gel_beads raw numerator from cp_feeds and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feeds`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Fresh sulfonating reagent (`fresh_so3`)

Weigh whole acquired liquid SO3, including actual stabilizer/impurity content. Onsite dissolution in already counted DCE creates no additional purchased reagent solution. Measure unreacted SO3 and acid after hydration independently.

- Selected flow: Stabilized liquid sulfur trioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using fresh_so3 raw numerator from cp_feeds and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feeds`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Fresh swelling solvent and make-up (`fresh_dce`)

Record all fresh DCE for bead swelling and reagent preparation once. Recovered DCE/SO3 remains a composition-resolved internal transfer, with recovery energy and purge burdens retained. No patent recovery percentage is a site default.

- Selected flow: 1,2-Dichloroethane liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using fresh_dce raw numerator from cp_feeds and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feeds`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Whole purchased sodium-form conversion solution (`caustic_solution`)

Record whole purchased aqueous NaOH solution and its measured NaOH/water assay; do not add NaOH-equivalent and carrier-water purchases again. The patent reports a 10% solution in Example 1; actual concentration, dose and residual free acid are measured, not copied. If made onsite, replace this commercial input by separately acquired NaOH and water and include blending burdens.

- Selected flow: Aqueous sodium hydroxide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using caustic_solution raw numerator from cp_feeds and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feeds`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Hydration and washing water (`demin_water`)

Meter separately supplied water for hydration, washing, rinsing and actual recovery/cleaning. Distinguish water retained in the supplied beads, drainage, evaporation and aqueous effluent. Solution carrier water is already in the whole formulation.

- Selected flow: Demineralized water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using demin_water raw numerator from cp_feeds and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feeds`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Recovery inert gas (`nitrogen`)

Record actual nitrogen for inerting, vacuum recovery and storage if used; preserve gas composition, pressure, temperature, rate integration and final destination. Example 2 supports a recovery operation, not compulsory nitrogen demand or gel-route recovery yield.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using nitrogen raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Metered electricity (`electricity`)

Include receipt, agitation, pumps, vacuum, cooling, recovery, washing, screening, dewatering, storage, packing and loading meters. Allocate shared duties with an evidenced physical driver. Preserve site and supply mix uncertainty.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q once only, using electricity raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Non-steam imported heat (`imported_heat`)

Measure non-steam thermal duty at the declared utility interface including reaction, recovery/distillation and actual heated storage. Steam duty is excluded from this card. Upstream utility fuel and generation losses/emissions belong to the linked complete provider module once.

- Selected flow: Delivered process heat
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q once only, using imported_heat raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Delivered steam (`steam`)

If actually used, record physical steam mass, pressure, temperature/enthalpy, condensate return and generation provider. Do not add its heat again as imported_heat. Count cooling make-up or separately purchased refrigerants as separate atomic exchanges when actually present.

- Selected flow: Process steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using steam raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Single bag liner when used (`ldpe_liner`)

Collect actual liner mass and rejected packaging separately from resin net mass. This is a conditional concrete packaging component, not a statement that the cited commercial SKU uses this packaging. Include actual bag-making background and any other actual components individually.

- Selected flow: LDPE bag liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using ldpe_liner raw numerator from cp_pack and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `dupont-irc120-na-2024`

###### Single outer sack when used (`pp_sack`)

Weigh actual outer sack; preserve supplier construction and reusable-container allocation when applicable. Packing, handling, warehouse and loading burdens are included even when the packaging material is not this example.

- Selected flow: Woven polypropylene outer sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using pp_sack raw numerator from cp_pack and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `dupont-irc120-na-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Terminal net delivered wet sodium resin (`supplied_resin`)

The terminal Product is 1 kg net actual delivered, accepted sodium-form sulfonated styrene-DVB gel beads, retaining the declared equilibrated bead/interstitial moisture after a reproducible drainage protocol; no separate supernatant or packaging tare. Native name is generic Cation Exchange Resin / 阳离子交换树脂, production mix at plant; route and property-name components are empty, CAS and geography/locationOfSupply absent, Product flow with Mass reference coefficient 1 and no other properties. The complete comment describes negatively charged crosslinked polymer units exchanging bound Na/Ca for K and gastrointestinal/heart-failure use. That use context is disclosed; it supplies no industrial-grade, moisture, ionic-form, pharmaceutical-grade, route or actual provider approval. Native CPC35499 is coarse classification debt. Adopt only the broad cation-resin physical identity; establish this specific Na/sulfonate/gel/wet state by actual COA, not by the UUID.

- Selected flow: Cation Exchange Resin `8fb3a705-f250-4f6d-afff-46d8ca7bee2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_delivery`
- Sources: `rohm-haas-so3-sulphonation-1980`; `dupont-irc120-na-2024`

###### Utility condensate crossing the boundary (`returned_condensate`)

Record actual returned condensate at the utility interface; paired provider delivery/return and energy credits must be consistent. It is neither product Q nor a second reclaimed-water purchase.

- Selected flow: Steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using returned_condensate raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `rohm-haas-so3-sulphonation-1980`

##### Waste flows

###### One physically collected aqueous waste stream (`aqueous_effluent`)

Weigh the actual commingled aqueous stream to external treatment; independently assay free acid/base, sulfate, sodium, dissolved DCE/organics, suspended resin and water. Split physically separate destinations into separate rows. The whole waste transfer and its constituent subledger are not simultaneous direct emissions to water. No COD-based species reconstruction.

- Selected flow: Sodium sulfate-bearing aqueous resin wash effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using aqueous_effluent raw numerator from cp_outlets and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Unrecovered sulfonating-agent waste (`spent_agent`)

Actual unrecovered spent agent or purge crosses the waste-treatment gate with measured residual SO3/DCE/acid content and physical phase. Internal recovered agent is not this external output. Recovery energy, nitrogen, condensers, residual solvent and treatment are retained; the patent claim of no reaction by-product is not zero effluent or emission evidence.

- Selected flow: Spent sulfur trioxide–1,2-dichloroethane liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using spent_agent raw numerator from cp_outlets and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Rejected bead waste (`resin_fines`)

Measure broken/rejected resin separately with its ionic form, retained liquid, contamination, treatment and carried burdens. Returned beads sent to rework remain an internal loop; they are not this disposal and cannot create a second accepted production or delivery.

- Selected flow: Sulfonated styrene-DVB resin fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using resin_fines raw numerator from cp_outlets and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `rohm-haas-so3-sulphonation-1980`

##### Elementary flows

###### DCE released to air (`dce_air`)

Measure actual fugitive and controlled residual DCE to the declared air compartment using species-resolved sampling and integrated exhaust flow. Before/after abatement and recovered solvent must not be counted twice. Do not infer zero release from the solvent-recovery claim.

- Selected flow: 1,2-Dichloroethane, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using dce_air raw numerator from cp_outlets and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Actual sulfuric-acid mist to air (`acid_mist_air`)

Where moisture contact produces acid mist, measure actual H2SO4 to air after control; distinguish it from unhydrated SO3, liquid sulfate waste and sulfur incorporated in resin. If actual SO3 is emitted, add its own elementary row and measurement instead of calling it acid mist by residual closure.

- Selected flow: Sulfuric acid, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using acid_mist_air raw numerator from cp_outlets and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Measured water vapor (`water_air`)

Determine actual water vapor from metered or sampled exhaust with temperature/humidity and integrated flow; subtract inlet humidity consistently. It is not a fitted unknown used together with unknown reaction water to close mass.

- Selected flow: Water, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using water_air raw numerator from cp_outlets and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `rohm-haas-so3-sulphonation-1980`

###### Vented nitrogen (`nitrogen_air`)

Track actual vented nitrogen after recovery/abatement and retained inventories; mixed offgas needs its measured composition. No automatic conversion of every kilogram of purchased nitrogen into an emission.

- Selected flow: Nitrogen, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using nitrogen_air raw numerator from cp_outlets and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `rohm-haas-so3-sulphonation-1980`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_tracking | p_resin | Prefer direct grade/batch meters; subdivide shared utility, recovery, cleaning, warehouse and loading duties by evidenced run time, measured duty, mass handled or storage occupancy, retaining causality and uncertainty. Do not allocate by exchange capacity or compare grades solely by eq/L. | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| recovery_no_credit | p_resin | Internal recovered SO3/DCE, condensate and reworked beads retain paired mass/composition/burden transfers and cancel on consolidation. Waste/resin fines are not automatically co-products. If a real saleable recovered product exits, add its actual row and separately justified allocation before reporting; no default displacement or avoided-treatment credit. | rohm-haas-so3-sulphonation-1980 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feeds | p_resin | whole acquired chemical and precursor inputs | foreground_records | row_id; lot; timestamp; gross and tare; net raw mass; assay; carrier water; purity; precursor gel/crosslink/size; delivery unit; receipt/issue and raw-stock movements | Materials owner records raw weighed receipts, issued whole feeds and opening/closing raw stocks; reconcile actual process consumption, spills, recovery returns and assay subledgers. Do not divide by output. Preserve failed charges, rework and source COA. | kg | each batch and meter interval | full matched period including failed/zero-output runs | actual resin site and declared interfaces | per 1 kg reference flow | calibrated weights, invoices, issue logs and COA |
| cp_utilities | p_resin | electricity heat steam gas and condensate | foreground_records | meter start/end; energy; integrated gas volume or rate/time; composition; temperature; pressure; steam enthalpy; condensate; operation time; shared-duty driver | Utility owner preserves raw interval totals for all manufacturing and actual recovery, failed runs, storage, handling and loading; record each carrier separately and its generation-module boundary. Integrate rates only; already integrated volumes receive no extra duration factor. No A/Q at collection. | kg; MJ; kWh; m3 | each batch and meter interval | full matched period including failed/zero-output runs | actual resin site and declared interfaces | per 1 kg reference flow | meter calibration, utility invoices, state/density evidence and allocation measurements |
| cp_delivery | p_resin | acceptance drainage wet state and actual dispatch Q | foreground_records | unique lot/cohort; grade; new release R; gross/tare net dispatched wet mass; returned/reversed and re-delivered mass; moisture/drainage method; free liquid; functional groups; Na fraction; residual DCE/acid/salt; capacity test and bed volume | Quality and dispatch owner signs actual lot COA, repeatable equilibration/drainage procedure, calibrated fill mass and delivery notes. Record R separately from actual net external dispatch. Match returns/reversals to original deliveries and burden cohorts; a returned/reaccepted or re-delivered bead is never an additional new production. Do not dry the reporting denominator or infer mass from capacity. No normalization in this protocol. | kg; mass fraction; eq/L; meq/g | each batch and meter interval | full matched period including failed/zero-output runs | actual resin site and declared interfaces | per 1 kg reference flow | COA, native-identity qualifiers, delivery/return receipts, sample and drainage records |
| cp_pack | p_resin | actual packaging warehouse handling and dispatch materials | foreground_records | component row_id; composition; mass; tare; rejects; reusable turns; lot; warehouse occupancy; loading movements | Packing/logistics owner records undivided actual material quantities and physical handling records for all attributable cohorts, including rejects, returns and held stock. Energy is metered in cp_utilities with operation tags so the same burden is not added twice. Declare gate and dispatch/loading interface. | kg | each batch and meter interval | full matched period including failed/zero-output runs | actual resin site and declared interfaces | per 1 kg reference flow | packing bills, tare checks, stock and handling logs |
| cp_outlets | p_resin | waste and actual environmental species | foreground_records | stream row_id; phase; destination/medium; gross mass; composition; integrated exhaust or rate/time; sampling conditions; SO3/H2SO4 distinction; nitrogen; water; DCE; filter capture; recovered mass | Environmental owner weighs actual separate waste streams and samples real emitted species after control; preserve independent wet/dry gas basis, detection limits and measured treatment/recovery performance. Whole outsourced waste treatment is linked once. Never derive unknown water and unknown outlet from one residual, or turn a failed assay into zero. No division by Q. | kg; m3 | each batch and meter interval | full matched period including failed/zero-output runs | actual resin site and declared interfaces | per 1 kg reference flow | weigh tickets, treatment manifests, sample analyses and monitoring limits |
| cp_carry | p_resin | WIP finished stocks internal loops and carried burdens | foreground_records | opening/closing raw WIP and finished masses; species/state; lot genealogy; carried burden vector by row_id; current process burdens; newly released R; dispatch Q; recovery/rework returns; failed/zero-output batches; warehouse and dispatch burdens | Production-accounting owner preserves raw masses and unnormalized burdens of opening/closing WIP and finished stocks, including earlier-period burdens and all failed/zero-output/rework activity. Reconcile manufacturing release and finished-store/dispatch ledgers separately; preserve internal transfer mass and carried burden until consolidation. Same-cohort returns cancel the prior dispatch before one re-delivery entry, with added rework burden retained; cross-period corrections identify the original cohort and prior report. Never assume R=Q or divide at collection. | kg; row-native burden units | each batch and meter interval | full matched period including failed/zero-output runs | actual resin site and declared interfaces | per 1 kg reference flow | inventory reconciliation, cost/physical burden ledger, genealogy and return documents |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert raw weighed units to kg; kWh to MJ using 3.6 MJ/kWh. For actual gas/liquid volume use independently supported density at matching composition/temperature/pressure. Rate times duration is an integrated volume; already integrated volume receives no second time factor. No normalization here. | cp_feeds; cp_utilities; cp_pack; cp_outlets | converted_raw | rohm-haas-so3-sulphonation-1980 |
| species_ledger | all material rows | Conserve complete physical mass and C/H/O/S/Na/Cl separately from measured chemical species and water state. Ideal aryl-H + SO3 → aryl-SO3H forms no net water; bound acid + NaOH → bound sodium sulfonate + H2O forms water only to independently measured conversion extent. Residual SO3 hydration consumes water; actual free-acid neutralization has its own assayed species/extent. These are balanced interpretation equations, not default reaction extents or proof of side-reaction absence. Distinguish chemical water, retained bead moisture, swelling/phase redistribution, carrier water, drainage and evaporation. Verify independent sulfur/Na/Cl and functional-group/speciation assays; never fit reaction water and outlet water to the same mass residual or use COD as a species balance. | converted_raw; cp_feeds; cp_delivery; cp_outlets; cp_carry | species_balance | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| cohort_ledger | all inventory rows | Maintain raw manufacturing and finished-store ledgers by identical grade/route/Na/wet-state cohort. Manufacturing burden vector B_release = B_open_WIP + B_current_process - B_close_WIP, retaining failed/zero-output and unrecovered loss/rework burdens; no automatic scrap credit. Transfer the actual newly released R and B_release to the finished ledger once. Delivered burden A_i = B_open_FG_i + B_release_i + B_storage_dispatch_i - B_close_FG_i, with separately evidenced other exits/allocations and return corrections disclosed. Match opening stock embodied burdens, actual period storage/packing/loading and closing stock burdens to each lot. Internal release/store transfer cancels on consolidation. Finished closing stock is not added as a second production output of the same R; unshipped stock and its burdens remain carried, outside Q. Physical mass reconciliation uses stocks as stocks, not duplicate external exchanges. Q comes only from cp_delivery. Missing carried burdens or nonpositive Q prevents a per-kg delivered report. | converted_raw; species_balance; cp_carry; cp_delivery; cp_pack; cp_utilities; cp_outlets | A_i; Q | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| normalize_period | all inventory rows | a_i = A_i / Q once, after raw conversions and complete cohort burden assignment; A_i is the full matched delivered-cohort raw numerator in the row native unit; Q is actual net delivered accepted wet resin kg, not R. Reference output is exactly 1 kg. Flow-card formulas and protocol aggregation name this single reporting operation, never a second A/Q. | A_i; Q; cp_delivery; cp_carry | a_i | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_state | p_resin | Verify nonfunctional gel precursor and distinct functionalized final identity, whole formulations, actual ionic conversion and wet drainage test; native generic identity cannot establish actual grade/provider suitability. | COA, functional-group and ionic assays, full native fields and supplier evidence |
| period_completeness | all inventory rows | Account for all actual raw-period feeds, burdens, failed/zero-output operation, rework, returns, WIP/finished stocks and carry. Declare any missing field as uncertainty or unavailable result, never as zero. | raw logs, stock/burden reconciliations and signed owner reviews |
| species_independence | p_resin | Independent mass/element, species and water-state evidence must all hold within documented analytical uncertainty; retain measured side reactions and residuals, not inferred exact closure. | independent analyses, sampling design, detection limits and uncertainty budget |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_gate | p_resin | Require one terminal Product row supplied_resin with the declared UUID, 1 kg net actual delivered Na-form wet gel state and complete qualifiers; do not substitute unfunctionalized polymer, capacity, dry kg, H form or release R. | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| complete_period_and_unit | all inventory rows | Require raw conversions, positive matched Q, WIP and finished-stock burden carry, all failed/rework/return records, one normalization and separate species/water balances; unresolved source fields, medium or conversions remain explicit findings. | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| native_limits_and_routes | p_resin | Preserve all native name components, comments, missing CAS/geography, production-mix/type/property limits and classification debts in both languages. Native generic cation-resin medical use is not grade approval; actual contradictory chemistry/grade/route cannot be adopted. Check actual route against solvent-free counterevidence. | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024; lanxess-s1567-2020 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacture and actual supply of the stated new wet Na-form resin; combine with separately modelled resin use/regeneration only under its own function and gate. |
| allowed_use | Route/grade/state/period-qualified supplier inventories and equivalent-boundary comparisons with declared uncertainty. |
| excluded_use | Universal CPC coverage, any ion exchanger, dry-polymer equivalence, softening service/capacity/lifetime claims, medical/food/potable certification or a supplier recipe inferred from a generic UUID. |
| required_metadata | actual site and supply geography; matched cohort and reporting period; virgin gel precursor and crosslink metric; DCE/SO3 route and full commercial feed compositions; functional sulfonate and Na fraction; actual grade acceptance and residual DCE/free acid/salt; drainage and equilibrated moisture method; wet net delivered Q and inventory burden carry; dry-mass/capacity/bed-volume test conditions; actual utilities packaging treatment and dispatch interfaces |
| required_quality_disclosure | Actual data coverage; Q versus R and stock carry; native contextual/coarse-classification limits; missing auxiliary UUIDs/providers; source age and example inconsistencies; species/conversion uncertainty. |
| update_trigger | Changes to matrix/crosslink/function/ionic state, sulfonating route/solvent, drainage/moisture, acceptance, site/provider, stock gate, recovery/treatment or primary evidence. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| rohm-haas-so3-sulphonation-1980 | literature | Rohm and Haas, US4209592A (1980-06-24), PDF pp.2–3, printed cols.1–4, Examples 1–3. https://patents.google.com/patent/US4209592A/en | SO3/DCE gel sulfonation; separate disclosed hydration/NaOH conversion/washing and recovery operations. Historical lab cases only: Example 3 prose six hours versus Table 2 16 hours, no adopted time, dose, yield, moisture or default capacity; MR Example 1 is not a gel-grade result. |
| dupont-irc120-na-2024 | handbook | DuPont, AmberLite IRC120 Na, 45-D01246-en Rev.5 (June 2024), pp.1–3. https://www.dupont.com/content/dam/water/amer/us/en/water/public/documents/en/IER-AmberLite-IRC120-Na-PDS-45-D01246-en.pdf | Real styrene-DVB gel, sulfonic-acid functional group, shipped Na form and wet-state descriptors; swelling, capacity and particle/shipping densities are distinct measurements. Typical properties not universal acceptance or kg conversion; no claim that this SKU uses the selected process. |
| lanxess-s1567-2020 | handbook | LANXESS, Lewatit S1567 flyer, 10365-EN 02/2020, Status 01/2020, pp.1–2. https://lanxess.com/-/media/project/lanxess/corporate-internet/products-and-solutions/brands/lewatit/service-center-product-literature/flyer_lewatit_s1567_en.pdf | Independent manufacturer counterevidence: commercial monodisperse softening resin uses solvent-free production/sulfonation. Excludes that route from this DCE method; promotional performance and comparative charts are not transferred as factors or grade specifications. |
