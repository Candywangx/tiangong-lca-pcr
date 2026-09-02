---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-other-animals
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Butter and other fats and oils derived from milk of other animals

## 1. Scope and Applicability

This PCR covers butter, dairy spreads, butterfat, anhydrous milkfat, butter oil, ghee, and other milk-derived fats or oils whose milk source is an animal other than cattle or buffalo. It applies to natural, canned, melted, fractionated, recombined, resolidified, salted, and comparable market states when the declared product remains a milk fat product. The producing data package shall identify every source species and retain auditable farm, supplier, receiving, or chain-of-custody evidence linking each milk-derived input to that species.

The category is a residual species gate. Products derived from cattle milk are excluded as CPC 22241, and products derived from buffalo milk are excluded as CPC 22242. A product with an unknown species, a mixed-species input that does not disclose every species, or a classification claim without auditable species evidence shall be assigned `manual_review`; it shall not be represented as conforming to this PCR. Non-dairy fat substitutes and products in which a non-milk constituent replaces milk fat are excluded. Product identity and naming follow the applicable definitions in CXS 279-1971, CXS 280-1973, and CXS 206-1999, but their composition limits and quality specifications are not default LCI amounts.

The foreground gate begins with receipt of declared other-animal milk, cream, butter, milkfat, or another auditable milk-derived feedstock and ends with the unpackaged product at the factory gate, or with the packaged product at the declared dispatch gate when packaging and storage are included. Upstream animal husbandry and milk production require linked datasets and are not silently absorbed into foreground manufacturing records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-other-animals |
| classification_refs | CPC 3.0: 22249, Butter and other fats and oils derived from milk of other animals |
| covered_products | Butter, dairy spread, butterfat, anhydrous milkfat, butter oil, ghee, and other fats or oils derived from milk of animals other than cattle or buffalo; natural, canned, melted, fractionated, recombined, resolidified, salted, and comparable market states |
| excluded_products | Cattle-milk products (CPC 22241); buffalo-milk products (CPC 22242); unknown or unaudited source species; non-dairy substitutes; products whose non-milk constituents replace milk fat |
| representative_product | One declared market-ready butter or milkfat product from an identified non-cattle, non-buffalo source species |
| production_route | Receipt and verification of other-animal milk-derived feedstock, route-specific fat separation or concentration, butter working or milkfat clarification, optional formulation, packaging, and storage |
| market_state | Unpackaged factory-gate product or packaged dispatch-gate product, with species, product form, composition basis, packaging state, and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared butter or other fat or oil derived exclusively from milk or milk products of identified animals other than cattle or buffalo |
| How much | 1 kg net product at the declared gate |
| How well | Meets the declared product identity and market specification; records source species, product form, fat and moisture measurement basis where relevant, and packaging and storage state |
| How long or cycle | One production lot delivered at the declared factory or dispatch gate; no use-duration function is assigned |
| reference_flow_link | The Tiangong product flow identified below, qualified by source species, product form, route, composition basis, gate, packaging state, and storage condition |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source animal species for every milk-derived input; species evidence reference; product form; production route; fat and moisture measurement basis where applicable; salted or unsalted state where applicable; gate; packaging state; storage condition; geography; production period; lot or campaign identifier |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing source-species identity or evidence triggers `manual_review`; other missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the net reference product as kg at the declared gate; tare packaging unless the study explicitly models packaged gross mass as a separate flow. |
| `lot_mass_balance` | milk-derived feedstocks, products, co-products, losses, and recovered residues | Mass | kg | Preserve measured lot or campaign masses and their moisture or composition bases; normalize only after the mass-balance period and reference-product output are fixed. |
| `energy_carrier_separation` | purchased electricity, purchased heat, and on-site fuels | Energy or mass/volume appropriate to the carrier | kWh, MJ, kg, or m3 | Keep electricity, purchased thermal energy, and each combusted fuel as separate records; document conversions and do not combine unlike energy carriers into an undocumented total. |
| `water_stream_separation` | process water, cleaning water, recovered water, and wastewater | Mass or volume | kg or m3 | Use one consistent density or direct measurement basis for conversion and keep reused water distinct from fresh intake and discharged wastewater. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `species_scope_gate` | product identity and every milk-derived input | Include only products with auditable evidence that every source animal is neither cattle nor buffalo. Unknown species, incomplete mixed-species disclosure, or unaudited classification evidence requires `manual_review`. | `unsd-cpc-3-0-22249`; `codex-cxs-206-1999` |
| `foreground_unit_operations` | declared manufacturing route | Include receiving and cold storage, fat separation or concentration when performed, churning and working for butter routes, heating, clarification, dehydration, fractionation, recombination, resolidification or flavour development when performed, direct process utilities, cleaning, product recovery, wastewater handling, and on-site waste handling. | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `eu-fdm-bat-2019-2031` |
| `upstream_linkage` | purchased milk-derived feedstocks, ingredients, packaging, energy, water, chemicals, and transport | Record each purchased input as a visible product flow and link it to a geographically and technologically representative upstream dataset; do not replace supplier activity data with a composition limit or BAT performance level. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `direct_emissions_and_wastes` | foreground site | Record measured or calculated direct emissions, wastewater streams, product losses, residues, and wastes generated by included operations, together with treatment route and data provenance. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `packaging_and_storage_gate` | packaged dispatch-gate product | Include primary, secondary, and tertiary packaging plus storage or refrigeration only when they occur before the declared gate; otherwise disclose their exclusion. | `eu-pef-2021-2279` |
| `no_silent_cutoff` | foreground inventory | Record all known inputs and outputs. Any exclusion shall be explicitly justified, quantified where possible, and reported as a data gap or downstream study-specific cut-off rather than silently omitted from the foreground package. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | receipt of an auditable species-identified milk-derived feedstock at the manufacturing site |
| starting_condition_role | foreground manufacturing entry point and species-identity control point |
| product_classification_scope | CPC 3.0 22249 only; cattle-derived CPC 22241 and buffalo-derived CPC 22242 are excluded |
| recursive_input_rule | A purchased input already belonging to this PCR category remains an explicit product input with its own upstream dataset; do not recursively recreate its manufacturing inside the consuming process. |
| upstream_dataset_requirement | Link milk production or prior milkfat-product manufacture, ingredients, packaging, energy, water, chemicals, and transport to representative upstream datasets with source species and gate compatibility disclosed. |
| disclosure | Declare source species and evidence, input form, product form, production route, foreground gate, included unit operations, packaging and storage state, geography, production period, allocation method, and every exclusion or data gap. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milkfat_product_manufacturing` | Other-animal milkfat product manufacturing | required |  | foreground manufacturing from received species-identified feedstock through unpackaged product | 1 kg unpackaged reference product |
| `packaging_and_dispatch_storage` | Packaging and dispatch storage | conditional | Include when packaging or post-packaging storage occurs before the declared reference gate. | foreground finishing and dispatch | 1 kg packaged reference product |

### Process: Other-animal milkfat product manufacturing (`milkfat_product_manufacturing`)

#### Inputs

##### Product flows

###### Species-identified milk-derived feedstock (`milk_derived_feedstock_input`)

Record each received milk, cream, butter, milkfat, or other milk-derived feedstock separately by source species, supplier lot, product form, composition basis, and upstream dataset. Cattle, buffalo, unknown, and unaudited inputs fail the category gate.

- Selected flow: Other-animal milk, cream, butter, milkfat, or route-specific milk-derived feedstock
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass for each received lot, corrected only to the declared measurement basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Ingredients and processing aids (`ingredients_and_processing_aids`)

Record salt, starter culture, permitted formulation ingredients, and processing aids actually consumed by the declared route. A Codex permission or composition specification establishes product identity only and is not an inventory amount.

- Selected flow: Route-specific ingredient or processing aid
- Flow property / unit: Mass / kg
- Amount rule: issued quantity minus documented return or recovery for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

###### Purchased electricity (`manufacturing_electricity`)

Record metered electricity used by receiving, separation, churning, working, heating, clarification, dehydration, fractionation, recombination, cooling, pumping, and directly attributable cleaning operations.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented allocation from a site meter for the covered lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Thermal energy and on-site fuels (`manufacturing_thermal_energy`)

Record purchased steam or heat and each on-site fuel separately for the route and period. Preserve carrier, quantity, heating-value basis, boiler or heater attribution, and any heat recovery.

- Selected flow: Purchased heat, steam, or route-specific fuel
- Flow property / unit: Energy or carrier mass/volume / MJ, kWh, kg, or m3
- Amount rule: metered heat or measured fuel consumption attributable to the production lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Process and cleaning water (`process_and_cleaning_water`)

Record fresh water entering product-contact operations, process steps, and cleaning separately from recovered or reused water. Preserve the measurement and reuse boundary.

- Selected flow: Water, route- and source-specific
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured intake by source and use for the covered lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-fdm-bat-2019-2031`

