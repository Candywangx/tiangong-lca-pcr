---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.preparations-used-in-animal-feeding-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Preparations used in animal feeding n.e.c.

## 1. Scope and Applicability

This PCR applies to the industrial manufacture of compound animal feed that is not elsewhere classified: complete and complementary feeds produced by blending two or more feed materials, with or without feed additives, and supplied as mash, meal, pellets, crumbles, or extruded feed for livestock, poultry, aquaculture, and other food-producing or non-pet animals. The product definition of compound feed follows Regulation (EC) No 767/2009 on the placing on the market and use of feed. The LCA modelling conventions follow the FAO LEAP guidelines for the environmental performance of animal feeds supply chains and the EU Product Environmental Footprint Category Rules (PEFCR) for feed for food-producing animals, restricted here to the feed-mill foreground.

The foreground system boundary starts when feed materials, feed additives, and packaging materials cross the feed-mill receiving gate, and ends when conforming feed is released at the dispatch gate, either in bulk or packaged. Ingredient production, inbound transport, energy and water supply, packaging production, and waste treatment are not hidden inside the foreground; they enter the inventory only as linked upstream or downstream datasets. Delivery to farms, on-farm storage, and animal feeding are outside the foreground boundary.

This PCR does not cover single feed materials marketed without compound-feed manufacture, stand-alone feed additives or premixtures, medicated feed, retail dog or cat food (CPC 23311), lucerne (alfalfa) meal and pellets (CPC 23312), silage or forage, on-farm home mixing, or the animal use phase. A multi-product feed mill remains in scope only when batch or campaign records allow each declared formulation to be isolated.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.preparations-used-in-animal-feeding-n-e-c |
| classification_refs | CPC 3.0: 23319, Preparations used in animal feeding n.e.c. (`exact`) |
| covered_products | Complete and complementary compound feeds for livestock, poultry, aquaculture and other non-pet animals, in mash, meal, pellet, crumble, or extruded form, manufactured industrially from two or more feed materials with or without feed additives |
| excluded_products | Retail dog or cat food; lucerne (alfalfa) meal and pellets; single feed materials; stand-alone feed additives and premixtures; medicated feed; silage and forage; on-farm home-mixed feed; feed use by animals |
| representative_product | Dry complete compound feed for a declared food-producing animal class, as-fed |
| production_route | Ingredient reception and storage; conditional size reduction; batching and mixing; conditional steam conditioning, pelleting or extrusion; conditional cooling and screening; packaging and dispatch |
| market_state | Conforming, labelled compound feed on an as-fed basis, released in bulk or in bags at the feed-mill dispatch gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Industrial manufacture of compound animal feed n.e.c. from reception of feed materials to dispatch of conforming feed |
| How much | 1,000 kg of compound feed on an as-fed basis |
| How well | Feed conforms to its declared formulation and nutrient specification, to declared moisture content, and to applicable feed-safety and labelling rules |
| How long or cycle | Continuous mill operation averaged over a 12-month production period |
| reference_flow_link | Process packaging_dispatch, Outputs, Product flows, row reference_product_output |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Assorted Feed `cb2b142b-0ed1-4d6f-9283-cfef94451a75` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | feed form (mash, meal, pellet, crumble, extruded); target animal class; formulation identifier; moisture content as-fed; dispatch form (bulk or bagged, with bag size); production country and site; 12-month production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference flow and all ingredient inputs are recorded on an as-fed mass basis in kg; volumes or counts must be converted with declared, calibrated mass conversion records. |
| `moisture_declaration` | reference product and feed materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Moisture content of the dispatched feed and of each major feed material must be declared; dry-matter corrections, when applied, must be reported as separate calculated values and never silently substituted for as-fed amounts. |
| `electricity_measure` | all electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Electricity is recorded in kWh from metered supplies; conversion to MJ, when required by a study, uses 1 kWh = 3.6 MJ and is reported as a calculated value. |
| `natural_gas_measure` | natural gas boiler fuel | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Natural gas is recorded in m3 at the supply meter conditions stated by the utility; conversion to mass or energy units requires a declared conversion record. |
| `bag_count` | woven polypropylene bag input | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | items | Packaging is recorded as counted bags together with the nominal fill mass per bag; bulk dispatch records zero bags. |

