---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.caravan-trailer
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hardwall touring caravan trailer manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete hardwall drawbar-towed touring caravan trailers with declared fixed habitation, narrower than CPC3.0 49222. Exclude fifth-wheel semi-trailers, self-propelled motorhomes/campervans, tent/pop-up trailers, static buildings, cargo/utility/agricultural trailers, separately traded chassis/body/spares and refurbishment. Each actual chassis, panel, berth, plumbing/appliance/battery option configuration is modelled separately. Include actual site fabrication, body-panel bonding, cabinetry, shell/rolling-gear assembly, fixed fit-out, factory trials and attributable rework/wastes. Exclude towing vehicle production/use, road travel, campsite occupancy, customer utilities and maintenance, assumed service life and disposal. No accommodation-night or towing-distance functional unit is supplied. Throughout the PCR one accepted finished unit means one complete configured trailer, with Chinese 设备 carrying the same meaning.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.caravan-trailer |
| classification_refs | CPC3.0 49222; narrower product context, not an accepted mapping |
| covered_products | Complete hardwall drawbar touring caravan trailers with configured fixed habitation |
| excluded_products | Fifth-wheel/semi-trailers, motorhomes/campervans, tent/pop-up and cargo/agricultural trailers, static buildings, spares and refurbishment |
| representative_product | One complete accepted clean empty configured caravan trailer |
| production_route | Receive actual stock or finished chassis/panels; conditional chassis, sandwich-panel and furniture fabrication; rolling chassis/shell assembly; fixed habitation fit-out; actual factory trials, drainage and acceptance |
| market_state | New accepted clean empty trailer with installed habitation, actual fitted battery/options and declared retained service fluids; water tanks/heater drained, LPG bottle/fuel and loose gear excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the configured complete accepted hardwall drawbar touring caravan trailer |
| How much | 1 kg of the same complete accepted configured unit using measured net mass M |
| How well | Meet actual drawings and configuration-specific signed acceptance criteria for coupling/axle/wheels/braking, shell joints and drainage, installed furniture/openings, road lights, electrical insulation/earthing, plumbing tightness and each actual appliance check. Record conditions, instruments, duration and results. Prototype cold-chamber ratings, catalogue payload, warranties and regulatory references in a brochure are not prescribed factory limits or manufacturing amounts. |
| How long or cycle | One manufacturing delivery; no assumed towing or camping service life |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Trailers and semi-trailers of the caravan type, for housing or camping `fc37f9b4-d36f-4b33-8cf1-ac2d4af0800e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/serial/batch; drawbar/hardwall status; axle count, chassis/coating/coupling/brake supplier gates; shell skin/core/frame/bond/floor composition and geometry; berth layout and actual installed furniture/bedding; plumbing/appliances, battery and options; supplier module inclusions; retained service fluids; clean empty state, tank/heater drainage and no LPG bottle/fuel; measured M; actual factory/site/period/route/test and protective delivery scope |

Weigh the same complete accepted clean empty unit on calibrated scales. Installed habitation, actual installed battery and accessories and declared retained service fluids are included; persons, towing vehicle, payload, loose camping equipment, LPG bottle/fuel, handling fixtures and shipping protection are excluded. Water and heater tanks are drained after factory testing. Catalogue MRO, MTPLM, personal-effects or battery/LPG allowances are not M; brochure empty-state and loose-item boundaries differ. Kilogram normalization does not establish equal berth capacity, towing performance or accommodation comfort. The broad public finished-product name is narrowed by these qualifiers and does not admit semi-trailers or other excluded variants.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter unit; convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Do not interpret the electricity property name as a combustion inventory. |
| `volume_units` | groundwater rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain measured volume and its conditions; do not invent gas density, water density or calorific value to switch to mass or energy. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `tyre_count_units` | tyre | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count actual installed compatible trailer tyres per accepted unit through cp_assembly. Retain the public count reference property and normalize q_item/M to Item(s) per kg of trailer. Separately measured tyre mass supports physical mass reconciliation only, not a public-property rewrite. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials and configured components received at declared supplier gates, with no implicit upstream steelmaking or component fabrication in foreground |
| starting_condition_role | Manufacturing input boundary for an accepted complete unit |
| product_classification_scope | Complete hardwall drawbar touring caravan trailers within broader CPC49222 context |
| recursive_input_rule | A purchased complete unit used as an input is a separately declared upstream product. Do not recursively regenerate this category; distinguish new production from refurbishment. |
| upstream_dataset_requirement | Link input-specific upstream datasets matching material, finished-component gate, geography, voltage and treatment state. Missing links remain disclosed coverage gaps. |
| disclosure | Report foreground factory stages, outsourced operations, component content, incoming transport coverage, protective packaging gate, capital-equipment policy and every exclusion; no complete cradle-to-gate claim without verified upstream and logistics closure. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | Include every actual operation and attributable rework from declared received inputs through factory acceptance; distinguish purchased parts from site fabrication to prevent duplication. Use documented route records. |  |
| `conditional_fabrication` | fabrication | Activate only documented chassis/panel/furniture fabrication and actual material/adhesive recipes. Manufacturer examples establish possible architecture and alternatives, not universal site routes or formulations. |  |
| `exclude_customer_camping` | camping_service | Exclude towing vehicle, road journeys, customer camping and accommodation service, utilities and maintenance/disposal. Include actual factory trials and their individually identified materials, energy, wastewater and measured emissions; appliance firing occurs only if recorded. |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `empty_delivery_configuration` | reference | Actual fitted battery and installed accessories are included in measured M; catalogue battery allowances are not measurements. Drain water/heater/toilet tanks and exclude LPG cylinder/fuel, loose hook-up leads, steps and camping equipment. Separately supplied items require separate product inventory rather than hidden inclusion in vehicle M. Disassembled delivery requires calibrated component-mass reconciliation to the same complete accepted configuration. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Optional chassis stock fabrication | conditional | Only actual site stock fabrication; exclude parts already in purchased chassis | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `panels` | Conditional sandwich-panel cutting and bonding | conditional | Only actual site fabrication of specified panels; purchased finished panel constituents excluded | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `cabinetry` | Conditional furniture-board fabrication | conditional | Only actual site furniture fabrication; purchased finished cabinets exclude supplier cutting | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `assembly` | Rolling chassis and habitation shell assembly | required | Every accepted complete trailer; activate only actual installed supplied modules | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `fitout` | Configured fixed habitation fit-out | required | Every complete accepted trailer; individual appliance rows only when actually installed | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `acceptance` | Factory acceptance and net-mass determination | required | Every accepted complete trailer; tests, water, firing and emissions only under actual recorded conditions | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `packaging` | Shipment protection at factory gate | conditional | Only when actual shipment protection is within the declared gate | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |

Process records are separate contributors to one final accepted output, not seven separately traded reference products. Retain traceable internal-part transfer and bill-of-material records; internal transfers cancel within this foreground and do not receive duplicated upstream burdens. The cards below are explicit route-conditioned exchanges. Add each actual additional part, chemical, fuel, packaging piece, wastewater stream or measured elementary substance as its own identified row; absence of a card is not a cut-off permission. For outsourced chassis, panel or furniture manufacture, replace corresponding site materials and energy with the exact purchased component or service record and disclose its supplier gate.

### Process: Optional chassis stock fabrication (`forming`)

#### Inputs

##### Product flows

###### Cold-formed non-alloy steel caravan chassis channel (`steel_channel`)

Only actual stock fabricated on site; record grade, gauge, zinc/surface state and weighed issue less unused return. A purchased finished galvanized chassis excludes this constituent input and its supplier fabrication. Galvanizing performed on site requires its own full atomic route, not an assumed coating allowance.

- Selected flow: Cold-formed non-alloy steel caravan chassis channel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Solid carbon-steel welding wire (`solid_wire`)

Only actual qualified welding of chassis brackets; record wire designation, chemistry and weighed spool consumption. Flux-cored wire is a different identity and no welding route is prescribed for a purchased bolted chassis.

- Selected flow: Solid carbon-steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Pure argon welding gas (`argon`)

Only actual pure argon delivered in the documented welding route, measured by cylinder net mass. Mixed shielding gas and liquid argon are different supplied states; collect them separately if present.

- Selected flow: Pure argon welding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Alternating current (`forming_electricity`)

Meter actual stock cutting, drilling and welding plus attributable extraction. Identity applies only to purchased user-side grid-average1–35kV supply. Internal low-voltage circuits are not additional purchased energy. Other voltage, own solar generation and contracted renewable supply need their own applicable identity and coverage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_offcut`)