###### Cleaning and sanitation chemicals (`cleaning_chemicals`)

Record each cleaning or sanitation chemical actually consumed, including CIP dosing where applicable, without applying BAT dosing or performance values as default LCI.

- Selected flow: Cleaning or sanitation chemical, formulation-specific
- Flow property / unit: Mass / kg
- Amount rule: measured issue, dosing-system record, or inventory reconciliation for the covered lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unpackaged reference milkfat product (`unpackaged_reference_product`)

Record the accepted net mass of the declared product form at the manufacturing gate. The selected Tiangong flow identity is fixed; lot-specific qualifiers establish whether a concrete dataset conforms to this residual species category.

- Selected flow: Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass; normalize to 1 kg reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Saleable co-products and recovered milk constituents (`saleable_coproducts`)

Record buttermilk, skimmed fractions, recovered milk solids, or other saleable outputs separately by measured mass and disposition. Do not classify a flow as a co-product solely to reduce burdens.

- Selected flow: Route-specific saleable co-product or recovered milk constituent
- Flow property / unit: Mass / kg
- Amount rule: measured quantity leaving the process as a product during the mass-balance period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

##### Waste flows

###### Product losses and non-saleable residues (`product_losses_and_residues`)

Record spills, off-specification product, fat-bearing residues, filter residues, and other non-saleable material by measured or reconciled mass and actual treatment route.

