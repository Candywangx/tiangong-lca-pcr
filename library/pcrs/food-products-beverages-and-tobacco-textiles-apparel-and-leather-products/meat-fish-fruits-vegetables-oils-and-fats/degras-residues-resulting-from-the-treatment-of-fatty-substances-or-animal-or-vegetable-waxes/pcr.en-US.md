---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.degras-residues-resulting-from-the-treatment-of-fatty-substances-or-animal-or-vegetable-waxes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes

## 1. Scope and Applicability

This PCR applies only to CPC 21932 degras and residues resulting from the treatment of fatty substances, animal waxes, or vegetable waxes. A conforming foreground data package must lock the dataset to one exact source-residue identity, one documented facility route, one final physical and quality state, one geography, and one study period; the broad CPC title is not permission to mix unrelated residue origins or processes.

Covered starting identities include the specifically declared streams represented in the inventory, such as vegetable-oil neutralisation soapstock, oil-bearing spent bleaching earth, vegetable-oil dewaxing filter cake, animal-fat melting separator solids, sheepskin dry-degreasing recovered grease, and animal- or vegetable-wax refining filter cake. The dataset must activate only the exact row matching its source. If an actual chemically distinct exchange is not listed, a new atomic row and identity review are required before claiming conformance; no catch-all flow may be substituted.

