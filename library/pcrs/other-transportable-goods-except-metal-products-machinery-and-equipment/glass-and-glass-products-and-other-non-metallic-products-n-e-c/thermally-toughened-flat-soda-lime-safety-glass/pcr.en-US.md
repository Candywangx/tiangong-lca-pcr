---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.thermally-toughened-flat-soda-lime-safety-glass
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Thermally toughened flat monolithic soda-lime safety glass

## 1. Scope and Applicability

This PCR starts with actual full supplied annealed uncoated soda-lime float stock sheets and covers fabrication, washing/drying, electric roller-furnace thermal treatment and air quenching through first quality release of flat unframed monolithic thermally toughened safety glass. Complete actual size cutting, edge preparation and holes before toughening. Include heat soak only when truly specified and performed; a generic safety name cannot establish the terminal or route. Stock-sheet manufacture and non-safety edgeworked-sheet methodology cannot replace this thermal conversion. Laminated fragment retention is different from monolithic toughening; heat strengthening is not safety glass. This specific product and manufacturing need is independent of the classification leaf and is a narrower methodological subset of CPC37115. `pilkington-toughened-glass`; `gpd-tempering-control-2023`; `landglass-wash-dry-2020`

The primary sources below form a transparent technical synthesis without asserting one order, factory or SKU. Actual provider identity and future site quantities must be supplied during data production. Do not transfer marketing performance, schematic quality curves, typical furnace temperatures or a manufacturer conformity claim as dataset defaults. Storage, packing and handling after first release retain separate physical/service ledgers and cohort attribution without creating new production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.thermally-toughened-flat-soda-lime-safety-glass |
| classification_refs | CPC 3.0:37115 Safety glass; narrower thermal-toughened flat monolithic subset; no accepted mapping asserted |
| covered_products | Flat uncoated monolithic unframed thermally toughened soda-lime float-glass panes; specified heat soak only when actually required |
| excluded_products | Annealed stock as terminal; heat-strengthened-only glass; chemical strengthening; lamination; coatings and enamel; curved glass; mirrors; insulating units; frames and installed assemblies |
| representative_product | First quality-released flat monolithic thermally toughened soda-lime glass pane |
| production_route | Full annealed stock sheets to cutting and edge grinding to washing/drying to electric roller-furnace heating and air quenching to actual quality tests and first release; separate packing/storage service ledger |
| market_state | Unframed flat pane at first required quality release; packing and subsequent handling explicitly recorded without another production gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | First-released flat monolithic thermally toughened soda-lime safety glass |
| How much | 1 kg |
| How well | Actual annealed uncoated input and thermal route; real specification tests and dry-surface net mass; no certification or performance inferred from UUID |
| How long or cycle | One declared reporting period and first-release cohort; no service-life claim |
| reference_flow_link | `first_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Safety glass `7f0d847d-fa53-4f06-bc5f-2364f5a78bd4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and reporting period; release cohort and first quality-release gate; annealed uncoated soda-lime float input and supplier burden; flat monolithic unframed thermal-toughening route; stock and pane dimensions and measured thickness; dry-surface net mass and calibrated measurement method; actual thermal recipe and electrical furnace configuration; air-quench conditions and environmental conditions; actual edge preparation and hole specification; applicable product standard and actual quality-test records; heat-soak requirement and performed or absent state; destructive specimens and failed-load disposition; finished-glass surface and moisture condition; same-period WIP and FG physical stocks and exchange-specific inherited burdens; packaging composition and full returns/stocks ledger; electricity geography voltage mix and meter boundary; water treatment origin quality and receiving media; allocation justification and residual common-gate value basis; original release-cohort Q and declared observed post-release service interval including unshipped FG |

All required qualifiers must appear in actual metadata, reference-flow comments, process notes or equivalent data-package fields. The native generic Safety glass Product identity fixes no route, CAS, thickness, geography, fragmentation performance or certification. Use the qualified thermal subset and actual tests together with the complete reference-output description.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg of first-released net glass with dry surfaces. Record each pane or homogeneous measured mass lot on a calibrated scale with packaging tare; no assumed per-pane mass, nominal thickness-density conversion, strength or service life. |
| `raw_units` | raw inventory | actual measured property | recorded unit | Preserve raw meter units. Convert kWh to MJ with factor 3.6 only for electricity. Integrate actual rates once; do not multiply integrated liquid/gas volume by time. Volume-to-mass requires independent substance-specific density at measured temperature/pressure/composition; never substitute water density for oil. Counts/area use actual weighed article/pane configuration, not a secondary coefficient. |
| `single_denominator` | all inventory rows | actual row property | row unit per kg | Collect unnormalized raw totals; convert, reconcile stocks/cohort inherited burdens and allocate first, then apply normalize_exchange once. Cards and protocol aggregation refer to that result; no second division. Q=0 retains real burdens and yields no unit result. |

## 5. System Boundary

