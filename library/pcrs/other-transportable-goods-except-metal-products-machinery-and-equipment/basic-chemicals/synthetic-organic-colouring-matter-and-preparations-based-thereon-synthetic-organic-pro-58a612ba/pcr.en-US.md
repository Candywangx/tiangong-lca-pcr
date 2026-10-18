---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-organic-colouring-matter-and-preparations-based-thereon-synthetic-organic-pro-58a612ba
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Salt-isolated Acid Orange 7 sodium salt powder


## 1. Scope and Applicability

This PCR covers aqueous manufacture of one dye, Acid Orange 7 sodium salt (Orange II; CAS 633-96-5), from sulfanilic acid and 2-naphthol, followed by sodium-chloride salting-out, filtration, washing, drying, powder finishing and packing. It covers declared powder grades containing this dye plus measured residual salt and moisture, not an assumed pure molecule. Confirm the actual lot composition and route before application. The sodium dye species has formula C16H11N2NaO4S; this is a species identity, not the composition of every commercial kilogram. The laboratory sodium-chloride isolation in `bcho-orangeii-2015` supports the method sequence, not industrial consumption, dryer design, yield or plant configuration. Sources: `jrc-ofc-2006`, `basf-us4560745-1985`, `thermo-orangeii-spec`, `bcho-orangeii-2015`.

Exclude liquid supply, other counterions, colour lakes, metal-complex dyes, dye blends, fluorescent brighteners, inorganic luminophores, membrane/extraction recovery and purchase-only dye formulation. The patent amine-extraction example ends in a diethanolamine salt solution and does not establish the sodium-powder finishing route. The supplier specification establishes a commercial sodium-powder identity, not its manufacturing route or a universal assay.

Applicability to the bounded utility/waste configuration requires actual site evidence of purchased steam, compatible electricity, indirect closed-loop cooling and off-site liquid-waste treatment. The cited literature does not establish that configuration at a production site. A cooling circuit labelled closed still requires a circuit diagram, operating records and a measured inventory of make-up, purge, leaks, additives and any refrigerant loss; add each actual exchange separately before application. Waste manifests, receiver acceptance and documented treatment must establish off-site transfer. Unknown cooling or waste destinations do not establish applicability or zero emissions. On-site combustion, biological wastewater treatment, direct liquid discharge and an open cooling-water exchange require a documented extension with all actual atomic exchanges before application. This boundary limits the PCR; it does not imply these routes are absent from the wider industry. No historical plant quantity or patent recipe is a default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-organic-colouring-matter-and-preparations-based-thereon-synthetic-organic-pro-58a612ba |
| classification_refs | CPC 3.0 34310; narrower; mapping acceptance remains separate |
| covered_products | Single-dye Acid Orange 7 sodium-salt powder; declared residual NaCl and moisture |
| excluded_products | Liquid or amine salt supply; lakes; blends; other dyes; brighteners; purchase-only formulation |
| representative_product | Declared lot of Orange II sodium powder; no nominal assay default |
| production_route | Aqueous diazotisation/coupling; salt-out; filter; wash; dry; finish; pack |
| market_state | Accepted net supplied powder at factory gate; transport packaging excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply Orange II sodium powder for further formulation or dyeing |
| How much | 1 kg supplied net powder |
| How well | Meet the declared lot/SKU dye-strength, identity, counterion, moisture and residual-salt acceptance specification; no common performance threshold |
| How long or cycle | One production-and-delivery cycle to factory gate; no use-stage durability claim |
| reference_flow_link | out_dye |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | dye `08a96ffe-4db5-4405-abdd-d4d03b8b0a55` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS; sodium counterion; lot/SKU; dye assay with wet/dry basis and method; residual NaCl; moisture; route; powder grade and acceptance; origin/provider; gate; steam state/return baseline; waste receiver |

