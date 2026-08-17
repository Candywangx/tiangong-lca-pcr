---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-waxes-other-than-triglycerides-whether-or-not-refined-or-coloured
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Vegetable waxes (other than triglycerides), whether or not refined or coloured

## 1. Scope and Applicability

This candidate PCR governs foreground data packages for CPC 21931 vegetable waxes that are not triglycerides, including a specifically declared carnauba, candelilla or rice bran wax route when the actual product and evidence match that identity. The dataset must lock one botanical source, one extraction or purchased-crude-wax starting condition, one refinement state, one colour state and one physical form before any aggregation.

It covers source-material receiving within the declared gate, botanical wax recovery when performed at the reporting site, route-specific extraction, clarification, filtration, conditional bleaching or acid refinement, forming, packaging, cleaning, and conditional on-site wastewater treatment. It excludes triglyceride oils and fats, animal waxes, mineral or petroleum waxes, synthetic waxes, degras, residues resulting from treatment of fatty substances or waxes, cultivation or wild-harvest operations before the receiving gate, inbound transportation, distribution, use and end-of-life. A botanical wax identity not named here requires a reviewed PCR update with route evidence; it must not be recorded under a generic fallback exchange.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-waxes-other-than-triglycerides-whether-or-not-refined-or-coloured` |
| classification_refs | CPC 3.0 `21931`, exact |
| covered_products | Vegetable waxes other than triglycerides, whether crude, refined or coloured, limited in this authored route set to specifically declared carnauba wax, candelilla wax or rice bran wax |
| excluded_products | Triglyceride oils and fats; animal, mineral, petroleum and synthetic waxes; degras; treatment residues under CPC 21932; mixtures without separately traceable botanical identities |
| representative_product | One named botanical wax with a declared refined state, colour state and physical form |
| production_route | One locked route: carnauba leaf mechanical recovery with optional declared solvent extraction; candelilla acidified-water extraction; rice-bran-wax recovery by one declared technology; or refining/forming of one purchased crude botanical wax |
| market_state | Net conforming bulk or packaged botanical wax at the reporting-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming CPC 21931 vegetable wax of one declared botanical identity |
| How much | 1 kg net product mass, excluding all packaging |
| How well | Meets the declared customer or regulatory specification for identity, refined state, colour state, purity, moisture, physical form and release status |
| How long or cycle | One completed reporting batch or campaign at the reporting-site gate; no service life is assigned |
| reference_flow_link | Tiangong Product flow `1933406f-ca56-4672-9678-ae3925128a03` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Vegetable waxes (other than triglycerides), whether or not refined or coloured `1933406f-ca56-4672-9678-ae3925128a03` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical source; scientific or supplier identity; extraction or purchased-crude starting condition; exact route; refined state; colour state; physical form; grade/specification; net mass and moisture basis; production site; reporting period; packaging excluded from reference mass |

When constructing a foreground data package, every required qualifier must be declared in metadata, process notes, the reference-flow comment, product description or an equivalent field. Missing qualifiers make the reference flow incomplete and prohibit aggregation with a differently sourced or differently processed wax.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net conforming wax; subtract primary, secondary and tertiary packaging mass. |
| `mass_balance` | every wax transformation | Mass | kg | Reconcile named feedstocks, intermediate wax, conforming wax, botanical residues, filter residues, off-spec wax and wax retained in spent media for the same batch and moisture basis. |
| `utility_measurement` | each process utility | Energy or volume | kWh, MJ or m3 | Record grid electricity, purchased saturated steam, purchased hot water and each fuel from separate meters, invoices or documented allocations; never enter one combined thermal-energy amount. |
| `chemical_active_basis` | acids, oxidants, cleaners, disinfectants and treatment agents | Mass | kg | Record supplied mass and concentration and calculate active-substance mass where required without substituting one chemical for another. |
| `solvent_balance` | each named solvent | Mass | kg | Reconcile fresh solvent, recovered solvent, product carry-over, residue carry-over and release to air for each chemical identity independently. |
| `refrigerant_balance` | each named refrigerant | Mass | kg | Determine make-up and release separately for R717, R744 and R404A from equipment-specific inventory and service records. |
| `wastewater_load` | each named effluent parameter | Mass | kg | Calculate load from matched concentration and treated-water volume for the same monitoring period; do not enter a grouped pollutant load. |

## 5. System Boundary

The foreground starts at receipt of one declared source material or purchased crude botanical wax. When leaf, stalk or oil production occurs upstream, link supplier-specific upstream datasets without pulling those operations into the reporting-site foreground. The foreground ends at release of 1 kg net conforming wax, with packaging inventoried separately.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One of: accepted carnauba palm leaves; accepted dried candelilla stalks; accepted crude rice bran oil; accepted crude carnauba wax; accepted crude candelilla wax; accepted crude rice bran wax |
| starting_condition_role | Declared foreground gate and route lock |
| product_classification_scope | CPC 21931 only; excludes triglycerides and CPC 21932 degras or treatment residues |
| recursive_input_rule | A purchased crude wax within CPC 21931 remains an explicit product input linked to a separate upstream dataset; do not recursively expand it inside the same process or net it against the output. |
| upstream_dataset_requirement | Supplier- or region-specific data for botanical production, harvest, source-material processing and inbound transport outside the foreground gate |
| disclosure | Disclose botanical source, starting condition, route, each conditional operation, refined and colour state, product form, allocation decisions, excluded stages, wastewater destination and every unresolved Tiangong flow UUID. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_material_receiving` | Source-material receiving and route lock | `required` | Include for every dataset; declare exactly one botanical wax source, one production route, one product form and one refined/coloured state before aggregation. | `foreground_gate` | Accepted route-specific source material |
| `carnauba_mechanical_recovery` | Carnauba leaf drying, powder recovery and crude-wax melting | `conditional` | Include only for a declared carnauba leaf-extraction route. | `foreground_transformation` | Crude carnauba wax |
| `candelilla_hot_water_extraction` | Candelilla acidified-water extraction and filter pressing | `conditional` | Include only for the declared acidified-water candelilla route. | `foreground_transformation` | Crude candelilla wax |
| `rice_bran_wax_recovery` | Rice-bran-wax recovery | `conditional` | Include only for a declared dry, wet, solvent-winterization, high-temperature n-hexane, or supercritical-carbon-dioxide rice-bran route; lock one technology in the dataset. | `foreground_transformation` | Crude rice bran wax |
| `carnauba_solvent_extraction` | Carnauba wax-powder solvent extraction | `conditional` | Include only for a legally compliant declared carnauba solvent-extraction route; select the one actually used solvent card and keep every unused solvent absent. | `foreground_transformation` | Solvent-extracted crude carnauba wax |
| `melting_clarification_filtration` | Wax melting, clarification and filtration | `conditional` | Include when the declared botanical wax is melted, clarified or filtered before release or further refinement. | `foreground_transformation` | Clarified botanical wax |
| `bleaching_acid_refinement` | Botanical-wax bleaching and acid refinement | `conditional` | Include only when the locked product specification requires hydrogen-peroxide bleaching, sulfuric-acid treatment, activated-clay treatment, or a documented combination; each actual treatment remains an individual card. | `foreground_transformation` | Refined botanical wax |
| `forming_cooling` | Wax forming and cooling | `conditional` | Include when bulk wax is remelted, flaked, slabbed or otherwise formed at the reporting site; lock one botanical identity and one actual product form. | `foreground_transformation` | Formed botanical wax |
| `packaging_release` | Packaging, quality release and reference-product normalization | `required` | Include for every dataset; use only the packaging components actually crossing the boundary and normalize net conforming wax mass without packaging. | `foreground_reference_output` | 1 kg net conforming CPC 21931 vegetable wax |
| `cleaning_sanitation` | Equipment cleaning and sanitation | `conditional` | Include when cleaning or sanitation is performed within the reporting boundary; record each actual cleaning agent, disinfectant and utility separately. | `foreground_support` | Cleaned production equipment |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include only when one or more listed wastewater streams are treated on site; record each received stream, treatment chemical, residual and released pollutant independently. | `foreground_treatment` | Treated wastewater |

### Process: Source-material receiving and route lock (`source_material_receiving`)

#### Inputs

##### Product flows

###### Carnauba palm leaves received (`recv_carnauba_leaves`)

Carnauba palm leaves enters this unit process as one separately recorded exchange. Use only for a carnauba leaf-extraction dataset and record moisture or drying condition.

- Selected flow: Carnauba palm leaves
- Flow property / unit: Mass / kg
- Amount rule: weighed mass of carnauba palm leaves accepted at the receiving scale
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `usda-ams-carnauba-wax-2014`, `fao-nwfp-diversification-2009`

###### Dried candelilla stalks received (`recv_candelilla_stalks`)

Dried candelilla stalks enters this unit process as one separately recorded exchange. Use only for an acidified-water or declared solvent candelilla route.

- Selected flow: Dried candelilla stalks
- Flow property / unit: Mass / kg
- Amount rule: weighed mass of dried candelilla stalks accepted at the receiving scale
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `fao-jecfa-candelilla-wax-2005`, `fao-nwfp-diversification-2009`

###### Crude rice bran oil received (`recv_crude_rice_bran_oil`)

Crude rice bran oil enters this unit process as one separately recorded exchange. Use only where wax is recovered from an oil feed and disclose the oil composition basis.

- Selected flow: Crude rice bran oil
- Flow property / unit: Mass / kg
- Amount rule: weighed mass of crude rice bran oil accepted for the declared winterization route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `usda-nifa-rice-bran-wax-0209429`, `us-fda-grn-720-rice-bran-wax`

###### Purchased crude carnauba wax received (`recv_crude_carnauba_wax`)

Crude carnauba wax enters this unit process as one separately recorded exchange. Use only when extraction is outside the foreground and supplier upstream data are linked.

