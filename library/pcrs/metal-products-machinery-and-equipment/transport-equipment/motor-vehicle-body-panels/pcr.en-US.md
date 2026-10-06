---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.motor-vehicle-body-panels
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Unassembled cold-stamped steel motor-vehicle body panel manufacture

## 1. Scope and Applicability

New single motor-vehicle body panels cold-stamped from declared uncoated low-carbon deep-drawing steel sheet or a received finished blank, released in the drawing-specified trimmed/pierced/edge-finished shape, unassembled and unpainted. State part number, revision and handedness. The manufacturer-gate foreground covers actual blanking, cold drawing/restriking, mechanical trimming/piercing, conditional cleaning, dimensional/net-mass acceptance and conditional protection. This is a narrower manufacturing route within CPC 49231, not the entire parts/accessories class.

Exclude assembled body shells, body-in-white, welded/bonded multi-panel closures, complete doors/vehicles, trailers and containers; aluminium/composite/coated or galvanized sheet, AHSS/hot-stamped panels, hydroformed/roll-formed and undeclared cutting routes, repair/remanufacturing, vehicle assembly/painting, transport/use/crash services and end of life. No welding, electrocoating, phosphating or paint cure is presumed inside this bare single-panel gate.

BMW provides press-shop/body-shop separation and forming/inspection context, not this panel’s material grade or factory quantities. WorldAutoSteel lubrication guidance concerns AHSS: use its lubrication/application/cleaning concepts only, not AHSS loads, temperatures or numerical guidance for this low-carbon route. No source supplies actual panel M or a universal recipe. Scientific review is pending. Receipt-to-acceptance is not complete cradle-to-gate without verified compatible upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.motor-vehicle-body-panels |
| classification_refs | CPC 3.0 49231; narrower cold-stamped single steel body-panel route; context only |
| covered_products | New single motor-vehicle body panels cold-stamped from declared uncoated low-carbon deep-drawing steel sheet or a received finished blank, released in the drawing-specified trimmed/pierced/edge-finished shape, unassembled and unpainted. State part number, revision and handedness. The manufacturer-gate foreground covers actual blanking, cold drawing/restriking, mechanical trimming/piercing, conditional cleaning, dimensional/net-mass acceptance and conditional protection. This is a narrower manufacturing route within CPC 49231, not the entire parts/accessories class. |
| excluded_products | Exclude assembled body shells, body-in-white, welded/bonded multi-panel closures, complete doors/vehicles, trailers and containers; aluminium/composite/coated or galvanized sheet, AHSS/hot-stamped panels, hydroformed/roll-formed and undeclared cutting routes, repair/remanufacturing, vehicle assembly/painting, transport/use/crash services and end of life. No welding, electrocoating, phosphating or paint cure is presumed inside this bare single-panel gate. |
| representative_product | One drawing-defined accepted single panel of positive measured M |
| production_route | Conditional blanking; cold forming and mechanical edge/hole finishing; conditional cleaning; net weighing and acceptance; conditional protection |
| market_state | New accepted unassembled unpainted single panel at declared gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one specified accepted single steel body panel |
| How much | 1 kg accepted net panel mass; per-unit collection normalized using measured M |
| How well | Actual controlled drawing, surface/shape/holes/edges and delivery-state acceptance; equal mass is not equal fit or crash performance |
| How long or cycle | One manufacturing/acceptance cycle; no vehicle lifetime, mileage or transport service |
| reference_flow_link | finished_panel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted unassembled unpainted cold-stamped steel body panel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/site/period; part number/revision/handedness, controlled drawing and actual shape/holes/edges; steel grade/heat/thickness and uncoated substrate state; coil-versus-received-blank supply completeness; press/die and actual cold forming/cutting sequence; cleaning recipe/SDS and residual oil condition; accepted dimensional/surface checks and rejection/rework; actual positive same-configuration calibrated net mass M kg, scale/tare/calibration/uncertainty and release; actual stock/scrap/solvent/water/electricity records and allocation; packaging/rack exclusion, upstream compatibility and data gaps |