The broad reference identity is constrained by the Acid Orange 7 sodium-powder scope and required qualifiers; it is not a generic background recipe. A mass flow identity is not proof of concentration or provider background compatibility. This declared unit does not establish comparative equivalence between different dye strengths or hues.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Use accepted net supplied powder mass, excluding packaging. Residual salt and moisture remain inside that mass. Collect with cp_product. |
| `composition_basis` | all chemical product inputs and out_dye | Mass | kg | Preserve actual supplied mass; measure active fraction, water and counterions independently; dry-basis assays require a documented moisture conversion. No duplicated carrier-water input. |
| `utility_basis` | in_electricity; in_steam | Energy; Mass | MJ; kg | Preserve electricity energy and measured steam mass. Match steam supply pressure, enthalpy, condensate credit and supplier reference basis explicitly; unknown compatibility prevents background linkage. |
| `ledger_basis` | p_dye | Mass | kg | Maintain separate unallocated total wet mass, water, organic carbon, sodium, nitrogen, sulphur and chloride ledgers. Water and dye species have reaction formation/consumption terms; elemental balances conserve atoms. Keep carrier water and internal reaction products separate from purchased exchanges. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased sulfanilic acid, 2-naphthol and individual auxiliary supplies at site receipt; foreground includes synthesis through packed net product |
| starting_condition_role | foreground_gate |
| product_classification_scope | Only the stated synthetic azo dye powder subset of CPC 34310 |
| recursive_input_rule | Record externally purchased same-category dye once with verified upstream origin; purchase-only formulation is outside this synthesis PCR. Internal recovered dye does not restart upstream production. |
| upstream_dataset_requirement | Match each supplied reagent state, assay, provider and reference quantity; include external steam/electricity and waste-treatment burdens; unavailable data remain disclosed |
| disclosure | Site, campaign, route, lot grade, meters, internal recovery, utility limits and waste destination; all rejected boundary conditions |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_complete` | Include receiving, stage charging, reaction, salt isolation, washing, drying, finishing, dust/acid-gas capture, cleaning and packing. Include measured losses and ancillary utilities, even in unsuccessful batches. | jrc-ofc-2006 |
| `boundary_transfers` | Off-site liquid waste is one technosphere transfer per actual stream/load, with receiver treatment linked. Do not additionally emit the transferred constituents to water at this foreground gate. If wastewater treatment is on-site, revise the process boundary and add treatment chemicals, sludges and actual elementary emissions before use. | jrc-ofc-2006 |
| `boundary_configuration_evidence` | Verify actual cooling circuit and every external loss or supply; add actual atomic exchanges before use. Verify waste loads, receiver and treatment before treating a liquid stream as an off-site technosphere transfer. A literature route or absence of a meter cannot justify zero water, waste or air exchange. | jrc-ofc-2006 |
| `boundary_no_synthetic_union` | Do not borrow membrane or amine-extraction quantities, metal-complex-dye emissions or another colouring product recipe. Actual auxiliary components outside the listed route need separately named, measured and verified atomic rows. | jrc-ofc-2006; basf-us4560745-1985 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_dye | Aqueous synthesis, salt isolation and powder finishing | required | Declared route and utility/waste configuration match scope | foreground | 1 kg accepted supplied powder |

Material-stage map: receipt → sulfanilic-acid diazotisation plus separate alkaline 2-naphthol dissolution → coupling → NaCl salt-out → filter/wash → dry/finish → pack. These stages form one foreground unit for the same physical dye; keep independent stage meters and samples. Internal liquid, cake and powder transfers have equal mass at their two endpoints and are not additional reference outputs. Mother liquor, wash effluent and captured residues follow the separately recorded receiver routes. Sources: `jrc-ofc-2006`; `bcho-orangeii-2015` for laboratory NaCl salt-out, filtration, water washing and drying; `basf-us4560745-1985` only supports the coupling reactants. The BCHO procedure includes running tap-water cooling and optional recrystallisation, which are not imported into this bounded industrial configuration.

### Process: Aqueous synthesis, salt isolation and powder finishing (`p_dye`)

#### Inputs

##### Product flows

###### Sulfanilic acid (`in_sulfanilic`)

CAS 121-57-3; weighed diazo precursor; declare grade, assay and supplied water.

- Selected flow: Sulfanilic acid
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### 2-Naphthol (`in_naphthol`)
The adopted broad naphthol identity explicitly includes both isomers; this row requires actual 2-naphthol, CAS 135-19-3, independently verified assay and supplier background for the beta isomer. The broad dye classification is not compound taxonomy.


CAS 135-19-3; weighed coupling reagent; exclude 1-naphthol.

- Selected flow: Naphthol `a201a6a7-1d73-46d3-ac6d-9f02af4cdc78`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Sodium nitrite (`in_nitrite`)

Record weighed nitrite, assay, excess and endpoint test; no assumed stoichiometric consumption.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Hydrochloric acid solution (`in_hcl`)

Record delivered solution mass and HCl mass fraction; solution water remains in the physical water ledger.

- Selected flow: Hydrochloric Acid `a118a682-1600-4855-b959-c78777b75ee8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Sodium hydroxide solution (`in_naoh`)
The adopted solution record specifies distilled-water dilution and chlor-alkali production; verify the actual provider route and supplied concentration separately before linkage. Its drug-manufacturing use context supplies no recipe for this dye.


