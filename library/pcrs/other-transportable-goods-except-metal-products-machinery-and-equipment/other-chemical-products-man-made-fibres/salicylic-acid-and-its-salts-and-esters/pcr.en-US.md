---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.salicylic-acid-and-its-salts-and-esters
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Technical solid salicylic acid from solvent-free sodium-phenoxide carboxylation

## 1. Scope and Applicability

This method covers one technical solid salicylic-acid product made by phenol/NaOH salt formation, dehydration, CO2 carboxylation without added organic solvent, sulfuric-acid precipitation, isolation, washing and drying. Salicylic acid is 2-hydroxybenzoic acid, CAS 69-72-7, C7H6O3. A producer product page supports technical powder supply; an original process patent supports process decomposition. They do not prove that this producer uses the selected route. [alta-salicylic-technical; jansen-salicylic-1983]

Exclude sodium and other salicylate salts, methyl and other salicylate esters, acetylsalicylic acid, meta/para-hydroxybenzoic acid, other substituted isomers, drug formulations, plant extracts, crude wet-cake references, organic-solvent suspension routes and hydrochloric-acid acidification. Patent operating conditions, assay, yields and recipes are not universal inventory factors. The producer technical-grade table repeats pharmacopoeial grade labels; this does not establish pharmaceutical use, efficacy, dose or compliance. Suspension-route experiments only flag condition-dependent hydrolysis and side reactions; their yields and solvent inventory do not transfer to this route. [alta-salicylic-technical; jansen-salicylic-1983; mohammad-kolbe-2024]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.salicylic-acid-and-its-salts-and-esters |
| classification_refs | CPC 3.0 35210; narrower; free solid acid only; positive mapping not accepted here |
| covered_products | Technical solid salicylic acid with declared actual assay, moisture and impurities |
| excluded_products | Salts; esters; isomers; drug formulations; crude wet cake; solvent-suspension and HCl routes |
| representative_product | Technical 2-hydroxybenzoic acid powder, CAS 69-72-7 |
| production_route | Phenol/NaOH; dehydration; CO2 carboxylation without added organic solvent; H2SO4 precipitation; isolation, washing and drying |
| market_state | Technical solid powder; net delivered; packaging and actual moisture separately declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Technical solid salicylic acid, CAS 69-72-7 |
| How much | 1 kg |
| How well | Free acid meeting the declared actual technical specification; no pharmaceutical or pharmacopoeial claim |
| How long or cycle | One declared actual delivery period and matched batch cohort, tracking finished goods and WIP across periods |
| reference_flow_link | delivered_salicylic_acid |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Salicylic acid and its salts and esters `3ae4ae3f-644a-4d9e-914c-594419243d1f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS 69-72-7; route without organic solvent and sulfuric acid acidification; solid powder grade; as-supplied assay and moisture; actual net delivery gate; period and batch genealogy; opening/closing WIP and finished-stock carried burdens; packaging tare and composition; site and supplier geography; returns and rework; provider/receiver compatibility; broader native reference and independently qualified single chemical identity |

Declare all required qualifiers in dataset metadata or equivalent fields. The reference UUID preserves the broader native name Salicylic acid and its salts and esters: manufactured finished Product, production mix at plant, Mass/kg. Native CAS, assay, solid/liquid form, grade, process, provider and geography are absent; no physical acid/salt/ester mixture or salt/ester-only restriction is asserted. Independently establish the actual single technical solid free acid CAS 69-72-7 and this method route, with lot-specific as-supplied assay and moisture. The broad name is not a mixture or selectable output and cannot substitute actual salts, esters, isomers or crude wet cake. The UUID supplies neither provider burdens nor scientific approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the unique positive actual net delivered and accepted mass of the same product/route/state in the period, excluding packaging tare. Q is not quality-released production; undelivered closing finished goods do not enter Q. Link returns to reverse their original delivery; reacceptance/redispatch after rework cannot create duplicate production or delivery. |
| solution_mass | sodium_hydroxide_solution; sulfuric_acid_solution | Mass | kg | Whole supplied formulation mass is the procurement exchange; component mass equals supplied mass times measured fraction. Carrier water is a constituent subledger, not another purchase. Onsite preparation retains each actual purchased ingredient and blending burden. |
| volume_energy | carbon_dioxide_feed; process_water; steam; electricity | Actual measured dimension | kg; kWh | Convert volume using measured temperature, pressure, composition, wet/dry basis and compressibility or applicable density. Already integrated volume receives no further time factor; integrate a rate only over its matching duration. Electricity 1 kWh=3.6 MJ; steam mass and enthalpy conversion are separate subledgers, without duplicate energy. |
| ledger_basis | all inventory rows | Actual raw-period dimension | kg; kWh | Collect complete undivided raw-period numerators and stock burdens. Only normalize_delivery divides the numerator attributable to the delivery cohort by Q once. Card and protocol aggregation describe that same reporting operation, not sequential repeated division. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual receipt of phenol, caustic solution, CO2, sulfuric acid, water and external utilities, with opening WIP/finished goods |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | Free solid-acid subset of CPC 35210 |
| recursive_input_rule | Pair and cancel internal recovered phenol/CO2/acid/water; identify external returns as actual supplies without recursive invented new production |
| upstream_dataset_requirement | Supply datasets matching actual whole formulation, concentration, route, geography and unit; external wastes matched to actual receiver treatment |
| disclosure | Raw-material receipt to actual net gate delivery, including actual storage, packing, handling and dispatch; disclose capital and downstream use/disposal boundary |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | sa_delivery | Retain salt formation, dehydration, carboxylation, phenol recovery, sulfuric precipitation, filtration/washing/drying, quality release, actual storage/packing/handling/dispatch, cleaning and actual abatement. Include start/stop, failed/zero-output and rework operations. If subdivided, match transfer amount, composition and burdens and cancel internal exchanges on consolidation. | `jansen-salicylic-1983`; `jrc-ofc-2006` |
| boundary_stock | sa_delivery | Keep quality release and delivery in separate ledgers. Bring opening finished goods and WIP with carried burdens; retain undelivered closing stock and its burdens for later periods. Never presume release equals delivery or add same-batch closing finished goods as another reference output. Retain actual storage/dispatch burdens rather than dropping them through a gate change. |  |
| boundary_fate | sa_delivery | Identify actual waste origins and composition before matching receiver treatment. External contaminated-water transfer is a waste exchange, not simultaneously a direct water emission. For onsite treatment include actual chemicals, energy, sludge and post-treatment species, expanding atomic rows rather than substituting pollutant totals for species. | `jrc-ofc-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sa_delivery | Technical solid salicylic acid manufacture to actual gate delivery | required | Same qualifying product, route, state and matched delivery cohort | foreground_production | 1 kg |