Only segregated untreated post-industrial steel offcuts exported from actual site fabrication; weigh and record alloy/coating fractions and destination. Internal recirculation and oily swarf are not this exported waste.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

### Process: Conditional sandwich-panel cutting and bonding (`panels`)

#### Inputs

##### Product flows

###### Finished glass-fibre-reinforced polyester caravan panel skin sheet (`grp_skin`)

Only actual supplier-confirmed cured polyester GRP sheet for onsite panel fabrication; record resin, glass reinforcement, surface finish, geometry and issued mass. Swift supports GRP architecture, not polyester chemistry. Raw glass fibre or plate glass is not the finished composite sheet; supplier resin curing is outside this gate.

- Selected flow: Finished glass-fibre-reinforced polyester caravan panel skin sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`
- Sources: `swift-caravans-2026`

###### Finished expanded-polystyrene rigid caravan insulation board (`ps_core`)

Only actual supplier-confirmed EPS board; record polymer, additives, expansion state, dimensions, density evidence and mass. The brochure specifies polystyrene, not universally EPS versus XPS. Purchased sandwich walls already include their cores; do not duplicate.

- Selected flow: Finished expanded-polystyrene rigid caravan insulation board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`
- Sources: `swift-caravans-2026`

###### Finished hard-polyurethane caravan body framing profile (`pu_frame`)

