---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.uncoated-solid-soda-lime-glass-blasting-beads
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncoated solid soda-lime glass blasting beads

## 1. Scope and Applicability

Manufacture of uncoated solid soda-lime glass blasting beads from recovered industrial flat-glass cullet: receipt/sorting, crushing/pre-screening, actual moisture conditioning, gas-fired flame spheroidization, air cooling/collection, final screening/size-grade blending, quality control and unique first quality release. Actual packing/storage/handling/dispatch remain separately accounted original-cohort services. This is one narrower manufactured glass-bead abrasive, never generic particulate matter or all articles of glass n.e.c.

Exclude hollow bubbles, coated beads, composite filler preparations, angular glass powder, fibre-feed balls, optical/decorative spheres, road-marking performance systems, flat sheets, vessels, foam blocks and vacuum-flask inners. Buying finished beads for blending/packing cannot satisfy this route. Integrated virgin melting, molten-stream atomization, wet spheroidization or different fuel/oxygen route needs separate applicability evidence and complete additional atomic exchanges. No fixed recipe, temperature, yield, energy saving, furnace life, density or blasting performance is prescribed.

Primary sources support a transparent synthesis of common operations, not a same-SKU/factory recipe. SWARCO supports real soda-lime blasting use and cullet conversion; FHWA supports common bead handling and the blend-only counterexample, not blasting acceptance or current health/legal limits; the patent supports gas/air solid-bead apparatus and alternatives. Their numerical examples are not defaults. ILCD supports allocation independently.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.uncoated-solid-soda-lime-glass-blasting-beads |
| classification_refs | CPC 3.0:37199; narrower |
| covered_products | Uncoated solid soda-lime glass blasting beads |
| excluded_products | Hollow/coated/composite/optical/fibre products; powder; bought-bead repacking |
| representative_product | Dry graded spherical blasting beads at first release |
| production_route | Recovered cullet → crush/pre-screen → flame sphere → air cool/collect → sieve/blend → first release |
| market_state | Bare dry solid uncoated grade; packaging separately traced |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply manufactured solid uncoated blasting glass beads |
| How much | 1 kg net dry bare beads at unique first quality release |
| How well | Actual grade-specific size/roundness/defect/stress acceptance; no universal performance warranty |
| How long or cycle | One unique first release; later services retain original cohort and observed horizon |
| reference_flow_link | finished_beads |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glass Bead `56932669-9eec-47ff-a6b7-a542c0d99f78` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | solid soda-lime glass and recovered flat-glass origin; uncoated noncomposite state; actual size distribution and test; roundness and defect acceptance; thermal history and stress/QC gate; furnace and actual fuel/air/cooling route; unique first-release dry bare mass Q and cohort; dry mass and moisture method; raw/WIP/FG histories and all modes; native identity/provider restrictions; molecular species and free/reaction/phase-water evidence; each packaging construction and returns; physical assets/fluids and service burden; original-cohort service observation window |

