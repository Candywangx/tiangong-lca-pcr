---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.press-fitted-solid-railway-wheelset
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bare non-driven solid-axle monobloc-wheel railway wheelset manufacture by final machining and press fitting

## 1. Scope and Applicability

This candidate authored methodology covers one deliberately restricted new bare railway wheelset architecture: two monobloc steel wheels conventionally cold press-fitted onto cylindrical seats of a solid non-driven steel axle. Its foreground starts with accepted heat-treated wheel and axle blanks, includes actual final machining, interference assembly, joint-curve and geometric acceptance, complete net weighing and factory release. No supplier steelmaking, forging/rolling or heat treatment is silently included. Sources support product families and process interfaces; the exact order drawing and inspection plan establish actual configuration.

Exclude powered/geared wheelsets, hollow axles, resilient/tyred wheels, independent-wheel or variable-gauge arrangements, shrink-fitting, conical seats and high-pressure-assisted fitting; also exclude bearings, axleboxes, brake discs, noise absorbers, final permanent coating/hardening, vehicle manufacture, overhaul, reprofiling and operating rail service. An assembly-only plant buying completely finished wheels/axles cannot claim this final-machining boundary. The category is narrower than CPC49540 and distinct from complete locomotive/wagon manufacture: supplier component state, precision wheel-seat interfaces, two force-position traces and bare-unit acceptance define its material method need. Scientific review remains pending; alignment and mechanical checks do not approve methodology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.press-fitted-solid-railway-wheelset |
| classification_refs | CPC3.0 49540, narrower; no accepted mapping asserted |
| covered_products | New bare non-driven solid-axle two-monobloc-steel-wheel conventional press-fitted wheelsets with actual in-gate final machining |
| excluded_products | Other wheelset architectures, standalone wheels/axles, bearing-equipped assemblies, final permanent coating, maintenance and vehicle/service datasets |
| representative_product | Evidence-selected monobloc wheel/solid axle non-driven subset of BONATRANS product families, conventionally pressed using the MAE-described route; exact current order required |
| production_route | Received heat-treated blanks → final wheel/axle machining → two conventional press-fit joints → dimensional/curve/specified NDT acceptance → complete net weighing and release |
| market_state | New accepted bare wheelset at declared manufacturing release gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted bare non-driven solid-axle monobloc-wheel press-fitted railway wheelset |
| How much | 1 kg accepted complete configured bare-wheelset net mass |
| How well | Released drawing/BOM, wheel/axle certificates, both accepted press-fit curves and final geometry under actual controlled inspection plan |
| How long or cycle | One manufacture acceptance cycle; no assumed service lifetime or train-km function |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted bare non-driven solid-axle monobloc-wheel press-fitted railway wheelset |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | producer/model/serial and drawing revision; two new monobloc steel wheels and one new solid non-driven steel axle; actual wheel/axle grade, heat/serial, blank completion and upstream heat-treatment release; conventional cold interference fit on cylindrical seats, actual bore/seat finish and joint trace; declared wheel profile/spacing/runout and current acceptance limits, press-force-displacement calibration and actual NDT plan; bare unit excludes bearings/axleboxes/brake discs/gears; actual retained oil/lubricant film state and complete net measured M kg with cp_mass calibration/tare/uncertainty; manufacturing site/period/subcontract gate; supplier datasets, consumable formulation/SDS, wastewater/waste recipients and measured conditional releases |

