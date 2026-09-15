---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-liver-oils-and-their-fractions
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fish-liver oils and their fractions

## 1. Scope and Applicability

This PCR applies to edible oils obtained exclusively from fish livers and to fractions that retain that fish-liver origin. It covers named fish liver oil, including cod liver oil when the declared species meets the Codex description, unnamed fish liver oil from one or more declared fish species, crude fish liver oil intended for further processing for human consumption, refined fish liver oil, and fractions or concentrates made solely from those fish-liver oils when the final product remains within this product category. The foreground boundary follows the actual route from received fish livers through oil extraction, every applied refining, purification, fractionation or concentration step, and release of the bulk product at the producing facility gate.

The product must be derived from livers. Oils from whole fish, other fish tissues, shellfish, marine mammals, mixtures of fish liver oil with non-liver fish oil, named land-animal fats, and non-food technical oils are excluded. Hydrolysis, hydrogenation, inter-esterification, re-esterification, elaidinisation, esterification or another chemical-form adjustment is not presumed to remain in CPC 21524: when the final product falls in CPC 21590 or another applicable category, it is ineligible for this PCR even if fish-liver oil was its feedstock. Retail filling, downstream formulation into capsules or other foods, distribution, use and end of life are outside the default foreground boundary. Upstream fishing or aquaculture, fish landing and the operation that separates the livers are represented by linked upstream datasets and must not be assumed burden-free.

