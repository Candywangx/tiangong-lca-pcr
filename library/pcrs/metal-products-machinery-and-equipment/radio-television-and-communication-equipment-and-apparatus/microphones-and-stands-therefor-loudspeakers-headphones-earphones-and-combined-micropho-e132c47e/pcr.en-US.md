---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.microphones-and-stands-therefor-loudspeakers-headphones-earphones-and-combined-micropho-e132c47e
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Microphones and stands therefor; loudspeakers; headphones, earphones and combined microphone/speaker sets; audio-frequency electric amplifiers; electric sound amplifier sets

## 1. Scope and Applicability

This PCR covers standalone sound transducers, microphone stands, audio-frequency amplifiers and integrated sound amplification sets. A device that primarily records or plays stored media, receives broadcast radio/television, or performs telecommunications belongs to its own category. Connectivity alone does not decide identity: disclose the principal function and supplied configuration. Classification membership follows `un-cpc-3-0-structure-2025`.

The common methodology is component receipt, electromechanical assembly, function-specific acceptance testing and packing. The detailed inventory represents a passive full-range loudspeaker with a purchased finished MDF enclosure, supplied driver, soldered connections and polyester acoustic wadding. It is a collection design, not a universal bill of materials or a VISATON/Genelec product dataset. `visaton-solo-20-construction` and `genelec-recycling-materials` support the assembly architecture; component-boundary separation is supported by `miljogiraff-transparent-light-speaker-2022`.

For another covered member, instantiate its own reference product and atomic bill of materials before collecting data. Retain common processes once and document non-applicable representative rows. Microphones require capsule, mounting and sensitivity/polar-pattern evidence; headphones require transducers, wearing structure and declared channels; amplifiers require populated electronics, power supply, output load and efficiency evidence; microphone stands require load, adjustment and stability evidence without fictitious electrical consumption. Multiway or active speakers require each actual crossover, amplifier or battery subassembly as its own exchange. No representative amount transfers automatically to another design.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.microphones-and-stands-therefor-loudspeakers-headphones-earphones-and-combined-micropho-e132c47e |
| classification_refs | CPC 3.0: 47330; semantic scope reference, pending central mapping acceptance |
| covered_products | Microphones and dedicated stands; loudspeakers; headphones, earphones and microphone/speaker sets; audio-frequency electric amplifiers and electric sound amplifier sets |
| excluded_products | Stored-media recording/playback apparatus; broadcast receivers; telecommunications devices; hearing aids; separately traded unfinished parts other than complete transducers |
| representative_product | Passive full-range loudspeaker in finished MDF enclosure |
| production_route | Purchased finished components; wiring and soldering; assembly; acoustic/electrical test; packing |
| market_state | New, tested, saleable factory-gate product; packaging separately inventoried |


The Chinese title is an authored translation checked against the official Chinese HS 8518 terminology in `china-rcep-tariff-japan-hs8518`. This is terminology evidence, not a new accepted classification mapping.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared passive loudspeaker design for electrical-to-acoustic conversion |
| How much | 1 kg net released product, equivalent to 1 / m_unit units where m_unit is measured kg per unit |
| How well | Declare bandwidth, rated impedance, sensitivity, distortion and test signal/level/distance/room; meet the documented model-specific acceptance specification |
| How long or cycle | One completed production campaign to factory gate; downstream service life and use profile must be declared separately, with no default years |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Passive loudspeaker in MDF enclosure |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Product subtype and model; principal function; active/passive; standalone driver/enclosed unit; mono/stereo/set composition; net mass per unit; supplied accessories; driver count and type; enclosure and magnet composition; performance/test conditions; assembly site and campaign; purchased-component starting condition; packaging scope; supplier boundaries; repair and intended service-life evidence |


