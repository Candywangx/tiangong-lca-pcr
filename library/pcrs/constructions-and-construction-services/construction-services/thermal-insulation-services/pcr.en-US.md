---
pcr_id: pcr.constructions-and-construction-services.construction-services.thermal-insulation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Friction-fit stone wool frame insulation services

## 1. Scope and Applicability

This PCR governs site installation of unfaced semi-rigid mineral stone wool slabs into accepted, dry, stable, open wall frames. The installer measures the clear cavity apertures, cuts the slabs, friction-fits the pieces, inspects the installed insulation and cleans the work area. The handover is accepted insulation before lining or other enclosure conceals it. The covered service is narrower than general thermal insulation services.

Exclude construction or repair of the frame, manufacture of insulation, membranes, lining, plastering, exterior insulation/render systems, blown or sprayed insulation, glass wool, foams, removal of existing insulation and all asbestos work. Stone wool means 岩棉; asbestos is 石棉 and outside this category. A product-specific guide informs the installation sequence but its cutting allowance, stud spacing, dimensions and named product properties are not universal PCR defaults. Actual selected-system instructions govern execution (`rockwool-thermal-frame-slab-installation-2025`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.thermal-insulation-services |
| classification_refs | cpc:3.0:54652 — Thermal insulation services; proposed narrower relation |
| covered_products | Site friction-fitting of declared unfaced semi-rigid stone wool slabs into accepted open wall-frame cavities, including aperture survey, cutting, inspection and local cleanup |
| excluded_products | Frame construction, lining and membranes; insulation manufacture; external/render insulation; foam, glass-wool and blown routes; demolition; asbestos and hazardous-material removal |
| representative_product | Accepted stone wool insulated cavity surface before enclosure |
| production_route | Work-lot aperture survey → slab cutting → friction fitting → inspection, rework where necessary and cleanup → accepted open-cavity insulation handover |
| market_state | Completed installation service at the pre-enclosure acceptance gate; not a manufactured slab or complete wall |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted friction-fit stone wool frame insulation service in open wall-frame cavities |
| How much | 1 m2 net accepted insulated cavity area |
| How well | Declared stone wool grade, unfaced semi-rigid form, nominal/design thickness, density or documented product density basis, declared conductivity and applicable resistance basis; correct fit without visible gaps or unintended compression; accepted before enclosure |
| How long or cycle | One defined installation work lot and its acceptance event; no building service life or whole-wall thermal performance is implied |
| reference_flow_link | `accepted_insulation_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted friction-fit stone wool frame insulation service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | site and work lot; wall/frame and cavity geometry; net aperture-area method; slab manufacturer and grade; stone wool identity; unfaced semi-rigid form; thickness; density basis; conductivity and test/declaration basis; resistance if claimed; installation instruction edition; acceptance gate and date; reject/rework status; custody and waste routes |

Declare every qualifier in the foreground data package. Slab conductivity is a material property; it does not demonstrate whole-wall U-value, thermal bridging, airtightness, fire performance or long-term building performance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A is positive net accepted insulated cavity area measured from actual clear apertures using cp_fit_area; exclude frame members, openings, voids, rejected and unaccepted work. Do not use gross wall elevation or purchased slab area. |
| material_mass | delivered_stone_wool; cut_slabs_transfer; cut_wool_feed; cut_reusable_exit; fit_reusable_exit; cut_wool_waste; fit_wool_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use traceable actual mass records. If converted from pieces or slab volume, retain same-grade dimensions, density evidence and uncertainty; never treat area as mass without these conversion inputs. |
| transfer_pairing | prepared_frame_interface; ready_frame_feed; cut_slabs_transfer; cut_wool_feed | Area or Mass appropriate to the card | m2 or kg appropriate to the card | Paired handoffs retain matching transfer id, lot, state, unit and quantity. Record actual feed and transfer amounts; neither intermediate area nor slab mass is fixed to the final 1 m2 reference. |
| thermal_qualifiers | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Thickness, density and declared conductivity qualify the service; preserve their units and declaration conditions. Material resistance calculations require consistent thickness and conductivity and cannot substitute for a whole-wall calculation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | An accepted stable dry open wall frame with accessible cavities, and supplied unfaced semi-rigid stone wool slabs of declared grade; frame defects and hazardous materials have been resolved outside this service |
| starting_condition_role | Existing-frame component interface plus separately supplied insulation material input; the frame is not manufactured in the foreground |
| product_classification_scope | Only the stated narrower installation service within cpc:3.0:54652 |
| recursive_input_rule | A purchased installation service in the same category is an externally supplied service with supplier scope and quantities disclosed; use its upstream dataset and avoid reproducing its surveyed, cut or fitted activities in this foreground package |
| upstream_dataset_requirement | Link actual supplied slabs, electricity and actual accessories to compatible upstream datasets; frame construction remains with the incoming frame owner. Preserve transport and offsite waste-treatment links and disclose their model ownership. No automatic burden-free input or avoided-product credit is implied. |
| disclosure | Site, work-lot boundary, accepted starting state, excluded corrective work, material specification, tool and shared-meter ownership, transport/treatment responsibility, actual retention condition, internal transfers and acceptance gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR governs site installation of unfaced semi-rigid mineral stone wool slabs into accepted, dry, stable, open wall frames. The installer measures the clear cavity apertures, cuts the slabs, friction-fits the pieces, inspects the installed insulation and cleans the work area. The handover is accepted insulation before lining or other enclosure conceals it. The covered service is narrower than general thermal insulation services. Exclude construction or repair of the frame, manufacture of insulation, membranes, lining, plastering, exterior insulation/render systems, blown or sprayed insulation, glass wool, foams, removal of existing insulation and all asbestos work. Stone wool means 岩棉; asbestos is 石棉 and outside this category. A product-specific guide informs the installation sequence but its cutting allowance, stud spacing, dimensions and named product properties are not universal PCR defaults. Actual selected-system instructions govern execution (`rockwool-thermal-frame-slab-installation-2025`). | `rockwool-thermal-frame-slab-installation-2025` |
| starting_frame | aperture_survey | Accept the existing frame condition and measure clear apertures; substantial repairs or construction are separate supplied activities. Record their owner before beginning the covered service. | `rockwool-thermal-frame-slab-installation-2025` |
| cut_and_fit | slab_cutting; fit_acceptance | Include measuring, cutting, friction fitting, gap inspection and local cleanup. Follow actual selected-system instructions; no universal cutting allowance, framing centres or fixing quantity is prescribed. | `rockwool-thermal-frame-slab-installation-2025` |
| component_integration | fit_acceptance | Integrate cut stone wool with the measured existing-frame component interface. The frame transfer carries geometric and acceptance state only; frame manufacture stays upstream. Joining is friction fitting; retention accessories are conditional on actual system requirements. Do not invent mixing, chemical reaction or a single-component assembly. | `rockwool-thermal-frame-slab-installation-2025` |
| waste_and_release | slab_cutting; fit_acceptance | Keep collected offcuts and vacuum dust as waste under custody, with named receiver and treatment link. Report direct airborne release only from independent composition/size/medium evidence; do not turn collected waste into an elementary emission. | `rockwool-thermal-frame-slab-installation-2025` |
| shared_services | all processes | Attribute actual shared electricity for survey lighting, cutting, fitting or vacuuming using meter/event and consumer records for the same period. Every meter or shared service has one accounting owner. Include actual shared access-platform, scaffold or rented-equipment availability services with named asset, all consuming nodes and contract periods; use actual h records and documented beneficiary shares. Declare equipment/access capital treatment and supplier-service inclusions. | |

## 6. Process Inventory Structure

The production mode is a site work lot, partitioned by room/wall, slab grade and acceptance date as necessary. Every delivery, transfer, cutting event, rejection, rework, cleaning and shared-meter interval belongs to a lot and node. Cutting changes the geometry of the supplied slab; fitting integrates the cut pieces with the existing frame interface. Off-spec fit remains work in progress until corrected or removed; it is never accepted area.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `aperture_survey` | Starting-frame checks and clear-aperture survey | required | Every covered work lot | Declare supplied frame interface and hand measured ready cavities to fitting | Actual measured ready cavity area linked to frame_transfer |
| `slab_cutting` | Slab draw, cutting and cutting-owned cleanup | required | Every covered work lot | Transform delivered slabs to aperture-specific pieces; own cutting waste and reusable exits | Actual cut mass handed over via wool_transfer |
| `fit_acceptance` | Friction fitting, rework, acceptance and final cleanup | required | Every covered work lot | Integrate frame and cut-piece components; inspect and hand over accepted insulation | A m2 net accepted insulated cavity area |

### Process: Starting-frame checks and survey (`aperture_survey`)

#### Inputs

##### Product flows

###### Accepted dry open frame cavity interface (`supplied_frame_interface`)

Existing component interface; upstream frame burden remains with supplier. State: Structurally sound dry open frame accepted before insulation. Destination: aperture_survey. Condition: Always for the declared route.

- Selected flow: Accepted dry open frame cavity interface
- Flow property / unit: Area / m2
- Amount rule: survey_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_area`
- Range: Provisional reasoned screening interval. Area ratios screen unexpectedly large rejected or unaccepted work and mismatched handoff records; values outside this broad provisional screen require explanation rather than exclusion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to survey lighting (`survey_electricity`)

Conditional actual site electricity. State: Actual voltage and supply mix at point of use. Destination: survey lighting. Condition: Only where survey lighting actually consumes electricity.

- Selected flow: Electricity supplied to survey lighting
- Flow property / unit: Energy / kWh
- Amount rule: survey_energy / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_energy`
- Range: Provisional reasoned screening interval. Manual tools may use zero electricity, while measured lighting and vacuum use vary with access and work duration; this wide provisional interval screens record or attribution errors and supplies no default.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Complete survey access-platform availability service (`survey_shared_access_service_platform`)

Record only this independently identified complete survey access-platform availability service at its actual state and supply or receiving gate. Actual complete platform provider contract referenced to availability h with explicit life/energy/setup coverage; not active tool time. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `shared_service_calc`; retain the explicit original formula below.

- Selected flow: Complete survey access-platform availability service
- Flow property / unit: Duration / h
- Amount rule: For this actual platform contract, actual billed quantity with documented h conversion or contracted seconds/3600, all-beneficiary recorded activity weights including outside scope and assigned unused availability; sum attributable availability h and divide by A. Missing/zero weights require reviewed basis or gap, never an assumed 8 h day.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_survey_shared_service`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete survey scaffold availability service (`survey_shared_access_service_scaffold`)

Record only this independently identified complete survey scaffold availability service at its actual state and supply or receiving gate. Actual complete scaffold provider contract referenced to availability h with declared capital/maintenance/energy/setup ownership. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `shared_service_calc`; retain the explicit original formula below.

- Selected flow: Complete survey scaffold availability service
- Flow property / unit: Duration / h
- Amount rule: Use actual scaffold availability records and all-beneficiary shares, including unused availability; normalize this independently measured node service once by A. No copied platform hours or time-to-count conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_survey_shared_service`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

#### Outputs

##### Product flows

###### Measured ready open frame cavity interface (`prepared_frame_interface`)

Measured existing-frame component handoff; not manufactured frame output. State: Accepted frame with measured clear apertures; no insulation yet. Destination: fit_acceptance via transfer frame_transfer. Condition: Always for the declared route.

- Selected flow: Measured ready open frame cavity interface
- Flow property / unit: Area / m2
- Amount rule: ready_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_area`
- Range: Provisional reasoned screening interval. Area ratios screen unexpectedly large rejected or unaccepted work and mismatched handoff records; values outside this broad provisional screen require explanation rather than exclusion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Slab cutting (`slab_cutting`)

#### Inputs

##### Product flows

###### Unfaced semi-rigid stone wool slabs delivered for frame insulation (`delivered_stone_wool`)

Gross physical slab draw into cutting node. State: Declared grade, thickness, density and conductivity; intact delivered slabs. Destination: slab_cutting. Condition: Always for the declared route.

- Selected flow: Unfaced semi-rigid stone wool slabs delivered for frame insulation
- Flow property / unit: Mass / kg
- Amount rule: gross_slab_draw / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Range: Provisional reasoned screening interval. The wide mass interval permits substantial variation in declared thickness, density and cutting geometry; it is a provisional error screen, not a slab specification, recommended dose or empirical limit.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to slab cutting and local cleanup (`cutting_electricity`)

Conditional actual power including cutting-owned vacuuming. State: Actual voltage and supply mix at point of use. Destination: cutting tools, lighting and vacuum. Condition: Only for actual powered tools, lighting or cutting-node vacuuming.

- Selected flow: Electricity supplied to slab cutting and local cleanup
- Flow property / unit: Energy / kWh
- Amount rule: cut_energy / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_energy`
- Range: Provisional reasoned screening interval. Manual tools may use zero electricity, while measured lighting and vacuum use vary with access and work duration; this wide provisional interval screens record or attribution errors and supplies no default.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Complete cut access-platform availability service (`cut_shared_access_service_platform`)

Record only this independently identified complete cut access-platform availability service at its actual state and supply or receiving gate. Actual complete platform provider contract referenced to availability h with explicit life/energy/setup coverage; not active tool time. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `shared_service_calc`; retain the explicit original formula below.

- Selected flow: Complete cut access-platform availability service
- Flow property / unit: Duration / h
- Amount rule: For this actual platform contract, actual billed quantity with documented h conversion or contracted seconds/3600, all-beneficiary recorded activity weights including outside scope and assigned unused availability; sum attributable availability h and divide by A. Missing/zero weights require reviewed basis or gap, never an assumed 8 h day.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cut_shared_service`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete cut scaffold availability service (`cut_shared_access_service_scaffold`)

Record only this independently identified complete cut scaffold availability service at its actual state and supply or receiving gate. Actual complete scaffold provider contract referenced to availability h with declared capital/maintenance/energy/setup ownership. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `shared_service_calc`; retain the explicit original formula below.

- Selected flow: Complete cut scaffold availability service
- Flow property / unit: Duration / h
- Amount rule: Use actual scaffold availability records and all-beneficiary shares, including unused availability; normalize this independently measured node service once by A. No copied platform hours or time-to-count conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cut_shared_service`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

#### Outputs

##### Product flows

###### Cut stone wool pieces ready for friction fitting (`cut_slabs_transfer`)

Internal material handoff. State: Aperture-specific unfaced stone wool pieces not yet installed. Destination: fit_acceptance via transfer wool_transfer. Condition: Always for the declared route.

- Selected flow: Cut stone wool pieces ready for friction fitting
- Flow property / unit: Mass / kg
- Amount rule: cut_transfer_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Range: Provisional reasoned screening interval. The wide mass interval permits substantial variation in declared thickness, density and cutting geometry; it is a provisional error screen, not a slab specification, recommended dose or empirical limit.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reusable stone wool leaving cutting custody (`cut_reusable_exit`)

Intact returns or separately recorded usable third-party handover. State: Uninstalled reusable stone wool; destination and grade retained. Destination: Supplier return or external reuse recipient; mutually exclusive event tags. Condition: Only if reusable material actually leaves custody; closing stock is not an exit.

- Selected flow: Reusable stone wool leaving cutting custody
- Flow property / unit: Mass / kg
- Amount rule: cut_reusable_exit_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Range: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collected unusable stone wool cutting residue (`cut_wool_waste`)

Custodial waste exit. State: Offcuts, rejects and vacuum-collected stone wool under cutting ownership. Destination: Named licensed waste receiver; actual route disclosed. Condition: Always for the declared route.

- Selected flow: Collected unusable stone wool cutting residue
- Flow property / unit: Mass / kg
- Amount rule: cut_waste_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Range: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated discarded stone-wool packaging film (`cut_packaging_waste_film`)

Record only this independently identified separated discarded stone-wool packaging film at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separated discarded stone-wool packaging film
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cut_material`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separated discarded stone-wool packaging board (`cut_packaging_waste_board`)

Record only this independently identified separated discarded stone-wool packaging board at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separated discarded stone-wool packaging board
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cut_material`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

### Process: Fitting and acceptance (`fit_acceptance`)

#### Inputs

##### Product flows

###### Measured ready open frame cavity interface (`ready_frame_feed`)

Existing frame component input paired to frame_transfer. State: Same surveyed accepted open cavity; no manufacture or duplicate upstream frame burden. Destination: fit_acceptance. Condition: Always for the declared route.

- Selected flow: Measured ready open frame cavity interface
- Flow property / unit: Area / m2
- Amount rule: frame_feed_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Range: Provisional reasoned screening interval. Area ratios screen unexpectedly large rejected or unaccepted work and mismatched handoff records; values outside this broad provisional screen require explanation rather than exclusion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cut stone wool pieces ready for friction fitting (`cut_wool_feed`)

Actual internal material feed paired to wool_transfer. State: Same aperture-specific pieces transferred from cutting. Destination: fit_acceptance. Condition: Always for the declared route.

- Selected flow: Cut stone wool pieces ready for friction fitting
- Flow property / unit: Mass / kg
- Amount rule: fit_feed_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Range: Provisional reasoned screening interval. The wide mass interval permits substantial variation in declared thickness, density and cutting geometry; it is a provisional error screen, not a slab specification, recommended dose or empirical limit.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to fitting inspection and final cleanup (`fitting_electricity`)

Conditional actual power excluding cutting-owned cleanup. State: Actual voltage and supply mix at point of use. Destination: Fitting-node lighting or vacuum. Condition: Only actual powered equipment, lighting or fitting-owned vacuuming.

- Selected flow: Electricity supplied to fitting inspection and final cleanup
- Flow property / unit: Energy / kWh
- Amount rule: fit_energy / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_energy`
- Range: Provisional reasoned screening interval. Manual tools may use zero electricity, while measured lighting and vacuum use vary with access and work duration; this wide provisional interval screens record or attribution errors and supplies no default.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Complete fit access-platform availability service (`fit_shared_access_service_platform`)

Record only this independently identified complete fit access-platform availability service at its actual state and supply or receiving gate. Actual complete platform provider contract referenced to availability h with explicit life/energy/setup coverage; not active tool time. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `shared_service_calc`; retain the explicit original formula below.

- Selected flow: Complete fit access-platform availability service
- Flow property / unit: Duration / h
- Amount rule: For this actual platform contract, actual billed quantity with documented h conversion or contracted seconds/3600, all-beneficiary recorded activity weights including outside scope and assigned unused availability; sum attributable availability h and divide by A. Missing/zero weights require reviewed basis or gap, never an assumed 8 h day.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fit_shared_service`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete fit scaffold availability service (`fit_shared_access_service_scaffold`)

Record only this independently identified complete fit scaffold availability service at its actual state and supply or receiving gate. Actual complete scaffold provider contract referenced to availability h with declared capital/maintenance/energy/setup ownership. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `shared_service_calc`; retain the explicit original formula below.

- Selected flow: Complete fit scaffold availability service
- Flow property / unit: Duration / h
- Amount rule: Use actual scaffold availability records and all-beneficiary shares, including unused availability; normalize this independently measured node service once by A. No copied platform hours or time-to-count conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fit_shared_service`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

#### Outputs

##### Product flows

###### Accepted friction-fit stone wool frame insulation service (`accepted_insulation_service`)

Actual final service reference output. State: Net accepted insulated cavity area before enclosure; declared slab system, no visible gaps and no unintended compression. Destination: Client or next enclosure trade. Condition: Always for the declared route.

- Selected flow: Accepted friction-fit stone wool frame insulation service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_area`
- Range: Reference-unit normalization identity. Normalization identity: one reference service unit is exactly 1 m2. This is not a provisional screen or a physical yield estimate.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Reusable stone wool leaving fitting custody (`fit_reusable_exit`)

Conditional reusable material boundary exit. State: Uninstalled or removed clean reusable pieces with grade and recipient record. Destination: Supplier or external reuse recipient; no internal transfer represented as exit. Condition: Only actual external exit; same-lot re-fitting remains an internal loop.

- Selected flow: Reusable stone wool leaving fitting custody
- Flow property / unit: Mass / kg
- Amount rule: fit_reusable_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Range: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collected stone wool fitting rejects and cleanup residue (`fit_wool_waste`)

Custodial fitting waste exit including removed unusable slabs. State: Damaged, unsuitable or contaminated wool and captured cleanup residue under fitting ownership. Destination: Actual waste receiver with material and route disclosure. Condition: Always for the declared route.

- Selected flow: Collected stone wool fitting rejects and cleanup residue
- Flow property / unit: Mass / kg
- Amount rule: fit_waste_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Range: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| lot_subdivision | work-lot burdens | Prefer direct node and lot records. Divide each attributable node numerator by the same positive accepted A. Rejected work, failed fitting attempts and their cleanup remain burdens of the producing lot; do not divide them by rejected area or count them as another final product. | |
| reusable_exits | cut_reusable_exit; fit_reusable_exit | Record reusable exits as physical product outputs with recipient and state; they are not insulation services or waste. Gross physical slab input retains these exits. Net-use diagnostics subtract them once; never subtract the same return again from gross input because it is already an output. Only the actual unused material's inherited upstream burden may follow that material on exit; survey, cutting, fitting and rework service burdens remain with this service lot. Declare the material-burden transfer method and sensitivity; no automatic avoided-production credit. | |
| rework_ownership | slab_cutting; fit_acceptance | A usable offcut reused within cutting or a removed piece refitted within the lot is an internal loop with event ids. Carry its inherited burdens once and add actual new cutting/fitting/cleanup burdens at the responsible node. Material leaving the node is classified as reusable product or custodial waste, never both. | `rockwool-thermal-frame-slab-installation-2025` |
| shared_meter | all electricity and shared access/equipment service cards | For a meter interval, E_total = end reading - start reading after unit and multiplier correction. Identify all consumers, including outside-scope users. Prefer submeter totals; otherwise use documented observed runtime-and-power/activity weights. Shares across all consumers sum to one; assign each share once to one consuming node and lot before normalization. Do not add a site's full bill to each node. For actual rented access or equipment, use shared_service_calc and the node-specific shared-service protocol; enumerate every beneficiary in the same contract period and separately resolve availability versus active-use basis. | |
| changeover_cleanup | work lots | Assign material-grade changeover and local cleaning to the originating lot where identifiable; document the common event and actual beneficiary shares otherwise. One cleanup event belongs to cutting or fitting ownership, with each physical waste or energy quantity counted once. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_survey_area` | aperture_survey | supplied and measured frame interfaces | aperture survey and supplier acceptance record | site; lot; room/wall; aperture_id; clear_width; clear_height; irregular_geometry_dimensions; noninsulatable_area; starting_acceptance; ready_state; frame_transfer_id; timestamp | Measure actual clear apertures with checked tape or laser; calculate geometry from recorded dimensions; retain drawings and starting-frame acceptance Aggregation algorithm: Sum actual surveyed and ready cavity areas separately; divide each by A from cp_fit_area; retain failed/held cavity records outside ready area | m; m2 | Each aperture and any corrected survey | Same work lot before cutting and fitting | Named wall/frame cavities only | per 1 m2 reference flow | Instrument check; signed aperture sheet; photographs; transfer reconciliation |
| `cp_survey_energy` | aperture_survey | conditional survey lighting | node meter or shared-event record | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; billed_service_inclusions | Read node meter or link shared interval to actual survey lighting; retain full consumer ledger before computing allocation Aggregation algorithm: Correct end-minus-start; multiply by survey share once; sum survey-attributable kWh; divide by A | kWh | Each metered interval or shared event | Survey period for same lot | Survey consumers plus every other consumer of that shared meter | per 1 m2 reference flow | Meter calibration or bill; activity log; shares reconcile to one; no duplicate interval |
| `cp_cut_material` | slab_cutting | slab draw, cut transfer, reusable exits, wool and packaging waste | stock, scale, transfer and waste event records | site; lot; grade; slab_dimensions; piece_dimensions; piece_count; pack_mass; thickness; density_evidence; documented_density_kg_per_m3; opening_stock; receipts; closing_stock; opening_cut_wip; closing_cut_wip; supplier_returns; external_handover; event_id; exit_class; wool_transfer_id; cut_piece_mass; usable_internal_recut; wool_waste_mass; packaging_material; packaging_mass; vacuum_event; destination; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh by material with checked scales or use traceable grade-specific pack/piece mass conversion; record opening and closing stock and every mutually exclusive exit; separate packaging from wool Aggregation algorithm: Compute gross slab draw and diagnostic net use; sum transfer/reusable/waste/packaging separately; divide each numerator by A; closing stock excludes material already recorded as external exit Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each receipt, transfer, return and waste event; stock at lot boundaries | Entire cutting lot including recutting and cutting-owned cleanup | Cutting custody and named downstream recipients | per 1 m2 reference flow | Scale check; supplier mass/density documentation; stock ledger; signed transfer and waste receipt; event uniqueness |
| `cp_cut_energy` | slab_cutting | conditional powered cutting, lighting and local vacuum | node meter or shared-event record | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cleanup_event_id; billed_service_inclusions | Meter actual powered equipment or link common interval to cutting-owned consumption; do not estimate powered saw use when a hand knife was used Aggregation algorithm: Correct interval energy; apply documented cutting shares once; sum numerator before division by A | kWh | Each metered interval or shared event | Full cutting period including actual recutting and cleanup | Cutting consumers and all other shared-meter consumers | per 1 m2 reference flow | Meter/bill evidence; activity and vacuum ownership; full shares reconciliation |
| `cp_cut_air` | slab_cutting | conditional direct airborne release | measured release or supported site-specific emission calculation | site; lot; cutting_event; substance_or_composition; particle_size_basis; receiving_air_medium; measured_concentration; sampled_air_volume; capture_efficiency_evidence; release_algorithm; factor_records; method; uncertainty; release_duration; collected_waste_exclusion; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; release_event_id; release_measurement_plane; concentration_interval_ids; interval_duration_s; total_event_airflow_m3_per_s; event_air_volume_m3; event_air_volume_method; net_concentration_mg_per_m3; concentration_representativeness_evidence; background_method_and_applicability; temperature_pressure_wet_dry_basis; process_capture_position; actual_uncaptured_fraction; capture_correction_evidence; event_coverage_evidence; instrument_calibration; detection_limit_method; extrapolation_model_validation; release_uncertainty | At this protocol's own node and each actual cutting or fitting/cleanup release event, record independent substance/size/air-medium identity, raw sample measurements and the actual emission measurement plane. Independently establish the total event airflow/volume and interval duration, concentration representativeness, temperature/pressure/wet-dry basis, background method and capture position/correction. Apply release_calc to full disjoint event intervals, or its validated source-specific event-total alternative; preserve calibration, sampling coverage, model applicability, uncertainty and measured nonoccurrence evidence. sampled_air_volume supports the analytical concentration/QA only, never a default whole-event volume. Record each actual child independently by physical event, identity, state, gate, period and one property/unit. Keep collected waste and its contents nonadditive and separate from actual uncontained releases. Missing coverage, identity, quantity, method or necessary concrete exchange blocks foreground completion, never zero. Keep event masses as raw kg for closure and normalize each final card once by A. | kg; mg/m3; m3; m3/s; s; dimensionless fraction; explicit recorded temperature/pressure units, all auxiliary bases retained separately | Each assessed cutting release event | Same cutting lot and actual release period | Cutting environmental boundary only | per 1 m2 reference flow | Sampling report; method/factor provenance; uncertainty; custody/release separation |
| `cp_fit_material` | fit_acceptance | paired frame and wool feed; accessories; reusable and waste exits; conditional actual accessory and packaging waste | transfer, scale, accessory and rework records | site; lot; frame_transfer_id; frame_feed_area; wool_transfer_id; feed_mass; opening_wool_wip; closing_wool_wip; installed_wool_mass; installed_piece_geometry; installed_density_evidence; documented_density_kg_per_m3; accessory_identity; accessory_instruction; accessory_opening; accessory_receipts; accessory_closing; accessory_returns; accessory_external_handover; removal_event; removed_mass; reuse_or_discard; fit_reusable_mass; fit_waste_mass; vacuum_event; recipient; timestamp; aperture_id; final_acceptance_record; installed_acceptance_status; accessory_waste_mass; accessory_packaging_waste_mass; accessory_waste_event; accessory_waste_material; accessory_waste_custodian; accessory_waste_destination; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile actual incoming frame and cut-piece transfers; weigh actual material exits and accessory records; tag removal as same-lot rework, external reusable exit or waste; actual accessory instructions establish activation Aggregation algorithm: Sum actual paired feed; compute accessory net issue; sum reusable/waste exits once; retain WIP and refitting loops; divide each numerator by A Record installed wool only by final acceptance membership; unaccepted installed wool belongs to mutually exclusive closing WIP. Weigh actual accessory waste and packaging separately by material/event/custodian; reusable returns and closing stocks are not waste. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | m2; kg | Each transfer, accessory issue, removal and cleanup event; WIP at lot limits | Whole fitting lot through acceptance and final cleanup | Fitting custody and named recipients | per 1 m2 reference flow | Transfer signatures; checked scale; accessory product evidence; removal-route log; receiver receipt |
| `cp_fit_energy` | fit_acceptance | conditional fitting, inspection lighting and final vacuum | node meter or shared-event record | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cleanup_event_id; billed_service_inclusions | Meter actual fitting-node consumers or allocate a common interval using documented consumer data and one ownership record Aggregation algorithm: Correct interval energy; apply fitting shares once; sum numerator before division by A | kWh | Each metered interval or shared event | Fitting, inspection, rework and final cleanup period | Fitting consumers and all other shared-meter consumers | per 1 m2 reference flow | Meter/bill evidence; final-cleanup ownership; full shares reconciliation |
| `cp_fit_area` | fit_acceptance | actual accepted reference service | signed acceptance and aperture measurement record | site; lot; aperture_id; accepted_clear_dimensions; noninsulated_deductions; slab_grade; thickness; density_basis; conductivity_basis; visible_gap_check; compression_check; rejection_area; rework_status; enclosure_status; acceptance_date; approver | Reconcile installed aperture geometry to survey and inspect fit before enclosure; acceptance signoff identifies actual conforming apertures; retain rejected work until corrected and reaccepted Aggregation algorithm: A = sum net finally accepted aperture areas; count each aperture once after final disposition; A/A = 1 m2 reference service | m; m2 | Every accepted aperture and each subsequent rejection/reacceptance | One complete lot ending at acceptance | Actual inspected cavity faces; frame members excluded | per 1 m2 reference flow | Signed pre-enclosure checklist; dimensions; photos; grade delivery record; rejected-work log |
| `cp_fit_air` | fit_acceptance | conditional fitting direct airborne release | measured release or supported site-specific emission calculation | site; lot; fitting_or_cleanup_event; substance_or_composition; particle_size_basis; receiving_air_medium; measured_concentration; sampled_air_volume; capture_efficiency_evidence; release_algorithm; factor_records; method; uncertainty; release_duration; collected_waste_exclusion; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; release_event_id; release_measurement_plane; concentration_interval_ids; interval_duration_s; total_event_airflow_m3_per_s; event_air_volume_m3; event_air_volume_method; net_concentration_mg_per_m3; concentration_representativeness_evidence; background_method_and_applicability; temperature_pressure_wet_dry_basis; process_capture_position; actual_uncaptured_fraction; capture_correction_evidence; event_coverage_evidence; instrument_calibration; detection_limit_method; extrapolation_model_validation; release_uncertainty | At this protocol's own node and each actual cutting or fitting/cleanup release event, record independent substance/size/air-medium identity, raw sample measurements and the actual emission measurement plane. Independently establish the total event airflow/volume and interval duration, concentration representativeness, temperature/pressure/wet-dry basis, background method and capture position/correction. Apply release_calc to full disjoint event intervals, or its validated source-specific event-total alternative; preserve calibration, sampling coverage, model applicability, uncertainty and measured nonoccurrence evidence. sampled_air_volume supports the analytical concentration/QA only, never a default whole-event volume. Record each actual child independently by physical event, identity, state, gate, period and one property/unit. Keep collected waste and its contents nonadditive and separate from actual uncontained releases. Missing coverage, identity, quantity, method or necessary concrete exchange blocks foreground completion, never zero. Keep event masses as raw kg for closure and normalize each final card once by A. | kg; mg/m3; m3; m3/s; s; dimensionless fraction; explicit recorded temperature/pressure units, all auxiliary bases retained separately | Each assessed fitting release event | Same fitting lot and actual release period | Fitting environmental boundary only | per 1 m2 reference flow | Sampling report; raw data and factor provenance; uncertainty; no overlap with fitting waste |
| `cp_survey_shared_service` | aperture_survey | conditional shared access/equipment availability service | rental contract, asset event and complete consumer ledger | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Record the actual supplied availability period and contract units; reconcile observed consumer activity and every beneficiary for the same asset period; preserve evidence distinguishing availability from active operation; collect this node's own actual records before allocation Aggregation algorithm: Convert documented availability quantity to h; multiply by this node's beneficiary share once; sum attributable service hours and divide by A; do not add invoice-wide service repeatedly or separately add burdens already included by supplier Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h | Each asset/service period and change of consumers | Complete aperture_survey participation within the contracted availability period | This node plus all other asset consumers, including outside-scope users | per 1 m2 reference flow | Supplier contract/invoice; asset logs; exact unit conversion; all-consumer shares sum to one; inclusion/exclusion reconciliation |
| `cp_cut_shared_service` | slab_cutting | conditional shared access/equipment availability service | rental contract, asset event and complete consumer ledger | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Record the actual supplied availability period and contract units; reconcile observed consumer activity and every beneficiary for the same asset period; preserve evidence distinguishing availability from active operation; collect this node's own actual records before allocation Aggregation algorithm: Convert documented availability quantity to h; multiply by this node's beneficiary share once; sum attributable service hours and divide by A; do not add invoice-wide service repeatedly or separately add burdens already included by supplier Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h | Each asset/service period and change of consumers | Complete slab_cutting participation within the contracted availability period | This node plus all other asset consumers, including outside-scope users | per 1 m2 reference flow | Supplier contract/invoice; asset logs; exact unit conversion; all-consumer shares sum to one; inclusion/exclusion reconciliation |
| `cp_fit_shared_service` | fit_acceptance | conditional shared access/equipment availability service | rental contract, asset event and complete consumer ledger | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Record the actual supplied availability period and contract units; reconcile observed consumer activity and every beneficiary for the same asset period; preserve evidence distinguishing availability from active operation; collect this node's own actual records before allocation Aggregation algorithm: Convert documented availability quantity to h; multiply by this node's beneficiary share once; sum attributable service hours and divide by A; do not add invoice-wide service repeatedly or separately add burdens already included by supplier Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h | Each asset/service period and change of consumers | Complete fit_acceptance participation within the contracted availability period | This node plus all other asset consumers, including outside-scope users | per 1 m2 reference flow | Supplier contract/invoice; asset logs; exact unit conversion; all-consumer shares sum to one; inclusion/exclusion reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area_calc | accepted_insulation_service | For each finally accepted aperture, net_area = measured geometric area - recorded noninsulated deductions; A = sum(net_area); reference amount = A / A = 1 m2; A must be positive. | accepted_clear_dimensions; noninsulated_deductions; visible_gap_check; compression_check; rejection_area; rework_status; acceptance_date; approver; cp_fit_area | A; accepted_insulation_service | |
| survey_area_calc | supplied_frame_interface; prepared_frame_interface | survey_area = sum surveyed net cavity areas; ready_area = sum surveyed net cavity areas with accepted ready state; normalize each by A. | clear_width; clear_height; irregular_geometry_dimensions; noninsulatable_area; ready_state; cp_survey_area; A | survey_area / A; ready_area / A | |
| cut_stock_calc | delivered_stone_wool; cut_reusable_exit | gross_slab_draw = opening_stock + receipts - closing_stock; cut_reusable_exit_mass = supplier_returns + external_handover; diagnostic_net_use = opening_stock + receipts - closing_stock - supplier_returns - external_handover. Returns and external handovers are mutually exclusive and excluded from closing stock. Physical gross input is not reduced again when reusable exits are output cards. Normalize gross_slab_draw and cut_reusable_exit_mass separately by A. | opening_stock; receipts; closing_stock; supplier_returns; external_handover; cp_cut_material; A | gross_slab_draw / A; cut_reusable_exit_mass / A; diagnostic_net_use | |
| cut_mass_calc | cut_slabs_transfer; cut_wool_waste; `cut_packaging_waste_film`; `cut_packaging_waste_board` | Sum cut_piece_mass for wool_transfer_id into cut_transfer_mass; separately sum unusable wool plus cutting-owned captured dust into cut_waste_mass; separately sum discarded packaging by actual material into cut_packaging_mass. Normalize each sum by A; usable internal recuts are not new external input/output. | cut_piece_mass; wool_waste_mass; packaging_mass; wool_transfer_id; event_id; cp_cut_material; A | cut_transfer_mass / A; cut_waste_mass / A; cut_packaging_mass / A |  |
| fit_feed_calc | ready_frame_feed; cut_wool_feed | frame_feed_area = sum actual frame transfers; fit_feed_mass = sum actual cut-piece transfers; normalize each separately by A and reconcile each to the paired source card without fixing either to 1. | frame_feed_area; feed_mass; frame_transfer_id; wool_transfer_id; cp_fit_material; A | frame_feed_area / A; fit_feed_mass / A | |
| fit_exit_calc | actual exchanges required by `refine_retention_accessories`; fit_reusable_exit; fit_wool_waste | accessory_mass = accessory_opening + accessory_receipts - accessory_closing - accessory_returns - accessory_external_handover, after actual instruction activation; fit_reusable_mass = sum external reusable exits; fit_waste_mass = sum unusable removals and fitting-owned captured cleanup residue. Normalize each by A; refitting within the lot is an internal loop and each removed portion has one disposition. accessory_returns and accessory_external_handover are mutually exclusive and neither includes accessory_closing; accessory_mass includes actual discarded accessory losses, recorded once through actual exchanges required by `refine_fit_accessory_packaging_waste` rather than subtracted again. | accessory_opening; accessory_receipts; accessory_closing; accessory_returns; accessory_external_handover; accessory_identity; accessory_instruction; removal_event; reuse_or_discard; fit_reusable_mass; fit_waste_mass; cp_fit_material; A | accessory_mass / A; fit_reusable_mass / A; fit_waste_mass / A |  |
| electricity_calc | survey_electricity; cutting_electricity; fitting_electricity | For each interval, meter_to_kWh_factor = 1 for kWh, 1/1000 for Wh and 1/3.6 for MJ; any other meter unit needs a documented conversion factor and conversion_evidence. corrected_energy = (meter_end - meter_start) * multiplier * meter_to_kWh_factor; derive allocation_share = this consumer weight / sum(all consumer weights) from consumer_weights and actual_runtime/observed_power or retain the documented direct submeter assignment. Under the weight method, sum(all consumer weights) must be positive; zero or unknown total weights or missing consumers require a data gap or another reviewed attribution basis, never 0/0 or automatic share 1. Direct submeters may use an explicit independent node assignment without undefined weight division. consumer_energy = corrected_energy * allocation_share; sum consumer_energy for the respective node into survey_energy, cut_energy or fit_energy and divide its numerator by A. All consumer shares, including outside-scope consumers, sum to one. Use direct submeter readings where available; measured runtime/power weights are fallback evidence, not additional energy. | meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cp_survey_energy; cp_cut_energy; cp_fit_energy; A | survey_energy / A; cut_energy / A; fit_energy / A | |
| release_calc | actual exchanges required by `refine_cut_airborne_particles`; actual exchanges required by `refine_fit_airborne_particles` | For each independently identified substance/particle-size basis and actual release plane/air medium, calculate whole-event mass_kg = SUM(net_concentration_mg_per_m3_i * event_air_volume_m3_i * actual_uncaptured_fraction_i) / 1000000 over the complete disjoint event intervals i. Each event_air_volume_m3_i is the total air volume crossing that emission measurement plane for its interval, derived from supported total airflow and duration or an independently validated whole-event volume method; it is never merely the analytical sampled_air_volume. Concentration must represent that same full stream/time interval, with compatible temperature/pressure and wet/dry basis, substance/size definition and a documented background correction or justified nonapplicability. Retain sample volume as analytical QA only. Use actual_uncaptured_fraction_i = 1 only when evidence locates the concentration/volume at the actual uncaptured release plane after process capture; if measured before capture use only the evidenced same-event uncaptured fraction once. Do not correct post-capture measurements again or treat vacuum-collected waste as air release. Ambient/personal samples, a room volume, partial-period samples or a balance residual do not establish a whole-event emission; a sample volume may equal the event volume only if the actual emission-plane/full-stream/full-period coverage is demonstrated. For fugitive or nonuniform releases, alternatively retain a complete validated source-specific flux/dispersion or other event-total algorithm, its explicit activity coverage, factors and uncertainty; do not add alternative methods. Unknown or negative net concentration, missing intervals, undefined correction or unsupported extrapolation retains a method gap rather than zero or a fabricated emission. Sum actual event-total release masses by the same identity into cut_air_mass or fit_air_mass; these are raw kg for the matching material balance, then divide by A only at the final card. Each actual_uncaptured_fraction_i is a dimensionless evidenced fraction from 0 to 1; a missing or out-of-domain fraction is a method gap, not a clipped/default value. | cp_cut_air or cp_fit_air at its owning node; net_concentration_mg_per_m3_i; event_air_volume_m3_i; actual_uncaptured_fraction_i; concentration_interval_ids; complete event coverage; matched concentration/volume basis; supported background/capture method; calibration and uncertainty; or validated source-specific event-total algorithm | event-total mass_kg; cut_air_mass or fit_air_mass in raw kg before A normalization |  |
| mass_conversion_calc | delivered_stone_wool; cut_slabs_transfer; cut_wool_feed | Where actual weighing is unavailable, mass_kg = sum(actual piece volume derived in m3 from measured piece_dimensions or installed_piece_geometry * documented_density_kg_per_m3); retain dimensional records, offcut geometry, density source and uncertainty. Supplier pack mass is usable only for the actual declared grade and count. | piece_dimensions; installed_piece_geometry; grade; density_evidence; installed_density_evidence; documented_density_kg_per_m3; pack_mass; piece_count; cp_cut_material; cp_fit_material | material_mass_kg | |
| cut_balance_calc | delivered_stone_wool; cut_slabs_transfer; cut_reusable_exit; cut_wool_waste; actual exchanges required by `refine_cut_airborne_particles` | Check gross_slab_draw + opening_cut_wip = cut_transfer_mass + cut_reusable_exit_mass + cut_waste_mass + cut_air_mass + closing_cut_wip + unexplained_difference. Opening/closing intact-slab stock is distinct from cut-piece WIP. Where direct release evidence is absent, retain unknown release/difference as a data gap rather than zero or exact closure. Resolve material differences against measurement uncertainty; internal recutting is not an additional external feed or exit. | gross_slab_draw; opening_cut_wip; cut_transfer_mass; cut_reusable_exit_mass; cut_waste_mass; cut_air_mass; closing_cut_wip; cp_cut_material; cp_cut_air | cutting_mass_balance; unexplained_difference |  |
| fit_balance_calc | cut_wool_feed; fit_reusable_exit; fit_wool_waste; actual exchanges required by `refine_fit_airborne_particles` | Check fit_feed_mass + opening_wool_wip = installed_wool_mass + fit_reusable_mass + fit_waste_mass + fit_air_mass + closing_wool_wip + unexplained_difference. installed_wool_mass includes only wool in finally accepted apertures, obtained by traceable actual weighing or installed piece geometry times documented same-grade density for that accepted portion; exclude accessories. closing_wool_wip includes installed wool in unaccepted or rejected apertures that has not yet been removed, plus other end-of-period wool awaiting work, and excludes installed_wool_mass and all already recorded exits; assign each physical portion to one mutually exclusive pool. Refitting loops do not add new feed. Where release evidence is absent, retain unknown release/difference as a gap rather than claiming exact closure or zero. | fit_feed_mass; opening_wool_wip; installed_wool_mass; installed_piece_geometry; installed_density_evidence; fit_reusable_mass; fit_waste_mass; fit_air_mass; closing_wool_wip; cp_fit_material; cp_fit_air; aperture_id; final_acceptance_record; installed_acceptance_status | fitting_mass_balance; unexplained_difference |  |
| shared_service_calc | `survey_shared_access_service_platform`; `survey_shared_access_service_scaffold`; `cut_shared_access_service_platform`; `cut_shared_access_service_scaffold`; `fit_shared_access_service_platform`; `fit_shared_access_service_scaffold` | For each actual asset contract period, availability_hours = documented billed quantity times its traceable h conversion, or elapsed contracted seconds / 3600; never assume a working day equals 8 h. Compute each beneficiary weight from recorded actual use/activity on a declared basis; allocation_share = beneficiary weight / sum(all beneficiary weights). If all weights are zero or beneficiaries unknown, document another reviewed attribution basis or retain a data gap. Include outside-scope beneficiaries and assign unused availability burden explicitly. Node shared_hours = sum(availability_hours * allocation_share); normalize each node numerator by A. Supplier-included energy, setup/removal, maintenance or capital burden must not be added twice. | actual_equipment_identity; supplier_contract; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; cp_survey_shared_service; cp_cut_shared_service; cp_fit_shared_service; A | survey_shared_hours / A; cut_shared_hours / A; fit_shared_hours / A |  |

| accessory_waste_calc | actual exchanges required by `refine_fit_accessory_packaging_waste` | accessory_waste_total_mass = sum(accessory_waste_mass) + sum(accessory_packaging_waste_mass) by mutually exclusive actual material/event; exclude all wool waste, reusable exits and closing stocks; divide each resolved material numerator by positive same-lot A. | accessory_waste_mass; accessory_packaging_waste_mass; accessory_waste_event; accessory_waste_material; accessory_waste_custodian; accessory_waste_destination; cp_fit_material; A | accessory_waste_total_mass / A |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_fit | all product and waste rows | Verify actual material/state/destination identities before final dataset exchanges; a generic wool, asbestos-labelled translation or manufactured slab flow cannot represent the installation service. Material umbrellas require actual resolved exchanges. | Product delivery sheets; selected-system instructions; actual identity verification |
| geometry_quality | accepted area and transfers | Same lot and cavity ids connect surveyed ready geometry, actual frame handoff and final accepted area; no frame member, duplicate face, rejected work or purchased slab area in A. | cp_survey_area; cp_fit_material; cp_fit_area |
| material_reconciliation | slab cutting and fitting | Reconcile gross slab draw to cut transfers, reusable exits, wool waste and supported direct release, with WIP and measurement uncertainty; fitting feed reconciles to incorporated wool, WIP, reusable exits, waste and releases. Installed mass is an actual weighing or declared dimension-density diagnostic, not an added service output. | Stock and transfer ledger; piece geometry/density records; receiver receipts |
| complete_period | all nodes | Cover the entire named lot from starting survey to final cleanup, including failed cuts, fitting rework, changeovers and all relevant receipts/stock changes. Disclose missing events, imputed quantities and uncertainty. | Timestamped node records and acceptance chronology |
| shared_ownership | shared electricity and cleanup | Retain interval start/end, all consumers, weights, shares, ownership and bill inclusion. Record each physical event once even when multiple nodes reference its evidence. | Node meters; shared-event ledger; full consumer reconciliation |
| provisional_range_use | all screening ranges | Provisional reasoned screens are neither default inventory values nor factual bounds, performance thresholds or automatic acceptance/rejection criteria. Investigate outliers against raw records; establish empirical guardrails from independent reviewed lots. | Explicit range metadata; external or independently reviewed future reference sample |
| `refine_survey_shared_access_service` | `survey_shared_access_service_platform`; `survey_shared_access_service_scaffold` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional supplied shared equipment/access service, actual asset and service contract resolved from foreground records. Only when an actual rented or externally supplied access/equipment service is used by this node; actual service type and included energy/capital responsibilities must be declared. The time basis is contracted availability, not assumed active tool time. Resolve each actual service and supplier dataset before final exchanges; no universal platform/scaffold identity is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other rented-equipment functions and actual different native references require exact complete service identity/property/unit and original all-beneficiary allocation; no default platform/scaffold occurrence. | `cp_survey_shared_service`; actual independent records and identity/unit evidence |
| `refine_cut_shared_access_service` | `cut_shared_access_service_platform`; `cut_shared_access_service_scaffold` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional supplied shared equipment/access service, actual asset and service contract resolved from foreground records. Only when an actual rented or externally supplied access/equipment service is used by this node; actual service type and included energy/capital responsibilities must be declared. The time basis is contracted availability, not assumed active tool time. Resolve each actual service and supplier dataset before final exchanges; no universal platform/scaffold identity is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other rented-equipment functions and actual different native references require exact complete service identity/property/unit and original all-beneficiary allocation; no default platform/scaffold occurrence. | `cp_cut_shared_service`; actual independent records and identity/unit evidence |
| `refine_cut_packaging_waste` | `cut_packaging_waste_film`; `cut_packaging_waste_board` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional material-resolved packaging waste umbrella. State: Actual film, board or other packaging separated without wool double counting. Destination: Actual waste receiver by material and treatment route. Condition: Only actual discarded packaging; retained returnable packaging remains stock. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other materials/mixed packaging/contamination/receiver streams need independent exact records; do not copy mixed total or wool included mass. Retained returnable packaging stays stock. | `cp_cut_material`; actual independent records and identity/unit evidence |
| `refine_cut_airborne_particles` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional direct release umbrella. State: Measured species or mineral composition, particle-size basis and air receiving medium. Destination: Air compartment actually reported. Condition: Only independently quantified direct releases with substance or mineral composition, particle size and receiving medium evidence. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_cut_air`; actual independent records and identity/unit evidence |
| `refine_retention_accessories` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional actual material-resolved accessory umbrella. State: Actual accessory chemistry, form and fastening role recorded. Destination: Retained insulation assembly. Condition: Only when the selected slab/system instructions and actual installation require retention; never presumed for ordinary friction fitting. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Only actual selected slab/system instructions and real installation activate specific accessory SKU/function/oneunit; retain stock/outward usable returns/losses without double subtraction. | `cp_fit_material`; actual independent records and identity/unit evidence |
| `refine_fit_shared_access_service` | `fit_shared_access_service_platform`; `fit_shared_access_service_scaffold` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional supplied shared equipment/access service, actual asset and service contract resolved from foreground records. Only when an actual rented or externally supplied access/equipment service is used by this node; actual service type and included energy/capital responsibilities must be declared. The time basis is contracted availability, not assumed active tool time. Resolve each actual service and supplier dataset before final exchanges; no universal platform/scaffold identity is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other rented-equipment functions and actual different native references require exact complete service identity/property/unit and original all-beneficiary allocation; no default platform/scaffold occurrence. | `cp_fit_shared_service`; actual independent records and identity/unit evidence |
| `refine_fit_accessory_packaging_waste` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Only when actual retention accessories or their packaging produce discarded material. Separate each actual accessory composition and packaging material with mass, custodian and destination; reusable returns and closing stock are excluded. This conditional umbrella excludes wool waste and direct environmental release. Actual accessory and packaging composition/state remain unknown; expand material-resolved exchanges before publication. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual separate accessory whole product/contaminated composite and packaging material/receiver quantities under fitting owner, excluding wool waste, usable return, stock and direct environmental release. | `cp_fit_material`; actual independent records and identity/unit evidence |
| `refine_fit_airborne_particles` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional direct release umbrella. State: Measured species or mineral composition, particle-size basis and air receiving medium. Destination: Air compartment actually reported. Condition: Only independently quantified direct releases with substance or mineral composition, particle size and receiving medium evidence. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_fit_air`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| quality_whole_event_release | cp_cut_air; cp_fit_air; release_calc; cut_balance_calc; fit_balance_calc | Whole-event air-release mass requires release_calc coverage and method evidence at the actual release plane: representative concentration, compatible complete-event volume/time basis, justified background/capture treatment and independently supported uncertainty. A complete set of sample concentration/volume fields alone is insufficient. Missing total-flow or validated extrapolation leaves air-release quantity and the affected material closure incomplete, never zero or assumed vapour/dust. | Actual emission-plane and complete-event interval register; calibrated volume/concentration measurements or validated event-total model; uncertainty and correction evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| service_gate | reference product | Check positive net A, actual pre-enclosure acceptance and declared slab/system qualifiers; output only accepted insulated cavity area. A manufactured insulation material flow is incompatible with this service gate. | `rockwool-thermal-frame-slab-installation-2025` |
| aperture_and_fit | aperture_survey; fit_acceptance | Check actual clear-aperture measurements, gap/compression inspection and final disposition of every rejected aperture. Rework adds real burdens and cannot inflate A. | `rockwool-thermal-frame-slab-installation-2025` |
| transfer_and_stock | slab_cutting; fit_acceptance | Reconcile paired frame_transfer and wool_transfer ids, units, quantities and states. Check stock terms, exclusive returns/external handovers, WIP and mass balance. Do not subtract returned mass twice across gross physical and diagnostic net accounts. | |
| condition_validation | actual exchanges required by `refine_retention_accessories`; all conditional rows | Require actual activation evidence; documented absence permits zero, missing evidence is a data gap. Resolve actual accessory/packaging material and direct-release identities before final exchange creation. | `rockwool-thermal-frame-slab-installation-2025` |
| node_ownership | all nodes | Check production-lot and period coverage, cut/fit rejection paths, cleanup ownership and shared-meter shares across all consumers. Reconcile shares to one and prevent repeated whole-site or supplier-included burdens. |  |
| validate_release_event_coverage | cp_cut_air; cp_fit_air; release_calc; cut_balance_calc; fit_balance_calc | Verify release_event_id/interval completeness and that each concentration represents its matching total event-air volume at one actual release plane on a compatible basis. Confirm capture/background corrections once, valid model or full-stream/full-period evidence, and raw kg to closure before final A normalization. Reject sample-mass-as-event-mass, personal/ambient samples without validated source extrapolation, unsupported zero/default or an unexplained material deficit as release. |  |
| thermal_claims | reference qualifiers | Check thickness, density and conductivity declaration conditions. A slab lambda or its thickness/lambda ratio cannot alone justify whole-wall thermal performance or building-life claims. | |
| range_validation | all flow cards | Verify quantities against original records and declared algorithms. Explain provisional-screen outliers; do not replace missing records with a range midpoint or label these reasoned intervals observed data. | |
| `atomization_survey_shared_access_service_complete` | `survey_shared_access_service_platform`; `survey_shared_access_service_scaffold` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_survey_shared_access_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_cut_shared_access_service_complete` | `cut_shared_access_service_platform`; `cut_shared_access_service_scaffold` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_cut_shared_access_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_cut_packaging_waste_complete` | `cut_packaging_waste_film`; `cut_packaging_waste_board` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_cut_packaging_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_cut_airborne_particles_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_cut_airborne_particles` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_retention_accessories_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_retention_accessories` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_fit_shared_access_service_complete` | `fit_shared_access_service_platform`; `fit_shared_access_service_scaffold` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_fit_shared_access_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_fit_accessory_packaging_waste_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_fit_accessory_packaging_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_fit_airborne_particles_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_fit_airborne_particles` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for the declared installation service; downstream process and lifecyclemodel projections retain the same boundary and accepted-area reference |
| downstream_use | secondary_dataset; background_dataset, only when the supplied service scope and quality match the receiving study |
| allowed_use | Site/period-specific friction-fit unfaced semi-rigid stone wool installation into equivalent accepted open wall-frame cavities with disclosed upstream inputs and downstream treatment ownership |
| excluded_use | Generic all-insulation average; manufactured wool inventory; complete wall/building thermal performance; asbestos, glass-wool/foam/blown systems; frame construction, enclosure or exterior render |
| required_metadata | PCR id/version; geography/site/lot/period; net-area and acceptance records; incoming frame condition; slab identity and grade; thickness/density/conductivity bases; manufacturer instruction edition; equipment/electricity mix; conditional accessories; stock and transfer ledger; waste receivers/routes; upstream and downstream dataset ownership |
| required_quality_disclosure | Verified and unresolved identities; measured versus calculated records; coverage and data gaps; conversion uncertainty; provisional screening status; rework and rejected work; shared allocations; excluded transport/treatment/capital responsibilities; suitability limits |
| update_trigger | Changed slab system, frame interface, installation/retention route, handover gate, source instructions, electricity or waste route, evidence quality or accepted identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `rockwool-thermal-frame-slab-installation-2025` | handbook | ROCKWOOL, Thermal Frame Slab 32 installation guide, issue 23.10.2025, version 2.00, pages 1–3. https://www.rockwool.com/syssiteassets/rw-uk/downloads/installation-guides/thermal-frame-slab-32-installation-guide.pdf | Current route evidence: frame checks, actual aperture measurement, cutting and friction fitting, gap inspection and vacuum cleanup; named-product dimensions and allowances remain product-specific, not universal quantity defaults |
