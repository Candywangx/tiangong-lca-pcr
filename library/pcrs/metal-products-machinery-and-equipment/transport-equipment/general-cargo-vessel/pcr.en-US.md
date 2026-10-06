---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.general-cargo-vessel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Complete steel-hulled diesel general cargo vessel manufacturing

## 1. Scope and Applicability

Manufacture of complete new steel-hulled dry general cargo vessels with mechanical diesel propulsion and a declared fixed-pitch propeller: hull-section fabrication and erection, actual surface finishing, purchased propulsion/piping integration, cargo-hold closures and ship outfit integration, launching, harbour/sea acceptance trials and net-mass acceptance. Select one actual hull number, released design and delivery configuration. This is a narrower methodology than CPC49314.

Exclude tankers, container-only ships, ro-ro/passenger ships, self-discharging ships, unpowered barges, fishing/work/naval vessels, LNG/hybrid/electric propulsion, separately sold hulls/parts, repair and remanufacture. Cargo/passengers, commercial voyages, tonne-km, use-stage bunkering, maintenance, demolition and port service infrastructure are outside manufacture. Actual construction transfer/tow and acceptance trials are manufacturing support and require explicitly bounded measured modules; no service life or cargo-performance equivalence is assumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.general-cargo-vessel |
| classification_refs | CPC:3.0:49314; narrower |
| covered_products | Manufacture of complete new steel-hulled dry general cargo vessels with mechanical diesel propulsion and a declared fixed-pitch propeller: hull-section fabrication and erection, actual surface finishing, purchased propulsion/piping integration, cargo-hold closures and ship outfit integration, launching, harbour/sea acceptance trials and net-mass acceptance. Select one actual hull number, released design and delivery configuration. This is a narrower methodology than CPC49314. |
| excluded_products | Exclude tankers, container-only ships, ro-ro/passenger ships, self-discharging ships, unpowered barges, fishing/work/naval vessels, LNG/hybrid/electric propulsion, separately sold hulls/parts, repair and remanufacture. Cargo/passengers, commercial voyages, tonne-km, use-stage bunkering, maintenance, demolition and port service infrastructure are outside manufacture. Actual construction transfer/tow and acceptance trials are manufacturing support and require explicitly bounded measured modules; no service life or cargo-performance equivalence is assumed. |
| representative_product | One new accepted empty dry general cargo ship with exact hull, mechanical marine diesel/fixed-pitch propulsion, cargo closures and fitted outfit; no universal size, deadweight, power or engine count. |
| production_route | Hull-block manufacture/erection; actual preparation/coating; propulsion/system and outfit integration; launch/transfer; acceptance trials and corrected net-mass release. |
| market_state | Complete accepted empty vessel, declared retained technical fluids and fitted equipment. Cargo, persons, fuel bunkers, ballast/consumable stores, temporary test gear and detached spares excluded from net M. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of one exactly configured complete dry general cargo vessel. |
| How much | 1 kg accepted net vessel manufacturing output, obtained from actual M kg per accepted complete unit. |
| How well | Released design and current vessel-specific acceptance/inspection plan, declared class/flag evidence actually held; manufacturing does not establish cargo-service equivalence. |
| How long or cycle | One manufacture/acceptance cycle, no assumed service duration or commercial voyage. |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other vessels for the transport of goods and other vessels for the transport of both persons and goods `8a495278-8b08-411f-942e-0c01d3e678ac` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | hull number/model; approved released drawings and revision; hull plate/section grades and certificates, thickness and make-or-buy; hold/tween-deck/hatch design and fitted cargo gear; marine engine supplier/model/count and independent measured mass, gearbox/shaft/propeller scope; generator/pump/pipe/valve supplier containment; electrical voltage/cable and radar configuration; safety, accommodation and insulation fit list; actual coating formulation/route; yard/sites, intersite tow, period and accepted count; current vessel-specific lightweight survey and hydrostatic/reference-position evidence; controlled acceptance net M and corrections; empty cargo/tank delivery state; retained technical oil/coolant versus excluded bunkers/ballast/stores; supplier prefill scope; survey/test instruments and uncertainty; upstream utilities/transport/treatment coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_units | hull_power; finish_power; machinery_power; outfit_power; trial_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Actual below1kV grid-user electricity measured as energy;1kWh =3.6MJ. No mass conversion or assumed heat value; different voltage/provider supply separately matched. |
| engine_count | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Actual supplied assembled marine engine count is q_item; preserve items numerator divided by M. Obtain separate traceable actual engine mass in kg for installed mass reconciliation; do not relabel public count property Mass or infer engine weight from count/power. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier ship plates/profiles and released bought-in marine propulsion/outfit received at declared yards. Rolling, engine/propeller manufacture and utilities are upstream unless explicit measured site modules; declare supplier cut/form/coating state. |
| starting_condition_role | foreground_manufacturing_module |
| product_classification_scope | Manufacture of complete new steel-hulled dry general cargo vessels with mechanical diesel propulsion and a declared fixed-pitch propeller: hull-section fabrication and erection, actual surface finishing, purchased propulsion/piping integration, cargo-hold closures and ship outfit integration, launching, harbour/sea acceptance trials and net-mass acceptance. Select one actual hull number, released design and delivery configuration. This is a narrower methodology than CPC49314. |
| recursive_input_rule | Same-category purchased complete ship cannot replace a hull-block input or generate recursive full-ship manufacture. Purchased blocks/equipment replace contained site material/work. Internal block/system transfers counted once; receipt and supplier-boundary scope govern. |
| upstream_dataset_requirement | Expanded assessment requires compatible actual steel, chemicals, propulsion/outfit, utility, outsourced finish, inbound/interyard transport/tow and waste treatment datasets with provider/version/coverage; this foreground alone is not complete cradle-to-gate. |
| disclosure | hull number/model; approved released drawings and revision; hull plate/section grades and certificates, thickness and make-or-buy; hold/tween-deck/hatch design and fitted cargo gear; marine engine supplier/model/count and independent measured mass, gearbox/shaft/propeller scope; generator/pump/pipe/valve supplier containment; electrical voltage/cable and radar configuration; safety, accommodation and insulation fit list; actual coating formulation/route; yard/sites, intersite tow, period and accepted count; current vessel-specific lightweight survey and hydrostatic/reference-position evidence; controlled acceptance net M and corrections; empty cargo/tank delivery state; retained technical oil/coolant versus excluded bunkers/ballast/stores; supplier prefill scope; survey/test instruments and uncertainty; upstream utilities/transport/treatment coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_configuration | finished_machine | Restrict the complete ship to the declared steel-hull dry general cargo, mechanical marine diesel and fixed-pitch configuration. Damen case architecture supports cargo-hold and propulsion specificity, not a universal size, power, cargo rating or efficiency factor. Actual current released drawings govern; optional hybrid/battery/biodiesel routes are excluded here. | damen-cf5000 |
| boundary_manufacture | manufacturing | Actual fabrication, finishing, outfitting, launch support and acceptance trials/rework are included where performed. Process sequence is site-specific: supplier-cut stock, outsourced blocks/finish and pre/post-launch fitting must be declared. Each alternative operation needs its own physical exchanges, not a placeholder collection. | bodewes-build |
| boundary_trials | trials | Include actual trial fuel and measured emissions only within declared trial start/end/loads and manufacturing transfer/tow support. Independent contracted tug service has measured trip/time, endpoints, actual provider and fuel/utility coverage; do not duplicate its fuel in vessel trials. No commercial service inventory or assumed full-load tanks. | bodewes-build |
| boundary_water | sea_resource | Direct seawater resource intake is distinct from purchased municipal water. For actual cooling/ballast trials, reconcile measured withdrawals, retention and returns at recorded salinity/temperature; specify actual return medium/composition and thermal state in separate exchanges. Product-type seawater candidates do not establish an elementary resource. Oily bilge treatment and its evidenced final discharges are separate. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hull | Hull-section fabrication and erection | required | Receive actual shipbuilding plates/profiles; document ready-to-mount supplier scope versus site nesting/cutting/forming. Weld panels/blocks, erect hull and superstructure to released drawings. Actual bought-in blocks replace contained site stocks/work, not another complete vessel reference. | foreground | internal transfer; accepted complete vessel reference |
| finish | Surface preparation and coating | conditional | Include actual site/outsourced preparation and individual supplied coats; shot/epoxy/antifouling cards are conditional examples, not mandatory universal recipes. Prefinished blocks replace contained work; finishing may occur before/after erection or launching. | foreground | internal transfer; accepted complete vessel reference |
| machinery | Propulsion and ship-system installation | required | Install actual marine mechanical diesel drive, shaft/propeller, generators and declared pumps/piping. Supplier-contained equipment/fluids excluded from additional site supply; purchased components need compatible upstream modules. | foreground | internal transfer; accepted complete vessel reference |
| outfit | Cargo-hold and ship outfitting | required | Fit exact hatch/closure, steering, electrical, navigation, accommodation and safety design. Listed cards initialize individual exchanges; actual additional outfit such as rudder, anchors, chains, lifeboat and cabin panels must each be separately specified/measured before dataset completeness is claimed. | foreground | internal transfer; accepted complete vessel reference |
| trials | Launch, acceptance trials and net-mass release | required | Record actual launching method, transfer/tow modules, harbour/sea trial work, rework and accepted hull. Retrieve controlled current survey-derived net-mass acceptance records; no imaginary whole-ship scale. Record trial consumption separately from retained delivery stock and commercial operation. | foreground | finished_machine |

