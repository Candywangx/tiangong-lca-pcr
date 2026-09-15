---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-cattle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Butter and other fats and oils derived from milk of cattle

## 1. Scope and Applicability

This PCR defines foreground data production for butter and concentrated milkfat products derived exclusively from cattle milk. It covers sweet-cream and cultured butter, salted and unsalted butter, butterfat, fractionated butterfat, anhydrous milkfat, anhydrous butter oil, butter oil, ghee, and cattle-milk dairy-fat spreads when the declared product remains a milk-derived fat product. It applies to batch and continuous manufacture from received cattle milk, cattle-milk cream, or cattle-milk butter and ends with saleable product at the processor gate.

It excludes buffalo, sheep, goat, camel, or other non-cattle milk fats; vegetable fats and mixed vegetable/dairy-fat spreads; margarine; cream sold as cream; buttermilk sold as the reference product; downstream food formulation; retail, use, and end-of-life unless separately added to the study scope. A dataset claiming compliance shall select one declared product form and one manufacturing route rather than averaging materially different products without disclosure.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-cattle |
| classification_refs | CPC 3.0 22241, exact classification context |
| covered_products | Butter from cattle milk; butterfat; fractionated butterfat; anhydrous milkfat; anhydrous butter oil; butter oil; ghee; cattle-milk dairy-fat spread when no non-milk fat is present |
| excluded_products | Milkfat from non-cattle animals; margarine; vegetable/dairy-fat blends; cream as the final product; buttermilk as the final product; formulated foods containing butter or milkfat |
| representative_product | Finished anhydrous milkfat derived from cattle milk, at the processor gate |
| production_route | Received cattle milk or cream to butter by cream preparation, pasteurization, optional culture ripening, churning, working and optional salting; or received cream or butter to concentrated milkfat by fat concentration, phase separation and moisture removal; followed by filling or packaging and storage |
| market_state | Saleable bulk or packaged product at the dairy processor gate, with product form, milkfat and moisture specification, salt or culture status, packaging state, geography, technology and reference period declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable butter or other milkfat product derived exclusively from cattle milk and produced by the declared route |
| How much | 1 kg net product mass at the processor gate |
| How well | Conforming to the declared product specification; butter shall meet the applicable CXS 279-1971 identity and composition, while anhydrous milkfat, milkfat, butter oil or ghee shall meet the applicable CXS 280-1973 identity and composition |
| How long or cycle | One completed production batch or continuous production campaign represented over the declared reference period; no service life is assigned |
| reference_flow_link | The quantitative reference is the net saleable product output from `product_packaging_and_storage`; the exact product form is a required qualifier because the selected Tiangong flow represents anhydrous milkfat |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable product |
| Reference product flow | Anhydrous milk fat `7f8eef6e-3ea0-4f74-bf72-c6f95af2c3fc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; cattle-milk origin; milkfat fraction and moisture specification; salted or unsalted status; cultured or sweet-cream status when applicable; manufacturing route; bulk or packaged state; packaging material and net mass; geography; technology; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. The Tiangong reference flow is valid directly for anhydrous milkfat, ghee, clarified butter and butter-oil forms represented by that identity. For ordinary butter or another covered form, retain the same mass basis but resolve and disclose a form-specific product-flow identity before publication; do not silently relabel the anhydrous-milkfat UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net saleable product mass excluding packaging and normalize every reported foreground amount to exactly 1 kg of the declared product form. |
| `milkfat_and_moisture_basis` | Product identity and yield checks | Mass fraction | % m/m | Report milkfat, water and milk-solids-not-fat on a mass basis using representative product testing; apply the limits for the declared CXS 279 or CXS 280 product and retain the test method and lot result. |
| `energy_carrier_accounting` | Electricity, fuels, steam and refrigeration | Energy | kWh or MJ | Preserve the metered carrier and unit; convert only with a disclosed factor, avoid double counting purchased steam and its generating fuel, and normalize energy to the same net product mass. |
| `water_and_wastewater_accounting` | Process water, cleaning water and wastewater | Mass or volume | kg or m3 | Record measured volume with temperature or density assumptions when converted to mass; recycled water shall be separately identified and shall not be counted again as fresh intake. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cattle milk, cattle-milk cream, or cattle-milk butter received at the processor gate with mass, milkfat content, origin, prior treatment, temperature and upstream dataset reference declared |
| starting_condition_role | Foreground processing input; upstream dairy farming, milk collection, cream production or butter production remains represented by linked upstream datasets unless physically operated within the reporting site |
| product_classification_scope | Cattle-milk butter and milkfat products only; route selection must distinguish ordinary butter from concentrated milkfat products |
| recursive_input_rule | A received butter or milkfat input in this same category is recorded as a technosphere product input with its own upstream dataset and declared product form; its upstream production is not recreated inside the current foreground process unless the site actually performs it |
| upstream_dataset_requirement | Provide geographically and temporally representative datasets for cattle milk, cream, butter, electricity, thermal-energy carriers, water treatment, ingredients, packaging and transport that cross the selected boundary |
| disclosure | Declare the starting material, included on-site operations, route, co-product treatment, allocation factors, recycled loops, cut-offs, packaging state, storage conditions, geography, reference period and any excluded capital goods or downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | Foreground process selection | Include reception and preparation, exactly one applicable product-formation route, and filling or packaging and storage. Exclude a listed operation only with evidence that it is upstream, not used, or outside the declared product specification. | `tetrapak-butter-handbook`; `tetrapak-amf-handbook` |
| `boundary_upstream_linkage` | Received milk, cream or butter | Link received dairy material and other purchased inputs to upstream datasets; do not treat them as burden-free. If cattle farming, milk collection or cream separation is within the reporting organization but outside the foreground unit process, retain it as a linked upstream process. | `fao-idf-dairy-lca-2010` |
| `boundary_on_site_completeness` | Dairy processing plant | Include on-site electricity, fuels or purchased thermal energy, refrigeration, water, cleaning and sanitation, ingredients, product and co-product outputs, product losses, wastewater and solid waste associated with included operations. | `fao-idf-dairy-lca-2010`; `codex-cxc-57-2004`; `tetrapak-dairy-effluent` |
| `boundary_downstream_exclusion` | Processor-gate dataset | Exclude distribution beyond the processor gate, retail, consumer storage and use, and end-of-life unless the study explicitly expands the boundary and reports those modules separately. | `fao-idf-dairy-lca-2010` |
| `boundary_cutoff_disclosure` | Inventory completeness | Do not omit a known mass or energy flow solely because it lacks a UUID or secondary dataset. Record the amount, state the identity gap, and disclose any justified cut-off and its effect on mass, energy and environmental completeness. | `fao-idf-dairy-lca-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `reception_and_cream_preparation` | Reception and cream preparation | required | Always; separation is conditional when whole cattle milk rather than cream is received | Foreground material reception, storage, separation when applicable, pasteurization and temperature preparation | kg prepared cream or declared dairy-fat feed transferred to product formation |
| `butter_manufacture` | Butter manufacture by churning and working | conditional | Include for ordinary butter, cultured butter, salted butter or butterfat made through cream churning | Foreground butter formation and buttermilk separation | kg unpacked butter or butterfat transferred to finishing |
| `concentrated_milkfat_manufacture` | Concentrated milkfat manufacture | conditional | Include for anhydrous milkfat, milkfat, anhydrous butter oil, butter oil or ghee | Foreground fat concentration, phase separation and moisture removal from cream or butter | kg unpacked concentrated milkfat transferred to finishing |
| `product_packaging_and_storage` | Product filling, packaging and storage | required | Always; packaging material is conditional for unpackaged bulk transfer | Foreground finishing to saleable processor-gate product | 1 kg net saleable declared product |

