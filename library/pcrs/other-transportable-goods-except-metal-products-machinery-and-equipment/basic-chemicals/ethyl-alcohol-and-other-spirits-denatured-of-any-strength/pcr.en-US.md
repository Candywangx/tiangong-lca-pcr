---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ethyl-alcohol-and-other-spirits-denatured-of-any-strength
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Purchased-ethanol denaturation with IPA, MEK and denatonium: bulk mixture

## 1. Scope and Applicability

This PCR covers electrically powered formulation of purchased rectified, undenatured ethanol with actual isopropanol (IPA), methyl ethyl ketone (MEK; 2-butanone), solid denatonium benzoate dissolved on site, and actual retained water, delivered as an accepted bulk nonbeverage liquid at the site gate. It is a formulation method, not a complete upstream ethanol-manufacturing method. Concentrations are measured SKU/lot facts; none are prescribed here. Producer product 103771 establishes one analytical-grade compound set; its assay, impurity limits, bottle supply and density do not establish this bulk site route or its grade. HMRC describes separate receipt and mixing of alcohol with denaturants, and water addition, as a jurisdiction-specific production example. The actual site must qualify its purchased-feed route, solid dissolution, grade and retained water; no example recipe is prescribed. [merck-denatured-103771; hmrc-denaturing-2025; ttb-denatured]

