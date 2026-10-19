---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.insecticides
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Aqueous imidacloprid suspension concentrate formulation

## 1. Scope and Applicability

This PCR covers one supplied product: a nominal 600 g/L imidacloprid aqueous suspension concentrate (SC), made from acquired technical imidacloprid powder and the specific supplied additives below, at a formulation facility. High-speed wet shearing, sand milling, final thickening/antifoam adjustment, quality acceptance and actual filling/delivery form the foreground. The bounded architecture is Example 2 and paragraph [0006] of sinochem-imidacloprid-sc-2015. Each dataset represents one actual product, route and accepted supplied state, never all insecticides as a mixed reference flow.

Exclude active-ingredient chemical synthesis, upstream JM polymerisation, onsite hydrogel synthesis/preparation, oil dispersions, emulsifiable/soluble concentrates, granules, seed-treatment FS, insecticide combinations and treated articles. Exclude distribution after the formulation gate, tank dilution, spray water, application energy, efficacy, pest-control area, residues, field emissions and final-use packaging disposal. These need separate downstream models; no use rate or emission fraction is assumed.

UNSD CPC 3.0 identifies 34661 as Insecticides and separately lists 34666 and 34669; the published explanatory entries contain no further text. WCO HS 2022 Chapter 38 Subheading Notes 1 and 2 specify substances for 3808.52/.59 and 3808.61-.69; imidacloprid is not listed. A sole-imidacloprid insecticidal preparation is therefore a candidate for 34661, subject to its actual complete composition and classification review, not to the word hazardous on an SDS. Products containing a listed substance, other uses, or other preparations require reassessment. This PCR does not establish a positive mapping.

