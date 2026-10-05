---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fans and ventilating or recycling hoods of the domestic type

## 1. Scope and Applicability

Cradle-to-factory-gate production of complete domestic air-circulating fans (ceiling, table, pedestal, wall, tower and domestic extractor variants) and domestic ventilating/recirculating cooker hoods. Include actual metal or polymer blades, hidden impellers and delivered mounts; classify by principal domestic function and technical design, not an arbitrary power, airflow or marketing-size threshold. Industrial process fans, whole HVAC systems, primarily air-purifying appliances, heating/refrigerating appliances and separately sold spare parts need separate scope review. A hood is not excluded because it filters cooking vapours. Manufacturer examples show alternatives, not universal material recipes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type |
| classification_refs | CPC3.0:44815 |
| covered_products | Domestic fans and ducted/recirculating hoods as complete delivered appliances |
| excluded_products | Industrial process fans, complete HVAC, principal purifier/heater/cooler and separate parts pending scope review |
| representative_product | Declared single configuration; no representative model substitutes for the family |
| production_route | Purchased-component assembly or actual metal/polymer/motor manufacture, finishing, integration and test |
| market_state | Accepted complete finished appliance at manufacturing gate; shipped optional accessories disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture an accepted domestic fan or hood configuration |
| How much | 1 kg accepted net finished appliance |
| How well | Same declared BOM, complete delivered state and configuration-specific electrical/mechanical acceptance; airflow/noise/filter performance is qualifier, not production reference |
| How long or cycle | One manufacturing delivery; no assumed operating lifetime |
| reference_flow_link | finished_appliance |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fans and ventilating or recycling hoods of the domestic type `d241cf7b-4dd0-49d5-89d1-2cf1905189ce` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | domestic principal function; fan mounting/hidden impeller or hood ducted/recirculating mode; model/BOM/drawing revision; net delivered contents; installed grease/carbon filter and lighting; motor AC/DC/control technology; material grades and ABS-GF fibre loading; voltage, rated operation and acceptance test; make/buy; site/year/provider/gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| physical_basis | physical material and species records | Mass | kg | Each physical balance term has its own grade/assay/moisture and wet/dry basis; gross compound mass is not contained copper, chromium, carbon or solvent. Do not apply assays to electricity or transport. Convert liquid volume only with measured density at recorded conditions. |
| energy_basis | purchased and generated energy | Energy | MJ | Preserve electricity energy reference:1 kWh=3.6 MJ; steam energy is independently kg × specific enthalpy with a common zero and explicit gross/net supplier-return interface, not an unsupported mass-energy ratio. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received raw stock/resin or supplier-completed component; inventory actual site operations |
| starting_condition_role | Declared supplier-to-foreground interface |
| product_classification_scope | Complete domestic fans and ventilating/recirculating hoods |
| recursive_input_rule | Same-category purchased appliance/subassembly upstream once; paired internal transfer cancels without erasing rework |
| upstream_dataset_requirement | Each purchased item, treatment, transport and utility links actual provider/state/geography/year/completed operations; unknown linkage is a gap |
| disclosure | domestic principal function; fan mounting/hidden impeller or hood ducted/recirculating mode; model/BOM/drawing revision; net delivered contents; installed grease/carbon filter and lighting; motor AC/DC/control technology; material grades and ABS-GF fibre loading; voltage, rated operation and acceptance test; make/buy; site/year/provider/gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_make_buy | all processes | Make/buy matrix by configuration: complete purchased motor, populated controller, filter or lighting module carries embedded copper/steel/resin/chemicals and supplier production once. Own fabrication instead records individual feedstocks and operations; partial purchased motor identifies completed winding/lamination. Do not add embedded inputs again. Include outsourced operations and transport once. | `bosch-hood`; `panasonic-abs-gf` |
| boundary_routes | all processes | Select actual route without narrowing family: polymer or metal blade, stamped hood/canopy, axial or centrifugal impeller, guard/mount, own or bought AC/DC motor, oscillation/control, assembly/test and actual factory treatment. Air Multiplier still has a physical impeller; bladeless marketing does not remove that BOM. A hood needs its actual grease-filter technology; carbon filter enters manufacture only when actually supplied. Add every actual grade, additive, chemical, fuel, waste and species as its own atomic row. | `bosch-hood`; `panasonic-abs-gf`; `dyson-cf1` |
| boundary_downstream | all processes | Factory acceptance electricity/airflow tests belong here; rated watts, household airflow, extracted kitchen vapours/grease and consumer filter washing/replacement belong to later use. No consumer captured residue is a default factory waste. Installation ducts beyond delivered BOM, operation and end of life remain outside gate; disclose capital/maintenance policy. | `bosch-hood` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Configuration and purchased assembly receipt | required | All accepted fan and hood configurations; actual supplier interface. | Foreground production | per 1 kg reference flow |
| metal | Metal blade, guard and hood fabrication | conditional | Actual in-house metal cutting, stamping, bending, joining or machining; supplier-completed work stays upstream. | Foreground production | per 1 kg reference flow |
| plastic | Polymer blade, housing and loop moulding | conditional | Actual in-house moulding and resin compounding; purchased finished part is a different interface. | Foreground production | per 1 kg reference flow |
| motor | Motor winding and electromechanical assembly | conditional | Own motor construction only; purchased complete motor is not disassembled into duplicate raw inputs. | Foreground production | per 1 kg reference flow |
| finish | Surface preparation and finishing | conditional | Actual wash, solvent clean, powder coating, curing or outsourced finish; record exact chemistry. | Foreground production | per 1 kg reference flow |
| assembly | Fan or hood integration and acceptance | required | Actual fan impeller, guard/mount, wiring/control; hood blower, grease filter, duct/recirculation configuration, shipped optional carbon and lighting. | Foreground production | per 1 kg reference flow |
| dispatch | Packaging and factory-gate dispatch | required | Accepted net appliance, delivered accessories and separately accounted packaging. | Foreground production | per 1 kg reference flow |
| services | Residual utilities and factory treatment | required | Only unassigned attributable load after process meters, plus actual treatment exchanges. | Foreground production | per 1 kg reference flow |

