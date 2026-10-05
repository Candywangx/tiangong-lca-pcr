---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.recreational-motor-vessel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Welded-aluminium petrol-outboard recreational motor vessel manufacture

## 1. Scope and Applicability

This candidate PCR covers new complete welded-aluminium monohull recreational motor vessels with installed petrol four-stroke outboard propulsion and declared rigging/outfitting. It narrows CPC49490. Exclude inflatable craft, sailing/rowing/canoes, personal watercraft, commercial/passenger/professional vessels, bare hulls, inboard/sterndrive/diesel/electric configurations, other hull materials, separate transport trailers and repairs/conversions/services. One accepted finished unit means one complete boat; Chinese 设备 carries the same measurement meaning.

Collect actual stock/hull receipt, fabrication/joining, conditional finishing, outboard rigging/outfitting, construction commissioning and accepted builder-gate delivery. Later recreational trips, owner fuel and accessories, maintenance, end of life and new-model research tests are excluded. No brochure model weight, speed, power, development-test duration, lifetime or fuel factor is adopted. Manufacturer sources establish possible architecture/configuration only; actual factory routes and upstream supplier links are required before a complete cradle-to-gate claim. Scientific review remains pending. [Sources: buster-welding-2022; buster-xl-config; anytec-owner]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.recreational-motor-vessel |
| classification_refs | CPC3.0 49490; narrower context only, no accepted mapping |
| covered_products | Complete welded-aluminium monohull recreational boats with petrol four-stroke outboards |
| excluded_products | Other hull/propulsion categories, sail/inflatables/canoes/personal watercraft, professional/passenger vessels, bare hulls, trailers and services |
| representative_product | One accepted hull/engine serial-linked complete boat in its documented net delivery configuration |
| production_route | Conditional aluminium stock forming; hull welding/completion; conditional surface finishing; outboard/steering rigging; deck/electrical/safety outfitting; construction acceptance |
| market_state | New complete accepted rigged boat; retained integral working fluids included in M, trailer/operational consumables/removable protection excluded |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the declared complete configured recreational motor vessel |
| How much | 1 kg accepted net vessel output, with per-vessel exchange records divided by actual M |
| How well | Meet actual hull/weld tightness, outboard mounting/steering/fuel/electrical and fitted safety/functional release criteria under documented configuration-specific conditions. Equal mass does not imply equal passenger capacity, boat handling or travel service. No manufacturer marketing specification is imposed universally. |
| How long or cycle | One manufacture and construction-acceptance cycle; no assumed operating lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete welded-aluminium petrol-outboard recreational motor vessel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model and hull serial; drawing/BOM revisions; welded aluminium monohull, alloy/temper and supplied hull completeness; installed petrol four-stroke outboard number/serial, mounts/propeller, steering and rigging; actual deck/seat/glass/foam/electrical/safety configuration, coatings and retained working fluids; actual assembly/acceptance criteria and corrected net delivery state; positive M kg from controlled acceptance records with current actual physical weight/lightship inspection, calibrated traceable inputs and signed itemized mass reconciliation; exclude persons, fuel/fresh water/ballast/test loads, trailer, removable protection and loose spares; actual factory/site/period, supplier boundaries and gate |

