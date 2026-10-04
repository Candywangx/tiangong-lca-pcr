---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-blankets
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Electric blankets

## 1. Scope and Applicability

This candidate governs foreground production of complete domestic electric textile overblankets and underblankets at the factory gate. Its reference is manufactured product mass, not an hour of warmth. Manufacture includes actual textile preparation, heater integration, controls, electrical connection, acceptance and dispatch. Consumer operation, laundering and end-of-life are separate downstream scenarios. Beurer supplies both underblankets and overblankets; its documented nonwoven blend and removable controls are examples, not a universal BOM. Independent patented constructions show insulated cable and integrated conductive yarn alternatives. [beurer-ub60; beurer-throws; woven-heater-patent; cable-heater-patent]

Passive blankets, standalone heater parts, heated clothing, seat heaters and medical thermal therapy devices require their own principal-function and classification review. A patent using “blanket” broadly for pads does not prove those products belong to this domestic boundary. Actual novelty, battery supply or an unusual heater design remains eligible for product review; it requires its own verified BOM, specific rows and supplier evidence rather than an unsupported method exclusion.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-blankets |
| classification_refs | CPC 3.0 44813 — Electric blankets |
| covered_products | Complete domestic electric textile overblanket; complete domestic electric textile underblanket |
| excluded_products | Passive blankets; separately supplied parts; medical therapy devices; heated garments and seats |
| representative_product | Domestic blanket with actual textile heater, control and power connection |
| production_route | Purchased textile and insulated-heater assembly; conditional on-site heater/yarn/textile manufacture; actual make/buy matrix |
| market_state | Accepted manufactured product at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete domestic electric blanket of one declared configuration |
| How much | 1 kg net finished product |
| How well | Meets actual model-specific electrical, thermal protection, textile and acceptance requirements |
| How long or cycle | One factory production cohort; service life declared only in a separate use scenario |
| reference_flow_link | finished_blanket |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electric blankets `db63276c-3e0f-4fe9-80de-b45ff12d515b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; over/under form; dimensions; fibre blend/finish; heater construction and conductor/insulation chemistry; zones; supply voltage and plug/geography; controller/protection and sensing architecture; included cord/accessories; make/buy boundary; accepted net mass and cohort; site/period; test protocol |

Declare every required qualifier in the foreground package. The generic reference flow supports manufactured electric-blanket identity and Mass; it supplies no geography, BOM, provider or empirical quantity. Missing qualifiers make the concrete package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| physical_basis | physical material and species records | Mass | kg | Measure each actual material and each contained species on its own matched assay and wet/dry basis. Gross cable or fabric mass is not metal, polymer or solvent content. Convert length/count using actual batch mass or grade-specific measured linear/areal mass. |
| utility_basis | utility records | Energy | kWh | Keep delivered electricity units, voltage, supplier/site geography and time period; document kWh/MJ conversions. No source-specific waste-incineration electricity is a generic factory grid supply. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased fabric/yarn, heater cable/yarn, control and connection subassemblies or documented raw-grade fabrication inputs |
| starting_condition_role | foreground_boundary_choice |
| product_classification_scope | Domestic electric textile blanket manufactured product |
| recursive_input_rule | A purchased unfinished/complete blanket entering further finishing is one upstream intermediate with documented included operations; do not recurse or duplicate its embedded inputs |
| upstream_dataset_requirement | Each purchased exchange needs actual grade, geography, technology and delivered interface matching supplier evidence |
| disclosure | Site, period, actual make/buy matrix, included accessories, upstream links, omitted operations and downstream scenario separation |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_makebuy | all processes | For each textile layer, heater, controller and connection, choose complete purchased component or on-site fabrication. The former includes its embedded materials upstream once; the latter records every actual individual grade, chemical, utility, waste and release. Add distinct atomic rows for actual alternatives not listed here; examples are not compulsory recipes. |  |
| b_factory | all processes | Include transport into the declared factory boundary, actual conversion, joining, testing, rework, reject treatment and packaging; transport providers require separate mode-specific freight rows. Later space/body heating, laundering, product lifetime and disposal belong only to explicitly separate lifecycle scenarios. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| textile | Textile preparation and cutting/sewing | conditional | Actual operation or actual purchased interface; absent route documented | foreground | finished_blanket |
| heater | Heater manufacture or purchased-heater integration | required | Actual operation or actual purchased interface; absent route documented | foreground | finished_blanket |
| assembly | Control, wiring and blanket assembly | required | Actual operation or actual purchased interface; absent route documented | foreground | finished_blanket |
| test | Acceptance tests and reject handling | required | Actual operation or actual purchased interface; absent route documented | foreground | finished_blanket |
| dispatch | Packaging and factory-gate dispatch | required | Actual operation or actual purchased interface; absent route documented | foreground | finished_blanket |
| services | Residual factory shared services | conditional | Actual operation or actual purchased interface; absent route documented | foreground | finished_blanket |

Rows below are conditional atomic interfaces. Record actual material grade and supplier, and distinguish not_applicable (verified absence), measured zero and unknown. Complete purchased assemblies replace, rather than accompany, embedded raw-material inputs. Extend the package for each actual resin, dye, adhesive formulation, flux, solder alloy, textile, fuel or species individually; unknown composition blocks affected completeness.

### Process: Textile preparation and cutting/sewing (`textile`)

#### Inputs

##### Product flows

###### Polyester-viscose-polypropylene needle-punched nonwoven (`nonwoven`)

Only for the documented mixed-fibre nonwoven route; record actual blend, finish, areal mass and recycled-content evidence. A finished fabric input includes upstream fibre production once.

- Selected flow: Polyester-viscose-polypropylene needle-punched nonwoven
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `beurer-ub60`

###### Cotton woven fabric (`cotton_fabric`)

Only where an actual cotton fabric layer is purchased; never substitute for the documented nonwoven blend.

- Selected flow: Cotton woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Polyester textile yarn (`polyester_yarn`)

Only for on-site weaving, knitting or insulating-yarn wrapping; distinguish fabric yarn from heater-core/overwrap yarn and do not duplicate purchased fabric.

- Selected flow: Polyester textile yarn
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `woven-heater-patent`

###### Polyester sewing thread (`sewing_thread`)

Only for the actual polyester seam or edging thread; other thread chemistry receives its own atomic row.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Purchased alternating-current electricity at factory supply voltage (`textile_power`)

Meter actual cutting, sewing, weaving and finishing; operating nameplate blanket wattage is not production consumption.

- Selected flow: Purchased alternating-current electricity at factory supply voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`

