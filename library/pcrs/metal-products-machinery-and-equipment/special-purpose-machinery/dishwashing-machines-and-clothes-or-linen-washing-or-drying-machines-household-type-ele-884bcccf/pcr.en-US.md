---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dishwashing-machines-and-clothes-or-linen-washing-or-drying-machines-household-type-ele-884bcccf
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Dishwashing machines and clothes or linen washing or drying machines, household type, electric or non-electric

## 1. Scope and Applicability

This candidate covers manufacture of complete household dishwashing machines and clothes/linen washers, dryers and washer-dryers, electric or non-electric, to the declared factory gate. It produces foreground equipment data, not dishwashing/laundry service. Model-specific function, household principal design and delivered architecture determine applicability. Manual washing is a real route: the WonderWash original describes hand drive and ABS construction without an electric motor or spin cycle. Gas heat is also real and may retain electric auxiliaries. Manufacturer consumer capacities, ratings and cycle claims are architecture evidence only; none is a factory amount, default BOM, machine mass or life. [laundry-alternative-manual; speedqueen-home-stack; bosch-dishwashers; bosch-dryers-2021]

Separate household designs from commercial/industrial laundry or dishwashing equipment, dry-cleaning machinery, standalone parts and later consumer use/end-of-life. Current CPC3 explanatory notes place household machines at 44812 and centrifugal clothes driers at 44911, and redirect other textile machinery to 44622. The 44622 title explicitly describes laundry-type washing and textile drying machines exceeding 10 kg dry-linen capacity; adjacent 44629 exclusions refer machines below 10 kg to 44812. Exactly 10 kg and ambiguous marketed configurations need review of the original coordinate and actual function, not an invented threshold rule. Their short titles do not settle every actual model. The original home-marketed Speed Queen stack combines a washer and gas/electric dryer; capacity is not a sufficient sole market test. A household spin dryer must undergo principal-design/classification review rather than automatic inclusion or exclusion based only on the spinning mechanism. HS adjacency is not a current CPC crosswalk. Manual dryer or non-electric dishwasher is eligible only on actual design and supply evidence; lack of a representative example is an explicit evidence gap, not a prohibition. [unsd-cpc3; speedqueen-home-stack; thomas-spin]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dishwashing-machines-and-clothes-or-linen-washing-or-drying-machines-household-type-ele-884bcccf |
| classification_refs | CPC 3.0 44812 |
| covered_products | Complete household dishwashers; powered or manual washers; vented, condensing, heatpump or gas dryers; combined washer-dryers where actual design supports household supply |
| excluded_products | Commercial/industrial equipment after reviewed boundary decision; dry-cleaning machinery; independent spare parts; cleaning/laundry service |
| representative_product | One declared accepted configuration; no universal representative washing machine |
| production_route | Actual make/buy matrix then conditional fabrication/surface operations, configuration assembly, thermal circuit if present, acceptance and dispatch |
| market_state | New accepted complete manufactured appliance at plant; disclose retained charge and included functional accessories |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete household dishwashing or clothes/linen washing/drying appliance |
| How much | 1 kg accepted net finished product of one configuration |
| How well | Declared model specifications and actual factory acceptance, without invented performance threshold |
| How long or cycle | One factory production period; household operating cycles and lifetime excluded |
| reference_flow_link | final_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dishwashing machines and clothes or linen washing or drying machines, household type, electric or non-electric `57770f75-ea3a-4810-94e8-8fb918f69b50` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | function; model/configuration; household principal design and reviewed classification; wash and dry capacities separately; electric/manual/gas auxiliaries; vented/condensing/heatpump architecture; refrigerant chemistry and retained fill; material grade/recipe; make/buy and supplier completion; accepted net mass; factory/site/period; gate and supplied accessories |

