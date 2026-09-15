---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-and-preserved-fruits-and-nuts-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other prepared and preserved fruits and nuts, n.e.c.

## 1. Scope and Applicability

This PCR covers a concrete product only after the following inclusion gate is passed. The product shall be an edible fruit, nut, or other edible plant part prepared or preserved by sterilization, osmotic dehydration, canning or other airtight packaging, vinegar or acetic acid, or another preservation method admitted by CPC 3.0 subclass 21499. Sweetening may occur, but preservation by sugar is outside this subclass. The data producer shall identify the plant species or mixture, product form, preservation route, packing medium, reference-mass convention, packaging system, storage regime, and market state.

The residual `n.e.c.` label is not permission to use this PCR for any prepared fruit or nut. Before use, the data producer shall document that the product is not: pineapple otherwise prepared or preserved (21491); peach otherwise prepared or preserved (21492); uncooked or cooked frozen fruit or nuts (21493); jam, fruit jelly, marmalade, fruit or nut puree, or fruit or nut paste (21494); roasted, salted, or otherwise prepared nuts, groundnuts, or other seeds (21495); provisionally preserved fruit or nuts not for immediate consumption, including the specified citrus or melon peel route (21496); dried fruit (2141); fruit juice (2143); a sugar-preserved product (23670); or an unprocessed/shelled nut classified elsewhere. A product failing any exclusion test requires another PCR or manual classification review.