Exclude other denaturants, purchased proprietary denaturant premixes, beverage/undenatured alcohol as final output, fuel-specification ethanol, retail packages, on-site fermentation/synthesis/distillation, thermal oxidation or combustion, on-site carbon regeneration, chemical cleaning and direct wastewater discharge. A site with these activities needs explicitly extended atomic inventories and applicable primary methods before claiming complete coverage. Every actual additional formulation chemical, laboratory reagent/gas, maintenance material and packaging/container material requires its own concrete exchange card, including an explicit UUID gap when necessary; do not suppress it to fit the representative inventory. These method citations do not assert that a site uses their laboratory reagents. On-site tests require those actual consumables and wastes; outsourced tests require a documented service boundary and compatible burdens. Different legal denominations or end uses qualify only when the actual supported composition, source and delivery state fit this boundary; this PCR grants no regulatory/use approval. [eu-denaturing-2017; ttb-denatured]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ethyl-alcohol-and-other-spirits-denatured-of-any-strength |
| classification_refs | CPC 3.0:34131; narrower |
| covered_products | Bulk nonbeverage ethanol mixtures with actual IPA, MEK, denatonium and water |
| excluded_products | Other formula identities; fuel/retail/beverage products; upstream manufacture |
| representative_product | Actual accepted SKU of this composition, not a legally assumed common formula |
| production_route | Purchased ethanol and denaturants; on-site dissolution/blending; storage/acceptance; bulk loading |
| market_state | Liquid full supplied mixture at site gate, excluding tanker mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared nonbeverage denatured ethanol formulation |
| How much | 1 kg |
| How well | Accepted actual composition, assay basis, water and intended industrial quality; no generic solvent efficacy equivalence |
| How long or cycle | One production and gate-delivery cycle; no use lifetime |
| reference_flow_link | reference |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ethyl alcohol and other spirits, denatured, of any strength `0ca960f7-3506-4b71-8503-e6f37e03d77a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU/lot; actual ethanol/IPA/MEK/denatonium/water composition and mass or volume basis; assay method; density and temperature; denaturing formula identifier/jurisdiction/version and actual recipe evidence; ethanol fermentation/synthetic source and fossil/biogenic carbon fractions; impurity/grade; bulk delivery; supplier/provider boundary; utility and emission-control configuration; site/reporting period |

The reference is the entire supplied liquid, never 1 kg pure ethanol or 1 kg dry/active matter. The broad product identity is restricted here to the compound set and route above; it supplies no concentration, carbon origin or legal conformity evidence. All required qualifiers must be collected for a concrete dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net weighing or a traceable calibrated mass meter for accepted mixture; exclude tanker/tare and rejected liquid. Preserve stage meters within the aggregated unit. |
| solution_basis | liquid materials and reference | Mass and composition | kg | Convert volume to mass only using measured density of that actual whole solution at its stated temperature: m = rho(T) × V(T), with consistent units. Never use pure-ethanol density for the mixture or sum additive liquid volumes. Retain mass and volume assay bases distinctly. |
| composition_basis | recipe and assay | Mass fraction | kg/kg | Use component mass = solution mass × measured mass fraction; verify complete water/solute closure. ABV/proof and GC area-percent are not mass fraction without a validated conversion/calibration for this denatured matrix. Historical absolute-ethanol recipe denominators are not final mixture volume. |
| energy_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain the native database property and provider boundary; metered electrical kWh × 3.6 = MJ. This exact unit conversion does not imply an electricity efficiency or fuel calorific value. |
| gas_basis | nitrogen | Mass | kg | Use supplied mass or independently measured gas-state conversion with temperature, absolute pressure, wet/dry composition and compressibility; unknown provider volume basis leaves linkage incomplete. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_formulation | blend | Include receipt, dissolution, blending, quality control, tank storage, loading, water-only cleaning and actual noncombustive vapour controls in one foreground unit. Collect each stage separately even though only one final product is output. | hmrc-denaturing-2025; jrc-efs-2006 |
| boundary_upstream | ethanol_feed | Purchased ethanol and all purchased inputs retain compatible upstream burdens once. Require origin-specific fermentation/synthetic supplier evidence; no physical ethanol conversion occurs here and no fermentation yield, distillation energy or fermentation CO2 is duplicated. | ttb-denatured; merck-denatured-103771 |
| boundary_emissions | blend | Inventory site-exit species after actual capture plus measured fugitives. Captured/returned solvent remains in the physical ledger, not an elementary emission. External liquid waste and atmospheric ethanol are different exchanges. Do not set zero solely because an abatement device exists. | jrc-efs-2006 |
| boundary_exclusion | blend | Keep activities outside the stated configuration explicit. Downstream formulation, use, distribution and tanker manufacture are excluded; inbound logistics and purchased-input production need separately documented compatible background links before a cradle-to-gate claim. | ttb-denatured; jrc-efs-2006 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased rectified undenatured ethanol, supplier-specific concentration/origin |
| starting_condition_role | foreground_start |
| product_classification_scope | IPA/MEK/denatonium denatured ethanol subset of CPC34131 |
| recursive_input_rule | Internal same-mixture return is an internal link with equal mass/composition at both ends; purchased already-denatured mixture is outside this starting configuration, not an unburdened recursive input. |
| upstream_dataset_requirement | Match actual composition, route, carbon origin, country/year, reference quantity and delivery boundary; disclose unavailable provider links. |
| disclosure | Separate gate-to-gate formulation from background-inclusive results; list omissions and site configuration. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blend | Denaturation, storage and bulk loading | required | The defined externally supplied ingredients and configuration only | Single aggregated foreground with stage-specific measurements | 1 kg |

Physical path: purchased ingredients → dissolution/blending → acceptance/storage → loading → one reference output. Each supplied solvent or formulated chemical is one full-product exchange. Track its active chemical, carrier water and actual other constituents in the composition ledger without adding a second full-product input; separately purchased carriers/components remain separate cards. Inventory only net uptake/release at the site boundary, preserving gross inlet/outlet wet-air and species measurements for reconciliation. Establish net H2O from inlet/outlet humidity, condensate, stocks and retained liquid, not from total wet exhaust mass; ambient N2/O2 pass-through is distinct from purchased inerting nitrogen. Add separate concrete elementary cards for actual net water exchange, other emitted species and measured NMVOC residual when applicable; no positive quantity or UUID is assumed. A measured residual subtracts only identified overlapping species on the same mass or carbon basis, source set, time, state and medium, with conversion evidence; never subtract all species blindly or discard real unidentified emissions. Internal returns retain equal mass and composition at both ends and are reconciled separately from gross purchases. Real off-spec liquid, rinsate and spent adsorbent leave as separate waste rows. No interstage duplicate reference output is created.

### Process: Denaturation, storage and bulk loading (`blend`)

#### Inputs

##### Product flows

###### Rectified ethanol (`ethanol_feed`)

Purchased undenatured ethanol only. Record whole received solution mass, water, ethanol mass/volume fractions, assay basis and temperature, supplier origin and fermentation or synthetic route. The bound flow requires a China production mix at plant and undenatured material before denaturing; other supply geography needs a compatible identity. It does not fix fermentation versus synthetic manufacture, carbon origin, concentration or supplier burden. Link one compatible upstream dataset; do not add a second fermentation foreground.

- Selected flow: Rectified ethanol `b3d45fa4-4eb4-4d8d-bffc-1ddf22cdc229`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `merck-denatured-103771`

###### Isopropanol (`ipa`)

Actual IPA addition, CAS 67-63-0; record purity, solution/carrier water and actual supplied mass. The adopted product requires a China production mix at plant and has no fixed concentration. Another origin or delivery boundary requires a compatible identity; the native Chinese route label does not prove an exclusive manufacturing technology. It is not a printing cleaner or optical-assembly antiseptic mixture.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-denaturing-2017`; `merck-denatured-103771`

