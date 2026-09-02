---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of Cattle, Fresh or Chilled

## 1. Scope and Applicability

This PCR applies to foreground data packages for cattle meat leaving the producing facility fresh or chilled. The normal boundary starts with live cattle accepted at the slaughter facility gate and ends with saleable meat at the producing facility gate after slaughter and dressing and, when applicable, chilling, cutting or deboning, packaging, and cold holding.

Covered products are cattle carcass meat and saleable bone-in or boneless cuts in a declared fresh or chilled state. Excluded reference products are live cattle, buffalo meat, edible offal, hides, rendered products, frozen cattle meat, prepared or preserved cattle meat, and retail or food-service products. Cattle raising and inbound transport are upstream; post-gate distribution is downstream.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-fresh-or-chilled |
| classification_refs | CPC 3.0: 21111, Meat of cattle, fresh or chilled, exact |
| covered_products | Fresh or chilled cattle carcass meat and saleable bone-in or boneless cattle-meat cuts |
| excluded_products | Live cattle; buffalo meat; edible offal as reference product; hides; rendered products; frozen, prepared, or preserved cattle meat; post-gate distribution |
| representative_product | Chilled saleable beef cut at the producing facility gate |
| production_route | Accepted live cattle; slaughter and dressing; conditional chilling; conditional cutting or deboning; conditional packaging and cold holding |
| market_state | Fresh or chilled, with product form, grade, bone status, packaging state, and dispatch temperature declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable cattle meat at the producing facility gate in the declared fresh or chilled state |
| How much | 1 kg net product mass, excluding packaging |
| How well | Declared product form, cattle class where known, intended-use grade, bone status, packaging state, thermal state, dispatch temperature, and included route |
| How long or cycle | One production batch or campaign normalized to 1 kg; coverage represents the declared reporting period |
| reference_flow_link | Final saleable cattle-meat output of the selected foreground route |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Beef `06f53118-716c-472d-b6f2-c5924840395c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fresh or chilled state; product form or cut; cattle class where known; intended-use grade; bone status; net mass basis; packaging state; dispatch temperature; facility gate; included route; reporting period |

The selected Tiangong flow supplies identity only. Every foreground package must declare the required qualifiers rather than inherit an undeclared database route qualifier.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure saleable net product mass after subtracting packaging and non-saleable material; normalize the selected route output to 1 kg. |
| `market_state_temperature` | reference product and intermediates | Temperature and time record | °C and time unit | Declare fresh or chilled state, dispatch temperature, holding duration, and measurement point. |
| `live_cattle_mass` | live-cattle input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live mass | Prefer calibrated live-mass records; convert head count only with a batch-specific measured average and retain the calculation. |
| `energy_units` | electricity, heat, and fuels | Applicable energy property | kWh or MJ | Preserve source units and conversion factors; report electricity separately from thermal energy and fuels. |
| `water_units` | process and cleaning water | Mass or volume | kg or m3 | Preserve the measured unit and record any density-based conversion. |
| `packaging_mass` | packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material separately and outside the 1 kg net product mass. |
| `material_balance_units` | cattle, meat, co-products, wastes, and losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile mass terms on a common wet-mass basis unless another basis is declared and converted. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground route | Start with accepted live cattle at the slaughter facility gate and end with saleable fresh or chilled cattle meat at the producing facility gate. Link cattle raising and inbound transport as upstream datasets when included downstream. | `tiangong-beef-slaughter-process` |
| `boundary_required_and_conditional_stages` | process inclusion | Include slaughter and dressing. Include chilling, cutting or deboning, packaging, and cold holding whenever they occur before the declared product leaves the producing facility. | `tiangong-beef-slaughter-process` |
| `boundary_utilities_and_releases` | included operations | Include attributable water, electricity, heat or fuels, sanitation chemicals, refrigerant make-up, packaging, wastewater, treatment-bound residues, and direct releases. |  |
| `boundary_capital_goods` | infrastructure | Exclude capital goods by default; report any included infrastructure as a separate scope extension. |  |
| `boundary_same_category_input` | fresh or chilled cattle-meat input | Record a same-category intermediate once and link it to its upstream conforming process or dataset; do not recursively recreate upstream inventory. |  |
| `boundary_transport` | transport | Exclude post-gate distribution; include and disclose inter-site transport between included foreground facilities. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live cattle accepted at the slaughter facility gate, with live mass, cattle class where known, supplier or origin, time, and inbound holding declared |
| starting_condition_role | Upstream anchor for the slaughter-and-dressing foreground route |
| product_classification_scope | CPC 3.0 code 21111, limited to cattle meat leaving the facility fresh or chilled |
| recursive_input_rule | Record incoming fresh or chilled cattle meat as a linked same-category product input and do not expand it recursively within the receiving process |
| upstream_dataset_requirement | Link live cattle to an applicable cattle-production dataset and disclose production system, live-mass basis, geography, time, and inbound transport treatment |
| disclosure | Declare starting gate, product qualifiers, included stages, inter-site movements, and every extension or exclusion |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dressing` | Cattle reception, slaughter, and dressing | required | Always included for a live-cattle starting condition | Foreground conversion and multi-output separation | Per 1 kg saleable cattle-meat output |
| `chilling_cold_holding` | Chilling and cold holding | conditional | Include for chilled product or controlled cooling or holding before dispatch | Temperature conditioning | Per 1 kg chilled cattle-meat output |
| `cutting_packaging` | Cutting, deboning, packaging, and packaged holding | conditional | Include when any listed operation occurs before dispatch | Product-form conversion and dispatch preparation | Per 1 kg net saleable output |

