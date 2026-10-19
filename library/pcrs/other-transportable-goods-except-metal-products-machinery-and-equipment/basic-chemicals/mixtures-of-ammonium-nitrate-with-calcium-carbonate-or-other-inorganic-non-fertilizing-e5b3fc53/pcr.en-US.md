---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.mixtures-of-ammonium-nitrate-with-calcium-carbonate-or-other-inorganic-non-fertilizing-e5b3fc53
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Limestone-filled calcium ammonium nitrate granulation

## 1. Scope and Applicability

This manufacturing PCR covers carbonate-filled CAN made by mixing received concentrated aqueous ammonium nitrate (AN) with ground natural limestone, granulating, screening/recycling, drying as actually required, cooling, conditioning when used and bulk loading. Preserve actual equipment and recipe variants; do not merge incompatible routes [eu-lvic-aaf-2007; efma-an-can-2000].

CAN here is an AN/carbonate mixture, not a pure chemical species or the calcium-nitrate/AN hydrated double salt also sold under similar names. Yara's guide distinguishes carbonate CAN from calcium nitrate. Its commercial nutrient figures are examples, not a mandatory recipe, yield or assay [yara-mineral-fertilizers]. Exclude prilling, dolomite-dominant or other non-carbonate fillers, nitrophosphate co-production, straight AN, UAN, calcium nitrate double salts, bagged supply and field application. This scope begins at AN-solution receipt; integrated neutralisation/evaporation is a distinct upstream production unit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.mixtures-of-ammonium-nitrate-with-calcium-carbonate-or-other-inorganic-non-fertilizing-e5b3fc53 |
| classification_refs | CPC 3.0 34615; proposed narrower coverage [un-cpc3-2025] |
| covered_products | Natural-limestone-filled solid CAN granules with declared AN, carbonate, moisture and conditioning composition |
| excluded_products | Calcium-nitrate/AN double salts; AN solution sales; straight AN; UAN; prilled CAN; dolomite-dominant CAN; other filler mixtures; nitrophosphate integrated co-production; bagged delivery |
| representative_product | Accepted bulk limestone CAN granules, actual measured grade |
| production_route | Received concentrated AN solution; natural ground limestone mixing; granulation; screening and safe recycle; actual drying; cooling; actual conditioning; bulk loadout |
| market_state | Solid granules at factory bulk dispatch, net mass as supplied |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared limestone CAN fertilizer product; no agronomic-performance equivalence is claimed |
| How much | 1 kg accepted net supplied product |
| How well | Actual AN/carbonate recipe, total and speciated nitrogen, moisture, particle distribution and conditioning satisfying declared lot acceptance |
| How long or cycle | At factory bulk dispatch during the recorded production period, without a field-service duration |
| reference_flow_link | finished_granules |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mixtures of ammonium nitrate with calcium carbonate or other inorganic non-fertilizing substances `faaf63a5-c8b0-462b-b84e-09dad6e9319f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | AN/carbonate mixture, not calcium nitrate double salt; natural limestone composition and particle size; AN feed assay and carrier water; total N, ammoniacal-N and nitrate-N; product moisture and recipe; actual granulation/drying/cooling/conditioning route; bulk net mass; site and period; supplier interfaces; emissions controls; waste receivers |

The verified broad mixture identity contains this carbonate-granule subset without a contrary route or substance limitation. It supplies no recipe or provider quantity. Declare all qualifiers in product and dataset records before treating a foreground package as complete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Net accepted bulk mass as supplied, including actual moisture and additives, excluding packaging; collect cp_product. All inventory rows use per 1 kg reference flow. |
| solution_basis | an_solution, scrubber_acid | Mass | kg | Weigh total supplied solution and independently assay active species and carrier water. Match the provider solution basis; never combine active-only amounts with total-solution background data. |
| nutrient_basis | finished_granules | Mass | kg | Product mass is not nutrient mass. Use measured lot N fractions for any nutrient conversion; report ammoniacal-N and nitrate-N separately. |
| heat_basis | steam_heat | Energy | MJ | Net transferred process heat requires cp_heat steam/condensate enthalpy balance and provider-boundary agreement; a steam mass, pressure or MJ property alone is insufficient. |
| particles_basis | pm25_air, pm25_10_air, pm_over10_air, an_condensable_air, nitric_acid_air | Mass | kg | Keep sampling phase, particle size and chemical-species coverage disjoint; unresolved partition is incomplete data, not zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metered concentrated aqueous AN and ground natural limestone received for the CAN finishing unit, with purchased utilities and actual conditioning ingredients |
| starting_condition_role | Supplier-interface foreground start; upstream burdens remain linked through compatible production and delivery datasets |
| product_classification_scope | Limestone-filled CAN granulation subset of CPC 3.0 34615; no full-leaf equivalence |
| recursive_input_rule | Safe internal fines/oversize and recovered AN liquor remain internal. Purchased CAN rework requires distinct upstream production, explicit composition and no recursive self-supply. |
| upstream_dataset_requirement | AN solution provider must cover actual neutralisation, concentration, nitric-acid and ammonia supply burdens, including applicable upstream N2O/NOx; limestone provider includes actual extraction and milling. Match solution, water, utility and transport bases. |
| disclosure | Feed receipt state and assay; upstream interfaces; recipe; actual drying energy; safe recycle; conditioning; net product basis; air methods and controls; external waste treatment; exclusions |

- `boundary_finishing`: Include receiving/storage, any onsite filler milling, mixing, granulation, actual drying/cooling, screens/recycle crushing, actual conditioning, emission controls, cleaning and bulk handling. Retain stage meters and an unallocated mass/water/N/inorganic-carbon ledger. Equal physical internal transfers have equal amounts at both ends [eu-lvic-aaf-2007; efma-an-can-2000].
- `boundary_utilities`: This route uses electric drives and indirect heating. Steam generation is a separate upstream utility; record gross steam/condensate interfaces and net heat without counting closed-loop heat-carrier water as process makeup. Direct-fired drying or an onsite boiler requires explicit fuel and combustion rows plus applicable original evidence before extending this method.
- `boundary_treatment`: Residual liquor and solids go to identified external treatment, linked with treatment/transport burdens. Internal recovery is not an external emission. Direct final liquid discharge or onsite biological treatment lies outside this route and requires explicit water, species, treatment chemical, sludge and gaseous-emission inventories.
- `boundary_completeness`: Identify every actual externally supplied material/service and external loss stream before dataset acceptance, with a separate atomic exchange and its evidence/identity. For whole purchased formulations retain constituent/carrier composition subledgers without duplicate component procurement; onsite separately purchased ingredients remain separate inputs. Include actual lubricant and replacement control media. Include upstream freight once at the supplier interface. No gap, unverified UUID or unmeasured amount authorizes a burdenless cutoff. Capital construction, bagged delivery and agricultural use remain excluded and disclosed.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| can_granulation | Integrated limestone CAN finishing | required | Received AN solution and natural ground limestone, granulation route, bulk output | One foreground unit retaining separate stage and recycle measurements | finished_granules; 1 kg accepted net product |

AN-solution receipt and limestone preparation → mixing/granulation → actual drying → screening with safe fines/oversize return → cooling → actual conditioning → bulk dispatch. Capture controls and cleaning across these stages. This aggregated unit has one finished-product reference output; it does not invent a different identity for the same material at an internal stage. Physical balances precede any burden allocation.

### Process: Integrated limestone CAN finishing (`can_granulation`)

#### Inputs

##### Product flows

###### Ammonium nitrate solution (`an_solution`)

Record received concentrated aqueous AN as total solution mass, separately assayed AN and carrier water. The broad AN identity has no contrary state limitation; it supplies no concentration or solution-compatible background dataset. Match the actual supplier solution, concentration, receipt temperature and delivery basis; never link dry-prill production as though it supplied the solution.

- Selected flow: Ammonium nitrate `4d621a16-cd12-4fc1-9499-21cd8001941f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`

###### Ground natural limestone (`limestone`)

Use naturally occurring carbonate limestone as delivered, including its measured impurities and moisture. Determine CaCO3, Mg carbonate and insoluble fractions, grinding route and particle size. The broad limestone identity does not establish powder grade, purity or provider. Do not substitute quicklime, precipitated carbonate or calcium nitrate; supplier grinding belongs upstream unless performed onsite.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `yara-mineral-fertilizers`

###### Electricity (`electricity`)

Meter mixing, pumps, screens, recycle crushing, cooling fans, controls, coating and bulk conveying. This UUID specifies native locationOfSupply CN (China) and user-side grid-average 1–35 kV supply. Use it only for a documented matching CN supply interface; record actual supply location, voltage, provider and period under cp_power. Non-CN supply requires a separately verified matching electricity flow and provider before linkage. Keep raw kWh and report 3.6 MJ per kWh using the record reference property Net calorific value; this property label does not imply combustion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources: `eu-lvic-aaf-2007`; `efma-an-can-2000`

###### Net process heat transferred by indirect steam heating (`steam_heat`)

One thermal-energy service, not steam mass or boiler fuel. Record steam and condensate mass, pressure, temperature, dryness, enthalpies and losses at the same provider interface; derive delivered heat and verify the supplier dataset uses that basis. Steam pressure or an MJ property alone proves no usable-heat basis. Resolve an exact heat-service identity before dataset linkage. No default energy demand or zero for autothermal drying.

- Selected flow: Net process heat transferred by indirect steam heating
- Flow property / unit: Energy / MJ
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `eu-lvic-aaf-2007`

###### Deionised water (`process_water`)

Purchased deionised makeup water for the recorded scrubbing, cleaning or utility circuit. This is a technosphere supply, not a water abstraction elementary flow. Meter net makeup; internal recycled liquor and closed-loop cooling water do not become additional purchased water. Other supplied water grades require their own atomic rows and identities.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`

