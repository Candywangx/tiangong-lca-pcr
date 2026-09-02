---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-in-e3cb3e70
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Chocolate and other food preparations containing cocoa (except sweetened cocoa powder), in bulk forms

## 1. Scope and Applicability

This PCR applies to the gate-to-gate production of chocolate and other food preparations containing cocoa that leave the manufacturing site in a declared bulk form for industrial or wholesale use. It covers recipe preparation from received cocoa materials and other ingredients, mixing, particle-size reduction when used, conching or equivalent flavour and rheology development when used, final standardisation or conditioning, bulk filling, and the attributable cleaning, utility, waste, wastewater, and direct-emission activities.

The foreground boundary starts with cocoa liquor or mass, cocoa butter, cocoa powder, sugars or other sweeteners, milk ingredients, permitted fats, emulsifiers, flavourings, and other recipe ingredients received at the manufacturing site. Cocoa-bean cultivation, fermentation, drying, transport, and conversion of beans or nibs into the received cocoa materials are represented by upstream datasets. If those operations occur at the same site, keep them as separately metered upstream unit processes and transfer their burdens through the cocoa-material inputs so that they are not counted twice.

The PCR does not cover sweetened cocoa powder, unsweetened cocoa powder as the reference product, cocoa liquor or cocoa butter sold as such, white chocolate or other confectionery without cocoa solids, consumer-ready non-bulk chocolate formats, downstream moulding or enrobing performed by the customer, retail packaging, distribution beyond the manufacturing gate, use, or end of life. The data package shall declare the applicable market specification and the actual meaning of `bulk` through its delivery state, container or transport system, and net content; this PCR does not impose a universal package-size threshold.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-in-e3cb3e70 |
| classification_refs | CPC 3.0: 23650, exact mapping context only |
| covered_products | Bulk dark, sweet, milk, couverture, compound, or other cocoa-containing chocolate masses and cocoa-containing food preparations, supplied as liquid, paste, granules, chips, blocks, slabs, powder, or another declared bulk state |
| excluded_products | Sweetened cocoa powder; unsweetened cocoa powder; cocoa liquor, cocoa butter, or cocoa cake sold as such; products without cocoa solids; consumer-ready non-bulk chocolate or confectionery; customer-side moulding, coating, retail packing, distribution, use, and end of life |
| representative_product | Bulk chocolate mass ready for industrial use at the manufacturing gate |
| production_route | Received cocoa materials and recipe ingredients to dosing and mixing, refining where required, conching or equivalent treatment where required, standardisation, conditioning, and bulk dispatch |
| market_state | Net product at the manufacturing gate in the declared physical state, temperature condition, bulk delivery format, and legal or customer specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of bulk chocolate or another bulk food preparation containing cocoa with a declared formulation and physical state at the manufacturing gate |
| How much | 1 kg net product, excluding the mass of disposable packaging and reusable transport equipment |
| How well | Conforming to the declared product subtype, formulation, cocoa and milk-solids claims where relevant, applicable legal or customer specification, and release quality criteria |
| How long or cycle | One production lot represented at the point of transfer through the manufacturing gate; no use duration is assigned |
| reference_flow_link | 1 kg of the declared bulk product at the manufacturing gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Chocolate and other food preparations containing cocoa (except sweetened cocoa powder), in bulk forms `7d08586f-18bc-42f3-b262-54f8d559de12` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; complete formulation or recipe-family identifier; total cocoa solids and relevant cocoa-material fractions; milk solids and non-cocoa vegetable fat where applicable; moisture or dry-matter basis; physical state; product temperature at the reference point; bulk delivery and packaging format; net content; production route; manufacturing geography; applicable legal or customer specification; allocation method; data period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass at the declared gate condition. Exclude disposable packaging, pallets, intermediate bulk containers, tankers, and other reusable transport equipment. |
| `ingredient_mass_basis` | cocoa materials and recipe ingredients | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record ingredient mass as received and preserve moisture or dry-matter information needed to reconcile the recipe. Do not mix dry-basis composition percentages with as-supplied masses without an explicit conversion. |
| `energy_carrier_separation` | electricity, purchased heat, and fuels | Energy | kWh and MJ | Keep electricity, purchased heat or steam, and each onsite fuel separate. Preserve original meter units and document every conversion; do not report all energy carriers as an undifferentiated total. |
| `water_accounting` | process, cooling, and cleaning water | Mass or volume | kg or m3 | Distinguish gross recirculating throughput from freshwater intake, internally recycled water, and wastewater discharge. Convert volume to mass only with a documented density and temperature assumption. |
| `packaging_separation` | bulk packaging and transport equipment | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report disposable bulk packaging as a separate input. Report reusable transport equipment through its use or allocation model and never include its full mass in the 1 kg reference product. |
| `loss_and_rework_accounting` | intermediate and finished-product losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Internal rework stays inside the mass balance and receives no separate avoided burden. Record material leaving the foreground boundary according to its actual product, waste, wastewater, or emission route. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received cocoa materials and all other formulation ingredients at the manufacturing-site gate, each with declared physical state, moisture or dry-matter basis where relevant, origin dataset, and received mass |
| starting_condition_role | Foreground manufacturing input boundary; cocoa cultivation and conversion to the received cocoa materials are upstream |
| product_classification_scope | The declared bulk product must fit the semantic scope in Section 2; CPC 3.0 code 23650 is mapping context rather than the source of canonical PCR identity |
| recursive_input_rule | A same-category chocolate or cocoa-containing preparation used as an ingredient is recorded once as a product input with an upstream dataset; do not recursively reproduce its manufacturing inside this foreground process |
| upstream_dataset_requirement | Provide upstream datasets for every cocoa material, sweetener, milk ingredient, fat, other material, packaging material, electricity, purchased heat, fuel, water supply, transport included before the gate, and waste or wastewater treatment service that crosses the foreground boundary |
| disclosure | Declare recipe and product subtype, cocoa and milk-solids information where relevant, starting cocoa-material form, integrated or outsourced cocoa preparation, included process steps, omitted or customer-side steps, physical delivery state, bulk format, allocation, geography, data period, and any use of provisional estimates |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_materials` | foreground start | Start at received cocoa materials and recipe ingredients and include all attributable onsite operations through bulk dispatch, including cleaning, utilities, wastes, wastewater, and direct emissions. | `eu-jrc-fdm-bref-2019`; `codex-cxs-87-1981` |
| `boundary_upstream_links` | upstream supply | Link upstream production for cocoa, sugar or sweeteners, milk ingredients, fats, utilities, packaging, and treatment services; do not replace these with zero-burden inputs. | `eu-pef-2021-2279`; `konstantas-et-al-2018` |
| `boundary_integrated_cocoa` | integrated sites | When beans or nibs are processed onsite, model cocoa preparation as separately metered upstream unit processes and transfer the burdens through cocoa-material inputs to avoid omission or double counting. | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `boundary_bulk_gate` | foreground end | End at the manufacturing gate with net bulk product in its declared delivery condition. Include disposable bulk packaging supplied with the product; exclude downstream customer forming, retail packaging, distribution, use, and end of life. | `eu-pef-2021-2279` |
| `boundary_food_specification` | product identity | Apply the declared market's legal or customer specification. Do not treat one Codex or EU composition threshold as universal across every market or every other cocoa-containing preparation. | `codex-cxs-87-1981`; `eu-directive-2000-36-ec` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_batching` | Ingredient receipt, storage, dosing, and recipe preparation | required | Always include received formulation materials and attributable receipt or preparation losses. | Foreground recipe formation | kg batched ingredients per kg reference product |
| `mass_manufacture` | Mixing, refining, conching, and mass standardisation | required | Include the actual route; declare refining, conching, homogenisation, or equivalent steps that are not used. | Foreground transformation of the recipe into finished mass | kg manufactured mass per kg reference product |
| `bulk_conditioning_dispatch` | Final conditioning, bulk storage, filling, and dispatch preparation | required | Include the physical operations required for the declared delivery state and bulk format. | Foreground product finishing and reference-output formation | 1 kg net bulk product |
| `cleaning_site_services` | Cleaning, shared site services, wastewater, waste, and direct-emission accounting | required | Include attributable shared activity and all relevant boundary-crossing outputs; use separately metered process data where available. | Foreground support and environmental control | allocated service and outputs per kg reference product |