### Process: Manufacture, storage and actual delivery (`sa_delivery`)

This is a minimum discovery frame, not a fixed recipe or closed species list. Determine actual presence and collect each applicable row; unmeasured is not zero. Add specific atomic rows for each actual additional fuel, air input, refrigerant, cleaning chemical, filter medium, recovered coproduct, packaging component and emitted species. Internal intermediates retain complete transfer ledgers without becoming additional terminal products. Utility, packaging, waste and emission UUIDs remain unresolved; retain real quantities and later provider/receiver matching obligations.

#### Inputs

##### Product flows

###### Phenol (`phenol`)

Fresh phenol entering sodium-phenoxide formation. Native identity is a Product flow, production mix at plant GLO, explicitly feedstock for alkali phenoxide formation and the Kolbe–Schmitt salicylic route; native CAS and geography/locationOfSupply are absent and name flowProperties is absent. No grade, concentration, supplier or upstream phenol route is specified. Match actual CAS 108-95-2, phase, assay and supplier independently; GLO is not evidence for a local supplier or a market-average burden. Only Mass 1.0 is supplied; no density or recipe is inferred.

- Selected flow: Phenol `87ff97b9-1e2a-41d5-87e2-df340b1efc01`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Aqueous sodium hydroxide solution (`sodium_hydroxide_solution`)

