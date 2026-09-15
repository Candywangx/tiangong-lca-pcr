---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.silver-including-silver-plated-with-gold-or-platinum-unwrought-or-in-semi-manufactured-12dcded9
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Silver (including silver plated with gold or platinum), unwrought or in semi-manufactured forms, or in powder form

## 1. Scope and Applicability

This PCR governs foreground data packages for silver metal supplied at the factory gate in an unwrought form, a semi-manufactured form, or powder form, including silver whose surface is plated with gold or platinum. The declared product form and route determine which conditional processes apply. At least one route process shall be included and the complete chain inside the reporting facility shall be represented.

Included products are refined silver crystals, grain, ingots, bars, billets, sheet, strip, foil, rod, wire, other declared semi-manufactured silver forms, silver powder, and those same silver forms plated with gold or platinum. Excluded products are silver ores and concentrates, silver compounds sold as chemicals, silver paste and other formulated mixtures, finished jewellery or fabricated articles, waste and scrap sold for recovery, and base metals merely clad with silver.

The foreground boundary starts with receipt of the declared silver-bearing feed or purchased silver at the reporting facility and ends with net saleable product at the factory gate. Upstream production of purchased materials and energy shall be represented by linked upstream datasets, not silently included in foreground quantities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.silver-including-silver-plated-with-gold-or-platinum-unwrought-or-in-semi-manufactured-12dcded9 |
| classification_refs | CPC 3.0: 41310 (exact classification context) |
| covered_products | Silver metal in declared unwrought, semi-manufactured, powder, gold-plated-silver, or platinum-plated-silver state |
| excluded_products | Silver ores and concentrates; silver compounds; silver paste or formulated mixtures; finished articles; waste or scrap sold for recovery; base metals clad with silver |
| representative_product | Saleable silver metal product with declared form, purity, coating state, and specification |
| production_route | Declared combination of refining, melting/casting, forming, powder manufacture, and gold or platinum plating |
| market_state | Net saleable factory-gate product, excluding transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a declared silver metal product within this PCR boundary |
| How much | 1 kg net saleable product at the factory gate |
| How well | Meets the declared physical form, silver purity or grade, dimensions or particle-size specification, and gold/platinum plating specification where applicable |
| How long or cycle | One production lot; no use-stage duration is assigned |
| reference_flow_link | `silver_product_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable product |
| Reference product flow | silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; silver mass fraction and analytical basis; alloying constituents; plated or unplated state; gold or platinum coating identity and coating mass fraction when plated; dimensions or particle-size distribution; powder moisture and surface-treatment state; production route; recycled-feed share and accounting method; facility geography; technology; reporting period; factory-gate condition |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The generic Tiangong flow identity does not replace those qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net as-delivered product mass at the factory gate, excluding transport packaging; state the weighing method and moisture correction, if any. |
| `plated_product_mass` | Gold- or platinum-plated silver | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference mass includes the silver substrate and deposited gold or platinum; separately report substrate mass, coating-metal mass, and process losses. |
| `powder_mass_basis` | Silver powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the as-supplied powder mass and disclose moisture, organic surface treatment, and non-silver additives; formulated silver paste is outside scope. |
| `gas_volume_conditions` | Natural gas, oxygen, or nitrogen records | Volume where used | m3 | Preserve measured reference temperature, pressure, and dry/wet basis; convert volumes only with documented conditions and factors. |
| `electricity_conversion` | Alternating current | Energy | kWh | Preserve metered kWh; if an energy dataset requires MJ, use 1 kWh = 3.6 MJ and do not relabel energy as mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Incoming silver-bearing doré, silver scrap for refining, or purchased silver metal at a stated purity, form, ownership, and delivery condition |
| starting_condition_role | Foreground gate at receipt into the reporting facility |
| product_classification_scope | Silver metal products in the semantic boundary above; classification code is context, not canonical identity |
| recursive_input_rule | A silver input already within this PCR category is recorded once as a product input with its upstream dataset; do not recursively recreate its upstream silver-production chain inside the receiving process. |
| upstream_dataset_requirement | Link each purchased silver feed, metal, chemical, fuel, electricity, water, gold, and platinum input to a geographically and technologically representative upstream dataset. |
| disclosure | Declare feed identity and assay, recycled-feed share, included route processes, product form and purity, coating state, facility geography, technologies, allocation method, internal recycling loops, waste destinations, and any excluded on-site activity. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | foreground_system_boundary | Include receipt and preparation of declared feed, every applicable refining, casting, forming, powder, and plating operation, on-site abatement, internal recovery, direct emissions, wastes, and release of net saleable product. | eu-jrc-nfm-bref-2017; eu-jrc-stm-bref-2006 |
| `sb_upstream_links` | purchased_inputs | Exclude upstream production from foreground quantities but require linked upstream datasets for every purchased input and energy carrier. |  |
| `sb_silver_loops` | silver_bearing_returns | Track silver-bearing dust, slag, sludge, electrolyte residue, dross, and process scrap separately; report internal returns without double counting and model exported streams at the actual recovery or treatment boundary. | eu-jrc-nfm-bref-2017 |
| `sb_route_integrity` | conditional_routes | Include only route cards whose stated condition applies, but do not combine different product forms or technologies into one average unless production-weighted records and the averaging rationale are disclosed. | un-cpc-3-0-structure-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `silver_refining` | Silver-bearing feed refining | conditional | Include when doré or silver scrap is refined within the reporting facility. | Foreground purification and precious-metal recovery | kg refined silver output |
| `silver_charge_preparation` | Silver charge preparation | conditional | Include when silver is batched and transferred into on-site melting and casting. | Foreground feed weighing and transfer | kg silver charged |
| `melting_casting` | Silver melting and casting | conditional | Include when silver is melted or cast into grain, ingots, bars, billets, or forming feed. | Foreground thermal conversion and casting | kg cast silver output |
| `semi_manufacturing` | Silver forming | conditional | Include for rolling, extrusion, drawing, or other declared semi-manufacturing. | Foreground shape conversion | kg saleable semi-manufactured silver |
| `powder_manufacturing` | Silver powder manufacture | conditional | Include for gas-atomization or wet-chemical powder production; declare one actual technology. | Foreground powder conversion | kg saleable silver powder |
| `precious_metal_plating` | Gold or platinum plating of silver | conditional | Include only when the saleable silver product is gold-plated or platinum-plated. | Foreground surface treatment | kg saleable plated silver |

### Process: Silver-bearing feed refining (`silver_refining`)

#### Inputs

##### Product flows

###### Silver-bearing doré feed (`dr_dore_feed`)

Record only assayed doré that crosses the refinery gate; include when the doré route applies.

- Selected flow: Silver-bearing doré alloy
- Flow property / unit: Mass / kg
- Amount rule: measured received mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Silver scrap feed (`dr_silver_scrap_feed`)

Record assayed silver scrap accepted as refinery feed; include only for the secondary route.

- Selected flow: Silver scrap for recycling
- Flow property / unit: Mass / kg
- Amount rule: measured received mass by lot, with silver assay recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Refining electricity (`dr_refining_electricity`)

Record alternating current metered to refining, electrolysis, pumps, extraction, and abatement.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption, or allocated facility meter consumption when documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Refining natural gas (`dr_refining_natural_gas`)

Include only gaseous natural gas combusted in refining furnaces or dryers.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Refining oxygen (`dr_refining_oxygen`)

Include industrial oxygen supplied to oxidation, cupellation, or oxy-fuel equipment.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-recorded volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Refining process water (`dr_refining_process_water`)

Record make-up water supplied to electrolysis, washing, leaching, and wet abatement without netting wastewater.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water mass or volume converted with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Nitric acid for refining (`dr_refining_nitric_acid`)

Include as-supplied nitric acid only when the declared leaching or dissolution route uses it; record concentration.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass and active-acid concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Sodium hydroxide for refining and abatement (`dr_refining_sodium_hydroxide`)

Include sodium hydroxide used for treatment, neutralization, or alkaline scrubbing; record solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass and concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined silver output (`dr_refined_silver`)

Record net refined silver leaving this process for sale or downstream foreground conversion.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured dry saleable or transferred mass after deducting internal returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

##### Waste flows

###### Refining slag (`dr_refining_slag`)

Record slag leaving refining after internal precious-metal recovery; disclose assay and destination.

- Selected flow: slag `d7184b4f-1fa2-4f86-b004-3b1e9752f060`
- Flow property / unit: Mass / kg
- Amount rule: measured outbound mass after internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Refining wastewater (`dr_refining_wastewater`)

Record wastewater transferred to on-site or external treatment; disclose dissolved metals and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured discharged mass or volume converted with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

##### Elementary flows

###### Fossil carbon dioxide from refining (`dr_refining_fossil_co2`)

Report direct fossil carbon dioxide from on-site fuel or carbon-bearing reductant use; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured fossil carbon oxidation using `calc_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refining_records`
- Sources:

###### Particulate matter from refining (`dr_refining_particulate`)

Record post-abatement particulate matter emitted directly to air with particle size unspecified.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated from monitored concentration and dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

###### Nitrogen oxides from refining (`dr_refining_nox`)

Record post-abatement nitrogen oxides emitted directly to air on the facility reporting basis.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated from monitored concentration and dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refining_records`
- Sources: eu-jrc-nfm-bref-2017