### Process: Ingredient receipt, storage, dosing, and recipe preparation (`ingredient_batching`)

#### Inputs

##### Product flows

###### Cocoa-material inputs (`cocoa_material_inputs`)

Record each received cocoa liquor or mass, cocoa butter, cocoa powder, or other cocoa material separately with supplier, origin dataset, received state, and mass.

- Selected flow: Site-specific cocoa material
- Flow property / unit: Mass / kg
- Amount rule: measured received or issued mass of each cocoa material attributed to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_material_records`
- Sources: `codex-cxs-87-1981`; `eu-directive-2000-36-ec`; `konstantas-et-al-2018`
- Range: Provisional cocoa-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 1.10
  - Unit: kg/kg reference product
  - Basis: broad recipe-dependent amount of all cocoa materials per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sugars and other sweeteners (`sweetener_inputs`)

Record each sugar, syrup, or other sweetener by as-supplied mass; preserve dry matter when it affects recipe reconciliation.

- Selected flow: Site-specific sugar or sweetener
- Flow property / unit: Mass / kg
- Amount rule: measured received or issued mass attributed to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_material_records`
- Sources: `codex-cxs-87-1981`; `eu-directive-2000-36-ec`; `konstantas-et-al-2018`
- Range: Provisional sweetener screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg/kg reference product
  - Basis: broad recipe-dependent amount of sugars and other sweeteners per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Milk, fats, emulsifiers, flavourings, and other recipe ingredients (`other_recipe_inputs`)

