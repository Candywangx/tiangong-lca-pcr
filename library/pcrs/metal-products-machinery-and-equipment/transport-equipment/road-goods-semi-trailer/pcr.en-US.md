---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.road-goods-semi-trailer
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Complete steel-frame hardwood-platform road goods semi-trailer manufacturing

## 1. Scope and Applicability

Manufacture of complete new non-self-loading/non-self-unloading straight steel-frame hardwood-platform road goods semi-trailers: site frame fabrication, declared finishing, hardwood deck fitting, purchased running gear/coupling/support and braking/lighting integration, factory acceptance. Declare one exact model/VIN and released configuration. This narrower boundary within CPC49229 does not cover every trailer type.

Exclude full trailers, agricultural self-loading/unloading trailers, box/curtainsider, refrigerated, tank, tipping, skeletal-only, extendible and powered loading configurations; tractor, independently sold parts, remanufacture and repair. Cargo, transport service/tonne-km, tractor use and fuel, loading operations, distribution, maintenance and end-of-life are outside the reference boundary. Factory acceptance/rework are manufacturing. No payload, service life or fuel-saving equivalence is assumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.road-goods-semi-trailer |
| classification_refs | CPC:3.0:49229; narrower |
| covered_products | Manufacture of complete new non-self-loading/non-self-unloading straight steel-frame hardwood-platform road goods semi-trailers: site frame fabrication, declared finishing, hardwood deck fitting, purchased running gear/coupling/support and braking/lighting integration, factory acceptance. Declare one exact model/VIN and released configuration. This narrower boundary within CPC49229 does not cover every trailer type. |
| excluded_products | Exclude full trailers, agricultural self-loading/unloading trailers, box/curtainsider, refrigerated, tank, tipping, skeletal-only, extendible and powered loading configurations; tractor, independently sold parts, remanufacture and repair. Cargo, transport service/tonne-km, tractor use and fuel, loading operations, distribution, maintenance and end-of-life are outside the reference boundary. Factory acceptance/rework are manufacturing. No payload, service life or fuel-saving equivalence is assumed. |
| representative_product | One new accepted empty straight steel-frame hardwood-platform semi-trailer, with exact fitted headboard/posts, support, coupling and running/brake/electrical configuration. No universal axle count, hardwood species or payload assumed. |
| production_route | Steel stock/preformed parts; frame fabrication; actual finish; hardwood deck fitting; purchased equipment integration; factory test/weigh/release; actual protection. |
| market_state | Complete quality-released empty trailer, with declared fitted accessories/retained grease and air state; no tractor/cargo/persons, packing and detached spares excluded. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and factory acceptance of one declared complete hardwood-platform goods semi-trailer. |
| How much | 1 kg accepted net complete trailer, normalized from one unit by measured M; not payload or tonne-km. |
| How well | Meet actual released drawing/BOM and model-specific frame/deck, coupling/support, running gear/brake and electrical acceptance plan. Preserve actual test/approval records where held; no brochure geometry, headboard rating or universal legal standard inherited. |
| How long or cycle | One manufacturing/acceptance cycle; no service life or transport performance denominator. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other trailers and semi-trailers (including trailers and semi-trailers for the transport of goods), except self-loading or self-unloading trailers or semi-trailers for agricultural purposes `f5728d65-de1b-4498-9f66-bb8ffdacdc8f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/VIN/BOM revision; straight frame geometry/main-beam and crossmember grades/thickness/sections; stock versus bought-in modules; deck species/moisture/dimensions/treatment; surface formulation/route/make-or-buy; axle/suspension/brake/wheel/tyre part numbers and supplier-contained scope; coupling kingpin/interface and landing support; ABS versus other control; lighting/harness; exact fitted headboard/posts/hooks/accessories; empty delivery state and retained grease/air; measured M; accepted count/sites/period; current release plan/approval identifiers if held; utility/provider/transport/treatment coverage; detached spares and shipment protection excluded |

All required qualifiers must be declared in the actual dataset. Category identity is restricted to this complete configured manufacturing output and provides no numerical production average. Missing qualifiers make the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_units | frame_electricity; finish_electricity; deck_electricity; assembly_electricity; release_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual below1kV grid-user energy; convert kWh to MJ using3.6MJ/kWh. Preserve actual provider/voltage; no mass or heat-carrier substitution. |
| tyre_count | pneumatic_tyre | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Collect actual installed tyre count per accepted unit; retain items as numerator divided by M, resulting in items/kg. Measure tyre net mass separately for complete trailer mass balance; never relabel public count property Mass. |

Bind weighing to empty complete VIN/model/BOM: no tractor, crew, cargo, temporary test ballast, shipment protection or detached spare. Record fitted headboard/posts/toolbox/spare-wheel status and retained grease/air delivery state separately. Accessories delivered detached are separate supply, outside M, with removal/attachment treatment disclosed. Catalogue tare, gross permissible mass and rated payload cannot replace measured M. Count-to-mass or volume-to-mass conversions for other supplies require actual same-part weight or measured density/moisture/temperature, never default density or part mass.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Manufacturer receives steel stock/preformed parts, hardwood boards and released purchased running gear/coupling/brake/electrical parts. Steel rolling, sawmilling/drying and component manufacture are upstream unless explicit additional site modules are documented. |
| starting_condition_role | Declared trailer manufacturing foreground starting point. |
| product_classification_scope | Manufacture of complete new non-self-loading/non-self-unloading straight steel-frame hardwood-platform road goods semi-trailers: site frame fabrication, declared finishing, hardwood deck fitting, purchased running gear/coupling/support and braking/lighting integration, factory acceptance. Declare one exact model/VIN and released configuration. This narrower boundary within CPC49229 does not cover every trailer type. |
| recursive_input_rule | Purchased complete trailer cannot substitute for a component. Complete frame/deck/axle/brake modules replace contained site stocks/work/parts. Internal transfers do not become new external exchanges. Supplier-contained versus additionally fitted items must be reconciled. |
| upstream_dataset_requirement | Expanded assessment requires compatible supplier LCI for actual steel, timber, chemicals and components, utilities, outsourcing, inbound/intersite transport and treatment. UUID establishes identity, not amount/provider. This site foreground alone is not complete cradle-to-gate. |
| disclosure | model/VIN/BOM revision; straight frame geometry/main-beam and crossmember grades/thickness/sections; stock versus bought-in modules; deck species/moisture/dimensions/treatment; surface formulation/route/make-or-buy; axle/suspension/brake/wheel/tyre part numbers and supplier-contained scope; coupling kingpin/interface and landing support; ABS versus other control; lighting/harness; exact fitted headboard/posts/hooks/accessories; empty delivery state and retained grease/air; measured M; accepted count/sites/period; current release plan/approval identifiers if held; utility/provider/transport/treatment coverage; detached spares and shipment protection excluded |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_frame | frame | Dennison manufacture describes multiple steel grades and purchased running gear, not a universal alloy or fabrication recipe. Use actual drawing-defined cut/form/join route and component supply boundaries. | dennison-manufacture |
| boundary_deck | deck | Dennison standard-platform and independent Montracon standard-flat cases support hardwood-platform architecture. Record actual species/dimensions/moisture; no published board thickness or headboard rating becomes a default. | dennison-platform; montracon-flat |
| boundary_routes | inventory | Each card is one physical exchange and a route-specific candidate, not a mandatory universal bill of materials. For actual alternative coating, suspension, joining or outsourced route, add every specific supplied material, carrier, waste and evidenced release; record supported absence separately from missing data. Site utility production belongs once to actual measured utility modules. |  |
| boundary_service | release | Factory functional tests are manufacturing. Transport service and tractor operation outside those actual bounded tests are excluded; do not treat an unpowered semi-trailer as having mandatory engine exhaust. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| frame | Steel frame fabrication | required | Receive steel stock and declared preformed parts; cut/drill/form/join main beams, crossmembers, side members and coupling/support interfaces according to released drawings. Purchased complete frame replaces its contained site material/work. | foreground | internal transfer; complete accepted trailer reference |
| finish | Frame surface preparation and finish | conditional | Include actual site operations only. Washing/epoxy/polyurethane/electric curing are specific conditional examples, not inferred universal requirements; supplied prefinished frame or outsourced treatment replaces contained operations. | foreground | internal transfer; complete accepted trailer reference |
| deck | Hardwood platform fitting | required | Fit actual declared hardwood boards and fastenings to frame. Manufacturer Keruing case does not prescribe species, board thickness or moisture for every trailer. Site machining versus purchased complete fitted deck explicitly separated. | foreground | internal transfer; complete accepted trailer reference |
| assembly | Running gear, coupling and equipment integration | required | Install exact released running gear, kingpin/landing support, brake and electrical equipment; declare suspension/control variants and installed load-securing accessories. Avoid duplicating supplier-contained components. | foreground | internal transfer; complete accepted trailer reference |
| release | Factory tests, acceptance and weighing | required | Perform actual drawing/model-specific dimensional, coupling/support, brake/leak, tyre/wheel, lighting/control and release inspections. Record rework, accepted counts and calibrated empty complete trailer M. No universal test pressure, braking threshold or headboard rating inferred. | foreground | finished_machine |
| packing | Shipment protection | conditional | Only actual individually measured protective supply, outside trailer M; record detached spares separately. | foreground | internal transfer; complete accepted trailer reference |

### Process: Steel frame fabrication (`frame`)

Receive steel stock and declared preformed parts; cut/drill/form/join main beams, crossmembers, side members and coupling/support interfaces according to released drawings. Purchased complete frame replaces its contained site material/work.

#### Inputs

##### Product flows

###### Steel Plate (`frame_plate`)

Conditional actual hot-rolled low-alloy high-strength thick plate for fabricated main-beam flanges/webs or coupling plate, with drawing grade/thickness and net issues. Other grades and purchased completed beams are separate exchanges, replacing contained plate/work.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

###### Finished steel crossmember channel (`crossmember_channel`)

Actual one purchased formed-channel crossmember specification, grade/section and net mass; local forming from plate replaces this purchase with exact stock and forming demand.

- Selected flow: Finished steel crossmember channel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

###### Hot-rolled steel side-rave angle (`siderave_angle`)

Actual one angle section/grade/length and mass for side rave; brochure section dimensions are not a default. Distinct hooks, sockets and headboard members have their own BOM rows when not contained.

- Selected flow: Hot-rolled steel side-rave angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

###### Solid low-alloy steel MIG welding wire (`solid_wire`)

Conditional actual solid MIG wire grade/diameter and net issue for drawing-defined joins. Flux-cored or other weld routes require their own exact cards.

- Selected flow: Solid low-alloy steel MIG welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

###### Argon shielding gas (`argon`)

Conditional actual pure argon supply by measured net cylinder mass, only when released procedure uses this gas. Mixed shielding gas is a separate formulated exchange.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

###### Alternating current (`frame_electricity`)

Actual below1kV grid-user cut/drill/form/join and extraction demand including rejects/rework; net meter energy. No generic steel-production electricity inserted in this site foreground.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Dry untreated segregated frame steel offcuts/swarf actually leaving site; reusable internal offcuts remain transfers with no avoided-steel credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

##### Elementary flows

###### Particulate matter, particle size unspecified (`weld_pm`)

Only evidenced post-control cut/weld particulate to immediate outdoor unspecified air with unspecified size fraction. Captured metal dust is a separately identified waste; no assumed release factor.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`

