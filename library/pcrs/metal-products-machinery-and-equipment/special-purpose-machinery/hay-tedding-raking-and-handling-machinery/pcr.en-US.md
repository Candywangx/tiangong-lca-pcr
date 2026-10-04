---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hay-tedding-raking-and-handling-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hay tedding, raking and handling machinery


## 1. Scope and Applicability

This PCR covers factory manufacture of complete tractor-mounted or trailed hay tedders, rotary or wheel rakes, and non-cutting machines that rearrange loose mown forage into swaths, including combined tedder-rakes. It covers mechanical crop handling within that operation, not storage or transport. Exclude grass cutting, mower-conditioners, balers, bale wrappers, forage harvesters, forage wagons, tractors, standalone replacement parts, crop production, field use, maintenance and end of life. A representative route purchases finished spring tines and drive components, fabricates structures when done on site, finishes them where applicable, assembles the configured machine and tests it at the factory. KUHN and KRONE sources demonstrate configuration examples; they do not establish a universal bill of materials, mandatory production route, weight or lifetime. Manufacturer use-performance claims do not define this manufacturing reference.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hay-tedding-raking-and-handling-machinery |
| classification_refs | CPC 3.0 44124; candidate narrower semantic scope; no accepted mapping asserted |
| covered_products | Complete tedders, rotary and wheel rakes, combined tedder-rakes and non-cutting swath-handling machines |
| excluded_products | Mowers, balers, wrappers, forage harvesters, transport wagons, tractors and separately sold parts |
| representative_product | An accepted complete rotary tedder of one specified model and configuration |
| production_route | Purchased finished components; conditional structural fabrication and finishing; assembly and factory acceptance |
| market_state | Complete accepted machine at factory dispatch gate; installed parts included, transport packaging excluded from net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a configured machine capable of tedding or forming swaths from loose cut forage; no quantified field service is supplied. |
| How much | 1 kg share of an accepted complete machine; scale with measured net mass M only for the same configuration. |
| How well | Conforms to declared factory acceptance: model, working width, tine/rotor arrangement, mounting, drive, guards and installed options. Equal mass does not establish equivalent field capacity. |
| How long or cycle | One manufacturing delivery at the factory gate; no assumed years, hectares, crop yield or operating hours. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other haymaking machinery `6d11140d-35b7-498d-9c30-e0b2dfdf63f8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; tedding or raking function; working width; rotor/wheel count and tine design; mounting and towing state; PTO or ground-wheel drive; included gearboxes; tyres; hydraulic and electrical options; guards; supplier-component completeness; accepted net mass M; site; period; gate; packaging |

Declare every required qualifier in the data package. Measure M for the complete accepted configuration, excluding tractor, loose spare parts and transport packaging; catalogue mass is not a weighing record. This reference is a manufacturing normalization unit, not a comparative functional unit for haymaking service.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `energy_preservation` | electricity_fabrication; electricity_finishing; electricity_assembly | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve electrical energy; retain metered kWh and use the exact identity 1 kWh = 3.6 MJ. Do not convert energy to mass. All three selected flows are below 1 kV consumer supply. |
| `water_property` | tap_water; groundwater | Mass for tap water; Volume for groundwater | kg; m3 | Delivered tap water is a mass-reference product; convert volume readings only with retained density evidence. Groundwater withdrawal remains m3. Do not substitute wastewater or delivered water for a resource withdrawal. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered specified stock and finished components at the machine factory; actual incoming condition, supplier gate and transport disclosed. |
| starting_condition_role | Inputs to a foreground manufacturing module; upstream production is represented by separately linked datasets. |
| product_classification_scope | Non-cutting hay tedding, raking and swath handling within CPC 3.0 44124; classification is context, not identity. |
| recursive_input_rule | Record a purchased complete machine in the same category as a separate input with its supplier dataset; do not recursively reapply this foreground. Disclose reuse or remanufacture as a different route. |
| upstream_dataset_requirement | Match supplier product state, component completeness, material grade and electricity voltage/geography; disclose unavailable links and avoid embodied-material duplication. |
| disclosure | Declare factory gate, all actual operations, outsourced work, packaging, transport and overhead allocation. A foreground module is not complete cradle-to-gate until compatible upstream and treatment/transport links are demonstrated. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory` | factory_gate | Collect receipt inspection, site cutting/forming/drilling/welding, applicable cleaning/coating/curing, component fitting, adjustment, rework, factory tests and dispatch protection through acceptance. Include only actual operations supported by cp_configuration; field use and crop production are outside. |  |
| `boundary_purchased` | purchased_components | Finished purchased tines and gearboxes carry upstream production. If manufactured on site, replace the finished-component input with individual material and operation exchanges, retaining thermal treatment and finishing evidence. | `kuhn-hay-parts`; `krone-vendro` |
| `boundary_expand` | actual_route | These cards are an initialization for a documented route, not a complete universal bill of materials. Add each actual grade of stock, purchased rotor, wheel rim, nut, hose, valve, belt, cleaning chemical, coolant, fuel, waste and measured emission as a separate atomic row when present. Missing an actual exchange is a completeness gap, not zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Frame and structural fabrication | conditional | On-site cutting, forming, drilling, machining or welding for this configuration | Foreground manufacture; internal transfers remain inside the combined factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Surface preparation and powder finishing | conditional | On-site surface preparation or powder coating; electric curing route where used | Foreground manufacture; internal transfers remain inside the combined factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Configured assembly and factory acceptance | required | Every accepted complete machine | Foreground manufacture; internal transfers remain inside the combined factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Factory dispatch protection | conditional | Packaging protection is applied at this factory gate | Foreground manufacture; internal transfers remain inside the combined factory module | per 1 kg reference flow; collected per one accepted finished machine |