M is the controlled actual net mass of this complete accepted configuration, including installed hull, outboard drive and boat outfitting, actual retained lubricating/hydraulic working fluids and integral delivered parts. Exclude temporary test load, persons, consumable fuel/fresh water/ballast, temporary trial weights and transport trailer, spares, protection and external support craft. Do not equate survey displacement or catalogue tonnage with net M; retain current original physical lightship/weight inspection and itemized measured corrections to the exact net delivery scope below. No whole-ship platform scale is assumed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | controlled acceptance mass records | Mass | kg | Controlled acceptance mass is an acquisition interface, not proof of measurement. Require current original actual lightship/weight inspection, serial/configuration and delivery-state records, a traceable measured/checking method and itemized mass balance. Reconcile additions/deductions and installed service fluids to this PCR net scope. Where physically feasible, retain calibrated load-cell/weighing records and measured fixture/support tare for the actual complete boat or reconciled components; no whole-ship platform scale is prescribed. For afloat-survey-derived records retain observed draught/freeboard, actual water density, verified hull hydrostatics, instrument calibration and measured temporary/tank contents; no uncorrected displacement or design estimate replaces net M. The historical Norwegian procedure is a method example, not a current universal legal threshold. [Source: nma-lightship] |
| `installed_scope` | outboard; outfitting | Mass | kg | Preserve independently measured installed assembly masses and supplier inclusions for net M; a complete outboard includes its powerhead/gear/propeller only as supplied. Do not add included constituents or supplier-prefilled fluids again. Catalogue dry hull and nominal engine mass cannot replace accepted complete configuration mass. The historical Anytec manual distinguishes empty boat without engine, empty boat with engine, trailering with fuel/liquids, and maximum loaded conditions: none is automatically this PCR net M. |
| `energy_conversion` | electricity | Net calorific value | MJ | Actual measured kWh converts by verified unit identity 3.6 MJ/kWh; retain intake voltage and site route. Engine/motor nameplate kW is not measured energy. |
| `formulation_mass` | liquid formulations | Mass | kg | Weigh the actual coating base, hardener, fuel or service-fluid formulation separately. Volume-to-mass requires measured density at declared composition/state/temperature; no tank capacity or brochure coating coverage factor. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified stock/fabricated hulls and machinery/outfitting modules, with actual supplier inclusions |
| starting_condition_role | Foreground receipt-to-accepted-vessel delivery manufacture |
| product_classification_scope | Welded-aluminium petrol-outboard recreational motor vessel with installed rigging/outfitting |
| recursive_input_rule | No complete recreational motor vessel recursively generated as its own input; bought-in finished hulls/modules bypass included operations |
| upstream_dataset_requirement | Match actual grades/formulations/module completeness/outboard drive, period/geography and property; disclose missing supplier production |
| disclosure | builder/model and hull serial; drawing/BOM revisions; welded aluminium monohull, alloy/temper and supplied hull completeness; installed petrol four-stroke outboard number/serial, mounts/propeller, steering and rigging; actual deck/seat/glass/foam/electrical/safety configuration, coatings and retained working fluids; actual assembly/acceptance criteria and corrected net delivery state; positive M kg from controlled acceptance records with current actual physical weight/lightship inspection, calibrated traceable inputs and signed itemized mass reconciliation; exclude persons, fuel/fresh water/ballast/test loads, trailer, removable protection and loose spares; actual factory/site/period, supplier boundaries and gate |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | Include actual manufacture, attributable rework, launching and construction commissioning to declared acceptance gate. Allocate independently measured production-support trial resources; exclude recreational boating/transport service and research/operational maintenance. Add every actual tug/dock/crane service or fuel as a separate declared exchange when included, with service boundary/duration and supplier scope. No lifetime voyage burden is inferred. |  |
| `boundary_modules` | purchased components | Count finished fabricated hulls, outboard packages and fitted control/safety modules once with constituents and prefills. Replace constituent cards for included supply. Actual in-house manufacture needs measured component inventories. Complete the full actual BOM, all conditional chemistries and demonstrated species before dataset release; the candidate cards are not an exhaustive vessel bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Aluminium hull stock cutting/forming | conditional | Stock cutting/forming occurs inside the reporting builder boundary. | foreground | one accepted configured recreational motor vessel, normalized with M |
| `hull_join` | Welded hull assembly and completion | required | Each complete welded-aluminium configured boat. | foreground | one accepted configured recreational motor vessel, normalized with M |
| `surface_finish` | Conditional hull preparation and coating | conditional | Actual preparation/coating is performed in the reporting foreground. | foreground | one accepted configured recreational motor vessel, normalized with M |
| `rigging` | Petrol outboard and steering rigging | required | Each accepted complete petrol-outboard configuration. | foreground | one accepted configured recreational motor vessel, normalized with M |
| `outfit` | Deck, electrical and safety outfitting | required | Each complete declared recreation configuration. | foreground | one accepted configured recreational motor vessel, normalized with M |
| `acceptance` | Construction commissioning and complete-boat acceptance | required | Each boat released at the declared builder gate. | foreground | one accepted configured recreational motor vessel, normalized with M |
| `packing` | Conditional delivery protection | conditional | Actual removable protection supplied at delivery. | foreground | one accepted configured recreational motor vessel, normalized with M |

Actual stock forming feeds hull joining and conditional finishing, machinery/outfitting and launch/commissioning/acceptance, then conditional delivery protection. Stages may overlap; assign resources once to actual operations and supplier scope. Every card is conditional on exact composition/state/configuration, even in required stages. Add each actual omitted component/fuel/chemical and demonstrated waste/emission independently. No universal welding/coating recipe or obligatory emission is claimed.