### Process: Silver charge preparation (`silver_charge_preparation`)

#### Inputs

##### Product flows

###### Silver feed to melting (`mc_silver_feed`)

Record silver transferred or purchased for melting, preserving upstream dataset linkage.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-nfm-bref-2017

### Process: Silver forming (`semi_manufacturing`)

#### Inputs

##### Product flows

###### Silver feed to forming (`sm_silver_feed`)

Record silver billet, bar, grain, or other declared feed entering rolling, extrusion, or drawing.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable semi-manufactured silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: eu-jrc-nfm-bref-2017

###### Forming electricity (`sm_electricity`)

Record alternating current used by forming, annealing, finishing, extraction, and ancillary equipment.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or documented allocated meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable semi-manufactured silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: eu-jrc-nfm-bref-2017

###### Forming lubricating oil (`sm_lubricating_oil`)

Include purchased lubricating oil that is consumed or leaves with waste; record grade and recirculation.

- Selected flow: Lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: inventory balance of make-up oil
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable semi-manufactured silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Semi-manufactured silver output (`sm_silver_product`)

Record one declared saleable sheet, strip, foil, rod, wire, or other semi-manufactured form.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable semi-manufactured silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: eu-jrc-nfm-bref-2017

##### Waste flows

###### Silver-bearing forming scrap (`sm_silver_scrap`)