CXS 329-2017 is used for the fish-oil definition, fish-liver source identity, permitted route description and product-integrity evidence. It does not provide this PCR with generic energy, water, composition or yield values. All such quantities are facility- and lot-specific foreground data.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-liver-oils-and-their-fractions |
| classification_refs | CPC 3.0: 21524 Fish-liver oils and their fractions (exact scope reference) |
| covered_products | Crude, refined, named or unnamed fish liver oils intended for human consumption; cod liver oil from declared eligible Gadidae species; food-grade fractions and concentrates derived exclusively from fish liver oils and remaining classified in CPC 21524 |
| excluded_products | Oils from whole fish or non-liver fish tissues; fish oils mixed with liver oils; shellfish oils; marine-mammal oils; land-animal fats; vegetable oils; products classified as chemically modified animal fats outside CPC 21524; non-food technical oils; retail capsules and formulated foods |
| representative_product | One released bulk lot of food-grade fish liver oil or a declared fish-liver-oil fraction at the producing facility gate |
| production_route | Declared fish livers -> extraction and oil separation -> conditional refining and purification -> conditional fractionation or concentration -> product release and bulk packing |
| market_state | Crude for further food processing, refined edible oil, or declared food-grade fraction/concentrate; bulk at producing facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of fish-liver oil or a fish-liver-oil fraction made exclusively from declared fish livers |
| How much | 1 kg net mass of released product |
| How well | Product state, source species, liver-only origin, applied route and intended food market are declared; the lot has applicable CXS 329-2017 product-integrity evidence |
| How long or cycle | One production lot at release; no use-duration function is claimed |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fish-liver oils and their fractions `895379c3-482c-42db-8aee-5d4805685442` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species and scientific name; liver-only origin; wild/farmed source where applicable; named or unnamed oil; crude/refined/fraction/concentrate physical state; extraction route; physical refining and purification steps; physical fractionation, winterization and concentration steps actually applied; solvent use and recovery actually applied; CPC classification decision; intended market and further-processing requirement; production geography; reference period; bulk packaging; product-integrity test basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Released reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming released oil or fraction. Do not substitute volume, package count, nominal fill or fatty-acid mass for the 1 kg reference amount. |
| `lot_normalization` | All foreground inventory rows | Quantity appropriate to the recorded flow | Native measured unit and normalized value per kg reference product | Record lot totals first and normalize only by the net mass of conforming released reference product from the same accounting period. Preserve the raw unit and conversion record. |
| `volume_to_mass` | Oil, water or liquid material recorded by volume | Mass or volume as measured | kg or measured volume unit | Convert volume to mass only with a product-, temperature- and lot-representative measured density. Otherwise retain the volume flow and do not invent a density. |
| `energy_separation` | Electricity, steam, fuels and recovered energy | Energy or fuel property appropriate to the selected flow | Native meter, invoice or fuel unit | Keep electricity, imported heat/steam and each fuel separate. Report the measured amount and documented conversion; do not apply a generic fish-oil energy intensity. |
| `quality_basis` | Product-integrity laboratory results | Property and analytical basis required by the applicable CXS 329-2017 provision | Method-specific unit | Retain the sample date, method, result, basis and pass/fail decision. Composition or quality results are product evidence and must not be used as generic inventory quantities. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fish livers received at the oil-producing foreground facility, with supplier, fish species, liver-only origin, preservation condition and received mass declared |
| starting_condition_role | Upstream product input to the first foreground oil-extraction process |
| product_classification_scope | Fish-liver oils and their fractions only; CPC 3.0 code 21524 is a classification reference and does not broaden the liver-only semantic boundary |
| recursive_input_rule | Purchased fish-liver oil used as an intermediate is recorded as an input with its own upstream dataset and declared state; it is not recursively re-created inside this foreground system and is not treated as burden-free |
| upstream_dataset_requirement | Link supplier-representative datasets for fishing or aquaculture, landing and fish processing through liver separation, plus purchased energy, water, chemicals, process aids, transport and packaging as applicable |
| disclosure | Declare liver species and origin, supplier operation, crude/refined/fraction state, every applied process step, excluded steps, facility geography, reference period, co-products and wastes, allocation method, data gaps and product-integrity evidence |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_liver_only` | Product and feedstock identity | Include only oil extracted from declared fish livers. Exclude whole-fish oil, non-liver fish oil and mixtures with non-liver oil. | `unsd-cpc-3-0-2025`; `codex-cxs-329-2017` |
| `sb_actual_route` | Foreground processes | Include extraction and separation plus every physical refining, purification, winterization, physical fractionation, concentration, solvent-use or recovery, conditioning and packing step actually applied before the declared gate, provided the final product retains CPC 21524 identity. Do not insert an unperformed generic route. | `codex-cxs-329-2017`; `unsd-cpc-3-0-2025` |
| `sb_crude_state` | Crude fish liver oil | A crude product is released only with an explicit further-processing requirement. A product declared ready for direct human consumption must include all applicable processing and product-integrity evidence. | `codex-cxs-329-2017` |
| `sb_cpc_chemical_modification_gate` | Product classification exclusion | Hydrolysis, hydrogenation, inter-esterification, re-esterification, elaidinisation, esterification and other chemical-form adjustment routes are outside the eligible CPC 21524 route whenever the resulting product belongs in CPC 21590 or another applicable category. Such a product must fail this PCR's classification gate and be routed to CPC 21590 or the applicable category. Codex fish-oil chemical-form descriptions do not determine CPC classification. | `unsd-cpc-3-0-2025`; `codex-cxs-329-2017` |
| `sb_fdm_bat_not_applicable` | Applicability of FDM BAT conclusions | Commission Implementing Decision (EU) 2019/2031 explicitly excludes production of primary products from animal by-products, including fish-oil production. Its BAT-AELs, environmental performance levels, sector ranges, process defaults and monitoring prescriptions must not be applied to this PCR. | `eu-fdm-bat-2019` |
| `sb_inventory_completeness` | Each included foreground process | Record process-level raw materials, water, electricity, heat and fuels, products, co-products, residues, wastewater and relevant waste-gas or direct-emission streams from foreground records. | `eu-pef-2021` |
| `sb_upstream_livers` | Received fish livers | Include a linked upstream dataset through liver separation and disclose its allocation or burden-assignment rule. The liver input may not be assigned zero upstream burden without reviewed, source-supported justification. | `eu-pef-2021` |
| `sb_exclusion_disclosure` | Excluded processes or flows | Justify and document each exclusion and its potential significance. Convenience, missing data or an unsubstantiated generic cut-off is not an acceptable reason. | `eu-pef-2021` |

## 6. Process Inventory Structure

No generic energy, water, chemical, composition, yield or emission range is specified. The amount rules below are mandatory foreground-data requirements. A dataset producer must replace missing records with a documented study-specific model and disclose the model, inputs, uncertainty and replacement trigger; silence or an unlabeled default is not allowed.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `liver_oil_extraction` | Fish-liver receipt, preparation, oil extraction and separation | `required` | Always included for oil produced from received fish livers | Foreground production | Lot mass balance normalized to 1 kg released reference product |
| `refining_and_purification` | Crude oil refining and purification | `conditional` | Include every time refining or purification occurs, and for direct-consumption product when needed to meet the declared specification | Foreground conditioning | Refined-oil mass balance normalized to 1 kg released reference product |
| `fractionation_and_concentration` | Physical fractionation, winterization or concentration | `conditional` | Include each applied physical step only when it does not change the final product's CPC 21524 identity | Foreground physical separation or concentration | Stepwise mass balance normalized to 1 kg released reference product |
| `release_and_bulk_packing` | Final conditioning, quality release and bulk packing | `required` | Always included for the declared facility-gate product | Foreground release | 1 kg net conforming released product |

### Process: Fish-liver receipt, preparation, oil extraction and separation (`liver_oil_extraction`)

#### Inputs

##### Product flows

###### Received fish livers (`received_fish_livers`)

Record only segregated fish livers with supplier and species evidence. The received mass links the foreground extraction to the upstream fishing/aquaculture and fish-processing dataset.

- Selected flow: Facility-specific fish-liver input flow with declared species and supplier
- Flow property / unit: Mass / kg
- Amount rule: Measured net received fish-liver mass accepted into the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_lot_records`
- Sources: `codex-cxs-329-2017`; `eu-pef-2021`

