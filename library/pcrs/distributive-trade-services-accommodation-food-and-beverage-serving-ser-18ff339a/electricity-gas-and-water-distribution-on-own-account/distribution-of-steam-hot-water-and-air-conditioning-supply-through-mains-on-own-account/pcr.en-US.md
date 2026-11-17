---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Own-account closed-loop district hot-water heating distribution service

## 1. Scope and Applicability

Foreground exchange methodology for the declared own-account water-only heating network. One flow means one specified measurable object with one primary property/unit; a delivered complete pump, defined insulated pipe or characterized waste carrier may be one flow. The original product, service gates and accepted 1 MJ reference are unchanged. Inventory includes actual network operation, supplied network assets and actual onsite installation/maintenance exchanges; supplier manufacture/delivery chains and off-site receiver treatment internals are background. Historical UUID evidence is reused only for the exact AC point-use role; unbound identities remain completion conditions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account |
| classification_refs | CPC 3.0 69220; candidate methodology; narrower semantic classification relation reviewed separately |
| covered_products | Own-account closed-loop liquid-water heating distribution with undosed purchased demineralized makeup, specified delivered network assets and actual onsite work inputs |
| excluded_products | Steam; chilled water; cooled air; glycol or chemical dosing; heat production; sale of water; fee/contract distribution |
| representative_product | 1 MJ accepted hot-water heating distribution service at identified customer supply/return gates |
| production_route | Source-gate heat transfer, insulated closed supply/return mains, circulation pumping, customer-gate heat exchange and acceptance |
| market_state | Energy-throughput service at contract-declared delivery temperature/pressure and returned-water conditions; not thermal commodity supply |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Own-account hot-water heating distribution service |
| How much | 1 MJ accepted useful heating energy at customer gate |
| How well | Contract-specific matched supply/return temperatures, pressures, water quality, meter validity and acceptance; declare all without default values |
| How long or cycle | One declared complete reporting cohort including heating, standby and reconciled opening/closing thermal and water inventories |
| reference_flow_link | heat_distribution_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Own-account distribution service for accepted hot-water heating energy at declared customer gates |
| Reference flow property | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` |
| Reference unit | MJ |
| Required qualifiers | operator and zone; source/customer gate and meter IDs; water-only undosed route; source heat commodity boundary; supply/return measured state and acceptance conditions; reporting cohort and stocks; auxiliary duty split; foreground asset/site-work boundary; rejection/loss and physical receiving fates; uncertainty and unresolved identity status |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_energy | reference product | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The 1 MJ basis is accepted useful customer heat throughput, not water mass, fuel heating value or source heat input. Measure Q by heat_meter; all exchanges use per reference flow with collection totals divided by Q exactly once. |
| mass_energy_separation | all inventory rows | Energy and Mass | MJ; kg | Carrier water kg and heat MJ are different quantities. Use paired-gate mass/enthalpy records to obtain heat, state-matched density for volume-to-mass, specified delivered asset allocation under asset_service and 3.6 MJ/kWh for electricity. No unitless count can replace time or physical activity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Heat supplied after production at source-to-network paired supply/return meters, with identified source technology, state and upstream heat dataset |
| starting_condition_role | Upstream heat commodity boundary; consumer adds useful source commodity from the source-contribution ledger and this service charges verified source loss/rejection shares |
| product_classification_scope | CPC 69220 narrower water-only route, not an accepted whole-leaf mapping |
| recursive_input_rule | Do not recursively buy this network service; consolidate internal transfers and require an upstream heat dataset ending before the declared network |
| upstream_dataset_requirement | Incremental heat commodity at declared source gate; point-use electricity; delivered demineralized water; background supplies of accepted specified equipment/materials; waste backgrounds may link separately from actual handover without duplicating onsite exchanges |
| disclosure | Operating and asset/material acceptance gates, onsite tasks, ownership, period, supplier inclusions, single primary property/unit, stocks and thermal-origin carry, rejected/lost delivery, actual waste handover and first environment interface, evidence gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all inventory rows | Apply only to own-account distribution of chemically undosed liquid-water heating through a declared closed supply/return mains network with specified delivered network asset inputs. Exclude steam, chilled water, cooled air, chemically dosed/glycol networks, heat production and fee/contract distribution under CPC 86340; these routes are not equivalent per MJ. | `un-cpc-69220` |
| `boundary_gates` | distribution_network | Start at source-to-network paired supply/return heat meters after heat production. End at the operator/customer paired supply/return heat-exchange meters and contractual acceptance gate. Include operator pipes, pumps, controls, stations, losses, makeup and drainage; exclude customer internal heating after that gate. Record owner, geography, stations, meter positions, configuration and period before collection. |  |
| `commodity_complement` | replacement_heat; heat_distribution_service | The consuming model must add Q_source_accepted / Q MJ of useful source heat commodity separately, using the matching upstream datasets by interval and opening-stock origin; this need not be 1 MJ because accounted electrical heat can contribute useful delivery. This service inventories only additional Q_source_extra / Q source commodity and all auxiliary electricity. Do not combine with delivered heat already containing this network or its loss replacement. Consolidate internal zone transfers and do not recursively purchase this service. | |
| `foreground_scope` | all inventory rows | Foreground starts at supplied-asset/material acceptance and the source-to-network paired heat-meter gate, includes owned water-loop operation and actual onsite installation/maintenance, and ends at customer acceptance, actual environmental release or signed waste/return handover. Supplier manufacture, mining, upstream delivery transport, supporting vehicle/road/tool capital and off-site waste-receiver processing are background; no paired receiver input or assumed post-handover release belongs here. Actual onsite treatment, if present, requires a precisely described process and its actual exchanges before a complete dataset, never inferred from an off-site receiver. |  |
| `contract_overlap` | all inventory rows | Retain a few specific delivered pipe/equipment inputs plus independently supplied site materials at their acceptance gates. Record one primary quantity/unit, exact specifications, included installation/drive/sensors/initial fluids and accepted quantity. If a supply includes a component, power, water, delivery or maintenance, do not also buy the same included exchange; separately metered onsite work beyond that supply gate is included once. No generic lifecycle service and no constituent/supplier-process decomposition of a complete purchased object. Dry equipment and separately supplied initial fill are explicit here; any actual wet-supply deviation must reconcile included water before use. |  |
| `waste_fate` | drained_water; site_work; water_to_soil; water_to_freshwater | Waste carrier inventory ends at actual documented site handover, with quantities limited to actual handover allocated to the original responsible cohort; generated-but-unhanded-over mass stays measured site-stock QA, not a handover exchange; no off-site treatment reagents/energy/emissions are foreground. Record whole carrier once, composition and residual thermal energy as metadata; do not also emit its contained constituents or heat at that handover. Direct releases use the first actual operator-to-environment interface, separately by substance/medium; soil and freshwater shares are mutually exclusive per parcel. Later environmental migration or receiver discharge is not another network release. Unknown handover identity or actual route blocks complete foreground evidence, not a reason to invent receiver processes. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| distribution_network | Closed-loop district hot-water network operation | required | declared undosed-water operation and accepted gates | distribution-only service | heat_distribution_service |
| site_work | Foreground delivered assets and onsite installation/maintenance | required | actual delivered assets retained; each onsite task requires occurrence or inspected absence | delivered inputs, onsite resources and actual waste handover/releases | heat_distribution_service |

### Process: Closed-loop district hot-water network operation (`distribution_network`)

#### Inputs

##### Product flows

###### Incremental heat commodity (`replacement_heat`)

Only the additional heat commodity required by irreversible rejected delivery and network losses crosses this service burden boundary. Accepted useful heat is a separately purchased commodity, not this service exchange.

- Selected flow: Heat supplied at declared source-to-network gate for rejected delivery and network losses
- Flow property / unit: Energy / MJ
- Amount rule: Q_source_extra / Q MJ; source-heat share attributed to irreversible rejected delivery and losses, including carried source burdens; exclude accepted useful source heat and closing stock.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_heat`
- Sources: `oiml-heat-meters-2002`

###### Pumping and controls electricity (`aux_electricity`)

Electricity at the point of use for circulation pumps, controls, metering and operator heat-exchange stations within the declared network. Supply mix and voltage must be documented separately.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / kWh
- Amount rule: E_attributed / Q kWh; measured pumping and control electricity after causal attribution and removal of supplier-gate/stage overlap.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources:

###### Makeup water (`makeup_water`)

Purchased chemically undosed demineralized water supply consumed from operational replacement stocks under the declared batch ledger. Actual receipts, working-fluid initial fill and remaining stock are separately measured; initial-fill supply is included in asset provision. This is a product input, not direct environmental abstraction.

- Selected flow: Purchased demineralized water for closed-loop network makeup
- Flow property / unit: Mass / kg
- Amount rule: m_makeup_attributed / Q kg; operational-replacement water actually withdrawn from batch stock in this cohort under declared FIFO accounting, with original supplier burden; do not duplicate initial fill or unwithdrawn stock.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Product flows

###### Reference distribution service (`heat_distribution_service`)

A service quantified by accepted useful heat delivered across the declared customer-side supply/return heat-exchange pair. Circulating water remains a carrier; service is neither heat production nor a sale of water.

- Selected flow: Own-account distribution service for accepted hot-water heating energy at declared customer gates
- Flow property / unit: Net calorific value / MJ
- Amount rule: 1 MJ
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_heat`
- Sources: `oiml-heat-meters-2002`

##### Waste flows

###### Drainage to treatment (`drained_water`)

One liquid waste stream is weighed or metered at the network drain to the declared treatment receiver. Record its entire carrier mass and chemical composition; the foreground ends at the documented waste handover, without receiver-treatment internals.

- Selected flow: Spent hot-water network drainage sent to licensed wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: m_drain_handover_attributed / Q kg; actual signed-handover quantity of the original responsible cohort only; pending stock and raw generation are separate QA.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

##### Elementary flows

###### Water leakage to soil (`water_to_soil`)

Water constituent of a physically released leak to soil; this is not an environmental resource input and is not wastewater sent to treatment. Dissolved species require their own elementary cards when present.

- Selected flow: Water, liquid, released from network to soil
- Flow property / unit: Mass / kg
- Amount rule: m_water_soil / Q kg; water constituent reaching soil; partition total leaked solution once by composition and destination.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

###### Water leakage to freshwater (`water_to_freshwater`)

Water constituent actually reaching a named freshwater receiving body, separately from sewer drainage and soil leakage. A route is absent only with investigated evidence.

- Selected flow: Water, liquid, released from network to freshwater
- Flow property / unit: Mass / kg
- Amount rule: m_water_freshwater / Q kg; water constituent reaching the identified freshwater body, distinct from drainage sent to treatment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

###### Waste heat to air (`heat_to_air`)

Irreversible heat transferred to air from exposed equipment or rejected customer energy; identify the physical receiver and source event. No combustion emissions are implied by this heat transfer. Apply heat_fates to the disjoint event ledger before normalization.

- Selected flow: Heat, waste, emitted to air from the hot-water network
- Flow property / unit: Energy / MJ
- Amount rule: Q_air / Q MJ; measured non-carrier heat transfer to air, including attributable outside-fluid electrical dissipation once, with no canonical carrier-enthalpy output.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_heat`
- Sources:

