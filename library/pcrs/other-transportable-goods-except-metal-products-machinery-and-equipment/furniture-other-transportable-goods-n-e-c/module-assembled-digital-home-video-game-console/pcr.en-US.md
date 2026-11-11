---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.module-assembled-digital-home-video-game-console
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Complete digital home video game consoles from supplied hardware modules

## 1. Scope and Applicability

Manufacture of a new complete configured digital-only home video game console without an installed optical drive, from supplied finished hardware modules to its unique first whole-unit release. The selected mechanical/connector assembly route covers real local configuration and testing rather than purchased-complete-console packing. The default output is the complete declared hardware configuration; included controller, mains cord, HDMI cable, external adapter and installed storage/cooling depend on the actual supply BOM. Packaging is included as activity and upstream burden but excluded from reference hardware mass. No default SKU, component formula, net weight, yield, power, test duration, gaming lifetime or certification is supplied.

This is a transparent qualitative technical synthesis: the historic manufacturer announcement supports a parts-to-complete-console assembly/test/box-build chain; the modern Ecoprofile establishes complete production and configuration scope; the illustrated service guide supports module interfaces and real reassembly checks. These are not the same SKU, current factory or order. Service procedures alone do not establish a factory traveller. The digital guide contains disc/eject and screen wording and screw inconsistencies; only real model-compatible operations enter the dataset. Evidence absence for current quantities is not a zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.module-assembled-digital-home-video-game-console |
| classification_refs | CPC 3.0 38581; narrower product and route boundary |
| covered_products | New complete digital-only home video game consoles without an installed optical drive, assembled from supplied finished modules with actual first complete-unit release |
| excluded_products | Optical-drive-equipped consoles; handheld/hybrid portable routes; computers; software/cartridges; chips; bare PCB; standalone components; toys; repair-service products; purchased-complete-console packaging |
| representative_product | A declared complete home-console hardware configuration of the illustrated modular class; actual BOM, power architecture, storage, cooling and supplied accessory inclusion required |
| production_route | Module receipt and ESD handling; disjoint mechanical/connector integration; actual firmware/configuration and whole-system tests; unique first release; actual packaging and separately observed cohort services |
| market_state | New complete tested home-console hardware at first whole-unit quality release; packaging outside net hardware mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one declared complete configured home video game console hardware supply unit |
| How much | 1 kg net complete hardware first released once; actual net mass M kg is measured for every configuration |
| How well | Meets actual approved model-specific assembly, wiring, power, firmware-state, display, controller, network, storage and safety/test acceptance plan with genuine compatible parts; no invented performance or certification |
| How long or cycle | One declared first-release cohort and reporting period; observed postrelease services have original Qc and actual H, no assumed use lifetime |
| reference_flow_link | `finished_console` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Video game consoles `d51ebfa9-1bbb-4f3d-a487-75c690f9e0f6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and hardware revision; digital-only configuration without installed optical drive; home-console architecture and complete supplied configuration; BOM/drawing and every supplied-module inclusion bridge; internal or external power architecture and actual cable/controller inclusion; storage form and installed cooling/shields/fluids; firmware version/state and actual local work scope; site geography and reporting cohort; actual first-release test/acceptance and serial uniqueness; calibrated net hardware M with included water and excluded packaging; raw/WIP/nonWIP stock and inherited exchange vectors; original Qc and observed H for actual services; each packaging pool and its six gross legs; upstream/provider and software reuse scope with remaining gaps |

Declare every qualifier in dataset metadata or equivalent notes. The native complete manufactured console family also covers handhelds; positive whole-home-console evidence and the actual supplied configuration narrow applicability. It supplies no single-SKU quantity or functional equivalence across performance generations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M is actual calibrated net mass of one complete accepted hardware configuration, including its declared supplied controller/cables/adapter and contained water once; exclude removable packaging and test assets. Collect using cp_release. Q is the sum of unique first-release net masses. Do not derive M from catalogue gross weight, rated power, secondary properties or component estimates. |
| native_numerator | all inventory rows | Actual native extensive property | Each native unit | Preserve each row native property/group/reference unit. kg, MJ, kWh, m3 and item are not interchangeable. Convert real rates over measured intervals once; integrated gas/liquid volume is not multiplied by time again. Volume-to-mass requires independent substance/state density. Number of items to Item(s)/item is factor1 only as a physical count; never a guessed item kg or secondary mass coefficient. |
| gross_and_burden | all inventory rows | Actual physical and burden dimensions | Row native unit | Physical V is full observed gross event in the row native unit; no economic share, burden A or B_open+U-B_close substitutes for it. Real burden A is attributed separately once. cp_* collects undivided raw records only; calc_single_quotient alone divides each dimension by manufacturing Q or original Qc for observed service. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual at-plant independently scoped supplied finished modules, articles, utilities and associated ingress; no purchased-complete-console substitution |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | Complete digital-only home hardware without installed optical drive, narrower than full CPC38581, which also includes handheld consoles |
| recursive_input_rule | A supplied complete console/module remains one upstream-linked article; its contained constituents are non-additive children. Matched internal handoffs cancel without a new purchase or Q. |
| upstream_dataset_requirement | Match real module composition, populated state, supplier gate, route, geography, media, utility voltage and treatment route; disclose unresolved ordinary identities/providers and excluded upstream scope |
| disclosure | Qualitative technical synthesis; actual configuration, supply disjointness, first-release gate, gross and burden ledgers, observed cohort services, sources, unknowns and boundary extensions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | complete console | Restrict this method to new complete home video game console hardware assembled from supplied finished modules, through its unique first whole-unit quality release. CPC also includes handhelds; optical-drive-equipped, handheld, hybrid portable, computer, game-software/cartridge, loose chip/PCB, standalone PSU/controller and toy routes are outside this selected method. | `un-cpc3-notes-2025`; `microsoft-xbox-digital-service-2025` |
| `boundary_supply` | make-or-buy bridge | Use the actual drawing, complete BOM, receipts and supplier gate to partition every supplied article. A purchased populated motherboard/core already includes its documented CPU/GPU/memory, installed storage, cooling, shields, firmware and small parts. Separate PSU, network/accessory boards, fan, enclosure-button assembly, heatsink, SSD and FFC cards apply only to disjoint receipts outside that article. A reconciled whole-article/component bridge may disclose contained parts as non-additive children; never sum both supply scopes. | `microsoft-xbox-digital-service-2025`; `microsoft-xbox-ecoprofile-2023` |
| `boundary_route` | foreground stages | Include actual receiving and ESD handling, mechanical fastening and connector/cable routing, actual firmware loading/configuration if performed, measured whole-unit test, failed units, start/stop, idle, cleanup, rework and first release. No local PCB manufacture, SMT, chip fabrication, plastic moulding or internal PSU manufacture is presumed for supplier-complete articles. A real on-site expanded route requires independent evidence and disjoint inputs before inclusion; it cannot be hidden in zero or other. | `microsoft-xbox-manufacture-2002`; `microsoft-xbox-digital-service-2025` |
| `boundary_test` | actual specification | Establish the actual model-specific first-production test and acceptance plan. Reassembly checks in the service source are technical examples, not factory production limits. Its digital-console text also mentions disc/eject tests, a screen and inconsistent screw instructions: do not prescribe an absent optical drive, screen, universal angle, temperature, time, lifetime or certification. Preserve source limits; collect the actual approved tests and all unsuccessful attempts. | `microsoft-xbox-digital-service-2025` |
| `boundary_upstream` | supplier links | Cover extraction, material preparation, component and module production, real inbound logistics, utility supply and treatment through independently matched upstream datasets or disjoint measured foreground. No complete cradle-to-gate result without these links. Retain supplier-included packaging ingress and exactly one upstream burden owner. A complete purchased console is a separate supply boundary, never a way to replace required module-to-console manufacturing with packaging alone. | `microsoft-xbox-ecoprofile-2023` |
| `boundary_cohort` | released goods and service | Q is first-release net complete hardware mass once. Released closingFG is already in Q and never manufacturing B_close. Storage, packaging, handling, actual shipment, returns and postrelease work remain measured in a separate original-cohort service account with original Qc and observed H. Reinspection, shipment or repair creates no new Q. Internal transfer is matched and cancels on consolidation without external purchase or second Q. |  |
| `boundary_actuality` | all actual events | Permission, postwork tests, acceptance and disposition govern qualified rework; they never delete unauthorized, failed or rejected actual operations, logistics, water or burdens. Keep hold/waste outcomes and original cohort. Natural adsorption/desorption during ordinary storage/handling is an actual water event without an invented repair permit. Add each newly identified real material, utility, fuel, gas, waste, liquid and receiving medium as its own card and measured event. | `microsoft-xbox-digital-service-2025` |
| `boundary_software` | software and use | Include actual local loading/test electricity, measured network/storage/support resources and attributable development/build work only with a declared engineering scope and reuse/release allocation. Do not infer software development, licences, cloud service or electricity from hardware kg, purchase price or a fixed ratio. Unknown material development scope remains a dataset gap. Customer gameplay, subscriptions, downstream distribution/use and end-of-life are separate lifecycle stages with no default lifetime or gaming hours. | `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010` |
| `boundary_pack` | actual packaging pools | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. O and C are complete actual wet opening/closing empty, attached-WIP, attached-FG and reusable stocks. P/I/ER are disjoint whole-article inward legs; S is gross outward shipment, EO external return sent, W the actual whole wet discard. ER is external return received. J_in/J_out are independently measured non-water repair, replacement, residue or other material transfers across this packaging-pool boundary not already in those whole-article legs. H2O_in/H2O_out are independently measured actual water transfers across this pool boundary not already embodied in those legs; include natural adsorption/desorption without any repair. Split wet added/removed material into disjoint non-water J and H2O; no prescribed composition or density. Full wet W includes substrate/retained residues/water once, so its nested components are not additional J_out or H2O_out unless physically separated before the boundary. Matched internal pool transfers cancel on foreground consolidation and create no extra purchase, service or Q. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| make | Module receiving and mechanical/electrical assembly | required | Actual disjoint supplied modules and complete BOM | foreground | Unique Q; observed original-cohort Qc/H for service only |
| test | Actual configuration, whole-system test and first release | required | Actual first-production plan and complete configuration | foreground | Unique Q; observed original-cohort Qc/H for service only |
| service | Observed original-cohort postrelease services | conditional | Actual storage handling shipment returns and work within observed H | foreground | Unique Q; observed original-cohort Qc/H for service only |
| pack | Actual packaging material pools | conditional | Each actual material and six disjoint physical directions | foreground | Unique Q; observed original-cohort Qc/H for service only |
| utilities | Actual disjoint energy, cleaning and moisture exchanges | conditional | Actual event across make test storage packaging assets and service | foreground | Unique Q; observed original-cohort Qc/H for service only |
| assets | Actual production/test assets and repair | conditional | Actual equipment stock and measured service; no assumed life | foreground | Unique Q; observed original-cohort Qc/H for service only |
| waste | Actual separated or mixed waste and treatment outlets | conditional | Actual waste outlet with once-only provider | foreground | Unique Q; observed original-cohort Qc/H for service only |

The cards below are conditional physical atoms, not a prescribed BOM or recipe. Record every actual event even when unauthorized or nonconforming; not_applicable needs evidence of physical absence, not missing data or approval. Components inside one supplied article are disjoint/non-additive. All stage meters/event ids are matched to avoid duplicate utilities. Actual missing materials, emissions, refrigerants, fuels, carrier-water/heat returns and packaging types require separate specific cards before dataset completeness.

### Process: Module receiving and mechanical/electrical assembly (`make`)

#### Inputs

##### Product flows

###### Populated console motherboard core module (`motherboard`)

One supplied populated logic/memory motherboard core. Record exactly which installed storage, cooling structure, shields, firmware and hardware arrive inside it. CPUs, GPU, memory, bare board, solder and upstream semiconductor/SMT energy already covered by that supplier article are not extra inputs. The service diagram distinguishes assemblies but does not certify this factory supply BOM. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Populated console motherboard core module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Complete internal console power-supply module (`internal_psu`)

One finished internal AC-to-DC PSU with its actual leads/connectors and shield. Count only when supplied outside the motherboard/core article; not a raw transformer or LED driver. No duplicated PSU electronics or conversion losses during its supplier manufacture. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Complete internal console power-supply module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Complete external console power adapter (`external_adapter`)

Conditional actual complete external adapter for the declared home-console supply configuration; an alternative power architecture, not automatically additional to the internal PSU. Preserve rating/connectors and included cable scope without a default power. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Complete external console power adapter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished console cooling-fan module (`fan`)

One real finished motor/fan/lead module with its declared structure. Count only outside the core supply; not an industrial cooling service or heater. Record actual mounting and connector test without default airflow or fan power. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished console cooling-fan module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished console heatsink assembly (`heatsink`)

Only separately supplied actual heatsink assembly outside the core. Include contained thermal-interface preparation/fluid once by supplied-article scope; do not buy metal stock or paste again. A separately dispensed real paste requires its own complete-preparation card and SDS, not assumed metal or water. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished console heatsink assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Console front-enclosure button module (`front_enclosure`)

One complete supplied front/side enclosure with any included button circuitry, FFC, adhesive and fasteners identified. Do not call it bare polymer resin or count its included button board again. Supplier material/flame-retardant/finish identity needs actual drawings and declarations. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Console front-enclosure button module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished console rear enclosure (`rear_enclosure`)

One finished rear enclosure outside the front/module scope; actual material, coatings, labels, shielding and included screw covers recorded. No inferred plastic composition, moulding recipe or catalogue mass. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished console rear enclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished console support foot (`foot`)

One separately supplied finished support foot, only if not in the enclosure article. Its actual polymer/metal and fastening content belong to that whole article; not another whole housing or pallet. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished console support foot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Populated console network-board module (`network_board`)

One separately supplied populated network board with included radio interfaces and connectors; only outside the core supply. No bare-PCB substitution or addition of contained radio chips, antenna or solder. Record any separately supplied antenna as its own real card. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Populated console network-board module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Populated console accessory-board module (`accessory_board`)

One actual accessory interface PCBA, disjoint from the core and front-button assembly. Preserve populated state, compatible interface and actual supplier boundary; not generic electronics aggregated with unrelated components. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Populated console accessory-board module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished console solid-state storage module (`ssd`)

Only a separately supplied installed SSD/storage article outside the populated core. Record physical form/interface and actual firmware/state; it is not raw memory chips, software download or total storage capacity counted as mass. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished console solid-state storage module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished console flexible-flat-cable assembly (`ffc`)

One separately supplied FFC with actual connectors and integral adhesive patches. Count whole cable once, not copper/polymer/adhesive twice; included enclosure/core FFC is a child. Each physically different additional harness receives a distinct row. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished console flexible-flat-cable assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished console mains-cord assembly (`power_cord`)

One actual supplied mains cord with plugs and insulation included. Distinguish sale-unit accessory from reused test lead; count only if in declared hardware configuration. Never bind a power cable whose native reference is energy as though it were kg. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished console mains-cord assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished HDMI cable assembly (`hdmi`)

One actual supplied HDMI cable with connectors, only when declared in the release configuration. A reusable test cable is an asset/service record and not another sale-unit purchase. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished HDMI cable assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Complete supplied console game controller (`controller`)

One complete supplied game controller with actual included battery/cell, firmware and cable scope. Include in hardware M only when it belongs to the uniquely released supplied configuration. A controller reused for testing remains an asset; no duplicate component/battery purchase. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Complete supplied console game controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Steel screw (`screw`)

Native Product assembly fastener, production mix at plant GLO; unspecified steel screw grade/size/coating, not a washer/nut or an entire mechanism. Mass/kg with Units of mass. Weigh only actual separately supplied steel screws outside complete module receipts; count-to-kg needs actual measured screw mass and grade/coating match.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Polyimide adhesive tape article (`polyimide_tape`)

Only actual separately used polyimide-backed adhesive tape, including adhesive once; not aluminium/PE, UV adhesive or packing tape. Measure whole tape mass and retained backing/liner/waste; do not infer material from yellow colour alone. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Polyimide adhesive tape article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

###### Finished self-adhesive product-identification label (`product_label`)

Actual separately applied product label including substrate/ink/adhesive once. A permanent identity label in the accepted hardware is included once in M; removable packaging label belongs to its packaging pool, not simultaneously this row. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Finished self-adhesive product-identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_make`
- Sources: `microsoft-xbox-digital-service-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual configuration, whole-system test and first release (`test`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Video game consoles (`finished_console`)

Native complete manufactured Product, production mix at plant, including TV-connected and handheld console families. This method narrows it by positive home-console assembly evidence and actual BOM/tests to new complete digital-only home hardware without an installed optical drive, not a computer, software, loose PCB/chip, standalone PSU/controller or handheld route. No CAS, grade, SKU, specific geography or performance is prescribed by this generic record. Mass/kg and Units of mass. Actual installed components, contained fluids/water and included controller/cables belong to the one complete declared hardware configuration once; packaging and test assets are excluded. This is the only first-release output, never also an extra closingFG output.

- Selected flow: Video game consoles `d51ebfa9-1bbb-4f3d-a487-75c690f9e0f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `un-cpc3-notes-2025`; `microsoft-xbox-ecoprofile-2023`; `microsoft-xbox-digital-service-2025`

