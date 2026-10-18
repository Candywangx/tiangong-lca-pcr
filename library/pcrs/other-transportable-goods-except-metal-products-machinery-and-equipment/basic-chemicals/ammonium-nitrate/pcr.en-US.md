---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-nitrate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Ammonium nitrate — dense fertilizer prilling

## 1. Scope and Applicability

This PCR covers dense, solid, straight ammonium nitrate (NH4NO3) fertilizer prills made by nitric-acid/anhydrous-ammonia neutralisation, evaporation, tower prilling, cooling, screening and bulk loading. It includes internal condensate and off-size recovery, air abatement and wastewater collection before external treatment. It is a manufacturing reference, not a fertilizer application service [eu-lvic-aaf-2007, epa-an-ap42-1993].

The AN crystalline phase is NH4NO3; a conditioned commercial SKU is an AN/additive/residual-water mixture, not a pure-species mass flow. Its supplied mass is distinct from active AN mass. Keep each site route and grade separate. Granulation, porous low-density explosive-grade prills, industrial explosives, aqueous AN sales, CAN mineral-filler mixtures, calcium nitrate/AN double salts, ammonium sulphate nitrate and UAN are excluded. A different use label alone does not create another PCR identity. Normal conditioning does not turn the method into a generic fertilizer-blending process: disclose the actual recipe, separately inventory each additive and obtain specific evidence for any additive not covered below. Yara PRILLED N illustrates a marketed prilled AN fertilizer; its nutrient declaration is not a generic recipe, purity or production quantity [yara-prilled-n].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-nitrate |
| classification_refs | CPC 3.0 34613; proposed narrower scope [un-cpc3-2025] |
| covered_products | Dense fertilizer-grade straight AN prills, with declared residual moisture and separately identified conditioning material |
| excluded_products | CAN; dual salts; ASN; UAN; AN solutions; porous explosive-grade AN; granulated AN; formulated explosives |
| representative_product | Accepted dense NH4NO3 fertilizer prills, measured grade, bulk delivery |
| production_route | HNO3/NH3 neutralisation; concentration; tower prilling; cooling; screening; optional conditioning; recovery; bulk loading |
| market_state | Solid dense prills at plant bulk dispatch, mass as supplied |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared straight AN fertilizer product; agricultural application performance is outside this manufacturing reference |
| How much | 1 kg accepted net finished product |
| How well | Declared AN assay, moisture, total N, nitrate-N, ammoniacal-N, prill size/density and conditioning recipe meeting actual grade acceptance |
| How long or cycle | At factory bulk dispatch during the recorded production period; no field-service duration |
| reference_flow_link | finished_prills |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ammonium nitrate `4d621a16-cd12-4fc1-9499-21cd8001941f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Dense fertilizer prills; NH4NO3 identity; acid/ammonia feed assay; AN assay; moisture; total N and nitrogen forms; prill size and density method; additives and carrier water; actual route; bulk net-mass basis; site and reporting period; steam recovery and wastewater destination |

The broad AN identity contains this subset without a contradictory route limitation. It does not establish any concentration, moisture or provider quantity. Declare every qualifier in data-package metadata, reference comments or process notes; an omitted qualifier leaves the package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net finished mass as dispatched, excluding packaging; retain water and actual additives in product mass. Apply cp_product. All exchanges use per 1 kg reference flow. |
| acid_solution_basis | nitric_acid_feed | Mass | kg | Record delivered aqueous acid mass and measured HNO3 mass fraction separately. Distinguish active acid and carrier water; a 60% identity does not describe another concentration. |
| nutrient_basis | finished_prills | Mass | kg | Product mass is not nitrogen mass. Convert only with measured lot-specific total-N mass fraction; keep ammoniacal-N and nitrate-N separately. Do not impose a commercial example as a default. Nitrogen in conditioning additives belongs in total N; do not infer AN assay from total N or assume an equal nitrogen-form split when such additives occur. |
| utility_basis | imported_steam, exported_steam, electricity | Recorded supplier property | kg or MJ | Preserve steam mass and thermodynamic records; net delivered heat requires matching supplier and condensate-return bases. The selected electricity reference property is Net calorific value, measured as electrical energy, with MJ inventory and 3.6 MJ per metered kWh. |
| emission_species_basis | ammonia_air, nitric_acid_air, pm25_air, pm25_10_air, pm_over10_air | Mass | kg | Preserve molecular mass basis and sampling wet/dry conditions; particulate fractions must not overlap or double count separately measured acid mist. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metered HNO3 solution, anhydrous NH3, purchased water, electricity and external saturated steam received by the AN plant |
| starting_condition_role | Supplier-interface foreground manufacturing start; link upstream production and delivery to compatible background providers |
| product_classification_scope | Dense straight AN fertilizer prilling subset of CPC 3.0 34613; neighbouring mixtures are excluded |
| recursive_input_rule | Internal remelted prills and recovered AN-bearing solution stay internal. Purchased AN for rework requires an explicit distinct upstream production dataset, not recursive self-supply or an omitted burden. |
| upstream_dataset_requirement | Link nitric-acid production including its actual N2O/NOx burden and ammonia production to separate upstream providers; do not insert their factory emissions again into this foreground. |
| disclosure | Feed assays, net supplied product basis, allocation, utility boundary, emission controls, condensate recovery, steam recipient and waste-treatment interface |

- `boundary_route`: Include feed storage/preheating/vaporisation, neutralisation, concentration, prilling, cooling, screens, conditioning actually used, product storage/loading, recovery and control equipment. Combine stages into one foreground unit while retaining stage meters and physical links with equal quantities at both ends [eu-lvic-aaf-2007, epa-an-ap42-1993].
- `boundary_utilities`: Internally generated steam/condensate and recirculated cooling water are physical loops, neither new purchased inputs nor automatic credits. External steam production is an upstream unit; an onsite boiler requires a separate fuel, water and combustion inventory and source-specific method before inclusion. No boiler emissions are inferred from the AN process sources [eu-lvic-aaf-2007].
- `boundary_wastes`: Include residual purge and non-recycled solids sent to declared external treatment. This boundary requires offsite final wastewater treatment and excludes direct final liquid discharge; onsite biological treatment or direct discharge needs additional specific inventories including water, nitrogen species, treatment chemicals, sludge and applicable gaseous emissions. A burdenless wastewater cutoff is not conforming [eu-lvic-aaf-2007].
- `boundary_complete`: Quantify transport services, maintenance consumables and packaging when included in a concrete study using separate actual-material/service rows and compatible providers. This reference ends at bulk loading and excludes bagged delivery, fertilizer application, capital construction and end use; disclose each study-specific extension or justified exclusion. Do not omit an actual ingredient, fuel, lubricant or waste because its row is unresolved.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| an_prilling | Integrated AN neutralisation and dense prilling | required | Nitric-acid/anhydrous-ammonia route, dense fertilizer prills, bulk dispatch | Aggregated foreground unit with stage-level meters and recovery ledger | finished_prills; 1 kg accepted net product |

Neutralisation → evaporation → prilling → cooling/screening → surface conditioning/coating when used → bulk loading. Where used, record the actual magnesium nitrate feed addition at its documented melt-side dosing point before prilling, whether before, during or after concentration, and attribute its actual dosing energy and material losses to that stage; this is distinct from downstream surface coating. Scrubber liquor, safe fines and condensate return to explicitly recorded stages. Keep this physical mass/water/nitrogen and energy ledger before allocation; an allocated burden ledger never replaces physical quantities.

### Process: Integrated AN neutralisation and dense prilling (`an_prilling`)

#### Inputs

##### Product flows

###### Ammonia, anhydrous (`ammonia_feed`)

Purchase or receive anhydrous NH3; include storage losses and vaporisation before the reactor. Record purity and delivered physical state. Aqueous ammonia is outside this feed definition.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Nitric acid aqueous feed (`nitric_acid_feed`)

Record each acid grade separately as delivered solution mass, with its measured HNO3 mass fraction and carrier water. The verified 60% candidate cannot represent other concentrations; select the exact provider grade before data production. Include separate acid dosing to scrubbers in the same acid ledger.

- Selected flow: Nitric acid aqueous feed
- Flow property / unit: Mass / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Alternating current (`electricity`)

Meter net purchased electricity for ammonia vaporisation, vacuum equipment, prilling air, cooling, screens, recovery and bulk handling. This UUID is restricted to CN, 1–35 kV, grid-average electricity consumption mix to user; another geography, voltage, supply mix or delivery interface requires its own verified identity. Record kWh and convert to MJ using 3.6 MJ/kWh.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### de-ionised water (`demineralised_water`)

Include only actual purchased de-ionised make-up for process and scrubber service. Record mass and water treatment provider; internal condensate return is an internal loop. Do not treat all cooling circulation as new water.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Tap water (`cooling_makeup`)

Conditional on actual treated tap-water cooling make-up. Record net make-up and blowdown separately; do not also count the provider water as a foreground elementary withdrawal. Other water sources require specific atomic rows.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Saturated process steam supplied to the AN plant (`imported_steam`)

Conditional external steam for evaporation, feed heating and conditioning. Require pressure (absolute/gauge distinguished), temperature, dryness, metered mass and return-condensate state. Preserve mass inventory; a supplier heat dataset can be linked only after its net heat basis matches the measured enthalpy balance. Do not adopt 11 MPaG or a food/paper-specific record by name.

- Selected flow: Saturated process steam supplied to the AN plant
- Flow property / unit: Mass / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Magnesium nitrate conditioning additive (`magnesium_nitrate`)

Conditional on a documented magnesium nitrate recipe. Record anhydrous/hydrated/solution state, CAS, purity, dose and carrier water for the actual grade. No generic recipe, dose or default benefit is specified. Other conditioners require separate species rows and source review.

- Selected flow: Magnesium nitrate conditioning additive
- Flow property / unit: Mass / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additives`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Kaolin anticaking coating (`kaolin_coating`)