The following rules apply together. Retain every actual operation and attributable burden; zero output or failure is not a reason to delete it.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all manufacturing | Start at receipt of full annealed uncoated soda-lime float stock sheets. Include stock handling; actual cutting and edge grinding; required holes before heat treatment; washing and drying; electric roller-furnace heating; forced-air quench; inspection and destructive sampling; any specified heat soak and rejection; first release; and actual downstream storage/packing/handling service. This is a technical synthesis across primary sources, not a claim of one SKU or factory. No furnace temperature, density, strength, yield, energy, lifetime or certification default is set. | `pilkington-toughened-glass`; `gpd-tempering-control-2023`; `landglass-wash-dry-2020`; `glaston-fc-flat-tempering`; `bavelloni-ve-edgers` |
| `boundary_upstream` | all purchased inputs | Attach actual compatible upstream burdens to full supplied sheets and each utility, supplied formulation, tooling and packaging input. Do not reproduce melting, tin-bath forming or annealing inside this conversion boundary. Do not replace conversion with purchased safety-glass packaging. Same-category external safety glass is an explicitly separate burden-bearing resale/service input and is excluded from newly manufactured Q. | `pilkington-toughened-glass` |
| `boundary_release` | first_release and handling | Q is the sum of uniquely identified panes passing first required release in the reporting cohort, measured as net glass mass with dry surfaces. Destructive samples, pre-release rejects and opening already-released FG are not Q. New closing FG has already crossed Q and must not be added as another manufacturing output. Track the physically distinct FG service ledger and cancel internal Q transfers. Deliveries, returns, reinspection and repairs never create new Q. Keep original release and delivery references; reverse only the original delivery-ledger assignment before reassigning returned glass, never the original first release or its manufacturing burden. Newly released closing FG retains its complete manufacturing burden inside Q. Observed incremental post-release services follow the original release cohort and declared service interval. | `pilkington-toughened-glass`; `gpd-tempering-control-2023` |
| `boundary_complete` | every actual exchange | Include failed runs, zero-output periods, warmup/cooldown, idle, start/stop, cleaning, test breakage, rework, utilities, captured waste, leaks and emissions. Unlisted actual inputs or exports require additional chemically/physically specific atomic rows with actual identities, properties, conditions and destinations; no hidden other, zero or lumped balance category is allowed. Absent exchanges require actual route evidence. Retain monitored unknowns and uncertainty; do not force balance closure. | `gpd-tempering-control-2023`; `landglass-wash-dry-2020` |
| `boundary_fluid` | WIP and non-WIP stocks | Maintain quantities and a separate inherited vector for every exchange in opening/closing glass WIP, raw stocks, installed lubricants, wash tanks, recirculating liquids and other equipment charges. A stored litre or kilogram is distinct from embodied energy or each upstream exchange. Assign only attributable use/losses/removal, carry retained PRE-release or unused-stock burdens forward and cancel internal transfers. Newly released FG is already inside Q; its complete manufacturing vector is carried for traceability without reducing manufacturing A_j. Equipment fluids are not WIP panes. For any actual external steam/heat or condensate return, add separate atomic supply and Product-return flows with actual mass, temperature, pressure, phase and enthalpy and the supplier water/energy convention; this electric air-quench route does not presume a boiler. | `gpd-tempering-control-2023`; `landglass-wash-dry-2020` |
| `boundary_exclusions` | scope and terminal | Exclude heat-strengthened-only panes, chemical strengthening, lamination, coated/enamelled/printed glass manufacture, bending, mirror silvering, insulating-unit assembly, framing, installation and use/end-of-life from this specific route. Fully toughened monolithic glass is not automatically suitable for post-breakage retention or a laminated balustrade. Actual conformity and performance are manufacturer/test records, not inferred from a safety label. A materially different terminal or route needs its own methodology review. | `pilkington-toughened-glass`; `gpd-tempering-control-2023` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Full supplied annealed uncoated soda-lime float stock sheets |
| starting_condition_role | Burden-bearing supplier product entering conversion; not purchased-safety-product packing |
| product_classification_scope | CPC 3.0:37115 narrower flat monolithic thermal-toughening subset |
| recursive_input_rule | Separate external same-category safety glass as burden-bearing resale/service input outside new Q; cancel matched internal prepared panes |
| upstream_dataset_requirement | Actual stock-sheet provider through annealed stock production; match state technology geography for each flow; retain row-level electricity voltage/mix limits |
| disclosure | Declare start/terminal, recipe/testing, cohorts, opening/closing inherited vectors, equipment fluids, species/destinations, packaging and service attribution |

## 6. Process Inventory Structure

