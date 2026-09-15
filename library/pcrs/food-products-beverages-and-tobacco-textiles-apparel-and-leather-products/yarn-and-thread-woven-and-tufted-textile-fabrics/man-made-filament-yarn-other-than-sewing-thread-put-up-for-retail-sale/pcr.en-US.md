---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.man-made-filament-yarn-other-than-sewing-thread-put-up-for-retail-sale
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Man-made filament yarn (other than sewing thread), put up for retail sale

## 1. Scope and Applicability

This PCR defines foreground data production for the retail winding and packaging of finished man-made filament yarn other than sewing thread. It applies when the foreground facility is in China and receives saleable, composition- and construction-defined filament yarn that has completed all polymer production, filament formation, texturing, twisting, dyeing, and finishing required by the final product before crossing this foreground boundary.

The reference amount is net yarn mass. Paperboard cores, labels, and outer film are inventoried separately and are not included in the reference amount. This candidate does not cover sewing thread, yarn made from staple fibres, fibre tow, fabrics, upstream filament manufacture, wet processing performed at the foreground site, retail distribution, use, or end-of-life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.man-made-filament-yarn-other-than-sewing-thread-put-up-for-retail-sale |
| classification_refs | CPC 3.0: 26422, Man-made filament yarn (other than sewing thread), put up for retail sale |
| covered_products | Saleable retail packages of synthetic or artificial continuous-filament yarn, including mono- or multifilament and single, multiple, or cabled constructions, provided the product is not sewing thread and its fibre composition, construction, linear density, colour, finish, and package form are declared. |
| excluded_products | Sewing thread; yarn made from man-made staple fibres; filament tow; yarn not put up for retail sale as the final market state; woven, knitted, or tufted fabrics; products whose twisting, dyeing, washing, heat setting, or other wet or thermal finishing occurs inside the declared foreground boundary. |
| representative_product | Finished man-made filament yarn wound on one paperboard retail core, supplied with one paper label and, when used, one low-density polyethylene outer film, reported by net yarn mass. |
| production_route | Receipt of finished non-retail filament yarn -> lot verification and tare control -> mechanical retail winding -> labelling and outer-film packing -> saleable packaged yarn at plant gate. |
| market_state | Saleable retail put-up at the gate of a China retail-winding and packaging plant; distribution beyond the plant gate is excluded. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Man-made filament yarn, other than sewing thread, in a declared saleable retail put-up. |
| How much | 1 kg net yarn mass, excluding the paperboard core, label, outer film, and other packaging. |
| How well | Finished and saleable, with the fibre identity, construction, linear density, colour and finishing state, and retail package form declared. |
| How long or cycle | One completed foreground retail-winding and packaging batch; no use duration is assigned. |
| reference_flow_link | The measured net mass of conforming retail yarn output from `retail_winding_packaging`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net yarn mass |
| Reference product flow | Man-made filament yarn (other than sewing thread), put up for retail sale `561c51b1-b4f9-4eea-b081-e096bf93820b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre origin as synthetic or artificial; polymer or regenerated-cellulosic fibre family and mass fraction; mono- or multifilament form; yarn construction and ply or cable status; linear density in tex with the measurement or conversion basis; colour and dyeing or finishing state; retail package form; net yarn mass excluding packaging; foreground production geography; electricity supply scenario |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory values to 1 kg of measured net yarn. Determine and retain gross, tare, packaging, and net readings; do not add core, label, film, or other packaging mass to the reference product amount. |
| `yarn_linear_density` | reference product qualifiers | Linear density | tex | Declare the measured or converted linear density and the original count system. Apply the Tex System consistently and retain the test or conversion basis. |
| `packaging_component_mass` | paperboard core, paper label, and LDPE film | Mass | kg | Record each packaging component separately from supplier delivery records, component counts, and measured representative unit mass; do not combine different materials in one amount. |
| `cn_electricity_energy` | China 1-35 kV consumption-mix electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the original meter unit, apply an auditable unit conversion to MJ, and normalize the resulting energy to measured net yarn output. The electricity UUID in this PCR is valid only for the declared China supply scenario. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished man-made filament yarn, other than sewing thread, whose fibre composition, filament form, yarn construction, linear density, colour, and dyeing or finishing state already match the retail product, received net of producer transport packaging. |
| starting_condition_role | Upstream product input to the foreground retail-winding and packaging process. |
| product_classification_scope | CPC 3.0 subclass 26422 for the output; the received non-retail yarn is an upstream product and does not acquire CPC 26422 identity until the declared retail put-up is completed. |
| recursive_input_rule | If returned or reworked CPC 26422 yarn enters the foreground process, record it once as an input linked to its supplying dataset, disclose the rework relationship, and do not recursively apply this PCR to the same physical yarn within the same product system. |
| upstream_dataset_requirement | Link every received-yarn lot to an upstream dataset matching fibre family and mass fraction, filament form, yarn construction, linear density, recycled content, colour and finishing state, production geography, and technology. Upstream polymer, filament, texturing, twisting, dyeing, and finishing burdens must not be recreated in this foreground process. |
| disclosure | Declare the foreground site, reporting period, received-yarn starting condition, excluded upstream operations, retail package configuration, electricity scenario, treatment of producer transport packaging, and all departures from the representative route. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_retail_conversion_only` | foreground system | Include lot verification, tare control, mechanical retail winding, labelling, outer-film packing when used, foreground electricity, material inputs, measured yarn loss, packaging loss, and on-site waste handling. Exclude all yarn-production and wet-processing operations completed before receipt and all post-gate distribution, use, and end-of-life. | `unsd-cpc-3-0-structure-2025`; `jrc-textiles-bref-2023` |
| `boundary_upstream_link_required` | received yarn | Require a matching upstream dataset for the received finished yarn and prevent double counting of upstream filament manufacture, twisting, dyeing, or finishing. | `jrc-textiles-bref-2023`; `iso-14044-2006` |
| `boundary_inventory_inputs_outputs` | foreground records | Maintain batch-level records of material, energy, product, and waste inputs and outputs, with separately identifiable streams. | `eu-bat-textiles-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `retail_winding_packaging` | Retail winding and packaging | `required` | Always included for the covered China plant-gate product. | Foreground conversion of finished non-retail yarn into the declared retail put-up. | 1 kg measured net retail yarn output |

### Process: Retail winding and packaging (`retail_winding_packaging`)

#### Inputs

##### Product flows

###### Received finished non-retail filament yarn (`received_nonretail_filament_yarn`)

This is the composition- and construction-matched yarn entering mechanical retail winding. The Tiangong UUID remains unresolved because the reviewed CPC 26421 candidate is narrower than this input.

- Selected flow: Man-made filament yarn other than sewing thread, finished and not put up for retail sale
- Flow property / unit: Mass / kg
- Amount rule: Record the calibrated net mass issued to the retail-winding batch, adjusted for documented opening and closing work-in-progress.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`
- Sources: `jrc-textiles-bref-2023`