###### Waste heat to soil (`heat_to_soil`)

Heat transferred through buried pipe surfaces plus the excess thermal load of directly leaked liquid water relative to the undisturbed receiving soil temperature under carrier_release_heat. Record each event once, separately from water mass and from carrier enthalpy used in heat_balance.

- Selected flow: Heat, waste, emitted to soil from the hot-water network
- Flow property / unit: Energy / MJ
- Amount rule: Q_soil / Q MJ; measured non-carrier heat transfer plus receiver-relative excess thermal load, never total carrier enthalpy. Pipe transfer and leaked-water events must not overlap.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_heat`
- Sources:

###### Waste heat to freshwater (`heat_to_freshwater`)

Excess thermal load crossing directly into a named freshwater body with leaked liquid water, relative to the measured undisturbed receiving water state under carrier_release_heat. This load is not the water's total canonical enthalpy or a prediction of immediate mixing temperature. Waste-carried energy stays handover metadata, outside direct network releases.

- Selected flow: Heat, waste, emitted to freshwater from the hot-water network
- Flow property / unit: Energy / MJ
- Amount rule: Q_freshwater / Q MJ; use measured receiver-relative excess thermal load, never total canonical carrier enthalpy.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_heat`
- Sources:

### Process: Foreground delivered assets and onsite installation/maintenance (`site_work`)

#### Inputs

##### Product flows

###### Specified pre-insulated district-hot-water pipe segment (`asset_insulated_pipe`)

Actual delivered segment includes carrier pipe, factory insulation, jacket and declared alarm wire; record bore/wall, insulation/jacket specification and delivery acceptance. Preferred exchange quantity is accepted axial length only, never a sum of constituent masses or installed trench length twice. Supplier manufacture and delivery to the declared site gate are background.

- Selected flow: Specified pre-insulated district-hot-water pipe segment
- Flow property / unit: Length / m
- Amount rule: asset_insulated_pipe_attributed / Q m; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Specified complete electric circulation-pump unit (`asset_circulation_pump`)

One dry delivered pump with its identified motor and included base/drive configuration, counted at signed site acceptance. Record model, hydraulic duty, motor rating, included drive and serial ID; exclude separately procured control unit and initial water. No motor steel/copper or supplier factory resources recur as foreground inputs.

- Selected flow: Specified complete electric circulation-pump unit
- Flow property / unit: Count / item
- Amount rule: asset_circulation_pump_attributed / Q item; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Specified complete hot-water heat-exchanger unit (`asset_heat_exchanger`)

One dry delivered exchanger with named plate/tube configuration, duty, pressure and acceptance; no embedded working water. Included supports do not also enter concrete/steel cards; independently procured foundations remain distinct.

- Selected flow: Specified complete hot-water heat-exchanger unit
- Flow property / unit: Count / item
- Amount rule: asset_heat_exchanger_attributed / Q item; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Specified complete district-heating isolation-valve unit (`asset_isolation_valve`)

One individually specified valve by model, diameter, pressure and actuator inclusions at site receipt; not an undefined fitting set and no repeat purchase of a valve included in a supplied pump/exchanger.

- Selected flow: Specified complete district-heating isolation-valve unit
- Flow property / unit: Count / item
- Amount rule: asset_isolation_valve_attributed / Q item; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Specified network pump-control cabinet (`asset_control_unit`)

One complete accepted cabinet by model, electrical architecture and serial identity; count only separately procured cabinet, never a drive/control already included in another unit.

- Selected flow: Specified network pump-control cabinet
- Flow property / unit: Count / item
- Amount rule: asset_control_unit_attributed / Q item; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Specified matched supply-return heat-metering instrument pair (`asset_heat_meter_pair`)

One accepted matched measurement object includes identified flow sensor, paired temperature sensors and calculator under one calibration/acceptance specification; count instrument pairs, not each sensor again. Record range, pairing, software/property method and calibration validity.

- Selected flow: Specified matched supply-return heat-metering instrument pair
- Flow property / unit: Count / item
- Amount rule: asset_heat_meter_pair_attributed / Q item; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Specified dry network expansion-vessel unit (`asset_expansion_vessel`)

One dry delivered vessel by pressure, volume, liner and acceptance; no initial working-water supply included. Actual unrelated pressure-gas fills require a precise separate exchange when they cross the foreground gate.

- Selected flow: Specified dry network expansion-vessel unit
- Flow property / unit: Count / item
- Amount rule: asset_expansion_vessel_attributed / Q item; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Purchased demineralized water for commissioned initial fill (`initial_fill_water`)

Measured supplied commissioning water is a separate physical input because all retained equipment is specified dry. Attribute its actual initial-fill quantity once with its original network asset fraction and final original-cohort corrections under asset_service; keep batch identity, actual injection state and FIFO distinction from operational makeup. If a real equipment contract includes this water, remove that included mass from this separate purchase with receipt evidence, not by assumption.

- Selected flow: Purchased demineralized water for commissioned initial fill
- Flow property / unit: Mass / kg
- Amount rule: initial_fill_water_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources:

###### Ready-mixed foundation concrete, specified grade (`site_concrete`)

Actual separately purchased concrete at site delivery, excluding reinforcing steel; recipe and supplier production remain background, no duplicate included equipment base.

- Selected flow: Ready-mixed foundation concrete, specified grade
- Flow property / unit: Mass / kg
- Amount rule: site_concrete_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Specified reinforcing-steel product (`site_rebar`)

Actual independently procured reinforcement at site gate; not steel already inside delivered equipment or reinforced precast products.

- Selected flow: Specified reinforcing-steel product
- Flow property / unit: Mass / kg
- Amount rule: site_rebar_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Specified crushed-stone trench bedding (`site_bedding`)

Actual separate bedding delivered to the worksite; no road-supplier capital or stone already contained in purchased concrete/asphalt.

- Selected flow: Specified crushed-stone trench bedding
- Flow property / unit: Mass / kg
- Amount rule: site_bedding_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Specified asphalt reinstatement mixture (`site_asphalt`)

Actual separately supplied road-reinstatement mix at the site gate; one whole specified mixture mass, no ingredient decomposition.

- Selected flow: Specified asphalt reinstatement mixture
- Flow property / unit: Mass / kg
- Amount rule: site_asphalt_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Alternating current (`site_electricity`)

Separately metered external grid electricity for actual on-site installation, isolated cleaning and repair work only, after the equipment delivery gate. Exclude operating pumps/controls already in aux_electricity and any supplier-included installation power. Electricity locally produced and used onsite is an internal memorandum: cancel it, retain actual site fuel and emissions once, never net unrelated exports against grid import.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / kWh
- Amount rule: site_electricity_attributed / Q kWh; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Specified diesel fuel for on-site construction and repair machinery (`site_diesel`)

Conditional on logged actual site machinery/generator use: weighed fuel withdrawals corrected for tank stock/returns, with composition, biogenic fraction and state-matched density if volumetric readings are converted. This is onsite task fuel, not heat production at the network source gate or supplier delivery/long-haul transport. Inspect task/machine logs to prove occurrence or absence.

- Selected flow: Specified diesel fuel for on-site construction and repair machinery
- Flow property / unit: Mass / kg
- Amount rule: site_diesel_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Supplied water for isolated equipment cleaning and hydrotest (`site_cleaning_water`)

Conditional measured whole supplied-water mass for isolated work before reconnection, separated from initial_fill_water and makeup_water. Record activity, quality, stock and later wastewater handover. No cleaning chemical may enter the undosed operating loop; an actually used independently purchased chemical needs a precise additional card before completeness.

- Selected flow: Supplied water for isolated equipment cleaning and hydrotest
- Flow property / unit: Mass / kg
- Amount rule: site_cleaning_water_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Specified mineral lubricating oil (`site_lubricating_oil`)

Actual separately withdrawn site pump-bearing/gear oil, as whole defined product mass, corrected for supply stock/returns. Do not repurchase a factory fill already inside accepted equipment. This oil is outside the operating carrier water.

- Selected flow: Specified mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: site_lubricating_oil_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

###### Specified lubricating grease formulation (`site_grease`)

Actual separately purchased site-maintenance grease as one formulation mass, outside carrier water. Do not also buy its oil/thickener constituents or repeat supplier-included lubrication.

- Selected flow: Specified lubricating grease formulation
- Flow property / unit: Mass / kg
- Amount rule: site_grease_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_work`
- Sources:

#### Outputs

##### Waste flows

###### Removed insulated pipe segment, composition documented (`site_removed_pipe`)

One actual measured waste carrier at the signed site-to-receiver handover; pipe/foam/jacket constituents are composition metadata, not separate waste masses unless really separated. Supplier/receiver processing is outside foreground.

- Selected flow: Removed insulated pipe segment, composition documented
- Flow property / unit: Mass / kg
- Amount rule: site_removed_pipe_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_waste`
- Sources:

###### Drained removed circulation-pump unit (`site_removed_pump`)

Weighed complete removed pump, drained-fluid handover recorded separately; the metal/insulation mixture can be one specified waste carrier. Accepted reusable pump is a returned product, not automatically waste; maintain separate receipt status and do not count both.

- Selected flow: Drained removed circulation-pump unit
- Flow property / unit: Mass / kg
- Amount rule: site_removed_pump_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_waste`
- Sources:

###### Removed network control cabinet, residual contents documented (`site_removed_control`)

One weighed cabinet waste at site handover, with model, residual batteries/fluids and receiver documented. No hypothetical lead/acid/copper streams or receiver emissions; actual separately removed contents need their own specific card.

- Selected flow: Removed network control cabinet, residual contents documented
- Flow property / unit: Mass / kg
- Amount rule: site_removed_control_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_waste`
- Sources:

###### Spent site mineral lubricating oil (`site_spent_oil`)

Actual whole oil carrier handed over at the named gate; measured composition, stocks and receiver. Contained substances are not also direct emissions before handover.

- Selected flow: Spent site mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: site_spent_oil_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_waste`
- Sources:

###### Isolated equipment-cleaning wastewater, composition documented (`site_washwater`)

Whole actual liquid carrier from cleaning/hydrotest at waste handover; distinguish operating-network drained_water by event. Retain residual sensible heat at the same datum as metadata, no assumed off-site environmental heat release.

- Selected flow: Isolated equipment-cleaning wastewater, composition documented
- Flow property / unit: Mass / kg
- Amount rule: site_washwater_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_waste`
- Sources:

###### Concrete demolition rubble with measured residual steel (`site_demolition_rubble`)

Actual single characterized rubble carrier handed over at site; only really separated steel can be a distinct stream, never a second count of steel remaining inside this carrier.

