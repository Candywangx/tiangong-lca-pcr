---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.extruded-fired-moler-insulating-bricks
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Extruded fired moler insulating bricks

## 1. Scope and Applicability

Applies to extruded fired bare insulating bricks based on natural clay-bearing moler diatomaceous earth with actual wood-sawdust pore burnout and actual limestone when required by the formulation; from real raw supply to first final quality release with separately recorded original-cohort storage/packing services. The EPD industrial route and manufacturer terminal information support a transparent industrial LCA technical synthesis; no single-SKU common-factory recipe or one-order proof of every condition is claimed.

Excludes quartz/quartzite silica bricks ordinary clay building bricks high-alumina or magnesia refractories alumina chemical crucibles glazed sanitaryware tableware ornamental/electrical ceramics grinding media glass mineral powders diatomite filter aid unfired adobe phosphate-modified patent routes and vermiculite/calcium-silicate boards. Other siliceous earths or shaping/material routes require actual phase manufacturing and terminal evidence; a CPC leaf or later 37320 label does not establish a duplicate PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.extruded-fired-moler-insulating-bricks |
| classification_refs | CPC 3.0:37310 (narrower semantic scope; no accepted mapping) |
| covered_products | extruded fired bare moler insulating bricks with natural clay and actual sawdust pore formation |
| excluded_products | ordinary silica/clay bricks high-alumina refractories and other excluded phase/terminal families above |
| representative_product | actual fired machined porous moler backup insulation brick |
| production_route | whole raw supply preparation mixing conditioning extrusion cutting drying burnout firing cooling finishing acceptance |
| market_state | complete fired machined accepted bare brick; supply moisture and packaging separately recorded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provide a backup insulating brick body for the declared industrial application; no installed lifetime equivalence asserted |
| How much | 1 kg first-release dry bare net brick mass |
| How well | actual grade dimensions thermal/mechanical testing and application acceptance; no invented performance default |
| How long or cycle | one manufacturing first release; later service declares original Qc and observed H separately |
| reference_flow_link | finished_brick |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | moler geological origin and natural clay/opaline skeleton composition; actual whole supply forms and moisture assays; wood species origin and pore-former carbon/ash; limestone presence assay and carbonate conversion; extrusion cut geometry and machining state; actual drying burnout firing cooling route and atmosphere; thermal mechanical dimensional acceptance method and grade; first final release cohort IDs and dry bare net mass Q; reference flow family native restrictions and classification discrepancy; raw WIP stores inherited per-exchange burden vectors; released FG dispatch return and observed cohort-service horizon; utility supplier geography voltage fuel state heat/carrier conventions; atomic gas species phases and independent mass/element evidence; disjoint packaging and physical capital/fluid stocks; single attribution and normalization with uncertainty disclosure |

Declare every qualifier in dataset metadata the full reference-flow description or process notes. The adopted reference-family restrictions bind both this reference object and the finished_brick consumer card. Native Product flow is production mix at plant; no geography CAS grade or single silica phase is fixed. Its complete definition includes high-temperature fired silica-based bricks with thermal-shock/structural stability. Adopt only the actual fired machined opaline-diatom/clay backup-insulation brick supported by the cited manufacturer terminal, not any unfired powder ordinary clay building brick dense quartz silica brick or generic purchased article. Native classification says other than siliceous earths (37320), inconsistent with the broad silica-inclusive material definition; disclose this classification discrepancy without treating it as acceptance or using it to waive a hard material/phase/route/type conflict. Actual grade performance and provider compatibility require separate evidence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect Q independently with cp_release as unique first-release dry bare net brick mass. Packaging unreleased WIP dispatch and reinspection are not new Q; released closing FG is already in Q and cannot be subtracted from manufacture or output again. |
| native_units | all inventory rows | each exchange native extensive property | the row native unit | Preserve each row Mass/kg Energy/kWh or MJ native volume/m3 or count/item. Required Mass/kg cannot overwrite other properties. Count-to-mass requires calibrated measured net mass for that actual configuration; do not infer it from density or secondary properties. |
| one_basis | all inventory rows | actual numerator unit | row native unit | All manufacture rows and internal transfers use the same Q. Service increments use original Qc and observed H. Raw collection is undivided; single_quotient divides once only. Q0 retains burdens without a unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | actual received wet/dry raw clay-bearing moler sawdust actual limestone and separately supplied inputs; no purchased fired-product shortcut |
| starting_condition_role | foreground_input |
| product_classification_scope | CPC 3.0:37310; moler insulating-brick subset |
| recursive_input_rule | track prior manufacturing history and actual incremental processing for any genuine same-category input; internal returns cancel without another purchase and cannot remove actual manufacturing |
| upstream_dataset_requirement | each purchased supply form geography technology and provider must match and link once; missing burden remains explicit and blocks dependent results |
| disclosure | declare site period cohorts actual supply start all modes stock vectors first-release gate and original-cohort service H; disclose actual plant-data gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | Collect actual raw moler with its natural clay plus whole sawdust and actual limestone from received supply through preparation conditioning extrusion cutting drying burnout firing cooling machining inspection and first release. Fired finished bricks purchased merely for packing cannot stand in for manufacturing. | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007` |
| b_cohort | quantity | Q is the sum of unique first-release dry bare net brick masses including already released closing FG. Manufacturing Bclose excludes released FG and includes only raw/WIP/unassigned non-WIP stores with inherited exchange vectors. Preserve all failed zero-output start-stop idle cleanup and rework burdens. | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| b_service | service | Maintain actual post-release services in original cohort Qc and observed H; do not reverse manufacture or create Q on return reinspection or dispatch. Physical FG uses actual-state masses: opening plus first-release bodies at their actual FG state plus actual returns plus actual added water/material equals closing plus gross dispatch plus destruction plus other identified physical exits including evaporation and processing loss. Keep the separate dry reference-Q ledger; never insert dry Q into a wet physical bridge without its independently measured water account. Consolidation cancels internal reference hand-offs. | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| b_complete | all exchanges | Each card is one exchange. Add any actually used chemical whole formulation fuel carrier packaging waste or emitted species absent from this map as its own card before dataset acceptance. A conditional absence requires evidence; unknown is never zero. Upstream providers and embedded ingredients are charged once; internal heat water and scrap loops cancel only matching transfers. | `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007` |
| b_gates | physical boundary | Keep manufacture FG-service and consolidated whole-mass and relevant-element balances independent from burden allocation. No economic fraction shrinks gross shipments returns packaging assets or fluids. Actual water free structural reaction and phase states and supplier carrier mass/enthalpy returns are required; no presumed boiler steam or zero effluent. | `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | Raw receipt preparation and mixing | required | actual operations with card-specific conditions | foreground production | per 1 kg reference flow; service retains original Qc/H |
| form | Conditioning extrusion and cutting | required | actual operations with card-specific conditions | foreground production | per 1 kg reference flow; service retains original Qc/H |
| thermal | Drying pore burnout firing and cooling | required | actual operations with card-specific conditions | foreground production | per 1 kg reference flow; service retains original Qc/H |
| finish | Machining inspection and first release | required | actual operations with card-specific conditions | foreground production | per 1 kg reference flow; service retains original Qc/H |
| support | Manufacturing maintenance and environmental control | required | actual operations with card-specific conditions | foreground production | per 1 kg reference flow; service retains original Qc/H |
| service | Original-cohort storage packing and dispatch service | required | actual operations with card-specific conditions | original cohort service | per 1 kg reference flow; service retains original Qc/H |

Collect each card according to actual presence; conditional flows are not all presumed present. A missing UUID retains one specific physical/chemical name. Descriptions and native restrictions are complete consumer context.

### Process: Raw receipt preparation and mixing (`prepare`)

#### Inputs

##### Product flows

###### Raw moler clay-bearing diatomaceous earth (`moler`)

Receive the complete natural clay-bearing diatomaceous material in its actual wet or dry supply state; crushing screening mixing and storage are foreground operations. Opaline diatom skeletons and naturally accompanying montmorillonitic clay are constituent subaccounts; do not buy them again as separate inputs. Native pure silica resources or calcined filter aid are not this supplied formulation.

- Selected flow: Raw moler clay-bearing diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Untreated wood sawdust for pore formation (`sawdust`)

Weigh the whole purchased untreated wood sawdust with actual species origin moisture ash and particle-size evidence. Its burnout creates pores; it is not a free energy credit. If supplied as waste rather than Product, change the actual flow type and boundary explicitly without adding a second copy.

- Selected flow: Untreated wood sawdust for pore formation
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Limestone (`limestone`)

Use the whole supplied limestone only for a formulation that actually contains it; assays carbonate moisture and impurities remain subaccounts. Quantify actual decarbonation and retained calcium independently; do not infer complete decomposition or a fixed recipe from the EPD composition range. Native Product limestone uses Mass/kg; composition purity grade extraction route geography and provider are unspecified. Adopt whole actual stone only with independent carbonate/moisture/impurity assays; not precipitated pure CaCO3 or native-ground elementary resource.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_material_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Process mixing water (`mix_water`)

Record actual added water separately from native moler/sawdust moisture. Record treatment source temperature and measured mass; volume conversion requires independent density at that actual state.

- Selected flow: Process mixing water
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_utility_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Purchased alternating-current electricity (`prepare_electricity`)

Meter crushing screening conveyors mixing and raw storage in all operating modes; select the real geography voltage and supplier. A biomass power-plant export identity or a voltage-transformation service is not interchangeable with purchased user electricity.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw amount using cp_utility_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Diesel fuel (`handling_diesel`)

Conditional actual on-site material handling fuel; record receipt and stock changes with independent fuel density if litres are measured. External transport already contained in an upstream provider is not added twice. Native Product diesel is Mass/kg with fuel grade formulation density heating value refinery geography and provider unspecified. Require actual delivered diesel specification; neither a water/air diesel emission node nor a fixed heating value or density.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_utility_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

###### Molecular oxygen from ambient air (`prepare_air_o2`)

O2 drawn with actual process air; gross amount and unreacted outlet are separate from net oxidation. Conditional actual handling-combustion inlet for this stage. Native Elementary flow O2, CAS7782-44-7, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual O2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Molecular dinitrogen from ambient air (`prepare_air_n2`)