Codex and UNECE texts cited below are conditional route or product evidence only. CXC 2-1969 applies only to fruit or vegetable products in hermetically sealed containers that are heat processed. CXS 242-2003 applies only to the named canned stone-fruit product and route; within this PCR it shall not be applied to peaches because CPC 21492 is excluded. UNECE dry and dried produce standards apply only when the exact named product and standard scope match; they do not override CPC 21499's exclusion of simple drying and do not create category-wide moisture, grade, or defect limits.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-and-preserved-fruits-and-nuts-n-e-c |
| classification_refs | CPC 3.0: 21499, Other prepared and preserved fruits and nuts, n.e.c. |
| covered_products | Edible fruits, nuts, or other edible plant parts passing the section 1 inclusion gate and preserved by sterilization, osmotic dehydration, airtight canning/packing, vinegar or acetic acid, or another CPC-21499-admitted method; examples in CPC include qualifying apples, apricots, bananas, cherries, citrus fruit, fruit mixtures, palm hearts, pears, raisins, strawberries, specified stones/kernels/pips, and pollen. |
| excluded_products | CPC 21491-21496 products; sugar-preserved products; simply dried fruit; fruit juices; unprocessed or merely shelled nuts; and any product whose identity, route, or market state does not establish CPC 21499 eligibility. |
| representative_product | One declared saleable prepared or preserved fruit/plant-part product that passes the gate; no single formulation or route represents the entire residual subclass. |
| production_route | Route-specific sequence of receipt and sorting, preparation, declared preservation transformation, packaging/stabilization, and applicable storage/dispatch; inapplicable route modules are omitted and disclosed. |
| market_state | Saleable product at the manufacturing gate, with declared net/drained mass convention, packaging, storage condition, and shelf life or durability statement. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an edible, saleable prepared or preserved fruit, nut, or other edible plant-part product that passes the CPC 21499 inclusion/exclusion gate. |
| How much | 1 kg of declared reference product at the manufacturing gate. |
| How well | Meets the declared formulation, edible-content or drained-mass convention, preservation route, applicable product specification, packaging integrity, and saleable quality criteria. |
| How long or cycle | One production batch through the manufacturing gate; declared shelf life and storage regime are recorded, and downstream losses are modelled only when the study scope extends beyond the manufacturing gate. |
| reference_flow_link | The reference flow is the mass of conforming saleable product needed to provide the defined 1 kg function. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other prepared and preserved fruits and nuts, n.e.c. `661926c0-3215-431a-934f-ea41ced73059` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | plant species and ingredient composition; inclusion/exclusion-gate decision; preservation route; product form and particle size where relevant; packing medium; net, edible, or drained-mass convention; packaging system; storage regime; shelf life/durability; manufacturing geography, reference period, and technology; applicable route/product standard or explicit none |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported amounts to 1 kg of conforming saleable product at the manufacturing gate using Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. |
| `mass_convention` | products in packing medium or containing inedible parts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether the reference is net product, drained edible product, or another legally/technically defined mass; record both net and drained mass when relevant and do not mix conventions. |
| `route_parameter_basis` | preservation operation | route-specific measured property | declared SI unit | Record time, temperature, pressure/vacuum, concentration, pH/acidity, moisture or water activity only when used or required by the declared route; preserve raw units and document conversions. No category-wide limit is inferred from a route-specific standard. |
| `energy_conversion` | electricity and thermal energy | Energy | kWh and MJ | Keep electricity and thermal energy separate. Convert metered units with documented physical conversion factors and retain original meter records. |
| `packaging_mass` | primary, secondary, and tertiary packaging crossing the gate | Mass | kg | Record each packaging material by measured purchased or issued mass per batch and normalize separately to the reference flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients and packaging are received at the foreground manufacturing site with supplier identity, origin, mass, condition, and upstream dataset reference or documented data gap. |
| starting_condition_role | Factory-gate foreground production starting point; agricultural production, ingredient manufacture, packaging manufacture, and inbound transport are represented by linked upstream datasets unless the declared study expands them into foreground processes. |
| product_classification_scope | Only products that pass the CPC 3.0 subclass 21499 inclusion/exclusion gate in section 1. |
| recursive_input_rule | A purchased input that itself falls within this PCR category is recorded once as an input product flow with a separate upstream dataset; do not recursively recreate its manufacturing inventory inside the consuming batch. |
| upstream_dataset_requirement | Link an upstream dataset for every material or energy product input where available; disclose geography, technology, temporal mismatch, proxy use, and missing upstream data. |
| disclosure | Declare product identity, preservation route, packing medium, reference-mass convention, packaging, site, period, storage regime, shelf life, exclusions, cut-offs, proxies, allocation choices, and all provisional estimates. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_gate` | product eligibility | Apply the complete section 1 inclusion/exclusion gate before inventory production. Ambiguous or overlapping products, including any possible 21491-21496 product, require manual classification review and shall not be auto-assigned to this PCR. | `unsd-cpc-3-0-explanatory-notes-2025` |
| `boundary_foreground` | factory-gate foreground system | Include receipt/sorting, preparation, every preservation operation actually used, packaging/stabilization, on-site storage, cleaning/CIP attributable to production, utilities, rejects, co-products, wastes, wastewater, and direct elementary flows through the manufacturing gate. | `eu-pef-recommendation-2021-2279` |
| `boundary_route_modules` | route-specific operations | Include only operations demonstrated by batch records. Hermetic heat processing, osmotic dehydration, vinegar/acetic-acid preservation, or another admitted route shall each retain its own measured parameters; a product-specific Codex or UNECE standard is used only after exact scope matching. | `unsd-cpc-3-0-explanatory-notes-2025`; `codex-cxc-2-1969`; `codex-cxs-242-2003`; `unece-ddp-standards-2025` |
| `boundary_cutoff` | exclusions and data gaps | Avoid cut-off. If the dataset explicitly claims PEF-method alignment, any exclusion shall satisfy the PEF cumulative 3.0% material/energy and environmental-significance rule, be justified, and be disclosed; otherwise apply the declared programme rule and report every omission as a data gap. | `eu-pef-recommendation-2021-2279` |
| `boundary_downstream` | distribution, use, and end of life | The default dataset ends at the manufacturing gate. Distribution, retail, consumer storage/use, product loss, and packaging end of life are excluded from the foreground dataset unless the declared goal expands the boundary; expansion shall preserve shelf-life and packaging effects. | `eu-pef-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_sorting` | Ingredient receipt, inspection, sorting, and initial handling | required | All datasets | Establish accepted ingredient mass and incoming losses | kg accepted ingredient |
| `preparation` | Washing, trimming, peeling, pitting, cutting, and route preparation | required | Include each operation actually performed; report unused operations as not applicable | Prepare edible material for preservation | kg prepared material |
| `preservation_and_formulation` | Declared preservation transformation and formulation | required | Exactly one or more CPC-21499-admitted preservation routes shall be declared; route parameters are product-specific | Produce stable prepared/preserved product | kg preserved bulk product |
| `packaging_and_stabilization` | Filling, closing, package treatment, cooling, coding, and case packing | required | Include the actual package and any thermal or cooling operation performed before release | Produce conforming saleable packed product | kg saleable reference product |
| `storage_and_dispatch` | On-site conditioned storage and dispatch | conditional | Include when product remains on site or requires controlled temperature/humidity before crossing the manufacturing gate | Maintain declared market state to factory gate | kg dispatched product and storage duration |

### Process: Ingredient receipt, inspection, sorting, and initial handling (`receipt_and_sorting`)

#### Inputs

##### Product flows

###### Received fruits, nuts, or other edible plant parts (`received_plant_material`)

Record each species and supplier lot separately. Purchased prepared ingredients in the same category follow the recursive input rule.

- Selected flow: Foreground-selected ingredient flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured gross received mass by species, grade, origin, and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources:
- Range: Provisional received-material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 10
  - Unit: kg/kg saleable reference product
  - Basis: broad residual-category screening range per 1 kg saleable product; replace with route- and site-specific yield evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Accepted plant material (`accepted_plant_material`)

Accepted material is calculated from received mass less measured receiving rejects and stock change.

- Selected flow: Foreground-selected accepted-material intermediate flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted mass by lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `mass-balance-identity`

##### Waste flows

###### Receiving rejects and foreign material (`receiving_rejects`)

Record rejected biological material, soil/foreign matter, and packaging contamination separately with destination.

- Selected flow: Foreground-selected waste flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg received plant material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent`
- Sources:
- Range: Provisional receiving-reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.9
  - Unit: kg/kg received plant material
  - Basis: deliberately broad reject fraction; replace with weighed batch evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Washing, trimming, peeling, pitting, cutting, and route preparation (`preparation`)

