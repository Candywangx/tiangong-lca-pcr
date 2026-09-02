---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.other-milk-and-cream-in-solid-forms-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other milk and cream in solid forms, n.e.c.

## 1. Scope and Applicability

This PCR applies only to a milk or cream product in solid form that remains in CPC 22219 after an explicit product-identity gate. The gate is mandatory because `n.e.c.` is a residual category, not a synonym for all dairy powders. A foreground data package shall document all of the following before using this PCR:

1. the product is supplied in a solid form at the declared factory gate;
2. its commercial name, dairy species, ingredient or constituent bill of material, and measured composition establish that the essential product is milk or cream rather than a non-dairy formulated food;
3. the product is not whole milk powder under CPC 22211 and is not skim milk or whey powder under CPC 22212;
4. no other more specific CPC leaf or applicable product-category rule describes the product; and
5. the actual concentration and drying route, including all intermediate states entering the foreground boundary, is declared.

Cream powder and another solid milk or cream product may be included only when the concrete product passes this gate. The representative cream-powder route below is a modelling representative and does not enlarge the classification scope. Products failing any gate condition are outside this PCR.

Excluded products include whole milk powder; skim milk powder; whey powder; liquid milk, cream, whey, or liquid concentrates; butter, cheese, yoghurt and other fermented or acidified products; casein, lactose and isolated dairy ingredients classified elsewhere; infant formula and other formulated foods whose essential character is not solid milk or cream; and a product whose identity, species, composition, or route is not supported by batch or product records.