Only installed actual supplier-confirmed hard-PU framing profiles used in onsite panel build. Record composition, fillers, geometry and mass; do not identify a hard structural product as unspecified soft foam or prescribe all caravans as timberless.

- Selected flow: Finished hard-polyurethane caravan body framing profile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`
- Sources: `swift-caravans-2026`

###### Water-based polyvinyl-acetate dispersion panel adhesive (`pvac_adhesive`)

Only an actual qualified PVAc formulation confirmed by supplier/SDS and joint records; record supplied wet mass, solids, additives and water fraction, issue less return. Bailey supports water-based panel adhesive, not PVAc resin or mandatory recipe. A two-component PU adhesive needs separate component rows; no substitution.

- Selected flow: Water-based polyvinyl-acetate dispersion panel adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`
- Sources: `bailey-manufacturing`

###### Alternating current (`panel_electricity`)

Meter actual cutting, adhesive application, press/vacuum equipment and electrically controlled curing; record time/temperature and actual recipe. No water-jet, heated press, GRP molding or generic curing energy is mandatory from architecture evidence.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`

#### Outputs

##### Waste flows

###### Segregated dry expanded-polystyrene board cutting waste (`eps_offcut`)

Only actual segregated characterized EPS offcuts exported untreated; weigh and identify coating/glue contamination and destination. Mixed bonded panel scrap is different.

- Selected flow: Segregated dry expanded-polystyrene board cutting waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`

###### Cured glass-fibre-reinforced polyester sheet cutting waste (`grp_offcut`)

Only segregated waste of the same characterized cured sheet; weigh and identify resin, glass and surface constituents and treatment. It is a waste transfer, not inevitable styrene or air particulate emission.

- Selected flow: Cured glass-fibre-reinforced polyester sheet cutting waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`

###### Uncured aqueous polyvinyl-acetate adhesive residue waste (`adhesive_residue`)

Only actual separately collected residue of the declared adhesive; weigh supplied-state wet waste, characterize solids and identify treatment. Cured adhesive bonded to panels is part of installed mass or a separate composite-waste stream.

- Selected flow: Uncured aqueous polyvinyl-acetate adhesive residue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_panels.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_panels`

### Process: Conditional furniture-board fabrication (`cabinetry`)

#### Inputs

##### Product flows

###### Paper-faced plywood caravan furniture board (`furniture_board`)

Only actual specified plywood with decorative paper facing; record species, ply/resin/face construction, moisture and issue less returns by mass. Bailey supports paper-coated furniture plywood but not bamboo, tropical timber or generic particleboard substitution. Purchased complete cabinets already include this material.

