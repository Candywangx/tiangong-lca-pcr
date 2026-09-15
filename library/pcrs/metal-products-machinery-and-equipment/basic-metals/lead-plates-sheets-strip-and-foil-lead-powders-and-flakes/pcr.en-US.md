---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.lead-plates-sheets-strip-and-foil-lead-powders-and-flakes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lead plates, sheets, strip and foil; lead powders and flakes

## 1. Scope and Applicability

This PCR covers gate-to-gate manufacture of one declared semi-finished lead form: plate, sheet, strip, foil, metallic powder, or metallic flakes. The foreground begins with refined lead received at the site and ends with the declared product at the factory gate. Select only the applicable forming route and one declared output form.

It excludes primary and secondary lead production upstream of refined lead, distinct lead-alloy products, batteries, solder, finished fabricated articles, packaging manufacture, outbound distribution, use, and end-of-life treatment. Upstream refined-lead, electricity, and natural-gas supplies remain linked product inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.lead-plates-sheets-strip-and-foil-lead-powders-and-flakes |
| classification_refs | CPC 3.0: 41542, exact category context |
| covered_products | Lead plate, sheet, strip, foil, elemental metallic lead powder, and elemental metallic lead flakes, declared as one specific market form |
| excluded_products | Refined lead sold without conversion; distinct lead alloys; solder; batteries; finished articles; non-lead metal products |
| representative_product | One kilogram of the single declared lead plate, sheet, strip, foil, powder, or flake product at the factory gate |
| production_route | Refined-lead melting and casting followed by flat forming, atomization, or flake making, as applicable |
| market_state | Saleable semi-finished lead product with declared form, dimensions or particle specification, composition, surface condition, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One saleable semi-finished lead product in exactly one declared form covered by this PCR |
| How much | 1 kg net product mass, excluding packaging |
| How well | Conforming to the producer's declared composition, dimensions or particle-size specification, surface condition, and acceptance criteria |
| How long or cycle | At the factory gate after the applicable production batch |
| reference_flow_link | Exactly one of `out_lead_plate`, `out_lead_sheet`, `out_lead_strip`, `out_lead_foil`, `out_lead_powder`, or `out_lead_flakes`, matching the declared form |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Lead plate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; lead composition; thickness and width for flat products; particle-size distribution for powder or flakes; surface treatment; recycled-content method; route; site; period; net-mass and packaging boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | declared product output and reference flow | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize exchanges to 1 kg net saleable product; exclude packaging and record rejects or offcuts separately. |
| `energy_conversion` | electricity records | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity and multiply billed kWh by 3.6 to convert to MJ. |
| `gas_volume_conditions` | gaseous natural gas records | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report temperature, pressure, and dry or wet basis; do not combine natural gas with another fuel. |
| `mass_balance` | each process | Mass | kg | Reconcile lead-bearing inputs, product, scrap or dross, and measured lead releases over one period and disclose the residual. |

## 5. System Boundary