### Process: Aluminium hull stock cutting/forming (`stock_form`)

Cut and form actual certified alloy sheet/plate and structural profiles to serial-linked hull drawings. Record thickness, alloy/temper and actual cutting/forming technology, issues/returns and offcuts. A purchased fabricated hull replaces included stock and fabrication, with its completed operations disclosed. In-house extrusion/casting is not presumed.

#### Inputs

##### Product flows

###### aluminium sheet (`hull_sheet`)

Only actual aluminium-alloy rolled plate/sheet thicker than0.2mm within the public classification; supplier alloy/temper, thickness and boat drawing suitability independently verified. Identity does not certify marine grade. Exclude foil or unrolled ingot.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `buster-welding-2022`

###### Aluminium extrusion profile (`hull_profile`)

Only actual extruded aluminium structural profile matching this public identity; retain supplier alloy/temper, cross section and independently established boat-design suitability. No alloy/strength/marine certification is granted by this identity.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `buster-welding-2022`

###### Alternating current (`electricity_stock_form`)

Only actual China user-side grid-average 1–35kV AC supply matching public identity, metered for attributable operations. Other site/voltage/mix/self-generation requires separate compatible identity. No EU factory is mapped to CN supply; internal distribution is not a second input, rated kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `buster-welding-2022`

#### Outputs

##### Waste flows

###### Segregated untreated aluminium-alloy cutting offcuts (`al_offcut`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Segregated untreated aluminium-alloy cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `buster-welding-2022`

### Process: Welded hull assembly and completion (`hull_join`)

Assemble hull, transom, frames/deck and declared structural connections using the actual welding procedure. Record filler alloy, shielding gas, rework, inspection and leak checks. The Buster source documents MIG/manual and robotic tools, not mandatory robots, a filler recipe or a universal joining schedule. Bought finished hulls bypass performed welding but require interface/completeness checks. No steel joining gas is substituted for aluminium welding.

#### Inputs

##### Product flows

###### Complete fabricated welded-aluminium bare recreation hull (`fabricated_hull`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Complete fabricated welded-aluminium bare recreation hull
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `buster-welding-2022`

###### Solid aluminium-magnesium welding filler wire (`al_wire`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Solid aluminium-magnesium welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `buster-welding-2022`

###### Gaseous argon welding shielding supply (`argon`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Gaseous argon welding shielding supply
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `buster-welding-2022`

###### Alternating current (`electricity_hull_join`)

Only actual China user-side grid-average 1–35kV AC supply matching public identity, metered for attributable operations. Other site/voltage/mix/self-generation requires separate compatible identity. No EU factory is mapped to CN supply; internal distribution is not a second input, rated kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `buster-welding-2022`

#### Outputs

##### Waste flows

###### Captured aluminium-oxide-rich welding filter dust (`weld_dust`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Captured aluminium-oxide-rich welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `buster-welding-2022`

### Process: Conditional hull preparation and coating (`surface_finish`)

Record actual cleaning, pretreatment, primer/paint base and hardener separately, and antifouling only when fitted. Bare/treated/painted aluminium and optional bottom coatings are different routes, not a universal recipe. Proprietary Anytec M400 marketing does not disclose chemical identity or dosage; an actual SDS is required for any such treatment. Supplier-finished hull layers bypass completed treatment. Add each actual solvent species, formulation and demonstrated emission individually.

#### Inputs

##### Product flows

###### Process Water (`clean_water`)

Only actual supplied treated industrial process water; weigh makeup, exclude internal recirculation and distinguish environment-resource withdrawal and cleaning effluent.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `buster-xl-config`

###### Formulated epoxy hull-primer base component (`epoxy_base`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Formulated epoxy hull-primer base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `buster-xl-config`

###### Polyamine hull-epoxy primer hardener formulation (`epoxy_hardener`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Polyamine hull-epoxy primer hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `buster-xl-config`

###### Formulated International Trilux33 aluminium-hull antifouling paint (`cu2o_paint`)

Only when this exact configured paint is actually supplied/applied, with current supplier SDS, formulation and independently established aluminium compatibility. Historical Anytec page66 identifies this optional trade product and cautions about copper products on aluminium; no biocide chemistry or universal recipe is inferred. Other actual formulations need their own atomic row.

- Selected flow: Formulated International Trilux33 aluminium-hull antifouling paint
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `buster-xl-config`

