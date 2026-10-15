---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.machined-solid-coniferous-structural-members
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Factory-machined solid coniferous structural beams and columns

## 1. Scope and Applicability

This PCR supports a distinct secondary manufacturing gate: purchased kiln-dried, untreated, unglued solid coniferous stock is made into individually drawing-identified beams or columns with member-specific mortises, tenons, notches or connection bores, then structurally accepted in the machined state. Connection geometry and acceptance are essential: merely calling graded or straight-planed sawnwood a beam/column is insufficient. Sawn stock belongs to applicable existing sawnwood methodology; continuous longitudinal profiles alone belong to the applicable profile methodology. This record adds net-wood/removed-joint geometry, remaining-section and grade traceability, component-specific rejects/rework and machining attribution; it does not duplicate log-to-lumber production. [usda-wood-handbook-2021 Ch.6/17; author scope selection.]

Exclude hardwood, fencing posts, round poles, sleepers, glued/laminated/finger-jointed or other engineered wood, preservation/coating, assembled frames and installation. This dry mechanical route uses electrical handling and has no on-site drying/thermal conditioning, fuel combustion or wet chemical cleaning; an actual additional route needs separately evidenced adaptation. The USDA traditional-frame account does not imply that all heavy timber is kiln dried: dry stock is an explicit selected route. CPC31625 contains different post forms and building beams; building-column coverage needs independent classification review. A leaf label is not product identity. [unsd-cpc31625-3.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.machined-solid-coniferous-structural-members |
| classification_refs | CPC 3.0 31625 is candidate classification context; building-column coverage requires independent review |
| covered_products | Unassembled one-piece solid coniferous structural beams and columns made from purchased kiln-dried sawn stock; component-specific mortise, tenon, notch or connection bore and post-machining structural acceptance required |
| excluded_products | Ordinary rough/straight-planed graded stock without connection machining; continuous profiles alone; fencing posts, round poles, sleepers; hardwood; engineered/finger-jointed/glued/treatment/coating products; assembled frames and installation |
| representative_product | Accepted dry untreated unassembled connection-machined solid coniferous structural member, at component factory gate |
| production_route | Purchased kiln-dried stock → inspection/structural grade trace → component cutting/routing/boring → dust extraction → post-machining acceptance → packing; stages metered within one foreground unit |
| market_state | Unassembled individual drawing-identified member; no installed load-bearing function or lifetime declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply factory-prepared dry one-piece solid coniferous structural members with drawing-specific connections, without claiming installed structural equivalence |
| How much | 1 m3 actual net solid wood volume in accepted finished members at dispatch moisture, excluding packaging and geometric voids |
| How well | Botanical species, intended axial/bending role, applicable structural grading standard/edition and traceability, machined drawing/tolerances, residual section and post-machining acceptance, measured moisture |
| How long or cycle | One recorded manufacturing cohort; no use-stage lifetime or design-load equivalence |
| reference_flow_link | `finished_member` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Lumber for construction `73ef1fef-6aa1-43b0-8721-c8f2f1385509` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Botanical species/mix; one-piece untreated unglued uncoated coniferous stock and supplier kiln/grade evidence; beam/column role; grading standard/edition, grading method and traceable lot; drawing revision and member ID; actual length/section, node locations, bore/mortise/tenon/notch dimensions and acceptance; remaining critical section and authority for structural acceptance after machining; dispatch moisture, sample gradient/method and storage time; actual net solid volume convention, geometry/void correction and measurement uncertainty; measured matched-state wet/dry mass and density if converted; packaging excluded; site/cohort, upstream gate and provider volume-basis reconciliation |

The broader construction-lumber record includes solid construction stock/members and does not restrict manufacturing to an incompatible route/material. Its usual board sizes are descriptive examples, not universal exclusions. The required qualifiers select only this one-piece coniferous machined-member subset; the UUID does not certify a structure or define its quantity/background basis. Declare every qualifier in the concrete package. Reference amount is a manufacturing declared unit, not an installed service-equivalent functional unit.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_volume` | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use cp_reference to measure actual remaining solid wood in accepted members; subtract bore/mortise/notch removals, retain tenon material actually present. Sum member net volumes into Q>0. Envelope volume, nominal trade dimensions, stacking gaps, packages, rejects and count are not Q. This author geometry convention needs provider-background reconciliation; common m3 alone is insufficient. |
| `moisture_basis` | wood and residues | Explicit dry/wet water fraction | dimensionless | u=(m_wet-m_od)/m_od; w=(m_wet-m_od)/m_wet; w=u/(1+u); m_od=m_wet/(1+u); m_od>0, u>=0, 0<=w<1. Divide reported percentages by 100. Sample species, surface/core gradients and each residue state separately; electrical meters require appropriate calibration and original method limits. [usda-wood-handbook-2021 Ch.4 eqs.4-1/4-2, Ch.13.] |
| `mass_volume` | wood conversion | Matched-state mass and net solid volume | kg; m3 | rho_u=m_wet/V_net,u; m_wet=rho_u×V_net,u using measured same-species, same-moisture, same-geometric-convention values. Basic density is oven-dry mass/green volume, not dispatch wet density. No database secondary mass coefficient, nominal board foot or loose volume is a density measurement. [usda-wood-handbook-2021 Ch.4 Table4-5.] |
| `electricity_units` | machining_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter kWh×3.6 gives MJ. Net calorific value is the verified database reference-property label for electricity, not evidence of workshop combustion. Match customer-side voltage, region/year, supply mix and background losses. |
| `reference_background` | finished_member | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | The construction-lumber identity is broader than the qualified component, with no opposite route/material restriction. It does not define net versus nominal/packed volume, moisture or joint geometry. Before binding an actual quantity or supplier/background result, obtain their reference-volume definition and reconcile it with cp_reference using measured matched-state geometry/density and documented conversion. Unknown compatibility remains pending; no complete dataset or transfer of a generic lumber background is allowed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased kiln-dried untreated unglued coniferous sawn stock at disclosed receiving gate; drying and forest burdens are upstream |
| starting_condition_role | Component-factory gate-to-gate foreground |
| product_classification_scope | Semantic connection-machined structural member category; CPC31625 mapping unresolved for combined beam/column scope |
| recursive_input_rule | Supplier stock or outsourced partly machined members require a state-matched input and supplier gate; keep inherited burdens once and meter only remaining foreground operations |
| upstream_dataset_requirement | Compatible forestry, harvest, sawing, kiln drying, incoming transport, electricity, lubricant, packaging and waste-treatment datasets; retain their allocation/carbon/geography/period |
| disclosure | Supplier and component gates, species/grade/drawing, electrical handling, dust controls, outsourced steps, volume definitions, omissions and unresolved identities/bases; foreground alone is not cradle-to-gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_component` | component manufacture | Include receipt/grade tracing, member-specific cutting, routing and boring, electric handling, dust extraction, post-machining inspection, rejects/rework and dispatch packing. Purchased dry stock only; no onsite drying, thermal reconditioning, boiler, solvent, glue, preservation, coating or wet cleaning in this route. An actual extra operation requires an evidenced route extension before use, never silent omission. | `usda-wood-handbook-2021` |
| `boundary_upstream` | inherited stock burdens | Existing applicable sawnwood methodology supports the supplier stage, not the finished connection-machined member. Supplier drying/sawing/transport are included once. A generic background that already includes connection machining or installation is not plain stock input. Do not add a second purchased stock burden to internally supplied identical wood. | `corrim-northern-lumber-2025` |
| `boundary_air` | air and captured dust | Record control-outlet and fugitive emissions after actual controls separately from captured residues. EPA PTE guidance supplies screening context and nested-size definitions only; adopt no regional sawmill PTE factors, building-enclosure reductions or assumed zero. Screen actual other substances and tool/maintenance/packaging wastes; add every present missing material/species as a separate atomic row before complete dataset delivery. | `epa-sawmill-pte-2014` |
| `boundary_carbon` | wood carbon and excluded stages | No new forestry uptake is created by machining. Track measured dry wood carbon through stock, member, residues and stocks; retain upstream uptake once without carbon-neutrality or permanent storage/substitution credit. No combustion occurs in this route; inherited biogenic CO2 emissions remain in upstream LCI even if a GHG reporting convention omits them. Exclude assembly, installation, service and end-of-life; disclose and assess capital and worker-activity treatment. | `corrim-northern-lumber-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_machining` | Drawing-specific machining, structural acceptance and dispatch | required | Purchased kiln-dried stock; no heat/chemicals; actual stages separately metered | One complete terminal foreground unit with raw stage ledgers | `finished_member` |

Receipt, machining, inspection and packing form one foreground unit, so the finished reference appears only once. Retain unallocated stage totals before dividing every exchange by the same accepted net solid volume Q. This physical graph remains separate from allocated environmental burdens. Rework/wood used as a packing spacer is tracked internally in raw stage/stock ledgers and is never also sold/discarded or charged as an external purchase. Captured dust and escaped dust differ. No actual factory amount, empirical range, grade or energy average is asserted; conditional rows are collected if present, demonstrated absence is not_applicable and unknown is pending.

### Process: Drawing-specific machining, structural acceptance and dispatch (`component_machining`)

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`sawn_stock`)