The foreground includes refined-lead receipt and handling, applicable melting and casting, applicable flat or particle forming, direct energy and fuel use, controlled fume or particulate capture, residual direct releases, and lead-bearing wastes or scrap. Melting and casting is required when performed at the reporting site; a dataset beginning from purchased cast slab shall disclose that starting condition and omit non-occurring melting exchanges.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Refined lead received at the site, or purchased cast lead slab when on-site melting does not occur |
| starting_condition_role | Upstream product input to the first foreground transformation |
| product_classification_scope | One declared CPC 41542 market form only; the category label is not a mixed-output reference product |
| recursive_input_rule | Internal same-category returns remain internal; purchased same-category lead feed is recorded once with its supplier dataset and not recursively expanded here |
| upstream_dataset_requirement | Link refined lead, purchased slab, electricity, and natural gas to representative upstream datasets |
| disclosure | Starting material, composition, recycled content, route, furnace and forming technology, controls, site, period, product form, and cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_system_boundary | Include controlled operations from refined-lead or disclosed slab receipt through the declared factory-gate product; link upstream supplies as product inputs. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-12-17-background` |
| `boundary_route_selection` | process_route | Include only route processes that occur for the declared form and mark other conditional routes not applicable. | `eu-jrc-nfm-bref-2017`; `cn103128297a-lead-powder-atomization` |
| `boundary_controlled_releases` | direct_emissions_and_residues | Include dross or scrap leaving the system and residual direct lead releases after actual controls; exclude upstream electricity emissions from foreground releases. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-12-17-background` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `melt_cast` | Refined-lead melting and casting | required | Required when melting or casting occurs on site; otherwise disclose purchased cast slab and mark this process not applicable | foreground conditioning | kg cast lead transferred to forming |
| `flat_forming` | Rolling and flat-product finishing | conditional | Include for declared plate, sheet, strip, or foil | foreground production | kg saleable flat product |
| `powder_atomization` | Lead-powder atomization and classification | conditional | Include for declared elemental metallic lead powder | foreground production | kg saleable lead powder |
| `flake_making` | Lead-flake formation and classification | conditional | Include for declared elemental metallic lead flakes | foreground production | kg saleable lead flakes |

### Process: Refined-lead melting and casting (`melt_cast`)

#### Inputs

##### Product flows

###### Refined lead feed (`in_refined_lead`)

Record refined lead entering the site before melting.

- Selected flow: Refined lead `fb2dea4d-384a-48ec-8736-55a664bc959b`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass charged to the furnace or kettle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable declared product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-nfm-bref-2017`

###### Melting electricity (`in_melt_electricity`)

Record electricity for melting, holding, casting, extraction, and assigned controls.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated melting-and-casting electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cast lead transferred from `melt_cast`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-nfm-bref-2017`

###### Direct-fired melting natural gas (`in_melt_natural_gas`)

Record gaseous natural gas only when combusted in melting or holding equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gas volume assigned to direct-fired melting and holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cast lead transferred from `melt_cast`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Lead-bearing melting dross (`out_lead_dross`)

Record dross skimmed from molten lead and transferred off site or to separate recovery.

- Selected flow: Lead-bearing melting dross
- Flow property / unit: Mass / kg
- Amount rule: measured dry-basis dross mass leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cast lead transferred from `melt_cast`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide from melting (`out_melt_fossil_co2`)

Record direct fossil carbon dioxide from on-site natural-gas combustion assigned to melting.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: facility-reported direct fossil carbon dioxide allocated to melting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cast lead transferred from `melt_cast`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Residual lead emission to air from melting (`out_melt_lead_air`)

Record direct residual lead after actual capture and abatement; use a more specific air compartment only with site evidence.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or permit-consistent mass balance assigned to melting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cast lead transferred from `melt_cast`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-12-17-background`

### Process: Rolling and flat-product finishing (`flat_forming`)

#### Inputs

##### Product flows

###### Flat-forming electricity (`in_flat_electricity`)

Record electricity for rolling, annealing, slitting, trimming, finishing, and assigned extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated flat-forming electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable declared flat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-ap42-12-17-background`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lead plate product (`out_lead_plate`)

Use this output only when plate is the single declared reference product form.

- Selected flow: Lead plate
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of saleable lead plate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`

###### Lead sheet product (`out_lead_sheet`)

Use this output only when sheet is the single declared reference product form.

- Selected flow: Lead sheet
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of saleable lead sheet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`

###### Lead strip product (`out_lead_strip`)

Use this output only when strip is the single declared reference product form.

- Selected flow: Lead strip
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of saleable lead strip
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`

###### Lead foil product (`out_lead_foil`)

Use this output only when foil is the single declared reference product form.

- Selected flow: Lead foil
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of saleable lead foil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Lead offcut and trim scrap (`out_lead_scrap`)

Record clean lead offcuts and trim leaving for external recycling; internal returns remain internal.

- Selected flow: Lead offcut and trim scrap
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable declared flat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass`
- Sources: `us-epa-ap42-12-17-background`

