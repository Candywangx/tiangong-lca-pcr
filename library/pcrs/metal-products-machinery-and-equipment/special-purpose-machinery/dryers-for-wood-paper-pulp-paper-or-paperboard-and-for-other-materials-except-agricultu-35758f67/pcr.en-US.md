---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dryers-for-wood-paper-pulp-paper-or-paperboard-and-for-other-materials-except-agricultu-35758f67
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dryers for wood, paper pulp, paper or paperboard and for other materials except agriculture products

## 1. Scope and Applicability

This PCR produces factory-gate foreground data for manufactured dryers whose principal delivered function is removing moisture or solvent from wood, pulp, paper/paperboard or other nonagricultural materials. It covers complete wood kiln machinery packages, supplied standalone pulp-airborne and paper web/contact-cylinder drying sections, and conveyor, rotary, contact/paddle/vacuum, spray, flash/ring and fluid-bed machines for verified industrial applications. The reference represents one explicitly bounded complete supply configuration, including factory-supplied modules awaiting on-site assembly. It does not represent the mass of dried material or a drying service. These families are evidenced examples, not a closed technology list; another nonagricultural moisture-removal design requires actual construction evidence and extended atomic inventory, not exclusion solely for an unavailable UUID. Physical kilns for chemical reaction alone, incinerators, coating/granulating lines whose principal function is not drying, agricultural-product dryers (44518), household appliances (44812), centrifugal clothes extractors (44911), civil buildings/foundations and complete pulp/paper-making lines (44913) are outside this equipment boundary. A dryer section is not excluded merely because it later connects to a paper machine: principal function and contractual supply boundary govern classification. Mixed-purpose or embedded line scope requires documented semantic review. No universal machine mass, operating capacity, lifetime, energy, yield, emission factor, GWP or empirical range is prescribed.

