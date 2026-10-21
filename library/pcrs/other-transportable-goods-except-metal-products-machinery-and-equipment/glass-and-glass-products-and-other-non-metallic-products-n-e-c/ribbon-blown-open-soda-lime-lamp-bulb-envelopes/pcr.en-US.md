---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.ribbon-blown-open-soda-lime-lamp-bulb-envelopes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Ribbon-blown clear open soda-lime lamp bulb envelopes

## 1. Scope and Applicability

This rule covers only ribbon-blown clear uncoated open soda-lime incandescent-lamp bulb envelopes, from real batch materials to first required quality release for subsequent lamp assembly. It is neither a finished lamp, glass tube nor building glass. Technical originals support the complete manufacturing route and terminal. The broad formed-and-finished glass Product identity is adopted only with the complete open-envelope qualifications below; it is not a terminal-specific provider dataset. Authored maturity does not imply scientific/translation approval, mapping acceptance or publication.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.ribbon-blown-open-soda-lime-lamp-bulb-envelopes |
| classification_refs | CPC 3.0:37192; narrower ribbon-blown clear open soda-lime bulb-envelope subset |
| covered_products | Clear uncoated unassembled unsealed open soda-lime lamp bulb blanks; actual dimensions, wall thickness, neck opening and glass grade declared |
| excluded_products | Unworked tube/sheet feed and mere repacking; Danner/Vello tubing; sheet/edgework/toughened/IGU/foam/fibre/woven/nonwoven products; food jars and tableware; borosilicate/quartz/CRT/PV FTO glass/pressed reflectors; frosting/acid etching/staining/coating; stems, filaments, metal bases, sealing/filling, whole-lamp assembly, use and end-of-life |
| representative_product | First quality-released clear open uncoated soda-lime bulb envelope |
| production_route | Actual purchased individual batch ingredients and suitable cullet → storage/mixing → melting/refining/forehearth → water-cooled ribbon rollers/orifice belt/blow heads/mould air blowing → neck detachment/internal cullet loop → annealing/cooling → inspection and first release. Transparent synthesis of compatible originals, not one SKU/factory/contemporary order; no purchased-finished-shell repacking substitute. |
| market_state | Open uncoated empty glass envelope at first required quality release; packaging/storage/dispatch are services attributed to the original cohort |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of declared open lamp bulb envelopes |
| How much | 1 kg |
| How well | Released to actual dimensions, wall/neck, composition and annealing/defect tests; no assumed optical performance or lamp life |
| How long or cycle | Representative consecutive production period and unique first-release cohorts; post-release service observation horizon separately recorded |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glass (formed & finished) `82b33e71-bfaa-49b4-9627-ee5963433f6e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site and consecutive reporting period; first quality-release gate and unique cohort; open clear uncoated soda-lime envelope terminal; net glass mass and packaging tare; composition dimensions wall neck and test methods; whole supplied formulation grade assay water state and upstream provider; actual ribbon melting blowing detachment annealing route; fuel composition state density heating-value and electricity voltage geography; actual humid air remaining oxygen and each species compartment; cooling quench water supply return state enthalpy and treatment agreement; opening closing raw WIP non-WIP FG assets fluids and per-exchange historic vectors; six gross packaging movements mutually exclusive stocks moisture repairs; actual failure startstop idle cleanup rework; dedicated shared allocation causal evidence and genuine residual contemporaneous same-gate state market value; original cohort post-release service Q and horizon; original context uncertainty and generic finished-glass identity limits |

All required qualifiers and complete native restrictions on every card must be declared in metadata, product description, reference-flow comment or equivalent complete consumable context; a manifest-only note is insufficient. The native Glass (formed & finished) is a broad Product flow on Mass/kg. Its complete record specifies no CAS, composition, grade, detailed article form, production route, geography, provider or optical/electrical property. Its CPC37199 taxonomy neither defines this methodology boundary nor approves a provider. Adopt only the independently evidenced clear uncoated open soda-lime bulb-envelope member: actually ribbon-blown, neck-detached, annealed, inspected and first quality-released for later lamp assembly. Finished here means completed glass-shell manufacture, not a sealed or electrically assembled lamp. Preserve actual drawing, glass composition, open-neck state, tests, route and supplier boundary; generic upstream glass supply cannot substitute those facts.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of uniquely newly first-released net glass kg from cp_release; measured gross minus actual tare, no guessed kg per item. |
| single_normalization | all inventory rows | actual row extensive property | row unit per kg | Collect unnormalised raw only, convert and genuinely attribute numerators first; normalize_exchange executes A_j/Q once. Every card and aggregation references that result. Q=0 retains actual burden without a unit result. |
| energy_units | electricity and gas | own energy or mass | MJ or kg | Electricity kWh ×3.6 gives MJ once; native fuel mass and thermal MJ remain separate with independently measured actual composition and LHV/HHV. Do not impose Mass/kg on every inventory row or repurchase own heat. |
| state_conversion | each physical stream | actual native property | row unit | Integrate over time only an actual rate; integrated volume is not multiplied by time again. Measure density independently for each substance/state; water or a secondary property factor cannot replace another density. Item(s) and item are identical units with factor1; count-to-mass needs configuration-specific weighing. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual individual raw materials, external cullet, complete formulations, utilities and equipment services entering the manufacture control volume |
| starting_condition_role | Substantive raw-material-to-open-envelope manufacturing |
| product_classification_scope | CPC 3.0:37192 narrower open soda-lime ribbon bulb-envelope subset |
| recursive_input_rule | Separate external same-family cullet from internal return; purchased finished envelopes cannot replace this manufacturing route |
| upstream_dataset_requirement | Upstream supply and treatment datasets matched to actual state, formulation, route, geography and gate; retain all raw-material and service burdens |
| disclosure | Disclose actual recipe/route, release gate, all stocks/history, causal allocation, normalization and service horizon; technical synthesis does not assert one factory |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | manufacture | Include receiving, silo/cullet segregation, weighing, batch mixing, melting/refining, forehearth conditioning, water-cooled ribbon rollers, orifice belt and blow heads, actual mould lubrication and air blowing, neck scribing/detachment, cullet collection/quench, annealing lehr, cooling, inspection/testing and first required quality release. Source-stage meters and material ledgers distinguish these operations within one integrated physical control volume. | `ge-glass-products-1990`; `epa-lamp-glass-1975`; `jrc-glass-bref-2013` |
| `boundary_complete` | all inventory rows | Retain failed and zero-output batches, starts/stops, idle/holding, cleanup, testing/destructive samples, rework, leaks and rejects. Record opening/closing raw materials, WIP and unassigned non-WIP stores plus each exchange inherited history vector. Internal cullet, heat, water and interstage transfers cancel only after quantities and histories reconcile. A missing value is unknown, not zero; add each actual omitted material, formulation, fuel, fluid, package, waste and emitted species as an atomic row before dataset completion. | `epa-lamp-glass-1975`; `jrc-glass-bref-2013` |
| `boundary_gate` | first_release and service | Q is net glass mass newly passing its first required release, once per original cohort. Released closing FG is already inside Q: never add it again as manufacturing output or subtract its manufacturing burden as Bclose. Manufacturing Bclose covers raw/WIP and unassigned non-WIP stores only. Maintain full physical FG opening/closing/gross shipments/returns/change/breakage ledgers separately; shipping and retesting do not create new production. Service has actual incremental burden and its original cohort Q and observation horizon; it is not a net-delivery model. | `epa-lamp-glass-1975`; `ilcd-allocation-2010` |
| `boundary_assets_water` | physical control volumes | For each furnace/mould/lehr/spare and each installed oil/water/gas inventory keep unscaled item/mass/volume balance and inherited exchange vectors separately from current service burden. Record new repair additions and removed old material and real moisture independently. Correct already net-consumption records once only. Include actual cooling/air-compression/water treatment and offsite receiving services; no presumed steam boiler. External hot-water/condensate return, if real, needs Product mass, actual enthalpy and supplier water/energy agreement. | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| `boundary_pack` | service packaging | For each material independently: opening empty + opening attached WIP + opening attached FG + opening reusable pool + new purchases + supplier-included received + external returns received + real repair additions = the mutually exclusive closing stocks + gross physically shipped out + separate external returns sent + waste + measured real losses. Track wood/cork moisture and new/old repair components when real. Internal reuse cancels; gross mass never receives an economic burden fraction, net-Q correction, repurchase or coproduct credit. | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| `boundary_species` | physical and elemental balances | Keep total wet physical mass and relevant C/N/S/Cl/Si/Na/K/Ca/Mg/Al/B balances independently from actual species evidence. Measure gas humidity/remaining oxygen, reaction extent, free/structural/carrier water, condensate and non-WIP fluid stores in the same boundary. Do not fit two unknowns with one residual; do not manufacture species from COD/VOC/total-C/total-B/NOx/SOx or particulate size. Site mass-balance discrepancy remains an uncertainty/hold until independently resolved. | `jrc-glass-bref-2013`; `epa-lamp-glass-1975` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Integrated batching melting ribbon blowing annealing inspection release | required | All actual production stages and nonproductive intervals | foreground | per 1 kg first-released net glass |
| service | Post-release packaging storage handling dispatch and return increments | required | Actual observed services attributed to original release cohort; no new production | foreground | per 1 kg original cohort reference flow |

### Process: Integrated complete manufacture (`manufacture`)

Keep stage-resolved records for receiving/batching, melting/refining/forehearth, ribbon rollers/orifice belt/blow heads/moulds, neck detachment/quench/cullet return, annealing/cooling/inspection and first release. These are aggregated within this control volume; document each internal transfer and inherited vector before cancellation.

#### Inputs

##### Product flows

###### silica sand (`silica`)

Whole supplied silica sand for the batch. Conditional native identity fixes particle size 0.020–3.350 mm and at-plant production mix; English route says crushing and magnetic separation while Chinese says crushing and washing. Require the actual supplied preparation to substantiate all of these operations or replace this identity. The long silica-polymorph synonym list does not prove actual mineral phase, particle grading, iron or moisture. Determine them from supplier records and assays; no nanoparticle or dissolved-silica substitution.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Sodium carbonate (`soda_ash`)

Whole supplied salt once. This conditional identity is 95% sodium carbonate, CAS 497-19-8, natural-alkali processing at chemical plant. The carboxylic-acid classification conflicts with the chemically consistent carbonate name, CAS and comments and is disclosed as a taxonomy defect. A different assay or synthetic/recycled route needs another verified identity; 95% is not a required bulb recipe. Hydrates, free water and impurities are subaccounts, not second purchases.

- Selected flow: Sodium carbonate `2099dae8-ad14-4496-87eb-d339b26e09f7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Limestone (`limestone`)

