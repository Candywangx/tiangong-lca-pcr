---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-sound-or-visual-signalling-apparatus-except-for-cycles-or-motor-vehicles-d4a27639
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other electric sound or visual signalling apparatus, except for cycles or motor vehicles, and except electromechanical traffic control equipment for transport facilities

## 1. Scope and Applicability

This PCR applies to the factory-gate production of complete electric apparatus whose principal function is to provide a sound or visual signal and that falls within CPC 3.0 subclass 46929. It covers apparatus such as industrial or general-purpose buzzers, sirens, bells, beacons, annunciators, and visual indicator panels when they are not classified as burglar or fire alarms and are not made for cycles, motor vehicles, or electromechanical traffic control at transport facilities.

The PCR covers purchased component manufacture through linked upstream datasets and the foreground receipt, assembly, optional cleaning, functional testing, finishing needed for delivery, and factory-gate packaging of the apparatus. It excludes use-stage electricity, installation, maintenance, distribution after the factory gate, and end-of-life unless the study expands the boundary and reports those stages separately. A data producer must add every actual bill-of-materials component, auxiliary, packaging item, waste, and direct emission as its own atomic exchange; the common rows below are a minimum pattern, not a substitute for a product-specific bill of materials.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-sound-or-visual-signalling-apparatus-except-for-cycles-or-motor-vehicles-d4a27639 |
| classification_refs | CPC 3.0: 46929 |
| covered_products | Complete electric sound-signalling or visual-signalling apparatus in CPC 46929, including single-mode and combined sound-and-light devices |
| excluded_products | Burglar or fire alarms and similar apparatus in CPC 46921; signalling equipment for cycles or motor vehicles; electromechanical traffic control equipment for transport facilities; components supplied separately; audio reproduction equipment |
| representative_product | A market-ready electric sound or visual signalling apparatus that has passed declared functional tests |
| production_route | Receipt of purchased components, device assembly, optional soldering or cleaning, functional testing, final preparation, and packaging; in-house component manufacture is added when performed |
| market_state | Complete, conforming, packaged where applicable, and ready to leave the manufacturing site |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a complete electric apparatus that emits the declared sound or visual signal |
| How much | 1 kg of conforming apparatus at the factory gate, excluding separately reported transport packaging mass |
| How well | Meets the declared signalling function, rated electrical characteristics, functional test, and applicable product conformity requirements |
| How long or cycle | One production lot; service life is a required qualifier but is not embedded in this mass-based production reference |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other electric sound or visual signalling apparatus, except for cycles or motor vehicles, and except electromechanical traffic control equipment for transport facilities `a17e1609-603f-43f6-beec-b5a86d7d295a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | apparatus model and signalling mode; sound-output or luminous-output specification; rated voltage and power supply; enclosure material and ingress rating where relevant; functional test criterion; service-life assumption; production geography and reference year; packaging inclusion; regulatory or conformity regime |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based component, packaging, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry or as-received mass consistently, state the basis, exclude transport packaging from the 1 kg product denominator, and report that packaging as separate input rows. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter basis and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose voltage level, grid geography, contract mix, and whether transformer or internal distribution losses are included. |
| `water_mass` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass measurement; if volume is metered, convert with a measured or documented density for the applicable temperature and state the conversion basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased components, auxiliaries, and packaging as received at the signalling-apparatus manufacturing site |
| starting_condition_role | Foreground gate at receiving; upstream production and inbound supply burdens remain represented by linked supplier or secondary datasets |
| product_classification_scope | Complete CPC 46929 apparatus only; separately supplied components and excluded signalling categories retain their own identities |
| recursive_input_rule | If an unfinished or subcontracted CPC 46929 apparatus enters the foreground, record it as one product input with an upstream dataset and exclude the already represented operations from the receiving site's foreground to prevent recursion and double counting. |
| upstream_dataset_requirement | Every purchased component, material, auxiliary, energy carrier, water input, and packaging item requires a geographically and technologically appropriate upstream dataset or a documented data gap. |
| disclosure | Declare purchased-versus-in-house component scope, soldering and cleaning route, product variant, rejects, packaging boundary, treatment destinations, geography, reference year, and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | product system | Include receipt, assembly, optional soldering and cleaning, functional testing, rework attributable to the lot, final preparation, and packaging through release at the factory gate; link upstream datasets for every input. | `us-epa-electronics-sector-1995` |
| `boundary_variant_inventory` | bill of materials and route | Record each actual component, auxiliary, packaging item, waste, and direct emission separately; apply conditional common rows only when present and disclose omitted route steps. | `us-epa-electronics-sector-1995` |
| `boundary_exclusions` | category identity | Exclude CPC 46921 burglar or fire alarms, cycle or motor-vehicle signalling equipment, and electromechanical traffic control equipment for transport facilities from this PCR. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `apparatus_manufacture` | Signalling apparatus assembly, testing, and factory-gate preparation | `required` | Always | Foreground manufacture | 1 kg conforming apparatus at factory gate |

### Process: Signalling apparatus assembly, testing, and factory-gate preparation (`apparatus_manufacture`)

This process covers receipt of purchased parts, mechanical and electrical assembly, route-specific cleaning, functional testing, rework attributable to the production lot, and packaging before factory release. If printed-board population, enclosure fabrication, coating, or another component-making operation occurs on site, add that operation and all of its atomic exchanges rather than hiding them in these rows.

#### Inputs

##### Product flows

###### Populated printed wiring board (`assembled_pwb`)

Record the purchased populated board mass when a board assembly crosses the site boundary. The UUID remains unresolved because the state-100 candidates did not verify a populated delivery state.

- Selected flow: Populated printed wiring board assembly
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted populated-board mass issued to the production lot, including replacements consumed in rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_records`
- Sources: `us-epa-electronics-sector-1995`

