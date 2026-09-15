---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.asses
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Asses

## 1. Scope and Applicability

This PCR guides foreground data package construction for live asses, also called donkeys, produced and transferred as live animals at a declared farm gate, holding gate, or delivered gate. It covers breeding or replacement-stock entry, foal or young animal rearing, grow-out and husbandry, feed and water use, bedding where used, manure and excreta management, farm energy, animal health inputs, mortality or cull handling, and farm-gate live-animal handling.

Excluded products are live horses, mules and hinnies, meat of equines, hides and skins, milk, semen, embryos, manure products marketed as separate fertilizers, transport work performed by the animal after sale, and downstream slaughter or working-animal use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.asses` |
| classification_refs | CPC 3.0 `02132`, `Asses` |
| covered_products | live asses or donkeys sold or transferred as live animals for breeding, draught or pack use, further rearing, companion use, conservation herds, or other non-slaughter live-animal purposes |
| excluded_products | horses; mules and hinnies; equine meat; hides and skins; milk; semen; embryos; manure products; services delivered by working animals after sale |
| representative_product | live ass at declared live weight and health status, ready for transfer at farm gate |
| production_route | breeding or replacement-stock entry, animal rearing and husbandry, manure management, and farm-gate handling |
| market_state | live animal, unprocessed, at declared age class, sex, breed or type, live weight, health status, and transfer gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live ass at declared transfer gate |
| How much | 1 kg live weight |
| How well | declared age class, sex, breed or type, intended use, health status, live-weight measurement basis, and production system |
| How long or cycle | one animal rearing cycle from declared starting condition to transfer gate; herd maintenance period declared when breeding herd burdens are included |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Asses `40fd68b3-1ea0-4828-8532-f64140fc3ea3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg live weight |
| Required qualifiers | age class; sex; breed or type; intended use; live-weight measurement method; production system; health or certification status; geography and declared gate; transport inclusion status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass live weight is the primary reference flow basis. Head-count records may be used only when a measured or documented live-weight conversion is provided.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_weight` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live weight | The reference flow must be expressed as kg live ass at the declared transfer gate. |
| `head_count_conversion` | count-based animal records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live weight | Count-based receiving, birth, sale, mortality, or inventory records must include measured live weight or a documented conversion by age class and sex. |
| `feed_dry_matter_basis` | feed and forage inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter and kg as-fed | Feed records must state whether quantities are dry matter or as-fed; moisture conversion must be disclosed when normalizing feed intake. |
| `water_volume_conversion` | drinking and cleaning water | Mass or Volume | kg, L, or m3 | Water volume may be recorded in L or m3 and converted to kg when needed; water source and allocation to animal class must be declared. |
| `manure_n_basis` | manure, excreta, nitrogen, and nitrogen emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg manure, kg volatile solids, and kg N where applicable | Manure and excreta records must preserve enough information to calculate CH4, N2O, NH3, and nitrogen loss methods when these emissions are in scope. |
| `energy_inventory` | electricity, fuel, and farm machinery energy | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ or kWh | State whether each energy value is final electricity, fuel lower heating value, or delivered service energy. |

## 5. System Boundary

The default boundary is foreground data collection to the declared live-animal transfer gate:

1. Breeding herd, purchased foals or replacement animals, feed, forage, bedding, water, veterinary inputs, fuel, electricity, and purchased services when they are part of the foreground data package.
2. Animal housing, grazing or yard management, feeding, watering, health management, bedding management, weighing, identification, and routine husbandry.
3. Manure, urine, bedding, and excreta collection, storage, treatment, deposition during grazing, field application controlled by the farm, or transfer to a manure handler.
4. Farm-gate sorting, quarantine or pre-sale holding, loading, and short-distance delivery when the declared gate is delivered live animal.

The completed foreground package represents live-animal production to the declared gate. Downstream work service, transport service performed by the animal, slaughter, hide recovery, milk production, and product use after sale are outside the default boundary unless a study explicitly expands scope.

This boundary is a data-production abstraction. Declared breeding stock, purchased foals, or replacement animals are starting-condition records for the foreground package. Same-category live-ass inputs are not recursively traced as a new live-ass PCR inside the same package; their identity, mass, source, and prior-burden treatment are disclosed.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | breeding_herd_or_live_ass_stock_entry |
| starting_condition_role | animal_identity_and_reproduction_condition |
| product_classification_scope | current CPC 3.0 product category `02132`, `Asses` |
| recursive_input_rule | input flow in the same product category that causes recursive tracing is recorded as declared starting condition or purchased stock entry, with prior-burden treatment disclosed |
| upstream_dataset_requirement | disclose source, live weight, age class, sex, breed or type, health status, acquisition date, and whether upstream live-animal burdens are included, excluded, or represented by secondary data |
| disclosure | record production system, herd or lot boundary, live-weight basis, animal movement, mortality and cull fate, manure-management system, grazing or housing split, and declared gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stock_entry_and_breeding_basis | Stock Entry and Breeding Basis | required |  | foreground | live ass stock entering the foreground system |
| rearing_and_husbandry | Rearing and Husbandry | required |  | foreground | live-weight gain and maintained live animal |
| manure_and_excreta_management | Manure and Excreta Management | required |  | foreground | manure, urine, bedding, and grazing excreta generated by the foreground animals |
| farm_gate_handling_and_delivery | Farm-gate Handling and Delivery | conditional | include when sorting, quarantine, holding, loading, or delivery materially affects the declared gate | foreground/downstream | live ass transferred at declared gate |

### Process: Stock Entry and Breeding Basis (`stock_entry_and_breeding_basis`)

#### Inputs

##### Product flows

###### Declared breeding herd or purchased stock entry (`declared_breeding_herd_or_purchased_stock_entry`)

Declared breeding herd, foals, or purchased replacement animals are recorded as the live-animal starting condition for the foreground package.

- Selected flow: Asses `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- Flow property / unit: Mass / kg live weight
- Amount rule: measured live weight and head count at system entry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per animal lot or herd entering the foreground system
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_entry_records`
- Range: Stock entry mass reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg live-weight output
  - Basis: live-ass mass brought in as declared starting condition or purchased live stock
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased feed and forage for breeding basis (`purchased_feed_and_forage_for_breeding_basis`)

Feed and forage used to maintain breeding or replacement stock before allocation to marketable animals are recorded by feed type and moisture basis.

- Selected flow: Assorted Feed `cb2b142b-0ed1-4d6f-9283-cfef94451a75`
- Flow property / unit: Mass / kg dry matter and kg as-fed
- Amount rule: measured purchased or produced feed mass, converted to dry matter where needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per herd maintenance period or allocated kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_forage_records`
- Sources: `fao-leap-animal-feeds-2016`
- Range: Provisional breeding-basis feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kg dry matter/kg live-weight output
  - Basis: broad first-pass feed dry matter assigned to live-ass production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required for stock entry. Include recovered bedding, recovered feed, or waste-derived feed only when it crosses the foreground boundary as a declared input.

