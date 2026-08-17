---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cinnamon-canella-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cinnamon (canella), processed

## 1. Scope and Applicability

This PCR defines foreground data-production rules for dried, cleaned, graded whole `Cinnamomum cassia` bark sticks delivered in bulk cartons at the processing-facility gate. The locked representative route receives freshly peeled inner bark, uses dry cleaning, electrically heated forced-air drying at 45 °C, grading and cutting without grinding, and ambient dry storage. It does not average whole-bark and powder routes.

Ground cinnamon, bark powder, chips intended for milling or oil extraction, essential oil, extracts, compound quills made from another declared species, cultivation, stem harvesting, bark peeling, steam sterilization, fumigation, irradiation, fuel-fired drying, wet bark washing, refrigerated storage, retail packaging, and downstream transport are outside this locked route. A foreground package containing an excluded operation requires a separately declared route-specific dataset and shall not be averaged into this one.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cinnamon-canella-processed |
| classification_refs | CPC 3.0: 23925 — Cinnamon (canella), processed |
| covered_products | Dried, cleaned, graded whole `Cinnamomum cassia` bark sticks retaining recognizable bark form and sold as food spice in bulk cartons. |
| excluded_products | Powder, ground cinnamon, chips for milling or extraction, bark oil, extracts, mixed-species products, composite Ceylon quills, wet or undried bark, and retail-ready packs. |
| representative_product | Whole cassia bark sticks, moisture content at or below 14% wet basis, bulk packed in corrugated fibreboard cartons with polypropylene liners. |
| production_route | Freshly peeled inner bark receipt; dry cleaning; 45 °C electrically heated forced-air drying; grading and cutting; bulk packaging; ambient dry storage; gate release. |
| market_state | Food-grade, dry, intact bark sticks; declared species, origin, grade, stick length, moisture result, batch, packaging configuration, and no-grinding status. |

## 3. Reference Flow

### Functional Unit

| Field | Value |
| --- | --- |
| What | Provision of dried, cleaned, graded whole `Cinnamomum cassia` bark sticks at the processing-facility gate. |
| How much | 1 kg net product mass. |
| How well | Moisture content ≤14% wet basis; recognizable whole bark form; declared species, origin, grade, stick length, batch, packaging, and no-grinding status; conforms to applicable food-safety specifications. |
| How long or cycle | One production batch, normalized to 1 kg gate product. |
| reference_flow_link | `reference_whole_cinnamon_bark` |

### Tiangong Reference Flow Object

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cinnamon (canella), processed `3955425f-128e-48d4-b46e-04bf9ee70c22` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species=`Cinnamomum cassia`; product_form=`whole_bark_sticks`; drying_route=`electric_forced_air_45C`; moisture_basis=`wet_basis`; moisture_percent; grade; stick_length_mm; origin; batch_id; packaging=`corrugated_carton_with_pp_liner`; grinding=`none` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all material or waste mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize net output and all mass flows to 1 kg reference product; retain unrounded batch totals. |
| `moisture_wet_basis` | Incoming and dried bark | Mass fraction | % wet basis | Calculate `moisture_percent = 100 * water_mass / wet_sample_mass`; do not mix wet-basis and dry-basis results. |
| `electricity_metering` | Dryer, grader, packer, sanitation, and ambient-store electricity | Electrical energy | kWh | Record submetered kWh by unit operation; allocate only shared metered use using documented operating time or throughput. |
| `packaging_net_mass` | Carton, polypropylene liner, label, and strapping | Mass | kg | Record each packaging material separately from invoice mass, item count multiplied by measured item mass, or issue records. |
| `wastewater_mass` | Sanitation wastewater | Mass or volume | kg or m3 | Preserve measured unit and density assumption; do not combine wastewater with elementary emissions to water. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `fresh_peeled_inner_bark_received` |
| starting_condition_role | First foreground-controlled state: freshly peeled `Cinnamomum cassia` inner bark delivered to the processing facility before dry cleaning. |
| product_classification_scope | CPC 3.0 23925 represented only by the locked whole-bark-stick route. |
| recursive_input_rule | Any purchased processed cinnamon input already in CPC 23925 shall be recorded as a separate same-category product input with supplier dataset and form qualifier; it cannot be relabelled as fresh peeled bark or blended into foreground yield. |
| upstream_dataset_requirement | Supplier dataset or disclosure for cultivation, harvesting, peeling, origin, species, incoming moisture, and delivered fresh-bark mass. |
| disclosure | Declare species, origin, incoming and final moisture, dryer set point, rejected bark, dust controls, sanitation method, packaging masses, storage conditions, and every deviation from the locked route. |

