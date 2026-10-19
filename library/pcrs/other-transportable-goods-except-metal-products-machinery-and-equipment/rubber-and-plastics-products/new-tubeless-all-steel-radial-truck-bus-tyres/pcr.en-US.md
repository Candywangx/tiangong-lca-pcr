---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-tubeless-all-steel-radial-truck-bus-tyres
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# New tubeless all-steel radial truck and bus tyre manufacture


## 1. Scope and Applicability

This methodology covers complete manufacture and actual net dispatch of new tubeless pneumatic rubber commercial truck/bus tyres with steel carcass and steel belt reinforcement, using onsite rubber compounding, calendered cord coating and mould-press curing. Steel carcass construction and its component/measurement chain define this narrower boundary; changing the intended vehicle use of the same tyre does not create another method. It is a bounded synthesis of independent industrial primary sources, not a claim to cover all other pneumatic tyres.

CPC 36113 is a residual classification relative to motor-car and motorcycle/bicycle tyres. Agricultural, earthmover and aircraft tyres remain outside this subset and require their own applicability review. Upstream tyre-cord fabric and raw elastomer PCRs support component inputs only. A textile-carcass passenger tyre, tube-only process or retreading route is not substituted for this full new-tyre route. Sources establish structural distinctions and manufacturing stages; actual plant recipes, grade compatibility, cycle settings, quantities and emissions are collected from the foreground package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-tubeless-all-steel-radial-truck-bus-tyres |
| classification_refs | CPC 3.0 36113: narrower structural/methodological subset; no positive mapping is established here. |
| covered_products | New tubeless pneumatic rubber truck/bus tyres with steel carcass ply and steel belts, made by onsite compound mixing, calendered steel-cord coating/cutting, component preparation, green building and mould-press curing. |
| excluded_products | Passenger-car and motorcycle/bicycle tyres; textile-carcass or bias-ply tyres; tube-type tyres and separate inner tubes/flaps; solid/cushion tyres; agricultural/earthmover/aircraft tyres; retreads and reused casings; bought finished tyres merely sorted, relabelled or repacked; extrusion-only cord coating without calendering. A use-name change is not a new route. |
| representative_product | One new tubeless all-steel radial commercial truck/bus tyre of one declared size and load/speed specification; the cited US illustration includes 295/75R22.5, but it is not a universal model or mass assumption. |
| production_route | Acquired raw rubber/additives and coated cord/wire → separate compound mixing → calendered steel body/belt plies and extruded rubber components/bead winding → green tyre building → mould-press vulcanization/cooling → inspection/rework → actual warehousing, packaging, handling and dispatch. |
| market_state | New, quality-accepted finished tyre actually net delivered at the declared factory dispatch gate; unmounted, no rim or separately supplied tube/flap. No kilometre service life is established. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete new unmounted tubeless steel-carcass radial truck/bus tyre as a manufactured article for the declared load/speed/axle specification. |
| How much | One tyre, counted as 1 item at actual net delivery; individual measured net mass is supporting metadata, not an invented constant. |
| How well | Quality accepted against the documented product specification, construction and size; record applicable approval/test evidence and limits without inventing universal pass thresholds. |
| How long or cycle | One manufacturing-to-net-dispatch cycle; no operational kilometre life, retread cycle or vehicle transport function is asserted. |
| reference_flow_link | tyre_delivered |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tire `11c2e97a-624f-41de-957d-543cddb777ef` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | new tyre with no previously used casing; truck or bus commercial tyre category excluding passenger/light-truck crossover claims; tubeless air-retaining innerliner; steel carcass ply and steel belt package with declared ply counts and cord construction; calendered cord coating and onsite compound mixing plus mould-press vulcanization; size and rim diameter; load index and speed symbol; axle/service designation and approved specification; net delivered count N and individual net masses excluding packaging; site and period plus upstream suppliers and actual energy supply; opening/closing WIP and finished-stock quantities with carried burdens; returns/rework identities and unique acceptance/delivery records |