#### Inputs

##### Product flows

###### Preparation and cleaning water (`preparation_water`)

Record metered or allocated water used for washing, blanching preparation, equipment cleaning, and CIP attributable to the batch; keep water sources separate where material.

- Selected flow: Foreground-selected water product flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: metered or calculated attributable water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:
- Range: Provisional preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared material
  - Basis: broad first-pass water-use screen; replace with calibrated meter or attributable CIP records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route-specific preparation aids (`preparation_aids`)

Record only aids that cross the foreground boundary, such as anti-browning, firming, or peeling agents, with formulation and fate.

- Selected flow: Foreground-selected preparation-aid flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass or calculated dose from concentration and solution mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_aids`
- Sources:

#### Outputs

##### Product flows

###### Prepared edible material (`prepared_edible_material`)

Record the mass transferred to preservation, identified by species, form, and lot.

- Selected flow: Foreground-selected prepared-material intermediate flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources:

##### Waste flows

###### Peels, pits, trimmings, and preparation rejects (`preparation_residues`)

Record each residue separately as waste or co-product according to actual legal/market status, measured mass, destination, and revenue where allocation may be required.

- Selected flow: Foreground-selected residue flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted plant material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent`
- Sources:
- Range: Provisional preparation-residue fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg/kg accepted plant material
  - Basis: deliberately broad residual-category screen; replace with weighed product- and cut-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Declared preservation transformation and formulation (`preservation_and_formulation`)

#### Inputs

##### Product flows

###### Formulation ingredients and packing medium (`formulation_inputs`)

Record water, brine, vinegar/acetic acid, sweeteners not acting as the excluded sugar-preservation route, spices, and other formulation materials separately by recipe and batch.