M is the actual accepted panel in its declared residual-oil delivery state; exclude packaging, racks, fixtures, scrap and rejected panels. Record whether cleaning changes the delivered state. Required qualifiers must be declared in concrete dataset metadata/notes; missing qualifiers make its reference definition incomplete. Catalogue, geometric area/thickness/density estimates and shipping gross weight do not establish M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Here complete unit means one finished single panel, not a vehicle. Physically weigh each accepted same-part/revision/handedness panel on a suitable calibrated scale; record scale readings, measured fixture tare, oil/cleaning state, operator/date, uncertainty and positive net M, linked to drawing and release. Batch quantity records require actual same-configuration count and traceable per-panel measurement distribution; no assumed average part weight. Weighing records must be reconciled with stock, scrap, rejected units and measured residual oil without treating oil mass as steel yield. |
| `energy_units` | each electricity row | Net calorific value | MJ | Use verified energy unit-group conversion 1 kWh = 3.6 MJ. Record actual supply voltage/provider, press/cleaning/inspection meter boundaries and shared active/idle load. Press rated force, motor rating and nominal strokes are not electricity measurements. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared bare steel stock or received finished blank |
| starting_condition_role | Receipt-to-accepted-single-panel manufacturing foreground |
| product_classification_scope | New single motor-vehicle body panels cold-stamped from declared uncoated low-carbon deep-drawing steel sheet or a received finished blank, released in the drawing-specified trimmed/pierced/edge-finished shape, unassembled and unpainted. State part number, revision and handedness. The manufacturer-gate foreground covers actual blanking, cold drawing/restriking, mechanical trimming/piercing, conditional cleaning, dimensional/net-mass acceptance and conditional protection. This is a narrower manufacturing route within CPC 49231, not the entire parts/accessories class. |
| recursive_input_rule | Never input the same finished panel to its own manufacture. Received finished blank replaces contained sheet and supplier blanking; own internal blank is not a boundary input. Shared die/rack is not panel material |
| upstream_dataset_requirement | Match actual uncoated grade/thickness, sheet-versus-blank condition, lubricant/cleaner concentration and route, site/period/provider and reference property/unit; expose missing links |
| disclosure | manufacturer/site/period; part number/revision/handedness, controlled drawing and actual shape/holes/edges; steel grade/heat/thickness and uncoated substrate state; coil-versus-received-blank supply completeness; press/die and actual cold forming/cutting sequence; cleaning recipe/SDS and residual oil condition; accepted dimensional/surface checks and rejection/rework; actual positive same-configuration calibrated net mass M kg, scale/tare/calibration/uncertainty and release; actual stock/scrap/solvent/water/electricity records and allocation; packaging/rack exclusion, upstream compatibility and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all stages | Include actual blanking/forming/edge finishing, applicable cleaning, attributable rework, acceptance and protection. Separate outsourced finishing services from direct exchanges contained in them. Assembly into bodies and later painting remain outside this single-panel gate. Long-lived presses/dies and factory infrastructure are outside the core operating foreground; disclose this exclusion and add any separately modelled capital contribution with traced actual production applicability. |  |
| `boundary_completeness` | actual jobs and stock | Required stages do not make each lubricant/cleaner/emission card compulsory. Add each actual lubricant chemical/formulation, hydraulic-fluid makeup, compressed-air supply, heat carrier, cutting/deburring consumable and waste exchange absent from candidate cards with measured scope, units and applicability. Do not infer hydraulic leakage, CO2, oil aerosol or solvent emission merely from having a press. Keep hydraulic-fluid circuits separate from stamping oil. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `blanking` | Coil preparation and blanking | conditional | Actual on-site sheet blanking; absent when a finished blank is received | foreground | one accepted same-configuration finished unit, normalized using M |
| `forming` | Cold drawing and restriking | required | Declared cold-stamped steel panel configuration | foreground | one accepted same-configuration finished unit, normalized using M |
| `trimming` | Trimming, piercing and edge finishing | required | Actual drawing-specified finished shape and holes | foreground | one accepted same-configuration finished unit, normalized using M |
| `cleaning` | Conditional surface cleaning | conditional | Only cleaning actually performed before panel release | foreground | one accepted same-configuration finished unit, normalized using M |
| `acceptance` | Panel dimensional and mass acceptance | required | Every accepted single panel | foreground | one accepted same-configuration finished unit, normalized using M |
| `packing` | Factory-gate shipment protection | conditional | Only actual protection included before declared gate | foreground | one accepted same-configuration finished unit, normalized using M |

