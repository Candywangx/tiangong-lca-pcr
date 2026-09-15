---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.unrefined-copper-copper-anodes-for-electrolytic-refining
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Unrefined copper; copper anodes for electrolytic refining

## 1. Scope and Applicability

This PCR applies to gate-to-gate production of fire-refined unrefined copper and copper anodes intended for subsequent electrolytic refining. The foreground boundary begins with declared blister copper or copper scrap at the fire-refining gate and ends with net conforming unrefined copper or copper anodes at the producer gate. Primary-feed and secondary-feed routes are covered only when feed state, copper assay, impurity profile, and upstream dataset are declared.

Included operations are charge receipt, melting where required, oxidation, reduction or poling, slag removal, anode-furnace off-gas handling, and anode casting and cooling when anodes are produced. Ore and concentrate production, roasting, matte smelting, converting before the declared feed gate, electrolytic refining, cathode production, semi-fabrication, downstream transport, use, and end-of-life are excluded. The semantic boundary follows `ec-jrc-nfm-bref-2017`, with independent primary-route corroboration from `us-epa-ap42-primary-copper-smelting-1986`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.unrefined-copper-copper-anodes-for-electrolytic-refining |
| classification_refs | CPC 3.0: 41412, Unrefined copper; copper anodes for electrolytic refining (`un-cpc-3-0-2025`) |
| covered_products | Fire-refined unrefined copper leaving the declared refining gate; cast copper anodes intended for electrolytic refining |
| excluded_products | Copper matte and cement copper; refined cathode copper; refined copper alloys and master alloys; copper powder and semi-finished copper products |
| representative_product | Anode copper suitable for transfer to electrolytic refining |
| production_route | Fire refining of declared blister copper, with conditional secondary copper-scrap feed; oxidation followed by reduction or poling; conditional anode casting |
| market_state | Solid unrefined copper or solid cast copper anodes at the producer gate; temperature, copper assay, impurity profile, dimensions, and acceptance status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of declared fire-refined unrefined copper product for further copper refining |
| How much | 1,000 kg net conforming product at the producer gate |
| How well | Meets the purchaser or refinery acceptance specification for copper assay, impurity profile, physical form, and, for anodes, geometry and integrity |
| How long or cycle | One completed production lot; no use-duration function is assigned |
| reference_flow_link | Net conforming mass leaving the foreground boundary, excluding off-spec material returned internally |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Anode copper `23b431ee-f7a0-4788-b2e2-7361cd48d4ad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared product form; copper assay and analytical basis; impurity profile; primary, secondary, or mixed feed route; physical state and temperature at gate; anode dimensions and acceptance specification when applicable; site and geography; reporting period; allocation method; upstream dataset identity and boundary for each external copper feed |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete. For a declared fire-refined non-anode output, retain the 1,000 kg mass function, disclose that the confirmed Anode copper UUID is only the category representative, and keep the non-anode output identity unresolved until an exact flow is available.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net conforming output mass on a calibrated scale. Exclude casting rejects and internal returns from the reference amount. |
| `copper_mass_balance` | copper-bearing inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received mass and copper assay basis separately; do not substitute contained-copper mass for physical flow mass. |
| `gas_reference_conditions` | natural gas, propane, compressed air, and industrial oxygen | Volume or Mass as assigned to the selected flow | m3 or kg | Preserve the selected flow property. For volume records, declare temperature, pressure, dry or wet basis, and standard-condition conversion. |
| `electricity_energy` | alternating current | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter kWh in the source record and convert to MJ using 1 kWh = 3.6 MJ; disclose voltage level and supply geography. |
| `water_accounting` | cooling water and wastewater | Mass or Volume as assigned to the selected flow | kg or m3 | Distinguish gross recirculation, make-up, evaporation, and discharged water. Only water crossing the foreground boundary is an exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Blister copper or copper scrap received at the fire-refining boundary, with mass, copper assay, impurity profile, physical state, temperature, origin, and upstream dataset identity declared |
| starting_condition_role | Upstream copper-bearing product input to foreground fire refining |
| product_classification_scope | Fire-refined unrefined copper and copper anodes intended for electrolytic refining; CPC 3.0 code 41412 is classification context rather than canonical identity |
| recursive_input_rule | Record externally supplied same-category unrefined copper with its upstream dataset; record facility-internal fire-refined copper and off-spec anodes as internal transfers and do not recursively attach this PCR |
| upstream_dataset_requirement | Each external blister-copper or copper-scrap input requires a named upstream dataset or documented cut-off, geography, technology, temporal coverage, assay, and allocation status |
| disclosure | Declare feed route and shares, melting inclusion, reduction agent, oxygen enrichment, furnace type, off-gas controls, casting technology, cooling-water mode, internal recycling, product form, and excluded operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_feed_gate` | foreground starting boundary | Start at metered receipt of declared blister copper or copper scrap; exclude ore extraction, concentrate preparation, matte smelting, and converting unless an expanded dataset reports them separately. | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `boundary_refining_operations` | foreground operations | Include oxidation, reduction or poling, slag removal, furnace and fugitive off-gas capture and treatment, and directly attributable utilities and emissions. | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `boundary_anode_casting` | product-form condition | Include anode casting, cooling, reject handling, and casting emissions when the output is copper anodes; mark not applicable only for a declared non-anode output. | `ec-jrc-nfm-bref-2017` |
| `boundary_electrorefining_exclusion` | downstream boundary | End at net conforming product at the producer gate; exclude electrolytic refining, cathode production, semi-fabrication, downstream transport, use, and end-of-life. | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fire_refining` | Fire refining and off-gas handling | required | Always required for the declared product boundary | Foreground oxidation, reduction or poling, slag removal, and off-gas handling | Net fire-refined copper transferred to casting or sold as declared unrefined copper |
| `anode_casting` | Anode casting and cooling | conditional | Include when the declared product is a copper anode; otherwise document non-applicability | Foreground casting, cooling, inspection, and reject return | 1,000 kg net conforming anode copper at the producer gate |

### Process: Fire refining and off-gas handling (`fire_refining`)

#### Inputs

##### Product flows

###### Primary-route blister copper feed (`fr_blister_copper`)

Record blister copper crossing the fire-refining gate for a primary or mixed feed route.

- Selected flow: Blister Copper `ca87ab19-c076-4ccf-9cbd-b76cb932a880`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-received blister-copper mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copper_feed_mass`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### Secondary-route copper scrap feed (`fr_copper_scrap`)