All cards share the first-release reference Q. Each card is one actual physical or chemical exchange; its amount only references normalize_exchange and never divides by Q again here. Absence of a conditional exchange requires actual configuration evidence. Additional real material, fuel, maintenance formulation or emission requires its own named atomic card rather than a collection. UUIDs establish identity only; unresolved auxiliary flows remain concrete single exchanges. Cancel internal prepared transfers and the first-release transfer into the service ledger on consolidation. Blower air is a heat-exchange service using actual ambient air; its electricity is included without inventing a purchased compressed-air flow. Retain air throughput and inlet/outlet temperature/humidity in operating records; unchanged nitrogen, oxygen and other individual pass-through species cancel on both sides. Only independently established net species changes enter the actual receiving-medium inventory.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preparation` | Stock-sheet cutting edging washing and drying | required | actual declared route | foreground | 1 kg reference flow; internal/service ledger creates no new Q |
| `toughening` | Electric thermal toughening air quench and first quality release | required | actual declared route | foreground | 1 kg reference flow; internal/service ledger creates no new Q |
| `handling` | Released-glass storage packing returns and handling services | required | actual declared route | foreground | 1 kg reference flow; internal/service ledger creates no new Q |

### Process: Stock-sheet cutting edging washing and drying (`preparation`)

#### Inputs

##### Product flows

###### Float glass and surface ground or polished glass, in sheets (`raw_sheet`)

Receive uncoated annealed soda-lime float stock sheets, not already toughened or laminated. This generic manufactured sheet Product at-plant identity supplies Mass only; no CAS, grade, thickness, geographic, density or performance constraint is supplied. Qualify the actual annealed uncoated float subset and supplier burden through annealing and stock-sheet production. The name also admits surface-polished sheets; that does not authorize substitution of an already fabricated pane or reuse of a generic provider. Record full sheet purchases once and actual cut losses.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `pilkington-toughened-glass`

###### Alternating current (`preparation_electricity`)

Meter the actual operation, extraction, pumps, drying, drives and attributable auxiliary electricity. UUID is CN grid-average consumption mix delivered to users below 1 kV, Product flow, AC synonym; native reference property is Net calorific value, not Mass. Use only for that matched supply; other geography, voltage, self-generation or supplier mix needs its own identity/provider and explicit transformer losses. The engineering route is not restricted to China. Do not purchase internal blower air or a second electricity supply for the same kWh. Preserve start/stop, idle, unsuccessful loads, cleaning and rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `gpd-tempering-control-2023`; `glaston-fc-flat-tempering`

###### Process Water (`wash_water`)

Treated industrial process-water Product only: native synonyms include service, utility, reclaimed and recirculating process water, but the exchange is actual external treated-water makeup. No purity or geography is fixed by the native record. Match actual treatment, rinse quality, supplier and state. Internal circulation is not new purchase or natural-resource abstraction. Separately add actual raw-water abstraction/treatment and its electricity if done onsite.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `landglass-wash-dry-2020`

###### Light petroleum glass-cutting fluid (`cutting_fluid`)

Conditional only if this specific supplied light-petroleum formulation is used for scoring. Record the whole purchased formulation once with SDS, supplier grade and independently measured density at recorded temperature if volumetric. Constituent assays and carrier fractions are subledgers, not extra purchases. This is not a universal cutting-fluid recipe; different actual oil or an oil-free scorer needs its own atomic exchange or documented absence. Identify actual evaporating chemical species individually from SDS and measurement; a total VOC reading is not a named chemical mass.

- Selected flow: Light petroleum glass-cutting fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `pilkington-toughened-glass`

###### Aqueous glass-washer detergent formulation (`washing_detergent`)

Conditional whole supplied aqueous detergent when actually used and compatible with the washer and uncoated substrate. Supplier formulation and carrier-water assay remain explicit; do not add that water as purchased wash_water again. Site mixing requires each actual purchased ingredient, mixing energy and losses in separate rows. A water-only washer does not acquire this detergent by assumption.

- Selected flow: Aqueous glass-washer detergent formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `landglass-wash-dry-2020`

###### Diamond-bonded glass-edging wheel (`diamond_wheel`)

One supplied diamond-bonded wheel article with actual bond, dimensions and wear/replacement records; allocate its embodied burden over measured use without inventing service life. This does not include loose diamond, crystalline silica or an entire machine. The equipment source also offers bakelite/felt/cerium polishing configurations; they are adjacent alternatives, not ingredients of this simple ground-edge route. If actually used, create each real wheel, felt or polishing formulation exchange separately.

- Selected flow: Diamond-bonded glass-edging wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `bavelloni-ve-edgers`

###### Mineral machine lubricating oil (`machine_oil`)

Conditional actual non-WIP machine oil charge and makeup; distinguish initial equipment fill, retained circulating stock, replacement and leakage. Carry a separate per-exchange historical burden vector for opening/closing installed fluid and spent removal; a fill is not all consumed merely because purchased. Do not classify equipment oil as glass WIP. A different lubricant, grease, refrigerant or coolant requires a separate chemically specific row, not this oil label.

- Selected flow: Mineral machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `bavelloni-ve-edgers`

#### Outputs

##### Product flows

###### Cut edge-ground washed dry annealed soda-lime glass pane (`prepared_out`)

Matched internal pane transfer before toughening. Preserve actual mass, dry surface state, dimensions, edge quality and each inherited exchange burden. Equal amounts and opposite signs cancel on consolidation; this is not a newly purchased finished safety product, a co-product or Q. No additional grinding or drilling is assumed after toughening.

- Selected flow: Cut edge-ground washed dry annealed soda-lime glass pane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `pilkington-toughened-glass`; `landglass-wash-dry-2020`

##### Waste flows

###### Uncoated annealed soda-lime glass cutting scrap (`cut_glass_scrap`)

Weigh the actual segregated trim and broken stock leaving preparation. Track internal retention and external fate separately; retain originating glass burden and failed-load losses. A positive sale price does not automatically create a co-product or recycling credit.

- Selected flow: Uncoated annealed soda-lime glass cutting scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `pilkington-toughened-glass`

###### Wet soda-lime glass grinding sludge (`glass_sludge`)

One actual segregated wet sludge stream; measure wet mass, dry glass solids, entrained water, oil/detergent and wheel wear independently. Keep dry glass and water subledgers without buying them again or representing amorphous glass as pure crystalline silica. Do not solve both sludge moisture and evaporation from one residual.

- Selected flow: Wet soda-lime glass grinding sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `bavelloni-ve-edgers`; `landglass-wash-dry-2020`

###### Glass-washing aqueous effluent (`wash_effluent`)

One actual wastewater stream to an identified offsite treatment receiver; sample flow and species/solids. Measured integrated volume is not multiplied by time again. COD is an indicator and not a chemical mass. If treated onsite, add every actual treatment reagent, electricity, sludge and individual species discharge to its real receiving medium; do not retain this offsite stream as an additional discharge.

- Selected flow: Glass-washing aqueous effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `landglass-wash-dry-2020`

###### Spent diamond-bonded glass-edging wheel (`spent_wheel`)

Actual worn wheel remainder separated from grinding fines; reconcile mass retained in the wheel with wear already entering sludge or dust. Use actual receiver and treatment, not a loose-diamond flow.

- Selected flow: Spent diamond-bonded glass-edging wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `bavelloni-ve-edgers`

###### Spent mineral machine lubricating oil (`spent_oil`)

Conditional actual equipment-oil drain with its water/contamination assays and opening/closing installed-fluid quantities; not the whole purchased charge every period. Collect a named atomic leak/emission for each actual chemical and destination, plus contaminated absorbent separately where used.

- Selected flow: Spent mineral machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `bavelloni-ve-edgers`

##### Elementary flows

###### water vapour (`drying_vapour`)

Only incremental H2O evaporated from washed panes or the water system to air, unspecified subcompartment; native CAS 7732-18-5 and Elementary emission-to-air identity with Mass reference. Native synonyms contain broad water/isotopic terms but do not justify heavy/tritiated water, liquid effluent or steam supply. Prefer measured receiver subcompartment if known. Measure inlet/outlet humidity and dry-air flow or independent water balance with measured liquid and sludge stores. Ambient water pass-through is not new process evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `landglass-wash-dry-2020`

###### Soda-lime glass dust to air (`glass_dust`)

Conditional actual escaping glass particles after capture, with measured size fractions, composition and receiving compartment. This one physical amorphous-glass particulate stream does not establish crystalline quartz content; add independently identified hazardous chemical species only when evidence supports them. Captured glass fines belong to their actual waste, not also air.

- Selected flow: Soda-lime glass dust to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `bavelloni-ve-edgers`

### Process: Electric thermal toughening air quench and first quality release (`toughening`)

#### Inputs

##### Product flows

###### Alternating current (`toughening_electricity`)

Meter the actual operation, extraction, pumps, drying, drives and attributable auxiliary electricity. UUID is CN grid-average consumption mix delivered to users below 1 kV, Product flow, AC synonym; native reference property is Net calorific value, not Mass. Use only for that matched supply; other geography, voltage, self-generation or supplier mix needs its own identity/provider and explicit transformer losses. The engineering route is not restricted to China. Do not purchase internal blower air or a second electricity supply for the same kWh. Preserve start/stop, idle, unsuccessful loads, cleaning and rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_toughening`
- Sources: `gpd-tempering-control-2023`; `glaston-fc-flat-tempering`