- Selected flow: Concrete demolition rubble with measured residual steel
- Flow property / unit: Mass / kg
- Amount rule: site_demolition_rubble_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_waste`
- Sources:

###### Excavated soil with documented moisture and contamination (`site_excavated_soil`)

Actual waste crossing site handover after measured onsite reuse. Internal backfill cancels as memorandum and is not both removed waste and newly purchased bedding.

- Selected flow: Excavated soil with documented moisture and contamination
- Flow property / unit: Mass / kg
- Amount rule: site_excavated_soil_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, from site tasks to air (`site_air_co2_fossil`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Carbon dioxide, fossil, from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_co2_fossil_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Carbon dioxide, biogenic, from site tasks to air (`site_air_co2_biogenic`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Carbon dioxide, biogenic, from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_co2_biogenic_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Carbon monoxide from site tasks to air (`site_air_co`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Carbon monoxide from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_co_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Methane from site tasks to air (`site_air_ch4`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Methane from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_ch4_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Nitrous oxide from site tasks to air (`site_air_n2o`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Nitrous oxide from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_n2o_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Nitric oxide from site tasks to air (`site_air_no`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Nitric oxide from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_no_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Nitrogen dioxide from site tasks to air (`site_air_no2`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Nitrogen dioxide from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_no2_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Sulfur dioxide from site tasks to air (`site_air_so2`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Sulfur dioxide from site tasks to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_so2_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Site particulate matter, aerodynamic diameter <= 2.5 micrometres, to air (`site_air_pm25`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Site particulate matter, aerodynamic diameter <= 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_pm25_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

###### Site particulate matter, aerodynamic diameter > 2.5 and <= 10 micrometres, to air (`site_air_pmcoarse`)

Unknown factor is a gap, never zero. Apply `inv_site_emissions` in section 8.

- Selected flow: Site particulate matter, aerodynamic diameter > 2.5 and <= 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: site_air_pmcoarse_attributed / Q kg; measured attributed total in this primary unit, divided by the same-cohort accepted Q once.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_site_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | all inventory rows | Separate unrelated supply zones, heating/cooling services and heat production using direct submeters and asset ownership records first. Attribute dedicated inputs directly. For inseparable network burdens serving accepted hot-water heating only, use that network cohort total divided by accepted Q; rejected delivery and technical losses remain burdens of the accepted service and receive no reference output or credit. |  |
| `shared_assets` | all inventory rows | Subdivide actual tasks and direct submeter/issue records first. For shared onsite grid electricity without adequate task submeters, use verified device operating/standby power times actual hours in each state: W_b = sum_device,state(P_verified_kW * h_actual_b), s_b = W_b / sum_all_beneficiaries(W_b); attribute the measured common-meter kWh by s_b once and reconcile the complete load/state schedule to that meter, including standby and all beneficiaries. Use measured/validated actual-state power, not unverified nameplate assumptions. For shared recurring materials and onsite work, use the same source work order service-attributable actual personnel hours divided by actual personnel hours of all beneficiaries of that work order; record role/task and complete denominator. Shared recurring site releases inherit exactly the allocation of their measured source material/fuel/task, using that work-order personnel-hour fraction when the source is not directly subdivided; never apply an additional emission share. Operating pumps use actual branch electricity submeters first; only without them allocate by measured branch hydraulic energy divided by the all-branch hydraulic-energy total over the same reconciled interval. Keep cp_pump independent calorimetry unchanged, include starts/stops/standby in the complete reporting intervals, and withhold completion if a required denominator is zero/unknown or a common standby burden cannot be assigned by this positive measured interval basis. No later choice between these drivers. One-off capital site events use only their original asset_service alpha once: quantities already attributed by alpha or direct task subdivision receive no extra personnel-hour, electricity or beneficiary multiplier. | |
| `stock_cohort` | all inventory rows | Measure opening/closing thermal and water stocks. Assign stored heat and water burdens to the cohort that later consumes or releases them, with an explicit carry ledger; do not charge current accepted service for stock additions or credit it for opening stock without carrying corresponding upstream burdens. Internally reworked or recirculated heat earns no second reference service; account once at its final accepted gate or final rejected fate. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_heat | distribution_network | heat quantity, acceptance and physical heat fate | meter and acceptance records | interval timestamp; source/customer meter ID; mass or volume; matched supply/return temperature and pressure; water composition; enthalpy/property-method version; accepted/rejected flag and reason; Q_in; Q; Q_reject; delta_U; heat-fate records; actual W_to_fluid and out-of-circuit electrical dissipation; signed G_ambient; Q_carrier_loss; opening electrical/source provenance ledger; U_open, U_close and U_open_source; pool thermal datum; interval source/electrical/carrier origin shares and uncertainty; fixed h0 and reference state; measured makeup/initial-fill temperature/pressure/composition; H_carrier_in; internal-energy property method and raw mass/state; gate kinetic/potential and storage proof; IAPWS-95 triple-point reference identity; property implementation/version; raw h and u; C_j; canonical h_c and u_c; reference conversion and composition-applicability evidence; chronological origin reconstruction; previous datum and versioned original-cohort amendments; nonzero-offset invariance test and numerical tolerance For each direct liquid-release event: parcel ID and mass; first-interface medium; simultaneous outlet and undisturbed receiver temperatures; interface pressure; composition and liquid-phase evidence; raw and canonical water enthalpies at both states; H_out; H_receiver_base; E_excess; uncertainty and event reconciliation; direct-transfer metering/model and non-overlap ledger. | Read calibrated paired heat meters at both gates over synchronized intervals; retain raw readings and validated calculator method, signed acceptance and bypass/rejection logs. Derive receiver-specific heat transfer from meter/model reconciliation, declare ground/air/water receiver and thermal reference state; investigate residuals. Apply thermal_reference and thermal_reference_history before aggregation; preserve raw and converted properties, the common h/u offset and reconstructed historical origins. Validate the nonzero-offset test in validate_thermal_reference and retain its calculation records. Measure outlet temperature at the operator/environment interface and background freshwater upstream/outside the plume at matching depth/time; for soil use an unaffected adjacent control at the same depth with representative moisture/thermal conditions. Log continuously through a release or use a documented representative event sampling design with propagated uncertainty; resolve changes before aggregation. Use calibrated temperature/pressure and mass/flow instruments, actual water-property evaluation, named operator responsibility and retained raw logs. Unrepresentative or missing receiver measurements leave the release incomplete. Apply carrier_release_heat and validate_heat_release; do not adopt a default ambient temperature or heat capacity. | MJ; kg; m3; degC; Pa; kJ/kg | each meter interval and every rejection event | one declared full reporting period covering heating/standby and matched opening/closing stocks | source/customer gates and all owned network zones | per reference flow | calibration certificates; time synchronization; enthalpy method validation; acceptance signatures; uncertainty and balance reconciliation; validate_thermal_reference |
| cp_energy | distribution_network | auxiliary electricity | meter record | meter ID; opening/closing kWh; interval; pump/control assignment; shared-function duty; supplier-gate/stage register; W_to_fluid; current electrical-heat closing carry; drawdown of historical electrical heat and its original-cohort electricity burden  ; branch electricity-submeter coverage; same-interval measured hydraulic energy for each branch and all-branch total; start/stop/standby coverage; denominator and applicability gap| Read calibrated electricity submeters and reconcile to invoices; subtract only evidenced non-network functions or supplier-gate/stage overlap, never heat production by guesswork.  For branch allocation use actual electricity submeters first; only if absent use same-interval measured hydraulic-energy shares; never choose another driver when the denominator is zero/unknown.| kWh | each electricity interval; monthly reconciliation | same period as cp_heat | all network pumps, controls, meters and owned stations | per reference flow | meter calibration; invoice cross-check; causal share worksheet; no overlap |
| cp_water | distribution_network | makeup, drainage, leaked water and constituents | mass meter, tank stock and event record | supplier and actual waste-handover receiver; demineralized undosed state; batch masses; density and conditions for volume conversion; opening/closing network and waste stocks; drainage generated/dispatched; leak location/duration/rate; receiver medium; water fraction and dissolved species; custody notes  ; original batch receipt timestamp and immutable ID; initial-fill/operational/returnable-stock class; S_open_b, I_b, R_supplier_b, D_b, L_b, S_close_b by batch; original supplier burden and frozen allocations; actual retirement FIFO withdrawal/supplier return and final positive-Q amendment; separate supplier-receipt and actual thermal-circuit injection mass/state/time and intervening conditioning screen ; immutable event ID, released parcel/share and first operator-to-environment interface with soil/freshwater receiver evidence; subsequent migration separately marked environmental fate; initial-origin versus operational-origin retirement carrier; source-specific prior water-supply/waste postings and original Q_k; capital initial-fill final w and correction links;; custody_lot_id; custody_pool_id; O; G; T_in; C; H; T_out; L; epsilon; movement_endpoints; loss_event_ID; loss_time_location; loss_evidence_method; first_medium; release_row_id; propagated_uncertainty | Use calibrated makeup/drain meters or weighed tanks and leak investigation logs; measure composition by representative samples and documented methods; trace generated drainage batch to signed foreground handover even if handed over later. Determine zero events by inspections, work orders and meter reconciliation, not an empty cell. Apply the explicit makeup_allocation FIFO convention to batch withdrawals and unallocated supply burdens, checking initial fill against initial_fill_water physical inventory. Keep physical FIFO mass QA separate from supply/waste attribution. Initial-fill and initial-origin capital handover use asset_service final shares and source-specific original-cohort corrections; operational water retains its original FIFO responsibility without another capital fraction. For custody_mass_balance and custody_loss_link, retain calibrated event/stock measurements, matched composition/density and original lot; investigate each loss or residual at the actual location, link its release row and paired movements, and reconcile monthly and at interval end. Record absence only with dated inspection/measurement coverage; unknown is not zero. | kg; m3; kg/m3; mass fraction | each batch/drain/leak event; monthly stock reconciliation; each loss event and stock movement | same generation cohort as accepted Q plus documented later waste handover | whole closed loop, drains, tanks, waste handover and actual first receiving media | per reference flow | calibration; certificates of analysis; stock balance; receiver and handover receipt; unknown-fate register |
| cp_pump | distribution_network | independent pump energy delivered to fluid | synchronized pump control-volume, shaft and external-calorimetry record | module/meter ID; calibration; interval time; inlet/outlet massflow, temperature, pressure, enthalpy, diameter, velocity and elevation; motor/drive supply; torque/speed; casing/motor/drive outward heat flux; actual load/speed/temperature loss map; opening/closing fluid/dry-module mass, thermal state and storage; uncertainty; other-energy and external-mechanical-work screening  ; heat-flux integration surface area m2 and elapsed seconds; state-matched measured or traceable property density kg/m3; original rotational-speed unit and single conversion record| Instrument every pump with independent calibrated massflow, paired temperature/pressure, supply and heat-flux meters; use validated water properties for inlet/outlet enthalpy flux and kinetic/potential corrections, independently reconciling electrical supply minus outside-fluid losses and storage; validate loss maps at actual conditions including starts/stops/standby, never substitute the whole-network residual or nameplate efficiency | kg/s; degC; Pa; kJ/kg; kg/m3; m/s; m; m2; s; kWh; MJ; N*m; rad/s; W/m2 | each synchronized pumping interval and start/stop event; monthly independent energy reconciliation; aggregate to measured comparable dry-module boundary thermal states | same period as cp_heat including module opening/closing states | every declared network electric pump/drive module, without heat exchangers or other energy sources in that control volume | per reference flow | flow/state/supply/heat-flux calibration; complete raw records; calorimetry/loss-map validation; shaft/hydraulic checks; 0 <= W_to_fluid <= E_pump_MJ and combined-uncertainty reconciliation |
| cp_assets | site_work | specified delivered assets and initial fill | site measurement, handover and task record | original asset/configuration key; supplier and site receipt gate; model and serial; pipe axial length; counted-object definition; accepted item count; delivered inclusions and dry/wet status; initial-fill batch kg; commissioning/date; rated capacity and measured beneficiary duty; actual availability hours; all-beneficiary lifetime capacity-hours and engineering evidence; frozen prior quantities/fractions; remaining quantity; revision/retirement true-up; Q; revision date/version; original beneficiary-period cohort IDs and positive Q_k; F_prev_all; u_current; U_remaining_all; actual lifetime u_actual_k for every beneficiary; source quantity ID/q_a,s; source-specific F_booked_a,s,k; w_a,k; signed delta_a,s,k; original-record and correction links; ; source-specific B/version and original N fields in cp_capital_amendment | At site delivery/commissioning reconcile signed receipts and actual specifications with measured length, verified counts and weighed initial fill; one primary property/unit per row and no duplicate included components/water. At each life/utilization revision preserve prior postings and verify all remaining capacity-hour drivers under asset_service. At final retirement collect every original beneficiary-period actual capacity-hour record and original Q_k; calculate final w, source-specific booked fractions and signed corrections for assets, initial fill, observed capital events and actual handover carriers. Newly observed source quantities have zero prior booked shares where unposted. Archive governed original-cohort amendments without changing raw physical measurements or charging the final cohort wholesale. Missing/nonpositive denominators or unsupported prior records block unit-reference results; no assumed life, capacity or current-Q fallback. No supplier BOM or nested capital collection. Complete cp_capital_amendment reconciliation for final settlement and source/denominator revisions. | m; item; kg; capacity*h; h | each receipt/task; each life/utilization revision; monthly reconciliation; annual review; final retirement and actual handover | declared service reporting cohort and evidenced original-asset use history; actual later handover retains the original responsible cohort and its allocation | declared network site, equipment acceptance and actual waste handover gates | per reference flow | calibration, signed receipts/work orders, specification/inclusion checks, stock/causal-share ledger, gaps and uncertainty evidence |
| cp_capital_amendment | site_work | original-asset sources and their one-time capital-event components; excludes recurring operating components | versioned_original_source_and_cohort_ledger | asset_ID; source_ID and original row_ID/native unit; original acceptance/event gate; full measured source quantity and old/new versions; measurement/calibration/state basis; each original beneficiary-period/driver unit/u_actual; period b where applicable; all past/future beneficiaries; F_prev_all and remaining_driver; accepted g/F_booked; raw booked B; old normalized result/original N and corrected N; background model versions/scope; actual final retirement evidence; A_new/delta_A/replacement/deduplication links | Collect original records at asset/supplier acceptance, actual site events and receiver handover gates as applicable; verify full quantities through the existing cp_assets weighing/configuration-count/length/driver measurement and calibration methods. At every source/life/model/denominator revision and final retirement, compare old/new records for every original cohort and apply capital_source_amendment. Reconcile all-beneficiary fractions, source totals and each amendment link; the service data custodian reviews and signs the reconciliation. Prove nonoccurrence by complete event registers/zero-activity evidence, never absence-as-zero; retain unresolved identities, measurement uncertainty and incomplete causes. | source-native units; fixed driver units; original reference units | each acceptance/event/revision/final retirement; annual reconciliation | complete original asset history and original service cohorts; evidenced remaining life | existing foreground gates and capital-source responsibility only | once per original reference flow | raw measurement/calibration; signed acceptance/event/receiver records; source/model versions; all-beneficiary and revision reconciliation ledger |
| cp_site_work | site_work | actual onsite inputs and work tasks | site measurement, handover and task record | site and task ID; dates and installation/repair/isolated-conditioning purpose; equipment acceptance inclusion matrix; original network/asset/cohort; primary-unit receipts and withdrawals; opening/closing site stocks; supplier return; accepted/rejected/returned status; meter opening/closing kWh; generator internal memorandum; fuel kg and density/state/composition; supplied water kg and injection state; oil/grease formulation; calibration; causal duty share; linked waste event; Q  ; direct task submeter/issue; verified device operating/standby power kW and verification; actual state hours per beneficiary; same-interval common-meter kWh and complete load reconciliation; source work-order ID; actual service personnel hours; all-beneficiary actual personnel-hours denominator and roles; source-release inherited share; original asset alpha; already-attributed marker; source quantity ID and source-specific booked fractions; original cohort Q_k; final actual asset w and signed correction links; | Read calibrated task submeters/weighing and site work orders for every actual task, reconcile monthly to invoices/stocks, then attribute once under site_activity and asset_service. Dedicated recurring tasks direct, shared tasks causal, capital installation original-asset fraction. Mark conditional absence only with reviewed machine logs/work orders and inspection; unknown quantities or unlisted actual identities block completeness. Record only work inside the foreground after the defined supply gate, no external delivery/factory/receiver internals.  Enforce the fixed shared_assets object-specific driver order, collect all-beneficiary denominators and reject a second multiplier on already-attributed quantities. For capital events retain source-specific previous postings and apply asset_service final w/corrections to original Q_k; never reweight already attributed quantities or put the residual into the event-year result. | kg; kWh; MJ; h | each receipt batch/actual task event; monthly reconciliation; asset-scope change and annual review | declared service reporting cohort and evidenced original-asset use history; actual later handover retains the original responsible cohort and its allocation | declared network site, equipment acceptance and actual waste handover gates | per reference flow | calibration, signed receipts/work orders, specification/inclusion checks, stock/causal-share ledger, gaps and uncertainty evidence |
| cp_site_waste | site_work | actual site waste generation and handover | site measurement, handover and task record | generation event/date; source asset/task and original cohort; carrier identity and measured gross mass; composition/moisture/remaining fluid; opening/closing waste stock; handed-over mass/date; actual receiver and signed acceptance gate; onsite reuse/internal transfer; product-return acceptance distinct from waste rejection; residual carrier heat and fixed datum; Q; custody_lot_id; custody_pool_id; O; G; T_in; C; H; T_out; L; epsilon; movement_endpoints; loss_event_ID; loss_time_location; loss_evidence_method; first_medium; release_row_id; propagated_uncertainty | At generation, storage and the site-to-receiver gate, weigh the actual whole carrier or use a calibrated volume with matching density. Keep current generation held for later handover as stock QA, never handover exchange; reconcile generation/stock/handover and avoid double counting separated components or fluids. Retain receiver/route proof to the actual handover only; no assumed receiver processes, future reagent/energy use or post-handover emissions. Actual direct site releases are distinct from handed-over waste; unknown handover stays a gap. For custody_mass_balance and custody_loss_link, retain calibrated event/stock measurements, matched composition/density and original lot; investigate each loss or residual at the actual location, link its release row and paired movements, and reconcile monthly and at interval end. Record absence only with dated inspection/measurement coverage; unknown is not zero. | kg; MJ | each receipt batch/actual task event; monthly reconciliation; asset-scope change and annual review; each loss event and stock movement | declared service reporting cohort and evidenced original-asset use history; actual later handover retains the original responsible cohort and its allocation | declared network site, equipment acceptance and actual waste handover gates | per reference flow | calibration, signed receipts/work orders, specification/inclusion checks, stock/causal-share ledger, gaps and uncertainty evidence |
| cp_site_emissions | site_work | actual onsite air species | site measurement, handover and task record | site task/machine/engine ID; interval and operating state; fuel withdrawal and corrected kg; fossil/biogenic composition; species identity and first receiving air interface; direct measurement unit/method/calibration; native source factor and applicability; oxidation/control/composition already inside factor; PM fraction definition; causal task share or capital-install alpha; uncertainty; occurrence/absence inspection; Q  ; linked source fuel/material/work order; directly subdivided source quantity or original work-order personnel-hour share; all-beneficiary denominator; original alpha for one-off capital event; no-second-share check| Collect actual onsite engine/task data each event with representative measurements or engine/fuel-specific factor evidence; keep raw factor basis and one conversion. Reconcile species/fuel carbon and nonoverlapping particles monthly without inventing residual emissions. Apply the same onsite task allocation as its fuel and normalize once; absent fuel/task is documented absence, not an assumed zero factor. Supplier/receiver emissions are outside this protocol. | kg; native factor units | each receipt batch/actual task event; monthly reconciliation; asset-scope change and annual review | declared service reporting cohort and evidenced original-asset use history; actual later handover retains the original responsible cohort and its allocation | declared network site, equipment acceptance and actual waste handover gates | per reference flow | calibration, signed receipts/work orders, specification/inclusion checks, stock/causal-share ledger, gaps and uncertainty evidence |

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| thermal_reference | all thermal carrier, stock and origin calculations | Use one mandatory ordinary-water energy convention: the IAPWS-95 saturated-liquid triple-point state at 273.16 K has specific internal energy zero. This fixes an accounting reference, not an operating temperature, water-quality assumption or LCA allocation approved by IAPWS. For property implementation j evaluate C_j = u_raw,j at that same reference state, in kJ/kg; normalize every water value as h_c = h_raw,j - C_j and u_c = u_raw,j - C_j. The retained token h0 means C_j, not a selectable inlet, ambient or customer-return enthalpy. Apply the same offset to h and u; preserve h_c - u_c = p/rho/1000 for p in Pa and rho in kg/m3. Do not independently zero enthalpy, substitute h for stored u, or treat a changed physical reference state as a sensitivity choice for the primary result. Use measured water states/composition and a validated property method applicable to them; document any necessary composition corrections on this same convention rather than importing an incompatible energy zero. Unsupported conversion or property applicability blocks completion. The proportional origin method remains this PCR candidate accounting choice, not uniquely observable heat tracing. | property_method; raw_h; raw_u; reference_state; C_j; cp_heat | Canonical h_c, u_c and implementation offset h0 | iapws-water-energy-reference-2018 |
| thermal_reference_history | heat_balance; electrical_burden_carry; carrier_thermal_inflow | Before heat_balance or electrical_burden_carry, construct all inlet/outlet carrier energies and opening/closing water internal energies on thermal_reference. Reconstruct each source/electrical/carrier origin ledger chronologically from evidenced initial fill and all subsequent supply, work, withdrawal, loss and transfer events on this convention, retaining original suppliers and electrical kWh burdens. Reconcile the three opening components to U_open and the three closing components to U_close. Previously aggregated stocks or shares on a different datum are not interchangeable: do not shift only U_open/U_close while retaining old origin fractions, and never assign the unexplained difference to carrier origin. If historical raw states, masses or origin events cannot be recovered, keep an explicit incomplete result. A corrected datum conversion requires versioned replacement of all affected original-cohort source-heat, electricity-carry and normalized results using each original positive Q; retain the previous results and raw observations, with no fictitious purchase, release or credit. | cp_heat; cp_water; cp_energy; original_origin_history; original_Q | Canonical historical origin and burden ledger | |
| `heat_meter` | heat_distribution_service; replacement_heat | Q_j = sum[m_j_interval * (h_supply - h_return)] / 1000 when mass is kg and h is kJ/kg; sum only contract-accepted useful delivery intervals for Q. Use validated matched-gate heat meters or traceable water property evaluation at measured temperatures/pressures; volume requires matching density or validated heat coefficient. No constant density, heat capacity, temperature or pressure is prescribed.  Q_reject includes only final irreversible heat consumed in operator-controlled rejected/test circuits without acceptance or another valid commodity recipient; an internal bypass/return remaining in the same circuit is not another output. Tag intervals/events mutually exclusively as accepted, rejected or ordinary carrier/environment loss; G_ambient and Q_carrier_loss must not repeat an event already assigned to Q_reject. A valid external commodity transfer is not rejection; this route excludes it pending reviewed extension.| m_j_interval; h_supply; h_return; acceptance; cp_heat | Q; Q_in; Q_reject | `oiml-heat-meters-2002` |
| `heat_balance` | replacement_heat; heat_distribution_service; heat_to_air; heat_to_soil; heat_to_freshwater | First apply thermal_reference and thermal_reference_history to every carrier and stock term, including inherited origins; no independently selected datum is permitted. For each synchronized zone/interval reconcile Q_in + W_to_fluid + H_carrier_in + G_ambient + U_open = Q + Q_reject + Q_carrier_loss + U_close + residual, with measured carrier enthalpy at the fixed datum. G_ambient is measured signed heat exchange, positive inward; negative environmental transfer is not also Q_carrier_loss. Q_carrier_loss is unrecovered heat leaving in drained/leaked carrier. Residual stays investigated uncertainty, not forced loss. Internal recovery returns to the same pool without another input. External useful heat export or positive ambient gain is outside this route pending extension. Subdivide independently metered zones/time first. For an inseparable pool, P = Q_in + W_to_fluid + H_carrier_in + U_open; share_source = (Q_in + U_open_source) / P; share_electric = (W_to_fluid + U_open_electric) / P; share_carrier = (H_carrier_in + U_open_carrier) / P. The three shares must sum to one. Q_source_extra = share_source * (Q_reject + Q_carrier_loss - G_ambient); Q_source_accepted = share_source * Q; U_close_source = share_source * U_close, with matching electrical/carrier closing provenance. Carry original supplier/vintage source and electrical burdens; carrier water burdens follow makeup_allocation and the initial-fill physical asset ledger. This is a declared proportional energy accounting convention, applicable only to a combinable pool with matched measured states/time, a closing energy balance and complete opening provenance; document its mixing assumption and uncertainty, not uniquely observable physical tracing. Nonpositive P, negative physical pool amounts, missing carrier state/ownership, incomplete opening history or unresolved mechanical correction blocks completion. Q_carrier_loss retains the full canonical advective enthalpy of actual liquid outflow at the thermal boundary for this conservation and origin ledger. It is not an elementary heat emission: apply carrier_release_heat separately without subtracting receiver-baseline energy from this balance or the source/electrical attribution pool. | Q_in; W_to_fluid; H_carrier_in; G_ambient; Q_carrier_loss; U_open; U_open_source; U_open_electric; U_open_carrier; U_close; Q; Q_reject; cp_heat; cp_water; cp_pump | Q_source_extra; Q_source_accepted; complete thermal cohort provenance |  |
| `normalize_exchange` | all inventory rows | x_ref = x_attributed / Q; x_attributed is the original quantity in the card unit assigned to the same accepted-service cohort after stock correction and supplier-gate/stage overlap removal. Normalize once and retain raw totals. Original-cohort asset/capital-event corrections under asset_service use that original positive Q_k, never current or disposal-period Q. Failed or zero-output individual tasks retain their measured consumption and are assigned to their evidenced original parent service cohort; they do not increase Q. If that responsible cohort has no positive Q, retain raw totals and an unresolved gap without a unit-reference result or transfer to an unrelated successful cohort. The reference output is Q / Q = 1 MJ; standby-only periods without Q cannot form a unit service dataset. | x_attributed; Q; cp_heat; cp_energy; cp_water; cp_assets | x_ref |  |
| `energy_units` | aux_electricity | E_MJ = 3.6 * E_kWh; convert meter energy once. The verified Net calorific value property with Units of energy is used as the database energy-quantity convention for electricity and service throughput; the name does not imply combustion of the service or heating water. Heat quantities use enthalpy measurement, not fuel calorific value. | E_kWh; cp_energy | E_MJ |  |
| `water_balance` | makeup_water; initial_fill_water; drained_water; water_to_soil; water_to_freshwater | Opening water mass inside the active-loop thermal boundary + actual initial-fill injection + actual operational-makeup injection = closing water mass inside that same active-loop boundary + actual generated drainage + actual leakage, reconciled for measured supplier returns and other ownership-defined transfers. Supplied cold-water receipts not yet injected remain separately held stock, never injection. Ordinary circulation is not new input/output. Convert volume with state-matched density, retain raw readings; apply makeup_allocation to initial/operational supply burdens without equating physical injection to unit-service water purchase. External returns outside the same owned loop remain outside this route pending reviewed extension. | opening_water; initial_fill_injected; operational_makeup_injected; closing_water; drainage; leakage; supplier_returns; external_transfer; cp_water | reconciled carrier mass and initial/makeup distinction | |
| `constituent_identity` | water_to_soil; water_to_freshwater | m_species_medium = total_released_solution_mass * measured_species_mass_fraction * measured_destination_fraction; use either measured destination masses or fractions, not both. Water fraction and dissolved species partition the total solution; add a separate card for each actual non-water species and receiving medium. For kg waste carrier sent to treatment, retain composition but do not emit its constituents separately before treatment.  Determine receiving medium at the first operator-to-environment interface for each release event/parcel; soil and freshwater destinations are mutually exclusive for that parcel. Subsequent soil-to-groundwater or surface-water migration is environmental fate, not a second operator substance or carrier-heat emission. Retain event ID, parcel share and first-interface evidence.| total_released_solution_mass; measured_species_mass_fraction; measured_destination_fraction; cp_water | m_species_medium |  |
| carrier_release_heat | heat_to_soil; heat_to_freshwater; drained_water | For each direct liquid-water parcel p at the first operator/environment interface, retain H_out_p = m_p * h_out_c / 1000 MJ for measured kg and kJ/kg. Evaluate h_receiver_c for the same water composition at the measured undisturbed receiving-medium temperature and the same interface pressure, using the validated water property method and thermal_reference. H_receiver_base_p = m_p * h_receiver_c / 1000; E_excess_p = H_out_p - H_receiver_base_p. The receiver state is a measured physical comparator, not a new selectable thermodynamic zero. Only E_excess_p is the receiver-relative thermal-load contribution to the matching heat card; H_receiver_base_p is mass-carried baseline energy retained as reconciliation metadata, neither waste heat, a new environmental input nor a credit. For soil the comparator is water at local soil temperature, never the specific enthalpy of soil. Both water states must be liquid and composition-compatible; unsupported phase change, mechanical-energy correction or mixing/reaction requires reviewed method extension before completion. Reconcile any operator-side changes between the network thermal boundary and first environmental interface separately with measured energy/storage, without dropping or counting them twice. Equal matched states give zero excess heat while water mass and H_out remain recorded. Negative E_excess is an evidenced cooling interaction requiring reviewed extension beyond these positive waste-heat cards; retain its signed raw value, never clamp, net against heating or create a credit. Unknown receiver state, uncertainty that leaves the sign unresolved, or unsupported property conversion blocks a complete heat result. For waste handover keep full carrier energy as metadata with zero direct environmental heat at that handover; receiver treatment is outside this foreground. This declared thermal-load convention does not predict instantaneous transfer to a finite receiver or its final temperature; that requires a separate receiving-medium model, not an additional emission. Binding an unbound heat UUID must verify this quantity meaning as well as medium/property/unit. | cp_heat; cp_water; m_p; h_out_c; h_receiver_c; first_interface; thermal_reference | H_out_p; H_receiver_base_p; E_excess_p; receiver-specific thermal-load ledger | epa-nccw-thermal-load; iapws-water-energy-reference-2018 |
| heat_fates | heat_to_air; heat_to_soil; heat_to_freshwater | Assign measured non-carrier Q_reject and negative G_ambient by event and first physical receiver, without applying another ambient subtraction to an already measured heat difference. For direct liquid-carrier releases use E_excess_p from carrier_release_heat, never Q_carrier_loss or H_out_p as elementary heat. Per medium j calculate Q_j = Q_noncarrier_j + sum(E_excess_p assigned to j) + E_outside_j, with mutually exclusive event components; air has no liquid-carrier branch in this route. E_outside_j is measured electrical dissipation outside the water circuit, assigned once to its actual air/soil receiver. W_to_fluid is already in the network heat balance and must not be added again. Reconcile full Q_carrier_loss to direct-carrier H_out plus waste-carried energy at the same boundary, including documented operator-side transfer/storage corrections; reconcile each direct H_out = E_excess + H_receiver_base separately. Do not force environmental heat totals to equal full carrier enthalpy or invent a residual emission. Waste handover carries no direct heat emission. Normalize each Q_j once by the original accepted Q; later quantity corrections replace the affected original-cohort result with its original denominator. Soil and freshwater shares are mutually exclusive per parcel; subsequent environmental migration, cooling or mixing is not another operator release. Retain event IDs, parcel shares, first-interface evidence and uncertainty; do not multiply a destination share twice. | Q_reject; Q_carrier_loss; G_ambient; E_excess_p; H_receiver_base_p; E_outside_j; receiver_records; cp_heat; cp_water | Q_air; Q_soil; Q_freshwater; separate carrier-energy reconciliation | epa-nccw-thermal-load |
| `waste_cohort` | drained_water; site_work | Reconcile original-cohort raw generation, stocks, handovers, other movements, evidenced losses and unexplained residuals under custody_mass_balance and custody_loss_link; generation and pending stock remain QA only. The exchange quantity is solely actual signed-handover mass attributed to its original responsible cohort, m_handover_attributed, excluding stock still onsite. Retain source event, original asset/service cohort, generation date and actual handover date for every handover. Capital-linked handover uses the original asset_service fraction once; recurring-operation handover uses the original service causal share. Dispatch of historical opening stock belongs to its original cohort or governed amendment, never all to current Q. No foreground receiver input or treatment emission arises after this gate. At actual final capital retirement use asset_service final w and each actual carrier source-specific booked fraction to correct the original cohort/Q_k, including initial-origin water. Newly observed carriers have zero prior postings; operational-water FIFO responsibility remains separate. Signed allocation corrections do not change raw handed-over carrier mass or create a second waste output. | m_generated; m_handed_over; m_closing_waste_stock; m_opening_waste_stock; original_cohort; original_asset_fraction; Q; cp_water; cp_site_waste | m_handover_attributed and separate generation/stock QA | |
| custody_mass_balance | original-cohort waste custody and actual losses | O + G + T_in = C + H + T_out + L + epsilon, in raw whole-carrier kg for one original generation lot, declared custody pool and matched interval. O/C are opening/closing physical stocks; G is newly generated material entering custody, counted once; H is gross actual accepted external handover under the existing gate; T_in/T_out are other evidenced physical movements (including returns or reclassification), with origin/destination and paired ledger entries, never also H or new G. Internal movements cancel when pools are consolidated. A physical return retains the original lot and enters T_in paired to the original gross H; keep that historical H in this physical ledger. Any later acceptance/attribution correction is separate and must not also reduce H in this equation. Correct an erroneous handover that never occurred without inventing a return. Reclassification without a physical pool-boundary movement changes the state label only, never T_in/T_out. L is evidenced physical loss after entry into this custody pool, not a balancing plug; epsilon is the signed unexplained measurement residual. Calculate epsilon = O + G + T_in - C - H - T_out - L; investigate it against propagated measurement uncertainty and retain the evidence and unresolved remainder. Unknown quantities must not be zero-filled or converted into L. Weigh the actual whole carrier at each event and stock count, or use calibrated volume times density at matching state/temperature/composition; distinguish whole-carrier mass from dry mass and contained-species mass. Moisture loss is an evidenced physical movement, not an unsupported basis conversion. Record zero loss only with inspection/measurement coverage and uncertainty evidence. Do not allocate or normalize this physical QA equation. Retain each inventory row’s declared property/unit: a volume-based handover row uses actual handed-over volume; its matched density conversion to kg serves this physical QA only and never creates a second output. Example with zero opening/closing/other movements and no unexplained residual: G=10 kg, H=9 kg, L=1 kg; output H remains 9 kg. Example values are not defaults. | O; G; T_in; C; H; T_out; L; epsilon; cp_water; cp_site_waste | Raw whole-carrier kg closure; actual H only at handover |  |
| custody_loss_link | original-cohort waste custody and actual losses | Keep active-loop water_balance separate from post-drainage custody. Match the loop drainage event to custody entry once: drainage of 10 kg followed by custody loss of 1 kg and actual handover of 9 kg remains 10 kg loop drainage, not 11 kg or a second loop leak. Link actual custody releases to measured composition/state, first receiving medium and exact existing rows under waste_fate; whole-carrier L is not automatically a species release. Retain cp_water FIFO origins, original asset/service attribution and original Q or Q_k under waste_cohort; apply each applicable share and denominator once. A physical loss is not a signed capital-allocation correction. Missing species/medium rows or unresolved loss identities require explicit matching cards and identity review before completion; no invented UUID, assumed off-site release or residual-as-emission. | custody_mass_balance; cp_water; cp_site_waste | One actual release event at its original allocation and denominator |  |
| `electrical_burden_carry` | aux_electricity | Use the thermal_reference-normalized P and U_close and the reconstructed opening burden under thermal_reference_history. This route permits only pump intervals aggregated to comparable motor/drive/casing thermal states with measured proof that net dry-module storage change is negligible within justified combined uncertainty. Include every start, stop and standby; never drop transients to manufacture zero change. Retain measured delta_E_dry_module and its check, not an unmeasured zero; material dry storage change requires reviewed extension, not vague carry. For qualified intervals E_fluid_current = W_to_fluid / 3.6 kWh; E_outside_current = measured attributable current electricity - E_fluid_current. P is the complete heat_balance pool including measured carrier sensible energy, and B_open_electric is original-supplier kWh burden carried by opening water electrical-heat storage. E_attributed = E_outside_current + (E_fluid_current + B_open_electric) * (P - U_close) / P; B_close_electric = (E_fluid_current + B_open_electric) * U_close / P. Calculate by interval and original supplier, carrying B_close_electric without repurchasing original electricity; missing opening burden history blocks completion. Assign outside-fluid electrical dissipation to its actual receiving medium; later hydraulic-energy dissipation in water is already within W_to_fluid and the heat balance, never another pump-heat or electricity input. | W_to_fluid; P; U_close; B_open_electric; comparable_module_states; measured_dry_storage_change; cp_pump; cp_heat; cp_energy | E_attributed; B_close_electric; measured negligible-dry-storage qualification |  |
| `carrier_thermal_inflow` | makeup_water; heat_distribution_service; replacement_heat; drained_water | Use thermal_reference before calculating any carrier or stock quantity; h0 is its implementation-specific C_j on the fixed IAPWS-95 internal-energy reference, never a freely chosen physical reference state. Show that the canonical pool quantities required by heat_balance are nonnegative. For each purchased makeup/initial-fill batch b, H_carrier_b = m_b * (h_b - h0) / 1000 MJ for kg and kJ/kg, using measured supplier-to-network gate temperature, pressure and composition. Here h_b is the unconverted h_raw,j; if h_c is already converted, use H_carrier_b = m_b * h_c / 1000 without subtracting h0 again. Record batch origin, receipt, original supplier dataset, whether supplier inventory includes conditioning heat, and who bears its cost; water-borne enthalpy is carrier origin, never source-heat or pump origin. Supplier conditioning already in the water dataset is not purchased again as heat. External carrier returns/transfers other than the same owned internal supply/return loop are outside this route pending a reviewed extension; ordinary circulating return is internal and cancels. Include opening/closing water internal energy U = sum(m * (u_raw - h0)) / 1000 MJ using measured kg and kJ/kg, on that same reference; obtain u from the validated property method, not h. An already converted u_c enters sum(m * u_c) / 1000 without a second offset. Reconstruct opening origins under thermal_reference_history. Carry physical carrier-heat provenance in storage. Carrier water supply burdens follow the initial-fill/operational mass rules, not an additional invented heat commodity or heat credit.  H_carrier_in uses actual injection across the thermal-circuit boundary and measured state there, not purchased receipts still held in a cold-water tank. Conditioning, heat transfer or work between supplier gate and injection must be accounted through independently metered atomic cards and origin records, not hidden inside carrier sensible energy; unmetered conditioning prevents completeness. | m_b; h_b; h0; carrier_origin_ledger; cp_heat; cp_water; u_raw; thermal_reference; thermal_reference_history | H_carrier_in; U_open_carrier; carrier responsibility ledger | iapws-water-energy-reference-2018 |
| `pump_fluid_energy` | aux_electricity; heat_distribution_service; replacement_heat | Within this entry's declared applies_to scope, apply the complete ordered rule group: pump_fluid_energy_measurement; pump_fluid_energy_energy_channels; pump_fluid_energy_reconciliation; pump_fluid_energy_interpretation; pump_fluid_energy_unit_conversion. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat; pump_fluid_energy_measurement; pump_fluid_energy_energy_channels; pump_fluid_energy_reconciliation; pump_fluid_energy_interpretation; pump_fluid_energy_unit_conversion | W_to_fluid; independent reconciliation and uncertainty |  |
| `makeup_allocation` | makeup_water; drained_water; water_to_soil; water_to_freshwater; initial_fill_water | Classify each water receipt as commissioning initial fill, operational replacement or unused returnable stock. Full initial-fill supply quantity enters initial_fill_water with the original network asset fraction once, never operational makeup. Subsequent replacements retain original supplier/batch burden. Apply FIFO by receipt timestamp and immutable ID to identical undosed water in the declared combined tank/network ledger; subdivide isolated tanks first. For each b reconcile S_open_b + I_b - R_supplier_b = D_b + L_b + S_close_b, where D is actual drainage generation and L actual leakage, excluding internal circulation, issuing oldest available batches first. m_makeup_attributed = sum(D_b + L_b) over operational-origin batches only with original supplier burdens; initial-origin withdrawal does not repurchase water. Remaining operational stock carries unallocated supplier burden until actual withdrawal. At actual retirement reconcile remaining operational water by measured drainage or supplier return: drainage enters the same FIFO D once, return enters R_supplier once; with no positive Q, amend the final positive-Q original cohort once for measured retirement withdrawal and unallocated supply burden, never another capital-makeup or future-treatment burden. Record each actual wastewater event in exactly one of drained_water or site_washwater; carrier and residual heat end at handover and are not counted again by water-supply origin. Unknown batch history or residual blocks completion. The final-positive-Q operational withdrawal amendment applies only to the original operational-water responsibility, never to initial-fill/asset allocation balances. Initial-fill supply and observed initial-origin capital handover use asset_service final all-beneficiary shares and source-specific original-cohort corrections; operational-origin water already allocated by FIFO receives no capital share. The same measured parcel stays once in the raw water balance regardless of burden allocation. | S_open_b; I_b; R_supplier_b; D_b; L_b; S_close_b; initial_fill_register; original_supplier; cp_water; cp_assets | m_makeup_attributed and FIFO supply-burden carry | |
| `asset_service` | all inventory rows | Within this entry's declared applies_to scope, apply the complete ordered rule group: asset_service_initial_driver; asset_service_remaining_life; asset_service_final_correction; asset_service_source_scope; asset_service_constraints. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q; asset_service_initial_driver; asset_service_remaining_life; asset_service_final_correction; asset_service_source_scope; asset_service_constraints | once-attributed assets, initial fill and observed capital events; original-cohort corrections |  |
| capital_source_amendment | original-asset sources and their one-time capital-event components; excludes recurring operating components | Within this entry's declared applies_to scope, apply the complete ordered rule group: capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | attributed totals in source-native units; normalize once by original N_c |  |
| `site_activity` | all inventory rows | Identify each actual onsite task/meter and its original network/service cohort before aggregation. Dedicated recurring work is direct. Use the fixed subdivision and object-specific driver hierarchy in shared_assets: shared grid electricity uses verified operating/standby kW*h when task submeters are absent; shared recurring materials/work use the same source-work-order service personnel hours over all-beneficiary personnel hours; releases inherit their source share once. Actual one-off onsite installation/commissioning/retirement resources and releases, including their actual waste handovers, follow the original retained asset alpha once. Recurring repair and operational waste actual handovers use their original generation/service cohort and measured causal share, never supplier manufacture or off-site transport/treatment. Correct product receipts/use for opening/closing site stocks and documented supplier returns; do not fix a component input to Q or a removed waste to its original purchased mass. Record equipment return/reuse acceptance separately from rejected material and waste, with no automatic recycling credit. Onsite electrical conditioning between supplied-water receipt and circuit injection is separately metered in site_electricity and its thermal origin ledger; water supplier conditioning already inside the supplied-water dataset is not purchased again. Actual unlisted foreground input/emission needs one specific object/property/unit card and protocol before completeness, not a speculative background list. Final asset retirement uses asset_service w and source-specific signed corrections to each original positive Q_k for capital events; no remaining balance may be concentrated on the final service cohort. Raw site QA and already attributed quantities are not added again. | task_event; meter; original_cohort; site_stocks; supplier_returns; fixed_driver_share; task_submeter; verified_device_state_power_kW; actual_state_hours_by_beneficiary; common_meter_kWh; personnel_hours_service; personnel_hours_all_beneficiaries; source_work_order; original_asset_alpha; cp_site_work; cp_site_waste | attributed actual site exchanges |  |
| `site_fuel_emissions` | all inventory rows | Only actual logged onsite machinery/generator emissions enter site_air rows; establish task and species occurrence/absence by fuel records, engine specification and appropriate measurement/source-factor evidence. Keep grid import separate from onsite internal generation: cancel internal electricity once and retain actual fuel and species once, never charge both a generator-electricity background and its fuel. Use a directly measured species amount or raw fuel times a factor with documented native basis, composition, oxidation, control and receiving medium. Apply each conversion/composition/destination share once only when not already included in factor. Fossil/biogenic carbon are distinct; keep NO and NO2 distinct, <=2.5 and >2.5-to-10 micrometre particles mutually exclusive; do not add overlapping PM10 totals. Actual additional onsite species require precise reviewed cards; unmeasured quantities, unknown factors or identity remain gaps, not zero. Annual QA is not an extra emission. Supplier/receiver emissions, scrap-processing reagents and external vehicle/road manufacture are background and absent from this inventory. | onsite_task; fuel_records; measured_species; native_factor; composition; destination; cp_site_emissions | actual nonduplicated onsite emissions |  |
| pump_fluid_energy_measurement | aux_electricity; heat_distribution_service; replacement_heat | Component of pump_fluid_energy. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Use an independently instrumented control volume around each electric pump/drive module, excluding heat exchangers and other energy sources. Synchronize calibrated inlet/outlet mass flow, water temperature/pressure and traceable enthalpy evaluation; measure inlet/outlet pipe area, velocity and elevation, module opening/closing fluid/solid thermal states, motor/drive electrical kWh and external heat transfer. | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | Method component; the originating entry owns the inventory result |  |
| pump_fluid_energy_energy_channels | aux_electricity; heat_distribution_service; replacement_heat | Component of pump_fluid_energy. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Calculate W_fluid_check from the integrated water enthalpy-flux rise plus kinetic/potential flux differences and fluid-energy storage change; use 1 MJ = 1000 kJ and 1 kWh = 3.6 MJ, with explicit dimensional conversion for velocity/elevation energy. Independently calculate W_to_fluid = E_pump_MJ - Q_motor_drive_outside - delta_E_dry_module from metered motor supply and measured motor/drive/casing heat loss outside the fluid, accounting for dry-module stored energy. Measure external heat by calibrated heat-flux integration or validated calorimetry/loss maps covering the actual load/speed/temperature intervals; a nameplate efficiency is insufficient. | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | Method component; the originating entry owns the inventory result |  |
| pump_fluid_energy_reconciliation | aux_electricity; heat_distribution_service; replacement_heat | Component of pump_fluid_energy. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Require both independently derived values to agree within documented combined uncertainty. Shaft torque/speed and hydraulic massflow/pressure power are additional reconciliation channels, not extra energy inputs. Require 0 <= W_to_fluid <= E_pump_MJ; any discrepancy triggers sensor/state investigation, separate identification of non-electric heat or kinetic/potential/storage effects, and withheld completion until resolved, never clipping or solving W_to_fluid from a whole-network residual. The route requires demonstrated negligible net gate kinetic/potential transfer and storage change within documented uncertainty; otherwise extend the balance with measured terms under review before use. | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | Method component; the originating entry owns the inventory result |  |
| pump_fluid_energy_interpretation | aux_electricity; heat_distribution_service; replacement_heat | Component of pump_fluid_energy. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Electrical supply minus outside-fluid heat and measured module-storage correction is the primary channel; the fluid-energy channel is an independent check. W_to_fluid is total energy entering fluid, including hydraulic mechanical energy, not instantaneous sensible temperature rise. Its later dissipation is not another input. Aggregate reporting intervals to measured comparable dry-module thermal states with negligible net dry storage within justified uncertainty; otherwise this route cannot establish completion. | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | Method component; the originating entry owns the inventory result |  |
| pump_fluid_energy_unit_conversion | aux_electricity; heat_distribution_service; replacement_heat | Component of pump_fluid_energy. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Torque uses N*m and angular speed rad/s; convert rpm logs once with omega = rpm * 2*pi/60. P_shaft = torque_Nm * omega_rad_s W; P_hydraulic = delta_p_Pa * m_dot_kg_s / rho_kg_m3 W, with state-matched measured or traceable property density. Q_out_MJ = sum(flux_Wm2 * area_m2 * dt_s) / 1000000; retain measured area and duration. | pump_state_records; motor_supply; external_heat_flux; shaft_hydraulic_check; module_storage; cp_pump; cp_energy; cp_heat | Method component; the originating entry owns the inventory result |  |
| asset_service_initial_driver | all inventory rows | Component of asset_service. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each retained delivered network asset a retain its immutable key, specification, primary-unit accepted quantity q_a, commissioning and all beneficiary-period service cohorts k. Keep the existing physical capacity-hour driver u_k: verified duty/capacity times actual availability hours attributable to k; for dedicated fixed capacity this reduces to actual available hours, with the same measured beneficiary share. Initially alpha_a,k = u_k / evidenced all-beneficiary lifetime capacity-hours L_a. | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | Method component; the originating entry owns the inventory result |  |
| asset_service_remaining_life | all inventory rows | Component of asset_service. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At any life/utilization revision freeze accepted historical postings: F_prev_all is the total original-asset fraction already booked across all periods and beneficiaries. For each subsequent interval use alpha_a,k = (1 - F_prev_all) * u_current / U_remaining_all, where the supported positive remaining capacity-hours include that interval and every remaining beneficiary. Require 0 <= F_prev_all <= 1 and 0 <= u_current <= U_remaining_all; update the remaining balance after each posting and never restart the original quantity. | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | Method component; the originating entry owns the inventory result |  |
| asset_service_final_correction | all inventory rows | Component of asset_service. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At actual final retirement calculate w_a,k = u_actual_k / sum_all_lifetime_actual_u across every original cohort, then for each observed source quantity s calculate delta_a,s,k = w_a,k - F_booked_a,s,k from that source quantity ledger. Versioned corrections of delta_a,s,k * q_a,s amend each original cohort result using its own positive Q_k once; preserve original records and raw physical quantities. Final shares sum to one; never charge the residual to the last positive-Q or disposal-period cohort. A negative delta only reverses excess attribution, not a negative physical exchange or substitution credit. | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | Method component; the originating entry owns the inventory result |  |
| asset_service_source_scope | all inventory rows | Component of asset_service. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. The same alpha and final w apply once to delivered equipment, separately supplied initial fill, actual one-off onsite capital resources/releases and actual capital-linked handover carriers. Each source has its own previously booked fractions; newly observed carriers/events have F_booked=0 where not previously posted. Before final retirement, late observed capital-event quantities use the original frozen cohort fractions and remaining allocation ledger, without a full charge to the event year; final retirement reconciles them using w. x_attributed = sum(q_a,s * alpha_a,k), or the final w and versioned correction, then /Q_k once. | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | Method component; the originating entry owns the inventory result |  |
| asset_service_constraints | all inventory rows | Component of asset_service. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Missing/nonpositive lifetime or remaining drivers, missing prior postings or original Q_k block unit-reference results; never equal split or substitute current Q. Pipe length, defined equipment counts and measured water kg remain their sole primary units; capacity-hours do not replace them. Do not invent mass, life, capacity, future event quantities or unsupported future handover. Replacements get new original keys; recurring consumables use their task cohort, never both a replacement and consumable. Operational-water FIFO under makeup_allocation is separate from asset/initial-fill allocation. No supplier/receiver internal or supporting-capital recursion. Apply capital_source_amendment for final settlement, source quantity/model-version corrections and original-denominator changes; any delta-fraction times source-quantity expression here is conditional on its unchanged-source/model requirements. | original_asset_key; q_a; q_a,s; primary_unit; capacity_hours; L_a; alpha_a,k; F_prev_all; u_current; U_remaining_all; u_actual_k; w_a,k; F_booked_a,s,k; delta_a,s,k; Q_k; cp_assets; cp_site_work; Q | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_history | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. This rule completes the existing frozen-history/remaining-life policy; it does not require retrospective replacement of historical life fractions at every life revision. Keep the original asset key, each native-unit source s and version, exact product/event gate, all beneficiary-period cohorts c, immutable raw measurements and accepted postings. Before actual final retirement, life/utilization revisions freeze historical fractions and allocate only the remaining fraction using the existing evidenced remaining driver; require 0<=F_prev_all<=1 and include the current interval and all future beneficiaries in the positive remaining denominator. A late first-observed capital source uses each historical accepted fraction and the same remaining ledger, not a full event-year charge. Use the existing verified duty/capacity times actual availability hours, with all original beneficiaries; dedicated fixed capacity retains its existing available-hour reduction. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_final_shares | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At actual final retirement set w_c=u_actual_c/U_final with U_final=sum_all_original_beneficiaries(u_actual)>0; all final shares sum to one, including non-study/failed/standby responsibilities already prescribed by the original driver. A transfer to continued use is not final retirement. Zero or unknown lifetime activity, unsupported prior fractions or missing original cohorts prevents final allocation; retain raw totals and the gap, never equal-split or invent use. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_source_revision | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For source correction before retirement use each original cohort accepted fraction g_c; at final retirement use g_c=w_c. Q_s,new is the evidenced FULL source quantity before allocation in its original card unit, not a remaining unallocated balance or a previously weighted amount. B_s,c is the actual previously booked attributed raw quantity for that source/cohort, with its quantity/model version and previous normalized result. Calculate A_s,c,new=Q_s,new*g_c and delta_A_s,c=A_s,c,new-B_s,c. A newly observed source has B=0 where unposted; a correction to an existing source replaces that source ID, not an additional purchase or disposal event. The shortcut (g_new-F_booked)*Q_s is valid only when the source quantity and linked model version are unchanged and B=F_booked*Q_s; otherwise use A_new-B. Reconcile physical gross receipt/stock/transfer/handover separately; signed corrections are model amendments, never negative physical exchanges or substitution credits. For a changed linked supply/treatment model, replace the affected original-cohort inventory/results even if delta_A=0; remove the previous model contribution and record both versions and scope. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_normalization | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Normalize the complete revised attributed amount once by the original cohort current verified reference denominator N_c (Q, D or A as locally named). If N_c itself changes, replace the complete old normalized result; do not add delta_A/new_N to a result based on old_N. Zero-output events retain their already prescribed causal parent; a parent without positive N_c retains raw attributed totals and an incomplete normalized result, never shifts to an unrelated positive-output period. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_scope | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Apply this to each actual capital-origin source covered by the existing gates, including separately counted initial fill, post-acceptance capital-site events and actual retirement carriers where present; do not create new sources, extend background boundaries, duplicate included supply stages or apply lifetime fractions to routine operation. These are explicit candidate accounting rules, not claimed numerical requirements of the cited classification or technical sources. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `quality_metering` | all inventory rows | Retain synchronized raw meter data, calibration, range validity, composition/property version and uncertainty for all heat, electricity and water measurements. No invented conversion factor or numeric default is permitted; meter/supplier certificates do not establish legal compliance by this PCR. | cp_heat; cp_energy; cp_water records and certificates |
| `quality_identity` | all inventory rows | Confirm one object, role, state, direction, property, unit and receiving medium per card. A candidate with no confirmed UUID stays unbound and may support methodology discussion only; a publishable dataset needs verified exact identity or a documented governed identity-resolution decision, never an invented UUID or commodity-for-service substitution. | direct-read identity payload and hash receipt; manifest unresolved registry |
| `quality_completeness` | all inventory rows | Screen each zone/site task for operation, standby, rejects/losses, leaks/drains, water/heat stocks, actual asset delivery/replacement, onsite energy/cleaning/lubrication and waste handover. Prove occurrence/absence from logs/inspection, without supplier-material lists or speculative off-site emissions. Dosing/other thermal routes still require reviewed extension; actual new foreground objects need specific cards/protocols. One property/unit does not permit combining independent objects merely sharing that unit. | site asset maps, work orders, meters, signed handovers and completeness matrix |
| `quality_missing` | all inventory rows | Unknown readings, composition, UUIDs, physical supplier gates or receiver fates are not zero. Retain an explicit gap, quantify uncertainty with a documented substitute only when defensible and flag its scope; otherwise completion is inconclusive. Never treat estimates, examples or instrument tolerances as default compliance limits. | gap register; substitute evidence; uncertainty assessment; failed-check list |
| `quality_cohort` | all inventory rows | Require accepted Q, all raw exchanges and stock/waste-handover carry ledgers to share the same service cohort. Keep rejected/returned heat separate, retain incident investigation and reject reasons, and reconcile source-to-customer heat and water balances within justified combined measurement uncertainty. A nonclosing balance is investigated and blocks an unqualified complete result. Require immutable original asset/source/cohort keys, all-beneficiary actual capacity-hour totals and source-specific booked shares. At final retirement reconcile sum(w)=1 and each governed correction against original Q_k, including negative corrections without negative physical-flow credits; unknown or nonpositive denominators block unit-reference results. | cohort ledger; accepted/rejected meters; stock/waste-handover carry records; uncertainty calculation |
| `quality_bilingual` | all inventory rows | Maintain the same ordered row IDs, formulae, units, protocol references, exceptions, official names and constraint strength in both languages. Verify actual parsed projection content including boundary, quality and calculation rules; a schema/fingerprint or localization marker does not approve scientific correctness. | bilingual semantic comparison and actual generated guidance comparison |
| inv_site_emissions | site_air_co2_fossil; site_air_co2_biogenic; site_air_co; site_air_ch4; site_air_n2o; site_air_no; site_air_no2; site_air_so2; site_air_pm25; site_air_pmcoarse | Conditional on actual onsite fuel/task occurrence and substance evidence; record directly measured mass or actual fuel/activity times a source-specific factor in its original mass/energy basis, not supplier emissions. Each substance/destination enters once; preserve origin, calibration/factor scope and uncertainty. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_custody_balance | original-cohort waste custody and actual losses | Verify custody_mass_balance and custody_loss_link with dated original-lot stocks, actual handover receipts, paired movements, calibrated loss evidence and propagated uncertainty. Distinguish evidenced L from unexplained epsilon and block unqualified completion for unresolved quantities, identity or fate. Verify that G=10, H=9, L=1 with other terms zero closes, H stays 9, each release appears once at its first medium, and allocation/normalization does not alter raw physical closure. |  |
| `validate_reference` | heat_distribution_service | Require Q > 0, 1 MJ reference service, accepted customer supply/return gate pairs, declared thermal quality and no credit for rejected, reworked or circulating heat. Do not equate different route or quality levels by energy alone. |  |
| validate_thermal_reference | all thermal carrier, stock and origin calculations | Verify thermal_reference and thermal_reference_history before any source-heat or electricity allocation. Repeat the same recorded physical case with a nonzero constant c added to every raw h, raw u and its implementation reference C_j; all canonical carrier energies, stocks, heat-meter differences, P, origin shares, Q_source_accepted, Q_source_extra, electrical carry and normalized amounts must remain unchanged within documented numerical tolerance. Also test nonzero carrier intake/drainage, unequal opening/closing water mass and historical source/electrical stocks; verify mass and energy closure separately. Reject an alternate physical reference state, separate h/u zeros, retaining old fractions after rebaselining, or a zero-filled opening provenance. The test changes representation only, never measured operation or a physical temperature; a passing energy balance alone does not prove correct allocation. | iapws-water-energy-reference-2018 |
| validate_heat_release | heat_to_air; heat_to_soil; heat_to_freshwater; drained_water | Check carrier_release_heat and heat_fates against measured event records before normalization. Independently close network energy on full canonical carrier enthalpy and environmental thermal loads on receiver-relative differences; verify each H_out = H_receiver_base + E_excess and all disjoint event totals. Recompute equal-temperature/equal-pressure, warmer-liquid release, nonzero numerical enthalpy-offset conversion, changed receiver temperature, split soil/freshwater parcels and waste-handover cases. Equal states must yield zero excess heat without removing water mass; changing receiver temperature must change only the direct-release thermal-load calculation, not the recorded network energy/origin balance. Waste handover yields no direct foreground heat. Missing receiver evidence or unresolved/cooling signs must remain incomplete, not zero or negative-credit flows. Verify compatible eventual UUID quantity meaning and that already measured pipe/rejection/electrical heat is not rebaselined or counted twice. | epa-nccw-thermal-load |
| `validate_balance` | all inventory rows | Before normalization verify heat_meter, carrier_thermal_inflow, pump_fluid_energy, heat_balance, heat_fates, water_balance, makeup_allocation and waste_cohort on raw totals. Check fixed thermal datum and carrier inlet enthalpy, independent pump control-volume measurement and 0 <= W_to_fluid <= E_pump_MJ, complete three-origin stock history, batch FIFO and initial-fill asset coverage; investigate residuals, never infer pump/carrier heat from the whole-network residual. | |
| `validate_overlap` | all inventory rows | Check commodity_complement, asset_service, site_activity, site_fuel_emissions and makeup_allocation; source commodity, delivered assets, initial fill, FIFO makeup and onsite tasks each once. Every card has exactly one primary property/unit. Waste ends at handover, with no supplier manufacture/transport/support-capital or off-site receiver-treatment cards; unperformed background obligations cannot masquerade as current foreground quantities. Verify freeze-and-remaining-balance life revisions and final all-original-cohort w/delta corrections, source-specific zero prior booking for newly observed carriers, and original positive Q_k. Reject a last-cohort residual charge, second initial-fill/FIFO water burden, or allocation correction added to physical QA. | |
| validate_capital_amendment | original-asset sources and their one-time capital-event components; excludes recurring operating components | Verify the original driver, freeze/remaining ledger, actual final w, each source full Q_s/B/version, original N and whole normalized-result replacement under capital_source_amendment. Recalculate unchanged-quantity share corrections, changed quantity with unchanged share, changed model with zero physical delta, corrected original N and zero-output cases; verify mutually exclusive capital/recurring components and all beneficiaries. Missing traceable old postings or positive denominators remains incomplete; prohibit disposal-year fallback, negative physical flows, duplicate normalization or second shares. |  |
| `validate_completion` | all inventory rows | Report performed/skipped checks, findings, uncertainty, unbound identity and foreground completeness separately. Unbound reference, unknown actual handover, nonclosing operational cohort or absent specified equipment acceptance quantity blocks unqualified foreground completion. Disclose background linking separately; complete foreground does not mean full-lifecycle completion, methodology approval or publication approval. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Distribution-only service complement |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only declared undosed-water own-account heating foreground; separately add Q_source_accepted / Q useful source heat and later link backgrounds at explicit supply/handover gates without duplication |
| excluded_use | Standalone delivered heat/heat generation, other thermal routes, whole-CPC-leaf coverage or treating this foreground inventory as a complete lifecycle model |
| required_metadata | Original reference qualifiers, raw totals/Q, three thermal-origin pools and stocks, actual equipment specification/acceptance and single property/unit, original-asset allocation, onsite tasks, supplier inclusions and actual waste handover; mandatory IAPWS-95 energy reference, property offsets, reconstructed opening provenance and invariance evidence Receiver-state observations, canonical carrier-energy versus excess-thermal-load reconciliation, compatible heat-flow quantity meaning and validate_heat_release evidence. |
| required_quality_disclosure | Foreground check coverage, uncertainty, loss/rejection, handover receiver, actual first environmental medium, identity gaps and separate background-linking state |
| update_trigger | Changes in route, foreground gate, delivered-equipment specification/inclusions, heat source/water composition, onsite task, meter or evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-69220 | official_guidance | United Nations Statistics Division, CPC 3.0 subclass 69220, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69220 | Classification scope only: own-account steam/hot-water/cooled-air/chilled-water distribution; excludes fee/contract service. Does not endorse this narrower method. |
| oiml-heat-meters-2002 | standard | OIML R 75-1:2002, Heat meters, Part 1, section 8 and Annex A, https://www.oiml.org/en/files/pdf_r/r075-1-e02.pdf | Historical technical basis for liquid heat metering by mass flow and matched supply/return enthalpy difference; no numeric water-property, instrument tolerance or regulatory compliance default. Other boundary, collection and accounting requirements are declared foreground method choices in this PCR. |
| logstor-steel-insulated-pipes-2024 | literature | LOGSTOR, Steel insulated pipes EPD-LOG-20240214-CBA3-EN, issued 3 September 2024, Product section, https://ibudata.lca-data.com/resource/processes/40693bdd-19e6-4ff5-8c89-1c2f5e5f1b3d/epd?version=00.01.000 | Supports a specified whole insulated pipe as a concrete supplied object with carrier/insulation/jacket configuration; no case dimensions, material percentages, life, factors or recycling credits adopted. Foreground scope and single primary property/unit are PCR method choices directed by the user, not mandates of this EPD. |
| iapws-water-energy-reference-2018 | official_guidance | IAPWS R6-95(2018), Revised Release on the IAPWS Formulation 1995 for the Thermodynamic Properties of Ordinary Water Substance for General and Scientific Use, section 3, equations (7)-(8). https://iapws.org/technical-guidance/release/IAPWS-95 | Supports the saturated-liquid triple-point internal-energy convention and the distinction between enthalpy and internal energy. This PCR mandates conversion to that convention; proportional LCA allocation, stock-origin attribution and uncertainty/completion rules are authored candidate choices, not IAPWS prescriptions or operating defaults. |
| epa-nccw-thermal-load | official_guidance | US EPA, Noncontact Cooling Water General Permit, Attachment B: Example Engineering and Dilution Factor Calculations, pages 2-4. https://www.epa.gov/system/files/documents/2025-11/nccw-final-gp-2024-attachment-b-dilution-factors.pdf | Supports distinguishing receiving-water thermal effects from total carrier energy using physical temperature differences. The receiver-relative LCI load convention, soil comparator, collection/completion rules and source attribution here are authored candidate choices; no permit limits, default heat capacity, temperatures or mixing/dilution assumptions are adopted. |