Declare every qualifier in the foreground data package. A mass-based output is a manufacturing reference, not functional equivalence between appliances. N is accepted units and D is the sum of calibrated accepted net masses in the same configuration/period. M = D/N. Include actual installed retained charge once; omit transport packaging, reject mass and free test liquid from D. No model weight from a brochure replaces the actual weighing protocol.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| energy_units | fabrication_power; surface_power; assembly_power; drying_power; test_power; residual_power | Net calorific value | MJ | Retain each raw electricity meter in kWh and use 1 kWh = 3.6 MJ. Fuel needs its own measured composition, pressure/temperature and net calorific value; heat is not electric work. |
| physical_basis | stainless_sheet; galvanized_sheet; abs_resin; pp_resin; steel_scrap; abs_scrap; sludge; test_wastewater | Mass | kg | Gross material mass is not contained element mass. Each physical balance term uses its own matched assay and wet/dry basis; utility or transport service quantities do not receive material assays. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received sheet, resin or completed purchased component, with supplier operations and retained initial fill declared |
| starting_condition_role | Supplier material/component interface |
| product_classification_scope | Reviewed complete household washing/drying/dishwashing category |
| recursive_input_rule | Purchased same-category subassembly or returned unit retains upstream manufacture once; internal rework cancels only transfer quantities |
| upstream_dataset_requirement | Actual material, completed component, utility, transport and waste providers; gaps cannot mean zero |
| disclosure | Model/BOM, make/buy, operations omitted as supplier-completed, charges, site, period and gate; infrastructure/maintenance cutoffs justified |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| factory_only | all processes | Include actual fabrication, surface work, assembly, charge if present, factory acceptance/rework, packaging and attributable controls; later installation, consumer water/energy/detergent and end-of-life are separate scenarios. Consumer energy labels never become factory factors. | bosch-dryers-2021; speedqueen-home-stack |
| make_buy_once | all processes | For every tub/drum, motor, pump, board, harness, seal, heating unit and refrigeration circuit, record delivered state and one mutually exclusive make/buy path. Bought finished parts include upstream materials/processes; in-house paths replace them with actual atomic inputs and processes. Charged circuit excludes a second initial fill; uncharged circuit requires actual factory fill. | bosch-heatpump-r290 |
| site_completion | all processes | Cards are conditional evidence-guided starting points, not a complete default BOM. Add every actually present grade, compound, purchased part, fuel, transport interface, refrigerant, chemical, waste and elementary species separately before dataset validation; retain unknown versus demonstrated not_applicable. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Material receipt and conditional part fabrication | conditional | Actual in-house cutting/forming/moulding; bought parts bypass supplier-completed work | Foreground manufacturing | per 1 kg reference flow |
| surface | Conditional cleaning and surface treatment | conditional | Only actual cleaning, coating/cure and controls; outsourced operations upstream once | Foreground manufacturing | per 1 kg reference flow |
| assembly | Configuration-specific appliance assembly | required | Actual dishwasher, powered/manual washer, dryer or combined product BOM and make/buy | Foreground manufacturing | per 1 kg reference flow |
| drying_system | Conditional thermal and refrigeration subsystem | conditional | Actual gas, resistance, condensation or heatpump design; absent for washing-only/manual designs without it | Foreground manufacturing | per 1 kg reference flow |
| acceptance | Factory acceptance and rework | required | Actual safety, quality and functional acceptance; wet/loaded tests only when performed | Foreground manufacturing | per 1 kg reference flow |
| dispatch | Packaging and factory gate | required | Accepted finished configuration and actual supplied package | Foreground manufacturing | per 1 kg reference flow |
| shared_services | Residual shared utilities and pollution controls | required | Only attributable unassigned services and actual controls; add site-specific atomic exchanges | Foreground manufacturing | per 1 kg reference flow |

### Process: Material receipt and conditional part fabrication (`fabrication`)

#### Inputs

##### Product flows

###### AISI 304 stainless steel sheet (`stainless_sheet`)

Only when the actual drawing and mill certificate specify this grade and sheet delivery; split any other stainless grade into its own card. Form tub/drum/sheet parts only where made on site.

- Selected flow: AISI 304 stainless steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stainless_sheet.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stainless_sheet`
- Sources: `bosch-dishwashers`; `speedqueen-home-stack`

###### Galvanized low-carbon steel sheet (`galvanized_sheet`)

Conditional cabinet manufacture; record actual substrate grade, zinc coating and supplier treatment. Never equate zinc coating with gross steel mass.

- Selected flow: Galvanized low-carbon steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_galvanized_sheet.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_galvanized_sheet`
- Sources: `speedqueen-home-stack`

###### Acrylonitrile butadiene styrene (ABS) granulate (`abs_resin`)

Only CN granulate procurement for actual in-house ABS moulding: record impact grade, additives, recycled/virgin state and supplier. WonderWash confirms ABS construction, not this supplier or recipe. Bought moulded parts replace resin and their completed processing.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_abs_resin.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abs_resin`
- Sources: `laundry-alternative-manual`

###### Polypropylene granulate (`pp_resin`)

Only actual in-house polypropylene tub or spray-arm moulding; record grade, filler and supplier. ABS is not its substitute.

- Selected flow: Polypropylene granulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pp_resin.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pp_resin`
- Sources:

###### Concrete washer counterweight (`concrete_ballast`)

Only an actual externally supplied counterweight; declare mix and cured delivered state. In-house casting instead requires separate actual cement, aggregate, water and additives, curing and waste cards.

- Selected flow: Concrete washer counterweight
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_concrete_ballast.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete_ballast`
- Sources:

###### Alternating current (`fabrication_power`)

Customer-side 1–35 kV grid supply only when site boundary matches; retain geography/year/provider and internal transformation separately. Include actual cutting/forming/welding/moulding submeter load, including rejects and rework.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_power`
- Sources:

#### Outputs

##### Waste flows