### Process: Frame surface preparation and finish (`finish`)

Include actual site operations only. Washing/epoxy/polyurethane/electric curing are specific conditional examples, not inferred universal requirements; supplied prefinished frame or outsourced treatment replaces contained operations.

#### Inputs

##### Product flows

###### Tap water (`wash_water`)

Conditional externally supplied municipal washing/rinse make-up; internal recirculation is not repeated purchased supply.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Sodium hydroxide solution, 50% (`sodium_hydroxide`)

Only actual50% supplied NaOH solution ingredient if present; supplied solution mass, not active NaOH or operating bath concentration. Alternative cleaners individually named.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated epoxy anticorrosion primer (`epoxy_primer`)

Conditional one actual supplied primer formulation/solids and net issue; separately supplied hardener/solvent are separate cards. Outsourced finish replaces contained site chemical/energy exchanges.

- Selected flow: Formulated epoxy anticorrosion primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated polyurethane chassis topcoat (`pu_topcoat`)

Conditional one actual supplied mixed polyurethane topcoat with SDS/resin/solvent/solids. Do not infer this route from a painted product photograph. Other finish chemistry separately represented.

- Selected flow: Formulated polyurethane chassis topcoat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Alternating current (`finish_electricity`)

Actual below1kV preparation/coating pumps/fans and electric curing. A non-electric heat route adds its own measured specific carrier and any evidenced releases.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