Record solid offcuts, trimmings, or rejected formed silver leaving the process; internal returns remain in the mass balance without double counting.

- Selected flow: Silver-bearing process scrap
- Flow property / unit: Mass / kg
- Amount rule: measured outbound mass after internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable semi-manufactured silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources:

##### Elementary flows

### Process: Silver powder manufacture (`powder_manufacturing`)

#### Inputs

##### Product flows

###### Silver feed to powder production (`pw_silver_feed`)

Record silver metal entering the declared powder technology.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_records`
- Sources: eu-jrc-nfm-bref-2017

###### Powder-production electricity (`pw_electricity`)

Record alternating current used by atomization or wet processing, drying, classification, ventilation, and abatement.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or documented allocated meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_records`
- Sources: eu-jrc-nfm-bref-2017

###### Gaseous nitrogen for powder atomization (`pw_nitrogen_gas`)

Include gaseous nitrogen only when the declared atomization or inerting technology consumes it.

- Selected flow: Gaseous nitrogen
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-recorded volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_records`
- Sources:

###### Process water for wet powder production (`pw_process_water`)

Include make-up water only when the declared wet-chemical powder route uses it.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water mass or volume converted with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_records`
- Sources: eu-jrc-nfm-bref-2017

###### Nitric acid for wet powder production (`pw_nitric_acid`)

Include as-supplied nitric acid only when the declared dissolution or precipitation route uses it; record concentration.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass and active-acid concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_records`
- Sources: eu-jrc-nfm-bref-2017

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Silver powder output (`pw_silver_powder`)

Record net saleable silver powder and declare particle-size distribution, moisture, purity, and surface treatment.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming powder mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_records`
- Sources: un-cpc-3-0-structure-2025

##### Waste flows

###### Powder-production wastewater (`pw_wastewater`)

Include wastewater only for a wet route; disclose dissolved silver, treatment, and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured discharged mass or volume converted with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_records`
- Sources: eu-jrc-nfm-bref-2017

##### Elementary flows

###### Nitrogen oxides from wet powder production (`pw_nox`)

Include post-abatement nitrogen oxides only when nitric-acid processing generates a direct air emission.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated from monitored concentration and dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable silver powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_powder_records`
- Sources: eu-jrc-nfm-bref-2017

