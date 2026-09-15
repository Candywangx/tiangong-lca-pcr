---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-crude
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Palm oil, crude

## 1. Scope and Applicability

This PCR governs foreground data packages for crude palm oil produced from oil-palm fresh fruit bunches at a palm oil mill. It covers receipt and preparation of fresh fruit bunches, sterilization or cooking, threshing, digestion, pressing, oil clarification and drying, bulk storage at the mill gate, kernel and solid-residue recovery, on-site energy generation when present, and treatment or disposition of mill effluent and residues.

Oil-palm cultivation and transport of fresh fruit bunches to the declared mill boundary are represented by traceable upstream datasets. Refining, bleaching, deodorization, fractionation, manufacture of palm kernel oil, consumer packaging, distribution beyond the mill gate, use, and end-of-life are outside this foreground PCR. A study may connect those stages downstream but must not describe their outputs as the reference product of this PCR.

The PCR applies to batch, semi-continuous, and continuous routes. The dataset must declare the route, mill scale, geography, reporting period, fresh-fruit-bunch origin, energy system, effluent treatment, co-product treatment, and crude-oil quality state. FAO process descriptions support the common unit-operation map; site records remain authoritative for actual quantities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-crude |
| classification_refs | CPC 3.0: 21651, Palm oil, crude |
| covered_products | Unrefined crude palm oil obtained from the mesocarp of oil-palm fresh fruit bunches and delivered in bulk at the producing mill gate |
| excluded_products | Refined, bleached, deodorized, or fractionated palm oil; palm olein; palm stearin; palm kernel oil; recovered low-grade technical oil when separately marketed; other vegetable oils |
| representative_product | Crude palm oil after clarification and moisture removal, before refining or fractionation |
| production_route | Fresh fruit bunch reception, sterilization or cooking, threshing, digestion, pressing, clarification, drying, and bulk mill storage, with associated kernel, energy, effluent, and residue management |
| market_state | Bulk, unrefined liquid or semi-solid crude oil at the palm oil mill gate; quality characteristics and storage temperature declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of crude palm oil as an unrefined bulk feedstock at the palm oil mill gate |
| How much | 1 kg of crude palm oil on the declared as-delivered mass basis |
| How well | Product meets the producer's declared crude-oil specification; moisture, impurities, free fatty acid basis, and any off-spec status are reported |
| How long or cycle | One completed production output over the declared reporting period; no service lifetime applies |
| reference_flow_link | `crude_palm_oil_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Palm oil, crude `c25748fe-ebcf-4a0e-bcf9-544edb1645b1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; reporting period; mill route and scale; fresh-fruit-bunch origin and starting condition; crude-oil moisture, impurities, and free fatty acid reporting basis; allocation method; energy configuration; effluent treatment route; bulk storage condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | crude palm oil reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every reported inventory to exactly 1 kg of as-delivered crude palm oil after clarification and drying; report measured oil moisture and impurities so alternative dry-matter calculations remain reproducible. |
| `material_mass_basis` | fresh fruit bunches, kernels, residues, effluent, and oil stocks | Mass | kg | Record as-received mass and, where moisture materially changes interpretation, measured moisture or dry-matter content; do not convert between wet and dry bases without the measured content and formula. |
| `energy_quantity_basis` | purchased electricity, fuels, generated electricity, and steam | Energy | kWh for electricity; MJ for fuels and thermal energy | Preserve metered or invoice units, document lower or higher heating value for fuels, and record every conversion factor used to normalize energy to the reference flow. |
| `reporting_period_balance` | all foreground inputs, outputs, and stock changes | Mass or Energy as applicable | source unit and normalized unit | Use one common reporting period and include opening and closing stocks when they materially affect the normalized balance. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_mill_gate_operations` | foreground crude palm oil production | Include fresh-fruit-bunch receipt, sterilization or cooking, threshing, digestion, pressing, clarification, drying, bulk mill storage, kernel and residue recovery, on-site energy generation, and effluent or residue management when operated by or physically integrated with the mill. | `fao-palm-oil-processing-2002` |
| `boundary_upstream_traceability` | fresh fruit bunches and purchased utilities | Model cultivation and inbound fresh-fruit-bunch transport as traceable upstream product inputs, and model purchased electricity, fuels, water, chemicals, and waste services with geographically and technologically representative upstream datasets. | `eu-jrc-ilcd-handbook-2010` |
| `boundary_excluded_downstream` | downstream processing | Exclude refining, bleaching, deodorization, fractionation, manufacture of palm kernel oil, packaging for consumer sale, and distribution beyond the producing mill gate from the foreground reference-product dataset. | `fao-palm-oil-processing-2002` |
| `boundary_no_unreported_disposal` | effluent, residues, and direct emissions | Do not assume mill effluent, empty fruit bunches, fibre, shells, ash, sludge, or direct emissions are burden-free or zero; record their measured disposition and the treatment route or document a justified data gap. | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh fruit bunches or loose oil-palm fruit received at the mill, with supplier or estate origin, receipt mass, receipt time, and inbound transport treatment declared |
| starting_condition_role | Upstream product input to the mill foreground system |
| product_classification_scope | Crude palm oil from oil-palm fruit mesocarp; palm-kernel oil and refined or fractionated palm-oil products are outside the category |
| recursive_input_rule | Any externally purchased crude palm oil entering blending or reprocessing is recorded as a separate same-category input with its own upstream dataset and quantity; it is not reclassified as fresh fruit bunch input or silently merged with mill-produced oil |
| upstream_dataset_requirement | Use supplier-, estate-, route-, and period-representative datasets for fresh fruit bunch production and inbound transport, and representative datasets for purchased utilities, fuels, chemicals, and external treatment services |
| disclosure | Declare the share and origin of own-estate and third-party fruit, mill route and scale, receipt-to-processing control, energy configuration, effluent treatment, residue destinations, co-product treatment, allocation method, and any upstream or foreground data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ffb_reception_preparation` | Fresh fruit bunch reception, sterilization, and threshing | required | Always included | Foreground fruit receipt, quality control, heat treatment, and separation of fruit from bunches | kg fresh fruit bunches received and kg prepared fruit transferred |
| `oil_extraction_finishing` | Digestion, pressing, clarification, drying, and bulk storage | required | Always included | Foreground extraction and finishing of crude palm oil, including kernel and press-residue recovery | 1 kg crude palm oil output |
| `mill_energy_residue_management` | Mill energy, effluent, and residue management | required | Always included; zero quantities are permitted only when records demonstrate that a route is absent | Foreground or linked treatment of internally generated fuels, mill effluent, solid residues, ash, sludge, and direct emissions | kg crude palm oil output and treatment-specific input |