###### Alternating current (`electricity_surface_finish`)

Only actual China user-side grid-average 1–35kV AC supply matching public identity, metered for attributable operations. Other site/voltage/mix/self-generation requires separate compatible identity. No EU factory is mapped to CN supply; internal distribution is not a second input, rated kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `buster-xl-config`

#### Outputs

##### Waste flows

###### Aqueous aluminium-hull cleaning effluent transferred for treatment (`clean_effluent`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Aqueous aluminium-hull cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `buster-xl-config`

### Process: Petrol outboard and steering rigging (`rigging`)

Install the actual complete petrol outboard, transom mounts, steering, throttle/shift, fuel system and electrical interfaces. Bought complete outboard scope may include powerhead, gearbox, propeller and service fluids: count included constituents once, not as separate manufacture. Propeller fit and number of outboards follow supplier/configuration records. Bilge/fuel/electrical modules are independent where not included. Inboard, sterndrive, diesel and electric variants are excluded.

#### Inputs

##### Product flows

###### Complete petrol four-stroke marine outboard motor (`outboard`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Complete petrol four-stroke marine outboard motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rigging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rigging`
- Sources: `anytec-owner`

###### Complete hydraulic outboard steering system (`steering`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Complete hydraulic outboard steering system
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rigging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rigging`
- Sources: `anytec-owner`

###### Finished aluminium petrol boat fuel-tank assembly (`fuel_tank`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Finished aluminium petrol boat fuel-tank assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rigging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rigging`
- Sources: `anytec-owner`

###### Lubricating oil (`lube_oil`)

Only actual petroleum-fraction lubricating-oil formulation matching public scope and independently recorded four-stroke outboard supplier grade/additives. Weigh net first-fill and installed retention, omit inside prefilled bought engine. Descriptive calorific value is not a combustion/intensity factor; exclude synthetic PAO and different actual formulations.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rigging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rigging`
- Sources: `anytec-owner`

###### Alternating current (`electricity_rigging`)

Only actual China user-side grid-average 1–35kV AC supply matching public identity, metered for attributable operations. Other site/voltage/mix/self-generation requires separate compatible identity. No EU factory is mapped to CN supply; internal distribution is not a second input, rated kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rigging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rigging`
- Sources: `anytec-owner`

### Process: Deck, electrical and safety outfitting (`outfit`)

Install actual decks/console/windscreen/seats, battery/cabling, bilge pump and fitted safety items. Buoyancy foam, railings, fire extinguisher, lights and optional electronics are recorded only in the actual BOM. Foam chemistry, seat covering and glass type are supplier records; laminated and tempered panes are different, not interchangeable. Trailers and separately sold accessories remain outside M. Complete assemblies replace included constituents once.

#### Inputs

##### Product flows

###### Filled lead-acid boat starter battery (`battery`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Filled lead-acid boat starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `buster-xl-config`

###### Insulated copper marine low-voltage electrical cable (`cable`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Insulated copper marine low-voltage electrical cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `buster-xl-config`

###### Tempered safety-glass boat windscreen pane (`windshield`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Tempered safety-glass boat windscreen pane
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `buster-xl-config`

###### Complete upholstered marine passenger seat (`seat`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Complete upholstered marine passenger seat
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `buster-xl-config`

###### Closed-cell polyethylene boat buoyancy-foam block (`buoyancy`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Closed-cell polyethylene boat buoyancy-foam block
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `buster-xl-config`

###### Complete centrifugal boat bilge-water pump (`bilge_pump`)

Only this exact actual independent exchange; collect supplier specification/composition/state, weighed issues/returns or recipient outlet records and supplier completeness. Replace included contents of complete supplied assemblies once.

- Selected flow: Complete centrifugal boat bilge-water pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `buster-xl-config`

###### Alternating current (`electricity_outfit`)

Only actual China user-side grid-average 1–35kV AC supply matching public identity, metered for attributable operations. Other site/voltage/mix/self-generation requires separate compatible identity. No EU factory is mapped to CN supply; internal distribution is not a second input, rated kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `buster-xl-config`

### Process: Construction commissioning and complete-boat acceptance (`acceptance`)

Record actual dimensional/hull-tightness/rigging/electrical/safety and attributable launch/water/engine trials, rework and release. New-model development testing from Buster is research evidence, not a mandatory factory trial duration for every boat. Retain actual load/persons/water state, fuel issue/return/consumption/retention and calibrated instruments. Operational trips, recreational travel, maintenance and life cycle fuel are excluded. No universal test distance, speed, emission factor or fuel use is assumed.

