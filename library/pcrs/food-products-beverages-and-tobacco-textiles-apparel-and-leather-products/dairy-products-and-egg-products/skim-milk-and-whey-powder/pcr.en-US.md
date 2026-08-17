---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.skim-milk-and-whey-powder
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Skim milk and whey powder

## 1. Scope and Applicability

This PCR covers foreground data production for saleable skimmed milk powder, whey powder, and acid whey powder at the powder-manufacturing factory gate. It applies to powders intended for direct consumption or further processing and includes receipt and conditioning of the declared liquid dairy feed, concentration, drying, powder finishing, containment or packaging, cleaning, and treatment of foreground wastes and emissions.

The product route must be declared. The skimmed milk powder route begins with skim milk or with raw milk when separation is operated inside the foreground. The whey powder route begins with whey or acid whey separated during cheese, casein, or similar manufacture. Upstream production of raw milk, cheese, casein, and externally supplied liquid feed is represented by upstream datasets and is not silently absorbed into the powder plant inventory.

Whey protein concentrates and isolates, lactose powder, casein powder, infant formula, formulated dairy blends, whole milk powder, partly skimmed milk powder, and cream powder are outside this PCR unless a reviewed scope update explicitly includes them. Product composition, route, modification such as demineralisation or neutralisation, and packaging format must be disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.skim-milk-and-whey-powder |
| classification_refs | CPC 3.0:22212 Skim milk and whey powder (exact scope reference) |
| covered_products | Skimmed milk powder; whey powder; acid whey powder; the same powders in bulk or packaged market form |
| excluded_products | Whole and partly skimmed milk powder; cream powder; whey protein concentrates or isolates; lactose powder; casein powder; infant formula; formulated dairy blends |
| representative_product | Saleable skimmed milk powder; whey powder and acid whey powder are covered variants identified by the mandatory powder_type qualifier |
| production_route | Declared liquid dairy feed reception and conditioning, concentration, drying, finishing, containment or packaging, and foreground cleaning and waste handling |
| market_state | Dry, saleable powder at the manufacturing factory gate, in a declared bulk or packaged format |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared dry skimmed milk, whey, or acid whey powder suitable for the stated food, feed, or ingredient application |
| How much | 1 kg net saleable powder at the manufacturing factory gate |
| How well | Powder type and route declared; composition and moisture verified against the applicable Codex identity or a disclosed stricter market specification; contaminated, off-specification, and rework mass excluded from saleable output |
| How long or cycle | One completed production lot at factory gate; no storage life or downstream use duration is credited |
| reference_flow_link | packaged_reference_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable powder |
| Reference product flow | Skim milk powder `bf850eca-76f2-400d-9cfa-b62c10d64c0a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | powder_type; liquid_feed_type; skim_milk_or_whey_origin; whey_acidity_or_modification; dry_matter_content; moisture_content; milkfat_content; milk_protein_content; packaging_format; geography; technology; temporal_scope |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The selected Tiangong product flow is the representative skim milk powder identity; a dataset must not conceal a whey or acid-whey route in its product description or qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Net saleable reference powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net powder mass after excluding packaging, rejected powder, retained samples, rework not released as product, and moisture or composition corrections not accepted by the product specification. |
| `dry_matter_basis` | Product, feed, and dairy co-products used in allocation | Mass and measured dry matter fraction | kg dry matter and kg wet mass | Retain wet mass and dry matter fraction separately. Do not substitute nominal solids when representative lot or campaign measurements are available. |
| `energy_preservation` | Electricity, thermal energy, and fuel records | Energy or fuel-specific property | kWh, MJ, or physical fuel unit | Preserve the metered unit and conversion factor. Report electricity and thermal energy separately; do not convert the EU BAT installation indicator into a product-normalised default without measured throughput and yield. |
| `water_balance` | Process water, condensate, cleaning water, and wastewater | Volume or Mass | m3 or kg | Keep gross withdrawal, recovered or reused condensate, recirculation, and final wastewater discharge as distinct quantities to prevent double counting. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The foreground begins when the declared liquid dairy feed is accepted at the powder-manufacturing site; raw milk separation is included only when performed by the reporting site. |
| starting_condition_role | Gate-to-gate foreground starting condition linked to an upstream dataset for the supplied skim milk, whey, acid whey, or raw milk. |
| product_classification_scope | Skimmed milk powder, whey powder, and acid whey powder within the semantic product boundary; classification code is supporting mapping context only. |
| recursive_input_rule | A purchased skim milk or whey powder used as an ingredient is recorded as an upstream product input with its own dataset and is not recursively manufactured inside this PCR unless it is physically reprocessed on site. |
| upstream_dataset_requirement | Require a geographically and temporally representative upstream dataset for each externally supplied liquid dairy feed and other material or energy input; disclose when a proxy is used. |
| disclosure | Declare feed type and origin, whether separation is foreground or upstream, powder type, whey acidity or modification, allocation level, included shared utilities, treatment location, packaging format, and excluded downstream stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | foreground_powder_manufacturing | Include feed receipt and conditioning, concentration, drying and powder finishing, containment or packaging, cleaning, and foreground waste or emission treatment when operated by or for the reporting site. | `eda-dairy-pefcr-2025`; `eu-fdm-bat-2019` |
| `boundary_upstream_feed` | supplied_liquid_dairy_feed | Model production and transport of externally supplied skim milk, whey, acid whey, or raw milk through explicit upstream datasets; do not count those burdens again in foreground operations. | `eda-dairy-pefcr-2025` |
| `boundary_route_specificity` | whey_and_acid_whey_routes | Identify whether the feed is whey or acid whey and include declared route-specific operations such as clarification, neutralisation, demineralisation, crystallisation, or membrane treatment only when they actually occur. | `codex-cxs-289-1995` |
| `boundary_downstream_exclusion` | factory_gate_dataset | Exclude distribution, retail, consumer preparation, use, and end-of-life after the declared factory gate unless the study goal explicitly extends the boundary and reports those stages separately. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_receipt_and_conditioning` | Liquid feed receipt and conditioning | required | Always included; separation is activated only when raw milk is received | Foreground feed acceptance, storage, filtration, separation, and route-specific conditioning | Accepted kg of declared liquid feed |
| `concentration_and_drying` | Concentration, drying, and powder finishing | required | Always included; route-specific membrane, demineralisation, neutralisation, or crystallisation operations only when performed | Foreground water removal, drying, cooling, sieving, and powder recovery | kg of packable powder intermediate |
| `packaging_and_storage` | Containment, packaging, and factory-gate storage | required | Bulk containment is treated as the packaging format when retail or industrial packs are not used | Foreground final product mass, packaging, and warehouse handling | 1 kg net saleable reference powder |
| `cleaning_and_wastewater` | Cleaning and foreground wastewater management | required | Include shared systems through direct metering or the disclosed allocation rule | Foreground cleaning inputs and wastewater or sludge outputs | Allocated service to the declared production lot |

