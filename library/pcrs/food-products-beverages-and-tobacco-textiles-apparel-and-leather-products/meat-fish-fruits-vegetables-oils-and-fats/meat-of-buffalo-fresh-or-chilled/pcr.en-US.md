---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of buffalo, fresh or chilled

## 1. Scope and Applicability

This PCR applies to slaughterhouse-gate production of buffalo meat released fresh or chilled within CPC 3.0 subclass 21112. It covers receiving live buffalo, slaughter and dressing, evisceration and standard cutting, deboning where used, chilling and refrigerated holding, cleaning and disinfection attributable to those operations, conditional on-site wastewater treatment, final inspection, and conditional sale packaging.

The foreground begins with live buffalo accepted at the slaughterhouse gate. Buffalo farming and inbound transport are represented by upstream datasets rather than foreground operations. Retail, food preparation, consumption, and end of life are outside the foreground boundary.

Frozen buffalo meat, edible offal, non-edible offal, hides, blood, fat, bones, and waste are not part of the reference product. Each is recorded separately when produced. Every inventory card represents one atomic exchange, and conditional technologies or materials are recorded only when supported by facility records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-fresh-or-chilled |
| classification_refs | CPC 3.0: 21112, exact |
| covered_products | Buffalo meat released fresh or chilled as carcasses, sides, quarters, bone-in cuts, or boneless cuts within CPC 21112 |
| excluded_products | Frozen buffalo meat; edible and non-edible offal; meat of cattle or other species; farming; transport; retail; preparation; consumption; end of life |
| representative_product | A declared buffalo-meat cut or carcass presentation identified by species, cut, bone state, fat trim, net mass, fresh-or-chilled state, release temperature, packaging inclusion, facility, production period, and batch |
| production_route | Live-animal receiving; slaughter and dressing; evisceration, standard cutting and optional deboning; chilling and refrigerated holding; final inspection and conditional packaging; conditional on-site wastewater treatment |
| market_state | Net accepted buffalo meat at the slaughterhouse or meat-processing facility gate, fresh or chilled and not frozen |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide hygienically accepted buffalo meat in a declared carcass or cut presentation |
| How much | 1 kg net accepted product |
| How well | Declared buffalo species, cut, bone state, fat trim, fresh-or-chilled state, release temperature, and packaging inclusion; conforming to the producer's release specification |
| How long or cycle | One production batch at facility-gate release; no use-stage service duration |
| reference_flow_link | `accepted_reference_product_output` in `final_inspection_and_sale_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net accepted fresh or chilled buffalo meat |
| Reference product flow | Meat of buffalo, fresh or chilled `e96ba1cf-ce0b-4a35-ac5b-8cabebb56116` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Buffalo species; carcass or cut; bone-in or boneless; fat-trim specification; fresh or chilled state; release temperature; net mass basis; packaging inclusion; facility and country; production period; batch; allocation method; co-product and waste destinations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference amount is exactly 1 kg net accepted buffalo meat; exclude packaging, offal, frozen meat, rejects, free liquid, and transport containers. |
| `live_and_product_mass` | live animal, carcass, meat, co-products, wastes | Mass | kg | Use calibrated net mass and retain gross, tare, stock, moisture, and disposition records needed for reconciliation. |
| `electricity_energy` | each stage electricity row | Energy | kWh | Preserve stage-specific metering; convert only with documented factors and never merge electricity with steam or fuel. |
| `thermal_and_fuel_energy` | purchased steam and natural gas | Energy | MJ | Retain measured physical quantity and heating or enthalpy basis used to calculate MJ. |
| `liquid_and_refrigerant_mass` | water, wastewater, diesel, LPG, chemicals, ammonia, and emissions | Mass | kg | Use measured mass or documented density/concentration conversion; retain solution concentration and environmental compartment where relevant. |
| `temperature_state` | fresh-or-chilled meat | Temperature | °C | Retain measured entry and release temperature and the declared fresh-or-chilled state; this rule sets no unsupported default temperature limit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live buffalo accepted at the slaughterhouse gate with species, origin, supplier, receipt time, animal count, net live mass, and acceptance status recorded |
| starting_condition_role | Foreground input whose farming and inbound transport burdens are supplied by separately identified upstream datasets |
| product_classification_scope | CPC 3.0 subclass 21112 only: buffalo meat, fresh or chilled |
| recursive_input_rule | Any purchased fresh or chilled buffalo meat entering an in-scope packing or processing operation remains a separately measured product input with supplier, cut, state, mass, and upstream dataset disclosed; it is not silently merged with the facility's own output |
| upstream_dataset_requirement | Identify datasets for live-buffalo farming and inbound transport plus production of water, electricity, steam, hot water, fuels, chemicals, refrigerant, and packaging; preserve geography, technology, period, and allocation compatibility |
| disclosure | Declare facility, process configuration, included operations, buffalo species, product presentation, fresh-or-chilled state, release temperature, production period, packaging inclusion, wastewater route, refrigerant, fuels, co-product status, waste destinations, allocation, and all proxies |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_live_animal_gate` | foreground_start | The foreground starts with live buffalo accepted at the slaughterhouse gate plus materials, utilities, chemicals, refrigerant, and packaging crossing an included process boundary. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `boundary_upstream_exclusions` | farming_and_transport | Buffalo farming and inbound transport are outside the foreground boundary and require separately identified upstream datasets; retail, preparation, consumption, and end of life are downstream exclusions. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `boundary_product_state` | cpc_21112_scope | Only buffalo meat released fresh or chilled is the reference product; frozen meat and edible or non-edible offal are excluded from its mass and recorded separately when produced. | `unsd-cpc-3-0-21112`, `ec-jrc-sa-bref-jrc135916` |
| `boundary_conditional_operations` | conditional_technology | Purchased steam, hot water, each fuel, R717 ammonia, treatment chemicals, on-site wastewater treatment, and packaging are included only when the declared facility actually uses them. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `boundary_direct_releases` | air_and_water_emissions | Record direct air or water releases only from monitoring or a verified foreground balance; never infer a release solely because an input is present. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving_slaughter_and_dressing` | Animal receiving, slaughter, and carcass dressing | `required` | Required for a slaughterhouse dataset beginning with live buffalo received at the facility. | Foreground slaughter and primary dressing | per 1 kg accepted dressed buffalo carcass transferred |
| `evisceration_cutting_and_deboning` | Evisceration, standard cutting, and deboning | `required` | Required for converting dressed buffalo carcasses into declared meat cuts. | Foreground meat-cut preparation and co-product separation | per 1 kg accepted buffalo meat before chilling |
| `chilling_and_cold_storage` | Meat chilling and cold storage | `required` | Required to place accepted buffalo meat in the declared fresh or chilled market state. | Foreground temperature conditioning and refrigerated holding | per 1 kg accepted chilled buffalo meat transferred |
| `wastewater_treatment` | Slaughterhouse wastewater treatment | `conditional` | Include when slaughter, cutting, or defrost wastewater is treated within the foreground facility; otherwise record transfer to the actual external treatment dataset. | Foreground treatment of process-specific wastewater | per 1 kg treated slaughterhouse wastewater |
| `final_inspection_and_sale_packaging` | Final inspection and sale packaging | `required` | Final inspection is required; each packaging input is conditional on the declared sale format. | Foreground release, reference-product normalization, and sale packaging | per 1 kg net accepted reference product |

### Process: Animal receiving, slaughter, and carcass dressing (`animal_receiving_slaughter_and_dressing`)

#### Inputs

##### Product flows

###### Live buffalo received (`live_buffalo_input`)

Record Live buffalo as one separate exchange when always record the live animal crossing the slaughterhouse gate; farming and transport remain upstream. Its quantity is obtained as follows: Net live mass received from calibrated weighbridge or animal-receipt records.

- Selected flow: Live buffalo
- Flow property / unit: Mass / kg
- Amount rule: Net live mass received from calibrated weighbridge or animal-receipt records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_animal_receipts`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Process water for slaughter and dressing (`process_water_slaughter_input`)

