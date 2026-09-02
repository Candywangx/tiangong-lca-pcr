---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-fish-other-than-liver-oils
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fats and oils and their fractions, of fish, other than liver oils

## 1. Scope and Applicability

This PCR covers the production, at the producing facility gate, of fats, oils, and physically separated fractions obtained from fish, excluding every oil or fraction derived wholly or partly from fish liver. It applies to non-liver crude fish oil intended for further food processing and to non-liver fish oil or physical fractions presented for human consumption. The declared product shall be consistent with the applicable product description and processing state in CXS 329-2017.

The foreground data package shall identify the fish species by scientific name where known (or the most specific documented taxon where species-level evidence is unavailable), the anatomical part or material stream used, and whether the source was wild or farmed when applicable. Acceptable part declarations include whole fish, body tissue, heads, frames, skin, trimmings, and explicitly segregated non-liver viscera. A generic declaration such as "fish material" is insufficient.

Fish-liver oils, mixtures containing fish-liver oil, marine-mammal oils, shellfish oils, terrestrial animal fats, chemically modified animal fats or oils (including hydrogenated, inter-esterified, re-esterified, or elaidinised products), fatty-acid ethyl esters, and products not intended for the declared food use are outside scope. Extraction, refining, purification, and physical fractionation are included only when performed for the declared non-liver fish-oil product. Upstream fishing, aquaculture, and production of purchased fish-processing materials are represented by linked upstream datasets rather than silently absorbed into this foreground system.

