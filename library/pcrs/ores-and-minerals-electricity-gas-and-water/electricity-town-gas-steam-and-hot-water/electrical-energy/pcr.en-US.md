---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.electrical-energy
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Electrical energy

## 1. Scope and Applicability

This PCR governs foreground data packages whose reference product is electrical energy under CPC 3.0 class 17100. It applies to electricity from a declared single generation technology, a portfolio or grid mix, and electricity delivered through a declared network. The package may end at net plant export or at a declared customer meter, but the selected boundary must be explicit and must remain consistent throughout the inventory.

The PCR is technology-neutral. It covers thermal, nuclear, hydro, wind, solar, ocean, geothermal, electrochemical, and other generation routes, and declared combinations of those routes. It also covers alternating-current or direct-current electricity when the current form is declared. It does not prescribe a universal generation process UUID, emission factor, fuel rate, water rate, or loss rate because those values depend materially on technology, geography, voltage, supplier, and reference period.

Standalone transmission or distribution services, electrical equipment, energy-storage equipment, steam, hot water, and cold water are outside this product category. Electricity stored and subsequently delivered remains in scope only when the electricity output is the reference product and the storage technology, charging-electricity origin, losses, and regulation function are separately disclosed. Use of electricity after the declared customer meter is excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.electrical-energy |
| classification_refs | CPC 3.0 17100, Electrical energy, exact |
| covered_products | Electrical energy from any declared generation technology or mix, at net plant export or a declared metered delivery boundary; alternating or direct current as declared |
| excluded_products | Standalone grid services; electrical equipment; storage equipment as a product; steam, hot water, or cold water; electricity-use services beyond the declared meter |
| representative_product | One kilowatt-hour of net or delivered electrical energy at the declared boundary |
| production_route | Declared single technology, generation portfolio, supplier mix, or grid mix; transmission and distribution are conditional on the reference boundary |
| market_state | Net electricity exported from generation or electricity delivered at a declared voltage and meter, with geography, reference period, mix, losses, and contractual attributes disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Electrical energy at the declared net-generation or metered-delivery boundary |
| How much | 1 kWh, equivalent to 3.6 MJ |
| How well | Net and metered; current form, voltage, generation technology or mix, geography or grid, delivery boundary, loss treatment, and contractual attributes are declared |
| How long or cycle | A representative reference period, normally one complete year; shorter periods require evidence of representativeness and disclosure of seasonal limitations |
| reference_flow_link | One unit of the TianGong product flow Electricity, qualified by the dataset-specific technology or mix, geography, voltage, boundary, and reference period |

| Field | Value |
| --- | --- |
| Reference amount | 1 kWh (3.6 MJ) |
| Reference product flow | Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae` |
| Reference flow property | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` |
| Reference unit | kWh |
| Required qualifiers | generation technology or mix; geography or grid or supplier; alternating or direct current; voltage at the reference boundary; net plant export or customer-meter boundary; reference period; transmission and distribution loss treatment; infrastructure inclusion; contractual or tracking-instrument treatment |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comments, product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete for that package.

