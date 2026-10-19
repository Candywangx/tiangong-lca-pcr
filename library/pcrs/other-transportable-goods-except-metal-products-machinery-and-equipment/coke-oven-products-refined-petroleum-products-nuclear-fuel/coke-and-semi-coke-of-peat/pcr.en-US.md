---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.coke-and-semi-coke-of-peat
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Traditional sealed-retort peat coke and half coke

## 1. Scope and Applicability

This method covers one declared grade of unpackaged peat coke or half coke made from uncarbonised sod peat in externally heated sealed dry retorts, with gas/condensate recovery and enclosed cooling. Its manufacturing evidence is the European Ziegler route reported by USGS in 1910, printed pp.121–122. Applicability requires an actual site process map matching that route; this is not a claim about all modern peat factories. VTT's 1986 publisher abstract supports feedstock/pretreatment and grade distinctions but is not the acquired full report. Neither source supplies a modern default recipe or emission factor (`usgs-peat-retort-1910`, `vtt-peat-coke-1986-abstract`).

Exclude wood charcoal, coal/lignite or petroleum coke, ordinary peat, peat briquettes, activated carbon, mixed-feed carbon compacts, hydrothermal carbonisation, gasification and rotary/direct-contact coking routes. Coke and half coke require separate grade datasets, not automatic separate PCR identities. This reference contract is limited to grade-separated campaigns with one accepted solid grade output; simultaneous distinct solid grades require a separately reviewed reference definition rather than two outputs sharing this reference UUID. No historic temperature, yield, moisture, composition or cost is a quantity default. Charcoal comparisons do not authorise wood pyrolysis factors. The physically distinct peat carbon source and land history require explicit treatment; they do not establish different coking physics by themselves.

OSTI's 1980 original distinguishes inert pyrolysis, wet conversion and hydrogasification. Use its oxygen-retention and aqueous-organic cautions only to require measured phase/element ledgers; hydrogen-route liquid fractions, compositions and yields cannot define this dry-retort coke or tar (`osti-peat-conversion-1980`). Coal coke-oven BREF process factors do not apply to peat. Actual SKU, grade test, recipe, supplier and operating parameters are later collection requirements; a missing populated factory dataset does not itself invalidate method authorship.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.coke-and-semi-coke-of-peat |
| classification_refs | CPC 3.0 33120; proposed narrower traditional-retort scope; acceptance remains separate |
| covered_products | One declared peat coke or half-coke grade from the stated sod-peat retort route |
| excluded_products | Uncarbonised peat; peat briquettes; peat tar as reference product; wood/coal/lignite/petroleum carbon products; activated carbon; mixed-feed compacts |
| representative_product | Cooled, unpackaged peat coke of a measured declared grade |
| production_route | Receipt/forming/drying; externally heated sealed dry retort; organic/aqueous condensate separation and gas recovery; enclosed cooling and grading |
| market_state | At plant dispatch, net accepted mass excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply carbonised peat solid of the declared grade; fuel and metallurgical services are not assumed equivalent |
| How much | 1 kg net accepted product at declared dispatch moisture |
| How well | Declare moisture, volatile matter, fixed/total carbon, ash, sulfur, phosphorus, size and strength with actual test methods |
| How long or cycle | One declared production/dispatch period; downstream use/carbon fate outside the foreground gate |
| reference_flow_link | peat_coke |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Coke and semi-coke of peat `1d2f9eb7-cd61-4f2b-a981-2fc373805bac` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Deposit and land/drainage history; received feed state; exclusive peat carbon feed; retort configuration and indirect heating; measured temperature/residence/recovery; coke or half-coke grade; dispatch moisture/composition; gate/period; carbon-origin convention; provider quantity bases; unpackaged delivery |