At least one of `butter_manufacture` and `concentrated_milkfat_manufacture` shall be included. Include both only when the foreground dataset explicitly models connected intermediate production or reports separately measured route shares.

### Process: Reception and cream preparation (`reception_and_cream_preparation`)

#### Inputs

##### Product flows

###### Received cattle milk (`cattle_milk_received`)

Cattle milk accepted at the processor gate is recorded independently from cream and butter.

- Selected flow: Cattle milk
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted cattle-milk mass for the receipt batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_receipt`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

###### Received cattle-milk cream (`cattle_milk_cream_received`)

Cattle-milk cream accepted at the processor gate is recorded as its own dairy input.

- Selected flow: Cattle-milk cream
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted cattle-milk cream mass for the receipt batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_receipt`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

###### Received cattle-milk butter (`cattle_milk_butter_received`)

Received cattle-milk butter is conditional on a rework or concentrated-milkfat route and is not merged with milk or cream.

- Selected flow: Cattle-milk butter
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted cattle-milk butter mass when this input is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_receipt`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

###### Reception electricity (`reception_electricity`)

Electricity for reception, pumping, separation, pasteurization support and cooling is recorded for this stage.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### Reception purchased steam (`reception_purchased_steam`)

Purchased steam used in preparation is metered separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to reception and cream preparation when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### Reception purchased hot water (`reception_purchased_hot_water`)

Purchased hot water is recorded with supply conditions and kept distinct from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot water assigned to this stage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### Reception natural gas (`reception_natural_gas`)

Natural gas combusted for preparation heat is recorded separately from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas use with the documented calorific value when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### Reception diesel (`reception_diesel`)

Diesel used by directly operated preparation equipment or heat generation is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Reception LPG (`reception_lpg`)

LPG used for preparation heat is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Reception process water (`reception_process_water`)

Fresh process water for preparation and cooling make-up is measured separately from internally recycled water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `codex-cxc-57-2004`

###### Reception R-717 refrigerant make-up (`reception_r717_makeup`)

Ammonia refrigerant make-up is conditional on an R-717 system and is balanced separately from R-134a.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-717 make-up assigned to this stage from stock and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Reception R-134a refrigerant make-up (`reception_r134a_makeup`)

R-134a refrigerant make-up is conditional on equipment using that substance and is balanced separately from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-134a make-up assigned to this stage from stock and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Reception sodium hydroxide CIP solution (`reception_sodium_hydroxide_cip`)

Sodium hydroxide cleaning solution used by the reception and preparation line is recorded separately from acid and disinfectant.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Reception nitric acid CIP solution (`reception_nitric_acid_cip`)

Nitric acid cleaning solution is recorded as a distinct CIP chemical.

- Selected flow: Nitric acid cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Reception peracetic acid disinfectant (`reception_peracetic_acid_cip`)

Peracetic acid disinfectant is recorded separately from both alkaline and acid cleaners.

- Selected flow: Peracetic acid disinfectant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued disinfectant minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared cattle-milk cream (`prepared_cattle_milk_cream`)

Prepared cattle-milk cream transferred to product formation is measured as a single intermediate product.

- Selected flow: Prepared cattle-milk cream
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with stock, receipts, rejects and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `fao-dairy-accounting`

###### Prepared cattle-milk butter (`prepared_cattle_milk_butter`)

Prepared cattle-milk butter transferred to the concentrated-milkfat route is recorded independently from cream.

- Selected flow: Prepared cattle-milk butter
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass when the butter-feed route is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `fao-dairy-accounting`; `tetrapak-amf-handbook`

###### Separated cattle skim milk (`separated_cattle_skim_milk`)

Skim milk separated when whole cattle milk is received is measured as a distinct co-product.

- Selected flow: Cattle skim milk
- Flow property / unit: Mass / kg
- Amount rule: Measured skim-milk mass transferred to its documented product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `fao-idf-dairy-lca-2010`; `fao-dairy-accounting`

##### Waste flows

###### Rejected cattle milk (`rejected_cattle_milk`)

Rejected cattle milk is weighed separately from rejected cream, butter and wastewater.

- Selected flow: Rejected cattle milk
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected cattle-milk mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `tetrapak-dairy-effluent`

###### Rejected cattle-milk cream (`rejected_cattle_milk_cream`)

Rejected cattle-milk cream is recorded as its own waste flow.

- Selected flow: Rejected cattle-milk cream
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected cream mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `tetrapak-dairy-effluent`

###### Rejected cattle-milk butter (`rejected_cattle_milk_butter`)

Rejected cattle-milk butter is recorded separately when the butter-feed route is used.

- Selected flow: Rejected cattle-milk butter
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected butter mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `tetrapak-dairy-effluent`

###### Reception and cream-preparation wastewater (`reception_wastewater`)

Wastewater leaving reception and cream preparation is measured independently from product rejects and solid residue.

- Selected flow: Dairy reception and cream-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured discharge adjusted for documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `tetrapak-dairy-effluent`

###### Reception filter residue (`reception_filter_residue`)

Solids removed by reception or cream-preparation filtration are weighed as one specific solid waste.

- Selected flow: Dairy reception filter residue
- Flow property / unit: Mass / kg
- Amount rule: Measured filter-residue mass sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `tetrapak-dairy-effluent`

##### Elementary flows

###### Reception fossil carbon dioxide emission (`reception_carbon_dioxide_air`)

Direct fossil carbon dioxide from on-site fuel combustion assigned to this stage is reported separately.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured fuel quantity and a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Reception nitrogen oxides emission (`reception_nitrogen_oxides_air`)

Direct nitrogen oxides from included combustion equipment are recorded as their own air emission.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from fuel and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Reception sulfur dioxide emission (`reception_sulfur_dioxide_air`)

Direct sulfur dioxide from included fuel combustion is recorded separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from fuel sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Reception fine particulate emission (`reception_pm25_air`)

Fine particulate matter from included combustion is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from equipment-specific operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Reception R-717 emission (`reception_r717_air`)

Unrecovered R-717 assigned to reception and cream preparation is reported independently.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Reception R-134a emission (`reception_r134a_air`)

Unrecovered R-134a assigned to this stage is reported independently from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-134a from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared dairy-fat feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

### Process: Butter manufacture by churning and working (`butter_manufacture`)

#### Inputs

##### Product flows

###### Prepared cattle-milk cream input (`butter_cream_input`)

Prepared cattle-milk cream entering the churn or continuous buttermaker is recorded by batch.

- Selected flow: Prepared cattle-milk cream
- Flow property / unit: Mass / kg
- Amount rule: Measured cream mass charged to butter manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `fao-dairy-accounting`; `tetrapak-butter-handbook`

###### Butter starter culture (`butter_starter_culture`)

Starter culture is conditional on cultured butter and is recorded separately from salt, water and color.

- Selected flow: Lactic acid starter culture
- Flow property / unit: Mass / kg
- Amount rule: Measured culture mass issued to the batch minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxs-279-1971`

