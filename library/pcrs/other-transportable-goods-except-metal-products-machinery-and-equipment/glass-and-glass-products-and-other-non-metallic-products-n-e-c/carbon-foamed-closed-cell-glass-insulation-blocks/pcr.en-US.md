---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.carbon-foamed-closed-cell-glass-insulation-blocks
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Carbon-foamed closed-cell glass insulation blocks and slabs

## 1. Scope and Applicability

This PCR covers one semantic product and material manufacturing need: unfaced closed-cell cellular-glass insulation rectangular blocks/slabs made by melting recycled glass and minerals, cooling and milling the glass with carbon black, filling moulds, thermal cellulation, controlled annealing, cutting/grinding and first quality release. It is a narrower subset of CPC3.0:37117, not the entire mixed classification leaf. Reuse existing compatible glass melting, reference-flow, allocation and data-quality principles, while this powder-reaction/cell-retention/annealing terminal cannot be represented by float-stock sheets, mechanically edge-polished annealed sheets, Danner tube or thermal safety-glass quenching. `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

The complete publisher sources form a transparent technical synthesis without claiming one SKU, factory, recipe or contemporary order. The actual2026 EPD uses1m3 and2023 two-site measured density; this PCR declares1kg net actual product and requires measured geometry/density for transparent volume/service conversion. Historical brochure>66%, current website50% and source ingredient fractions/temperatures are context-specific, not universal recipe, reaction, energy, yield or performance defaults. BAU includes a glycerine/waterglass granulate example and aggregate standard; neither replaces this carbon-black closed-cell block route. Methodology below is attributional and factory production guidance, not EPD programme certification. `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-process-brochure`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.carbon-foamed-closed-cell-glass-insulation-blocks |
| classification_refs | CPC3.0:37117; narrower carbon-black foamed uncoated block subset only; accepted narrower association is governed by classifications/mappings/cpc-3.0-to-pcr.yaml and its decision record; scientific review remains pending |
| covered_products | Uncoated closed-cell cellular-glass rectangular insulation blocks/slabs after full carbon-black foaming route and first quality release |
| excluded_products | Faced or coated boards; granulate/gravel; open-cell acoustic products; cold-bonded agglomerates; glass wool/fibres; pressed solid bricks; insulating glazing; mirrors; stock sheets; tempered panes; installed assemblies; carbonate-only glycerine/waterglass or SiC foaming routes |
| representative_product | One actual declared uncoated closed-cell block/slab configuration at first release; no mandatory brand dimension or recipe |
| production_route | Raw ingredients and cullet → melt → cool → mill with carbon black → mould → foam → anneal → cut/inspect → first release; post-release packing/storage service ledger |
| market_state | Bare unfaced rectangular block/slab after required manufacturing tests at recorded equilibrium surface state; removable packaging separately retained |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a declared uncoated closed-cell cellular-glass insulation material for compatible building applications |
| How much | 1 kg net first-released reference product; service equivalence requires measured dimensions density conductivity and specified duration |
| How well | Actual declared closed-cell structure dimensions density thermal and mechanical performance with test methods and applicable product standard; no generic catalogue default |
| How long or cycle | One manufacturing first-quality-release cycle; no assumed installed service life or automatic comparison across density grades |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glass (formed & finished) `82b33e71-bfaa-49b4-9627-ee5963433f6e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | uncoated closed-cell block or slab and declared function; carbon-black particle grade structure and supplier route; glass constituents and whole supplied forms; cullet origin treatment and burden handover; actual melting milling mould foaming anneal cutting route; density and external dimensions measured for same configuration; thermal and mechanical test method results and applicable product standard; unique first quality release cohort and original Q; equilibrium surface moisture and retained-cell gas state; raw WIP FG and non-WIP charge quantities with exchange history; failure idle start-stop and zero-output coverage; actual gas composition pressure temperature density LHV and meter state; electricity geography voltage mix and provider boundary; independent mass element molecular-species and water-phase evidence; packaging article composition moisture stocks gross movements and real repairs; original delivery reversal and returned FG incremental rework links; actual external water-return state enthalpy and supplier convention; allocation subdivision causality residual gate and period evidence |