###### Stainless steel sheet offcut (`steel_scrap`)

External scrap only; identify grade, destination and own composition. Internal recirculated trim cancels as a transfer but retains processing burden.

- Selected flow: Stainless steel sheet offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steel_scrap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_scrap`
- Sources:

###### ABS moulding reject (`abs_scrap`)

Conditional weighed reject by compound; internal regrind is not a second external resin input or avoided virgin credit.

- Selected flow: ABS moulding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_abs_scrap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abs_scrap`
- Sources:

### Process: Conditional cleaning and surface treatment (`surface`)

#### Inputs

##### Product flows

###### Sodium hydroxide cleaning solution (`sodium_hydroxide`)

Only an actual alkaline cleaning bath; record supplied solution concentration, active mass, bath makeup/returns and stocks. Add each co-formulant separately; do not infer from appliance architecture.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_sodium_hydroxide.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_hydroxide`
- Sources:

###### Epoxy powder coating (`epoxy_powder`)

Only actual epoxy coating; establish formulation, retained coating and cure records. Polyester or hybrid recipes require distinct cards.

- Selected flow: Epoxy powder coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_epoxy_powder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_epoxy_powder`
- Sources:

###### Isopropanol cleaning solvent (`isopropanol`)

Only actual solvent cleaning; split other solvents and water. Capture/recovery is not destruction; quantify retained product, stocks and every waste/release fate.

- Selected flow: Isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_isopropanol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_isopropanol`
- Sources:

###### Alternating current (`surface_power`)

Actual cleaning, extraction, coating and cure electricity; avoid duplicating furnace fuel or whole-site meter. Customer-side voltage must match.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_power`
- Sources:

###### Natural gas (`natural_gas`)

Only metered factory oven/burner/test gas of actual composition and delivery pressure; supplied fuel is not appliance lifetime fuel. Record volume temperature/pressure and own net calorific value.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_natural_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources: `speedqueen-home-stack`

#### Outputs

##### Waste flows

###### Epoxy coating overspray residue (`paint_residue`)

Only external weighed waste; retain wet/dry basis and own resin/pigment/metal assays.

- Selected flow: Epoxy coating overspray residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint_residue.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paint_residue`
- Sources:

###### Spent isopropanol cleaning solvent (`spent_solvent`)

Record actual off-site treatment/recovery; each solvent concentration and water fraction must match the weighed waste.

- Selected flow: Spent isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_spent_solvent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_solvent`
- Sources:

##### Elementary flows

###### Isopropanol to air (`ipa_air`)

Conditional measured or verified species-specific exhaust and fugitive release after capture; no automatic emission-free solvent route.

- Selected flow: Isopropanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_ipa_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa_air`
- Sources:

### Process: Configuration-specific appliance assembly (`assembly`)

#### Inputs

##### Product flows

###### Household washer drive motor (`wash_motor`)

Bought completed motor only for powered washer configuration; provider includes contained copper, steel, magnets and completed manufacture. Do not add these materials again.

- Selected flow: Household washer drive motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wash_motor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_motor`
- Sources: `speedqueen-home-stack`

###### Dishwasher circulation pump (`dishwash_pump`)

Only actual dishwasher water-circulation assembly; declare motor/impeller/seal delivery boundary and upstream completion.

- Selected flow: Dishwasher circulation pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dishwash_pump.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dishwash_pump`
- Sources: `bosch-dishwashers`

###### Dishwasher spray arm (`dishwash_arm`)

Bought finished arm if used; separately declare polymer or metal design and provider. If made in house replace bought arm by actual materials and fabrication.

- Selected flow: Dishwasher spray arm
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dishwash_arm.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dishwash_arm`
- Sources: `bosch-dishwashers`

###### Household appliance drain pump (`drain_pump`)

Only actual purchased drain/condensate pump; distinguish from dishwasher circulation pump.

- Selected flow: Household appliance drain pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drain_pump.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drain_pump`
- Sources: `bosch-dryers-2021`

###### Household appliance control circuit board (`control_board`)

Bought assembled board only for actual electronic control; no electric controller imposed on manual machines. State populated board boundary and provider.

- Selected flow: Household appliance control circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_control_board.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_board`
- Sources:

###### Household appliance insulated copper wiring harness (`wire_harness`)

Actual bought harness; include copper and insulation upstream once, not again as raw copper/polymer.

- Selected flow: Household appliance insulated copper wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wire_harness.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wire_harness`
- Sources:

###### EPDM appliance door seal (`epdm_seal`)

Only actual EPDM supplier seal; silicone or other elastomers require distinct identities/recipes. No universal seal grade assumed.

- Selected flow: EPDM appliance door seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_epdm_seal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_epdm_seal`
- Sources:

###### Hand-operated washer crank (`manual_crank`)

Actual purchased hand-drive part only for manual washer; identify material and mechanical connection. Manual dryer or dishwasher needs its own actual design evidence and part rows.