No generic energy demand, composition, or product yield is prescribed. These values depend on species, anatomical part, freshness, incoming oil state, technology, and product grade, and shall be produced from foreground records. CXS 329-2017 composition and quality provisions are used only when they apply to the declared named or unnamed fish oil; they are not converted into universal LCI composition or yield defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-fish-other-than-liver-oils |
| classification_refs | CPC 3.0: 21525, Fats and oils and their fractions, of fish, other than liver oils |
| covered_products | Non-liver crude fish oil intended for further food processing; refined non-liver fish oil; physically separated non-liver fish-oil fractions; named or unnamed fish oils from fish only, provided the species and anatomical part or material stream are declared |
| excluded_products | Fish-liver oils and any mixture containing them; shellfish oils; marine-mammal oils; lard, tallow, and other terrestrial animal fats; chemically modified animal fats or oils classified outside CPC 21525; fatty-acid ethyl esters; products whose fish species and anatomical source cannot be documented; non-food products |
| representative_product | One declared non-liver fish oil or physical fraction at the producing facility gate, with species, anatomical source, processing state, and market grade specified |
| production_route | Receipt and liver-exclusion control; oil recovery and separation when fish material is processed; refining or purification when performed; physical fractionation when performed; storage and dispatch |
| market_state | Bulk or packaged crude oil intended for further food processing, or bulk or packaged edible oil/fraction ready for the declared downstream food use; oxidation protection and processing state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Non-liver fish fat, oil, or physical fraction providing the declared oil product function for food processing or human consumption |
| How much | 1 kg net product at the producing facility gate |
| How well | Meets the declared crude, refined, or physically fractionated grade and the applicable provisions of CXS 329-2017; species, anatomical source, processing state, and conformity basis are documented |
| How long or cycle | One production lot at gate; no use duration is assigned to this intermediate or final food product |
| reference_flow_link | The functional unit is realized by 1 kg of the reference product flow, excluding packaging mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fats and oils and their fractions, of fish, other than liver oils `dacba994-e061-44ed-940e-61f7820422c6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish scientific name or most specific documented taxon; anatomical part or material stream; explicit confirmation of no liver-derived input; wild or farmed source when applicable; named or unnamed oil; crude, refined, purified, or physically fractionated state; extraction and refining route; food-use status; bulk or packaged state; allocation method; geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net non-liver fish-oil product at the facility gate; packaging mass is inventoried separately and shall not be included in reference product mass. |
| `wet_material_mass` | Fish or fish-processing material inputs | Mass | kg | Record received mass on the actual as-received basis and disclose whether water, ice, or other carrier material is included; do not convert to a dry basis without measured moisture data and a documented calculation. |
| `oil_mass_state` | Crude oil, refined oil, fractions, and oil residues | Mass | kg | Record each oil stream at the measured processing state and lot boundary; do not infer oil content, yield, or composition from a generic fish-oil factor. |
| `utility_units` | Electricity, fuels, steam, heat, cooling, water, and inert gas | Relevant energy, mass, or volume property | Dataset reference unit | Preserve source-record units, document conversions, and normalize actual consumption to 1 kg reference product using the applicable lot output. |
| `quality_measurements` | Product quality and identity tests | Test-specific property | Method-specific unit | Record the applicable CXS 329-2017 conformity results and analytical methods without treating fatty-acid or oxidation specifications as inventory mass fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fish or fish-processing material received with documented species and anatomical source and with liver excluded, or purchased non-liver crude/refined fish oil received with equivalent traceability and processing-state documentation |
| starting_condition_role | Foreground gate input whose identity, mass, origin, and liver-exclusion evidence determine the eligible production route |
| product_classification_scope | CPC 3.0 subclass 21525 only: fish fats, oils, and fractions other than liver oils; chemically modified products and non-fish animal oils remain outside this category |
| recursive_input_rule | When an eligible non-liver fish oil or fraction is purchased as an input, record it once as a technosphere product input with a separate upstream dataset; do not recursively recreate its upstream extraction or refining inside the receiving process |
| upstream_dataset_requirement | Link species-, source-system-, geography-, technology-, and period-representative datasets for fishing or aquaculture, fish processing, purchased non-liver fish material or oil, utilities, processing aids, packaging, transport when included, and waste treatment |
| disclosure | Declare species/taxon, anatomical part or stream, evidence of liver exclusion, wild/farmed status when applicable, incoming material state, all performed processing steps, product grade, cut-off decisions, allocation choices, upstream dataset substitutions, and any data gap |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_non_liver_identity` | All input and product streams | Include only fish-derived non-liver oil material. Maintain receiving, segregation, and mass records sufficient to show that liver-derived oil was neither intentionally used nor mixed into the reference product. | unsd-cpc-3-0-2025; codex-cxs-329-2017 |
| `boundary_foreground_gate` | Foreground production system | Start at receipt of the declared eligible material or purchased oil and end when the reference product is stored and ready for dispatch at the producing facility gate; include actual extraction, separation, refining, purification, physical fractionation, storage, and packaging steps performed. | codex-cxs-329-2017; eu-pef-2021 |
| `boundary_upstream_links` | Upstream supply | Represent fishing, aquaculture, fish processing, purchased intermediates, utilities, processing aids, packaging, and treatment services through explicit upstream product or waste-treatment datasets; do not assign them zero burden by omission. | eu-pef-2021 |
| `boundary_actual_flows` | Foreground inventory | Include measured product inputs and outputs, energy carriers, water, process aids, packaging, wastes, wastewater, and direct elementary emissions for the performed route. A flow may be excluded only under a documented study rule with its mass and environmental relevance assessed. | eu-pef-2021 |
| `boundary_fdm_bat_applicability` | Regulatory/BAT interpretation | Do not import FDM BAT emission levels or performance values as generic fish-oil defaults. Decision (EU) 2019/2031 expressly excludes primary fish-oil production from its FDM BAT scope; record site permit requirements and actual emissions separately and identify the applicable sectoral rules. | eu-fdm-bat-2019 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_and_segregation` | Material receipt, identity control, and liver exclusion | required | Always | Foreground receipt and eligibility control | kg eligible material or oil accepted |
| `oil_recovery_and_separation` | Oil recovery and phase separation | conditional | Include when oil is recovered from whole fish, fish parts, fish-processing streams, or another non-oil feed | Foreground extraction and separation | kg crude non-liver fish oil produced |
| `refining_and_purification` | Refining and purification | conditional | Include for every refining or purification step actually performed | Foreground conditioning | kg refined or purified oil produced |
| `physical_fractionation` | Physical fractionation or concentration | conditional | Include only when a physical fractionation route is performed without moving the product to a chemically modified category | Foreground product differentiation | kg declared oil fraction produced |
| `storage_packaging_and_dispatch` | Storage, packaging, and dispatch preparation | required | Always; packaging inputs apply only to the dispatched market state | Foreground finishing and facility gate | 1 kg reference product at facility gate |

### Process: Material receipt, identity control, and liver exclusion (`material_receipt_and_segregation`)

#### Inputs

##### Product flows

###### Eligible non-liver fish material or purchased fish oil (`eligible_fish_material_input`)

Record each received lot separately by species/taxon, anatomical part or material stream, origin, wild/farmed status when applicable, mass, and incoming processing state.

- Selected flow: Declared non-liver fish material, crude oil, refined oil, or physical fraction
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt_identity`
- Sources: `unsd-cpc-3-0-2025`; `codex-cxs-329-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted eligible material transferred to processing (`accepted_material_output`)

Record the measured mass transferred to the next performed process with its species, part, and state unchanged or explicitly updated.

- Selected flow: Accepted non-liver fish material or fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving lot and normalized to 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt_identity`
- Sources: `codex-cxs-329-2017`