Record Process water as one separate exchange when record only water crossing this process boundary. Its quantity is obtained as follows: Metered water attributed to lairage, slaughter, hide removal, carcass washing, and equipment rinsing.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered water attributed to lairage, slaughter, hide removal, carcass washing, and equipment rinsing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Electricity for slaughter and dressing (`electricity_slaughter_input`)

Record Electricity as one separate exchange when record electricity used by restraining, stunning, hoisting, conveyors, pumps, and ventilation. Its quantity is obtained as follows: Submetered electricity or calculated allocation from a documented slaughter-area meter.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or calculated allocation from a documented slaughter-area meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Purchased steam for slaughter and dressing (`purchased_steam_slaughter_input`)

Record Purchased steam as one separate exchange when record conditionally when purchased steam supplies process heat across the boundary. Its quantity is obtained as follows: Supplier-metered steam converted with documented pressure, condensate state, and enthalpy.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Supplier-metered steam converted with documented pressure, condensate state, and enthalpy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Purchased hot water for slaughter and dressing (`purchased_hot_water_slaughter_input`)

Record Hot water as one separate exchange when record conditionally when hot water is purchased and crosses the process boundary. Its quantity is obtained as follows: Metered supplied hot-water mass with supply and return temperatures retained.

- Selected flow: Hot water
- Flow property / unit: Mass / kg
- Amount rule: Metered supplied hot-water mass with supply and return temperatures retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Natural gas for on-site slaughter heat (`natural_gas_slaughter_input`)

Record Natural gas as one separate exchange when record conditionally when natural gas is combusted on site for in-scope heat. Its quantity is obtained as follows: Metered natural-gas energy attributed to the slaughter-area boiler or heater.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy attributed to the slaughter-area boiler or heater
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_fuel_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Diesel for slaughter backup generator (`diesel_backup_generator_input`)

Record Diesel fuel as one separate exchange when record conditionally when a diesel generator actually supplies the slaughter process. Its quantity is obtained as follows: Tank issue and return balance assigned to hours serving in-scope slaughter loads.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Tank issue and return balance assigned to hours serving in-scope slaughter loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_fuel_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Liquefied petroleum gas for slaughter handling (`lpg_forklift_input`)

Record Liquefied petroleum gas as one separate exchange when record conditionally when LPG-powered equipment handles carcasses or slaughter materials. Its quantity is obtained as follows: Cylinder or bulk-tank issue balance assigned to in-scope handling equipment.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Cylinder or bulk-tank issue balance assigned to in-scope handling equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_fuel_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed buffalo carcass transferred (`dressed_buffalo_carcass_output`)

Record Dressed buffalo carcass as one separate exchange when record the accepted dressed carcass as the single intermediate product transfer. Its quantity is obtained as follows: Measured accepted carcass mass transferred to evisceration and cutting.

- Selected flow: Dressed buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted carcass mass transferred to evisceration and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Recovered buffalo blood (`buffalo_blood_output`)

Record Buffalo blood as one separate exchange when record only blood collected as a separately managed co-product; otherwise classify the actual waste destination. Its quantity is obtained as follows: Measured mass collected separately for declared edible or technical use.

- Selected flow: Buffalo blood
- Flow property / unit: Mass / kg
- Amount rule: Measured mass collected separately for declared edible or technical use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Recovered buffalo hide (`buffalo_hide_output`)

Record Buffalo hide as one separate exchange when record hides leaving dressing as one separately managed co-product. Its quantity is obtained as follows: Measured hide mass transferred for further processing.

- Selected flow: Buffalo hide
- Flow property / unit: Mass / kg
- Amount rule: Measured hide mass transferred for further processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

###### Buffalo gut contents waste (`buffalo_gut_contents_waste_output`)

Record Buffalo gut contents waste as one separate exchange when record gut contents separately from tissue residues and wastewater. Its quantity is obtained as follows: Measured container mass or calculated mass difference sent to the documented treatment destination.

- Selected flow: Buffalo gut contents waste
- Flow property / unit: Mass / kg
- Amount rule: Measured container mass or calculated mass difference sent to the documented treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Non-edible buffalo slaughter tissue waste (`non_edible_slaughter_tissue_waste_output`)

Record Non-edible buffalo slaughter tissue waste as one separate exchange when record non-edible tissue separately from blood, hide, gut contents, and cutting waste. Its quantity is obtained as follows: Measured separately collected tissue mass sent to the documented destination.

- Selected flow: Non-edible buffalo slaughter tissue waste
- Flow property / unit: Mass / kg
- Amount rule: Measured separately collected tissue mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Slaughter and dressing wastewater (`slaughter_wastewater_output`)