### Process: Hull-section fabrication and erection (`hull`)

Receive actual shipbuilding plates/profiles; document ready-to-mount supplier scope versus site nesting/cutting/forming. Weld panels/blocks, erect hull and superstructure to released drawings. Actual bought-in blocks replace contained site stocks/work, not another complete vessel reference.

#### Inputs

##### Product flows

###### Hot-rolled shipbuilding steel plate (`hull_plate`)

One actual drawing-qualified shipbuilding grade, thickness and condition per card; receive traceable plate masses and cut-ready versus site nesting scope. No Q345/AH36 equivalence assumed.

- Selected flow: Hot-rolled shipbuilding steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Hot-rolled shipbuilding steel bulb flat (`hull_profile`)

One actual approved bulb-flat section/grade; measure issues less returns. Other angles or flat bars receive separate cards.

- Selected flow: Hot-rolled shipbuilding steel bulb flat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Solid carbon-steel submerged-arc welding wire (`weld_wire`)

Conditional actual SAW wire grade/diameter per approved work procedure; net supplied wire and deposited/recovered reconciliation. Other joining routes separate.

- Selected flow: Solid carbon-steel submerged-arc welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Fused granular submerged-arc welding flux (`weld_flux`)

Conditional one actual SAW flux formulation; weigh new makeup and outgoing slag separately from recovered internal flux. No generic flux recipe.