## 5. System Boundary

The foreground boundary contains the feed-mill operations from ingredient reception to dispatch: reception, weighing and storage of feed materials and additives; conditional grinding; batching and mixing; conditional conditioning, pelleting or extrusion; conditional cooling and screening; and packaging or bulk loading. Included foreground flows are ingredient and additive inputs, electricity, boiler fuel, process and boiler-feed water, internal-logistics fuel, packaging materials, direct dust emissions to air, and waste outputs leaving the mill boundary.

| rule_id | Rule |
| --- | --- |
| `bound_start` | The foreground starts at the feed-mill receiving gate; every feed material, additive, and packaging item is recorded as it crosses that gate, with quantity and formulation linkage. |
| `bound_upstream` | Ingredient cultivation and processing, inbound transport, energy and water supply, and packaging production are included only through linked upstream datasets whose identity and version are declared; no upstream burden may be approximated inside the foreground inventory. |
| `bound_recycle` | Internal rework, fines, and start-up or off-spec material returned to the same mill line are closed-loop internal recycles and are not counted as new inputs or as waste; only material actually leaving the mill boundary is recorded as a waste output. |
| `bound_exclusions` | Capital goods, mill maintenance materials, personnel-related flows, and delivery transport beyond the dispatch gate are excluded from the foreground and must be listed in the disclosure when a study includes them. |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Feed materials, feed additives, and packaging materials of a declared formulation are received at the feed-mill gate and released for production |
| starting_condition_role | Declared foreground starting point for first-dataset production |
| product_classification_scope | CPC 3.0 leaf 23319 compound feed n.e.c.; sibling leaves 23311 and 23312 are out of scope |
| recursive_input_rule | When a mill output or rework stream of the same product category re-enters the same foreground system, it is recorded as internal recycle with no new upstream burden; purchased compound feed used as an ingredient is recorded as a product input with its own declared upstream dataset |
| upstream_dataset_requirement | Every product input crossing the receiving gate must be paired with a declared upstream dataset identity; feed ingredient datasets should follow the FAO LEAP feed guidelines or PEFCR-conformant sources such as the GFLI database |
| disclosure | The data package discloses formulation classes, inclusion rates by class, moisture basis, dispatch form, and every exclusion from the foreground boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_reception_storage` | Ingredient reception, weighing and storage | required |  | upstream handling | no |
| `size_reduction` | Size reduction (grinding) | conditional | applies when any feed material requires particle-size reduction before mixing | intermediate | no |
| `batching_mixing` | Batching and mixing | required |  | core conversion | no |
| `conditioning_pelleting` | Steam conditioning, pelleting or extrusion | conditional | applies to pelleted, crumbled, or extruded feed | forming | no |
| `cooling_screening` | Cooling, crumbling and screening | conditional | applies when conditioning_pelleting is included | finishing | no |
| `packaging_dispatch` | Packaging and dispatch | required |  | dispatch | yes |

### Process: Ingredient reception, weighing and storage (`ingredient_reception_storage`)

#### Inputs

##### Product flows

###### Cereal grain ingredients such as maize (`feed_grains`)

Cereal grains form the energy base of most formulations and cross the boundary at the receiving weighbridge. The row records the representative cereal class flow; the concrete dataset substitutes the actual grains of the declared formulation.

- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Amount rule: weighbridge or receiving-scale mass per formulation, as-received
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_receipts`
- Sources: `fao-leap-2016-feed-supply-chains`

- Range: Cereal inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 300
  - Upper: 700
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent cereal share, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protein meal ingredients such as soybean meal (`protein_meals`)

Protein meals supply the protein fraction of the formulation and are recorded per received consignment. The representative class flow is substituted by the actual protein meals of the formulation in a concrete dataset.