Finished edible or technical fats and oils, finished animal or vegetable waxes, untreated raw fatty materials, biodiesel, dairy products, unrelated sludges, and downstream products made from the reference residue are excluded. Upstream production of the original fat or wax and the upstream operation that generated the declared starting residue are outside this foreground gate unless explicitly expanded and separately reported. Downstream transport, further conversion, use, recycling, and final disposal are outside the gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.degras-residues-resulting-from-the-treatment-of-fatty-substances-or-animal-or-vegetable-waxes` |
| classification_refs | CPC 3.0 `21932`, Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes |
| covered_products | degras and treatment residues from one specifically declared fatty-substance, animal-wax, or vegetable-wax source and one documented route |
| excluded_products | finished fats, oils, or waxes; untreated fatty raw materials; dairy products; biodiesel; unrelated residues; downstream converted products |
| representative_product | the exact released residue product declared by source identity, route, composition or quality state, and legal product or waste status |
| production_route | receipt and identity control; declared mechanical, aqueous, solvent, adsorption, filtration, concentration, drying, or cooling operations; release; cleaning; conditional on-site wastewater treatment |
| market_state | net factory-gate residue as released in bulk or a specifically declared package; package mass excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming CPC 21932 degras or treatment residue, locked to one exact upstream residue source, one actual treatment route, and one released quality state |
| How much | 1 kg net product; packaging excluded |
| How well | Declare source material, generating unit operation, route, physical state, moisture or dry-matter basis, residual solvent where relevant, product specification, contaminant controls, destination, and legal product or waste status |
| How long or cycle | One identified production lot or campaign at release within the declared study period |
| reference_flow_link | output of `packaging_storage_release`, reconciled through the foreground mass balance |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes `98984fb7-e8b6-4d33-b6c7-130f38acbf15` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact source-residue identity; source animal or plant material where applicable; generating unit operation; selected treatment route; final physical state; moisture or dry-matter basis; residual solvent where applicable; product specification; legal product or waste status; geography; study period; packaging configuration; co-product allocation; declared gate |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

Identity audit note: the public Tiangong reference flow passes the supplied state-100 Product, exact baseName, CPC 21932, Mass, Units of mass, and kg gates. Its remote `generalComment` instead begins with “22 Dairy products...”. That inconsistent field is rejected as semantic evidence and must not introduce any dairy meaning into this PCR; the defect is preserved as a manifest review limitation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Fix the reference amount at 1 kg net conforming released CPC 21932 product; exclude packaging and co-product mass. |
| `net_mass_basis` | material, product, co-product, and waste rows | Mass | kg | Record each named exchange separately on its measured net mass basis and disclose moisture or dry-matter basis when it changes interpretation. |
| `water_volume` | each water input | Volume | m3 | Record each process-water input from the applicable meter and do not merge water with steam, condensate, or wastewater. |
| `electricity_energy` | each electricity input | Energy | kWh | Record stage electricity separately; document any shared-meter allocation from operating records. |
| `thermal_carrier_energy` | purchased steam, purchased hot water, natural gas, diesel fuel, and LPG | Energy | MJ | Keep every carrier separate and document the energy conversion basis and lower heating value for fuels. |
| `solvent_mass_balance` | n-hexane route | Mass | kg | Reconcile purchases, opening and closing stock, recovery, product retention, wastes, and separate air and water releases for n-hexane. |
| `refrigerant_mass_balance` | R717, R744, and R290 | Mass | kg | Close a separate charge, purchase, recovery, and inventory mass balance for each actual refrigerant. |
| `pollutant_load` | each elementary emission | Mass | kg | Derive each substance or analytical parameter load from matched measured flow and concentration, direct mass measurement, or a fully documented activity calculation. |
| `no_default_conversion` | all inventory quantities | row-declared property | row-declared unit | Do not import BREF consumption ranges, BAT-AELs, or author estimates as default inventory quantities or factors. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_declared_residue_gate` | foreground starting gate | Begin at the first transfer of the exact declared source residue into this foreground recovery or treatment system; identify the upstream generating operation and do not silently assign zero upstream burden. | `un-cpc-3-0-retained`; `eu-pef-2021-2279` |
| `sb_route_lock` | process inclusion | Include only operations shown in the facility flow diagram for the declared route and retain one exact residue-source identity throughout the mass balance. | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `sb_upstream_separation` | upstream systems | Keep production of the original fatty substance or wax and the operation generating the source residue outside this foreground gate unless the study explicitly expands the boundary and reports them separately. | `un-cpc-3-0-retained`; `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream systems | Exclude transport after the factory gate, further conversion, use, recycling, and final disposal unless the declared study scope explicitly adds them. | `eu-pef-2021-2279` |
| `sb_internal_recovery` | internal solvent, water, heat, or material recovery | Treat internal recovery as an internal transfer that reduces net external input; do not create an avoided-product credit unless a distinct output crosses the foreground gate. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `sb_no_unlisted_selector` | inventory completeness | If an actual exchange is absent from the cards, add and review one exact atomic row; never use a generic materials, chemicals, energy, fuels, waxes, residues, wastes, emissions, or other-residue selector. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | exact_source_residue_lot |
| starting_condition_role | traceable residue-origin gate into the declared treatment route |
| product_classification_scope | CPC 3.0 `21932` only |
| recursive_input_rule | a CPC 21932 input reused in the same foreground system is an internal transfer; a CPC 21932 input received from another system requires a separately documented upstream dataset and must not be recursively regenerated |
| upstream_dataset_requirement | identify the original fat or wax source, the unit operation generating the residue, quantity, quality state, allocation or burden treatment, supplier or internal source, and evidence |
| disclosure | declare exact source-residue identity, one route flow diagram, all active and non-applicable atomic rows, moisture or dry-matter basis, legal status, co-products, wastes, emissions, geography, period, and gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `residue_receipt_mechanical_conditioning` | Residue Receipt, Identity Control, and Mechanical Conditioning | `required` |  | foreground | mass balance normalized to the final reference product |
| `aqueous_splitting_washing` | Aqueous Splitting, Neutralisation, and Washing | `conditional` | Include only when the declared route uses an aqueous acid, alkali, neutralisation, or washing step. | foreground | route-specific mass balance normalized to the final reference product |
| `solvent_extraction_recovery` | n-Hexane Extraction and Solvent Recovery | `conditional` | Include only when the declared route uses n-hexane and identifies the recovery and emission-control train. | foreground | n-hexane mass balance normalized to the final reference product |
| `adsorption_filtration_concentration_cooling` | Adsorption, Filtration, Concentration, Drying, and Cooling | `conditional` | Include each operation only when it is present in the declared facility flow diagram. | foreground | stage material and utility balances normalized to the final reference product |
| `onsite_fuel_combustion` | On-site Fuel Combustion for Process Heat | `conditional` | Include only for each fuel actually combusted inside the foreground boundary; purchased steam and hot water remain separate inputs to their consuming stages. | foreground_utility | fuel energy and direct-emission balance normalized to the final reference product |
| `packaging_storage_release` | Packaging, Storage, and Product Release | `required` |  | foreground | 1 kg net conforming reference product at the factory gate |
| `cleaning_sanitation` | Equipment Cleaning and Sanitation | `required` |  | foreground_support | cleaning campaign records allocated to the final reference product |
| `onsite_wastewater_treatment` | On-site Wastewater Treatment | `conditional` | Include when process wastewater is treated inside the foreground boundary; otherwise record the exact untreated stream transferred off site in its generating process. | foreground_support | treated-water and residual balances normalized to the final reference product |

### Process: Residue Receipt, Identity Control, and Mechanical Conditioning (`residue_receipt_mechanical_conditioning`)

#### Inputs

##### Product flows

###### Vegetable oil neutralisation soapstock input (`vegetable_oil_neutralisation_soapstock_input`)

This card records only Vegetable oil neutralisation soapstock entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from lot-specific receiving and calibrated weighing records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Vegetable oil neutralisation soapstock
- Flow property / unit: Mass / kg
- Amount rule: foreground measured accepted mass for this exact declared source-residue identity; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Spent bleaching earth containing vegetable oil input (`spent_bleaching_earth_containing_vegetable_oil_input`)

This card records only Spent bleaching earth containing vegetable oil entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from lot-specific receiving and calibrated weighing records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Spent bleaching earth containing vegetable oil
- Flow property / unit: Mass / kg
- Amount rule: foreground measured accepted mass for this exact declared source-residue identity; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Vegetable oil dewaxing filter cake input (`vegetable_oil_dewaxing_filter_cake_input`)

This card records only Vegetable oil dewaxing filter cake entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from lot-specific receiving and calibrated weighing records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Vegetable oil dewaxing filter cake
- Flow property / unit: Mass / kg
- Amount rule: foreground measured accepted mass for this exact declared source-residue identity; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Animal fat melting separator solids input (`animal_fat_melting_separator_solids_input`)

This card records only Animal fat melting separator solids entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from lot-specific receiving and calibrated weighing records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Animal fat melting separator solids
- Flow property / unit: Mass / kg
- Amount rule: foreground measured accepted mass for this exact declared source-residue identity; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sheepskin dry-degreasing recovered grease input (`sheepskin_dry_degreasing_recovered_grease_input`)

This card records only Sheepskin dry-degreasing recovered grease entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from lot-specific receiving and calibrated weighing records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sheepskin dry-degreasing recovered grease
- Flow property / unit: Mass / kg
- Amount rule: foreground measured accepted mass for this exact declared source-residue identity; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `eu-pef-2021-2279`

###### Animal wax refining filter cake input (`animal_wax_refining_filter_cake_input`)

This card records only Animal wax refining filter cake entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from lot-specific receiving and calibrated weighing records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Animal wax refining filter cake
- Flow property / unit: Mass / kg
- Amount rule: foreground measured accepted mass for this exact declared source-residue identity; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `un-cpc-3-0-retained`; `eu-pef-2021-2279`

###### Vegetable wax refining filter cake input (`vegetable_wax_refining_filter_cake_input`)

This card records only Vegetable wax refining filter cake entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from lot-specific receiving and calibrated weighing records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Vegetable wax refining filter cake
- Flow property / unit: Mass / kg
- Amount rule: foreground measured accepted mass for this exact declared source-residue identity; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `un-cpc-3-0-retained`; `eu-pef-2021-2279`

###### Process water input (`receipt_process_water_input`)

This card records only Process water entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from calibrated water-meter readings; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered volume of this exact water input; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Electricity, grid input (`receipt_grid_electricity_input`)

This card records only Electricity, grid entering Residue Receipt, Identity Control, and Mechanical Conditioning when the declared route actually uses this exchange. Obtain the amount from stage meters, submeter logs, or documented shared-meter allocation; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity delivered to this stage, with shared meters allocated by documented operating records; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rejected vegetable oil neutralisation soapstock waste output (`rejected_vegetable_oil_neutralisation_soapstock_output`)

This card records only Rejected vegetable oil neutralisation soapstock leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Rejected vegetable oil neutralisation soapstock
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Rejected spent bleaching earth containing vegetable oil waste output (`rejected_spent_bleaching_earth_containing_vegetable_oil_output`)

This card records only Rejected spent bleaching earth containing vegetable oil leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Rejected spent bleaching earth containing vegetable oil
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Rejected vegetable oil dewaxing filter cake waste output (`rejected_vegetable_oil_dewaxing_filter_cake_output`)

This card records only Rejected vegetable oil dewaxing filter cake leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Rejected vegetable oil dewaxing filter cake
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Rejected animal fat melting separator solids waste output (`rejected_animal_fat_melting_separator_solids_output`)

This card records only Rejected animal fat melting separator solids leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Rejected animal fat melting separator solids
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Rejected sheepskin dry-degreasing recovered grease waste output (`rejected_sheepskin_dry_degreasing_recovered_grease_output`)

This card records only Rejected sheepskin dry-degreasing recovered grease leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Rejected sheepskin dry-degreasing recovered grease
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Rejected animal wax refining filter cake waste output (`rejected_animal_wax_refining_filter_cake_output`)

This card records only Rejected animal wax refining filter cake leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Rejected animal wax refining filter cake
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Rejected vegetable wax refining filter cake waste output (`rejected_vegetable_wax_refining_filter_cake_output`)

This card records only Rejected vegetable wax refining filter cake leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Rejected vegetable wax refining filter cake
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Screened coarse solids from residue conditioning waste output (`screened_coarse_solids_from_residue_conditioning_output`)

This card records only Screened coarse solids from residue conditioning leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Screened coarse solids from residue conditioning
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Settled mineral solids from residue conditioning waste output (`settled_mineral_solids_from_residue_conditioning_output`)

This card records only Settled mineral solids from residue conditioning leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Settled mineral solids from residue conditioning
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Centrifuge solids from residue conditioning waste output (`centrifuge_solids_from_residue_conditioning_output`)

This card records only Centrifuge solids from residue conditioning leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Centrifuge solids from residue conditioning
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Residue-conditioning aqueous phase waste output (`residue_conditioning_aqueous_phase_output`)

This card records only Residue-conditioning aqueous phase leaving Residue Receipt, Identity Control, and Mechanical Conditioning as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Residue-conditioning aqueous phase
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Elementary flows


### Process: Aqueous Splitting, Neutralisation, and Washing (`aqueous_splitting_washing`)

#### Inputs

##### Product flows

###### Process water input (`aqueous_process_water_input`)

This card records only Process water entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from calibrated water-meter readings; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered volume of this exact water input; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_utilities`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sulfuric acid input (`aqueous_sulfuric_acid_input`)

This card records only Sulfuric acid entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Hydrochloric acid input (`aqueous_hydrochloric_acid_input`)

This card records only Hydrochloric acid entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Hydrochloric acid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium hydroxide input (`aqueous_sodium_hydroxide_input`)

This card records only Sodium hydroxide entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Calcium hydroxide input (`aqueous_calcium_hydroxide_input`)

This card records only Calcium hydroxide entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_materials`
- Sources: `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Magnesium oxide input (`aqueous_magnesium_oxide_input`)

This card records only Magnesium oxide entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Magnesium oxide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_materials`
- Sources: `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sodium carbonate input (`aqueous_sodium_carbonate_input`)

This card records only Sodium carbonate entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_materials`
- Sources: `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Electricity, grid input (`aqueous_grid_electricity_input`)

This card records only Electricity, grid entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from stage meters, submeter logs, or documented shared-meter allocation; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity delivered to this stage, with shared meters allocated by documented operating records; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_utilities`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased steam input (`aqueous_purchased_steam_input`)

This card records only Purchased steam entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_utilities`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased hot water input (`aqueous_purchased_hot_water_input`)