###### Extraction water (`extraction_water`)

Record metered water entering liver preparation, extraction, separation and associated cleaning within the process boundary. Keep reused water and once-through water distinguishable.

- Selected flow: Site-specific water supply flow
- Flow property / unit: Volume or Mass / measured native unit
- Amount rule: Metered or reconciled process water attributable to the extraction lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_lot_records`
- Sources:

###### Extraction energy carriers (`extraction_energy`)

Record electricity, imported heat or steam and each fuel separately for heating, mechanical separation, pumping, cooling and cleaning. Do not combine them into an unsupported generic intensity.

- Selected flow: Meter- or invoice-specific electricity, heat, steam and fuel product flows
- Flow property / unit: Energy, Mass or Volume / native measured unit
- Amount rule: Process-metered amount, or documented allocation from a facility meter to the extraction lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_lot_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude fish liver oil (`crude_fish_liver_oil`)

Record the measured crude oil separated from the declared liver lot. Its species scope and crude state must remain traceable to the released product.

- Selected flow: Facility-specific crude fish liver oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured net crude-oil mass transferred from extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_lot_records`
- Sources: `codex-cxs-329-2017`

###### Non-oil liver outputs with product status (`liver_coproducts`)

Record separated solids or other outputs as product flows only when they meet the study's product/co-product definition and have a documented destination and value. Otherwise record them as waste.

- Selected flow: Destination-specific co-product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by output type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_lot_records`
- Sources: `eu-pef-2021`

##### Waste flows

###### Extraction residues and rejected liver material (`extraction_residues`)

Record each waste stream, wet mass or dry mass basis, legal classification, treatment route and destination separately.

- Selected flow: Waste-specific residue flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled waste mass by stream and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_lot_records`
- Sources:

###### Extraction wastewater (`extraction_wastewater`)

Record wastewater volume, destination and measured relevant characteristics. Segregate uncontaminated cooling water where the facility records it separately.

- Selected flow: Destination-specific wastewater flow
- Flow property / unit: Volume / m3 or measured native unit
- Amount rule: Metered or reconciled discharge attributable to extraction, before or after treatment as explicitly declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_lot_records`
- Sources:

##### Elementary flows

###### Direct extraction releases (`extraction_direct_releases`)

Record direct releases to air, water or soil identified for the process, including on-site fuel-combustion releases and refrigerant losses when applicable. Purchased-energy upstream emissions remain in linked background datasets.

- Selected flow: Compartment-specific elementary flow selected for each measured or calculated release
- Flow property / unit: Mass / kg or method-specific unit
- Amount rule: Measured release or value calculated from collected activity data using a declared factor and calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_lot_records`
- Sources:

### Process: Crude oil refining and purification (`refining_and_purification`)