Codex CXS 206-1999 may support the interpretation of dairy terms. Codex CXS 207-1999 is used only when the concrete product is demonstrably within that standard's scope. Its compositional provisions shall not be extrapolated to the whole CPC 22219 residual category and shall not be entered as LCI amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.other-milk-and-cream-in-solid-forms-n-e-c |
| classification_refs | CPC 3.0: 22219, Other milk and cream in solid forms, n.e.c. (exact residual leaf under 2221) |
| covered_products | Solid-form milk or cream products that pass the mandatory residual-category gate; the dataset shall state the commercial name, dairy species, measured composition, ingredients or milk constituents, and applicable product standard. |
| excluded_products | CPC 22211 whole milk powder; CPC 22212 skim milk and whey powder; liquid or concentrated-liquid milk and cream; and all products assigned to a more specific dairy, ingredient, or formulated-food category. |
| representative_product | Cream powder made from declared bovine cream by a documented concentration and drying route; representative only, not a default identity for every CPC 22219 product. |
| production_route | Receipt and identity gate; formulation or standardisation when performed; optional membrane or thermal concentration; declared drying technology; post-drying conditioning; packing; cleaning and emission-control operations. |
| market_state | Shelf-stable solid or powder at the factory gate, with packaging included in the product system but excluded from the 1 kg net reference amount. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a documented solid milk or cream product that passes the CPC 22219 residual-category gate. |
| How much | 1 kg net product at the factory gate, excluding packaging mass. |
| How well | The data package declares commercial identity, dairy species, measured moisture or total-solids basis, fat and protein composition where relevant, all added ingredients or milk constituents, applicable CXS 207 status, concentration route, drying technology, and packaging configuration. |
| How long or cycle | One declared production batch or campaign represented at the factory gate; the averaging period and any shelf-life claim are reported separately. |
| reference_flow_link | The reference product flow below is the only quantitative reference; every inventory amount is normalized to 1 kg net conforming product. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product at the factory gate, excluding packaging mass |
| Reference product flow | Other milk and cream in solid forms, n.e.c. `5f6f1d34-4370-4557-99b2-a84879462c51` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 22219 gate outcome and rejected alternatives; commercial product name; dairy species; ingredient or constituent bill of material; measured composition and analytical basis; applicable standard and CXS 207 scope decision; received-feed state; concentration route; drying technology; rework policy; net moisture basis; factory-gate packaging; site, batch or campaign, and time period |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net conforming product mass on calibrated equipment. Exclude primary, secondary, and transport packaging from the reference amount while inventorying packaging separately. |
| `moisture_solids_basis` | received feed, intermediates, final product, recovered solids, and rejects | Mass and mass fraction | kg and kg/kg | Record the analytical method, sampling point, wet or dry basis, and batch result for moisture or total solids. Do not substitute a standard compositional limit for a measured batch result. |
| `composition_identity` | product gate and formulation | Mass and mass fraction | kg and kg/kg | Retain the product-specific bill of material and measured composition needed to distinguish the residual product from whole milk powder, skim milk powder, whey powder, and non-dairy formulated foods. |
| `internal_flow_consistency` | prepared feed, concentrate, and bulk dried product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the same batch boundary and analytical basis for linked intermediate flows; reconcile changes in water and milk-solids mass through recorded outputs, residues, wastewater, and emissions. |
| `energy_records` | electricity, fuel, steam, and purchased heat | Energy or fuel mass/volume as invoiced | original unit plus kWh or MJ | Preserve meter or invoice units and conversion factors. Allocate shared energy only through a documented physical driver or another disclosed PEF-consistent method. |
| `water_and_effluent` | process water, cleaning water, condensate, and wastewater | Mass or volume; concentration where applicable | kg or m3; kg/m3 where applicable | Record water and effluent volume by batch or monitoring period. Calculate pollutant mass only from matched flow and concentration records; regulatory or BAT concentration levels are not LCI values. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Milk, cream, or a documented milk/cream intermediate received at the foreground facility gate, with species, supplier, physical state, temperature where material, composition, and moisture or total-solids basis declared. |
| starting_condition_role | Upstream dairy production and any supplier processing are represented by linked upstream datasets; the foreground begins with site receipt, identity gate, and storage or handling of the declared feed. |
| product_classification_scope | CPC 3.0 code 22219 only after the residual-category gate excludes CPC 22211, CPC 22212, and every more specific applicable product category. |
| recursive_input_rule | A purchased input that itself meets CPC 22219 is recorded once as a technosphere product input with a compatible upstream dataset and declared state; do not recursively reconstruct its production unless it is under foreground operational control. |
| upstream_dataset_requirement | Provide traceable upstream datasets for received dairy materials, added ingredients or milk constituents, electricity, fuels or heat, water supply, cleaning chemicals, packaging materials, transport brought into the study scope, and waste treatment. |
| disclosure | State the species, composition, received-feed state, concentration and drying route, included site processes, outsourced steps, allocation choices, rework, product losses, monitoring coverage, exclusions, and whether each input is primary, supplier-specific, or secondary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_gate` | product eligibility | Apply and retain the CPC 22219 gate before modelling. A product with unresolved identity or a match to CPC 22211, CPC 22212, or another more specific category shall not use this PCR. | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `boundary_foreground_operations` | foreground facility | Include receipt and gate records, formulation or standardisation when performed, concentration when performed, drying, post-drying conditioning, packing, cleaning, product recovery, on-site wastewater or waste handling, and controlled direct emissions. | `eu-fdm-bat-2019` |
| `boundary_upstream_inputs` | purchased inputs and services | Link upstream datasets for all environmentally relevant dairy materials, ingredients, utilities, chemicals, packaging, transport, and treatment services that cross the boundary. | `eu-pef-2021` |
| `boundary_complete_inventory` | cut-off and omissions | Inventory all known environmentally relevant material, energy, product, co-product, waste, and elementary flows. Disclose and justify every omission; neither a product standard nor a BAT performance level authorizes an LCI cut-off. | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `boundary_route_disclosure` | route-specific modelling | Keep separate records for membrane concentration, evaporation, spray drying, roller drying, freeze drying, fluidised-bed finishing, agglomeration, or another declared route actually used. Do not model an unverified representative route as site fact. | `eu-fdm-bat-2019` |
| `boundary_downstream_exclusion` | default factory-gate study | Distribution, retail, use, and end-of-life are outside the default foreground boundary. Include them only under an explicitly expanded study scope and report them separately. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_identity_gate` | Receipt, storage, and residual-category identity gate | `required` | Always required. | Establish eligible received material and product identity before production modelling. | kg accepted dairy feed per batch and measured composition |
| `formulation_and_standardisation` | Formulation and standardisation | `conditional` | Include when milk constituents, ingredients, or streams are added, removed, blended, separated, or standardised. | Establish the declared feed composition to concentration or drying. | kg prepared feed and component mass balance per batch |
| `concentration` | Membrane or thermal concentration | `conditional` | Include every membrane, evaporation, or other concentration step performed inside the foreground boundary; declare when no concentration occurs. | Remove water and produce the feed to the dryer. | kg concentrate and kg water removed per batch |
| `drying` | Drying and powder recovery | `required` | Always required; identify the actual dryer and finishing stages. | Convert the declared dairy feed to bulk solid product and control dust and product loss. | kg conforming bulk dried product per batch |
| `conditioning_and_packaging` | Post-drying conditioning and packaging | `required` | Always required for the factory-gate product; list every conditioning and packing step actually used. | Produce saleable net product and account for packaging. | 1 kg net conforming factory-gate product |
| `cleaning_and_environmental_control` | Cleaning, wastewater, waste, and emission control | `required` | Always required for foreground operations; treatment may be on site or linked as an external service. | Account for CIP, cleaning, product recovery, effluent, wastes, and controlled emissions. | records allocated to the same production batch or campaign |