All qualifiers belong in metadata, description, reference comment or equivalent fields. Reference restrictions: Spherical glass-bead abrasive/blasting Product only. Native synonyms and comment support blasting; CAS, composition, grade, diameter, coating, hollow state, route, geography and supplier are not fixed. Require actual solid soda-lime glass, uncoated state, size/roundness/defect/stress acceptance. Exclude hollow/ceramic/optical spheres, angular powder, fibre-feed balls and composite fillers. No density or particle weight is inferred.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Unique first-release dry bare kg Q includes closingFG. Count/volume needs independent lot mass or measured configuration-specific mass/density, never guessed particle mass or secondary native factors. |
| electricity_unit | electricity; service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert kWh by3.6 before attribution; no carrier mass. |
| fuel_unit | fuel | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` | MJ | Measured HHV and integrated gas quantity, not LHV; carrier mass is a subledger of this single purchase. |
| mass_unit | cullet; process_water; lubricant; screen; refractory; furnace_asset; air_o2; air_n2; air_ar; air_h2o; air_co2; finished_beads; secondary_grade; reject_glass; captured_dust; sludge; wastewater; spent_screen; spent_refractory; spent_oil; co2_generated; co_air; no_air; no2_air; so2_air; methane_air; water_air; pm_air; n2_air; o2_air; ar_air; ambient_co2_air; fg_return; pe_purchase; pe_returned_in; pe_gross_out; pe_return_out; pe_waste; pp_purchase; pp_returned_in; pp_gross_out; pp_return_out; pp_waste; pallet_purchase; pallet_returned_in; pallet_gross_out; pallet_return_out; pallet_waste; fg_dispatch; service_glass_waste; pe_supplier_included; pp_supplier_included; pallet_supplier_included | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole formulations and individual physical/species streams retain measured kg/state/moisture. Asset service-equivalent mass differs from physical stock. Never apply Mass/kg to MJ or tkm. |
| transport_unit | freight | Transport mass-distance | tkm | Actual payload tonnes * actual km; not vehicle mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of actual recovered flat-glass cullet and actual whole supplies with linked upstream burdens |
| starting_condition_role | foreground_gate |
| product_classification_scope | Only declared solid uncoated blasting subset of CPC3.0:37199 |
| recursive_input_rule | Internal glass transfers cancel paired vectors; external supplies/returns retain supplier/original-cohort burden |
| upstream_dataset_requirement | Matching glass recovery/supply, freight, fuel, utility, article, asset and treatment state/provider boundaries |
| disclosure | Grade/route/provider; all modes/stocks; water/species; packaging/assets; observed services |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | Include complete cullet sorting/crushing/pre-screening, actual conditioning, feed/flame spheroidization, actual air systems, cooling/collection, final screening/blending, tests and first release. Retain utilities, dust control, maintenance and actual subsequent original-cohort packing/storage/dispatch. Buying finished beads for packing is not this manufacture. | `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| boundary_history | manufacture | Each unnormalised exchange vector retains converted raw activity, actual attribution and inherited history: A_i = B_open_i + C_i - B_close_i. Manufacturing B_close contains raw/WIP/genuinely unassigned stores only, never already first-released closingFG. Retain all failed/zero-output/startstop/idle/cleanup/rework and opening/closing WIP. Internal recycle cancels paired physical quantities and all vectors without new supplier burden. | `jrc-ilcd-attributional-2010` |
| boundary_species | all physical streams | Whole mass and relevant elements are checked independently of molecular speciation and reaction water. Independently observe free/structural water, inlet humidity, evaporation and combustion water; one residual cannot determine two unknowns. Integrate true rates once, never multiply totalized gas/liquid volumes by time. Use independent substance-specific density at actual state. No NOx/VOC/COD/total-C/total-metals/particle-bin inference of species. No aggregate air plus children or whole supplied formulation plus duplicate constituents. | `us4385917-bead-furnace`; `fhwa-bead-workflow-2014` |
| boundary_physical | all processes | Manufacturing, FG/service and combined physical gates close with gross real movements, independently from burden allocation. Never scale receipts/returns/dispatch/waste/packaging/assets by economic share. Assets and installed fluids keep opening/new/repair/removed/closing/wear ledgers; actual current service burden is separate, with no fixed life, invented weight or one-machine-per-kg. | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| boundary_extend | all inventory rows | Cards are a finite initial route inventory. Compare every actual supply/exit: add each real different chemical, fuel, filter, gas species, packaging, repair, asset, condensate or heat-exchanger return as a specific atomic exchange with its own native extensive property. Absence needs evidence; unknown is not zero/not_applicable. Actual purchased steam/heat needs thermal state/enthalpy, carrier mass, supplier water/energy agreement and external Product return; do not assume a nonexistent boiler. Changed hollow/coated/composite/core route requires applicability review. | `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Cullet to first release | required | Declared solid-bead flame route | foreground | 1 kg reference flow |
| services | Original-cohort services | conditional | Actually observed; original Q retained | supporting | Original first-release Q; no new production |

### Process: Complete glass bead manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Clean recovered soda-lime flat-glass cullet (`cullet`)

Receive actual flat-glass scraps, sort coatings/ceramics/metals/incompatible glass, crush and pre-sieve. Buy whole as-received cullet once; dry glass, free moisture and impurities are subaccounts. Include recovery/sorting and upstream glass/recycling burdens under declared model, not invented virgin sand/soda/lime purchases. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_raw after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Clean recovered soda-lime flat-glass cullet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_raw.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### Manufacturing electricity (`electricity`)

Meter crushing, screens, feeds, fans, compressed air, extraction, QC, electric handling and real drying/cooling including all nonproductive modes. CN user-side grid-average AC Product; 1–35kV consumption mix to user; Net calorific value/MJ. Match actual voltage, geography and provider boundary or replace identity. Convert kWh by3.6 before attribution; no carrier mass or duplicate provider transmission losses. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_energy after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### Furnace natural gas (`fuel`)

Include actual ignition/heating/idle/shutdown. Retain independent carrier-mass physical subledger, not a second purchased fuel exchange. Global at-plant production-mix natural-gas Product for industrial-furnace combustion. Reference is Gross calorific value/MJ, not LHV. No fixed CAS, composition, density or supplier. Measure integrated volume, pressure, temperature, compressibility, composition, independent density and HHV. Carrier mass and C/H/S are subaccounts of one gas purchase. Exclude downstream combustion overlap in any chosen provider. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_energy after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `us4385917-bead-furnace`

###### External treated process water (`process_water`)

Actual dust suppression/washing/cooling makeup/cleanup only. Dry air cooling does not imply water quenching or steam/boiler. Treated industrial Process Water Product, Mass/kg. Reclaimed/recirculating synonyms do not make internal circulation a new purchase. Native grade, provider, temperature and geography unspecified; verify treatment, external supply boundary and independent density. Not steam or elementary abstraction. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_water after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_water.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### Mineral gearbox lubricating oil (`lubricant`)

Conditional actual whole purchased formulation; installed-fluid opening/closing, top-up, leak, recovered oil and retirement retained. Each different actual formulation separately added. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_assets after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Mineral gearbox lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_assets.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### Stainless-steel sieve mesh (`screen`)

Conditional actual replacement with alloy/form, new/repair, installed/spare stocks, removed mesh and wear; not whole sieve per kg. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_assets after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Stainless-steel sieve mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_assets.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### Formed alumina furnace refractory (`refractory`)

Only when actually installed: whole supplied formed lining with binder/moisture, new/repair/spent stocks. Powder alumina is not lining; unlined steel furnace has no invented refractory. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_assets after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Formed alumina furnace refractory
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_assets.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `us4385917-bead-furnace`

###### Glass-bead spheroidization furnace (`furnace_asset`)

Asset manufacturing service-equivalent kg from cp_assets actual supported service fraction, not gross physical acquisition per kg beads. Physical asset stock and current service burden remain separate. No invented life/weight, per-kg whole machine or duplicate included replacements. Add other actual assets individually. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_assets after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Glass-bead spheroidization furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_assets.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `us4385917-bead-furnace`; `jrc-ilcd-attributional-2010`

###### Road freight service for recovered glass cullet (`freight`)

Actual cargo tonnes * km and documented empty-return attribution. Add distinct actual rail/other modes. Mass-based vehicle identity cannot represent tkm. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_logistics after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Road freight service for recovered glass cullet
- Flow property / unit: Transport mass-distance / tkm
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_logistics.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_logistics`
- Sources: `fhwa-bead-workflow-2014`; `swarco-cullet-industrial-beads`