Declare all required qualifiers in dataset metadata or equivalent source-addressable fields. Equal mass does not establish equal axle load, wheel diameter, fatigue performance or service life. Actual accepted net M is measured for the exact bare configuration, not obtained from catalogue mass, axle load or theoretical steel volume.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `exchange_mass` | all kg inventory rows | Mass | kg | Measure each physical exchange separately as net consumed/transferred mass with issue/return and stock balance. A count-based blank purchase needs actual weighed unit mass and exact supply state; preserve any later selected public nonmass property with documented conversion, never rewrite it as Mass. |
| `electric_energy` | machining_electricity; pressing_electricity; inspection_electricity; release_electricity | Net calorific value | MJ | Meter kWh and convert1 kWh =3.6 MJ; preserve the selected public reference energy property and supplier/technology/voltage/site disclosures. |
| `hydraulic_volume` | hydraulic_oil | Volume | m3 | Preserve public Volume; measure actual net replacement/top-up volume with calibrated dispenser, declared fluid temperature and issue/return/stock records. Any litre conversion uses1 L =0.001 m3; any separately needed mass balance requires measured batch density and same temperature, never an assumed oil density. |
| `mass_configuration` | cp_mass | Mass | kg | Measure the complete accepted bare two-wheel/one-solid-axle assembly, including documented retained fit lubricant and temporary protective film of oil. Remove reusable supports/racks, test tools, detachable packaging and excluded bearing/disc/gear modules. Use actual installed state and record corrections by separately measured physical masses, never assumed accessory weights. |
| `mass_record_origin` | cp_mass | Mass | kg | Use serial-linked complete-wheelset calibrated scale readings with zero, tare of supports, calibration certificate, capacity/range suitable to actual unit, repeatability and uncertainty. Reconcile weighed wheels/axle and actual retained film against measured M. No stock catalogue, nominal axle load or assumed steel density substitutes for the measured accepted configuration. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-released heat-treated monobloc steel wheel and solid axle blanks suitable for final machining |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Conventional press-fitted bare non-driven solid-axle monobloc-wheel subset of CPC49540 |
| recursive_input_rule | Do not recurse wheel/axle steelmaking, forging/rolling or heat treatment into this final-machining/assembly gate; a purchased complete wheelset is not a blank input |
| upstream_dataset_requirement | Link actual compatible wheel/axle-blank supply, formulated consumables, electricity, transport and waste-treatment datasets before extended supply-chain claims |
| disclosure | Only declared received-blank final machining, conventional press assembly, manufacturing inspection, net weighing and release; upstream and site/subcontract exclusions disclosed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_actual` | all inventory rows | Record actual consumables, measured waste and direct species separately. No mandatory fuel, VOC, steel dust discharge or wastewater-to-environment is inferred from electric machining/pressing. Process water is technosphere supply; spent coolant is waste sent to treatment, not freshwater resource or elementary effluent. No elementary exchange is prescribed as universally occurring. If actual site monitoring establishes an emission or resource withdrawal, add each chemically/physically specific row with medium/submedium, measurement and identity review before claiming completeness. |  |
| `boundary_limit` | dataset | This is not a complete cradle-to-gate inventory. Declare actual site energy/transport/support services, subcontract boundary and all missing links; add omitted genuine exchanges atomically. Supplier upstream burdens are not zero. Rail use, maintenance, tyre reprofiling and post-release delivery are excluded. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machining` | Received wheel and axle blank final machining | required | In-gate final machining of heat-treated monobloc steel wheel blanks and a solid steel axle blank for a new non-driven bare wheelset. | foreground | one accepted complete unit normalized with M |
| `pressing` | Controlled wheel-to-axle interference press fitting | required | Conventional cold press fitting of two monobloc wheels on cylindrical seats of one solid non-driven steel axle. | foreground | one accepted complete unit normalized with M |
| `inspection` | Dimensional and specified nondestructive acceptance | required | Complete assembled bare wheelset under its actual specified manufacturing inspection plan. | foreground | one accepted complete unit normalized with M |
| `release` | Complete bare-wheelset net weighing and release | required | Accepted new bare non-driven solid-axle monobloc-wheel press-fitted unit of the declared configuration. | foreground | one accepted complete unit normalized with M |

Wheel and axle serials remain linked through final machining and both press joints to the single bare-unit release. Internal intermediate wheels/axle and assembled units are not duplicate purchased inputs. Record actual station order and scope; a required process does not make each conditional consumable universal.

### Process: Received wheel and axle blank final machining (`machining`)

Verify supplier heat/serial, wheel and axle material certificates and prior heat-treatment release. Finish wheel bore/tread and axle journals/wheel seats to the controlled drawing, retaining actual operations and allowances. Steel production, forging/rolling and heat treatment of received blanks are upstream. A fully finished purchased-component assembly-only plant is outside this manufacturing route. Aqueous coolant, make-up water and their waste rows apply only if actually used; no grade, allowance, fluid formulation or yield is prescribed.

#### Inputs

##### Product flows