### Process: Fresh fruit bunch reception, sterilization, and threshing (`ffb_reception_preparation`)

#### Inputs

##### Product flows

###### Fresh fruit bunches received (`fresh_fruit_bunch_input`)

Fresh fruit bunches cross the mill foreground boundary as the principal raw-material input. Record each supply origin or an auditable aggregated origin group and link cultivation and inbound transport to upstream datasets.

- Selected flow: Oil-palm fresh fruit bunches (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured weighbridge or calibrated scale mass received, adjusted for documented rejects and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ffb_receipt`
- Sources: `fao-palm-oil-processing-2002`

- Range: Source-backed fresh fruit bunch input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 4.17
  - Upper: 5.00
  - Unit: kg fresh fruit bunches/kg crude palm oil
  - Basis: inverse of the FAO-reported 20-24 tonnes crude palm oil per 100 tonnes fresh fruit bunches for a well-run mill
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-palm-oil-processing-2002`

###### Sterilization water or steam supply (`sterilization_water_steam`)

Record water and externally supplied steam used to sterilize or cook fruit. Internally generated steam is transferred from `mill_energy_residue_management` without double counting its fuel inputs.

- Selected flow: Process water or steam supply (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered use or calculated use from calibrated batch volume, cycle count, and condensate return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_records`
- Sources: `fao-palm-oil-processing-2002`

- Range: Provisional process-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg water/kg crude palm oil
  - Basis: net external water supplied to fruit preparation per 1 kg crude palm oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared sterilized fruit transferred to extraction (`prepared_fruit_transfer`)

Record the mass transferred to digestion and pressing as an internal product flow so fruit losses, rejects, and stocks remain visible.

- Selected flow: Sterilized oil-palm fruit (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or mass balance from received fruit, rejected fruit, empty bunches, condensate, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_residue_records`
- Sources: `fao-palm-oil-processing-2002`

##### Waste flows

###### Empty fruit bunches and rejected fruit (`empty_bunches_rejects`)

Record separated empty bunches and rejected or spoiled fruit by actual destination. Material used as fuel, mulch, or another product is transferred to the receiving process and is not simultaneously recorded as final waste.

- Selected flow: Empty fruit bunches and rejected oil-palm fruit (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition or documented mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_residue_records`
- Sources: `fao-palm-oil-processing-2002`

###### Sterilizer condensate and preparation wastewater (`preparation_wastewater`)

Record condensate or wastewater leaving fruit preparation and link it to reuse, effluent treatment, or final discharge.

- Selected flow: Palm oil mill preparation wastewater (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured flow or calculated tank and cycle balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_emissions`
- Sources: `fao-palm-oil-processing-2002`

### Process: Digestion, pressing, clarification, drying, and bulk storage (`oil_extraction_finishing`)

#### Inputs

##### Product flows

###### Prepared sterilized fruit (`prepared_fruit_input`)

Receive the internal prepared-fruit transfer from `ffb_reception_preparation` on the same reporting-period and mass basis.

- Selected flow: Sterilized oil-palm fruit (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: equal to `prepared_fruit_transfer` after documented transfer losses and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_residue_records`
- Sources: `fao-palm-oil-processing-2002`

###### Clarification and cleaning water (`clarification_water`)

Record hot-water dilution, equipment cleaning, and other water used in extraction and clarification, net of separately measured reuse.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered water or calculated use from calibrated vessel volume and operating cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_records`
- Sources: `fao-palm-oil-processing-2002`

- Range: Provisional clarification-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg water/kg crude palm oil
  - Basis: net external water supplied to extraction, clarification, and cleaning per 1 kg crude palm oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity and mechanical energy (`extraction_electricity`)

Record electricity used by digesters, presses, pumps, screens, centrifuges, kernel recovery, and storage. Separate purchased electricity from internally generated electricity.

- Selected flow: Electricity supply (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or calculated allocation from mill meter readings and documented equipment operating data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_records`
- Sources:

- Range: Provisional purchased-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg crude palm oil
  - Basis: net purchased electricity attributable to extraction and finishing per 1 kg crude palm oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Crude palm oil reference output (`crude_palm_oil_output`)

Record saleable crude palm oil after clarification and drying and before refining or fractionation. Off-spec oil and recovered technical oil are recorded separately.

- Selected flow: Palm oil, crude `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount based on calibrated tank, scale, or custody-transfer records
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

###### Palm kernels recovered (`palm_kernel_coproduct`)

Record dry recovered palm kernels as a co-product when they leave the mill for further processing. Do not include downstream palm-kernel oil extraction.

- Selected flow: Palm kernels (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass plus stock change, corrected only with recorded moisture data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_residue_records`
- Sources: `fao-palm-oil-processing-2002`

##### Waste flows

###### Press fibre and palm kernel shells (`fibre_shell_residue`)

Record fibre and shells separately where measured, including quantities used as internal boiler fuel, sold, reused, or discarded.

- Selected flow: Palm press fibre and palm kernel shells (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass by residue type and destination or documented mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_residue_records`
- Sources: `fao-palm-oil-processing-2002`

###### Palm oil mill effluent from extraction and clarification (`pome_output`)

Record wastewater, sludge, and oil-bearing liquid sent to recovery, treatment, land application, or discharge. Do not assume zero burden for unmeasured releases.

- Selected flow: Palm oil mill effluent (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured flow and sampled composition or calculated water balance with documented uncertainty
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_emissions`
- Sources: `fao-palm-oil-processing-2002`

- Range: Provisional mill-effluent QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg effluent/kg crude palm oil
  - Basis: total liquid effluent leaving extraction and clarification per 1 kg crude palm oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mill energy, effluent, and residue management (`mill_energy_residue_management`)

#### Inputs

##### Product flows

###### Internally recovered biomass fuels (`internal_biomass_fuel`)

Record fibre, shells, or empty bunches used in mill boilers as internal transfers and reconcile them with the corresponding residue outputs.

- Selected flow: Palm mill biomass residues used as fuel (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by residue type and moisture content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_records`
- Sources: `fao-palm-oil-processing-2002`

###### Supplemental fuel and purchased electricity (`supplemental_energy`)

Record all purchased fossil or biogenic fuel and electricity used for steam, power generation, backup equipment, effluent treatment, and residue handling.

- Selected flow: Supplemental fuel and purchased electricity by actual type (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ fuel and kWh electricity
- Amount rule: invoice, calibrated meter, or tank-dip records by energy carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_records`
- Sources:

- Range: Provisional supplemental-fuel QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg crude palm oil
  - Basis: purchased fuel energy supplied to the mill per 1 kg crude palm oil, excluding internal biomass energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mill effluent and solid residues entering management (`residues_to_management`)

Receive mill effluent, empty bunches, fibre, shells, ash, and other residues by type and origin without netting exports or final discharges.

- Selected flow: Palm oil mill effluent and residues by actual type (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: equal to recorded upstream residue transfers after documented recovery and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_emissions`
- Sources: `fao-palm-oil-processing-2002`

#### Outputs

##### Product flows

###### Internally generated steam and electricity (`generated_energy_transfer`)

Record useful steam and electricity generated on site and transferred to mill operations. Do not credit internal energy as an exported co-product.

- Selected flow: Mill-generated steam and electricity (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ steam and kWh electricity
- Amount rule: metered generation and internal delivery, with conversion efficiency documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_records`
- Sources: `fao-palm-oil-processing-2002`

###### Exported kernels, biomass residues, recovered oil, or surplus energy (`exported_coproducts`)

Record each exported co-product separately with its mass or energy, destination, quality, and revenue status. Do not combine exports with internal use.

- Selected flow: Exported mill co-product by actual type (Tiangong UUID unresolved)
- Flow property / unit: Mass or Energy / kg, MJ, or kWh as applicable
- Amount rule: measured dispatch quantity plus stock change by co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_residue_records`
- Sources: `fao-palm-oil-processing-2002`

##### Waste flows

###### Treatment sludge, boiler ash, and final wastes (`final_waste_outputs`)

Record final wastes by type and actual treatment or disposal route. Ash, sludge, or empty bunches used beneficially remain explicit outputs and are not deleted from the mass balance.

- Selected flow: Palm oil mill final waste by actual type (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass or documented treatment mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_emissions`
- Sources: `fao-palm-oil-processing-2002`

##### Elementary flows

###### Direct air emissions from boilers and effluent treatment (`direct_air_emissions`)

Record measured emissions or calculate them from collected fuel, treatment, and operating data with a cited factor set. Include methane from anaerobic effluent treatment or unmanaged effluent when applicable; do not assume capture or oxidation without records.

- Selected flow: Individual elementary flows to air (Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg per substance
- Amount rule: direct measurement or activity data multiplied by a documented, study-selected emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_emissions`
- Sources:

###### Treated effluent discharge to water or land (`treated_effluent_release`)

Record final discharged water volume or mass and measured pollutant loads by receiving compartment. Reused water is an internal or product transfer, not an elementary discharge.

- Selected flow: Individual elementary flows to water or land (Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg water and kg per substance
- Amount rule: measured discharge multiplied by sampled concentration, with sampling coverage and detection-limit treatment documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_emissions`
- Sources: `fao-palm-oil-processing-2002`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | all multifunctional mill processes | First avoid allocation by separately metering or subdividing reception, extraction, kernel recovery, energy generation, effluent treatment, and residue handling; assign inputs and emissions directly where a physical process relationship is documented. | `eu-jrc-ilcd-handbook-2010` |
| `allocation_residual_choice` | crude palm oil, palm kernels, exported residues, recovered oil, and exported energy | When subdivision cannot resolve a remaining shared burden, select and document a causal physical relationship. If no defensible physical relationship exists, use a documented economic relationship based on consistent reporting-period prices; disclose the method, data, co-product status, and allocation shares. | `eu-jrc-ilcd-handbook-2010` |
| `allocation_internal_energy` | fibre, shells, empty bunches, steam, and electricity used within the mill | Treat internal residue fuel and internally generated energy as transfers and do not create an avoided-product credit. Assign boiler and generation burdens to consuming mill processes by metered energy delivery or another documented physical relationship. | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `allocation_export_sensitivity` | exported co-products | Do not apply substitution or avoided-burden credits inside the attributional foreground dataset. When exported co-products materially affect results, report a sensitivity case using an alternative defensible allocation basis. | `eu-jrc-ilcd-handbook-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ffb_receipt` | `ffb_reception_preparation` | fresh fruit bunch receipt and origin | weighbridge ticket, supplier record, harvest or dispatch record | timestamp; supplier or estate; gross mass; tare mass; net mass; rejected mass; origin; transport mode and distance; receipt condition | calibrated weighbridge or scale reconciled to supplier and inventory records | kg | every delivery or batch | full reporting period | all fruit received by the declared mill | sum accepted net mass by origin; reconcile rejects and opening or closing stock | calibration certificate; ticket sequence check; supplier reconciliation |
| `cp_water_energy_records` | all processes | water, electricity, fuel, steam, and internally generated energy | meter reading, invoice, tank record, fuel analysis, operating log | meter id; opening and closing reading; purchase quantity; fuel type; heating-value basis; biomass moisture; steam or electricity generation; internal delivery; downtime | calibrated meters and invoice or stock reconciliation; engineering calculation only from recorded operating data | kg water; kWh electricity; MJ fuel or steam | continuous or each receipt, aggregated monthly | full reporting period | all foreground operations and shared utilities | subtract documented non-PCR users and stock change; normalize attributable net use to crude palm oil output | meter calibration; invoices; fuel certificates; reconciliation worksheet |
| `cp_coproduct_residue_records` | all processes | crude oil, kernels, internal transfers, co-products, residues, and stock changes | calibrated scale or tank record, dispatch note, laboratory moisture result, inventory record | flow type; origin process; destination; gross and net mass; moisture; quality grade; opening stock; closing stock; dispatch quantity; revenue status | direct weighing or calibrated tank volume with density and temperature record; documented mass balance where direct weighing is unavailable | kg | each batch or dispatch, aggregated monthly | full reporting period | all production lines, storage tanks, and residue destinations | sum by flow and destination; correct only with measured moisture, density, and stock data | scale or tank calibration; dispatch reconciliation; laboratory result; mass-balance review |
| `cp_effluent_emissions` | `mill_energy_residue_management` | effluent, treatment, final waste, and direct emissions | flow meter, sampling result, fuel record, treatment log, waste manifest, emission monitoring record | flow or mass; sampling time; concentration; detection limit; treatment technology; capture or flare operation; fuel quantity; factor identity; discharge compartment; waste destination | continuous or batch flow measurement plus representative sampling; direct emissions monitoring or calculation from collected activity data and cited factors | kg; m3; kg substance; operating hours | continuous or each batch with sampling at a documented representative frequency | full reporting period including shutdown and upset events | every treatment unit, discharge point, boiler, generator, flare, and final waste route | calculate pollutant load as measured flow times concentration; aggregate by compartment and event; retain zeros only when measurement supports them | meter calibration; laboratory QA/QC; chain of custody; factor citation; treatment and flare logs; waste manifests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = attributable reporting-period amount / reporting-period mass of conforming crude palm oil output | attributable amount; crude palm oil output mass; stock adjustments | amount per 1 kg crude palm oil | `eu-jrc-ilcd-handbook-2010` |
| `calc_oil_extraction_ratio` | fresh fruit bunch input and crude palm oil output | oil extraction ratio = conforming crude palm oil output mass / accepted fresh fruit bunch input mass | `crude_palm_oil_output`; `fresh_fruit_bunch_input` | kg crude palm oil/kg accepted fresh fruit bunches | `fao-palm-oil-processing-2002` |
| `calc_material_balance` | each process and total foreground system | balance closure = (accounted outputs + closing stock - opening stock) / accounted inputs; report the balance gap without forcing closure by an undocumented residual | measured inputs; outputs; internal transfers; stocks | balance closure and unexplained mass gap | `eu-jrc-ilcd-handbook-2010` |
| `calc_pollutant_load` | treated effluent and sampled releases | pollutant load = measured discharge mass or volume times measured concentration, with unit conversion and below-detection treatment documented | discharge flow; concentration; density if needed; sampling coverage | kg substance per reporting period and per kg crude palm oil | `eu-jrc-ilcd-handbook-2010` |
| `calc_factor_emissions` | non-measured boiler or treatment emissions | emission = collected activity datum times a cited, technology- and region-appropriate factor; factor identity, version, unit, and applicability are mandatory | fuel or treatment activity; factor; capture or oxidation data | kg elementary flow per kg crude palm oil | `eu-jrc-ilcd-handbook-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | fruit, oil, co-products, and residues | Preserve origin, destination, reporting period, process route, quality state, and the link between raw records and each normalized row. | weighbridge tickets; dispatch records; process logs; record-to-row traceability table |
| `dq_temporal_coverage` | all foreground data | Cover one complete, declared reporting period, normally 12 consecutive months; a shorter campaign is allowed only when seasonality, startup, shutdown, maintenance, and representativeness are explicitly assessed. | dated meter series; production calendar; downtime and maintenance logs; representativeness justification |
| `dq_measurement_control` | mass, water, energy, effluent, and laboratory data | Use calibrated instruments or document the engineering calculation and uncertainty; retain calibration status, sampling method, detection limits, and corrections. | calibration certificates; laboratory QA/QC; meter and sampling procedures |
| `dq_completeness` | all required processes and important flows | Include every required process and all material product, waste, energy, water, and elementary flows; quantify or explicitly disclose gaps rather than assigning unsupported zeros. | completeness checklist; mass and energy reconciliation; gap register |
| `dq_representativeness` | upstream datasets and foreground factors | Document time, geography, technology, and supplier coverage and justify any proxy dataset or factor. | dataset metadata; supplier coverage table; factor citation and applicability review |
| `dq_allocation_review` | multifunctional processes | Preserve direct assignments, selected allocation relationship, period data, shares, and sensitivity results sufficient for an independent recalculation. | allocation worksheet; prices or physical relationship data; sensitivity calculation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow_identity` | reference flow | Confirm the product flow UUID is `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`, the flow property UUID is `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group UUID is `93a60a57-a4c8-11da-a746-0800200c9a66`, the reference amount is 1, and the reference unit is kg. |  |
| `validate_scope_and_qualifiers` | dataset identity | Confirm the dataset represents unrefined crude palm oil at the producing mill gate and declares every required qualifier; reject refined, fractionated, or palm-kernel-oil outputs as this PCR's reference product. | `fao-palm-oil-processing-2002` |
| `validate_process_completeness` | process inventory | Confirm all three required processes are present and that fresh fruit bunches, process water, energy, crude palm oil, kernels, residues, effluent, direct emissions, final treatment, and stock changes are recorded or supported by an explicit, reviewed non-applicability statement. | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `validate_mass_balance_and_yield` | material inventory | Recalculate the extraction ratio and process or system mass balances. Values outside a cited or provisional QA guardrail trigger investigation, not automatic replacement; unresolved material gaps make validation inconclusive. | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `validate_energy_effluent_emissions` | utilities and environmental flows | Reconcile purchased and internally generated energy, verify effluent route and sampled loads, and confirm that boiler and anaerobic-treatment emissions are measured or calculated from collected activity data with cited factors; unsupported zero emissions are errors. | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `validate_allocation_recalculation` | co-products | Recalculate allocation shares from retained foreground data, confirm internal transfers receive no avoided-product credit, and verify the selected method and sensitivity case are disclosed. | `eu-jrc-ilcd-handbook-2010` |
| `validate_data_quality` | complete foreground package | Confirm calibration, temporal coverage, origin and destination traceability, representativeness, gap disclosure, and raw-record-to-row lineage; missing evidence produces a finding and may make validation inconclusive. | `eu-jrc-ilcd-handbook-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process or aggregated mill-gate dataset for crude palm oil production |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Attributional LCI and LCA models requiring unrefined crude palm oil at a declared producing mill gate, provided geography, technology, fruit origin, quality state, allocation, energy, and effluent-treatment qualifiers match the study |
| excluded_use | Direct representation of refined or fractionated palm oil, palm kernel oil, cultivation-only systems, generic markets without geography and time qualification, or comparative claims lacking compatible scope and critical review |
| required_metadata | PCR id and version; reference flow UUID and unit; geography; reporting period; mill route and scale; fruit origin and upstream dataset links; oil quality basis; process coverage; energy configuration; effluent and residue routes; allocation method and shares; source and factor identities; completeness and uncertainty statements |
| required_quality_disclosure | Primary-data share; instrument and sampling coverage; mass and energy balance gaps; temporal, geographical, and technological representativeness; proxy data and emission factors; provisional QA guardrail findings; unresolved non-reference UUIDs; allocation sensitivity |
| update_trigger | Material change in fruit supply, mill technology or capacity, oil quality basis, energy system, methane capture, effluent or residue treatment, co-product destination or value, allocation method, regulatory requirements, or evidence showing the dataset is no longer representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-palm-oil-processing-2002` | official_guidance | Food and Agriculture Organization of the United Nations, *Small-Scale Palm Oil Processing in Africa*, FAO Agricultural Services Bulletin 148, ISBN 92-5-104859-2, 2002, https://www.fao.org/4/y4355e/y4355e00.htm (retrieved 2026-08-11) | Palm-oil mill unit operations; separation of crude palm oil production from refining and kernel-oil extraction; source-backed extraction-yield QA range; moisture and residue context; energy, solid-residue, and effluent route identification |
| `eu-jrc-ilcd-handbook-2010` | official_guidance | European Commission Joint Research Centre, *International Reference Life Cycle Data System (ILCD) Handbook - General guide for Life Cycle Assessment - Detailed guidance*, EUR 24708 EN, ISBN 978-92-79-19092-6, DOI 10.2788/38479, 2010, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf (retrieved 2026-08-11) | Functional unit and reference-flow consistency; boundary completeness; foreground primary data and quality requirements; multifunctionality hierarchy, subdivision, physical relationships, residual allocation, and sensitivity disclosure |
