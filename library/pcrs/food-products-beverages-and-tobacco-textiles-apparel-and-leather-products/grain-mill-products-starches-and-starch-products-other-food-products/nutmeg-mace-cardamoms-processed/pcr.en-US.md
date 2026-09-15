---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.nutmeg-mace-cardamoms-processed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nutmeg, mace, cardamoms, processed

## 1. Scope and Applicability

This PCR instance covers one deliberately narrow route: food-grade ground nutmeg made only from the dried shelled seed of *Myristica fragrans* Houtt. The foreground begins with receipt of dried whole shelled nutmeg kernels and ends with steam-decontaminated, ground and sieved nutmeg powder packed in a 25 kg multiwall kraft-paper sack with an LDPE liner at the processor gate.

The route lock is `species=Myristica_fragrans_Houtt; product_form=ground_powdered_seed; microbial_reduction=saturated_steam_continuous; post_treatment_drying=electric_hot_air; package=25_kg_kraft_sack_with_ldpe_liner`. It does not average nutmeg with mace or cardamom, and it does not average whole, broken and powdered forms. Mace, cardamom, grains of paradise, whole or broken nutmeg sold as product, blends, essential oil, oleoresin, irradiation, fumigation, untreated powder, retail packs, and downstream distribution or use are excluded.

Inventory authoring follows `atomic_flows:v1`: every energy carrier, utility, material, packaging material, cleaning agent, wastewater, solid waste and direct emission is a separate flow card. Aggregate placeholders such as energy, materials, chemicals, fuels, refrigerants, packaging, wastes or emissions are prohibited.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.nutmeg-mace-cardamoms-processed |
| classification_refs | CPC 3.0: 23923, Nutmeg, mace, cardamoms, processed (exact) |
| covered_products | Ground/powdered seed obtained only from dried shelled *Myristica fragrans* Houtt. and produced by the locked saturated-steam, electric-drying and milling route |
| excluded_products | Mace; cardamom; grains of paradise; whole or broken nutmeg sold as product; mixed-species or mixed-form averages; blends; extracts; essential oils; oleoresins; irradiation, fumigation or untreated routes; retail packs |
| representative_product | Food-grade *Myristica fragrans* ground nutmeg powder in a 25 kg multiwall kraft-paper sack with LDPE liner |
| production_route | Dry receiving inspection and cleaning; continuous saturated-steam microbial reduction of whole kernels; electric hot-air redrying and ambient cooling; hammer milling and fine sieving; metal control; 25 kg lined-sack packing; routine dry sanitation |
| market_state | Ground/powdered, low-moisture, steam-decontaminated food ingredient at processor gate |
| route_lock | species=Myristica_fragrans_Houtt; product_form=ground_powdered_seed; microbial_reduction=saturated_steam_continuous; post_treatment_drying=electric_hot_air; package=25_kg_kraft_sack_with_ldpe_liner |
| inventory_contract | atomic_flows:v1 |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply food-grade ground nutmeg powder from *Myristica fragrans* Houtt. at the processor gate |
| How much | 1 kg net powder as delivered in the declared 25 kg lined sack |
| How well | Ground/powdered seed only; moisture <= 8.0% w/w; total ash <= 3.0% dry basis; acid-insoluble ash <= 0.5% dry basis; water-insoluble ash <= 1.5% dry basis; volatile oil >= 5.0 ml/100 g dry basis; no live insects; particle-size contract declared |
| How long or cycle | One released production lot; on-site holding through factory-gate dispatch only |
| reference_flow_link | rf_ground_nutmeg_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Nutmeg, mace, cardamoms, processed `55268cb7-f7b1-4d34-9c53-cc3f158b52d8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | `species=Myristica_fragrans_Houtt`; `product_form=ground_powdered_seed`; `microbial_reduction=saturated_steam_continuous`; `post_treatment_drying=electric_hot_air`; `package=25_kg_kraft_sack_with_ldpe_liner`; `moisture_wet_basis_percent`; `particle_size_spec`; `kernel_origin`; `production_geography`; `reference_period` |

The Tiangong reference flow is classification-broad. It is usable here only with every required qualifier above. A dataset missing `species` or `product_form`, or representing a weighted mean across nutmeg, mace, cardamom, whole seed, broken seed or powder, is non-conforming.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference nutmeg powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net as-delivered powder; retain measured moisture and do not silently convert the reference output to dry matter. |
| `dry_matter_conversion` | Kernel, intermediate and powder masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | `dry_mass_kg = as_delivered_mass_kg * (1 - moisture_percent_wet_basis / 100)`; retain both original mass and moisture result. |
| `steam_mass` | Purchased saturated steam | Mass | kg | Record purchased steam by condensate-corrected mass; do not merge steam with electricity or process water. |
| `electricity_energy` | Electricity | Energy | kWh | Record meter or invoice electricity in kWh and allocate shared meters only by documented equipment runtime and rated-load factors. |
| `packaging_mass` | Kraft paper and LDPE liner | Mass | kg | Record kraft paper and LDPE separately; calculate issued material from verified bag counts and component masses. |
| `emission_mass` | PM10, water vapour and ethanol direct releases | Mass | kg | Report each named substance separately after controls; concentration-to-mass calculations retain flow rate, duration, detection limit and control status. |

## 5. System Boundary

The foreground begins at the reporting facility's receipt of dried whole shelled *Myristica fragrans* kernels with an upstream dataset and ends at release of conforming packed ground powder at the same facility gate. Included operations are receiving inspection, dry sorting and foreign-matter control, continuous saturated-steam treatment, electric redrying and ambient cooling, hammer milling, sieving, dust collection, metal control, lined-sack packing, routine dry sanitation, conditional controlled wet cleaning, on-site wastewater collection before transfer, waste handling before transfer, and direct releases.

Agriculture, harvest, fruit opening, mace separation, primary seed drying, shell cracking, upstream transport before kernel receipt, downstream distribution, food use and packaging end-of-life are outside the foreground and require separate datasets when included in an LCA. No refrigeration and no fuel combustion occur in the locked foreground route. A facility using refrigerated cooling, a fuel-fired dryer, on-site steam generation, irradiation, fumigation or another microbial-reduction route must not average that route into this dataset.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of dried whole shelled *Myristica fragrans* Houtt. kernels with supplier, origin, lot, moisture, condition and upstream dataset declared |
| starting_condition_role | Upstream cut-in point; all locked-route operations after receipt are foreground |
| product_classification_scope | Ground/powdered nutmeg seed under this semantic route; CPC 3.0 code 23923 is classification context, not permission to mix species or forms |
| recursive_input_rule | Internal conforming powder rework remains an internal loop; purchased processed nutmeg powder is a separate input with its own upstream dataset and may not recursively replace dried-kernel input |
| upstream_dataset_requirement | Require traceable datasets for dried shelled kernels, electricity, purchased saturated steam, potable water, kraft paper, LDPE and ethanol disinfectant; disclose proxy geography, technology, age and omitted operations |
| disclosure | Declare the exact route_lock, all included processes, meter coverage, moisture basis, particle-size contract, packaging bill, sanitation events, waste destinations, direct releases, cut-offs and proxies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | Product and process scope | Include only the locked *Myristica fragrans* ground-powder route; reject aggregation with mace, cardamom, whole/broken nutmeg or another decontamination route. | `codex-cxs-352-2022` |
| `boundary_process_completeness` | Foreground operations | Include receiving/cleaning, steam treatment, electric redrying/cooling, milling/sieving, packing and dry sanitation; include controlled wet cleaning only for documented events meeting its gate. | `codex-cxs-352-2022`; `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`; `fda-spice-risk-profile-2017` |
| `boundary_atomic_inventory` | Inventory exchanges | Apply `atomic_flows:v1`; every carrier, material, cleaning agent, waste and direct emission is a separate row, and aggregate placeholders are invalid. |  |
| `boundary_post_lethality_hygiene` | After steam treatment | Keep post-treatment drying, grinding and packing areas dry and segregated; record material or utility consequences of controls and corrective sanitation. | `codex-cxc-75-2015` |
| `boundary_factory_gate` | Reference product | End at net conforming powder in the declared lined sack at the processor gate; downstream transport, use and end-of-life are excluded. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_cleaning` | Kernel receiving, inspection and dry cleaning | required | Always include | Remove damaged kernels and physical foreign matter before treatment | kg cleaned whole kernels |
| `steam_decontamination` | Continuous saturated-steam microbial reduction | required | Always include for route_lock | Validated pathogen-reduction treatment of whole kernels | kg steam-treated kernels |
| `electric_drying_cooling` | Electric hot-air redrying and ambient cooling | required | Always include after steam treatment | Restore safe moisture and temperature before milling | kg dried cooled kernels |
| `grinding_sieving` | Hammer milling, fine sieving and metal control | required | Always include | Produce contract particle size and control powder dust/metal | kg conforming loose powder |
| `packing` | 25 kg lined-sack filling and release | required | Always include | Pack and release the reference product | 1 kg net packed reference powder |
| `dry_sanitation` | Routine vacuum dry sanitation | required | Allocate documented routine sanitation to all represented lots | Remove powder residues without introducing water | kg conforming packed powder supported |
| `controlled_wet_cleaning` | Controlled wet cleaning and ethanol disinfection | conditional | Include only for a documented contamination/corrective-cleaning event attributable to represented production; never average a no-event period with an event route | Corrective sanitation with complete drying before restart | cleaning event |