##### Elementary flows

###### Residual lead emission to air from flat forming (`out_flat_lead_air`)

Record residual lead released to air from rolling, cutting, or finishing after actual controls.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or permit-consistent mass balance assigned to flat forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable declared flat product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-12-17-background`

### Process: Lead-powder atomization and classification (`powder_atomization`)

#### Inputs

##### Product flows

###### Powder-route electricity (`in_powder_electricity`)

Record electricity for pressure-air supply, atomization auxiliaries, cooling, collection, screening, and extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated powder-route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable lead powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `cn103128297a-lead-powder-atomization`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lead powder product (`out_lead_powder`)

Record only elemental metallic lead powder meeting the declared particle-size specification.

- Selected flow: Lead powder
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of saleable classified lead powder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`; `cn103128297a-lead-powder-atomization`

##### Waste flows

##### Elementary flows

###### Residual lead emission to air from powder atomization (`out_powder_lead_air`)

Record residual lead released to air after powder collection and abatement.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or permit-consistent mass balance assigned to atomization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable lead powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `cn103128297a-lead-powder-atomization`; `us-epa-ap42-12-17-background`

### Process: Lead-flake formation and classification (`flake_making`)

#### Inputs

##### Product flows

###### Flake-route electricity (`in_flake_electricity`)