Whole purchased caustic solution at its actual declared mass fraction; NaOH and carrier-water masses are constituent subledgers, not two extra purchases. If diluted onsite, retain the actual separately purchased feed solution and dilution water and blending energy. Do not assign a 30%, 40% or 50% identity without matching actual supply.

- Selected flow: Aqueous sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Supplied carbon dioxide gas (`carbon_dioxide_feed`)

Fresh carboxylation gas crossing the foreground boundary. Record actual origin, purity, moisture, pressure and gas mass; internal recycled CO2 is circulation. CO2 feed is not an elementary atmospheric uptake or an automatic avoided-emission credit.

- Selected flow: Supplied carbon dioxide gas
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Aqueous sulfuric acid solution (`sulfuric_acid_solution`)

Whole purchased acid formulation used to precipitate free salicylic acid from sodium salicylate. Declare actual H2SO4 fraction, water and impurities; do not substitute pure-acid mass for solution procurement. This method selects sulfuric acid; an HCl route requires a distinct reviewed species/salt inventory.

- Selected flow: Aqueous sulfuric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Supplied process water (`process_water`)

Actual external water for salt dissolution, washing, cleaning and cooling-system make-up; distinguish each service submeter. Water already present in purchased caustic or acid is not purchased again. Internal wash-water reuse and condensate recycle are paired internal transfers.

- Selected flow: Supplied process water
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Activated carbon (`activated_carbon`)

Conditional actual fresh adsorbent for decolourisation; record carbon grade, dry mass and supplied moisture. No patent dosage is a default. Spent carbon remains a separate wet waste stream with retained adsorbate composition.

- Selected flow: Activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Purchased electricity (`electricity`)

Meter full-period mixing, vacuum drying, compression, cooling, filtration, final drying, storage, bagging, handling and dispatch electricity. Independently identify actual voltage, region, grid or onsite supply and provider; no unverified grid UUID is adopted.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Purchased process steam (`steam`)

Actual imported steam mass with header pressure, temperature, quality and condensate return. Keep delivered enthalpy as a conversion subledger, not an additional purchased heat exchange. Onsite generation requires actual fuel, combustion air, water and individual stack species rows instead of duplicating imported steam.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Woven polypropylene sack (`pp_bag`)

Conditional actual outer sack component. Weigh the whole component, record fresh/reused supply, opening/closing packaging stocks, damage and reuse cycles. The producer product page establishes bagged supply only and does not establish polypropylene composition; actual packaging specification is mandatory.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`; `alta-salicylic-technical`

###### Polyethylene bag liner (`pe_liner`)

Conditional single actual liner, recorded separately from the sack. Its physical mass is complete before reuse-service allocation. Packaging tare never enters salicylic-acid delivery Q. Add separate atomic rows for every other actual closure, paper layer, pallet or packaging component.

- Selected flow: Polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`; `alta-salicylic-technical`

#### Outputs

##### Product flows

###### Technical solid salicylic acid (`delivered_salicylic_acid`)

The only terminal reference output: actual net delivered and accepted technical solid 2-hydroxybenzoic acid, CAS 69-72-7, after quality release, storage, packaging and gate dispatch. The display preserves the full native name Salicylic acid and its salts and esters, binding only a broader manufactured finished Product, production mix at plant and Mass/kg identity with no native CAS, assay, form, grade, process, provider or geography. The actual exchange remains the independently qualified single solid free acid, not a salt, ester, isomer, mixture or crude wet cake. Declare batch assay and water on supplied-mass basis. No drug efficacy, dose or pharmacopoeial status is inferred.

- Selected flow: Salicylic acid and its salts and esters `3ae4ae3f-644a-4d9e-914c-594419243d1f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`; `alta-salicylic-technical`

###### Returned steam condensate (`returned_condensate`)

Conditional actual steam condensate returned to the steam supplier, with composition, temperature and receiver. It is an external water/enthalpy return, not a second acid reference or an automatic credit; internal condensate reuse is eliminated on consolidation.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

##### Waste flows

###### Aqueous sulfate-bearing mother liquor (`mother_liquor`)

One actual mother-liquor purge transferred for treatment, including full water, sodium/sulfate and dissolved acid/phenol masses. Measure composition and receiver fate independently; do not assume saleable sodium sulfate or invent reaction water from a closure residual. Retain entrained salicylic acid losses.