##### Waste flows

##### Elementary flows

###### Atmospheric oxygen intake (`air_o2`)

Measure gross primary/secondary/feed/cooling O2 separately from internal circulation. Molecular O2 CAS7782-44-7, Elementary renewable-element resource from air, Mass/kg. Liquid/ion/isotope synonyms do not authorize purchased oxygen. Gross actual atmospheric O2 intake only; output needs its own emission identity. No aggregate air plus children. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

###### Atmospheric dinitrogen intake (`air_n2`)

Native molecular dinitrogen CAS7727-37-9, Elementary renewable-element resource from air, Mass/kg. Measure actual gross ambient N2 independently; neither total nitrogen excluding N2 nor NOx/ammonia is this species. Liquid/isotope aliases do not redefine the canonical ordinary N2 identity. No fixed dry-air fraction or balance-residual inference. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

###### Atmospheric argon intake (`air_ar`)

Native ordinary argon CAS7440-37-1, Elementary renewable-element resource from air, Mass/kg. Measure actual gross natural atmospheric Ar; isotope aliases do not authorize radioactive41Ar or Ar-40-enriched gas. No purchased cylinder, fixed air composition or residual inference. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

###### Atmospheric water vapour intake (`air_h2o`)

Measure absolute humidity and integrated air; emission UUID cannot represent resource intake. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Atmospheric water vapour intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

###### Atmospheric carbon dioxide intake (`air_co2`)

Actual ambient CO2 physical input, not fossil generation or automatic credit. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Atmospheric carbon dioxide intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

#### Outputs

##### Product flows

###### First-released blasting beads (`finished_beads`)

Q is net dry bare bead kg first passing actual size/roundness/defect/stress acceptance after sphere cooling/screening/blending. Exclude packaging/free water/rejects/pre-release consumed samples/WIP. Q already contains this cohort closingFG: neither add that FG as another output nor subtract its manufacturing burden. Spherical glass-bead abrasive/blasting Product only. Native synonyms and comment support blasting; CAS, composition, grade, diameter, coating, hollow state, route, geography and supplier are not fixed. Require actual solid soda-lime glass, uncoated state, size/roundness/defect/stress acceptance. Exclude hollow/ceramic/optical spheres, angular powder, fibre-feed balls and composite fillers. No density or particle weight is inferred. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_release after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Glass Bead `56932669-9eec-47ff-a6b7-a542c0d99f78`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### Uncoated solid soda-lime glass beads of secondary size grade (`secondary_grade`)

Only actual separately released saleable grade; outside reference Q, with its own QC/mass/common-exit state and value. Internal recycle and unsold rejects not automatic co-products. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_balance after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Uncoated solid soda-lime glass beads of secondary size grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_balance.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### Waste flows

###### Rejected soda-lime glass (`reject_glass`)

Actual external rejects by destination; distinguish internal recycle and saleable grades; no automatic credit. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_balance after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Rejected soda-lime glass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_balance.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### Captured soda-lime glass dust (`captured_dust`)

Actual dry captured dust with assay/moisture; not emitted PM or crystalline silica. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Captured soda-lime glass dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### Wet glass-grinding sludge (`sludge`)

Conditional actual wet collection; whole wet sludge once with solids/free-water subaccounts, not duplicate waste constituents. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_water after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Wet glass-grinding sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_water.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### Glass-process wash wastewater (`wastewater`)

Actual external treatment Waste with integrated volume/density and assays; direct discharge needs separate real elementary species/water. COD/total metal not molecular species. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_water after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Glass-process wash wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_water.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### Spent stainless-steel sieve mesh (`spent_screen`)

Actual removed alloy and attached glass/moisture, destination; internal repair is transfer. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_assets after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Spent stainless-steel sieve mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_assets.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### Spent formed alumina furnace refractory (`spent_refractory`)

Conditional actual removal with attached glass/moisture/binder change, independent from new supply. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_assets after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Spent formed alumina furnace refractory
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_assets.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### Waste mineral gearbox lubricating oil (`spent_oil`)

Actual removed whole waste oil; water/contamination subaccounts, stock/leak and treatment reconciliation. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_assets after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Waste mineral gearbox lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_assets.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

##### Elementary flows

###### New fossil carbon dioxide (`co2_generated`)

Independently determined fossil oxidation; distinguish inlet CO2 and other carbon in glass/impurities. Molecular CO2 CAS124-38-9, fossil Elementary emission to air unspecified. Noisy isotope/ion/dry-ice synonyms not adopted. Only independently evidenced new fossil CO2; ambient pass-through and other carbon origins separate. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Carbon monoxide emission (`co_air`)

Actual speciated incomplete combustion including startup/upsets. Molecular fossil CO CAS630-08-0, Elementary emission to air unspecified. Flue-gas/cryogenic synonyms do not authorize aggregate exhaust or liquid purchase; require actual CO speciation, not total C/VOC. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Nitrogen monoxide emission (`no_air`)

Actual NO, not guessed NOx split. Molecular NO CAS10102-43-9, Elementary emission to air unspecified. HNO/nitroxyl synonym noise is not adopted; require actual NO, never total NOx as NO2. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Nitrogen dioxide emission (`no2_air`)

Actual NO2 phase/species, not total-NOx equivalent. Molecular NO2 CAS10102-44-0, Elementary emission to air unspecified. N2O4 synonym does not authorize tetroxide mass; independently resolve phase/equilibrium/species, never guessed NOx split. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Sulfur dioxide emission (`so2_air`)