Mass-based foreground limestone identity leaves composition, purity, grade, extraction route and provider unspecified. Collect whole supplied mineral and actual carbonate, Mg, C and moisture assays. Do not turn an oxide-equivalent recipe into purchased CaO or assume pure calcite or complete decarbonation.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Dolomite (`dolomite`)

Conditional actual recipe ingredient: uncalcined mineral rock, at-plant production mix, raw material input to glass batch. Native comments supply no inventory quantity. Measure carbonate fractions, Ca/Mg, gangue, moisture and received mass; no calcined-dolomite or pure MgO substitution.

- Selected flow: Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Feldspar (`feldspar`)

Conditional mineral batch ingredient, production mix at plant, as mineral raw material. Native estimated recipe wording supports identity only; collect this recipe quantity and actual Na/K/Al/Si mineral assay and moisture. No inherited estimated factor or porcelain/finished-glass route.

- Selected flow: Feldspar `ec8f6638-6f17-4849-8ee4-fbe743d52e80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Clean sorted soda-lime glass cullet (`external_cullet`)

External recovered glass feed after its stated recovery gate, conditional on use. Record source article, sorting, contaminants, glass chemistry, moisture and upstream recovery burden. Internal process-return cullet is not an external purchase and must not use this row. No generic mixed-glass or glass-fibre feed identity is assumed.

- Selected flow: Clean sorted soda-lime glass cullet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Anhydrous sodium sulfate (`sodium_sulfate`)

Actual sulfate fining salt only; verify anhydrous/hydrated state and full supply assay. Sulfur retained in glass, dust, wastewater and actual gaseous species must reconcile independently. Add distinct rows for any other actual purchased batch constituents; absence must be documented rather than inferred from a generic table.

- Selected flow: Anhydrous sodium sulfate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Sodium nitrate (`sodium_nitrate`)

Actual nitrate oxidant only; retain whole supplied salt and assays. Nitrate nitrogen is not automatically NO2 or an emission factor. Add distinct rows for any other actual purchased batch constituents; absence must be documented rather than inferred from a generic table.

- Selected flow: Sodium nitrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Potassium nitrate (`potassium_nitrate`)

Actual recipe oxidant only, separately weighed from sodium nitrate; no combined nitrate card. Add distinct rows for any other actual purchased batch constituents; absence must be documented rather than inferred from a generic table.

- Selected flow: Potassium nitrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Potassium carbonate (`potassium_carbonate`)

Actual potassium flux only; distinguish the supplied carbonate from an oxide-equivalent composition. Add distinct rows for any other actual purchased batch constituents; absence must be documented rather than inferred from a generic table.

- Selected flow: Potassium carbonate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Aluminium oxide (`alumina`)

Actual separately purchased alumina only; do not also buy the Al content already inside feldspar. Verify phase and grade. Add distinct rows for any other actual purchased batch constituents; absence must be documented rather than inferred from a generic table.

- Selected flow: Aluminium oxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Boric acid (`boric_acid`)

Conditional minor ingredient only if documented in this soda-lime formulation. A B2O3-equivalent entry in a case table is not proof of purchased boric acid or permission to model borosilicate bulbs. Add distinct rows for any other actual purchased batch constituents; absence must be documented rather than inferred from a generic table.

- Selected flow: Boric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Natural gas (`gas`)

Whole fuel for actual industrial-furnace combustion, native Mass/kg with no fixed grade or geography. Record composition, actual moisture, supply state, density at metering temperature/pressure and lower/upper heating value independently. Record whole gas once; methane and other gas components are subaccounts, not extra purchases. Heat from own combustion is internal; do not buy the same heat again or substitute the rejected coating-oven gross-calorific-value record.

- Selected flow: Natural gas `6b52b30c-b977-46cf-b8e2-39bc133813b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Alternating current (`electricity`)

