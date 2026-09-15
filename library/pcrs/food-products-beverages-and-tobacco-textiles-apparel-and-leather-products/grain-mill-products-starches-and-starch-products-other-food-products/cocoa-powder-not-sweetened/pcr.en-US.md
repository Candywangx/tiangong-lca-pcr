---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-not-sweetened
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cocoa powder, not sweetened

## 1. Scope and Applicability

This PCR covers unsweetened cocoa powder manufactured from cocoa cake, including full-fat, fat-reduced, and highly fat-reduced cocoa powder, supplied as a low-moisture ingredient at the powder manufacturer's gate. Integrated bean-to-powder, liquor-to-powder, and purchased-cake-to-powder routes are covered when the starting condition and all omitted upstream operations are declared.

The PCR excludes dry mixtures of cocoa powder with sugars or sweeteners, chocolate powder, drinking-chocolate mixtures, finished chocolate, cocoa mass or liquor sold as the reference product, cocoa butter sold as the reference product, and downstream distribution, retail, food preparation, consumption, and packaging end-of-life. Optional alkalization is included only when performed for the declared powder.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-not-sweetened |
| classification_refs | CPC 3.0: 23630, Cocoa powder, not sweetened (exact) |
| covered_products | Unsweetened cocoa powder obtained from cocoa cake; full-fat, fat-reduced, or highly fat-reduced powder; natural or alkalized powder when declared |
| excluded_products | Sweetened cocoa mixtures; chocolate powder; drinking chocolate; finished chocolate; cocoa liquor or cocoa butter as the reference product; products with added sugar or sweetener |
| representative_product | Unsweetened cocoa powder in the declared fat category and alkalization state, packed for bulk or industrial supply |
| production_route | Declared integrated cocoa-bean-to-powder, cocoa-liquor-to-powder, or purchased-cocoa-cake-to-powder route, including on-site alkalization when used |
| market_state | Dry, flowable powder at the powder manufacturer's gate in the declared packaging format |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unsweetened cocoa powder as a low-moisture food ingredient |
| How much | 1 kg of cocoa powder as delivered at the powder manufacturer's gate |
| How well | No added sugar or sweetener; declared cocoa-butter/fat category, moisture, alkalization status, particle-size specification, and food-grade conformity; moisture shall not exceed 7% m/m where CXS 105-1981 applies |
| How long or cycle | One production lot delivered at the factory gate; storage beyond the declared on-site holding period is outside the reference service unless explicitly included |
| reference_flow_link | rf_cocoa_powder_not_sweetened |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cocoa powder, not sweetened `2601a019-8ff4-4296-8773-24f0901f8419` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cocoa-butter/fat category or measured fat content; as-delivered moisture; natural or alkalized status and alkalizing agent when applicable; bean origin or blend; declared starting material and production route; particle-size specification; packaging format and net mass; production geography and reference period; cocoa-butter co-product treatment and allocation method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference cocoa powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference flow as 1 kg of as-delivered powder and declare the measured moisture basis; do not silently convert to dry matter. |
| `dry_matter_conversion` | Values reported on a dry-matter basis | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain the measured moisture result and formula used to convert between as-delivered and dry-matter mass; the reference output remains as delivered. |
| `mass_inputs_outputs` | Cocoa materials, powder, cocoa butter, shells, rejects, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate net mass by process and reconcile inputs, outputs, wastes, direct releases, and inventory change on a common wet or dry basis. |
| `energy_conversion` | Electricity, fuel, steam, and purchased heat | Energy | kWh or MJ | Preserve the recorded energy unit and lower- or higher-heating-value basis; document each conversion before normalization to the reference flow. |

## 5. System Boundary