Conditional kaolin coating, measured at the bulk product finishing stage. Require grade, mineral composition, moisture and actual mass. The candidate named Ex-Cha Kwo Ling Kaolin Mine is not accepted as generic coating material. Uncoated lots record non-applicability; other coatings require distinct atomic rows.

- Selected flow: Kaolin anticaking coating
- Flow property / unit: Mass / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additives`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

#### Outputs

##### Product flows

###### Ammonium nitrate (`finished_prills`)

1 kg accepted net finished dense fertilizer prills at bulk loading, including measured residual moisture and any declared conditioning material, excluding transport packaging. Only this final output is the reference flow.

- Selected flow: Ammonium nitrate `4d621a16-cd12-4fc1-9499-21cd8001941f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Purified neutralisation steam exported to another unit (`exported_steam`)

Only actual purified steam crossing the aggregated AN unit boundary is an output. Record recipient, mass, pressure, temperature, dryness and condensate return. Internal steam used for AN evaporation is an internal transfer, not a co-product. Do not equate contaminated process vapour with marketable steam.

- Selected flow: Purified neutralisation steam exported to another unit
- Flow property / unit: Mass / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

##### Waste flows

###### AN-bearing aqueous purge sent to external treatment (`purge_wastewater`)

Measure actual condensate/scrubber purge crossing to a named external treatment operator; record wet mass, density if volume-derived, NH4-N, NO3-N, other constituents, and receiving requirements. It is one aqueous waste stream, not an elementary ammonia/nitrate discharge. Recycling is not waste.

