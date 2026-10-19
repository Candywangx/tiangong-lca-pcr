---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.animal-or-vegetable-fats-and-oils-and-their-fractions-chemically-modified-except-those-d5db5640
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Bulk epoxidized soybean oil by solvent-free peracetic-acid epoxidation

## 1. Scope and Applicability

This PCR covers gate-to-gate manufacture of bulk liquid epoxidized soybean triglyceride oil by solvent-free, sulfuric-acid-catalysed peracetic epoxidation, including actual aqueous-phase separation, acid recovery, conditional neutralisation, washing, drying, filtration and dispatch storage. The evidence establishes a real route; it is not a plant recipe or operating procedure. Each dataset declares its actual reagent assays, grade and process sequence. Sources support chemical identity, conventional peracid conversion, a historical solvent-free case and bulk supply, without transferring a factory recipe or energy number.

The present inventory applies to purchased electricity and externally supplied heat, physical/non-oxidative vapour recovery, and segregated liquid waste transferred to off-site treatment. On-site boilers, thermal oxidation, direct treated-effluent discharge or additional chemistry require an evidenced extension with all atomic inputs, residues and emissions before this PCR can be applied to that system. Keep biogenic and fossil carbon separate in any extension; biogenic CO2 is not removed from LCI because a GHG reporting convention excludes it.

Exclude hydrogenated, inter-esterified, re-esterified and elaidinized fats, unmodified soybean oil, epoxidized linseed or other oils, free fatty-acid epoxides, fatty-acid ester epoxides, ring-opened polyols, acrylated oil, epoxy resin, formulated plasticizer blends, emulsions, inedible mixed-fat preparations and performic/enzymatic/solvent routes. CPC 34550 is wider than this method. Hairma S-P-06253 describes a formic-acid route and even lists another CPC code: it is counterevidence to extending that plant recipe to the present peracetic method, not authority to alter UNSD classification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.animal-or-vegetable-fats-and-oils-and-their-fractions-chemically-modified-except-those-d5db5640 |
| classification_refs | CPC 3.0:34550; narrower |
| covered_products | Bulk epoxidized soybean triglyceride oil; declared oxirane/iodine/acid values, water content, grade and assay |
| excluded_products | Other source oils, chemical modifications, formulated mixtures and alternative routes listed in section 1 |
| representative_product | Bulk epoxidized soybean oil, without added formulation water or solvent |
| production_route | Solvent-free peracetic acid formed from hydrogen peroxide and acetic acid, catalysed by sulfuric acid; actual stage sequence declared |
| market_state | Bulk liquid at manufacturer dispatch gate; reusable tanks are not product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared grade of epoxidized soybean oil as an industrial material; no universal downstream functional equivalence claimed |
| How much | 1 kg accepted net bulk product |
| How well | Supplier/customer specification with source oil, route, oxirane oxygen, iodine value, acid value, moisture and residual peroxide declared |
| How long or cycle | One declared production reporting period at the dispatch gate; no use-life default |
| reference_flow_link | `finished_oil` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Animal or vegetable fats and oils and their fractions, chemically modified, except those hydrogenated, inter-esterified, re-esterified or elaidinized, inedible mixtures or preparations of animal or vegetable fats or oils `d2b9b37c-727f-427d-a809-50c97fb48f79` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Soybean triglyceride origin; solvent-free peracetic route; actual catalyst; product CAS/grade; fatty-acid and epoxide distribution; oxirane oxygen; iodine value; acid value; moisture; residual acid/peroxide; net bulk mass; site/period; provider quantity basis |