#### Inputs

##### Product flows

###### Crude fish liver oil to refining (`crude_oil_to_refining`)

Record the crude intermediate entering each actual refining or purification line, preserving lot and species traceability.

- Selected flow: Facility-specific crude fish liver oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_lot_records`
- Sources: `codex-cxs-329-2017`

###### Refining materials, water and process aids (`refining_materials`)

Record each alkali, acid, adsorbent, filter aid, water input and other material actually consumed. A listed possible Codex process is not evidence that the material was used.

- Selected flow: Material-specific product flow
- Flow property / unit: Mass or Volume / native measured unit
- Amount rule: Weighed, metered or invoice-reconciled amount consumed in the refining lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_lot_records`
- Sources: `codex-cxs-329-2017`

###### Refining energy carriers (`refining_energy`)

Record electricity, imported heat or steam and fuels separately for every applied heating, phase-removal, vacuum, pumping, cooling and cleaning operation.

- Selected flow: Meter- or invoice-specific electricity, heat, steam and fuel product flows
- Flow property / unit: Energy, Mass or Volume / native measured unit
- Amount rule: Process-metered amount, or documented allocation from a facility meter to the refining lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_lot_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined or purified fish liver oil (`refined_fish_liver_oil`)

Record the measured oil transferred from refining, together with the actual sequence of steps and the resulting declared state.

- Selected flow: Facility-specific refined or purified fish liver oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured net conforming intermediate mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_lot_records`
- Sources: `codex-cxs-329-2017`

##### Waste flows

###### Refining residues and spent process aids (`refining_residues`)

Record removed water phases, spent adsorbents or filters, sludge, rejected oil and other residues separately by measured mass and destination.

- Selected flow: Waste-specific refining residue flow
- Flow property / unit: Mass or Volume / native measured unit
- Amount rule: Weighed, metered or reconciled amount by waste stream and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_lot_records`
- Sources: `codex-cxs-329-2017`

###### Refining wastewater (`refining_wastewater`)

Record separated water phases and cleaning wastewater with destination and measured relevant characteristics; distinguish wastewater from recovered process water.

- Selected flow: Destination-specific wastewater flow
- Flow property / unit: Volume / m3 or measured native unit
- Amount rule: Metered or reconciled discharge attributable to refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_lot_records`
- Sources:

##### Elementary flows

###### Direct refining releases (`refining_direct_releases`)

Record direct air, water or soil releases from the applied route, including on-site combustion or vacuum-system releases when applicable.

- Selected flow: Compartment-specific elementary flow for each measured or calculated release
- Flow property / unit: Mass / kg or method-specific unit
- Amount rule: Measured release or value calculated from collected activity data using a declared factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refining_lot_records`
- Sources:

### Process: Physical fractionation, winterization or concentration (`fractionation_and_concentration`)

#### Inputs

##### Product flows

###### Fish liver oil feed to fractionation or concentration (`oil_to_fractionation`)

Record the measured fish-liver-oil intermediate and preserve liver species and lot lineage. Non-liver fish oil feed makes the resulting product ineligible for this PCR.

- Selected flow: Facility-specific fish liver oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fractionation_lot_records`
- Sources: `codex-cxs-329-2017`

###### Physical-fractionation materials, solvents and process aids (`fractionation_materials`)

Record each material actually used in physical fractionation, winterization, concentration or associated solvent operations, including recovered and make-up solvent separately. The recorded operation must pass the CPC classification gate.

- Selected flow: Material-specific product flow
- Flow property / unit: Mass or Volume / native measured unit
- Amount rule: Weighed, metered or inventory-reconciled consumption for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fractionation_lot_records`
- Sources: `codex-cxs-329-2017`

###### Fractionation energy and water (`fractionation_energy_water`)

Record electricity, heat, cooling and process water separately in their native units for the actual route. No default concentration or winterization intensity is allowed.

- Selected flow: Meter-specific energy-carrier and water product flows
- Flow property / unit: Energy, Mass or Volume / native measured unit
- Amount rule: Process-metered amount, or documented allocation from facility records to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fractionation_lot_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Target fish-liver-oil fraction or concentrate (`target_fraction_output`)