The foreground boundary begins at the declared receipt of fermented dry cocoa beans, cocoa liquor, or cocoa cake and ends with conforming unsweetened cocoa powder packed at the manufacturer's gate. The foreground includes all on-site steps used by the declared route, utilities, cleaning, dust control, wastewater handling before transfer, waste handling before transfer, rework, packaging, and direct releases.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of fermented dry cocoa beans, cocoa liquor, or cocoa cake at the reporting facility, with material state, supplier, origin or blend, moisture, and fat-related specification declared |
| starting_condition_role | Upstream cut-in point for the foreground route; all operations after this point that occur at the reporting facility are foreground |
| product_classification_scope | Unsweetened cocoa powder under the semantic scope stated in this PCR, with CPC 3.0 code 23630 retained only as a classification reference |
| recursive_input_rule | Internal powder rework from the same facility and campaign is an internal loop and is not added as a new upstream product input; externally acquired cocoa powder is a separate product input with its own upstream dataset and must not recursively duplicate the current foreground route |
| upstream_dataset_requirement | Use traceable upstream datasets for purchased beans, liquor, cake, alkalizing agents, fuels, electricity, water, packaging, and other product inputs; disclose any proxy, geography mismatch, age, or excluded operation |
| disclosure | Declare starting material, included and omitted process steps, natural or alkalized route, allocation method, packaging boundary, on-site treatment, storage duration, and all cut-offs or proxies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_completeness` | Declared production route | Include every on-site process between the declared starting material and packed powder; a route may omit upstream bean, liquor, or pressing steps only when the omitted material enters with a documented upstream dataset. | `icco-processing-cocoa` |
| `boundary_utilities_releases` | Foreground operations | Include process electricity, thermal energy, water, cleaning materials, alkalizing agents, packaging, direct air and water releases, wastewater, dust-control residues, shells, rejects, and other wastes when they cross the foreground boundary. | `icco-processing-cocoa` |
| `boundary_low_moisture_hygiene` | Powder finishing and storage | Model cleaning, contamination control, and low-moisture food handling that materially changes inventory; declare excluded hygiene operations and retain the supporting production records. | `codex-cxs-105-1981` |
| `boundary_factory_gate` | Reference product | End the default system at net conforming powder packed at the manufacturer's gate; exclude downstream distribution, preparation, use, and packaging end-of-life unless the study explicitly expands the boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bean_to_liquor` | Bean preparation, roasting, winnowing, and nib grinding | conditional | Include when fermented dry cocoa beans enter the reporting facility | Foreground preparation of cocoa liquor | kg cocoa liquor leaving the process |
| `alkalization` | Optional cocoa alkalization | conditional | Include when nibs, liquor, cake, or powder are treated with an alkaline compound on site | Foreground colour and flavour modification | kg alkalized cocoa material leaving the process |
| `liquor_pressing` | Cocoa-liquor pressing and co-product separation | conditional | Include when cocoa liquor is pressed on site; omit only when purchased cocoa cake enters with an upstream dataset | Foreground production of cocoa cake and cocoa butter | kg cocoa liquor pressed |
| `powder_finishing` | Cake cooling, breaking, milling, tempering, storage, and packing | required | Always include for the declared powder manufacturing facility | Foreground production of the reference powder | 1 kg conforming packed cocoa powder |

### Process: Bean preparation, roasting, winnowing, and nib grinding (`bean_to_liquor`)

#### Inputs

##### Product flows

###### Fermented dry cocoa beans (`cocoa_beans_input`)

Record the net mass of received beans used by the production lot, including declared origin or blend, moisture, quality grade, and any beginning and ending inventory correction.

- Selected flow: Unresolved fermented dry cocoa beans product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured net cocoa bean input allocated to the lot or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_to_liquor_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional bean-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 5
  - Unit: kg/kg reference cocoa powder
  - Basis: broad route-screening interval before replacement with measured, moisture-consistent mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process electricity (`bean_route_electricity`)

Record metered or invoice-reconciled electricity used for cleaning, roasting auxiliaries, cracking, winnowing, conveying, ventilation, and nib grinding.

- Selected flow: Unresolved electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity for the bean-to-liquor process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_to_liquor_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg reference cocoa powder
  - Basis: broad first-pass screening interval pending metered foreground evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Roasting thermal energy (`roasting_thermal_energy`)

Record each fuel, steam, or purchased-heat carrier separately in the foreground package and retain its energy basis and combustion location.

- Selected flow: Unresolved thermal energy or fuel product flow
- Flow property / unit: Energy / MJ
- Amount rule: Measured fuel or heat consumption converted on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_to_liquor_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg reference cocoa powder
  - Basis: broad route-screening interval pending measured foreground evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cocoa liquor intermediate (`cocoa_liquor_output`)

Record the measured liquor mass transferred to alkalization or pressing, with moisture and inventory change on the same basis as the bean input.

