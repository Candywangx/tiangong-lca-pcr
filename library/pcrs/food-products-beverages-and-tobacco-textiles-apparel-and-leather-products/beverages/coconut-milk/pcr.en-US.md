---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.coconut-milk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coconut milk

## 1. Scope and Applicability

This PCR applies to the gate-to-gate production of liquid coconut milk intended as a non-animal-origin beverage. The product is a dilute emulsion made from comminuted coconut endosperm (kernel), coconut extract, or an equivalent declared coconut base and potable water, with soluble and suspended coconut solids distributed through the liquid. It may contain declared sweeteners, stabilizers, flavours, micronutrients, or other minor ingredients only when the finished product remains recognizably coconut milk.

The foreground boundary starts at the declared receipt state of whole mature coconuts, separated coconut kernel, or purchased coconut extract/base and ends with net packaged coconut milk ready to leave the manufacturing site. It covers preparation and extraction when performed, formulation, homogenization, thermal treatment or another validated preservation step, filling, packaging, cleaning, product losses, and on-site wastewater or residue handling.

Cooking coconut milk and coconut cream, coconut water, fermented coconut products, coconut oil, coconut powder, and mixed beverages whose coconut component is not the defining product are excluded. Coconut cultivation, off-site production of purchased ingredients and packaging, distribution, retail refrigeration, consumer use, and end-of-life are outside the foreground boundary and require linked upstream or downstream datasets when included in a life-cycle study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.coconut-milk |
| classification_refs | CPC 3.0: 24421 Coconut milk (`exact`) |
| covered_products | Liquid, ready-to-drink coconut milk based on coconut endosperm extract and water; plain or formulated variants that retain coconut milk as the defining product |
| excluded_products | Cooking coconut milk and coconut cream; coconut water; fermented coconut beverages; coconut oil; coconut powder; composite beverages not primarily coconut milk |
| representative_product | Packaged liquid coconut milk beverage at the manufacturing-site gate |
| production_route | Declared coconut material receipt; preparation and aqueous extraction when applicable; filtration; formulation; homogenization; validated preservation treatment; filling and packaging |
| market_state | Packaged liquid, shelf-stable or chilled as declared, ready for distribution from the manufacturing site |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Food-grade liquid coconut milk beverage supplied at the manufacturing-site gate |
| How much | 1 kg net coconut milk, excluding packaging |
| How well | Conforms to the declared formulation, coconut-solids or fat specification, preservation treatment, packaging integrity, and market-state requirements |
| How long or cycle | One production batch through release at the factory gate; declared shelf life and storage state are qualifiers, not a use-duration service |
| reference_flow_link | `coconut_milk_at_plant_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Coconut milk `683e1059-d269-4198-a67d-f306a86bcf8d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | received coconut material form; coconut origin and supplier scope; coconut-solids or fat specification; added-water and ingredient formulation; preservation treatment; shelf-stable or chilled state; package type and package mass; production geography; data period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference coconut milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg of released net coconut milk; exclude primary, secondary, and tertiary packaging from the reference mass. |
| `coconut_material_mass` | Coconut fruit, kernel, extract, and base inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each coconut input at its declared receipt state and moisture or solids basis; do not combine whole-fruit mass, kernel mass, and concentrated-base mass without an explicit conversion. |
| `water_mass` | Water incorporated into product or used in processing | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report formulation water separately from washing, extraction, cleaning, cooling, and utility water; document density conversion when a volume meter is converted to mass. |
| `energy_carrier_separation` | Electricity, fuel, steam, cooling, and compressed air | Carrier-specific energy property | kWh or MJ | Preserve measured carrier and unit, convert consistently, and do not combine electricity with thermal energy before linking carrier-specific upstream datasets. |
| `packaging_mass_separation` | Packaging materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record packaging by material and component mass per 1 kg net product; packaging remains outside the reference-product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of whole mature coconuts, separated coconut kernel, or purchased coconut extract/base at the manufacturing site, with the selected state and upstream coverage declared |
| starting_condition_role | Foreground entry point for coconut material; determines whether dehusking, deshelling, kernel preparation, and extraction are foreground or upstream |
| product_classification_scope | Liquid coconut milk beverage corresponding to the reviewed semantic scope; classification codes are mapping context and do not replace the product description |
| recursive_input_rule | Purchased coconut milk in the same product category is recorded once as an upstream product input and is not recursively expanded as though it were made again inside the same foreground boundary |
| upstream_dataset_requirement | Link every purchased coconut material, ingredient, energy carrier, packaging material, transport service, and off-site treatment service to a geographically, technologically, and temporally representative upstream dataset |
| disclosure | Declare starting coconut material state, included preparation steps, formulation, preservation route, package system, co-products, waste destinations, data period, site scope, and all foreground exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | manufacturing_site_foreground | Include every site-controlled operation from the declared coconut-material receipt state through released packaged product, including utilities, cleaning, product loss, wastewater, and residue handling attributable to the product. | `fao-coconut-postharvest-1999`; `ghg-protocol-product-standard-2011` |
| `boundary_starting_state` | coconut_material_entry | Declare whether the site receives whole coconuts, kernel, extract, or another coconut base; processes completed upstream must be represented by linked datasets rather than omitted. | `fao-coconut-postharvest-1999`; `ghg-protocol-product-standard-2011` |
| `boundary_food_contact_water` | water_contacting_food | Use potable water for water incorporated into product and for food-contact operations; keep non-potable utility water separately metered and prevent it from being represented as product-contact water. | `codex-cxc-1-1969` |
| `boundary_gate_to_gate_exclusions` | downstream_stages | Exclude outbound distribution, retail, consumer use, and packaging end-of-life from the foreground result, and state that a complete life-cycle model must add those stages explicitly. | `ghg-protocol-product-standard-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_extraction` | Coconut preparation, aqueous extraction, and filtration | `conditional` | Required when whole coconuts or kernel are processed on site; when purchased extract/base is received, disclose and link the upstream equivalent | Produce filtered coconut extract from the declared coconut material | Per 1 kg net coconut milk |
| `formulation_homogenization` | Formulation and homogenization | `required` | Always included | Combine coconut extract/base, potable water, and declared ingredients into uniform bulk coconut milk | Per 1 kg net coconut milk |
| `preservation_filling_packaging` | Preservation treatment, filling, cooling, and packaging | `required` | Always included; actual heat, aseptic, or validated alternative route must be declared | Produce released packaged coconut milk in its declared market state | 1 kg net coconut milk at plant gate |
| `sanitation_wastewater` | Cleaning, sanitation, and on-site wastewater handling | `required` | Always included for attributable operations; shared systems require a disclosed allocation basis | Capture cleaning resources, wastewater, sludge, and direct discharges attributable to the foreground line | Per 1 kg net coconut milk |

