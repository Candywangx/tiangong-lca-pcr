---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.plastic-injection-mould-tooling
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of complete steel plastic-injection mould tooling

## 1. Scope and Applicability

Manufacture of a new complete steel mould for thermoplastic injection moulding: one configured fixed/moving-half set with declared cavity/core, base, guidance, ejection, cooling and gating interfaces. The representative route uses conventional steel inserts and cold runners; a hot runner is included only as an actual installed option. This narrower CPC44916 boundary excludes separately sold bases, inserts and spare parts; foundry boxes/patterns, ingot/metal/carbide/glass/mineral/rubber moulds, blow/compression/extrusion tooling, aluminium moulds, additively manufactured conformal-cooling inserts, refurbishment, injection-moulding machines and external controllers/robots/temperature-control plants. Those routes need explicit expansion. Customer plastic-part production, lifetime shots, mould maintenance/use and end of life are outside. Uddeholm Edition17, March2021 is historical grade-specific manufacturing guidance; the undated HASCO poster is one two-cavity hot-runner example. Neither establishes universal components, steel grades, factory quantities, net mass or service life. Manufacturing mass is not equivalent moulding performance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.plastic-injection-mould-tooling |
| classification_refs | CPC 3.0 44916; narrower candidate scope; no accepted mapping asserted |
| covered_products | New complete configured steel thermoplastic injection moulds |
| excluded_products | Standalone tooling components; other moulding technologies/material routes; moulding machines; customer plastic production and use |
| representative_product | One complete fixed/moving-half steel tool with conventional inserts and declared cold-runner arrangement; hot runner only if installed |
| production_route | Receipt and certificate/configuration control; actual stock machining; conditional EDM/heat treatment/finishing; bought-component assembly; actual factory acceptance and dispatch protection |
| market_state | Accepted complete drained delivery configuration at declared factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one declared complete steel thermoplastic injection-mould configuration |
| How much | 1 kg accepted net complete mould; one complete unit is represented by its physically measured M kg |
| How well | Meet the actual drawing-specific dimensional, parting/ejection/assembly, cooling leak and applicable hot-runner electrical and tryout acceptance plan. Record actual criteria/results; no universal hardness, roughness, pressure or shot count |
| How long or cycle | One manufacturing delivery; no customer moulding cycle or lifetime inferred |
| reference_flow_link | `finished_mould` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Moulding boxes for metal foundry, mould bases, moulding patterns, moulds for metal (except ingot moulds), metal carbides, glass, mineral materials, rubber or plastics `da241301-584e-4c9c-baa7-2208878acd1d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Tool serial/drawing/BOM revision; complete fixed/moving-half set; cavity count and geometry; steel grades/certificates and delivered heat state; local/bought insert routes; base/guidance/ejection/cooling/gating completeness; runner and installed hot-runner components; supplier internals; actual acceptance criteria/results; drained state/retained lubricant; measured positive M; factory/period/gates; sample/test-water/packaging/transport-fixture/loose-spare/external-controller exclusions |

A complete unit means one identified fixed/moving-half set, not an injection-moulding machine or each mould half separately. Declare qualifiers in dataset metadata or equivalent notes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `delivery_completeness` | delivery configuration | Mass | kg | Include both mould halves, specified inserts and installed options plus retained delivery lubrication in drained state. Exclude packaging, transport braces/fixtures, removable trial couplings, samples/polymer/test water and separate spares/controllers. If dispatched apart, retain the original accepted complete-set weighing and traceable identity of every included half/part; shipping weights and catalogue masses cannot replace net weighing. |
| `electricity_energy` | electricity_machining; electricity_edm; electricity_thermal; electricity_finishing; electricity_assembly; electricity_tryout | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain metered kWh; convert1 kWh =3.6 MJ. Record source/voltage, stage and actual time/load. Rated press power or invented machining hours cannot establish factory consumption. |
| `fluid_mass` | coolant; dielectric; nitrogen; diwater; tap_water_machining; tap_water_tryout; spent_emulsion; spent_dielectric; spent_edm_water; test_wastewater | Mass | kg | Measure the single specified delivered formulation/state or contained waste. Volume requires actual density, temperature/pressure and evidenced conversion; purchased mixtures do not also add constituent inputs. Gaseous nitrogen cannot inherit a liquid-nitrogen identity. |
| `water_resource_volume` | groundwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter actual renewable freshwater groundwater abstraction and retain aquifer/site evidence. Resource volume is separate from purchased process-water and exported wastewater mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified steel blocks, consumables and separately specified finished mould components received at tooling factory |
| starting_condition_role | Foreground receipts; supplier manufacture/incoming transport separately linked |
| product_classification_scope | Complete steel thermoplastic injection-mould subset of CPC44916 |
| recursive_input_rule | Bought finished bases/inserts replace their stock and local manufacture; purchased complete hot-runner assemblies replace their included heaters/nozzles/manifold. Internal transfers are WIP, not repeated inputs |
| upstream_dataset_requirement | Match actual steel state, component design/completeness, CNC/EDM/thermal route, chemical formulation, source/geography and supplier/receiver gate |
| disclosure | Foreground manufacturing module only. Declare make-or-buy, outsourcing, actual utility/tryout routes and missing supplier/transport/treatment links; no complete cradle-to-gate claim |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | Include actual receipt inspection, sawing/milling/drilling, conditional sinker/wire EDM, grade-specific heat treatment and surface finishing, dimensional checks, fitting, guiding/ejector/cooling/gate assembly, applicable electrical and leak checks, actual factory tryout, acceptance and attributable rejects/rework. Prehardened stock does not force heat treatment; the supplier delivery state controls the local route. Expand actual washing, solvent/coating, corrosion protection, local electrode making, pumping/deionisation or outsourced service exchanges if present before coverage claims. Initial cards are not a universal BOM. | uddeholm-plastic-moulding-2021 |
| `boundary_tryout` | tryout | Acceptance remains required, but physical injection tryout is included only as actually performed. Record press/tool/resin identity, measured feed/energy, cycle count, sample/runner/reject exports, recovered resin and cooling water. Customer production trials after the declared gate are outside. Trial samples are separate outputs; their polymer is never mould mass. No fixed shot count, resin dose or mould lifetime adopted. |  |
| `boundary_semantic` | reference_product | Existing metal-machining-centre methodology covers the delivered machine and excludes custom-part manufacture. Mouldboard wording in agricultural ploughs refers to a plough component, not injection moulds. No existing material PCR in this baseline covers this complete mould boundary. Keep old classification scaffold/id read-only; this record does not assert mapping acceptance. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `machining` | Stock preparation and CNC machining | conditional | Actual local milling/drilling of specified steel stock | Foreground stage; internal WIP remains within module | per 1 kg reference flow; collected per one accepted finished unit |
| `edm` | Declared electrical-discharge machining | conditional | Actual sinker or wire-EDM route only | Foreground stage; internal WIP remains within module | per 1 kg reference flow; collected per one accepted finished unit |
| `thermal` | Declared steel heat treatment | conditional | Actual grade-specific local electric vacuum/quench/temper route | Foreground stage; internal WIP remains within module | per 1 kg reference flow; collected per one accepted finished unit |
| `finishing` | Declared cavity/core finishing | conditional | Actual drawing-specific grinding/polishing | Foreground stage; internal WIP remains within module | per 1 kg reference flow; collected per one accepted finished unit |
| `assembly` | Configured complete mould assembly | required | One declared complete fixed/moving-half set | Foreground stage; internal WIP remains within module | per 1 kg reference flow; collected per one accepted finished unit |
| `tryout` | Factory inspection and acceptance | required | Model-specific acceptance; injection tryout only if actually performed | Foreground stage; internal WIP remains within module | per 1 kg reference flow; collected per one accepted finished unit |
| `packout` | Dispatch protection | conditional | Actual specified protection | Foreground stage; internal WIP remains within module | per 1 kg reference flow; collected per one accepted finished unit |

### Process: Stock preparation and CNC machining (`machining`)

#### Inputs

##### Product flows

###### Prehardened P20 steel mould block (`p20_stock`)

Only if an actual in-house core/cavity route uses this single certificate-declared grade/state and block geometry. Weigh net received/issued stock and returns, record allowance and actual routing. Purchased finished insert replaces stock and local machining. Historical supplier examples do not make these grades mandatory.

- Selected flow: Prehardened P20 steel mould block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: uddeholm-plastic-moulding-2021

###### Soft-annealed H13 steel mould block (`h13_stock`)

Only if an actual in-house core/cavity route uses this single certificate-declared grade/state and block geometry. Weigh net received/issued stock and returns, record allowance and actual routing. Purchased finished insert replaces stock and local machining. Historical supplier examples do not make these grades mandatory.

- Selected flow: Soft-annealed H13 steel mould block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Low-voltage grid electricity (`electricity_machining`)

Meter actual stage and attributable rework. This public identity is user-side grid-average AC below1kV; another source or voltage requires a matching separate exchange. Outsourced operations are not also counted as local electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Emulsifiable mineral-oil cutting-fluid concentrate (`coolant`)

Only one actual supplier-declared emulsifiable mineral-oil formulation/concentration. Weigh net concentrate make-up; water added locally is separate. Narrow the generic cutting-fluid identity to this actual product and retain SDS/composition. A bought ready-mixed emulsion replaces this concentrate plus dilution-water route. No universal dilution ratio.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Supplied drinking-quality tap water (`tap_water_machining`)

Only actual supplied drinking-quality water for this stage: machining-emulsion preparation or mould leak/cooling tests as applicable. Meter fresh make-up and convert volume with actual density/temperature; exclude internal recirculation and supplier mixture water. No customer cooling-water inventory.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

##### Elementary flows

###### Abstracted renewable freshwater groundwater (`groundwater`)

Only actual factory well abstraction with source/aquifer records confirming renewable freshwater and the declared country/site. Meter m3 and expand pumping/treatment inputs; the same water is not also a tap purchase, and recirculation is not abstraction.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_resource.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water_resource`
- Sources:

#### Outputs

##### Waste flows

###### Untreated clean P20 steel mould-block offcut (`p20_offcut`)

Weigh segregated actual clean offcuts of this single certified alloy exported without treatment. Narrow public steel-offcut identity to this grade; internal reuse is not export and no avoided-primary-steel credit is automatic.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Untreated clean H13 steel mould-block offcut (`h13_offcut`)

Weigh segregated actual clean offcuts of this single certified alloy exported without treatment. Narrow public steel-offcut identity to this grade; internal reuse is not export and no avoided-primary-steel credit is automatic.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Clean P20 steel machining chips (`p20_chips`)

Only actual segregated clean chips of this alloy after the declared separation. Weigh exported mass and document residual contamination; oily chips require another identity/row. The public clean-chip category is narrowed; its yield assumptions are not quantities.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Clean H13 steel machining chips (`h13_chips`)

Only actual segregated clean chips of this alloy after the declared separation. Weigh exported mass and document residual contamination; oily chips require another identity/row. The public clean-chip category is narrowed; its yield assumptions are not quantities.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Oil-contaminated P20 steel machining chips (`oily_p20_chips`)

Only actual exported oily chips with alloy certificate, measured oil/water content, wet mass and receiver record. Distinguish separated fluid and clean chips; no fabricated de-oiling efficiency.