Record the measured target output, declared physical fraction or concentrate identity, and confirmation that the product remains within CPC 21524.

- Selected flow: Facility-specific fish-liver-oil fraction or concentrate intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured net target output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fractionation_lot_records`
- Sources: `unsd-cpc-3-0-2025`; `codex-cxs-329-2017`

###### Other marketable fractions (`other_fraction_coproducts`)

Record each other fraction as a co-product only with measured mass, declared identity, destination and evidence that it is not waste.

- Selected flow: Fraction-specific co-product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by fraction and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fractionation_lot_records`
- Sources: `eu-pef-2021`

##### Waste flows

###### Fractionation residues and wastewater (`fractionation_wastes`)

Record non-product fractions, spent aids, unrecovered solvent, cleaning waste and wastewater separately by physical state and destination.

- Selected flow: Waste-specific fractionation or wastewater flow
- Flow property / unit: Mass or Volume / native measured unit
- Amount rule: Weighed, metered or reconciled quantity by waste stream and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fractionation_lot_records`
- Sources:

##### Elementary flows

###### Direct fractionation releases (`fractionation_direct_releases`)

Record measured or calculated solvent, refrigerant, combustion and other direct releases to the correct compartment.

- Selected flow: Compartment-specific elementary flow for each release
- Flow property / unit: Mass / kg or method-specific unit
- Amount rule: Measured release or calculated value from collected material or energy records using a declared factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fractionation_lot_records`
- Sources:

### Process: Final conditioning, quality release and bulk packing (`release_and_bulk_packing`)

#### Inputs

##### Product flows

###### Oil or fraction entering final release (`oil_to_release`)

Record the measured intermediate entering the release lot and its link to extraction and every applied downstream process.

- Selected flow: Facility-specific fish liver oil or fraction intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_lot_records`
- Sources: `codex-cxs-329-2017`

###### Authorized additives and conditioning materials (`release_additives`)

Record antioxidants, sequestrants, antifoaming agents, emulsifiers, flavourings or restored vitamins only when actually added and legally applicable; preserve material identity and amount.

- Selected flow: Additive-specific product flow
- Flow property / unit: Mass / kg or measured native unit
- Amount rule: Weighed addition from batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_lot_records`
- Sources: `codex-cxs-329-2017`

###### Bulk packaging and release energy (`release_packaging_energy`)

Record each bulk container, liner or closure and electricity, heat or inert-gas service actually used for conditioning, testing support, storage and packing.

- Selected flow: Packaging-material and energy-carrier product flows recorded separately
- Flow property / unit: Mass, item count or Energy / native measured unit
- Amount rule: Batch-issued packaging and metered or documented allocated energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_lot_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released fish-liver oil or fraction (`released_reference_product`)

This is the quantitative reference. Only net mass that passes the declared release specification and has complete liver-origin and route evidence is counted.

- Selected flow: Fish-liver oils and their fractions `895379c3-482c-42db-8aee-5d4805685442`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming released product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Off-spec oil, samples and packing waste (`release_wastes`)

Record off-spec product, retained or destructive test samples, spills and packing waste separately with destination and any recovery route.

