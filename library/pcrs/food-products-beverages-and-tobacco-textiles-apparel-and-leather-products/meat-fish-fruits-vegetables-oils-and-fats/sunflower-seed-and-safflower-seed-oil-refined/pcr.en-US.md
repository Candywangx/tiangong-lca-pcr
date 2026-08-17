---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-refined
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sunflower-seed and safflower-seed oil, refined

## 1. Scope and Applicability

This PCR applies to bulk refined edible oil derived from sunflower seed, safflower seed, or a declared blend of the two, at the refinery plant gate. It covers the foreground refining of received crude oil through the route actually operated, including degumming, chemical neutralisation and washing when used, bleaching and filtration, deodorisation, finishing filtration, and bulk storage. Utilities, process water, refining aids, directly generated residues, wastewater, and direct releases are included when they cross the foreground boundary.

Agricultural seed production, crude-oil extraction, inbound transport before crude-oil receipt, retail packaging, distribution, retail, consumer use, and end-of-life are outside this gate-to-gate foreground boundary. Upstream crude-oil supply and other technosphere inputs shall be linked as background datasets. Virgin, cold-pressed, and unrefined oils are excluded because their production state and process route differ from refined oil. The product shall be identified as sunflower oil, safflower oil, or a declared sunflower/safflower blend and shall be in a state suitable for its declared food-market use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-refined |
| classification_refs | CPC 3.0:21632 (exact) |
| covered_products | Bulk refined sunflower-seed oil; bulk refined safflower-seed oil; declared blends consisting only of refined sunflower-seed and safflower-seed oils |
| excluded_products | Crude oil; virgin or cold-pressed oil; unrefined oil; oil from other botanical sources; formulated blends containing other oils; packaged retail products; used cooking oil; biodiesel and other chemically transformed derivatives |
| representative_product | Refined edible sunflower-seed or safflower-seed oil, bulk at refinery plant gate |
| production_route | Receipt of crude sunflower/safflower oil; degumming; chemical neutralisation and washing or a declared physical-refining route; bleaching and filtration; deodorisation; cooling or polishing filtration; bulk storage |
| market_state | Finished, refined, food-grade oil in bulk at the refinery plant gate, before retail packaging and distribution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Bulk refined edible oil derived from sunflower seed, safflower seed, or their declared blend |
| How much | 1 kg net mass of refined oil |
| How well | Meets the declared applicable food-grade specification and the declared sunflower/safflower identity; free of packaging mass |
| How long or cycle | One production lot or campaign at refinery plant-gate release; no service duration applies |
| reference_flow_link | `refined_sunflower_safflower_oil` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sunflower-seed and safflower-seed oil, refined `1b88e515-861e-4552-b494-67bb3d645aa7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical source: sunflower, safflower, or declared blend ratio; refining route: chemical, physical, or combined; oleic grade where claimed; food-grade specification and release criteria; production geography; production period; bulk plant-gate state; packaging exclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalised inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product as 1 kg net oil mass. Exclude packaging, pallets, containers, and retained tank heel from the reference amount. |
| `wet_dry_basis` | crude oil, refining aids, residues, and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether each mass is as-received, dry, or active-substance basis. Do not convert between bases without measured moisture or concentration and a documented formula. |
| `energy_conversion` | purchased electricity, fuels, and steam | declared energy or mass property | kWh, MJ, or kg as applicable | Preserve the metered or invoiced unit in raw records; document conversion factors and avoid treating steam mass as an energy quantity without measured steam conditions or an explicit enthalpy method. |
| `blend_accounting` | sunflower/safflower blends | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record sunflower and safflower crude-oil inputs separately and disclose their mass shares; the shares shall reconcile to the total crude-oil feed after any separately measured non-oil additions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude sunflower-seed oil, crude safflower-seed oil, or their declared blend received at the refinery gate, with mass, botanical source, quality state, supplier or upstream dataset, and receipt period recorded |
| starting_condition_role | Foreground refining feed and boundary hand-off from upstream oil extraction and transport |
| product_classification_scope | Refined sunflower-seed and safflower-seed oils only; CPC 3.0:21632 is classification context rather than canonical identity |
| recursive_input_rule | Any purchased refined sunflower/safflower oil entering the same category shall be recorded as a technosphere input with supplier dataset and shall not cause recursive reapplication of this foreground refining PCR |
| upstream_dataset_requirement | Link each crude-oil feed, utility, chemical, and other technosphere input to a geographically and temporally appropriate upstream dataset; disclose proxy use and any omitted transport |
| disclosure | Declare refining route, included unit operations, facility geography, production period, crude-oil botanical shares, co-products and residues, wastewater treatment hand-off, direct-emission coverage, and packaging exclusion |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground refinery | Include operations from measured crude-oil receipt through release of bulk refined oil from plant storage, together with onsite utilities, refining aids, residues, wastewater, and direct releases attributable to that route. | `ec-jrc-fdm-bref-2019`; `nucci-et-al-2014-sunflower-oil-lca` |
| `boundary_route_disclosure` | chemical, physical, or combined refining | Include only operations actually used and explicitly disclose omitted or substituted steps; chemical neutralisation and washing are conditional when physical refining is used. | `nucci-et-al-2014-sunflower-oil-lca` |
| `boundary_upstream_handoff` | purchased crude oil and other technosphere inputs | Keep upstream production outside the foreground refinery but require linked upstream datasets and disclose any proxy, cut-off, or missing transport. | `ghg-protocol-product-standard-2011` |
| `boundary_quality_state` | reference product | The output shall be released as refined oil in the declared food-market state; virgin, cold-pressed, crude, and packaged retail products are outside scope. | `codex-cxs-210-1999` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `oil_refining` | Crude sunflower/safflower oil refining | required | Always required; record the actual chemical, physical, or combined route | Foreground conversion of received crude oil to bulk refined edible oil | 1 kg net refined oil at plant gate |

### Process: Crude sunflower/safflower oil refining (`oil_refining`)

#### Inputs

##### Product flows

###### Crude sunflower/safflower oil feed (`crude_oil_feed`)

Measure each botanical crude-oil feed received into the refining route. Keep sunflower, safflower, and blend components distinguishable in raw records.

- Selected flow: Sunflower-seed and safflower-seed oil, crude `e48ecaca-7bfe-427a-a117-7eeeb8253565`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of crude oil charged to the refining route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_inputs`
- Range: Provisional crude-feed mass-balance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.2
  - Unit: kg/kg refined oil
  - Basis: per 1 kg net refined oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`process_water`)