This card records only Purchased hot water entering Aqueous Splitting, Neutralisation, and Washing when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_utilities`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered fatty acid phase product output (`recovered_fatty_acid_phase_output`)

This card records only Recovered fatty acid phase leaving Aqueous Splitting, Neutralisation, and Washing as a distinct product or co-product when generated. Obtain the amount from calibrated release-scale and batch reconciliation records; do not combine it with the reference product or another output.

- Selected flow: Recovered fatty acid phase
- Flow property / unit: Mass / kg
- Amount rule: weighed net mass of this exact product or co-product; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_products`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Recovered neutral fat phase product output (`recovered_neutral_fat_phase_output`)

This card records only Recovered neutral fat phase leaving Aqueous Splitting, Neutralisation, and Washing as a distinct product or co-product when generated. Obtain the amount from calibrated release-scale and batch reconciliation records; do not combine it with the reference product or another output.

- Selected flow: Recovered neutral fat phase
- Flow property / unit: Mass / kg
- Amount rule: weighed net mass of this exact product or co-product; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_products`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

###### Acidic soapstock-splitting wastewater waste output (`acidic_soapstock_splitting_wastewater_output`)

This card records only Acidic soapstock-splitting wastewater leaving Aqueous Splitting, Neutralisation, and Washing as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Acidic soapstock-splitting wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Alkaline residue-washing wastewater waste output (`alkaline_residue_washing_wastewater_output`)

This card records only Alkaline residue-washing wastewater leaving Aqueous Splitting, Neutralisation, and Washing as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Alkaline residue-washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Neutralisation precipitate from residue treatment waste output (`neutralisation_precipitate_from_residue_treatment_output`)

This card records only Neutralisation precipitate from residue treatment leaving Aqueous Splitting, Neutralisation, and Washing as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Neutralisation precipitate from residue treatment
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Elementary flows


### Process: n-Hexane Extraction and Solvent Recovery (`solvent_extraction_recovery`)

#### Inputs

##### Product flows

###### n-Hexane input (`solvent_n_hexane_input`)

This card records only n-Hexane entering n-Hexane Extraction and Solvent Recovery when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: n-Hexane
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Mineral oil scrubber liquid input (`solvent_mineral_oil_scrubber_liquid_input`)

This card records only Mineral oil scrubber liquid entering n-Hexane Extraction and Solvent Recovery when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Mineral oil scrubber liquid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Granular activated carbon input (`solvent_granular_activated_carbon_input`)

This card records only Granular activated carbon entering n-Hexane Extraction and Solvent Recovery when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Granular activated carbon
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Process water input (`solvent_process_water_input`)

This card records only Process water entering n-Hexane Extraction and Solvent Recovery when the declared route actually uses this exchange. Obtain the amount from calibrated water-meter readings; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered volume of this exact water input; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Electricity, grid input (`solvent_grid_electricity_input`)

This card records only Electricity, grid entering n-Hexane Extraction and Solvent Recovery when the declared route actually uses this exchange. Obtain the amount from stage meters, submeter logs, or documented shared-meter allocation; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity delivered to this stage, with shared meters allocated by documented operating records; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased steam input (`solvent_purchased_steam_input`)

This card records only Purchased steam entering n-Hexane Extraction and Solvent Recovery when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased hot water input (`solvent_purchased_hot_water_input`)

This card records only Purchased hot water entering n-Hexane Extraction and Solvent Recovery when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered n-hexane product output (`recovered_n_hexane_output`)

This card records only Recovered n-hexane leaving n-Hexane Extraction and Solvent Recovery as a distinct product or co-product when generated. Obtain the amount from calibrated release-scale and batch reconciliation records; do not combine it with the reference product or another output.

- Selected flow: Recovered n-hexane
- Flow property / unit: Mass / kg
- Amount rule: weighed net mass of this exact product or co-product; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_products`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Solvent-extracted fatty phase product output (`solvent_extracted_fatty_phase_output`)

This card records only Solvent-extracted fatty phase leaving n-Hexane Extraction and Solvent Recovery as a distinct product or co-product when generated. Obtain the amount from calibrated release-scale and batch reconciliation records; do not combine it with the reference product or another output.

- Selected flow: Solvent-extracted fatty phase
- Flow property / unit: Mass / kg
- Amount rule: weighed net mass of this exact product or co-product; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_products`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

###### Aqueous phase from n-hexane distillation waste output (`aqueous_phase_from_n_hexane_distillation_output`)

This card records only Aqueous phase from n-hexane distillation leaving n-Hexane Extraction and Solvent Recovery as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Aqueous phase from n-hexane distillation
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### n-Hexane distillation bottoms waste output (`n_hexane_distillation_bottoms_output`)

This card records only n-Hexane distillation bottoms leaving n-Hexane Extraction and Solvent Recovery as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: n-Hexane distillation bottoms
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Spent granular activated carbon from n-hexane vapor control waste output (`spent_granular_activated_carbon_from_n_hexane_control_output`)

This card records only Spent granular activated carbon from n-hexane vapor control leaving n-Hexane Extraction and Solvent Recovery as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Spent granular activated carbon from n-hexane vapor control
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### n-Hexane, to air elementary emission (`n_hexane_to_air_output`)

This card records only n-Hexane, to air leaving n-Hexane Extraction and Solvent Recovery when this emission is present. Determine the amount from n-hexane purchase, recovery, stock, waste, and monitoring records; do not combine different substances, parameters, or receiving media.

- Selected flow: n-Hexane, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate this exact n-hexane release from the measured solvent balance or direct monitoring; no PCR default loss rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_emission_balance`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### n-Hexane, to water elementary emission (`n_hexane_to_water_output`)

This card records only n-Hexane, to water leaving n-Hexane Extraction and Solvent Recovery when this emission is present. Determine the amount from n-hexane purchase, recovery, stock, waste, and monitoring records; do not combine different substances, parameters, or receiving media.

- Selected flow: n-Hexane, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this exact n-hexane release from the measured solvent balance or direct monitoring; no PCR default loss rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_emission_balance`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`


### Process: Adsorption, Filtration, Concentration, Drying, and Cooling (`adsorption_filtration_concentration_cooling`)

#### Inputs

##### Product flows

###### Activated bleaching earth input (`finishing_activated_bleaching_earth_input`)

This card records only Activated bleaching earth entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Activated bleaching earth
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Powdered activated carbon input (`finishing_powdered_activated_carbon_input`)

This card records only Powdered activated carbon entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Powdered activated carbon
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Diatomaceous earth filter aid input (`finishing_diatomaceous_earth_filter_aid_input`)

This card records only Diatomaceous earth filter aid entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Cellulose filter aid input (`finishing_cellulose_filter_aid_input`)

This card records only Cellulose filter aid entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Cellulose filter aid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Polypropylene filter cloth input (`finishing_polypropylene_filter_cloth_input`)

This card records only Polypropylene filter cloth entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Polypropylene filter cloth
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Process water input (`finishing_process_water_input`)

This card records only Process water entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from calibrated water-meter readings; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered volume of this exact water input; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Electricity, grid input (`finishing_grid_electricity_input`)

This card records only Electricity, grid entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from stage meters, submeter logs, or documented shared-meter allocation; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity delivered to this stage, with shared meters allocated by documented operating records; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Purchased steam input (`finishing_purchased_steam_input`)

This card records only Purchased steam entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Purchased hot water input (`finishing_purchased_hot_water_input`)

This card records only Purchased hot water entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Ammonia refrigerant (R717) input (`finishing_ammonia_refrigerant_r717_input`)

This card records only Ammonia refrigerant (R717) entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Carbon dioxide refrigerant (R744) input (`finishing_carbon_dioxide_refrigerant_r744_input`)

This card records only Carbon dioxide refrigerant (R744) entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Propane refrigerant (R290) input (`finishing_propane_refrigerant_r290_input`)