###### Audible signalling element (`buzzer_siren_element`)

Record this component only for an apparatus using a buzzer or siren element; other sound-producing technologies must be added as their own atomic product rows.

- Selected flow: Buzzer or siren element `b511a29d-984d-4699-81c9-d04d779e2ac2`
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted buzzer-or-siren-element mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_records`

###### Visual signalling LED module (`led_module`)

Record this component only for a visual-signalling apparatus that contains an LED module; non-LED light sources must be added as their own atomic product rows.

- Selected flow: LED module `f0e13a6e-6380-4372-98a0-899623339d91`
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted LED-module mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_records`

###### Plastic housing (`plastic_housing`)

Record this component only when a complete plastic housing is purchased. A metal housing or in-house moulding route must be represented with separate, material-specific rows.

- Selected flow: Plastic housing `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted plastic-housing mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_records`

###### Purchased electricity (`electricity`)

Record electricity delivered to assembly, cleaning, testing, rework, and factory-gate preparation equipment, allocating shared meters according to the calculation rule below.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or allocated purchased electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`

###### Aqueous-cleaning process water (`process_water`)

Record process water only when it is supplied to aqueous cleaning or rinsing within the foreground. Cooling water and sanitary water require separate identities and must not be merged into this row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded process water supplied to the applicable production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate for the aqueous-cleaning route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `us-epa-electronics-sector-1995`

###### Corrugated board box (`corrugated_box`)

Record the mass of the converted corrugated box supplied with the factory-gate product. Other packaging components must be added as separate atomic rows.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Sum corrugated-box mass issued for conforming units in the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate, with box mass excluded from the denominator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_records`

##### Waste flows

No waste input is prescribed. Record any incoming waste used as a material or any waste received for treatment as a separate atomic row with its actual identity and boundary role.

##### Elementary flows

No elementary input is prescribed. Add directly abstracted water, land occupation, or other elementary inputs only when they cross the foreground boundary and are measured or calculated for the studied route.

#### Outputs

##### Product flows

###### Conforming reference apparatus (`reference_product`)

Record only units that pass the declared release test and satisfy the reference-product qualifiers.

- Selected flow: Other electric sound or visual signalling apparatus, except for cycles or motor vehicles, and except electromechanical traffic control equipment for transport facilities `a17e1609-603f-43f6-beec-b5a86d7d295a`
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass of conforming apparatus released at the factory gate, excluding separately reported transport packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming apparatus at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_reject_records`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Rejected populated printed wiring boards (`waste_populated_pwb`)

Record rejected or scrapped populated boards separately from bare-board scrap, solder dross, metal scrap, plastics, and complete rejected apparatus.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass handed to the declared internal or external treatment route, net of successfully reworked boards
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming apparatus at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_reject_records`
- Sources: `us-epa-electronics-sector-1995`

