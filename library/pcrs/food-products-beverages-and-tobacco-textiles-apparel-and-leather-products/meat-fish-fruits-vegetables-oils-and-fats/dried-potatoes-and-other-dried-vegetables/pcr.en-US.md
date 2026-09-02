---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.dried-potatoes-and-other-dried-vegetables
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dried potatoes and other dried vegetables

## 1. Scope and Applicability

This PCR covers the factory production of dried potatoes and other dried vegetables represented by the exact CPC-classified Tiangong product flow **Dried Vegetables**. It applies to vegetables dried from a succulent state by one declared artificial-dehydration route, including freeze-drying, or by one declared route combining sun-drying with artificial dehydration. Products may be whole or cut into a declared form. Each foreground data package shall preserve the vegetable identity, product form, incoming and finished-product moisture basis, pretreatment, drying technology, packaging state, and net-mass basis.

The PCR does not treat incompatible drying technologies as one interchangeable route. A dataset shall represent one declared route and technology configuration. A production mix may be constructed only from separately modelled route datasets with documented production shares; it shall not merge route-specific inventories into a single unqualified unit process.

Excluded products are potato flour, meal, powder, flakes, granules, and pellets classified separately from CPC 21393; vegetables preserved principally by freezing, vinegar or acetic acid, sugar, canning, fermentation, or another non-drying method; ready-made meals; dried fruits; cereal grains; mature dried pulses and legumes; dried spices; and products whose vegetable identity or drying route is not declared. Downstream distribution, preparation, consumption, and end-of-life are outside this foreground factory-gate dataset, although a downstream lifecycle model shall add them when required by its goal and scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.dried-potatoes-and-other-dried-vegetables` |
| classification_refs | CPC 3.0 `21393`, Dried potatoes and other dried vegetables (`unsd-cpc-3-0-2025`) |
| covered_products | Potatoes and other vegetables dried from a succulent state by one declared artificial route, including freeze-drying, or by one declared sun-plus-artificial route; whole or declared cut forms |
| excluded_products | Potato flour, meal, powder, flakes, granules, or pellets; frozen, pickled, canned, fermented, sugar-preserved, or otherwise non-dried vegetables; meals; dried fruit; cereal grains; mature dried pulses or legumes; dried spices; unqualified route mixtures |
| representative_product | Exact Tiangong product flow Dried Vegetables `dc43358a-8159-496d-b2e9-a30c8fb3e38a` |
| production_route | Route-specific preparation, one declared and exclusive drying technology, and finishing/packaging; production mixes require separately modelled route datasets and documented shares |
| market_state | Bulk or packaged dried vegetable at the manufacturer gate, on a declared finished-product moisture basis and net mass excluding packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dried potatoes or another identified dried vegetable supplied in a declared product form |
| How much | 1 kg net mass of dried product, excluding packaging |
| How well | Vegetable identity, product form, finished-product moisture value and wet/dry measurement basis, pretreatment, drying route and technology, and packaging state are declared; the product meets the applicable commercial and food-safety specification |
| How long or cycle | One production lot delivered at the manufacturer gate; no use duration is assigned to this intermediate product |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the reference product flow at the declared finished-product moisture |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dried product |
| Reference product flow | Dried Vegetables `dc43358a-8159-496d-b2e9-a30c8fb3e38a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | vegetable common and, where material, botanical identity; product form and particle-size or cut description; incoming moisture value and wet/dry basis; finished-product moisture value and wet/dry basis; pretreatment sequence and aids; drying route and technology; drying medium or direct-contact fuel status; bulk or packaging format; net-mass basis; geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every inventory result to 1 kg net dried product at the declared finished-product moisture; exclude packaging mass from the reference amount. |
| `moisture_basis` | Incoming, intermediate, and dried vegetable | Mass fraction | kg water/kg material or % | State whether every moisture value is wet basis or dry basis and use one internally consistent conversion convention; do not compare or combine values with unstated or different bases. |
| `mass_balance` | Each process and the combined foreground system | Mass | kg | Reconcile vegetable input into saleable dried output, removed water, rejected solids, samples, and other losses on the same reporting basis; investigate and disclose material imbalance. |
| `energy_carrier_separation` | Drying and finishing energy | Energy or fuel-specific property | kWh, MJ, or fuel mass/volume unit | Record electricity, purchased heat, and each fuel separately and retain carrier, technology, and metering basis; do not collapse them into an undocumented generic energy total. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified fresh or otherwise succulent potatoes or vegetables received at the dehydration facility, with origin, product form, incoming moisture basis, prior preservation or pretreatment, and transport-to-gate status declared |
| starting_condition_role | Foreground gate input; cultivation, harvest, and transport before facility receipt are represented by linked upstream datasets when the study extends upstream |
| product_classification_scope | CPC 3.0 `21393`; methodology applies only when product identity and preservation by drying are consistent with the covered-products statement |
| recursive_input_rule | An incoming dried vegetable already within this PCR category is recorded as a technosphere product input with its own upstream dataset and declared moisture and route; its earlier drying is not repeated inside the receiving process |
| upstream_dataset_requirement | Link representative datasets for vegetable production, transport, water, energy carriers, pretreatment aids, packaging materials, and waste treatment as applicable; document geography, technology, time, and any proxy |
| disclosure | Declare vegetable identity and form, incoming and final moisture values and bases, pretreatment, the single drying route and technology, drying medium/direct-contact status, product yield, packaging state, allocation choices, exclusions, and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | Foreground unit process | Include receipt and storage at the facility, inspection/sorting, applicable washing and pretreatment, the declared drying route, cooling/equilibration, finishing, packaging where supplied, on-site utilities, wastes, wastewater, and direct emissions through the manufacturer gate. | `codex-cxc-5-1971`; `eu-pef-2021-2279` |
| `sb_route_exclusivity` | Drying route | Model exactly one declared technology configuration per unit-process dataset. If a market or production mix is needed, keep route datasets separate and combine them only in a higher-level mix with documented mass shares and reference periods. | `codex-cxc-5-1971` |
| `sb_upstream_linkage` | Linked lifecycle model | For cradle-to-gate or broader results, connect upstream vegetable production and all relevant supplied materials, energy, water, transport, packaging, and waste-treatment datasets; justify and disclose any exclusion. | `eu-pef-2021-2279` |
| `sb_direct_contact` | Drying medium and direct-contact heating | Identify whether combustion gas or another drying medium contacts the food. Include consumed fuel and relevant direct emissions in the foreground where combustion occurs on site, and disclose product-contact controls. | `codex-cxc-5-1971`; `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_preparation` | Raw-material receipt and preparation | required | Always; individual washing, peeling, cutting, blanching, or treatment steps are included only when performed | Convert the identified received vegetable to the declared feed condition for drying while tracking removals and additions | kg prepared wet vegetable sent to drying |
| `declared_drying` | Declared drying route | required | Exactly one route and technology configuration per unit-process dataset | Remove water using the declared artificial or sun-plus-artificial route without pooling incompatible technologies | kg dried vegetable leaving the declared dryer at measured moisture |
| `finishing_packaging` | Finishing, packaging, and factory-gate output | required | Packaging inputs are included when the product is supplied packaged; otherwise declare bulk state | Cool or equilibrate, inspect, size or mill only within the covered form, pack where applicable, and report net saleable output | 1 kg net Dried Vegetables at declared moisture |

