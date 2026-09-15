---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-less-than-85-by-we-91af20fd
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Yarn (other than sewing thread) of artificial staple fibres, containing less than 85% by weight of such fibres, not put up for retail sale

## 1. Scope and Applicability

This PCR applies to foreground production of non-retail yarn, other than sewing thread, made from a declared staple-fibre blend in which artificial staple fibres are present but account for less than 85% of total fibre mass. The product is assessed at the spinning-mill gate as net yarn mass at a declared conditioning or moisture state.

The core foreground boundary begins with a mixed staple-fibre sliver ready for drawing and ends with conforming yarn after spinning and winding. Fibre manufacture, preparation of the incoming mixed sliver, dyeing, wet finishing, fabric manufacture, retail packaging, use, and end-of-life remain outside the core boundary and require linked datasets when included in a study. An integrated site must disclose and model any additional operation separately.

This PCR excludes sewing thread, yarn containing 85% or more artificial staple fibres by mass, yarn put up for retail sale, filament yarn, and products whose artificial-fibre share or constituent-fibre composition is not documented.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-less-than-85-by-we-91af20fd |
| classification_refs | CPC 3.0: 26461 (exact) |
| covered_products | Yarn other than sewing thread, containing artificial staple fibres at less than 85% of total fibre mass, and not put up for retail sale |
| excluded_products | Sewing thread; yarn with artificial staple fibres at 85% or more by mass; retail-sale yarn; filament yarn; yarn without verified fibre-composition records |
| representative_product | Ring-spun blended yarn containing a declared artificial staple-fibre fraction below 85% by mass, supplied at the spinning-mill gate and not put up for retail sale |
| production_route | Mixed-sliver drawing, roving, staple-fibre spinning, optional twisting when required by the product specification, and winding |
| market_state | Finished non-retail yarn at spinning-mill gate; net yarn mass reported separately from any carrier or packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming non-retail yarn, other than sewing thread, produced from a declared staple-fibre blend containing artificial staple fibres below 85% by mass |
| How much | 1 kg net yarn |
| How well | Meets the declared yarn count, composition, spinning system, twist, conditioning or moisture state, and commercial quality specification |
| How long or cycle | One declared production lot at the spinning-mill gate |
| reference_flow_link | `reference_yarn_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Yarn (other than sewing thread) of artificial staple fibres, containing less than 85% by weight of such fibres, not put up for retail sale `2fde586f-9999-4f3e-8022-fe0d8a19e270` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | artificial staple-fibre type and mass fraction; every other fibre constituent and mass fraction; yarn count; spinning system; twist specification; dyed or undyed state; conditioning or moisture state; production geography; production-lot period; non-retail market state; net-mass treatment of carriers and packaging |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent data-package field. A missing composition, moisture-state, or market-state qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net conforming yarn at the declared conditioning or moisture state; exclude the mass of cones, reusable carriers, and packaging. |
| `constituent_mass` | incoming sliver and yarn constituents | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine each constituent mass on one consistent conditioning or moisture basis and retain the measurement basis with the lot record. |
| `electricity_energy` | purchased alternating-current electricity | Energy | kWh | Record meter-based electricity for the production period and disclose voltage level, grid geography, and whether on-site generation is separately metered. |
| `waste_mass` | fibre fly and off-spec yarn | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh each waste stream separately and retain its destination and recovery or treatment status. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mixed staple-fibre sliver with documented constituent masses and an artificial-staple-fibre fraction below 85% by mass, received ready for drawing |
| starting_condition_role | Upstream product input to the foreground spinning process |
| product_classification_scope | CPC 3.0 code 26461 finished yarn only; the incoming sliver remains an upstream intermediate product |
| recursive_input_rule | A same-category yarn input must remain a visible product input linked to its own upstream dataset and must not be folded into the reference output |
| upstream_dataset_requirement | Link each incoming mixed-sliver lot to a supplier-specific or representative upstream dataset that discloses constituent fibres, composition, conditioning or moisture basis, geography, and preparation boundary |
| disclosure | Declare all integrated operations added before sliver drawing or after yarn winding, including dyeing, wet finishing, carrier production, or packaging |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core_route` | foreground spinning system | Include drawing, roving, spinning, product-required twisting, winding, directly consumed electricity, directly applied spinning lubricant, and separately measured process wastes from receipt of mixed sliver through conforming yarn at the mill gate. | `jrc-textiles-bref-2023` |
| `boundary_upstream_sliver` | incoming mixed staple-fibre sliver | Keep manufacture of constituent fibres and preparation of the received mixed sliver outside the core foreground process, but require linked upstream datasets and composition disclosure. | `jrc-textiles-bref-2023` |
| `boundary_product_scope` | reference product | Apply the category only when the yarn is not sewing thread, is not put up for retail sale, and contains artificial staple fibres below 85% of total fibre mass. | `unsd-cpc-3-0-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `staple_spinning_winding` | Staple-fibre spinning and winding | required | Incoming mixed sliver meets the declared starting condition | Foreground unit process converting mixed sliver into finished non-retail yarn | 1 kg net conforming yarn output |

### Process: Staple-fibre spinning and winding (`staple_spinning_winding`)

This process covers drawing and roving of the received mixed sliver, staple-fibre spinning, product-required twisting, and winding. Route details and machine technology must be declared for the represented production lot.

#### Inputs

##### Product flows

###### Mixed staple-fibre sliver input (`mixed_staple_fibre_sliver_input`)

One declared mixed-sliver product enters the process. Its constituent-fibre mass fractions are lot attributes; the selected flow is the physical blend received at the mill, not a list or selector of possible fibres.

- Selected flow: Mixed staple-fibre sliver with declared artificial-staple-fibre fraction below 85% by mass
- Flow property / unit: Mass / kg
- Amount rule: Measure the mass issued to the represented production lot on the same conditioning or moisture basis used for the yarn mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mixed_sliver_receipts`
- Sources: `jrc-textiles-bref-2023`