Every Required qualifier must be declared in the data package metadata, product description or equivalent fields. This generic formed-glass identity contains no cellular-grade, route, geography or performance restriction; actual closed-cell product context in first_release and this whole scope is mandatory. It supplies no strength, density, thermal conductivity or conformity approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use1kg net actual equilibrated product at first quality release after cutting and required tests. Q is unique first-released mass of the selected cohort. Exclude removable packaging and surface contamination; retain real closed-cell gas and carbon in product mass. |
| volume_conversion | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Mass basis is primary. For requested m3, measure the same actual configuration external volume and net mass under the same state; state measured bulk density and express transparent conversion. Nominal95 or source2023 measured91kg/m3 is not this site density. Do not infer density from an unrelated flow secondary property. |
| single_normalization | all inventory rows | Row-specific physical property | Row-specific physical unit | Keep raw collection undivided. convert_raw and attribute_raw form A_j before normalize_exchange performs A_j/Q once. Inventory and collection basis is per1kg reference flow; cards and aggregation only reference this single result. Q=0 keeps raw burdens and no unit result. Q is measured in kg of reference product; A_j retains its own exchange property and numerator unit. The common denominator yields row unit/kg reference product, including MJ/kg for electricity and m3/kg for natural gas, and never converts every numerator to Mass/kg. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | Include actual virgin minerals and externally supplied compatible cullet with upstream burdens and inbound transport through batch mixing, melting, cooled-glass milling with carbon black, filling steel moulds, thermal cellulation, controlled annealing, rectangular cutting/grinding, inspection and first quality release. Keep each real raw ingredient, fuel, electricity, water, auxiliary and outlet atomic. Purchased finished foam-glass packing alone cannot satisfy this manufacturing scope. | `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-process-brochure` |
| boundary_reference_gate | manufacture and service | Q is the calibrated net mass in kg of unique first-released uncoated closed-cell blocks after required tests, at declared equilibrium condition. Retained cell gases and residual carbon belong to actual product mass; removable packaging does not. Failed lots and pre-release destructive samples do not enter Q; their real burdens remain. Newly released closing FG is already included in Q. Delivery, reinspection, repair, return and later shipment do not create production. The reference row is first_release only. | `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |
| boundary_stocks | all inventory rows | Retain full representative period, start/stop, zero-output, idle, cleaning, failures and rework. Measure opening/closing raw materials, melt, powder and block WIP and non-WIP charges of oil, cooling water and other actual fluids separately. Each stock has its own physical quantity and exchange-specific inherited burden vector. Keep any included mould/tool/equipment asset physical stock separate from its documented remaining and consumed service vectors, with no invented life or repeated whole-asset procurement. Manufacture closing contains only unreleased raw/WIP and unassigned charge/service inventory, not already first-released FG. Raw meter consumption already corrected for charge change is not adjusted again. Internal scrap returns and interstage transfers cancel in consolidation and never become new purchases. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| boundary_fg_services | service | Keep physical receipts from first release, opening/closing FG by cohort, gross dispatch, external returns received, original-delivery reversals, standalone external returns sent, breakage and real repair additions/removals, moisture and gas changes. Returning or reworked FG retains its original release and inherited vector. Service burdens are assigned to the original served release cohort using its original Q, with actual incremental repair only; older FG and reversals cannot be transferred to unrelated current Q. Manufacturing transfers and service receipts cancel when consolidated. Already performed original-cohort service remains in its A_j even when goods stay in closing FG. No net-delivery denominator is substituted. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| boundary_species | manufacture and service | Keep full physical mass and C/S/N/O/H and other relevant elements independently from reaction-species and phase evidence. Include actual gross wet air inlet/outlet with each gas separately, product-retained gas/carbon, offcuts, dust and treatment outlets. Do not fit two unknowns with one residual, infer a gas reaction yield from cell density, turn NOx/COD/VOC into named chemical mass, or treat cell gas as a new external purchase. Actual additional raw materials, scrubber reagents, filter consumables, repair parts and newly detected species require separate cards and collection before completion; no other-flow bundle or unsupported zero. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| boundary_supply | all inventory rows | Every whole purchased preparation, mineral, article or supplied mixture is one purchase of the complete delivery state; assay, carrier water and active substance are constituent subaccounts, never additional purchases of the same material. Removable transport packaging has its own physical receipt ledger; identify supplier-included burden and do not purchase that embodied burden twice. Actual on-site formulation uses each bought ingredient with real mixing energy, loss and water. Match all native UUID restrictions and provider geography, route, form, medium and reference property; unidentified aux UUIDs do not remove exchanges. Disclose upstream recovery/end-of-waste and burden handover rather than assuming recycled input is free or crediting offcuts. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| boundary_water_heat | manufacture and service | Distinguish supplied water, carrier/free/structural/reaction water, wet sludge and actual atmospheric humidity and condensate origin. Use independently measured substance-specific density and thermal state; a liquid/gas integrated volume is already an amount, whereas only a true rate is integrated over time. Actual external heat-exchange water/condensate returns are Product exchanges at measured temperature/enthalpy under the supplier water-energy convention. Do not invent a steam system, boiler, condensate yield, exported heat or automatic energy credit from a recovery arrow. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| boundary_exclusions | dataset applicability | Exclude coated/faced/bituminous boards, aggregate/gravel, fibre wool, open-cell acoustic foam, cold-bonded glass agglomerates, insulating glazing units, pressed solid glass bricks, mirrors, tempering and installed systems. Carbonate-only, glycerine/waterglass or SiC foaming is not this carbon-black route. Ordinary surface trimming remains included; actual changed core chemistry/forming requires new applicability assessment. The source EPD cradle-to-grave modules and BAU programme declarations do not turn this manufacturing PCR into a complete EPD or authorize module-D credit. | `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual separate whole mineral/salt/carbon-black supplies and compatible recovered cullet with documented recovery state and upstream burden handover at receiving gate; full on-site glass and cellular-block manufacture |
| starting_condition_role | Upstream purchased material inputs with inherited burdens plus actual full foreground manufacture; not finished-block repacking |
| product_classification_scope | CPC3.0:37117; narrower carbon-black foamed closed-cell uncoated slab/block |
| recursive_input_rule | Internal scrap retains original burden vector and cancels. External same-category returned or recycled blocks require actual physical state and recovery processing with documented burden handover; never silently zero-burden virgin replacement |
| upstream_dataset_requirement | Match each complete supplied material/utility/article and external recovery/transport/treatment route state geography and reference property; preserve per-exchange history |
| disclosure | Declare full raw-to-first-release route plus distinct post-release service scope and original cohort denominator. No manufacturing cutoff, installed lifetime or automatic EPD/moduleD claim |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Integrated batch melting milling carbon foaming annealing cutting and quality release | required | Full actual raw-to-terminal route with all failure and stock records | foreground | first_release |
| service | Post-release packaging warehousing handling and dispatch | required | Actual recorded services and gross physical movements assigned to original release cohort; no new production | foreground | per1kg original reference cohort; no added Q |

### Process: Integrated manufacture (`manufacture`)

Within manufacture, source-stage meters separate batching/melting, cooling/milling, mould filling/foaming/annealing and cutting/release. These are one integrated inventory control volume: interstage material and internal heat transfers are documented and cancelled, not bought twice. Additional real utility, consumable, reaction species or treatment branches must be decomposed before dataset completion.

#### Inputs

##### Product flows

###### External recycled glass feed (`cullet`)

Whole externally supplied compatible cullet after its documented recovery/end-of-waste gate; record source glass, contaminants, moisture, sorting and transport. This is not internal return, a wafer feed, or purchased finished foam glass; no generic waste-glass UUID is compatible. Register actual upstream recovery burdens once.

- Selected flow: Clean sorted soda-lime glass cullet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Silica batch ingredient (`silica`)

Quartz/silica-sand mineral at plant for batch preparation; native identity leaves assay and grading unspecified. Match actual glass-batch mineral and whole supplied mass; no elemental resource extraction or silica nanoparticle substitution.

- Selected flow: Quartz `ddee14c5-2a28-4224-9b84-68dc5956972f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Feldspar batch ingredient (`feldspar`)

Mineral feldspar for glass batch, production mix at plant. Native comment describes an estimated recipe quantity; use identity only and collect this site quantity. Determine alkali composition, moisture and grading independently; no electrical-porcelain foreground inherited.

- Selected flow: Feldspar `ec8f6638-6f17-4849-8ee4-fbe743d52e80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Soda ash whole supplied salt (`soda_ash`)

Conditional identity is 95% sodium carbonate from natural-alkali processing at chemical plant, CAS497-19-8. Record the complete supplied salt once; assay, hydrate/free water and impurities are subaccounts. The carboxylic-acid classification is an isolated taxonomy defect; CAS/name/comment identify carbonate. A different purity or synthetic/recycled route requires another verified identity; no95% recipe requirement.

- Selected flow: Sodium carbonate `2099dae8-ad14-4496-87eb-d339b26e09f7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Anhydrous sodium sulfate (`sodium_sulfate`)

Anhydrous salt cake/thenardite, CAS7757-82-6, production mix at plant; native comment describes anhydrous mineral and possible hydration. Match actual supplied salt and moisture, not sodium lauryl ether sulfate or a hydrated salt with a different identity. No crystal density or sulfate conversion yield is imported.

- Selected flow: Sodium sulfate `eb53c69e-ff4b-47f4-b8b3-879d82e2f9bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Sodium nitrate batch oxidant (`sodium_nitrate`)

Include only when the actual recipe uses this salt; record whole salt, assay and water separately. Elementary nitrate/nitrite candidates are not purchased-product identities. Its nitrogen requires measured fate in glass, residues and individual gases; no assumed NOx yield.

- Selected flow: Sodium nitrate supplied salt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Iron oxide glass ingredient (`ferric_oxide`)

Mineral-derived ferric oxide/hematite, CAS1309-37-1, production mix at plant; native comment is mined/processed hematite, not an emulsion-polymerized adhesive. Match actual Fe(III) oxide form and assay; FeO, Fe3O4, iron ore of unknown composition and a fixed synthetic pigment route need separate identities.

- Selected flow: Ferric oxide `27dcbd61-ba08-45f3-a87b-2a87b5fb2423`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Conditional dolomite ingredient (`dolomite`)

Include only if actual batch contains dolomite mineral/rock, native raw input to soda-lime glass batch at plant. No source quantity is reported. Measure carbonate composition, water and calcination state; calcined dolomite is not this raw mineral.