### Process: Receipt, storage, and residual-category identity gate (`receipt_and_identity_gate`)

#### Inputs

##### Product flows

###### Received dairy feed (`received_dairy_feed`)

Record every milk, cream, or milk/cream intermediate received for the modelled batch, including returned or reworked material when accepted.

- Selected flow: Declared milk, cream, or milk/cream intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured received mass by supplier lot and batch, paired with composition and moisture or total-solids records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_and_composition`

###### Receipt and cold-storage electricity (`receipt_electricity`)

Record metered electricity for unloading, transfer, cooling, and storage under foreground control.

- Selected flow: Electricity, declared supplier or grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered batch use or allocated shared-meter use using recorded operating time and a documented physical driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_energy_records`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dairy feed to production (`accepted_dairy_feed`)

Record only the mass that passes the receipt checks and is released to the declared production route.

- Selected flow: Accepted dairy feed
- Flow property / unit: Mass / kg
- Amount rule: measured released mass reconciled to receipts, returns, sampling, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch released to formulation, concentration, or drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_identity_and_composition`

##### Waste flows

###### Rejected or returned received material (`rejected_received_material`)

Record material rejected, returned, disposed of, or diverted before production and state its destination.

- Selected flow: Rejected dairy material
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per batch of accepted dairy feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_and_composition`

##### Elementary flows

### Process: Formulation and standardisation (`formulation_and_standardisation`)

#### Inputs

##### Product flows

###### Accepted dairy feed (`standardisation_dairy_feed`)

Record the accepted feed entering separation, blending, or standardisation.

- Selected flow: Accepted dairy feed
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from the receipt process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch of prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_and_standardisation`

###### Added milk constituents or ingredients (`added_constituents_and_ingredients`)

Record each added milk constituent, permitted ingredient, carrier, processing aid remaining in product, or other formulation input as a separate underlying inventory item and retain its supplier identity.

- Selected flow: Declared milk constituent or ingredient
- Flow property / unit: Mass / kg
- Amount rule: weighed or metered addition from the product-specific batch recipe and issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch of prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_and_standardisation`
- Sources: `eu-pef-2021`

###### Standardisation electricity (`standardisation_electricity`)

Record electricity used by separators, homogenisers, pumps, mixers, and heat-exchange auxiliaries when this process is included.

- Selected flow: Electricity, declared supplier or grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered use or shared-meter allocation from equipment operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per batch of prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_energy_records`
- Sources: `eu-pef-2021`; `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared feed to concentration or drying (`prepared_dairy_feed`)

Record the measured mass and composition of the prepared feed at the hand-off to the next declared step.

- Selected flow: Prepared dairy feed
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass with matched composition and total-solids result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch of prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_and_standardisation`

###### Separated dairy stream or saleable co-product (`standardisation_coproduct`)

Record every separated or exported dairy stream, its composition, destination, and economic status; do not hide a saleable output in waste.

- Selected flow: Declared separated dairy stream or co-product
- Flow property / unit: Mass / kg
- Amount rule: measured mass and composition by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch of prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_and_standardisation`

##### Waste flows

###### Formulation and transfer loss (`standardisation_loss`)

Record spills, line hold-up, off-spec material, and unrecovered product-bearing residues not represented elsewhere.

- Selected flow: Dairy product residue
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled batch loss with destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per batch of prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation_and_standardisation`

##### Elementary flows

### Process: Membrane or thermal concentration (`concentration`)

#### Inputs

##### Product flows

###### Prepared feed to concentration (`concentration_feed`)

Record the feed mass, temperature where material, and total-solids composition entering each concentration stage.

- Selected flow: Prepared dairy feed
- Flow property / unit: Mass / kg
- Amount rule: measured stage feed mass with matched total-solids result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_mass_energy_and_water`

###### Concentration electricity (`concentration_electricity`)

Record pumps, vacuum systems, mechanical vapour recompression, and other electrical loads for the actual route.

- Selected flow: Electricity, declared supplier or grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered stage use or documented allocation from shared meters
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_concentration_mass_energy_and_water`
- Sources: `eu-pef-2021`; `eu-fdm-bat-2019`

###### Concentration thermal energy (`concentration_thermal_energy`)

Record purchased steam or heat, or the fuel and directly generated heat, without double counting heat recovery.

- Selected flow: Declared steam, heat, or fuel input
- Flow property / unit: Energy or fuel mass/volume / original unit plus MJ
- Amount rule: metered or invoiced batch use with documented conversion and heat-recovery treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_concentration_mass_energy_and_water`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Concentrated feed to dryer (`concentrated_dairy_feed`)