Conditional native CN consumer grid-average AC at 1–35 kV, to user; reference energy property is Net calorific value/MJ. Meter kWh once and convert to MJ by 3.6; do not treat it as Mass or thermal fuel. Include batch handling, furnace boost, ribbon drives, air compressors, fans, lehr, inspection, water circulation and controls. Other voltage/geography/supply requires a matching identity/provider; do not infer a current factory from this conditional reference.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Treated mains water (`water`)

Actual external supplied water, separately metered for batch wetting, cooling, cullet quench, makeup and cleaning. Internal recirculation is not a second purchase. Measure its own density and state when converting volume to mass. CN fibre-specific water with a toxicity/count reference property and HK water with a regional volume reference do not establish this generic supply. Record actual treatment boundary and provider.

- Selected flow: Treated mains water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Mineral-oil-in-water glass-mould release emulsion (`release_emulsion`)

Actual complete purchased glass-blowing lubricant emulsion, including its water and additives, is one supplied formulation. Assay oil/water subaccounts without purchasing them again. If instead mixed on site, replace the purchased-emulsion row with each actual bought concentrate/ingredient and makeup water, plus mixing energy, losses, residues and retained stocks. Do not use automotive oil alone for the whole emulsion.

- Selected flow: Mineral-oil-in-water glass-mould release emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Graphite glass-mould release paste (`graphite_paste`)

Conditional actual complete high-temperature release paste distinct from oil-water spray. Count whole supplied formulation, its carrier and additive subaccounts; no pure-graphite identity for the whole paste and no simultaneous assumed second lubricant.

- Selected flow: Graphite glass-mould release paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### lubricating oil (`lubricant`)

Actual machine petroleum lubricating oil, mass reference, at-plant production mix with petroleum distillation/refining description; not a mould emulsion or a synthetic/refrigerant substitute. Record fill, top-up, drain, leaks and retained equipment-fluid stock with per-exchange history. Service consumption uses the corrected ledger once, not procurement plus a second stock correction.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Refractory bricks (`refractory`)

Actual fired non-siliceous-earth refractory brick used in furnace maintenance; native comments mention high-alumina/silica/magnesia families without fixing this brick composition. Confirm grade and furnace compatibility; distinguish new spares, installed lining, removed old refractory, adherent glass and moisture. Its burden is actual capital/maintenance service from cp_assets, not one new lining for each kg of bulb. Physical gross brick mass remains in the separate asset balance.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Cast-iron glass-blowing mould (`mould`)

Actual single cast-iron mould assembly, not the combined iron/copper/aluminium casting family. Record new/old installed and spare item counts and measured mass, repair additions and removals, lubrication and cooling. Allocate actual documented service burden without a fabricated life or per-item kg. Gross physical movements are never scaled by an economic burden share.

- Selected flow: Cast-iron glass-blowing mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Glass-melting furnace (`furnace`)

Actual capital-service equivalent of this one named equipment type. Use the source dataset reference and measured service use over a documented horizon to attribute inherited embodied burden; no fixed lifetime, invented machine mass or one whole machine per kg. Record physical purchases/transfers and opening/closing installed/spare counts and masses separately and unscaled. A mass-basis provider requires measured configuration-specific mass; an item provider uses Item(s), identical to item with factor 1.

- Selected flow: Glass-melting furnace
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Ribbon glass-bulb forming machine (`ribbonmachine`)

Actual capital-service equivalent of this one named equipment type. Use the source dataset reference and measured service use over a documented horizon to attribute inherited embodied burden; no fixed lifetime, invented machine mass or one whole machine per kg. Record physical purchases/transfers and opening/closing installed/spare counts and masses separately and unscaled. A mass-basis provider requires measured configuration-specific mass; an item provider uses Item(s), identical to item with factor 1.

- Selected flow: Ribbon glass-bulb forming machine
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Glass annealing lehr (`lehr`)

Actual capital-service equivalent of this one named equipment type. Use the source dataset reference and measured service use over a documented horizon to attribute inherited embodied burden; no fixed lifetime, invented machine mass or one whole machine per kg. Record physical purchases/transfers and opening/closing installed/spare counts and masses separately and unscaled. A mass-basis provider requires measured configuration-specific mass; an item provider uses Item(s), identical to item with factor 1.

- Selected flow: Glass annealing lehr
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Polyester filter felt (`filter_felt`)

Only an actual dry filter installation uses this single polyester medium; an ESP without it does not. Record composition, coatings, new mass and spent contaminated mass separately. No invented capture efficiency or unspecified filter bundle.

- Selected flow: Polyester filter felt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### Waste flows

##### Elementary flows

###### oxygen (`oxygen_in`)

CAS 7782-44-7, elemental O2 resource from air, not purchased oxygen or a chemical oxygen demand. Collect actual humid-air intake, O2 composition and density/state; combustion, forming and cooling streams are measured independently.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### dinitrogen (`nitrogen_in`)