- Selected flow: AN-bearing aqueous purge sent to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### Non-recycled ammonium nitrate screening rejects (`rejected_prills`)

Conditional on off-spec prills or fines physically leaving to treatment. Record AN assay, moisture, coating/organic contamination and recipient. Re-dissolved safe fines remain internal. Safety-incompatible contaminated screenings must not be presumed recyclable.

- Selected flow: Non-recycled ammonium nitrate screening rejects
- Flow property / unit: Mass / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

##### Elementary flows

###### ammonia (`ammonia_air`)

Measure NH3 emitted after actual abatement from neutralisation, evaporation, prilling, cooling and handling, including fugitives. Record NH3 mass rather than N mass, sampling wet/dry gas basis and air subcompartment. No positive default emission is imposed.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### nitric acid (`nitric_acid_air`)

Measure emitted HNO3 vapour/mist as HNO3 mass after abatement. Separate from NH3 and particulate mass; disclose sampling coverage and whether condensed HNO3 is already included in a particulate test. Do not sum two measurements of the same material.

- Selected flow: nitric acid `1df287ba-2f10-461e-95ce-7714a3e76ac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### particles (PM2.5) (`pm25_air`)

Measure the PM2.5 fraction escaping to outdoor air after abatement; include submicron AN fume where the method captures it. Retained dust and recycled miniprills are not emitted mass.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### particles (PM2.5 - PM10) (`pm25_10_air`)

Use measured non-overlapping 2.5–10 micrometre mass. If monitors report cumulative PM10 and PM2.5 on compatible bases, calculate this fraction by subtraction; do not also inventory cumulative PM10. Historical low-density prill distributions cannot supply this fraction.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### particles (> PM10) (`pm_over10_air`)

Measure escaping particles above 10 micrometres from prilling, cooling, screening, coating and loading. Derive from compatible total and PM10 only when supported. Unknown size fractions remain unresolved rather than duplicated or set to zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

###### water vapour (`water_vapour_air`)

Record non-condensed process and cooling evaporation to outdoor air from the water balance; separate carrier water from imported de-ionised/tap-water inputs. Condensed and recycled water stays internal, and steam export is recorded separately.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual occurrence using the listed collection protocol and normalize by accepted net product mass in the same period; non-occurrence requires non-applicability evidence, not an assumed zero for unknown amounts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`; `epa-an-ap42-1993`