- Selected flow: Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-route`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

###### Conditional calcium oxide ingredient (`quicklime`)

Conditional actual calcined calcium oxide solid, CAS1305-78-8, production mix at plant; native comment describes carbonate calcination and atmospheric CO2 uptake. Match actual powder grade assay and moisture, excluding hydrated lime and carbonate. This selected identity is Mass/kg; the rejected loose-milled Volume-reference candidate has no bulk-density basis for conversion. No calcination or hydration yield is assumed.

- Selected flow: Calcium Oxide `61666bfa-0357-473f-b080-dcc6e7ac560a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-route`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

###### Carbon-black foaming reagent (`carbon_black`)

Commercial solid carbon-black particle aggregates, CAS1333-86-4; native synonyms cover acetylene/channel/furnace/lamp/thermal black without selecting one production route. Match actual grade, aggregate structure, particle size, ash, sulfur and moisture with supplier evidence. Graphite-family taxonomy is isolated; no graphite, dye Direct Black38, SiC or cement-soot mixture is substituted. Count the entire supplied reagent once and retain residual carbon and cell-gas subaccounts.

- Selected flow: Carbon Black `a65e28e0-46ce-4288-8348-dc4c00f77df0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-process-brochure`

###### Manufacturing electricity (`electricity_mfg`)

Meter all melting support, conveyors, grinding, foaming, annealing, cutting, extraction, compressed-air generation, cooling and controls within this integrated gate, including failed and idle runs. Adopted native supply is CN grid-average consumption mix to user below1kV; another geography/voltage/generation mix needs matching identity and provider. Native Net calorific value property carries electrical energy in MJ; it is not combustion heat.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Manufacturing furnace fuel (`natural_gas`)

Actual compressed/pipeline-delivered gaseous natural gas meeting the applicable gas standard at consumption, CAS74-82-8 native methane-family identity. Do not substitute pure methane, LNG, crude gas or a particular Jiangsu CHP composition. Volume is the native reference: retain actual meter temperature/pressure/compressibility and supplier base state; verify provider compatibility. The native secondary Mass meanValue1 is not a physical density. Measure actual composition and LHV independently for mass/energy balances; no default gas or boiler.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Manufacturing supplied water (`water_mfg`)

Treated municipal/potable supply at plant, with local source and treatment matched; native reference Mass/kg. Record make-up/cleaning and real cooling use separately within the raw ledger. Native secondary0.001m3 per kg is not evidence of this site density. Avoid counting closed circulation repeatedly; carry actual non-WIP water charges and inherited vectors.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Conditional machine lubrication (`lubricant`)

Actual mineral oil make-up/charge for machinery only when present. Record full supplied grade and additive formulation, opening/closing charge and inherited exchange vector; corrected consumption is not corrected again. No assumed oil rate.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Conditional collector filter fabric (`filter_fabric`)

Only if the real dust collector uses polyester fabric, record actual complete replacement fabric, dimensions, grade and stock changes. A different actual collector medium needs its own specific card; no filter count or lifetime is assumed.

- Selected flow: Polyester dust-filter fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### Elementary flows

###### Molecular oxygen intake (`oxygen_in`)

Gross ambient-air species entering the same measured control volume; use measured inlet composition and humidity, not a fixed dry-air recipe. This physical inlet is distinguished from chemically consumed amount and from purchased oxygen/nitrogen. Pair with actual species outlet and retained-cell inventory; do not infer oxygen uptake from one gas residual. Native resource-from-air identity, where bound, is input-only.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Dinitrogen intake (`nitrogen_in`)

Gross ambient-air species entering the same measured control volume; use measured inlet composition and humidity, not a fixed dry-air recipe. This physical inlet is distinguished from chemically consumed amount and from purchased oxygen/nitrogen. Pair with actual species outlet and retained-cell inventory; do not infer oxygen uptake from one gas residual. Native resource-from-air identity, where bound, is input-only.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Water vapour in inlet air intake (`humidity_in`)

Gross ambient-air species entering the same measured control volume; use measured inlet composition and humidity, not a fixed dry-air recipe. This physical inlet is distinguished from chemically consumed amount and from purchased oxygen/nitrogen. Pair with actual species outlet and retained-cell inventory; do not infer oxygen uptake from one gas residual. Native resource-from-air identity, where bound, is input-only.

- Selected flow: Water vapour in inlet air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Argon in inlet air intake (`argon_in`)

Gross ambient-air species entering the same measured control volume; use measured inlet composition and humidity, not a fixed dry-air recipe. This physical inlet is distinguished from chemically consumed amount and from purchased oxygen/nitrogen. Pair with actual species outlet and retained-cell inventory; do not infer oxygen uptake from one gas residual. Native resource-from-air identity, where bound, is input-only.

- Selected flow: Argon in inlet air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Carbon dioxide in inlet air intake (`ambient_co2_in`)

Gross ambient-air species entering the same measured control volume; use measured inlet composition and humidity, not a fixed dry-air recipe. This physical inlet is distinguished from chemically consumed amount and from purchased oxygen/nitrogen. Pair with actual species outlet and retained-cell inventory; do not infer oxygen uptake from one gas residual. Native resource-from-air identity, where bound, is input-only.

- Selected flow: Carbon dioxide in inlet air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

#### Outputs

##### Product flows

###### First quality-released uncoated cellular-glass block (`first_release`)

Generic formed-and-finished glass Product identity, Mass/kg, no native fixed grade, route, CAS, geography, particle specification or performance data. The37199 taxonomy does not establish or veto this independently evidenced closed-cell slab boundary. Require actual carbon-black foaming, controlled anneal, cut rectangular uncoated block/slab, declared density/dimensions, thermal and mechanical test results and release state; this generic identity certifies none of them. Q is net finished material including genuinely retained cell gas/residual carbon at recorded equilibrium condition, excluding removable packaging and surface contamination. One unique first release only; closing FG already contained in Q is not another output.

- Selected flow: Glass (formed & finished) `82b33e71-bfaa-49b4-9627-ee5963433f6e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

###### Conditional external heat-exchange water return (`cooling_water_return`)

Only if the plant truly returns supplied liquid water to an external provider: record mass, purity, measured return temperature/enthalpy and supplier energy/water convention. Internal loop circulation cancels. This is not assumed steam condensate and not a wastewater or automatic heat credit.

- Selected flow: Returned heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### Waste flows

###### Unmelted glass batch reject (`batch_reject`)

Actual rejected mixed batch leaving for treatment; one physical material with its measured constituent and moisture vector. In-plant reuse remains internal.

- Selected flow: Unmelted glass batch reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Uncoated cellular-glass manufacturing scrap (`glass_reject`)

Actual offcuts, failed blocks and destructive-test material leaving the gate for treatment. Record each destination and composition cohort; internal recirculated scrap retains burden and cancels, without another external purchase or negative credit. Native Waste/Mass identity covers solid glass-production waste at plant with no fixed particle size, formulation, recovery or disposal route. Preserve the separately measured specific cellular-glass material and destination on this row; no upstream wafer production or wastewater identity is used.

