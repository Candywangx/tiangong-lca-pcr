---
pcr_id: pcr.constructions-and-construction-services.construction-services.excavating-and-earthmoving-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mechanical excavation of uncontaminated soil

## 1. Scope and Applicability

This PCR covers contractor-performed mechanical excavation of characterized uncontaminated soil at an accessible cleared construction site. It includes digging, geometry trimming, and loading or on-site relocation only to the extent declared in the contract. The service ends when the excavation geometry is accepted and the displaced soil is transferred to the declared stockpile or vehicle custodian. Scope excludes rock blasting, contaminated-soil remediation, initial site clearance, embankment compaction, foundation construction, shoring works and off-site soil transport/treatment after handover. If dewatering, shoring or other temporary works are needed, declare a linked separately quantified package; disclose its owner and include it in whole-project aggregation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.excavating-and-earthmoving-services |
| classification_refs | cpc:3.0:54330 |
| covered_products | Conventional mechanical uncontaminated-soil excavation service at declared site handover |
| excluded_products | Soil commodity; whole constructed asset; rock blasting; remediation; clearance; embankment; foundations; post-handover off-site haulage |
| representative_product | Mechanical excavation of uncontaminated soil |
| production_route | Job-lot/shift mechanical digging and trimming, declared loading/on-site movement, inspection and handover |
| market_state | Accepted construction service measured by original-position excavation volume |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mechanical excavation of uncontaminated soil |
| How much | 1 m3 of accepted original-position excavation void |
| How well | Declared geometry/tolerances and soil class; acceptance signed against the project specification |
| How long or cycle | One completed excavation and handover event; no building service life or recurring excavation cycle |
| reference_flow_link | `accepted_excavation_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted mechanical soil excavation service |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | site and period; soil class and contamination characterization; excavation depth and geometry/tolerances; survey and acceptance method; equipment and fuel route; loading/on-site relocation responsibility and distance; handover custodian; soil reuse/waste destinations; dewatering/shoring ownership |

Qualifiers must be retained in the foreground package. Physical volume is the activity measure for this service, not a claim that excavated loose soil has identical volume.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_volume` | reference product | Volume | m3 | Use accepted original-position volume; retain design revisions and surveyed limits. Exclude unauthorized overbreak and count each accepted void once. |
| `soil_volume_state` | reusable_soil_handover; waste_soil_handover | Mass | kg | Keep bank, loose and compacted states distinct. Any mass/volume or moisture conversion requires measured compatible density, moisture and state; never assume a universal bulking factor. |
| `emission_basis` | `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide`; soil_dust_pm25_air; soil_dust_coarse_air | Mass | kg | Preserve chemical species, NOx reporting basis and aerodynamic particle size; inclusive PM10 and PM2.5 cannot both be additive totals. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed, cleared, accessible site with characterized uncontaminated native soil and approved excavation design |
| starting_condition_role | Initial worksite state, not a purchased native-soil input or zero-burden whole-project claim |
| product_classification_scope | Narrow mechanical soil excavation service within CPC 54330; does not exhaust earthmoving services |
| recursive_input_rule | A subcontracted service of this same category is an upstream service input with disclosed boundary; subdivide actual responsibilities and avoid repeating the same excavation output or operating burdens |
| upstream_dataset_requirement | Link fuel, electricity, water, plant-use and mobilization supply datasets with technology, geography, period and boundary compatibility; parent project links clearance, shoring and downstream soil fate separately |
| disclosure | Declare every excluded package owner, starting soil/state, actual custodian and soil destination; missing records remain gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers contractor-performed mechanical excavation of characterized uncontaminated soil at an accessible cleared construction site. It includes digging, geometry trimming, and loading or on-site relocation only to the extent declared in the contract. The service ends when the excavation geometry is accepted and the displaced soil is transferred to the declared stockpile or vehicle custodian. Scope excludes rock blasting, contaminated-soil remediation, initial site clearance, embankment compaction, foundation construction, shoring works and off-site soil transport/treatment after handover. If dewatering, shoring or other temporary works are needed, declare a linked separately quantified package; disclose its owner and include it in whole-project aggregation. |  |
| `boundary_service` | excavate | Collect digging, trimming, idle/rework energy and declared loading/on-site movement through acceptance and material handover. This removal responsibility is separate from subsequent fill placement, treatment and foundation production. | `fhwa-fp24-original-position` |
| `boundary_material` | excavate | Native soil is the source context. Keep a physical movement ledger with reusable soil, waste, retained stock and dust; do not create an arbitrary purchased soil input or equate material handover with the service reference. |  |
| `boundary_shared` | excavate | Include attributable plant use, mobilization and shared support. Enumerate this node and every other consuming work-package/node and service period for shared excavators, loaders, haul plant, water supply and mobilization journeys. Retain one event owner. |  |
| `boundary_emissions` | excavate | Include actual direct exhaust and activity-specific soil dust through handover; water runoff and maintenance waste require actual composition and destination. Do not infer absence from unmeasured emissions. | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `excavate` | Mechanical soil excavation and acceptance | required | For every included excavation work lot | Independent removal service including declared internal movement and rework loop | `accepted_excavation_service` |

