---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.herbicides-anti-sprouting-products-and-plant-growth-regulators
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Monoammonium glyphosate soluble granules by wet extrusion

## 1. Scope and Applicability

This PCR covers one sole-active monoammonium glyphosate water-soluble granular herbicide, made from acquired dry salt, Ethomeen T/25 as supplied, PEG 8000 extrusion aid and water. The bounded process is the heated preblend, powder mixing, basket extrusion, fluid-bed drying and screening architecture of Example 1 in monsanto-glyphosate-sg-1994. Each dataset represents one actual formulation, grade, site and supplied granular state. The example is a laboratory disclosure, not an industrial recipe, measured yield, emission factor or factory survey. Its nominal dry-ingredient percentages omit added water; no recovered final mass is reported. Do not copy these amounts or laboratory run times as production intensities.

Exclude glyphosate acid synthesis and salt formation, other counterions, liquid soluble concentrates, suspension concentrates, water-dispersible insoluble granules, co-active products, anti-sprouting agents, plant-growth regulators and all other herbicides. Drying and sieving remain material steps; a formulation with a different active, salt, physical state, carrier or manufacturing route requires a new applicability decision. Exclude downstream distribution, tank dilution, spraying, efficacy, treated area, use-phase emissions and packaging disposal. A dose per hectare is not the production reference quantity.

FAO 284/SG (November 2014), printed pages 10–11, independently describes soluble glyphosate-salt granules and assay/quality dimensions. Its manufacturer/evaluation limits, integrated evaluation reports and instruction to check current versions remain applicable to any claimed use of that specification. This PCR uses it as physical-state and quality context only; neither the patent formulation nor a future supplier is declared FAO compliant or equivalent, and its numerical tolerances are not imposed as universal limits.

