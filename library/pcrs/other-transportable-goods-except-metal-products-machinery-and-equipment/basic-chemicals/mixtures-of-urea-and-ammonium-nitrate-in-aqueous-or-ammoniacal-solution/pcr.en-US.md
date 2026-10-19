---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.mixtures-of-urea-and-ammonium-nitrate-in-aqueous-or-ammoniacal-solution
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Aqueous UAN by continuous received-solution mixing

## 1. Scope and Applicability

This manufacturing PCR covers non-pressurised continuous mixing of received concentrated aqueous urea and ammonium nitrate solutions, separate process-water addition, actual HNO3 or gaseous NH3 pH adjustment, indirect electrically driven cooling, storage, recovery and bulk factory-gate loadout. It defines one supplied mixture rather than a pure chemical species, nutrient-only flow or agronomic service. The physical process basis is `eu-lvic-aaf-2007` §8.2.2/Figure8.2 and `efma-uan-2000` §§9.1–9.5/Figure6.

Use corrosion-compatible storage and transfer equipment with no corrosion-inhibitor addition to the product; record the actual compatibility evidence. EFMA §9.1 identifies corrosion-resistant equipment coatings as an alternative to inhibitor dosing, and §9.4.1 makes inhibitor use conditional. The method covers no added micronutrient, sulphur compound, urease/nitrification inhibitor, antifoam or other product additive. An actual additive-containing recipe requires separate atomic ingredient rows and specific evidence before a method extension can be used. Yara UAN-32 confirms a marketed liquid containing urea-, ammonium- and nitrate-N only as a product-state example; it does not prove any target SKU is additive-free, nor establish universal concentration, recipe or plant performance [`yara-uan32`].

