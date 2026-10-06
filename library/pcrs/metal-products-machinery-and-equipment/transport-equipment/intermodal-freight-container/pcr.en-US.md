---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.intermodal-freight-container
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Closed steel dry intermodal freight container manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete closed steel dry intermodal freight containers with plywood floors and declared door layouts. Foreground starts at documented stock/component receipt and ends at empty-container acceptance and the declared manufacturer dispatch gate. Actual stock forming, structural joining, preparation/coating, floor/door fitting and acceptance are collected with their make-or-buy scope. Supplier upstream is linked only when supported; this receipt-to-dispatch foreground does not itself constitute complete cradle-to-gate coverage. [Sources: `seabox-dry`, `seabox-manufacturing`]

Exclude refrigerated, tank, open-top, flat-rack, bulk and non-steel/non-plywood variants, swap bodies, aircraft unit-load devices, offshore containers, building/storage conversions, repair, cargo handling/transport operation, maintenance and end of life. CPC 49221 is broader. Existing motor-vehicle body methodology does not cover independent intermodal corner interfaces, empty-box acceptance or plywood floor configuration; legacy classification scaffolds are not promoted. No transport service is included. Scientific review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.intermodal-freight-container |
| classification_refs | CPC 3.0 49221; narrower closed steel dry-container manufacture scope, context only |
| covered_products | New complete empty closed steel dry containers with plywood floor, declared dimensions and doors |
| excluded_products | Other container constructions, transport/storage services and modifications |
| representative_product | One serial-linked complete accepted empty container with measured net M |
| production_route | Conditional cutting/forming, frame/shell joining, conditional finishing, floor/door fitting and acceptance |
| market_state | Accepted empty complete container at declared dispatch gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured closed steel dry freight container |
| How much | 1 kg net accepted empty container; per-container records converted using measured M |
| How well | Configuration-specific producer release acceptance; trace approval scheme when claimed. Equal mass does not imply equal cargo capacity or service performance |
| How long or cycle | One manufacturing and acceptance cycle; no assumed service lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Containers specially designed and equipped for carriage by one or more modes of transport `89d4bb67-2735-4ecf-9672-539f6f94d8f4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model; serial and drawing revision; closed steel dry-container type and dimensions; wall/roof/frame steel grade/thickness; corner-fitting and interface specification; plywood veneer/bonding/treatment/floor construction; door layout, hinges, locking and gasket/sealant formulation; coating layer/formulation and make-or-buy completeness; installed integral fittings and detached delivered parts; empty condition excluding cargo, removable protection and transport fixtures; positive measured net mass M, scale calibration and tare; applicable approval scheme and trace if claimed; actual manufacturing/outsourcing route, factory/period, dispatch gate and upstream coverage |

Declare all qualifiers in metadata or equivalent reference comments. The broad public manufactured-container identity requires this narrower configuration. M is measured complete empty accepted container mass, including floor, fitted doors, corner fittings and integral delivered components. Separately weigh and reconcile any integral part detached for delivery. Exclude cargo, removable protection, carrier lifting/transport fixtures and sold spares. Catalogue nominal tare/gross/payload, TEU designation and volume are not this measured M and are not conversion factors.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `energy_conversion` | electricity | Net calorific value | MJ | Collect actual factory intake/station kWh and convert by the verified unit-group identity 3.6 MJ/kWh. Nameplate kW is not energy; voltage-specific supply must match actual intake. |
| `gas_volume` | curing_gas | Volume | m3 | Preserve the public volume reference property. Collect actual supplied pipeline gas m3 at recorded meter temperature/pressure; reconcile billing conversions and do not assume kg or a universal heating value. |
| `formulation_mass` | liquid formulations | Mass | kg | Weigh actual paint/sealant formulation; any volume-to-mass conversion requires foreground-measured density at declared composition/state/temperature. No catalogue coverage ratio is a manufacturing amount. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified stock, corner fittings, plywood and door components; declared supplier completeness |
| starting_condition_role | Foreground stock/component receipt to accepted empty container dispatch |
| product_classification_scope | Closed steel dry intermodal container with plywood floor |
| recursive_input_rule | No complete container input generated recursively from its own output; completed bought-in modules bypass performed constituent operations |
| upstream_dataset_requirement | Match grade/form, plywood bonding/treatment, coating, supply route and geography; disclose unlinked supplier production |
| disclosure | manufacturer/model; serial and drawing revision; closed steel dry-container type and dimensions; wall/roof/frame steel grade/thickness; corner-fitting and interface specification; plywood veneer/bonding/treatment/floor construction; door layout, hinges, locking and gasket/sealant formulation; coating layer/formulation and make-or-buy completeness; installed integral fittings and detached delivered parts; empty condition excluding cargo, removable protection and transport fixtures; positive measured net mass M, scale calibration and tare; applicable approval scheme and trace if claimed; actual manufacturing/outsourcing route, factory/period, dispatch gate and upstream coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all stages | Include attributable production/rework and actual acceptance-support tests in the reporting period. Outsourced forming/coating requires a measured supplier module or disclosed gap. Exclude transport cycles, loading, repairs and owner periodic examination; CSC approval overview does not impose a universal manufacturing test load/frequency. | `imo-csc` |
| `boundary_components` | received modules | Count each stock or supplied finished module once. A purchased finished frame/shell/door replaces its included stock/hardware and completed operations. Add every actual missing component and chemistry before completing a dataset; the candidate card set is not an exhaustive BOM. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Steel stock cutting and forming | conditional | Unformed steel stock is processed in the declared foreground. | foreground | one accepted configured container, normalized with M |
| `shell_join` | Frame and shell assembly | required | Each new complete container. | foreground | one accepted configured container, normalized with M |
| `surface_finish` | Surface preparation and coating | conditional | Surface preparation/coating occurs within the declared foreground. | foreground | one accepted configured container, normalized with M |
| `floor_door` | Plywood floor and door fitting | required | Each declared closed steel dry container with plywood floor. | foreground | one accepted configured container, normalized with M |
| `acceptance` | Empty-container acceptance | required | Each finished accepted container. | foreground | one accepted configured container, normalized with M |
| `packing` | Conditional dispatch protection | conditional | Removable protection is actually supplied at dispatch. | foreground | one accepted configured container, normalized with M |

Actual stock forming feeds frame/shell joining, actual preparation/coating and floor/door fitting, followed by empty-container acceptance and conditional protection. Each card applies only to its exact material/state and supplier completeness even within a required stage. Add every actual alternative formulation and demonstrated emission species separately; no universal recipe or unavoidable emission is asserted.

### Process: Steel stock cutting and forming (`stock_form`)

Cut and form actual grade/thickness sheet into wall/roof/door panels and structural stock into rails/crossmembers. Record corrugation tooling and drawings, stock issues/returns and segregated offcuts. Purchased formed panels bypass their completed forming; do not count constituent stock again. Add separately any actual cutting gas, lubricant or die consumable.

#### Inputs

##### Product flows

###### Hot-rolled weathering-steel thin sheet for container panels (`weathering_sheet`)

Only actual supplier-certified hot-rolled weathering-steel thin sheet of one declared grade, thickness and delivery state used for local container-panel forming. Weigh net stock issues and returns and retain supplier scope; purchased formed panels replace their contained sheet and completed forming. No universal steel grade, thickness or sheet yield is prescribed.

- Selected flow: Hot-rolled weathering-steel thin sheet for container panels
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources:

###### Formed weathering-steel container rail profile (`weathering_profile`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Formed weathering-steel container rail profile
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources:

###### Alternating-current electricity supplied at the declared factory intake (`electricity_stock_form`)

Collect actual station electricity kWh, shared-driver denominator, site intake voltage and geography; convert kWh to MJ by unit identity, not motor nameplate power.

- Selected flow: Alternating-current electricity supplied at the declared factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources:

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Segregated untreated steel cutting offcuts exported after internal reuse; weigh actual mass and retain recipient.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources:

### Process: Frame and shell assembly (`shell_join`)

Assemble base frame, corner posts/fittings, rails, wall/roof panels and door frame by the actual documented joining route. Manufacturer examples show welding, but MIG, TIG and stick are alternatives, not simultaneous requirements. Each actual filler and shielding gas has a separate row. Received welded modules replace their constituents once; dimensional and weld inspection records link to the serial configuration.

#### Inputs

##### Product flows

###### Cast-steel intermodal-container corner fitting (`corner_fitting`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Cast-steel intermodal-container corner fitting
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shell_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_join`
- Sources: `seabox-manufacturing`