### Process: Cattle reception, slaughter, and dressing (`slaughter_dressing`)

#### Inputs

##### Product flows

###### Accepted live cattle (`accepted_live_cattle`)

Accepted live cattle anchor the slaughter-stage mass balance.

- Selected flow: Cow `aba9fdf6-b7e4-45cc-a0dd-034cec2b4fc0`
- Flow property / unit: Mass / kg live mass
- Amount rule: Batch-accepted live mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`
- Sources:
- Range: Provisional live-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg live mass/kg meat
  - Basis: accepted live mass per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and sanitation water (`slaughter_water`)

Record supplied water net of documented internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered or invoiced net supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources:
- Range: Provisional water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg water/kg meat
  - Basis: net supplied water per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Slaughter electricity (`slaughter_electricity`)

Record electricity attributable to reception, slaughter, dressing, pumping, ventilation, and sanitation.

- Selected flow: Electricity, medium voltage `460ac059-9bff-49b1-9d19-503be31bd127`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered attributable electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources:
- Range: Provisional electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg meat
  - Basis: electricity per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Slaughter heat or fuel (`slaughter_heat`)

Record purchased heat or each on-site fuel separately.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Energy / MJ
- Amount rule: Metered heat or calculated net fuel energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources:
- Range: Provisional thermal-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ/kg meat
  - Basis: heat or fuel energy per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable cattle meat (`slaughter_meat_output`)

Record the saleable fresh or chilled output and link any downstream on-site process to it.

- Selected flow: Beef `06f53118-716c-472d-b6f2-c5924840395c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg normalized output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `mass-balance-identity`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Raw bovine hides (`raw_hides_output`)

Record hides as product only with beneficial-use disposition evidence.

- Selected flow: Rawhide `440c2098-2f4e-4632-9dcf-32329bcbe4de`
- Flow property / unit: Mass / kg wet hide
- Amount rule: Measured product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`
- Sources:
- Range: Provisional raw-hide screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg wet hide/kg meat
  - Basis: raw hide per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Edible cattle offal (`edible_offal_output`)

Record edible offal separately when transferred as product.

- Selected flow: Edible offal of cattle, fresh, chilled or frozen `a6673976-2ef4-4502-b9f5-bbc57099bb40`
- Flow property / unit: Mass / kg
- Amount rule: Measured product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`
- Sources:
- Range: Provisional edible-offal screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg offal/kg meat
  - Basis: edible offal per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Slaughterhouse wastewater (`slaughter_wastewater`)

Use a matching waste identity when available; do not substitute an unrelated wastewater UUID.