## 7. Allocation and Co-product Handling

- `allocation_physical_ledger`: Retain measured physical inputs, full prill output, exported steam, purge, solid rejects, emissions and opening/closing stocks before allocating environmental burdens. Internal recovered solution and fines are neither co-products nor avoided-production credits. Never multiply actual co-product mass or steam delivery by an allocation fraction [eu-lvic-aaf-2007, ec-pef-2021].
- `allocation_hierarchy`: Attribute separately measured feed handling, prilling, conditioning and waste treatment directly to their functions wherever subdivision is feasible. For genuinely shared neutralisation/steam-recovery burdens, investigate subdivision or an explicitly expanded system first. If neither is feasible, document a causally relevant measured physical relationship; kilograms of fertilizer and kilograms of steam are not automatically a causal key. If that relationship cannot be established, justify an economic key from contemporaneous AN and usable-steam values at the same transfer boundary. No fixed share is prescribed [ec-pef-2021, Annex I 4.5].
- `allocation_no_double_credit`: Use one declared treatment of steam export. An attributional product dataset reports allocated burdens and full measured exports; it cannot also subtract hypothetical avoided boiler production. Any separately presented expanded-system result requires demonstrated recipient function and compatible displaced supply, is labelled as an expanded-system result, and is not silently merged with the 1 kg AN product result [ec-pef-2021].

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Use one representative complete operating year or a justified complete campaign for the same route, supplied state and grade, with matching lot and meter coverage. Retain raw, unallocated period totals, including all attributable start-up, shutdown, idle, recovery, cleaning, off-spec, failed and zero-accepted-output batches and rework; do not select only successful batches. Reconcile opening/closing work in progress and finished stocks with their accumulated inventory burdens, documenting carry-in/carry-out attribution without lost or duplicated burdens. P is strictly positive final accepted net product produced for that pool, reconciled with production, loading and stocks; exclude final rejects and count returned, reworked and reaccepted material only once. Apply period_normalisation to each reconciled raw exchange total once; row, protocol and calculation descriptions denote that same division. A complete period with P <= 0 requires a justified wider representative period or an incomplete result. Disclose omitted periods and their effect on representativeness. Future producers collect these records; this PCR supplies no fabricated site survey or activity quantities.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | an_prilling | finished_prills | Weighing and grade acceptance | lot; gross/tare/net mass; AN assay; moisture; total-N; nitrate-N; ammoniacal-N; particle size; density method; recipe; stock changes | Calibrated bulk scales and retained lot assays; reconcile production, loading and product stocks; exclude packaging | kg | Every lot and dispatch | Same representative operating year or complete campaign | Declared AN line and grade | per 1 kg reference flow | Calibration, assay methods, acceptance and stock reconciliation |
| cp_feed | an_prilling | ammonia_feed; nitric_acid_feed | Feed metering and assays | source; delivered mass; NH3 purity/state; HNO3 mass fraction; acid grade; carrier water; reactor/scrubber split; loss; feed stock changes | Calibrated mass meters and supplier primary records plus representative assays; volume-derived mass uses measured density and temperature | kg | Each delivery and stage meter interval | Same product period | Feed storage, vaporisation, reactor and acid scrubbers | per 1 kg reference flow | Meter calibration, assays, provider specification and compatible quantity basis |
| cp_utilities | an_prilling | electricity | Meter record | kWh; voltage; utility boundary; stage; operating time; grid region; allocation evidence | Calibrated purchased/stage submeters; subtract only documented unrelated loads; reconcile with invoices | MJ | Meter interval and monthly reconciliation | Same product period | AN production, recovery and bulk handling | per 1 kg reference flow | Meter/invoice match and voltage/provider energy-property compatibility |
| cp_water | an_prilling | demineralised_water; cooling_makeup; water_vapour_air | Water balance | supplied water grade; metered mass/volume; density/temperature; acid/additive carrier water; condensate; make-up; blowdown; evaporated water; opening/closing stocks | Calibrated feed/cooling meters and validated stage water balance; identify each return loop and actual atmospheric evaporation | kg | Meter interval and balance period | Same product period | AN unit and cooling/recovery services | per 1 kg reference flow | Balance closure and instrument/density evidence, no automatic 1000 kg/m3 assumption |
| cp_steam | an_prilling | imported_steam; exported_steam | Steam and enthalpy balance | direction; recipient/provider; steam mass; pressure and gauge/absolute basis; temperature; dryness; condensate mass/state; internal recovery; heat basis | Calibrated steam meters and steam-table enthalpy determination from measured state; reconcile supply, condensate return, internal recovery and export | kg | Stage meter interval | Same product period | Actual AN utility transfer boundaries | per 1 kg reference flow | Meter calibration, measured state, supplier mass/heat reference definition and receiver evidence |
| cp_additives | an_prilling | magnesium_nitrate; kaolin_coating | Recipe and dose record | lot; individual chemical/mineral identity; CAS where applicable; hydration; purity; moisture; carrier water; weighed mass; loss; stock changes | Weighed batch dosing and supplier grade certificates; audit each constituent and separate carrier water without duplicate input | kg | Every lot | Same product period | Actual conditioner/coating dosing points | per 1 kg reference flow | Recipe approval, scale calibration and supplier composition; no historic formula default |
| cp_waste | an_prilling | purge_wastewater; rejected_prills | Waste transfer and characterisation | stream; wet mass; density if needed; AN assay; NH4-N; NO3-N; coating/organic contamination; destination; stock; internal reuse | Calibrated waste weighing/flowmeters, representative chemical analyses and receiver tickets; distinguish water-phase purge from solid rejects | kg | Each transfer and representative sampling | Same product period | AN unit to external treatment | per 1 kg reference flow | Recipient acceptance, composition, hazardous handling and provider requirements |
| cp_air | an_prilling | ammonia_air; nitric_acid_air; pm25_air; pm25_10_air; pm_over10_air | Post-abatement monitoring | source/stage; species; gas flow; concentration; temperature/pressure; wet/dry basis; hours; control uptime; size bins; fugitives; detection limit | Validated species-resolved stack testing/monitoring after controls, size-resolved particulate sampling and justified fugitive measurement; account for condensable AN fume and acid-mist overlap | kg | Continuous where available or representative tests for each operating mode | Same product period, including nonroutine operation | All actual AN vents, cooling, screens, coating and loading | per 1 kg reference flow | Sampling method, instrument calibration, control/bypass coverage and detection-limit treatment |
| cp_allocation | an_prilling | Shared AN/usable steam burdens | Engineering and commercial allocation evidence | direct burdens; shared burdens; AN output; steam output; useful heat; causal relationship; contemporaneous prices; chosen shares | Evaluate the hierarchy using actual stage meters and recipient utility records; justify any economic fallback and sensitivity | kg; MJ; currency | Annual or complete campaign assessment | Same product and steam period | Same AN and steam transfer boundary | per 1 kg reference flow | Written rationale, measured utility function, price dates and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | a_i = Q_i / P; Q_i is the measured external exchange in the declared period, P is accepted net prill mass in kg. finished_prills is 1 kg. Keep internal loops out of Q_i. Use one representative complete operating year or a justified complete campaign for the same route, supplied state and grade, with matching lot and meter coverage. Retain raw, unallocated period totals, including all attributable start-up, shutdown, idle, recovery, cleaning, off-spec, failed and zero-accepted-output batches and rework; do not select only successful batches. Reconcile opening/closing work in progress and finished stocks with their accumulated inventory burdens, documenting carry-in/carry-out attribution without lost or duplicated burdens. P is strictly positive final accepted net product produced for that pool, reconciled with production, loading and stocks; exclude final rejects and count returned, reworked and reaccepted material only once. Apply period_normalisation to each reconciled raw exchange total once; row, protocol and calculation descriptions denote that same division. A complete period with P <= 0 requires a justified wider representative period or an incomplete result. Disclose omitted periods and their effect on representativeness. Future producers collect these records; this PCR supplies no fabricated site survey or activity quantities. | Q_i; P; collection records | Exchange amount per 1 kg reference flow | eu-lvic-aaf-2007 |
| active_component | nitric_acid_feed, ammonia_feed, magnesium_nitrate | Active-component mass = delivered mass times measured active mass fraction; carrier-water mass is measured separately or obtained from a verified complete composition, not automatically all non-active mass. Preserve delivered-solution provider basis. | delivered mass; assay; complete composition | Active species and carrier-water reconciliation | eu-lvic-aaf-2007 |
| nutrient_conversion | finished_prills | Nitrogen output = P times measured total-N fraction. An inventory per kg N equals the product-based inventory divided by that measured fraction; it is an additional nutrient result, not a replacement reference output. Keep nitrogen-form balances. | P; total-N; nitrate-N; ammoniacal-N | Declared kg-N output and optional nutrient normalization | yara-prilled-n |
| electricity_conversion | electricity | Electrical energy in MJ = metered kWh times 3.6; preserve the selected property and provider quantity convention. | metered kWh | MJ electricity | eu-lvic-aaf-2007 |
| steam_balance | imported_steam, exported_steam | Evaluate delivered enthalpy against all measured steam and condensate-return mass/state streams at the same boundary. Retain internal reaction-heat recovery separately. Do not infer net heat from a unit label, kg mass alone, or an assumed condensate return. | measured masses; measured states; supplier enthalpy convention | Reconciled external mass and net delivered heat with compatible provider basis | eu-lvic-aaf-2007 |
| emission_integration | ammonia_air, nitric_acid_air, pm25_air, pm25_10_air, pm_over10_air | Integrate measured concentration times compatible gas volume over operating modes. For mg/Nm3 and Nm3, divide the product by 1000000 for kg. Use compatible temperature, pressure, dry/wet and pollutant definitions; add independently assessed fugitives once. | concentrations; gas volumes; mode coverage; fugitives | Species-resolved emitted kg | epa-an-ap42-1993 |
| particulate_partition | pm25_air, pm25_10_air, pm_over10_air | With compatible measured cumulative masses, PM2.5–10 = PM10 minus PM2.5; PM>10 = total particulate minus PM10. Never also sum cumulative total/PM10 with the bins. Missing size information remains unresolved. | compatible measured total; PM10; PM2.5 | Non-overlapping fractions | epa-an-ap42-1993 |
| physical_balance | all inventory rows | Reconcile inputs minus final product, external usable steam, external wastes, emitted species and change in stock on total mass, water and elemental-N ledgers. Track each internal link at both ends with equal quantity. Active AN is not fixed at theoretical yield; use measured recovery and losses. | feed/product assays; water; waste; emissions; stock and recycle logs | Declared residuals, uncertainties and reconciliation | eu-lvic-aaf-2007 |
| burden_allocation | all inventory rows | For shared burden B and justified share alpha, AN burden is alpha times B; directly attributable AN burdens are added separately. Shares across co-functions sum to one. Retain full physical output masses and report the allocated burden separately. | direct/shared burdens; measured allocation key | AN burden per 1 kg reference flow; separate physical ledger | ec-pef-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | All supplied product inputs and final output | Confirm chemistry, grade, feed concentration, additive hydration, prill density/state and supplier quantity reference; UUID identity does not establish provider compatibility | Primary certificates, assays and provider definitions |
| dq_balance | Mass, nitrogen, water and energy | Retain both physical and allocated ledgers; review residuals against stated measurement uncertainty and a site-justified tolerance; no generic closure tolerance or yield is imposed | Stage balance, stocks, recovery and calibration |
| dq_emissions | All applicable air sources | Check abatement, bypasses, condensable fume, species mass and non-overlapping size intervals. AP-42 historical factors and low-density/uncontrolled distributions are not dense-prill defaults | Actual monitoring and control logs; epa-an-ap42-1993 |
| dq_resolution | Every applicable row | Resolve missing identity/provider linkage before producing a complete dataset. Keep a measured but unidentified exchange visible; do not replace it with a correction flow or zero | Actual flow and support definitions; receiver conditions |
| dq_representation | Production period and category | Do not transfer a single factory recipe or energy/emission level as a category average; disclose production mode, grade coverage, region and temporal representativeness | Actual period records; eu-lvic-aaf-2007 |