Record every non-cocoa recipe ingredient separately rather than collapsing it into an unexplained balancing flow.

- Selected flow: Site-specific milk ingredient, fat, emulsifier, flavouring, or other food ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured received or issued mass of each ingredient attributed to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_material_records`
- Sources: `codex-cxs-87-1981`; `eu-directive-2000-36-ec`; `konstantas-et-al-2018`
- Range: Provisional other-ingredient screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.80
  - Unit: kg/kg reference product
  - Basis: broad combined amount of milk ingredients, non-cocoa fats, emulsifiers, flavourings, and other recipe ingredients per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Batched ingredient mass (`batched_ingredient_mass`)

Calculate the mass transferred to manufacturing from issued ingredients, returned ingredients, and separately recorded receipt or batching losses.

- Selected flow: Batched chocolate or cocoa-preparation ingredient mass
- Flow property / unit: Mass / kg
- Amount rule: calculated mass transferred to the manufacturing step
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net bulk reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_yield_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Ingredient receipt and batching losses (`ingredient_batching_losses`)

Record spilled, damaged, expired, contaminated, or unrecovered ingredient material that leaves the process as waste; exclude material returned to stock or internal rework.

- Selected flow: Site-specific food-material waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional batching-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg reference product
  - Basis: ingredient waste leaving the batching process per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Mixing, refining, conching, and mass standardisation (`mass_manufacture`)

#### Inputs

##### Product flows

###### Batched ingredient input (`batched_mass_input`)

Transfer the calculated batched ingredient mass without adding a second upstream burden.

- Selected flow: Batched chocolate or cocoa-preparation ingredient mass
- Flow property / unit: Mass / kg
- Amount rule: equal to the corresponding transferred output from `ingredient_batching`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net bulk reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_yield_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Manufacturing electricity (`manufacturing_electricity`)

Record metered electricity for mixing, refining, conching or equivalent treatment, pumping, and attributable process controls.

- Selected flow: Electricity supply, site-specific mix
- Flow property / unit: Energy / kWh
- Amount rule: meter reading or documented submeter allocation for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 5
  - Unit: kWh/kg reference product
  - Basis: broad route- and technology-dependent manufacturing electricity per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased heat or steam (`manufacturing_thermal_energy`)

Record purchased heat or steam used for melting, temperature control, conching, cleaning attributable to the process, or other manufacturing duty. Onsite fuel and its direct emissions shall be recorded instead when heat is generated onsite.

- Selected flow: Site-specific purchased heat or steam
- Flow property / unit: Energy / MJ
- Amount rule: metered or calculated delivered thermal energy attributed to the production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg reference product
  - Basis: broad route- and technology-dependent delivered heat per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Net cooling-water intake (`manufacturing_cooling_water`)

Record net freshwater make-up for process cooling separately from recirculating-loop throughput and separately from cleaning water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered freshwater make-up attributed to manufacturing cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_water_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional cooling-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: net freshwater make-up for manufacturing cooling per kg net bulk product, excluding recirculating throughput
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Manufactured chocolate or cocoa-preparation mass (`manufactured_product_mass`)

Record the mass transferred to final conditioning after actual mixing, refining, conching or equivalent treatment, and standardisation.

- Selected flow: Manufactured chocolate or cocoa-containing preparation mass
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with ingredients, process losses, and retained material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net bulk reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_yield_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Manufacturing losses and out-of-specification mass (`manufacturing_losses`)

Record mass leaving manufacturing as waste or a separately sold lower-grade product. Keep internal rework inside the process mass balance.

- Selected flow: Site-specific food-material waste or co-product
- Flow property / unit: Mass / kg
- Amount rule: measured mass by destination and regulatory status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional manufacturing-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg reference product
  - Basis: material leaving the manufacturing step as waste or co-product per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Manufacturing air emissions (`manufacturing_air_emissions`)

Record relevant measured or calculated dust, volatile organic compounds, and other direct process emissions by substance and release compartment; do not include upstream power-generation emissions here.

- Selected flow: Site-specific elementary emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated load from concentration and exhaust-flow records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional direct-air-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg/kg reference product
  - Basis: combined first-pass screening amount of direct process air emissions per kg net bulk product; actual substances remain separate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Final conditioning, bulk storage, filling, and dispatch preparation (`bulk_conditioning_dispatch`)

#### Inputs

##### Product flows

###### Manufactured mass input (`manufactured_mass_input`)

Transfer manufactured mass to the final conditioning and bulk-dispatch process without duplicating its upstream burden.

- Selected flow: Manufactured chocolate or cocoa-containing preparation mass
- Flow property / unit: Mass / kg
- Amount rule: equal to the corresponding transferred output from `mass_manufacture`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net bulk reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_yield_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Disposable bulk packaging (`bulk_packaging_input`)

Record liners, bags, cartons, drums, or other disposable packaging delivered with the product. Model reusable tanks or containers through a documented use allocation.

- Selected flow: Site-specific bulk packaging material
- Flow property / unit: Mass / kg
- Amount rule: packaging issue records minus unused returns, allocated over net filled product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bulk_dispatch_records`
- Sources: `eu-pef-2021-2279`; `konstantas-et-al-2018`
- Range: Provisional bulk-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg reference product
  - Basis: disposable packaging supplied per kg net bulk product; zero applies to unpackaged tanker delivery
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning and filling electricity (`dispatch_electricity`)