#### Outputs

##### Waste flows

###### Spent alkaline frame-washing solution for treatment (`wash_effluent`)

Conditional one actual wet alkaline purge with measured chemistry and treatment destination; not a water resource or assumed elementary water release.

- Selected flow: Spent alkaline frame-washing solution for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Waste paint (`paint_waste`)

Conditional single formulated polyurethane topcoat overspray residue, actual wet collected mass to handler; primer residue, filters and sludge remain different streams.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Only actual measured post-control xylene isomers CAS1330-20-7 to immediate outdoor unspecified air, established by SDS/speciation. Total VOC, pure m-xylene and water/soil/long-term identities differ.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

### Process: Hardwood platform fitting (`deck`)

Fit actual declared hardwood boards and fastenings to frame. Manufacturer Keruing case does not prescribe species, board thickness or moisture for every trailer. Site machining versus purchased complete fitted deck explicitly separated.

#### Inputs

##### Product flows

###### Solid Keruing hardwood deck board (`keruing_board`)

Actual one purchased solid Keruing board supply with species, moisture, dimensions, machining/preservative state and received mass. Other hardwood species are separate identified rows, not assumed Keruing.

- Selected flow: Solid Keruing hardwood deck board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_deck.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`

###### Steel screw (`deck_screw`)

Actual one deck-fixing screw released specification/grade/coating/dimensions and net mass. Different nuts, washers and bolt specifications get separate rows.

- Selected flow: Steel screw `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_deck.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`

###### Alternating current (`deck_electricity`)

Actual below1kV board cut/drill/fit demand and extraction, including rejects. Purchased fully fitted deck replaces contained board/fastening/site-work inputs.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_deck.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`