### Process: Coconut preparation, aqueous extraction, and filtration (`material_preparation_extraction`)

#### Inputs

##### Product flows

###### Coconut material received for extraction (`coconut_material_input`)

Record whole mature coconuts, separated kernel, or another declared coconut material at the state crossing the site boundary. Do not substitute fruit mass for kernel or extract mass without measured yield and moisture or solids data.

- Selected flow: Coconut material, declared receipt state
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by receipt state, less separately recorded rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_receipts`
- Sources:
- Range: Provisional coconut-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 3.0
  - Unit: kg/kg net coconut milk
  - Basis: broad receipt-state-dependent estimate pending reviewed foreground yield data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Potable extraction and washing water (`extraction_washing_water`)

Record potable water used to wash coconut material and to assist extraction, separately from formulation and cleaning water.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-measured water supplied to preparation and extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxc-1-1969`
- Range: Provisional extraction and washing-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net coconut milk
  - Basis: broad estimate covering different coconut receipt states and extraction technologies
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for preparation and extraction (`extraction_electricity`)

Record metered or allocated electricity for cutting, grating, comminution, pressing, pumping, and filtration.

- Selected flow: Electricity, declared grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional extraction-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg net coconut milk
  - Basis: broad first-pass estimate pending line-specific metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Filtered coconut extract transferred to formulation (`filtered_coconut_extract`)

Record the measured mass and, where controlled, solids or fat content of filtered coconut extract transferred to formulation.