- Selected flow: Paper-faced plywood caravan furniture board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabinetry.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabinetry`
- Sources: `bailey-manufacturing`

###### Alternating current (`cabinet_electricity`)

Meter actual furniture-board cutting, routing, edge fabrication and captured-dust extraction with the stated purchased-energy condition. Record tools and issue/return; outsourced finished furniture excludes this supplier operation from site foreground.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabinetry.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabinetry`

#### Outputs

##### Waste flows

###### Segregated paper-faced plywood furniture-board offcut waste (`plywood_offcut`)

Weigh separately collected characterized offcuts and record paper, wood, binder and contamination/destination. Do not call the composite pure wood or elementary dust; captured fine dust and mixed panel waste require their own rows.

- Selected flow: Segregated paper-faced plywood furniture-board offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabinetry.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabinetry`

### Process: Rolling chassis and habitation shell assembly (`assembly`)

#### Inputs

##### Product flows

###### Complete galvanized-steel drawbar caravan chassis (`chassis`)

One actually purchased finished configured chassis; record steel/zinc finish, geometry, mass and axle/coupling/stabilizer content. Supplier fabrication/galvanizing is not site foreground. Constituents included here are not counted in separate modules or stock. A powered-truck chassis is not a proxy.

- Selected flow: Complete galvanized-steel drawbar caravan chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Trailer axle (`axle`)

This row is restricted to an actual complete braked torsion trailer axle with documented module contents. Only actual separately supplied trailer axle outside the purchased chassis; declare housing, suspension elastomers, hub/bearing/brake contents, mass and count. Other leaf-spring/air-suspension types need distinct module rows; no universal axle count assumed.

- Selected flow: Trailer axle `e1bf60f6-8831-49e2-ad46-9bad63ff50a3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete mechanical overrun-brake caravan towing coupling (`coupler`)

Only actual supplied drawbar coupling outside chassis/axle modules; record tow-ball interface, overrun mechanism, breakaway/parking linkage and measured mass. These functions define one configured physical assembly, not separate duplicated exchanges.

- Selected flow: Complete mechanical overrun-brake caravan towing coupling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Tire (`tyre`)

Only actual finished new pneumatic rubber trailer tyres compatible with this public other-new-tyre class. Record compound, reinforcement, dimensions, load/rating and physical installed count; count q_item in Item(s) per accepted unit, normalize q_item/M and retain the public Number of items property. Measure tyre net mass separately for installed-mass reconciliation, excluding rim. Uncured passenger-car tyres, waste tyres and rubber powder are not substitutes.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished steel caravan trailer wheel rim (`rim`)

Only actually supplied steel rim with coating, dimensions and net mass recorded; tyres and hubs are outside this single physical part unless a complete wheel module is explicitly used instead.

- Selected flow: Finished steel caravan trailer wheel rim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished GRP-skinned polystyrene-core caravan wall sandwich panel (`wall`)

One actual supplied finished bonded wall panel; record exact resin/skin, core polymer/expansion state, frame, adhesive, surface and module mass. Upstream constituents/curing are excluded from duplicate site inputs. Other material skins and cores need different physical rows.

- Selected flow: Finished GRP-skinned polystyrene-core caravan wall sandwich panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `swift-caravans-2026`

###### Finished GRP-skinned polystyrene-core caravan roof sandwich panel (`roof`)

One actual supplied roof panel with verified skin/core/frame/bond composition, openings and mass. Installed vents and roof-mounted accessories are separate unless included in module records. Do not repeat constituent stock or infer generic reinforcement.

- Selected flow: Finished GRP-skinned polystyrene-core caravan roof sandwich panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `swift-caravans-2026`

###### Finished plywood-faced GRP-backed caravan insulated floor panel (`floor`)

One actual finished supplied floor; declare plywood species/binder, GRP resin, supplier-confirmed insulation polymer, frame/bonding and mass. Swift floor brand is not assigned PU or XPS chemistry from an ambiguous name. No generic thickness or density factor.

- Selected flow: Finished plywood-faced GRP-backed caravan insulated floor panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `swift-caravans-2026`

###### Single-component silane-modified-polymer caravan joint sealant (`sealant`)