N2 drawn with actual air; distinguish N2 conversion from NO/NO2 and from total nitrogen excluding N2. Conditional actual handling-combustion inlet for this stage. Native Elementary flow N2, CAS7727-37-9, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual N2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Argon from ambient air (`prepare_air_ar`)

Record natural argon mass from actual measured air composition and state; not purchased pure argon or isotope-specific Ar40. Conditional actual handling-combustion inlet for this stage. Native Elementary flow Ar, CAS7440-37-1, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual Ar and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Atmospheric carbon dioxide in process air (`prepare_air_co2`)

Measure incoming atmospheric CO2 as its own physical species subaccount; neither fossil fuel nor sawdust-derived CO2. Preserve its origin and matched pass-through outlet without an automatic uptake credit. Conditional actual handling-combustion inlet for this stage.

- Selected flow: Atmospheric carbon dioxide in process air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Water vapour in ambient process air (`prepare_air_humidity`)

Measure actual humidity pressure temperature and gross air throughput; keep atmospheric moisture separate from feed free water structural water and reaction water. Conditional actual handling-combustion inlet for this stage.

- Selected flow: Water vapour in ambient process air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### Wet moler sawdust extrusion body (`wet_feed`)

Internal complete mixed wet feed with actual limestone where present. Transfer measured mass free water solids and every inherited exchange vector to forming; it is not a new market product or an extra external purchase.

- Selected flow: Wet moler sawdust extrusion body
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

###### Discarded raw moler spill (`raw_spill`)

Measure actual discard separately from recovered internal return; keep wet mass moisture assay destination and inherited burden.

- Selected flow: Discarded raw moler spill
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Discarded untreated wood sawdust (`sawdust_discard`)

Record only separately discarded sawdust; mixed body scrap has its own physical identity.

- Selected flow: Discarded untreated wood sawdust
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Discarded limestone (`limestone_discard`)

Conditional independently separated limestone loss, not carbonate CO2 or mixed body scrap.

- Selected flow: Discarded limestone
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_prepare`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Elementary flows

###### Fossil carbon dioxide to air (`prepare_co2_fossil`)

Actual oxidized fossil fuel carbon only; independently distinguish retained carbon CO methane and unburned material. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow CO2, CAS124-38-9, Mass/kg, Emissions to air unspecified; fossil origin; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual CO2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Atmospheric carbon dioxide returned to air (`prepare_co2_passthrough`)

Track actual incoming atmospheric CO2 and unchanged pass-through; it cannot be netted against newly generated combustion/decarbonation CO2. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals.

- Selected flow: Atmospheric carbon dioxide returned to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Fossil carbon monoxide to air (`prepare_co_fossil`)

Record actual molecular CO from fossil fuel only; no conversion from undifferentiated total carbon or VOC. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow CO, CAS630-08-0, Mass/kg, Emissions to air unspecified; fossil origin; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual CO and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### methane (fossil) (`prepare_methane_fossil`)

Only separately measured molecular fossil CH4; VOC or total carbon cannot identify methane. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native CAS74-82-8 molecular fossil CH4 to contemporary air unspecified, Mass/kg only. Native aliases mix graphite/carbon black, methylene/formaldehyde compounds, biogas, isotopes and whole natural gas; these do not change explicit CH4/CAS/origin and are not authorized substitutes. Actual fossil-origin CH4 measurement only, never total VOC/TOC, biogenic methane, indoor or long-term release.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### nitrogen monoxide (`prepare_no_air`)

Require independently speciated NO and correct CAS/form; a NOx-as-NO2 instrument total is not NO mass. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native CAS10102-43-9 NO gas to air unspecified, Mass/kg. HNO/nitrosyl-hydride synonym noise is not adopted chemistry; not NO2/nitrite/N2O or NOx-as-NO2. Preserve actual independent molecular speciation and original-stage ownership; no emission factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Nitrogen dioxide to air (`prepare_no2_air`)

Only actual molecular NO2; neither NOx total liquid nitrogen nor nitrous oxide is a valid identity substitution. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Sulfur dioxide to air (`prepare_so2_air`)

Sample molecular SO2 and balance sulfur independently; total SOx is not assumed to be exclusively SO2. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow SO2, CAS7446-09-5, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual SO2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Water vapour to air (`prepare_water_vapour`)

Resolve outgoing atmospheric humidity free feed moisture clay dehydroxylation combustion reaction water and steam carryover separately before summing actual H2O gas; no latent-heat loss is extra purchased fuel. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow H2O gas, CAS7732-18-5, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual H2O gas and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### oxygen (`prepare_o2_air`)

Measure unreacted molecular O2 after combustion; not net oxygen consumption or upper-atmosphere oxygen. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native CAS7782-44-7 molecular O2, contemporary air unspecified, Mass/kg. Liquid/ion/isotope aliases do not authorize those forms; not long-term, upper-atmosphere or purchased gas. Measure gross outlet independently from resource inlet and net oxidation; no fixed air fraction or allocation-scaled physical mass.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Dinitrogen to air (`prepare_n2_air`)

Measure molecular N2 leaving the thermal boundary; account independently for actual nitrogen conversion. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow N2, CAS7727-37-9, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual N2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Argon to air (`prepare_ar_air`)

Measure actual argon leaving the boundary; gross pass-through cancels in net reaction accounting without a purchased gas input. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow Ar, CAS7440-37-1, Mass/kg, Emissions to air unspecified; not long-term; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual Ar and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_prepare; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_prepare`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

### Process: Conditioning extrusion and cutting (`form`)

#### Inputs

##### Product flows

###### Wet moler sawdust extrusion body (`forming_feed`)

Receive the same internal wet_feed transfer and inherited vectors once; condition and de-air the body then extrude through the actual die and cut to the intended geometry.

- Selected flow: Wet moler sawdust extrusion body
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_form; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_form`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Purchased alternating-current electricity (`form_electricity`)

Meter extrusion vacuum cutting and green-body transfer including rejects start-stop idle and cleanup. Apply actual supplier/voltage identity; no generic grid factor is prescribed.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw amount using cp_utility_form; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_form`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Purchased process steam (`conditioning_steam`)

Conditional actual conditioning steam only; no steam boiler is presumed. Record delivered heat on declared enthalpy basis and carrier mass pressure temperature quality and water-supply convention. A whole heat provider includes its upstream fuel only once.

- Selected flow: Purchased process steam
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw amount using cp_utility_form; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_form`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Returned process-steam condensate (`steam_condensate`)

Conditional external Product return associated with actual purchased steam; measure return mass temperature enthalpy and destination. Nonreturned carrier goes to independently evidenced water vapour wastewater or retained moisture; never assume all steam condenses or duplicate water purchase.

- Selected flow: Returned process-steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_utility_form; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_form`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Unfired shaped moler brick body (`green_body`)

Transfer the actual cut green bodies to drying with wet mass dry-solids moisture geometry and all inherited burdens; extrusion offcuts recirculated internally cancel and retain their processing burden.

- Selected flow: Unfired shaped moler brick body
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_form; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_form`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

###### Discarded unfired moler sawdust body (`green_discard`)

Weigh unrecoverable green rejects and their actual moisture; no new production or avoided-material credit is created by internal recycling.

- Selected flow: Discarded unfired moler sawdust body
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_form; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_form`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Elementary flows

### Process: Drying pore burnout firing and cooling (`thermal`)

#### Inputs

##### Product flows

###### Unfired shaped moler brick body (`thermal_green`)

Receive matched green_body transfer once; retain openings and closings at dryer and kiln stages with inherited per-exchange vectors. Dry free water and burn out sawdust before/through actual firing; kiln firing is mandatory for this terminal.

- Selected flow: Unfired shaped moler brick body
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Natural gas (`kiln_gas`)

Include only actual gas-fired drying/firing; determine gross calorific value from actual fuel supply evidence and state-corrected gas quantity. Keep carrier mass and C/H composition separately for balances. Do not confuse GCV with delivered heat NCV or buy both the whole heat provider and its fuel. Native Product flow specifies production mix at plant GLO and burning in an industrial furnace; reference property is Gross calorific value/MJ, not Mass, NCV or delivered useful heat. Use only that actual gas-fuel route; verify supplier composition actual GCV and carrier mass independently and do not duplicate a purchased complete heat provider.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Collect raw amount using cp_utility_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Purchased alternating-current electricity (`thermal_electricity`)

Meter fans controls and actual electric heating separately from gas. Electric firing is a conditional carrier choice and must not be added at a fabricated fixed share; use actual supplier and voltage.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw amount using cp_utility_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Purchased process heat (`purchased_heat`)

Conditional external heat only: document carrier supply/return states metered enthalpy and supplier fuel/water convention. Internally recovered kiln heat is an internal transfer that cancels rather than an avoided heat credit.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw amount using cp_utility_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

###### Molecular oxygen from ambient air (`air_o2`)

O2 drawn with actual process air; gross amount and unreacted outlet are separate from net oxidation. Native Elementary flow O2, CAS7782-44-7, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual O2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Molecular dinitrogen from ambient air (`air_n2`)

N2 drawn with actual air; distinguish N2 conversion from NO/NO2 and from total nitrogen excluding N2. Native Elementary flow N2, CAS7727-37-9, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual N2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Argon from ambient air (`air_ar`)

Record natural argon mass from actual measured air composition and state; not purchased pure argon or isotope-specific Ar40. Native Elementary flow Ar, CAS7440-37-1, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual Ar and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Atmospheric carbon dioxide in process air (`air_co2`)

Measure incoming atmospheric CO2 as its own physical species subaccount; neither fossil fuel nor sawdust-derived CO2. Preserve its origin and matched pass-through outlet without an automatic uptake credit.

- Selected flow: Atmospheric carbon dioxide in process air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Water vapour in ambient process air (`air_humidity`)

Measure actual humidity pressure temperature and gross air throughput; keep atmospheric moisture separate from feed free water structural water and reaction water.

- Selected flow: Water vapour in ambient process air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### Returned heat-exchanger water (`heat_return_water`)

Conditional actual external liquid return for purchased carrier heat; record independent mass supply/return temperature enthalpy and water quality. This is not an elementary emission or additional steam condensate by assumption.

- Selected flow: Returned heat-exchanger water
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_utility_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Fired unmachined moler insulating brick body (`fired_body`)