#### Outputs

##### Waste flows

###### Polyester-viscose-polypropylene nonwoven offcut (`fabric_offcut`)

Only from the matching fabric route; weigh by blend and treatment destination; separate other textile waste.

- Selected flow: Polyester-viscose-polypropylene nonwoven offcut
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

### Process: Heater manufacture or purchased-heater integration (`heater`)

#### Inputs

##### Product flows

###### Insulated electric-blanket heating cable (`heater_cable`)

Purchased complete cable branch: record conductor, separator, jacket and sensing architecture from supplier drawing. Do not also input its embedded conductor or resin.

- Selected flow: Insulated electric-blanket heating cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cable-heater-patent`

###### Insulated stainless-steel conductive textile yarn (`conductive_yarn`)

Purchased complete conductive-yarn branch when actual architecture matches; this differs from coaxial cable. No simultaneous embedded filament/yarn inputs.

- Selected flow: Insulated stainless-steel conductive textile yarn
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `woven-heater-patent`

###### 316L stainless-steel filament (`steel_filament`)

Only for actual on-site manufacture of the documented stainless conductive yarn; verify alloy, filament diameter and insulation design. Other heater alloys require separate rows.

- Selected flow: 316L stainless-steel filament
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `woven-heater-patent`

###### Polyethylene separator compound (`separator_resin`)

Only for on-site separator extrusion with actual qualified polyethylene formulation; additives and NTC/fusible behaviour require actual formulation evidence. Other jacket/separator formulations are separate rows, not assumed PVC.

- Selected flow: Polyethylene separator compound
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cable-heater-patent`

###### Copper bus wire (`copper_bus`)

Only where actual bus/connection is uncoated copper; plated tinsel, conductive paste and other conductor chemistries require separate specific records.

- Selected flow: Copper bus wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `woven-heater-patent`

###### Purchased alternating-current electricity at factory supply voltage (`heater_power`)

Meter winding, extrusion, weaving-in or routing/attachment actually performed on site; purchased heater modules carry upstream fabrication once.