This card records only Propane refrigerant (R290) entering Adsorption, Filtration, Concentration, Drying, and Cooling when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Propane refrigerant (R290)
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent activated bleaching earth from residue polishing waste output (`spent_activated_bleaching_earth_from_polishing_output`)

This card records only Spent activated bleaching earth from residue polishing leaving Adsorption, Filtration, Concentration, Drying, and Cooling as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Spent activated bleaching earth from residue polishing
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Spent powdered activated carbon from residue polishing waste output (`spent_powdered_activated_carbon_from_polishing_output`)

This card records only Spent powdered activated carbon from residue polishing leaving Adsorption, Filtration, Concentration, Drying, and Cooling as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Spent powdered activated carbon from residue polishing
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Spent diatomaceous earth from residue filtration waste output (`spent_diatomaceous_earth_from_filtration_output`)

This card records only Spent diatomaceous earth from residue filtration leaving Adsorption, Filtration, Concentration, Drying, and Cooling as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Spent diatomaceous earth from residue filtration
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Spent cellulose filter aid from residue filtration waste output (`spent_cellulose_filter_aid_from_filtration_output`)

This card records only Spent cellulose filter aid from residue filtration leaving Adsorption, Filtration, Concentration, Drying, and Cooling as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Spent cellulose filter aid from residue filtration
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Spent polypropylene filter cloth from residue filtration waste output (`spent_polypropylene_filter_cloth_from_filtration_output`)

This card records only Spent polypropylene filter cloth from residue filtration leaving Adsorption, Filtration, Concentration, Drying, and Cooling as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Spent polypropylene filter cloth from residue filtration
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Evaporator condensate from residue concentration waste output (`evaporator_condensate_from_residue_concentration_output`)

This card records only Evaporator condensate from residue concentration leaving Adsorption, Filtration, Concentration, Drying, and Cooling as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Evaporator condensate from residue concentration
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Vacuum-pump seal-water effluent waste output (`vacuum_pump_seal_water_effluent_output`)

This card records only Vacuum-pump seal-water effluent leaving Adsorption, Filtration, Concentration, Drying, and Cooling as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Vacuum-pump seal-water effluent
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Elementary flows

###### Ammonia (R717), to air elementary emission (`ammonia_r717_to_air_output`)

This card records only Ammonia (R717), to air leaving Adsorption, Filtration, Concentration, Drying, and Cooling when this emission is present. Determine the amount from refrigerant service and inventory mass-balance records; do not combine different substances, parameters, or receiving media.

- Selected flow: Ammonia (R717), to air
- Flow property / unit: Mass / kg
- Amount rule: calculate release of this exact refrigerant from a verified charge, purchase, recovery, and stock mass balance; no PCR default loss rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_refrigerant_balance`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Carbon dioxide (R744), to air elementary emission (`carbon_dioxide_r744_to_air_output`)

This card records only Carbon dioxide (R744), to air leaving Adsorption, Filtration, Concentration, Drying, and Cooling when this emission is present. Determine the amount from refrigerant service and inventory mass-balance records; do not combine different substances, parameters, or receiving media.

- Selected flow: Carbon dioxide (R744), to air
- Flow property / unit: Mass / kg
- Amount rule: calculate release of this exact refrigerant from a verified charge, purchase, recovery, and stock mass balance; no PCR default loss rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_refrigerant_balance`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Propane (R290), to air elementary emission (`propane_r290_to_air_output`)

This card records only Propane (R290), to air leaving Adsorption, Filtration, Concentration, Drying, and Cooling when this emission is present. Determine the amount from refrigerant service and inventory mass-balance records; do not combine different substances, parameters, or receiving media.

- Selected flow: Propane (R290), to air
- Flow property / unit: Mass / kg
- Amount rule: calculate release of this exact refrigerant from a verified charge, purchase, recovery, and stock mass balance; no PCR default loss rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_refrigerant_balance`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Particulate matter, ≤2.5 µm, to air elementary emission (`particulate_matter_2_5um_to_air_output`)

This card records only Particulate matter, ≤2.5 µm, to air leaving Adsorption, Filtration, Concentration, Drying, and Cooling when this emission is present. Determine the amount from calibrated emission measurements and the applicable calculation rule; do not combine different substances, parameters, or receiving media.

- Selected flow: Particulate matter, ≤2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the load from measured flow and concentration or record a direct calibrated mass measurement; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Particulate matter, 2.5–10 µm, to air elementary emission (`particulate_matter_2_5_10um_to_air_output`)

This card records only Particulate matter, 2.5–10 µm, to air leaving Adsorption, Filtration, Concentration, Drying, and Cooling when this emission is present. Determine the amount from calibrated emission measurements and the applicable calculation rule; do not combine different substances, parameters, or receiving media.

- Selected flow: Particulate matter, 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the load from measured flow and concentration or record a direct calibrated mass measurement; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`


### Process: On-site Fuel Combustion for Process Heat (`onsite_fuel_combustion`)

#### Inputs

##### Product flows

###### Natural gas input (`onsite_natural_gas_input`)

This card records only Natural gas entering On-site Fuel Combustion for Process Heat when the declared route actually uses this exchange. Obtain the amount from fuel-specific meters, invoices, and documented lower heating value; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced lower-heating-value energy for this exact fuel; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Diesel fuel input (`onsite_diesel_fuel_input`)

This card records only Diesel fuel entering On-site Fuel Combustion for Process Heat when the declared route actually uses this exchange. Obtain the amount from fuel-specific meters, invoices, and documented lower heating value; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced lower-heating-value energy for this exact fuel; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`onsite_liquefied_petroleum_gas_input`)

This card records only Liquefied petroleum gas entering On-site Fuel Combustion for Process Heat when the declared route actually uses this exchange. Obtain the amount from fuel-specific meters, invoices, and documented lower heating value; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced lower-heating-value energy for this exact fuel; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Carbon dioxide, fossil, to air elementary emission (`fossil_carbon_dioxide_to_air_output`)

This card records only Carbon dioxide, fossil, to air leaving On-site Fuel Combustion for Process Heat when this emission is present. Determine the amount from fuel records plus documented factors or calibrated stack measurements; do not combine different substances, parameters, or receiving media.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured use of the named fuel and a documented facility-specific or cited factor, or measure directly; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Carbon monoxide, to air elementary emission (`carbon_monoxide_to_air_output`)

This card records only Carbon monoxide, to air leaving On-site Fuel Combustion for Process Heat when this emission is present. Determine the amount from fuel records plus documented factors or calibrated stack measurements; do not combine different substances, parameters, or receiving media.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured use of the named fuel and a documented facility-specific or cited factor, or measure directly; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Nitrogen dioxide, to air elementary emission (`nitrogen_dioxide_to_air_output`)

This card records only Nitrogen dioxide, to air leaving On-site Fuel Combustion for Process Heat when this emission is present. Determine the amount from fuel records plus documented factors or calibrated stack measurements; do not combine different substances, parameters, or receiving media.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured use of the named fuel and a documented facility-specific or cited factor, or measure directly; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sulfur dioxide, to air elementary emission (`sulfur_dioxide_to_air_output`)

This card records only Sulfur dioxide, to air leaving On-site Fuel Combustion for Process Heat when this emission is present. Determine the amount from fuel records plus documented factors or calibrated stack measurements; do not combine different substances, parameters, or receiving media.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured use of the named fuel and a documented facility-specific or cited factor, or measure directly; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Particulate matter, ≤2.5 µm, to air elementary emission (`combustion_particulate_matter_2_5um_to_air_output`)

This card records only Particulate matter, ≤2.5 µm, to air leaving On-site Fuel Combustion for Process Heat when this emission is present. Determine the amount from fuel records plus documented factors or calibrated stack measurements; do not combine different substances, parameters, or receiving media.

- Selected flow: Particulate matter, ≤2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured use of the named fuel and a documented facility-specific or cited factor, or measure directly; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Particulate matter, 2.5–10 µm, to air elementary emission (`combustion_particulate_matter_2_5_10um_to_air_output`)