### Process: Configuration and purchased assembly receipt (`receipt`)

#### Inputs

##### Product flows

###### Complete domestic fan electric motor (`purchased_motor`)

Purchased AC or DC motor with actual winding/rotor/controller boundary.

- Selected flow: Complete domestic fan electric motor
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_motor
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_motor`
- Sources:

###### Populated domestic fan control board (`purchased_controller`)

Purchased board; exclude separately embedded components from this foreground BOM.

- Selected flow: Populated domestic fan control board
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_controller
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_controller`
- Sources:

###### Finished domestic fan impeller (`purchased_impeller`)

Purchased drawing-specific blade or hidden impeller; obtain exact material and state.

- Selected flow: Finished domestic fan impeller
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_impeller
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_impeller`
- Sources:

###### Complete metal-mesh grease filter (`purchased_grease_filter`)

Only hood configuration supplied with this filter; obtain actual alloy, frame and supplier.

- Selected flow: Complete metal-mesh grease filter
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_grease_filter
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_grease_filter`
- Sources: `bosch-hood`

###### Complete activated-carbon hood filter (`purchased_carbon_filter`)

Only recirculation configuration with filter actually shipped; retail accessory is not automatically in gate BOM.

- Selected flow: Complete activated-carbon hood filter
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_carbon_filter
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_carbon_filter`
- Sources: `bosch-hood`

###### Finished domestic fan polymer housing (`purchased_housing`)

Only purchased moulded housing; embedded resin and moulding upstream once, actual resin grade disclosed.

- Selected flow: Finished domestic fan polymer housing
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_housing
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_housing`
- Sources:

###### Finished domestic cooker hood body (`purchased_hood_body`)