###### Cut edge-ground washed dry annealed soda-lime glass pane (`prepared_in`)

Matched internal pane transfer before toughening. Preserve actual mass, dry surface state, dimensions, edge quality and each inherited exchange burden. Equal amounts and opposite signs cancel on consolidation; this is not a newly purchased finished safety product, a co-product or Q. No additional grinding or drilling is assumed after toughening.

- Selected flow: Cut edge-ground washed dry annealed soda-lime glass pane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_toughening`
- Sources: `pilkington-toughened-glass`; `landglass-wash-dry-2020`

#### Outputs

##### Product flows

###### Safety glass (`first_release`)

Quantitative reference: newly manufactured unframed flat uncoated monolithic thermally toughened soda-lime glass that passes its first required quality release. Native Product identity is generic Safety glass, finished manufactured product, production mix at plant; no CAS, geographic, thickness, specific thermal route, certification, fragmentation or strength limit is supplied. Thus qualify the thermal route and actual test/specification independently. This identity is not evidence that heat-strengthened, laminated or chemically strengthened glass is interchangeable. Q counts actual net dry-surface glass mass once after all required tests including heat soak only when specified, excluding packaging and destructive samples. Closing FG already includes any newly released panes.

- Selected flow: Safety glass `7f0d847d-fa53-4f06-bc5f-2364f5a78bd4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `pilkington-toughened-glass`; `gpd-tempering-control-2023`

##### Waste flows

###### Fractured thermally processed soda-lime glass reject (`quench_reject`)

Weigh furnace, quench, handling-before-release failures and destructive test fragments separately by origin within the same segregated physical glass waste, retaining all heat and input burden. Never assign only successful-load electricity or count a sacrificed specimen in Q. If heat soak is specified, include its real electricity and breakages before first release; do not infer its energy or acceptance from a non-HST product.

- Selected flow: Fractured thermally processed soda-lime glass reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_toughening`
- Sources: `pilkington-toughened-glass`; `gpd-tempering-control-2023`

### Process: Released-glass storage packing returns and handling services (`handling`)

#### Inputs

##### Product flows

###### Alternating current (`handling_electricity`)

Meter the actual operation, extraction, pumps, drying, drives and attributable auxiliary electricity. UUID is CN grid-average consumption mix delivered to users below 1 kV, Product flow, AC synonym; native reference property is Net calorific value, not Mass. Use only for that matched supply; other geography, voltage, self-generation or supplier mix needs its own identity/provider and explicit transformer losses. The engineering route is not restricted to China. Do not purchase internal blower air or a second electricity supply for the same kWh. Preserve start/stop, idle, unsuccessful loads, cleaning and rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `gpd-tempering-control-2023`; `glaston-fc-flat-tempering`

###### Safety glass (`released_received`)

Previously first-released glass physically received into or dispatched from storage/packing, with cohort, original release, original delivery and return link. Same generic finished manufactured Safety glass Product at-plant identity and Mass restrictions as first_release; only actual qualified flat uncoated monolithic thermally toughened soda-lime panes are represented. This is a physical service transfer, not new production Q. Cancel internal receipt against manufacturing transfer; keep gross dispatch, returns, opening/closing FG, repairs, breakage and retained water in the physical service ledger, and reverse only the original delivery-ledger burden assignment before reassignment; never reverse or re-charge manufacture already assigned at first release.

- Selected flow: Safety glass `7f0d847d-fa53-4f06-bc5f-2364f5a78bd4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Process Water (`service_water`)

Conditional external treated industrial process-water makeup for actual cleaning of already released panes or returnable racks. Same native Process Water Product limits as wash_water: match actual treatment, supplier and state, no fixed purity/geography; circulation is not new purchase. Collect separately from manufacturing and assign to the serviced release cohort. No newly manufactured mass results from reinspection or washing.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `landglass-wash-dry-2020`

###### Polyethylene film (`pe_film_purchase`)

One supplied PE film. Native Product flow is production mix at plant, CAS9002-88-4, polyethylene/plastic-sheet synonyms; comment describes ethylene-derived PE, and mentions PET as a competing polyester, not as the selected polymer. Its luggage classification is inconsistent with the otherwise coherent PE-film identity and is not authority. Match actual PE resin, film form, additives and provider; PET laminate or an agricultural-use film is not this exchange. New purchase only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Polyethylene film (`pe_film_return_received`)

One supplied PE film. Native Product flow is production mix at plant, CAS9002-88-4, polyethylene/plastic-sheet synonyms; comment describes ethylene-derived PE, and mentions PET as a competing polyester, not as the selected polymer. Its luggage classification is inconsistent with the otherwise coherent PE-film identity and is not authority. Match actual PE resin, film form, additives and provider; PET laminate or an agricultural-use film is not this exchange. External return received only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Agglomerated cork glass-separator pad (`cork_pad_purchase`)

One supplied cork pad article; retain actual adhesive/backing construction if present, supplier and unit mass measured separately. Different foam, paper or adhesive formulation is a different atomic exchange. New purchase only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Agglomerated cork glass-separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Agglomerated cork glass-separator pad (`cork_pad_return_received`)

One supplied cork pad article; retain actual adhesive/backing construction if present, supplier and unit mass measured separately. Different foam, paper or adhesive formulation is a different atomic exchange. External return received only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Agglomerated cork glass-separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Uncoated kraft-paper glass interleaf (`paper_interleaf_purchase`)

One uncoated kraft-paper interleaf; actual coating, thickness and basis weight must be confirmed, not inferred from a carton or pulp record. New purchase only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Uncoated kraft-paper glass interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Uncoated kraft-paper glass interleaf (`paper_interleaf_return_received`)

One uncoated kraft-paper interleaf; actual coating, thickness and basis weight must be confirmed, not inferred from a carton or pulp record. External return received only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Uncoated kraft-paper glass interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Reusable steel glass transport rack (`steel_rack_purchase`)

