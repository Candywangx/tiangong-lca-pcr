---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tin-unwrought
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tin, unwrought

## 1. Scope and Applicability

This PCR covers foreground production of tin in unwrought market form from received tin concentrate, received tin scrap, or a declared mixture of primary and secondary tin-bearing feed. It covers on-site feed preparation, pyrometallurgical reduction or secondary recovery, refining when performed, casting or granulation into the declared unwrought form, internal recovery loops, direct emissions control, and management of process residues up to the facility gate.

The PCR covers non-alloyed tin and tin alloys only while they remain in an unwrought market state. It excludes tin ores and concentrates as final products; semi-finished bars, rods, profiles, wire, plate, sheet, strip, foil, tubes, powders and flakes; fabricated tin articles; mining and beneficiation unless they occur inside the declared foreground facility; use; and end-of-life. Upstream production of purchased feed, electricity, fuels, oxygen, water, chemicals, and transport is represented by linked upstream datasets rather than duplicated in the foreground inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tin-unwrought |
| classification_refs | CPC 3.0: 41443, Tin, unwrought (`un-cpc-3-0-structure-2025`) |
| covered_products | Non-alloyed tin and tin alloys sold in declared unwrought forms, including ingots, blocks, slabs, billets, pigs, cakes or granules, when these forms are the direct facility-gate product rather than a semi-finished article. |
| excluded_products | Tin ores and concentrates sold as such; waste and scrap sold without recovery; semi-finished tin products; powders and flakes; fabricated articles; products whose tin grade, alloy composition or unwrought form is not declared. |
| representative_product | Refined non-alloyed tin in cast ingot form; the International Tin Association study uses refined tin at 99.95% as its representative functional-unit product (`international-tin-association-refined-tin-lca`). |
| production_route | Declared primary pyrometallurgical reduction of oxidic tin concentrate, declared secondary recovery from tin-bearing scrap or residues, or a measured combination, followed by route-specific refining and unwrought-form production. |
| market_state | Saleable solid unwrought tin at the producing facility gate, with grade or alloy composition, physical form, primary/secondary feed share, geography and technology declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable tin in the declared unwrought grade and physical form at the producing facility gate. |
| How much | 1 kg net mass of saleable unwrought tin. |
| How well | Conforms to the producer's declared grade or alloy specification; free of production packaging and excluding returned, internally recycled or off-specification material. |
| How long or cycle | One production reporting period normalized to one released product batch; no use duration is assigned. |
| reference_flow_link | `tin_unwrought_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tin, unwrought `07de00e1-3c49-4ce8-9ca2-effb07762623` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | grade or alloy designation and composition; unwrought physical form; primary and secondary feed shares on a tin-content basis; feed types and supplier boundaries; production technology; facility geography; reporting period; product moisture or surface-condition convention; allocation and recycling model; direct-emission and residue-treatment boundaries |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and solid material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net mass. Exclude pallets, moulds, return metal and production packaging; state the moisture and surface-condition convention for feed and product. |
| `tin_content_basis` | primary/secondary feed shares and tin recovery | Mass of contained tin | kg Sn | Determine contained tin from representative sampling and assay for each feed and output lot; never substitute gross material mass for contained-tin mass in recovery or route-share calculations. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity before conversion. When records are in kWh, multiply by 3.6 MJ/kWh and disclose voltage, grid or contractual mix, and the delivery-loss boundary. |
| `gas_reference_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and the reference temperature, pressure and dry/wet convention; convert supplier-normal or standard cubic metres only with the declared reference conditions. |
| `water_mass_conversion` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass or convert a calibrated volume record using measured or documented density at the stated temperature; count only fresh make-up or net transferred water and disclose recirculation. |
| `direct_air_emissions` | fossil carbon dioxide, sulfur dioxide and particulate matter | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report direct post-abatement releases from the foreground facility. Do not add upstream electricity or purchased-fuel supply-chain emissions to these rows. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Tin-bearing concentrate, tin waste and scrap, or another specifically declared tin-bearing secondary feed is received at the foreground facility gate with measured wet or dry mass, representative assay, moisture, source and product-or-waste status. |
| starting_condition_role | Gate-to-gate foreground starting condition for unwrought tin production; upstream mining, beneficiation, scrap collection, pre-treatment outside the facility and transport are linked as upstream systems. |
| product_classification_scope | The reference output is CPC 3.0 subclass 41443; input classifications do not redefine canonical PCR identity. |
| recursive_input_rule | Any purchased unwrought tin in the same product category is recorded as a separate input with its own upstream dataset and is not recursively remodelled under this foreground production system. Internal return tin is recorded as an internal loop and excluded from purchased input totals. |
| upstream_dataset_requirement | Every purchased feed, energy carrier, utility and chemical requires a geography-, technology-, state- and delivery-boundary-appropriate upstream dataset or an explicit data gap; secondary feed also requires the declared recycling or cut-off model. |
| disclosure | Declare feed routes and shares, contained-tin assay basis, preprocessing ownership, technology, internal recycle loops, refining sequence, alloy additions, product grade and form, abatement configuration, water recirculation, residue destinations, allocation method and temporal/geographic coverage. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_feed_gate` | foreground starting boundary | Start at measured receipt of specifically identified tin-bearing feed; do not silently include or exclude upstream mining, beneficiation, scrap preparation or transport. | `ec-jrc-nfm-bref-2017` |
| `boundary_route_condition` | primary and secondary route applicability | Declare at least one actual production route. Record `tin_concentrate` only for primary concentrate reduction and `tin_scrap` only for the secondary-feed route; a mixed route records each independently. | `ec-jrc-nfm-bref-2017`; `international-tin-association-refined-tin-lca` |
| `boundary_internal_recycle` | returned dust, dross, slag and metal | Track internal return quantities for mass balance but do not count the same material as both an external output and an internal recycle. | `ec-jrc-nfm-bref-2017` |
| `boundary_facility_gate` | reference product ending boundary | End when conforming unwrought tin is weighed and released at the producing facility gate; downstream working, fabrication, use and end-of-life are excluded. | `un-cpc-3-0-structure-2025`; `international-tin-association-refined-tin-lca` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tin_unwrought_production` | Feed preparation, tin recovery, refining, casting and emission control | required | Always include the measured foreground production system; at least one declared primary or secondary feed route must be active, while route-specific exchanges are recorded only when their conditions apply. | Foreground production from received tin-bearing feed through saleable unwrought tin, including internal recovery and direct abatement. | 1 kg net saleable unwrought tin output |