The operation ledger below is followed only for operations performed at the declared factory. A purchased finished component replaces its upstream operations; transfers of work in progress are reconciled internally.

| Operation | Stage | Foreground collection and inclusion |
| --- | --- | --- |
| Receiving and inspection | fabrication; assembly | Record supplier part/stock state, transport and receipt losses; trace to configuration before issue. |
| Cutting | fabrication | If site-performed, record sheet/tube issue, cutting electricity and weighed offcuts; retain cut plan. |
| Bending and forming | fabrication | If site-performed, trace cut blanks through forming, record equipment electricity and rejects separately from cutting. |
| Drilling and machining | fabrication | If site-performed, record operation time, electricity, chips and each actual cutting-fluid formulation; do not assume dry machining. |
| Welding and grinding | fabrication | If site-performed, record weld route, individual wire/gas inputs, energy, rework, collected dust and only monitored air releases. |
| Cleaning and preparation | finishing | If site-performed, distinguish dry preparation from wet cleaning; record each reagent, water source, bath renewals and waste destination. |
| Powder application and curing | finishing | If site-performed, retain coating formulation, powder issue/recovery, curing energy and solid overspray; another finish needs separate exchanges. |
| Assembly and adjustment | assembly | Record configured rotor/tine, drive, wheel, mounting, guarding and option installation against BOM, with torque/alignment evidence. |
| Acceptance and rework | assembly | Record guarded drive/rotor checks and hydraulic folding checks where fitted; measure net M after acceptance; include attributable failed tests and rework. |
| Dispatch protection | packout | If used, record each packaging item; exclude it from M and document the final factory gate. |

The factory module combines these stages; intermediate frames and coated parts are internal transfers, not additional reference outputs. Reconcile stage ledgers and prevent double counting site energy. Supplier-delivered component alternatives are mutually exclusive with in-house manufacture for the same item. Record documented absence or an additional route instead of filling a conditional row with an assumed amount.

### Process: Frame and structural fabrication (`fabrication`)

#### Inputs

##### Product flows

###### steel sheet (`steel_sheet`)

Include only when sheet stock is cut or formed on site. Record grade, thickness and issued mass net of returns. The row excludes steel already embodied in purchased assemblies.