- Selected flow: Unresolved cocoa liquor product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured cocoa liquor output from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_to_liquor_records`
- Sources: `icco-processing-cocoa`

##### Waste flows

###### Cocoa shells and cleaning rejects (`cocoa_shells_rejects`)

Record separately sold by-products and wastes; do not assign avoided burdens without an explicit study scenario.

- Selected flow: Unresolved cocoa shells or cleaning-residue waste flow
- Flow property / unit: Mass / kg
- Amount rule: Measured net shell, foreign-material, and rejected-bean output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_to_liquor_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional solid-residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg cocoa beans received
  - Basis: broad physical screening interval pending measured foreground evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct roasting and dust releases (`bean_route_air_releases`)

Report measured or permitted direct stack and fugitive releases by individual substance; never use this aggregate candidate as a published elementary flow.

- Selected flow: Unresolved individual elementary air flows
- Flow property / unit: Mass / kg
- Amount rule: Substance-specific measured or calculated direct release after control
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional direct-release QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference cocoa powder for each reported substance
  - Basis: deliberately broad screening interval; replace with substance-specific measurement or accepted factor evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Optional cocoa alkalization (`alkalization`)

#### Inputs

##### Product flows

###### Cocoa material for alkalization (`alkalization_cocoa_input`)

Record whether nibs, liquor, cake, or powder enter alkalization and link the amount to the corresponding upstream or internal process output.

- Selected flow: Unresolved cocoa nib, liquor, cake, or powder product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured cocoa material entering the alkalization vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alkalization_records`
- Sources: `icco-processing-cocoa`

###### Alkalizing agent (`alkalizing_agent_input`)

Record each alkaline compound separately by commercial-product mass and active content; do not merge different compounds into one published flow.

- Selected flow: Unresolved potassium carbonate, calcium carbonate, sodium hydroxide, or other declared alkalizing-agent product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured commercial product input and declared active concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg alkalized cocoa material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alkalization_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional alkalizing-agent QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg alkalized cocoa material output
  - Basis: broad screening interval pending formulation and batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Alkalization water (`alkalization_water`)

Record water added to the aqueous alkaline solution and any directly metered process water.

- Selected flow: Unresolved process water product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured water input to alkalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg alkalized cocoa material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alkalization_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg alkalized cocoa material output
  - Basis: broad screening interval pending metered foreground evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Alkalized cocoa material (`alkalized_cocoa_output`)

Record the material state, pH or process specification, moisture, and net mass transferred to the next process.

- Selected flow: Unresolved alkalized cocoa intermediate product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured alkalized material output after inventory correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alkalization_records`
- Sources: `icco-processing-cocoa`

##### Waste flows

###### Alkalization wastewater and residues (`alkalization_wastewater`)

Record transferred wastewater as a waste flow and report direct water emissions separately after on-site treatment.

- Selected flow: Unresolved wastewater waste flow
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balance-calculated wastewater transferred from alkalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg alkalized cocoa material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alkalization_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg alkalized cocoa material output
  - Basis: broad screening interval pending metered or reconciled foreground evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cocoa-liquor pressing and co-product separation (`liquor_pressing`)

#### Inputs

##### Product flows

###### Cocoa liquor for pressing (`pressing_liquor_input`)

Record hot cocoa liquor input by mass, fat content, moisture, and lot, linked to the internal liquor output or purchased-liquor upstream dataset.

- Selected flow: Unresolved cocoa liquor product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured cocoa liquor mass entering the press
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional liquor-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 5
  - Unit: kg/kg reference cocoa powder
  - Basis: broad screening interval pending fat- and moisture-consistent foreground mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Press electricity and hydraulic energy (`pressing_energy`)

Record electricity and any other energy carrier separately; retain metering and allocation to the pressing process.

- Selected flow: Unresolved electricity or hydraulic-energy product flow
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-submetered pressing energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional pressing-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg reference cocoa powder
  - Basis: broad first-pass screening interval pending metered foreground evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cocoa press cake (`cocoa_cake_output`)

Record cake output mass, moisture, residual fat category, and transfer to powder finishing.

- Selected flow: Unresolved cocoa cake product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured cocoa cake output from pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `icco-processing-cocoa`; `codex-cxs-105-1981`

###### Cocoa butter co-product (`cocoa_butter_coproduct`)

Record cocoa butter as a separate product output whenever it has a product destination; retain its measured mass and quality state for allocation.

- Selected flow: Unresolved cocoa butter product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured cocoa butter output from pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cocoa liquor pressed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `icco-processing-cocoa`; `mass-balance-identity`
- Range: Physical co-product mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg cocoa liquor pressed
  - Basis: cocoa butter output cannot exceed cocoa liquor input on a consistent mass basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Cake cooling, breaking, milling, tempering, storage, and packing (`powder_finishing`)

#### Inputs

##### Product flows

###### Cocoa cake input (`cocoa_cake_input`)

Record cocoa cake from on-site pressing or an upstream supplier, including residual fat category, moisture, alkalization state, and net mass.

- Selected flow: Unresolved cocoa cake product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured cocoa cake input to finishing after inventory correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_finishing_records`
- Sources: `icco-processing-cocoa`; `codex-cxs-105-1981`
- Range: Provisional cake-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.9
  - Upper: 2
  - Unit: kg/kg reference cocoa powder
  - Basis: broad screening interval pending measured loss- and moisture-consistent mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing electricity (`finishing_electricity`)