Only actual supplier-qualified SMP sealant, with binder/additives, cartridge issue less return, cured retention and waste documented. Architecture does not mandate SMP; silicone, butyl tape and multi-component products require separate identities.

- Selected flow: Single-component silane-modified-polymer caravan joint sealant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete double-glazed acrylic caravan window (`window`)

Only actual installed supplier-confirmed PMMA window assembly; record glazing/frame/seal/hardware composition, geometry and net mass. Safety glass, polycarbonate and a raw acrylic sheet do not represent this finished module.

- Selected flow: Complete double-glazed acrylic caravan window
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete insulated caravan entrance door (`door`)

One actually installed configured door with skin/core/frame, glazing, locks and hinges declared and mass measured. Complete door inputs include these constituents; do not repeat them in material or window rows.

- Selected flow: Complete insulated caravan entrance door
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_electricity`)

Meter chassis, shell, floor, roof and opening installation tools, presses and attributable lifts/utilities with the stated purchased condition. Include attributable rework and document moisture/joint acceptance.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

### Process: Configured fixed habitation fit-out (`fitout`)

#### Inputs

##### Product flows

###### Complete paper-faced plywood caravan kitchen cabinet (`cabinet`)

One actual configured supplied finished cabinet; record plywood species, paper, binder, fittings, dimensions and mass. Do not duplicate its furniture-board constituents or supplier cutting energy. Other fitted wardrobes need distinct rows.

- Selected flow: Complete paper-faced plywood caravan kitchen cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Complete polyurethane-foam caravan mattress (`mattress`)

Only actual installed finished mattress whose foam, cover and reinforcement composition is verified; record delivered dimensions and mass. Brand or berth count does not identify PU chemistry. Detachable camping mattresses not in the accepted installed configuration are excluded from M.

- Selected flow: Complete polyurethane-foam caravan mattress
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships (`harness`)

Use the other-vehicle-wiring portion of the public category for one actual supplied non-ignition caravan wiring harness; declare conductor, insulation, connectors, circuits, road-light/control content and measured mass. Retain the official Chinese name; no ignition or engine system required. Wiring already inside complete appliances is excluded.

- Selected flow: Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Complete sealed AGM lead-acid caravan auxiliary battery (`battery`)

Only actual installed supplier-confirmed absorbed-glass-mat sealed lead-acid battery; record model, capacity, filled state, mass and enclosure boundary. No catalogue battery allowance is mass evidence. Lithium packs and flooded starter batteries need distinct identities; prefilled electrolyte is not counted twice.

- Selected flow: Complete sealed AGM lead-acid caravan auxiliary battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Complete caravan mains power supply and battery charger (`charger`)

One actual combined physical supplied power unit, not a list of alternatives; declare installed converter/charger, circuit boards, enclosure, control/wiring boundary and measured mass. Separate standalone converters or controllers require their own rows.

- Selected flow: Complete caravan mains power supply and battery charger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Complete electric-compressor caravan refrigerator (`fridge`)

Only actual installed electric-compressor unit; record model, insulation, delivered mass, compressor and refrigerant species/charge/boundary. Factory-filled refrigerant is inside this finished product, not a duplicate raw input or inevitable emission. Absorption/LPG refrigerator is a different route.

- Selected flow: Complete electric-compressor caravan refrigerator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Complete electric caravan water heater (`water_heater`)

Only actual installed electric heater; declare vessel, element, control, pipe/fitting boundary and delivered drained mass. Gas-fired or combined products need distinct module identity. Retained service glycol is declared separately only if not already included.

- Selected flow: Complete electric caravan water heater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Complete propane caravan cooking hob (`hob`)

Only actual installed supplier-confirmed propane-compatible cooking appliance; record burners, regulator/control inclusion, mass and acceptance mode. Natural-gas and electrically heated hobs are different. Fuel is not part of the delivered empty reference state.

- Selected flow: Complete propane caravan cooking hob
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Finished stainless-steel caravan kitchen sink (`sink`)

Only actual specified sink with steel grade, surface, drain/fitting boundary and measured mass. Integrated purchased kitchen modules already including it exclude this separate row.

- Selected flow: Finished stainless-steel caravan kitchen sink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Finished polyethylene caravan fresh-water tank (`tank`)

Only actual installed PE tank; record polymer grade, molded state, capacity, cap/valve boundary and drained net mass. Waste-water tanks are separate products. Water used in testing is not part of empty tank mass.

- Selected flow: Finished polyethylene caravan fresh-water tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Finished polyethylene caravan potable-water pipe (`water_pipe`)

Only actual separately supplied PE tubing with resin, dimensions and weighed installed mass; fittings and pumps require separate rows. Do not include it again if already inside a complete water-system module.

- Selected flow: Finished polyethylene caravan potable-water pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Finished copper caravan propane pipe (`gas_pipe`)

Only actual supplied copper gas pipe outside appliances; record alloy, dimensions, surface and installed mass. Complete regulator, hose and fittings need distinct identities. Factory gas test consumption is not pipe material.

- Selected flow: Finished copper caravan propane pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Complete caravan cassette toilet (`toilet`)

One actual installed finished cassette system; declare bowl/cassette, polymer, pump, seals and wiring contents, drained delivered mass. No toilet chemicals or waste assumed at delivery; actual factory test media require their own rows.

- Selected flow: Complete caravan cassette toilet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

###### Alternating current (`fitout_electricity`)

Meter actual fixed-furniture, bedding, wiring, plumbing and appliance installation under the declared purchased energy condition; include attributable leak repair and rejects. Purchased finished appliances retain their supplier gate.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fitout.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fitout`

