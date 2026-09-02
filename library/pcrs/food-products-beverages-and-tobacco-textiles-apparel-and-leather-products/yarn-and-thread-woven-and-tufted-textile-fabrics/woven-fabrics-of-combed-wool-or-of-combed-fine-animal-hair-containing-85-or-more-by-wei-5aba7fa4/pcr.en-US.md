---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-combed-wool-or-of-combed-fine-animal-hair-containing-85-or-more-by-wei-5aba7fa4
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of combed wool or of combed fine animal hair, containing 85% or more by weight of wool or fine animal hair

## 1. Scope and Applicability

This PCR applies to mill-gate production of woven fabric made from combed wool or combed fine-animal-hair yarn when wool plus fine animal hair accounts for at least 85% of total fibre mass. The foreground begins with receipt of combed yarn and covers preparation for weaving, weaving, any wet finishing performed by the reporting mill, inspection, and optional packaging. Animal husbandry, greasy-wool scouring, top making, spinning, garment manufacture, distribution, use, and end-of-life are outside the foreground boundary. Purchased yarn remains an upstream product input and requires an appropriate upstream dataset.

The rule does not cover carded-wool fabrics, fabrics below the 85% threshold, knitted or crocheted fabrics, pile fabrics, carpets, or made-up textile articles. A producer-specific dataset must declare fibre species and shares, fabric construction, mass per unit area, finishing state, moisture/conditioning basis, geography, reporting period, and whether packaging is included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-combed-wool-or-of-combed-fine-animal-hair-containing-85-or-more-by-wei-5aba7fa4` |
| classification_refs | CPC 3.0 `26530` (exact) |
| covered_products | Woven fabrics of combed wool or combed fine animal hair with wool plus fine animal hair at least 85% by fibre mass |
| excluded_products | Carded-wool fabrics; fabrics below 85%; knitted, crocheted, pile, carpet, and made-up textile products |
| representative_product | Saleable combed-wool or combed-fine-animal-hair woven fabric at the reporting mill gate |
| production_route | Combed yarn receipt; warping and optional warp dressing/sizing; weaving; conditional washing, dyeing or finishing; inspection and optional packaging |
| market_state | Finished product, manufactured; greige or finished condition must be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable woven fabric meeting CPC 3.0 `26530` |
| How much | 1,000 kg net fabric mass at the reporting mill gate, excluding packaging mass |
| How well | Wool plus fine animal hair is at least 85% of total fibre mass after removal of non-fibrous matter; declared construction, mass per area, finish, and quality grade |
| How long or cycle | One continuous 12-month reporting period representative of normal operation |
| reference_flow_link | Mill-gate mass of conforming saleable fabric after inspection |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Woven fabrics of combed wool or of combed fine animal hair, containing 85% or more by weight of wool or fine animal hair `0b5c66df-5a09-41f4-8e09-39c43dd16a76` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dry or declared conditioned mass basis; wool and fine-animal-hair species and fibre shares; identity and share of every other fibre; woven construction; mass per unit area; greige, dyed, washed or otherwise finished state; moisture/conditioning method; quality grade; site and geography; reporting period; packaging inclusion status |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | Reference product and solid material, waste, chemical, and packaging exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize net fabric mass to 1,000 kg; state the moisture/conditioning basis and exclude packaging from the reference mass. |
| `measure_composition` | Product-category threshold | Mass fraction | % by mass | Determine fibre composition after removal of non-fibrous matter; wool plus fine animal hair must be at least 85% of total fibre mass. |
| `measure_electricity` | Electricity exchanges | Energy | kWh | Use site meter or allocation-meter readings; convert only with documented factors. |
| `measure_thermal_energy` | Purchased steam and separately supplied hot water | Energy | MJ | Record delivered useful energy; do not combine steam, hot water, or onsite fuel. |
| `measure_water` | Process water | Volume | m3 | Record intake volume by source and process; do not net off discharged water. |
| `measure_emissions` | Elementary emissions to air or water | Mass | kg | Report each named substance separately as measured load or concentration multiplied by measured discharge volume or stack flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Combed wool yarn, combed fine-animal-hair yarn, and any other declared yarn arrive at the reporting mill ready for warping or weaving preparation |
| starting_condition_role | Purchased or transferred upstream product input |
| product_classification_scope | CPC 3.0 `26530`; wool plus fine animal hair at least 85% of total fibre mass |
| recursive_input_rule | If greige or finished fabric in the same category is purchased, record it once as an external product input at the process where it enters; do not recursively unfold it inside this foreground dataset |
| upstream_dataset_requirement | Use representative upstream datasets for every purchased yarn, fabric, chemical, fuel, utility, and packaging component; disclose geography, technology, and temporal mismatch |
| disclosure | Declare starting yarn state, any outsourced operation, included finishing steps, excluded onsite operation, treatment of internal transfers, and packaging boundary |

| rule_id | Rule |
| --- | --- |
| `sb_gate_to_gate` | Include all onsite preparation, weaving, conditional wet finishing, inspection, internal handling, pollution control, and packaging that contribute to the reference product. |
| `sb_recursive_fabric` | Record a same-category purchased fabric as one external product input and disclose its entry stage; do not unfold it recursively in the same foreground dataset. |
| `sb_upstream_yarn` | Keep husbandry, scouring, top making, and spinning outside the foreground; connect each received yarn to a suitable upstream dataset. |
| `sb_downstream_exclusion` | Exclude garment manufacture, distribution, use, and end-of-life unless a separately declared expanded study boundary is used. |
| `sb_atomic_inventory` | Record each utility, fuel, refrigerant, chemical, packaging component, waste, wastewater substance, and air-emission substance as its own atomic exchange; aggregated carrier or residual placeholders are prohibited. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `weaving` | Yarn preparation and weaving | required | Always | Transform received combed yarn into greige woven fabric | kg greige fabric output |
| `wet_finishing` | Wet finishing | conditional | Include when washing, dyeing, fulling, rinsing, drying, or chemical finishing is performed within the reporting boundary | Transform greige fabric into finished fabric | kg finished fabric output |
| `final_inspection_packaging` | Final inspection and packaging | required | Always; packaging rows apply only when the component is used | Release the saleable reference product | 1,000 kg net reference-product output |

### Process: Yarn preparation and weaving (`weaving`)

#### Inputs

##### Product flows

###### Combed wool yarn (`weaving_combed_wool_yarn`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Combed wool yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed received or issued mass attributable to conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Combed fine animal hair yarn (`weaving_combed_fine_hair_yarn`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Combed fine animal hair yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed received or issued mass; zero only when the declared recipe contains no fine-animal-hair yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `unsd-cpc-3-0-2025`

###### Electricity for warping and weaving (`weaving_electricity`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity attributable to warping, loom operation, local extraction, and internal handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-textiles-bref-2023`