This production module uses a declared mass unit. Mass alone does not establish equivalent audio service. A downstream comparison must specify product count, acoustic/electrical performance, listening duty, service life, repair and all remaining life-cycle stages. Required qualifiers shall be present in dataset metadata or linked technical records; absent qualifiers make the reference object incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_net_mass | reference_product | Mass | kg | Use M_good excluding packaging as the denominator; count-to-mass conversion is model-specific and must not mix pairs, sets and individual units. |
| mu_energy | electricity | Net calorific value | MJ | Convert measured kWh to MJ by multiplication by 3.6. Rated amplifier watts are not consumed energy; use wall-meter energy over time, including standby during the recorded factory test. |
| mu_components | component inputs | Mass | kg | Use as-supplied component mass. Never add both a complete driver and its constituent magnet/coil upstream burdens; declare moisture for MDF and gross versus dry flux mass. |
| mu_test_basis | performance records | Declared acoustic/electrical properties | declared test units | Store stimulus, fixture, distance, environment and calibration alongside results. IEC 60268-21 public scope supports physical acoustic testing, not a universal sound-quality pass level. |



## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered complete driver and finished enclosure, wiring, fixing and filling items at the assembly site |
| starting_condition_role | foreground component-assembly entry state |
| product_classification_scope | Standalone transducers, microphone stands and audio amplification products; no stored-media playback or receiver substitution |
| recursive_input_rule | A purchased complete driver within the category is an input with a separate supplier dataset. Stop foreground recursion at that declared delivered state; do not link the final product dataset back to itself. |
| upstream_dataset_requirement | Link each purchased exchange to cradle-to-delivered component/material/energy supply evidence, including component manufacture and transport. Inventory identity alone is not a supply dataset. |
| disclosure | Declare outsourced versus site operations, all unlinked upstream stages, waste destinations, infrastructure treatment and exclusions. A foreground-only result is gate-to-gate, not cradle-to-gate or cradle-to-grave. |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_production | foreground_boundary | Include receipt, wiring, joining, mounting, damping installation, testing, retesting, rework and packing actually performed. Purchased cabinet manufacture remains in its supplier boundary; in-house cabinet manufacture requires an explicit additional process. | visaton-solo-20-construction; miljogiraff-transparent-light-speaker-2022 |
| sb_lifecycle | downstream_use | This PCR delivers a production module. Distribution, customer use, repairs and end of life must be linked before a complete life-cycle claim; identify every exclusion and its significance. | ec-environmental-footprint-2021 |
| sb_waste | waste_boundary | Record production waste at the handover point and link appropriate treatment; distinguish waste disposal from saleable coproducts and from internal rework. Retain component separation information for downstream recovery. | genelec-recycling-materials |
| sb_double_count | upstream_and_direct_flows | Keep background supply emissions in their linked datasets; add only measured or calculated site emissions to foreground elementary flows. Keep upstream, factory-test and customer-use electricity separate. | ec-environmental-footprint-2021 |



## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Component assembly and joining | required | Declared product uses the representative assembly route | foreground production | assembled product before final test |
| test_pack | Acceptance testing and packing | required | All released units; testing follows actual function | foreground testing and packing | 1 kg net released product |


All amounts use the same production campaign and are normalized to released product mass. Conditional absence is supported by the actual route record, never by a missing measurement. The inventory is not permission to omit identified exchanges: additional purchased components, cuttings, film waste, cleaning agents or individual direct emissions shall each be instantiated as one physical or chemical row when they cross the foreground boundary. For emissions, record species, compartment, measurement and capture efficiency; a summed “soldering fumes” flow is not acceptable. No combustion or wet cleaning is assumed for the representative route.

### Process: Component assembly and joining (`assembly`)

#### Inputs

##### Product flows

###### Electrodynamic loudspeaker driver (`driver`)

Weigh the supplied complete driver; include its magnet, coil, diaphragm and frame once.

- Selected flow: Electrodynamic loudspeaker driver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the supplied complete driver; include its magnet, coil, diaphragm and frame once. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Finished MDF loudspeaker enclosure with terminal cup (`enclosure`)

Weigh the finished enclosure including integral finish and terminal cup; obtain its supplier composition and processing boundary.

- Selected flow: Finished MDF loudspeaker enclosure with terminal cup
- Flow property / unit: Mass / kg
- Amount rule: Weigh the finished enclosure including integral finish and terminal cup; obtain its supplier composition and processing boundary. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Insulated copper speaker cable (`connection_cable`)

Record actual cut cable mass including insulation; length conversion requires measured mass per length.