Every qualifier must be declared in the foreground package. The broad identity includes both grades but does not establish interchangeable quantities or backgrounds.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net unpackaged dispatch coke with cp_product. One reference unit is 1 kg; intermediate and final coke must not be counted as two reference outputs. |
| moisture_basis | peat_feed; peat_coke; peat_tar; captured_dust | Mass | kg | Dry mass = wet mass × (1 − measured wet-basis water fraction); retain wet mass, representative sampling and a matrix-valid water-specific method. Tar drying loss can include volatile organics and cannot stand for water. Report proximate fixed carbon separately from elemental total carbon. No historic moisture/yield default. |
| gas_basis | natural_gas; peat_gas | Volume or Mass | m3 or kg | Metered T, absolute P, wet/dry composition and compressibility must match provider m3. Gas mass conversion needs measured same-state composition/density, not secondary property coefficients. |
| electricity_basis | electricity | Net calorific value | MJ | Metered kWh × 3.6 = MJ; the selected UUID requires CN, 1–35 kV user-side grid-average supply. Match supplier/year; another geography, voltage or dedicated generator requires a different verified flow. |
| heat_basis | heat_export | Defined delivery energy | MJ | Integrate delivery mass flow × supply/return enthalpy difference; specify carrier/pressure/temperature and service definition. Steam mass or MJ alone is insufficient. |
| emission_basis | elementary rows | Mass | kg | Retain species/source/medium, wet/dry standard-state and flow/concentration bases. NOx requires an explicit quantity convention and PM fractions must be disjoint. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received uncarbonised sod peat with measured moisture and traceable deposit records |
| starting_condition_role | Foreground gate, not a cradle-to-gate cut-off of peatland impacts |
| product_classification_scope | Traditional sealed-retort subset of peat coke and half coke |
| recursive_input_rule | Same-category external coke input versus internal return must be explicitly metered; no recursive double counting |
| upstream_dataset_requirement | Match extraction, field drying, drainage, land conversion, continuing soil emissions/restoration and transport; missing land evidence leaves completeness unresolved |
| disclosure | Deposit/land history; upstream interface; site process map; gas/heat/dust loops; utilities; condensate and waste receivers; downstream carbon-fate exclusion |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | retort | Aggregate receipt/forming/drying, heating/leaks, gas handling/return, organic/aqueous condensation, enclosed cooling and grading; actual route equivalence is required. Other equipment requires method supplement. | usgs-peat-retort-1910 |
| boundary_land | peat_feed | Link actual deposit polygon/area, climate, land use, drainage/water-table dates, extraction quantity, occupation duration, stock pools and restoration/rewetting to compatible upstream datasets. Retain continuing CO2, CH4, N2O and relevant waterborne carbon impacts with the declared time horizon; no automatic restoration credit or carbon neutrality. National inventory methods inform scope, not a plant emission factor. | ipcc-wetlands-2013 |
| boundary_outputs | retort | Retain all actual gas/liquid/solid branches and water/carbon/sulfur/energy interfaces. Chemical refining, onsite wastewater treatment and direct discharges require completed additional units, never silent omission. | usgs-peat-retort-1910 |
| boundary_carbon | carbon-bearing flows | Maintain physical peat, fossil auxiliary and substantiated biogenic ledgers separately from reporting. IPCC counts peat combustion CO2 in national totals like fossil fuel; this alone does not select an LCI carbon-origin UUID. | ipcc-peat-classification |
| boundary_resources | retort | Purchased water is a product input with upstream abstraction; actual onsite groundwater/surface-water abstraction is a separately identified resource input in its real medium. Never count the same water supply twice. Direct releases to air, water or soil require species and receiving submedium; waste transferred to treatment remains a technosphere waste exchange. | |
| boundary_support | retort | Include actual support utilities, packing and maintenance exchanges. Keep whole physical mass/return/stock accounts even when a justified infrastructure cut-off excludes an environmental burden; disclose the cut-off and sensitivity. Unpackaged reference mass excludes tare, not its attributable production or handling burdens. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retort | Traditional peat retort with preparation/recovery/cooling | required | Actual matching sealed externally heated dry retort | Foreground aggregate, stages separately metered | peat_coke |

Physical map: received peat → forming/drying → retort → enclosed cooling/grading → coke. Retort vapour → phase separation → tar + aqueous condensate + noncondensable gas. Record gas return to firing and heat return to drying at both link ends with identical quantity/state. Preserve gross stage streams, inventory changes and losses in the physical ledger; only actual external exchanges enter the aggregate inventory. Internal reuse is not an exported coproduct or avoided burden. Other saleable grades need separately measured campaigns and datasets.

Cards specify atomic exchanges, not positive defaults. Demonstrably absent conditional flows need absence evidence. Survey actual chemicals, maintenance, packaging and additional pollutants; add one specific verified card for every present exchange before dataset completion. Reference delivery here is unpackaged. Unresolved UUIDs do not authorise substitutes.

Disposition records must partition gross condensate into separated organic tar, aqueous condensate, entrained solids and stock change using actual endpoints. Partition each phase between sale, internal use, external treatment and losses. Tar consumed internally is an internal fuel link with measured energy and actual burner emissions; tar sent for disposal is a separate waste, never a saleable product by assumption. Water carried in each wet stream is a component of that stream, not another copy of the entire stream mass. Dissolved organics, ammonia and sulfur stay in their sampled phase until an actual transfer or emission is demonstrated. Survey volatile releases from charging, cooling, tanks, transfers and treatment; gas composition before recovery is not emitted mass. Add each identified species separately, with absence/limits for screened species.

Track inlet dry air, oxygen/nitrogen/carbon dioxide fractions and humidity, combustion/dryer air ingress, all measured outlet gas and retained elements in the gross physical ledger. These engineering streams do not automatically become elementary resource/emission rows: follow the documented LCI/LCIA flow definition and retain the gross-to-reported reconciliation. Additional actual fuels or purchased steam/heat each need their own verified row; no generic energy-carrier card can cover them.