Required single-piece kiln-dried coniferous stock, untreated and unglued. Record supplier gate, actual species, moisture, dimensions and grade; upstream sawing and drying burdens are carried once.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Alternating current (`machining_electricity`)

Required customer-side grid-average electricity below 1 kV for cutting, routing, boring, handling, extraction, inspection and packing. Submeter stages; a different voltage/supply requires a separately verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `usda-wood-handbook-2021`

###### Petroleum lubricating oil for timber machining equipment (`machining_oil`)

Conditional external petroleum-fraction machinery lubricant makeup; dry wood machining does not imply cutting-fluid application to the wood. The selected identity includes a 40.5 MJ/kg calorific qualifier: require actual supplier grade, formulation and background compatibility with that qualifier before linkage. This identity metadata is not a site amount, energy conversion or assumed calorific value. A conflicting petroleum grade or synthetic formulation requires another compatible identity. Weigh fresh additions and unused stock/returns separately from operating oil stocks, leaks and drained used oil; never count internal recirculation or subtract drained waste from fresh input.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Polypropylene packaging strap (`pp_strap`)

Conditional finished PP strap; resin, textile twine and cable ties are different physical products. Include shipped strap plus site trim and stock change.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `corrim-northern-lumber-2025`

###### Polyethylene film (`pe_film`)