Record Slaughterhouse wastewater as one separate exchange when record this wastewater transfer separately from cutting and chiller wastewater. Its quantity is obtained as follows: Metered wastewater mass transferred from slaughter and dressing to wastewater treatment.

- Selected flow: Slaughterhouse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered wastewater mass transferred from slaughter and dressing to wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Elementary flows

###### Fossil carbon dioxide from slaughter-area combustion (`carbon_dioxide_fossil_slaughter_output`)

Record Carbon dioxide, fossil as one separate exchange when record only direct fossil carbon dioxide released from on-site natural gas, diesel, or LPG combustion. Its quantity is obtained as follows: Fuel-specific carbon balance or monitored mass attributed to in-scope combustion.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: Fuel-specific carbon balance or monitored mass attributed to in-scope combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Nitrogen oxides from slaughter-area combustion (`nitrogen_oxides_slaughter_output`)

Record Nitrogen oxides as one separate exchange when record direct nitrogen oxides to air as one emission distinct from carbon dioxide. Its quantity is obtained as follows: Stack monitoring or fuel- and equipment-specific calculation attributed to in-scope combustion.

- Selected flow: Nitrogen oxides
- Flow property / unit: Mass / kg
- Amount rule: Stack monitoring or fuel- and equipment-specific calculation attributed to in-scope combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed buffalo carcass transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

### Process: Evisceration, standard cutting, and deboning (`evisceration_cutting_and_deboning`)

#### Inputs

##### Product flows

###### Dressed buffalo carcass received for cutting (`dressed_buffalo_carcass_input`)

Record Dressed buffalo carcass as one separate exchange when record the carcass entering evisceration and cutting as one intermediate input. Its quantity is obtained as follows: Measured carcass transfer mass received from dressing.

- Selected flow: Dressed buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured carcass transfer mass received from dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Process water for cutting and deboning (`process_water_cutting_input`)

Record Process water as one separate exchange when record water supplied to this cutting process separately from slaughter and sanitation water. Its quantity is obtained as follows: Metered water attributed to carcass rinsing, cutting, deboning, and equipment rinsing.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered water attributed to carcass rinsing, cutting, deboning, and equipment rinsing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Electricity for cutting and deboning (`electricity_cutting_input`)

Record Electricity as one separate exchange when record electricity for saws, knives, conveyors, extraction, and room services. Its quantity is obtained as follows: Submetered electricity or calculated allocation from documented cutting-room equipment loads.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or calculated allocation from documented cutting-room equipment loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Purchased hot water for cutting hygiene (`purchased_hot_water_cutting_input`)

Record Hot water as one separate exchange when record conditionally when purchased hot water crosses the cutting-process boundary. Its quantity is obtained as follows: Metered hot-water mass used within the cutting process with temperatures retained.

- Selected flow: Hot water
- Flow property / unit: Mass / kg
- Amount rule: Metered hot-water mass used within the cutting process with temperatures retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Sodium hydroxide cleaner for cutting equipment (`sodium_hydroxide_cleaner_cutting_input`)

Record Sodium hydroxide solution as one separate exchange when record conditionally when a sodium-hydroxide cleaner is used in this process. Its quantity is obtained as follows: Chemical issue mass corrected for returned stock and solution concentration.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Chemical issue mass corrected for returned stock and solution concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Peracetic acid disinfectant for cutting equipment (`peracetic_acid_disinfectant_cutting_input`)

Record Peracetic acid solution as one separate exchange when record conditionally when peracetic acid is the documented disinfectant. Its quantity is obtained as follows: Chemical issue mass corrected for returned stock and active concentration.

- Selected flow: Peracetic acid solution
- Flow property / unit: Mass / kg
- Amount rule: Chemical issue mass corrected for returned stock and active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh buffalo meat before chilling (`fresh_buffalo_meat_before_chilling_output`)

Record Fresh buffalo meat before chilling as one separate exchange when record the declared bone-in or boneless meat cuts before chilling as one intermediate output. Its quantity is obtained as follows: Measured accepted meat mass transferred to chilling.

- Selected flow: Fresh buffalo meat before chilling
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted meat mass transferred to chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Edible buffalo liver (`edible_buffalo_liver_output`)

Record Buffalo liver, edible as one separate exchange when record edible liver separately as a co-product and never include it in the CPC 21112 reference meat output. Its quantity is obtained as follows: Measured liver mass separately accepted for food use.

- Selected flow: Buffalo liver, edible
- Flow property / unit: Mass / kg
- Amount rule: Measured liver mass separately accepted for food use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Edible buffalo heart (`edible_buffalo_heart_output`)

Record Buffalo heart, edible as one separate exchange when record edible heart separately as a co-product and exclude it from the reference meat mass. Its quantity is obtained as follows: Measured heart mass separately accepted for food use.

- Selected flow: Buffalo heart, edible
- Flow property / unit: Mass / kg
- Amount rule: Measured heart mass separately accepted for food use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Separated buffalo fat (`buffalo_fat_output`)

Record Buffalo fat as one separate exchange when record separated fat as one co-product when it has a documented further use. Its quantity is obtained as follows: Measured separately collected fat mass transferred for food or technical processing.

- Selected flow: Buffalo fat
- Flow property / unit: Mass / kg
- Amount rule: Measured separately collected fat mass transferred for food or technical processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Separated buffalo bones (`buffalo_bones_output`)

Record Buffalo bones as one separate exchange when record bones as one separately managed co-product when a further-use destination is documented. Its quantity is obtained as follows: Measured separately collected bone mass transferred for further processing.

- Selected flow: Buffalo bones
- Flow property / unit: Mass / kg
- Amount rule: Measured separately collected bone mass transferred for further processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_output_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

###### Non-edible buffalo cutting tissue waste (`non_edible_buffalo_tissue_cutting_waste_output`)

Record Non-edible buffalo cutting tissue waste as one separate exchange when record this cutting residue separately from edible organs, fat, bones, and rejected meat. Its quantity is obtained as follows: Measured tissue residue mass sent to the documented treatment destination.

- Selected flow: Non-edible buffalo cutting tissue waste
- Flow property / unit: Mass / kg
- Amount rule: Measured tissue residue mass sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Cutting and deboning wastewater (`cutting_wastewater_output`)