### Process: Traditional retort aggregate (`retort`)

#### Inputs

##### Product flows

###### Peat (`peat_feed`)

Received uncarbonised sod peat. Record deposit/land history, drainage, moisture, ash and humification; the feed is not the reference coke. Upstream quantities must match received state.

- Selected flow: Peat `485febdb-01e0-47ad-8ebe-c500a35669bd`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Alternating current (`electricity`)

Conditional purchased China (CN), 1–35 kV user-side grid-average supply. This selected flow cannot represent another supply country, voltage or dedicated generator. Record actual supplier/year and match its background; otherwise select a different verified atomic electricity flow. kWh × 3.6 = MJ; the native energy property is not a thermal-fuel assumption.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `usgs-peat-retort-1910`

###### Gaseous pipeline natural-gas fuel mixture (`natural_gas`)

Conditional pipeline auxiliary/start-up fuel mixture only if present. Require the actual gas certificate, compression/delivery route and constituent fractions; a pure-methane CAS cannot establish a natural-gas mixture. Meter temperature, absolute pressure, wet/dry composition and compressibility must match the future verified provider reference m3; a secondary Mass coefficient is not density. No single-plant composition or heating value is a default.

- Selected flow: Gaseous pipeline natural-gas fuel mixture
- Flow property / unit: Volume / m3
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `usgs-peat-retort-1910`

###### Cooling water (`cooling_water`)

Conditional external non-contact condenser make-up. Record source/treatment and mass, or volume with measured density; internal circulation is not a repeated input. Reaction-medium process water is not automatically a coolant.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usgs-peat-retort-1910`

#### Outputs

##### Product flows

###### Coke and semi-coke of peat (`peat_coke`)

One accepted net unpackaged grade at declared dispatch moisture after enclosed cooling and grading. Other grades belong to separately metered campaigns/datasets; this is the only reference product output.

- Selected flow: Coke and semi-coke of peat `1d2f9eb7-cd61-4f2b-a981-2fc373805bac`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product`
- Sources: `usgs-peat-retort-1910`

###### Separated raw peat tar (`peat_tar`)

Only separated organic condensate exported as an actual product, excluding the aqueous phase. Record water, carbon/sulfur and receiver; coal tar is not this identity. Chemical refining is outside scope.

- Selected flow: Separated raw peat tar
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Exported noncondensable peat carbonisation gas (`peat_gas`)

A measured gas mixture crossing the plant boundary; retain water, composition, density and calorific basis. Burner return is internal, not exported. A biomass gas label does not prove peat carbon compatibility.

- Selected flow: Exported noncondensable peat carbonisation gas
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Net delivered heat from retort gas recovery (`heat_export`)

Only actual external heat: integrate mass flow × supply/return enthalpy difference at delivery. Record carrier, pressure, temperature, returns and supplier definition. Steam mass or MJ alone does not establish net heat.

- Selected flow: Net delivered heat from retort gas recovery
- Flow property / unit: Net delivered heat / MJ
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `usgs-peat-retort-1910`

##### Waste flows

###### Peat carbonisation aqueous condensate for external treatment (`aqueous_condensate`)

Separated tar-water phase to a treatment receiver; retain dissolved organics, ammonia, sulfur, entrained tar and hazardous status. Not manganese wash water or an elementary freshwater discharge. On-site treatment/direct discharge needs its own complete unit.

- Selected flow: Peat carbonisation aqueous condensate for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usgs-peat-retort-1910`

###### Dust (`captured_dust`)

Conditional captured peat/coke solid sent offsite as waste; declare composition, moisture and receiver. Broad industrial-dust identity supports captured solids only, not ash or airborne PM. Internal reuse remains a physical loop.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Mineral ash residue from peat gas firing (`mineral_residue`)

Conditional separately removed mineral residue if gas carries entrained mineral particles. Record chemistry/receiver. Ash retained in product is not waste; coal-power-plant coke ash is excluded.

- Selected flow: Mineral ash residue from peat gas firing
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Waste raw peat tar for external treatment (`waste_tar`)

Conditional discarded organic peat condensate crossing the gate to an actual treatment receiver. Record water, solids, organic composition, hazardous status, stocks and receiver. Exclude separately removed aqueous condensate and saleable peat_tar quantities; coal tar residue is not a peat identity. Retain storage/transfer evaporation separately as speciated air releases.

- Selected flow: Waste raw peat tar for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

##### Elementary flows

###### Carbon dioxide from peat carbon, origin unresolved (`co2_peat`)

Outdoor-air unspecified. Preserve the physically measured unrouted peat CO2 remainder; move portions to origin-specific rows only with documented carbon convention and LCIA compatibility. Neither the peat name nor IPCC reporting treatment alone resolves source identity.

- Selected flow: Carbon dioxide from peat carbon, origin unresolved
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ipcc-peat-classification`