Record mass, moisture or total solids, and composition at the dryer feed point.

- Selected flow: Concentrated dairy feed
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass paired with batch analysis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_mass_energy_and_water`

###### Recovered condensate or permeate (`recovered_concentration_water`)

Record condensate or permeate as a product stream when reused or exported, with quality, destination, and any treatment declared.

- Selected flow: Recovered water stream
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured recovered quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per batch of concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_mass_energy_and_water`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Concentration reject or product-bearing effluent (`concentration_reject`)

Record rejected membrane stream, unrecovered condensate, product-bearing wastewater, and residues by actual disposition.

- Selected flow: Concentration reject or product-bearing effluent
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured quantity with matched composition or pollutant record where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_mass_energy_and_water`

##### Elementary flows

### Process: Drying and powder recovery (`drying`)

#### Inputs

##### Product flows

###### Dryer feed (`dryer_feed`)

Record the actual liquid, concentrated, or otherwise prepared feed entering the declared dryer.

- Selected flow: Declared dairy dryer feed
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass with moisture or total-solids analysis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of conforming bulk dried product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`

###### Drying electricity (`drying_electricity`)

Record fans, atomisation, pumps, conveyors, fluidised-bed finishing, powder recovery, and other actual dryer electrical loads.

- Selected flow: Electricity, declared supplier or grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered dryer and finishing use or documented shared-meter allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of conforming bulk dried product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch_records`
- Sources: `eu-pef-2021`; `eu-fdm-bat-2019`

###### Drying thermal energy (`drying_thermal_energy`)

Record the actual purchased heat, steam, or fuel used by the drying route and any downstream dryer, with recovered energy netting disclosed.

- Selected flow: Declared heat, steam, or fuel input
- Flow property / unit: Energy or fuel mass/volume / original unit plus MJ
- Amount rule: metered or invoiced batch use with documented conversion and no double counting of recovered energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch of conforming bulk dried product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming bulk dried product (`bulk_dried_product`)

Record only dried product released to conditioning or packing after batch composition and quality checks.

- Selected flow: Conforming bulk solid milk or cream product
- Flow property / unit: Mass / kg
- Amount rule: measured released mass with moisture or total-solids and composition results
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`

###### Recovered powder returned to product (`recovered_powder_to_product`)

Record powder recovered from cyclones, filters, or other systems only when quality release authorizes return to the same batch or declared rework pool.

- Selected flow: Recovered dairy powder
- Flow property / unit: Mass / kg
- Amount rule: measured recovered and released mass, with internal-loop treatment documented to prevent double counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`

##### Waste flows

###### Off-spec or unrecovered dried product (`drying_product_loss`)

Record off-spec powder, start-up and shutdown loss, filter fines not returned to product, and other dried residues by disposition.

- Selected flow: Off-spec dairy powder or drying residue
- Flow property / unit: Mass / kg
- Amount rule: measured mass or batch mass-balance reconciliation with destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch_records`

##### Elementary flows

###### Channelled drying dust to air (`drying_dust_to_air`)

Record actual mass emitted after control from stack testing or matched gas-flow and concentration measurements. BAT emission levels are compliance references, not substitutes for site LCI data.

- Selected flow: Particulate matter to air, declared size fraction where measured
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated emitted mass for the represented operating period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_effluent_monitoring`
- Sources: `eu-fdm-bat-2019`

### Process: Post-drying conditioning and packaging (`conditioning_and_packaging`)

#### Inputs

##### Product flows

###### Bulk dried product to conditioning (`conditioning_bulk_product`)

Record bulk product entering actual cooling, agglomeration, screening, blending, storage, and packing steps.

- Selected flow: Conforming bulk solid milk or cream product
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging`

###### Packaging materials (`packaging_materials`)

Record each primary, secondary, and transport packaging component by material and actual batch issue or bill of materials.

- Selected flow: Declared packaging material or component
- Flow property / unit: Mass / kg
- Amount rule: product-specific packaging bill of materials reconciled to issued, returned, and scrapped packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_and_packaging`
- Sources: `eu-pef-2021`

###### Conditioning and packing electricity (`packaging_electricity`)

Record electricity for cooling, conveying, screening, blending, inert-gas systems when used, warehousing under foreground control, and packing.

- Selected flow: Electricity, declared supplier or grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented equipment-time allocation from site records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_energy_records`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Factory-gate reference product (`reference_product_output`)

Record the net mass of released, conforming product. Packaging remains in the system inventory but not in this net mass.

- Selected flow: Other milk and cream in solid forms, n.e.c. `5f6f1d34-4370-4557-99b2-a84879462c51`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net released product after batch normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Conditioning product loss and packaging scrap (`packing_losses`)