The broad database flow includes this chemically modified oil subset and has no opposite route restriction. Its identity is not evidence for an averaged background covering all CPC 34550 products. Match the actual product and upstream/consumer interface before use. Required qualifiers are mandatory dataset metadata; unknown assays remain unknown.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net dispatch weighing and stock reconciliation for one defined grade; all inventory rows are per 1 kg reference flow. |
| `commercial_active_basis` | aqueous reagent and recovered acid | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep gross commercial solution, assay-defined active chemical and carrier water separately. Active mass equals solution mass times measured mass fraction; volume needs measured density and temperature. Do not infer native concentration or reference quantity from the name alone. |
| `utility_basis` | electricity, indirect heat and steam | Native property and measured interface | MJ; kg | Electricity uses native Net calorific value/MJ with 1 kWh = 3.6 MJ. Heat requires net delivered useful energy; steam is measured mass with pressure/temperature/quality and a compatible provider. Do not add heat to the electricity that generated it or duplicate steam mass and supplier heat burden. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete` | foreground | Include all controlled receipt, epoxidation, phase split, recovery, actual neutralisation/washing, drying/stripping, filtration, product storage/loading, cooling/vacuum, cleaning and physical emission-control operations. | `fraunhofer-igb-epoxidation`; `ashland-peracetic-epoxidation-1967`; `ec-jrc-ofc-bref-2006` |
| `boundary_upstream` | purchased supply and external treatment | Link purchased materials/utilities and actual off-site treatment to representative nonzero providers. This gate-to-gate inventory alone is not a cradle-to-grave result. | `ec-jrc-ilcd-handbook-2010` |
| `boundary_scope_extension` | additional operation | A different route, on-site combustion/oxidation, direct wastewater discharge, formulation or packaging manufacture requires an evidenced extension; disclose transport and packaging separately from the bulk reference product. | `ec-jrc-ofc-bref-2006`; `arkema-bulk-epoxidized-soybean-oil-2020` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified refined soybean oil and actual reagents/utilities received at the epoxidation facility; prior agriculture, extraction and refining are upstream |
| starting_condition_role | Purchased technosphere products, not burden-free raw material |
| product_classification_scope | Narrow peracetic epoxidized-soybean-oil subset of CPC 34550; classification is mapping context |
| recursive_input_rule | Internal rework/acid recycle are ledger links with equal transfer amounts at both ends, not additional external exchanges. Purchased same-category oil needs one upstream dataset and finite termination; add its atomic input explicitly before modelling it |
| upstream_dataset_requirement | Match actual oil origin/refining, assay, whole-solution versus active basis, energy interface, geography, time and treatment receiver |
| disclosure | Grade, route, stage sequence, assays, utility origin, emission-control technology, recycle, stock, co-product/waste receivers, allocation, excluded operations and unresolved interfaces |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `epoxidation_workup` | Integrated peracetic epoxidation and workup | required | Covered route and declared gate boundary | Foreground unit; stage measurements retained | 1 kg reference flow |

Physical stages: receipt/storage → controlled peracetic epoxidation and cooling → aqueous/oil separation → actual acid recycle/recovery and neutralisation/washing → vacuum drying or conditional steam stripping → filtration → accepted bulk storage/dispatch. Collect each stage separately, but aggregate into one foreground process so the same finished-oil UUID appears as exactly one product output. Intermediate oil, reactor aqueous recycle and condensate loops retain equal transfer quantities at both ends of internal ledger links. Cooling water circulating inside the unit is not a repeatedly counted withdrawal.

### Process: Integrated epoxidation and workup (`epoxidation_workup`)

#### Inputs

##### Product flows

###### Refined soybean oil feed (`soybean_oil`)

Measure net external refined soybean oil charged; disclose triglyceride origin, refining, fatty-acid profile, iodine value, moisture and free fatty acids. Internal oil rework is in the physical ledger, not a second purchased input.

- Selected flow: Soya bean oil, refined `a113893c-4722-4285-b86e-fddcc8b54e46`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### Hydrogen peroxide reagent (`hydrogen_peroxide`)

Physical identity is H2O2, CAS 7722-84-1; the generic UUID has no concentration specification. Its native CPC 34140 carboxylic-acid classification conflicts with the peroxide name/CAS; record this source metadata conflict and clarify it before release. Conditional chemical identity does not resolve the pending supplier quantity basis. Record commercial solution mass, measured assay and carrier water separately in the physical ledger. This inventory row reports active H2O2 mass only when the supplier background explicitly uses kg active H2O2; otherwise quantity/background linkage is pending. Never interpret this UUID as kg whole commercial solution, infer purity or density, or change the actual recipe to fit a 30% lookup. Carrier water embedded in that supplier solution is not also purchased process water.

- Selected flow: Hydrogen peroxide `c566e036-2e0c-4f44-b4c2-08dc00af93c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### Fresh acetic acid (`acetic_acid`)

This selected industrial synthesis record requires purity at least 99.8%. Use only for a qualifying fresh glacial-acetic-acid lot; measured assay, whole delivered mass and provider reference basis remain distinct. Another assay or recovered aqueous acid requires another verified interface. Acetic acid is regenerated by epoxidation; do not equate gross circulation with stoichiometric consumption.