The patent is a laboratory formulation disclosure, not a current factory survey or a guaranteed commercial recipe. Its gram amounts, nominal 47% active content and 600 g/L designation do not establish measured density, yield, input intensity or efficacy for another product. FAO 582/SC (2013) independently describes fine technical imidacloprid in an aqueous phase with formulants; its manufacturer/equivalence scope and disclaimer are retained. It supplies physical-state context only, not automatic FAO compliance for this patent product. Changqing-imidacloprid-sc-2014 describes a different 350 g/L calixarene route and does not supply this recipe.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.insecticides |
| classification_refs | CPC 3.0 34661 Insecticides; narrower formulation scope |
| covered_products | One actual sole-active imidacloprid aqueous SC of nominal 600 g/L from acquired technical powder, JM dispersant solution and Example-2 additive identities |
| excluded_products | Other active substances or co-actives; other formulation types/concentrations; technical-active synthesis; onsite JM or hydrogel production; downstream pesticide use |
| representative_product | 600 g/L nominal imidacloprid SC; actual mass fraction, density, complete supplied formulation and release specification declared |
| production_route | Acquired ingredients → aqueous high-shear preblend → technical powder addition → sand milling → post-mill hydrogel/antifoam adjustment → acceptance → actual packaging/delivery |
| market_state | Accepted net wet formulation ready for supply at formulation-facility gate; actual site/country, SKU, batch, assay, water/solvent/carrier and packaging disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply of the declared aqueous imidacloprid SC |
| How much | 1 kg net accepted supplied wet formulation |
| How well | Documented batch release against the actual registered/product specification: active identity and assay, homogeneity, particle distribution, suspension stability, viscosity, pH and relevant impurities; no claim of pest-control equivalence |
| How long or cycle | One matched manufacturing/acceptance period; storage stability is declared product quality, not a treatment lifetime |
| reference_flow_link | finished_sc |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pesticide `23a65bba-3eb5-406c-ad26-6841bd151f9c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sole active imidacloprid CAS 138261-41-3; aqueous SC; nominal 600 g/L and measured g/kg; measured density with temperature and method; complete as-supplied ingredient identities and assay/water/solvent/carrier; JM solution supply state; purchased hydrogel solids; release tests; manufacturer/site/country; SKU and batch; reporting period and accepted-output cohort; packaging components and net/gross mass; upstream provider geography/technology; native generic identity limits and classification debt |

The native reference record is deliberately generic; it permits a substance or mixture used against pests and has no fixed grade, CAS, formulation, route or supply geography. It does not make the reference an aggregate: this PCR binds it to one qualified wet SC. The native 35499 classification is inconsistent with the specific insecticidal preparation context and remains disclosed debt. The record carries only Mass, reference internal ID 0 and meanValue 1. The verified mass property points to the mass unit group and its reference unit kg. No value is a formulation-density conversion. Missing any required product qualifier makes a dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net wet formulation mass, excluding all packaging. All inventory rows use per 1 kg reference flow and the same positive accepted output cohort measured by cp_acceptance. |
| active_carrier_basis | technical powder and formulation | Mass and actual assay | kg | Keep whole technical/formulation mass distinct from active mass and water/solvent/carrier subledgers. For concentration in g/L use independently measured density at matching temperature to obtain g/kg; never assume 1 L equals 1 kg or infer density from a patent designation. |
| raw_units | all inventory rows | Original meter property | original units | Convert raw units before division by accepted mass. Integrate a measured rate over duration only once; an already integrated volume or meter total receives no extra time factor. Electricity kWh remains kWh unless an explicit documented conversion is requested. |

## 5. System Boundary
### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Acquired technical imidacloprid powder and whole supplied additives, water, electricity and actual packaging at formulation site |
| starting_condition_role | Foreground is formulation, wet milling and delivery preparation; upstream active and additive manufacture are linked datasets |
| product_classification_scope | The specific insecticidal aqueous preparation, not every pesticide or active substance; complete composition checked against HS Chapter 38 notes |
| recursive_input_rule | External acquired SC or returned sold formulation is a distinct whole input with prior burdens and acceptance history; never recursively create the reference output or double count internally returned slurry |
| upstream_dataset_requirement | Match the actual supplied technical grade, complete JM/hydrogel/antifoam and other inputs to independent providers; generic native reference is neither a provider nor a production mix for the site |
| disclosure | Declare actual formulation, outsourced operations, site/geography, utility and waste-treatment boundaries, packaging, allocation, gaps and source applicability; patent applicant location is not dataset geography |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | formulation | Include receipt/issue, preblend, technical charging, high-shear dispersion, sand milling, post-mill thickening, all attributable auxiliaries, cleaning, QC and actual filling; preserve independent stage records. No active synthesis or JM polymerisation is moved into this plant. | sinochem-imidacloprid-sc-2015 |
| boundary_use | supply and downstream | Count the complete supplied wet formulation and actual packaging manufacture/filling burden to gate; keep field dilution/application and post-use packaging disposal in separate downstream models. | sinochem-imidacloprid-sc-2015 |
| boundary_composition | whole supplied inputs | Inventory complete acquired wet additives once. Measure constituent subledgers without creating extra purchases of their polymer, active, solvent or water. Add a separate atomic exchange for every real additional ingredient/utility/waste/species; absence requires evidence, not a blank amount. | sinochem-imidacloprid-sc-2015 |

## 6. Process Inventory Structure
### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sc_formulation | Aqueous formulation, milling, acceptance and filling | required | Selected acquired-ingredient SC route only | One foreground unit; stage, owner and meter records remain separate | 1 kg accepted net wet SC |

### Process: Aqueous formulation, milling, acceptance and filling (`sc_formulation`)

#### Inputs

##### Product flows

###### Technical imidacloprid powder (`technical_imidacloprid`)

Record the entire acquired technical powder at its measured assay, impurities and moisture, not a second purchase of pure active ingredient. Declare CAS 138261-41-3, technical powder form and measured supplied grade; supplier-specific identity remains to be matched.

- Selected flow: Technical imidacloprid powder
- Flow property / unit: Mass / kg
- Amount rule: Use cp_materials to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: sinochem-imidacloprid-sc-2015

###### JM copolymer dispersant solution, as supplied (`jm_dispersant`)

One complete supplied JM dispersant from the selected patent: copolymer of methallyl polyethylene glycol ether, hydroxyethyl methacrylate, styrene and sulfonated styrene. Record actual solids, solvent identity and water separately as constituent subledgers. The patent does not identify the synthesis solvent; do not assume water, density or a monomer-to-product yield. Its upstream polymerisation is outside this formulation plant.

- Selected flow: JM copolymer dispersant solution, as supplied
- Flow property / unit: Mass / kg
- Amount rule: Use cp_materials to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: sinochem-imidacloprid-sc-2015

###### Sodium dodecylbenzenesulfonate, as supplied (`sdbs`)

Record the actual supplied wetting agent, concentration and carrier; constituent active and carrier masses are not additional procurement.

- Selected flow: Sodium dodecylbenzenesulfonate, as supplied
- Flow property / unit: Mass / kg
- Amount rule: Use cp_materials to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: sinochem-imidacloprid-sc-2015

###### Xanthan gum aqueous hydrogel, 4% nominal (`xanthan_hydrogel`)

Purchased complete hydrogel charged after milling in the selected route. Verify actual solids and water. Do not procure its carrier water again; onsite hydrogel preparation needs separately acquired gum/water rows and a revised declared route.

- Selected flow: Xanthan gum aqueous hydrogel, 4% nominal
- Flow property / unit: Mass / kg
- Amount rule: Use cp_materials to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: sinochem-imidacloprid-sc-2015

###### Magnesium aluminium silicate (`magnesium_aluminium_silicate`)

Record supplied rheology additive mass and grade, including any supplied moisture; do not substitute a different silicate or generic mineral filler.

- Selected flow: Magnesium aluminium silicate
- Flow property / unit: Mass / kg
- Amount rule: Use cp_materials to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: sinochem-imidacloprid-sc-2015

###### Ethylene glycol (`ethylene_glycol`)

Record actual antifreeze input including declared purity; no default dosage or volatilisation fraction is prescribed.

- Selected flow: Ethylene glycol
- Flow property / unit: Mass / kg
- Amount rule: Use cp_materials to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: sinochem-imidacloprid-sc-2015

###### Silicone antifoam formulation, as supplied (`silicone_antifoam`)

Record one complete supplied antifoam product added during processing. Retain formulation, carrier and actual batch issue; do not count silicone and carrier as separate purchases.

- Selected flow: Silicone antifoam formulation, as supplied
- Flow property / unit: Mass / kg
- Amount rule: Use cp_materials to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: sinochem-imidacloprid-sc-2015

###### Water for aqueous formulation (`formulation_water`)

Record separately supplied water actually charged into the formulation; exclude water already inside technical material, JM, wetting agent, hydrogel or antifoam. Record actual treatment/supply route without assuming the patent water is deionized.

- Selected flow: Water for aqueous formulation
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: sinochem-imidacloprid-sc-2015

###### Electricity, low voltage (`electricity`)

Submeter shearing, sand milling, pumps, cooling auxiliaries, filling, cleaning and attributable idle/failed operation. Include purchased cooling service only through separately declared actual atomic exchanges; a closed cooling loop is not a water consumption equal to circulation.

- Selected flow: Electricity, low voltage
- Flow property / unit: Electric energy / kWh
- Amount rule: Use cp_power to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_power`
- Sources: sinochem-imidacloprid-sc-2015