Record copper scrap when secondary feed crosses the boundary; declare grade, origin, contamination, preparation, and ownership transfer.

- Selected flow: Scrap copper `096e8470-e8e1-4aa9-b35e-c5b4350f145e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted copper-scrap mass charged; zero and not applicable for routes without scrap feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copper_feed_mass`
- Sources: `ec-jrc-nfm-bref-2017`

###### Gaseous natural gas (`fr_natural_gas`)

Record natural gas crossing the boundary as furnace fuel or reducing agent.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered natural-gas volume allocated to refining and associated afterburning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_reductant`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### Propane (`fr_propane`)

Record propane only when it crosses the boundary as the declared poling agent or fuel.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured delivered propane mass attributable to refining; zero and not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_reductant`
- Sources: `ec-jrc-nfm-bref-2017`

###### Compressed oxidation air (`fr_compressed_air`)

Record metered compressed air supplied to oxidation, combustion, or afterburning.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered compressed-air volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### Industrial oxygen (`fr_industrial_oxygen`)

Record industrial oxygen only when supplied across the boundary for oxygen enrichment.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered oxygen volume at declared reference conditions; zero and not applicable without enrichment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `ec-jrc-nfm-bref-2017`

###### Alternating-current electricity (`fr_electricity`)

Record metered electricity for furnace drives, gas handling, pumps, fans, controls, and refining auxiliaries.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered or submetered electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `ec-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fire-refined unrefined copper output (`fr_unrefined_copper_output`)

Record fire-refined unrefined copper sold at this gate or transferred internally to casting. No exact Tiangong UUID is confirmed for the generic non-anode state.

- Selected flow: Fire-refined unrefined copper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net fire-refined copper mass after subtracting residues and furnace returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refining_outputs`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

##### Waste flows