- Selected flow: Hand-operated washer crank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_manual_crank.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manual_crank`
- Sources: `laundry-alternative-manual`

###### Alternating current (`assembly_power`)

Actual powered tools and assembly line load, including manual-appliance manufacture; no-electricity appliance use does not make factory energy zero.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_power`
- Sources:

### Process: Conditional thermal and refrigeration subsystem (`drying_system`)

#### Inputs

##### Product flows

###### Household dryer electric resistance heater (`resistance_heater`)

Only actual vented or resistance-condensing dryer heating assembly; heatpump technology does not automatically contain this part. Actual schematic controls choice.

- Selected flow: Household dryer electric resistance heater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_resistance_heater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resistance_heater`
- Sources: `speedqueen-home-stack`

###### Household dryer blower (`dryer_blower`)

Actual purchased airflow assembly for dryer; keep drive and housing supplier scope explicit.

- Selected flow: Household dryer blower
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dryer_blower.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_blower`
- Sources: `speedqueen-home-stack`

###### Household dryer gas burner assembly (`gas_burner`)

Only actual natural-gas/LP model; declared fuel conversion kit, valve, ignition and control are included in supplier boundary or separate actual rows, never a default dual-fuel BOM.

- Selected flow: Household dryer gas burner assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas_burner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas_burner`
- Sources: `speedqueen-home-stack`

###### Household dryer condensation heat exchanger (`condenser`)

Actual purchased non-refrigerant exchanger for specified condensation design; declare air/water cooling, metal and provider. Condensing label alone does not prove resistance heating or lack of refrigerant.

- Selected flow: Household dryer condensation heat exchanger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_condenser.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condenser`
- Sources: `bosch-dryers-2021`; `bosch-condensing-sheet`

###### Factory-charged household dryer heat-pump circuit (`charged_heatpump`)

Only actual purchased sealed charged circuit. Supplier burden includes compressor, evaporator/condenser, lubricant and initial refrigerant; do not add embedded materials or charge again. Site topping-up and loss remain separate actual exchanges.

- Selected flow: Factory-charged household dryer heat-pump circuit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_charged_heatpump.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_charged_heatpump`
- Sources: `bosch-heatpump-r290`

###### Uncharged household dryer heat-pump circuit (`uncharged_heatpump`)

Alternative actual purchased uncharged circuit; provider scope excludes missing fill. In-house circuit manufacture needs actual compressor, exchanger, copper tubing, braze, oil and assembly rows; not this bought circuit plus embedded components.

- Selected flow: Uncharged household dryer heat-pump circuit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_uncharged_heatpump.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_uncharged_heatpump`
- Sources: `bosch-heatpump-r290`

###### Propane refrigerant R290 (`r290_fill`)

Only actual site initial fill/topping-up of an R290 circuit; measured cylinder loss, retained charge, recovery, stocks and leak. Another refrigerant requires own supply and release rows; model brochure is not a fill amount.

- Selected flow: Propane refrigerant R290
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_r290_fill.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_r290_fill`
- Sources: `bosch-heatpump-r290`

###### Alternating current (`drying_power`)

Actual circuit assembly, vacuum pump and charging station electricity; consumer rated cycle energy is excluded.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drying_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_power`
- Sources:

#### Outputs

##### Waste flows

###### Recovered propane refrigerant R290 (`r290_recovery`)

External recovery shipment only; record purity, cylinder tare and destination, no automatic destruction or substitution credit.

- Selected flow: Recovered propane refrigerant R290
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_r290_recovery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_r290_recovery`
- Sources: `bosch-heatpump-r290`

##### Elementary flows

###### Propane to air (`r290_air`)

Only actual R290 charging/test/fugitive loss to air; separate measured recovered quantities and residual waste. Do not set leakage zero solely because equipment is hermetically sealed.

- Selected flow: Propane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_r290_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_r290_air`
- Sources: `bosch-heatpump-r290`

### Process: Factory acceptance and rework (`acceptance`)

#### Inputs

##### Product flows

###### Factory appliance test water (`test_water`)

Only actual metered leak/hydraulic/wash performance tests; separate new water, recirculation, retained residual moisture and discharge. Customer hot-water supply is excluded.

- Selected flow: Factory appliance test water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_water`
- Sources:

###### Factory test sodium carbonate detergent component (`test_detergent`)

Only actual sodium carbonate in the verified test recipe, retaining solution/active fraction; actual surfactant, bleach and other components each require an atomic card. No detergent imposed on dry inspection.

- Selected flow: Factory test sodium carbonate detergent component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_detergent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_detergent`
- Sources:

###### Alternating current (`test_power`)