CAS 7727-37-9, renewable elemental resource from air; despite being found in an emission-worded query it is natively an intake resource. Molecular N2 is not total nitrogen excluding N2, nitrate, NO or NO2. No fixed dry-air composition is imposed.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### argon (`argon_in`)

CAS 7440-37-1, resource from air. Natural argon only; synonym isotope mentions do not authorize argon-41 radioactivity or a cylinder-gas purchase. Measure actual air composition instead of assuming an argon fraction.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Carbon dioxide in intake air (`ambient_co2_in`)

Actual atmospheric CO2 entering this physical control volume, separately tracked from fuel/mineral C. Available fossil/biogenic/correction-resource records do not establish an unqualified ambient mixture; leave unbound.

- Selected flow: Carbon dioxide in intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Water vapour in intake air (`humidity_in`)

Actual gaseous H2O carried by ambient humid air. Record humidity, dry/wet basis, temperature, pressure and intake volume; no liquid-freshwater or density substitution and no extra purchase of an aggregate air flow.

- Selected flow: Water vapour in intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Clear open soda-lime lamp bulb envelope (`first_release`)

First required quality-released clear uncoated open glass bulb blank for subsequent incandescent-lamp assembly: ribbon-blown, detached at the neck, annealed and inspected; no filament, stem, base, electrical function or sealed gas fill. The native Glass (formed & finished) is a broad Product flow on Mass/kg. Its complete record specifies no CAS, composition, grade, detailed article form, production route, geography, provider or optical/electrical property. Its CPC37199 taxonomy neither defines this methodology boundary nor approves a provider. Adopt only the independently evidenced clear uncoated open soda-lime bulb-envelope member: actually ribbon-blown, neck-detached, annealed, inspected and first quality-released for later lamp assembly. Finished here means completed glass-shell manufacture, not a sealed or electrically assembled lamp. Preserve actual drawing, glass composition, open-neck state, tests, route and supplier boundary; generic upstream glass supply cannot substitute those facts. Weigh net glass excluding packaging; reference row is 1 kg and Q counts each cohort exactly once.

- Selected flow: Glass (formed & finished) `82b33e71-bfaa-49b4-9627-ee5963433f6e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `ge-glass-products-1990`; `jrc-glass-bref-2013`; `epa-lamp-glass-1975`

###### Returned non-contact heat-exchange water (`cooling_water_return`)

Only actual external return to a supplier is a Product output, with measured mass, temperature, pressure and enthalpy and the supplier water/energy convention. Internal cooling recirculation cancels. No invented steam, boiler, condensate or automatic heat credit; actual liquid discharge needs its own receiver/treatment or species-specific elementary rows.

- Selected flow: Returned non-contact heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### Waste flows

###### Soda-lime lamp-envelope glass scrap (`glass_reject`)

Actual cullet leaving the external boundary from ribbon web, neck detachment, failed bulbs, startup or testing. Internal clean cullet reuse cancels inside the control volume with inherited burden; never model internal cullet as a second external input or automatic coproduct/avoided glass credit.

- Selected flow: Soda-lime lamp-envelope glass scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Rejected mixed lamp-glass mineral batch (`batch_reject`)

Actual rejected mixed batch is one measured waste stream with measured constituent subledger; it is not a place to hide unlisted purchased ingredients. Identify contamination, moisture and treatment.

- Selected flow: Rejected mixed lamp-glass mineral batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Captured lamp-glass furnace dust (`captured_dust`)

Actual captured multicomponent furnace/batch dust as one physical waste stream; sample its actual oxide/salt/carbon/moisture composition. Internally returned dust retains history and cancels; do not also count its captured mass as an emission.

- Selected flow: Captured lamp-glass furnace dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Lamp-glass cullet-quench wastewater (`effluent`)

Actual oily quench/cleaning effluent to a named treatment receiver; measure whole water plus suspended glass, dissolved substances and oil subaccounts. No acid-frosting fluoride/ammonia recipe, no COD-to-organic-species mass substitution. Offsite treatment is not a second elementary discharge.

- Selected flow: Lamp-glass cullet-quench wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Lamp-glass quench-water sludge (`sludge`)

Actual dewatered treatment sludge with separately measured dry glass/other solids and retained liquid. Deduct removed liquid from its actual receiving water stream once; do not infer both dry solids and water from one residual.

- Selected flow: Lamp-glass quench-water sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Spent polyester filter felt (`spent_felt`)

Actual removed polyester filter medium including independently weighed contamination; conditional on this medium being installed.

- Selected flow: Spent polyester filter felt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Spent glass-furnace refractory brick (`spent_refractory`)

Actual old refractory removed, with adherent glass and free/structural water separated from the new brick service burden. Record destination; no default recovery credit.

- Selected flow: Spent glass-furnace refractory brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Cast-iron glass-mould scrap (`mould_scrap`)

Actual retired cast-iron mould or repair piece, not stainless-steel scrap. Keep full physical mass and historic asset service attribution separately.

- Selected flow: Cast-iron glass-mould scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Used lubricating oil (`spent_oil`)

Native waste stream at point of generation, used and contaminated petroleum/synthetic lubricating oil, treatment unspecified. Record actual drain mass and contaminants; no automatic regeneration/combustion credit or lubricant-water emulsion binding.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fuel`)

CAS124-38-9, actual fossil-fuel CO2 emission to air unspecified. Determine source partition from independent fuel assays and actual reaction/capture evidence, not a default emission coefficient; ambient-throughput and carbonate-derived carbon are separate non-overlapping subaccounts of the measured physical outlet. Isotope/dry-ice synonyms do not change the actual gaseous emission state.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Carbon dioxide from mineral decarbonation (`co2_mineral`)

Actual geological-carbon CO2 emitted; keep carbonate assays, actual reaction extent, retained carbon, dust/liquid carbon and independent outlet measurement. A second unknown source cannot be solved with the same mass residual. Do not silently label geological carbonate carbon as biogenic.

- Selected flow: Carbon dioxide from mineral decarbonation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### carbon monoxide (fossil) (`co_fuel`)

CAS630-08-0, actual fossil CO to air unspecified, separately measured from CO2; not total carbon, VOC, COD or a generic flue-gas product. Liquid-refrigerant synonyms do not describe this hot gas outlet.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### nitrogen monoxide (`nitric_oxide`)