###### Butter sodium chloride (`butter_sodium_chloride`)

Food-grade sodium chloride is conditional on salted butter and is measured independently from other ingredients.

- Selected flow: Sodium chloride, food grade
- Flow property / unit: Mass / kg
- Amount rule: Measured salt mass issued to the batch minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxs-279-1971`

###### Butter formulation water (`butter_formulation_water`)

Potable water intentionally incorporated into the formulation is measured separately from process and CIP water.

- Selected flow: Potable formulation water
- Flow property / unit: Mass / kg
- Amount rule: Measured formulation-water mass added to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxs-279-1971`; `codex-cxc-57-2004`

###### Butter beta-carotene color preparation (`butter_beta_carotene`)

A beta-carotene color preparation is recorded only when used and is not combined with culture or salt.

- Selected flow: Beta-carotene color preparation
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured color-preparation mass issued to the batch minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxs-279-1971`

###### Butter-route electricity (`butter_electricity`)

Electricity for ripening, churning, working, pumping and controls is recorded for the butter route.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter allocated butter-route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`

###### Butter-route purchased steam (`butter_purchased_steam`)

Purchased steam is recorded separately from hot water and directly combusted fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to the butter route when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`

###### Butter-route purchased hot water (`butter_purchased_hot_water`)

Purchased hot water is recorded with supply conditions as a separate carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot water assigned to the butter route when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`

###### Butter-route natural gas (`butter_natural_gas`)

Natural gas combusted for butter-route heat is recorded separately from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas use with documented calorific value when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`

###### Butter-route diesel (`butter_diesel`)

Diesel used by included butter-route equipment or heat generation is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled butter-route diesel use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Butter-route LPG (`butter_lpg`)

LPG used for butter-route heat is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled butter-route LPG use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Butter-route process water (`butter_process_water`)

Process water used for butter washing or line operation is measured separately from formulation water and CIP chemicals.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured butter-route process-water intake when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `codex-cxc-57-2004`; `tetrapak-butter-handbook`

###### Butter-route R-717 refrigerant make-up (`butter_r717_makeup`)

R-717 make-up is conditional on ammonia refrigeration serving the butter route.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-717 make-up assigned to the butter route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Butter-route R-134a refrigerant make-up (`butter_r134a_makeup`)

R-134a make-up is conditional on equipment using that substance and is balanced separately from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-134a make-up assigned to the butter route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Butter-route sodium hydroxide CIP solution (`butter_sodium_hydroxide_cip`)

Sodium hydroxide cleaning solution used on the butter line is recorded separately.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Butter-route nitric acid CIP solution (`butter_nitric_acid_cip`)

Nitric acid cleaning solution used on the butter line is recorded independently from alkaline cleaner.

- Selected flow: Nitric acid cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Butter-route peracetic acid disinfectant (`butter_peracetic_acid_cip`)

Peracetic acid disinfectant is recorded separately from both CIP cleaners.

- Selected flow: Peracetic acid disinfectant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued disinfectant minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unpacked cattle-milk butter (`unpacked_cattle_milk_butter`)

Conforming unpacked cattle-milk butter is measured after churning, drainage and working.

- Selected flow: Cattle-milk butter
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked butter mass passing the declared specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per butter production campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxs-279-1971`; `fao-dairy-accounting`

###### Unpacked cattle-milk butterfat (`unpacked_cattle_milk_butterfat`)

Butterfat produced by the declared churning route is recorded separately from ordinary butter.

- Selected flow: Cattle-milk butterfat
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked butterfat mass passing the declared specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per butter production campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `codex-cxs-279-1971`; `fao-dairy-accounting`

###### Buttermilk co-product (`buttermilk_coproduct`)

Buttermilk with documented product status is weighed as a specific co-product.

- Selected flow: Buttermilk
- Flow property / unit: Mass / kg
- Amount rule: Measured buttermilk mass transferred to its documented product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `fao-dairy-accounting`; `tetrapak-butter-handbook`

##### Waste flows

###### Butter-manufacturing wastewater (`butter_wastewater`)

Wastewater from butter washing, cleaning and product-contact loss is measured separately from solid waste.

- Selected flow: Butter-manufacturing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured discharge adjusted for documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `tetrapak-dairy-effluent`

###### Off-spec cattle-milk butter waste (`offspec_butter_waste`)

Off-spec butter leaving the process under a waste-management obligation is weighed independently from buttermilk.

- Selected flow: Off-spec cattle-milk butter waste
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec butter mass sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `tetrapak-dairy-effluent`

###### Butter filter residue (`butter_filter_residue`)

Product-contact solids removed from the butter line are recorded as a distinct solid waste.