- Selected flow: waste from glass production `9e75655e-039d-421e-abec-bbe625491bc6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Captured cellular-glass cutting dust (`captured_glass_dust`)

Dust actually captured from cutting/grinding and exported, distinct from airborne emissions and returned cullet. Record retained gas release during cutting separately by species. Native Waste/Mass identity covers solid glass-production waste at plant with no fixed particle size, formulation, recovery or disposal route. Preserve the separately measured specific cellular-glass material and destination on this row; no upstream wafer production or wastewater identity is used.

- Selected flow: waste from glass production `9e75655e-039d-421e-abec-bbe625491bc6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Spent polyester dust-filter fabric (`filter_media`)

Conditional actual polyester collector fabric; record measured loaded article with dust as constituent subledger and do not duplicate that dust as another outgoing mass. Other filter materials require their own atomic card.

- Selected flow: Spent polyester dust-filter fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Spent mineral lubricating oil (`spent_oil`)

Only actual outgoing spent oil after charge reconciliation. Carry contamination, water, handler and destination; do not presume lubricants are absent or a co-product. Native Waste identity is petroleum-based or synthetic used lubricating oil at generation, treatment route unspecified. This row selects actual mineral-derived used oil and no precredited recycling or fuel treatment.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Cellular-glass plant cleaning wastewater (`effluent`)

Actual aqueous stream exported to treatment; record full wet mass, dissolved and suspended constituents, temperature and destination. It is not direct river discharge; species transfers after on-site treatment require distinct real elementary rows. COD does not identify a chemical mass.

- Selected flow: Cellular-glass plant cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### Elementary flows

###### Carbon dioxide fossil release (`co2_fossil`)

Actual new fossil CO2 reaching outdoor air, measured/speciated and separated from inlet background, carbonate CO2 and retained cell gas. CAS124-38-9 native air-unspecified emission; no stoichiometric yield.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Carbon dioxide from carbonate decomposition (`co2_mineral`)

Measure actual mineral-carbon release to air separately; no fossil/biogenic substitution or assumed complete carbonate conversion. Cell-retained CO2 stays in product mass and is not emitted twice.

- Selected flow: Carbon dioxide from carbonate decomposition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Carbon monoxide fossil release (`co_fossil`)

Actual fossil CO to outdoor air, CAS630-08-0 native air-unspecified emission. Separate from CO2 and non-fossil CO; no assumed fuel emission coefficient.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Nitrogen monoxide release (`nitric_oxide`)

Measure actual NO to outdoor air, CAS10102-43-9 native air-unspecified emission. Total NOx reported as NO2-equivalent is not actual NO or actual NO2 mass; determine speciation independently.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Only actual measured NO2 species, CAS10102-44-0; searched nitrite candidates with CAS14797-65-0 are incompatible. No total-N or NOx backfitting.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Sulfur dioxide to air (`sulfur_dioxide`)

Actual SO2 to outdoor air; indoor-air and water/soil candidates cannot be rebound to this stack. Determine sulfur oxidation/reduction, retained sulfate/sulfide and dust independently. Adopted native Elementary/Mass identity is the actual molecular species CAS at emissions to air unspecified: 7446-09-5. It is neither an air-resource input nor a water/soil/indoor emission; match actual outdoor medium and phase. Native synonym lists are multilingual aliases, not measured mixture composition or permission to substitute isotope/phase variants.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Hydrogen sulfide to air (`hydrogen_sulfide`)

Include only real measured H2S release during foaming, cutting or storage; distinguish gas trapped in intact cells from emitted gas. No assumed sulfate-to-sulfide reaction or hydrolysis yield.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Water vapour to outdoor air (`water_vapor_out`)

Record actual outlet water vapour and separate inlet humidity pass-through, fuel-reaction water, free/carrier water evaporation and phase changes. Water-body native candidates cannot identify air emissions; no residual fitting. Adopted native Elementary/Mass identity is the actual molecular species CAS at emissions to air unspecified: 7732-18-5. It is neither an air-resource input nor a water/soil/indoor emission; match actual outdoor medium and phase. Native synonym lists are multilingual aliases, not measured mixture composition or permission to substitute isotope/phase variants.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Molecular oxygen to air (`oxygen_out`)

Actual unreacted O2 in exhaust and ventilation from the same physical control volume; measure rather than assume complete oxygen consumption. Never use an air-resource input UUID as an emission. Adopted native Elementary/Mass identity is the actual molecular species CAS at emissions to air unspecified: 7782-44-7. It is neither an air-resource input nor a water/soil/indoor emission; match actual outdoor medium and phase. Native synonym lists are multilingual aliases, not measured mixture composition or permission to substitute isotope/phase variants.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Dinitrogen to air (`nitrogen_out`)

Actual N2 outlet including measured carrier pass-through; do not substitute total nitrogen or assume all nitrate nitrogen becomes N2. Adopted native Elementary/Mass identity is the actual molecular species CAS at emissions to air unspecified: 7727-37-9. It is neither an air-resource input nor a water/soil/indoor emission; match actual outdoor medium and phase. Native synonym lists are multilingual aliases, not measured mixture composition or permission to substitute isotope/phase variants.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Argon to air (`argon_out`)

Actual measured inert-air species outlet; paired gross inlet/outlet only, no invented dry-air proportion.

- Selected flow: Argon to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Inlet-origin carbon dioxide to air (`ambient_co2_out`)

Actual pass-through background CO2 recorded for gross physical closure and separately cancelled against measured inlet for net newly generated species reporting; do not label it fossil process generation.

- Selected flow: Inlet-origin carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Airborne cellular-glass dust (`glass_dust_air`)

Actual uncaptured particulate material at declared particle-size measurement and receiving air medium; no inference from total plant dust or captured residue. Add crystalline raw-quartz dust separately if actually emitted before melting.

- Selected flow: Airborne cellular-glass dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

### Process: Post-release services (`service`)

Retain physical FG movements and original manufacturing vectors in cp_service without a second first_release row. Actual repairs or moisture/gas loss require individual measured material/species extensions. A service result uses only the original served cohort Q; unrelated old FG services never inflate current manufacture.

#### Inputs

##### Product flows

###### Post-release electricity (`electricity_service`)

Actual packing, warehousing, handling, extraction and dispatch electricity after first release; allocate to original served cohorts. Same native CN below1kV grid-average user supply restriction as manufacturing; no new production Q.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Post-release supplied water (`water_service`)

Actual treated municipal water after release, including real cleaning; same native supply restrictions. Record source treatment, separate phase/species movements and actual charge stocks without repeating corrected consumption.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### New supplied article — LDPE wrapping film (`pefilm_purchase`)

Actual whole LDPE wrapping film: CAS9002-88-4 native PE sheet/film. Luggage taxonomy is isolated; PET in native comment is a competing polymer, not selected. Verify LDPE composition, thickness, recycled content and provider independently. New external purchases or supplier-included physical article received, counted exactly once.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### External returned article received — LDPE wrapping film (`pefilm_return_received`)

Actual whole LDPE wrapping film: CAS9002-88-4 native PE sheet/film. Luggage taxonomy is isolated; PET in native comment is a competing polymer, not selected. Verify LDPE composition, thickness, recycled content and provider independently. Actual external return receipt only, with original cohort and inherited burdens; no new purchase.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### New supplied article — Wooden shipping pallet (`pallet_purchase`)