- Selected flow: Filtered coconut extract
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_yields`
- Sources: `fao-coconut-postharvest-1999`

##### Waste flows

###### Husk, shell, parings, and press cake leaving as residue (`coconut_solid_residues`)

Record each residue separately by physical state and destination; identify any sold or internally used co-product rather than labelling it as waste.

- Selected flow: Coconut processing residues, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Provisional solid-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg/kg net coconut milk
  - Basis: broad receipt-state-dependent estimate pending measured residue yields
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and extraction wastewater (`extraction_wastewater`)

Record wastewater discharged to on-site or off-site treatment without subtracting evaporative or incorporated water unless measured.

- Selected flow: Wastewater from coconut preparation and extraction
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water-balance calculation by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources:
- Range: Provisional extraction-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net coconut milk
  - Basis: broad first-pass water-balance estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Formulation and homogenization (`formulation_homogenization`)

#### Inputs

##### Product flows

###### Coconut extract or purchased coconut base (`coconut_base_to_formulation`)

Record the filtered foreground extract or purchased coconut base by mass and declared solids or fat content.

- Selected flow: Coconut extract or coconut base, declared composition
- Flow property / unit: Mass / kg
- Amount rule: batch mass charged to formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batches`
- Sources:

###### Potable formulation water (`formulation_water`)

Record water incorporated into the product separately from other water uses.

- Selected flow: Potable water incorporated into product
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-weighed formulation water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batches`
- Sources: `codex-cxc-1-1969`
- Range: Provisional formulation-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg/kg net coconut milk
  - Basis: broad product-formulation estimate; not a composition requirement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Declared minor ingredients (`minor_ingredients`)

Record sweeteners, stabilizers, emulsifiers, flavours, micronutrients, and other ingredients separately; do not aggregate ingredients with different upstream datasets.

- Selected flow: Ingredient, formulation-specific
- Flow property / unit: Mass / kg
- Amount rule: batch issue or weighment record for each ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batches`
- Sources:

###### Electricity for mixing and homogenization (`formulation_electricity`)

Record electricity for mixing, pumping, homogenization, and intermediate holding.

- Selected flow: Electricity, declared grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated share from equipment power and runtime
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional formulation-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh/kg net coconut milk
  - Basis: broad first-pass estimate pending line-specific metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk formulated coconut milk (`bulk_coconut_milk`)

Record batch mass and the specification results used to release bulk product to preservation and filling.

- Selected flow: Bulk formulated coconut milk
- Flow property / unit: Mass / kg
- Amount rule: measured bulk transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_yields`
- Sources:

##### Waste flows

###### Formulation losses and rejected bulk product (`formulation_product_loss`)

Record spills, hold-up, sampling losses, and rejected bulk product by destination.

- Selected flow: Coconut-milk product loss
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-derived loss by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_yields`
- Sources:
- Range: Provisional formulation-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net coconut milk
  - Basis: broad first-pass estimate pending batch mass-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Preservation treatment, filling, cooling, and packaging (`preservation_filling_packaging`)

#### Inputs

##### Product flows

###### Bulk coconut milk supplied to preservation and filling (`bulk_milk_to_filling`)

Record the measured bulk product mass entering the declared heat, aseptic, or validated alternative preservation route.

- Selected flow: Bulk formulated coconut milk
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_yields`
- Sources:

###### Purchased process steam for preservation (`preservation_steam`)

Record steam crossing the process boundary. The verified Tiangong flow below is only for 11.0 MPaG steam; use it only when the supplied grade matches and otherwise resolve the actual pressure and temperature as a separate flow.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: steam-meter reading or condensate-corrected mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Purchased hot water for preservation (`preservation_hot_water`)

Record hot water crossing the process boundary as a supplied product. Declare inlet and return temperatures and resolve a temperature-matched Tiangong flow before publication; do not combine this row with steam or fuel.

- Selected flow: Hot water, supplied at declared inlet and return temperatures
- Flow property / unit: Mass / kg
- Amount rule: metered supply mass, excluding returned closed-loop water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Natural gas for on-site preservation heat (`preservation_natural_gas`)

Record pipeline natural gas combusted on site for thermal treatment or hot-water generation. Use zero only when fuel and equipment records demonstrate that natural gas was not used.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered fuel mass, or metered volume converted with measured density and declared net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Diesel oil for on-site preservation heat (`preservation_diesel`)

Record diesel oil combusted on site for the actual boiler, heater, or backup heat source. Keep it separate from other fuels.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured tank issue reconciled to opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Liquefied petroleum gas for on-site preservation heat (`preservation_lpg`)

Record LPG combusted on site only where it is the actual preservation or hot-water fuel. Keep cylinder or bulk-tank use separate from natural gas and diesel.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured cylinder or bulk-tank issue reconciled to stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Electricity for preservation, filling, and cooling (`filling_electricity`)

Record electricity for pumps, thermal-treatment equipment, fillers, conveyors, coding, cooling, and cold holding under site control.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered electricity or engineering allocation from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Primary and secondary packaging (`packaging_materials`)

Record container, closure, seal, label, carton, film, tray, and other packaging separately by material and component.

- Selected flow: Packaging material, component-specific
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass less documented unused return, normalized by released product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxc-1-1969`
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.5
  - Unit: kg/kg net coconut milk
  - Basis: broad estimate spanning multiple consumer and bulk package formats
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released packaged coconut milk (`coconut_milk_at_plant_gate`)