###### China medium-voltage electricity at user (`cn_medium_voltage_electricity`)

This card represents one explicit supply scenario: 1-35 kV alternating current, China consumption mix, supplied to the user. It must not be used as a proxy for a non-China site.

- Selected flow: Alternating current, 1-35 kV, consumption mix, at user, CN `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record submetered or meter-allocated electricity for the retail-winding and packaging batch, convert the recorded unit to MJ auditably, and normalize to measured net yarn output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_metering`
- Sources: `jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

###### Paperboard yarn-winding tube (`paperboard_yarn_core`)

This is the single paperboard core incorporated into the retail yarn put-up. Its mass is recorded separately from the yarn and from every other packaging component.

- Selected flow: Paperboard yarn-winding tube `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Record issued core count and measured representative unit mass, reconcile unused returns, and calculate the mass incorporated into the batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-bat-textiles-2022`

###### Paper retail label (`paper_retail_label`)

This is the paper label incorporated into the retail package. Adhesive, ink, or backing material is not represented by this card unless it is included in the selected Tiangong flow and supplier specification.

- Selected flow: Paper packaging label, at plant, GLO `64321117-433d-43a5-97f9-2ea624c15656`
- Flow property / unit: Mass / kg
- Amount rule: Record issued label count and measured representative unit mass, reconcile unused returns, and calculate the mass incorporated into the batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-bat-textiles-2022`

