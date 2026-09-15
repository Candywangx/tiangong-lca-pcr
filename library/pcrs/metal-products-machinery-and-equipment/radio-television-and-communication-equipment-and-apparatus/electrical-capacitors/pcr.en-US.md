---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-capacitors
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Electrical capacitors

## 1. Scope and Applicability

This PCR defines foreground production data for discrete electrical capacitors supplied as tested components. Its worked inventory covers multilayer ceramic, wet aluminum-electrolytic and metallized polypropylene film routes. Dielectric design, rated voltage, capacitance, yield and thermal processing distinguish this category from generic electronic assembly. The category includes fixed and variable capacitors, but an unlisted route requires its own verified process extension before a dataset is claimed complete. Batteries, bare capacitor parts sold separately, and complete power-conversion equipment are outside the reference product. CPC identity is supported by `un-cpc-3-0-structure-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-capacitors |
| classification_refs | CPC 3.0:47110 |
| covered_products | Discrete fixed and variable electrical capacitors; route-specific foreground packages |
| excluded_products | Batteries; separately sold parts; capacitor-bank control equipment; complete electronic apparatus |
| representative_product | A tested capacitor of one declared dielectric and electrical rating |
| production_route | Ceramic sheet/electrode processing and firing; formed-foil winding and impregnation; metallized-film winding; route-specific termination and inspection |
| market_state | Conforming factory-gate component, dry external surface, electrically discharged; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared capacitance function as an intermediate component |
| How much | 1 kg net conforming capacitors of one declared product specification |
| How well | Declare capacitance, tolerance, rated AC/DC voltage, ESR or dissipation factor, leakage, dielectric class and test temperature/frequency |
| How long or cycle | One factory-gate delivery; service life is not inferred. A use-stage extension must declare duty cycle, temperature, lifetime and replacement rate. |
| reference_flow_link | Normalize accepted batch output to 1 kg; mass is an intermediate-product declared unit and does not establish functional equivalence between designs. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | capacitor `df93339b-f27d-4f3e-b672-9d2ef0c536f6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dielectric and electrolyte identity; fixed/variable design; capacitance and tolerance; rated voltage AC/DC; ESR/leakage test conditions; dimensions and net item mass; route and purchased-material state; supplier and site geography; production period; yield; boundary and upstream coverage |

Declare every qualifier in the data package. The intermediate-product reference convention follows `ghg-protocol-product-standard-2011`; route-specific performance descriptors follow `nichicon-aluminum-technical-notes` and `tdk-film-capacitors-primer`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net component mass, excluding packaging; count conversion uses measured batch mean item mass. |
| energy_basis | electricity and fuel | Net calorific value | MJ | Convert metered kWh to MJ using 3.6 MJ/kWh; retain natural gas volume and reference conditions separately. |
| formulation_mass | paste and electrolyte | Mass | kg | Record supplied formulation mass; do not equate metal, solids or active salt mass to purchased mixture mass. |
| water_basis | water and liquid waste | Mass | kg | A volume-to-mass conversion requires measured density and temperature; wastewater pollutant mass is separate from wet stream mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | Include all on-site attributable production, rejects, thermal treatment, clean-room demand, testing, packing and waste transfers from the declared purchased-material state to accepted output. | `ghg-protocol-product-standard-2011` |
| boundary_upstream | upstream | Link upstream production and delivery datasets for each purchased material and energy input. Green-tape manufacture, foil etching/forming and film metallization must be upstream or explicitly foreground, never omitted or counted twice. | `murata-mlcc-production-2011`, `nichicon-aluminum-technical-notes`, `tdk-film-capacitors-primer` |
| boundary_extensions | completeness | The cards are route anchors, not a cut-off list. Reconcile the BOM, purchases and emissions register; add one atomic exchange for every actual omitted constituent, carrier film, plating salt, solvent emission, treatment chemical, fuel or waste. Other dielectrics, variable and double-layer designs require verified route extensions; do not transfer these route inventories by mass alone. | `ghg-protocol-product-standard-2011` |
| boundary_partial | downstream | Report factory production separately from cradle-to-gate results. Default production excludes use and end-of-life of the sold capacitor; an extended life-cycle model declares those scenarios separately. | `ghg-protocol-product-standard-2011` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased green ceramic tape, electrode pastes, formed anode foil, etched cathode foil, separator paper, formulated electrolyte or metallized film at documented delivery state |
| starting_condition_role | Foreground entry condition; not an upstream burden exemption |
| product_classification_scope | CPC 3.0:47110; parts separately identified |
| recursive_input_rule | Purchased capacitors for rework retain a separate supplied-state upstream dataset; do not recursively apply the same finished-output process. Internal rework is a measured loop, with additional energy and losses. |
| upstream_dataset_requirement | Document supplier technology, geography, period, material state and excluded operations for every linked dataset |
| disclosure | Declare gate location, make/buy split, outsourced steps, transport, treatment boundary, exclusions and extension coverage |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ceramic | Ceramic chip fabrication | conditional | Ceramic dielectric route | foreground production | per 1 kg accepted capacitor output |
| electrolytic | Aluminum electrolytic element fabrication | conditional | Wet aluminum electrolytic route | foreground production | per 1 kg accepted capacitor output |
| film_winding | Film element fabrication | conditional | Metallized polypropylene film route | foreground production | per 1 kg accepted capacitor output |
| finishing | Termination, assembly, testing and packing | required | All declared routes | foreground production | per 1 kg accepted capacitor output |
| utilities | Metered site services and direct combustion | required | All declared routes; gas only where combusted | foreground production | per 1 kg accepted capacitor output |