- Selected flow: Slaughterhouse wastewater sent to treatment
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered discharge net of recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastes`
- Sources:
- Range: Provisional wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg wastewater/kg meat
  - Basis: discharge per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inedible animal material (`inedible_animal_material`)

Record treatment-bound blood, bone, condemned material, and inedible residues by actual route.

- Selected flow: Inedible animal material sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by material and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastes`
- Sources:
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg waste/kg meat
  - Basis: treatment-bound animal material per 1 kg saleable meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct releases from on-site fuel use (`slaughter_direct_releases`)

Record each emitted elementary flow separately from fuel consumption.

- Selected flow: Select each applicable elementary flow to air
- Flow property / unit: Mass / kg emitted substance
- Amount rule: Collected fuel quantity times an applicable documented factor, or direct measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable meat output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_direct_releases`
- Sources:
- Range: Provisional per-substance release screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg emitted substance/kg meat
  - Basis: each direct release per 1 kg saleable meat
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Chilling and cold holding (`chilling_cold_holding`)

#### Inputs

##### Product flows

###### Cattle-meat input to chilling (`chilling_meat_input`)

Link this input to the upstream slaughter output.

- Selected flow: Beef `06f53118-716c-472d-b6f2-c5924840395c`
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg chilled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_mass_energy`
- Sources:
- Range: Provisional chilling yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg input/kg chilled output
  - Basis: input mass per 1 kg chilled output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chilling electricity (`chilling_electricity`)

Record refrigeration, fan, pump, and cold-room electricity.

- Selected flow: Electricity, medium voltage `460ac059-9bff-49b1-9d19-503be31bd127`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered attributable electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg chilled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_mass_energy`
- Sources:
- Range: Provisional chilling electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg chilled output
  - Basis: electricity per 1 kg chilled output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`chilling_refrigerant_makeup`)

Record the actual refrigerant type and equipment-specific net make-up.

- Selected flow: Refrigerant, R134a `210b4222-adda-4097-9e79-f2c9a6c172e4`
- Flow property / unit: Mass / kg refrigerant
- Amount rule: Opening plus purchases minus closing, transfers, and recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg chilled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_refrigerant`
- Sources:
- Range: Provisional refrigerant screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg refrigerant/kg chilled output
  - Basis: net make-up per 1 kg chilled output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled cattle meat (`chilled_meat_output`)

Record product mass and exit temperature.

- Selected flow: Beef `06f53118-716c-472d-b6f2-c5924840395c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg normalized chilled output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: chilling-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `mass-balance-identity`
- Range: Chilling output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: chilling-process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

###### Refrigerant released to air (`chilling_refrigerant_release`)

Report unrecovered equipment-specific loss and exclude recovered refrigerant.

- Selected flow: Select applicable refrigerant elementary flow to air
- Flow property / unit: Mass / kg refrigerant
- Amount rule: Net unrecovered refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg chilled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_refrigerant`
- Sources:
- Range: Provisional refrigerant-release screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg refrigerant/kg chilled output
  - Basis: release per 1 kg chilled output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cutting, deboning, packaging, and packaged holding (`cutting_packaging`)

#### Inputs

##### Product flows

###### Cattle-meat input to cutting or packaging (`cutting_meat_input`)

Link the same-category input to the upstream process.

- Selected flow: Beef `06f53118-716c-472d-b6f2-c5924840395c`
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_outputs`
- Sources:
- Range: Provisional conversion-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg input/kg net output
  - Basis: meat input per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cutting and packaging electricity (`cutting_packaging_electricity`)

Record electricity for cutting, packaging, room conditioning, and packaged holding.

- Selected flow: Electricity, medium voltage `460ac059-9bff-49b1-9d19-503be31bd127`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered attributable electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_utilities`
- Sources:
- Range: Provisional electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: MJ/kg net output
  - Basis: electricity per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cutting-room water (`cutting_water`)

Record process and sanitation water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered net supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_utilities`
- Sources:
- Range: Provisional cutting-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water/kg net output
  - Basis: supplied water per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary plastic packaging (`primary_packaging`)

Record actual primary packaging by material.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus verified unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_outputs`
- Sources:
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg packaging/kg net output
  - Basis: primary packaging per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated secondary packaging (`secondary_packaging`)