CAS10102-43-9 and molecular NO, air unspecified. Native synonym list contains HNO/nitroxyl wording; the actual NO name and CAS are controlling and must be checked against measurement. Do not fit NO from a NOx-as-NO2 total or a nitrate balance.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Actual molecular NO2, CAS10102-44-0, independently speciated and measured; no N2O, N2 or total-NOx proxy. Retain measured NOx reporting basis as a separate quality indicator without double-counting as another emission.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### sulfur dioxide (`sulfur_dioxide`)

CAS7446-09-5, actual SO2 to air unspecified when sulfur exists and emission is observed. SOx-as-SO2 is an analytical convention, not proof that all sulfur is molecular SO2; independently retain sulfate/retained sulfur and any other real species.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Hydrogen chloride to air (`hydrogen_chloride`)

Only actual HCl from documented chloride-bearing feed or fuel and observed emission. Total chlorine, chlorides in wastewater and a table HCl label do not prove this gas quantity or its compartment.

- Selected flow: Hydrogen chloride to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### oxygen (`oxygen_out`)

CAS7782-44-7, actual remaining O2 emitted to air unspecified. Measure actual oxygen at every exhaust/vent and dry/wet basis; never assume zero oxygen or infer it after fitting water and CO2 simultaneously.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### dinitrogen (`nitrogen_out`)

CAS7727-37-9, molecular N2 to air unspecified, distinct from the resource intake. Resolve actual air throughput, reaction/speciation and non-WIP gas stores; neither NOx nor total-N is N2.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### argon (`argon_out`)

CAS7440-37-1, natural argon to air unspecified. Do not use the separately inspected lower-stratosphere or argon-41 records for a factory outlet. Actual subcompartment must be replaced when known more specifically.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Atmospheric carbon dioxide passed through to air (`ambient_co2_out`)

Actual ambient-source CO2 in the physical outlet, separate from fuel and mineral-source CO2. Reconcile intake, release and actual storage/uptake; no negative-production credit from assumed air throughput.

- Selected flow: Atmospheric carbon dioxide passed through to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### water vapour (`water_vapour_out`)

CAS7732-18-5, gaseous H2O to air unspecified. Independently reconcile intake humidity, real fuel-reaction water, free/structural/carrier water, evaporation, condensate and retained water; source parts sum to one outlet, not duplicated emissions. Native water/ice/heavy-water synonyms are not evidence for another phase or isotope.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### Soda-lime glass particulate to air (`glass_particulate`)

Actual chemically characterized post-melt glass dust with measured size distribution and destination. Do not relabel generic total particulate as pure SiO2, PM2.5 or a specific boron/metal species. Actual raw-batch dust requires separate rows for each emitted constituent rather than hiding in this glass-only row.

- Selected flow: Soda-lime glass particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

### Process: Post-release service (`service`)

This service uses the same original first-release cohort identifiers. Physical FG and packaging gross ledgers remain separate; internal transfer Q cancels on consolidation.

#### Inputs

##### Product flows

###### corrugated board boxes (`carton_purchase`)

Conditional single complete corrugated transport box; native at-plant technology mix fixes 16.6% primary and 83.4% recycled fibre. The recovery provenance in the native comment does not establish this supplier or add a factor. Match actual fibre mix and composition or replace this identity; no whole packaging-bundle exception. Actual new purchase only; source-supplied attached packaging is separately received without a second purchase.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### corrugated board boxes (`carton_supplier_included`)

Conditional single complete corrugated transport box; native at-plant technology mix fixes 16.6% primary and 83.4% recycled fibre. The recovery provenance in the native comment does not establish this supplier or add a factor. Match actual fibre mix and composition or replace this identity; no whole packaging-bundle exception. Actual supplier-included physical packaging received, carrying only the provider boundary burden not already included upstream; do not repurchase.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### corrugated board boxes (`carton_external_return_received`)

Conditional single complete corrugated transport box; native at-plant technology mix fixes 16.6% primary and 83.4% recycled fibre. The recovery provenance in the native comment does not establish this supplier or add a factor. Match actual fibre mix and composition or replace this identity; no whole packaging-bundle exception. Actual external empty return received, linked to the original reusable cohort and its remaining service vector; not a new purchase or new bulb output.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Polyethylene film (`pefilm_purchase`)

Conditional single supplied PE film, CAS9002-88-4, at-plant production mix; branching/grade unspecified. The luggage/leather taxonomy is isolated from the physically consistent PE name/CAS/comment. PET is mentioned as a competing material, not this film identity. Verify actual polymer, additives, thickness, supplier and layer construction; no PET or multilayer substitution. Actual new purchase only; source-supplied attached packaging is separately received without a second purchase.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Polyethylene film (`pefilm_supplier_included`)

Conditional single supplied PE film, CAS9002-88-4, at-plant production mix; branching/grade unspecified. The luggage/leather taxonomy is isolated from the physically consistent PE name/CAS/comment. PET is mentioned as a competing material, not this film identity. Verify actual polymer, additives, thickness, supplier and layer construction; no PET or multilayer substitution. Actual supplier-included physical packaging received, carrying only the provider boundary burden not already included upstream; do not repurchase.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Polyethylene film (`pefilm_external_return_received`)

Conditional single supplied PE film, CAS9002-88-4, at-plant production mix; branching/grade unspecified. The luggage/leather taxonomy is isolated from the physically consistent PE name/CAS/comment. PET is mentioned as a competing material, not this film identity. Verify actual polymer, additives, thickness, supplier and layer construction; no PET or multilayer substitution. Actual external empty return received, linked to the original reusable cohort and its remaining service vector; not a new purchase or new bulb output.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Wooden glass-envelope shipping pallet (`pallet_purchase`)

Actual complete reusable wooden pallet. The inspected lumber-mill record says boards/slats and has electrical-energy taxonomy: the form ambiguity prevents silently treating it as a complete pallet. Record species, moisture, metal fasteners and actual repairs; add each real new repair material and retired piece separately. No fixed reuse count. Actual new purchase only; source-supplied attached packaging is separately received without a second purchase.

- Selected flow: Wooden glass-envelope shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Wooden glass-envelope shipping pallet (`pallet_supplier_included`)

Actual complete reusable wooden pallet. The inspected lumber-mill record says boards/slats and has electrical-energy taxonomy: the form ambiguity prevents silently treating it as a complete pallet. Record species, moisture, metal fasteners and actual repairs; add each real new repair material and retired piece separately. No fixed reuse count. Actual supplier-included physical packaging received, carrying only the provider boundary burden not already included upstream; do not repurchase.

