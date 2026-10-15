---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.bagasse-particleboard-uf
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Uncoated UF-bonded bagasse particleboard

## 1. Scope and Applicability

This PCR covers a fixed product route: uncoated flat particleboard with sugarcane bagasse as the sole lignocellulosic furnish, separately supplied UF resin, ammonium sulfate hardener prepared on site and aqueous paraffin emulsion, consolidated by hot pressing and delivered trimmed and conditioned at the factory gate. Depithing and mechanical particle grading are recorded where used. Untreated furnish is the route covered; hot-water extraction, chemical pretreatment, PF/MUF/pMDI/PU binders, binderless steam-injection, wood blends, flax furnish, bamboo furnish and wood-fibre faces require separate applicability review. Utilities are on-site electricity and, when used, gas/bagasse combustion; purchased heat is outside this route. The identity is not a feedstock selector.

The route is evidenced by the untreated arm of Brito et al. (2021), a laboratory experiment, not an industrial regional average. Its panels failed the cited P2 requirements: its process observations do not certify a marketed board, prescribe a recipe, or establish a modern emission limit. A dataset requires its own intended grade, strength/bond/water-resistance and formaldehyde test evidence. FPL-GTR-80 (July 1994) supplies historical route distinctions only; its summaries do not constitute acquired original trials. Wood particleboard (CPC 31431) and bamboo laminated/veneer panels (31450) have different furnish and architecture. Only a narrower 31433 mapping is proposed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.bagasse-particleboard-uf |
| classification_refs | CPC 3.0 31433; narrower |
| covered_products | Uncoated pure-bagasse UF-bonded flat particleboard |
| excluded_products | Wood particleboard; flax/bamboo boards; bamboo veneer/strip laminates; wood-faced and mixed-furnish boards; MDF; binderless and other binder routes; coated panels |
| representative_product | One declared bagasse board grade and thickness with verified site recipe |
| production_route | Receipt/storage → depithing/grading → drying → UF blending → mat forming/hot pressing → cooling/conditioning → trimming/sanding → packing |
| market_state | Accepted uncoated board at factory gate, packaging excluded from net board quantity |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide uncoated board substrate for the declared non-structural interior application |
| How much | 1 m3 net accepted board volume |
| How well | Declared thickness, density at measured moisture, particle grading, UF formulation and verified grade; no inferred P2 conformity |
| How long or cycle | One factory-gate delivery; no service lifetime asserted |
| reference_flow_link | finished_board |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | fiberboard particleboard `58b62091-9855-4631-9076-823e8ba59238` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Sugarcane species/origin and extraction source; sole bagasse furnish; depithing and particle-size distribution; receipt/press/gate moisture and wet/dry convention; UF solids/formulation/free formaldehyde; hardener and wax formulation; dimensions and density; verified marketed grade/test edition; board facing absent; utility delivery/thermal route; supplier economic status/allocation; reference state/date; packaging outside net board |