Record cardboard that leaves the facility with the product.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus verified unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_outputs`
- Sources:
- Range: Provisional cardboard screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg packaging/kg net output
  - Basis: cardboard per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable fresh or chilled cattle meat (`final_meat_output`)

Record net product separately from packaging.

- Selected flow: Beef `06f53118-716c-472d-b6f2-c5924840395c`
- Flow property / unit: Mass / kg net product
- Amount rule: 1 kg normalized net output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `mass-balance-identity`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg net product
  - Basis: declared reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Saleable trim and recovered fat (`cutting_coproducts`)

Record each beneficially used co-product separately.

- Selected flow: Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by actual product identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_outputs`
- Sources:

##### Waste flows

###### Cutting and packaging residues (`cutting_packaging_waste`)

Record treatment-bound trim, bone, condemned material, and packaging scrap by route.

- Selected flow: Cutting and packaging residues sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by material and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_outputs`
- Sources:
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg waste/kg net output
  - Basis: treatment-bound residue per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cutting-room wastewater (`cutting_wastewater`)

Record discharge net of recirculation.

- Selected flow: Cutting-room wastewater sent to treatment
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging_utilities`
- Sources:
- Range: Provisional wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wastewater/kg net output
  - Basis: discharge per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Cold-holding refrigerant released to air (`packaged_refrigerant_release`)

Report equipment-specific loss once and exclude recovered refrigerant.

- Selected flow: Select applicable refrigerant elementary flow to air
- Flow property / unit: Mass / kg refrigerant
- Amount rule: Net unrecovered refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaged_refrigerant`
- Sources:
- Range: Provisional refrigerant-release screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg refrigerant/kg net output
  - Basis: release per 1 kg net saleable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_preserve_multi_output` | slaughter, dressing, cutting, and trimming | Preserve cattle meat, hides, edible offal, recovered fat, and other transferred co-products as measured outputs; do not pre-allocate the core foreground inventory. | `mass-balance-identity` |