- Selected flow: Crude carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed mass of purchased crude carnauba wax accepted for refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `usda-ams-carnauba-wax-2014`

###### Purchased crude candelilla wax received (`recv_crude_candelilla_wax`)

Crude candelilla wax enters this unit process as one separately recorded exchange. Use only when stalk extraction is outside the foreground and supplier upstream data are linked.

- Selected flow: Crude candelilla wax
- Flow property / unit: Mass / kg
- Amount rule: weighed mass of purchased crude candelilla wax accepted for refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Purchased crude rice bran wax received (`recv_crude_rice_bran_wax`)

Crude rice bran wax enters this unit process as one separately recorded exchange. Use only when recovery from rice bran oil is outside the foreground and supplier upstream data are linked.

- Selected flow: Crude rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed mass of purchased crude rice bran wax accepted for refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `us-fda-grn-720-rice-bran-wax`

###### Receiving grid electricity (`recv_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep receiving electricity separate from later extraction and refining electricity.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity used by receiving, inspection and internal handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

###### Receiving diesel (`recv_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Record only when diesel equipment is actually used.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for diesel-powered receiving equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `jrc-fdm-bref-2019`

###### Receiving LPG (`recv_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Record only when LPG equipment is actually used.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for LPG-powered receiving equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Accepted carnauba palm leaves (`accepted_carnauba_leaves`)

Accepted carnauba palm leaves leaves this unit process as one separately recorded exchange. Link only to the carnauba route.

- Selected flow: Accepted carnauba palm leaves
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted carnauba palm leaves transferred to mechanical recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `usda-ams-carnauba-wax-2014`

###### Accepted dried candelilla stalks (`accepted_candelilla_stalks`)

Accepted dried candelilla stalks leaves this unit process as one separately recorded exchange. Link only to the candelilla route.

- Selected flow: Accepted dried candelilla stalks
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted dried candelilla stalks transferred to hot-water extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Accepted crude rice bran oil (`accepted_crude_rice_bran_oil`)

Accepted crude rice bran oil leaves this unit process as one separately recorded exchange. Link only to the rice-bran-wax recovery route.

- Selected flow: Accepted crude rice bran oil
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted crude rice bran oil transferred to wax recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `usda-nifa-rice-bran-wax-0209429`

###### Accepted crude carnauba wax (`accepted_crude_carnauba_wax`)

Accepted crude carnauba wax leaves this unit process as one separately recorded exchange. Record as a separate botanical identity.

- Selected flow: Accepted crude carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted crude carnauba wax transferred to refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `usda-ams-carnauba-wax-2014`

###### Accepted crude candelilla wax (`accepted_crude_candelilla_wax`)

Accepted crude candelilla wax leaves this unit process as one separately recorded exchange. Record as a separate botanical identity.

- Selected flow: Accepted crude candelilla wax
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted crude candelilla wax transferred to refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Accepted crude rice bran wax (`accepted_crude_rice_bran_wax`)

Accepted crude rice bran wax leaves this unit process as one separately recorded exchange. Record as a separate botanical identity.

- Selected flow: Accepted crude rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted crude rice bran wax transferred to refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `us-fda-grn-720-rice-bran-wax`

##### Waste flows

###### Rejected carnauba palm leaves (`rejected_carnauba_leaves`)

Rejected carnauba palm leaves leaves this unit process as one separately recorded exchange. Do not combine with candelilla or rice-bran residues.

- Selected flow: Rejected carnauba palm leaves
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected carnauba palm leaves sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `eu-pef-2021-2279`

###### Rejected dried candelilla stalks (`rejected_candelilla_stalks`)

Rejected dried candelilla stalks leaves this unit process as one separately recorded exchange. Retain its botanical identity.

- Selected flow: Rejected dried candelilla stalks
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected dried candelilla stalks sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `eu-pef-2021-2279`

###### Rejected crude rice bran oil (`rejected_rice_bran_oil`)

Rejected crude rice bran oil leaves this unit process as one separately recorded exchange. Do not classify this oil as vegetable wax output.

- Selected flow: Rejected crude rice bran oil
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected crude rice bran oil sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_receiving`
- Sources: `un-cpc-3-0-2025`, `eu-pef-2021-2279`

##### Elementary flows

No elementary flow is prescribed for this direction.

### Process: Carnauba leaf drying, powder recovery and crude-wax melting (`carnauba_mechanical_recovery`)

#### Inputs

##### Product flows

###### Accepted carnauba leaves (`carnauba_leaves_input`)

Accepted carnauba palm leaves enters this unit process as one separately recorded exchange. Record the leaf condition and batch identity.

- Selected flow: Accepted carnauba palm leaves
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted leaf mass charged to drying and beating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `usda-ams-carnauba-wax-2014`, `fao-nwfp-diversification-2009`

###### Carnauba melting water (`carnauba_process_water`)

Process water enters this unit process as one separately recorded exchange. Exclude cleaning water recorded in the cleaning process.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water charged to carnauba wax melting or washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba recovery grid electricity (`carnauba_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep this stage meter separate from refining.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for drying fans, beating, scraping, pumping and straining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `usda-ams-carnauba-wax-2014`, `jrc-fdm-bref-2019`

###### Carnauba purchased saturated steam (`carnauba_purchased_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when steam is purchased across the process boundary.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to carnauba melting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba purchased hot water (`carnauba_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Do not combine with steam or fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water to carnauba melting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba recovery natural gas (`carnauba_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only for actual natural-gas use.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for direct or boiler heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `jrc-fdm-bref-2019`

###### Carnauba recovery diesel (`carnauba_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Record separately from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for diesel heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `jrc-fdm-bref-2019`

###### Carnauba recovery LPG (`carnauba_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Record separately from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for LPG heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Crude carnauba wax (`crude_carnauba_wax_output`)

Crude carnauba wax leaves this unit process as one separately recorded exchange. Transfer this botanical wax separately to refining or forming.

- Selected flow: Crude carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed crude carnauba wax recovered after melting, straining and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `usda-ams-carnauba-wax-2014`, `fao-nwfp-diversification-2009`

###### Carnauba wax powder (`carnauba_wax_powder_output`)

Carnauba wax powder leaves this unit process as one separately recorded exchange. Use only when the powder is not first melted into crude wax.

- Selected flow: Carnauba wax powder
- Flow property / unit: Mass / kg
- Amount rule: weighed wax powder recovered after leaf beating or scraping and routed to declared solvent extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `usda-ams-carnauba-wax-2014`

##### Waste flows

###### Spent carnauba leaves (`carnauba_spent_leaves`)

Spent carnauba palm leaves leaves this unit process as one separately recorded exchange. Record its treatment destination separately.

- Selected flow: Spent carnauba palm leaves
- Flow property / unit: Mass / kg
- Amount rule: weighed dry leaf residue leaving powder recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `fao-nwfp-diversification-2009`

###### Carnauba recovery wastewater (`carnauba_process_wastewater`)

Carnauba wax recovery wastewater leaves this unit process as one separately recorded exchange. Do not combine with cleaning wastewater.

- Selected flow: Carnauba wax recovery wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater from melting, straining or washing discharged to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Carnauba combustion fossil carbon dioxide (`carnauba_fossil_co2`)

Carbon dioxide, fossil, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently; do not enter a grouped combustion-emission value.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Carnauba combustion nitrogen monoxide (`carnauba_no`)

Nitrogen monoxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently; do not enter a grouped combustion-emission value.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Carnauba combustion nitrogen dioxide (`carnauba_no2`)

Nitrogen dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently; do not enter a grouped combustion-emission value.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Carnauba combustion sulfur dioxide (`carnauba_so2`)

Sulfur dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently; do not enter a grouped combustion-emission value.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Carnauba combustion PM2.5 (`carnauba_pm25`)

Particulate matter, PM2.5, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently; do not enter a grouped combustion-emission value.

- Selected flow: Particulate matter, PM2.5, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_mechanical_recovery`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Candelilla acidified-water extraction and filter pressing (`candelilla_hot_water_extraction`)

#### Inputs

##### Product flows

###### Dried candelilla stalks (`candelilla_stalks_input`)

Accepted dried candelilla stalks enters this unit process as one separately recorded exchange. Retain batch moisture and botanical-source records.

- Selected flow: Accepted dried candelilla stalks
- Flow property / unit: Mass / kg
- Amount rule: weighed dried stalk mass charged to the extraction vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`, `fao-nwfp-diversification-2009`

###### Candelilla extraction water (`candelilla_process_water`)

Process water enters this unit process as one separately recorded exchange. Keep extraction water separate from cleaning water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water charged to acidified boiling and subsequent treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Candelilla sulfuric acid (`candelilla_sulfuric_acid`)

Sulfuric acid enters this unit process as one separately recorded exchange. Record the supplied concentration and active-acid basis.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: weighed sulfuric acid charged to water acidification and declared further treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Candelilla filter paper (`candelilla_filter_paper`)

Cellulose filter paper enters this unit process as one separately recorded exchange. Do not combine with diatomaceous earth or cloth.