###### Low-density polyethylene retail packaging film (`ldpe_retail_packaging_film`)

This is the single LDPE outer-film component when the declared retail package uses it. The UUID remains unresolved because the reviewed polyethylene candidate does not confirm LDPE grade or retail film state.

- Selected flow: Low-density polyethylene retail packaging film
- Flow property / unit: Mass / kg
- Amount rule: Record film roll or bag mass issued, unused returns, and measured same-material waste; calculate the mass incorporated into the batch. Record zero only with evidence that no outer film is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-bat-textiles-2022`

##### Waste flows

##### Elementary flows

No default elementary input is assigned to this mechanical foreground process. Any direct elementary input observed at the site must be added as one substance- and compartment-specific foreground row before the dataset is used.

#### Outputs

##### Product flows

###### Saleable retail filament yarn (`retail_product`)

This is the conforming foreground output and the reference product. Its recorded amount is net yarn mass and excludes all packaging mass.

- Selected flow: Man-made filament yarn (other than sewing thread), put up for retail sale `561c51b1-b4f9-4eea-b081-e096bf93820b`
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated gross and tare readings for conforming packages and report net yarn mass for the batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Man-made filament yarn winding offcut waste (`filament_yarn_winding_waste`)

This card records only man-made filament yarn offcuts, tangled yarn, and rejected yarn generated by the retail-winding step. It excludes paperboard and plastic packaging waste.

- Selected flow: Man-made filament yarn winding offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Separately weigh the yarn waste from each batch and retain its declared recovery or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_tracking`
- Sources: `jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

###### Waste paperboard yarn-winding tube (`waste_paperboard_yarn_core`)

This card records damaged or rejected paperboard yarn-winding tubes generated on site. It excludes paper labels and plastic film.

- Selected flow: Waste paperboard yarn-winding tube
- Flow property / unit: Mass / kg
- Amount rule: Separately weigh rejected paperboard tubes by batch and retain their recovery or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_tracking`
- Sources: `jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

###### Waste low-density polyethylene packaging film (`waste_ldpe_packaging_film`)

This card records only LDPE film trim, damaged bags, or rejected outer film generated on site. It excludes other plastics and paper packaging.

- Selected flow: Waste low-density polyethylene retail packaging film
- Flow property / unit: Mass / kg
- Amount rule: Separately weigh the LDPE film waste by batch and retain its recovery or disposal destination. Record zero only when no LDPE film is used and the absence is documented.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg measured net retail yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_tracking`
- Sources: `jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

##### Elementary flows

No default elementary output is assigned to this mechanical foreground process. Any measured direct release must be added as one substance- and compartment-specific foreground row and linked to retained monitoring evidence.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_separation` | all foreground exchanges | Avoid allocation by using batch-specific material, electricity, product, and waste records and by subdividing separately metered or separately weighed operations. | `iso-14044-2006`; `eu-bat-textiles-2022` |
| `allocation_shared_electricity` | shared electricity meters | When subdivision is not feasible, allocate metered electricity to the batch using documented machine operating time and measured equipment power or another demonstrated physical causal parameter; disclose the method and retain the calculation inputs. | `iso-14044-2006`; `jrc-textiles-bref-2023` |
| `allocation_no_avoided_burden` | yarn and packaging waste | Report each waste stream and destination as a foreground waste output. Do not credit avoided virgin production or downstream recycling inside this foreground process; model downstream treatment in the linked waste-management system. | `jrc-textiles-bref-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_mass_balance` | `retail_winding_packaging` | received_nonretail_filament_yarn; retail_product | scale and batch production records | lot_id; batch_id; fibre_family; composition; construction; linear_density; colour_finish; opening_wip_mass; received_net_mass; closing_wip_mass; product_gross_mass; product_tare_mass; product_net_mass | Calibrated scale readings tied to lot and batch identifiers; retain gross, tare, and net records. | kg | every lot and batch | complete reporting period with no omitted production batch | all retail-winding lines in the declared foreground site | sum by batch, reconcile work-in-progress, then normalize to conforming net yarn output | scale calibration status; signed batch record; lot traceability; gross-tare-net reconciliation |
| `cp_electricity_metering` | `retail_winding_packaging` | cn_medium_voltage_electricity | electricity meter and machine-operation records | meter_id; start_reading; end_reading; recorded_unit; reading_time; machine_id; operating_time; batch_id; allocation_parameter | Prefer a dedicated submeter; otherwise use a documented physical allocation from the site meter to the batch. | native meter unit and MJ after conversion | each batch or shift with batch linkage | complete reporting period including start-up, shutdown, and idle energy assigned by the declared rule | all winding, conveying, labelling, and film-packing equipment inside the foreground boundary | subtract sequential readings, allocate only when needed, convert auditably to MJ, and normalize to net yarn output | meter identifier and calibration; reading evidence; operating log; conversion factor provenance; allocation calculation |
| `cp_packaging_components` | `retail_winding_packaging` | paperboard_yarn_core; paper_retail_label; ldpe_retail_packaging_film | stores issue, return, supplier specification, and representative weighing records | component_id; material; supplier_lot; issued_count_or_mass; returned_unused_count_or_mass; sampled_unit_mass; incorporated_count; batch_id | Reconcile issued and returned components; determine component mass by direct weighing or count multiplied by a current measured representative unit mass. | count and kg | every packaging lot and production batch | complete reporting period | all packaging stations inside the foreground site | calculate each material and component separately and normalize incorporated mass to net yarn output | supplier specification; sample-weighing record; scale calibration; issue-return reconciliation |
| `cp_waste_tracking` | `retail_winding_packaging` | filament_yarn_winding_waste; waste_paperboard_yarn_core; waste_ldpe_packaging_film | segregated waste weighing and destination records | waste_row_id; batch_id; container_tare; gross_mass; net_mass; material_identity; destination; transfer_date; transfer_record | Segregate and weigh each named waste stream; prohibit cross-material aggregation. | kg | every waste container and batch allocation | complete reporting period | all waste generation points inside the foreground boundary | sum each row_id by batch and normalize to net yarn output without avoided-burden credit | scale calibration; container label; transfer note; recycler or disposal receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_yarn_output` | retail_product | Sum package gross mass minus separately measured package tare mass; exclude all paperboard, label, film, and other packaging. | product_gross_mass; product_tare_mass; batch_id | product_net_mass in kg | `unsd-cpc-3-0-structure-2025` |
| `calc_yarn_mass_reconciliation` | received yarn and yarn waste | Opening work-in-progress plus received net yarn minus closing work-in-progress must reconcile with net conforming yarn output plus separately measured man-made filament yarn waste; retain and explain any residual. | opening_wip_mass; received_net_mass; closing_wip_mass; product_net_mass; filament_yarn_waste_mass | batch mass-balance residual in kg | `eu-bat-textiles-2022` |
| `calc_packaging_component_mass` | each packaging input | Issued mass minus returned unused mass minus separately measured same-material foreground waste equals mass incorporated into the delivered retail packages; calculate each material separately. | issued_count_or_mass; returned_unused_count_or_mass; sampled_unit_mass; same_material_waste_mass | incorporated component mass in kg | `eu-bat-textiles-2022` |
| `calc_electricity_normalization` | cn_medium_voltage_electricity | Subtract meter readings, apply the documented native-unit-to-MJ conversion, allocate only by the declared physical parameter when a dedicated meter is unavailable, and divide by measured net yarn output. | start_reading; end_reading; recorded_unit; conversion_factor; allocation_parameter; product_net_mass | MJ per kg net yarn | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | received and retail yarn | Preserve lot-level linkage between received yarn and retail output, including fibre family, composition, filament form, construction, linear density, colour and finish, and upstream dataset reference. | purchase specification; certificate or lot sheet; batch genealogy; upstream dataset identifier |
| `dq_measurement_control` | mass and electricity records | Use identified measuring equipment with current calibration or verification status; retain native readings and prohibit undocumented unit conversion. | calibration certificate or verification log; meter export; scale record; conversion record |
| `dq_temporal_completeness` | foreground reporting period | Include every production batch, packaging lot, start-up, shutdown, reject, and waste transfer inside the declared period, or disclose and quantify each gap. | production schedule; batch register; stores ledger; meter continuity check; waste register |
| `dq_geographic_match` | electricity | Use the selected CN 1-35 kV consumption-mix flow only for a China foreground site supplied at the declared voltage range. | site address; supply contract or meter specification; selected flow UUID |
| `dq_zero_and_absence_evidence` | LDPE film and waste rows | A zero amount is valid only when a batch record, bill of materials, or segregated waste record demonstrates absence; blank values are not zero. | bill of materials; issue-return record; waste log; signed batch record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require product UUID `561c51b1-b4f9-4eea-b081-e096bf93820b`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and reference unit kg. | `unsd-cpc-3-0-structure-2025` |
| `validate_required_qualifiers` | reference product | Reject a foreground package that omits any required fibre, construction, linear-density, finishing, package-form, net-mass, geography, or electricity-scenario qualifier. | `iso-1144-2016`; `unsd-cpc-3-0-structure-2025` |
| `validate_foreground_boundary` | process scope | Reject double counting of upstream polymer, filament, texturing, twisting, dyeing, or finishing burdens in `retail_winding_packaging`; require the upstream received-yarn dataset and boundary disclosure. | `jrc-textiles-bref-2023`; `iso-14044-2006` |
| `validate_atomic_inventory` | inventory rows | Require one physical or chemical exchange per row_id and require the bilingual files to preserve the same ordered row_id, flow type, UUID, and controlled machine fields. | `eu-bat-textiles-2022` |
| `validate_yarn_mass_balance` | yarn inputs and outputs | Require the batch yarn mass reconciliation, an explained residual, and direct records for net product and yarn waste; do not substitute an estimated yield or loss range. | `eu-bat-textiles-2022` |
| `validate_packaging_reconciliation` | packaging inputs and waste | Require separate mass reconciliation for paperboard core, paper label, and LDPE film, including evidence for any zero or absent film and separately identified waste. | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `validate_electricity_scenario` | electricity | Require foreground electricity records and verify that the selected 1-35 kV CN consumption-mix flow matches the site geography and supply voltage; reject proxy use outside the declared scenario. | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `validate_no_unresolved_uuid_as_match` | unresolved inventory identities | Keep an unresolved selected flow human-readable and atomic, but do not claim a Tiangong identity until a future hybrid search and public direct read confirm the exact flow type and semantics. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for the China retail winding and packaging of finished man-made filament yarn. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product systems requiring a China plant-gate dataset for the declared retail-winding and packaging route, with a separately linked, composition- and construction-matched upstream yarn dataset. |
| excluded_use | Non-China electricity scenarios; sewing thread; staple-fibre yarn; upstream filament manufacture or wet processing; distribution, use, or end-of-life; any dataset that lacks net yarn mass or the required product qualifiers. |
| required_metadata | PCR id and status; foreground site and period; upstream yarn dataset; all required qualifiers; net/gross/tare basis; package bill of materials; electricity flow UUID and voltage; allocation method; waste destinations; source ids; unresolved UUID disclosures. |
| required_quality_disclosure | Measurement and calibration evidence; temporal and batch coverage; mass-balance residual; packaging reconciliation; electricity metering or allocation; zero-value evidence; unresolved flow identities; deviations from the representative route. |
| update_trigger | Re-run identity review when Tiangong adds exact non-retail yarn, LDPE film, or matching waste flows; update the dataset when yarn composition or construction, package configuration, site, voltage, electricity supply, allocation method, reporting technology, or upstream dataset changes materially. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, structure only, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 26422 product identity and retail-market-state boundary. |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, 2023, JRC131874, DOI 10.2760/355887. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Winding process decomposition, electricity as a material foreground input, separate waste tracking, and packaging-waste management. |
| `eu-bat-textiles-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. http://data.europa.eu/eli/dec_impl/2022/2508/oj | Input-output inventory, material and energy records, waste identification, and quality evidence. |
| `iso-1144-2016` | `standard` | ISO 1144:2016, Textiles - Universal system for designating linear density (Tex System). https://www.iso.org/standard/70774.html | Yarn linear-density qualifier and consistent Tex-system declaration. |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines. https://www.iso.org/standard/38498.html | LCI scope, transparent allocation, reporting, and upstream/foreground separation. |