### Process: Gold or platinum plating of silver (`precious_metal_plating`)

#### Inputs

##### Product flows

###### Silver substrate for plating (`pl_silver_substrate`)

Record the cleaned silver substrate entering the plating line.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured substrate mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plating_records`
- Sources: eu-jrc-stm-bref-2006

###### Gold deposited on silver (`pl_gold_input`)

Include only for gold plating; quantify the net gold entering the product plus measured gold losses from all supplied gold-bearing materials.

- Selected flow: Gold `4ceb691b-15cf-4775-b55e-06a0370973a7`
- Flow property / unit: Mass / kg
- Amount rule: calculated gold mass balance from bath replenishment, inventory change, recovered gold, waste, and coating assay
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable gold-plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plating_records`
- Sources: eu-jrc-stm-bref-2006

###### Platinum deposited on silver (`pl_platinum_input`)

Include only for platinum plating; quantify the net platinum entering the product plus measured platinum losses from all supplied platinum-bearing materials.

- Selected flow: Platinum
- Flow property / unit: Mass / kg
- Amount rule: calculated platinum mass balance from bath replenishment, inventory change, recovered platinum, waste, and coating assay
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable platinum-plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plating_records`
- Sources: eu-jrc-stm-bref-2006

###### Plating electricity (`pl_electricity`)

Record alternating current used by electrochemical treatment, pumps, heating, drying, ventilation, and abatement.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or documented allocated meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plating_records`
- Sources: eu-jrc-stm-bref-2006

###### Plating process water (`pl_process_water`)

Record make-up water supplied to pretreatment, baths, rinsing, and abatement without netting wastewater.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water mass or volume converted with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plating_records`
- Sources: eu-jrc-stm-bref-2006

###### Sodium hydroxide for plating and abatement (`pl_sodium_hydroxide`)

Include sodium hydroxide used in cleaning, pH control, or wastewater and exhaust treatment; record concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass and concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg saleable plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plating_records`
- Sources: eu-jrc-stm-bref-2006

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Plated silver output (`pl_plated_silver`)

Record net saleable gold-plated or platinum-plated silver and declare exactly one coating metal and specification.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured total product mass with substrate and coating masses reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plating_records`
- Sources: un-cpc-3-0-structure-2025; eu-jrc-stm-bref-2006

##### Waste flows

###### Plating wastewater (`pl_wastewater`)

Record wastewater transferred to treatment; disclose gold, platinum, silver, cyanide where relevant, and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured discharged mass or volume converted with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable plated silver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plating_records`
- Sources: eu-jrc-stm-bref-2006

##### Elementary flows

### Process: Silver melting and casting (`melting_casting`)

#### Inputs

##### Product flows

###### Casting electricity (`mc_electricity`)

Record alternating current used by melting, holding, casting, extraction, and abatement equipment.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or documented allocated meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-nfm-bref-2017

###### Casting natural gas (`mc_natural_gas`)

Include only gaseous natural gas combusted in melting or holding furnaces.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-nfm-bref-2017

###### Casting oxygen (`mc_oxygen`)

Include industrial oxygen only for an oxy-fuel or oxidation step in the declared casting route.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-recorded volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-nfm-bref-2017

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cast silver output (`mc_cast_silver`)

Record net silver grain, ingot, bar, or billet; declare exactly one output form in the dataset.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass / kg
- Amount rule: measured net cast product mass after internal returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-nfm-bref-2017

##### Waste flows

###### Casting slag (`mc_slag`)

Record slag or dross leaving casting after internal silver recovery; disclose assay and destination.

- Selected flow: slag `d7184b4f-1fa2-4f86-b004-3b1e9752f060`
- Flow property / unit: Mass / kg
- Amount rule: measured outbound mass after internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-nfm-bref-2017

##### Elementary flows

###### Fossil carbon dioxide from casting (`mc_fossil_co2`)

Report direct fossil carbon dioxide from on-site casting fuel; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured fossil carbon oxidation using `calc_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_casting_records`
- Sources:

###### Particulate matter from casting (`mc_particulate`)