Production mode is a discrete work lot indexed by site, geometry and shift, not a continuous commodity factory. Failed geometry/levels trigger correction within excavate; extra digging, idle time and rehandling remain burdens of the accepted lot. Unauthorized overbreak is excluded from accepted volume. Soil that fails intended reuse is redirected from reusable_soil_handover to waste_soil_handover under the same transfer id. Cleaning and maintenance events and shared-run movements retain asset, shift and owner links.

### Process: Mechanical soil excavation and acceptance (`excavate`)

#### Inputs

##### Product flows

###### Diesel fuel supplied to excavation machinery (`excavation_diesel`)

Conditional on fossil-diesel-powered equipment: fossil diesel delivered to the excavator and declared on-site loading/relocation equipment. Separate any biodiesel blend and retain its composition.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect fuel issued less returns and tank-stock increase; attribute by machine work logs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity supplied to powered equipment (`excavation_electricity`)

Conditional on electric excavators, pumps or other equipment operating within this package. Identify grid or generator supply; generator fuel and direct exhaust must have one owner.

- Selected flow: Electricity supplied to powered equipment
- Flow property / unit: Energy / kWh
- Amount rule: Meter actual attributable electricity, excluding quantities already embodied in a purchased service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Excavator use excluding operating energy (`plant_use_excavator`)

Record only this independently identified excavator use excluding operating energy at its actual state and supply or receiving gate. Actual excavator use with a compatible complete-life plant-use dataset referenced to h. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Excavator use excluding operating energy
- Flow property / unit: Duration / h
- Amount rule: Independently log this excavator asset productive, idle and rework hours; attribute actual shared use once and normalize by accepted original-position excavation volume.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plant`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Loader use excluding operating energy (`plant_use_loader`)

Record only this independently identified loader use excluding operating energy at its actual state and supply or receiving gate. Actual loader use with compatible h-referenced plant-use scope, separate from excavator use. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Loader use excluding operating energy
- Flow property / unit: Duration / h
- Amount rule: Independently log the actual loader asset productive, idle and rework hours; exclude operation already inventoried as fuel/electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plant`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### On-site haul-plant use excluding operating energy (`plant_use_onsite_haul_plant`)

Record only this independently identified on-site haul-plant use excluding operating energy at its actual state and supply or receiving gate. Actual on-site haul equipment used inside the declared handover boundary with compatible h-referenced plant service. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: On-site haul-plant use excluding operating energy
- Flow property / unit: Duration / h
- Amount rule: Independently log actual haul-plant asset hours by task/shift and actual consumers; do not include off-site soil haul after handover or duplicate fuel/mobilization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plant`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Transport of excavation plant to and from site (`plant_mobilization`)

Transport service for the machinery itself, including declared return/empty-leg responsibility. Off-site haulage of excavated soil is a different service and is excluded after the handover gate.

- Selected flow: Transport of excavation plant to and from site
- Flow property / unit: Mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931`; Unit of kg*km `3620148f-c5db-48ce-9065-a10092089aca` / t*km
- Amount rule: Collect moved plant mass and loaded distance; assign supplier-accounted empty travel once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mobilization`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: t*km
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Water supplied for dust suppression (`dust_water`)

Conditional supplied water applied to excavation and the declared on-site movement area; direct abstraction requires a separate actual elementary resource exchange. Do not invent a water source.

- Selected flow: Water supplied for dust suppression
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Meter deliveries or tank volumes and subtract unused returns; distinguish evaporation, soil retention and collected runoff.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fhwa-fp24-dust-water`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.5
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mechanical soil excavation service (`accepted_excavation_service`)