- Selected flow: Foreground-selected ingredient flows; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled to recipe and returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_aids`
- Sources:

###### Electricity for preservation (`preservation_electricity`)

Record metered electricity for pumps, vacuum, mixing, osmotic-dehydration equipment, thermal systems, and attributable auxiliaries.

- Selected flow: Foreground-selected electricity product flow; no UUID asserted by this PCR
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:
- Range: Provisional preservation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg preserved bulk product
  - Basis: broad route-agnostic screen; replace with route-specific metering or validated equipment calculations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy for preservation (`preservation_thermal_energy`)

Record delivered fuel or thermal energy for heating, sterilization, evaporation, blanching attributable to preservation, and hot-water generation; retain fuel identity and direct combustion emissions.

- Selected flow: Foreground-selected fuel or heat product flow; no UUID asserted by this PCR
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered energy or calculated from measured fuel use and documented heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:
- Range: Provisional preservation-thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg preserved bulk product
  - Basis: broad multi-route screen; replace with fuel/heat meters and route-specific operating evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Preserved bulk product (`preserved_bulk_product`)

Record the mass after the declared preservation operation, with recipe, preservation parameters, and in-process quality disposition.

- Selected flow: Foreground-selected preserved-bulk intermediate flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass to filling/packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_operations`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Spent preservation liquor and process losses (`preservation_losses`)

Record spent brine, syrup/solution, vinegar medium, spills, off-spec material, and residues separately with treatment or recovery destination.

- Selected flow: Foreground-selected waste flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-derived loss by type and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_effluent`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Direct combustion and process emissions (`direct_process_emissions`)

Record measured or calculated direct air, water, and soil emissions from on-site fuel combustion and preservation chemistry; do not substitute purchased-energy upstream emissions for direct elementary flows.

- Selected flow: Foreground-selected elementary flows; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculation from collected fuel/process data and a cited factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources:

### Process: Filling, closing, package treatment, cooling, coding, and case packing (`packaging_and_stabilization`)

#### Inputs

##### Product flows

###### Primary, secondary, and tertiary packaging (`packaging_materials`)

Record each material and component separately, including container, closure, seal, label, tray, film, carton, pallet share, and losses.

- Selected flow: Foreground-selected packaging product flows; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass or component count multiplied by verified component mass, less returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 2
  - Unit: kg/kg saleable reference product
  - Basis: broad multi-format packaging screen; replace with bill-of-materials and component-mass evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and stabilization utilities (`packaging_utilities`)

Record electricity, heat, cooling water, compressed air, and refrigerant make-up attributable to filling, closing, post-fill treatment, cooling, and case packing.

- Selected flow: Foreground-selected utility flows; no UUID asserted by this PCR
- Flow property / unit: Energy or Mass / kWh, MJ, or kg as applicable
- Amount rule: metered use or documented equipment-time allocation by utility
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

#### Outputs

##### Product flows

###### Conforming saleable reference product (`saleable_reference_product`)

This is the only reference product output. Its identity and reference objects shall match section 3.

- Selected flow: Other prepared and preserved fruits and nuts, n.e.c. `661926c0-3215-431a-934f-ea41ced73059`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured conforming saleable output normalized to exactly 1 kg reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging rejects and off-spec packed product (`packaging_rejects`)

Separate food loss from recoverable packaging and mixed waste, with measured destination and any rework loop.

- Selected flow: Foreground-selected waste flows; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by material, reason, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent`
- Sources:

##### Elementary flows

### Process: On-site conditioned storage and dispatch (`storage_and_dispatch`)

#### Inputs

##### Product flows

###### Storage electricity and refrigerant make-up (`storage_resources`)

When storage occurs before the factory gate, record allocated electricity and measured refrigerant make-up using actual storage duration, throughput, and temperature regime.

- Selected flow: Foreground-selected electricity and refrigerant flows; no UUID asserted by this PCR
- Flow property / unit: Energy or Mass / kWh or kg as applicable
- Amount rule: metered warehouse use allocated by documented capacity-time or mass-time driver; refrigerant from service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dispatched product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch`
- Sources:

#### Outputs

##### Product flows

###### Product dispatched across manufacturing gate (`dispatched_product`)

Record dispatched mass, storage duration, storage condition, and losses. Do not add a second reference product output.

- Selected flow: Other prepared and preserved fruits and nuts, n.e.c. `661926c0-3215-431a-934f-ea41ced73059`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured dispatched mass linked to the already-produced reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch`
- Sources:

##### Waste flows

###### On-site storage losses (`storage_losses`)

Record damage, leakage, expiry, quality rejection, and destroyed product occurring before the manufacturing gate.