This is the reference product after declared preservation, filling, integrity checks, and cooling or ambient conditioning required for release.

- Selected flow: Coconut milk `683e1059-d269-4198-a67d-f306a86bcf8d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net released product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net coconut milk at the manufacturing-site gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Off-spec product and packaging waste (`filling_rejects`)

Record off-spec product, start-up and shutdown losses, damaged containers, and rejected packaging separately by material and destination.

- Selected flow: Filling and packaging rejects, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass or count converted with verified item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional filling-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net coconut milk
  - Basis: broad first-pass estimate pending reject logs and verified package masses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant leakage from foreground cooling (`refrigerant_leakage`)

Include only when refrigeration or chilled storage is site-controlled and leakage is attributable to the product line.

- Selected flow: Refrigerant emission, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: calculated leakage from refrigerant purchase, service, recovery, and equipment inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

### Process: Cleaning, sanitation, and on-site wastewater handling (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water`)

Record potable or otherwise suitable water used for clean-in-place cycles, equipment washing, and attributable sanitation.

- Selected flow: Cleaning water, declared quality
- Flow property / unit: Mass / kg
- Amount rule: metered or cycle-calculated attributable water use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `codex-cxc-1-1969`
- Range: Provisional cleaning-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net coconut milk
  - Basis: broad first-pass estimate spanning batch and continuous sanitation systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation chemicals (`cleaning_chemicals`)

Record each detergent, alkali, acid, sanitizer, and other treatment chemical by product mass and active concentration where material.

- Selected flow: Cleaning or sanitation chemical, product-specific
- Flow property / unit: Mass / kg
- Amount rule: purchase, issue, or dosing record normalized to released product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources:

###### Electricity for cleaning and wastewater systems (`sanitation_electricity`)

Record electricity for pumps, heaters not captured as thermal energy, aeration, and other site-controlled treatment equipment.

- Selected flow: Electricity, declared grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: metered use or allocated equipment electricity from runtime records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional sanitation-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg net coconut milk
  - Basis: broad first-pass estimate pending utility submetering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater sent to treatment (`total_wastewater_to_treatment`)

Record wastewater by destination and measured characteristics where required for the treatment dataset.

- Selected flow: Wastewater to treatment, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or site water-balance calculation, avoiding double counting of process wastewater rows
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources:
- Range: Provisional total-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg/kg net coconut milk
  - Basis: broad first-pass site water-balance estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment sludge and screenings (`treatment_residues`)

Record dry or wet mass with moisture basis and destination when on-site wastewater treatment is included.

- Selected flow: Wastewater-treatment residue, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured removal mass with declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources:
- Range: Provisional treatment-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net coconut milk
  - Basis: broad wet-mass estimate pending site treatment records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct treated-effluent discharge (`treated_effluent_discharge`)

When treated effluent is discharged directly to the environment, report water and regulated pollutant loads as elementary flows; do not duplicate a wastewater-to-treatment waste flow for the same mass.