###### Purchased alternating-current electricity input (`purchased_ac_electricity_input`)

One facility-metered electricity scenario supplies the spinning and winding equipment. Voltage level and grid geography are mandatory scenario attributes and must not be replaced by an unspecified electricity flow.

- Selected flow: Purchased alternating-current electricity at the facility meter with declared voltage level and grid geography
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered electricity attributable to the represented production lot or allocate a shared meter using the documented causal production driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `jrc-textiles-bref-2023`

###### Staple-fibre spinning lubricant input (`staple_spinning_lubricant_input`)

Record one declared lubricant product when lubricant is directly applied within the foreground process. The product or formulation identity must be retained; oils used for other fibre or filament routes are not interchangeable.

- Selected flow: Staple-fibre spinning lubricant used in the declared production lot
- Flow property / unit: Mass / kg
- Amount rule: Measure lubricant withdrawn less documented returns for the represented production lot; record zero only when operating records demonstrate that no lubricant is applied within this process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_lubricant`
- Sources: `jrc-textiles-bref-2023`

###### Paperboard yarn cone input (`paperboard_yarn_cone_input`)

Record the specific paperboard yarn cone only when it is delivered with the non-retail yarn and is not a reusable mill carrier returned before the product gate.

- Selected flow: Paperboard yarn cone delivered with the non-retail yarn
- Flow property / unit: Mass / kg
- Amount rule: Measure total delivered cone mass or calculate it from delivered cone count and a verified supplier mass per cone.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: Per 1 kg net conforming yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paperboard_yarn_cones`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference yarn output (`reference_yarn_output`)

This is the conforming net yarn output at the spinning-mill gate. Carrier and packaging mass are excluded from the 1 kg reference amount and are recorded separately when delivered.

- Selected flow: Yarn (other than sewing thread) of artificial staple fibres, containing less than 85% by weight of such fibres, not put up for retail sale `2fde586f-9999-4f3e-8022-fe0d8a19e270`
- Flow property / unit: Mass / kg
- Amount rule: Set to exactly 1 kg after normalizing measured net conforming yarn mass at the declared conditioning or moisture state.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_yarn_output`
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

###### Loose staple-fibre fly output (`loose_staple_fibre_fly_output`)

Loose fly collected from spinning and winding is recorded as one physically distinct waste stream and is not combined with off-spec yarn.

- Selected flow: Loose artificial-blend staple-fibre fly from spinning and winding
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separately collected fly generated during the represented production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_loose_fibre_fly`
- Sources: `jrc-textiles-bref-2023`

###### Off-spec blended yarn output (`offspec_blended_yarn_output`)

Yarn rejected during spinning, twisting, or winding is recorded separately from loose fibre fly and from conforming product.