| Role | Tiangong flow | Flow type | UUID | Flow property | Unit group | Preferred unit |
| --- | --- | --- | --- | --- | --- | --- |
| Reference product | Electricity | Product flow | `890a70b7-b677-4e2a-8a1b-7d017e0a10ae` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` | kWh |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_energy` | Reference product and all internal electricity exchanges | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Report electricity in kWh. Convert energy consistently using 1 kWh = 3.6 MJ and preserve unrounded meter values until final normalization. |
| `measure_net_generation` | Generation output | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Net generation equals gross generator output minus measured plant own-use attributable to electricity production over the same period. Do not mix gross and net quantities. |
| `measure_delivered_energy` | Customer-meter reference boundary | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Delivered electricity is the reconciled meter quantity at the declared boundary. Network input, delivered output, own use, imports, exports, and losses shall share the same period and network scope. |
| `measure_mix_weighting` | Multi-source generation or supplier/grid mix | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Weight constituent inventories by measured net generated or delivered kWh on the declared basis. Shares shall sum to 100% after documented rounding and shall not double-count contractual attributes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Energy carriers, natural-energy capture, auxiliary materials, purchased electricity, water, and infrastructure products entering the declared electricity system |
| starting_condition_role | Category-variable technosphere inputs represented by reviewed upstream datasets and foreground quantities; no single universal carrier is implied |
| product_classification_scope | CPC 3.0 17100 electrical energy at net generation or declared metered delivery |
| recursive_input_rule | Purchased electricity used inside generation or networks is an input electricity dataset with its own declared mix and boundary; it is not silently replaced by the output dataset being constructed |
| upstream_dataset_requirement | Use reviewed and temporally, geographically, and technologically representative datasets for fuels, materials, water supply, purchased electricity, transport, waste treatment, and infrastructure |
| disclosure | Declare generation technologies and shares, geography, voltage, reference period, net or delivered boundary, loss treatment, infrastructure scope, co-products, and tracking instruments |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_upstream_supply` | Upstream supply | Include extraction or capture, processing, and transport of energy carriers; production of auxiliary materials and purchased electricity; water supply; and treatment services used by the foreground system. Link these burdens through representative upstream datasets. | `epd-pcr-2007-08-v5-0-2` |
| `boundary_generation_core` | Electricity generation | Include plant operation, fuel or natural-energy conversion, plant own use, auxiliary consumption, maintenance, direct emissions, operational waste, and the life-cycle share of generation infrastructure. | `epd-pcr-2007-08-v5-0-2` |
| `boundary_delivery_conditional` | Transmission and distribution | When the reference product is delivered beyond net plant export, include electricity required to compensate for transmission and distribution losses, network operation and maintenance, direct releases, and the life-cycle share of grid infrastructure up to the declared meter. | `epd-pcr-2007-08-v5-0-2` |
| `boundary_use_exclusion` | Downstream use | Exclude the consumer's use of electricity and all processes after the declared customer meter. Do not exclude losses or grid stages that occur before that meter. | `epd-pcr-2007-08-v5-0-2` |
| `boundary_cutoff_control` | All included stages | Do not use a cut-off rule to omit a known hazardous, regulated, or potentially material flow. Any screened omission shall be quantified where practicable and disclosed with its expected significance; the retained model shall demonstrate at least 99% coverage of relevant mass, energy, and environmental significance when applying the source PCR's 1% screening rule. | `epd-pcr-2007-08-v5-0-2` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `upstream_supply` | Upstream supply of energy carriers, auxiliaries, water, and services | required | Always included; the applicable input set depends on the declared generation technology or mix | Supply reviewed upstream product and service datasets to the foreground electricity system | Quantities normalized to 1 kWh at the declared reference boundary |
| `electricity_generation` | Electricity generation and plant operation | required | Always included | Convert declared energy resources into net electricity and record plant operation, infrastructure, emissions, wastes, and co-products | Measured net electricity over the reference period, normalized to the reference flow |
| `transmission_distribution` | Transmission and distribution to the declared meter | conditional | Include when the reference boundary is downstream of net plant export | Reconcile network inputs, delivered output, losses, network operation, and grid infrastructure | 1 kWh delivered at the declared voltage and meter |

### Process: Upstream supply of energy carriers, auxiliaries, water, and services (`upstream_supply`)

#### Inputs

##### Product flows

###### Upstream product and service requirements (`upstream_requirements`)

Record each technology-relevant energy carrier, auxiliary material, water supply, purchased electricity, transport service, waste-treatment service, and infrastructure product as a separate linked input. Do not collapse unlike inputs into a generic mass or energy total.

- Selected flow: Dataset-specific reviewed product or service flow
- Flow property / unit: Flow-specific property and unit; energy carriers shall additionally retain the recorded quantity needed for energy conversion
- Amount rule: Sum supplier, invoice, stock-change, and meter records for the reference period; reconcile opening and closing stocks; normalize each input to the reference electricity output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: One kWh at the declared electricity reference boundary
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `epd-pcr-2007-08-v5-0-2`

#### Outputs

##### Product flows

###### Linked upstream supply (`linked_upstream_supply`)

Pass the separately identified upstream products and services, including their reviewed upstream burdens, to the generation or network process without combining their identities.

- Selected flow: Same product or service flows as the linked upstream input datasets
- Flow property / unit: Flow-specific property and unit
- Amount rule: Equal to the reconciled amount required by the receiving foreground process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: One kWh at the declared electricity reference boundary
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_input_records`
- Sources:

### Process: Electricity generation and plant operation (`electricity_generation`)