#### Inputs

##### Product flows

###### Fossil petrol gasoline supplied for construction commissioning (`test_petrol`)

Only actual consumed attributable construction trial petrol. Record supplied composition/fossil versus biogenic fraction, calibrated net issue/return and consumed versus owner-retained fuel; no ethanol proportion, density or heating value assumed. Owner fuel is excluded from M and is not automatically factory consumption.

- Selected flow: Fossil petrol gasoline supplied for construction commissioning
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### Alternating current (`electricity_acceptance`)

Only actual China user-side grid-average 1–35kV AC supply matching public identity, metered for attributable operations. Other site/voltage/mix/self-generation requires separate compatible identity. No EU factory is mapped to CN supply; internal distribution is not a second input, rated kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

#### Outputs

##### Product flows

###### Accepted complete welded-aluminium petrol-outboard recreational motor vessel (`finished_machine`)

One kg accepted complete net boat including installed engine/propeller/rigging/outfitting and retained working fluids; exclude fuel, persons, fresh water/ballast/test loads, trailer, removable protection and loose spares.

- Selected flow: Accepted complete welded-aluminium petrol-outboard recreational motor vessel
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `nma-lightship`

#### Outputs

##### Waste flows

###### Used lubricating oil (`spent_oil`)

Only actual used/contaminated petroleum engine lubricating oil generated at construction commissioning and transferred as untreated waste with recipient and measured net mass. Public flow covers petroleum or synthetic used oil; this row is restricted to the actual petroleum fraction. Do not infer regeneration, combustion or avoided-production credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only attributable independently measured fossil CO2 trial exhaust to immediate air-unspecified; require demonstrated fossil fraction, not an inferred gasoline blend factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### nitrogen monoxide (`nitric_oxide`)

Only independently measured trial NO to immediate air-unspecified. Total NOx without species split does not establish this amount. No compulsory emission or default factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only independently measured trial NO2 to immediate air-unspecified. Total NOx without species split does not establish this amount. No compulsory emission or default factor.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

### Process: Conditional delivery protection (`packing`)