##### Waste flows

###### Rejected, misidentified, or liver-containing material (`rejected_ineligible_material`)

Record rejected mass and destination. Rejected liver-containing material shall not be netted against eligible input or represented as reference product.

- Selected flow: Rejected fish material or oil to declared treatment or recovery
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receiving lot and normalized to 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt_identity`
- Sources: `unsd-cpc-3-0-2025`; `codex-cxs-329-2017`

##### Elementary flows

### Process: Oil recovery and phase separation (`oil_recovery_and_separation`)

#### Inputs

##### Product flows

###### Accepted non-liver fish material (`recovery_feed_input`)

Record measured feed mass and the species and anatomical source carried from receiving.

- Selected flow: Accepted non-liver fish material
- Flow property / unit: Mass / kg
- Amount rule: measured process feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg crude oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `codex-cxs-329-2017`

###### Water and other processing media (`recovery_water_and_media`)

Record water, ice, or other supplied media that cross the process boundary. Do not infer consumption from a generic fish-oil process.

- Selected flow: Site-specific water or declared processing medium
- Flow property / unit: Mass or volume / recorded unit
- Amount rule: measured consumption by lot, meter, or reconciled invoice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_media`
- Sources:

###### Electricity and thermal energy (`recovery_energy`)

Record actual electricity, fuel, steam, and supplied heat used for conditioning, cooking, pressing, centrifugation, or separation.

- Selected flow: Site-specific electricity and thermal-energy carriers
- Flow property / unit: Energy or fuel property / recorded unit
- Amount rule: metered, sub-metered, or allocated facility consumption for the recovery lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg crude oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_media`
- Sources:

##### Waste flows

##### Elementary flows

###### Direct recovery emissions (`recovery_direct_emissions`)

Record actual direct air and water emissions attributable to recovery, including combustion emissions where the foreground system operates the combustion source.

- Selected flow: Site-specific elementary emissions to air or water
- Flow property / unit: Mass / kg
- Amount rule: measured or permit-method calculated emission by substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-pef-2021`

#### Outputs

##### Product flows

###### Crude non-liver fish oil (`crude_fish_oil_output`)

Record measured crude oil output. The implied recovery yield is calculated from the same-lot feed and output masses; no default yield applies.

- Selected flow: Crude non-liver fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured saleable or transferable crude oil mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per recovery lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `codex-cxs-329-2017`

###### Non-oil co-products (`recovery_coproducts`)

Record each protein-rich, aqueous, or other marketable output separately with measured mass and destination.

- Selected flow: Declared co-product by actual market identity
- Flow property / unit: Mass / kg
- Amount rule: measured output mass by co-product and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per recovery lot and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources:

##### Waste flows

###### Recovery residues and wastewater (`recovery_residues_and_wastewater`)

Record separated solids, sludge, rejected oil phases, and wastewater by measured quantity and treatment destination.

- Selected flow: Declared residue, sludge, rejected oil, or wastewater to treatment
- Flow property / unit: Mass or volume / recorded unit
- Amount rule: measured or mass-balance-reconciled quantity by stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources:

##### Elementary flows

### Process: Refining and purification (`refining_and_purification`)

#### Inputs

##### Product flows

###### Crude or partially refined non-liver fish oil (`refining_oil_input`)

Record incoming oil mass and state for every performed refining or purification stage.

- Selected flow: Crude or partially refined non-liver fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by refining lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg refined oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `codex-cxs-329-2017`

###### Refining aids, water, and gases (`refining_aids_and_media`)

Record actual alkali, acid, adsorbent, filter aid, water, solvent when used, antioxidant, inert gas, and other processing inputs by named substance and function.