- Selected flow: Fused granular submerged-arc welding flux
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Alternating current (`hull_power`)

Actual below1kV grid-user submetered hull cutting/forming, welding, ventilation, lifting and erection electricity, including rework; higher voltage supply distinct.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Actual dry untreated segregated hull machining/forming offcuts leaving yard; reusable stock internal transfer; painted/oily scrap separate.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Solid submerged-arc welding slag (`weld_slag`)

Conditional actual segregated fused flux slag leaving yard, excluding wire stubs/dust; weigh independently.

- Selected flow: Solid submerged-arc welding slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Conditional evidenced post-control hull fabrication particles to immediate outdoor air, submedium and size unspecified. Captured dust is waste, not air emission. Replace with actual size fractions when measured.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

### Process: Surface preparation and coating (`finish`)

Include actual site/outsourced preparation and individual supplied coats; shot/epoxy/antifouling cards are conditional examples, not mandatory universal recipes. Prefinished blocks replace contained work; finishing may occur before/after erection or launching.

#### Inputs

##### Product flows

###### Cast steel blasting shot (`blast_shot`)

Conditional actual shot specification and makeup mass for surface preparation; recovered shot internal. Open mineral blasting requires a distinct abrasive row.

- Selected flow: Cast steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated epoxy marine anticorrosion primer (`epoxy_primer`)

Conditional one actual mixed supplied primer product; supplier base/hardener separate when purchased separately, measured formulation/solids and retained dry film.

- Selected flow: Formulated epoxy marine anticorrosion primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated copper-oxide marine antifouling coating (`antifoul_coat`)

Conditional actual supplied coating formulation, not pure copper oxide; no universal antifouling biocide/coverage prescribed. Different coats separate.

- Selected flow: Formulated copper-oxide marine antifouling coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Tap water (`finish_water`)

Conditional actual municipal product-water washing demand, excluding direct seawater abstraction and recirculated water. Volume requires measured density/temperature; no fixed freshwater assumption.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Alternating current (`finish_power`)

Actual below1kV blast, paint, extraction and drying attributable electricity; direct combustion curing if performed separately inventories actual fuel/emissions.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

#### Outputs

##### Waste flows

###### Spent steel blasting shot (`spent_shot`)

Conditional independently measured actual steel shot waste with coating contamination declared; exclude paint-booth filter, separate characterized cards.

- Selected flow: Spent steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Waste paint (`paint_residue`)