Actual blank supply feeds cold forming and integrated/separate mechanical edge finishing; conditional cleaning precedes acceptance and conditional protection. Collect each integrated press operation once. Each card requires its own actual applicability; no mandatory emission or combined cleaner recipe.

### Process: Coil preparation and blanking (`blanking`)

Identify coil/heat/grade, thickness and bare-metal state, actual nesting and blank shape. Weigh net sheet issues, returns and skeleton/offcut scrap; separate actual coil straightening and blanking utility records. No generic nesting efficiency assumed.

#### Inputs

##### Product flows

###### Uncoated cold-rolled deep-drawing steel sheet (`steel_sheet`)

Only actual declared low-carbon bare sheet grade and thickness, weighed net issues/returns; not coated AHSS, hot-rolled plate or aluminium.

- Selected flow: Uncoated cold-rolled deep-drawing steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_blanking.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blanking`
- Sources: `bmw-munich`

###### Factory-intake alternating-current electricity (`blanking_electricity`)

Only actual attributable meter kWh converted to MJ; record intake voltage/supply route and press idle/active/shared operation. No rated motor-power or press tonnage estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_blanking.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blanking`
- Sources: `bmw-munich`

#### Outputs

##### Waste flows

###### Low-carbon steel stamping offcut waste (`blanking_steel_scrap`)

Only actual measured steel offcut/skeleton scrap transfer from this stage; separately account rejected whole panels and internal rework without avoided-steel credit.

- Selected flow: Low-carbon steel stamping offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_blanking.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blanking`
- Sources: `bmw-munich`

### Process: Cold drawing and restriking (`forming`)

Record actual cold forming stages, die/press and blank supply state, force/stroke plan, drawing/restrike jobs and rejection. Lubricant is actual formulation with SDS and net application, not hydraulic oil or an obligatory mineral recipe. Dies and fixtures are shared production assets, never panel output mass.

#### Inputs

##### Product flows

###### Uncoated cold-rolled steel automotive-panel blank (`purchased_blank`)

Only externally received actual finished blank, replacing upstream sheet/blanking already contained; no input for own internally transferred blank.

- Selected flow: Uncoated cold-rolled steel automotive-panel blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_forming`
- Sources: `ahss-lubrication`

###### Mineral-oil-based stamping lubricant (`stamping_oil`)

Only actual neat mineral-based formulation with SDS and application balance; pre-oiled received sheet oil is not charged a second time. Synthetic or emulsion recipe needs another identity and concentration balance.

- Selected flow: Mineral-oil-based stamping lubricant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_forming`
- Sources: `ahss-lubrication`

###### Factory-intake alternating-current electricity (`forming_electricity`)

Only actual attributable meter kWh converted to MJ; record intake voltage/supply route and press idle/active/shared operation. No rated motor-power or press tonnage estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_forming`
- Sources: `ahss-lubrication`

#### Outputs

##### Waste flows

###### Spent mineral stamping-oil waste (`spent_stamping_oil`)

Only actual drained/collected spent mineral stamping oil, destination and measured mass; oil retained on accepted part is not this waste.

- Selected flow: Spent mineral stamping-oil waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_forming`
- Sources: `ahss-lubrication`

### Process: Trimming, piercing and edge finishing (`trimming`)

Record actual trim/pierce/flange/edge operations and rejection; may be integrated into a progressive die. Collect segregated steel scrap without duplicating blanking scrap, and actual press/burr-removal utilities. Laser cutting is outside this declared mechanical-cut route.

#### Inputs

##### Product flows

###### Factory-intake alternating-current electricity (`trimming_electricity`)

Only actual attributable meter kWh converted to MJ; record intake voltage/supply route and press idle/active/shared operation. No rated motor-power or press tonnage estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trimming.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_trimming`
- Sources: `bmw-munich`

#### Outputs

##### Waste flows

###### Low-carbon steel stamping offcut waste (`trimming_steel_scrap`)