Record electricity for flake formation, classification, collection, and extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated flake-route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable lead flakes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-ap42-12-17-background`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lead flakes product (`out_lead_flakes`)

Record only elemental metallic lead flakes meeting the declared particle specification.

- Selected flow: Lead flakes
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of saleable classified lead flakes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

###### Residual lead emission to air from flake making (`out_flake_lead_air`)

Record residual lead released to air after collection and abatement.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or permit-consistent mass balance assigned to flake making
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable lead flakes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-12-17-background`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | route_and_product_form | First subdivide meters and batches so only the selected route and product form carry their exchanges. |  |
| `allocation_internal_returns` | internal_lead_returns | Treat internally remelted offcuts, powder returns, and captured lead returned to this system as internal flows without external credit or burden. |  |
| `allocation_external_scrap` | lead_scrap_leaving_system | Record lead-bearing scrap or dross leaving the foreground separately without avoided-burden credit; disclose later allocation or substitution outside this PCR. |  |
| `allocation_shared_services` | shared_energy_and_controls | If subdivision is impossible, use a documented causal driver such as operating time, throughput, or exhaust volume; justify mass allocation if used as fallback. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `melt_cast` | refined lead feed | scale, receipt, and charge log | lot; gross; tare; charge mass; composition; recycled-content claim | reconcile receipts, charges, and inventory change | kg | each lot and batch | output period | reporting site | sum net charged mass | calibration, supplier certificate, reconciliation |
| `cp_process_energy` | all applicable processes | electricity or natural gas | meter, invoice, and operating log | meter start; end; unit; runtime; allocation driver; gas conditions | prefer submeters; otherwise allocate a reconciled site meter causally | MJ or m3 | batch or monthly | output period | reporting site | subtract verified non-process use and normalize | calibration, invoice, allocation worksheet |
| `cp_product_mass` | route process | saleable output | finished-goods scale and release record | batch; form; specification; gross; tare; reject mass | measure net accepted output separately by form | kg | each batch | input period | reporting site | sum accepted net product only | calibration, release certificate, reconciliation |
| `cp_residue_mass` | `melt_cast` or `flat_forming` | dross or lead scrap | container scale and transfer record | residue type; gross; tare; destination; internal-return flag | weigh each outbound residue and exclude internal returns | kg | each transfer | output period | reporting site | sum net outbound mass by residue | scale and transfer record |
| `cp_direct_emissions` | all applicable processes | fossil carbon dioxide or lead to air | monitor, stack test, permit report, fuel balance, and operating log | pollutant; concentration; gas flow; duration; fuel; control status; runtime | align pollutant measurement with source and process operation | kg | valid test or reporting interval | representative operation | site and emission point | calculate matched pollutant mass and normalize | laboratory, monitor QA, permit, worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | all inventory rows | Divide the batch or period exchange by net saleable mass of the single declared form. | exchange; accepted product mass | exchange per kg reference product |  |
| `calc_electricity_mj` | metered electricity | Multiply kWh by 3.6 and retain the original record. | electricity in kWh | electricity in MJ |  |
| `calc_lead_balance` | lead-bearing flows | Compare lead in feed with lead in product, outbound residues, and releases; investigate rather than force-close the residual. | masses and lead fractions | disclosed lead-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | foreground records | Cover one representative period and identify startup, shutdown, and maintenance intervals. | dated meters, batch logs, exception register |
| `dq_technology` | process description | Identify melting, energy, forming or atomization, collection, abatement, and batch or continuous operation. | equipment list, flow diagram, operating records |
| `dq_product` | reference product | Report form, composition, dimension or particle specification, surface treatment, net-mass basis, and acceptance rate. | specification and release records |
| `dq_geography` | upstream links and direct emissions | State site geography, representative upstream supply, and the actual air-release point. | supplier, utility, and emission-point records |
| `dq_completeness` | inventory | Account for each applicable atomic exchange and document zero or not-applicable determinations. | completeness review and lead mass balance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_form` | reference_flow | Exactly one product-form output row shall be the reference flow and equal 1 kg net saleable product. |  |
| `validate_route` | process_inventory | Include `melt_cast` only when it occurs on site and exactly one applicable forming route; document omitted conditional routes. |  |
| `validate_uuid_identity` | uuid_bearing_rows | Retain each audited state-100 base name, flow type, property, unit group, and unit; keep unresolved output forms UUID-empty. |  |
| `validate_atomicity` | process_inventory | Do not combine electricity with fuel, multiple product forms, or dross, scrap, and air emissions. |  |
| `validate_mass_balance` | lead_bearing_flows | Complete a same-period lead balance and investigate and disclose material residuals. |  |
| `validate_ranges` | amount_ranges | Add no external numeric range until two independent original-text sources have compatible boundary, basis, state, geography, and technology. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground inventory for one semi-finished lead product form |
| downstream_use | TianGong flow, process, dataset, and lifecycle-model projections with upstream links |
| allowed_use | LCA modeling when form, route, site, period, composition, and upstream supplies are representative |
| excluded_use | Upstream lead production, alloys, batteries, solder, finished articles, use, or end-of-life |
| required_metadata | form and specification; output mass; composition; recycled-content method; starting material; route; equipment; abatement; geography; period; allocation; cut-offs; upstream datasets |
| required_quality_disclosure | measurement coverage; meter quality; allocations; mass-balance residual; gaps; substitutions; unresolved UUIDs; absence of external ranges |
| update_trigger | change in specification, composition, recycled-content method, equipment, energy, route, controls, supplier mix, site, or period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41542 identity and product-form wording |
| `china-costa-rica-fta-product-specific-origin-rules` | Official guidance (`official_guidance`) | General Administration of Customs of China, bilingual HS 7804 entry in Product-specific Rules of Origin for the China-Costa Rica Free Trade Agreement, https://www.ks.gov.cn/kss/Upload_zwgk/ggxx2015122195763975384.pdf | Verified Chinese terminology for lead plates, sheets, strip, foil, powders, and flakes |
| `eu-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries, 2017, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | Lead melting, casting, energy, dross, fume capture, and controls |
| `us-epa-ap42-12-17-background` | Official guidance (`official_guidance`) | US EPA, Background Report AP-42 Section 12.17, Miscellaneous Lead Products, https://www.epa.gov/sites/default/files/2020-11/documents/b12s17.pdf | Sheet-lead process decomposition and direct lead dust or emission collection |
| `cn103128297a-lead-powder-atomization` | Literature (`literature`) | CN103128297A, A kind of production method of metallic lead powder, https://patents.google.com/patent/CN103128297A/en | Powder-route melting, pressure-air atomization, cooling, collection, and screening |