#### Outputs

##### Waste flows

###### Untreated solid Keruing wood offcut for treatment (`wood_offcut`)

Actual segregated untreated solid board offcut at recorded moisture; exclude sawdust and treated/painted wood, which each require separate cards. Internal retained stock is not external waste.

- Selected flow: Untreated solid Keruing wood offcut for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_deck.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`

### Process: Running gear, coupling and equipment integration (`assembly`)

Install exact released running gear, kingpin/landing support, brake and electrical equipment; declare suspension/control variants and installed load-securing accessories. Avoid duplicating supplier-contained components.

#### Inputs

##### Product flows

###### Finished steel semi-trailer coupling kingpin (`kingpin`)

Actual one released kingpin part number, coupling interface, grade/attachment and net mass. Tractor-side fifth-wheel saddle is outside trailer boundary.

- Selected flow: Finished steel semi-trailer coupling kingpin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Semi-trailer landing gear (`landing_gear`)

Actual one purchased complete landing-gear subassembly with declared included legs, cross-shaft, crank and supplier state; measure net mass. The identity narrative1% estimate is not an amount rule.

- Selected flow: Semi-trailer landing gear `a3052c30-5951-4e1f-b8e7-321e582f7ae0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Axle assembly (`axle_assembly`)

Actual one released trailer axle assembly part number and received net mass; declare hubs/brakes/suspension included or excluded. Each different axle design separate, no universal axle count or rating.

