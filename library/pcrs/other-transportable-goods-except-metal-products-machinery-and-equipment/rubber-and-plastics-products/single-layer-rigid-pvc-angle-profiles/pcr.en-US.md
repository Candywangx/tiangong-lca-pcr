---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-rigid-pvc-angle-profiles
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Single-layer rigid PVC angle profile manufacture

## 1. Scope and Applicability

This bounded method manufactures single-layer, non-cellular, unreinforced unplasticised PVC equal-leg L-angle profiles with solid walls, by single-screw melt extrusion of purchased complete pellets/cubes, water sizing/cooling, haul-off, cut-to-length and first quality release. Profiles are uncoated and unprinted; there is no flexible lip, reinforcement, enclosed pipe bore or assembled frame. The actual drawing, compound grade, colour, acceptance criteria and supply condition are mandatory. A solid wall does not mean a solid rectangular rod. [geon-rigid-profile-guide; tp-rigid-pvc-equal-angles]

GEON supplies process evidence; TP Extrusions independently establishes real rigid-PVC equal-angle supply. Dachang shows a separate industrial endpoint and an onsite powder-compounding alternative; N.J. Precision demonstrates a different rigid/flexible coextrusion. This technical synthesis does not assert a common contemporary SKU, factory, order or formulation. Do not transfer source temperatures, rates, regrind percentages, dimensions, densities, flammability ratings or service lives as defaults. The GEON original contains both 2019 and 2021 copyright statements and warns that laboratory/typical results do not establish full-scale product suitability. [geon-rigid-profile-guide; tp-rigid-pvc-equal-angles; dachang-rigid-pvc; njpt-pvc-coextrusion]

