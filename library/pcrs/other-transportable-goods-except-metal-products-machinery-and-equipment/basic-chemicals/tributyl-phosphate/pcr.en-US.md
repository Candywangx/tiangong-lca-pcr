---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.tributyl-phosphate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Tributyl phosphate manufacture from phosphorus oxychloride and n-butanol

## 1. Scope and Applicability

This method covers one chemically defined, unformulated technical-grade liquid product: tri-n-butyl phosphate (TBP), CAS126-73-8, C12H27O4P, manufactured by direct reaction of phosphorus oxychloride with n-butanol and separation of HCl, excess alcohol and actual process solvent. It covers the factory-gate product and its actual synthesis, purification, delivery and pollution-control operations. Feedstock manufacture is connected through compatible supplier datasets. WHO EHC112 sections2.1/3.1 establish the identity and conventional feed route; the producer product page independently confirms the product identity (`who-tbp-1991`, `lanxess-tbp-product`).

Include only actual direct-esterification configurations supported by the site flow sheet. US3079419A, figure1, description and example3 document an HCl/alcohol separation configuration including xylene reflux/recovery; it supports route decomposition, not a recommended contemporary recipe (`stauffer-trialkyl-1963`). Washing/residual neutralisation and abatement are included when actually installed and recorded. The OFC and CWW BREFs supply chemical-sector stream characterisation and recovery/treatment principles, with their applicability qualifications (`jrc-ofc-2006`, `jrc-cww-2016`).

Exclude inorganic phosphoric acid or phosphate salts, other alkyl/aryl phosphate species, acidic mono-/diester products and their salts, formulated plasticisers/antifoams/hydraulic fluids/extractant solutions, other inorganic-acid esters, organophosphorus pesticides, reclamation of contaminated extraction solvent, sodium-alkoxide phosphorylation, and end-use metal extraction or nuclear processing. A different product-use label alone does not create another TBP identity or prove an exclusive manufacture route or grade. The reference is the whole accepted commercial liquid, including measured residual constituents permitted by its lot specification; it is not pure-TBP equivalent. No source provides a universal dose, solvent content, yield, purity, energy intensity or emission factor.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.tributyl-phosphate |
| classification_refs | CPC3.0:34180; proposed narrower scope, acceptance by controller |
| covered_products | Unformulated technical-grade tri-n-butyl phosphate from POCl3 and n-butanol |
| excluded_products | Salts, other ester species, formulated preparations and incompatible feed/recovery routes as defined in section1 |
| representative_product | Accepted liquid TBP CAS126-73-8 with measured assay/water/impurities; no assumed purity |
| production_route | POCl3 direct esterification with n-butanol; actual HCl separation, alcohol/solvent recovery, purification, finishing and abatement |
| market_state | Liquid chemical at factory gate, bulk or measured complete HDPE-drum delivery; downstream use outside boundary |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unformulated technical-grade liquid TBP of the declared lot specification |
| How much | 1 kg reference flow |
| How well | Actual lot acceptance for TBP identity, assay, residual water/alcohol/solvent, acid value and customer specification |
| How long or cycle | Factory-gate supply; declared campaign/production period, with storage losses measured |
| reference_flow_link | finished_tbp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tributyl phosphate `ed60d109-7ca7-424b-a634-1bf3ae4a8017` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS126-73-8; unformulated state; lot/SKU; actual TBP assay and method; water and residual alcohol/solvent; acid value/specification; net product mass excluding packaging; POCl3/direct-n-butanol route; supplier feed origin and concentration; purification/recycle; utility/provider bases; treatment/discharge/receiver; site/geography/period; co-product status and allocation |

