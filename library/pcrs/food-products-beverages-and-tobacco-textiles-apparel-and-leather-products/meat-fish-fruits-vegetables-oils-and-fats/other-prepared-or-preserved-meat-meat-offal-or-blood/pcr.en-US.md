---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-or-preserved-meat-meat-offal-or-blood
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other prepared or preserved meat, meat offal or blood

## 1. Scope and Applicability

This PCR applies to a product-specific foreground dataset for CPC 21189 when meat, edible anatomical tissue, or blood from a declared terrestrial mammal, marine mammal, bird, or frog is prepared or preserved by a method other than freezing, salting, brining, smoking, or drying. The dataset must identify every animal species, anatomical tissue, blood source, recipe input, final product form, package article, market temperature state, and preservation route with no pooled identity.

Covered routes include a declared cooking, frying, roasting, steaming, stuffing, hermetic canning, vinegar-pickling, seasoning, mincing, paste, pâté, rillettes, or galantine route only when the resulting product remains within CPC 21189. A route name alone never establishes category identity: the exact non-sausage product form and ingredient bill of materials must also be declared.

The following are outside this PCR: products preserved principally by freezing; salted, brined, dried, or smoked products in CPC 21181–21183; sausages or similar products in CPC 21184; meat extracts or juices in CPC 21185; complete dishes or meals in CPC 21186; homogenized infant-type preparations; fish, crustacean, mollusc, or other aquatic-animal preparations outside the stated mammal and frog scope; and upstream animal raising, capture, slaughter, inbound transport, downstream distribution, retail, preparation by the consumer, and end-of-life. An integrated facility may report an excluded life-cycle stage as a separately identified linked process, never by silently enlarging this foreground boundary.

No inventory amount or range in this candidate PCR is a category default. Every non-reference amount is produced from a foreground record or a calculation based on collected records. Unlisted identities require a new atomic card and review; a collection or selector label is not a permissible substitute.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-or-preserved-meat-meat-offal-or-blood` |
| classification_refs | UN CPC 3.0: `21189` — Other prepared or preserved meat, meat offal or blood (`exact`) |
| covered_products | Declared non-sausage preparations of meat, edible anatomical tissue, or blood from terrestrial mammals, marine mammals, birds, or frogs; examples in the inventory include cooked pieces, fried pieces, roasted pieces, steamed frog legs, stuffed meat roll, canned pieces, vinegar-pickled pieces, seasoned minced patty, pâté, meat paste, rillettes, galantine, and steamed blood curd. |
| excluded_products | CPC 21181–21183 salted, brined, dried, or smoked products; CPC 21184 sausages; CPC 21185 extracts or juices; CPC 21186 complete dishes or meals; homogenized infant-type preparations; final products defined by freezing; fish, crustacean, or mollusc preparations. |
| representative_product | One declared net conforming CPC 21189 product with an exact species and anatomical recipe, one concrete non-sausage form, one locked preservation route, and a declared ambient or chilled market state. |
| production_route | Factory-gate receipt and temperature control; preparation and formulation; exactly one applicable preservation branch among the named thermal route, hermetic canning, or pickling/seasoning; final packaging and release; sanitation; conditional on-site wastewater treatment. |
| market_state | Net saleable product at the manufacturing gate, ambient shelf-stable or chilled as declared; packaging is inventoried but excluded from reference-product mass, and freezing is not the defining preservation route. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a declared prepared or preserved meat, edible anatomical tissue, or blood product within CPC 21189. |
| How much | 1 kg net conforming product at manufacturing-gate release. |
| How well | Meets the declared recipe, anatomical identity, product-form, preservation-process, package-integrity, food-safety, legal-market, and release specifications; package mass is excluded. |
| How long or cycle | One production lot from factory-gate receipt through finished-product release; storage duration and temperature are lot-specific records. |
| reference_flow_link | The 1 kg net reference amount is the UUID-bearing output of `packaging_storage_release`; all foreground exchanges are normalized through measured stage transfers to that output. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product, excluding packaging. |
| Reference product flow | Other prepared or preserved meat, meat offal or blood `61b39162-1ed6-4d66-b54b-9c0889bd9fc4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Exact animal species; exact anatomical tissue or blood source for every animal-origin recipe input; incoming chilled or frozen state; concrete non-sausage product form; exactly one preservation route; recipe and additive specification; final ambient or chilled state; primary and secondary package specification; net-mass method; lot and site; time period; allocation choice; waste and co-product destinations; lawful sourcing declaration where relevant. |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_ref_net_mass | Reference product | Mass | kg | Determine net conforming product mass on calibrated equipment after excluding every package component, nonconforming product, retained sample not sold, and measurable free liquid not included in the declared product specification. |
| mu_stage_mass | Animal inputs, ingredients, transfers, products, co-products, and solid wastes | Mass | kg | Preserve gross readings and tare records; report net mass by exact atomic identity and normalize only after the stage mass balance is closed. |
| mu_package_count | Package articles | Mass | kg | When purchasing records use item counts, multiply count by a lot-specific measured item mass; keep each container, closure, film, label, adhesive, pallet, or strap as a separate exchange. |
| mu_energy_carrier | Grid electricity | Energy | kWh | Preserve metered electricity in kWh and never aggregate it with steam, hot water, natural gas, diesel, liquefied petroleum gas, or compressed air. |
| mu_thermal_carrier | Steam, hot water, natural gas, diesel, liquefied petroleum gas | Energy | MJ | Convert each carrier separately with the documented invoice basis or measured net calorific value; do not create a combined thermal-energy value. |
| mu_compressed_air | Purchased compressed air | Volume | m3 | Use separately metered delivered volume at the declared reference conditions and disclose those conditions. |
| mu_water_source | Mains water, groundwater, surface water, wastewater | Mass | kg | Keep each source or point-of-generation stream separate; volume may be converted only with documented density and temperature assumptions. |
| mu_refrigerant | Refrigerant make-up, recovery, and leakage species | Mass | kg | Close a refrigerant inventory balance by named refrigerant; split R404A loss into HFC-125, HFC-134a, and HFC-143a emissions using the supplier composition record. |
| mu_effluent_load | Each wastewater substance | Mass | kg | Calculate one pollutant at a time from matched effluent flow and laboratory concentration over the same interval; retain units, sampling basis, non-detect treatment, and discharge compartment. |
| mu_route_yield | Every process transfer | Mass | kg | Calculate input, conforming output, co-product, waste, and stock change by process and lot; never infer a missing flow by borrowing another product form or route. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-gate receipt of separately identified chilled or frozen meat, anatomical tissue, or blood plus exact recipe ingredients, energy carriers, water sources, refrigerants, and package articles. |
| starting_condition_role | Purchased upstream product inputs and elementary water withdrawals entering the prepared-product foreground system. |
| product_classification_scope | Exact CPC 21189. Correct exclusion references are CPC 21182 and CPC 21183, not the erroneous 22182 and 22183 numbers found in the verified reference-flow comment. |
| recursive_input_rule | If an input is itself a CPC 21189 prepared product, record it as one separately identified purchased ingredient with its own producer-stage origin, product form, route, and UUID status; do not recursively substitute this PCR reference flow for the input. |
| upstream_dataset_requirement | Link animal-origin inputs, recipe ingredients, fuels, electricity, water supply, refrigerants, and package articles to quality-assessed upstream datasets. Use slaughter or animal-by-product operations as separate linked datasets when actually upstream; do not force them into a non-integrated prepared-product plant. |
| disclosure | Declare site, reporting period, exact bill of materials, receipt state, one preservation branch, process equipment, time-temperature or scheduled-process records, finished state, package specification, refrigerant system, water source, wastewater destination, co-product use, allocation, and all excluded life-cycle stages. |

The foreground boundary includes receipt and temperature-controlled holding, inspection, declared preparation and formulation operations, the selected preservation branch, cooling where part of that branch, final packaging, finished-product storage and release, sanitation, and conditional on-site wastewater treatment. Supplier operations and transport before the gate, downstream distribution, retail, consumer use, and end-of-life remain outside this foreground boundary unless modelled as separately identified linked processes.

The thermal branch requires the exact cooking, frying, roasting, or steaming method. The canning branch requires hermetic filling, closure, a documented scheduled thermal process, cooling, integrity review, and deviation records. The pickling or seasoning branch must not be used to relabel a product whose defining preservation method is salting, brining, smoking, drying, or freezing.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt` | Raw-material receipt and temperature-controlled holding | `required` | Always included from factory-gate receipt through release to preparation. | foreground production | 1 kg accepted animal-origin material released to preparation |
| `preparation_formulation` | Preparation, formulation, mincing, mixing, and forming | `required` | Always included; record only the declared cutting, deboning, mincing, mixing, seasoning, filling, or forming operations. | foreground production | 1 kg declared route precursor released |
| `thermal_preservation` | Declared cooking, frying, roasting, or steaming route | `conditional` | Include when the locked preservation route is cooking, frying, roasting, or steaming; choose one named route and one concrete product-form transfer. | foreground production | 1 kg thermally processed product released |
| `hermetic_canning` | Hermetic filling, closure, thermal processing, and cooling | `conditional` | Include only for a declared hermetically sealed canned product made under a documented scheduled process. | foreground production | 1 kg net canned product released, excluding container mass |
| `pickling_seasoning` | Declared pickling or seasoning preservation route | `conditional` | Include when pickling or seasoning is the locked route and freezing, salting, brining, smoking, and drying are not the defining preservation method. | foreground production | 1 kg pickled or seasoned product released |
| `packaging_storage_release` | Final packaging, finished-product storage, and release | `required` | Always included; final state is ambient shelf-stable or chilled, and primary preservation is not freezing. | foreground production | 1 kg net conforming reference product released |
| `sanitation_wastewater` | Sanitation and conditional on-site wastewater treatment | `required` | Sanitation is always included; on-site wastewater treatment is included only when operated by the reporting facility. | foreground support | Sanitation records allocated to the same production lot |

### Process: Raw-material receipt and temperature-controlled holding (`raw_material_receipt`)

This process uses 1 kg accepted animal-origin material released to preparation as its quantitative reference. Apply only its concrete cards that match the locked bill of materials, package, equipment, destination, and route; absence must be demonstrated from records rather than replaced by a pooled exchange.

#### Inputs

##### Product flows

###### Grid electricity input (`raw_material_receipt_grid_electricity`)

Grid electricity is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the separately metered or invoiced grid electricity used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Purchased steam input (`raw_material_receipt_purchased_steam`)

Purchased steam is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased steam used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Purchased hot water input (`raw_material_receipt_purchased_hot_water`)

Purchased hot water is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased hot water used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Natural gas input (`raw_material_receipt_natural_gas`)

Natural gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced natural gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Diesel input (`raw_material_receipt_diesel`)

Diesel is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Diesel
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced diesel used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`raw_material_receipt_liquefied_petroleum_gas`)

Liquefied petroleum gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced liquefied petroleum gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Purchased compressed air input (`raw_material_receipt_purchased_compressed_air`)

Purchased compressed air is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the separately metered or invoiced purchased compressed air used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Potable mains water input (`raw_material_receipt_potable_mains_water`)

Potable mains water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Potable mains water
- Flow property / unit: Mass / kg
- Amount rule: Record potable mains water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Ammonia refrigerant R717 make-up (`raw_material_receipt_ammonia_refrigerant_r717`)

Ammonia refrigerant R717 make-up is a single product exchange. Record it only for the named installed refrigerant system.

- Selected flow: Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Record actual refrigerant make-up mass from maintenance issue records for the declared refrigeration system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a make-up (`raw_material_receipt_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`)

1,1,1,2-Tetrafluoroethane refrigerant HFC-134a make-up is a single product exchange. Record it only for the named installed refrigerant system.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- Flow property / unit: Mass / kg
- Amount rule: Record actual refrigerant make-up mass from maintenance issue records for the declared refrigeration system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### R404A refrigerant blend make-up (`raw_material_receipt_r404a_refrigerant_blend`)

R404A refrigerant blend make-up is a single product exchange. Record it only for the named installed refrigerant system.

- Selected flow: R404A refrigerant blend
- Flow property / unit: Mass / kg
- Amount rule: Record actual refrigerant make-up mass from maintenance issue records for the declared refrigeration system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Potable ice input (`raw_material_receipt_potable_ice`)

Potable ice is recorded separately when it enters direct product contact or temperature control at receipt.

- Selected flow: Potable ice
- Flow property / unit: Mass / kg
- Amount rule: Record the net quantity crossing this process boundary from calibrated foreground records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### chilled beef skeletal muscle input (`raw_material_receipt_input_chilled_beef_skeletal_muscle`)

Chilled beef skeletal muscle is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled beef skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen beef skeletal muscle input (`raw_material_receipt_input_frozen_beef_skeletal_muscle`)

Frozen beef skeletal muscle is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen beef skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled pork skeletal muscle input (`raw_material_receipt_input_chilled_pork_skeletal_muscle`)

Chilled pork skeletal muscle is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled pork skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen pork skeletal muscle input (`raw_material_receipt_input_frozen_pork_skeletal_muscle`)

Frozen pork skeletal muscle is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen pork skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled mutton skeletal muscle input (`raw_material_receipt_input_chilled_mutton_skeletal_muscle`)

Chilled mutton skeletal muscle is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled mutton skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen mutton skeletal muscle input (`raw_material_receipt_input_frozen_mutton_skeletal_muscle`)

Frozen mutton skeletal muscle is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen mutton skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled rabbit meat input (`raw_material_receipt_input_chilled_rabbit_meat`)

Chilled rabbit meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen rabbit meat input (`raw_material_receipt_input_frozen_rabbit_meat`)

Frozen rabbit meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled chicken meat input (`raw_material_receipt_input_chilled_chicken_meat`)

Chilled chicken meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled chicken meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen chicken meat input (`raw_material_receipt_input_frozen_chicken_meat`)

Frozen chicken meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen chicken meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled duck meat input (`raw_material_receipt_input_chilled_duck_meat`)

Chilled duck meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled duck meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen duck meat input (`raw_material_receipt_input_frozen_duck_meat`)

Frozen duck meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen duck meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled frog legs input (`raw_material_receipt_input_chilled_frog_legs`)

Chilled frog legs is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen frog legs input (`raw_material_receipt_input_frozen_frog_legs`)

Frozen frog legs is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled seal meat input (`raw_material_receipt_input_chilled_seal_meat`)

Chilled seal meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled seal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen seal meat input (`raw_material_receipt_input_frozen_seal_meat`)

Frozen seal meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen seal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled whale meat input (`raw_material_receipt_input_chilled_whale_meat`)

Chilled whale meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled whale meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen whale meat input (`raw_material_receipt_input_frozen_whale_meat`)

Frozen whale meat is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen whale meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled beef liver input (`raw_material_receipt_input_chilled_beef_liver`)

Chilled beef liver is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled beef liver
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen beef liver input (`raw_material_receipt_input_frozen_beef_liver`)

Frozen beef liver is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen beef liver
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled pork liver input (`raw_material_receipt_input_chilled_pork_liver`)

Chilled pork liver is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled pork liver
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen pork liver input (`raw_material_receipt_input_frozen_pork_liver`)

Frozen pork liver is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen pork liver
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled beef heart input (`raw_material_receipt_input_chilled_beef_heart`)

Chilled beef heart is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled beef heart
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen beef heart input (`raw_material_receipt_input_frozen_beef_heart`)

Frozen beef heart is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen beef heart
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled beef tongue input (`raw_material_receipt_input_chilled_beef_tongue`)

Chilled beef tongue is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled beef tongue
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen beef tongue input (`raw_material_receipt_input_frozen_beef_tongue`)

Frozen beef tongue is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen beef tongue
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled pig blood input (`raw_material_receipt_input_chilled_pig_blood`)

Chilled pig blood is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled pig blood
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen pig blood input (`raw_material_receipt_input_frozen_pig_blood`)

Frozen pig blood is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen pig blood
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chilled bovine blood input (`raw_material_receipt_input_chilled_bovine_blood`)

Chilled bovine blood is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Chilled bovine blood
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact chilled animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### frozen bovine blood input (`raw_material_receipt_input_frozen_bovine_blood`)

Frozen bovine blood is one exact animal-origin ingredient crossing the factory-gate boundary. It is not a proxy for another species, tissue, blood source, or receipt state.

- Selected flow: Frozen bovine blood
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of this exact frozen animal, tissue, or blood identity after subtracting transport packaging; preserve supplier lot and receipt-temperature records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

No exchange is prescribed in this flow-type group for this process.

##### Elementary flows

###### Groundwater input (`raw_material_receipt_groundwater`)

Groundwater is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Groundwater
- Flow property / unit: Mass / kg
- Amount rule: Record groundwater withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Surface water input (`raw_material_receipt_surface_water`)

Surface water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Surface water
- Flow property / unit: Mass / kg
- Amount rule: Record surface water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_resource`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### accepted beef skeletal muscle (`raw_material_receipt_output_accepted_beef_skeletal_muscle`)

Accepted beef skeletal muscle is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted beef skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted pork skeletal muscle (`raw_material_receipt_output_accepted_pork_skeletal_muscle`)

Accepted pork skeletal muscle is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted pork skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted mutton skeletal muscle (`raw_material_receipt_output_accepted_mutton_skeletal_muscle`)

Accepted mutton skeletal muscle is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted mutton skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted rabbit meat (`raw_material_receipt_output_accepted_rabbit_meat`)

Accepted rabbit meat is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted chicken meat (`raw_material_receipt_output_accepted_chicken_meat`)

Accepted chicken meat is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted chicken meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted duck meat (`raw_material_receipt_output_accepted_duck_meat`)

Accepted duck meat is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted duck meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted frog legs (`raw_material_receipt_output_accepted_frog_legs`)

Accepted frog legs is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted seal meat (`raw_material_receipt_output_accepted_seal_meat`)

Accepted seal meat is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted seal meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted whale meat (`raw_material_receipt_output_accepted_whale_meat`)

Accepted whale meat is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted whale meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted beef liver (`raw_material_receipt_output_accepted_beef_liver`)

Accepted beef liver is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted beef liver
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted pork liver (`raw_material_receipt_output_accepted_pork_liver`)

Accepted pork liver is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted pork liver
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted beef heart (`raw_material_receipt_output_accepted_beef_heart`)