###### Heat-treated monobloc steel railway wheel blank for final machining (`wheel_blank`)

One physical exchange only, where actually used or transferred. Record exact supplier specification and completion state; weigh net issues less returns and reconcile stock changes. A conditional absence needs documented not-applicable evidence, not an assumed zero.

- Selected flow: Heat-treated monobloc steel railway wheel blank for final machining
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

###### Heat-treated solid steel non-driven railway axle blank for final machining (`axle_blank`)

One physical exchange only, where actually used or transferred. Record exact supplier specification and completion state; weigh net issues less returns and reconcile stock changes. A conditional absence needs documented not-applicable evidence, not an assumed zero.

- Selected flow: Heat-treated solid steel non-driven railway axle blank for final machining
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

###### Formulated water-miscible steel-machining coolant concentrate (`coolant`)

One physical exchange only, where actually used or transferred. Record exact supplier specification and completion state; weigh net issues less returns and reconcile stock changes. A conditional absence needs documented not-applicable evidence, not an assumed zero.

- Selected flow: Formulated water-miscible steel-machining coolant concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

###### Supplied industrial process water for coolant make-up (`process_water`)

Only actual supplied treated industrial process water used for coolant make-up. Require documented treatment/quality and delivered boundary, measured mass and tank inventory; not raw freshwater withdrawal or spent coolant. No public water unit is replaced by Volume.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

###### Foreground alternating-current electricity use (`machining_electricity`)

Collect actual process-attributable alternating-current use. Meter kWh converts by1 kWh =3.6 MJ. Foreground electricity identity does not establish generator, grid voltage, geography or upstream supply; document actual supplier and linkage separately.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel wheel-machining chips transferred for recovery (`wheel_chips`)

Actual segregated steel machining chips/swarf sent for recycling, with separate wheel/axle origin and recipient record. Measure steel and retained liquid separately and avoid counting coolant twice. This waste identity records generation, not downstream recycling burdens or avoided steel credits.

- Selected flow: Steel chips `b3da8cf4-e443-449d-aa6a-860bc8b21fb8`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

###### Steel axle-machining chips transferred for recovery (`axle_chips`)

Actual segregated steel machining chips/swarf sent for recycling, with separate wheel/axle origin and recipient record. Measure steel and retained liquid separately and avoid counting coolant twice. This waste identity records generation, not downstream recycling burdens or avoided steel credits.

- Selected flow: Steel chips `b3da8cf4-e443-449d-aa6a-860bc8b21fb8`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

###### Spent aqueous steel-machining coolant transferred for treatment (`spent_coolant`)

Only actual waste aqueous emulsion/cutting fluid from wet CNC final machining sent off-site for treatment. Weigh its actual transferred mixture and composition including water/metal contamination; do not model a generic wastewater release to the environment or duplicate retained fluid in chip masses. Non-CNC or another chemistry requires separate identity review.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machining`
- Sources: `bonatrans-profile`; `bonatrans-machining`

##### Elementary flows


### Process: Controlled wheel-to-axle interference press fitting (`pressing`)

Use the approved bore/seat fit and actual assembly instruction. Match two traced wheels to one traced axle, preassemble, press each joint and retain its measured force-displacement curve and final axial position. MAE describes both conventional and alternative pressing: this method selects conventional cold pressing and excludes shrink fitting and high-pressure-assisted fitting. Lubricant is conditional on the actual approved procedure; hydraulic oil is a separately metered consumable of the press, not a constituent of the wheelset. MAE oil injection for pressing-off is not evidence that new pressing-on necessarily consumes injection oil.

#### Inputs

##### Product flows

###### Approved formulated railway wheel-seat press-fit lubricant (`fit_lubricant`)

One physical exchange only, where actually used or transferred. Record exact supplier specification and completion state; weigh net issues less returns and reconcile stock changes. A conditional absence needs documented not-applicable evidence, not an assumed zero.

- Selected flow: Approved formulated railway wheel-seat press-fit lubricant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pressing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pressing`
- Sources: `mae-press`; `bonatrans-profile`

###### Formulated mineral hydraulic oil for wheelset assembly press (`hydraulic_oil`)

