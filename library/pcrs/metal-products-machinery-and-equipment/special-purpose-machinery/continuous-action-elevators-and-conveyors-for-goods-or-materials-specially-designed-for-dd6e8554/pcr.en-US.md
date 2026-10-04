---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Continuous-action elevators and conveyors, for goods or materials, specially designed for underground use

## 1. Scope and Applicability

This PCR produces configuration-specific cradle-to-gate foreground packages for complete continuous-action elevators and conveyors specially designed for underground use. Factory release includes the installed conveying element, supporting structure, drive, controls, guarding, safety devices and declared first-fill fluids. It covers belt, chain/scraper/flight, armoured-face and stage-loading architectures, flexible continuous haulage, and actual underground-designed bucket or other continuous elevators. Underground engineering and acceptance records, rather than an aboveground product label, establish inclusion.
Komatsu provides directly inspected examples of cast-side AFC pans and combined belt/chain flexible haulage; independent Fenner evidence establishes underground PVC/PVG belt alternatives and JDT/ITG support chain manufacture and hardening. These are route examples, not compulsory designs, recipes or industry averages. Bucket/other routes remain available with actual design evidence; no unverified underground bucket design, belt formulation or compliance certificate is presumed.
Exclude ordinary aboveground conveyors, transport services, standalone replacement belts/chains/parts, liquid elevators, discontinuous shaft hoists, personnel lifts, cutters, boring/tunnelling machines, roof supports and mine civil works. Integrated conveying assemblies include supplied feed/discharge and safety interfaces; a separately marketed crusher or cutter is excluded. Factory acceptance testing is included; installation, conveying-service energy, maintenance and end of life are later stages.
## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554 |
| classification_refs | CPC 3.0: 44411 |
| covered_products | Complete underground-designed continuous belt, chain, scraper, flight, bucket and other elevators/conveyors; stationary and flexible systems |
| excluded_products | Aboveground general conveyors; parts; discontinuous hoists; cutters/borers; transport service |
| representative_product | Complete accepted underground material conveyor of a declared architecture; no one model represents all architectures |
| production_route | Actual make/buy matrix; receipt; conditional fabrication/casting/chain/belt/finishing; assembly; factory test; dispatch |
| market_state | Accepted factory-gate complete machine, net of transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a complete underground-designed continuous goods/material conveyor or elevator |
| How much | One accepted complete machine; inventory normalized per 1 kg reference flow |
| How well | Declared architecture, capacity, length/lift, inclination, speed, material size, underground/hazardous area, fire/antistatic safety and acceptance specification |
| How long or cycle | One factory-gate provision; no default lifetime or operating cycle |
| reference_flow_link | finished_underground_conveyor |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Continuous-action elevators and conveyors, for goods or materials, specially designed for underground use `609af8a1-d52f-4af9-9baf-fefe36a22a50` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; same configuration and architecture; accepted BOM; net mass; belt/PVC/PVG/chain/bucket specification; handled material; capacity; length/lift; speed; inclination; drive/coupling; voltage; underground and hazardous-area basis; fire/antistatic requirement; supplier states; test boundary; site; period; make/buy; packaging |

The mass-normalized output is a manufacturing reference, not a functional equivalence between machines. Comparisons require matching architecture, capacity and safety configuration. All qualifiers must be declared in the foreground package.
## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| physical_species | physical material and species records only | Mass | kg | Each material uses its own wet/dry basis, moisture and assay; retained first-fill belongs to machine mass, packaging and rejects do not. Gross mass is not contained Fe, Cr, Mn, Zn, solvent or oil mass. |
| utility_units | utility records | Recorded delivered property | native meter unit | Keep electricity kWh, heat MJ and gas volume/state separate; 1 kWh = 3.6 MJ is an exact conversion, not an electricity emission factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased grade-specific materials and completed components delivered to the plant; supplied processing and prefill declared |
| starting_condition_role | Foreground manufacturing with upstream supply chains linked once |
| product_classification_scope | Underground-specialized continuous goods/material machinery; all actual architectures |
| recursive_input_rule | A bought complete same-category machine or subassembly is one purchased product with its upstream dataset; do not expand its same operations again |
| upstream_dataset_requirement | Match actual grade, manufacturing route, supplier state, geography, period, voltage and waste-treatment interface; disclose unresolved proxies |
| disclosure | Configuration, make/buy matrix, site, period, supplies, test mode, allocation, unmeasured exchanges and later stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_manufacture | foreground | Include attributable receipt, actual manufacture, finishing, assembly, first fill, testing, rejects/rework, factory waste/emissions and dispatch. |  |
| b_makebuy | all processes | Use the matrix below: bought finished components retain upstream burdens once; in-house raw inputs replace bought finished equivalents. Internal transfer cancels in consolidated inventory. | komatsu-longwall-2023 |
| b_later | foreground | Separate underground installation, use-stage transport energy, maintenance and end of life; no crusher/cutter/roof support is a reference conveyor. | komatsu-haulage-2021;un-cpc-3-2025 |