Accepted beef heart is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted beef heart
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted beef tongue (`raw_material_receipt_output_accepted_beef_tongue`)

Accepted beef tongue is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted beef tongue
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted pig blood (`raw_material_receipt_output_accepted_pig_blood`)

Accepted pig blood is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted pig blood
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted bovine blood (`raw_material_receipt_output_accepted_bovine_blood`)

Accepted bovine blood is a single internal product transfer after receipt inspection, with species and anatomical identity preserved.

- Selected flow: Accepted bovine blood
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass released to preparation after inspection; retain the incoming chilled or frozen state in lot metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_material`
- Sources: `unsd-cpc-3-21189`, `eu-reg-853-2004`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

###### Recovered Ammonia refrigerant R717 (`raw_material_receipt_recovered_ammonia_refrigerant_r717`)

Recovered Ammonia refrigerant R717 is a separate maintenance waste exchange from the declared refrigeration system.

- Selected flow: Recovered Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant mass recovered for reclamation or controlled disposal from maintenance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a (`raw_material_receipt_recovered_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`)

Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a is a separate maintenance waste exchange from the declared refrigeration system.

- Selected flow: Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant mass recovered for reclamation or controlled disposal from maintenance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Recovered R404A refrigerant blend (`raw_material_receipt_recovered_r404a_refrigerant_blend`)

Recovered R404A refrigerant blend is a separate maintenance waste exchange from the declared refrigeration system.

- Selected flow: Recovered R404A refrigerant blend
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant mass recovered for reclamation or controlled disposal from maintenance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### rejected beef skeletal muscle (`raw_material_receipt_waste_rejected_beef_skeletal_muscle`)

Rejected beef skeletal muscle is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected beef skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected pork skeletal muscle (`raw_material_receipt_waste_rejected_pork_skeletal_muscle`)

Rejected pork skeletal muscle is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected pork skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected mutton skeletal muscle (`raw_material_receipt_waste_rejected_mutton_skeletal_muscle`)

Rejected mutton skeletal muscle is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected mutton skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected rabbit meat (`raw_material_receipt_waste_rejected_rabbit_meat`)

Rejected rabbit meat is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected chicken meat (`raw_material_receipt_waste_rejected_chicken_meat`)

Rejected chicken meat is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected chicken meat
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected duck meat (`raw_material_receipt_waste_rejected_duck_meat`)

Rejected duck meat is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected duck meat
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected frog legs (`raw_material_receipt_waste_rejected_frog_legs`)

Rejected frog legs is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected seal meat (`raw_material_receipt_waste_rejected_seal_meat`)

Rejected seal meat is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected seal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected whale meat (`raw_material_receipt_waste_rejected_whale_meat`)

Rejected whale meat is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected whale meat
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected beef liver (`raw_material_receipt_waste_rejected_beef_liver`)

Rejected beef liver is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected beef liver
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected pork liver (`raw_material_receipt_waste_rejected_pork_liver`)

Rejected pork liver is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected pork liver
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected beef heart (`raw_material_receipt_waste_rejected_beef_heart`)

Rejected beef heart is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected beef heart
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected beef tongue (`raw_material_receipt_waste_rejected_beef_tongue`)

Rejected beef tongue is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected beef tongue
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected pig blood (`raw_material_receipt_waste_rejected_pig_blood`)

Rejected pig blood is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected pig blood
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected bovine blood (`raw_material_receipt_waste_rejected_bovine_blood`)

Rejected bovine blood is a single species- and tissue-specific waste stream from receipt inspection.

- Selected flow: Rejected bovine blood
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed rejected mass and documented waste destination; do not net it against accepted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Discarded low-density polyethylene raw-material liner (`raw_material_receipt_discarded_low_density_polyethylene_raw_material_liner`)

Discarded low-density polyethylene raw-material liner is one material-specific inbound packaging waste exchange.

- Selected flow: Discarded low-density polyethylene raw-material liner
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed material becoming waste at receipt; exclude returned reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `eu-pef-2021-2279`

###### Discarded corrugated fibreboard raw-material box (`raw_material_receipt_discarded_corrugated_fibreboard_raw_material_box`)

Discarded corrugated fibreboard raw-material box is one material-specific inbound packaging waste exchange.

- Selected flow: Discarded corrugated fibreboard raw-material box
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed material becoming waste at receipt; exclude returned reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `eu-pef-2021-2279`

###### Discarded high-density polyethylene raw-material tote (`raw_material_receipt_discarded_high_density_polyethylene_raw_material_tote`)

Discarded high-density polyethylene raw-material tote is one material-specific inbound packaging waste exchange.

- Selected flow: Discarded high-density polyethylene raw-material tote
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed material becoming waste at receipt; exclude returned reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `eu-pef-2021-2279`

###### Discarded wooden raw-material pallet (`raw_material_receipt_discarded_wooden_raw_material_pallet`)

Discarded wooden raw-material pallet is one material-specific inbound packaging waste exchange.

- Selected flow: Discarded wooden raw-material pallet
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed material becoming waste at receipt; exclude returned reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `eu-pef-2021-2279`

###### Raw-material thawing wastewater (`raw_material_receipt_raw_material_thawing_wastewater`)

Raw-material thawing wastewater is a distinct aqueous waste stream from receipt handling and is not pooled with another process wastewater card.

- Selected flow: Raw-material thawing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density and preserve its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Raw-material drip-loss wastewater (`raw_material_receipt_raw_material_drip_loss_wastewater`)

Raw-material drip-loss wastewater is a distinct aqueous waste stream from receipt handling and is not pooled with another process wastewater card.

- Selected flow: Raw-material drip-loss wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density and preserve its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_receipt_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide, fossil to air (`raw_material_receipt_carbon_dioxide_fossil_to_air`)

Carbon dioxide, fossil to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen monoxide to air (`raw_material_receipt_nitrogen_monoxide_to_air`)

Nitrogen monoxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen dioxide to air (`raw_material_receipt_nitrogen_dioxide_to_air`)

Nitrogen dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Sulfur dioxide to air (`raw_material_receipt_sulfur_dioxide_to_air`)

Sulfur dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter below 2.5 micrometres to air (`raw_material_receipt_particulate_matter_below_2_5_micrometres_to_air`)

Particulate matter below 2.5 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter from 2.5 to 10 micrometres to air (`raw_material_receipt_particulate_matter_from_2_5_to_10_micrometres_to_air`)

Particulate matter from 2.5 to 10 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Ammonia to air (`raw_material_receipt_ammonia_to_air`)

Ammonia to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### 1,1,1,2-Tetrafluoroethane HFC-134a to air (`raw_material_receipt_1_1_1_2_tetrafluoroethane_hfc_134a_to_air`)

1,1,1,2-Tetrafluoroethane HFC-134a to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: 1,1,1,2-Tetrafluoroethane HFC-134a to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Pentafluoroethane HFC-125 to air (`raw_material_receipt_pentafluoroethane_hfc_125_to_air`)

Pentafluoroethane HFC-125 to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: Pentafluoroethane HFC-125 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### 1,1,1-Trifluoroethane HFC-143a to air (`raw_material_receipt_1_1_1_trifluoroethane_hfc_143a_to_air`)

1,1,1-Trifluoroethane HFC-143a to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: 1,1,1-Trifluoroethane HFC-143a to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material_receipt_emission`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

### Process: Preparation, formulation, mincing, mixing, and forming (`preparation_formulation`)

This process uses 1 kg declared route precursor released as its quantitative reference. Apply only its concrete cards that match the locked bill of materials, package, equipment, destination, and route; absence must be demonstrated from records rather than replaced by a pooled exchange.

#### Inputs

##### Product flows

###### Grid electricity input (`preparation_formulation_grid_electricity`)

Grid electricity is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the separately metered or invoiced grid electricity used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased steam input (`preparation_formulation_purchased_steam`)

Purchased steam is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased steam used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased hot water input (`preparation_formulation_purchased_hot_water`)

Purchased hot water is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased hot water used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Natural gas input (`preparation_formulation_natural_gas`)

Natural gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced natural gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Diesel input (`preparation_formulation_diesel`)

Diesel is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Diesel
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced diesel used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`preparation_formulation_liquefied_petroleum_gas`)

Liquefied petroleum gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced liquefied petroleum gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased compressed air input (`preparation_formulation_purchased_compressed_air`)

Purchased compressed air is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the separately metered or invoiced purchased compressed air used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Potable mains water input (`preparation_formulation_potable_mains_water`)

Potable mains water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Potable mains water
- Flow property / unit: Mass / kg
- Amount rule: Record potable mains water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted beef skeletal muscle input (`preparation_formulation_input_accepted_beef_skeletal_muscle`)

Accepted beef skeletal muscle is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted beef skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted pork skeletal muscle input (`preparation_formulation_input_accepted_pork_skeletal_muscle`)

Accepted pork skeletal muscle is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted pork skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted mutton skeletal muscle input (`preparation_formulation_input_accepted_mutton_skeletal_muscle`)

Accepted mutton skeletal muscle is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted mutton skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted rabbit meat input (`preparation_formulation_input_accepted_rabbit_meat`)

Accepted rabbit meat is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted chicken meat input (`preparation_formulation_input_accepted_chicken_meat`)

Accepted chicken meat is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted chicken meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted duck meat input (`preparation_formulation_input_accepted_duck_meat`)

Accepted duck meat is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted duck meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted frog legs input (`preparation_formulation_input_accepted_frog_legs`)

Accepted frog legs is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted seal meat input (`preparation_formulation_input_accepted_seal_meat`)

Accepted seal meat is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted seal meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted whale meat input (`preparation_formulation_input_accepted_whale_meat`)

Accepted whale meat is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted whale meat
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted beef liver input (`preparation_formulation_input_accepted_beef_liver`)

Accepted beef liver is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted beef liver
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted pork liver input (`preparation_formulation_input_accepted_pork_liver`)

Accepted pork liver is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted pork liver
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted beef heart input (`preparation_formulation_input_accepted_beef_heart`)

Accepted beef heart is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted beef heart
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted beef tongue input (`preparation_formulation_input_accepted_beef_tongue`)

Accepted beef tongue is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted beef tongue
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted pig blood input (`preparation_formulation_input_accepted_pig_blood`)

Accepted pig blood is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted pig blood
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### accepted bovine blood input (`preparation_formulation_input_accepted_bovine_blood`)

Accepted bovine blood is one exact internal ingredient transfer into preparation and formulation.

- Selected flow: Accepted bovine blood
- Flow property / unit: Mass / kg
- Amount rule: Record accepted mass entering preparation from the receipt lot record; preserve exact species and anatomical identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### beef tallow recipe input (`preparation_formulation_beef_tallow`)

Beef tallow is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Beef tallow
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of beef tallow; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork lard recipe input (`preparation_formulation_pork_lard`)

Pork lard is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Pork lard
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of pork lard; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chicken fat recipe input (`preparation_formulation_chicken_fat`)

Chicken fat is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Chicken fat
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of chicken fat; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium chloride recipe input (`preparation_formulation_sodium_chloride`)

Sodium chloride is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sodium chloride; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sucrose recipe input (`preparation_formulation_sucrose`)

Sucrose is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sucrose; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### black pepper powder recipe input (`preparation_formulation_black_pepper_powder`)

Black pepper powder is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Black pepper powder
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of black pepper powder; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### paprika powder recipe input (`preparation_formulation_paprika_powder`)

Paprika powder is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Paprika powder
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of paprika powder; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### garlic powder recipe input (`preparation_formulation_garlic_powder`)

Garlic powder is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Garlic powder
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of garlic powder; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### onion powder recipe input (`preparation_formulation_onion_powder`)

Onion powder is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Onion powder
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of onion powder; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium nitrite recipe input (`preparation_formulation_sodium_nitrite`)

Sodium nitrite is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sodium nitrite; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium nitrate recipe input (`preparation_formulation_sodium_nitrate`)

Sodium nitrate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sodium nitrate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sodium nitrate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium erythorbate recipe input (`preparation_formulation_sodium_erythorbate`)

Sodium erythorbate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sodium erythorbate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sodium erythorbate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium ascorbate recipe input (`preparation_formulation_sodium_ascorbate`)

Sodium ascorbate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sodium ascorbate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sodium ascorbate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium tripolyphosphate recipe input (`preparation_formulation_sodium_tripolyphosphate`)

Sodium tripolyphosphate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sodium tripolyphosphate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sodium tripolyphosphate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### carrageenan recipe input (`preparation_formulation_carrageenan`)

Carrageenan is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Carrageenan
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of carrageenan; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### potato starch recipe input (`preparation_formulation_potato_starch`)

Potato starch is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Potato starch
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of potato starch; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### maize starch recipe input (`preparation_formulation_maize_starch`)

Maize starch is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Maize starch
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of maize starch; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### soy protein isolate recipe input (`preparation_formulation_soy_protein_isolate`)

Soy protein isolate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Soy protein isolate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of soy protein isolate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### milk protein concentrate recipe input (`preparation_formulation_milk_protein_concentrate`)

Milk protein concentrate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Milk protein concentrate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of milk protein concentrate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### dried egg white recipe input (`preparation_formulation_dried_egg_white`)

Dried egg white is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Dried egg white
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of dried egg white; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### acetic acid recipe input (`preparation_formulation_acetic_acid`)

Acetic acid is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of acetic acid; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### lactic acid recipe input (`preparation_formulation_lactic_acid`)

Lactic acid is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Lactic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of lactic acid; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### citric acid recipe input (`preparation_formulation_citric_acid`)

Citric acid is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of citric acid; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### wheat breadcrumbs recipe input (`preparation_formulation_wheat_breadcrumbs`)

Wheat breadcrumbs is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Wheat breadcrumbs
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of wheat breadcrumbs; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### spinach leaves recipe input (`preparation_formulation_spinach_leaves`)

Spinach leaves is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Spinach leaves
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of spinach leaves; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### carrot pieces recipe input (`preparation_formulation_carrot_pieces`)

Carrot pieces is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Carrot pieces
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of carrot pieces; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork stock recipe input (`preparation_formulation_pork_stock`)

Pork stock is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Pork stock
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of pork stock; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### beef stock recipe input (`preparation_formulation_beef_stock`)

Beef stock is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Beef stock
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of beef stock; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### edible bovine gelatine recipe input (`preparation_formulation_edible_bovine_gelatine`)

Edible bovine gelatine is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Edible bovine gelatine
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of edible bovine gelatine; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium lactate recipe input (`preparation_formulation_sodium_lactate`)

Sodium lactate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Sodium lactate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of sodium lactate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### potassium sorbate recipe input (`preparation_formulation_potassium_sorbate`)

Potassium sorbate is one exact recipe ingredient or additive. Its use is conditional on the locked product formulation and is never a proxy for another ingredient.

- Selected flow: Potassium sorbate
- Flow property / unit: Mass / kg
- Amount rule: Record the recipe-batch issue mass of potassium sorbate; retain supplier specification, food-law compliance, lot, and allergen declaration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

No exchange is prescribed in this flow-type group for this process.

##### Elementary flows

###### Groundwater input (`preparation_formulation_groundwater`)

Groundwater is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Groundwater
- Flow property / unit: Mass / kg
- Amount rule: Record groundwater withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Surface water input (`preparation_formulation_surface_water`)

Surface water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Surface water
- Flow property / unit: Mass / kg
- Amount rule: Record surface water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### seasoned beef skeletal-muscle pieces for cooking precursor (`preparation_formulation_output_seasoned_beef_pieces`)

Seasoned beef skeletal-muscle pieces for cooking is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Seasoned beef skeletal-muscle pieces for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### coated chicken meat pieces for frying precursor (`preparation_formulation_output_coated_chicken_pieces`)

Coated chicken meat pieces for frying is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Coated chicken meat pieces for frying
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned pork skeletal-muscle pieces for roasting precursor (`preparation_formulation_output_seasoned_pork_pieces`)

Seasoned pork skeletal-muscle pieces for roasting is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Seasoned pork skeletal-muscle pieces for roasting
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned frog legs for steaming precursor (`preparation_formulation_output_seasoned_frog_legs`)

Seasoned frog legs for steaming is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Seasoned frog legs for steaming
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### stuffed duck meat roll for roasting precursor (`preparation_formulation_output_stuffed_duck_roll`)

Stuffed duck meat roll for roasting is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Stuffed duck meat roll for roasting
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork liver pâté mixture for cooking precursor (`preparation_formulation_output_pork_liver_pate`)

Pork liver pâté mixture for cooking is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Pork liver pâté mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### beef meat-paste mixture for cooking precursor (`preparation_formulation_output_beef_meat_paste`)

Beef meat-paste mixture for cooking is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Beef meat-paste mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork rillettes mixture for cooking precursor (`preparation_formulation_output_pork_rillettes`)

Pork rillettes mixture for cooking is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Pork rillettes mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chicken galantine mixture for cooking precursor (`preparation_formulation_output_chicken_galantine`)

Chicken galantine mixture for cooking is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Chicken galantine mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pig-blood curd mixture for steaming precursor (`preparation_formulation_output_pig_blood_curd`)

Pig-blood curd mixture for steaming is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Pig-blood curd mixture for steaming
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned seal meat pieces for canning precursor (`preparation_formulation_output_seal_meat_canning`)

Seasoned seal meat pieces for canning is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Seasoned seal meat pieces for canning
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned whale meat pieces for canning precursor (`preparation_formulation_output_whale_meat_canning`)

Seasoned whale meat pieces for canning is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Seasoned whale meat pieces for canning
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork skeletal-muscle pieces for vinegar pickling precursor (`preparation_formulation_output_pork_vinegar_pickling`)

Pork skeletal-muscle pieces for vinegar pickling is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Pork skeletal-muscle pieces for vinegar pickling
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### unpreserved seasoned minced mutton patty precursor (`preparation_formulation_output_mutton_patty`)

Unpreserved seasoned minced mutton patty is one concrete product-form transfer. A data package selects it only with the matching declared formulation and route.

- Selected flow: Unpreserved seasoned minced mutton patty
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass released to the one declared preservation route from batch-scale records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### bovine bone co-product (`preparation_formulation_bovine_bone`)

