---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.marine-floating-structure
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-propelled steel floating work-platform manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete non-propelled steel float-module work platforms and explicitly declared coupled-module structural configurations, used as floating work support. Fixed integral connection/access fittings are included; the work equipment supported by the deck is excluded. Foreground begins at specified stock/finished modules and bought-in fittings and ends at configuration-specific manufacturing acceptance/delivery, including attributable integrity testing. Site installation and marine construction services are excluded. Supplier upstream is linked only when supported; collected receipt-to-delivery foreground alone is not complete cradle-to-gate. [Sources: `pontonmade-steel`, `damen-modular`]

Exclude powered vessels, freight-carrying or liquid-cargo barges, floating docks/cranes or drilling/production/wind-energy platforms, buoys/rafts, non-steel or foam-filled float routes, installed civil infrastructure, repair/conversion/resale and operational lifting/dredging/piling/transport/maintenance/end of life. A trade name pontoon does not establish the same boundary: the Koole cargo-pontoon example carries cargo and fuel and is excluded. This scope is narrower than CPC 49390. Watertight structural flotation, modular connections and dry-net configuration acceptance differ materially from steel material or motor-vehicle body PCRs. Existing scaffold remains read-only; scientific review is pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.marine-floating-structure |
| classification_refs | CPC 3.0 49390; narrower non-propelled steel float-module work platforms, context only |
| covered_products | New complete steel float-module or explicitly coupled structural work platform |
| excluded_products | Exclude powered vessels, freight-carrying or liquid-cargo barges, floating docks/cranes or drilling/production/wind-energy platforms, buoys/rafts, non-steel or foam-filled float routes, installed civil infrastructure, repair/conversion/resale and operational lifting/dredging/piling/transport/maintenance/end of life. A trade name pontoon does not establish the same boundary: the Koole cargo-pontoon example carries cargo and fuel and is excluded. This scope is narrower than CPC 49390. Watertight structural flotation, modular connections and dry-net configuration acceptance differ materially from steel material or motor-vehicle body PCRs. Existing scaffold remains read-only; scientific review is pending. |
| representative_product | One serial/configuration-linked accepted complete float-module or platform with actual dry-net M |
| production_route | Conditional stock preparation, watertight shell/deck assembly, conditional surface finish, connector/outfit integration and integrity acceptance |
| market_state | Complete accepted structural unit at fabrication gate, with actual delivered integral fittings |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured non-propelled steel floating work platform |
| How much | 1 kg accepted net complete-vessel mass; actual per-vessel records divided by positive controlled M |
| How well | Vessel-specific structural, installation, commissioning and release criteria; trace applicable flag/class acceptance when claimed. Equal mass is not equal deck load or flotation performance |
| How long or cycle | One manufacturing and construction-acceptance cycle; no assumed floating platform lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete non-propelled steel floating work platform |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model, serial and drawing revision; steel grade/thickness, shell/deck/partition form, watertight compartments and supplier module completeness; accepted single-module or explicitly counted coupled platform configuration; fixed coupling plates/pins, covers/seals and conditional fender/bollard/guardrail/anode; coating formulation and manufacturing site/period/gate; positive dry-net M in kg from current controlled acceptance records based on actual weight/lightweight inspection, traceable physical method/calibration and signed itemized configuration reconciliation; integral detached delivered fittings; excluded external work equipment, accommodation, persons, loose cargo, ballast/water/fuel, removable protection, temporary test contents and site civil/anchor work; attributable fabrication test and support-resource scope; actual acceptance regime and upstream linkage |