Conditional finished polyethylene packaging film; supplier polymer, additives, thickness and recycled content must match the background. Its names, CAS 9002-88-4 and material description identify polyethylene film, while the source luggage classification is contradictory and remains subject to clarification; do not treat all database metadata as verified. PET, agricultural film and extrusion-service identities are not substitutes.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `corrim-northern-lumber-2025`

###### Untreated solid-wood dispatch spacer (`wood_spacer`)

Conditional unassembled solid-wood dispatch spacer only, excluding pallets, boxes and structural-member wood. Verify this individual spacer identity, species, treatment and actual background before linkage.

- Selected flow: Untreated solid-wood dispatch spacer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `corrim-northern-lumber-2025`

#### Outputs

##### Product flows

###### Lumber for construction (`finished_member`)

The sole reference output: accepted unassembled single-piece coniferous beam or column with drawing-specific machined connection geometry and documented post-machining structural acceptance. Broader construction-lumber identity does not confer grade or capacity.

- Selected flow: Lumber for construction `73ef1fef-6aa1-43b0-8721-c8f2f1385509`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `usda-wood-handbook-2021`

###### Untreated coniferous machining sawdust sold as co-product (`sawdust_sale`)

Conditional saleable sawing/boring fine residue; record composition, actual contract, dry mass, moisture and destination. A sale does not turn captured emissions into product.