### Make/buy and architecture matrix

| Architecture | Actual elements | Buy route | Make route |
| --- | --- | --- | --- |
| AFC | Cast sides, abrasion decks, chain, flights, drives | Purchase finished casting/chain; fabricate only actual plates and finish machining | Cast alloy charge/mould/capture balance; link forming/welding/heat treatment/proof tests when performed |
| Belt/FCT | Fire-resistant belt, rollers/pulleys, drive and actual traction components | Purchase specified PVC/PVG/rubber belt with supplier burden; install and splice only | PVC solid-woven route: actual impregnation/plasticization; rubber route: actual calendering/vulcanization; PVG cover route only as actual work orders establish. Split every measured constituent; no common recipe or universal vulcanization requirement. |
| Bucket/other | Actual underground-designed conveying element and drive | Purchase completed buckets/chain or belt; retain supplier state | Cut/form/join actual bucket grade and actual drive/element operations; obtain project design evidence |
| Drive/control | Motors, reducers, coupling, cabinet, cable and safety devices | One complete bought component, including embedded metal/electronics/prefill | Only actual in-house manufacture and additional fill/test loads; no duplicate embedded bill |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Receipt, kitting and inbound transport | required | Always | actual foreground operation | per one accepted finished machine |
| fabrication | Plate fabrication and machining | conditional | In-house frames, pans, chutes, buckets, shafts or pulleys | actual foreground operation | per one accepted finished machine |
| casting | Steel component casting | conditional | Actual in-house cast pan sides, driveframes or housings | actual foreground operation | per one accepted finished machine |
| chain | Chain and flight manufacture | conditional | Actual in-house links, connectors, flightbars or sprockets | actual foreground operation | per one accepted finished machine |
| belt | Belt and elevator conveying-element manufacture | conditional | Actual in-house belt building or bucket manufacture; separate actual routes | actual foreground operation | per one accepted finished machine |
| finish | Cleaning and surface protection | conditional | Actual cleaning, blasting or coating at site | actual foreground operation | per one accepted finished machine |
| assembly | Assembly, first fill and factory acceptance | required | Always | actual foreground operation | per one accepted finished machine |
| services | Residual shared utilities and dispatch | required | Only attributable unassigned residual site services and dispatch | actual foreground operation | per one accepted finished machine |

The following are atomic route cards, not a recipe or closed default BOM. A data package must add separate rows for each actual grade, resin, hardener, cure agent, flame retardant, reinforcement, fuel, lubricant, hydraulic component, bearing, fastener, sensor, hydraulic cylinder, hazardous waste or pollutant not represented. Purchased components embed their manufacture once. Every added row must retain the same denominator, linked protocol, exact physical identity and route evidence. Use not_applicable only with evidence of physical absence; record unknown separately.
### Process: Receipt, kitting and inbound transport (`receipt`)

#### Inputs

##### Product flows

###### Cast steel AFC pan side section (`purchased_pan_side`)

Purchased finished casting only; record its actual alloy grade and supplied machining state.

- Selected flow: Cast steel AFC pan side section
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`

###### Heat-treated welded alloy-steel conveyor chain (`purchased_chain`)

Purchased completed chain; specify grade, link geometry, pitch and test certificate.

- Selected flow: Heat-treated welded alloy-steel conveyor chain
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `jdt-manufacturing`; `itg-chain-hardening`

###### Fire-resistant antistatic PVC solid-woven conveyor belt (`purchased_belt`)

Only when this purchased belt construction is actually installed; do not substitute generic rubber belting.

- Selected flow: Fire-resistant antistatic PVC solid-woven conveyor belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `fenner-pvc`

###### Fire-resistant textile-reinforced rubber conveyor belt (`purchased_rubber_belt`)

Only actual bought underground-certified rubber belt; this is not PVC/PVG compound chemistry.

- Selected flow: Fire-resistant textile-reinforced rubber conveyor belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `fenner-production`

###### Fire-resistant rubber-covered PVC solid-woven conveyor belt (`purchased_pvg`)

Only actual purchased PVG configuration; PVC-only and PVG are alternatives unless separately supplied.

- Selected flow: Fire-resistant rubber-covered PVC solid-woven conveyor belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `fenner-pvg`

###### Fabricated steel elevator bucket (`purchased_bucket`)

Actual purchased bucket installed in an underground-designed continuous elevator; retain grade and net mass.

- Selected flow: Fabricated steel elevator bucket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`

###### Diesel truck freight transport service (`inbound_road`)

Actual road deliveries; use shipment payload-distance, not factory machine mass multiplied by arbitrary distance.