UNSD CPC 3.0 page 167 lists 34663 separately from hazardous pesticides 34666 and residual 34669 without additional explanatory text. The selected sole-glyphosate preparation is a narrower classification candidate, subject to its complete actual composition and purpose. WCO HS 2022 Chapter 38 Subheading Notes 1–2 list specific substances; glyphosate is not listed. This is classification context, not an accepted mapping or a general hazard determination. No classification leaf defines a mixed output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.herbicides-anti-sprouting-products-and-plant-growth-regulators |
| classification_refs | CPC 3.0 34663; narrower sole-active soluble-granule formulation scope |
| covered_products | One actual monoammonium glyphosate SG using acquired dry salt, supplied Ethomeen T/25, PEG 8000 and water |
| excluded_products | Other active substances, counterions or formulants; co-actives; SL, SC and WG; active synthesis or salt formation; downstream use |
| representative_product | Example-1 type soluble granules; actual acid-equivalent and salt assay, residual moisture and release specification declared |
| production_route | Acquired dry salt → powder preparation; heated surfactant/PEG/water preblend → mixing → basket extrusion → fluid-bed drying → screening → acceptance and supply preparation |
| market_state | Net accepted as-supplied soluble granules at formulation-facility gate; actual packaging, country, site and SKU declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply of the declared monoammonium glyphosate SG |
| How much | 1 kg net accepted supplied granules |
| How well | Actual release specification for active/counterion identity, acid-equivalent and salt assay, moisture, dissolution, dustiness, flowability, relevant impurities and storage quality; no efficacy equivalence claim |
| How long or cycle | One matched manufacturing and acceptance period; no treatment lifetime |
| reference_flow_link | finished_sg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pesticide `80d8c492-83e7-4ba8-9cf5-0dbac200513b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sole active glyphosate; monoammonium salt identity and counterion assay; SG soluble physical state; actual acid-equivalent and salt g/kg; residual moisture and carrier composition; dry salt supply grade; whole supplied Ethomeen T/25 composition and PEG 8000 grade; actual route and utility architecture; release specification and test results; manufacturer/site/country; SKU and batch; reporting period and accepted-output cohort; net/gross masses and packaging BOM; upstream provider geography/technology; native generic identity limits and classification debt |

The native reference is a Product flow allowing a pest-control substance or mixture, including weed control. Its only name component is Pesticide / 农药; CAS, grade, formulation, route, mix type and supply geography are unspecified. There is no native CN/HK or regional-delivery claim. The PCR qualifiers bind one actual granular formulation, not an aggregate of pesticides. Native classification 35499 is disclosed inconsistent classification metadata and requires stewardship; it does not override the consistent broad physical identity or establish a CPC mapping. The complete native properties contain only Mass, reference internal ID 0 and meanValue 1; the exact referenced mass-property and unit-group chain leads to kg. No secondary property coefficient is a density or active-fraction factor. Missing qualifiers make a dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted supplied granule mass excluding packaging. All rows use per 1 kg reference flow and the same positive accepted-output cohort collected by cp_acceptance. |
| salt_active_water | salt, preblend and granules | Mass and independently measured composition | kg | Whole supplied salt/formulant mass, glyphosate acid-equivalent mass, counterion mass and water are different ledgers. Declare assay basis and actual speciation; do not substitute acid for monoammonium salt, dry mass for supplied mass or nominal recipe for recovered output. |
| raw_unit_conversion | all inventory rows | Original meter property | original units | Convert raw units before normalization. Rate × duration is integrated once; already integrated gas/liquid volumes or energy totals receive no further time factor. Volume-to-mass requires independent density at stated temperature, not a flow-property coefficient. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Acquired dry monoammonium glyphosate, supplied Ethomeen T/25, PEG 8000, formulation water, utilities and actual packaging at formulation site |
| starting_condition_role | Foreground begins with supplied ingredients and includes powder preparation, heated preblending, wet mixing, extrusion, drying, screening, quality acceptance and supply preparation |
| product_classification_scope | One sole-active monoammonium glyphosate SG; narrower than the mixed CPC 34663 leaf |
| recursive_input_rule | Purchased finished SG or externally returned sold material is a distinct whole input with prior burdens and acceptance history; internal recycle is a transfer, not a new purchase or new positive output |
| upstream_dataset_requirement | Match whole supplied salt grade and moisture, complete Ethomeen T/25 supply composition, PEG molecular-weight grade, utility technology/geography and packaging supplier; do not use a pure constituent provider for a whole commercial mixture without justified decomposition |
| disclosure | Disclose actual site/country, period, SKU, product release state, starting materials, heat supply, mass/active/water balances, returns/rework/WIP, omissions and provider limits. The patent does not establish a factory geography or dryer energy carrier. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | foreground | Keep the three process owners below separate in collection. Include actual powder preparation and reject/fine handling; drying and screening cannot disappear by treating the purchased dry salt as finished SG. | monsanto-glyphosate-sg-1994 |
| b_utilities | utilities and releases | The heat card denotes one externally supplied heat service for indirect drying, if used, measured as delivered net heat. Electric heating belongs in the process electricity meter. If steam or onsite fuel is the actual boundary exchange, add its own atomic row and model condensate/combustion and emissions explicitly before dataset use; never count both purchased heat and its source energy. Include dust control, actual cleaning and each actual environmental release; absent measurements are not zero. |  |
| b_supply | upstream and downstream | Link upstream production of acquired ingredients and services once. Foreground is neither active synthesis nor farm application. Any onsite salt formation, new ingredient or materially different utility/route needs explicit scope and inventory extension with evidence. | monsanto-glyphosate-sg-1994 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_blend | Powder preparation and heated wet blending | required | Every dataset of this route | Foreground ingredient preparation and preblend | Measured wet blend transfer; normalized to terminal accepted SG |
| p_granulate | Extrusion, fluid-bed drying and screening | required | Every dataset of this route | Foreground granule forming and moisture removal | Measured screened-granule transfer; normalized to terminal accepted SG |
| p_finish | Quality acceptance, packaging and supply preparation | required | Every dataset; packaging only when actually supplied | Terminal accepted product and gate delivery state | 1 kg net accepted supplied SG |

### Process: Powder preparation and heated wet blending (`p_blend`)

#### Inputs

##### Product flows

###### Acquired glyphosate salt (`dry_salt`)

Record the complete supplied dry salt feed, actual assay, residual moisture and counterion. The patent used acquired Roundup WSD and powder preparation; no acid-to-salt reaction is within this foreground.

- Selected flow: Dry monoammonium glyphosate supplied feed
- Flow property / unit: Mass / kg
- Amount rule: Use cp_blend to retain the complete matched raw-period numerator R_dry_salt, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_blend
- Sources: monsanto-glyphosate-sg-1994

###### Acquired surfactant (`surfactant`)

Use the complete commercial supplied product, including any carrier or water. Component assays are subledgers, not second purchases. Do not infer a current supplier or replace it with an arbitrary tallow-amine provider.

- Selected flow: Ethomeen T/25, whole supplied surfactant
- Flow property / unit: Mass / kg
- Amount rule: Use cp_blend to retain the complete matched raw-period numerator R_surfactant, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_blend
- Sources: monsanto-glyphosate-sg-1994

###### Acquired extrusion aid (`peg8000`)

Record actual supplied PEG 8000 grade and composition. Example 1 used Carbowax PEG 8000; other molecular-weight or propylene-oxide grades are not automatically compatible.

- Selected flow: PEG 8000 extrusion aid
- Flow property / unit: Mass / kg
- Amount rule: Use cp_blend to retain the complete matched raw-period numerator R_peg8000, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_blend
- Sources: monsanto-glyphosate-sg-1994

###### Added formulation water (`formulation_water`)

Measure only separately acquired water added for preblending. Moisture already inside purchased salt or surfactant stays in those whole-input subledgers.

- Selected flow: Formulation water
- Flow property / unit: Mass / kg
- Amount rule: Use cp_blend to retain the complete matched raw-period numerator R_formulation_water, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_blend
- Sources: monsanto-glyphosate-sg-1994

###### Blending electricity (`blend_electricity`)

Submeter actual powder preparation, preblend heating, mixing and associated extraction; no laboratory microwave time is an industrial energy quantity.

- Selected flow: Electricity for powder preparation and heated blending
- Flow property / unit: Energy / kWh
- Amount rule: Use cp_blend to retain the complete matched raw-period numerator R_blend_electricity, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_blend
- Sources: monsanto-glyphosate-sg-1994

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet blend transfer (`wet_blend`)

Internal wet blend passed to p_granulate; retain its mass, water/active composition and carried burdens. This is not accepted SG and is not a second final reference output.

- Selected flow: Monoammonium glyphosate wet extrusion blend
- Flow property / unit: Mass / kg
- Amount rule: Use cp_blend to retain the complete matched raw-period numerator R_wet_blend, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_blend
- Sources: monsanto-glyphosate-sg-1994

##### Waste flows

##### Elementary flows

### Process: Extrusion, fluid-bed drying and screening (`p_granulate`)

#### Inputs

##### Product flows

###### Incoming wet blend (`wet_blend_in`)

Match wet_blend by transfer ID, composition and burden ledger. No additional upstream purchase is generated for this internal transfer.

- Selected flow: Monoammonium glyphosate wet extrusion blend
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_wet_blend_in, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources: monsanto-glyphosate-sg-1994

###### Granulation and drying electricity (`granulation_electricity`)

Meter extruder, dryer fans, screens, dust control and electric heating if present; allocate shared equipment by measured duty, including failed batches.

- Selected flow: Electricity for extrusion, fluid-bed drying and screening
- Flow property / unit: Energy / kWh
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_granulation_electricity, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources: monsanto-glyphosate-sg-1994

###### Conditional purchased drying heat (`drying_heat`)

Use only for an actual external heat service, with temperature, return condition and net delivered heat. For electricity-only drying this row is demonstrably absent; steam or fuel exchanges require their own rows and scope.

- Selected flow: Purchased process heat for indirect fluid-bed drying
- Flow property / unit: Energy / MJ
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_drying_heat, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Screened granule transfer (`screened_sg`)

Transfer to p_finish with moisture and assay; screen passage does not establish final release or new positive output. Record fines/oversize recycle by unique internal IDs.

- Selected flow: Screened monoammonium glyphosate soluble granules before release
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_screened_sg, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources: monsanto-glyphosate-sg-1994

##### Waste flows

###### Rejected granules leaving the system (`offspec_granules`)

Weigh only material leaving for treatment. Internal fines or oversize returned to the line are not waste outputs as well as fresh inputs. Retain prior and reprocessing burdens.

- Selected flow: Rejected monoammonium glyphosate granules for treatment
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_offspec_granules, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources: monsanto-glyphosate-sg-1994

###### Collected dust disposal (`collected_dust`)

Weigh this actual formulation-dust waste stream and assay moisture/active. Dust returned internally remains an internal transfer; particulate captured by filters is not an air release.

- Selected flow: Collected monoammonium glyphosate formulation dust for treatment
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_collected_dust, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources: monsanto-glyphosate-sg-1994

##### Elementary flows

###### Drying moisture release (`water_vapour`)

Determine water removal from independent moisture and exhaust/condensate measurements with uncertainty. This formulation route has no assumed reaction water; do not derive unknown water and an unknown waste outlet from one residual.

- Selected flow: Water vapour, to air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_water_vapour, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources:

###### Actual salt particulate release (`airborne_salt`)

If present, measure or quantify with a justified method the salt-specific airborne burden and medium. Do not use a field spray fraction; keep dust total and constituent results as reconciled subledgers without double counting.

- Selected flow: Monoammonium glyphosate particulate, to air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_airborne_salt, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources:

###### Actual PEG particulate release (`airborne_peg`)

Quantify actual PEG particulate separately when emitted; captured dust and airborne dust are distinct destinations. Do not infer the constituent fraction from nominal patent percentages.

- Selected flow: PEG 8000 particulate, to air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_airborne_peg, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources:

###### Actual supplied-surfactant aerosol release (`airborne_surfactant`)

Record this physically specific supplied-mixture aerosol if present and disclose constituent/medium uncertainty. Chemical-specific characterization requires actual constituent evidence and separate exchange resolution; do not invent a pure-species factor.

- Selected flow: Ethomeen T/25 aerosol, to air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_granulate to retain the complete matched raw-period numerator R_airborne_surfactant, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_granulate
- Sources:

### Process: Quality acceptance, packaging and supply preparation (`p_finish`)

#### Inputs

##### Product flows

###### Incoming screened granules (`screened_sg_in`)

Match screened_sg transfer identity, assay, moisture and carried burdens; count final accepted supply only in finished_sg.

- Selected flow: Screened monoammonium glyphosate soluble granules before release
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_screened_sg_in, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources: monsanto-glyphosate-sg-1994

###### Conditional HDPE container (`hdpe_container`)

Include only the actual supplied HDPE container with mass, resin grade and supplier. It is outside the net product denominator.

- Selected flow: HDPE granule container
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_hdpe_container, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Conditional PP closure (`pp_closure`)

Record one actual closure component; do not infer it from the patent. A different closure material needs its own row.

- Selected flow: Polypropylene container closure
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_pp_closure, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Conditional paper label (`paper_label`)

Use actual label BOM, mass and composition; count-to-mass needs representative tare sampling and uncertainty.

- Selected flow: Paper product label
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_paper_label, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Conditional shipping carton (`carton`)

Include one actual corrugated carton when supplied; no generic packaging bundle or assumed package configuration.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_carton, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Finishing electricity (`finish_electricity`)

Meter actual filling, handling, acceptance and allocated shared auxiliaries.

- Selected flow: Electricity for release and filling
- Flow property / unit: Energy / kWh
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_finish_electricity, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Actual cleaning water (`cleaning_water`)

Record actual water for finishing equipment cleaning, including wash-down after failed batches. Any cleaning in another process stays with that process owner and is added separately.

- Selected flow: Equipment cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_cleaning_water, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted supplied monoammonium glyphosate SG (`finished_sg`)

The unique terminal Product output. Qualifiers bind this generic native identity to the selected actual SG. Q is net newly accepted supplied product, counted once by acceptance ID and reconciled with dispatch and inventory, excluding internal recycle and repeated acceptance.

- Selected flow: Pesticide `80d8c492-83e7-4ba8-9cf5-0dbac200513b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: method_formula
- Collection protocol: cp_acceptance
- Sources: fao-glyphosate-sg-2014

