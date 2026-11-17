---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.water-distribution-except-through-mains-on-own-account
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Own-account potable-water distribution by road tanker

## 1. Scope and Applicability

Foreground service methodology for dedicated contracted diesel potable-water road tankers, retaining original PCR identity and narrower CPC69230 route. Inventory records one measurable object with one primary property/unit per exchange, including specified complete equipment and defined services where actually supplied. Foreground scope and allocation are PCR choices; emergency guidance supplies qualitative operating/hygiene evidence, not numeric defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.water-distribution-except-through-mains-on-own-account |
| classification_refs | CPC 3.0:69230; narrower: potable-water tanker route only |
| covered_products | Own-account distribution service for bulk potable water by contracted dedicated road tanker, from supplier filling coupling to accepted unloading into recipient storage |
| excluded_products | Water commodity production and treatment; mains; bottled water; irrigation; broker-only intermediation; non-potable water; ship/rail/cart transport; downstream storage/dispensing |
| representative_product | Dedicated potable-water tanker delivery operated on the distributor own account |
| production_route | Operated dedicated contracted diesel tanker plus specified supplied loading/metering skid and reinforced EPDM hose; sodium-carbonate washing and sodium-hypochlorite disinfection when used; closed wastewater collection |
| market_state | Liquid potable water at actual delivery temperature/pressure, meeting declared receiving specification; the marketed reference is distribution service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide own-account bulk potable-water road-tanker distribution service |
| How much | 1 m3 net water accepted at recipient unloading coupling |
| How well | Meet named local legal and customer acceptance specification at unloading; preserve supplier/source, temperature, test method, result, decision and signatures; no universal chlorine limit |
| How long or cycle | Original loads initiated in one declared consecutive 12-month window, followed through final delivery, return, waste fate and vehicle return; unresolved closing custody prevents completion |
| reference_flow_link | accepted_distribution_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Potable-water road-tanker distribution service |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | source and supplier; potable-water acceptance specification; delivery gate and custody; road-tanker provider scope; vehicle and route class; volume temperature and meter basis; original-load cohort and follow-up closure; loaded/accepted ratio and rejected/lost fate; cleaning chemicals and concentration; region and operating period |

## 4. Measurement and Unit Rules

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_volume | accepted_distribution_service | Volume | m3 | Use calibrated net unloaded volume accepted after quality decision; 1000 L = 1 m3. Volume is measured liquid volume at stated temperature, never gas normal volume. Subtract rejected quantity; A must be positive. |
| energy_conversion | loading_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use the official Net calorific value reference property as the archive electricity record electrical-energy convention, not a claim of combustible electricity. E_MJ = 3.6 * E_kWh once; external grid import is supplied at point of use; purchased calibration/testing portable energy is excluded and supplier generation remains background. |
| concentration_basis | hypochlorite_solution | Mass | kg | Record purchased solution mass, active-chlorine mass fraction and batch density when converting volume; m_solution = V_L * rho_kg/L. Do not multiply solution-production dataset by active fraction again. No default concentration or dose. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-produced quality-released potable water reaches filling coupling; carried-water production is outside this service. |
| starting_condition_role | Own-account distributor controls actual dedicated contracted diesel tanker custody/delivery, loading, hygiene and on-site maintenance. |
| product_classification_scope | Narrower than CPC69230: dedicated potable-water diesel road tanker only. |
| recursive_input_rule | No same-category distribution service recursion. Specific supplied equipment and defined on-site service inputs are boundary exchanges; supplier manufacture/roads/tools and off-site receiver processing are background. |
| upstream_dataset_requirement | Consuming model MUST add source-specific D_s/A water production and rejected/returned/lost fate once without credit, never assumed1m3. Link supplied products/services only at stated acceptance gates; link external waste background later from actual handover gate once. No foreground supplier/receiver recursion. |
| disclosure | Original D_s/A and fate ratios, accepted A, load/return/waste closure, supplied equipment specification/mass/service share, service included/excluded matrix, foreground waste receiver gates and actual point-of-use quantities, gaps and uncertainty. |

| rule_id | rule | source_ids |
| --- | --- | --- |
| foreground_gate | Selected foreground is actual contracted dedicated diesel tanker operation plus distributor loading/metering, closed equipment hygiene and on-site maintenance. Include loaded/empty/return/failed/idle/pump events through vehicle return, recipient acceptance decision and actual waste handover. Distributor retains own-account custody/commercial responsibility. Recipient storage/dispensing/use and distributor intermediate storage are outside. | who-tanker-2013; unsd-cpc30-69230 |
| no_background_recursion | Supplier manufacture/mining/material-component production, complete upstream transport, roads, supplier tools/factories/supporting capital and off-site waste receiver treatment are background and not operated foreground processes. Retained complete vehicle/skid/hose inputs have a specific supplied acceptance gate and one Mass/kg identity; preserve their measured service attribution without decomposing BOM or adding factory/road/EOL internals. Capital input datasets end at supplied equipment gate and exclude later foreground operating supplies and EOL treatment. |  |
| commodity_ownership | Carried water remains a physical custody ledger, not a water commodity inventory input/output of this service. Consuming model MUST add source-specific D_s/A production covering accepted plus rejected/returned/lost new source water, and R_s/A/L_s/A fate by documented destination exactly once without credit. Do not add a second1m3 water commodity or duplicate supplier source tests. Internal reload is not new source intake. Auxiliary cleaning water remains a separate input. |  |
| single_measurement_object | Each card has one specific measurable object, one primary property and one preferred unit. A specified complete multi-material vehicle/equipment, formulated product, characterized waste carrier or defined calibration/acceptance service is permissible. Raw counts/metres/volume/hours convert only with same-object evidence to that selected unit. Independent chemicals, electricity, fuel, media and directions remain distinct; no generic lifecycle service or selector. |  |
| service_gates | Only the specified on-site meter calibration and unloading acceptance tests are purchased foreground service inputs, measured by actual productive technician/analyst hours. Contracts fix exact object/method/delivery result and included portable supplies/energy/sample movement/provider take-back waste. No duplicate foreground resources for those included activities. Any excluded distributor-provided resource requires a concrete card and protocol before complete data; provider scope is collected, not guessed. Tanker driving itself stays actual diesel/urea/species and asset inputs, not another complete haulage exchange. |  |
| waste_handover | Closed hygiene wastewater collection remains required. Inventory output ends at actual signed external handover with measured carrier, composition, quantity and receiver. No hypothetical receiver input, off-site treatment reagent/emission or future terminal scenario is in this foreground. Background waste transport/treatment may later link from that exact gate once, without adding contained water/chemicals as duplicate untreated releases. No on-site treatment is presumed; actual spills/direct releases or on-site treatment need precise medium-specific cards/protocol extension before conformity, never omission or zero. | who-cleaning-2013; kingcounty-tanker-snapshot |
| route_extensions | Keep original dedicated potable diesel-tanker route, bulk reusable chemical supply and no post-fill carried-water dosing/treatment. Occurrence/configuration review must identify actual unlisted foreground chemicals, packaging, repairs, species or leaks and add specific one-property cards before complete data. Unknown occurrence/identity is a gap, not zero. WHO/King County emergency quantities are neither default doses nor universal legal criteria; selected foreground scope/allocation are PCR modelling choices. | who-tanker-2013; kingcounty-tanker-snapshot |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_delivery | Loading and dedicated diesel road delivery | required | Actual selected foreground use; conditional occurrence verified monthly | Single-object/property boundary exchange or actual foreground release | 1 m3 accepted distribution service |
| p_hygiene | Foreground equipment hygiene and closed waste collection | conditional | Actual selected foreground use; conditional occurrence verified monthly | Single-object/property boundary exchange or actual foreground release | Activities attributable to reference flow |
| p_maintenance | On-site equipment maintenance | conditional | Actual selected foreground use; conditional occurrence verified monthly | Single-object/property boundary exchange or actual foreground release | Activities attributable to reference flow |
| p_assets | Specified equipment service attribution | required | Actual selected foreground use; conditional occurrence verified monthly | Single-object/property boundary exchange or actual foreground release | Activities attributable to reference flow |