- Selected flow: Wooden glass-envelope shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Wooden glass-envelope shipping pallet (`pallet_external_return_received`)

Actual complete reusable wooden pallet. The inspected lumber-mill record says boards/slats and has electrical-energy taxonomy: the form ambiguity prevents silently treating it as a complete pallet. Record species, moisture, metal fasteners and actual repairs; add each real new repair material and retired piece separately. No fixed reuse count. Actual external empty return received, linked to the original reusable cohort and its remaining service vector; not a new purchase or new bulb output.

- Selected flow: Wooden glass-envelope shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Alternating current (`service_electricity`)

Actual post-release storage, packaging, handling and dispatch service energy over an observed horizon, attributed to the original released cohort; no new production Q. Same conditional CN 1–35 kV consumer grid-average supply and Net calorific value/MJ restrictions as manufacture electricity, repeated here for consumers. Convert metered kWh ×3.6 once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### corrugated board boxes (`carton_gross_out`)

Conditional single complete corrugated transport box; native at-plant technology mix fixes 16.6% primary and 83.4% recycled fibre. The recovery provenance in the native comment does not establish this supplier or add a factor. Match actual fibre mix and composition or replace this identity; no whole packaging-bundle exception. Actual physical package leaving with gross shipments, including any re-delivery; do not scale this mass by net Q or economic allocation.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### corrugated board boxes (`carton_return_sent`)

Conditional single complete corrugated transport box; native at-plant technology mix fixes 16.6% primary and 83.4% recycled fibre. The recovery provenance in the native comment does not establish this supplier or add a factor. Match actual fibre mix and composition or replace this identity; no whole packaging-bundle exception. Actual separate return sent to an external party; distinguish from gross shipment and internal reuse.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Polyethylene film (`pefilm_gross_out`)

Conditional single supplied PE film, CAS9002-88-4, at-plant production mix; branching/grade unspecified. The luggage/leather taxonomy is isolated from the physically consistent PE name/CAS/comment. PET is mentioned as a competing material, not this film identity. Verify actual polymer, additives, thickness, supplier and layer construction; no PET or multilayer substitution. Actual physical package leaving with gross shipments, including any re-delivery; do not scale this mass by net Q or economic allocation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Polyethylene film (`pefilm_return_sent`)

Conditional single supplied PE film, CAS9002-88-4, at-plant production mix; branching/grade unspecified. The luggage/leather taxonomy is isolated from the physically consistent PE name/CAS/comment. PET is mentioned as a competing material, not this film identity. Verify actual polymer, additives, thickness, supplier and layer construction; no PET or multilayer substitution. Actual separate return sent to an external party; distinguish from gross shipment and internal reuse.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Wooden glass-envelope shipping pallet (`pallet_gross_out`)

Actual complete reusable wooden pallet. The inspected lumber-mill record says boards/slats and has electrical-energy taxonomy: the form ambiguity prevents silently treating it as a complete pallet. Record species, moisture, metal fasteners and actual repairs; add each real new repair material and retired piece separately. No fixed reuse count. Actual physical package leaving with gross shipments, including any re-delivery; do not scale this mass by net Q or economic allocation.

- Selected flow: Wooden glass-envelope shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Wooden glass-envelope shipping pallet (`pallet_return_sent`)

Actual complete reusable wooden pallet. The inspected lumber-mill record says boards/slats and has electrical-energy taxonomy: the form ambiguity prevents silently treating it as a complete pallet. Record species, moisture, metal fasteners and actual repairs; add each real new repair material and retired piece separately. No fixed reuse count. Actual separate return sent to an external party; distinguish from gross shipment and internal reuse.

- Selected flow: Wooden glass-envelope shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

##### Waste flows

###### Discarded corrugated board boxes (`carton_waste`)

Conditional single complete corrugated transport box; native at-plant technology mix fixes 16.6% primary and 83.4% recycled fibre. The recovery provenance in the native comment does not establish this supplier or add a factor. Match actual fibre mix and composition or replace this identity; no whole packaging-bundle exception. Actual retired packaging waste with contamination and moisture separately measured, destination recorded, no automatic recycling credit.

- Selected flow: Discarded corrugated board boxes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Discarded Polyethylene film (`pefilm_waste`)

Conditional single supplied PE film, CAS9002-88-4, at-plant production mix; branching/grade unspecified. The luggage/leather taxonomy is isolated from the physically consistent PE name/CAS/comment. PET is mentioned as a competing material, not this film identity. Verify actual polymer, additives, thickness, supplier and layer construction; no PET or multilayer substitution. Actual retired packaging waste with contamination and moisture separately measured, destination recorded, no automatic recycling credit.

- Selected flow: Discarded Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Discarded Wooden glass-envelope shipping pallet (`pallet_waste`)

Actual complete reusable wooden pallet. The inspected lumber-mill record says boards/slats and has electrical-energy taxonomy: the form ambiguity prevents silently treating it as a complete pallet. Record species, moisture, metal fasteners and actual repairs; add each real new repair material and retired piece separately. No fixed reuse count. Actual retired packaging waste with contamination and moisture separately measured, destination recorded, no automatic recycling credit.

- Selected flow: Discarded Wooden glass-envelope shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Broken released soda-lime lamp envelope (`service_glass_breakage`)

Actual post-release broken glass as waste; keep original cohort manufacturing history and observed incremental handling, collection and disposal burden. Do not subtract it from first-release production Q or spread historic burden to unrelated current production. Returned/retested/reworked released bulbs are not new output. Any real added or removed glass, water or parts must be measured and linked to the original cohort.