Actual fuel/impurity sulfur and SO2 evidence, not total SOx. Molecular SO2 CAS7446-09-5, Elementary emission to air unspecified. Native sulfur-oxide wording does not authorize total SOx/sulfate particles. Require actual SO2/sulfur evidence, no copied factor. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Fossil methane emission (`methane_air`)

Actual local unburnt/leaked fossil methane, no duplicate upstream leakage. Molecular fossil CH4 CAS74-82-8, Elementary emission to air unspecified. Extensive synonym contamination includes graphite/carbon black/formaldehyde/unrelated compounds: none adopted. Consistent basename/CAS/medium identify CH4 only. Require actual fossil methane speciation, not gas purchase/VOC/total hydrocarbons. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Water vapour outlet (`water_air`)

Measure actual wet exhaust and independent humidity/free evaporation/combustion water; no unmeasured-fuel water factor. H2O CAS7732-18-5 vapour Elementary emission to air unspecified. Heavy/tritiated/ice/group synonyms not adopted. One actual outlet includes independently determined inlet humidity/free-water evaporation/combustion-water subaccounts. Liquid droplets/purge/condensate separate; no duplicate water purchase. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Emitted glass-process particulate matter (`pm_air`)

Actual dry PM after controls by interval/location; no captured-dust duplication or nested PM10/PM2.5 totals. Elementary particulate emission to air unspecified, Mass/kg, size unspecified. Native clinker case is explicitly a nonbinding example; transfer no clinker factor, chemistry, size, stack-height or LCIA assumption. Only genuinely unknown size; known disjoint fractions need exact identities without overlapping totals. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_emissions after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_emissions.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### Dinitrogen emitted to air (`n2_air`)

Native molecular dinitrogen CAS7727-37-9, Elementary emission to unspecified immediate outdoor air, Mass/kg. Independently measure actual gross N2 outlet at wet/dry state and retain elemental/reaction evidence; no fixed air fraction or inlet-equals-outlet assumption. Liquid/isotope aliases do not authorize other states; resources, total nitrogen excluding N2 and NOx are not this outlet. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

###### Molecular oxygen emitted to air (`o2_air`)

Native molecular oxygen CAS7782-44-7, Elementary emission to unspecified immediate outdoor air, Mass/kg. Independently measure gross residual O2 and exhaust wet/dry state; do not infer stoichiometric demand or fixed dry-air fractions. Noisy ion/excited/liquid/isotope aliases do not redefine canonical ordinary O2; resource, soil or long-term records do not represent this outlet. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

###### Argon emitted to air (`ar_air`)

Native ordinary argon CAS7440-37-1, Elementary emission to unspecified immediate outdoor air, Mass/kg. Independently measure gross natural Ar outlet in the same gas control volume. No radioactive/Ar-40-specific substitution, fixed air fraction or unmeasured balance residual follows from polluted isotope aliases. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

###### Atmospheric-origin carbon dioxide emitted to air (`ambient_co2_air`)

Pair actual ambient input and output; no fossil generation or automatic negative credit. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_air after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Atmospheric-origin carbon dioxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_air.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `us4385917-bead-furnace`

### Process: Original-cohort services (`services`)

#### Inputs

##### Product flows

###### Returned original-cohort beads (`fg_return`)

Match actual dry beads and independently acquired water/dirt/packaging to original release/dispatch; reinspection not new Q or repurchase. Spherical glass-bead abrasive/blasting Product only. Native synonyms and comment support blasting; CAS, composition, grade, diameter, coating, hollow state, route, geography and supplier are not fixed. Require actual solid soda-lime glass, uncoated state, size/roundness/defect/stress acceptance. Exclude hollow/ceramic/optical spheres, angular powder, fibre-feed balls and composite fillers. No density or particle weight is inferred. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_service after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Glass Bead `56932669-9eec-47ff-a6b7-a542c0d99f78`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_service.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Post-release handling electricity (`service_electricity`)

Actual packing/storage/electric-forklift/loading/retest/rework increments, original-cohort Q and observed horizon. No copied manufacture or invented zero future service. CN user-side grid-average AC Product; 1–35kV consumption mix to user; Net calorific value/MJ. Match actual voltage, geography and provider boundary or replace identity. Convert kWh by3.6 before attribution; no carrier mass or duplicate provider transmission losses. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_service after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_service.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Polyethylene inner bag (`pe_purchase`)

Actual new whole supplied article, measured tare/construction; separately purchased liner/closure/repair components added separately. Never bead Q. One complete polyethylene bag Product, CAS9002-88-4, production mix at plant, Mass/kg. No fixed capacity, grade or supplier. Only actual PE bag/liner; separately bought PP outer sack stays separate. Buy whole supplier article once, no guessed tare or PP equivalence. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Polyethylene inner bag (`pe_supplier_included`)

Conditional actual whole article physically arriving with a supplier input whose packaging burden is already included. Record the complete gross arrival once, separately from a new purchase and an external return; included burden is not purchased again. This movement is ledger-only and never bare-bead Q. One complete polyethylene bag Product, CAS9002-88-4, production mix at plant, Mass/kg. No fixed capacity, grade or supplier. Only actual PE bag/liner; separately bought PP outer sack stays separate. Buy whole supplier article once, no guessed tare or PP equivalence. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Polyethylene inner bag (`pe_returned_in`)

Real external returned article with condition and original burden, not new purchase; internal reuse cancels. One complete polyethylene bag Product, CAS9002-88-4, production mix at plant, Mass/kg. No fixed capacity, grade or supplier. Only actual PE bag/liner; separately bought PP outer sack stays separate. Buy whole supplier article once, no guessed tare or PP equivalence. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Woven polypropylene bulk sack (`pp_purchase`)