### Process: Factory acceptance and net-mass determination (`acceptance`)

#### Inputs

##### Product flows

###### Process Water (`supplied_water`)

Only purchased treated process water actually issued for factory water/plumbing tests and cleanup; measure supplied mass, treatment state and unused return. Not a resource abstraction; do not count supplier water extraction again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Propane (`propane`)

Only actual fossil-origin propane supplied in liquefied state from cylinders for recorded factory appliance firing tests; collect net cylinder-mass consumption, composition, returned/retained gas and time. Do not substitute unspecified LPG or natural gas. Empty reference excludes bottle/fuel; pressure-only or electric acceptance has no prescribed fuel consumption. Supplier-confirmed fossil composition and liquid delivery state are required; no density or standard assertion is inferred from a public candidate.

- Selected flow: Propane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Alternating current (`test_electricity`)

Meter actual factory lights, insulation/earthing, charger/battery, water pump/heater, refrigerator, leak-test equipment and adjustment/rework. Record actual installed configuration, test time, initial/final battery charge and heater water drainage. Brochure current or power is not energy. Camping hook-up electricity and towing vehicle are outside the manufacturing gate.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

##### Elementary flows

###### ground water (`well_water`)

Only direct site groundwater abstraction actually used for factory tests; meter gross m3 and identify well/country, Resources / Resources from water / Renewable material resources from water. Do not also count this same water as purchased process water. No compulsory well or scarcity claim.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Trailers and semi-trailers of the caravan type, for housing or camping (`finished_machine`)

One kilogram of the same complete accepted clean empty configured hardwall drawbar touring caravan trailer. Include actual installed chassis/axle/coupling, shell/floor/openings, cabinetry, fitted bedding, electrical/plumbing/appliances, fitted battery/options and retained service fluids. Tanks and heater drained. Exclude towing vehicle, persons, payload, loose camping equipment, LPG bottle/fuel, fixtures, shipping protection and loose spares. Semi-trailer, tent trailer and motorhome variants in broader contexts are excluded.

- Selected flow: Trailers and semi-trailers of the caravan type, for housing or camping `fc37f9b4-d36f-4b33-8cf1-ac2d4af0800e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

##### Waste flows

###### Aqueous caravan hydrostatic-test drain water waste (`test_effluent`)

Only an actual collected outgoing aqueous waste stream from the declared tests; weigh, characterize additives/contamination and identify receiving treatment. Tank drainage reused within factory is internal transfer; a freshwater resource or environmental water emission is not this waste identity.

- Selected flow: Aqueous caravan hydrostatic-test drain water waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_air`)