Bovine bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Bovine bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### porcine bone co-product (`preparation_formulation_porcine_bone`)

Porcine bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Porcine bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### ovine bone co-product (`preparation_formulation_ovine_bone`)

Ovine bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Ovine bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### rabbit bone co-product (`preparation_formulation_rabbit_bone`)

Rabbit bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Rabbit bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### chicken bone co-product (`preparation_formulation_chicken_bone`)

Chicken bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Chicken bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### duck bone co-product (`preparation_formulation_duck_bone`)

Duck bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Duck bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### frog bone co-product (`preparation_formulation_frog_bone`)

Frog bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Frog bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### seal bone co-product (`preparation_formulation_seal_bone`)

Seal bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Seal bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### whale bone co-product (`preparation_formulation_whale_bone`)

Whale bone is a single animal-specific co-product exchange only when it has a documented function and market destination.

- Selected flow: Whale bone
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered bone leaving for a documented beneficial use; otherwise classify it as the matching waste destination in the data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Beef adipose tissue for rendering (`preparation_formulation_beef_adipose_tissue_for_rendering`)

Beef adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Beef adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Pork adipose tissue for rendering (`preparation_formulation_pork_adipose_tissue_for_rendering`)

Pork adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Pork adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Mutton adipose tissue for rendering (`preparation_formulation_mutton_adipose_tissue_for_rendering`)

Mutton adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Mutton adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Rabbit adipose tissue for rendering (`preparation_formulation_rabbit_adipose_tissue_for_rendering`)

Rabbit adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Rabbit adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Chicken adipose tissue for rendering (`preparation_formulation_chicken_adipose_tissue_for_rendering`)

Chicken adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Chicken adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Duck adipose tissue for rendering (`preparation_formulation_duck_adipose_tissue_for_rendering`)

Duck adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Duck adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Seal adipose tissue for rendering (`preparation_formulation_seal_adipose_tissue_for_rendering`)

Seal adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Seal adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Whale adipose tissue for rendering (`preparation_formulation_whale_adipose_tissue_for_rendering`)

Whale adipose tissue for rendering is a single animal-specific co-product transfer when recovery is documented.

- Selected flow: Whale adipose tissue for rendering
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed adipose tissue leaving for documented rendering; do not assign a co-product function without evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_material`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

##### Waste flows

###### rejected seasoned beef skeletal-muscle pieces for cooking (`preparation_formulation_waste_rejected_seasoned_beef_pieces`)

Rejected seasoned beef skeletal-muscle pieces for cooking is a single product-form-specific process waste.

- Selected flow: Rejected seasoned beef skeletal-muscle pieces for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected coated chicken meat pieces for frying (`preparation_formulation_waste_rejected_coated_chicken_pieces`)

Rejected coated chicken meat pieces for frying is a single product-form-specific process waste.

- Selected flow: Rejected coated chicken meat pieces for frying
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected seasoned pork skeletal-muscle pieces for roasting (`preparation_formulation_waste_rejected_seasoned_pork_pieces`)

Rejected seasoned pork skeletal-muscle pieces for roasting is a single product-form-specific process waste.

- Selected flow: Rejected seasoned pork skeletal-muscle pieces for roasting
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected seasoned frog legs for steaming (`preparation_formulation_waste_rejected_seasoned_frog_legs`)

Rejected seasoned frog legs for steaming is a single product-form-specific process waste.

- Selected flow: Rejected seasoned frog legs for steaming
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected stuffed duck meat roll for roasting (`preparation_formulation_waste_rejected_stuffed_duck_roll`)

Rejected stuffed duck meat roll for roasting is a single product-form-specific process waste.

- Selected flow: Rejected stuffed duck meat roll for roasting
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected pork liver pâté mixture for cooking (`preparation_formulation_waste_rejected_pork_liver_pate`)

Rejected pork liver pâté mixture for cooking is a single product-form-specific process waste.

- Selected flow: Rejected pork liver pâté mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected beef meat-paste mixture for cooking (`preparation_formulation_waste_rejected_beef_meat_paste`)

Rejected beef meat-paste mixture for cooking is a single product-form-specific process waste.

- Selected flow: Rejected beef meat-paste mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected pork rillettes mixture for cooking (`preparation_formulation_waste_rejected_pork_rillettes`)

Rejected pork rillettes mixture for cooking is a single product-form-specific process waste.

- Selected flow: Rejected pork rillettes mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected chicken galantine mixture for cooking (`preparation_formulation_waste_rejected_chicken_galantine`)

Rejected chicken galantine mixture for cooking is a single product-form-specific process waste.

- Selected flow: Rejected chicken galantine mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected pig-blood curd mixture for steaming (`preparation_formulation_waste_rejected_pig_blood_curd`)

Rejected pig-blood curd mixture for steaming is a single product-form-specific process waste.

- Selected flow: Rejected pig-blood curd mixture for steaming
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected seasoned seal meat pieces for canning (`preparation_formulation_waste_rejected_seal_meat_canning`)

Rejected seasoned seal meat pieces for canning is a single product-form-specific process waste.

- Selected flow: Rejected seasoned seal meat pieces for canning
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected seasoned whale meat pieces for canning (`preparation_formulation_waste_rejected_whale_meat_canning`)

Rejected seasoned whale meat pieces for canning is a single product-form-specific process waste.

- Selected flow: Rejected seasoned whale meat pieces for canning
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected pork skeletal-muscle pieces for vinegar pickling (`preparation_formulation_waste_rejected_pork_vinegar_pickling`)

Rejected pork skeletal-muscle pieces for vinegar pickling is a single product-form-specific process waste.

- Selected flow: Rejected pork skeletal-muscle pieces for vinegar pickling
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected unpreserved seasoned minced mutton patty (`preparation_formulation_waste_rejected_mutton_patty`)

Rejected unpreserved seasoned minced mutton patty is a single product-form-specific process waste.

- Selected flow: Rejected unpreserved seasoned minced mutton patty
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed precursor rejected before preservation and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### beef skeletal muscle trimming waste (`preparation_formulation_waste_trimming_beef_skeletal_muscle`)

Beef skeletal muscle trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Beef skeletal muscle trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### pork skeletal muscle trimming waste (`preparation_formulation_waste_trimming_pork_skeletal_muscle`)

Pork skeletal muscle trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Pork skeletal muscle trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### mutton skeletal muscle trimming waste (`preparation_formulation_waste_trimming_mutton_skeletal_muscle`)

Mutton skeletal muscle trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Mutton skeletal muscle trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### rabbit meat trimming waste (`preparation_formulation_waste_trimming_rabbit_meat`)

Rabbit meat trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Rabbit meat trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### chicken meat trimming waste (`preparation_formulation_waste_trimming_chicken_meat`)

Chicken meat trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Chicken meat trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### duck meat trimming waste (`preparation_formulation_waste_trimming_duck_meat`)

Duck meat trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Duck meat trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### frog legs trimming waste (`preparation_formulation_waste_trimming_frog_legs`)

Frog legs trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Frog legs trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### seal meat trimming waste (`preparation_formulation_waste_trimming_seal_meat`)

Seal meat trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Seal meat trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### whale meat trimming waste (`preparation_formulation_waste_trimming_whale_meat`)

Whale meat trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Whale meat trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### beef liver trimming waste (`preparation_formulation_waste_trimming_beef_liver`)

Beef liver trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Beef liver trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### pork liver trimming waste (`preparation_formulation_waste_trimming_pork_liver`)

Pork liver trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Pork liver trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### beef heart trimming waste (`preparation_formulation_waste_trimming_beef_heart`)

Beef heart trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Beef heart trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### beef tongue trimming waste (`preparation_formulation_waste_trimming_beef_tongue`)

Beef tongue trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Beef tongue trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### pig blood trimming waste (`preparation_formulation_waste_trimming_pig_blood`)

Pig blood trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Pig blood trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### bovine blood trimming waste (`preparation_formulation_waste_trimming_bovine_blood`)

Bovine blood trimming waste is a single species- and tissue-specific solid waste stream.

- Selected flow: Bovine blood trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed trimming mass for this exact animal or anatomical identity and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Cutting-equipment wash wastewater (`preparation_formulation_cutting_equipment_wash_wastewater`)

Cutting-equipment wash wastewater is one point-of-generation aqueous waste stream and is not pooled with another wastewater card.

- Selected flow: Cutting-equipment wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density, preserving point of generation and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Mincing-equipment wash wastewater (`preparation_formulation_mincing_equipment_wash_wastewater`)

Mincing-equipment wash wastewater is one point-of-generation aqueous waste stream and is not pooled with another wastewater card.

- Selected flow: Mincing-equipment wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density, preserving point of generation and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Formulation-equipment wash wastewater (`preparation_formulation_formulation_equipment_wash_wastewater`)

Formulation-equipment wash wastewater is one point-of-generation aqueous waste stream and is not pooled with another wastewater card.

- Selected flow: Formulation-equipment wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density, preserving point of generation and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Discarded kraft-paper ingredient bag (`preparation_formulation_discarded_kraft_paper_ingredient_bag`)

Discarded kraft-paper ingredient bag is one material-specific empty ingredient-package waste exchange.

- Selected flow: Discarded kraft-paper ingredient bag
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed empty ingredient packaging becoming waste; retain the material identity and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `eu-pef-2021-2279`

###### Discarded low-density polyethylene ingredient liner (`preparation_formulation_discarded_low_density_polyethylene_ingredient_liner`)

Discarded low-density polyethylene ingredient liner is one material-specific empty ingredient-package waste exchange.

- Selected flow: Discarded low-density polyethylene ingredient liner
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed empty ingredient packaging becoming waste; retain the material identity and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `eu-pef-2021-2279`

###### Discarded high-density polyethylene ingredient drum (`preparation_formulation_discarded_high_density_polyethylene_ingredient_drum`)

Discarded high-density polyethylene ingredient drum is one material-specific empty ingredient-package waste exchange.

- Selected flow: Discarded high-density polyethylene ingredient drum
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed empty ingredient packaging becoming waste; retain the material identity and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_formulation_residue`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide, fossil to air (`preparation_formulation_carbon_dioxide_fossil_to_air`)

Carbon dioxide, fossil to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_formulation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen monoxide to air (`preparation_formulation_nitrogen_monoxide_to_air`)

Nitrogen monoxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_formulation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen dioxide to air (`preparation_formulation_nitrogen_dioxide_to_air`)

Nitrogen dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_formulation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Sulfur dioxide to air (`preparation_formulation_sulfur_dioxide_to_air`)

Sulfur dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_formulation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter below 2.5 micrometres to air (`preparation_formulation_particulate_matter_below_2_5_micrometres_to_air`)

Particulate matter below 2.5 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_formulation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter from 2.5 to 10 micrometres to air (`preparation_formulation_particulate_matter_from_2_5_to_10_micrometres_to_air`)

Particulate matter from 2.5 to 10 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_formulation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

### Process: Declared cooking, frying, roasting, or steaming route (`thermal_preservation`)

This process uses 1 kg thermally processed product released as its quantitative reference. Apply only its concrete cards that match the locked bill of materials, package, equipment, destination, and route; absence must be demonstrated from records rather than replaced by a pooled exchange.

#### Inputs

##### Product flows

###### Grid electricity input (`thermal_preservation_grid_electricity`)

Grid electricity is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the separately metered or invoiced grid electricity used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased steam input (`thermal_preservation_purchased_steam`)

Purchased steam is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased steam used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased hot water input (`thermal_preservation_purchased_hot_water`)

Purchased hot water is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased hot water used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Natural gas input (`thermal_preservation_natural_gas`)

Natural gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced natural gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Diesel input (`thermal_preservation_diesel`)

Diesel is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Diesel
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced diesel used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`thermal_preservation_liquefied_petroleum_gas`)

Liquefied petroleum gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced liquefied petroleum gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased compressed air input (`thermal_preservation_purchased_compressed_air`)

Purchased compressed air is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the separately metered or invoiced purchased compressed air used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Potable mains water input (`thermal_preservation_potable_mains_water`)

Potable mains water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Potable mains water
- Flow property / unit: Mass / kg
- Amount rule: Record potable mains water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned beef skeletal-muscle pieces for cooking input (`thermal_preservation_input_seasoned_beef_pieces`)

Seasoned beef skeletal-muscle pieces for cooking is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Seasoned beef skeletal-muscle pieces for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### coated chicken meat pieces for frying input (`thermal_preservation_input_coated_chicken_pieces`)

Coated chicken meat pieces for frying is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Coated chicken meat pieces for frying
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned pork skeletal-muscle pieces for roasting input (`thermal_preservation_input_seasoned_pork_pieces`)

Seasoned pork skeletal-muscle pieces for roasting is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Seasoned pork skeletal-muscle pieces for roasting
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned frog legs for steaming input (`thermal_preservation_input_seasoned_frog_legs`)

Seasoned frog legs for steaming is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Seasoned frog legs for steaming
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### stuffed duck meat roll for roasting input (`thermal_preservation_input_stuffed_duck_roll`)

Stuffed duck meat roll for roasting is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Stuffed duck meat roll for roasting
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork liver pâté mixture for cooking input (`thermal_preservation_input_pork_liver_pate`)

Pork liver pâté mixture for cooking is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Pork liver pâté mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### beef meat-paste mixture for cooking input (`thermal_preservation_input_beef_meat_paste`)

Beef meat-paste mixture for cooking is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Beef meat-paste mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork rillettes mixture for cooking input (`thermal_preservation_input_pork_rillettes`)

Pork rillettes mixture for cooking is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Pork rillettes mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### chicken galantine mixture for cooking input (`thermal_preservation_input_chicken_galantine`)

Chicken galantine mixture for cooking is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Chicken galantine mixture for cooking
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pig-blood curd mixture for steaming input (`thermal_preservation_input_pig_blood_curd`)

Pig-blood curd mixture for steaming is one concrete precursor entering its named thermal treatment; it is not interchangeable with another product form.

- Selected flow: Pig-blood curd mixture for steaming
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the one locked thermal route from batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rapeseed oil frying input (`thermal_preservation_rapeseed_oil`)

Rapeseed oil is one exact frying-medium exchange, applicable only when that oil is actually used.

- Selected flow: Rapeseed oil
- Flow property / unit: Mass / kg
- Amount rule: Record rapeseed oil added to the fryer from issue records and fryer inventory change; do not combine it with the other frying oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sunflower oil frying input (`thermal_preservation_sunflower_oil`)

Sunflower oil is one exact frying-medium exchange, applicable only when that oil is actually used.

- Selected flow: Sunflower oil
- Flow property / unit: Mass / kg
- Amount rule: Record sunflower oil added to the fryer from issue records and fryer inventory change; do not combine it with the other frying oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

No exchange is prescribed in this flow-type group for this process.

##### Elementary flows

###### Groundwater input (`thermal_preservation_groundwater`)

Groundwater is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Groundwater
- Flow property / unit: Mass / kg
- Amount rule: Record groundwater withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Surface water input (`thermal_preservation_surface_water`)

Surface water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Surface water
- Flow property / unit: Mass / kg
- Amount rule: Record surface water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### cooked beef skeletal-muscle pieces output (`thermal_preservation_output_seasoned_beef_pieces`)

Cooked beef skeletal-muscle pieces is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Cooked beef skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### fried chicken meat pieces output (`thermal_preservation_output_coated_chicken_pieces`)

Fried chicken meat pieces is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Fried chicken meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### roasted pork skeletal-muscle pieces output (`thermal_preservation_output_seasoned_pork_pieces`)

Roasted pork skeletal-muscle pieces is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Roasted pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### steamed frog legs output (`thermal_preservation_output_seasoned_frog_legs`)

Steamed frog legs is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Steamed frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### roasted stuffed duck meat roll output (`thermal_preservation_output_stuffed_duck_roll`)

Roasted stuffed duck meat roll is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Roasted stuffed duck meat roll
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### cooked pork liver pâté output (`thermal_preservation_output_pork_liver_pate`)

Cooked pork liver pâté is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Cooked pork liver pâté
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### cooked beef meat paste output (`thermal_preservation_output_beef_meat_paste`)

Cooked beef meat paste is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Cooked beef meat paste
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### cooked pork rillettes output (`thermal_preservation_output_pork_rillettes`)

Cooked pork rillettes is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Cooked pork rillettes
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### cooked chicken galantine output (`thermal_preservation_output_chicken_galantine`)

Cooked chicken galantine is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Cooked chicken galantine
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### steamed pig-blood curd output (`thermal_preservation_output_pig_blood_curd`)

Steamed pig-blood curd is one concrete processed product transfer produced only by the matching declared thermal route.

- Selected flow: Steamed pig-blood curd
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented time-temperature process and cooling step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Recovered beef cooking broth (`thermal_preservation_recovered_beef_cooking_broth`)

Recovered beef cooking broth is a single named co-product exchange conditional on documented beneficial use.

- Selected flow: Recovered beef cooking broth
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered material only when it has a documented function and market destination; otherwise use the matching waste card.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Recovered pork-liver cooking broth (`thermal_preservation_recovered_pork_liver_cooking_broth`)

Recovered pork-liver cooking broth is a single named co-product exchange conditional on documented beneficial use.

- Selected flow: Recovered pork-liver cooking broth
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered material only when it has a documented function and market destination; otherwise use the matching waste card.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Recovered chicken cooking broth (`thermal_preservation_recovered_chicken_cooking_broth`)

Recovered chicken cooking broth is a single named co-product exchange conditional on documented beneficial use.

- Selected flow: Recovered chicken cooking broth
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered material only when it has a documented function and market destination; otherwise use the matching waste card.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Pork roasting drippings (`thermal_preservation_pork_roasting_drippings`)

Pork roasting drippings is a single named co-product exchange conditional on documented beneficial use.

- Selected flow: Pork roasting drippings
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered material only when it has a documented function and market destination; otherwise use the matching waste card.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Duck roasting drippings (`thermal_preservation_duck_roasting_drippings`)

Duck roasting drippings is a single named co-product exchange conditional on documented beneficial use.