Measure supplied solution for dissolution, pH control and scrubbing separately by stage; assay and carrier water are mandatory.

- Selected flow: Sodium Hydroxide solution `608efe06-bdb9-4927-8485-82637c1b89fd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Sodium chloride (`in_nacl`)
The adopted identity requires purity at least 99.5%; this is an identity condition, not a universal dose or purity default. Verify actual supplied grade before linking.


Measure purchased salting-out or final strength-adjustment salt; distinguish this from salt formed by reaction.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Deionised water (`in_water`)

Measure purchased liquid water by stage including ice made internally; do not add solution carrier water a second time.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Electricity (`in_electricity`)
The adopted identity is grid-average alternating current delivered below 1 kV in China (CN). Use it only for compatible actual metered supply and geography; other voltages, countries or supplier mixes need a separately verified identity and background. The database reference property is Net calorific value, not a claim that electricity is a fuel.


Meter reactors, pumps, closed-loop cooling, dryer auxiliaries and dust collection; 1 kWh = 3.6 MJ. Supplier reference-property convention must be checked.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-ofc-2006`

###### Purchased process steam (`in_steam`)
The verified record supplies a generic chemical-industry steam mass identity without pressure/return baseline. Physical identity can be retained; actual pressure, enthalpy and provider-background compatibility remain mandatory pending collection.


Record inlet steam mass, absolute pressure, temperature, dryness and returned condensate mass/enthalpy; net delivered heat is measured from the enthalpy balance, never inferred from a database MJ field. Confirm indirect heating from the piping diagram; steam and condensate cross the utility boundary separately. Condensate is a measured return, not a dye-product co-product or an automatic avoided-heat credit. Direct steam injection requires a separate process-water balance and revised boundary.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-ofc-2006`

###### Activated carbon (`in_carbon`)

Conditional clarifying aid only when used; record origin, grade, dose and retained dye, with supplier-specific upstream data. The native route label says absorption while the physical comment describes adsorption; retain that inconsistency for supplier clarification. It does not identify a wood, coal or other feedstock by default.

- Selected flow: Activated carbon `5cad53b5-252a-4e2f-8197-8be465707405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`

###### Polyethylene liner film (`in_pe`)
The physical PE-film identity and CAS 9002-88-4 are compatible; the CPC 29220 luggage classification is a known isolated anomaly, requiring source/provider clarification.


Conditional actual PE liner only; record polymer, thickness, grade and supplier, excluding the outer sack mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-ofc-2006`

###### Uncoated kraft paper sack (`in_sack`)

Conditional uncoated kraft outer sack only; actual composite/coated packaging requires separate atomically named components before use.

- Selected flow: Uncoated kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `jrc-ofc-2006`

#### Outputs

##### Product flows

###### Acid Orange 7 sodium salt powder (`out_dye`)
The adopted dye identity explicitly allows powder use. This PCR restricts it to Acid Orange 7 sodium salt powder, CAS 633-96-5, with measured lot composition; no other dye or background recipe is implied. Its CPC 35120 classification is inconsistent with this broad identity and requires source clarification.


1 kg accepted supplied net powder; measured dye-content, residual salt and moisture belong to this same product. Exclude transport packaging.