- Selected flow: Oil-contaminated P20 steel machining chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral-oil aqueous cutting emulsion (`spent_emulsion`)

Weigh the actual contained solution exported to off-site treatment and retain oil concentration, metal contamination and receiver gate. Public spent-coolant identity is narrowed to this emulsion. Internal reuse and metal chips are separate; no default fluid-loss fraction.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Declared electrical-discharge machining (`edm`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_edm`)

Meter actual stage and attributable rework. This public identity is user-side grid-average AC below1kV; another source or voltage requires a matching separate exchange. Outsourced operations are not also counted as local electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished shaped copper sinker-EDM electrode (`copper_electrode`)

Only if the actual declared EDM route uses this single design/formulation. Weigh net issues or attributable replacement/consumption, retain specification, reuse/remaining stock and served orders. Copper sinker, graphite sinker and brass-wire routes are alternatives according to actual records, not simultaneous mandatory inputs. Purchased shaped electrodes exclude their supplier stock/machining from additional local issues.

- Selected flow: Finished shaped copper sinker-EDM electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Finished shaped fine-grain graphite sinker-EDM electrode (`graphite_electrode`)

Only if the actual declared EDM route uses this single design/formulation. Weigh net issues or attributable replacement/consumption, retain specification, reuse/remaining stock and served orders. Copper sinker, graphite sinker and brass-wire routes are alternatives according to actual records, not simultaneous mandatory inputs. Purchased shaped electrodes exclude their supplier stock/machining from additional local issues.

- Selected flow: Finished shaped fine-grain graphite sinker-EDM electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Finished uncoated brass wire-EDM electrode wire (`brass_wire`)

Only if the actual declared EDM route uses this single design/formulation. Weigh net issues or attributable replacement/consumption, retain specification, reuse/remaining stock and served orders. Copper sinker, graphite sinker and brass-wire routes are alternatives according to actual records, not simultaneous mandatory inputs. Purchased shaped electrodes exclude their supplier stock/machining from additional local issues.

- Selected flow: Finished uncoated brass wire-EDM electrode wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Formulated mineral-oil sinker-EDM dielectric fluid (`dielectric`)

Only if the actual declared EDM route uses this single design/formulation. Weigh net issues or attributable replacement/consumption, retain specification, reuse/remaining stock and served orders. Copper sinker, graphite sinker and brass-wire routes are alternatives according to actual records, not simultaneous mandatory inputs. Purchased shaped electrodes exclude their supplier stock/machining from additional local issues.

- Selected flow: Formulated mineral-oil sinker-EDM dielectric fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Finished cellulose sinker-EDM oil filter cartridge (`filter`)

Only if the actual declared EDM route uses this single design/formulation. Weigh net issues or attributable replacement/consumption, retain specification, reuse/remaining stock and served orders. Copper sinker, graphite sinker and brass-wire routes are alternatives according to actual records, not simultaneous mandatory inputs. Purchased shaped electrodes exclude their supplier stock/machining from additional local issues.

- Selected flow: Finished cellulose sinker-EDM oil filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Purchased deionised wire-EDM process water (`diwater`)

Only actual purchased deionised water produced by ion exchange or reverse osmosis, matching the public route. Weigh fresh make-up; internal circulation is excluded. On-site deionisation replaces purchase with actual feed water, resin/membrane and energy; do not duplicate both gates. Record actual conductivity criterion, not a universal purity.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Waste flows

###### Spent mineral-oil sinker-EDM dielectric fluid (`spent_dielectric`)

Only actual segregated exports to the documented receiver. Weigh this one waste stream and retain composition, alloy/electrode particles, oil/water content and wet/dry state. Internal recovery and retained process fluid are not export; another waste composition needs a separate row.

- Selected flow: Spent mineral-oil sinker-EDM dielectric fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Spent aqueous wire-EDM process water (`spent_edm_water`)

Only actual segregated exports to the documented receiver. Weigh this one waste stream and retain composition, alloy/electrode particles, oil/water content and wet/dry state. Internal recovery and retained process fluid are not export; another waste composition needs a separate row.

- Selected flow: Spent aqueous wire-EDM process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Spent cellulose sinker-EDM oil filter cartridge (`spent_filter`)

Only actual segregated exports to the documented receiver. Weigh this one waste stream and retain composition, alloy/electrode particles, oil/water content and wet/dry state. Internal recovery and retained process fluid are not export; another waste composition needs a separate row.

- Selected flow: Spent cellulose sinker-EDM oil filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Declared steel heat treatment (`thermal`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_thermal`)