- Selected flow: Insulated copper speaker cable
- Flow property / unit: Mass / kg
- Amount rule: Record actual cut cable mass including insulation; length conversion requires measured mass per length. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Steel screw (`steel_screws`)

Count issued screws minus returns and multiply by verified screw mass; declare grade and coating.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Count issued screws minus returns and multiply by verified screw mass; declare grade and coating. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Polyester fibre acoustic wadding (`acoustic_wadding`)

Weigh the installed uncoated acoustic mat and separately reconcile cutting losses; record fibre and binder composition.

- Selected flow: Polyester fibre acoustic wadding
- Flow property / unit: Mass / kg
- Amount rule: Weigh the installed uncoated acoustic mat and separately reconcile cutting losses; record fibre and binder composition. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Flux-free tin-silver-copper solder (`solder`)

Record flux-free tin-silver-copper solder consumed for terminal joints; require supplier alloy composition, without presuming SAC305.

- Selected flow: Flux-free tin-silver-copper solder
- Flow property / unit: Mass / kg
- Amount rule: Record flux-free tin-silver-copper solder consumed for terminal joints; require supplier alloy composition, without presuming SAC305. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Solid rosin soldering flux (`rosin_flux`)

Weigh separately supplied solid rosin flux consumed; solvent-containing formulations require separate constituent and emission accounting.

- Selected flow: Solid rosin soldering flux
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately supplied solid rosin flux consumed; solvent-containing formulations require separate constituent and emission accounting. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Electricity (`assembly_electricity`)

Meter assembly tools, soldering and fume extraction plus the causally assigned share of facility electricity; exclude test_pack meters.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter assembly tools, soldering and fume extraction plus the causally assigned share of facility electricity; exclude test_pack meters. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200c9a66`; `93a60a57-a3c8-11da-a746-0800200c9a66`

#### Outputs

##### Product flows

###### Assembled passive loudspeaker before final test (`assembled_output`)

Record net mass transferred to test_pack; preserve lot identity and reconcile work in progress.

- Selected flow: Assembled passive loudspeaker before final test
- Flow property / unit: Mass / kg
- Amount rule: Record net mass transferred to test_pack; preserve lot identity and reconcile work in progress. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

##### Waste flows

###### Waste lead-free solder dross (`solder_dross`)

Weigh separately collected solder dross sent to recovery; inclusion_condition: dross crosses the boundary; document absence otherwise.

- Selected flow: Waste lead-free solder dross
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately collected solder dross sent to recovery; inclusion_condition: dross crosses the boundary; document absence otherwise. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Waste rosin soldering flux (`rosin_residue`)

Weigh separately collected rosin residue; inclusion_condition: residue leaves the process; flux remaining on the product belongs in product mass.

- Selected flow: Waste rosin soldering flux
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately collected rosin residue; inclusion_condition: residue leaves the process; flux remaining on the product belongs in product mass. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_assembly`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

### Process: Acceptance testing and packing (`test_pack`)

#### Inputs

##### Product flows

###### Assembled passive loudspeaker before final test (`assembled_input`)

Use exactly the matched assembled_output transfer mass; this is an internal link, not a second purchased input.

- Selected flow: Assembled passive loudspeaker before final test
- Flow property / unit: Mass / kg
- Amount rule: Use exactly the matched assembled_output transfer mass; this is an internal link, not a second purchased input. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Electricity (`test_electricity`)

Meter test amplifier wall input, analyser, burn-in and packing equipment over the actual test schedule; include retests.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter test amplifier wall input, analyser, burn-in and packing equipment over the actual test schedule; include retests. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_test_pack`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200c9a66`; `93a60a57-a3c8-11da-a746-0800200c9a66`

###### corrugated board boxes (`corrugated_carton`)

Weigh cartons issued minus unused returns; distinguish delivered cartons from discarded damaged cartons.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Weigh cartons issued minus unused returns; distinguish delivered cartons from discarded damaged cartons. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_test_pack`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Weigh film issued minus returns; record film grade, thickness and recycled content from supplier evidence.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Weigh film issued minus returns; record film grade, thickness and recycled content from supplier evidence. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom_test_pack`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

#### Outputs

##### Product flows