###### Aqueous nitric acid for gas scrubbing (`scrubber_acid`)

Only when the actual ammonia-removal scrubber uses HNO3. Weigh delivered acid solution and assay its HNO3/water fractions, record dosing and recycled liquor. Retain this specific solution row without a UUID until the actual grade is known; a verified 60% candidate must not become the default concentration.

- Selected flow: Aqueous nitric acid for gas scrubbing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`; `efma-an-can-2000`

###### Mineral oil coating component (`coating_oil`)

Use this petroleum mineral-oil row, CAS8012-95-1, only for actual neat oil or an oil ingredient separately procured for onsite blending; record its actual grade and quantity without a prescribed dose. If a complete commercial coating is purchased, add its specifically identified whole-formulation input on the actual supplier reference basis and include its formulation-production burdens. Its oil, wax, amine, carrier and other constituents remain measured composition subledgers, not duplicate external component purchases. Onsite formulation instead records each separately acquired ingredient and actual blending energy/losses. Unknown whole-formulation identity/basis remains explicit before dataset acceptance. Nynas NPK laboratory performance is not a CAN emission factor.

- Selected flow: Mineral Oil `e4d87634-a041-48d6-b071-da57551c8ab5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `nynas-fertilizer-coatings`; `efma-an-can-2000`