- Selected flow: Butter product-contact filter residue
- Flow property / unit: Mass / kg
- Amount rule: Measured filter-residue mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_butter_batch`
- Sources: `tetrapak-dairy-effluent`

##### Elementary flows

###### Butter-route fossil carbon dioxide emission (`butter_carbon_dioxide_air`)

Direct fossil carbon dioxide from fuel combustion assigned to the butter route is reported separately.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured fuel quantity and a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Butter-route nitrogen oxides emission (`butter_nitrogen_oxides_air`)

Nitrogen oxides from included butter-route combustion are recorded as their own air exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from fuel and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Butter-route sulfur dioxide emission (`butter_sulfur_dioxide_air`)

Sulfur dioxide from included fuel combustion is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from fuel sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Butter-route fine particulate emission (`butter_pm25_air`)

Fine particulate matter from included butter-route combustion is reported by size.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from equipment-specific operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Butter-route R-717 emission (`butter_r717_air`)

Unrecovered R-717 assigned to the butter route is reported independently.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Butter-route R-134a emission (`butter_r134a_air`)

Unrecovered R-134a assigned to the butter route is reported independently from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-134a from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked butter-route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

### Process: Concentrated milkfat manufacture (`concentrated_milkfat_manufacture`)

#### Inputs

##### Product flows

###### Cattle-milk cream input (`concentrated_cream_input`)

Cattle-milk cream charged to concentration is measured independently from butter feed.

- Selected flow: Cattle-milk cream
- Flow property / unit: Mass / kg
- Amount rule: Measured cream mass charged to the concentration campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### Cattle-milk butter input (`concentrated_butter_input`)

Cattle-milk butter charged to concentration is recorded as its own feed flow.

- Selected flow: Cattle-milk butter
- Flow property / unit: Mass / kg
- Amount rule: Measured butter mass charged to the concentration campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### Concentration-route electricity (`concentrated_electricity`)

Electricity for separation, concentration, vacuum, pumping and controls is recorded for this route.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter allocated concentration-route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-amf-handbook`

###### Concentration-route purchased steam (`concentrated_purchased_steam`)

Purchased steam is recorded separately from hot water and directly combusted fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to concentration when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-amf-handbook`

###### Concentration-route purchased hot water (`concentrated_purchased_hot_water`)

Purchased hot water is recorded with supply conditions as a separate carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot water assigned to concentration when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-amf-handbook`

###### Concentration-route natural gas (`concentrated_natural_gas`)

Natural gas combusted for concentration heat is recorded separately from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas use with documented calorific value when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-amf-handbook`

###### Concentration-route diesel (`concentrated_diesel`)

Diesel used by included concentration equipment or heat generation is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Concentration-route LPG (`concentrated_lpg`)

LPG used for concentration heat is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Concentration-route process water (`concentrated_process_water`)

Process water used in concentration is measured separately from cleaning chemicals and condensate.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured process-water intake assigned to concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `codex-cxc-57-2004`; `tetrapak-amf-handbook`

###### Concentration filter aid (`concentrated_diatomaceous_earth`)

Diatomaceous earth used for polishing filtration is conditional and is recorded separately from CIP chemicals.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Measured filter-aid mass issued to the concentration campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `tetrapak-amf-handbook`

###### Concentration-route R-717 refrigerant make-up (`concentrated_r717_makeup`)

R-717 make-up is conditional on ammonia refrigeration serving concentration.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-717 make-up assigned to concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Concentration-route R-134a refrigerant make-up (`concentrated_r134a_makeup`)

R-134a make-up is conditional on equipment using that substance and is balanced separately from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-134a make-up assigned to concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Concentration sodium hydroxide CIP solution (`concentrated_sodium_hydroxide_cip`)

Sodium hydroxide cleaning solution used on the concentration line is recorded separately.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Concentration nitric acid CIP solution (`concentrated_nitric_acid_cip`)

Nitric acid cleaning solution is recorded independently from alkaline cleaner.

- Selected flow: Nitric acid cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Concentration peracetic acid disinfectant (`concentrated_peracetic_acid_cip`)

Peracetic acid disinfectant is recorded separately from both CIP cleaners.

- Selected flow: Peracetic acid disinfectant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued disinfectant minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unpacked anhydrous milkfat (`unpacked_anhydrous_milkfat`)

Anhydrous milkfat passing the declared CXS 280 specification is measured before filling.

- Selected flow: Anhydrous milk fat
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked anhydrous-milkfat mass passing the declared specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per concentration campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxs-280-1973`

###### Unpacked butter oil (`unpacked_butter_oil`)

Butter oil produced by the concentration route is recorded independently from anhydrous milkfat and ghee.

- Selected flow: Cattle-milk butter oil
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked butter-oil mass passing the declared specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per concentration campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### Unpacked ghee (`unpacked_ghee`)

Ghee produced from cattle milk is recorded as a separate product form.

- Selected flow: Ghee from cattle milk
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked ghee mass passing the declared specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per concentration campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### Separated non-fat cattle-milk phase (`separated_nonfat_cattle_milk_phase`)

A separated non-fat milk phase with documented product status is measured independently from condensate and wastewater.

- Selected flow: Separated non-fat cattle-milk phase
- Flow property / unit: Mass / kg
- Amount rule: Measured separated non-fat phase sent to its documented product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `codex-cxs-280-1973`; `tetrapak-amf-handbook`

##### Waste flows

###### Milkfat-concentration condensate (`concentration_condensate`)

Condensate recovered from moisture removal is measured separately from cleaning wastewater.

- Selected flow: Milkfat-concentration condensate
- Flow property / unit: Volume / m3
- Amount rule: Measured condensate sent to the documented reuse or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `tetrapak-amf-handbook`

###### Concentrated-milkfat wastewater (`concentrated_wastewater`)

Wastewater from concentration and line cleaning is measured as a distinct liquid waste.

- Selected flow: Concentrated-milkfat processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured discharge adjusted for documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `tetrapak-amf-handbook`; `tetrapak-dairy-effluent`

###### Concentrated-milkfat filter residue (`concentrated_filter_residue`)

Spent filter aid and retained solids are weighed as one specific filter-residue waste.

- Selected flow: Spent diatomaceous-earth filter residue
- Flow property / unit: Mass / kg
- Amount rule: Measured filter-residue mass sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `tetrapak-amf-handbook`; `tetrapak-dairy-effluent`

###### Off-spec concentrated milkfat waste (`offspec_concentrated_milkfat_waste`)

Off-spec concentrated milkfat leaving under a waste-management obligation is weighed independently.

- Selected flow: Off-spec concentrated milkfat waste
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec milkfat mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentrated_milkfat_batch`
- Sources: `tetrapak-dairy-effluent`

##### Elementary flows

###### Concentration fossil carbon dioxide emission (`concentrated_carbon_dioxide_air`)

Direct fossil carbon dioxide from fuel combustion assigned to concentration is reported separately.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured fuel quantity and a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Concentration nitrogen oxides emission (`concentrated_nitrogen_oxides_air`)

Nitrogen oxides from included combustion are recorded as their own air exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from fuel and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Concentration sulfur dioxide emission (`concentrated_sulfur_dioxide_air`)

Sulfur dioxide from included combustion is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from fuel sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Concentration fine particulate emission (`concentrated_pm25_air`)

Fine particulate matter from included combustion is reported by size.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from equipment-specific operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Concentration R-717 emission (`concentrated_r717_air`)

Unrecovered R-717 assigned to concentration is reported independently.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Concentration R-134a emission (`concentrated_r134a_air`)

Unrecovered R-134a assigned to concentration is reported independently from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-134a from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unpacked concentrated milkfat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

### Process: Product filling, packaging and storage (`product_packaging_and_storage`)

#### Inputs

##### Product flows

###### Unpacked cattle-milk butter input (`unpacked_cattle_milk_butter_input`)

Unpacked cattle-milk butter entering filling is recorded independently from concentrated milkfat forms.

- Selected flow: Cattle-milk butter
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked butter mass received for filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxs-279-1971`; `fao-dairy-accounting`

