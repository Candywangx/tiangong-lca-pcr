---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-keeping-mechanical-equipment
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Automatic poultry dry-feed distribution equipment manufacture

## 1. Scope and Applicability

This PCR covers foreground manufacture of new complete automatic poultry dry-feed conveying and distribution equipment, specifically configured auger/tube/pan feeding lines and chain/trough feeding circuits. Record these configurations separately. A complete equipment set can be shipped as traceable sections for later site assembly, provided all specified feeding, drive, control and equipment-support components are delivered and factory acceptance limitations are disclosed. A partial spare-part shipment is not the reference product.

The semantic boundary is narrower than CPC 44194. Exclude drinking systems, nests and egg collection, manure removal, house ventilation/heating, incubators/brooders, slaughter/processing machinery and feed milling/mixing. Exclude external bulk storage silos, upstream transfer conveyors and house fabric unless a separately defined equipment reference includes them; this reference starts at the feeding equipment inlet. Exclude farm installation services, flock feeding, feed production/consumption, bird growth, mortality, manure emissions, farm cleaning/disinfection, maintenance and end of life. No per-bird productivity or lifespan equivalence is claimed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-keeping-mechanical-equipment |
| classification_refs | CPC 3.0 44194 Poultry-keeping machinery; narrower automatic dry-feed equipment scope; context only |
| covered_products | Complete configured automatic auger/pan line or chain/trough circuit for poultry dry feed |
| excluded_products | Other poultry-keeping functions; incomplete kits/spares; feed preparation; farm operation and installation services |
| representative_product | One accepted equipment set tied to an order and layout BOM; measured M without a typical equipment weight |
| production_route | Actual sheet/strip fabrication and polymer molding when in-house, purchased-module integration, controls, factory acceptance and dispatch |
| market_state | Complete accepted delivery set with defined inlet/outlet and support boundary; feed and packaging excluded; site commissioning disclosed separately |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the stated complete automatic poultry dry-feed distribution equipment |
| How much | 1 kg net accepted complete equipment; per-machine collection converted with measured M |
| How well | Meets documented configured completeness, dimensional, drive, sensor/interlock and guarding factory acceptance criteria; site-only tests are disclosed |
| How long or cycle | One manufacture and factory acceptance cycle; no assumed farm life |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Poultry-keeping machinery `f1ec443d-7549-4c44-b840-802dc1d73c5c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model; order/serial and configuration revision; poultry dry-feed function; auger/pan or chain/trough architecture; line/circuit length and shape; tube/trough cross-section and coating; feed-point count, pan geometry/material and nylon grade; hopper/extension; auger or chain link specification; drive rating, phase, reduction and completeness; corner wheels and bearings; fixed or suspended support, winch/rope/guards; dedicated sensor/controller and wiring; supplier assembly boundaries; delivered sectional quantities; net M and packing tare; excluded silo/building/shared systems; factory acceptance and site-test gaps; site/period/gates; outsourcing and upstream coverage |

Declare every qualifier in metadata or reference-flow comments. M includes all delivered equipment components of the same configured set, including equipment supports, and excludes transport supports, packaging and test feed. For sectional delivery, retain calibrated net weighing and item-level completeness records for the whole set; an unverified catalog mass or feed contents is not M. Tube length, pan count, bird capacity and motor kW are not mass conversion factors.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `meter_conversion` | utilities and length records | Mass; Net calorific value | kg; MJ | Use the row reference property. Verified energy unit-group conversion is 3.6 MJ/kWh. A length-based component record requires measured construction-specific mass per length; water volume requires measured density/reference conditions. A flow-property meanValue is not a generic density. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased specified sheet/strip/resin and finished components received at the equipment manufacturing site |
| starting_condition_role | foreground manufacturing module |
| product_classification_scope | Configured automatic poultry dry-feed equipment only; broader poultry machinery reference is qualified to this scope |
| recursive_input_rule | Record a bought-in same-category feeding module once with supplier completeness and property; count only added foreground work and exclude duplicate constituent purchases |
| upstream_dataset_requirement | Match supplied metal finish, polymer grade, component completeness, geography, period and reference property; disclose missing supplier links and any reviewed proxies |
| disclosure | State factory receipt-to-dispatch gates, in-house versus outsourced routes, transport coverage, utilities and missing upstream stages. This foreground module alone is not complete cradle-to-gate |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_actual` | all processes | Include actual operations, rejects/rework and factory tests attributable to the delivered configuration. Bought-in assemblies bypass their stock/molding operations; unlinked supplier manufacture and outsourcing remain explicit gaps. |  |
| `boundary_complete` | all inventory rows | Reconcile the entire configured BOM. Add omitted actual pigments, mold-release formulation, process lubricant, fasteners, legs, anti-roost wire, drive oil, guards, terminals, test-feed formulation, packaging and wastes as separate specific atomic cards. Unknown quantities are not zero; this list is not proof of absence. |  |
| `boundary_farm` | reference product | Separate manufacturing from poultry operation and installed farm services. No feed intake, animal yield or farm manure emission belongs to this equipment manufacturing reference. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal` | Sheet fabrication and auger forming | conditional | These operations actually occur at the reporting site. | foreground | one accepted configured machine, normalized using M |
| `molding` | Polymer part molding | conditional | Declared polymer parts are molded in the foreground; bought-in finished parts bypass molding. | foreground | one accepted configured machine, normalized using M |
| `mechanical` | Feed-distribution mechanical assembly | required | Each complete feeding-equipment configuration. | foreground | one accepted configured machine, normalized using M |
| `controls` | Dedicated controls and wiring integration | required | Each automatic feeding-equipment configuration; sensor/control architecture must be stated. | foreground | one accepted configured machine, normalized using M |
| `acceptance` | Factory acceptance and completeness reconciliation | required | Every accepted complete equipment set. | foreground | one accepted configured machine, normalized using M |
| `packing` | Dispatch packaging | conditional | Packaging crosses the defined factory dispatch gate. | foreground | one accepted configured machine, normalized using M |

Actual metal fabrication and molding feed mechanical assembly → dedicated controls → factory acceptance → conditional dispatch packaging. Finished purchased parts enter at their integration stage. These are equipment manufacture operations, not farm feed conveyance. Source links support configuration or candidate technique only; all amounts and actual route activation come from linked foreground protocols. No direct elementary release is assumed from product descriptions; add each demonstrated manufacturing emission by substance and environmental medium with measurement evidence.

### Process: Sheet fabrication and auger forming (`metal`)

Cut, punch and fold specified supplied galvanized sheet into hoppers or troughs; form a conveying spiral from specified strip only when made in-house. Do not assume tube production, galvanizing, welding or heat treatment at the assembly site. Finished purchased hoppers, troughs and augers bypass their corresponding stock operations. Internal parts transferred to assembly are not new purchases.

#### Inputs

##### Product flows

###### Hot-dip-zinc-coated carbon-steel sheet (`galvanized_sheet`)

Only actual sheet for in-house hopper/trough fabrication; record steel grade, thickness and zinc coating mass per area, including zinc in input mass.

- Selected flow: Hot-dip-zinc-coated carbon-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal`
- Sources: `roxell-pan`

