---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.magnetic-media-not-recorded-except-cards-with-a-magnetic-stripe
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Magnetic media, not recorded, except cards with a magnetic stripe

## 1. Scope and Applicability

This PCR produces foreground manufacturing data for unrecorded magnetic recording media: tape in rolls, cassettes or cartridges and flexible magnetic disks. Exclude hard-disk drives, optical media, solid-state memory, recorded content and magnetic-stripe cards. The current CPC title is verified against `un-cpc-3-0-structure-2025`; detailed inclusions and exclusions use the explicitly historical `un-cpc-2-1-magnetic-media-note`.

The representative route is particulate coating on polymer film, followed by drying and finishing. The barium-ferrite pigment and polyester-urethane binder cards are conditional examples, not a mandatory combined recipe. A concrete dataset must use its actual formulation. Metal-evaporated tape, different pigments, substrates or binders require a documented route adaptation with separate atomic exchanges, measured yields and energy. Do not apply coating defaults to deposition. Manufacturing-specific solvent reconciliation, format-qualified accepted yield, and recursive coated-web inputs justify this distinct methodology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.magnetic-media-not-recorded-except-cards-with-a-magnetic-stripe |
| classification_refs | CPC 3.0 47530 |
| covered_products | Unrecorded flexible magnetic tape and disks, including integral cassette/cartridge assemblies. |
| excluded_products | Hard-disk drives; optical and solid-state media; recorded media; magnetic-stripe cards; storage services. |
| representative_product | One specified unrecorded particulate-coated magnetic tape format at factory gate. |
| production_route | Purchased film and formulation ingredients → dispersion/coating → drying → calendering/slitting → testing and packing; purchased coated-web finishing is conditional. |
| market_state | New, accepted, unrecorded medium; declare bulk roll, bare disk or assembled cassette/cartridge separately. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of one declared magnetic recording medium ready for subsequent recording. |
| How much | 1 kg net accepted medium at factory gate; integral housing included only for an assembled product; shipping packaging excluded. |
| How well | Meets declared format, dimensions, magnetic/read-write acceptance tests and blank-state specification; native capacity or recording duration is supplementary, never assumed from mass. |
| How long or cycle | One manufacturing delivery; no assumed archival lifetime, reuse count or storage-service duration. |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Magnetic media, not recorded, except cards with a magnetic stripe `40bcd8b1-541d-4314-9e57-fc1250fd692e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | format and intended recording function; bulk/bare/assembled state; net mass and packaging boundary; film polymer and thickness; pigment and binder formulation; tape width and length or disk dimensions; native uncompressed capacity or recording duration with test conditions; blank-state definition including any factory servo information; acceptance tests and rejected yield; coating/deposition/finishing route; site, geography and reporting period; solvent capture/recovery/destruction system; upstream boundary. |

Declare every required qualifier in the foreground package. Mass normalization does not establish functional equivalence between formats or storage capacities.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | Accepted product | Mass | kg | Use measured accepted net mass M, separating integral housing from removable shipping packaging. Convert counts with measured same-format mean mass; film area uses measured areal mass. |
| `formulation_basis` | Coating ingredients | Mass | kg | Record each polymer, pigment and solvent separately; reconcile wet deliveries with measured solids/composition and inventory changes. Do not record both a supplied solution and all its constituents as additional inputs. |
| `energy_conversion` | Electricity and gas | Energy; Volume | MJ; m3 | Electricity: 1 kWh = 3.6 MJ exactly. Gas volume must declare temperature, pressure, dry/wet state and any volume correction; use supplier calorific value only when converting gas to energy. |
| `solvent_species` | Solvent balance | Mass | kg | Use species mass, not total VOC mass, for each solvent input and emission. Convert concentration and exhaust volume to a common temperature, pressure and moisture basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of film, formulation constituents and components, or purchased coated magnetic web, at the declared manufacturing site. |
| starting_condition_role | Foreground gate-to-gate manufacturing entry; supplier production remains upstream. |
| product_classification_scope | CPC 3.0 47530 |
| recursive_input_rule | Purchased same-category coated web retains supplier output state and upstream dataset; trace once to the declared supplier boundary. Never link the final process back to itself or re-add purchased web ingredients in foreground. |
| upstream_dataset_requirement | Link representative supplier datasets for each purchased exchange and delivered energy; include delivery transport once, explicitly inside or outside supplier coverage. |
| disclosure | State integrated coating versus finishing-only, captured versus emitted solvent, internal recycling, outsourced operations, packaging, utilities and treatment boundaries; distinguish gate-to-gate results from linked cradle-to-gate results. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing` | foreground | Include actual preparation, coating, drying, finishing and acceptance testing, with attributable cleanroom and solvent-management demand. For floppy disks use punching and the declared orientation treatment; do not assume the tape orientation step. | `epa-ap42-magnetic-tape` |
| `boundary_solvents` | solvent_control | Include storage, mixing, coating, cleaning, waste handling and recovery losses; distinguish internal captured solvent from final releases and exported waste. | `epa-magnetic-tape-risk-review` |
| `boundary_extension` | dataset_instantiation | The cards are a representative starting inventory. Reconcile against the actual recipe, utility meters, waste ledger and emissions permit: add each actual lubricant, crosslinker, pigment, packaging component, refrigerant leak and combustion pollutant as its own atomic exchange where present. Absence requires records; an omitted card is not a cut-off. | `quantegy-magnetic-tape-components` |
| `boundary_downstream` | lifecycle | Stop at dispatch of accepted blank media. Downstream recording, storage drives, data-centre operation and end-of-life require separate scenarios; no avoided storage-energy credit in manufacturing. Include external production-waste treatment through linked datasets. | `un-cpc-2-1-magnetic-media-note` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `manufacture` | Media coating and finishing | required | All datasets; actual route declared. | foreground production | 1 kg accepted medium |
| `utilities` | Shared site utilities and direct carbon | required | All datasets; each absent exchange documented. | attributable support | Same accepted medium |
| `solvent_control` | Solvent recovery and final releases | conditional | Solvent-bearing coating, cleaning or recovered solvent is handled onsite. | waste and emissions accounting | Same accepted medium |