Actual end-of-line operation, safety and rework test electricity; separate sample tests from production machines and all household service cycles.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_power`
- Sources:

#### Outputs

##### Waste flows

###### Appliance factory test wastewater (`test_wastewater`)

External wastewater to actual receiving treatment; water mass, solids, individual pollutant concentrations and own uncertainty; treatment cannot be assumed burden-free.

- Selected flow: Appliance factory test wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_wastewater`
- Sources:

###### Rejected household washing or drying appliance (`rejected_machine`)

Only external rejected unit destination. Rework loops cancel internal material transfers but include repeated assembly/test energy; rejects never enlarge accepted denominator.

- Selected flow: Rejected household washing or drying appliance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rejected_machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_machine`
- Sources:

### Process: Packaging and factory gate (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard transport carton (`carton`)

Actual measured dispatch packaging; upstream once; separate retained product net mass and recyclable packaging.

- Selected flow: Corrugated cardboard transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_carton.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton`
- Sources:

###### Expanded polystyrene protective insert (`eps`)

Only actual EPS packaging; EPE/pulp alternatives require separate cards and no assumed universal package.

- Selected flow: Expanded polystyrene protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_eps.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_eps`
- Sources:

#### Outputs

##### Product flows

###### Dishwashing machines and clothes or linen washing or drying machines, household type, electric or non-electric (`final_product`)

One accepted complete configuration at factory gate, including actual installed retained initial fill and supplied functional parts; exclude packaging, rejected units, free test water and user loads.

- Selected flow: Dishwashing machines and clothes or linen washing or drying machines, household type, electric or non-electric `57770f75-ea3a-4810-94e8-8fb918f69b50`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

### Process: Residual shared utilities and pollution controls (`shared_services`)

#### Inputs

##### Product flows

###### Alternating current (`residual_power`)

ONLY unassigned residual same-period electricity after fabrication/surface/assembly/drying/test/dispatch assignments. Reconcile imports, actual generation, exports and storage; negative residual triggers investigation, never clipping.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residual_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual_power`
- Sources:

###### Delivered factory steam (`steam`)

Only actual purchased steam service on an energy basis; meter delivered kg and own delivered specific enthalpy MJ/kg, reference state and supplier boundary. Return condensate kg and its own return MJ/kg are measured on the same common enthalpy datum and period. Agree the provider interface as gross delivered energy or net useful heat: net service is delivered MJ minus returned MJ once; gross service reports the return separately without subtracting it twice. Do not add own-boiler production for purchased steam.

- Selected flow: Delivered factory steam
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steam.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources:

###### Purchased industrial makeup water (`makeup_water`)

Same-period unassigned cooling/cleaning/water-treatment makeup only, separate from assigned test water; record provider versus direct abstraction independently.

- Selected flow: Purchased industrial makeup water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_makeup_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_makeup_water`
- Sources:

#### Outputs

##### Product flows

###### Steam condensate return (`condensate_return`)

Only actual external return; mass, own specific enthalpy, temperature, pressure, quality, common enthalpy datum and receiving boundary collected independently from delivered steam; reconcile return energy once under agreed gross/net provider interface. Internal return transfers cancel.

- Selected flow: Steam condensate return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_condensate_return.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condensate_return`
- Sources:

##### Waste flows

###### Appliance factory wastewater-treatment sludge (`sludge`)

Actual sludge destination; weighed wet mass, own water/solids and each metal/solvent assay, not feed-metal composition.

- Selected flow: Appliance factory wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_sludge.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sludge`
- Sources:

##### Elementary flows

###### Water vapour to air (`water_vapour`)

Actual factory evaporation only; close cooling/test/cleaning water with stocks and moisture, not household laundry moisture.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_vapour.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_vapour`
- Sources:

###### Carbon dioxide, fossil, to air (`co2`)

Only actual factory fossil-fuel combustion with retained carbon, incomplete combustion, stocks and non-air carbon fates reconciled.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_co2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2`
- Sources:

###### Carbon monoxide to air (`co`)

Actual species-specific exhaust measurement or verified process-specific method; fuel carbon balance alone cannot establish this amount.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_co.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co`
- Sources:

###### Nitrogen dioxide to air (`no2`)