Only actual formulated mineral-base hydraulic fluid meeting the public lubricant classification containing at least70% petroleum oils by mass, evidenced by supplier SDS/composition. Meter net actual press oil replacement/top-up volume in m3 at the declared fluid temperature, with dispenser calibration, issue/return and reservoir stock changes attributable to manufacture, not the recirculating reservoir charge per cycle. Other base fluids require separate identity review; oil is not installed wheelset mass.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pressing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pressing`
- Sources: `mae-press`; `bonatrans-profile`

###### Foreground alternating-current electricity use (`pressing_electricity`)

Collect actual process-attributable alternating-current use. Meter kWh converts by1 kWh =3.6 MJ. Foreground electricity identity does not establish generator, grid voltage, geography or upstream supply; document actual supplier and linkage separately.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pressing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pressing`
- Sources: `mae-press`; `bonatrans-profile`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent mineral hydraulic oil from wheelset assembly press (`spent_hydraulic_oil`)

Actual used petroleum-base mineral hydraulic lubricating oil removed from the press and contaminated through use, weighed at generation. Record recipient and downstream treatment separately; public identity does not prescribe recycling or combustion. Not aqueous coolant or a mixture of unrelated chemicals.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pressing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pressing`
- Sources: `mae-press`; `bonatrans-profile`

##### Elementary flows


### Process: Dimensional and specified nondestructive acceptance (`inspection`)

Reconcile wheel/axle certificates and prior NDT coverage, inspect final wheel spacing, seat position and measured radial/axial runout against current controlled limits, and review both press-fit curves. Record actual final NDT required by the approved inspection plan; do not assert universal penetrant, magnetic-particle or ultrasonic consumption. The contact ultrasonic couplant row applies only where contact ultrasonics is actually performed. No destructive fatigue test is charged to every unit merely because the manufacturer operates accredited test laboratories.

#### Inputs

##### Product flows

###### Formulated contact-ultrasonic wheelset inspection coupling gel (`couplant`)

One physical exchange only, where actually used or transferred. Record exact supplier specification and completion state; weigh net issues less returns and reconcile stock changes. A conditional absence needs documented not-applicable evidence, not an assumed zero.

- Selected flow: Formulated contact-ultrasonic wheelset inspection coupling gel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inspection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_inspection`
- Sources: `mae-press`; `bonatrans-profile`

###### Foreground alternating-current electricity use (`inspection_electricity`)

Collect actual process-attributable alternating-current use. Meter kWh converts by1 kWh =3.6 MJ. Foreground electricity identity does not establish generator, grid voltage, geography or upstream supply; document actual supplier and linkage separately.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inspection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_inspection`
- Sources: `mae-press`; `bonatrans-profile`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent ultrasonic wheelset inspection coupling gel (`spent_couplant`)

One physical exchange only, where actually used or transferred. Record exact supplier specification and completion state; weigh net issues less returns and reconcile stock changes. A conditional absence needs documented not-applicable evidence, not an assumed zero.

- Selected flow: Spent ultrasonic wheelset inspection coupling gel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inspection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_inspection`
- Sources: `mae-press`; `bonatrans-profile`

##### Elementary flows


### Process: Complete bare-wheelset net weighing and release (`release`)

Release the accepted bare wheelset with serial-linked drawing, geometry and press-fit records. Weigh its complete net configuration with a calibrated scale and suitable support, excluding reusable transport racks, packaging, bearings/axleboxes, brake discs and gears. Optional temporary rust-preventive oil and LDPE transport protection are separately weighed; any retained oil is explicitly included in net M while removable packaging is excluded. Permanent coating or shot-peening/hardening added after receipt requires a different disclosed manufacturing boundary and is excluded here.

#### Inputs

##### Product flows

###### Formulated temporary steel-wheelset rust-preventive oil (`protective_oil`)

One physical exchange only, where actually used or transferred. Record exact supplier specification and completion state; weigh net issues less returns and reconcile stock changes. A conditional absence needs documented not-applicable evidence, not an assumed zero.

- Selected flow: Formulated temporary steel-wheelset rust-preventive oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `bonatrans-profile`; `mae-press`

###### Non-adhesive non-cellular LDPE protective packaging film (`film`)

