---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.sewing-thread-of-man-made-filaments-or-staple-fibres
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sewing thread of man-made filaments or staple fibres

## 1. Scope and Applicability

This PCR governs factory-gate foreground data packages for sewing thread made from purchased man-made filament yarn or man-made staple-fibre yarn. The core foreground boundary starts with received yarn and includes route-applicable doubling, cabling or twisting, coning and winding, application of textile twisting oil, inspection, and packing. It ends with saleable sewing thread on the declared cone or spool and its immediate transport packaging.

Wet pretreatment, dyeing, washing, drying, heat-setting, or other chemical finishing is outside the core conversion process. When any of those operations forms part of the marketed product state, it shall be represented by an explicitly linked foreground process with its actual atomic chemicals, water, energy carriers, wastewater, direct emissions, and residues; it shall not be hidden in the core conversion inventory. Polymerisation, man-made fibre production, incoming-yarn production, distribution, garment manufacture, use, and end of life are upstream or downstream processes and are not part of this gate-to-gate dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.sewing-thread-of-man-made-filaments-or-staple-fibres |
| classification_refs | CPC 3.0: 26410 - Sewing thread of man-made filaments or staple fibres |
| covered_products | Sewing thread made from man-made continuous filaments or synthetic or artificial staple fibres, supplied in an undyed or separately modelled dyed/finished state |
| excluded_products | Yarn not manufactured for sewing; natural-fibre sewing thread; embroidery yarn not sold as sewing thread; fishing line, cordage, twine, fabric, apparel, and sewing operations |
| representative_product | Undyed, lubricated, wound sewing thread made from multiple or cabled man-made filament yarn and supplied on a declared cone |
| production_route | Purchased yarn reception; doubling/cabling or twisting; textile twisting-oil application; winding/coning; inspection; packing; separately linked wet processing when applicable |
| market_state | Factory-gate saleable sewing thread with fibre family, filament/staple route, linear density, ply, twist, finish, colour state, cone/spool type, and packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable sewing thread of man-made filaments or staple fibres at the factory gate |
| How much | 1 kg net mass of sewing thread, excluding cone/spool and transport packaging |
| How well | Meets the declared fibre family and composition, filament or staple route, linear density, ply, twist direction and level, tensile/elongation grade, finish, colour state, and packaging specification |
| How long or cycle | One completed production lot at factory gate; no use-duration equivalence is claimed |
| reference_flow_link | final_sewing_thread |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Yarn `c98c206f-fee3-45d6-9549-b22eeb6b058b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 26410 product identity; fibre family and mass composition; filament or staple route; recycled-content claim if any; linear density; number of plies; twist direction and twist level; colour and wet-processing state; lubricant/finish identity; cone or spool type; net product mass; production geography; reporting period |

When constructing a foreground data package, all required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A generic Tiangong base name does not replace the CPC 26410 and sewing-thread qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | final sewing thread | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net conditioned thread mass at the declared factory-gate state; exclude cone/spool and transport packaging and disclose the conditioning or moisture basis. |
| `material_mass_basis` | yarn, twisting oil, cone/spool, box, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each atomic material or waste by measured mass and normalize it to 1 kg net sewing-thread output. |
| `electricity_energy_basis` | alternating-current input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve the metered electricity quantity in kWh and document the voltage level, geography, and supplier or grid-mix basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased man-made yarn received at the sewing-thread conversion facility, with fibre composition, filament/staple route, prior dyeing/finish state, mass, supplier, and lot identity declared |
| starting_condition_role | Upstream product input to the gate-to-gate sewing-thread conversion dataset |
| product_classification_scope | Sewing thread within CPC 3.0 code 26410; classification is scope evidence and not canonical PCR identity |
| recursive_input_rule | A purchased input already classified as sewing thread of CPC 26410 shall remain a separate upstream product flow and shall not be relabelled as raw yarn or recursively expanded inside this dataset. |
| upstream_dataset_requirement | Each purchased yarn or sewing-thread input requires a compatible upstream dataset or an explicit documented data gap; the upstream dataset shall match fibre family, composition, route, geography, and market state. |
| disclosure | Disclose which thread-forming, wet-processing, finishing, winding, inspection, and packing operations occur on site and identify every excluded or separately linked operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core_conversion` | core foreground process | Include all on-site doubling, cabling, twisting, twisting-oil application, winding/coning, inspection, rework, and packing required to produce the declared sewing thread. | `jrc-textiles-bref-2023` |
| `boundary_wet_processing` | marketed dyed or chemically finished thread | When wet treatment or chemical finishing is part of the marketed state, link a separate foreground process and report every actual atomic chemical, water, energy, wastewater, residue, and direct-emission flow. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_upstream_downstream` | product system | Keep incoming-yarn production upstream and distribution, sewing, use, and end of life downstream; do not claim cradle-to-gate coverage unless those datasets are linked. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `thread_conversion_winding_packaging` | Thread conversion, winding, and packaging | `required` | Always included for factory-gate sewing-thread production | Foreground mechanical conversion and packing | 1 kg net saleable sewing thread |
| `wet_processing_linked` | Linked wet processing or chemical finishing | `conditional` | Include as a separate linked foreground process when the marketed thread is dyed, washed, heat-set, coated, or otherwise chemically finished | Route-specific foreground wet processing | 1 kg treated thread transferred to final winding or factory gate |

### Process: Thread conversion, winding, and packaging (`thread_conversion_winding_packaging`)

#### Inputs

##### Product flows

###### Man-made filament yarn route input (`input_man_made_filament_yarn`)

Record this atomic product only for the filament route. Supplier and lot records shall establish that it is incoming yarn and not already saleable sewing thread.

- Selected flow: Yarn of man-made filaments, multiple or cabled (other than sewing thread, high tenacity yarn of polyamides, polyesters or viscose rayon), not put up for retail sale `d3526e15-e0a8-4d96-8688-2738fd9d20ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass received and consumed by the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Synthetic staple-fibre yarn route input (`input_synthetic_staple_yarn`)