Record water supplied for degumming, washing, cleaning, vacuum systems, and other refining uses that crosses the foreground boundary; keep non-contact cooling water separately identifiable.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or reconciled water use allocated to the refining campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_inputs`
- Sources: `nucci-et-al-2014-sunflower-oil-lca`
- Range: Provisional water-use screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg refined oil
  - Basis: per 1 kg net refined oil output; replace with route-specific evidence or foreground records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bleaching earth and filter aids (`bleaching_aids`)

Record fresh adsorbents and filter aids consumed in bleaching and polishing filtration, with material type and moisture basis declared.

- Selected flow: Bleaching earth and filter aids
- Flow property / unit: Mass / kg
- Amount rule: stock issue or purchase mass minus verified returns, normalised to refined oil output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_inputs`
- Sources: `nucci-et-al-2014-sunflower-oil-lca`
- Range: Provisional adsorbent screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg refined oil
  - Basis: per 1 kg net refined oil output; replace with route-specific evidence or foreground records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Neutralisation and degumming chemicals (`refining_chemicals`)

Record caustic, acid, and other refining chemicals by commercial product mass and active concentration. This row is conditional on the declared route and actual chemical use.

- Selected flow: Refining chemicals, route-specific
- Flow property / unit: Mass / kg
- Amount rule: measured or invoiced chemical product mass, with active concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_inputs`
- Range: Provisional refining-chemical screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg commercial product/kg refined oil
  - Basis: per 1 kg net refined oil output; replace with route-specific evidence or foreground records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam or thermal utility (`thermal_energy`)

Record purchased steam mass and conditions, or the separately metered fuel and boiler system used to generate onsite steam. Do not count both purchased steam and its upstream fuel.

- Selected flow: Steam or thermal energy, route-specific
- Flow property / unit: Mass / kg steam, or Energy / MJ, as metered
- Amount rule: measured purchased steam or calculated useful thermal energy from reconciled foreground records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `nucci-et-al-2014-sunflower-oil-lca`
- Range: Provisional purchased-steam screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg steam/kg refined oil
  - Basis: per 1 kg net refined oil output; applicable only when steam mass is the recorded quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity (`electricity_input`)

Record metered or invoiced electricity attributable to refining, pumping, vacuum, filtration, cooling, and bulk storage within the foreground boundary.

- Selected flow: Electricity, location-specific supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or a documented allocation of a complete facility meter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `nucci-et-al-2014-sunflower-oil-lca`
- Range: Provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kWh/kg refined oil
  - Basis: per 1 kg net refined oil output; replace with site or technology evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by this PCR. Record any recovered oil, rework, or externally received residue as a separate product or waste input with its origin and treatment status.

##### Elementary flows

Record any directly abstracted water or other resource input as the corresponding elementary flow rather than as purchased process water.

#### Outputs

##### Product flows

###### Bulk refined sunflower/safflower oil (`refined_sunflower_safflower_oil`)

The quantitative reference is the net mass of conforming bulk refined oil released from the foreground refinery.

- Selected flow: Sunflower-seed and safflower-seed oil, refined `1b88e515-861e-4552-b494-67bb3d645aa7`
- Flow property / unit: Mass / kg
- Amount rule: fixed quantitative reference of 1 kg net refined oil
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

###### Saleable soapstock, acid oil, or recovered oil (`refining_coproducts`)

Record each output separately when it has a documented destination and economic value; otherwise classify it as waste and document the treatment hand-off.

- Selected flow: Route-specific saleable refining co-product
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass or tank reconciliation by co-product type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_wastes`
- Range: Provisional co-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg refined oil
  - Basis: per 1 kg net refined oil output; replace with route-specific evidence or foreground records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent bleaching earth and filter residue (`spent_bleaching_residue`)