| `allocation_subdivide_first` | separable downstream operations | Subdivide independently measured chilling, cutting, packaging, holding, and treatment operations before considering allocation. |  |
| `allocation_product_waste_status` | residual materials | Treat a material as product only when reporting-period records prove beneficial-use transfer; otherwise report it by actual waste treatment route. |  |
| `allocation_single_output_projection` | downstream study | Apply any study-specific single-output allocation outside the unallocated core dataset and disclose method, formula, co-products, factor inputs, time and geography, and sensitivity. |  |
| `allocation_no_avoided_burden_default` | co-products and wastes | Do not apply avoided-product or avoided-treatment credits by default; declare them only as a separate consequential extension. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_slaughter_mass_outputs` | `slaughter_dressing` | live cattle, meat, hides, offal, and co-products | scale and production/dispatch log | batch_id; cattle_class; head_count; live_mass; output_id; output_mass; destination; time | Export calibrated batch scale and disposition records | kg and count | Each batch or dispatch | Full reporting period | Every included receiving and output point | Sum by batch and disposition; normalize to saleable meat | Calibration; batch reconciliation; destination evidence |
| `cp_slaughter_utilities` | `slaughter_dressing` | water, electricity, heat or fuel | meter, invoice, and stock record | meter_id; opening; closing; quantity; unit; fuel_ncv; allocation_basis | Use dedicated meters or documented physical allocation | kg; m3; kWh; MJ | Meter interval, aggregated monthly | Full reporting period | Included slaughter and sanitation systems | Net consumption normalized to output | Calibration; invoice and stock reconciliation |
| `cp_slaughter_wastes` | `slaughter_dressing` | wastewater and animal residues | effluent meter, waste scale, manifest | stream_id; mass_or_volume; recirculation; route; manifest_id | Meter discharge and weigh solids by route | kg or m3 | Continuous or each dispatch | Full reporting period | All discharge and transfer points | Subtract recirculation; sum by route; normalize | Calibration; manifests; treatment receipts |
| `cp_slaughter_direct_releases` | `slaughter_dressing` | direct fuel emissions | fuel record, factor record, or measurement | fuel_id; quantity; pollutant_id; factor; factor_unit; factor_source; measured_release | Calculate each pollutant from collected fuel or measure directly | kg substance | Each fuel period or monitoring event | Full reporting period | On-site combustion in scope | Sum each elementary flow separately and normalize | Fuel reconciliation; factor citation; monitoring report |
| `cp_chilling_mass_energy` | `chilling_cold_holding` | meat, temperature, time, and electricity | scale, temperature, time, and meter record | batch_id; input_mass; output_mass; entry_temp; exit_temp; entry_time; exit_time; electricity | Link batches to calibrated records and meters | kg; °C; time; kWh | Each batch and meter interval | Full reporting period and holding duration | Included chillers and cold rooms | Normalize linked mass and energy to chilled output | Calibration; batch linkage; meter reconciliation |
| `cp_chilling_refrigerant` | `chilling_cold_holding` | refrigerant make-up and release | inventory and service record | type; opening; purchases; additions; closing; transfers; recovery; equipment_id | Equipment-specific inventory balance | kg refrigerant | Each service and period close | Full reporting period | Chilling equipment only | Calculate net unrecovered loss once per equipment | Purchases; service logs; recovery certificates |
| `cp_cutting_packaging_outputs` | `cutting_packaging` | meat, packaging, co-products, and residues | scale, bill of materials, stock, and disposition record | batch_id; meat_input; product_output; material_id; opening; receipts; issues; returns; closing; scrap; destination | Reconcile scales and stock movements by batch/material | kg | Each batch and stock period | Full reporting period | Included cutting and packaging lines | Sum by identity and disposition; normalize to net output | Calibration; stock and mass reconciliation |
| `cp_cutting_packaging_utilities` | `cutting_packaging` | electricity, water, and wastewater | meter and invoice record | meter_id; opening; closing; unit; allocation_basis; discharge; recirculation | Use dedicated meters or documented shared-load allocation | kg; m3; kWh; MJ | Meter interval, aggregated monthly | Full reporting period | Included operations and sanitation | Net supply/discharge normalized to net output | Calibration; invoice reconciliation; allocation worksheet |
| `cp_packaged_refrigerant` | `cutting_packaging` | packaged-holding refrigerant release | inventory and service record | type; opening; purchases; additions; closing; transfers; recovery; equipment_id | Balance only equipment not assigned to chilling | kg refrigerant | Each service and period close | Full reporting period | Packaged cold holding | Calculate net unrecovered loss once per equipment | Service logs; recovery certificates; scope reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | each row | Normalized amount = reporting-period flow quantity / quantitative-reference output mass | flow quantity; output mass | amount per kg output | `mass-balance-identity` |
| `calc_live_to_meat_ratio` | slaughter yield | Accepted live mass / saleable cattle-meat mass | live mass; meat mass | kg live mass/kg meat | `mass-balance-identity` |
| `calc_mass_balance` | each transforming process | Unexplained difference = mass inputs - product outputs - waste outputs - measured mass releases; disclose moisture or evaporation separately | mass inputs; products; wastes; releases | mass-balance statement | `mass-balance-identity` |
| `calc_energy_conversion` | energy | Convert with documented factors while preserving original unit and carrier | quantity; unit; factor | kWh or MJ by carrier |  |
| `calc_refrigerant_loss` | refrigeration | Opening + purchases + additions - closing - transfers - recovered quantity | stock and service fields | kg unrecovered refrigerant | `mass-balance-identity` |
| `calc_packaging_consumption` | packaging | Opening + receipts - closing - unused returns; report scrap and shipped packaging separately | stock and output fields | kg consumed, scrapped, and shipped | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Resolve to CPC 3.0 code 21111 and declare every required qualifier. | Classification and product records |
| `dq_measurement` | measured fields | Identify calibrated instrument, unit, interval, conversion, and shared-load allocation. | Calibration and calculation records |
| `dq_temporal` | reporting period | Cover the full period or campaign, including abnormal batches and seasonal holding effects, or justify exclusions. | Production calendar and coverage check |
| `dq_site_scope` | facilities | Identify included facilities, lines, cold rooms, inter-site transfers, and shared utilities. | Site and equipment records |
| `dq_completeness` | inventory | Reconcile inputs, products, co-products, wastes, utilities, and releases and disclose omissions. | Process map and reconciliation |
| `dq_disposition` | products and wastes | Support product-versus-waste status with period-specific destination evidence. | Transfer record or waste manifest |
| `dq_traceability` | calculated values | Preserve raw fields, formula, factor identity, conversion, reviewer, and protocol link. | Calculation audit trail |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product category | Fail when the reference product is not cattle meat in the declared fresh or chilled state or is an excluded product. | `unsd-cpc-3-21111` |
| `validation_reference_flow` | reference flow | Require 1 kg net product using the declared Beef, Mass, Units of mass, and kg identities; packaging mass is separate. |  |
| `validation_qualifiers` | metadata | Require thermal state, product form, cattle class where known, grade, bone status, packaging state, temperature, gate, route, and period. |  |
| `validation_boundary` | system boundary | Require live cattle at the slaughter gate unless a downstream process explicitly uses a linked same-category input. |  |
| `validation_processes` | process map | Require slaughter and dressing and every conditional process whose condition occurred. | `tiangong-beef-slaughter-process` |
| `validation_recursive_input` | same-category input | Require one upstream link and prohibit recursive duplication. |  |
| `validation_mass_balance` | each process | Require measured inputs, products, co-products, wastes, and releases to reconcile and explain every non-zero difference. | `mass-balance-identity` |
| `validation_multi_output` | allocation | Require explicit co-product outputs and reject allocation factors embedded in core foreground amounts. |  |
| `validation_inventory_coverage` | included operations | Require applicable utilities, sanitation, packaging, wastewater, residues, and direct releases or an evidence-backed not-applicable declaration. |  |
| `validation_refrigeration` | chilling and holding | Require temperature/time records and equipment-specific refrigerant accounting. |  |
| `validation_protocol_links` | collected or calculated rows | Require a declared collection protocol with raw fields and quality evidence. |  |
| `validation_evidence` | ranges and factors | Treat reasoned-estimate ranges as candidate QA screens only; publication-critical factors and ranges require reviewed evidence. |  |
| `validation_dataset_profile` | downstream use | Preserve gate, multi-output status, route, qualifiers, upstream link, quality disclosure, and exclusions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground multi-output facility-gate dataset for fresh or chilled cattle-meat production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Gate-to-gate and downstream models that preserve the route, starting gate, qualifiers, multi-output structure, upstream cattle link, and quality disclosure |
| excluded_use | Cattle raising, buffalo meat, offal as reference product, frozen or prepared meat, post-gate distribution, or undisclosed pre-allocated single-output data |
| required_metadata | canonical PCR id; CPC reference; facility and geography; period; thermal state; dispatch temperature; product form; cattle class where known; grade; bone status; packaging; route; upstream cattle dataset; inter-site transport; dispositions |
| required_quality_disclosure | Calibration and coverage; shared-meter allocation; mass balance; disposition evidence; refrigerant balance; source applicability; provisional-range status; exclusions and uncertainty |
| update_trigger | Material change in product state or form, grade, starting gate, process route, cooling, packaging, energy or refrigerant system, disposition, upstream link, measurement, or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21111` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 21111, represented in repository CPC source and normalized artifacts | Product identity and classification scope |
| `tiangong-beef-slaughter-process` | Dataset (`dataset`) | Tiangong process `9fdaf060-a29c-4f22-9146-86439bc8a256`, Beef slaughtering and carcass dressing | Candidate process decomposition and flow-family coverage, not universal quantities |
| `tiangong-beef-slaughter-stage` | Dataset (`dataset`) | Tiangong process `f6465ff5-255b-4143-9364-10ca7828577c`, slaughtering stage, beef cattle | Corroboration of slaughter stage and electricity as candidate input, not universal quantities |
| `mass-balance-identity` | Method factor (`method_factor`) | Conservation-of-mass identity applied to measured foreground and stock records | Reference normalization, yields, mass balance, refrigerant and packaging balances |