Record Meat cutting wastewater as one separate exchange when record cutting wastewater separately from slaughter and chiller wastewater. Its quantity is obtained as follows: Metered wastewater mass transferred from cutting and deboning to treatment.

- Selected flow: Meat cutting wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered wastewater mass transferred from cutting and deboning to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Rejected buffalo meat from cutting (`rejected_buffalo_meat_cutting_waste_output`)

Record Rejected buffalo meat waste as one separate exchange when record rejected meat separately from routine trim and non-edible tissue. Its quantity is obtained as follows: Measured rejected meat mass by disposition code.

- Selected flow: Rejected buffalo meat waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected meat mass by disposition code
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted buffalo meat before chilling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Elementary flows

### Process: Meat chilling and cold storage (`chilling_and_cold_storage`)

#### Inputs

##### Product flows

###### Fresh buffalo meat entering chilling (`fresh_buffalo_meat_before_chilling_input`)

Record Fresh buffalo meat before chilling as one separate exchange when record the meat transfer entering chilling as one product input. Its quantity is obtained as follows: Measured accepted transfer mass entering the chilling system.

- Selected flow: Fresh buffalo meat before chilling
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass entering the chilling system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_product_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Electricity for chilling and cold storage (`electricity_chilling_input`)

Record Electricity as one separate exchange when record refrigeration electricity separately from slaughter, cutting, wastewater, and packaging electricity. Its quantity is obtained as follows: Submetered electricity or calculated allocation from compressor, fan, pump, and cold-room loads.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or calculated allocation from compressor, fan, pump, and cold-room loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Ammonia refrigerant replenishment (`ammonia_refrigerant_replenishment_input`)

Record Ammonia as one separate exchange when record conditionally only when the in-scope refrigeration system uses R717 ammonia and receives a recharge. Its quantity is obtained as follows: Measured maintenance recharge assigned to the refrigeration system and reporting period.

- Selected flow: Ammonia
- Flow property / unit: Mass / kg
- Amount rule: Measured maintenance recharge assigned to the refrigeration system and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Process water for chilling and defrosting (`process_water_chilling_input`)

Record Process water as one separate exchange when record only water supplied to chilling and cold-storage equipment. Its quantity is obtained as follows: Metered water attributed to in-scope chilling, glazing if applicable, and defrosting.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered water attributed to in-scope chilling, glazing if applicable, and defrosting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_utility_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted chilled buffalo meat transferred (`chilled_buffalo_meat_output`)

Record Chilled buffalo meat as one separate exchange when record only accepted buffalo meat in the declared fresh or chilled state; frozen meat is excluded. Its quantity is obtained as follows: Measured net accepted meat mass released from chilling to final inspection or packaging.

- Selected flow: Chilled buffalo meat
- Flow property / unit: Mass / kg
- Amount rule: Measured net accepted meat mass released from chilling to final inspection or packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_product_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

###### Chiller defrost wastewater (`chiller_defrost_wastewater_output`)

Record Chiller defrost wastewater as one separate exchange when record defrost wastewater separately from slaughter and cutting wastewater. Its quantity is obtained as follows: Metered defrost wastewater mass transferred to treatment.

- Selected flow: Chiller defrost wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered defrost wastewater mass transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Spoiled buffalo meat from cold storage (`spoiled_buffalo_meat_cold_storage_waste_output`)

Record Spoiled buffalo meat waste as one separate exchange when record cold-storage spoilage separately from cutting rejects and packaging rejects. Its quantity is obtained as follows: Measured spoiled or temperature-deviated meat mass by disposition record.

- Selected flow: Spoiled buffalo meat waste
- Flow property / unit: Mass / kg
- Amount rule: Measured spoiled or temperature-deviated meat mass by disposition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Elementary flows

###### Ammonia refrigerant emitted to air (`ammonia_refrigerant_to_air_output`)

Record Ammonia as one separate exchange when record direct ammonia release only when monitoring or a verified balance demonstrates a loss; input presence alone is insufficient. Its quantity is obtained as follows: Leak monitoring or verified refrigerant inventory balance assigned to the reporting period.

- Selected flow: Ammonia
- Flow property / unit: Mass / kg
- Amount rule: Leak monitoring or verified refrigerant inventory balance assigned to the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted chilled buffalo meat transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

### Process: Slaughterhouse wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity for wastewater treatment (`electricity_wastewater_treatment_input`)

Record Electricity as one separate exchange when record wastewater-treatment electricity separately from production-stage electricity. Its quantity is obtained as follows: Submetered electricity or calculated allocation from pumps, aeration, mixing, and dewatering loads.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or calculated allocation from pumps, aeration, mixing, and dewatering loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Ferric chloride for wastewater treatment (`ferric_chloride_wastewater_input`)

Record Ferric chloride solution as one separate exchange when record conditionally when ferric chloride is actually dosed for coagulation or phosphorus removal. Its quantity is obtained as follows: Chemical issue mass corrected for returned stock and active concentration.

- Selected flow: Ferric chloride solution
- Flow property / unit: Mass / kg
- Amount rule: Chemical issue mass corrected for returned stock and active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Sodium hydroxide for wastewater pH control (`sodium_hydroxide_wastewater_input`)

Record Sodium hydroxide solution as one separate exchange when record conditionally when sodium hydroxide is actually dosed for pH control. Its quantity is obtained as follows: Chemical issue mass corrected for returned stock and solution concentration.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Chemical issue mass corrected for returned stock and solution concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

###### Slaughter and dressing wastewater entering treatment (`slaughter_wastewater_treatment_input`)

Record Slaughterhouse wastewater as one separate exchange when record the waste transfer from slaughter and dressing separately. Its quantity is obtained as follows: Metered slaughter wastewater mass entering on-site treatment.

- Selected flow: Slaughterhouse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered slaughter wastewater mass entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Cutting and deboning wastewater entering treatment (`cutting_wastewater_treatment_input`)

Record Meat cutting wastewater as one separate exchange when record the waste transfer from cutting and deboning separately. Its quantity is obtained as follows: Metered cutting wastewater mass entering on-site treatment.

- Selected flow: Meat cutting wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered cutting wastewater mass entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Chiller defrost wastewater entering treatment (`chiller_defrost_wastewater_treatment_input`)