- Selected flow: Route-specific product loss or residue to treatment
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or documented mass-balance difference investigated and assigned to a treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019-2031`

###### Manufacturing wastewater (`manufacturing_wastewater`)

Record segregated wastewater volume or mass, discharge or treatment destination, and monitored characteristics relevant to the facility. Recovered product and reused water shall not also be counted as discharged wastewater.

- Selected flow: Wastewater to declared treatment or discharge route
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: metered discharge or documented water-balance result for the covered lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Direct emissions from on-site energy and processing (`direct_site_emissions`)

Record measured emissions or calculate them from collected activity data and documented factors. Keep air, water, and soil compartments and substances distinct.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or calculation from collected fuel, process, and treatment activity data under `calculate_direct_emissions`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Packaging and dispatch storage (`packaging_and_dispatch_storage`)

#### Inputs

##### Product flows

###### Unpackaged milkfat product for packing (`unpackaged_product_for_packing`)

Transfer the measured unpackaged reference product into this process without duplicating production burdens.

- Selected flow: Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac`
- Flow property / unit: Mass / kg
- Amount rule: measured net product mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and allocated tertiary packaging separately by material, recycled-content claim where relevant, supplier, and measured issue or bill of materials.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: product-specific bill of materials reconciled to packed saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

###### Packaging and storage electricity (`packaging_storage_electricity`)

Record packaging-line and pre-dispatch cold-storage electricity included before the declared gate, using metered or documented allocation records.

- Selected flow: Electricity, supplied to packaging and dispatch storage
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented allocation for the packed lot and declared storage interval
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged reference milkfat product (`packaged_reference_product`)

Record accepted net product mass at dispatch. Packaging mass remains a separate inventory input and is not included in the 1 kg net reference amount.

- Selected flow: Butter and other fats and oils derived from milk of other animals `57b3e5ff-3686-4435-96b5-9c09b765a0ac`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass at dispatch; normalize to 1 kg reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

##### Waste flows

###### Packaging losses (`packaging_losses`)

Record rejected, damaged, or unused packaging leaving the process by material and treatment route.