#### Inputs

##### Product flows

###### Generation energy and auxiliary inputs (`generation_inputs`)

Record each fuel, feed, reactant, purchased electricity, auxiliary material, water input, and operational service that crosses the plant boundary. Natural-energy capture with no purchased quantity is described in technology metadata rather than assigned a fabricated technosphere amount.

- Selected flow: Technology-specific product and service flows
- Flow property / unit: Flow-specific property and unit; fuels shall retain mass or volume and net calorific value needed for energy accounting
- Amount rule: Reconcile supplier, meter, operational, and stock records over the reference period and normalize by net electricity output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Net electricity generated during the same reference period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_generation_inputs`
- Sources: `epd-pcr-2007-08-v5-0-2`; `ipcc-2006-stationary-combustion`

###### Plant own-use electricity (`plant_own_use`)

Record electricity consumed by generation auxiliaries and plant services on the same gross-meter boundary and period used for the output calculation. Separately identify imported electricity and internally generated electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered plant own-use attributable to electricity production; use the co-generation allocation rule when shared with useful heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Net electricity generated during the same reference period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_generation_metering`
- Sources: `epd-pcr-2007-08-v5-0-2`

###### Generation infrastructure and maintenance (`generation_infrastructure`)

Record plant construction, replacement, maintenance, and decommissioning inputs by material or component and amortize them over measured lifetime net generation. Scenario-dependent end-of-life treatment shall be explicit.