###### Unpacked anhydrous milkfat input (`unpacked_anhydrous_milkfat_input`)

Unpacked anhydrous milkfat entering filling is recorded as its own product input.

- Selected flow: Anhydrous milk fat
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked anhydrous-milkfat mass received for filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxs-280-1973`

###### Unpacked butter-oil input (`unpacked_butter_oil_input`)

Unpacked cattle-milk butter oil is recorded separately from anhydrous milkfat and ghee.

- Selected flow: Cattle-milk butter oil
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked butter-oil mass received for filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxs-280-1973`

###### Unpacked ghee input (`unpacked_ghee_input`)

Unpacked cattle-milk ghee is recorded as a separate input product form.

- Selected flow: Ghee from cattle milk
- Flow property / unit: Mass / kg
- Amount rule: Measured unpacked ghee mass received for filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxs-280-1973`

###### Aluminium foil wrapper (`aluminium_foil_wrapper`)

Aluminium foil used for the declared pack is recorded independently from paperboard and plastics.

- Selected flow: Aluminium foil butter wrapper
- Flow property / unit: Mass / kg
- Amount rule: Issued aluminium-foil mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### Paperboard carton (`paperboard_carton`)

Paperboard cartons are measured as their own packaging exchange.

- Selected flow: Bleached paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Issued paperboard-carton mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### LDPE packaging film (`ldpe_packaging_film`)

Low-density polyethylene film is recorded separately from rigid plastic packaging.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Issued LDPE-film mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### HDPE packaging pail (`hdpe_packaging_pail`)

High-density polyethylene pails are recorded as one rigid packaging component when used.

- Selected flow: High-density polyethylene packaging pail
- Flow property / unit: Mass / kg
- Amount rule: Issued HDPE-pail mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### Steel packaging drum (`steel_packaging_drum`)

Steel drums used for bulk milkfat are recorded independently from polymer pails.

- Selected flow: Steel packaging drum
- Flow property / unit: Mass / kg
- Amount rule: Issued steel-drum mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `fao-idf-dairy-lca-2010`; `tetrapak-amf-handbook`

###### Packaging and storage electricity (`packaging_electricity`)

Electricity for filling, sealing, handling and cold storage is recorded for this stage.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured or time-and-throughput allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`

###### Packaging purchased steam (`packaging_purchased_steam`)

Purchased steam used in filling or sanitation is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to this stage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`

###### Packaging purchased hot water (`packaging_purchased_hot_water`)

Purchased hot water is recorded with supply conditions as a distinct carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot water assigned to this stage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `tetrapak-butter-handbook`

###### Packaging natural gas (`packaging_natural_gas`)

Natural gas combusted for filling or storage support is recorded separately from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas use with documented calorific value when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Packaging diesel (`packaging_diesel`)

Diesel used by directly operated handling or standby equipment is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Packaging LPG (`packaging_lpg`)

LPG used by included filling or storage equipment is recorded independently.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG use when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Packaging process water (`packaging_process_water`)

Process water used in filling and storage-area operations is recorded separately from CIP chemicals.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured process-water intake assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxc-57-2004`

###### Packaging and storage R-717 refrigerant make-up (`packaging_r717_makeup`)

R-717 make-up is conditional on ammonia refrigeration serving product storage.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-717 make-up assigned to packaging and storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Packaging and storage R-134a refrigerant make-up (`packaging_r134a_makeup`)

R-134a make-up is conditional on equipment using that substance and is balanced separately from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-134a make-up assigned to packaging and storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Packaging sodium hydroxide CIP solution (`packaging_sodium_hydroxide_cip`)

Sodium hydroxide cleaning solution used on the filling line is recorded separately.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Packaging nitric acid CIP solution (`packaging_nitric_acid_cip`)

Nitric acid cleaning solution is recorded independently from alkaline cleaner.

- Selected flow: Nitric acid cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued solution minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### Packaging peracetic acid disinfectant (`packaging_peracetic_acid_cip`)

Peracetic acid disinfectant is recorded separately from both CIP cleaners.

- Selected flow: Peracetic acid disinfectant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued disinfectant minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable anhydrous milkfat reference product (`reference_product_output`)

This is the verified reference product flow at the processor gate, measured net of packaging.

- Selected flow: Anhydrous milk fat `7f8eef6e-3ea0-4f74-bf72-c6f95af2c3fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming saleable product, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxs-280-1973`

##### Waste flows

###### Off-spec packaged butter waste (`offspec_packaged_butter_waste`)

Off-spec packaged butter leaving under a waste-management obligation is weighed separately from milkfat products.

- Selected flow: Off-spec packaged cattle-milk butter waste
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec packaged butter mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Off-spec packaged anhydrous milkfat waste (`offspec_packaged_anhydrous_milkfat_waste`)

Off-spec packaged anhydrous milkfat is recorded as its own waste flow.

- Selected flow: Off-spec packaged anhydrous milkfat waste
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec anhydrous-milkfat mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Off-spec packaged butter-oil waste (`offspec_packaged_butter_oil_waste`)

Off-spec packaged butter oil is recorded separately from other product losses.

- Selected flow: Off-spec packaged cattle-milk butter-oil waste
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec butter-oil mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Off-spec packaged ghee waste (`offspec_packaged_ghee_waste`)

Off-spec packaged ghee is recorded as a distinct product-loss waste.

- Selected flow: Off-spec packaged cattle-milk ghee waste
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec ghee mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Waste aluminium foil (`waste_aluminium_foil`)

Discarded aluminium foil is weighed independently from paperboard and plastic packaging waste.

- Selected flow: Waste aluminium foil butter wrapper
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded aluminium-foil mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Waste paperboard carton (`waste_paperboard_carton`)

Discarded paperboard cartons are recorded as their own packaging waste.

- Selected flow: Waste bleached paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded paperboard-carton mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Waste LDPE packaging film (`waste_ldpe_packaging_film`)

Discarded LDPE film is weighed independently from rigid plastic packaging waste.

- Selected flow: Waste low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded LDPE-film mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Waste HDPE packaging pail (`waste_hdpe_packaging_pail`)