- Selected flow: Packaging waste, material-specific
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or packaging reconciliation for the packed lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | route-specific operations and directly attributable flows | Subdivide unit operations, meters, lots, and cleaning records so directly attributable inputs, outputs, and emissions remain assigned to the product or co-product that causes them. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | inseparable multifunctional processes | When subdivision is not possible, use a documented and quantifiable physical relationship that reflects the function causing the shared flows; explain why it is relevant to the outputs. | `eu-pef-2021-2279` |
| `allocation_other_relationship_fallback` | shared flows without a defensible physical relationship | Use another relationship, such as economic allocation, only after documenting why subdivision and physical allocation are not feasible; use lot-, campaign-, market-, and process-stage-specific quantities and values and disclose sensitivity. | `eu-pef-2021-2279` |
| `allocation_no_universal_factor` | butter, buttermilk, skim fractions, milk solids, residues, and other outputs | Do not apply one universal allocation factor across animal species, product forms, or routes. Codex composition limits, quality criteria, and EU BAT performance levels are not allocation factors or default LCI. | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `eu-fdm-bat-2019-2031` |
| `allocation_output_status` | recovered material, residue, waste, and co-product classification | Classify each output from auditable disposition and economic or legal status at the process gate. A material treated as waste receives its actual treatment burdens; a saleable output remains a co-product subject to the declared allocation rule. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_species_identity` | milkfat_product_manufacturing | source-species eligibility | supplier and receiving identity record | supplier lot; source species; farm or chain-of-custody reference; milk-derived input form; receipt date; accepted or rejected status | reconcile supplier declaration and auditable origin evidence to each received lot; route any unknown, cattle, buffalo, or conflicting result to manual review | not applicable | every received lot | full production period | all supplying origins and receiving sites | no aggregation across lots until every lot passes the species gate | signed supplier evidence, traceable origin record, receiving record, and review disposition |
| `cp_material_balance` | milkfat_product_manufacturing | milk-derived inputs, ingredients, product, co-products, and transfers | lot or campaign mass-balance record | lot id; material id; source species where milk-derived; input mass; output mass; return; recovery; loss; moisture or composition basis; timestamp | calibrated scale, tank measurement, production record, and inventory reconciliation | kg | each receipt, transfer, and output event | each production lot or homogeneous campaign | each manufacturing and packaging site | sum compatible records on one declared basis, investigate imbalance, then divide by accepted net reference-product mass | calibration record, lot genealogy, reconciliation approval, and basis-conversion record |
| `cp_utility_records` | milkfat_product_manufacturing | electricity, purchased heat, steam, and fuels | meter, invoice, or fuel issue record | meter id; carrier; opening and closing readings; fuel quantity; heating-value basis; production period; allocation key; recovered heat | submetering preferred; otherwise reconcile site meter or invoice to operating records using a documented causal allocation key | kWh, MJ, kg, or m3 | continuous or each meter and fuel-reading interval | representative production period covering seasonal operation | each site and attributable utility system | aggregate by carrier and process, subtract documented exports or recovery, and normalize to accepted output | meter calibration, invoice reconciliation, operating-hour record, and allocation rationale |
| `cp_water_and_wastewater` | milkfat_product_manufacturing | fresh water, reused water, and wastewater | water meter, reuse log, and effluent record | source; meter readings; use area; reuse volume; discharge volume; destination; relevant pH, temperature, COD or TOC, nitrogen, phosphorus, chloride, conductivity, and solids where monitored | direct metering and monitoring at the most appropriate process or site level, supported by a water balance | kg or m3 and parameter-specific units | each meter interval and monitoring event | representative production period | each site, water source, reuse loop, and discharge point | keep fresh, reused, and discharged streams distinct; aggregate compatible records and normalize to accepted output | meter calibration, laboratory method, sampling record, and water-balance closure |
| `cp_cleaning_records` | milkfat_product_manufacturing | cleaning and sanitation chemicals | CIP or sanitation batch record | chemical identity; concentration; dose; water volume; temperature; conductivity or pH where used; cycle id; equipment; recovered or discharged quantity | dosing-system log, stock reconciliation, and CIP control record | kg and m3 | every cleaning cycle or reconciled campaign | representative production period | each cleaning circuit and site | aggregate actual chemical and water use by included equipment and normalize to accepted output | dosing calibration, stock reconciliation, CIP trend, and exception log |
| `cp_waste_records` | milkfat_product_manufacturing | product losses, residues, and waste | waste transfer and production-loss record | material identity; source operation; mass; product or waste status; treatment route; transporter or receiver; date | scale record, inventory reconciliation, and waste transfer documentation | kg | every event or container dispatch | representative production period | each site and treatment route | aggregate by material and route, exclude recovered product already returned to process, and normalize to accepted output | scale calibration, transfer note, receiver evidence, and loss investigation |
| `cp_direct_emissions` | milkfat_product_manufacturing | direct air, water, and soil emissions | measurement or emission-calculation record | substance; compartment; measured value or activity data; factor; factor source; control device; operating state; time interval | direct measurement where available, otherwise calculation from collected activity data using a documented factor | kg and parameter-specific units | each monitoring or activity-data interval | representative production period including normal variability | each emission point and site | calculate each substance and compartment separately, aggregate compatible intervals, and normalize to accepted output | analytical report, instrument calibration, activity record, factor provenance, and calculation review |
| `cp_packaging_records` | packaging_and_dispatch_storage | packaging inputs and losses | product-specific bill of materials and packaging reconciliation | material; component; supplier; issued mass; packed units; returned mass; rejected mass; treatment route; recycled-content evidence where claimed | bill of materials reconciled to warehouse issue, packed output, returns, and waste records | kg | each packed lot or packaging campaign | representative production period | each packaging site and line | aggregate by material and component and normalize to accepted net product mass | approved bill of materials, supplier specification, stock reconciliation, and waste record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all foreground quantities | normalized quantity = compatible-period quantity / accepted net kg of declared reference product | `cp_material_balance` plus the applicable collection protocol | quantity per 1 kg reference product | `eu-pef-2021-2279` |
| `close_material_balance` | milk-derived materials, ingredients, products, co-products, recovered materials, and losses | compare total input mass on declared bases with total output, recovery, evaporation or removed water, and loss mass; investigate and disclose unexplained imbalance before normalization | `cp_material_balance`; `cp_waste_records` | reviewed lot or campaign mass balance and disclosed residual |  |
| `calculate_direct_emissions` | direct site emissions not continuously measured | emission by substance and compartment = collected activity quantity multiplied by the documented applicable factor, adjusted only by evidenced control efficiency | `cp_direct_emissions`; `cp_utility_records`; `cp_water_and_wastewater` | kg elementary flow per 1 kg reference product | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocate_shared_inventory` | shared foreground inputs and emissions | apply the declared allocation hierarchy: subdivision first, then a relevant physical relationship, then a justified other relationship; retain numerator, denominator, period, and sensitivity data | process records; co-product quantities; allocation driver records | allocated quantity per 1 kg reference product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_traceability` | every milk-derived input | Retain species evidence linked to each supplier lot. Unknown, conflicting, cattle, buffalo, or incompletely disclosed mixed-species evidence requires `manual_review` and prevents automatic PCR conformity. | `cp_species_identity`; supplier declaration; farm or chain-of-custody record; `unsd-cpc-3-0-22249`; `codex-cxs-206-1999` |
| `dq_technological_representativeness` | route and product form | Data shall represent the actual butter, dairy-spread, anhydrous milkfat, butter-oil, ghee, fractionation, recombination, or other declared route; proxy routes and omitted unit operations shall be disclosed. | process flow sheet, equipment list, lot genealogy, and `eu-pef-2021-2279` |
| `dq_temporal_and_geographical_coverage` | all foreground records | Report production period, geography, operating days, seasonal coverage, and abnormal exclusions; justify why the records represent the declared product and site. | dated source records and `eu-pef-2021-2279` |
| `dq_completeness_and_consistency` | foreground inventory | Include all known inputs and outputs, use compatible mass and energy bases, close material and water balances, and document every exclusion, estimate, proxy, and unresolved gap. | reviewed balances, protocol coverage report, and `eu-pef-2021-2279` |
| `dq_measurement_quality` | meters, scales, laboratory results, and calculations | Retain calibration, sampling, analytical method, factor provenance, calculation version, and reviewer evidence appropriate to each record. | calibration certificates, laboratory reports, calculation workbook, and `eu-fdm-bat-2019-2031` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | reference flow | The reference product flow UUID shall be `57b3e5ff-3686-4435-96b5-9c09b765a0ac`, the Mass property UUID shall be `93a60a56-a3c8-11da-a746-0800200b9a66`, the Units of mass UUID shall be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit shall be kg. |  |
| `validate_species_gate` | product and milk-derived inputs | Confirm auditable source-species evidence for every milk-derived lot and confirm that no source is cattle or buffalo. Unknown, incomplete, or conflicting evidence returns `manual_review` rather than automatic conformity. | `unsd-cpc-3-0-22249`; `codex-cxs-206-1999` |
| `validate_product_identity` | declared product form | Confirm that the product remains milk-derived butter or another milkfat product consistent with the declared Codex identity; do not use Codex composition limits or quality values as LCI quantities. | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `codex-cxs-206-1999` |
| `validate_boundary_and_route` | foreground process map | Confirm that every unit operation actually performed before the declared gate is included, that purchased inputs have upstream links, and that packaging and storage inclusion matches the gate declaration. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_inventory_provenance` | inventory rows | Confirm that every non-zero foreground amount resolves to a collection record or documented calculation and that no BAT performance value, Codex composition limit, or unsupported generic number is used as a default LCI. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`; `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validate_balances_and_double_counting` | material, water, energy, recovery, and transfer records | Confirm balance-period compatibility, investigate unexplained residuals, and verify that reused water, recovered product, internal transfers, and recursive same-category inputs are not double counted. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_allocation` | multifunctional processes | Confirm the allocation hierarchy, driver, period, quantities, disposition evidence, and sensitivity disclosure; reject universal factors applied across species or routes without evidence. | `eu-pef-2021-2279` |
| `validate_data_quality` | publication candidate | Confirm species traceability, route representativeness, geography, time coverage, completeness, calibration, analytical methods, source documentation, and disclosure of estimates, proxies, exclusions, and data gaps. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process data package for manufacture of a declared other-animal milkfat product |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections after validation |
| allowed_use | Products demonstrably within CPC 3.0 22249 with matching source species, product form, production route, geography, period, gate, packaging state, storage condition, and allocation method |
| excluded_use | Cattle-derived CPC 22241; buffalo-derived CPC 22242; unknown or unaudited species; non-dairy substitutes; undisclosed mixed-species products; routes or gates materially different from the represented system |
| required_metadata | PCR id; reference UUIDs; source species and evidence references; product form; route; composition measurement basis where relevant; gate; packaging and storage state; geography; period; lot or campaign; process map; upstream links; allocation method |
| required_quality_disclosure | Protocol coverage; technological, geographical, and temporal representativeness; completeness; calibration and analytical evidence; mass and water balance; allocation rationale; treatment routes; estimates, proxies, exclusions, unresolved gaps, and manual-review disposition |
| update_trigger | Change in source species or evidence chain, product form, route, site, technology, formulation, allocation driver, gate, packaging, storage, upstream dataset, measurement basis, data period, or any material source or regulatory requirement |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-22249` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 22249, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Category identity, included product forms, residual other-animal species gate, and explicit exclusion of cattle 22241 and buffalo 22242 |
| `codex-cxs-279-1971` | standard | Codex Alimentarius, CXS 279-1971, Standard for Butter, https://workspace.fao.org/sites/codex/Standards/CXS%20279-1971/CXS_279e.pdf (retrieved 2026-08-12) | Butter identity, milk-derived raw-material boundary, and route-relevant ingredient context; composition and quality values are not used as default LCI |
| `codex-cxs-280-1973` | standard | Codex Alimentarius, CXS 280-1973, Standard for Milkfat Products, https://workspace.fao.org/sites/codex/Standards/CXS%20280-1973/CXS_280e.pdf (retrieved 2026-08-12) | Anhydrous milkfat, milkfat, butter-oil, and ghee identity and process-boundary interpretation; composition and quality values are not used as default LCI |
| `codex-cxs-206-1999` | standard | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms, https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf (retrieved 2026-08-12) | Milk-product definitions, source-animal declaration, dairy-term identity, and mixed-species disclosure gate |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, ELI: http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Functional unit and reference-flow framing, company-specific data, system boundary, upstream datasets, multifunctionality hierarchy, completeness, data quality, verification, packaging, and transparent cut-off disclosure |
| `eu-fdm-bat-2019-2031` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, ELI: http://data.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Process-level collection of water, energy, raw materials, wastewater, waste gas, residues, monitoring, and cleaning records; BAT performance levels are not used as default LCI |