##### Waste flows

##### Elementary flows

### Process: Observed original-cohort postrelease services (`service`)

#### Inputs

##### Product flows

###### Video game consoles (`console_return`)

Native complete manufactured home-compatible Product family, production mix at plant, Mass/kg and Units of mass; broad native family also includes handhelds, which this method excludes; selected complete home configuration is digital-only without installed optical drive. Record full actual external returned whole console hardware V, actual condition/contained water and original serial/cohort Qc. Failure or damage does not erase the physical manufactured identity or imply acceptance. Not a new purchase or new Q; not a Waste substitute when actually discarded.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Video game consoles `d51ebfa9-1bbb-4f3d-a487-75c690f9e0f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `microsoft-xbox-digital-service-2025`

###### Supplied replacement console motherboard module (`repair_module_in`)

One actual complete replacement motherboard module on an original released cohort, with all included materials/firmware/cooling identified. Distinguish genuinely new module from returned reused article and trace its burden owner; add distinct rows for actual other replacement articles. Permission/tests/acceptance determine fitness, never whether actual receipt and work are retained. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Supplied replacement console motherboard module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `microsoft-xbox-digital-service-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Video game consoles (`console_dispatch`)

Native complete manufactured home-compatible Product, production mix at plant, Mass/kg and Units of mass; generic native scope also includes handhelds but selected route is digital-only home console without installed optical drive. Full actual gross external dispatch V of the declared hardware configuration, with original first-release cohort and real acceptance/hold disposition. It is a logistics/service disclosure, not another manufactured output or net-delivery denominator. Packaging leaves separately.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Video game consoles `d51ebfa9-1bbb-4f3d-a487-75c690f9e0f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `microsoft-xbox-ecoprofile-2023`; `microsoft-xbox-digital-service-2025`

###### Removed console motherboard module for external reuse (`removed_module_out`)

Only an actual whole reusable module external return, with test/permission/disposition and new/old mass/water history. Not a discarded WEEE outlet; failed or unauthorized work is still collected and directed to actual hold/waste. No assumed restored function or credit. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Removed console motherboard module for external reuse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `microsoft-xbox-digital-service-2025`

##### Waste flows

##### Elementary flows

### Process: Actual packaging material pools (`pack`)

#### Inputs

##### Product flows

###### Corrugated shipping carton (`carton_p`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_i`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_er`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Moulded pulp protective insert (`pulp_p`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Moulded pulp protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Moulded pulp protective insert (`pulp_i`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Moulded pulp protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Moulded pulp protective insert (`pulp_er`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Moulded pulp protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Polyethylene bag (`pe_bag_p`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Polyethylene bag (`pe_bag_i`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Polyethylene bag (`pe_bag_er`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Wooden pallets (`pallet_p`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Wooden pallets (`pallet_i`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Wooden pallets (`pallet_er`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Complete electrostatic-shielding bag (`esd_p`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only P separate new purchase. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Complete electrostatic-shielding bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete electrostatic-shielding bag (`esd_i`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only I supplier-included ingress. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Complete electrostatic-shielding bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete electrostatic-shielding bag (`esd_er`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only ER external return received. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Complete electrostatic-shielding bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Corrugated shipping carton (`carton_s`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_eo`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Moulded pulp protective insert (`pulp_s`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Moulded pulp protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Moulded pulp protective insert (`pulp_eo`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Moulded pulp protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Polyethylene bag (`pe_bag_s`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Polyethylene bag (`pe_bag_eo`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Wooden pallets (`pallet_s`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Wooden pallets (`pallet_eo`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Complete electrostatic-shielding bag (`esd_s`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only S gross outward shipment. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Complete electrostatic-shielding bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete electrostatic-shielding bag (`esd_eo`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only EO external return outward. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Complete electrostatic-shielding bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


##### Waste flows

###### Waste corrugated shipping carton (`carton_w`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate carton waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Waste corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Waste moulded pulp protective insert (`pulp_w`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate pulp waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Waste moulded pulp protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Waste polyethylene bag (`pe_bag_w`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate pe_bag waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Waste polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Waste wooden pallets (`pallet_w`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate pallet waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Waste wooden pallets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-ecoprofile-2023`; `jrc-ilcd-attributional-2010`

###### Waste electrostatic-shielding bag (`esd_w`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only W actual separate waste outlet. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Only a true separate Waste outlet uses this card; if mixed use one mixed_packaging_waste outlet with independently measured non-additive ESD originW child, never both. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Waste electrostatic-shielding bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


##### Elementary flows

### Process: Actual disjoint energy, cleaning and moisture exchanges (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Native Product low-voltage AC below1kV, customer-side consumption mix to user, grid-average supply; not electricity generation or a higher-voltage/grid service. Reference Net calorific value in Units of energy/MJ. Capture actual disjoint assembly, firmware/configuration, powered display/controller/network tests, failures, idle, cleanup, storage and handling energy, including actual support equipment. Preserve raw kWh then convert by3.6 once; no rated-power times invented time. Match actual voltage and supplier geography/mix, otherwise select a compatible native identity; no default emission factor.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-manufacture-2002`; `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Supplied aqueous isopropanol cleaning preparation (`ipa_preparation`)

One complete actual supplied aqueous IPA preparation, including carrier water and any real additive, weighed once with supplier assay and concentration convention. The guide gives a70% IPA example but supplies no PCR-wide recipe, density or consumption. A neat/optical-assembly IPA record is not adopted for this whole preparation. If actually blended on site, replace this receipt by disjoint purchased IPA/water/additive cards with actual mixing energy/loss, never both. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Supplied aqueous isopropanol cleaning preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-digital-service-2025`

###### Lint-free cleaning wipe article (`cleaning_wipe`)

One actual supplied lint-free wipe with material, dimensions, moisture/impregnation and disposable/reuse state declared; a premoistened whole wipe includes its preparation once. A separate liquid issue is recorded only outside that wet article. Used wipes and residues go to the actual single outlet with no forced chemical split. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Lint-free cleaning wipe article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-digital-service-2025`

###### Liquid cleaning water supplied as product (`liquid_water_in`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Only actual external supplied liquid water crossing the boundary for cleaning, maintenance or humidification, with measured mass and real quality/state. Not carrier water already in whole preparation/article, H2O vapour uptake, steam heat or wastewater. Retained influx remains alongside full wet closing stocks; X only deduplicates another same-side incoming term. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Liquid cleaning water supplied as product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-digital-service-2025`

###### Complete cleaning swab article (`cleaning_swab_in`)

Only an actual complete swab with declared shaft/tip and supplied impregnation, separate from wipe or reusable cloth. Whole supplied preparation is included once; separately dispensed liquid is an independent actual issue. At discard include substrate, retained solvent/residue and water once with actual receiver; mixed-outlet origin is non-additive, not duplicate liquid waste. Concrete UUID unresolved.

- Selected flow: Complete cleaning swab article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


##### Waste flows

##### Elementary flows

###### Atmospheric water vapour uptake (`water_uptake`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Elementary renewable material resource from air, Water, in air, reference Volume/m3, unit group 93a60a57-a3c8-12da-a746-0800200c9a66. The native record provides no Chinese basename; retain the official English display. No native CAS/grade/geography is specified. Record actual ordinary H2O vapour uptake from ambient air during storage, handling or real operations; not total humid-air volume, liquid water or a reversed emission. The physical V is actual H2O uptake in m3; independent state-specific H2O-vapour density is required only for the separate mass balance, never liquid-water density or a secondary coefficient. Retain the complete wet closing stock and real influx, including material that remains in stock; no invented repair permit or purchase. Separate real burden attribution remains once; actual missing uptake data stays unknown.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-digital-service-2025`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### water vapour (`water_vapour_out`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Elementary ordinary H2O, CAS7732-18-5, emissions to air unspecified, Mass/kg and Units of mass. Native aliases include ice/heavy/tritiated water and other phase names; these do not override ordinary CAS and the actual vapour-to-air event. Record actual desorption/drying during ordinary storage/handling as well as cleaning/rework; no operation/permission is invented. Not liquid effluent, purchased steam, condensate return, total humid-air flow or a resource inlet. Independently measure state-specific species and gross release.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-digital-service-2025`

###### isopropanol (`ipa_air_out`)

Native Elementary propan-2-ol, CAS67-63-0, emissions to air unspecified, Mass/kg and Units of mass; reference elementary flow, with broad synonym list including trade names/grades/routes. Those aliases do not assert a whole formulation or a strong-acid manufacturing route for this emission. Record only independently supported actual IPA molecule released to this receiving air medium, not total VOC/COD, supplied preparation, n-propanol or residue. Add other real emitted molecules separately; liquid disposal is not this air flow.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `microsoft-xbox-digital-service-2025`

### Process: Actual production/test assets and repair (`assets`)

#### Inputs

##### Product flows

###### Complete leakage-current tester (`tester_in`)

Actual external receipt of one complete electrical leakage tester with its included probes/lead scope, physical mass/count and ownership. Distinguish new/reused/leased stock and real in-use opening/closing asset; no whole tester per kg. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Complete leakage-current tester
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Complete test display monitor (`test_display`)

One actual supplied whole reusable display used to inspect console video output. Keep asset receipt/mass and actual service demand; it is neither sale-unit hardware mass nor newly purchased for each tested console. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Complete test display monitor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Complete reusable test game controller (`test_controller`)

One actual whole test controller with included battery/cable scope and measured use. Distinct from the supplied sale-unit controller; own new/old physical inventory and service attribution. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Complete reusable test game controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Solid wood pallet repair slat (`repair_timber`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Only an actual separately supplied repair slat of declared species/grade/treatment/moisture, not a whole pallet. New and recovered slats have disjoint receipts and inherited burdens. Retain actual new influx and complete wet closing repair stock; X cannot cancel stock-retained input. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Solid wood pallet repair slat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Steel pallet repair nail (`repair_nail`)

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separately supplied steel repair nail with measured mass/grade/coating; not a screw or the nails already inside a whole supplied pallet. Preserve actual retained receipt and old/new parts history once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Complete T8 Torx screwdriver (`t8_driver_receipt`)

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete T8 Torx screwdriver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete ESD-safe workstation mat (`esd_mat_receipt`)

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete ESD-safe workstation mat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete antistatic wrist strap (`esd_strap_receipt`)

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete antistatic wrist strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete ESD-safe tweezers (`esd_tweezers_receipt`)

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete ESD-safe tweezers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete plastic opening tool (`plastic_pry_receipt`)

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete plastic opening tool
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete reusable IPA dispenser bottle (`ipa_dispenser_receipt`)

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete reusable IPA dispenser bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete reusable microfiber cleaning cloth (`microfiber_cloth_receipt`)

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete reusable microfiber cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete leakage-current tester (`tester_return`)

Actual full tester externally returned at observed horizon; not burden multiplied by an economic or service share. Retain testing service already performed and actual remaining unused capacity separately. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Complete leakage-current tester
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Complete test display monitor (`test_display_return`)

Only actual full external return/transfer of the whole reusable display asset with original identity, condition, mass and unused-service capacity; include every observed leg. It is not the supplied console hardware or a whole new display burden for each kg. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Complete test display monitor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete reusable test game controller (`test_controller_return`)

Only actual full external return/transfer of the test controller, including its actual contained battery/cable/water once; retain original ownership and performed service. Do not duplicate the sale-unit controller or assume restored operation. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

- Selected flow: Complete reusable test game controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8; physical N=complete actual gross V; burden N=independently attributed A separately. Manufacturing D=Q; actual observed cohort service D=original Qc with H. No repeated division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete T8 Torx screwdriver (`t8_driver_transfer`)

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete T8 Torx screwdriver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete ESD-safe workstation mat (`esd_mat_transfer`)

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete ESD-safe workstation mat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete antistatic wrist strap (`esd_strap_transfer`)

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete antistatic wrist strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete ESD-safe tweezers (`esd_tweezers_transfer`)

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete ESD-safe tweezers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete plastic opening tool (`plastic_pry_transfer`)

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete plastic opening tool
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete reusable IPA dispenser bottle (`ipa_dispenser_transfer`)

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete reusable IPA dispenser bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete reusable microfiber cleaning cloth (`microfiber_cloth_transfer`)

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete reusable microfiber cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


##### Waste flows

##### Elementary flows

### Process: Actual separated or mixed waste and treatment outlets (`waste`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Console manufacturing electronic waste (`electronic_waste`)

One actual external electronics-manufacturing waste outlet, with full wet mass, real composition/contamination, recipient and treatment. Do not use a precision-balance-specific Waste record. Include discarded production/test assets only when actually co-collected at this same electronic-waste outlet, with independently measured non-additive asset-origin children; otherwise add the actual separate Waste outlet. If actual outlets are separated by battery/PCBA/enclosure, add distinct Waste cards; if mixed, independently measured origin children do not add to total. Manufacturing samples, failures and unauthorized work remain burdensome. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Console manufacturing electronic waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Mixed console packaging waste (`mixed_packaging_waste`)

Exactly one actual externally co-collected packaging waste stream. Independently measure each pool origin W and moisture/contamination as non-additive children; total and split are alternative views. No forced separate carton/pulp/PE/pallet outlet, and no Product identity. One waste/treatment provider only. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Mixed console packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Spent cleaning wipe waste (`spent_wipe`)

One actual spent wipe/residue outlet with whole retained liquid mass and appropriate hazardous state. Measure origin solvent/water independently as non-additive composition children; do not purchase them again or also export the same residue as liquid waste. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Spent cleaning wipe waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Spent aqueous cleaning liquid (`liquid_cleaning_waste`)

One real external liquid cleaning waste outlet when separate, with actual mixture mass/assay, recipient and one treatment route. Not pure water, elemental COD or a guessed IPA mass; carrier water and dissolved species are non-additive child analyses. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

- Selected flow: Spent aqueous cleaning liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`

###### Complete T8 Torx screwdriver discarded (`t8_driver_retirement`)

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete T8 Torx screwdriver discarded
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete ESD-safe workstation mat discarded (`esd_mat_retirement`)

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete ESD-safe workstation mat discarded
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete antistatic wrist strap discarded (`esd_strap_retirement`)

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete antistatic wrist strap discarded
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete ESD-safe tweezers discarded (`esd_tweezers_retirement`)

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete ESD-safe tweezers discarded
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete plastic opening tool discarded (`plastic_pry_retirement`)

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete plastic opening tool discarded
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete reusable IPA dispenser bottle discarded (`ipa_dispenser_retirement`)

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete reusable IPA dispenser bottle discarded
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Complete reusable microfiber cleaning cloth discarded (`microfiber_cloth_retirement`)

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

- Selected flow: Complete reusable microfiber cleaning cloth discarded
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


###### Spent contaminated cleaning swab (`cleaning_swab_waste`)

Only an actual complete swab with declared shaft/tip and supplied impregnation, separate from wipe or reusable cloth. Whole supplied preparation is included once; separately dispensed liquid is an independent actual issue. At discard include substrate, retained solvent/residue and water once with actual receiver; mixed-outlet origin is non-additive, not duplicate liquid waste. Concrete UUID unresolved.

- Selected flow: Spent contaminated cleaning swab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference the same sole q=N/D result in section8: physical N=full actual gross leg V; burden N=independently attributed A in a separate dimension. D=Q for manufacture or original Qc for actual observed service H. No second division or scaling of V.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010`


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_first` | attributional common processes | This is attributional hardware production. First use dedicated meters, configuration/batch separation, independent actual operations and virtual subdivision for exclusively caused exchanges. Demonstrate any remaining multifunctionality rather than freely choosing mass, time or money. | `jrc-ilcd-attributional-2010` |
| `allocation_causal` | each remaining exchange | For each residual exchange demonstrate the determining physical causal relation and response to changed product/function quantities. Tool/test time with measured demand, actual station occupancy, contamination-driven treatment or another driver applies only when it determines that exchange. There is no universal mass/count/processor-time key. Keep raw observations, failed/idle work and uncertainty. | `jrc-ilcd-attributional-2010` |
| `allocation_residual` | true common-process residual | Only after direct assignment, virtual subdivision and exchange-specific determining physical causality leave a real residual use contemporaneous market values at the actual common-process exit/entry gate, physical condition, quality, bulk state and period, with reconciliation and sensitivity. Adjust downstream transport/conditioning from remote prices. No fixed shares or allocation of the console gaming/media functions from product price; such a functional comparison requires another explicit study. | `jrc-ilcd-attributional-2010` |
| `allocation_waste` | failure and external disposition | Ordinary manufacturing waste, rejects, samples and failed tests retain manufacturing and treatment burden when sold, returned or sent away. T_other is allowed only for a real independent other cohort/function plus one justified allocation/handover vector; a waste price or dispatch alone is insufficient. Waste treatment and provider are linked once. Internal reuse, supplied formulation children and physical return disclosure produce no automatic coproduct, repurchase or avoided credit. | `jrc-ilcd-attributional-2010` |
| `allocation_services` | cohort services and assets | Attribute only real measured services with separate inherited manufacturing history, original Qc and observed H. Performed work is not unused stock even if FG remains at closing. Physical asset/gross logistics quantities stay complete; only the service burden dimension is attributed by demonstrated causality and documented remaining capacity. No fixed asset life, one whole tester per kg, invented restoration or future unperformed service. | `jrc-ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | test | Complete first-release hardware and Q | foreground_record | model; configuration; serial; calibrated_net_M_kg; included_controller_cables_adapter; contained_water; excluded_packaging; first_release_timestamp; acceptance; cohort | Weigh each accepted complete hardware configuration on a calibrated scale, excluding removable packaging and test assets; reconcile the actual BOM, serial identity and signed first-release record. Keep all failed/unreleased unit records separately. | kg | Each unique release and cohort boundary | Actual complete reporting cohort | Declared plant and configuration | per 1 kg reference flow | Calibration; complete BOM; scale/tare readings; test/release and duplicate-serial checks |
| cp_make | make | Module receiving and mechanical/electrical assembly | foreground_record | row_id; event_id; cohort; original_Qc; observed_H; raw_reading; raw_unit; rate_or_integral; interval; state_T_P; independent_density; composition_assay; gross_V; new_burden_U; burden_owner; opening_raw_WIP_nonWIP; closing_raw_WIP_nonWIP; inherited_exchange_vector; released_FG_history; P; I; ER; gross_S; EO; origin_W; X_same_side; internal_pair; permission; actual_tests; acceptance; disposition | Collect undivided event readings, calibrated weights/meters and traceable receipt/issue/stock/return/waste records by each physical row. Independently measure relevant composition and moisture; keep complete gross legs and inherited exchange vectors. Retain failures, Q0, unauthorized work and actual observed services. Do not pre-normalize or substitute approval for physical observation. | kg; MJ; kWh; m3; item | Each event and stock boundary; actual metering interval | Complete manufacturing cohort and actual original-cohort service H | Actual disjoint site/station/meter and provider | per 1 kg reference flow | Calibration; real drawing/SDS; independent balances; signed stock/ownership bridges; raw logs; permission/tests/disposition and uncertainty |
| cp_test | test | Actual configuration, whole-system test and first release | foreground_record | row_id; event_id; cohort; original_Qc; observed_H; raw_reading; raw_unit; rate_or_integral; interval; state_T_P; independent_density; composition_assay; gross_V; new_burden_U; burden_owner; opening_raw_WIP_nonWIP; closing_raw_WIP_nonWIP; inherited_exchange_vector; released_FG_history; P; I; ER; gross_S; EO; origin_W; X_same_side; internal_pair; permission; actual_tests; acceptance; disposition | Collect undivided event readings, calibrated weights/meters and traceable receipt/issue/stock/return/waste records by each physical row. Independently measure relevant composition and moisture; keep complete gross legs and inherited exchange vectors. Retain failures, Q0, unauthorized work and actual observed services. Do not pre-normalize or substitute approval for physical observation. | kg; MJ; kWh; m3; item | Each event and stock boundary; actual metering interval | Complete manufacturing cohort and actual original-cohort service H | Actual disjoint site/station/meter and provider | per 1 kg reference flow | Calibration; real drawing/SDS; independent balances; signed stock/ownership bridges; raw logs; permission/tests/disposition and uncertainty |
| cp_service | service | Observed original-cohort postrelease services | foreground_record | row_id; event_id; cohort; original_Qc; observed_H; raw_reading; raw_unit; rate_or_integral; interval; state_T_P; independent_density; composition_assay; gross_V; new_burden_U; burden_owner; opening_raw_WIP_nonWIP; closing_raw_WIP_nonWIP; inherited_exchange_vector; released_FG_history; P; I; ER; gross_S; EO; origin_W; X_same_side; internal_pair; permission; actual_tests; acceptance; disposition | Collect undivided event readings, calibrated weights/meters and traceable receipt/issue/stock/return/waste records by each physical row. Independently measure relevant composition and moisture; keep complete gross legs and inherited exchange vectors. Retain failures, Q0, unauthorized work and actual observed services. Do not pre-normalize or substitute approval for physical observation. | kg; MJ; kWh; m3; item | Each event and stock boundary; actual metering interval | Complete manufacturing cohort and actual original-cohort service H | Actual disjoint site/station/meter and provider | per 1 kg reference flow | Calibration; real drawing/SDS; independent balances; signed stock/ownership bridges; raw logs; permission/tests/disposition and uncertainty |
| cp_pack | pack | Actual packaging material pools | foreground_record |row_id; event_id; cohort; original_Qc; observed_H; raw_reading; raw_unit; rate_or_integral; interval; state_T_P; independent_density; composition_assay; gross_V; new_burden_U; burden_owner; opening_raw_WIP_nonWIP; closing_raw_WIP_nonWIP; inherited_exchange_vector; released_FG_history; P; I; ER; gross_S; EO; origin_W; X_same_side; internal_pair; permission; actual_tests; acceptance; disposition; O; C; J_in; J_out; H2O_in; H2O_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; nested_whole_W_components; water_state_density_evidence |Collect undivided event readings, calibrated weights/meters and traceable receipt/issue/stock/return/waste records by each physical row. Independently measure relevant composition and moisture; keep complete gross legs and inherited exchange vectors. Retain failures, Q0, unauthorized work and actual observed services. Do not pre-normalize or substitute approval for physical observation. Measure each material P/I/ER/grossS/EO/W separately. Keep opening/closing empty, attached WIP/FG and reusable pools. Mixed-origin W children are non-additive. Whole supplier-included packaging ingress remains with one burden owner. Independently weigh disjoint non-water J and water pool transfers, including repair materials and natural uptake/loss without repair; retain complete wet six legs and stocks, matched pool events and same-side duplicate observation evidence. | kg; MJ; kWh; m3; item | Each event and stock boundary; actual metering interval | Complete manufacturing cohort and actual original-cohort service H | Actual disjoint site/station/meter and provider | per 1 kg reference flow | Calibration; real drawing/SDS; independent balances; signed stock/ownership bridges; raw logs; permission/tests/disposition and uncertainty |
| cp_utilities | utilities | Actual disjoint energy, cleaning and moisture exchanges | foreground_record |row_id; event_id; cohort; original_Qc; observed_H; raw_reading; raw_unit; rate_or_integral; interval; state_T_P; independent_density; composition_assay; gross_V; new_burden_U; burden_owner; opening_raw_WIP_nonWIP; closing_raw_WIP_nonWIP; inherited_exchange_vector; released_FG_history; P; I; ER; gross_S; EO; origin_W; X_same_side; internal_pair; permission; actual_tests; acceptance; disposition; O; C; J_in; J_out; H2O_in; H2O_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; nested_whole_W_components; water_state_density_evidence |Collect undivided event readings, calibrated weights/meters and traceable receipt/issue/stock/return/waste records by each physical row. Independently measure relevant composition and moisture; keep complete gross legs and inherited exchange vectors. Retain failures, Q0, unauthorized work and actual observed services. Do not pre-normalize or substitute approval for physical observation. Independently weigh disjoint non-water J and water pool transfers, including repair materials and natural uptake/loss without repair; retain complete wet six legs and stocks, matched pool events and same-side duplicate observation evidence. | kg; MJ; kWh; m3; item | Each event and stock boundary; actual metering interval | Complete manufacturing cohort and actual original-cohort service H | Actual disjoint site/station/meter and provider | per 1 kg reference flow | Calibration; real drawing/SDS; independent balances; signed stock/ownership bridges; raw logs; permission/tests/disposition and uncertainty |
| cp_assets | assets | Actual production/test assets and repair | foreground_record |row_id; event_id; cohort; original_Qc; observed_H; raw_reading; raw_unit; rate_or_integral; interval; state_T_P; independent_density; composition_assay; gross_V; new_burden_U; burden_owner; opening_raw_WIP_nonWIP; closing_raw_WIP_nonWIP; inherited_exchange_vector; released_FG_history; P; I; ER; gross_S; EO; origin_W; X_same_side; internal_pair; permission; actual_tests; acceptance; disposition; O; C; J_in; J_out; H2O_in; H2O_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; nested_whole_W_components; water_state_density_evidence |Collect undivided event readings, calibrated weights/meters and traceable receipt/issue/stock/return/waste records by each physical row. Independently measure relevant composition and moisture; keep complete gross legs and inherited exchange vectors. Retain failures, Q0, unauthorized work and actual observed services. Do not pre-normalize or substitute approval for physical observation. Inventory whole physical assets and each real new/old repair part/water state independently of actual period service charge; no default life or mass share. Independently weigh disjoint non-water J and water pool transfers, including repair materials and natural uptake/loss without repair; retain complete wet six legs and stocks, matched pool events and same-side duplicate observation evidence. | kg; MJ; kWh; m3; item | Each event and stock boundary; actual metering interval | Complete manufacturing cohort and actual original-cohort service H | Actual disjoint site/station/meter and provider | per 1 kg reference flow | Calibration; real drawing/SDS; independent balances; signed stock/ownership bridges; raw logs; permission/tests/disposition and uncertainty |
| cp_waste | waste | Actual separated or mixed waste and treatment outlets | foreground_record |row_id; event_id; cohort; original_Qc; observed_H; raw_reading; raw_unit; rate_or_integral; interval; state_T_P; independent_density; composition_assay; gross_V; new_burden_U; burden_owner; opening_raw_WIP_nonWIP; closing_raw_WIP_nonWIP; inherited_exchange_vector; released_FG_history; P; I; ER; gross_S; EO; origin_W; X_same_side; internal_pair; permission; actual_tests; acceptance; disposition; O; C; J_in; J_out; H2O_in; H2O_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; nested_whole_W_components; water_state_density_evidence |Collect undivided event readings, calibrated weights/meters and traceable receipt/issue/stock/return/waste records by each physical row. Independently measure relevant composition and moisture; keep complete gross legs and inherited exchange vectors. Retain failures, Q0, unauthorized work and actual observed services. Do not pre-normalize or substitute approval for physical observation. Independently weigh disjoint non-water J and water pool transfers, including repair materials and natural uptake/loss without repair; retain complete wet six legs and stocks, matched pool events and same-side duplicate observation evidence. | kg; MJ; kWh; m3; item | Each event and stock boundary; actual metering interval | Complete manufacturing cohort and actual original-cohort service H | Actual disjoint site/station/meter and provider | per 1 kg reference flow | Calibration; real drawing/SDS; independent balances; signed stock/ownership bridges; raw logs; permission/tests/disposition and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Retain raw readings before conversion or attribution. Convert actual kWh to MJ by3.6 once. Integrate actual rates over measured intervals only; never re-integrate a total volume. Each needed density is independently measured for the actual substance/temperature/pressure/phase; no guessed density, piece kg or secondary coefficient. | raw_readings; actual_interval; actual_state; independent_density | V; U |  |
| calc_q | finished_console | Q=sum actual calibrated net M kg of uniquely first-released complete conforming hardware configurations. Actual included controller/cable/adapter, installed materials and contained water counted once; removable packaging excluded. Closing releasedFG is already included, not additional output. | cp_release | Q |  |
| calc_manufacture | manufacturing burden dimension | For each exchange vector A_c=B_open+U-B_close-T_other. B is raw/WIP and unused/unassigned nonWIP stores or service charge only; never releasedFG or service already performed. U is actual new additions; if consumption is already stock-corrected use the equivalent ledger without a second stock deduction. T_other needs real independent other cohort/function and one justified handover, not ordinary rejected/sold waste. | B_open; U; B_close; justified_T_other; cp_make; cp_utilities; cp_waste | A_c | `jrc-ilcd-attributional-2010` |
| calc_service | actual original-cohort service burden | A_H=actual increments+opening unused/unassigned charge-closing unused/unassigned charge-justified other-function handover. Preserve original manufacturing vector once. Service already performed remains even when FG is still in stock; only unused/unassigned charge carries. Original Qc is original first-release kg, not return, current shipment or repaired kg. H is actually observed, future service unknown. | actual_increments; opening_unused_charge; closing_unused_charge; original_Qc; observed_H; cp_service; cp_pack; cp_assets | A_H | `jrc-ilcd-attributional-2010` |
| calc_single_quotient | all inventory rows | q=N/D once for each separate result dimension. Physical N=complete actual gross leg V in row native unit, never A, stock consumption or economic/service share. Burden N=A_c or A_H independently. Manufacturing D=Q; actual original-cohort service and related gross legs D=original Qc with observed H. finished_console is1 kg reference. Q0 retains all raw loads and no unit result. Cards and aggregation only reference this same result; no second division, stock correction, provider purchase or credit from gross disclosure. | V; A_c; A_H; Q; original_Qc; observed_H | q_phys; q_b |  |
| calc_pack | pack | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. O and C are complete actual wet opening/closing empty, attached-WIP, attached-FG and reusable stocks. P/I/ER are disjoint whole-article inward legs; S is gross outward shipment, EO external return sent, W the actual whole wet discard. ER is external return received. J_in/J_out are independently measured non-water repair, replacement, residue or other material transfers across this packaging-pool boundary not already in those whole-article legs. H2O_in/H2O_out are independently measured actual water transfers across this pool boundary not already embodied in those legs; include natural adsorption/desorption without any repair. Split wet added/removed material into disjoint non-water J and H2O; no prescribed composition or density. Full wet W includes substrate/retained residues/water once, so its nested components are not additional J_out or H2O_out unless physically separated before the boundary. Matched internal pool transfers cancel on foreground consolidation and create no extra purchase, service or Q. P/I whole article counted once; internal reuse/attachment cancels. S is gross physical shipment, not net product Q. X only deduplicates another same-side incoming/outgoing term; new retained material/water influx and full wet closing stock both remain. Independently measured originW is not added to one mixed external waste outlet. | O; P; I; ER; J_in; H2O_in; C; S; EO; W; J_out; H2O_out; L_in_observed; L_out_observed; X_in; X_out; cp_pack | pool_residual |  |
| calc_gates | all physical streams |Manufacture: opening raw/WIP/unassigned physical stocks+disjoint real incoming material and water=closing same stocks+first-release hardware Q+actual waste/species outputs. FG/service: openingFG+internal Q handoff+external gross returns+disjoint new parts/water=closingFG/repairWIP+gross external dispatch/returns+actual waste/species. Reconcile packaging/assets and in-place fluids separately, then cancel matched internal pairs on consolidation. Q and closing releasedFG are not two production outputs; real retained influx is never cancelled by closing stock. Every actual packaging pool uses the complete disjoint J_in/J_out and H2O_in/H2O_out wet balance in calc_pack; duplicate observations cannot remove C or real increments. | opening_physical; actual_gross_in; closing_physical; actual_gross_out; internal_pairs; cp_make; cp_service; cp_pack; cp_assets | physical_residuals |  |
| calc_species | water and actual molecules/elements | Independently reconcile full wet mass and relevant elemental balances from evidenced real species and states; free, formulation-carrier, adsorbed, reaction and structural water are distinct when actually present. Never fit two unknowns to one residual, infer a molecule from VOC/COD/PM/total carbon/boron, or count whole articles plus their chemical children. Actual gas/heat carrier mass and energy service are distinct with one supply owner; actual returned heat-carrier Product state, phase/T/P/enthalpy and supplier water/energy convention must be declared without inventing steam/boiler circuits. | measured_species; actual_state; independent_balances; cp_utilities; cp_pack; cp_assets; cp_waste | species_residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_config | complete hardware | Obtain actual drawings/BOM, module gates and all supplier inclusion bridges; confirm genuine compatible interfaces and complete first-unit tests. No unproved SKU or supplier boundary. | Drawings; receipts; acceptance plan; actual firmware/test/release logs |
| dq_raw | every event | Keep raw values, units, calibration, rate/interval, uncertainty and all failed/Q0/idle/cleanup/rework periods. Missing actual data remains a completeness finding. | Raw weights/meters and failed-run records |
| dq_bridge | stock and ownership | Retain each flow physical stock and inherited exchange vector; reconcile manufacturing, FG/service, packaging, assets, fluid and mixed-waste-origin balances independently. Preserve full real ingress even if retained. | Signed balances and unique event/owner bridges |
| dq_identity | each selected flow | Check complete native basename/synonyms/comments/CAS, all grade/form/route/geography/medium/type restrictions and every exact property/group/reference-unit chain. An unresolved auxiliary identity/provider is explicit; a missing compatible complete-product reference prevents use. | Complete native identities and row restrictions; supplier match |
| dq_limits | evidence and result scope | Keep scientific review and translation review separate from engineering checks. Historical manufacturing and modern service/ecoprofile evidence are not one factory inventory. Disclose all unknowns, observations H, software scope, upstream proxies and unrepresented lifecycle stages. | Source scope matrix and dataset disclosures |

## 9. Validation Rules

### Original acceptance cohort and complete physical history

Lock original cohort c and Qc=sum(M_e) at unique first conforming whole-hardware acceptance events e. Each M_e is calibrated complete net wet hardware kg at that event with the actual supplied accessories and installed materials once, packaging and test assets excluded. Manufacturing Q is the original Qc of the declared manufacturing cohort. Do not recompute Qc from present surviving mass, net shipment, later reinspection or wet/dry changes. Failed/no-release Q0 retains all raw loads and no normalized result. Opening raw/WIP carries its measured physical stock and inherited exchange vector once; an opening accepted console retains its original Qc and manufacture history, not a new purchase or acceptance.

For every original accepted event partition its original-acceptance basis into disjoint net external possession, on-site released FG, quarantine, repair/rework WIP, internal use, irreversible destroyed/lost portions and other documented terminal dispositions. Their current/terminal sum equals original Qc independently of present wet physical mass. Gross dispatch and returns remain complete physical events; a return reverses the corresponding external possession before later redispatch moves the same surviving entitlement. Split partial loss and survival on a documented original basis; do not restore lost water/parts to the survivor and also export the loss. Present wet stocks, evaporation, removed/new parts and all physical exits have their own conservation bridge. Unknown genealogy or cohort assignment stays unresolved with complete raw totals; loops, postacceptance destruction, retest and failed work create no new Q.

### Whole contaminated exits and nonoverlapping provider demand

Record actual receiver-transfer t and full wet whole outlet Qt once: discarded hardware, packaging, wipe, swab, cloth, filter or equipment substrate plus actually retained solvent, dust, formulation residues and water. Dry substrate, contained chemical and water ledgers are reconciled non-additive children. They become separate external waste exits only after real physical separation before the boundary with separate transfer IDs. Package W or removed-part origins within one mixed outlet are traced children, never a second export or second treatment demand. Actual receiver receipts and total treatment demand remain Qt, independent of environmental attribution.

Assign environmental/service vectors A_tc to nonoverlapping original cohorts from demonstrated causal demand and the allocation hierarchy. Reconcile sum_c(A_tc) plus actual other-function/unassigned vectors to the one actual total provider demand. Physical Qt remains in one event register; reports link to it rather than charge the full event again to each cohort or shrink the physical export by an allocation fraction. Physical V/D context disclosures are non-additive across overlapping reports. Treatment and service inventory is independently assigned A_tc/D, using manufacturing Q or original Qc with observed H; it is not an extra full Qt/D for every cohort. Keep genuinely unknown allocation unresolved. Supplier-embedded history/treatment and fully expanded corresponding direct inventories are mutually exclusive representations, not additive purchases.

### Complete producer interfaces and actual tool fleet

A supplied populated motherboard, PSU, enclosure module, storage, cooling, cable or controller must link to an actual compatible complete producer. Preserve that producer's real semiconductor fabrication/packaging, bare-board materials and fabrication, populated-board SMT/assembly, mechanical fabrication or moulding, utilities, maintenance, packaging and wastes as applicable to the supplied article. Full upstream component/subassembly/final-production scope is evidenced by the Ecoprofile; it supplies no factory recipe or coefficient. A bare PCB or individual semiconductor flow cannot replace a complete populated module. Record supplier-embedded included parts once; actual disjoint local operations require their own expanded atomic inventory and evidence, not a paper upstream gate hiding owned manufacture. Unknown producer boundaries prevent a complete cradle-to-gate dataset claim.

Maintain every actual tester, display, reusable test controller, ESD mat/strap, screwdriver, tweezers, pry tool and dispenser as a physical fleet with opening, receipts, external transfers, retirement and closing mass/count separate from service burden. Preserve actual observed use, remaining capacity/history, maintenance and whole contaminated discard with compatible provider units; no lifetime, guessed weight, one whole machine per kg or automatic replacement credit. Reusable cloth stock and cleaning history remain independent of expendable swab/wipe material. A test controller's batteries/cables are included once in its actual scope, separate from the sale-unit controller. Whole tool/module and separately disclosed contained components are disjoint or non-additive.

### Source applicability and actual production gate

The Microsoft manufacturing announcement is a historical planned parts-to-console chain; the 2023 Ecoprofile concerns a representative US Series X configuration; the 2025 illustrated digital-console guide concerns supported repair models/serial families. They support a declared technical synthesis, not one factory, SKU, production order, universal supply BOM or current stock assurance. Native whole-console family fit does not establish quantity, grade, provider qualification, power or electronic performance. Actual first-production acceptance, configuration and serial records establish the reference gate; repair-guide test examples do not themselves prove current factory release or safety certification.

Keep all source counterconditions: the digital guide contains disc/eject and screen wording, a recursive motherboard instruction, inconsistent screw instructions and leakage-test alternatives whose printed current and voltage/resistor criteria are not numerically equivalent. Do not turn any of these into a universal production procedure or quietly correct them. No numerical leakage, torque, angle, cleaning concentration, service interval, life or catalogue mass is prescribed by this PCR. Actual model-compatible assembly/test procedures and independently approved production release records must exist before a concrete dataset can report accepted hardware. Unresolved essential test-method applicability remains a hold for that concrete route; a finite quantity/projection pass cannot waive it. Occurred unsuccessful/unauthorized tests, rework, solvent use, disposal and all Q0 burdens remain recorded even without qualified output.


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_reference | complete reference | Require the complete manufactured home-compatible Product reference, exact physical mass chain, unique finished_console output and actual configuration M/Q release. Software, chip, PCB, single PSU/controller or component-only identity cannot substitute. |  |
| val_disjoint | supplied modules | Reject overlapping whole-module and constituent purchases, supplier SMT/chip manufacture duplicated in foreground, assumed local production, absent optical drive tests and unverified material recipes. Record actual missing inputs as specific cards. |  |
| val_measurement | all inventory rows | Require finite compatible quantity/basis relationships in both languages, correct native property/group/units, complete raw collection and a single normalization. Unsupported/unknown relationships remain unresolved, not claimed passing from Schema alone. |  |
| val_cohort | first release and service | Reject Q plus closing releasedFG as double production, closingFG subtraction from manufacturing burden, reinspection/repair/shipment as new Q, performed-service removal for stored FG and future unobserved service. Keep Q0 raw burden without unit result. |  |
| val_physical | gross gates and packaging |For each actual packaging pool validate separate conditional P/I/ER/grossS/EO/W cards and full wet stock balance. If one mixed outlet, originW children remain non-additive. Reject gross physical scaling by A/economic/service share, lost retained ingress, internal double purchases or automatic credits. Every actual packaging pool uses the complete disjoint J_in/J_out and H2O_in/H2O_out wet balance in calc_pack; duplicate observations cannot remove C or real increments. |  |
| val_species | materials and water | Independently close full mass and relevant elements with actual molecular/phase evidence. Keep natural storage moisture, gross in/out, contained carrier water and old/new repair parts once; no one-residual multiple unknowns or indicators pretending to be species. |  |
| val_operations | real work and software | Collect unauthorized/failed/rejected work and actual hold/waste even when it cannot produce qualified output. Require real permission, posttests and disposition for claimed rework fitness. Document material software/development reuse and resource attribution; hardware kg or licence price does not establish it. | `microsoft-xbox-digital-service-2025`; `jrc-ilcd-attributional-2010` |


### Packaging-pool wet mass and observation bridge

O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. O and C are complete actual wet opening/closing empty, attached-WIP, attached-FG and reusable stocks. P/I/ER are disjoint whole-article inward legs; S is gross outward shipment, EO external return sent, W the actual whole wet discard. ER is external return received. J_in/J_out are independently measured non-water repair, replacement, residue or other material transfers across this packaging-pool boundary not already in those whole-article legs. H2O_in/H2O_out are independently measured actual water transfers across this pool boundary not already embodied in those legs; include natural adsorption/desorption without any repair. Split wet added/removed material into disjoint non-water J and H2O; no prescribed composition or density. Full wet W includes substrate/retained residues/water once, so its nested components are not additional J_out or H2O_out unless physically separated before the boundary. Matched internal pool transfers cancel on foreground consolidation and create no extra purchase, service or Q.

The physical balance uses disjoint measured J and water terms. Its raw observation reconciliation is L_in_observed - X_in = P + I + ER + J_in + H2O_in and L_out_observed - X_out = S + EO + W + J_out + H2O_out. L_in_observed/L_out_observed are observation-side sums only, never extra inventory flows or provider demand. Each X must map by event, component, unit and side to a duplicated OTHER observation of a mass already counted once in the corresponding canonical side. After deduplication every real J/H2O remains once; X cannot cancel true retained ingress, C, O, an opposite-side leg or a nested W child merely because it is in stock. With disjoint raw observations X=0. Internal attachment/reuse alone is no boundary crossing; a transfer into this pool from an asset/repair-material pool has matched source/destination ledgers and is not another external purchase. No repair does not mean J or water is automatically zero: keep real deposited material and natural humidity if present; unknown values stay unresolved.

A wet new repair board or other article is measured independently into non-water J_in and water H2O_in without a default ratio. A real separated removed board/liquid has its own disjoint J_out/H2O_out or whole W, not both. Water already in O, C, P/I/ER/S/EO/W is nested content, not an added increment; uptake and loss after those observations are independently timed transfers. Keep water phase and volume convention, temperature/pressure and actual density evidence when converting the bound atmospheric resource m3 to kg. Do not assume liquid density, fit a residual or restore lost water into a survivor. Full physical package/repair/waste transfers and actual provider totals stay independent of original-cohort A/Qc/H attribution, inherited histories and zero-output loads.


### Complete consumed applicability paragraphs

#### Source chapter 1 / 1

Manufacture of a new complete configured digital-only home video game console without an installed optical drive, from supplied finished hardware modules to its unique first whole-unit release. The selected mechanical/connector assembly route covers real local configuration and testing rather than purchased-complete-console packing. The default output is the complete declared hardware configuration; included controller, mains cord, HDMI cable, external adapter and installed storage/cooling depend on the actual supply BOM. Packaging is included as activity and upstream burden but excluded from reference hardware mass. No default SKU, component formula, net weight, yield, power, test duration, gaming lifetime or certification is supplied.

#### Source chapter 1 / 2

This is a transparent qualitative technical synthesis: the historic manufacturer announcement supports a parts-to-complete-console assembly/test/box-build chain; the modern Ecoprofile establishes complete production and configuration scope; the illustrated service guide supports module interfaces and real reassembly checks. These are not the same SKU, current factory or order. Service procedures alone do not establish a factory traveller. The digital guide contains disc/eject and screen wording and screw inconsistencies; only real model-compatible operations enter the dataset. Evidence absence for current quantities is not a zero.

#### Source chapter 3 / 1

Declare every qualifier in dataset metadata or equivalent notes. The native complete manufactured console family also covers handhelds; positive whole-home-console evidence and the actual supplied configuration narrow applicability. It supplies no single-SKU quantity or functional equivalence across performance generations.

#### Source chapter 6 / 1

The cards below are conditional physical atoms, not a prescribed BOM or recipe. Record every actual event even when unauthorized or nonconforming; not_applicable needs evidence of physical absence, not missing data or approval. Components inside one supplied article are disjoint/non-additive. All stage meters/event ids are matched to avoid duplicate utilities. Actual missing materials, emissions, refrigerants, fuels, carrier-water/heat returns and packaging types require separate specific cards before dataset completeness.

#### Source chapter 6 / 2

One supplied populated logic/memory motherboard core. Record exactly which installed storage, cooling structure, shields, firmware and hardware arrive inside it. CPUs, GPU, memory, bare board, solder and upstream semiconductor/SMT energy already covered by that supplier article are not extra inputs. The service diagram distinguishes assemblies but does not certify this factory supply BOM. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 3

One finished internal AC-to-DC PSU with its actual leads/connectors and shield. Count only when supplied outside the motherboard/core article; not a raw transformer or LED driver. No duplicated PSU electronics or conversion losses during its supplier manufacture. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 4

Conditional actual complete external adapter for the declared home-console supply configuration; an alternative power architecture, not automatically additional to the internal PSU. Preserve rating/connectors and included cable scope without a default power. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 5

One real finished motor/fan/lead module with its declared structure. Count only outside the core supply; not an industrial cooling service or heater. Record actual mounting and connector test without default airflow or fan power. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 6

Only separately supplied actual heatsink assembly outside the core. Include contained thermal-interface preparation/fluid once by supplied-article scope; do not buy metal stock or paste again. A separately dispensed real paste requires its own complete-preparation card and SDS, not assumed metal or water. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 7

One complete supplied front/side enclosure with any included button circuitry, FFC, adhesive and fasteners identified. Do not call it bare polymer resin or count its included button board again. Supplier material/flame-retardant/finish identity needs actual drawings and declarations. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 8

One finished rear enclosure outside the front/module scope; actual material, coatings, labels, shielding and included screw covers recorded. No inferred plastic composition, moulding recipe or catalogue mass. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 9

One separately supplied finished support foot, only if not in the enclosure article. Its actual polymer/metal and fastening content belong to that whole article; not another whole housing or pallet. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 10

One separately supplied populated network board with included radio interfaces and connectors; only outside the core supply. No bare-PCB substitution or addition of contained radio chips, antenna or solder. Record any separately supplied antenna as its own real card. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 11

One actual accessory interface PCBA, disjoint from the core and front-button assembly. Preserve populated state, compatible interface and actual supplier boundary; not generic electronics aggregated with unrelated components. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 12

Only a separately supplied installed SSD/storage article outside the populated core. Record physical form/interface and actual firmware/state; it is not raw memory chips, software download or total storage capacity counted as mass. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 13

One separately supplied FFC with actual connectors and integral adhesive patches. Count whole cable once, not copper/polymer/adhesive twice; included enclosure/core FFC is a child. Each physically different additional harness receives a distinct row. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 14

One actual supplied mains cord with plugs and insulation included. Distinguish sale-unit accessory from reused test lead; count only if in declared hardware configuration. Never bind a power cable whose native reference is energy as though it were kg. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 15

One actual supplied HDMI cable with connectors, only when declared in the release configuration. A reusable test cable is an asset/service record and not another sale-unit purchase. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 16

One complete supplied game controller with actual included battery/cell, firmware and cable scope. Include in hardware M only when it belongs to the uniquely released supplied configuration. A controller reused for testing remains an asset; no duplicate component/battery purchase. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 17

Native Product assembly fastener, production mix at plant GLO; unspecified steel screw grade/size/coating, not a washer/nut or an entire mechanism. Mass/kg with Units of mass. Weigh only actual separately supplied steel screws outside complete module receipts; count-to-kg needs actual measured screw mass and grade/coating match.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 18

Only actual separately used polyimide-backed adhesive tape, including adhesive once; not aluminium/PE, UV adhesive or packing tape. Measure whole tape mass and retained backing/liner/waste; do not infer material from yellow colour alone. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 19

Actual separately applied product label including substrate/ink/adhesive once. A permanent identity label in the accepted hardware is included once in M; removable packaging label belongs to its packaging pool, not simultaneously this row. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 20

Native complete manufactured Product, production mix at plant, including TV-connected and handheld console families. This method narrows it by positive home-console assembly evidence and actual BOM/tests to new complete digital-only home hardware without an installed optical drive, not a computer, software, loose PCB/chip, standalone PSU/controller or handheld route. No CAS, grade, SKU, specific geography or performance is prescribed by this generic record. Mass/kg and Units of mass. Actual installed components, contained fluids/water and included controller/cables belong to the one complete declared hardware configuration once; packaging and test assets are excluded. This is the only first-release output, never also an extra closingFG output.

#### Source chapter 6 / 21

Native complete manufactured home-compatible Product family, production mix at plant, Mass/kg and Units of mass; broad native family also includes handhelds, which this method excludes; selected complete home configuration is digital-only without installed optical drive. Record full actual external returned whole console hardware V, actual condition/contained water and original serial/cohort Qc. Failure or damage does not erase the physical manufactured identity or imply acceptance. Not a new purchase or new Q; not a Waste substitute when actually discarded.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 22

One actual complete replacement motherboard module on an original released cohort, with all included materials/firmware/cooling identified. Distinguish genuinely new module from returned reused article and trace its burden owner; add distinct rows for actual other replacement articles. Permission/tests/acceptance determine fitness, never whether actual receipt and work are retained. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 23

Native complete manufactured home-compatible Product, production mix at plant, Mass/kg and Units of mass; generic native scope also includes handhelds but selected route is digital-only home console without installed optical drive. Full actual gross external dispatch V of the declared hardware configuration, with original first-release cohort and real acceptance/hold disposition. It is a logistics/service disclosure, not another manufactured output or net-delivery denominator. Packaging leaves separately.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 24

Only an actual whole reusable module external return, with test/permission/disposition and new/old mass/water history. Not a discarded WEEE outlet; failed or unauthorized work is still collected and directed to actual hold/waste. No assumed restored function or credit. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 25

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 26

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 27

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 28

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 29

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 30

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 31

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 32

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 33

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 34

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only P new separate purchase for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 35

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only I supplier-included ingress for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 36

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only ER external return received for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 37

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only P separate new purchase. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 38

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only I supplier-included ingress. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 39

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only ER external return received. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 40

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 41

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole corrugated carton with board/ink/glue included; supplier construction, strength and finish must be established. Do not substitute a native non-reusable folding paperbox or fixed recycled-fibre recipe. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 42

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 43

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One whole real moulded-pulp insert with actual fibre/binder/coating and wet state. A camera-specific or balance-excluding native record is not adopted. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 44

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 45

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product PE bag, CAS9002-88-4, production mix at plant, no fixed grade/route/geography, Mass/kg and Units of mass; synonym PE bag. Only a real whole polyethylene bag for packaging/storage, not PET, PP, metallised ESD bag, film resin or its separately purchased polymer/contents. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 46

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only S gross physical outward shipment for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 47

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Product wooden pallet made from wooden boards/slats, production mix in lumber mill, Mass/kg and Units of mass, no fixed grade/geography or unit mass. Its active classification says electrical energy while preserved source classification concerns wood packaging: isolated taxonomy defect, not energy identity; physical basename/route/reference mass are consistent. Use only one actual whole wooden slat pallet with included nails/treatments once, not plastic pallet, repair timber or supplied contents. This card is only EO external return outward for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 48

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only S gross outward shipment. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 49

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only EO external return outward. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 50

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate carton waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 51

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate pulp waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 52

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate pe_bag waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 53

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separate pallet waste outlet, measured with its receiving treatment/provider once. It is Waste, not the unspent Product identity. If actually co-collected in one mixed packaging waste stream, use only mixed_packaging_waste for the external exchange and retain this pool origin W as independently measured non-additive child; do not invent another outlet. This card is only W separate actual waste outlet for this pool. Physical numerator is the complete real leg V in kg, including retained ingress, never burden A, stock consumption, net product Q or an allocated share. P/I of the same whole article have one owner and cannot overlap. Internal reuse cancels; disclosure creates no new purchase/provider/credit. Retain complete wet opening/closing empty, attached WIP/FG and reusable stock. Attribute any real burden in a separate dimension once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 54

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual whole electrostatic-shielding bag with its supplier-specified laminate/coating/seal and wet state; no assumed PE, PET or aluminium layer. The service source supports ESD-safe packaging, not its material recipe. This card is only W actual separate waste outlet. Preserve one owner for disjoint whole P/I, and opening/closing empty/attachedWIP/attachedFG/reusable stocks. X deduplicates only other same-side terms; retained influx and full wet closing remain. Internal reuse cancels. Only a true separate Waste outlet uses this card; if mixed use one mixed_packaging_waste outlet with independently measured non-additive ESD originW child, never both. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 55

Native Product low-voltage AC below1kV, customer-side consumption mix to user, grid-average supply; not electricity generation or a higher-voltage/grid service. Reference Net calorific value in Units of energy/MJ. Capture actual disjoint assembly, firmware/configuration, powered display/controller/network tests, failures, idle, cleanup, storage and handling energy, including actual support equipment. Preserve raw kWh then convert by3.6 once; no rated-power times invented time. Match actual voltage and supplier geography/mix, otherwise select a compatible native identity; no default emission factor.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 56

One complete actual supplied aqueous IPA preparation, including carrier water and any real additive, weighed once with supplier assay and concentration convention. The guide gives a70% IPA example but supplies no PCR-wide recipe, density or consumption. A neat/optical-assembly IPA record is not adopted for this whole preparation. If actually blended on site, replace this receipt by disjoint purchased IPA/water/additive cards with actual mixing energy/loss, never both. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 57

One actual supplied lint-free wipe with material, dimensions, moisture/impregnation and disposable/reuse state declared; a premoistened whole wipe includes its preparation once. A separate liquid issue is recorded only outside that wet article. Used wipes and residues go to the actual single outlet with no forced chemical split. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 58

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Only actual external supplied liquid water crossing the boundary for cleaning, maintenance or humidification, with measured mass and real quality/state. Not carrier water already in whole preparation/article, H2O vapour uptake, steam heat or wastewater. Retained influx remains alongside full wet closing stocks; X only deduplicates another same-side incoming term. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 59

Only an actual complete swab with declared shaft/tip and supplied impregnation, separate from wipe or reusable cloth. Whole supplied preparation is included once; separately dispensed liquid is an independent actual issue. At discard include substrate, retained solvent/residue and water once with actual receiver; mixed-outlet origin is non-additive, not duplicate liquid waste. Concrete UUID unresolved.

#### Source chapter 6 / 60

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Elementary renewable material resource from air, Water, in air, reference Volume/m3, unit group 93a60a57-a3c8-12da-a746-0800200c9a66. The native record provides no Chinese basename; retain the official English display. No native CAS/grade/geography is specified. Record actual ordinary H2O vapour uptake from ambient air during storage, handling or real operations; not total humid-air volume, liquid water or a reversed emission. The physical V is actual H2O uptake in m3; independent state-specific H2O-vapour density is required only for the separate mass balance, never liquid-water density or a secondary coefficient. Retain the complete wet closing stock and real influx, including material that remains in stock; no invented repair permit or purchase. Separate real burden attribution remains once; actual missing uptake data stays unknown.

#### Source chapter 6 / 61

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Native Elementary ordinary H2O, CAS7732-18-5, emissions to air unspecified, Mass/kg and Units of mass. Native aliases include ice/heavy/tritiated water and other phase names; these do not override ordinary CAS and the actual vapour-to-air event. Record actual desorption/drying during ordinary storage/handling as well as cleaning/rework; no operation/permission is invented. Not liquid effluent, purchased steam, condensate return, total humid-air flow or a resource inlet. Independently measure state-specific species and gross release.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 62

Native Elementary propan-2-ol, CAS67-63-0, emissions to air unspecified, Mass/kg and Units of mass; reference elementary flow, with broad synonym list including trade names/grades/routes. Those aliases do not assert a whole formulation or a strong-acid manufacturing route for this emission. Record only independently supported actual IPA molecule released to this receiving air medium, not total VOC/COD, supplied preparation, n-propanol or residue. Add other real emitted molecules separately; liquid disposal is not this air flow.  Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 63

Actual external receipt of one complete electrical leakage tester with its included probes/lead scope, physical mass/count and ownership. Distinguish new/reused/leased stock and real in-use opening/closing asset; no whole tester per kg. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 64

One actual supplied whole reusable display used to inspect console video output. Keep asset receipt/mass and actual service demand; it is neither sale-unit hardware mass nor newly purchased for each tested console. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 65

One actual whole test controller with included battery/cable scope and measured use. Distinct from the supplied sale-unit controller; own new/old physical inventory and service attribution. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 66

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. Only an actual separately supplied repair slat of declared species/grade/treatment/moisture, not a whole pallet. New and recovered slats have disjoint receipts and inherited burdens. Retain actual new influx and complete wet closing repair stock; X cannot cancel stock-retained input. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 67

For this packaging-pool leg retain the disjoint actual non-water material increments J_in/J_out and water increments H2O_in/H2O_out under calc_pack, alongside complete wet O/C and full six legs. These are actual measured pool transfers, not extra purchases, allocation fractions or an inferred repair. Do not add water/material already in this whole wet leg again; natural humidity can occur with no repair. X only reconciles duplicate OTHER observations on the same side and leaves each real increment, C and the whole wet W intact. One actual separately supplied steel repair nail with measured mass/grade/coating; not a screw or the nails already inside a whole supplied pallet. Preserve actual retained receipt and old/new parts history once. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 68

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 69

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 70

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 71

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 72

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 73

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 74

Conditional on this actual whole physical article and receipt event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 75

Actual full tester externally returned at observed horizon; not burden multiplied by an economic or service share. Retain testing service already performed and actual remaining unused capacity separately. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 76

Only actual full external return/transfer of the whole reusable display asset with original identity, condition, mass and unused-service capacity; include every observed leg. It is not the supplied console hardware or a whole new display burden for each kg. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 77

Only actual full external return/transfer of the test controller, including its actual contained battery/cable/water once; retain original ownership and performed service. Do not duplicate the sale-unit controller or assume restored operation. Physical numerator is the complete actual gross event V in native kg, not A or a stock/economic/service share. Attribute any actual burden separately once; no new Q, purchase or credit from disclosure. Missing observations remain unknown. This one unbound article identity requires full native type/form/material/route/geography/medium/property verification before dataset binding.

#### Source chapter 6 / 78

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 79

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 80

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 81

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 82

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 83

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 84

Conditional on this actual whole physical article and transfer event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 85

One actual external electronics-manufacturing waste outlet, with full wet mass, real composition/contamination, recipient and treatment. Do not use a precision-balance-specific Waste record. Include discarded production/test assets only when actually co-collected at this same electronic-waste outlet, with independently measured non-additive asset-origin children; otherwise add the actual separate Waste outlet. If actual outlets are separated by battery/PCBA/enclosure, add distinct Waste cards; if mixed, independently measured origin children do not add to total. Manufacturing samples, failures and unauthorized work remain burdensome. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 86

Exactly one actual externally co-collected packaging waste stream. Independently measure each pool origin W and moisture/contamination as non-additive children; total and split are alternative views. No forced separate carton/pulp/PE/pallet outlet, and no Product identity. One waste/treatment provider only. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 87

One actual spent wipe/residue outlet with whole retained liquid mass and appropriate hazardous state. Measure origin solvent/water independently as non-additive composition children; do not purchase them again or also export the same residue as liquid waste. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 88

One real external liquid cleaning waste outlet when separate, with actual mixture mass/assay, recipient and one treatment route. Not pure water, elemental COD or a guessed IPA mass; carrier water and dissolved species are non-additive child analyses. Confirm this unbound single physical identity against complete native type, composition/CAS where meaningful, form, grade, route, geography, medium and all properties/units before dataset binding. Bounded search is not proof of database absence. Physical numerator is complete observed gross leg V in its native unit; retain a separately owned actual burden vector once. Never scale V by burden allocation or stock correction. Associate event with manufacturing Q or original-cohort Qc/H; actual missing observations remain unknown.

#### Source chapter 6 / 89

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 90

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 91

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 92

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 93

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 94

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 95

Conditional on this actual whole physical article and retirement event, not a prescribed factory tool list or repair recipe. Keep actual material/configuration, complete measured wet mass/count, fluid and included parts once, opening/in-use/closing fleet and linked original cohorts. Receipt/external transfer/retirement is separate from measured service demand and observed maintenance/cleaning history; no invented lifetime or whole tool per kg. At retirement retain the full contaminated article and water once; if physically combined with one mixed outlet this is only a traced non-additive origin child. This concrete UUID remains unresolved; no bare material, similar tool or supplied-liquid UUID substitutes for the actual complete article.

#### Source chapter 6 / 96

Only an actual complete swab with declared shaft/tip and supplied impregnation, separate from wipe or reusable cloth. Whole supplied preparation is included once; separately dispensed liquid is an independent actual issue. At discard include substrate, retained solvent/residue and water once with actual receiver; mixed-outlet origin is non-additive, not duplicate liquid waste. Concrete UUID unresolved.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Complete declared home-console manufacturing hardware input after actual dataset completeness and applicability review |
| allowed_use | Actual configured module-to-console production with matched upstream datasets and unique first-release kg; separately reported observed original-cohort services |
| excluded_use | Lifetime gaming-hour comparison, software/handheld/computer equivalence, unsupported component-only route, automatic recycling credit, unobserved future service or certified factory claim |
| required_metadata | model and hardware revision; digital-only configuration without installed optical drive; home-console architecture and complete supplied configuration; BOM/drawing and every supplied-module inclusion bridge; internal or external power architecture and actual cable/controller inclusion; storage form and installed cooling/shields/fluids; firmware version/state and actual local work scope; site geography and reporting cohort; actual first-release test/acceptance and serial uniqueness; calibrated net hardware M with included water and excluded packaging; raw/WIP/nonWIP stock and inherited exchange vectors; original Qc and observed H for actual services; each packaging pool and its six gross legs; upstream/provider and software reuse scope with remaining gaps |
| required_quality_disclosure | Actual route and supply scope; raw/gross/burden ledgers; source limitations; scientific and translation review state; unresolved identity/provider/software gaps; observed H; all balance and completeness findings |
| update_trigger | Actual architecture/BOM, module supply scope, firmware/test plan, geography/provider, mass convention, packaging, allocation or lifecycle boundary changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed pp.193–195. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Complete category and adjacent software/toy distinctions; no manufacturing factor. |
| microsoft-xbox-manufacture-2002 | literature | Microsoft, Microsoft Names Wistron as Second Manufacturing Partner for Xbox, 2 September 2002. https://news.microsoft.com/source/2002/09/02/microsoft-names-wistron-as-second-manufacturing-partner-for-xbox/ | Historical positive procurement, assembly/integration, testing and final box-build route; announcement of planned manufacture, not an observed modern factory inventory. |
| microsoft-xbox-ecoprofile-2023 | literature | Microsoft, Xbox Series X Ecoprofile, October 2023, complete 9-page report, especially pp.3,6,9. https://download.microsoft.com/download/4/8/D/48D50344-33CD-4D9A-BA11-0C7DCA1A3948/EcoProfile_XboxSeries_X.pdf | Upstream-to-final-assembly production scope; configuration and bundled controller/cables/packaging distinctions; no default mass, lifetime, energy or carbon factor. |
| microsoft-xbox-digital-service-2025 | handbook | Microsoft, XBOX Digital Series X Service Guide, M1340630RevC, 10 January 2025, complete 37 pages, especially pp.5–14,19–36. https://cms-assets.xboxservices.com/assets/09/07/09073501-1e30-425a-b70a-6e6832125c9f.pdf?n=SeriesXDigital_ServiceGuide_en.pdf | Genuine supported hardware modules, illustrated interfaces and actual reassembly/test/cleaning examples; repair scope, not a first-production factory traveller; retain digital-model inconsistencies as limitations. |
| jrc-ilcd-attributional-2010 | handbook | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, sections7.9.2–7.9.3, printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality and residual common-process gate-value allocation; no automatic credit or allocation of console functions. |