###### Uncoated cold-rolled carbon-steel strip for feed auger forming (`carbon_strip`)

Only actual in-house spiral manufacture; record steel grade, temper and dimensions; no assumed upstream heat-treatment recipe.

- Selected flow: Uncoated cold-rolled carbon-steel strip for feed auger forming
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal`
- Sources: `roxell-pan`

###### Grid alternating-current electricity at factory intake (`metal_power`)

Meter only attributable work of this stage and document factory intake voltage, geography and provider. Include factory dry-run/test power, not farm feeding operation.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal`
- Sources: `roxell-pan`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Only untreated clean uncoated steel cutting offcuts leaving the process; record destination.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal`
- Sources: `roxell-pan`

###### Zinc-coated carbon-steel cutting offcuts (`zinc_steel_offcut`)

Only coated sheet offcuts; segregate from uncoated strip and record zinc content and treatment destination.

- Selected flow: Zinc-coated carbon-steel cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal`
- Sources: `roxell-pan`

### Process: Polymer part molding (`molding`)

Record actual injection molding, trimming and conditioning of PP pan bodies and separately specified nylon supports/connectors. Nylon family evidence does not establish PA6: use the PA6 card only with actual grade documentation. Resin, colorant and additive formulations must be separately identified when compounded on site; do not presume virgin resin for a recycled formulation. Roxell innovation equipment supports a candidate technique, not a universal production route.