Record this atomic product only for a qualifying synthetic staple-fibre route. The exact Tiangong UUID remains unresolved; the less-than-85% and artificial-fibre candidates were rejected as non-equivalent.

- Selected flow: Yarn (other than sewing thread) of synthetic staple fibres, containing 85% or more by weight of such fibres
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass received and consumed by the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Artificial staple-fibre yarn route input (`input_artificial_staple_yarn`)

Record this atomic product only for the artificial staple-fibre route and retain the declared artificial-fibre composition.

- Selected flow: Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass received and consumed by the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Textile twisting oil (`input_textile_twisting_oil`)

Record the mass of the textile twisting oil formulation applied during coning or twisting. The exact Tiangong UUID is unresolved because the generic lubricating-oil candidate does not preserve the textile-use semantics.

- Selected flow: Textile twisting oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass issued to and consumed by the production lot, net of documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Medium-voltage alternating current (`input_medium_voltage_electricity`)

Record metered alternating-current consumption for twisting, winding, inspection, extraction, and packing equipment at the declared 1-35 kV supply boundary.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: production-line or allocated facility-meter consumption during the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources:

###### Polypropylene sewing-thread cone (`input_polypropylene_thread_cone`)

Record this atomic packaging component when the saleable thread remains wound on a polypropylene cone. The exact Tiangong UUID is unresolved; polypropylene resin was rejected because it is not the manufactured cone.

- Selected flow: Polypropylene sewing-thread cone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or supplier-declared mass of cones incorporated in the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated board box (`input_corrugated_board_box`)

Record the atomic corrugated-board transport box mass used for the declared factory-gate product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or supplier-declared box mass consumed by the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final sewing thread (`final_sewing_thread`)

Record the net mass of conforming factory-gate sewing thread. Cone/spool and transport packaging mass shall not be included in this reference-product quantity.