This card records only Particulate matter, 2.5–10 µm, to air leaving On-site Fuel Combustion for Process Heat when this emission is present. Determine the amount from fuel records plus documented factors or calibrated stack measurements; do not combine different substances, parameters, or receiving media.

- Selected flow: Particulate matter, 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured use of the named fuel and a documented facility-specific or cited factor, or measure directly; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`


### Process: Packaging, Storage, and Product Release (`packaging_storage_release`)

#### Inputs

##### Product flows

###### Electricity, grid input (`release_grid_electricity_input`)

This card records only Electricity, grid entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from stage meters, submeter logs, or documented shared-meter allocation; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity delivered to this stage, with shared meters allocated by documented operating records; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### High-density polyethylene drum input (`high_density_polyethylene_drum_input`)

This card records only High-density polyethylene drum entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: High-density polyethylene drum
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Carbon steel drum input (`carbon_steel_drum_input`)

This card records only Carbon steel drum entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Carbon steel drum
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### High-density polyethylene intermediate bulk-container bottle input (`hdpe_intermediate_bulk_container_bottle_input`)

This card records only High-density polyethylene intermediate bulk-container bottle entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: High-density polyethylene intermediate bulk-container bottle
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Carbon steel intermediate bulk-container cage input (`steel_intermediate_bulk_container_cage_input`)

This card records only Carbon steel intermediate bulk-container cage entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Carbon steel intermediate bulk-container cage
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Polypropylene flexible intermediate bulk container input (`polypropylene_flexible_intermediate_bulk_container_input`)

This card records only Polypropylene flexible intermediate bulk container entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Polypropylene flexible intermediate bulk container
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Low-density polyethylene liner input (`low_density_polyethylene_liner_input`)

This card records only Low-density polyethylene liner entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Low-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Kraft paper sack input (`kraft_paper_sack_input`)

This card records only Kraft paper sack entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Wood pallet input (`wood_pallet_input`)

This card records only Wood pallet entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Low-density polyethylene stretch film input (`low_density_polyethylene_stretch_film_input`)

This card records only Low-density polyethylene stretch film entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Paper pressure-sensitive label input (`paper_pressure_sensitive_label_input`)

This card records only Paper pressure-sensitive label entering Packaging, Storage, and Product Release when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Paper pressure-sensitive label
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_materials`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming CPC 21932 reference product (`reference_cpc21932_product_output`)

This card records only the net conforming CPC 21932 reference product leaving Packaging, Storage, and Product Release at the declared factory gate. Obtain the release mass from the fixed reference definition reconciled to release-scale records; no packaging mass or co-product mass may be included.

- Selected flow: Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes `98984fb7-e8b6-4d33-b6c7-130f38acbf15`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net conforming CPC 21932 product at release; packaging is excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol: `cp_release_reference_product`
- Sources: `un-cpc-3-0-retained`; `eu-pef-2021-2279`

##### Waste flows

###### Off-specification CPC 21932 degras residue waste output (`off_specification_cpc21932_degras_residue_output`)

This card records only Off-specification CPC 21932 degras residue leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Off-specification CPC 21932 degras residue
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### High-density polyethylene drum scrap waste output (`high_density_polyethylene_drum_scrap_output`)

This card records only High-density polyethylene drum scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: High-density polyethylene drum scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Carbon steel drum scrap waste output (`carbon_steel_drum_scrap_output`)

This card records only Carbon steel drum scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Carbon steel drum scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### High-density polyethylene intermediate bulk-container bottle scrap waste output (`hdpe_intermediate_bulk_container_bottle_scrap_output`)

This card records only High-density polyethylene intermediate bulk-container bottle scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: High-density polyethylene intermediate bulk-container bottle scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Carbon steel intermediate bulk-container cage scrap waste output (`steel_intermediate_bulk_container_cage_scrap_output`)

This card records only Carbon steel intermediate bulk-container cage scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Carbon steel intermediate bulk-container cage scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Polypropylene flexible intermediate bulk-container scrap waste output (`polypropylene_flexible_intermediate_bulk_container_scrap_output`)

This card records only Polypropylene flexible intermediate bulk-container scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Polypropylene flexible intermediate bulk-container scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Low-density polyethylene liner scrap waste output (`low_density_polyethylene_liner_scrap_output`)

This card records only Low-density polyethylene liner scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Low-density polyethylene liner scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Kraft paper sack scrap waste output (`kraft_paper_sack_scrap_output`)

This card records only Kraft paper sack scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Kraft paper sack scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Broken wood pallet waste output (`broken_wood_pallet_output`)

This card records only Broken wood pallet leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Broken wood pallet
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Low-density polyethylene stretch-film scrap waste output (`low_density_polyethylene_stretch_film_scrap_output`)

This card records only Low-density polyethylene stretch-film scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Low-density polyethylene stretch-film scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Paper label backing scrap waste output (`paper_label_backing_scrap_output`)

This card records only Paper label backing scrap leaving Packaging, Storage, and Product Release as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Paper label backing scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_wastes`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### Elementary flows


### Process: Equipment Cleaning and Sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Process water input (`sanitation_process_water_input`)

This card records only Process water entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from calibrated water-meter readings; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered volume of this exact water input; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sodium hydroxide input (`sanitation_sodium_hydroxide_input`)

This card records only Sodium hydroxide entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Nitric acid input (`sanitation_nitric_acid_input`)

This card records only Nitric acid entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Phosphoric acid input (`sanitation_phosphoric_acid_input`)

This card records only Phosphoric acid entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Peracetic acid input (`sanitation_peracetic_acid_input`)

This card records only Peracetic acid entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Hydrogen peroxide input (`sanitation_hydrogen_peroxide_input`)

This card records only Hydrogen peroxide entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_materials`
- Sources: `ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Electricity, grid input (`sanitation_grid_electricity_input`)

This card records only Electricity, grid entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from stage meters, submeter logs, or documented shared-meter allocation; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity delivered to this stage, with shared meters allocated by documented operating records; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Purchased steam input (`sanitation_purchased_steam_input`)

This card records only Purchased steam entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Purchased hot water input (`sanitation_purchased_hot_water_input`)

This card records only Purchased hot water entering Equipment Cleaning and Sanitation when the declared route actually uses this exchange. Obtain the amount from carrier-specific meters and purchase records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced delivered energy for this exact purchased carrier; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Alkaline equipment-cleaning wastewater waste output (`alkaline_equipment_cleaning_wastewater_output`)

This card records only Alkaline equipment-cleaning wastewater leaving Equipment Cleaning and Sanitation as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Alkaline equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Nitric-acid equipment-cleaning wastewater waste output (`nitric_acid_equipment_cleaning_wastewater_output`)

This card records only Nitric-acid equipment-cleaning wastewater leaving Equipment Cleaning and Sanitation as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Nitric-acid equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Phosphoric-acid equipment-cleaning wastewater waste output (`phosphoric_acid_equipment_cleaning_wastewater_output`)

This card records only Phosphoric-acid equipment-cleaning wastewater leaving Equipment Cleaning and Sanitation as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Phosphoric-acid equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Peracetic-acid equipment-disinfection wastewater waste output (`peracetic_acid_equipment_disinfection_wastewater_output`)

This card records only Peracetic-acid equipment-disinfection wastewater leaving Equipment Cleaning and Sanitation as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Peracetic-acid equipment-disinfection wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Final equipment-rinse wastewater waste output (`final_equipment_rinse_wastewater_output`)

This card records only Final equipment-rinse wastewater leaving Equipment Cleaning and Sanitation as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Final equipment-rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Elementary flows


### Process: On-site Wastewater Treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity, grid input (`wwt_grid_electricity_input`)

This card records only Electricity, grid entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from stage meters, submeter logs, or documented shared-meter allocation; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity delivered to this stage, with shared meters allocated by documented operating records; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Process water input (`wwt_process_water_input`)

This card records only Process water entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from calibrated water-meter readings; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered volume of this exact water input; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Ferric chloride input (`wwt_ferric_chloride_input`)

This card records only Ferric chloride entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Aluminium sulfate input (`wwt_aluminium_sulfate_input`)

This card records only Aluminium sulfate entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Aluminium sulfate
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Calcium hydroxide input (`wwt_calcium_hydroxide_input`)

This card records only Calcium hydroxide entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sodium hydroxide input (`wwt_sodium_hydroxide_input`)

This card records only Sodium hydroxide entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sulfuric acid input (`wwt_sulfuric_acid_input`)

This card records only Sulfuric acid entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sodium carbonate input (`wwt_sodium_carbonate_input`)

This card records only Sodium carbonate entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Anionic polyacrylamide input (`wwt_anionic_polyacrylamide_input`)

This card records only Anionic polyacrylamide entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Granular activated carbon input (`wwt_granular_activated_carbon_input`)

This card records only Granular activated carbon entering On-site Wastewater Treatment when the declared route actually uses this exchange. Obtain the amount from weighing, receiving, stock, or invoice records; no different residue, material, chemical, water, or carrier may be combined in this card.

- Selected flow: Granular activated carbon
- Flow property / unit: Mass / kg
- Amount rule: foreground measured or invoiced net mass for this exact flow; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_materials`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment screen rejects waste output (`wastewater_treatment_screen_rejects_output`)