##### Elementary flows

###### Grazing or housing land occupation (`grazing_or_housing_land_occupation`)

Land occupation is recorded when grazing area, yard area, housing area, or feedlot occupation is included in the foreground scope.

- Selected flow: Select applicable land occupation elementary flow
- Flow property / unit: Area-time / ha a or m2 a
- Amount rule: measured area and occupation duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per herd maintenance period or animal lot
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_housing_records`

#### Outputs

##### Product flows

###### Live ass stock entering rearing (`live_ass_stock_entering_rearing`)

Live ass stock entering rearing is recorded as the product output from stock entry and breeding basis.

- Selected flow: Asses `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- Flow property / unit: Mass / kg live weight
- Amount rule: measured live weight at transfer into rearing or husbandry process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: stock entry process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_entry_records`

##### Waste flows

###### Non-marketable mortality or cull from stock entry (`non_marketable_mortality_or_cull_from_stock_entry`)

Mortality or non-marketable cull animals are recorded with mass and fate when they occur before rearing allocation.

- Selected flow: Select applicable animal mortality, carcass, or biological waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured or estimated live weight or carcass mass and disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per animal lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_and_cull_records`
- Range: Provisional stock-entry mortality screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg live-weight output
  - Basis: broad first-pass mortality or cull mass before rearing allocation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record enteric and manure emissions under the manure and excreta management process to avoid double counting.

