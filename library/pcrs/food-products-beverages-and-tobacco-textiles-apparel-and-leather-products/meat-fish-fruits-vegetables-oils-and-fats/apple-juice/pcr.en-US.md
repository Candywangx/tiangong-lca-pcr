---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.apple-juice
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Apple juice

## 1. Scope and Applicability

This PCR applies to unfermented apple juice supplied as a finished beverage or bulk beverage ingredient at the manufacturing gate. It covers directly expressed/not-from-concentrate (NFC) apple juice and apple juice reconstituted from apple juice concentrate, whether clear or cloudy, when the product remains apple juice under the applicable market specification.

The foreground route may begin with apples received at a juice-processing facility, with purchased single-strength apple juice, or with purchased apple juice concentrate. The declared starting condition and all omitted upstream stages must be explicit. The PCR covers receiving and storage where present, sorting and washing, milling and pressing where present, optional clarification or other juice finishing, optional concentration, optional reconstitution and blending, preservation, filling or bulk dispatch, cleaning, utilities, residues, wastewater, and direct emissions through the stated manufacturing gate.

Apple nectar, fermented cider or perry, vinegar, apple purée, apple juice concentrate sold as the reference product, mixed-fruit juice, drinks in which apple juice is only an ingredient, and orchard cultivation as a foreground operation are excluded. Upstream apple production, ingredient production, packaging production, purchased energy, transport, and waste treatment remain required background inputs when they are outside the declared foreground boundary.

The Tiangong `Apple juice` product flow selected below is the category reference for CPC 21435. It is not permission to treat every apple-juice form as identical. A foreground data package must describe the actual route, composition, soluble-solids basis, clarification state, preservation method, package or bulk state, and market gate. If a more specific public Tiangong flow represents the actual product without narrowing or changing this PCR's semantic scope, use that flow and retain the category reference as the PCR linkage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.apple-juice |
| classification_refs | CPC 3.0: 21435 (Apple juice; exact) |
| covered_products | Single-fruit apple juice; directly expressed/NFC apple juice; apple juice from concentrate; clear or cloudy apple juice; packaged or bulk apple juice at a declared manufacturing gate |
| excluded_products | Apple nectar; fermented cider or perry; vinegar; apple purée; apple juice concentrate when sold as the reference product; mixed-fruit juice; apple-flavoured drinks and beverages in which apple juice is only an ingredient |
| representative_product | Apple juice represented by the Tiangong category flow, with the actual juice route and market form declared |
| production_route | Declared combination of apple receiving and preparation, extraction, optional finishing or concentration, optional reconstitution, preservation, and filling or bulk dispatch |
| market_state | As-is liquid apple juice at the manufacturing gate; package/bulk state, clear/cloudy state, preservation state, storage regime, and soluble-solids specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of apple juice meeting the declared composition, authenticity, preservation, and market specification at the manufacturing gate |
| How much | 1 kg of as-is apple juice, excluding the mass of separate packaging |
| How well | The directly expressed/NFC or from-concentrate route, apple-only identity, actual soluble solids, clear/cloudy or pulp state, preservation method, package/bulk state, storage regime, and applicable food-safety release status are declared |
| How long or cycle | One production batch at the manufacturing gate; declared shelf life and temperature regime are product qualifiers, not an extension of the foreground time boundary |
| reference_flow_link | The reference amount and UUID-backed product flow below realize the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg as-is apple juice at the declared manufacturing gate |
| Reference product flow | Apple juice `3db6b381-99a9-4976-8955-aa9b65903844` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | directly expressed/NFC or from-concentrate route; country or market specification; measured soluble solids and measurement condition; clear/cloudy and pulp state; preservation method; package type and size or bulk state; ambient/chilled/frozen storage regime; manufacturing geography and gate; shelf life; apple-only or any declared permitted ingredients |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference apple juice output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net as-is juice mass at the declared gate. Exclude separate primary, secondary, and tertiary packaging mass and record each packaging material as an inventory input. |
| `volume_to_mass` | Juice, water, and liquid ingredients recorded by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass only with a batch- or product-specific measured density and its measurement temperature; retain volume, density, temperature, and conversion evidence. |
| `soluble_solids_basis` | Juice and concentrate composition | Product-specific soluble-solids record | degree Brix and measurement temperature | Record measured soluble solids and the analytical method. Do not convert a Brix value directly to dry mass without a declared validated relationship. |
| `reconstituted_juice_brix` | Apple juice reconstituted from concentrate | Product-specific soluble-solids record | degree Brix at the specified condition | Apply the governing market rule. Codex CXS 247-2005 lists 11.5 degree Brix for reconstituted Malus domestica apple juice and recognizes country-specific natural variation subject to authenticity provisions, with a stated floor of 10 degree Brix for the described exception; do not apply this rule to directly expressed juice as a fixed formulation target. |
| `mass_balance_period` | Each included foreground process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Close input, product, co-product, residue, wastewater, evaporation, and documented stock-change masses over the same batch or reporting period before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare one: apples at the receiving gate; purchased single-strength apple juice at the receiving gate; or purchased apple juice concentrate plus reconstitution inputs at the receiving gate |
| starting_condition_role | Foreground entry point that determines which preparation, extraction, concentration, and reconstitution operations are included |
| product_classification_scope | Apple juice within this PCR; apple juice concentrate is an intermediate or same-category recursive input unless concentrate itself is the separately governed reference product |
| recursive_input_rule | Record purchased single-strength apple juice or apple juice concentrate as a product input with amount, composition, supplier gate, and upstream dataset reference; do not recreate the same apple-juice category recursively inside the receiving process |
| upstream_dataset_requirement | Link upstream datasets for apples, purchased juice or concentrate, ingredients, processing aids, packaging, energy, transport, and treatment services that cross the foreground boundary |
| disclosure | Disclose the starting condition, included unit operations, outsourced operations, technology and preservation route, geography, reporting period, package/bulk state, and any excluded operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | Foreground apple-juice route | Include all operations under the reporting entity's control from the declared starting condition through finished apple juice at the manufacturing gate, including cleaning, utilities, residues, wastewater, and direct emissions. | `fao-fruit-juice-processing-2001`; `eu-jrc-fdm-bref-2019` |
| `boundary_apple_condition` | Routes receiving apples | Include receiving inspection, rejection, sorting, washing, and the management of rejected fruit before milling or pressing; do not assume later thermal treatment removes patulin already present. | `codex-cxc-50-2003` |
| `boundary_route_variants` | Route-specific operations | Include clarification, filtration, depectinization, deaeration, concentration, aroma recovery, reconstitution, blending, homogenization, preservation, cold storage, or aseptic handling whenever performed for the declared product. | `codex-cxs-247-2005-2025`; `fao-fruit-juice-processing-2001` |
| `boundary_food_safety_control` | Preservation and release | Record the actual validated control step, monitoring records, failures, rework, and final release status. A regulatory 5-log requirement, when applicable, is a product-safety constraint and not a substitute for measured energy or yield inventory. | `us-fda-juice-haccp-21-cfr-120-24` |
| `boundary_background_linkage` | Upstream and downstream services | Keep off-site agriculture, material production, purchased utilities, transport, and treatment outside the foreground only when their quantities and linked upstream or treatment datasets are retained. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `apple_receiving_preparation` | Apple receiving, sorting, and washing | conditional | Include when whole apples cross the declared foreground gate | Prepare accepted apples and separate rejects before extraction | kg accepted apples delivered to milling |
| `juice_extraction` | Milling and juice extraction | conditional | Include when juice is extracted from apples in the foreground | Convert prepared apples to raw juice and pomace | kg raw juice leaving extraction |
| `juice_finishing` | Juice finishing and clarification | conditional | Include each finishing operation actually used, including enzymatic treatment, clarification, filtration, deaeration, or homogenization | Produce the declared clear, cloudy, or pulp-containing intermediate juice | kg finished intermediate juice |
| `juice_concentration` | Juice concentration and aroma handling | conditional | Include when apple juice is concentrated in the foreground, including an integrated concentrate/reconstitution route | Produce and account for concentrate, recovered fractions, condensate, and losses | kg apple juice concentrate and measured soluble solids |
| `juice_reconstitution` | Reconstitution and formulation | conditional | Include when concentrate, water, permitted restored components, or other permitted ingredients are combined in the foreground | Produce single-strength apple juice to the declared specification | kg reconstituted apple juice |
| `preservation_packaging_dispatch` | Preservation, filling, and dispatch | required | Always include the final foreground conditioning and dispatch step; packaging rows apply only when packaging occurs before the gate | Produce released apple juice in the declared packaged or bulk market state | 1 kg reference apple juice output |