### Normative Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_locked_product_form` | Entire dataset | Include only whole bark sticks. Powder, grinding, chips for extraction, and oil production are outside the dataset and shall not be averaged with it. | `unido-postharvest-spices-2006`; `arifin-et-al-2021-koerintji` |
| `boundary_same_day_drying` | Receipt and drying | Minimize elapsed time between receipt and drying; record any hold and disposition of mould-affected bark. | `codex-cxc-78-2017` |
| `boundary_no_route_substitution` | Drying and post-treatment | The representative route is electrically heated forced-air drying at 45 °C with no steam, fuel combustion, irradiation, fumigation, refrigeration, or wet bark washing. Presence of any excluded operation requires a separate route-specific dataset. | `li-et-al-2024-cassia-drying`; `codex-cxc-78-2017` |
| `boundary_supporting_operations` | Facility operations | Include batch-attributable sanitation, packaging, ambient dry storage, wastewater, solid waste, and direct releases. | `codex-cxc-1-1969`; `unido-postharvest-spices-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bark_receipt_and_dry_cleaning` | Bark receipt and dry cleaning | required | Always included. | Verify incoming identity and remove foreign matter and nonconforming bark without wet washing. | kg accepted fresh peeled bark |
| `electric_hot_air_drying` | 45 °C electric hot-air drying | required | Always included for the locked route. | Reduce bark moisture while retaining whole bark form. | kg dried bark |
| `grading_and_stick_cutting` | Grading and stick cutting | required | Always included. | Grade intact bark and cut to declared stick length without milling. | kg graded whole bark sticks |
| `bulk_carton_packaging` | Bulk carton packaging | required | Always included. | Pack whole sticks in corrugated cartons with PP liners and identify the batch. | kg net packed product |
| `ambient_dry_storage` | Ambient dry storage and gate release | required | Always included; mechanical refrigeration is prohibited in the locked route. | Maintain dry, pest-protected product and release the reference flow. | kg reference product |
| `facility_sanitation` | Facility and equipment sanitation | conditional | Include attributable sanitation performed for the batch or allocated reporting period; wet bark washing remains excluded. | Sanitation support for the locked route. | kg reference product |

### Process: Bark receipt and dry cleaning (`bark_receipt_and_dry_cleaning`)

#### Inputs

##### Product flows

###### Fresh peeled cassia inner bark (`fresh_peeled_cassia_bark_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `fresh_peeled_cassia_inner_bark`
- Selected flow: `fresh_peeled_cassia_inner_bark`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `measured_received_wet_mass_per_batch`
- Unit: kg
- Amount: Measured wet mass received before rejection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bark_mass_moisture`
- Quality evidence: `calibrated_receiving_scale_delivery_record_species_origin_and_moisture_sample`
- Range: Provisional fresh-bark input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.1
  - Upper: 3.0
  - Unit: kg/kg reference product
  - Basis: broad initial range before site yield evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste flow enters this process.

##### Elementary flows

No elementary flow enters this process.

#### Outputs

##### Product flows

###### Accepted cleaned bark (`accepted_cleaned_bark_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `accepted_dry_cleaned_cassia_bark`
- Selected flow: `accepted_dry_cleaned_cassia_bark`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `received_mass_minus_separately_weighed_rejects`
- Unit: kg
- Amount: `accepted_cleaned_bark_kg = fresh_peeled_cassia_bark_input_kg - foreign_matter_kg - mould_damaged_bark_kg`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per received batch, then per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bark_mass_moisture`
- Quality evidence: `signed_batch_mass_balance`

##### Waste flows

###### Removed foreign matter (`removed_foreign_matter_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `foreign_matter_from_bark_dry_cleaning`
- Selected flow: `foreign_matter_from_bark_dry_cleaning`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_removed_material`
- Unit: kg
- Amount: Measured stones, soil, plant debris, string, plastic, and other foreign matter; keep disposal fates separate in raw records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted cleaned bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_solid_waste_dust`
- Quality evidence: `labelled_waste_container_scale_ticket_and_fate_record`

###### Mould-damaged or nonconforming bark (`mould_damaged_bark_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `mould_damaged_or_nonconforming_cassia_bark`
- Selected flow: `mould_damaged_or_nonconforming_cassia_bark`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_rejected_bark`
- Unit: kg
- Amount: Measured rejected bark; record treatment or disposal and prohibit return to product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted cleaned bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_solid_waste_dust`
- Quality evidence: `rejection_log_scale_ticket_and_disposition_record`
- Sources: `codex-cxc-78-2017`

##### Elementary flows

###### Fugitive bark dust to air (`receipt_bark_dust_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `cinnamon_bark_dust_to_air_at_receipt`
- Selected flow: `cinnamon_bark_dust_to_air_at_receipt`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `measured_or_mass_balance_uncontrolled_dust_release`
- Unit: kg
- Amount: Measured release or `generated_dust_kg - collected_dust_kg`; do not use a negative result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted cleaned bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject_solid_waste_dust`
- Quality evidence: `dust_collection_mass_and_control_device_operating_record`
- Range: Provisional fugitive-dust screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg accepted cleaned bark
  - Basis: broad initial range pending site measurements
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: 45 °C electric hot-air drying (`electric_hot_air_drying`)

#### Inputs

##### Product flows

###### Accepted cleaned bark input (`accepted_cleaned_bark_input_to_dryer`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `accepted_dry_cleaned_cassia_bark`
- Selected flow: `accepted_dry_cleaned_cassia_bark`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `measured_dryer_charge_mass`
- Unit: kg
- Amount: Measured bark charged to the dryer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per dryer batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bark_mass_moisture`
- Quality evidence: `dryer_charge_scale_record_and_batch_link`

###### Electricity for resistive heating (`dryer_heater_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `grid_electricity_for_resistive_dryer_heating`
- Selected flow: `grid_electricity_for_resistive_dryer_heating`
- Flow property / unit: Electrical energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `dedicated_electricity_meter`
- Unit: kWh
- Amount: Metered electricity used by heating elements during the batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_electricity`
- Quality evidence: `calibrated_submeter_start_end_readings_and_batch_time`
- Range: Provisional heater-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.2
  - Upper: 5.0
  - Unit: kWh/kg dried bark
  - Basis: broad initial electric heating range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for fans and controls (`dryer_fan_control_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `grid_electricity_for_dryer_fans_and_controls`