Only actual nonadhesive, noncellular, unreinforced, unlaminated and unsupported LDPE film used for removable transport protection. Verify supplier composition and net consumed mass; do not include racks/pallets in this row or in net M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `bonatrans-profile`; `mae-press`

###### Foreground alternating-current electricity use (`release_electricity`)

Collect actual process-attributable alternating-current use. Meter kWh converts by1 kWh =3.6 MJ. Foreground electricity identity does not establish generator, grid voltage, geography or upstream supply; document actual supplier and linkage separately.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `bonatrans-profile`; `mae-press`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted bare non-driven solid-axle monobloc-wheel press-fitted railway wheelset (`finished_machine`)

Fixed1 kg of the accepted complete configured bare wheelset: two monobloc steel wheels press-fitted to one solid steel axle, including documented retained press-fit lubricant/protective oil. Exclude bearings, axleboxes, brake discs, gears, rolling-stock structure, reusable racks, test fixtures and removable packaging. Actual measured net M, not an axle load or catalogue weight, establishes normalization.

- Selected flow: Accepted bare non-driven solid-axle monobloc-wheel press-fitted railway wheelset
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `bonatrans-profile`; `mae-press`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | Avoid allocation by order/serial, station subdivision and submetering. Allocate unavoidable shared machine/press/inspection overhead using demonstrated causal measured active time/load; retain numerator, denominator, excluded orders, idle-load attribution and sensitivity. Mass or equal-unit allocation across different wheel diameters, stock allowances or pressing routines requires actual causal justification. | `ghg-allocation` |
| `allocation_recovery` | wheel_chips; axle_chips; spent_coolant; spent_hydraulic_oil | Distinguish stock return, internal recirculation, external waste recovery and reviewed genuine co-products. Measure chips with retained liquid separately, record recipient and waste state, and avoid automatic virgin-steel displacement credits or sale-value co-product assumptions. Rework remains attached to original order; accepted output count excludes rejects. Document the chosen waste/recycling method and burden boundary consistently. | `ghg-allocation` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference product | weighing_record | serial; configuration; accepted net mass M; calibrated scale/zero/support tare/uncertainty; installed two-wheel/one-axle BOM; retained lubricant/oil; excluded packaging/modules; acceptance signature | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted serial and changed configuration | declared manufacturing reporting period | actual complete bare-wheelset release station | accepted net mass per unit | calibration/range/zero/tare records, raw reading and BOM/acceptance reconciliation |
| `cp_machining` | machining | individual inventory exchanges | production_record | row_id; serial/order; configuration; actual same-configuration accepted units; net issues/returns; stocks; submeter kWh; measured exchange quantities and unit; recipient/state; rejects/rework; allocation numerator/denominator | Record received blank mass, wheel/axle serials, actual final dimensions, machine cycle/submeter, separately weighed steel chips, coolant concentrate and water make-up less returns and liquid inventory change. Aggregate actual same-configuration order records, reconcile stock and waste balance, allocate with recorded physical driver, and divide attributable totals by the accepted complete units of that same configuration. Exclude rejected units from the denominator while retaining their attributable consumed quantities. | kg for mass; m3 for hydraulic-oil volume at declared temperature; MJ for electricity after documented kWh conversion | each serial/order/batch and actual consumable event | declared complete reporting period and stock dates | actual included station or identified subcontract operation | attributable exchange amount / accepted units | original readings, supplier certificates/SDS, scale/submeter calibration, process and recipient records, same-configuration actual count |
| `cp_pressing` | pressing | individual inventory exchanges | production_record | row_id; serial/order; configuration; actual same-configuration accepted units; net issues/returns; stocks; submeter kWh; measured exchange quantities and unit; recipient/state; rejects/rework; allocation numerator/denominator | Collect dimensional fit measurements, both joint curves, traceable load/displacement calibration, tool identity, actual lubricant issue, net hydraulic oil replacement/top-up, recovered oil waste and power including attributable idle load. Aggregate actual same-configuration order records, reconcile stock and waste balance, allocate with recorded physical driver, and divide attributable totals by the accepted complete units of that same configuration. Exclude rejected units from the denominator while retaining their attributable consumed quantities. | kg for mass; m3 for hydraulic-oil volume at declared temperature; MJ for electricity after documented kWh conversion | each serial/order/batch and actual consumable event | declared complete reporting period and stock dates | actual included station or identified subcontract operation | attributable exchange amount / accepted units | original readings, supplier certificates/SDS, scale/submeter calibration, process and recipient records, same-configuration actual count |
| `cp_inspection` | inspection | individual inventory exchanges | production_record | row_id; serial/order; configuration; actual same-configuration accepted units; net issues/returns; stocks; submeter kWh; measured exchange quantities and unit; recipient/state; rejects/rework; allocation numerator/denominator | Retain geometric/curve acceptance results, actual NDT method and calibration/coverage, any repeat inspection and reject/rework routing, actual single couplant formulation and waste and power. Aggregate actual same-configuration order records, reconcile stock and waste balance, allocate with recorded physical driver, and divide attributable totals by the accepted complete units of that same configuration. Exclude rejected units from the denominator while retaining their attributable consumed quantities. | kg for mass; m3 for hydraulic-oil volume at declared temperature; MJ for electricity after documented kWh conversion | each serial/order/batch and actual consumable event | declared complete reporting period and stock dates | actual included station or identified subcontract operation | attributable exchange amount / accepted units | original readings, supplier certificates/SDS, scale/submeter calibration, process and recipient records, same-configuration actual count |
| `cp_release` | release | individual inventory exchanges | production_record | row_id; serial/order; configuration; actual same-configuration accepted units; net issues/returns; stocks; submeter kWh; measured exchange quantities and unit; recipient/state; rejects/rework; allocation numerator/denominator | Collect complete installed two-wheel/one-axle identity, serial net mass/scale/calibration/tare, optional retained oil and film issues, accepted same-configuration count and release signature. Aggregate actual same-configuration order records, reconcile stock and waste balance, allocate with recorded physical driver, and divide attributable totals by the accepted complete units of that same configuration. Exclude rejected units from the denominator while retaining their attributable consumed quantities. | kg for mass; m3 for hydraulic-oil volume at declared temperature; MJ for electricity after documented kWh conversion | each serial/order/batch and actual consumable event | declared complete reporting period and stock dates | actual included station or identified subcontract operation | attributable exchange amount / accepted units | original readings, supplier certificates/SDS, scale/submeter calibration, process and recipient records, same-configuration actual count |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `electricity_conversion` | machining_electricity; pressing_electricity; inspection_electricity; release_electricity | Convert raw meter kWh to MJ using1 kWh =3.6 MJ before normalize_mass; retain readings, shared-load attribution and supply boundary. | meter kWh | q_item in MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_trace` | reference product | Both wheel and axle heat/serial, grade, blank supply/heat treatment, drawing, cylindrical conventional fit, bare-unit exclusions and actual retained film must match throughout. No catalogue-derived M. | certificates, order/BOM and scale/acceptance originals |
| `press_geometry` | pressing; inspection | Retain actual bore/seat finish and measured fit, both force-displacement traces and calibrated force/position instruments, accepted wheel spacing and runout under current controlled limits. Manufacturer press capacities do not establish product tolerances. | joint curve files, geometry records, current inspection-plan limits and calibrated instruments |
| `ndt_coverage` | inspection | Identify supplier versus final NDT coverage, actual method, inspector qualification, instrument calibration, results and any repeats. Optional couplant is charged only to actual contact ultrasonics; other real method chemicals require independent atomic rows before quantitative completeness. | supplier test certificates and actual inspection results/consumable logs |
| `balance_and_period` | all inventory rows | Use a complete declared period or each accepted serial, stock openings/closings, issues/returns, rejects/rework and wet/dry chip state. Reconcile metal removal and installed wheelset mass and investigate unexplained imbalance with measurement uncertainty; no invented fixed closure threshold. | mass ledger, count/scrap/recipient evidence and uncertainty |
| `range_evidence` | all inventory rows | No empirical quantity ranges or per-wheelset mass are inferred from manufacturer portfolios, press capacity or energy marketing. Obtain compatible actual order/batch observations and independent boundary-compatible evidence before empirical benchmarks; unresolved range evidence remains declared. | foreground observations and reviewed compatible original sources |
| `upstream_and_identity` | dataset | Disclose missing supplier links and unresolved flow identities. Blank UUIDs preserve specific physical exchanges, not anonymous material categories. Review actual property/unit chain and official localized names before adopting identity. | supplier specs, dataset links and identity review |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | dataset | Check the two-monobloc-wheel solid non-driven axle conventional cylindrical press-fit architecture, actual in-gate final machining and bare completion. Reject silent inclusion of powered/hollow/shrink-fit/bearing/disc/gear/vehicle/repair routes. | `bonatrans-profile`; `mae-press`; `caf-wheelset` |
| `validate_mass` | finished_machine | Require cp_mass originals and exact actual complete net M and both-language normalization agreement. Every non-reference row applies normalize_mass and its declared collection protocol; count/area conversions need real data and public property preservation. Do not create a numerical mass or guessed density. |  |
| `validate_joint` | pressing; inspection | Require accepted traces for both press-fit joints and final geometry/NDT plan results linked to the released serial. Unknown limits or missing physical records remain scientific/quantitative acquisition gaps; checker success only confirms declared contract consistency. | `mae-press` |
| `validate_completeness` | all inventory rows | Check atomic exchanges, net issue/return/stocks and conditional applicability. Distinguish technosphere water, waste coolant and any actual elementary emission, retain true composition/medium/submedium/property/unit and official Chinese names, and explicitly disclose all unknowns instead of assuming zeros. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset only after actual quantitative completion and independent review |
| allowed_use | Declared compatible new bare solid-axle non-driven press-fitted wheelset manufacturing supply input |
| excluded_use | Full49540 coverage, railway operating service, all wheelset variants, vehicle cradle-to-grave and unqualified mass-only comparison |
| required_metadata | producer/model/serial and drawing revision; two new monobloc steel wheels and one new solid non-driven steel axle; actual wheel/axle grade, heat/serial, blank completion and upstream heat-treatment release; conventional cold interference fit on cylindrical seats, actual bore/seat finish and joint trace; declared wheel profile/spacing/runout and current acceptance limits, press-force-displacement calibration and actual NDT plan; bare unit excludes bearings/axleboxes/brake discs/gears; actual retained oil/lubricant film state and complete net measured M kg with cp_mass calibration/tare/uncertainty; manufacturing site/period/subcontract gate; supplier datasets, consumable formulation/SDS, wastewater/waste recipients and measured conditional releases |
| required_quality_disclosure | Measured M/uncertainty; period/count; press-fit and NDT coverage; component state and supplier links; allocation/rework; conditional absence; unresolved identities/ranges and missing original measurements; scientific review state |
| update_trigger | Changes to drawing/grade/blank supply, joint method, axial geometry, NDT, site/process/energy, retained film/net delivery state or upstream datasets |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bonatrans-profile | literature | GHH BONATRANS Profile January2026; https://www.bonatrans.cz/soubory/2026/GHH_BONATRANS%20profile%20210x210%20EN_NEW_01_2026.pdf ; PDF physical4 printed6–7 and physical5 printed8–9 | Product families and manufacturing quality; no inferred grade, weight, lifetime or numerical inventory. |
| mae-press | literature | MAE Wheelset Presses; https://mae-group.com/en/wheelset-presses/ ; conventional/alternative methods, RACOS curve evaluation and measuring head; unpaginated | Independent assembly equipment route and measured joint/geometry controls; no press-capacity-as-product factor or oil-injection necessity. |
| bonatrans-machining | literature | BONATRANS New production plant in India opened,2 June2016; https://www.bonatrans.cz/en/about-us/news-detail/new-bonatrans-production-plant-in-india-opened-21 ; unpaginated manufacturing paragraphs | Historical actual wheel/axle machining and wheelset assembly interface only; not present plant status or quantitative benchmark. |
| caf-wheelset | literature | CAF MIIRA Wheelsets Solutions; https://www.cafmiira.com/wp-content/uploads/2024/09/wheelsets_catalogue.pdf ; PDF physical4 printed6–7 | Independent traceability and contrasting wheelset variants; no shrink-fit/gearbox/energy/carbon/scrap generalization. |
| ghg-allocation | official_guidance | WRI/WBCSD GHG Protocol Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; printed63 PDF65 Tables9.1–9.2 | Historical methodological allocation hierarchy, not current railway regulation or an actual resource driver. |