- Selected flow: Soybean Meal `69147c54-6d24-41d0-a1bd-fd0f6ae5e7e5`
- Flow property / unit: Mass / kg
- Amount rule: weighbridge or receiving-scale mass per formulation, as-received
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_receipts`
- Sources: `fao-leap-2016-feed-supply-chains`

- Range: Protein meal inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 350
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent protein share, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fibrous milling co-products such as wheat bran (`fibre_coproducts`)

Fibrous co-products of grain milling are common formulation components. The representative class flow is substituted by the actual fibrous ingredients of the formulation.

- Selected flow: Wheat bran `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- Flow property / unit: Mass / kg
- Amount rule: weighbridge or receiving-scale mass per formulation, as-received
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_receipts`

- Range: Fibrous co-product inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent share, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Added fats and oils (`fats_oils`)

Fats and oils are added for energy density and as pelleting aids. The representative flow is crude vegetable oil; the concrete dataset substitutes the actual fat source.

- Selected flow: Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3`
- Flow property / unit: Mass / kg
- Amount rule: metered or weighed addition per formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_receipts`

- Range: Fats and oils inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent inclusion, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mineral ingredients such as limestone powder (`mineral_ingredients`)

Mineral ingredients supply calcium and other macro minerals. The representative flow is substituted by the actual mineral sources of the formulation.

- Selected flow: limestone powder `a3317ee0-aae8-4d22-b720-fe24bc73d3c4`
- Flow property / unit: Mass / kg
- Amount rule: weighed addition per formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_receipts`

- Range: Mineral ingredient inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 30
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent share, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed salt (`feed_salt`)

Salt is added as a mineral carrier and palatability component of the formulation.

- Selected flow: Mineral salt, animal feed supplement `158e4fa8-8175-4436-8cb4-c2e2fc45c33d`
- Flow property / unit: Mass / kg
- Amount rule: weighed addition per formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_receipts`

- Range: Feed salt inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent share, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Vitamin and mineral premix (`premix_input`)

Premixes carry vitamins, trace minerals, and other micro-ingredients into the formulation and are dosed per batch.

- Selected flow: Vitamin and mineral premix, for feed `d5514f47-d1d0-470f-a04e-89e521c62841`
- Flow property / unit: Mass / kg
- Amount rule: weighed addition per batch from dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_micro_ingredient_dosing`
- Sources: `ec-pefcr-feed-food-producing-animals`

- Range: Premix inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 50
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent share, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Synthetic amino acids such as L-lysine (`amino_acids`)

Synthetic amino acids balance the protein fraction and are dosed per batch. The representative flow is substituted by the actual amino acids of the formulation.

- Selected flow: L-Lysine `c919f32a-3feb-4129-88d0-244862f8efca`
- Flow property / unit: Mass / kg
- Amount rule: weighed addition per batch from dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_micro_ingredient_dosing`

- Range: Amino acid inclusion QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; formulation-dependent share, provisional screen pending formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for reception and internal conveying (`electricity_handling`)

Electricity powers unloaders, conveyors, elevators, and silo auxiliaries; it is metered at mill level and allocated to processes from sub-meters or operating records.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity assigned to reception and conveying duty
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`

- Range: Reception and conveying electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 6
  - Unit: kWh
  - Basis: per 1,000 kg compound feed output; provisional screen pending sub-meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel for internal logistics (`diesel_internal_logistics`)

Diesel powers yard loaders and forklifts moving ingredients and packaging inside the mill boundary.

- Selected flow: Diesel `9fc9d30c-0229-459c-a7f5-8f55d6533225`
- Flow property / unit: Mass / kg
- Amount rule: fuel-issue or tank records assigned to internal logistics
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_logs`

- Range: Internal logistics diesel QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1.0
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; provisional screen pending fuel records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Ingredient packaging waste (`ingredient_packaging_waste`)

Bags, liners, and wrapping from received ingredients leave the boundary as packaging waste for declared downstream treatment.

- Selected flow: Plastic Waste `3fd9ff2b-455a-4ed6-a52d-e2cb5a1484f3`
- Flow property / unit: Mass / kg
- Amount rule: weighed or counted packaging waste per production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

- Range: Ingredient packaging waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; provisional screen pending site records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Screenings and rejected material (`screenings_rejects`)

Screenings, foreign material, and non-recyclable rejects removed at reception leave the boundary as organic waste.

- Selected flow: Food Debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Flow property / unit: Mass / kg
- Amount rule: weighed waste per production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

- Range: Screenings and rejects QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; provisional screen pending site records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Reception and transfer dust (`reception_dust`)

Grain dust escapes to air at tipping pits, conveyors, and silo vents when dust collection does not return it to the process.

- Selected flow: Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- Flow property / unit: Mass / kg
- Amount rule: measured or declared estimate from dust-control records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_records`