- Selected flow: Duck roasting drippings
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed recovered material only when it has a documented function and market destination; otherwise use the matching waste card.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_material`
- Sources: `fao-meat-processing-2007`, `eu-pef-2021-2279`

##### Waste flows

###### rejected cooked beef skeletal-muscle pieces (`thermal_preservation_waste_rejected_seasoned_beef_pieces`)

Rejected cooked beef skeletal-muscle pieces is one product-form-specific waste stream.

- Selected flow: Rejected cooked beef skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected fried chicken meat pieces (`thermal_preservation_waste_rejected_coated_chicken_pieces`)

Rejected fried chicken meat pieces is one product-form-specific waste stream.

- Selected flow: Rejected fried chicken meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected roasted pork skeletal-muscle pieces (`thermal_preservation_waste_rejected_seasoned_pork_pieces`)

Rejected roasted pork skeletal-muscle pieces is one product-form-specific waste stream.

- Selected flow: Rejected roasted pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected steamed frog legs (`thermal_preservation_waste_rejected_seasoned_frog_legs`)

Rejected steamed frog legs is one product-form-specific waste stream.

- Selected flow: Rejected steamed frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected roasted stuffed duck meat roll (`thermal_preservation_waste_rejected_stuffed_duck_roll`)

Rejected roasted stuffed duck meat roll is one product-form-specific waste stream.

- Selected flow: Rejected roasted stuffed duck meat roll
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected cooked pork liver pâté (`thermal_preservation_waste_rejected_pork_liver_pate`)

Rejected cooked pork liver pâté is one product-form-specific waste stream.

- Selected flow: Rejected cooked pork liver pâté
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected cooked beef meat paste (`thermal_preservation_waste_rejected_beef_meat_paste`)

Rejected cooked beef meat paste is one product-form-specific waste stream.

- Selected flow: Rejected cooked beef meat paste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected cooked pork rillettes (`thermal_preservation_waste_rejected_pork_rillettes`)

Rejected cooked pork rillettes is one product-form-specific waste stream.

- Selected flow: Rejected cooked pork rillettes
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected cooked chicken galantine (`thermal_preservation_waste_rejected_chicken_galantine`)

Rejected cooked chicken galantine is one product-form-specific waste stream.

- Selected flow: Rejected cooked chicken galantine
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected steamed pig-blood curd (`thermal_preservation_waste_rejected_pig_blood_curd`)

Rejected steamed pig-blood curd is one product-form-specific waste stream.

- Selected flow: Rejected steamed pig-blood curd
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming processed product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent rapeseed frying oil (`thermal_preservation_spent_rapeseed_frying_oil`)

Spent rapeseed frying oil is one oil-specific spent frying-medium waste exchange.

- Selected flow: Spent rapeseed frying oil
- Flow property / unit: Mass / kg
- Amount rule: Record separately drained spent oil mass and the documented recovery or treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent sunflower frying oil (`thermal_preservation_spent_sunflower_frying_oil`)

Spent sunflower frying oil is one oil-specific spent frying-medium waste exchange.

- Selected flow: Spent sunflower frying oil
- Flow property / unit: Mass / kg
- Amount rule: Record separately drained spent oil mass and the documented recovery or treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent beef cooking liquor (`thermal_preservation_spent_beef_cooking_liquor`)

Spent beef cooking liquor is one product-source-specific liquid waste exchange.

- Selected flow: Spent beef cooking liquor
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured material sent to the documented waste destination; do not also report it as a recovered co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Spent pork-liver cooking liquor (`thermal_preservation_spent_pork_liver_cooking_liquor`)

Spent pork-liver cooking liquor is one product-source-specific liquid waste exchange.

- Selected flow: Spent pork-liver cooking liquor
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured material sent to the documented waste destination; do not also report it as a recovered co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Spent chicken cooking liquor (`thermal_preservation_spent_chicken_cooking_liquor`)

Spent chicken cooking liquor is one product-source-specific liquid waste exchange.

- Selected flow: Spent chicken cooking liquor
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured material sent to the documented waste destination; do not also report it as a recovered co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Spent pork roasting drippings (`thermal_preservation_spent_pork_roasting_drippings`)

Spent pork roasting drippings is one product-source-specific liquid waste exchange.

- Selected flow: Spent pork roasting drippings
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured material sent to the documented waste destination; do not also report it as a recovered co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Spent duck roasting drippings (`thermal_preservation_spent_duck_roasting_drippings`)

Spent duck roasting drippings is one product-source-specific liquid waste exchange.

- Selected flow: Spent duck roasting drippings
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured material sent to the documented waste destination; do not also report it as a recovered co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `fao-meat-processing-2007`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Cooking-kettle wastewater (`thermal_preservation_cooking_kettle_wastewater`)

Cooking-kettle wastewater is one route-specific point-of-generation wastewater exchange.

- Selected flow: Cooking-kettle wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density, preserving its point of generation and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Fryer-cleaning wastewater (`thermal_preservation_fryer_cleaning_wastewater`)

Fryer-cleaning wastewater is one route-specific point-of-generation wastewater exchange.

- Selected flow: Fryer-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density, preserving its point of generation and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Roasting-oven wash wastewater (`thermal_preservation_roasting_oven_wash_wastewater`)

Roasting-oven wash wastewater is one route-specific point-of-generation wastewater exchange.

- Selected flow: Roasting-oven wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density, preserving its point of generation and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Steam-cooker condensate wastewater (`thermal_preservation_steam_cooker_condensate_wastewater`)

Steam-cooker condensate wastewater is one route-specific point-of-generation wastewater exchange.

- Selected flow: Steam-cooker condensate wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density, preserving its point of generation and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_preservation_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide, fossil to air (`thermal_preservation_carbon_dioxide_fossil_to_air`)

Carbon dioxide, fossil to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen monoxide to air (`thermal_preservation_nitrogen_monoxide_to_air`)

Nitrogen monoxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen dioxide to air (`thermal_preservation_nitrogen_dioxide_to_air`)

Nitrogen dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Sulfur dioxide to air (`thermal_preservation_sulfur_dioxide_to_air`)

Sulfur dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter below 2.5 micrometres to air (`thermal_preservation_particulate_matter_below_2_5_micrometres_to_air`)

Particulate matter below 2.5 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter from 2.5 to 10 micrometres to air (`thermal_preservation_particulate_matter_from_2_5_to_10_micrometres_to_air`)

Particulate matter from 2.5 to 10 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Rapeseed oil aerosol to air (`thermal_preservation_rapeseed_oil_aerosol_to_air`)

Rapeseed oil aerosol to air is one oil-species-specific direct air exchange from frying.

- Selected flow: Rapeseed oil aerosol to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate emitted oil mass from measured capture-system loading, exhaust-flow sampling, or a documented site-specific mass balance; no PCR default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Sunflower oil aerosol to air (`thermal_preservation_sunflower_oil_aerosol_to_air`)

Sunflower oil aerosol to air is one oil-species-specific direct air exchange from frying.

- Selected flow: Sunflower oil aerosol to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate emitted oil mass from measured capture-system loading, exhaust-flow sampling, or a documented site-specific mass balance; no PCR default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_preservation_emission`
- Sources: `fao-meat-processing-2007`, `eu-pef-2021-2279`

### Process: Hermetic filling, closure, thermal processing, and cooling (`hermetic_canning`)

This process uses 1 kg net canned product released, excluding container mass as its quantitative reference. Apply only its concrete cards that match the locked bill of materials, package, equipment, destination, and route; absence must be demonstrated from records rather than replaced by a pooled exchange.

#### Inputs

##### Product flows

###### Grid electricity input (`hermetic_canning_grid_electricity`)

Grid electricity is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the separately metered or invoiced grid electricity used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Purchased steam input (`hermetic_canning_purchased_steam`)

Purchased steam is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased steam used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Purchased hot water input (`hermetic_canning_purchased_hot_water`)

Purchased hot water is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased hot water used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Natural gas input (`hermetic_canning_natural_gas`)

Natural gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced natural gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Diesel input (`hermetic_canning_diesel`)

Diesel is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Diesel
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced diesel used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`hermetic_canning_liquefied_petroleum_gas`)

Liquefied petroleum gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced liquefied petroleum gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Purchased compressed air input (`hermetic_canning_purchased_compressed_air`)

Purchased compressed air is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the separately metered or invoiced purchased compressed air used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Potable mains water input (`hermetic_canning_potable_mains_water`)

Potable mains water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Potable mains water
- Flow property / unit: Mass / kg
- Amount rule: Record potable mains water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### seasoned seal meat pieces for canning input (`hermetic_canning_input_seal_meat_canning`)

Seasoned seal meat pieces for canning is one concrete canning precursor and is not interchangeable with another animal source.

- Selected flow: Seasoned seal meat pieces for canning
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass filled into the declared hermetic container from batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### seasoned whale meat pieces for canning input (`hermetic_canning_input_whale_meat_canning`)

Seasoned whale meat pieces for canning is one concrete canning precursor and is not interchangeable with another animal source.

- Selected flow: Seasoned whale meat pieces for canning
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass filled into the declared hermetic container from batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### tinplate steel can body input (`hermetic_canning_tinplate_steel_can_body`)

Tinplate steel can body is one exact hermetic-container component or sealing material.

- Selected flow: Tinplate steel can body
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### tinplate steel can end input (`hermetic_canning_tinplate_steel_can_end`)

Tinplate steel can end is one exact hermetic-container component or sealing material.

- Selected flow: Tinplate steel can end
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### aluminium can body input (`hermetic_canning_aluminium_can_body`)

Aluminium can body is one exact hermetic-container component or sealing material.

- Selected flow: Aluminium can body
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### aluminium can end input (`hermetic_canning_aluminium_can_end`)

Aluminium can end is one exact hermetic-container component or sealing material.

- Selected flow: Aluminium can end
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### glass jar input (`hermetic_canning_glass_jar`)

Glass jar is one exact hermetic-container component or sealing material.

- Selected flow: Glass jar
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### steel twist-off lid input (`hermetic_canning_steel_twist_off_lid`)

Steel twist-off lid is one exact hermetic-container component or sealing material.

- Selected flow: Steel twist-off lid
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### polyethylene terephthalate–aluminium–polypropylene retort pouch input (`hermetic_canning_polyethylene_terephthalate_aluminium_polypropylene_retort_pouch`)

Polyethylene terephthalate–aluminium–polypropylene retort pouch is one exact hermetic-container component or sealing material.

- Selected flow: Polyethylene terephthalate–aluminium–polypropylene retort pouch
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### butyl-rubber can-seam sealant input (`hermetic_canning_butyl_rubber_can_seam_sealant`)

Butyl-rubber can-seam sealant is one exact hermetic-container component or sealing material.

- Selected flow: Butyl-rubber can-seam sealant
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted with the lot-specific measured item mass; keep this component separate from every other container component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

##### Waste flows

No exchange is prescribed in this flow-type group for this process.

##### Elementary flows

###### Groundwater input (`hermetic_canning_groundwater`)

Groundwater is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Groundwater
- Flow property / unit: Mass / kg
- Amount rule: Record groundwater withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Surface water input (`hermetic_canning_surface_water`)

Surface water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Surface water
- Flow property / unit: Mass / kg
- Amount rule: Record surface water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_resource`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### canned seal meat pieces output (`hermetic_canning_output_seal_meat_canning`)

Canned seal meat pieces is one concrete hermetically canned product transfer with container mass excluded from product mass.

- Selected flow: Canned seal meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record drained or net conforming product mass after the documented scheduled process, cooling, and container-integrity release; exclude container mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### canned whale meat pieces output (`hermetic_canning_output_whale_meat_canning`)

Canned whale meat pieces is one concrete hermetically canned product transfer with container mass excluded from product mass.

- Selected flow: Canned whale meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record drained or net conforming product mass after the documented scheduled process, cooling, and container-integrity release; exclude container mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_material`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

##### Waste flows

###### rejected canned seal meat pieces (`hermetic_canning_waste_rejected_seal_meat_canning`)

Rejected canned seal meat pieces is one animal-source-specific canning reject stream.

- Selected flow: Rejected canned seal meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product from containers rejected after scheduled-process or integrity review and its controlled destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected canned whale meat pieces (`hermetic_canning_waste_rejected_whale_meat_canning`)

Rejected canned whale meat pieces is one animal-source-specific canning reject stream.

- Selected flow: Rejected canned whale meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product from containers rejected after scheduled-process or integrity review and its controlled destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected tinplate steel can body (`hermetic_canning_rejected_tinplate_steel_can_body`)

Rejected tinplate steel can body is one material-specific canning-package waste exchange.

- Selected flow: Rejected tinplate steel can body
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected tinplate steel can end (`hermetic_canning_rejected_tinplate_steel_can_end`)

Rejected tinplate steel can end is one material-specific canning-package waste exchange.

- Selected flow: Rejected tinplate steel can end
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected aluminium can body (`hermetic_canning_rejected_aluminium_can_body`)

Rejected aluminium can body is one material-specific canning-package waste exchange.

- Selected flow: Rejected aluminium can body
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected aluminium can end (`hermetic_canning_rejected_aluminium_can_end`)

Rejected aluminium can end is one material-specific canning-package waste exchange.

- Selected flow: Rejected aluminium can end
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected glass jar (`hermetic_canning_rejected_glass_jar`)

Rejected glass jar is one material-specific canning-package waste exchange.

- Selected flow: Rejected glass jar
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected steel twist-off lid (`hermetic_canning_rejected_steel_twist_off_lid`)

Rejected steel twist-off lid is one material-specific canning-package waste exchange.

- Selected flow: Rejected steel twist-off lid
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected polyethylene terephthalate–aluminium–polypropylene retort pouch (`hermetic_canning_rejected_polyethylene_terephthalate_aluminium_polypropylene_retort_pouch`)

Rejected polyethylene terephthalate–aluminium–polypropylene retort pouch is one material-specific canning-package waste exchange.

- Selected flow: Rejected polyethylene terephthalate–aluminium–polypropylene retort pouch
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### rejected butyl-rubber can-seam sealant (`hermetic_canning_rejected_butyl_rubber_can_seam_sealant`)

Rejected butyl-rubber can-seam sealant is one material-specific canning-package waste exchange.

- Selected flow: Rejected butyl-rubber can-seam sealant
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed rejected component mass from closure, integrity, or line inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Container-rinse wastewater (`hermetic_canning_container_rinse_wastewater`)

Container-rinse wastewater is one canning-stage aqueous waste stream and remains separate from another wastewater stream.

- Selected flow: Container-rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with documented density, preserving batch and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

###### Retort-cooling wastewater (`hermetic_canning_retort_cooling_wastewater`)

Retort-cooling wastewater is one canning-stage aqueous waste stream and remains separate from another wastewater stream.

- Selected flow: Retort-cooling wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with documented density, preserving batch and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hermetic_canning_residue`
- Sources: `codex-cxc-23-1979`, `fao-meat-processing-2007`, `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide, fossil to air (`hermetic_canning_carbon_dioxide_fossil_to_air`)

Carbon dioxide, fossil to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hermetic_canning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen monoxide to air (`hermetic_canning_nitrogen_monoxide_to_air`)

Nitrogen monoxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hermetic_canning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen dioxide to air (`hermetic_canning_nitrogen_dioxide_to_air`)

Nitrogen dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hermetic_canning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Sulfur dioxide to air (`hermetic_canning_sulfur_dioxide_to_air`)

Sulfur dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hermetic_canning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter below 2.5 micrometres to air (`hermetic_canning_particulate_matter_below_2_5_micrometres_to_air`)

Particulate matter below 2.5 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hermetic_canning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter from 2.5 to 10 micrometres to air (`hermetic_canning_particulate_matter_from_2_5_to_10_micrometres_to_air`)

Particulate matter from 2.5 to 10 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hermetic_canning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

### Process: Declared pickling or seasoning preservation route (`pickling_seasoning`)

This process uses 1 kg pickled or seasoned product released as its quantitative reference. Apply only its concrete cards that match the locked bill of materials, package, equipment, destination, and route; absence must be demonstrated from records rather than replaced by a pooled exchange.

#### Inputs

##### Product flows

###### Grid electricity input (`pickling_seasoning_grid_electricity`)

Grid electricity is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the separately metered or invoiced grid electricity used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased steam input (`pickling_seasoning_purchased_steam`)

Purchased steam is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased steam used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased hot water input (`pickling_seasoning_purchased_hot_water`)

Purchased hot water is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased hot water used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Natural gas input (`pickling_seasoning_natural_gas`)

Natural gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced natural gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Diesel input (`pickling_seasoning_diesel`)

Diesel is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Diesel
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced diesel used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`pickling_seasoning_liquefied_petroleum_gas`)

Liquefied petroleum gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced liquefied petroleum gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased compressed air input (`pickling_seasoning_purchased_compressed_air`)

Purchased compressed air is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the separately metered or invoiced purchased compressed air used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Potable mains water input (`pickling_seasoning_potable_mains_water`)

Potable mains water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Potable mains water
- Flow property / unit: Mass / kg
- Amount rule: Record potable mains water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pork skeletal-muscle pieces for vinegar pickling input (`pickling_seasoning_input_pork_vinegar_pickling`)

Pork skeletal-muscle pieces for vinegar pickling is one concrete precursor entering its named preservation route.

- Selected flow: Pork skeletal-muscle pieces for vinegar pickling
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the declared pickling or seasoning route from batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### unpreserved seasoned minced mutton patty input (`pickling_seasoning_input_mutton_patty`)

Unpreserved seasoned minced mutton patty is one concrete precursor entering its named preservation route.

- Selected flow: Unpreserved seasoned minced mutton patty
- Flow property / unit: Mass / kg
- Amount rule: Record net precursor mass entering the declared pickling or seasoning route from batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### distilled white vinegar input (`pickling_seasoning_distilled_white_vinegar`)

Distilled white vinegar is one exact pickling medium and is not a generic acid mixture selector.

- Selected flow: Distilled white vinegar
- Flow property / unit: Mass / kg
- Amount rule: Record vinegar mass issued to the declared pickling batch; keep it separate from pure acetic acid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

No exchange is prescribed in this flow-type group for this process.

##### Elementary flows

###### Groundwater input (`pickling_seasoning_groundwater`)