### Process: Loading and dedicated diesel road delivery (`p_delivery`)

#### Inputs

##### Product flows

###### Alternating current (`loading_electricity`)

Point-of-use external grid AC actually supplied to distributor loading and separately logged on-site hygiene/maintenance. Preserve meter, voltage and supplier. Excludes tanker diesel and portable electricity included in purchased testing/calibration service. No upstream power-generation process is expanded here. Apply `inv_event_attribution` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * E_kWh/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

###### Diesel fuel (`delivery_diesel`)

Actual tanker fuel delivered into the operated foreground fuel tank, consumed for loaded/empty/return/failed driving, idle/waiting and onboard pumping. Measure consumed mass by fuel stock or batch volume-density conversion. Fuel supply ends at this gate; actual combustion releases are separate. The contracted provider must disclose physical fuel use, not another complete haulage factor. Apply `inv_event_attribution` in section 8.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: M_diesel/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Aqueous urea solution for selective catalytic reduction (`delivery_urea`)

Conditional actual supplied whole solution consumed by the tanker SCR system, measured in kg with composition recorded. No upstream formula-ingredient duplication; absence requires actual vehicle/emission-control evidence.

- Selected flow: Aqueous urea solution for selective catalytic reduction
- Flow property / unit: Mass / kg
- Amount rule: M_urea/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Potable-water unloading acceptance testing service (`acceptance_testing`)

One defined contracted recipient acceptance test under the named approved local potable/customer protocol, sampled at unloading coupling through signed accept/reject decision. Primary property analyst time/h, recorded actual attended analytical hours. Supplier source-water tests are excluded. Contract includes its sampling/test reagents, portable instruments/energy, sample transport and provider take-back test waste; none may also enter foreground fuel/material/waste cards. Any supplies explicitly supplied by distributor need separately identified cards and exclusion from the service.

- Selected flow: Potable-water unloading acceptance testing service
- Flow property / unit: Analyst time / h
- Amount rule: T_test/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_testing`
- Sources: kingcounty-tanker-snapshot

#### Outputs

##### Product flows

###### Potable-water road-tanker distribution service (`accepted_distribution_service`)

Reference service corresponding only to net quality-accepted unloading volume; rejected, lost or unresolved stock is excluded. This is not a water commodity.

- Selected flow: Potable-water road-tanker distribution service
- Flow property / unit: Volume / m3
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`delivery_co2_fossil`)

Actual foreground Carbon dioxide, fossil, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_co2_fossil/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Carbon dioxide, biogenic, to air (`delivery_co2_biogenic`)

Actual foreground Carbon dioxide, biogenic, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_co2_biogenic/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Carbon monoxide, to air (`delivery_co`)

Actual foreground Carbon monoxide, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_co/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Methane, to air (`delivery_ch4`)

Actual foreground Methane, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_ch4/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Dinitrogen monoxide, to air (`delivery_n2o`)

Actual foreground Dinitrogen monoxide, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_n2o/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Nitrogen monoxide, to air (`delivery_no`)

Actual foreground Nitrogen monoxide, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_no/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Nitrogen dioxide, to air (`delivery_no2`)

Actual foreground Nitrogen dioxide, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_no2/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Sulfur dioxide, to air (`delivery_so2`)

Actual foreground Sulfur dioxide, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_so2/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Particulate matter, aerodynamic diameter <=2.5 micrometres, to air (`delivery_pm25`)

Actual foreground Particulate matter, aerodynamic diameter <=2.5 micrometres, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Particulate matter, aerodynamic diameter <=2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_pm25/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Particulate matter, aerodynamic diameter >2.5 and <=10 micrometres, to air (`delivery_pmcoarse`)

Actual foreground Particulate matter, aerodynamic diameter >2.5 and <=10 micrometres, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Particulate matter, aerodynamic diameter >2.5 and <=10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_pmcoarse/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

###### Ammonia, to air (`delivery_nh3`)

Actual foreground Ammonia, to air from tanker engine/pump and exhaust control. No default quantity or factor; not a gross exhaust bundle. Supplier manufacturing and off-site waste treatment emissions are outside. Apply `inv_event_attribution`, `inv_emission_evidence` in section 8.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: M_delivery_nh3/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`


### Process: Foreground equipment hygiene and closed waste collection (`p_hygiene`)

#### Inputs

##### Product flows

###### Potable water for loading-equipment cleaning (`auxiliary_water`)

Actual purchased distributor pump/hose wash/rinse water at the foreground water-supply gate; one preferred unit m3 at measured temperature. It is separate from carried-water D_s and from tanker cleaning.

- Selected flow: Potable water for loading-equipment cleaning
- Flow property / unit: Volume / m3
- Amount rule: W_clean/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`

###### Potable water for tanker cleaning (`tanker_wash_water`)

Actual separately metered tank/onboard-hose wash/rinse water at provider operated foreground; supplier production remains background. No carried-water new-load quantity used as this input.

- Selected flow: Potable water for tanker cleaning
- Flow property / unit: Volume / m3
- Amount rule: W_tanker/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`

###### Sodium carbonate powder (`sodium_carbonate`)

Actual distributor equipment cleaning powder, only when required by the approved procedure; supplied product mass in kg, no default dose.

- Selected flow: Sodium carbonate powder
- Flow property / unit: Mass / kg
- Amount rule: M_carbonate/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`

###### Aqueous sodium hypochlorite solution (`hypochlorite_solution`)

Actual distributor hygiene whole solution mass with batch density/concentration recorded. No post-fill dosing of carried water and no repeated active fraction on solution supply.

- Selected flow: Aqueous sodium hypochlorite solution
- Flow property / unit: Mass / kg
- Amount rule: M_solution/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`

###### Sodium carbonate powder (`tanker_carbonate`)

Actual separately recorded tanker hygiene powder when specified by its approved procedure; no implicit provider cleaning package.

- Selected flow: Sodium carbonate powder
- Flow property / unit: Mass / kg
- Amount rule: M_tanker_carbonate/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`

###### Aqueous sodium hypochlorite solution (`tanker_hypochlorite`)

Actual separately recorded tanker hygiene whole solution in kg, with concentration and density; does not duplicate distributor solution.

- Selected flow: Aqueous sodium hypochlorite solution
- Flow property / unit: Mass / kg
- Amount rule: M_tanker_solution/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`

#### Outputs

##### Waste flows