Declare all qualifiers in metadata or equivalent reference comments. The broad public vessel product identity must be narrowed to the actual floating platform configuration. Net M includes complete installed steel shell/deck/partitions and integral delivered fittings. Reconcile delivery-detached integral parts by measured mass. Exclude persons, loose loads, consumable fuel/fresh water, ballast, removable protection and temporary trial loads/fixtures. Gross/net tonnage, deadweight, catalogue mass, loaded displacement and full-fuel condition cannot substitute for M. An actual survey-state measurement can only contribute through the traceable net-configuration correction record required below.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | controlled acceptance mass records | Mass | kg | Controlled acceptance records are an acquisition interface. Require current original actual dry-weight/lightweight inspection and serial/configuration/delivery-state records with a traceable physical method, calibration and item-level mass balance. Individually weighed complete modules and integral fittings may be reconciled to the exact accepted coupled configuration, with signed additions/deductions and no duplicate included constituents. If an actual afloat survey is used, retain observed draught/freeboard, measured water density, verified hydrostatics and measured tank/test contents, then correct to this dry-net scope. Do not infer an entire-platform scale or substitute catalogue own weight, deck capacity, buoyancy, displacement, deadweight or tonnage for net M. The historical NMA procedure is conditional method context only. [Source: nma-lightship] |
| `energy_conversion` | electricity | Net calorific value | MJ | Actual measured kWh converts by verified unit identity 3.6 MJ/kWh; retain intake voltage and site route. Plant nameplate kW is not measured energy. |
| `formulation_mass` | liquid formulations | Mass | kg | Weigh the actual coating base, hardener, fuel or service-fluid formulation separately. Volume-to-mass requires measured density at declared composition/state/temperature; no tank capacity or brochure coating coverage factor. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified steel stock/finished float modules and fittings, with actual supplier inclusions |
| starting_condition_role | Foreground receipt-to-accepted-vessel delivery manufacture |
| product_classification_scope | Non-propelled steel float-module work platform, declared single/coupled structural configuration |
| recursive_input_rule | No complete floating platform recursively generated as its own input; bought-in finished blocks/modules bypass included operations |
| upstream_dataset_requirement | Match actual grades/formulations/module completeness/layout, period/geography and property; disclose missing supplier production |
| disclosure | builder/model, serial and drawing revision; steel grade/thickness, shell/deck/partition form, watertight compartments and supplier module completeness; accepted single-module or explicitly counted coupled platform configuration; fixed coupling plates/pins, covers/seals and conditional fender/bollard/guardrail/anode; coating formulation and manufacturing site/period/gate; positive dry-net M in kg from current controlled acceptance records based on actual weight/lightweight inspection, traceable physical method/calibration and signed itemized configuration reconciliation; integral detached delivered fittings; excluded external work equipment, accommodation, persons, loose cargo, ballast/water/fuel, removable protection, temporary test contents and site civil/anchor work; attributable fabrication test and support-resource scope; actual acceptance regime and upstream linkage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | Include actual manufacture, attributable rework, launching and construction commissioning to declared acceptance gate. Allocate independently measured production-support trial resources; exclude marine work service and research/operational maintenance. Add every actual tug/dock/crane service or fuel as a separate declared exchange when included, with service boundary/duration and supplier scope. No lifetime voyage burden is inferred. |  |
| `boundary_modules` | purchased components | Count finished hull blocks, float modules and fitted structural/access assemblies once with constituents and prefills. Replace constituent cards for included supply. Actual in-house manufacture needs measured component inventories. Complete the full actual BOM, all conditional chemistries and demonstrated species before dataset release; the candidate cards are not an exhaustive vessel bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Steel shell, deck and partition preparation | conditional | Actual stock cutting/forming in reporting fabrication yard. | foreground | one accepted configured complete structural unit, normalized with M |
| `hull_join` | Watertight float-shell and deck assembly | required | Every complete accepted float module or declared platform. | foreground | one accepted configured complete structural unit, normalized with M |
| `surface_finish` | Surface preparation and protective finish | conditional | Actual foreground surface preparation/coating. | foreground | one accepted configured complete structural unit, normalized with M |
| `outfit` | Module coupling and physical outfitting | required | Complete declared module or platform configuration. | foreground | one accepted configured complete structural unit, normalized with M |
| `acceptance` | Integrity testing and complete-configuration acceptance | required | Before declared fabrication delivery gate. | foreground | one accepted configured complete structural unit, normalized with M |
| `packing` | Delivery protection and integral detached fittings | conditional | Actual removable protection or integral delivery-detached fittings. | foreground | one accepted configured complete structural unit, normalized with M |

Actual stock forming feeds hull joining and conditional finishing, connector/outfit integration and integrity acceptance, then conditional delivery protection. Stages may overlap; assign resources once to actual operations and supplier scope. Every card is conditional on exact composition/state/configuration, even in required stages. Add each actual omitted component/fuel/chemical and demonstrated waste/emission independently. No universal welding/coating recipe or obligatory emission is claimed.

### Process: Steel shell, deck and partition preparation (`stock_form`)

Trace steel grades, thickness, deck/slip-resistant finish and actual shell/partition drawings. Purchased completed float modules replace included stock and fabrication. Add actual cutting gases, tooling consumables and measured component fabrication separately.

#### Inputs

##### Product flows

###### Hot-rolled normal-strength certified shipbuilding steel plate (`normal_hull_plate`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Hot-rolled normal-strength certified shipbuilding steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `pontonmade-steel`