###### Solid low-alloy steel gas-shielded welding wire (`welding_wire`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Solid low-alloy steel gas-shielded welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shell_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_join`
- Sources: `seabox-manufacturing`

###### Carbon dioxide (`co2_shield`)

Only supplied CO2 shielding gas actually used in a CO2 welding route matching the at-plant China identity, with measured consumed mass; excludes argon/CO2 premix and liquid CO2 handling if scope differs. No automatic fossil-emission assumption.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shell_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_join`
- Sources: `seabox-manufacturing`

###### Argon/carbon-dioxide premixed welding shielding gas (`argon_co2`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Argon/carbon-dioxide premixed welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shell_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_join`
- Sources: `seabox-manufacturing`

###### Alternating-current electricity supplied at the declared factory intake (`electricity_shell_join`)

Collect actual station electricity kWh, shared-driver denominator, site intake voltage and geography; convert kWh to MJ by unit identity, not motor nameplate power.

- Selected flow: Alternating-current electricity supplied at the declared factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shell_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_join`
- Sources: `seabox-manufacturing`

#### Outputs

##### Waste flows

###### Captured iron-oxide-rich welding filter dust transferred as waste (`weld_dust`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Captured iron-oxide-rich welding filter dust transferred as waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shell_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_join`
- Sources: `seabox-manufacturing`