###### Loading-equipment cleaning wastewater (`cleaning_wastewater`)

Actual characterized whole liquid carrier transferred from closed distributor collection to the documented external receiver handover gate, m3 at handover temperature with measured density. Includes dissolved chemicals once. No receiver treatment inputs/emissions or hypothetical paired receipts in this foreground. Generated/stock/shipped mass ledger remains mandatory.

- Selected flow: Loading-equipment cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: W_waste_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_hygiene`
- Sources: who-cleaning-2013; kingcounty-tanker-snapshot

###### Tanker cleaning wastewater (`tanker_wastewater`)

Actual characterized tanker wash/disinfection liquid handed over from closed foreground collection; one preferred property Volume/m3 at declared receiver gate. Do not duplicate contained water/chemicals as untreated emissions. Off-site receiver processing is background.

- Selected flow: Tanker cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: W_tanker_waste_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_hygiene`
- Sources: who-cleaning-2013; kingcounty-tanker-snapshot


### Process: On-site equipment maintenance (`p_maintenance`)

#### Inputs

##### Product flows

###### Mineral lubricating oil (`work_mineral_oil`)

Actual on-site operational top-up/change consumed in tanker/loading maintenance, kg of supplied specified oil. Excludes initial fill already inside equipment and stocks/unused returns.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: O_work_mineral_oil/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_work`

###### Aqueous ethylene glycol coolant (`work_coolant`)

Actual on-site operating replacement/top-up whole formulation in kg, composition and density retained; initial vehicle fill is not repeated.

- Selected flow: Aqueous ethylene glycol coolant
- Flow property / unit: Mass / kg
- Amount rule: O_work_coolant/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_work`

###### Diesel potable-water tanker tyre, specified complete tyre (`replacement_tyre`)

Actual maintenance replacement tyre crossing the operated foreground gate, one declared size/load/pressure specification with net supplied mass kg. Mounted wheel/rim excluded and no tyre material decomposition. Installed initial tyres are included in tanker_asset; no duplication.

- Selected flow: Diesel potable-water tanker tyre, specified complete tyre
- Flow property / unit: Mass / kg
- Amount rule: O_replacement_tyre/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_work`

###### Loading-pump EPDM mechanical shaft seal, specified assembly (`replacement_seal`)

Actual specified accepted shaft-seal replacement, measured net supplied assembly kg; model and fitting compatibility recorded. Includes embedded spring/seal constituents once; a complete renewed skid is instead assigned a new asset key, never counted again as this replacement.

- Selected flow: Loading-pump EPDM mechanical shaft seal, specified assembly
- Flow property / unit: Mass / kg
- Amount rule: O_replacement_seal/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_work`

###### On-site potable-water loading-meter calibration service (`meter_calibration`)

One contracted calibration object: the specified loading meter, approved proving method and signed calibration result at the distributor site. Primary property technician time/h, actual attended productive calibration hours, not a test-count proxy. Contract includes provider portable reference equipment, its portable energy, standards/reagents and their take-back wastes; excludes site electricity already metered, other maintenance and recipient testing. Check contract/no-overlap matrix; missing scope is incomplete.

- Selected flow: On-site potable-water loading-meter calibration service
- Flow property / unit: Technician time / h
- Amount rule: T_calibration/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_calibration`

#### Outputs

##### Waste flows

###### Used mineral lubricating oil (`used_oil`)

Actual whole contaminated drained-oil carrier transferred at licensed external collector gate; kg by calibrated scale, contamination characterized. Oil remaining in vehicle or retained stocks excluded; no receiver incineration/recovery releases here.

- Selected flow: Used mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: O_used_oil_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_maintenance`

###### Spent ethylene glycol coolant (`spent_coolant`)

Actual whole formulated coolant carrier handed over, kg and composition; do not report contained water/glycol as additional waste or direct release.

- Selected flow: Spent ethylene glycol coolant
- Flow property / unit: Mass / kg
- Amount rule: O_spent_coolant_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_maintenance`

###### Retired specified potable-water tanker tyre (`used_tyre`)

Actual characterized complete tyre transferred to identified receiver, net kg excluding wheel/rim; no invented separated steel/rubber streams. Only actual foreground handover, not prospective receipts/treatment.

- Selected flow: Retired specified potable-water tanker tyre
- Flow property / unit: Mass / kg
- Amount rule: O_used_tyre_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_maintenance`

###### Used loading-pump EPDM mechanical shaft seal (`used_seal`)

Actual characterized removed seal assembly handed over, net kg including its retained embedded constituents once; no waste components duplicated.