Record wet as-dispatched mass, retained oil where measured, waste classification, and treatment destination.

- Selected flow: Spent bleaching earth and filter residue
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass with moisture and retained-oil basis disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_wastes`
- Sources: `nucci-et-al-2014-sunflower-oil-lca`
- Range: Provisional spent-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg refined oil
  - Basis: per 1 kg net refined oil output; replace with route-specific evidence or foreground records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refinery wastewater (`refinery_wastewater`)

Record wastewater leaving refining operations before onsite or offsite treatment; keep reused water and non-contact cooling water distinguishable.

- Selected flow: Refinery wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or documented water balance, before treatment hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_wastes`
- Sources: `nucci-et-al-2014-sunflower-oil-lca`
- Range: Provisional wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg refined oil
  - Basis: per 1 kg net refined oil output; replace with route-specific evidence or foreground records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Direct emissions to air, water, and soil shall be reported as individual elementary flows when they cross the site boundary. Do not use a generic aggregated emission row in place of measured pollutants.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared refinery operations and utilities | Avoid allocation where separately metered or otherwise separable operations can be subdivided. Do not allocate upstream crude-oil production to the foreground refinery. | `ghg-protocol-product-standard-2011` |
| `allocation_physical_first` | inseparable multi-output refining operations | If subdivision is not practicable, use a documented physical relationship that reflects the causation of inputs, energy use, residues, and emissions. Mass allocation shall not be used automatically when it does not reflect the physical relationship. | `ghg-protocol-product-standard-2011` |
| `allocation_economic_fallback` | saleable co-products lacking a defensible physical relationship | Economic allocation may be used only after documenting why subdivision, system expansion, and physical allocation are not practicable; use contemporaneous plant-gate values and disclose the price period and sensitivity. | `ghg-protocol-product-standard-2011` |
| `allocation_waste_status` | soapstock, acid oil, spent bleaching earth, filter residue, and wastewater | Classify an output as product or waste from its documented destination and economic status. Do not assign co-product credit to a waste output without a verified recovery function and receiving dataset. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_inputs` | `oil_refining` | crude oil, process water, bleaching aids, and refining chemicals | weighbridge ticket, tank dip or calibrated meter, stock ledger, purchase record, laboratory concentration record | date; batch; material identity; botanical source; gross and tare mass or meter reading; moisture or active concentration; returns; meter id | reconcile batch records to inventory movement and production output | kg; concentration as mass fraction where applicable | per delivery or batch, aggregated monthly | representative continuous 12-month period or complete declared campaign | all refining lines and storage feeding the reported output | sum net inputs by material and divide by conforming net refined-oil output; avoid double counting transfers | calibration record; inventory reconciliation; supplier specification; laboratory result; exception log |
| `cp_energy_inputs` | `oil_refining` | electricity, steam, and fuel | utility meter, invoice, boiler log, steam flow and condition record | timestamp; meter id; opening and closing reading; fuel quantity; steam pressure and temperature where used; allocation driver; downtime | direct submetering preferred; otherwise reconcile the complete facility balance and document allocation | kWh; MJ; kg steam; fuel-specific unit | continuous or per shift, aggregated monthly | same period as production output | all utilities serving the reported refining route | subtract verified non-production use, convert with documented factors, and normalise to net refined-oil output | meter calibration; invoice reconciliation; conversion-factor source; allocation worksheet |
| `cp_outputs_and_wastes` | `oil_refining` | refined oil, co-products, spent residue, and wastewater | certified production mass, dispatch ticket, tank reconciliation, waste manifest, wastewater meter and test | date; batch; output identity; net mass; moisture; retained oil; destination; economic status; wastewater volume or mass; treatment route | reconcile certified output, tank change, dispatch, and waste records | kg; m3 only when density and conversion are documented | per batch or dispatch, aggregated monthly | same period as inputs | all reported refining lines, storage, and waste hand-offs | sum each distinct output; convert volumes only with measured or justified density; normalise to reference output | product release certificate; weighbridge record; waste manifest; treatment receipt; meter calibration; mass-balance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise_reference` | every inventory amount | Normalised amount = period amount / conforming net refined-oil output for the same period. The reference product is then set to exactly 1 kg. | reconciled period amount; conforming net refined-oil output | amount per kg refined oil |  |
| `calc_active_chemical` | chemicals reported as solutions or commercial products | Active amount = commercial product mass × measured active mass fraction. Retain both commercial-product and active-substance values. | product mass; certificate or test concentration | kg active substance and kg commercial product per kg refined oil |  |
| `calc_volume_to_mass` | oil, water, steam condensate, and wastewater recorded by volume | Mass = measured volume × density at the declared temperature. Do not apply an assumed density without marking the result as modelled and disclosing the assumption. | volume; density; temperature | kg per kg refined oil | `codex-cxs-210-1999` |
| `calc_mass_balance` | refinery mass-bearing inputs and outputs | Mass-balance residual = total mass inputs − total measured product, co-product, waste, wastewater, and direct mass outputs. Investigate and disclose the residual rather than forcing it to zero. | all mass-bearing rows on a consistent wet/dry basis | residual kg and residual share per kg refined oil |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | crude and refined oils | Preserve botanical source, blend share, refining route, oleic grade where claimed, product specification, batch or campaign, and the selected Tiangong flow identity. | supplier specification; batch record; product release certificate; flow UUID verification |
| `dq_measurement` | all foreground amounts | Use calibrated meters, scales, tank reconciliations, invoices, or laboratory tests; disclose conversions, allocation drivers, missing records, and estimates. | calibration certificate; meter and invoice reconciliation; calculation worksheet; exception log |
| `dq_temporal` | foreground dataset | Cover a representative continuous 12-month period or the complete declared production campaign and disclose shutdowns, abnormal batches, and seasonality. | production calendar; maintenance and downtime logs; monthly completeness table |
| `dq_completeness` | process inventory | Account for reference output, crude feed, major aids, water, energy, co-products, waste, wastewater, and direct releases; document each excluded flow and demonstrate that it is immaterial to the intended use. | mass and energy balance; flow register; omission log; treatment receipts |
| `dq_representativeness` | foreground and linked upstream data | Report technological, geographical, and time-related representativeness and disclose all proxy datasets and mismatches. | dataset metadata; supplier and facility records; proxy and limitation statement; `ilcd-data-network-compliance-2010` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Verify exact flow UUID, Mass property UUID, Units of mass UUID, kg unit, botanical-source qualifier, refining route, and bulk plant-gate state. | `codex-cxs-210-1999` |
| `validate_reference_amount` | quantitative reference | Require exactly 1 kg net refined oil and exclude packaging or container mass. |  |
| `validate_route_coverage` | process boundary | Confirm that every operated refining step, onsite utility, material aid, residue, wastewater hand-off, and direct release is included or explicitly justified as excluded. | `ec-jrc-fdm-bref-2019`; `nucci-et-al-2014-sunflower-oil-lca` |
| `validate_mass_balance` | mass-bearing inventory | Recalculate the period mass balance on consistent wet/dry and concentration bases; any unexplained residual or forced closure is a finding requiring disclosure and correction. |  |
| `validate_no_double_counting` | utilities and upstream links | Reject simultaneous counting of purchased steam and the fuel used by an upstream steam dataset, or purchased crude oil and duplicated upstream extraction within the same foreground process. | `ghg-protocol-product-standard-2011` |
| `validate_allocation` | co-products and wastes | Confirm the allocation hierarchy, output economic status, factor period, and sensitivity disclosure; reject undocumented mass or economic allocation. | `ghg-protocol-product-standard-2011` |
| `validate_quality_state` | released reference product | Confirm the product is refined and meets the declared applicable food-grade identity and quality specification; reject crude, virgin, cold-pressed, off-spec, or packaged output as the reference product. | `codex-cxs-210-1999` |
| `validate_provisional_ranges` | reasoned-estimate ranges | Treat every `reasoned_estimate` range as a non-conformance screen only; do not substitute it for foreground data, and flag it for replacement before publication-critical use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate refinery dataset for bulk refined sunflower-seed and/or safflower-seed oil |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and translation review and with complete representativeness disclosure |
| allowed_use | Attributional product systems requiring bulk refined sunflower/safflower oil at plant gate; supplier or regional modelling when geography, route, period, blend share, and upstream links match |
| excluded_use | Agricultural seed production; crude-oil extraction; virgin or cold-pressed oil; packaged retail oil; unspecified generic vegetable oil; consequential substitution without a separate method; food-safety certification |
| required_metadata | facility geography; production period; botanical source and blend share; refining route; oleic grade where claimed; product specification; plant-gate bulk state; technology; allocation method; upstream dataset references; packaging exclusion |
| required_quality_disclosure | meter and scale coverage; temporal completeness; mass-balance residual; energy accounting method; wastewater and direct-emission coverage; co-product/waste classification; proxies; exclusions; provisional reasoned estimates; technological, geographical, and temporal representativeness |
| update_trigger | change in botanical blend, refining route, oleic grade, specification, facility or utility system, allocation basis, wastewater treatment, upstream crude-oil source, production period, or evidence sufficient to replace a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | FAO/WHO Codex Alimentarius, *Standard for Named Vegetable Oils*, CXS 210-1999, amended 2024 and republished with 2026 correction, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+210-1999%2FCXS_210e.pdf (retrieved 2026-08-10) | sunflower and safflower oil identity; human-consumption state; refined-oil quality and measurement context |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document in the Food, Drink and Milk Industries*, adopted December 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries (retrieved 2026-08-10) | official industrial food-processing scope for vegetable raw materials and the range of activities at installations |
| `nucci-et-al-2014-sunflower-oil-lca` | `literature` | Nucci, B.; Puccini, M.; Pelagagge, L.; Vitolo, S.; Nicolella, C. (2014), *Improving the environmental performance of vegetable oil processing through LCA*, Journal of Cleaner Production 64, 310–322, https://doi.org/10.1016/j.jclepro.2013.07.049; repository record https://hdl.handle.net/11568/236328 (retrieved 2026-08-10) | sunflower-oil processing and packaging scope; bleaching, steam production, wastewater treatment, water, energy, and bleaching-earth hotspot coverage |
| `ghg-protocol-product-standard-2011` | `standard` | WRI/WBCSD, *Product Life Cycle Accounting and Reporting Standard*, 2011, https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-10) | boundary completeness; allocation avoidance, physical allocation, and economic fallback hierarchy |
| `ilcd-data-network-compliance-2010` | `official_guidance` | European Commission Joint Research Centre, *ILCD Data Network: Compliance rules and entry-level requirements*, Version 1, 2010, https://publications.jrc.ec.europa.eu/repository/bitstream/JRC58193/ilcd-data-network_compliance-entry-level_version1_march2010_f_isbn_fin.pdf (retrieved 2026-08-10) | technological, geographical, and temporal representativeness; modelling and allocation disclosure |