###### carbon dioxide (fossil) (`co2_fossil`)

Outdoor-air unspecified. Actual fossil auxiliary CO2 plus only separately justified peat portions; do not duplicate co2_peat.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ipcc-peat-classification`

###### carbon dioxide (biogenic) (`co2_biogenic`)

Outdoor-air unspecified. Only explicitly substantiated origin fractions; plant ancestry alone is insufficient. Preserve established biogenic CO2 in physical LCI even when omitted from national totals; unknown peat origin stays in co2_peat.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ipcc-peat-classification`

###### Carbon monoxide from peat carbon, origin unresolved (`co_peat`)

Outdoor-air unspecified, measured peat retort/gas-handling/firing CO; retain unclassified physical amount, do not assign a fossil UUID by analogy.

- Selected flow: Carbon monoxide from peat carbon, origin unresolved
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### carbon monoxide (fossil) (`co_fossil`)

Outdoor-air unspecified; actual fossil auxiliary fuel CO plus only independently substantiated peat fractions, excluding origin-unresolved peat CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### Methane from peat carbon, origin unresolved (`ch4_peat`)

Outdoor-air unspecified; quantify unrouted leaks, vents and unburnt peat gas. Recovered fuel gas is not an elementary release; no complete-oxidation assumption.

- Selected flow: Methane from peat carbon, origin unresolved
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### methane (fossil) (`ch4_fossil`)

Outdoor-air unspecified; actual auxiliary fossil methane leaks/unburnt gas and only justified peat fractions. No double count with ch4_peat and no correction flow.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### sulfur dioxide (`so2`)

Outdoor-air unspecified, species-specific SO2 after controls. Reconcile sulfur retained in coke, tar, condensate, gas and residue; total sulfur oxides is not automatically SO2.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### Nitrogen oxides (`nox`)

Outdoor-air unspecified. Preserve laboratory NO/NO2 definition and any NO2-equivalent conversion; Mass/kg alone is insufficient. Exclude N2O and duplicate NO/NO2. Unknown quantity definition blocks a completed dataset link.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### particles (> PM10) (`pm_coarse`)

Outdoor-air unspecified, only this disjoint emitted size fraction after controls. Survey drying/charging/discharge/grading/firing individually. Captured/recycled dust is not emitted. Derive disjoint intervals from nested data only with comparable measurement bases.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### particles (PM2.5 - PM10) (`pm_mid`)

Outdoor-air unspecified, only this disjoint emitted size fraction after controls. Survey drying/charging/discharge/grading/firing individually. Captured/recycled dust is not emitted. Derive disjoint intervals from nested data only with comparable measurement bases.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### particles (PM2.5) (`pm_fine`)

Outdoor-air unspecified, only this disjoint emitted size fraction after controls. Survey drying/charging/discharge/grading/firing individually. Captured/recycled dust is not emitted. Derive disjoint intervals from nested data only with comparable measurement bases.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### water vapour (`water_vapour`)