Actual segregated formulated paint overspray/residue if generated; no filter/sludge combination; retained coatings not waste.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Conditional measured xylene isomers CAS1330-20-7 released immediately to air, unspecified submedium after controls; no total VOC as xylene or marine-water antifouling release assumption.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

### Process: Propulsion and ship-system installation (`machinery`)

Install actual marine mechanical diesel drive, shaft/propeller, generators and declared pumps/piping. Supplier-contained equipment/fluids excluded from additional site supply; purchased components need compatible upstream modules.

#### Inputs

##### Product flows

###### Diesel engine (`diesel_engine`)

Actual assembled marine propulsion diesel engine of one supplier/model. Preserve Number of items, count supplied engines; independently measure installed engine mass for M balance and identify contained fluids/gearbox. Non-road class43110 applies to marine, not road vehicles.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Finished marine reduction gearbox (`reduction_gear`)

Conditional separately supplied exact gearbox mass/ratio/interface; omit if engine package contains it. Direct drive architecture explicitly declared.

- Selected flow: Finished marine reduction gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Finished steel ship propeller shaft (`propeller_shaft`)

One actual shaft drawing/material and measured supplied mass, excluding bearings and propeller; no wind-turbine main-shaft substitution.

- Selected flow: Finished steel ship propeller shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Ships' propellers and blades therefor (`propeller`)

One actual complete fixed-pitch metallic ship propeller, actual alloy/drawing/diameter and supplied mass; standalone blades not additional duplicates; upstream sand-casting PCR may support purchased propeller manufacture only if compatible.

- Selected flow: Ships' propellers and blades therefor `8f01d846-f812-4209-a4c1-9f2daa531e79`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Complete marine diesel electric generating set (`diesel_genset`)

One actual complete received generator-set configuration and net mass, including declared engine/generator/skid; do not separately inventory contained engine or copper windings.

- Selected flow: Complete marine diesel electric generating set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Finished marine centrifugal ballast-water pump (`ballast_pump`)

Exact pump part number, casing material, supplied motor containment and measured mass; bilge/fire pumps receive distinct rows.

- Selected flow: Finished marine centrifugal ballast-water pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Seamless carbon-steel ship system pipe (`steel_pipe`)

One actual grade/diameter/wall/coating supply per card; measure mass/length with measured conversion, fittings separately.

- Selected flow: Seamless carbon-steel ship system pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Finished steel ship butterfly valve (`butterfly_valve`)

Exact released valve body, bore/pressure, actuator containment and supplied mass; different valve functions separate.

- Selected flow: Finished steel ship butterfly valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

###### Alternating current (`machinery_power`)