Construction service completed at surveyed design geometry, with displaced soil transferred to the declared next custodian. The output is service performed on 1 m3 in-situ soil, not 1 m3 of soil sold.

The accepted lot total divided by that same accepted total gives the service normalization identity of one; 1 m3 is the declaration convention, not an observed lot size.

- Selected flow: Accepted mechanical soil excavation service
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `fhwa-fp24-original-position`
- Range: Exact declared service normalization
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`

###### Uncontaminated excavated soil for confirmed reuse (`reusable_soil_handover`)

Conditional physical handover of loose soil with documented recipient, specification and reuse destination. It is a material-accounting output distinct from the paid excavation service; never also report the same soil as waste.

- Selected flow: Uncontaminated excavated soil for confirmed reuse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh transferred reusable soil; retain moisture basis and reconcile against excavated stock and other destinations.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_soil`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Excavated soil handed over as waste (`waste_soil_handover`)

Conditional uncontaminated surplus or unsuitable soil legally transferred to a waste custodian. Soil contamination discovered during works triggers separate scope review, not silent inclusion in this PCR.

- Selected flow: Excavated soil handed over as waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh waste handovers and record classification, transfer id and destination; do not assign a fixed waste percentage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_soil`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Spent lubricating oil sent to treatment (`spent_lubricating_oil_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Measure the actually removed lubricating-oil waste; retain contamination and receiving-treatment records. Exclude oil retained in equipment or already covered by the plant-service lifecycle.