- Selected flow: `grid_electricity_for_dryer_fans_and_controls`
- Flow property / unit: Electrical energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `dedicated_or_panel_submeter`
- Unit: kWh
- Amount: Metered fan, conveyor, sensor, and control electricity excluding heater electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_electricity`
- Quality evidence: `submeter_or_power_runtime_record_reconciled_to_site_bill`
- Range: Provisional fan-and-control electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 1.0
  - Unit: kWh/kg dried bark
  - Basis: broad initial auxiliary electricity range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste flow enters this process.

##### Elementary flows

No elementary flow enters this process. Steam, hot water, fuels, and refrigerants are prohibited for the locked dryer route.

#### Outputs

##### Product flows

###### Dried whole bark (`dried_whole_bark_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `dried_whole_cassia_bark_before_grading`
- Selected flow: `dried_whole_cassia_bark_before_grading`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `measured_dryer_discharge_mass_and_final_moisture`
- Unit: kg
- Amount: Measured discharge mass after reaching moisture content ≤14% wet basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per dryer batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bark_mass_moisture`
- Quality evidence: `calibrated_discharge_scale_moisture_test_temperature_time_log`
- Sources: `sri-lanka-cinnamon-postharvest`; `li-et-al-2024-cassia-drying`

##### Waste flows

No waste output is expected; separately record any scorched or contaminated bark under `mould_damaged_bark_waste` with a drying-stage tag.

##### Elementary flows

###### Water evaporated from bark to air (`bark_water_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `water_to_air_from_cinnamon_bark_drying`
- Selected flow: `water_to_air_from_cinnamon_bark_drying`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `wet_basis_moisture_mass_balance`
- Unit: kg
- Amount: `bark_water_to_air_kg = dryer_charge_kg * incoming_moisture_fraction - dried_bark_kg * final_moisture_fraction`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried bark
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_bark_mass_moisture`
- Quality evidence: `paired_mass_and_moisture_results_with_nonnegative_mass_balance`
- Sources: `mass-balance-identity`

### Process: Grading and stick cutting (`grading_and_stick_cutting`)

#### Inputs

##### Product flows

###### Dried bark input (`dried_bark_input_to_grading`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `dried_whole_cassia_bark_before_grading`
- Selected flow: `dried_whole_cassia_bark_before_grading`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `measured_grader_feed_mass`
- Unit: kg
- Amount: Measured dried bark entering grading and cutting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_cut_yield`
- Quality evidence: `batch_link_and_calibrated_feed_scale`

###### Electricity for grading and cutting (`grader_cutter_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `grid_electricity_for_grading_and_stick_cutting`
- Selected flow: `grid_electricity_for_grading_and_stick_cutting`
- Flow property / unit: Electrical energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `submeter_or_power_runtime`
- Unit: kWh
- Amount: Metered or power-times-runtime electricity for graders, conveyors, and cutters.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg graded whole bark sticks
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_electricity`
- Quality evidence: `submeter_or_nameplate_runtime_record_reconciled_to_operating_log`
- Range: Provisional grading-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kWh/kg graded whole bark sticks
  - Basis: broad initial grading and cutting range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste flow enters this process.

##### Elementary flows

No elementary flow enters this process.

#### Outputs

##### Product flows

###### Graded whole bark sticks (`graded_whole_bark_sticks`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `graded_whole_cassia_bark_sticks`
- Selected flow: `graded_whole_cassia_bark_sticks`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `measured_accepted_grade_mass`
- Unit: kg
- Amount: Measured accepted whole-stick mass meeting declared grade and length; no powder fraction is included.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_cut_yield`
- Quality evidence: `grade_sheet_length_check_no_grinding_declaration_and_scale_record`
- Sources: `arifin-et-al-2021-koerintji`

##### Waste flows