- Range: Reception dust QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; provisional screen pending dust measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Size reduction (grinding) (`size_reduction`)

#### Inputs

##### Product flows

###### Electricity for grinding (`electricity_grinding`)

Grinding is one of the dominant electrical duties of the mill and is metered or assigned from operating records.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or assigned grinding electricity per tonne ground
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`

- Range: Grinding electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 6
  - Upper: 10
  - Unit: kWh
  - Basis: per 1,000 kg ground material; specific grinding energy reported for cereal grinding duty
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `yemmak-feed-mill-energy-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Grinding dust (`grinding_dust`)

Dust escaping grinding and aspiration systems is emitted to air.

- Selected flow: Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- Flow property / unit: Mass / kg
- Amount rule: measured or declared estimate from dust-control records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_records`

- Range: Grinding dust QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; provisional screen pending dust measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Batching and mixing (`batching_mixing`)

#### Inputs

##### Product flows

###### Electricity for batching and mixing (`electricity_mixing`)

Batching scales, dosing augers, and mixers consume electricity metered or assigned from operating records.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or assigned batching and mixing electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`

- Range: Batching and mixing electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 6
  - Unit: kWh
  - Basis: per 1,000 kg compound feed output; provisional screen pending sub-meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Mixing and dosing dust (`mixing_dust`)

Dust from micro-ingredient dosing and mixer vents escapes to air.

- Selected flow: Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- Flow property / unit: Mass / kg
- Amount rule: measured or declared estimate from dust-control records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_records`

- Range: Mixing and dosing dust QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; provisional screen pending dust measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Steam conditioning, pelleting or extrusion (`conditioning_pelleting`)

#### Inputs

##### Product flows

###### Natural gas for the steam boiler (`natural_gas_boiler`)

Boiler fuel generates conditioning steam; combustion burdens belong to the linked upstream gas dataset, not to the foreground.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered boiler fuel per tonne of conditioned feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conditioned feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_logs`

- Range: Boiler fuel provisional guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.5
  - Upper: 4.0
  - Unit: m3
  - Basis: per 1,000 kg conditioned feed; derived from about 26 kWh/t steam-conditioning duty and provisional pending boiler records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for pelleting or extrusion (`electricity_pelleting`)

The pellet press or extruder drive is the single largest electrical load of a pelleting line.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or assigned press electricity per tonne pelleted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg pelleted or extruded feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`

- Range: Pelleting electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 4
  - Upper: 40
  - Unit: kWh
  - Basis: per 1,000 kg pelleted feed; formulation-dependent specific press energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `yemmak-feed-mill-energy-2021`

###### Boiler feed water (`boiler_water`)

Make-up water feeds the steam boiler; condensate return is declared where operated.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Mass / kg
- Amount rule: metered boiler make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meters`

- Range: Boiler feed water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 60
  - Unit: kg
  - Basis: per 1,000 kg conditioned feed; derived from conditioning steam demand, provisional pending meter records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Cooling, crumbling and screening (`cooling_screening`)

#### Inputs

##### Product flows

###### Electricity for cooling and screening (`electricity_cooling`)