- Selected flow: Named site-specific refining aid or processing medium
- Flow property / unit: Mass or volume / recorded unit
- Amount rule: measured issue, batch recipe, or reconciled purchase quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_inputs`
- Sources: `codex-cxs-329-2017`

###### Refining electricity and thermal energy (`refining_energy`)

Record actual electricity, fuel, steam, heating, cooling, vacuum, and compressed-gas energy for the performed sequence.

- Selected flow: Site-specific electricity and thermal-energy carriers
- Flow property / unit: Energy or fuel property / recorded unit
- Amount rule: metered, sub-metered, or allocated facility consumption for the refining lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_media`
- Sources:

##### Waste flows

##### Elementary flows

###### Direct refining emissions (`refining_direct_emissions`)

Record site-specific air and water emissions from refining, solvent handling when applicable, and on-site combustion.

- Selected flow: Site-specific elementary emissions to air or water
- Flow property / unit: Mass / kg
- Amount rule: measured or permit-method calculated emission by substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-pef-2021`

#### Outputs

##### Product flows

###### Refined or purified non-liver fish oil (`refined_fish_oil_output`)

Record measured output mass and declared quality state. Determine CXS 329-2017 applicability from the declared fish-oil type rather than assigning a generic composition.

- Selected flow: Refined or purified non-liver fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured accepted oil mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per refining lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_and_quality`
- Sources: `codex-cxs-329-2017`

##### Waste flows

###### Removed phases and spent refining materials (`refining_wastes`)

Record soapstock, gums, spent adsorbents or filter aids, distillates, solvent losses, rejected oil, and wastewater only when generated, with destination and any co-product status disclosed.

- Selected flow: Named removed phase or spent material to declared destination
- Flow property / unit: Mass or volume / recorded unit
- Amount rule: measured or mass-balance-reconciled quantity by stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined oil output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `codex-cxs-329-2017`

##### Elementary flows

### Process: Physical fractionation or concentration (`physical_fractionation`)

#### Inputs

##### Product flows

###### Eligible non-liver fish oil for fractionation (`fractionation_oil_input`)

Record the measured oil feed, declared composition test where relevant, and processing state before physical fractionation.

- Selected flow: Eligible non-liver fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by fractionation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg declared fraction output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `codex-cxs-329-2017`

###### Fractionation utilities and processing media (`fractionation_utilities_and_media`)

Record actual electricity, heating, cooling, vacuum, water, and processing media for winterization or another declared physical separation route.

- Selected flow: Site-specific utility or named processing medium
- Flow property / unit: Relevant property / recorded unit
- Amount rule: metered, batch-recorded, or reconciled consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg declared fraction output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_media`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Declared non-liver fish-oil fraction (`fish_oil_fraction_output`)

Record measured fraction mass and identity. Do not use a standard composition range as a process yield.

- Selected flow: Declared physical fraction of non-liver fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fraction mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fractionation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_and_quality`
- Sources: `codex-cxs-329-2017`

###### Other saleable oil fractions (`other_fraction_outputs`)

Record every other saleable fraction separately with measured mass, specification, destination, and economic status.

- Selected flow: Declared co-product oil fraction
- Flow property / unit: Mass / kg
- Amount rule: measured co-product fraction mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fractionation lot and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources:

##### Waste flows

###### Fractionation residues and spent media (`fractionation_wastes`)

Record non-saleable residues, spent media, and wastewater by measured quantity and treatment destination.

- Selected flow: Named residue or spent medium to declared destination
- Flow property / unit: Mass or volume / recorded unit
- Amount rule: measured or mass-balance-reconciled quantity by stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg declared fraction output and normalized to 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources:

##### Elementary flows

### Process: Storage, packaging, and dispatch preparation (`storage_packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Accepted non-liver fish oil product (`dispatch_oil_input`)

Record accepted oil mass transferred into final storage after applicable quality release.