Meter actual stage and attributable rework. This public identity is user-side grid-average AC below1kV; another source or voltage requires a matching separate exchange. Outsourced operations are not also counted as local electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Supplied gaseous nitrogen for mould-steel quenching (`nitrogen`)

Only an actual nitrogen-gas quench procedure at this site. Weigh gas or use evidenced pressure/temperature/density conversion; liquid supply and on-site vaporisation require their own separate boundary. No compulsory quench gas, pressure, temperature or steel-treatment recipe.

- Selected flow: Supplied gaseous nitrogen for mould-steel quenching
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

### Process: Declared cavity/core finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter actual stage and attributable rework. This public identity is user-side grid-average AC below1kV; another source or voltage requires a matching separate exchange. Outsourced operations are not also counted as local electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Diamond polishing paste with mineral-oil carrier (`diamond_paste`)

Only one actual supplier-declared formulation/particle grade or disc binder/design. Weigh net paste issues or measured disc replacement to served orders, retain composition and actual surface requirement. A required optical finish is model-specific; no mandatory polish route or universal abrasive rate.

- Selected flow: Diamond polishing paste with mineral-oil carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Finished aluminium-oxide abrasive disc (`abrasive_disc`)

Only one actual supplier-declared formulation/particle grade or disc binder/design. Weigh net paste issues or measured disc replacement to served orders, retain composition and actual surface requirement. A required optical finish is model-specific; no mandatory polish route or universal abrasive rate.

- Selected flow: Finished aluminium-oxide abrasive disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Waste flows

###### Spent aluminium-oxide abrasive disc (`spent_disc`)

Weigh actual exported disc with binder/abrasive/adherent steel recorded; narrow public polishing-media category to this one design and keep captured dust separate.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Captured dry tool-steel polishing dust (`captured_dust`)

Only actual contained dust exported to a receiver; record single alloy, abrasive contamination and dry state. This is not airborne particulate or clean offcut.

- Selected flow: Captured dry tool-steel polishing dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Particulate emitted to air, size unspecified (`air_particulate`)