##### Waste flows

###### Actual cleaning effluent for treatment (`cleaning_effluent`)

Measure whole effluent and active/water composition; retain offsite treatment and downstream releases in the linked treatment dataset, not duplicate direct elementary emissions. COD alone is not a species mass or reaction-water balance.

- Selected flow: Monoammonium glyphosate formulation cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_cleaning_effluent, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Unreleased final product leaving for treatment (`rejected_finished`)

Separate release failures, returned sold product, rework, held stock and treatment destinations. Do not silently subtract their burdens or count the same kilograms as a second accepted output.

- Selected flow: Rejected finished monoammonium glyphosate SG for treatment
- Flow property / unit: Mass / kg
- Amount rule: Use cp_finish to retain the complete matched raw-period numerator R_rejected_finished, including assigned failed-run and inherited WIP/return/rework burdens; after raw unit conversions and explicit closing carry-forward, divide by unique positive accepted net supplied mass Q exactly once, per 1 kg reference flow.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_primary | the selected SG | No saleable co-product is established by the selected sources. Retain full matched burdens of failures, waste and rework with the accepted SG cohort. Internal recycle is neither co-product nor an avoided-product credit. |  |
| a_shared | shared services or actual co-products | Separate physical submetering first. If shared services remain, document an actual causal allocation basis and reconcile all shares to the original total. A real saleable co-product requires explicit identity, quantity, allocation method and sensitivity review; do not assume mass/economic shares or delete it. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_blend | p_blend | ingredients, electricity and wet-blend transfer | batch_ledger | batch and transfer IDs; owner; whole supplied masses; assay/counterion; water/carrier fractions; scale tare; electricity meter start/end; rate or integrated-volume flag; temperature; opening/closing WIP quantity and carried burdens; failed runs; internal returns | Owner: blending operator with site metering lead. Calibrated scales and submeters, supplied-product certificates and batch/transfer reconciliation; independently assay relevant composition. Aggregation and burden assignment: Retain raw totals and all internal transfer IDs; assign opening burdens and closing carry-forward to the matched accepted cohort; send raw numerator components to calc_period before one normalization. | kg; kWh; original meter units | Every batch and meter interval | Same complete reporting period including startup, failure, cleaning and closure | One actual formulation line and its assigned shared auxiliaries | per 1 kg reference flow | Scale and meter calibration; full supplier composition; timestamped batch failures and WIP/burden ledger |
| cp_granulate | p_granulate | extrusion, dryer, screen, rejects and releases | unit_operation_ledger | wet_blend transfer ID and mass; moisture/salt assays; dry screened output; fines/oversize/recycle IDs; electricity; delivered heat and return state; water exhaust/condensate; dust capture and emitted species; zero-output operation; opening/closing WIP and inherited burdens | Owner: granulation/dryer operator and environmental measurement lead. Independently weigh transfers/rejects, meter each energy carrier and measure moisture and actual outlet composition/medium with uncertainty. Aggregation and burden assignment: Pair internal transfers without procurement duplication; retain full failure burdens and inventory changes. Keep mass, elements, actual species and water ledgers separate; forward raw assigned burdens once to calc_period. | kg; kWh; MJ; original gas/liquid units | Every batch, recycle and meter/emission interval | Complete matched period including failed/zero-output and reprocessed campaigns | One actual extrusion/dryer/screen train and assigned controls | per 1 kg reference flow | Moisture/assay methods and uncertainties; exhaust/condensate measurements; heat meters; recycle and waste custody records |
| cp_finish | p_finish | screened transfers, packaging, cleaning and rejects | finishing_ledger | screened_sg transfer ID; supplier/SKU/package BOM; net/gross/tare; measured component masses; electricity; cleaning-water and whole-effluent quantity/composition; release failures; returned sold material; rework routing; stock and carried burdens | Owner: filling supervisor with environmental lead. Weigh actual supplied components and rejected product, submeter electricity/water and sample effluent. Reconcile transfer and external-return identities. Aggregation and burden assignment: Retain all raw inputs/burdens, unreleased output and returned-product inherited burdens. Count packaging outside net Q; transfer assigned burdens to calc_period without a second product normalization. | kg; kWh; count with measured tare | Every lot and every cleaning or return event | Complete matched manufacturing/acceptance period and stock reconciliation | One finishing line and assigned site services | per 1 kg reference flow | Package BOM and tare samples; calibrated scales/meters; waste manifests; returns/rework and stock/burden audit |
| cp_acceptance | p_finish | unique terminal accepted output Q and quality | acceptance_ledger | unique acceptance ID; product/SKU/salt/form/route; gross/tare/net mass; moisture; acid-equivalent and salt assay basis; relevant impurity/quality tests; batch lineage; dispatch and opening/closing accepted stock; returns; repeated release flags | Owner: independent site quality-release officer with stock accountant. Calibrated net weighing and actual release specification tests, reconciled to dispatch and stock; do not infer acceptance from screen passage or sales invoice alone. Aggregation and burden assignment: Q is unique newly accepted net supplied output; exclude repeated acceptance, internal recycle and resale of previously accepted returns. Reconcile opening accepted stock + new acceptance + external returns - dispatch - closing stock - treatment/transfers = 0 with signed movements. For a reworked return, retain its prior burdens and credit history; count only genuinely new accepted mass once. Q must be positive for normalization; Q=0 retains raw burdens for later assignment. | kg net supplied product; g/kg assay | Every acceptance and reversal event | Same matched period and documented cross-period cohort lineage | Same actual SG product, route, salt and supplied state at one site | per 1 kg reference flow | Release officer sign-off; full qualifier/test records; unique ID and dispatch/stock/return reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_period | all raw-period inventory numerators | For each exchange retain raw measured quantities, convert units, then assign R to the accepted cohort by batch/transfer lineage: include opening WIP and returned-material inherited burdens, current inputs and all failed/zero-output/rework burdens; carry closing WIP/unreleased burdens forward explicitly. Reconcile period totals = assigned-to-Q + closing-carried burdens + separately justified destinations. Negative corrections require linked original IDs. Do not discard failed runs or count internal recycle twice. Then q = R / Q exactly once for positive Q from cp_acceptance; Q=0 prohibits normalized output and retains the raw ledger. | cp_blend; cp_granulate; cp_finish; cp_acceptance | per 1 kg reference flow quantities and explicit carried-burden ledger |  |
| calc_mass | ingredients, intermediate transfers, granules and all outlets | At raw-period level reconcile physical mass and independently assayed glyphosate acid-equivalent, ammonium/counterion and relevant elemental ledgers across supplied inputs, product, waste, releases and WIP. Whole purchased formulations include their carrier/water once; component subledgers are not additional procurement. Match internal transfer pairs and prevent duplicate upstream burden. Do not combine kg acid-equivalent with kg salt as if identical. | cp_blend; cp_granulate; cp_finish; cp_acceptance | separate mass/active/counterion/element closure and uncertainty |  |
| calc_water | physical water and actual species | Measure supplied free/structural water, added water, remaining product/WIP water, effluent, condensate and vapour independently where applicable. This bounded route is formulation and evaporation, not glyphosate synthesis or neutralisation; no reaction water is presumed. Any actual chemical transformation requires independently supported species/extent and reaction-water evidence and scope reassessment. Do not fit unknown vapour and unknown waste to one closure residual or use COD as a species balance. | cp_blend; cp_granulate; cp_finish | independent physical-water and species account, not a fitted emission factor |  |
| calc_units | meters, packaging and assay conversions | Integrate actual rate over its measured interval once; keep integrated volumes unchanged before density conversion. Net package content = gross - measured tare. Component count × measured representative component mass may determine packaging mass with uncertainty. Acid-equivalent or salt mass = assayed fraction on its explicitly stated wet/dry basis × corresponding measured physical mass; use independently documented salt identity/speciation for any molar conversion. No nominal patent ratio, efficacy dose or density inferred from a concentration label is a conversion basis. | cp_blend; cp_granulate; cp_finish; cp_acceptance | converted raw quantities before one normalization |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all exchanges and providers | Qualify the exact active/salt/form/route and whole supplied grade; query/direct-read identity is not provider compatibility. Preserve all native name, CAS, comment, geography, medium and property restrictions. Blank auxiliary UUIDs require matching at dataset production, not fabricated identities. | Supplier certificates, full composition, native direct records and actual provider scope |
| q_complete | period and cohort | Retain measured raw numerators, unique positive accepted denominator, failures, returns, rework and opening/closing WIP with carried burdens. Report omissions, detection limits and uncertainty; do not set unknown emissions or inactive rows to zero without evidence. | Signed ledgers, calibrated measurements and mass/species/water reconciliations |
| q_release | accepted SG | Use actual registered/supplier release criteria and methods for assay, dissolution, dustiness, flowability, relevant impurities, moisture and storage quality. FAO 2014 context carries manufacturer/version limits and is not certification of this recipe. | Actual quality specification, methods, test results and acceptance officer record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | reference and terminal product | finished_sg is the unique selected terminal Product output and has the declared reference UUID, 1 kg net supplied basis and all qualifiers. Internal wet_blend and screened_sg transfers cannot be silently renamed as final output. |  |
| v_period | inventory and calculation | Require all three process-owner protocols plus cp_acceptance, complete raw-period/burden and WIP/return/rework ledgers, positive unique Q and one normalization. With Q=0 or unresolved cohort assignment, retain raw records and do not report a normalized production dataset. |  |
| v_balance | physical and chemical accounting | Check complete supplied-input mass, independent active/counterion/element and physical-water accounts, internal-transfer pairing, energy units and real outlet destinations. No COD/residual-fitted reaction water, duplicate component procurement, missing failures or invented emission fractions. Add each actual unlisted material, packaging component, pollutant species or utility as an atomic row with its process owner and evidence before dataset use. |  |
| v_source | evidence and applicability | Keep patent-laboratory and FAO manufacturer/version limits and native generic classification debt visible. A future site/SKU/provider match, product registration, scientific review or CPC acceptance is not established by this methodology or by format validation. | monsanto-glyphosate-sg-1994; fao-glyphosate-sg-2014; unsd-cpc3-2025; wco-hs38-2022 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supplier-specific upstream SG formulation for a separately modelled agricultural or other authorized use |
| allowed_use | Only the qualified monoammonium glyphosate soluble-granule route and supplied state, with complete data-production evidence |
| excluded_use | No universal herbicide mix, active synthesis, other salts/forms/routes, efficacy comparison, dose conversion, field release or automatic supplier/geographic proxy |
| required_metadata | All reference qualifiers; actual provider/location/technology; raw period and stock/cohort lineage; complete packaging and ingredient composition; heat architecture; allocation; evidence and methods |
| required_quality_disclosure | Measurement and representativeness uncertainty; missing auxiliary UUID/provider matches; emission/species resolution; source edition/manufacturer limits; native generic 35499 classification debt; no implied approval |
| update_trigger | Change of active, salt, form, supplier grade/formulant, route, utility, packaging, site, release specification, source edition or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| monsanto-glyphosate-sg-1994 | literature | EP0582561A1, Monsanto Company, 1994-02-09, printed/PDF page 6, General Process Description and Example 1. https://patentimages.storage.googleapis.com/be/c5/7e/9489c4b260d3e4/EP0582561A1.pdf | Acquired dry monoammonium salt, supplied surfactant, PEG 8000, water and mixing/extrusion/drying/screening architecture only. Laboratory disclosure: no industrial yield, recovered final mass, default intensity, geographic representativeness or efficacy equivalence. |
| fao-glyphosate-sg-2014 | official_guidance | FAO Specifications and Evaluations for Glyphosate, November 2014, 284/SG, printed pages 10–11 (PDF 14–15), complete notes. https://www.fao.org/fileadmin/templates/agphome/documents/Pests_Pesticides/Specs/Glypho_2014.pdf | Independent soluble-granule physical state, acid/salt assay and quality context only. Manufacturer/evaluation scope, integrated reports and current-version caveat retained; no compliance/equivalence or universally adopted numeric limits. |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, page 167, entries 34661–34669. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification names and adjacent leaves only; no manufacturing method, reference quantity or accepted mapping. |
| wco-hs38-2022 | official_guidance | WCO HS Nomenclature 2022, Chapter 38, PDF page 2, Subheading Notes 1–2. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf | Specific substance lists as contrary-boundary context; actual complete composition and purpose require review. No CPC acceptance, general hazard determination or LCA quantity. |