- Selected flow: Untreated coniferous machining sawdust sold as co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Untreated coniferous planer shavings sold as co-product (`shavings_sale`)

Conditional saleable coarse planer/router shaving stream, kept separate from sawdust, discarded fines and dust exhaust. Record dry mass and destination; never assume its quantity or sale.

- Selected flow: Untreated coniferous planer shavings sold as co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

##### Waste flows

###### Discarded untreated solid coniferous timber offcuts (`offcut_waste`)

Conditional discarded coarse solid coniferous end-cuts and structurally rejected pieces, untreated, unglued and non-agglomerated. The broad Offcut identity has concordant woodworking-remnant names and description with no specified treatment route; its source classification as agglomerated waste is contradictory and remains subject to clarification. Do not treat all database metadata as verified. Require actual wood species/state, absence of adhesive or coating, contamination, moisture, receiver and provider/background compatibility before linkage; incompatible physical material or treatment requires another identity. Keep reclaimed internal rework, saleable co-products, captured fine dust and external coarse waste separate; the same material has one destination.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Captured untreated coniferous machining dust waste (`dust_waste`)

Conditional captured untreated coniferous sawing, routing or sanding dust discarded to the actual combustion/recovery receiving route covered by this sawdust-waste identity. The identity includes fine dust through small wood particles; retain composition, contamination, moisture and destination evidence. Landfill or an incompatible treatment route requires another compatible waste identity. Weigh captured material once in Mass/kg; keep saleable residues, recycled internal material and emitted particulate separate. Captured dust is not an elementary emission, and external combustion is not onsite combustion in this dry mechanical route.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Used lubricating oil (`oil_waste`)

Conditional used petroleum lubricant at point of generation, before treatment. Identity allows used mineral/synthetic lubricant but no treatment route; actual formulation and authorised destination remain collected facts.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Discarded polyethylene packaging film at factory (`film_waste`)

Conditional site PE film trim and removed inbound wrapping; exclude intact film leaving with product. Record contamination and treatment destination.

- Selected flow: Discarded polyethylene packaging film at factory
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

###### Discarded polypropylene packaging strap at factory (`strap_waste`)

Conditional PP strap trim and removed inbound straps; keep polymer pure-stream quantity separate from film and mixed waste.

- Selected flow: Discarded polypropylene packaging strap at factory
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Conditional emitted size fraction at or below 2.5 micrometres after actual controls, to unspecified outdoor air. Measure emitted material, not dust captured in bags.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Conditional emitted non-overlapping fraction above 2.5 and at or below 10 micrometres, unspecified outdoor air. Long-term, indoor, urban/non-urban and correction-flow variants are not this identity.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### particles (> PM10) (`pmover10`)