###### Bark trimming residue (`bark_trimming_residue_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `cinnamon_bark_trimming_residue_not_sold`
- Selected flow: `cinnamon_bark_trimming_residue_not_sold`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_trim_mass`
- Unit: kg
- Amount: Measured non-saleable trims. If sold, model a separate co-product and apply the allocation rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg graded whole bark sticks
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_solid_waste_dust`
- Quality evidence: `labelled_trim_container_scale_ticket_and_fate_record`
- Range: Mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg dried bark input
  - Basis: trimming residue fraction of grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Collected bark dust (`collected_bark_dust_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `collected_cinnamon_bark_dust`
- Selected flow: `collected_cinnamon_bark_dust`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `weighed_dust_collection_container`
- Unit: kg
- Amount: Measured captured dust from grading and cutting; never include it in whole-stick product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg graded whole bark sticks
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_solid_waste_dust`
- Quality evidence: `dust_container_tare_gross_mass_and_disposition_record`

##### Elementary flows

###### Fugitive grading dust to air (`grading_bark_dust_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `cinnamon_bark_dust_to_air_from_grading`
- Selected flow: `cinnamon_bark_dust_to_air_from_grading`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `measured_or_generated_minus_collected_dust`
- Unit: kg
- Amount: Measured release or documented dust mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg graded whole bark sticks
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject_solid_waste_dust`
- Quality evidence: `dust_control_inspection_collection_mass_and_nonnegative_balance`
- Range: Provisional fugitive-dust screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg graded whole bark sticks
  - Basis: broad initial range pending site measurements
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Bulk carton packaging (`bulk_carton_packaging`)

#### Inputs

##### Product flows

###### Graded sticks entering packaging (`graded_sticks_input_to_packaging`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `graded_whole_cassia_bark_sticks`
- Selected flow: `graded_whole_cassia_bark_sticks`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `measured_net_product_mass_before_packaging`
- Unit: kg
- Amount: Measured graded-stick mass charged to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Quality evidence: `calibrated_net_scale_and_batch_link`

###### Corrugated fibreboard cartons (`corrugated_carton_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `corrugated_fibreboard_carton`
- Selected flow: `corrugated_fibreboard_carton`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `carton_count_times_measured_unit_mass`
- Unit: kg
- Amount: Carton count multiplied by verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_mass`
- Quality evidence: `purchase_record_item_count_and_unit_mass_sample`
- Range: Provisional carton-mass screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 0.30
  - Unit: kg/kg net packed product
  - Basis: broad bulk-carton estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `unido-postharvest-spices-2006`

###### Polypropylene carton liners (`polypropylene_liner_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `food_grade_polypropylene_carton_liner`
- Selected flow: `food_grade_polypropylene_carton_liner`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `liner_count_times_measured_unit_mass`
- Unit: kg
- Amount: Liner count multiplied by verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_mass`
- Quality evidence: `supplier_specification_item_count_and_unit_mass_sample`
- Range: Provisional PP-liner screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.05
  - Unit: kg/kg net packed product
  - Basis: broad bulk-liner estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `unido-postharvest-spices-2006`

###### Paper batch labels (`paper_batch_label_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `paper_batch_label`
- Selected flow: `paper_batch_label`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `label_count_times_measured_unit_mass`
- Unit: kg
- Amount: Label count multiplied by verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_mass`
- Quality evidence: `label_issue_record_and_unit_mass_sample`
- Sources: `unido-postharvest-spices-2006`

###### Polypropylene carton strapping (`polypropylene_strap_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `polypropylene_carton_strap`
- Selected flow: `polypropylene_carton_strap`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `issued_length_times_measured_linear_density`
- Unit: kg
- Amount: Issued strap length multiplied by verified linear density.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_mass`
- Quality evidence: `strap_issue_record_length_and_linear_density_test`

###### Electricity for carton forming and sealing (`packaging_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `grid_electricity_for_carton_forming_and_sealing`
- Selected flow: `grid_electricity_for_carton_forming_and_sealing`
- Flow property / unit: Electrical energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `submeter_or_power_runtime`
- Unit: kWh
- Amount: Metered or power-times-runtime packaging equipment electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_electricity`
- Quality evidence: `submeter_or_nameplate_runtime_record`

##### Waste flows

No waste flow enters this process.

##### Elementary flows

No elementary flow enters this process.

#### Outputs

##### Product flows

###### Packed whole cinnamon bark (`packed_whole_bark_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `bulk_packed_whole_cassia_bark_sticks`
- Selected flow: `bulk_packed_whole_cassia_bark_sticks`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `net_mass_gross_minus_tare`
- Unit: kg
- Amount: Gross packed mass minus separately verified packaging tare.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_mass`
- Quality evidence: `gross_tare_net_reconciliation_and_batch_label_check`

##### Waste flows

###### Corrugated carton offcuts (`corrugated_carton_offcut_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `corrugated_fibreboard_carton_offcuts`
- Selected flow: `corrugated_fibreboard_carton_offcuts`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_offcuts`
- Unit: kg
- Amount: Measured corrugated offcuts and damaged cartons.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Quality evidence: `material_specific_bin_scale_ticket_and_fate_record`

###### Polypropylene liner offcuts (`polypropylene_liner_offcut_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `polypropylene_liner_offcuts`
- Selected flow: `polypropylene_liner_offcuts`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_offcuts`
- Unit: kg
- Amount: Measured rejected liners and liner offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Quality evidence: `material_specific_bin_scale_ticket_and_fate_record`

###### Paper label release-liner waste (`paper_label_release_liner_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `silicone_coated_paper_label_release_liner`
- Selected flow: `silicone_coated_paper_label_release_liner`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_release_liners`
- Unit: kg
- Amount: Measured release-liner waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Quality evidence: `material_specific_bin_scale_ticket_and_fate_record`

###### Polypropylene strap offcuts (`polypropylene_strap_offcut_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `polypropylene_strap_offcuts`
- Selected flow: `polypropylene_strap_offcuts`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_offcuts`
- Unit: kg
- Amount: Measured strap offcuts and rejected straps.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Quality evidence: `material_specific_bin_scale_ticket_and_fate_record`

##### Elementary flows

No direct elementary output is expected from packaging; record measured releases as separate atomic rows if discovered.

### Process: Ambient dry storage and gate release (`ambient_dry_storage`)

#### Inputs

##### Product flows

###### Packed bark entering ambient storage (`packed_bark_input_to_storage`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `bulk_packed_whole_cassia_bark_sticks`
- Selected flow: `bulk_packed_whole_cassia_bark_sticks`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `measured_net_mass_entering_storage`
- Unit: kg
- Amount: Net packed product mass placed in ambient dry storage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage lot
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ambient_storage_release`
- Quality evidence: `warehouse_receipt_batch_location_and_net_mass_record`

###### Electricity for ventilation and lighting (`ambient_storage_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `grid_electricity_for_ambient_store_ventilation_and_lighting`
- Selected flow: `grid_electricity_for_ambient_store_ventilation_and_lighting`
- Flow property / unit: Electrical energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `warehouse_submeter_allocated_by_mass_time`
- Unit: kWh
- Amount: Metered ambient-store electricity allocated by `kg_product * storage_days`; no refrigeration load is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_storage_release`
- Quality evidence: `warehouse_submeter_inventory_days_and_allocation_sheet`
- Range: Provisional ambient-storage electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kWh/kg reference product
  - Basis: broad ambient storage range for the declared storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste flow enters this process.

##### Elementary flows

No elementary input is permitted. Refrigerants `R-134a`, `R-410A`, `R-32`, ammonia, carbon dioxide, propane, and all other refrigerants are absent from the locked ambient-storage route; any refrigerant use requires a separate dataset.

#### Outputs

##### Product flows

###### Reference whole cinnamon bark (`reference_whole_cinnamon_bark`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `Cinnamon (canella), processed`
- Selected flow: Cinnamon (canella), processed `3955425f-128e-48d4-b46e-04bf9ee70c22`
- Flow property / unit: Mass / kg
- Flow UUID: `3955425f-128e-48d4-b46e-04bf9ee70c22`
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `released_net_mass_at_facility_gate`
- Unit: kg
- Amount: 1 kg net released product meeting every required qualifier.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_ambient_storage_release`
- Quality evidence: `release_scale_certificate_of_analysis_batch_label_and_route_conformance_check`

##### Waste flows

No default waste output is expected; storage-damaged cartons, liners, or bark must use the matching material-specific waste row with a storage-stage tag.

##### Elementary flows

No default elementary output is expected because the locked route uses ambient, non-refrigerated storage.

### Process: Facility and equipment sanitation (`facility_sanitation`)

#### Inputs

##### Product flows

###### Cold potable sanitation water (`cold_sanitation_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `potable_water_for_floor_and_equipment_sanitation`
- Selected flow: `potable_water_for_floor_and_equipment_sanitation`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `water_submeter_or_tank_volume`
- Unit: kg
- Amount: Measured cold water used for facility and equipment sanitation; never report as bark-washing water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product using documented batch allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Quality evidence: `water_meter_start_end_readings_and_sanitation_log`
- Range: Provisional sanitation-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg reference product
  - Basis: broad initial facility sanitation range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `codex-cxc-1-1969`

###### Hot potable sanitation water (`hot_sanitation_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `hot_potable_water_for_equipment_sanitation`
- Selected flow: `hot_potable_water_for_equipment_sanitation`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `hot_water_submeter_or_tank_volume`
- Unit: kg
- Amount: Measured hot water supplied to sanitation; record supply temperature and upstream utility dataset separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product using documented batch allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Quality evidence: `hot_water_meter_temperature_and_sanitation_log`
- Sources: `codex-cxc-1-1969`

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_cleaner`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `sodium_hydroxide_cleaning_agent_as_supplied`
- Selected flow: `sodium_hydroxide_cleaning_agent_as_supplied`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `issued_product_mass_and_active_concentration`
- Unit: kg
- Amount: Measured formulated cleaner mass and declared NaOH concentration; record only when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product using documented batch allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Quality evidence: `chemical_issue_log_supplier_sds_concentration_and_dosing_record`

###### Sodium hypochlorite sanitizer (`sodium_hypochlorite_sanitizer`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `sodium_hypochlorite_sanitizer_as_supplied`
- Selected flow: `sodium_hypochlorite_sanitizer_as_supplied`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `issued_product_mass_and_available_chlorine_concentration`
- Unit: kg
- Amount: Measured formulated sanitizer mass and declared available-chlorine concentration; record only when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product using documented batch allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Quality evidence: `chemical_issue_log_supplier_sds_concentration_and_dosing_record`

###### Electricity for sanitation equipment (`sanitation_equipment_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `grid_electricity_for_sanitation_equipment`
- Selected flow: `grid_electricity_for_sanitation_equipment`
- Flow property / unit: Electrical energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `submeter_or_power_runtime`
- Unit: kWh
- Amount: Metered or power-times-runtime electricity for pumps, vacuum cleaners, and cleaning equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product using documented batch allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_electricity`
- Quality evidence: `submeter_or_nameplate_runtime_and_sanitation_log`

##### Waste flows

No waste flow enters this process.

##### Elementary flows

No elementary flow enters this process. Steam and fuels are absent; purchased hot water is the only thermal sanitation utility in this locked route.

#### Outputs

##### Product flows

No product output is created by sanitation.

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `facility_sanitation_wastewater_to_treatment`
- Selected flow: `facility_sanitation_wastewater_to_treatment`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `effluent_meter_or_input_minus_retained_water_balance`
- Unit: kg
- Amount: Measured wastewater transferred to treatment; exclude separately measured direct emissions to water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product using documented batch allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_water_emissions`
- Quality evidence: `effluent_meter_treatment_manifest_and_sampling_record`
- Range: Provisional wastewater screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg reference product
  - Basis: broad initial sanitation wastewater range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dry sanitation sweepings (`dry_sanitation_sweepings_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `dry_sanitation_sweepings_from_cinnamon_processing`
- Selected flow: `dry_sanitation_sweepings_from_cinnamon_processing`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `separately_weighed_sweepings`
- Unit: kg
- Amount: Measured dry sweepings from floors and equipment, kept separate from bark trim and captured dust.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product using documented batch allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_solid_waste_dust`
- Quality evidence: `labelled_sweepings_container_scale_ticket_and_fate_record`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `chemical_oxygen_demand_to_water_from_direct_discharge`
- Selected flow: `chemical_oxygen_demand_to_water_from_direct_discharge`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `discharge_volume_times_laboratory_concentration`
- Unit: kg
- Amount: `cod_to_water_kg = direct_discharge_m3 * cod_mg_per_L / 1000`; zero when all wastewater is transferred to treatment without direct discharge.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_water_emissions`
- Quality evidence: `accredited_laboratory_result_discharge_meter_and_sampling_chain_of_custody`

###### Biochemical oxygen demand to water (`bod5_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `biochemical_oxygen_demand_5d_to_water_from_direct_discharge`
- Selected flow: `biochemical_oxygen_demand_5d_to_water_from_direct_discharge`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `discharge_volume_times_laboratory_concentration`
- Unit: kg
- Amount: `bod5_to_water_kg = direct_discharge_m3 * bod5_mg_per_L / 1000`; zero when all wastewater is transferred to treatment without direct discharge.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_water_emissions`
- Quality evidence: `accredited_laboratory_result_discharge_meter_and_sampling_chain_of_custody`

###### Total suspended solids to water (`tss_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `total_suspended_solids_to_water_from_direct_discharge`
- Selected flow: `total_suspended_solids_to_water_from_direct_discharge`
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `discharge_volume_times_laboratory_concentration`
- Unit: kg
- Amount: `tss_to_water_kg = direct_discharge_m3 * tss_mg_per_L / 1000`; zero when all wastewater is transferred to treatment without direct discharge.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_water_emissions`
- Quality evidence: `accredited_laboratory_result_discharge_meter_and_sampling_chain_of_custody`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | All unit operations | Subdivide receiving, drying, grading, packaging, storage, and sanitation by batch or metered operation before allocation. | `iso-14044-2006` |
| `allocation_whole_vs_powder_prohibited` | Whole sticks and powder-capable residues | Never average burdens between whole bark sticks and powder, ground spice, milling feed, or extraction feed. | `boundary_locked_product_form` |
| `allocation_saleable_trim` | Saleable bark trims | Treat separately sold trim as a co-product with its own mass and destination. Prefer physical subdivision; if impossible, allocate shared grading burdens by dry mass and disclose price sensitivity. | `iso-14044-2006` |
| `allocation_waste_no_credit` | Rejects, dust, wastewater, and packaging offcuts | Treat as waste unless a documented purchaser and separate product specification establish a co-product. Do not apply avoided-burden credits inside this foreground dataset. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bark_mass_moisture` | `bark_receipt_and_dry_cleaning`; `electric_hot_air_drying` | bark masses, moisture, dryer charge and discharge | scale and laboratory records | `batch_id; timestamp; species; origin; wet_mass_kg; reject_mass_kg; sample_id; wet_sample_mass_g; dry_sample_mass_g; moisture_percent; dryer_setpoint_C; drying_time_h` | Calibrated scales and representative moisture sampling with declared method. | kg; g; % wet basis; °C; h | Every batch | Complete batch from receipt through dryer discharge | All lines producing the declared product | Sum masses by batch; calculate moisture only on one wet-basis convention; normalize after batch closure. | Calibration certificates, sample chain, test report, signed batch mass balance. |
| `cp_reject_solid_waste_dust` | `bark_receipt_and_dry_cleaning`; `grading_and_stick_cutting`; `facility_sanitation` | rejects, trims, captured dust, sweepings, fugitive dust | waste and control-device records | `batch_id; material_id; gross_kg; tare_kg; net_kg; stage; fate; generated_dust_kg; collected_dust_kg` | Tared material-specific containers and disposition records. | kg | Every batch or container change | Same reporting period as production | Entire facility with production-line attribution | Keep every material and fate separate; calculate fugitive dust as generated minus collected only when both are measured. | Scale checks, labelled containers, photographs or manifests, nonnegative balance. |
| `cp_operation_electricity` | `electric_hot_air_drying`; `grading_and_stick_cutting`; `bulk_carton_packaging`; `facility_sanitation` | atomic electricity rows | meter or runtime records | `meter_id; start_kWh; end_kWh; equipment_id; rated_kW; runtime_h; batch_id; operation` | Dedicated submeter preferred; otherwise verified power-times-runtime. | kWh | Every batch | Representative continuous 12-month period where available | Each named unit operation | Keep heater, fans/controls, grading/cutting, packaging, and sanitation electricity separate. | Meter calibration, photographs, runtime log, site-bill reconciliation. |
| `cp_grade_cut_yield` | `grading_and_stick_cutting` | feed, accepted sticks, trims, dust | scale and grade records | `batch_id; feed_kg; accepted_sticks_kg; trim_kg; dust_kg; grade; stick_length_mm; grinding_used` | Weigh each fraction and inspect declared whole-bark form. | kg; mm | Every batch | Complete grading batch | All graders and cutters | Require `feed_kg = accepted_sticks_kg + trim_kg + dust_kg + unexplained_loss_kg`; investigate unexplained loss. | Calibrated scale, grade sheet, length sample, `grinding_used=false`. |
| `cp_packaging_material_mass` | `bulk_carton_packaging` | product and each packaging material | issue, count, mass, and invoice records | `batch_id; net_product_kg; carton_count; carton_unit_kg; liner_count; liner_unit_kg; label_count; label_unit_kg; strap_length_m; strap_kg_per_m; gross_kg; tare_kg` | Count-times-unit-mass or direct weighing, by material. | kg; count; m | Every packaging batch | Same period as packed product | All packaging lines | Calculate each material independently; reconcile gross, tare, and net mass. | Supplier specification, unit-mass sample, scale record, batch label. |
| `cp_packaging_waste_mass` | `bulk_carton_packaging` | material-specific offcuts | waste records | `batch_id; waste_material_id; gross_kg; tare_kg; net_kg; fate` | Tared, material-specific waste containers. | kg | Every container change | Same period as packaging | All packaging lines | No combined packaging-waste row; aggregate only within the identical material id and fate. | Scale ticket, labelled bin, recycling or disposal receipt. |
| `cp_ambient_storage_release` | `ambient_dry_storage` | inventory days, electricity, and release | warehouse and meter records | `batch_id; entry_date; release_date; net_kg; storage_location; temperature_C; relative_humidity_percent; meter_start_kWh; meter_end_kWh; refrigeration_used; release_moisture_percent` | Warehouse management records, ambient logger, submeter, release test. | kg; day; °C; %; kWh | Each lot and monthly meter period | Entire declared storage duration | Ambient store areas holding the product | Allocate shared electricity by kg-day; require `refrigeration_used=false`. | Inventory reconciliation, logger data, meter record, release authorization. |
| `cp_sanitation_inputs` | `facility_sanitation` | cold water, hot water, NaOH cleaner, NaOCl sanitizer | meter and chemical issue records | `sanitation_event_id; batch_ids; cold_water_kg; hot_water_kg; hot_water_temperature_C; naoh_product_kg; naoh_concentration_percent; naocl_product_kg; available_chlorine_percent; area_m2; duration_h` | Utility meters and controlled chemical issue/dosing logs. | kg; °C; %; m2; h | Every sanitation event | Same period as attributable production | Named equipment and floor zones | Allocate by documented causal driver, preferably equipment time or cleaned area; never describe this water as bark washing. | Meter readings, sanitation sign-off, SDS, concentration checks. |
| `cp_wastewater_water_emissions` | `facility_sanitation` | wastewater and COD, BOD5, TSS direct emissions | effluent and laboratory records | `event_id; wastewater_kg; transferred_to_treatment_kg; direct_discharge_m3; cod_mg_per_L; bod5_mg_per_L; tss_mg_per_L; sample_id; destination` | Effluent meter or balance plus representative accredited sampling. | kg; m3; mg/L | Every discharge or representative campaign | Same period as sanitation | Each discharge destination | Keep wastewater-to-treatment separate from direct emissions; apply each concentration only to its matched direct-discharge volume. | Chain of custody, laboratory accreditation, meter calibration, treatment manifest. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_wet_basis` | Bark moisture | `moisture_percent = 100 * (wet_sample_mass_g - dry_sample_mass_g) / wet_sample_mass_g` | `wet_sample_mass_g; dry_sample_mass_g` | `moisture_percent` | `mass-balance-identity` |
| `calc_bark_water_to_air` | Drying | `bark_water_to_air_kg = dryer_charge_kg * incoming_moisture_fraction - dried_bark_kg * final_moisture_fraction` | `dryer_charge_kg; incoming_moisture_fraction; dried_bark_kg; final_moisture_fraction` | `bark_water_to_air_kg` | `mass-balance-identity` |
| `calc_grading_mass_balance` | Grading | `unexplained_loss_kg = feed_kg - accepted_sticks_kg - trim_kg - collected_dust_kg - fugitive_dust_kg` | named grading masses | `unexplained_loss_kg` | `mass-balance-identity` |
| `calc_packaging_material` | Each packaging input | `material_kg = item_count * measured_unit_mass_kg` or `strap_kg = strap_length_m * strap_kg_per_m` | counts, lengths, unit masses | material-specific kg | `mass-balance-identity` |
| `calc_storage_electricity` | Ambient store | `allocated_kWh = warehouse_kWh * batch_kg_days / total_warehouse_kg_days` | submeter kWh and inventory kg-days | batch storage kWh | `mass-balance-identity` |
| `calc_water_emission` | COD, BOD5, or TSS | `emission_kg = direct_discharge_m3 * concentration_mg_per_L / 1000` | matched volume and concentration | pollutant-specific kg | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | Entire package | Demonstrate `Cinnamomum cassia`, whole bark sticks, electric 45 °C forced-air drying, no grinding, and no excluded operation. | Supplier identity, batch route sheet, equipment log, product photographs, and release record. |
| `dq_temporal_coverage` | Energy, sanitation, waste, and storage | Prefer 12 consecutive representative months; if shorter, cover at least three complete batches and disclose seasonality. | Date-bounded raw records and production totals. |
| `dq_mass_balance` | Receipt, drying, grading, and packaging | Investigate absolute unexplained mass greater than 2% of input; moisture loss must be reported separately from solid loss. | Signed stage mass balances and moisture results. |
| `dq_atomic_flows_v1` | Entire inventory | One card per physical flow and role. Do not use collection placeholders such as energy, materials, chemicals, fuels, refrigerants, packaging, wastes, or emissions. | Row inventory and raw-field mapping. |
| `dq_uuid_scope` | Flow identities | Only `reference_whole_cinnamon_bark` may carry a flow UUID in this PCR; all other flow UUID fields remain empty pending independent identity review. | UUID audit and Tiangong state_code=100 readback evidence. |
| `dq_reasoned_estimates` | Provisional ranges | Never substitute a reasoned-estimate range for a foreground amount; retain it only as a QA screen and replace before publication where critical. | Finding log and source-upgrade record. |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require UUID `3955425f-128e-48d4-b46e-04bf9ee70c22`, name `Cinnamon (canella), processed`, CPC 3.0 `23925`, `Product flow`, and `Mass`. |  |
| `validate_locked_route` | Process map | Fail if grinding, powder output, fuel-fired drying, steam, fumigation, irradiation, refrigeration, wet bark washing, or another species/product form is averaged into the dataset. | `boundary_locked_product_form`; `boundary_no_route_substitution` |
| `validate_moisture_and_temperature` | Drying and release | Require dryer set point 45 °C and final moisture content ≤14% wet basis with batch-linked measurements. | `sri-lanka-cinnamon-postharvest`; `li-et-al-2024-cassia-drying`; `arifin-et-al-2021-koerintji` |
| `validate_process_completeness` | Inventory | Require all five production processes and attributable sanitation; every process, row, direction, flow type, basis, unit, protocol, and quality-evidence field must be populated. |  |
| `validate_atomic_flows_v1` | Inventory | Reject aggregate cards named energy, materials, chemicals, fuels, refrigerants, packaging, wastes, or emissions; preserve electricity uses, packaging materials, cleaning agents, wastewater, solid wastes, dust, and water emissions as atomic rows. |  |
| `validate_no_other_flow_uuid` | Inventory | Fail if any row other than `reference_whole_cinnamon_bark` contains a flow UUID. Flow-property and unit-group UUIDs in the reference object are not flow UUIDs. |  |
| `validate_mass_balance` | Receipt, drying, grading, packaging | Require nonnegative component masses and stage closure; investigate unexplained mass above 2% of stage input. | `mass-balance-identity` |
| `validate_food_safety_records` | Receipt, drying, storage, sanitation | Require mould rejection, same-day or justified drying, moisture control, pest-protected storage, sanitation records, and traceable batch labels. | `codex-cxc-78-2017`; `codex-cxc-1-1969`; `unido-postharvest-spices-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for bulk whole processed cinnamon bark. |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication. |
| allowed_use | LCA of foods or supply chains requiring dried whole `Cinnamomum cassia` bark sticks from the locked processing route. |
| excluded_use | Powder or ground cinnamon, oils or extracts, mixed species, composite quills, wet bark, fuel-fired or solar-only drying, sterilized or irradiated product, refrigerated product, retail packs, or cultivation and harvesting. |
| required_metadata | species; origin; batch; product_form; grade; stick_length_mm; incoming and final moisture; dryer set point and time; no-grinding status; packaging masses; storage days; reporting period; geography. |
| required_quality_disclosure | Source coverage; meter and scale calibration; sampling method; mass-balance closure; reasoned-estimate substitutions; waste fates; wastewater destination; excluded operations; allocation decisions. |
| update_trigger | Change in species, product form, dryer technology or heat source, moisture specification, sanitation route, packaging configuration, storage technology, co-product fate, or reference-flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-78-2017` | `official_guidance` | Codex Alimentarius, CXC 78-2017, Code of Practice for the Prevention and Reduction of Mycotoxins in Spices. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | Rapid drying, moisture control, dry cleaning, mould rejection, and protected storage. |
| `codex-cxc-1-1969` | `official_guidance` | Codex Alimentarius, CXC 1-1969, General Principles of Food Hygiene, revised 2022. https://www.fao.org/fao-who-codexalimentarius/publications/en/ | Sanitation, hygiene controls, records, and food-safety verification. |
| `unido-postharvest-spices-2006` | `handbook` | UNIDO, Herbs, Spices and Essential Oils: Post-harvest Operations in Developing Countries, 2006. https://www.unido.org/publications/ot/9656588/pdf | Process decomposition; cleaning; packaging; labelling; storage; separation of whole and ground routes. |
| `sri-lanka-cinnamon-postharvest` | `official_guidance` | Sri Lanka Department of Cinnamon Development, Post Harvest Technology. https://cinnamon.gov.lk/about-cinnamon/post-harvest-technology/ | Whole-bark handling, drying, ≤14% moisture endpoint, grading, and traceability qualifiers. |
| `li-et-al-2024-cassia-drying` | `literature` | Li et al., Evaluation of different drying methods on the quality of Cinnamomum cassia barks, Heliyon 10 (2024) e34608. https://doi.org/10.1016/j.heliyon.2024.e34608 | Cassia-specific drying process and 45 °C oven-drying route selection. |
| `arifin-et-al-2021-koerintji` | `literature` | Arifin et al., The Effect of Geographical Indications on the Koerintji Cinnamon Sales Price and Information of Origin, Agronomy 11 (2021) 1410. https://doi.org/10.3390/agronomy11071410 | Cassia bark drying to 10–14% moisture, grading, cutting, foreign-object removal, packaging, and whole-versus-powder separation. |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html | Allocation hierarchy, subdivision, and disclosure. |
| `mass-balance-identity` | `method_factor` | Conservation of mass applied to measured batch inputs, outputs, moisture, and pollutant concentration-volume calculations. | Moisture, yield, dust, packaging, storage, wastewater, and stage-closure formulas. |