Declare every required qualifier in dataset metadata, process notes or reference-flow comments; missing qualifiers make that data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted net as-supplied unformulated TBP, excluding packaging. Q is the measured accepted net product mass of the same campaign, collected by cp_product; assay is a qualifier, not a change of denominator. Q includes the accepted residual water, alcohol, solvent and other measured constituents; count each accepted factory-gate production lot once, reconcile dispatches and finished stocks, and exclude repeated internal reacceptance of the same returned material. |
| active_basis | all inventory rows | Mass | kg | Keep supplied chemical/solution mass, measured active mass and embedded water separate in the physical ledger. Product active TBP = product net mass times measured mass fraction; do not substitute this active mass for Q. |
| utility_basis | steam, natural_gas, nitrogen_input, tap_water, electricity | Native verified reference property | native unit | Preserve each native unit/property. Match meter, phase/grade and provider reference basis; conversions require traceable density, gas T/P/composition/Z or steam enthalpy with condensate basis. Unknown compatibility stays pending. |
| emission_basis | all elementary outputs | Mass or verified Volume | kg or m3 | Mass species/ion/element basis, fossil/biogenic origin, wet/dry gas conditions and compartment must agree. Never infer NO2-equivalent from a kg property or kg salt from kg chloride. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable delivered POCl3/n-butanol/actual auxiliaries and utilities at plant receipt, with opening inventories and supplier origins/assays recorded |
| starting_condition_role | Foreground collection starts at received chemicals; their production/transport remain linked upstream burdens |
| product_classification_scope | TBP subset of CPC34180 only; no applicability by source database classification or similar phosphate names |
| recursive_input_rule | Same-category purchased TBP or externally reprocessed returns require explicit supplier identity/state and nonzero upstream dataset; internal recycle remains an equal-quantity stage link, not a new reference output |
| upstream_dataset_requirement | Every external product/waste/service interface needs a compatible supplier/receiver dataset and quantity basis; record open linkage when unavailable |
| disclosure | Disclose actual chemistry, utilities, abatement, starting stocks, campaign coverage, formula/assay, loops, receivers, allocation, exclusions and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | tbp_manufacture | Retain receipt, reaction, actual HCl recovery, neutralisation/washing, phase separation, alcohol/xylene recovery, purification, storage/filling, cooling/vacuum and waste/gas/water treatment in the process record. Record the actual order and measured stage flows; no historical recipe/temperature/yield is imposed. | stauffer-trialkyl-1963; jrc-ofc-2006 |
| boundary_loops | all stage links | Keep unallocated total mass, C/H/O/N/P/Cl/Na elemental stocks and a separate molecular-water stage ledger. Each internal transfer has identical sending/receiving mass and composition; count external make-up, bleed and losses once. | jrc-ofc-2006; jrc-cww-2016 |
| boundary_treatment | all emissions and wastes | Separate recovered product, off-site waste and direct residual release. A liquor sent off-site carries its measured waste composition and receiver treatment burdens, not an immediate freshwater elementary release. Include plant boiler/oxidiser/biological-treatment emissions when present, without duplicating purchased utility generation. | jrc-ofc-2006; jrc-cww-2016 |
| boundary_completeness | all inventory rows | The cards are an atomic baseline, not permission to omit actual exchanges. Extend the dataset with a separately named, measured and verified row for every additional actual auxiliary, coolant/refrigerant, packaging component, salt, organic species, waste, emission or destination; an unresolved identity is not zero. Document absence and cut-offs with measured relevance. | jrc-cww-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tbp_manufacture | TBP manufacture and delivery | required | Declared actual direct-esterification route; abatement/packaging branches as recorded | foreground production | finished_tbp |

Receipt/stocks → n-butanol/POCl3 reaction → actual HCl separation and alcohol/xylene recovery → actual residual-acid neutralisation/washing and phase separation → purification/finishing → lot acceptance/storage/delivery. Vents, washing liquor, bottoms and other actual residues connect to their treatment/receiving branches in the actual site order; retain separate stage meters, samples and equal-quantity internal links. The aggregate foreground unit has one final reference output; internal crude/purified ester is not another factory-gate reference product.

### Process: TBP manufacture and delivery (`tbp_manufacture`)

#### Inputs

##### Product flows

###### Oxo-route n-butanol (`butanol_oxo`)

Use only actual oxo-route n-butanol receipts; determine assay, water and fossil/biogenic carbon provenance. The available fermentation-restricted identity is excluded from this row.

- Selected flow: Oxo-route n-butanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Returned unformulated TBP liquid (`returned_tbp`)

Only an actual external return of unformulated TBP liquid accepted for rework within the declared route. Measure whole returned mass, TBP/water/alcohol/solvent/acid species, contamination, original lot, sender and upstream burden treatment; unknown grade or contamination cannot inherit the finished-product UUID. Internal rejects/rework remain equal-quantity stage links. Waste returns require their own concrete waste interface. Exclude repeat acceptance from Q.

- Selected flow: Returned unformulated TBP liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### 1-butanol (`butanol_fermentation`)

Alternative feed only when the supplier actually confirms fermentation and purity >99.5% as required by this identity. Do not infer the amount or renewable-carbon share from the record. Keep separate supplier lots from oxo-route feed.

- Selected flow: 1-butanol `0ae69116-c4a0-48cd-a6b3-bdbf7d02d5bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Phosphorus Oxychloride (`phosphorus_oxychloride`)

Measure delivered POCl3 and assay, including moisture and impurities; reconcile P and Cl before reaction. Purchased POCl3 production remains a nonzero supplier boundary.

- Selected flow: Phosphorus Oxychloride `fe311470-6969-4084-abe9-51d0d0fe335a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Sodium hydroxide solution, 30% (`sodium_hydroxide`)

Conditional on actual nominal 30% aqueous NaOH receipts for residual-acid washing or scrubbing. The native reference is whole supplied solution mass. Record actual NaOH assay, carrier water and all residual constituents; the nominal label does not establish a default water fraction. Embedded water is not counted again as purchased water. No default dose follows from 30%.