###### Methyl ethyl ketone (`mek`)

Actual 2-butanone addition, CAS 78-93-3, separately measured supplied material with assay and carrier. No verified compatible product UUID is adopted; diisobutyl ketone and isophorone are different species.

- Selected flow: Methyl ethyl ketone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-denaturing-2017`; `merck-denatured-103771`

###### Denatonium benzoate (`denatonium`)

Actual denatonium benzoate, CAS 3734-33-6, supplied as solid for on-site dissolution. Record salt identity, anhydrous/hydrate basis, water/assay and calibrated microdose records; carrier solvent is taken from already metered ethanol/water inputs. A purchased proprietary premix is outside this representative supply configuration and requires a separately identified full-mixture input.

- Selected flow: Denatonium benzoate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-denaturing-2017`; `merck-denatured-103771`

###### Tap water (`water_recipe`)

Only separately added mains water that remains in the recipe. Meter actual quantity and water quality; do not add water already contained in purchased ethanol or IPA/MEK. Other treated-water grades need their own identity and treatment inventory.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `hmrc-denaturing-2025`

###### Tap water (`water_clean`)

Water-only cleaning of tanks/lines and laboratory glassware within this configuration. Meter separately from recipe water; retain cleaning frequency and final liquid destination. Chemical cleaning agents require an expanded atomic inventory.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `jrc-efs-2006`

###### Alternating current (`electricity`)