The broad Tiangong reference describes adhesive-pressed particles of wood or other lignocellulosic material; this PCR selects its pure-bagasse particleboard subset, not its separately described wood-fibre-faced variant. The UUID establishes physical identity only. A supplying background must independently match the stated bagasse route, condition and volume basis. Missing qualifiers make the foreground package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_volume | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Net solid board volume after trimming at declared gate moisture, not stacked/bulk volume. cp_output measures length × width × thickness for each accepted grade, excludes gaps, rejected boards and packaging. |
| moisture_basis | bagasse_input; bagasse_fuel; raw_fines; trim | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record both wet-basis water fraction w and dry-basis ratio u with explicit methods. Dry solids = wet mass × (1 − w); u = w/(1 − w). Never apply literature moisture or density to site lots. |
| gas_volume | gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Convert metered gas to supplier reference T/P and wet/dry basis with documented composition/compressibility. Unknown background m3 definition prevents quantitative linking. |
| electricity_energy | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The verified electricity property uses MJ; 1 kWh = 3.6 MJ. This is electrical energy, not a combustion heat default. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Bagasse separated by juice extraction at its actual sugar/ethanol supplier, delivered at measured moisture and economic status; supplied chemicals and utilities |
| starting_condition_role | Foreground receipt boundary, not an automatic upstream cut-off |
| product_classification_scope | CPC 3.0 31433; narrower |
| recursive_input_rule | Same-category purchased boards retain their linked upstream dataset; internal rework remains in physical ledger. No infinite expansion and no erased upstream burden. |
| upstream_dataset_requirement | Verified bagasse supply reflecting sugarcane production/extraction and actual allocation or justified waste cut-off; transport, resin, hardener, emulsion, water, electricity and fuels matched to supply bases |
| disclosure | Supplier region/year, competing uses and economic status; allocation rationale; all stage energy/material/emission boundaries and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | bagasse_input; bagasse_fuel | Do not default bagasse to zero upstream burden. Determine sale price/revenue, contractual status, useful fuel or other demand and supplier process purpose. Valuable co-products require the supplier allocation model; genuine discarded waste may use a justified cut-off, while collection/preparation/transport still remain. Disclose displaced boiler fuel in an attributional sensitivity, not an automatic substitution credit. | epa-bagasse-combustion-1996 |
| boundary_stages | manufacturing | Include storage losses, particle preparation, actual drying, all recipe constituents, hot pressing, cooling/conditioning, trimming/sanding, packaging, emission control and wastewater/residue treatment. Identify exact emitting equipment. No wood-panel regional average may replace site bagasse parameters. | brito-bagasse-2021; usda-nonwood-review-1994 |
| boundary_utilities | manufacturing | On-site heat production belongs to the foreground. Keep gas and bagasse combustion separately metered; match boiler type/control to evidence. Internal steam is measured by supply/return enthalpy and condensate balance, not purchased as a second fuel or represented by an unverified MJ steam UUID. Exclude externally purchased heat and on-site firing of cured UF board until route-specific review. | epa-bagasse-combustion-1996; epa-gas-combustion-2026 |
| boundary_extension | manufacturing | Additional observed components, consumables, packaging or pollutants require separate specific atomic exchanges and current identity verification. Absence must be demonstrated; neither blank UUID nor missing measurement is a zero. | brito-bagasse-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacturing | Bagasse board manufacturing, conditioning and packing | required | Covered fixed recipe/route | One aggregated physical foreground unit with stage ledgers | finished_board |

Receipt/storage → depithing/grading → drying → mixing/forming → hot press → conditioning → trim/sand → packing. A conditional on-site boiler supplies measured internal heat to drying/pressing. Subdivision is retained in cp_stage: transfers have equal quantities at both endpoints, actual moisture/state and stage ids. Board transfer between trim and packing is the same material and is internal; only finished_board is a reference product output. Physical material/water/carbon balances precede allocation.

### Process: Bagasse board manufacture (`manufacturing`)

#### Inputs

##### Product flows

###### Bagasse (`bagasse_input`)

Post-juice-extraction sugarcane bagasse for the furnish only; weigh receipt lots with moisture and origin. Exclude separately purchased boiler fuel; record supplier allocation and competing fuel use.

- Selected flow: Bagasse `f13cc16c-a598-48a2-b226-fdd991eac633`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_inputs; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `brito-bagasse-2021`

###### Urea-formaldehyde resin (`uf_resin`)

Purchased UF resin as delivered, not an invented dry-resin equivalent. Record solids fraction, free formaldehyde, supplier formulation and matched background mass basis. Separate contained water in the physical water balance without purchasing it twice.

- Selected flow: Urea-formaldehyde resin `23e41b7b-0991-4cf7-8625-7a30d23bbb27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_recipe; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `brito-bagasse-2021`

###### Ammonium sulphate (`hardener`)

Crystalline ammonium sulfate bought separately and dissolved on site. Weigh the compound, not nitrogen content; dissolution water belongs to water input. No substitution by ammonium chloride.

- Selected flow: Ammonium sulphate `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_recipe; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `brito-bagasse-2021`

###### Paraffin wax aqueous emulsion (`wax`)

Purchased aqueous paraffin emulsion, including its formulation, solids and water. UUID unresolved: neat wax and plastic-recycling wax records are not this exchange. Do not duplicate emulsion constituents as external inputs.