Only actual measured fossil-carbon dioxide from foreground factory propane firing, CAS124-38-9, released promptly to external air with no defensible more specific subcompartment: Emissions / Emissions to air / unspecified. Preserve calibrated substance-specific concentration and gas-flow/time, temperature/pressure and actual mass conversion. Do not use soil, water, indoor-only or long-term air records, or a biogenic identity. No combustion factor or compulsory firing/emission is assumed; inventory other observed substances separately.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

### Process: Shipment protection at factory gate (`packaging`)

#### Inputs

##### Product flows

###### Polyethylene film (`pack_film`)

Only actual polyethylene shipping film; weigh applied protection, without adding it to accepted net trailer mass. Scrap film is separately characterized and not hidden as a lower vehicle M.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

###### Corrugated paperboard caravan protective pad (`pack_board`)

Only actual supplied corrugated pads with fibre mix, recycled content and mass declared. Finished fibre-specific boxes are not assumed to identify unspecified protective pads.

- Selected flow: Corrugated paperboard caravan protective pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `direct_attribution` | shared_operations | Use job tickets and submetering before allocation. Where a common meter remains, require a measured causal driver such as machine-hours for the identified operation, with all participating jobs and idle load disclosed; divide the attributable quantity by accepted units of the same configuration before mass normalization. | `ghg-product-allocation-2011` |
| `coproduct_decision` | saleable_outputs | Do not assume scrap is a co-product. Disclose destination and legal/product status. If multiple saleable co-products actually occur, seek subdivision; justify a physical relation or, when unavailable, documented economic/other allocation with sensitivity. No universal mass share or avoided-steel credit is prescribed. | `ghg-product-allocation-2011` |
| `rework_scrap` | manufacturing_losses | Retain rework and rejected-unit burdens attributable to the accepted reporting batch. Record recovered internal material once and exported wastes separately. Disclose upstream recycled-content method and any downstream treatment separately to prevent double credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | accepted net mass | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each acceptance | complete reporting batch | same model and configuration | accepted net mass per unit | calibration, weighing and signed acceptance records |
| `cp_forming` | `forming` | Optional chassis stock fabrication | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, Item(s) for counted finished tyres. Collect installed counts from issue/return, BOM and signed acceptance inspection; weigh tyre mass separately for physical reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_panels` | `panels` | Conditional sandwich-panel cutting and bonding | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, Item(s) for counted finished tyres. Collect installed counts from issue/return, BOM and signed acceptance inspection; weigh tyre mass separately for physical reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_cabinetry` | `cabinetry` | Conditional furniture-board fabrication | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, Item(s) for counted finished tyres. Collect installed counts from issue/return, BOM and signed acceptance inspection; weigh tyre mass separately for physical reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_assembly` | `assembly` | Rolling chassis and habitation shell assembly | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, Item(s) for counted finished tyres. Collect installed counts from issue/return, BOM and signed acceptance inspection; weigh tyre mass separately for physical reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_fitout` | `fitout` | Configured fixed habitation fit-out | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, Item(s) for counted finished tyres. Collect installed counts from issue/return, BOM and signed acceptance inspection; weigh tyre mass separately for physical reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_acceptance` | `acceptance` | Factory acceptance and net-mass determination | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions; actual coupling/brake/road-light and electrical/plumbing/appliance test criteria/results/time; water issue, return and drainage; battery installed mass and initial/final charge; propane cylinder mass/composition/return; measured fossil CO2 concentration and external exhaust flow/time/conditions; retained service fluids | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, Item(s) for counted finished tyres. Collect installed counts from issue/return, BOM and signed acceptance inspection; weigh tyre mass separately for physical reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. Drain and reconcile actual water trials before cp_mass. Meter AC input including charger losses rather than duplicate battery discharge. Record actual propane firing and measured emitted substance quantities without generic combustion factors; no camping load or catalogue mass substitute. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_packaging` | `packaging` | Shipment protection at factory gate | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, Item(s) for counted finished tyres. Collect installed counts from issue/return, BOM and signed acceptance inspection; weigh tyre mass separately for physical reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