#### Inputs

##### Product flows

###### Polypropylene (`pp_resin`)

Only actual unfilled PP polymer feedstock; specify grade and supplier resin formulation. Separate actual pigment or additive inputs; do not include finished pans as resin.

- Selected flow: Polypropylene `54802cfb-bd58-4f85-9ebf-9e0616529c1c`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molding`
- Sources: `roxell-pan`

###### Unfilled polyamide-6 molding granulate (`pa6_resin`)

Only an actual documented PA6 grade, not inferred from the words nylon or polyamide; record drying and conditioning if performed.

- Selected flow: Unfilled polyamide-6 molding granulate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molding`
- Sources: `roxell-pan`

###### Process Water (`cooling_water`)

Only fresh treated industrial water crossing the molding boundary for cooling makeup; internal recirculation is not repeated input. Record quantity and actual water specification.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molding`
- Sources: `roxell-pan`

###### Grid alternating-current electricity at factory intake (`molding_power`)

Meter only attributable work of this stage and document factory intake voltage, geography and provider. Include factory dry-run/test power, not farm feeding operation.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molding`
- Sources: `roxell-pan`

#### Outputs

##### Waste flows

###### Polypropylene Wastes (`pp_purge`)

Only separately collected PP purge and trim exported to mechanical recycling after internal regrind subtraction; mixed polymers or contaminated disposal routes require another defined waste.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molding`
- Sources: `roxell-pan`

###### Segregated polyamide-6 molding scrap (`pa6_scrap`)

Only measured PA6 trim/purge exported after internal reuse; identify actual moisture, contamination and destination.

- Selected flow: Segregated polyamide-6 molding scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molding`
- Sources: `roxell-pan`

###### Molding cooling-water blowdown sent to treatment (`cooling_effluent`)

Only actual transfer of cooling-water blowdown to treatment; specify dissolved treatment chemicals and contamination. Not a water-resource withdrawal or direct river discharge.