China 1–35 kV user-side grid-average electricity only when the site meter, geography and provider have that boundary. Include pumps, mixers, loading, laboratory, cleaning and installed controls. Record country/year and losses boundary; the UUID is not a universal supplier mix. Other supply voltages/technologies require compatible flow/provider selection.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-efs-2006`

###### Nitrogen gas (`nitrogen`)

Conditional purchased gaseous air-separation nitrogen (N2; CAS 7727-37-9) for blanketing/loading. Record actual delivered or metered mass, purity, pressure, supplier route, provider boundary and make-up/venting. Collect physical kg independently from calibrated delivery or meter records. If metered by volume, collect gas temperature, absolute pressure, wet/dry basis, composition and compressibility with a validated state conversion; do not infer density from an unverified native coefficient. Before linking a compatible product flow/provider, verify phase, route, grade, delivery boundary and mass reference-quantity support. The selected gaseous N2 product is described as at-plant make-up/headspace gas for inerting. Its qualitative “most vented” and “small make up” comments are not a dose, fraction or normalization: use measured gross external input, actual stock/retention and separately observed venting; internal returns are not new purchases. This identity establishes no air-separation manufacturing dataset, fixed purity/pressure or supplier burden. Actual supplied material and provider reference basis must match before linkage; otherwise retain the concrete exchange with an explicit linkage gap. Never infer gas density, a numerical recipe or a background burden from the name or use comment.

- Selected flow: Nitrogen gas `92233c86-8e75-441c-94de-03cc91bc7c10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-efs-2006`

###### Activated carbon (`carbon`)

Conditional actual purchased activated-carbon charge for vapour adsorption. Record grade, feedstock origin, moisture, replacement and adsorbate loading. The broad record describes air/water filtration but fixes no raw material, capacity or removal efficiency; match the provider to actual grade. Preserve the native route label “absorption reaction” alongside the comment describing adsorption; it is not evidence of a particular carbon-manufacturing route. Require supplier-confirmed sorbent and installed-system compatibility with actual ethanol/IPA/MEK vapour, moisture and operating conditions. The BREF warns of exothermic incompatibility, including ketones on deeply regenerated carbon; its regenerative twin-bed examples do not establish applicability or efficiency of this externally replaced, nonregenerative bed. No on-site regeneration is covered.

- Selected flow: Activated carbon `5cad53b5-252a-4e2f-8197-8be465707405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-efs-2006`

#### Outputs

##### Product flows

###### Ethyl alcohol and other spirits, denatured, of any strength (`reference`)

One accepted bulk mixture: ethanol plus actual IPA, MEK, denatonium and retained water. Measure net supplied liquid mass excluding tanker/transport equipment. This is the only final reference-product output; storage/loading are aggregated to avoid duplicating it. The broad flow contains the declared subset without establishing a legal formula or purity.

- Selected flow: Ethyl alcohol and other spirits, denatured, of any strength `0ca960f7-3506-4b71-8503-e6f37e03d77a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_product`
- Sources: `ttb-denatured`; `merck-denatured-103771`

##### Waste flows

###### Waste liquid (`liquid_waste`)

Discarded off-spec denatured mixture or captured solvent spill sent to external treatment, not a pure ethanol elementary emission or saleable product. Keep this batch separate from cleaning wastewater. The broad liquid-industrial-waste identity is conditional on actual composition and receiver acceptance; it establishes no treatment provider. Record full liquid mass, component masses and destination.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-efs-2006`

###### Waste liquid (`wash_waste`)

Separately collected aqueous cleaning effluent containing actual ethanol/denaturants, externally treated with declared receiver and chemistry. Use measured full mixture mass; record component concentrations, COD and water fraction for treatment compatibility. This broad identity does not support silicon-ingot or manganese-residue wastewater providers. No direct discharge to water is covered.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-efs-2006`

###### spent activated carbon (`spent_carbon`)

Conditional exported adsorbent with its actual captured solvent and moisture. Record wet mass, dry carbon and adsorbate separately for physical balance, waste classification and receiving regeneration/disposal route. Adsorbed material is not simultaneously an atmospheric release; do not apply a decolorization waste or automatic credit.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-efs-2006`

##### Elementary flows

###### ethanol (`ethanol_air`)

Ethanol CAS 64-17-5 actually leaving the site to outdoor air, unspecified subcompartment. Speciate storage, transfer, mixing, loading and ventilation after control; record fossil/biogenic carbon origin independently because this species flow has no carbon-source split. No upstream fermentation CO2 or combustion is inferred.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-efs-2006`

###### isopropanol (`ipa_air`)

Actual IPA CAS 67-63-0 released to outdoor air, unspecified; keep distinct from ethanol and other propanols. Use measured speciation and controlled/uncontrolled source coverage. No default emission factor or positive emission is implied by the flow identity.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-efs-2006`

###### methyl ethyl ketone (`mek_air`)

Actual MEK CAS 78-93-3 released to outdoor air, unspecified, distinct from supplied mixture, waste solvent, other ketones and total VOC. Do not add total VOC on top of its quantified constituent species.

- Selected flow: methyl ethyl ketone `fe0acd60-3ddc-11dd-afc7-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-efs-2006`

###### dinitrogen (`nitrogen_air`)