Actual complete wooden-board/slat pallet, Mass/kg; native Product supply is production mix in the lumber mill using wooden boards/slats. Match this supply stage before provider linkage; generic native dimensions, treatment and species unspecified. Native electricity taxonomy is isolated and conflicts with coherent wood physical identity and preserved wood classification. Match real pallet, measured moisture and fittings; no EURO size or fixed reuse count assumed. New external purchases or supplier-included physical article received, counted exactly once.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### External returned article received — Wooden shipping pallet (`pallet_return_received`)

Actual complete wooden-board/slat pallet, Mass/kg; native Product supply is production mix in the lumber mill using wooden boards/slats. Match this supply stage before provider linkage; generic native dimensions, treatment and species unspecified. Native electricity taxonomy is isolated and conflicts with coherent wood physical identity and preserved wood classification. Match real pallet, measured moisture and fittings; no EURO size or fixed reuse count assumed. Actual external return receipt only, with original cohort and inherited burdens; no new purchase.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### New supplied article — Paperboard protective angle (`cardboard_purchase`)

Actual one supplied paperboard corner/angle article, not a generic packaging bundle or carton. Record composition, coatings, measured moisture and mass per configuration; do not substitute the whole-carton exception. New external purchases or supplier-included physical article received, counted exactly once.

- Selected flow: Paperboard protective angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### External returned article received — Paperboard protective angle (`cardboard_return_received`)

Actual one supplied paperboard corner/angle article, not a generic packaging bundle or carton. Record composition, coatings, measured moisture and mass per configuration; do not substitute the whole-carton exception. Actual external return receipt only, with original cohort and inherited burdens; no new purchase.

- Selected flow: Paperboard protective angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### New supplied article — Self-adhesive paper identification label (`label_purchase`)

Actual whole purchased printed paper label including its supplied adhesive and ink; purchase once, constituent subaccounts only. Actual in-house printing or adhesive preparation adds separate real materials and energy. New external purchases or supplier-included physical article received, counted exactly once. Native paper label is printed sticker-use material, GLO production mix at plant, Mass/kg, no fixed adhesive/ink recipe or sheet grade. Verify the complete supplied label rather than importing a retail-container stock identity.

- Selected flow: Paper label `6e3bea7a-9e89-4f50-a065-79feaac682db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### External returned article received — Self-adhesive paper identification label (`label_return_received`)

Actual whole purchased printed paper label including its supplied adhesive and ink; purchase once, constituent subaccounts only. Actual in-house printing or adhesive preparation adds separate real materials and energy. Actual external return receipt only, with original cohort and inherited burdens; no new purchase. Native paper label is printed sticker-use material, GLO production mix at plant, Mass/kg, no fixed adhesive/ink recipe or sheet grade. Verify the complete supplied label rather than importing a retail-container stock identity.

- Selected flow: Paper label `6e3bea7a-9e89-4f50-a065-79feaac682db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

#### Outputs

##### Product flows

###### Article accompanying gross shipment — LDPE wrapping film (`pefilm_gross_out`)

Actual whole LDPE wrapping film: CAS9002-88-4 native PE sheet/film. Luggage taxonomy is isolated; PET in native comment is a competing polymer, not selected. Verify LDPE composition, thickness, recycled content and provider independently. Gross physical outgoing with all shipment cohorts, separately from net product Q; same article later returning does not erase this movement.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Standalone external article return — LDPE wrapping film (`pefilm_return_sent`)

Actual whole LDPE wrapping film: CAS9002-88-4 native PE sheet/film. Luggage taxonomy is isolated; PET in native comment is a competing polymer, not selected. Verify LDPE composition, thickness, recycled content and provider independently. Actual separate return to external owner, not internal reuse or packaging already counted on gross shipment.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Article accompanying gross shipment — Wooden shipping pallet (`pallet_gross_out`)

Actual complete wooden-board/slat pallet, Mass/kg; native Product supply is production mix in the lumber mill using wooden boards/slats. Match this supply stage before provider linkage; generic native dimensions, treatment and species unspecified. Native electricity taxonomy is isolated and conflicts with coherent wood physical identity and preserved wood classification. Match real pallet, measured moisture and fittings; no EURO size or fixed reuse count assumed. Gross physical outgoing with all shipment cohorts, separately from net product Q; same article later returning does not erase this movement.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Standalone external article return — Wooden shipping pallet (`pallet_return_sent`)

Actual complete wooden-board/slat pallet, Mass/kg; native Product supply is production mix in the lumber mill using wooden boards/slats. Match this supply stage before provider linkage; generic native dimensions, treatment and species unspecified. Native electricity taxonomy is isolated and conflicts with coherent wood physical identity and preserved wood classification. Match real pallet, measured moisture and fittings; no EURO size or fixed reuse count assumed. Actual separate return to external owner, not internal reuse or packaging already counted on gross shipment.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Article accompanying gross shipment — Paperboard protective angle (`cardboard_gross_out`)

Actual one supplied paperboard corner/angle article, not a generic packaging bundle or carton. Record composition, coatings, measured moisture and mass per configuration; do not substitute the whole-carton exception. Gross physical outgoing with all shipment cohorts, separately from net product Q; same article later returning does not erase this movement.

- Selected flow: Paperboard protective angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Standalone external article return — Paperboard protective angle (`cardboard_return_sent`)

Actual one supplied paperboard corner/angle article, not a generic packaging bundle or carton. Record composition, coatings, measured moisture and mass per configuration; do not substitute the whole-carton exception. Actual separate return to external owner, not internal reuse or packaging already counted on gross shipment.

- Selected flow: Paperboard protective angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Article accompanying gross shipment — Self-adhesive paper identification label (`label_gross_out`)

Actual whole purchased printed paper label including its supplied adhesive and ink; purchase once, constituent subaccounts only. Actual in-house printing or adhesive preparation adds separate real materials and energy. Gross physical outgoing with all shipment cohorts, separately from net product Q; same article later returning does not erase this movement. Native paper label is printed sticker-use material, GLO production mix at plant, Mass/kg, no fixed adhesive/ink recipe or sheet grade. Verify the complete supplied label rather than importing a retail-container stock identity.

- Selected flow: Paper label `6e3bea7a-9e89-4f50-a065-79feaac682db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Standalone external article return — Self-adhesive paper identification label (`label_return_sent`)

Actual whole purchased printed paper label including its supplied adhesive and ink; purchase once, constituent subaccounts only. Actual in-house printing or adhesive preparation adds separate real materials and energy. Actual separate return to external owner, not internal reuse or packaging already counted on gross shipment. Native paper label is printed sticker-use material, GLO production mix at plant, Mass/kg, no fixed adhesive/ink recipe or sheet grade. Verify the complete supplied label rather than importing a retail-container stock identity.

- Selected flow: Paper label `6e3bea7a-9e89-4f50-a065-79feaac682db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### Waste flows

###### Discarded article — LDPE wrapping film (`pefilm_waste`)

Actual whole LDPE wrapping film: CAS9002-88-4 native PE sheet/film. Luggage taxonomy is isolated; PET in native comment is a competing polymer, not selected. Verify LDPE composition, thickness, recycled content and provider independently. Actual discarded article exported to treatment with wet/dry composition and destination. A Product UUID cannot identify its Waste state.

- Selected flow: LDPE wrapping film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Discarded article — Wooden shipping pallet (`pallet_waste`)