- Selected flow: Paraffin wax aqueous emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_recipe; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `brito-bagasse-2021`

###### Tap water (`water`)

Supplied treated tap water for on-site hardener dissolution, resin dilution, cleaning and boiler make-up; separate stage meters. Use measured water mass or metered volume with measured temperature-dependent density. Internal recycle is not a new input.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_water; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `brito-bagasse-2021`

###### Alternating current (`electricity`)

Grid consumption mix at 1–35 kV at the plant delivery meter. Record stage submetering including screening, drying, blending, pressing, trimming and controls; include on-site transformation losses once. Other delivery voltages require separate verified atomic rows.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange per reference flow; cp_energy; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `brito-bagasse-2021`

###### natural gas in the gaseous state (`gas`)

Conditional pipeline gaseous natural gas burned on site. Reference property is Volume, not Mass. Match meter T/P, wet/dry composition, compressibility and supplier/background m3 convention; an unresolved volume convention blocks that link. Database secondary mass coefficient is not a density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collected exchange per reference flow; cp_energy; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-gas-combustion-2026`

###### Bagasse (`bagasse_fuel`)

Conditional separately received bagasse burned in the on-site boiler; as-fired mass, moisture, calorific basis and supplier burden are measured independently from furnish. Internal unresinated residue firing is a transfer in the physical ledger, not a second purchase.

- Selected flow: Bagasse `f13cc16c-a598-48a2-b226-fdd991eac633`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_energy; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-bagasse-combustion-1996`

###### Low-density polyethylene foil (PE-LD) (`film`)

Conditional LDPE wrapping film leaving with finished boards; packaging mass is outside net reference board volume. Record film grade and disposal separately from other packaging components.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_inputs; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `brito-bagasse-2021`

#### Outputs

##### Product flows

###### fiberboard particleboard (`finished_board`)

Accepted trimmed, conditioned, uncoated UF-bonded pure-bagasse particleboard at factory gate; all preparation, pressing, finishing and packing belong to this same foreground unit. The database broad particleboard identity is constrained by this PCR; no wood-fibre facing is implied.

- Selected flow: fiberboard particleboard `58b62091-9855-4631-9076-823e8ba59238`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_output`
- Sources: `brito-bagasse-2021`

###### Unresinated bagasse pith sold as fuel (`pith_coproduct`)

Conditional depithing output only when sold or deliberately supplied as useful fuel. Weigh actual exported mass and moisture; no automatic avoided-fuel credit. UUID unresolved. Do not also count the same material as discarded fines.

- Selected flow: Unresinated bagasse pith sold as fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_residues; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `brito-bagasse-2021`

##### Waste flows

###### Discarded unresinated bagasse fines (`raw_fines`)

Raw preparation fines discarded off site; physical moisture and destination matter. Captured dust recycled internally is not an exported waste. Sold fuel is pith_coproduct; internal boiler fuel belongs to transfer ledger.

- Selected flow: Discarded unresinated bagasse fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_residues; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `brito-bagasse-2021`

###### UF-bonded bagasse board trimming waste (`trim`)

Cured resin-bearing solid board offcuts and rejects exported for treatment; distinct from raw bagasse. Record resin content and treatment; on-site combustion of cured board is excluded from this route and requires separate combustion evidence.

- Selected flow: UF-bonded bagasse board trimming waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_residues; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `brito-bagasse-2021`

###### Bagasse boiler bottom ash (`ash_bottom`)

Conditional separately weighed bottom ash from bagasse combustion, excluding separately collected fly ash. Ash moisture, leachability and destination are site records; coal or metallurgy residues are rejected UUID proxies.

- Selected flow: Bagasse boiler bottom ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_residues; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-bagasse-combustion-1996`

###### Untreated UF blending and cleaning wastewater (`wastewater`)

Wastewater crossing to off-site treatment, with volume, density, COD and formaldehyde concentration recorded. It is a waste flow, not direct release to a river; direct discharge would require actual elementary species rows and verified receiving medium.

- Selected flow: Untreated UF blending and cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_water; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `brito-bagasse-2021`

###### Discarded unresinated bagasse pith (`pith_waste`)