### Process: Raw-material receipt and preparation (`raw_preparation`)

#### Inputs

##### Product flows

###### Identified vegetable received (`raw_vegetable_input`)

Record the actual potato or vegetable entering the facility, including its identity, origin, received form, incoming moisture basis, and any prior treatment.

- Selected flow: Product-specific fresh or succulent potato or vegetable flow
- Flow property / unit: Mass / kg
- Amount rule: measured net received mass allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared wet vegetable sent to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material`

###### Preparation water (`preparation_water`)

Record water crossing the process boundary for washing, conveying, blanching, cooling, or other declared preparation; separate reused water and make-up water where material.

- Selected flow: Process water appropriate to the site supply
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: metered or batch-record water supplied, net of documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wet vegetable sent to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- Sources: `codex-cxc-5-1971`

###### Pretreatment materials and aids (`pretreatment_materials`)

Record each declared peeling aid, anti-browning agent, firming agent, preservative, or other processing aid separately when used; do not assume a treatment applies to all vegetables.

- Selected flow: Substance-specific product flow selected for the actual pretreatment
- Flow property / unit: Mass / kg
- Amount rule: measured issue or batch recipe amount for each substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared wet vegetable sent to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- Sources: `codex-cxc-5-1971`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared wet vegetable sent to drying (`prepared_wet_vegetable`)

Calculate the mass transferred to the declared dryer after sorting and pretreatment, with identity, form, pretreatment, and measured moisture basis retained.

- Selected flow: Product-specific prepared wet vegetable flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated input less measured removals
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared wet vegetable sent to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_material`
- Sources: `codex-cxc-5-1971`