- Selected flow: Purchased alternating-current electricity at factory supply voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`

#### Outputs

##### Waste flows

###### Insulated electric-blanket heating-cable offcut (`heater_offcut`)

Only for actual cable cutting scrap; composition and treatment destination must distinguish this from bare-metal recycling.

- Selected flow: Insulated electric-blanket heating-cable offcut
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

### Process: Control, wiring and blanket assembly (`assembly`)

#### Inputs

##### Product flows

###### Electric-blanket temperature-control module (`control_module`)

Purchased tested controller: record actual switches, circuit, protective functions and housing included; no universal discrete thermostat, no additional embedded board/resin burden.

- Selected flow: Electric-blanket temperature-control module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `beurer-ub60`

###### Electric-blanket populated control circuit board (`control_board`)

Only for controller assembled on site from a purchased board, instead of a complete control module; bare-board fabrication and solder chemistry need additional route-specific records when actually performed.

- Selected flow: Electric-blanket populated control circuit board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### ABS temperature-controller housing (`control_housing`)

Only if the actual separately purchased housing is ABS and controller is built on site; other polymers and on-site moulding require their own resin, energy and waste rows.

- Selected flow: ABS temperature-controller housing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Electric-blanket temperature sensor (`sensor`)

Only for a separately purchased physical sensor in the actual design; cable-integrated sensing is included in its cable, not repeated here.

- Selected flow: Electric-blanket temperature sensor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cable-heater-patent`

###### Electric-blanket insulated mains cord with plug (`power_cord`)

Record actual plug geography, voltage and complete cord mass; count separately only when not included in purchased controller.

- Selected flow: Electric-blanket insulated mains cord with plug
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `beurer-ub60`

###### Electric-blanket detachable electrical coupling (`coupling`)

Only if separately supplied and not already embedded in heater/controller/cord; record contacts, housing and strain relief interface.

- Selected flow: Electric-blanket detachable electrical coupling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `beurer-ub60`

###### Ethylene-vinyl-acetate hot-melt adhesive (`adhesive`)

Only for actual EVA adhesive lamination; actual grades and additives require evidence. Sewn-only route is not applicable; solvent-based adhesive is a separate formulated exchange with constituent balance.

- Selected flow: Ethylene-vinyl-acetate hot-melt adhesive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `woven-heater-patent`

###### Isopropanol (`isopropanol`)

Only for actual cleaning chemistry; record concentration, recovery, retained residue and fate. Other cleaning solvents are separate species rows.

- Selected flow: Isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chemistry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemistry`

###### Purchased alternating-current electricity at factory supply voltage (`assembly_power`)

Meter joining, crimping, controller assembly and lamination actually performed.

- Selected flow: Purchased alternating-current electricity at factory supply voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`

#### Outputs

##### Waste flows

###### EVA hot-melt adhesive residue (`adhesive_waste`)

Only for actual EVA residue; record retained product and stock separately.

- Selected flow: EVA hot-melt adhesive residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Spent isopropanol cleaning liquid (`solvent_waste`)

Only for actual spent cleaner; assay water/isopropanol and other components, receiver and final treatment.

- Selected flow: Spent isopropanol cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chemistry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemistry`

##### Elementary flows

###### Isopropanol to air (`ipa_air`)

Only measured or species-specific calculated air release; capture or unexplained solvent residual is not automatically air emission.

- Selected flow: Isopropanol to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chemistry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemistry`

### Process: Acceptance tests and reject handling (`test`)

#### Inputs

##### Product flows

###### Purchased alternating-current electricity at factory supply voltage (`test_power`)

Meter actual continuity, insulation, temperature/protection and acceptance tests by batch; include failed/retested units. Do not multiply consumer power by arbitrary hours.