### Process: Ceramic chip fabrication (`ceramic`)

#### Inputs

##### Product flows

###### Barium titanate green ceramic tape (`ceramic_tape`)

Barium-titanate tape route: record purchased tape mass, binder content and thickness; exclude removable carrier from tape mass.

- Selected flow: Barium titanate green ceramic tape
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ceramic`
- Sources: `murata-mlcc-production-2011`

###### Nickel electrode paste (`nickel_paste`)

Nickel internal electrode route: weigh formulated paste issued less returns, with metal and solvent fractions.

- Selected flow: Nickel electrode paste
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ceramic`
- Sources: `murata-mlcc-production-2011`

###### Copper electrode paste (`copper_paste`)

Copper external electrode route: weigh wet paste consumption; distinguish applied solids from evaporated solvent.

- Selected flow: Copper electrode paste
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ceramic`
- Sources: `murata-mlcc-production-2011`

#### Outputs

##### Waste flows

###### Rejected multilayer ceramic capacitor (`ceramic_reject`)

When ceramic rejects leave for treatment: weigh fired rejected chips separately from unfired tape trim; identify metal content and destination.

- Selected flow: Rejected multilayer ceramic capacitor
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ceramic`
- Sources: `murata-mlcc-production-2011`

### Process: Aluminum electrolytic element fabrication (`electrolytic`)

#### Inputs

##### Product flows

###### Formed aluminum anode foil for capacitor (`anode_foil`)

Wet aluminum route: weigh oxide-formed anode foil; record purity, thickness, forming voltage and supplier etching/forming coverage.

- Selected flow: Formed aluminum anode foil for capacitor
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrolytic`
- Sources: `nichicon-aluminum-technical-notes`

###### Etched aluminum foil (`cathode_foil`)

Wet aluminum route: weigh etched foil used as cathode; declare thickness, purity, etch state and any subsequent formation.

- Selected flow: Al coil of etched foil `7e6ef577-653b-4ef1-9b41-74f1e31c2ff3`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrolytic`
- Sources: `nichicon-aluminum-technical-notes`

###### Capacitor separator paper (`paper`)

Wet aluminum route: weigh dry separator paper by grade, moisture and roll state; do not substitute battery polymer separator.

- Selected flow: Capacitor separator paper
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrolytic`
- Sources: `nichicon-aluminum-technical-notes`

###### Liquid aluminum-capacitor electrolyte (`electrolyte`)

Liquid impregnation route: weigh one purchased electrolyte formulation per record and retain supplier formulation/SDS identity, solvent, salts and concentrations. Distinct formulations require distinct exchanges.

- Selected flow: Liquid aluminum-capacitor electrolyte
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrolytic`
- Sources: `nichicon-aluminum-technical-notes`

#### Outputs

##### Waste flows

###### Aluminum foil scrap (`aluminum_scrap`)