- Selected flow: Diesel truck freight transport service
- Flow property / unit: Mass * distance / t km
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_transport.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`

###### Purchased alternating-current electricity (`electricity_receipt`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Plate fabrication and machining (`fabrication`)

#### Inputs

##### Product flows

###### Abrasion-resistant steel plate (`abrasion_plate`)

For actual fabricated AFC upper decks or wear liners; declare mill grade and heat certificate.

- Selected flow: Abrasion-resistant steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `komatsu-longwall-2023`

###### Structural carbon-steel plate (`structural_plate`)

Actual cut/bent/welded structure; record certified grade separately from abrasion plate.

- Selected flow: Structural carbon-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Alloy-steel shaft bar (`shaft_bar`)

Only actual in-house shaft machining; state specific alloy grade and incoming condition.

- Selected flow: Alloy-steel shaft bar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Solid carbon-steel welding wire (`welding_wire`)

Only the actual wire grade consumed in gas-shielded welding; split every other consumable.

- Selected flow: Solid carbon-steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Argon shielding gas (`argon`)

Only actual argon supply; mixture composition requires separately measured constituent or verified mixture flow.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Oxygen for thermal cutting (`oxygen_cut`)

Only actual oxygen cutting route; delivery state and purity specified.

- Selected flow: Oxygen for thermal cutting
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Water-miscible metalworking-fluid concentrate (`coolant`)

Actual machining coolant formulation and dilution; water is separate, not gross emulsion counted as concentrate.

- Selected flow: Water-miscible metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `jrc-metal-2020`

###### Purchased alternating-current electricity (`electricity_fabrication`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

###### Industrial process water (`water_fabrication`)

Only actual purchased water; meter makeup, constituent water, reuse, evaporation and discharge separately.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-metal-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel fabrication scrap (`steel_scrap`)

External recovery only; record grade and own moisture/oil assay; internal usable offcuts are paired transfers.

- Selected flow: Segregated steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Spent aqueous metalworking emulsion (`spent_emulsion`)

Actual off-site treatment; separate carrier water, contained oil and metals with matched sample.

- Selected flow: Spent aqueous metalworking emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `jrc-metal-2020`

###### Industrial aqueous wastewater (`wastewater_fabrication`)

Only actual externally treated discharge; identify treatment interface, pollutant concentrations and own moisture basis.

- Selected flow: Industrial aqueous wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

##### Elementary flows

### Process: Steel component casting (`casting`)

#### Inputs

##### Product flows

###### Alloy-steel foundry charge (`steel_charge`)

Only actual in-house casting; declare each grade/heat, virgin and external scrap separately; return gates cancel internally.

- Selected flow: Alloy-steel foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `komatsu-longwall-2023`

###### Silica moulding sand (`silica_sand`)

Only actual sand mould route, dry basis and binder separate.

- Selected flow: Silica moulding sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Sodium-silicate foundry binder (`silicate_binder`)

Only actual inorganic bonded mould; retain formulation water and solids.

- Selected flow: Sodium-silicate foundry binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Purchased alternating-current electricity (`electricity_casting`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

###### Industrial process water (`water_casting`)

Only actual purchased water; meter makeup, constituent water, reuse, evaporation and discharge separately.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-metal-2020`

###### Pipeline natural gas (`natural_gas_casting`)

Only actual gas-fired furnace/dryer/oven; measured composition, calorific basis and delivered supply; electricity furnace is alternative.

- Selected flow: Pipeline natural gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel-casting slag (`casting_slag`)

Actual external slag; own dry mass and alloy-element assay, never steel charge assay.

- Selected flow: Steel-casting slag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Captured steel-foundry filter dust (`foundry_dust`)

Actual filter residue leaving site; record own moisture and species assays.

- Selected flow: Captured steel-foundry filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Spent silica foundry sand (`spent_sand`)

Actual discarded moulding sand; reuse stock is distinct from waste.

- Selected flow: Spent silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Industrial aqueous wastewater (`wastewater_casting`)

Only actual externally treated discharge; identify treatment interface, pollutant concentrations and own moisture basis.

- Selected flow: Industrial aqueous wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_casting`)

Actual on-site fossil combustion; fuel carbon and species-specific stack evidence; no purchased-power combustion counted here.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`

### Process: Chain and flight manufacture (`chain`)

#### Inputs

##### Product flows

###### Alloy-steel chain wire rod (`chain_bar`)

Actual in-house chain route: cut/form/weld links, heat treat and proof test; use certified grade.

- Selected flow: Alloy-steel chain wire rod
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `jdt-manufacturing`; `itg-chain-hardening`

###### Alloy-steel flightbar forging (`flight_forging`)

Actual flightbars/sprockets/connector route; bought forging gets upstream forging once; further machining/hardening only here.

- Selected flow: Alloy-steel flightbar forging
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `jdt-manufacturing`

###### Mineral quenching oil (`quench_oil`)

Only actual oil hardening; measured makeup, recovered returns, carry-out and inventory change.