The finished_machine output is fixed at 1 kg and is not divided again. Apply the conversion to each other applicable row using the same configuration and batch; quantity numerator units remain unchanged. Mixed configurations must be separated, not averaged by count with a catalogue mass.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_trace` | all rows | Trace every input to installed BOM, route and accepted unit; supplier finished parts do not also receive raw-stock burdens. Disclose remaining components as missing coverage until separate atomic records are added. | drawings, BOM, supplier receipts |
| `basis_quality` | cp_mass | M must be positive measured net mass, with the same delivered configuration, fluid state and acceptance gate as all collected exchanges. | calibration and weighing records |
| `coverage_quality` | all processes | Document full batch temporal coverage, meter overlap, rejects, rework, stock changes, outsourced stages and unmeasured emissions. A missing record is unknown, not zero or not_applicable. | ledger, coverage matrix and measurement uncertainty |
| `chemistry_quality` | panels; cabinetry; assembly; fitout | Verify recipe, concentration and SDS for each supplied formulated chemical; characterize each outgoing waste stream and identify treatment separately from environmental emissions. | recipe, SDS, analyses and transfer tickets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Reject missing qualifiers, LPG/water/payload-loaded or shipping-gross mass substitution, non-positive M or mismatch between configuration, cp_mass and finished_machine. Require 1 kg output and explicit normalize_mass on every non-reference applicable row. |  |
| `validate_atomic` | inventory | Require one physical exchange per row, verified public identity when supplied, correct property/unit, localized display and medium. Unresolved UUIDs do not authorize proxy substitution or mixed rows. |  |
| `validate_balance` | coverage | Reconcile installed mass, stock, waste, retained fluids and purchased parts using the actual BOM; independently reconcile installed chassis/shell/panel/adhesive/cabinet/appliance/battery content and retained fluids with measured BOM mass; reconcile test water issue, internal reuse and drainage, propane consumption and measured external-air emissions. Reconcile utilities by stage; internal transfers cancel. Explain differences against recorded measurement uncertainty, without a fabricated numerical tolerance. |  |
| `validate_completeness` | dataset | Check every conditional stage against route evidence. Require missing chemicals, parts, test media and actual emissions to be split and collected before claiming a complete inventory; prohibit cradle-to-gate or service comparisons while upstream or functional coverage is incomplete. |  |
| `validate_allocation` | shared_operations | Require complete driver records and justification for allocation and scrap treatment; document sensitivity where another defensible allocation may change results. | `ghg-product-allocation-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground process for a configured accepted unit |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to a declared caravan supply model with identical configuration and disclosed upstream coverage |
| excluded_use | Towing, customer camping/accommodation service or comparisons across berth/layout, chassis and appliance configurations without separate functional modelling |
| required_metadata | Model, configuration, empty state, M, retained fluids, manufacturer/site, reporting period, process route, voltage/geography, supplier gates, transport/packaging scope and allocation |
| required_quality_disclosure | Measured versus estimated quantities; unresolved identities; unmeasured emissions and components; upstream linkage completeness; uncertainty, data age and configuration limitations |
| update_trigger | Changed chassis/axle/brake, shell/core/frame/adhesive chemistry, floor/furniture layout, appliance/battery/options, supplier module boundary, test/firing/drainage, energy mix, acceptance or mass protocol |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `swift-caravans-2026` | handbook | Swift Group, Touring Caravans2026 brochure, PDF p.4 / printed pp.6–7 SMART construction diagram; PDF p.17 / printed pp.32–33 specification and MRO footnotes. https://www.swiftgroup.co.uk/media/rs5dz3ji/2026_swift_caravan_brochure.pdf | Edition-specific qualitative GRP/polystyrene/PU framing and plywood-floor architecture; branded floor insulation chemistry unresolved. Mass footnotes demonstrate catalogue MRO includes loose equipment/LPG allowances; these are not adopted as M. No thickness, prototype test limit, warranty/lifetime or material grade mandated. |
| `bailey-manufacturing` | handbook | Bailey of Bristol, Sustainable Manufacturing, undated publisher HTML, Green Products manufacturing-material paragraph. https://www.baileyofbristol.co.uk/why-bailey/sustainable-manufacturing/ | Independent qualitative example of water-based panel adhesive and paper-coated plywood furniture board. Does not establish PVAc resin, species, grade or mandatory timberless design. No holiday-carbon comparison, recyclability, electricity claim or waste percentage adopted. |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy; actual causal driver records required, no current comprehensive conformity claim. |