- Selected flow: Hot-rolled non-alloy steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### steel tube (`steel_tube`)

For a welded rectangular steel tube frame route only, weigh the specified hollow tube stock issued before cutting, net of returns. Declare dimensions and grade. Circular tine-arm tubes and seamless stock need their own rows, not this identity.

- Selected flow: Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### welding wire (`welding_wire`)

Conditional on solid-wire welding of this frame. Record wire grade and net issued mass; do not substitute flux-cored wire or generic drawn wire. Weld rework is included.

- Selected flow: Solid steel arc-welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### argon (`argon`)

Include only for a documented pure-argon shielding operation. Use weighed cylinder deliveries minus returned contents or mass-flow readings. An argon/carbon-dioxide mixture is a separate formulation and cannot use this row.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### electricity fabrication (`electricity_fabrication`)

Meter electricity for cutting, bending, drilling, welding, extraction and fabrication rework. This UUID applies only to delivered grid-average alternating current below 1 kV. Other supply voltage or generation routes require separate identities.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### steel scrap (`steel_scrap`)

Weigh segregated steel offcuts and chips leaving the factory untreated. Internal recirculation is not an exported waste. Record receiver, oil contamination and treatment gate; oily swarf requires a separate waste identity.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### steel grinding dust (`steel_grinding_dust`)

Include only collected dry steel grinding dust sent to a waste receiver. Record measured mass, composition and contamination. It is not an elementary release to air.

- Selected flow: Collected steel grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

##### Elementary flows

###### air particulate (`air_particulate`)

Only when monitoring establishes a particulate release to air with particle size and air subcompartment unspecified. Use outlet concentration with measured exhaust volume for the same interval, retaining the calculation record. Do not invent a welding factor; do not use for a measured PM2.5 fraction or identified stack-height subcompartment.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`


### Process: Surface preparation and powder finishing (`finishing`)

#### Inputs

##### Product flows

###### powder paint (`powder_paint`)

Include only purchased dry powder-coating formulation used for the machine. Record resin formulation, supplier and issued mass net of recovered powder returned to stock; do not count internal recirculation as new input. Manufacturer tine finishing is a route example, not a universal requirement.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `kuhn-hay-parts`

###### electricity finishing (`electricity_finishing`)

Meter surface preparation, electrostatic powder application and electric curing separately from fabrication. The selected identity is delivered grid-average AC below 1 kV. Gas curing requires individual fuel and measured emission rows and is not represented by this electric route.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

###### tap water (`tap_water`)

Only for wet cleaning using supplied drinking-quality tap water. Record mass directly; if a volume meter is used retain measured or supplier-confirmed density and the mass conversion. Do not use for deionised water or raw groundwater.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### sodium carbonate (`sodium_carbonate`)

Only when the cleaning recipe uses sodium carbonate as a separately purchased reagent. Record grade, hydration state, concentration, issued dry reagent mass and bath renewals; bath water is a separate exchange.

- Selected flow: Sodium carbonate cleaning reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

##### Waste flows

##### Elementary flows

###### groundwater (`groundwater`)

Only for actual factory freshwater groundwater abstraction supplying the declared cleaning operation. Meter withdrawal at the well and record country and aquifer. Treat pumping and treatment as foreground activities. Do not count resources embodied in delivered tap water again.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_groundwater.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_groundwater`

#### Outputs

##### Product flows

##### Waste flows

###### powder waste (`powder_waste`)

Record weighed powder-paint overspray or residue leaving as solid waste after internal recovery. Disclose actual composition and destination. No waste rate is assumed.

- Selected flow: Solid waste powder-coating overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### cleaning wastewater (`cleaning_wastewater`)

Only when this cleaning bath is discharged to an external treatment receiver. Record mass, pH, carbonate concentration and measured contaminants. Internal reuse is not an export; on-site treatment requires its own inventory before any environmental release.

- Selected flow: Untreated aqueous sodium-carbonate metal-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

##### Elementary flows


### Process: Configured assembly and factory acceptance (`assembly`)