Conditional actual nitrogen vent from inerting to outdoor air, unspecified. Reconcile to delivered nitrogen and retained headspace; this is N2, not NOx, N2O or an air-resource input.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-efs-2006`

###### denatonium benzoate (`denatonium_air`)

Conditional actual aerosol/dust of CAS 3734-33-6 leaving the site to outdoor air, unspecified, during solid dosing. Quantify the chemical fraction after capture, not total particulate mass. Record particle-size/source coverage and prevent duplicate chemical/total-PM accounting. Captured solids returned internally are not external emissions; residues in rinse are in wash_waste.

- Selected flow: denatonium benzoate `455bab38-f4cb-47e2-b11c-de51e4329016`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount divided by accepted net mixture mass in the same reporting period; retain original stage records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-efs-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | blend | Directly attribute batch ingredients and separable stage utilities first. For unavoidable shared services use a measured causal physical driver; retain driver, totals, exclusions and sensitivity. Economic allocation requires documented failure of physical causality and actual consistent prices/period. No universal allocation percentage is prescribed. | ghg-product-2011 |
| allocation_physical | blend | Keep the unallocated total physical mass, C/H/O/N and every actual element, water and process-link ledger distinct from allocated environmental burdens. Record opening/closing stocks, product retained in equipment, adsorbate/moisture, internal paired batches, returns, maintenance removals/replacements and full packing/container physical observations separately. Amortized equipment/container service burdens and allocated environmental inventories cannot replace these gross physical observations or be used to force mass closure. Never multiply physical reference/co-product outputs by burden shares. Internal recovery is not a co-product credit; discarded liquid remains waste. Exported saleable recovered solvent requires separately evidenced identity, quality, buyer/function and allocation boundary before extending this PCR. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | blend | accepted product | foreground_record | SKU; lot; gross/tare/net mass; acceptance; actual assay basis; ethanol/IPA/MEK/denatonium/water; density; temperature; method; uncertainty; tank stock | Calibrated net weighing or mass meter; batch release composition and traceable laboratory calibration. Verify density of this actual mixture at measured temperature. Determine ethanol by matrix-qualified CLEN143 GC-FID, denatonium benzoate by CLEN280 HPLC-UV and water independently by ketone-compatible Karl Fischer with reagent blank/drift, standards and recovery validation for this matrix. TM207 supports IPA/MEK only within its demonstrated matrix/range, not denatonium, water or ethanol mass fraction. Retain method-specific calibration, dilution, duplicate/QC acceptance, recovery, interferences and detection/quantitation limits. CLEN280 yields mg/L solution; convert to kg/kg only with actual same-solution density and temperature. CLEN143 requires measured sample and calibration-standard density at 20 °C for its mass/volume conversion; binary alcohol tables are not a whole-mixture assay. Ketone side reactions invalidate an unqualified standard methanolic KF result. Neither assay standards, method performance ranges nor reference temperatures establish the actual lot purity or recipe. | kg | Each lot/event; stage meters over reporting period | Declared complete reporting period, stock opening/closing and abnormal events | Same site, SKU and configuration; segregate actual recipe campaigns | per 1 kg reference flow | Calibration, representative sampling, source coverage, uncertainty and reconciliation records |
| cp_material | blend | each recipe input | foreground_record | receipt and dosing; supplier/SKU/CAS; solution/active/carrier basis; actual purity; density/temperature; stock; ethanol route; elemental composition including C/H/O/N and actual other elements; carbon content and fossil/biogenic origin of every carbon-bearing ingredient | Reconcile calibrated weighed additions, invoices, lot CoA/SDS and stock changes. Weigh solid microdoses on a validated scale; account on-site carrier using the already measured inputs. Obtain supplier route and origin records; do not infer bio-origin from a generic ethanol name. | kg | Each lot/event; stage meters over reporting period | Declared complete reporting period, stock opening/closing and abnormal events | Same site, SKU and configuration; segregate actual recipe campaigns | per 1 kg reference flow | Calibration, representative sampling, source coverage, uncertainty and reconciliation records |
| cp_cleaning | blend | cleaning water | foreground_record | water meter; cleaning event; water quality; rinse volume/mass; destination; coverage | Separate calibrated water-only cleaning meters from ingredient addition; reconcile the resulting liquid waste and retained tank inventory. | kg | Each lot/event; stage meters over reporting period | Declared complete reporting period, stock opening/closing and abnormal events | Same site, SKU and configuration; segregate actual recipe campaigns | per 1 kg reference flow | Calibration, representative sampling, source coverage, uncertainty and reconciliation records |
| cp_energy | blend | electricity | foreground_record | stage meter kWh; voltage; supplier/country/year; losses boundary; reporting period; shared loads | Read calibrated stage meters; include QA and controls; reconcile site total and attribution driver; retain native kWh and exact MJ conversion. | MJ | Each lot/event; stage meters over reporting period | Declared complete reporting period, stock opening/closing and abnormal events | Same site, SKU and configuration; segregate actual recipe campaigns | per 1 kg reference flow | Calibration, representative sampling, source coverage, uncertainty and reconciliation records |
| cp_utility | blend | nitrogen and activated carbon, separately | foreground_record | utility identity; each delivery/meter; nitrogen state/purity/pressure; carbon grade/origin/moisture; charge/change; supplier baseline | Collect one record per atomic utility. Validate nitrogen gas conversion and activated-carbon grade; no borrowed pressure, adsorption capacity or efficiency. | kg | Each lot/event; stage meters over reporting period | Declared complete reporting period, stock opening/closing and abnormal events | Same site, SKU and configuration; segregate actual recipe campaigns | per 1 kg reference flow | Calibration, representative sampling, source coverage, uncertainty and reconciliation records |
| cp_waste | blend | each external liquid or spent-carbon stream | foreground_record | separate lot; full wet mass; water; ethanol/IPA/MEK/denatonium; COD; dry carbon/adsorbate; waste status; receiver; treatment and receipt | Weigh each exported waste lot and sample actual chemistry; preserve destination and provider acceptance records. Off-spec solvent, aqueous rinse and spent adsorbent must not be collapsed. | kg | Each lot/event; stage meters over reporting period | Declared complete reporting period, stock opening/closing and abnormal events | Same site, SKU and configuration; segregate actual recipe campaigns | per 1 kg reference flow | Calibration, representative sampling, source coverage, uncertainty and reconciliation records |
| cp_air | blend | each emitted species | foreground_record | source/vent; species/CAS; subcompartment; concentration and sampling method; exhaust flow and gas-state basis; operating time; capture/return; fugitives; detection limits; carbon source; powder size; inlet/outlet humidity and wet/dry gas flow; net uptake/release; residual NMVOC basis/overlap | Quantify actual site-exit species with validated monitoring or a site-calibrated storage/transfer mass-balance model, including fugitives and each control path. Integrate compatible species concentration and gas volume over operating time; validate models with measurements. TM207 is a liquid denaturant assay, not an exhaust-air test. Record non-detect limits/coverage, not an assumed zero. | kg | Each lot/event; stage meters over reporting period | Declared complete reporting period, stock opening/closing and abnormal events | Same site, SKU and configuration; segregate actual recipe campaigns | per 1 kg reference flow | Calibration, representative sampling, source coverage, uncertainty and reconciliation records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | a_j = A_j / P; A_j is attributable measured exchange j for the reporting period; P is accepted net kg of the full supplied mixture from cp_product. Retain each native numerator unit; output exchange per 1 kg reference flow. | A_j; P; cp_product | a_j |  |
| solution_mass | all inventory rows | m = rho(T) × V(T), after harmonizing volume and density units for the actual same solution; use calibrated mass directly when available. | cp_product; cp_material; cp_waste | m | merck-denatured-103771 |
| component_balance | all inventory rows | For each physical component k: opening stock_k + external input_k = accepted output_k + external waste_k + site-exit emission_k + closing stock_k + documented residual_k. Compute each solution contribution from measured mass fractions, retain signed residual with uncertainty, and cancel equal internal transfers. Apply the ledger to total physical mass, each constituent and C/H/O/N plus every actual other element, including dissolved or hydration water, impurities, gas uptake/release, retained adsorbent, full containers and maintenance observations. Preserve fossil/biogenic carbon separately for every carbon-bearing ingredient and emitted species. Use actual salt/hydrate formula and assay; do not equate denatonium cation to complete benzoate salt or invent purity. No invented yield, element destruction or loss closure. | cp_product; cp_material; cp_cleaning; cp_utility; cp_waste; cp_air | Unallocated physical ledger |  |
| electricity_conversion | electricity | Electrical energy in MJ = measured electrical energy in kWh × 3.6; retain supplier quantity boundary. | cp_energy | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_composition | reference | Require actual whole-mixture recipe and assay, water/impurities, density/temperature, measured net acceptance and intended grade; a legal label and ethanol-only assay do not define the mixture. Use the independently qualified ethanol, volatile-denaturant, denatonium and ketone-compatible water methods; declare analytical versus industrial grade from actual specifications. | cp_product; ttb-tm207-2018; clen-ethanol-2023; clen-denatonium-2024; mettler-kf-2012; merck-denatured-103771 |
| quality_provider | all inventory rows | Verify flow identity separately from dataset amount/reference compatibility. An unresolved non-reference UUID or provider gap stays explicit and prevents a complete background-inclusive claim for that scope. | cp_material; cp_utility; cp_waste |
| quality_period | all inventory rows | Use the same accepted product denominator and period in both languages and every row. Retain stock, rejected batches, abnormal spills, attribution and uncertainty; do not impose historical/single-plant ratios as defaults. | cp_product; cp_material; cp_energy; cp_waste; cp_air |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference | Reject undenatured or fuel ethanol as the final mixture; require actual supported constituent set, route and every reference qualifier. Exactly one final product row must equal 1 kg reference flow. | ttb-denatured; merck-denatured-103771 |
| validate_balance | blend | Reconcile complete physical mass, water, C/H/O/N and all actual element ledgers and equal internal links before burden allocation; disclose residuals, uncertainty and absent supplier origin. Biological CO2 in linked upstream LCI must not be deleted merely because a climate-reporting convention separates it. This noncombustive formulation does not invent a CO2 source. |  |
| validate_emissions | blend | Check actual medium/submedium, CAS, species mass and source coverage. Keep waste mixtures separate from elementary species, measured emissions separate from captured/internal material, and speciated VOC separate from duplicate totals while retaining any measured, nonoverlapping NMVOC residual on a verified common basis. Net H2O and atmospheric pass-through require separate inlet/outlet observations; wet exhaust is not one chemical species. Particle-size bins/chemical fractions must not overlap in summed elementary exchanges. | jrc-efs-2006 |
| validate_completeness | all inventory rows | Unresolved identities, provider bases, unmeasured applicable sources or excluded additional plant activities must be reported as incomplete scope. Identity lookup is not methodology approval, chemical/legal suitability or complete dataset validation. | ttb-denatured; jrc-efs-2006 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/SKU-specific foreground formulation dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Use only for the declared supplied mixture, composition and bulk boundary; background-inclusive use needs compatible upstream/transport/treatment links. |
| excluded_use | Pure ethanol equivalent; arbitrary legal denaturing recipe; fuel/beverage use; unsupported whole upstream plant; universal default inventory |
| required_metadata | All reference qualifiers; flow/provider bases; full physical ledger; stage collection; allocation; stock; site/year; source limitations |
| required_quality_disclosure | UUID gaps, supplier/background gaps, measurement coverage, residuals/uncertainty and configuration exclusions; independent methodology approval remains pending |
| update_trigger | Change of recipe/component, upstream source/carbon origin, water/assay basis, supply/utility/control configuration, legal specification or measured balance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ttb-denatured | official_guidance | [TTB Denatured Alcohol](https://www.ttb.gov/regulated-commodities/industrial-alcohol/industrial-alcohol-denatured-alcohol) | SDA/CDA nonbeverage distinctions; no recipe or use approval is inferred. |
| eu-denaturing-2017 | official_guidance | [Commission Implementing Regulation (EU) 2017/1112, Annex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R1112) | Historical original act establishes IPA/MEK/denatonium identities and absolute-ethanol basis distinction. Not a current worldwide legal mandate or amount default. |
| merck-denatured-103771 | literature | [Merck/Supelco product 103771, Properties and General description](https://www.sigmaaldrich.com/US/en/product/mm/103771) | Producer original product page read: concrete compound set, distinct assay and density/temperature declarations. Single SKU only; no concentrations, impurity limits, density or packaged form transferred as defaults. |
| jrc-efs-2006 | official_guidance | [JRC Emissions from Storage BREF, July 2006](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/efs_bref_0706_0.pdf), §§4.1.2.2.3, 4.1.3.15.2, 5.1.1.1 and 5.2.2.2; printed pp.119, 145–146, 259–260, 271 / PDF pp.147, 173–174, 287–288, 299 | Horizontal liquid storage/transfer and monitoring/control conditions; significance and measurement frequency are case-specific, large-facility conditions retained. No ethanol recipe, universal loss or energy factor. |
| ttb-tm207-2018 | official_guidance | [TTB SSD:TM:207 Rev.1, issued 23 January 2018](https://www.ttb.gov/media/72467/download?inline=), pp.1–8, Scope, limitations, sample preparation, QC, calculations and reporting | Primary HS-GC-MSD volatile-denaturant method, including IPA/MEK; original courtesy copy, not automatically updated. Require actual matrix/range/limit validation; not nonvolatile denatonium, water, ethanol mass-fraction or exhaust-air method. |
| ghg-product-2011 | standard | [GHG Protocol Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf), Tables 9.1–9.2 printed p.63 / PDF p.65 | Subdivision and causal physical allocation hierarchy; no fixed allocation share; the separate physical ledger is a declared foreground collection requirement. |
| hmrc-denaturing-2025 | official_guidance | [HMRC Excise Notice 473, updated 18 November 2025](https://www.gov.uk/government/publications/excise-notice-473-production-distribution-and-use-of-denatured-alcohol/excise-notice-473-production-distribution-and-use-of-denatured-alcohol), §§3.1, 3.6, 5.3, 13–14 and 20.2 | Primary separate-receipt/mixing, water-addition and stock-record example. UK-specific and time-specific; no worldwide legal rule, prescribed dose or site-approval claim. |
| clen-ethanol-2023 | official_guidance | [CLEN ILIADe 143:2023, version 25 July 2023](https://taxation-customs.ec.europa.eu/system/files/2023-09/ILIADe143_Ethanol_v25July2023_CLENmethod.pdf), §§1–8 and Annex, PDF pp.1–7 | Primary GC-FID ethanol assay separates IPA/MEK; preserve calibration, sample density/20 °C and mass/volume distinction. Original reagent CAS entry is inconsistent with the ethanol identity; verify the actual reagent rather than copying that entry. No lot purity default. |
| clen-denatonium-2024 | official_guidance | [CLEN ILIADe 280:2024, version 13 February 2024](https://taxation-customs.ec.europa.eu/system/files/2023-09/ILIADe280_DenatoniumB_v25July2023_CLENmethod.pdf), §§1–8 and Annex, PDF pp.1–6 | Primary HPLC-UV denatonium benzoate assay in denatured alcohol; retain working range, interference separation, calibration, QC and solution mg/L basis. Regulatory absolute-ethanol conversion is separate from whole-mixture mass. |
| mettler-kf-2012 | literature | [Mettler-Toledo KF Guide 1, August 2012](https://www.mt.com/dam/MT-NA/KarlFischerHelpPage/KF_Guide_1.pdf), §§1.3, 2.1.4–2.1.5 and 2.2.5, printed pp.9–10, 13, 18 / PDF pp.9–10, 13, 18 | Primary instrument-method guidance on ketone side reactions and special KF reagents. Require actual-matrix blank/recovery and technique qualification; no denatured-lot water value or universal reagent suitability. |