Actual complete wooden-board/slat pallet, Mass/kg; generic native dimensions, treatment and species unspecified. Native electricity taxonomy is isolated and conflicts with coherent wood physical identity and preserved wood classification. Match real pallet, measured moisture and fittings; no EURO size or fixed reuse count assumed. Actual discarded article exported to treatment with wet/dry composition and destination. A Product UUID cannot identify its Waste state.

- Selected flow: Wooden shipping pallet waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Discarded article — Paperboard protective angle (`cardboard_waste`)

Actual one supplied paperboard corner/angle article, not a generic packaging bundle or carton. Record composition, coatings, measured moisture and mass per configuration; do not substitute the whole-carton exception. Actual discarded article exported to treatment with wet/dry composition and destination. A Product UUID cannot identify its Waste state.

- Selected flow: Paperboard protective angle waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Discarded article — Self-adhesive paper identification label (`label_waste`)

Actual whole purchased printed paper label including its supplied adhesive and ink; purchase once, constituent subaccounts only. Actual in-house printing or adhesive preparation adds separate real materials and energy. Actual discarded article exported to treatment with wet/dry composition and destination. A Product UUID cannot identify its Waste state.

- Selected flow: Self-adhesive paper identification label waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Post-release cellular-glass loss (`fg_breakage`)

Actual loss from original released FG cohorts, including returns rejected after handling. It is not another first-release output; inherit original manufacturing burden and measured retained gas release without shifting losses to unrelated current production.

- Selected flow: Uncoated cellular-glass handling scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### Post-release cleaning effluent (`service_effluent`)

Actual wet cleaning effluent with measured solids and dissolved species sent to named treatment. Reconcile supplied water, evaporation and stocks; add actual downstream elementary releases only where truly inside the gate.