#### Inputs

##### Product flows

###### spring tine (`spring_tine`)

Weigh purchased finished spring-steel tines installed in the configured machine and retain tine design, count, mass and coating records. Their wire forming, heat treatment, shot-peening and coating are upstream when purchased finished; do not duplicate those operations here.

- Selected flow: Finished spring-steel haymaking tine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: `kuhn-hay-parts`

###### rotor gearbox (`rotor_gearbox`)

Include a purchased complete rotor gearbox only when fitted, weighing it in the received configuration. Record gear design, number and included lubricant. Bearings and grease already embodied in it are not additional purchased inputs. Main gearboxes sold separately require a separate component row.

- Selected flow: Finished haymaking rotor gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: `krone-vendro`

###### ball bearing (`ball_bearing`)

This row records one specified finished ball-bearing design purchased separately for the machine; weigh all installed bearings of that design. The database category includes roller bearings, but this row does not offer a design choice or include bearings inside purchased gearboxes.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`

###### steel bolt (`steel_bolt`)

Record one declared bolt grade, coating and dimensions by installed mass, reconciled with the build list. Nuts and washers need separate rows if supplied separately; do not use a pooled fastener amount.

- Selected flow: Finished hexagonal-head steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`

###### agricultural tyre (`agricultural_tyre`)

Include only a separately purchased new tyre fitted to a ground-following or transport wheel; record size, ply rating and mass. A complete purchased wheel includes its tyre and must instead be a distinct wheel-assembly row; do not double count.

- Selected flow: New pneumatic rubber tyre for agricultural haymaking machinery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: `krone-vendro`

###### pto shaft (`pto_shaft`)

Include only the complete guarded PTO drive shaft delivered with the machine. Record length, joint design, guard and measured mass; the tractor is excluded. Internally manufactured shafts require their own manufacture records.

- Selected flow: Guarded agricultural power-take-off drive shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`

###### hydraulic cylinder (`hydraulic_cylinder`)

Conditional on hydraulic folding. Weigh each specified complete cylinder received, record stroke, bore and included oil. Do not substitute cylinder blanks or kitted subcomponents; hoses and valves supplied separately require individual rows.

- Selected flow: Complete hydraulic folding cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: `kuhn-gf-13003-2023`

###### assembly grease (`assembly_grease`)

Include only documented separate factory first-fill or assembly application of this grease formulation. Record net applied mass and recipe. Do not add a fill to a sealed pre-lubricated purchased gearbox or assume future maintenance consumption.

- Selected flow: Mineral-oil lithium-soap lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### electricity assembly (`electricity_assembly`)

Meter fitting, torque tooling and factory rotor/drive acceptance tests, including attributable rework. Record test duration and external test-rig electricity; tractor field fuel is outside the scope. Selected identity is delivered grid-average AC below 1 kV.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### finished machine (`finished_machine`)

One kilogram of the net accepted complete machine of the declared configuration. The broad public product-flow identity is narrowed by the tedding/raking scope and configuration metadata, not by creating a classification-derived PCR identity.

- Selected flow: Other haymaking machinery `6d11140d-35b7-498d-9c30-e0b2dfdf63f8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

##### Elementary flows


### Process: Factory dispatch protection (`packout`)

#### Inputs

##### Product flows

###### cardboard (`cardboard`)

Only if C-flute corrugated cardboard containing recycled fibre and at least 80% fibre is used to protect the machine. Weigh net packaging issued and record specification. It is outside net machine mass but inside the declared packout activity.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### polyethylene film (`polyethylene_film`)

Only for a declared fossil-derived polyethylene film applied for dispatch protection; weigh net issued film and record polymer grade. Do not substitute polyester film or unspecified plastic film. Packaging outputs remain embedded in packout, not additional machinery output.