- Selected flow: Acetic acid (acetic acid) `2cf748a4-30e8-4efd-aec4-05beb20604dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### Sulfuric acid catalyst (`sulfuric_acid`)

The selected record specifies industrial concentrated sulfuric acid, 93–98%. Record actual lot assay and delivered solution mass; track sulfur through aqueous phase, neutralisation and residue. No catalyst dose is prescribed.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### Calcium hydroxide for conditional neutralisation (`calcium_hydroxide`)

Include only when the actual finishing process neutralises residual sulfuric acid with industrial hydrated lime. Record Ca(OH)2 assay, dry reagent mass and any added slurry water; another neutralising reagent is a separately inventoried exchange. The historic patent supports the operation, not a default dose or a universal neutralisation choice.

- Selected flow: hydrated lime `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### Deionised process-water supply (`process_water`)

Collect externally supplied deionised water for washing, solution preparation, cleaning and cooling-loop makeup at separate stage meters. No generic density is used: weigh or convert metered volume using measured water temperature and a documented density method. Exclude embedded reagent water and recirculating cooling throughput from this external input.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ec-jrc-ofc-bref-2006`

###### Purchased low-voltage electricity (`electricity`)

The selected user-side grid-average record is below 1 kV. Meter reaction agitation, cooling, vacuum, separation, filtration, recovery, transfer and emission control separately where practicable; remove unrelated plant loads. Its native property is Net calorific value, not a renamed generic energy property. Retain the supplier geography, voltage and period; incompatible supplies need another interface.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record the attributable exchange from `cp_energy` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-jrc-ofc-bref-2006`

###### Purchased indirect manufacturing heat (`purchased_heat`)

Measure net useful heat crossing the supplier/foreground interface for conditioning, recovery and vacuum drying, including return-state subtraction and heat-meter calibration. The broad heat identity does not establish a net-delivery basis: provider useful-heat definition and supply/return enthalpy must match before linking a quantity. Electric heating is already electricity and is not counted again here.

- Selected flow: Heat for manufacturing `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record the attributable exchange from `cp_energy` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-jrc-ofc-bref-2006`

###### Process steam injected for stripping (`direct_steam`)

Include only if steam actually contacts the oil during stripping. Record delivered steam mass, pressure, temperature, quality, provider reference basis and downstream condensate; do not infer delivery enthalpy from an MJ property or select a pressure-specific UUID without evidence. Indirect heat and this material steam are distinct interfaces and must not duplicate supplier energy.

- Selected flow: Process steam `41a70607-cc98-4ae8-8556-e33cdf13157e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ashland-peracetic-epoxidation-1967`

###### Conditional filtration cloth replacement (`filter_medium`)

Only actual external replacement filtration cloth is an input; record fabric composition, grade, service life and dry mass consumed in the reporting period. Do not substitute polypropylene resin for fabricated cloth. A permanent cleanable filter without cloth gives this row documented non-applicability.

- Selected flow: Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_materials` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming bulk epoxidized soybean oil (`finished_oil`)

Exactly 1 kg reference flow. The broad database name is retained; PCR qualifiers restrict it to bulk soybean-triglyceride oil epoxidized by the covered peracetic route. Record accepted net product mass and grade; it is neither one pure molecular species nor an aqueous active-ingredient solution. Exclude packaging tare and separately sold recovered acid.

- Selected flow: Animal or vegetable fats and oils and their fractions, chemically modified, except those hydrogenated, inter-esterified, re-esterified or elaidinized, inedible mixtures or preparations of animal or vegetable fats or oils `d2b9b37c-727f-427d-a809-50c97fb48f79`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources: `fraunhofer-igb-epoxidation` ; `arkema-bulk-epoxidized-soybean-oil-2020`

###### Recovered acetic-acid aqueous solution (`recovered_acid`)

Only recovered acetic-acid solution actually transferred to an external buyer is a co-product. Record net solution mass, acid assay, residual peroxide, sulfuric acid, oil contamination, acceptance specification and receiver. Internal acid recycle is a measured internal loop, not this output; fresh glacial-acid UUIDs with a synthesis/purity restriction are not its identity.

- Selected flow: Recovered acetic-acid aqueous solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_residues` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `ec-jrc-ofc-bref-2006` ; `ashland-peracetic-epoxidation-1967`

##### Waste flows