### Process: Feed preparation, tin recovery, refining, casting and emission control (`tin_unwrought_production`)

#### Inputs

##### Product flows

###### Primary-route tin concentrate (`tin_concentrate`)

Record this exchange only when oxidic tin concentrate crosses the facility boundary for primary pyrometallurgical production. Keep each supplier lot's gross mass, dry mass, moisture and tin assay linked.

- Selected flow: Tin concentrate `134347e0-d564-42f8-a82c-328a2b6f9618`
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of received tin concentrate consumed by the reporting-period product system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_assay`
- Sources: `ec-jrc-nfm-bref-2017`

###### Secondary-route tin scrap (`tin_scrap`)

Record separately received tin waste and scrap only when it has crossed the facility boundary for recovery. Declare legal product-or-waste status, contamination, pre-treatment and contained-tin assay.

- Selected flow: Waste and scrap of tin `e7221683-4cdd-4aa4-ab05-95a830757c21`
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of received tin scrap consumed by the reporting-period product system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_assay`
- Sources: `ec-jrc-nfm-bref-2017`

###### Primary-route metallurgical coke (`metallurgical_coke`)

Record metallurgical coke only when it is actually charged as the carbonaceous reductant for oxidic tin feed. Other carbon materials are different exchanges and require their own rows in the foreground implementation.

- Selected flow: metallurgical coke `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass of metallurgical coke
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_assay`
- Sources: `ec-jrc-nfm-bref-2017`

###### Purchased electricity (`electricity`)