Only actual measured steel offcut/skeleton scrap transfer from this stage; separately account rejected whole panels and internal rework without avoided-steel credit.

- Selected flow: Low-carbon steel stamping offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trimming.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_trimming`
- Sources: `bmw-munich`

### Process: Conditional surface cleaning (`cleaning`)

Declare actual alkaline wash or IPA cleaning, SDS concentration and drying route. These separate chemical cards are conditional examples, not a required combined treatment. Bare unpainted delivery has no phosphate/e-coat/paint baking assumed; preserve declared residual oil state.

#### Inputs

##### Product flows

###### Process Water (`cleaning_water`)

Only actual supplied treated process water, measured mass; not natural withdrawal, unspecified elementary water or cleaning effluent.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

###### Sodium carbonate powder (`sodium_carbonate`)

Only actual sodium carbonate cleaning ingredient, CAS497-19-8, mass and bath concentration records; no generic formulated detergent identity inferred.

- Selected flow: Sodium carbonate powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

###### Anhydrous isopropanol cleaning solvent (`isopropanol`)

Only actual IPA solvent, CAS67-63-0 and verified concentration/chemical balance; not ethanol or 70% disinfectant.

- Selected flow: Anhydrous isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

###### Nonwoven polyester cleaning wipe (`cleaning_wipe`)

Only actual finished polyester wipe, measured dry issue and containment; not raw textile substrate unless converting explicitly included.

- Selected flow: Nonwoven polyester cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

###### Factory-intake alternating-current electricity (`cleaning_electricity`)

Only actual attributable meter kWh converted to MJ; record intake voltage/supply route and press idle/active/shared operation. No rated motor-power or press tonnage estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

#### Outputs

##### Waste flows

###### Aqueous oily steel-panel cleaning wastewater (`cleaning_effluent`)

Only actual effluent transfer to treatment with measured composition and destination; not elementary water discharge.

- Selected flow: Aqueous oily steel-panel cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

###### Isopropanol-contaminated polyester wipe waste (`spent_wipe`)

Only actual transferred contaminated wipe with measured retained solvent; distinguish air release.

- Selected flow: Isopropanol-contaminated polyester wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

#### Outputs

##### Elementary flows

###### isopropanol (`isopropanol_air`)

Only actually evidenced IPA emission, CAS67-63-0, immediate air/unspecified. Use measured species solvent balance or emission measurement, never total solvent issue. Indoor air, long-term or aqueous media require other identities; no mandatory emission.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `ahss-lubrication`

### Process: Panel dimensional and mass acceptance (`acceptance`)

Use same-part-number/revision/handedness drawing, checking fixture or traceable dimensional scan, edge/hole and surface checks, actual calibrated panel net weighing and release. Record wrinkles, splits, springback, burrs and surface damage with producer-defined criteria; no fixed tolerance, strength, lifetime or crash equivalence is invented.

#### Inputs

##### Product flows

###### Factory-intake alternating-current electricity (`acceptance_electricity`)

Only actual attributable meter kWh converted to MJ; record intake voltage/supply route and press idle/active/shared operation. No rated motor-power or press tonnage estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-press`

#### Outputs

##### Product flows

###### Accepted unassembled unpainted cold-stamped steel body panel (`finished_panel`)

One specified part/revision/handedness at accepted final shape with actual residual oil state, excluding rack/fixtures/packaging. Physical calibrated M and cp_mass establish normalized output; no geometric density or nominal mass substitutes.

- Selected flow: Accepted unassembled unpainted cold-stamped steel body panel
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `bmw-press`

### Process: Factory-gate shipment protection (`packing`)

Measure each actual packaging item. Returnable rack tare and dunnage are excluded from panel M; attribute actual rack service/return burdens separately with traced reuse, rather than assuming rack lifetime or one-way use.

#### Inputs

##### Product flows

###### Corrugated cardboard box (`carton`)

Only actual one-way corrugated box net issue; not reusable transport rack.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`protective_film`)

Only actual LDPE protective film, net issue and mass; exclude film from panel net M.

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

###### Factory-intake alternating-current electricity (`packing_electricity`)

Only actual attributable meter kWh converted to MJ; record intake voltage/supply route and press idle/active/shared operation. No rated motor-power or press tonnage estimate.