Only purchased body with specified material/finish; supplier forming and coating not repeated at assembly.

- Selected flow: Finished domestic cooker hood body
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_hood_body
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_hood_body`
- Sources:

###### Finished domestic fan protective grille (`purchased_guard`)

Only purchased guard in actual fan configuration; material grade and upstream operations disclosed.

- Selected flow: Finished domestic fan protective grille
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_guard
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_guard`
- Sources:

###### Complete ceiling fan mounting bracket (`purchased_mount`)

Only delivered ceiling-fan bracket; other mounting designs require their own atomic item.

- Selected flow: Complete ceiling fan mounting bracket
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_mount
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_mount`
- Sources:

###### Complete fleece grease filter (`purchased_fleece_filter`)

Alternative actual hood grease-filter technology; obtain actual fibre specification, not automatically the metal-mesh filter.

- Selected flow: Complete fleece grease filter
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_fleece_filter
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_fleece_filter`
- Sources: `bosch-hood`

###### Complete hood lighting module (`purchased_light`)

Only installed/supplied lamp module; define LED or other actual technology.

- Selected flow: Complete hood lighting module
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_light
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_light`
- Sources: `bosch-hood`

### Process: Metal blade, guard and hood fabrication (`metal`)

#### Inputs

##### Product flows

###### Stainless steel 304 sheet (`steel_sheet`)

Conditional example only if actual certificate specifies304; other grade needs its own row.

- Selected flow: Stainless steel 304 sheet
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_steel_sheet
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_sheet`
- Sources: `jrc-metalworking`

###### Aluminium 5052 sheet (`aluminium_sheet`)

Conditional metal blade or housing only when actual BOM specifies5052, not a universal fan recipe.

- Selected flow: Aluminium 5052 sheet
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_aluminium_sheet
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminium_sheet`
- Sources: `jrc-metalworking`

###### Mineral-oil straight cutting fluid (`cutting_oil`)

Only actual oil-based machining; identify supplier formulation and oil content.

- Selected flow: Mineral-oil straight cutting fluid
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_cutting_oil
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cutting_oil`
- Sources: `jrc-metalworking`

###### Alternating current (`metal_electricity`)

Adopt UUID only for actual CN1–35kV user supply; match provider/geography/year. Otherwise obtain specific electricity identity. Services row is only residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Stainless steel 304 fabrication scrap (`steel_scrap`)

Actual segregated304 scrap, mass and attached fluid measured; never assumed universal grade.

- Selected flow: Stainless steel 304 fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_steel_scrap
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_scrap`
- Sources:

### Process: Polymer blade, housing and loop moulding (`plastic`)

#### Inputs

##### Product flows

###### Glass-fibre-reinforced ABS granulate (`abs_gf`)

Actual ABS-GF blade/housing moulding; obtain grade, fibre loading and moisture certificate. Purchased compound includes glass fibres once.

- Selected flow: Glass-fibre-reinforced ABS granulate
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_abs_gf
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abs_gf`
- Sources: `panasonic-abs-gf`

###### Polypropylene granulate (`pp_resin`)

Only actual PP component; not a replacement for ABS-GF. Separate additives when compounded in house.

- Selected flow: Polypropylene granulate
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_pp_resin
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pp_resin`
- Sources: `panasonic-abs-gf`

###### Alternating current (`plastic_electricity`)

Adopt UUID only for actual CN1–35kV user supply; match provider/geography/year. Otherwise obtain specific electricity identity. Services row is only residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Glass-fibre-reinforced ABS moulding reject (`abs_scrap`)

Only external rejected ABS-GF; paired internal regrind cancels, actual repeated moulding energy remains.

- Selected flow: Glass-fibre-reinforced ABS moulding reject
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_abs_scrap
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abs_scrap`
- Sources:

### Process: Motor winding and electromechanical assembly (`motor`)

#### Inputs

##### Product flows

###### Enamelled copper winding wire (`copper_wire`)