### Process: Liquid feed receipt and conditioning (`feed_receipt_and_conditioning`)

#### Inputs

##### Product flows

###### Accepted liquid dairy feed (`liquid_dairy_feed`)

Record the measured mass of accepted skim milk, whey, acid whey, or raw milk that crosses the site boundary for the declared powder route. Supplier delivery, acceptance, composition, and origin records provide the value.

- Selected flow: Declared liquid skim milk, whey, acid whey, or raw milk product flow
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass net of rejected deliveries and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_composition`
- Sources: `codex-cxs-207-1999`; `codex-cxs-289-1995`

###### Conditioning electricity (`conditioning_electricity`)

Record metered or allocated electricity for unloading, chilling, storage, pumping, filtration, and separation or route-specific conditioning performed inside this process.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity, or shared-meter electricity allocated by documented operating time and rated or submetered load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_utilities`
- Sources: `eda-dairy-pefcr-2025`

##### Waste flows

###### Rejected feed and conditioning residues (`conditioning_rejects`)

Record rejected liquid feed, filter residue, and other conditioning losses by destination without subtracting them from utility records.

- Selected flow: Dairy processing residue or rejected feed waste
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated residue sent to the declared destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_and_composition`
- Sources:

##### Elementary flows

###### Refrigerant leakage to air (`conditioning_refrigerant_loss`)

Record refrigerant leakage attributable to feed cooling and cold storage when refrigerant-containing equipment is inside the foreground.

- Selected flow: Declared refrigerant emission to air
- Flow property / unit: Mass / kg
- Amount rule: service-log or inventory-balance refrigerant loss allocated to the production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_utilities`
- Sources:

#### Outputs

##### Product flows

###### Conditioned liquid feed (`conditioned_feed`)

Record the mass and dry matter of conditioned liquid feed transferred to concentration and drying. Cream or other co-products separated on site are recorded separately.

- Selected flow: Conditioned skim milk, whey, or acid whey intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass and matched composition sample
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_composition`
- Sources: `codex-cxs-207-1999`; `codex-cxs-289-1995`

###### Separated dairy co-product (`separated_dairy_coproduct`)

Record cream or another saleable dairy co-product only when separation or standardisation occurs inside the foreground.

- Selected flow: Declared cream or dairy co-product
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass with measured dry matter fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_composition`
- Sources: `eda-dairy-pefcr-2025`

##### Waste flows

##### Elementary flows

### Process: Concentration, drying, and powder finishing (`concentration_and_drying`)

#### Inputs

##### Product flows

###### Conditioned liquid feed input (`conditioned_feed_input`)

Carry the measured conditioned feed and its dry matter into evaporation, membrane concentration, crystallisation, or drying without changing the upstream burden.

- Selected flow: Conditioned skim milk, whey, or acid whey intermediate
- Flow property / unit: Mass / kg
- Amount rule: matched transfer mass from `conditioned_feed`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_composition`
- Sources: `codex-cxs-207-1999`; `codex-cxs-289-1995`

###### Thermal energy for concentration and drying (`drying_thermal_energy`)

Record steam, heat, or fuel supplied to concentration and drying, separated from electricity and reported in its measured unit.

- Selected flow: Declared steam, heat, or fuel product flow
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy or fuel quantity converted with a disclosed measured or supplier factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_utilities`
- Sources: `eu-fdm-bat-2019`

###### Process electricity (`drying_electricity`)

Record electricity for pumps, evaporators, membrane systems, spray or other dryers, fluidised beds, fans, cooling, sieving, conveying, and dust recovery that are inside the foreground.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_utilities`
- Sources: `eda-dairy-pefcr-2025`; `eu-fdm-bat-2019`

###### Process water and route-specific materials (`drying_process_materials`)

Record process water and any actually used neutralising, demineralising, membrane-cleaning, lactose-seeding, or anticaking material as separate measured inputs with their substance identities.

- Selected flow: Declared process water or route-specific material product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issue to the production lot; zero when the operation or material is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_utilities`
- Sources: `codex-cxs-289-1995`

##### Waste flows

##### Elementary flows

###### Drying air intake (`drying_air_input`)

Record drying air as an elementary input only when required by the target data model; do not assign an invented mass when airflow is unmetered.

- Selected flow: Air from technosphere or environment according to the target model
- Flow property / unit: Volume / m3
- Amount rule: measured dry-air volume corrected to the declared conditions, otherwise reported as unresolved rather than estimated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_utilities`
- Sources: `eu-fdm-bat-2019`

#### Outputs

##### Product flows

###### Packable powder intermediate (`packable_powder`)

Record the cooled and finished powder accepted for bulk containment or packaging, together with measured moisture and applicable composition results.

- Selected flow: Declared skim milk powder, whey powder, or acid whey powder intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted powder mass before final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_powder`
- Sources: `codex-cxs-207-1999`; `codex-cxs-289-1995`

###### Recovered condensate (`recovered_condensate`)

Record condensate recovered for reuse or exported as a product stream separately from gross process-water withdrawal.

- Selected flow: Recovered water or condensate product flow
- Flow property / unit: Volume / m3
- Amount rule: metered recovered condensate by reuse or export destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_utilities`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Off-specification powder and unrecovered fines (`powder_rejects`)

Record powder rejected from saleable output and unrecovered fines by actual reuse, rework, feed, treatment, or disposal destination.

- Selected flow: Dairy powder residue or off-specification powder waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected powder plus mass-balance-calculated unrecovered fines
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_powder`
- Sources:

##### Elementary flows

###### Channelled drying dust to air (`dryer_dust_to_air`)

Record measured residual dust emitted after the declared air-emission control system; recovered powder returned to product or rework is not an elementary emission.

- Selected flow: Particulate matter or dust emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by corrected dry gas volume for the production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

### Process: Containment, packaging, and factory-gate storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Powder transferred to packaging (`powder_for_packaging`)

Transfer packable powder without duplicating the manufacturing burden.

- Selected flow: Declared packable powder intermediate
- Flow property / unit: Mass / kg
- Amount rule: matched transfer mass from `packable_powder`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_powder`
- Sources:

###### Primary containment and packaging (`primary_packaging`)

Record each bulk liner, sack, bag, carton, pallet wrap, or other primary containment material by material and mass. Packaging mass is not included in the 1 kg net product reference flow.

- Selected flow: Product-specific packaging material flow
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass reconciled with filled units and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `eda-dairy-pefcr-2025`

###### Packaging and warehouse electricity (`packaging_electricity`)

Record electricity for filling, sealing, conveying, palletising, and in-boundary warehouse conditioning.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable skim milk or whey powder (`packaged_reference_powder`)

This is the quantitative reference output. Record accepted net powder mass at factory gate, excluding containment and packaging mass.

- Selected flow: Skim milk powder `bf850eca-76f2-400d-9cfa-b62c10d64c0a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net accepted saleable powder, calculated from filled-unit or bulk-dispatch records and verified by lot mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `codex-cxs-207-1999`; `codex-cxs-289-1995`

##### Waste flows

###### Packaging losses (`packaging_waste`)

Record damaged, trimmed, or rejected packaging by material and actual destination.

- Selected flow: Material-specific packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste or opening stock plus receipts minus closing stock minus packaging in dispatched units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources:

##### Elementary flows

### Process: Cleaning and foreground wastewater management (`cleaning_and_wastewater`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

Record fresh and reused cleaning water separately for cleaning-in-place and other sanitation attributable to the covered processes.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered withdrawal less separately metered non-cleaning use; retain reused water as a distinct internal stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Cleaning agents (`cleaning_agents`)

Record each acid, alkali, disinfectant, and other cleaning agent by product mass and active concentration when relevant.

- Selected flow: Product-specific cleaning agent flow
- Flow property / unit: Mass / kg
- Amount rule: measured issue or purchase-and-stock-balance quantity attributable to the covered processes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater sent to treatment (`process_wastewater`)

Record wastewater volume and pollutant measurements at the transfer to on-site or off-site treatment. Do not add recovered condensate or reused water to final discharge.

- Selected flow: Dairy processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater volume allocated to the covered processes with matched concentration or load samples
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Wastewater treatment sludge (`wastewater_sludge`)

Record allocated treatment sludge by measured wet mass, dry matter, and destination when treatment is inside the foreground.

- Selected flow: Wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured sludge mass and dry matter allocated to the covered wastewater load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources:

##### Elementary flows

###### Treated water discharge (`treated_water_discharge`)

Record final discharged water and measured pollutant loads only when treatment and discharge are inside the foreground.