Required qualifiers must appear in the concrete data package. The exact native unit is Item(s), reference unit internal ID 0, factor 1; item is its singular reporting label. The broad native Tire identity has no declared location, CAS, all-steel route or mass conversion. The complete identity limitations are preserved on the terminal inventory card; construction and new/tubeless state require the product specification and industrial evidence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | tyre_delivered | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N is the positive unique quality-accepted net-delivered tyre count for the same configuration, route and state cohort. P is new production release and is separately recorded; N and P are not presumed equal. Reaccepting a returned tyre never adds a new tyre. |
| net_mass_metadata | reference product | Mass | kg | Weigh actual individual tyre net masses on calibrated equipment or use traceable lot weighing with count and tare. Exclude rim, separate tube/flap and packaging. No constant kg/item or catalogue nominal mass is imposed. Net mass supports material closure and a separately disclosed derived mass-based view; this PCR reports one item. |
| supplied_formulation | recipe inputs | Mass | kg | Use whole supplied formulation mass. Active fractions, moisture and carrier water are analytical subledgers; raw ingredients actually acquired separately for onsite blending are separate inputs with actual mixing energy/losses. Do not buy both a formulation and its constituents in the same mass ledger. |
| utilities_state | utility and emission rows | declared row property | declared row unit | Retain original meter units and actual state. Convert only with documented unit relations, composition and state/enthalpy as needed. A raw integrated gas/liquid volume is not a rate and gets no extra time factor. Supplier flow-property coefficients are not density evidence. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_integrated_route | tbr_manufacture | Include actual receipt, weighing and staged mixing/milling for each compound, steel-cord calendering/cutting/splicing, tread/sidewall/innerliner/apex preparation, bead winding, green building, curing/cooling, inspection, genuine repair/rework, emission controls, utilities, warehousing, packaging and dispatch to the stated gate. Maintain operating-stage records within this one consolidated foreground process; do not create fictitious internal external exchanges. | `continental-commercial-2025` |
| boundary_structure | reference product | Verify steel carcass and steel belts from the construction specification and calender records. Steel belts alone do not establish all-steel carcass construction. Do not transfer textile cord PCR output directly as a finished tyre, or infer a distinct method from the word truck. | `goodyear-truck-2021`; `continental-commercial-2025` |
| boundary_real_delivery | tyre_delivered | The reference gate is actual net delivery, not new production release. Preserve separate new-release P and dispatch/return registers. Opening and closing WIP and finished tyres carry their actual accumulated burdens. Undelivered tyres never enter N; storage, packaging, handling, failed work and return processing within scope remain in the matched numerator. |  |
| boundary_inventory_extension | all inventory rows | Cards identify individual exchanges and common conditional ingredients, not a universal BOM. Collect each actual recipe/auxiliary, fuel, packaging, waste and pollutant separately. An absent card or blank UUID does not justify omitting a real burden. Add atomic cards and recheck a real plant package; never put selectors or combined materials into Selected flow. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual separately purchased raw elastomers, recipe ingredients, pretreated steel cord and bead wire entering the integrated tyre plant; no purchased finished tyre or used casing substitute. |
| starting_condition_role | foreground acquisition boundary; recursively include upstream production and inbound transport through compatible supplier datasets. |
| product_classification_scope | CPC3 36113 only for the declared new tubeless steel-carcass radial truck/bus subset, not all residual other tyres. |
| recursive_input_rule | An actual same-category new tyre input must retain its manufacture dataset and be disclosed for scope reassessment; it cannot stand in for making the tyre. Internally circulated compound, green tyre and stock transfers retain original burdens and cancel on consolidation. |
| upstream_dataset_requirement | Match actual elastomer grade/route, coating/cord construction, chemical formulation, electricity/steam/fuel source and transport. A broad flow identity never supplies these background quantities or geography. |
| disclosure | Declare site, route and product configuration, reporting/delivery period, gate location, stock/carryover allocation, failed runs, rework and returns, included transport/warehouse scope, auxiliary identities and data gaps. Geography is site evidence, not inferred from a cited manufacturer or the native Tire row. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tbr_manufacture | Integrated new all-steel radial tyre manufacture and net dispatch | required | Actual complete route within the declared subset | foreground integrated plant with operating-stage ledgers | 1 item |

Operating stages are separately traceable inside tbr_manufacture: material receipt and compound mixing/milling; steel-cord calendering/cutting and rubber component preparation/bead winding; casing and belt/tread building; mould curing/cooling; inspection and genuine rework; warehouse, packaging, handling and dispatch. This is one consolidated foreground process. Each compound recipe and component is identified in its batch ledger; internal compound and green-tyre handovers cancel, so no internal transfer is represented as another purchased input or external final output.