Common meters are assigned once. Internal mix, coated-web transfers and recovered-solvent loops are process records, not additional purchases or avoided-product credits. Keep detailed operation meters in collection records.

### Process: Media coating and finishing (`manufacture`)

#### Inputs

##### Product flows

###### Base web (`pet_base_film`)

inclusion_condition: PET web coated on site; exclude purchased coated-web mass.

- Selected flow: Polyethylene terephthalate base film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_materials and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `quantegy-magnetic-tape-components`

###### Magnetic pigment (`barium_ferrite`)

inclusion_condition: Barium-ferrite particulate formulation only; record pigment grade and purity.

- Selected flow: Barium ferrite magnetic pigment powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_materials and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `fujifilm-recording-media`

###### Binder solids (`polyester_urethane`)

inclusion_condition: Only when this polymer is present; count dry resin separately from each solvent in a supplied solution.

- Selected flow: Polyester polyurethane binder resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_materials and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `loc-magnetic-tape-binder-research`

###### Backcoat carbon (`carbon_black`)

inclusion_condition: Carbon-black backcoat or conductive additive is actually used.

- Selected flow: Carbon black `104238ef-9017-45d1-a77e-556271cd3f60`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_materials and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

###### Fresh coating and cleaning solvent (`mek_input`)

inclusion_condition: MEK used for coating or cleaning; include solvent supplied in resin solutions; exclude internal recovery turnover.

- Selected flow: Methyl ethyl ketone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_solvents and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solvents`
- Sources: `epa-ap42-magnetic-tape`

###### Fresh coating and cleaning solvent (`toluene_input`)

inclusion_condition: Toluene used for coating or cleaning; include solvent in supplied mixtures; exclude internal recovery turnover.

- Selected flow: Toluene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_solvents and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solvents`
- Sources: `epa-ap42-magnetic-tape`