###### Tap water for equipment cleaning (`cleaning_water`)

Conditional on actual water cleaning; identify first-rinse recovery to this same formulation versus external wastewater. It is distinct from formulation water and closed-loop circulation.

- Selected flow: Tap water for equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

###### High-density polyethylene bottle (`hdpe_bottle`)

Conditional on this actual delivery component. Record entire purchased bottle by material mass and actual filling losses; packaging mass is outside net formulation reference mass.

- Selected flow: High-density polyethylene bottle
- Flow property / unit: Mass / kg
- Amount rule: Use cp_packaging to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources:

###### Polypropylene screw closure (`pp_closure`)

Conditional on the actual closure; distinguish any separately supplied liner with an additional atomic row. Do not infer closure resin from bottle resin.

- Selected flow: Polypropylene screw closure
- Flow property / unit: Mass / kg
- Amount rule: Use cp_packaging to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources:

###### Printed paper label (`paper_label`)

Conditional on actual paper labels. Record entire acquired printed label; separately purchased adhesive requires its own row.

- Selected flow: Printed paper label
- Flow property / unit: Mass / kg
- Amount rule: Use cp_packaging to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated fibreboard carton (`corrugated_carton`)

Conditional on actual secondary packaging; record carton mass, rejected packs and reuse treatment. Bulk or returnable delivery must declare its real components instead.