### Process: Integrated new tyre manufacture and net dispatch (`tbr_manufacture`)

#### Inputs

##### Product flows

###### Natural rubber compounding input (`natural_rubber`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Natural rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Styrene-butadiene rubber compounding input (`sbr`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Styrene-butadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Polybutadiene rubber compounding input (`br`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Polybutadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Bromobutyl rubber compounding input (`bromobutyl`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Bromobutyl rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Carbon black compounding input (`carbon_black`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Carbon black
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Precipitated silica compounding input (`silica`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Precipitated silica
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Sulfur compounding input (`sulfur`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Sulfur
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Zinc oxide compounding input (`zinc_oxide`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Zinc oxide
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Stearic acid compounding input (`stearic_acid`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### N-cyclohexyl-2-benzothiazolesulfenamide compounding input (`cbs`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: N-cyclohexyl-2-benzothiazolesulfenamide
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### N-(1,3-dimethylbutyl)-N-phenyl-p-phenylenediamine compounding input (`six_ppd`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: N-(1,3-dimethylbutyl)-N-phenyl-p-phenylenediamine
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Paraffin wax compounding input (`wax`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Paraffin wax
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Treated distillate aromatic extract oil compounding input (`tdae_oil`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Treated distillate aromatic extract oil
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Bis[3-(triethoxysilyl)propyl] tetrasulfide compounding input (`tespt`)

Record the actual purchased material issued to each separately identified tread, sidewall, steel-cord skim, bead/apex and innerliner compound. This card is conditional on this exact ingredient being used; absence requires BOM and issue-record evidence. Record supplier grade, route, supplied form and full formulation mass. Other actual ingredients require their own atomic cards. No source recipe or proportion is prescribed.

- Selected flow: Bis[3-(triethoxysilyl)propyl] tetrasulfide
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recipe`
- Sources: `continental-commercial-2025`

###### Carcass and belt reinforcement cord (`steel_cord`)

Purchased pretreated steel cord is separately metered by carcass ply and each belt/steel-chafer use. Include brass coating in supplied mass. Rubber coating is produced onsite from recorded skim compounds; do not procure it again as purchased rubberized cord. Disclose cord construction and coating; other actual coating needs its own identity.

- Selected flow: Brass-coated steel tyre cord
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `continental-commercial-2025`

###### Bead wire (`bead_wire`)

Measure purchased bead wire including its actual metallic coating. Winding, rubber coating and apex attachment remain foreground operations. Do not duplicate an externally purchased bead assembly and its constituents.

- Selected flow: Coated high-tensile steel bead wire
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `continental-commercial-2025`

###### Mould release formulation (`release_dispersion`)

Conditional on actual use of this supplied dispersion. Meter the whole purchased wet formulation; assayed silicone and carrier water are subledgers, not extra purchases. Different actual release chemicals need separate cards. Include green-tyre treatment and mould/bladder servicing losses.

- Selected flow: Aqueous silicone mould-release dispersion
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `continental-commercial-2025`

###### Consumed curing bladder (`curing_bladder`)

Allocate actual bladder replacement mass over recorded service cycles for the same production cohort, including failed cycles. This tooling consumable is not an inner tube supplied with the tyre.

- Selected flow: Butyl-rubber curing bladder
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `continental-commercial-2025`

###### Plant electricity (`electricity`)

Meter mixing, milling, cord calendering/cutting, extrusion, bead preparation, building, curing, inspection, control equipment, compressed-air generation, warehouse and handling. Submeters and parent meters must reconcile without overlapping totals. Include actual idle/failed/rework loads.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_util`
- Sources: `continental-commercial-2025`

###### Purchased steam (`steam`)

Conditional external steam supply: record mass, pressure/temperature, condensate state and return. Thermal enthalpy is an energy reconciliation, not a second purchase of the same steam. Onsite steam is an internal transfer: replace this external supply with actual fuel, water, electricity and emissions; never count both.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_util`
- Sources: `continental-commercial-2025`

###### Onsite boiler natural gas (`natural_gas`)

Only actual onsite fuel use. Retain metered integrated volume, pressure, temperature, wet/dry basis and heating-value basis. Rate multiplied by duration is allowed; an integrated volume is never multiplied by time again. No generic gas density or boiler efficiency is supplied.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_util`
- Sources: `continental-commercial-2025`

###### Purchased water (`water_supply`)

Measure external make-up for cooling, cleaning and steam generation; distinguish recirculation and condensate recovery from fresh acquisition. Release-formulation carrier water is already in that formulation; do not count it here again. Other water supply identities require separate cards.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_util`
- Sources: `continental-commercial-2025`

###### Purchased curing nitrogen (`nitrogen`)

Conditional actual purchased pressure medium. Keep integrated gas mass or convert volume using documented gas state and composition. Onsite generation requires actual air-separation electricity and losses instead of a duplicate purchased nitrogen burden.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_util`
- Sources: `continental-commercial-2025`

###### Warehouse and dispatch fuel (`diesel`)

Include actual fuel for handling and loading within the declared delivery gate. Record tank opening/closing, deliveries and equipment use. A separately purchased transport service must replace its overlapping fuel/vehicle burdens, not supplement them.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `continental-commercial-2025`

###### Tyre paper label (`paper_label`)

Count actual complete labels including adhesive and backing losses. Labelling a purchased finished tyre alone is outside this manufacturing route.

- Selected flow: Self-adhesive paper tyre label
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `continental-commercial-2025`

###### Polyethylene transport wrap (`pe_wrap`)

Conditional actual packaging at dispatch; report genuinely unwrapped deliveries with evidence rather than imposing packaging. Do not include film mass in the net tyre mass. Each other actual packaging article needs its own atomic exchange.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `continental-commercial-2025`

##### Waste flows

##### Elementary flows

###### Combustion oxygen consumed (`oxygen_air`)

Conditional on actual onsite combustion. Obtain consumed oxygen from air using independent fuel composition, combustion-gas analysis or justified stoichiometry. Inert air components enter and leave in the matching physical gas ledger; do not infer unknown oxygen demand from a mass residual. Do not add upstream combustion oxygen of purchased electricity/steam again.

- Selected flow: Oxygen from air
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-background-2008`

#### Outputs

##### Product flows

###### Net delivered new tyre (`tyre_delivered`)

The unique terminal output is a complete new tubeless all-steel radial truck/bus tyre, with rubber innerliner, steel carcass and steel belts; no rim, separate inner tube or flap. Native identity is broad: its name components are Tire; Production mix, at plant; empty route and flow-properties name components; geography/locationOfSupply and CAS are unspecified; its comment includes both metal and rubber tyres. Only its count identity is adopted, qualified here to rubber new TBR manufacture. It supplies no recipe, mass factor, service life, supplier, national electricity mix or all-steel manufacturing evidence. The exact native reference unit Item(s) is written as item (factor 1) in this PCR.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_output`
- Sources: `continental-commercial-2025`; `goodyear-truck-2021`; `apollo-tbr-us-2023`

##### Waste flows

###### Uncured rubber compound scrap (`uncured_scrap`)

Only material actually leaving the boundary is waste. Internally returned trim is a tracked internal transfer retaining its original burdens and incurs only additional reprocessing burdens, never a second raw-rubber purchase.

- Selected flow: Uncured rubber compound scrap
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `continental-commercial-2025`; `epa-rubber-background-2008`

###### Rejected cured tyre (`cured_scrap`)

Retain full rejected-tyre mass, metal content and treatment destination including destructive tests. Rejected tyres are not net delivered reference output and do not earn an avoided-new-tyre credit.

- Selected flow: Rejected cured tyre
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `continental-commercial-2025`; `epa-rubber-background-2008`

###### Steel tyre cord offcut (`steel_scrap`)

Separately weigh actual external steel cord offcuts and adhering rubber; disclose composition and recovery destination without subtracting their mass from acquired cord twice.

- Selected flow: Steel tyre cord offcut
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `continental-commercial-2025`; `epa-rubber-background-2008`

###### Collected rubber-compounding dust (`collected_dust`)

Collect dry mass, actual composition and disposal/reuse destination from controls. Do not also emit the captured fraction to air.

- Selected flow: Collected rubber-compounding dust
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `continental-commercial-2025`; `epa-rubber-background-2008`

###### Industrial wastewater (`wastewater`)

Record actual external wastewater wet mass, water content, pollutant-species analyses and treatment provider. Internal treatment effluent and sludge require distinct exchanges; COD is not a physical outlet species or a proxy for tyre carbon mass.

- Selected flow: Industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `continental-commercial-2025`; `epa-rubber-background-2008`

###### Spent butyl-rubber curing bladder (`spent_bladder`)

Measure actual bladder waste separately from tyre rejects; reconcile replacement input and stock changes over its service cycles.

- Selected flow: Spent butyl-rubber curing bladder
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `continental-commercial-2025`; `epa-rubber-background-2008`

##### Elementary flows

###### Carbon dioxide to air (`co2_air`)

Conditional actual onsite combustion emission, with fuel-carbon analysis and independently documented species accounting. Purchased electricity/steam upstream emissions stay in their supplier datasets.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-background-2008`

###### Carbon disulfide to air (`carbon_disulfide_air`)

Conditional measured/speciated release from actual compounds and operations, including curing and cool-down. Retain detection limits and capture/destruction efficiency. Do not apply historical passenger-tyre factors by default.

- Selected flow: Carbon disulfide to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-background-2008`

###### Particulate matter to air (`particulate_air`)

Record uncaptured outlet particulate mass and particle-size/composition basis separately from collected dust. Where speciated constituents are reported as elementary flows, avoid adding both total PM and its constituents as independent mass.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-background-2008`

###### Water vapour to air (`water_vapour_air`)

Separate evaporation/steam loss and independently established combustion or reaction water. No net water formation is inferred merely from vulcanization or a mass residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / N, using the matched raw-cohort numerator and one reporting division only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-rubber-background-2008`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace_cohorts | tbr_manufacture | Prefer batch/recipe/equipment records to attribute each raw numerator to its actual configuration and delivered cohort. Where utilities are shared, use metered operation time and load/enthalpy/throughput drivers appropriate to that utility, documenting the shares and reconciliation to the parent total. Do not normalize to nameplate capacity or select only successful runs. | `jrc-ilcd-allocation-2010` |
| allocation_no_fictitious_credit | waste and internal returns | Internal trim/green-tyre rework and warehouse transfers are not co-products. Count their incremental processing and cancel internal transfers with original burdens retained. No avoided virgin rubber, new tyre or retreading credit is assumed for scraps. For actual sold secondary material, disclose composition, destination and the chosen end-of-waste/allocation convention; apply it consistently and do not silently deduct its embedded production burdens. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection retains unnormalized raw-period numerators and complete WIP/finished-stock carried burdens. The aggregation_rule cell names the final reporting basis only; it does not perform A_i/N during collection. Card formula, reporting basis and the single report_once rule describe the same operation, not successive divisions. Each protocol is owned by tbr_manufacture and its named operating-stage owner.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_recipe | tbr_manufacture | Recipe mass | weighing and stock ledger | batch; compound role; recipe revision; ingredient and supplier grade/route/form; actual gross/net issued mass; assay; moisture; raw-store opening/closing; rejected and zero-output batches; compound/WIP transfers; carried burdens | Mixing owner retains unnormalized raw weighing and stock-adjusted consumption for every batch, including failed attempts and rework. Separate whole purchased formulations from constituent/carrier subledgers. Track each internal return with its original burden; do not reacquire the same rubber. No division occurs during collection. | kg by ingredient and batch | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | recipe BOM; calibrated scales; issue and stock reconciliation |
| cp_components | tbr_manufacture | Steel structure and component route | component batch and wire ledger | cord/wire supplier; coating; cord construction; carcass/belt/chafer allocation; ply count; calender line and gauges; cut angles/splices; supplied metal mass; skim compound batches; offcuts; green-tyre serial links; WIP and carried burdens | Component owner records actual calendering and cutting of steel carcass and belts, extrusion/innerliner calendering, bead winding and building links. Retain unnormalized supplied mass, internal compound transfers and losses. Precoated metallic mass includes coating; onsite skim rubber is not purchased a second time. | kg; item; construction dimensions | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | construction specification; calender/cutter and bead/build records |
| cp_aux | tbr_manufacture | Curing and auxiliary materials | cure-cycle and consumable log | green-tyre ID; mould/bladder ID; actual cycle temperature/pressure/time; failed cycles; cool-down; formulation issue mass and assay; bladder replacement and stock; rework | Curing owner retains raw cycle, consumable and replacement records including failures, setup and rework. No setpoint or ingredient amount is copied from the cited overview/test report. Retain unnormalized consumable use and complete inventory/carryover records. | kg; measured cycle conditions | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | cycle logs; supplier formulation and replacement records |
| cp_util | tbr_manufacture | All manufacturing utility burdens | meter and supply record | carrier; meter/submeter scope; opening/closing readings; timestamps; integrated volume or rate and duration flag; gas state; steam and condensate mass/enthalpy; onsite generation; idle/rework use; product shares; carried utility burdens | Utility owner retains unnormalized meter differences and purchased/on-site supply boundaries across all manufacturing stages and stores. Resolve parent/submeter overlaps; allocate complete raw-period loads, including failed and zero-output work, before reporting. Keep one numerator per actual carrier. | kWh; kg; m3 with state; MJ only as enthalpy subledger | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | calibrated meters; fuel and steam supply; total/share reconciliation |
| cp_dispatch | tbr_manufacture | Warehouse packaging handling and dispatch | warehouse and dispatch ledger | tyre serial/batch; warehouse dates; label/wrap gross issue and rejects; actual handling fuel; stock opening/closing; dispatch gate and load record; transport service boundary; return IDs; carried stock burdens | Warehouse owner retains raw storage, packaging, handling and loading use and all genuine return/rework burdens. Stock transfers retain manufacture burdens; they are not another production output. Packaging supplier mass is excluded from tyre net mass but remains inventory input. | kg; item; dates and actual transport bases | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | stock movements; packaging issues; handling fuel; signed dispatch records |
| cp_output | tbr_manufacture | Unique accepted net delivery | quality and serial-level shipment ledger | serial/batch; configuration; new-release P; quality decision; gross shipments; same-cohort returns; unique net-delivery N; individual net masses; tare; opening/closing WIP and finished stock; carried input/burden vectors | Quality and warehouse owners jointly preserve raw count, acceptance and calibrated net-weighing records for the same configuration. Deduplicate returns and reacceptance; distinguish production release from actual delivery. Preserve full WIP and finished-stock quantities and carried burdens. Collection does not divide any numerator. | item; kg excluding packaging | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | accepted specification; serial identity; scale calibration; stock/dispatch reconciliation |
| cp_waste | tbr_manufacture | External wastes and internal recovery | waste weighbridge and transfer ledger | individual waste identity; wet/dry mass; rubber/steel/coating/water fractions; origin operation; internal return or external exit; treatment route; opening/closing stocks and carried burdens | Waste owner retains unnormalized external masses and internal return identities. Captured dust is not a stack emission. Include cured rejects, destructive tests, contaminated auxiliaries and actual treatment; add each actual sludge or further waste separately. | kg with phase and composition | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | weigh tickets; analytical methods; waste manifests and treatment records |
| cp_emissions | tbr_manufacture | Species and physical balances | stack/fugitive/water analytical record | emission point and species; concentration; flow rate or integrated volume; gas state; time; detection limit; capture/destruction fraction; raw fuel elements; phase water; solid/liquid outlets; stocks and carried burdens | Environmental owner retains raw period species-specific measurements or a justified applicable factor with actual raw activity. Distinguish measured integrated volume from rate times duration; preserve detection limits, captured and emitted fractions. Balance physical mass/elements separately from identified chemical species and water formation/consumption. | kg; m3 and stated conditions; time; concentration | Each batch/meter interval and stock close | Same complete declared raw period and traced delivered cohort, including opening carryover | Named plant and actual supply/control/warehouse boundary | per declared reference flow | sampling records; lab reports; source applicability and closure diagnostics |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| stock_numerator | all nonreference inventory rows | For each independent physical exchange or burden i, A_i = C_i_open_WIP + C_i_open_FG + C_i_returns_restored + F_i_period - C_i_close_WIP - C_i_close_FG - C_i_other_cohorts. F_i_period contains the actual raw-period consumption/burdens of the route after raw-material stock reconciliation, including failed/zero-output work, rework, genuine returns, treatment, warehouse and dispatch within scope. C vectors are traced accumulated amounts/burdens carried with stock or other product cohorts, not a second procurement. C_i_returns_restored restores the original tracked burden of actual returned articles; record the corresponding reversal/correction to their original delivery cohort so it is not manufactured or reported twice. F_i_period includes only their additional actual return/rework burdens. Assign failure/rework burdens consistently across the actual cohorts before these transfers. Cancel internal compound, green-tyre and production-to-store handovers. Preserve signed reconciliation and explain any residual rather than inventing a balancing output. | F_i_period; C_i_open_WIP; C_i_open_FG; C_i_returns_restored; C_i_close_WIP; C_i_close_FG; C_i_other_cohorts; cp_recipe; cp_components; cp_aux; cp_util; cp_dispatch; cp_waste; cp_emissions | A_i |  |
| net_delivery | tyre_delivered | N is the number of distinct new quality-accepted tyre serials whose net delivery remains effective at the declared return cut-off; exclude outstanding returned/undelivered tyres. A return followed by redispatch is one serial with its final delivery state, not two shipments minus an unqualified return-event count. Previously shipped/returned/reaccepted tyres retain identity and are not counted as new production. Reconcile FG_close = FG_open + P_new_release + R_returned - S_shipped - D_scrapped, plus documented other transfers. Undelivered and returned stock retain original manufacture burdens until their actual disposition. If a cohort has N=0, retain its burdens for carryover/allocation and do not report a divided unit dataset. | cp_output; cp_dispatch; cp_waste | N |  |
| report_once | all nonreference inventory rows | a_i = A_i / N, only after actual raw-unit/state conversions and stock/cohort attribution, with N>0. This is the sole normalization; report one item terminal output. Stage, card and aggregation text refer to this one operation. Do not divide each failed batch by its own output, and do not divide a normalized intermediate again. | A_i; N | a_i |  |
| physical_and_species | tbr_manufacture | For a consistent control volume, reconcile mass_in_external + opening_physical_stock + actual_returned_mass = gross_shipped_mass + other_actual_exits + closing_physical_stock. Use gross physical crossing records here, including true incoming combustion oxygen if fuel is burned; do not put net deliveries on the right while also adding those returns on the left. Keep packaging separate from tyre net mass and reconcile each material stream. Use actual measured or composition-based C/S/Zn/steel/coating balances independently of normalized LCI burden vectors. Document actual sulfur crosslinking, volatilization, water evaporation and any independently established reaction/combustion water. No stoichiometric emission or reaction-water amount is imposed by this PCR. | cp_recipe; cp_components; cp_output; cp_waste; cp_emissions | documented physical closure and actual species | `epa-rubber-background-2008` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | reference product | Match all required qualifiers, actual steel carcass/belt structure and full manufacturing route; document size/recipe/cycle changes as separate configurations or justified aggregation. | construction drawings; actual batch, cure and acceptance records |
| quality_complete_period | all inventory rows | Keep complete period logs and carried opening/closing WIP/FG burdens. No removal of unsuccessful batches, repeated counting of returns, exclusion of real packaging/storage, or replacement of measured numerator with a literature recipe. | inventory and burden reconciliation; raw numerator lineage |
| quality_identity | all inventory rows | Broad native Tire; Production mix, at plant has no declared geography/CAS, route or mass coefficient and includes metal/rubber in its comment. Qualify this rubber TBR count identity explicitly. All blank auxiliary UUIDs require independent full native-field compatibility checks when matched; do not infer supplier mix or site from an official family name. | full native record and exact support chain; supplier material specifications |
| quality_limits | data package | Report measurement uncertainty, omissions with reasons, detection limits, temporal and geographic applicability, formulation confidentiality and provider matches. The method has no default numerical recipe, emission factor, cure setting or tyre service-life equivalence. | raw evidence and applicability statement |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Check a new, never-used casing, tubeless steel-carcass/steel-belt construction, full integrated manufacture and declared specification. Reject retreading, bought-tyre relabelling, passenger-car or textile-carcass substitutions and unsupported generic coverage of all 36113. | `continental-commercial-2025`; `apollo-tbr-us-2023` |
| validate_terminal_count | tyre_delivered | Require N > 0 from traceable unique quality-accepted net deliveries of the same product/route/state cohort. Returns and reacceptance do not create new production or another accepted tyre. Reconcile release, physical shipment, return, scrap, opening/closing WIP and finished-stock records and their carried burdens; a zero-output batch remains in burden records and cannot be independently divided by zero. |  |
| validate_atomic_units | all inventory rows | Check one identity per exchange, supplied formulation versus assay subledgers, property/unit and actual gas/liquid state before a single reporting normalization. Metered integrated volume gets no extra duration. Exact native count unit Item(s) and PCR label item are identical with factor 1; no density or item-mass factor is present in the Tire row. |  |
| validate_balance_species | tbr_manufacture | Close complete physical mass and relevant C/S/Zn/metal element ledgers over the same cohort, including compounds, coating, scrap, dust, water, vents, stores and returns. Independently establish actual outlet species, combustion/reaction water and water phases from measurement/chemistry. Never infer both unknown water and an unknown outlet from one residual, equate COD with physical species, or force every sulfur atom into a presumed emission. | `epa-rubber-background-2008` |
| validate_evidence_limits | data package | Retain raw records, route/site applicability, supplier identity and uncertainty. The cited industrial sources are independent technical support, not a claim that one SKU/plant supplied every operation or recipe. EPA passenger-size/laboratory tests establish no TBR factor or setpoint. Blank auxiliary UUID/provider matches require later compatibility checks without inventing quantities. | `epa-rubber-background-2008`; `continental-commercial-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A new tyre supply input into a specified commercial vehicle or replacement supply model, with exact construction/size and one-item basis. |
| allowed_use | Article supply for compatible new tubeless all-steel radial truck/bus tyres after dataset-specific quality/applicability review. |
| excluded_use | Generic all-other-tyre coverage, retreading, textile carcass/solid tyre supply, inner-tube supply, use-phase fuel savings, per-kilometre comparisons and an assumed tyre life. |
| required_metadata | All reference qualifiers; process/gate boundaries; raw-period and cohort/stock accounting; net tyre masses; supplier/energy mix; individual material and species identity; allocation; source applicability. |
| required_quality_disclosure | Raw measurement coverage and uncertainty, detection limits, auxiliary UUID/provider gaps and native count-only broad identity limits. |
| update_trigger | Change in carcass/belt architecture, cord coating route, calender/extrusion route, compound recipe, tyre size/specification, energy supply, acceptance/dispatch gate or stock/carryover accounting. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-10-16 | Sibling classification boundaries only; 36113 is broader than this structural subset. |
| continental-commercial-2025 | handbook | Continental, White Paper: Tires for Commercial Vehicles, PDF modified 2025-12-22, pp. 7, 9. https://cdn.continental.com/fileadmin/__imported/sites/corporate/_international/english/hubpages/10_20press/01_press_releases/06_20cvt/001_white_papers_cvt/white_paper_tires_for_commercial_vehicles.pdf ; retrieved 2026-10-16 | Commercial steel radial carcass and complete material/compound/component/build/cure/inspection route. Manufacturer overview, not a factory recipe, operating setpoint, life claim or emission factor. |
| goodyear-truck-2021 | handbook | Goodyear, Truck Tyres Technical Data Book, 2021 file edition, pp. 78–79. https://www.goodyear.eu/content/dam/goodyear/truck/pdfs/bg_databook_2021.pdf ; retrieved 2026-10-16 | Steel carcass/belt radial construction and tubeless innerliner distinction; historical technical evidence. Tube and flap inset applies only to tube-type tyres; no default layer count or recipe adopted. |
| apollo-tbr-us-2023 | handbook | Apollo, Truck and Bus Radial Tires Technical Databook 2023 US, pp. 25–27. https://www.apollotyres.com/content/dam/orbit/usa/us-truck-tires/cv-usa/DIGITAL%20TBR%20TECHN.%20DATABOOK%202023%20US.pdf ; retrieved 2026-10-16 | Commercial all-steel radial/tubeless article and component/marking identity. US-market manufacturer illustration, not universal geometry, acceptance thresholds, site geography or a quantitative inventory. |
| epa-rubber-background-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12 Manufacture of Rubber Products, Draft Final November 2008, §§3.2.1, 3.3.2 (pp. 3-4–3-5). https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf ; retrieved 2026-10-16 | Calendering, curing/cool-down and emission-collection context only. Historical tests include passenger-size tyres and non-tyre/laboratory compounds; no TBR emission factor, cure duration, temperature or pressure is transferred. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, First edition March2010, section7.9.3, printed pp.257–258 (PDF277–278); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | LCA method support only within attributional cases where allocation rather than substitution is selected: virtual subdivision and flow-specific determining physical causality support direct batch/recipe/equipment attribution and utility-specific time/load/enthalpy/throughput drivers. Manufacturing sources supply construction/process evidence, not this LCA hierarchy. No default physical/economic share, stock-layer formula, recipe, yield/energy/emission factor, automatic coproduct status, avoided-burden credit or PEF/CFF conformity is established; actual full-site totals, failures, service drivers and stock/cohort lineage remain required. |