- Selected flow: Declared crude, refined, purified, or physically fractionated non-liver fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per dispatch lot and normalized to 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_and_quality`
- Sources: `codex-cxs-329-2017`

###### Storage utilities, inert gas, and packaging (`dispatch_inputs`)

Record actual storage energy, inert gas, antioxidants added at this stage, and primary, secondary, or transport packaging used for the declared market state.

- Selected flow: Site-specific utility, named additive, inert gas, or packaging material
- Flow property / unit: Relevant property / recorded unit
- Amount rule: measured, batch-recorded, or bill-of-material quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging_dispatch`
- Sources: `codex-cxs-329-2017`; `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference non-liver fish-oil product (`reference_product_output`)

Report the released product using the verified Tiangong reference identity and required qualifiers.

- Selected flow: Fats and oils and their fractions, of fish, other than liver oils `dacba994-e061-44ed-940e-61f7820422c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net released product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Storage losses, off-specification oil, and packaging waste (`dispatch_wastes`)

Record actual storage losses, off-specification product, cleaning residues, and packaging waste separately with destination.

- Selected flow: Named oil loss, cleaning residue, or packaging waste to declared destination
- Flow property / unit: Mass or volume / recorded unit
- Amount rule: measured or inventory-reconciled quantity by stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging_dispatch`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-output extraction, refining, and fractionation | First avoid allocation by subdividing the performed processes and directly measuring material, utility, emission, and waste flows for independently operated stages or product lines. | eu-pef-2021 |
| `allocation_supplier_input` | Purchased fish-processing material or oil | Preserve the upstream burden and allocation status declared by the supplying dataset. Do not assign zero upstream burden merely because the input is described as a by-product, residue, or low-value material. | eu-pef-2021 |
| `allocation_physical_relation` | Unresolved jointly produced outputs | After practicable subdivision, apply a documented physical causal relationship when it reflects how changing co-product output changes foreground inputs and emissions. Simple mass allocation shall not be labelled causal without justification. | eu-pef-2021 |
| `allocation_economic_fallback` | Joint outputs without a defensible physical causal relationship | Use economic allocation only as a disclosed fallback. Record product-specific quantities, price source, price basis, currency, geography, reference period, treatment of negative or zero values, and a sensitivity test for material co-products. | eu-pef-2021 |
| `allocation_waste_and_recovery` | Wastes, residues, recovered materials, and treatment outputs | Classify each output from documented legal/market status and destination. Do not credit a waste as a co-product without a demonstrated function and market; model treatment burdens and any recovery consistently with the selected downstream dataset. | eu-pef-2021 |
| `allocation_mass_balance` | All multi-output processes | Before allocation, reconcile measured inputs, products, co-products, wastes, and measured stock change on a consistent wet or actual-state mass basis; disclose unexplained imbalance rather than forcing it into oil yield. | eu-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipt_identity` | `material_receipt_and_segregation` | received and rejected material identity | receiving log, supplier declaration, traceability record, weighbridge record | lot_id; supplier; fish_scientific_name_or_taxon; common_name; wild_or_farmed; anatomical_part_or_stream; liver_exclusion_evidence; incoming_state; gross_mass; tare_mass; accepted_mass; rejected_mass; rejection_reason; destination | verify documentary identity against physical lot, record mass, and retain explicit liver-exclusion evidence | kg plus text qualifiers | every lot | all lots in reference period | all supplying origins and receiving points serving the dataset | sum accepted and rejected masses by lot; do not combine lots before qualifiers are preserved | signed/controlled receiving record, supplier specification, traceability certificate, scale calibration, segregation record |
| `cp_process_mass_balance` | `oil_recovery_and_separation` | process feeds, products, co-products, wastes, and stock change | batch sheet, tank gauge, scale record, flowmeter, disposal record | process_id; lot_id; stream_id; stream_role; opening_stock; input_mass; output_mass; closing_stock; moisture_or_carrier_basis; destination | reconcile calibrated measurements for every material stream on one stated mass basis | kg | every batch or continuous production campaign | representative period covering routine operating variability | all included lines and shifts | calculate mass balance by process and lot/campaign before normalizing to product output | instrument calibration, batch sign-off, tank conversion table, reconciliation record |
| `cp_utilities_and_media` | `oil_recovery_and_separation` | electricity, fuels, steam, heat, cooling, water, and processing media | submeter, utility meter, batch issue, invoice reconciliation | process_id; lot_or_period; utility_or_medium; opening_reading; closing_reading; quantity; unit; shared_load_basis; operating_hours; production_mass | prefer process submetering; otherwise allocate shared use with a documented engineering driver and reconcile to invoice totals | recorded physical unit | each batch/campaign or at least monthly with production matching | same period as production data | all included equipment and shared services | subtract non-production use where measured, allocate shared use, convert units transparently, and normalize to actual product mass | meter calibration, invoice, boiler log, engineering allocation basis, completeness reconciliation |
| `cp_refining_inputs` | `refining_and_purification` | refining aids and additives | recipe, material issue, purchase and stock record | lot_id; substance_name; function; concentration; issued_quantity; returned_quantity; stock_change; unit; supplier; recovery_or_destination | record net consumed quantity by named substance for each refining sequence | kg, L, or recorded unit | every refining lot | all refining lots in reference period | all included refining lines | net issue equals issued minus returned plus attributable stock change; normalize to accepted refined oil | approved recipe, batch record, inventory reconciliation, supplier identity |
| `cp_emissions_and_discharges` | `oil_recovery_and_separation` | direct air and water emissions | continuous monitor, periodic test, discharge meter, laboratory analysis, fuel calculation | process_id; source_id; substance; concentration; flow; duration; quantity; method; detection_limit; discharge_destination | use site permit or recognized measurement/calculation method and preserve non-detect treatment | kg, kg/m3, m3, or method unit | as required by permit and sufficient to represent the reference period | same production period, with episodic events identified | all attributable stacks, vents, and discharge points | calculate substance load from concentration and flow where needed, map to production, and normalize to reference product | laboratory accreditation, method reference, calibration, permit report, uncertainty and detection-limit record |
| `cp_product_mass_and_quality` | `storage_packaging_and_dispatch` | accepted oil/fraction mass and CXS conformity evidence | tank/scale record, certificate of analysis, release record | lot_id; product_mass; species_or_taxon; anatomical_source; liver_exclusion_confirmation; named_or_unnamed_oil; processing_state; applicable_cxs_section; test_result; test_unit; analytical_method; acceptance_status | measure released mass and retain test results needed for the declared CXS 329-2017 product type | kg and method-specific units | every released lot | all lots in reference period | every product grade and production line in scope | sum only released conforming mass; keep off-specification mass as a separate output | calibrated mass record, chain of custody, accredited or controlled laboratory report, quality release signature |
| `cp_storage_packaging_dispatch` | `storage_packaging_and_dispatch` | storage inputs, packaging, dispatch, and losses | tank log, bill of materials, material issue, dispatch note, cleaning record | lot_id; opening_stock; received_mass; dispatched_mass; closing_stock; loss_mass; electricity; inert_gas; additive; packaging_material; packaging_mass; cleaning_material; waste_destination | reconcile storage stock and record actual packaging and preservation inputs for the declared market state | kg, kWh, m3, or recorded unit | each lot with monthly reconciliation | same period as product output | all tanks, filling lines, and packaging formats in scope | reconcile opening plus receipts to dispatch plus closing stock and losses; normalize inputs to net product mass | tank calibration, BOM revision, dispatch record, inventory reconciliation, waste transfer record |