This card records only Wastewater-treatment screen rejects leaving On-site Wastewater Treatment as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Wastewater-treatment screen rejects
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Dissolved-air-flotation skimmings waste output (`dissolved_air_flotation_skimmings_output`)

This card records only Dissolved-air-flotation skimmings leaving On-site Wastewater Treatment as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Dissolved-air-flotation skimmings
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Wastewater biological sludge waste output (`wastewater_biological_sludge_output`)

This card records only Wastewater biological sludge leaving On-site Wastewater Treatment as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Wastewater biological sludge
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Wastewater chemical-precipitation sludge waste output (`wastewater_chemical_precipitation_sludge_output`)

This card records only Wastewater chemical-precipitation sludge leaving On-site Wastewater Treatment as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Wastewater chemical-precipitation sludge
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Spent granular activated carbon from wastewater treatment waste output (`spent_granular_activated_carbon_from_wwt_output`)

This card records only Spent granular activated carbon from wastewater treatment leaving On-site Wastewater Treatment as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Spent granular activated carbon from wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Treated process wastewater waste output (`treated_process_wastewater_output`)

This card records only Treated process wastewater leaving On-site Wastewater Treatment as a distinct waste stream when generated. Obtain the amount from waste-container weighing, transfer manifests, or a documented mass balance; do not combine it with another waste stream.

- Selected flow: Treated process wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced net mass of this exact waste stream; no PCR default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_wastes`
- Sources: `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### Elementary flows

###### Chemical oxygen demand, to water elementary emission (`chemical_oxygen_demand_to_water_output`)

This card records only Chemical oxygen demand, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Biochemical oxygen demand, to water elementary emission (`biochemical_oxygen_demand_to_water_output`)

This card records only Biochemical oxygen demand, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Biochemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Total organic carbon, to water elementary emission (`total_organic_carbon_to_water_output`)

This card records only Total organic carbon, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Total organic carbon, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Total nitrogen, to water elementary emission (`total_nitrogen_to_water_output`)

This card records only Total nitrogen, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Total phosphorus, to water elementary emission (`total_phosphorus_to_water_output`)

This card records only Total phosphorus, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Suspended solids, to water elementary emission (`suspended_solids_to_water_output`)

This card records only Suspended solids, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Chloride, to water elementary emission (`chloride_to_water_output`)

This card records only Chloride, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Chloride, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Sulfate, to water elementary emission (`sulfate_to_water_output`)

This card records only Sulfate, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: Sulfate, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### n-Hexane, to water elementary emission (`n_hexane_to_water_after_treatment_output`)

This card records only n-Hexane, to water leaving On-site Wastewater Treatment when this emission is present. Determine the amount from flow-proportional effluent records and accredited laboratory results; do not combine different substances, parameters, or receiving media.

- Selected flow: n-Hexane, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate this parameter load from matched treated-effluent flow and laboratory concentration; no PCR default concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_effluent_analysis`
- Sources: `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Ammonia, to air elementary emission (`ammonia_to_air_from_wwt_output`)

This card records only Ammonia, to air leaving On-site Wastewater Treatment when this emission is present. Determine the amount from calibrated emission measurements and the applicable calculation rule; do not combine different substances, parameters, or receiving media.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the load from measured flow and concentration or record a direct calibrated mass measurement; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emissions`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Hydrogen sulfide, to air elementary emission (`hydrogen_sulfide_to_air_from_wwt_output`)

This card records only Hydrogen sulfide, to air leaving On-site Wastewater Treatment when this emission is present. Determine the amount from calibrated emission measurements and the applicable calculation rule; do not combine different substances, parameters, or receiving media.

- Selected flow: Hydrogen sulfide, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the load from measured flow and concentration or record a direct calibrated mass measurement; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emissions`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Methane, biogenic, to air elementary emission (`biogenic_methane_to_air_from_wwt_output`)