## 9. Validation Rules

- `validate_reference`: Require exactly one final reference output finished_prills, 1 kg net supplied product, with the same denominator in inventories, protocols and calculations. Do not also inventory an intermediate AN product with this UUID as another final reference.
- `validate_route`: Verify the dense fertilizer prilling route and exclusions, physical state and complete grade qualifiers. A formulation or granulation dataset cannot be accepted by a matching classification label alone [eu-lvic-aaf-2007, un-cpc3-2025].
- `validate_quantity`: Require actual quantities and traceable assays/densities/state conversions; reconcile mass, water, nitrogen, steam and inventory stock changes. Internal links must agree at both ends. Neither source stoichiometry nor a supplier reference property supplies actual yield, purity or heat demand.
- `validate_emissions`: Verify species, outdoor-air subcompartment and sampling basis; the present UUIDs represent outdoor air unspecified only. Site evidence for a more specific compartment requires that corresponding verified identity. No cumulative PM10/total-plus-bin sum or acid-mist overlap is permitted; unknown size/monitor coverage is pending, not a pass [epa-an-ap42-1993].
- `validate_waste`: Keep waste transfers distinct from elementary emissions and link external treatment once; show recovery, non-recycled rejects, impurity constraints and receiver acceptance. Direct final liquid discharge or onsite biological treatment requires a method/inventory extension before conformity [eu-lvic-aaf-2007].
- `validate_allocation`: Verify subdivision/physical/economic rationale, recipient steam function, shared-burden shares and sensitivity. Actual material output and transferred steam remain full quantities in the physical ledger. Reject simultaneous allocated burdens and avoided-steam credit [ec-pef-2021].
- `validate_completeness`: Missing actual ingredient, waste, identity, measurement, provider basis or incompatible source leaves the concrete dataset incomplete; no default zeros, proxy flows or classification coverage claim can repair it. Scientific review is distinct from these modelling checks.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/grade-specific foreground dense AN fertilizer prilling production dataset |
| downstream_use | secondary_dataset; background_dataset after actual data and provider review |
| allowed_use | Cradle-to-gate modelling of the declared bulk straight AN grade using compatible upstream supplies and treatment |
| excluded_use | Granulation; porous explosive prills; AN solutions; CAN/ASN/UAN/dual salts; explosives; fertilizer-use performance; unsupported generic fertilizer market averages |
| required_metadata | Site; period; assays and carrier water; prill size/density method; conditioning; net mass; utilities and steam return; controls; recovery; waste recipients; upstream providers; allocation method |
| required_quality_disclosure | Coverage and uncertainties; balances; missing identities and provider-basis debt; representativeness; cutoffs/extensions; allocation sensitivity; sampling and particle-bin limitations |
| update_trigger | Route, assay, additive, treatment, utility, control or allocation changes; new original evidence; incompatible supplier basis; revised sampling/identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 34613 classification identity and adjacent 34614/34615/34616 exclusions; classification is not a manufacturing recipe |
| eu-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007; chapter 9 sections 9.2.1–9.2.7, 9.4.6, 9.5; printed pp.365–369,383–385 (PDF pp.393–397,411–413); https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf | Neutralisation, concentration, prilling, heat/condensate recovery, conditioning, abatement and residual effluent boundary. AN provisions only; no CAN recipe, numeric emission threshold or historic plant consumption default |
| epa-an-ap42-1993 | official_guidance | US EPA AP-42 section 8.3, July 1993, reformatted January 1995; pp.8.3-1–3,8.3-6–7 and Figure 8.3-1; https://www.epa.gov/sites/default/files/2020-09/documents/8.3_ammonium_nitrate.pdf | Dense versus porous prills, process map, actual additive/coating conditions, NH3/HNO3/particulate sources, recovery. Historical factors and uncontrolled low-density size distributions are not adopted as numeric defaults |
| yara-prilled-n | handbook | Yara UK, PRILLED N product page, accessed 2026-10-14; https://www.yara.co.uk/crop-nutrition/fertiliser/other/prilled-n/ | Producer market-state and nitrogen-form example only; not site recipe, additive composition, dense-prill density measurement or default nutrient conversion |
| ec-pef-2021 | official_guidance | European Commission, C(2021) 9332 final, Annexes 1–2; Annex I section 4.5, PDF pp.63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General multifunctionality hierarchy and justification of physical/economic allocation; no fertilizer-specific fixed shares or claim of complete PEF conformity |