Only actual NO2 species data; NOx-as-NO2 reporting index is not automatically physical NO2. Add measured NO and other actual species separately. Retain reporting units and basis: NOx expressed as NO2-equivalent needs documented molar/molecular-mass conversion and measured species split; no aggregate NOx amount becomes pure NO2.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_no2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no2`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | all processes | First isolate configuration production lines and causal meters. Allocate mixed runs and residual shared services by measured driver appropriate to the service (time, metered load, handled mass or wastewater load); disclose rejected/reworked burden assigned to accepted output. Do not default every utility to product mass. |  |
| scrap_treatment | steel_scrap; abs_scrap; paint_residue; r290_recovery | Internal returns cancel paired transfers but retain repeated process burden. External recycling/disposal uses actual destination and a declared consistent allocation convention. No automatic avoided-primary-material credit or arbitrary negative burden. Separate any sold co-product by actual sale, quality and quantity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

For each configuration and reporting period, collect N accepted units and each calibrated net accepted mass m_i; D = sum(m_i), M = D/N. Q is the attributable external period exchange after stock reconciliation and causal allocation, including reject/rework burden. q_item = Q/N; q_ref = Q/D. Q includes a purchased component upstream burden once on the actual delivered boundary. Never average mass over different configurations. Protocol aggregation below establishes the intermediate q_item per accepted unit; normalize_mass then converts it to the reference basis. Raw records retain Q, N, D, M and allocation, not an already normalized figure relabelled as a raw measurement.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement_record | model; configuration; serial number; accepted net mass M; period; N; D | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted unit | Same complete reporting period | Declared configuration and factory gate | accepted net mass per machine | Calibration; tare; acceptance; retained fill evidence |
| cp_stainless_sheet | fabrication | stainless_sheet | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_galvanized_sheet | fabrication | galvanized_sheet | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_abs_resin | fabrication | abs_resin | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_pp_resin | fabrication | pp_resin | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_concrete_ballast | fabrication | concrete_ballast | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_fabrication_power | fabrication | fabrication_power | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated service meter and interval logs; raw kWh for electricity, own composition/calorific value and temperature/pressure for fuel; actual allocation and same-period site reconciliation. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_steel_scrap | fabrication | steel_scrap | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_abs_scrap | fabrication | abs_scrap | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_sodium_hydroxide | surface | sodium_hydroxide | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_epoxy_powder | surface | epoxy_powder | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_isopropanol | surface | isopropanol | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_surface_power | surface | surface_power | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated service meter and interval logs; raw kWh for electricity, own composition/calorific value and temperature/pressure for fuel; actual allocation and same-period site reconciliation. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_natural_gas | surface | natural_gas | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated service meter and interval logs; raw kWh for electricity, own composition/calorific value and temperature/pressure for fuel; actual allocation and same-period site reconciliation. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_paint_residue | surface | paint_residue | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_spent_solvent | surface | spent_solvent | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_ipa_air | surface | ipa_air | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Species-specific calibrated exhaust/effluent or leak measurement with matched concentration, flow, time and compartment; validated chemistry-specific method if measurement unavailable; retain uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_wash_motor | assembly | wash_motor | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_dishwash_pump | assembly | dishwash_pump | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_dishwash_arm | assembly | dishwash_arm | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_drain_pump | assembly | drain_pump | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_control_board | assembly | control_board | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_wire_harness | assembly | wire_harness | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_epdm_seal | assembly | epdm_seal | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_manual_crank | assembly | manual_crank | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_assembly_power | assembly | assembly_power | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated service meter and interval logs; raw kWh for electricity, own composition/calorific value and temperature/pressure for fuel; actual allocation and same-period site reconciliation. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_resistance_heater | drying_system | resistance_heater | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_dryer_blower | drying_system | dryer_blower | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_gas_burner | drying_system | gas_burner | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_condenser | drying_system | condenser | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_charged_heatpump | drying_system | charged_heatpump | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_uncharged_heatpump | drying_system | uncharged_heatpump | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_r290_fill | drying_system | r290_fill | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_r290_recovery | drying_system | r290_recovery | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_r290_air | drying_system | r290_air | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Species-specific calibrated exhaust/effluent or leak measurement with matched concentration, flow, time and compartment; validated chemistry-specific method if measurement unavailable; retain uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_drying_power | drying_system | drying_power | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated service meter and interval logs; raw kWh for electricity, own composition/calorific value and temperature/pressure for fuel; actual allocation and same-period site reconciliation. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_test_water | acceptance | test_water | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated mass/volume and measured density at actual conditions; opening/closing stocks, input moisture, carryover, evaporation and discharge; matched own solids and species assays, destination and uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_test_detergent | acceptance | test_detergent | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_test_power | acceptance | test_power | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated service meter and interval logs; raw kWh for electricity, own composition/calorific value and temperature/pressure for fuel; actual allocation and same-period site reconciliation. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_test_wastewater | acceptance | test_wastewater | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated mass/volume and measured density at actual conditions; opening/closing stocks, input moisture, carryover, evaporation and discharge; matched own solids and species assays, destination and uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_rejected_machine | acceptance | rejected_machine | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_carton | dispatch | carton | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_eps | dispatch | eps | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated weighing with receipts, issues, stock and paired internal transfers; supplier/BOM and own grade/composition and moisture basis where physical material applies. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_residual_power | shared_services | residual_power | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated service meter and interval logs; raw kWh for electricity, own composition/calorific value and temperature/pressure for fuel; actual allocation and same-period site reconciliation. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_steam | shared_services | steam | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Meter delivered steam mass kg and own delivered specific enthalpy MJ/kg, common enthalpy datum, pressure, temperature and quality; retain independent return kg and own return MJ/kg on the same datum, supplier gross/net interface and no duplicated boiler/return energy. | MJ | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_condensate_return | shared_services | condensate_return | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Independently meter external return kg and own return MJ/kg at measured pressure, temperature and quality with the same common enthalpy datum as delivery; calculate returned MJ, retain interval and receiving boundary, reconcile gross/net service once and pair internal return transfers. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_makeup_water | shared_services | makeup_water | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated mass/volume and measured density at actual conditions; opening/closing stocks, input moisture, carryover, evaporation and discharge; matched own solids and species assays, destination and uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_sludge | shared_services | sludge | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Calibrated mass/volume and measured density at actual conditions; opening/closing stocks, input moisture, carryover, evaporation and discharge; matched own solids and species assays, destination and uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_water_vapour | shared_services | water_vapour | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Species-specific calibrated exhaust/effluent or leak measurement with matched concentration, flow, time and compartment; validated chemistry-specific method if measurement unavailable; retain uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_co2 | shared_services | co2 | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Species-specific calibrated exhaust/effluent or leak measurement with matched concentration, flow, time and compartment; validated chemistry-specific method if measurement unavailable; retain uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_co | shared_services | co | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Species-specific calibrated exhaust/effluent or leak measurement with matched concentration, flow, time and compartment; validated chemistry-specific method if measurement unavailable; retain uncertainty. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |
| cp_no2 | shared_services | no2 | measurement_record | site; period; configuration; raw amount/unit; Q; N; D; M; route; stock; supplier; allocation; calibration; uncertainty | Retain actual NO and NO2 measurements separately, original report units, NOx-as-NO2-equivalent convention and molecular-mass/molar conversions; aggregate NOx without a species split cannot establish pure NO2. | kg | Each lot or meter interval; period reconciliation | Complete year or justified representative campaign including rejects/rework | Matched configuration process and same-period residual site service | attributable exchange amount / accepted machines | Original receipts; calibration; supplier boundary; applicable assays; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | stainless_sheet; galvanized_sheet; abs_resin; pp_resin; concrete_ballast; fabrication_power; steel_scrap; abs_scrap; sodium_hydroxide; epoxy_powder; isopropanol; surface_power; natural_gas; paint_residue; spent_solvent; ipa_air; wash_motor; dishwash_pump; dishwash_arm; drain_pump; control_board; wire_harness; epdm_seal; manual_crank; assembly_power; resistance_heater; dryer_blower; gas_burner; condenser; charged_heatpump; uncharged_heatpump; r290_fill; r290_recovery; r290_air; drying_power; test_water; test_detergent; test_power; test_wastewater; rejected_machine; carton; eps; residual_power; steam; condensate_return; makeup_water; sludge; water_vapour; co2; co; no2 | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Steam is collected before normalization as delivered kg multiplied by its own delivered MJ/kg under the documented reference state; condensate-return kg times its own return MJ/kg at measured temperature, pressure and quality remains independently recorded on the same common enthalpy datum and period. Use delivered MJ for agreed gross delivery, or delivered minus returned MJ for agreed net heat; never double subtract return or add own-boiler burdens to purchased service. The finite normalize_mass calculation acts on the resulting service q_item; it never substitutes kg steam for MJ or a generic enthalpy.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceability | all inventory rows | Actual configuration, supplier completion, grade/recipe, gate and provider geography/time; every actual exchange atomic and localized; no unsupported UUID substitutes. | BOM; drawings; certificates; direct identities; provider records |
| closure | physical materials and species | Close each metal/polymer/chemical on its own species and wet/dry basis: external input plus opening stock and documented formation equals accepted product, external scrap/sludge/wastewater/release, closing stock and actual reaction/destruction. Each term uses its own assay; oxygen/reagent uptake and reaction products retained. Pair internal returns; never count gross mass as contained metal. Close actual water including input moisture, stocks, evaporation, product carryover, discharge and reaction. Every wet input, product, opening/closing stock, sludge, wastewater and waste uses its own measured water fraction and wet/dry basis; volume terms use their own measured density. Retain paired return transfers and investigate closure against actual combined measurement, sampling and allocation uncertainty. | Matched weighings; assays; moisture; reaction and stock records |
| solvent_charge | isopropanol; spent_solvent; ipa_air; r290_fill; r290_recovery; r290_air | Separate product retention, recovery, capture media, stocks, actual destruction and every air/non-air residual. Capture is not destruction and recovered mass is not zero release. An unexplained balance residual is not automatically an air emission; investigate non-air retained material, waste, water and stock terms first, without assigning an unsupported fate. Investigate closure with actual combined sampling, measurement and allocation uncertainty; no universal tolerance. | Charge/cylinder tare; capture/recovery assays; destruction receipt; species balance |
| utility_reconcile | all utility rows | Each service reconciles the same period/units: imports plus actual generation less exports and storage change equals assigned process use and unassigned residual. Shared services carry only residual; actual onsite generation replaces purchased service for that fraction and adds its own fuel/controls. Investigate negative residual against meter/time/allocation uncertainty; never clip. | Imports/generation/export/storage and submeters; causal allocation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_scope | final_product | Reject appliance/service confusion, mismatched configuration or unsupported classification assignment. Household centrifugation and borderline marketed capacities require explicit review; no automatic mapping from HS or supplier marketing. | unsd-cpc3; thomas-spin |
| measurement_complete | all inventory rows | Require positive N/D, calibrated cp_mass, same configuration and period, supported normalize_mass for every applicable input/output and original Q records. Reject packaging/reject mass in D, double counted bought components/charge or consumer factors. |  |
| balances | physical balances | Require separate gross and contained-species/water/solvent/charge/energy closure with stocks and internal-return cancellation. Unexplained discrepancy beyond actual combined uncertainty requires investigation; no invented default yield or threshold. |  |
| gaps | all exchanges | Unavailable UUID/provider/recipe/measurement is unknown, not zero/not_applicable. Add every actual conditional route exchange before downstream use; report checks performed/skipped and remaining limitations. Candidate methodology does not satisfy publication identity/evidence gates by itself. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual declared household appliance factory manufacture; downstream lifecycle with separately evidenced use/end-of-life |
| excluded_use | Laundry/dishwashing service; generic appliance functional comparison; automatic commercial or spin-dryer assignment |
| required_metadata | All reference qualifiers, model/BOM, N/D/M, Q and providers, make/buy, charge, factory boundaries, allocation and actual exclusions |
| required_quality_disclosure | Measured coverage, route evidence, identity/provider gaps, site period and actual uncertainty; no invented ranges |
| update_trigger | Changed configuration, supplier, grade/recipe, heating/refrigerant route, gate, acceptance or measured service allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version 3.0 explanatory notes, 30 June 2025, printed pp.237,239,241. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current titles/hierarchy and 44622/44812/44911 adjacent boundary; no model crosswalk inferred |
| laundry-alternative-manual | handbook | The Laundry Alternative, WonderWash original product page, publisher snapshot 2026-10-02. https://www.laundry-alternative.com/products/the-wonderwash | Hand drive and ABS; excludes imposed electric motor/spin function; conflicting dimensions and marketing mass/time/water not adopted |
| speedqueen-home-stack | handbook | Speed Queen, ATEE9AWP435AW01 electric / ATGE9AWP305AW01 gas home stack washer dryer, undated original publisher snapshot 2026-10-02, pp.1–3. https://speedqueen.com/au/wp-content/uploads/sites/21/2019/01/Speed-Queen-Stack-ATEE9A-ATGE9A-NEW.pdf | Home design counterexample; separate washer and gas/electric vented dryer; stainless tub, galvanized cabinet; shipping weight not net reference |
| bosch-dishwashers | handbook | Bosch, Stainless Steel Dishwashers original product family page, publisher snapshot 2026-10-02. https://www.bosch-home.com/us/products/dishwashers/stainless-steel-dishwashers/ | Household dishwashing function, stainless design, motor/spray-arm and insulation architecture only; no grade/recipe assumed |
| bosch-dryers-2021 | handbook | Bosch New Zealand, Bosch Dryers brochure, July 2021, pp.4,6. https://media3.bosch-home.com/Documents/MCDOC03215793_Bosch_NZ_Dryer_Brochure.pdf | Heatpump/condensing/washer-dryer alternatives and condensate drainage; actual model supplier scope required |
| bosch-heatpump-r290 | handbook | Bosch, WQB245B0SG Series 8 Heat Pump Dryer specification, undated publisher snapshot 2026-10-02, pp.1–2. https://media3.bosch-home.com/Documents/specsheet/en-MY/WQB245B0SG.pdf | Hermetic R290 heatpump, stainless drum and condensate container; heading says fluorinated greenhouse gases though R290 is propane; no label-derived chemical factor, charge/mass default |
| bosch-condensing-sheet | handbook | Bosch, WTR88T81GB Product information sheet, footer 04.07.2025, pp.1–2. https://media3.bosch-home.com/Documents/eudatasheet/en-IE/WTR88T81GB.pdf | Condensing label counterexample; blank numerical cells and No entry cannot establish factory amounts or absence of refrigerant |
| thomas-spin | handbook | THOMAS, Spin dryer CENTRI 776 SEK original product page, publisher snapshot 2026-10-02. https://thomas-germany.com/en-uk/THOMAS-Spin-dryer-CENTRI-776-SEK/ | Separate centrifugal appliance counterexample and device/boxed mass distinction; model classification remains reviewed |