Record metered electrical energy consumed by feed preparation, furnaces, refining, casting, ventilation, abatement, water treatment and directly supporting on-site equipment within the declared boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered purchased electricity allocated to the foreground product system and converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_meter`
- Sources: `ec-jrc-nfm-bref-2017`

###### Gaseous natural gas (`natural_gas`)

Record only natural gas consumed on site for drying, furnace firing, refining kettles, casting or afterburners. Keep other fuels as separate implementation rows.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_and_oxygen_meter`
- Sources: `ec-jrc-nfm-bref-2017`

###### Industrial oxygen (`industrial_oxygen`)

Record only purchased or separately metered industrial oxygen used for oxygen enrichment or oxidation. Do not count ambient combustion air as this product input.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered industrial-oxygen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_and_oxygen_meter`
- Sources: `ec-jrc-nfm-bref-2017`

###### Process-water make-up (`process_water`)

Record fresh process-water make-up that crosses the facility boundary or a separately modelled on-site supply boundary. Internal recirculation is disclosed but not repeatedly counted as input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net process-water make-up after subtracting returned or recirculated water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-nfm-bref-2017`

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide only when it is consumed in a declared leaching, impurity-removal, gas-treatment or wastewater-treatment step inside the foreground boundary. Other alkalis remain separate exchanges.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of 100% sodium-hydroxide equivalent consumed, with solution concentration retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_assay`
- Sources: `ec-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable unwrought tin (`tin_unwrought_output`)

This is the reference product after any declared refining, alloy adjustment and casting or granulation. Use the exact Tiangong Chinese baseName in the aligned Chinese rendering while retaining the professional PCR title separately.

- Selected flow: Tin, unwrought `07de00e1-3c49-4ce8-9ca2-effb07762623`
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming output divided by itself to establish exactly 1 kg reference output; report gross output, returns and off-specification deductions separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_release_mass`
- Sources: `un-cpc-3-0-structure-2025`; `international-tin-association-refined-tin-lca`

##### Waste flows

###### Net exported tin-smelting slag (`tin_smelting_slag`)

Record the measured mass of tin-smelting slag only when it leaves the foreground system for recovery, treatment or disposal. Slag returned to a furnace is an internal loop and is not an external waste output.

- Selected flow: Tin-smelting slag
- Flow property / unit: Mass / kg
- Amount rule: measured net mass leaving the foreground boundary, classified by destination and hazardous status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_dispatch`
- Sources: `ec-jrc-nfm-bref-2017`

###### Net exported tin-production baghouse dust (`tin_baghouse_dust`)

Record captured dust from tin-production bag filters only when it leaves the foreground system. Dust returned internally is recorded in the internal-recycle ledger and excluded from this net output.

- Selected flow: Baghouse dust from tin production
- Flow property / unit: Mass / kg
- Amount rule: measured net captured-dust mass dispatched outside the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_dispatch`
- Sources: `ec-jrc-nfm-bref-2017`

###### Net exported tin-refining dross (`tin_refining_dross`)

Record dross produced by the declared tin-refining operation only when it leaves the foreground system. Preserve impurity composition and recovery or disposal destination.

- Selected flow: Tin-refining dross
- Flow property / unit: Mass / kg
- Amount rule: measured net dross mass dispatched outside the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_dispatch`
- Sources: `ec-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fossil_carbon_dioxide_to_air`)

Record direct fossil carbon dioxide from carbonaceous reduction and on-site fossil-fuel combustion inside the foreground boundary. Exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured continuous-emission total or calculated direct fossil CO2 from reconciled fuel and reductant carbon records using the declared calculation method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

###### Direct sulfur dioxide to air (`sulfur_dioxide_to_air`)

Record post-abatement sulfur dioxide released directly to outdoor air when sulfur-bearing feed, fuels or treatment steps make it applicable. The exact unspecified-air Tiangong UUID remains unresolved.

- Selected flow: Sulfur dioxide to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured post-abatement stack and quantified fugitive sulfur-dioxide mass released from the foreground facility
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

###### Direct particulate matter to air (`particulate_matter_to_air`)