Record attributable electricity for tempering or controlled cooling where used, bulk storage temperature control, pumps, and filling equipment.

- Selected flow: Electricity supply, site-specific mix
- Flow property / unit: Energy / kWh
- Amount rule: meter reading or documented submeter allocation for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional conditioning and filling electricity estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg reference product
  - Basis: broad electricity estimate for final conditioning, storage, pumping, and filling per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net bulk reference product (`bulk_reference_product`)

This is the normalized reference output after deduction of packaging and reusable transport-equipment mass.

- Selected flow: Chocolate and other food preparations containing cocoa (except sweetened cocoa powder), in bulk forms `7d08586f-18bc-42f3-b262-54f8d559de12`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net bulk product after normalization from measured filled or dispatched mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bulk_dispatch_records`
- Sources: `codex-cxs-87-1981`; `eu-directive-2000-36-ec`

##### Waste flows

###### Filling rejects and packaging waste (`bulk_filling_losses`)

Record product and packaging material rejected during conditioning or filling by actual destination; exclude product returned to the same production lot as internal rework.

- Selected flow: Site-specific food-material or packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by material and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_dispatch_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional filling-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg reference product
  - Basis: product and packaging rejects leaving final conditioning and filling per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, shared site services, wastewater, waste, and direct-emission accounting (`cleaning_site_services`)

#### Inputs

##### Product flows

###### Cleaning-water intake (`cleaning_water_input`)

Record freshwater used for wet cleaning and clean-in-place operations after deducting internally reused water; dry cleaning and pigging do not create a zero-water assumption for the remaining wet-cleaning steps.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered freshwater intake attributable to product-contact and area cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional cleaning-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: freshwater intake for attributable cleaning per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning agents (`cleaning_agent_inputs`)

Record each cleaning or disinfection chemical as supplied and preserve concentration information needed to calculate active substance where required.

- Selected flow: Site-specific cleaning or disinfection agent
- Flow property / unit: Mass / kg
- Amount rule: issue, dosing, or purchase records attributed to cleaning activity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional cleaning-agent screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: as-supplied cleaning and disinfection agents per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared site energy (`shared_site_energy`)

Record attributable refrigeration, compressed air, ventilation, cleaning, wastewater-treatment, and other shared energy not already included in process meters.

- Selected flow: Site-specific electricity, heat, or fuel input recorded separately by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: separate meter reading or documented allocation of shared service energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_service_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`
- Range: Provisional shared-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg reference product
  - Basis: electricity-equivalent screening amount for attributable shared services per kg net bulk product; actual carriers remain separate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Attributable wastewater (`wastewater_output`)