The CPC original places profile shapes under 36310 beside plastic pipe and sheet classes; it does not provide a manufacturing recipe. Builders’ ware n.e.c. and articles n.e.c. are residual categories, not permission to absorb specified semifinished profile shapes. This method covers a narrow profile subset, not all monofilaments/rods or all CPC 36310. [un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-rigid-pvc-angle-profiles |
| classification_refs | CPC 3.0:36310; narrower profile subset; no accepted mapping implied |
| covered_products | One specified equal-leg rigid PVC L-angle with solid walls in cut lengths |
| excluded_products | Other polymers; flexible/plasticised PVC; powder dry-blend or onsite raw-resin compounding; twin-screw extrusion; coextrusion/capstock/soft lip; foam; fibre/metal reinforcement; tubes and fittings; sheet/film; textile monofilament; cast/compression-moulded rods; drilled/machined/assembled builders’ articles; coating/printing; purchased-finished-profile repacking. A materially changed route requires separate applicability and atomic inventory review. |
| representative_product | One approved uncoated equal-leg right-angle profile drawing; no generic size or service equivalence |
| production_route | Complete purchased pellets/cubes → actual preparation → single-screw electric melt extrusion → water sizing/cooling → haul-off/cut → inspection/first release → linked FG/packing/storage/dispatch records |
| market_state | Cooled conditioned cut-length angle at first quality release; detachable packaging separate; observed logistics interval disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a specified rigid equal-angle semifinished profile for later conversion/assembly |
| How much | 1 kg net newly first-quality-released angle |
| How well | Actual approved drawing and whole-compound grade with declared dimensions, condition and quality tests; no universal performance guarantee |
| How long or cycle | One matched first-release cohort and disclosed actual service window; no use-life equivalence |
| reference_flow_link | released_angle |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | plastic sheet, tube, profile `3df20f91-525e-4025-9bba-853e8af68a8e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete rigid PVC compound grade and supplier composition; pellet/cube supply and single-screw route; equal-leg L cross section and measured dimensions; noncellular unreinforced single-layer solid wall; colour and absence of coating/printing/soft lip; actual cooling/drying/regrind equipment and history; cut-length tolerance and approved acceptance tests; conditioned net mass and retained moisture; unique first-release gate Q with rejected and repeat IDs; site and period plus WIP/FG stock and each inherited burden vector; packaging composition and separate gross-shipment/return ledger; native family classification defect and lack of grade/geography/provider; actual CN low-voltage electricity interface and water provider |

Declare every qualifier in dataset metadata, product description, reference-flow comment or equivalent fields. The native reference family and its CPC defect are restricted in released_angle's full description; preserve that description whenever consuming this reference. One kg is not equivalent installed length or lifetime.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique newly first-quality-released net angle kg for one matched grade/drawing/state cohort, weighed with calibrated tare subtraction at the declared conditioning/moisture state. Failed runs, retests, delivery and returned articles do not create Q. Closing FG containing this release already includes its Q. |
| linear_mass | length or item records | Mass and length | kg; m; item | Measure same-lot conditioned net mass m_lot and length L_lot independently; length l becomes l*m_lot/L_lot kg. Item counts require the actual matched article net mass, never a guessed kg/item or nominal profile density. Keep raw unconverted records. |
| energy_basis | make_electricity; fg_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use the native Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66 reference MJ; convert metered kWh to MJ by 3.6 before attribution and normalize_once. Already integrated energy is not multiplied by time. Rated machine power alone is not consumption. |
| state_conversion | all inventory rows | Mass and actual physical state | kg; m3; h | Integrate only true rates. Integrated liquid/gas volume is already an amount. Density must be independently evidenced for the particular substance and temperature/pressure/composition; do not use water density for formulation, effluent or gas and do not derive density from a native secondary property. Keep actual/standard gas and wet/dry bases distinct. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered complete rigid PVC pellets/cubes and separately identified utilities/consumables; inherited WIP and regrind are carried with their original burdens |
| starting_condition_role | Foreground receiving gate; upstream compound manufacture retained in matched providers |
| product_classification_scope | Unassembled semifinished equal-angle profile subset; classification context is independent of native flow CPC text |
| recursive_input_rule | External finished-profile inputs require separate supplier identity, upstream burdens and omitted-stage disclosure; they cannot stand in for pellets. Internal regrind/release transfers retain lot burden vectors and cancel on consolidation. |
| upstream_dataset_requirement | Match complete formulation and supply form, real electricity voltage/geography, water treatment/supply and each packaging provider; include inbound transport in an explicit linked module. Generic UUIDs prove neither supplier compatibility nor cradle-to-gate completeness. |
| disclosure | Manufacturing through first release plus an explicitly dated observed FG service ledger. Disclose open service intervals, capital treatment, upstream/downstream boundaries and actual external cooling/return contracts. Use, installation and end-of-life are separate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | profile_make | Include complete receipt/preparation, actual drying if required by the compound, melt heating/shearing/filtration, forming, actual sizing/cooling, pulling/cutting, inspection and first release. Include trials, zero-output/failed lots, starts/stops, idle auxiliaries, cleanup, test samples, regrinding and real rework. Single-screw pellets/cubes are the selected branch; dry-blend and twin-screw alternatives are not silently combined. | geon-rigid-profile-guide |
| boundary_compound | pvc_compound | Purchase each whole formulation once, excluding detachable supply packaging from net compound kg. Retained additives/assay water are composition subledgers. Actual extra masterbatch, lubricant, purge compound, cleaning chemical, fuel, refrigerant or water-treatment reagent needs a distinct named supply/outlet card and mass/energy record before dataset use; do not hide it under zero or other. | geon-rigid-profile-guide; dachang-rigid-pvc |
| boundary_services | fg_service | Keep packing, storage, handling and dispatch with a separate lot ledger, including old FG and physical returns with historical burden vectors. Transfer Q internally once; do not add closing FG as a second production output. Later shipment/retest cannot create new production. Unobserved future services are an explicit completeness gap, not fabricated zero. | dachang-rigid-pvc; ilcd-attributional-allocation |
| boundary_cooling | cooling_makeup; cooling_purge; evaporation | Maintain water-system opening/closing stock, makeup, internal circulation, effluent, entrained droplets, product moisture and evaporation independently. Melting/cooling is not evidence of reaction water. If heat/water is supplied externally, add actual incoming and Product return streams with measured mass, temperatures/enthalpy and supplier energy convention; do not infer a steam/boiler circuit. | geon-rigid-profile-guide |
| boundary_identity | released_angle | Use only a single declared angle article within the native broad extrusion family; carry its full restricted description and actual product qualifiers. The native CPC 36390 defect is not rewritten or used for mapping acceptance. Exclude hard/soft coextrusion, powder compounding and assembled/machined articles from this selected route. | un-cpc3-2025; geon-rigid-profile-guide; njpt-pvc-coextrusion; tp-rigid-pvc-equal-angles |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| profile_make | Complete-compound angle manufacture and first release | required | Selected single-screw pellet/cube route, all real conditional preparation, wastes and emissions | foreground manufacture with WIP/regrind carry | per 1 kg reference flow |
| fg_service | Observed FG storage, packing, handling and dispatch | required | Keep actual service history by original release lot; disclose unobserved tails | separate service and FG conservation ledger | per 1 kg reference flow |

All card amounts refer to normalize_once, never a second division. A_i is the raw converted and attributed numerator in that row's physical unit, Q the original unique first-release kg. Protocols collect undivided amounts. The manufacturing and FG ledgers expose internal transfers for audit; cancel internal Q/regrind when combining physical gates. Closing FG is a stock state, not additional output or new production.

### Process: Angle manufacture and first release (`profile_make`)

#### Inputs

##### Product flows

###### Complete rigid PVC compound (`pvc_compound`)

One complete purchased rigid unplasticised PVC pellet/cube formulation. Native Product identity is resin compounded with additives in melt-ready pellets at plant; polymer, grade, CAS and geography are unspecified, and CPC 34790 is only its broad classification. Confirm the whole rigid-PVC formulation and pellet/cube compatibility from supplier records. Embedded stabiliser, lubricant, modifier, pigment, filler and moisture are assay subaccounts, not additional purchases. No onsite resin/additive compounding is claimed. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Plastic melt-ready compound `a97668ce-29f8-434b-afcb-9293ed2f6899`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: geon-rigid-profile-guide

###### Manufacturing electricity (`make_electricity`)

Native CN low-voltage <1 kV AC consumption mix delivered to user, grid-average supply; not a transmission service or power-plant generation mix. Use only where the actual metered delivery interface matches; otherwise resolve the actual voltage/geography/provider independently. Include heaters, screw drive, blower-cooled barrel, sizing vacuum, water pumps/cooling, haul-off, cutting, dust extraction, actual drying, regrinding and attributable start/stop/idle/cleanup. Meter compressed-air generation if used; do not buy its energy twice. Native reference is Net calorific value/MJ, a technical energy convention, not material mass or electricity heating value. Native support chain: Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66, reference MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: geon-rigid-profile-guide

###### Cooling and water-cleaning makeup (`cooling_makeup`)

Native treated municipal/potable water Product, production mix at plant, water-production/supply route. No CAS or fixed geography/provider; local supply quality and upstream treatment must be established. Use fresh external makeup and actual water cleaning only, excluding internal recirculation. The reference is Mass/kg; the secondary Volume coefficient 0.001 m3/kg is not measured density. Separate makeup, opening/closing loop stock, liquid purge, droplets, retained moisture and net evaporation; substantiate any volume-to-mass conversion independently. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: geon-rigid-profile-guide

###### Replaceable melt-filter screen (`filter_screen`)

One physical stainless-steel screen when actually replaced. Record alloy, dimensions, mass and service history; no assumed grade, lifetime or replacement rate. Durable die/extruder capital is disclosed separately from actual consumable replacement. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Stainless-steel melt-filter screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: geon-rigid-profile-guide

###### Supplied pellet sack (`inbound_pp_sack`)

Conditional on an actually verified PP woven supplier sack. Record its physical mass separately from net pellets and supplier packaging burden convention. A sack already included in the compound provider is not a second packaging purchase/burden. Any separate liner or other actual bag material needs its own card and ledger. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Woven polypropylene pellet sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Newly quality-released rigid PVC L-angle (`released_angle`)

The native Product record is a broad thermoplastic extrusion family at plant: its basename enumerates sheet/tube/profile alternatives, and its synonyms/comment explicitly include extruded profiles. This row is exclusively one declared solid single-layer rigid PVC L-angle, never a mixed sheet/tube/profile basket. The native CPC 36390 is inconsistent with its broader physical text; that classification defect is disclosed and supplies no CPC 36310 mapping. CAS, polymer recipe, grade, dimensions, colour, geography, supplier and performance are unspecified. The actual lot specification establishes these qualifiers; this generic UUID establishes no ready-made background provider. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: plastic sheet, tube, profile `3df20f91-525e-4025-9bba-853e8af68a8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: geon-rigid-profile-guide; tp-rigid-pvc-equal-angles

##### Waste flows

###### Clean non-reused offcut (`clean_pvc_offcut`)

Single segregated whole-compound offcut sent outside the manufacturing loop. Actual internal regrind stays in cp_stock, carries its burdens and is never this external waste or a second fresh purchase. Test samples and failed lengths remain accounted for. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Rigid PVC angle offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: geon-rigid-profile-guide

###### Thermally degraded purge (`degraded_pvc`)

Weigh degraded startup/changeover/cleanup material separately from reusable regrind. Retain actual composition and treatment destination; do not call it virgin resin or infer an energy credit. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Thermally degraded rigid PVC purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: geon-rigid-profile-guide

###### Captured cutting dust (`captured_pvc_dust`)

One collected particulate waste containing the actual compound constituents. Separate from airborne escape and wet effluent solids; retain capture mass and destination without counting the same particle twice. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Rigid PVC compound cutting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: geon-rigid-profile-guide

###### Cooling-loop purge to treatment (`cooling_purge`)

One actual bulk aqueous cooling/cleaning waste to declared treatment, including assayed suspended/dissolved matter. It is not an elementary release of pure water. COD/TOC and suspended-solids indicators are not named chemical masses. Distinct cleaning chemistry/effluent or direct discharge must be split and resolved by actual composition and destination. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: PVC-profile cooling purge water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: geon-rigid-profile-guide

###### Spent screen (`spent_screen`)

Actual replaced screen with attached PVC separately assayed; use the same alloy/article identity as filter_screen. No mass inferred from a generic steel density. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Spent stainless-steel melt-filter screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: geon-rigid-profile-guide

###### Discarded pellet sack (`spent_pp_sack`)

Only the PP sack actually present under inbound_pp_sack; reconcile its own packaging balance and retained contamination. No mixed-plastic packaging bundle. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Discarded woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

##### Elementary flows

###### Actual hydrogen chloride to air (`hcl_air`)

Conditional measured HCl, CAS 7647-01-0, Elementary emission to air unspecified. The native synonym list includes solutions, isotopes and cleaners; none is adopted as this gas identity or a cleaning input. Establish actual gas species, free versus bound chlorine, control capture and physical outlet. Degradation concerns do not establish a nonzero factor, stoichiometric conversion of all chlorine or reaction water. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: geon-rigid-profile-guide; dachang-rigid-pvc

###### Net water vapour to air (`evaporation`)

Conditional ordinary H2O CAS 7732-18-5, Elementary emission to air unspecified, not urban-specific, high-stack or long-term. Ignore isotope/ice/solution synonym alternatives as selected identities. Quantify net actual evaporation/drying water using independent water/humidity measurements; droplets and liquid drainage remain separate. Melting/cooling creates no mandatory reaction water. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: geon-rigid-profile-guide

###### Escaped compound particulate (`escaped_pvc_particle`)

Conditional one actual compound aerosol stream, composition and receptor compartment recorded. Measure size fractions separately if required; no conversion of total VOC, opacity or COD into PVC/PM10 mass. Additional volatile chemical species require separately named cards, measured bases and real identities before dataset completion. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Rigid PVC compound particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: geon-rigid-profile-guide

### Process: Observed finished-goods services (`fg_service`)

#### Inputs

##### Product flows

###### Paired release transfer into FG (`release_to_stock`)

The native Product record is a broad thermoplastic extrusion family at plant: its basename enumerates sheet/tube/profile alternatives, and its synonyms/comment explicitly include extruded profiles. This row is exclusively one declared solid single-layer rigid PVC L-angle, never a mixed sheet/tube/profile basket. The native CPC 36390 is inconsistent with its broader physical text; that classification defect is disclosed and supplies no CPC 36310 mapping. CAS, polymer recipe, grade, dimensions, colour, geography, supplier and performance are unspecified. The actual lot specification establishes these qualifiers; this generic UUID establishes no ready-made background provider. Pair the physical Q transfer with released_angle; preserve each lot's burden vector. Opening stock belongs to earlier releases and is never a new Q. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: plastic sheet, tube, profile `3df20f91-525e-4025-9bba-853e8af68a8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources:

###### Physical returned angle (`customer_return`)

The native Product record is a broad thermoplastic extrusion family at plant: its basename enumerates sheet/tube/profile alternatives, and its synonyms/comment explicitly include extruded profiles. This row is exclusively one declared solid single-layer rigid PVC L-angle, never a mixed sheet/tube/profile basket. The native CPC 36390 is inconsistent with its broader physical text; that classification defect is disclosed and supplies no CPC 36310 mapping. CAS, polymer recipe, grade, dimensions, colour, geography, supplier and performance are unspecified. The actual lot specification establishes these qualifiers; this generic UUID establishes no ready-made background provider. Conditional matching returned article: retain original shipment/release ID, returned mass and its historic burden reversal; count only real new rework and service. Reinspection, re-delivery and return never create another first release. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: plastic sheet, tube, profile `3df20f91-525e-4025-9bba-853e8af68a8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources:

###### Finished-goods service electricity (`fg_electricity`)

Native CN low-voltage <1 kV AC consumption mix delivered to user, grid-average supply; not a transmission service or power-plant generation mix. Use only where the actual metered delivery interface matches; otherwise resolve the actual voltage/geography/provider independently. Native reference is Net calorific value/MJ. This card covers only observed finished-goods storage, electric handling, packing and loading, including their real idle/cleanup loads. Manufacturing heaters/drives remain in make_electricity; assign each service burden by original release lot and carry old-lot histories separately. Native support chain: Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66, reference MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_energy_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_fg`
- Sources: ilcd-attributional-allocation

###### Paperboard shipping carton (`shipping_carton`)

Conditional single one-way carton actually used, with measured whole-article mass and actual board/adhesive composition. Manufacturer carton supply does not establish corrugation, density or a packaging UUID. Keep its own empty/attached-stock and gross-shipment ledger; reusable boxes or wood packing require separate actual articles and return ledgers. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_fg`
- Sources: dachang-rigid-pvc

###### LDPE protective wrap (`ldpe_wrap`)

Conditional verified PE-LD film only. Native Product/Mass has no CAS, fixed route, thickness, grade, geography, synonym/comment or supplier; it establishes material/form, not stretch performance or the actual packaging specification. Keep intact attached film, application trim and shipping film distinct. No LDPE resin-pellet identity or mixed multilayer film is substituted. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_fg`
- Sources:

###### Paper product label (`paper_label`)

Conditional one whole purchased paper label with actual ink/adhesive composition included once. Measure mass separately from product and carton. A removable liner, band or separate adhesive actually used requires its own atomic card, not an unspecified packaging remainder. Native Product is a printed paper label for sticker use, production mix at plant GLO; synonyms include paper sticker/label stock, and general comment is empty. CAS, grade, ink/adhesive recipe, dimensions and supplier are unspecified. The broad paper/printed-sheet classification does not specify this finished label configuration. Match the actual purchased whole label and count embedded ink/adhesive once. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Paper label `6e3bea7a-9e89-4f50-a065-79feaac682db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_fg`
- Sources: dachang-rigid-pvc

#### Outputs

##### Product flows

###### Gross physical angle shipment (`gross_shipped_angle`)

The native Product record is a broad thermoplastic extrusion family at plant: its basename enumerates sheet/tube/profile alternatives, and its synonyms/comment explicitly include extruded profiles. This row is exclusively one declared solid single-layer rigid PVC L-angle, never a mixed sheet/tube/profile basket. The native CPC 36390 is inconsistent with its broader physical text; that classification defect is disclosed and supplies no CPC 36310 mapping. CAS, polymer recipe, grade, dimensions, colour, geography, supplier and performance are unspecified. The actual lot specification establishes these qualifiers; this generic UUID establishes no ready-made background provider. Report physical outgoing product mass before return netting by original release cohort; exclude detachable packaging. This is an FG stock movement, not another production reference or extra Q. Closing FG already contains the applicable released material. Native support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: plastic sheet, tube, profile `3df20f91-525e-4025-9bba-853e8af68a8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources:

##### Waste flows

###### Damaged finished angle (`damaged_angle`)

Real rejected stock/return after release; carry historic production burdens and incremental service/rework to its original release account and actual waste destination. Never erase it with a new Q or a negative purchase. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Discarded rigid PVC angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources:

###### Discarded carton (`carton_waste`)

Actual same-article carton waste only; packaging still attached to gross shipments is outward packaging, not onsite waste. Reconcile contamination and returns separately. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Discarded paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_fg`
- Sources:

###### LDPE wrap scrap (`film_waste`)

Only the actual LDPE wrap offcut or removed damaged wrap. Include full stock balance and actual offsite treatment; do not assign the native Product UUID to this Waste. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Discarded LDPE protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_fg`
- Sources:

###### Discarded paper label (`label_waste`)

One discarded whole paper label, with actual retained adhesive/ink. Label liners and other actual materials are separate streams. Tiangong UUID is unresolved; retain this concrete single exchange and resolve against actual supplier/material/destination evidence before dataset use.

- Selected flow: Discarded printed paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8 using the undivided raw numerator collected by cp_pack_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_fg`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | all inventory rows | This method is attributional, limited to situations in which allocation is required under the study goal/context. Establish that context first; no discretionary swap between allocation and substitution. Separately metered dedicated operations and actual/virtual subdivision take precedence, including exclusive materials, QA, rejects and specific service histories. | ilcd-attributional-allocation |
| allocation_causality | all inventory rows | For any remaining joint inventory, determine and document physical causality for each individual exchange/co-function. Use measured load/operation evidence; the same mass share is not automatically correct for heaters, cooling, material embodiment, occupied storage and serial handling. Account for baseline idle and failed campaigns rather than allocating only successful run time. | ilcd-attributional-allocation |
| allocation_residual | genuine remaining multifunctional process | Only a genuinely unassignable residual may use contemporaneous market values for real co-functions at the same actual joint-process exit and physical/quality state. Reconstruct that gate price if only later conditioned/packed/delivered prices exist, with transparent adjustments and sensitivity. Evidence must establish real co-product status and the true joint process; waste sale or internal regrind alone establishes neither a co-product nor avoided production. No fixed ratio, automatic credit or negative waste burden. For each exchange, all exclusive/causal/residual and carried assignments must sum to its undivided original amount. Apply consistent criteria to comparable co-functions/processes and document justified differences. | ilcd-attributional-allocation |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

The aggregation_rule cells declare the final reporting basis, not a request to divide raw measurements during collection. Each collection_method retains undivided numerators and the same sole section-8 operation.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | profile_make | pvc_compound; filter_screen; clean_pvc_offcut; degraded_pvc; captured_pvc_dust; spent_screen | weighing_and_supply_record | lot_id; supplier; complete_formulation; supplied_form; gross_mass; tare; net_mass; assay; opening_raw; closing_raw; receipts; issued_mass; waste_mass; destination; screen_alloy; service_history; calibration_id | Weigh complete deliveries/issues and each separate waste on calibrated scales; trace supplier specifications and constituent assays. Reconcile raw-stock change, contamination and physical losses, including failed/purge/test material. Preserve recorded units. Retain raw undivided amounts and stock reconciliation; cp_stock builds A_i; normalize_once alone reports per 1 kg reference flow. | kg | each receipt and issue; every run and waste transfer | full campaign including start/stop, idle and cleanup; stock cutoffs matched | one declared profile line and supplier/grade cohort | per 1 kg reference flow | calibration; invoices; whole formulation specification; assay; waste tickets; screen change logs |
| cp_energy | profile_make | make_electricity | meter_record | meter_id; voltage; geography; provider; interval_start; interval_end; kWh_start; kWh_end; true_power_rate; run_state; service_lot; shared_load; causal_driver; baseline_idle; allocation_decision | Read calibrated submeter differences for every unit operation and service; integrate only independently measured power rates when no integrated counter exists. Include actual drying and utilities. Apply section 7 to shared loads after raw unit conversion. Preserve undivided interval energy; convert kWh to MJ then attribute and carry vectors in cp_stock/cp_fg; normalize_once alone reports per 1 kg reference flow. | kWh; MJ | each operating interval and service interval | continuous full campaign and declared FG service window | actual CN <1 kV user delivery interface; separate make/FG meters | per 1 kg reference flow | meter calibration; bills; load survey; idle logs; allocation sensitivity |
| cp_energy_fg | fg_service | fg_electricity | meter_record | meter_id; voltage; geography; provider; interval_start; interval_end; kWh_start; kWh_end; true_power_rate; run_state; service_lot; shared_load; causal_driver; baseline_idle; allocation_decision | Read calibrated FG-store/handling/packing/loading submeter differences, including their real idle and cleanup intervals. Manufacturing energy stays in cp_energy. Assign every undivided service numerator to its original release lot. Preserve undivided interval energy; convert kWh to MJ then attribute and carry vectors in cp_stock/cp_fg; normalize_once alone reports per 1 kg reference flow. | kWh; MJ | each operating interval and service interval | declared observed FG service window and original release histories | actual CN <1 kV user delivery interface; separate make/FG meters | per 1 kg reference flow | meter calibration; bills; load survey; idle logs; allocation sensitivity |
| cp_water | profile_make | cooling_makeup; cooling_purge; evaporation | water_balance_record | meter_id; raw_unit; makeup; opening_loop; closing_loop; recirculation; liquid_purge; entrained_droplets; retained_product_water; measured_net_evaporation; temperature; pressure; density_evidence; humidity_in; humidity_out; actual_flow_rate; time_interval; treatment_destination | Meter/weigh makeup and each real outlet plus stored water; independently measure density/state and net air moisture transfer. Verify closed versus open water systems from the actual line. Reconcile free, retained and phase-change water without fitting two unknowns to one residual. Keep raw undivided amounts and independently resolved stock/phase terms; cp_stock supplies A_i; normalize_once alone reports per 1 kg reference flow. | kg; m3 | each interval and drain event | full campaign including cleaning and no-output periods | actual extrusion/sizing/cooling/drying water circuit | per 1 kg reference flow | meter tests; density/state record; samples; humidity calibration; water closure; treatment manifest |
| cp_species | profile_make | hcl_air; escaped_pvc_particle | speciated_emission_record | sample_id; species; CAS; particle_size; receptor; control_boundary; concentration; concentration_unit; actual_or_standard_volume; integrated_volume; actual_volume_rate; interval; temperature; pressure; humidity; detection_limit; capture_mass; composition | Measure individual gas/particle species at actual outlets and control captures, including start-up/degraded events; identify actual matrix/compartment and wet/dry bases. Convert concentration with a compatible volume amount, not an already integrated volume times time. A nondetect is bounded evidence, not a universal zero. Preserve undivided measured species amounts and uncertainty; cp_stock attributes A_i; normalize_once alone reports per 1 kg reference flow. | kg; mg/m3; m3 | representative states plus every abnormal event | full campaign with represented and unrepresented intervals explicit | specific extrusion/cutting exhaust and fugitive boundaries | per 1 kg reference flow | laboratory methods; raw chromatograms or chemical results; flow calibration; detection limits; uncertainty |
| cp_release | profile_make | released_angle | quality_release_record | release_id; parent_lot; drawing; compound_grade; dimensions; measured_length; conditioned_mass; gross_mass; packaging_tare; moisture; cut_length; visual_acceptance; drawing_tolerances; test_results; first_release_flag; failed_mass; repeated_inspection_id | Weigh cooled conditioned bare angles, record dimension/appearance and contract-required tests against approved drawing; uniquely identify first positive release. Destructive samples, rejects and later retests are separate events, not extra accepted mass. Sum unique first-release net masses into Q without other divisions; normalize_once alone represents 1 kg reference flow. | kg; m; mm | every lot and release decision | declared first-release cohort with earlier WIP trace | one matched grade/drawing/state at factory release | per 1 kg reference flow | calibrated balances; approved drawing; actual release/test records; moisture protocol; duplicate-ID audit |
| cp_stock | profile_make | all manufacturing rows and internal regrind | stock_and_burden_vector_record | lot_id; physical_state; opening_WIP_mass; closing_WIP_mass; opening_regrind; closing_regrind; internal_transfer_id; initial_component_assay; inherited_vector_by_exchange; current_raw_vector; state_conversion; exclusive_assignment; causal_assignment; residual_assignment; destination_vector; Q | Independently weigh stocks at matched cutoffs and trace every component/exchange burden by lot across periods. Pair regrind outputs/inputs and include actual grinding energy/loss; do not charge original compound twice. Assign current and inherited burdens to released lots, WIP, wastes and genuine co-functions without erasure. Preserve row-native undivided A_i vectors after conversion and section 7 attribution; normalize_once alone reports per 1 kg reference flow. | kg; row-native numerator units | each transfer and period cutoff | complete inherited and current campaign histories | same make-line cohort plus physical stock locations | per 1 kg reference flow | opening/closing counts and weights; parent-child lot links; vector conservation; failure/rework logs |
| cp_fg | fg_service | release_to_stock; customer_return; gross_shipped_angle; damaged_angle | finished_stock_service_record | original_release_id; shipment_id; return_id; opening_FG; closing_FG; new_release_Q; gross_shipped_mass; physical_returns; returned_burden_vector; original_delivery_reverse; damage; incremental_rework_vector; storage_duration; handling_events; inherited_vector; service_cutoff | Reconcile physical opening FG + new Q + external physical returns = closing FG + gross physical dispatch + actual discarded FG. Preserve original release/delivery history and reverse prior delivery assignments on returns before applying genuine new service/rework. Carry all old-lot burdens independently; no stock or reinspection becomes new production. Preserve undivided physical movements and per-release service A_i vectors; pair internal Q on consolidation; normalize_once alone reports per 1 kg reference flow using the original Q. | kg; h; row-native numerator units | every movement/return and cutoff | release to observed service cutoff; open intervals disclosed | same actual FG/store/dispatch boundary and traceable release lots | per 1 kg reference flow | stock reconciliation; dispatch/return notes; original delivery reversals; timestamps; vector audit |
| cp_pack | profile_make | inbound_pp_sack; spent_pp_sack | article_specific_packaging_record | article_id; composition; supplier; whole_article_mass; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchased; included_supplier_packaging; external_return_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_outbound_attached; external_return_sent; waste; internal_reuse; contamination | For each actual article separately weigh and reconcile opening empty/attached WIP/attached FG/reusable + external purchased or supplier-included article receipts + external return received = closing in all four states + packaging on gross physical outward shipments + external returns sent + waste. Distinguish paid purchases from included/returned articles. Reusable or extra packaging requires its own named cards. Keep undivided article balances; internal reuse cancels and never adds purchase, product Q or automatic co-product; normalize_once alone reports attributable A_i per 1 kg reference flow. | kg; item | each receipt, application, movement and cutoff | whole supplier-receipt and FG-service interval | one physical article type at a time; no mixed bundle | per 1 kg reference flow | article bill of materials; measured tares; invoices; full gross shipment/return records; waste evidence |
| cp_pack_fg | fg_service | shipping_carton; ldpe_wrap; paper_label; carton_waste; film_waste; label_waste | article_specific_packaging_record | article_id; composition; supplier; whole_article_mass; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchased; included_supplier_packaging; external_return_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_outbound_attached; external_return_sent; waste; internal_reuse; contamination | For each actual article separately weigh and reconcile opening empty/attached WIP/attached FG/reusable + external purchased or supplier-included article receipts + external return received = closing in all four states + packaging on gross physical outward shipments + external returns sent + waste. Distinguish paid purchases from included/returned articles. Reusable or extra packaging requires its own named cards. Keep undivided article balances; internal reuse cancels and never adds purchase, product Q or automatic co-product; normalize_once alone reports attributable A_i per 1 kg reference flow. | kg; item | each receipt, application, movement and cutoff | whole supplier-receipt and FG-service interval | one physical article type at a time; no mixed bundle | per 1 kg reference flow | article bill of materials; measured tares; invoices; full gross shipment/return records; waste evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_convert | all inventory rows | Convert recorded mass/length/energy and independently evidenced physical state before attribution; integrate only true rates; integrated amounts retain one time integration. Retain original units and exact conversion evidence. | cp_material; cp_energy; cp_energy_fg; cp_water; cp_species; cp_release | converted_raw_vector |  |
| attribute_vector | all inventory rows | A_i is the undivided row-native numerator assigned to the same original first-release cohort: inherited opening vectors plus converted current activity, less independently established closing WIP/regrind carry and genuine other-cofunction assignments, with section 7 allocation and all real failure/rework burdens retained. FG service remains attributed to its original release lot. No single residual fits two unknown outlets or burdens. | converted_raw_vector; cp_stock; cp_fg; cp_pack; cp_pack_fg | A_i | ilcd-attributional-allocation |
| first_release_quantity | released_angle | Q = sum of unique positive first-release conditioned net angle kg; exclude failed/repeated/returned/re-delivered mass from new production. A voided release is reconciled by its original ID and burden history, never silently replaced by a new denominator. | cp_release; cp_stock | Q |  |
| normalize_once | all inventory rows | x_i = A_i / Q for Q > 0; A_i retains this row's physical numerator unit and Q is same-cohort first-release kg. Apply once only at final reporting; cards and protocol aggregation refer to this same operation. released_angle represents 1 kg. If Q = 0 retain all raw burdens/stocks and report no unit result; do not divide, discard failed burden or borrow another cohort denominator. | A_i; Q; cp_release | x_i |  |
| gate_conservation | all inventory rows | Independently close manufacturing mass/constituent balances with opening/closing WIP/regrind and physical Q. Close FG using cp_fg. Consolidate by cancelling paired internal Q and regrind: external opening stocks plus real external material/water/packaging receipts and returns equal closing stocks plus gross external article/packaging shipments, external returns, wastes and measured emissions. Energy is not added to physical mass. Q remains the release normalization event, not an extra consolidated physical outlet. Check C/Cl and relevant additive elements independently of species and physical water/phase evidence. | cp_material; cp_water; cp_species; cp_stock; cp_fg; cp_pack; cp_pack_fg; cp_release | gate_balance_residuals |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows and reference | Retain complete composition/form/route/state and native UUID restrictions in consumable descriptions and metadata. Confirm actual CN low-voltage delivery and match all providers; blank auxiliary UUIDs require resolution, never invented collection bindings. | supplier specifications and full native identity/support-chain evidence |
| dq_complete | whole cohort | No routine deletion of no-output/failed/idle/cleanup/rework activities; maintain lot stock and every inherited exchange vector. Disclose each omitted/unmeasured operation/species and open FG service window. Missing measurements are data gaps, not zero. | event logs and stock/vector closure |
| dq_measurement | raw records and calculation | Retain calibration, test specification, sampling representativeness, units, method uncertainty, detection limits and complete period/site coverage. Quantities are site-specific future records, not measurements fabricated by this method. No source range is a universal QA acceptance limit. | raw data, calibration and uncertainty budget |
| dq_sources | source-dependent methods | Use original context and alternative routes; industrial processing evidence does not establish allocation. No shared SKU, recipe or plant is asserted across sources. Independent science and translation review remain separate from mechanical checks. | primary originals and ILCD context with explicit transfer limits |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | released_angle | Require one matched article/grade/drawing/state, all declared qualifiers, unique cp_release IDs and the explicit reference_flow_link. Confirm 1 kg net conditioned product excluding all packaging, and no second Q from stock, retest, return or dispatch. | tp-rigid-pvc-equal-angles; geon-rigid-profile-guide |
| validate_inventory | all inventory rows | Every actual exchange is a separate physical/chemical card with direction/type, native property/unit, description, protocol and sources. Confirm original identity/form/route/CAS/media/property constraints, not just name or classification. Missing or conflicting auxiliary identity stays explicit and blocks the affected dataset use until resolved. |  |
| validate_conservation | all inventory rows | Execute raw_convert, attribute_vector, first_release_quantity, normalize_once and gate_conservation. Check independent mass, C/Cl/other relevant element, actual water/species, packaging and inherited-vector balances with measurement uncertainty. Unknowns remain unresolved; no tuned residual, assumed species or double normalization can establish closure. |  |
| validate_allocation | all shared activities | Check dedicated/virtual subdivision before exchange-specific determining physical causality and only then justified same-gate contemporaneous residual market value. Retain all shares/boundaries and sensitivity; no automatic scrap credit or same allocation key for every exchange. | ilcd-attributional-allocation |
| validate_readiness | completed dataset | Require actual supply/drawing/acceptance and period-specific observations before calling a dataset complete. Q = 0 has no unit result. An unobserved FG service tail cannot support a complete dispatch-boundary claim. Method checks do not constitute scientific/translation approval, mapping acceptance or publication. | geon-rigid-profile-guide |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A specified mass-based profile-manufacturing input for later assembly, installation or separately modelled product systems |
| allowed_use | Only matched rigid PVC equal-angle route/state and declared first-release gate; include actual observed services by original release cohort |
| excluded_use | Whole CPC 36310 coverage; structural/thermal/fire/service-life equivalence; pipe/sheet/yarn or finished-building substitution; automatic recycled-content/avoided-burden credit |
| required_metadata | All section 3 qualifiers, actual providers, complete BOM, state-specific release and stock/vector histories, linked upstream transport and waste treatment, allocation and capital boundary |
| required_quality_disclosure | Period/site coverage, measured versus missing quantities, blank auxiliary identities, generic native family restrictions, uncertainty, allocation sensitivity and observed/open service intervals |
| update_trigger | Grade/form/drawing/route/provider changes, altered cooling or controls, added packaging/chemistry, new release evidence, later service tail and independent review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version 3.0, Structure and Explanatory Notes, 30 June 2025, pp.177–179. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Semifinished profile category and adjacent/residual exclusions only; no recipe or mapping acceptance |
| geon-rigid-profile-guide | handbook | GEON Rigid Vinyl Profiles Extrusion Guide; 2019 contents, 2021 copyright footer; printed pp.2–5 and 9, full disclaimer. https://www.geon.com/hubfs/Content/BC_Building-and-Construction/PG_Processing-Guide/PG0014BC_GEON-Rigid-Vinyl-Extrusion-Guide.pdf | Complete-compound pellets/cubes, single-screw route, actual drying condition, forming/cooling/pulling/cutting, regrind/degradation/quality concerns and powder/twin-screw alternatives. No operating/quantity/performance default or allocation evidence. |
| tp-rigid-pvc-equal-angles | extension_guidance | TP Extrusions, Plastic Equal Angles, publisher product page, snapshot 2026-10-16. https://www.tpextrusions.com/index.php/products/angles/plastic-pvc-equal-angles/ | Independent real rigid PVC equal-angle product, drawing/geometry/supply identity; no common GEON SKU, recipe, density or service life |
| dachang-rigid-pvc | extension_guidance | Dachang Plastic Hardware Processing Factory, Rigid PVC Profile, publisher page, snapshot 2026-10-16. https://www.dachangplastic.com/pvc-profile/rigid-pvc-profile/ | Independent rigid-angle/finishing/packing context and contrary onsite powder-compounding route. No source temperature, additive recipe, grade, claim or plant rate is adopted. |
| njpt-pvc-coextrusion | extension_guidance | N.J. Precision Technologies, Rigid PVC/Flexible PVC, publisher tooling case, snapshot 2026-10-16. https://www.njpt.com/plastic-extrusion/pvc/ | Concrete counterexample of rigid/soft coextrusion with a separate melt feed and flexible lip/cap; not evidence for this single-layer recipe or allocation |
| ilcd-attributional-allocation | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment—Detailed guidance, First edition March 2010, §§7.9.2–7.9.3, printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only attributional allocation-required context: dedicated/virtual subdivision, exchange-specific determining physical causality and genuine residual same-gate market value. Not industrial route, quantities or unrestricted substitution. |