Exclude solid-feed dissolution, batch heated dissolution, ammonia/CO2 urea synthesis, nitric-acid/ammonia bulk AN synthesis, carbamate/partial-recycle CO2 stripping, scrubber-liquor feed recovery from another unit, intentionally ammoniacal solvent formulations, solid AN/CAN/double salts, nutrient-enriched mixtures and bag/container supply. Source §8.4.14 is a different integrated route and cannot supply quantities or a free recovered feed for this mixing route. On-site boilers, purchased steam/heat, pneumatic/instrument-air utilities, chemical cooling-water treatment, refrigeration with a circulating refrigerant and on-site final wastewater treatment require separately evidenced inventories before extending this method; they are not silently omitted from an applicable dataset. The scoped line uses electric drives and an additive-free indirect recirculating water cooler.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.mixtures-of-urea-and-ammonium-nitrate-in-aqueous-or-ammoniacal-solution |
| classification_refs | CPC 3.0 34616; proposed narrower relation, not an accepted edge [un-cpc3-3461] |
| covered_products | Additive-free bulk aqueous UAN solution from received liquid urea/AN continuous mixing, with declared residual free NH3 |
| excluded_products | Ammoniacal solvent recipes; additive grades; solid feed dissolution; integrated synthesis/recovery; batch heating; solid fertilizers; packaged supply |
| representative_product | Actual accepted bulk aqueous UAN grade; Yara UAN-32 is a liquid-product example, not its prescribed recipe |
| production_route | Received solution measurement; continuous static mixing; actual pH adjustment; indirect water cooling; storage/recovery; bulk net loadout |
| market_state | Accepted aqueous liquid mixture at factory gate; net solution mass as supplied |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared aqueous UAN manufacturing product; no equivalent yield or fertilizer application service is claimed |
| How much | 1 kg accepted net supplied solution |
| How well | Actual urea/AN/free-NH3/water composition, total-N and three N-form assays, density/temperature, pH and bulk acceptance |
| How long or cycle | One factory-gate supply event; storage time belongs to the declared manufacturing period, not an agricultural lifetime |
| reference_flow_link | uan_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mixtures of urea and ammonium nitrate in aqueous or ammoniacal solution `0dc0af45-dde1-49e1-85d7-887b9c3f193d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Aqueous solvent; urea and AN mass fractions; free NH3; water and impurities; total-N, urea-N, ammoniacal-N and nitrate-N with analytical basis; density and temperature; pH; absence of added inhibitors/other additives; corrosion-compatible equipment; feed-solution assays and origins; continuous non-pressure route; electric water-cooling configuration; bulk delivery; site/period; compatible background-provider quantity bases |

Declare every required qualifier in dataset metadata, product description, process notes or equivalent foreground fields. Missing qualifiers leave a concrete data package incomplete. The broad reference identity includes aqueous and ammoniacal UAN; this PCR uses only its aqueous subset. UUID identity does not verify a supplier process, amount, concentration or absence of additives.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg net accepted aqueous solution including carried water and measured solutes; exclude tank/truck/container mass. Collect with cp_product. All inventory and collection bases are per 1 kg reference flow. |
| solution_basis | urea_solution; an_solution; nitric_adjustment; ammonia_adjustment; process_water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve each external feed's supplied-mass basis and measured assay. Do not substitute dry solute, kg N, nominal density or solid products. Carrier water within solution inputs is accounted in composition ledgers without adding a duplicate external water exchange. |
| nitrogen_basis | uan_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product kg, active urea/AN kg and nutrient kg N are distinct. Measured total-N and N-form fractions define optional nutrient results; nitrate/ammonium methods must state N versus full-species basis. No universal nutrient split is imposed. |
| electric_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the direct-read electrical reference property name. Meter actual <1 kV electricity, convert kWh to MJ by 3.6 and link the same user boundary and supply mix; this property label is not a thermal-fuel recipe. |
| balances | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile total mass, water, elemental N and urea-derived carbon including stocks and external losses. Internal recycle is recorded at both ends with equal quantity; unknown balance residuals cannot be labelled evaporation or assumed zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received concentrated urea and AN aqueous solutions and measured pH reagent at mixing-line inlet; their origins, assays, temperatures and stock coverage declared |
| starting_condition_role | Documented foreground feed-receipt interface, not a cradle-to-gate burden exemption |
| product_classification_scope | Aqueous continuous received-solution subset of CPC34616; classification does not establish reference composition or route |
| recursive_input_rule | No external UAN reprocessing feed in this method; internal sump/storage return remains internal. Recovered feed from a different unit requires a separately evidenced input and burden link before method extension |
| upstream_dataset_requirement | Link production and delivery of every external feed and electricity using actual solution assay/state and supplier reference amount; include upstream urea, AN, ammonia and nitric-acid manufacture, energy and emissions exactly once |
| disclosure | Declare site/grade/period, foreground interfaces, cooling and pH configuration, suppliers, origin, transport, capital-equipment boundary, recovery, losses, stock changes, wastewater receivers and any unmatched provider/flow basis |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | uan_mixing | Include feed receipt, meters/static mixers, actual pH adjustment, indirect cooling, storage, transfer/loadout, sump recovery and attributable cleaning within one foreground unit. Keep stage measurements; internal blended UAN does not create another reference product. | eu-lvic-aaf-2007; efma-uan-2000 |
| boundary_upstream | all external inputs | Received feed solutions are not burden-free. Separate integrated synthesis from blending; do not import urea-prilling or AN-granulation emission factors into this liquid route. Unknown supplier solution mass/dry-solute basis leaves background linkage pending. | eu-lvic-aaf-2007; efma-uan-2000 |
| boundary_losses | uan_mixing | Include actual external wastes and emissions and demonstrate recovery/containment. EFMA's achievable zero for non-pressure aqueous mixing depends on operation and recycle; it cannot set adjustment, storage, cooling or loss quantities to zero without evidence. Off-site treatment is linked, not removed. | efma-uan-2000 |
| boundary_extensions | uan_mixing | Verify the exclusion conditions before use. If added ingredients, utility chemicals, instrument air, steam, refrigerant, solid dissolution or final onsite treatment occurs, require scoped method evidence and its separate atomic inventory before calling the dataset complete. Disclose exclusion of capital construction and explain its relevance to the study. | eu-lvic-aaf-2007; efma-uan-2000 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| uan_mixing | Received-solution continuous mixing, pH control, water cooling, storage/recovery and bulk loadout | required | Only declared aqueous additive-free solution route; separately measured stages aggregated in one unit | Foreground production | 1 kg accepted net aqueous UAN solution |

### Process: Aqueous UAN mixing and bulk supply (`uan_mixing`)

Every external exchange below is collected for the same accepted output and period. Conditional absence requires evidence; blank UUIDs do not permit approximate replacements. Internal recycle, retained product and stage-transfer mass remain in physical ledgers rather than extra exchanges. No composition, yield, purification demand, density, loss or energy amount is prescribed.

#### Inputs

##### Product flows

###### Concentrated aqueous urea solution (`urea_solution`)

Received liquid feed only. Measure net delivered solution mass, urea assay, carrier water, temperature and supplier basis; do not use a solid-urea or kg-N record as this entire solution.

- Selected flow: Concentrated aqueous urea solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### Concentrated aqueous ammonium nitrate solution (`an_solution`)

Received AN solution, not CAN, double salt or solid prills. Retain actual NH4NO3 assay, water and trace impurities. A broad AN species identity does not establish the solution/provider mass convention.

- Selected flow: Concentrated aqueous ammonium nitrate solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### de-ionised water (`process_water`)

Purchased de-ionised water added for formulation or clean-water rinsing. Count only external additions; water already in feed solutions is included in their full supplied mass and is not another purchase.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### de-ionised water (`cooling_makeup`)

Purchased de-ionised make-up to the additive-free, indirect recirculating cooling-water loop when used. Keep its meter separate from formulation water and from internal circulated volume.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### Alternating current (`electricity`)

Meter electricity for feed pumps, electric actuators/instruments, mixing transfer, cooling fans/pumps and loadout at the declared low-voltage user boundary. Convert kWh to MJ; do not substitute a transmission service or thermal fuel. The selected native flow is CN grid-average consumption mix supplied to the user at <1 kV. For another geography, voltage or supply mix, verify a compatible flow and provider rather than extending this identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### Ammonia (`ammonia_adjustment`)

Anhydrous gaseous NH3 for pH adjustment only when used. Measure actual mass and purity, inlet state and dosing; aqueous ammonia, a generic nitrogen index and ammonium-ion emissions are different identities. Supplier background must match the actual delivery interface.

- Selected flow: Ammonia `9874382d-672c-4601-a3ce-9a4ae21e663b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### Aqueous nitric acid for UAN pH adjustment (`nitric_adjustment`)