Manufacturing follows each actual make/buy state: fabricate chamber/panel/frame, shell/head or heated trough/shaft only where performed; cast and machine iron cylinders only in an actual own foundry; finish specified surfaces; assemble the selected heating, airflow, conveyor/rotary/contact or atomization/fluidization modules; fit controls, inspect and perform factory acceptance/retests; prepare complete modular delivery. Wood kiln insulation and aluminum welding, welded steel versus cast-iron web cylinders, pulp blow boxes, rotary drum/flight/riding ring/drive construction and solvent-tight paddle troughs are different routes, not one grain tower recipe. GEA chemical-family evidence supports spray/flash/ring/fluid-bed equipment choices only, not an assumed factory fabrication recipe.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dryers-for-wood-paper-pulp-paper-or-paperboard-and-for-other-materials-except-agricultu-35758f67 |
| classification_refs | CPC 3.0 44912 |
| covered_products | wood-kiln machinery packages; pulp-airborne and paper web/contact drying sections; industrial material dryers |
| excluded_products | agricultural, household and centrifugal clothes equipment; complete paper machines; civil works; drying service; reaction-principal kilns |
| representative_product | accepted dryer of one configuration and declared supplied modules; not representative category-wide performance |
| production_route | Manufacturing follows each actual make/buy state: fabricate chamber/panel/frame, shell/head or heated trough/shaft only where performed; cast and machine iron cylinders only in an actual own foundry; finish specified surfaces; assemble the selected heating, airflow, conveyor/rotary/contact or atomization/fluidization modules; fit controls, inspect and perform factory acceptance/retests; prepare complete modular delivery. Wood kiln insulation and aluminum welding, welded steel versus cast-iron web cylinders, pulp blow boxes, rotary drum/flight/riding ring/drive construction and solvent-tight paddle troughs are different routes, not one grain tower recipe. GEA chemical-family evidence supports spray/flash/ring/fluid-bed equipment choices only, not an assumed factory fabrication recipe. |
| market_state | manufactured accepted finished equipment at factory gate; large modules may await site assembly |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provide drying-equipment function for the declared material |
| How much | 1 kg accepted net equipment; preserve count and net mass of the same configuration |
| How well | contract drying mode, material compatibility, pressure and acceptance quality; mass is not equal functional performance |
| How long or cycle | one accepted factory supply event; no operational lifetime assumed |
| reference_flow_link | finished_dryer |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dryers for wood, paper pulp, paper or paperboard and for other materials except agriculture products `5ff91cda-e3a2-47c5-a5cc-6b7ce9b5bfc6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function and dried material; model and drawing revision; one configuration; supplied modules and make/buy state; lot period and factory geography; measured net equipment mass and count; metal grade and medium compatibility; heating mode; pressure/vacuum state; retained charge; acceptance criteria; supply interfaces; civil/site-assembly exclusion; packaging exclusion |

Declare each required qualifier in data-package metadata; kg of equipment does not substitute for output of dried material.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| physical_species | physical material/species records | Mass | kg | Each input, product, scrap, slag, sludge, wastewater, release and stock uses its own matched moisture or contained-element assay and wet/dry basis; gross alloy mass is not element mass. |
| heat_interface | purchased steam and hot-water rows | Energy | MJ | Supply and return enthalpy use one datum and their own measured states; use actual net heat or separate supply/return masses times their own enthalpies; deduct return once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | incoming materials, purchased components of declared completed state and utilities of declared supply interface |
| starting_condition_role | foreground manufacturing interface |
| product_classification_scope | CPC 3.0 44912; principal function and supplied assembly reviewed |
| recursive_input_rule | A purchased same-category dryer module is an input with completed state and provider data, not unbounded recursion; pair and cancel internal transfers of the same part. |
| upstream_dataset_requirement | Link each incoming material, utility or bought assembly to upstream data matching its interface; do not repeat embedded material, motor, oil or charge of a completed assembly. |
| disclosure | Declare manufacturing site, modular delivery and make/buy matrix; factory output is complete modular supply, while site civil installation and operation are separately modelled. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| factory_scope | all processes | Include actual cutting/welding/machining, conditional foundry/heat treatment, finishing/assembly, rework and factory acceptance tests; exclude user drying energy and site civil works. | nyle-kiln-2024; valmet-airborne; feeco-rotary |
| make_buy | purchased modules | Each functional module requires completed state and supply boundary; purchased complete assemblies and self-made inputs are alternative accounting paths, counted once. | buhler-aerodry; valmet-airborne |
| route_purpose | dryer families | Do not conflate industrial-material and agricultural-product applications; FEECO reaction-principal rotary kilns are not dryers. A drying section may be independently supplied, while a whole paper machine is not a standalone drying section. | feeco-rotary; voith-drying; gea-chemical |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Sheet, frame, shell and shaft fabrication | conditional | Own cutting, forming, welding and machining; purchased finished assemblies bypass their internal operations. | foreground | finished_dryer |
| casting | Cylinder foundry and heat treatment | conditional | Only actual in-house cast-iron cylinder production; purchased castings enter assembly or machining at their completed state. | foreground | finished_dryer |
| finish | Surface preparation and coating | conditional | Only actual specified surface treatment; stainless contact surfaces are not assumed painted. | foreground | finished_dryer |
| wood | Wood-kiln chamber and heating integration | conditional | Delivered wood-kiln configuration; aluminum chamber, fan/baffle, door, heating/control choices follow actual BOM. | foreground | finished_dryer |
| web | Paper/pulp drying section assembly | conditional | Standalone supplied web/contact-cylinder or airborne pulp drying assembly, not an entire paper-making line. | foreground | finished_dryer |
| industrial | Other-material dryer assembly | conditional | Conveyor, direct/indirect rotary, contact paddle/vacuum, spray, flash/ring or fluid-bed drying configuration with nonagricultural principal purpose. | foreground | finished_dryer |
| test | Factory acceptance and retest | required | Actual dimensional, pressure/leak, drive/control, airflow and conditional heated or wet-load factory tests; customer drying operation excluded. | foreground | finished_dryer |
| services | Unassigned factory services | conditional | Only reconciled residual load after process assignments; own generation is separately inventoried. | foreground | finished_dryer |
| dispatch | Accepted supply and dispatch preparation | required | One complete accepted machine or explicitly complete modular supply configuration at factory gate. | foreground | finished_dryer |

Activate only physically existing routes for each configuration. Specific grade, formulation, insulation chemistry, refrigerant and trial material require actual BOM, supplier or SDS evidence; conditional cards are not default recipes. Unknown quantity is not zero; use not_applicable only with evidence of absence. Extend specific atomic cards for actual additional components, media, wastes and releases.

### Process: Sheet, frame, shell and shaft fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Carbon steel plate (`fab_carbon_plate`)

Only carbon-steel shell/frame stock actually issued; declare grade, thickness, and completed rolling state; no universal grade.

- Selected flow: Carbon steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: feeco-rotary

###### AISI 304 stainless steel sheet (`fab_304_sheet`)

Only verified 304 enclosure, bedplate or contact-surface stock cut/formed in-house.

- Selected flow: AISI 304 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-aerodry; andritz-paddle

###### AISI 316 stainless steel sheet (`fab_316_sheet`)

Only actual corrosion-compatible 316 contact vessel/cover stock; 304 and 316 are separate exchanges.

- Selected flow: AISI 316 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-paddle

###### Aluminum structural extrusion (`fab_al_profile`)

Wood-kiln structural stock only when made from extrusion; actual alloy/temper and supplier certificate required.

- Selected flow: Aluminum structural extrusion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024

###### Aluminum sheet (`fab_al_sheet`)

Only actual kiln panel, baffle or welded fan-housing stock; record its own alloy/finish.

- Selected flow: Aluminum sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024

###### Carbon steel shaft blank (`fab_steel_shaft`)

Only own-machined shaft/trunnion stock of documented grade; purchased finished shafts are not raw blanks.

- Selected flow: Carbon steel shaft blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: feeco-rotary; andritz-paddle

###### Steel welding wire (`fab_weld_wire`)

One actual steel electrode grade for steel shell/frame welding, including consumed wire and recorded return.

- Selected flow: Steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-drying; feeco-rotary

###### Aluminum welding wire (`fab_al_wire`)

Only actual aluminum fan-housing/frame weld filler; declare alloy.

- Selected flow: Aluminum welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024

###### Argon shielding gas (`fab_argon`)

Only shielding gas actually metered or reconciled by cylinder mass for the selected welding route.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Water-miscible machining coolant concentrate (`fab_coolant`)

Only the actual single formulation in machining; separate concentrate from dilution water and spent emulsion.

- Selected flow: Water-miscible machining coolant concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`fabrication_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Carbon steel machining scrap (`fab_steel_scrap`)