Outdoor air, unspecified submedium, CAS 7732-18-5, ordinary emission without a long-term correction. Retain measured gross outlet water and incoming air humidity separately, feed/coke/tar water, cooling evaporation, pyrolysis reaction water and combustion-generated water. Match the LCI gross/net water convention explicitly. Drying loss of volatile organics is not water; liquid discharge is a separate identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usgs-peat-retort-1910`

###### nitrous oxide (`n2o`)

Outdoor air, unspecified submedium, CAS 10024-97-2, ordinary emission without a long-term correction. Screen N2O separately from NOx across actual burner/exhaust states; the selected identity assigns no positive amount or wood pyrolysis factor. Retain absence or detection-limit evidence.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### ammonia (`ammonia`)

Conditional measured post-recovery outdoor-air release, unspecified submedium, CAS 7664-41-7. Screen actual retort/recovery/storage outlets and leaks. Species NH3 mass, not ammonia-N, ammonium salt, aqueous total nitrogen or an assumed feed-nitrogen fraction. Recovery into tar or water is not an air emission; no historic partition or positive default. Add every other actually identified species as a separate row.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### benzene (`benzene`)

Conditional measured post-recovery outdoor-air release, unspecified submedium, CAS 71-43-2. Screen actual retort/recovery/storage outlets and leaks. Species benzene mass, not total VOC, BTX or a gasoline-cut amount. Recovery into tar or water is not an air emission; no historic partition or positive default. Add every other actually identified species as a separate row.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `osti-peat-conversion-1980`

###### phenol (`phenol`)

Conditional measured post-recovery outdoor-air release, unspecified submedium, CAS 108-95-2. Screen actual retort/recovery/storage outlets and leaks. Species phenol mass, not total phenols, COD, TOC or liquid tar mass. Recovery into tar or water is not an air emission; no historic partition or positive default. Add every other actually identified species as a separate row.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### hydrogen sulfide (`h2s`)

Conditional measured post-recovery outdoor-air release, unspecified submedium, CAS 7783-06-4. Screen actual retort/recovery/storage outlets and leaks. Species H2S mass, not total sulfur or SO2; conserve sulfur remaining in condensed phases. Recovery into tar or water is not an air emission; no historic partition or positive default. Add every other actually identified species as a separate row.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount with the linked protocol and aggregate on the same reference basis; retain row-specific absence/detection-limit evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `osti-peat-conversion-1980`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | retort | Keep gross physical gas/liquid/solid, water/carbon/sulfur and energy balances before allocating environmental burdens. Never multiply actual coproduct outputs by allocation shares. Internal return and external export are mutually exclusive quantities. | usgs-peat-retort-1910 |
| allocation_order | retort | First use measured subdivision for separable operations. For remaining shared burdens document a demonstrated causal physical relationship; otherwise use an explicit economic scenario with actual grade/product quantities and period-matched net prices, uncertainty and sensitivity. A historic profitability assertion establishes neither a share nor an avoided-burden credit. | usgs-peat-retort-1910 |
| allocation_status | peat_tar; peat_gas; heat_export; captured_dust | Distinguish actual marketable coproducts from wastes using receiver contracts and quality evidence. Retain wastewater/residue treatment burdens and no arbitrary burden-free byproduct. Show allocated burden shares summing to unity for each shared burden pool; retain the unallocated physical ledger. | usgs-peat-retort-1910 |
| allocation_support | retort | Assign directly attributable packing, handling, maintenance and treatment burdens to their actual operation/product before shared allocation. Economic scenarios use matched net receipts after discounts/returns, quantity states, currency/date, freight/tax boundary and treatment fees; historical capital or operating costs are not current sales prices. Shared shares sum to one; physical outputs, stocks and return links remain unweighted. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols cover the same explicitly dated batch/campaign and site gate, including startup/shutdown and grade changes. Raw records remain gross, before allocation. Let P be the net accepted dispatch mass attributable to the selected grade/campaign in kg after opening/closing stock and return reconciliation; P must be positive. Preserve gross dispatch, returns, rejects, rework and stock movements separately and never count a returned/redelivered lot twice or include packaging tare. Received old stock or external returned material needs an explicit physical input, provenance and associated burdens; do not hide it by netting unrelated flows. The linked aggregation result for each card is per 1 kg reference flow. Preserve both raw numerator and P; no factory quantity is invented by this PCR.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | retort | Accepted reference grade | Weighing and laboratory records | Batch/grade; net mass; dispatch moisture; volatile/fixed/total carbon; ash; sulfur; phosphorus; size; strength; stocks | Calibrated net dispatch weighing without packaging; representative grade sampling and actual accredited or validated methods; reconcile production and dispatch inventories | kg | Each lot; composite sampling by declared plan | Complete declared period | Same product grade/gate | per 1 kg reference flow | Calibration, sample chain, rejects and inventory reconciliation |
| cp_material | retort | Each solid/liquid/gas branch | Mass, acceptance and phase-composition ledger | Batch; phase/stage/endpoint; gross generation; sale/use/disposal/returns; mass; water/solids; elemental C/H/O/N/S/P/minerals; proximate analysis; gas composition/T/absolute P/wet-dry/Z/density/NCV; receiver; stock change | Calibrated solid/liquid weighing or temperature/density-supported tank measurement; matched gas metering; representative phase sampling including entrained/dissolved fractions; verify both ends of transfers and receiver acceptance | kg | Each lot; gas logged through operating states | Complete declared period | All material branches | per 1 kg reference flow | Calibration, methods/bases, sample chain, matched links, receiver receipts, residual uncertainty |
| cp_energy | retort | Electricity, auxiliary fuel and delivered heat | Meter/provider records | Supply voltage/mix; kWh; natural-gas volume/T/P/wet-dry/Z; fuel composition/NCV; heat carrier/flow/pressure/supply-return enthalpy; return/export split | Calibrated meters and supplier reference-quantity definitions; matched time-integrated net delivery enthalpy; retain internal recovery separately | MJ; m3 | Continuous logs reconciled to invoices | Complete declared period, including startup | Energy delivery and internal recovery interfaces | per 1 kg reference flow | Meter calibration; provider reference definitions; enthalpy and period reconciliation |
| cp_water | retort | Water in each actual phase and external supply/release | Water/phase balance | Feed/fuel/coke/tar water; external supply source/treatment or onsite abstraction medium; circuit stocks/returns; separated aqueous mass; dissolved/entrained organics/N/S; air inlet humidity; wet outlet gas; reaction/combustion water; actual blowdown and receiver | Meter actual make-up/abstraction, weigh and water-specifically sample each phase; reconcile humid inlet/outlet and H/O elements with measured activity and uncertainty; record direct liquid discharge separately from treatment transfer | kg | Continuous meters and batch phase samples | Complete declared period | All water interfaces and matched air records | per 1 kg reference flow | Meter/sample evidence, method selectivity, source/receiver and water residual |
| cp_air | retort | Each emitted species/size/source | Monitoring and release survey | Outlet/leak/vent; operating state/hours; flow; concentration; gas standard T/P; wet-dry/O2 basis; species/CAS; source carbon; NOx convention; PM size definition; controls; limits | Qualified species-specific tests and validated stack flow methods; representative tests for all operating states plus quantified leaks/vents; actual carbon-source tracing; integrate mass rates and hours; retain nondetect limits, never assume zero | kg | State-representative tests and continuous activity logs | Complete declared period with startup/shutdown | All actual air outlets and diffuse releases | per 1 kg reference flow | Original methods/results, QA, coverage, uncertainty, detection limits and source-origin evidence |
| cp_route | retort | Route, upstream land and quality applicability | Site/supplier documentary record | Retort configuration; temperature/residence; gas/condensate diagram; peat deposit/land/drainage/extraction history; restoration; utility definitions; all omitted exchanges | Verify installed route against source-bound scope; supplier land and upstream evidence; walk-through exchange survey; document gaps before data completeness | record | Each campaign and material/provider change | Same declared period with land-history context | Plant plus linked upstream providers | per 1 kg reference flow | Process diagram, land records, applicability and completeness sign-off |
| cp_land | retort | Linked upstream peatland scope | Supplier geospatial, land-history and upstream-LCI records | Deposit polygon/area; land use/climate/nutrient class; water-table/drainage/extraction dates; occupation period; extracted dry carbon; above/below-ground/litter/deadwood/soil pools; CO2/CH4/N2O and relevant drainage-water carbon; actual rewetting/restoration; dataset boundary/times and included burdens | Link traceable supplier land records to applicable drained/rewetted soil scope and upstream inventory with declared allocation/time horizon; reconcile stock/exported peat carbon and ongoing fluxes; do not copy national area factors to plant kg or credit presumed restoration | record | Each deposit/land-management change; annual scope reconciliation | Land history plus declared upstream assessment horizon | Supplier deposit and linked extraction/transport dataset | per 1 kg reference flow | Geospatial/date evidence, compatible LCI scope, stock/flux reconciliation and missing-coverage disclosure |
| cp_air_inlet | retort | Combustion/dryer/cooling air physical interfaces | Calibrated air/activity and weather records | Inlet/ingress location; dry air mass/volume; T/P; O2/N2/CO2 fractions; humidity; operating hours; matched outlet | Measure or derive from validated equipment tests with uncertainty; account for ambient water/carbon and oxygen consumption, nitrogen pass-through and leakage without assuming stoichiometric complete combustion; preserve documented LCI gross/net reconciliation | kg | State-representative tests and continuous activity/weather logs | Complete declared period | Each air circuit and matched outlets | per 1 kg reference flow | Airflow/humidity calibration, dry/wet bases, inlet-outlet reconciliation |
| cp_support | retort | Each actual packing, maintenance and support exchange | Physical bill, work order and return ledger | Component material; measured mass/tare; purchases/stocks; duty/service life; reuse/return counts; rejects/losses; lubricant/filter/refractory/steel replacement; cleaning utilities; waste receiver; infrastructure cut-off; actual net prices/currency/date/fees | Survey complete physical bill including inbound containers and recovery tanks, bags/liners/pallets if used; weigh each material and reconcile stocks/returns; allocate attributable maintenance by documented duty or service period, retain physical replacement/waste and supporting energy; create a separate verified card for every actual exchange | kg; record | Each purchase, replacement and return, period reconciliation | Same campaign plus documented service life | Whole support account, including upstream interfaces | per 1 kg reference flow | Bills, calibrated tare, work orders, return receipts, lifetime evidence, cut-off and burden reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalisation | all inventory rows | Each external exchange result = its measured campaign amount divided by P; retain raw campaign amount and selected-grade P. Physical coproduct outputs use actual mass, never an allocation-weighted mass. | Campaign exchange; P; inventories; cp_product | Exchange per 1 kg reference flow | |
| phase_balances | retort | For each gross mass/element ledger, inputs = outputs + stock increase + quantified residual. Conserve measured C, H, O, N, S, P and relevant mineral elements across feed, fuel, air, coke, organic/aqueous phases, gas, dust and residues. Convert species to element mass by molecular stoichiometry; report wet/dry/ash-free analytical bases, water, ash and proximate fixed carbon separately. Internal links cancel only after both ends agree; do not assume complete oxidation or that all non-CO/CO2 oxygen becomes water. | cp_material; cp_water; cp_energy; cp_air; cp_air_inlet | Unallocated elemental and total-mass ledgers with uncertainty | osti-peat-conversion-1980 |
| elemental_partition | retort | Measured tar/char/aqueous/gas N and S may have different distributions. A laboratory trapped-tar analysis does not close unmeasured gas or predict NOx/H2S emission amounts; keep oxygen by-difference uncertainty and measured H/O loss separate from water assignment. Collect actual species and retained phase elements before declaring closure. | cp_material; cp_air; cp_water | Phase-specific N/S/H/O evidence and unresolved residuals | suo-peat-pyrolysis-1987 |
| water_closure | retort | Water in feed/fuel/products, external water supply and air humidity plus separately substantiated reaction/combustion water = water in products/condensate/discharges/exhaust plus stock increase and quantified residual. Do not count stream-contained H2O again as an extra stream; water formation/consumption must reconcile the H/O ledger. Preserve gross inlet/outlet and documented net LCI water quantities. | cp_water; cp_air_inlet; cp_material; cp_air | Water ledger and LCI reconciliation | osti-peat-conversion-1980 |
| energy_closure | retort | Use one declared energy datum and matched gross/net calorific basis, moisture and reference state. Reconcile fuel chemical energy, electricity, imported heat, sensible/latent delivery, exported energy, product chemical energy, losses and storage. Show gross stage recovery but cancel matched internal gas/heat links at aggregate boundary; internal recovery is never an additional external energy input or avoided burden. | cp_energy; cp_material; cp_air_inlet; cp_product | Unallocated energy balance | |
| support_closure | retort | For each actual packing/maintenance material, reconcile purchases, stocks, service use, returns, losses and identified waste. Reuse counts and service life come from traceable records; never divide purchase mass by a guessed number of cycles. Product denominator excludes tare and counts no returned/redelivered lot twice. | cp_support; cp_product | Support-material ledger and attributable burdens | |
| air_integral | elementary rows | For each outlet/state, emitted mass = time-integral of compatible species mass concentration × gas volume flow; sum actual states/leaks. Reconcile temperature/pressure, moisture and sampling flow states; undo reference-O2 concentration correction or apply a demonstrably compatible volume basis before integration. Keep source-origin partitions exhaustive/nonoverlapping; nondetect is bounded uncertainty, not zero. | cp_air; gas reference state; operating hours | Species mass and completeness evidence | |
| carbon_partition | co2_peat; co2_fossil; co2_biogenic; co_peat; co_fossil; ch4_peat; ch4_fossil | For each species/outlet, trace auxiliary and peat-derived physical amounts separately; retain the unassigned peat remainder after documented compatible source assignments. If physical peat/auxiliary attribution itself is unresolved, retain that additional tracing gap and the full measured total rather than call the whole remainder peat. National reporting or plant ancestry alone cannot decide LCI source; retain all totals and transfers. | Physical species masses; tracing; stated LCI/LCIA convention | Nonoverlapping physical source ledger | ipcc-peat-classification |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_match | retort | Prove traditional dry sealed externally heated retort; no inferred equivalence of modern equipment | cp_route and source-limited comparison |
| finite_basis | all inventory rows | Same grade, gate and campaign denominator; separate wet/dry states and stocks; retain all raw quantities and uncertainty | cp_product and linked protocols |
| closure | physical balances | Explain each measured residual against combined measurement uncertainty; no universal tolerance or balancing emission invented | Phase ledger and analytical uncertainty |
| origin | carbon species | Deposit/land history, auxiliary fuel source and explicit carbon convention; unknown identity remains unresolved, never deleted | cp_route; cp_air; compatibility decision |
| identity_basis | UUID-bearing and unresolved rows | Exact physical identity is separate from provider quantity/background compatibility. Require medium/source/species/property/unit consistency; missing UUID or NOx/heat/gas definition prevents an asserted complete dataset | Direct identity plus actual provider/site records |
| source_route_grade | reference product and every linked provider | Declare actual grade/test endpoint, route and supply geography. Missing actual collection is a dataset gap; an unverified identity, unsupported route or unknown native quantity definition remains a specific unresolved method/link issue and cannot be waived as ordinary data debt. | cp_route; native records; specific compatibility decision |
| support_media_complete | retort | Complete physical packing/maintenance/returns, resource versus supplied product and actual release-medium accounts. Add all actual missing atomic rows and treatment/utility units before claiming a complete dataset; the screened list is never an exhaustive emissions recipe. | cp_support; cp_water; cp_air_inlet; cp_air |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | peat_coke | Require exactly one reference output, 1 kg net declared grade, all qualifiers and same bilingual denominator. Do not substitute coal coke, wood charcoal or ordinary peat. | usgs-peat-retort-1910 |
| validation_route | retort | Verify site route and all actual exchanges; unsupported equipment, chemical refining or wastewater treatment needs a completed supplement. Unknown quantity/identity or uncovered emissions are explicit incomplete findings, not passes. | usgs-peat-retort-1910 |
| validation_balance | all inventory rows | Reconcile gross phase/water/carbon/sulfur/energy ledgers and matched internal loops before burden allocation. Keep source partitions and PM intervals nonoverlapping; retain biogenic CO2 when established. | usgs-peat-retort-1910; ipcc-peat-classification |
| validation_evidence | retort | No historic/single-plant quantities, wood factors or guessed carbon class may replace actual collection. Separate method authorship, future dataset completeness and scientific review. | usgs-peat-retort-1910; vtt-peat-coke-1986-abstract |
| validation_land_carbon | peat_feed; carbon species | Reconcile extracted physical carbon, land-stock change, continuing soil/water emissions and gate carbon without counting extracted carbon again as an assumed immediate land CO2 release. Keep every measured physical CO2 source and all stock transfers. LCI/LCIA origin definitions, uptake treatment and characterization must agree; reporting peat as fossil-like is not a shortcut to deleting CO2 or assigning all carbon one source UUID. | ipcc-peat-classification; ipcc-wetlands-2013 |
| validation_support_media | retort | Require matched internal gas/heat/water links, actual volatile/waste destinations, inlet humidity and element balances, whole support/returns account and verified native hard route/CAS/geography/property/unit constraints. Missing identities or uncovered exchanges remain explicit, not zero or a complete-dataset pass. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after a real complete foreground package and review |
| downstream_use | Declared grade and matching traditional-retort route, with separately modelled downstream carbon fate |
| allowed_use | Site-period-specific supply of the declared peat coke/half-coke grade and compatible land/utility backgrounds |
| excluded_use | All modern peat coking default; charcoal/coal/petroleum coke proxy; carbon-neutrality claim; activated-carbon production; unsupported emission-factor recipe |
| required_metadata | All reference qualifiers; site/period; gross and allocated ledgers; upstream land history; provider bases; receivers; method source limitations |
| required_quality_disclosure | UUID/basis gaps; carbon convention; temporal/geographic/route scope; measurement limits/residuals; allocation scenario/sensitivity; excluded downstream fate |
| update_trigger | Route/grade/feed/deposit/provider change; new measurements; changed land history/carbon convention; resolved flow identity; revised source applicability |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usgs-peat-retort-1910 | official_guidance | C. A. Davis, The preparation and use of peat as fuel, USGS Bulletin 442-B (1910), printed pp.121–123, PDF pp.21–23. https://pubs.usgs.gov/bul/442-B/report.pdf | Historical European sealed-retort peat coke/half coke, gas return, organic/aqueous condensate recovery and enclosed cooling. Quantities/costs and claimed profitability are not defaults; no modern plant coverage. |
| vtt-peat-coke-1986-abstract | literature | Brandt, Sipilä and Thun, Production and use of peat coke, VTT Tiedotteita 542 (1986), publisher abstract only. https://cris.vtt.fi/en/publications/production-and-use-of-peat-coke/ | Historical product/feedstock/pretreatment and grade distinctions only; full report not acquired, no default quantities or present factory status. |
| ipcc-peat-classification | official_guidance | IPCC TFI FAQ Q2-7. https://www.ipcc-nggip.iges.or.jp/faq/faq.html | Distinction between peat identity and national GHG reporting convention; not a peat-coke manufacturing factor or LCI origin assignment. |
| osti-peat-conversion-1980 | literature | F. C. Schora and D. V. Punwani, Peat — An Energy Alternative, IGT conference paper (1980), OSTI 5328068, PDF pp.8–11, 28 and 31 (printed pp.5–8, 25 and 28). https://www.osti.gov/servlets/purl/5328068 | Qualitative separation of conversion routes, pyrolysis water/carbon oxides and oxygen retained in liquids/char. Hydrogasification aqueous-organic results are route-limited cautions, never dry-retort yields, compositions or partition/emission factors. |
| ipcc-wetlands-2013 | official_guidance | IPCC (2014), 2013 Wetlands Supplement, ch.2 §§2.1–2.2, 2.4 (printed pp.2.6–2.8, 2.47–2.48); ch.3 §§3.1–3.2 (printed pp.3.4–3.7). https://www.ipcc-nggip.iges.or.jp/public/wetlands/index.html | Upstream drained/rewetted organic-soil scope, stock pools and persistent gaseous/waterborne carbon interfaces; no site default or automatic rewetting credit. National reporting categories do not select an LCI carbon-origin flow. |
| suo-peat-pyrolysis-1987 | literature | Martti Aho, Pyrolysis of peat, Suo 38(5):105–110 (1987), PDF pp.1–6, especially printed pp.106 and 108–109. https://suo.fi/pdf/9636 | Nitrogen-atmosphere laboratory peat/tar/char elemental observations and incomplete gas analysis; supports phase-specific collection and uncertainty only, not industrial operating settings, yield, purity or emission factors. |