Record screened fines not recovered, spills, off-spec packed product, and packaging scrap separately in underlying records and by destination.

- Selected flow: Product loss or packaging scrap, separated by material
- Flow property / unit: Mass / kg
- Amount rule: measured batch disposition and packaging reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging`

##### Elementary flows

### Process: Cleaning, wastewater, waste, and emission control (`cleaning_and_environmental_control`)

#### Inputs

##### Product flows

###### Cleaning and CIP water (`cleaning_water`)

Record water supplied to cleaning, CIP, rinsing, wet emission control, and sanitation for equipment in the foreground boundary.

- Selected flow: Process water
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered cleaning-water use allocated to the represented batch or campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_environmental_records`
- Sources: `eu-fdm-bat-2019`

###### Cleaning and treatment chemicals (`cleaning_chemicals`)

Record each cleaning, disinfection, neutralisation, and wastewater-treatment chemical actually consumed.

- Selected flow: Declared cleaning or treatment chemical
- Flow property / unit: Mass / kg
- Amount rule: issue, dosing, or purchase records reconciled to concentration and solution strength
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_environmental_records`

###### Cleaning and treatment energy (`cleaning_and_treatment_energy`)

Record electricity and thermal energy for CIP, sanitation, air pollution control, wastewater handling, and on-site treatment without double counting process meters.

- Selected flow: Declared electricity, heat, steam, or fuel input
- Flow property / unit: Energy or fuel mass/volume / original unit plus kWh or MJ
- Amount rule: metered use or documented allocation from equipment operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_environmental_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered product or reusable water (`recovered_cleaning_stream`)

Record product recovered before cleaning and any water stream reused or exported, with quality, destination, and internal-loop treatment documented.

- Selected flow: Recovered dairy material or reusable water stream
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured quantity by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_environmental_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Wastewater to treatment or discharge (`wastewater_output`)

Record wastewater volume, destination, and matched pollutant measurements at the point represented in the model; distinguish untreated, pretreated, and final effluent.

- Selected flow: Dairy processing wastewater
- Flow property / unit: Volume and pollutant mass / m3 and kg
- Amount rule: measured flow and matched concentration records converted to pollutant mass for the monitoring period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_effluent_monitoring`
- Sources: `eu-fdm-bat-2019`

###### Treatment sludge and other controlled waste (`treatment_residues`)

Record sludge, spent filters, collected dust not recovered, and other treatment residues by measured mass, moisture basis, and destination.