- Selected flow: Sodium hydroxide solution, 30% `7115909b-796c-4b3d-b40a-1a7c693d12d0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Sodium hydroxide solution (`naoh_other_solution`)

Alternative to the nominal 30% identity for actual other solution grades; collect supplier concentration, solution mass, active NaOH and carrier water. No known grade is silently relabelled.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Xylene (`xylene_input`)

Only for actual mixed-xylene stripping/reflux, CAS1330-20-7; distinguish make-up from gross circulation and quantify isomer/ethylbenzene composition. This is not pure p-xylene.

- Selected flow: Xylene `55dcefce-e5b7-492d-9f02-5bd5a70c94a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Nitrogen gas (`nitrogen_input`)

Conditional gaseous N2 for actual TBP inerting/headspace or equipment blanketing, with actual air-separation supplier origin, grade, phase and provider basis confirmed. The native at-plant inerting/headspace context and Mass/kg reference match this role; its bottling-use wording does not establish exclusive manufacture or grade. Measure gross external fresh gas mass by stage and reconcile internal transfers, retained gas and actual vents. Descriptive make-up/vent wording supplies no quantity or fraction. Volume-to-mass conversion needs actual T/P, composition and compressibility; no fixed density or unsupported reference normalization.

- Selected flow: Nitrogen gas `92233c86-8e75-441c-94de-03cc91bc7c10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Treated tap water (`tap_water`)

Meter treated supplied water for washing, HCl absorption, cooling make-up, boiler make-up and cleaning separately in stage records. Collect supplied volume in m3 and actual geography/provider. A geographically restricted water identity cannot serve an unverified site. Retain this concrete exchange without a UUID until the actual supply and reference-volume basis match; use measured density/composition for the mass ledger.

- Selected flow: Treated tap water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Alternating current (`electricity`)

Conditional on a verified China (CN) grid-average 1–35 kV consumer supply and actual provider; meter synthesis, cooling, vacuum, separation, filling and abatement. Preserve native Net calorific value/MJ and the verified kWh conversion; no electricity calorific-content assumption.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Steam (`steam`)

Use this identity only for actual delivered steam at 0.45 MPaG. Record temperature, pressure, dryness, metered kg, condensate return and supply/feedwater basis; reconcile enthalpy before linking a heat-based provider. Other pressure grades require a separately verified atomic identity.

- Selected flow: Steam `aefdb9e8-b74c-4d25-bbfa-c4a1ff59dcdc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### natural gas in the gaseous state (`natural_gas`)

Conditional on an on-site gas boiler or thermal oxidiser. Reference Volume/m3 requires meter T/P, dry/wet composition, Z and provider volume convention. Secondary Mass factors are not density. Do not count purchased steam generation again.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Activated carbon (`activated_carbon`)

Only when actual adsorption/decolourisation is installed; measure grade, origin, wet/dry mass and replacement, distinguish a purchased charge from regeneration. Generic identity does not fix wood/coal origin.

- Selected flow: Activated carbon `5cad53b5-252a-4e2f-8197-8be465707405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Empty HDPE drum (`hdpe_drum`)

Conditional packaged delivery; weigh the purchased complete drum SKU with its supplied closure, exclude product contents, and retain reuse cycles/cleaning records. Resin and generic packing are not the converted drum. When a provider delivers a complete container, its measured reference includes the supplied closure/components; do not add their manufacture again. A handling, cleaning, reconditioning or reuse service is a distinct burden with its own provider/reference unit and actual number of services or cycles, not the full-container mass. Preserve separately purchased actual components as atomic exchanges only when not included in the complete-container provider. Bulk delivery records absence.

- Selected flow: Empty HDPE drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tributyl phosphate (`finished_tbp`)

One accepted unformulated technical-grade liquid TBP output at the factory gate; exclude packaging. Measure net mass and lot assay/water/residual alcohol/acidity. Do not multiply physical product mass by a burden-allocation share.

- Selected flow: Tributyl phosphate `ed60d109-7ca7-424b-a634-1bf3ae4a8017`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Hydrochloric Acid (`recovered_hcl`)

Only a separately accepted aqueous HCl co-product actually delivered to a buyer; weigh solution and assay HCl, water and organic contamination. Unsold scrubber liquor is waste or an internal link. It is not gas-phase HCl or pure-acid mass.

- Selected flow: Hydrochloric Acid `a118a682-1600-4855-b959-c78777b75ee8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Recovered n-butanol distillate (`recovered_butanol`)

Only an actual externally delivered, accepted recovered distillate with measured water/HCl/xylene and buyer specification. Internal recycle is recorded in the stage ledger, not another exchange. The fermentation/purity-restricted feed identity is not suitable.

- Selected flow: Recovered n-butanol distillate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

##### Waste flows

###### High-concentration saline wastewater (`effluent_offsite`)

