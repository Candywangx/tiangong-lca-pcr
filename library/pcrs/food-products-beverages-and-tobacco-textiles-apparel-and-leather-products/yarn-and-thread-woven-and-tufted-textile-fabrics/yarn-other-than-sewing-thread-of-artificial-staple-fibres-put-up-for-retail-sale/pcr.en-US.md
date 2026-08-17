---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-put-up-for-retail-sale
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Yarn (other than sewing thread) of artificial staple fibres, put up for retail sale

## 1. Scope and Applicability

This PCR covers factory-gate conversion of received artificial staple fibres already carded, combed, or otherwise prepared for spinning into yarn other than sewing thread, followed by winding and pack-out in the retail-sale configuration. The fibre family, blend composition, colour state at receipt, spinning system, yarn count, twist, package form, and production geography shall be declared.

The foreground boundary starts with prepared staple fibre at the spinning mill. Fibre manufacture, fibre preparation before the declared starting condition, and any wet dyeing or finishing are represented by separate upstream datasets. Distribution, retail operation, consumer use, and end-of-life are outside the foreground boundary. Sewing thread, synthetic-staple-fibre yarn classified outside this category, man-made filament yarn, and yarn not put up for retail sale are excluded. Packaging crossing the factory gate is inventoried by individual component, but packaging mass is excluded from the reference yarn mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-put-up-for-retail-sale |
| classification_refs | CPC 3.0: 26462 |
| covered_products | Yarn other than sewing thread whose product identity is artificial-staple-fibre yarn and that leaves the mill in a retail-sale package configuration |
| excluded_products | Sewing thread; synthetic-staple-fibre yarn classified outside CPC 26462; filament yarn; yarn not put up for retail sale; fibre, fabric, and finished textile products |
| representative_product | Artificial-staple-fibre spun yarn wound on a paperboard core, labelled, and ready for retail sale |
| production_route | Blending and drawing of prepared artificial staple fibres; roving where used; spinning; twisting where required; winding; inspection; and retail pack-out |
| market_state | Finished yarn at the spinning-mill gate in the declared retail package form; net yarn mass reported separately from packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished artificial-staple-fibre yarn other than sewing thread, supplied in its declared retail-sale package configuration |
| How much | 1,000 kg net yarn mass at the spinning-mill gate, excluding cores, labels, wrapping, cartons, pallets, and other packaging |
| How well | Conforms to the declared fibre family and blend, yarn count, twist, colour state, moisture/conditioning state, quality grade, and retail package form |
| How long or cycle | One completed production batch accepted at the factory gate; no service duration is assigned |
| reference_flow_link | `reference_yarn_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net conforming yarn |
| Reference product flow | Yarn (other than sewing thread) of artificial staple fibres, put up for retail sale `9cb2deeb-5eb3-4128-a175-ccbf63b8a2cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | artificial staple-fibre family; mass fraction of every fibre component; yarn count system and value; twist direction and level; spinning system; colour state at fibre receipt and at output; moisture or conditioning state; quality grade; retail package form; net yarn mass; packaging component masses; production geography; reference period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference yarn output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to 1,000 kg net conforming yarn measured at factory-gate acceptance; exclude every packaging component and pallet from net yarn mass. |
| `package_tare` | Packaged output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net yarn mass by direct net weighing or by subtracting measured core, label, wrap, carton, and other packaging tare from gross packaged mass; retain the tare record. |
| `moisture_state` | Fibre input and yarn output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report mass in the measured conditioning state and disclose moisture or regain basis; do not apply an undocumented dry-mass correction. |
| `energy_meter_unit` | Electricity input | Energy | kWh | Preserve the meter unit and reporting period; if conversion is needed, record the conversion factor and original meter total in the data package. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Artificial staple fibres received at the spinning mill already carded, combed, or otherwise prepared for spinning, with fibre identity, blend composition, colour state, moisture state, supplier, and upstream dataset declared |
| starting_condition_role | Foreground boundary anchor for the dry spinning, winding, inspection, and retail pack-out operation |
| product_classification_scope | Finished yarn within CPC 3.0 code 26462; classification does not substitute for the declared product qualifiers |
| recursive_input_rule | If yarn within the same product category enters plying, re-winding, or pack-out, record it once as an upstream product input with its own supplier dataset and stop recursive expansion at that exchange |
| upstream_dataset_requirement | Link separate datasets for fibre manufacture and preparation, electricity supply, spinning lubricant, and every packaging component; disclose any wet dyeing or finishing as an upstream process outside this foreground boundary |
| disclosure | Declare the actual process sequence, omitted steps, spinning technology, fibre and blend identities, wet-treatment location if any, electricity geography, lubricant identity, waste destinations, package form, net/gross mass distinction, site, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_prepared_fibre_start` | Foreground spinning dataset | Start at receipt of prepared artificial staple fibre and include drawing, roving where used, spinning, twisting where required, winding, inspection, and retail pack-out performed at the reporting site. | `jrc-textiles-bref-2023` |
| `boundary_separate_upstream` | Upstream supply | Keep fibre manufacture, pre-spinning fibre preparation, wet dyeing or finishing, electricity supply, and packaging production in linked upstream datasets; do not silently absorb them into the foreground process. | `jrc-textiles-bref-2023` |
| `boundary_inventory_disclosure` | Inputs and outputs | Inventory the quantity and identity of textile material, process chemical, energy, product, and each waste stream crossing the declared boundary; keep the adapted monitoring rule distinct from legal BAT applicability. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p1_dry_spinning_retail_packout` | Artificial staple-fibre dry spinning, winding, and retail pack-out | `required` | Required for the declared foreground route from prepared artificial staple fibre to retail-sale yarn | Foreground conversion process | 1,000 kg net conforming retail-sale yarn output |