- Selected flow: Broken released soda-lime lamp envelope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_scope` | attributional inventory | Apply this hierarchy only to the declared attributional case where allocation is methodologically required; document why other ILCD situations/system-expansion provisions are outside this task. This is a multifunctional-process assessment, not a multifunctional-product QFD comparison. First assign dedicated operations and use actual subdivision or justified virtual subdivision before any shared remainder. | `ilcd-allocation-2010` |
| `allocation_causality` | each shared exchange | For every remaining shared exchange identify the determining physical causal relationship to each output/function. Embodied batch material follows actual composition; heat follows demonstrated thermal need when determining; equipment/space service may need actual use/time and capacity. Do not pick one mass/economic key for all exchanges or assume the illustrative checklist establishes causality. Keep gross physical balances unchanged by burden allocation. | `ilcd-allocation-2010` |
| `allocation_residual` | genuine remaining common process | Only a genuinely indivisible residual without defensible determining physical causality may use contemporaneous market values of co-functions at the same common process gate and actual state, quantity and quality. Strip later packaging, delivery, upgrading and service costs from downstream prices and disclose uncertainty; no arbitrary fixed share, default credit, automatic economic switch, or negative-waste adjustment. If this evidence is absent retain a methodology hold for that remainder. | `ilcd-allocation-2010` |
| `allocation_cullets_service` | cullet and cohort services | Internal return cullet carries its actual inherited exchange vector and cancels with the matching internal input. External waste status, recovery gate and any real coproduct function require evidence; no avoided-virgin credit. Attribute rework/failure to the originating production cohort. Post-release handling/returns/repair/breakage retain original FG history and add only observed incremental service burden to the same original cohort; do not borrow unrelated current Q. | `ilcd-allocation-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first_release | release and calibrated net weighing | cohort ID; first release timestamp; configuration; open neck condition; annealing and stress/geometry/defect tests; gross tare net kg; exclusions; first release counted flag | Calibrated batch or individual net weighing with packaging tare; link actual required glass quality test release to a unique cohort. Rejects/retests and re-deliveries do not add Q. | kg | each release | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | scale calibration; test release; cohort uniqueness |
| cp_mfg | manufacture | each purchased material and supplied formulation | receiving batch weigh and recipe | row ID; supplier lot; actual grade route assay full supply mass; water state; raw unit; stage; gross receipt return loss; opening closing raw WIP non-WIP stores; each exchange inherited vector; zero/failure/rework flag | Reconcile receipts and source-stage scales with actual recipe and whole supplied formulations. Preserve original units and all failed/idle/cleanup records; separately measure composition and water. | row native unit | each lot and shift | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | invoices; SDS assay; stage weights; stock/history reconciliation |
| cp_energy | manufacture | gas and electricity separately | meter and fuel assay | row ID; meter start end integrated quantity or rate series; original unit; LHV HHV; gas composition density temperature pressure; kWh; stage; idle startstop failure; attribution evidence | Read calibrated source-stage meters. Integrated gas/liquid volumes are already quantities; integrate only actual rates. Obtain each material density independently at measured state. | row native unit | each interval and shift | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | calibration; interval completeness; assay; voltage and supplier evidence |
| cp_water | manufacture | water intake and actual external return | meter and state balance | water source; gross supplied volume mass; temperature pressure density enthalpy; batch cooling quench cleanup; internal recirculation; evaporation condensation; retained fluid stocks; receiver and supplier convention | Separate supply, internal circulation, real external return and discharge. Measure each stream state and retained inventory, not assumed steam/condensate. | row native unit | each interval | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | meter logs; independent density; destination agreements; mass/heat balance |
| cp_species | manufacture | each actual intake and emitted species | speciated sampling and integrated flow | row ID; species CAS phase; inlet outlet compartment; gas volume or rate; dry wet basis; humidity oxygen; temperature pressure; concentration; detection limit uncertainty; independent element assay reaction extent condensate stores | Sample and measure each real species independently with matched outlet/inlet volume. Convert units and dry/wet/state basis before attribution; verify total wet mass and elements with independent evidence. No COD/VOC/NOx/total-B inference to a species. | kg | each actual outlet interval | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | speciation; matched concentration flow; state correction; independent C N S Cl water evidence |
| cp_waste | manufacture | each actual waste stream | transfer weight treatment manifest | row ID; whole wet mass; independently measured dry solids liquid and species; internal return; external receiver; treatment boundary; zero output failure; stock history | Weigh actual external waste and sample its composition; cancel internal returns only against matching quantities and inherited vectors. Retain treatment provider and transport coverage. | kg | each transfer | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | weighbridge; laboratory; transfer receiver; internal-loop closure |
| cp_assets | manufacture | each equipment and fluid stock | asset service and physical ledger | asset ID; actual configuration; installed spare counts and measured masses; opening closing physical stores; new purchases; repairs new components removed old parts; real wood/free/structural water; installed fluid fill drain leak; each exchange historical vector; provider reference; observed use horizon and service driver | Reconcile unscaled physical movements for each named asset/fluid independently; determine actual consumed service from inherited embodied exchange vectors and observed operation or justified causal use. If records already measure corrected consumption do not correct twice. No fixed life or guessed item mass. | row native unit | each movement and service interval | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | asset register; measured masses; maintenance; service horizon; vector conservation |
| cp_pack | service | each material and six gross movements | package physical and burden ledger | material ID; complete formulation; moisture; supplier included or new; return received; gross shipment out; separate return sent; waste; opening closing empty attachedWIP attachedFG reusable stocks; repairs and old pieces; original cohort; inherited service vector | Reconcile each material mass/count/moisture independently with boundary_pack. Incoming supplier-paid packaging is not repurchased; internal reuse is not an external movement. Measure actual wood and repairs only when present. | kg | each movement | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | purchase/return/shipping weights; mutually exclusive stocks; cohort match |
| cp_service | service | post-release energy and breakage | observed service horizon | original release cohort; original Q; observation start end; actual incremental raw energy; gross FG movement; returns modifications added removed glass water parts; breakage; original burden vector; service numerator | Follow each released cohort through actual storage, handling, delivery and returns; retain original manufacturing burden and measure only incremental service. Do not use unrelated current Q or count a second release. | row native unit | each event | Complete consecutive representative production period; services retain actual original-cohort observation horizon | All actual lines/outlets including startstop failure cleanup | per 1 kg reference flow | cohort trace; actual horizon; energy and FG reconciliation |