Cooler fans, crumblers, and screens consume electricity; fines are returned to the line as internal recycle.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or assigned cooling and screening electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cooled feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`

- Range: Cooling and screening electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 8
  - Unit: kWh
  - Basis: per 1,000 kg cooled feed; provisional screen pending sub-meter records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Cooling and screening dust (`cooling_dust`)

Fines escaping the cooler cyclone and screening vents are emitted to air.

- Selected flow: Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- Flow property / unit: Mass / kg
- Amount rule: measured or declared estimate from dust-control records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cooled feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_records`

- Range: Cooling and screening dust QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1,000 kg cooled feed; provisional screen pending dust measurement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and dispatch (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Woven polypropylene bags (`pp_woven_bags`)

Bagged feed is packed in woven polypropylene bags counted with their nominal fill mass; bulk dispatch records zero bags.

- Selected flow: Woven polypropylene bag `9bfaad07-355e-467a-9bab-f95094e7c869`
- Flow property / unit: Number of items / items
- Amount rule: counted bags with declared nominal fill mass per bag
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg bagged feed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

- Range: Bag-use QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 50
  - Unit: items
  - Basis: per 1,000 kg bagged feed, corresponding to nominal fill masses of 50 kg down to 20 kg per bag
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for packaging and loading (`electricity_packaging`)

Bagging lines, palletisers, and bulk out-loading consume metered or assigned electricity.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or assigned packaging and loading electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`

- Range: Packaging and loading electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kWh
  - Basis: per 1,000 kg compound feed output; provisional screen pending sub-meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Compound feed released at the dispatch gate (`reference_product_output`)

Conforming compound feed leaves the foreground boundary here; this row is the PCR reference flow.

- Selected flow: Assorted Feed `cb2b142b-0ed1-4d6f-9283-cfef94451a75`
- Flow property / unit: Mass / kg
- Amount rule: reference amount 1,000 kg as-fed, from dispatch weighbridge or packing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow of this PCR
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output`

- Range: Reference output mass-closure guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 980
  - Upper: 1020
  - Unit: kg
  - Basis: dispatched mass equivalent per 1,000 kg reference amount, consistent with the calc_mass_closure closure band
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Packaging line rejects (`packaging_rejects`)

Damaged bags and wrapping rejected at the packing line leave the boundary as packaging waste.

- Selected flow: Plastic Waste `3fd9ff2b-455a-4ed6-a52d-e2cb5a1484f3`
- Flow property / unit: Mass / kg
- Amount rule: weighed or counted rejects per production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg compound feed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

- Range: Packaging rejects QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1,000 kg compound feed output; provisional screen pending site records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

The feed-mill foreground is a single-product-per-batch operation; co-production inside the mill boundary is limited to internal recycle and waste streams. Allocation of ingredient co-production burdens, such as soybean meal versus soybean oil, is resolved inside the linked upstream datasets and is not re-allocated in the foreground.

| rule_id | Rule |
| --- | --- |
| `alloc_line_split` | When a mill produces several formulations in the same period, shared electricity, fuel, water, and overhead flows are split between formulations in proportion to produced mass per formulation, using production-run or sub-meter records where available. |
| `alloc_rework` | Fines, rework, and off-spec material returned to the same line carry no additional upstream burden; only net material leaving the boundary is inventoried. |
| `alloc_waste_cutoff` | Waste outputs carry foreground burden up to the mill boundary only; treatment or valorisation burdens and credits belong to the declared downstream dataset. |
| `alloc_upstream_coproducts` | Co-product allocation for feed materials, including oilseed meals and milling fractions, follows the upstream dataset and should be consistent with the FAO LEAP feed guidelines and the PEFCR feed rules; the foreground dataset must declare which allocation its ingredient datasets apply. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_receipts` | ingredient_reception_storage | feed material inputs | weighbridge and goods-receipt records | ingredient class, supplier, received mass, moisture on receipt, linked formulation | calibrated weighbridge and receipt system | kg | per consignment | 12 months | feed mill site | sum per ingredient class per formulation, normalized per 1,000 kg output | weighbridge calibration certificate, supplier delivery notes |
| `cp_micro_ingredient_dosing` | batching_mixing | micro-ingredient and additive inputs | batch dosing records | premix, amino acid, salt, mineral dose per batch, batch count | batch control system or manual dosing log | kg | per batch | 12 months | feed mill site | sum per formulation, normalized per 1,000 kg output | batch reports, dosing scale calibration |
| `cp_electricity_meters` | all processes | electricity inputs | utility meter and sub-meter records | kWh per meter and period, duty assignment rules | utility invoices plus sub-meter or operating-hour assignment | kWh | monthly | 12 months | feed mill site | mill total split by duty per process map | meter certificates, utility invoices |
| `cp_fuel_logs` | conditioning_pelleting, ingredient_reception_storage | boiler fuel and internal diesel | fuel meter and issue records | gas volume per period, diesel issued per vehicle or duty | gas utility meter, fuel-issue log | m3; kg | monthly | 12 months | feed mill site | per duty, normalized per process output basis | meter certificates, fuel invoices |
| `cp_water_meters` | conditioning_pelleting | boiler feed water | water meter records | make-up water volume per period | site or line water meter | kg | monthly | 12 months | feed mill site | per 1,000 kg conditioned feed | meter records, water invoices |
| `cp_packaging_records` | packaging_dispatch | packaging inputs | packaging stock and usage records | bag type, bags used, nominal fill mass | stores issue records and packing-line counters | items | monthly | 12 months | feed mill site | items per 1,000 kg bagged output | supplier specifications, stock reconciliation |
| `cp_production_output` | packaging_dispatch | reference product output | dispatch and packing records | formulation, dispatched mass, form, bag count or bulk volume | dispatch weighbridge and packing records | kg | per batch or daily | 12 months | feed mill site | sum per formulation per period | calibrated scale records, sales dispatch notes |
| `cp_waste_records` | ingredient_reception_storage, packaging_dispatch | waste outputs | waste transfer records | waste stream, mass, destination contractor | waste transfer notes or site weighings | kg | per collection | 12 months | feed mill site | per waste stream, normalized per 1,000 kg output | contractor receipts, transfer notes |
| `cp_dust_records` | size_reduction, batching_mixing, conditioning_pelleting, cooling_screening, ingredient_reception_storage | dust emissions to air | stack or fugitive dust records | measured concentration or declared estimate, control device type | periodic measurement or declared engineering estimate | kg | annual | 12 months | feed mill site | per emission point, normalized per process output basis | measurement reports or declared estimate note |
| `cp_moisture_tests` | ingredient_reception_storage, packaging_dispatch | moisture qualifiers | laboratory moisture tests | moisture percent per ingredient lot and per product lot | oven or rapid moisture analyser per in-house method | % | per lot | 12 months | feed mill site | lot average per formulation | laboratory records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_mass` | reference product | dispatched formulation mass = sum of dispatch weighbridge records per formulation over the 12-month period | cp_production_output | kg output per formulation |  |
| `calc_ingredient_intensity` | feed material inputs | ingredient intensity = annual consignment mass per ingredient class divided by annual formulation output | cp_ingredient_receipts, calc_output_mass | kg ingredient per 1,000 kg output |  |
| `calc_mass_closure` | foreground balance | mass closure = (sum of ingredient, additive, and packaging inputs) minus (dispatched product plus waste outputs plus declared dust), reported as percent of input mass | cp_ingredient_receipts, cp_micro_ingredient_dosing, cp_production_output, cp_waste_records, cp_dust_records | closure percent |  |
| `calc_specific_electricity` | electricity inputs | process electricity intensity = assigned kWh per process divided by process output over the period | cp_electricity_meters | kWh per 1,000 kg process output | `lpelc-feed-processing-energy` |
| `calc_specific_gas` | natural gas input | boiler gas intensity = metered gas volume divided by conditioned feed mass over the period | cp_fuel_logs | m3 per 1,000 kg conditioned feed |  |
| `calc_dry_matter` | reference product and feed materials | dry matter = as-fed mass multiplied by (1 minus moisture fraction); reported alongside, never instead of, as-fed amounts | cp_moisture_tests | kg dry matter |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | whole dataset | Formulation classes, inclusion rates by class, target animal class, and feed form are declared for every produced formulation | formulation register linked to production runs |
| `dq_measurement` | meters and scales | Weighbridges, dosing scales, and utility meters are calibrated; calibration status is documented for the collection period | calibration certificates or maintenance log |
| `dq_temporal` | all foreground records | Records cover a continuous 12-month period not older than five years at dataset publication | dated records per protocol |
| `dq_completeness` | inventory | All formulation inputs are recorded; mass closure per `calc_mass_closure` stays within 98 to 102 percent of input mass | closure calculation per campaign |
| `dq_disclosure` | data package | Required qualifiers, exclusions, upstream dataset identities, and allocation declarations are complete | disclosure section of the data package |

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| `val_mass_balance` | A foreground data package is rejected when mass closure per `calc_mass_closure` falls outside 98 to 102 percent of input mass without a documented explanation. |
| `val_energy_guardrail` | Grinding and pelleting electricity outside their QA guardrail ranges, or combined mill energy outside 40 to 60 kWh per 1,000 kg feed, must be justified by meter evidence or corrected before acceptance. |
| `val_identity_refs` | Every inventory row marked with a Tiangong UUID must carry that UUID in the data package; rows with substituted ingredient flows must declare the substitute flow identity. |
| `val_qualifiers` | A data package missing any required qualifier of section 3 is incomplete and fails validation. |
| `val_conditional_processes` | Conditional processes omitted from the inventory must be justified by the declared feed form; pelleted, crumbled, or extruded feed may not omit conditioning_pelleting and cooling_screening. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for industrial compound feed manufacture |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Linked as the foreground mill dataset in feed, livestock, aquaculture, and food LCA models; usable as background dataset for compound feed supply |
| excluded_use | Not valid for pet food, lucerne meal, single feed materials, medicated feed, or farm-level feeding; not valid when required qualifiers or validation rules fail |
| required_metadata | Required qualifiers of section 3, upstream dataset identities, allocation declarations, temporal coverage, site and country |
| required_quality_disclosure | Mass closure result, guardrail checks of section 9, measurement and calibration evidence summary, provisional ranges actually used |
| update_trigger | Reformulation beyond declared classes, process-line change, energy carrier switch, or records older than five years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-2016-feed-supply-chains` | official_guidance | FAO LEAP Partnership (2016), Environmental performance of animal feeds supply chains: Guidelines for assessment, http://www.fao.org/partnerships/leap/publications/en/ (retrieved 2026-07-25) | method rule; process decomposition; boundary decisions; upstream dataset requirement |
| `ec-pefcr-feed-food-producing-animals` | standard | European Commission (2018, updated 2025), Product Environmental Footprint Category Rules (PEFCR) for feed for food-producing animals, https://www.fefac.eu/priorities/sustainability/pefcr-feed/ (retrieved 2026-07-25) | method rule; data collection rules; allocation decisions |
| `eu-reg-767-2009-feed-marketing` | standard | Regulation (EC) No 767/2009 on the placing on the market and use of feed, https://eur-lex.europa.eu/eli/reg/2009/767/oj (retrieved 2026-07-25) | official product specification; category boundary |
| `gfli-database` | dataset | Global Feed LCA Institute (GFLI) database, https://globalfeedlca.org/ (retrieved 2026-07-25) | upstream ingredient dataset requirement; quality requirement |
| `lpelc-feed-processing-energy` | extension_guidance | Livestock and Poultry Environmental Learning Community, Feed processing energy use summary citing Redecker and Thoben (2012): 40-60 kWh per tonne of feed, https://lpelc.org/wp-content/uploads/2026/02/Navales_Feed-processing.pdf (retrieved 2026-07-25) | range evidence for combined mill energy validation |
| `yemmak-feed-mill-energy-2021` | literature | Feed and Additive magazine (2021), Energy saving in compound feed mills: grinding 6-10 kWh/t, pelleting 4-40 kWh/t, https://www.feedandadditive.com/energy-saving-in-compound-feed-mills/ (retrieved 2026-07-25) | range evidence for grinding and pelleting electricity guardrails |