Conditional depithing pith discarded off site; record actual wet mass and moisture. Mutually exclusive with sold pith and internal boiler transfer for the same lot.

- Selected flow: Discarded unresinated bagasse pith
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_residues; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `brito-bagasse-2021`

###### UF-bonded bagasse board sanding dust (`cured_dust`)

Resin-bearing fine dust captured at cured board sanding, exported for treatment; distinct from solid board offcuts, raw fines and uncaptured elementary PM.

- Selected flow: UF-bonded bagasse board sanding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_residues; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `brito-bagasse-2021`

###### Bagasse boiler fly ash (`ash_fly`)

Conditional captured bagasse boiler fly ash exported for treatment; record moisture and destination separately from bottom ash and stack PM.

- Selected flow: Bagasse boiler fly ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_residues; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `epa-bagasse-combustion-1996`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Non-overlapping PM2.5 mass escaping capture to outdoor air; stage-tag raw preparation, dryer, press, trim and boiler separately.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-bagasse-combustion-1996`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Only particles above 2.5 and up to 10 micrometres. Calculate from compatible paired cumulative PM10 and PM2.5 observations; never add cumulative PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-bagasse-combustion-1996`

###### particles (> PM10) (`pmover10`)

Only particles above 10 micrometres. Compatible total filterable PM minus cumulative PM10; missing size distribution remains a data gap, not a zero. Condensable PM scope must be reconciled.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-bagasse-combustion-1996`

###### formaldehyde (`formaldehyde`)

Formaldehyde species mass to outdoor air from UF blending, hot press, cooling and conditioning, with boiler contributions separately tagged. Chamber content tests are not stack mass factors.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `brito-bagasse-2021`

###### methanol (`methanol`)

Methanol species mass measured at emitting stages; no substitution by total VOC, TOC or methanol-containing product supply.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion-2026`

###### carbon dioxide (biogenic) (`co2bio`)

Biogenic CO2 from measured bagasse fuel oxidation and verified storage degradation. Keep in LCI independently of GHG characterization conventions; carbon uptake upstream is not booked again at board receipt.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-bagasse-combustion-1996`

###### carbon dioxide (fossil) (`co2fossil`)

Fossil CO2 from natural gas and any verified fossil carbon oxidation, excluding fuel/energy already counted in purchased background systems.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion-2026`

###### methane (biogenic) (`ch4bio`)

Biogenic methane from incomplete bagasse combustion or evidenced anaerobic storage; origin and physical stage must be demonstrated.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-bagasse-combustion-1996`

###### methane (fossil) (`ch4fossil`)

Fossil methane from incomplete gas combustion and metered/estimated on-site leakage; do not duplicate supplier upstream leakage.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion-2026`

###### carbon monoxide (biogenic) (`co_bio`)

Biogenic carbon monoxide from bagasse combustion; do not pool with fossil CO.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-bagasse-combustion-1996`

###### carbon monoxide (fossil) (`co_fossil`)

Fossil carbon monoxide from gas combustion; separate from biogenic CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion-2026`

###### nitrogen monoxide (`nitric_oxide`)

Nitrogen monoxide species mass only. Aggregate NOx reported as NO2 equivalent does not establish actual NO mass; require measured speciation or preserve unresolved data.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion-2026`

###### nitrogen dioxide (`no2`)

Nitrogen dioxide species mass only; never enter whole NOx-as-NO2 as this row while also entering NO.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion-2026`

###### nitrous oxide (`n2o`)

Nitrous oxide species mass from operating and startup boiler records; distinguish from NO and NO2.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion-2026`

###### sulfur dioxide (`so2`)

Sulfur dioxide species mass, fuel sulfur and actual control condition; do not use total sulfur oxides as exact SO2.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_air; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-bagasse-combustion-1996`

###### water vapour (`water_vapour`)