Where foil trim is removed: weigh segregated aluminum foil scrap, report contamination and recycler receipt; internal recirculation is not a new purchased input.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrolytic`
- Sources: `nichicon-aluminum-technical-notes`

###### Spent aluminum-capacitor electrolyte (`spent_electrolyte`)

When spent impregnation liquid is discharged: weigh separately from rinse water, declare composition, hazard classification and treatment destination.

- Selected flow: Spent aluminum-capacitor electrolyte
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrolytic`
- Sources: `nichicon-aluminum-technical-notes`

### Process: Film element fabrication (`film_winding`)

#### Inputs

##### Product flows

###### Metallized polypropylene capacitor film (`film`)

Metallized PP route: measure film consumption with polymer thickness and electrode metal mass; supplier dataset must include metallization.

- Selected flow: Metallized polypropylene capacitor film
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_film_winding`
- Sources: `tdk-film-capacitors-primer`

#### Outputs

##### Waste flows

###### Metallized polypropylene film scrap (`film_scrap`)

When slitting or winding trim leaves: weigh metallized PP scrap; record metal coating, contamination and destination.

- Selected flow: Metallized polypropylene film scrap
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_film_winding`
- Sources: `tdk-film-capacitors-primer`

### Process: Termination, assembly, testing and packing (`finishing`)

#### Inputs

##### Product flows

###### Tinned copper wire (`wire`)

Where lead wires are fitted: weigh purchased tinned copper wire including coating; record diameter and reject losses.

- Selected flow: Tinned copper wire
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `tdk-film-capacitors-primer`

###### Aluminum capacitor can (`can`)

Where aluminum cans are fitted: record empty formed can mass and count, coating state and supplier forming coverage.

- Selected flow: Aluminum capacitor can
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `nichicon-aluminum-technical-notes`

###### Butyl rubber capacitor seal (`seal`)

Only where the BOM specifies a butyl-rubber end seal: weigh the finished seal, retaining compound and curing specification.

- Selected flow: Butyl rubber capacitor seal
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `nichicon-aluminum-technical-notes`

###### Epoxy resin (`epoxy`)

Where epoxy encapsulation is used: weigh resin consumption and retain formulation; collect hardener as its own chemical exchange if supplied separately.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

###### Nickel (`nickel`)

Where nickel plating uses soluble nickel anodes: weigh net nickel anode consumption; bath salts and additives require separate species records.

- Selected flow: Nickel
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `murata-mlcc-production-2011`

###### Tin (`tin`)

Where tin plating uses soluble tin anodes: weigh net tin consumption; do not infer it from finished coating alone.

- Selected flow: Tin
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `murata-mlcc-production-2011`

###### Corrugated cardboard box (`box`)

Where cardboard shipping boxes are used: weigh empty boxes and allocate to shipped conforming capacitor mass; collect carrier tape/reels separately when present.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

#### Outputs

##### Product flows

###### capacitor (`finished_capacitor`)

All routes: record net mass and count of accepted tested capacitors; exclude packaging and failed units; retain capacitance, voltage and test conditions.

- Selected flow: capacitor `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `ghg-protocol-product-standard-2011`

##### Waste flows

###### Nickel plating wastewater (`plating_water`)

Only when nickel-plating wastewater is transferred to treatment: measure wet mass and nickel concentration; distinguish treatment transfer from final elementary discharge.

- Selected flow: Nickel plating wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

### Process: Metered site services and direct combustion (`utilities`)

#### Inputs

##### Product flows

###### Electricity (`electricity`)

All routes: meter electricity for production, thermal processing, clean rooms, compressed air, aging and testing; reconcile shared services without duplicate allocation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ghg-protocol-product-standard-2011`

###### Process Water (`process_water`)