###### Process water for warp sizing (`weaving_process_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water used to prepare warp size; mark not applicable only when no aqueous sizing is performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-textiles-bref-2023`

###### Liquid paraffin warp dressing (`weaving_liquid_paraffin`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Liquid paraffin
- Flow property / unit: Mass / kg
- Amount rule: Issued mass used for wool warp dressing; mark not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Starch sizing agent (`weaving_starch_size`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Starch sizing agent
- Flow property / unit: Mass / kg
- Amount rule: Issued dry-equivalent mass; mark not applicable when this agent is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Polyvinyl alcohol sizing agent (`weaving_pva_size`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Polyvinyl alcohol sizing agent
- Flow property / unit: Mass / kg
- Amount rule: Issued dry-equivalent mass; mark not applicable when this agent is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Synthetic ester loom lubricant (`weaving_loom_lubricant`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Synthetic ester loom lubricant
- Flow property / unit: Mass / kg
- Amount rule: Inventory withdrawal minus documented recovery for loom lubrication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven fabric (`weaving_greige_fabric`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Greige combed wool or fine-animal-hair woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted greige fabric transferred to finishing or final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

###### Waste combed wool yarn (`weaving_waste_wool_yarn`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Waste combed wool yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed wool-yarn ends, loom waste, and rejected wool yarn leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Waste combed fine animal hair yarn (`weaving_waste_fine_hair_yarn`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Waste combed fine animal hair yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed fine-hair-yarn ends and rejects leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Waste greige woven fabric (`weaving_waste_fabric`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Waste greige woven wool or fine-animal-hair fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed selvedge, cuttings, and rejected greige fabric leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iwto-wool-lca-guidelines-2016`

##### Elementary flows

### Process: Wet finishing (`wet_finishing`)

#### Inputs

##### Product flows

###### Greige fabric for wet finishing (`finishing_greige_fabric`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Greige combed wool or fine-animal-hair woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed greige fabric entering included wet-finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `ec-jrc-textiles-bref-2023`

###### Process water for wet finishing (`finishing_process_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered intake to washing, dyeing, rinsing, fulling, and chemical finishing performed onsite
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-textiles-bref-2023`

###### Separately supplied hot water (`finishing_hot_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered heat in hot water when supplied across the process boundary; mark not applicable otherwise
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-textiles-bref-2023`

###### Electricity for wet finishing (`finishing_electricity`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for included wet-finishing, pumping, extraction, and drying equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-textiles-bref-2023`

###### Purchased steam (`finishing_steam`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam energy when purchased across the boundary; mark not applicable otherwise
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-textiles-bref-2023`

###### Natural gas for onsite heat (`finishing_natural_gas`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered lower-heating-value energy burned onsite for included finishing; mark not applicable when no natural gas is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-textiles-bref-2023`

###### Acid dye (`finishing_acid_dye`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Acid dye
- Flow property / unit: Mass / kg
- Amount rule: Issued dry-equivalent mass when acid dyeing is performed; mark not applicable otherwise
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `roos-textile-chemical-inventory-2019`

###### Acetic acid (`finishing_acetic_acid`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Issued pure-substance-equivalent mass when used; mark not applicable otherwise
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `roos-textile-chemical-inventory-2019`

###### Sodium sulfate (`finishing_sodium_sulfate`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Sodium sulfate
- Flow property / unit: Mass / kg
- Amount rule: Issued pure-substance-equivalent mass when used; mark not applicable otherwise
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `roos-textile-chemical-inventory-2019`

###### Nonionic surfactant (`finishing_nonionic_surfactant`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Nonionic surfactant
- Flow property / unit: Mass / kg
- Amount rule: Issued active-substance-equivalent mass when used; mark not applicable otherwise
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `roos-textile-chemical-inventory-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished woven fabric (`finishing_finished_fabric`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Finished combed wool or fine-animal-hair woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted fabric transferred to final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

###### Spent sizing liquor (`finishing_spent_sizing_liquor`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Spent sizing liquor
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-derived liquor sent offsite as waste; exclude liquor discharged as wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Wet-finishing wastewater (`finishing_wastewater`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Wool-fabric wet-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater discharged from included wet-finishing operations before or after treatment as explicitly declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

###### Chemical oxygen demand to water (`finishing_cod_to_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured COD concentration multiplied by measured discharge volume for the declared discharge point
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-textiles-bref-2023`

###### Total nitrogen to water (`finishing_total_nitrogen_to_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured total-nitrogen concentration multiplied by measured discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-textiles-bref-2023`

###### Total phosphorus to water (`finishing_total_phosphorus_to_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured total-phosphorus concentration multiplied by measured discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-textiles-bref-2023`

###### Suspended solids to water (`finishing_suspended_solids_to_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured suspended-solids concentration multiplied by measured discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-textiles-bref-2023`

###### Chloride to water (`finishing_chloride_to_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Chloride, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured chloride concentration multiplied by measured discharge volume when chloride is relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-textiles-bref-2023`

###### Sulfate to water (`finishing_sulfate_to_water`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Sulfate, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured sulfate concentration multiplied by measured discharge volume when sulfate is relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-textiles-bref-2023`

###### Fossil carbon dioxide to air (`finishing_fossil_co2_to_air`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or natural-gas use multiplied by a documented fuel-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

###### Carbon monoxide to air (`finishing_co_to_air`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or fuel use multiplied by a documented applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

###### Nitrogen monoxide to air (`finishing_no_to_air`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or a documented split of measured nitrogen oxides
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

###### Nitrogen dioxide to air (`finishing_no2_to_air`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or a documented split of measured nitrogen oxides
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

###### Sulfur dioxide to air (`finishing_so2_to_air`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or natural-gas use multiplied by a documented sulfur-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

###### Particulate matter below 10 micrometres to air (`finishing_pm10_to_air`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured PM10 stack load from included combustion or drying sources
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

###### Formaldehyde to air (`finishing_formaldehyde_to_air`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Formaldehyde, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load when formaldehyde-containing finishes or thermal treatment make it relevant; mark not applicable only with chemical evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

### Process: Final inspection and packaging (`final_inspection_packaging`)

#### Inputs

##### Product flows

###### Greige fabric for direct sale (`inspection_greige_fabric`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Greige combed wool or fine-animal-hair woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed greige fabric entering final inspection; mark not applicable when wet finishing is included
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality`
- Sources: `ec-jrc-textiles-bref-2023`

###### Finished fabric for inspection (`inspection_finished_fabric`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Finished combed wool or fine-animal-hair woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed finished fabric entering final inspection; mark not applicable when the product is sold greige
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality`
- Sources: `ec-jrc-textiles-bref-2023`

###### Electricity for inspection and packing (`inspection_electricity`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered or submeter-allocated electricity for inspection, rolling, cutting, and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Paper winding core (`packaging_paper_core`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Paper winding core
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-mass-derived paper cores used for the reference product; mark not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Low-density polyethylene wrapping film (`packaging_ldpe_film`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-mass-derived film used for the reference product; mark not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Corrugated cardboard box (`packaging_cardboard_box`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-mass-derived boxes used for the reference product; mark not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iwto-wool-lca-guidelines-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable reference fabric (`reference_product_output`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Woven fabrics of combed wool or of combed fine animal hair, containing 85% or more by weight of wool or fine animal hair `0b5c66df-5a09-41f4-8e09-39c43dd16a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg net conforming fabric after final inspection, excluding packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality`
- Sources: `unsd-cpc-3-0-2025`, `iso-1833-4-2023`, `iso-3801-1977`

##### Waste flows

###### Waste fabric from inspection (`inspection_waste_fabric`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Waste combed wool or fine-animal-hair woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed inspection rejects and cutting losses leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Waste paper winding core (`inspection_waste_paper_core`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Waste paper winding core
- Flow property / unit: Mass / kg
- Amount rule: Weighed paper winding-core waste leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Waste corrugated cardboard box (`inspection_waste_cardboard_box`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Waste corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Weighed corrugated cardboard-box waste leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iwto-wool-lca-guidelines-2016`

###### Waste low-density polyethylene film (`inspection_waste_ldpe_film`)

This card records only the named flow as one atomic exchange. It crosses the stated process boundary in the direction and flow type of its enclosing headings, and its quantity is obtained using the stated rule and collection protocol.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed polyethylene film waste leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iwto-wool-lca-guidelines-2016`

##### Elementary flows

Any actual other fibre within the permitted remainder, fuel, refrigerant, chemical, packaging component, waste, wastewater substance, or air emission not listed above must be added to the producer dataset as one new concrete atomic exchange per identity. It must not be folded into a generic carrier, chemical, packaging, residual, wastewater, or emission row.

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| `alloc_avoid` | First avoid allocation through process subdivision and separate metering for distinct fabric lines, finishing routes, and production periods. |
| `alloc_single_product` | When the foreground produces only the reference fabric and non-product residuals, assign 100% of process inputs and emissions to the reference product before residual treatment credits. |
| `alloc_residuals` | Record yarn waste, fabric waste, spent liquor, wastewater, and packaging waste as outputs. Do not treat them as co-products solely because they are sold or recycled; model any avoided burden only in a separately disclosed downstream scenario. |
| `alloc_unavoidable` | If allocation between multiple saleable textile products cannot be avoided, prefer a documented physical causal parameter such as machine time or mass. Use economic allocation only when physical causality is not defensible, and disclose prices, period, sensitivity, and allocated shares. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `weaving`; `wet_finishing` | yarn and internal fabric inputs | weighbridge, scale, ERP issue, recipe | material identity; supplier; lot; gross and tare mass; fibre composition; process destination | Reconcile received and issued mass by named material and lot | kg | per lot, monthly reconciliation | 12 consecutive months | reporting mill and included outsourced transfer | Sum by atomic material identity; no family-level aggregation | calibrated scale record; invoice; batch ticket; fibre certificate |
| `cp_utility_meters` | all processes | electricity, process water, hot water, steam, natural gas | utility meter and invoice | opening and closing meter; meter multiplier; fuel heating value; submeter assignment | Read dedicated meters; allocate shared meters using documented causal drivers | kWh; m3; MJ | at least monthly | 12 consecutive months | included foreground operations | Sum readings by utility identity and process; preserve separate carriers | meter calibration; bills; meter map; allocation worksheet |
| `cp_chemical_records` | `weaving`; `wet_finishing` | individual sizing, lubricant, dye, acid, salt, surfactant, and other chemicals | batch recipe and inventory record | product identity; CAS where available; concentration; batch issue; return; recovery | Reconcile stock movement and batch recipes; convert commercial products to active or pure equivalent as declared | kg | per batch, monthly reconciliation | 12 consecutive months | included foreground operations | Sum only identical products at the same declared concentration basis | SDS; technical data sheet; recipe; inventory ledger |
| `cp_product_quality` | all processes | greige, finished, and reference fabric | roll inspection and laboratory record | roll mass; length; width; mass per area; fibre shares; moisture basis; grade; rejects | Weigh accepted transfers and test category-defining composition and fabric mass | kg; %; g/m2 | per lot with monthly reconciliation | 12 consecutive months | reporting mill | Sum accepted product by declared construction and finish; retain grade splits | calibrated scale; ISO-method test report; quality release |
| `cp_waste_records` | all processes | each named solid or liquid waste | waste transfer and scale record | waste identity; container tare; mass; destination; treatment; recovery status | Weigh each waste stream or derive mass from volume and measured density | kg | per shipment, monthly reconciliation | 12 consecutive months | included foreground operations | Sum only identical waste identities and destinations | transfer note; scale ticket; contractor receipt |
| `cp_wastewater_monitoring` | `wet_finishing` | wastewater volume and each named water pollutant | discharge meter and laboratory analysis | discharge point; treatment state; volume; sample time; concentration; method; detection limit | Meter discharge volume and analyse representative samples under the applicable permit or BAT monitoring plan | m3; mg/L; kg | continuous or per permit, at least annual for applicable substances | same 12-month production period | every included discharge point | Calculate each substance load separately; do not aggregate pollutants | laboratory accreditation; chain of custody; meter record; permit return |
| `cp_air_emissions` | `wet_finishing` | each named combustion or finishing emission | stack test and fuel record | source; operating hours; stack flow; concentration; fuel amount; factor; oxidation basis | Use stack measurements where required; otherwise calculate from measured fuel with source- and fuel-specific documented factors | kg; Nm3; MJ | per permit and annual reconciliation | same 12-month production period | every included combustion, drying, or curing source | Calculate each substance separately by source, then sum identical substances | stack report; fuel certificate; meter; factor citation |
| `cp_packaging_records` | `final_inspection_packaging` | each packaging component | packaging bill of materials and stock record | component identity; unit mass; units used; purchase and stock records | Weigh representative components and reconcile counts to packed rolls or lots | kg | per packaging specification, monthly reconciliation | 12 consecutive months | reporting mill | Sum each component separately; exclude packaging from reference-product mass | packaging specification; scale record; purchase ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all exchanges | normalized amount = reporting-period exchange amount / reporting-period net conforming product mass × 1,000 kg | exchange total; net reference-product mass | amount per 1,000 kg product | `iwto-wool-lca-guidelines-2016` |
| `calc_composition` | category identity | qualifying share = (dry mass of wool fibre + dry mass of fine animal hair fibre) / total dry fibre mass × 100; qualifying share must be at least 85% | composition test after removal of non-fibrous matter | qualifying fibre mass share | `unsd-cpc-3-0-2025`; `iso-1833-4-2023` |
| `calc_mass_balance` | each process and full foreground | input textile mass = accepted textile output + named textile wastes + measured stock change + documented moisture or sampling adjustment | yarn/fabric input; output; waste; stock; moisture basis | mass-balance residual and reconciliation | `iwto-wool-lca-guidelines-2016` |
| `calc_wastewater_load` | each wastewater substance | load (kg) = concentration (mg/L) × discharge volume (m3) × 10^-3, with flow-weighted averaging when multiple samples represent the period | concentration; volume; sampling coverage | kg of one named substance | `ec-jrc-textiles-bref-2023` |
| `calc_combustion_emissions` | onsite natural-gas combustion | emission (kg) = measured fuel energy × documented applicable emission factor; keep NO and NO2 separate or document the measured NOx split | fuel energy; substance-specific factor or stack result | kg of one named air substance | `ec-jrc-textiles-bref-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | all foreground data | Cover one continuous 12-month period representative of normal operation; primary data should be no more than two years old at study completion. | reporting-period records; production log; abnormal-event disclosure |
| `dq_identity` | materials, chemicals, utilities, wastes, and emissions | Preserve one specific identity per atomic exchange and document supplier/product, concentration basis, destination, or compartment as applicable. | invoices; SDS; flow records; waste notes; monitoring reports |
| `dq_completeness` | process map and inventory | Reconcile the process map to site operations and document all exclusions, zero/not-applicable determinations, outsourced steps, and known data gaps. | site walkthrough; process diagram; completeness checklist |
| `dq_metering` | quantities and calculated emissions | Document calibration, shared-meter allocation, detection limits, sampling coverage, conversion factors, and uncertainty that may affect the result. | calibration certificates; allocation workbook; laboratory report; factor citation |
| `dq_range_status` | all amount fields | No generic amount range or default estimate is supplied by this PCR; use measured site-specific values and do not convert a single facility or case-study value into a range. | range audit; foreground records; source review log |

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| `val_identity` | The reference output must use UUID `0b5c66df-5a09-41f4-8e09-39c43dd16a76`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |
| `val_composition` | Verify from an applicable composition test that wool plus fine animal hair is at least 85% of total fibre mass after removal of non-fibrous matter; reject a dataset below the threshold. |
| `val_reference_mass` | Verify exactly 1,000 kg net conforming fabric output after inspection, on the declared moisture/conditioning basis and excluding packaging mass. |
| `val_process_coverage` | Require `weaving` and `final_inspection_packaging`; require `wet_finishing` when any wet finishing occurs onsite, and disclose every outsourced or excluded operation. |
| `val_atomic_flows` | Reject aggregated selected flows. Every actual utility, fuel, refrigerant, chemical, packaging component, waste, wastewater substance, and air-emission substance must be a separate atomic exchange; unresolved Tiangong identities remain a publication blocker. |
| `val_mass_balance` | Reconcile textile material separately for each process and for the full foreground; investigate and document residuals rather than silently balancing them. |
| `val_wastewater` | When wet processing discharges wastewater, require measured discharge volume and separate applicable substance loads with declared treatment state, sampling coverage, and discharge point. |
| `val_air_emissions` | When onsite combustion, drying, or chemical finishing is present, require each applicable air substance separately and document whether measured or calculated; absence claims require process and chemical evidence. |
| `val_sources` | Reject source claims based only on search snippets or abstracts. Each normative external claim must trace to an official original or full paper; case-study values must not be promoted to generic ranges. |
| `val_translation` | Require identical ordered `process_id`, `row_id`, Tiangong UUID, controlled-enum, source-id, system-boundary rule, allocation-rule, and validation-rule sequences in English and Chinese. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Producer-specific foreground data package for mill-gate production of CPC 3.0 `26530` fabric |
| downstream_use | Construction of LCA process datasets and lifecycle models for declared combed-wool or combed-fine-animal-hair woven fabrics |
| allowed_use | Site- and route-specific product assessment when composition, construction, finish, geography, period, and boundary match |
| excluded_use | Generic defaults for all wool textiles; carded fabrics; below-85% fabrics; knitted, pile, carpet, garment, use-phase, or end-of-life claims without additional rules |
| required_metadata | Required reference-flow qualifiers; process inclusion; supplier and upstream dataset choices; allocation; treatment state; measurement methods; source versions |
| required_quality_disclosure | Primary-data coverage; meter and sampling quality; allocation shares; mass-balance residuals; exclusions; unresolved flow identities; data gaps; absence of generic ranges |
| update_trigger | Material change in fibre recipe, construction, finishing route, energy or water system, pollution control, packaging, production geography, allocation, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *CPC Version 3.0 Explanatory Notes*, 2025, class 26530. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact category scope, 85% threshold, and exclusions by neighbouring classes |
| `iwto-wool-lca-guidelines-2016` | official_guidance | International Wool Textile Organisation, *Guidelines for Conducting a Life Cycle Assessment of the Environmental Performance of Wool Textiles*, April 2016. https://iwto.org/wp-content/uploads/2020/04/IWTO-Guidelines-for-Wool-LCA.pdf | Wool textile route, post-farm inventory, foreground data quality, mass/energy checks, allocation hierarchy, and evidence gap for generic defaults |
| `ec-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Textiles Industry*, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | Warping, sizing, weaving, wet finishing, input/output inventory, monitoring, wastewater, emissions, chemicals, and energy |
| `iso-1833-4-2023` | standard | ISO 1833-4:2023, *Textiles — Quantitative chemical analysis — Part 4: Mixtures of certain protein fibres with certain other fibres*. https://www.iso.org/standard/86273.html | Composition measurement after removal of non-fibrous matter |
| `iso-3801-1977` | standard | ISO 3801:1977, *Textiles — Woven fabrics — Determination of mass per unit length and mass per unit area*. https://www.iso.org/standard/9335.html | Fabric mass and mass-per-area qualifier |
| `roos-textile-chemical-inventory-2019` | literature | Roos et al., “An inventory framework for inclusion of textile chemicals in life cycle assessment,” *The International Journal of Life Cycle Assessment* 24 (2019), 838–847. https://doi.org/10.1007/s11367-018-1537-6 | Chemical-by-chemical inventory and separate emission identities for textile wet processing |