Weigh segregated steel offcuts/swarf of this grade; distinguish sold scrap from internal reuse.

- Selected flow: Carbon steel machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### AISI 304 stainless steel scrap (`fab_304_scrap`)

Keep grade-specific 304 scrap separate from carbon steel and 316; use its own metal assay if balancing elements.

- Selected flow: AISI 304 stainless steel scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Aluminum fabrication scrap (`fab_al_scrap`)

Separate actual alloy, residual moisture and recovery route; do not assign universal recycling credit.

- Selected flow: Aluminum fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent machining coolant emulsion (`fab_spent_coolant`)

Actual drained emulsion, own oil/water/metal assay and receiver; not equal to coolant concentrate mass.

- Selected flow: Spent machining coolant emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### AISI 316 stainless steel scrap (`fab_316_scrap`)

Only actual segregated 316 scrap with its own grade, moisture and contained-element assay; never pool with 304.

- Selected flow: AISI 316 stainless steel scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Manganese to outdoor air (`fab_manganese_air`)

Only measured elemental manganese release in welding/fabrication exhaust or fugitives; own dust assay and post-control quantity, not gross welding-fume mass. Other measured species require separate cards.

- Selected flow: Manganese to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Cylinder foundry and heat treatment (`casting`)

#### Inputs

##### Product flows

###### Foundry pig iron (`cast_pigiron`)

Only actual in-house iron charge; require lot carbon/silicon assay and cast-cylinder grade recipe.

- Selected flow: Foundry pig iron
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Ferrous foundry charge scrap (`cast_scrap`)

Only external purchased scrap charged to own foundry; paired internal returns cancel at factory boundary.

- Selected flow: Ferrous foundry charge scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Foundry coke (`cast_coke`)

Only actual coke-fired cupola; induction-furnace route does not assume coke. Account carbon and ash separately.

- Selected flow: Foundry coke
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Silica foundry sand (`cast_sand`)

Only actual mould/core sand of documented grain grade; recycled internal sand is a paired transfer.

- Selected flow: Silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Bentonite mould binder (`cast_bentonite`)

Only actual bentonite-bonded mould route; other binder species require separate cards.

- Selected flow: Bentonite mould binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`casting_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas fuel (`casting_gas`)

Only actual factory burner/boiler fuel, separately metered mass or standardized volume with composition, conditions and measured applicable lower heating value; purchased steam excludes its supplier fuel.

- Selected flow: Natural gas fuel
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Iron-foundry slag (`cast_slag`)

Actual slag with own dry/wet and contained-metal assay, receiver and closing stock.

- Selected flow: Iron-foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent silica foundry sand (`cast_sand_waste`)

Only external spent sand after actual reclamation; binder/metal contamination assayed separately.

- Selected flow: Spent silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Captured iron-foundry dust (`cast_captured_dust`)

Weigh actual filter dust, own metal/silica/carbon/moisture assays and receiver; capture is not outdoor release or destruction.

- Selected flow: Captured iron-foundry dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Silicon dioxide to outdoor air (`cast_silica_air`)

Only actual species-resolved foundry dust release with own silica assay, control and sampling; whole captured dust is waste, not this emitted species.

- Selected flow: Silicon dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon dioxide to outdoor air (`casting_co2`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Fossil carbon dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide to outdoor air (`casting_co`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Carbon monoxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to outdoor air (`casting_no2`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Nitrogen dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Surface preparation and coating (`finish`)

#### Inputs

##### Product flows

###### Sodium hydroxide cleaning agent (`finish_cleaner`)

Only actual alkaline cleaning formulation; record concentration and active mass independently from total solution.

- Selected flow: Sodium hydroxide cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Epoxy resin coating (`finish_epoxy`)

Only specified actual epoxy coating; record solids, curing-agent identity and solvent species; other formulations need distinct cards.

- Selected flow: Epoxy resin coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Amine epoxy curing agent (`finish_hardener`)

Only actual separate amine hardener; declare formulation and mixing certificate rather than a default ratio.

- Selected flow: Amine epoxy curing agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Xylene coating solvent (`finish_xylene`)

Only measured xylene-containing coating/cleaning use; track own retained, recovered and released species mass.

- Selected flow: Xylene coating solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`finish_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas fuel (`finish_gas`)