- Selected flow: Foreground-selected waste flow; no UUID asserted by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass by cause and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product entering storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | processes producing saleable co-products, recoverable kernels/pits, feeds, extracts, or energy | First avoid allocation by separately measuring and subdividing attributable operations; investigate system expansion only when the additional function and substituted system are demonstrable. | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_second` | multifunctional processes that cannot be subdivided or expanded | Use a quantified physical relationship relevant to the functions of the outputs, document why it represents causality, and retain masses and the selected physical property for every output. | `eu-pef-recommendation-2021-2279` |
| `allocation_other_last` | processes lacking a defensible physical relationship | Use another relationship such as economic value only after documenting why subdivision/system expansion and physical allocation were rejected; record prices, reference period, currency, allocation shares, and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `allocation_waste_status` | residues, spent liquor, wastewater, and rejected products | Classify each output as product, co-product, recyclable material, or waste from actual legal and market evidence before allocation. Do not assign co-product status solely to avoid burdens, and report treatment inputs/outputs separately. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `receipt_and_sorting`; `preparation`; `packaging_and_stabilization` | received, accepted, transferred, and saleable masses | weighbridge, scale, batch, and inventory records | lot id; species; supplier; gross/tare/net mass; opening/closing stock; transfer mass; saleable output | calibrated scale or reconciled inventory records | kg | each lot and batch | representative continuous 12-month period or all batches in a shorter justified campaign | every included site and production line | sum by batch and species; reconcile stock change; normalize to conforming saleable output | calibration certificates; batch reconciliation; inventory sign-off |
| `cp_ingredients_and_aids` | `preparation`; `preservation_and_formulation` | formulation ingredients, packing media, and process aids | recipe, issue, return, and purchase records | material id; supplier; concentration; issued mass; returned mass; lot; solution composition | calibrated dosing system or stock issue reconciliation | kg | each batch | same period as reference production | every recipe and line in scope | net issued mass divided by saleable output; keep materials separate | recipe approval; scale calibration; supplier specification |
| `cp_route_operations` | `preservation_and_formulation` | preserved bulk product and route parameters | batch control and laboratory records | route; time; temperature; pressure/vacuum; pH/acidity; soluble solids; moisture; water activity; in/out mass; disposition | calibrated process sensors and approved test method applicable to the route | declared SI unit | each batch or validated continuous log | same period as reference production | every declared preservation route and line | retain batch distribution; mass-weight averages only for homogeneous product-route strata | sensor calibration; method id; standard applicability record; release disposition |
| `cp_utilities` | `preparation`; `preservation_and_formulation`; `packaging_and_stabilization` | water, electricity, fuel, heat, cooling, and direct emissions | meters, invoices, fuel tickets, equipment logs, emission tests | meter start/end; fuel quantity; heating value; operating time; production mass; emission test or factor id | submeter preferred; otherwise documented causal allocation | kg, kWh, MJ, and emission-specific unit | continuous or each batch; monthly invoice reconciliation | at least representative 12 months unless a seasonal campaign is justified | each site; separate major line/utility system where feasible | subtract non-production use; allocate by causal driver; normalize to process output and reference flow | meter calibration; invoice reconciliation; operating logs; factor citation |
| `cp_packaging` | `packaging_and_stabilization` | packaging materials and rejects | bill of materials, component weights, issue/return, and reject records | component id; material; count; sample mass; issued/returned/rejected quantity; recycled content | verified component weighing and stock reconciliation | kg and count | each packaging specification and batch | same period as reference production | every packaging configuration | count times verified component mass, reconciled to issued mass; normalize to saleable output | approved BOM; scale calibration; supplier specification |
| `cp_waste_and_effluent` | all foreground processes | rejects, residues, wastewater, spent liquor, packaging waste, and storage loss | scales, tank/flow meters, manifests, laboratory results, and destination records | waste id; mass/volume; dry matter where relevant; composition; batch; destination; legal status; revenue; treatment | direct weighing/metering; mass balance only when direct measurement is unavailable and disclosed | kg, m3, and composition-specific unit | each batch or waste shipment; continuous effluent meter | same period as reference production | every site and outlet | keep streams and destinations separate; convert volume with measured density; normalize to reference flow | scale/flow calibration; waste manifest; laboratory method; receiving facility record |
| `cp_storage_dispatch` | `storage_and_dispatch` | storage resources, duration, dispatched mass, refrigerant, and loss | warehouse meters, stock movements, dispatch notes, and service logs | entry/exit time; mass; temperature; electricity; occupied capacity; refrigerant added; loss mass/cause | warehouse meter plus mass-time or capacity-time allocation; dispatch scale | kg, h or day, kWh, kg refrigerant | each stock movement; monthly utility reconciliation | same period as reference production | every on-site warehouse in scope | allocate by documented mass-time/capacity-time; normalize to dispatched mass | meter reconciliation; dispatch records; refrigerant service certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground inventory amount | normalized amount = attributable batch amount / conforming saleable batch output in kg | attributable flow amount; saleable output mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calc_mass_balance` | each process and batch | total measured inputs + opening stock = product outputs + co-products + wastes + measured direct mass emissions + closing stock + documented reconciliation difference | all batch masses and stock changes | mass-balance residual and residual percentage | `mass-balance-identity` |
| `calc_mass_convention` | products in packing medium | calculate and retain both net content and drained edible mass using the declared test method; choose exactly one as the reference convention and report the conversion ratio | gross/tare/net and drained-mass records | declared reference mass and net-to-drained ratio | `codex-cxs-242-2003` when and only when its scope matches |
| `calc_utility_allocation` | shared utility systems | subtract documented non-production use and allocate the remainder using a measured causal driver such as run time, metered throughput, heat duty, or mass processed | utility total; non-production use; driver values | attributable utility by process | `eu-pef-recommendation-2021-2279` |
| `calc_allocation_share` | unavoidable multifunctionality | allocation share = selected output driver / sum of the same driver for all co-products; economic allocation uses contemporaneous net values at the co-production point | output quantities; physical driver or price; reference period | allocation share summing to 1 | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_gate` | product and reference flow | Retain the signed classification gate, species/formulation, route, packing medium, mass convention, package, shelf life, market state, and the exact reference UUID objects. | product specification; batch master; classification decision; flow identity record |
| `dq_temporal` | foreground activity data | Use a representative continuous 12-month period where production is continuous; a shorter seasonal/campaign period shall cover the full campaign and explain representativeness. | dated records; production calendar; coverage calculation |
| `dq_completeness` | all foreground processes | Inventory all environmentally relevant material, energy, waste, and direct elementary flows; quantify coverage and list omissions, proxies, and cut-offs. | flow checklist; mass/energy reconciliation; PEF completeness assessment |
| `dq_measurement` | meters, scales, sensors, and laboratory tests | Use calibrated instruments and retain method, detection limit where relevant, conversion, sampling, and calibration evidence. | calibration certificate; laboratory method; raw reading and conversion record |
| `dq_route_representativeness` | heterogeneous products and technologies | Do not average across materially different species, preservation routes, packing media, package formats, or storage regimes until stratified results show the average is representative. | product-route strata; production shares; variability analysis |
| `dq_source_applicability` | Codex/UNECE or other product standards | Record exact title, edition, product species/form, route, and clause applicability. A standard that covers only a named canned or dried product shall not support the whole residual class. | applicability checklist; product specification; standard reference |
| `dq_provisional_estimates` | every `reasoned_estimate` range | Mark as provisional QA guidance only. Replace before methodology activation or use as an allowed/default value when route-specific metered data, supplier records, reviewed datasets, or source-backed evidence become available; retain the replacement decision. | open evidence gap; replacement source; reviewer decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require product flow UUID `661926c0-3215-431a-934f-ea41ced73059`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and a reference amount of 1. |  |
| `validation_scope_gate` | product eligibility | Fail when the signed gate is missing, any exclusion in section 1 applies, or evidence does not distinguish the product from CPC 21491-21496 and other expressly excluded classes. | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validation_required_qualifiers` | dataset metadata | Fail when any section 3 required qualifier is absent or when net/drained/edible mass conventions are inconsistent. | `eu-pef-recommendation-2021-2279` |
| `validation_route_trace` | process map and inventory | Require every performed preservation, packaging, stabilization, cleaning, and storage operation to appear once; reject unused route-specific operations presented as actual data. | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validation_mass_balance` | each process and batch aggregation | Calculate the section 8 mass-balance residual, disclose its value and treatment, and fail any unexplained residual outside the producer's documented measurement-uncertainty criterion. | `mass-balance-identity` |
| `validation_inventory_completeness` | foreground system | Require records or explicit justified data gaps for major ingredients, water, electricity, thermal energy, packaging, product output, residues, wastewater, direct emissions, and on-site storage when applicable. | `eu-pef-recommendation-2021-2279` |
| `validation_allocation` | multifunctional processes | Require the PEF decision hierarchy, shares summing to 1, source data for the selected driver, and justification/sensitivity for any non-physical relationship. | `eu-pef-recommendation-2021-2279` |
| `validation_standard_scope` | route/product standards | Reject a Codex or UNECE requirement used beyond the exact product, preservation route, and edition scope; CXS 242-2003 cannot be used here to admit or model peaches. | `codex-cxc-2-1969`; `codex-cxs-242-2003`; `unece-ddp-standards-2025` |
| `validation_estimate_status` | provisional ranges | Require every `reasoned_estimate` to remain labelled as a non-binding QA screen with its replacement trigger; it shall not be treated as an observed typical or allowed range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared CPC-21499-eligible product-route-package combination. |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and upstream links |
| allowed_use | Product, process, and lifecycle model construction for the declared product, route, site/geography, period, mass convention, package, and manufacturing-gate boundary; aggregation only across demonstrated representative strata. |
| excluded_use | Automatic use for the whole CPC 21499 residual class; any CPC 21491-21496 or other excluded product; comparison or comparative assertion without a common functional unit, aligned boundary, allocation, data quality, and review; use of provisional estimates as approved defaults. |
| required_metadata | PCR id/version used; product and reference UUIDs; classification gate; species/formulation; route; process map; mass convention; packaging; shelf life; storage; site/geography; reference period; technology; upstream datasets/proxies; cut-offs; allocation; standards and editions; data quality; uncertainty; provisional estimates. |
| required_quality_disclosure | Coverage of each process and flow family; meter/scale/lab quality; mass-balance residual; temporal, geographical, and technological representativeness; missing data and proxies; allocation sensitivity; route-standard applicability; estimate replacement status. |
| update_trigger | Change in product identity/classification, formulation, preservation route, package or mass convention; material technology/site/supplier mix change; new or revised applicable standard; new source-backed range; foreground data outside existing representativeness; UUID correction; or methodology review finding. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Exact subclass 21499 inclusion routes, examples, and exclusions; non-overlap gate for 21491-21496 and other classes. |
| `eu-pef-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on Environmental Footprint methods, Annex I, consolidated ELI https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-11) | Functional unit/reference flow, system boundary, relevant-flow completeness, cut-off disclosure, company-specific data quality, and multifunctionality hierarchy. |
| `codex-cxc-2-1969` | standard | Codex Alimentarius, CXC 2-1969, Code of Hygienic Practice for Canned Fruit and Vegetable Products, official text https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B2-1969%252FCXC_002e.pdf (retrieved 2026-08-11) | Conditional definition and process-route applicability for hermetically sealed, heat-processed products only. |
| `codex-cxs-242-2003` | standard | Codex Alimentarius, CXS 242-2003, Standard for Canned Stone Fruits, official text https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B242-2003%252FCXS_242e.pdf (retrieved 2026-08-11) | Conditional route/product specification and net/drained-mass records for covered canned stone fruits; not category-wide and not applicable here to peaches. |
| `unece-ddp-standards-2025` | standard | UNECE, Dry and Dried Produce Standards and Standard Layout, 2025 edition, https://unece.org/trade/wp7/DDP-Standards and https://unece.org/trade/documents/2025/12/standard-layout-unece-standards-dry-and-dried-produce-2025 (retrieved 2026-08-11) | Conditional named-product quality/measurement reference only; prevents extrapolating dry/dried-product limits to CPC 21499 and does not override the simple-drying exclusion. |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to batch inventory reconciliation; deterministic method rule, no external quantitative range. | Process mass balance, normalized amounts, and residual validation. |