- Selected flow: Technology- and site-specific infrastructure, maintenance, and treatment flows
- Flow property / unit: Flow-specific property and unit
- Amount rule: Installed or replaced quantity multiplied by the included life-cycle share and divided by lifetime net generation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Lifetime net electricity generation allocated to the declared product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_infrastructure_records`
- Sources: `epd-pcr-2007-08-v5-0-2`

#### Outputs

##### Product flows

###### Net electricity output (`net_electricity_output`)

This is the quantitative reference at a net plant-export boundary and the network input at a downstream delivery boundary. The generic identity is qualified in the data package; it does not imply a universal technology or geography.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Gross generator output minus measured plant own-use attributable to electricity production; normalize to 1 kWh at plant export or to the amount required for 1 kWh delivered
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_generation_metering`
- Sources: `epd-pcr-2007-08-v5-0-2`
- Range: Reference output identity
  - Range role: Allowed value (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kWh
  - Basis: Net plant-export reference flow when no downstream network is included
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `epd-pcr-2007-08-v5-0-2`

###### Useful co-product output (`useful_coproduct`)

Record useful exported heat, steam, or another co-product separately whenever it leaves the generation process. Do not treat internal heat or rejected heat without a market or useful function as a co-product.

- Selected flow: Co-product-specific product flow
- Flow property / unit: Co-product-specific property and unit
- Amount rule: Metered net co-product delivered outside the process, excluding internal use and unrecovered losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Net electricity generated during the same reference period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_metering`
- Sources: `epd-pcr-2007-08-v5-0-2`

##### Waste flows

###### Operational residues and wastes (`generation_waste`)

Record ash, sludge, spent catalysts, treatment residues, radioactive waste, and other technology-relevant wastes separately by destination and treatment route. A residual with a documented useful product function shall be modelled as a co-product, not simultaneously as waste.

- Selected flow: Waste-specific flow by treatment destination
- Flow property / unit: Mass / kg unless a more appropriate reviewed property is required
- Amount rule: Weighed shipment or reconciled waste record for the reference period, less documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Net electricity generated during the same reference period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `epd-pcr-2007-08-v5-0-2`

##### Elementary flows

###### Direct releases and resource withdrawals (`direct_releases`)

Record measured or calculated releases to air, water, and soil and direct resource withdrawals as separate elementary flows. Combustion emissions may be calculated from fuel energy and a source-backed factor when representative facility measurements are unavailable.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg, or the reviewed flow-specific property and unit
- Amount rule: Prefer facility monitoring; otherwise apply a documented calculation to reconciled activity data and retain factor provenance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Net electricity generated during the same reference period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_releases`
- Sources: `ipcc-2006-stationary-combustion`; `epd-pcr-2007-08-v5-0-2`

### Process: Transmission and distribution to the declared meter (`transmission_distribution`)

#### Inputs

##### Product flows

###### Electricity entering the declared network (`network_input_electricity`)

Record the reconciled electricity entering the included network. For a mix, maintain the identity and kWh share of each source before aggregation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered imports plus included generation, adjusted for stock or storage changes where applicable, required to deliver the reference kWh
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: One kWh delivered at the declared meter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_network_metering`
- Sources: `epd-pcr-2007-08-v5-0-2`

###### Network infrastructure and operation (`network_infrastructure`)

Record substations, lines or cables, transformers, maintenance materials, replacement equipment, operational energy, and decommissioning by the declared network scope and voltage level.

- Selected flow: Network-specific infrastructure, maintenance, energy, and treatment flows
- Flow property / unit: Flow-specific property and unit
- Amount rule: Allocate included asset and operational quantities to electricity delivered over the corresponding asset life or reference period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: One kWh delivered at the declared voltage and meter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_network_records`
- Sources: `epd-pcr-2007-08-v5-0-2`

#### Outputs

##### Product flows

###### Delivered electricity (`delivered_electricity`)

This is the quantitative reference when the declared boundary is a customer meter. Voltage and network scope shall match the loss and infrastructure data.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Fixed at 1 kWh of reconciled metered delivery; required network input is calculated from the measured balance and losses
- Value mode: Fixed value (`fixed_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: Declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: External source (`external_source`)
- Collection protocol:
- Sources: `epd-pcr-2007-08-v5-0-2`
- Range: Reference output identity
  - Range role: Allowed value (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kWh
  - Basis: Delivered electricity at the declared customer meter
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `epd-pcr-2007-08-v5-0-2`

##### Elementary flows

###### Direct network releases (`network_releases`)

Record network-related releases such as insulating-gas leakage or oil releases by substance and compartment when applicable. Zero shall be reported only when supported by a complete inventory boundary and evidence.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg, or the reviewed flow-specific property and unit
- Amount rule: Reconcile monitoring, maintenance, purchase, recovery, and stock records over the reference period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: One kWh delivered at the declared meter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_network_records`
- Sources: `epd-pcr-2007-08-v5-0-2`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Multi-output processes | First avoid allocation by subdividing separately metered processes or by expanding the system only when a reviewed study goal and applicable programme rules permit the substitution claim. Preserve all inputs and outputs without double counting or omission. | `eu-pef-2021-2279`; `epd-pcr-2007-08-v5-0-2` |
| `allocation_physical_then_economic` | Residual multi-output burden | If allocation cannot be avoided, apply a causal physical relationship. Use economic allocation only when a physical relationship cannot reasonably represent burden causality, and disclose prices, reference period, currency, and sensitivity. | `eu-pef-2021-2279`; `epd-pcr-2007-08-v5-0-2` |
| `allocation_chp_alternative_generation` | Combined heat and power | For useful electricity and heat, allocate the shared burden by the Alternative Generation Method: electricity share = (E_net / eta_e) / [(E_net / eta_e) + (H_net / eta_h)]. Use net measured outputs and documented reference efficiencies; assign exclusive equipment 100% to the product it serves and apply the formula only to shared equipment and burdens. | `epd-pcr-2007-08-v5-0-2` |
| `allocation_waste_and_coproduct_identity` | Residues and recovered outputs | Classify each output once. A useful product with a documented function and destination is a co-product; a flow sent for waste treatment is waste. Do not credit an avoided product unless system expansion is explicitly permitted and documented. | `epd-pcr-2007-08-v5-0-2` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_input_records` | `upstream_supply` | Upstream product and service requirements | Supplier, invoice, stock, transport, and service records | flow identity; supplier; quantity; unit; opening stock; closing stock; origin; date; linked dataset | Reconcile purchases, production, stock change, and transfers; retain separate flow identities | Flow-specific | At least monthly, aggregated for reporting | Same representative period as electricity output | All included suppliers and facilities | Sum by identical flow, supplier, geography, and quality; do not net unlike flows | Invoices, meter exports, stock reconciliation, supplier evidence, and dataset links |
| `cp_generation_inputs` | `electricity_generation` | Generation energy and auxiliary inputs | Plant meters, invoices, batch logs, stock records, and laboratory records | flow identity; quantity; unit; NCV where relevant; supplier; meter; timestamp; stock change | Reconcile meter and mass-balance records against production logs | Flow-specific | Continuous or per batch, aggregated monthly | Complete declared reference period | All generating units included in the dataset | Sum consistent records; keep units and technologies separately identifiable before normalization | Calibrated meters, invoices, calibration certificates, stock balance, and responsible-person sign-off |
| `cp_generation_metering` | `electricity_generation` | Gross, own-use, net, and co-generated electricity | Revenue meters, generator meters, and auxiliary meters | meter id; gross output; own use; imports; exports; unit; timestamp; voltage; current form | Use synchronized meter readings and reconcile gross minus attributable own use to net output | kWh | Continuous, aggregated monthly | Complete declared reference period | Every included generator and auxiliary boundary | Sum only readings with aligned boundaries and periods; document replacements and gaps | Meter class, calibration status, raw exports, reconciliation, and gap-filling log |
| `cp_infrastructure_records` | `electricity_generation` | Generation infrastructure and maintenance | Asset register, bills of materials, maintenance and decommissioning plans | asset or material; quantity; unit; commission date; life; replacement; end-of-life route | Reconcile installed and replaced assets to engineering records and amortize over lifetime net generation | Flow-specific | At commissioning and each material change | Asset life, linked to the dataset reference period | All material generation assets inside the declared boundary | Allocate exclusive assets directly; amortize shared assets consistently with section 7 | Asset register, engineering drawings, procurement records, and lifetime rationale |
| `cp_coproduct_metering` | `electricity_generation` | Useful co-product output | Heat, steam, or product meter and delivery records | product identity; net delivered amount; unit; timestamp; customer or destination; internal use | Reconcile gross output, internal use, and external delivery on the same period | Product-specific | Continuous or per shipment, aggregated monthly | Complete declared reference period | Every useful co-product leaving included units | Aggregate by identical product and quality; keep non-useful rejected heat separate | Meter calibration, delivery records, and customer acceptance |
| `cp_waste_records` | `electricity_generation` | Operational residues and wastes | Weighbridge tickets, manifests, laboratory classification, and stock records | waste identity; hazard class; mass; destination; treatment; date; opening and closing stock | Reconcile shipments and stock change; preserve destination and treatment identity | kg | Per shipment, aggregated monthly | Complete declared reference period | All included units and waste stores | Sum only identical waste and treatment routes | Manifests, weighbridge calibration, permits, laboratory results, and contractor receipts |
| `cp_direct_releases` | `electricity_generation` | Direct releases and resource withdrawals | Continuous monitoring, stack tests, water tests, permits, fuel records, and calculation sheets | substance; compartment; amount; unit; method; detection limit; timestamp; activity; factor | Prefer facility measurement; otherwise calculate from reconciled activity and documented representative factors | kg or flow-specific | Continuous, test campaign, or calculation period appropriate to the source | Complete declared reference period, with campaigns shown representative | Every included emission point and direct withdrawal | Sum by substance and compartment; treat non-detects and missing periods explicitly | Calibration, laboratory accreditation, method, factor source, calculation workbook, and coverage statement |
| `cp_network_metering` | `transmission_distribution` | Network input, delivery, import, export, own use, and losses | Boundary and customer meter records | meter id; network level; input; output; import; export; own use; timestamp; voltage | Reconcile the energy balance over identical network scope and time | kWh | Continuous, aggregated monthly | Complete declared reference period | Entire declared network route to the meter | Network input minus delivery, exports, and own use equals accounted losses after documented adjustments | Meter class, calibration, raw exports, reconciliation, and loss-adjustment log |
| `cp_network_records` | `transmission_distribution` | Network assets, maintenance, energy, and releases | Asset register, maintenance logs, gas and oil records, procurement, and decommissioning plans | asset or substance; quantity; unit; voltage; route; life; stock; recovery; release; date | Reconcile assets and substances to the declared voltage and network scope | Flow-specific | At event and annually | Asset life and complete declared reference period | Entire declared network route | Amortize assets over delivered electricity; calculate stock losses from complete opening, purchase, recovery, and closing records | Asset register, maintenance work orders, purchase and recovery records, calibration, and lifetime rationale |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_generation` | `electricity_generation` | Net electricity = gross generator output - plant own-use attributable to electricity. Reconcile imports and exports separately and use aligned meter periods. | gross output; attributable plant own use; imports; exports | net electricity output | `epd-pcr-2007-08-v5-0-2` |
| `calc_delivery_balance` | `transmission_distribution` | Accounted network loss = network input + imports - exports - delivered electricity - network own use - storage increase + storage decrease. Scale generation and upstream burdens to the network input needed for 1 kWh delivered. | network input; imports; exports; delivered electricity; own use; storage change | loss and required input per delivered kWh | `epd-pcr-2007-08-v5-0-2` |
| `calc_inventory_normalization` | All foreground inventory rows | Normalized amount = reconciled period amount / reference-period net or delivered electricity, then multiplied by 1 kWh. Keep calculation precision and round only reported values. | reconciled flow amount; reference-period electricity output | flow amount per reference kWh | `epd-pcr-2007-08-v5-0-2` |
| `calc_combustion_emissions` | Fuel combustion direct releases | For each fuel and GHG, emission = fuel consumption on a net-calorific-value energy basis x representative emission factor. Prefer facility measurements and technology-specific factors; retain fuel, NCV, factor, oxidation or control assumptions, and units. | fuel quantity; net calorific value; emission factor; measurement or control parameters | emission by substance | `ipcc-2006-stationary-combustion` |
| `calc_generation_mix` | Multi-source electricity | Mix inventory = sum of each constituent inventory x its measured kWh share. Shares use the same net-generation or delivered basis and period and sum to 100% after documented rounding. | constituent inventories; constituent kWh; total kWh | declared electricity-mix inventory | `eu-pef-2021-2279`; `epd-pcr-2007-08-v5-0-2` |
| `calc_chp_allocation` | Combined heat and power | Electricity allocation share = (E_net / eta_e) / [(E_net / eta_e) + (H_net / eta_h)]. Apply the complementary share to useful heat; allocate exclusive assets directly. | net electricity; net useful heat; reference electrical efficiency; reference thermal efficiency | burden shares for electricity and useful heat | `epd-pcr-2007-08-v5-0-2` |
| `calc_infrastructure_amortization` | Generation and network infrastructure | Per-kWh infrastructure amount = included asset quantity x allocation share / lifetime net generation or lifetime delivered electricity corresponding to that asset. | asset quantity; included life-cycle share; allocation share; lifetime electricity | infrastructure amount per kWh | `epd-pcr-2007-08-v5-0-2` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | All foreground data | Use a complete and representative reference period, normally one year. Explain outages, abnormal dispatch, curtailment, seasonal bias, estimated gaps, and any shorter period. | Timestamped raw records, coverage table, operating log, and representativeness rationale |
| `dq_geographical` | Generation mix, fuel supply, and networks | Match the declared plant, supplier, country or sub-national grid, and voltage. For China, prefer a representative sub-national grid mix when the delivery scope is grid electricity. | Facility and meter locations, supplier evidence, grid boundary, and geographic dataset metadata |
| `dq_technological` | Generation and control technology | Match fuel, conversion technology, unit efficiency, pollution controls, storage, infrastructure, and operating mode; do not use a narrow technology process as a universal CPC 17100 default. | Unit configuration, process description, permits, commissioning year, and technology-specific dataset metadata |
| `dq_metering_and_balance` | Electricity and co-product quantities | Use calibrated or legally controlled meters where applicable and demonstrate gross-to-net, network, and co-product balances on aligned boundaries and periods. | Calibration evidence, raw meter exports, reconciliation workbook, and signed exception log |
| `dq_source_traceability` | Secondary datasets, factors, and contractual attributes | Record source, version or date, geography, technology, licence or access, selection rationale, and any modification. Supplier-specific electricity claims require qualifying contractual or tracking evidence and prevention of double counting. | Dataset metadata, factor sheets, contracts or instruments, quality-criteria assessment, and residual-mix check |
| `dq_completeness` | Inventory boundary | Include all known material, energy, emission, waste, infrastructure, and delivery stages required by section 5. Quantify and justify omissions and explain zero values. | Completeness checklist, mass and energy balances, permit comparison, and omission log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm that the product flow, flow property, unit group, and kWh unit match section 3; confirm all required qualifiers and the CPC 17100 boundary are declared. | `un-cpc-3-0`; `tiangong-identity-query` |
| `validate_energy_balance` | Generation and delivery | Confirm gross minus attributable plant own-use equals net generation, and confirm the delivery balance closes within documented meter uncertainty. Reject mixed periods, voltage scopes, or gross/net bases. | `epd-pcr-2007-08-v5-0-2` |
| `validate_mix_and_attributes` | Electricity mix | Confirm constituent kWh shares sum to 100%, each constituent has compatible boundaries and periods, and contractual attributes are not counted in both supplier-specific and residual/grid mixes. | `eu-pef-2021-2279`; `ghg-protocol-scope-2` |
| `validate_inventory_completeness` | System boundary and inventory | Reconcile fuel and auxiliary records, direct releases, wastes, plant infrastructure, and conditional network stages against permits, meters, asset records, and the completeness statement. | `epd-pcr-2007-08-v5-0-2`; `iea-energy-statistics-manual` |
| `validate_allocation` | Multi-output processes | Confirm the allocation hierarchy is followed, all inputs and outputs are conserved, CHP formula inputs are documented, exclusive equipment is assigned directly, and sensitivity is disclosed for consequential choices. | `eu-pef-2021-2279`; `epd-pcr-2007-08-v5-0-2` |
| `validate_sources_and_period` | Evidence package | Confirm every secondary dataset and factor is identifiable and representative, the foreground reference period is complete, estimates and data gaps are visible, and confidential records remain auditable. | `iea-energy-statistics-manual`; `ghg-protocol-scope-2` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for generation or delivery of electrical energy; after review it may support a process, lifecycle model, secondary dataset, or background electricity dataset |
| downstream_use | Product and organizational LCA, footprinting, supply-chain modelling, energy-system studies, and downstream process inventories requiring electricity at a declared boundary |
| allowed_use | Use when generation technology or mix, geography or supplier, voltage, reference boundary, period, losses, infrastructure, and contractual attributes match the study |
| excluded_use | Do not use as an undeclared global average, as a substitute for a route- or voltage-specific dataset, for electricity-use processes beyond the meter, or for supplier-specific claims without qualifying contractual evidence |
| required_metadata | PCR id; CPC 17100; flow UUID; technology or mix and shares; geography, grid, or supplier; current form; voltage; reference boundary; reference period; net or delivered basis; loss and infrastructure scope; co-products and allocation; data sources and versions |
| required_quality_disclosure | Meter coverage and calibration; data gaps and estimation; temporal, geographical, and technological representativeness; energy balances; cut-offs; allocation; uncertainty or sensitivity; contractual-instrument and residual-mix treatment |
| update_trigger | Material change in generation technology, fuel or resource supply, mix shares, plant performance, pollution control, grid route or voltage, losses, infrastructure, co-products, allocation, emission factors, contractual instruments, or reference period |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | Standard (`standard`) | United Nations Statistics Division, Central Product Classification Version 3.0, class 17100 Electrical energy, https://unstats.un.org/unsd/classifications/Econ/cpc | Product-category identity and category boundary |
| `epd-pcr-2007-08-v5-0-2` | Standard (`standard`) | EPD International, PCR 2007:08 Electricity, steam and hot/cold water generation and distribution, version 5.0.2, 2026-05-04, https://www.environdec.com/pcr-library/pcr2007-08 | Functional unit, boundary, infrastructure, losses, data requirements, allocation, and validation rules |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 | Electricity-mix hierarchy, residual mix and double-counting controls, and allocation hierarchy |
| `ipcc-2006-stationary-combustion` | Official guidance (`official_guidance`) | IPCC 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 2 Stationary Combustion, https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | Fuel-energy conversion and direct-combustion emission calculation method |
| `ghg-protocol-scope-2` | Standard (`standard`) | GHG Protocol Scope 2 Guidance, https://ghgprotocol.org/scope-2-guidance | Contractual-instrument quality, supplier-specific claims, disclosure, and double-counting controls |
| `iea-energy-statistics-manual` | Handbook (`handbook`) | International Energy Agency, Energy Statistics Manual, https://www.iea.org/reports/energy-statistics-manual | Energy-balance completeness, source consistency, and statistical data-quality checks |
| `tiangong-identity-query` | Dataset (`dataset`) | TianGong LCA data service queried with the sibling tiangong-cli; public flow, flow-property, unit-group, and process records checked at authoring time | Identity evidence only; no database version is pinned and no process amount is adopted as a universal default |