Discarded HDPE pails are recorded separately from film and metal drums.

- Selected flow: Waste high-density polyethylene packaging pail
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded HDPE-pail mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Waste steel packaging drum (`waste_steel_packaging_drum`)

Discarded steel drums are recorded as a distinct metal packaging waste.

- Selected flow: Waste steel packaging drum
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded steel-drum mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

###### Packaging and storage wastewater (`packaging_storage_wastewater`)

Wastewater from filling-line cleaning is measured separately from product and packaging losses.

- Selected flow: Milkfat filling-line wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured discharge adjusted for documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `tetrapak-dairy-effluent`

##### Elementary flows

###### Packaging fossil carbon dioxide emission (`packaging_carbon_dioxide_air`)

Direct fossil carbon dioxide from fuel combustion assigned to packaging and storage is reported separately.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured fuel quantity and a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources: `fao-idf-dairy-lca-2010`

###### Packaging nitrogen oxides emission (`packaging_nitrogen_oxides_air`)

Nitrogen oxides from included combustion are recorded as their own air exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from fuel and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Packaging sulfur dioxide emission (`packaging_sulfur_dioxide_air`)

Sulfur dioxide from included combustion is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from fuel sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Packaging fine particulate emission (`packaging_pm25_air`)

Fine particulate matter from included combustion is reported by size.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from equipment-specific operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_utilities`
- Sources:

###### Packaging and storage R-717 emission (`packaging_r717_air`)

Unrecovered R-717 assigned to packaging and storage is reported independently.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`

###### Packaging and storage R-134a emission (`packaging_r134a_air`)