- Selected flow: Cellular-glass warehouse cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are defined in section 8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | each shared exchange | For attributional inventory first assign dedicated measured burdens and use physical or virtual subdivision with actual equipment time, metered process or documented engineering model. Preserve real common losses and failed/idle burdens; do not remove them by naming a dedicated step. | `ilcd-attributional-2010` |
| allocate_causality | each residual exchange | For remaining shared exchange j, test a determining physical causal relationship to actual product functions and changed output amounts. Different density, milling fineness, foaming recipe, dwell time and thermal condition can change the driver; plant-wide mass allocation in the cited EPD is case practice, not proof of that causality. Do not arbitrarily choose mass, volume, energy or economic shares. | `ilcd-attributional-2010`; `foamglas-t3plus-epd-2026` |
| allocate_residual_value | genuinely residual multifunctional common process | Only if subdivision and determining physical causality cannot resolve genuine remaining multifunctionality use contemporaneous actual-state market values at the same common process gate, with quantities, currencies, moisture/quality and time aligned. Remove different downstream finishing, transport and sales service before comparing values. Record justification and sensitivity, never a fixed ratio. Saleability of scrap alone does not create a co-product or automatic substitution credit. | `ilcd-attributional-2010` |
| allocate_cohort | all stocks and service | Carry every exchange burden with original material/release cohort through WIP, FG, charges, returns and real repair. Allocate shared service to the actual served cohorts, retain original delivery reverse links and original Q, and keep a separate gross physical ledger. External recycled input treatment and returned packaging follow explicit burden handover and repeated-service records; internal reuse is neither another purchase nor negative credit. | `ilcd-attributional-2010`; `bau-foam-glass-pcr-2025` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mfg | manufacture | raw materials utilities and auxiliaries | foreground production records | supplier and whole delivery state; batch recipe; assay and moisture; each raw material mass; original meters and units; actual gas composition state density and LHV; electric supply voltage geography; campaign start stop idle failure rework; raw and non-WIP charge stocks; inherited exchange vectors; inbound transport per material and mode | Calibrated scales and meters with receipt/recipe reconciliation and direct equipment logs over the entire real route. Record whole purchased preparations once; validate actual operator flow sheet and individual real fuel/material names. Transport has actual mass distance and mode with separate real fuel/emissions if operated on site, or matched transport-service dataset outside this unit inventory. Retain undivided raw totals. convert_raw and attribute_raw precede the single normalize_exchange result per 1 kg reference flow; collection performs no division. | kg; MJ; m3 at declared gas state; original meter units | each batch and meter interval | complete representative period with all zero-output campaigns | declared site and equipment boundary through first release | per 1 kg reference flow | calibration; invoices; actual recipe; supplier specification; metering boundaries; stock vectors |
| cp_balance | manufacture | physical mass phase species and emission records | measurements and laboratory records | each inlet and outlet species; original volume or rate; time; temperature pressure humidity and compressibility; actual exhaust moisture and O2; retained cell gas and residual carbon; glass oxide and sulfate sulfide speciation; wet and dry waste; dissolved and suspended content; real wastewater receiving medium; actual returned water temperature enthalpy; opening closing melt powder block WIP and fluid charge; vector history | Independent calibrated mass/volume sampling and actual gas speciation across one consistent control volume. Separate stack from fugitive releases and each receiving medium. Distinguish measured species from analytical indicators; determine gas reactions, bound/free water and phase movement with independent records rather than residual fitting. Validate physical mass and elements before applying burden allocation. Retain undivided original physical/species observations. Use physical_gates separately; only attributed exchange totals enter normalize_exchange once per 1 kg reference flow. | kg by species; original m3 or rate; measured state and enthalpy | each campaign stock boundary and representative species sample | same manufacture period and stock history | manufacturing physical control volume and actual treatment outlets | per 1 kg reference flow | sampling reports; detection limits; gas calibration; independent elemental assays; moisture and flow-state records |
| cp_release | manufacture | first_release | quality release and net weighing | unique release identifier; product configuration; composition and carbon route; actual dimensions and density; closed-cell evidence; thermal conductivity and compressive test method results; applicable standard; anneal cutting and test record; net equilibrated mass; tare and surface condition; first-release time; destructive test loss; closing FG membership | Weigh actual uncoated accepted blocks using calibrated scales at recorded equilibrium condition; remove removable packaging and contamination, retain actual cell gases/residual carbon. Link each unique release to tests, lot, geometry and failures. Measure mass and external volume for the same configuration independently rather than importing nominal catalogue density. Collect raw Q in kg only; release_denominator defines Q and first_release represents 1 kg reference flow. No normalization of raw release records during collection. | kg; measured dimensions and test units | each block or traceable weighed lot at first release | same selected first-release cohort | first release after all required manufacturing quality tests | per 1 kg reference flow | scale calibration; unique release register; test results; tare; traceable configuration and equilibrium state |
| cp_service | service | packaging FG returns and services | cohort stock movement and meter records | original release cohort and Q; original delivery and reversal; opening closing FG; gross dispatch; returns received and sent; breakage; actual repair additions removals; each packaging empty attached WIP attached FG reusable stocks; purchases supplier-included receipts external returned receipts gross outgoing separate returns sent waste; wood paper moisture; actual repair board nail mass and origin; full article versus constituent; inherited exchange vector; raw energy water and fluid charges | Weigh each real article/configuration and moisture condition and reconcile mutually exclusive physical stocks and movements. Keep complete FG and packaging gross ledgers even for old cohorts; link return/reversal to original delivery, real repairs and inherited burden. Meter actual storage/handling/packing and cleaning services. Add real repair materials and gas/water changes as individual rows before claiming complete coverage, without inventing them. Collect undivided raw quantities. Reconcile packaging_ledger and physical_gates before attribute_raw; use normalize_exchange once per 1 kg reference flow of the original served cohort and its original Q. Older-cohort service remains separate from unrelated current manufacturing results. | kg; MJ; original article counts and moisture | each movement and matched service meter interval | selected release cohort and its original stock history | post-release physical and service gate | per 1 kg reference flow | stock and dispatch records; return links; calibrated article weights; actual repair evidence; inherited vectors; service meter coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert each actual raw record to its row unit and declared state before stock/burden attribution. Electricity MJ = kWh * 3.6. Integrate only actual mass/volume rates over measured time; cumulative meter differences and already integrated volumes are amounts and receive no second time multiplier. Use independent substance-specific density at measured state for mass/volume, and actual article mass per configuration for counts. Gas native secondary factors never replace measured density or actual LHV. | raw readings; unit factors; measured density and state; article configuration | converted raw totals | `bau-foam-glass-pcr-2025` |
| attribute_raw | all inventory rows | Distinguish physical movement quantities from burden/consumption numerators before attribution. For each manufacture exchange j reconcile opening unreleased raw/WIP and unassigned installed/service vector + actual converted additions = corresponding closing unreleased/unassigned vector + first-release transfer B_j^Q + evidenced assignments to other real cohorts/functions. Manufacturing burden A_j is B_j^Q after documented subdivision and any genuine residual allocation; it includes all newly first-released FG even when held at closing, never subtracting that FG vector. Ordinary waste, offcuts, failed lots and destructive tests retain their caused manufacturing and handling/treatment burdens: physical export or sale alone cannot deduct their inherited burden as transferred elsewhere or create a credit. Any assignment elsewhere needs traced distinct cohort/function and the applicable allocation or burden-handover decision. FG history separately reconciles opening FG vector + B_j^Q + actual returns at original dispatch vector + actual service increments = closing FG vector + gross dispatch vector + other traced removals/destinations. Original manufacture is restored on return for tracing, not added again. Service burden A_j includes each actually performed increment for the original served cohort using original Q, even if serviced goods remain in closing FG; correct only disjoint unconsumed/unassigned service or charge inventories. For explicit purchase/receipt, gross dispatch, return and waste movement cards A_j is the converted actual physical movement; maintain burden/consumption vectors separately, without netting unused stock against a gross receipt. Each B retains that exchange numerator/unit, never stock kg substituted for every burden; never correct already stock-adjusted consumption twice. Internal transfers cancel once in the consolidated account. | converted raw totals; exchange-specific stock vectors; cohort and return links; allocation records | A_j attributable raw exchange totals | `ilcd-attributional-2010` |
| release_denominator | first_release | Q = sum of measured net mass in kg of uniquely first-released blocks/slabs of the selected product cohort after required quality tests. Use recorded equilibrium state and remove packaging and surface contamination; keep true retained cell gas and residual carbon. Pre-release failures/test destruction are excluded; their burdens remain. First-released closing FG is already in Q. Dispatch, return, repair and retesting add no Q. | cp_release; unique release registry; net mass; quality tests | Q in kg | `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |
| normalize_exchange | all inventory rows | q_j = A_j / Q for Q > 0. Execute this single division after convert_raw and attribute_raw; q_j is the exchange per 1 kg reference flow for the same release cohort. For Q = 0 retain A_j and raw burdens without a unit result. Flow cards and protocol aggregation only reference this same computed result and never divide again. | A_j; Q; convert_raw; attribute_raw; cp_release | q_j per 1 kg reference flow | `ilcd-attributional-2010`; `bau-foam-glass-pcr-2025` |
| physical_gates | all inventory rows | Manufacturing: opening raw + opening WIP + opening non-WIP charges + external supplied materials + measured gross inlet gas species = closing raw + closing WIP + closing charges + Q + each physical exported waste + each measured outlet species + each actual product return. FG service: opening FG + first-release internal receipt + external returned FG + actual repair additions + measured physical uptake = closing FG + gross dispatch + standalone external FG return + scrap + repair removals + measured gas/water loss. Apply consistent wet/phase/thermal bases and independently measured relevant elements and chemical species; one residual is not two measurements. Consolidation cancels manufacture-to-service receipt. Manufacture closing excludes already first-released FG; the combined gate cancels internal Q and first-release vectors, not completed manufacturing or performed service. Gross carrier-gas observations serve physical closure; report actual environmental withdrawal or new process release with independent origin, reaction, retention, phase and native-flow convention evidence. Equal chemical names do not make resource-input and emission UUIDs interchangeable or establish a characterization offset. Do not add closing FG to production Q or report retained cell gas as external emission. | cp_mfg; cp_balance; cp_release; cp_service; independent species and phase measurements | separate and consolidated physical and elemental gates | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| packaging_ledger | all inventory rows | For EACH actual packaging article: opening empty + opening attached WIP + opening attached FG + opening reusable + new purchases + supplier-included receipts + external returns received = closing empty + closing attached WIP + closing attached FG + closing reusable + with gross physical shipments + standalone external returns sent + waste. All categories are mutually exclusive and each receipt counted once. Add real article water uptake/loss and actual repair-part additions/removals as separate measured terms when needed; keep complete pallet and repair components distinct without counting constituents twice. Internal reuse cancels; burden allocation and inherited exchange vectors remain separate. Packaging never enters Q or automatic co-product credit. | cp_service; article stocks; physical receipts and dispatch; moisture; real repairs; inherited vectors | each article physical ledger and burden reconciliation | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Every row retains full native restrictions and actual matched provider/state; UUID is not a default amount, conformity certificate or proof of recipe. Unresolved auxiliaries remain single named exchanges. | Native direct records; provider specification; actual product tests |
| dq_period | all inventory rows | Retain complete raw meter coverage with zero-output failures start/stop and idle. Separate representative production data from legacy supplier examples and manufacturer marketing claims. | Raw readings; calibrated logs; cohort register |
| dq_species | all physical gates | Measure phase and molecular species independently of total mass/element balance. Cell-retained CO2 and residual carbon, sulfate/sulfide, actual free/reaction/structural water and exhaust O2 require genuine evidence. Keep indicators and molecular species distinct. | Independent analytical speciation; phase records; uncertainty and detection limits |
| dq_stocks | all stocks and service | Each raw/WIP/FG/charge/packaging stock has physical quantity and inherited vector per exchange. Preserve original release and delivery reversals; actual rework additions and moisture/species changes are not silently ignored. | Opening closing measurements; cohort links; vector history; real repair documents |
| dq_unknown | dataset completion | Unknown, absent, measured zero and below detection are different states. Missing actual core route, terminal or unresolved causal relationship stays a true hold. Provider matching, unbound auxiliaries and future site activity quantities remain explicit ordinary production gaps; no fabricated default or scientific approval. | Gap register; applicability decisions; raw observations |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product and route | Verify actual unfaced closed-cell carbon-foamed glass slab/block from the entire manufacturing route and actual release tests, dimensions, density and surface condition. Generic Glass (formed & finished) does not certify closed cells, building suitability, thermal conductivity, compressive strength or any legal compliance. Do not apply the entire CPC leaf to one product or replace carbon-black foaming with a different foaming agent. | `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |
| validate_identity | each inventory row | Check whole direct native basename, all synonyms/comments, CAS, grade, route, geography, form/particle structure, medium, type, every property and exact reference chain before UUID adoption. Retain each restriction in the description and actual provider evidence. Isolated taxonomy defects are disclosed separately from physical consistency; hard CAS/route/media contradictions are not waived. | `bau-foam-glass-pcr-2025` |
| validate_physical | manufacturing service and consolidated gates | Close gross manufacturing and FG-service physical gates independently and then cancel matching internal transfers. Include all actual species, water phases, cell-retained gas/carbon, dust and moisture using independent measured composition and phase evidence. Keep physical mass/element conservation independent of burden allocation. Unknowns and imbalance retain explicit uncertainty/hold; never fit two unknown reactions by one residual. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| validate_normalization | all raw quantities | Convert units/state first, reconcile stock and historical vectors and allocate second, execute normalize_exchange once as A_j/Q last. Collection retains undivided raw data; cards and aggregation reference that same result and never divide it again. Q=0 retains all real raw burdens without a unit result. Manufacturing production Q, gross shipments and net deliveries are distinct. Require the attribute_raw distinction between first-release manufacture, already performed service, unassigned inventories and physical movement; neither closing FG nor ordinary waste export automatically removes caused burdens. | `ilcd-attributional-2010`; `bau-foam-glass-pcr-2025` |
| validate_packaging | each packaging article | Require complete mutually exclusive opening/closing empty, WIP-attached, FG-attached and reusable stocks; new purchases; supplier-included physical receipts; external returns received; packaging with gross physical shipment; standalone external returns sent and waste. Count only one physical receipt per article. Internal reuse cancels and does not change Q. Identify real wood/paper moisture, nails, replacement boards and other actual repair parts separately from complete pallet purchases; do not invent repairs. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| validate_coverage | dataset completion | Actual unknown core manufacturing/terminal or causal burden relationship prevents a completed dataset claim. Preserve failed retrievals, source edition differences, mechanical applicability mismatches and unknown/absent/zero/below-detection separately. Ordinary future site measurements, provider matching and auxiliary UUID gaps remain explicit data-production requirements; technical projection/measurement checks do not establish scientific, translation, mapping or publication approval. | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified upstream actual uncoated cellular-glass product at declared first-release state; separately reported original-cohort packaging/handling services as applicable |
| allowed_use | Compatible composition route state density performance and provider boundary; transparent measured kg-to-volume conversion where needed |
| excluded_use | Automatic EN15804 or product certification; arbitrary material-grade thermal equivalence; replacing full glass manufacture with repacking; coated product or gravel; using gross shipment or net delivery as Q; automatic avoided-energy or moduleD credit |
| required_metadata | uncoated closed-cell block or slab and declared function; carbon-black particle grade structure and supplier route; glass constituents and whole supplied forms; cullet origin treatment and burden handover; actual melting milling mould foaming anneal cutting route; density and external dimensions measured for same configuration; thermal and mechanical test method results and applicable product standard; unique first quality release cohort and original Q; equilibrium surface moisture and retained-cell gas state; raw WIP FG and non-WIP charge quantities with exchange history; failure idle start-stop and zero-output coverage; actual gas composition pressure temperature density LHV and meter state; electricity geography voltage mix and provider boundary; independent mass element molecular-species and water-phase evidence; packaging article composition moisture stocks gross movements and real repairs; original delivery reversal and returned FG incremental rework links; actual external water-return state enthalpy and supplier convention; allocation subdivision causality residual gate and period evidence |
| required_quality_disclosure | Original raw quantities and conversions; actual coverage and failures; every physical gate and exchange-specific stock vector; molecular and phase evidence; original cohort service boundary; all identity/provider limitations; unresolved auxiliary UUIDs; unknown and detection-limit distinctions |
| update_trigger | Changed core chemistry forming or product state; coating/facing; actual supplier route/form/geography; gas reference state; electricity mix/voltage; quality standard; stock cohort or allocation method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| foamglas-route | handbook | Owens Corning FOAMGLAS. What is cellular glass insulation? https://www.foamglas.com/en/advice-center/general-advice/what-is-cellular-glass-production-process | Primary complete manufacturing description from recycled glass and minerals through carbon milling mould foaming controlled cooling and cut finished block. Current50% recycled-content statement is not a recipe default. |
| foamglas-t3plus-epd-2026 | dataset | Pittsburgh Corning Europe NV; IBU. FOAMGLAS T3+ EPD-PCE-20260415-IBA1-EN issued2026-08-18 valid to2031-08-17. https://www.foamglas.com/-/media/project/foamglas/public/shared/files/certifications/b---common-certificates/epd-environmental-product-decl/epd-foamglas-t3plus-en.pdf | Full publisher PDF actual2026 edition: printedpp1–4 product raw ingredients13-stage diagram uncoated release packaging and2023 two-site declared1m3 context. Source density91kg/m3 differs from nominal95; constituent percentages temperatures life-cycle results mass allocation and module-D scenarios are case-specific and not generic defaults. |
| foamglas-process-brochure | handbook | Pittsburgh Corning. FOAMGLAS insulation general brochure; publisher retained legacy process illustration p5. https://www.foamglas.com/-/media/project/foamglas/public/corporate/foamglascom/files/brochures/industry/brochures-2019/brochure---foamglas-insulation---general-brochure.pdf | Complete primary industrial brochure with manufacturing diagram atp5 and adjacent industrial-use context. Historical>66% recycled claim and furnace temperatures are not transferred; this is not an independent second manufacturer or proof of one contemporary plant/order. |
| foamglas-t3plus-pds-2025 | handbook | Owens Corning. FOAMGLAS T3+ Product Data Sheet version08.05.2025. https://www.foamglas.com/-/media/project/foamglas/public/shared/files/foamglas-b/foamglas-t3-plus/pds/pds-foamglas-t3plus-int-en.pdf | Full2-page primary building slab terminal dimension-table performance-metadata categories and application limitations. No catalogue density dimensions conductivity strength binder absence or service-life claim becomes an unmeasured site value. |
| bau-foam-glass-pcr-2025 | official_guidance | Bau EPD GmbH. PCR2.22.2.3 Foam glass Part B version1.0 dated2025-09-09 §§2.5–2.8 3.1 5.4.5–5.4.6. https://www.bau-epd.at/fileadmin/user_upload/PCR_product_specific_A2_English/BAU-EPD-PKR-B-2.22.2.3-Foam_glass-Version1.0-20250909-EN15804_A2-English-website.pdf | Independent programme guidance on ingredient/auxiliary disclosure process and packaging identities declared-unit conversion physical mass/water balance and energy double counting. Adjacent aggregate standard and99.8% recycled waterglass/glycerine example are different products/routes.1m3 programme default permits transparent other units; not evidence of carbon-black recipe or EN15804 compliance for this PCR. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance First edition March2010 §§7.9.2–7.9.3. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality only: dedicated/virtual subdivision then exchange-specific determining physical causality and only genuinely residual actual-state contemporaneous common-process-gate market-value allocation. No industrial process recipe factor default percentage or automatic substitution credit. |