### Process: Rearing and Husbandry (`rearing_and_husbandry`)

#### Inputs

##### Product flows

###### Live ass stock for rearing (`live_ass_stock_for_rearing`)

Live ass stock for rearing is the animal input from breeding, purchase, or stock entry records.

- Selected flow: Asses `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- Flow property / unit: Mass / kg live weight
- Amount rule: measured live weight entering the rearing period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per animal lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_weight_records`

###### Feed and forage consumed during rearing (`feed_and_forage_consumed_during_rearing`)

Feed, forage, crop residues, grazing intake estimates, concentrates, mineral supplements, and purchased feed are recorded separately when records allow.

- Selected flow: Assorted Feed `cb2b142b-0ed1-4d6f-9283-cfef94451a75`
- Flow property / unit: Mass / kg dry matter and kg as-fed
- Amount rule: measured feed issue, grazing estimate, or feed balance by animal class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live-weight output or animal-day
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_forage_records`
- Sources: `fao-leap-animal-feeds-2016`
- Range: Provisional rearing feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 80
  - Unit: kg dry matter/kg live-weight output
  - Basis: broad first-pass feed dry matter assigned to live-ass rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drinking and husbandry water (`drinking_and_husbandry_water`)

Water used for drinking, cleaning, cooling, and animal handling is recorded by source and use where possible.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg, L, or m3
- Amount rule: measured water meter, tank fill, well pump, or estimated drinking-water use by animal class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live-weight output or animal-day
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m3/kg live-weight output
  - Basis: broad first-pass drinking and husbandry water assigned to live-ass production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bedding and housing materials (`bedding_and_housing_materials`)

Bedding, litter, disinfectants, and housing consumables are recorded when they cross the foreground boundary.

- Selected flow: Select applicable bedding or housing material flow
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or produced bedding mass and bedding replacement frequency
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per animal-day or kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bedding_and_housing_records`

###### Veterinary and animal health inputs (`veterinary_and_animal_health_inputs`)

Veterinary products, vaccines, medicines, disinfectants, ear tags, and identification materials are recorded when material to the study goal and scope.

- Selected flow: Select applicable veterinary, medicine, disinfectant, or identification material flow
- Flow property / unit: Mass, volume, or number of items
- Amount rule: measured product amount, dose, or item count by animal lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per animal lot or kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_veterinary_and_health_records`

###### Farm energy for husbandry (`farm_energy_for_husbandry`)

Electricity and fuel used for pumping, lighting, housing, feed handling, manure movement, weighing, and internal transport are recorded by carrier.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Net calorific value / MJ or kWh
- Amount rule: measured meter, fuel invoice, equipment log, or allocation to animal class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per animal lot or kg live-weight output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Provisional husbandry energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg live-weight output
  - Basis: broad first-pass farm energy assigned to live-ass husbandry
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required for rearing and husbandry. Include waste-derived feed or recovered bedding only when used as an input under the declared scope.

##### Elementary flows

###### Water withdrawal for animal production (`water_withdrawal_for_animal_production`)

Water withdrawal is calculated from drinking and husbandry water records when the data package reports elementary water flows.

- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Flow property / unit: Mass / kg
- Amount rule: calculated from water source and quantity records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Range: Provisional water withdrawal screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg water/kg live-weight output
  - Basis: broad first-pass water withdrawal assigned to live-ass production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketable live ass at farm gate (`marketable_live_ass_at_farm_gate`)

Marketable live ass at farm gate is the reference product output.

- Selected flow: Asses `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- Flow property / unit: Mass / kg live weight
- Amount rule: measured live weight at declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_weight_records`
- Range: Live-ass reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg PCR reference output
  - Basis: live-ass reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Mortality and non-marketable culls (`mortality_and_non_marketable_culls`)

Mortality and non-marketable culls are recorded with mass, cause category when available, and fate.

- Selected flow: Select applicable animal mortality, carcass, or biological waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured or estimated mass by event and disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_and_cull_records`
- Range: Provisional rearing mortality screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg live-weight output
  - Basis: broad first-pass mortality and non-marketable cull mass during rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from farm energy (`fossil_carbon_dioxide_from_farm_energy`)