When refining, fractionation, or another process has material direct emissions, instantiate `cp_emissions_and_discharges` for that process with the same fields and method requirements. When a process-specific mass balance is needed outside recovery, instantiate `cp_process_mass_balance` with the applicable `process_id`; do not merge unmatched periods or product grades.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Reference product | net reference product mass = gross dispatched product-and-container mass - empty container/packaging mass; tank or bulk measurements use calibrated net oil mass directly | gross mass; tare or packaging mass; calibrated bulk mass | kg net reference product | eu-pef-2021 |
| `calc_process_yield` | Each performed conversion process | process yield = measured accepted target oil or fraction output / measured eligible feed input on the same stated mass basis; report the calculated value without applying a generic default | same-lot accepted output mass; eligible feed mass; mass-basis statement | kg target output per kg eligible feed | codex-cxs-329-2017 |
| `calc_mass_balance_closure` | Each process and lot/campaign | closure = (total measured outputs + closing stock - opening stock) / total measured inputs; report unmeasured evaporation or sampling only when supported by records and disclose remaining imbalance | all input/output masses; opening and closing stock | dimensionless closure and unexplained kg imbalance | eu-pef-2021 |
| `calc_normalized_inventory` | Foreground inventory rows | normalized amount = attributable measured or calculated flow quantity / net reference product mass from the same aligned production period | attributable flow quantity; net product mass; unit conversion | flow amount per 1 kg reference product | eu-pef-2021 |
| `calc_emission_load` | Measured discharges | substance load = measured concentration x measured discharge volume, with unit conversion and documented handling of non-detects; use direct mass measurement when available | concentration; volume or flow and duration; detection-limit treatment | kg substance per period and per kg reference product | eu-pef-2021 |
| `calc_allocation_factor` | Unavoidable allocation | factor_i = selected physical causal quantity_i / sum quantities, or economic value_i / sum values for the documented fallback; apply one consistent basis to all jointly attributable foreground flows | co-product quantities or values; allocation basis; reference period | allocation factor by output | eu-pef-2021 |
| `calc_liver_exclusion_balance` | Receiving and product traceability | liver-containing accepted input shall equal zero; any detected or declared liver material is recorded as rejected/ineligible and excludes the affected product lot from this PCR | receiving identity records; segregation records; rejected mass; product genealogy | pass/fail plus kg rejected liver-containing material | unsd-cpc-3-0-2025; codex-cxs-329-2017 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_traceability` | Product and material identity | Trace every reference-product lot to species/taxon, anatomical part or material stream, origin, wild/farmed status when applicable, and explicit liver-exclusion evidence. | supplier declarations, receiving records, segregation records, batch genealogy, product release record |
| `dqr_measurement` | Mass, utilities, and emissions | Use calibrated or controlled measurements; document conversion factors, shared-resource allocation drivers, detection limits, and measurement uncertainty where material. | calibration certificates, meter records, laboratory methods, invoice reconciliation, calculation sheets |
| `dqr_temporal` | Foreground data | Use a common representative reference period, normally at least 12 consecutive months unless a shorter campaign is the entire production cycle; justify seasonality and abnormal-event treatment. | dated production, utility, purchase, emission, and dispatch records |
| `dqr_technological` | Included processes | Match actual extraction, separation, refining, purification, fractionation, storage, and packaging technologies; do not substitute a generic fish-oil route without disclosure. | process flow diagram, equipment list, batch instructions, operating logs |
| `dqr_geographical` | Foreground and upstream data | Represent the actual facility and supplying regions, electricity grid, fuels, water, transport, and treatment services; disclose any proxy geography. | site address, supplier origins, dataset metadata, utility contracts, treatment records |
| `dqr_completeness` | Foreground inventory | Reconcile every performed process across material inputs, products, co-products, wastes, stock changes, utilities, wastewater, and direct emissions. Document exclusions and demonstrate they do not hide liver input or a material environmental flow. | mass and energy reconciliations, cut-off log, missing-data register, emission inventory |
| `dqr_no_generic_ranges` | Energy, composition, and yield | Do not use a universal fish-oil energy, composition, or yield value. Where source-backed ranges are absent, retain a foreground-data requirement and flag missing observations for replacement before publication or comparative use. | foreground collection protocols, certificates of analysis, unresolved-data register, source review |
| `dqr_source_currency` | External rules and datasets | Verify that CXS 329-2017, applicable legal requirements, upstream datasets, and analytical methods are current for the declared geography and product at dataset release. | dated source register, version record, dataset metadata, regulatory review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The product flow UUID shall equal `dacba994-e061-44ed-940e-61f7820422c6`, the Mass property UUID shall equal `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit-group UUID shall equal `93a60a57-a4c8-11da-a746-0800200c9a66`, and the net reference amount shall equal 1 kg. |  |
| `validate_species_and_part` | Product and eligible inputs | Fail validation when the fish species/taxon or anatomical part/material stream is missing, is only stated as generic fish material, or cannot be traced from reference product to received lot. | codex-cxs-329-2017 |
| `validate_no_liver` | Product category boundary | Fail validation when liver, liver-derived oil, a mixture containing fish-liver oil, or unresolved liver status enters the reference product genealogy. | unsd-cpc-3-0-2025; codex-cxs-329-2017 |
| `validate_excluded_categories` | Product classification | Fail validation for marine-mammal oil, shellfish oil, terrestrial animal fat, fatty-acid ethyl ester, or chemically modified oil outside CPC 21525. | unsd-cpc-3-0-2025; codex-cxs-211-1999; codex-cxs-329-2017 |
| `validate_cxs_applicability` | Declared product grade | Require the dataset to identify the applicable CXS 329-2017 product description and processing state and to retain the corresponding conformity evidence. Do not apply named-oil composition ranges to an undeclared or different oil type. | codex-cxs-329-2017 |
| `validate_process_route` | Process map and inventory | Every performed foreground step shall appear in the process map and inventory; every included process shall have matched-period inputs, outputs, utilities, wastes, and direct emissions or a documented zero/not-applicable basis. | eu-pef-2021 |
| `validate_mass_balance` | Each performed process | Require a disclosed mass-balance closure and unexplained imbalance for each lot or aligned campaign; prohibit forced balancing through an invented product yield or composition. | eu-pef-2021 |
| `validate_foreground_values` | Energy, water, aids, yield, and emissions | Require foreground records or documented calculations from those records. Reject generic energy, water, composition, and yield defaults not supported by a cited source and declared applicability. | eu-pef-2021 |
| `validate_allocation` | Multi-output processes | Require subdivision evidence or a documented physical causal relationship; when economic allocation is used, require prices, period, geography, currency, treatment of zero/negative values, and sensitivity results. | eu-pef-2021 |
| `validate_data_quality` | Published dataset | Require identity, technological, temporal, geographical, measurement, completeness, source-currency, missing-data, and proxy disclosures sufficient for review and downstream reuse. | eu-pef-2021 |
| `validate_fdm_bat_scope` | BAT or regulatory claims | Reject any claim that Decision (EU) 2019/2031 supplies generic fish-oil BAT performance or emission values; its stated exclusion of primary fish-oil production shall be disclosed when the source is referenced. | eu-fdm-bat-2019 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility-gate foreground production dataset for one declared non-liver fish oil or physical fraction |
| downstream_use | `secondary_dataset`; `background_dataset` when independently reviewed and the user confirms scope, geography, technology, and product-grade representativeness |
| allowed_use | LCA of food-grade non-liver fish oil production and downstream food products when species/taxon, anatomical source, route, allocation, geography, period, and market state match the intended use |
| excluded_use | Fish-liver oil; mixtures containing liver oil; shellfish or marine-mammal oil; terrestrial animal fats; chemically modified oils or fatty-acid ethyl esters outside CPC 21525; feed or technical-grade products; comparative assertions without applicable review and equivalent modelling choices |
| required_metadata | PCR id and version; reference UUIDs; species/taxon; anatomical part/material stream; liver-exclusion evidence; wild/farmed status when applicable; crude/refined/fraction state; named/unnamed oil; performed process route; facility geography; reference period; allocation; cut-off; upstream dataset list; CXS applicability; packaging state |
| required_quality_disclosure | Measurement and calibration basis; lot and temporal coverage; mass-balance closure; utility allocation; product-quality methods; co-product and waste classification; direct-emission methods; missing data; proxies; uncertainty; source versions; review status |
| update_trigger | Change in species or anatomical source, inclusion of liver material, raw-material supply system, extraction/refining/fractionation technology, product grade or CXS applicability, allocation basis, packaging state, site, utility mix, emission controls, legal requirements, or a material improvement in foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclasses 21524-21525 and groups 2152/2159, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | CPC product boundary; separation of fish-liver oils; exclusion of chemically modified animal fats and oils |
| `codex-cxs-329-2017` | standard | Codex Alimentarius, CXS 329-2017, Standard for Fish Oils, adopted 2017 and amended 2021 and 2024. https://workspace.fao.org/sites/codex/Standards/CXS%20329-2017/CXS_329e.pdf (retrieved 2026-08-12) | Fish-oil descriptions; crude versus direct-consumption state; named/unnamed oil identity; extraction/refining/fractionation route; product quality, hygiene, and labelling applicability |
| `codex-cxs-211-1999` | standard | Codex Alimentarius, CXS 211-1999, Standard for Named Animal Fats, adopted 1999 and amended through 2024. https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf (retrieved 2026-08-12) | Scope contrast excluding named terrestrial animal fats such as lard and tallow from this fish-oil PCR |
| `eu-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Functional unit, explicit system boundary, company-specific foreground data, inventory completeness, data quality, allocation hierarchy, reporting, and validation |
| `eu-fdm-bat-2019` | official_guidance | Commission Implementing Decision (EU) 2019/2031 of 12 November 2019 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Applicability check: primary fish-oil production is excluded from FDM BAT scope; direct emission and wastewater records must rely on actual site methods and applicable sectoral rules rather than imported FDM values |