### Process: Surface preparation and coating (`surface_finish`)

Record actual cleaning, blasting, primer, topcoat and curing. Coated purchased parts bypass completed operations. Cast steel shot, waterborne zinc-rich epoxy primer and waterborne acrylic topcoat are conditional formulation-specific cards, not a universal container recipe; add every actual alternative chemistry separately. Waste transfer is distinct from environmental release. Fuel-fired curing is conditional on an actual fossil pipeline-gas meter and measured combustion; do not infer emissions from weld shielding gas.

#### Inputs

##### Product flows

###### Process Water (`process_water`)

Supplied treated industrial process water used in actual cleaning/coating operations; measure fresh supplied amount, not internal recirculation or environmental withdrawal.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

###### Cast-steel spherical blasting shot (`steel_shot`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Cast-steel spherical blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

###### Waterborne zinc-rich epoxy container primer formulation (`epoxy_primer`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Waterborne zinc-rich epoxy container primer formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

###### Waterborne acrylic container topcoat formulation (`acrylic_topcoat`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Waterborne acrylic container topcoat formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

###### natural gas in the gaseous state (`curing_gas`)

Only actually supplied fossil pipeline natural gas used for curing, measured in m3 at declared meter temperature/pressure; preserve volume reference property and conditions. No universal curing fuel or calorific factor.
Public identity retains reference flow property `93a60a56-a3c8-22da-a746-0800200c9a66`, unit group `93a60a57-a3c8-12da-a746-0800200c9a66` and exchange unit m3.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

###### Alternating-current electricity supplied at the declared factory intake (`electricity_surface_finish`)

Collect actual station electricity kWh, shared-driver denominator, site intake voltage and geography; convert kWh to MJ by unit identity, not motor nameplate power.

- Selected flow: Alternating-current electricity supplied at the declared factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

#### Outputs

##### Waste flows

###### Spent cast-steel blasting shot with removed iron-oxide coating residue (`spent_shot`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Spent cast-steel blasting shot with removed iron-oxide coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

###### Waste waterborne epoxy/acrylic coating sludge (`paint_sludge`)

Only an actually collected mixed waterborne zinc-rich epoxy-primer/acrylic-topcoat sludge leaving one declared collection outlet; measure wet mass, solids/moisture and recipient. Distinct segregated residues require separate rows, not summation into this mixed stream.

- Selected flow: Waste waterborne epoxy/acrylic coating sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

###### Aqueous steel-cleaning effluent transferred for treatment (`clean_effluent`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Aqueous steel-cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only attributable measured fossil combustion CO2 discharged to air, unspecified subcompartment, when actual curing fuel is demonstrably fossil. No inferred shielding-gas origin, biogenic substitution or unavoidable emission claim.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `seabox-manufacturing`

### Process: Plywood floor and door fitting (`floor_door`)