Fossil carbon dioxide from farm energy is calculated from fuel and electricity records with declared emission factors.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: energy quantity multiplied by declared fuel or electricity emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per fuel inventory
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Provisional farm energy fossil CO2 screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg CO2/kg live-weight output
  - Basis: broad first-pass fossil CO2 from farm energy
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Manure and Excreta Management (`manure_and_excreta_management`)

#### Inputs

##### Product flows

###### Manure, urine, and bedding entering management (`manure_urine_and_bedding_entering_management`)

Manure, urine, bedding, and excreta are tracked from housing, yards, storage, grazing deposition, or collection systems into the declared management route.

- Selected flow: Fecal fertilizer `e7f0099e-ecb6-48b5-a683-c0da022022b4`
- Flow property / unit: Mass / kg wet mass, kg dry matter, kg volatile solids, and kg N where applicable
- Amount rule: measured manure mass, bedding mass, manure storage records, or calculated excretion by animal class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per animal lot or kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_and_excreta_records`
- Sources: `ipcc-2019-livestock-manure`, `emep-eea-2023-manure-management`
- Range: Provisional manure and excreta screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet manure/kg live-weight output
  - Basis: broad first-pass manure, urine, and bedding mass entering management
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required unless recovered manure, sludge, or bedding from another system enters the foreground management route.

##### Elementary flows

No elementary input is normally required beyond water, land, and air exchange already represented in site records.

#### Outputs

##### Product flows

###### Marketable manure or nutrient co-product (`marketable_manure_or_nutrient_coproduct`)

Manure, compost, or nutrient products are product outputs only when sold, transferred, or intentionally used as a co-product outside the live-animal reference flow.

- Selected flow: Fecal fertilizer `e7f0099e-ecb6-48b5-a683-c0da022022b4`
- Flow property / unit: Mass / kg and kg N where applicable
- Amount rule: measured manure product mass and nutrient content when marketed or transferred
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per manure product output and kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_and_excreta_records`
- Range: Provisional marketable manure screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg manure product/kg live-weight output
  - Basis: broad first-pass manure product mass when manure is marketed or transferred
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Manure sent to treatment or disposal (`manure_sent_to_treatment_or_disposal`)

Manure, soiled bedding, and deadstock residues sent to treatment or disposal are waste outputs when no co-product credit is claimed.

- Selected flow: Select applicable manure, bedding, or biological waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass and fate by management route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_and_excreta_records`
- Range: Provisional manure disposal screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg manure waste/kg live-weight output
  - Basis: broad first-pass manure, bedding, or biological waste sent to treatment or disposal
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_methane_to_air`)

Enteric methane is calculated using the declared IPCC tier or reviewed regional method for non-ruminant equines.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8ea-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from animal population, animal class, live weight, feed intake, and declared IPCC or regional emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per animal-year or kg live-weight output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_live_weight_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional enteric methane screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg CH4/kg live-weight output
  - Basis: broad first-pass enteric methane after applying declared livestock method
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure methane to air (`manure_methane_to_air`)