- Selected flow: Declared treatment residue
- Flow property / unit: Mass / kg
- Amount rule: weighed removal or documented waste-transfer record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_environmental_records`

##### Elementary flows

###### Direct emissions from on-site utilities and treatment (`direct_site_emissions`)

Record relevant direct air, water, or soil emissions from on-site fuel combustion and treatment only when they cross the environmental boundary; keep pollutants as separate underlying flows.

- Selected flow: Declared direct elementary emission
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_effluent_monitoring`
- Sources: `eu-pef-2021`; `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | multifunctional foreground processes | First use separate meters, batch records, and unit-process subdivision to assign inputs, outputs, wastes, and emissions directly. Consider system expansion only when the additional function and study result are reported consistently. | `eu-pef-2021` |
| `allocation_physical_relationship` | inseparable shared operations | If subdivision or system expansion is not feasible, use a quantified physical relationship that represents the causal use of the shared operation, such as measured equipment time, evaporated-water load, dryer feed solids, net product mass, or occupied storage volume-time. Record the driver and calculation. | `eu-pef-2021` |
| `allocation_other_relationship` | residual multifunctionality | Use economic or another relationship only when no defensible physical relationship exists. Use contemporaneous values at the point of co-production, disclose the period and sensitivity, and do not apply a generic dairy allocation factor. | `eu-pef-2021` |
| `allocation_internal_recovery` | recovered powder, condensate, permeate, rework, and reusable water | Treat an internal recovery loop as an internal flow and avoid burden or credit duplication. An exported stream is a co-product or waste according to its documented destination and regulatory status. | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `allocation_mass_balance_check` | all allocation results | Reconcile allocated material, energy, product, co-product, waste, and emission totals to the unallocated facility or batch records. Report unallocated residuals and the reason. | `eu-pef-2021`; `eu-fdm-bat-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_identity_and_composition` | `receipt_and_identity_gate` | received, accepted, rejected, and returned dairy material; identity gate | weighbridge, tank gauge, lot record, product specification, certificate, laboratory result, disposition record | supplier lot; species; commercial name; received state; mass; temperature where material; moisture or total solids; fat; protein; other identity constituents; ingredients; standard status; gate decision; destination | Calibrated mass measurement plus representative batch sampling and documented analytical method; retain the gate checklist and rejected alternatives. | kg; kg/kg; declared analytical units | each receipt lot and production batch | all lots contributing to the represented batch or campaign | each supplying site and receiving facility | Sum masses only after lot identity and analytical basis are aligned; retain weighted composition and rejected mass separately. | calibration, sampling plan, laboratory method, certificates, chain of custody, and release or rejection record |
| `cp_formulation_and_standardisation` | `formulation_and_standardisation` | formulation inputs, prepared feed, separated streams, and losses | recipe, batch sheet, scale or flowmeter, separator record, laboratory result, inventory issue, disposition record | component identity; supplier lot; input and output mass; composition; total solids; equipment time; separated stream; loss; destination | Reconcile recipe issues and measured process transfers to batch outputs on a consistent wet-mass and solids basis. | kg; kg/kg; h | each included batch | full represented batch or campaign | each included line and facility | Calculate per-batch component and solids balances before normalization; do not average across materially different formulations. | approved recipe, scale or meter calibration, laboratory result, batch reconciliation, and deviation record |
| `cp_concentration_mass_energy_and_water` | `concentration` | feed, concentrate, condensate or permeate, rejects, electricity, and heat | flowmeter, tank gauge, laboratory result, utility meter, steam meter, fuel invoice, operating log | technology; stage; feed and output mass; moisture or total solids; electricity; steam or heat; fuel; recovered water; reject; operating time; heat recovery | Collect synchronized material and utility records for each concentration stage and document conversion and recovered-energy treatment. | kg; kg/kg; m3; kWh; MJ; original invoice units | each batch, meter interval, and campaign | all concentration runs contributing to the dataset | each included concentration line and utility source | Reconcile stage mass and solids, then allocate shared utilities by a documented physical driver and normalize to net reference product. | meter calibration, laboratory result, invoice reconciliation, equipment log, and mass-balance review |
| `cp_drying_batch_records` | `drying` | dryer feed, energy, bulk product, recovered powder, and drying loss | batch sheet, feed and product scales, moisture analysis, electricity and heat meters, recovery-system record, waste record | dryer technology; feed mass and solids; product mass and moisture; electricity; heat or fuel; recovered powder; rework; off-spec mass; operating time | Synchronize feed, release, utility, recovery, and disposition records to the same dryer batch or campaign. | kg; kg/kg; kWh; MJ; h | each dryer batch and meter interval | all drying runs contributing to the represented product | each included dryer and finishing stage | Calculate wet-mass, solids, and water-removal balances before normalization; exclude internal recirculation from gross output. | calibrated meters and scales, analytical method, release record, rework trace, and batch mass-balance sign-off |
| `cp_conditioning_and_packaging` | `conditioning_and_packaging` | bulk transfer, net product, packaging, packing energy, and losses | batch transfer, checkweigher, packaging specification, material issue and return, electricity meter, scrap and disposition record | bulk input; net released product; product moisture; packaging component and mass; units packed; electricity; product loss; packaging scrap | Reconcile net packed product and each packaging component to batch issues, returns, and scrap. | kg; item; kWh | each packing batch | all packing batches contributing to the dataset | each packing line and packaging configuration | Normalize packaging and energy to net product mass; keep packaging outside the 1 kg reference amount. | checkweigher verification, packaging bill of materials, meter records, stock reconciliation, and release record |
| `cp_site_energy_records` | `receipt_and_identity_gate` | shared and process electricity | submeter, main meter, invoice, equipment run log | meter id; time interval; kWh; supplier mix; equipment; run time; batch; physical allocation driver | Prefer process submeters; otherwise reconcile the site meter or invoice and allocate only by a documented physical driver. | kWh; h; driver-specific unit | meter interval and each campaign | representative operating period covering all modelled batches | each included site and electricity source | Assigned process electricity plus disclosed unassigned use shall reconcile to the site total for the same interval. | meter calibration or verification, invoice, supplier evidence, run logs, and allocation workbook |
| `cp_cleaning_and_environmental_records` | `cleaning_and_environmental_control` | water, cleaning and treatment chemicals, energy, recovery, wastewater, sludge, and wastes | water meter, dosing log, chemical issue, CIP log, energy meter, recovered-stream log, waste-transfer record | water; chemical identity and strength; dose; cycle; electricity; heat; recovered material; wastewater; sludge; waste mass; destination | Record each CIP or cleaning cycle and environmental-control operation, separating reusable streams from wastewater and waste. | kg; m3; kWh; MJ; cycle | each cycle and monitoring interval | all operations serving the represented batch or campaign | each process area and treatment system in scope | Allocate shared cleaning only by documented equipment, cycle, or production driver; reconcile water inputs to reuse, effluent, retention, and loss where measurable. | calibrated meters, dosing verification, CIP log, waste manifest, destination evidence, and water-balance review |
| `cp_emissions_and_effluent_monitoring` | `cleaning_and_environmental_control` | drying dust, wastewater pollutants, and direct site emissions | stack test, continuous or periodic monitor, wastewater flowmeter, laboratory result, fuel record, emission-factor calculation | source; pollutant; flow; concentration; sampling time; operating state; treatment state; fuel activity; factor; result; detection limit | Match flow and concentration in time, or calculate from collected activity data with a documented factor; identify untreated, treated, and discharge points. | kg; m3; kg/m3; original instrument units | each required monitoring event and representative operating period | period aligned to the represented production campaign | every relevant controlled emission and discharge point | Convert to emitted mass for the same period, then normalize to net product; do not replace measurements with permit or BAT limits. | accredited method where applicable, sampling chain, laboratory QA, instrument calibration, operating log, and calculation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | every inventory row | normalized amount = amount attributable to represented batches / net mass of conforming factory-gate product; packaging mass is not included in the denominator | attributable flow amount; net released product mass | amount per 1 kg reference product | `eu-pef-2021` |
| `calc_product_specific_bom` | formulation and packaging | Build the product-specific ingredient and packaging bill of materials from issued quantity minus returned and separately recorded scrap; retain each component as an underlying flow. | recipe; issue; return; scrap; net product | kg component per kg net product | `eu-pef-2021` |
| `calc_solids_and_water_balance` | receipt, formulation, concentration, and drying | For each aligned batch, reconcile wet mass and measured solids across inputs, product, co-products, recovered streams, wastewater, dust, rejects, hold-up, and documented uncertainty; never infer composition from a CXS limit. | masses; moisture or total-solids analyses; recovery and loss records | batch solids and water reconciliation plus unresolved residual | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_shared_utility_assignment` | shared electricity, heat, water, cleaning, storage, and treatment | Assign directly measured use first; otherwise multiply the matched facility total by the documented physical driver share. Report unassigned use and avoid double counting recovered energy or internal loops. | facility total; process meter; equipment time or another causal driver; recovery record | attributable utility amount per process and batch | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `calc_emission_mass` | stack and wastewater emissions | emitted mass = matched flow or discharged volume multiplied by measured concentration, with unit conversion and treatment point stated; alternatively use collected activity multiplied by a documented source factor. | flow or volume; concentration; activity; factor; time alignment | kg pollutant per represented period and per kg product | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_allocation_reconciliation` | multifunctional processes | Sum directly assigned and allocated burdens across all outputs and compare with the unallocated process total for the same period; disclose allocation driver, residual, and sensitivity where another relationship is used. | process totals; direct assignments; output quantities; allocation drivers | reconciled burden by output | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | product eligibility | Retain the CPC gate decision, commercial identity, species, bill of material, composition, applicable-standard decision, and reasons CPC 22211, CPC 22212, and other specific categories were rejected. | product specification, label or sales description, batch recipe, laboratory results, supplier evidence, and signed gate review |
| `dq_route_specificity` | process map | Identify the received-feed state and each actual formulation, separation, concentration, drying, conditioning, recovery, and treatment technology; do not substitute the representative cream-powder route for unverified site facts. | process flow diagram, equipment list, operating procedure, batch sheet, and site confirmation |
| `dq_temporal_alignment` | all foreground records | Use records covering the same batch, campaign, or justified representative period. State the reference year, seasonality, downtime, abnormal operations, and excluded batches. | timestamped batch, meter, laboratory, invoice, maintenance, and deviation records |
| `dq_completeness` | material, energy, waste, and emissions | Reconcile all known inputs and outputs at process and site level, including internal recovery, rework, losses, wastewater, dust, packaging, and direct emissions. List every data gap or omission. | product and solids balances, utility reconciliation, water balance, waste manifests, emission inventory, and completeness checklist |
| `dq_measurement_quality` | measured and calculated quantities | Document instrument identity, calibration or verification, sampling, analytical method, detection limit where relevant, unit conversion, and calculation version. | calibration certificates, sampling plan, laboratory QA, meter checks, invoices, and calculation workbook |
| `dq_representativeness` | foreground and upstream datasets | Assess technological, geographical, time-related representativeness, precision, completeness, methodological consistency, documentation, nomenclature, and review for material datasets. | data-quality assessment and source metadata consistent with the study goal |
| `dq_no_limit_as_inventory` | standard and BAT references | Use product-standard provisions and BAT levels only for applicability, specification, or QA context. Do not enter them as measured composition, resource use, wastewater, dust, or other LCI amounts. | source-use review showing each numeric inventory value originates from a site, batch, supplier, dataset, or documented factor record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_residual_gate` | product identity | Fail validation unless the dataset records a positive CPC 22219 gate and explicit rejection of CPC 22211, CPC 22212, and every other plausible specific category. | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | reference flow | Fail validation when commercial name, species, measured composition basis, ingredients or constituents, applicable-standard decision, received-feed state, concentration route, drying technology, batch, site, or time period is missing. | `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `validate_reference_mass` | reference product | The quantitative reference shall equal 1 kg net conforming product using the stated Mass flow property and unit group; packaging shall be inventoried but excluded from net mass. | `eu-pef-2021` |
| `validate_process_route` | process map and inventory | Receipt and gate, drying, conditioning and packaging, and cleaning and environmental control shall be present. Formulation and concentration shall match the declared route and cannot be silently omitted when performed. | `eu-fdm-bat-2019` |
| `validate_product_specific_records` | foreground inventory | Reject a generic or standard-limit-derived inventory where product-specific BOM, manufacturing activity, composition, and release records are required. | `eu-pef-2021`; `codex-cxs-207-1999` |
| `validate_mass_and_solids` | batch balance | Require a wet-mass and milk-solids reconciliation covering product, co-products, recovered streams, rework, losses, wastewater, dust, and stated residual uncertainty. | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `validate_energy_water_emissions` | utilities and direct flows | Require site or batch records for electricity, heat or fuel, water, cleaning chemicals, wastewater, dust, and other material direct emissions. A BAT or permit limit is not acceptable as an LCI value. | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `validate_allocation` | multifunctionality | Verify the hierarchy of subdivision or system expansion, then physical relationship, then another disclosed relationship; require reconciliation to unallocated totals and prevent double counting internal recovery. | `eu-pef-2021` |
| `validate_upstream_linkage` | purchased materials and services | Require traceable upstream datasets and state, geography, time, technology, and quality metadata for dairy materials, ingredients, utilities, chemicals, packaging, transport in scope, and treatment services. | `eu-pef-2021` |
| `validate_data_quality_and_gaps` | dataset publication | Require temporal coverage, calibration and analytical evidence, representativeness assessment, completeness review, disclosure of exclusions and data gaps, and an update trigger. | `eu-pef-2021`; `eu-fdm-bat-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground production dataset for one declared CPC 22219 solid milk or cream product and factory-gate route. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Use as a factory-gate foreground dataset or reviewed background dataset only for products that pass the same residual-category gate and match species, composition, received-feed state, technology, geography, time, allocation, and packaging conditions. |
| excluded_use | Do not use for whole milk powder, skim milk powder, whey powder, liquid products, other specifically classified dairy products, unverified formulations, a generic dairy-powder average, or downstream stages not modelled. |
| required_metadata | PCR id; CPC gate and rejected alternatives; product and commercial name; species; bill of material; measured composition and basis; applicable standards; site and geography; reference period; received-feed state; concentration and drying route; process map; allocation; packaging; upstream dataset references; collection and calculation protocol versions. |
| required_quality_disclosure | Data source for every material flow; meter and laboratory coverage; technological, geographical, and temporal representativeness; precision; completeness; mass, solids, utility, and water reconciliation; direct-emission monitoring; allocation drivers; data gaps; exclusions; deviations; reviewer status. |
| update_trigger | Reassess and update when product identity or classification changes; species, formulation, composition, supplier feed state, concentration or drying technology, recovery, packaging, site, allocation, monitoring method, product standard, or source evidence changes materially; or when the represented data period no longer reflects normal production. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, official source file: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23) | CPC 22219 residual-leaf identity and exclusion of the named sibling leaves CPC 22211 and CPC 22212. |
| `codex-cxs-206-1999` | `standard` | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms. | Dairy-term applicability and product-identity gate only; no LCI amounts. |
| `codex-cxs-207-1999` | `standard` | Codex Alimentarius, CXS 207-1999, Standard for Milk Powders and Cream Powder. | Concrete-product scope and specification applicability only when the product is covered; compositional provisions are not extrapolated across CPC 22219 and are not LCI amounts. |
| `eu-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-12) | Product-specific bill of materials and manufacturing data, complete LCI, company-specific data, allocation hierarchy, data quality, packaging, and disclosure. |
| `eu-fdm-bat-2019` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, CELEX 32019D2031: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031 (retrieved 2026-08-12) | Dairy process decomposition, resource and emission inventory, concentration and drying route disclosure, cleaning, wastewater, dust, monitoring, and record-quality requirements; BAT levels are not used as LCI values. |