Fit declared marine plywood floor, steel fasteners, steel door hinges and locking rods, gasket and seam sealant as supplied. Retain floor construction/treatment and adhesive specification, door layout, hardware inclusion and measured part masses. EPDM gasket and one-component polyurethane sealant apply only if actual specifications match. Purchased fitted door assemblies replace included components; no duplicate inputs. Manufacturer dimensions/load ratings are examples, not universal requirements or mass conversions.

#### Inputs

##### Product flows

###### Phenolic-bonded marine plywood container floor panel (`marine_plywood`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Phenolic-bonded marine plywood container floor panel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

###### Steel threaded plywood-floor fixing screw (`floor_screw`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Steel threaded plywood-floor fixing screw
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

###### Steel intermodal-container door hinge (`door_hinge`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Steel intermodal-container door hinge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

###### Steel container-door locking cam rod assembly (`locking_rod`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Steel container-door locking cam rod assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

###### EPDM rubber container-door sealing gasket (`epdm_gasket`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: EPDM rubber container-door sealing gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

###### One-component polyurethane container-seam sealant (`pu_sealant`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: One-component polyurethane container-seam sealant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

###### Alternating-current electricity supplied at the declared factory intake (`electricity_floor_door`)

Collect actual station electricity kWh, shared-driver denominator, site intake voltage and geography; convert kWh to MJ by unit identity, not motor nameplate power.

- Selected flow: Alternating-current electricity supplied at the declared factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

#### Outputs

##### Waste flows

###### Phenolic-bonded plywood floor offcut transferred as waste (`plywood_offcut`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Phenolic-bonded plywood floor offcut transferred as waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_floor_door.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_floor_door`
- Sources: `seabox-dry`

### Process: Empty-container acceptance (`acceptance`)

Reconcile configuration, corner/fitting dimensions, joining/coating/floor/door acceptance and empty net mass M. Record actual weather-tightness and approval-support tests performed under the applicable approval scheme; type/batch tests are not automatically repeated on every serial unit. A claimed CSC safety approval requires traceable approval and plate data from the relevant authority scheme; classification or generic supplier certification is insufficient. Any actual leak-test water, test waste or plate input is recorded separately.

#### Inputs

##### Product flows

###### Stamped aluminium container safety-approval plate (`approval_plate`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Stamped aluminium container safety-approval plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `imo-csc`

###### Process Water (`leak_water`)

Only actual supplied treated process water for weather-tightness checking; not mandatory for every approval scheme. Record measured input, recycling and actual outlet separately.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `imo-csc`

###### Alternating-current electricity supplied at the declared factory intake (`electricity_acceptance`)

Collect actual station electricity kWh, shared-driver denominator, site intake voltage and geography; convert kWh to MJ by unit identity, not motor nameplate power.

- Selected flow: Alternating-current electricity supplied at the declared factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `imo-csc`

#### Outputs

##### Product flows

###### Containers specially designed and equipped for carriage by one or more modes of transport (`finished_machine`)

One kg of the accepted complete empty closed steel dry container with declared plywood floor and door configuration, at the declared manufacturing gate. Generic public container identity requires all product qualifiers. No cargo/transport service or complete upstream claim.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Containers specially designed and equipped for carriage by one or more modes of transport `89d4bb67-2735-4ecf-9672-539f6f94d8f4`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `imo-csc`

#### Outputs

##### Waste flows

###### Collected container leak-test water transferred for treatment (`test_water_waste`)

Only the specifically declared actual exchange; measure issues/returns or outlet mass and retain exact composition, state, supplier scope and destination.

- Selected flow: Collected container leak-test water transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `imo-csc`

### Process: Conditional dispatch protection (`packing`)

Measure each actual material separately and exclude removable film/transport fixtures from M. Integral components detached for shipment remain in the declared container completeness with separately weighed masses. Exclude cargo, separately sold spares and carrier equipment.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only separately supplied removable, non-self-adhesive, non-cellular, unreinforced and unlaminated PE-LD protection foil matching the public classification; weigh issue-return balance and exclude from net M.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Alternating-current electricity supplied at the declared factory intake (`electricity_packing`)

Collect actual station electricity kWh, shared-driver denominator, site intake voltage and geography; convert kWh to MJ by unit identity, not motor nameplate power.