### Process: Kernel receiving, inspection and dry cleaning (`receiving_cleaning`)

#### Inputs

##### Product flows

###### Dried shelled nutmeg kernels (`dried_nutmeg_kernels_input`)

Record only dried whole shelled *Myristica fragrans* kernels; mace and cardamom are prohibited.

- Flow name: Dried shelled nutmeg kernels, Myristica fragrans
- Selected flow: Dried shelled nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured net kernel input corrected for beginning and ending inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `scale_calibration; supplier_lot_certificate; moisture_test; inventory_reconciliation`
- Sources: `codex-cxs-352-2022`; `fao-herb-spice-quality-assurance`
- Range: Provisional kernel-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.25
  - Unit: kg/kg packed reference powder
  - Basis: broad mass-balance screen pending representative foreground lots
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Receiving and cleaning electricity (`receiving_cleaning_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: Metered electricity for intake conveyor, aspirator, sorter, magnets and dust collection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned whole kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `meter_calibration; equipment_runtime_log; allocation_workpaper`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: Provisional receiving-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1.0
  - Unit: kWh/kg cleaned whole kernels
  - Basis: broad screening interval pending submetered evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned whole nutmeg kernels (`cleaned_nutmeg_kernels_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Cleaned whole nutmeg kernels, Myristica fragrans
- Selected flow: Cleaned whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured kernels released to steam treatment after inventory correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving-cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `scale_calibration; inspection_release; batch_reconciliation`
- Sources: `codex-cxc-75-2015`

##### Waste flows

###### Rejected nutmeg kernels (`rejected_nutmeg_kernel_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Rejected nutmeg kernels
- Selected flow: Rejected nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed mouldy, insect-damaged or otherwise rejected kernels sent to declared waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned whole kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `waste_scale_record; rejection_log; destination_receipt`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: Provisional organic-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg dried kernel input
  - Basis: broad screen pending supplier-specific rejection records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated plant debris (`plant_debris_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Plant debris separated from nutmeg kernels
- Selected flow: Plant debris separated from nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed stems, leaves and other plant debris sent to declared waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried kernel input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `foreign_matter_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`

###### Separated stones (`stone_foreign_matter_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Stones separated from nutmeg kernels
- Selected flow: Stones separated from nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed stones sent to declared waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried kernel input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `foreign_matter_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`

###### Separated metal foreign matter (`metal_foreign_matter_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Metal foreign matter separated from nutmeg kernels
- Selected flow: Metal foreign matter separated from nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed ferrous and non-ferrous metal pieces sent to declared waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried kernel input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `foreign_matter_log; magnet_cleaning_log; metal_detector_reject_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`

###### Captured intake nutmeg dust (`receiving_captured_nutmeg_dust_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Captured nutmeg dust from receiving and cleaning
- Selected flow: Captured nutmeg dust from receiving and cleaning
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed dust removed from aspiration and filters and transferred as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cleaned whole kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `filter_change_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`

##### Elementary flows

###### PM10 released from receiving and cleaning (`receiving_pm10_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Particulate matter, aerodynamic diameter < 10 um, to air
- Selected flow: Particulate matter, aerodynamic diameter < 10 um, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `emission_mass_after_control`
- Unit: kg
- Amount rule: `pm10_kg = measured_concentration_kg_per_m3 * exhaust_volume_m3`, after documented control
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cleaned whole kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `sampling_report; airflow_calibration; dust_collector_log; detection_limit`
- Sources: `fao-herb-spice-quality-assurance`
- Range: Provisional PM10 QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg cleaned whole kernels
  - Basis: deliberately broad screen pending stack or workplace-exhaust measurement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Continuous saturated-steam microbial reduction (`steam_decontamination`)

#### Inputs

##### Product flows

###### Cleaned whole nutmeg kernels to steam treatment (`cleaned_kernels_steam_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Cleaned whole nutmeg kernels, Myristica fragrans
- Selected flow: Cleaned whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured mass charged to the continuous steam system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per steam-treatment campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `scale_calibration; campaign_log; lot_linkage`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`

###### Purchased saturated steam (`purchased_saturated_steam_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Saturated steam, purchased, at facility
- Selected flow: Saturated steam, purchased, at facility
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_steam_mass`
- Unit: kg
- Amount rule: Metered steam delivered to the treatment chamber, corrected for condensate return when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg steam-treated kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `steam_meter_calibration; pressure_temperature_log; condensate_return_record`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`
- Range: Provisional steam-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5.0
  - Unit: kg/kg steam-treated kernels
  - Basis: broad screen because equipment-specific utility intensity was not located
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Steam-treatment electricity (`steam_treatment_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: Metered electricity for conveyors, vacuum, controls, fans and auxiliaries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg steam-treated kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `meter_calibration; equipment_runtime_log; allocation_workpaper`
- Sources: `fda-spice-risk-profile-2017`
- Range: Provisional steam-system electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2.0
  - Unit: kWh/kg steam-treated kernels
  - Basis: broad screen pending submetered evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Steam-treated wet nutmeg kernels (`steam_treated_kernels_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Selected flow: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured mass leaving treatment with moisture, time and temperature linked to campaign record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per steam-treatment campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `validated_process_record; time_temperature_log; moisture_test; batch_reconciliation`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`

##### Waste flows

###### Steam-treatment condensate wastewater (`steam_condensate_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Steam-treatment condensate wastewater
- Selected flow: Steam-treatment condensate wastewater
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `wastewater_mass`
- Unit: kg
- Amount rule: Metered or mass-balance-calculated condensate collected for sewer or off-site treatment; do not merge with sanitation wastewater
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg steam-treated kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `drain_meter_record; steam_balance; transfer_receipt`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`
- Range: Provisional condensate QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg steam-treated kernels
  - Basis: broad water-balance screen pending metered evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Electric hot-air redrying and ambient cooling (`electric_drying_cooling`)

#### Inputs

##### Product flows

###### Steam-treated wet kernels to dryer (`wet_kernels_dryer_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Selected flow: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured wet-kernel mass charged to the dryer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per dryer lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `scale_calibration; moisture_test; lot_linkage`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`

###### Electric dryer and fan electricity (`electric_dryer_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: Metered electricity for electric heaters, circulation fans, exhaust fans, conveyors and cooling fans
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried cooled kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `meter_calibration; dryer_runtime_log; temperature_log`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`
- Range: Provisional electric-drying QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10.0
  - Unit: kWh/kg dried cooled kernels
  - Basis: broad screen pending dryer-specific metering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried and cooled nutmeg kernels (`dried_cooled_kernels_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Selected flow: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured released mass after moisture and temperature acceptance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per dryer lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `scale_calibration; moisture_test; release_record; batch_reconciliation`
- Sources: `codex-cxs-352-2022`; `codex-cxc-75-2015`

##### Waste flows

##### Elementary flows

###### Water vapour from redrying (`dryer_water_vapour_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Water, vapour, to air
- Selected flow: Water, vapour, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `water_mass_balance`
- Unit: kg
- Amount rule: `water_vapour_kg = wet_kernel_water_kg - dried_kernel_water_kg - collected_liquid_water_kg`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried cooled kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `paired_moisture_tests; calibrated_scales; water_balance`
- Sources: `mass-balance-identity`
- Range: Physical water-balance guardrail
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg dried cooled kernels
  - Basis: non-negative evaporation bounded by recorded incoming water and mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Hammer milling, fine sieving and metal control (`grinding_sieving`)

#### Inputs

##### Product flows

###### Dried kernels to hammer mill (`dried_kernels_mill_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Selected flow: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured kernel mass charged to milling after inventory correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per milling lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `scale_calibration; lot_linkage; moisture_test`
- Sources: `codex-cxs-352-2022`; `fao-herb-spice-quality-assurance`

###### Milling, sieving and dust-control electricity (`grinding_sieving_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: Metered electricity for hammer mill, sieve, conveyor, magnet, metal detector and dust collector
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming loose powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `meter_calibration; equipment_runtime_log; production_log`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: Provisional milling-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5.0
  - Unit: kWh/kg conforming loose powder
  - Basis: broad screen pending mill-specific metering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming loose ground nutmeg powder (`loose_ground_nutmeg_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Ground nutmeg powder, Myristica fragrans, loose
- Selected flow: Ground nutmeg powder, Myristica fragrans, loose
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured powder passing the declared sieve and metal-control release criteria
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per milling lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `scale_calibration; sieve_test; metal_detector_check; laboratory_release`
- Sources: `codex-cxs-352-2022`; `fao-herb-spice-quality-assurance`

##### Waste flows

###### Off-spec ground nutmeg powder (`offspec_ground_nutmeg_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Off-spec ground nutmeg powder
- Selected flow: Off-spec ground nutmeg powder
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed off-spec powder sent to waste; documented internal rework is excluded from net waste and retained as an internal loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming loose powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `nonconformance_record; waste_scale_record; destination_receipt; rework_log`
- Sources: `codex-cxs-352-2022`
- Range: Provisional off-spec powder QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg conforming loose powder
  - Basis: broad loss screen pending foreground lots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Captured milling nutmeg dust (`milling_captured_nutmeg_dust_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Captured nutmeg dust from milling and sieving
- Selected flow: Captured nutmeg dust from milling and sieving
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed dust removed from filters and transferred as waste; do not merge with off-spec powder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming loose powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `filter_change_log; waste_scale_record; destination_receipt`
- Sources: `fao-herb-spice-quality-assurance`; `codex-cxc-75-2015`

##### Elementary flows

###### PM10 released from milling and sieving (`milling_pm10_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Particulate matter, aerodynamic diameter < 10 um, to air
- Selected flow: Particulate matter, aerodynamic diameter < 10 um, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `emission_mass_after_control`
- Unit: kg
- Amount rule: `pm10_kg = measured_concentration_kg_per_m3 * exhaust_volume_m3`, after documented control
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming loose powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `sampling_report; airflow_calibration; dust_collector_log; detection_limit`
- Sources: `fao-herb-spice-quality-assurance`
- Range: Provisional milling-PM10 QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg conforming loose powder
  - Basis: deliberately broad screen pending exhaust measurement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: 25 kg lined-sack filling and release (`packing`)

#### Inputs

##### Product flows

###### Loose ground nutmeg powder to packing (`loose_powder_packing_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Ground nutmeg powder, Myristica fragrans, loose
- Selected flow: Ground nutmeg powder, Myristica fragrans, loose
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Measured loose powder issued to packing after inventory correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Quality evidence: `scale_calibration; lot_linkage; inventory_reconciliation`
- Sources: `codex-cxs-352-2022`

###### Multiwall kraft paper for 25 kg sacks (`kraft_paper_packaging_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Kraft paper, multiwall sack grade
- Selected flow: Kraft paper, multiwall sack grade
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `packaging_component_mass`
- Unit: kg
- Amount rule: `kraft_paper_kg = conforming_sack_count * verified_kraft_mass_per_sack_kg + attributable_kraft_scrap_kg`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Quality evidence: `packaging_bom; component_mass_check; issue_record; scrap_reconciliation`
- Sources: `codex-cxc-75-2015`
- Range: Provisional kraft-paper QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.10
  - Unit: kg/kg packed reference powder
  - Basis: broad screen pending verified packaging bill of materials
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### LDPE liner for 25 kg sacks (`ldpe_liner_packaging_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Low-density polyethylene film, food-contact liner grade
- Selected flow: Low-density polyethylene film, food-contact liner grade
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `packaging_component_mass`
- Unit: kg
- Amount rule: `ldpe_kg = conforming_liner_count * verified_ldpe_mass_per_liner_kg + attributable_ldpe_scrap_kg`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Quality evidence: `packaging_bom; component_mass_check; issue_record; scrap_reconciliation`
- Sources: `codex-cxc-75-2015`
- Range: Provisional LDPE-liner QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.05
  - Unit: kg/kg packed reference powder
  - Basis: broad screen pending verified packaging bill of materials
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packing electricity (`packing_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: Metered electricity for filler, checkweigher, sealer, conveyor and metal detector
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Quality evidence: `meter_calibration; equipment_runtime_log; production_log`
- Sources: `codex-cxc-75-2015`
- Range: Provisional packing-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 1.0
  - Unit: kWh/kg packed reference powder
  - Basis: broad screen pending packing-line metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed ground nutmeg reference product (`reference_ground_nutmeg_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Nutmeg, mace, cardamoms, processed
- Selected flow: Nutmeg, mace, cardamoms, processed `55268cb7-f7b1-4d34-9c53-cc3f158b52d8`
- Flow property / unit: Mass / kg
- Flow UUID: 55268cb7-f7b1-4d34-9c53-cc3f158b52d8
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `net_reference_mass`
- Unit: kg
- Amount rule: Fixed reference amount of 1 kg net conforming packed powder
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg packed reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packing`
- Quality evidence: `state_code_100_uuid_reread; lot_release; net_mass_check; moisture_test; particle_size_test`
- Sources: `codex-cxs-352-2022`

##### Waste flows

###### Kraft-paper packing scrap (`kraft_paper_scrap_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Kraft paper packing scrap
- Selected flow: Kraft paper packing scrap
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed kraft-paper scrap sent to declared recycling or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Quality evidence: `waste_scale_record; packaging_reconciliation; destination_receipt`
- Sources: `mass-balance-identity`

###### LDPE liner packing scrap (`ldpe_liner_scrap_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: LDPE liner packing scrap
- Selected flow: LDPE liner packing scrap
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed LDPE scrap sent to declared recycling or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed reference powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Quality evidence: `waste_scale_record; packaging_reconciliation; destination_receipt`
- Sources: `mass-balance-identity`

##### Elementary flows

### Process: Routine vacuum dry sanitation (`dry_sanitation`)

#### Inputs

##### Product flows

###### Dry-sanitation vacuum electricity (`dry_sanitation_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: Metered or runtime-allocated electricity for dedicated industrial vacuum cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed reference powder supported by sanitation interval
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_sanitation`
- Quality evidence: `sanitation_log; equipment_runtime_log; meter_or_rated_load_record`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: Provisional dry-sanitation electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kWh/kg packed reference powder
  - Basis: broad screen pending sanitation-period allocation evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Vacuum-collected nutmeg sanitation residue (`dry_sanitation_residue_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Vacuum-collected nutmeg sanitation residue
- Selected flow: Vacuum-collected nutmeg sanitation residue
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: Weighed dry product residue and dust removed during routine sanitation and sent to declared waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed reference powder supported by sanitation interval
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_sanitation`
- Quality evidence: `sanitation_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: Provisional dry-sanitation residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg packed reference powder
  - Basis: broad screen pending sanitation residue records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Controlled wet cleaning and ethanol disinfection (`controlled_wet_cleaning`)

This process is gated. It is included only for a documented contamination or corrective-cleaning event attributable to represented production. It is never probability-weighted or averaged with the no-event route.

#### Inputs

##### Product flows

###### Potable controlled-cleaning water (`controlled_cleaning_water_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Water, potable, at facility
- Selected flow: Water, potable, at facility
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_water_mass`
- Unit: kg
- Amount rule: Metered minimum water used in the controlled event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per documented cleaning event, then allocated only to attributable production
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `water_meter_record; sanitation_authorization; event_log`
- Sources: `codex-cxc-75-2015`
- Range: Provisional controlled-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/cleaning event
  - Basis: event-scale broad screen pending facility procedure and metering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ethanol food-contact disinfectant (`ethanol_disinfectant_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Ethanol, food-contact disinfectant, active ingredient
- Selected flow: Ethanol, food-contact disinfectant, active ingredient
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `active_ingredient_mass`
- Unit: kg
- Amount rule: Issued disinfectant solution mass multiplied by measured or certificate active-ethanol fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per documented cleaning event, then allocated only to attributable production
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `chemical_issue_record; supplier_certificate; formulation_record; event_log`
- Sources: `codex-cxc-75-2015`
- Range: Provisional ethanol QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg active ethanol/cleaning event
  - Basis: event-scale broad screen pending facility procedure
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Controlled-cleaning drying electricity (`controlled_cleaning_drying_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: Metered or runtime-allocated electricity for ventilation and complete post-cleaning drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per documented cleaning event, then allocated only to attributable production
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `meter_or_rated_load_record; drying_verification; restart_authorization`
- Sources: `codex-cxc-75-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Controlled-cleaning wastewater (`controlled_cleaning_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Controlled-cleaning wastewater containing ethanol residues
- Selected flow: Controlled-cleaning wastewater containing ethanol residues
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `wastewater_mass`
- Unit: kg
- Amount rule: Metered or event water-balance wastewater transferred to sewer or off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per documented cleaning event, then allocated only to attributable production
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `drain_meter_record; event_water_balance; transfer_or_discharge_record`
- Sources: `codex-cxc-75-2015`; `mass-balance-identity`

##### Elementary flows

###### Ethanol released to air during controlled cleaning (`controlled_cleaning_ethanol_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: Ethanol, to air
- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `emission_mass_after_control`
- Unit: kg
- Amount rule: `ethanol_to_air_kg = ethanol_input_kg - ethanol_in_wastewater_kg - ethanol_in_collected_residue_kg`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per documented cleaning event, then allocated only to attributable production
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `chemical_issue_record; wastewater_test_or_balance; event_mass_balance`
- Sources: `mass-balance-identity`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_directly` | Shared utilities and sanitation | Use submetering and process subdivision first. Allocate a shared meter only from documented equipment runtime and rated-load or measured-load data. Allocate sanitation only to lots supported by its recorded interval or corrective event. | `mass-balance-identity` |
| `allocation_no_coproduct_route` | Locked foreground route | The declared route produces one reference product and wastes; no co-product allocation is permitted. Internal rework is an internal loop and receives no separate credit or burden. | `mass-balance-identity` |
| `allocation_waste_destination` | Rejected kernels, foreign matter, dust, off-spec powder, packaging scrap and wastewater | Keep each output as a waste flow with its actual destination. Do not apply avoided-burden credit. If an output is sold as a product, the dataset no longer conforms to `allocation_no_coproduct_route` and requires explicit re-authoring and review. | `mass-balance-identity` |
| `allocation_no_route_average` | Steam, sanitation and alternative technologies | Do not probability-weight, market-average or otherwise combine the locked route with untreated, irradiation, fumigation, fuel-dried, refrigerated or no-event corrective-cleaning routes. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The following protocol machine fields are canonical and identical in both language files.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_cleaning` | `receiving_cleaning` | `all_atomic_cards` | `batch_meter_waste_emission_records` | `lot_id; species; kernel_form; input_mass_kg; input_moisture_percent; output_mass_kg; rejected_kernel_mass_kg; plant_debris_mass_kg; stone_mass_kg; metal_mass_kg; captured_dust_mass_kg; electricity_kwh; pm10_concentration_kg_per_m3; exhaust_volume_m3; inventory_change_kg` | `calibrated_weighing; calibrated_metering; representative_sampling; direct_waste_weighing; substance_specific_emission_measurement` | `kg; kWh; percent_wet_basis; kg_per_m3; m3` | `each_lot_and_meter_interval` | `all_represented_lots_and_operating_modes` | `reporting_facility_receiving_and_cleaning_equipment` | `inventory_correct_each_atomic_flow_then_normalize_to_cleaned_kernel_output_and_reference_product` | `scale_calibration; meter_calibration; sampling_report; lot_traceability; mass_balance; destination_receipt` |
| `cp_steam_decontamination` | `steam_decontamination` | `all_atomic_cards` | `campaign_meter_process_validation_records` | `campaign_id; kernel_input_kg; steam_input_kg; condensate_return_kg; electricity_kwh; treatment_time_s; treatment_temperature_c; pressure_kpa; wet_kernel_output_kg; output_moisture_percent; condensate_wastewater_kg` | `calibrated_weighing; steam_metering; electricity_metering; continuous_time_temperature_logging; wastewater_metering_or_balance` | `kg; kWh; s; degC; kPa; percent_wet_basis` | `each_campaign_and_meter_interval` | `all_represented_treatment_campaigns` | `reporting_facility_continuous_steam_system` | `campaign_reconcile_then_normalize_to_steam_treated_kernel_output_and_reference_product` | `validation_study; sensor_calibration; steam_meter_calibration; time_temperature_record; water_balance; lot_traceability` |
| `cp_electric_drying_cooling` | `electric_drying_cooling` | `all_atomic_cards` | `dryer_batch_meter_laboratory_records` | `dryer_lot_id; wet_kernel_input_kg; input_moisture_percent; electricity_kwh; dryer_time_h; dryer_temperature_c; dried_kernel_output_kg; output_moisture_percent; output_temperature_c; collected_liquid_water_kg` | `calibrated_weighing; electricity_metering; continuous_temperature_logging; validated_moisture_test; water_mass_balance` | `kg; kWh; h; degC; percent_wet_basis` | `each_dryer_lot_and_meter_interval` | `all_represented_dryer_lots` | `reporting_facility_electric_dryer_and_ambient_cooler` | `paired_moisture_mass_balance_then_normalize_to_dried_cooled_kernel_output_and_reference_product` | `scale_calibration; meter_calibration; moisture_method; temperature_log; release_record; water_balance` |
| `cp_grinding_sieving` | `grinding_sieving` | `all_atomic_cards` | `mill_batch_meter_quality_waste_emission_records` | `mill_lot_id; kernel_input_kg; electricity_kwh; sieve_spec; powder_output_kg; offspec_waste_kg; captured_dust_kg; pm10_concentration_kg_per_m3; exhaust_volume_m3; rework_kg; inventory_change_kg` | `calibrated_weighing; electricity_metering; sieve_test; direct_waste_weighing; substance_specific_emission_measurement` | `kg; kWh; kg_per_m3; m3` | `each_mill_lot_and_meter_interval` | `all_represented_milling_lots_and_particle_sizes` | `reporting_facility_mill_sieve_metal_control_and_dust_collector` | `exclude_internal_rework_from_net_exchange_totals_reconcile_atomic_flows_then_normalize_to_conforming_loose_powder` | `scale_calibration; meter_calibration; sieve_test; metal_detector_check; sampling_report; mass_balance` |
| `cp_packing` | `packing` | `all_atomic_cards` | `packing_batch_bom_meter_quality_waste_records` | `packing_lot_id; loose_powder_input_kg; conforming_sack_count; rejected_sack_count; net_powder_output_kg; kraft_mass_per_sack_kg; ldpe_mass_per_liner_kg; kraft_scrap_kg; ldpe_scrap_kg; electricity_kwh; moisture_percent; volatile_oil_ml_per_100g_dry; particle_size_result` | `calibrated_weighing; verified_component_mass; packaging_issue_reconciliation; electricity_metering; validated_laboratory_test` | `kg; count; kWh; percent_wet_basis; ml_per_100g_dry` | `each_packing_lot_and_meter_interval` | `all_represented_packing_lots` | `reporting_facility_25kg_lined_sack_line` | `component_specific_packaging_balance_and_net_product_normalization_to_1kg_reference_product` | `scale_calibration; packaging_bom; component_mass_check; meter_calibration; laboratory_release; lot_traceability` |
| `cp_dry_sanitation` | `dry_sanitation` | `all_atomic_cards` | `sanitation_runtime_waste_records` | `sanitation_event_id; start_time; end_time; supported_lot_ids; vacuum_runtime_h; vacuum_power_kw; electricity_kwh; collected_residue_kg; waste_destination` | `sanitation_log; meter_or_runtime_power_calculation; direct_residue_weighing` | `h; kW; kWh; kg` | `each_sanitation_event` | `all_routine_events_supporting_represented_lots` | `post_treatment_dry_hygiene_area` | `allocate_only_to_supported_lots_by_recorded_output_mass_never_to_unrelated_production` | `sanitation_verification; equipment_record; waste_scale_record; destination_receipt; lot_linkage` |
| `cp_controlled_wet_cleaning` | `controlled_wet_cleaning` | `all_atomic_cards` | `corrective_event_water_chemical_energy_waste_emission_records` | `event_id; trigger; attributable_lot_ids; water_input_kg; disinfectant_solution_kg; ethanol_fraction; electricity_kwh; wastewater_kg; wastewater_ethanol_kg; collected_residue_ethanol_kg; drying_verification; restart_authorization` | `event_authorization; water_metering; chemical_issue_reconciliation; electricity_metering_or_runtime_calculation; wastewater_metering_or_balance; ethanol_mass_balance` | `kg; fraction; kWh` | `each_gated_corrective_event` | `only_documented_events_attributable_to_represented_production` | `controlled_cleaning_area_and_affected_equipment` | `event_specific_atomic_balance_allocate_only_to_attributable_lots_no_probability_weighting` | `corrective_action_record; meter_calibration; supplier_certificate; drying_verification; environmental_result; restart_authorization; event_mass_balance` |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory card | `normalized_amount = net_attributable_amount / net_conforming_packed_powder_kg` | `net_attributable_amount; net_conforming_packed_powder_kg` | `amount_per_1kg_reference_product` | `mass-balance-identity` |
| `calc_dry_mass` | Kernel, intermediate and powder | `dry_mass_kg = as_delivered_mass_kg * (1 - moisture_percent_wet_basis / 100)` | `as_delivered_mass_kg; moisture_percent_wet_basis` | `dry_mass_kg` | `codex-cxs-352-2022`; `mass-balance-identity` |
| `calc_process_mass_balance` | Each material process | `residual_kg = corrected_inputs_kg - product_outputs_kg - waste_outputs_kg - elementary_mass_outputs_kg - ending_inventory_kg + beginning_inventory_kg` | `atomic_input_output_inventory_records` | `residual_kg; residual_percent` | `mass-balance-identity` |
| `calc_water_vapour` | Electric redrying | `water_vapour_kg = wet_kernel_water_kg - dried_kernel_water_kg - collected_liquid_water_kg` | `paired_mass_and_moisture_results; collected_liquid_water_kg` | `dryer_water_vapour_air_kg` | `mass-balance-identity` |
| `calc_pm10` | Receiving and milling exhausts | `pm10_kg = measured_concentration_kg_per_m3 * exhaust_volume_m3` | `pm10_concentration_kg_per_m3; exhaust_volume_m3` | `pm10_kg_after_control` |  |
| `calc_packaging_components` | Kraft paper and LDPE | `component_input_kg = conforming_component_count * verified_component_mass_kg + attributable_component_scrap_kg` | `component_count; verified_component_mass_kg; component_scrap_kg` | `kraft_paper_input_kg_or_ldpe_input_kg` | `mass-balance-identity` |
| `calc_shared_electricity` | Shared electricity meter | `allocated_kwh = shared_meter_kwh * equipment_runtime_h * measured_or_rated_load_kw / sum_all_supported_equipment_runtime_load` | `shared_meter_kwh; runtime_h; measured_or_rated_load_kw` | `process_electricity_kwh` |  |
| `calc_ethanol_to_air` | Controlled wet cleaning | `ethanol_to_air_kg = ethanol_input_kg - ethanol_in_wastewater_kg - ethanol_in_collected_residue_kg` | `ethanol_input_kg; ethanol_in_wastewater_kg; ethanol_in_collected_residue_kg` | `controlled_cleaning_ethanol_air_kg` | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | Reference product and all material lots | Retain exact species, product form, steam route, electric-drying route and 25 kg lined-sack identity; any mixed species/form/route dataset fails. | `lot_specification; route_map; production_record; packaging_bom` |
| `dq_reference_quality` | Packed powder | Retain lot-linked moisture, ash, volatile-oil, live-insect, particle-size and net-mass results required by the declared specification. | `laboratory_report; sampling_plan; certificate_of_analysis; release_record` |
| `dq_measurement` | Mass, steam, electricity, water, packaging, waste and emissions | Use calibrated or verified devices; disclose missing meter coverage, allocation, detection limits and estimation. | `calibration_certificate; meter_map; invoice_reconciliation; sampling_report; calculation_workpaper` |
| `dq_temporal_coverage` | Foreground period | Cover all conforming and rejected lots, startup/shutdown, rework, sanitation, waste transfers and inventory changes in the declared period. | `production_calendar; lot_register; sanitation_log; downtime_log; inventory_reconciliation` |
| `dq_atomic_completeness` | Inventory | Demonstrate one card per actual carrier/material/waste/substance and absence of aggregate placeholder exchanges. | `atomic_flow_register; purchase_ledger; waste_register; emission_point_register` |
| `dq_mass_balance` | Each included process | Reconcile on a consistent moisture basis and investigate material residuals before release. | `process_mass_balance; corrective_action_record` |
| `dq_provisional_ranges` | Every reasoned_estimate range | Use only as a QA review flag; replace with representative foreground or cited reviewed evidence before publication unless methodology review explicitly accepts it. | `replacement_evidence_or_methodology_review_record` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail unless reference amount is 1 kg, product UUID is `55268cb7-f7b1-4d34-9c53-cc3f158b52d8`, type is Product flow, quantitative property is Mass, and every required qualifier is present. | `codex-cxs-352-2022` |
| `validate_species_form_lock` | Product scope | Fail if species is not `Myristica_fragrans_Houtt`, product_form is not `ground_powdered_seed`, or any mace, cardamom, whole/broken product or blend is averaged into the inventory. | `codex-cxs-352-2022` |
| `validate_route_lock` | Process map | Fail if the dataset mixes or substitutes untreated, irradiation, fumigation, fuel-fired drying, refrigerated cooling or another microbial-reduction route. | `codex-cxc-75-2015`; `fda-spice-risk-profile-2017` |
| `validate_quality_limits` | Packed powder | Fail when moisture > 8.0% w/w, total ash > 3.0% dry basis, acid-insoluble ash > 0.5% dry basis, water-insoluble ash > 1.5% dry basis, volatile oil < 5.0 ml/100 g dry basis, live insects > 0 per 100 g, or required test evidence is absent. | `codex-cxs-352-2022` |
| `validate_process_gate` | Controlled wet cleaning | Fail if the conditional process is included without a documented trigger and attributable lots, or if it is probability-weighted with no-event production. | `codex-cxc-75-2015` |
| `validate_atomic_flows` | Every inventory exchange | Fail on aggregate placeholders or merged electricity/steam/water, merged packaging materials, merged cleaning agents, merged waste types, or merged direct-emission substances. |  |
| `validate_uuid_policy` | Inventory flow identities | Require the reference output as the only flow UUID at candidate stage; before reviewed/published use, require every other selected flow to be resolved and state_code=100 reread without changing row semantics. |  |
| `validate_mass_balance` | Each included process | Require moisture-consistent input/output/waste/release/inventory reconciliation and documented investigation of material residuals. | `mass-balance-identity` |
| `validate_steam_control` | Steam decontamination | Require a validated product-specific time/temperature/pressure regime and complete campaign logs; this PCR does not prescribe a universal lethality schedule. | `codex-cxc-75-2015`; `fda-spice-risk-profile-2017` |
| `validate_post_treatment_dryness` | Drying, cooling, milling and packing | Require complete drying verification before milling/packing and moisture-control records preventing post-treatment recontamination. | `codex-cxc-75-2015` |
| `validate_reasoned_estimates` | Provisional ranges | Treat exceedance as a review flag, not automatic non-conformance; do not publish a provisional value as an authoritative default without replacement evidence or explicit review acceptance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for steam-decontaminated ground *Myristica fragrans* nutmeg powder in a 25 kg lined sack at processor gate |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` only after methodology review, non-reference UUID resolution and evidence replacement appropriate to geography, technology and period |
| allowed_use | LCA or product-footprint models requiring the exact species/product_form/steam/electric-drying/package route and compatible quality, geography, time and boundary |
| excluded_use | Mace; cardamom; whole or broken nutmeg; mixed category averages; untreated, irradiated or fumigated spice; fuel-fired or refrigerated route; retail packaging; unresolved use of provisional estimates as authoritative data |
| required_metadata | `pcr_id; version; reference_flow_uuid; species; product_form; microbial_reduction; post_treatment_drying; package; kernel_origin; facility_geography; reference_period; moisture_basis; particle_size_spec; steam_validation_id; process_map; meter_coverage; upstream_datasets; sanitation_events; waste_destinations; cutoffs; proxies; review_status` |
| required_quality_disclosure | `foreground_share; lot_coverage; meter_coverage; allocation_workpapers; mass_balance_residuals; laboratory_methods; steam_validation; detection_limits; provisional_ranges_retained; unresolved_uuids; upstream_proxy_mismatch` |
| update_trigger | Change in species, product form, microbial-reduction system, drying energy carrier, mill/sieve specification, packaging components, sanitation practice, supplier/origin mix, quality standard, waste destination, direct-emission control, meter coverage or evidence that materially changes results |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-352-2022` | standard | FAO and WHO, Codex Alimentarius, CXS 352-2022, Standard for Dried Seeds - Nutmeg, adopted 2022 and amended 2025, https://openknowledge.fao.org/handle/20.500.14283/cd9053en (retrieved 2026-08-13) | *Myristica fragrans* identity; ground/powdered style; stripping/drying/sorting/cracking/grading/grinding process context; moisture, ash, volatile-oil, insect and labelling requirements |
| `codex-cxc-75-2015` | official_guidance | FAO and WHO, Codex Alimentarius, CXC 75-2015, Code of Hygienic Practice for Low-Moisture Foods, Annex III on Spices and Dried Culinary Herbs, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B75-2015%252FCXC_075e.pdf (retrieved 2026-08-13) | Incoming inspection; cleaning and metal control; validated steam treatment and possible redrying; dry-zone control; routine dry sanitation; gated controlled wet cleaning; moisture-protective lined packaging; traceability |
| `fao-herb-spice-quality-assurance` | handbook | FAO, Quality assurance for small-scale rural food industries, Section 2.4 Herb and spice products, https://www.fao.org/4/v5380e/v5380e09.htm (retrieved 2026-08-13) | Receiving checks; moisture control; cleaning, drying, hammer/disc milling, fine sieving, dust capture, rapid airtight packing and quality records |
| `fda-spice-risk-profile-2017` | official_guidance | U.S. Food and Drug Administration, Risk Profile: Pathogens and Filth in Spices, 2017 update, https://www.fda.gov/files/food/published/Risk-Profile--Pathogens-and-Filth-in-Spices.pdf (retrieved 2026-08-13) | Continuous saturated-steam process decomposition; full particle exposure; time/temperature validation; vacuum/steam and drying/cooling utility and moisture-control implications; limits of universal treatment schedules |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to atomic process inputs, products, wastes, named direct releases and inventory change | Normalization; dry-mass and water-vapour calculation; packaging and ethanol balances; process reconciliation; physical QA bounds; no-credit waste handling |