Transfer fired cooled bodies before finish and final acceptance; distinguish pore burnout reaction mass loss geometric shrinkage and cooling uptake. No fixed thermal schedule or silica-brick temperature is transferred.

- Selected flow: Fired unmachined moler insulating brick body
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

###### Rejected fired moler insulating brick (`kiln_reject`)

Record all fired rejects broken bodies and destructive firing tests with actual composition and moisture; surviving saleable brick is not a waste credit.

- Selected flow: Rejected fired moler insulating brick
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_thermal`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Elementary flows

###### Fossil carbon dioxide to air (`co2_fossil`)

Actual oxidized fossil fuel carbon only; independently distinguish retained carbon CO methane and unburned material. Native Elementary flow CO2, CAS124-38-9, Mass/kg, Emissions to air unspecified; fossil origin; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual CO2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Biogenic carbon dioxide to air (`co2_biogenic`)

Actual sawdust carbon oxidation with measured moisture dry carbon and retention. Neither automatic carbon neutrality nor an extra fuel input is assumed. Native Elementary flow CO2, CAS124-38-9, Mass/kg, Emissions to air unspecified; biogenic origin; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual CO2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Carbon dioxide from carbonate decomposition (`co2_mineral`)

Quantify limestone and native moler carbonate conversion with independent assays and retained carbonate; do not force a fossil-labelled UUID onto unverified mineral-carbon convention.

- Selected flow: Carbon dioxide from carbonate decomposition
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Atmospheric carbon dioxide returned to air (`co2_passthrough`)

Track actual incoming atmospheric CO2 and unchanged pass-through; it cannot be netted against newly generated combustion/decarbonation CO2.

- Selected flow: Atmospheric carbon dioxide returned to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Fossil carbon monoxide to air (`co_fossil`)

Record actual molecular CO from fossil fuel only; no conversion from undifferentiated total carbon or VOC. Native Elementary flow CO, CAS630-08-0, Mass/kg, Emissions to air unspecified; fossil origin; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual CO and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### carbon monoxide (biogenic) (`co_biogenic`)

Record separately measured wood-derived CO; fossil CO identity cannot replace its carbon origin. Native CAS630-08-0 molecular biogenic CO, contemporary air unspecified, Mass/kg. Actual wood-derived CO requires independent origin/species evidence; cold-liquid/exhaust/flue-gas aliases mean neither cryogenic liquid nor the whole exhaust. Native general-comment version text is not performance/route evidence. Not fossil CO, total carbon/VOC or delayed/long-term release.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### methane (fossil) (`methane_fossil`)

Only separately measured molecular fossil CH4; VOC or total carbon cannot identify methane. Native CAS74-82-8 molecular fossil CH4 to contemporary air unspecified, Mass/kg only. Native aliases mix graphite/carbon black, methylene/formaldehyde compounds, biogas, isotopes and whole natural gas; these do not change explicit CH4/CAS/origin and are not authorized substitutes. Actual fossil-origin CH4 measurement only, never total VOC/TOC, biogenic methane, indoor or long-term release.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### methane (biogenic) (`methane_biogenic`)

Only separately measured wood-derived molecular CH4 with origin evidence; no assumed carbon neutrality. Native CAS74-82-8 molecular biogenic CH4 to contemporary air unspecified, Mass/kg. Keep measured wood-carbon origin distinct from fossil methane and atmospheric throughput, without carbon-neutrality assumption. Contaminated carbon/graphite/methylene/biogas/isotope/natural-gas aliases do not authorize those substances, whole mixture or equivalent indicator; no indoor/long-term substitution.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### nitrogen monoxide (`no_air`)

Require independently speciated NO and correct CAS/form; a NOx-as-NO2 instrument total is not NO mass. Native CAS10102-43-9 NO gas to air unspecified, Mass/kg. HNO/nitrosyl-hydride synonym noise is not adopted chemistry; not NO2/nitrite/N2O or NOx-as-NO2. Preserve actual independent molecular speciation and original-stage ownership; no emission factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Nitrogen dioxide to air (`no2_air`)

Only actual molecular NO2; neither NOx total liquid nitrogen nor nitrous oxide is a valid identity substitution.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Sulfur dioxide to air (`so2_air`)

Sample molecular SO2 and balance sulfur independently; total SOx is not assumed to be exclusively SO2. Native Elementary flow SO2, CAS7446-09-5, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual SO2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Hydrogen fluoride to air (`hf_air`)

Include only actual HF evidenced by sampling; total fluorine and elemental F2 have different identities. Native Elementary flow HF, CAS7664-39-3, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual HF and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### hydrogen chloride (`hcl_air`)

Only actual molecular HCl with measured emission compartment; neither total chlorine nor a purchased acid formulation is this air emission. Native CAS7647-01-0 molecular HCl to air unspecified, Mass/kg. Acid/aqueous cleaner/reagent/isotope aliases do not authorize whole formulation mass, salt or total chlorine. Actual HCl phase and accompanying water are independently measured; no long-term/indoor compartment substitution.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Water vapour to air (`water_vapour`)

Resolve outgoing atmospheric humidity free feed moisture clay dehydroxylation combustion reaction water and steam carryover separately before summing actual H2O gas; no latent-heat loss is extra purchased fuel. Native Elementary flow H2O gas, CAS7732-18-5, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual H2O gas and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### oxygen (`o2_air`)

Measure unreacted molecular O2 after combustion; not net oxygen consumption or upper-atmosphere oxygen. Native CAS7782-44-7 molecular O2, contemporary air unspecified, Mass/kg. Liquid/ion/isotope aliases do not authorize those forms; not long-term, upper-atmosphere or purchased gas. Measure gross outlet independently from resource inlet and net oxidation; no fixed air fraction or allocation-scaled physical mass.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Dinitrogen to air (`n2_air`)

Measure molecular N2 leaving the thermal boundary; account independently for actual nitrogen conversion. Native Elementary flow N2, CAS7727-37-9, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual N2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Argon to air (`ar_air`)

Measure actual argon leaving the boundary; gross pass-through cancels in net reaction accounting without a purchased gas input. Native Elementary flow Ar, CAS7440-37-1, Mass/kg, Emissions to air unspecified; not long-term; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual Ar and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Crystalline quartz particulate to air (`quartz_air`)

Only separately measured crystalline quartz species and particle class; total dust/PM or raw opaline diatom silica is not automatically crystalline SiO2. Add separately identified amorphous or other species when actually emitted.

- Selected flow: Crystalline quartz particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_thermal; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_thermal`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

### Process: Machining inspection and first release (`finish`)

#### Inputs

##### Product flows

###### Fired unmachined moler insulating brick body (`finish_body`)

Receive the same fired_body mass and inherited burdens once; machine all required faces remove dust test dimensions and actual thermal/mechanical acceptance before first release.

- Selected flow: Fired unmachined moler insulating brick body
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Purchased alternating-current electricity (`finish_electricity`)

Meter sawing sanding extraction inspection and failed test work with actual supply geography and voltage. All rework before final release remains in the manufacturing cohort.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw amount using cp_utility_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Machining and cleaning water (`finish_water`)

Conditional real wet machining or cleanup water; a dry-sanded route does not silently create a wet process. Record additions actual density state and discharge.

- Selected flow: Machining and cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_utility_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Silicon carbide abrasive paper (`abrasive_paper`)

Conditional whole purchased bonded abrasive paper used in actual sanding; record backing binder grit and moisture as subaccounts rather than separate purchases. Substitute actual tool chemistry with a new atomic card when different.

- Selected flow: Silicon carbide abrasive paper
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_material_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fired moler insulating brick (`finished_brick`)

One kg dry bare complete moler insulating brick at its first recorded final quality release after actual firing cooling machining and acceptance. It includes released closing finished-goods stock once; packaging is excluded from Q and no subsequent dispatch or reinspection creates new Q. Native Product flow is production mix at plant; no geography CAS grade or single silica phase is fixed. Its complete definition includes high-temperature fired silica-based bricks with thermal-shock/structural stability. Adopt only the actual fired machined opaline-diatom/clay backup-insulation brick supported by the cited manufacturer terminal, not any unfired powder ordinary clay building brick dense quartz silica brick or generic purchased article. Native classification says other than siliceous earths (37320), inconsistent with the broad silica-inclusive material definition; disclose this classification discrepancy without treating it as acceptance or using it to waive a hard material/phase/route/type conflict. Actual grade performance and provider compatibility require separate evidence.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `skamol-moler-epd-2023`; `skamol-ceramic-brochure`

##### Waste flows

###### Discarded fired moler machining offcut (`finish_scrap`)

Weigh actual machined offcuts rejected bodies and destructive specimens separately in raw records; include their inherited burden once and their true waste destination.

- Selected flow: Discarded fired moler machining offcut
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Spent silicon carbide abrasive paper (`spent_abrasive`)

Conditional whole spent abrasive paper with retained brick dust; do not also discard its embedded backing/grit as a second copy.

- Selected flow: Spent silicon carbide abrasive paper
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Moler machining sludge (`grinding_sludge`)

Conditional real slurry separated from wet machining; measure dry solids free water and actual chemistry.

- Selected flow: Moler machining sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Moler process wastewater (`process_wastewater`)

Conditional whole effluent crossing to treatment; dissolved-species assays are subaccounts. Only actual releases after on-site treatment use separate elementary cards; COD is not a molecular mass.