Only actual own winding; state conductor purity, enamel system and wire certificate.

- Selected flow: Enamelled copper winding wire
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_copper_wire
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_wire`
- Sources:

###### Finished electrical-steel motor lamination (`lamination`)

Only own motor build from purchased stamped lamination; no duplicate steel stamping burden.

- Selected flow: Finished electrical-steel motor lamination
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_lamination
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lamination`
- Sources:

###### Finished ball bearing (`bearing`)

Only separately installed bearing; not an extra input for purchased complete motor.

- Selected flow: Finished ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_bearing
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bearing`
- Sources:

###### Polyester winding impregnation varnish (`varnish`)

Only actual own winding varnish; record formulation, resin solids and each solvent separately.

- Selected flow: Polyester winding impregnation varnish
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_varnish
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_varnish`
- Sources:

###### Alternating current (`motor_electricity`)

Adopt UUID only for actual CN1–35kV user supply; match provider/geography/year. Otherwise obtain specific electricity identity. Services row is only residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Surface preparation and finishing (`finish`)

#### Inputs

##### Product flows

###### Polyester powder coating (`powder`)

Only actual polyester powder route; record exact formulation and internal overspray return.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_powder
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder`
- Sources:

###### Isopropanol cleaning solvent (`ipa`)

Only actual IPA cleaning; concentration and wet/dry basis measured for all balance terms.

- Selected flow: Isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_ipa
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa`
- Sources:

###### Process water supplied to washing (`water`)

Only actual wash; record supplier quality and source; loop circulation is not repeated purchase.

- Selected flow: Process water supplied to washing
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Alternating current (`finish_electricity`)

Adopt UUID only for actual CN1–35kV user supply; match provider/geography/year. Otherwise obtain specific electricity identity. Services row is only residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Spent isopropanol cleaning solution (`solvent_waste`)

Actual off-site waste, concentration/water measured; different from recovered reusable solvent.

- Selected flow: Spent isopropanol cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_solvent_waste
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent_waste`
- Sources:

###### Surface-cleaning wastewater (`wastewater`)

Actual discharge/treatment interface; each dissolved species quantified separately, no automatic elementary water release.

- Selected flow: Surface-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_wastewater
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources:

##### Elementary flows

###### Isopropanol released to air (`ipa_air`)

Only actual species-specific monitored or verified solvent balance release; unexplained residual is not an air emission.

- Selected flow: Isopropanol released to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_ipa_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa_air`
- Sources:

### Process: Fan or hood integration and acceptance (`assembly`)

#### Inputs

##### Product flows

###### Complete insulated copper power cord (`cord`)

Actual delivered cord; embedded copper and insulation counted through provider once.

- Selected flow: Complete insulated copper power cord
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_cord
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cord`
- Sources:

###### Steel fastening screw (`screw`)

Actual separately fitted screw with coating/specification.

- Selected flow: Steel fastening screw
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_screw
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_screw`
- Sources:

###### Alternating current (`assembly_electricity`)

Adopt UUID only for actual CN1–35kV user supply; match provider/geography/year. Otherwise obtain specific electricity identity. Services row is only residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Packaging and factory-gate dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard carton (`carton`)

Actual dispatch carton; separate from accepted appliance mass.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_carton
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton`
- Sources:

###### Polyethylene packaging film (`film`)

Actual packaging film grade/mass.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_film
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_film`
- Sources:

###### Alternating current (`dispatch_electricity`)

Adopt UUID only for actual CN1–35kV user supply; match provider/geography/year. Otherwise obtain specific electricity identity. Services row is only residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Fans and ventilating or recycling hoods of the domestic type (`finished_appliance`)

Accepted complete same-configuration appliance, delivered accessories included; packaging and rejected product excluded from denominator.

- Selected flow: Fans and ventilating or recycling hoods of the domestic type `d241cf7b-4dd0-49d5-89d1-2cf1905189ce`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

### Process: Residual utilities and factory treatment (`services`)