This card records only Methane, biogenic, to air leaving On-site Wastewater Treatment when this emission is present. Determine the amount from calibrated emission measurements and the applicable calculation rule; do not combine different substances, parameters, or receiving media.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the load from measured flow and concentration or record a direct calibrated mass measurement; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emissions`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### Carbon dioxide, biogenic, to air elementary emission (`biogenic_carbon_dioxide_to_air_from_wwt_output`)

This card records only Carbon dioxide, biogenic, to air leaving On-site Wastewater Treatment when this emission is present. Determine the amount from calibrated emission measurements and the applicable calculation rule; do not combine different substances, parameters, or receiving media.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the load from measured flow and concentration or record a direct calibrated mass measurement; no PCR default factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21932 reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emissions`
- Sources: `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | shared and multi-output operations | Use process subdivision or direct metering first so that the reference product, recovered fatty phases, recovered solvent, and wastes retain separate quantities. | `eu-pef-2021-2279` |
| `alloc_source_residue_burden` | declared starting residue | State the upstream burden or cut-off treatment inherited from the source system and its governing rule; do not assume the residue is burden-free merely because it is a residue. | `eu-pef-2021-2279` |
| `alloc_physical_causality` | unavoidable shared inputs or emissions | When subdivision is not possible, use a documented physical causal relation that reflects the actual process driver and report the denominator and period. | `eu-pef-2021-2279` |
| `alloc_economic_sensitivity` | multi-output operations without defensible physical causality | If economic allocation is necessary, use contemporaneous site-specific prices, disclose price period and currency, and report a sensitivity case; no default price is provided. | `eu-pef-2021-2279` |
| `alloc_internal_recovery_no_credit` | recovered n-hexane, water, heat, or material returned within the foreground system | Subtract verified internal recovery from gross external demand without assigning an avoided-product credit or counting the same recovery as a co-product. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `alloc_waste_treatment` | waste and wastewater outputs | Include foreground collection and on-site treatment; document the transfer point and dataset used for off-site treatment without netting waste against the reference product. | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_materials` | `residue_receipt_mechanical_conditioning` | each linked atomic material input | receiving, stock, or invoice record | flow identity; process; date; quantity; unit; lot or meter id | weigh or reconcile each named material separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, invoice, lot, and stock reconciliation |
| `cp_receipt_utilities` | `residue_receipt_mechanical_conditioning` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_receipt_wastes` | `residue_receipt_mechanical_conditioning` | each linked atomic waste output | container weight or transfer manifest | flow identity; process; date; quantity; unit; lot or meter id | weigh or mass-balance each named waste stream separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, manifest, and destination record |
| `cp_aqueous_utilities` | `aqueous_splitting_washing` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_aqueous_materials` | `aqueous_splitting_washing` | each linked atomic material input | receiving, stock, or invoice record | flow identity; process; date; quantity; unit; lot or meter id | weigh or reconcile each named material separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, invoice, lot, and stock reconciliation |
| `cp_aqueous_products` | `aqueous_splitting_washing` | each linked atomic product or co-product output | batch release and scale record | flow identity; process; date; quantity; unit; lot or meter id | weigh each named output separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration and batch reconciliation |
| `cp_aqueous_wastes` | `aqueous_splitting_washing` | each linked atomic waste output | container weight or transfer manifest | flow identity; process; date; quantity; unit; lot or meter id | weigh or mass-balance each named waste stream separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, manifest, and destination record |
| `cp_solvent_materials` | `solvent_extraction_recovery` | each linked atomic material input | receiving, stock, or invoice record | flow identity; process; date; quantity; unit; lot or meter id | weigh or reconcile each named material separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, invoice, lot, and stock reconciliation |
| `cp_solvent_utilities` | `solvent_extraction_recovery` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_solvent_products` | `solvent_extraction_recovery` | each linked atomic product or co-product output | batch release and scale record | flow identity; process; date; quantity; unit; lot or meter id | weigh each named output separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration and batch reconciliation |
| `cp_solvent_wastes` | `solvent_extraction_recovery` | each linked atomic waste output | container weight or transfer manifest | flow identity; process; date; quantity; unit; lot or meter id | weigh or mass-balance each named waste stream separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, manifest, and destination record |
| `cp_solvent_emission_balance` | `solvent_extraction_recovery` | n-hexane release to each receiving medium | solvent inventory and monitoring record | purchases; opening stock; recovery; closing stock; product retention; waste; measured release | close the n-hexane balance and keep air and water releases separate | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | tank calibration, purchase, recovery, waste, and monitoring records |
| `cp_finishing_materials` | `adsorption_filtration_concentration_cooling` | each linked atomic material input | receiving, stock, or invoice record | flow identity; process; date; quantity; unit; lot or meter id | weigh or reconcile each named material separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, invoice, lot, and stock reconciliation |
| `cp_finishing_utilities` | `adsorption_filtration_concentration_cooling` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_finishing_wastes` | `adsorption_filtration_concentration_cooling` | each linked atomic waste output | container weight or transfer manifest | flow identity; process; date; quantity; unit; lot or meter id | weigh or mass-balance each named waste stream separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, manifest, and destination record |
| `cp_finishing_refrigerant_balance` | `adsorption_filtration_concentration_cooling` | each named refrigerant release | refrigerant service and inventory record | refrigerant identity; opening stock; purchases; charge; recovery; closing stock | close a separate mass balance for each refrigerant | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | service log, cylinder weights, and stock reconciliation |
| `cp_finishing_air_emissions` | `adsorption_filtration_concentration_cooling` | each linked atomic air emission | stack, vent, or activity calculation record | substance; source; concentration; gas flow; duration; activity; factor source | measure directly or calculate each substance with a documented factor | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | sampling report, instrument calibration, and factor provenance |
| `cp_thermal_utilities` | `onsite_fuel_combustion` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_thermal_air_emissions` | `onsite_fuel_combustion` | each linked atomic air emission | stack, vent, or activity calculation record | substance; source; concentration; gas flow; duration; activity; factor source | measure directly or calculate each substance with a documented factor | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | sampling report, instrument calibration, and factor provenance |
| `cp_release_utilities` | `packaging_storage_release` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_release_materials` | `packaging_storage_release` | each linked atomic material input | receiving, stock, or invoice record | flow identity; process; date; quantity; unit; lot or meter id | weigh or reconcile each named material separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, invoice, lot, and stock reconciliation |
| `cp_release_reference_product` | `packaging_storage_release` | net conforming reference product output | batch release record | batch id; exact source identity; route; net product mass; packaging mass; release status | reconcile the fixed 1 kg reference to calibrated release-scale records | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, product specification, and release authorization |
| `cp_release_wastes` | `packaging_storage_release` | each linked atomic waste output | container weight or transfer manifest | flow identity; process; date; quantity; unit; lot or meter id | weigh or mass-balance each named waste stream separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, manifest, and destination record |
| `cp_sanitation_utilities` | `cleaning_sanitation` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_sanitation_materials` | `cleaning_sanitation` | each linked atomic material input | receiving, stock, or invoice record | flow identity; process; date; quantity; unit; lot or meter id | weigh or reconcile each named material separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, invoice, lot, and stock reconciliation |
| `cp_sanitation_wastes` | `cleaning_sanitation` | each linked atomic waste output | container weight or transfer manifest | flow identity; process; date; quantity; unit; lot or meter id | weigh or mass-balance each named waste stream separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, manifest, and destination record |
| `cp_wwt_utilities` | `onsite_wastewater_treatment` | each linked atomic utility input | meter or carrier invoice record | carrier identity; meter id; start; end; quantity; unit; operating hours | read carrier-specific meter or document a shared-meter allocation | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | meter calibration, invoice, and allocation worksheet |
| `cp_wwt_materials` | `onsite_wastewater_treatment` | each linked atomic material input | receiving, stock, or invoice record | flow identity; process; date; quantity; unit; lot or meter id | weigh or reconcile each named material separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, invoice, lot, and stock reconciliation |
| `cp_wwt_wastes` | `onsite_wastewater_treatment` | each linked atomic waste output | container weight or transfer manifest | flow identity; process; date; quantity; unit; lot or meter id | weigh or mass-balance each named waste stream separately | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | scale calibration, manifest, and destination record |
| `cp_wwt_effluent_analysis` | `onsite_wastewater_treatment` | each linked treated-effluent parameter | matched effluent-flow and laboratory record | parameter; sample id; concentration; unit; treated flow; sampling period | multiply matched flow by concentration for each parameter | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | flow-meter calibration, chain of custody, and accredited laboratory report |
| `cp_wwt_air_emissions` | `onsite_wastewater_treatment` | each linked atomic air emission | stack, vent, or activity calculation record | substance; source; concentration; gas flow; duration; activity; factor source | measure directly or calculate each substance with a documented factor | row-declared unit | per event or meter interval | full declared study period | declared foreground site | sum each named row separately and normalize to 1 kg reference product; never merge identities | sampling report, instrument calibration, and factor provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground row | normalized row quantity = row quantity for the declared study period / net conforming reference-product kg for the same period | linked collection protocol; `cp_release_reference_product` | row-declared unit per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_shared_utility_allocation` | a utility meter serving more than one process | allocate the carrier-specific meter total by documented operating time, equipment power or heat duty, or another measured causal driver; preserve the unallocated total and reconciliation | carrier meter; operating records; causal driver | stage-specific carrier quantity | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_foreground_mass_balance` | declared route | mass-balance closure = named mass inputs - named products - named co-products - named wastes - named emissions - documented inventory change | all linked mass records for one lot or period | disclosed closure and unexplained difference | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_n_hexane_release` | n-hexane route | unrecovered n-hexane = purchases + opening stock - closing stock - recovered stock - product retention - named wastes; allocate measured releases separately to air and water | `cp_solvent_materials`; `cp_solvent_products`; `cp_solvent_wastes`; `cp_solvent_emission_balance` | kg n-hexane to each receiving medium | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_refrigerant_release` | each actual refrigerant | release = opening stock + purchases + charge additions - recovery - closing stock - documented equipment inventory change | `cp_finishing_materials`; `cp_finishing_refrigerant_balance` | kg of the named refrigerant to air | `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_combustion_emission` | each named combustion emission | emission load = measured named-fuel activity multiplied by a documented facility-specific or cited substance factor, or direct calibrated stack mass; keep fuels and substances separate | `cp_thermal_utilities`; `cp_thermal_air_emissions`; factor provenance | kg of one named substance to air | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_effluent_parameter_load` | each named water-emission parameter | parameter load = matched treated-effluent volume multiplied by laboratory concentration with explicit unit conversion | `cp_wwt_effluent_analysis`; treated-flow record | kg of one named parameter to water | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_allocation_factor` | unavoidable shared burden | allocation factor = declared causal quantity or economic value of the reference product / corresponding total across all co-products for the same period | product and co-product quantities; causal driver or prices | disclosed allocation factor and sensitivity where required | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_source_identity` | starting residue | Identify one exact residue stream, source material, generating operation, supplier or internal source, lot, and legal status. | receiving specification, supplier record, internal transfer record, and process flow diagram |
| `dq_route_traceability` | all processes | Map every active card to one declared route and justify every conditional process and non-applicable row. | dated facility flow diagram, batch record, and applicability matrix |
| `dq_temporal_match` | all collected records | Use the same representative period for inputs, outputs, stocks, and emissions, or document and reconcile any mismatch. | record coverage table and reconciliation |
| `dq_meter_scale_quality` | meters and scales | Retain calibration status, reading frequency, missing-data treatment, and shared-meter allocation evidence. | calibration certificates, logs, and allocation worksheets |
| `dq_laboratory_quality` | wastewater and direct emission measurements | Retain method, detection limit, sample timing, chain of custody, laboratory competence, and matched flow data. | sampling plan and laboratory report |
| `dq_inventory_completeness` | all foreground exchanges | Reconcile named materials, chemicals, water, electricity, steam, hot water, fuels, refrigerants, packaging, products, co-products, wastes, and emissions without aggregate selector rows. | row-level completeness matrix and mass, solvent, refrigerant, water, and energy balances |
| `dq_factor_provenance` | calculated emissions | Identify factor source, substance, fuel or activity basis, geography, technology, and unit conversion; no PCR default factor is permitted. | factor citation and calculation worksheet |
| `dq_allocation_transparency` | shared operations and co-products | Preserve unallocated totals, allocation method, factors, period, and sensitivity where economic allocation is used. | allocation workbook and source records |
| `dq_uuid_identity` | Tiangong flow links | Only accept a UUID after exact semantic hybrid discovery and direct public state-100 read; unresolved atomic names remain blank and row-closed in the manifest. | Tiangong identity audit record or manifest unresolved entry |
| `dq_reference_metadata_defect` | reference product identity | Preserve the remote generalComment mismatch as a limitation and demonstrate that no dairy semantics or evidence entered scope, route, or inventory. | manifest reference-flow audit and category-scope review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_cpc_scope_exact` | product identity | The dataset must be CPC 21932 degras or a treatment residue from one declared fatty substance, animal wax, or vegetable wax and must not represent a finished fat, oil, wax, dairy product, or unrelated residue. | `un-cpc-3-0-retained` |
| `v_reference_identity` | reference flow | The product-flow UUID, Mass property UUID, Units of mass UUID, kg unit, and exact baseName must match the reference definition. |  |
| `v_reference_general_comment_defect` | reference-flow evidence | The inconsistent remote generalComment must be disclosed and rejected as semantic evidence; any dairy interpretation fails conformance. |  |
| `v_reference_quantity` | reference amount | The normalized output must equal exactly 1 kg net conforming product and exclude packaging and co-product mass. | `eu-pef-2021-2279` |
| `v_source_route_lock` | foreground package | Exactly one source-residue identity and one actual route flow diagram must govern the dataset; unrelated routes or origins must not be averaged. | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_atomic_selected_flow` | inventory cards | Every active card must contain one concrete exchange only; aggregate selectors and unlisted catch-all residues fail conformance. | `eu-pef-2021-2279` |
| `v_conditional_applicability` | conditional rows and processes | Each conditional item must be supported by the facility route or marked not applicable with evidence; zero must not conceal missing data. | `eu-pef-2021-2279` |
| `v_nonreference_uuid_gate` | non-reference flow UUIDs | A non-reference UUID must remain blank unless exact hybrid discovery and direct public state-100 semantic read are both documented. |  |
| `v_no_default_amount` | inventory amounts and factors | Every non-reference amount must come from a foreground record or calculation from collected records; BREF values, BAT-AELs, and author estimates must not be used as defaults. | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_carrier_separation` | energy inventory | Electricity, purchased steam, purchased hot water, natural gas, diesel fuel, and LPG must remain separate rows and calculations. | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_solvent_balance` | n-hexane route | The n-hexane balance must close purchases, stocks, recovery, retention, wastes, and separate air and water releases. | `eu-fdm-bat-2019-2031` |
| `v_refrigerant_balance` | cooling systems | Every actual refrigerant must have separate makeup and release rows and a closed mass balance. | `eu-sa-bat-2023-2749` |
| `v_mass_balance` | declared route | The package must disclose its foreground mass-balance closure and explain any residual difference. | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_emission_media` | elementary flows | Each substance or analytical parameter and receiving medium must remain separate and must be calculated from matched records. | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_allocation_disclosure` | shared burdens and co-products | The package must disclose subdivision, allocation method, factor, denominator, period, and required sensitivity without double-crediting internal recovery. | `eu-pef-2021-2279` |
| `v_packaging_exclusion` | reference mass and packaging | Each packaging component and scrap must remain separate, while all package mass is excluded from the 1 kg product mass. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `v_completeness` | foreground LCI | The completeness matrix must cover every actual named material, chemical, water, utility, refrigerant, packaging component, product, co-product, waste, wastewater stream, and emission. | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process system for one exact CPC 21932 source-residue and route |
| downstream_use | process dataset; lifecycle-model input; verified foreground data package |
| allowed_use | studies matching the declared source-residue identity, generating operation, route, technology, geography, period, quality state, legal status, gate, and allocation |
| excluded_use | generic averages mixing residue sources or routes; dairy products; finished fats, oils, or waxes; unverified proxy UUIDs; datasets using PCR or BAT defaults as amounts |
| required_metadata | CPC code; reference UUID; exact source-residue identity; source material; generating operation; route flow diagram; active and non-applicable rows; quality state; legal status; geography; period; technology; packaging; co-products; allocation; gate |
| required_quality_disclosure | record coverage; meter and scale quality; analytical methods; mass, solvent, refrigerant, water, and energy balances; factor provenance; allocation; unresolved UUID list; reference generalComment defect |
| update_trigger | change in source residue, generating operation, route, technology, solvent, refrigerant, packaging, co-product status, allocation, geography, study period, specification, legal status, or reference-flow metadata |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-retained` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure, official CSV source retained at classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv; official source URL https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retained SHA-256 5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c | exact CPC 21932 scope and exclusions |
| `ec-jrc-fdm-bref-jrc118627` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | vegetable-oil treatment route structure, resource inventories, residues, solvent recovery, and wastewater context |
| `eu-fdm-bat-2019-2031` | `standard` | Commission Implementing Decision (EU) 2019/2031, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | official BAT conclusions for water, energy, raw-material, wastewater, waste-gas, oil-refining, n-hexane, dust, and monitoring structures; BAT values are not PCR defaults |
| `ec-jrc-tan-bref-jrc83005` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Tanning of Hides and Skins, JRC83005, DOI 10.2788/13548, https://publications.jrc.ec.europa.eu/repository/handle/JRC83005 | sheepskin degreasing route, chemical inventory, process residues, water, energy, solvent, and recovery context |
| `eu-tanning-bat-2013-84` | `standard` | Commission Implementing Decision 2013/84/EU, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013D0084 | official tanning BAT conclusions for dry degreasing, input-output records, residue segregation, wastewater treatment, solvents, and chemicals |
| `ec-jrc-sa-bref-jrc135916` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | animal-fat melting route, resource consumption, process residues, emissions, and wastewater structure |
| `eu-sa-bat-2023-2749` | `standard` | Commission Implementing Decision (EU) 2023/2749, https://eur-lex.europa.eu/eli/dec_impl/2023/2749/oj | official BAT conclusions for fat melting, inventories, refrigerants, water, energy, wastes, air emissions, and wastewater treatment; BAT values are not PCR defaults |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | product-specific bill of materials, company-specific manufacturing data, complete LCI, allocation, data quality, transparency, and verification |