Conditional emitted fraction above 10 micrometres, unspecified outdoor air. Total PM or nested PM10 cannot replace this fraction; preserve actual receiving subcompartment evidence.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-cohort unallocated total in this exchange unit divided by Q accepted net solid m3; per 1 m3 reference flow. Retain raw stage totals and stock changes; apply no burden-allocation share to this physical amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_ledgers` | all physical exchanges | Keep original physical cohort flows and the separately allocated environmental-burden account. Physical material balance and this inventory denominator precede allocation; final 1 m3 and co-product physical amounts are never multiplied by burden shares. Internal links, if disaggregated, match at both ends in quantity/state/period. | `corrim-northern-lumber-2025` |
| `allocation_specific` | component operations | First assign separately metered member-specific machining, acceptance, rework and dispatch packaging to that member. Residue collection is recorded physically. Identify saleable co-products from quality, contracts and destination; waste is not assigned saleable co-product burden. Keep supplier allocation separate from component allocation. | `corrim-northern-lumber-2025` |
| `allocation_shared` | inseparable joint burdens | When subdivision cannot resolve actual joint production, justify the physical relationship or an alternative reviewed basis. A dry-mass sensitivity case uses measured D_j and s_j=D_j/sum(D_saleable), sum(s_j)=1, for the explicitly identified joint stage only; terminal packaging/acceptance stays with members. Document alternatives and sensitivity. Northern softwood lumber mass allocation is a regional case, not a default for every component factory. No avoided-product credit in this attributional manufacturing account. | `corrim-northern-lumber-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | `component_machining` | reference geometry and grade | acceptance_record | member ID; drawing revision; species; grade standard/edition/method; lot; net section/length; tenon, bore, mortise and notch geometry; measured moisture gradient; accepted net wet mass; net volume; rejects; uncertainty | Calibrated dimensional survey/3D measurement against actual drawing with non-overlapping void subtraction; calibrated net weighing; moisture samples/electrical readings cross-checked by oven method; documented qualified post-machining acceptance; Accepted cohort Q is sum of actual net solid member volumes; retain each ID, moisture and geometry; per 1 m3 reference flow | m3; kg | each member/lot; each drawing change | Same documented accepted-production cohort | This component plant and explicitly traced supplier handoff | per 1 m3 reference flow | drawing; grade trace; calibration; acceptance and rejected-member record |
| `cp_material` | `component_machining` | stock and lubricant | material_record | receipt/issue/stock quantities; supplier gate; species; wet/oven-dry mass; moisture/density; dimensions/grade; lubricant product/SDS; petroleum grade/formulation and calorific-qualifier compatibility; fresh additions/unused returns; operating oil stocks; leaks/drains; maintenance use; stock change | Calibrated receiving/issue weighing and inventory records; actual species/state samples; supplier certificates and SDS; maintenance logs; Same-cohort unallocated net consumption divided by Q; per 1 m3 reference flow | kg | each receipt/batch; reconcile cohort | Same documented accepted-production cohort | This component plant and explicitly traced supplier handoff | per 1 m3 reference flow | scale/stock reconciliation; species/grade/moisture evidence |
| `cp_energy` | `component_machining` | machining_electricity | meter_record | opening/closing kWh; stage/machine circuit; operation and idle times; dust fan; electric handling; common meter split; voltage/mix; calibration | Calibrated circuit/stage meters; documented time/power attribution when direct submetering absent, with uncertainty and no duplicate fan/main meter load; Attributable unallocated cohort kWh×3.6 divided by Q; per 1 m3 reference flow | kWh; MJ | continuous/batch readings | Same documented accepted-production cohort | This component plant and explicitly traced supplier handoff | per 1 m3 reference flow | meter diagram; calibration; load/idle allocation records |
| `cp_packaging` | `component_machining` | pp_strap; pe_film; wood_spacer | packaging_record | separate material/specification; issues; returns; trim; reused spacer cycles; shipped mass; stocks; polymer/species/treatment | Weigh separate finished components; use invoice counts only with measured item mass; reconcile shipped, reused, discarded and stocked quantities; not structural-member mass; Same-cohort net individual packaging consumption divided by Q; per 1 m3 reference flow | kg | each dispatch/batch | Same documented accepted-production cohort | This component plant and explicitly traced supplier handoff | per 1 m3 reference flow | BOM; scales; polymer/species SDS; reuse records |
| `cp_residue` | `component_machining` | residue and waste outputs | residue_record | separate row ID; origin stage; wet mass/moisture; dry mass/carbon; sales/waste status; rework/stock change; destination; contamination; receipts | Calibrated net weighing by separate bin/contract; representative moisture/composition samples; stock reconciliation and sales/waste receipts; no duplicate material across destinations; Unallocated actual separate outgoing cohort totals divided by Q; per 1 m3 reference flow | kg | each bin/dispatch; cohort balance | Same documented accepted-production cohort | This component plant and explicitly traced supplier handoff | per 1 m3 reference flow | weighbridge/scale; samples; destinations; contracts; stock balance |
| `cp_air` | `component_machining` | pm25; pmcoarse; pmover10 | emission_record | source/outlet; control status; matched PM_total/PM10/PM2.5 definitions; concentration and gas flow/reference conditions; activity duration; fugitive test/model; blanks; uncertainties; subcompartment | Representative size-resolved outlet testing after controls plus evidenced fugitive measurements/models for the same cohort; measure flow/concentration on the same gas basis; no regional PTE factor default; Measured disjoint emitted mass totals divided by Q; per 1 m3 reference flow | kg; measured concentration/flow units | representative operation/control states and cohort duration | Same documented accepted-production cohort | This component plant and explicitly traced supplier handoff | per 1 m3 reference flow | sampling methods; calibration; source/control/activity evidence; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_volume` | all inventory rows | a_i=T_i/Q; Q is accepted actual net solid volume in m3; T_i is same-cohort unallocated exchange total in its verified unit; a_i is exchange per 1 m3 reference flow. Final wood volume total equals Q, so its normalized output is 1 m3. | T_i; Q; cp_reference; applicable row collection protocol | a_i | `usda-wood-handbook-2021` |
| `net_geometry` | finished_member | V_member=V_actual_outer_solid-V_removed_nonoverlap; retain actual tenon material and subtract overlapping holes/cuts once. Q=sum(V_accepted_member); measure geometry at dispatch moisture, not nominal drawing volume. | measured member and joint geometry; cp_reference | Q | `usda-wood-handbook-2021` |
| `electricity_conversion` | machining_electricity | T_MJ=3.6×T_kWh; a_electricity=T_MJ/Q; reconcile submeter totals/idle and common-load records without double counting. | T_kWh; Q; cp_energy; cp_reference | a_electricity |  |
| `wood_dry_balance` | sawn_stock; finished_member; sawdust_sale; shavings_sale; offcut_waste; dust_waste; pm25; pmcoarse; pmover10 | For each measured state D=m_wet/(1+u). Opening dry wood plus receipts equals accepted dry output plus sold/discarded/emitted wood and closing dry wood, with recorded other losses. Assess residual against measured uncertainty. Water and carbon ledgers use separate measured water/carbon fractions. Packaging wood is separately balanced; no assumption that PM is all wood without composition evidence. | cp_material; cp_reference; cp_residue; cp_air | dry/water/carbon balance residuals | `usda-wood-handbook-2021` |
| `particle_partition` | pm25; pmcoarse; pmover10 | T_pm25=T_PM2.5; T_pmcoarse=T_PM10-T_PM2.5; T_pmover10=T_PMtotal-T_PM10 only with comparable cumulative measurements and nonnegative differences; a_i=T_i/Q. Do not add nested PM10 or total again. | matched measured PM totals; Q; cp_air; cp_reference | a_pm25; a_pmcoarse; a_pmover10 | `epa-sawmill-pte-2014` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_structural` | finished member | Keep grading/stock lot linked to each drawing and machining record; establish post-cut remaining section, knots/checks and acceptance. Stock strength grade alone does not establish a drilled/notched joint capacity; use actual applicable engineering/grade authority and keep its limits. No universal grade/minimum dimensions/design loads asserted. | grade/drawing/acceptance dossier |
| `quality_cohort` | all rows | Keep numerator and accepted-volume denominator from identical scope/period; include rejects, rework and idle loads. Do not pool species, grade roles, node geometries or moisture states without traceable weighting and disclosure. | cohort and meter ledger |
| `quality_provider` | UUID-bearing rows | Identity is not a completed supplier dataset. Compare every background route, composition, reference quantity, gate, geographic/temporal and allocation/carbon basis; preserve unknown compatibility as pending and report completeness honestly. | provider contracts and documented comparison |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | finished_member | Require a one-piece dry untreated coniferous member and actual member-specific connection geometry/traceable post-machining structural acceptance. A strength grade, nominal beam name or intention to build alone does not meet this scope. Neither classifier nor UUID constitutes certification. | `usda-wood-handbook-2021` |
| `validate_quantity` | all inventory rows | Require Q>0 actual net solid accepted volume and one finished_member output of 1 m3. All row and collection bases are per 1 m3 reference flow; numerator units remain carrier/material-specific. Confirm provider volume convention before actual linking. Unknown UUID, basis, upstream or measurement is unresolved, never zero or complete. | `usda-wood-handbook-2021` |
| `validate_balances` | physical graph | Reconcile dry matter, water, material carbon and packaging with measured opening/closing stocks, receipts, accepted outputs, residues and emitted dust. Moisture changes do not manufacture dry wood; geometric removal is distinct from shrinkage. Quantify discrepancies against actual metering uncertainty and investigate; no invented fixed tolerance. Ensure internal rework/residue has one origin/destination and no duplicate purchase or sale. | `usda-wood-handbook-2021` |
| `validate_particles` | pm25; pmcoarse; pmover10 | Require comparable sampling point/period, controls, dry/wet gas definition and measured cumulative size cuts; 0<=PM2.5<=PM10<=PM_total. Report PM2.5, PM10-PM2.5, PM_total-PM10 as disjoint fractions only when those definitions match; never also sum nested PM10/total. A filterable-only total cannot establish a total including condensable matter. Unknown size/compartment needs review, not arbitrary split or correction flow. | `epa-sawmill-pte-2014` |
| `validate_sources` | completed package | Retain lot/drawing/grade records, meters, sampling, SDS and provider/background scope comparison, waste receipts, source limits and uncertainties. No regional PTE/lumber survey values become universal component amounts. Unknown stock thickness/moisture/grade state or undocumented machining rejects blocks complete delivery. | `usda-wood-handbook-2021`; `corrim-northern-lumber-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after completed measurements and source/basis checks |
| downstream_use | Qualified component input to an explicitly scoped building model; per net solid m3 at stated moisture |
| allowed_use | Same one-piece coniferous connection-machined member with matched grade, geometry, state and manufacturing gate |
| excluded_use | Ordinary sawn timber or continuous-profile substitution; hardwood/engineered wood; installed load/service equivalence; whole-CPC coverage; unverified provider-volume linkage; omission of actual extra routes |
| required_metadata | Species/grade authority and edition, drawing/acceptance, moisture/net-volume convention, density where converted, gate/site/period, supplier burdens, all atomic rows, allocation method and upstream carbon |
| required_quality_disclosure | Meter/sample uncertainty, representative operating states, completeness, unresolved UUID/basis/background, omissions and allocation sensitivity; no measured industry average implied |
| update_trigger | Changed species/grade/drawing/connection acceptance, supply moisture or volume convention, machinery/controls, packaging/chemistry, upstream provider or allocation scope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory. Wood handbook—wood as an engineering material. FPL-GTR-282 (2021). https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Ch.4 eqs.4-1/4-2 and Table4-5; Ch.6 p.6-8 structural timbers; Ch.13 p.13-2 moisture method; Ch.17 p.17-6 timber-frame joinery and shrinkage. Qualitative identity/measurement; no transferred grade, density, dimensions or quantity defaults. |
| `unsd-cpc31625-3` | official_guidance | UN Statistics Division. CPC Version 3.0, 31625 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31625 | Official classification includes fencing/guard-rail posts and building beams. Classification scope only; not a grading/manufacturing requirement or approval of building-column mapping. |
| `epa-sawmill-pte-2014` | official_guidance | Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country (EPA Region 10, May 2014). https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf | Memorandum and attached p.1 table/footnotes: size cuts, residues and potential-emission scope excluding boilers. No PTE factor or enclosed-workshop zero/reduction transferred; filterable/condensable scope retained. |
| `corrim-northern-lumber-2025` | literature | Life Cycle Assessment of Softwood Lumber Production – Northern Region (22 July 2025 revision). https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf | §3.2.6 p.16 and §3.3 p.18: partition of environmental burdens, regional lumber physical-allocation case, terminal packaging attribution. Biogenic LCI versus GWP convention and context/sensitivity only; no survey moisture, yield, emissions or component-machining energy defaults. |