Only if actual post-control monitoring confirms emitted particulate mass, unspecified size and air subcompartment. Pair concentration and exhaust volume on the same sampling basis. Captured dust is separate; specific particle fractions need matching identities. Grinding/polishing alone does not prove emission.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Configured complete mould assembly (`assembly`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_assembly`)

Meter actual stage and attributable rework. This public identity is user-side grid-average AC below1kV; another source or voltage requires a matching separate exchange. Outsourced operations are not also counted as local electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished steel injection-mould base assembly (`mould_base`)

Only one actual complete bought base, with plate stack, guiding/ejection inclusions, steel grade and measured delivered mass declared. Narrow the broad mould/base public category to this one item, not a complete cavity-equipped mould. Exclude included plates/pillars from additional issues; local base fabrication instead needs stock and machining expansion.

- Selected flow: Moulding boxes for metal foundry, mould bases, moulding patterns, moulds for metal (except ingot moulds), metal carbides, glass, mineral materials, rubber or plastics `da241301-584e-4c9c-baa7-2208878acd1d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished CNC-milled P20 steel cavity insert (`cavity_insert`)

Only one separately bought pre-assembly CNC-milled/drilled insert of the actual declared prehardened P20 grade/design. Weigh delivered kg and retain supplier completeness; narrow the public machined-component identity to this role. An EDM/thermal/other supplier route requires a matching identity; locally machined WIP is internal, not this input. No machining step-time-to-mass factor.

- Selected flow: Machined mould/tooling components `1a185678-4878-4d8d-b58e-6fc5fd0682e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished CNC-milled P20 steel core insert (`core_insert`)

Only one separately bought pre-assembly CNC-milled/drilled insert of the actual declared prehardened P20 grade/design. Weigh delivered kg and retain supplier completeness; narrow the public machined-component identity to this role. An EDM/thermal/other supplier route requires a matching identity; locally machined WIP is internal, not this input. No machining step-time-to-mass factor.

- Selected flow: Machined mould/tooling components `1a185678-4878-4d8d-b58e-6fc5fd0682e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished hardened-steel mould guide pillar (`guide_pillar`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished hardened-steel mould guide pillar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished hardened-steel mould guide bush (`guide_bush`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished hardened-steel mould guide bush
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished steel mould ejector pin (`ejector_pin`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished steel mould ejector pin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished steel mould sprue bushing (`sprue_bush`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished steel mould sprue bushing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished steel mould locating ring (`locating_ring`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished steel mould locating ring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished steel hexagon-socket head cap screw (`cap_screw`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished steel hexagon-socket head cap screw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished NBR rubber cooling-channel O-ring (`o_ring`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished NBR rubber cooling-channel O-ring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel mould-cooling quick coupling (`cooling_coupling`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished steel mould-cooling quick coupling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel hot-runner manifold assembly (`hot_manifold`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished steel hot-runner manifold assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished hot-runner nozzle assembly (`hot_nozzle`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished hot-runner nozzle assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Finished type-K hot-runner thermocouple (`thermocouple`)

Only one actual separately supplied design installed in this configuration. Retain part number, material/thermal state, dimensions, quantity, measured mass and included subparts. Hot-runner items are conditional and exclude supplied heater/sensor internals from another issue. Actual cold-runner, cooling, side-action/ejection designs determine applicability; no universal HASCO component count or rubber chemistry.

- Selected flow: Finished type-K hot-runner thermocouple
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished non-carbon tubular hot-runner heating resistor (`heater`)

Only one actual separately supplied metal-sheathed non-carbon resistor design; record electrical rating, measured mass and installed position. Narrow public heater category to this design and exclude heater already supplied inside manifold/nozzle assemblies. Rating is configuration, not mass or energy consumed.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: hasco-injection-mould-nut

###### Lithium-soap mineral-oil mould lubricating grease (`grease`)

Only actual factory-added specified grease, measured as net issues/returns. Exclude supplier-prelubricated internals and record retained delivered lubrication in M; customer use-phase lubrication is outside.

- Selected flow: Lithium-soap mineral-oil mould lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

### Process: Factory inspection and acceptance (`tryout`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_tryout`)

Meter actual stage and attributable rework. This public identity is user-side grid-average AC below1kV; another source or voltage requires a matching separate exchange. Outsourced operations are not also counted as local electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Supplied drinking-quality tap water (`tap_water_tryout`)

Only actual supplied drinking-quality water for this stage: machining-emulsion preparation or mould leak/cooling tests as applicable. Meter fresh make-up and convert volume with actual density/temperature; exclude internal recirculation and supplier mixture water. No customer cooling-water inventory.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Unfilled polypropylene granulate for factory mould tryout (`trial_pp`)

Only when actual acceptance tryout uses one supplier-declared unfilled PP grade. Retain grade/homopolymer-or-copolymer identity in metadata, certificates, measured net feed, recovered material and actual cycles. Narrow public polymerisation-granulate category to this grade; another polymer/blend needs separate identity. No customer production shot count or lifetime feed factor.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Factory injection-moulded unfilled PP acceptance sample (`trial_sample`)

Only actual separately weighed acceptance samples leaving the tooling-manufacture module to declared customer/inspection/archive gate. Retain sample shape/grade, disposition and batch count; samples are not mould mass. No commercial co-product or recycling credit is inferred. Samples retained inside the module are internal WIP instead.

- Selected flow: Factory injection-moulded unfilled PP acceptance sample
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trial_output.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_trial_output`
- Sources:

###### Accepted complete configured steel plastic-injection mould (`finished_mould`)

Reference output after actual dimensional, assembly/parting/ejection, cooling leak, hot-runner electrical and model-specific acceptance as applicable. One complete fixed/moving-half set with declared inserts and installed options; subtract no invented sample/water mass. Weigh delivered drained state with retained lubricant; exclude transport packaging/fixtures, test samples, removable test couplings and separate controllers/spares. Public category is narrowed to this complete thermoplastic tool.

- Selected flow: Moulding boxes for metal foundry, mould bases, moulding patterns, moulds for metal (except ingot moulds), metal carbides, glass, mineral materials, rubber or plastics `da241301-584e-4c9c-baa7-2208878acd1d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources: hasco-injection-mould-nut

##### Waste flows

###### Clean unfilled PP factory-tryout runner waste (`pp_runner`)

Only actual segregated waste from the declared PP tryout, exported to a recorded mechanical-recycling receiver matching the public route. Weigh this single physical waste separately and retain resin grade/contamination; internal regrind is not export. Treatment is separately linked, with no automatic avoided-resin credit.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Rejected unfilled PP factory-tryout specimen waste (`pp_reject`)

Only actual segregated waste from the declared PP tryout, exported to a recorded mechanical-recycling receiver matching the public route. Weigh this single physical waste separately and retain resin grade/contamination; internal regrind is not export. Treatment is separately linked, with no automatic avoided-resin credit.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Contained water from mould-cooling leak testing (`test_wastewater`)

Only actual drained water exported to external treatment; measure solution mass and record contamination/receiver. Reused cooling water is internal; direct environmental discharge needs separate species and medium. No default test-water volume.

- Selected flow: Contained water from mould-cooling leak testing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Dispatch protection (`packout`)

#### Inputs

##### Product flows

###### Finished wooden dispatch pallet (`wood_pallet`)

Only actual dispatch protection of this single specified product. Weigh net attributable issues and exclude from M. Pallet design/species/moisture/treatment and reuse are declared; foil is non-adhesive/unreinforced; cardboard is recycled-fibre C-flute with at least80% fibre. A different specification needs a separate compatible row, without universal packing mass or single-use assumption.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Non-cellular LDPE protective foil (`ldpe_film`)

Only actual dispatch protection of this single specified product. Weigh net attributable issues and exclude from M. Pallet design/species/moisture/treatment and reuse are declared; foil is non-adhesive/unreinforced; cardboard is recycled-fibre C-flute with at least80% fibre. A different specification needs a separate compatible row, without universal packing mass or single-use assumption.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### C-flute corrugated cardboard (`cardboard`)

Only actual dispatch protection of this single specified product. Weigh net attributable issues and exclude from M. Pallet design/species/moisture/treatment and reuse are declared; foil is non-adhesive/unreinforced; cardboard is recycled-fibre C-flute with at least80% fibre. A different specification needs a separate compatible row, without universal packing mass or single-use assumption.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_causal` | shared_operations | Separate orders/routes by direct measurement first. Reconcile shared measured CNC/EDM/finishing and assembly/tryout utility totals using actual stage time/load and material issues with documented causal drivers, including idle, rejects and rework. For a real thermal batch, record loaded steel mass, grade/recipe and actual furnace cycle; justify allocation to served orders, not a universal furnace factor. Report uncertainty and sensitivity where the driver is imperfect. |  |
| `allocation_trial` | tryout | Actual acceptance tryout belongs to this mould manufacturing order. Track samples, runner/reject waste, recovered resin and cooling-fluid reuse separately; no automatic commercial co-product or avoided-polymer credit. If samples have a real commercial function, declare the changed multi-output boundary and evidence-based allocation before use. Reusable electrodes/filter life and retained fluid are attributed from actual replacement/served-order records, not one full item consumed per mould. |  |
| `allocation_balance` | manufacturing_batch | Reconcile received stock, finished installed mass, exports, WIP and internal recovery for the same period/configuration. Attribute rework/reject burden to accepted complete units. Scrap exits at its recorded receiver gate; no automatic substitution credit, equal-per-unit or sales-value allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | tryout | reference_product | calibrated net weighing | serial; configuration; accepted net mass M; both halves/options; scale/tare; acceptance; drained state; excluded packaging | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each complete accepted configuration | same declared production period; disclose gaps | declared tooling manufacturing site | accepted net mass per unit | scale calibration; net weigh ticket; complete-set acceptance |
| cp_configuration | assembly; tryout | configuration | drawing/BOM and route ledger | serial; cavity/core/base; grade/heat certificates; cavity count; guidance/ejection/cooling/gate; runner/options; make-or-buy; actual finish/acceptance; site/period | Crosswalk every actual drawing/BOM item and operation to an atomic exchange or justified exclusion. Verify supplier internals and the complete fixed/moving-half set, not brochure component counts. Record actual tolerances, hardness/surface and test results without universal thresholds. | kg | each drawing/build revision | same declared production period; disclose gaps | declared tooling manufacturing site | one traceable complete configuration | drawing; certificates; signed routing/BOM and inspection |
| cp_material | machining; edm; thermal; finishing; assembly; tryout; packout | individual stock/consumable | net issues and weighing | one material/design; grade/state/formulation; delivered mass; issues/returns; reuse; density/temperature/pressure if volume; served orders; accepted count | Weigh actual net stock, fluids, electrodes, abrasive, grease, resin and protection separately. Record composition/state and actual reuse/replacement. Convert volume only with actual evidenced density/conditions; exclude constituents of bought mixtures. Trial resin feed and returned material are measured, not inferred from shots. | kg | each issue/return and production batch | same declared production period; disclose gaps | declared tooling manufacturing site | attributable net material mass / accepted units of the same configuration | scale; certificates/SDS; inventory and served-order ledger |
| cp_parts | assembly | individual installed component | weighing and supplier completeness | part/design; steel state; mass; supplier-included internals; installed count; accepted count; CNC-only route if selected | Weigh supplied finished components or verify actual lot-specific part mass/count records. Reconcile base, separate CNC inserts, guidance/ejection, seals/cooling, gate and installed hot runner. Exclude parts included in purchased assemblies and local WIP; no standard catalogue component-mass factor. | kg | each supplied lot and build batch | same declared production period; disclose gaps | declared tooling manufacturing site | attributable installed component mass / accepted units of the same configuration | scale; supplier boundary; part certificates and actual BOM |
| cp_energy | machining; edm; thermal; finishing; assembly; tryout | electricity | meter and causal-driver ledger | stage; source/voltage; metered kWh; interval; shared total; actual load/time; idle/rework; accepted count | Meter actual stages and press/tool tryout only as performed. Convert1 kWh =3.6 MJ. Attribute shared totals with measured causal drivers and reconcile idle/rework/rejects. Rated power or supplier machining-time examples are not energy quantities. | MJ | each actual stage interval/batch | same declared production period; disclose gaps | declared tooling manufacturing site | attributable electrical energy / accepted units of the same configuration | meter calibration; bills; stage/load allocation records |
| cp_waste | machining; edm; finishing; tryout | individual exported waste | segregated weighing and receiver receipts | one waste; alloy/composition; wet/dry; oil/water contamination; exported mass; internal recovery; receiver/treatment; accepted count | Weigh each actual alloy offcut, clean/oily chip, spent fluid/filter/disc, captured dust, PP runner/reject and contained test water separately. Retain actual concentration/contamination and treatment gate. Clean-chip identity excludes oily chips; selected PP waste requires mechanical-recycling receiver. Reuse is not export; measured direct discharge needs individual species/medium expansion. | kg | each export and reconciled batch | same declared production period; disclose gaps | declared tooling manufacturing site | attributable exported waste mass / accepted units of the same configuration | scale; composition; receiver/treatment receipts |
| cp_emission | finishing | single air particulate | post-control monitoring | substance; medium/submedium; particle size; concentration; exhaust volume; sampling basis; interval; background; accepted count | Only actual post-control emitted particulate: pair mass concentration and exhaust volume on the same sampling basis, with corrections and uncertainty. Confirm unspecified size/air medium for this UUID. Captured dust is not emission. Expand a specific fraction or other measured substance separately; no mandatory release factor. | kg | representative actual emitting intervals | same declared production period; disclose gaps | declared tooling manufacturing site | attributable measured particulate mass / accepted units of the same configuration | monitoring; sampler/flow calibration; medium and size evidence |
| cp_water_resource | machining | groundwater | well meter and source record | aquifer renewability/freshwater; site/country; m3; interval; pumping/treatment; stage use/reuse; accepted count | Meter actual renewable freshwater groundwater at the factory; verify aquifer qualification and separately expand pumping/treatment. Internal circulation is not abstraction; the same water cannot also be a tap-water purchase. | m3 | each metered interval/batch | same declared production period; disclose gaps | declared tooling manufacturing site | attributable abstracted water volume / accepted units of the same configuration | meter; aquifer/site record; stage water balance |
| cp_trial_output | tryout | one actual PP acceptance-sample output | separate weighing and disposition | sample shape/resin grade; batch; actual exported kg; retained samples; runner/reject separation; receiver; accepted count | Weigh the single specified acceptance-sample product leaving this module; record actual customer/inspection/archive gate. Retained sample WIP and exported PP waste are separate. No sample mass is included in mould M and no commercial output function is inferred. | kg | each actual acceptance-sample export | same declared production period; disclose gaps | declared tooling manufacturing site | attributable exported sample mass / accepted units of the same configuration | scale; resin/sample identity; acceptance and disposition record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | Use identical configuration, period and accepted count for positive measured M and exchange numerators. Reconcile fixed/moving halves, installed inserts/runner/options, supplied internals and make-or-buy. Retain grade/state, actual finish/acceptance, trial feeds/samples/recovery, drained delivery and uncertainty. | cp_configuration; cp_mass; cp_parts; cp_material; cp_trial_output |
| `quality_coverage` | inventory_and_links | Disclose missing BOM items/routes, measurements, UUIDs and supplier/transport/treatment links. Site evidence controls optional EDM/thermal/finishing/physical tryout. No universal material grade, machining yield, heat recipe, resin dose, shot count, emission or lifetime factor. | cp_configuration; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | Uddeholm Edition17 March2021 pp.10–12 provides historical supplier-grade machining/thermal/finishing examples, not current universal prescriptions. HASCO undated one-page poster shows one two-cavity hot-runner tool; PDF creation metadata is not publication date. Neither fixes actual BOM quantities, steel chemistry, required hot runner, measured M or life. | uddeholm-plastic-moulding-2021; hasco-injection-mould-nut |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require one complete fixed/moving-half configuration, positive physically measured M in kg and cp_mass weighing/acceptance record. Reference output is1kg; normalize every other kg, MJ or m3 exchange using normalize_mass. Keep drained-state and delivery exclusions explicit. |  |
| `validation_bom` | inventory | Check every actual steel stock or finished base/insert, guide/ejector, cooling/seal/gating and installed hot-runner item against BOM and route records. Check local/bought alternatives, exact CNC-only selected route, fluid/electrode reuse, sample/waste balances, rejects/rework and receiver gates. Expand absent actual cards before asserting complete coverage. |  |
| `validation_identity` | all inventory rows | Verify public flow type, grade/formulation, reference property/unit group, actual state/route/completeness and official localized name. Clean chips exclude oily chips; graphite steelmaking electrodes exclude EDM electrodes; liquid nitrogen excludes gaseous product. Groundwater resource, purchased process water and contained wastewater are distinct. Air particulate is not captured dust. |  |
| `validation_claims` | dataset_claims | No complete cradle-to-gate claim without actual route and linked supplier/transport/receiver coverage. Tool manufacturing mass does not prove cavity throughput, plastic-part equivalence, lifetime, regulatory conformity or methodology approval. Independent scientific review remains pending. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground complete steel plastic-injection mould manufacturing module; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete configured tooling manufacture scaled by measured M; linked upstream/transport/treatment separately disclosed |
| excluded_use | Customer plastic-part manufacture, use/lifetime, standalone components, other mould technologies/material routes and methodology approval |
| required_metadata | All reference qualifiers; drawing/BOM/cavity/runner revision; steel certificates/heat states; actual make-or-buy and supplied internals; EDM/thermal/finish/tryout routes; measured complete-set M and delivery exclusions; actual criteria/results; trial resin/sample/waste/recovery; site/period/gates, causal allocation and linked suppliers/receivers |
| required_quality_disclosure | Missing identities/measurements/BOM/routes/links; uncertainty, actual reuse/rejects/rework, allocation and historical/undated source limitations |
| update_trigger | Tool/cavity/runner/BOM, steel delivery state, supplier completeness, machining/EDM/thermal/finish route, make-or-buy, tryout/acceptance, site/period, reuse or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| uddeholm-plastic-moulding-2021 | handbook | Uddeholm, TOOL STEELS FOR PLASTIC MOULDING, Edition17,03.2021 (edition statement physical p.2); physical/printed pp.10–12. https://www.uddeholm.com/app/uploads/sites/230/2024/05/Tech-Uddeholm-Steel-for-moulds-EN-1.pdf | Historical manufacturer-grade delivery/machining choice, prehardened versus soft-annealed thermal distinction, finish dependence and conditional EDM surface effects. Wire-EDM example concerns extrusion dies, not proof every injection mould needs wire EDM. No temperatures, hardness, distortion, costs, processing quantities, net mould mass or life adopted. URL folder date is not edition date. |
| hasco-injection-mould-nut | handbook | HASCO, 2-cavity injection moulding tool “Nut”, undated one-page annotated poster, physical p.1 (unnumbered). https://media.hasco.com/marketing/Content/Mediathek/Poster/Form/Form_POST_EN.pdf | One specific fixed/moving-half, guide/ejector/base and hot-runner component example. Used to identify configuration questions, not universal BOM counts/chemistries, mandatory hot runner, factory inputs, mould mass or life. PDF creation metadata2022 is not asserted as publication year. |