- Selected flow: Aqueous sulfate-bearing mother liquor
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Phenol-containing aqueous condensate (`phenolic_condensate`)

Conditional actual dehydration/vacuum condensate sent outside the boundary. Measure total wet mass and phenol/water composition; internal recovery is not external waste. Separate this stream from mother liquor and spent carbon.

- Selected flow: Phenol-containing aqueous condensate
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Spent wet activated carbon (`spent_carbon`)

Conditional actual decolourisation filter residue sent to a receiver. Retain water, adsorbates and acid; do not simultaneously report the same contained phenol as a direct environmental release.

- Selected flow: Spent wet activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Rejected salicylic acid solid (`offspec_acid`)

Only rejected solid actually leaving as waste. Internal rework, quarantine and WIP are separate ledgers and never additional positive reference output. Retain failed/zero-output batch burdens, external returns and disposal treatment.

- Selected flow: Rejected salicylic acid solid
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

##### Elementary flows

###### Carbon dioxide to air (`co2_air`)

Actual uncaptured CO2 vent after recovery/abatement. Measure gas flow and species concentration over all operating modes, retain fossil/biogenic/other origin and receiving air medium. Feed CO2, internal recycle and retained product carbon are not the same release.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Phenol to air (`phenol_air`)

Actual species-resolved phenol release after abatement, including vacuum exhaust, storage and handling fugitives. Do not convert a VOC total, COD or unknown mass difference to phenol. Document detection limits, omitted modes and uncertainty.

- Selected flow: Phenol to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Water vapour to air (`water_vapour`)

Actual evaporated water reaching air, distinguished from recovered condensate, water in waste and water in product. An evaporation quantity establishes a phase transfer, not a reaction-water formation rate.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### Salicylic acid particulate to air (`acid_dust_air`)

Conditional measured salicylic-acid particulate after dust collection during drying, packing, storage or dispatch. Do not assign undifferentiated total dust to the acid without speciation. Collected dust reused internally is not another external exchange.