###### Hot-rolled low-alloy high-strength thick shipbuilding steel plate (`hsla_plate`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Hot-rolled low-alloy high-strength thick shipbuilding steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `pontonmade-steel`

###### Hot-rolled steel ship-hull stiffener profile (`hull_profile`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Hot-rolled steel ship-hull stiffener profile
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `pontonmade-steel`

###### Alternating-current electricity supplied at the declared fabrication-yard intake (`electricity_stock_form`)

Collect measured station electricity kWh, intake voltage/region and measured shared-resource driver denominator; rated kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared fabrication-yard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `pontonmade-steel`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Segregated untreated steel cutting offcuts leaving after internal reuse; weigh actual amount and retain recipient without included treatment.
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
- Sources: `pontonmade-steel`

### Process: Watertight float-shell and deck assembly (`hull_join`)

Assemble and weld actual shell panels, framing, partitions, deck and integrated coupling slots. Record dimensional inspection, weld procedure and actual rework. Module count and compartment arrangement follow actual drawings; no mandatory numerical compartment count or universal welding gas recipe.

#### Inputs

##### Product flows

###### Solid low-alloy steel gas-shielded welding wire (`solid_wire`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Solid low-alloy steel gas-shielded welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `pontonmade-steel`

###### Carbon dioxide (`co2_shield`)

Only supplied pure CO2 shielding gas actually used in the at-plant China route matching this identity. Collect measured consumed mass; no argon premix, liquid-state substitution or presumed fossil release.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `pontonmade-steel`

###### Argon/carbon-dioxide premixed welding shielding gas (`argon_mix`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Argon/carbon-dioxide premixed welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `pontonmade-steel`

###### Alternating-current electricity supplied at the declared fabrication-yard intake (`electricity_hull_join`)

Collect measured station electricity kWh, intake voltage/region and measured shared-resource driver denominator; rated kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared fabrication-yard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `pontonmade-steel`

#### Outputs

##### Waste flows

###### Captured iron-oxide-rich hull-welding filter dust (`weld_dust`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Captured iron-oxide-rich hull-welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `pontonmade-steel`

### Process: Surface preparation and protective finish (`surface_finish`)

Record actual preparation, interior/exterior finish and distinct coating base/hardener. Purchased prefinished modules replace duplicate operations. Epoxy and cuprous-oxide antifouling cards apply only if actual formulations are used; other coating or galvanising routes require separate actual exchanges and scope.

#### Inputs

##### Product flows

###### Process Water (`clean_water`)

Actual supplied treated industrial process water for cleaning; exclude internal circulation and environmental resource withdrawal.
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
- Sources: `pontonmade-steel`

###### Spherical cast-steel hull-blasting shot (`abrasive`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Spherical cast-steel hull-blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `pontonmade-steel`

###### Formulated epoxy marine-coating base component (`epoxy_base`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Formulated epoxy marine-coating base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `pontonmade-steel`

###### Polyamine marine-epoxy coating hardener formulation (`epoxy_hardener`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Polyamine marine-epoxy coating hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `pontonmade-steel`

###### Cuprous-oxide self-polishing marine antifouling paint formulation (`cu2o_paint`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Cuprous-oxide self-polishing marine antifouling paint formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `pontonmade-steel`

###### Alternating-current electricity supplied at the declared fabrication-yard intake (`electricity_surface_finish`)

Collect measured station electricity kWh, intake voltage/region and measured shared-resource driver denominator; rated kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared fabrication-yard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `pontonmade-steel`

#### Outputs

##### Waste flows

###### Spent steel blasting shot with removed hull-coating residue (`spent_abrasive`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Spent steel blasting shot with removed hull-coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `pontonmade-steel`

###### Aqueous steel-hull cleaning effluent transferred for treatment (`clean_effluent`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Aqueous steel-hull cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `pontonmade-steel`

### Process: Module coupling and physical outfitting (`outfit`)

Install actual connection plates/pins and inspection covers separately unless included in a purchased assembly. Fender, bollard, guardrail and zinc anode are conditional actual variants. Fixed access/connection hardware delivered integrally is included; external cranes, drilling/dredging equipment, accommodation and on-site anchors/civil works are excluded from this structural platform boundary. Do not double-count fabricated-in-house parts and purchased assemblies.

#### Inputs

##### Product flows