###### Petroleum lubricating oil (`lubricant`)

Conditional petroleum-fraction equipment lubricant; maintain grade, additives and receiver records. This identity cannot cover a fully synthetic oil, a wax/solvent coating, or oil already mixed into the fertilizer. Account for actual consumed maintenance oil and retained stock separately; other lubricant chemistry requires a new verified row.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance`

#### Outputs

##### Product flows

###### Limestone CAN granules (`finished_granules`)

The one reference output: accepted carbonate-filled CAN granules at bulk loadout, net supplied mass including residual moisture and actual conditioning. Declare ammoniacal-N, nitrate-N, carbonate composition and recipe. No calcium-nitrate double salt, solution or straight AN is represented. Intermediate granules and safe recycle remain internal to this aggregated unit.

- Selected flow: Mixtures of ammonium nitrate with calcium carbonate or other inorganic non-fertilizing substances `faaf63a5-c8b0-462b-b84e-09dad6e9319f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `yara-mineral-fertilizers`; `eu-lvic-aaf-2007`

##### Waste flows

###### Non-recycled off-specification limestone CAN solids (`waste_offspec`)

Only material actually leaving the foreground for a named waste receiver: weigh wet mass and assay water, AN, carbonate, coating and contamination. Safe internally crushed oversize and fines are not this waste. A sold non-conforming product requires an explicitly distinct output identity and allocation review; it cannot be hidden in reference yield.

- Selected flow: Non-recycled off-specification limestone CAN solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `efma-an-can-2000`

###### AN-bearing scrubber purge liquor to external treatment (`waste_liquor`)