- Selected flow: Salicylic acid particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jansen-salicylic-1983`; `jrc-ofc-2006`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_internal | internal_recovery | Internal phenol, CO2, water and recovered acid are circulation, not fresh procurement, extra delivery or substitution credits. Verify net make-up, actual exported product and external waste separately. Dissolved salt in mother liquor does not automatically establish saleable sodium sulfate. | `jansen-salicylic-1983`; `jrc-ofc-2006` |
| allocation_causal | shared_operations | Prefer independently metered subdivision; allocate shared utilities using demonstrated causal drivers and retain reconciliation to the full totals. No universal economic/mass split is supplied. Real coproduct function, form, acceptance and allocation basis require independent evidence and review; unverified prices or theoretical salt yields cannot create credits. | `jrc-ilcd-allocation-2010` |
| allocation_stock | delivery_cohort | Carry each exchange component and burden through stock ledgers. Failed batches and irrecoverable losses cannot be parked in closing WIP to erase burdens. Record complete packaging physical mass before any separate reuse-service allocation; service shares do not replace whole physical amounts or create new procurement on every reuse cycle. |  |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | sa_delivery | delivered_salicylic_acid | acceptance_and_stock_ledger | period; batch/genealogy; CAS; route; grade; assay/moisture; gross/tare/net weighing; release; delivery; returns and original-delivery reversals; opening/closing finished goods/WIP mass and carried exchange burdens; reject/rework fate | owner=sa_delivery quality and warehouse ledger custodians. Verify same-batch actual gate-delivery weighing and acceptance, unique delivery identifiers and separate release records. Retain raw-period totals and stock components without division by Q. Prove delivered/undelivered mass and burden partition by batch; returns/reacceptance create no new production. | kg | Each batch and delivery | Full declared period plus prior-stock genealogy | Same site/route/state/delivery cohort | per 1 kg reference flow | Calibration, original ledger, batch genealogy, stock mass/burden reconciliation, gaps and uncertainty |
| cp_materials | sa_delivery | phenol; sodium_hydroxide_solution; carbon_dioxide_feed; sulfuric_acid_solution; process_water; activated_carbon | material_ledger | period/batch/operation; SKU/CAS; route; concentration/moisture/impurities; supplier/geography; receipt and consumption; opening/closing raw stock/WIP mass and carried burdens; recycle/rework; failed/zero-output runs; volume conditions and integration state | owner=sa_delivery production and materials custodians. Reconcile calibrated weights/flows and purchase specifications for each whole wet formulation, preserving complete undivided raw-period numerators and actual material consumption. Constituents are subledgers only. Track WIP carry with cp_gate and retain failed/rework inputs without collection-stage normalization. | kg | Each batch and supply lot | Full declared period plus prior-stock genealogy | Same site/route/state/delivery cohort | per 1 kg reference flow | Calibration, original ledger, batch genealogy, stock mass/burden reconciliation, gaps and uncertainty |
| cp_utilities | sa_delivery | electricity; steam; returned_condensate | metered_utility_ledger | period/operation; meter start/end and unit; steam mass/temperature/pressure/quality/enthalpy; condensate return; power/rate and duration or integrated amount; storage duration; handling/dispatch; shared drivers and whole total; carried stock burdens | owner=sa_delivery energy and warehouse custodians. Retain full-period actual meter differences, failed/start-stop/cleaning/rework/storage/packing/dispatch energy and auditable allocation drivers without division by output. Meter steam and electricity separately; do not multiply integrated volume by time. Retain the corresponding stock-burden vectors. | kWh; kg; MJ | Continuous meters and batch reconciliation | Full declared period plus prior-stock genealogy | Same site/route/state/delivery cohort | per 1 kg reference flow | Calibration, original ledger, batch genealogy, stock mass/burden reconciliation, gaps and uncertainty |
| cp_packaging | sa_delivery | pp_bag; pe_liner | packaging_ledger | component; supplier/material specification; whole tare; receipt/issue/opening/closing stock; fresh/reused supply and cycles; damage/loss; cleaning water/energy; delivery batch; carried stock burdens | owner=sa_delivery packaging and warehouse custodians. Weigh each actual component and retain complete undivided period physical amounts and carried stock burdens. Apply service allocation only after physical accounting; do not replace whole mass by a service share. Exclude packaging tare from batch Q. | kg | Each packaging specification and issue batch | Full declared period plus prior-stock genealogy | Same site/route/state/delivery cohort | per 1 kg reference flow | Calibration, original ledger, batch genealogy, stock mass/burden reconciliation, gaps and uncertainty |
| cp_waste | sa_delivery | mother_liquor; phenolic_condensate; spent_carbon; offspec_acid | waste_transfer_ledger | period/batch/origin; wet mass/moisture; Na/S/C and actual species; samples; receiver treatment and transfer notes; acid losses to mother liquor; internal recovery; failed/rework runs; stocks and carried burdens | owner=sa_delivery environmental and production custodians. Weigh and sample each actual waste stream independently and retain full undivided period numerators. Verify failed-batch and mother-liquor fate and pair internal recycle. Contained pollutants in transferred wastewater are not direct emissions; retain treatment burdens separately. | kg | Each transfer and representative operating-mode sample | Full declared period plus prior-stock genealogy | Same site/route/state/delivery cohort | per 1 kg reference flow | Calibration, original ledger, batch genealogy, stock mass/burden reconciliation, gaps and uncertainty |
| cp_emissions | sa_delivery | co2_air; phenol_air; water_vapour; acid_dust_air | species_monitoring | period/mode/outlet or fugitive source; integrated gas or rate/time; wet/dry temperature/pressure; species concentrations and detection limits; pre/post abatement and efficiency; carbon origin; receiving medium; opening/closing burden attribution | owner=sa_delivery environmental monitoring custodian. Cover actual production, cleaning, start-stop, failed and storage/packing/dispatch modes, measuring gas and each species and retaining complete undivided period numerators. Integrate rates only over matching durations. Species and reaction water need independent evidence; COD/residual is not species measurement. | kg; m3; h | Continuous or representative profiles covering operating modes | Full declared period plus prior-stock genealogy | Same site/route/state/delivery cohort | per 1 kg reference flow | Calibration, original ledger, batch genealogy, stock mass/burden reconciliation, gaps and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| delivery_cohort | delivered_salicylic_acid | Q = sum of unique positive actual net delivered/accepted mass for the matched cohort, with returns reversing original deliveries. Reconcile physical events using FG_close = FG_open + Released + Returns_in - Deliveries_out - Rework_out - Losses. Release is not delivery; undelivered stock and its burdens remain at close; reacceptance creates no new production. | cp_gate | Q; physical finished-stock ledger |  |
| raw_conversion | all inventory rows | Retain original quantities and units first. Use actual measured liquid mass or volume with an applicable density; convert gas mass using actual composition, temperature, pressure, wet/dry basis and compressibility. Never multiply integrated volume by time; integrate rates over matching durations. Constituent subledgers only decompose whole formulations without new procurement. | cp_materials; cp_utilities; cp_emissions | R_i in each declared numerator unit |  |
| stock_burdens | all inventory rows | A_i = B_openWIP_i + B_openFG_i + R_i - B_closeWIP_i - B_closeFG_i - B_other_i. Terms are undivided burden vectors for the same exchange component. R_i retains the full period including failed/zero-output runs, losses, rework, storage/packing/dispatch and treatment. B_other_i is only independently evidenced attribution to other products, not an arbitrary credit. Stock carry needs genealogy and evidence; do not retain production burdens and charge the same stock again. Cancel same-cohort production/warehouse transfers on consolidation. This is burden attribution, not the current-period physical input/output mass ledger. | cp_gate; cp_materials; cp_utilities; cp_packaging; cp_waste; cp_emissions | A_i; documented burden-carry ledgers |  |
| normalize_delivery | all inventory rows | a_i = A_i / Q, reported per 1 kg reference flow only when Q>0. This is the sole normalization operation; inventory cards and protocol aggregation_rule describe this report without another division by Q. A zero-delivery period retains raw burdens and stock carry; it neither invents unit inventory values nor erases failed burdens. | A_i; Q; cp_gate | a_i per 1 kg reference flow |  |
| physical_species | all inventory rows | Independently reconcile complete wet physical mass and C/H/O/Na/S elements: opening plus actual external inputs equals actual external outputs plus closing, with internal circulation cancelled. Separately verify chemical water formation/consumption using independent species and reaction-extent evidence, distinguishing formulation carrier water, dissolution/wash water, free/structural water and phase transfer. This method supplies no reaction-water coefficient: patent dehydration is not formation measurement, and suspension hydrolysis experiments show condition dependence without transferability. Sulfuric acidification of salicylate cannot use a generic water-per-neutralisation template. Unknown reaction water and an unknown outlet cannot both be fitted to one residual; COD/TOC are not species. Investigate and disclose closure differences. | cp_materials; cp_gate; cp_waste; cp_emissions | independent physical/element and species/water ledgers | `jansen-salicylic-1983`; `jrc-ofc-2006`; `mohammad-kolbe-2024` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference product | Require the same actual technical solid free acid and exact native reference-property chain. A broader manufactured finished Product is usable only when complete native information has no true chemical, form, grade or route contradiction and independent evidence establishes the single acid CAS 69-72-7 qualifiers; missing native CAS is not a verified CAS. Reject actual salt/ester, isomer, mixture or crude wet-cake substitution and independently verify supplier and actual specification. | Complete native identity, exact reference chain and actual single-product specification |
| period | all inventory rows | Retain real period, cohort, failures/rework, stock/burden transfers, raw conversions and sole normalization evidence; unmeasured cannot be zero. | Protocol original ledgers and calibration |
| species | all inventory rows | Conservation checks, actual species and reaction-water evidence are independent; disclose closure differences, detection limits, geographic/temporal and provider/receiver mismatches. | Independent sampling/reaction evidence and complete reconciliation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Confirm technical solid free acid CAS 69-72-7, no-organic-solvent/H2SO4 route, actual specification and supplied moisture. reference_flow_link uniquely selects delivered_salicylic_acid, the same physical row in both languages. The broader UUID binding is not scientific approval; verify complete native limits and the actual single-product qualifiers, and reject use if a true contradiction or identity gap remains. | `alta-salicylic-technical`; `jansen-salicylic-1983` |
| validate_inventory | all inventory rows | Check atomic exchanges, direction, type, whole formulation, units and protocol owner. Retain complete native name components, absent CAS, GLO/at-plant limits and supply-geography uncertainty. UUID or Schema correctness does not prove provider-burden compatibility. |  |
| validate_ledger | sa_delivery | Prove delivery Q is distinct from release/stock and opening/closing WIP/finished burdens are complete and counted once. Retain actual failures/zero-output, rework, storage/packing/handling/dispatch and waste treatment. Check sole normalization and independent physical/element and species/water evidence; unknown is not zero. | `jrc-ofc-2006`; `mohammad-kolbe-2024` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Route-specific technical solid-acid gate data only after reference identity and dataset-quality gaps are resolved |
| allowed_use | Same product/state/route with declared geography/time, actual supply specification and verified provider/receiver matching |
| excluded_use | Salt/ester/isomer or drug-formulation substitution; efficacy/dose/pharmacopoeial approval; automatic carbon-removal credit; treating draft as approved methodology |
| required_metadata | Identity and actual reference gate; period/cohort; raw stocks/burden carry; supply specification; utilities; packaging; treatment and provider/receiver evidence |
| required_quality_disclosure | Broader native reference and independent single-free-acid qualifiers; auxiliary UUID/provider matching; native phenol limits; species/water evidence and closure differences; missing measurements/uncertainty; pending scientific review |
| update_trigger | Changed reference identity, route, acidifying reagent, grade/moisture, feed formulations, energy, site/period, packaging, waste receiver or measurement evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jansen-salicylic-1983 | literature | Jansen and Wolff. Chemical process. US4376867A (1983-03-15), original patent PDF pp. 2–3, columns 1–4. https://patents.google.com/patent/US4376867A/en | Process evidence for salt formation, dehydration, CO2 carboxylation, sulfuric precipitation, isolation and by-acid/mother-liquor losses; historical process examples, not proof of a current supplier route, universal yield, recipe, reaction-water coefficient or emission factor. |
| alta-salicylic-technical | literature | Alta Laboratories Ltd. Salicylic Acid, Technical Grade product table, snapshot 2026-10-16. https://alta.in/salicylic-acid/ | Technical coarse powder, CAS 69-72-7, 2-hydroxybenzoic acid and bagged supply identity. Actual route, bag material and universal assay are not established; repeated pharmacopoeial labels in the technical table and webpage efficacy claims are not adopted. |
| jrc-ofc-2006 | official_guidance | European Commission JRC. Reference Document on Best Available Techniques for the Manufacture of Organic Fine Chemicals (August 2006), printed pp. 380–381, sections 5.2.1 and Table 5.1. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/ofc_bref_0806.pdf | Chemical waste-stream origins, balances, actual composition and operating-mode/species monitoring guidance; no universal salicylic-plant recipe, reaction-water or emissions factors, and COD/TOC are not molecular species. |
| mohammad-kolbe-2024 | literature | Mohammad, Onwudili and Yuan. Potential Large-Scale CO2 Utilisation for Salicylic Acid Production via a Suspension-Based Kolbe–Schmitt Reaction in Toluene. Molecules 29 (2024), 2527, section 2.2.1 and Scheme 4. https://doi.org/10.3390/molecules29112527 | Independent hydrolysis experiments and species counterevidence under toluene-suspension, added-water laboratory conditions. Used only to reject treating phase transfer or a universal template as actual reaction water; route, quantities, yields and side-reaction fractions do not transfer. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §7.9.3, printed pp.257–258 (PDF pp.277–278). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only the declared attributional context in which allocation is required: virtual subdivision, exchange-specific determining physical causality and only then contemporaneous market values of genuine residual co-functions in their actual condition at the same process exit. Supports allocation method, not this product’s industrial route, recipe, measured quantities, fixed shares, substitution credits or scientific approval; it does not literally prescribe this PCR stock/cohort implementation. |