##### Waste flows

###### Rejected and removed vegetable material (`preparation_solid_residues`)

Record soil-bearing rejects, peel, trimmings, damaged material, and other removed vegetable fractions by actual destination and regulatory classification.

- Selected flow: Destination-specific biogenic residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by destination or a disclosed lot mass-balance residual
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wet vegetable sent to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material`
- Sources: `codex-cxc-5-1971`

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving the foreground process, including treatment destination and materially altered characteristics where available.

- Selected flow: Site-specific wastewater flow to the actual treatment route
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: metered discharge or calculated water input less documented retained, evaporated, and recirculated water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wet vegetable sent to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_inputs`
- Sources: `codex-cxc-5-1971`

##### Elementary flows

### Process: Declared drying route (`declared_drying`)

#### Inputs

##### Product flows

###### Prepared vegetable feed (`dryer_feed`)

Record the prepared vegetable entering the selected dryer, preserving vegetable identity, product form, pretreatment, feed moisture value, and moisture basis.

- Selected flow: Product-specific prepared wet vegetable flow
- Flow property / unit: Mass / kg
- Amount rule: measured dryer feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried vegetable leaving the dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_route`

###### Drying electricity (`drying_electricity`)

Record metered electricity for the declared dryer and its integral fans, pumps, vacuum, refrigeration, controls, and material handling; allocate shared meters transparently.

- Selected flow: Geography- and voltage-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented engineering allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried vegetable leaving the dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_route`
- Sources: `eu-pef-2021-2279`

###### Drying heat or fuel (`drying_heat_or_fuel`)

Record purchased heat and each fuel separately when used by the declared route. State whether combustion is on site and whether combustion gases contact the product.

- Selected flow: Carrier-specific purchased heat or fuel flow
- Flow property / unit: Energy, Mass, or Volume / MJ, kWh, kg, or m3 as metered
- Amount rule: metered delivery or consumption for the production lot, separately by carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried vegetable leaving the dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_route`
- Sources: `codex-cxc-5-1971`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried vegetable before finishing (`dryer_product`)

Record dried output mass and measured moisture at dryer discharge. The record remains specific to the declared route and is not averaged with another technology.

- Selected flow: Product-specific dried vegetable intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured net dryer output at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried vegetable leaving the dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_route`
- Sources: `codex-cxc-5-1971`

##### Waste flows

###### Dryer off-specification material (`dryer_rejects`)

Record scorched, contaminated, spilled, or otherwise off-specification dried material by actual recovery or treatment destination.

- Selected flow: Destination-specific dried vegetable residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried vegetable leaving the dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_route`

##### Elementary flows

###### On-site drying emissions (`on_site_drying_emissions`)

When fuel is combusted on site, record each relevant elementary emission separately from measured fuel use and a documented current factor or direct measurement; do not double count emissions embedded in a purchased-energy dataset.

- Selected flow: Substance-specific elementary emission flow
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or measured fuel consumption multiplied by a disclosed applicable emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried vegetable leaving the dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_route`
- Sources: `eu-pef-2021-2279`

### Process: Finishing, packaging, and factory-gate output (`finishing_packaging`)