Groundwater is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Groundwater
- Flow property / unit: Mass / kg
- Amount rule: Record groundwater withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Surface water input (`pickling_seasoning_surface_water`)

Surface water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Surface water
- Flow property / unit: Mass / kg
- Amount rule: Record surface water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_resource`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### vinegar-pickled pork skeletal-muscle pieces output (`pickling_seasoning_output_pork_vinegar_pickling`)

Vinegar-pickled pork skeletal-muscle pieces is one concrete preserved product transfer produced only by the matching declared route.

- Selected flow: Vinegar-pickled pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented residence time and formulation controls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### seasoned minced mutton patty output (`pickling_seasoning_output_mutton_patty`)

Seasoned minced mutton patty is one concrete preserved product transfer produced only by the matching declared route.

- Selected flow: Seasoned minced mutton patty
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass released after the documented residence time and formulation controls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_material`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

###### rejected vinegar-pickled pork skeletal-muscle pieces (`pickling_seasoning_waste_rejected_pork_vinegar_pickling`)

Rejected vinegar-pickled pork skeletal-muscle pieces is one product-form-specific waste stream.

- Selected flow: Rejected vinegar-pickled pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### rejected seasoned minced mutton patty (`pickling_seasoning_waste_rejected_mutton_patty`)

Rejected seasoned minced mutton patty is one product-form-specific waste stream.

- Selected flow: Rejected seasoned minced mutton patty
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed nonconforming product and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent vinegar liquor (`pickling_seasoning_spent_vinegar_liquor`)

Spent vinegar liquor is one pickling-stage aqueous waste stream and is not pooled with another wastewater flow.

- Selected flow: Spent vinegar liquor
- Flow property / unit: Mass / kg
- Amount rule: Record measured waste mass or volume converted with documented density and preserve its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Pickling-vessel wash wastewater (`pickling_seasoning_pickling_vessel_wash_wastewater`)

Pickling-vessel wash wastewater is one pickling-stage aqueous waste stream and is not pooled with another wastewater flow.

- Selected flow: Pickling-vessel wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured waste mass or volume converted with documented density and preserve its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_seasoning_residue`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide, fossil to air (`pickling_seasoning_carbon_dioxide_fossil_to_air`)

Carbon dioxide, fossil to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_seasoning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen monoxide to air (`pickling_seasoning_nitrogen_monoxide_to_air`)

Nitrogen monoxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_seasoning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen dioxide to air (`pickling_seasoning_nitrogen_dioxide_to_air`)

Nitrogen dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_seasoning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Sulfur dioxide to air (`pickling_seasoning_sulfur_dioxide_to_air`)

Sulfur dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_seasoning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter below 2.5 micrometres to air (`pickling_seasoning_particulate_matter_below_2_5_micrometres_to_air`)

Particulate matter below 2.5 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_seasoning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter from 2.5 to 10 micrometres to air (`pickling_seasoning_particulate_matter_from_2_5_to_10_micrometres_to_air`)

Particulate matter from 2.5 to 10 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_seasoning_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### acetic acid to air (`pickling_seasoning_acetic_acid_to_air`)

Acetic acid to air is one chemical-specific direct emission from the declared pickling route.

- Selected flow: Acetic acid to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate emitted acetic-acid mass from measured exhaust flow and concentration or a documented site-specific mass balance; no default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_seasoning_emission`
- Sources: `fao-meat-processing-2007`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

### Process: Final packaging, finished-product storage, and release (`packaging_storage_release`)

This process uses 1 kg net conforming reference product released as its quantitative reference. Apply only its concrete cards that match the locked bill of materials, package, equipment, destination, and route; absence must be demonstrated from records rather than replaced by a pooled exchange.

#### Inputs

##### Product flows

###### Grid electricity input (`packaging_storage_release_grid_electricity`)

Grid electricity is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the separately metered or invoiced grid electricity used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased steam input (`packaging_storage_release_purchased_steam`)

Purchased steam is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased steam used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased hot water input (`packaging_storage_release_purchased_hot_water`)

Purchased hot water is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased hot water used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Natural gas input (`packaging_storage_release_natural_gas`)

Natural gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced natural gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Diesel input (`packaging_storage_release_diesel`)

Diesel is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Diesel
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced diesel used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`packaging_storage_release_liquefied_petroleum_gas`)

Liquefied petroleum gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced liquefied petroleum gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased compressed air input (`packaging_storage_release_purchased_compressed_air`)

Purchased compressed air is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the separately metered or invoiced purchased compressed air used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Potable mains water input (`packaging_storage_release_potable_mains_water`)

Potable mains water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Potable mains water
- Flow property / unit: Mass / kg
- Amount rule: Record potable mains water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Ammonia refrigerant R717 make-up (`packaging_storage_release_ammonia_refrigerant_r717`)

Ammonia refrigerant R717 make-up is a single product exchange. Record it only for the named installed refrigerant system.

- Selected flow: Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Record actual refrigerant make-up mass from maintenance issue records for the declared refrigeration system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a make-up (`packaging_storage_release_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`)

1,1,1,2-Tetrafluoroethane refrigerant HFC-134a make-up is a single product exchange. Record it only for the named installed refrigerant system.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- Flow property / unit: Mass / kg
- Amount rule: Record actual refrigerant make-up mass from maintenance issue records for the declared refrigeration system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### R404A refrigerant blend make-up (`packaging_storage_release_r404a_refrigerant_blend`)

R404A refrigerant blend make-up is a single product exchange. Record it only for the named installed refrigerant system.

- Selected flow: R404A refrigerant blend
- Flow property / unit: Mass / kg
- Amount rule: Record actual refrigerant make-up mass from maintenance issue records for the declared refrigeration system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### cooked beef skeletal-muscle pieces transfer (`packaging_storage_release_input_seasoned_beef_pieces`)

Cooked beef skeletal-muscle pieces is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Cooked beef skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### fried chicken meat pieces transfer (`packaging_storage_release_input_coated_chicken_pieces`)

Fried chicken meat pieces is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Fried chicken meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### roasted pork skeletal-muscle pieces transfer (`packaging_storage_release_input_seasoned_pork_pieces`)

Roasted pork skeletal-muscle pieces is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Roasted pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### steamed frog legs transfer (`packaging_storage_release_input_seasoned_frog_legs`)

Steamed frog legs is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Steamed frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### roasted stuffed duck meat roll transfer (`packaging_storage_release_input_stuffed_duck_roll`)

Roasted stuffed duck meat roll is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Roasted stuffed duck meat roll
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### cooked pork liver pâté transfer (`packaging_storage_release_input_pork_liver_pate`)

Cooked pork liver pâté is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Cooked pork liver pâté
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### cooked beef meat paste transfer (`packaging_storage_release_input_beef_meat_paste`)

Cooked beef meat paste is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Cooked beef meat paste
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### cooked pork rillettes transfer (`packaging_storage_release_input_pork_rillettes`)

Cooked pork rillettes is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Cooked pork rillettes
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### cooked chicken galantine transfer (`packaging_storage_release_input_chicken_galantine`)

Cooked chicken galantine is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Cooked chicken galantine
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### steamed pig-blood curd transfer (`packaging_storage_release_input_pig_blood_curd`)

Steamed pig-blood curd is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Steamed pig-blood curd
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### canned seal meat pieces transfer (`packaging_storage_release_input_seal_meat_canning`)

Canned seal meat pieces is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Canned seal meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### canned whale meat pieces transfer (`packaging_storage_release_input_whale_meat_canning`)

Canned whale meat pieces is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Canned whale meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### vinegar-pickled pork skeletal-muscle pieces transfer (`packaging_storage_release_input_pork_vinegar_pickling`)

Vinegar-pickled pork skeletal-muscle pieces is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Vinegar-pickled pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### seasoned minced mutton patty transfer (`packaging_storage_release_input_mutton_patty`)

Seasoned minced mutton patty is one concrete route output entering final packaging or release and cannot represent another form.

- Selected flow: Seasoned minced mutton patty
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming product mass entering final packaging or finished-product storage; preserve the exact product form and route identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### polyethylene terephthalate tray input (`packaging_storage_release_polyethylene_terephthalate_tray`)

Polyethylene terephthalate tray is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### polypropylene tray input (`packaging_storage_release_polypropylene_tray`)

Polypropylene tray is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### aluminium foil tray input (`packaging_storage_release_aluminium_foil_tray`)

Aluminium foil tray is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Aluminium foil tray
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### polyamide–ethylene-vinyl alcohol–polyethylene barrier film input (`packaging_storage_release_polyamide_ethylene_vinyl_alcohol_polyethylene_barrier_film`)

Polyamide–ethylene-vinyl alcohol–polyethylene barrier film is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Polyamide–ethylene-vinyl alcohol–polyethylene barrier film
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### low-density polyethylene film input (`packaging_storage_release_low_density_polyethylene_film`)

Low-density polyethylene film is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### polypropylene cup input (`packaging_storage_release_polypropylene_cup`)

Polypropylene cup is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Polypropylene cup
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### paperboard folding carton input (`packaging_storage_release_paperboard_folding_carton`)

Paperboard folding carton is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Paperboard folding carton
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### corrugated fibreboard shipping box input (`packaging_storage_release_corrugated_fibreboard_shipping_box`)

Corrugated fibreboard shipping box is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Corrugated fibreboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### wooden pallet input (`packaging_storage_release_wooden_pallet`)

Wooden pallet is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### low-density polyethylene stretch film input (`packaging_storage_release_low_density_polyethylene_stretch_film`)

Low-density polyethylene stretch film is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### paper pressure-sensitive label input (`packaging_storage_release_paper_pressure_sensitive_label`)

Paper pressure-sensitive label is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Paper pressure-sensitive label
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### acrylic pressure-sensitive adhesive input (`packaging_storage_release_acrylic_pressure_sensitive_adhesive`)

Acrylic pressure-sensitive adhesive is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Acrylic pressure-sensitive adhesive
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### polyester strapping input (`packaging_storage_release_polyester_strapping`)

Polyester strapping is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Polyester strapping
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### polypropylene strapping input (`packaging_storage_release_polypropylene_strapping`)

Polypropylene strapping is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### oxygen-absorber sachet input (`packaging_storage_release_oxygen_absorber_sachet`)

Oxygen-absorber sachet is one exact packaging article or material used only when declared for the selected product form.

- Selected flow: Oxygen-absorber sachet
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass or item count converted using the lot-specific measured item mass; keep this component separate from every other package component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### nitrogen gas packaging input (`packaging_storage_release_nitrogen_gas`)

Nitrogen gas is one gas-species-specific modified-atmosphere exchange.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Record the separately metered or cylinder-balance mass of nitrogen gas used in the declared package atmosphere.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### carbon dioxide gas packaging input (`packaging_storage_release_carbon_dioxide_gas`)

Carbon dioxide gas is one gas-species-specific modified-atmosphere exchange.

- Selected flow: Carbon dioxide gas
- Flow property / unit: Mass / kg
- Amount rule: Record the separately metered or cylinder-balance mass of carbon dioxide gas used in the declared package atmosphere.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### oxygen gas packaging input (`packaging_storage_release_oxygen_gas`)

Oxygen gas is one gas-species-specific modified-atmosphere exchange.

- Selected flow: Oxygen gas
- Flow property / unit: Mass / kg
- Amount rule: Record the separately metered or cylinder-balance mass of oxygen gas used in the declared package atmosphere.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

##### Waste flows

No exchange is prescribed in this flow-type group for this process.

##### Elementary flows

###### Groundwater input (`packaging_storage_release_groundwater`)

Groundwater is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Groundwater
- Flow property / unit: Mass / kg
- Amount rule: Record groundwater withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Surface water input (`packaging_storage_release_surface_water`)

Surface water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Surface water
- Flow property / unit: Mass / kg
- Amount rule: Record surface water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_resource`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### reference product output (`packaging_storage_release_reference_product`)

This is the only UUID-bearing reference product exchange. The data package must lock one concrete animal or tissue recipe, one listed non-sausage product form, one preservation route, and one ambient or chilled market state.

- Selected flow: Other prepared or preserved meat, meat offal or blood `61b39162-1ed6-4d66-b54b-9c0889bd9fc4`
- Flow property / unit: Mass / kg
- Amount rule: Normalize the measured net conforming product mass to exactly 1 kg; exclude every package component from product mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_material`
- Sources: `unsd-cpc-3-21189`, `eu-pef-2021-2279`

##### Waste flows

###### Recovered Ammonia refrigerant R717 (`packaging_storage_release_recovered_ammonia_refrigerant_r717`)

Recovered Ammonia refrigerant R717 is a separate maintenance waste exchange from the declared refrigeration system.

- Selected flow: Recovered Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant mass recovered for reclamation or controlled disposal from maintenance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a (`packaging_storage_release_recovered_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`)

Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a is a separate maintenance waste exchange from the declared refrigeration system.

- Selected flow: Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant mass recovered for reclamation or controlled disposal from maintenance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Recovered R404A refrigerant blend (`packaging_storage_release_recovered_r404a_refrigerant_blend`)

Recovered R404A refrigerant blend is a separate maintenance waste exchange from the declared refrigeration system.

- Selected flow: Recovered R404A refrigerant blend
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant mass recovered for reclamation or controlled disposal from maintenance records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### packaging reject for cooked beef skeletal-muscle pieces (`packaging_storage_release_waste_rejected_seasoned_beef_pieces`)

Packaging reject for cooked beef skeletal-muscle pieces is one product-form-specific waste exchange.

- Selected flow: Packaging reject for cooked beef skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for fried chicken meat pieces (`packaging_storage_release_waste_rejected_coated_chicken_pieces`)

Packaging reject for fried chicken meat pieces is one product-form-specific waste exchange.

- Selected flow: Packaging reject for fried chicken meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for roasted pork skeletal-muscle pieces (`packaging_storage_release_waste_rejected_seasoned_pork_pieces`)

Packaging reject for roasted pork skeletal-muscle pieces is one product-form-specific waste exchange.

- Selected flow: Packaging reject for roasted pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for steamed frog legs (`packaging_storage_release_waste_rejected_seasoned_frog_legs`)

Packaging reject for steamed frog legs is one product-form-specific waste exchange.

- Selected flow: Packaging reject for steamed frog legs
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for roasted stuffed duck meat roll (`packaging_storage_release_waste_rejected_stuffed_duck_roll`)

Packaging reject for roasted stuffed duck meat roll is one product-form-specific waste exchange.

- Selected flow: Packaging reject for roasted stuffed duck meat roll
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for cooked pork liver pâté (`packaging_storage_release_waste_rejected_pork_liver_pate`)

Packaging reject for cooked pork liver pâté is one product-form-specific waste exchange.

- Selected flow: Packaging reject for cooked pork liver pâté
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for cooked beef meat paste (`packaging_storage_release_waste_rejected_beef_meat_paste`)

Packaging reject for cooked beef meat paste is one product-form-specific waste exchange.

- Selected flow: Packaging reject for cooked beef meat paste
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for cooked pork rillettes (`packaging_storage_release_waste_rejected_pork_rillettes`)

Packaging reject for cooked pork rillettes is one product-form-specific waste exchange.

- Selected flow: Packaging reject for cooked pork rillettes
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for cooked chicken galantine (`packaging_storage_release_waste_rejected_chicken_galantine`)

Packaging reject for cooked chicken galantine is one product-form-specific waste exchange.

- Selected flow: Packaging reject for cooked chicken galantine
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for steamed pig-blood curd (`packaging_storage_release_waste_rejected_pig_blood_curd`)

Packaging reject for steamed pig-blood curd is one product-form-specific waste exchange.

- Selected flow: Packaging reject for steamed pig-blood curd
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for canned seal meat pieces (`packaging_storage_release_waste_rejected_seal_meat_canning`)

Packaging reject for canned seal meat pieces is one product-form-specific waste exchange.

- Selected flow: Packaging reject for canned seal meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for canned whale meat pieces (`packaging_storage_release_waste_rejected_whale_meat_canning`)

Packaging reject for canned whale meat pieces is one product-form-specific waste exchange.

- Selected flow: Packaging reject for canned whale meat pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for vinegar-pickled pork skeletal-muscle pieces (`packaging_storage_release_waste_rejected_pork_vinegar_pickling`)

Packaging reject for vinegar-pickled pork skeletal-muscle pieces is one product-form-specific waste exchange.

- Selected flow: Packaging reject for vinegar-pickled pork skeletal-muscle pieces
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging reject for seasoned minced mutton patty (`packaging_storage_release_waste_rejected_mutton_patty`)

Packaging reject for seasoned minced mutton patty is one product-form-specific waste exchange.

- Selected flow: Packaging reject for seasoned minced mutton patty
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed product rejected by seal, label, package-integrity, temperature, or release inspection and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded polyethylene terephthalate tray (`packaging_storage_release_discarded_polyethylene_terephthalate_tray`)

Discarded polyethylene terephthalate tray is one material-specific packaging waste exchange.

- Selected flow: Discarded polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded polypropylene tray (`packaging_storage_release_discarded_polypropylene_tray`)

Discarded polypropylene tray is one material-specific packaging waste exchange.

- Selected flow: Discarded polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded aluminium foil tray (`packaging_storage_release_discarded_aluminium_foil_tray`)

Discarded aluminium foil tray is one material-specific packaging waste exchange.

- Selected flow: Discarded aluminium foil tray
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded polyamide–ethylene-vinyl alcohol–polyethylene barrier film (`packaging_storage_release_discarded_polyamide_ethylene_vinyl_alcohol_polyethylene_barrier_film`)

Discarded polyamide–ethylene-vinyl alcohol–polyethylene barrier film is one material-specific packaging waste exchange.

- Selected flow: Discarded polyamide–ethylene-vinyl alcohol–polyethylene barrier film
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded low-density polyethylene film (`packaging_storage_release_discarded_low_density_polyethylene_film`)

Discarded low-density polyethylene film is one material-specific packaging waste exchange.

- Selected flow: Discarded low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded polypropylene cup (`packaging_storage_release_discarded_polypropylene_cup`)

Discarded polypropylene cup is one material-specific packaging waste exchange.

- Selected flow: Discarded polypropylene cup
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded paperboard folding carton (`packaging_storage_release_discarded_paperboard_folding_carton`)

Discarded paperboard folding carton is one material-specific packaging waste exchange.