###### Copper-bearing anode-furnace slag (`fr_anode_furnace_slag`)

Record slag removed during oxidation and declare internal return, external recovery, or treatment destination.

- Selected flow: Copper-containing slag `199d719c-1505-4223-886f-cfef1f9c6392`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured slag mass leaving refining before external treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_outputs`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### Captured copper-bearing filter dust (`fr_filter_dust`)

Record dry particulate collected from anode-furnace gas controls separately from residual air emissions. No exact Tiangong UUID is confirmed.

- Selected flow: Captured copper-bearing anode-furnace filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collected filter-dust mass leaving the control unit or returned internally
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_outputs`
- Sources: `ec-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fr_fossil_co2`)

Record only direct fossil carbon dioxide from foreground fuel combustion, reduction or poling, and afterburning.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured direct emission or verified site carbon-balance result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

###### Direct sulfur dioxide to air (`fr_sulfur_dioxide`)

Record sulfur dioxide measured from the anode-furnace stack and attributable fugitive sources. No exact Tiangong UUID is confirmed for unspecified outdoor air.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured sulfur-dioxide mass after foreground controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### Residual particulate matter to air (`fr_particulate`)

Record particle-size-unspecified residual particulate after controls when no measured size split is available; exclude collected filter dust.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stack plus attributable fugitive particulate mass after controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

### Process: Anode casting and cooling (`anode_casting`)

#### Inputs

##### Product flows

###### Internal fire-refined copper transfer (`ac_fire_refined_copper_input`)

Record the measured internal transfer from fire refining to casting. It requires a facility-specific intermediate identity.

- Selected flow: Fire-refined copper for anode casting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured molten or solid fire-refined copper mass entering casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming anode copper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_mass`
- Sources: `ec-jrc-nfm-bref-2017`

###### Cooling water (`ac_cooling_water`)

Record make-up or once-through cooling water crossing the boundary; exclude gross internal recirculation.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered make-up plus once-through cooling-water mass attributable to casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming anode copper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_water`
- Sources: `ec-jrc-nfm-bref-2017`

###### Alternating-current electricity (`ac_electricity`)

Record electricity for caster drives, pumps, cooling, inspection, and directly attributable auxiliaries.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered or submetered electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming anode copper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `ec-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming copper anodes (`ac_anode_copper`)

Record only anodes accepted for transfer to electrolytic refining as reference output.

- Selected flow: Anode copper `23b431ee-f7a0-4788-b2e2-7361cd48d4ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net conforming anode mass leaving casting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net conforming anode copper
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_casting_mass`
- Sources: `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### Off-spec copper anodes returned internally (`ac_offspec_anode_copper`)

Record rejected anodes as a distinct internal intermediate; do not count them as reference output.