Manure methane is calculated from manure-management system, climate, volatile solids, and storage or deposition route.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8ea-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from volatile solids and declared manure-management methane method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per manure-management route
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_manure_and_excreta_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure methane screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CH4/kg live-weight output
  - Basis: broad first-pass manure methane after applying declared manure-management method
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_nitrous_oxide_to_air`)

Manure nitrous oxide is calculated from nitrogen excretion, manure-management system, and direct or indirect N2O method.

- Selected flow: nitrous oxide, emissions to air unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from manure nitrogen and declared direct or indirect N2O method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per manure-management route or N input
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_manure_and_excreta_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure nitrous oxide screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg N2O/kg live-weight output
  - Basis: broad first-pass manure N2O after applying declared manure-management method
  - Basis kind: Nitrogen input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia volatilization from manure (`ammonia_volatilization_from_manure`)

Ammonia volatilization is calculated or recorded for housing, storage, field application under farm control, and grazing deposition where in scope.

- Selected flow: ammonia, emissions to air unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from manure nitrogen, management route, climate or storage condition, and declared NH3 method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per manure-management route or N input
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_manure_and_excreta_records`
- Sources: `emep-eea-2023-manure-management`

### Process: Farm-gate Handling and Delivery (`farm_gate_handling_and_delivery`)

#### Inputs

##### Product flows

###### Live ass entering farm-gate handling (`live_ass_entering_farm_gate_handling`)

Live animals entering pre-sale holding, quarantine, sorting, loading, or delivery are recorded when those activities are inside the declared gate.

- Selected flow: Asses `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- Flow property / unit: Mass / kg live weight
- Amount rule: measured live weight entering handling or delivery period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: handling process input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_weight_records`

###### Handling energy and delivery transport (`handling_energy_and_delivery_transport`)

Electricity, fuel, loading equipment, and route-specific transport service are recorded when the declared gate includes handling or delivery beyond normal farm-gate transfer.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; electricity or transport service selected from route records
- Flow property / unit: Net calorific value or transport service / MJ, kWh, or tonne-km
- Amount rule: measured fuel, electricity, carrier invoice, or route-specific transport service
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivered kg live weight
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_handling_and_transport_records`
- Range: Provisional handling and delivery energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg delivered live weight
  - Basis: broad first-pass handling and route energy inside declared gate
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required.

##### Elementary flows

Include direct combustion emissions from farm-gate handling and delivery when fuel is combusted inside the foreground system.

#### Outputs

##### Product flows

###### Declared transferred live ass (`declared_transferred_live_ass`)

Declared transferred live ass is the live animal output at the declared gate.

- Selected flow: Asses `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- Flow property / unit: Mass / kg live weight
- Amount rule: measured live weight at declared transfer gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_weight_records`

##### Waste flows

Declare bedding waste, manure, mortalities, or rejected animals from handling separately when they occur during pre-sale holding, quarantine, or delivery.

##### Elementary flows

###### Fossil carbon dioxide from handling and delivery energy (`fossil_carbon_dioxide_from_handling_and_delivery_energy`)

Fossil carbon dioxide from handling and delivery energy is calculated from fuel and energy records.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: energy or transport fuel quantity multiplied by declared emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivery or handling energy inventory
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_handling_and_transport_records`
- Range: Provisional handling and delivery fossil CO2 screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg CO2/kg delivered live weight
  - Basis: broad first-pass fossil CO2 from handling and delivery energy
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

No allocation is required when the only product output is the transferred live ass and manure or mortalities are treated as wastes with declared treatment. If manure, compost, draught service during the rearing period, milk, hide, breeding service, or another co-product is intentionally marketed inside the foreground boundary, allocation must be declared before publication.

Preferred hierarchy:

1. Subdivide processes when records separate live-animal production from manure product preparation, milk production, work service, or another co-product route.
2. Use physical allocation only when a causal physical relationship is documented, such as nutrient content for marketed manure products.
3. Use economic allocation when physical allocation is not defensible and market values are available.
4. Report system expansion or substitution only as an additional scenario, with substituted product, geography, and avoided-burden dataset disclosed.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stock_entry_records | stock_entry_and_breeding_basis | declared breeding herd or purchased stock entry | animal receiving, birth, purchase, or herd inventory record | animal or lot id; source; age class; sex; breed or type; intended use; live weight; acquisition or birth date; health status; upstream burden treatment | scale record, veterinary certificate, herd book, purchase invoice, or birth record | head and kg live weight | per birth, purchase, transfer, or inventory period | rearing cycle or herd maintenance period | declared herd, farm, or lot | sum live weight by animal class and allocate breeding-basis burdens to live-weight output when included | scale calibration, herd book, animal movement record, purchase invoice, health certificate |
| cp_live_weight_records | rearing_and_husbandry; farm_gate_handling_and_delivery | live ass weight and output | weighing, sale, dispatch, or animal movement record | animal or lot id; age class; sex; breed or type; weighing date; live weight; gate; buyer or destination; health status | calibrated scale, weigh tape with conversion, sale ticket, or animal movement record | kg live weight and head | per weighing, sale, or dispatch event | rearing cycle and delivery period | animal lot, farm, and transfer gate | sum live weight at declared gate and reconcile with entries, births, purchases, deaths, and sales | scale calibration, sale ticket, movement certificate, dispatch note |
| cp_feed_and_forage_records | stock_entry_and_breeding_basis; rearing_and_husbandry | feed and forage | feed purchase, grazing, feed issue, or feed balance record | feed type; source; dry matter or as-fed basis; quantity; moisture; animal class; feeding period | invoice, feed issue log, pasture allocation record, feed inventory, or nutrition record | kg as-fed and kg dry matter | daily, batch, month, or feeding period | rearing cycle or herd maintenance period | farm, pasture, housing unit, or animal class | convert to dry matter where needed; allocate by animal-days, live weight, or documented ration group | invoice, feed analysis, inventory reconciliation, pasture record |
| cp_water_records | rearing_and_husbandry | drinking and husbandry water | water meter, tank fill, pump, well, or use estimate record | source; volume; period; animal class; use type; allocation method | meter reading, pump log, water invoice, tank record, or documented estimate | L, m3, or kg | daily, month, batch, or reporting period | rearing cycle | water source, housing unit, pasture, or animal lot | sum by source and convert to kg where needed; allocate by animal-days or live weight | meter calibration, pump log, water invoice, documented estimate |
| cp_bedding_and_housing_records | rearing_and_husbandry | bedding and housing materials | bedding purchase, issue, or replacement record | material type; quantity; moisture where relevant; replacement frequency; housing unit; fate | invoice, stock issue log, housing operation record, or bedding balance | kg | per delivery, replacement, or reporting period | rearing cycle | housing unit or animal lot | sum bedding input and assign to manure or waste route where relevant | invoice, inventory log, housing record |
| cp_veterinary_and_health_records | rearing_and_husbandry | veterinary and animal health inputs | treatment, vaccine, medicine, disinfectant, or identification record | product; active ingredient if applicable; dose; item count; treated animals; date; reason | veterinary log, invoice, product label, treatment certificate, or farm health record | kg, L, dose, item, or product-specific unit | per treatment event or reporting period | rearing cycle | animal lot or farm | sum product amount by animal lot and normalize to live-weight output when material | veterinary record, invoice, treatment log, product label |
| cp_energy_records | rearing_and_husbandry | farm energy | electricity, fuel, equipment, or service energy record | carrier; quantity; meter or invoice id; operation; period; allocation method | utility bill, meter reading, fuel invoice, equipment log, or telematics | kWh, MJ, L, or kg fuel | month, batch, or operation | rearing cycle | farm, housing unit, pump, feed system, or manure system | convert to MJ or kWh and allocate to live-ass production using documented basis | invoice, meter record, fuel log, equipment record |
| cp_manure_and_excreta_records | manure_and_excreta_management | manure, urine, bedding, and excreta | manure collection, storage, grazing, field application, transfer, or treatment record | animal class; manure-management system; mass or volume; dry matter; volatile solids; N content where available; storage duration; climate or temperature; fate | scale, storage volume estimate, manure analysis, farm log, grazing record, or transfer ticket | kg wet mass, kg dry matter, kg VS, kg N, m3 | daily, batch, storage cycle, application event, or reporting period | rearing cycle and manure storage period | housing, yard, pasture, storage, field, or transfer point | reconcile manure generated, stored, treated, deposited, transferred, sold, or disposed; calculate emissions by declared method | manure analysis, storage log, transfer ticket, application record, IPCC or EMEP method documentation |
| cp_mortality_and_cull_records | stock_entry_and_breeding_basis; rearing_and_husbandry | mortality and non-marketable culls | animal death, cull, disposal, or rendering record | animal id or lot; date; age class; estimated live weight or carcass mass; cause category when available; fate | farm mortality log, veterinary record, disposal ticket, rendering receipt, or burial/compost record | head and kg | per event or reporting period | rearing cycle | farm or animal lot | sum mortality and cull mass by fate and normalize to live-weight output | veterinary note, disposal ticket, mortality log |
| cp_land_and_housing_records | stock_entry_and_breeding_basis; rearing_and_husbandry | land occupation and housing area | pasture, yard, housing, or GIS area record | area; duration; animal class; stocking period; housing or grazing system | GIS record, pasture map, farm record, housing plan, or stocking log | ha a, m2 a, ha, or m2 | season, month, or rearing cycle | rearing cycle | pasture, yard, housing unit, or farm | multiply area by occupation duration and allocate by animal-days or live weight | GIS file, farm map, stocking log |
| cp_gate_handling_and_transport_records | farm_gate_handling_and_delivery | handling and delivery | pre-sale holding, loading, quarantine, carrier, or transport record | gate; holding duration; live weight; route; distance; vehicle; fuel; electricity; carrier invoice; tonne-km | dispatch note, carrier invoice, route log, fuel log, or meter record | kg live weight, km, tonne-km, L fuel, kWh, MJ | per shipment or handling period | delivery period | declared gate, holding area, and delivery route | normalize handling and route-specific energy to delivered kg live weight | dispatch record, carrier invoice, route record, fuel or energy record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_live_weight_output | reference product | kg transferred live weight at declared gate / PCR reference amount | cp_live_weight_records | kg live ass per reference output | `mass-balance-identity` |
| calculate_live_weight_gain | growth and herd reconciliation | final live weight + deaths + transfers out - starting live weight - purchases in, by animal class | cp_stock_entry_records; cp_live_weight_records; cp_mortality_and_cull_records | live-weight gain and herd mass balance | `mass-balance-identity` |
| normalize_feed_dry_matter | feed inputs | convert as-fed feed to dry matter using measured or declared moisture, then allocate by animal-days, ration group, live-weight gain, or documented farm basis | cp_feed_and_forage_records; cp_live_weight_records | kg feed dry matter per reference output | `fao-leap-animal-feeds-2016` |
| calculate_enteric_ch4 | enteric methane | apply declared IPCC tier or reviewed regional method using animal class, live weight, feed intake, and population-time | cp_live_weight_records; cp_feed_and_forage_records | kg CH4 per reference output | `ipcc-2019-livestock-manure` |
| calculate_manure_ch4_n2o | manure CH4 and N2O | apply declared IPCC manure-management method using volatile solids, nitrogen excretion, management system, storage route, and climate where required | cp_manure_and_excreta_records; cp_live_weight_records; cp_feed_and_forage_records | kg CH4 and kg N2O per reference output | `ipcc-2019-livestock-manure` |
| calculate_manure_nh3 | manure ammonia | apply declared EMEP/EEA or regional ammonia method using manure nitrogen, housing, storage, field application, grazing deposition, and climate or management data where required | cp_manure_and_excreta_records | kg NH3 per reference output | `emep-eea-2023-manure-management` |
| calculate_energy_co2 | farm energy fossil CO2 | energy or fuel quantity multiplied by declared emission factor and normalized to live-weight output | cp_energy_records; cp_gate_handling_and_transport_records | kg fossil CO2 per reference output |  |
| allocate_breeding_basis | breeding herd burdens | allocate breeding herd maintenance burdens to marketable live-ass output using documented herd output basis when breeding herd is inside scope | cp_stock_entry_records; cp_feed_and_forage_records; cp_live_weight_records | breeding-basis burden per kg live-weight output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_animal_identity | live animal identity | Age class, sex, breed or type, intended use, health status, production system, geography, and declared gate must be stated for the reference flow and major animal lots. | herd book, animal movement record, health certificate, sale note |
| dq_live_weight | live-weight records | Live weight must identify weighing date, animal or lot, method, unit, gate, and device or conversion method. | scale calibration, weigh ticket, sale ticket, documented weigh-tape conversion |
| dq_feed_basis | feed and forage | Feed records must preserve feed type, source, quantity, dry matter or moisture basis, animal class allocation, and time period. | invoice, feed analysis, feed log, pasture record |
| dq_manure_method | manure and emissions | Manure-management system, housing/grazing split, storage duration, fate, and nitrogen or volatile-solids basis must be documented before CH4, N2O, or NH3 values are treated as final. | manure log, storage record, analysis, IPCC or EMEP calculation sheet |
| dq_temporal_coverage | rearing cycle | Foreground records should cover the complete declared rearing cycle or explain use of annualized herd records for multi-year breeding systems. | herd inventory, annual farm records, sale records |
| dq_completeness | material flows | Feed, water, bedding where used, energy, animal health inputs when material, manure, mortalities, and farm-gate handling must be addressed or explicitly excluded with rationale. | collection protocol checklist and data quality review |