###### Finished steel modular-pontoon coupling connection plate (`connection_plate`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished steel modular-pontoon coupling connection plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Finished steel modular-pontoon coupling pin (`connection_pin`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished steel modular-pontoon coupling pin
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Finished steel watertight pontoon inspection manhole cover (`inspection_cover`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished steel watertight pontoon inspection manhole cover
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Finished EPDM-rubber pontoon manhole sealing gasket (`epdm_seal`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished EPDM-rubber pontoon manhole sealing gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Finished welded-steel pontoon mooring bollard (`bollard`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished welded-steel pontoon mooring bollard
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Finished vulcanised-rubber cylindrical pontoon fender (`rubber_fender`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished vulcanised-rubber cylindrical pontoon fender
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Finished coated-steel pontoon guardrail section (`guardrail`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished coated-steel pontoon guardrail section
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Finished sacrificial-zinc pontoon anode with mounting insert (`zinc_anode`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished sacrificial-zinc pontoon anode with mounting insert
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

###### Alternating-current electricity supplied at the declared fabrication-yard intake (`electricity_outfit`)

Collect measured station electricity kWh, intake voltage/region and measured shared-resource driver denominator; rated kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared fabrication-yard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `pontonmade-steel`

### Process: Integrity testing and complete-configuration acceptance (`acceptance`)

Trace actual compartment tightness, dimensional/coupling/finish acceptance and rework. Pressure, test media and load method follow actual documented applicable design; no manufacturer load rating is a universal test prescription or net M. Include attributable production-support lifting/launch trial resources only when performed before gate; separate support services if included. Diesel and elementary-release cards are optional measured yard-support combustion, never an onboard engine requirement or operating lifetime.

#### Inputs

##### Product flows

###### Fossil low-sulphur diesel fuel supplied for yard-support construction testing (`test_diesel`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Fossil low-sulphur diesel fuel supplied for yard-support construction testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `pontonmade-steel`

###### Alternating-current electricity supplied at the declared fabrication-yard intake (`electricity_acceptance`)

Collect measured station electricity kWh, intake voltage/region and measured shared-resource driver denominator; rated kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared fabrication-yard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `pontonmade-steel`

#### Outputs

##### Product flows

###### Accepted complete non-propelled steel floating work platform (`finished_machine`)

One kg accepted dry-net complete declared float-module or structural platform at manufacturing gate, with installed integral fittings and delivery-detached parts reconciled. Exclude work equipment, ballast, water/fuel, persons, loose loads, temporary test contents and removable packaging. No installation or operating marine-work service.

- Selected flow: Accepted complete non-propelled steel floating work platform
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `pontonmade-steel`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only measured attributable yard-support construction fuel combustion CO2 to air unspecified, immediate, with demonstrated fossil origin. No onboard propulsion or compulsory combustion is assumed.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `pontonmade-steel`

###### nitrogen monoxide (`nitric_oxide`)

Only independently measured attributable yard-support construction NO to air unspecified, immediate. Total NOx without species split does not establish this amount; no obligatory release.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `pontonmade-steel`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only independently measured attributable yard-support construction NO2 to air unspecified, immediate. Total NOx without species split does not establish this amount; no obligatory release.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `pontonmade-steel`

### Process: Delivery protection and integral detached fittings (`packing`)

Measure removable protection independently and exclude from M. Integral detached connectors or fittings must be physically measured and reconciled to the accepted same module/platform configuration. Exclude separately sold spares and logistics after gate.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only removable non-self-adhesive, non-cellular, unreinforced/unlaminated PE-LD protection foil. Measure actual issues/returns separately and exclude from M.
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

###### Alternating-current electricity supplied at the declared fabrication-yard intake (`electricity_packing`)

Collect measured station electricity kWh, intake voltage/region and measured shared-resource driver denominator; rated kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared fabrication-yard intake
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
| `allocation_orders` | shared shipyard resources | Separate hull orders/configurations and directly attribute measured stock issues/returns, finished-module/fitting receipts, work hours, meters, trials and rework first. Inseparable shared resources use a demonstrated measured causal driver such as operation time/load or coating area/layer requirement: share = order driver / sum of drivers for all covered orders. Retain period, denominator and causality; tonnage, nominal displacement or equal vessel count is not an automatic causal driver. |  |
| `allocation_recovery` | internal reuse and waste | Internal reused stock/water/test fuel is a transfer, not repeated fresh input or an automatic credit. Exported waste retains its measured quantity and recipient with no assumed avoided-production benefit. Separate saleable co-products before a documented reviewed residual allocation. Reconcile rejected/reworked construction and work in progress to accepted output during the reporting period. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete-configuration dry-net mass | controlled_acceptance_record | model; configuration; serial number; accepted net mass M; original acceptance/weight-report id/date; actual lightship/weight-inspection method; instrument/calibration; delivery state; integral fitted components; itemized added/deducted masses; cargo/persons/fuel/fresh water/ballast/testing-load exclusions; detached integral parts; verifier; mass balance | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted complete configuration | actual manufacture/acceptance period of that configuration | declared shipyard acceptance gate | accepted net mass per unit | original actual inspection, configuration correction, mass-balance and verification records |
| `cp_stock_form` | stock_form | Steel shell, deck and partition preparation | foreground_record | module/platform serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; module count and individually measured dry masses; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect configuration-linked original drawings, supplier scopes, measured issues/returns, meters and integrity-test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_hull_join` | hull_join | Watertight float-shell and deck assembly | foreground_record | module/platform serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; module count and individually measured dry masses; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect configuration-linked original drawings, supplier scopes, measured issues/returns, meters and integrity-test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_surface_finish` | surface_finish | Surface preparation and protective finish | foreground_record | module/platform serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; module count and individually measured dry masses; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect configuration-linked original drawings, supplier scopes, measured issues/returns, meters and integrity-test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_outfit` | outfit | Module coupling and physical outfitting | foreground_record | module/platform serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; module count and individually measured dry masses; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect configuration-linked original drawings, supplier scopes, measured issues/returns, meters and integrity-test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_acceptance` | acceptance | Integrity testing and complete-configuration acceptance | foreground_record | module/platform serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; module count and individually measured dry masses; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect configuration-linked original drawings, supplier scopes, measured issues/returns, meters and integrity-test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_packing` | packing | Delivery protection and integral detached fittings | foreground_record | module/platform serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; module count and individually measured dry masses; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect configuration-linked original drawings, supplier scopes, measured issues/returns, meters and integrity-test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each hull/configuration order collect attributable net stock issues, independent modules, utilities, construction trial consumption, wastes and actual emissions; subtract recorded returns and inventory change and apply justified shared allocation, then divide by accepted configured unit count to obtain q_item and by the same controlled measured net M. Preserve measured complete-module masses and mass exchanges kg/kg and electricity MJ/kg. Compatible serial vessels with measured mass variation may use attributable totals divided by summed accepted net masses, retaining all serial records. Separate incompatible module count/layout, steel structure, fitted hardware, coating and trial scope. Unknown is a gap, never zero. No tonnage/capacity/rated-power or lifetime conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | Original current records must implement mass_record_provenance. Reconcile the measured module masses, exact module count/layout, measured fitted/detached connectors and all net-scope corrections. Retain original instrument/method/calibration and signed delivery mass balance. Uncertain contents or configuration change requires new measurement/reconciliation; missing actual records blocks complete quantitative data, never replaced by catalogue estimates. | originals/correction ledger; nma-lightship is a method example only |
| `quality_bom` | complete vessel | Reconcile actual shell/deck/partition drawings, module/connection scope, covers/seals and every integral conditional fitting/finish with delivered dry-net mass. Add all actual missing constituents and fabrication operations before completion; purchased finished modules and in-house constituents count once. Exclude external work equipment and site installation. | original drawings, weighing and supplier scope |
| `quality_balances` | flows and trials | Retain calibration, material issues/returns/reuse, actual formulation/density, yard-support trial consumed versus returned fuel and measured species/medium/outlets. Define QA limits from applicable actual records or verified comparable evidence; no invented yield, intensity range or universal commissioning consumption. | stock, meters, SDS, trial and transfer records |
| `quality_coverage` | dataset | Disclose actual geography/period/configurations, conditional absence, outsourcing, identity/quantity uncertainty, empirical range gaps, missing upstream and applicable acceptance regime. Historical manufacturer/authority examples do not prove present certificates, current legal completeness or the actual M of this platform. PCR checking validates the declared relationship, not a real platform weight record or scientific approval. | coverage/evidence limitations register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete configured non-propelled steel floating platform and positive actual net M from controlled records implementing mass_record_provenance. Exclude operational cargo/persons/fuel/fresh water/ballast and temporary loads, retain declared integral fitted components. Reject tonnage, deadweight, catalogue/full-load displacement or full-fuel mass substitution. Missing underlying method or balance requires review and blocks completed quantitative data. |  |
| `validate_identity` | all rows | Check each single physical/chemical exchange, public reference property/unit group, exact route/state and supplier scope. Module count cannot stand for net mass; received completed modules replace included stock and work. CuO is not Cu2O paint, and product process water is not effluent or environmental withdrawal. Keep unsupported UUIDs blank with exact row reasons, including the reference product, and append actual omitted exchanges before dataset completion. |  |
| `validate_measurement` | all rows | Verify every amount/collection/conversion against same configuration, actual period/site, accepted count and net M. Reconcile installed prefills, consumed yard-support trial fuel and supplier constituents without duplication; verify calibration, density/unit conversions and shared denominator. Unknown is never zero. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial species and actual environmental medium. These CO2/NO/NO2 identities are air-unspecified immediate releases; fossil CO2 requires fossil provenance. Total NOx without species split, N2O, nitrogen/nitrite, biogenic CO2, water/soil and long-term releases cannot substitute. Captured dust remains waste. |  |
| `validate_structure` | float modules and coupled layout | Reconcile actual module serials/count/layout, shell/deck/partition drawings, integrated connection slots, supplied plates/pins, inspection covers/seals and dry-net delivery scope. Trace actual weld and compartment-integrity method, calibrated test instruments, stated medium and attributable outlets/rework. Manufacturer load/float performance is not net M, a universal test pressure or proof of current product certification. Temporary tests and subsequent site deployment remain distinct. | `pontonmade-steel` |
| `validate_acceptance` | claimed flag/class acceptance | Trace actual vessel-specific surveys/certificates and applicable administration/class regime when claimed. Manufacturer examples do not certify this particular floating platform; no universal numerical standard/test/load is adopted. | `pontonmade-steel` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete non-propelled steel floating platform foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching module layout/structure/fittings/coating, controlled net-mass scope, construction-integrity test boundary, gate/site/period |
| excluded_use | Marine work/transport service or lifetime comparison, equal-mass load/flotation equivalence and other materials/platform purposes and unsupported complete cradle-to-gate claims |
| required_metadata | builder/model, serial and drawing revision; steel grade/thickness, shell/deck/partition form, watertight compartments and supplier module completeness; accepted single-module or explicitly counted coupled platform configuration; fixed coupling plates/pins, covers/seals and conditional fender/bollard/guardrail/anode; coating formulation and manufacturing site/period/gate; positive dry-net M in kg from current controlled acceptance records based on actual weight/lightweight inspection, traceable physical method/calibration and signed itemized configuration reconciliation; integral detached delivered fittings; excluded external work equipment, accommodation, persons, loose cargo, ballast/water/fuel, removable protection, temporary test contents and site civil/anchor work; attributable fabrication test and support-resource scope; actual acceptance regime and upstream linkage |
| required_quality_disclosure | Identity/quantity and mass-provenance gaps, uncertainty, conditional absences, full BOM, allocation, actual acceptance scope and unlinked upstream |
| update_trigger | Module layout/structure/fittings/coating, supplier modules, actual M evidence/corrections, construction test state/boundary, manufacturing/acceptance regime, site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pontonmade-steel` | literature | [Ponton Made: Steel 1.5-1.2-1.0](https://www.pontonmade.com/en/work-pontoons/steel-1-5-1-2-1-0/) | General and Coupling system paragraphs: welded/conserved seams, watertight compartments and steel connection plates/pins. Manufacturer design example only. No own-weight table, deck-load rating, certificate assertion or module count adopted as actual M, universal requirement or manufacturing factor. |
| `damen-modular` | literature | [Damen: Modular Pontoons](https://www.damen.com/vessels/pontoons-and-barges/modular-pontoons?view=models) | Fit for purpose and Versatile solution paragraphs describe modular work platforms and separately equipped designs. Basis for declaring module/platform and equipment boundaries; hydraulic spuds/cranes/accommodation are outside this structural scope. No dimensional, performance, transport or lifetime factor adopted. |
| `koole-cargo-counterexample` | literature | [Koole: K4512 & K4512-2](https://www.koole.eu/wp-content/uploads/2024/08/Technical-details-K4512-2.pdf) | PDF p.1 identifies non-propelled deck-cargo and MDO transport; p.2 fuel-oil-barge classification. Counterexample: commercial pontoon name alone does not establish this work-platform boundary. No construction recipe, deadweight, tank capacity or numerical value adopted. |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/printed pp.5–7 sections 3.2–3.4 ship condition, tank contents, water density and draught/freeboard observations. Historical Norwegian survey-method example only for a traceable inspection when applicable; current physical dry-net weight/inspection and configuration reconciliation remain required. No universal legal or numerical threshold adopted. |