Record total post-abatement particulate matter released directly to air when particle-size-specific measurements are unavailable. Do not add captured baghouse dust to this emitted elementary flow.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: measured post-abatement stack and quantified fugitive particulate mass released from the foreground facility
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable unwrought tin output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | route, refining and recovery subprocesses | Avoid allocation by separately metering primary and secondary feed campaigns, recovery steps and independently measured co-product operations. |  |
| `allocation_internal_returns` | internally returned tin metal, slag, dross and dust | Treat a material returned within the declared foreground boundary as an internal loop: retain its quantity for process control and mass balance, but assign neither an external output credit nor a second upstream burden. | `ec-jrc-nfm-bref-2017` |
| `allocation_external_coproducts` | marketable metals, alloys or recovered compounds leaving the system | Report each external co-product's mass, contained metals, quality, destination and revenue. If subdivision cannot avoid allocation, the dataset is incomplete until the chosen physical, economic or substitution method and its justification are reviewed and disclosed; do not silently allocate by gross mass. |  |
| `allocation_secondary_feed` | tin scrap and other secondary feed | Apply one declared recycling model consistently in the linked upstream dataset and the foreground product system; disclose burden-free cut-off, recycled-content, end-of-life or substitution choices and prevent duplicate avoided-burden credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_assay` | `tin_unwrought_production` | concentrate, scrap, coke and sodium-hydroxide inputs | weighbridge, batch ticket, supplier certificate and laboratory assay | timestamp; material identity; supplier; gross, tare and net mass; moisture; tin assay where applicable; solution concentration; batch; destination | Calibrated weighing linked to representative sampling and laboratory or supplier assay; reconcile receipts, stock changes and returns. | kg; mass fraction | each receipt and batch | complete reporting period including opening and closing stock | all foreground receiving and storage points | consumption = receipts + opening stock - closing stock - dispatches; convert solutions to 100% active mass and wet solids to declared dry basis | calibration records; chain of custody; sampling plan; assay method; certificates; stock reconciliation |
| `cp_electricity_meter` | `tin_unwrought_production` | purchased electricity input | revenue and submeters | timestamp; meter id; reading; unit; process area; voltage; grid or contract; import/export | Read calibrated meters and allocate shared loads only with documented operating-hour or engineering evidence. | kWh | hourly or finer, aggregated monthly | complete reporting period | all in-boundary process and directly supporting areas | net imported kWh minus separately modelled exports, converted at 3.6 MJ/kWh and normalized to net product | meter calibration; bills; missing-data log; allocation worksheet |
| `cp_gas_and_oxygen_meter` | `tin_unwrought_production` | natural gas and industrial oxygen inputs | custody-transfer or process meter | timestamp; gas identity; volume; temperature; pressure; dry/wet convention; meter id; process area | Use calibrated meters or reconciled supplier deliveries and tanks; keep gases separate. | m3 at declared conditions | continuous or each delivery | complete reporting period | all in-boundary users | reconcile opening/closing storage and purchases, then normalize each gas independently | calibration; supplier statement; reference-condition calculation; balance closure |
| `cp_water_balance` | `tin_unwrought_production` | process-water make-up | water meter and tank balance | timestamp; source; make-up; discharge; recycle; evaporation estimate; storage change; unit; density basis | Meter make-up and discharge separately; quantify recirculation for disclosure without counting it again as external input. | kg or m3 with density | daily or finer | complete reporting period and representative operating states | all process, cooling, gas-cleaning and treatment systems in boundary | net external make-up = inflow + opening storage - closing storage - exported unused water; convert volume to mass under `water_mass_conversion` | calibrated meters; water-balance closure; density record; maintenance and leak log |
| `cp_product_release_mass` | `tin_unwrought_production` | reference product output | certified product scale and release record | batch; grade/alloy; composition; form; gross, tare and net mass; off-spec mass; return mass; release status | Weigh each released lot and link laboratory release to the same batch. | kg | each batch | complete reporting period | all product casting, granulation, storage and dispatch points | net saleable output = released conforming mass - returned mass; normalize all exchanges by this output | calibration; release certificate; assay; inventory reconciliation |
| `cp_residue_dispatch` | `tin_unwrought_production` | slag, baghouse dust and refining dross outputs | container scale, manifest and destination record | residue identity; origin; mass; moisture; composition; hazardous status; internal return; consignee; treatment route | Weigh each residue movement and distinguish internal return from external dispatch. | kg | each movement | complete reporting period | all residue generation, storage, return and dispatch points | net external output = dispatch outside boundary - material returned from external processing when included; never include internal recycle | scale calibration; waste manifest; assay; chain of custody; destination acceptance |
| `cp_direct_air_emissions` | `tin_unwrought_production` | direct CO2, SO2 and particulate outputs | continuous monitor, stack test, fuel/reductant record and fugitive estimate | source; pollutant; concentration; flow; operating time; fuel/reductant quantity and carbon; abatement status; uncertainty; detection limit | Use valid continuous monitoring or representative stack testing; calculate only where measurement is unavailable and document factors and oxidation assumptions. | kg and source measurement units | continuous where installed; otherwise each representative campaign | covers normal operation, start-up, shutdown and material variability | every in-boundary point and quantified fugitive source | integrate concentration × dry gas flow over time, reconcile with calculation method, subtract no captured residue from an already post-abatement measurement, normalize to net product | monitor QA/QC; test report; calibration gas; operating log; uncertainty and data-gap record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period exchange amount / reporting-period net saleable unwrought tin mass | exchange amount; `cp_product_release_mass` net output | exchange per 1 kg reference product |  |
| `calc_dry_feed` | moist concentrate, scrap and residues | dry mass = net wet mass × (1 - measured moisture mass fraction) | calibrated mass; representative moisture | kg dry material |  |
| `calc_contained_tin` | feed, product, residue and co-product | contained tin = dry material mass × representative tin mass fraction | dry mass; assay | kg Sn and tin recovery reconciliation |  |
| `calc_route_share` | mixed primary/secondary production | route share = contained tin entering from the declared route / total contained tin entering from all external tin-bearing feed | contained tin by feed lot and route | primary and secondary tin-input shares |  |
| `calc_electricity_mj` | purchased electricity | electricity (MJ) = metered electricity (kWh) × 3.6 | net imported kWh | MJ electricity |  |
| `calc_solution_active_mass` | sodium hydroxide solution | active NaOH mass = solution mass × certified or measured NaOH mass fraction | solution mass; concentration | kg 100% NaOH equivalent |  |
| `calc_direct_co2` | direct fossil CO2 when not continuously measured | apply the declared carbon-balance or accepted jurisdictional method separately to each fossil fuel and reductant; retain carbon content, oxidation and non-energy-use assumptions | fuel and coke use; carbon analyses; accepted factors; measured carbon retained in products/residues | kg direct fossil CO2 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_route` | product and tin-bearing feed | Link every batch to an exact material identity, product-or-waste status, grade/composition, route and boundary; do not merge primary and secondary feed into an unassayed umbrella total. | batch genealogy; supplier documents; assays; route ledger |
| `dq_measurement` | mass, energy, gas and water records | Use calibrated instruments with units, reference conditions, missing-data treatment and conversion records retained. | calibration certificates; meter logs; conversion worksheet |
| `dq_temporal` | reporting period | Cover a representative continuous period including planned and unplanned operating states; disclose exclusions, shutdowns, stock changes and campaign changes. | production calendar; downtime log; stock reconciliation |
| `dq_completeness` | inventory | Reconcile purchased feed, contained tin, product, residues, internal returns, energy, water and direct emissions; investigate material gaps rather than balancing with an unspecified exchange. | signed mass/energy/water balances; gap log; corrective actions |
| `dq_abatement_and_destination` | direct emissions and residues | Identify measurement as pre- or post-abatement and retain the actual residue destination, internal return status and treatment evidence. | stack schematic; abatement operating log; manifests; treatment receipts |
| `dq_representativeness` | published dataset | State facility geography, furnace and refining technologies, feed mix, grade/form, year and allocation/recycling model; do not claim industry-average representativeness from a single facility without a reviewed aggregation design. | dataset metadata; technology description; sampling and aggregation record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference flow UUID, Mass property, mass unit group and 1 kg reference amount must match; the data package must declare grade/alloy, form, route shares, geography, technology and reporting period. | `un-cpc-3-0-structure-2025` |
| `validate_route_applicability` | conditional feed and utility rows | A primary-route concentrate or coke amount is invalid without a declared primary reduction route; a tin-scrap amount is invalid without a declared secondary route; conditional utilities and chemicals require a named consuming operation. | `ec-jrc-nfm-bref-2017` |
| `validate_tin_balance` | feed, product, co-product, residue and internal return | Calculate a contained-tin balance using compatible dry-mass and assay bases. An unexplained imbalance or use of gross feed mass as tin content is an error. |  |
| `validate_no_double_counting` | internal recycle and external outputs | The same slag, dust, dross or returned metal quantity must not be both an internal return and an external output, and secondary-feed credits must not be counted twice. | `ec-jrc-nfm-bref-2017` |
| `validate_direct_emissions` | CO2, SO2 and particulate matter | Direct-emission rows must represent the foreground facility only, state post-abatement status and source coverage, and exclude upstream electricity and fuel-supply emissions. | `ec-jrc-nfm-bref-2017` |
| `validate_atomic_exchanges` | process inventory | Each selected flow must be one concrete material, waste or emission. Unlisted fuels, fluxes, alloy additions, treatment reagents, wastes or pollutants used by the actual route require separate rows rather than aggregation into an umbrella exchange. |  |
| `validate_unresolved_uuids` | slag, dust, dross and sulfur dioxide rows | UUID-empty rows may be collected by their exact declared physical identity but cannot be represented by a generic or wrong-compartment proxy; keep them flagged for UUID resolution. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for saleable unwrought tin at a producing facility gate. |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` after methodology and data-quality review. |
| allowed_use | Product carbon-footprint and LCA models requiring declared facility or aggregated unwrought-tin production; supply-chain modelling where grade, form, route mix, geography, technology, allocation and recycling model are compatible. |
| excluded_use | Mining concentrate, semi-finished or fabricated tin products; undeclared alloy grades; generic global or national averages derived from one site; consequential recycling claims without an explicit model; substitution for route- or grade-incompatible production. |
| required_metadata | PCR id and version; flow UUID; grade/alloy composition; unwrought form; facility geography; technology; feed identities; primary/secondary contained-tin shares; upstream boundaries; reporting period; allocation and recycling model; abatement and water systems; residue destinations. |
| required_quality_disclosure | Primary data share; temporal, geographical and technological representativeness; meter and assay coverage; contained-tin balance; missing-data treatment; uncertainty; allocation sensitivity; unresolved UUID rows; deviations from this PCR. |
| update_trigger | Material change in feed route or share, furnace/refining/casting technology, energy supply, product grade or form, abatement, water system, residue destination, allocation/recycling model, facility geography, or when data age no longer represents current operation. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04). | Official CPC 41443 product identity and classification boundary. |
| `ec-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries*, 2017, DOI 10.2760/8224, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf (retrieved 2026-09-04). | Primary oxidic-feed reduction with carbon or coke; secondary tin-bearing feed; refining routes; material, energy, oxygen, gas, water, residue and direct-emission inventory structure; abatement, internal recovery and water-management boundary rules. |
| `international-tin-association-refined-tin-lca` | Literature (`literature`) | International Tin Association, *Life Cycle Assessment of tin production*, https://www.internationaltin.org/reports/lifecycle-assessment-of-tin-production/ (retrieved 2026-09-04). | Representative refined-tin product, primary and secondary production coverage, functional-unit context and cradle-to-gate boundary comparison. |
| `china-customs-hs-8001-terminology-2011` | Official guidance (`official_guidance`) | General Administration of Customs of the People's Republic of China, Announcement No. 49 of 2011, attachment to the China-Costa Rica Free Trade Agreement rules of origin, heading 8001 “未锻轧锡”, reproduced in *China Foreign Trade and Economic Cooperation Gazette*, 2011 Issue 53, https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web2757/site/picture/zcom/upload/20111130/U201111301322643543135.pdf (retrieved 2026-09-04). | Professional Chinese product-category title and official tariff terminology. |