#### Inputs

##### Product flows

###### Alternating current (`services_electricity`)

Adopt UUID only for actual CN1–35kV user supply; match provider/geography/year. Otherwise obtain specific electricity identity. Services row is only residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Purchased saturated steam (`steam`)

Only actual imported steam; record pressure, temperature, quality, supplier and gross/net enthalpy interface.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_steam
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources:

###### Natural gas supplied to curing furnace (`natural_gas`)

Only actual site combustion; measure composition, dry standard-volume conditions and LHV.

- Selected flow: Natural gas supplied to curing furnace
- Flow property / unit: Energy / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_gas
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

#### Outputs

##### Waste flows

###### Surface-cleaning treatment sludge (`sludge`)

Actual sludge with its own moisture and species assays and treatment provider.

- Selected flow: Surface-cleaning treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_sludge
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sludge`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide released to air (`co2_air`)

Actual site fossil combustion with fuel-carbon assay and measured other carbon sinks.

- Selected flow: Fossil carbon dioxide released to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_co2_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources:

###### Carbon monoxide released to air (`co_air`)

Only actual combustion species-specific concentration and dry flow evidence; carbon closure alone insufficient.

- Selected flow: Carbon monoxide released to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_co_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co_air`
- Sources:

###### Nitrogen dioxide released to air (`no2_air`)

Only species-resolved evidence; NOx-as-NO2 is not proof of actual molecularNO2.