- Selected flow: Off-spec artificial-blend yarn from spinning and winding
- Flow property / unit: Mass / kg
- Amount rule: Weigh off-spec yarn removed from the represented production lot and record its reuse, recycling, or treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_offspec_yarn`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separately measurable production lots and operations | Prefer physical subdivision and dedicated meters or issue records so that the represented yarn lot receives its directly measured inputs and outputs. |  |
| `allocation_shared_records` | shared electricity, lubricant, or carrier records | When direct subdivision is unavailable, use a documented causal production driver from foreground records; disclose the driver, formula, period, and affected products. |  |
| `allocation_recovered_material` | fibre fly or off-spec yarn with beneficial use | Treat the stream as waste unless the foreground records demonstrate a separately intended co-product; if it is a co-product, model it separately and disclose the allocation method without assigning an undocumented credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mixed_sliver_receipts` | `staple_spinning_winding` | `mixed_staple_fibre_sliver_input` | Lot receipt and issue record | sliver product identity; supplier; lot id; each constituent fibre; each constituent mass; artificial-fibre type; conditioning or moisture state; issued mass | Reconcile supplier delivery records with calibrated scale issue records | kg and mass fraction | Each received and issued lot | Full represented production period | All sliver used for the represented site and product lot | Sum issued mass by lot on one declared conditioning or moisture basis | Supplier specification; receiving record; scale identifier and calibration status; composition test or certificate |
| `cp_electricity_meter` | `staple_spinning_winding` | `purchased_ac_electricity_input` | Electricity meter record | meter id; opening and closing readings; reading time; voltage level; grid geography; on-site generation export and import; production-line assignment | Read calibrated revenue or submeter and reconcile the reading interval with production time | kWh | At least each production lot or shortest reconciled meter interval | Full represented production period | All equipment included in the foreground process | Meter difference less separately metered exports, assigned by direct submeter or documented causal driver | Meter identifier; calibration or utility bill; reading log; allocation record |
| `cp_spinning_lubricant` | `staple_spinning_winding` | `staple_spinning_lubricant_input` | Material issue record | product or trade name; formulation or safety-data-sheet reference; lot id; opening stock; receipts; closing stock; documented returns | Inventory reconciliation for the represented production period | kg | Each production lot or inventory period | Full represented production period | All lubricant applied within the foreground process | Opening stock plus receipts minus closing stock and documented returns, assigned to represented lots | Purchase record; stock ledger; safety data sheet; scale or dispensing record |
| `cp_paperboard_yarn_cones` | `staple_spinning_winding` | `paperboard_yarn_cone_input` | Carrier issue and delivery record | cone product identity; delivered count; returned count; verified mass per cone or total mass; reuse status | Reconcile packing and dispatch records with supplier mass specification or weighing | kg | Each dispatched lot | Full represented production period | Cones crossing the declared product gate | Include delivered non-returned cone mass only | Dispatch record; supplier specification or scale record; return log |
| `cp_yarn_output` | `staple_spinning_winding` | `reference_yarn_output` | Finished-lot mass and quality record | product id; lot id; gross mass; cone and packaging mass; net yarn mass; yarn count; twist; spinning system; each fibre fraction; dyed state; conditioning or moisture state | Weigh finished lots and subtract separately verified carrier and packaging mass | kg | Each finished lot | Full represented production period | All conforming yarn represented by the dataset | Sum conforming net yarn mass on the declared conditioning or moisture basis | Calibrated scale record; quality certificate; composition result; packing list |
| `cp_loose_fibre_fly` | `staple_spinning_winding` | `loose_staple_fibre_fly_output` | Waste weighing and destination record | waste identity; collection point; mass; lot or period; reuse, recycling, or treatment destination | Separate collection and weighing | kg | Each collection or production lot | Full represented production period | All included spinning and winding collection points | Sum separately weighed fly mass; do not combine with off-spec yarn | Scale record; waste log; destination receipt |
| `cp_offspec_yarn` | `staple_spinning_winding` | `offspec_blended_yarn_output` | Reject weighing and destination record | reject identity; reason; mass; lot; internal reuse, recycling, or treatment destination | Separate rejection record and weighing | kg | Each rejection or production lot | Full represented production period | All included spinning, twisting, and winding operations | Sum separately weighed off-spec yarn mass; do not combine with loose fibre fly | Quality rejection record; scale record; destination receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_artificial_fibre_fraction` | reference product and incoming mixed sliver | artificial staple-fibre fraction = artificial staple-fibre mass / total constituent-fibre mass; the recorded fraction must be below 85% and all constituent fractions must reconcile to the declared total under the documented measurement and rounding convention | constituent-fibre masses; artificial-fibre identification | artificial staple-fibre mass fraction | `unsd-cpc-3-0-2025` |
| `calc_reference_normalization` | every quantitative inventory row | normalized amount = measured or reconciled row amount / measured net conforming yarn output mass | row amount; net conforming yarn output mass | amount per 1 kg net conforming yarn |  |
| `calc_electricity_use` | purchased alternating-current electricity | electricity use = reconciled meter import assigned to the foreground process / measured net conforming yarn output mass | meter readings; exports; lot assignment; output mass | kWh per 1 kg net conforming yarn |  |
| `calc_delivered_cone_mass` | paperboard yarn cones | delivered cone mass = non-returned delivered cone count multiplied by verified supplier mass per cone, or direct total measured mass when available | delivered count; returned count; verified mass per cone or total mass | kg cone per 1 kg net conforming yarn |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference yarn | Retain the exact product UUID and the declared CPC 26461 scope qualifiers, including non-retail market state and exclusion of sewing thread. | Product-flow identity; lot quality specification |
| `dq_composition` | sliver and yarn | Identify every constituent fibre and retain masses or mass fractions on a common conditioning or moisture basis; do not infer an unrecorded blend composition. | Supplier specification; composition test or certificate; lot mass record |
| `dq_temporal_alignment` | all foreground records | Cover the same represented production period or document reconciliation from a different meter or inventory interval. | Timestamped meter, material, production, and waste records |
| `dq_completeness` | process inventory | Include each directly consumed product, delivered carrier, conforming product, separately collected waste, and any direct elementary flow as its own atomic exchange. | Inventory reconciliation and process walk-through |
| `dq_identity_gaps` | unresolved inventory flow UUIDs | Preserve the specific exchange name and review status; do not substitute a broader, adjacent, or differently classified Tiangong flow. | Manifest identity review and subsequent hybrid-search plus direct-read evidence |
| `dq_mass_balance` | represented production lot | Reconcile incoming sliver mass with conforming yarn, loose fibre fly, off-spec yarn, and any other separately recorded mass output within the site's documented measurement uncertainty. | Scale records; lot reconciliation; uncertainty disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the exact product UUID `2fde586f-9999-4f3e-8022-fe0d8a19e270`, Product flow type, CPC 26461 semantics, Mass property UUID, Units of mass UUID, and kg reference unit. | `unsd-cpc-3-0-2025` |
| `validate_category_scope` | reference yarn | Confirm that the product is not sewing thread, is not put up for retail sale, contains artificial staple fibres, and has an artificial-staple-fibre share below 85% of total fibre mass. | `unsd-cpc-3-0-2025` |
| `validate_composition_reconciliation` | reference yarn and incoming sliver | Require every constituent fibre to be named and the constituent fractions to reconcile to the declared total under the documented measurement and rounding convention. |  |
| `validate_reference_mass` | reference amount | Confirm exactly 1 kg net conforming yarn at the declared conditioning or moisture state and exclude cone and packaging mass. |  |
| `validate_atomic_inventory` | every inventory card | Confirm that each card describes one physical product, waste, or elementary flow and contains no collection label, selector instruction, or combined alternative. |  |
| `validate_electricity_context` | purchased alternating-current electricity | Require metered quantity, voltage level, grid geography, reading period, and treatment of on-site generation; reject an unspecified electricity candidate. | `jrc-textiles-bref-2023` |
| `validate_mass_balance` | represented production lot | Reconcile incoming sliver mass with conforming yarn and all separately recorded mass outputs within documented site measurement uncertainty. |  |
| `validate_unresolved_identities` | inventory UUID references | Require every UUID to have exact hybrid-search and direct-read evidence; keep unresolved rows UUID-free and disclosed rather than using rejected candidates. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process dataset for staple-fibre spinning and winding |
| downstream_use | Secondary dataset and background dataset for studies requiring a matching CPC 26461 non-retail blended-yarn input |
| allowed_use | Products matching the declared artificial-fibre share, constituent-fibre composition, yarn specification, starting condition, production route, geography, technology, and conditioning or moisture state |
| excluded_use | Sewing thread; retail-sale yarn; filament yarn; yarn with artificial staple fibres at 85% or more by mass; yarn lacking composition evidence; wet processing or fibre manufacture not represented by linked datasets |
| required_metadata | Exact reference UUID; constituent-fibre composition; yarn count; spinning system; twist; dyed state; conditioning or moisture state; geography; technology; production period; electricity scenario; carrier and packaging treatment; upstream sliver dataset |
| required_quality_disclosure | Foreground-record coverage; meter and scale basis; allocation or subdivision method; composition evidence; mass-balance result; waste destinations; unresolved UUID identities; deviations from the core boundary |
| update_trigger | Change to product classification scope, reference-flow identity, fibre-composition rule, starting condition, spinning route, exact inventory UUID resolution, or material foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, code 26461, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product-category boundary, exclusions, artificial-fibre mass-share criterion, and classification validation |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, January 2023, Sections 2.4.2-2.4.3 and 4.7.2. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Staple-fibre spinning process decomposition; spinning-lubricant relevance; electricity as the main spinning energy input; separate collection of loose fibres and yarn rejects |