- Selected flow: Molding cooling-water blowdown sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molding`
- Sources: `roxell-pan`

### Process: Feed-distribution mechanical assembly (`mechanical`)

Build the declared auger/tube/pan layout or chain/trough/corner-wheel circuit. Retain inlet hopper, dedicated gearmotor, supports, suspension and guards in the delivery BOM. Line length, number of feed points, circuit shape and support method define completeness; they are not a generic per-bird conversion. Avoid duplicate constituent exchanges for a purchased complete subassembly.

#### Inputs

##### Product flows

###### Finished galvanized-steel poultry-feed conveying tube (`galvanized_tube`)

Only bought-in conveying tube of actual diameter, wall, coupling and coating; no simultaneous sheet input for the same purchased tube.

- Selected flow: Finished galvanized-steel poultry-feed conveying tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `roxell-pan`

###### Finished steel poultry-feed conveying auger (`conveying_auger`)

Only bought-in spiral matching tube and drive; omit purchase when made internally from the recorded strip.

- Selected flow: Finished steel poultry-feed conveying auger
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `bd-feeder`

###### Finished steel poultry-feed conveying chain (`feed_chain`)

Only installed chain circuit, with link design and measured length/mass; exclude auger under this exchange.

- Selected flow: Finished steel poultry-feed conveying chain
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `roxell-chain`

###### Finished galvanized-steel poultry-feed inlet hopper (`feed_hopper`)

Only bought-in complete hopper; record upper/lower section and extension inclusion; internally fabricated sheet parts are not counted again.

- Selected flow: Finished galvanized-steel poultry-feed inlet hopper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `bd-feeder`

###### Finished galvanized-steel poultry-feed trough section (`feed_trough`)

Only bought-in chain-feed trough with stated section geometry and mass; omit if formed from the foreground sheet.

- Selected flow: Finished galvanized-steel poultry-feed trough section
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `roxell-chain`

###### Finished polypropylene poultry-feed pan body (`pan_body`)

Only separately purchased PP pan body, with grill/hinge inclusion declared; omit when molded internally. A complete bought-in pan with nylon support needs one exact assembly exchange rather than duplicated constituents.

- Selected flow: Finished polypropylene poultry-feed pan body
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `roxell-pan`

###### Finished nylon poultry-feed pan top support (`nylon_support`)

Only separately purchased top support of supplier-specified nylon grade; avoid duplicating a support included in the pan assembly.

- Selected flow: Finished nylon poultry-feed pan top support
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `roxell-pan`

###### Finished polyamide poultry-feed trough connector (`trough_connector`)

Only installed separate molded connector; declare actual polymer grade and weighed mass, or record its internal molding transfer.

- Selected flow: Finished polyamide poultry-feed trough connector
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `roxell-chain`

###### Poultry-feed chain corner-wheel bearing assembly (`corner_wheel`)

Only an installed chain corner unit of declared geometry and included bearing; do not impose grease use or grease absence on all other components.

- Selected flow: Poultry-feed chain corner-wheel bearing assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `roxell-chain`

###### Complete poultry-feeder electric gearmotor assembly (`gear_motor`)

Only bought-in dedicated motor with reduction gear and declared rating/phase/casing completeness; no power-to-mass conversion.

- Selected flow: Complete poultry-feeder electric gearmotor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `bd-feeder`

###### Manual steel feeding-line suspension winch (`suspension_winch`)

Only installed manual winch in the delivery; fixed support legs or motorized winches require their own exact cards and are not represented by this row.

- Selected flow: Manual steel feeding-line suspension winch
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `bd-feeder`

###### Galvanized-steel suspension wire rope (`suspension_rope`)

Only actual stranded galvanized rope, with construction, diameter and mass; a bare single steel wire is not the rope.

- Selected flow: Galvanized-steel suspension wire rope
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `bd-feeder`

###### Steel screw (`steel_screw`)

Only steel screws actually issued to assembly; nuts, bolts and other fasteners must have separate exact exchanges if used.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `bd-feeder`

###### Grid alternating-current electricity at factory intake (`mechanical_power`)

Meter only attributable work of this stage and document factory intake voltage, geography and provider. Include factory dry-run/test power, not farm feeding operation.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `bd-feeder`

#### Outputs

### Process: Dedicated controls and wiring integration (`controls`)

Install the declared dedicated feed-level sensor and feeding motor controller, protective enclosure and wiring. A central house controller serving other systems is not silently included; declare its incremental equipment boundary and any shared function allocation. Identify supply voltage, phase, interlocks and cutoff logic from the configuration.

#### Inputs

##### Product flows

###### Capacitive poultry-feed level sensor (`feed_sensor`)

Only this documented installed sensing technology; other sensing principles require their own row. State housing/cable inclusion.

- Selected flow: Capacitive poultry-feed level sensor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `bd-feeder`

###### Dedicated poultry-feeding motor controller module (`feeding_controller`)

Only separate dedicated controller of actual hardware/software revision; omit when included in a purchased drive module.

- Selected flow: Dedicated poultry-feeding motor controller module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `bd-feeder`

###### Insulated copper feeding-equipment control cable (`control_cable`)

Only installed copper cable of declared insulation and mass; measured length requires construction-specific measured linear mass.

- Selected flow: Insulated copper feeding-equipment control cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `bd-feeder`

###### Grid alternating-current electricity at factory intake (`controls_power`)

Meter only attributable work of this stage and document factory intake voltage, geography and provider. Include factory dry-run/test power, not farm feeding operation.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `bd-feeder`

#### Outputs

### Process: Factory acceptance and completeness reconciliation (`acceptance`)

Verify delivery quantities against the configured layout, dimensional fit, drive rotation, sensor stop/interlock operation and declared guards using factory test evidence for assemblies. Document any functions requiring site installation and not tested at factory; factory acceptance does not claim commissioned farm performance. Clean the delivery set of test feed. Installation, building works and flock operation remain outside the gate.

#### Inputs

##### Product flows

###### Grid alternating-current electricity at factory intake (`acceptance_power`)

Meter only attributable work of this stage and document factory intake voltage, geography and provider. Include factory dry-run/test power, not farm feeding operation.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `bd-feeder`

#### Outputs

##### Product flows

###### Poultry-keeping machinery (`finished_machine`)

Exactly 1 kg net complete accepted configured feeding equipment. Installed delivery components are included; feed, packaging and building fabric are excluded.

- Selected flow: Poultry-keeping machinery `f1ec443d-7549-4c44-b840-802dc1d73c5c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `bd-feeder`