Record wastewater mass or volume by treatment route, with recirculated clean cooling water excluded and relevant pollutant measurements retained separately.

- Selected flow: Wastewater to site-specific treatment
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water-balance calculation attributed to the production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_waste_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: attributable wastewater leaving the foreground system per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Solid cleaning and treatment residues (`solid_residue_output`)

Record recovered product residues, screenings, wastewater-treatment sludge, spent filters, and other solid wastes separately by material and destination.

- Selected flow: Site-specific solid waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional solid-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg reference product
  - Basis: attributable solid cleaning and treatment residues per kg net bulk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct shared-site emissions (`shared_site_direct_emissions`)

Record direct combustion emissions, refrigerant losses, and relevant wastewater releases attributable to the product by substance and compartment. Do not place upstream electricity or purchased-heat emissions in this row.

- Selected flow: Site-specific elementary emission
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net bulk reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional direct-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: combined first-pass screening amount of attributable direct shared-site emissions per kg net bulk product; actual substances and compartments remain separate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multifunctional processes and shared services | Avoid allocation by subdivision, separate meters, batch records, or system expansion where appropriate. Collect directly attributable inputs and outputs before applying an allocation factor. | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | unavoidable multifunctionality | If subdivision or system expansion is not possible, use a documented causal physical relationship. Use another justified relationship, including economic value, only when no defensible physical relationship exists; report quantities, prices, period, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_internal_rework` | internal rework | Return internal rework to the applicable process mass balance without a co-product credit and without adding the same upstream burden twice. | `eu-pef-2021-2279` |
| `allocation_saleable_secondary_output` | saleable off-specification material or recovered product | Treat a separately sold output as a co-product rather than waste, subdivide its directly attributable handling where possible, and disclose the residual allocation method. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | wastes and wastewater | Assign collection and treatment burdens to the process that generates the waste. Do not claim avoided-production credits in the foreground dataset unless a downstream study explicitly applies and discloses a compatible recycling or substitution method. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formula_material_records` | `ingredient_batching` | cocoa, sweetener, milk, fat, and other recipe inputs | batch recipe, warehouse issue, receipt, return, and supplier record | material_id; supplier; upstream_dataset; lot_id; gross_mass; tare_mass; net_mass; moisture_or_dry_matter; returned_mass | reconcile approved recipe with calibrated scale and inventory transactions | kg | each batch or continuous campaign | representative reporting period with all included production lots | all lines and storage points supplying the declared product | sum net issued mass minus documented unused returns by material, then normalize to net product | scale calibration; lot traceability; recipe approval; stock reconciliation |
| `cp_batch_yield_records` | `mass_manufacture` | intermediate transfers, rework, and material losses | batch sheet, tank level or scale record, rework log, waste ticket | batch_id; input_mass; transfer_mass; retained_mass; rework_mass; waste_mass; destination | reconcile measured transfers and material disposition for each lot | kg | each batch or campaign | same period as product output | all manufacturing equipment used for the declared route | aggregate by disposition and apply `calc_mass_balance` | calibrated measurement; signed batch record; waste receipt; reconciliation review |
| `cp_process_energy_records` | `mass_manufacture` | manufacturing and conditioning electricity, purchased heat, and steam | submeter, utility invoice, runtime and equipment record | meter_id; carrier; opening_reading; closing_reading; unit; batch_or_time_share; production_mass | use direct submetering first; otherwise documented time, load, or throughput allocation | kWh or MJ | meter interval and monthly reconciliation | representative reporting period | all process and final-conditioning equipment within the boundary | subtract non-production use and allocate documented shared use before normalization | meter calibration; invoice tie-out; allocation worksheet; operating log |
| `cp_cooling_water_records` | `mass_manufacture` | cooling-water make-up and recirculation | water meter, cooling-loop log, blowdown and discharge record | source; make_up_volume; recirculated_volume; blowdown_volume; unit; density_assumption | meter freshwater make-up and discharge separately from loop throughput | kg or m3 | meter interval and monthly reconciliation | representative reporting period | all cooling loops serving included equipment | report net intake and wastewater separately; never add recirculating throughput as freshwater | meter calibration; water balance; maintenance log |
| `cp_bulk_dispatch_records` | `bulk_conditioning_dispatch` | net product, disposable packaging, reusable equipment use, and filling rejects | fill-scale record, dispatch note, packaging issue and return log | lot_id; gross_filled_mass; tare_mass; net_product_mass; packaging_material; packaging_mass; reusable_container_cycles; reject_mass | reconcile calibrated filling records to dispatched net mass and packaging inventory | kg | each fill or dispatch lot | same period as product output | every bulk filling and dispatch route in scope | sum net product and material-specific packaging, allocate reusable equipment by documented cycles, then normalize | scale calibration; dispatch record; packaging stock reconciliation; container-use log |
| `cp_cleaning_records` | `cleaning_site_services` | cleaning water and agents | CIP or manual cleaning log, water meter, chemical dosing record | cleaning_event; equipment; water_intake; recycled_water; chemical_id; as_supplied_mass; concentration; start_end_time | meter or dose each cleaning event and link it to products or campaigns | kg or m3 | each cleaning event | representative reporting period | product-contact equipment and attributable production areas | assign direct events to the lot; allocate shared events using cleaned-equipment time or throughput and disclose the basis | meter and dosing calibration; sanitation record; chemical inventory tie-out |
| `cp_shared_service_records` | `cleaning_site_services` | refrigeration, compressed air, ventilation, water treatment, and other shared energy | submeter, main meter, equipment runtime, maintenance record | service; carrier; energy; runtime; load; allocation_driver; production_mass | use submetering where available and a documented causal driver otherwise | kWh or MJ | meter interval and monthly reconciliation | representative reporting period | all shared services attributable to included production | subtract separately metered process energy and allocate the residual once | meter calibration; utility tie-out; allocation review; no-double-count check |
| `cp_wastewater_waste_records` | `cleaning_site_services` | wastewater and solid wastes | discharge meter, laboratory record, waste manifest, treatment record | stream; mass_or_volume; pH; temperature; COD_or_TOC; relevant_pollutants; waste_material; treatment_route | meter streams and retain representative analyses for relevant pollutants | kg, m3, or kg substance | continuous or event records with periodic laboratory analysis | representative reporting period | every included discharge point and solid-waste route | aggregate by stream, substance, and treatment route before normalization | meter calibration; laboratory method; chain of custody; manifest reconciliation |
| `cp_direct_emissions_records` | `cleaning_site_services` | direct air, water, and soil emissions | stack or discharge measurement, fuel record, refrigerant log, approved factor calculation | substance; compartment; measured_concentration; flow; operating_time; activity_amount; factor; factor_source | direct measurement where required; otherwise multiply collected activity by a documented applicable factor | kg substance | event or reporting interval appropriate to the source | representative reporting period | every relevant direct source within the boundary | calculate substance-specific loads, assign once to process or shared service, and normalize | calibration; laboratory report; factor reference; calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory flows | normalized amount = attributable period or lot amount / net reference-product mass for the same scope | attributable amount; net product mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_net_product_mass` | reference output | net product mass = gross filled or dispatched mass - packaging tare - reusable transport-equipment tare | gross mass; disposable packaging tare; reusable equipment tare | kg net bulk product | `eu-pef-2021-2279` |
| `calc_mass_balance` | each batch and reporting period | mass-balance difference = total material inputs - net product - outputs sent to rework, co-product, waste, wastewater solids, or direct release - documented retained inventory change; investigate and disclose unresolved difference | material inputs; product; rework; co-products; wastes; releases; inventory change | mass-balance difference and reconciliation status | `eu-jrc-fdm-bref-2019` |
| `calc_water_balance` | cooling and cleaning water | net water intake = freshwater intake - water returned unchanged outside the product system; report recirculated throughput separately and calculate wastewater by metered discharge or reconciled balance | freshwater; recycled water; recirculation; evaporation; product water; discharge | net intake, recirculation disclosure, and wastewater | `eu-jrc-fdm-bref-2019` |
| `calc_shared_service_allocation` | shared energy, water, cleaning, and treatment | assign direct-metered quantities first; allocate only the residual using a causal driver such as runtime, cleaned-equipment time, or throughput and document the driver | direct meter data; shared total; driver values | attributable shared-service quantity | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |
| `calc_direct_emission_load` | measured direct emissions | emission load = concentration x dry or wet exhaust/discharge flow x operating time, with compatible units and stated reference conditions; alternatively use collected activity x documented factor | concentration and flow or activity and factor | kg substance by compartment | `eu-jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve an approved specification and lot-level evidence for every required qualifier, including formulation family, cocoa and milk-solids declarations where relevant, physical state, temperature, and bulk format. | approved specification; certificate of analysis; batch release; dispatch record |
| `dq_temporal_representativeness` | foreground records | Use a period representative of normal production and covering seasonal, recipe, and operating variation. Prefer twelve consecutive months; disclose a shorter period, shutdowns, trials, and abnormal campaigns. | dated meter and batch coverage; production calendar; exception log |
| `dq_process_completeness` | process map | Reconcile the declared route against the four process groups and explain every omitted operation, outsourced step, or zero flow. | process flow diagram; equipment list; scope review |
| `dq_meter_and_mass_reconciliation` | material, product, energy, and water | Use calibrated instruments or traceable records, reconcile totals to invoices or stock movement, and prevent quantities from being assigned to more than one process. | calibration certificate; invoice tie-out; stock reconciliation; no-double-count review |
| `dq_upstream_datasets` | cocoa, sweetener, milk, fats, packaging, utilities, and treatment | Select datasets representative of material identity, geography, technology, and time; disclose proxy datasets and whether cocoa land-use-change treatment is included. | dataset metadata; supplier origin; proxy rationale; land-use-change disclosure |
| `dq_emission_and_waste_identity` | direct releases and treatment outputs | Preserve substance, compartment, treatment route, measurement method, factor source, and detection or missing-data treatment. | laboratory report; waste manifest; emission calculation; factor reference |
| `dq_provisional_ranges` | every `reasoned_estimate` range | Treat the range only as a first-pass QA or initialization aid. It shall not replace collected foreground data, and its use in a dataset shall be explicitly flagged for review. | validation finding; estimate register; replacement plan |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity_and_scope` | product and reference flow | Fail completeness if the product is sweetened cocoa powder, a non-cocoa product, a consumer-ready non-bulk format, or lacks the required product subtype, formulation, physical state, bulk-format, and market-specification qualifiers. | `codex-cxs-87-1981`; `eu-directive-2000-36-ec` |
| `validation_reference_uuid` | reference product identity | Require reference product flow UUID `7d08586f-18bc-42f3-b262-54f8d559de12`, Mass flow-property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validation_reference_mass` | reference amount | Require exactly 1 kg net bulk product after excluding packaging and reusable transport-equipment tare. | `eu-pef-2021-2279` |
| `validation_process_coverage` | process inventory | Require each of the four process groups or a documented, technically valid omission inside the corresponding required group; require all onsite cleaning, utilities, waste, wastewater, and direct emissions to be assigned once. | `eu-jrc-fdm-bref-2019` |
| `validation_upstream_completeness` | product and utility inputs | Reject zero-burden cocoa, sugar or sweetener, milk, fat, packaging, utility, or treatment inputs unless a documented physical exclusion applies. Require an upstream dataset or an explicit unresolved finding. | `eu-pef-2021-2279`; `konstantas-et-al-2018` |
| `validation_mass_balance` | each lot and reporting period | Require a reported mass-balance difference and investigation of unexplained material; internal rework shall not appear as both a new input burden and an avoided-burden output. | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `validation_resource_streams` | energy and water | Require electricity, purchased heat, onsite fuel, cooling-water make-up, recirculated water, cleaning water, and wastewater to be separated where applicable, with conversions and shared-service allocation disclosed. | `eu-jrc-fdm-bref-2019` |
| `validation_allocation` | multifunctionality | Require subdivision evidence or a documented physical or other justified allocation relationship, factor, period, and sensitivity for every co-product or shared service. | `eu-pef-2021-2279` |
| `validation_provisional_values` | provisional ranges or estimates | Report an error if a `reasoned_estimate` is presented as measured or source-backed. Report incomplete validation when a provisional estimate substitutes for a required foreground record. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for one declared bulk chocolate or cocoa-containing food preparation at the manufacturing gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-gate or wider LCA models that link representative upstream ingredient, utility, packaging, transport, and treatment datasets and preserve the declared product and boundary qualifiers |
| excluded_use | Direct representation of sweetened cocoa powder, cocoa ingredients sold as such, white chocolate without cocoa solids, consumer-ready non-bulk confectionery, another recipe or market specification, downstream customer processing, or a cradle-to-grave result without added downstream stages |
| required_metadata | canonical PCR id and version; reference-flow UUIDs; product subtype; formulation or recipe-family id; cocoa, milk-solid, and non-cocoa-fat declarations where applicable; physical state and temperature; bulk format and net content; manufacturing geography; technology route; reporting period; upstream dataset identities; allocation factors; data ownership and review status |
| required_quality_disclosure | primary-data coverage; meter and mass-balance reconciliation; proxy datasets; cocoa origin and land-use-change treatment; included and omitted process steps; water recirculation treatment; packaging and reusable-container model; allocation sensitivity; provisional estimates; data gaps; abnormal production |
| update_trigger | Material change in formulation, cocoa origin, supplier or upstream dataset, production technology, energy or water system, bulk delivery format, allocation, market specification, site geography, or representative data period; or replacement of a provisional estimate with reviewed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-87-1981` | `standard` | FAO and WHO, Standard for Chocolate and Chocolate Products, CXS 87-1981, revised/amended text available at https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B87-1981%2FCXS_087e.pdf, retrieved 2026-08-11 | Product definition, ingredients, composition-sensitive qualifiers, exclusions, and market-specification checks |
| `eu-directive-2000-36-ec` | `standard` | European Parliament and Council, Directive 2000/36/EC relating to cocoa and chocolate products intended for human consumption, ELI https://data.europa.eu/eli/dir/2000/36/oj, retrieved 2026-08-11 | EU product definitions, composition and vegetable-fat disclosure as one applicable market specification |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries, retrieved 2026-08-11 | Chocolate process decomposition; raw-material, energy, water, wastewater, waste-gas and residue inventories; monitoring; cleaning and resource-efficiency rules |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated ELI https://data.europa.eu/eli/reco/2021/2279/2021-12-30, retrieved 2026-08-11 | Functional unit and reference flow, system boundary, upstream completeness, multifunctionality hierarchy, allocation, and dataset quality |
| `konstantas-et-al-2018` | `literature` | Konstantas, A.; Jeswani, H. K.; Stamford, L.; Azapagic, A. Environmental impacts of chocolate production and consumption in the UK. Food Research International 106 (2018) 1012-1025. https://doi.org/10.1016/j.foodres.2018.02.042 | Completeness check for cocoa, milk, sugar, fats, manufacturing, packaging, and land-use-change disclosure as material chocolate-life-cycle hotspots; not used for foreground amount ranges |