One actual liquid waste, with water, ammonium-N, nitrate-N, suspended carbonate, pH and coating contamination characterized. Meter volume and measured density or directly weigh total liquid; separate dissolved solutes analytically without duplicating total waste mass. Link receiver treatment and transport. Do not substitute manganese-residue washing wastewater or an elementary fresh-water emission.

- Selected flow: AN-bearing scrubber purge liquor to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`; `efma-an-can-2000`

###### Carbonate-bearing scrubber settlement sludge (`waste_sludge`)

Conditional separated wet scrubber sludge sent offsite, characterized by dry solids, carbonate, retained AN, moisture and contamination. This is neither biological sludge nor recycled filler. If solids are transferred inside a measured liquid purge, count them there rather than again here. Receiver treatment is required.

- Selected flow: Carbonate-bearing scrubber settlement sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`

###### Used lubricating oil (`waste_oil`)

Conditional spent equipment lubricant, collected separately from fertilizer rejects and coating residues. Record actual base-oil grade, water, contaminants, receiving facility, treatment and transport. The waste identity does not establish a recovery credit or a provider. Reconcile fresh oil, remaining equipment inventory and actual removed oil.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance`

##### Elementary flows

###### Ammonia to air (`ammonia_air`)

NH3 molecular mass emitted to outdoor air, unspecified subcompartment, after abatement including applicable fugitive sources. Analyze ammonia separately from AN aerosol and ammonium in liquid waste. If results are reported as NH3-N, convert using documented molecular masses; no nitrogen-equivalent convention is assumed.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `efma-an-can-2000`

###### Nitric acid to air (`nitric_acid_air`)

Conditional HNO3 emission to outdoor air, unspecified, where actual acid scrubbing or process measurements establish release. Record gas versus mist sampling and molecular mass. Distinguish nitrate-N from nitric acid identity; exclude any mist mass already included in size-resolved PM before separately reporting it.

- Selected flow: nitric acid `1df287ba-2f10-461e-95ce-7714a3e76ac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `efma-an-can-2000`

###### Filterable PM2.5 (`pm25_air`)

Filterable particles with aerodynamic diameter at most 2.5 micrometres, outdoor air unspecified, across actual filler handling, granulation, drying, screening, cooling and loadout outlets. Sampling and chemical content must distinguish airborne discharge from collected/recycled powder. No default allocation of total dust to PM2.5.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm`
- Sources: `epa-pm-201a-2020`; `efma-an-can-2000`

###### Filterable particles PM2.5 to PM10 (`pm25_10_air`)

Disjoint fraction above 2.5 and at most 10 micrometres, outdoor air unspecified. Derive only from compatible simultaneous filterable PM10 and PM2.5 data or a validated direct fraction method; retain raw cumulative results as diagnostics, not extra additive inventory.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm`
- Sources: `epa-pm-201a-2020`

###### Filterable particles above PM10 (`pm_over10_air`)

Particles above 10 micrometres, outdoor air unspecified. Use compatible measured total filterable dust minus filterable PM10 only when sampling conditions and recovery include the same sources. Never subtract an incompatible condensable-PM result or count total dust alongside all three fractions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm`
- Sources: `epa-pm-201a-2020`

###### Condensable ammonium nitrate aerosol (`an_condensable_air`)

Only a chemically identified, separately sampled AN condensable fraction not already recovered in filterable PM, outdoor air unspecified. This species identity has no aerodynamic-size definition and cannot replace a PM fraction or total unspecified fume. Require validated sampling blanks, formation/artifact correction and chemical speciation; absence of such evidence leaves condensable coverage incomplete. Do not report NH3 and HNO3 precursor mass again as the same condensed AN.

- Selected flow: ammonium nitrate `82852b6b-e66e-4c96-b2b8-7249bc9b2377`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `efma-an-can-2000`; `epa-pm-201a-2020`

###### Water vapour to air (`water_vapour_air`)

Net process water evaporated to outdoor air, unspecified, after recovered condensate and closed utility returns are removed. Reconcile AN carrier water, makeup, retained product moisture and aqueous wastes. Recirculated steam is not an air emission; ambient inlet-air moisture is not purchased or consumed process water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-lvic-aaf-2007`

###### Carbon dioxide from inorganic carbonate to air (`carbonate_co2_air`)