Only actual factory burner/boiler fuel, separately metered mass or standardized volume with composition, conditions and measured applicable lower heating value; purchased steam excludes its supplier fuel.

- Selected flow: Natural gas fuel
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Recovered xylene (`finish_recovered_xylene`)

Only external recovered solvent leaving boundary with actual concentration and destination; internal recycle cancels.

- Selected flow: Recovered xylene
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

###### Epoxy coating sludge (`finish_sludge`)

Actual captured coating sludge with own water, solid, solvent and contained-element assay; capture is not destruction.

- Selected flow: Epoxy coating sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Xylene to outdoor air (`finish_xylene_air`)

Post-control and fugitive species-specific evidence; do not assign unclosed solvent residual automatically to air.

- Selected flow: Xylene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon dioxide to outdoor air (`finish_co2`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Fossil carbon dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide to outdoor air (`finish_co`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Carbon monoxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to outdoor air (`finish_no2`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Nitrogen dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Wood-kiln chamber and heating integration (`wood`)

#### Inputs

##### Product flows

###### Stainless steel fastener (`wood_fasteners`)

Actual stainless fastening item of declared grade; repeat an atomic row for each materially distinct item if needed.

- Selected flow: Stainless steel fastener
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024

###### Mineral wool thermal insulation (`wood_insulation`)

Only actual mineral-wool panel insulation confirmed by BOM; Nyle does not prescribe this insulation chemistry.

- Selected flow: Mineral wool thermal insulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Steam heating coil assembly (`wood_coil`)

Only bought completed coil in a steam-heated kiln; hot-water coil is a distinct interface if actual.

- Selected flow: Steam heating coil assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024

###### Refrigerant heat-pump dehumidifier assembly (`wood_heatpump`)

Only bought completed dehumidifier; included compressor, coil, motor and supplier charge are not added again.

- Selected flow: Refrigerant heat-pump dehumidifier assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024

###### Indirect gas-fired air-heater assembly (`wood_gas_heater`)

Only delivered indirect-fired heating option; bought burner/exchanger burdens are inside this assembly provider.

- Selected flow: Indirect gas-fired air-heater assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024

###### Alternating current (`wood_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

### Process: Paper/pulp drying section assembly (`web`)

#### Inputs

##### Product flows

###### Cast-iron paper drying cylinder (`web_cast_cylinder`)

Only purchased completed cylinder of declared grade/pressure and machining state; in-house foundry output is internal transfer.

- Selected flow: Cast-iron paper drying cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-drying

###### Welded steel paper drying cylinder (`web_steel_cylinder`)

Only bought completed welded steel cylinder; own shell/head fabrication is already accounted in fabrication, never repeated.

- Selected flow: Welded steel paper drying cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-drying

###### Drying-cylinder steam joint with stationary siphon (`web_steamjoint`)

Only supplied cylinder steam/condensate subsystem; bought assembly versus own parts distinction required.

- Selected flow: Drying-cylinder steam joint with stationary siphon
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-drying

###### Polyester dryer fabric (`web_fabric`)

Only actual polyester fabric supplied with web dryer; actual fiber/polymer and coated state must be verified.

- Selected flow: Polyester dryer fabric
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-drying

###### Pulp airborne-dryer blow-box assembly (`web_blowbox`)

Only purchased completed blow box of declared construction; own sheet welding is accounted upstream once.

- Selected flow: Pulp airborne-dryer blow-box assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: valmet-airborne

###### Alternating current (`web_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

### Process: Other-material dryer assembly (`industrial`)

#### Inputs

##### Product flows

###### Stainless steel conveyor bedplate assembly (`industrial_conveyor`)

Only actual bought bedplate/conveyor module for nonagricultural conveyor dryer, with supplied motors distinguished.

- Selected flow: Stainless steel conveyor bedplate assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-aerodry

###### Rotary-dryer girth-gear drive assembly (`industrial_rotary_drive`)

Only purchased completed drive of actual gearing/motor supply scope.

- Selected flow: Rotary-dryer girth-gear drive assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: feeco-rotary

###### Hollow heated paddle-shaft assembly (`industrial_paddle`)

Only bought contact-dryer paddle shaft, actual corrosion-compatible alloy and pressure state; own fabrication is alternative.

- Selected flow: Hollow heated paddle-shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-paddle

###### Vacuum pump assembly (`industrial_vacuum`)

Only included vacuum drying package; supplied motor/oil versus separate factory charge distinguished.

- Selected flow: Vacuum pump assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-paddle; gea-chemical

###### Solvent-recovery condenser assembly (`industrial_condenser`)

Only actual supplied solvent recovery package; condenser is equipment, not captured solvent or destruction credit.

- Selected flow: Solvent-recovery condenser assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-paddle

###### Spray-dryer atomizer assembly (`industrial_atomizer`)

Only actual spray drying machine; distinguish nozzle/rotary atomization in its declared supplied scope.

- Selected flow: Spray-dryer atomizer assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: gea-chemical

###### Dryer cyclone-separator assembly (`industrial_cyclone`)

Only cyclone supplied with flash/ring or spray dryer, actual sheet grade and completed state.

- Selected flow: Dryer cyclone-separator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: gea-chemical

###### Fluid-bed drying-chamber assembly (`industrial_fluidbed`)

Only bought static/vibrating/contact-bed chamber appropriate to actual nonagricultural material; own fabrication is alternative.

- Selected flow: Fluid-bed drying-chamber assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: gea-chemical

###### Alternating current (`industrial_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Thermal-oil heating-loop assembly (`industrial_thermaloil_loop`)

Only actual supplied completed contact-dryer oil loop; separately disclose included pump/heater and any supplier initial charge.

- Selected flow: Thermal-oil heating-loop assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-paddle

### Process: Factory acceptance and retest (`test`)

#### Inputs

##### Product flows

###### Electric drive motor (`test_motor`)

Only separately purchased motor fitted to dryer; do not repeat motor already embedded in a purchased fan/drive/package.

- Selected flow: Electric drive motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Dryer circulation fan assembly (`test_fan`)

Only separately purchased fan of declared impeller/housing/motor scope; actual fabricated fan housing is not added again.

- Selected flow: Dryer circulation fan assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024; valmet-airborne

###### Dryer programmable control cabinet (`test_control`)

Only actual separately supplied cabinet, I/O, sensors and cables in documented scope; embedded purchased-module controls not repeated.

- Selected flow: Dryer programmable control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: nyle-kiln-2024; valmet-airborne

###### Factory-charge R134a refrigerant (`test_r134a`)

Only actual R134a heat-pump factory charge supported by nameplate/SDS; no default refrigerant. Supplier-precharged modules exclude duplicate charge.

- Selected flow: Factory-charge R134a refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Nitrogen leak-test gas (`test_nitrogen`)

Only actual metered pressure/leak-test nitrogen and retained/vented destinations.

- Selected flow: Nitrogen leak-test gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Factory-test process water (`test_water`)

Only actual hydrotest/wash/spray-test water; flow, density, return, retention and discharge measured separately.

- Selected flow: Factory-test process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Wet wood pulp test charge (`test_pulp`)

Only actual factory wet-load airborne test; its own moisture/fiber assay and destination required. It is not machine output mass.

- Selected flow: Wet wood pulp test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`test_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas fuel (`test_gas`)

Only actual factory burner/boiler fuel, separately metered mass or standardized volume with composition, conditions and measured applicable lower heating value; purchased steam excludes its supplier fuel.

- Selected flow: Natural gas fuel
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased steam heat (`test_steam`)

Only actual delivered factory-test steam net heat: delivered mass × own supply enthalpy minus independently measured condensate-return mass × own return enthalpy, common datum; no assumed steam factor. Return accounted once.

- Selected flow: Purchased steam heat
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased hot-water heat (`test_hotwater`)

Only actual external hot-water test supply, calibrated net heat meter or paired supply/return mass and enthalpy on common datum; no separate boiler fuel for same purchased heat.

- Selected flow: Purchased hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Mineral thermal oil initial fill (`test_thermaloil`)

Only actual factory-added mineral thermal oil for the supplied circuit; identify formulation, retained fill and drained test oil. Precharged purchased loop excludes duplicate fill; synthetic oil needs its own specific card.

- Selected flow: Mineral thermal oil initial fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-paddle

###### Wet pine lumber test charge (`test_pine_load`)

Only actual wet pine kiln factory acceptance charge; measured own moisture, accepted or returned destination and ownership. No assumed factory load or mass enters machine denominator. Other wood species require separate cards.

- Selected flow: Wet pine lumber test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wet paper web test charge (`test_wetpaper`)

Only actual factory loaded paper drying-section test; own moisture/fiber assay and product grade; paper-machine customer operational throughput excluded.

- Selected flow: Wet paper web test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Returned pine lumber test charge (`test_returned_pine`)

Only actual returned customer pine test charge, with own post-test moisture and destination; distinguish drying loss from returned dry wood and do not claim an automatic drying-service co-product credit.

- Selected flow: Returned pine lumber test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

###### Discarded wood pulp test charge (`test_pulp_waste`)

Only discarded factory test pulp, own remaining moisture/fiber assay and documented receiver; sold/reused product is separate.

- Selected flow: Discarded wood pulp test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Factory-test wastewater (`test_wastewater`)

Actual wastewater delivered to treatment provider; own water/species concentration. Direct water release is separate compartment-specific elementary flow.

- Selected flow: Factory-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral thermal oil (`test_spent_oil`)

Only actual discharged trial oil with own formulation, stock and receiver; retained functional charge remains in equipment.

- Selected flow: Spent mineral thermal oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded paper web test charge (`test_paper_waste`)

Only discarded factory trial paper with own remaining moisture and fiber assay, stocks and receiver; any returned/sold test material uses separate actual product card.

- Selected flow: Discarded paper web test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Water vapor to outdoor air (`test_water_air`)

Actual factory heated/wet test evaporation only; wet stock, water return, reaction and exhaust humidity reconciled.

- Selected flow: Water vapor to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### R134a to outdoor air (`test_r134a_air`)

Only actual factory refrigerant release from charging/testing, measured inventory and recovery; no lifetime leakage default.

- Selected flow: R134a to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon dioxide to outdoor air (`test_co2`)

Only actual factory combustion, with each fuel own carbon and reaction/stock balances; upstream generation is not direct factory release.

- Selected flow: Fossil carbon dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide to outdoor air (`test_co`)

Only own species monitoring or validated actual burner/control evidence; fuel carbon balance alone does not establish CO.

- Selected flow: Carbon monoxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to outdoor air (`test_no2`)

Only measured NO2 species; NOx-as-NO2 equivalent is not molecular NO2 without composition data. Add distinct NO card when relevant.

- Selected flow: Nitrogen dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Unassigned factory services (`services`)

#### Inputs

##### Product flows

###### Alternating current (`services_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas fuel (`services_gas`)

Only actual factory burner/boiler fuel, separately metered mass or standardized volume with composition, conditions and measured applicable lower heating value; purchased steam excludes its supplier fuel.

- Selected flow: Natural gas fuel
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Factory service water (`services_water`)

Only unassigned external factory water after actual process/test assignments; actual moisture, stock, evaporation and discharge close whole factory balance.

- Selected flow: Factory service water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide to outdoor air (`services_co2`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Fossil carbon dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide to outdoor air (`services_co`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Carbon monoxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to outdoor air (`services_no2`)

Only actual combustion in this stage (or reconciled unassigned service generation); use own species-resolved post-control monitoring or matching validated evidence. CO and NO2 are not inferred from fuel carbon balance; NOx-as-NO2 equivalent is distinct from molecular NO2.

- Selected flow: Nitrogen dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Accepted supply and dispatch preparation (`dispatch`)

#### Inputs

##### Product flows

###### Alternating current (`dispatch_electricity`)

Purchased CN 1–35 kV user-side grid electricity only when actual geography/voltage/interface match. Other supplies need their own identity; assigned process quantity only, and services only unassigned residual. Convert actual kWh × 3.6 to MJ, not fuel calorific quantity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Pine timber transport crate (`dispatch_pine`)

Only actual pine crate, measured species/moisture and reuse trips; packaging excluded from net equipment denominator.

- Selected flow: Pine timber transport crate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Low-density polyethylene wrapping film (`dispatch_pe`)

Only actual LDPE film; polymer/grade and shipment mass verified; other polymer separately represented.

- Selected flow: Low-density polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Dryers for wood, paper pulp, paper or paperboard and for other materials except agriculture products (`finished_dryer`)

1 kg of the accepted complete supplied dryer configuration, net of packaging, civil base, trial material and temporary water; retained functional charge included once.

- Selected flow: Dryers for wood, paper pulp, paper or paperboard and for other materials except agriculture products `5ff91cda-e3a2-47c5-a5cc-6b7ce9b5bfc6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| causal_allocation | factory processes | Prefer direct configuration metering; allocate shared machinery using measured causal drivers such as machine hours, weld hours and heat-treatment lot load, with disclosure. Do not average unlike configurations into one reference. |  |
| residual_only | shared services | Shared services contain only unassigned residual for the same period/units; do not add whole-site meters on top of metered stages. Investigate negative residual, never clip to zero. |  |
| scrap_recovery | scrap and solvent | Cancel paired internal material, water-return and solvent-recycle transfers while retaining actual treatment energy. External scrap/co-products require actual legal/market state, treatment boundary and allocation disclosure; no automatic avoided-primary credit. |  |
| reject_burden | reject and trial | Rework, rejects and failed-test burdens remain in their attributable accepted-configuration period; their mass, trial material and packaging do not enter accepted net equipment denominator. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted net equipment | matched period records | model; configuration; serial number; accepted net mass M; N; supplied modules; retained charge; tare; acceptance date | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each lot and configuration | complete same period including rejects/rework | declared factory and supply interfaces | accepted net mass per machine | calibration; acceptance; assays; provider state; sampling/allocation uncertainty |
| cp_material | actual applicable process | one physical input | matched period records | grade; species; formulation; provider; quantity; returns; opening/closing stocks; own assay/moisture; make/buy completed state | Calibrated weighing, each supplier certificate and representative assay; distinguish purchased assembly from internal inputs and verify actual recipe. | kg | each lot and configuration | complete same period including rejects/rework | declared factory and supply interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling/allocation uncertainty |
| cp_energy | actual applicable process | one utility | matched period records | meter; period; imports; generation; exports; storage; assignments; actual fuel mass/volume/reference conditions/composition/NCV; steam supply mass/P/T/quality/enthalpy; separate condensate mass/T/enthalpy; causal driver | Use calibrated disjoint meters in one period; actual electricity kWh times 3.6 gives MJ. Actual steam supply mass times own state enthalpy minus independent return mass times own return enthalpy on one datum, or calibrated net heat meter. Match the actual steam/heat provider contract: gross delivered-energy interface requires separately credited return heat once; a provider already denominated in net heat receives no second return subtraction. Return counted once; purchased heat does not repeat own boiler fuel. | MJ | each lot and configuration | complete same period including rejects/rework | declared factory and supply interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling/allocation uncertainty |
| cp_water | actual water process | one water exchange | matched period records | meter; temperature/density; own material moisture; stocks; evaporation; discharge; paired returns; reactions | Meter actual supplied, retained, evaporated and external discharged water and each material own moisture; convert volume using own temperature/density. Pair internal returns while retaining pumping/treatment energy. | kg | each lot and configuration | complete same period including rejects/rework | declared factory and supply interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling/allocation uncertainty |
| cp_waste | actual applicable process | one waste stream | matched period records | net/tare; own species/moisture/metal assay; wet/dry basis; stocks; receiver; treatment; test material destination | Segregated weighing and matched own analysis including slag, sludge and wastewater; record actual receiver/treatment. | kg | each lot and configuration | complete same period including rejects/rework | declared factory and supply interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling/allocation uncertainty |
| cp_emission | actual release point | one species/compartment | matched period records | species; compartment; concentration; gas/liquid flow; duration; own assay; sampling; capture; stocks; detection limit; uncertainty | Post-control and fugitive species monitoring; model/factor must match actual fuel, technology, control and species. Below detection is not known zero; do not treat material residual as air release. | kg | each lot and configuration | complete same period including rejects/rework | declared factory and supply interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling/allocation uncertainty |
| cp_pack | dispatch | one packaging component | matched period records | species/polymer/grade; mass; reuse stock; returned quantity; shipments; configuration | Weigh each package separately and record actual reuse service/returns; exclude from machine net mass. | kg | each lot and configuration | complete same period including rejects/rework | declared factory and supply interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling/allocation uncertainty |

Actual period collection: Q is each attributable period exchange including rejects and rework; N is accepted complete machines of ONE configuration; M is the sum of calibrated accepted net masses for that configuration and period divided by N. First calculate q_item = Q/N, then q_ref = Q/sum of those accepted net masses, equivalently q_item/M. Large modules may be individually calibrated-weighed and summed for the complete configuration, matched to serial number and supply BOM; subtract temporary tools, transport supports, packaging, civil works, trial material and drained water, while including actual retained functional charge once. Do not average unlike configurations. Each normalized exchange retains its own numerator unit (kg/kg or MJ/kg), while the denominator is accepted net equipment kg.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| period_accounting | same configuration and period | Q includes attributable period rejects/rework; N is accepted complete units of one configuration; mean net mass is sum of accepted net masses/N; per-item exchange is Q/N; final per-kg exchange is Q/same accepted net mass sum. | cp_mass; cp_material; cp_energy; cp_water; cp_waste; cp_emission; cp_pack | matched period inventory |  |
| utility_residual | cp_energy | Residual = imports + actual own generation - exports - net storage increase - already assigned fabrication, casting, finishing, family assembly, testing and dispatch consumption in same period/units. Allocate residual only using measured causal drivers; investigate negative values against meter topology and combined uncertainty, never clip. Own generation has its fuel and releases separately inventoried. | cp_energy | residual utility |  |
| species_balance | physical material/species records | For each element/chemical: external inputs and opening contained stocks plus reaction formation equal contained product, scrap, slag, sludge, wastewater, actual release and closing stock plus reaction consumption; every term uses its own matched assay and wet/dry basis; cancel paired internal transfers. Gross mass is not contained species. | cp_material; cp_mass; cp_waste; cp_emission | species residual |  |
| water_balance | physical water and moisture records | Supplied water + each input own moisture + opening water stocks + reaction-generated water = retained product water + each wet waste/sludge own water + external wastewater own water + evaporation + closing water stocks + reaction-consumed water; each term uses own moisture, density and wet/dry basis; pair water returns. Investigate closure with actual combined measurement/sampling/allocation uncertainty, no universal tolerance or assumed loss. | cp_material; cp_mass; cp_water; cp_waste; cp_emission | finite water residual |  |
| solvent_balance | actual solvent species | Partition solvent inputs/opening stock into retained product, recovered solvent, capture-media content, wastewater/sludge content, closing stock, verified actual destruction and species-specific air release; capture is not destruction and unclosed residual is not automatically air. | cp_material; cp_waste; cp_emission | solvent closure |  |
| combustion_species | actual factory combustion | Fuel carbon balance constrains fossil CO2 only with own carbon composition, oxidation partition and reaction/stock evidence; CO, NO and NO2 require their own monitoring or matching actual technology factors. Preserve distinction between NOx-as-NO2 and actual NO2. | cp_energy; cp_emission | species release |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | reference | Retain actual dried material, principal function, supplied modules, make/buy, acceptance and calibrated net mass; classification title does not establish module completeness. | drawings; BOM; acceptance |
| identity | all interfaces | Each specific flow and provider requires geography, species, physical/chemical state and completed supply interface; reference UUID does not resolve other material identities. | supplier certificates; direct flow reads |
| coverage | active routes | Actual grade, formulation, medium, trial material, treatment and emissions require sufficiently specific cards/collection; disclose unknown, below-detection, not-applicable and zero distinctly. | SDS; production records |
| uncertainty | physical balances | Investigate closure using actual combined measurement/sampling/allocation uncertainty; no universal recipe, yield, energy, lifetime or empirical range. | calibration; assays; allocation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_identity | reference | Require principal drying function and complete actual supplied scope; distinguish standalone pulp/web dryer section from entire paper line, and exclude agricultural, household and centrifugal clothes families. | voith-drying; valmet-airborne; gea-chemical |
| denominator | inventory | Same-period/configuration accepted count and net mass must be positive, traceably calibrated and normalized; packaging, trial material, rejects and civil mass are outside denominator. |  |
| single_account | make/buy and utilities | Count upstream assemblies, internal transfers, supply/return steam heat, precharge and own generation once; residual and assigned loads reconcile one site period, without overlaying whole-factory meter totals. |  |
| closure | physical species records | Require each term own assay and finite water, element, solvent and release closure; investigate residual with actual combined uncertainty, no assumed air loss or destruction. |  |
| completeness | dataset | Report accepted input, performed/skipped checks, findings and completeness; missing quantity/interface/recipe or unsupported relationship is inconclusive, not validated publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground dataset-production guidance |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | declared-configuration dryer factory production and downstream process/lifecyclemodel projections with readiness disclosure |
| excluded_use | drying service or user operation; equal-function/lifetime comparison using kg equipment alone; publication claims with unresolved data |
| required_metadata | all reference qualifiers, factory period/geography, supply scope, make/buy, collection and allocation |
| required_quality_disclosure | identity/provider gaps, recipe conditions, missing empirical ranges, calibration/sampling/closure uncertainty and unknowns |
| update_trigger | change in dried material, principal function, supplied modules, alloy/recipe, heating architecture, provider, metering or evidence |

## 11. Data Sources

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| nyle-kiln-2024 | handbook | Nyle, Track Kilns Dry Kiln Packages, Track Kiln Sales Sheet Rev2024.01, PDF pp.1–3. https://nyledrykilns.com/wp-content/uploads/2024/12/NDK-Track-Kiln-Sales-Sheet-2024.pdf | wood kiln aluminum/stainless fastening/welded fan-housing/insulation and three heating options; no factory recipe or quantity |
| valmet-airborne | handbook | Valmet, Airborne Dryer, original manufacturer product page. https://www.valmet.com/pulp/pulp-drying/dryway/ | airborne pulp modules, site assembly, blow boxes and automation; no material quantities |
| voith-drying | handbook | Voith, Drying concepts, original manufacturer product page. https://www.voith.com/corp-en/papermaking/drying-concepts.html | web cylinder groups, welded steel versus cast iron, hood and stationary-siphon steam joints; performance/case claims not generic manufacturing factors |
| buhler-aerodry | handbook | Bühler, AeroDry Conveyor Dryer, original manufacturer product page. https://www.buhlergroup.com/global/en/product-families/AeroDry_Conveyor_Dryer.html | industrial polymer/synthetic-fiber applications, 304 stainless bedplates and welded modules; food/agricultural applications not admitted |
| andritz-paddle | handbook | ANDRITZ, Gouda paddle dryer, original manufacturer product page. https://www.andritz.com/products-en/spectrum/separation/contact-dryers/gouda-paddle-dryer | trough/hollow paddle shafts, 304/316 alloy, vacuum and gas-tight solvent-recovery options; reaction-principal use separately reviewed |
| feeco-rotary | handbook | FEECO, Rotary Dryers, original manufacturer product page. https://feeco.com/rotary-dryers/ | actual design/fabrication, drum/flights/supports/drive, direct/indirect and steel options; reaction-function rotary kilns counterexample |
| gea-chemical | handbook | GEA, Chemical applications: Solutions for chemical processes, footer BCH0001-EN1603; no explicit publication date, PDF pp.1–2. https://cdn.gea.com/-/media/migratedfromtridion/news/chemicalindustryseparationconcentrationcrystallizationdryingemissioncontrolpumpsvalvesvacuumejectorg.pdf?rev=9686b9c79dd7471b8149f66ba938ab4b | independent chemical spray/flash/ring/fluid-bed equipment evidence; types only, not fabrication inventory or quantities |