Record metered electricity for cake cooling, breaking, milling, classification, conveying, dust control, tempering, storage conditioning, and packing.

- Selected flow: Unresolved electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity for powder finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_finishing_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional finishing-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg reference cocoa powder
  - Basis: broad first-pass screening interval pending metered foreground evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging materials (`packaging_input`)

Record each bag, liner, carton, drum, pallet, and wrap material separately by material and net mass; exclude reusable transport packaging only with a documented reuse model.

- Selected flow: Unresolved material-specific packaging product flows
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging mass attributable to the packed reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_finishing_records`
- Sources:
- Range: Provisional packaging QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg packed reference cocoa powder
  - Basis: broad screening interval pending packaging bill-of-material records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming unsweetened cocoa powder (`reference_powder_output`)

Record exactly the net conforming powder mass at the declared gate; retain fat category, moisture, alkalization status, particle size, packaging, and lot identity.

- Selected flow: Cocoa powder, not sweetened `2601a019-8ff4-4296-8773-24f0901f8419`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of 1 kg conforming packed powder
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-105-1981`

##### Waste flows

###### Off-spec powder and collected dust (`offspec_powder_waste`)

Record material sent to waste treatment separately from internally reworked powder; internal rework remains an internal loop.

- Selected flow: Unresolved cocoa-powder waste flow
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec powder and collected dust leaving as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_finishing_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional powder-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference cocoa powder
  - Basis: broad screening interval pending reconciled foreground evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured powder dust to air (`powder_dust_air`)

Report only substance-specific uncaptured releases after control; collected dust transferred as waste belongs in the waste row above.

- Selected flow: Unresolved cocoa dust elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated uncaptured powder dust release after control
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `icco-processing-cocoa`
- Range: Provisional dust-release QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg reference cocoa powder
  - Basis: deliberately broad screening interval; replace with measured release or accepted control-factor evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared and separable foreground operations | First use process subdivision and direct metering to assign burdens to bean preparation, alkalization, pressing, and powder finishing; retain unallocated totals for reconciliation. | `mass-balance-identity` |