- Selected flow: Nitrogen dioxide released to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_no2_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no2_air`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_causal | all processes | Separate configurations and actual processes first. Assign direct BOM, work orders and process meters; allocate only measured shared residual by documented causal driver such as process time/load. Accepted mass normalizes a fixed configuration; it does not justify mixing fan and hood models. Retain rejection/rework burdens. |  |
| allocation_scrap | physical residue records | Measure segregated scrap and actual destination/provider. Internal recycling is paired transfer, not a new coproduct credit. Distinguish waste treatment from a genuine sold coproduct; justify any allocation and recycling convention, show pre-allocation balance, never assume avoided virgin material credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | finished_appliance | weighing | model; configuration; serial number; accepted net mass M; accepted count N; total accepted net mass D | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. Include delivered accessories; exclude reject mass. | kg | each accepted unit | same production period | declared configuration/site | per 1 kg reference flow | calibration; BOM; acceptance register; tare record |
| cp_abs_gf | plastic | abs_gf | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_abs_scrap | plastic | abs_scrap | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_aluminium_sheet | metal | aluminium_sheet | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_bearing | motor | bearing | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_carton | dispatch | carton | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_co2_air | services | co2_air | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Species-specific sampling, calibrated concentration and synchronized dry exhaust/discharge flow with time integration and actual abatement; for CO2 include fuel-carbon balance and measured non-CO2 sinks. Do not derive CO/NO2 from fuel carbon alone. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_co_air | services | co_air | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Species-specific sampling, calibrated concentration and synchronized dry exhaust/discharge flow with time integration and actual abatement; for CO2 include fuel-carbon balance and measured non-CO2 sinks. Do not derive CO/NO2 from fuel carbon alone. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_copper_wire | motor | copper_wire | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_cord | assembly | cord | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_cutting_oil | metal | cutting_oil | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_energy | metal | metal_electricity, plastic_electricity, motor_electricity, finish_electricity, assembly_electricity, dispatch_electricity, services_electricity | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Read synchronized process and site import/generation/export/storage meters; services receives only unassigned residual; record voltage, country/year and provider. Convert kWh to MJ using3.6. | MJ | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_film | dispatch | film | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_gas | services | natural_gas | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Calibrated gas meter with pressure/temperature/water correction and batch composition/LHV; match fossil carbon and supplier reference. | MJ | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_ipa | finish | ipa | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_ipa_air | finish | ipa_air | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Species-specific sampling, calibrated concentration and synchronized dry exhaust/discharge flow with time integration and actual abatement; for CO2 include fuel-carbon balance and measured non-CO2 sinks. Do not derive CO/NO2 from fuel carbon alone. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_lamination | motor | lamination | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_no2_air | services | no2_air | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Species-specific calibrated molecular NO2 concentration and synchronized dry exhaust flow, integrated over time with actual abatement. If the instrument reports total NOx expressed as NO2-equivalent, retain that exact basis and obtain a separate compatible NOx exchange; do not label it as actual molecular NO2 or assume a NO/NO2 split. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_powder | finish | powder | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_pp_resin | plastic | pp_resin | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_carbon_filter | receipt | purchased_carbon_filter | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_controller | receipt | purchased_controller | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_fleece_filter | receipt | purchased_fleece_filter | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_grease_filter | receipt | purchased_grease_filter | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_guard | receipt | purchased_guard | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_hood_body | receipt | purchased_hood_body | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_housing | receipt | purchased_housing | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_impeller | receipt | purchased_impeller | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_light | receipt | purchased_light | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_motor | receipt | purchased_motor | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_purchased_mount | receipt | purchased_mount | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_screw | assembly | screw | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_sludge | services | sludge | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_solvent_waste | finish | solvent_waste | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_steam | services | steam | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Independently meter supply steam kg and its specific enthalpy MJ/kg from actual pressure/temperature/quality; independently meter returned condensate kg and its own specific enthalpy MJ/kg on the same zero datum. For a gross supplier interface, net imported energy equals supply kg × supply MJ/kg minus return kg × return MJ/kg, deducting return once. For an already-net supplier energy interface, use that net value once without another return subtraction; retain both measurements for reconciliation. | MJ | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_steel_scrap | metal | steel_scrap | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_steel_sheet | metal | steel_sheet | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_varnish | motor | varnish | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_wastewater | finish | wastewater | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |
| cp_water | finish | water | meter_or_record | period; configuration; batch; provider; raw quantity Q; unit; stock; returns; calibration; assay; moisture; density; uncertainty | Reconcile receipts, opening/closing stocks, returns and work-order issues or calibrated flow/mass meters; sample actual grade, moisture, assay and liquid density where applicable; identify external treatment/provider. | kg | each lot or continuous meter | same production period | declared configuration/site | per 1 kg reference flow | traceable original records; synchronized period; calibration and sample uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_denominator | all inventory rows | D is the sum of calibrated accepted net masses for one configuration and period; N is accepted count; M=D/N. Q is attributable exchange quantity including reject/rework burden, excluding paired internal transfers. First q_item=Q/N; then q_ref=Q/D=q_item/M. Never average across configurations or include packaging/rejected mass in D. | Q; N; D; cp_mass | per 1 kg reference flow |  |
| utility_reconcile | physical utility meter records | For each same-period/unit site balance, available=imports+actual generation-exports-storage increase, adjusted for measured return/recovery interface; residual=available-sum already assigned process consumption. Allocate only residual causally; never add site total on top of submeters. Investigate negative residual using synchronization, units and combined measurement uncertainty; do not clip. In-house energy uses actual fuel/emissions and internal output, without duplicating purchased power. | imports; generation; exports; storage; assigned meters | reconciled residual |  |
| water_balance | physical water records | Water entering plus opening water stocks plus reaction formation equals water in product, wet scrap/sludge/wastewater, measured evaporation, closing stocks and reaction consumption. Use each term own moisture and basis, paired internal return/circulation cancellation. Unknown residual stays a gap; investigate combined sampling/meter/allocation uncertainty, no universal tolerance. | water; moisture; stocks; reactions; returns | water closure |  |
| species_balance | physical material and species records | For each actual contained Cu/Fe/Cr/Ni/Al/carbon or chemical species use that term own matched assay and wet/dry basis in feed, accepted product, scrap, sludge, wastewater and releases, including stocks/reactions and paired transfers. Gross stainless/ABS-GF/wire mass does not equal contained element; provider-embedded purchased components are not repeated foreground feeds. | term-specific mass; assay; moisture; stocks; reactions | species closure |  |
| solvent_balance | physical solvent records | Actual solvent input plus opening stock/reaction formation equals retained product, recovered usable solvent, solvent in spent liquid/capture media, verified actual destruction, measured air/water release, closing stocks/reaction consumption. Capture is not destruction; unknown residual cannot become air release. Measure solvent concentration separately in each term and investigate uncertainty. | solvent quantities; own concentrations; capture; destruction; stock | solvent closure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | all processes | Configuration-specific actual make/buy and material specification; none of these conditional exemplars establishes a factory recipe. Distinguish measured zero, not applicable and unknown. | BOM; supplier certificates; work orders |
| dq_sources | all processes | Examples do not supply intensity ranges. Complete temporal/spatial/technological coverage and uncertainty; any unsupported UUID/provider/range remains explicit before dataset use. | Actual site meters and supplier data |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all processes | Require every qualifier, atomic flow identity, actual provider and finished physical configuration; unresolved input identity is not a zero amount. Full category output UUID does not imply all models share a BOM. |  |
| validate_scope | all processes | Audit purchased versus own motor/controller/filter routes and embedded burdens once; shipped optional carbon/lighting confirmed; downstream cooking pollutants and operating watts never substituted for factory production. | `bosch-hood`; `panasonic-abs-gf`; `dyson-cf1` |
| validate_mass | physical balances | Verify same configuration D, accepted N, calibrated net M, period Q/N then Q/D, all own-term water/species/solvent balances, stocks/reactions/returns and measured uncertainty. Investigate unexplained residuals, missing inputs and assay mismatches; no invented yield or tolerance. |  |
| validate_utilities | utility and emission records | Reconcile same-period process and residual loads with import/generation/export/storage, actual steam energy interface and return once; verify species/compartment-specific emissions and treatment. Negative residuals or unknown closure block dataset completeness until investigation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Production of the explicitly declared domestic appliance configuration at gate |
| excluded_use | Whole-life comparison, default household power/lifetime, unsupported model or principal industrial/purifier/HVAC substitution |
| required_metadata | domestic principal function; fan mounting/hidden impeller or hood ducted/recirculating mode; model/BOM/drawing revision; net delivered contents; installed grease/carbon filter and lighting; motor AC/DC/control technology; material grades and ABS-GF fibre loading; voltage, rated operation and acceptance test; make/buy; site/year/provider/gate |
| required_quality_disclosure | Provider gaps; make/buy; omitted exchanges; uncertainty; period; allocation; boundary and unresolved UUID/ranges |
| update_trigger | BOM/motor/filter/material or process/provider change; new measured data; scope review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bosch-hood | handbook | Bosch, Operating and installation instructions, document9000022567, undated: https://media3.bosch-home.com/Documents/9000022567_A.pdf | Pages2–4: actual domestic ducted/recirculating architecture, conditional grease/carbon filters and lighting; older multi-model example, no factory factor |
| panasonic-abs-gf | handbook | Panasonic Malaysia, F-M96JHVBWH product page, undated: https://fan.my.panasonic.com/ceiling-fan/ceilingfan-F-M96JHVBWH | Features: glass-fibre-reinforced ABS blades, DC motor and control counterexample; no fibre fraction or recipe |
| dyson-cf1 | handbook | Dyson, Cool CF1 White/Silver product page: https://www.dyson.com/air-treatment/fans-heaters/cool-cf1/white-silver | Airfoil-shaped ramp/Brushless DC motor body: physical impeller in marketed bladeless fan; actual public-rendered body inspected, original download unavailable; no numerical factor adopted |
| jrc-metalworking | official_guidance | European Commission JRC, EUR30025 EN,2020, DOI10.2760/894966: https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Printed page190: actual machining-fluid function/formulation and route-dependent selection; not a domestic fan intensity dataset |