- Selected flow: Corrugated fibreboard carton
- Flow property / unit: Mass / kg
- Amount rule: Use cp_packaging to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pesticide (`finished_sc`)

One qualified output: the selected 600 g/L nominal imidacloprid aqueous suspension concentrate, not a portfolio of pesticides. Native Product flow name Pesticide / 农药 describes a pest-control substance or mixture, chemical or biological; no CAS, concentration, formulation, treatment route, grade, mix/location component or locationOfSupply is specified. Its native classification 35499 is a disclosed classification debt, not evidence for 34661 or a residual-identity exclusion. Its only flow property is reference Mass with meanValue 1; this is not density. This broad identity supplies no recipe, supplier, geography, efficacy or background intensity; retain all specific qualifiers and select actual upstream providers independently.

- Selected flow: Pesticide `23a65bba-3eb5-406c-ad26-6841bd151f9c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources: sinochem-imidacloprid-sc-2015

##### Waste flows

###### Imidacloprid-containing aqueous cleaning wastewater (`formulation_wastewater`)

Weigh or integrate actual external wastewater with density at declared conditions; record imidacloprid, glycol and other assayed constituents as subledgers, receiver and treatment boundary. Recovered rinse used internally is an internal transfer, not waste output plus new input.

- Selected flow: Imidacloprid-containing aqueous cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Rejected imidacloprid aqueous suspension concentrate (`offspec_sc`)

Record formulation actually sent for external treatment/disposal, including abandoned runs; internal rework stays in WIP with carried burdens and is not a saleable co-product.

- Selected flow: Rejected imidacloprid aqueous suspension concentrate
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Imidacloprid-contaminated filter cloth (`contaminated_filter`)

Conditional on actual disposable filtration or captured solids: retain wet mass, cloth material, entrained formulation and receiver. Additional distinct maintenance or packaging waste requires its own atomic exchange.

- Selected flow: Imidacloprid-contaminated filter cloth
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Imidacloprid, air (`imidacloprid_air`)

Only actual quantified post-control release to air. Captured dust returned to production is internal; captured dust sent to disposal is a specific waste row. Detection limits and unmeasured release remain explicit; no emission factor or zero is invented.

- Selected flow: Imidacloprid, air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Water vapour, air (`water_vapour`)

Include independently determined evaporative water loss where material. No reaction water is generated by the selected mechanical mixing/milling route. A physical closure residual cannot establish this release or chemical degradation.

- Selected flow: Water vapour, air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air to retain the complete matched raw-period numerator, including assigned failed-run and carried WIP burdens; divide the attributable accepted-cohort quantity by its unique positive accepted wet mass once to express per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_single_product | sc_formulation | One accepted supplied SC is the sole useful output; waste, samples and internal rework are not co-products. Assign the complete attributable campaign burden, including failed/zero-output operation, to that product cohort; do not credit avoided pesticide, wastewater or packaging production. | sinochem-imidacloprid-sc-2015 |
| allocation_shared | shared utilities and cleaning | Prefer dedicated meters and batch/stage submetering. For genuinely shared service, document a measured causal driver and partition each raw burden once across products and closing WIP; retain totals and allocation evidence. Unresolved allocation stays a data gap, never an unreported zero. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | sc_formulation | accepted supplied product | release_and_weighing | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; unique lot/acceptance ID; net wet mass; gross/tare; fresh manufacture flag; shipment/finished-stock reconciliation; rejected and recovered mass; g/kg assay; g/L assay; density and temperature; particle size and release tests | Owner: quality release lead and weighing custodian. Use calibrated net weighing and signed release records. Establish Q only from newly accepted supplied formulation of the same product/route/state. Old finished stock, returned already-accepted product, rework transfers and rejected material do not add another Q; reconcile dispatch and opening/closing finished stock separately. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kg; g/kg; g/L; kg/L | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |
| cp_materials | sc_formulation | each acquired ingredient | issue_and_assay | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; ingredient SKU; complete supplied mass; supplier; assay; moisture; solvent/carrier identity and fraction; unopened returns; spills; constituent ledger | Owner: materials custodian and laboratory analyst. Weigh batch issues and unconsumed returns; retain certificates and independent assay where needed. Record complete supplied JM, wetting agent, hydrogel and antifoam once; active/polymer/water are subledgers. Internal slurry and first-rinse recovery retain originating burdens, not a new external purchase. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kg; fraction | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |
| cp_power | sc_formulation | electricity | submeter | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; start/end meter; time; rated versus measured power; line allocation; failed/idle energy; cooling pump/filler readings | Owner: electrical metering custodian. Use net meter differences. Integrate measured power over duration only when no cumulative energy total exists; do not use nameplate power as a measured consumption. Retain shearing/milling/auxiliary stage totals independently. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kWh | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |
| cp_water | sc_formulation | separate formulation and cleaning water | meter_and_transfer | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; source; water treatment; integrated volume or rate/duration flag; density/temperature; fresh issue; hydrogel/JM-carried water subledger; rinse destination; cooling makeup | Owner: water-meter custodian and batch operator. Use calibrated mass or cumulative volume with supported density. Distinguish formulation charge, cleaning, makeup, recovered transfers and discharge. No extra duration on integrated volume, no circulation counted as consumption, and no duplicated supplied carrier water. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kg; L; kg/L | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |
| cp_packaging | sc_formulation | each actual packaging component | component_issue | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; component material/grade; unit count and measured component mass; rejects; returnable cycles; net/gross fill; other components | Owner: packaging custodian and filling lead. Verify actual BOM and weigh each component; use count times measured component mass when required, before normalization. Keep bottle, closure, liner, label and carton distinct. Actual extra components require individual rows, and absent listed components need documented non-applicability. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kg; item; kg/item | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |
| cp_waste | sc_formulation | each external wastewater or solid waste | transfer_and_assay | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; waste ID; wet/dry mass; active/water/glycol assay; receiver; treatment route; internal recovery; abandoned-run burdens | Owner: environmental waste custodian. Weigh outgoing streams and assay relevant constituents; trace each to one receiver and actual treatment boundary. External wastewater is a waste exchange; do not also invent an elementary discharge of its entire content at this gate. If onsite treatment occurs, add its actual separate inputs and species outlets with independent evidence. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kg; fraction | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |
| cp_air | sc_formulation | each actual direct species release | post_control_measurement | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; species; medium/subcompartment; post-control sampling point; integrated volume or measured rate/time; concentration; detection limit; vapour loss measurement; temperature/pressure | Owner: environmental monitoring lead. Quantify actual releases at the declared final boundary by matched sampling/metering. A concentration times integrated gas volume is already a period mass; rate times duration is integrated only once. Report below-detection and unmeasured quantities explicitly. Add an atomic row for each other actual solvent/species, never infer speciation from COD or a balance residual. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kg; concentration; gas volume | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |
| cp_balance | sc_formulation | complete raw period and WIP burdens | cohort_mass_and_burden_ledger | site; SKU; route; period start/end; stage; owner; batch; instrument; unit; raw value; opening/closing WIP; return/rework IDs; burden cohort; opening/closing physical WIP; opening/closing burden vector by exchange; failed/zero-output runs; rework/return lineage; accepted lot IDs; raw input/output mass; constituent composition; transfers and allocation | Owner: production accountant, stage owners and environmental lead jointly. Close a physical mass/element ledger separately from a burden ledger. Carry opening WIP mass and all embodied burdens into the matching accepted cohort; retain closing WIP and burdens for the next period. Account for zero-output runs, abandoned batches and external returned products without dropping their burdens or accepting their mass twice. Sign each transfer so current charges plus opening burdens equal accepted-cohort burden plus closing/transferred burdens. Retain unnormalized period records and the compatible attributable raw numerator without division, with cohort and WIP burden transfers documented. After verified raw-unit conversion and attribution, normalize_period alone divides by the unique positive accepted wet SC mass Q. Card amount formulas and aggregation_rule describe this same final reporting operation, not a second division. No duplicated returned or reworked output; Q=0 retains the complete pool without a normalized result. | kg; original burden units | Each batch/stage and full period closure | Complete actual matched period, including failed and zero-output runs and associated start-up/idle/cleaning | One declared site, actual supply country, SKU and aqueous milling route; no cross-formulation average | per 1 kg reference flow | Calibration; source ticket; signed reconciliation; raw unsuccessful runs; uncertainty and gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Convert raw quantities to their declared numerator units, retain complete actual period burdens including failures and opening WIP, remove only documented burdens carried into closing WIP or transferred to another cohort, and divide the matched accepted-cohort burden by unique positive Q once. Finished SC is 1 kg. Zero Q permits no ratio; retain and carry or explicitly dispose the complete burdens. | raw_period_quantity; opening_burden; closing_burden; transfer_ledger; Q; cp_acceptance; cp_balance | exchange amount per 1 kg reference flow |  |
| composition_subledgers | technical_imidacloprid; jm_dispersant; sdbs; xanthan_hydrogel; silicone_antifoam; finished_sc | Constituent mass = whole supplied mass × independently measured mass fraction. For assay C in g/L and density rho in kg/L at matching temperature, g/kg = C / rho. Constituent totals reconcile to whole mass but do not add procurement rows. | whole_supplied_mass; measured_fraction; C; rho; cp_materials; cp_acceptance | active/water/solvent/carrier subledgers | sinochem-imidacloprid-sc-2015 |
| physical_balance | sc_formulation | Reconcile complete physical input + opening WIP = accepted output + measured external waste + independently measured direct releases + closing WIP + documented transfers, with packaging accounted separately. Close relevant elements using actual compositions independently. Mechanical mixing/milling creates no reaction water; phase change and entrained/free water are recorded separately. COD or a closure residual proves neither species nor reaction water. Investigate and disclose residuals without fitting two unknown outlets to one residual. | raw_input_mass; opening_WIP; accepted_mass; waste_mass; measured_species; closing_WIP; composition; cp_balance | separate physical and species reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference and ingredients | Require actual composition, technical grade, aqueous SC state, nominal and measured concentration, supplier conditions, release criteria, site and country. Broad pesticide identity cannot supply an unstated geography or recipe; disclose native classification debt. | Supplier certificates; actual product specification; signed release; native limitation disclosure |
| quality_period | all inventory rows | Complete matched raw numerator and unique fresh accepted output are mandatory, including unsuccessful operation, returns/rework, opening/closing WIP and carried burdens. Retain unnormalized originals and uncertainty; no silent exclusion of zero-output runs. | cp_acceptance; cp_balance |
| quality_sources | method and performance | Patent ingredient identities and unit operations are one case, not an industry average or guaranteed SKU. No formula amounts, efficacy, application rate, emission factor, field release fraction or density are defaults. Verify site/SKU measurements before creating quantitative datasets. FAO scope requires assessed manufacturer/equivalence; this PCR claims no certification. | sinochem-imidacloprid-sc-2015; fao-imidacloprid-2013 |
| quality_completeness | optional rows and emissions | Demonstrate non-applicability of each absent physical exchange. Every additional real material, fuel, refrigerant, cleaning chemical, package, waste and emitted species needs a separate atomic row with records and provider/medium. Unknown is disclosed, never encoded as measured zero. | cp_materials; cp_power; cp_water; cp_packaging; cp_waste; cp_air |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Reject aggregate insecticide output, a pure-active kilogram as a wet-SC kilogram, another physical formulation or nominal concentration, undocumented JM supply composition, missing qualifiers, or unreviewed HS-note substance applicability. Generic UUID availability does not waive actual recipe and provider evidence. | unstats-cpc3-2025; wco-hs38-2022; sinochem-imidacloprid-sc-2015 |
| validate_denominator | all inventory rows | Require Q > 0, unique fresh acceptance IDs, correct net wet mass, matched route/SKU/period, full raw burdens and documented WIP/return/rework transfers. Reject omitted failed/zero-output runs, double normalization, repeated acceptance, extra time factors on integrated volume and density inferred from patent labels. |  |
| validate_physical | material and emission reconciliation | Require separate whole-mass/element and actual-species evidence, including all supplied carrier water/solvents and independently quantified water loss. Reject duplicate constituent purchases, COD-derived species, residual-fitted emissions, unsupported reaction water and onsite synthesis added to the formulation route. |  |
| validate_coverage | data package | Report performed checks, skipped scopes, limits, providers and unmeasured exchanges. Incomplete actual emission/allocation/composition evidence remains inconclusive; methodological rules and a valid projection alone do not validate a future dataset or approve methodology. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/SKU-specific foreground formulation dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of the same qualified aqueous SC; background supply to separately modelled pesticide use |
| excluded_use | Generic all-insecticide mix; active synthesis inventory; efficacy comparison; kg-active substitution without assay; field emissions or regulatory approval |
| required_metadata | Actual formulation and complete supplied-input states; nominal/measured concentration and density; site/country/provider; SKU/period/cohort; packaging and net mass; WIP and burden transfer ledger; treatment and allocation boundaries; protocol owners; native identity limits/classification debt |
| required_quality_disclosure | Raw-period completeness; failed runs; uncertainty; unmeasured species; missing auxiliary UUID/provider matches; patent/FAO applicability limits and actual release evidence |
| update_trigger | Change in active/grade, formulation type/concentration, JM/other supplied additive, solvent/carrier, milling route, hydrogel make/buy state, packaging, site/provider, release specification or waste treatment |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unstats-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p.167, entries 34661/34666/34669. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official titles and separation of classification leaves only; those explanatory entries have no additional text. A classification leaf neither creates a PCR identity nor establishes the full scope of this narrow formulation. |
| wco-hs38-2022 | official_guidance | WCO, HS Nomenclature 2022, Chapter 38, Subheading Notes 1–2 and heading 38.08. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf | Check listed substances versus other insecticidal preparations: imidacloprid is absent from both lists. Does not approve a CPC edge; actual complete composition and product purpose still require classification assessment. |
| sinochem-imidacloprid-sc-2015 | literature | 中化化工科学技术研究总院、北京广源益农化学有限责任公司, 一种吡虫啉悬浮剂及其制备方法, CN105028457A, 2015-11-11, description [0006], [0011] Example 2, PDF pp.4–5; pp.3,6–7 limitations/context. https://patents.google.com/patent/CN105028457A/zh | Primary patent facsimile supports technical powder, JM solution, sodium dodecylbenzenesulfonate, preformed 4% xanthan hydrogel, magnesium aluminium silicate, silicone antifoam, ethylene glycol, water and shear/sand-mill/post-mill sequence. Laboratory recipe is not a default quantity, density, field efficacy or factory intensity. JM synthesis solvent is unspecified; require actual supplied composition and upstream data. Upstream polymerisation is not the selected foreground. |
| fao-imidacloprid-2013 | standard | FAO, Specifications and Evaluations for Agricultural Pesticides: Imidacloprid, May 2013, 582/SC, printed pp.11–13; introduction p.1 and evaluations 582/2004, 582/2012. https://www.fao.org/fileadmin/templates/agphome/documents/Pests_Pesticides/Specs/Imidacloprid_2013_01.pdf | Independent physical description of aqueous technical-particle suspension and concentration/density distinction. Applies to evaluated manufacturers/technical materials and equivalence scope, not nominally similar unassessed suppliers/routes; no endorsement, warranty of efficacy or automatic compliance. Its 2013 SC tolerance table stops at 500 g/kg or g/L; no tolerance is extrapolated to 600 g/L. No formulation recipe or use/emission factor adopted. |
| changqing-imidacloprid-sc-2014 | literature | 江苏长青农化股份有限公司, 吡虫啉悬浮剂的制备方法, CN104126600A, 2014-11-05, claims 1–2 and description [0005]–[0019], PDF pp.2–4. https://patents.google.com/patent/CN104126600A/zh | Independent counterexample: nominal 350 g/L water-phase sulfonated-calix[5]arene route. Not the selected 600 g/L JM formulation; its ratios and suspensibility cannot transfer to the selected route or establish generic insecticide performance. |