- Selected flow: Mineral quenching oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `itg-chain-hardening`

###### Purchased alternating-current electricity (`electricity_chain`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

###### Industrial process water (`water_chain`)

Only actual purchased water; meter makeup, constituent water, reuse, evaporation and discharge separately.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-metal-2020`

###### Pipeline natural gas (`natural_gas_chain`)

Only actual gas-fired furnace/dryer/oven; measured composition, calorific basis and delivered supply; electricity furnace is alternative.

- Selected flow: Pipeline natural gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent mineral quenching oil (`spent_quench`)

Actual discarded oil; internal recycled oil cancels as paired transfer.

- Selected flow: Spent mineral quenching oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Industrial aqueous wastewater (`wastewater_chain`)

Only actual externally treated discharge; identify treatment interface, pollutant concentrations and own moisture basis.

- Selected flow: Industrial aqueous wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_chain`)

Actual on-site fossil combustion; fuel carbon and species-specific stack evidence; no purchased-power combustion counted here.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`

### Process: Belt and elevator conveying-element manufacture (`belt`)

#### Inputs

##### Product flows

###### Unvulcanized fire-resistant rubber belt compound (`rubber_compound`)

Actual bought prepared compound consumed in calendering/vulcanization; no default polymer/filler recipe. If mixed on site split every actual constituent.

- Selected flow: Unvulcanized fire-resistant rubber belt compound
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `fenner-production`

###### Polyester textile belt carcass (`textile_carcass`)

Only actual polyester reinforcement; nylon or steel-cord reinforcements require separate rows.

- Selected flow: Polyester textile belt carcass
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `fenner-production`

###### PVC conveyor-belt impregnation compound (`pvc_compound`)

Actual purchased compounded PVC used in solid-woven impregnation/plasticization; record composition certificate and retained fraction.

- Selected flow: PVC conveyor-belt impregnation compound
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `fenner-pvc`

###### Purchased alternating-current electricity (`electricity_belt`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

###### Industrial process water (`water_belt`)

Only actual purchased water; meter makeup, constituent water, reuse, evaporation and discharge separately.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-metal-2020`

###### Pipeline natural gas (`natural_gas_belt`)

Only actual gas-fired furnace/dryer/oven; measured composition, calorific basis and delivered supply; electricity furnace is alternative.

- Selected flow: Pipeline natural gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Fire-resistant rubber conveyor-belt offcut (`belt_offcut`)

Actual rubber belt offcut leaving site; PVC waste requires its own separate row.

- Selected flow: Fire-resistant rubber conveyor-belt offcut
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Industrial aqueous wastewater (`wastewater_belt`)

Only actual externally treated discharge; identify treatment interface, pollutant concentrations and own moisture basis.

- Selected flow: Industrial aqueous wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_belt`)

Actual on-site fossil combustion; fuel carbon and species-specific stack evidence; no purchased-power combustion counted here.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`

### Process: Cleaning and surface protection (`finish`)

#### Inputs

##### Product flows

###### Steel abrasive blasting grit (`blasting_grit`)

Only actual blasting; reusable grit inventory and filter dust are separate.

- Selected flow: Steel abrasive blasting grit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Two-component epoxy protective coating (`epoxy_coating`)

Actual supplied resin/hardener mixed product; record separate batches, mixed ratio, water, solvent and dry solids; never assume all machines coated.

- Selected flow: Two-component epoxy protective coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Xylene solvent (`xylene_solvent`)

Only actual identified cleaning/thinning solvent; quantify constituents and isomer composition from SDS.