Only high-salinity aqueous liquor containing organics and sodium chloride, sent to an identified compatible receiver. Record wet mass, water, salts, P and specific organics. Do not apply its reference to dilute discharge or manganese-slag wash water, and do not treat a bioenergy description as renewable chemical carbon.

- Selected flow: High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### TBP distillation bottoms (`distillation_bottoms`)

One sampled organic residue stream from TBP purification; measure TBP, acid phosphate species, water and other organics, classification, receiver and treatment. Isobutyl-acetate residue and phosphorous-acid waste are rejected identities.

- Selected flow: TBP distillation bottoms
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### spent activated carbon (`spent_carbon`)

Conditional spent adsorbent with measured TBP/solvent load, water and receiver; count disposal or external regeneration once and trace return. Adsorbed material is not also an air emission.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Sludge (`sludge`)

Conditional dewatered chemical-treatment sludge; record origin, dry solids, moisture, phosphorus, salts, organics and actual receiving treatment. Generic sludge identity provides neither composition nor default moisture.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Sludge (`sludge_bio`)

Separate only when biological treatment produces a distinct collected sludge stream. Preserve measured biomass/organic content and water; do not repeat chemical sludge or circulating return sludge.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Contaminated discarded HDPE drum (`contaminated_drum`)

Conditional failed/retired plant drum; weigh polymer and retained chemical separately in the physical ledger and identify receiver. Do not assume hazardous-waste incineration or link virgin polymer resin.

- Selected flow: Contaminated discarded HDPE drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

##### Elementary flows

###### hydrogen chloride (`hcl_air`)

Net gaseous HCl escaping after recovery/scrubbing; distinguish gas from aqueous acid and condensate, include starts/stops and leaks. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### butanol (`butanol_air`)

Net n-butanol CAS71-36-3 released by tanks, transfers, reaction, vacuum and finishing; sample the actual species, not total VOC. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: butanol `d86b9e88-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### tributyl phosphate (`tbp_air`)

Net TBP vapour/aerosol at the plant outlet, CAS126-73-8; particulate mass carrying TBP must not duplicate the same chemical mass in the physical ledger. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: tributyl phosphate `5663ffe1-7b3a-41d7-9af3-d0f6f095990a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### xylene (all isomers) (`xylene_air`)

Only actual mixed-xylene branch; net all-isomer CAS1330-20-7 emissions after recovery. Do not add isomer measurements again to their sum. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### carbon dioxide (fossil) (`co2_fossil`)

Only actual fossil carbon oxidation in on-site boiler, oxidiser or treatment; reconcile gas fuel and chemical carbon. This is a real emission, not a correction flow. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### carbon monoxide (fossil) (`co_fossil`)

Actual incomplete oxidation of fossil carbon; independently quantify CO, without substituting CO2. If biogenic CO occurs, add its separately verified atomic flow. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Nitrogen oxides (`nox_air`)

Conditional measured NOx. Identity Mass/kg alone does not establish NO2-equivalent: require monitor, inventory and LCIA quantity-definition agreement before use; otherwise leave quantity linkage pending. Exclude N2O; never also add the same NO/NO2 speciation. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### nitrous oxide (`n2o_air`)

Separate actual N2O from relevant combustion or biological treatment; absence requires a documented route/measurement assessment, not subtraction from NOx. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### methane (fossil) (`ch4_fossil`)

Actual fossil methane fuel leaks or combustion slip; record monitored species and origin, not the mass of all natural gas. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### sulfur dioxide (`so2_air`)

Only actual SO2 at the outlet of the relevant fuel/oxidation branch; distinguish sulphur oxides sum and measured SO2; no generic factor or assumed sulphur content. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### particles (PM2.5) (`pm25_air`)

Actual outlet PM2.5 when handling carbon/sludge or combustion generates dust; count the <=2.5 micrometre class once. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### particles (PM2.5 - PM10) (`pm_coarse_air`)

Disjoint outlet fraction >2.5 to <=10 micrometres; derive from compatible size-resolved measurements, never add cumulative PM10 to PM2.5. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### particles (> PM10) (`pm_large_air`)

Actual outlet particles >10 micrometres only; collected dust belongs to its actual waste/reuse stream, not this atmospheric exchange. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### carbon dioxide (biogenic) (`co2_biogenic`)

Retain actual biogenic CO2 from verified biogenic feed/adsorbent or biological treatment; separate its carbon origin from fossil CO2 even if a climate reporting convention assigns zero. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### dinitrogen (`nitrogen_air`)

Net N2 from measured purge/blanketing to atmosphere; reconcile actual inlet gas and residual inventories, not total NOx or all vent mass. Compartment: outdoor air, unspecified; use a verified specific subcompartment if known.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### water vapour (`water_vapour`)