One steel glass rack article with measured empty mass and unique rack ID; reused external returns do not buy a new rack or create a co-product. Its embodied burden follows measured service use and inherited per-exchange stock vector; no default service life or allocated purchase per shipment. New purchase only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Reusable steel glass transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Reusable steel glass transport rack (`steel_rack_return_received`)

One steel glass rack article with measured empty mass and unique rack ID; reused external returns do not buy a new rack or create a co-product. Its embodied burden follows measured service use and inherited per-exchange stock vector; no default service life or allocated purchase per shipment. External return received only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Reusable steel glass transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

#### Outputs

##### Product flows

###### Safety glass (`released_dispatched`)

Previously first-released glass physically received into or dispatched from storage/packing, with cohort, original release, original delivery and return link. Same generic finished manufactured Safety glass Product at-plant identity and Mass restrictions as first_release; only actual qualified flat uncoated monolithic thermally toughened soda-lime panes are represented. This is a physical service transfer, not new production Q. Cancel internal receipt against manufacturing transfer; keep gross dispatch, returns, opening/closing FG, repairs, breakage and retained water in the physical service ledger, and reverse only the original delivery-ledger burden assignment before reassignment; never reverse or re-charge manufacture already assigned at first release.

- Selected flow: Safety glass `7f0d847d-fa53-4f06-bc5f-2364f5a78bd4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Polyethylene film (`pe_film_gross_out`)

One supplied PE film. Native Product flow is production mix at plant, CAS9002-88-4, polyethylene/plastic-sheet synonyms; comment describes ethylene-derived PE, and mentions PET as a competing polyester, not as the selected polymer. Its luggage classification is inconsistent with the otherwise coherent PE-film identity and is not authority. Match actual PE resin, film form, additives and provider; PET laminate or an agricultural-use film is not this exchange. Gross physical dispatch only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Polyethylene film (`pe_film_return_sent`)

One supplied PE film. Native Product flow is production mix at plant, CAS9002-88-4, polyethylene/plastic-sheet synonyms; comment describes ethylene-derived PE, and mentions PET as a competing polyester, not as the selected polymer. Its luggage classification is inconsistent with the otherwise coherent PE-film identity and is not authority. Match actual PE resin, film form, additives and provider; PET laminate or an agricultural-use film is not this exchange. External return sent only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Agglomerated cork glass-separator pad (`cork_pad_gross_out`)

One supplied cork pad article; retain actual adhesive/backing construction if present, supplier and unit mass measured separately. Different foam, paper or adhesive formulation is a different atomic exchange. Gross physical dispatch only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Agglomerated cork glass-separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Agglomerated cork glass-separator pad (`cork_pad_return_sent`)

One supplied cork pad article; retain actual adhesive/backing construction if present, supplier and unit mass measured separately. Different foam, paper or adhesive formulation is a different atomic exchange. External return sent only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Agglomerated cork glass-separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Uncoated kraft-paper glass interleaf (`paper_interleaf_gross_out`)

One uncoated kraft-paper interleaf; actual coating, thickness and basis weight must be confirmed, not inferred from a carton or pulp record. Gross physical dispatch only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Uncoated kraft-paper glass interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Uncoated kraft-paper glass interleaf (`paper_interleaf_return_sent`)

One uncoated kraft-paper interleaf; actual coating, thickness and basis weight must be confirmed, not inferred from a carton or pulp record. External return sent only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Uncoated kraft-paper glass interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Reusable steel glass transport rack (`steel_rack_gross_out`)

One steel glass rack article with measured empty mass and unique rack ID; reused external returns do not buy a new rack or create a co-product. Its embodied burden follows measured service use and inherited per-exchange stock vector; no default service life or allocated purchase per shipment. Gross physical dispatch only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Reusable steel glass transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Reusable steel glass transport rack (`steel_rack_return_sent`)

One steel glass rack article with measured empty mass and unique rack ID; reused external returns do not buy a new rack or create a co-product. Its embodied burden follows measured service use and inherited per-exchange stock vector; no default service life or allocated purchase per shipment. External return sent only when it actually crosses the gate; distinguish empty from glass-attached stocks and keep the full material-specific equation in packaging_ledger. Internal reuse cancels; receipt returns and dispatch are not additional material consumption or net product Q.

- Selected flow: Reusable steel glass transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

##### Waste flows

###### Waste polyethylene glass-wrapping film (`pe_film_waste`)

Actual segregated article waste only, with contamination and receiver recorded. Reconcile this mass once with the same-material full physical packaging ledger; do not count gross dispatch as waste, or credit recycling automatically.

- Selected flow: Waste polyethylene glass-wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Waste agglomerated cork glass-separator pad (`cork_pad_waste`)

Actual segregated article waste only, with contamination and receiver recorded. Reconcile this mass once with the same-material full physical packaging ledger; do not count gross dispatch as waste, or credit recycling automatically.

- Selected flow: Waste agglomerated cork glass-separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Waste kraft-paper glass interleaf (`paper_interleaf_waste`)

Actual segregated article waste only, with contamination and receiver recorded. Reconcile this mass once with the same-material full physical packaging ledger; do not count gross dispatch as waste, or credit recycling automatically.

- Selected flow: Waste kraft-paper glass interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Retired steel glass transport rack (`steel_rack_waste`)

Actual segregated article waste only, with contamination and receiver recorded. Reconcile this mass once with the same-material full physical packaging ledger; do not count gross dispatch as waste, or credit recycling automatically.

- Selected flow: Retired steel glass transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Broken previously released thermally toughened soda-lime glass (`fg_breakage`)

Actual post-release storage/packing/return breakage with original cohort mass and inherited historical burdens; it is not another pre-Q failure or negative new production. Physical FG loss and the assigned service burden remain visible. Actual cleaning, repacking or rack maintenance must record changed water/material mass and incremental energy and losses; reverse only original delivery-ledger attribution when reassigning a return. Such service is not restoration of fractured glass or a failed safety test into a compliant pane. Broken glass remains waste; replacement panes require their own complete manufacture and unique first release, with no second Q for the original pane. Re-melting/re-manufacture is outside this conversion route and requires separate methodology. Reinspection never resets Q.

- Selected flow: Broken previously released thermally toughened soda-lime glass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `pilkington-toughened-glass`

###### Released-glass and rack cleaning aqueous effluent (`service_effluent`)

Conditional actual segregated aqueous cleaning wastewater to offsite treatment, with measured liquid, solids and dissolved species; no chemical mass inferred from COD and no duplicate onsite discharge. Allocate to actual service cohorts, not new yield.

- Selected flow: Released-glass and rack cleaning aqueous effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `landglass-wash-dry-2020`

##### Elementary flows

###### water vapour (`service_vapour`)

Conditional incremental H2O to air from actual post-release/rack cleaning. Same native CAS7732-18-5, Elementary air-unspecified, Mass restriction as drying_vapour; excludes atmospheric background humidity, liquid wastewater and purchased steam. Measure independently from sludge/effluent and assign service cohort.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `landglass-wash-dry-2020`

## 7. Allocation and Co-product Handling

The sequence below applies only to attributional multifunctional processes. Industrial manufacturing documents do not by themselves establish LCA allocation rules.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | attributional manufacturing and services | Use attributional modelling only. Identify exclusive sheet, machine, batch and service records first; subdivide or virtually subdivide wherever quantitative technical relationships can isolate an exchange. Keep manufacturing and FG services separate and allocate each to the relevant release cohort. Do not choose arbitrarily between physical and economic allocation. | `ilcd-attributional-2010` |
| `allocation_causality` | residual shared exchanges | For each exchange remaining shared, identify and document the determining physical causal relationship. Do not apply one mass ratio to every flow. Different thickness, loading, heating recipe and quench intensity require actual measurements/models; area, time or mass are not interchangeable automatic keys. For shared rack/storage/transport services demonstrate the actual limiting capacity and duration/distance. Preserve failed-load and idle burdens and document any distortion. | `ilcd-attributional-2010`; `gpd-tempering-control-2023` |
| `allocation_residual` | genuinely inseparable residual multifunctionality | Only for genuinely residual shared flows after the preceding steps, use contemporaneous market values of actual co-functions in their real condition and amounts at the same common-process exit/entry gate. Strip downstream-only finishing, transport, packaging and margin from remote prices. If the correct value cannot be established retain a review hold and quantify sensitivity; do not invent a fixed percentage. This concerns multifunctional processes, not QFD comparison of multifunctional consumer products. | `ilcd-attributional-2010` |
| `allocation_waste` | rejects returns and packaging | Waste and internal recirculation are not automatic co-products, negative production or avoided-production credits. Establish actual product/waste status, ownership, treatment and burden transfer for external cullet and retired packaging. Preserve original burdens and actual incremental repair/service loads; never erase failure burdens or count returning racks as new purchases. | `ilcd-attributional-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The protocol aggregation_rule cell declares the final reporting basis only and performs no calculation; the collection method retains unnormalized totals and references the same sole calculation below. Collect raw records before division by the reference quantity. Keep physical observations, historical exchange burdens, allocation and final unit results separately. Manufacturing attribution ends at first release for all Q; post-release service observations retain the original cohort Q and observed interval, including unshipped FG. Stored manufacturing history is not a second service input or a deduction from already released production. Apply each complete rule with its context; do not extract a formula while omitting adjacent conditions.

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_preparation | preparation | stock sheet and preparation exchanges | raw_activity_records | sheet ID; supplier and annealed state; raw purchase and issue mass; raw meter readings and units; start/end times; cutting dimensions; thickness and calibrated mass; pre-Q reject and sample mass; water makeup and tank stocks; sludge wet mass and measured solids; independent evaporation measurement; actual formulation SDS and full supplied mass; tool replacement and wear; installed oil opening/closing physical quantities; per-exchange inherited vectors; destination; uncertainty | Calibrated scale and traceable supplier/meter records; independently sample dry solids and oil/water content; log all successful and failed jobs with start/stop idle cleaning and rework; retain original unnormalized readings. Sum raw observations only; retain stock and cohort links; per reference flow result is supplied solely by normalize_exchange after unit conversion and attribution | native units with kg and MJ conversions retained | each job and meter interval | full declared reporting period including shutdown | selected site and linked suppliers | per reference flow | scale calibration; meter coverage; supplier SDS; waste tickets; sampling records; stock ledger |
| cp_toughening | toughening | electric heating quench and rejection | raw_batch_records | pane and load ID; linked preparation transfer; furnace mode and recipe; actual thickness and edge quality; raw heater/convection/blower/drive kWh; loading and operating times; ambient air temperature/humidity; measured glass quality; required heat soak record; failed load and test breakage; WIP opening/closing physical quantities; inherited exchange vectors; original first release ID | Link actual electric meter intervals and furnace logs to all loads and tests; retain quench quality measurements and actual standards; independently reconcile failures and WIP; never infer strength or release from a recipe alone. Sum unnormalized raw load records; include zero-output loads; per reference flow result only through normalize_exchange after attribution | native units with kg and MJ conversions retained | every load and quality release | same manufacturing cohort and reporting period | selected site furnace and testing stations | per reference flow | meter/time synchronisation; actual test record; pane traceability; failed-load register |
| cp_release | toughening | unique first_release reference | release_mass_records | unique pane ID; cohort; first required release time; prior release flag; calibrated gross mass; packaging tare; dry-surface net glass mass; specimen/reject disposition; required test and heat soak completion | Weigh accepted dry-surface panes or a traceable homogeneous lot with calibrated scale excluding packaging; link acceptance and first release once; keep any destructive specimen outside Q. Sum eligible unique first-release net glass mass as Q without dividing; the single normalized reference is 1 kg | kg | each first release | same release cohort as attributed inventory | selected first-release station | per reference flow | calibration; tare; unique release registry; test completion |
| cp_handling | handling | physical FG and packaging services | raw_service_and_stock_records | original release and original delivery ID; returned pane/rack ID; opening/closing FG and dry glass/water masses; gross dispatch and external glass returns; actual repair additions/removals and rewash/repair energy; damaged FG; for each packaging article opening/closing empty stock and attached-WIP/FG stock and reusable stock; purchases; externalreturnreceived; gross physical outgoing; externalreturnsent; waste; internal reuse; measured article mass; raw electric and water readings; service cohort and original cohort Q; observed service start/end and coverage including unshipped FG; per-exchange historical vectors | Count/scan each article and pane with weighbridge or calibrated tare checks; reconcile every external receipt/dispatch and internal transfer; segregate cohort service readings from new manufacturing; independently measure actual service moisture changes and retain original delivery-ledger reversals without reversing or repeating manufacture. Collect raw totals without Q division; retain full packaging and FG equations; per reference flow attributable service result only through normalize_exchange | native units and measured kg plus MJ | each physical movement plus period stocktake | reporting period with original-cohort history retained | selected storage packing and handling site through declared physical dispatch | per reference flow | stocktake; dispatch/return receipts; original delivery reversal; repair records; measured packaging mass and supplier construction |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `convert_raw` | all inventory rows | Convert each raw reading to its declared row unit before attribution. Electricity MJ = actual kWh * 3.6. True rates require integration over the measured interval; cumulative readings use differences once. Use independently measured density/state for actual liquid/gas volume and measured article configuration for count/area conversions. Preserve original readings and units. | raw observations; unit factors; measured density and state; measured article configuration | converted raw exchange totals | `gpd-tempering-control-2023` |
| `attribute_raw` | all inventory rows | For each exchange j and its identified cohort ledger, use A_j = B_open_j + converted_period_j + B_external_returns_j - B_close_j - B_transferred_elsewhere_j only for attributable stock/burden reconciliation, then apply documented subdivision or residual exchange-specific allocation. Manufacturing B terms cover unused raw materials, non-WIP equipment charges and PRE-release WIP only. Assign complete manufacturing burdens to all Q at first release, including its newly released closing FG; never subtract that FG manufacturing vector or re-charge opening/returned FG manufacture. Carry it separately for traceability. Post-release service A_j contains only actual incremental service exchanges and their own retained/used stock vectors, matched to the ORIGINAL first-release cohort Q including its unshipped FG over a declared observed service interval; no forecast service or division by unrelated current-period Q. If original Q or the service attribution is unknown, retain raw records without a unit result pending review. Original delivery reversals move historical burdens between delivery/cohort ledgers only and do not reverse first release or manufacturing Q. For physical directional transfer/dispatch/return/waste rows, retain the actual gross movement assigned to the cohort as A_j; do not apply an inherited manufacturing stock correction to the physical movement. B terms are vectors of that same exchange, not scalar glass stocks. Count each purchase once and cancel internal transfers; reconcile physical amounts and environmental burdens separately. Corrections reference original records. | converted raw totals; exchange-specific opening and closing vectors; external returns; transfer and cohort links; allocation record | A_j attributable raw exchange totals | `ilcd-attributional-2010` |
| `release_denominator` | first_release | Q = sum of actual dry-surface net glass mass of uniquely first-released panes after required tests. Pre-release destructive samples and failures are excluded. Newly released closing FG is already in Q; never add it as another output. Shipment, return, repair and reinspection do not add Q. | cp_release; unique first-release registry; net glass mass; required tests | Q in kg | `pilkington-toughened-glass`; `gpd-tempering-control-2023` |
| `normalize_exchange` | all inventory rows | q_j = A_j / Q for Q > 0. Execute this division once after convert_raw and attribute_raw; q_j is the exchange per 1 kg reference flow. For Q = 0 retain A_j and all raw records with no unit result. Cards and protocol aggregation only reference this same result and never divide again. | A_j; Q; convert_raw; attribute_raw; cp_release | q_j per 1 kg reference flow | `ilcd-attributional-2010` |
| `physical_gates` | all inventory rows | Manufacturing: opening raw glass stock + opening glass WIP + external raw glass received = closing raw glass stock + closing glass WIP + Q + dry-glass manufacturing wastes + any other independently identified physical glass outputs. Water/material additions, dust and moisture are balanced independently. FG service: opening FG + first-release internal receipt + external glass returns + measured repair additions = closing FG + gross glass dispatch + external glass return sent + FG waste + measured repair removals and water/air losses. All masses are on stated consistent phase/moisture bases. Consolidation cancels first-release internal receipt against manufacturing transfer; it does not add Q and new closing FG as independent external outputs. | cp_preparation; cp_toughening; cp_release; cp_handling; independent phase and species measurements | separate and consolidated physical mass and relevant element checks | `gpd-tempering-control-2023`; `landglass-wash-dry-2020` |
| `packaging_ledger` | all inventory rows | For EACH packaging article separately: opening empty + opening attached WIP + opening attached FG + opening reusable + purchases + external returns received = closing empty + closing attached WIP + closing attached FG + closing reusable + gross physical outgoing + external returns sent + waste. Categories are mutually exclusive. Gross outgoing includes packaging attached to gross glass dispatch even if that glass later returns. Internal reuse/transfer cancels; it is not a new purchase, Q, yield or automatic co-product. Retain inherited per-exchange burden vectors and actual repeated-service allocation separately from this physical mass ledger. | cp_handling; article-specific stocks; purchases; external receipts and dispatch; returns; waste; inherited vectors | each article physical ledger and attributed burden reconciliation | `ilcd-attributional-2010`; `pilkington-toughened-glass` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Retain the full native flow restrictions within every inventory description and actual provider matching evidence. UUID is an identity, not an amount or process approval. Auxiliary unresolved UUIDs remain concrete physical exchanges. | Direct native identities; supplier state and composition; actual product tests |
| dq_period | all inventory rows | Use a complete representative declared period with all campaigns and start/stop idle and zero-output records. Retain original release cohorts and original delivery links across period boundaries. | Raw meters; period/cohort ledger; original delivery reversals |
| dq_water | all inventory rows | Independently measure free surface water, wastewater, sludge moisture and evaporation; reaction water, structural water and dissolved species cannot be inferred from one residual. Keep actual receiving medium. Thermal stress treatment alone supplies no reaction stoichiometry. | Independent samples and phase/species records; moisture and tank inventories |
| dq_stocks | all inventory rows | Separate physical stock quantities from each inherited exchange vector in WIP, FG, oil charge and water systems; do not set missing history to zero. Carry retained burdens and allocate actual use to the relevant cohort. | Opening/closing physical stocks; exchange-specific historical records |
| dq_unknown | all inventory rows | Preserve unknown, measured zero, not applicable and below-detection separately. Supplier/auxiliary identity and future foreground quantities are collection requirements, not fabricated defaults or automatically missing methodology. Actual unknown core relationships require a hold. | Gap register; detection limits; uncertainty and sensitivity record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | all dataset identities | Verify the input is actual annealed uncoated float and the terminal is first-released flat monolithic thermally toughened soda-lime safety glass. Keep heat-strengthened and laminated counterexamples explicit; no generic Safety glass UUID certifies route, dimensions, strength or legal conformity. Check every selected native name, synonym, CAS, form, route, geography, medium, type and property. Respect supply restrictions on each row and use a different verified identity when incompatible. | `pilkington-toughened-glass`; `gpd-tempering-control-2023` |
| `validate_balance` | manufacturing FG and combined physical gates | Close manufacturing and FG-service mass gates independently and then cancel matching internal transfers. Do not add closing FG to Q as production. Test dry-glass, free-water and relevant elemental subbalances using independent measured species/phase data. Heating is physical stress treatment, not a basis to invent reaction water, oxygen consumption or carbonate CO2. Preserve actual additional reactions or coating decomposition if observed; such a changed route needs explicit review. | `gpd-tempering-control-2023`; `landglass-wash-dry-2020` |
| `validate_measurement` | all raw records and calculations | Require traceable unit conversion before allocation and the single normalize_exchange operation. Do not divide in protocol collection or again in cards/aggregation. Preserve Q=0 raw burdens without a unit result. Distinguish measured zero, absent, unknown and below-detection-limit. Validate period/cohort stocks and per-exchange historical vectors; a scalar stock mass cannot substitute for its burden vector. | `ilcd-attributional-2010` |
| `validate_packaging` | each packaging article | Require a complete material-specific physical ledger including empty, WIP-attached, FG-attached and reusable opening/closing stocks, purchases, external returns received, gross physical dispatch, external returns sent and waste. Internal reuse cancels. These flows do not change glass Q or yield or create automatic co-products. Reconcile count/area to independently measured mass for the actual article. | `ilcd-attributional-2010`; `pilkington-toughened-glass` |
| `validate_completeness` | dataset handoff | Missing actual terminal evidence, missing manufacturing operations or unknown core burden relationships prevent a completed dataset claim. Ordinary supplier/activity measurements and unresolved auxiliary UUIDs are future data-production requirements rather than evidence of absent exchanges. Report each gap, failed retrieval, unresolved applicability and uncertainty without treating a technical/schema check as scientific or translation approval. | `pilkington-toughened-glass`; `ilcd-attributional-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Upstream data for qualified safety-glass-pane manufacture at declared state; disclose storage/packing services separately |
| allowed_use | Further modelling with compatible technology state specification and provider boundary |
| excluded_use | Automatic safety certification; cross-route performance equivalence; replacement for stock-sheet manufacture; laminated-retention function; treating net deliveries as first-release Q |
| required_metadata | site and reporting period; release cohort and first quality-release gate; annealed uncoated soda-lime float input and supplier burden; flat monolithic unframed thermal-toughening route; stock and pane dimensions and measured thickness; dry-surface net mass and calibrated measurement method; actual thermal recipe and electrical furnace configuration; air-quench conditions and environmental conditions; actual edge preparation and hole specification; applicable product standard and actual quality-test records; heat-soak requirement and performed or absent state; destructive specimens and failed-load disposition; finished-glass surface and moisture condition; same-period WIP and FG physical stocks and exchange-specific inherited burdens; packaging composition and full returns/stocks ledger; electricity geography voltage mix and meter boundary; water treatment origin quality and receiving media; allocation justification and residual common-gate value basis; original release-cohort Q and declared observed post-release service interval including unshipped FG |
| required_quality_disclosure | Raw quantities and coverage; zero versus unknown; failures and zero output; each physical gate and inherited exchange vector; UUID/provider limits; unresolved auxiliary identities and uncertainty |
| update_trigger | Material change in supplied input state; core route/terminal; applicable standard; formulation; provider/geography/voltage; testing; allocation or stock method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| pilkington-toughened-glass | handbook | https://www.pilkington.com/en-gb/united-kingdom/architectural-and-technical-glass/product-categories/safety-and-security/pilkington-toughened-glass | Primary manufacturer product description and explicit heat-strengthened counterexample; thermal safety-glass terminal and pre-toughening fabrication; no numeric performance or conformity default |
| gpd-tempering-control-2023 | literature | Aronen A.; Kelin S.; Lyytikäinen P. How to change the tempering process control from settings to specifications. GPD 2023 pp.268–270. https://gpd.fi/wp-content/uploads/2022/09/78-Antti-Aronen-How-to-change-the-tempering-process-control.pdf | Primary technical paper; electric roller-furnace heating and air quench; Figure1 heat/cool stages; Figures2–3 quality/process dependence and schematic limits; no temperature energy yield or strength default |
| landglass-wash-dry-2020 | handbook | LandGlass. Why the glass sheets must be washed and dried before tempering? 2020-11-05. https://www.landglass.net/FAQ/questioninfo/463.html | Primary equipment-maker explanation of residue removal and dry surface before toughening; no detergent formulation water or energy quantity default |
| bavelloni-ve-edgers | handbook | Bavelloni. VE Series straight-line edging machines. https://www.bavelloni.com/wp-content/uploads/2016/03/VERTICAL-EDGERS-VE-SERIES-ITA-ENG.pdf | Primary equipment brochure and page11 tools configuration; wheel wear and adjacent polishing alternatives; neither a complete safety-glass route nor a same-factory quantity recipe |
| glaston-fc-flat-tempering | handbook | Glaston. FC Series X. https://glaston.net/machine/fc-series/ | Primary commercial evidence of flat-glass convection tempering equipment and actual flat-tempered product route; marketing energy/yield claims not adopted as values or certification |
| ilcd-attributional-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA — Detailed guidance. First edition March2010 §§7.9.2–7.9.3 pp.255–268. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and virtual subdivision; exchange-specific determining physical causality; only genuinely residual common-process-gate contemporaneous actual-state market value; no arbitrary fixed shares or automatic credit |