Where water is supplied: meter fresh process water, distinguish makeup from recirculation and record treatment quality.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ghg-protocol-product-standard-2011`

###### natural gas in the gaseous state (`natural_gas`)

Only for on-site gas combustion: meter supplied volume at declared temperature and pressure, with composition and heating-value basis.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Flow property UUID: `93a60a56-a3c8-22da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ghg-protocol-product-standard-2011`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only for direct fossil-carbon oxidation: collect measured stack CO2 or calculate from measured fuel carbon with oxidation and carbon-retention records. Exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity specified above and divide by accepted net batch output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted capacitor output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ghg-protocol-product-standard-2011`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | Use submetering and batch segregation first. If unavoidable, allocate shared burden by measured causal drivers such as furnace occupancy or machine time, documenting the physical relationship. | `ghg-protocol-product-standard-2011` |
| allocation_fallback | coproducts | Use economic or another justified relationship only where physical allocation cannot be established; retain prices, period and sensitivity. Do not pool unlike capacitor ratings solely by item count. | `ghg-protocol-product-standard-2011` |
| allocation_rejects | rework_and_scrap | Accepted output bears production and reject-treatment demand. Account internal rework without duplicate virgin input. Report exported scrap mass and recycling convention explicitly; no automatic avoided-virgin credit. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ceramic | ceramic | individual exchanges and yield | primary batch ledger | row id; material grade; opening/closing stock; receipts; returns; meter readings; net accepted mass; rejects; work in progress; test conditions; supplier transport distance and mode | Calibrated scales/meters, BOM reconciliation, supplier certificates and treatment manifests; record each substance separately | kg; MJ; m3 with reference conditions | Each batch and meter interval | Declare a representative continuous production period including start-up, idle and seasonal conditions | Declared site, line and outsourced stage | Sum reconciled quantities for the same product route; divide by accepted net output, retaining allocation and inventory changes | Calibration; invoices; BOM; test certificates; yield and mass-balance reconciliation |
| cp_electrolytic | electrolytic | individual exchanges and yield | primary batch ledger | row id; material grade; opening/closing stock; receipts; returns; meter readings; net accepted mass; rejects; work in progress; test conditions; supplier transport distance and mode | Calibrated scales/meters, BOM reconciliation, supplier certificates and treatment manifests; record each substance separately | kg; MJ; m3 with reference conditions | Each batch and meter interval | Declare a representative continuous production period including start-up, idle and seasonal conditions | Declared site, line and outsourced stage | Sum reconciled quantities for the same product route; divide by accepted net output, retaining allocation and inventory changes | Calibration; invoices; BOM; test certificates; yield and mass-balance reconciliation |
| cp_film_winding | film_winding | individual exchanges and yield | primary batch ledger | row id; material grade; opening/closing stock; receipts; returns; meter readings; net accepted mass; rejects; work in progress; test conditions; supplier transport distance and mode | Calibrated scales/meters, BOM reconciliation, supplier certificates and treatment manifests; record each substance separately | kg; MJ; m3 with reference conditions | Each batch and meter interval | Declare a representative continuous production period including start-up, idle and seasonal conditions | Declared site, line and outsourced stage | Sum reconciled quantities for the same product route; divide by accepted net output, retaining allocation and inventory changes | Calibration; invoices; BOM; test certificates; yield and mass-balance reconciliation |
| cp_finishing | finishing | individual exchanges and yield | primary batch ledger | row id; material grade; opening/closing stock; receipts; returns; meter readings; net accepted mass; rejects; work in progress; test conditions; supplier transport distance and mode | Calibrated scales/meters, BOM reconciliation, supplier certificates and treatment manifests; record each substance separately | kg; MJ; m3 with reference conditions | Each batch and meter interval | Declare a representative continuous production period including start-up, idle and seasonal conditions | Declared site, line and outsourced stage | Sum reconciled quantities for the same product route; divide by accepted net output, retaining allocation and inventory changes | Calibration; invoices; BOM; test certificates; yield and mass-balance reconciliation |
| cp_utilities | utilities | individual exchanges and yield | primary batch ledger | row id; material grade; opening/closing stock; receipts; returns; meter readings; net accepted mass; rejects; work in progress; test conditions; supplier transport distance and mode | Calibrated scales/meters, BOM reconciliation, supplier certificates and treatment manifests; record each substance separately | kg; MJ; m3 with reference conditions | Each batch and meter interval | Declare a representative continuous production period including start-up, idle and seasonal conditions | Declared site, line and outsourced stage | Sum reconciled quantities for the same product route; divide by accepted net output, retaining allocation and inventory changes | Calibration; invoices; BOM; test certificates; yield and mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | each inventory row | q_i = Q_i / M_good; M_good must be positive. Q_i is net consumption or measured output over the same period. | Q_i; M_good | quantity per kg |  |
| stock_balance | purchased material | Net consumed = opening stock + receipts - closing stock - external returns; identify work-in-progress changes. | stock ledger | Q_i |  |
| count_mass | reference output | Net mass = accepted count × measured mean item mass; retain sample plan and variation. | count; weighed sample | M_good |  |
| fuel_carbon | direct CO2 | Use measured stack mass or fuel carbon balance with measured oxidation and retained carbon. Identify any factor source explicitly; upstream grid CO2 is not direct stack CO2. | stack or fuel-carbon records | direct fossil CO2 | `ghg-protocol-product-standard-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all materials | Retain exact grade, supplied state, composition and provenance; no substitution of generic metal for processed foil or paste. | supplier certificates and BOM |
| dq_completeness | site inventory | Reconcile all materials, energy, rejects and emission species. Record absent conditional flows as not applicable with evidence; unknown is not zero. | purchase, emission and treatment registers |
| dq_quality | measurements and upstream data | Disclose time, geography, technology, uncertainty, calibration and coverage; prioritize primary records for controlled operations. | `ghg-protocol-product-standard-2011` |
| dq_performance | comparability | Comparison requires equivalent electrical service and lifetime assumptions; mass-normalized values alone do not establish equivalence. | electrical tests and functional specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_flow | Require all reference qualifiers, positive accepted output, consistent unit conversion and net mass excluding packaging. | `ghg-protocol-product-standard-2011` |
| validate_route | process_inventory | Every included process must have records; verify conditional-route applicability and all site-specific extensions. Missing process chemistry or unreviewed route extensions make completeness inconclusive. | `ghg-protocol-product-standard-2011` |
| validate_balance | amounts | Reconcile material, metal, solvent and energy ledgers within stated measurement uncertainty. Explain discrepancies and reject rates; no universal literature yield threshold applies. |  |
| validate_links | upstream_and_waste | Reject double counting of supplier processing, internal transfers, waste treatment and grid emissions. Unresolved UUIDs require explicit disclosure and must not be replaced with proxies silently. | `ghg-protocol-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route-qualified capacitor production input to process or lifecyclemodel with explicit upstream coverage |
| excluded_use | Unqualified cross-dielectric comparisons; full life-cycle claims from gate-only data; application to unverified routes |
| required_metadata | Product specification; reference qualifiers; site; period; process map; starting states; suppliers; units; allocation and transport |
| required_quality_disclosure | Measurement uncertainty; source coverage; unresolved identities; omitted operations; range-evidence limitations and route extensions |
| update_trigger | Changes in dielectric, supplier state, energy supply, yield, plating chemistry, formulation or electrical rating |

## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-09; independence_key: un-cpc-3-0-structure-2025 | CPC 47110 identity; 47171 separates parts |
| murata-mlcc-production-2011 | literature | Murata, Basics of capacitors, Lesson 3, 28 June 2011; https://article.murata.com/en-eu/article/basics-of-capacitors-3; retrieved 2026-09-09; independence_key: murata-basics-capacitors-lesson-3-2011 | Ceramic sheet, electrode, firing, termination and inspection sequence |
| nichicon-aluminum-technical-notes | handbook | Nichicon, General Descriptions of Aluminum Electrolytic Capacitors, sections 1-3 to 1-6, PDF pages 3-6; https://www.nichicon.co.jp/english/products/pdf/aluminum-e.pdf; retrieved 2026-09-09; independence_key: nichicon-aluminum-technical-notes | Formed and etched foil, separator, impregnation, housing, aging and electrical characterization |
| tdk-film-capacitors-primer | literature | TDK, Capacitors Part 4, Film Capacitors [1], construction section; https://www.tdk.com/en/tech-mag/electronics_primer/7; retrieved 2026-09-09; independence_key: tdk-electronics-primer-7 | Film dielectric, metallized versus foil electrodes, wound and laminated construction |
| ghg-protocol-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 6-9 and summary pages 14-15; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-09-09; independence_key: wri-wbcsd-product-standard-2011 | Intermediate-product reference flow, partial boundary, primary collection and allocation hierarchy; GHG method support only |