- Selected flow: Fossil-derived polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_measure` | shared_operations | Under cp_energy and cp_material, first separate by work order, meter and actual component routing. Where separation is infeasible, use recorded machine/tool time for energy and weighed stock/component issues for material; document the physical driver, covered products and reconciliation to total records. No equal-by-count allocation across dissimilar machine configurations without evidence. |  |
| `allocation_scrap` | waste_outputs | Retain measured waste outputs and disclose treatment links separately; do not assume substitution credits or negative steel inputs from scrap sale. If a scrap stream is declared a saleable co-product, report its status and allocation separately with evidence and sensitivity; this PCR fixes no market-value ratio. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | finished_machine | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each represented configuration and acceptance lot | same production period | final acceptance station | accepted net mass per machine | scale calibration; weighing ticket; configuration list |
| cp_configuration | assembly | route_and_completeness | build records | model; lot; BOM revision; serial; included options; acceptance count; routing; outsourced supplier gates | Reconcile purchase orders, work orders, signed BOM and acceptance records for exactly the declared configuration. | record | each lot | same production period | factory and named suppliers | accepted complete machines by configuration; rejects and rework retained separately | signed release and routing records |
| cp_material | fabrication; finishing; assembly; packout | individual_material_input | weighing and issue ledger | row_id; grade; batch; issue mass; returns; stock change; job; accepted machine count; density for metered tap water; purity | Use calibrated scales, net issue/return ledgers and supplier specifications for each separate row. Include attributable rework. Metered water volume needs measured or supplier-confirmed density; retain raw unit and conversion. | kg | each issue and lot; water by meter interval | representative production period declared with start/end dates | actual included operation; no cross-stage duplication | attributable individual input mass / accepted machines of the same configuration | calibration; bills; stock reconciliation; density and composition evidence |
| cp_parts | assembly | individual_finished_component | BOM and weighing | row_id; component part number; supplier; specification; installed count; net component mass; embodied lubricant; acceptance count | Match one specific component design to the BOM, weigh installed component deliveries and verify included subcomponents to prevent duplication. Retain counts as support, not as a substitute for kg. | kg | each component design and lot | same production period | receiving and assembly | attributable installed component mass / accepted machines of the same configuration | supplier drawings; weighing tickets; configuration reconciliation |
| cp_energy | fabrication; finishing; assembly | individual_stage_electricity | meter and operation log | row_id; meter; voltage; energy kWh; interval; idle/rework; machine hours; allocated share; acceptance count | Use submetered readings; where shared, assign recorded machine time with reconciled measured load. Convert kWh to MJ using 3.6; reconcile stage totals to purchased supply and include pumping/air extraction where within the declared boundary. | MJ | meter interval and work order | same production period | included factory operations | attributable individual stage electricity / accepted machines of the same configuration | meter calibration; bills; allocation driver; balance |
| cp_waste | fabrication; finishing | individual_exported_waste | waste weighing and transfer | row_id; composition; contamination; mass; recovery; destination; treatment gate; accepted machine count | Weigh each segregated waste exported to receiver, deduct internal returns, retain wastewater chemical analysis and identify treatment state. Do not infer environmental emissions from waste mass. | kg | each transfer and production lot | same production period | actual generating operation | attributable individual waste mass / accepted machines of the same configuration | transfer tickets; scales; composition tests; destination receipts |
| cp_emission | fabrication | air_particulate | outlet monitoring | outlet concentration; exhaust volume; operating time; air medium; subcompartment; particle fraction; control; acceptance count | Measure actual post-control outlet concentration and exhaust volume for matched intervals. Calculate mass with retained units and sampling coverage; leave absence of measurement explicit, never fabricate an emission factor. | kg | representative operating intervals | same production period with sampling gaps disclosed | actual outlet only | attributable measured particulate mass / accepted machines of the same configuration | sampling report; calibration; unit calculation; applicability |
| cp_groundwater | finishing | groundwater | well meter | well; country; aquifer; withdrawal m3; use; pumping energy; accepted machine count | Meter actual freshwater abstraction for included cleaning; separate supplied water and internal recirculation. Attribute pumping to cp_energy without duplicating delivered-water production. | m3 | each meter interval | same production period | factory freshwater well | attributable groundwater withdrawal / accepted machines of the same configuration | meter calibration; abstraction licence; location and water identity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_config` | all inventory rows | Use the same accepted model/configuration and period throughout. Reconcile delivered component mass and stock issues to net machine mass, waste, returns and WIP changes; explain deviations, never force balance by inventing emissions. | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | all inventory rows | Reconcile every actual BOM item and operation to an atomic exchange or verified exclusion. Disclose missing UUIDs, suppliers, measurements, upstream links and temporal gaps. No universal cut-off percentage is set. | cp_configuration; cp_material; cp_parts; cp_energy |
| `quality_sources` | product_configuration | Manufacturer examples establish only designs and possible routes, not general weights, lifetime, emissions or industry amounts. Older model documents are used as explicitly dated design examples. | kuhn-gf-13003-2023; kuhn-hay-parts; krone-vendro; krone-swadro |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_mass` | reference_flow | Require cp_mass with positive measured net M, exact configuration match and 1 kg finished_machine output. Every per-machine non-reference row applies normalize_mass in its native numerator unit. |  |
| `validation_route` | inventory_completeness | Check required assembly/acceptance and every actual conditional operation against routing. Check weights, counters, stock change, rework and stage energy reconciliation. Missing or unresolved evidence yields incomplete coverage, not a verified zero or methodology approval. |  |
| `validation_identity` | all inventory rows | Use exactly one physical exchange per row; verify UUID property, unit, route, concentration, fossil/biogenic origin and environmental medium. Check official Chinese names and English/Chinese row/rule identity parity. An identity gap blocks claims of a fully resolved dataset. |  |
| `validation_boundary` | dataset_claims | Reject a full cradle-to-gate claim without demonstrated compatible upstream, transport and treatment coverage. Reject a comparative field-service claim based only on equal machine mass. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground machine-manufacturing module; this heading describes later dataset delivery, not PCR publication status. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply manufacturing inventory to an explicitly configured machine model; scale by measured net M only for that same configuration. |
| excluded_use | Hay yield, field-service comparisons, farm fuel, maintenance or lifetime estimates; full cradle-to-gate without documented upstream coverage; use as methodology approval. |
| required_metadata | All qualifiers, site and period, gates, detailed route, component supply and completeness, reference quantity, weighing and allocation protocols, upstream/treatment links. |
| required_quality_disclosure | Measurement uncertainty, sampling gaps, unresolved identities, missing links, rework/reject handling, omissions and proxy sensitivity. |
| update_trigger | Configuration/BOM, supply voltage or source, coating route, supplier gate, allocation driver or weighing protocol changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| kuhn-gf-13003-2023 | handbook | KUHN, GF 13003 tedder, July 2023, PDF pp. 1–2. https://www.kuhn.com/sites/default/files/media-files/GF%2013003_PressRelease_202307_EN.pdf | Dated mounted-rotor, drive and hydraulic configuration example; no mass, inventory, lifetime or performance factor adopted. |
| kuhn-hay-parts | handbook | KUHN PARTS – Hay / Silage Making, sections Tines: Longevity, Optimized Position; DIGIDRIVE Coupler. https://zoom.kuhn.com/focus/kuhn_parts/us/catalog-hay-silage-making.html | Spring-steel tine and finishing route examples only; no general manufacturing requirement or durability multiplier. |
| krone-vendro | handbook | KRONE, Vendro rotary tedders, sections Bolted tine carriers; The gearboxes; Tyre options; mounting and running gear. https://www.krone-agriculture.com/en/products/rotary-tedders/vendro | Independent tedder configuration and purchased-component completeness; gearbox lubrication informs duplication check only. |
| krone-swadro | handbook | KRONE, Swadro S | TS side delivery rotary rakes, sections KRONE side delivery rotary rakes; The pioneer in quality foraging. https://www.krone-agriculture.com/en/products/rotary-rakes/swadro-sts | Raking/swath-forming category boundary, distinct from the following baler or forage transport wagon; no capacity factor adopted. |