The aggregation_rule column states the final reporting basis and references the sole normalization below; it never instructs division during collection. collection_method and raw_fields always collect unnormalised raw quantities.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | Convert each original row unit to its extensive quantity. Integrate actual rates only; integrated quantities gain no time factor. Convert mass with that substance own state density; electricity kWh×3.6=MJ, fuel heat uses independent actual composition and calorific value. Keep mass, heat and service equivalents in distinct fields. | raw_fields; cp_energy; cp_water; cp_species; cp_assets | converted_raw_j | `jrc-glass-bref-2013` |
| attribute_numerator | all inventory rows | Manufacturing A_j is current dedicated and actually allocated quantity/burden plus inherited opening raw/WIP/unassigned non-WIP vectors minus matching closing raw/WIP/unassigned non-WIP vectors; cancel only actual history-matched transfers. Released closing FG is excluded from manufacturing Bclose. Service A_j is only observed actual incremental quantity/burden attributed to the original cohort; carry original FG manufacturing history separately without manufacturing it again. Separate asset service from gross physical stocks; packaging physical movements receive no burden-share scaling. | converted_raw_j; cp_mfg; cp_assets; cp_pack; cp_service; allocation_scope; allocation_causality; allocation_residual | A_j | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| normalize_exchange | all inventory rows | q_j = A_j / Q | A_j; Q; cp_release | q_j | `ilcd-allocation-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

Execute normalize_exchange exactly once only when Q>0. Q is the current manufactured cohort first-release net mass or that same original Q for its services. Q=0 retains raw burden and reason without a unit result. Every section6 q_j, protocol aggregation and final table references the same single result; the reference output 1 kg is the unit representation of Q, not an extra closing-FG output.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_source | all source-dependent decisions | Keep original/extraction provenance, page/table context, contrary cases, actual source applicability, raw units and uncertainty. These historical technical sources support qualitative routes; no default numerical recipe, emissions, water, yield or per-item mass. | source-specific reviewed context; foreground collection |
| dq_identity | all UUID-bearing rows | Identity is distinct from provider compatibility and quantities. Preserve every native card restriction and official localized display. An unresolved auxiliary needs a specific name and identity follow-up; unresolved core reference is a true hold. | exact original public flow and support rows; provider scope |
| dq_complete | all raw and burden ledgers | Require complete representative consecutive production including nonproductive intervals; retain configuration/cohort/site/time and detection limits. Missing or unsupported relationships remain unknown and block the affected result. | coverage matrix; calibration; production and stock closure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference and native exchanges | Confirm that the complete native family genuinely admits the actual primary-evidenced open uncoated soda-lime lamp envelope. The broad formed-and-finished glass Product is usable only with all explicit reference/card qualifications and real route/terminal evidence; a generic name or taxonomy alone establishes neither applicability nor provider fit. Feedstock, tube, PV glass and finished-lamp identities cannot substitute this terminal. For every adopted UUID retain all card restrictions, actual type/media/CAS/form/grade/route/geography, exact property-chain evidence and official Chinese display. Unknown core identity prevents usable guidance and mapping acceptance. | `ge-glass-products-1990`; `jrc-glass-bref-2013` |
| `validate_basis` | all inventory rows | Check first-release Q against unique release and net weighing records; reference amount and finished row are 1 kg. Reconcile the complete raw-to-attributed numerator chain, execute normalize_exchange exactly once and verify no protocol/card/aggregation divides again. Q=0 retains raw burden and yields no unit result. | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| `validate_balance` | all physical ledgers | Independently close wet total mass, elements and actual species with uncertainties; verify all start/stop/failure/rework/WIP/FG/non-WIP/asset/fluid states and inherited exchange vectors. A residual is not two measured quantities. For every package material check all six gross movements and mutually exclusive stocks; reconcile separate manufacturing and service gates and cancel internal Q on consolidation. | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| `validate_completeness` | site data | Require all real utilities, full supplied formulations, materials, equipment service, packaging and destinations. Any newly observed ingredient/species/repair component needs its own specific atomic row; not_applicable requires absence evidence, and unknown cannot become zero. Industrial sources supply no allocation approval; source-specific applicability, denominator, case scope and uncertainty remain explicit. | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | After actual data and independent methodology review: upstream envelope supply for lamp manufacturing |
| allowed_use | Only data matching this exact declared terminal state, route and actual supply boundary |
| excluded_use | No equivalence to finished lamps, tubes/sheets, jars/bottles, tableware, frosted/coated, CRT, quartz or PV glass; generic formed glass without the full open-envelope qualifications is outside this method |
| required_metadata | Complete section3 qualifiers and all native card restrictions; attributional situation; actual supply/service providers; release gate cohorts and period |
| required_quality_disclosure | Core/auxiliary identity status, historical technical evidence limits, raw-data quality, physical/species closure, causal allocation, uncertainty and incomplete scope |
| update_trigger | Changed native identity/restrictions; recipe/route/grade, supplier boundary or release-gate change; independent review and new evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `ge-glass-products-1990` | `handbook` | General Electric, GE Glass Products (1990), especially printed/PDF p19 Manufacturing & Quality Control and adjacent tubing/pressed-glass/borosilicate contrasts. Manufacturer original reproduced in a third-party archive, https://www.lamptech.co.uk/Documents/Components/GE%20-%20Lamp%20Components%20-%20Glass%20-%201990%20US.pdf ; retrieved 2026-10-20. | Qualitative open lamp bulb blank terminal, molten-glass ribbon blowing, neck separation and downstream frosting/coating distinction; no contemporary SKU, inventory factor or allocation support. |
| `epa-lamp-glass-1975` | `official_guidance` | US EPA, Development Document for Effluent Guidelines and Standards for the Pressed and Blown Glass Segment of the Glass Manufacturing Point Source Category (1975), Section III and incandescent lamp envelope section, printed pp42–46 and77–79; Figure9 printed p78 (PDF92). https://www.epa.gov/sites/default/files/2019-06/documents/glass-mfg_pressed-blown-glass-segment_dd_1975.pdf ; retrieved 2026-10-20. | Technical raw-material/melt/ribbon/anneal/inspection/shipping route, cullet and oily quench-water branches, separation from acid frosting and final lamp assembly. Historical cases are not current legal limits, recipes, water factors or default yields. |
| `jrc-glass-bref-2013` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Manufacture of Glass, EUR25786 EN (2013), DOI10.2791/69502, sections2.8 and3.7, printed pp65–66 and138–140, Tables3.33–3.34. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf ; original acquired 2026-10-20; reused and re-extracted 2026-10-20. | Technical process decomposition, actual recipe/utility/emission completeness, site-specific downstream branches and tube/ceramic counterexamples. Table3.34 is case-specific per tonne melted glass with oxide equivalents and NOx/SOx reporting bases; no numerical factors adopted. |
| `ilcd-allocation-2010` | `official_guidance` | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March2010, sections7.9.2–7.9.3, printed pp255–268 (PDF275–288), including allocation applicability and multifunctional-product counterexample. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ; original acquired 2026-10-13; reused and re-extracted 2026-10-20. | Only the declared attributional case where allocation is required: subdivision/virtual subdivision, exchange-specific determining physical causality and residual same-gate/state market value with justified scope. No universal mass/economic choice, fixed proportion, automatic substitution or industrial inventory evidence. |