- Selected flow: Axle assembly `7c212dac-58e0-4610-87e8-aa7b4cbdc437`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished elastomer air suspension spring (`air_spring`)

Conditional actual separately supplied trailer air spring part number and net mass; omit if axle/suspension module contains it. Other spring architecture gets its own precise card.

- Selected flow: Finished elastomer air suspension spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished spring air-brake chamber (`brake_chamber`)

Conditional separately supplied actual chamber part number and net dry mass, only when not contained in axle/brake module. Service-only chambers distinct.

- Selected flow: Finished spring air-brake chamber
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel compressed-air brake reservoir (`brake_reservoir`)

Actual one released reservoir part number/capacity and net mass, excluding valves unless supplier explicitly contains them.

- Selected flow: Finished steel compressed-air brake reservoir
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished pneumatic brake relay valve (`brake_relay`)

Actual one released relay valve part number and supplied mass; omit contained module valves, separately identify different valve functions.

- Selected flow: Finished pneumatic brake relay valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished trailer ABS electronic controller (`abs_controller`)

Conditional actual released standalone ABS controller part number/version and net mass; EBS and combined valve/controller modules have distinct supply scopes. No universal ABS technology assumed.

- Selected flow: Finished trailer ABS electronic controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Polyamide pneumatic brake tube (`brake_tube`)

Actual one polyamide tube grade/pressure/diameter/length and net mass. Separately purchased connectors or flexible rubber hoses receive separate rows.

- Selected flow: Polyamide pneumatic brake tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel wheel rim for trailer (`steel_wheel`)

Actual one released trailer steel rim diameter/offset/load specification and supplied dry mass; exclude tyre and wheel already contained in a module.

- Selected flow: Steel wheel rim for trailer `c111cb85-8ade-41b4-a334-393b24019136`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Tire (`pneumatic_tyre`)

Actual one new rubber pneumatic trailer tyre specification, size/load and measured supplied item count. Preserve public Number of items; normalized quantity is items per kg trailer. Record actual tyre net mass separately for vehicle M reconciliation, no default tyre mass.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished trailer LED rear combination lamp (`tail_lamp`)

Actual one complete released lamp part number/net mass with declared optical/electrical functions; separately supplied side markers are distinct products.

- Selected flow: Finished trailer LED rear combination lamp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished insulated copper trailer wiring harness (`wiring_harness`)

Actual one released end-tested harness part number, connectors/insulation/length and net mass. Intermediate formed harness not equivalent to complete tested supply.

- Selected flow: Finished insulated copper trailer wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Formulated mineral lithium lubricating grease (`mineral_grease`)

Conditional one actual supplier grease formulation/grade and net fill for factory lubrication; supplied-component retained grease already contained is not additional purchase.

- Selected flow: Formulated mineral lithium lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_electricity`)

Actual below1kV lifting/assembly and tyre installation demand, including rework; compressed-air generation belongs to measured utilities and is not an added unspecified energy exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

### Process: Factory tests, acceptance and weighing (`release`)

Perform actual drawing/model-specific dimensional, coupling/support, brake/leak, tyre/wheel, lighting/control and release inspections. Record rework, accepted counts and calibrated empty complete trailer M. No universal test pressure, braking threshold or headboard rating inferred.

#### Inputs

##### Product flows

###### Alternating current (`release_electricity`)

Actual below1kV inspection/brake bench, leak/lighting checks and site air compressor load attributable to this trailer. Purchased compressed air requires its own explicit physical exchange and pressure/basis.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

#### Outputs

##### Product flows

###### Other trailers and semi-trailers (including trailers and semi-trailers for the transport of goods), except self-loading or self-unloading trailers or semi-trailers for agricultural purposes (`finished_machine`)

1kg normalized share of one complete new accepted empty straight steel-frame hardwood-platform road goods semi-trailer with exact fitted running gear, coupling, support, brakes/lights and declared delivery state. Category identity constrained by qualifiers; no transport service or generic trailer mix.

- Selected flow: Other trailers and semi-trailers (including trailers and semi-trailers for the transport of goods), except self-loading or self-unloading trailers or semi-trailers for agricultural purposes `f5728d65-de1b-4498-9f66-bb8ffdacdc8f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