#### Inputs

##### Product flows

###### Dried vegetable received for finishing (`finishing_feed`)

Record the route-specific dried intermediate entering cooling, equilibration, inspection, sizing, and packaging operations.

- Selected flow: Product-specific dried vegetable intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net factory-gate dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`

###### Packaging materials (`packaging_materials`)

Record each primary, secondary, and tertiary packaging material when supplied with the product, including actual mass, recycled content if known, and reuse count where relevant. For bulk product, declare the reusable or customer-owned container treatment.

- Selected flow: Material-specific packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass or bill-of-material amount per packed net product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net factory-gate dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021-2279`

###### Finishing and packaging electricity (`finishing_electricity`)

Record electricity for cooling, equilibration, inspection, sizing, conveying, metal detection, and packaging when these operations occur.

- Selected flow: Geography- and voltage-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net factory-gate dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net dried vegetable reference product (`dried_vegetables_reference_product`)

Report exactly 1 kg net dried vegetable at the declared finished-product moisture and with all required qualifiers. Packaging mass is not part of the reference amount.

- Selected flow: Dried Vegetables `dc43358a-8159-496d-b2e9-a30c8fb3e38a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net dried product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net factory-gate dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Finishing rejects and packaging scrap (`finishing_wastes`)

Record product fines or rejects and packaging scrap separately by material and actual recovery or treatment destination.

- Selected flow: Destination-specific product residue or packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net factory-gate dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | Shared processes and multiple outputs | First avoid allocation by sub-metering, subdividing the process, or keeping vegetable identities, product grades, and drying routes in separate unit processes. | `eu-pef-2021-2279` |
| `alloc_physical` | Unavoidable joint production with a defensible physical relationship | If subdivision or system expansion cannot be applied, allocate according to the physical relationship that reflects how inputs and burdens change with the outputs, such as dry-solids mass or another documented causal parameter; do not select a basis only because data are convenient. | `eu-pef-2021-2279` |
| `alloc_other_relationship` | Unavoidable joint production without a defensible physical relationship | If no physical relationship can be established, use another documented relationship, such as economic value, with contemporaneous prices, reference period, calculation, and sensitivity disclosed. | `eu-pef-2021-2279` |
| `alloc_residues` | Rejects, by-products, recovered material, and wastes | Classify each output consistently with its actual destination. Do not assign zero burden or a credit merely from its name; document any burden split, substitution, treatment, and avoided-product assumption. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material` | `raw_preparation` | Vegetable receipt, transfer, rejects, and identity | Lot receipt, weighbridge, scale, moisture test, and disposition records | vegetable identity; origin; received form; received mass; incoming moisture value; moisture basis; rejected mass; prepared transfer mass; dates; lot id | Reconcile calibrated mass records and representative moisture tests to each production lot | kg; % or kg water/kg material | Each lot, with moisture sampling appropriate to within-lot variability | Representative production period, normally at least 12 consecutive months or a justified shorter campaign | Each facility and product identity | Sum masses by lot; calculate mass-weighted moisture only among records with the same basis; normalize to prepared output | Calibration records; sampling plan; laboratory method; lot reconciliation; origin and identity records |
| `cp_preparation_inputs` | `raw_preparation` | Water, pretreatment inputs, and wastewater | Meter, batch sheet, recipe, purchasing, and discharge records | water make-up; recirculation; discharge; each aid identity and mass; operating time; treated mass; wastewater destination | Prefer dedicated meters and verified batch issues; document shared-meter allocation | m3; kg; h | Each lot or meter interval linked to production | Same period as represented production | Each preparation line and facility | Subtract documented internal recirculation only once; aggregate each material separately and normalize to prepared output | Meter checks; batch sheets; formulation approval; invoices; discharge records |
| `cp_drying_route` | `declared_drying` | Route identity, feed/output, moisture, energy, rejects, and direct emissions | Dryer batch, control-system, meter, fuel, laboratory, and maintenance records | route; equipment; feed mass and moisture basis; output mass and moisture basis; electricity; purchased heat; fuel by carrier; direct-contact status; time; temperature/pressure as relevant; rejects; emission measurement or factor reference | Use calibrated meters and representative moisture sampling; retain route configuration and factor provenance | kg; % or kg water/kg material; kWh; MJ; fuel unit; h; process-condition unit | Each lot or meter interval linked to one route | Route-representative production period, normally at least 12 consecutive months or a justified seasonal campaign | Each dryer and facility; never pool incompatible technologies without separate datasets | Reconcile feed dry solids and output; aggregate each carrier separately; normalize to measured dryer output at declared moisture | Meter calibration; lab method; control-system export; fuel invoices; route diagram; maintenance and factor records |
| `cp_finishing_packaging` | `finishing_packaging` | Net product, packaging, electricity, and finishing wastes | Packing, scale, bill-of-material, meter, quality-release, and waste records | product identity; route link; input and net output mass; final moisture and basis; form; package format; each packaging mass; electricity; rejects; scrap destination; lot id | Reconcile calibrated net-content and packaging records to released lots | kg; % or kg water/kg material; kWh | Each released lot or meter interval | Same period as represented production | Each finishing or packaging line and facility | Sum released net product excluding packaging; keep packaging materials and waste destinations separate; normalize to 1 kg net product | Scale calibration; bill of materials; quality certificate; packaging specification; meter and waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground flows | normalized flow = period flow / net kg of conforming dried product at the declared finished-product moisture | period flow; released net product mass; final moisture record | flow amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_dry_solids_balance` | Preparation and drying | dry solids = material mass × (1 − moisture fraction on wet basis); when a dry-basis moisture is reported, convert it to wet basis before balancing and retain the original result | input and output masses; moisture values; moisture bases; rejects and samples | reconciled dry-solids balance and unexplained difference |  |
| `calc_removed_water` | Declared drying route | removed water = feed water − product water − measured water in removed material; report unmeasured condensate or exhaust moisture as the balance term, not as freshwater consumption | feed and output mass/moisture; reject mass/moisture | kg water removed per kg dryer output |  |
| `calc_route_mix` | Higher-level production or market mix only | combine separately normalized route datasets using documented net-product mass shares summing to 1 for the same product specification and reference period | route-specific datasets; production shares; common qualifier set | qualified mixed-production dataset | `eu-pef-2021-2279` |
| `calc_on_site_emissions` | On-site fuel combustion | calculate each emission from measured fuel and a disclosed applicable factor, or use direct measurement; do not add the same combustion emission when it is already included in a purchased-energy dataset | fuel consumption; factor or measurement; energy dataset boundary | substance-specific elementary emission per reference flow | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | All represented production | Trace each record to vegetable identity, product form, pretreatment, one drying route/technology, facility, lot or meter interval, and reference period. | Lot genealogy, route diagram, batch records, and dataset metadata |
| `dq_mass_moisture` | Mass and moisture data | Use calibrated mass measurements and a documented sampling and analytical method; state moisture basis and sampling coverage, and reconcile dry solids across the foreground system. | Calibration certificates, sampling plan, lab records, and mass-balance worksheet |
| `dq_temporal_geographic` | Foreground and linked data | Use data representative of the declared geography, technology, and reference period; explain seasonal campaigns, shutdowns, shared facilities, proxies, and any period shorter than 12 consecutive months. | Production calendar, meter coverage, supplier metadata, proxy justification, and sensitivity record |
| `dq_completeness` | Inventory completeness | Check all material and energy inputs, water, packaging, saleable output, rejects, wastewater, waste destinations, and direct emissions relevant to the declared configuration; document exclusions and their expected significance. | Completeness checklist, process flow diagram, purchase-to-meter reconciliation, and exclusion log |
| `dq_source_quality` | Secondary datasets and factors | Record dataset or factor provider, version, geography, technology, reference year, access date, boundary, and substitution rationale; replace a proxy when representative reviewed data become available. | Source register and replacement log |

No transferable quantitative default is prescribed for yield, moisture, water use, or energy use because these values materially depend on vegetable identity, cut form, pretreatment, and drying technology. They shall be collected under the protocols above. If a foreground record is temporarily unavailable, any interim modelled value shall be explicitly labelled `reasoned_estimate`, limited to the named product and route, accompanied by its reasoning and uncertainty, and replaced when a representative production campaign or reviewed source becomes available.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | The output shall use Dried Vegetables `dc43358a-8159-496d-b2e9-a30c8fb3e38a`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, normalized to exactly 1 kg net product excluding packaging. |  |
| `val_required_qualifiers` | Product and dataset metadata | Reject conformance when vegetable identity, product form, incoming and final moisture values and bases, pretreatment, drying route/technology, packaging state, or net-mass basis is missing. | `codex-cxc-5-1971` |
| `val_route_exclusivity` | Process map | Confirm that the unit-process inventory represents one declared route. A higher-level mix is acceptable only when route datasets remain separate and documented shares sum to 1 for a common specification and period. | `codex-cxc-5-1971`; `eu-pef-2021-2279` |
| `val_mass_balance` | Foreground inventory | Confirm that input vegetable mass and dry solids reconcile with net product, removed water, rejects, samples, and other losses; report the unexplained residual and its investigation. |  |
| `val_inventory_completeness` | Foreground and linked inventory | Confirm coverage of applicable water, pretreatment materials, electricity, heat and fuels by carrier, packaging, rejects, wastewater, direct emissions, upstream links, and waste destinations without double counting. | `eu-pef-2021-2279` |
| `val_codex_controls` | Processing and storage records | Confirm that the dataset declares applicable sorting, washing/preparation, drying-medium contact, finished-product moisture control, packaging protection, and storage humidity controls; absence from the physical process must be explicit rather than silently assumed. | `codex-cxc-5-1971` |
| `val_data_quality` | Dataset evidence | Confirm temporal, geographic, technological, and measurement representativeness, record calibration and sampling evidence, disclose proxies and exclusions, and identify the trigger for replacing any `reasoned_estimate`. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-specific factory-gate foreground dataset for the manufacture of an identified dried potato or other dried vegetable |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon-footprint or LCA models requiring a qualified dried-vegetable manufacturing dataset; route-specific benchmarking when functional unit, vegetable identity, product form, moisture, pretreatment, technology, geography, period, and allocation are equivalent |
| excluded_use | Unqualified substitution across vegetables, product forms, moisture specifications, pretreatments, or incompatible drying technologies; direct comparison of route mixes with different shares or periods; claims extending beyond the declared boundary without downstream stages |
| required_metadata | Reference UUIDs and unit; vegetable identity; product form; feed and final moisture values and bases; pretreatment; drying route, technology, and medium contact; facility geography; reference period; bulk/packaging format; net-mass basis; yield; allocation; upstream datasets; exclusions and proxies |
| required_quality_disclosure | Meter and lot coverage; calibration and moisture method; mass/dry-solids reconciliation; route share if a higher-level mix; data quality and proxy assessment; allocation basis and sensitivity; completeness and uncertainty; any `reasoned_estimate` and replacement trigger |
| update_trigger | Replace the dataset when the vegetable or form changes materially, final moisture specification changes, pretreatment or drying technology changes, route share changes, packaging changes materially, facility or energy supply changes, the data age no longer represents production, or representative campaign/reviewed evidence becomes available for a provisional estimate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Standard (`standard`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21393, *Dried potatoes and other dried vegetables*, explanatory notes dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Official classification coordinate and category exclusions |
| `codex-cxc-5-1971` | Standard (`standard`) | Codex Alimentarius, CXC 5-1971, *Code of Hygienic Practice for Dehydrated Fruits and Vegetables Including Edible Fungi*, https://workspace.fao.org/sites/codex/Standards/CXC%205-1971/CXC_005e.pdf (retrieved 2026-08-11) | Direct product scope; raw-material handling; sorting and washing; drying-medium control; packaging; finished-product moisture and storage controls |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, CELEX `32021H2279`, ELI http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional/reference unit; system-boundary completeness; route datasets and production mixes; multi-functionality hierarchy; data collection, quality, and reporting |