## 9. Validation Rules

Before publishing a foreground data package using this PCR, check:

- reference flow is expressed as kg live ass and includes age class, sex, breed or type, intended use, production system, health status, geography, and declared gate
- live-ass product is not confused with horses, mules and hinnies, equine meat, hides, milk, semen, embryos, or animal work service
- starting-condition treatment for breeding herd, foals, purchased stock, and same-category live-ass inputs is declared
- feed quantities preserve dry matter or as-fed basis and animal class allocation
- water, bedding where used, veterinary inputs when material, energy, land occupation when in scope, and handling or delivery transport are addressed
- manure-management system, grazing deposition, storage, transfer, and field application under farm control are declared
- enteric CH4, manure CH4, manure N2O, manure NH3, and fossil CO2 from energy are calculated only with declared methods and source references
- mortality, culls, manure products, bedding waste, and other outputs have declared fates
- allocation or subdivision is declared when manure, milk, work service, breeding service, or other co-products are credited
- values outside provisional screening ranges include source notes, corrected data, or method rationale

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream live-animal supply chain, working-animal service model, equine product, farm input, or livestock inventory modelling where live-ass qualifiers, geography, production route, and declared gate match the dataset metadata |
| excluded_use | horses, mules and hinnies, equine meat, hides, milk, semen, embryos, manure fertilizer products, and transport or draught service after sale unless separately modelled |
| required_metadata | reference flow; geography; rearing cycle; age class; sex; breed or type; intended use; live-weight measurement method; production system; health status; manure-management system; declared gate; transport inclusion; collection protocol coverage; DQR |
| required_quality_disclosure | record coverage, allocation choices, starting-condition treatment, calculation rules, emission methods, measurement devices or primary records, unresolved omissions, and data quality scores |
| update_trigger | material change in production system, breed or animal type, age class, geography, feed basis, manure-management system, declared gate, transport inclusion, emission method, collection protocol coverage, or data quality score |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipcc-2019-livestock-manure` | official_guidance | <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf> | enteric CH4, manure CH4, manure N2O, volatile solids, nitrogen excretion, and manure-management method context |
| `fao-leap-guidelines` | official_guidance | <https://www.fao.org/partnerships/leap/resources/publications/fao-leap-guidelines/en> | livestock LCA boundary, data quality, and supply-chain assessment context |
| `fao-leap-animal-feeds-2016` | official_guidance | <https://openknowledge.fao.org/handle/20.500.14283/i6433e> | animal feed supply-chain assessment and feed data collection basis |
| `emep-eea-2023-manure-management` | official_guidance | <https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023/@@download/file> | ammonia and air-pollutant process decomposition for manure management |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for live-weight output, animal inventory reconciliation, and process reference outputs. | QA guardrails for reference outputs and animal mass-balance checks |