| `allocation_pressing_coproducts` | Joint cocoa cake and cocoa butter outputs from pressing | When subdivision cannot separate the joint pressing burdens, allocate those burdens between cocoa cake and cocoa butter using a documented physical relationship that reflects the process; if no defensible physical relationship is demonstrated, use economic allocation and report prices, currency, geography, averaging period, and calculation. | `icco-processing-cocoa`; `mass-balance-identity` |
| `allocation_sensitivity` | Material co-product allocation | Report an alternative mass-based or economic sensitivity when the selected method materially changes the powder result; do not apply avoided-burden substitution unless the study explicitly expands the scenario and discloses it. |  |
| `allocation_waste_rework` | Shells, rejects, collected dust, wastewater, and internal rework | Treat internal rework as an internal loop; classify an outgoing material as product, co-product, residue, or waste from its documented destination and economic status, and do not assign negative burdens by default. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bean_to_liquor_records` | `bean_to_liquor` | Bean, liquor, shell/reject, electricity, and roasting-energy quantities | weighbridge, scale, meter, fuel invoice, batch, and inventory records | lot id; origin/blend; input/output mass; moisture; inventory change; electricity; fuel/heat quantity and basis; shell/reject mass; operating time | Calibrated scales and meters reconciled to purchasing, production, and inventory records | kg; kWh; MJ; native fuel unit | Per lot or meter-reading interval, aggregated to the declared reference period | Representative declared operating period including relevant production variation | Reporting facility and included equipment | Correct inventory change, convert units transparently, then normalize net quantities to conforming powder output | Calibration or verification records; meter coverage; invoices; lot traceability; reconciliation log |
| `cp_alkalization_records` | `alkalization` | Cocoa material, alkaline compound, water, output, and wastewater | formulation, batch, scale, water meter, laboratory, and transfer records | material state; input/output mass; compound identity; commercial mass; active concentration; water; temperature/pressure if retained; moisture; pH or specification; wastewater | Batch-level recording with calibrated scales or meters and laboratory result linkage | kg; concentration unit; pH; process-condition unit | Each alkalization batch | All included batches in the declared reference period | Reporting facility and included alkalization equipment | Aggregate compound-specific and water records without merging identities; reconcile input, output, wastewater, releases, and inventory change | Formulation authorization; certificates; calibration; laboratory method/result; batch reconciliation |
| `cp_pressing_records` | `liquor_pressing` | Liquor, cake, cocoa butter, and pressing energy | batch, scale, press, meter, laboratory, and inventory records | liquor/cake/butter mass; fat content; moisture; batch id; energy; inventory change; destination | Direct mass measurement with laboratory characterization and submetered or allocated energy | kg; kWh; MJ; percentage | Each press campaign or reconciled reporting interval | All included campaigns in the declared reference period | Reporting facility and included presses | Reconcile liquor input to cake, butter, residues, releases, and inventory change on a consistent basis before allocation | Scale and meter checks; laboratory result; destination evidence; mass-balance reconciliation |
| `cp_powder_finishing_records` | `powder_finishing` | Cake, electricity, packaging, conforming powder, rework, and waste | batch, scale, meter, packaging issue, quality-release, and inventory records | cake mass/specification; electricity; packaging material/mass; powder output; moisture; fat category; alkalization status; particle size; rework; waste; inventory change | Direct measurement linked to lot release and packaging bill of materials | kg; kWh; specification unit | Each lot or meter-reading interval, aggregated to the declared reference period | All conforming and rejected production in the declared reference period | Reporting facility and included finishing/packing equipment | Separate conforming output, internal rework, waste, and inventory change; normalize inputs to net conforming packed powder | Calibration; packaging bill; batch traceability; laboratory release; inventory reconciliation |
| `cp_direct_release_records` | `bean_to_liquor`; `powder_finishing` | Direct air and water releases | stack/fugitive monitoring, control-device records, permits, discharge measurements, and accepted calculation records | substance; location; measured concentration/amount; flow rate; duration; control efficiency; calculation factor/source; detection limit | Substance-specific measurement or documented calculation from collected activity data | substance-specific mass and measurement units | At monitoring frequency required by the applicable control plan and for each material operating condition | Declared period covering normal operation and relevant abnormal events | All included foreground release points | Calculate each release separately, subtract only documented captured material, and normalize to conforming powder output | Laboratory report; instrument calibration; permit record; factor reference; control-device log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = net process amount attributable to the declared route / net conforming packed powder output | corrected process amount; allocation result where applicable; conforming powder mass | amount per 1 kg reference powder | `mass-balance-identity` |
| `calc_dry_matter` | Cocoa material conversions | dry mass = as-delivered mass × (1 − measured moisture mass fraction); retain both original and converted values | as-delivered mass; measured moisture | dry mass and conversion record | `codex-cxs-105-1981`; `mass-balance-identity` |
| `calc_process_mass_balance` | Each included process | reconciliation residual = corrected inputs − products − wastes − direct mass releases − ending inventory plus beginning inventory; investigate and disclose material residuals | input/output/waste/release masses; inventory change; consistent moisture basis | process residual and reconciliation status | `mass-balance-identity` |
| `calc_energy_conversion` | Energy carriers | Convert only with documented unit and heating-value convention; keep native quantity, factor, and result | native energy or fuel quantity; conversion factor; heating-value basis | kWh or MJ and traceable conversion |  |
| `calc_allocation_factor` | Joint pressing burdens | allocation factor = selected physical relationship or economic value for one co-product / sum of the same basis across all co-products | measured co-product quantities and properties or documented prices | allocation factors summing to one | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference powder and cocoa intermediates | Retain lot-linked product name, no-added-sugar/sweetener declaration, fat category or result, moisture, alkalization status, starting material, origin/blend, particle specification, and packaging identity. | Quality-release record, certificate or specification, laboratory result, and lot traceability |
| `dq_route_completeness` | Process boundary | Reconcile the declared starting material and every included or omitted ICCO process step to the process map and upstream dataset list. | Signed route map, supplier dataset references, and omission/proxy disclosure |
| `dq_measurement` | Mass, energy, water, and releases | Use calibrated or otherwise verified measurement systems where available; disclose estimation, allocation, missing coverage, detection limits, and conversion factors. | Calibration/verification, meter map, invoices, calculation workbook, and monitoring report |
| `dq_temporal_representativeness` | Foreground reporting period | Use a declared representative period covering relevant production variation, abnormal events, rejects, rework, shutdowns, and inventory changes; explain exclusions. | Production calendar, batch register, downtime log, and period reconciliation |
| `dq_mass_balance` | Bean, liquor, cake, butter, powder, residues, and inventory | Reconcile mass on a consistent moisture basis by included process and investigate material residuals before release. | Process mass-balance table and corrective-action note |
| `dq_provisional_ranges` | Every `reasoned_estimate` range | Treat the range only as a QA screen; replace it with foreground measurements or cited reviewed evidence, or document explicit reviewer acceptance before publication. | Replacement source or foreground range analysis and methodology review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail validation when the reference amount is not 1 kg, the reference flow UUID differs, the Mass property/unit-group identity is missing, or required product qualifiers are absent. | `codex-cxs-105-1981` |
| `validate_unsweetened_scope` | Product identity | Fail validation when sugar or sweetener is added, when the product is a dry cocoa-sugar mixture or chocolate powder, or when cocoa cake is not the declared powder precursor. | `codex-cxs-105-1981` |
| `validate_moisture` | Reference powder | Where CXS 105-1981 applies, fail validation when measured moisture exceeds 7% m/m or the moisture result and basis are absent. | `codex-cxs-105-1981` |
| `validate_route_boundary` | Process map and upstream datasets | Fail validation when an on-site route step is omitted or when an upstream starting material lacks a traceable dataset and omission disclosure. | `icco-processing-cocoa` |
| `validate_inventory_identity` | Inventory flows | Before review or publication, require each selected product, waste, and elementary flow to resolve to a reread Tiangong UUID; reject aggregate elementary-flow candidates in a published dataset. |  |
| `validate_mass_balance` | Each included process | Require a moisture-consistent mass-balance result and investigation/disclosure of material residuals; verify that cocoa butter does not exceed liquor input on the same basis. | `mass-balance-identity` |
| `validate_allocation` | Pressing co-products | Require co-product classification, measured cake and cocoa-butter outputs, selected allocation basis, factors summing to one, and sensitivity disclosure when allocation is material. | `icco-processing-cocoa`; `mass-balance-identity` |
| `validate_reasoned_estimates` | Provisional QA ranges | Treat values outside a provisional range as review flags rather than automatic non-conformance; publication requires replacement evidence or explicit methodology-review acceptance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for unsweetened cocoa powder at the manufacturer's gate |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` after methodology review, UUID resolution, and evidence replacement appropriate to the declared geography, technology, route, and period |
| allowed_use | Product carbon-footprint or LCA models requiring unsweetened cocoa powder when product qualifiers, system boundary, allocation, geography, technology, and time are compatible |
| excluded_use | Sweetened cocoa mixtures, chocolate powder, finished chocolate, cocoa butter as reference product, unexplained route substitution, or unreviewed use of provisional estimates as authoritative values |
| required_metadata | PCR id/version; reference-flow UUID; product name and qualifiers; CPC reference; facility geography; reference period; starting material; route and technology; natural/alkalized status; fat category/result; moisture; packaging; upstream datasets; allocation method; cut-offs; data owner and review status |
| required_quality_disclosure | Foreground versus secondary shares; meter and batch coverage; missing data and estimates; mass-balance residuals; allocation factors and sensitivity; provisional ranges retained; unresolved UUIDs; upstream proxy geography/time/technology; laboratory and monitoring methods |
| update_trigger | Change in starting material, fat category, alkalization chemistry, roasting/pressing/milling technology, energy system, packaging, co-product destination or prices, allocation method, supplier mix, regulation/specification, or evidence that materially changes the inventory or its representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-105-1981` | standard | Codex Alimentarius, CXS 105-1981, Standard for Cocoa Powders (Cocoas) and Dry Mixtures of Cocoa and Sugars, amended 2025, https://openknowledge.fao.org/handle/20.500.14283/cd8968en (retrieved 2026-08-11) | Product scope and naming; cocoa powder obtained from cocoa cake; fat-category declaration; maximum moisture; low-moisture hygiene context; validation |
| `icco-processing-cocoa` | official_guidance | International Cocoa Organization, Processing Cocoa, https://www.icco.org/processing-cocoa/ (retrieved 2026-08-11) | Process decomposition; cleaning, roasting, winnowing, grinding, optional alkalization, liquor pressing, cocoa cake and cocoa butter outputs, cake cooling/milling/tempering/storage |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to process inputs, products, wastes, direct releases, and inventory change | Process reconciliation, physical QA bounds, normalization, and co-product allocation calculations |