### Process: Artificial staple-fibre dry spinning, winding, and retail pack-out (`p1_dry_spinning_retail_packout`)

The recorded process sequence shall identify drawing, roving where used, spinning technology, twisting where required, winding, inspection, and pack-out. If another blend component is used, add it to the produced data package as its own chemically or physically specific product-flow exchange; do not combine distinct fibres into a collection flow.

#### Inputs

##### Product flows

###### Prepared artificial staple-fibre input (`received_artificial_staple_fibre`)

This is the artificial staple fibre received at the declared foreground boundary and consumed in yarn production.

- Selected flow: Artificial staple fibres, carded, combed or otherwise processed for spinning
- Flow property / unit: Mass / kg
- Amount rule: Supplier delivery mass accepted into the production batch, reconciled with inventory movements and the declared moisture or conditioning state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_reconciliation`
- Sources: `jrc-textiles-bref-2023`

###### Site low-voltage electricity (`site_low_voltage_electricity`)

This exchange records the low-voltage alternating-current consumption mix delivered to the reporting site; its country or grid region shall be explicit.

- Selected flow: Low-voltage alternating-current grid consumption mix supplied to the reporting site
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity allocated to the process for the reporting period, including spinning, suction, winding, inspection, environmental controls, and pack-out equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_electricity_meter`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Textile spinning lubricant (`textile_spinning_lubricant`)

This exchange records the specific biodegradable ester-based spinning lubricant applied to fibre or yarn during the foreground process.

- Selected flow: Biodegradable ester-based textile spinning lubricant
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus returned unused lubricant for the production batch; identify the commercial formulation and retained safety or technical data sheet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_issue_record`
- Sources: `jrc-textiles-bref-2023`

###### Paperboard yarn core (`paperboard_yarn_core`)

Record the paperboard tube or paper core incorporated in the sold yarn package when the declared package form uses a core.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of cores incorporated in accepted retail packages for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_reconciliation`
- Sources: `eu-textiles-bat-2022`

###### Paper package label (`paper_label`)

Record the paper label physically incorporated in the retail package.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of paper labels incorporated in accepted retail packages for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_reconciliation`
- Sources: `eu-textiles-bat-2022`

###### LDPE retail wrapping film (`ldpe_retail_wrap`)

Record low-density polyethylene film physically incorporated in the retail yarn package when wrapping film is used.

- Selected flow: Low-density polyethylene film for retail yarn wrapping
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of LDPE wrapping film incorporated in accepted retail packages for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_reconciliation`
- Sources: `eu-textiles-bat-2022`

###### Corrugated board shipping box (`corrugated_board_box`)