Record Chiller defrost wastewater as one separate exchange when record the defrost waste transfer separately from slaughter and cutting wastewater. Its quantity is obtained as follows: Metered chiller defrost wastewater mass entering on-site treatment.

- Selected flow: Chiller defrost wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered chiller defrost wastewater mass entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Slaughterhouse wastewater-treatment sludge (`wastewater_treatment_sludge_output`)

Record Slaughterhouse wastewater-treatment sludge as one separate exchange when record sludge separately from screenings and liquid effluent. Its quantity is obtained as follows: Measured dewatered sludge mass with dry-matter content and destination retained.

- Selected flow: Slaughterhouse wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured dewatered sludge mass with dry-matter content and destination retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_output_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Slaughterhouse wastewater screenings (`wastewater_screenings_output`)

Record Slaughterhouse wastewater screenings as one separate exchange when record screenings as one solid waste distinct from sludge. Its quantity is obtained as follows: Measured screenings mass sent to the documented treatment destination.

- Selected flow: Slaughterhouse wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Measured screenings mass sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_output_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Elementary flows

###### Chemical oxygen demand discharged to water (`chemical_oxygen_demand_to_water_output`)

Record Chemical oxygen demand as one separate exchange when record COD to water as one monitored emission when treated effluent is directly discharged. Its quantity is obtained as follows: Effluent concentration multiplied by compliant discharge volume for the matching period.

- Selected flow: Chemical oxygen demand
- Flow property / unit: Mass / kg
- Amount rule: Effluent concentration multiplied by compliant discharge volume for the matching period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Total nitrogen discharged to water (`total_nitrogen_to_water_output`)

Record Nitrogen, total as one separate exchange when record total nitrogen to water separately from COD and phosphorus. Its quantity is obtained as follows: Effluent total-nitrogen concentration multiplied by compliant discharge volume for the matching period.

- Selected flow: Nitrogen, total
- Flow property / unit: Mass / kg
- Amount rule: Effluent total-nitrogen concentration multiplied by compliant discharge volume for the matching period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Total phosphorus discharged to water (`total_phosphorus_to_water_output`)

Record Phosphorus, total as one separate exchange when record total phosphorus to water separately from COD and nitrogen. Its quantity is obtained as follows: Effluent total-phosphorus concentration multiplied by compliant discharge volume for the matching period.

- Selected flow: Phosphorus, total
- Flow property / unit: Mass / kg
- Amount rule: Effluent total-phosphorus concentration multiplied by compliant discharge volume for the matching period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg treated slaughterhouse wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

### Process: Final inspection and sale packaging (`final_inspection_and_sale_packaging`)

#### Inputs

##### Product flows

###### Chilled buffalo meat entering final inspection (`chilled_buffalo_meat_packaging_input`)

Record Chilled buffalo meat as one separate exchange when record the chilled meat entering final inspection as one product input. Its quantity is obtained as follows: Measured accepted transfer mass entering final inspection.

- Selected flow: Chilled buffalo meat
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Electricity for final inspection and packaging (`electricity_packaging_input`)

Record Electricity as one separate exchange when record this electricity separately from chilling and other production-stage electricity. Its quantity is obtained as follows: Submetered electricity or calculated allocation from inspection, sealing, labelling, and packing equipment.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or calculated allocation from inspection, sealing, labelling, and packing equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Polyethylene food-contact film (`polyethylene_film_packaging_input`)

Record Polyethylene packaging film as one separate exchange when record conditionally when polyethylene film is included in the declared sale format. Its quantity is obtained as follows: Net film mass issued to conforming sale packs.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Net film mass issued to conforming sale packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Corrugated fibreboard meat carton (`corrugated_carton_packaging_input`)

Record Corrugated fibreboard carton as one separate exchange when record conditionally when a corrugated carton is included in the declared sale format. Its quantity is obtained as follows: Net carton mass issued to conforming sale packs.

- Selected flow: Corrugated fibreboard carton
- Flow property / unit: Mass / kg
- Amount rule: Net carton mass issued to conforming sale packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Paper product label (`paper_label_packaging_input`)

Record Paper product label as one separate exchange when record conditionally when a paper label is attached to the declared sale pack. Its quantity is obtained as follows: Net paper-label mass issued to conforming sale packs.

- Selected flow: Paper product label
- Flow property / unit: Mass / kg
- Amount rule: Net paper-label mass issued to conforming sale packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted meat of buffalo, fresh or chilled (`accepted_reference_product_output`)

Record Meat of buffalo, fresh or chilled as one separate exchange when record exactly the CPC 21112 product released at the facility gate; exclude frozen meat, offal, packaging mass, and rejected product. Its quantity is obtained as follows: Fixed reference amount of 1 kg net accepted fresh or chilled buffalo meat.

- Selected flow: Meat of buffalo, fresh or chilled `e96ba1cf-ce0b-4a35-ac5b-8cabebb56116`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference amount of 1 kg net accepted fresh or chilled buffalo meat
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `unsd-cpc-3-0-21112`

##### Waste flows

###### Polyethylene packaging-film scrap (`polyethylene_film_scrap_output`)

Record Polyethylene packaging-film scrap as one separate exchange when record packaging-film scrap separately from carton and label scrap. Its quantity is obtained as follows: Measured film scrap mass by documented recovery or disposal destination.

- Selected flow: Polyethylene packaging-film scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured film scrap mass by documented recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Corrugated fibreboard carton scrap (`corrugated_carton_scrap_output`)

Record Corrugated fibreboard carton scrap as one separate exchange when record carton scrap separately from film and label scrap. Its quantity is obtained as follows: Measured carton scrap mass by documented recovery or disposal destination.

- Selected flow: Corrugated fibreboard carton scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured carton scrap mass by documented recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Paper product-label scrap (`paper_label_scrap_output`)

Record Paper product-label scrap as one separate exchange when record label scrap separately from film and carton scrap. Its quantity is obtained as follows: Measured label scrap mass by documented recovery or disposal destination.

- Selected flow: Paper product-label scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured label scrap mass by documented recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### Rejected buffalo meat at final inspection (`rejected_packaged_buffalo_meat_waste_output`)

Record Rejected buffalo meat waste as one separate exchange when record final-inspection rejects separately from cutting rejects and cold-storage spoilage. Its quantity is obtained as follows: Measured rejected meat mass by final-inspection disposition code.