Actual new whole supplied article, measured tare/construction; separately purchased liner/closure/repair components added separately. Never bead Q. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Woven polypropylene bulk sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Woven polypropylene bulk sack (`pp_supplier_included`)

Conditional actual whole article physically arriving with a supplier input whose packaging burden is already included. Record the complete gross arrival once, separately from a new purchase and an external return; included burden is not purchased again. This movement is ledger-only and never bare-bead Q. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Woven polypropylene bulk sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Woven polypropylene bulk sack (`pp_returned_in`)

Real external returned article with condition and original burden, not new purchase; internal reuse cancels. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Woven polypropylene bulk sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Whole wooden pallet (`pallet_purchase`)

Actual new whole supplied article, measured tare/construction; separately purchased liner/closure/repair components added separately. Never bead Q. Wooden-pallet Product, Mass/kg, lumber-mill production mix, boards/slats route. No fixed dimensions, treatment, moisture or capacity. Active electricity classification is inconsistent but name/wood route/property and preserved wood-packaging source classification identify wooden pallets. Disclose the isolated classification defect. Verify whole actual pallet/provider; reuse is not purchase. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Whole wooden pallet (`pallet_supplier_included`)

Conditional actual whole article physically arriving with a supplier input whose packaging burden is already included. Record the complete gross arrival once, separately from a new purchase and an external return; included burden is not purchased again. This movement is ledger-only and never bare-bead Q. Wooden-pallet Product, Mass/kg, lumber-mill production mix, boards/slats route. No fixed dimensions, treatment, moisture or capacity. Active electricity classification is inconsistent but name/wood route/property and preserved wood-packaging source classification identify wooden pallets. Disclose the isolated classification defect. Verify whole actual pallet/provider; reuse is not purchase. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`





###### Whole wooden pallet (`pallet_returned_in`)

Real external returned article with condition and original burden, not new purchase; internal reuse cancels. Wooden-pallet Product, Mass/kg, lumber-mill production mix, boards/slats route. No fixed dimensions, treatment, moisture or capacity. Active electricity classification is inconsistent but name/wood route/property and preserved wood-packaging source classification identify wooden pallets. Disclose the isolated classification defect. Verify whole actual pallet/provider; reuse is not purchase. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Polyethylene inner bag (`pe_gross_out`)

Actual article accompanying gross physical dispatch including repeat movements; no economic/net-Q scaling, new bead production or automatic co-product. One complete polyethylene bag Product, CAS9002-88-4, production mix at plant, Mass/kg. No fixed capacity, grade or supplier. Only actual PE bag/liner; separately bought PP outer sack stays separate. Buy whole supplier article once, no guessed tare or PP equivalence. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Polyethylene inner bag (`pe_return_out`)

Real separate return to owner/supplier with condition/destination, distinct from customer dispatch/internal reuse. One complete polyethylene bag Product, CAS9002-88-4, production mix at plant, Mass/kg. No fixed capacity, grade or supplier. Only actual PE bag/liner; separately bought PP outer sack stays separate. Buy whole supplier article once, no guessed tare or PP equivalence. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Woven polypropylene bulk sack (`pp_gross_out`)

Actual article accompanying gross physical dispatch including repeat movements; no economic/net-Q scaling, new bead production or automatic co-product. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Woven polypropylene bulk sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Woven polypropylene bulk sack (`pp_return_out`)

Real separate return to owner/supplier with condition/destination, distinct from customer dispatch/internal reuse. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Woven polypropylene bulk sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Whole wooden pallet (`pallet_gross_out`)

Actual article accompanying gross physical dispatch including repeat movements; no economic/net-Q scaling, new bead production or automatic co-product. Wooden-pallet Product, Mass/kg, lumber-mill production mix, boards/slats route. No fixed dimensions, treatment, moisture or capacity. Active electricity classification is inconsistent but name/wood route/property and preserved wood-packaging source classification identify wooden pallets. Disclose the isolated classification defect. Verify whole actual pallet/provider; reuse is not purchase. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Whole wooden pallet (`pallet_return_out`)

Real separate return to owner/supplier with condition/destination, distinct from customer dispatch/internal reuse. Wooden-pallet Product, Mass/kg, lumber-mill production mix, boards/slats route. No fixed dimensions, treatment, moisture or capacity. Active electricity classification is inconsistent but name/wood route/property and preserved wood-packaging source classification identify wooden pallets. Disclose the isolated classification defect. Verify whole actual pallet/provider; reuse is not purchase. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Gross dispatch of original-cohort beads (`fg_dispatch`)

Previously first-released dry beads to actual factory dispatch gate; repeats not new Q. Keep added water/dirt and gross package mass separate. Spherical glass-bead abrasive/blasting Product only. Native synonyms and comment support blasting; CAS, composition, grade, diameter, coating, hollow state, route, geography and supplier are not fixed. Require actual solid soda-lime glass, uncoated state, size/roundness/defect/stress acceptance. Exclude hollow/ceramic/optical spheres, angular powder, fibre-feed balls and composite fillers. No density or particle weight is inferred. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_service after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Glass Bead `56932669-9eec-47ff-a6b7-a542c0d99f78`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_service.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### Waste flows

###### Waste polyethylene bag (`pe_waste`)

Actual retired whole article with attached glass/moisture/contamination subaccounts and treatment; no automatic recovery credit. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Waste polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Waste woven polypropylene sack (`pp_waste`)

Actual retired whole article with attached glass/moisture/contamination subaccounts and treatment; no automatic recovery credit. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Waste woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Waste wooden pallet (`pallet_waste`)

Actual retired whole article with attached glass/moisture/contamination subaccounts and treatment; no automatic recovery credit. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_packaging after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_packaging.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### Waste soda-lime blasting beads (`service_glass_waste`)

Original cohort history plus actual later loss/rework, never subtract historic first-release Q or invent replacement production. Concrete atomic identity unbound; match actual native family/form/route/geography/medium/type/property/unit and provider before binding. Quantity linkage: use this row single calc_reference x_i from undivided raw cp_service after calc_conversion, calc_history and actual attribution; card and aggregation never divide again.

- Selected flow: Waste soda-lime blasting beads
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw using cp_service.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

Attributional first-release manufacture with separate actual later cohort services. This hierarchy applies where allocation is justified by study context; physical balances remain gross.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared operations | First use real subdivision or justified virtual subdivision for exclusive grade operations/exchanges. Meter actual screening/blending/packing; carry glass and inherited vectors to real recipients. Explain why any remaining joint furnace exchange cannot be separated. Internal recycle is not co-product. | `jrc-ilcd-attributional-2010` |
| allocation_causality | remaining joint exchanges | Independently identify and demonstrate exchange-specific determining physical causality. Available mass/count/energy ratios are not automatic causal criteria. Different exchanges may need different relations; document boundary, evidence, uncertainty and sensitivity then apply once. | `jrc-ilcd-attributional-2010` |
| allocation_residual | genuine inseparable remainder | Only remaining amounts without determining physical causality use contemporaneous actual-state market value at the actual common-process exit. Collect comparable real quantities/prices, grade/moisture, currency/time/geography/delivery basis; remove later processing/packing value. No free physical/economic choice, fixed split, invented scrap price or automatic recycling/substitution credit. Co-function burdens sum to original common amount. | `jrc-ilcd-attributional-2010` |
| allocation_returns | returns and services | Return/retest/redispatch does not create Q. Keep original manufacturing burden once and only actual later increments for original cohort/observed horizon. This first-release method cannot silently become net-delivery normalization: that needs reviewed gross G/R and original-delivery reversal bridge plus actual added water/loss/rework. Real rework requires manufacturer permission and actual grade-specific acceptance; measure each actual material/water addition/removal and new waste separately and add its atomic exchange before completion. Remelting or changed grade/route requires applicability and inherited-history review; no assumed permission, purity recovery or new Q from retesting. | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw | manufacture | cullet | weighing | lot; source glass; supplier; gross/net kg; moisture; contaminants; sorting loss; crusher/screen; conditioning; all modes | Calibrated lot weighing and representative moisture/composition/contamination tests; retain as-received units and actual losses.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | kg | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_release | manufacture | finished_beads | quality_release | cohort; grade; solid/uncoated state; particle distribution; roundness; defect/stress methods; first time; bare dry kg; moisture; consumed samples; stock state | Weigh accepted bare lots; dry mass from representative moisture method without changing glass. Link unique first acceptance to actual grade tests; flag retest/dispatch as already released.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | kg | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_energy | manufacture | electricity; fuel | meter | meter; start/end; kWh; integrated gas volume; pressure; temperature; compressibility; composition; independent density; HHV; carrier mass; C/H/S; modes; provider scope | Calibrated meters and fuel assays; separate production and nonproductive modes. Preserve original units/HHV before conversion, independent carrier mass/element subledger without double purchase.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | kWh; m3; kg; MJ | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_water | manufacture | process_water; sludge; wastewater | water_record | location; integrated volume; temperature; independent density; moisture; solids; dissolved species; recirculation; purge; condensate; phase; treatment; reaction-water observation | Independently measure external liquid inlets/outlets and phase. Separate inlet humidity, free/structural water, evaporation and combustion water with independent observations and fuel evidence; one residual cannot determine two unknowns.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | m3; kg | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_air | manufacture | each gross air species | gas_record | path; interval; integrated volume or real rate; dry/wet basis; temperature; pressure; independent density/composition; O2; N2; Ar; CO2; humidity; circulation; destination | Measure primary/secondary/feed/cooling air and outlets; reconcile dry/wet states. Convert actual individual species, integrate rates once, never multiply integrated volume by time again.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | m3; kg | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_emissions | manufacture | each emission; captured_dust | species_record | outlet; interval; gas flow/state; concentration basis; molecular species; phase; NO/NO2; carbon origin; dry PM size; captured dust; limits; operating modes | Representative actual sampling after controls and speciated mass calculations. Retain non-detects/uncertainty; no aggregate-to-species inference or overlapping particle bins. Water outlet constrained by independent fuel/humidity/liquid records.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | kg; m3 | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_assets | manufacture | each asset; lubricant; screen; refractory | asset_record | asset/configuration; gross physical opening/new/repair/removed/closing; installed/spare; oil/fluid; moisture; wear; measured mass; actual use hours; supported service capacity; provider scope | Gross asset/fluid stock balance separate from actual attributable manufacturing/service fraction. Support service capacity/use and historical burden per asset, no invented fixed life/mass/full asset per kg. Add each actual missing machine/repair material individually.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | kg; h | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_logistics | manufacture | freight | shipment_record | shipment; actual cargo tonnes; km; mode/route; empty return; boundary | Actual shipment/route records; preserve tonnes/km, each actual mode separate.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | t; km; tkm | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_balance | manufacture | stocks; secondary_grade; reject_glass | stock_record | lot; physical amount; dry/wet state; opening/closing raw/WIP/unassigned stores; each inherited exchange vector; failed/zero/startstop/idle/cleanup/rework; coproduct state/value | Reconcile lot/stock/history independently from mass/species/element closure. First-released closingFG excluded from manufacturing B_close; actual exclusive operations and residual allocation substantiated.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | native extensive unit; kg | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_service | services | each original-cohort service | cohort_service_record | original cohort/Q; observed start/end; opening/closingFG; gross dispatch; actual returned dry beads; original delivery; added water/dirt; new loss/rework; kWh; paired internal Q; actual manufacturer rework permission and grade acceptance; actual new material/water and removed old material; original delivery reversal; each inherited vector | Trace each movement to original release/history; independently measure returns and acquired water/contamination. Collect only observed increments, not new production at retest/redispatch; horizon explicit.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. | kg; kWh | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |
| cp_packaging | services | each PE bag; PP sack; pallet | article_stock_record | article construction; tare; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchases; external_returns_received; closing counterparts; gross_outbound; external_return_out; waste; repairs; supplier_included_arrival; supplier burden inclusion; actual article water uptake/loss; new and removed repair parts; every inherited exchange vector | Count/weigh actual article construction/state with calibrated tare. Include pre-release attached articles where present, supplier BOM, repairs, external returns and all closing states. Internal reuse cancels, never new purchase each cycle.  Collection/aggregation sum undivided raw records only, preserving original units/history. Convert, attribute and reconcile first; only calc_reference produces x_i per 1 kg reference flow. The aggregation field references this result without dividing Q again. Record purchase, supplier-included arrival, external return received, gross dispatch and separate return sent as five distinct directions with mutually exclusive stocks and each receipt once. Actual wood/paper moisture and genuine old/new repair components remain atomic; whole article and included constituent are never purchased twice. | kg; item | Every lot/event and representative meter interval | Complete campaign/all modes; services use original-cohort observed start/end | Actual included site and documented suppliers/outlets | per 1 kg reference flow | Calibration; original records; lot/state trace; completeness; uncertainty/detection limits |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_conversion | all inventory rows | Convert raw extensive amounts into row numerator units before attribution. Electricity MJ = metered kWh *3.6. Fuel MJ uses actual integrated gas and HHV, independent carrier mass subledger. kg from weighing/independent substance-state density; tkm = actual tonnes * km. Integrate true rates once, not already integrated volume. Item mass needs measured same-configuration article/lot, no secondary-factor guesses. | raw_i; conversion_i; cp_raw; cp_energy; cp_water; cp_air; cp_logistics | C_i | `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| calc_history | all inventory rows | A_i = B_open_i + C_i - B_close_i after actual conversion/attribution, preserving each inherited vector. Manufacturing B_close includes raw/WIP/genuinely unassigned stores, never first-released FG already in Q. Internal transfers cancel once. Services assign only actual increments to original cohort/horizon without repurchasing manufacture. Asset service fraction = evidenced actual use / supported service capacity, applied to original asset burdens separately from gross asset stocks. C_i identifies receipt versus already-consumption-corrected readings: never apply a second stock correction. Every raw/WIP/non-WIP physical quantity retains its exchange-specific vector; ordinary waste/rejects and failed loads do not automatically export burden or earn credit. For all FG/package movement cards A_i is the full measured gross movement, without adding burden vectors, stock-correcting the same leg or applying allocation shares; these ledger-only legs create no provider purchase/co-product credit. Performed service for held closingFG retains actual service burden; no deduction merely because it is held. | B_open_i; C_i; B_close_i; cp_balance; cp_assets; cp_service | A_i | `jrc-ilcd-attributional-2010` |
| calc_reference | all inventory rows | x_i = A_i / Q; A_i is attributable unnormalised exchange amount in this row numerator unit; Q is unique first-released net dry bare bead kg. This is the only normalization. Cards/aggregation reference this same x_i without dividing again. Q = 0 retains raw loads/history and produces no unit result. Finished 1 kg is reference identity, not another output addition. | A_i; Q; cp_release | x_i | `jrc-ilcd-attributional-2010` |
| calc_physical | all physical streams | At manufacturing, FG/service and combined gates: opening physical stocks + gross actual external inputs = closing stocks + gross actual external outputs. Pair/cancel internal Q/transfers. Independently check whole mass, water, relevant glass/metal elements and molecular species; keep asset/fluid stocks separate. No economic scaling of gross mass, or residual fitting of two unknowns. | gross_i; stock_open_i; stock_close_i; cp_balance; cp_water; cp_air; cp_emissions; cp_assets | physical_closure_i | `us4385917-bead-furnace`; `fhwa-bead-workflow-2014` |
| calc_packaging | services | Each PE bag, PP sack and pallet separately: opening_empty + opening_attached_WIP + opening_attached_FG + opening_reusable + purchases + supplier_included_arrival + external_returns_received = closing_empty + closing_attached_WIP + closing_attached_FG + closing_reusable + gross_outbound + external_return_out + waste. Retain burden vectors and repair supplies; cancel internal reuse, not gross external movements. Never bare-glass Q/new purchase each reuse/automatic co-product or credit. All stock categories and receipts are mutually exclusive; included supply carries no second purchase. Add separately measured real article water uptake/loss and new/removed repair components on their physical sides; retain original vectors without double-buying constituents. | cp_packaging; stock_open_i; stock_close_i; gross_i | packaging_closure_i | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014` |
| calc_fg | services | OpeningFG + Q + actual external returned dry beads + true permitted dry-glass additions = closingFG + gross dispatched dry beads + service glass waste + separately identified actual dry-glass exits. Added water/contamination balances separately. Internal Q cancels at combined gate so manufacture is not output twice; original manufacture remains once and later increments keep original Q/observed horizon. Any actual dry-material addition/removal requires its own atomic record and manufacturer acceptance; do not assume such additions or equivalent return mass. | cp_service; cp_release; Q; gross_i | fg_closure_i | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | all processes | Demonstrate actual solid/uncoated/soda-lime blasting grade, whole cullet-to-first-release route and acceptance methods; qualitative synthesis is not numerical factory/performance evidence. | Supplier glass history; microscopy; route; grade/QC/release records |
| dq_history | all inventory rows | Retain original units, all modes, inherited vectors, Q0, uncertainty and explicit observed service horizon; no omission of failures or unknown past burden. | Calibration; raw logs; stock/cohort histories; observation coverage |
| dq_native | all inventory rows | Before binding verify full native state/form/route/geography/medium/type/CAS/properties/unit chain and full consuming-card restrictions. Distinguish unbound auxiliary/provider gaps from genuine core identity/method holds. | Query members; exact native records; supplier/state/boundary evidence |
| dq_physical | all processes | Independent mass/element/species/water/phase/packaging/asset evidence must reconcile gross gates; no residual fit or economic mass scaling. Unknown speciation/non-detects remain explicit. | Closure; species/phase analysis; article and asset/fluid ledgers |

## 9. Validation Rules

These rules inherit the full solid/uncoated/soda-lime/blasting/cullet-flame/first-release scope and all ancestor boundary/cohort conditions. Engineering checks do not approve science, translation, mapping or publication.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product | Check actual solid glass-bead abrasive, soda-lime grade, uncoated state, full raw-to-terminal route and unique quality release. Generic elementary particles, hollow/fibre/coated/composite identity or bought-bead packing cannot substitute. Real missing core native identity or primary route/terminal evidence prevents usable methodology whatever the formal check. | `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| validate_quantity | all inventory rows | Both languages must use same Q/native numerator units, raw conversion, actual allocation/history and only one A_i/Q. Collection/cards never divide again; Q0 no unit output. Unknown relationships are unresolved, never pass. | `jrc-ilcd-attributional-2010` |
| validate_gates | all physical streams | Check manufacturing, FG/service and combined gross mass/element/species/water, complete packaging/returns, asset/fluid histories. ClosingFG in first-release Q keeps manufacturing burden. No duplicate internal Q, arbitrary economic/physical split or automatic credit. | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| validate_native | all inventory rows | Recheck adopted full basename/synonyms/comments, CAS/state/route/form/geography/medium/type and every property plus exact unit chain. Native noise/contradictions and family restrictions remain in each full consuming context; unbound auxiliary atoms are never replaced by generic collections. | `swarco-cullet-industrial-beads`; `us4385917-bead-furnace` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Attributional supply of matching uncoated solid blasting bead grade with declared observed services |
| allowed_use | Matching grade/state/route and first-release boundary after independent applicability review |
| excluded_use | Whole37199; hollow/coated/composite/optical/fibre/road-performance extrapolation; unreviewed net-delivery/lifetime service |
| required_metadata | solid soda-lime glass and recovered flat-glass origin; uncoated noncomposite state; actual size distribution and test; roundness and defect acceptance; thermal history and stress/QC gate; furnace and actual fuel/air/cooling route; unique first-release dry bare mass Q and cohort; dry mass and moisture method; raw/WIP/FG histories and all modes; native identity/provider restrictions; molecular species and free/reaction/phase-water evidence; each packaging construction and returns; physical assets/fluids and service burden; original-cohort service observation window |
| required_quality_disclosure | Raw evidence; unbound identity/provider limits; modes/history; allocation; mass/species/water closure; uncertainty; cohort/service horizon; review state |
| update_trigger | Glass source/grade, coating/solid state, route/fuel/cooling, provider, stock history/service horizon or new evidence change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| swarco-cullet-industrial-beads | literature | SWARCO Indusferica, How Glass Cullet Turn into High-Grade Industrial Products. https://www.swarco-indusferica.com/en/b/glass-cullet-industrial-products/ | Manufacturer primary: flat-glass scraps, crushers/pre-screen, shaft-furnace spherical formation and actual soda-lime blasting use. No marketing energy/size/throughput default; no LCA allocation. |
| fhwa-bead-workflow-2014 | official_guidance | FHWA-HRT-14-021, Screening Level Assessment of Arsenic and Lead Concentrations in Glass Beads Used in Pavement Markings, January2014, pp.34–37 (PDF44–47), especially p.36 Bead Manufacturing/Bead Blending. https://www.govinfo.gov/content/pkg/GOVPUB-TD2-PURL-gpo50114/pdf/GOVPUB-TD2-PURL-gpo50114.pdf | Complete official primary: common cullet/grinding/furnace/cooling/sieving/blending/QC/packing/handling and blend-only counterexample. Road-marking scope does not prove blasting specification, current health/legal limit, recipe, numeric emission or allocation. |
| us4385917-bead-furnace | literature | US4385917A, Method for making glass beads, granted1983-05-31, description and Figures1–6. https://patentimages.storage.googleapis.com/56/27/39/74c510f37c2920/US4385917.pdf | Complete patent primary: gas/air apparatus, cullet feeding, surface-tension rounding, air cooling, discrete solid spheres/collection. Alternative fuels/oxygen enrichment and numeric dimensions/temperatures/recipes/efficiencies are examples, not defaults or LCA allocation. |
| jrc-ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, First edition March2010, §§7.9.2–7.9.3, pp.255–272 (PDF275–292). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision, exchange-specific determining physical causality and only residual actual-state common-exit market value. Foreground protocols operationalize bookkeeping independently; no bead recipe/route/numeric allocation inferred. |