Actual net evaporation from cooling, venting and combustion on a consistent inlet/outlet water basis; CAS7732-18-5, emissions to outdoor air, unspecified. Separate inlet humidity, actual molecular water formed/consumed, condensate and outlet vapour; an atmospheric moisture resource is not an emission identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### tributyl phosphate (`tbp_water`)

Actual unchanged TBP in final treated discharge, not the amount in untreated liquor sent off-site. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: tributyl phosphate `8fb8af9a-ca0d-48af-b5b1-a3b347990734`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### butanol (`butanol_water`)

Actual n-butanol CAS71-36-3 in final discharge; 2-butanol and other alcohols are excluded identities. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: butanol `08a91e70-3ddc-11dd-90e6-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### xylene (all isomers) (`xylene_water`)

Only actual xylene branch; final all-isomer concentration and water load. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad96-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### dibutyl hydrogen phosphate (`dibutyl_water`)

Only analytical confirmation of dibutyl hydrogen phosphate CAS107-66-4 in final discharge; the similarly translated dibutyl phosphonic ester is a different species. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: dibutyl hydrogen phosphate `a37745d9-127a-4dcd-acc1-aaaf16addb30`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### chloride (`chloride_water`)

Dissolved chloride CAS16887-00-6 as kg Cl-, including neutralisation/scrubber salt and unreacted-feed hydrolysis; not kg NaCl or organic chlorinated solvents. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: chloride `08a91e70-3ddc-11dd-9508-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Sodium, ion (`sodium_water`)

Dissolved sodium ion CAS17341-25-2 as kg Na+, with solution-derived sodium tracked through residual alkalinity, salts and sludge; not sodium metal. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: Sodium, ion `6a3f413e-8aab-4c58-93b0-1f51c9714adb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### phosphorus, total (`total_p_water`)

Total-P analysis closes the phosphorus ledger. Where named P species are inventoried, this exchange can carry only measured remaining P after subtraction of their kg-P equivalents, with the residual composition and LCIA compatibility reviewed; otherwise quantity linkage stays pending. Never sum total P and all its constituent P again or hide toxic organophosphates in the sum. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Water (`water_discharge`)

Actual liquid water carrier leaving to fresh water, with measured flow and density/composition if converted; not a resource withdrawal and not all wastewater mass including solutes. Only direct release to fresh water after on-site treatment; other destinations need their exact atomic identities.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

###### Butyl dihydrogen phosphate to fresh water (`monobutyl_water`)

Only when analytical speciation confirms this particular monoester in final discharge. Inorganic sodium/calcium phosphates and an unspecified butyl-phosphate record are not substitutes. Quantify its phosphorus separately.

- Selected flow: Butyl dihydrogen phosphate to fresh water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured net exchange through this row protocol and divide by accepted net mass Q from cp_product for the same campaign.  Document conditional absence; unknown identity/quantity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ofc-2006`; `jrc-cww-2016`

## 7. Allocation and Co-product Handling