Actual below1kV lifting, installation, shaft alignment and piping welding electricity; internal compressed-air generation counted once.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery`

### Process: Cargo-hold and ship outfitting (`outfit`)

Fit exact hatch/closure, steering, electrical, navigation, accommodation and safety design. Listed cards initialize individual exchanges; actual additional outfit such as rudder, anchors, chains, lifeboat and cabin panels must each be separately specified/measured before dataset completeness is claimed.

#### Inputs

##### Product flows

###### Finished steel cargo-hold hatch cover (`hatch_cover`)

Exact complete cover configuration, seal/actuator inclusion and supplied mass; site-fabricated cover instead uses actual separate steel/joining exchanges without duplication.

- Selected flow: Finished steel cargo-hold hatch cover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Complete marine hydraulic steering gear (`steering_gear`)

One actual released steering subassembly scope/part number and mass; exclude separately fitted rudder unless contained, declare supplied prefill.

- Selected flow: Complete marine hydraulic steering gear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Finished steel ship watertight door (`watertight_door`)

One released door specification and measured supplied mass, inclusive frame/seals if specified; other closures separate.

- Selected flow: Finished steel ship watertight door
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### rock wool (`insulation`)

Conditional actual rock-wool grade/density/binder/facing and weighed net supply for declared insulation location; separate facing if purchased separately, no required fire-class threshold inferred.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Finished insulated copper marine power cable (`copper_cable`)

One voltage/insulation/conductor specification, actual supplied mass, route/fire qualification from records; no energy-based cable-to-mass guess.

- Selected flow: Finished insulated copper marine power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V (`switchboard`)

One actual complete ship electrical distribution board not exceeding1000V, actual part/model/mass and contained switchgear; upstream class identity not marine certification.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Finished marine navigation radar (`navigation_radar`)

One actual released complete radar part number and dry mass, declared antenna/display containment; independently supplied radio/navigation aids separate.

- Selected flow: Finished marine navigation radar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Alternating current (`outfit_power`)

Actual below1kV cabin/outfit installation and integration utilities; bought-in assemblies replace their contained material/work.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

### Process: Launch, acceptance trials and net-mass release (`trials`)

Record actual launching method, transfer/tow modules, harbour/sea trial work, rework and accepted hull. Retrieve controlled current survey-derived net-mass acceptance records; no imaginary whole-ship scale. Record trial consumption separately from retained delivery stock and commercial operation.

#### Inputs

##### Product flows

###### Diesel fuel (`trial_fuel`)

Actual weighed fossil diesel fuel consumed in yard/harbour/acceptance sea trials; record grade, sulfur, carbon origin and supply provider independently. Generic identity supplies no heating value or combustion factor. Fuel retained for delivery service is separate from manufacturing consumption.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

###### Formulated mineral marine engine lubricating oil (`engine_oil`)

Actual one formulation/grade and weighed net added oil; supplier-prefilled engine oil already contained not double counted; retained oil versus consumed/used oil reconciled.

- Selected flow: Formulated mineral marine engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

###### Tap water (`trial_water`)

Actual municipal product water for flushing/testing and declared retained technical circuits; no seawater resource substitution, stock and drained water separately reconciled.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

###### Alternating current (`trial_power`)

Actual below1kV shore grid trial/inspection power; generated onboard electricity instead inventories genset fuel/release once and internal power as transfer.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

##### Elementary flows

###### Seawater withdrawn from ocean for acceptance trials (`sea_resource`)

Conditional actual direct ocean intake for test ballast/cooling, marine resource input; measured volume and actual seawater density/salinity/temperature to kg. No municipal product-water identity.

- Selected flow: Seawater withdrawn from ocean for acceptance trials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

#### Outputs

##### Product flows

###### Other vessels for the transport of goods and other vessels for the transport of both persons and goods (`finished_machine`)

1kg share of actual complete accepted new steel-hull mechanically diesel-propelled dry general cargo vessel, exact hull/configuration and corrected net M. Broader category identity constrained by qualifiers, not a generic ship production mix or transport service.

- Selected flow: Other vessels for the transport of goods and other vessels for the transport of both persons and goods `8a495278-8b08-411f-942e-0c01d3e678ac`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Used lubricating oil (`used_oil`)

Actual separately collected spent mineral lubricating oil from commissioning/rework, not fuel tank stock, oily bilge water or delivery-retained oil.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

###### Oily bilge wastewater sent to treatment (`oily_bilge`)

Conditional one separately measured aqueous bilge waste stream leaving trials for documented treatment; specify water/oil concentration, exclude recovered oil and clean ballast. Direct treated effluent species require independent evidence.

- Selected flow: Oily bilge wastewater sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Conditional actual trial fossilCO2 CAS124-38-9 immediate outdoor-air unspecified-submedium emission, from measured species-specific outlet evidence; do not use service-voyage emissions or default fishing-vessel factors.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

###### nitrogen monoxide (`nitric_oxide_air`)

Conditional separately measured NO CAS10102-43-9 immediate-air unspecified-submedium trial release. Aggregate NOx as NO2 cannot substitute; NO2/N2O must have their own measured rows if evidenced.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_trials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trials`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared_operations | First subdivide yard/work orders by hull, design and stage. Shared cutting, welding, blast/paint, lifting and dock/shore trial utilities use exchange-specific actual measured causal load/time or demand from cp_allocation, reconciled to supplied total and excluded work. No default deadweight, GT, engine power or hull-area shares. |  |
| allocation_variants | hulls | Each hull configuration retains its own measured M and numerator. Rework/reject burden attributed to accepted construction; pooled results only after separate normalization with disclosed measured weights. Residual physical/economic fallback needs actual causal records, sensitivity and review, not invented percentages. |  |
| allocation_recovery | outputs | Recovered shot/flux/steel/water within yard are transfers, not automatic coproduct or avoided-production credits. External scrap/waste retains measured condition, treatment and responsibility. Saleable coproduct claims require actual quality/market records and reviewed handling; no future ship-recycling credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | trials | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted hull | current completed acceptance cycle | same exact delivery configuration | accepted net mass per unit | quality_survey original current weight survey; signed correction schedule; fit-list and independent mass balance; uncertainty |
| cp_hull | hull | each atomic process row | measurement | drawing/grade/heat certificates; plate/profile issues and returns; cutting stock and nesting; weld procedure/wire/flux issues; block transfers; electricity; offcuts/slag/dust and measured outdoor particles | Weigh each grade/consumable and segregated outgoing stream, reconcile stock/block issues and returns; meter actual job demand. Record supplier-cut scope. Sample post-control outlet species/air volume/time and particle-size coverage only if release occurs. | kg; MJ | each hull/work order; stock/meter closure each reporting period | whole declared construction cycle including rework; accepted hull count matched | all actually included yards/outsourced operations | attributable exchange amount / accepted units | calibration; supplier fit-list; work orders; issue/return and acceptance records; missing-data log |
| cp_finish | finish | each atomic process row | measurement | surface area/location; actual abrasive/coating formulation, SDS/solids/mix; supply/recovery/film; water; electricity; waste composition; xylene speciation/air flow/time | Measure each actual supplied formulated product and distinct waste; reconcile stock/makeup/recovery and retained coating. Volume-to-mass needs same-product measured density/state. Verify each emitted species after controls; do not invent biocide water release during manufacture. | kg; MJ | each hull/work order; stock/meter closure each reporting period | whole declared construction cycle including rework; accepted hull count matched | all actually included yards/outsourced operations | attributable exchange amount / accepted units | calibration; supplier fit-list; work orders; issue/return and acceptance records; missing-data log |
| cp_machinery | machinery | each atomic process row | measurement | supplier part/model; engine actual count and independent measured dry/installed mass; scope/mass of gearbox/shaft/propeller/genset/pump/pipe/valve; prefill list; alignment and installation records; electricity | Count actual supplied assembled marine engines in Item(s), preserving the public property; independently weigh or obtain traceable actual engine weighing records for complete vessel mass reconciliation. Measure each other part supply and separately added fluid, reconcile contained versus installed configuration to hull-specific BOM. | kg; MJ; Item(s) | each hull/work order; stock/meter closure each reporting period | whole declared construction cycle including rework; accepted hull count matched | all actually included yards/outsourced operations | attributable exchange amount / accepted units | calibration; supplier fit-list; work orders; issue/return and acceptance records; missing-data log |
| cp_outfit | outfit | each atomic process row | measurement | hatch/steering/closure model and mass; actual insulation/facing; cable specification/mass; board voltage/inclusions; radar scope; safety/accommodation fit-list with measured masses; electricity | Measure each actual released installed part supply; split different product specifications and remove duplicates contained in bought-in modules. Cable energy property cannot become mass without actual supplier-specific conversion evidence. Record all additional actual fit-list exchanges separately. | kg; MJ | each hull/work order; stock/meter closure each reporting period | whole declared construction cycle including rework; accepted hull count matched | all actually included yards/outsourced operations | attributable exchange amount / accepted units | calibration; supplier fit-list; work orders; issue/return and acceptance records; missing-data log |
| cp_trials | trials | each atomic process row | measurement | hull/configuration and approved acceptance plan; launch/transfer/tow scope; trial fuel issued/returned/retained; oil/prefill/circuit state; metered water/actual sea intake density and return chemistry; trial duration/load; outlet gas species/flow/time; used oil/bilge waste; release/rework; signed lightweight survey and net corrections | Record actual trial plans/results and measured fuel/water/utilities, including rework. Retrieve signed current lightweight-survey original readings, hydrostatic calculation and measured add/remove item records, followed by documented net-delivery correction; retain full evidence under quality_survey. Meter/speciate actual gas emissions; aggregate NOx is not NO mass. | kg; MJ | each hull/work order; stock/meter closure each reporting period | whole declared construction cycle including rework; accepted hull count matched | all actually included yards/outsourced operations | attributable exchange amount / accepted units | calibration; supplier fit-list; work orders; issue/return and acceptance records; missing-data log |
| cp_allocation | manufacturing | shared_load | measurement | total supplied demand; actual submeter/load/time; served hulls; excluded work | Measure exchange-specific causal demand/time and all served work orders; document driver and reconcile all shares to actual supplied totals. | MJ; h | each shared batch and reporting-period closure | same construction period | all served yards/hulls | partition actual causal demand; attributable amount / accepted units | meter closure; sensitivity; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | hull_plate; hull_profile; weld_wire; weld_flux; hull_power; steel_scrap; weld_slag; particle_air; blast_shot; epoxy_primer; antifoul_coat; finish_water; finish_power; spent_shot; paint_residue; xylene_air; diesel_engine; reduction_gear; propeller_shaft; propeller; diesel_genset; ballast_pump; steel_pipe; butterfly_valve; machinery_power; hatch_cover; steering_gear; watertight_door; insulation; copper_cable; switchboard; navigation_radar; outfit_power; trial_fuel; engine_oil; trial_water; sea_resource; trial_power; used_oil; oily_bilge; fossil_co2_air; nitric_oxide_air | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is attributable actual same-hull/configuration exchange after issue/return, stock, waste/recovery and rework reconciliation divided by matched accepted units. Preserve each numerator kg, MJ or engine Item(s); separate independently measured component mass closes the vessel fit-list, never numerically add engine count to kg. Any volume/density, installed part count/mass or concentration/formulated-mass conversion requires actual same-product/state measurements and declared uncertainty; no assumed density or catalogue weight. The survey-to-net M derivation is a separate physical evidence rule below, not an additional algebraic clause in normalize_mass.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_survey | finished_machine | cp_mass acceptance records must originate in a current actual vessel lightweight/weight survey by a qualified responsible party. Retain original dated hull-specific draft/freeboard positions/readings and repeat checks, water density, verified reference geometry and hydrostatic model at actual trim/heel/deformation conditions, inspected/sounded tank contents and measured add/remove items. Retain traceable instruments, calculation/software/version, signatures and propagated uncertainty; reconcile to complete released fit-list and independent weighed stock/component balance. A displacement figure alone is insufficient. The NMA2020 example supports this method architecture only, not current statutory compliance or numeric thresholds. Missing physical survey/correction evidence blocks dataset use. | nma-lightship-2020 |
| quality_delivery_mass | finished_machine | Survey lightship condition and PCR net delivered condition must be explicitly reconciled. Include actual installed hull/outfit and declared retained technical oil/coolant in M once; exclude cargo/persons, bunkers, ballast, stores, temporary staging/test weights, packaging and detached spares. Document each correction from actual measured quantities/state, complete missing fit items before final acceptance or independently verify their measured installed mass. Fuel full-load mass, deadweight, gross/net tonnage, design/catalogue lightship estimates and residual guessed mass cannot replace M. No whole-vessel platform scale is presumed. | current survey; signed delivery correction; independent measured fit-list |
| quality_prefill | components | Independently measured engine dry/installed masses and received module-contained prefill must reconcile to whole-vessel M. Separately issued oil/coolant counted only beyond supplier-contained fill; trial consumption/removed fluids and retained technical fill separated. No lubricating oil added twice through engine and trials; generator package engine not duplicated as propulsion engine. | supplier scope; weighing/fill records; hull BOM |
| quality_identity | flows | Require actual grades, chemical/formulated supply, route/state and supplier-contained part scopes; preserve public reference property. Particle/xylene/fossilCO2/NO need actual immediate-air submedium/species evidence; direct seawater resource separate from product water and oily wastewater. No unmeasured default fuel carbon/sulfur, emissions or lifetimes. | supplier certificates/SDS; outlet samples and calibration; identity audit |
| quality_acceptance | trials | Retain current hull/weld inspection, watertight/pressure-system, alignment, steering/electrical/safety and actual harbour/sea trial acceptance records as required by released design. Actual authority/class approvals when held must be traceable; manufacturer marketing cannot establish compliance, numerical pass limits or universal test load. | released vessel plan; actual survey/test approvals; bodewes-build |
| quality_coverage | dataset | Declare actual measured/calculated/estimated/missing/excluded/not-applicable states for every fit-list and route exchange; expand atomic rows for all actual equipment/chemicals/emissions and purchased tow/treatment services. Record primary coverage, uncertainty, provider versions and gaps. Sources supply architecture, not complete plant LCI. | work orders; meter/stock closure; complete fit-list; coverage register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require1kg complete accepted output and same-hull controlled net M with quality_survey and quality_delivery_mass physical evidence. Do not accept a scale fiction, catalogue/deadweight/tonnage or displacement-only proxy. The finite measurement check validates declared q_item/M relation, not actual survey adequacy. | nma-lightship-2020 |
| validation_basis | inventory | Match accepted hull count, construction period, configuration and numerator units to normalize_mass and declared protocol. Engine Item(s) needs separate independent mass reconciliation; do not overwrite property or make power-to-mass assumptions. |  |
| validation_modules | manufacturing | Audit supplier blocks, propulsion/generator/outfit containment and prefill against installed BOM; actual missing outfit and alternative finish/joining/support routes require separate atomic inventories. Check trial versus commercial-operation scope and external tow/fuel duplication. |  |
| validation_releases | elementary | Verify species/CAS and actual medium/submedium/time after controls. NO is not total NOx as NO2 or N2O; fossilCO2 requires measured fossil origin. Size fractions replace unspecified duplicates. Clean seawater return, thermal exchange, treated effluent and actual pollutants individually evidenced, never assume all as oily bilge or marine emissions. |  |
| validation_completeness | dataset | Keep identity and physical-data gaps explicit. Complete actual survey/correction, production records, fit-list, supplier/transport/utilities/treatment coverage and applicable acceptance before use. Structural check pass does not grant scientific approval or full cradle-to-gate coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of complete new steel-hulled dry general cargo vessels with mechanical diesel propulsion and a declared fixed-pitch propeller: hull-section fabrication and erection, actual surface finishing, purchased propulsion/piping integration, cargo-hold closures and ship outfit integration, launching, harbour/sea acceptance trials and net-mass acceptance. Select one actual hull number, released design and delivery configuration. This is a narrower methodology than CPC49314. |
| excluded_use | Exclude tankers, container-only ships, ro-ro/passenger ships, self-discharging ships, unpowered barges, fishing/work/naval vessels, LNG/hybrid/electric propulsion, separately sold hulls/parts, repair and remanufacture. Cargo/passengers, commercial voyages, tonne-km, use-stage bunkering, maintenance, demolition and port service infrastructure are outside manufacture. Actual construction transfer/tow and acceptance trials are manufacturing support and require explicitly bounded measured modules; no service life or cargo-performance equivalence is assumed. |
| required_metadata | hull number/model; approved released drawings and revision; hull plate/section grades and certificates, thickness and make-or-buy; hold/tween-deck/hatch design and fitted cargo gear; marine engine supplier/model/count and independent measured mass, gearbox/shaft/propeller scope; generator/pump/pipe/valve supplier containment; electrical voltage/cable and radar configuration; safety, accommodation and insulation fit list; actual coating formulation/route; yard/sites, intersite tow, period and accepted count; current vessel-specific lightweight survey and hydrostatic/reference-position evidence; controlled acceptance net M and corrections; empty cargo/tank delivery state; retained technical oil/coolant versus excluded bunkers/ballast/stores; supplier prefill scope; survey/test instruments and uncertainty; upstream utilities/transport/treatment coverage |
| required_quality_disclosure | Current released design, supplier containment and fit-list; survey original method/readings/calculation/version/uncertainty; corrected net M and delivery fluids; engine count and independent actual mass; yard/period/trial/rework/stock balance; actual missing exchanges and provider/upstream/tow/treatment gaps; allocation sensitivity; unresolved identities; evidence limitations and scientific review state. |
| update_trigger | Hull/design/plate grade, propulsion or cargo/outfit configuration, supplier/make-or-buy/coating route, yard/utility/trial method or period, survey/delivery state, physical evidence or identity resolution changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| damen-cf5000 | handbook | Damen Combi Freighter 5000, undated official HTML, product description and Performances / Capacities sections; no pagination. https://www.damen.com/vessels/cargo/multi-purpose-cargo-vessels/combi-freighter-5000 | Case architecture only: box cargo hold and fixed-pitch propulsion with generators. No numeric dimensions, weight/tonnage, power, service duration, fuel-efficiency or compliance claims adopted; optional batteries/biodiesel do not define this route. |
| bodewes-build | handbook | Royal Bodewes How we build, undated official HTML, Design & engineering; Building process; Christening and Launching; Seatrials and Delivery; no pagination. https://royalbodewes.com/how-we-build/ | Independent manufacturer sequence: supplied prepared plates/profiles, block assembly/welding, finishing, launch and trials. Site cutting/make-or-buy and launching technology must be actual records; no universal process quantity, place, certification limit or lifetime inferred. |
| nma-lightship-2020 | official_guidance | Norwegian Maritime Authority KS-0179-1E OTI, Procedures for determination of light ship displacement and centre of gravity of Norwegian ships, Rev07.01.2020, PDF/printed pp4–7, sections2 and3.1–3.4. https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf | Historical method architecture: responsible survey, completeness/add-remove state, tank evidence, water density and corrected draught/hydrostatic reference positions. Not current legal approval, numeric trim/tank thresholds or actual ship M. PCR net delivery adjustment is independently required foreground evidence. |