Conditional molecular CO2 from measured carbonate reaction/carbon loss, not limestone feed multiplied by a presumed full-decomposition factor. Record inorganic-carbon input, retained carbonate and waste carbon; confirm actual gas release independently. Keep a specific blank UUID until a non-biogenic mineral-carbon air identity and characterization convention are resolved. Do not use biogenic, resource-uptake or correction flows.

- Selected flow: Carbon dioxide from inorganic carbonate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable amount under the linked collection protocol and divide by accepted net product mass of the same period; non-occurrence requires evidence and unknown quantities are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`

## 7. Allocation and Co-product Handling

- `allocation_physical`: Safe recycle, scrubber recovery and screen fines within the unit are physical loops, not co-products. Preserve pre-allocation physical mass, water, N and inorganic-carbon balances. Never multiply co-product physical outputs or internal transfers by a burden share.
- `allocation_shared`: Separate CAN campaigns, grades and other fertilizer production through measured submetering and process subdivision first. Attribute common electric drives and controls using a documented causal service measure, such as actual operating time with measured loads; report the chosen basis and uncertainty. Do not apply a neighbouring plant's energy quantity.
- `allocation_coproduct`: This baseline has one saleable output and gives no waste or steam credit. Actual exported recovered material or energy requires separate physical identity, recipient and usable-output evidence, then a documented study-specific co-product method. Preserve physical quantities; apply allocation only to eligible shared burdens, ensuring burden shares sum to one. Unresolved co-product scope prevents claiming a complete dataset.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | can_granulation | finished_granules | acceptance and stock ledger | lot; SKU; gross/tare/net mass; product stocks; AN; water; carbonate; conditioning; total N; ammoniacal-N; nitrate-N; size; reject status | Calibrated net loadout weighing reconciled to accepted production and finished-stock change; assay representative lot samples | kg | each lot and period reconciliation | representative declared continuous period, normally one full year; justify shorter coverage | one site and compatible grade/route | per 1 kg reference flow | calibration; acceptance; assays; stock reconciliation |
| cp_feed | can_granulation | an_solution, limestone, scrubber_acid, coating_oil | receipt, dosing and assay records | supplier; lot; delivered and consumed mass; stocks; concentration; moisture; carbonate purity; coating components; temperature; particle size; supplier dataset basis | Calibrated weighing/mass flow, certificates and representative independent assay; reconcile withdrawals and storage changes; separately identify each actual ingredient | kg | receipt and dosing batch | same period as cp_product including starts/stops and cleaning | supplier interfaces and dosing stages | per 1 kg reference flow | invoices; assay method; sampling coverage; grade/provider compatibility |
| cp_power | can_granulation | electricity | interval meters | kWh; meter; voltage; supplier; operating states; common-service load; calibration; campaign output | Meter stages and controls; reconcile bills and assign common services by measured causal use; retain kWh to MJ conversion | kWh; MJ | interval and period closure | same period as cp_product | entire finishing unit and actual auxiliaries | per 1 kg reference flow | meter logs; bill closure; allocation evidence |
| cp_heat | can_granulation | steam_heat | utility interface metering and enthalpy records | steam/return mass; absolute/gauge pressure; temperature; dryness; supply/return enthalpy; flash; losses; supplier usable-heat definition | Meter matched steam/condensate interfaces; determine phase and enthalpy with a traceable property method; reconcile delivered heat with the provider definition and actual drying duty | kg; kJ/kg; MJ | matched intervals and campaign closure | same period as cp_product | upstream utility/foreground indirect exchanger interface | per 1 kg reference flow | meters; thermodynamic basis; return/loss closure; provider-boundary agreement |
| cp_water | can_granulation | process_water, water_vapour_air | water meters and process balance | makeup; AN/acid/carrier solution water; cooling circuit; recovered condensate; inlet-air humidity; retained moisture; wastewater; stocks/WIP; actual net reaction-water formation/consumption; stage assays and independently supported reaction-extent/model evidence; uncertainty | Meter purchased makeup and sample moisture; measure or independently validate net process evaporation. Establish actual net reaction-water terms through the reaction evidence in physical_balances before reconciling water destinations; do not fit them to a closure residual. Keep closed heat-carrier water, carrier solution water and phase transfers separate, with stock/WIP uncertainty. | kg | batch/interval and period closure | same period as cp_product | process water and cooling makeup, without recirculation double count | per 1 kg reference flow | meter calibration; moisture/chemical methods; independent reaction-extent evidence; water ledger and uncertainty |
| cp_air | can_granulation | ammonia_air, nitric_acid_air, an_condensable_air | stack/fugitive sampling and outlet-time records | outlet; wet/dry gas flow; T/P; moisture; load; operating hours; NH3; acid phase; nitrate/ammonium assay; filterable/condensable split; blanks; method; limit of quantification | Source-specific representative sampling after actual abatement; follow EFMA wet/dry sample conditioning; establish molecular basis and integrated concentration-times-flow; chemically verify any separate AN condensable fraction | mg/m3; m3/h; h; kg | repeated representative load/start/stop campaigns and period integration | same period as cp_product, record measured and extrapolated intervals | all actual outdoor-air outlets and assessed fugitives | per 1 kg reference flow | test reports; blank/artifact correction; speciation; gas-basis consistency; extrapolation uncertainty |
| cp_pm | can_granulation | pm25_air, pm25_10_air, pm_over10_air | particle sampling and source register | outlet; dust source; aerodynamic cuts; total filterable PM; cumulative PM10/PM2.5; condensables; water droplets; gas T/P/flow; hours; blanks; uncertainty | Compatible isokinetic source sampling; EPA 201A addresses filterable size fractions only under its scope. Water-droplet exhaust cannot use its size split; establish a validated suitable method. Method 5 total mass alone does not establish all three fractions. Quantify condensable coverage separately without assumed partition | kg; mg/m3; m3/h; h | representative campaigns and whenever route/control changes | same period as cp_product with disclosed unmeasured source intervals | filler handling/milling, granulator, actual dryer, screens, cooler, loadout and relevant fugitives | per 1 kg reference flow | sampling validation; moisture/phase check; matched cumulative results; repeat tests; completeness statement |
| cp_waste | can_granulation | waste_offspec, waste_liquor, waste_sludge | receiver manifests, meters and analyses | waste source; wet/dry mass; liquid volume/density; AN/N/carbonate/water; pH; oil contamination; receiver; treatment; transport; returned stocks | Weigh each separately transferred waste; for liquid use measured volume and density; assay representative composition; reconcile internal recycling and prevent liquid/sludge overlap | kg | each transfer and period closure | same period as cp_product including cleaning/purges | factory-to-external-treatment interfaces | per 1 kg reference flow | calibrated measurement; receiver proof; analyses; compatible treatment provider |
| cp_maintenance | can_granulation | lubricant, waste_oil | maintenance purchase/use/removal ledger | grade; chemistry; quantity; installed stock; retained oil; spent mass; contamination; receiver; treatment; machine allocation | Weigh actual consumed and collected oil, reconcile equipment inventory and records; assign shared maintenance to actual service; separate lubricant from product coating | kg | maintenance event and period closure | same period as cp_product | equipment serving the unit | per 1 kg reference flow | service records; chemistry/SDS; mass reconciliation; receiver evidence |
| cp_carbon | can_granulation | carbonate_co2_air | carbonate assays, carbon balance and gas testing | inorganic-carbon feed; product carbonate; stocks; sludge/liquid/solid carbonate; gas CO2; origin; reaction evidence; uncertainty | Combine representative inorganic-carbon analyses with independent actual gas evidence; investigate any residual before attributing it to emitted CO2; distinguish organic/coating carbon and mineral carbonate | kg C; kg CO2 | batch/campaign and period closure | same period as cp_product | carbonate paths within the finishing unit | per 1 kg reference flow | assays; carbon closure; gas confirmation; origin and characterization convention |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each non-reference external exchange, q_i = Q_i / P exactly once. Q_i is the raw attributable stock-corrected period quantity, after any unit conversion but before per-product division. All protocols and intermediate calculations retain raw totals for one complete matched site/route/grade/state pool, including failed/zero-output runs, rework, starts/stops, cleaning and opening/closing WIP with its burdens. P is that pool's accepted net supplied product kg, reconciled to production, dispatch, stocks and returns; prior-period stock requires matched prior burdens or exclusion from P. Count a returned/reaccepted net lot only once; internal rework is not additional accepted output or a new external exchange. Zero-output intervals retain their burdens in a justified positive-P pool; if no positive matched P exists, report per-kg results unavailable, not zero or division by zero. The aggregation basis is the final inventory basis; do not divide an already normalized result again. Keep finished_granules exactly1kg and physical output quantities independent of burden allocation. | Q_i; P; linked collection protocol | q_i in the native row unit per kg reference flow; unavailable if no positive matched P exists |  |
| solution_components | an_solution, scrubber_acid | active mass = received solution mass × measured active mass fraction; carrier water = solution mass × measured water fraction. Retain total supplied mass for a total-solution provider; these are composition subledgers, not duplicate supply rows. | solution mass; assay; cp_feed | active and carrier-water subledgers | |
| electricity_conversion | electricity | Raw period electrical energy in MJ = recorded kWh ×3.6. Retain the attributable raw period total; apply normalize_period once afterward, without dividing here. | kWh; cp_power | raw attributable period MJ before normalize_period | efma-an-can-2000 |
| delivered_heat | steam_heat | Raw period interface heat in MJ = (sum incoming steam mass × incoming enthalpy - sum actual outgoing condensate/flash mass × outgoing enthalpy - separately measured interface losses) /1000 for kg and kJ/kg. Match the provider boundary and avoid subtracting losses twice. No unmeasured heat term is assumed. Retain the raw attributable period MJ, then apply normalize_period once; do not divide here. | interface masses; enthalpies; losses; cp_heat | raw attributable period net MJ before normalize_period |  |
| emission_integration | ammonia_air, nitric_acid_air, an_condensable_air, pm25_air, pm25_10_air, pm_over10_air | Raw period emitted mass in kg = sum of compatible concentration in mg/m3 × outlet volume flow rate in m3/h × actual interval operating h /1000000; use consistent wet/dry and T/P bases and separate fugitives. Preserve this correct rate-times-duration calculation and disclose extrapolation/censored values. Retain raw period species/fraction loads and apply normalize_period once afterward; do not divide by P here. | sampling; outlet flow; hours; cp_air; cp_pm | raw period species or fraction kg before normalize_period | efma-an-can-2000 |
| particle_partition | pm25_air, pm25_10_air, pm_over10_air | fine = measured filterable PM2.5; coarse = compatible filterable PM10 - PM2.5; large = compatible total filterable PM - PM10. Reject negative/incompatible differences; cumulative totals are not additive exchanges. Keep chemically identified condensable AN and acid phase disjoint. | matched particle tests; cp_pm | disjoint fraction masses | epa-pm-201a-2020 |
| physical_balances | all inventory rows | On the unallocated physical ledger, conserve total material mass and relevant elements, including N, carbon and H/O: external inputs plus opening stocks equal external outputs plus closing stocks, with residual uncertainty. For molecular water, AN, carbonate, acid and other reactive components separately record inputs + opening stocks + actual formation = outputs + closing stocks + actual consumption. Establish actual reaction occurrence and net extents independently from stage assays, a supported chemical model and measured gas/species evidence; include any actual carbonate/acid/free-ammonia reactions without assuming they occur or fully convert. Do not infer reaction water or dry-component changes from the residual needed to close water/dry-mass accounts. Retain independent CO2 gas confirmation under cp_carbon, measured moisture/carrier water, phase transfers and equal internal links; never invent emission, yield or correction flows. | cp_product; cp_feed; cp_water; cp_air; cp_pm; cp_waste; cp_maintenance; cp_carbon | unallocated conserved mass/element and reactive-species ledgers, independent evidence and residual uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all exchanges | Exact material/mixture state, chemistry/CAS and any hard route limitations must match; broad identity never proves provider quantity compatibility. Blank UUIDs prevent automatic linkage but never justify omitted exchange amounts. | raw flow record; actual supplier/SDS/assay; receiver |
| period | all inventory rows | Same declared site, grade, route and period; record seasonal loads, starts/stops, cleaning, stock changes and any extrapolation. Avoid silent averaging of different recipes. | synchronized logs and uncertainty |
| sampling | air and material assays | Choose validated methods for actual matrix, gas moisture and phases; retain calibration, blanks, repeat tests, quantification limits and measured versus inferred intervals. No literature performance default. | eu-lvic-aaf-2007; efma-an-can-2000; epa-pm-201a-2020; actual reports |
| completeness | foreground package | Include each actual externally purchased conditioning material, separately acquired onsite ingredient and maintenance/control consumable as its own exchange; retain constituents of a whole purchased formulation in composition subledgers without duplicate procurement. Prove non-occurrence and retain unknown heat/waste/emission identity, provider basis and particle-partition gaps explicitly until resolved. | ingredient/service register; flow and provider checks |

## 9. Validation Rules

- `validate_identity`: Verify carbonate-mixture identity, one finished_granules reference output, natural limestone and declared granulation route. Reject calcium-nitrate double salts, straight AN and substitute filler routes [un-cpc3-2025; yara-mineral-fertilizers].
- `validate_basis`: All inventory rows and linked aggregation use per 1 kg accepted net supplied reference flow. Check product water/additives, AN solution/acid composition, nutrient fractions, utility provider definitions and measured heat balance; no empirical default is imposed.
- `validate_balance`: Inspect the unallocated physical and internal-transfer ledgers before burden allocation. Require documented residual uncertainty and equal internal transfers; do not mechanically scale physical co-product mass by an allocation share.
- `validate_emissions`: Require correct species, outdoor-air subcompartment, phase and disjoint particles. Wet-stack limitations and condensable uncertainty remain explicit; a test reporting only total PM cannot establish resolved size fractions [efma-an-can-2000; epa-pm-201a-2020].
- `validate_linkage`: Resolve applicable blank identities and compatible background/receiver datasets before declaring a complete LCI. Actual additional ingredients, fuel, waste or emissions need individual evidence-backed rows. Unknown data are not zero; preserve biogenic CO2 separately if an actual added biogenic ingredient emits it.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Declared-site limestone CAN granulation manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible carbonate-filled bulk CAN manufacturing supply with matching recipe, route, utility and provider bases |
| excluded_use | Fertilizer application equivalence; calcium nitrate double salts; generic CPC 34615 coverage; prilling; other filler routes; unverified solution or heat basis |
| required_metadata | Site and period; SKU/grade; actual recipe and water; AN solution supplier interface; natural limestone grade/milling; N forms; granulation/drying/cooling/conditioning; utilities; emission controls; waste receivers; allocation |
| required_quality_disclosure | Measured and extrapolated coverage; unresolved identities/providers; particle/condensable uncertainty; balance residuals; exclusions; study-specific allocation; no generic quantity defaults |
| update_trigger | Recipe, moisture, filler/AN supplier, technology, utilities, controls, treatment, sampling or provider-basis change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.165; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Distinguish 34613 AN, 34614 nitrate double salts, 34615 carbonate mixtures and 34616 UAN; classification only |
| eu-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007, §§9.2.2–9.2.7 and 9.4.6, printed pp.365,367–369,383 / PDF pp.393,395–397,411; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf | AN solution upstream interface; carbonate mixing/granulation, actual drying/cooling/conditioning and controls; plant quantities and emission limits are not defaults |
| efma-an-can-2000 | handbook | EFMA, BAT Booklet 6, Production of Ammonium Nitrate and Calcium Ammonium Nitrate, 2000, §§2.3–2.6 Appendix 1 and Units, printed pp.13–15,29–31 / PDF pp.15–17,31–33; https://www.fertilizerseurope.com/wp-content/uploads/2019/08/Booklet_6_final.pdf | Finishing/recycle/conditioning, electricity unit conversion and AN/CAN gas measurement; no universal recipe, safe operating specification or emission factor |
| yara-mineral-fertilizers | handbook | Yara Guide to Mineral Fertilizers, glossary printed p.26 / PDF p.27 ; https://www.yara.co.uk/siteassets/crop-nutrition/media/uk/uk-agronomy/yara-guide-to-mineral-fertilizers.pdf/ | Producer carbonate CAN identity distinct from calcium nitrate; commercial nutrient figures are examples |
| nynas-fertilizer-coatings | handbook | Nynas, Fertile formulations, main article and Coatings Checklist; https://www.nynas.com/en/products/process-oils/knowledge-tank/fertile-formulations/ | Neat or formulated mineral-oil conditioning; separate actual constituents; NPK laboratory reductions are excluded as CAN defaults |
| epa-pm-201a-2020 | official_guidance | US EPA, Method 201A, October 7 2020, §§1–2, PDF pp.1–2; https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | Filterable size fractions, droplet limitations and distinct condensable scope; use the actual validated site method, no emission factors |