Record corrugated board boxes leaving the mill with the accepted retail yarn batch.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of corrugated board boxes used for the accepted batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_reconciliation`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming retail-sale yarn (`reference_yarn_output`)

This is the reference product accepted at the spinning-mill gate; its net yarn mass excludes every packaging component.

- Selected flow: Yarn (other than sewing thread) of artificial staple fibres, put up for retail sale `9cb2deeb-5eb3-4128-a175-ccbf63b8a2cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg net conforming yarn after inspection and before addition of packaging tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_reconciliation`
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

###### Captured loose artificial staple-fibre waste (`captured_loose_artificial_fibre`)

Record loose artificial staple fibres removed and collected by housekeeping or suction systems before they become an off-spec yarn product.

- Selected flow: Captured loose artificial staple-fibre waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass sent to the declared reuse, recycling, treatment, or disposal destination for the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Off-spec artificial staple-fibre yarn waste (`offspec_artificial_yarn`)

Record yarn that has been formed but rejected from sale because it fails the declared yarn specification.

- Selected flow: Off-spec artificial staple-fibre yarn waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected-yarn mass sent to the declared reuse, recycling, treatment, or disposal destination for the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming retail-sale yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_possible` | Foreground process | Subdivide meters and material records or expand the reporting period so that direct assignment to the declared yarn output is possible before applying allocation. | `iso-14044-2006` |
| `allocation_mass_if_unavoidable` | Multiple saleable yarn outputs | If direct assignment is not possible, allocate shared electricity, lubricant, and packaging losses among saleable yarn outputs by their net accepted mass; document the outputs, mass totals, and allocation factors. | `iso-14044-2006` |
| `allocation_waste_no_product_credit` | Captured loose fibre and off-spec yarn | Do not treat a waste flow as a co-product solely because it has a recovery destination; report its measured mass and destination separately. Any substitution credit belongs to the downstream study scenario, not this foreground inventory. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_reconciliation` | `p1_dry_spinning_retail_packout` | prepared fibre input and accepted yarn output | weighbridge, scale, warehouse, and production records | batch_id; fibre_receipts_kg; opening_inventory_kg; closing_inventory_kg; accepted_net_yarn_kg; moisture_state; product_grade | Calibrated mass measurement reconciled to batch and warehouse movements | kg | Each batch, aggregated over the reference period | Complete declared reference period | Reporting spinning site | Sum accepted quantities by product identity and reconcile opening stock + receipts - closing stock against yarn output and recorded waste | Calibration records; batch tickets; stock ledger; acceptance records; reconciliation sign-off |
| `cp_site_electricity_meter` | `p1_dry_spinning_retail_packout` | site low-voltage electricity | utility meter, submeter, or invoice | meter_id; grid_region; opening_reading_kwh; closing_reading_kwh; process_share_basis; downtime; reference_period | Prefer process submetering; otherwise allocate a reconciled site meter total using documented operating records | kWh | At least monthly and for the complete reference period | Complete declared reference period | Reporting spinning site | Sum interval consumption, subtract separately metered excluded loads, and assign the documented process share | Meter specification; calibration or utility invoice; operating-hour record; reconciliation worksheet |
| `cp_lubricant_issue_record` | `p1_dry_spinning_retail_packout` | textile spinning lubricant | stores issue/return record and formulation record | batch_id; formulation_name; supplier; issued_kg; returned_kg; safety_data_sheet_id; application_point | Weigh or record issued and returned lubricant for the process batch | kg | Each issue and return, aggregated by batch | Complete declared reference period | Reporting spinning site | Sum issued mass minus returned unused mass for the accepted production batch | Store ledger; scale record; formulation technical data sheet; batch operator sign-off |
| `cp_packaging_mass_reconciliation` | `p1_dry_spinning_retail_packout` | paperboard core, paper label, LDPE film, and corrugated box | packaging bill of materials, issue record, and component weighing | package_sku; component_flow_id; component_description; component_count; sample_mass_kg; issued_mass_kg; returned_mass_kg; accepted_package_count | Weigh each distinct packaging component and reconcile issued, returned, and incorporated quantities | kg | Each package SKU and batch | Complete declared reference period | Reporting pack-out line | Calculate each component separately; never aggregate unlike packaging materials into one flow | Packaging specification; scale record; issue/return ledger; accepted pack count; reconciliation sign-off |
| `cp_waste_mass_records` | `p1_dry_spinning_retail_packout` | captured loose fibre and off-spec yarn | waste container weighing and transfer record | waste_row_id; container_id; gross_kg; tare_kg; net_kg; fibre_identity; destination; transfer_date | Weigh each waste stream separately at transfer; preserve destination and treatment identity | kg | Each transfer, aggregated by waste row and reference period | Complete declared reference period | Reporting spinning site | Sum net mass separately for each waste identity and destination | Scale record; waste transfer note; destination receipt; batch linkage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference` | Every non-reference inventory row | normalized amount = reporting-period row quantity / reporting-period net conforming yarn quantity × 1,000 kg | row quantity; net conforming yarn quantity | inventory amount per 1,000 kg net conforming yarn | `eu-textiles-bat-2022` |
| `calc_net_yarn_mass` | Reference yarn output | net yarn mass = gross packaged mass - paperboard core mass - paper-label mass - LDPE-wrap mass - corrugated-box mass - every other separately measured packaging mass | gross packaged mass; each packaging-component mass | net conforming yarn mass |  |
| `calc_material_reconciliation` | Fibre and yarn mass records | opening prepared-fibre stock + prepared-fibre receipts - closing prepared-fibre stock = accepted net yarn output + captured loose-fibre waste + off-spec yarn waste + documented work-in-progress change + documented retained or transferred material | stock records; receipts; accepted output; waste records; work-in-progress records | signed material reconciliation and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and material flows | Preserve the exact product and fibre identities, fibre mass fractions, yarn count, twist, package form, and Tiangong UUID only where direct read confirmed the same semantics. | Product specification; supplier declaration; Tiangong direct-read record; identity review in manifest |
| `dq_temporal` | Foreground inventory | Cover a representative continuous 12-month period or disclose a shorter complete production campaign and its seasonality, downtime, and product-mix limitations. | Meter dates; batch register; production calendar; invoices |
| `dq_completeness` | Inputs and outputs | Reconcile fibre, product, packaging, electricity, lubricant, and each waste stream; explain every excluded site load and every material-balance difference. | Signed reconciliation worksheets; exclusion register; waste transfer records |
| `dq_measurement` | Mass and energy records | Use calibrated meters or traceable invoices and preserve raw readings, tare values, units, conversion factors, and correction records. | Calibration certificates; utility invoices; scale logs; correction log |
| `dq_source_scope` | External method evidence | Use JRC and EU BAT sources as process-description and inventory-monitoring guidance only; disclose that EU BAT legal applicability does not extend automatically to the man-made-yarn foreground process. | Source-scope statement in dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm Product flow type, exact product name, CPC 26462, Mass property UUID, kg reference unit, and every required qualifier; reject sewing thread, synthetic staple-fibre yarn, filament yarn, and non-retail-sale yarn. | `unsd-cpc-3-0-2025` |
| `validate_net_mass` | Reference quantity | Confirm exactly 1,000 kg net conforming yarn and verify that core, label, film, box, pallet, and every other packaging mass are excluded from the reference amount and reported separately. |  |
| `validate_atomic_inventory` | Process inventory | Require one row per specific fibre, electricity scenario, lubricant formulation, packaging component, waste identity, and elementary release; reject collection labels and unresolved selector instructions as Selected flow values. | `eu-textiles-bat-2022` |
| `validate_uuid_evidence` | UUID-bearing rows | Confirm every UUID by hybrid search and public direct read and ensure the direct-read name, flow type, property, classification, location, and treatment semantics support the authored exchange. |  |
| `validate_reconciliation` | Foreground records | Confirm the electricity, packaging, lubricant, waste, and material records cover the same reference period and that the signed material reconciliation explains work in progress and any difference. | `eu-textiles-bat-2022` |
| `validate_boundary_disclosure` | Dataset boundary | Confirm prepared-fibre starting condition, upstream fibre datasets, excluded wet treatment, production geography, electricity grid, lubricant identity, waste destinations, and package form are disclosed. | `jrc-textiles-bref-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for dry spinning, winding, inspection, and retail pack-out of artificial-staple-fibre yarn |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-footprint and lifecycle models that match the declared fibre/blend, spinning route, colour state, yarn specification, package form, geography, period, and prepared-fibre starting condition |
| excluded_use | Sewing thread, synthetic-staple-fibre yarn outside CPC 26462, filament yarn, wet dyeing or finishing represented as part of this foreground process, yarn not put up for retail sale, or studies that cannot preserve net-yarn versus packaging mass |
| required_metadata | PCR id; product and fibre identities; blend mass fractions; yarn count and twist; spinning system; colour and moisture states; package form; net and gross mass; packaging component masses; site and grid geography; reference period; upstream dataset links; allocation method; waste destinations |
| required_quality_disclosure | Measurement coverage; meter and scale quality; reconciliation result; missing UUIDs; source-scope limitations; excluded loads; work-in-progress treatment; product-mix limits; representativeness limitations |
| update_trigger | Change in fibre/blend identity, prepared-fibre starting condition, spinning technology, yarn specification, lubricant formulation, electricity grid, package form, site, allocation method, waste route, or a newly verified Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Official CPC 26462 category identity and adjacent exclusions |
| `jrc-textiles-bref-2023` | `official_guidance` | Roth et al., Best Available Techniques (BAT) Reference Document for the Textiles Industry, JRC 131874, DOI 10.2760/355887, https://op.europa.eu/en/publication-detail/-/publication/ad7cea9f-97ab-11ed-b508-01aa75ed71a1/language-en (retrieved 2026-08-12) | Yarn-manufacturing process decomposition, spinning lubricant implications, electricity use, winding, and captured loose-fibre controls; descriptive use only where the BREF legal scope excludes man-made-yarn production |
| `eu-textiles-bat-2022` | `standard` | Commission Implementing Decision (EU) 2022/2508, CELEX 32022D2508, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 (retrieved 2026-08-12) | Adapted input/output inventory, direct monitoring, energy, material, process-chemical, and waste-record requirements; not a claim of legal applicability to this foreground route |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | LCI allocation hierarchy and documentation basis |