- Selected flow: Purchased alternating-current electricity at factory supply voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`

###### Purchased process water (`test_water`)

Only for actual factory washability/wet test or cleaning; downstream consumer washing is outside factory scope.

- Selected flow: Purchased process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

#### Outputs

##### Waste flows

###### Rejected electric blanket (`rejected_blanket`)

Unrecoverable actual reject crosses boundary to treatment; rework stays internal and its burden is retained once.

- Selected flow: Rejected electric blanket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Electric-blanket wet-test wastewater (`test_wastewater`)

Only actual wet-test discharge with measured composition and treatment destination; water volume is not pollutant mass.

- Selected flow: Electric-blanket wet-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

##### Elementary flows

###### Water vapour to air (`evaporated_water`)

Only actual evaporation inside factory scope, determined from closed water account and uncertainty; not inferred from consumer drying.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

### Process: Packaging and factory-gate dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard packaging (`cardboard`)

Only actual dispatch box; measured separately from product mass.

- Selected flow: Corrugated cardboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Polyethylene packaging bag (`polybag`)

Only actual polyethylene bag; other films receive separate atomic rows.

- Selected flow: Polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

#### Outputs

##### Product flows

###### Electric blankets (`finished_blanket`)

Accepted complete blanket with the actual included heater, control, cord and required accessories; packaging excluded from net mass.

- Selected flow: Electric blankets `db63276c-3e0f-4fe9-80de-b45ff12d515b`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

### Process: Residual factory shared services (`services`)

#### Inputs

##### Product flows

###### Purchased alternating-current electricity at factory supply voltage (`residual_power`)

Only unassigned shared-service residual after every textile/heater/assembly/test/dispatch meter on the same site period; causal allocation, never whole-site total on top of submeter consumption.

- Selected flow: Purchased alternating-current electricity at factory supply voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_cohort | all processes | Keep each model/configuration and its actual accepted output separate. Allocate shared factory operations by measured causal activity (machine time, actual load or area-time), disclose the basis and reconcile to the original period totals. Do not average different heater/control/textile configurations. |  |
| a_scrap | physical material records | Internal offcut or rework returns cancel as paired transfers, not free external inputs or coproduct credits. Include scrap conditioning and all rejected/reworked burden. External recycling or treatment uses documented receiver and allocation convention; do not assume avoided virgin material. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Use one traceable site period and one configuration cohort. Q is the attributable period exchange, including its share of reject/rework and actual shared services; N is accepted complete units; D is the sum of individually calibrated accepted net masses for that same configuration; M = D/N. Form q_item = Q/N, then q_ref = q_item/M = Q/D. Packaging, rejected units and scrap never enter D. These are collection operations, not empirical default factors. Every protocol retains raw period totals before conversion.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | one production cohort | declared factory | accepted net mass per machine | calibration; acceptance and inclusion list |
| cp_material | all processes | specific material/component/waste | stock and batch records | grade; fibre blend; supplier; delivered form; batch; opening/closing stock; issues; returns; scrap; reject; actual wet/dry mass; own species assay; destination; configuration; Q; N | Reconcile weighed receipts/issues/stocks, actual BOM, route and counted parts with calibrated batch weight. Each material/species has its own assay for each product/waste/release term. Pair internal return transfers. Count complete purchased component upstream once. | kg | each batch and period close | same production period | actual factory operation and supplier interface | attributable exchange / accepted units | weighbridge/scale; supplier composition; stock reconciliation; receiver evidence |
| cp_utility | all processes | electricity | meter records | site; period; units; voltage; imports; generation; exports; storage; returns; all submeters; configuration; causal allocation; Q; N | Read calibrated same-period meters and invoices. Assign actual textile/heater/assembly/test/dispatch loads first; shared service is only the unassigned site residual. Reconcile imports, actual generation, exports and storage changes without double counting. Investigate negative residuals with period/unit/combined meter uncertainty; never clip to zero. On-site generation needs its own fuel and species-specific release rows. | kWh | each test batch and period | same production period | factory utility boundary | attributable exchange / accepted units | meter calibration; bills; allocation and site reconciliation |
| cp_chemistry | assembly | individual adhesive/solvent/species | chemical and sampling records | chemical grade; formulation; purity; wet/dry basis; actual inputs; stock changes; retained product; recovered solvent; capture media; measured destruction; waste liquid; actual air release; Q; N | Measure species mass for each term using its own matched assay; balance inputs plus reaction production against product retention, stocks, recovered material, captures, liquid/solid waste, actual destruction/reaction consumption and measured releases. Capture is not destruction; unexplained residual is not automatically air. Resolve closure against actual combined sampling, meter and allocation uncertainty. | kg | each batch and sampled campaign | same production period | actual chemical use boundary | attributable exchange / accepted units | SDS/formulation; assays; capture/treatment records; sampling method and uncertainty |
| cp_water | test | water and wet-test discharge | meter and moisture records | purchased water; feed moisture; opening/closing water stocks; actual product moisture; evaporation; discharge; reaction production/consumption; paired internal returns; discharge assays; Q; N | Measure all actual water-bearing inputs, outputs and stock changes on matched period/basis. Each feed, product, scrap, sludge, wastewater and opening/closing stock term uses its own measured water fraction/moisture; each liquid volume conversion uses its own measured density. Gross wet-waste mass is not water mass; never apply one moisture percentage to all terms. Include reaction water and pair internal returns; independently measure discharge/evaporation where available and investigate residual against combined uncertainty. Pollutant mass uses each discharge species concentration and actual water quantity; do not infer pollutant amount from water alone. | kg | each wet-test batch and period | same production period | factory wet operation | attributable exchange / accepted units | meters; moisture samples; laboratory assay; treatment contract |

Actual raw-period water closure is fresh-water input + feed moisture + opening water stock + reaction water generation = product moisture + scrap/sludge water + external discharge water + evaporation + closing water stock + reaction water consumption. Separate each actual aqueous waste stream and use its own assay/density; paired internal water returns cancel. Investigate closure with combined measurement, sampling and allocation uncertainty before normalization; no universal closure tolerance.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| water_balance | test_water; test_wastewater; evaporated_water | Fresh water + feed moisture + opening water stock + reaction water generation = product moisture + scrap water + sludge water + external discharge water + evaporation + closing water stock + reaction water consumption. Each actual feed/product/scrap/sludge/wastewater/stock term uses its own measured water fraction and wet/dry basis; each liquid volume uses its own measured density. Gross wet waste is not water mass. Paired internal returns cancel. Reconcile the actual raw period before normalization and investigate closure with combined measurement, sampling and allocation uncertainty; no universal tolerance. | cp_water; actual water fractions; actual liquid densities; matched raw-period water and reaction/stock records | Closed actual raw-period water account | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | all processes | Retain actual model-specific BOM, make/buy matrix, test acceptance, raw totals, uncertainty, supplier interfaces and missing/zero/absent distinctions. Source patents are architecture examples; public product pages establish no factory operating factors. | Signed factory and supplier records |
| dq_balance | physical material and species records | Material/species inputs plus reaction production equal outputs plus stock increase and reaction consumption after paired internal transfers cancel. Each product/scrap/sludge/wastewater/release term uses its own actual assay and wet/dry basis; never apply one alloy fraction to all terms. Investigate imbalance against measured combined uncertainty with no universal tolerance. Fuel carbon alone does not determine CO or NOx. | Assays; stock/reaction records; closure and uncertainty report |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | reference product | Require actual domestic principal function, model/configuration qualifiers, accepted complete delivered inclusion list and calibrated net masses. N and D must cover the same accepted cohort; M = D/N; reconcile Q/N then q_item/M to Q/D. Do not mix configurations or include packaging/reject mass in D. |  |
| v_routes | all processes | Every actual heater conductor, insulation layer, textile, controller/sensor, cord/connector, adhesive and auxiliary has one evidenced make/buy interface. Complete purchased modules and their embedded inputs cannot coexist. Conditional alternatives require BOM evidence; not_applicable needs verified absence. All actual exchanges have atomic physical/chemical identities, matched unit support and provider interfaces; unresolved fields remain gaps. |  |
| v_balances | physical material and species records | Close each material/species and water account with matched own assays, moisture, stocks, reactions, product, scrap, waste liquid/solid, measured releases and paired internal returns. Distinguish recovery, capture and actual destruction. Investigate residual and uncertainty; missing composition or fate makes affected validation inconclusive. |  |
| v_energy | utility records | Same-period site reconciliation binds imports, generation, exports/storage and all assigned process loads. Shared services include only unassigned residual, with causal allocation. Negative residuals need investigation; consumer power/time, product-webpage mass and an incineration-specific electricity UUID are not factory defaults. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Dataset-production foreground package, projected to process or lifecyclemodel with separately declared downstream scenarios |
| allowed_use | Matched configuration and plant-gate domestic blanket supply |
| excluded_use | Unqualified blanket averages; medical service; body/room heating service without use scenario; unfinished heater as complete blanket |
| required_metadata | All reference qualifiers; site/time; actual route and inclusion list; allocation; supplier matching; complete raw-period conversion |
| required_quality_disclosure | Sources, measurement/sampling uncertainty, unresolved UUID/provider/recipe gaps, actual balance closure and validation coverage |
| update_trigger | Changed textile/heater/insulation/control design, make/buy boundary, supplier, geography, test method or site period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| beurer-ub60 | handbook | https://www.beurer.com/global/p/30036/ — UB 60 Green Planet; snapshot 2026-10-02 | Underblanket example; actual mixed-fibre nonwoven, removable control/power interface, temperature monitoring. No universal composition or factory quantity. |
| beurer-throws | handbook | https://www.beurer.com/global/c/0020103/ — Heated Throws; snapshot 2026-10-02 | Domestic overblanket examples; consumer washing/operation are separate. Same publisher as UB60, not independent evidence. |
| woven-heater-patent | literature | US6888112B2 (2005-05-03), https://patents.google.com/patent/US6888112B2/en | Independent original technical disclosure: integrated conductive yarn, stainless-filament/polyester example, finishing and bus connection variants. Patent embodiments are conditional architecture, not actual factory recipe or quantitative ranges. |
| cable-heater-patent | literature | US8698045B2 (2014-04-15), https://patents.google.com/patent/US8698045B2/en | Independent original technical disclosure: coaxial conductor/separator/jacket, cable-integrated sensing and polyethylene example. Broad pad terminology does not establish domestic-blanket classification. No mandated polymer/alloy or operating default. |