- Selected flow: Xylene solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Purchased alternating-current electricity (`electricity_finish`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

###### Industrial process water (`water_finish`)

Only actual purchased water; meter makeup, constituent water, reuse, evaporation and discharge separately.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-metal-2020`

###### Pipeline natural gas (`natural_gas_finish`)

Only actual gas-fired furnace/dryer/oven; measured composition, calorific basis and delivered supply; electricity furnace is alternative.

- Selected flow: Pipeline natural gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Epoxy-coating overspray sludge (`coating_sludge`)

Actual external coating residue; own solids, moisture, solvent and metal assay.

- Selected flow: Epoxy-coating overspray sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Industrial aqueous wastewater (`wastewater_finish`)

Only actual externally treated discharge; identify treatment interface, pollutant concentrations and own moisture basis.

- Selected flow: Industrial aqueous wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

##### Elementary flows

###### Xylene to air (`xylene_air`)

Only measured species-specific uncaptured release after retained product/recovery/capture/destruction/non-air terms; do not use generic VOC as xylene.

- Selected flow: Xylene to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`

###### Carbon dioxide, fossil, to air (`co2_finish`)

Actual on-site fossil combustion; fuel carbon and species-specific stack evidence; no purchased-power combustion counted here.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`

### Process: Assembly, first fill and factory acceptance (`assembly`)

#### Inputs

##### Product flows

###### Underground-rated AC drive motor (`motor`)

Actual purchased complete motor; supplied enclosure, cooling and hazardous-area rating declared.

- Selected flow: Underground-rated AC drive motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Industrial conveyor gear reducer (`gearbox`)

Actual purchased gearbox; declare ratio, torque, net mass and prefilled lubricant.

- Selected flow: Industrial conveyor gear reducer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Underground conveyor control cabinet (`control`)

Actual complete purchased cabinet; voltage, ingress protection and safety interfaces declared.

- Selected flow: Underground conveyor control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Steel conveyor idler roller (`idlers`)

Actual bought roller; record count and measured part mass, bearings included.

- Selected flow: Steel conveyor idler roller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Steel conveyor drive pulley (`pulley`)

Actual bought pulley; record steel body and supplied lagging state.

- Selected flow: Steel conveyor drive pulley
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Alloy-steel conveyor flightbar (`flightbar`)

Actual purchased completed flightbar, not made again in chain process.

- Selected flow: Alloy-steel conveyor flightbar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Copper-core insulated power cable (`copper_cable`)

Actual installed cable; separate shielding and conductor specification; net supplied component mass.

- Selected flow: Copper-core insulated power cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Mineral gear lubricating oil (`oil_fill`)

Only actual new first-fill mass retained; exclude oil already included in bought gearbox and maintenance.

- Selected flow: Mineral gear lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Fire-resistant water-glycol hydraulic fluid (`hydraulic_fill`)

Only actual supplied hydraulic/tensioning circuit; actual grade/composition and wet mass.

- Selected flow: Fire-resistant water-glycol hydraulic fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Demineralized water for fluid coupling (`coupling_water`)

Only actual water-medium coupling and factory testing/fill; distinguish retained charge from discharged test water.

- Selected flow: Demineralized water for fluid coupling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `komatsu-longwall-2023`; `komatsu-haulage-2021`

###### Purchased alternating-current electricity (`electricity_assembly`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

###### Industrial process water (`water_assembly`)

Only actual purchased water; meter makeup, constituent water, reuse, evaporation and discharge separately.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-metal-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Continuous-action elevators and conveyors, for goods or materials, specially designed for underground use (`finished_underground_conveyor`)

Accepted complete configuration, measured net mass; this is the reference output.

- Selected flow: Continuous-action elevators and conveyors, for goods or materials, specially designed for underground use `609af8a1-d52f-4af9-9baf-fefe36a22a50`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Spent mineral gear test oil (`spent_test_oil`)

Actual drained oil sent externally; recovered oil and installed first fill accounted separately.

- Selected flow: Spent mineral gear test oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Industrial aqueous wastewater (`wastewater_assembly`)

Only actual externally treated discharge; identify treatment interface, pollutant concentrations and own moisture basis.

- Selected flow: Industrial aqueous wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

##### Elementary flows

### Process: Residual shared utilities and dispatch (`services`)

#### Inputs

##### Product flows

###### Sawn softwood shipping crate (`wood_crate`)

Actual factory dispatch packaging; separate output and exclude from accepted machine net mass.

- Selected flow: Sawn softwood shipping crate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

###### Purchased alternating-current electricity (`electricity_services`)

Actual supplier, voltage, delivery meter and geography; this process gets only its own metered or causally allocated load.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `jrc-metal-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sawn softwood shipping crate (`packaging_output`)

Packaging accompanying shipment; mass reconciles to packaging input, not reference mass.

- Selected flow: Sawn softwood shipping crate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_physical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_direct | shared operations | Prefer physical subdivision, work orders and submeters; retain rejected/reworked production burdens in the attributable period Q. |  |
| a_causal | residual shared services | Allocate only measured unassigned residual using justified machine-hours, heat demand, coated area or other measured causal driver; disclose numerator and denominator. | jrc-metal-2020 |
| a_scrap | scrap and residues | Report actual waste outputs and treatment interfaces; no avoided virgin-metal credit in this foreground inventory. Internal return metal is not purchased recycled metal. |  |
| a_unresolved | inseparable products | No revenue or mass allocation by default; require causal evidence and sensitivity review if subdivision cannot resolve joint burdens. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

For one configuration and one representative reporting period define Q as attributable exchange including rejected/reworked output burdens, N as accepted complete units, and total accepted net mass as the sum of calibrated same-configuration masses. M = total accepted net mass / N; q_item = Q / N; then q_ref = q_item / M = Q / total accepted net mass. Never include rejected machines or packaging in total accepted net mass, and never average different configurations. The finite normalize_mass rule below expresses only the final conversion; raw period accounting and allocation precede it.
### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | finished_underground_conveyor | calibrated weighing | model; configuration; serial; accepted net mass M; accepted count N; total accepted net mass; tare; acceptance | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each lot and reporting period | one stated period | declared factory and suppliers | accepted net mass per machine | calibration; invoices; signed records; sample chain; uncertainty |
| cp_physical | receipt;fabrication;casting;chain;belt;finish;assembly;services | physical mass inputs and outputs | stores and scale records | row identity; grade; batch; issued; returned; opening and closing stocks; gross/tare/net; wet/dry; own moisture and species assay; internal transfer pair; Q; N; configuration | Trace calibrated scales, issue/return, manifests and samples to the same configuration-period; capture rejects and rework burdens. | kg | each lot and reporting period | one stated period | declared factory and suppliers | per one accepted finished machine | calibration; invoices; signed records; sample chain; uncertainty |
| cp_components | receipt;assembly | purchased complete components | supplier and installation records | part/serial; supplier; actual grade; supply state; count; verified net part mass; prefill; BOM; Q; N | Reconcile actual accepted BOM and supplier weights; verify length-to-mass including splices, joints and surplus, not nominal average. | kg | each lot and reporting period | one stated period | declared factory and suppliers | per one accepted finished machine | calibration; invoices; signed records; sample chain; uncertainty |
| cp_electricity | receipt;fabrication;casting;chain;belt;finish;assembly;services | electricity rows | meter and load records | row_id; meter; opening/closing; imports; generation; exports; storage; assigned subprocess loads; residual; causal driver; Q; N | Reconcile each meter and allocated residual with one site period; retain kWh and uncertainty. | kWh | each lot and reporting period | one stated period | declared factory and suppliers | per one accepted finished machine | calibration; invoices; signed records; sample chain; uncertainty |
| cp_water | fabrication;casting;chain;belt;finish;assembly | water and aqueous discharge | water meter and sampling | makeup; constituent moisture; opening/closing water stocks; recycled pairs; evaporation; reaction water; discharge; own water fraction; Q; N | Meter all external water and sample aqueous outputs on their own wet/dry basis; paired reuse is internal. | kg | each lot and reporting period | one stated period | declared factory and suppliers | per one accepted finished machine | calibration; invoices; signed records; sample chain; uncertainty |
| cp_fuel | casting;chain;belt;finish | natural gas | fuel meter and certificate | delivered volume; temperature; pressure; standard state; composition; lower heating value; carbon; Q; N | Retain delivery conditions and convert volume only using actual state/composition; record attributable thermal load. | m3 | each lot and reporting period | one stated period | declared factory and suppliers | per one accepted finished machine | calibration; invoices; signed records; sample chain; uncertainty |
| cp_emission | casting;chain;belt;finish | species-specific air outputs | stack and fugitive sampling | species; compartment; concentration; gasflow; duration; capture; retained; recovered; destroyed; nonair; stocks; uncertainty; Q; N | Use species-resolved measured released mass or verified closed species balance; capture is not destruction. | kg | each lot and reporting period | one stated period | declared factory and suppliers | per one accepted finished machine | calibration; invoices; signed records; sample chain; uncertainty |
| cp_transport | receipt | inbound_road | shipment records | shipment; mode; payload; distance; vehicle class; returns; Q; N | Match actual shipment payload and travelled distance; empty return only with service boundary evidence. | t km | each lot and reporting period | one stated period | declared factory and suppliers | per one accepted finished machine | calibration; invoices; signed records; sample chain; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Physical reconciliation and finite balances

**materials**: For each actual material identity: external input + opening stock + reaction generation = accepted retained material + reject/scrap + slag + sludge + wastewater-carried material + captured residue + released species + closing stock + reaction consumption. Internal return input/output pairs cancel; follow rework into accepted outputs or waste. Resolve totals using actual weighing and process chemistry, not assumed yield.

**contained-species**: For each Fe/Cr/Mn/Zn or actual species k, term_k = each term dry mass × its own matched dry-basis assay (or wet mass × its own wet-basis concentration). Product, scrap, slag, dust, sludge, wastewater and release each require their own assay, moisture and sample coverage. Add species stocks and actual reactions/transformation; never apply input steel assay to all outputs or equate gross waste to contained metal.

**water**: External makeup + incoming material/coating/fluid moisture + opening water stocks + reaction-generated water = retained product/first-fill water + evaporated water + discharge water + waste moisture + closing water stocks + reaction-consumed water. Every wet stream uses its own water fraction; internally recirculated cooling/test water is a paired transfer, not new supply. Distinguish purchased water and direct extraction with its actual resource compartment.

**solvent**: For each actual solvent: external fresh input + formulation-contained solvent + opening solvent stocks = retained solvent in product + recovered solvent exported + solvent in waste/capture medium/wastewater + measured species destruction + released solvent to air + closing stocks. Internally recovered/reused solvent cancels as paired transfer. A capture efficiency is not destruction; missing non-air terms cannot be assigned to air. Split every actual solvent species and quantify oxidizer reaction products separately.

**utilities**: On the same site period and units: net available electricity = purchased imports + measured onsite generation + storage discharge - exports - storage charging/losses. Assigned process loads + unassigned residual must reconcile to that amount; services receive only the measured residual and their attributable causal share. Do not add whole-factory total over subprocess meters. Treat compressed air and recirculated heat as internal transfers, meter compressor/generation inputs once. Keep onsite fuel and species emissions separate from purchased utility upstream. Investigate negative residuals, overlapping meters or uncertain storage using original readings, never clip.

**uncertainty**: For each residual propagate actual scale, meter, sampling, assay, allocation and stock uncertainty with recorded correlation where known. Investigate statistically meaningful residuals and possible missing flows or mismatched period/state; retain unexplained residual as a quality gap. No universal numerical tolerance, invented loss factor or default emission factor applies. Fuel-carbon reconciliation cannot alone establish CO, NOx or particulate emissions; obtain species/compartment-specific evidence and add atomic rows.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | configuration | Retain actual underground design, acceptance, BOM, make/buy and supplier physical state | drawings; certificates; route ledger |
| dq_period | records | Match representative period and configuration; include rejects/rework; explain trials and product mix | production ledger; time logs |
| dq_closure | physical balances | Complete balances with own measured fractions and combined uncertainty; missing is unresolved | calibration; laboratory chain; closure workbook |
| dq_supply | upstream | Match physical provider interface and geography; no source-specific US electricity or biomass incineration substituted as generic factory power | supplier contracts; dataset comments; sensitivity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference | Verify complete underground continuous design, architecture, safety and acceptance qualifiers; reject generic surface conveyors or conveying service. |  |
| v_denominator | all inventory rows | Verify same configuration-period Q, N and accepted calibrated net masses; output 1 kg and every row has the supported conversion. Reject packaging/reject denominator or cross-configuration average. |  |
| v_routes | make/buy matrix | Prove each conditional exchange present or not_applicable; unknown is not zero. Bought/made, belt/chain/bucket and electric/gas routes cannot be added indiscriminately. |  |
| v_balance | physical materials and species | Close total mass, own-assay contained species, water and solvent with stocks/reactions/internal pairs; compare residual with actual combined uncertainty and investigate, never universal tolerance. |  |
| v_utility | utility rows | Reconcile process submeters plus only unassigned residual to the same net site-period supply, including generation, exports/storage; investigate negative residual, never clip. | jrc-metal-2020 |
| v_identity | upstream and emission rows | Require actual type/property/state/provider/geography/compartment compatibility; unresolved UUIDs and empirical factors remain declared gaps, no fabricated substitutions. Fuel carbon alone cannot establish CO or NOx. |  |
| v_balance_materials | physical materials and species records | For each actual material identity: external input + opening stock + reaction generation = accepted retained material + reject/scrap + slag + sludge + wastewater-carried material + captured residue + released species + closing stock + reaction consumption. Internal return input/output pairs cancel; follow rework into accepted outputs or waste. Resolve totals using actual weighing and process chemistry, not assumed yield. |  |
| v_balance_contained-species | physical materials and species records | For each Fe/Cr/Mn/Zn or actual species k, term_k = each term dry mass × its own matched dry-basis assay (or wet mass × its own wet-basis concentration). Product, scrap, slag, dust, sludge, wastewater and release each require their own assay, moisture and sample coverage. Add species stocks and actual reactions/transformation; never apply input steel assay to all outputs or equate gross waste to contained metal. |  |
| v_balance_water | physical materials and species records | External makeup + incoming material/coating/fluid moisture + opening water stocks + reaction-generated water = retained product/first-fill water + evaporated water + discharge water + waste moisture + closing water stocks + reaction-consumed water. Every wet stream uses its own water fraction; internally recirculated cooling/test water is a paired transfer, not new supply. Distinguish purchased water and direct extraction with its actual resource compartment. |  |
| v_balance_solvent | physical materials and species records | For each actual solvent: external fresh input + formulation-contained solvent + opening solvent stocks = retained solvent in product + recovered solvent exported + solvent in waste/capture medium/wastewater + measured species destruction + released solvent to air + closing stocks. Internally recovered/reused solvent cancels as paired transfer. A capture efficiency is not destruction; missing non-air terms cannot be assigned to air. Split every actual solvent species and quantify oxidizer reaction products separately. |  |
| v_balance_utilities | utility records | On the same site period and units: net available electricity = purchased imports + measured onsite generation + storage discharge - exports - storage charging/losses. Assigned process loads + unassigned residual must reconcile to that amount; services receive only the measured residual and their attributable causal share. Do not add whole-factory total over subprocess meters. Treat compressed air and recirculated heat as internal transfers, meter compressor/generation inputs once. Keep onsite fuel and species emissions separate from purchased utility upstream. Investigate negative residuals, overlapping meters or uncertain storage using original readings, never clip. |  |
| v_balance_uncertainty | physical materials and species records | For each residual propagate actual scale, meter, sampling, assay, allocation and stock uncertainty with recorded correlation where known. Investigate statistically meaningful residuals and possible missing flows or mismatched period/state; retain unexplained residual as a quality gap. No universal numerical tolerance, invented loss factor or default emission factor applies. Fuel-carbon reconciliation cannot alone establish CO, NOx or particulate emissions; obtain species/compartment-specific evidence and add atomic rows. |  |
| v_period_accounting | all inventory rows | For each same configuration-period, Q is attributable exchange including reject/rework burden; N is accepted complete units; M = sum of calibrated accepted net masses / N; q_item = Q / N; q_ref = q_item / M = Q / sum of accepted net masses. Exclude packaging and reject mass from denominator; never pool different configurations. Retained installed first-fill is included in accepted net mass. |  |
| v_architecture_makebuy | actual route records | AFC cast-side sections and fabricated abrasion plates are distinct operations; only actual in-house casting/chain forming-welding-hardening has foreground inputs. Purchased castings, heat-treated chain, gears and motors carry embedded manufacture once. Belt/PVC solid-woven impregnation-plasticization, rubber calendering-vulcanization and actual PVG covering are distinct conditional routes, not one common recipe. Purchased belts have upstream burden and only actual installation/splicing here. Actual underground bucket/other design needs project evidence and actual cut/form/join or bought-element supply state. No compulsory alloy, temperature, compound recipe or safety certification is inferred. | komatsu-longwall-2023;fenner-pvc;fenner-pvg;fenner-production |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific foreground manufacturing package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Manufacture/procurement studies with matching underground architecture and declared functional capacity |
| excluded_use | Direct equivalence per kg between unlike conveyors; conveying-service lifecycle without added use/installation stages |
| required_metadata | PCR/version; configuration; accepted BOM; actual supplier/make/buy; Q/N/M; site/period; safety; drive/element; boundary; packaging; allocation; stocks; assays; uncertainties; proxies |
| required_quality_disclosure | Coverage, missing records/UUIDs/ranges, calibration, residuals, sample uncertainty, conditional absences and unresolved source evidence |
| update_trigger | Architecture, capacity, grade/formulation, chain/belt, drive, supplier/site/utility, safety, process or boundary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, codes 44411 and 43220; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification boundary: underground continuous goods/material conveying vs liquid elevators; not architecture or methodology proof |
| komatsu-longwall-2023 | handbook | Komatsu, Longwall systems, EN-Longwall_FA01-0123-V3, PDF p. 10, https://www.komatsu.com/content/dam/komatsu/sales-and-marketing-documents/brochures/longwall/longwall-systems-product-overview-English-en-fa01.pdf | AFC cast sides, abrasion plates and matched transmissions; conditional architecture example, no quantities or lifetime adopted |
| komatsu-haulage-2021 | handbook | Komatsu, Haulage Systems, EN-HSP001-0821-V3, PDF p. 11, https://www.komatsu.com/content/dam/komatsu/sales-and-marketing-documents/brochures/room-pillar/en-hspo01-0821-v3.pdf | Underground flexible continuous belt/chain train and drive/configuration interfaces; distinct from standalone surface conveyor |
| jdt-manufacturing | extension_guidance | J.D. Theile, Mining and industrial contract manufacturing, https://www.jdt.de/en/ (dated snapshot 2026-10-01) | Independent chain/flight/sprocket supplier, forging/bending/welding/heat treatment process possibilities; not recipe or compulsory factory route |
| itg-chain-hardening | extension_guidance | ITG Induktionsanlagen, Chain hardening systems, https://www.itg-induktion.de/en/induction-systems/hardening-annealing-and-tempering-systems/chain-hardening-systems (dated snapshot 2026-10-01) | Independent mining-chain heat treatment; actual hardening route must be verified |
| fenner-pvc | extension_guidance | Fenner Conveyor Belting, Fenner PVC (FR), https://fennerconveyorbelting.com/products/fenner-pvc/ (dated snapshot 2026-10-01) | Underground fire/antistatic solid-woven PVC belt; no universal belt formulation |
| fenner-pvg | extension_guidance | Fenner Conveyor Belting, Fenner PVG (FRSR), https://fennerconveyorbelting.com/products/fenner-pvg/ (dated snapshot 2026-10-01) | Independent rubber-covered PVC belt underground alternative; no rubber vulcanization recipe imposed on PVC impregnation |
| fenner-production | extension_guidance | Fenner Dunlop, Production Methods and Quality Control, https://www.fennerdunlopemea.com/about-us/products-implementation-production/ (dated snapshot 2026-10-01) | Conditional belt calendering/vulcanization and reinforcement route; provider example, not required material recipe |
| jrc-metal-2020 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products manufacturing sector, EUR 30025 EN, 2020, doi:10.2760/894966, chapters 3-4; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | General machining-fluid and factory utility record completeness; no sector benchmarks adopted as conveyor values |