- Selected flow: Moler process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_residue_finish; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_finish`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Elementary flows

### Process: Manufacturing maintenance and environmental control (`support`)

#### Inputs

##### Product flows

###### Ceramic firing kiln (`kiln_asset`)

Track actual whole installed kiln stock and commissioning separately from its actual period service burden. No fixed life or one kiln per kg is prescribed. Embedded lining is not a second full capital purchase; real replacement lining has its own card.

- Selected flow: Ceramic firing kiln
- Flow property / unit: Number of items / item
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Ceramic brick extrusion machine (`extruder_asset`)

Keep opening/closing new and used extruder stocks deployment repair retirement and actual use records; period service attribution requires measured usage and inherited vectors.

- Selected flow: Ceramic brick extrusion machine
- Flow property / unit: Number of items / item
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Steel extrusion die (`extrusion_die`)

Only actual replacement steel die additions and service wear with actual alloy and mass; no assumed per-brick tool consumption.

- Selected flow: Steel extrusion die
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Fireclay kiln refractory lining (`kiln_lining`)

Conditional actual fireclay lining replacement with alloy-free mineral composition and moisture records; if another refractory is used add its own physical identity.

- Selected flow: Fireclay kiln refractory lining
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Lubricating oil formulation (`lubricant`)

Record whole actual supplied lubricant formulation once; installed fluid opening/closing stocks leaks drained oil and retained moisture are separate physical accounts.

- Selected flow: Lubricating oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Polyester dust filter bag (`filter_bag`)

Conditional actual whole polyester fabric filter bag; document backing finish captured dust and changes. Different filter-media chemistry requires a separate atomic card.

- Selected flow: Polyester dust filter bag
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Calcium hydroxide sorbent formulation (`lime_sorbent`)

Conditional real acid-gas treatment reagent supplied whole; distinguish powder/slurry carrier water and active content subaccounts. Do not copy a flue-gas scrubber into a site without it.

- Selected flow: Calcium hydroxide sorbent formulation
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Purchased alternating-current electricity (`support_electricity`)

Meter real dust collection maintenance and pollution-control power; allocate only its actual common burden with a demonstrated causal driver.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw amount using cp_utility_support; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_support`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Flue-gas treatment water (`control_water`)

Conditional actual treatment water; quantify reuse versus make-up and all real outputs independently, not as a hidden zero.