- Selected flow: dye `08a96ffe-4db5-4405-abdd-d4d03b8b0a55`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_product`
- Sources: `thermo-orangeii-spec`

##### Waste flows

###### Saline Acid Orange 7 isolation mother liquor (`w_mother`)

Measure each transferred saline mother-liquor load, composition and licensed receiver. This is a technosphere waste transfer, not a freshwater elementary release.

- Selected flow: Saline Acid Orange 7 isolation mother liquor
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Acid Orange 7 filter-cake wash effluent (`w_wash`)

Collect and meter wash effluent separately from mother liquor; if the streams share a transfer load, reconcile constituent masses to the combined load without double counting.

- Selected flow: Acid Orange 7 filter-cake wash effluent
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`, `bcho-orangeii-2015`

###### Hydrochloric-acid gas scrubber blowdown (`w_scrub`)

Conditional aqueous scrubber purge; measure HCl capture, chloride and alkali; retained contamination is not also a direct air emission.

- Selected flow: Hydrochloric-acid gas scrubber blowdown
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`

###### Spent activated carbon containing Acid Orange 7 (`w_carbon`)

Conditional solid clarifying waste; wet mass, dry solids, dye loading and receiver route are mandatory.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`

###### Rejected Acid Orange 7 sodium salt powder (`w_reject`)

Record off-spec powder only when sent out for disposal; on-site rework stays internal and affects measured yield and energy.

- Selected flow: Rejected Acid Orange 7 sodium salt powder
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`

###### Collected Acid Orange 7 powder dust (`w_dust`)

Separate captured dust sent for external treatment from internal return; never count captured mass again as airborne PM.

- Selected flow: Collected Acid Orange 7 powder dust
- Flow property / unit: Mass / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`

##### Elementary flows

###### Hydrogen chloride to outdoor air (`air_hcl`)

CAS 7647-01-0; quantify residual stack and fugitive HCl after abatement over complete batches.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`

###### Nitrogen monoxide to outdoor air (`air_no`)

Conditional measured molecular NO (CAS 10102-43-9) only; source screening must establish occurrence. An NO2-equivalent NOx total is not this mass.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`

###### Nitrogen dioxide to outdoor air (`air_no2`)

Conditional measured molecular NO2 (CAS 10102-44-0) only; exclude N2O and do not add an overlapping NOx total.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`

###### Particulates less than or equal to 2.5 micrometres to outdoor air (`air_pm25`)

Measure dryer, milling and packing emissions leaving the site after collection; diameter class is exclusive.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`

###### Particulates greater than 2.5 and less than or equal to 10 micrometres to outdoor air (`air_pm10`)

Use measured exclusive fraction; cumulative PM10 includes PM2.5 and must first be reconciled before subtraction.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`

###### Particulates greater than 10 micrometres to outdoor air (`air_pmover10`)

Use measured exclusive fraction; total suspended particulate is a reconciliation check, not an additional emission row.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`

###### Water vapour to outdoor air (`air_water`)