### Process: Shipment protection (`packing`)

Only actual individually measured protective supply, outside trailer M; record detached spares separately.

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Conditional actual PE protective film formulation/thickness/net mass outside trailer M; no mandatory whole-platform wrap.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`corrugated_board`)

Conditional one actual C/E/F-flute fiber≥80% recycled-containing board specification and net mass, outside M; other board specifications individually identified.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared_operations | Subdivide by model/site/work order first. Shared cut/weld, finish, board machining, lifting and testing use exchange-specific measured causal load/time or attributable demand from cp_allocation, reconciled to total supplied demand and excluded work. No default payload, axle count, trailer mass or deck-area allocation. |  |
| allocation_variants | variants | Separate frame geometry/grade, deck species/state, running/brake/control and finish variants; each normalized with its own measured M. Residual physical/economic fallback requires actual records, sensitivity and review, not a fabricated percentage. Rework/reject burdens remain with accepted production. |  |
| allocation_recovery | outputs | Internal steel, timber, paint and water recovery are transfers, not automatic avoided-production or recycling credits. External waste and treatment remain explicit. Marketable coproduct claims require measured quality/quantity and independently reviewed handling; no biogenic storage or future recycling credit from wood mass alone. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each VIN or traceable same-configuration batch | same declared manufacturing period | same empty accepted delivery configuration | accepted net mass per unit | vehicle scale calibration; empty/no-tractor state; fitted accessory and grease/air declaration; signed acceptance |
| cp_frame | frame | each atomic process row | measurement | drawing/steel grade/thickness; exact sections and make-or-buy; net issues/returns; weld procedure/wire/gas; kWh; rejected/reworked jobs; offcuts/captured dust; post-control particle concentration/flow/time/size | Weigh exact steel/consumables and outgoing segregated scrap; reconcile nesting and reusable stock. Meter actual job demand and sample outlet particulate with receiving-air/size conditions. Captured dust is separately named waste, not release. | kg; MJ | each work order/batch/VIN; monthly stock closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing data log |
| cp_finish | finish | each atomic process row | measurement | supplier SDS/formulation/solids/concentration; net chemical/paint supply and recovery; retained film; purge/residue composition; kWh; outsourced scope; xylene speciation/air flow/time | Measure each actual supplied ingredient and separate wet waste stream; reconcile bath/paint stock, retained film and recovery. Sample post-control xylene species, never infer all VOC as xylene. Record actual alternative preparation/coating supplies individually. | kg; MJ | each work order/batch/VIN; monthly stock closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing data log |
| cp_deck | deck | each atomic process row | measurement | wood species/supplier/machining/treatment; actual moisture and received mass; dimensions; screw specification/net mass; offcuts/sawdust/recovery; kWh | Weigh received boards and outgoing offcuts separately at recorded moisture. Reconcile fitted-board geometry/measurement and issues/returns with work orders; separately identify sawdust, captured dust and any evidenced outdoor wood particulate. No default timber density, yield or biogenic-carbon storage credit. | kg; MJ | each work order/batch/VIN; monthly stock closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing data log |
| cp_assembly | assembly | each atomic process row | measurement | supplier scope/part numbers and released dry masses; axle/brake/suspension containment; wheel/tyre specifications/counts; tyre weighing; kingpin/support interfaces; air/electrical diagram; grease net fill; installed accessories; kWh | Reconcile each part and supplier-contained scope to VIN-bound released BOM and actual component weights. Count the exact new pneumatic tyre specification; retain Number of items for exchange and separate measured tyre mass for complete M balance. Record installation torque/alignment and actual lubricant fill. | kg; MJ; Item(s) | each work order/batch/VIN; monthly stock closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing data log |
| cp_release | release | each atomic process row | measurement | VIN/configuration/test plan; coupling/support/brake/leak/light/control inspection and acceptance results; rework; accepted count; meter kWh/compressor attributable load; empty complete M; retained grease/air state | Record actual released test outcomes and utilities including rework. Weigh the empty complete delivered trailer; remove tractor, crew/cargo, temporary test ballast and packing. Report any factory road-test tractor/transport demand as separately measured explicitly bounded support, never trailer propulsion or assumed service fuel. | kg; MJ | each work order/batch/VIN; monthly stock closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing data log |
| cp_packing | packing | each atomic process row | measurement | PE formulation/thickness/net mass; board flute/fiber/recycled content/mass; returns; detached spare list | Weigh each protective component separately outside M; retain spare and fitted-versus-detached accessory declarations. | kg | each work order/batch/VIN; monthly stock closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing data log |
| cp_allocation | manufacturing | shared_load | measurement | total supplied demand; submeter load/time; served variants; excluded work | Measure exchange-specific causal demand/time and served work orders; justify driver and reconcile all shares to meter total. | MJ; h | each shared batch; monthly reconciliation | same production period | all served sites/variants | partition measured causal demand; attributable amount / accepted units | meter closure; sensitivity; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | frame_plate; crossmember_channel; siderave_angle; solid_wire; argon; frame_electricity; steel_scrap; weld_pm; wash_water; sodium_hydroxide; epoxy_primer; pu_topcoat; finish_electricity; wash_effluent; paint_waste; xylene_air; keruing_board; deck_screw; deck_electricity; wood_offcut; kingpin; landing_gear; axle_assembly; air_spring; brake_chamber; brake_reservoir; brake_relay; abs_controller; brake_tube; steel_wheel; pneumatic_tyre; tail_lamp; wiring_harness; mineral_grease; assembly_electricity; release_electricity; pe_film; corrugated_board | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is the attributable same-period/configuration net exchange divided by accepted complete units after stock, recovery, rejects and rework reconciliation. Divide by calibrated measured M while preserving kg, MJ or tyre Item(s) numerators. Counts/volumes used to obtain another row mass need actual part weighing or same-formulation measured density/moisture/temperature and explicit conversion. Mass reconciliation separately sums actual fitted materials/components and retained coating/lubricant; tyre count is not numerically added to kg. No assumed residual material or machine weight closes the balance. Compatible variants can be pooled only after separate normalization with disclosed measured weights and uncertainty.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | flows | Verify exact steel grade/form, timber species/moisture/treatment, supplied coating composition and component completeness. Preserve public properties and declared tyre count basis; do not substitute aggregate parts, transport service or tractor coupling plate for this product. | released drawings; supplier specifications/SDS; identity audit |
| quality_mass | finished_machine | Tie calibrated empty complete M to exact fitted headboard/posts/running gear/support/brake/lighting and retained grease/air state. Reconcile net stock/component mass and separately measured tyre mass; document residual uncertainty, not invented quantities. | VIN BOM; calibrated scale; stock closure; supplier containment |
| quality_acceptance | release | Retain actual frame/deck/coupling/support, axle/wheel/tyre, brake/leak, light/control and release records. Undated manufacturer quality claims, conflicting headboard ratings and historic weld-standard mentions are not current methodological acceptance limits. | signed current tests; actual approvals where held; instrument calibration |
| quality_coverage | dataset | Declare sites/period, supplier versions, primary coverage, uncertainty and measured/calculated/estimated/missing/excluded/not-applicable states. Each actual alternative route requires complete measured exchanges; architecture sources alone supply no plant LCI or default range. | work orders; meters; sampling conditions; route/coverage and missing-data register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require1kg complete output and cp_mass calibrated M linked to exact empty VIN/BOM and fitted delivery state. Payload, catalogue tare, permissible gross mass, axle rating, tractor mass and tonne-km cannot substitute. |  |
| validation_basis | inventory | Every applicable non-reference row uses normalize_mass and its declared protocol with matched count/period/configuration. Retain tyre Number of items and actual counted numerator; audit units and supplier mass conversion evidence separately. |  |
| validation_supply | components | Reconcile bought-in frame/deck/axle/brake modules and contained versus separately fitted parts; remove duplicate stocks/work/grease. Distinct fitted accessory and fastener designs require their own atomic rows. Necessary fabrication/assembly and conditional exchanges must be distinguishable. |  |
| validation_releases | elementary | Require actual substance, receiving medium/submedium and post-control outlet evidence for particulate and xylene; captured dust/purge remain separate wastes. Size-resolved fractions replace unspecified-size duplicates. Add other actual species individually when evidenced; do not invent trailer engine emissions or map NO to NO2/N2O. |  |
| validation_completeness | dataset | Declare unresolved identities, amounts, supplier/transport/treatment and alternative-route coverage. Complete per-product foreground records and applicable acceptance are required for use. Structural check pass neither approves methodology nor establishes complete cradle-to-gate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Exact configured complete straight steel-frame hardwood-platform non-self-loading/non-self-unloading semi-trailer manufacture at declared sites/period. Expanded upstream assessment requires independent supplier/transport/treatment completeness. |
| excluded_use | Exclude full trailers, agricultural self-loading/unloading trailers, box/curtainsider, refrigerated, tank, tipping, skeletal-only, extendible and powered loading configurations; tractor, independently sold parts, remanufacture and repair. Cargo, transport service/tonne-km, tractor use and fuel, loading operations, distribution, maintenance and end-of-life are outside the reference boundary. Factory acceptance/rework are manufacturing. No payload, service life or fuel-saving equivalence is assumed. |
| required_metadata | model/VIN/BOM revision; straight frame geometry/main-beam and crossmember grades/thickness/sections; stock versus bought-in modules; deck species/moisture/dimensions/treatment; surface formulation/route/make-or-buy; axle/suspension/brake/wheel/tyre part numbers and supplier-contained scope; coupling kingpin/interface and landing support; ABS versus other control; lighting/harness; exact fitted headboard/posts/hooks/accessories; empty delivery state and retained grease/air; measured M; accepted count/sites/period; current release plan/approval identifiers if held; utility/provider/transport/treatment coverage; detached spares and shipment protection excluded |
| required_quality_disclosure | Current drawing/BOM and supplier containment; empty delivery configuration; actual M/counts; numerator units/count conversions; measured coverage, tests/rework/recovery/balances; allocation/uncertainty; identity and supplier/transport/treatment gaps; source limitations; review state. |
| update_trigger | Frame geometry/grade, hardwood species/state, finish/make-or-buy, running/brake/control/coupling/support supplier or configuration, accessories/delivery state, factory test/sites/utilities/period or resolution of evidence/identity gaps. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| dennison-platform | handbook | Dennison Standard Platform Trailer, undated official HTML, Standard Platform Trailer and Feature and Benefit Summary sections (no pagination). https://dennisontrailers.com/our-trailers/platforms/standard-platform-trailer/ | Keruing platform, posts/sockets/headboard case architecture only. Conflicting19/17tonne headboard statements are not adopted; no thickness, dimensions, load rating, certification, weight, life or LCI factor prescribed. |
| montracon-flat | handbook | Montracon Versatile Flat Product Range, undated official HTML, Standard Flat Platform Trailers subsection; following Urban/PSK variants excluded, no pagination. https://montracon.com/flat-product-range/ | Independent steel main-beam/side-rave and hardwood floor architecture only, not universal steel grade/geometry, hardwood species, payload/certification or numerical manufacturing inventory. |
| dennison-manufacture | handbook | Dennison Manufacture, undated official HTML, Manufacture paragraphs; no pagination. https://dennisontrailers.com/what-makes-a-dennison-trailer/manufacture/ | Manufacturer-specific steel-grade diversity, bought-in running gear and quality/weld-inspection architecture only. Historical2012 system and EN25817 references do not establish current compliance or required standards. Actual drawings/records govern; no quantities adopted. |