###### Passive loudspeaker in MDF enclosure (`reference_product`)

Normalize released net product mass M_good to 1 kg; exclude all packaging mass and include successful rework only once.

- Selected flow: Passive loudspeaker in MDF enclosure
- Flow property / unit: Mass / kg
- Amount rule: Normalize released net product mass M_good to 1 kg; exclude all packaging mass and include successful rework only once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

##### Waste flows

###### Discarded passive loudspeaker (`rejected_loudspeaker`)

Weigh irreparable complete units transferred to an identified treatment operator; repairable work in progress is not waste.

- Selected flow: Discarded passive loudspeaker
- Flow property / unit: Mass / kg
- Amount rule: Weigh irreparable complete units transferred to an identified treatment operator; repairable work in progress is not waste. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_test_pack`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### Packaging waste, cardboard (`cardboard_waste`)

Weigh the separately collected cardboard packaging waste; exclude product packaging dispatched with good units.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separately collected cardboard packaging waste; exclude product packaging dispatched with good units. Divide by M_good under calc_normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net released loudspeaker
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_test_pack`
- Property and unit-group references: `93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_hierarchy | shared_operations | First assess subdivision or system expansion; otherwise use a demonstrated causal physical relationship, and document any fallback economic allocation and sensitivity. | ec-environmental-footprint-2021 |
| al_metering | shared_electricity | Under cp_energy_assembly; cp_energy_test_pack, assign shared electricity with measured machine power-time or another validated causal driver; unit counts alone require evidence that the models impose equal loads. Reconcile allocated totals to the meter. |  |
| al_rework | rejects_and_recovery | Under cp_release and cp_waste_assembly; cp_waste_test_pack, retain failed-test and rework burdens in the campaign denominator of good output. Report recovery separately; do not credit full avoided virgin production merely because scrap has a sale price. |  |



## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bom_assembly | assembly | components and packaging | supplier records and weighing | model; batch; supplier part; material composition; unit count; sample unit masses; issued/returned mass; opening/closing stock; moisture; assembly boundary | Reconcile store issues and returns with calibrated weighing and BOM revision | kg; units; m | each batch and each supplier/design change | one declared representative production period including normal starts and rework | actual assembly site and named suppliers | Net consumption by component divided by M_good; retain losses separately | calibration; scale resolution; sample coverage; supplier declarations; signed stock reconciliation |
| cp_bom_test_pack | test_pack | components and packaging | supplier records and weighing | model; batch; supplier part; material composition; unit count; sample unit masses; issued/returned mass; opening/closing stock; moisture; assembly boundary | Reconcile store issues and returns with calibrated weighing and BOM revision | kg; units; m | each batch and each supplier/design change | one declared representative production period including normal starts and rework | actual assembly site and named suppliers | Net consumption by component divided by M_good; retain losses separately | calibration; scale resolution; sample coverage; supplier declarations; signed stock reconciliation |
| cp_energy_assembly | assembly | electricity | submeter and equipment log | meter id; boundary; start/end kWh; time; idle state; active/standby power; test duration; rework time; model throughput; allocation driver | Submeter both processes; validate any power-time fallback against metering | kWh; W; h | each campaign; timestamped test logs | same period as released product | assembly, extraction and test stations; documented shared facility load | Convert kWh to MJ; reconcile process totals and allocated shared load to site meters; divide by M_good | meter calibration; timestamp checks; allocation driver validation |
| cp_energy_test_pack | test_pack | electricity | submeter and equipment log | meter id; boundary; start/end kWh; time; idle state; active/standby power; test duration; rework time; model throughput; allocation driver | Submeter both processes; validate any power-time fallback against metering | kWh; W; h | each campaign; timestamped test logs | same period as released product | assembly, extraction and test stations; documented shared facility load | Convert kWh to MJ; reconcile process totals and allocated shared load to site meters; divide by M_good | meter calibration; timestamp checks; allocation driver validation |
| cp_transfer | assembly | internal loudspeaker transfer | batch transfer and WIP register | batch id; unit count; sampled mass; transfer time; opening/closing WIP; rework route | Match output and input transfer slips and physically reconcile WIP | kg; units | each transfer | same inventory period | paired sending/receiving stations | Link equal transferred masses; account for period-boundary WIP; eliminate internal links from consolidated totals | signed transfer records; WIP checks |
| cp_release | test_pack | reference product and performance | acceptance tests and release register | serial/model; signal; impedance; bandwidth; sensitivity; distortion; test level; distance; environment; calibration; pass/fail; retest; released count; net unit mass; included accessories | Use documented model acceptance procedure and calibrated tests; weigh saleable product without packaging | kg; units; declared test units | each released lot; test frequency specified by actual acceptance plan | same production campaign | final test and packing line | M_good equals released count times verified net unit mass by model; include a repaired unit only once | test logs; calibration; acceptance plan; release authorisation |
| cp_waste_assembly | assembly | each separate waste stream | waste weighing and transfer record | stream composition; container tare; gross/net mass; date; lot; destination; waste/product status; recovery or disposal; retained residues; capture evidence | Weigh each segregated stream; reconcile receiver tickets; screen direct emissions and identify each substance | kg | each removal and campaign balance | same period as material use | production site to named receiving operator | Deduct tare and normalize each waste separately by M_good; disclose stock changes and any measured direct emissions | transfer tickets; composition/SDS; calibrated weighing; treatment route evidence |
| cp_waste_test_pack | test_pack | each separate waste stream | waste weighing and transfer record | stream composition; container tare; gross/net mass; date; lot; destination; waste/product status; recovery or disposal; retained residues; capture evidence | Weigh each segregated stream; reconcile receiver tickets; screen direct emissions and identify each substance | kg | each removal and campaign balance | same period as material use | production site to named receiving operator | Deduct tare and normalize each waste separately by M_good; disclose stock changes and any measured direct emissions | transfer tickets; composition/SDS; calibrated weighing; treatment route evidence |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all external exchanges | q_i = Q_i / M_good, with positive M_good and a common campaign; Q_i is stock-adjusted consumed or released quantity. | cp_bom_assembly; cp_bom_test_pack; cp_waste_assembly; cp_waste_test_pack; cp_release | kg/kg or MJ/kg |  |
| calc_good_mass | reference_product | M_good = sum(N_released_model × m_unit_model), excluding packaging; confirm against direct aggregate weighing. | cp_release | kg; normalized reference_product = 1 |  |
| calc_energy | electricity | E_MJ = 3.6 × E_kWh; if power-time is used, E_kWh = sum(P_input_W × hours) / 1000, including measured standby and retest periods. | cp_energy_assembly; cp_energy_test_pack | MJ/kg |  |
| calc_balance | mass flows | Residual = external material inputs + opening stock - closing stock - good product - shipped packaging - external waste - measured mass emissions; internal transfers cancel. Investigate the residual against combined measurement uncertainty. | cp_bom_assembly; cp_bom_test_pack; cp_transfer; cp_waste_assembly; cp_waste_test_pack; cp_release | kg residual and explanation |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_design | reference and BOM | Keep one model/configuration per mass conversion; identify magnet type, electronic content and supplied accessories so unlike audio products cannot silently share a material profile. | cp_bom_assembly; cp_bom_test_pack; cp_release |
| dq_primary | foreground amounts | Retain original measurements and uncertainty; report estimates separately and obtain measured factory energy rather than reusing the optical-mouse proxy from the source case. | cp_energy_assembly; cp_energy_test_pack; miljogiraff-transparent-light-speaker-2022 |
| dq_representativeness | linked supply datasets | Disclose geography, technology, year, recycled content, supplier boundary and any proxy substitution; a flow UUID alone does not supply these facts. | ec-environmental-footprint-2021 |
| dq_completeness | all processes | Close the bill of materials and waste balance; document genuinely absent routes. Add one concrete exchange for every newly identified component, process chemical, waste or emission. | cp_bom_assembly; cp_bom_test_pack; cp_waste_assembly; cp_waste_test_pack |



## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_identity | reference_definition | All required qualifiers, a specific product object and a net unit mass are mandatory. Class membership and a general audio-equipment label do not prove flow identity or functional equivalence. | un-cpc-3-0-structure-2025 |
| val_trace | inventory | Every active row must have raw records, amount basis, compatible property/unit and exactly one atomic exchange. A missing value differs from measured zero or documented non-applicability. |  |
| val_balance | mass_and_internal_links | Reconcile cp_transfer output/input by batch and period. Investigate nonzero mass residuals against weighing uncertainty and inventory changes; never force balance by adjusting good output. Packaging travels outside net product mass. |  |
| val_energy | factory_test | Verify disjoint assembly/test meters, kWh conversion, test duration and rework. Reject estimates obtained by multiplying rated acoustic or amplifier output watts by time without a validated electrical-input model. |  |
| val_performance | test_pack | Retain measured physical response and model-specific acceptance criteria under cp_release; scope-level IEC evidence does not establish conformity to unexamined clauses. | iec-60268-21-2018-scope |
| val_coverage | dataset_use | State stage coverage, unmatched supply links, geographic/technology/time relevance and uncertainty. No category-wide comparative claim is supported by this representative production inventory alone. | ec-environmental-footprint-2021 |



## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after appropriate review and completion of supply links |
| downstream_use | Foreground data package projects to process and lifecyclemodel; supplier production input for a matching loudspeaker design |
| allowed_use | Declared site/model/campaign production inventory with explicit stage coverage and unit conversion |
| excluded_use | Unqualified average for all audio equipment; stand/headphone/amplifier substitution; customer-use electricity default; complete life-cycle or comparable EPD claim without remaining stages and review |
| required_metadata | Required qualifiers; geography; dates; BOM revision; supplier datasets; process map; boundaries; allocation; raw-record links; treatment routes |
| required_quality_disclosure | Measurement uncertainty; missing records and supply links; proxy datasets; completeness; site representativeness; translation/review state |
| update_trigger | Design/BOM, supplier, enclosure, magnet, electronics, assembly/test route, power mix or waste treatment changes; updated measurement evidence |



## 11. Data Sources

External evidence supports the stated role only. Source-specific compositions, electricity proxies, lifetime assumptions and environmental results are not category defaults. All web sources below were retrieved on 2026-09-09.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 47330 and neighbouring 47311, 47321 and 47323: category membership and exclusions |
| china-rcep-tariff-japan-hs8518 | official_guidance | China tariff schedule, Annex I, Section 3: Japan; official Chinese text hosted by Fujian Department of Commerce. https://swt.fujian.gov.cn/xxgk/jgzn/jgcs/zcfgc/sbqyzymy/202012/W020201218620318530448.pdf | HS 8518 and subheadings: Chinese terminology only; no tariff or CPC equivalence claim |
| ec-environmental-footprint-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I, sections 3.2, 4.5 and 4.6. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 | Function, explicit boundary, allocation hierarchy and representativeness; selected principles, not a claim of complete PEF compliance |
| visaton-solo-20-construction | handbook | VISATON SOLO 20, Building instruction, Assembly and Inner damping. https://www.visaton.de/en/products/fullrange-systems/solo-20/bauanleitung | MDF cabinet, driver opening, terminal connection and acoustic damping architecture; no dimensions or quantities transferred |
| genelec-recycling-materials | handbook | Genelec, Recycling and Materials. https://www.genelec.com/recycling-information-materials | Drivers, enclosure materials, acoustic filling, packaging and separable waste fractions; no recycled-content defaults |
| miljogiraff-transparent-light-speaker-2022 | literature | Viktor Hakkarainen and Marcus Bernhard, Miljögiraff AB, Life Cycle Assessment of Light Speaker by Transparent, report 977, 11 May 2022. https://transpa.rent/site/assets/cms/pdf/Life%20Cycle%20Assessment%20report%20Transparent%20LS%20V3%202022-05-11.pdf | Sections 3.3 and 4.2–4.4, pp. 14–23: weighed component inventory and separation of upstream component processing from final assembly; its proxy assembly energy is not a measured benchmark |
| iec-60268-21-2018-scope | standard | IEC 60268-21:2018, Sound system equipment — Part 21: Acoustical (output-based) measurements; official scope page. https://webstore.iec.ch/en/publication/28687 | Public scope only: physical input-to-acoustic-output testing of passive and active systems; no claim to have verified paid clauses or universal acceptance limits |