- Selected flow: Off-spec copper anodes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected-anode mass returned internally
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming anode copper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_mass`
- Sources: `ec-jrc-nfm-bref-2017`

##### Waste flows

###### Direct-cooling wastewater (`ac_wastewater`)

Record wastewater when cooling water leaves casting for treatment or discharge; declare copper, suspended solids, temperature, and treatment status.

- Selected flow: Wastewater `d4117728-768b-4cbe-8a3b-45b2ad87f2ab`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered wastewater volume sent to treatment or discharge; zero and not applicable for a closed loop without purge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming anode copper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_water`
- Sources: `ec-jrc-nfm-bref-2017`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | independently measurable operations | Avoid allocation by separately metering fire refining, off-gas treatment, and casting and assigning direct exchanges to the process that causes them. |  |
| `allocation_internal_recycling` | slag, dust, fire-refined copper, and off-spec anodes returned within the site | Treat internal returns as internal transfers without upstream burden credit, avoided-product credit, or double counting; retain mass in the process balance. | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `allocation_external_recovery` | residues leaving for external recovery | Model the residue transfer explicitly. Apply no substitution credit unless the governing study method requires one; disclose later system expansion outside this inventory. |  |
| `allocation_multiple_products` | unavoidable joint production of marketed products | First use a documented physical causal relation. If none can be demonstrated, use net revenue at the gate and disclose prices, currency, period, and sensitivity; never allocate internal transfers as products. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_copper_feed_mass` | `fire_refining` | blister copper and copper scrap | weighbridge, charge, assay, and inventory records | timestamp; batch; source; flow identity; net mass; copper assay; impurity profile; moisture basis; inventory | Reconcile deliveries and stock movement to charge records | kg and mass fraction | each delivery and charge | full reporting period | all refining units | Sum each atomic feed, adjust inventory change, normalize to net product | calibration; assay; tickets; charge log; reconciliation |
| `cp_fuel_and_reductant` | `fire_refining` | natural gas and propane | meter, tank, and invoice records | timestamp; fuel identity; meter; mass or volume; reference conditions; allocation tag | Read dedicated meters or reconcile shared meters | m3 or kg | batch or daily | full reporting period | furnace and afterburner | Sum by concrete fuel and normalize; do not aggregate fuels | calibration; invoices; fuel specification |
| `cp_process_gases` | `fire_refining` | compressed air and industrial oxygen | flowmeter and operating records | timestamp; gas; volume; pressure; temperature; humidity; purity; stage | Read flowmeters and retain condition conversion | m3 | batch or continuous | full reporting period | furnace and gas system | Sum each gas separately and normalize | calibration; gas certificate; operating log |
| `cp_electricity` | `fire_refining` | electricity | meter records | timestamp; meter; process; kWh; voltage; geography; shared-load allocation | Read submeters; document shared-load allocation | kWh source and MJ reported | hourly, batch, or monthly | full reporting period | each process | Sum kWh by process, multiply by 3.6, normalize | calibration; invoice; allocation worksheet |
| `cp_refining_outputs` | `fire_refining` | unrefined copper, slag, and dust | scales, batch, residue, assay, and inventory records | batch; identity; mass; assay; destination; return flag; inventory | Weigh outputs or reconcile calibrated vessel and inventory | kg | each tap or transfer | full reporting period | furnace and gas controls | Sum each output; retain internal returns; normalize | calibration; assay; transfer ticket; manifest |
| `cp_direct_air_emissions` | `fire_refining` | carbon dioxide, sulfur dioxide, and particulate | stack test, continuous monitor, fugitive estimate, emissions report | source; pollutant; concentration; flow; duration; moisture; oxygen correction; conditions; control; uncertainty | Use approved measurement or verified mass balance; trace stack and fugitive parts | kg | continuous or campaign | representative campaigns and full-period operations | all attributable sources | Integrate by source, exclude overlap, normalize | calibration; method report; detection limit; uncertainty |
| `cp_casting_mass` | `anode_casting` | transfer, conforming anodes, and off-spec anodes | transfer scale, batch, inspection, and rejection records | batch; transferred mass; count; mass; acceptance; rejection; destination; inventory | Reconcile transferred copper with conforming, rejected, and inventory mass | kg | each batch | full reporting period | all casting lines | Sum conforming and rejected separately; normalize | calibration; specification; reconciliation |
| `cp_casting_water` | `anode_casting` | cooling water and wastewater | make-up, circulation, purge, and discharge meters | meter; amount; source; temperature; recirculation; purge; evaporation; destination; quality | Meter boundary-crossing make-up and discharge; exclude recirculation | kg input and m3 output | daily or continuous | full reporting period | casting cooling system | Sum input and output separately and normalize | calibration; water balance; discharge record; laboratory results |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all inventory rows | reported amount = period exchange / period net conforming product mass × 1,000 kg | exchange; net product mass | amount per 1,000 kg reference product |  |
| `calc_electricity_conversion` | `fr_electricity`; `ac_electricity` | electricity MJ = metered kWh × 3.6 | metered kWh | MJ |  |
| `calc_casting_output` | `ac_anode_copper` | net conforming mass = gross cast mass - off-spec mass - closing work-in-process increase + opening work-in-process decrease | gross cast; rejected mass; inventory change | net conforming anode mass |  |
| `calc_copper_reconciliation` | both processes | input copper = output copper + copper in residues + inventory change + quantified unaccounted difference | masses; assays; inventory | closure and unaccounted difference | `ec-jrc-nfm-bref-2017` |
| `calc_water_balance` | casting cooling | boundary input = wastewater + evaporation + carry-out + inventory change + quantified unaccounted difference | make-up; discharge; evaporation; carry-out; inventory | water-balance closure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | copper-bearing flows | Declare physical state, assay, impurities, source or destination, return status, and exact identity; do not use the conforming-anode UUID for blister copper or off-spec anodes. | assays; master data; batch and transfer records |
| `dq_completeness` | foreground inventory | Cover at least 95% of operating days and reconcile all exchange records for the full period; disclose exclusions. | coverage matrix; missing-data log; reconciliations |
| `dq_measurement` | measured amounts | Use calibrated meters or scales and retain calibration, detection limits, and reference conditions. | certificates; instrument register; laboratory QA |
| `dq_temporal` | all records | Use one reporting period, normally 12 consecutive months or a justified representative campaign including material start-up and shutdown effects. | calendar; campaign justification; operating log |
| `dq_geography_technology` | external inputs and background links | Match geography, voltage, fuel state, oxygen boundary, water source, furnace, and controls or disclose limitations. | supplier data; technology description; dataset metadata |
| `dq_uncertainty` | calculated and allocated amounts | Document raw-data and allocation uncertainty and mass-balance closure; do not replace foreground data with unresolved external ranges. | uncertainty worksheet; sensitivity; review sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require 1,000 kg net conforming product and use the Anode copper UUID only for conforming anodes; keep non-anode output explicitly unresolved. | `un-cpc-3-0-2025` |
| `validation_process_condition` | process map | Require `fire_refining`; require `anode_casting` for anode product and a documented non-applicability reason for non-anode product. | `ec-jrc-nfm-bref-2017` |
| `validation_atomic_flows` | inventory | Reject combined fuel, utility, residue, wastewater, or emission labels; each row must be one exchange with its own amount, property, unit, and applicability. |  |
| `validation_mass_balance` | copper-bearing flows | Require physical-mass and contained-copper reconciliation for each process; investigate and disclose unaccounted differences rather than forcing closure. | `ec-jrc-nfm-bref-2017` |
| `validation_no_double_count` | residues and emissions | Confirm internal returns carry no duplicated burden, captured dust is not also emitted particulate, and upstream electricity or fuel emissions are not direct foreground emissions. | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `validation_records` | data package | Require protocol linkage, temporal coverage, calibration, source and destination metadata, and disclosure for estimated, allocated, missing, or not-applicable values. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate secondary dataset for fire-refined unrefined copper or copper-anode production |
| downstream_use | Background input to electrolytic-refining, copper-product, or lifecycle models when product state, geography, technology, period, and allocation are compatible |
| allowed_use | Attributional modelling within the declared boundary; aggregation with compatible upstream datasets; scenario analysis with disclosed route shares |
| excluded_use | Ore-to-cathode representation without compatible linked datasets; use as cathode copper; unverified sulfur-dioxide or internal-intermediate UUIDs; undisclosed recovery credit |
| required_metadata | PCR id and version; product form; reference UUID applicability; site; geography; period; feed shares and assays; furnace and casting technology; reduction agent; oxygen enrichment; energy, water, and controls; allocation; upstream datasets; unresolved identities |
| required_quality_disclosure | Coverage; missing data; calibration; assay methods; mass, copper, and water balances; emission methods; reference conditions; allocation and sensitivity; representativeness; uncertainty; recycling treatment |
| update_trigger | Material change in feed route or assay, furnace or casting technology, product specification, energy or oxygen supply, controls, allocation, geography, or more than three years since the representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 41412 identity |
| `ec-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, JRC107041, 2017. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf (retrieved 2026-09-04) | Fire-refining boundary, inputs, slag, anode casting and cooling, internal recycling, off-gas and dust controls |
| `us-epa-ap42-primary-copper-smelting-1986` | Official guidance (`official_guidance`) | United States Environmental Protection Agency, AP-42 Section 12.3, Primary Copper Smelting, October 1986, reformatted January 1995. https://www.epa.gov/sites/default/files/2020-11/documents/c12s03.pdf (retrieved 2026-09-04) | Independent primary-route process decomposition, fuel, air, slag, particulate, and sulfur-dioxide exchanges |