- Selected flow: Alternating-current electricity supplied at the declared factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | Separate orders by dimensions/door/floor/coating configuration. Directly attribute measured issues, returns, station meters, rejects and rework first. Inseparable shared utilities use a demonstrated measured causal driver such as coated area with layer/process load or station time: share = order driver / sum of all covered drivers. Retain period, denominator and justification; container count or nominal tare alone does not establish causality between different configurations. |  |
| `allocation_residues` | reuse and exports | Internal reused stock, abrasive and water are transfers; count fresh supply and actual exports without double counting circulation. Waste keeps measured mass and destination with no automatic avoided-product credit. Separate saleable co-products before a documented reviewed residual allocation. Attribute production rejects/rework to accepted output over the same period and reconcile work in progress. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted empty-container net mass | weighing_record | model; configuration; serial; accepted net mass M; scale_id; calibration; empty condition; floor/door/corner fittings; detached integral parts; cargo exclusion; packaging/fixture tare; release record | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each container or representative same-configuration batch | same manufacturing order period | declared factory | accepted net mass per unit | calibration, empty state, tare, configuration and release record |
| `cp_stock_form` | stock_form | Steel stock cutting and forming | foreground_record | serial/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; electricity kWh/intake voltage; pipeline gas m3/meter conditions; waste recipient; actual emissions; shared driver/denominator; calibration | Weigh grade-specific issues/returns and offcuts; record sheet thickness, tooling, order/drawing and station meters. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted units | BOM, weighing, meters, tests, transfers and acceptance |
| `cp_shell_join` | shell_join | Frame and shell assembly | foreground_record | serial/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; electricity kWh/intake voltage; pipeline gas m3/meter conditions; waste recipient; actual emissions; shared driver/denominator; calibration | Retain joining procedure, filler/gas SDS, measured consumption, weld/rework records, constituent completeness and dimensional inspection. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted units | BOM, weighing, meters, tests, transfers and acceptance |
| `cp_surface_finish` | surface_finish | Surface preparation and coating | foreground_record | serial/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; electricity kWh/intake voltage; pipeline gas m3/meter conditions; waste recipient; actual emissions; shared driver/denominator; calibration | Collect layer SDS, weighed formulation issues/returns, cleaning water, spent abrasive/paint outlet, actual curing meters and attributable emission measurements. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted units | BOM, weighing, meters, tests, transfers and acceptance |
| `cp_floor_door` | floor_door | Plywood floor and door fitting | foreground_record | serial/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; electricity kWh/intake voltage; pipeline gas m3/meter conditions; waste recipient; actual emissions; shared driver/denominator; calibration | Weigh plywood and hardware issues/returns, record supplier included components, floor treatment/SDS, serial-linked door operation and fit acceptance. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted units | BOM, weighing, meters, tests, transfers and acceptance |
| `cp_acceptance` | acceptance | Empty-container acceptance | foreground_record | serial/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; electricity kWh/intake voltage; pipeline gas m3/meter conditions; waste recipient; actual emissions; shared driver/denominator; calibration | Retain serial/drawing, release criteria/results, approval/type-test trace if claimed, plate details, calibrated empty weighing, tare and dispatch completeness. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted units | BOM, weighing, meters, tests, transfers and acceptance |
| `cp_packing` | packing | Conditional dispatch protection | foreground_record | serial/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; electricity kWh/intake voltage; pipeline gas m3/meter conditions; waste recipient; actual emissions; shared driver/denominator; calibration | Weigh protection, retain tare/returns and reconcile integral delivered parts. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted units | BOM, weighing, meters, tests, transfers and acceptance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each homogeneous configuration/order, reconcile net issues (issues minus returns and recorded inventory change), utilities, wastes and actual emissions after direct attribution and justified shared allocation; divide each total by accepted container count to obtain q_item, then by measured M. Maintain mass exchanges kg/kg, gas m3/kg and electricity MJ/kg. For compatible serial units with measured M variation, preserve serial records and use attributable totals divided by the sum of accepted masses. Separate incompatible dimensions, door/floor/coating and make-or-buy scope. Unknown is a gap, never zero; no nominal tare, payload or marketing throughput becomes a conversion.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_completeness` | complete container | Reconcile actual BOM/drawing, shell/frame/corners, floor, doors/hardware, coating and integral fittings to measured empty M. Resolve included supplier constituents and detached-part masses; add omitted actual exchanges before dataset completion. | drawings, weighing and supplier scope |
| `quality_balance` | material and utilities | Retain calibration, stock/issue/return/reuse balances, SDS/state/density, coating uptake/residue, gas meter conditions, actual emission measurements and waste recipients. QA limits must arise from site records or comparable primary evidence; no invented yields, ranges or mandatory losses. | stock, meters, measurements and transfers |
| `quality_coverage` | dataset | Disclose site/period, configuration/approval scope, conditional absences, outsourcing, identity/quantity uncertainty and supplier upstream gaps. Model examples and approval overviews do not establish actual certificates, universal recipes or net M. No boundary-compatible empirical intensity ranges are adopted here. | coverage and evidence register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require positive measured M for the same complete empty closed steel dry-container configuration, including declared floor, fitted doors, corners and integral delivered parts. Reject cargo, nominal payload/gross weight, TEU or transport-service substitutions. Verify approval claims against actual scheme/plate records, not classification alone. | `imo-csc` |
| `validate_identity` | all rows | Check atomic material/form, exact public reference property/unit group, route, state and environmental medium. Pure CO2 gas is not argon mixture; process water is not environmental water; captured dust/waste transfer is not air or water release. Retain blank UUID where identity applicability is not established. |  |
| `validate_measurement` | all rows | Trace per-container or batch collection to the same measured M, configuration, site and period; verify unit conversions, gas meter conditions and shared-driver denominators. Prevent received-module constituent duplication and unknown-to-zero defaults. |  |
| `validate_emissions` | elementary rows | Use only demonstrated attributable factory species/origins and actual medium. Fossil CO2 applies to air-unspecified only with fossil provenance. Distinguish CO2, CO, NO, NO2, N2O, biogenic origin and captured residues; add each actual species separately. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete empty closed steel dry-container foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching container dimensions, material/floor/door/coating configuration, supplier completeness and gate/site/period |
| excluded_use | Freight service/lifetime equivalence, other container technologies, building conversion and unsupported complete cradle-to-gate claims |
| required_metadata | manufacturer/model; serial and drawing revision; closed steel dry-container type and dimensions; wall/roof/frame steel grade/thickness; corner-fitting and interface specification; plywood veneer/bonding/treatment/floor construction; door layout, hinges, locking and gasket/sealant formulation; coating layer/formulation and make-or-buy completeness; installed integral fittings and detached delivered parts; empty condition excluding cargo, removable protection and transport fixtures; positive measured net mass M, scale calibration and tare; applicable approval scheme and trace if claimed; actual manufacturing/outsourcing route, factory/period, dispatch gate and upstream coverage |
| required_quality_disclosure | Identity/quantity gaps, uncertainty, conditional absence, full-BOM completion, allocation, approval applicability and unlinked upstream |
| update_trigger | Material/dimensions/door/floor/coating, supplier module scope, M, manufacturing route, approval scheme, site/period or evidence changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `seabox-dry` | literature | [SEA BOX 20ft Dry Freight Container, All Access, SB894.0](https://www.seabox.com/products/detail/SB894.0-20ft-dry-freight-all-access) | Features list: corrugated steel roof, door layouts, marine plywood floor and fittings. Weight disclaimer: dimensions/weights nominal. Retrieved 2026-10-05; undated product example only, no floor thickness/load, nominal mass or coating recipe adopted as universal rule/factor. |
| `seabox-manufacturing` | literature | [SEA BOX Manufacturing](https://www.seabox.com/services/manufacturing) | Manufacturing paragraphs: weld/fabricate, clean/paint/finish, alternative MIG/TIG/stick capability and documented quality procedures. Retrieved 2026-10-05; undated factory example, no mandatory weld method, recipe, capacity, certification or resource intensity inferred. |
| `imo-csc` | official_guidance | [IMO: International Convention for Safe Containers (CSC)](https://www.imo.org/en/ourwork/safety/pages/containers-default.aspx) | Safety approval and Safety Approval Plate paragraphs: authority approval and traceable plate information for the applicable scheme. Retrieved 2026-10-05. Overview only, not full convention/test standard or proof of an actual product certificate; no numerical test threshold/frequency/lifetime adopted. Owner maintenance remains excluded. |