Water vapour released outdoors, stage-tag drying, press, conditioning and boiler. Record moisture evaporation separately from combustion water; do not invent a steam purchase.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow; cp_water; absent conditional exchange requires evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `brito-bagasse-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_supplier | bagasse_input; bagasse_fuel | Investigate subdivision or system expansion first. This single-board attributional result retains a declared scope without unproven substitution credit. Where allocation remains at sugar/ethanol extraction, use a defensible physical causal relationship before documented economic allocation; justify rejected options and remain consistent with the supplying study. Record all co-product quantities, prices, time window and rationale. Do not derive zero from the word residue or from carbon neutrality. | ec-ef-allocation-2021; epa-bagasse-combustion-1996 |
| allocation_foreground | manufacturing | Separate useful exported pith fuel from discarded raw fines and cured resin waste. Subdivide meters when possible; remaining shared environmental burdens use documented causal allocation or otherwise economic shares from net delivered quantities × consistent prices. Present sensitivity where residue status/prices change. | ec-ef-allocation-2021; epa-bagasse-combustion-1996 |
| allocation_physical | manufacturing | Keep unallocated physical process graph and material/water/carbon balances alongside the allocated environmental burden account. Never multiply co-product physical output or internal transfer mass by an allocation fraction; no internal recycle credit or double burden. | brito-bagasse-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collect one complete representative production year where available, including seasonal sugarcane supply, starts/stops and off-spec production. A shorter complete campaign is allowed only with dates, production coverage, seasonal limitation and uncertainty disclosed. No observed laboratory dose, temperature, cycle time, density, moisture, boiler factor or regional wood-board rate is prescribed here.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | manufacturing | finished_board | Measured primary records | Grade; batch; accepted quantity; length; width; thickness; moisture; density; tests; packaging tare | Calibrated dimension and mass measurements after conditioning; lot acceptance and test records. Compute accepted net board volume; separate grades and rejected boards. | m3 | Every accepted lot | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |
| cp_inputs | manufacturing | bagasse_input; film | Measured primary records | Receipt and stock quantities; supplier/location/year; moisture; extraction route; transport mode/distance/load; contract/value; film grade/mass | Calibrated weighing and matched invoices, receipts, stock reconciliation and supplier inventory. Include inbound transport in each supplied material background or a separately verified transport exchange, once. | kg | Every receipt and stock close | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |
| cp_recipe | manufacturing | uf_resin; hardener; wax | Measured primary records | Delivered and dosed mass; solids fraction; formulation; purity; free formaldehyde; water fraction; losses; supplier reference basis | Batch dosing records, calibrated scales, formulation/SDS and supplier primary records. Verify solids analytically; reconcile received/dosed/stock/lost mass. Record every additional constituent separately. | kg | Every batch | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |
| cp_stage | manufacturing | internal transfers | Measured primary records | Stage id; linked source/destination; wet and dry mass; moisture method; water; carbon fraction; rejects; storage duration; particle grade; press temperature/pressure/time | Weigh and sample at receipt, depithing, dryer inlet/outlet, blending, press exit, conditioning and trim. Record internal recycle/boiler transfers at equal endpoints. Maintain separate raw and resin-bearing residues. | kg | Each stage/batch and period stock close | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |
| cp_energy | manufacturing | electricity; gas; bagasse_fuel | Measured primary records | Delivery voltage; stage meters; kWh; gas m3/T/P/composition/Z; fuel wet mass/moisture/LHV or HHV; boiler type/load/control; steam supply/return mass, T/P/enthalpy; losses | Reconcile plant and stage meters with bills and fuel stocks; measure drying and press cycles independently. Steam heat is mass × supply-minus-return enthalpy with condensate/blowdown/loss reconciliation, not fuel energy or gross steam enthalpy. | MJ; m3; kg | Continuous meters and every fuel lot | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |
| cp_residues | manufacturing | pith_coproduct; pith_waste; raw_fines; trim; cured_dust; ash_bottom; ash_fly | Measured primary records | Stage; actual mass/moisture; resin content; raw/cured state; internal recycle; export destination; treatment; contract/revenue | Calibrated bins/scales and dispatch/treatment receipts. Identify bottom and fly ash streams and sum only compatible ash records. Separate sold pith from discarded fines and on-site transfers. | kg | Each discharge/dispatch | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |
| cp_water | manufacturing | water; wastewater; water_vapour | Measured primary records | Stage water supply; emulsion/resin water; bagasse moisture; product water; wastewater volume/density/composition; evaporation; boiler combustion water; stocks; recycle | Meter external water and effluent; sample densities/concentrations; close stage water balance after measured retained water and stocks. Derive evaporation only with bounded uncertainty; report unexplained residual, do not force closure. | kg | Continuous meters; stage/batch sampling | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |
| cp_air | manufacturing | elementary emissions | Measured primary records | Physical stage/source; species; biogenic/fossil origin; outdoor subcompartment; exhaust flow; temperature/pressure; dry/wet basis; concentration; test duration; production; control; starts/stops; PM fractions | Representative source testing and activity logs after controls, including fugitive emissions. Sum concentration × compatible exhaust volume for each stage/species. Document uncertainty and speciation; chamber grades and aggregate VOC/NOx cannot substitute for species. Carbon balance may estimate origin-specific CO2 only after other carbon outputs/stocks are measured. | kg | Representative operating modes plus continuous logs | Same complete declared period | Same site and declared recipe/grade | per reference flow | Calibration; traceability; matched stocks and accepted volume; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| volume_normalization | all inventory rows | For each stage-tagged exchange, normalized amount = attributable period quantity / Q_vol; Q_vol = sum of accepted net board dimensions converted to m3 in the same period and grade. Retain gross measured stage totals before environmental allocation. Reference output = 1 m3. | cp_output; cp_inputs; cp_recipe; cp_energy; cp_residues; cp_water; cp_air | Exchange per reference flow | brito-bagasse-2021 |
| physical_balance | manufacturing | Before burden allocation, reconcile whole-stream mass and elemental carbon separately: opening stock + inputs = closing stock + outputs + reported residual, using actual composition and all relevant boundary crossings. Chemical reactions do not generate or consume total elemental carbon. Separately reconcile molecular H2O and reactive wood/resin components using opening stock + inputs + evidenced formation = closing stock + outputs + evidenced consumption + reported residual. Quantify only actual cure/thermal/oxidation pathways and extent; phase changes are transfers, not reactions. A zero reaction term requires evidence of absence; unknown extent remains unresolved, with no assumed full cure, generic yield or balancing emission. Track retained binder/additives and wood versus fossil carbon separately. Internal transfers cancel only with matched endpoints; measured outputs containing reaction products are counted once. Keep uncertainty explicit and do not apply burden shares to physical outputs. Keep boiler fuel, combustion air/oxygen and combustion products in a separate stage ledger; fuel oxidation is not unexplained furnish loss. | cp_stage; cp_recipe; cp_water; cp_residues; cp_air | Unallocated stage and whole-site balances with residual uncertainty | brito-bagasse-2021 |
| burden_allocation | manufacturing | Environmental burden for board = directly attributable burden + justified share × shared burden. Economic share, when needed, = board revenue / total useful-output revenue on matched net quantities/prices; include pith only when economically useful. Divide the assigned burden by Q_vol, retaining physical exports unchanged. | cp_inputs; cp_output; cp_residues; supplier allocation | Allocated burden per reference flow plus sensitivity | ec-ef-allocation-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | manufacturing | Same sole-bagasse furnish, binder/hardener/wax route and declared market grade; test failures remain visible. | cp_recipe; cp_output |
| quality_period | manufacturing | Synchronize production, recipe, meters, emissions and stock periods; segregate grade and season; disclose missing modes. | cp_stage; cp_energy; cp_air |
| quality_background | all supplied flows | UUID identity success is not a complete background match. Confirm supplier geography/time, route, moisture/concentration, quantity and transport boundary before linking. | cp_inputs; cp_recipe; cp_energy |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_board | Require one reference output of 1 m3 net board and all qualifiers; reject wood/fibre-faced, flax, bamboo and mixed-furnish substitution or grade conformity inferred from a laboratory study. | brito-bagasse-2021 |
| validate_atomic | all inventory rows | Every row is one atomic flow with verified property/unit and physical stage. UUID gaps require explicit review; no nearby product, correction flow or wrong medium is acceptable. Additional site exchanges must be declared separately. | brito-bagasse-2021 |
| validate_balance | manufacturing | Require matched internal transfer endpoints and finite unallocated dry-solids/water/carbon balances with uncertainty, and a separate allocated burden ledger. Internal residues cannot appear as both new fuel purchase and recycled transfer. | brito-bagasse-2021 |
| validate_emissions | elementary emissions | Use outdoor-air unspecified flows only while finer outdoor location is uncharacterized, disclosed as a limitation; finer known subcompartment requires verified replacement. Keep PM2.5, 2.5–10 and >10 as mutually exclusive intervals; never add nested PM10/TSP again. Require actual NO/NO2 speciation, species mass and carbon origin. Retain biogenic CO2 in LCI; missing measurements or factors remain gaps. | epa-bagasse-combustion-1996; epa-gas-combustion-2026 |
| validate_supply | gas; uf_resin; bagasse_input; wax | Block quantitative use where gas reference m3, resin/emulsion concentration or bagasse moisture/upstream economic status is unknown. Do not claim zero burden, generic density, net heat from an MJ label, or a species emission from a reporting equivalent. | epa-bagasse-combustion-1996; epa-gas-combustion-2026 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to an interior product model after applicability review; candidate methodology does not approve a dataset |
| allowed_use | Declared pure-bagasse UF board, same factory-gate state and verified quantity/grade |
| excluded_use | All 31433 products as one identity; wood/ bamboo plywood proxy; automatic lifetime/end-of-life credit; compliance claims from laboratory tests |
| required_metadata | Site/period/grade/route; all reference qualifiers; supplier/status/allocation; verified backgrounds and transport; original unallocated stage ledgers; normalization volume |
| required_quality_disclosure | Coverage and exclusions; missing UUIDs/quantities; measurement uncertainty; outdoor compartment limitation; allocation sensitivity; scientific and translation review state |
| update_trigger | Feedstock origin/economic status, binder/formulation, pretreatment, fuel/utility/controls, specification or temporal coverage changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ec-ef-allocation-2021` | official_guidance | European Commission, C(2021) 9332 final, Annex I §4.5, printed pp.63–64. [Official annex original](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf). | General multifunctionality hierarchy and relative-market-value allocation basis only; no claim of full PEF conformity, sector factors or circular-footprint defaults. |
| `brito-bagasse-2021` | literature | Brito, Bortoletto Júnior and Surdi (2021), Properties of particleboards made from sugarcane bagasse particles, Rev. Bras. Cienc. Agrar. 16(1), e8783. DOI:10.5039/agraria.v16i1a8783. [Publisher original](https://www.agraria.pro.br/ojs32/index.php/RBCA/article/download/v16i1a8783/158/715), pp.1–3, 6. | Original pure-bagasse laboratory route with untreated and hot-water-treated arms; UF/ammonium sulfate/paraffin, drying, pressing and measured conditioning. P2 failure preserved; no dose, moisture, density or press defaults. |
| `usda-nonwood-review-1994` | official_guidance | Youngquist et al., July 1994, Literature review on use of nonwood plant fibers for building materials and panels, FPL-GTR-80, printed p.7, entries 31–34. [Forest Service original report](https://research.fs.usda.gov/download/treesearch/9668.pdf). | Historical literature-review distinctions and depithing/drying/adhesive/hot-press prompts only. Summarized Hesch trials not acquired; no industrial values or standards adopted. |
| `epa-bagasse-combustion-1996` | official_guidance | US EPA, AP-42 1.8 Bagasse Combustion In Sugar Mills, October 1996, pp.1.8–1–1.8–4, §§1.8.1–1.8.4 and Table 1.8–1 footnotes. [Original](https://gaftp.epa.gov/ap42/ch01/s08/final/c01s08_oct1996.pdf). | Actual useful fuel status, boiler/fuel/control and pollutant separation. US sugar-mill scope; fuel/steam factor bases are not transferred to board production. |
| `epa-gas-combustion-2026` | official_guidance | US EPA, AP-42 1.4 Natural Gas Combustion, acquired document header 10/26, pp.1.4–1–1.4–3, §§1.4.1–1.4.3 and factor disclaimer. [Original](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf). | Natural-gas boiler emission species and operating/control dependence; source testing preferred. No factor or heating-value default and no legal compliance threshold adopted. |