Unrecovered R-134a assigned to packaging and storage is reported independently from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-134a from the substance-specific stock balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-idf-dairy-lca-2010`


## 7. Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-product dairy processing | First subdivide reception, cream preparation, butter manufacture, concentrated milkfat manufacture and packaging using process meters, batch records and transfer measurements so directly attributable inputs and outputs are assigned without allocation. | `fao-idf-dairy-lca-2010`; `fao-dairy-accounting` |
| `allocation_internal_recycle` | Rework and recycled water or product | Keep internally recycled material inside the system and record only net external inputs and outputs; do not assign an avoided-product credit to internal recycle. | `fao-dairy-accounting`; `tetrapak-dairy-effluent` |
| `allocation_buttermilk_and_nonfat_coproducts` | Buttermilk and separated non-fat phases with product status | After subdivision, allocate only residual shared burdens among saleable co-products. Use the governing programme method when one exists; otherwise apply a documented physical relation that reflects the production relationship, and test an economic alternative when the choice is material. Report quantities, factor basis, prices or composition data, reference period and sensitivity. | `fao-idf-dairy-lca-2010` |
| `allocation_waste_boundary` | Wastewater, off-spec material and residues | A material is a co-product only when it has a documented beneficial use and product status. Otherwise model its treatment as waste and do not use revenue alone to erase treatment burdens. | `tetrapak-dairy-effluent` |
| `allocation_upstream_consistency` | Upstream cattle-milk or cream datasets | Preserve the allocation method and co-product boundary disclosed by upstream dairy datasets; do not reallocate upstream burdens inside this foreground dataset without complete underlying inventory and an explicit sensitivity case. | `fao-idf-dairy-lca-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dairy_material_receipt` | `reception_and_cream_preparation` | Cattle milk; cattle-milk cream; cattle-milk butter | Weighbridge, calibrated tank or mass-flow record plus certificate of analysis | timestamp; supplier and origin; exact material identity; gross and tare or meter mass; milkfat; water or total solids; temperature; acceptance status; upstream dataset id | Record cattle milk, cattle-milk cream and cattle-milk butter as three separate receipt series and reconcile each accepted quantity to storage movement | kg and % m/m | Each receipt | At least one representative 12-month period or all campaigns in a shorter disclosed seasonal production period | Every included site and material source | Sum each exact material separately; mass-weight composition within, but never across, material identities; retain each rejected material separately | Meter calibration; supplier certificate; laboratory result; intake and tank reconciliation |
| `cp_process_utilities` | `reception_and_cream_preparation` | Electricity; purchased steam; purchased hot water; natural gas; diesel; LPG; carbon dioxide; nitrogen oxides; sulfur dioxide; PM2.5 | Sub-meter, invoice, fuel stock, operating log and emission measurement or calculation record | process_id; exact energy or emission identity; meter start and end or stock movement; quantity; unit; fuel net calorific value when used; steam condition when used; operating time; line throughput; allocation driver; emission factor or measurement basis when used | Record electricity, purchased steam, purchased hot water, natural gas, diesel and LPG separately by process; record carbon dioxide, nitrogen oxides, sulfur dioxide and PM2.5 as four separate air-emission series | kWh, MJ, kg fuel, kg steam or kg emission | Each batch or at least monthly | Same period as product output | Every included process line and shared utility centre | Convert each energy identity separately; subtract exports; allocate only residual shared use; calculate each named emission separately; normalize to conforming output | Meter calibration; invoice; stock reconciliation; conversion source; allocation worksheet; emission measurement or factor record |
| `cp_water_and_wastewater` | `reception_and_cream_preparation` | Process water; sodium hydroxide; nitric acid; peracetic acid; wastewater | Water and effluent meter, chemical issue record and treatment log | process_id; exact exchange identity; intake or issue; internal recycle; discharge; quantity; unit; concentration for each CIP chemical; sampling point; destination | Record process water, sodium hydroxide, nitric acid, peracetic acid and wastewater as five separate series for every included process | kg or m3 | Daily or per campaign | Same period as product output | Entire included dairy site with process allocation | Keep each water or chemical identity and each process wastewater separate; do not double count recycle; allocate a shared discharge only by measured volume or documented load driver | Meter calibration; chemical issue reconciliation; water balance; laboratory report; treatment operator record |
| `cp_process_mass_balance` | `reception_and_cream_preparation` | Prepared cattle-milk cream; prepared cattle-milk butter; cattle skim milk; rejected cattle milk; rejected cattle-milk cream; rejected cattle-milk butter; filter residue | Tank, batch and transfer records | exact exchange identity; opening stock; receipt; transfer mass; closing stock; reject mass; residue mass; milkfat; moisture | Reconcile each named material independently for every campaign and for monthly totals | kg and % m/m | Each transfer and campaign | Same period as product output | Each included site and line | Preserve separate balances for prepared cream, prepared butter, skim milk, each rejected dairy material and filter residue; investigate rather than merge unexplained loss | Calibrated meters; signed batch record; reconciliation residual and investigation |
| `cp_butter_batch` | `butter_manufacture` | Cattle-milk cream; starter culture; sodium chloride; formulation water; beta-carotene; cattle-milk butter; cattle-milk butterfat; buttermilk; off-spec butter; filter residue | Churn or continuous-line batch record, ingredient issue record and laboratory result | exact exchange identity; input mass; batch start and end; product or co-product mass; milkfat; moisture; reject or residue mass | Record each named butter input and output separately for every batch or continuous campaign and retain composition tests | kg and % m/m | Each batch or campaign | Same period as product output | Every butter line | Reconcile total mass and milkfat while preserving one series per named input, product, co-product, waste and residue | Calibrated meters and scales; ingredient certificate; composition method; release record; mass and fat closure |
| `cp_concentrated_milkfat_batch` | `concentrated_milkfat_manufacture` | Cattle-milk cream; cattle-milk butter; diatomaceous earth; anhydrous milkfat; butter oil; ghee; non-fat cattle-milk phase; condensate; wastewater; filter residue; off-spec concentrated milkfat | Campaign flowmeter, tank, evaporator or separator record, filter-aid issue record and product laboratory result | exact exchange identity; input mass and composition; product mass, milkfat and water; separated phase mass; condensate; reject; residue; operating time | Record every named input and output separately for each campaign and laboratory release lot | kg and % m/m | Each campaign or lot | Same period as product output | Every concentration line | Reconcile total mass and milkfat while keeping anhydrous milkfat, butter oil, ghee, non-fat phase, condensate, wastewater, filter residue and reject as separate series | Flowmeter and scale calibration; laboratory result; campaign log; issue record; mass and fat closure |
| `cp_packaging_and_storage` | `product_packaging_and_storage` | Unpacked butter; unpacked anhydrous milkfat; unpacked butter oil; unpacked ghee; aluminium foil; paperboard; LDPE film; HDPE pail; steel drum; released reference product; each off-spec product; each packaging waste | Filler counter or scale, packaging issue log, warehouse and reject record | exact product or packaging identity; unpacked input; packed net output; issued packaging mass; unused return; waste mass; reject mass; rework; storage time and temperature | Record each named product, packaging input, off-spec product and packaging waste as a separate series and reconcile each production lot to released warehouse quantity | kg product, kg packaging, hours and degrees Celsius | Each lot | Same period as product output | Every included filling line and on-site store | Net product excludes packaging; calculate consumption and waste separately for aluminium foil, paperboard, LDPE film, HDPE pail and steel drum; keep each product form separate | Scale calibration; packaging specification; batch release; warehouse movement and waste disposition |
| `cp_refrigerant_records` | `product_packaging_and_storage` | R717 make-up; R717 emission; R134a make-up; R134a emission | Maintenance and refrigerant stock record | exact refrigerant; equipment; opening stock; purchase; recharge; recovery; closing stock; unrecovered loss; service area; process_id; period | Calculate R717 and R134a make-up separately and calculate unrecovered R717 and R134a emissions separately from reconciled stocks and service events | kg of the named refrigerant | Each service event and annual reconciliation | Same period as product output | All refrigeration serving included processes | Keep one series per refrigerant and per make-up or emission direction; allocate shared equipment only by documented cooling load or operating-time driver | Technician record; purchase and recovery certificate; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground inventory | normalized amount = period amount / net conforming saleable product mass; packaging mass is excluded from the denominator | period flow amount; released net product mass | amount per 1 kg reference product | `fao-dairy-accounting` |
| `calc_mass_balance` | Each process and route | opening stock + external inputs + internal transfers in = closing stock + product outputs + co-products + wastes + internal transfers out + quantified losses; report the residual and measurement uncertainty | stock; input; output; transfer; reject and loss records | process mass-balance residual | `fao-dairy-accounting` |
| `calc_milkfat_balance` | Reception, butter and concentrated milkfat routes | sum(input mass × input milkfat fraction) = sum(output mass × output milkfat fraction) + measured fat in waste and loss; report unexplained residual | mass and milkfat test results for all material streams | milkfat-balance residual | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `fao-dairy-accounting` |
| `calc_energy_conversion` | Fuels, steam and purchased heat | convert each measured carrier with its disclosed lower or higher heating value or enthalpy convention; never mix conventions within the reported series and never count both steam and its generating fuel | carrier quantity; calorific value or steam enthalpy; efficiency only when converting delivered to useful heat | MJ or kWh by carrier and process | `fao-idf-dairy-lca-2010` |
| `calc_coproduct_allocation` | Residual shared burdens after subdivision | allocated burden to product i = residual shared burden × declared allocation factor i; factors shall sum to 1 across co-products and a material alternative allocation shall be reported as sensitivity | residual shared burden; product quantities; physical relation or economic values; reference period | allocated residual burden and sensitivity result | `fao-idf-dairy-lca-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference flow and incoming dairy material | Demonstrate cattle-milk origin, product form and applicable CXS 279 or CXS 280 composition for each represented product lot; do not use the anhydrous-milkfat UUID for ordinary butter without a form-specific identity resolution. | Product specification; supplier declaration; lot release; milkfat and moisture tests; selected Tiangong UUID |
| `dq_temporal_representativeness` | All foreground records | Use a representative continuous 12-month period where production is year-round; a shorter period is allowed only when it covers the full declared seasonal campaign and seasonality is disclosed. | Meter and batch date coverage; production calendar; gap register |
| `dq_geographic_and_technical_scope` | Site and upstream datasets | Match the actual country or region, cattle-milk supply and manufacturing technology; disclose proxies and assess material mismatch. | Site metadata; supplier origin; equipment and route records; dataset geography and technology |
| `dq_completeness` | Mass, milkfat, energy, water and waste inventories | Reconcile process mass and milkfat balances, all utility meters and waste destinations; investigate unexplained residuals instead of forcing closure. | Signed balance worksheets; meter reconciliation; residual explanation; waste transfer evidence |
| `dq_hygiene_and_measurement_controls` | Product-contact water, ingredients and process control | Retain evidence that water and ingredients meet specifications and that hygienic control measures, monitoring and corrective actions are validated for the declared route. | Potable-water tests; ingredient certificates; HACCP or equivalent records; calibration and corrective-action logs |
| `dq_allocation_transparency` | Multi-product operations | Report subdivision, residual shared burdens, allocation method, factors, data year and sensitivity; upstream allocations remain separately disclosed. | Process map; sub-meter evidence; allocation workbook; price or composition evidence; sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | The dataset shall declare one covered product form, cattle-milk origin and all required qualifiers. The UUID `7f8eef6e-3ea0-4f74-bf72-c6f95af2c3fc` is accepted only for anhydrous-milkfat or explicitly equivalent concentrated forms; ordinary butter requires a form-specific resolved UUID. | `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validation_reference_amount` | Quantitative reference | The net reference output shall equal exactly 1 kg on Mass property `93a60a56-a3c8-11da-a746-0800200b9a66` in kg from unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, excluding packaging. |  |
| `validation_product_composition` | Finished product | Butter shall have at least 80% m/m milkfat, no more than 16% m/m water and no more than 2% m/m milk solids-not-fat. Anhydrous milkfat or anhydrous butter oil shall have at least 99.8% m/m milkfat and no more than 0.1% m/m water; other CXS 280 forms shall satisfy their applicable declared limits. | `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validation_process_selection` | Process map | `reception_and_cream_preparation` and `product_packaging_and_storage` shall be included, and at least one of `butter_manufacture` or `concentrated_milkfat_manufacture` shall be included consistently with the declared product form. | `tetrapak-butter-handbook`; `tetrapak-amf-handbook` |
| `validation_mass_and_fat_closure` | Foreground process records | Each included process shall report mass-balance and milkfat-balance residuals with measurement uncertainty and an explanation for material residuals; balance closure shall not be fabricated by inserting an unmeasured loss. | `fao-dairy-accounting` |
| `validation_inventory_coverage` | Foreground inventory | Require one atomic exchange card for each used or generated identity: cattle milk, cattle-milk cream, cattle-milk butter, process water, each named ingredient or processing aid, each CIP chemical, electricity, purchased steam, purchased hot water, natural gas, diesel, LPG, R717 make-up, R134a make-up, each named product and co-product, wastewater, each solid or packaging waste, carbon dioxide, nitrogen oxides, sulfur dioxide, PM2.5, R717 emission and R134a emission. A selector or combined flow name shall fail validation; a genuinely absent exchange shall be documented as non-applicable rather than represented by an aggregate card. | `fao-idf-dairy-lca-2010`; `codex-cxc-57-2004`; `tetrapak-dairy-effluent` |
| `validation_collection_links` | Collected and calculated inventory rows | Every row with `collected_record` or `calculated_from_collection` evidence shall reference an implemented collection protocol, and every calculated row shall identify its calculation rule or reproducible worksheet. |  |
| `validation_allocation` | Co-products and shared operations | Direct burdens shall be subdivided before allocation; residual allocation factors shall sum to 1, use one disclosed basis across the reporting period and include a sensitivity result when the method materially affects the product result. | `fao-idf-dairy-lca-2010` |
| `validation_no_double_counting` | Utilities, recycle and upstream processes | Verify that purchased steam and boiler fuel, recycled water and fresh water, rework and new input, refrigerant loss assignments, and upstream dairy production are each counted once. | `fao-idf-dairy-lca-2010`; `fao-dairy-accounting` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground data package for a declared cattle-milk butter or milkfat product, publishable as a unit process or aggregated gate-to-gate dataset after review |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Attributional product LCA, supply-chain modelling, verified processor-gate comparison of like product forms, hotspot analysis and downstream food-system models when geography, technology, allocation and product specification are compatible |
| excluded_use | Comparative assertions between unlike butter and concentrated-milkfat forms; nutrition or food-safety certification; claims outside the represented geography or period without representativeness review; consequential market modelling without an explicit reformulation |
| required_metadata | PCR id and version state; product form and Tiangong flow identity; cattle-milk origin; CXS product specification; plant and geography; technology and route; reference period; system boundary; upstream datasets; allocation method and factors; packaging and storage state; data owners and review status |
| required_quality_disclosure | Primary-data coverage; meter and test methods; mass and milkfat residuals; missing-flow UUIDs; proxy datasets; temporal, geographic and technology limitations; cut-offs; co-product sensitivity; uncertainty and reviewer findings |
| update_trigger | Product-form or route change; supplier or cattle-milk origin change; material change in milkfat or moisture specification, energy system, packaging, co-product use or allocation; new form-specific Tiangong flow identity; reference data expiry; more representative 12-month foreground records; corrected mass or milkfat closure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-279-1971` | Standard (`standard`) | Codex Alimentarius Commission. CXS 279-1971, Standard for Butter, adopted 1971, amended through 2022. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B279-1971%252FCXS_279e.pdf. Retrieved 2026-08-10. | Butter identity, permitted ingredients, composition and product-quality validation |
| `codex-cxs-280-1973` | Standard (`standard`) | Codex Alimentarius Commission. CXS 280-1973, Standard for Milkfat Products, adopted 1973, amended through 2022. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B280-1973%252FCXS_280e.pdf. Retrieved 2026-08-10. | Anhydrous milkfat, milkfat, butter-oil and ghee identity, composition and validation |
| `codex-cxc-57-2004` | Standard (`standard`) | Codex Alimentarius Commission. CXC 57-2004, Code of Hygienic Practice for Milk and Milk Products, revised 2009. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B57-2004%252FCXC_057e.pdf. Retrieved 2026-08-10. | Validated hygiene controls, ingredient specifications, potable and recycled water controls, quality evidence |
| `fao-idf-dairy-lca-2010` | Official guidance (`official_guidance`) | FAO. 2010. Greenhouse Gas Emissions from the Dairy Sector: A Life Cycle Assessment. https://www.fao.org/4/k7930e/k7930e00.pdf. Retrieved 2026-08-10. | Dairy supply-chain boundary, functional-unit context, inventory completeness, co-product allocation and sensitivity |
| `fao-dairy-accounting` | Official guidance (`official_guidance`) | FAO. Guideline for Dairy Accounting, Butter Section. https://www.fao.org/4/x6523e/X6523E01.htm. Retrieved 2026-08-10. | Cream-ripening, churning and packaging record structure; batch quantities, butter and buttermilk yield and mass reconciliation |
| `tetrapak-butter-handbook` | Handbook (`handbook`) | Tetra Pak. Dairy Processing Handbook, Butter. https://dairyprocessinghandbook.tetrapak.com/chapter/butter. Retrieved 2026-08-10. | Butter process decomposition: cream preparation, pasteurization, ripening, churning, working, salting, packaging and cold storage |
| `tetrapak-amf-handbook` | Handbook (`handbook`) | Tetra Pak. Dairy Processing Handbook, Anhydrous Milk Fat and Butter Oil. https://dairyprocessinghandbook.tetrapak.com/chapter/anhydrous-milk-fat-amf-and-butter-oil. Retrieved 2026-08-10. | Concentrated-milkfat route decomposition from cream or reworked butter, phase separation and moisture removal |
| `tetrapak-dairy-effluent` | Handbook (`handbook`) | Tetra Pak. Dairy Processing Handbook, Dairy Effluent. https://dairyprocessinghandbook.tetrapak.com/chapter/dairy-effluent. Retrieved 2026-08-10. | Product-loss prevention, segregation of butter and cream residues, wastewater and waste destination records |