Record actual vented drying water, after condensate recovery; this is neither freshwater withdrawal nor liquid-water discharge.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured campaign amount divided by accepted supplied net powder mass; retain stage records and conditional absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_no_coproduct_default` | The declared route has one intended saleable dye. Do not promote residual NaCl, mixed mother liquor or waste to a co-product by assumption. Assign attributable foreground burdens to accepted dye, including rejected batches and waste handling; if an actual independently saleable recovered output exists, retain its concrete output row and apply allocation_physical_ledger. | jrc-ilcd-2010; jrc-ofc-2006 |
| `allocation_physical_ledger` | Keep unallocated total wet mass, water, organic carbon, Na, N, S and Cl ledgers separate from allocated environmental burdens. For an actual independently saleable recovered output, first investigate measured subdivision or a justified expanded system. Where neither is possible, document a relevant causal physical relationship; if another relationship is necessary, justify it and test sensitivity. Record shares that sum to one on the declared burden basis. Never multiply physical co-product mass by burden shares; output masses and internal endpoints stay measured. | jrc-ilcd-2010; jrc-ofc-2006 |
| `allocation_campaigns` | Use stage meters and validated run times/loads for shared campaigns. Do not allocate merely by different commercial dye strengths, trade names or an unrelated historical plant mix. Record shutdown/cleaning and losses once. | jrc-ilcd-2010; jrc-ofc-2006 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | p_dye | out_dye | foreground_record | lot; SKU; CAS; counterion; net mass Q; returns/reacceptance; opening/closing finished stocks and work in progress; carried inventory burdens; moisture; dye assay/basis and species definition; residual salt; Na/N/S/Cl and organic carbon; acceptance | Calibrated net weighing; representative lot samples with traceable analytical method and certificate; exclude packaging and rejected product | kg; mass fraction | Each batch/load; utility and emission profiles throughout operation | One declared complete representative campaign including cleaning, rejects and stock changes; report dates and coverage gaps | Declared foreground route and shared auxiliaries | per 1 kg reference flow | Calibration; analytical method; source records; uncertainty; reconciliation |
| cp_material | p_dye | reagents; clarifying aid | foreground_record | chemical; CAS; grade; supplier; stage; gross/tare/net kg; solution assay; carrier water; purity; stock change | Weigh each supply and stage charge; reconcile received stock, consumption, returns and internal recovery; test concentrations | kg; mass fraction | Each batch/load; utility and emission profiles throughout operation | One declared complete representative campaign including cleaning, rejects and stock changes; report dates and coverage gaps | Declared foreground route and shared auxiliaries | per 1 kg reference flow | Calibration; analytical method; source records; uncertainty; reconciliation |
| cp_water | p_dye | in_water; air_water | foreground_record | stage; water supply kg; ice kg; solution water; wet cake; product moisture; condensate; vent water; stock change | Calibrated meters/weighing; measured density for volume conversion; measure condensate and vent humidity/airflow or use a bounded water-balance residual with propagated uncertainty only when all other water inputs, outputs, stocks and reaction formation/consumption terms have independent evidence; never fit unknown reaction water and vent water to the same residual | kg | Each batch/load; utility and emission profiles throughout operation | One declared complete representative campaign including cleaning, rejects and stock changes; report dates and coverage gaps | Declared foreground route and shared auxiliaries | per 1 kg reference flow | Calibration; analytical method; source records; uncertainty; reconciliation |
| cp_energy | p_dye | in_electricity; in_steam | foreground_record | stage; meter kWh; steam kg; absolute pressure; temperature; dryness; inlet enthalpy; condensate mass/enthalpy; indirect-heating circuit; cooling diagram and make-up/purge/leak/additive records; supply geography; supplier baseline | Stage-meter full runs and cleaning; calculate net steam heat from measured mass/enthalpy; disclose missing return or supply reference and do not link incompatible backgrounds | kWh; MJ; kg | Each batch/load; utility and emission profiles throughout operation | One declared complete representative campaign including cleaning, rejects and stock changes; report dates and coverage gaps | Declared foreground route and shared auxiliaries | per 1 kg reference flow | Calibration; analytical method; source records; uncertainty; reconciliation |
| cp_pack | p_dye | in_pe; in_sack | foreground_record | component; supplier; polymer/paper grade; thickness; tare mass; units; rejects; lot | Weigh actual separate components and reconcile package count, losses and supplier specification | kg | Each batch/load; utility and emission profiles throughout operation | One declared complete representative campaign including cleaning, rejects and stock changes; report dates and coverage gaps | Declared foreground route and shared auxiliaries | per 1 kg reference flow | Calibration; analytical method; source records; uncertainty; reconciliation |
| cp_waste | p_dye | w_mother; w_wash; w_scrub; w_carbon; w_reject; w_dust | foreground_record | stream; stage; transfer kg; measured density; water/dry solids; AO7; sulfanilic acid; 2-naphthol; chloride; sodium; nitrite; total N; total S and sulphate; COD and TOC with analytical bases; pH; receiver; treatment; recovery | Meter/weigh segregated transfers and sample each stream/load; reconcile mother/wash/scrubber mixing. Retain waste manifests and receiver acceptance. Extend analysis for observed contaminants, toxicity and treatment inhibition | kg; mg/L; mass fraction | Each batch/load; utility and emission profiles throughout operation | One declared complete representative campaign including cleaning, rejects and stock changes; report dates and coverage gaps | Declared foreground route and shared auxiliaries | per 1 kg reference flow | Calibration; analytical method; source records; uncertainty; reconciliation |
| cp_air | p_dye | air_hcl; air_no; air_no2; air_pm25; air_pm10; air_pmover10 | foreground_record | source/stage; operating cycle; species; molecular basis; concentration; dry/wet reference; T/P; exhaust volume/time; abatement; fugitive estimate; diameter fractions; uncertainty; detection limit | Sample full charging/reaction/drying/finishing/packing cycles and cleaning, including bypasses. Use species-resolved validated sampling; compute exhaust load from matched concentration and gas volume; source screening determines conditional NO/NO2 presence | kg; mg/m3; m3 | Each batch/load; utility and emission profiles throughout operation | One declared complete representative campaign including cleaning, rejects and stock changes; report dates and coverage gaps | Declared foreground route and shared auxiliaries | per 1 kg reference flow | Calibration; analytical method; source records; uncertainty; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_denominator` | all inventory rows | x = raw campaign exchange total / Q; Q is the same positive accepted supplied net powder kg measured by cp_product. Sum raw amounts over the complete compatible route/state/grade campaign, including failed or zero-output batches, cleaning and rework, then divide once; do not average batch ratios or renormalize per-kg values. Reconcile returns, reacceptance, finished stocks and work in progress with their carried burdens so Q is credited once and the attributed burden numerator covers the same output. Internal rework is not new accepted output. If Q is zero, retain the totals and disclose no unit result rather than divide or omit burdens. Keep numerator units. Product output is 1 kg. | cp_product; applicable row protocol | x | jrc-ofc-2006 |
| `composition_ledger` | all chemical product inputs and out_dye | Active mass = supplied mass × measured as-supplied active mass fraction; carrier water and residual salt are separate balance components, not duplicate technosphere inputs. Convert dry assay only with matched moisture measurement. Assay reporting as free acid, sodium salt, dry solids or colour strength must be identified; only a validated analytical species conversion can yield sodium-dye mass. The salt species includes its bound Na and S; residual NaCl contains additional Na and Cl. Do not assign the entire unassayed remainder to NaCl or water. | cp_material; cp_product | active mass; water; residual salt | thermo-orangeii-spec |
| `physical_balances` | p_dye | For total wet mass and conserved elements: unallocated external inputs + opening stocks = external products + transferred wastes + actual releases + closing stocks + disclosed residual. Record total wet mass, Na, N, S, Cl and organic carbon separately. Include reagent and dye-bound Na, sulfanilic/dye S, nitrite and organic N, purchased salt and acid Cl. Organic-carbon changes require species transformation and any transfer to inorganic carbon; COD is an oxygen-demand indicator, not carbon mass. For water or dye species add internal reaction formation and subtract consumption on the relevant ledger: water from diazotisation/neutralisation and dye formation are not extra purchased flows. Internal NaCl formation is not purchased salting salt. Preserve chemical-species and elemental bases, density, uncertainty and stock changes; no assumed yield or fixed reaction-water quantity. Reconcile same-stream internal endpoints and the utility steam/condensate loop separately. | cp_material; cp_product; cp_water; cp_waste; cp_air | balance residual and uncertainty | jrc-ofc-2006 |
| `delivered_steam_heat` | in_steam | Net delivered heat = sum(inlet steam mass × inlet specific enthalpy) − sum(return condensate mass × return specific enthalpy), with a declared common enthalpy reference and supplier return convention. Keep mass and heat records separately. | cp_energy | MJ and steam kg, separately | jrc-ofc-2006 |
| `air_loads` | elementary air outputs | Integrate matched species concentration × exhaust volume across each operating cycle, plus supported fugitives. For nonoverlapping PM fractions subtract cumulative masses only on identical source, time, moisture and sampling bases. | cp_air | kg per species or exclusive PM class | jrc-ofc-2006 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all flows | Verify full identity metadata, CAS, route, medium, property and unit; investigate contradictions. UUID confirmation and provider-baseline compatibility are separate checks. | supplier specification; native identity records |
| `quality_amount` | all quantities | Use traceable actual measurements, assay, water balance and energy meters; disclose detection limits, missing stages and unclosed balances. No transplanted patent/site numbers. | cp_product; cp_material; cp_water; cp_energy; cp_waste; cp_air |
| `quality_completeness` | p_dye | Screen actual additives, packaging, cleaning agents, direct releases and accidental/bypass conditions; add specific atomic rows with verified identity before claiming a complete dataset. Neither a missing measurement nor missing UUID means zero. | jrc-ofc-2006 |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Exactly one product output is out_dye, with the stated 1 kg net supplied powder basis. Require verified reference UUID/property/unit group and declared sodium counterion, route and lot assay; a free-acid/amine-salt record cannot be substituted. | thermo-orangeii-spec; basf-us4560745-1985 |
| `validate_amounts` | Reference, all row denominators, collection aggregation and calculations use identical accepted net powder Q in both languages. Assess measured yield, active fraction, salts, water and net steam heat without invented values. | jrc-ofc-2006 |
| `validate_releases` | Prevent duplicate transferred wastewater versus direct water release, captured dust versus airborne PM, and nested PM intervals. Molecular NO/NO2 and NO2-equivalent totals are distinct; never infer N2O from NOx. Preserve any actual biogenic CO2 if an expanded route generates it, independently of climate-reporting conventions. | jrc-ofc-2006 |
| `validate_ledgers` | Require independent unallocated total-wet, water, organic-carbon, Na, N, S and Cl reconciliation, with reaction formation/consumption for species and measured external endpoints. Keep allocation shares outside these physical ledgers. Missing chemistry or an unbounded water-balance residual requires review, not a zero or stoichiometric default. | jrc-ofc-2006; thermo-orangeii-spec |
| `validate_readiness` | Missing identities, contradictory metadata, incompatible provider bases and unresolved measurement prevent a complete dataset. Scientific review and mapping acceptance remain separate from completed methodology authoring. | thermo-orangeii-spec; jrc-ofc-2006 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only after identity and quantity verification: declared sodium-powder route at stated dye strength and gate |
| excluded_use | Full CPC leaf coverage; equivalence between hues/strengths; other salts, fluid formulations, lakes and purchase-only formulation |
| required_metadata | Site; campaign; lot/SKU; CAS/counterion; supplied assay/moisture/salts; route; utilities; receiver; reference identity |
| required_quality_disclosure | UUID and background compatibility status; source/measurement coverage; balance residual; allocation; uncertainty; missing exchanges; candidate status |
| update_trigger | Route, counterion, strength/formulation, recovery, utility baseline, receiver or emission change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-ofc-2006 | official_guidance | [JRC OFC BREF, August 2006](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/ofc_bref_0806.pdf) | Sections 2.5.4 (printed 43–44/PDF 73–74), 4.3.2.4 (198/PDF 228), 5.2.1 (380–381/PDF 410–411): route archetype, distinct waste streams and operation-sensitive measurement. Historical examples and BAT levels are not inventory defaults. |
| basf-us4560745-1985 | literature | [BASF US4560745A, 1985, original patent](https://patentimages.storage.googleapis.com/0b/5f/8f/4afae7653438da/US4560745.pdf) | Example 2, column 4/PDF 3: sulfanilic-acid/2-naphthol coupling. Subsequent diethanolamine-salt extraction is excluded; no case recipe or recovery transferred. |
| thermo-orangeii-spec | handbook | [Thermo Scientific Orange II product specification, catalog 416561000](https://assets.thermofisher.com/chem-specs-pdf/retrievePdf?countryCode=cn&erp_type=CN_E1_LCD&rootSku=41656&sku=416561000) | Original PDF page 1 printed 14 October 2026: CAS 633-96-5, sodium identity, powder market state and SKU-specific dye-content test. No universal composition or route inferred. |
| unsd-cpc3-2025 | official_guidance | [UNSD CPC 3.0 explanatory notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Printed/PDF page 162, subclass 34310: broad classification context only. Supports narrower proposal, not method identity or recipe. |
| bcho-orangeii-2015 | official_guidance | [23rd Baltic Chemistry Olympiad practical examination, April 2015](https://www.eko.ut.ee/pdf/bcho/bcho2015e.en.pdf) | Problem 2, PDF/printed pages 9–12: actual sulfanilic acid/NaNO2/HCl/NaOH/2-naphthol synthesis, NaCl salt-out, filtration, water washing and drying. Laboratory method evidence only; no industrial recipe, yield, cooling configuration or heat factor transferred. |
| jrc-ilcd-2010 | official_guidance | [JRC ILCD Handbook, General guide for LCA, detailed guidance, 2010](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | Section 6.5.3.2, printed 74–80/PDF 94–100: subdivision, justified system expansion and causal physical allocation before other relationships. Method reference only; no fixed dye allocation share or compliance claim. |