### Process: Apple receiving, sorting, and washing (`apple_receiving_preparation`)

#### Inputs

##### Product flows

###### Apples received for juice production (`received_apples`)

Record the mass of apples crossing the receiving gate and retain supplier, cultivar or blend where known, harvest/storage condition, lot identity, and acceptance results.

- Selected flow: Apple `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- Applicability: Whole-apple route only; mutually exclusive with purchased juice or purchased concentrate as the declared starting condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed mass received, before rejected fruit is removed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling and ultimately normalized to 1 kg reference apple juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-50-2003`

###### Potable apple-washing water (`receiving_potable_water`)

Record water contacting apples before milling separately from detergent and sanitizer dosing.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Applicability: Potable-water washing route only; exclude recirculated water until its make-up and purge are separated
- Flow property / unit: Mass / kg
- Amount rule: Metered washing-water make-up attributable to receiving and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-50-2003`

###### Sodium hypochlorite sanitizer (`receiving_sodium_hypochlorite`)

Record sodium hypochlorite separately from water and from non-chlorine sanitizers.

- Selected flow: Sodium hypochlorite `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- Applicability: Chlorine-sanitized washing route only; mutually exclusive with peracetic-acid sanitizer for the same dose
- Flow property / unit: Mass / kg
- Amount rule: Weighed or dosing-system-reconciled sodium hypochlorite input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-50-2003`

###### Peracetic acid sanitizer (`receiving_peracetic_acid`)

Record peracetic acid separately when used instead of a chlorine sanitizer.

- Selected flow: Peracetic acid
- Applicability: Peracetic-acid sanitizing route only; mutually exclusive with sodium hypochlorite for the same dose
- Flow property / unit: Mass / kg
- Amount rule: Weighed or dosing-system-reconciled peracetic acid input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-50-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared apples (`prepared_apples`)

Measure accepted apples leaving sorting and washing for milling; keep internal transfers identifiable so they are not double counted as external products.

- Selected flow: Prepared apples
- Applicability: Whole-apple route only; this output is the same internal exchange used by `prepared_apples_input`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or mass-balance-calculated accepted apples transferred to extraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-50-2003`

##### Waste flows

###### Rejected apples (`rejected_apples`)

Record mouldy, rotten, damaged, or otherwise rejected apples separately by destination and classification as waste or recovered material.

- Selected flow: Rejected apples
- Applicability: Apples rejected before milling only; do not include leaves, twigs, stones, or packaging debris
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-50-2003`

###### Fruit-line sorting debris (`receiving_sorting_debris`)

Record leaves, twigs, stones, and non-fruit debris removed from received apples separately from rejected fruit.

- Selected flow: Fruit-line sorting debris
- Applicability: Non-fruit debris removed during receiving and sorting only
- Flow property / unit: Mass / kg
- Amount rule: Weighed debris mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-50-2003`

###### Receiving and wash wastewater (`receiving_wastewater`)

Record wastewater volume or mass, discharge destination, and any separately managed solids; do not infer the amount from water input without accounting for carryover and losses.

- Selected flow: Apple-washing wastewater
- Applicability: Receiving-and-washing discharge only; keep separately treated sanitation concentrate in its own waste row
- Flow property / unit: Volume / m3 or Mass / kg, preserving the measured property and conversion basis
- Amount rule: Metered discharge or documented water balance for receiving and washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted apples delivered to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

### Process: Milling and juice extraction (`juice_extraction`)

#### Inputs

##### Product flows

###### Prepared apples supplied to extraction (`prepared_apples_input`)

Link this internal input to `prepared_apples`, or record purchased prepared fruit explicitly if it crosses the declared gate.