###### Epoxidation aqueous mother liquor for off-site treatment (`wash_liquor`)

One separately collected liquid waste stream from aqueous-phase separation, washing and captured condensate when demonstrably collected together. Record solution mass, density if using volume, acid/peroxide/oil/salt composition, COD or TOC, pH, batch coverage and receiver. Keep physically segregated streams separate in the actual dataset. Off-site liquid transfer is not also an elementary discharge at this foreground gate.

- Selected flow: Epoxidation aqueous mother liquor for off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_residues` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `ec-jrc-ofc-bref-2006`

###### Spent oil-contaminated filtration cloth (`filter_waste`)

Record the actual discharged cloth, retained oil/reagent contamination, wet mass, receiver and treatment acceptance. This is separate from detached filter cake. Clean mechanically recycled polypropylene waste is not a substitute for contaminated cloth.

- Selected flow: Spent oil-contaminated filtration cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_residues` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `ec-jrc-ofc-bref-2006`

###### Oil-contaminated calcium-salt filter cake (`filter_residue`)

Include only if calcium neutralisation and filtration actually produce a separately removed cake; measure its moisture, oil, calcium salts and receiver conditions. Do not use a generic metal-processing sludge or count oil retained on cloth again in this row.

- Selected flow: Oil-contaminated calcium-salt filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_residues` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `ashland-peracetic-epoxidation-1967` ; `ec-jrc-ofc-bref-2006`

##### Elementary flows

###### Acetic acid release to outdoor air (`acetic_air`)

CAS 64-19-7; outdoor air, unspecified. Quantify post-control point and fugitive releases of acetic acid as species mass, not total organic carbon or undifferentiated NMVOC. Determine positive, absent or unmeasured status from site evidence; no positive emission factor is prescribed.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_emissions` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `ec-jrc-ofc-bref-2006`

###### Peracetic acid release to outdoor air (`peracetic_air`)

CAS 79-21-0; outdoor air, unspecified. Include only actual residual peracetic acid crossing the environment boundary after recovery/control; it is not acetic acid and is not assigned its UUID. Determine positive, absent or unmeasured status from site evidence; no positive emission factor is prescribed.

- Selected flow: peracetic acid `6cb14c5a-6f8a-4fe3-a04d-c113bdc8b48d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_emissions` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `ec-jrc-ofc-bref-2006`

###### Oxygen from peroxide decomposition to outdoor air (`oxygen_air`)