- Selected flow: Flue-gas treatment water
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_utility_support; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_support`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Retired ceramic firing kiln (`retired_kiln`)

Actual retired whole asset as supplied to the receiver; do not also discard all embedded components separately.

- Selected flow: Retired ceramic firing kiln
- Flow property / unit: Number of items / item
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Retired ceramic extrusion machine (`retired_extruder`)

Actual whole retired machine; record water/fluid condition and any components removed separately before the retirement boundary.

- Selected flow: Retired ceramic extrusion machine
- Flow property / unit: Number of items / item
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Spent steel extrusion die (`spent_die`)

Only actual removed steel die metal; no assumed recycling substitution credit.

- Selected flow: Spent steel extrusion die
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Spent fireclay kiln lining (`spent_refractory`)

Actual removed lining with retained moler dust and moisture; distinguish chemically different sections in additional cards.

- Selected flow: Spent fireclay kiln lining
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Spent lubricating oil (`spent_oil`)

Actual drained lubricant including contamination and water; spills to environment require distinct identified species/media.

- Selected flow: Spent lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Captured unfired moler body dust (`captured_raw_dust`)

Raw-stage collected body dust including actual constituents and moisture; actual external discard only. Internal recycle is retained and not simultaneously an emitted PM mass.

- Selected flow: Captured unfired moler body dust
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Captured fired moler ceramic dust (`captured_fired_dust`)

Fired-stage collected dust with actual changed phase and composition; actual external discard only, distinct from fugitive emissions and retained internal recycle.

- Selected flow: Captured fired moler ceramic dust
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Spent polyester dust filter bag (`spent_filter`)

Whole spent fabric bag with remaining captured dust; dust already separately removed is not embedded again.

- Selected flow: Spent polyester dust filter bag
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Spent calcium hydroxide sorbent (`spent_sorbent`)

Actual reacted/unreacted sorbent whole residue; independently assay calcium salts water and captured species. A reaction residual cannot determine two missing species.

- Selected flow: Spent calcium hydroxide sorbent
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_asset; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

##### Elementary flows

### Process: Original-cohort storage packing and dispatch service (`service`)

#### Inputs

##### Product flows

###### Fired moler insulating brick (`released_to_service`)

Receive the original released cohort Qc and its manufacturing vector without charging new manufacture; actual storage handling packing dispatch return and post-release rework increments are recorded over observed horizon H. Service is not another first-release output. Native Product flow is production mix at plant; no geography CAS grade or single silica phase is fixed. Its complete definition includes high-temperature fired silica-based bricks with thermal-shock/structural stability. Adopt only the actual fired machined opaline-diatom/clay backup-insulation brick supported by the cited manufacturer terminal, not any unfired powder ordinary clay building brick dense quartz silica brick or generic purchased article. Native classification says other than siliceous earths (37320), inconsistent with the broad silica-inclusive material definition; disclose this classification discrepancy without treating it as acceptance or using it to waive a hard material/phase/route/type conflict. Actual grade performance and provider compatibility require separate evidence. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `skamol-moler-epd-2023`; `skamol-ceramic-brochure`

###### Polyethylene wrapping film (`pe_wrap`)

Record one actual complete polyethylene film article; adhesive or multilayer materials require their actual whole supplied identity. All disjoint packaging stocks and gross movements are required. Native Product polyethylene film CAS9002-88-4 production mix at plant Mass/kg; branch/grade supplier and location are not fixed. The luggage classification is an isolated mismatch with coherent PE CAS/name/film identity. Comment compares PET as a competing material; it does not make PET part of this PE identity. Use actual single PE film only and verify formulation/recycled content/provider separately. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Cardboard protective sheet (`cardboard_pack`)

Record actual cardboard sheet protection separately from film and pallet; corrugated whole cartons if used are a different supplied article and need another card. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Cardboard protective sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Wooden EURO pallet (`euro_pallet`)

Only the actual complete EURO pallet; record new/reusable and attached inventory external returns repairs moisture and disposal. Internal reuse never counts as another purchase or a part of brick Q. Native Product is complete Wooden pallet (EURO), Mass/kg; no conversion to a guessed per-pallet mass or fixed reuse life. The record explicitly states account-local reconstruction of ELCD3.2 with retained canonical properties and separately documented unsupported source properties; that provenance is not independent scientific approval. Verify actual EURO configuration moisture and upstream provider. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Polypropylene strapping band (`pp_strap`)

Conditional real PP band only; yarn chips cable ties and PE film are not interchangeable supplied forms. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Purchased alternating-current electricity (`service_electricity`)

Meter storage packing handling return inspection and actual post-release rework in original-cohort horizon H; maintain the original Qc. Electricity supplier and voltage must match the site. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw amount using cp_utility_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Diesel fuel (`service_diesel`)

Actual warehouse/forklift fuel increments for original-cohort service only; gross physical brick movement is never reduced by an economic burden share. Native Product diesel is Mass/kg with fuel grade formulation density heating value refinery geography and provider unspecified. Require actual delivered diesel specification; neither a water/air diesel emission node nor a fixed heating value or density. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_utility_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Fired moler insulating brick (`returned_brick`)

Conditional real return R identified against original dispatch and changed moisture or damage; preserve original manufacturing history and collect only actual incremental handling/water/loss/rework. Do not assume R equals original delivered mass. Native Product flow is production mix at plant; no geography CAS grade or single silica phase is fixed. Its complete definition includes high-temperature fired silica-based bricks with thermal-shock/structural stability. Adopt only the actual fired machined opaline-diatom/clay backup-insulation brick supported by the cited manufacturer terminal, not any unfired powder ordinary clay building brick dense quartz silica brick or generic purchased article. Native classification says other than siliceous earths (37320), inconsistent with the broad silica-inclusive material definition; disclose this classification discrepancy without treating it as acceptance or using it to waive a hard material/phase/route/type conflict. Actual grade performance and provider compatibility require separate evidence. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `skamol-moler-epd-2023`; `skamol-ceramic-brochure`

###### Post-release cleaning water (`service_cleaning_water`)

Conditional real return/handling cleanup water measured separately; preserve additions retained water evaporated H2O and actual effluent independently. Do not assume a wet service for dry-packed bricks. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Post-release cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_utility_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Polyethylene wrapping film (`pe_attached_inbound`)

Record one actual complete polyethylene film article; adhesive or multilayer materials require their actual whole supplied identity. All disjoint packaging stocks and gross movements are required. Native Product polyethylene film CAS9002-88-4 production mix at plant Mass/kg; branch/grade supplier and location are not fixed. The luggage classification is an isolated mismatch with coherent PE CAS/name/film identity. Comment compares PET as a competing material; it does not make PET part of this PE identity. Use actual single PE film only and verify formulation/recycled content/provider separately. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual attached inbound I accompanying raw/other supplies, even when already included in supplier price. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Polyethylene wrapping film (`pe_external_return_in`)

Record one actual complete polyethylene film article; adhesive or multilayer materials require their actual whole supplied identity. All disjoint packaging stocks and gross movements are required. Native Product polyethylene film CAS9002-88-4 production mix at plant Mass/kg; branch/grade supplier and location are not fixed. The luggage classification is an isolated mismatch with coherent PE CAS/name/film identity. Comment compares PET as a competing material; it does not make PET part of this PE identity. Use actual single PE film only and verify formulation/recycled content/provider separately. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual external returned receipt ER, distinct from new purchase P and attached I. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Cardboard protective sheet (`cardboard_attached_inbound`)

Record actual cardboard sheet protection separately from film and pallet; corrugated whole cartons if used are a different supplied article and need another card. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual attached inbound I accompanying raw/other supplies, even when already included in supplier price. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Cardboard protective sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Cardboard protective sheet (`cardboard_external_return_in`)

Record actual cardboard sheet protection separately from film and pallet; corrugated whole cartons if used are a different supplied article and need another card. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual external returned receipt ER, distinct from new purchase P and attached I. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Cardboard protective sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Wooden EURO pallet (`pallet_attached_inbound`)

Only the actual complete EURO pallet; record new/reusable and attached inventory external returns repairs moisture and disposal. Internal reuse never counts as another purchase or a part of brick Q. Native Product is complete Wooden pallet (EURO), Mass/kg; no conversion to a guessed per-pallet mass or fixed reuse life. The record explicitly states account-local reconstruction of ELCD3.2 with retained canonical properties and separately documented unsupported source properties; that provenance is not independent scientific approval. Verify actual EURO configuration moisture and upstream provider. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual attached inbound I accompanying raw/other supplies, even when already included in supplier price. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Wooden EURO pallet (`pallet_external_return_in`)

Only the actual complete EURO pallet; record new/reusable and attached inventory external returns repairs moisture and disposal. Internal reuse never counts as another purchase or a part of brick Q. Native Product is complete Wooden pallet (EURO), Mass/kg; no conversion to a guessed per-pallet mass or fixed reuse life. The record explicitly states account-local reconstruction of ELCD3.2 with retained canonical properties and separately documented unsupported source properties; that provenance is not independent scientific approval. Verify actual EURO configuration moisture and upstream provider. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual external returned receipt ER, distinct from new purchase P and attached I. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Polypropylene strapping band (`pp_attached_inbound`)

Conditional real PP band only; yarn chips cable ties and PE film are not interchangeable supplied forms. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual attached inbound I accompanying raw/other supplies, even when already included in supplier price. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Polypropylene strapping band (`pp_external_return_in`)

Conditional real PP band only; yarn chips cable ties and PE film are not interchangeable supplied forms. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual external returned receipt ER, distinct from new purchase P and attached I. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Wooden pallet repair board (`pallet_repair_wood`)

Only actual independently received specific wood repair board, with species/treatment, dry wood and free/absorbed water, provider, ownership and original Qc/H. Not a complete EURO pallet or its UUID; included whole-package contents are child ledgers. Added wood/water retains its real receipt even if kept in closing stock; actual separate fasteners/glue need their own identity. No repair or life assumed.

- Selected flow: Wooden pallet repair board
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

##### Waste flows

##### Elementary flows

###### Molecular oxygen from ambient air (`service_air_o2`)

O2 drawn with actual process air; gross amount and unreacted outlet are separate from net oxidation. Conditional actual handling-combustion inlet for this stage. Native Elementary flow O2, CAS7782-44-7, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual O2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Molecular dinitrogen from ambient air (`service_air_n2`)

N2 drawn with actual air; distinguish N2 conversion from NO/NO2 and from total nitrogen excluding N2. Conditional actual handling-combustion inlet for this stage. Native Elementary flow N2, CAS7727-37-9, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual N2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Argon from ambient air (`service_air_ar`)

Record natural argon mass from actual measured air composition and state; not purchased pure argon or isotope-specific Ar40. Conditional actual handling-combustion inlet for this stage. Native Elementary flow Ar, CAS7440-37-1, Mass/kg, Resources from air; renewable element resource; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual Ar and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Atmospheric carbon dioxide in process air (`service_air_co2`)

Measure incoming atmospheric CO2 as its own physical species subaccount; neither fossil fuel nor sawdust-derived CO2. Preserve its origin and matched pass-through outlet without an automatic uptake credit. Conditional actual handling-combustion inlet for this stage. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Atmospheric carbon dioxide in process air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Water vapour in ambient process air (`service_air_humidity`)

Measure actual humidity pressure temperature and gross air throughput; keep atmospheric moisture separate from feed free water structural water and reaction water. Conditional actual handling-combustion inlet for this stage. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. This H2O ledger also covers actual storage/package-repair moisture uptake/release even without fuel combustion. Keep gross ambient inlet/outlet and measured material uptake/release as linked subaccounts, excluding water already carried in other measured flows without cancelling actual water added to closing stock. No wet operation or quantity is assumed.

- Selected flow: Water vapour in ambient process air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### Fired moler insulating brick (`gross_dispatch`)

Record physical gross dispatch G by original cohort and actual dispatch state; do not present G as new production or add closing FG to Q. Normalized service output reports the original-cohort service-account quantity; physical raw G remains unallocated. Native Product flow is production mix at plant; no geography CAS grade or single silica phase is fixed. Its complete definition includes high-temperature fired silica-based bricks with thermal-shock/structural stability. Adopt only the actual fired machined opaline-diatom/clay backup-insulation brick supported by the cited manufacturer terminal, not any unfired powder ordinary clay building brick dense quartz silica brick or generic purchased article. Native classification says other than siliceous earths (37320), inconsistent with the broad silica-inclusive material definition; disclose this classification discrepancy without treating it as acceptance or using it to waive a hard material/phase/route/type conflict. Actual grade performance and provider compatibility require separate evidence. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `skamol-moler-epd-2023`; `skamol-ceramic-brochure`

###### Polyethylene wrapping film (`pe_gross_shipped`)

Record one actual complete polyethylene film article; adhesive or multilayer materials require their actual whole supplied identity. All disjoint packaging stocks and gross movements are required. Native Product polyethylene film CAS9002-88-4 production mix at plant Mass/kg; branch/grade supplier and location are not fixed. The luggage classification is an isolated mismatch with coherent PE CAS/name/film identity. Comment compares PET as a competing material; it does not make PET part of this PE identity. Use actual single PE film only and verify formulation/recycled content/provider separately. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual gross outward S accompanying goods or separately dispatched, not net delivery. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Polyethylene wrapping film (`pe_external_return_out`)

Record one actual complete polyethylene film article; adhesive or multilayer materials require their actual whole supplied identity. All disjoint packaging stocks and gross movements are required. Native Product polyethylene film CAS9002-88-4 production mix at plant Mass/kg; branch/grade supplier and location are not fixed. The luggage classification is an isolated mismatch with coherent PE CAS/name/film identity. Comment compares PET as a competing material; it does not make PET part of this PE identity. Use actual single PE film only and verify formulation/recycled content/provider separately. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual outward return EO, distinct from S and waste W. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Cardboard protective sheet (`cardboard_gross_shipped`)

Record actual cardboard sheet protection separately from film and pallet; corrugated whole cartons if used are a different supplied article and need another card. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual gross outward S accompanying goods or separately dispatched, not net delivery. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Cardboard protective sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Cardboard protective sheet (`cardboard_external_return_out`)

Record actual cardboard sheet protection separately from film and pallet; corrugated whole cartons if used are a different supplied article and need another card. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual outward return EO, distinct from S and waste W. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Cardboard protective sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Wooden EURO pallet (`pallet_gross_shipped`)

Only the actual complete EURO pallet; record new/reusable and attached inventory external returns repairs moisture and disposal. Internal reuse never counts as another purchase or a part of brick Q. Native Product is complete Wooden pallet (EURO), Mass/kg; no conversion to a guessed per-pallet mass or fixed reuse life. The record explicitly states account-local reconstruction of ELCD3.2 with retained canonical properties and separately documented unsupported source properties; that provenance is not independent scientific approval. Verify actual EURO configuration moisture and upstream provider. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual gross outward S accompanying goods or separately dispatched, not net delivery. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Wooden EURO pallet (`pallet_external_return_out`)

Only the actual complete EURO pallet; record new/reusable and attached inventory external returns repairs moisture and disposal. Internal reuse never counts as another purchase or a part of brick Q. Native Product is complete Wooden pallet (EURO), Mass/kg; no conversion to a guessed per-pallet mass or fixed reuse life. The record explicitly states account-local reconstruction of ELCD3.2 with retained canonical properties and separately documented unsupported source properties; that provenance is not independent scientific approval. Verify actual EURO configuration moisture and upstream provider. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual outward return EO, distinct from S and waste W. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Polypropylene strapping band (`pp_gross_shipped`)

Conditional real PP band only; yarn chips cable ties and PE film are not interchangeable supplied forms. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual gross outward S accompanying goods or separately dispatched, not net delivery. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Polypropylene strapping band (`pp_external_return_out`)

Conditional real PP band only; yarn chips cable ties and PE film are not interchangeable supplied forms. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Actual outward return EO, distinct from S and waste W. Only this specific package configuration actual gross physical direction; retain ownership, original Qc/H and inherited history, not new brick output or a coproduct. Supplier-included glue/print/carrier water are whole-package children, never duplicate purchases or parent/child mass; directions are disjoint from other measured streams and closing retention never cancels real influx.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

##### Waste flows

###### Discarded released moler brick (`service_brick_waste`)

Actual post-release destruction with inherited original-cohort history and actual new wet/dry state; destruction does not subtract a previous valid first release from Q. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Discarded released moler brick
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Discarded polyethylene wrapping film (`pe_waste`)

Measure the actual separately discarded article including real moisture and contamination; the physical packaging balance includes this exit once and never reduces it by an economic allocation fraction. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Discarded polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Discarded polypropylene strapping band (`pp_waste`)

Measure the actual separately discarded article including real moisture and contamination; the physical packaging balance includes this exit once and never reduces it by an economic allocation fraction. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Discarded polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Discarded cardboard protective sheet (`cardboard_waste`)

Measure the actual separately discarded article including real moisture and contamination; the physical packaging balance includes this exit once and never reduces it by an economic allocation fraction. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Discarded cardboard protective sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Discarded wooden EURO pallet (`pallet_waste`)

Measure the actual separately discarded article including real moisture and contamination; the physical packaging balance includes this exit once and never reduces it by an economic allocation fraction. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Discarded wooden EURO pallet
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

###### Post-release moler cleaning wastewater (`service_wastewater`)

Conditional whole real cleaning wastewater crossing to treatment; independently sample retained ceramic solids water and dissolved species, without an automatic zero effluent or guessed COD molecule. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Post-release moler cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### Discarded wooden pallet repair board (`removed_pallet_wood`)

Actual old board removed during repair, independently measured by dry wood, water/contamination and destination. Not whole-pallet retirement; no duplication of W or another recorded outlet. Actual reuse/sale requires correct Product function and boundary, never automatic waste, burden subtraction or recycling credit.

- Selected flow: Discarded wooden pallet repair board
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_pack; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `skamol-moler-epd-2023`

##### Elementary flows

###### Fossil carbon dioxide to air (`service_co2_fossil`)

Actual oxidized fossil fuel carbon only; independently distinguish retained carbon CO methane and unburned material. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow CO2, CAS124-38-9, Mass/kg, Emissions to air unspecified; fossil origin; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual CO2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Atmospheric carbon dioxide returned to air (`service_co2_passthrough`)

Track actual incoming atmospheric CO2 and unchanged pass-through; it cannot be netted against newly generated combustion/decarbonation CO2. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Atmospheric carbon dioxide returned to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Fossil carbon monoxide to air (`service_co_fossil`)

Record actual molecular CO from fossil fuel only; no conversion from undifferentiated total carbon or VOC. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow CO, CAS630-08-0, Mass/kg, Emissions to air unspecified; fossil origin; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual CO and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### methane (fossil) (`service_methane_fossil`)

Only separately measured molecular fossil CH4; VOC or total carbon cannot identify methane. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Native CAS74-82-8 molecular fossil CH4 to contemporary air unspecified, Mass/kg only. Native aliases mix graphite/carbon black, methylene/formaldehyde compounds, biogas, isotopes and whole natural gas; these do not change explicit CH4/CAS/origin and are not authorized substitutes. Actual fossil-origin CH4 measurement only, never total VOC/TOC, biogenic methane, indoor or long-term release.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### nitrogen monoxide (`service_no_air`)

Require independently speciated NO and correct CAS/form; a NOx-as-NO2 instrument total is not NO mass. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Native CAS10102-43-9 NO gas to air unspecified, Mass/kg. HNO/nitrosyl-hydride synonym noise is not adopted chemistry; not NO2/nitrite/N2O or NOx-as-NO2. Preserve actual independent molecular speciation and original-stage ownership; no emission factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Nitrogen dioxide to air (`service_no2_air`)

Only actual molecular NO2; neither NOx total liquid nitrogen nor nitrous oxide is a valid identity substitution. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Sulfur dioxide to air (`service_so2_air`)

Sample molecular SO2 and balance sulfur independently; total SOx is not assumed to be exclusively SO2. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow SO2, CAS7446-09-5, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual SO2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Water vapour to air (`service_water_vapour`)

Resolve outgoing atmospheric humidity free feed moisture clay dehydroxylation combustion reaction water and steam carryover separately before summing actual H2O gas; no latent-heat loss is extra purchased fuel. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow H2O gas, CAS7732-18-5, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual H2O gas and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. This H2O ledger also covers actual storage/package-repair moisture uptake/release even without fuel combustion. Keep gross ambient inlet/outlet and measured material uptake/release as linked subaccounts, excluding water already carried in other measured flows without cancelling actual water added to closing stock. No wet operation or quantity is assumed.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### oxygen (`service_o2_air`)

Measure unreacted molecular O2 after combustion; not net oxygen consumption or upper-atmosphere oxygen. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals. Native CAS7782-44-7 molecular O2, contemporary air unspecified, Mass/kg. Liquid/ion/isotope aliases do not authorize those forms; not long-term, upper-atmosphere or purchased gas. Measure gross outlet independently from resource inlet and net oxidation; no fixed air fraction or allocation-scaled physical mass.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Dinitrogen to air (`service_n2_air`)

Measure molecular N2 leaving the thermal boundary; account independently for actual nitrogen conversion. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow N2, CAS7727-37-9, Mass/kg, Emissions to air unspecified; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual N2 and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### Argon to air (`service_ar_air`)

Measure actual argon leaving the boundary; gross pass-through cancels in net reaction accounting without a purchased gas input. Conditional actual fuel-combustion outlet for this stage; never duplicate kiln totals. Native Elementary flow Ar, CAS7440-37-1, Mass/kg, Emissions to air unspecified; not long-term; no geography/provider fixed. Broad multilingual synonyms can mention liquid isotope acid or other forms; they do not authorize a different phase structure or species. Apply only independently measured actual Ar and this precise origin/direction/medium; not purchased gas total air a total-element indicator or a guessed species. Normalize service burden once using the original-cohort branch of single_quotient; retain original physical totals.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect raw amount using cp_air_service; use the final value from the sole quotient in section 8 without repeated normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_service`
- Sources: `jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

## 7. Allocation and Co-product Handling

These rules apply to attributional modelling where allocation is required; they do not claim every ILCD decision context or default system expansion. Industrial manufacture evidence alone does not justify LCA allocation.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | multifunctional process | For attributional data requiring allocation first separate dedicated operations and use evidenced physical or virtual subdivision. For the remaining common process establish exchange-specific determining physical causality: show how changes of each cofunction determine each input/output; mass heat time area or volume are not interchangeable menu defaults. | `jrc-ilcd-allocation-2010` |
| a_residual | residual common process | Only where no defensible determining physical relationship remains use contemporaneous representative market values at the same actual common-process exit/entry gate and state including moisture grade quality packaging and quantities. Document prices periods uncertainty rejected causal alternatives and reconcile allocated burden sums. No fixed share automatic substitution credit or downstream finished price for an upstream wet residue. | `jrc-ilcd-allocation-2010` |
| a_stocks | stocks and returns | Apply attribution to burdens after independently measured raw unit conversions and stock vectors; keep physical mass and species intact. Internal green offcuts recovered heat and reusable pallets do not become automatic coproducts. Waste treatment and genuine cofunctions require actual destination and value/boundary evidence. | `jrc-ilcd-allocation-2010`; `skamol-moler-epd-2023` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | finish | finished_brick | mass and first-release register | cohort_id; unique_brick_or_lot_id; configuration; accepted net dry bare mass; moisture method; opening and closing released FG; first_release_time | Weigh net complete bare accepted brick/traceable lot on calibrated scales; exclude packaging and reject mass. Use a declared nonaltering moisture correction verified for that fired configuration. Count each first release once. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kg | each first release and stock close | complete declared production period | actual finishing and release gate | per reference flow | calibration release IDs moisture tests independent stock count |
| cp_material_prepare | prepare | whole materials and internal body transfers | unscaled receipts and stock records | exchange_id; lot_id; stage; whole_supply_form; raw_quantity; raw_unit; temperature; assay; free_water; structural_water; Bopen_j; Bclose_j; internal_return; failed_mode; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | Collect whole-form receipts and actual stage meters/scales in original units; measure composition water and internal transfers independently; preserve inherited exchange vectors through each WIP stage. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | original native extensive units | each receipt batch transfer and boundary close | all modes including zero-output periods | actual raw-to-release stages | per reference flow | weigh tickets assays stock ledgers calibration lot genealogy |
| cp_material_form | form | whole materials and internal body transfers | unscaled receipts and stock records | exchange_id; lot_id; stage; whole_supply_form; raw_quantity; raw_unit; temperature; assay; free_water; structural_water; Bopen_j; Bclose_j; internal_return; failed_mode; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | Collect whole-form receipts and actual stage meters/scales in original units; measure composition water and internal transfers independently; preserve inherited exchange vectors through each WIP stage. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | original native extensive units | each receipt batch transfer and boundary close | all modes including zero-output periods | actual raw-to-release stages | per reference flow | weigh tickets assays stock ledgers calibration lot genealogy |
| cp_material_thermal | thermal | whole materials and internal body transfers | unscaled receipts and stock records | exchange_id; lot_id; stage; whole_supply_form; raw_quantity; raw_unit; temperature; assay; free_water; structural_water; Bopen_j; Bclose_j; internal_return; failed_mode; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | Collect whole-form receipts and actual stage meters/scales in original units; measure composition water and internal transfers independently; preserve inherited exchange vectors through each WIP stage. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | original native extensive units | each receipt batch transfer and boundary close | all modes including zero-output periods | actual raw-to-release stages | per reference flow | weigh tickets assays stock ledgers calibration lot genealogy |
| cp_material_finish | finish | whole materials and internal body transfers | unscaled receipts and stock records | exchange_id; lot_id; stage; whole_supply_form; raw_quantity; raw_unit; temperature; assay; free_water; structural_water; Bopen_j; Bclose_j; internal_return; failed_mode; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | Collect whole-form receipts and actual stage meters/scales in original units; measure composition water and internal transfers independently; preserve inherited exchange vectors through each WIP stage. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | original native extensive units | each receipt batch transfer and boundary close | all modes including zero-output periods | actual raw-to-release stages | per reference flow | weigh tickets assays stock ledgers calibration lot genealogy |
| cp_utility_prepare | prepare | each actual electricity fuel water heat carrier | raw meter fuel and heat records | row_id; stage; cohort; raw_meter_start; raw_meter_end; unit; rate_or_total; timestamps; pressure; temperature; humidity; density_source; GCV_NCV; carrierMass; supply_enthalpy; return_enthalpy; supplier_water_convention | Read original meters and supplier heat/fuel certificates; integrate only real rates; totalised volumes retain total basis. Measure independent material density and calorific basis. Link supply/return carrier mass heat and water without duplicate provider. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kWh; MJ; kg; m3 as actually metered | meter interval and supply/return event | all operation and observed service H | actual utility supply and return gates | per reference flow | calibration matched certificates state logs boundary reconciliation |
| cp_utility_form | form | each actual electricity fuel water heat carrier | raw meter fuel and heat records | row_id; stage; cohort; raw_meter_start; raw_meter_end; unit; rate_or_total; timestamps; pressure; temperature; humidity; density_source; GCV_NCV; carrierMass; supply_enthalpy; return_enthalpy; supplier_water_convention | Read original meters and supplier heat/fuel certificates; integrate only real rates; totalised volumes retain total basis. Measure independent material density and calorific basis. Link supply/return carrier mass heat and water without duplicate provider. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kWh; MJ; kg; m3 as actually metered | meter interval and supply/return event | all operation and observed service H | actual utility supply and return gates | per reference flow | calibration matched certificates state logs boundary reconciliation |
| cp_utility_thermal | thermal | each actual electricity fuel water heat carrier | raw meter fuel and heat records | row_id; stage; cohort; raw_meter_start; raw_meter_end; unit; rate_or_total; timestamps; pressure; temperature; humidity; density_source; GCV_NCV; carrierMass; supply_enthalpy; return_enthalpy; supplier_water_convention | Read original meters and supplier heat/fuel certificates; integrate only real rates; totalised volumes retain total basis. Measure independent material density and calorific basis. Link supply/return carrier mass heat and water without duplicate provider. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kWh; MJ; kg; m3 as actually metered | meter interval and supply/return event | all operation and observed service H | actual utility supply and return gates | per reference flow | calibration matched certificates state logs boundary reconciliation |
| cp_utility_finish | finish | each actual electricity fuel water heat carrier | raw meter fuel and heat records | row_id; stage; cohort; raw_meter_start; raw_meter_end; unit; rate_or_total; timestamps; pressure; temperature; humidity; density_source; GCV_NCV; carrierMass; supply_enthalpy; return_enthalpy; supplier_water_convention | Read original meters and supplier heat/fuel certificates; integrate only real rates; totalised volumes retain total basis. Measure independent material density and calorific basis. Link supply/return carrier mass heat and water without duplicate provider. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kWh; MJ; kg; m3 as actually metered | meter interval and supply/return event | all operation and observed service H | actual utility supply and return gates | per reference flow | calibration matched certificates state logs boundary reconciliation |
| cp_utility_support | support | each actual electricity fuel water heat carrier | raw meter fuel and heat records | row_id; stage; cohort; raw_meter_start; raw_meter_end; unit; rate_or_total; timestamps; pressure; temperature; humidity; density_source; GCV_NCV; carrierMass; supply_enthalpy; return_enthalpy; supplier_water_convention | Read original meters and supplier heat/fuel certificates; integrate only real rates; totalised volumes retain total basis. Measure independent material density and calorific basis. Link supply/return carrier mass heat and water without duplicate provider. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kWh; MJ; kg; m3 as actually metered | meter interval and supply/return event | all operation and observed service H | actual utility supply and return gates | per reference flow | calibration matched certificates state logs boundary reconciliation |
| cp_utility_service | service | each actual electricity fuel water heat carrier | raw meter fuel and heat records | row_id; stage; cohort; raw_meter_start; raw_meter_end; unit; rate_or_total; timestamps; pressure; temperature; humidity; density_source; GCV_NCV; carrierMass; supply_enthalpy; return_enthalpy; supplier_water_convention | Read original meters and supplier heat/fuel certificates; integrate only real rates; totalised volumes retain total basis. Measure independent material density and calorific basis. Link supply/return carrier mass heat and water without duplicate provider. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kWh; MJ; kg; m3 as actually metered | meter interval and supply/return event | all operation and observed service H | actual utility supply and return gates | per reference flow | calibration matched certificates state logs boundary reconciliation |
| cp_air_thermal | thermal | each molecular input/output species | gas and particulate sampling | species_id; CAS; origin; medium; phase; particle_class; raw_concentration; raw_volume_or_rate; time_interval; pressure; temperature; dry_wet_basis; separate_inlet; separate_outlet; uncertainty | Measure actual inlet/outlet gas/species and particle identity; use independent measured state and species molar conversion if needed. Preserve fossil biogenic mineral and atmospheric carbon origins. Do not infer species from NOx VOC COD or total particulate/element indicators. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | native mass concentration volume or actual rate | representative operating modes and events | full thermal period including cleanup and failures | actual emission gate and real receiving media | per reference flow | sampling plans speciation laboratory calibration gas-state evidence |
| cp_air_prepare | prepare | each molecular input/output species | gas and particulate sampling | species_id; CAS; origin; medium; phase; particle_class; raw_concentration; raw_volume_or_rate; time_interval; pressure; temperature; dry_wet_basis; separate_inlet; separate_outlet; uncertainty | Measure actual inlet/outlet gas/species and particle identity; use independent measured state and species molar conversion if needed. Preserve fossil biogenic mineral and atmospheric carbon origins. Do not infer species from NOx VOC COD or total particulate/element indicators. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | native mass concentration volume or actual rate | representative operating modes and events | full thermal period including cleanup and failures | actual emission gate and real receiving media | per reference flow | sampling plans speciation laboratory calibration gas-state evidence |
| cp_air_service | service | each molecular input/output species | gas and particulate sampling | species_id; CAS; origin; medium; phase; particle_class; raw_concentration; raw_volume_or_rate; time_interval; pressure; temperature; dry_wet_basis; separate_inlet; separate_outlet; uncertainty | Measure actual inlet/outlet gas/species and particle identity; use independent measured state and species molar conversion if needed. Preserve fossil biogenic mineral and atmospheric carbon origins. Do not infer species from NOx VOC COD or total particulate/element indicators. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | native mass concentration volume or actual rate | representative operating modes and events | full thermal period including cleanup and failures | actual emission gate and real receiving media | per reference flow | sampling plans speciation laboratory calibration gas-state evidence |
| cp_residue_prepare | prepare | each waste and actual outlet | weighing treatment and destination records | row_id; route; mass_wet; moisture; dry_solids; assays; treatment; recovery; exported; retained; opening; closing; attached_substances | Weigh each real separated stream; sample composition water and phase independently; reconcile offcuts dust sludge wastewater and retained internal loops. Add identified actual effluent species at release if on-site treatment exists. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kg and original native units | each discard transfer and stock close | all production modes | actual site waste/export gate | per reference flow | waste tickets treatment contracts independent solids/moisture tests |
| cp_residue_form | form | each waste and actual outlet | weighing treatment and destination records | row_id; route; mass_wet; moisture; dry_solids; assays; treatment; recovery; exported; retained; opening; closing; attached_substances | Weigh each real separated stream; sample composition water and phase independently; reconcile offcuts dust sludge wastewater and retained internal loops. Add identified actual effluent species at release if on-site treatment exists. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kg and original native units | each discard transfer and stock close | all production modes | actual site waste/export gate | per reference flow | waste tickets treatment contracts independent solids/moisture tests |
| cp_residue_thermal | thermal | each waste and actual outlet | weighing treatment and destination records | row_id; route; mass_wet; moisture; dry_solids; assays; treatment; recovery; exported; retained; opening; closing; attached_substances | Weigh each real separated stream; sample composition water and phase independently; reconcile offcuts dust sludge wastewater and retained internal loops. Add identified actual effluent species at release if on-site treatment exists. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kg and original native units | each discard transfer and stock close | all production modes | actual site waste/export gate | per reference flow | waste tickets treatment contracts independent solids/moisture tests |
| cp_residue_finish | finish | each waste and actual outlet | weighing treatment and destination records | row_id; route; mass_wet; moisture; dry_solids; assays; treatment; recovery; exported; retained; opening; closing; attached_substances | Weigh each real separated stream; sample composition water and phase independently; reconcile offcuts dust sludge wastewater and retained internal loops. Add identified actual effluent species at release if on-site treatment exists. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | kg and original native units | each discard transfer and stock close | all production modes | actual site waste/export gate | per reference flow | waste tickets treatment contracts independent solids/moisture tests |
| cp_asset | support | capital replacement consumables and residues | physical asset and period-service ledger | asset_id; component_material; new_used; opening; actual_addition; installed_fluid; water_content; repair; use_hours; throughput; wear; leaks; retirement; closing; inherited_vector; actual_gross_receipts_returns; measured_new_water_material; removed_old_material; independent_water_loss; parent_child_disjoint_scope | Count or weigh real whole assets/components separately and track installed fluids and moisture. Establish actual deployment and period service attribution from measured use; no fixed lifetime or one whole machine per kg. Avoid duplicate embedded components. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. | item; kg and relevant native units | each deployment repair replacement retirement and close | actual service period with inherited history | actual installed asset and maintenance boundary | per reference flow | asset register repair receipts use logs fluid tests and retired-equipment tickets |
| cp_pack | service | each PE cardboard pallet and actual band | disjoint packaging stock ledger | material_configuration; cohort; opening_empty; opening_WIP_attached; opening_FG_attached; opening_reusable; purchases; attached_inbound; external_returns_received; closing_same_pools; gross_shipments; external_returns_out; waste; moisture; reuse; Radd; Rremove; independent_H2Oin; independent_H2Oout; dry_wood; absorbed_water; actual_repair_identity_destination | Count/weigh each packaging material/configuration and reconcile all disjoint pools attached to actual gross material movements. Internal reuse cancels and never counts again as purchase; physical amounts stay gross independently from burden allocation. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. Retain all six external gross directions P/I/ER/S/EO/W and independently measured repair additions/removals and water uptake/release for each configuration. Deduplicate against other flow terms, never erase real influx because additions are retained in closing stock. | kg and actual measured count | each packing shipment return repair discard and close | observed original-cohort horizon H | actual packing storage return and dispatch gates | per reference flow | packaging tickets tare measurements inventory counts dispatch/return linkage |
| cp_service | service | original released cohort brick and increments | physical FG and incremental service ledger | cohort_id; original_Qc; observed_H; openingFG; new_first_releases; gross_G; actual_R; dispatch_ID; return_state; closingFG; destruction; other_exit; new_water; new_material; real_loss; rework; inherited_vector; manufacturer_permission; moler_grade_compatibility; actual_rework_route; final_reacceptance; removed_old_material; independent_water_loss | Trace original releases dispatch and returns by IDs with actual mass moisture state and damage; keep original manufacturing burden intact and collect only real storage packing handling and post-release rework increments. No new Q or automatic reversal. Raw collection/storage remain undivided numerators; aggregation basis describes only the final value produced by the sole quotient in section 8. Any actual post-release rework requires manufacturer-compatible permission for the actual moler grade and original insulating-brick terminal, followed by actual dimensional/thermal/mechanical reacceptance after processing. Do not assume repairability, a pass, refiring or organic adhesive/coating restoration. Incompatible formulation/surface/terminal changes require a separate scope. Added material/water, removed old material and independent water loss need actual atomic exchanges/destinations; wet physical mass stays distinct from original dry-reference Qc. | kg and each service native unit | each stock movement event and observed horizon close | declared actual H for each original cohort | physical FG gate and actual service operations | per reference flow | cohort genealogy calibrated weights state observations time logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert raw units and actual rates to each selected native extensive numerator before attribution. Integrate real rates over their measured interval; do not integrate already totalised volume again. kWh to MJ uses 3.6 only for matching energy; gas GCV NCV heat and carrier mass are distinct accounts requiring independent supply composition state and calorimetry. | raw_reading; actual_state; calibration | raw_extensive_amount | `jrc-ceramic-bref-2007` |
| first_release | finished_brick | Q = sum of unique dry bare complete brick net masses at first final release after machining and quality acceptance. Released closing FG is included once; unreleased WIP rejected bodies returns reinspection and dispatch are not new Q. | cp_release; unique_release_IDs | Q | `skamol-moler-epd-2023`; `skamol-ceramic-brochure` |
| manufacture_burden | manufacture | For each exchange j: A_j = Bopen_j + P_j - Bclose_j - Tother_j after actual unit conversion subdivision and evidenced attribution. B vectors belong only to raw/WIP/unassigned non-WIP stores; released FG is never manufacturing Bclose. P retains failures zero-output idle start-stop cleanup and rework. Each transfer or subtraction requires independently identified destination and inherited vector. Declare each raw receipt/occurrence versus already-stock-adjusted actual consumption basis. A net-consumption material amount is not corrected for the same raw stock again, while consumed opening material retains its upstream history and WIP/non-WIP vectors use a consistent basis. Ordinary waste export or sale does not automatically create a Tother deduction: only an independently justified actual cofunction/attribution under Section7 can transfer burden; a destination ticket or price alone cannot erase failed production, residue manufacture or treatment burdens. | Bopen_j; P_j; Bclose_j; Tother_j; cp_material_prepare; cp_material_form; cp_material_thermal; cp_material_finish; cp_asset | A_j | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| cohort_service | service | Preserve original manufacturing vectors. Aservice_j is only actual incremental service burden attributed to original cohort Qc over observed H. Physical FG in actual-state mass: openingFG + first-release bodies at actual FG state + actual returns + actual added water/material = closingFG + gross dispatch + destruction + other evidenced physical exits including evaporation/process loss. Keep dry reference Q separate from actual wet physical masses with independently measured water; no automatic original-manufacture reversal or new Q. | cp_service; cp_pack; Qc; H | Aservice_j | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| single_quotient | all inventory rows | The only unit-result step is a_j = A_j / Q for manufacture and aservice_j = Aservice_j / Qc for the separately labelled original-cohort service over observed H. Perform once after raw-unit conversion stocks and attribution. Collection stores unnormalized raw; card amounts and aggregation refer to this same result without dividing again. For body hand-off and FG/dispatch/return physical-ledger cards the numerator is the actual unallocated physical quantity, not a newly generated manufacturing burden; keep inherited burden vectors and incremental-service attribution separate. Q or Qc equal to zero retains real burden with no unit result. Internal transfers cancel on consolidation. | A_j; Q; Aservice_j; Qc; cp_release; cp_service | a_j; aservice_j | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| pack_stock | cp_pack | For each material/configuration: opening empty+WIP-attached+FG-attached+reusable stocks + purchases P + attached inbound I + external returned receipts ER + Radd + H2Oin = corresponding disjoint closing stocks + packages with gross shipment S + outward returns EO + waste W + Rremove + H2Oout. Radd/Rremove are real repair material additions/removals outside existing whole-package directions; H2Oin/H2Oout are independent uptake/release outside water already carried in those measured streams. All flow terms are disjoint: a child in another measured direction is counted once, but retention of added mass in closing stock never cancels its real influx. Keep dry wood/other material and free/absorbed water independent; one wet residual cannot fit two unknowns. Each actual repair wood/fastener/glue/water/removed outlet requires a specific atomic identity/status and destination. Internal reuse/component handoffs cancel once, gross physical terms are not economically scaled and never enter bare-brick Q; original-cohort inherited purchase and actual incremental operation burdens are assigned once. | cp_pack; purchases; gross_shipments; external_returns; waste; attached_inbound; Radd; Rremove; H2Oin; H2Oout | packaging_balance | `skamol-moler-epd-2023` |
| asset_stock | cp_asset | Reconcile actual physical new/used whole assets replacements installed fluids water wear repair retirement and closing stocks for each material/form. Attribute actual period service burdens from deployment and measured use plus inherited vectors without fixed life; embedded items in a whole asset are not purchased twice. For each physical item reconcile opening + actual gross receipts + independently measured new material/water = closing + outward returns + retirement/waste + wear into other recorded streams + actual water loss/other exits, with disjoint terms. Included whole-asset components/fluids remain child ledgers and worn material is not disposed twice. Closing retention leaves real influx intact; physical mass is not scaled by period-service shares. | cp_asset; measured_use; inherited_vectors | period_asset_service | `jrc-ilcd-allocation-2010`; `jrc-ceramic-bref-2007` |
| physical_species | all physical gates | Reconcile independent whole mass and relevant elements using actual feed assays carbonate conversion oxygen uptake carbon-origin retention and individually measured molecular gas/phase-water paths. Gross air species and external heat carriers are physical subaccounts without duplicate provider purchases. One residual does not fit two unknowns; indicators COD VOC PM and total elements do not identify molecules. | cp_material_prepare; cp_material_form; cp_material_thermal; cp_material_finish; cp_air_thermal; cp_air_prepare; cp_air_service; cp_utility_prepare; cp_utility_form; cp_utility_thermal; cp_utility_finish; cp_utility_support; cp_utility_service; cp_residue_prepare; cp_residue_form; cp_residue_thermal; cp_residue_finish; cp_release; cp_service | mass_element_residuals | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each exchange | Verify exact native whole-form material phase route type media geography reference property/unit and official Chinese names. Provider grade or auxiliary gaps require actual data but alone do not imply a core hold. | full native records actual supplier specifications and product tests |
| dq_time | whole period | Retain complete site/cohort period all failure idle start-stop cleanup and rework modes raw/WIP/store inheritance and original Qc observed H services. | raw meters stock genealogy release register and event logs |
| dq_balance | physical gates | Quantify independent uncertainty for mass composition moisture phases gas-state speciation and calorimetry; disclose unclosed mass/element residuals without fitting missing species or declaring false precision. | calibrations assays sampling state certificates independent balances |
| dq_complete | dataset | Keep absent measured-zero below-detection unknown and unresolved identity distinct. Add any actual omitted atomic exchange; future foreground amounts are requirements and not invented measurements. Scientific and translation reviews are independent of engineering checks. | atomic completeness register unresolved list and evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | dataset | Verify fired opaline diatom-earth/clay brick terminal and all native card restrictions against actual route composition state type property unit and supplier. The reference family includes fired silica-based bricks but its external classification excludes siliceous earths; this discrepancy never creates an accepted classification edge and cannot waive any physical incompatibility. | `skamol-moler-epd-2023`; `skamol-ceramic-brochure` |
| v_quantity | all stages | Reconcile unique Q first releases including released closing FG; no extra FG output or manufacturing FG subtraction. Record every inherited raw/WIP/store vector and actual failed/rework load before one quotient. Q=0 retains loads without unit results. Retesting and shipment are not production. | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| v_species | physical gates | Reconcile independent whole mass and C H O N S Ca Si Al Cl F where present at manufacture service and consolidated gates. Resolve real oxidation carbonate conversion clay dehydroxylation opal water and free/adsorbed moisture with independent measurements. One residual cannot determine two unknowns; neither loss-on-ignition nor shrinkage defines molecular gas mass. | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007` |
| v_utilities | utilities | Use each row native extensive property; Mass/kg does not apply to kWh MJ or m3. Integrated volumes are not multiplied by time again; actual rates alone are integrated. Independent density composition pressure temperature and calorimetry establish conversions and carrier mass/heat subaccounts. Do not charge a whole provider and its fuel or water twice. | `jrc-ceramic-bref-2007` |
| v_stocks | packaging assets and FG | For every packaging configuration reconcile all disjoint opening and closing empty WIP-attached FG-attached reusable pools plus purchases attached inbound external returns received against gross shipments external returns out and waste. Physical capital new/used stocks actual replacements wear retired articles and in-service fluids have separate material/state balances and actual period service attribution without an invented life. | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| v_evidence | sources and completeness | Confirm full source context and neighboring counterexamples. EPD composition/packaging percentages LCIA cutoffs RSL densities and old site totals are not factory defaults; BREF silica/high-alumina thermal tables and chromium figure are not moler data. Unknown species native identity or inherited history remains explicit and blocks dependent numerical results. | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | actual matching moler insulating-brick supply-chain models; manufacturing and original-cohort service disclosed separately |
| allowed_use | attributional LCA where boundary grade application and evidence match and all qualifiers are complete |
| excluded_use | insulation lifetime comparisons without functional equivalence other material families default density recipe life or treating engineering checks as scientific approval |
| required_metadata | moler geological origin and natural clay/opaline skeleton composition; actual whole supply forms and moisture assays; wood species origin and pore-former carbon/ash; limestone presence assay and carbonate conversion; extrusion cut geometry and machining state; actual drying burnout firing cooling route and atmosphere; thermal mechanical dimensional acceptance method and grade; first final release cohort IDs and dry bare net mass Q; reference flow family native restrictions and classification discrepancy; raw WIP stores inherited per-exchange burden vectors; released FG dispatch return and observed cohort-service horizon; utility supplier geography voltage fuel state heat/carrier conventions; atomic gas species phases and independent mass/element evidence; disjoint packaging and physical capital/fluid stocks; single attribution and normalization with uncertainty disclosure |
| required_quality_disclosure | actual site period representativeness uncertainty omissions restrictions unclosed balances and identity versus provider data |
| update_trigger | material phases supply forms pore former route grade energy provider geometry terminal release gate stock or service horizon materially change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| skamol-moler-epd-2023 | dataset | Skamol Group; MD-23062-EN Version 1 issued 14 April 2023 valid to 14 April 2028; 2021 Fur site data; full 21-page EPD; product groups pp2/4/5 flowdiagram p6 system boundary p7 limitations pp18-21. https://www.skamol.com/Admin/Public/Download.aspx?file=Files%2FFiles%2FDocumentation%2FEPD%2FEPD-Skamol-moler-products-EN15804-A2.pdf | Qualitative actual moler sawdust limestone extrusion drying firing machining packaging route and terminal. No recipe packaging share site LCIA density RSL cutoff or end-of-life credit defaults. |
| skamol-ceramic-brochure | extension_guidance | Skamol by Etex; SkamoCeramic Insulation system for high temperature industries; undated publisher brochure; complete 8 pages; moler p4 versus vermiculite/calcium-silicate pp5-6. https://www.skamol.com/Admin/Public/Download.aspx?file=Files%2FFiles%2FDocumentation%2FBrochures%2FSkamoCeramic-UK.pdf | Fired sanded moler brick terminal opaline diatom/montmorillonitic-clay structure and backup insulation function; adjacent board families are exclusions. No grade-specific performance prescription. |
| jrc-ceramic-bref-2007 | official_guidance | European Commission JRC; Reference Document on Best Available Techniques in the Ceramic Manufacturing Industry; August 2007; complete PDF; sections 2.3.3 and adjacent 2.3.2/2.3.4; printed pp49-54; Figures2.16/2.17 and Tables2.8-2.12. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | General unit operations utilities actual waste and gas candidates and incompatible routes. Chromium basic-brick figure and silica/high-alumina process numbers are counterexamples; no moler recipe or gas factor transfer. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC; ILCD Handbook General guide for Life Cycle Assessment Detailed guidance; first edition March 2010; sections7.9.2-7.9.3 printed pp255-272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | General attributional subdivision and exchange-specific determining physical causality followed only for residual common process by contemporaneous actual-gate state-specific market value; not industrial manufacturing evidence. |