- Selected flow: Rejected buffalo meat waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected meat mass by final-inspection disposition code
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separately_metered_processes | First avoid allocation by subdividing slaughter, cutting, chilling, wastewater treatment, and packaging when their inputs and outputs are separately measured. | `eu-recommendation-2021-2279` |
| `allocation_mass_balance` | all_material_outputs | Reconcile live mass and each process transfer against reference meat, blood, hide, liver, heart, fat, bones, wastes, stock change, moisture change, and measured losses before allocating burdens. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `allocation_co_products` | blood_hide_organs_fat_bones | When subdivision cannot isolate burdens, apply and disclose a product-specific physical causal relation; if no defensible physical relation exists, use documented economic allocation with matching-period prices and sensitivity disclosure. | `eu-recommendation-2021-2279` |
| `allocation_waste_status` | waste_and_recovered_outputs | Classify each output as product, waste, or emission from its actual legal and operational destination; revenue or avoided treatment alone does not justify silently changing flow type. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `allocation_shared_utilities` | shared_meters | Allocate shared utilities using a documented causal driver such as equipment submetering, operating time and rated load, treated volume, or refrigerated mass-time; disclose residual unallocated use. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_animal_receipts` | `animal_receiving_slaughter_and_dressing` | live buffalo | weighbridge ticket and animal receipt | batch id; species; animal count; origin; supplier; arrival time; gross, tare, and net mass; calibration id | Reconcile calibrated scale tickets to animal-receipt and acceptance records | kg | each received lot | complete reporting period | receiving area | Sum accepted net live mass by lot; retain rejected or dead-on-arrival animals separately | scale calibration; signed receipt; animal identity and health acceptance | undefined |
| `cp_slaughter_utility_records` | `animal_receiving_slaughter_and_dressing` | water, electricity, steam, and hot water | meters, supplier invoices, and operating logs | meter id; opening and closing readings; timestamps; pressure; temperatures; condensate state; production hours | Use dedicated meters where available; otherwise calculate from documented shared-meter drivers | kg; kWh; MJ | daily or batch | representative full production period | slaughter and dressing area | Subtract non-production use and normalize to accepted carcass transfer mass | meter calibration; invoices; boundary diagram; allocation calculation | undefined |
| `cp_slaughter_fuel_records` | `animal_receiving_slaughter_and_dressing` | natural gas, diesel, and LPG | fuel meters, tank balance, cylinder issues, and equipment logs | fuel identity; opening stock; receipts; issues; returns; closing stock; heating value; equipment hours | Reconcile fuel inventory and assign only consumption serving in-scope equipment | kg; MJ | daily or delivery cycle | complete reporting period | on-site slaughter heat and handling equipment | Calculate net consumption and normalize to accepted carcass transfer mass | fuel invoice; tank reconciliation; equipment log; heating-value record | undefined |
| `cp_slaughter_output_mass_balance` | `animal_receiving_slaughter_and_dressing` | carcass, blood, and hide | calibrated scales and transfer records | batch id; output identity; gross; tare; net mass; acceptance status; destination; timestamp | Weigh each separately managed output and reconcile with received live mass | kg | each batch | complete reporting period | slaughter and dressing line | Sum accepted output by identity; retain stock and moisture changes separately | scale calibration; transfer ticket; destination record; mass-balance review | undefined |
| `cp_slaughter_waste_records` | `animal_receiving_slaughter_and_dressing` | gut contents, tissue waste, and slaughter wastewater | waste scales, containers, flow meters, and consignment records | waste identity; gross; tare; net mass; meter reading; moisture; destination; treatment code | Measure each waste stream separately and reconcile internal wastewater transfer | kg | each batch or removal | complete reporting period | slaughter and dressing line | Sum by row identity and destination; do not combine solid waste with wastewater | scale or meter calibration; consignment record; treatment acceptance | undefined |
| `cp_combustion_emissions` | `animal_receiving_slaughter_and_dressing` | fossil carbon dioxide and nitrogen oxides | fuel balance, stack monitoring, and equipment factors | fuel consumed; carbon content; heating value; monitored concentration; gas flow; operating hours | Use matched-period monitoring or fuel- and equipment-specific calculations | kg | reporting period | same period as fuel records | on-site combustion equipment | Attribute direct emissions using documented equipment service and normalize to process output | monitoring QA; fuel certificate; calculation workbook; equipment log | undefined |
| `cp_cutting_input_records` | `evisceration_cutting_and_deboning` | dressed carcass | transfer scale record | batch id; gross; tare; net mass; temperature; acceptance status; transfer time | Reconcile received carcass transfer to the upstream accepted output | kg | each batch | complete reporting period | cutting and deboning line | Sum accepted incoming carcass mass by batch | scale calibration; matched transfer record; temperature record | undefined |
| `cp_cutting_utility_records` | `evisceration_cutting_and_deboning` | water, electricity, and hot water | meters and operating logs | meter id; readings; timestamps; temperatures; equipment hours; production batch | Use dedicated meters or documented equipment-load allocation | kg; kWh | daily or batch | representative full production period | cutting and deboning rooms | Subtract idle and unrelated use; normalize to accepted meat before chilling | meter calibration; load study; boundary diagram; production log | undefined |
| `cp_cutting_chemical_records` | `evisceration_cutting_and_deboning` | sodium hydroxide and peracetic acid | chemical issue, return, and concentration records | chemical identity; formulation; active concentration; opening stock; issues; returns; closing stock; batch | Reconcile each chemical separately and calculate solution or active mass consistently | kg | daily or sanitation cycle | complete reporting period | cutting equipment sanitation attributable to the process | Calculate net issued mass by chemical and normalize to accepted meat before chilling | supplier specification; stock ledger; dosing record; concentration check | undefined |
| `cp_cutting_output_mass_balance` | `evisceration_cutting_and_deboning` | meat, liver, heart, fat, and bones | calibrated scales and transfer records | batch id; output identity; net mass; edible status; destination; timestamp | Weigh each accepted output separately and reconcile with incoming carcass mass | kg | each batch | complete reporting period | cutting and deboning line | Sum by output identity; retain stock, moisture, and rework separately | scale calibration; disposition record; mass-balance review | undefined |
| `cp_cutting_waste_records` | `evisceration_cutting_and_deboning` | tissue waste, cutting wastewater, and rejected meat | waste scales, flow meters, and disposition records | row identity; mass or meter reading; rejection reason; contamination; destination; timestamp | Measure each waste separately and link it to its treatment or disposition | kg | each batch or removal | complete reporting period | cutting and deboning line | Sum by row identity and destination; reconcile with process mass balance | scale or meter calibration; waste consignment; rejection log | undefined |
| `cp_chilling_product_records` | `chilling_and_cold_storage` | fresh meat input and chilled meat output | transfer scales, temperature logs, and release records | batch id; cut; bone state; net mass; entry and release temperatures; timestamps; acceptance | Match incoming and released mass to continuous temperature records | kg | each batch | complete reporting period | chilling and cold rooms | Account for stock change, drip loss, rejected mass, and transfer timing | scale calibration; temperature calibration; release authorization; stock record | undefined |
| `cp_chilling_utility_records` | `chilling_and_cold_storage` | electricity and water | submeters, equipment logs, and water meters | meter id; readings; timestamps; compressor and fan hours; room temperatures; water use | Use dedicated refrigeration meters or documented load allocation | kWh; kg | daily | representative seasonal production period | chilling and cold-storage system | Allocate by measured equipment load and refrigerated mass-time; normalize to released chilled meat | meter calibration; load study; temperature log; allocation workbook | undefined |
| `cp_refrigerant_records` | `chilling_and_cold_storage` | R717 ammonia input and air release | refrigerant inventory and maintenance records | refrigerant identity; opening charge; additions; recoveries; closing charge; service event; leak test | Reconcile system-specific inventory; calculate release only from verified loss or monitoring | kg | each service event and annual balance | complete reporting period | in-scope refrigeration system | Assign verified recharge and loss to released chilled meat; disclose balance residual | maintenance certificate; cylinder weights; leak test; inventory reconciliation | undefined |
| `cp_chilling_waste_records` | `chilling_and_cold_storage` | defrost wastewater and spoiled meat | water meter, waste scale, and disposition records | row identity; mass; timestamp; rejection cause; destination; batch | Measure each waste separately and link it to treatment | kg | each defrost event or batch | complete reporting period | chilling and cold-storage area | Sum by row identity; normalize to released chilled meat | meter or scale calibration; disposition record; temperature-deviation report | undefined |
| `cp_wastewater_influent_records` | `wastewater_treatment` | process-specific wastewater inputs | source flow meters and transfer logs | source process; meter id; volume or mass; temperature; sampling time; solids or fat indicator | Measure each source stream separately before mixing | kg | daily | complete reporting period | on-site wastewater-treatment inlet | Sum by source process; retain unmetered inflow and stormwater separately | meter calibration; source map; sampling record | undefined |
| `cp_wastewater_treatment_input_records` | `wastewater_treatment` | electricity and treatment chemicals | submeters, stock ledgers, and dosing logs | meter readings; chemical identity; concentration; issues; returns; closing stock; dosing time | Measure electricity and reconcile each chemical separately | kWh; kg | daily | complete reporting period | on-site wastewater-treatment plant | Normalize inputs to treated wastewater mass; disclose bypasses | meter calibration; supplier specification; dosing record; stock reconciliation | undefined |
| `cp_wastewater_treatment_output_records` | `wastewater_treatment` | sludge and screenings | scales and waste consignment records | waste identity; gross; tare; net mass; dry matter; destination; removal time | Weigh sludge and screenings separately and retain destination evidence | kg | each removal | complete reporting period | on-site wastewater-treatment plant | Sum by waste identity and destination; normalize to treated wastewater mass | scale calibration; laboratory dry matter; consignment record | undefined |
| `cp_effluent_monitoring` | `wastewater_treatment` | COD, total nitrogen, and total phosphorus to water | compliant sampling and discharge-flow records | parameter; method; sample time; concentration; discharge volume; discharge point; QA result | Multiply matched-period compliant concentration by discharge volume for each parameter | kg | permit or monitoring frequency | complete reporting period | declared direct discharge point | Calculate each pollutant separately; treat non-detects and missing samples transparently | laboratory accreditation; chain of custody; flow-meter calibration; permit report | undefined |
| `cp_final_product_records` | `final_inspection_and_sale_packaging` | chilled meat input and accepted reference output | transfer scales, inspection, release, and product specifications | batch id; species; cut; bone state; fat trim; net mass; temperature; acceptance; packaging inclusion | Weigh net product and verify CPC 21112 state before release | kg | each batch | complete reporting period | final inspection and dispatch gate | Exclude packaging, offal, frozen meat, and rejects; normalize accepted output to exactly 1 kg | scale calibration; product specification; release authorization; batch traceability | undefined |
| `cp_packaging_input_records` | `final_inspection_and_sale_packaging` | electricity and each packaging component | submeter, packaging issue, return, and specification records | meter readings; packaging identity; grade; opening stock; issues; returns; closing stock; batch | Reconcile electricity and each packaging material separately | kWh; kg | daily or batch | complete reporting period | final inspection and packing area | Calculate net input by row identity and normalize to 1 kg net accepted product | meter calibration; packaging specification; stock ledger; batch packing record | undefined |
| `cp_packaging_waste_records` | `final_inspection_and_sale_packaging` | packaging scrap and rejected meat | waste scales and disposition records | row identity; gross; tare; net mass; rejection reason; contamination; destination; batch | Weigh each scrap or reject separately and retain treatment destination | kg | each batch or removal | complete reporting period | final inspection and packing area | Sum by row identity and destination; normalize to 1 kg net accepted product | scale calibration; rejection log; waste consignment | undefined |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_issue` | materials_chemicals_packaging | net input = opening stock + receipts - returns - closing stock - documented transfers outside the boundary | stock ledger; receipts; returns; closing stock; boundary transfers | net row-specific foreground input | `eu-recommendation-2021-2279` |
| `calc_reference_normalization` | all_process_inventory | normalized amount = attributed row amount / net accepted reference-product mass | attributed row amount; net accepted CPC 21112 mass | amount per 1 kg net accepted reference product | `eu-recommendation-2021-2279` |
| `calc_process_normalization` | intermediate_process_inventory | process-normalized amount = attributed row amount / accepted quantitative-reference output | attributed row amount; accepted process output | amount per declared process output | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_mass_balance` | slaughter_cutting_chilling | mass-balance residual = inputs + opening stock - products - co-products - wastes - closing stock - documented moisture change | all measured input, transfer, output, waste, stock, and moisture records | process residual and reconciliation status | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_shared_utility` | shared_utility_meters | allocated utility = shared-meter net use × documented causal driver share | meter readings; equipment load or operating time; throughput or mass-time | row-specific allocated utility | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_effluent_emission` | direct_water_emissions | emitted mass = matched-period compliant concentration × direct-discharge volume with unit conversion | laboratory concentration; discharge flow; time coverage; unit conversion | kg of one pollutant released to water | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_refrigerant_loss` | ammonia_refrigerant | verified loss = opening charge + additions - recoveries - closing charge - documented transfers; use monitoring when superior | system inventory; maintenance additions; recoveries; charge records; leak monitoring | kg ammonia released to air, or zero when no verified loss | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain buffalo species, cut, bone state, fat trim, fresh-or-chilled state, net mass, release temperature, facility, period, and batch linkage. | product specification; release record; traceability record; calibrated scale and thermometer |
| `dq_primary_data` | foreground processes | Use company-specific records for material, utility, chemical, refrigerant, product, co-product, waste, and direct-emission rows; disclose every proxy and unmeasured share. | meter and scale records; stock ledgers; supplier invoices; monitoring reports; proxy register |
| `dq_temporal_completeness` | reporting period | Cover a representative complete production period including seasonal refrigeration load, shutdowns, rejected batches, maintenance, and inventory change. | production calendar; downtime log; maintenance log; stock reconciliation |
| `dq_mass_balance` | material flows | Reconcile each process and the overall facility without hiding residuals in a combined co-product or waste row. | signed mass-balance workbook; scale calibration; stock and moisture records |
| `dq_measurement_quality` | meters_and_laboratories | Retain calibration status, measurement method, detection limits, sampling representativeness, and laboratory accreditation where applicable. | calibration certificates; sampling plan; laboratory QA; chain of custody |
| `dq_allocation_transparency` | shared_processes_and_co_products | Disclose subdivision attempts, allocation drivers, quantities, prices if used, period matching, allocation shares, and sensitivity results. | allocation workbook; meter map; production and price records; sensitivity calculation |
| `dq_uuid_gaps` | unresolved_tiangong_flows | Keep non-reference UUIDs blank until dual verification and preserve row-specific unresolved-flow metadata. | manifest unresolved_flow_references; reviewer resolution record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Require exactly one 1 kg net accepted CPC 21112 reference output using the verified product-flow UUID, Mass property, Units of mass group, and kg; reject frozen meat, offal, packaging mass, and rejected meat in the reference amount. | `unsd-cpc-3-0-21112` |
| `validate_scope_and_traceability` | buffalo_product | Require buffalo species, facility, production period, cut, bone state, fat trim, fresh-or-chilled state, release temperature, and batch linkage. | `unsd-cpc-3-0-21112`, `ec-jrc-sa-bref-jrc135916` |
| `validate_atomic_flows` | process_inventory | Reject collection labels and combined exchanges; every live-animal input, water stream, stage electricity, steam, hot water, fuel, refrigerant, chemical, packaging material, co-product, waste, and emission must remain separate. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_mass_balance` | slaughter_and_cutting | Require stepwise reconciliation of received live mass, carcass transfers, meat, each co-product, each waste, stock change, moisture change, and rejected product. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_conditional_inputs` | conditional_routes | Require evidence of actual use before recording purchased steam, purchased hot water, natural gas, diesel, LPG, R717 ammonia, ferric chloride, sodium hydroxide, peracetic acid, or sale packaging. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_wastewater_and_releases` | wastewater | Require process-specific wastewater transfers, matched-period treatment records, and monitored discharge concentration and volume for each water emission. | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_uuid_resolution` | tiangong_references | Reject any non-reference UUID lacking both identity confirmation and a public state-100 direct read; unresolved identities remain blank with row-specific manifest metadata. |  |
| `validate_translation_alignment` | bilingual_pcr | Require identical ordered process_id, row_id, Selected flow, controlled-token, source-id, boundary-rule, allocation-rule, and validation-rule sequences in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground slaughter, cutting, chilling, and release dataset for CPC 21112 buffalo meat, fresh or chilled |
| downstream_use | `secondary_dataset`; `background_dataset` only when species, product presentation, geography, facility technology, period, allocation, refrigerated state, and unresolved-flow limitations match the downstream study |
| allowed_use | Slaughterhouse-gate LCI, supplier-specific data exchange, product-footprint modelling, and downstream process or lifecycle-model projection with all qualifiers retained |
| excluded_use | Buffalo farming or transport; frozen buffalo meat; edible or non-edible offal as reference product; retail, preparation, consumption, or end-of-life claims; unqualified comparison across different cuts or allocation methods; automatic filling of unresolved UUIDs or quantities |
| required_metadata | PCR id and version; buffalo species; facility and country; production period; batch; carcass or cut; bone and fat-trim state; fresh-or-chilled state; release temperature; net mass; process configuration; meters and scales; cleaning chemicals; refrigerant; fuels; packaging; wastewater route; co-product and waste destinations; allocation; source and proxy list |
| required_quality_disclosure | Company-specific data coverage; temporal, geographic, and technological representativeness; meter, scale, thermometer, and laboratory QA; mass-balance residuals; allocation shares and sensitivity; unmeasured flows; conditional operations; direct-emission basis; upstream substitutions; unresolved Tiangong identities; data gaps and uncertainty |
| update_trigger | Change in CPC scope, reference-flow identity, buffalo species, product cut or state, facility, slaughter or cutting technology, refrigeration system, fuel, chemical, packaging, wastewater treatment, co-product destination, allocation, or material foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21112` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21112, official structure entry and CPC_Ver_3.0_Structure_30Jun2025.csv. https://unstats.un.org/unsd/classifications/Econ | Exact fresh-or-chilled buffalo-meat scope and exclusion of frozen meat and offal from the reference product |
| `ec-jrc-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, DOI 10.2760/18199. https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Animal receiving, slaughter, dressing, standard cutting, chilling, sanitation, utilities, wastewater, emissions, blood, hide, fat, bone, organ, waste, monitoring, and process-data structure |
| `eu-recommendation-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific company data, complete LCI, allocation, completeness, transparency, data quality, calculation, and verification rules |