- Selected flow: Yarn `c98c206f-fee3-45d6-9549-b22eeb6b058b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass of released conforming sewing thread
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

###### Synthetic sewing-thread offcuts (`output_synthetic_thread_offcuts`)

Record cut ends, damaged thread, and unrecoverable synthetic thread removed from the production lot as one specific waste flow. The exact Tiangong UUID remains unresolved; waste fibre fabric was rejected as non-equivalent.

- Selected flow: Synthetic sewing-thread offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred to the declared waste-management route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable sewing thread
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_output`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared conversion and packing operations | First subdivide or meter product lines, lots, and wet-processing operations so that sewing-thread inputs, energy, packaging, and wastes are directly assigned wherever practicable. | `iso-14044-2006` |
| `allocation_physical_mass` | residual shared burdens | If subdivision or direct metering cannot remove a shared burden, allocate it by net mass of conforming product output, disclose the affected flows and allocation fraction, and test sensitivity when another physical relation may materially change results. | `iso-14044-2006` |
| `allocation_rework_and_waste` | internal rework and waste outputs | Return internally rewound or reworked thread to the same lot without treating it as a co-product; record only material leaving for external recovery or disposal as waste and disclose any credited external recovery outside this gate-to-gate inventory. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_records` | `thread_conversion_winding_packaging` | route-applicable yarn and textile twisting oil | weighbridge, warehouse issue, invoice, and return record | material identity; Tiangong UUID if resolved; supplier; lot; fibre composition; opening mass; issued mass; returned mass | reconcile purchase/warehouse records with lot issue and return records | kg | each lot; monthly reconciliation | declared reporting period | all in-scope conversion lines | consumed mass = issued mass minus documented return; normalize by conforming thread output | calibrated scale record; supplier specification; inventory reconciliation |
| `cp_electricity_meter` | `thread_conversion_winding_packaging` | medium-voltage alternating current | electricity meter and production-time record | meter start; meter end; voltage level; production line; lot time; shared-load basis | direct submetering preferred; otherwise documented physical allocation from facility meter | kWh | each lot or shift; monthly reconciliation | declared reporting period | all in-scope conversion and packing equipment | subtract documented idle/non-product load and divide assigned kWh by conforming thread output | meter calibration; bill reconciliation; allocation worksheet |
| `cp_packaging_records` | `thread_conversion_winding_packaging` | polypropylene cone and corrugated board box | packaging issue, supplier mass specification, and return record | component identity; component count; unit mass; issued count; returned count | weigh representative components and reconcile issued less returned quantities | kg | each packaging lot | declared reporting period | all packaging used for the reference product | component mass = net count multiplied by verified unit mass; normalize by net thread output | scale calibration; supplier specification; count reconciliation |
| `cp_product_output` | `thread_conversion_winding_packaging` | final sewing thread | finished-goods scale and quality-release record | lot; gross mass; tare mass; net thread mass; moisture/conditioning basis; rejected mass | weigh released product and subtract separately measured cone/spool and packaging tare | kg | each lot | declared reporting period | all released reference product | sum conforming net thread mass only | calibrated scale; quality release; tare verification |
| `cp_waste_output` | `thread_conversion_winding_packaging` | synthetic sewing-thread offcuts | waste-bin scale ticket and transfer record | waste identity; source lot; container tare; gross mass; destination; date | weigh each transfer and subtract container tare | kg | each transfer; monthly reconciliation | declared reporting period | all in-scope conversion lines | sum net offcut mass by lot and normalize by conforming output | calibrated scale; transfer receipt; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | final sewing thread | net_thread_kg = gross_released_kg - cone_spool_tare_kg - transport_packaging_tare_kg | released gross mass; cone/spool tare; packaging tare | net sewing-thread mass | `iso-14048-2002` |
| `calc_material_normalization` | mass-based inputs and waste | normalized_kg_per_kg = lot_flow_kg / conforming_net_thread_kg | lot flow mass; conforming net output mass | kg per kg reference flow | `iso-14048-2002` |
| `calc_energy_normalization` | medium-voltage alternating current | normalized_kWh_per_kg = assigned_lot_kWh / conforming_net_thread_kg | assigned meter consumption; conforming net output mass | kWh per kg reference flow | `iso-14048-2002` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and yarn inputs | Retain product specification, fibre composition, filament/staple route, linear density, ply, twist, finish, colour state, and CPC 26410 classification evidence. | supplier certificate; bill of materials; quality-release record |
| `dq_temporal_coverage` | all foreground flows | Use a representative continuous 12-month period where available, or disclose a shorter campaign/lot period and its seasonality, downtime, and product-mix limitations. | dated meter, warehouse, production, and waste records |
| `dq_completeness` | process boundary | Reconcile yarn input, twisting oil, packaging, electricity, conforming product, rework, and thread offcuts; identify separately linked wet processing and every known excluded flow. | signed mass-balance and boundary checklist |
| `dq_measurement` | mass and electricity | Use calibrated instruments or supplier-certified unit masses and retain the allocation worksheet for any shared meter. | calibration certificate; supplier specification; meter reconciliation |
| `dq_uuid_resolution` | unresolved atomic flows | Before active review, repeat Tiangong lookup for each unresolved row and accept a UUID only after state, flow type, name semantics, property, and unit are verified. | review record linked by row_id |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Fail category conformance unless the dataset declares sewing-thread use, man-made filament or staple-fibre composition, CPC 26410 scope, and all required qualifiers. | `unsd-cpc-3-0-2025` |
| `validate_reference_mass` | reference flow | Fail when the reference quantity includes cone/spool or transport-packaging mass, lacks a conditioning basis, or is not normalized to 1 kg net conforming thread. | `iso-14048-2002` |
| `validate_atomic_inventory` | all inventory rows | Fail when a selected flow combines materials, utilities, packaging components, wastes, emissions, or future selection instructions; each row shall identify one atomic exchange. | `jrc-textiles-bref-2023` |
| `validate_route_boundary` | dyed or chemically finished product | Fail full factory-gate conformance when marketed wet processing is omitted or represented without a linked process containing actual atomic recipe, water, energy, wastewater, residue, and direct-emission records. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | conversion lot | Require documented reconciliation of incoming yarn and oil with conforming thread, internal rework, retained stock change, and offcut waste; report any unexplained imbalance rather than forcing closure. | `iso-14048-2002` |
| `validate_uuid_state` | UUID-bearing rows | Accept a Tiangong UUID only when direct read confirms state_code 100, the required flow type, matching name semantics, and the declared flow property/unit. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for factory-gate sewing thread of man-made filaments or staple fibres |
| downstream_use | `secondary_dataset`; `background_dataset` after review and geographic, technological, and product-state representativeness assessment |
| allowed_use | Cradle-to-gate or broader LCA models when compatible upstream yarn and any route-applicable wet-processing datasets are linked and required qualifiers match |
| excluded_use | Natural-fibre sewing thread; generic yarn not made for sewing; cradle-to-gate claims without upstream yarn; dyed/finished product claims with omitted wet processing; use-stage or durability equivalence |
| required_metadata | PCR id and version; CPC 26410; product qualifiers; facility and geography; reporting period; technology; boundary; upstream yarn links; linked wet-processing process if any; allocation; data quality; unresolved UUID disclosure |
| required_quality_disclosure | Primary-record share; meter and scale coverage; temporal and site coverage; shared-meter allocation; mass-balance result; excluded flows; wet-processing link status; unresolved UUID rows |
| update_trigger | Change in fibre family/composition, yarn route, twisting technology, finish or wet-processing route, energy supply, packaging, allocation, facility geography, or evidence that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0 Explanatory Notes, code 26410, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Official product-category identity and separation from non-sewing yarn categories |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, 2023, ISSN 1831-9424, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-12) | Man-made-fibre yarn preparation, twisting and winding, coning/twisting oils, yarn dyeing, and wet-processing boundary decomposition |
| `eu-textiles-bat-2022` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | Material, water and energy inventories; chemical-management, emissions and wastewater records for linked wet processing |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, https://www.iso.org/standard/38498.html (official description retrieved 2026-08-12) | LCI boundary, allocation, reporting, and interpretation framework |
| `iso-14048-2002` | Standard (`standard`) | ISO/TS 14048:2002, Environmental management - Life cycle assessment - Data documentation format, https://www.iso.org/standard/29872.html (official description retrieved 2026-08-12) | Transparent foreground record, calculation, and data-quality documentation |
| `wang-down-jackets-2023` | Literature (`literature`) | Wang et al., Carbon Footprint and Water Footprint Assessment of Down Jackets, 2023, DOI 10.1177/24723444231172216 | Peer-reviewed full-text confirmation that polyester sewing thread is an accessory product and that textile thread production includes spinning, dyeing, and finishing stages |