- Selected flow: Cellulose filter paper
- Flow property / unit: Mass / kg
- Amount rule: weighed filter paper installed in the candelilla filter press
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Candelilla extraction grid electricity (`candelilla_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep this stage meter separate from refining.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for agitation, pumping, skimming and filter pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `jrc-fdm-bref-2019`

###### Candelilla purchased saturated steam (`candelilla_purchased_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when purchased steam is used.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to the extraction vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Candelilla purchased hot water (`candelilla_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Do not combine with steam or fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Candelilla extraction natural gas (`candelilla_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only when natural gas is actually used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for extraction heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `jrc-fdm-bref-2019`

###### Candelilla extraction diesel (`candelilla_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Record separately from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for diesel heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `jrc-fdm-bref-2019`

###### Candelilla extraction LPG (`candelilla_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Record separately from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for LPG heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Crude candelilla wax slab (`crude_candelilla_wax_output`)

Crude candelilla wax slab leaves this unit process as one separately recorded exchange. Transfer separately to refining or forming.

- Selected flow: Crude candelilla wax slab
- Flow property / unit: Mass / kg
- Amount rule: weighed solidified wax skimmed from the extraction vessel and released from filter pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`

##### Waste flows

###### Spent candelilla stalks (`candelilla_spent_stalks`)

Spent candelilla stalks leaves this unit process as one separately recorded exchange. Record the actual treatment destination.

- Selected flow: Spent candelilla stalks
- Flow property / unit: Mass / kg
- Amount rule: weighed extracted stalk residue leaving the vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-nwfp-diversification-2009`

###### Spent candelilla filter paper (`candelilla_spent_filter_paper`)

Spent cellulose filter paper leaves this unit process as one separately recorded exchange. Keep separate from stalk residue.

- Selected flow: Spent cellulose filter paper
- Flow property / unit: Mass / kg
- Amount rule: weighed used filter paper removed from the filter press
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Candelilla acid wastewater (`candelilla_acid_wastewater`)

Sulfuric-acid candelilla extraction wastewater leaves this unit process as one separately recorded exchange. Record pH and destination with the volume record.

- Selected flow: Sulfuric-acid candelilla extraction wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered acidified extraction water sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `fao-jecfa-candelilla-wax-2005`, `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Candelilla combustion fossil carbon dioxide (`candelilla_fossil_co2`)

Carbon dioxide, fossil, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `eu-fdm-bat-2019-2031`

###### Candelilla combustion nitrogen monoxide (`candelilla_no`)

Nitrogen monoxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `eu-fdm-bat-2019-2031`

###### Candelilla combustion nitrogen dioxide (`candelilla_no2`)

Nitrogen dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `eu-fdm-bat-2019-2031`

###### Candelilla combustion sulfur dioxide (`candelilla_so2`)

Sulfur dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `eu-fdm-bat-2019-2031`

###### Candelilla combustion PM2.5 (`candelilla_pm25`)

Particulate matter, PM2.5, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Particulate matter, PM2.5, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_candelilla_hot_water_extraction`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Rice-bran-wax recovery (`rice_bran_wax_recovery`)

#### Inputs

##### Product flows

###### Crude rice bran oil (`rice_bran_oil_input`)

Accepted crude rice bran oil enters this unit process as one separately recorded exchange. Declare oil composition and batch identity.

- Selected flow: Accepted crude rice bran oil
- Flow property / unit: Mass / kg
- Amount rule: weighed crude rice bran oil charged to the selected wax-recovery technology
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`

###### Rice-bran recovery process water (`rice_process_water`)

Process water enters this unit process as one separately recorded exchange. Record only for a wet process; exclude cleaning water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water charged to the selected wet-recovery operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`

###### Rice-bran recovery grid electricity (`rice_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep the selected technology and meter allocation explicit.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for cooling, agitation, separation, pumping and recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`, `jrc-fdm-bref-2019`

###### Rice-bran recovery purchased saturated steam (`rice_purchased_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when purchased steam crosses the boundary.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to oil heating or solvent recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `jrc-fdm-bref-2019`

###### Rice-bran recovery purchased hot water (`rice_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Keep separate from steam and fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `jrc-fdm-bref-2019`

###### Rice-bran recovery natural gas (`rice_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only when actually used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for process heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `jrc-fdm-bref-2019`

###### Rice-bran recovery diesel (`rice_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Record separately from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for diesel heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `jrc-fdm-bref-2019`

###### Rice-bran recovery LPG (`rice_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Record separately from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for LPG heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `jrc-fdm-bref-2019`

###### Rice-bran recovery n-hexane (`rice_n_hexane`)

n-Hexane enters this unit process as one separately recorded exchange. Record only for the n-hexane technology and reconcile fresh, recovered and emitted solvent.

- Selected flow: n-Hexane
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up n-hexane charged to the declared solvent route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`

###### Rice-bran recovery carbon dioxide (`rice_supercritical_co2`)

Carbon dioxide for supercritical extraction enters this unit process as one separately recorded exchange. Record only for the supercritical-carbon-dioxide technology.

- Selected flow: Carbon dioxide for supercritical extraction
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up carbon dioxide charged to the declared supercritical route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`

###### Rice-bran recovery R717 make-up (`rice_r717_makeup`)

Ammonia refrigerant R717 enters this unit process as one separately recorded exchange. Record only the installed refrigerant identity; never combine refrigerants.

- Selected flow: Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: weighed refrigerant make-up assigned to the recovery refrigeration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran recovery R744 make-up (`rice_r744_makeup`)

Carbon dioxide refrigerant R744 enters this unit process as one separately recorded exchange. Record only the installed refrigerant identity; never combine refrigerants.

- Selected flow: Carbon dioxide refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: weighed refrigerant make-up assigned to the recovery refrigeration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran recovery R404A make-up (`rice_r404a_makeup`)

Refrigerant R404A enters this unit process as one separately recorded exchange. Record only the installed refrigerant identity; never combine refrigerants.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass / kg
- Amount rule: weighed refrigerant make-up assigned to the recovery refrigeration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Crude rice bran wax (`crude_rice_bran_wax_output`)

Crude rice bran wax leaves this unit process as one separately recorded exchange. Transfer separately to refining or forming.

- Selected flow: Crude rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed wax fraction recovered by the declared technology
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`, `us-fda-grn-720-rice-bran-wax`

###### Dewaxed rice bran oil (`dewaxed_rice_bran_oil`)

Dewaxed rice bran oil leaves this unit process as one separately recorded exchange. Record composition, destination and allocation basis separately from wax.

- Selected flow: Dewaxed rice bran oil
- Flow property / unit: Mass / kg
- Amount rule: weighed dewaxed oil co-product leaving wax recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-pef-2021-2279`

###### Recovered rice-bran n-hexane (`recovered_rice_hexane`)

Recovered n-hexane leaves this unit process as one separately recorded exchange. Do not net this output silently against make-up solvent.

- Selected flow: Recovered n-hexane
- Flow property / unit: Mass / kg
- Amount rule: measured n-hexane recovered for reuse or transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`

##### Waste flows

###### Rice-bran-wax filter residue (`rice_filter_residue`)

Rice-bran-wax filter residue leaves this unit process as one separately recorded exchange. Keep distinct from wastewater sludge.

- Selected flow: Rice-bran-wax filter residue
- Flow property / unit: Mass / kg
- Amount rule: weighed filter residue sent to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-pef-2021-2279`

###### Rice-bran-wax recovery wastewater (`rice_recovery_wastewater`)

Rice-bran-wax recovery wastewater leaves this unit process as one separately recorded exchange. Record only for technologies producing this water stream.

- Selected flow: Rice-bran-wax recovery wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered process wastewater sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Rice-bran n-hexane emission (`rice_hexane_air`)

n-Hexane to air leaves this unit process as one separately recorded exchange. Keep this exact solvent emission separate from every refrigerant release.

- Selected flow: n-Hexane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured solvent inventory balance and independently measured recovered solvent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `usda-nifa-rice-bran-wax-0209429`

###### Rice-bran R717 release (`rice_r717_air`)

Ammonia refrigerant R717 to air leaves this unit process as one separately recorded exchange. Do not aggregate refrigerant releases.

- Selected flow: Ammonia refrigerant R717 to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from refrigerant inventory, make-up and service records for the named refrigerant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran R744 release (`rice_r744_air`)

Carbon dioxide refrigerant R744 to air leaves this unit process as one separately recorded exchange. Do not aggregate refrigerant releases.

- Selected flow: Carbon dioxide refrigerant R744 to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from refrigerant inventory, make-up and service records for the named refrigerant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran R404A release (`rice_r404a_air`)

Refrigerant R404A to air leaves this unit process as one separately recorded exchange. Do not aggregate refrigerant releases.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from refrigerant inventory, make-up and service records for the named refrigerant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran combustion fossil carbon dioxide (`rice_fossil_co2`)

Carbon dioxide, fossil, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran combustion nitrogen monoxide (`rice_no`)

Nitrogen monoxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran combustion nitrogen dioxide (`rice_no2`)

Nitrogen dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran combustion sulfur dioxide (`rice_so2`)

Sulfur dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran combustion PM2.5 (`rice_pm25`)

Particulate matter, PM2.5, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Particulate matter, PM2.5, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_bran_wax_recovery`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Carnauba wax-powder solvent extraction (`carnauba_solvent_extraction`)

#### Inputs

##### Product flows

###### Carnauba wax powder (`carnauba_wax_powder_input`)

Carnauba wax powder enters this unit process as one separately recorded exchange. Link to the exact powder-producing batch.

- Selected flow: Carnauba wax powder
- Flow property / unit: Mass / kg
- Amount rule: weighed wax powder charged to the extraction vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba n-heptane (`carnauba_n_heptane`)

n-Heptane enters this unit process as one separately recorded exchange. Use only if this exact solvent is legally permitted and actually used; reconcile it independently.

- Selected flow: n-Heptane
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up n-Heptane charged to the declared extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba n-hexane (`carnauba_n_hexane`)

n-Hexane enters this unit process as one separately recorded exchange. Use only if this exact solvent is legally permitted and actually used; reconcile it independently.

- Selected flow: n-Hexane
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up n-Hexane charged to the declared extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba aliphatic naphtha (`carnauba_aliphatic_naphtha`)

Aliphatic naphtha enters this unit process as one separately recorded exchange. Use only if this exact solvent is legally permitted and actually used; reconcile it independently.

- Selected flow: Aliphatic naphtha
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up Aliphatic naphtha charged to the declared extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba gum turpentine (`carnauba_gum_turpentine`)

Gum turpentine enters this unit process as one separately recorded exchange. Use only if this exact solvent is legally permitted and actually used; reconcile it independently.

- Selected flow: Gum turpentine
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up Gum turpentine charged to the declared extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba benzene (`carnauba_benzene`)

Benzene enters this unit process as one separately recorded exchange. Use only if this exact solvent is legally permitted and actually used; reconcile it independently.

- Selected flow: Benzene
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up Benzene charged to the declared extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba diethyl ether (`carnauba_diethyl_ether`)

Diethyl ether enters this unit process as one separately recorded exchange. Use only if this exact solvent is legally permitted and actually used; reconcile it independently.

- Selected flow: Diethyl ether
- Flow property / unit: Mass / kg
- Amount rule: weighed make-up Diethyl ether charged to the declared extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba solvent-extraction grid electricity (`carnauba_solvent_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep separate from mechanical recovery and refining electricity.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for extraction, pumping, separation and solvent recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`, `jrc-fdm-bref-2019`

###### Carnauba solvent-extraction purchased saturated steam (`carnauba_solvent_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when purchased steam is used.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to extraction or solvent recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba solvent-extraction purchased hot water (`carnauba_solvent_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Keep separate from steam and fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba solvent-extraction natural gas (`carnauba_solvent_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only when actually used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for extraction or solvent-recovery heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `jrc-fdm-bref-2019`

###### Carnauba solvent-extraction diesel (`carnauba_solvent_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Keep separate from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for diesel heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `jrc-fdm-bref-2019`

###### Carnauba solvent-extraction LPG (`carnauba_solvent_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Keep separate from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for LPG heat assigned to this stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Solvent-extracted crude carnauba wax (`solvent_extracted_carnauba_wax`)

Solvent-extracted crude carnauba wax leaves this unit process as one separately recorded exchange. Transfer separately to the declared refining or forming route.

- Selected flow: Solvent-extracted crude carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed crude wax after solvent separation and recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Recovered carnauba n-heptane (`recovered_carnauba_n_heptane`)

Recovered n-heptane leaves this unit process as one separately recorded exchange. Do not net this output silently against make-up solvent.

- Selected flow: Recovered n-heptane
- Flow property / unit: Mass / kg
- Amount rule: measured Recovered n-heptane recovered for reuse or transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Recovered carnauba n-hexane (`recovered_carnauba_n_hexane`)

Recovered n-hexane leaves this unit process as one separately recorded exchange. Do not net this output silently against make-up solvent.

- Selected flow: Recovered n-hexane
- Flow property / unit: Mass / kg
- Amount rule: measured Recovered n-hexane recovered for reuse or transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Recovered carnauba aliphatic naphtha (`recovered_carnauba_naphtha`)

Recovered aliphatic naphtha leaves this unit process as one separately recorded exchange. Do not net this output silently against make-up solvent.

- Selected flow: Recovered aliphatic naphtha
- Flow property / unit: Mass / kg
- Amount rule: measured Recovered aliphatic naphtha recovered for reuse or transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Recovered carnauba gum turpentine (`recovered_carnauba_turpentine`)

Recovered gum turpentine leaves this unit process as one separately recorded exchange. Do not net this output silently against make-up solvent.

- Selected flow: Recovered gum turpentine
- Flow property / unit: Mass / kg
- Amount rule: measured Recovered gum turpentine recovered for reuse or transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Recovered carnauba benzene (`recovered_carnauba_benzene`)

Recovered benzene leaves this unit process as one separately recorded exchange. Do not net this output silently against make-up solvent.

- Selected flow: Recovered benzene
- Flow property / unit: Mass / kg
- Amount rule: measured Recovered benzene recovered for reuse or transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Recovered carnauba diethyl ether (`recovered_carnauba_ether`)

Recovered diethyl ether leaves this unit process as one separately recorded exchange. Do not net this output silently against make-up solvent.

- Selected flow: Recovered diethyl ether
- Flow property / unit: Mass / kg
- Amount rule: measured Recovered diethyl ether recovered for reuse or transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

##### Waste flows

###### Carnauba solvent-extraction residue (`carnauba_solvent_residue`)

Carnauba solvent-extraction residue leaves this unit process as one separately recorded exchange. Record residual-solvent characterization where required.

- Selected flow: Carnauba solvent-extraction residue
- Flow property / unit: Mass / kg
- Amount rule: weighed insoluble residue sent to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

##### Elementary flows

###### Carnauba n-heptane emission (`carnauba_n_heptane_air`)

n-Heptane to air leaves this unit process as one separately recorded exchange. Keep this exact solvent emission separate.

- Selected flow: n-Heptane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from the measured n-Heptane inventory balance and independently measured recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba n-hexane emission (`carnauba_n_hexane_air`)

n-Hexane to air leaves this unit process as one separately recorded exchange. Keep this exact solvent emission separate.

- Selected flow: n-Hexane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from the measured n-Hexane inventory balance and independently measured recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba aliphatic naphtha emission (`carnauba_naphtha_air`)

Aliphatic naphtha to air leaves this unit process as one separately recorded exchange. Keep this exact solvent emission separate.

- Selected flow: Aliphatic naphtha to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from the measured Aliphatic naphtha inventory balance and independently measured recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba gum turpentine emission (`carnauba_turpentine_air`)

Gum turpentine to air leaves this unit process as one separately recorded exchange. Keep this exact solvent emission separate.

- Selected flow: Gum turpentine to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from the measured Gum turpentine inventory balance and independently measured recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba benzene emission (`carnauba_benzene_air`)

Benzene to air leaves this unit process as one separately recorded exchange. Keep this exact solvent emission separate.

- Selected flow: Benzene to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from the measured Benzene inventory balance and independently measured recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

###### Carnauba diethyl ether emission (`carnauba_ether_air`)

Diethyl ether to air leaves this unit process as one separately recorded exchange. Keep this exact solvent emission separate.

- Selected flow: Diethyl ether to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from the measured Diethyl ether inventory balance and independently measured recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carnauba_solvent_extraction`
- Sources: `usda-ams-carnauba-wax-2014`

### Process: Wax melting, clarification and filtration (`melting_clarification_filtration`)

#### Inputs

##### Product flows

###### Crude carnauba wax for clarification (`clarify_crude_carnauba`)

Crude carnauba wax enters this unit process as one separately recorded exchange. Record only the declared botanical source and route intermediate.

- Selected flow: Crude carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed mass charged to the clarification vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Solvent-extracted carnauba wax for clarification (`clarify_solvent_carnauba`)

Solvent-extracted crude carnauba wax enters this unit process as one separately recorded exchange. Record only the declared botanical source and route intermediate.

- Selected flow: Solvent-extracted crude carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed mass charged to the clarification vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Crude candelilla wax for clarification (`clarify_crude_candelilla`)

Crude candelilla wax slab enters this unit process as one separately recorded exchange. Record only the declared botanical source and route intermediate.

- Selected flow: Crude candelilla wax slab
- Flow property / unit: Mass / kg
- Amount rule: weighed mass charged to the clarification vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Crude rice bran wax for clarification (`clarify_crude_rice_bran`)

Crude rice bran wax enters this unit process as one separately recorded exchange. Record only the declared botanical source and route intermediate.

- Selected flow: Crude rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed mass charged to the clarification vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-nifa-rice-bran-wax-0209429`

###### Clarification process water (`clarify_process_water`)

Process water enters this unit process as one separately recorded exchange. Keep separate from cleaning water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water charged to the wax clarification operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Fuller's earth clarification aid (`clarify_fullers_earth`)

Fuller's earth enters this unit process as one separately recorded exchange. Record this adsorbent separately from diatomaceous earth and activated bleaching clay.

- Selected flow: Fuller's earth
- Flow property / unit: Mass / kg
- Amount rule: weighed Fuller's earth charged to the declared clarification batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Diatomaceous-earth filtration aid (`clarify_diatomaceous_earth`)

Diatomaceous earth enters this unit process as one separately recorded exchange. Record this filtration aid independently.

- Selected flow: Diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: weighed diatomaceous earth charged as filtration aid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Cotton filter cloth (`clarify_cotton_cloth`)

Cotton filter cloth enters this unit process as one separately recorded exchange. Keep separate from cellulose filter paper.

- Selected flow: Cotton filter cloth
- Flow property / unit: Mass / kg
- Amount rule: weighed replacement cotton filter cloth assigned to the batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Cellulose filter paper (`clarify_filter_paper`)

Cellulose filter paper enters this unit process as one separately recorded exchange. Keep separate from cotton cloth.

- Selected flow: Cellulose filter paper
- Flow property / unit: Mass / kg
- Amount rule: weighed replacement cellulose filter paper assigned to the batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Clarification grid electricity (`clarify_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep this stage meter separate from extraction and forming.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for melting, agitation, pumping and filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `jrc-fdm-bref-2019`

###### Clarification purchased saturated steam (`clarify_purchased_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when purchased steam is used.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to wax melting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Clarification purchased hot water (`clarify_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Keep separate from steam and fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Clarification natural gas (`clarify_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only when actually used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for clarification heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `jrc-fdm-bref-2019`

###### Clarification diesel (`clarify_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Keep separate from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for clarification heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `jrc-fdm-bref-2019`

###### Clarification LPG (`clarify_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Keep separate from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for clarification heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Clarified carnauba wax (`clarified_carnauba_output`)

Clarified carnauba wax leaves this unit process as one separately recorded exchange. Maintain botanical identity through transfer.

- Selected flow: Clarified carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed clarified wax released from filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Clarified candelilla wax (`clarified_candelilla_output`)

Clarified candelilla wax leaves this unit process as one separately recorded exchange. Maintain botanical identity through transfer.

- Selected flow: Clarified candelilla wax
- Flow property / unit: Mass / kg
- Amount rule: weighed clarified wax released from filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Clarified rice bran wax (`clarified_rice_bran_output`)

Clarified rice bran wax leaves this unit process as one separately recorded exchange. Maintain botanical identity through transfer.

- Selected flow: Clarified rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed clarified wax released from filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `us-fda-grn-720-rice-bran-wax`

##### Waste flows

###### Spent Fuller's earth (`spent_fullers_earth`)

Spent Fuller's earth leaves this unit process as one separately recorded exchange. Record its wax content and treatment destination where available.

- Selected flow: Spent Fuller's earth
- Flow property / unit: Mass / kg
- Amount rule: weighed spent Fuller's earth removed from filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Spent diatomaceous earth (`spent_diatomaceous_earth`)

Spent diatomaceous earth leaves this unit process as one separately recorded exchange. Keep separate from spent Fuller's earth.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: weighed spent diatomaceous earth removed from filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Spent cotton filter cloth (`spent_cotton_cloth`)

Spent cotton filter cloth leaves this unit process as one separately recorded exchange. Keep separate from spent filter paper.

- Selected flow: Spent cotton filter cloth
- Flow property / unit: Mass / kg
- Amount rule: weighed used cotton filter cloth sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `usda-ams-carnauba-wax-2014`

###### Spent clarification filter paper (`spent_clarify_filter_paper`)

Spent cellulose filter paper leaves this unit process as one separately recorded exchange. Keep separate from filter-aid solids.

- Selected flow: Spent cellulose filter paper
- Flow property / unit: Mass / kg
- Amount rule: weighed used cellulose filter paper sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Wax-clarification wastewater (`clarification_wastewater`)

Vegetable-wax clarification wastewater leaves this unit process as one separately recorded exchange. Keep separate from extraction and cleaning wastewater.

- Selected flow: Vegetable-wax clarification wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered clarification wastewater sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melting_clarification_filtration`
- Sources: `jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### Elementary flows

No elementary flow is prescribed for this direction.

### Process: Botanical-wax bleaching and acid refinement (`bleaching_acid_refinement`)

#### Inputs

##### Product flows

###### Clarified carnauba wax for refining (`refine_carnauba_input`)

Clarified carnauba wax enters this unit process as one separately recorded exchange. Use only for the declared botanical product.

- Selected flow: Clarified carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed clarified wax charged to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `usda-ams-carnauba-wax-2014`

###### Clarified candelilla wax for refining (`refine_candelilla_input`)

Clarified candelilla wax enters this unit process as one separately recorded exchange. Use only for the declared botanical product.

- Selected flow: Clarified candelilla wax
- Flow property / unit: Mass / kg
- Amount rule: weighed clarified wax charged to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Clarified rice bran wax for refining (`refine_rice_bran_input`)

Clarified rice bran wax enters this unit process as one separately recorded exchange. Use only for the declared botanical product.

- Selected flow: Clarified rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed clarified wax charged to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `us-fda-grn-720-rice-bran-wax`

###### Hydrogen peroxide bleaching agent (`refine_hydrogen_peroxide`)

Hydrogen peroxide enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied hydrogen peroxide charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `usda-ams-carnauba-wax-2014`

###### Sulfuric acid refining agent (`refine_sulfuric_acid`)

Sulfuric acid enters this unit process as one separately recorded exchange. Record supplied concentration and active-acid basis.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied sulfuric acid charged to candelilla refinement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Activated bleaching clay (`refine_activated_clay`)

Activated bleaching clay enters this unit process as one separately recorded exchange. Do not combine with Fuller's earth or diatomaceous earth.

- Selected flow: Activated bleaching clay
- Flow property / unit: Mass / kg
- Amount rule: weighed activated bleaching clay charged to the declared batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `usda-ams-carnauba-wax-2014`

###### Refining process water (`refine_process_water`)

Process water enters this unit process as one separately recorded exchange. Keep separate from cleaning water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered process water charged to bleaching or acid refinement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `usda-ams-carnauba-wax-2014`, `fao-jecfa-candelilla-wax-2005`

###### Refining grid electricity (`refine_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep this stage meter separate from clarification.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for agitation, pumping and filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `jrc-fdm-bref-2019`

###### Refining purchased saturated steam (`refine_purchased_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when purchased steam is used.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to refinement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `jrc-fdm-bref-2019`

###### Refining purchased hot water (`refine_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Keep separate from steam and fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `jrc-fdm-bref-2019`

###### Refining natural gas (`refine_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only when actually used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for refining heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `jrc-fdm-bref-2019`

###### Refining diesel (`refine_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Keep separate from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for refining heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `jrc-fdm-bref-2019`

###### Refining LPG (`refine_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Keep separate from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for refining heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Refined carnauba wax (`refined_carnauba_output`)

Refined carnauba wax leaves this unit process as one separately recorded exchange. Maintain botanical identity and refined state.

- Selected flow: Refined carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed refined wax released against the locked product specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `usda-ams-carnauba-wax-2014`

###### Refined candelilla wax (`refined_candelilla_output`)

Refined candelilla wax leaves this unit process as one separately recorded exchange. Maintain botanical identity and refined state.

- Selected flow: Refined candelilla wax
- Flow property / unit: Mass / kg
- Amount rule: weighed refined wax released against the locked product specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Refined rice bran wax (`refined_rice_bran_output`)

Refined rice bran wax leaves this unit process as one separately recorded exchange. Maintain botanical identity and refined state.

- Selected flow: Refined rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed refined wax released against the locked product specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `us-fda-grn-720-rice-bran-wax`

##### Waste flows

###### Spent activated bleaching clay (`spent_activated_clay`)

Spent activated bleaching clay leaves this unit process as one separately recorded exchange. Record retained wax or chemical hazard where available.

- Selected flow: Spent activated bleaching clay
- Flow property / unit: Mass / kg
- Amount rule: weighed spent activated bleaching clay sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `usda-ams-carnauba-wax-2014`

###### Acidic wax-refining wastewater (`refining_acid_wastewater`)

Acidic vegetable-wax refining wastewater leaves this unit process as one separately recorded exchange. Keep separate from alkaline cleaning wastewater.

- Selected flow: Acidic vegetable-wax refining wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered acidic wastewater sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `fao-jecfa-candelilla-wax-2005`, `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Refining fossil carbon dioxide (`refine_fossil_co2`)

Carbon dioxide, fossil, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `eu-fdm-bat-2019-2031`

###### Refining nitrogen monoxide (`refine_no`)

Nitrogen monoxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `eu-fdm-bat-2019-2031`

###### Refining nitrogen dioxide (`refine_no2`)

Nitrogen dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `eu-fdm-bat-2019-2031`

###### Refining sulfur dioxide (`refine_so2`)

Sulfur dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `eu-fdm-bat-2019-2031`

###### Refining PM2.5 (`refine_pm25`)

Particulate matter, PM2.5, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Particulate matter, PM2.5, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bleaching_acid_refinement`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Wax forming and cooling (`forming_cooling`)

#### Inputs

##### Product flows

###### Bulk carnauba wax for forming (`forming_carnauba_input`)

Bulk carnauba wax enters this unit process as one separately recorded exchange. Record refined state and colour status in batch metadata.

- Selected flow: Bulk carnauba wax
- Flow property / unit: Mass / kg
- Amount rule: weighed bulk wax charged to the declared forming line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `usda-ams-carnauba-wax-2014`

###### Bulk candelilla wax for forming (`forming_candelilla_input`)

Bulk candelilla wax enters this unit process as one separately recorded exchange. Record refined state and colour status in batch metadata.

- Selected flow: Bulk candelilla wax
- Flow property / unit: Mass / kg
- Amount rule: weighed bulk wax charged to the declared forming line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Bulk rice bran wax for forming (`forming_rice_bran_input`)

Bulk rice bran wax enters this unit process as one separately recorded exchange. Record refined state and colour status in batch metadata.

- Selected flow: Bulk rice bran wax
- Flow property / unit: Mass / kg
- Amount rule: weighed bulk wax charged to the declared forming line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `us-fda-grn-720-rice-bran-wax`

###### Forming grid electricity (`forming_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep this stage meter separate from refining.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for remelting, pumps, flaker or slab equipment and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `usda-ams-carnauba-wax-2014`, `jrc-fdm-bref-2019`

###### Forming purchased saturated steam (`forming_purchased_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when used.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to remelting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `usda-ams-carnauba-wax-2014`

###### Forming purchased hot water (`forming_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Keep separate from steam and fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `jrc-fdm-bref-2019`

###### Forming natural gas (`forming_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only when actually used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for remelting heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `jrc-fdm-bref-2019`

###### Forming diesel (`forming_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Keep separate from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for remelting heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `jrc-fdm-bref-2019`

###### Forming LPG (`forming_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Keep separate from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for remelting heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `jrc-fdm-bref-2019`

###### Forming cooling water (`forming_cooling_water`)

Cooling water enters this unit process as one separately recorded exchange. Keep separate from cleaning water.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: metered make-up cooling water assigned to wax forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `jrc-fdm-bref-2019`

###### Forming R717 make-up (`forming_r717_makeup`)

Ammonia refrigerant R717 enters this unit process as one separately recorded exchange. Record only the installed refrigerant identity.

- Selected flow: Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: weighed refrigerant make-up assigned to the forming refrigeration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming R744 make-up (`forming_r744_makeup`)

Carbon dioxide refrigerant R744 enters this unit process as one separately recorded exchange. Record only the installed refrigerant identity.

- Selected flow: Carbon dioxide refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: weighed refrigerant make-up assigned to the forming refrigeration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming R404A make-up (`forming_r404a_makeup`)

Refrigerant R404A enters this unit process as one separately recorded exchange. Record only the installed refrigerant identity.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass / kg
- Amount rule: weighed refrigerant make-up assigned to the forming refrigeration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Carnauba wax flakes (`formed_carnauba_flakes`)

Carnauba wax flakes leaves this unit process as one separately recorded exchange. Use only when this exact botanical product form is produced.

- Selected flow: Carnauba wax flakes
- Flow property / unit: Mass / kg
- Amount rule: weighed conforming formed wax transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `usda-ams-carnauba-wax-2014`

###### Candelilla wax slabs (`formed_candelilla_slabs`)

Candelilla wax slabs leaves this unit process as one separately recorded exchange. Use only when this exact botanical product form is produced.

- Selected flow: Candelilla wax slabs
- Flow property / unit: Mass / kg
- Amount rule: weighed conforming formed wax transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Rice bran wax flakes (`formed_rice_bran_flakes`)

Rice bran wax flakes leaves this unit process as one separately recorded exchange. Use only when this exact botanical product form is produced.

- Selected flow: Rice bran wax flakes
- Flow property / unit: Mass / kg
- Amount rule: weighed conforming formed wax transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `us-fda-grn-720-rice-bran-wax`

##### Waste flows

###### Carnauba wax forming scrap (`carnauba_forming_scrap`)

Carnauba wax forming scrap leaves this unit process as one separately recorded exchange. Retain botanical identity; do not combine wax scrap types.

- Selected flow: Carnauba wax forming scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed off-spec or trim wax sent to the documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-pef-2021-2279`

###### Candelilla wax forming scrap (`candelilla_forming_scrap`)

Candelilla wax forming scrap leaves this unit process as one separately recorded exchange. Retain botanical identity; do not combine wax scrap types.

- Selected flow: Candelilla wax forming scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed off-spec or trim wax sent to the documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-pef-2021-2279`

###### Rice bran wax forming scrap (`rice_bran_forming_scrap`)

Rice bran wax forming scrap leaves this unit process as one separately recorded exchange. Retain botanical identity; do not combine wax scrap types.

- Selected flow: Rice bran wax forming scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed off-spec or trim wax sent to the documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-pef-2021-2279`

###### Forming cooling-water blowdown (`forming_cooling_blowdown`)

Wax-forming cooling-water blowdown leaves this unit process as one separately recorded exchange. Keep separate from process and cleaning wastewater.

- Selected flow: Wax-forming cooling-water blowdown
- Flow property / unit: Volume / m3
- Amount rule: metered cooling-water blowdown sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_cooling`
- Sources: `jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Forming R717 release (`forming_r717_air`)

Ammonia refrigerant R717 to air leaves this unit process as one separately recorded exchange. Do not aggregate refrigerant releases.

- Selected flow: Ammonia refrigerant R717 to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from refrigerant inventory, make-up and service records for the named refrigerant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming R744 release (`forming_r744_air`)

Carbon dioxide refrigerant R744 to air leaves this unit process as one separately recorded exchange. Do not aggregate refrigerant releases.

- Selected flow: Carbon dioxide refrigerant R744 to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from refrigerant inventory, make-up and service records for the named refrigerant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming R404A release (`forming_r404a_air`)

Refrigerant R404A to air leaves this unit process as one separately recorded exchange. Do not aggregate refrigerant releases.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from refrigerant inventory, make-up and service records for the named refrigerant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming fossil carbon dioxide (`forming_fossil_co2`)

Carbon dioxide, fossil, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming nitrogen monoxide (`forming_no`)

Nitrogen monoxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming nitrogen dioxide (`forming_no2`)

Nitrogen dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming sulfur dioxide (`forming_so2`)

Sulfur dioxide to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming PM2.5 (`forming_pm25`)

Particulate matter, PM2.5, to air leaves this unit process as one separately recorded exchange. Calculate this substance independently.

- Selected flow: Particulate matter, PM2.5, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_cooling`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Packaging, quality release and reference-product normalization (`packaging_release`)

#### Inputs

##### Product flows

###### Carnauba wax transferred to packaging (`pack_carnauba_wax_input`)

Carnauba wax for packaging enters this unit process as one separately recorded exchange. Use only for the locked botanical product identity.

- Selected flow: Carnauba wax for packaging
- Flow property / unit: Mass / kg
- Amount rule: weighed net wax transferred to the packaging lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `usda-ams-carnauba-wax-2014`

###### Candelilla wax transferred to packaging (`pack_candelilla_wax_input`)

Candelilla wax for packaging enters this unit process as one separately recorded exchange. Use only for the locked botanical product identity.

- Selected flow: Candelilla wax for packaging
- Flow property / unit: Mass / kg
- Amount rule: weighed net wax transferred to the packaging lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-jecfa-candelilla-wax-2005`

###### Rice bran wax transferred to packaging (`pack_rice_bran_wax_input`)

Rice bran wax for packaging enters this unit process as one separately recorded exchange. Use only for the locked botanical product identity.

- Selected flow: Rice bran wax for packaging
- Flow property / unit: Mass / kg
- Amount rule: weighed net wax transferred to the packaging lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `us-fda-grn-720-rice-bran-wax`

###### Kraft-paper sack (`pack_kraft_sack`)

Kraft-paper sack enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: Kraft-paper sack
- Flow property / unit: Mass / kg
- Amount rule: weighed Kraft-paper sack consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### LDPE liner (`pack_ldpe_liner`)

Low-density polyethylene liner enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: Low-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: weighed Low-density polyethylene liner consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### HDPE pail (`pack_hdpe_pail`)

High-density polyethylene pail enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: High-density polyethylene pail
- Flow property / unit: Mass / kg
- Amount rule: weighed High-density polyethylene pail consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Corrugated fiberboard box (`pack_corrugated_box`)

Corrugated fiberboard box enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: Corrugated fiberboard box
- Flow property / unit: Mass / kg
- Amount rule: weighed Corrugated fiberboard box consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Carbon-steel drum (`pack_steel_drum`)

Carbon-steel drum enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: Carbon-steel drum
- Flow property / unit: Mass / kg
- Amount rule: weighed Carbon-steel drum consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet (`pack_wood_pallet`)

Wooden pallet enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: weighed Wooden pallet consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### LLDPE stretch film (`pack_lldpe_film`)

Linear low-density polyethylene stretch film enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: weighed Linear low-density polyethylene stretch film consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Paper label (`pack_paper_label`)

Paper label enters this unit process as one separately recorded exchange. Record only this exact packaging component when used.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: weighed Paper label consumed for released lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Packaging grid electricity (`pack_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep packaging electricity separate from forming electricity.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for weighing, filling, sealing, labelling and pallet wrapping
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Packaging-handling diesel (`pack_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Record only when diesel equipment is actually used.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for diesel-powered packaging handling equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `jrc-fdm-bref-2019`

###### Packaging-handling LPG (`pack_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Record only when LPG equipment is actually used.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for LPG-powered packaging handling equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

###### Net conforming vegetable wax reference product (`reference_vegetable_wax`)

Vegetable waxes (other than triglycerides), whether or not refined or coloured leaves this unit process as one separately recorded exchange. This is the sole reference-product exchange; declare botanical source, route, refined state, colour state and physical form.

- Selected flow: Vegetable waxes (other than triglycerides), whether or not refined or coloured `1933406f-ca56-4672-9678-ae3925128a03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: calculated net conforming wax mass normalized to exactly 1 kg, excluding all packaging mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `un-cpc-3-0-2025`, `eu-pef-2021-2279`

##### Waste flows

###### Kraft-paper sack waste (`waste_kraft_sack`)

Kraft-paper sack waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: Kraft-paper sack waste
- Flow property / unit: Mass / kg
- Amount rule: weighed Kraft-paper sack waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### LDPE liner waste (`waste_ldpe_liner`)

Low-density polyethylene liner waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: Low-density polyethylene liner waste
- Flow property / unit: Mass / kg
- Amount rule: weighed Low-density polyethylene liner waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### HDPE pail waste (`waste_hdpe_pail`)

High-density polyethylene pail waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: High-density polyethylene pail waste
- Flow property / unit: Mass / kg
- Amount rule: weighed High-density polyethylene pail waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Corrugated-box waste (`waste_corrugated_box`)

Corrugated fiberboard box waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: Corrugated fiberboard box waste
- Flow property / unit: Mass / kg
- Amount rule: weighed Corrugated fiberboard box waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Carbon-steel drum waste (`waste_steel_drum`)

Carbon-steel drum waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: Carbon-steel drum waste
- Flow property / unit: Mass / kg
- Amount rule: weighed Carbon-steel drum waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Wooden-pallet waste (`waste_wood_pallet`)

Wooden pallet waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: Wooden pallet waste
- Flow property / unit: Mass / kg
- Amount rule: weighed Wooden pallet waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### LLDPE stretch-film waste (`waste_lldpe_film`)

Linear low-density polyethylene stretch-film waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: Linear low-density polyethylene stretch-film waste
- Flow property / unit: Mass / kg
- Amount rule: weighed Linear low-density polyethylene stretch-film waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Paper-label waste (`waste_paper_label`)

Paper label waste leaves this unit process as one separately recorded exchange. Keep this packaging waste separate from every other component.

- Selected flow: Paper label waste
- Flow property / unit: Mass / kg
- Amount rule: weighed Paper label waste from packaging operations sent to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Off-spec packaged vegetable wax (`offspec_packaged_wax`)

Off-spec packaged vegetable wax leaves this unit process as one separately recorded exchange. Declare its botanical identity and recovery or treatment destination.

- Selected flow: Off-spec packaged vegetable wax
- Flow property / unit: Mass / kg
- Amount rule: weighed off-spec wax removed before reference-product release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

No elementary flow is prescribed for this direction.

### Process: Equipment cleaning and sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

Cleaning water enters this unit process as one separately recorded exchange. Keep separate from extraction, refining and cooling water.

- Selected flow: Cleaning water
- Flow property / unit: Volume / m3
- Amount rule: metered water used for equipment and line cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`, `jrc-fdm-bref-2019`

###### Cleaning grid electricity (`cleaning_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Keep cleaning electricity separately allocated.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for cleaning pumps and clean-in-place operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Cleaning purchased saturated steam (`cleaning_purchased_steam`)

Purchased saturated steam enters this unit process as one separately recorded exchange. Record only when purchased steam is used.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased saturated steam delivered to cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Cleaning purchased hot water (`cleaning_hot_water`)

Purchased hot water enters this unit process as one separately recorded exchange. Keep separate from steam and fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy delivered as purchased hot water for cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Cleaning natural gas (`cleaning_natural_gas`)

Natural gas enters this unit process as one separately recorded exchange. Record only when actually used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural gas combusted for cleaning-water heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-fdm-bref-2019`

###### Cleaning diesel (`cleaning_diesel`)

Diesel fuel enters this unit process as one separately recorded exchange. Keep separate from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for cleaning-water heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-fdm-bref-2019`

###### Cleaning LPG (`cleaning_lpg`)

Liquefied petroleum gas enters this unit process as one separately recorded exchange. Keep separate from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter record for cleaning-water heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-fdm-bref-2019`

###### Sodium hydroxide cleaner (`cleaning_sodium_hydroxide`)

Sodium hydroxide enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis independently.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Sodium hydroxide used in cleaning or sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitric acid cleaner (`cleaning_nitric_acid`)

Nitric acid enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis independently.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Nitric acid used in cleaning or sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Phosphoric acid cleaner (`cleaning_phosphoric_acid`)

Phosphoric acid enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis independently.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Phosphoric acid used in cleaning or sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Peracetic acid disinfectant (`cleaning_peracetic_acid`)

Peracetic acid enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis independently.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Peracetic acid used in cleaning or sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Sodium hypochlorite disinfectant (`cleaning_sodium_hypochlorite`)

Sodium hypochlorite enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis independently.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Sodium hypochlorite used in cleaning or sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

No waste flow is prescribed for this direction.

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

No product flow is prescribed for this direction.

##### Waste flows

###### Sodium-hydroxide cleaning wastewater (`alkaline_cleaning_wastewater`)

Sodium-hydroxide cleaning wastewater leaves this unit process as one separately recorded exchange. Keep this chemically distinct wastewater stream separate.

- Selected flow: Sodium-hydroxide cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Sodium-hydroxide cleaning wastewater sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitric-acid cleaning wastewater (`nitric_cleaning_wastewater`)

Nitric-acid cleaning wastewater leaves this unit process as one separately recorded exchange. Keep this chemically distinct wastewater stream separate.

- Selected flow: Nitric-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Nitric-acid cleaning wastewater sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Phosphoric-acid cleaning wastewater (`phosphoric_cleaning_wastewater`)

Phosphoric-acid cleaning wastewater leaves this unit process as one separately recorded exchange. Keep this chemically distinct wastewater stream separate.

- Selected flow: Phosphoric-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Phosphoric-acid cleaning wastewater sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Peracetic-acid cleaning wastewater (`peracetic_cleaning_wastewater`)

Peracetic-acid cleaning wastewater leaves this unit process as one separately recorded exchange. Keep this chemically distinct wastewater stream separate.

- Selected flow: Peracetic-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Peracetic-acid cleaning wastewater sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Sodium-hypochlorite cleaning wastewater (`hypochlorite_cleaning_wastewater`)

Sodium-hypochlorite cleaning wastewater leaves this unit process as one separately recorded exchange. Keep this chemically distinct wastewater stream separate.

- Selected flow: Sodium-hypochlorite cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Sodium-hypochlorite cleaning wastewater sent to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

No elementary flow is prescribed for this direction.

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment grid electricity (`wwt_grid_electricity`)

Grid electricity enters this unit process as one separately recorded exchange. Allocate from the treatment-system meter.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity used by on-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

###### Ferric chloride treatment chemical (`wwt_ferric_chloride`)

Ferric chloride enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Ferric chloride consumed by on-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Sodium hydroxide treatment chemical (`wwt_sodium_hydroxide`)

Sodium hydroxide enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Sodium hydroxide consumed by on-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Hydrochloric acid treatment chemical (`wwt_hydrochloric_acid`)

Hydrochloric acid enters this unit process as one separately recorded exchange. Record supplied concentration and active-substance basis.

- Selected flow: Hydrochloric acid
- Flow property / unit: Mass / kg
- Amount rule: weighed supplied Hydrochloric acid consumed by on-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Carnauba recovery wastewater to treatment (`wwt_carnauba_recovery_water`)

Carnauba wax recovery wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Carnauba wax recovery wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Carnauba wax recovery wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Candelilla acid wastewater to treatment (`wwt_candelilla_acid_water`)

Sulfuric-acid candelilla extraction wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Sulfuric-acid candelilla extraction wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Sulfuric-acid candelilla extraction wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Rice-bran recovery wastewater to treatment (`wwt_rice_recovery_water`)

Rice-bran-wax recovery wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Rice-bran-wax recovery wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Rice-bran-wax recovery wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Clarification wastewater to treatment (`wwt_clarification_water`)

Vegetable-wax clarification wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Vegetable-wax clarification wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Vegetable-wax clarification wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Acidic refining wastewater to treatment (`wwt_refining_acid_water`)

Acidic vegetable-wax refining wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Acidic vegetable-wax refining wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Acidic vegetable-wax refining wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Forming cooling blowdown to treatment (`wwt_forming_blowdown`)

Wax-forming cooling-water blowdown enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Wax-forming cooling-water blowdown
- Flow property / unit: Volume / m3
- Amount rule: metered Wax-forming cooling-water blowdown accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Sodium-hydroxide cleaning wastewater to treatment (`wwt_alkaline_cleaning_water`)

Sodium-hydroxide cleaning wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Sodium-hydroxide cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Sodium-hydroxide cleaning wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitric-acid cleaning wastewater to treatment (`wwt_nitric_cleaning_water`)

Nitric-acid cleaning wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Nitric-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Nitric-acid cleaning wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Phosphoric-acid cleaning wastewater to treatment (`wwt_phosphoric_cleaning_water`)

Phosphoric-acid cleaning wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Phosphoric-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Phosphoric-acid cleaning wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Peracetic-acid cleaning wastewater to treatment (`wwt_peracetic_cleaning_water`)

Peracetic-acid cleaning wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Peracetic-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Peracetic-acid cleaning wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Sodium-hypochlorite cleaning wastewater to treatment (`wwt_hypochlorite_cleaning_water`)

Sodium-hypochlorite cleaning wastewater enters this unit process as one separately recorded exchange. Preserve this source-stream identity before treatment aggregation.

- Selected flow: Sodium-hypochlorite cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered Sodium-hypochlorite cleaning wastewater accepted by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

No elementary flow is prescribed for this direction.

#### Outputs

##### Product flows

No product flow is prescribed for this direction.

##### Waste flows

###### Treated wastewater (`treated_wastewater`)

Treated vegetable-wax-facility wastewater leaves this unit process as one separately recorded exchange. Record receiving destination and monitoring period.

- Selected flow: Treated vegetable-wax-facility wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered treated effluent volume leaving on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Wastewater-treatment sludge (`wwt_sludge`)

Vegetable-wax wastewater-treatment sludge leaves this unit process as one separately recorded exchange. Record dry-matter basis and treatment destination.

- Selected flow: Vegetable-wax wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: weighed dewatered sludge leaving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Wastewater-treatment screenings (`wwt_screenings`)

Vegetable-wax wastewater-treatment screenings leaves this unit process as one separately recorded exchange. Keep separate from sludge.

- Selected flow: Vegetable-wax wastewater-treatment screenings
- Flow property / unit: Mass / kg
- Amount rule: weighed screenings leaving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Effluent chemical oxygen demand (`effluent_cod`)

Chemical oxygen demand to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Effluent five-day biochemical oxygen demand (`effluent_bod5`)

Biochemical oxygen demand, five-day, to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Biochemical oxygen demand, five-day, to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Effluent total suspended solids (`effluent_tss`)

Total suspended solids to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Effluent total nitrogen (`effluent_total_n`)

Total nitrogen to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Effluent total phosphorus (`effluent_total_p`)

Total phosphorus to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Effluent chloride (`effluent_chloride`)

Chloride to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Effluent total organic carbon (`effluent_toc`)

Total organic carbon to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Total organic carbon to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Effluent vegetable wax (`effluent_vegetable_wax`)

Vegetable wax to water leaves this unit process as one separately recorded exchange. Calculate this exact parameter independently and report the analytical method.

- Selected flow: Vegetable wax to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched effluent concentration and treated-water volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Wastewater-treatment methane (`wwt_methane_air`)

Methane to air leaves this unit process as one separately recorded exchange. Record only for treatment that generates methane.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from site-specific biogas measurement or a documented treatment-specific calculation using collected wastewater data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`

###### Wastewater-treatment biogenic carbon dioxide (`wwt_biogenic_co2_air`)

Carbon dioxide, biogenic, to air leaves this unit process as one separately recorded exchange. Record only for treatment that generates biogenic carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from site-specific biogas measurement or a documented treatment-specific calculation using collected wastewater data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared production batch and normalized to 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

First avoid allocation by retaining route-specific unit processes and separate botanical identities. Attribute directly metered or batch-recorded inputs and outputs to the process that caused them. Internal wax intermediates and recovered solvents are not double-counted when transferred between foreground processes.

Where one process yields two externally usable products, such as crude wax and dewaxed rice bran oil, first test physical subdivision using batch, mass, composition, energy and equipment records. If subdivision is not feasible, apply a documented product-specific allocation method consistent with the study goal and EU PEF hierarchy, disclose the allocation key, data period and sensitivity, and never classify a co-product as waste merely to avoid allocation. Burdens and credits for reused solvents, recycled wax scrap, botanical residues, spent media, sludge and packaging waste follow their documented destination and the chosen system model; no avoided-burden default is prescribed.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_material_receiving` | `source_material_receiving` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, kWh, MJ | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_carnauba_mechanical_recovery` | `carnauba_mechanical_recovery` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, m3, kWh, MJ | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_candelilla_hot_water_extraction` | `candelilla_hot_water_extraction` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, m3, kWh, MJ | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_rice_bran_wax_recovery` | `rice_bran_wax_recovery` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, m3, kWh, MJ | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_carnauba_solvent_extraction` | `carnauba_solvent_extraction` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, kWh, MJ | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_melting_clarification_filtration` | `melting_clarification_filtration` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, m3, kWh, MJ | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_bleaching_acid_refinement` | `bleaching_acid_refinement` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, m3, kWh, MJ | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_forming_cooling` | `forming_cooling` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, kWh, MJ, m3 | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_packaging_release` | `packaging_release` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | kg, kWh, MJ, kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | m3, kWh, MJ, kg | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |
| `cp_onsite_wastewater_treatment` | `onsite_wastewater_treatment` | every atomic exchange in the process | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | Read calibrated meters, scales, batch sheets, purchase or service records and laboratory results; preserve one record per row_id. | m3, kWh, kg | every batch or meter interval | representative reporting period | reporting site and named equipment | sum like-for-like row_id records, convert to the required unit, then normalize to net conforming reference mass; no cross-route averaging | calibration, invoice, batch record, laboratory method, reconciliation and reviewer sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | `reference_vegetable_wax` | net conforming wax mass = gross released pack mass minus tare and all packaging mass; normalize inventory by net mass | gross release mass, tare, each packaging-component mass, reject mass | kg net conforming wax | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | each wax transformation | calculate the same-basis batch mass balance and investigate unexplained loss before release | named feedstock and intermediate masses, conforming output, residues, wastewater wax, off-spec wax, retained wax | reconciled batch mass balance | `eu-pef-2021-2279` |
| `calc_solvent_release` | each named solvent-air row | solvent release = fresh solvent plus returned inventory minus recovered solvent minus solvent transferred in product, wastewater and residues, adjusted for verified stock change | fresh, recovered, stock-change and carry-over records for one chemical | kg of that solvent to air | `usda-ams-carnauba-wax-2014`, `usda-nifa-rice-bran-wax-0209429` |
| `calc_refrigerant_release` | each named refrigerant-air row | use equipment-specific inventory, make-up, recovery and service records for the exact refrigerant; do not use one mixed-refrigerant line | opening and closing charge, make-up, recovered refrigerant, service record | kg of named refrigerant to air | `eu-fdm-bat-2019-2031` |
| `calc_effluent_load` | each named pollutant-to-water row | load = matched analytical concentration multiplied by treated effluent volume with documented unit conversion and sampling representativeness | concentration, flow volume, sampling period, analytical method | kg of named parameter to water | `eu-fdm-bat-2019-2031` |
| `calc_combustion_release` | each named combustion-air row | multiply measured fuel use by site-specific monitored or permitted factor for the exact pollutant and document oxidation or control assumptions | named fuel quantity, lower or higher heating value basis, pollutant-specific factor, abatement record | kg of named substance to air | `eu-fdm-bat-2019-2031` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_lock` | entire dataset | One botanical identity, one starting condition, one route and one product specification are fixed before aggregation; different wax identities or technologies are separate datasets. | route declaration, product specification, process map and batch genealogy |
| `dq_completeness` | all known exchanges | Cover all known product, waste and elementary inputs and outputs for included processes; explicitly justify true non-applicability. | mass, solvent, water, energy and waste reconciliations; EU PEF inventory review |
| `dq_primary_data` | reporting-site foreground | Use company-specific measured or calculated-from-measurement records; do not replace missing important quantities with PCR defaults because none are provided. | meters, invoices, batch sheets, laboratory reports and calculations |
| `dq_time_technology_geography` | each process | Document temporal, technological and geographical representativeness and identify shutdown, start-up or atypical batches. | reporting-period definition, equipment list, site boundary and production log |
| `dq_identity_traceability` | every unresolved flow UUID | Preserve the exact Selected flow and row_id; fill a UUID only after exact hybrid search and direct public state-100 verification. | manifest unresolved-flow register and verification evidence |
| `dq_verification` | completed data package | Independent review checks route identity, reference mass, atomic-flow completeness, calculations, allocation, evidence, DQ and bilingual machine-field alignment. | signed review checklist and corrected findings |

## 9. Validation Rules

A conforming foreground data package shall:

1. Resolve CPC 21931 and the verified reference Product flow while excluding triglycerides, CPC 21932 residues and non-vegetable waxes.
2. Declare exactly one botanical source, starting condition, route, refined state, colour state, product form and release specification.
3. Report exactly 1 kg net conforming wax and exclude every packaging component from reference mass.
4. Include every required process and each applicable conditional process, with one atomic exchange per inventory card.
5. Keep electricity, purchased saturated steam, purchased hot water, natural gas, diesel, LPG, each refrigerant, each solvent, each chemical, each packaging component, each waste and each emission separate.
6. Use only foreground records or calculations from collected records; no default amount, default range, modelled estimate or reasoned estimate is supplied by this PCR.
7. Reconcile wax mass, each solvent, each refrigerant and the reporting-period wastewater volume and loads.
8. Preserve co-product identity and disclose subdivision or allocation with data, method and sensitivity.
9. Leave each non-reference UUID blank until exact dual verification and maintain row_id closure in manifest review metadata.
10. Reject a dataset whose English and Chinese process_id, row_id, direction, flow type, Selected flow, UUID, property/unit, value mode, specificity, basis kind, evidence kind, collection protocol or source-id ordering differ.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground data package for one botanical wax production or refining route |
| downstream_use | Projection to TianGong flow, process and lifecyclemodel records and reviewed comparative or footprint studies |
| allowed_use | Use only for the declared botanical identity, route, product specification, site and reporting period |
| excluded_use | Generic vegetable-wax average; substitution among carnauba, candelilla and rice bran wax; triglyceride, animal, mineral, petroleum or synthetic wax; CPC 21932 residue; unsupported botanical wax identity |
| required_metadata | CPC code, botanical and scientific identity, supplier/source geography, starting condition, exact route and technology, refined and colour state, product form and specification, reference UUID, site, period, capacity and utilization, allocation, wastewater destination, packaging, exclusions and unresolved UUID register |
| required_quality_disclosure | Primary-data share, temporal/geographical/technological representativeness, meter and scale coverage, laboratory methods, mass/solvent/refrigerant/water reconciliations, allocation sensitivity, missing data and verification result |
| update_trigger | New botanical wax identity or route; product-specification change; solvent, refrigerant, bleaching, extraction, forming, packaging or treatment technology change; material supplier, allocation or boundary change; new dual-verified Tiangong UUID; material evidence or regulatory change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure, retained raw CSV, code 21931 (2025). | Exact product-category boundary: vegetable waxes excluding triglycerides; separation from degras and treatment residues classified at CPC 21932. |
| `usda-ams-carnauba-wax-2014` | `official_guidance` | USDA Agricultural Marketing Service. Technical Evaluation Report: Waxes—Carnauba Wax. 22 January 2014. https://www.ams.usda.gov/sites/default/files/media/waxes%20report%202014.pdf | Carnauba leaf preparation, wax-powder recovery, steam or water melting, solvent routes, clay treatment, hydrogen-peroxide bleaching, filtration aids, flaking and packaging process decomposition. |
| `fao-jecfa-candelilla-wax-2005` | `standard` | FAO/WHO JECFA. Combined Compendium of Food Additive Specifications: Candelilla wax. 2005. https://www.fao.org/4/a0044e/a0044e05.htm | Candelilla feedstock identity and the acidified-water boiling, skimming, solidification, acid treatment and filter-press route. |
| `fao-nwfp-diversification-2009` | `official_guidance` | FAO. Non-farm income from non-wood forest products. Diversification Booklet 12. 2009. https://www.fao.org/4/i0527e/i0527e.pdf | Carnauba leaf drying, threshing, melting, straining and cooling; candelilla collection and extraction by boiling or solvent route. |
| `usda-nifa-rice-bran-wax-0209429` | `official_guidance` | USDA NIFA CRIS project 0209429, Development of a process for producing a serum cholesterol-lowering agent derived from rice bran wax. https://portal.nifa.usda.gov/web/crisprojectpages/0209429-development-of-a-process-for-producing-a-serum-cholesterol-lowering-agent-derived-from-rice-bran-wax.html | Conditional rice-bran-wax recovery technologies: dry, wet or solvent winterization, high-temperature hexane extraction and supercritical-carbon-dioxide extraction. |
| `us-fda-grn-720-rice-bran-wax` | `official_guidance` | U.S. Food and Drug Administration. GRAS Notice No. 720: Rice bran wax. https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=720&set=grasnotices | Official rice bran wax product identity and food-use context; not used for inventory defaults. |
| `jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre. Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627. 2019. DOI: 10.2760/243911. https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | Facility utility, cleaning, wastewater, waste-gas and monitoring process structure without adopting cross-sector numerical values. |
| `eu-fdm-bat-2019-2031` | `standard` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Inventory completeness for water, energy, raw materials, wastewater, waste gas, cleaning chemicals, refrigeration and individually monitored wastewater and air-emission parameters. |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific bill of materials, company-specific foreground data, complete LCI, allocation, data quality, transparent reporting and verification. |