CAS 7782-44-7; outdoor air, unspecified. Determine actual decomposition/venting and distinguish it from peroxide oxygen retained in epoxy groups and from ambient ventilation oxygen. No default decomposition fraction. Determine positive, absent or unmeasured status from site evidence; no positive emission factor is prescribed.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_emissions` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `ec-jrc-ofc-bref-2006`

###### Water vapour to outdoor air (`water_vapour`)

CAS 7732-18-5; outdoor air, unspecified. Measure or reconcile only vapour discharged after condensation; captured condensate belongs to internal reuse or liquid waste, not both this row and wash liquor. Determine positive, absent or unmeasured status from site evidence; no positive emission factor is prescribed.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable exchange from `cp_emissions` per 1 kg reference flow; apply the declared normalization and interface rules.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `ec-jrc-ofc-bref-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_physical_ledger` | physical mass/water/carbon balances | Retain full measured physical inputs, product/co-product outputs, wastes, emissions and inventory changes before environmental allocation. Never multiply physical co-product or internal-link quantities by the allocation share. | `ec-jrc-ofc-bref-2006`; `ec-jrc-ilcd-handbook-2010` |
| `allocation_avoidance` | shared plant resources and co-products | First subdivide using stage meters and directly assigned batch records. Where multifunctionality remains, document a study-consistent determining physical relationship; use economic allocation only for the unresolved share with contemporaneous quality-specific receiver values and sensitivity. No universal mass allocation or zero-burden co-product default. | `ec-jrc-ilcd-handbook-2010` |
| `allocation_recovery` | recycled/recovered acid and off-spec oil | Internal recycle retains its load within the process and receives no avoided-product credit. A marketable external recovered acid needs acceptance, composition and allocation; discarded acid or off-spec oil is waste, not an invented sale. Keep allocated environmental accounts separate and disclose any study-level substitution. | `ec-jrc-ilcd-handbook-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Each protocol retains raw period totals. The aggregation column declares the final per 1 kg reference-flow basis; it does not direct another division. Apply normalization once, only through normalize_period, to the stock-reconciled complete matched pool. Carry burdens with the corresponding raw-material, work-in-progress, rework and finished-product stocks across periods; do not pair old-stock dispatches with current processing alone.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product` | `epoxidation_workup` | finished_oil | Measured foreground records | grade; batch; tare/gross/net dispatch mass; beginning/end accepted-product and off-spec/rework stocks; inter-period and external transfers; accepted net production P; failed/zero-output batch identifiers; oxirane oxygen; iodine/acid values; moisture; peroxide; actual product composition and assay uncertainty | Use calibrated net scales/tank reconciliation and traceable lot acceptance tests. Determine raw accepted net production P for one documented grade and complete reporting pool by reconciling production, dispatch, stocks and transfers; do not treat dispatch from opening accepted stock as new production or count internal rework twice. Keep failed and zero-output batches in the matched pool. Retain raw kg totals; normalize only through normalize_period. | kg | Each batch/transfer; representative full emission profile | Same declared complete production period | One site, one declared route/grade | per 1 kg reference flow | Calibration, certificates, timestamps, raw tests and reconciliation; record missing data |
| `cp_materials` | `epoxidation_workup` | reagent and water input | Measured foreground records | lot; supplier; native reference basis; commercial solution mass; active assay; carrier water; density/temperature; external receipt and charge; stage; recycle/rework transfers; beginning/end stocks; residual reagent species and reaction-extent evidence; steam pressure/temperature/quality | Use calibrated weighing/meters, analytical assays, supplier certificates and complete stage records. Retain stock-reconciled raw attributable material totals for the same production pool as P, including failed batches, zero-output batches, cleaning and rework. Keep commercial solution mass, active amount and carrier water separately; internal transfers remain equal ledger links. Do not divide totals in this protocol; apply normalize_period once. | kg | Each batch/transfer; representative full emission profile | Same declared complete production period | One site, one declared route/grade | per 1 kg reference flow | Calibration, certificates, timestamps, raw tests and reconciliation; record missing data |
| `cp_energy` | `epoxidation_workup` | electricity and heat | Measured foreground records | meter; stage; interval; voltage; supplier; supply/return flow and enthalpy; heat losses; shared loads; energy reference basis | Use calibrated electricity and net-heat meters covering the same complete production pool as P, including failed/zero-output batches, rework, cleaning and changeovers. Retain raw totals and documented causal load apportionment; preserve supplier reference quantities and supply/return heat states. Convert kWh to MJ once using 3.6 MJ/kWh, then apply normalize_period once; do not divide in this protocol. | MJ | Each batch/transfer; representative full emission profile | Same declared complete production period | One site, one declared route/grade | per 1 kg reference flow | Calibration, certificates, timestamps, raw tests and reconciliation; record missing data |
| `cp_residues` | `epoxidation_workup` | co-product and segregated waste | Measured foreground records | origin stage; receiver; net wet mass; density; moisture; individual acid/peroxide/oil/salt composition and assay uncertainty; residual H2O2/peracid; organic material and calcium/sulfur species; cloth/cake separation; COD/TOC as aggregate indicators; pH; beginning/end stocks; transfers and actual reaction/side-product evidence | Use calibrated transfer weighing, representative species/composition sampling and actual treatment/sales acceptance for the same complete production pool as P; follow failed batches, rework and waste manifests. Retain raw co-product and segregated waste totals with stock changes, full physical amounts before allocation and separate internal transfers. Do not divide in this protocol; apply normalize_period once. | kg | Each batch/transfer; representative full emission profile | Same declared complete production period | One site, one declared route/grade | per 1 kg reference flow | Calibration, certificates, timestamps, raw tests and reconciliation; record missing data |
| `cp_emissions` | `epoxidation_workup` | outdoor species emissions | Measured foreground records | species/CAS; point/fugitive source; stage; species mass concentration or verified conversion; gas volume flow rate or already integrated gas volume; interval boundaries and duration; temperature/pressure; wet/dry basis; incoming species background where relevant; control capture; condensate; uncertainty; absent/present/unmeasured status | Use species-resolved interval sampling and matched gas-volume monitoring over the same complete production pool as P, including failed/zero-output batches, rework, reaction, transfers, recovery, drying and cleaning. Include separately evidenced fugitives and independently supported water/peroxide species balances. Apply species_integration to obtain raw external species mass once; captured material and incoming ambient background are not process releases. Retain raw species totals and measurement gaps; normalize only through normalize_period. | kg | Each batch/transfer; representative full emission profile | Same declared complete production period | One site, one declared route/grade | per 1 kg reference flow | Calibration, certificates, timestamps, raw tests and reconciliation; record missing data |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | For each non-reference exchange i, q_i = Q_i / P exactly once. Q_i is its raw stock-reconciled attributable amount for the complete reporting pool, before any per-kg division; P is accepted net production in kg for that same grade and pool from cp_product. Include all matched failed/zero-output batches, off-spec production, rework, cleaning and starts/stops in the attributable totals; do not select only successful batches. Internal transfers are not new external exchanges. If P is zero, the per-kg result is undefined: retain the totals for a justified matched pool with positive accepted output or report unavailable; never report zero burden or divide by zero. Keep finished_oil exactly 1 kg. Preserve full physical co-product/waste quantities; environmental allocation is a separate account after reconciliation. Each protocol retains raw period totals. The aggregation column declares the final per 1 kg reference-flow basis; it does not direct another division. Apply normalization once, only through normalize_period, to the stock-reconciled complete matched pool. Carry burdens with the corresponding raw-material, work-in-progress, rework and finished-product stocks across periods; do not pair old-stock dispatches with current processing alone. | cp_product; cp_materials; cp_energy; cp_residues; cp_emissions | exchange per 1 kg reference flow, or explicitly unavailable when P is zero | `ec-jrc-ilcd-handbook-2010` |
| `assay_accounting` | hydrogen_peroxide, acetic_acid, sulfuric_acid, recovered_acid | Active mass = measured commercial solution mass × measured active mass fraction; carrier water is reconciled separately. Use active normalization for H2O2 only with a supplier active-kg interface; otherwise retain pending linkage. | cp_materials; cp_residues | separate solution/active/water amounts | `ec-jrc-ofc-bref-2006` |
| `species_integration` | acetic_air, peracetic_air, oxygen_air, water_vapour | Obtain raw species mass from the time integral of matched species mass concentration C_i(t) and gas volume flow rate Q(t). For measured interval gas volumes V_j, use the sum of flow-weighted C_i,j times V_j after explicit unit conversion; V_j already includes duration and must not be multiplied by time again. Use concentration times flow rate times interval duration only when a representative constant or compatible interval-average basis is established. Match temperature, pressure and wet/dry basis, and separate process-generated oxygen/water from independently established incoming background. Add separately evidenced fugitives once; captured material is not emitted. Carbon concentration is not species mass without verified speciation/conversion. | cp_emissions | raw attributable external species mass before normalize_period | `ec-jrc-ofc-bref-2006` |
| `physical_reconciliation` | unallocated ledger | On the unallocated physical ledger, opening stock plus all external physical inputs equals closing stock plus all external physical outputs, with uncertainty; total mass and each relevant element are conserved. For each reactive species separately, opening stock plus external input plus actual formation equals closing stock plus external output plus actual consumption. Independently establish peroxide/peracid reaction and decomposition, epoxide oxygen retained in oil, water formation/consumption, acid regeneration/neutralisation and organic side-product formation/consumption from actual site assays/speciation and an independently supported reaction-extent model or direct measurement. Keep commercial carrier water, internal recycle, co-products, waste and vapour distinct. Do not infer formation/consumption from a closure residual, COD/TOC alone, assumed complete conversion, default decomposition/yield or a fixed product/feed ratio; unresolved species balances remain unresolved. | cp_product; cp_materials; cp_residues; cp_emissions | distinct total-mass/element and reactive-species balances, evidence and residual uncertainty | `ec-jrc-ofc-bref-2006`; `fraunhofer-igb-epoxidation` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all interfaces | Verify actual lot/SKU, assay, native field restrictions, CAS, composition, reference property/unit and supplier/receiver compatibility. A flow UUID proves no foreground amount or compatible background by itself. | cp_materials; cp_product; cp_residues |
| `dq_completeness` | whole period and process | Retain off-spec production, cleaning, starts/stops, recovery and stock changes. Missing emissions/assays are unmeasured, not zero; add every actually occurring omitted atomic flow before releasing a dataset. | cp_product; cp_emissions |
| `dq_balance` | physical and environmental accounts | Keep measured balances and allocated environmental loads separately; disclose measurement uncertainty and unresolved balance residuals without forcing closure. | cp_materials; cp_residues; cp_energy |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | dataset reference | Require exactly one finished_oil product output of 1 kg and complete product/route qualifiers; the broad name cannot expand this PCR to mixed preparations or excluded modified oils. | `unsd-cpc-3-2025`; `fraunhofer-igb-epoxidation` |
| `validate_interfaces` | inventory | Reject unsupported assays, pure/solution conversion, grade/route/CAS/compartment contradictions and unverified supplier quantity bases. Blank UUIDs and unmeasured emissions remain explicit review items; no nearby product or wrong environmental medium substitution. | `ec-jrc-ilcd-handbook-2010` |
| `validate_accounting` | balance and allocation | Check equal internal transfers; full physical product/co-product/waste masses and stocks before allocation; one complete production pool including failed/zero-output/rework burdens; raw Q_i and accepted P normalized exactly once; no duration multiplier on already integrated gas volume; separate conserved total mass/elements from independently evidenced reactive formation/consumption; commercial carrier water and bilingual denominators. Missing quantity or species evidence remains unavailable/review-required, without borrowed recipe, yield, energy or emission defaults. | `ec-jrc-ofc-bref-2006`; `ec-jrc-ilcd-handbook-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Covered site/grade/route with complete supplier interfaces and actual measurements; review-required candidate guidance |
| excluded_use | Whole CPC 34550 coverage; food equivalence; whole commercial H2O2 solution inferred from chemical UUID; alternative reaction route; cradle-to-grave or comparative assertion from this unit alone |
| required_metadata | Reference qualifiers; actual plant route; assay and net mass bases; source period; native providers; full physical balances; allocation and extension boundary |
| required_quality_disclosure | Missing UUIDs, pending provider quantities, detection limits, measurements, balance residuals, temporal coverage, review and translation maturity |
| update_trigger | Changed oil source, catalyst, acid route, formulation, assay, heat interface, treatment, receiver or new authoritative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-2025 | official_guidance | UNSD CPC 3.0 Structure, 30 June 2025, subclass 34550. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification wording and named exclusions; narrower mapping is a candidate interpretation |
| fraunhofer-igb-epoxidation | official_guidance | Fraunhofer IGB, Preparation of triglyceride and fatty acid epoxides. https://www.igb.fraunhofer.de/en/research/chemical-and-biotechnological-processes/industrial-biotechnology/bioprocess-engineering/establishment-and-scale-up-of-technical-enzyme-processes/preparation-of-triglyceride-and-fatty-acid-epoxides.html | Conventional peracid chemistry, side reactions, salt burden and product characterization; no process quantities |
| ashland-peracetic-epoxidation-1967 | literature | W. H. French / Ashland Oil & Refining Company, US3360531A, 26 December 1967, columns 9–10 Table I solvent-free cases and conventional Run 1; workup discussed at column 8–9. https://patents.google.com/patent/US3360531A/en | Original historical physical route/recycle/workup evidence only; example recipes and performance are not defaults or operating instructions |
| ec-jrc-ofc-bref-2006 | official_guidance | European Commission, Organic Fine Chemicals BREF, August 2006, §4.3.1.4 printed 183 / PDF 213; §§5.2.1.1.2–5.2.1.1.5 printed 380–382 / PDF 410–412. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/ofc_bref_0806.pdf | General chemical plant physical balances and waste/emission measurements; no factory-specific recipe or numerical emission defaults |
| ec-jrc-ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, March 2010, §7.9.3 printed 257–258 / PDF 277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Subdivision, determining physical causality and remaining economic allocation; retain study context |
| arkema-bulk-epoxidized-soybean-oil-2020 | literature | Arkema USA, 23 April 2020, Vikoflex/Vikolox distribution and bulk delivery announcement. https://www.arkema.com/usa/en/media/news/non-global/countries/americas/20200423-brenntag-distribu/ | Independent producer confirmation of bulk epoxidized soybean oil identity/delivery only; does not prove its plant recipe |
| hairma-esbo-epd-2022 | literature | Hairma (Nantong) Technology, EPD S-P-06253, 17 May 2022, PDF pages 3, 5–8 / printed pages 2, 4–7. https://www.environdec.com/library/epd6253 | Counterevidence: formic-acid route, plant-specific inventories and different classification label; not transferred to this peracetic method |