Declare the study goal and attributional modelling context before using the following shared-burden rules. System expansion/substitution requires a separately justified scenario consistent with the study goal; it is not interchangeable with allocation or an automatic recovered-product credit (`jrc-ilcd-2010`).

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | environmental burdens | Avoid shared-burden allocation through measured stage subdivision where feasible; retain separate common utilities and treatment records. Identify actual independently accepted HCl/recovered alcohol co-products before any allocation. | jrc-ilcd-2010 |
| allocation_basis | remaining shared burdens | Use a documented physical causal relationship where supported; otherwise declare a justified alternative such as contemporaneous net-sales economic shares with source, period and sensitivity. Do not apply a fixed default share or assume every byproduct sale. | jrc-ilcd-2010 |
| allocation_physical | all physical outputs | Allocation changes attributed burdens, never measured product, co-product, waste or emission quantities in the unallocated process/total-mass/C/H/O/N/P/Cl/Na/water ledger. Keep physical and attributed-burden accounts separately reconciled. Avoid crediting internal recycle or waste twice; any substitution must disclose its expanded-system basis and remain an explicit separate scenario. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | tbp_manufacture | reference output and accepted co-products | acceptance and weighing records | lot/SKU; route; tare/gross/net mass; accepted TBP Q; assay method; water; n-butanol/xylene; acidity; rejection/return stocks; HCl/co-product mass and assay; buyer | Use calibrated tank/scale receipts and lot acceptance; quantify TBP and residual organic species with a validated matrix-specific GC method and water/acidity tests. WHO environmental GC methods inform analyte identity/blank control, not a product purity limit. Aggregation detail: Sum whole accepted commercial net TBP Q without packaging, including measured allowed residual constituents; count production acceptance once and reconcile dispatch/finished stocks/returns; record co-product masses unallocated; normalize exchanges per 1 kg reference flow | kg | every lot and each dispatch | complete declared campaign with representative starts/stops | same site and actual suppliers/receivers | per 1 kg reference flow | scale calibration; lab validation/blanks/recovery; buyer acceptance |
| cp_material | tbp_manufacture | atomic external feed and packaging | receipt, assay and stock records | supplier/grade/CAS; source route/carbon origin; solution mass; active assay; water; solvent/isomers; inventory changes; drum SKU/net mass; returns | Weigh each actual material lot and reconcile opening/closing tanks; use supplier certificates verified by site sampling where material; retain supplied solution and active/carrier ledgers separately. Aggregation detail: External charged amount corrected for stocks/returns per 1 kg reference flow; internal circulation separately logged | kg | each receipt/charge and stock reconciliation | same campaign as cp_product | same site and actual suppliers/receivers | per 1 kg reference flow | purchase/assay; calibrated meters; lot traceability |
| cp_utilities | tbp_manufacture | one atomic utility at a time | meter and supplier records | stage/time; kWh/MJ; water m3/density; gas m3/T/P/Z/dry-wet composition; nitrogen mass; steam kg/0.45MPaG/T/dryness; condensate kg/T; feedwater and provider basis | Read calibrated meters at receipt and stage boundaries; reconcile common-meter allocation with timed operation. Record native reference bases and independently establish each provider/conversion compatibility. Aggregation detail: Measured attributable utility in its native unit per 1 kg reference flow | native unit | continuous or each batch/meter interval | complete same campaign including idle/start-up and treatment | same site and actual suppliers/receivers | per 1 kg reference flow | calibration; logs; supplier basis; gas analysis; enthalpy records |
| cp_waste | tbp_manufacture | one actual waste stream and receiver | weighing, composition and consignment | stream/origin; wet mass; dry mass/moisture; TBP/acid ester/solvent/Cl/Na/P/C; contaminants; receiver; treatment; return | Sample each separately collected waste, weigh transfers and confirm receiving acceptance/treatment; distinguish chemical sludge, biological sludge, spent carbon and organic bottoms; trace captured material and disposal. Aggregation detail: Net external waste amount per 1 kg reference flow; retain unallocated physical composition | kg | each transfer and representative composition samples | same campaign with waste storage stocks | same site and actual suppliers/receivers | per 1 kg reference flow | manifest/receiver receipt; representative tests; calibration |
| cp_air | tbp_manufacture | one emitted species or disjoint particle size | outlet monitoring and leak records | species/CAS/carbon origin; source/outlet; concentration; gas flow; T/P/O2/wet-dry basis; time; abatement; leak survey; PM sizes; detection limits; NOx convention | Capture batch emission profiles and starts/stops, including vents and diffuse losses; pair flow and analyte measurements on the same reference conditions, using matrix-validated methods. Verify fuel/oxidiser records separately; do not transfer BREF levels or patent values as factors. Aggregation detail: Integrated actual net species/particle-class load per 1 kg reference flow; no cumulative size or species-sum duplication | kg | time-resolved across operations plus periodic validated leak survey | complete campaign and operational states | same site and actual suppliers/receivers | per 1 kg reference flow | lab method/blanks; flow calibration; matched time series; uncertainty |
| cp_water | tbp_manufacture | each final direct water release and analyte | discharge flow and laboratory records | outlet/destination; flow; water content/density; pH/T/conductivity; Cl-/Na+; totalP; specific TBP/mono-/diester/alcohol/solvent; TOC/COD; solids; detection limits | Identify final outlet and pretreatment nodes; collect flow-proportional samples representative of batch peaks. Validate specific organic, ion and total-P analyses with digestion/speciation definitions and blanks; wastewater sent off-site stays a separate waste interface. Aggregation detail: Actual final species load and liquid-water quantity per 1 kg reference flow; totalP analytical ledger reconciled separately | kg or verified m3 | each discharge interval and representative batch composite | same campaign; temporal sampling reflects variable emissions | same site and actual suppliers/receivers | per 1 kg reference flow | methods/standards; blanks/recoveries; flow meter; receiver/outlet coordinates |
| cp_balance | tbp_manufacture | stage and whole-plant physical balance | stage flow-sheet and elemental/water reconciliation | reaction/stage; inputs/outputs; assay; internal-link IDs; C/H/O/N/P/Cl/Na fractions; molecular water; inlet wet air and humidity; blanketing/purge gas; combustion oxygen and vent carrier; opening/closing stocks; recovery; salt/residual alkali; energy/enthalpy records; uncertainties | Measure stage streams, stocks and external interfaces; use actual composition and reaction/speciation to reconcile total mass and C by origin, H, O, N, P, Cl and Na stocks separately from molecular-water formation/consumption; include measured wet-air inputs, humidity, purge/vent carrier and combustion oxygen at the same stage boundary, recording each actual exchange atomically in the dataset; reconcile energy separately using measured electrical work, fuel energy, reaction/sensible/latent enthalpy, steam/condensate, heat removal, losses and energy-stock change; reconcile both ends of every internal link before any environmental burden allocation. Aggregation detail: Unallocated physical ledger and residuals, plus attributable exchanges per 1 kg reference flow | kg | each batch and reconciled period | same complete campaign | same site and actual suppliers/receivers | per 1 kg reference flow | flow sheet; calibrated stock measures; composition; uncertainty and unexplained residual register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_basis | all inventory rows | a_i = A_i / Q; A_i is the measured stock-corrected external exchange for the declared campaign in its native unit; Q is accepted net as-supplied TBP mass in kg. Reference output is 1 kg. | A_i; Q; cp_product; relevant row protocol | a_i |  |
| assay_ledger | solution and product composition | Active mass = supplied net mass × measured active mass fraction; carrier water and other constituents come from actual composition. Sum constituent masses without adding them as additional duplicate purchased exchanges. | cp_material; cp_product; measured fractions | active/carrier composition ledger |  |
| reaction_ledger | reaction and neutralisation | Ideal substitution identity: POCl3 + 3 C4H10O -> C12H27O4P + 3 HCl. It produces no esterification water. Actual neutralisation HCl + NaOH -> NaCl + H2O generates water; POCl3/ester hydrolysis consumes water and must follow measured species. These equations check atom accounting, not actual feed ratios/yields; record residual alkali, acid, salts and incomplete esters. | cp_balance; cp_material; cp_product; actual speciation | reaction/neutralisation P/C/water/Cl/Na ledger | who-tbp-1991; stauffer-trialkyl-1963 |
| physical_balance | each stage and plant | For mass and each conserved element E: opening stock + external input + internal received = closing stock + external output + internal sent + documented residual. Internal sent/received cancel only when both ends match. Only the molecular-water species ledger adds actual reaction formation and subtracts consumption; total mass and conserved elements have no reaction-generation term. Include water in solutions/steam, inlet humidity, wet air, condensate, product/waste moisture and outlet vapour, and include measured purge/vent carrier and combustion oxygen. Reconcile energy with electrical work, fuel calorific basis, reaction/sensible/latent enthalpy, steam/condensate, cooling, losses and stock changes in a separate energy ledger; kg and MJ are not additive. No guessed closure factor. | cp_balance; all actual composition/stock records | unallocated total-mass/C/H/O/N/P/Cl/Na and separate molecular-water/energy residuals | jrc-ofc-2006; jrc-cww-2016; jrc-ilcd-2010 |
| emission_load | all elementary outputs | Load = sum of paired concentration × compatible gas/water flow × duration, converted with recorded units; apply actual inlet correction where appropriate. Distinguish wet/dry and reference T/P/O2; non-detects keep bounds and cannot become automatic zero. Independently reconcile diffuse losses. | cp_air; cp_water; calibration and time series | actual net species load | jrc-ofc-2006; jrc-cww-2016 |
| phosphorus_partition | total_p_water and named P species | Keep totalP as an analytical closure value. Residual P = measured totalP minus P equivalents of individually quantified species in the same outlet/time window. Use actual stoichiometric composition for equivalents; forbid negative residuals or duplicate totalP/species loads. Residual composition/LCIA basis remains pending until substantiated. | cp_water; actual species composition | disjoint named-P and residual-P accounting | jrc-cww-2016 |
| yield_recovery | reaction and separation | Derive actual yield from accepted TBP assay mass and actual limiting-reactant/speciation records, accounting for recycle stocks and co-products; derive recovery from measured sent/recovered/bleed quantities. No patent laboratory yield or solvent ratio is imported. | cp_material; cp_product; cp_balance | site-specific yield and recovery checks |  |
| burden_account | allocated environmental burdens | Apply the justified allocation shares only to the remaining shared burdens after subdivision. Preserve all physical outputs and emissions in the unallocated ledger and retain the separate attributed accounts and reconciliation. | measured stages; justified shares; physical ledger | attributed burden accounts | jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | all inventory rows | Trace each row identity, measurement, unit/basis, supplier/receiver and required qualifiers; preserve every open linkage | row records and original calibration/analysis |
| dq_coverage | tbp_manufacture | Same period/product mix; cover starts/stops, downtime, returns, waste stocks and material peaks, and disclose representativeness gaps | production/meter time series |
| dq_uncertainty | balances and emissions | Review residuals using actual method detection limits, sampling error, calibration and composition uncertainty; no invented survey coverage, universal tolerance or unmeasured zero emissions | uncertainty and residual investigation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Require actual TBP CAS126-73-8, direct POCl3/n-butanol route, unformulated market state and complete lot qualifiers. Similar phosphate/salt labels and source classification do not establish identity. | who-tbp-1991; lanxess-tbp-product |
| validate_measurement | all inventory rows | Require one finished reference output at 1 kg, the same Q denominator in inventory and collection, and native reference-property/unit compatibility. Missing gas/steam/concentration/provider basis remains explicitly incomplete. |  |
| validate_balance | all stages | Reconcile total mass, C by origin, H, O, N, P, Cl and Na stocks, molecular-water formation/consumption, wet-air/purge/vent carriers, neutralisation salts/residuals and stock changes before allocation; reconcile energy separately. Investigate residuals against measured uncertainty; no universal tolerance, invented yield or balancing emission. | jrc-ofc-2006; jrc-cww-2016; jrc-ilcd-2010 |
| validate_emissions | elementary outputs | Match species/CAS, medium/submedium and native unit, carbon origin and monitoring/LCIA definitions; NOx excludes N2O. Disjoint PM fractions, individual VOCs and named-P/residualP must not duplicate cumulative sums. Keep actual biogenic CO2. | jrc-cww-2016 |
| validate_disposition | products/wastes/releases | Require accepted co-product delivery, actual receiver/treatment and final discharge identification. No default sale, avoided-product credit or wastewater-as-release. Unknown UUIDs/background providers remain open; conditionally absent rows need evidence. | jrc-ofc-2006; jrc-cww-2016 |
| validate_completion | completed dataset | Retain row-level quantity sources, analytical uncertainty, coverage and unreviewed scope. Extend every additional actual exchange atomically. A complete PCR method does not certify a particular dataset, regulatory compliance or independent methodology review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual data completion and review |
| downstream_use | Factory-gate upstream TBP input with matched unformulated grade, route, assay and quantity basis |
| allowed_use | Documented POCl3/n-butanol direct-esterification TBP manufacture; declared site/period/grade and compatible utility/receiver scenarios |
| excluded_use | Formulated product inventories; extraction service; pure-active-mass substitution without conversion; other esters/salts or incompatible routes; default recipe/yield/energy/emissions |
| required_metadata | Product/reference qualifiers; supplier/receiver/provider links; foreground starting condition; complete stage flow sheet; site/period; grade/assay; Q; stocks/loops; total-mass/C/H/O/N/P/Cl/Na stocks and separate molecular-water/energy balances; allocation; method/version |
| required_quality_disclosure | Measurement and analytical method/uncertainty; data coverage; open UUID/provider/quantity bases; actual cut-offs; fossil/biogenic origin; alternative/conditional rows; review scope |
| update_trigger | Changed SKU/assay/feed source/route, utilities/pressure/provider, purification/neutralisation, abatement/receiver, co-product status, measured performance or new verified identities/evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| who-tbp-1991 | official_guidance | WHO/IPCS Environmental Health Criteria112, Tributyl phosphate, 1991, sections2.1,2.4,3.1. https://www.inchem.org/documents/ehc/ehc/ehc112.htm | Species and conventional feed route; analytical method/blank considerations. Historical compilation; no present recipe, survey, purity/yield/density/dose default. |
| lanxess-tbp-product | literature | LANXESS Tributyl phosphate product information; CAS126-73-8, formula C12H27O4P, product identity. https://lanxess.com/en/products/products/t/tributyl-phosphate | Producer corroboration of commercial species identity only; protected SDS/TDS not acquired and no grade purity or delivery solvent default is claimed. |
| stauffer-trialkyl-1963 | literature | Stauffer Chemical Co., US3079419A, Process for the manufacture of trialkyl phosphates, 1963-02-26; figure1, description, example3 and claim8 (PDF1–3). https://patents.google.com/patent/US3079419A/en | Original historical POCl3/alcohol/HCl and xylene recovery configuration. Case quantities, temperatures, ratios, apparatus and yields are not modern industry defaults. |
| jrc-ofc-2006 | official_guidance | European Commission, Organic Fine Chemicals BREF, August2006; sections5.1.2.1,5.1.2.5,5.2.1/Table5.1, printed375/378/380–381, PDF405/408/410–411. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/ofc_bref_0806.pdf | Chemical-sector recovery, salt-containing wash streams, physical balances and operation-resolved emissions; no TBP recipe or factor. Applicability of techniques varies by scale/configuration. |
| jrc-cww-2016 | official_guidance | European Commission, CWW BREF,2016; BAT2–5, printed543–544, PDF573–574. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf | Chemical reaction/stream inventories, salt/P/specific-organic characterisation and matched monitoring at treatment/final outlets; qualifiers and footnotes retained; no quantity default or current site compliance claim. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition 2010; sections7.4.2 (printed197/205; PDF217/225) and7.9.2–7.9.3 (printed255–264; PDF275–284). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Primary attributional-method guidance for composition/element/energy checks, subdivision and physical-causality then economic allocation; applied only after identifying actual co-functions and declaring the LCI modelling context. No TBP amount, default share, recipe or quantitative closure tolerance. |