###### Purchased coated magnetic web (`purchased_coated_web`)

inclusion_condition: Finishing from purchased unrecorded coated web; specify roll state and omit upstream coating operations from foreground only.

- Selected flow: Magnetic media, not recorded, except cards with a magnetic stripe `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_materials and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `un-cpc-3-0-structure-2025`

###### Purchased integral housing (`cartridge_housing`)

inclusion_condition: Tape cartridge assembled at this site; record housing bill of materials and supplier boundary.

- Selected flow: Empty plastic magnetic tape cartridge housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_materials and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `epa-magnetic-tape-risk-review`

###### Shipping box (`corrugated_box`)

inclusion_condition: Corrugated box crosses the dispatch boundary; packaging mass is excluded from reference product mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_materials and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

#### Outputs

##### Product flows

###### Accepted unrecorded medium (`reference_product`)

inclusion_condition: Always; one declared format and delivery state per dataset.

- Selected flow: Magnetic media, not recorded, except cards with a magnetic stripe `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Accepted output M / M = 1; retain measured M and format-specific rejected yield.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Coated web reject (`coated_tape_trim`)

inclusion_condition: Coated PET trim or rejected tape leaves the site for treatment; exclude internal rework.

- Selected flow: Waste magnetic-coated PET tape offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_waste and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-ap42-magnetic-tape`

###### Rejected coating solids (`coating_sludge`)

inclusion_condition: Discarded pigment/binder coating sludge; measure wet mass, dry solids and solvent content.

- Selected flow: Waste magnetic coating sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_waste and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-magnetic-tape-risk-review`

### Process: Shared site utilities and direct carbon (`utilities`)

#### Inputs

##### Product flows

###### Purchased electricity (`electricity`)

inclusion_condition: Always where purchased; include cleanroom, drying, finishing, testing, recovery and refrigeration demand once.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_utilities and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`

###### Combustion fuel (`natural_gas`)

inclusion_condition: Gas-fired drying, heating or oxidizer support fuel is used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_utilities and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`

###### Purchased process water (`process_water`)

inclusion_condition: Water supplied for cleaning, humidification or cooling makeup; count makeup rather than circulation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_utilities and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`

#### Outputs

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_co2`)

inclusion_condition: Onsite fuel combustion or oxidation of fossil solvent; include both carbon sources once; exclude upstream power emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply carbon_balance to measured fuel and destroyed-solvent fossil carbon, then divide by M.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carbon`

### Process: Solvent recovery and final releases (`solvent_control`)

#### Outputs

##### Waste flows

###### Discarded liquid solvent (`spent_solvent`)

inclusion_condition: This mixed spent-solvent stream is transferred for external recovery or treatment; record composition; separate sludge.

- Selected flow: Spent non-halogenated MEK-toluene coating solvent mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_waste and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-magnetic-tape-risk-review`

###### Solvent-bearing aqueous effluent (`recovery_wastewater`)

inclusion_condition: Aqueous condensate or recovery water leaves for wastewater treatment; record water mass and individual dissolved solvents.