##### Elementary flows

No default direct emission is prescribed. When soldering, solvent cleaning, coating, fuel combustion, or another on-site operation occurs, add every measured or calculated emitted substance as its own elementary-flow row and disclose the estimation method.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared operations | Prefer meter, batch, work-order, machine-time, or mass-based subdivision that assigns actual activity to the studied model and production lot before applying allocation. | |
| `allocation_shared_resources` | utilities and shared consumables | If subdivision is infeasible, allocate a shared resource using the closest documented causal driver, such as machine time for assembly electricity or cleaned board area for cleaning inputs; disclose the driver and sensitivity. | |
| `allocation_recycling` | production scrap and recycling | Report waste mass and destination separately. Do not credit avoided primary production or subtract revenue from the foreground inventory unless the chosen LCA method explicitly requires it; document any downstream recycling convention outside the measured factory inventory. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_and_packaging_records` | `apparatus_manufacture` | purchased component or packaging input | purchase receipt, bill of materials, issue record, specification | item identity; supplier; material or component state; received mass; issued quantity; unit mass; lot; rejects returned; packaging inclusion | Reconcile approved bill of materials and stock issues to supplier receipts; measure representative unit mass when records are count-based. | kg and item count | each production lot, aggregated for the reference period | representative continuous 12-month period or disclosed campaign | all manufacturing lines producing the declared model | Net issued mass = issued plus replacements minus unused returns; divide by conforming unpackaged product mass. | signed receiving records; calibrated balance records; bill-of-materials revision; reconciliation result |
| `cp_energy_records` | `apparatus_manufacture` | purchased electricity | utility meter, submeter, machine log | meter start and end; submeter coverage; machine time; production lot; downtime; conforming output mass; loss boundary | Prefer line or equipment submeters; otherwise allocate facility-meter consumption using documented machine time after excluding non-production loads. | kWh | meter interval and each production lot, aggregated monthly | representative continuous 12-month period or disclosed campaign | assembly, cleaning, testing, rework, and packaging equipment in scope | Convert allocated kWh to MJ by multiplying by 3.6; divide by conforming unpackaged product mass. | meter calibration; invoice reconciliation; allocation worksheet; downtime log |
| `cp_water_records` | `apparatus_manufacture` | aqueous-cleaning process water | water meter, batch sheet | meter start and end or batch volume; water identity; density basis; cleaning route; lot; conforming output mass | Read a dedicated meter or sum batch additions for production cleaning only; exclude cooling and sanitary water. | kg or measured volume with density | each cleaning batch, aggregated monthly | representative continuous 12-month period or disclosed campaign | all in-scope aqueous-cleaning equipment | Convert volume to mass using documented density when needed; divide by conforming unpackaged product mass. | meter calibration; batch-sheet sign-off; density source; water-balance reconciliation |
| `cp_output_and_reject_records` | `apparatus_manufacture` | conforming product and rejected populated-board output | release log, scale record, nonconformance and waste manifest | model; lot; passed units; net unit mass; packaging mass; failed units; rework outcome; waste identity; waste mass; destination | Reconcile released units and measured net mass with production and nonconformance records; weigh segregated populated-board waste at hand-off. | kg and item count | each production lot and waste hand-off | representative continuous 12-month period or disclosed campaign | all lines and waste collection points in scope | Conforming mass excludes separately reported packaging; waste mass excludes items successfully returned to production; normalize both to 1 kg conforming product. | calibrated scale; signed release record; nonconformance disposition; waste manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | all mass-based rows | normalized kg/kg = attributable exchange mass / conforming unpackaged apparatus mass | attributable exchange mass; conforming unpackaged apparatus mass | kg exchange per kg reference product | |
| `calc_count_to_mass` | count-based components and boxes | input mass = net issued item count × representative measured or supplier-declared unit mass | item count; unit mass; unused returns | kg input | |
| `calc_electricity` | purchased electricity | MJ/kg = attributable metered kWh × 3.6 / conforming unpackaged apparatus mass | metered kWh; allocation driver where required; conforming unpackaged apparatus mass | MJ electricity per kg reference product | |
| `calc_water_mass` | volume-metered process water | kg/kg = measured volume × documented density / conforming unpackaged apparatus mass | volume; density; conforming unpackaged apparatus mass | kg process water per kg reference product | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product, components, packaging, and waste | Match each row to the actual model, delivered state, material or component identity, and treatment role; do not substitute an umbrella flow or an unpopulated board for a populated assembly. | specification, bill of materials, supplier record, waste manifest, and UUID audit |
| `dq_completeness` | foreground inventory | Reconcile component issues, utilities, conforming output, rejects, and all route-specific auxiliaries, wastes, and direct emissions for the same time and site scope; explain every excluded operation. | mass and energy reconciliation; completeness checklist; exclusion log |
| `dq_temporal` | foreground records | Use a representative continuous 12-month period where available; otherwise disclose the campaign, seasonality, utilisation, downtime, and representativeness limitation. | dated meters, invoices, lot records, and production calendar |
| `dq_hazardous_materials` | homogeneous materials and technical documentation | Where the declared market regime applies, retain supplier declarations or analytical evidence for regulated substances at the applicable homogeneous-material level and identify exemptions used; this is a conformity disclosure, not an empirical inventory range. | supplier material declarations, test reports, technical documentation, and `eu-rohs-2011-65` |
| `dq_geography_technology` | upstream datasets | Match supplier geography, component state, electricity voltage and mix, water delivery, and waste treatment technology; document proxies and their expected influence. | supplier location, dataset metadata, utility contract, and treatment manifest |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Confirm CPC 46929 identity, the declared sound or visual signalling function, complete-product state, exclusions, and all required qualifiers before accepting the dataset. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference` | normalization | Confirm that every amount uses the same conforming unpackaged factory-gate product mass and that separately reported packaging is excluded from the 1 kg denominator. | |
| `validate_routes` | inventory completeness | For each actual route, verify that all bill-of-materials inputs, auxiliaries, utilities, rejects, wastes, and direct emissions appear as atomic exchanges; justify every conditional row marked not applicable. | `us-epa-electronics-sector-1995` |
| `validate_reconciliation` | foreground records | Reconcile received or issued component mass, conforming output, rework, and waste over the same period; investigate material discrepancies and meter-allocation gaps before release. | |
| `validate_uuid_property_unit` | UUID-bearing rows | Confirm state-code-100 UUID identity, flow type, product or waste state, property, unit group, and official Chinese base name; reject proxies or mismatched candidate states. | |
| `validate_regulated_substances` | declared conformity regime | Treat substance thresholds as conformity limits only, retain applicable evidence and exemptions, and do not reinterpret them as production inventory ranges. | `eu-rohs-2011-65` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for a declared CPC 46929 apparatus model and manufacturing route |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product or component system models whose apparatus identity, route, geography, time, packaging boundary, and performance qualifiers are compatible with the published metadata |
| excluded_use | CPC 46921 alarm apparatus, vehicle signalling equipment, transport-facility electromechanical traffic control, component-only products, or a different technology represented without adjustment |
| required_metadata | canonical PCR id; CPC reference; model and signalling mode; performance and test criteria; rated electrical characteristics; service-life assumption; bill-of-materials revision; purchased-versus-in-house scope; site and geography; reference period; packaging boundary; allocation; waste destinations; conformity regime; unresolved data gaps |
| required_quality_disclosure | primary-data coverage; meter and mass reconciliation; conditional route decisions; proxies; UUID gaps; upstream dataset geography and technology; regulated-substance evidence where applicable; uncertainty and exclusions |
| update_trigger | Change in model or bill of materials, signalling or power technology, manufacturing or cleaning route, supplier or geography, electricity mix, packaging, waste treatment, conformity regime, allocation method, or a material shift in measured inputs, output, or rejects |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 46929 product-classification identity |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-05) | Placement of CPC 46929 beside the separate CPC 46921 alarm subclass and category exclusions |
| `us-epa-electronics-sector-1995` | `official_guidance` | United States Environmental Protection Agency, *Profile of the Electronics and Computer Industry*, EPA/310-R-95-002, September 1995, https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/elecmpsn-2.pdf (retrieved 2026-09-05) | Electronics assembly, soldering, cleaning, testing, packaging, and waste process decomposition |
| `eu-rohs-2011-65` | `official_guidance` | Directive 2011/65/EU of the European Parliament and of the Council of 8 June 2011, Official Journal L 174, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32011L0065 (retrieved 2026-09-05) | Homogeneous-material definition, regulated-substance conformity evidence, and technical-documentation disclosure |