- Selected flow: Discarded paperboard folding carton
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded corrugated fibreboard shipping box (`packaging_storage_release_discarded_corrugated_fibreboard_shipping_box`)

Discarded corrugated fibreboard shipping box is one material-specific packaging waste exchange.

- Selected flow: Discarded corrugated fibreboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded wooden pallet (`packaging_storage_release_discarded_wooden_pallet`)

Discarded wooden pallet is one material-specific packaging waste exchange.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded low-density polyethylene stretch film (`packaging_storage_release_discarded_low_density_polyethylene_stretch_film`)

Discarded low-density polyethylene stretch film is one material-specific packaging waste exchange.

- Selected flow: Discarded low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded paper pressure-sensitive label (`packaging_storage_release_discarded_paper_pressure_sensitive_label`)

Discarded paper pressure-sensitive label is one material-specific packaging waste exchange.

- Selected flow: Discarded paper pressure-sensitive label
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded acrylic pressure-sensitive adhesive (`packaging_storage_release_discarded_acrylic_pressure_sensitive_adhesive`)

Discarded acrylic pressure-sensitive adhesive is one material-specific packaging waste exchange.

- Selected flow: Discarded acrylic pressure-sensitive adhesive
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded polyester strapping (`packaging_storage_release_discarded_polyester_strapping`)

Discarded polyester strapping is one material-specific packaging waste exchange.

- Selected flow: Discarded polyester strapping
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded polypropylene strapping (`packaging_storage_release_discarded_polypropylene_strapping`)

Discarded polypropylene strapping is one material-specific packaging waste exchange.

- Selected flow: Discarded polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded oxygen-absorber sachet (`packaging_storage_release_discarded_oxygen_absorber_sachet`)

Discarded oxygen-absorber sachet is one material-specific packaging waste exchange.

- Selected flow: Discarded oxygen-absorber sachet
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed unused, trimmed, damaged, or rejected material and its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### discarded paper release liner (`packaging_storage_release_discarded_paper_release_liner`)

Discarded paper release liner is one fibre-based label-application waste exchange.

- Selected flow: Discarded paper release liner
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed release-liner waste from label application and its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `codex-cxc-23-1979`, `eu-pef-2021-2279`

###### packaging-line wash wastewater (`packaging_storage_release_packaging_line_wash_wastewater`)

Packaging-line wash wastewater is one point-of-generation aqueous waste stream.

- Selected flow: Packaging-line wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass or volume converted with a documented density and preserve its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_residue`
- Sources: `codex-cxc-58-2005`, `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide, fossil to air (`packaging_storage_release_carbon_dioxide_fossil_to_air`)

Carbon dioxide, fossil to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen monoxide to air (`packaging_storage_release_nitrogen_monoxide_to_air`)

Nitrogen monoxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen dioxide to air (`packaging_storage_release_nitrogen_dioxide_to_air`)

Nitrogen dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Sulfur dioxide to air (`packaging_storage_release_sulfur_dioxide_to_air`)

Sulfur dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter below 2.5 micrometres to air (`packaging_storage_release_particulate_matter_below_2_5_micrometres_to_air`)

Particulate matter below 2.5 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter from 2.5 to 10 micrometres to air (`packaging_storage_release_particulate_matter_from_2_5_to_10_micrometres_to_air`)

Particulate matter from 2.5 to 10 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Ammonia to air (`packaging_storage_release_ammonia_to_air`)

Ammonia to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### 1,1,1,2-Tetrafluoroethane HFC-134a to air (`packaging_storage_release_1_1_1_2_tetrafluoroethane_hfc_134a_to_air`)

1,1,1,2-Tetrafluoroethane HFC-134a to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: 1,1,1,2-Tetrafluoroethane HFC-134a to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Pentafluoroethane HFC-125 to air (`packaging_storage_release_pentafluoroethane_hfc_125_to_air`)

Pentafluoroethane HFC-125 to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: Pentafluoroethane HFC-125 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### 1,1,1-Trifluoroethane HFC-143a to air (`packaging_storage_release_1_1_1_trifluoroethane_hfc_143a_to_air`)

1,1,1-Trifluoroethane HFC-143a to air is one refrigerant species emitted to air and must not be combined with another refrigerant species.

- Selected flow: 1,1,1-Trifluoroethane HFC-143a to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the emitted mass from a documented refrigerant inventory balance; split R404A loss into its individual HFC components using the supplier composition record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_emission`
- Sources: `codex-cxc-58-2005`, `eu-pef-2021-2279`

### Process: Sanitation and conditional on-site wastewater treatment (`sanitation_wastewater`)

This process uses Sanitation records allocated to the same production lot as its quantitative reference. Apply only its concrete cards that match the locked bill of materials, package, equipment, destination, and route; absence must be demonstrated from records rather than replaced by a pooled exchange.

#### Inputs

##### Product flows

###### Grid electricity input (`sanitation_wastewater_grid_electricity`)

Grid electricity is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the separately metered or invoiced grid electricity used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased steam input (`sanitation_wastewater_purchased_steam`)

Purchased steam is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased steam used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased hot water input (`sanitation_wastewater_purchased_hot_water`)

Purchased hot water is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced purchased hot water used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Natural gas input (`sanitation_wastewater_natural_gas`)

Natural gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced natural gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Diesel input (`sanitation_wastewater_diesel`)

Diesel is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Diesel
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced diesel used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`sanitation_wastewater_liquefied_petroleum_gas`)

Liquefied petroleum gas is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the separately metered or invoiced liquefied petroleum gas used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Purchased compressed air input (`sanitation_wastewater_purchased_compressed_air`)

Purchased compressed air is an individual purchased resource for this process. It remains a distinct card even when a shared meter requires a documented allocation.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the separately metered or invoiced purchased compressed air used by this process; do not combine it with another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Potable mains water input (`sanitation_wastewater_potable_mains_water`)

Potable mains water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Potable mains water
- Flow property / unit: Mass / kg
- Amount rule: Record potable mains water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium hydroxide input (`sanitation_wastewater_sodium_hydroxide`)

Sodium hydroxide is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the actual sodium hydroxide issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### nitric acid input (`sanitation_wastewater_nitric_acid`)

Nitric acid is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the actual nitric acid issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### phosphoric acid input (`sanitation_wastewater_phosphoric_acid`)

Phosphoric acid is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the actual phosphoric acid issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### sodium hypochlorite input (`sanitation_wastewater_sodium_hypochlorite`)

Sodium hypochlorite is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the actual sodium hypochlorite issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### peracetic acid input (`sanitation_wastewater_peracetic_acid`)

Peracetic acid is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the actual peracetic acid issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### hydrogen peroxide input (`sanitation_wastewater_hydrogen_peroxide`)

Hydrogen peroxide is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the actual hydrogen peroxide issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### benzalkonium chloride input (`sanitation_wastewater_benzalkonium_chloride`)

Benzalkonium chloride is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Benzalkonium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the actual benzalkonium chloride issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### ethanol input (`sanitation_wastewater_ethanol`)

Ethanol is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Ethanol
- Flow property / unit: Mass / kg
- Amount rule: Record the actual ethanol issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### ferric chloride input (`sanitation_wastewater_ferric_chloride`)

Ferric chloride is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the actual ferric chloride issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### aluminium sulfate input (`sanitation_wastewater_aluminium_sulfate`)

Aluminium sulfate is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Aluminium sulfate
- Flow property / unit: Mass / kg
- Amount rule: Record the actual aluminium sulfate issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### calcium hydroxide input (`sanitation_wastewater_calcium_hydroxide`)

Calcium hydroxide is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the actual calcium hydroxide issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### anionic polyacrylamide input (`sanitation_wastewater_anionic_polyacrylamide`)

Anionic polyacrylamide is one exact cleaning, disinfection, or wastewater-treatment chemical applicable only when actually dosed.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Record the actual anionic polyacrylamide issue mass from concentration-specific purchase and dosing records; do not combine it with another cleaning, disinfection, or treatment chemical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_material`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

###### raw-material thawing wastewater treatment input (`sanitation_wastewater_input_raw_material_receipt_raw_material_thawing_wastewater`)

Raw-material thawing wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Raw-material thawing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### raw-material drip-loss wastewater treatment input (`sanitation_wastewater_input_raw_material_receipt_raw_material_drip_loss_wastewater`)

Raw-material drip-loss wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Raw-material drip-loss wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### cutting-equipment wash wastewater treatment input (`sanitation_wastewater_input_preparation_formulation_cutting_equipment_wash_wastewater`)

Cutting-equipment wash wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Cutting-equipment wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### mincing-equipment wash wastewater treatment input (`sanitation_wastewater_input_preparation_formulation_mincing_equipment_wash_wastewater`)

Mincing-equipment wash wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Mincing-equipment wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### formulation-equipment wash wastewater treatment input (`sanitation_wastewater_input_preparation_formulation_formulation_equipment_wash_wastewater`)

Formulation-equipment wash wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Formulation-equipment wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### spent beef cooking liquor treatment input (`sanitation_wastewater_input_thermal_preservation_spent_beef_cooking_liquor`)

Spent beef cooking liquor is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Spent beef cooking liquor
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### spent pork-liver cooking liquor treatment input (`sanitation_wastewater_input_thermal_preservation_spent_pork_liver_cooking_liquor`)

Spent pork-liver cooking liquor is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Spent pork-liver cooking liquor
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### spent chicken cooking liquor treatment input (`sanitation_wastewater_input_thermal_preservation_spent_chicken_cooking_liquor`)

Spent chicken cooking liquor is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Spent chicken cooking liquor
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### cooking-kettle wastewater treatment input (`sanitation_wastewater_input_thermal_preservation_cooking_kettle_wastewater`)

Cooking-kettle wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Cooking-kettle wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### fryer-cleaning wastewater treatment input (`sanitation_wastewater_input_thermal_preservation_fryer_cleaning_wastewater`)

Fryer-cleaning wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Fryer-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### roasting-oven wash wastewater treatment input (`sanitation_wastewater_input_thermal_preservation_roasting_oven_wash_wastewater`)

Roasting-oven wash wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Roasting-oven wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### steam-cooker condensate wastewater treatment input (`sanitation_wastewater_input_thermal_preservation_steam_cooker_condensate_wastewater`)

Steam-cooker condensate wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Steam-cooker condensate wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### container-rinse wastewater treatment input (`sanitation_wastewater_input_hermetic_canning_container_rinse_wastewater`)

Container-rinse wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Container-rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### retort-cooling wastewater treatment input (`sanitation_wastewater_input_hermetic_canning_retort_cooling_wastewater`)

Retort-cooling wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Retort-cooling wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### spent vinegar liquor treatment input (`sanitation_wastewater_input_pickling_seasoning_spent_vinegar_liquor`)

Spent vinegar liquor is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Spent vinegar liquor
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### pickling-vessel wash wastewater treatment input (`sanitation_wastewater_input_pickling_seasoning_pickling_vessel_wash_wastewater`)

Pickling-vessel wash wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Pickling-vessel wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### packaging-line wash wastewater treatment input (`sanitation_wastewater_input_packaging_storage_release_packaging_line_wash_wastewater`)

Packaging-line wash wastewater is one traceable point-of-generation waste input to conditional on-site treatment.

- Selected flow: Packaging-line wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record only the mass transferred to on-site treatment from the matching point-of-generation record; omit this treatment input when sent directly to external management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Elementary flows

###### Groundwater input (`sanitation_wastewater_groundwater`)

Groundwater is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Groundwater
- Flow property / unit: Mass / kg
- Amount rule: Record groundwater withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Surface water input (`sanitation_wastewater_surface_water`)

Surface water is one distinct water-source exchange for this process and is not pooled with another water source.

- Selected flow: Surface water
- Flow property / unit: Mass / kg
- Amount rule: Record surface water withdrawn or supplied to this process from a calibrated meter; keep this source separate from the other water sources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_resource`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

#### Outputs

##### Product flows

No exchange is prescribed in this flow-type group for this process.

##### Waste flows

###### Spent sodium-hydroxide cleaning solution (`sanitation_wastewater_spent_sodium_hydroxide_cleaning_solution`)

Spent sodium-hydroxide cleaning solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent sodium-hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent nitric-acid cleaning solution (`sanitation_wastewater_spent_nitric_acid_cleaning_solution`)

Spent nitric-acid cleaning solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent nitric-acid cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent phosphoric-acid cleaning solution (`sanitation_wastewater_spent_phosphoric_acid_cleaning_solution`)

Spent phosphoric-acid cleaning solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent phosphoric-acid cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent sodium-hypochlorite sanitising solution (`sanitation_wastewater_spent_sodium_hypochlorite_sanitising_solution`)

Spent sodium-hypochlorite sanitising solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent sodium-hypochlorite sanitising solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent peracetic-acid sanitising solution (`sanitation_wastewater_spent_peracetic_acid_sanitising_solution`)

Spent peracetic-acid sanitising solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent peracetic-acid sanitising solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent hydrogen-peroxide sanitising solution (`sanitation_wastewater_spent_hydrogen_peroxide_sanitising_solution`)

Spent hydrogen-peroxide sanitising solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent hydrogen-peroxide sanitising solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent benzalkonium-chloride sanitising solution (`sanitation_wastewater_spent_benzalkonium_chloride_sanitising_solution`)

Spent benzalkonium-chloride sanitising solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent benzalkonium-chloride sanitising solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Spent ethanol sanitising solution (`sanitation_wastewater_spent_ethanol_sanitising_solution`)

Spent ethanol sanitising solution is one active-chemical-specific sanitation waste stream.

- Selected flow: Spent ethanol sanitising solution
- Flow property / unit: Mass / kg
- Amount rule: Record the separately measured spent solution mass and its on-site treatment or external management destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Treated prepared-meat effluent sent to sewer (`sanitation_wastewater_treated_prepared_meat_effluent_sent_to_sewer`)

Treated prepared-meat effluent sent to sewer is one named treatment-output waste stream and remains separate from every other residue.

- Selected flow: Treated prepared-meat effluent sent to sewer
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured mass leaving the declared treatment operation and its documented destination; do not net it against removed pollutant load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Wastewater inlet-screen residue (`sanitation_wastewater_wastewater_inlet_screen_residue`)

Wastewater inlet-screen residue is one named treatment-output waste stream and remains separate from every other residue.

- Selected flow: Wastewater inlet-screen residue
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured mass leaving the declared treatment operation and its documented destination; do not net it against removed pollutant load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Dissolved-air-flotation sludge (`sanitation_wastewater_dissolved_air_flotation_sludge`)

Dissolved-air-flotation sludge is one named treatment-output waste stream and remains separate from every other residue.

- Selected flow: Dissolved-air-flotation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured mass leaving the declared treatment operation and its documented destination; do not net it against removed pollutant load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Biological wastewater-treatment sludge (`sanitation_wastewater_biological_wastewater_treatment_sludge`)

Biological wastewater-treatment sludge is one named treatment-output waste stream and remains separate from every other residue.

- Selected flow: Biological wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured mass leaving the declared treatment operation and its documented destination; do not net it against removed pollutant load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Wastewater-treatment spent activated carbon (`sanitation_wastewater_wastewater_treatment_spent_activated_carbon`)

Wastewater-treatment spent activated carbon is one named treatment-output waste stream and remains separate from every other residue.

- Selected flow: Wastewater-treatment spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured mass leaving the declared treatment operation and its documented destination; do not net it against removed pollutant load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Discarded polymeric wastewater-treatment membrane (`sanitation_wastewater_discarded_polymeric_wastewater_treatment_membrane`)

Discarded polymeric wastewater-treatment membrane is one named treatment-output waste stream and remains separate from every other residue.

- Selected flow: Discarded polymeric wastewater-treatment membrane
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured mass leaving the declared treatment operation and its documented destination; do not net it against removed pollutant load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Wastewater-treatment grit (`sanitation_wastewater_wastewater_treatment_grit`)

Wastewater-treatment grit is one named treatment-output waste stream and remains separate from every other residue.

- Selected flow: Wastewater-treatment grit
- Flow property / unit: Mass / kg
- Amount rule: Record separately measured mass leaving the declared treatment operation and its documented destination; do not net it against removed pollutant load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_residue`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide, fossil to air (`sanitation_wastewater_carbon_dioxide_fossil_to_air`)

Carbon dioxide, fossil to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen monoxide to air (`sanitation_wastewater_nitrogen_monoxide_to_air`)

Nitrogen monoxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Nitrogen dioxide to air (`sanitation_wastewater_nitrogen_dioxide_to_air`)

Nitrogen dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Sulfur dioxide to air (`sanitation_wastewater_sulfur_dioxide_to_air`)

Sulfur dioxide to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter below 2.5 micrometres to air (`sanitation_wastewater_particulate_matter_below_2_5_micrometres_to_air`)

Particulate matter below 2.5 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Particulate matter from 2.5 to 10 micrometres to air (`sanitation_wastewater_particulate_matter_from_2_5_to_10_micrometres_to_air`)