- Selected flow: Wastewater from magnetic tape solvent recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the attributable period quantity under cp_waste and divide by accepted output M using normalize.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-magnetic-tape-risk-review`

##### Elementary flows

###### MEK released to air (`mek_air`)

inclusion_condition: MEK is released after capture/control, including fugitive and cleaning sources.

- Selected flow: methyl ethyl ketone `fe0acd60-3ddc-11dd-afc7-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_solvents species measurements or solvent_balance, with capture_control only as a non-additive alternative, then divide by M.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solvents`
- Sources: `epa-ap42-magnetic-tape`

###### Toluene released to air (`toluene_air`)

inclusion_condition: Toluene is released after capture/control, including fugitive and cleaning sources.

- Selected flow: Toluene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_solvents species measurements or solvent_balance, with capture_control only as a non-additive alternative, then divide by M.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted medium of the declared format
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solvents`
- Sources: `epa-ap42-magnetic-tape`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared_processes | Use cp_allocation to assign dedicated material and energy records directly. Allocate shared utilities with measured machine demand and run time; coating-line demand may use coated area and metered drying load when causal. Record the allocation driver and sensitivity. Mass-only allocation across different tape formats requires justification. |  |
| `allocation_recovery` | solvent_reuse | Internal solvent recovery reduces fresh solvent purchases but is neither a sale nor an avoided-product credit. Record recovery burdens and external recovered-solvent exports separately; if exports have a product function, add a specific product exchange and document the treatment/allocation convention without an automatic substitution credit. | `epa-ap42-magnetic-tape` |
| `allocation_rejects` | accepted_yield | All production and rework burdens remain with accepted output M. Track rejected coated film and coating sludge separately; no negative raw-material input for scrap. Document any external recycling allocation explicitly. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | manufacture | Accepted reference medium | Batch acceptance record | format; batch_id; gross_mass; tare_mass; housing_mass; accepted_count; rejected_mass; tape_area; native_capacity; test_method; blank_state | Calibrated weighing and format-specific release test | kg; m2; count | Each batch | All batches in declared reporting year or disclosed representative campaign | Manufacturing and dispatch site | Sum accepted net mass M by format; retain rejected mass and test failures | Scale calibration, product specification, release certificate |
| cp_materials | manufacture | Each material and component | Stock and batch ledger | row_id; supplier; grade; opening_stock; receipts; closing_stock; returns; dry_fraction; composition; area; component_mass | Weighing, warehouse reconciliation, supplier composition records | kg; m2 | Each receipt and batch; period stocktake | Same period as cp_output | Declared site plus named component suppliers | Consumption = opening + receipts - closing - returns; separate each constituent; normalize by M | Invoices, SDS, bill of materials, supplier scope and balance closure |
| cp_solvents | solvent_control | MEK and toluene individually | Species solvent ledger and emissions records | species; fresh_input; opening_stock; closing_stock; recovered_internal; exported_solvent; waste_species_mass; residual_in_product; destroyed_mass; exhaust_flow; concentration; capture_fraction; destruction_fraction; uptime | Composition analysis, mass meters, matched stack concentration/flow measurements, leak survey | kg; kg/m3; m3 | Each batch ledger; representative operating and upset emission tests | Same production period; align purchases, stocks and waste shipments | All solvent-handling areas and control outlets onsite | Species balance or measured emissions / M; do not treat internal recovery as an external loss | Analytical calibration, capture tests, control uptime, inventory reconciliation |
| cp_utilities | utilities | Electricity, gas and makeup water separately | Submeter records | meter_id; opening_reading; closing_reading; unit; gas_temperature; gas_pressure; water_density; operation_hours; allocation_fraction; supplier_boundary | Read calibrated submeters; reconcile to invoices | MJ; kWh; m3; kg | Shift or continuous readings; monthly reconciliation | Same period as cp_output, including startup and downtime loads | All attributable production and support equipment | Net attributable meter differences / M after documented conversion | Meter calibration, bills, allocation evidence |
| cp_waste | manufacture | Each discharged waste stream | Waste transfer record and analysis | row_id; wet_mass; dry_solids; solvent_species_fraction; destination; treatment; opening_stock; closing_stock; internal_rework | Weigh each stream and analyse representative composition | kg | Each shipment; samples covering recipe changes | Same period; correct temporary waste storage changes | Site outlet and receiving treatment operator | Generated and transferred quantities reconciled; each stream / M; water and solvent fractions remain within its wet mass | Transfer documents, laboratory results, treatment identity |
| cp_carbon | utilities | Direct fossil carbon dioxide | Fuel and solvent carbon record | fuel_carbon; oxidized_solvent_carbon; fossil_fraction; unoxidized_carbon; stack_co2; carbon_in_co; reporting_period | Fuel composition and solvent destruction analysis, cross-check stack measurement | kg C; kg CO2 | Matched production campaigns and fuel changes | Same period as cp_output | Onsite combustion and solvent oxidation | CO2 from oxidized fossil carbon using molecular mass ratio; divide by M | Composition certificates and closed carbon balance |
| cp_allocation | utilities | Shared burden assignment | Production scheduling and meter attribution | equipment_id; product_format; run_hours; measured_power; coated_area; drying_load; allocation_driver; allocated_fraction | Join production logs with shared meter totals | h; m2; MJ; fraction | Each campaign; period reconciliation | Same period as cp_output | Shared equipment and control systems | Fractions sum to unity for shared burden; retain unattributed load and investigate | Causal driver justification and sensitivity result |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | All rows | q_i = attributed period quantity_i / M; M > 0. Reference output = M/M = 1 kg/kg. Keep period totals and allocation fractions. | cp_output; cp_allocation; linked row protocol | q_i |  |
| `film_conversion` | Base film and coated web | mass = measured area × measured areal mass of the same film state; width × length gives tape area. Include only measured coating and housing in final mass. | cp_materials; cp_output | kg |  |
| `solvent_balance` | MEK; toluene | Air release = fresh external input + opening stock - closing stock - external recovered export - solvent in exported waste - solvent retained in accepted product - destroyed solvent. Internal recovery cancels. A negative residual requires investigation; it is not a zero emission. With incomplete stocks or destruction data use measured releases instead. | cp_solvents; cp_waste; cp_materials | kg species | `epa-ap42-magnetic-tape` |
| `capture_control` | Controlled solvent sources | For a separately measured evaporated species load L, outlet-plus-fugitive release = L × (1 - capture_fraction × removal_fraction). Use actual uptime and uncaptured sources. Recovery is removal, not chemical destruction; residual captured solvent requires stock/waste accounting. Do not add this estimate to a plantwide mass-balance estimate. | cp_solvents | kg species | `epa-ap42-magnetic-tape` |
| `carbon_balance` | Fossil carbon dioxide | CO2 = fossil carbon actually oxidized to CO2 × molecular mass(CO2)/atomic mass(C). Account separately for fuel and destroyed solvent; subtract carbon remaining as CO, organics or solids; retain chosen atomic-weight convention. | cp_carbon | kg CO2 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_completeness` | Foreground package | Reconcile all actual recipe ingredients, packaging and emissions with the representative cards; retain atomic extensions and documented absence decisions. | cp_materials; cp_waste; cp_solvents |
| `quality_representativeness` | All measured amounts | Disclose time, site and technology coverage, sampling, uncertainty, detection limits, missing periods and supplier proxies. Do not substitute historical EPA factors for site measurements. | Linked protocols and source applicability assessment |
| `quality_ranges` | Quantitative priors | No external numeric priors are prescribed. Any later inferred range requires at least two independent original-text sources with compatible boundary, unit and product state, plus geographic/technological synthesis. Retain measured values and uncertainty meanwhile. | Foreground protocols and independence assessment |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | Require complete qualifiers, a single declared output state, positive accepted mass, and evidence of blank-media acceptance. A generic flow name alone does not define an interchangeable recording service. | `un-cpc-3-0-structure-2025` |
| `validate_reconciliation` | inventory | Each physical exchange needs one concrete identity, compatible unit, source records and matching process. Confirm total accepted output plus rejects and stock changes against inputs; investigate balance residuals using measurement uncertainty rather than a fabricated tolerance. |  |
| `validate_solvents` | solvent_control | Check species completeness, capture versus removal, internal recovery cancellation, residual-in-waste and destruction accounting. Do not publish both full solvent volatilization and full oxidation of that same solvent. | `epa-ap42-magnetic-tape` |
| `validate_boundaries` | upstream_links | Reject circular coated-web links, duplicated utility or transport burdens, and missing external waste treatment. Require explicit treatment of conditional operations and actual exchanges absent from the representative cards. |  |
| `validate_comparisons` | downstream_use | Allow manufacturing comparison only after matching format, output state, capacity/quality, boundary and allocation. Storage-service comparison requires a separate functional scenario and cannot follow from kg-normalized results alone. | `quantegy-magnetic-tape-components` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supplier media-manufacturing input to a separately specified recording/storage model. |
| allowed_use | Matching format/state manufacturing process, with supplier and waste-treatment links and disclosed uncertainty. |
| excluded_use | Unqualified interchange of tape, floppy disk, optical disk, SSD or hard-disk drive; data-centre operational savings; universal archive lifetime. |
| required_metadata | All reference qualifiers; reporting period; operator; geography; net output; process route; packaging; suppliers; allocation; transport and treatment boundaries. |
| required_quality_disclosure | Primary data share, missing exchanges, proxy identities, measurement uncertainty, solvent/carbon closure, conditional exclusions and range-evidence limitations. |
| update_trigger | Format, formulation, substrate, supplier, manufacturing route, control system, utility mix or acceptance specification changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | [CPC 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); retrieved 2026-09-09; independence_key: `un-cpc-3-0-structure-2025` | CPC 3.0 product title and neighbouring category distinctions; row 47530. |
| `un-cpc-2-1-magnetic-media-note` | `official_guidance` | [CPC Version 2.1, subclass 47530 explanatory note](https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/47530); retrieved 2026-09-09; independence_key: `un-cpc-2-1-47530` | Historical detailed scope: tapes, cartridges, cassettes, floppy disks; excludes hard disks, recorded media and stripe cards. Used as semantic context alongside the current 3.0 title, not represented as 3.0 explanatory notes. |
| `epa-ap42-magnetic-tape` | `official_guidance` | [AP-42 Section 4.2.2.13 Magnetic Tape Manufacturing, September 1990, reformatted January 1995](https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2n.pdf); retrieved 2026-09-09; independence_key: `epa-ap42-4-2-2-13-1990` | Sections 4.2.2.13.1-3 and process diagram: coating and finishing, solvent capture versus destruction, solvent balance. Historical US guidance supports mechanisms only; no default consumption or control efficiencies adopted. |
| `epa-magnetic-tape-risk-review` | `official_guidance` | [Hazardous Air Pollutant Emissions From Magnetic Tape Manufacturing Operations: Background Information for Technology and Residual Risk Review](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100923X.TXT); retrieved 2026-09-09; independence_key: `epa-9100923x` | Chapter 2, sections 2.1.1 and 2.1.3: mix preparation, cleaning, casings, solvent recovery, waste and wastewater origins. No legal limits or historical emission proportions adopted. |
| `quantegy-magnetic-tape-components` | `literature` | [A View of Preservation from a Magnetic Tape Manufacturer's Perspective, Quantegy, hosted by Library of Congress](https://www.loc.gov/static/programs/national-film-preservation-board/documents/tvquantegy.pdf); retrieved 2026-09-09; independence_key: `quantegy-view-preservation` | Pages 1-2: PET base film, backcoat, binder, lubricant and magnetic layer distinctions; format-specific physical design. No service-life values adopted. |
| `loc-magnetic-tape-binder-research` | `official_guidance` | [Magnetic Tape Sticky Shed Research: Characterization, Diagnosis, and Treatment](https://www.loc.gov/preservation/scientists/projects/sticky_shed.html); retrieved 2026-09-09; independence_key: `loc-sticky-shed-research` | Background and project description verified in downloaded official HTML: polyester-urethane binder in historical audio/video tapes; supports conditional binder identity, not a universal modern recipe or lifetime. |
| `fujifilm-recording-media` | `literature` | [Recording Media, Fujifilm Global](https://global.fujifilm.com/en/about/corporate/field/storage); retrieved 2026-09-09; independence_key: `fujifilm-global-recording-media` | Magnetic recording tape for computers section: commercial barium-ferrite tape route. No performance or lifetime claim imported. |