When used, measure supplied solution mass, HNO3 assay and carrier water. Confirm its exact concentration and grade before UUID/provider linkage; neither a 40%, 50% nor 60% record covers all assays. Do not assume acid and ammonia doses both occur.

- Selected flow: Aqueous nitric acid for UAN pH adjustment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

#### Outputs

##### Product flows

###### Mixtures of urea and ammonium nitrate in aqueous or ammoniacal solution (`uan_product`)

One final accepted bulk aqueous UAN solution output after cooling, storage and net loadout acceptance. It includes measured dissolved urea, AN, residual free ammonia and water, but excludes shipping equipment. Internal blended solution and storage transfers are not additional reference outputs.

- Selected flow: Mixtures of urea and ammonium nitrate in aqueous or ammoniacal solution `0dc0af45-dde1-49e1-85d7-887b9c3f193d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

##### Waste flows

###### Off-specification aqueous urea-ammonium-nitrate solution for external treatment (`rejected_solution`)

Only net solution actually sent outside the unit as waste. Measure urea, nitrate/ammonium nitrogen, free ammonia, water, contamination and receiver conditions. Material recovered within the same unit remains an internal loop, not a waste output or credit.

- Selected flow: Off-specification aqueous urea-ammonium-nitrate solution for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### Urea-ammonium-nitrate-bearing cleaning wastewater for external treatment (`nitrogen_wastewater`)

Segregate cleaning/leak-collection wastewater not reused from rejected saleable concentrate. Measure water mass and nitrogen species/organic carbon; retain external treatment acceptance. Do not select electro-manganese-residue washing wastewater or a pollutant monitoring index.

- Selected flow: Urea-ammonium-nitrate-bearing cleaning wastewater for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### Additive-free indirect cooling-water blowdown for external treatment (`cooling_blowdown`)

Only when the indirect recirculating loop has an external liquid purge. Measure salts, temperature, water mass and absence/presence of product leakage; do not combine it with nitrogen-bearing cleaning wastewater. A contaminated purge requires its composition and receiver to be reconsidered.

- Selected flow: Additive-free indirect cooling-water blowdown for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

##### Elementary flows

###### ammonia (`ammonia_air`)

Actual NH3 reaching outdoor air from pH adjustment, vents, storage and loadout after any recovery; compartment is air, unspecified, CAS7664-41-7. Collect actual occurrence and species mass, not kg N or aqueous ammonium. Normal mixing has no prescribed emission factor; unknown losses are not zero.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

###### water vapour (`water_vapour_air`)

Actual evaporated water reaching outdoor air from the cooling loop or liquid storage, CAS7732-18-5; air, unspecified. Distinguish evaporation from full recirculating water flow, liquid blowdown, condensate recovery and water retained in UAN.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual external quantity in the same period with the linked protocol and divide by accepted net supplied product mass; demonstrate non-occurrence, never replace unknown quantity with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`; `efma-uan-2000`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all inventory rows | Retain the full physical mass/water/N/carbon ledger, stocks and internal-return measurements before assigning burdens. Internal recovered UAN and water are not co-products, avoided-product credits or external exchanges. Waste remains waste unless its actual beneficial product identity and recipient are separately established. | efma-uan-2000 |
| allocation_grade | uan_mixing | Only one accepted product grade is represented by this dataset. Subdivide shared meters by measured line/grade activity and demonstrably causal pumping/cooling or cleaning demand; justify the key and uncertainty using site records. No generic mass fraction, energy demand or economic share is imposed. Never multiply physical product or waste output by an environmental allocation share. | eu-lvic-aaf-2007; efma-uan-2000 |
| allocation_extension | uan_mixing | A genuine exported usable heat stream or co-product falls outside this scoped single-product mixing method; establish functions, measurements and a justified allocation/subdivision rule before extension. No automatic negative burden for sump recovery, off-spec waste or hypothetical heat recovery. | eu-lvic-aaf-2007; efma-uan-2000 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collect raw unallocated totals for one justified complete site, route, grade, supplied-state and representative campaign/year pool. Include attributable failed and zero-accepted-output operations, starts/stops, cleaning and rework; do not select only successful batches. Reconcile opening/closing raw-material, work-in-progress, rework and finished stocks with their carried burdens so prior-stock dispatches are not paired with current processing alone. Align feed receipt, dosing, utilities, recovery, losses, acceptance, returns/reacceptance and dispatch by lot. Each accepted net product lot is credited once; internal recovery/rework is not new production. Protocol aggregation columns and inventory amount rules state the final per-reference basis, not extra divisions; retain raw totals until period_normalisation. These are future primary-data requirements, not an existing site survey.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | uan_mixing | uan_product | Dispatch and acceptance | SKU; route; additives absence; equipment compatibility; net loaded mass; acceptance/return/reacceptance lot links; opening/closing stocks and WIP with carried burdens; urea/AN/free NH3/water/impurities; total-N and N forms; density/T; pH; receiver | Calibrated tank/loadout mass meter or calibrated truck gross/tare scales; lot sampling with traceable urea, nitrate, ammoniacal-N and total-N analyses; verify supplied mass and composition closure, reconcile stock-adjusted accepted output | kg | Continuous metering and every accepted lot | Same complete campaign/year | Same aqueous grade and site | per 1 kg reference flow | Meter calibration; laboratory method and uncertainty; lot acceptance; stock reconciliation; actual formulation and corrosion-compatible equipment evidence |
| cp_feed | uan_mixing | urea_solution; an_solution; ammonia_adjustment; nitric_adjustment | Feed receipts and dosing | Supplier/source; lot; net solution mass; actual assay and species basis; water; temperature/density; gas T/P and purity; stock change; dosing and pH | Calibrated mass flow meters and stock-corrected receipt/dosing records; representative lot analyses. Any volume-to-mass conversion requires measured same-temperature density; gas conversion requires actual T/P/composition/Z and supplier volumetric convention | kg | Continuous feed/dose plus every incoming lot | Same complete campaign/year | Same mixing-line boundary | per 1 kg reference flow | Assay provenance; full supplied-mass versus active-component ledger; meter calibration; supplier interface and provider denominator |
| cp_water | uan_mixing | process_water; cooling_makeup; water_vapour_air | Water meters and balances | Separate formulation/rinse/cooling inlet masses; circulating flow; stocks; retained product water; recovery; blowdown; evaporated mass; leakage; measurement uncertainty | Calibrated inlet meters; distinguish external make-up and internal recirculation; reconcile supplied-solution water, retained product, recovered liquid, measured blowdown and independently assessed evaporation; unclosed residual remains pending | kg | Continuous meters and each cleaning/stock event | Same complete campaign/year | Process and indirect cooler, separate sub-meters | per 1 kg reference flow | Water-balance residual; method for evaporation; recovered-liquid routing; additive-free cooling confirmation |
| cp_energy | uan_mixing | electricity | Electric meters | kWh by pump/fan/actuator/control/loadout stage; <1 kV interface; meter coverage; shared grade activity; supply region/time | Calibrated user-side electric submeter totals; retain stage and operating-mode attribution and use 3.6 MJ/kWh; no imported steam or fuel inferred from an energy label | MJ | Continuous meter and period reconciliation | Same complete campaign/year | Same electric-drive mixing and cooler | per 1 kg reference flow | Meter calibration; causal sharing key and uncertainty; provider grid/voltage and quantity compatibility |
| cp_waste | uan_mixing | rejected_solution; nitrogen_wastewater; cooling_blowdown | Waste transfer and analyses | Stream identity; net waste mass; urea/AN/N forms/free NH3/water/organic C; salts; temperature; contamination; internal-return split; receiver; acceptance; treatment | Separate calibrated weighing/volume and measured density, transfer tickets and representative analyses; reconcile all non-recycled external liquid transfers; verify receiving-treatment conditions. Do not count recycled material as an external waste | kg | Every external transfer and representative stream sample | Same complete campaign/year | Separate off-spec, cleaning effluent and cooling purge | per 1 kg reference flow | Receiver permit/acceptance evidence; composition and density; measured return routing; waste-versus-product decision |
| cp_air | uan_mixing | ammonia_air | Species-resolved vents and fugitives | NH3 concentration definition; gas flow; normal T/P; wet/dry convention; operating duration; recovery; fugitive losses; uncertainty | Identify vent/storage/loadout points and actual release occurrence; integrate species-compatible concentration and gas volume, plus separately assessed fugitives after recovery. No emission requires verified closed operation/recycle evidence, not an assumed EFMA zero | kg | Representative monitored modes including dosing and loadout | Same complete campaign/year | Outdoor boundary of declared mixing/storage/loadout | per 1 kg reference flow | NH3 versus N basis; sampling and gas-state compatibility; recovery capture; completeness and detection-limit treatment |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | For each non-reference exchange i, a_i = Q_i / P exactly once. Q_i is its raw stock-reconciled attributable amount for the complete matched pool above, before any per-kg division. P is unique accepted net supplied UAN kg for that pool, reconciled with production, returns/reacceptance, delivery and stocks and their matched burdens. Keep failed/zero-output/rework burdens and exclude internal returns as new external exchanges. P must be positive; if the complete pool has no positive P, retain totals for a justified matched wider pool or report the unit result unavailable, never zero burden or division by zero. Keep uan_product exactly 1 kg. | Q_i; P; collection records | Exchange per 1 kg reference flow | eu-lvic-aaf-2007; efma-uan-2000 |
| solution_components | urea_solution; an_solution; nitric_adjustment; uan_product | Component mass = supplied solution mass times its measured component fraction. Carrier water is separately analysed or derived from a complete validated composition, not every unidentified non-active remainder. Component ledgers never add extra external feed exchanges. | Supplied masses; assays; complete compositions | Species and carrier-water ledgers | efma-uan-2000 |
| nutrient_result | uan_product | Nitrogen output = P times measured total-N mass fraction. An explicitly optional per-kg-N result divides the supplied-product inventory by the same measured fraction; keep urea-N, ammoniacal-N and nitrate-N analytical bases consistent. It does not replace the 1 kg solution reference. | P; measured total-N; measured N forms | Declared kg N and separately labelled nutrient result | yara-uan32; efma-uan-2000 |
| electricity_conversion | electricity | MJ = measured kWh times 3.6; retain actual user voltage and provider definition. | Metered kWh | MJ electrical input | efma-uan-2000 |
| air_integration | ammonia_air | Integrate compatible NH3 species concentration times gas volume over measured modes; for mg/Nm3 times Nm3 divide by 1000000 for kg. Match T/P, wet/dry and N versus NH3 definitions and add separately assessed fugitives once. | Concentrations; gas volumes; measured operating modes; fugitives | External NH3 species mass | efma-uan-2000 |
| physical_balance | all inventory rows | Reconcile feed inputs against full net accepted solution, external wastes, evaporated water, NH3 emissions and stock changes in total-mass, water, elemental-N and urea-carbon ledgers. pH neutralisation can change N speciation; measured recovery and compositions govern, not a fixed yield. Compare every internal link at both ends. Preserve residual and uncertainty. | Feed/output/waste assays; meters; stock and recycle records | Reconciled physical balance with uncertainty | eu-lvic-aaf-2007; efma-uan-2000 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Exact physical state, composition, route and recipient; blank UUID is a named identity gap. Match the reference aqueous subset and official flow names; inspect contrary CAS or hard route limits before use. | Lot/SKU evidence; retained flow identity support; un-cpc3-3461 |
| dq_provider | all external inputs | Match actual solution assay, supplied/dry/N denominator, electricity voltage, geography/time and waste receiver. Flow identity is separate from background quantitative compatibility. | Supplier declarations and reference-amount definitions |
| dq_completeness | uan_mixing | Include same-period stocks, startup/shutdown, dosing, cooling, cleaning, recovery and non-recycled losses. No extrapolated recipe or blanket zero; extend inventories for confirmed unexpected species without duplicating nested PM categories. | Complete meters/assays and event records; efma-uan-2000 |
| dq_scope | uan_mixing | Prove additive absence and electric additive-free water-cooling configuration before applicability. Source examples and historical zero-emission potential do not prove the current site or set defaults. | Actual formulation, equipment and operating evidence; eu-lvic-aaf-2007; efma-uan-2000 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | uan_product | Require exactly one final product output linked as uan_product, 1 kg net supplied solution, with the same inventory, protocol and calculation denominator. Product mass includes water; internal transfers are not extra reference products. | efma-uan-2000 |
| validate_applicability | uan_mixing | Check aqueous solvent, continuous received-solution route, absent product additives, compatible corrosion protection, declared electric water cooling, composition/N forms and bulk acceptance. CPC title or similar fertilizer use cannot establish applicability. | eu-lvic-aaf-2007; efma-uan-2000; un-cpc3-3461 |
| validate_balance | all inventory rows | Reconcile mass/water/N/carbon and stocks, actual pH inputs, internal-return equality, external wastes/emissions and energy; report residuals/uncertainties. No hidden default quantity, near-match UUID or supplier-basis substitution. | eu-lvic-aaf-2007; efma-uan-2000 |
| validate_losses | uan_mixing | Independently verify loss/recovery evidence, no-release claims and receiver conditions. Unknown or below-detection losses retain their treatment and uncertainty. Elementary NH3 is outdoor-air species mass; water vapour is evaporated water, not circulated or drained liquid. | efma-uan-2000 |
| validate_gaps | all inventory rows | Exact missing flow identities and unmatched providers remain explicitly pending. A concrete dataset cannot claim complete identity linkage or full quantitative validation while an applicable row is unresolved. Any actual excluded utility/ingredient/operation needs evidence and a method extension before acceptance. | eu-lvic-aaf-2007; efma-uan-2000 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after complete foreground collection and declared review |
| downstream_use | Supply-chain models requiring the same aqueous UAN grade, route and factory-gate net solution basis |
| allowed_use | Explicitly qualified product supply; optional separately labelled nutrient normalization with measured N fraction |
| excluded_use | Universal fertilizer recipe; pure urea/AN substitutes; ammoniacal/additive mixtures; solid dissolution or integrated syntheses; equal crop performance; farm application emissions; packaged product |
| required_metadata | Site/period/route; full supplied composition/N forms; acceptance; stock-adjusted denominator; feed origins/assays; corrosion and cooling configuration; reference property; providers and quantity definitions; transport and capital boundary |
| required_quality_disclosure | Source age and dependence; inventory/measurement coverage; identity/provider gaps; balance residuals; uncertainty and detection limits; recovery/no-release evidence; independent review status |
| update_trigger | Change in grade/solvent/additive, input state or origin, cooling/utility/process route, recovery/receiver, supplier quantity convention, monitoring evidence or material mass-balance failure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-3461 | official_guidance | [UNSD CPC Version3.0 class3461](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/3461), accessed 2026-10-14; subclass34616 | Official classification boundary includes aqueous or ammoniacal mixtures; supports narrower proposal, not recipe or methodology approval |
| eu-lvic-aaf-2007 | official_guidance | [European Commission LVIC-AAF BREF, August2007](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf), §§8.1,8.2.2/Figure8.2,8.4.14,8.5; printed323,326,361–362; PDF351,354,389–390 | Received-solution continuous mixing/pH/cooling/storage; alternative integrated route exclusions. Urea finishing, consumption and treatment figures are not this route's defaults. BREF cites EFMA2000 and is not independent of that source |
| efma-uan-2000 | handbook | [EFMA Production of Urea and Urea Ammonium Nitrate, Booklet5,2000](https://www.fertilizerseurope.com/wp-content/uploads/2019/08/Booklet_5_final.pdf), §§9.1–9.5,9.8/Figures6–7; printed29–32; PDF31–34 | Actual mixing-route decomposition, conditional corrosion inhibition/equipment protection, pH reagents, utility/containment/recycle and process monitoring. Historical recipe/grade/utility data and achievable zero emissions are conditional observations, not universal values |
| yara-uan32 | handbook | [Yara UAN-32 SOLUTION](https://www.yara.us/crop-nutrition/fertilizer-products/other-fertilizers2/uan-32-solution/), product description and Nutrients, accessed2026-10-14 | Producer original confirms commercial liquid UAN and three N forms. One product; no route, absence of additives, universal formula, quantity or target-site claims |