Particulate matter from 2.5 to 10 micrometres to air is reported as one direct elementary exchange from on-site combustion assigned to this process.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the mass of this single emitted substance from the separately metered fuel use and a documented facility-, equipment-, or supplier-specific factor; do not use an uncited PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279`

###### Chemical oxygen demand to freshwater (`sanitation_wastewater_chemical_oxygen_demand_to_freshwater`)

Chemical oxygen demand to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Chemical oxygen demand to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Biochemical oxygen demand to freshwater (`sanitation_wastewater_biochemical_oxygen_demand_to_freshwater`)

Biochemical oxygen demand to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Biochemical oxygen demand to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Suspended solids to freshwater (`sanitation_wastewater_suspended_solids_to_freshwater`)

Suspended solids to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Suspended solids to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Ammonium to freshwater (`sanitation_wastewater_ammonium_to_freshwater`)

Ammonium to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Ammonium to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Nitrate to freshwater (`sanitation_wastewater_nitrate_to_freshwater`)

Nitrate to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Nitrate to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Nitrite to freshwater (`sanitation_wastewater_nitrite_to_freshwater`)

Nitrite to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Nitrite to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Phosphate to freshwater (`sanitation_wastewater_phosphate_to_freshwater`)

Phosphate to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Phosphate to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Chloride to freshwater (`sanitation_wastewater_chloride_to_freshwater`)

Chloride to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Chloride to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Acetic acid to freshwater (`sanitation_wastewater_acetic_acid_to_freshwater`)

Acetic acid to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Acetic acid to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Peracetic acid to freshwater (`sanitation_wastewater_peracetic_acid_to_freshwater`)

Peracetic acid to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Peracetic acid to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Chlorine to freshwater (`sanitation_wastewater_chlorine_to_freshwater`)

Chlorine to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Chlorine to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Beef tallow to freshwater (`sanitation_wastewater_beef_tallow_to_freshwater`)

Beef tallow to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Beef tallow to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Pork lard to freshwater (`sanitation_wastewater_pork_lard_to_freshwater`)

Pork lard to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Pork lard to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Mutton fat to freshwater (`sanitation_wastewater_mutton_fat_to_freshwater`)

Mutton fat to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Mutton fat to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Rabbit fat to freshwater (`sanitation_wastewater_rabbit_fat_to_freshwater`)

Rabbit fat to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Rabbit fat to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Chicken fat to freshwater (`sanitation_wastewater_chicken_fat_to_freshwater`)

Chicken fat to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Chicken fat to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Duck fat to freshwater (`sanitation_wastewater_duck_fat_to_freshwater`)

Duck fat to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Duck fat to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Seal oil to freshwater (`sanitation_wastewater_seal_oil_to_freshwater`)

Seal oil to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Seal oil to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Whale oil to freshwater (`sanitation_wastewater_whale_oil_to_freshwater`)

Whale oil to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Whale oil to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Rapeseed oil to freshwater (`sanitation_wastewater_rapeseed_oil_to_freshwater`)

Rapeseed oil to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Rapeseed oil to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Sunflower oil to freshwater (`sanitation_wastewater_sunflower_oil_to_freshwater`)

Sunflower oil to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Sunflower oil to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Water to freshwater (`sanitation_wastewater_water_to_freshwater`)

Water to freshwater is one separately quantified elementary exchange from a documented direct discharge. It is not reported when the effluent goes to sewer without a direct freshwater release.

- Selected flow: Water to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single discharged substance or water quantity from matched effluent-flow and sampling records for the reporting period; use non-detect treatment and units stated by the laboratory, with no PCR default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Carbon dioxide, biogenic to air (`sanitation_wastewater_carbon_dioxide_biogenic_to_air`)

Carbon dioxide, biogenic to air is one chemical-species-specific direct emission from the declared on-site treatment operation.

- Selected flow: Carbon dioxide, biogenic to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from facility monitoring or a documented site-specific treatment mass balance; no PCR default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Methane, biogenic to air (`sanitation_wastewater_methane_biogenic_to_air`)

Methane, biogenic to air is one chemical-species-specific direct emission from the declared on-site treatment operation.

- Selected flow: Methane, biogenic to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from facility monitoring or a documented site-specific treatment mass balance; no PCR default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Dinitrogen monoxide to air (`sanitation_wastewater_dinitrogen_monoxide_to_air`)

Dinitrogen monoxide to air is one chemical-species-specific direct emission from the declared on-site treatment operation.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from facility monitoring or a documented site-specific treatment mass balance; no PCR default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Ammonia to air (`sanitation_wastewater_ammonia_to_air`)

Ammonia to air is one chemical-species-specific direct emission from the declared on-site treatment operation.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from facility monitoring or a documented site-specific treatment mass balance; no PCR default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

###### Hydrogen sulfide to air (`sanitation_wastewater_hydrogen_sulfide_to_air`)

Hydrogen sulfide to air is one chemical-species-specific direct emission from the declared on-site treatment operation.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from facility monitoring or a documented site-specific treatment mass balance; no PCR default factor is supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_emission`
- Sources: `eu-jrc-sa-bref-2024`, `codex-cxc-58-2005`, `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| al_subdivision | All foreground operations | First subdivide processes, meters, batch records, and route-specific equipment so that direct attribution is used wherever feasible. Do not allocate an exchange to an operation that demonstrably did not use or emit it. | `eu-pef-2021-2279` |
| al_mass_balance | Animal material, ingredients, products, co-products, and wastes | Close the lot mass balance before allocation. A reported co-product must have a documented function and destination; otherwise retain it as a waste to its actual management route. | `eu-pef-2021-2279`, `eu-jrc-sa-bref-2024` |
| al_avoid_double_count | Broth, drippings, bone, adipose tissue, spent liquid, and rejects | Use the product card only for documented beneficial output and the waste card only for documented waste management. Never report the same physical mass in both alternatives. | `eu-pef-2021-2279` |
| al_residual | Unavoidable shared multi-output operation | After subdivision, apply an established physical causal relation when it represents the operation. If no defensible physical relation exists, apply economic allocation using contemporaneous, geography-matched, quality-documented prices and disclose the sensitivity. | `eu-pef-2021-2279` |
| al_waste_recovery | Waste sent to recovery | Do not assign an avoided-product credit inside the foreground inventory unless the selected study method explicitly requires it and the substitution, quality, yield, and system-boundary treatment are documented. Preserve waste mass and destination before any downstream modelling. | `eu-pef-2021-2279` |
| al_upstream | Purchased inputs | Retain the allocation method of a qualified supplier dataset and disclose material deviations; do not recreate upstream slaughter allocation inside this foreground process unless the facility is integrated and separately modelled. | `eu-pef-2021-2279`, `eu-jrc-sa-bref-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_receipt_material` | `raw_material_receipt` | Individual atomic product input, transfer, package article, co-product, or conforming output | Lot-scale mass, count, recipe, transfer, package issue, or release record | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | Collect from calibrated scales, recipe systems, stock issues, transfer tickets, package counts, and release records; reconcile to the same lot. | kg or converted kg | Each production lot and every material issue or transfer | Complete declared reporting period | Every foreground line and storage location used for the declared product | Sum only records with the same row_id after lot reconciliation; normalize through measured process outputs. | Calibration, lot genealogy, supplier specification, recipe authorization, release record, and reconciliation sign-off |
| `cp_raw_material_receipt_resource` | `raw_material_receipt` | One named electricity, heat, fuel, compressed-air, water-source, ice, or refrigerant exchange | Meter, invoice, tank, cylinder, maintenance, or withdrawal record | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | Read dedicated meters where available; otherwise allocate a shared reading with documented operating time or measured load while preserving each carrier identity. | native unit plus kWh, MJ, m3, or kg | At each meter interval, delivery, batch, or maintenance event | Complete declared reporting period | All on-site equipment supplying the declared process | Aggregate by process_id and exact row_id only; never combine energy carriers, water sources, or refrigerants. | Meter calibration, invoice, tank dip, cylinder issue, maintenance log, allocation worksheet, and reviewer sign-off |
| `cp_raw_material_receipt_residue` | `raw_material_receipt` | One named reject, point-of-generation wastewater, spent solution, sludge, package waste, or treatment residue | Scale, tank, flow-meter, waste manifest, destination, or treatment log | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | Measure at the point of generation or dispatch; convert volume only with documented density; match internal treatment inputs to the originating row. | kg or converted kg | Each lot, discharge batch, container, or waste dispatch | Complete declared reporting period | All foreground generation points and on-site treatment units | Sum by exact row_id and destination; never net against co-product output or pollutant removal. | Scale or meter calibration, manifest, tank record, destination receipt, internal transfer match, and mass-balance sign-off |
| `cp_raw_material_receipt_emission` | `raw_material_receipt` | One named air species, refrigerant species, discharged water substance, or discharged water quantity | Fuel record, factor provenance, refrigerant balance, exhaust measurement, effluent flow, or laboratory result | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | Match activity and measurement intervals; calculate one substance and compartment at a time; retain raw observations, factor provenance, non-detect treatment, and calculation workbook. | kg | Each monitoring or balance interval, aggregated to the reporting period | Complete declared reporting period with matched activity coverage | Every direct emission point assigned to the declared foreground processes | Sum only the same species, direction, and compartment after unit checks; no cross-substance aggregation. | Accredited or documented laboratory result, stack record, factor source, refrigerant service log, calculation workbook, and independent review |
| `cp_preparation_formulation_material` | `preparation_formulation` | Individual atomic product input, transfer, package article, co-product, or conforming output | Lot-scale mass, count, recipe, transfer, package issue, or release record | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | Collect from calibrated scales, recipe systems, stock issues, transfer tickets, package counts, and release records; reconcile to the same lot. | kg or converted kg | Each production lot and every material issue or transfer | Complete declared reporting period | Every foreground line and storage location used for the declared product | Sum only records with the same row_id after lot reconciliation; normalize through measured process outputs. | Calibration, lot genealogy, supplier specification, recipe authorization, release record, and reconciliation sign-off |
| `cp_preparation_formulation_resource` | `preparation_formulation` | One named electricity, heat, fuel, compressed-air, water-source, ice, or refrigerant exchange | Meter, invoice, tank, cylinder, maintenance, or withdrawal record | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | Read dedicated meters where available; otherwise allocate a shared reading with documented operating time or measured load while preserving each carrier identity. | native unit plus kWh, MJ, m3, or kg | At each meter interval, delivery, batch, or maintenance event | Complete declared reporting period | All on-site equipment supplying the declared process | Aggregate by process_id and exact row_id only; never combine energy carriers, water sources, or refrigerants. | Meter calibration, invoice, tank dip, cylinder issue, maintenance log, allocation worksheet, and reviewer sign-off |
| `cp_preparation_formulation_residue` | `preparation_formulation` | One named reject, point-of-generation wastewater, spent solution, sludge, package waste, or treatment residue | Scale, tank, flow-meter, waste manifest, destination, or treatment log | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | Measure at the point of generation or dispatch; convert volume only with documented density; match internal treatment inputs to the originating row. | kg or converted kg | Each lot, discharge batch, container, or waste dispatch | Complete declared reporting period | All foreground generation points and on-site treatment units | Sum by exact row_id and destination; never net against co-product output or pollutant removal. | Scale or meter calibration, manifest, tank record, destination receipt, internal transfer match, and mass-balance sign-off |
| `cp_preparation_formulation_emission` | `preparation_formulation` | One named air species, refrigerant species, discharged water substance, or discharged water quantity | Fuel record, factor provenance, refrigerant balance, exhaust measurement, effluent flow, or laboratory result | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | Match activity and measurement intervals; calculate one substance and compartment at a time; retain raw observations, factor provenance, non-detect treatment, and calculation workbook. | kg | Each monitoring or balance interval, aggregated to the reporting period | Complete declared reporting period with matched activity coverage | Every direct emission point assigned to the declared foreground processes | Sum only the same species, direction, and compartment after unit checks; no cross-substance aggregation. | Accredited or documented laboratory result, stack record, factor source, refrigerant service log, calculation workbook, and independent review |
| `cp_thermal_preservation_material` | `thermal_preservation` | Individual atomic product input, transfer, package article, co-product, or conforming output | Lot-scale mass, count, recipe, transfer, package issue, or release record | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | Collect from calibrated scales, recipe systems, stock issues, transfer tickets, package counts, and release records; reconcile to the same lot. | kg or converted kg | Each production lot and every material issue or transfer | Complete declared reporting period | Every foreground line and storage location used for the declared product | Sum only records with the same row_id after lot reconciliation; normalize through measured process outputs. | Calibration, lot genealogy, supplier specification, recipe authorization, release record, and reconciliation sign-off |
| `cp_thermal_preservation_resource` | `thermal_preservation` | One named electricity, heat, fuel, compressed-air, water-source, ice, or refrigerant exchange | Meter, invoice, tank, cylinder, maintenance, or withdrawal record | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | Read dedicated meters where available; otherwise allocate a shared reading with documented operating time or measured load while preserving each carrier identity. | native unit plus kWh, MJ, m3, or kg | At each meter interval, delivery, batch, or maintenance event | Complete declared reporting period | All on-site equipment supplying the declared process | Aggregate by process_id and exact row_id only; never combine energy carriers, water sources, or refrigerants. | Meter calibration, invoice, tank dip, cylinder issue, maintenance log, allocation worksheet, and reviewer sign-off |
| `cp_thermal_preservation_residue` | `thermal_preservation` | One named reject, point-of-generation wastewater, spent solution, sludge, package waste, or treatment residue | Scale, tank, flow-meter, waste manifest, destination, or treatment log | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | Measure at the point of generation or dispatch; convert volume only with documented density; match internal treatment inputs to the originating row. | kg or converted kg | Each lot, discharge batch, container, or waste dispatch | Complete declared reporting period | All foreground generation points and on-site treatment units | Sum by exact row_id and destination; never net against co-product output or pollutant removal. | Scale or meter calibration, manifest, tank record, destination receipt, internal transfer match, and mass-balance sign-off |
| `cp_thermal_preservation_emission` | `thermal_preservation` | One named air species, refrigerant species, discharged water substance, or discharged water quantity | Fuel record, factor provenance, refrigerant balance, exhaust measurement, effluent flow, or laboratory result | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | Match activity and measurement intervals; calculate one substance and compartment at a time; retain raw observations, factor provenance, non-detect treatment, and calculation workbook. | kg | Each monitoring or balance interval, aggregated to the reporting period | Complete declared reporting period with matched activity coverage | Every direct emission point assigned to the declared foreground processes | Sum only the same species, direction, and compartment after unit checks; no cross-substance aggregation. | Accredited or documented laboratory result, stack record, factor source, refrigerant service log, calculation workbook, and independent review |
| `cp_hermetic_canning_material` | `hermetic_canning` | Individual atomic product input, transfer, package article, co-product, or conforming output | Lot-scale mass, count, recipe, transfer, package issue, or release record | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | Collect from calibrated scales, recipe systems, stock issues, transfer tickets, package counts, and release records; reconcile to the same lot. | kg or converted kg | Each production lot and every material issue or transfer | Complete declared reporting period | Every foreground line and storage location used for the declared product | Sum only records with the same row_id after lot reconciliation; normalize through measured process outputs. | Calibration, lot genealogy, supplier specification, recipe authorization, release record, and reconciliation sign-off |
| `cp_hermetic_canning_resource` | `hermetic_canning` | One named electricity, heat, fuel, compressed-air, water-source, ice, or refrigerant exchange | Meter, invoice, tank, cylinder, maintenance, or withdrawal record | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | Read dedicated meters where available; otherwise allocate a shared reading with documented operating time or measured load while preserving each carrier identity. | native unit plus kWh, MJ, m3, or kg | At each meter interval, delivery, batch, or maintenance event | Complete declared reporting period | All on-site equipment supplying the declared process | Aggregate by process_id and exact row_id only; never combine energy carriers, water sources, or refrigerants. | Meter calibration, invoice, tank dip, cylinder issue, maintenance log, allocation worksheet, and reviewer sign-off |
| `cp_hermetic_canning_residue` | `hermetic_canning` | One named reject, point-of-generation wastewater, spent solution, sludge, package waste, or treatment residue | Scale, tank, flow-meter, waste manifest, destination, or treatment log | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | Measure at the point of generation or dispatch; convert volume only with documented density; match internal treatment inputs to the originating row. | kg or converted kg | Each lot, discharge batch, container, or waste dispatch | Complete declared reporting period | All foreground generation points and on-site treatment units | Sum by exact row_id and destination; never net against co-product output or pollutant removal. | Scale or meter calibration, manifest, tank record, destination receipt, internal transfer match, and mass-balance sign-off |
| `cp_hermetic_canning_emission` | `hermetic_canning` | One named air species, refrigerant species, discharged water substance, or discharged water quantity | Fuel record, factor provenance, refrigerant balance, exhaust measurement, effluent flow, or laboratory result | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | Match activity and measurement intervals; calculate one substance and compartment at a time; retain raw observations, factor provenance, non-detect treatment, and calculation workbook. | kg | Each monitoring or balance interval, aggregated to the reporting period | Complete declared reporting period with matched activity coverage | Every direct emission point assigned to the declared foreground processes | Sum only the same species, direction, and compartment after unit checks; no cross-substance aggregation. | Accredited or documented laboratory result, stack record, factor source, refrigerant service log, calculation workbook, and independent review |
| `cp_pickling_seasoning_material` | `pickling_seasoning` | Individual atomic product input, transfer, package article, co-product, or conforming output | Lot-scale mass, count, recipe, transfer, package issue, or release record | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | Collect from calibrated scales, recipe systems, stock issues, transfer tickets, package counts, and release records; reconcile to the same lot. | kg or converted kg | Each production lot and every material issue or transfer | Complete declared reporting period | Every foreground line and storage location used for the declared product | Sum only records with the same row_id after lot reconciliation; normalize through measured process outputs. | Calibration, lot genealogy, supplier specification, recipe authorization, release record, and reconciliation sign-off |
| `cp_pickling_seasoning_resource` | `pickling_seasoning` | One named electricity, heat, fuel, compressed-air, water-source, ice, or refrigerant exchange | Meter, invoice, tank, cylinder, maintenance, or withdrawal record | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | Read dedicated meters where available; otherwise allocate a shared reading with documented operating time or measured load while preserving each carrier identity. | native unit plus kWh, MJ, m3, or kg | At each meter interval, delivery, batch, or maintenance event | Complete declared reporting period | All on-site equipment supplying the declared process | Aggregate by process_id and exact row_id only; never combine energy carriers, water sources, or refrigerants. | Meter calibration, invoice, tank dip, cylinder issue, maintenance log, allocation worksheet, and reviewer sign-off |
| `cp_pickling_seasoning_residue` | `pickling_seasoning` | One named reject, point-of-generation wastewater, spent solution, sludge, package waste, or treatment residue | Scale, tank, flow-meter, waste manifest, destination, or treatment log | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | Measure at the point of generation or dispatch; convert volume only with documented density; match internal treatment inputs to the originating row. | kg or converted kg | Each lot, discharge batch, container, or waste dispatch | Complete declared reporting period | All foreground generation points and on-site treatment units | Sum by exact row_id and destination; never net against co-product output or pollutant removal. | Scale or meter calibration, manifest, tank record, destination receipt, internal transfer match, and mass-balance sign-off |
| `cp_pickling_seasoning_emission` | `pickling_seasoning` | One named air species, refrigerant species, discharged water substance, or discharged water quantity | Fuel record, factor provenance, refrigerant balance, exhaust measurement, effluent flow, or laboratory result | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | Match activity and measurement intervals; calculate one substance and compartment at a time; retain raw observations, factor provenance, non-detect treatment, and calculation workbook. | kg | Each monitoring or balance interval, aggregated to the reporting period | Complete declared reporting period with matched activity coverage | Every direct emission point assigned to the declared foreground processes | Sum only the same species, direction, and compartment after unit checks; no cross-substance aggregation. | Accredited or documented laboratory result, stack record, factor source, refrigerant service log, calculation workbook, and independent review |
| `cp_packaging_storage_release_material` | `packaging_storage_release` | Individual atomic product input, transfer, package article, co-product, or conforming output | Lot-scale mass, count, recipe, transfer, package issue, or release record | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | Collect from calibrated scales, recipe systems, stock issues, transfer tickets, package counts, and release records; reconcile to the same lot. | kg or converted kg | Each production lot and every material issue or transfer | Complete declared reporting period | Every foreground line and storage location used for the declared product | Sum only records with the same row_id after lot reconciliation; normalize through measured process outputs. | Calibration, lot genealogy, supplier specification, recipe authorization, release record, and reconciliation sign-off |
| `cp_packaging_storage_release_resource` | `packaging_storage_release` | One named electricity, heat, fuel, compressed-air, water-source, ice, or refrigerant exchange | Meter, invoice, tank, cylinder, maintenance, or withdrawal record | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | Read dedicated meters where available; otherwise allocate a shared reading with documented operating time or measured load while preserving each carrier identity. | native unit plus kWh, MJ, m3, or kg | At each meter interval, delivery, batch, or maintenance event | Complete declared reporting period | All on-site equipment supplying the declared process | Aggregate by process_id and exact row_id only; never combine energy carriers, water sources, or refrigerants. | Meter calibration, invoice, tank dip, cylinder issue, maintenance log, allocation worksheet, and reviewer sign-off |
| `cp_packaging_storage_release_residue` | `packaging_storage_release` | One named reject, point-of-generation wastewater, spent solution, sludge, package waste, or treatment residue | Scale, tank, flow-meter, waste manifest, destination, or treatment log | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | Measure at the point of generation or dispatch; convert volume only with documented density; match internal treatment inputs to the originating row. | kg or converted kg | Each lot, discharge batch, container, or waste dispatch | Complete declared reporting period | All foreground generation points and on-site treatment units | Sum by exact row_id and destination; never net against co-product output or pollutant removal. | Scale or meter calibration, manifest, tank record, destination receipt, internal transfer match, and mass-balance sign-off |
| `cp_packaging_storage_release_emission` | `packaging_storage_release` | One named air species, refrigerant species, discharged water substance, or discharged water quantity | Fuel record, factor provenance, refrigerant balance, exhaust measurement, effluent flow, or laboratory result | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | Match activity and measurement intervals; calculate one substance and compartment at a time; retain raw observations, factor provenance, non-detect treatment, and calculation workbook. | kg | Each monitoring or balance interval, aggregated to the reporting period | Complete declared reporting period with matched activity coverage | Every direct emission point assigned to the declared foreground processes | Sum only the same species, direction, and compartment after unit checks; no cross-substance aggregation. | Accredited or documented laboratory result, stack record, factor source, refrigerant service log, calculation workbook, and independent review |
| `cp_sanitation_wastewater_material` | `sanitation_wastewater` | Individual atomic product input, transfer, package article, co-product, or conforming output | Lot-scale mass, count, recipe, transfer, package issue, or release record | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | Collect from calibrated scales, recipe systems, stock issues, transfer tickets, package counts, and release records; reconcile to the same lot. | kg or converted kg | Each production lot and every material issue or transfer | Complete declared reporting period | Every foreground line and storage location used for the declared product | Sum only records with the same row_id after lot reconciliation; normalize through measured process outputs. | Calibration, lot genealogy, supplier specification, recipe authorization, release record, and reconciliation sign-off |
| `cp_sanitation_wastewater_resource` | `sanitation_wastewater` | One named electricity, heat, fuel, compressed-air, water-source, ice, or refrigerant exchange | Meter, invoice, tank, cylinder, maintenance, or withdrawal record | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | Read dedicated meters where available; otherwise allocate a shared reading with documented operating time or measured load while preserving each carrier identity. | native unit plus kWh, MJ, m3, or kg | At each meter interval, delivery, batch, or maintenance event | Complete declared reporting period | All on-site equipment supplying the declared process | Aggregate by process_id and exact row_id only; never combine energy carriers, water sources, or refrigerants. | Meter calibration, invoice, tank dip, cylinder issue, maintenance log, allocation worksheet, and reviewer sign-off |
| `cp_sanitation_wastewater_residue` | `sanitation_wastewater` | One named reject, point-of-generation wastewater, spent solution, sludge, package waste, or treatment residue | Scale, tank, flow-meter, waste manifest, destination, or treatment log | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | Measure at the point of generation or dispatch; convert volume only with documented density; match internal treatment inputs to the originating row. | kg or converted kg | Each lot, discharge batch, container, or waste dispatch | Complete declared reporting period | All foreground generation points and on-site treatment units | Sum by exact row_id and destination; never net against co-product output or pollutant removal. | Scale or meter calibration, manifest, tank record, destination receipt, internal transfer match, and mass-balance sign-off |
| `cp_sanitation_wastewater_emission` | `sanitation_wastewater` | One named air species, refrigerant species, discharged water substance, or discharged water quantity | Fuel record, factor provenance, refrigerant balance, exhaust measurement, effluent flow, or laboratory result | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | Match activity and measurement intervals; calculate one substance and compartment at a time; retain raw observations, factor provenance, non-detect treatment, and calculation workbook. | kg | Each monitoring or balance interval, aggregated to the reporting period | Complete declared reporting period with matched activity coverage | Every direct emission point assigned to the declared foreground processes | Sum only the same species, direction, and compartment after unit checks; no cross-substance aggregation. | Accredited or documented laboratory result, stack record, factor source, refrigerant service log, calculation workbook, and independent review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cr_stage_normalization | All foreground exchanges | Normalized row amount = reconciled row quantity × chained downstream conforming-transfer factors ÷ net conforming reference-product mass. Keep each row identity unchanged through normalization. | Lot quantities; process transfer masses; reference net mass | kg, MJ, kWh, or m3 per 1 kg reference product as appropriate | `eu-pef-2021-2279` |
| cr_item_mass | Package articles recorded by count | Package mass = issued item count × lot-specific mean item mass measured from a documented sample; report each article separately. | Item count; sample item masses; tare record | kg of the named package article | `eu-pef-2021-2279` |
| cr_energy_conversion | Steam, hot water, natural gas, diesel, liquefied petroleum gas | Carrier energy = recorded carrier quantity × documented invoice energy basis or measured net calorific value. Electricity remains in kWh and compressed air remains in m3. | Carrier-specific meter or invoice quantity; conversion basis | MJ for the same named carrier | `eu-pef-2021-2279` |
| cr_combustion_emission | Each direct combustion air species | Emission mass = sum over each separately metered fuel of fuel energy × documented facility-, equipment-, or supplier-specific emission factor for that one species. No uncited PCR factor is permitted. | Fuel energy by carrier; factor value; factor unit; operating assignment | kg of one named air species | `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279` |
| cr_refrigerant_balance | Each installed refrigerant system | Refrigerant loss = opening stock + additions + make-up − closing stock − recovered mass − documented transfers. Report ammonia and HFC-134a directly; split R404A loss into HFC-125, HFC-134a, and HFC-143a using supplier composition. | Opening stock; additions; make-up; closing stock; recovered mass; transfers; supplier composition | kg of each named refrigerant species to air | `eu-pef-2021-2279` |
| cr_effluent_load | Each direct-water-discharge row | Discharged load = sum of matched effluent volume × laboratory concentration after unit conversion and documented non-detect handling. Water quantity is calculated separately from pollutant mass. | Effluent flow; concentration; time interval; laboratory unit; density where needed | kg of one named substance or water to freshwater | `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279` |
| cr_process_mass_balance | Each foreground process and lot | Mass-balance discrepancy = material inputs − conforming product outputs − co-product outputs − waste outputs − closing stock + opening stock. Investigate and disclose rather than forcing the discrepancy to zero. | Atomic material rows; stock change; process transfers | Documented process mass balance and unresolved discrepancy | `eu-pef-2021-2279` |
| cr_reference_net_mass | Reference product | Reference net mass = gross released package mass − measured package-component mass − nonconforming product mass excluded from release. Normalize to exactly 1 kg only after reconciliation. | Gross release mass; each package mass; excluded product mass | 1 kg net conforming reference product | `eu-pef-2021-2279` |
| cr_allocation_share | Unavoidable shared multi-output operation | Allocated exchange = shared exchange × documented physical or economic allocation share; all shares for the same exchange must sum to one, with unrounded inputs retained. | Shared exchange; causal parameter or contemporaneous price; co-product quantities | Allocated atomic exchange by product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | Reference product and animal-origin inputs | Demonstrate CPC 21189 identity, exact species, anatomical tissue or blood source, non-sausage form, one preservation route, and ambient or chilled release state. Do not use the reference-flow comment's incorrect 22182 or 22183 cross-references. | Retained CPC raw record, product specification, recipe, label, supplier specification, and lot genealogy |
| dq_route | Preservation process | Retain actual equipment, operating sequence, batch, time-temperature or scheduled-process records, cooling, deviation review, and release authorization for the selected branch. | Codex-aligned process record and signed release review |
| dq_canning | Hermetic canning | Retain container specification, closure checks, scheduled-process authority, critical-factor records, retort record, cooling record, container-integrity inspection, and deviation disposition. | CXC 23 process file for every canning campaign |
| dq_temporal | All foreground data | Cover the complete declared reporting period and all included production lots; disclose shutdowns, campaigns, abnormal events, missing intervals, and substitutions. | Production calendar, meter coverage, lot list, gap log, and representativeness statement |
| dq_technology | Energy, refrigerant, package, and treatment rows | Match records to actual site equipment, installed refrigerant, carrier, package specification, and treatment configuration; do not borrow another route's row. | Equipment register, utility diagram, refrigeration log, package bill, and treatment flow diagram |
| dq_completeness | Inventory | Reconcile raw inputs, ingredients, water, each energy carrier, refrigerant make-up and emissions, package components, products, co-products, rejects, wastewater, residues, and direct air or water exchanges; justify every omitted applicable card. | Atomic-row completeness matrix and process mass balance |
| dq_measurement | Measured quantities | Use calibrated equipment and preserve gross readings, tare, unit, timestamp, lot, equipment ID, conversion basis, and correction records. | Calibration certificates, raw exports, invoices, laboratory reports, and reviewed calculation workbook |
| dq_allocation | Shared operations and co-products | Document subdivision attempts, allocation relation, parameters, prices where used, waste status, destination, and sensitivity. Prevent product/waste alternative double counting. | Allocation memo, price or physical-causality evidence, and sensitivity result |
| dq_uuid | Flow identities | Only the verified reference product may carry the supplied UUID. Every other blank UUID must remain matched to exactly one manifest unresolved row until hybrid search and public state=100 direct read confirm exact identity. | UUID whitelist and row_id closure audit |
| dq_source_use | External evidence | Use official sources for classification and method rules only within their stated purpose. Do not convert process descriptions into default amounts, ranges, or emission factors. | Source-to-rule matrix and absence of unsupported defaults |
| dq_verification | Dataset release | A reviewer independent of data preparation must check identity, boundary, route, records, calculations, unit conversions, material balance, allocation, UUID closure, and disclosures before publication. | Signed verification checklist and resolved finding log |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| vr_cpc_identity | Dataset identity | Pass only when CPC is exactly 21189 and the product specification matches the declared included scope; fail use of 22182 or 22183 as exclusion references. | `unsd-cpc-3-21189` |
| vr_exclusions | Dataset identity | Fail sausages, meat extracts or juices, complete meals, homogenized infant-type preparations, fish preparations, or products defined by freezing, salting, brining, smoking, or drying. | `unsd-cpc-3-21189` |
| vr_reference_uuid | Reference product | Require UUID `61b39162-1ed6-4d66-b54b-9c0889bd9fc4`, Product flow type, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| vr_reference_amount | Reference product | Require exactly 1 kg net conforming product after package mass and nonconforming product are excluded. | `eu-pef-2021-2279` |
| vr_qualifiers | Reference product | Fail when exact animal and anatomical recipe, concrete product form, receipt state, one preservation route, final state, package specification, lot, site, time period, or allocation disclosure is missing. | `eu-pef-2021-2279` |
| vr_route_lock | Process selection | Require exactly one matching product-form route through thermal preservation, hermetic canning, or pickling/seasoning. Within thermal preservation, require exactly one named cooking, frying, roasting, or steaming method for the selected product transfer. | `codex-cxc-58-2005`, `codex-cxc-23-1979`, `fao-meat-processing-2007` |
| vr_canning_records | Hermetic canning | Fail a canning dataset without documented filling, closure, scheduled process, cooling, integrity review, deviation handling, and lot records. | `codex-cxc-23-1979` |
| vr_atomic_flow | Inventory | Require every Selected flow except the official broad reference product to name one concrete material, article, waste stream, substance, or compartment exchange; fail collection labels and and/or selectors. |  |
| vr_energy_split | Inventory | Require grid electricity, purchased steam, purchased hot water, natural gas, diesel, liquefied petroleum gas, and purchased compressed air to remain distinct by process; fail combined energy values. | `eu-pef-2021-2279` |
| vr_water_split | Inventory | Require mains water, groundwater, and surface water to remain distinct; preserve each point-of-generation wastewater stream and discharge destination. | `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279` |
| vr_refrigerant | Cold operations | Require the installed refrigerant identity, make-up, recovery, inventory balance, and individual leakage species; fail a pooled refrigerant emission. | `eu-pef-2021-2279` |
| vr_package_mass | Packaging | Require every package article separately and exclude total package mass from the 1 kg product mass. | `eu-pef-2021-2279` |
| vr_mass_balance | Each process | Require a reconciled material balance with documented discrepancies and prevent simultaneous reporting of the same mass as both co-product and waste. | `eu-pef-2021-2279` |
| vr_effluent | Direct discharge | Require matched flow and laboratory sampling for each pollutant and receiving compartment; fail a pooled pollutant row or an uncited default concentration. | `eu-jrc-sa-bref-2024`, `eu-pef-2021-2279` |
| vr_amount_mode | All non-reference rows | Require `foreground_record` or `calculated_value`; fail unsupported fixed values, modelled estimates, reasoned-estimate ranges, or source-description-derived defaults. | `eu-pef-2021-2279` |
| vr_uuid_closure | All inventory rows | Require the reference UUID only on `packaging_storage_release_reference_product`; every other blank UUID must have exactly one matching manifest unresolved entry with candidate and rejection reason. |  |
| vr_bilingual | PCR projection | Require identical process_id, row_id, direction, flow type, controlled tokens, protocol_id, source-id order, and card order in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for one declared CPC 21189 product. |
| downstream_use | May become a `secondary_dataset` or `background_dataset` only after methodology review, UUID resolution, aligned projection, data verification, and publication controls. |
| allowed_use | Comparative or attributional modelling only when product form, animal recipe, route, site, market state, time period, technology, package, allocation, and geography are sufficiently representative and disclosed. |
| excluded_use | Not a category-average default; not valid for sausages, complete meals, extracts, infant preparations, fish preparations, or freezing-, salting-, brining-, smoking-, or drying-defined products; not authorization for marine-mammal sourcing or sale. |
| required_metadata | PCR id; CPC 21189; reference UUID; exact recipe species and anatomy; product form; route; receipt and release states; site; geography; time period; process technologies; package bill; refrigerant; water source; wastewater route; allocation; co-product and waste destinations; source and verification references. |
| required_quality_disclosure | Coverage, missing data, substitutions, meter allocation, laboratory methods, non-detect handling, mass-balance discrepancy, conversion factors, data-quality assessment, UUID gaps, independent verification, and limitations. |
| update_trigger | Change in recipe species or anatomy, product form, preservation route, scheduled process, equipment, refrigerant, package, site, utility mix, wastewater treatment, allocation, co-product destination, reporting period, classification scope, reference identity, or governing source. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21189` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, retained official structure CSV, subclass 21189, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-08-13) | Exact subclass title, parent context, and exclusions from CPC 21181–21184 and complete-meal subclass 21186. |
| `eu-jrc-sa-bref-2024` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199, https://doi.org/10.2760/18199 (accessed 2026-08-13) | Separate upstream animal-material datasets, receipt handling, cleaning, utilities, wastewater, residues, co-products, and direct-emission inventory structure; no default quantities imported. |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-08-13) | Product-specific bill of materials, company-specific manufacturing data, complete LCI, allocation hierarchy, transparency, data quality, and verification. |
| `codex-cxc-58-2005` | Standard (`standard`) | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005, https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (accessed 2026-08-13) | Meat-product definitions, raw and processed segregation, process control, cooking records, cold storage, packaging, sanitation, traceability, and lot documentation. |
| `codex-cxc-23-1979` | Standard (`standard`) | Codex Alimentarius, Code of Hygienic Practice for Low and Acidified Low-Acid Canned Foods, CXC 23-1979, https://workspace.fao.org/sites/codex/Standards/CXC%2023-1979/CXC_023e.pdf (accessed 2026-08-13) | Hermetic-container filling and closure, scheduled thermal processing, rapid cooling, container-integrity control, deviation handling, and production records; no numerical process defaults imported. |
| `fao-meat-processing-2007` | Handbook (`handbook`) | Gunter Heinz and Peter Hautzinger, Meat Processing Technology for Small- to Medium-Scale Producers, FAO Regional Office for Asia and the Pacific, RAP Publication 2007/20, ISBN 978-974-7946-99-4, https://www.fao.org/3/a-ai407e.pdf (accessed 2026-08-13) | Independent process decomposition for cutting, comminution, mixing, forming, cooking, frying, roasting, steaming, canning, formulation ingredients, packaging, and hygiene; no default quantities imported. |
| `eu-reg-853-2004` | Standard (`standard`) | Regulation (EC) No 853/2004 laying down specific hygiene rules for food of animal origin, consolidated official text, https://eur-lex.europa.eu/eli/reg/2004/853/oj/eng (accessed 2026-08-13) | Official identity for processed meat products, products of animal origin including blood, and anatomical product distinctions. |