Record removable protective film separately, excluding it from M. Reconcile delivery-detached integral boat parts to accepted complete configuration; exclude temporary fixtures, transport trailer, separately sold spares and loose owner gear.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only actual removable non-self-adhesive non-cellular unreinforced/unlaminated PE-LD protection foil; weigh net issues/returns and exclude from M. Other laminates or packages need distinct exact rows.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`
- Sources:

###### Alternating current (`electricity_packing`)

Only actual China user-side grid-average 1–35kV AC supply matching public identity, metered for attributable operations. Other site/voltage/mix/self-generation requires separate compatible identity. No EU factory is mapped to CN supply; internal distribution is not a second input, rated kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared shipyard resources | Separate hull orders/configurations and directly attribute measured stock issues/returns, machinery receipts, work hours, meters, trials and rework first. Inseparable shared resources use a demonstrated measured causal driver such as operation time/load or coating area/layer requirement: share = order driver / sum of drivers for all covered orders. Retain period, denominator and causality; tonnage, nominal displacement or equal vessel count is not an automatic causal driver. | `ghg-product-allocation-2011` |
| `allocation_recovery` | internal reuse and waste | Internal reused stock/water/test fuel is a transfer, not repeated fresh input or an automatic credit. Exported waste retains its measured quantity and recipient with no assumed avoided-production benefit. Separate saleable co-products before a documented reviewed residual allocation. Reconcile rejected/reworked construction and work in progress to accepted output during the reporting period. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete-vessel net mass | controlled_acceptance_record | model; configuration; serial number; accepted net mass M; original acceptance/weight-report id/date; actual lightship/weight-inspection method; instrument/calibration; delivery state; installed service fluids; itemized added/deducted masses; persons/test loads/fuel/fresh water/ballast/testing-load exclusions; detached integral parts; verifier; mass balance | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted vessel | actual construction/acceptance period of that vessel | declared shipyard acceptance gate | accepted net mass per unit | original actual inspection, configuration correction, mass-balance and verification records |
| `cp_stock_form` | stock_form | Aluminium hull stock cutting/forming | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; outboard serial and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect drawing revisions and material certificates, weighed issues/returns/offcuts, cutting/forming station meters and job records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_hull_join` | hull_join | Welded hull assembly and completion | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; outboard serial and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain hull serial, actual weld procedures/inspection, filler/gas net issues, completed bought-hull scope and measured station utilities. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_surface_finish` | surface_finish | Conditional hull preparation and coating | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; outboard serial and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect layer/SDS and supplier-inclusion records, weighed base/hardener/cleaner issues/returns, process water, application area and segregated waste or measured species outlets. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_rigging` | rigging | Petrol outboard and steering rigging | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; outboard serial and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain boat/engine serials, engine/fuel specification, supplier inclusions, independently measured installed module mass, mounting/steering connections, propeller and first-fill balances. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_outfit` | outfit | Deck, electrical and safety outfitting | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; outboard serial and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain actual outfitting BOM and supplier scope, fitted net masses, electrical/floatation and functional acceptance records and conditional equipment absences. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_acceptance` | acceptance | Construction commissioning and complete-boat acceptance | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; outboard serial and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain original actual complete-configuration weight/acceptance records, measurement method/calibration and tare/corrections, trial protocol/conditions and measured fuel/species/waste records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_packing` | packing | Conditional delivery protection | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; outboard serial and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Weigh each actual protection issue/return and reconcile detached integral delivered items. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each hull/configuration order collect attributable net stock issues, independent modules, utilities, construction trial consumption, wastes and actual emissions; subtract recorded returns and inventory change and apply justified shared allocation, then divide by accepted vessel count to obtain q_item and by the same controlled measured net M. Preserve physical mass exchanges kg/kg and electricity MJ/kg; independently measured outboard mass establishes configured completeness, never a fixed catalogue engine mass. Compatible serial vessels with measured mass variation may use attributable totals divided by summed accepted net masses, retaining all serial records. Separate incompatible outboard drive, hull, outfitting, coating and trial scope. Unknown is a gap, never zero. No tonnage/capacity/rated-power or lifetime conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | The original current vessel acceptance mass record must implement mass_record_provenance. Retain actual physical lightship/weight inspection, observable method inputs/calibration and a signed item-level reconciliation to delivered net configuration; reconcile independently weighed installed modules and fluids. A catalogue or unexplained displacement/tonnage record is insufficient. Missing method, uncertain correction or configuration change prevents a complete quantitative dataset; resolve by new measurement/reconciliation, never an assumed weight. | originals/correction ledger; nma-lightship is a method example only |
| `quality_bom` | complete vessel | Reconcile drawings/BOM and installed hull/machinery/outboard drive, piping/electrical, control/safety/navigation and actual service-fluid masses, supplier scope and detached delivered parts. Add all actual missing components before completion; received complete modules count once. | original drawings, weighing and supplier scope |
| `quality_balances` | flows and trials | Retain calibration, material issues/returns/reuse, actual formulation/density, commissioning consumed versus retained fuel and measured species/medium/outlets. Define QA limits from applicable actual records or verified comparable evidence; no invented yield, intensity range or universal commissioning consumption. | stock, meters, SDS, trial and transfer records |
| `quality_boat` | rigging; outfit; acceptance | Reconcile hull-alloy/temper, actual joints and supplier hull scope; installed outboard/propeller/steering/fuel/electrical/safety components and actual working-fluid masses. Record actual construction trial loads/persons/tanks, speed/load/duration only as measured, calibrated station and engine-test energy/fuel, net returns/recovery/wastes and independently measured exhaust species. Development/model tests are not a mandatory per-boat manufacturing input. Missing net-configuration weight method or correction balance blocks complete quantitative data. | actual drawings, supplier scope, weighing and calibrated trial records |
| `quality_coverage` | dataset | Disclose actual geography/period/configurations, conditional absence, outsourcing, identity/quantity uncertainty, empirical range gaps, missing upstream and applicable acceptance regime. Historical manufacturer/authority examples do not prove present certificates, current legal completeness or the actual M of this vessel. PCR checking validates the declared relationship, not a real ship record or scientific approval. | coverage/evidence limitations register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete configured welded-aluminium petrol-outboard recreational motor vessel and positive actual net M from controlled records implementing mass_record_provenance. Exclude operational contents/persons/fuel/fresh water/ballast and temporary loads, retain declared installed service fluids. Reject tonnage, deadweight, catalogue/full-load displacement or full-fuel mass substitution. Missing underlying method or balance requires review and blocks completed quantitative data. |  |
| `validate_identity` | all rows | Check each atomic physical/chemical exchange, public reference property/unit group, route/state and supplier scope. Engine item count is not mass; a complete outboard includes its engine and fitted constituents once; CuO/Cu2O chemical powder is not formulated aluminium-compatible antifouling paint; water supply is not effluent or resource withdrawal. Keep unsupported identity blank and add actual species/components before completion. |  |
| `validate_measurement` | all rows | Verify every amount/collection/conversion against same configuration, actual period/site, accepted count and net M. Reconcile installed prefills, consumed trial fuel and supplier constituents without duplication; verify calibration, density/unit conversions and shared denominator. Unknown is never zero. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial species and actual environmental medium. These CO2/NO/NO2 identities are air-unspecified immediate releases; fossil CO2 requires fossil provenance. Total NOx without species split, N2O, nitrogen/nitrite, biogenic CO2, water/soil and long-term releases cannot substitute. Captured dust remains waste. |  |
| `validate_acceptance` | claimed flag/class acceptance | Trace actual vessel-specific surveys/certificates and applicable administration/class regime when claimed. Generic manufacturer certification does not certify this recreational motor vessel; no universal numerical standard/test/load is adopted. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete welded-aluminium petrol-outboard recreational motor vessel foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching hull/outboard drive/outfitting/coating, controlled net-mass scope, trial boundary, gate/site/period |
| excluded_use | Recreational boating/transport service or lifetime comparison, equal-mass capacity equivalence, other hull/propulsion categories and unsupported complete cradle-to-gate claims |
| required_metadata | builder/model and hull serial; drawing/BOM revisions; welded aluminium monohull, alloy/temper and supplied hull completeness; installed petrol four-stroke outboard number/serial, mounts/propeller, steering and rigging; actual deck/seat/glass/foam/electrical/safety configuration, coatings and retained working fluids; actual assembly/acceptance criteria and corrected net delivery state; positive M kg from controlled acceptance records with current actual physical weight/lightship inspection, calibrated traceable inputs and signed itemized mass reconciliation; exclude persons, fuel/fresh water/ballast/test loads, trailer, removable protection and loose spares; actual factory/site/period, supplier boundaries and gate |
| required_quality_disclosure | Identity/quantity and mass-provenance gaps, uncertainty, conditional absences, full BOM, allocation, actual acceptance scope and unlinked upstream |
| update_trigger | Hull/outboard drive/outfitting/coating, supplier modules, actual M evidence/corrections, trial state/boundary, manufacturing/acceptance regime, site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `buster-welding-2022` | literature | [Buster: Designers prioritise safety and performance,23March2022](https://www.buster.fi/en/news/buster-designers-prioritise-safety-and-performance) | Design/manufacturing tools paragraphs: aluminium-boat MIG/manual/robotic example. New-model development-test section is counterevidence to assuming mandatory per-boat test hours; no duration, mass or production intensity reused. Historical factory example, no current robot or welding recipe mandate. |
| `buster-xl-config` | literature | [Buster XL configured product](https://www.buster.fi/en/models/buster-xl) | Engine, standard accessories, factory options and hull-surface-treatment lists: complete outboard package, hydraulic steering, tempered glass, aluminium floor and optional primer/antifouling. Undated model snapshot; no catalogue weight, current certification, power, speed or recipe adopted. Supplier/configuration records govern actual supply. |
| `anytec-owner` | literature | [Anytec A21 Owner Manual,issued15February2019](https://www.anytec.se/s/a21_owner_s_manual_english.pdf) | PDF11/33/35/51/53/73–74,printed3/25/27/43/45/65–66,sections1.1,3.1,3.3,4.1–4.2 and6.2.1–6.2.2: independent aluminium/outboard configuration, distinct model mass states with and without engine and operational contents, fuel/steering modules and optional/proprietary coating context. Historical model manual; operation/maintenance instructions, model weights, power/fuel thresholds and present compliance are not adopted. No proprietary M400 composition inferred. |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E,Rev07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/printed5–7 sections3.1–3.4: physical survey identification, state, measured corrections/tanks/water density/draught. Historical Norwegian afloat-method example only; current actual calibrated weight/lightship inspection and net delivery correction record required. No global legal/tank/trim threshold or actual boat M supplied. |
| `ghg-product-allocation-2011` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2: historical allocation hierarchy only, actual measured causal driver required; no equal-boat-count or nominal mass allocation factor. |