Record post-abatement particulate matter emitted directly to air with particle size unspecified.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated from monitored concentration and dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast silver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-nfm-bref-2017

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | foreground_processes | Avoid allocation by separately metering refining, casting, forming, powder, plating, abatement, and internal recovery operations whenever their inputs and outputs can be measured. |  |
| `alloc_internal_returns` | internal_silver_loops | Treat internal silver-bearing returns as transfers within the foreground system: record their mass and recovery losses, but do not create a second burden-bearing product output. | eu-jrc-nfm-bref-2017 |
| `alloc_multi_metal` | inseparable_precious_metal_outputs | When subdivision or a documented physical causal relation is unavailable, allocate shared burdens among saleable silver, gold, and platinum-group outputs using production-period net revenue; disclose prices, period, currency, downstream deductions, and a mass-allocation sensitivity result. | eu-jrc-nfm-bref-2017 |
| `alloc_waste_recovery` | exported_residues | Classify an exported stream as a co-product only when it meets the receiving market's product specification and has positive net revenue; otherwise model it as waste to the documented treatment or recovery boundary. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_refining_records` | `silver_refining` | all refining exchanges | meter, weighbridge, assay, batch, invoice, and stack records | lot id; feed mass and assay; utilities; reagents; product; residues; wastewater; stack data | reconcile batches to calibrated meters and assays | native units per kg refined silver | each lot or shift, monthly aggregation | 12 representative months or full shorter campaign | refinery and its abatement | sum valid records, subtract internal returns, divide by net output | calibration, assay, coverage, missing-data log, mass balance |
| `cp_casting_records` | `melting_casting` | all casting exchanges | batch, meter, scale, fuel, and stack records | heat id; charge; utilities; product; slag; carbon; stack data | reconcile heat sheets to meters and scales | native units per kg cast silver | each heat, monthly aggregation | 12 representative months or full shorter campaign | melting, casting, extraction, and abatement | sum valid heats divided by net cast output | calibration, heat reconciliation, assay, monitoring QA |
| `cp_forming_records` | `semi_manufacturing` | forming exchanges | order, meter, scale, and inventory records | order; form; input; output; scrap; electricity; lubricant stocks | reconcile orders and inventories | kg and kWh per kg product | each order, monthly aggregation | 12 representative months or full shorter campaign | declared forming and ancillary equipment | production-weighted sum divided by net output | calibration, stock reconciliation, reject log |
| `cp_powder_records` | `powder_manufacturing` | powder exchanges | batch, meter, scale, laboratory, and stack records | technology; feed; utilities; reagents; powder; particle size; moisture; wastewater; stack data | reconcile batches, meters, scales, laboratory and abatement records | native units per kg powder | each batch, monthly aggregation | 12 representative months or full shorter campaign | declared powder technology and abatement | keep atomization and wet routes separate unless disclosed production weighting is used | calibration, assay, particle-size and moisture methods, mass balance |
| `cp_plating_records` | `precious_metal_plating` | plating exchanges | order, bath, meter, scale, assay, and wastewater records | order; coating metal; substrate; bath additions and inventory; recovery; coating assay; utilities; product; wastewater | reconcile order and bath metal balances to coating assay | native units per kg plated silver | each order and bath addition, monthly aggregation | 12 representative months or full shorter campaign | pretreatment through treatment | calculate deposited and lost coating metal separately, divide by net output | calibration, bath reconciliation, coating assay, wastewater analysis |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_output` | every inventory row | normalized amount = valid reporting-period exchange divided by net conforming process output; preserve original unit and conversion record | exchange quantity; net process output | amount per kg process output |  |
| `calc_silver_balance` | each silver process | silver in feed = silver in products + silver in exported residues/wastes + measured silver emissions + inventory change; report unexplained imbalance | masses and assays; opening and closing work in process | silver mass balance and closure | eu-jrc-nfm-bref-2017 |
| `calc_fossil_co2` | direct fossil carbon oxidation | fossil CO2 mass = fully oxidized fossil carbon mass × 44/12; quantify incomplete oxidation separately when material | fuel or reductant; fossil carbon fraction; oxidation fraction | kg fossil CO2 |  |
| `calc_stack_mass` | particulate matter and nitrogen oxides | emitted mass = time-aligned post-abatement concentration × dry gas volume, with documented reference-condition and oxygen corrections | concentration; gas flow; operating time; corrections | kg emitted pollutant | eu-jrc-nfm-bref-2017 |
| `calc_plating_metal` | gold or platinum plating | coating-metal input = supplied metal content + opening bath inventory - closing bath inventory; reconcile deposit, recovery, waste, drag-out, and unexplained loss | bath additions and assays; inventories; coating assay; recovery and waste | kg gold or platinum by destination | eu-jrc-stm-bref-2006 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Declare form, assay basis, purity, coating state, feed origin, route, technology, geography, and period; keep UUID-empty rows visibly unresolved. | specifications, assays, supplier records, process declaration |
| `dq_temporal` | foreground data | Use 12 representative continuous months where production is continuous; for shorter campaigns, cover the full campaign and explain representativeness. | dated production, meter, and maintenance records |
| `dq_completeness` | process inventory | Reconcile at least 95% of operating time and production mass; disclose exclusions, estimates, downtime, and missing records. | coverage calculation and missing-data log |
| `dq_mass_balance` | silver and coating metals | Investigate and disclose material unexplained metal imbalance; do not force closure by altering measured quantities. | signed reconciliation and assay uncertainty |
| `dq_route_separation` | powder and plating routes | Keep atomization, wet-chemical powder, gold-plating, and platinum-plating records separate unless production-weighted aggregation is required and components remain disclosed. | route-level production and allocation worksheet |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | reference_product | Confirm exactly 1 kg net saleable product and declared form, purity, plating state, dimensions or particle size, route, geography, and period. | un-cpc-3-0-structure-2025 |
| `val_route_processes` | process_map | Confirm every applicable facility process has detailed inventory and each conditional row appears only when its route condition applies. | eu-jrc-nfm-bref-2017; eu-jrc-stm-bref-2006 |
| `val_atomic_inventory` | process_inventory | Confirm each row is one atomic exchange, every UUID matches flow type/property/unit, and each UUID-empty row remains unresolved rather than proxied. |  |
| `val_metal_balance` | silver_gold_platinum_balances | Recompute silver and applicable coating-metal balances, report closure and uncertainty, and investigate unexplained differences. | eu-jrc-nfm-bref-2017; eu-jrc-stm-bref-2006 |
| `val_no_double_counting` | internal_recovery_and_upstream | Confirm internal returns carry no duplicate product burden and upstream electricity emissions are not direct foreground emissions. |  |
| `val_ranges` | quantitative_ranges | Reject externally inferred ranges unless two independent original sources have compatible boundary, unit, product state, geography, and technology; unresolved needs remain collection requirements. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a route-declared silver product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Factory-gate silver models matching declared form, route, purity, coating state, geography, technology, and period |
| excluded_use | Ore extraction without mining data; silver chemicals or paste; finished articles; undisclosed incompatible-route averages; plated product without coating-metal balance |
| required_metadata | PCR id/version; product form/specification; silver assay; coating metal/mass; feed origin/recycled share; process ids; geography; technology; period; allocation; upstream links; waste destinations; unresolved UUIDs |
| required_quality_disclosure | meter and assay coverage; temporal representativeness; mass-balance closure and uncertainty; missing data and estimates; route aggregation; source and range limitations |
| update_trigger | Change in form, purity, coating, feed mix, recycled share, route, technology, energy supply, abatement, allocation, geography, or evidence resolving UUID/range needs |

## 11. Data Sources

| Source id | Type | Reference | Used for | independence_key |
| --- | --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | CPC 41310 English identity and product-form boundary | un-cpc-version-3-0-structure-2025 |
| `china-mof-research-goods-list-2026` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, research-goods list using 2026 tariff headings. https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf (retrieved 2026-09-04) | Verified Chinese product-boundary terminology | china-mof-2026-research-goods-list |
| `eu-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission JRC, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, JRC107041, 2017. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC107041/kjna28648enn.pdf (retrieved 2026-09-04) | Silver feed, refining, electrolysis, melting, casting, recovery, utilities, residues, and emissions | eu-jrc-nfm-bref-jrc107041 |
| `eu-jrc-stm-bref-2006` | Official guidance (`official_guidance`) | European Commission, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-04) | Plating pretreatment, processing, rinsing, drying, energy, water, materials, wastewater, and waste | eu-jrc-stm-bref-2006 |