- Selected flow: Spent lubricating oil sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure each actual waste separately and identify whether upstream plant service already owns its treatment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Spent oil filter sent to treatment (`spent_oil_filter_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Keep the actual filter assembly and residual-oil composition together where that is its real dispatch state; do not also count the same residual oil as a separate exit.

- Selected flow: Spent oil filter sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure each actual waste separately and identify whether upstream plant service already owns its treatment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Oil-contaminated absorbent sent to treatment (`oil_contaminated_absorbent_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Record the actual absorbent substrate, oil content, hazard state and receiver; the carrier and contained oil are not additive duplicate waste exchanges.

- Selected flow: Oil-contaminated absorbent sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure each actual waste separately and identify whether upstream plant service already owns its treatment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Captured sediment-laden water sent to treatment (`captured_sediment_water_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Use the real captured mixture at custody transfer, with solids/water composition and treatment destination. It is distinct from direct environmental discharge and from separately dispatched dry sediment.

- Selected flow: Captured sediment-laden water sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure each actual waste separately and identify whether upstream plant service already owns its treatment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


##### Elementary flows

###### Fossil carbon dioxide to air from on-site combustion (`fossil_co2_air`)

Conditional direct fossil carbon dioxide emitted to outdoor air by fuel-consuming equipment within the excavation responsibility. Biogenic carbon dioxide is separately identified if a blend is used.

- Selected flow: carbon dioxide (fossil), to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Calculate from attributable actual fossil fuel burned and a documented fuel-carbon/oxidation method or compatible engine emissions model; retain factor units and provenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-exhaust`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Carbon monoxide from actual excavation-engine combustion to air (`engine_species_air_carbon_monoxide`)

Record only this independently identified carbon monoxide from actual excavation-engine combustion to air at its actual state and supply or receiving gate. Actual source reports carbon monoxide as that substance with compatible engine/activity/control/air-medium evidence. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Carbon monoxide from actual excavation-engine combustion to air
- Flow property / unit: Mass / kg
- Amount rule: Independently use measured CO mass or a documented applicable CO-specific engine method for the actual activity; no fraction of a parent pollutant total.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-exhaust`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Nitrogen monoxide from actual excavation-engine combustion to air (`engine_species_air_nitrogen_monoxide`)

Record only this independently identified nitrogen monoxide from actual excavation-engine combustion to air at its actual state and supply or receiving gate. Actual source identifies NO itself; a NOx-as-NO2 record is not activation evidence. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Nitrogen monoxide from actual excavation-engine combustion to air
- Flow property / unit: Mass / kg
- Amount rule: Independently measure/model actual NO using a valid NO-specific method; do not derive a NO/NO2 split from an aggregate NOx result.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-exhaust`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Nitrogen dioxide from actual excavation-engine combustion to air (`engine_species_air_nitrogen_dioxide`)

Record only this independently identified nitrogen dioxide from actual excavation-engine combustion to air at its actual state and supply or receiving gate. Actual source identifies NO2 substance; distinguish actual NO2 from NOx reported on an NO2-equivalent basis. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Nitrogen dioxide from actual excavation-engine combustion to air
- Flow property / unit: Mass / kg
- Amount rule: Independently measure/model actual NO2 species mass; retain an equivalent-reporting basis as unresolved speciation unless supported, never convert it to a physical NO2 exchange by naming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-exhaust`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Sulfur dioxide from actual excavation-engine combustion to air (`engine_species_air_sulfur_dioxide`)

Record only this independently identified sulfur dioxide from actual excavation-engine combustion to air at its actual state and supply or receiving gate. Actual method/source reports SO2 with compatible fuel and engine/control basis. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Sulfur dioxide from actual excavation-engine combustion to air
- Flow property / unit: Mass / kg
- Amount rule: Independently measure/model SO2 mass with actual applicable activity and factor units; no guessed sulfur fraction or generic SOx split.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-exhaust`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Soil dust particles at or below 2.5 micrometres to air (`soil_dust_pm25_air`)

Conditional fugitive mineral soil dust with aerodynamic diameter at or below 2.5 micrometres released to outdoor air during digging, transfer and declared site travel. Excludes engine exhaust and post-handover activities.

- Selected flow: particles (PM2.5), to air unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use measured emissions or an applicable operation-specific dust model with actual moisture, silt, activity, wind and control records; do not convert TSP to PM2.5 without a supported fraction.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-ap42-construction-dust`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Soil dust particles above 2.5 and at or below 10 micrometres to air (`soil_dust_coarse_air`)

Conditional coarse fugitive mineral dust to outdoor air, disjoint from the fine fraction. If the method reports inclusive PM10, use a supported paired fine estimate before subtracting; otherwise retain the reported basis without double counting.

- Selected flow: particles (PM2.5 - PM10), to air unspecified `08a91e70-3ddc-11dd-9501-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect or model the actual coarse fraction with the same activity boundary and control assumptions as fine dust.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-ap42-construction-dust`
- Range: Provisional author screening estimate; replace with reviewed evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

Provisional ranges are broad author screening aids and are neither measured values nor allowed-zero defaults. For conditional rows, use recorded actual occurrence; unknown is not zero. A result outside a provisional range prompts investigation and evidence review, not suppression. Umbrella ranges apply separately to each concrete exchange and are not additive universal totals.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | excavate | Subdivide by work package and measured activity first. When metering cannot separate shared fuel, water or plant periods, allocate the event using documented physical machine-hours/load or delivered water; list every consumer and ensure shares sum to one. Monetary contract value is not a default physical driver. |  |
| `allocation_mobilization` | plant_mobilization; `plant_use_excavator`; `plant_use_loader`; `plant_use_onsite_haul_plant` | Assign each plant journey and shared plant-support period once across its actual consuming nodes and jobs using the documented service-period plant-hours. A supplier plant dataset that includes fuel, transport or maintenance must be reconciled with the separate cards before linking. |  |
| `allocation_rework` | excavate | Keep failed-geometry correction, repeated handling and idle burdens with the accepted work lot; never count a rejected pass as another accepted service. Record any separately authorized design change and its new acceptance boundary. |  |
| `allocation_soil` | reusable_soil_handover; waste_soil_handover | This narrowed package is purchased to provide excavation service; displaced soil is an accompanying physical handover, not an automatic credited co-product. Retain excavation burdens on service with no avoided-fill/disposal credit. If evidence establishes independently marketed soil co-production, review that case explicitly and disclose an alternative allocation before use; do not silently transfer burdens. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules


Maintain complete maintenance/runoff collection even for an actual waste not named by a conditional card: identify it by material, state, hazard and destination, measure its own quantity and require its own concrete exchange before dataset completion. Plant-service-included treatment has one owner. Existing provisional screens remain replaceable per-exchange author guidance, not measured yields or aggregate waste limits.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `excavate` | accepted service | Survey and acceptance file | work-package id; lot id; original and final survey; design limits; accepted volume; exclusions; date; approver | Survey pre/post surfaces or traceable cross-sections; reconcile approved geometry and signed acceptance, exclude unauthorized overbreak and repeated passes. | m3 | each accepted lot | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | survey control; design revision; signed acceptance |
| `cp_energy` | `excavate` | fuel and electricity | Fuel and meter ledger | asset; fuel type; meter readings; issues; returns; stocks; operating/idle/rework time; all consuming packages; period; burned_fuel_mass_kg; fuel_opening_kg; fuel_issued_kg; fuel_returned_kg; fuel_closing_kg; noncombusted_waste_kg; uncontained_release_kg; other_evidenced_fuel_exit_kg; recovered_fuel_in_closing_kg; fuel_balance_gap_kg; burn_fate_method; burn_fate_evidence; burn_uncertainty | Use calibrated meters and delivery/stock reconciliation; partition shared equipment periods using measured activity and keep generator ownership explicit.  Distinguish actual fuel supplied/drawn from fuel burned. Independently measure combustion activity or reconcile the complete same-asset/shift stock and mutually exclusive noncombustion fates under fuel_fate_separation, retaining the applicable method, observations and uncertainty. Fuel discarded, returned, retained or released unburned is not exhaust activity; unknown losses remain a fuel-balance gap, not assumed combustion. | kg; kWh | each shift and delivery | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | meter calibration; invoices; asset-time reconciliation |
| `cp_plant` | `excavate` | plant use | Asset-time register | asset; model; shift; productive/idle/rework hours; all consumers; shared maintenance coverage; upstream dataset; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Log each machine by package and period, reconcile available hours and supplier coverage; identify other-site consumers. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h | each shift | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | asset logs; supplier boundary; allocation ledger |
| `cp_mobilization` | `excavate` | plant transport | Dispatch and mass record | journey id; plant mass; distance; loaded/empty legs; all users; attribution period; supplier boundary | Reconcile dispatch, route and mass records; attribute the one journey among actual users using documented plant-hours during its service period. | t*km | each journey | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | dispatch evidence; route trace; consumer ledger |
| `cp_water` | `excavate` | dust suppression | Water delivery and application log | source; meter/tank volume; returns; area; shift; application; runoff capture; other consumers | Meter actual supplied volume and assign only excavation-related application; record weather and whether water enters soil, air or captured waste. | m3 | each delivery and shift | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | meter checks; delivery tickets; application logs |
| `cp_soil` | `excavate` | soil handovers | Soil movement ledger | lot; transfer id; surveyed bank volume; loose volume; wet mass; moisture; density; reuse/waste status; recipient; destination; opening/closing stock | Weigh handovers and document moisture/density where converting volume; reconcile all destinations and retained stocks; classify each transfer once. | kg; m3 | each transfer and lot close | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | weighbridge calibration; recipient receipts; density/moisture tests |
| `cp_waste` | `excavate` | maintenance waste and captured runoff | Waste register | event id; asset; actual substance; composition; mass; moisture; producing shift; custodian; treatment; upstream ownership | Weigh or use traceable waste-transfer records; split every distinct waste and exclude upstream service-owned quantities. | kg | each event | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | waste tickets; composition; ownership reconciliation |
| `cp_emissions` | `excavate` | direct emissions | Activity and factor file | asset/activity; fuel; load; hours; engine class; pollutant/speciation; factor value/unit/source; receiving air; soil moisture/silt; meteorology; controls; uncertainty; burned_fuel_mass_kg; fuel_opening_kg; fuel_issued_kg; fuel_returned_kg; fuel_closing_kg; noncombusted_waste_kg; uncontained_release_kg; other_evidenced_fuel_exit_kg; recovered_fuel_in_closing_kg; fuel_balance_gap_kg; burn_fate_method; burn_fate_evidence; burn_uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Link measurements or compatible models to the same shifts and package; preserve species and size basis, document all units and applicability limits.  Distinguish actual fuel supplied/drawn from fuel burned. Independently measure combustion activity or reconcile the complete same-asset/shift stock and mutually exclusive noncombustion fates under fuel_fate_separation, retaining the applicable method, observations and uncertainty. Fuel discarded, returned, retained or released unburned is not exhaust activity; unknown losses remain a fuel-balance gap, not assumed combustion. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; method-specific activity units | each shift and changed model condition | whole lot including preparation, idle, corrections and closeout | declared site and package; disclose other consumers | per reference flow | method applicability; factor provenance; measurement QA; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | Divide each attributable lot total by the same accepted original-position volume to express it per reference flow; retain original units and the accepted-volume record. | attributable lot amount; accepted volume; cp_acceptance | exchange per reference flow |  |
| `soil_reconcile` | reusable_soil_handover; waste_soil_handover | Reconcile removed dry soil against dry-mass equivalents of all handovers, retained stock change and losses; document density/moisture and uncertainty rather than forcing loose volume equal to bank volume. | cp_soil; cp_emissions | physical movement reconciliation |  |
| `transport_activity` | plant_mobilization | Calculate loaded transport from plant tonnes times route kilometres; retain empty-leg treatment from the linked supplier service and the documented attribution share. | cp_mobilization | attributable transport service |  |
| `fuel_fate_separation` | excavation_diesel; fossil_co2_air; `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide` | Keep the supplied-fuel numerator separate from burned_fuel_mass_kg. For the same asset/shift and native kg basis, fuel draw = fuel_opening_kg + fuel_issued_kg - fuel_returned_kg - fuel_closing_kg, and reconcile draw to independently evidenced burned_fuel_mass_kg + noncombusted_waste_kg + uncontained_release_kg + other_evidenced_fuel_exit_kg + signed fuel_balance_gap_kg. Recovered fuel already in closing stock is not another exit or second deduction. A stock-derived combustion estimate is allowed only with independently evidenced complete exclusive noncombustion fates and documented uncertainty; an unexplained balance gap must not be assigned to combustion. Upstream burden of actual nonreturned discarded/lost fuel stays in the supply numerator. Fossil CO2 and fuel-based exhaust factors use only compatible burned-fuel activity and actual fossil share, not total net issue; a complete species factor and constituent/oxidation route are alternatives, not multiplied twice. Actual unburned waste/releases require separately identified exchanges at their real receiving route/medium before finalization; no occurred fate is silently omitted or assigned an invented UUID. Normalize each actual numerator once by the accepted lot volume. | cp_energy; cp_emissions; fuel_opening_kg; fuel_issued_kg; fuel_returned_kg; fuel_closing_kg; burned_fuel_mass_kg; noncombusted_waste_kg; uncontained_release_kg; other_evidenced_fuel_exit_kg; fuel_balance_gap_kg | Reconciled supply, combustion and noncombustion fate numerators |  |
| `direct_emissions` | fossil_co2_air; `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide`; soil_dust_pm25_air; soil_dust_coarse_air | Apply documented compatible measurement/model methods to attributable activity; retain the full equation, factor units, species/size basis and control assumptions in dataset evidence. No universal factor is prescribed. | cp_emissions; cp_energy; cp_soil | direct emission by substance and receiving medium | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_lot` | excavate | Use consistent lot/site/period and acceptance limits across all records, including rejected work and zero-occurrence evidence. | signed acceptance and shift/event ledger |
| `quality_identity` | all inventory rows | Resolve each actual exchange to a verified concrete flow, property and unit before final process publication; record unresolved identities and aggregation/speciation gaps. | identity verification and unit support |
| `quality_ranges` | all inventory rows | Replace provisional screening estimates with foreground records and reviewed evidence; disclose estimation method, missingness and uncertainty. | record completeness and independent reviewed reference evidence |
| `quality_upstream` | excavate | Disclose every supplier dataset boundary and excluded adjacent package owner to prevent whole-project burden gaps. | supplier declarations and parent-project boundary ledger |
| `refine_plant_use` | `plant_use_excavator`; `plant_use_loader`; `plant_use_onsite_haul_plant` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record machine-hours for the excavator, loader and on-site haul equipment. The linked upstream plant-use dataset must disclose machinery manufacture and maintenance coverage and exclude separately collected energy. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Any other actual plant, a genuinely bundled provider service or a dataset with another native reference must be independently refined to its actual identity and unique property/unit; never convert Count to h or add both views. | `cp_plant`; actual independent records and identity/unit evidence |
| `refine_engine_species_air` | `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella: resolve each reported substance such as carbon monoxide, nitrogen monoxide, nitrogen dioxide or sulfur dioxide separately to outdoor air. Preserve a reported NOx-as-NO2 basis without inventing a NO/NO2 split; missing speciation remains a data gap. Exhaust particulate must retain its actual size fraction, distinct from soil dust. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual engine substances, exhaust particle-size fractions and unresolved NOx reporting/speciation remain mandatory refinement blockers. The four named conditions are not an exhaustive or assumed-occurring roster. | `cp_emissions`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | accepted_excavation_service | Require one accepted service output linked to the reference, 1 m3 original-position basis and all qualifiers. Neither soil mass nor loose volume substitutes for this service. |  |
| `validate_transfers` | excavate | Reconcile every soil transfer id and destination once, retain stock change and losses, and check moisture/state conversion. Reuse and waste destinations for the same physical soil are mutually exclusive. |  |
| `validate_mode_rework` | excavate | Check lot/shift linkage for all inputs, outputs, changeover, cleaning and maintenance; retain rework fuel/hours while excluding repeated acceptance volume and unauthorized overbreak. |  |
| `validate_shared` | excavate | Check all consumers and periods, physical attribution shares and unique event ownership; reconcile plant-service, transport, fuel and maintenance boundaries against double counting. |  |
| `validate_emissions` | excavate | Require pollutant species/reporting basis, receiving air, compatible activity/model and non-overlapping particle fractions. Missing data must not be replaced by zero or a generic fixed identity. | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |
| `validate_completion` | all inventory rows | Require node-specific collection links, units, bilingual rule/card alignment and a current projection. Range excursions need investigation; unresolved identities and unsupported conversions require explicit incomplete coverage. |  |
| `atomization_plant_use_complete` | `plant_use_excavator`; `plant_use_loader`; `plant_use_onsite_haul_plant` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_plant_use` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_engine_species_air_complete` | `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_engine_species_air` with actual records; unresolved required expansion blocks the dataset. | `epa-nonroad-exhaust` |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground contractor excavation-service data package |
| downstream_use | Construction process and lifecyclemodel projection, linked to parent work packages |
| allowed_use | Declared mechanical excavation of uncontaminated soil with compatible geometry, site and handover |
| excluded_use | Generic whole earthworks/building dataset; soil manufacturing; remediation/blasting; unsupported service life or avoided-disposal claims |
| required_metadata | Required reference qualifiers; job lot; survey/acceptance; all responsible packages; all upstream boundaries; route and soil destinations |
| required_quality_disclosure | Measured/estimated shares; provisional ranges; unresolved UUIDs/supports; emission speciation; missing soil records; uncertainty; validation performed/skipped |
| update_trigger | Changed soil class/contamination, equipment, electricity/fuel route, handover, scope, survey method, evidence or upstream coverage |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fhwa-fp24-original-position` | official_guidance | FHWA FP-24 (2024), sections 109 and 204.15–204.16; https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | Original-position measurement and acceptance interface; applied by analogy to this narrower service, not adoption of every roadwork item |
| `fhwa-fp24-dust-water` | official_guidance | FHWA FP-24 (2024), section 158; https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | Conditional dust-water responsibility and delivered-volume measurement |
| `epa-ap42-construction-dust` | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Activity-specific fugitive dust drivers and particle reporting limitations; no universal factor adopted |
| `epa-nonroad-exhaust` | official_guidance | US EPA Nonroad Engines and Air Pollution, EPA420-F-94-003 (1994); https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009Z11.TXT | Nonroad combustion emission categories; not a quantity factor or species split |
| `fhwa-earthwork-representation-2025` | official_guidance | FHWA CFLHD Earthwork Representation: Grading Summaries and Mass Haul Diagrams (cover April 2025), pages 2–7; https://highways.fhwa.dot.gov/federal-lands/design/tools/cfl/earthwork-representation-guide.pdf | Earthwork states, geotechnical evidence, movement and survey interfaces; no fixed swell value adopted |