- Selected flow: Factory-intake alternating-current electricity
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

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared utilities and tooling occupation | Directly attribute actual net issues, meters and stamping/cleaning/acceptance jobs including rework. For inseparable utilities use measured causal press occupation, actual active/idle load or another evidenced physical driver: share = order driver / sum of covered order drivers. Retain period and full denominator; panel counts, die tonnage or catalogue area alone are not default drivers. |  |
| `allocation_trials` | tool qualification and accepted production | Separate independent prototype/R&D from production. Production die tryout and destructive checks must be attributed to actual covered accepted order when causally applicable; destroyed/rejected trial panels do not enter accepted output. Record actual reuse/qualification scope and sensitivity, never an assumed die lifetime or fixed output count. |  |
| `allocation_recovery` | offcuts, rejects and rework | Keep blanking skeleton and trimming offcuts distinct and count each physical transfer once. Attribute rework to accepted output. Determine actual waste versus co-product and destination; steel recyclability does not justify avoided-primary-steel or substitution credits. Any co-product allocation needs actual causal/economic originals and sensitivity. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | accepted physical weighing record | model; configuration; serial number; accepted net mass M; part number/revision/handedness; panel scale reading; fixture tare; oil/cleaning state; calibration/uncertainty; drawing; signed release | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | actual manufacturing and acceptance period | declared panel acceptance gate | accepted net mass per unit | actual calibrated physical single-panel weighing, measured tare and controlled drawing/release |
| `cp_blanking` | `blanking` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision/handedness; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read calibrated stock scales, coil net issue/return, nesting and blanking job and utility meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_forming` | `forming` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision/handedness; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read forming jobs, metered utility, exact lubricant spec/SDS and net application/return | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_trimming` | `trimming` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision/handedness; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read trim/pierce/edge jobs, measured scrap destination and utility meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_cleaning` | `cleaning` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision/handedness; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual cleaning recipe/SDS, water/energy meters, solvent balance and waste-transfer records | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_acceptance` | `acceptance` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision/handedness; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read serial/batch acceptance, controlled drawing and metrology/scale calibration, weighing and release | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_packing` | `packing` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision/handedness; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read packing issues/returns, actual tare and rack movement/reuse records | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_provenance using actual same-part/revision/handedness physical panel weighing with positive M kg, measured tare and recorded residual oil. No dimensional density, catalogue weight, gross rack load or assumed scrap ratio substitutes. Missing actual weighing originals requires scientific/data review. | actual scale/calibration/drawing/release originals |
| `quality_atomic` | every exchange | Verify one physical or chemical identity, grade/concentration/processing/supply state and original reference property/unit. Uncoated low-carbon sheet is not AHSS, hot-rolling oil is not cold-stamping lubricant, powder sodium carbonate is not formulated wash, and anhydrous IPA is not disinfectant. Keep precise unresolved rows rather than substituting broad identities. | actual supplier drawings/spec/SDS and verified public records |
| `quality_acceptance` | cp_acceptance | Use actual controlled drawing and calibrated checking fixture/scan, shape, hole location, edge, burr, surface, split/wrinkle/springback criteria and signed release. Record actual failed pieces and rework. Manufacturer camera inspection is context, not a mandated sensor or invented universal tolerance or crash approval. | actual drawing, inspection/metrology and release reports |
| `quality_balance` | steel, oil, solvent, water and electricity | Reconcile period net stocks, incorporation, accepted/rejected panels, scrap and returns. Keep actual residual oil separate from steel yield. Distinguish technical process-water supply, treatment-bound wastewater and environmental release. IPA-air needs species-specific measured emission or closed balance accounting solvent in wiped waste/recovery, immediate air/unspecified; issue alone is not release. Add every actual heat/drying carrier with evidenced unit conversion; no mandatory emission inferred. | actual stock/spec/SDS balances, meters and transfers |
| `quality_coverage` | dataset/upstream coverage | Separate measured/calculated/missing and demonstrated not_applicable. Audit actual complete process map, exchanges absent from candidate cards, supplier-contained blanking, capital exclusion, allocation and uncertainty. Compatible verified upstream links are necessary for complete cradle-to-gate claims. Finite measurement checking does not establish actual factory evidence or scientific approval. | actual process map, originals and transparent gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference/output | Require current actual positive M kg and cp_mass. Exact reference name equals finished_panel; empty UUID must register that exact row in unresolved_flow_identities. One accepted panel only; no rack, packaging, tool, scrap or rejected mass. |  |
| `validate_basis` | all rows and protocols | Verify identical ordered lower-case row/rule/protocol IDs and actual projection references in both languages. q_item is per accepted finished unit; M is kg; use explicit normalize_mass and identical same-configuration counts. Never relabel public number/area/energy properties as Mass. |  |
| `validate_boundary` | process map and exchanges | Verify received blank versus own blanking containment, integrated-die resource counting, distinct blanking/trim scrap, actual lubricant/cleaning chemistry, residual oil and evidenced emission. Candidate cards alone do not establish factory completeness; missing actual records or uncertain applicability requires review. |  |
| `validate_use` | dataset use | Disclose actual drawing/configuration, unassembled bare delivery state, manufacturing gate, mass origins, unresolved identities, gaps and upstream compatibility. Equal kg is not equal fit, corrosion protection, crash performance or lifetime. Candidate is not published or methodologically approved. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset and background_dataset after actual data completion and review |
| downstream_use | Specified single body-panel manufacture input into a separately bounded assembled-body/vehicle model |
| allowed_use | Compatible part/configuration and gate manufacturing comparison per kg, with actual mass/delivery state and upstream links disclosed |
| excluded_use | Exclude assembled body shells, body-in-white, welded/bonded multi-panel closures, complete doors/vehicles, trailers and containers; aluminium/composite/coated or galvanized sheet, AHSS/hot-stamped panels, hydroformed/roll-formed and undeclared cutting routes, repair/remanufacturing, vehicle assembly/painting, transport/use/crash services and end of life. No welding, electrocoating, phosphating or paint cure is presumed inside this bare single-panel gate. |
| required_metadata | manufacturer/site/period; part number/revision/handedness, controlled drawing and actual shape/holes/edges; steel grade/heat/thickness and uncoated substrate state; coil-versus-received-blank supply completeness; press/die and actual cold forming/cutting sequence; cleaning recipe/SDS and residual oil condition; accepted dimensional/surface checks and rejection/rework; actual positive same-configuration calibrated net mass M kg, scale/tare/calibration/uncertainty and release; actual stock/scrap/solvent/water/electricity records and allocation; packaging/rack exclusion, upstream compatibility and data gaps |
| required_quality_disclosure | Measured/calculated/missing status, weighing/acceptance originals, identities/gaps, steel/oil/solvent balances, allocation/capital exclusion and uncertainty; candidate and scientific review pending |
| update_trigger | Actual part/revision/handedness, grade/coating/thickness, supply blank, forming/cutting/cleaning route, weighing/acceptance, site or upstream dataset changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `bmw-munich` | literature | [BMW Group Plant Munich](https://www.bmwgroup-werke.com/content/grpw/websites/bmwgroup-werke_com/muenchen/en.html) | HTML Press Shop and Body Shop headings: forming/inspection and separate joining stages. Supports process separation only. Material mixes, coated-body mass, production counts and plant-specific quantities are not this bare-panel recipe, net M or QA ranges. |
| `bmw-press` | literature | [BMW Group Production](https://www.bmwgroup-werke.com/content/grpw/websites/bmwgroup_com/en/company/production.html) | HTML production-process Press shop/Body shop/Paint shop paragraphs: sheet/blank forming separated from body joining and coating. Does not prove this panel’s steel grade, supplier state, acceptance tolerance or manufacturing intensity. No full-body mass adopted. |
| `ahss-lubrication` | extension_guidance | [WorldAutoSteel AHSS Insights — Lubrication](https://ahssinsights.org/forming/tooling/lubrication/) | HTML Lubricant Functions and Requirements, Lubricant Selection and blank-wash/application paragraphs. AHSS-specific industry guidance supports lubricant identity/application/cleaning choices, not mandatory mineral chemistry or low-carbon-steel numerical loads/temperatures. No measured foreground quantities, net part mass or universal lifetime supplied. |