### Process: Dispatch packaging (`packing`)

Record actual supports and protective film by polymer and timber route; exclude all packaging from equipment M. Additional boxes, straps or returnable supports need their own material-specific exchange and measured reuse evidence.

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`timber_support`)

Only actual kiln-dried sawn coniferous shipping support, with species/route recorded; exclude from M.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `roxell-chain`

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Only actual LDPE protective film crossing dispatch; record polymer/thickness and mass; other polymers are separate exchanges.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `roxell-chain`

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared operations | Separate orders by line architecture and exact layout/BOM. Prefer directly measured stock, molding cycles and utility records. For a shared operation, collect and justify a causal order driver such as actual metered load or machine-hours, and allocate the attributable total in proportion to each order driver divided by the complete covered driver sum. Preserve all covered orders and unfinished stock; do not use unmeasured birds served as a driver. |  |
| `allocation_recovery` | regrind and waste | Reconcile internal resin regrind and metal returns without treating each circulation as fresh purchase. Exported offcuts/purge carry actual mass and destination; no automatic avoided-material credit is assigned. Separately identify any saleable co-product, first divide physical operations where possible, and review residual allocation with the collected basis. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted net equipment set | weighing_record | model; configuration; serial number; accepted net mass M; layout_BOM; sectional_delivery; scale_id; packing_tare; completeness; acceptance_id | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each set or representative same-configuration batch | same continuous reporting manufacturing period | declared factory and same configured delivery set | accepted net mass per machine | calibrated weighing, tare, complete sectional BOM and acceptance receipts |
| `cp_metal` | metal | each specific atomic exchange | measured_order_record | order; serial/layout; exact_item/grade; supplier_boundary; issues; returns; stock_change; exchange_amount; accepted_count; part_mass; meter_unit; waste_destination; shared_driver | Weigh drawing-specific sheet/strip issues and returns, reconcile good part mass and separately collected coated/uncoated offcuts; meter cutting/forming stations. | kg or MJ as the row declares | each order and batch | declared continuous manufacturing period | Sheet fabrication and auger forming | attributable exchange amount / accepted machines | part weighing, order BOM, calibrated meters and outlet receipts |
| `cp_molding` | molding | each specific atomic exchange | measured_order_record | order; serial/layout; exact_item/grade; supplier_boundary; issues; returns; stock_change; exchange_amount; accepted_count; part_mass; meter_unit; waste_destination; shared_driver | Record mold/cavity, polymer grade, fresh resin issues, internal regrind, good parts, purge/trim waste and reject mass by resin; meter press/drying power and only fresh treated cooling-water makeup and actual effluent. | kg or MJ as the row declares | each order and batch | declared continuous manufacturing period | Polymer part molding | attributable exchange amount / accepted machines | part weighing, order BOM, calibrated meters and outlet receipts |
| `cp_mechanical` | mechanical | each specific atomic exchange | measured_order_record | order; serial/layout; exact_item/grade; supplier_boundary; issues; returns; stock_change; exchange_amount; accepted_count; part_mass; meter_unit; waste_destination; shared_driver | Trace supplier module boundaries, quantities and measured net part masses to the layout BOM; reconcile in-house transfers separately from purchases, fastener issues and actual assembly power. | kg or MJ as the row declares | each order and batch | declared continuous manufacturing period | Feed-distribution mechanical assembly | attributable exchange amount / accepted machines | part weighing, order BOM, calibrated meters and outlet receipts |
| `cp_controls` | controls | each specific atomic exchange | measured_order_record | order; serial/layout; exact_item/grade; supplier_boundary; issues; returns; stock_change; exchange_amount; accepted_count; part_mass; meter_unit; waste_destination; shared_driver | Record electronics revision and supplier completeness, copper cable construction and actual mass, terminal/connector additions and electrical test records; distinguish embedded controls already in the drive from separately supplied controls. | kg or MJ as the row declares | each order and batch | declared continuous manufacturing period | Dedicated controls and wiring integration | attributable exchange amount / accepted machines | part weighing, order BOM, calibrated meters and outlet receipts |
| `cp_acceptance` | acceptance | each specific atomic exchange | measured_order_record | order; serial/layout; exact_item/grade; supplier_boundary; issues; returns; stock_change; exchange_amount; accepted_count; part_mass; meter_unit; waste_destination; shared_driver | Collect serialized or order-linked factory test results and measured electricity; weigh all delivered equipment components with calibrated scales and packing tare records, reconcile exact layout and reject/rework records. | kg or MJ as the row declares | each order and batch | declared continuous manufacturing period | Factory acceptance and completeness reconciliation | attributable exchange amount / accepted machines | part weighing, order BOM, calibrated meters and outlet receipts |
| `cp_packing` | packing | each specific atomic exchange | measured_order_record | order; serial/layout; exact_item/grade; supplier_boundary; issues; returns; stock_change; exchange_amount; accepted_count; part_mass; meter_unit; waste_destination; shared_driver | Weigh supplied timber and LDPE film per dispatch set and record returns; distinguish equipment supports from transport supports. | kg or MJ as the row declares | each order and batch | declared continuous manufacturing period | Dispatch packaging | attributable exchange amount / accepted machines | part weighing, order BOM, calibrated meters and outlet receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Obtain each attributable order amount from issued quantities minus returns with measured stock changes, waste/test records and documented shared-operation allocation. Divide by accepted complete sets to collect q_item, then normalize with measured same-configuration M. Include period rejects and rework in accepted-output burdens while disclosing unfinished stock. For variable net masses within one homogeneous configuration, use total attributable exchange divided by total accepted net mass with serial records. Separate unlike layouts rather than blending short and long lines under an invented standard line.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all rows | Trace full layout, feed-point count, delivered sections, polymer grades, metal coatings and module completeness. Retain unresolved supplier material specifications as gaps rather than assuming a universal recipe. | drawings, BOM and supplier specifications |
| `quality_balance` | stock and utilities | Reconcile metal, polymer, purchased assemblies, accepted net mass, regrind, rejects, waste and stock change. Explain uncertainty and measured length/density conversions. Account for drive/control tests without counting farm power. | weighing, issues/returns, meters and waste transfer |
| `quality_coverage` | all processes | State site and continuous period, provider links and outsourced gates. Establish configuration-specific QA limits from measured records; these product descriptions provide no manufacturing intensity or net equipment mass range. Missing important amounts remain pending collection. | order coverage, calibration, boundary and gap list |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require complete configured automatic dry-feed equipment, positive measured M and all declared delivered sections/supports. Reject incomplete spares and other poultry-keeping functions. Disclose unperformed site tests and exclude feed/packaging from net equipment mass. |  |
| `validate_identity` | all inventory rows | Require one atomic physical exchange and matching public flow identity, property, unit, polymer grade, metal finish and component completeness. Do not substitute generic resin for a finished part, galvanizing for sheet stock, or energy-property cable for cable mass. Resolve absent identities before releasing a fully linked dataset. |  |
| `validate_collection` | all inventory rows | Verify linked protocols, q_item/M normalization, same layout denominator, stock/rework allocation and utility meter coverage. Purchased complete modules and internal molding/fabrication transfers are not double counted; extend the inventory to every actual omitted atomic input/output. |  |
| `validate_release` | measured environmental releases | Add demonstrated manufacturing releases individually with substance, fossil/biogenic origin where relevant, receiving medium/subcompartment and measured quantity or verified applicable factor. Treatment wastewater is a technosphere outlet; poultry manure and farm dust are outside this manufacture gate. No inferred zero for unmeasured relevant releases. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground configured automatic poultry dry-feed equipment manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and explicit upstream coverage |
| allowed_use | Supply-chain manufacture for matching layout, polymer/metal specification, module completeness, site/period and gates |
| excluded_use | Per-bird feed/yield comparison; installed house-service equivalence; drinking/manure/egg/climate/incubation proxy; complete cradle-to-gate without supplier linkage |
| required_metadata | Reference qualifiers; measured M; layout and sectional delivery completeness; supplier material grades and boundaries; factory/site-test evidence; actual route, period/gates, collection/allocation and background links |
| required_quality_disclosure | Missing identities/amounts, measurement uncertainty, inactive routes, untested site functions, source date/scope, outsourcing and upstream gaps |
| update_trigger | Changed layout/feed-point count, drive/control architecture, polymer grade or metal coating, module completeness, measured M, site/supply or resolved evidence gaps |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `bd-feeder` | handbook | [AugerMatic — The feeding system for successful poultry growing](https://cdn.bigdutchman.com/fileadmin/content/poultry/products/en/poultry-growing-Augermatic-Big-Dutchman-en.pdf) | en 11/2015, PDF page 2 component list/diagram: hopper, tube/auger, pan, drive/sensor and suspension. Historical configuration example only; no current capacity, farm benefit, net machine weight or manufacturing amount inferred. |
| `roxell-pan` | handbook | [Boozzter technical information](https://www.roxell.com/sites/default/files/roxell/TD_Boozzter_EN.pdf) | Undated sheet, PDF creation metadata 2025-02-10; PDF page 1 Technical info material rows identify a PP pan, nylon support and galvanized steel tube. Grade/formulation, manufacturing quantities and complete-equipment mass are not supplied. Feed contents and animal weights are not equipment mass. |
| `roxell-chain` | literature | [Fortena chain feeding system for broiler breeders](https://www.roxell.com/fortena-chain-feeding-system) | Named management/support, trough-connector and corner-wheel paragraphs: separate chain/trough architecture, polyamide connectors, bearing corner units and control/support options. Product example, not universal PA6 grade, maintenance prescription or manufacturing range. |
| `roxell-factory` | literature | [Innovation, a cornerstone of Roxell’s corporate culture](https://www.roxell.com/innovation) | Infrastructure for innovation: injection molding and molds in the development facility. Candidate technique only; no claim of mandatory commercial molding, machine energy intensity or industry production recipe. |