- Selected flow: Prepared apples
- Applicability: Whole-apple extraction route only; this input is the same internal exchange as `prepared_apples`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same transfer quantity as the preceding process output after documented storage change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_records`
- Sources: `codex-cxc-50-2003`; `fao-fruit-juice-processing-2001`

###### Low-voltage grid electricity for extraction (`extraction_grid_electricity_low_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, low voltage
- Applicability: Low-voltage grid supply only; mutually exclusive with medium-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered milling and pressing electricity assigned to the low-voltage grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Medium-voltage grid electricity for extraction (`extraction_grid_electricity_medium_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, medium voltage
- Applicability: Medium-voltage grid supply only; mutually exclusive with low-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered milling and pressing electricity assigned to the medium-voltage grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction steam (`extraction_steam`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Applicability: Purchased-steam route only; mutually exclusive with fuel input for the same delivered heat
- Flow property / unit: Mass / kg
- Amount rule: Metered steam supplied to extraction equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction natural gas (`extraction_natural_gas`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Applicability: On-site natural-gas heat route only; mutually exclusive with diesel and LPG for each combustion record
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered natural-gas energy used for extraction heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction diesel oil (`extraction_diesel_oil`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Applicability: On-site diesel heat route only; mutually exclusive with natural gas and LPG for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled diesel oil used for extraction heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction liquefied petroleum gas (`extraction_lpg`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Applicability: On-site LPG heat route only; mutually exclusive with natural gas and diesel for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled LPG used for extraction heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction compressed air (`extraction_compressed_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Pneumatic milling or pressing equipment only
- Flow property / unit: Volume / m3
- Amount rule: Metered compressed air attributable to extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction process water (`extraction_process_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Applicability: Extraction process-water input only; do not combine with cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Metered process water attributable to milling and pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction filter cloth (`extraction_filter_cloth`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- Applicability: Press-cloth route only; exclude reusable cloth until replacement loss is quantified
- Flow property / unit: Mass / kg
- Amount rule: Issued filter-cloth mass adjusted for stock change and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw extracted apple juice (`raw_apple_juice`)

Measure raw juice after pressing and before finishing losses. Record soluble solids, temperature, and whether free-run and press fractions are combined.

- Selected flow: Raw extracted apple juice
- Applicability: Foreground extraction route only; mutually exclusive with purchased single-strength juice as the finishing input
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or tank-level-reconciled raw juice output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `codex-cxc-50-2003`; `fao-fruit-juice-processing-2001`

##### Waste flows

###### Apple pomace (`apple_pomace`)

Record pomace, seeds, screenings, and press losses separately where their destinations differ. Classify a sold or used material as a co-product only with destination and revenue or physical-use evidence; otherwise retain the appropriate waste flow.

- Selected flow: Apple pomace
- Applicability: Wet pomace separated after pressing only; seeds and screen rejects use their own rows
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg wet mass, with moisture content recorded when relevant
- Amount rule: Weighed output or extraction mass balance by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Apple seeds from extraction (`extraction_apple_seeds`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Apple seeds
- Applicability: Seed fraction separately recovered from pomace only
- Flow property / unit: Mass / kg
- Amount rule: Weighed seed fraction by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction screen rejects (`extraction_screen_rejects`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Apple extraction screen rejects
- Applicability: Solids removed by extraction screens only
- Flow property / unit: Mass / kg
- Amount rule: Weighed screen-reject mass by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Extraction apple-juice loss (`extraction_juice_loss`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Lost raw apple juice
- Applicability: Raw juice leaving the product path as a separately measured loss only
- Flow property / unit: Mass / kg
- Amount rule: Tank, floor-loss, or mass-balance record of raw juice loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw juice leaving extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-fruit-juice-processing-2001`

##### Elementary flows

### Process: Juice finishing and clarification (`juice_finishing`)

#### Inputs

##### Product flows

###### Juice supplied to finishing (`finishing_juice_input`)

Record raw or purchased single-strength apple juice entering the actual finishing train, including its soluble solids and clear/cloudy state.

- Selected flow: Single-strength apple juice
- Applicability: Finishing route only; identify the exchange as internal raw juice or purchased single-strength juice without combining the two origins
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or tank-level-reconciled input to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `codex-cxs-247-2005-2025`

###### Pectinase for finishing (`finishing_pectinase`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Pectinase
- Applicability: Enzymatic depectinisation route only; absent from untreated cloudy-juice route
- Flow property / unit: Mass / kg
- Amount rule: Weighed pectinase dose by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Amylase for finishing (`finishing_amylase`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: amylase `ec31f8f1-1870-4f41-846a-3632072a5d9f`
- Applicability: Enzymatic starch-treatment route only; absent when no amylase is dosed
- Flow property / unit: Mass / kg
- Amount rule: Weighed amylase dose by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Gelatin fining aid (`finishing_gelatin`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: gelatin `aa9b81c7-64ab-40a2-9419-50fedc25a2c7`
- Applicability: Gelatin-fining route only; absent from non-gelatin clarification
- Flow property / unit: Mass / kg
- Amount rule: Weighed gelatin dose by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Bentonite fining aid (`finishing_bentonite`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Bentonite `e01d9941-db32-46cb-b577-ebc584597a2d`
- Applicability: Bentonite-fining route only; absent from non-bentonite clarification
- Flow property / unit: Mass / kg
- Amount rule: Weighed bentonite dose by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Activated carbon for finishing (`finishing_activated_carbon`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Activated carbon `6b978f9e-864d-421d-8e63-8e44f17c5874`
- Applicability: Activated-carbon treatment route only
- Flow property / unit: Mass / kg
- Amount rule: Weighed activated-carbon dose by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Diatomaceous earth filter aid (`finishing_diatomaceous_earth`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Diatomaceous earth filter aid `af13e1e4-290c-412d-b3fe-dcba0b4c5b81`
- Applicability: Diatomaceous-earth filtration route only; mutually exclusive with perlite for each filter charge
- Flow property / unit: Mass / kg
- Amount rule: Weighed filter-aid charge and make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Perlite filter aid (`finishing_perlite`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Perlite filter aid `45203225-538a-422b-bf66-16f2e7931f18`
- Applicability: Perlite filtration route only; mutually exclusive with diatomaceous earth for each filter charge
- Flow property / unit: Mass / kg
- Amount rule: Weighed filter-aid charge and make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Finishing filter cloth (`finishing_filter_cloth`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- Applicability: Cloth-filtration route only; replacement loss excludes reusable cloth still in service
- Flow property / unit: Mass / kg
- Amount rule: Filter-cloth replacement mass adjusted for stock and reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Finishing process water (`finishing_process_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Applicability: Water crossing the finishing boundary only; keep clean-in-place discharge in `finishing_wastewater`
- Flow property / unit: Mass / kg
- Amount rule: Metered finishing-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Low-voltage grid electricity for finishing (`finishing_grid_electricity_low_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, low voltage
- Applicability: Low-voltage grid supply only; mutually exclusive with medium-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered finishing electricity assigned to low-voltage supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Medium-voltage grid electricity for finishing (`finishing_grid_electricity_medium_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, medium voltage
- Applicability: Medium-voltage grid supply only; mutually exclusive with low-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered finishing electricity assigned to medium-voltage supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finishing steam (`finishing_steam`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Applicability: Steam-heated finishing route only; mutually exclusive with hot-water heat for the same duty
- Flow property / unit: Mass / kg
- Amount rule: Metered steam used by finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finishing hot water (`finishing_hot_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Industrial hot water
- Applicability: Hot-water-heated finishing route only; mutually exclusive with steam for the same duty
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered hot-water heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finishing compressed air (`finishing_compressed_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Pneumatic finishing equipment only
- Flow property / unit: Volume / m3
- Amount rule: Metered compressed air attributable to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished intermediate apple juice (`finished_intermediate_juice`)

Measure juice leaving the finishing train and record its clear/cloudy state, soluble solids, pulp or turbidity descriptor, and temperature.

- Selected flow: Finished intermediate apple juice
- Applicability: The declared finishing route only; clear, cloudy, and pulp-containing campaigns remain separate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or tank-level-reconciled output from finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `codex-cxs-247-2005-2025`

##### Waste flows

###### Retained apple solids (`finishing_retained_apple_solids`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Retained apple solids
- Applicability: Solids removed from juice during finishing only
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet solids with moisture content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent bentonite (`finishing_spent_bentonite`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Spent bentonite
- Applicability: Bentonite-fining route only
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent bentonite and retained solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent activated carbon (`finishing_spent_activated_carbon`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Applicability: Activated-carbon treatment route only
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent activated carbon
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent diatomaceous earth (`finishing_spent_diatomaceous_earth`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Spent diatomaceous earth
- Applicability: Diatomaceous-earth filtration route only
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent diatomaceous earth and retained solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent perlite (`finishing_spent_perlite`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Spent perlite
- Applicability: Perlite filtration route only
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent perlite and retained solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent filter cloth (`finishing_spent_filter_cloth`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Spent filter cloth
- Applicability: Discarded cloth-filtration media only
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded filter cloth
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finishing wastewater (`finishing_wastewater`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Apple-juice finishing wastewater
- Applicability: Liquid discharge from finishing and its cleaning cycle only
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge reconciled with water and product-loss records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished intermediate juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

### Process: Juice concentration and aroma handling (`juice_concentration`)

#### Inputs

##### Product flows

###### Single-strength juice supplied to concentration (`concentration_juice_input`)

Record the mass and soluble solids of apple juice entering concentration and link an internal transfer or purchased input to its upstream dataset.

- Selected flow: Single-strength apple juice
- Applicability: Concentration route only; the same mass must not also be recorded as reconstitution feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or tank-level-reconciled feed with measured soluble solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg concentrate output and ultimately per 1 kg reference apple juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `codex-cxs-247-2005-2025`

###### Low-voltage grid electricity for concentration (`concentration_grid_electricity_low_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, low voltage
- Applicability: Low-voltage grid supply only; mutually exclusive with medium-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered concentration electricity assigned to low-voltage supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Medium-voltage grid electricity for concentration (`concentration_grid_electricity_medium_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, medium voltage
- Applicability: Medium-voltage grid supply only; mutually exclusive with low-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered concentration electricity assigned to medium-voltage supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration steam (`concentration_steam`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Applicability: Purchased-steam evaporator route only; mutually exclusive with hot water or fuel for the same heat duty
- Flow property / unit: Mass / kg
- Amount rule: Metered steam supplied to the evaporator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Concentration hot water (`concentration_hot_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Industrial hot water
- Applicability: Hot-water-heated concentration route only; mutually exclusive with steam for the same heat duty
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered hot-water heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration natural gas (`concentration_natural_gas`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Applicability: On-site natural-gas heat route only; mutually exclusive with diesel, fuel oil, and LPG for each combustion record
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered natural-gas energy attributable to concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration diesel oil (`concentration_diesel_oil`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Applicability: On-site diesel heat route only; mutually exclusive with natural gas, fuel oil, and LPG for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled diesel oil attributable to concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration fuel oil (`concentration_fuel_oil`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Heavy fuel oil
- Applicability: On-site heavy-fuel-oil heat route only; mutually exclusive with natural gas, diesel, and LPG for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled heavy fuel oil attributable to concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration liquefied petroleum gas (`concentration_lpg`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Applicability: On-site LPG heat route only; mutually exclusive with natural gas, diesel, and fuel oil for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled LPG attributable to concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration compressed air (`concentration_compressed_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Pneumatic or vacuum-control equipment only
- Flow property / unit: Volume / m3
- Amount rule: Metered compressed air attributable to concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration cooling water (`concentration_cooling_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Industrial cooling water
- Applicability: Once-through or closed-loop cooling-water make-up only; keep the two systems separate in source records
- Flow property / unit: Mass / kg
- Amount rule: Metered cooling-water make-up attributable to concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration cleaning water (`concentration_cleaning_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Applicability: Evaporator and aroma-system cleaning-water input only
- Flow property / unit: Mass / kg
- Amount rule: Metered cleaning-water input attributable to concentration campaigns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration sodium hydroxide cleaner (`concentration_sodium_hydroxide`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Applicability: Alkaline clean-in-place step only; mutually exclusive with nitric acid for each chemical-dose record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or dosing-system-reconciled sodium hydroxide input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Concentration nitric acid cleaner (`concentration_nitric_acid`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Nitric acid, 50% aqueous solution
- Applicability: Acid clean-in-place step only; mutually exclusive with sodium hydroxide for each chemical-dose record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or dosing-system-reconciled nitric acid solution input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Apple juice concentrate intermediate (`apple_juice_concentrate`)

Measure concentrate mass and soluble solids. This is an internal or purchased-input category intermediate under this PCR, not the reference output when concentrate is sold as concentrate.

- Selected flow: Apple juice concentrate
- Applicability: Concentration route only; this intermediate is not the reference output under this PCR
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed concentrate output with measured soluble solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg concentrate output and ultimately per 1 kg reference apple juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `codex-cxs-247-2005-2025`

###### Recovered apple aroma (`recovered_apple_aroma`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Recovered apple aroma
- Applicability: Aroma-recovery route with documented reuse or sale only
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balance-calculated recovered aroma
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Reusable evaporator condensate (`reusable_evaporator_condensate`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Reusable apple-juice evaporator condensate
- Applicability: Condensate with a documented internal use or external product destination only
- Flow property / unit: Mass / kg
- Amount rule: Metered condensate transferred to the documented use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `fao-fruit-juice-processing-2001`

##### Waste flows

###### Concentration wastewater (`concentration_wastewater`)

Record discarded condensate, cleaning wastewater, off-spec concentrate, and other losses by actual treatment destination.

- Selected flow: Apple-juice concentration wastewater
- Applicability: Aqueous discharge from concentration and aroma handling only
- Flow property / unit: Mass / kg
- Amount rule: Metered concentration discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Off-spec apple juice concentrate (`concentration_offspec_concentrate`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Off-spec apple juice concentrate
- Applicability: Concentrate rejected from the product path only
- Flow property / unit: Mass / kg
- Amount rule: Weighed off-spec concentrate by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste alkaline cleaning liquor (`concentration_waste_alkaline_liquor`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Applicability: Spent sodium-hydroxide cleaning solution only
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-reconciled spent alkaline liquor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste acid cleaning liquor (`concentration_waste_acid_liquor`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Waste Acid `5fc1e55d-c7b8-4e60-b514-f0bfdd99eea9`
- Applicability: Spent nitric-acid cleaning solution only
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-reconciled spent acid liquor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

### Process: Reconstitution and formulation (`juice_reconstitution`)

#### Inputs

##### Product flows

###### Apple juice concentrate supplied to reconstitution (`concentrate_input`)

Record mass, measured soluble solids, source, and upstream dataset for each concentrate lot. Do not model concentrate as single-strength apple juice without a solids balance.

- Selected flow: Apple juice concentrate
- Applicability: From-concentrate route only; mutually exclusive with single-strength juice as the declared starting input to reconstitution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed concentrate input by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `codex-cxs-247-2005-2025`

###### Reconstitution potable water (`reconstitution_potable_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Applicability: From-concentrate route only; water used for equipment cleaning is excluded
- Flow property / unit: Mass / kg
- Amount rule: Metered formulation water by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `codex-cxs-247-2005-2025`

###### Restored apple aroma (`reconstitution_apple_aroma`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Restored apple aroma
- Applicability: From-concentrate route with documented aroma restoration only
- Flow property / unit: Mass / kg
- Amount rule: Weighed or dosing-system-reconciled aroma addition by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `codex-cxs-247-2005-2025`

###### Restored apple pulp (`reconstitution_apple_pulp`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Apple pulp
- Applicability: Pulp-restoration route only; absent from clear juice without restored pulp
- Flow property / unit: Mass / kg
- Amount rule: Weighed apple-pulp addition by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `codex-cxs-247-2005-2025`

###### Ascorbic acid ingredient (`reconstitution_ascorbic_acid`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Ascorbic acid
- Applicability: Formulation route in which ascorbic acid is permitted and dosed only
- Flow property / unit: Mass / kg
- Amount rule: Weighed ascorbic-acid addition by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `codex-cxs-247-2005-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reconstituted apple juice (`reconstituted_apple_juice`)

Calculate and verify the output from collected masses and soluble-solids measurements; retain evidence of applicable authenticity and market-specification conformity.

- Selected flow: Reconstituted apple juice
- Applicability: From-concentrate route only; the batch must pass the soluble-solids balance before transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch output mass verified by ingredient mass and soluble-solids balances
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `codex-cxs-247-2005-2025`

##### Waste flows

###### Spilled reconstituted apple juice (`reconstitution_spilled_juice`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Spilled reconstituted apple juice
- Applicability: Measured spills leaving the product path only
- Flow property / unit: Mass / kg
- Amount rule: Recorded spill mass reconciled to the batch balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Off-spec reconstituted apple juice (`reconstitution_offspec_juice`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Off-spec reconstituted apple juice
- Applicability: Rejected reconstitution batches leaving the product path only
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected batch mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Reconstitution cleaning wastewater (`reconstitution_wastewater`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Apple-juice reconstitution wastewater
- Applicability: Reconstitution-vessel and line cleaning discharge only
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge reconciled to water and product-loss records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reconstituted apple juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

### Process: Preservation, filling, and dispatch (`preservation_packaging_dispatch`)

#### Inputs

##### Product flows

###### Apple juice supplied to finalisation (`finalisation_juice_input`)

Record the actual directly expressed, finished, or reconstituted juice entering preservation and dispatch, including its route and quality qualifiers.

- Selected flow: Apple juice supplied to finalisation
- Applicability: One declared origin per transfer record: directly expressed, finished intermediate, reconstituted, or purchased apple juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or tank-level-reconciled juice input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Low-voltage grid electricity for finalisation (`finalisation_grid_electricity_low_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, low voltage
- Applicability: Low-voltage grid supply only; mutually exclusive with medium-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered finalisation electricity assigned to low-voltage grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Medium-voltage grid electricity for finalisation (`finalisation_grid_electricity_medium_voltage`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Grid electricity, medium voltage
- Applicability: Medium-voltage grid supply only; mutually exclusive with low-voltage supply for the same meter interval
- Flow property / unit: Energy / kWh
- Amount rule: Metered finalisation electricity assigned to medium-voltage grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### On-site photovoltaic electricity for finalisation (`finalisation_photovoltaic_electricity`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: On-site photovoltaic electricity
- Applicability: Behind-the-meter photovoltaic supply only; grid imports and exports remain separate
- Flow property / unit: Energy / kWh
- Amount rule: Metered photovoltaic electricity consumed by finalisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### On-site cogeneration electricity for finalisation (`finalisation_cogeneration_electricity`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: On-site cogeneration electricity
- Applicability: Behind-the-meter cogeneration supply only; grid electricity remains separate
- Flow property / unit: Energy / kWh
- Amount rule: Metered cogeneration electricity consumed by finalisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finalisation steam (`finalisation_steam`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Applicability: Purchased-steam preservation route only; mutually exclusive with hot water or fuel for the same heat duty
- Flow property / unit: Mass / kg
- Amount rule: Metered steam used for preservation and filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `us-fda-juice-haccp-21-cfr-120-24`

###### Finalisation hot water (`finalisation_hot_water`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Industrial hot water
- Applicability: Hot-water-heated preservation route only; mutually exclusive with steam for the same heat duty
- Flow property / unit: Energy / MJ
- Amount rule: Metered hot-water heat used for preservation and filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `us-fda-juice-haccp-21-cfr-120-24`

###### Finalisation natural gas (`finalisation_natural_gas`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Applicability: On-site natural-gas heat route only; mutually exclusive with diesel, fuel oil, and LPG for each combustion record
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered natural-gas energy attributable to finalisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finalisation diesel oil (`finalisation_diesel_oil`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Applicability: On-site diesel heat route only; mutually exclusive with natural gas, fuel oil, and LPG for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled diesel oil attributable to finalisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finalisation fuel oil (`finalisation_fuel_oil`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Heavy fuel oil
- Applicability: On-site heavy-fuel-oil heat route only; mutually exclusive with natural gas, diesel, and LPG for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled heavy fuel oil attributable to finalisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finalisation liquefied petroleum gas (`finalisation_lpg`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Applicability: On-site LPG heat route only; mutually exclusive with natural gas, diesel, and fuel oil for each combustion record
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled LPG attributable to finalisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finalisation compressed air (`finalisation_compressed_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Pneumatic preservation, filling, or dispatch equipment only
- Flow property / unit: Volume / m3
- Amount rule: Metered compressed air attributable to finalisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Gaseous nitrogen for filling (`finalisation_gaseous_nitrogen`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Gaseous nitrogen
- Applicability: Nitrogen-blanketed filling route only; mutually exclusive with liquid nitrogen for each nitrogen supply record
- Flow property / unit: Mass / kg
- Amount rule: Metered gaseous nitrogen used in filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Liquid nitrogen for filling (`finalisation_liquid_nitrogen`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Liquid Nitrogen `dd17be27-229a-4236-ae93-29835cf7e1a8`
- Applicability: Liquid-nitrogen dosing route only; mutually exclusive with gaseous nitrogen for each nitrogen supply record
- Flow property / unit: Mass / kg
- Amount rule: Weighed liquid nitrogen used in filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### R134a refrigerant make-up (`finalisation_refrigerant_r134a`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Refrigerant R134a
- Applicability: R134a refrigeration equipment only; mutually exclusive with R404A, R717, and R744 for each equipment circuit
- Flow property / unit: Mass / kg
- Amount rule: Service-record make-up mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### R404A refrigerant make-up (`finalisation_refrigerant_r404a`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Applicability: R404A refrigeration equipment only; mutually exclusive with R134a, R717, and R744 for each equipment circuit
- Flow property / unit: Mass / kg
- Amount rule: Service-record make-up mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### R717 ammonia refrigerant make-up (`finalisation_refrigerant_r717`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Refrigeration-grade ammonia R717
- Applicability: R717 refrigeration equipment only; mutually exclusive with R134a, R404A, and R744 for each equipment circuit
- Flow property / unit: Mass / kg
- Amount rule: Service-record make-up mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### R744 carbon dioxide refrigerant make-up (`finalisation_refrigerant_r744`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Refrigeration-grade carbon dioxide R744
- Applicability: R744 refrigeration equipment only; mutually exclusive with R134a, R404A, and R717 for each equipment circuit
- Flow property / unit: Mass / kg
- Amount rule: Service-record make-up mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Glass bottle (`packaging_glass_bottle`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Beverage glass bottle
- Applicability: Glass-bottle format only; mutually exclusive with PET bottle, aseptic carton, bag-in-box, steel drum, and IBC for the same filled juice
- Flow property / unit: Mass / kg
- Amount rule: Issued glass-bottle mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### PET bottle (`packaging_pet_bottle`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: PET beverage bottle
- Applicability: PET-bottle format only; mutually exclusive with glass bottle, aseptic carton, bag-in-box, steel drum, and IBC for the same filled juice
- Flow property / unit: Mass / kg
- Amount rule: Issued PET-bottle mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Aseptic beverage carton (`packaging_aseptic_carton`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Aseptic beverage carton
- Applicability: Aseptic-carton format only; mutually exclusive with bottle, bag-in-box, drum, and IBC formats for the same filled juice
- Flow property / unit: Mass / kg
- Amount rule: Issued aseptic-carton mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Bag-in-box liner (`packaging_bag_in_box_liner`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Polyethylene bag-in-box liner
- Applicability: Bag-in-box format only; the corrugated outer box remains a separate row
- Flow property / unit: Mass / kg
- Amount rule: Issued liner mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Steel drum (`packaging_steel_drum`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Food-grade steel drum
- Applicability: Steel-drum bulk format only; reusable cycles are disclosed separately
- Flow property / unit: Mass / kg
- Amount rule: Drum mass allocated by documented reuse cycles and adjusted for rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Reusable IBC (`packaging_reusable_ibc`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Reusable food-grade intermediate bulk container
- Applicability: IBC bulk format only; reusable cycles are disclosed separately
- Flow property / unit: Mass / kg
- Amount rule: IBC mass allocated by documented reuse cycles and adjusted for rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Plastic closure cap (`packaging_plastic_cap`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Plastic packaging closure cap `bab04179-3799-4eff-b12b-edaec382520c`
- Applicability: Plastic-closure format only; mutually exclusive with aluminium screw cap for the same container
- Flow property / unit: Mass / kg
- Amount rule: Issued cap mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Aluminium screw cap (`packaging_aluminium_cap`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Aluminium screw cap closure `c37f87ea-0b43-43d6-a300-b142ea358cb7`
- Applicability: Aluminium-closure format only; mutually exclusive with plastic cap for the same container
- Flow property / unit: Mass / kg
- Amount rule: Issued cap mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Paper packaging label (`packaging_paper_label`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Packaging label, paper `d5890643-6859-42b5-9e05-556b072c6a8c`
- Applicability: Paper-label format only; direct printing and plastic labels are excluded
- Flow property / unit: Mass / kg
- Amount rule: Issued label mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Corrugated cardboard case (`packaging_corrugated_case`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Applicability: Corrugated secondary case or bag-in-box outer only
- Flow property / unit: Mass / kg
- Amount rule: Issued corrugated-cardboard mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Polyethylene shrink film (`packaging_shrink_film`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Applicability: Shrink-wrapped secondary packaging only; stretch wrap uses a separate row
- Flow property / unit: Mass / kg
- Amount rule: Issued shrink-film mass adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Wooden pallet (`packaging_wooden_pallet`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Applicability: Palletised dispatch only; pallet mass is allocated by documented reuse cycles
- Flow property / unit: Mass / kg
- Amount rule: Pallet mass allocated by documented reuse cycles and released product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `fao-fruit-juice-processing-2001`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released apple juice reference product (`apple_juice_output`)

Record only product that passes the declared quality and release criteria. The category flow is representative; replace it with a more specific public flow when one matches the actual product state and retain all required qualifiers.

- Selected flow: Apple juice `3db6b381-99a9-4976-8955-aa9b65903844`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net as-is released apple juice at the manufacturing gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-247-2005-2025`

##### Waste flows

###### Off-spec apple juice (`finalisation_offspec_juice`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Off-spec apple juice
- Applicability: Juice rejected from release and leaving the product path only; internal rework is excluded
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected juice by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Rejected glass bottles (`finalisation_waste_glass_bottles`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Rejected beverage glass bottles
- Applicability: Glass-bottle line rejects only
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected glass bottles by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Rejected PET bottles (`finalisation_waste_pet_bottles`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Waste PET bottles `8874aca6-2ff9-4aef-be62-5cd02f20dc97`
- Applicability: PET-bottle line rejects only
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected PET bottles by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Rejected aseptic cartons (`finalisation_waste_aseptic_cartons`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Rejected aseptic beverage cartons
- Applicability: Aseptic-carton line rejects only
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected aseptic cartons by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Rejected plastic closures and film (`finalisation_waste_plastic_packaging`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Rejected polyethylene packaging
- Applicability: Polyethylene closure, liner, shrink-film, or trim rejects only; PET bottles remain separate
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected polyethylene packaging by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Rejected aluminium caps (`finalisation_waste_aluminium_caps`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Rejected aluminium screw caps
- Applicability: Aluminium closure rejects only
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected aluminium caps by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Rejected paper and cardboard packaging (`finalisation_waste_paper_cardboard`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- Applicability: Paper-label, corrugated-case, and cartonboard trim or reject mass only
- Flow property / unit: Mass / kg
- Amount rule: Weighed paper and cardboard packaging waste by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Rejected wooden pallets (`finalisation_waste_wooden_pallets`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Rejected wooden pallets
- Applicability: Pallets removed from service during included dispatch operations only
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected pallet mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `codex-cxc-50-2003`

###### Finalisation cleaning wastewater (`finalisation_wastewater`)

Record clean-in-place and filling-line wastewater, product losses to drain, and discharge or treatment destination.

- Selected flow: Apple-juice finalisation wastewater
- Applicability: Clean-in-place and filling-line discharge only
- Flow property / unit: Volume / m3 or Mass / kg, preserving measured property and conversion basis
- Amount rule: Metered discharge or documented water balance for finalisation operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### HFC-134a emission to air (`emission_hfc_134a_to_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: HFC-134a to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Applicability: R134a equipment leakage, or the documented HFC-134a fraction of R404A leakage, only
- Flow property / unit: Mass / kg
- Amount rule: Charge loss multiplied by the documented refrigerant mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### HFC-125 emission to air (`emission_hfc_125_to_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: HFC-125 to air, unspecified `2dc28f2f-a034-4644-aea9-3884c074f816`
- Applicability: Documented HFC-125 fraction of R404A equipment leakage only
- Flow property / unit: Mass / kg
- Amount rule: R404A charge loss multiplied by the documented HFC-125 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### HFC-143a emission to air (`emission_hfc_143a_to_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: 1,1,1-trifluoroethane to air, unspecified `3e21a7fb-a101-4fc4-90c9-d2b6a9bcaff1`
- Applicability: Documented HFC-143a fraction of R404A equipment leakage only
- Flow property / unit: Mass / kg
- Amount rule: R404A charge loss multiplied by the documented HFC-143a mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ammonia emission to air (`emission_ammonia_to_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Ammonia to air, unspecified `b4b34336-1832-41e7-8ca5-f08e2517b036`
- Applicability: R717 equipment leakage only
- Flow property / unit: Mass / kg
- Amount rule: R717 charge-balance or service-loss calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Carbon dioxide emission to air (`emission_r744_co2_to_air`)

Record this atomic exchange separately under its stated applicability.

- Selected flow: Carbon dioxide from R744 to air
- Applicability: R744 equipment leakage only; combustion carbon dioxide is excluded
- Flow property / unit: Mass / kg
- Amount rule: R744 charge-balance or service-loss calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference apple juice output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalisation_records`
- Sources: `eu-jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_outputs` | Pomace, recovered aroma, usable condensate, and other outputs | Record gross process inputs and every output before allocation. A stream is a co-product only when its product status, destination, quantity, and beneficial use are evidenced; otherwise model it as waste with its treatment route. | `iso-14044-2006`; `fao-fruit-juice-processing-2001` |
| `allocation_avoid_where_possible` | Multi-output foreground processes | First subdivide metered operations or apply a documented physical relationship that reflects the causal use of resources. Do not assign zero burden to a co-product merely because it is low value. | `iso-14044-2006` |
| `allocation_fallback` | Multi-output process where subdivision or a causal physical relationship is not feasible | Apply an economic allocation using contemporaneous quantities and prices at a common gate, run a sensitivity case when the allocation is material, and disclose method, period, currency, price source, and allocation factors. | `iso-14044-2006` |
| `allocation_internal_transfers` | Juice, concentrate, recovered aroma, and rework transferred within the foreground | Treat internal transfers consistently and count their burdens once. Rework returned to production is not a co-product and must retain the additional processing and loss burdens. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `apple_receiving_preparation` | apples; water; cleaners; prepared apples; rejects; wastewater | weighbridge, receiving, dosing, meter, quality, and discharge records | lot_id; supplier; received_mass_kg; accepted_mass_kg; rejected_mass_kg; water_m3; density; cleaner_mass_kg; wastewater_m3; destination; stock_change | Calibrated scales and meters reconciled with lot acceptance and dispatch records | kg; m3 | Each lot or batch, aggregated monthly | Representative production period covering seasonal apple supply | Each included receiving and preparation line | Sum accepted production records; allocate shared cleaning by measured run time or documented driver; reconcile stock change | Calibration, lot acceptance, invoice, meter, cleaning, and waste-transfer records |
| `cp_extraction_records` | `juice_extraction` | prepared apples; energy; aids; raw juice; pomace | batch, scale, tank, meter, dosing, and residue records | batch_id; apple_mass_kg; juice_mass_kg; juice_brix; pomace_mass_kg; pomace_moisture; electricity_kWh; steam_kg; aid_mass_kg; destination | Calibrated scales, tank measurements, meters, and production logs | kg; kWh | Each batch or production run, aggregated monthly | Representative production period covering operating modes | Each included mill and press line | Reconcile input, output, residue, moisture, evaporation, and stock change before normalization | Scale and meter calibration, batch logs, laboratory results, and residue dispatch records |
| `cp_finishing_records` | `juice_finishing` | juice input; processing aids; utilities; finished juice; residues; wastewater | tank, dosing, meter, laboratory, filter-change, and discharge records | batch_id; input_mass_kg; output_mass_kg; input_brix; output_brix; aid_mass_kg; energy; water_m3; residue_mass_kg; wastewater_m3; technology | Calibrated tank/scale measurements, dosing records, meters, and quality tests | kg; m3; kWh | Each batch or filter campaign, aggregated monthly | Representative production period covering each declared finishing route | Each included finishing line | Keep clear/cloudy technologies separate; reconcile product retained in filters and cleaning losses | Calibration, batch recipe, filter logs, laboratory results, and waste records |
| `cp_concentration_records` | `juice_concentration` | juice feed; utilities; concentrate; recovered products; condensate and losses | tank, solids, utility meter, aroma recovery, and discharge records | campaign_id; feed_mass_kg; feed_brix; concentrate_mass_kg; concentrate_brix; steam; electricity; cooling; recovered_mass; condensate_m3; losses; stock_change | Calibrated mass/tank measurements, soluble-solids analysis, utility meters, and recovery logs | kg; m3; kWh; degree Brix | Each concentration campaign, aggregated monthly | Representative period covering evaporator loads and cleaning cycles | Each included concentration and aroma-recovery train | Apply total-mass and soluble-solids balances; keep useful recovered streams separate by destination | Calibration, laboratory, utility, recovery, cleaning, and discharge records |
| `cp_reconstitution_records` | `juice_reconstitution` | concentrate; water; permitted ingredients; reconstituted juice; losses | lot, recipe, scale, dosing, water meter, tank, and laboratory records | batch_id; concentrate_lot; concentrate_mass_kg; concentrate_brix; water_mass_kg; ingredient_mass_kg; output_mass_kg; output_brix; losses; market_specification | Calibrated scales/meters plus approved batch recipe and laboratory verification | kg; degree Brix | Each batch | Representative period covering formulations and suppliers | Each included reconstitution line and formulation | Close total-mass and soluble-solids balances for each batch before aggregation | Calibration, supplier certificate, approved recipe, laboratory result, and deviation record |
| `cp_finalisation_records` | `preservation_packaging_dispatch` | juice input; energy; packaging; released juice; rejects; wastewater; refrigerant | tank/scale, thermal or non-thermal control, utility meter, packaging issue, release, waste, cleaning, and service records | batch_id; juice_input_kg; process_parameters; energy; packaging_item_mass; items_used; product_output_kg; held_or_rejected_kg; wastewater_m3; refrigerant_charge_and_makeup_kg; release_status | Calibrated meters and scales reconciled to line, release, warehouse, waste, and maintenance records | kg; m3; kWh; route-specific control unit | Each batch and packaging run, aggregated monthly | Representative period covering product formats and operating modes | Each included preservation, filling, storage, and bulk-dispatch system | Include released output only; separate formats and routes before weighted aggregation | Calibration, validated process record, packaging specification, quality release, warehouse, waste, and service evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground inventory rows | normalized amount = period-attributable amount / kg released reference apple juice in the same period | attributable flow amount; released apple juice mass; stock change; rework status | amount per 1 kg reference apple juice | `iso-14044-2006` |
| `calc_process_mass_balance` | Every included process | mass-balance residual = total mass inputs - product outputs - co-product outputs - waste outputs - measured wastewater constituents or bulk stream mass - evaporation - stock increase; investigate and disclose material residuals | process input/output masses; moisture or solids data; evaporation; stock change | reconciled process mass balance and residual | `iso-14044-2006` |
| `calc_reconstitution_solids` | Reconstituted juice batches | dry-solids proxy balance = sum(input mass x measured soluble-solids fraction) compared with output mass x measured output soluble-solids fraction; use this as a QA balance, not as a universal conversion of Brix to dry matter | concentrate, water, ingredient, and output masses; measured soluble solids | batch solids-balance check and reconstitution ratio | `codex-cxs-247-2005-2025` |
| `calc_packaging_mass` | Packaged apple juice | packaging mass per kg juice = sum(items used x verified mass per item) / released juice mass, adjusted for rejects and documented reuse cycles | packaging counts; item masses; rejects; reuse cycles; released juice mass | packaging inventory per 1 kg reference product | `fao-fruit-juice-processing-2001` |
| `calc_allocation_factor` | Evidenced co-products | Calculate factors from the selected physical relationship or from contemporaneous output quantity x price at a common gate; factors for one process must sum to one | output quantities; physical relation or prices; period and currency | disclosed allocation factors and sensitivity result where material | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and same-category inputs | Preserve product name, apple-only status, route, source, clear/cloudy state, soluble solids, preservation, package/bulk state, storage regime, and manufacturing gate. | Product specification, label, recipe, supplier certificate, and laboratory record |
| `dq_route_separation` | Aggregated foreground data | Keep directly expressed/NFC, from-concentrate, clear/cloudy, concentration, preservation, and packaging routes separate until route-specific inventories are complete; weight only by released product mass and disclose shares. | Production schedule, batch route, line, recipe, and warehouse records |
| `dq_temporal_representativeness` | All foreground records | Use a representative continuous period that captures seasonal apple supply, cleaning cycles, product formats, start-up/shutdown losses, and normal operating variability; justify exclusions. | Dated record census, coverage statement, and exception log |
| `dq_meter_and_conversion` | Measured and converted quantities | Retain calibration status, original unit, density and temperature for liquid conversion, solids or moisture basis, and the calculation used. | Calibration certificate, raw meter/scale record, laboratory result, and calculation sheet |
| `dq_mass_balance` | Each included process and the whole foreground | Reconcile product, co-product, residue, wastewater, evaporation, rework, and stock change on a consistent period and investigate material residuals. | Signed mass-balance worksheet and corrective-action record |
| `dq_coverage` | Inventory completeness | Include all material inputs, utilities, processing aids, packaging, outputs, wastes, wastewater, and direct emissions; a zero entry requires evidence that the flow is absent, not merely unmeasured. | Purchase, meter, recipe, maintenance, waste, discharge, and release record cross-check |
| `dq_source_linkage` | Purchased apples, juice, concentrate, ingredients, packaging, energy, and treatment | Link a temporally and geographically appropriate upstream or treatment dataset and disclose any proxy or data gap. | Supplier identity, dataset UUID/reference, geography, year, and proxy rationale |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference product | Fail conformance if the reference flow is not apple juice, if net as-is mass is not 1 kg after normalization, or if packaging mass is included in product mass. | `codex-cxs-247-2005-2025` |
| `validate_required_qualifiers` | Reference flow metadata | Fail conformance when any required qualifier is absent, including route, soluble solids, clear/cloudy state, preservation, package/bulk state, storage regime, geography, gate, or shelf life. | `codex-cxs-247-2005-2025`; `codex-cxc-50-2003` |
| `validate_route_processes` | Process map and inventory | Fail conformance when a process used by the declared route is omitted, when a process is included without corresponding inputs and outputs, or when a purchased same-category input lacks an upstream dataset. | `fao-fruit-juice-processing-2001`; `eu-jrc-fdm-bref-2019` |
| `validate_reconstitution` | From-concentrate route | Fail conformance when concentrate mass, concentrate soluble solids, reconstitution water, output mass, output soluble solids, governing market specification, or batch solids-balance evidence is missing. | `codex-cxs-247-2005-2025` |
| `validate_apple_condition_control` | Whole-apple route | Fail conformance when receiving acceptance, sorting/rejection, washing, and apple-condition records are missing or when rejected fruit is hidden in a yield adjustment. | `codex-cxc-50-2003` |
| `validate_preservation_release` | Released apple juice | Fail conformance when the declared preservation or food-safety control lacks its applicable validation, monitoring, deviation, and product-release evidence; do not infer compliance from a process label. | `us-fda-juice-haccp-21-cfr-120-24`; `codex-cxc-50-2003` |
| `validate_mass_balance` | Each included process and complete foreground | Fail conformance when mass-balance periods differ, internal transfers are double counted, stock or rework is omitted, or a material unexplained residual remains undisclosed. | `iso-14044-2006` |
| `validate_coproduct_status` | Pomace and recovered streams | Fail conformance when a claimed co-product lacks quantity, destination, beneficial-use evidence, and an explicit allocation treatment, or when a waste stream is silently assigned zero burden. | `iso-14044-2006` |
| `validate_uuid_selection` | Tiangong-linked flow rows | Fail conformance when the Apple juice, Mass, or Units of mass UUID differs from the declared reference object without a documented, semantically more specific replacement and public-record readback. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground apple-juice production dataset normalized to 1 kg net as-is apple juice at a declared manufacturing gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness, upstream linkage, allocation, and uncertainty disclosures |
| allowed_use | Product carbon footprint or LCA models matching the declared route, geography, period, product specification, package/bulk state, and gate; aggregation with route shares retained |
| excluded_use | Apple nectar, cider, vinegar, concentrate as the sold reference product, mixed-fruit beverages, generic global apple juice without route disclosure, or consumer use and end-of-life beyond the declared gate |
| required_metadata | PCR id and version context; reference flow UUID; route and starting condition; product and market qualifiers; geography; technology; reporting period; site coverage; package/bulk state; process list; upstream dataset references; allocation method; reviewer status |
| required_quality_disclosure | Record coverage; meter and conversion quality; mass-balance residuals; route shares; seasonal coverage; supplier and upstream data quality; proxies; co-product treatment; rejected/reworked quantities; wastewater and direct-emission coverage; uncertainty and known limitations |
| update_trigger | Change in starting condition, supplier or concentrate source, formulation or Brix specification, clear/cloudy route, extraction/finishing/concentration/preservation technology, package format, energy or water system, waste destination, allocation basis, regulation, or a material shift in yield or utilities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-247-2005-2025` | Standard (`standard`) | Codex Alimentarius CXS 247-2005, General Standard for Fruit Juices and Nectars, amended 2025, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B247-2005%252FCXS_247e.pdf (retrieved 2026-08-11) | Product definition, directly expressed and from-concentrate scope, permitted processing framework, authenticity/quality disclosure, and apple reconstitution soluble-solids rule |
| `codex-cxc-50-2003` | Official guidance (`official_guidance`) | Codex Alimentarius CXC 50-2003, Code of Practice for the Prevention and Reduction of Patulin Contamination in Apple Juice and Apple Juice Ingredients in Other Beverages, https://www.fao.org/input/download/standards/405/CXP_050e.pdf (retrieved 2026-08-11) | Apple acceptance, sorting, washing, equipment cleaning, pressing, chilling, packaging, sampling, quality release, and the boundary warning that thermal treatment alone does not remove existing patulin |
| `fao-fruit-juice-processing-2001` | Handbook (`handbook`) | FAO Agricultural Services Bulletin 146, Principles and Practices of Small- and Medium-Scale Fruit Juice Processing, apple juice chapter, https://www.fao.org/4/y2515e/y2515e15.htm (retrieved 2026-08-11) | Apple-juice process decomposition, milling and pressing, clarification, pasteurization, concentration, filling, packaging, and pomace handling |
| `eu-jrc-fdm-bref-2019` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-11) | Food-processing foreground coverage, utility and cleaning records, resource efficiency, wastewater, waste, and direct-emission monitoring context |
| `us-fda-juice-haccp-21-cfr-120-24` | Standard (`standard`) | United States eCFR, 21 CFR 120.24, Process controls, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-120/subpart-B/section-120.24 (retrieved 2026-08-11) | Applicable juice pathogen-reduction control, single-facility processing/packaging boundary, and validation/monitoring evidence |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | LCI boundary consistency, inventory completeness, allocation documentation, data quality, interpretation, and reporting |