- Selected flow: Waste-specific release or packaging flow
- Flow property / unit: Mass or item count / native measured unit
- Amount rule: Weighed, counted or reconciled amount by waste stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_lot_records`
- Sources:

##### Elementary flows

###### Direct release-stage emissions (`release_direct_releases`)

Record direct refrigerant, inert-gas-system or on-site combustion releases when they occur; do not duplicate upstream emissions embedded in purchased services.

- Selected flow: Compartment-specific elementary flow for each release
- Flow property / unit: Mass / kg or method-specific unit
- Amount rule: Measured release or calculated value from collected activity data using a declared factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_lot_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | Multi-output foreground processes | First subdivide extraction, refining and fractionation records so directly attributable inputs and releases remain with the output that causes them. System expansion may be used when its added function and substituted system are explicitly modelled. | `eu-pef-2021` |
| `alloc_physical_relationship` | Residual shared burdens after subdivision | If subdivision or system expansion is not feasible, use a documented, quantifiable physical relationship relevant to the process function. Mass alone is not automatically relevant; justify the chosen relationship. | `eu-pef-2021` |
| `alloc_other_relationship` | Shared burdens lacking a defensible physical relationship | Use another relationship, such as relative economic value at the point of co-production, only after documenting why the earlier hierarchy steps failed. Record prices, currency, geography, averaging period, factor and sensitivity. | `eu-pef-2021` |
| `alloc_waste_treatment` | Residues, wastewater and off-spec material | Assign collection, treatment and direct-release burdens to the process that generates the waste. Do not give an avoided-product credit unless a reviewed system-expansion substitution is explicitly modelled. | `eu-pef-2021` |
| `alloc_upstream_liver_burden` | Fish livers obtained from a fish-processing operation | Import the supplier dataset's disclosed burden-assignment rule and allocation factor through liver separation. Do not prescribe a generic fish-liver allocation factor and do not default the livers to zero burden. | `eu-pef-2021` |
| `alloc_mass_reconciliation` | All multi-output lots | Reconcile measured input, product, co-product, waste and measured loss quantities before allocation. Allocation changes burden shares, not the physical mass balance. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_extraction_lot_records` | `liver_oil_extraction` | Liver identity, material/energy/water inputs, crude oil, co-products, wastes, wastewater and direct releases | Production lot and meter records | supplier; fish species; scientific name; liver-only declaration; preservation state; received mass; input/output masses; water meters; electricity/heat/fuel records; wastewater volume and characteristics; waste destination; emission activity data | Calibrated scales and meters, batch sheets, supplier records, invoices, laboratory or discharge records | Native recorded units plus kg-reference normalization | Each lot; utilities at the shortest available interval that can be assigned to production | At least one representative production period with start/end dates and seasonal coverage disclosed | All foreground lines and shared utilities serving extraction | Sum accepted records by lot; subtract documented returns; allocate shared meters by disclosed causal driver; normalize using `calc_reference_normalization` | Calibration records; meter coverage; batch closure; supplier traceability; reconciliation statement |
| `cp_refining_lot_records` | `refining_and_purification` | Refining feed, materials, water, energy, output, residues, wastewater and direct releases | Refining batch and utility records | input lot; applied step; transferred mass; chemical/process-aid issue; water; electricity; heat; fuel; product mass; residue and wastewater; release activity data | Batch sheets, calibrated scales/meters, warehouse issues, invoices and environmental monitoring | Native recorded units plus kg-reference normalization | Each refining lot and each applicable utility/accounting interval | Same period as the represented product, with mismatches disclosed | All included refining and purification equipment and shared services | Aggregate by actual step and lot; prevent double counting of recovered materials; normalize using `calc_reference_normalization` | Step log; calibration; material balance; utility allocation record; waste manifests |
| `cp_fractionation_lot_records` | `fractionation_and_concentration` | Feed, physical-fractionation materials, solvents, energy/water, target and other fractions, wastes and direct releases | Stepwise batch and recovery records | feed lot; physical operation; material addition; solvent make-up/recovery; energy; water; target output; other fractions; waste; emission activity data; CPC classification decision | Batch sheets, mass-flow or tank records, meters, solvent inventory and environmental monitoring | Native recorded units plus kg-reference normalization | Each applicable physical-transformation lot | Same period and technology as the represented fraction or concentrate | Every included physical fractionation, winterization or concentration step that retains CPC 21524 identity | Close each step balance before aggregation; record recovered loops gross and net; normalize using `calc_reference_normalization` | Step lineage; instrument calibration; solvent reconciliation; CPC classification confirmation |
| `cp_release_lot_records` | `release_and_bulk_packing` | Final intermediate, additions, packaging, release energy, reference product, rejects and direct releases | Release batch, packaging issue and certificate records | input lot; additions; packaging items/mass; energy; released net mass; rejected mass; samples; waste; test method/result/pass-fail; product state; intended market | Batch and warehouse records, calibrated scales, utility records and controlled laboratory certificate | Native recorded units; final reference mass in kg | Each released lot | Same release lots as the represented dataset period | Release, bulk storage and packing operations at the foreground site | Count only conforming released mass; reconcile all output dispositions; normalize using `calc_reference_normalization` | Certificate of analysis; release authorization; scale calibration; packaging issue reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every variable foreground row | normalized amount = accepted lot quantity / net conforming released product mass from the same represented lot or accounting period | Raw quantity in native unit; net released product mass in kg | Native unit per 1 kg reference product |  |
| `calc_process_mass_balance` | Each extraction, refining, fractionation and release lot | reconciliation residual = total measured mass inputs - total measured product outputs - total measured co-product outputs - total measured waste outputs - separately measured releases; disclose sign, magnitude, likely cause and site acceptance decision | All measured mass inputs and outputs on consistent wet/dry bases | Lot-level reconciliation record; not an invented yield |  |
| `calc_shared_utility_assignment` | Shared water and energy meters | assigned quantity = measured shared-meter quantity x documented causal assignment factor; factors across covered products must sum to one for the interval | Meter total; operating time, throughput or other justified causal driver | Assigned utility quantity with factor and rationale | `eu-pef-2021` |
| `calc_direct_release` | Calculated direct elementary flows | release = collected activity quantity x declared emission or loss factor; retain factor source, version, applicability and unit conversion | Fuel/material/refrigerant/solvent activity record; reviewed factor | Compartment-specific direct elementary flow |  |
| `calc_totox` | Fish-liver-oil oxidation evidence where applicable | ToTox = 2 x peroxide value + anisidine value; use analytical results from the same applicable release sample basis | Peroxide value; anisidine value | ToTox product-integrity result | `codex-cxs-329-2017` |
| `calc_allocation_factor` | Shared multi-output burdens | Apply the selected hierarchy rule to each shared inventory row; allocated quantity = shared quantity x documented factor, while directly attributable rows remain unallocated | Shared inventory row; chosen relationship; factor evidence | Product-specific allocated row and complete factor set | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Fish livers, intermediates and released product | Maintain lot lineage from supplier and species through each process; demonstrate liver-only origin and prevent mixing with non-liver fish oil. | Supplier declaration, receiving record, tank/batch genealogy and release record |
| `dq_measurement` | Mass, water, energy, material and release records | Use calibrated or controlled instruments and retain native readings, conversion factors, data owner and uncertainty or resolution. | Calibration certificate, meter specification, scale check and calculation record |
| `dq_temporal_coverage` | Dataset period | Represent the production technology and meaningful operating variation; disclose shutdowns, abnormal lots, seasonality and any mismatch between utility and production periods. | Dated batch list, operating calendar and coverage statement |
| `dq_completeness` | Foreground inventory | Reconcile all major inputs and outputs, document exclusions and identify unmetered shared services. Missing values may not be silently set to zero. | Process flow sheet, mass balance, utility coverage map and gap register |
| `dq_representativeness` | Site, technology and geography | State the represented site(s), equipment route, species mix, product state, geography and market; explain extrapolation beyond the collected data. | Dataset metadata, sampling plan and representativeness assessment |
| `dq_product_integrity` | Released lot | Retain applicable CXS 329-2017 identity, quality, vitamin, contaminant, hygiene and labelling evidence for the declared product and market state; do not substitute a generic composition profile. | Controlled specification, certificate of analysis, compliance decision and label/dispatch record |
| `dq_secondary_datasets` | Upstream fish, energy, materials, transport and treatment | Record dataset identity, version, geography, technology, temporal reference and reason for selection; identify proxies and replacement triggers. | Dataset register and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Require product flow UUID `895379c3-482c-42db-8aee-5d4805685442`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg and reference amount 1. |  |
| `val_liver_origin` | Product eligibility | Fail eligibility if liver-only origin, fish species or lot lineage is absent, or if whole-fish/non-liver oil enters the product without separately proving that it is outside the reference product. | `codex-cxs-329-2017`; `unsd-cpc-3-0-2025` |
| `val_route_completeness` | Process map | Require extraction and release plus every physical refining, purification, winterization, physical fractionation, concentration and solvent-use or recovery step actually applied. A declared crude product must state that further processing is required. | `codex-cxs-329-2017`; `unsd-cpc-3-0-2025` |
| `val_cpc_chemical_modification_gate` | Reference-product eligibility | Fail CPC 21524 eligibility when hydrolysis, hydrogenation, inter-esterification, re-esterification, elaidinisation, esterification or another chemical-form adjustment produces a final product classified in CPC 21590 or another applicable category. Require the dataset to route to that category; Codex fish-oil product-form descriptions cannot override the CPC decision. | `unsd-cpc-3-0-2025`; `codex-cxs-329-2017` |
| `val_inventory_completeness` | Foreground process inventory | Require collected or transparently calculated materials, water, energy, products, co-products, wastes, wastewater and applicable direct-release rows for each included process; reject silent zeroes and unlabeled defaults. | `eu-pef-2021` |
| `val_mass_balance` | Each production lot or represented period | Require a documented mass-balance reconciliation with all dispositions and residual explanation before normalization and allocation. |  |
| `val_allocation` | Multi-output processes and upstream livers | Require subdivision first, documented hierarchy choice, complete factors and sensitivity where another relationship is used. Reject an unexplained zero burden for received fish livers. | `eu-pef-2021` |
| `val_product_integrity` | Released product | Require applicable CXS 329-2017 identity and product-integrity test evidence for the declared named/unnamed, crude/refined/fraction state and intended market. Fail when the certificate basis does not match the released lot. | `codex-cxs-329-2017` |
| `val_no_generic_values` | Inventory and product evidence | Reject any generic energy, water, composition or yield value presented as foreground fact without a cited applicable source or collected-record basis. Reasoned estimates, if ever introduced during later review, must be explicit, provisional and carry a replacement trigger. | `eu-pef-2021` |
| `val_scope_exclusions` | Excluded flows and processes | Require documented rationale and potential significance for each exclusion; fail if an exclusion broadens the product to non-liver fish oil or removes an actually applied foreground operation. | `eu-pef-2021`; `unsd-cpc-3-0-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a declared fish-liver oil or fish-liver-oil fraction at the producing facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` when independently reviewed, representative and accompanied by the required disclosures |
| allowed_use | LCA of food-grade fish-liver oils or eligible fractions matching the declared species, liver-only origin, product state, technology, geography, period and market |
| excluded_use | Non-liver fish oil, mixed fish oil, shellfish or marine-mammal oil, land-animal fat, technical oil, retail formulation, or a route/geography materially different from the dataset without an explicit scenario adjustment |
| required_metadata | PCR id and version; reference UUIDs; species and scientific name; liver-only evidence; supplier/upstream dataset; wild/farmed status where applicable; named/unnamed and crude/refined/fraction/concentrate physical state; CPC classification decision; actual physical process map; facility geography; reference period; product-integrity specification; allocation; packaging; exclusions; data owners |
| required_quality_disclosure | Measurement and calibration; lot and temporal coverage; mass-balance residuals; utility assignment; allocation factors; upstream-liver burden rule; secondary-dataset register; product-integrity evidence; missing data, proxies, uncertainty and review status |
| update_trigger | Change in source species or liver origin, supplier allocation, extraction/physical-refining/purification/winterization/physical-fractionation/concentration route, CPC classification, physical product state, facility technology, material energy/water system, waste or emission treatment, product specification, applicable regulation, reference-flow identity, or a material data-quality correction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact CPC 21524 classification reference, separation from non-liver fish oils and other animal fats, and the gate to CPC 21590 or another applicable category |
| `codex-cxs-329-2017` | `standard` | Codex Alimentarius, CXS 329-2017, Standard for Fish Oils, amended 2024. https://workspace.fao.org/sites/codex/Standards/CXS%20329-2017/CXS_329e.pdf | Fish-oil and fish-liver-oil definitions, liver source identity, crude/direct-consumption distinction, physical processing descriptions used within this PCR, product integrity and release evidence; Codex product descriptions do not determine CPC classification |
| `codex-cxs-211-1999` | `standard` | Codex Alimentarius, CXS 211-1999, Standard for Named Animal Fats, amended 2024. https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf | Negative-scope check for named land-animal fats; no composition or quantitative factor is imported into this PCR |
| `eu-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj | System-boundary completeness, exclusion disclosure, company-specific data, allocation hierarchy and data-quality requirements |
| `eu-fdm-bat-2019` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Scope exclusion only: primary fish-oil production is excluded, so its BAT-AELs, environmental performance levels, sector ranges, process defaults and monitoring prescriptions must not be applied |