- Selected flow: Treated effluent and measured pollutant emissions, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: measured discharge volume or mass and laboratory concentration converted to pollutant load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net coconut milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separable_processes_and_products | Avoid allocation wherever possible by subdividing preparation, extraction, formulation, filling, utility, and treatment operations using directly measured batch, meter, runtime, or mass-balance records. | `ghg-protocol-product-standard-2011` |
| `allocation_physical` | unavoidable_shared_burdens | When subdivision is not feasible, allocate shared burdens using a causal physical relationship. For coconut extract and solid co-products, consider dry matter or another composition-linked basis before wet mass because added water can distort causality. | `ghg-protocol-product-standard-2011` |
| `allocation_other_relationship` | no_defensible_physical_relationship | When no defensible physical relationship exists, use economic or another documented relationship, state the data period and prices or parameters, and report a sensitivity comparison with a plausible physical basis. | `ghg-protocol-product-standard-2011` |
| `allocation_waste_and_co_product_status` | coconut_residues_and_recovered_outputs | Classify each residue as waste, internal recovery, or co-product according to its actual destination. Do not assign avoided-burden credit within the gate-to-gate inventory unless an explicit system-expansion model and displaced product are documented. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coconut_receipts` | `material_preparation_extraction` | coconut material and rejects | receiving and weighment records | date; supplier; origin; receipt state; accepted mass; reject mass; moisture or solids result when available | calibrated scale and receiving inspection | kg; mass fraction | every lot | representative continuous 12-month period or justified campaign | all supplying lots to the modelled line | sum accepted and rejected mass separately; normalize to released product | scale calibration; supplier specification; inspection record; sampling method |
| `cp_water_records` | `material_preparation_extraction`; `formulation_homogenization` | washing, extraction, and formulation water | meter and batch records | meter start/end; batch volume or mass; use purpose; density assumption; potable-water evidence | dedicated meter or verified batch vessel | kg or m3 | each batch or daily | same period as product output | all relevant water points | separate product-incorporated, process, cleaning, cooling, and utility water before normalization | meter calibration; potable-water test; reconciliation to site water balance |
| `cp_formulation_batches` | `formulation_homogenization` | coconut base, water, and ingredients | recipe, issue, and weighment records | batch id; ingredient id; supplier lot; charged mass; returned mass; solids or fat specification | calibrated scales and controlled recipe system | kg; mass fraction | every batch | same period as product output | all declared formulations | net charged mass by ingredient divided by released product | scale calibration; approved recipe; lot traceability; laboratory specification |
| `cp_process_yields` | all production processes | intermediate transfers, product output, and loss | batch mass-balance records | input mass; transfer mass; released net product; hold-up; sampling; spill; reject; rework; inventory change | calibrated tanks or scales plus batch reconciliation | kg | every batch | same period as product output | all foreground production steps | reconcile inputs, outputs, inventory changes, losses, and residues without double counting | calibration; batch release record; documented reconciliation tolerance |
| `cp_energy_records` | all production processes | electricity and thermal energy | utility meters, fuel invoices, and equipment runtime | carrier; meter start/end; purchased amount; equipment power; runtime; production quantity; recovered energy | submeters preferred; otherwise documented engineering calculation | kWh; MJ; carrier unit | batch, shift, or monthly | representative 12-month period or justified campaign | all foreground equipment and shared utilities | assign direct meters first; allocate shared use by causal runtime, throughput, or measured demand | meter calibration; invoice reconciliation; equipment specification; allocation rationale |
| `cp_packaging_records` | `preservation_filling_packaging` | packaging inputs and rejects | bill of materials, issue, count, and reject records | component id; material; unit mass; issued count; returned count; rejected count; released units | verified item mass and inventory reconciliation | kg; item | each batch or production order | same period as product output | all primary and secondary packaging components | net issued mass by component divided by released product | supplier specification; item-mass check; inventory reconciliation |
| `cp_residue_records` | `material_preparation_extraction` | coconut residues and destinations | weighbridge, bin, sales, and disposal records | residue type; wet mass; moisture basis; destination; revenue or internal use when relevant | calibrated scale and destination documentation | kg | each shipment or batch | same period as product output | all foreground residues | aggregate separately by residue state and destination | scale calibration; transfer note; moisture sampling; destination evidence |
| `cp_cleaning_records` | `sanitation_wastewater` | cleaning water and chemicals | clean-in-place and sanitation logs | cycle id; equipment; water volume; chemical product; concentration; dose; start/end time; shared-line basis | automated cycle log or operator record with meter and dosing verification | kg; L; mass fraction | every cleaning cycle | same period as product output | all attributable production and shared sanitation cycles | assign dedicated cycles directly; allocate shared cycles using documented equipment surface, runtime, or throughput basis | meter and dosing calibration; sanitation release record; approved procedure |
| `cp_wastewater_records` | `sanitation_wastewater` | wastewater, sludge, and direct effluent | discharge meters, laboratory reports, and treatment logs | flow; destination; sampling time; pollutant concentration; sludge mass; moisture; treatment chemical and energy references | calibrated flow meter, representative sampling, and laboratory analysis | kg; m3; mg/L; kg pollutant | continuous or each discharge; laboratory frequency per permit or control plan | same period as product output | all attributable discharge points and on-site treatment | calculate pollutant load as flow multiplied by concentration; avoid overlap between process rows and total discharge | meter calibration; chain of custody; laboratory method; permit report; mass-balance reconciliation |
| `cp_refrigerant_records` | `preservation_filling_packaging` | refrigerant leakage | purchase, charge, recovery, service, and equipment inventory records | refrigerant identity; opening charge; added mass; recovered mass; closing charge; equipment scope | annual mass balance with service records | kg | each service event and annual reconciliation | representative 12-month period | all site-controlled equipment serving the product | attributable leakage divided by released product using documented equipment service share | service certificates; cylinder records; equipment inventory; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground inventory rows | normalized amount = attributable period amount / released net coconut milk mass for the same period | attributable amount; released net product mass | amount per 1 kg net coconut milk | `ghg-protocol-product-standard-2011` |
| `calc_batch_mass_balance` | each production batch | opening inventory + measured inputs = measured transfers + released product + residues + wastewater-carried product solids + other losses + closing inventory; report the unreconciled difference | batch masses; inventory changes; solids data where used | reconciled batch yield and unexplained mass difference |  |
| `calc_metered_water_mass` | volume-metered water | water mass = measured volume multiplied by documented density; use 1 kg/L only when temperature and quality make that approximation acceptable | water volume; density assumption | kg water | `codex-cxc-1-1969` |
| `calc_energy_from_runtime` | unmetered equipment | energy = verified rated demand multiplied by loaded operating time and documented load factor; do not use nameplate power alone as measured consumption | equipment demand; runtime; load factor | kWh or MJ by carrier |  |
| `calc_packaging_mass` | packaging components | component mass = net issued item count multiplied by verified unit mass, with bulk materials taken from net issued mass | issued count; returned count; reject count; unit mass | kg packaging by component |  |
| `calc_pollutant_load` | direct treated-effluent emissions | pollutant load = representative discharge volume multiplied by matched concentration, with unit conversion and non-detect treatment disclosed | discharge volume; concentration; sampling coverage | kg pollutant per reference flow |  |
| `calc_shared_allocation` | unavoidable shared processes | apply the selected causal physical factor consistently to all shared inputs and outputs; if no physical factor is defensible, apply and disclose the selected alternative and sensitivity | shared burden; product and co-product driver data | allocated foreground amount | `ghg-protocol-product-standard-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | coconut material, ingredients, and product | Preserve supplier or internal lot identity, receipt state, formulation, batch link, and product-release link. | receiving record; recipe; lot genealogy; release record |
| `dq_technological_representativeness` | all significant processes | Data must represent the actual extraction, homogenization, preservation, filling, cooling, cleaning, and treatment technology used. | equipment list; process diagram; meter coverage; technology description; `ghg-protocol-product-standard-2011` |
| `dq_geographical_representativeness` | foreground and linked upstream datasets | Declare manufacturing geography and select upstream electricity, water, coconut material, transport, and treatment datasets appropriate to the supplying geography. | site address; supplier origin; dataset metadata; `ghg-protocol-product-standard-2011` |
| `dq_temporal_representativeness` | activity data and factors | Use a continuous 12-month period when practical; a shorter campaign must cover representative operating states and be justified. Record factor years and update mismatched data. | dated records; production calendar; factor metadata; `ghg-protocol-product-standard-2011` |
| `dq_completeness` | process and flow coverage | Include all required foreground processes and reconcile coconut material, water, product, packaging, residues, wastewater, energy, and losses. Quantify or justify every exclusion. | process map; mass and water balances; utility reconciliation; exclusion register; `ghg-protocol-product-standard-2011` |
| `dq_reliability` | measurements and calculations | Retain calibration, laboratory method, sampling, invoice reconciliation, calculation inputs, allocation logic, and review evidence sufficient to reproduce every reported amount. | calibration certificate; laboratory report; invoice; calculation workbook; reviewer sign-off; `codex-cxc-1-1969`; `ghg-protocol-product-standard-2011` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_product | The reference output must use Coconut milk UUID `683e1059-d269-4198-a67d-f306a86bcf8d`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and 1 kg net product excluding packaging. |  |
| `validate_scope_identity` | product_category | The product description must identify a dilute coconut-endosperm emulsion intended as a beverage and must not represent cooking coconut milk or cream, coconut water, fermented product, or a non-coconut-dominant mixed beverage. | `un-cpc-v3-explanatory-notes-2025` |
| `validate_starting_condition` | foreground_boundary | The dataset must declare whether whole coconuts, kernel, extract, or another coconut base enters the foreground boundary and must link upstream datasets for all preceding operations. | `fao-coconut-postharvest-1999`; `ghg-protocol-product-standard-2011` |
| `validate_qualifiers` | reference_flow_metadata | Every required qualifier in section 3 must be present and consistent with the formulation, process route, packaging, and market state. |  |
| `validate_process_and_mass_balance` | foreground_inventory | Required process sections, intermediate transfers, released product, residues, wastewater, and losses must reconcile within the site's documented tolerance; unexplained differences must be disclosed and investigated. | `ghg-protocol-product-standard-2011` |
| `validate_water_and_hygiene_records` | food_contact_and_preservation | Product-contact water quality, preservation time and temperature or validated alternative parameters, packaging release, and processing records must be retained for the represented production period. | `codex-cxc-1-1969` |
| `validate_allocation` | shared_processes_and_co_products | Allocation must follow the section 7 hierarchy, use consistent factors for similar flows, and disclose co-product status, factor data, and sensitivity when an alternative relationship is used. | `ghg-protocol-product-standard-2011` |
| `validate_provisional_ranges` | reasoned_estimate_ranges | Provisional ranges are screening aids only; values outside them require review, while values inside them still require foreground evidence. Publication review must replace or explicitly accept every material reasoned estimate. |  |
| `validate_data_quality` | published_foreground_dataset | The data package must report technological, geographical, temporal, completeness, and reliability evidence for significant processes and identify improvement actions for material gaps. | `ghg-protocol-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground production dataset for packaged coconut milk at the manufacturing-site gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and data-quality review |
| allowed_use | Product-footprint and life-cycle models whose coconut milk scope, receipt state, formulation, preservation route, packaging, geography, and period are compatible with the dataset |
| excluded_use | Direct representation of cooking coconut milk or coconut cream, coconut water, cultivation, retail, consumer use, or another site or formulation without representativeness review |
| required_metadata | canonical PCR id; product-flow UUID; coconut receipt state and origin; formulation and solids or fat specification; preservation route; package components; geography; data period; site coverage; allocation method; upstream dataset references |
| required_quality_disclosure | meter and scale coverage; mass and water balance; sample and laboratory methods; temporal coverage; exclusions; allocation factors; co-product and waste destinations; provisional estimates; technological, geographical, temporal, completeness, and reliability assessment |
| update_trigger | Change in coconut receipt state, formulation, preservation or filling technology, package system, energy supply, co-product use, wastewater route, allocation method, site scope, or a material shift in yield, energy, water, loss, or data-quality evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Classification context and reviewed inclusion/exclusion boundary for CPC 24421 |
| `fao-coconut-postharvest-1999` | `handbook` | P. G. Punchihewa and R. N. Arancon, *Coconut: Post-harvest Operations*, Asian and Pacific Coconut Community; edited by AGSI/FAO, last reviewed 14 October 1999, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Coconut.pdf (retrieved 2026-08-11) | Coconut receipt-state disclosure and process decomposition for selection, dehusking, kernel preparation, grating, aqueous extraction, pressing, and filtration |
| `codex-cxc-1-1969` | `standard` | Codex Alimentarius, *General Principles of Food Hygiene*, CXC 1-1969, https://www.fao.org/input/download/standards/23/CXP_001e.pdf (retrieved 2026-08-11) | Potable water, raw-material acceptance, time-temperature control, packaging protection, sanitation, documentation, and record retention |
| `ghg-protocol-product-standard-2011` | `standard` | World Resources Institute and World Business Council for Sustainable Development, *Product Life Cycle Accounting and Reporting Standard*, 2011, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf (retrieved 2026-08-11) | Process map and inventory boundary, primary foreground data, allocation hierarchy, uncertainty disclosure, and technological, geographical, temporal, completeness, and reliability data-quality indicators |