- Selected flow: Used loading-pump EPDM mechanical shaft seal
- Flow property / unit: Mass / kg
- Amount rule: O_used_seal_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_maintenance`


### Process: Specified equipment service attribution (`p_assets`)

#### Inputs

##### Product flows

###### Dedicated diesel potable-water road tanker, complete specified vehicle (`tanker_asset`)

One identified roadworthy tanker configuration at supplied foreground acceptance gate, including tank, vehicle chassis, onboard pump and supplied initial non-fuel lubricating/coolant fills. Operating diesel and SCR stocks are excluded from this equipment gate and supplied net mass. Primary property is complete net supplied mass in kg; tare mass is evidence, not an alternative exchange unit. Use its actual service share. Do not separately add contained metal/plastics/initial fills or supplier factory/road/tool inventories.

- Selected flow: Dedicated diesel potable-water road tanker, complete specified vehicle
- Flow property / unit: Mass / kg
- Amount rule: C_tanker_asset/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### Electric potable-water loading and metering skid, complete specified assembly (`loading_skid`)

One specified accepted complete pump/motor/meter/valve/frame skid at distributor ready-for-use acceptance gate; kg of complete net supplied equipment, excluding declared transport packaging. Actual configuration, mass and operation ledger required. No component/material recursion or duplicate contained supplies.

- Selected flow: Electric potable-water loading and metering skid, complete specified assembly
- Flow property / unit: Mass / kg
- Amount rule: C_loading_skid/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### EPDM potable-water loading hose, specified reinforced assembly (`loading_hose`)

One specified supplied and accepted hose assembly with declared reinforcement and fittings, measured as net assembly kg. EPDM, reinforcement and fittings remain in this one measurement object; metre/count raw records convert only with same-configuration measured assembly mass. No mass guessed from hose length.

- Selected flow: EPDM potable-water loading hose, specified reinforced assembly
- Flow property / unit: Mass / kg
- Amount rule: C_loading_hose/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

#### Outputs

##### Waste flows

###### Retired specified complete potable-water road tanker (`retired_tanker`)

Only actual documented foreground retirement handover to a named receiver. Apply `inv_retired_carrier` in section 8.

- Selected flow: Retired specified complete potable-water road tanker
- Flow property / unit: Mass / kg
- Amount rule: C_retired_tanker_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### Retired specified complete loading and metering skid (`retired_skid`)

Only actual documented foreground retirement handover to a named receiver. Apply `inv_retired_carrier` in section 8.

- Selected flow: Retired specified complete loading and metering skid
- Flow property / unit: Mass / kg
- Amount rule: C_retired_skid_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### Retired specified reinforced EPDM potable-water hose (`retired_hose`)

Only actual documented foreground retirement handover to a named receiver. Apply `inv_retired_carrier` in section 8.

- Selected flow: Retired specified reinforced EPDM potable-water hose
- Flow property / unit: Mass / kg
- Amount rule: C_retired_hose_handover/A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

## 7. Allocation and Co-product Handling

| rule_id | rule | source_ids |
| --- | --- | --- |
| exclusive_route | All dedicated trips and zero-distance idle/pump/failed events follow original-load cohort. A zero-accepted trip retains burdens in cohort totals; multiple stops divide by total positive accepted A only. No load volume/distance shortcut. |  |
| shared_operations | Directly assign/submeter actual foreground jobs first. Otherwise allocate inseparable operating/hygiene/maintenance resources by this cohort engaged equipment hours divided by all-user engaged hours in the same measured interval including follow-up. Already cohort-specific quantities receive no extra beneficiary share. No revenue allocation; unknown denominator is incomplete. |  |
| equipment_attribution | Retain only specified tanker, loading skid and hose supplied-object capital inputs. Record original asset key, configuration, actual complete net mass and evidenced total service-life driver. Vehicle driver is actual cohort engine-on hours/all-user lifetime engine-on hours including idle/empty/pump/failed use; skid and hose driver is actual cohort connected operating hours/all-user lifetime same hours. Original assets purchased before cohort still contribute measured share. Apply coefficient once to supplied equipment mass, divide A once. Distinct renewed whole equipment gets a new key; maintenance replacements and initial contained supplies cannot duplicate it. No nested supplier/road/tool capital allocation. |  |
| no_credit | No credit for rejected/returned/reloaded water or waste; internal transfer produces no new intake or accepted service. Actual retired asset carrier, if handed over, follows original asset service coefficient once, never current disposal-year whole mass. Do not invent future waste quantities merely to close an asset lifecycle. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | p_delivery | accepted_distribution_service | source, meter and acceptance ledger | original_load_id; source/supplier/geography/treatment_id; first_fill_time; D_s; each gate V/rho/temperature; meter before/after; A; rejected; return; loss/receiver; internal reload; opening/closing custody; test/decision/signature; vehicle return | Use calibrated fill/unload meters and signed quality records per original split/load; trace all returns/loss to source. Measure same-batch density at gate temperature, never assume1000kg/m3. Apply custody_balance/commodity_ratio daily; supplier source tests excluded from recipient service. | m3; L; kg; kg/m3; degC | every fill/transfer/unload/final fate; reconcile daily | first loads within declared consecutive12months through final custody/return closure | source coupling through recipient acceptance/rejected returns | per reference flow | meter calibration, sample chain, source/recipient signatures and closure log |
| cp_transport | p_delivery | delivery_diesel; delivery_urea; delivery_co2_fossil; delivery_co2_biogenic; delivery_co; delivery_ch4; delivery_n2o; delivery_no; delivery_no2; delivery_so2; delivery_pm25; delivery_pmcoarse; delivery_nh3 | actual vehicle/fuel/emission log | trip/original_load/vehicle/source/event IDs; leg role; GPS/odometer; engine-on/idle/pump/failed hours; fuel opening/receipt/close/return; kg or L and same-batch density/temperature; composition/biogenic fraction/NCV; SCR solution mass/concentration; species test/factor native basis/control/uncertainty; original asset key; event_kind recurring/capital; actual event quantity; alpha_j; supplier pre-acceptance included-resource exclusion | Match GPS/engine/fuel invoices and calibrated tank/flow records per event including zero-distance intervals. Fuel actual consumption from stock, weighed or measured batch-volume*density; record factors on exact native quantity basis and actual control under emission_species. Reconcile per trip/month, no provider vehicle-km background factor and no guessed absence. Separate observed post-acceptance one-time capital events and recurring operation; apply foreground_capital_events once, never duplicate supplier accepted-equipment scope. | kg; L; kg/L; degC; h; km; kg/kg; MJ/kg | every driving/idle/pump/failed event; monthly fuel reconciliation | original dispatch cohort through final vehicle return | contracted dedicated tanker operated foreground | per reference flow | provider physical logs, calibrated readings, source/control factor evidence and signed occurrence |
| cp_energy | p_delivery | loading_electricity | point-of-use grid meter | meter/site/event/source ID; kWh import and same-purchase returns; voltage/supplier; start/end; cohort/all-user operating hours; service portable energy exclusion; original asset key; event_kind recurring/capital; actual event quantity; alpha_j; supplier pre-acceptance included-resource exclusion | Read calibrated distributor submeter for loading and separately logged on-site hygiene/maintenance; match invoices/source gate and allocate shared_operations once. Exclude portable energy in purchased testing/calibration and supplier generation. Apply electricity_gate then3.6 conversion once. Separate observed post-acceptance one-time capital events and recurring operation; apply foreground_capital_events once, never duplicate supplier accepted-equipment scope. | kWh; h | each operating interval, monthly invoice check | all actual cohort foreground intervals including follow-up | distributor supplied loading/maintenance/hygiene electricity | per reference flow | calibration, invoices, stage meters and all-user hours |
| cp_hygiene | p_hygiene | auxiliary_water; tanker_wash_water; sodium_carbonate; hypochlorite_solution; tanker_carbonate; tanker_hypochlorite | actual hygiene water/chemical stocks | owner/site/vehicle/equipment/event/original_load ID; approved procedure; water meter/temperature; exact chemical batch; whole mass; active fraction; density; opening/receipt/close/return/transfer; event/cohort/all-user hours; sanitation result | Submeter supplied wash water, weigh powder/whole solution or use measured same-batch density conversion. Consumption=opening+receipt-closing-externalreturns adjusted documented transfers; direct original event then shared_operations. Separate tanker/distributor row IDs, no carried-water dosing/default quantity. Reconcile stocks monthly and all liquids to closed waste lots; sign occurrence/absence. | m3; kg; kg/L; mass fraction; degC; h | each wash/disinfection event and monthly stocks/absence | actual original-cohort hygiene including follow-up | distributor pump/hose and tanker hygiene separately | per reference flow | COA/SDS, calibrated meter/scale and approved signed procedure |
| cp_work | p_maintenance | work_mineral_oil; work_coolant; replacement_tyre; replacement_seal | foreground maintenance parts and stocks | job/asset/original_load ID; configuration; replacement object specification; received/installed net mass; count and same-object mass if converting; lubricants/coolant batch/density; opening/receipt/closing/return/reuse; initial-fill exclusion; job hours/all-user hours; generated waste lot; original asset key; event_kind recurring/capital; actual event quantity; alpha_j; supplier pre-acceptance included-resource exclusion | Weigh or use traceable same-model net supplied mass for each actual tyre/seal; fuel/fluids via calibrated scale or batch density. Stock reconcile real consumption and reusable returns; exclude initial fills and same-record whole equipment renewal already under cp_assets. Direct event or shared_operations attribution, each item primary kg. Additional actually used part/fluid needs its own specific property/unit card. Separate observed post-acceptance one-time capital events and recurring operation; apply foreground_capital_events once, never duplicate supplier accepted-equipment scope. | kg; count; kg/count; L; kg/L; h | every job/stock transfer, monthly reconciliation and absence | cohort actual maintenance jobs through follow-up | operated tanker/loading equipment foreground only | per reference flow | signed work orders, model/weight records, stock/scale evidence and no-overlap register |
| cp_calibration | p_maintenance | meter_calibration | defined calibration/testing service acceptance | service/job/object/owner/site/original_load ID; named protocol/method; sample point/chain; raw analyst/technician start/end/break/productive hours; decision/result/certificate; contract included portable supplies/energy/sample travel/take-back wastes; excluded distributor resources; source-test exclusion; invoice/no-overlap IDs | For each specified meter calibration or recipient acceptance job, verify contract, method and delivered result, collect signed attendance times excluding breaks/parallel unrelated jobs. Actual productive h is primary quantity; counts never substitute without measured time. Map every included resource/waste to provider service once; any distributor-supplied exclusion needs specific foreground card before completeness. Recipient samples at unload; calibration at identified distributor meter. No supplier source-water test duplication. | h; timestamp | every specified service job and monthly contract/invoice reconciliation | actual cohort acceptance/calibration jobs, including failures/retests | recipient coupling tests and distributor on-site meter calibration | per reference flow | signed time sheets, method/certificate, custody, invoice and included/excluded matrix |
| cp_testing | p_delivery | acceptance_testing | defined calibration/testing service acceptance | service/job/object/owner/site/original_load ID; named protocol/method; sample point/chain; raw analyst/technician start/end/break/productive hours; decision/result/certificate; contract included portable supplies/energy/sample travel/take-back wastes; excluded distributor resources; source-test exclusion; invoice/no-overlap IDs | For each specified meter calibration or recipient acceptance job, verify contract, method and delivered result, collect signed attendance times excluding breaks/parallel unrelated jobs. Actual productive h is primary quantity; counts never substitute without measured time. Map every included resource/waste to provider service once; any distributor-supplied exclusion needs specific foreground card before completeness. Recipient samples at unload; calibration at identified distributor meter. No supplier source-water test duplication. | h; timestamp | every specified service job and monthly contract/invoice reconciliation | actual cohort acceptance/calibration jobs, including failures/retests | recipient coupling tests and distributor on-site meter calibration | per reference flow | signed time sheets, method/certificate, custody, invoice and included/excluded matrix |
| cp_assets | p_assets | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | specified supplied equipment service ledger | original_asset/owner/model/configuration ID; acceptance date/gate; actual complete net supplied kg; contained initial fluid/tyre scope; packaging excluded; h_cohort; H_lifetime_all_users; driver source; all beneficiaries/prior allocations; purchase/renewal/maintenance exclusion; actual retired receiver/date/net kg/removed fluids; original asset key; event_kind recurring/capital; actual event quantity; alpha_j; supplier pre-acceptance included-resource exclusion; revision version/date; actual lifetime hours per original cohort; source quantity ID/X_jx; source-specific F_booked_jkx; w_jk; delta_jkx; original accepted A_k; amendment links ; source-specific B/version and original N fields in cp_capital_amendment | Use traceable manufacturer same-configuration net mass or calibrated whole-object weighing; raw count/length converts only with same-object measured mass. Collect engine-on hours for vehicle including idle/empty/pump and connected operation for skid/hose, with all-user lifetime driver from audited fleet/equipment history or documented engineering estimate/range, no default. Reconcile prior shares and remaining-life changes under equipment_share. If actual retirement handover occurs, verify receiver receipt and fluids/weight, same original coefficient, finalized as w_jk at final retirement; no future terminal flow or supplier capital-chain collection. Separate observed post-acceptance one-time capital events and recurring operation; apply foreground_capital_events once, never duplicate supplier accepted-equipment scope. At final retirement reconcile all actual lifetime hours and each source-specific posting ledger; calculate final shares and signed amendments by equipment_share, retaining original accepted A_k and version links. Check each affected cohort and source to prevent omitted or duplicate corrections; missing/nonpositive denominators block results. Complete cp_capital_amendment reconciliation for final settlement and source/denominator revisions. | kg; h; count; m; kg/count; kg/m | each asset acceptance/renewal/retirement and daily hours; annual life review | actual supplied assets servicing cohort including previous purchases; all original beneficiary lifetime records and amendments; observed handovers only | specified tanker, loading skid and loading hose only | per reference flow | acceptance/configuration/weight records, calibrated logs, versioned life/share ledger and actual handover receipt |
| cp_capital_amendment | p_assets | original-asset sources and their one-time capital-event components; excludes recurring operating components | versioned_original_source_and_cohort_ledger | asset_ID; source_ID and original row_ID/native unit; original acceptance/event gate; full measured source quantity and old/new versions; measurement/calibration/state basis; each original beneficiary-period/driver unit/u_actual; period b where applicable; all past/future beneficiaries; F_prev_all and remaining_driver; accepted g/F_booked; raw booked B; old normalized result/original N and corrected N; background model versions/scope; actual final retirement evidence; A_new/delta_A/replacement/deduplication links | Collect original records at asset/supplier acceptance, actual site events and receiver handover gates as applicable; verify full quantities through the existing cp_assets weighing/configuration-count/length/driver measurement and calibration methods. At every source/life/model/denominator revision and final retirement, compare old/new records for every original cohort and apply capital_source_amendment. Reconcile all-beneficiary fractions, source totals and each amendment link; the service data custodian reviews and signs the reconciliation. Prove nonoccurrence by complete event registers/zero-activity evidence, never absence-as-zero; retain unresolved identities, measurement uncertainty and incomplete causes. | source-native units; fixed driver units; original reference units | each acceptance/event/revision/final retirement; annual reconciliation | complete original asset history and original service cohorts; evidenced remaining life | existing foreground gates and capital-source responsibility only | once per original reference flow | raw measurement/calibration; signed acceptance/event/receiver records; source/model versions; all-beneficiary and revision reconciliation ledger |
| cp_waste_hygiene | p_hygiene | cleaning_wastewater; tanker_wastewater | original waste generation/stock/handover ledger | lot/original_load/job/asset/owner ID; exact carrier/specification/composition; generation/open/ship/close kg; generation and handover V/rho/temperature; leaks/evaporation/additions; recipient/date/gate/receipt; collector responsibility; service take-back exclusions | Calibrated scale or tank-level/volume plus same-lot measured density and temperature; characterize carrier by approved sample chain (liquids: chlorine-as-Cl2 QA, pH, formulation/contaminants). Reconcile stock on kg, not different-temperature volumes, follow each original lot to signed actual receiver handover. Output whole carrier once, exclude service-provider take-back waste already in service. Background treatment may link later from exact gate; no receiver-process quantities required here. Unknown stock/identity/receiver or actual direct release needs resolution/precise cards before complete cohort. | kg; m3; kg/m3; degC; mg/L; pH | each generation/stock movement/handover; monthly reconciliation | original-generation cohort through actual foreground handover | closed hygiene collection and on-site maintenance waste handover | per reference flow | calibration, characterized samples, mass stocks and signed receiver receipts |
| cp_waste_maintenance | p_maintenance | used_oil; spent_coolant; used_tyre; used_seal | original waste generation/stock/handover ledger | lot/original_load/job/asset/owner ID; exact carrier/specification/composition; generation/open/ship/close kg; generation and handover V/rho/temperature; leaks/evaporation/additions; recipient/date/gate/receipt; collector responsibility; service take-back exclusions | Calibrated scale or tank-level/volume plus same-lot measured density and temperature; characterize carrier by approved sample chain (liquids: chlorine-as-Cl2 QA, pH, formulation/contaminants). Reconcile stock on kg, not different-temperature volumes, follow each original lot to signed actual receiver handover. Output whole carrier once, exclude service-provider take-back waste already in service. Background treatment may link later from exact gate; no receiver-process quantities required here. Unknown stock/identity/receiver or actual direct release needs resolution/precise cards before complete cohort. | kg; m3; kg/m3; degC; mg/L; pH | each generation/stock movement/handover; monthly reconciliation | original-generation cohort through actual foreground handover | closed hygiene collection and on-site maintenance waste handover | per reference flow | calibration, characterized samples, mass stocks and signed receiver receipts |

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| custody_balance | accepted_distribution_service | For each original new-load cohort balance kg: m_D+m_open=m_A+m_R+m_loss+m_close. Each m=sum(V_i*rho_i), using measured same-batch liquid density at its actual gate temperature. D_s stays volume at source gate; A actual accepted unload volume; R/L_loss their declared fate-gate volumes. Never equate different-temperature volumes. Internal reload cancels. Separate source/supplier/geography/treatment combination s, matched upstream inventory and no double source linkage. New-load cohort m_open=0; exclude prior-cohort stock with preserved lineage. Require m_close=0 and all final delivery/return/loss destinations and vehicle return known before completion. | D_s; A; R; L_loss; V_i; rho_i; m_open; m_close; cp_custody | closed original-load mass ledger |  |
| commodity_ratio | accepted_distribution_service | b_s=D_s/A m3 source commodity per1m3 service. Consuming model MUST add sum_s(b_s*matched source/supplier/geography/treatment upstream inventory) plus R_s/A and L_s/A destination fate once with no credit. Never add another1m3 accepted-water production. D_s records original source fill once, not internal reload. Auxiliary water supply remains in its separate foreground input background. | D_s; A; R_s; L_s; cp_custody | source commodity and fate ratios |  |
| normalize_foreground | all inventory rows | For each nonreference row, first sum actual attributable raw quantity in its single selected numerator unit, then divide positive A once. M_/W_/T_/O_ variables in cards are attributable totals before normalization, not already per-m3 factors. Electricity alone converts E_kWh to3.6*E_kWh MJ once. Whole solution remains product mass, not active constituent mass. Service T_test/T_calibration is actual productive hours under defined protocol, no count-to-hour guess. Internal material/utility quantities are never fixed to reference1m3. Original-cohort equipment/capital corrections use original A_k under equipment_share, never current A. Failed or zero-output tasks retain their consumption and are assigned to their evidenced original parent service cohort before normalization. If that entire responsible cohort has no positive accepted A_k, retain raw totals as unresolved and withhold per-reference results; do not shift them to unrelated successful cohorts. | A; M_total; W_total; T_test; T_calibration; O_total; E_kWh; cp_transport; cp_energy; cp_hygiene; cp_testing; cp_calibration; cp_work | single-property amount per reference flow |  |
| equipment_share | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | Within this entry's declared applies_to scope, apply the complete ordered rule group: equipment_share_initial_driver; equipment_share_remaining_life; equipment_share_final_shares; equipment_share_source_corrections; equipment_share_constraints. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets; equipment_share_initial_driver; equipment_share_remaining_life; equipment_share_final_shares; equipment_share_source_corrections; equipment_share_constraints | attributed actual equipment and observed handover mass totals |  |
| capital_source_amendment | original-asset sources and their one-time capital-event components; excludes recurring operating components | Within this entry's declared applies_to scope, apply the complete ordered rule group: capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | attributed totals in source-native units; normalize once by original N_c |  |
| trip_totals | delivery_diesel; delivery_urea | K=sum actual all-leg vehicle-km, loaded/empty/return/failed; K>0 for this road route is QA only, not the fuel/emission denominator. Measure all engine-on idle/pump/zero-distance failed events and fuel/urea consumption directly. Sum M_diesel/M_urea over original cohort to final vehicle return. Never multiply complete vehicle-km factor or double actual roundtrip distance; do not infer zero burden from K_event=0. | K; M_diesel; M_urea; engine_hours; idle_hours; pump_hours; A; cp_transport | actual complete-cohort physical totals |  |
| emission_species | all inventory rows | Actual foreground source/event releases use one measured species mass or documented vehicle/fuel/control-specific factor with native basis and uncertainty. A kg-species/kg-fuel factor multiplies fuel once, not composition again; carbon/element factors use evidenced stoichiometric conversion once. Keep fossil/biogenic carbon separate. NO and NO2 remain distinct; PM fine/coarse bins nonoverlap and no total-PM duplicate. If measured nonexhaust PM is included, identify it separately in raw source records and prohibit double count with collected tyre/brake waste; actual other species/medium needs a precise card before complete data. Annual fuel/carbon balance is QA of event releases, not another release. Supplier manufacturing/off-site treatment factors do not belong here. Unknown actual factor/emission is incomplete, never zero. | fuel_mass; factor; composition; source_event; control_state; A; cp_transport | individual foreground species mass |  |
| waste_handover_balance | all inventory rows | Each actual original-generation waste lot: M_gen+M_open=M_ship+M_close+M_documented_other, in kg using measured V*rho at each actual gate temperature/composition. No equality of different-temperature volumes. M_documented_other includes separately evidenced leaks/evaporation/additions with correct sign and explicit additional cards where crossing environment. For liquid card W_handover=sum(M_ship/rho_handover) m3; do not substitute generated volume at another density. Preserve original source/event and collector receipt. Follow cohort-generated waste through actual handover; unresolved closing stock/receiver prevents complete original cohort. Actual inherited prior-cohort waste is excluded with lineage. No receiver-treatment physical inventory is required in foreground. | M_gen; M_open; M_ship; M_close; M_documented_other; rho_handover; A; cp_waste_hygiene; cp_waste_maintenance | actual foreground handover totals and closed mass ledger |  |
| electricity_gate | loading_electricity | E_kWh is actual external grid import after only demonstrable same-purchase returns, with no unrelated onsite-export netting. Any new onsite generation needs an explicit foreground route/card update: its electricity is internal memorandum, actual fuel/species once. Do not duplicate purchased testing/calibration portable electricity or supplier background generation. | E_kWh; import; same_purchase_return; cp_energy | nonduplicated point-of-use grid electricity |  |
| uncertainty_reconcile | all inventory rows | Reconcile independent meters/stocks with propagated calibration uncertainty; unexplained residual beyond documented combined uncertainty requires investigation/correction, not forced balance. A=0, unknown identity/occurrence, unresolved negative stock, incomplete original-load/vehicle/waste handover prevents complete unit data. Record method/range/sensitivity of life or factor estimates; emergency examples and candidate rows are not default amounts or legal limits. | raw_ledgers; calibration; uncertainty; A | reconciled foreground and disclosed gaps |  |
| foreground_capital_events | all inventory rows | Supplied complete equipment gate is ready-for-use acceptance: supplier delivery/install/proving already included before that gate is not another foreground resource. Actual distributor-operated commissioning, site installation modification or retirement tasks AFTER that gate remain foreground only when observed. Existing specific cards may cover the same measured resource/object: distinguish event, original asset key and capital-event vs recurring status in raw records. For a one-time original asset event, attributable total=sum(actual raw event quantity*that original asset alpha_j) once; recurring jobs use direct original service or shared_operations. Apply to real site electricity, actual tanker fuel/pump operation and their source releases or actual drains/handover only as those specific cards permit; any different resource/species needs its own exact card before complete data. No second supplier-gate resource, no whole event burden reset in retirement year, no background supporting capital. At final retirement apply equipment_share final w_jk to each observed source event, using its own F_booked_jkx and signed delta_jkx correction in the original service cohort/A_k; new unbooked events start at zero. Never add unallocated physical QA totals again. Final capital settlement and source/original-denominator revisions follow capital_source_amendment; recurring components do not receive lifetime allocation. | event_id; original_asset_id; event_kind; actual_quantity; alpha_j; A; cp_energy; cp_transport; cp_work; cp_assets | once-attributed observed foreground capital-event quantities |  |
| equipment_share_initial_driver | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | Component of equipment_share. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each actual supplied asset j, initial allocation alpha_j=h_cohort_j/H_lifetime_all_users_j, using the positive evidenced all-beneficiary lifetime denominator and fixed equipment_attribution driver. C_asset=sum(m_net_supplied_j*alpha_j) kg. C_retired_handover=sum(m_actual_handover_j*alpha_j) kg only for actual handover, with alpha_j equal to final w_jk after actual final retirement; no prospective terminal flow. No additional cohort/all-user fraction after alpha_j. | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | Method component; the originating entry owns the inventory result |  |
| equipment_share_remaining_life | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | Component of equipment_share. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At a documented remaining-life/use revision, freeze all accepted past shares: F_prev_all_users is their sum across ALL original beneficiaries. The ONLY revised current-period formula is alpha_new,current=(1-F_prev_all_users)*h_current/H_remaining_all_users. H_remaining_all_users is positive, includes the current period and ALL beneficiaries remaining use on the SAME fixed equipment driver; h_current is this original beneficiary cohort current-period use on that basis. Use this revised alpha for newly attributed quantities only, preserve prior fractions and original supplied mass, and require 0<=F_prev_all_users<=1 and cumulative all-beneficiary shares<=1. Do not recompute all history with a revised total lifetime, restart original mass or reset allocation in acquisition/disposal year. | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | Method component; the originating entry owns the inventory result |  |
| equipment_share_final_shares | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | Component of equipment_share. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At actual final retirement, do not divide by the now-zero remaining hours. For every original beneficiary service cohort k compute w_jk=h_actual_jk/sum_all_lifetime_actual_h_j using the same equipment driver across ALL users and periods, including failed/idle/empty/pump use. Require a supported positive total; sum_k(w_jk)=1. | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | Method component; the originating entry owns the inventory result |  |
| equipment_share_source_corrections | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | Component of equipment_share. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each original source quantity x (supplied asset, observed one-time capital event or actual retirement carrier), retain its own booked fraction F_booked_jkx and calculate delta_jkx=w_jk-F_booked_jkx; the quantity correction is delta_jkx*X_jx. A newly measured carrier/event with no prior posting has F_booked_jkx=0. The final attributed quantity is w_jk*X_jx for every such source. Preserve original accepted postings and raw physical records; issue versioned amendments to each original cohort result, dividing its corrected attributable totals by that original positive accepted A_k once. Signed delta may reverse over-allocation, but is not negative physical flow or substitution credit. Never assign the residual wholesale to disposal-year A, multiply a second share, or silently rewrite old physical quantities. | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | Method component; the originating entry owns the inventory result |  |
| equipment_share_constraints | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | Component of equipment_share. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Unsupported actual lifetime hours, booked shares or original A_k block unit-reference results; no equal-share/current-A fallback. Record method/range/sensitivity for uncertain remaining use, never invent default weight/life. Apply capital_source_amendment for final settlement, source quantity/model-version corrections and original-denominator changes; any delta-fraction times source-quantity expression here is conditional on its unchanged-source/model requirements. | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_history | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. This rule completes the existing frozen-history/remaining-life policy; it does not require retrospective replacement of historical life fractions at every life revision. Keep the original asset key, each native-unit source s and version, exact product/event gate, all beneficiary-period cohorts c, immutable raw measurements and accepted postings. Before actual final retirement, life/utilization revisions freeze historical fractions and allocate only the remaining fraction using the existing evidenced remaining driver; require 0<=F_prev_all<=1 and include the current interval and all future beneficiaries in the positive remaining denominator. A late first-observed capital source uses each historical accepted fraction and the same remaining ledger, not a full event-year charge. Keep the existing separate drivers: tanker engine-on hours including idle/empty/pumping and skid/hose connected-operation hours, each with all users and periods in the same equipment-specific unit. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_final_shares | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At actual final retirement set w_c=u_actual_c/U_final with U_final=sum_all_original_beneficiaries(u_actual)>0; all final shares sum to one, including non-study/failed/standby responsibilities already prescribed by the original driver. A transfer to continued use is not final retirement. Zero or unknown lifetime activity, unsupported prior fractions or missing original cohorts prevents final allocation; retain raw totals and the gap, never equal-split or invent use. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_source_revision | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For source correction before retirement use each original cohort accepted fraction g_c; at final retirement use g_c=w_c. Q_s,new is the evidenced FULL source quantity before allocation in its original card unit, not a remaining unallocated balance or a previously weighted amount. B_s,c is the actual previously booked attributed raw quantity for that source/cohort, with its quantity/model version and previous normalized result. Calculate A_s,c,new=Q_s,new*g_c and delta_A_s,c=A_s,c,new-B_s,c. A newly observed source has B=0 where unposted; a correction to an existing source replaces that source ID, not an additional purchase or disposal event. The shortcut (g_new-F_booked)*Q_s is valid only when the source quantity and linked model version are unchanged and B=F_booked*Q_s; otherwise use A_new-B. Reconcile physical gross receipt/stock/transfer/handover separately; signed corrections are model amendments, never negative physical exchanges or substitution credits. For a changed linked supply/treatment model, replace the affected original-cohort inventory/results even if delta_A=0; remove the previous model contribution and record both versions and scope. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_normalization | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Normalize the complete revised attributed amount once by the original cohort current verified reference denominator N_c (Q, D or A as locally named). If N_c itself changes, replace the complete old normalized result; do not add delta_A/new_N to a result based on old_N. Zero-output events retain their already prescribed causal parent; a parent without positive N_c retains raw attributed totals and an incomplete normalized result, never shifts to an unrelated positive-output period. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_scope | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Apply this to each actual capital-origin source covered by the existing gates, including separately counted initial fill, post-acceptance capital-site events and actual retirement carriers where present; do not create new sources, extend background boundaries, duplicate included supply stages or apply lifetime fractions to routine operation. These are explicit candidate accounting rules, not claimed numerical requirements of the cited classification or technical sources. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_completion | all inventory rows | Unbound card identities remain unverified; before complete foreground publication require hash-bound direct official response/receipt and check UUID/status, EN/ZH official names, actual object/state, direction/type, primary property/unit and compartment/gate. Search hits or old conclusions are insufficient. Existing AC binding is historical verified point-of-use identity, not a fresh check. Reference service cannot use water commodity UUID. | direct response/receipt and row-specific review |
| scope_and_occurrence | all inventory rows | Before collection and monthly signed vehicle/site/provider/job/stock review confirm each required or conditional object occurred or was absent. Verify actual specific equipment configuration and service contract boundary, one property/unit per row and no duplicate included initial fills/supplies/portable energy/waste. Actual unknown/extra chemical, packing, repair, species, medium or on-site treatment needs a precise foreground extension before completeness, never generic other-material card or zero. | signed occurrence/configuration and contract no-overlap matrix |
| acceptance_quality | accepted_distribution_service | Before collection name local potable/customer criteria, sampling location/method/frequency and competent decision maker. Record supplier source and recipient unload results and all failures with chain of custody. Supplier source tests remain in D_s production; recipient test service starts at unloading sample gate. Signature alone is not potable compliance; WHO/King County emergency dose/residual/time values do not establish global limits. | approved local test protocol, custody and signed decisions |
| projection_translation | all inventory rows | Compare EN/ZH every object, direction/type, UUID/name, single property/unit, formula/denominator, condition/negation/strength and gate. All mandatory scope, attribution, collection, calculation and quality requirements must appear in supported source tables and actual structured/guidance; schema/fingerprint/name markers alone are not semantic/scientific approval. | bilingual semantic review, parsed arrays and deterministic projection comparison |
| inv_event_attribution | loading_electricity; delivery_diesel; delivery_co2_fossil; delivery_co2_biogenic; delivery_co; delivery_ch4; delivery_n2o; delivery_no; delivery_no2; delivery_so2; delivery_pm25; delivery_pmcoarse; delivery_nh3 | Observed same-object post-acceptance one-time site events use foreground_capital_events; recurring use stays original cohort. | Existing collection protocols and evidence of each listed inventory row. |
| inv_emission_evidence | delivery_co2_fossil; delivery_co2_biogenic; delivery_co; delivery_ch4; delivery_n2o; delivery_no; delivery_no2; delivery_so2; delivery_pm25; delivery_pmcoarse; delivery_nh3 | Screen actual vehicle/control/fuel before collection; use one measured species mass or documented source-specific factor under emission_species. | Existing collection protocols and evidence of each listed inventory row. |
| inv_retired_carrier | retired_tanker; retired_skid; retired_hose | One characterized complete supplied-object waste carrier, net kg with actual fluids removed/included explicitly reconciled. Actual terminal mass follows the original asset final actual-lifetime shares and source-specific amendments under equipment_share; no future unobserved waste or paired receiver input is invented, and no off-site treatment/capital chain is expanded. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | rule | source_ids |
| --- | --- | --- |
| reference_gate | Require unique1m3 accepted_distribution_service output, positive A and road K>0, all qualifiers, original-load custody/vehicle return and cohort waste handover closure. Reject water commodity reference, prior-cohort leakage or unresolved destination. |  |
| basis_and_conservation | Check custody_balance and commodity_ratio, once-only A, complete empty/failed/idle/pump events, foreground services/equipment/maintenance and actual waste handover. Check same-object conversion, fixed equipment driver and no whole asset/initial fill/replacement/service-resource duplication. No background recursion, future receipt or off-site treatment species in foreground. At final retirement verify all-user actual lifetime driver, each source booked ledger, w_jk and signed delta_jkx, and versioned original-cohort A_k amendments under equipment_share; no remaining-hours division, disposal-year residual dump or negative physical-flow credit. |  |
| validate_capital_amendment | Verify the original driver, freeze/remaining ledger, actual final w, each source full Q_s/B/version, original N and whole normalized-result replacement under capital_source_amendment. Recalculate unchanged-quantity share corrections, changed quantity with unchanged share, changed model with zero physical delta, corrected original N and zero-output cases; verify mutually exclusive capital/recurring components and all beneficiaries. Missing traceable old postings or positive denominators remains incomplete; prohibit disposal-year fallback, negative physical flows, duplicate normalization or second shares. |  |
| completeness_truth | Actual unbound identities, missing raw quantities/occurrence, service gates, local acceptance evidence, unresolved balances/handover or unsupported emissions prevent complete foreground data. Candidate/authored and aligned/localized markers are not methodology/publication approval. Inspect actual EN/ZH and machine guidance obligations before handoff. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground own-account tanker distribution-service candidate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Original dedicated contracted diesel potable-water tanker route,1m3 net accepted unloading; consuming model adds source-specific D_s/A production and rejected/returned/lost fate without credit. Supplied equipment and service inputs retain exact gates and one property/unit. |
| excluded_use | Mains, bottled/non-potable/irrigation water, other modes, broker-only supply, distributor intermediate storage, standalone water commodity, whole supplier/receiver lifecycle inventory or proof of potable compliance. |
| required_metadata | All reference qualifiers; original load IDs/source D_s/A/R_s/A/L_s/A, actual temperatures/density and closed custody/return; physical idle/failed/pump events; equipment net mass and original service share; defined service method/hours/contract matrix; actual waste handover gates/receipts/stocks; quantity/occurrence/calibration and uncertainty. |
| required_quality_disclosure | Foreground-only scope, background-link gates/de-duplication, unbound identities, missing data/factors, service scope and life uncertainty, local acceptance specification and candidate/aligned state; no methodology approval. |
| update_trigger | Route/gate/specification/vehicle or supplied equipment configuration/service contract/chemical/waste handover/actual release/life assumption changes or new official identities. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc30-69230 | official_guidance | UNSD, CPC Version 3.0 subclass 69230 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69230 | Classification context only: own-account water distribution by trucks/other means; exclusions; narrower route chosen by this PCR |
| who-tanker-2013 | official_guidance | WHO/WEDC, Delivering safe water by tanker, Technical Note 12, July 2013, pp.12.1–12.2, Box 12.2. https://www.who.int/docs/default-source/wash-documents/wash-in-emergencies/technical-notes-on-wash-in-emergencies/who-tn-12-delivering-safe-water-by-tanker.pdf | Emergency-route operation, fuel/mileage/maintenance/custody record categories and quality-conditioned delivery only. Foreground boundary/allocation and single-object/property decisions are PCR choices; no numeric logistics assumptions adopted |
| who-cleaning-2013 | official_guidance | WHO/WEDC, Cleaning and disinfecting water storage tanks and tankers, Technical Note 3, July 2013, pp.3.1–3.4. https://www.who.int/docs/default-source/wash-documents/wash-in-emergencies/technical-notes-on-wash-in-emergencies/who-tn-03-cleaning-and-disinfecting-water-storage-tanks-and-tankers.pdf | Cleaning/rinsing/disinfection sequence and liquid-waste fate need; adaptation to distributor equipment is author-defined. No source dose or chemical formulation treated as universal or sodium-carbonate recommendation |
| kingcounty-tanker-snapshot | official_guidance | Public Health—Seattle & King County, Guidelines for truck transportation of potable water for public use, snapshot 2026-10-27. https://kingcounty.gov/en/dept/dph/health-safety/safety-injury-prevention/emergency-preparedness/personal-preparedness/truck-transportation-of-water | Independent regional emergency guidance: approved source, cleaning/testing, delivery records and preventing disinfectant discharge to streams; illustrates jurisdiction-specific conditions, no numerical adoption |