- Selected flow: Water and measured pollutant emissions to the receiving compartment
- Flow property / unit: Volume / m3 for water and Mass / kg for each pollutant
- Amount rule: measured discharge volume multiplied by matched pollutant concentration, net of explicitly modelled internal recirculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production lot and per 1 kg net saleable powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_assignment` | product_specific_processes_and_inputs | First assign metered process energy, materials, packaging, wastes, and emissions directly to the product and stage that causes them. Subdivide independently measured processes before applying allocation. | `eda-dairy-pefcr-2025`; `eu-pef-method-2021` |
| `allocation_dry_matter` | joint_dairy_products | When direct assignment is not possible for a joint dairy operation, allocate raw dairy feed, transport burdens, and joint processing burdens in proportion to each co-product's measured dry matter output: share_i = DM_i × Q_i / sum(DM_j × Q_j). | `eda-dairy-pefcr-2025` |
| `allocation_factory_remainder` | whole_factory_or_shared_utility_data | Assign available product-specific data first, subtract those quantities from the verified factory total, then allocate only the remainder among covered co-products by measured dry matter output. Directly attributable packaging and ingredients are never included in this remainder. | `eda-dairy-pefcr-2025` |
| `allocation_waste_and_rework` | rejected_product_rework_and_waste | Keep internally reworked material inside the mass balance without counting a second product. Record exported residues and wastes by actual destination; do not claim avoided burdens unless the downstream substitution scenario and quality equivalence are explicitly modelled and disclosed. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_and_composition` | `feed_receipt_and_conditioning` | Liquid feed, conditioned feed, and dairy co-products | Delivery, transfer-meter, laboratory, and rejection records | timestamp; supplier or upstream process; feed_type; wet_mass; dry_matter; fat; protein; moisture; acidity or pH; accepted_or_rejected; co_product_mass | Calibrated weighbridge, tank level or mass-flow meter matched to representative laboratory samples and lot identity | kg; mass fraction; pH | Each delivery or transfer and each representative lot sample | At least one representative operating year, with campaign-level traceability | All sites and lines in the dataset | Sum accepted mass by route and lot; mass-weight composition; reconcile transfers, rejects, and co-products | Calibration, sampling method, laboratory result, supplier record, and lot reconciliation |
| `cp_processing_utilities` | `concentration_and_drying` | Electricity, heat, fuels, water, condensate, and route-specific materials | Meter, invoice, batch issue, operating-hour, and stock records | meter_start; meter_end; fuel_or_steam_quantity; energy_unit; conversion_factor; water_withdrawal; condensate_reuse; material_issue; line; operating_time | Submeter preferred; otherwise documented allocation from a complete site meter using operating time and measured or rated load | kWh; MJ; kg; m3 | Continuous or per batch, aggregated monthly | At least one representative operating year and all included campaigns | All included powder lines and shared utilities | Sum by carrier and process; preserve original units; reconcile submeter totals to site totals before allocation | Meter identification, calibration, invoices, stock reconciliation, and allocation workbook |
| `cp_finished_powder` | `concentration_and_drying` | Packable powder, off-specification powder, fines, and composition | Dryer, silo, laboratory, rework, and waste records | lot_id; powder_type; gross_powder_mass; accepted_mass; rejected_mass; recovered_fines; moisture; dry_matter; fat; protein; whey_pH_or_acidity | Calibrated silo or packaging scales matched to lot laboratory release and rework records | kg; mass fraction; pH | Each production lot | All lots in the representative period | All included drying and finishing lines | Sum accepted and rejected mass separately; mass-weight composition; reconcile feed dry matter to powder, co-products, residues, wastewater, and measured losses | Scale calibration, release certificate, sample plan, and lot mass-balance sign-off |
| `cp_air_emissions` | `concentration_and_drying` | Channelled drying dust | Stack test or continuous monitor and gas-flow records | source_id; control_device; concentration; dry_gas_flow; reference_conditions; operating_time; production_lot | Applicable standard stack method with matched gas flow and production period | mg/Nm3; Nm3; kg | At least the legally applicable frequency; EU BAT comparator uses at least annual monitoring for dairy drying | Representative operating conditions in the reporting period | Every included drying emission point | Convert concentration and corrected gas volume to mass; subtract no recovered powder unless it is demonstrably returned before the emission point | Test report, method, accreditation, reference conditions, and operating-state record |
| `cp_packaging_and_dispatch` | `packaging_and_storage` | Net product, packaging, packaging waste, and dispatch | Filling-scale, bill-of-material, stock, waste, and dispatch records | lot_id; filled_units; net_mass_per_unit; bulk_dispatch_mass; packaging_material; packaging_issue; packaging_stock_change; packaging_waste; dispatch_status | Calibrated filling or bulk scales with stock reconciliation | kg | Each lot and dispatch | All accepted lots in the representative period | All included packing lines and bulk silos | Net product = accepted filled or bulk-dispatched powder excluding packaging; reconcile packaging issued to contained and waste mass | Scale calibration, bill of materials, dispatch record, and stock reconciliation |
| `cp_cleaning_and_wastewater` | `cleaning_and_wastewater` | Cleaning water, agents, wastewater, sludge, and discharge | CIP recipe, flow meter, chemical issue, wastewater meter, sample, and sludge records | cleaning_event; process_line; water_withdrawal; reused_water; chemical_product; chemical_mass; wastewater_volume; pollutant_concentration; sludge_mass; sludge_dry_matter; destination | Event or area meter matched to CIP logs and representative wastewater samples | m3; kg; mg/L | Each cleaning event or continuous meter, aggregated monthly | At least one representative operating year | All included lines and shared treatment systems | Sum gross and reused water separately; pollutant load = matched volume × concentration; allocate shared treatment after direct assignment | Meter calibration, CIP log, chemical stock balance, sample chain of custody, and treatment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | Net saleable powder | Sum accepted net filled-unit mass and accepted bulk-dispatch mass; exclude packaging, rejected lots, rework not released, retained samples, and stock not transferred to the declared factory gate. | filled_units; net_mass_per_unit; bulk_dispatch_mass; dispatch_status; rejected_mass; retained_samples | kg net saleable powder and normalized 1 kg reference flow | `codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `calc_dry_matter_allocation` | Joint dairy co-products | For every joint operation, calculate AFi = DMi × Qi / sum(DMj × Qj) using matched wet mass and dry matter measurements for every co-product in the denominator. | co_product_mass; dry_matter; joint_process_total | product-specific allocation factor and allocated amount | `eda-dairy-pefcr-2025` |
| `calc_dryer_dust` | Channelled drying dust | Emitted dust mass = measured concentration × corrected dry gas volume for the matched operating period, with explicit unit conversion and no subtraction of already emitted material. | concentration; dry_gas_flow; operating_time; reference_conditions | kg dust emitted and kg/kg reference powder | `eu-fdm-bat-2019` |
| `calc_wastewater_load` | Treated or untreated wastewater discharge | Pollutant load = matched discharge volume × pollutant concentration; keep reused water and recovered condensate outside final discharge volume. | wastewater_volume; pollutant_concentration; reused_water; condensate_reuse | m3 discharge and kg pollutant per kg reference powder | `eu-fdm-bat-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_and_route` | All data packages | Declare powder type, liquid feed type and origin, whey acidity or modification, process technology, packaging format, and the exact foreground starting condition. | Dataset metadata, process map, supplier or upstream dataset references, and lot records |
| `dqr_temporal_coverage` | Foreground activity data | Use at least one representative operating year where seasonality and product mix affect shared utilities; preserve lot or campaign records and explain shutdowns, abnormal operation, and missing periods. | Dated meter, production, laboratory, maintenance, and dispatch records |
| `dqr_mass_balance` | Feed, co-products, powder, residues, and wastewater | Close wet-mass and dry-matter balances at the most detailed measured process level; investigate and disclose unexplained differences instead of forcing closure by changing the saleable product amount. | Signed wet-mass and dry-matter reconciliation by lot, campaign, and annual total |
| `dqr_composition` | Saleable powder | For skimmed milk powder, verify maximum milkfat 1.5% m/m, maximum water 5% m/m, and minimum milk protein in milk-solids-not-fat 34% m/m unless a stricter declared specification applies. For whey and acid whey powders, retain the applicable Codex composition and acidity results. | Laboratory release results and applicable product specification; `codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `dqr_bat_comparison` | Powder-dominant dairy installation QA | Where powder is at least 80% of production, retain annual raw-material throughput, total energy, and wastewater discharge so the unconverted EU BAT indicators of 0.2-0.5 MWh/t raw material and 1.2-2.7 m3/t raw material can be compared on their original basis. A value outside the interval is a review trigger, not automatic replacement or failure. | Annual site balance and `eu-fdm-bat-2019` |
| `dqr_data_gaps` | Missing or shared foreground data | Identify every proxy, shared-meter allocation, unverified UUID, and default dry matter value; state its affected amount and sensitivity, and prioritise replacement with direct records. | Data-gap register, allocation workbook, sensitivity result, and reviewer sign-off |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | Require exactly 1 kg net saleable powder with the Mass flow property, Units of mass unit group, kg reference unit, selected product-flow UUID, and all required qualifiers. | `codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `validate_route_scope` | product_and_process_identity | Reject a package that does not identify skimmed milk powder, whey powder, or acid whey powder and its liquid feed origin, or that includes an excluded concentrated protein, lactose, casein, infant-formula, or blended product without a reviewed scope extension. | `codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `validate_required_processes` | foreground_process_map | Require all four process-map entries and a quantitative record or explicit zero with reason for every conditional route-specific operation and every inventory row applicable to the site. | `eda-dairy-pefcr-2025`; `eu-fdm-bat-2019` |
| `validate_mass_and_solids_balance` | foreground_inventory | Require wet-mass and dry-matter reconciliation across accepted feed, co-products, saleable powder, rework, wastes, wastewater solids, and measured losses; unresolved imbalance is a finding. | `eda-dairy-pefcr-2025` |
| `validate_allocation` | shared_and_joint_operations | Require direct assignment before allocation, complete dry-matter denominators for every joint co-product, reconciliation of allocated remainders to the verified total, and disclosure of allocation factors. | `eda-dairy-pefcr-2025`; `eu-pef-method-2021` |
| `validate_energy_water_and_emissions` | utilities_wastewater_and_drying_air | Require separate energy carriers, gross and reused water, final wastewater discharge, and measured drying dust where applicable. Compare installation BAT indicators only on their original raw-material basis. | `eu-fdm-bat-2019` |
| `validate_composition` | released_product | Require lot evidence for the applicable Codex or declared stricter composition and acidity specification; off-specification material must not be counted as saleable reference output. | `codex-cxs-207-1999`; `codex-cxs-289-1995` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground powder-manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product and supply-chain LCA where geography, technology, powder type, feed origin, composition, allocation method, packaging, and temporal coverage are representative or adjusted transparently |
| excluded_use | Unqualified comparison between skim milk and whey routes; substitution for whey protein concentrate, lactose, casein, infant formula, or other excluded products; use as a farm, cheese, casein, retail, consumer-use, or end-of-life dataset |
| required_metadata | PCR id and version state; powder type; liquid feed type and upstream dataset; whey acidity or modification; geography; site and technology; reference period; net product mass; composition; packaging; process map; allocation factors; electricity and heat supply; water and wastewater boundary; emission controls |
| required_quality_disclosure | Primary-data coverage; meter and laboratory methods; wet-mass and dry-matter balance; shared-data allocation; UUID gaps; proxy datasets; abnormal operation; BAT comparison basis; uncertainty and sensitivity for material gaps |
| update_trigger | Material change in feed source or product mix, powder route or technology, composition, allocation, packaging, energy or water system, emission control, regulatory or Codex requirement, site boundary, or a new representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-207-1999` | `standard` | FAO/WHO Codex Alimentarius, CXS 207-1999, Standard for Milk Powders and Cream Powder, amended through 2023, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B207-1999%2FCXS_207e.pdf (retrieved 2026-08-10) | Skimmed milk powder identity, scope, raw materials, composition, and release-quality requirements |
| `codex-cxs-289-1995` | `standard` | FAO/WHO Codex Alimentarius, CXS 289-1995, Standard for Whey Powders, amended through 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B289-1995%2FCXS_289e.pdf (retrieved 2026-08-10) | Whey and acid whey definitions, feed origin, permitted route variation, composition, acidity, and product qualification |
| `eda-dairy-pefcr-2025` | `method_factor` | European Dairy Association, PEFCR for Dairy Products, partial revision, February 2025, https://eda.euromilk.org/wp-content/uploads/2025/02/PEFCR-DairyProducts_update_final.pdf (retrieved 2026-08-10) | Dairy process decomposition, mandatory company-specific dried-whey data, packaging data, direct assignment, dry-matter allocation, and data-quality rules |
| `eu-fdm-bat-2019` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-10) | Dairy powder energy and wastewater QA indicators, multistage drying, water accounting, and drying dust monitoring |
| `eu-pef-method-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, corrected 2022, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279 (retrieved 2026-08-10) | Life-cycle boundary, allocation hierarchy, data-quality disclosure, and downstream-use limitations |
