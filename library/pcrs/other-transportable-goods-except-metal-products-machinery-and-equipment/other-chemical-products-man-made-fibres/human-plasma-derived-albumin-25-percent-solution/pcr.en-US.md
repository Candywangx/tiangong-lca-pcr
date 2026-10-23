---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.human-plasma-derived-albumin-25-percent-solution
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
translation_status: canonical
content_maturity: authored_methodology
---

# Human plasma-derived albumin 25% aqueous solution, net supplied at plant

## 1. Scope and Applicability

This is a civil environmental inventory method for a single human plasma-derived albumin aqueous solution supplied at 25 g albumin per 100 mL in the sealed 100 mL single-vial carton presentation, with actual product-specific quality release and net dispatch at the manufacturer gate. The complete wet formulation is the reference object, not dry albumin or a therapeutic service. Albuminar-25 (US label revised June2013) establishes a real documented example; its label is not evidence of current availability everywhere. Do not pool different species, concentrations, routes, brands with incompatible formulations, raw plasma, whole blood, immune sera, immunoglobulins or other final fractions into the denominator.

Use batch/cohort environmental records only; collect no donor personal identifiers. Biological manufacturing units may remain source-grounded black boxes with complete actual material, utility, water, emission and waste exchanges. This document supplies no biological enrichment, pathogen processing, separation/purification or activity-enhancement operating parameters, recipes or laboratory protocols, and no clinical administration or dose. Clinical equivalence and generic blood-unit conversions are outside this reference definition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.human-plasma-derived-albumin-25-percent-solution |
| classification_refs | CPC3.0 35272; narrow subset context only, no accepted mapping asserted |
| covered_products | One separately declared human plasma-derived 25% mass/volume albumin aqueous formulation, 100 mL single-vial carton presentation, net supplied at plant |
| excluded_products | Animal blood/fractions; recombinant albumin; raw human blood/plasma; other albumin strengths; immunoglobulins; clotting factors; antisera; clinical service |
| representative_product | Albuminar-25, documented 100 mL vial containing 25 g albumin in the complete aqueous formulation; historical US label, not a universal supplier specification |
| production_route | Human pooled-plasma-derived manufacturing route documented by the original supplier, represented as environmental black boxes including all actual manufacturing and auxiliaries; no operating protocol reproduced |
| market_state | Quality-released sealed aqueous solution; declare actual full formulation, container, site, dispatch gate and temperature-control history |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the specified human plasma-derived albumin formulation at plant dispatch gate for downstream environmental modelling |
| How much | 1 kg net supplied complete wet solution, excluding packaging mass |
| How well | 25 g albumin per 100 mL; actual product-specific accepted release, supplied form and batch assay; no efficacy equivalence |
| How long or cycle | One closed, declared dispatch accounting period and matched product cohort, with opening/closing WIP and finished-goods carry-over |
| reference_flow_link | finished_solution |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | blood products `04caea53-a455-4adc-b7d2-3bc102bf7971` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | human source; plasma-derived route; 25% mass/volume strength; full supplied formulation; brand and specification; 100 mL vial presentation and actual fill; batch/cohort; quality release; actual net dispatch gate; opening/closing WIP and finished-goods burdens; site and supply geography; temperature history; primary/secondary packaging; allocation-gate products; upstream dataset boundaries |

Required qualifiers must be supplied in the concrete data package. Native identity limitations: the full selected name is "blood products; Production mix, at plant"; its comment includes human plasma-derived medicinal products. Geography/location of supply is unspecified, CAS is absent, route and grade fields are empty, and its sole property is reference Mass with factor1. The native CPC35260 label differs from target35272; retain this classification debt for data-owner review. This broad identity supports only a qualified human product exchange; it does not establish the 25% formulation, a manufacturing technology, supplier quantities or a CN/HK/global geography. Restrict this reference to the declared at-plant gate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of complete supplied wet solution. Q is actual net dispatch, not newly released production P. The finished_solution row is 1 kg per reference flow. |
| solution_basis | all inventory rows | Mass | kg | Measure mass directly or convert matched batch volume with independently measured density at declared conditions. 25 g/100mL is mass/volume, not 25% mass fraction; no default water fraction or density. Constituent assay and carrier water are subledgers, never additional purchases. |
| utility_basis | all inventory rows | Measured exchange property | declared row unit | Convert raw units before normalize_dispatch. Rate times duration is allowed for actual rates; integrated liquid/gas volume is not multiplied by time. Use independently documented calorific and temperature/pressure bases. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable human plasma collection and supply, or a purchased plasma dataset with the complete declared upstream burden; no zero-burden donation assumption |
| starting_condition_role | Actual external human-plasma input; expand collection/testing/cold-chain processes when not already covered upstream |
| product_classification_scope | One specified human albumin solution only; the CPC leaf is broader than the methodology |
| recursive_input_rule | A purchased albumin intermediate carries its own complete upstream dataset and exact identity; do not recurse infinitely or apply a zero manufacturing burden |
| upstream_dataset_requirement | Match human origin, supplied state, route, geography, period, collection/testing, shared-plasma allocation, temperature-controlled transport and boundary coverage; disclose gaps |
| disclosure | Cradle to actual net plant dispatch; all manufacturing, QC, consumables, utilities, water preparation, packaging, storage, rework, waste treatment and loading included. Customer transport/use is a separate extension. Public black boxes conceal no environmental burden. |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | albumin_supply | Inventory every actual material, energy carrier, water stream, disposable, packaging component, co-product, waste and elementary emission as separate atomic exchanges. Extend this initial card set for any additional real exchange; absence requires evidence, not a cut-off. Supplier datasets may carry upstream units but must be boundary checked against foreground meters. | ifc-pharma-biotech-2007 |
| b_thermal | albumin_supply | Retain actual plasma cold-chain collection, transport and storage, manufacturing cooling/heating, clean utilities and final warehousing/handling/loading. The cited final label specifies controlled room temperature, so do not impose a refrigerated final product by default. Record actual temperature-control history, time, site, electricity and refrigerant losses without publishing manufacturing operating parameters. | csl-albuminar25-label-2013; ifc-pharma-biotech-2007 |
| b_gate | albumin_supply | The terminal gate is actual unique net dispatch of accepted complete solution at plant. Newly quality-released mass P is an internal production-to-store transfer, not Q. Keep production, finished-store and dispatch ledgers with internal transfers cancelled in the combined ledger. Closing undelivered finished goods and their carried burdens are excluded from Q and carried forward; opening finished goods retain their prior manufacturing burdens when dispatched. | jrc-ilcd-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| albumin_supply | Human albumin supply environmental black box | required | All actual units within the declared cradle-to-dispatch boundary; expand upstream units missing from purchased datasets | Single-product reporting over an auditable unallocated multi-product physical ledger | 1 kg net supplied wet solution at plant |

### Process: Albumin supply (`albumin_supply`)

#### Inputs

##### Product flows

###### Human plasma feedstock (`plasma`)

Full wet plasma received with collection, testing, collection consumables, upstream allocation and cold-chain burdens. Human source only; no donor identities. Do not duplicate its contained water as another purchase.

- Selected flow: Human plasma feedstock
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Ethanol solution (`ethanol`)

If actually used, record the complete purchased solvent formulation and its assay as a subledger, including fresh make-up, recovery imports/exports and losses. Internal recirculation is not fresh purchase. No operating concentration is prescribed.

- Selected flow: Ethanol solution
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Sodium caprylate (`caprylate`)

Record the actual acquired supplied form if used, including carrier water within that commercial input. Label identity does not supply a recipe or amount.

- Selected flow: Sodium caprylate
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Sodium acetyltryptophanate (`acetyltryptophanate`)

Record actual complete commercial input if used; assay is a constituent subledger.

- Selected flow: Sodium acetyltryptophanate
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Sodium bicarbonate (`sodium_bicarbonate`)

Conditional on actual consumption, not a mandatory formulation ingredient. Preserve purchased form and strength.

- Selected flow: Sodium bicarbonate
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Sodium hydroxide solution (`sodium_hydroxide`)

Conditional actual manufacturing or cleaning input, separate functional destinations in the raw ledger without duplicate procurement.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Acetic acid solution (`acetic_acid`)

Conditional actual input; keep full supplied formulation, measured concentration and inventory changes.

- Selected flow: Acetic acid solution
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Water for injection (`wfi`)

Only externally supplied water crosses this product-input boundary. Onsite generation is an internal transfer: retain source water, purification energy, consumables and rejects once in the same expanded black box.

- Selected flow: Water for injection
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Process water (`water`)

Include actual cooling make-up, cleaning and onsite purified-water feed by submeter; no duplicate of external supplied formulations or recirculating cooling water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Electricity (`electricity`)

Include collection/testing facilities, manufacturing black boxes, clean-area HVAC, water preparation, refrigeration, QC, warehouse, rework and loading attributable to the matched cohort.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Purchased steam (`steam`)

Actual purchased heat only; onsite steam remains an internal transfer with boiler fuel, water and emissions recorded once. Retain condensate and return enthalpy basis.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Natural gas (`natural_gas`)

If actually burned onsite, retain metered gas and documented calorific basis; other actual fuels require separate atomic cards. Purchased steam does not erase onsite fuel burdens.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 1,1,1,2-Tetrafluoroethane (`r134a_makeup`)

Only if this is the actual refrigerant. Use charge, recovered mass, maintenance and stock records. Other refrigerants require their own distinct rows; no default refrigeration chemistry is assumed.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Glass vial (`vial`)

Record actual primary glass vessel consumption including rejects, breakage and samples; verify supplier composition.

- Selected flow: Glass vial
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Synthetic rubber vial stopper (`stopper`)

Conditional actual stopper; verify elastomer identity, supplied mass and rejects rather than assuming all closures have one composition.

- Selected flow: Synthetic rubber vial stopper
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Aluminium vial closure (`aluminium_cap`)

Conditional actual aluminium component; polymer component, if present, requires its own card.

- Selected flow: Aluminium vial closure
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Paperboard carton (`carton`)

Actual single paperboard package, not a bundle of all packaging. Record leaflets, labels and other actual components separately if present.

- Selected flow: Paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Printed paper leaflet (`leaflet`)

Actual printed leaflet; include material production and printing with a compatible background dataset.

- Selected flow: Printed paper leaflet
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Polypropylene filter cartridge (`filter`)

Only if actually consumed; complete disposable item and verified composition. Every other actual filter, tubing, bag, reagent, cleaning chemical or QC consumable must have an additional specific card; none is cut off by this example.

- Selected flow: Polypropylene filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net supplied finished solution (`finished_solution`)

The terminal reference exchange is exclusively the human plasma-derived 25% albumin solution, complete wet formulation, newly net supplied at the manufacturer dispatch gate. Packaging mass is excluded from reference mass but its burdens are included. No other component shares this reference row. Required qualifiers must be supplied in the concrete data package. Native identity limitations: the full selected name is "blood products; Production mix, at plant"; its comment includes human plasma-derived medicinal products. Geography/location of supply is unspecified, CAS is absent, route and grade fields are empty, and its sole property is reference Mass with factor1. The native CPC35260 label differs from target35272; retain this classification debt for data-owner review. This broad identity supports only a qualified human product exchange; it does not establish the 25% formulation, a manufacturing technology, supplier quantities or a CN/HK/global geography. Restrict this reference to the declared at-plant gate. Native comment distinguishes blood-centre whole blood/components and fractionation-centre plasma derivatives from artificially produced blood substitutes. All native name components are retained here: basename blood products, no name-property qualifier, no treatment/standards/route qualifier, production mix at plant. There are no secondary flow properties or density factors. The record establishes neither a donor geography nor clinical product comparability.

- Selected flow: blood products `04caea53-a455-4adc-b7d2-3bc102bf7971`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: csl-albuminar25-label-2013; jrc-ilcd-2010

###### Human plasma-derived immunoglobulin bulk solution (`immunoglobulin_coproduct`)

Only when actually leaving the expanded black box as a separate co-product in this supplied state. It is not the reference product and has no potency or efficacy equivalence. Every other actual co-product requires a distinct identity and row at its true allocation gate.

- Selected flow: Human plasma-derived immunoglobulin bulk solution
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_allocation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_allocation`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

##### Waste flows

###### Rejected human albumin solution (`rejected_solution`)

Actual discarded formulation, including failed zero-output batches, QC samples, expiry and returned material not recovered. Carry its full incurred manufacturing and disposal burdens; do not subtract it from inputs as avoided production.

- Selected flow: Rejected human albumin solution
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Human plasma protein residue (`plasma_residue`)

Actual wet residue; distinguish water, protein and other constituents in subledgers. No handling or pathogen-treatment procedure is provided; record actual treatment provider and burdens.

- Selected flow: Human plasma protein residue
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Pharmaceutical process wastewater (`wastewater`)

Meter each actual discharge, retain composition, destination, treatment and sludge linkage. Chemical oxygen demand is a measured indicator, not mass, protein, ethanol or reaction-water inference.

- Selected flow: Pharmaceutical process wastewater
- Flow property / unit: Volume / m3
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Spent ethanol solution (`spent_solvent`)

Actual waste solvent exported for treatment; distinguish recovered solvent sold as co-product and internal solvent recirculation.

- Selected flow: Spent ethanol solution
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Spent polypropylene filter cartridge (`used_filter`)

Actual used filter with contamination and treatment route separately documented. Other disposable wastes require separate rows.

- Selected flow: Spent polypropylene filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Waste glass vial (`glass_waste`)

Broken or rejected glass, with actual contamination and destination; do not give clean-recycling credit to contaminated glass by default.

- Selected flow: Waste glass vial
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Pharmaceutical wastewater treatment sludge (`sludge`)

Actual wet sludge and dry-solids subledger; treatment utility burden remains included, with no duplicate external wastewater-treatment inventory.

- Selected flow: Pharmaceutical wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

##### Elementary flows

###### Ethanol, to air (`ethanol_air`)

Measured or independently substantiated actual ethanol emission after control; preserve medium, time coverage and uncertainty. Not inferred from a generic VOC total without speciation.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Carbon dioxide, fossil, to air (`co2_air`)

Actual onsite fossil combustion emission with documented fuel carbon or compatible factor. Other actual species each require a separate row; upstream provider emissions are not counted again onsite.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 1,1,1,2-Tetrafluoroethane, to air (`r134a_air`)

Only actual same-refrigerant leakage; reconcile charge, recovery and inventory, independent of energy use.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

###### Water vapour, to air (`water_vapour`)

Independently measured or supported evaporation; do not fit evaporation and unknown reaction-water formation to the same mass residual.

- Selected flow: Water vapour, to air
- Flow property / unit: Mass / kg
- Amount rule: A_j / Q, reported once in this row unit; see the sole reporting operation in section 8; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ifc-pharma-biotech-2007; jrc-ilcd-2010

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | albumin_supply | First separate attributable collection/testing, product-specific manufacturing, QC, packaging, cold storage and handling by physical records. For shared plasma and shared manufacturing, retain every actual co-product and the unallocated physical inventory. Use justified physical causality where demonstrated; otherwise use explicitly justified actual allocation-gate economic values, with same-period quantities/prices and sensitivity against another defensible basis. No universal albumin allocation share, zero-burden donated plasma or automatic clinical-value allocation is supplied. | jrc-ilcd-2010 |
| a_ledger | albumin_supply | Allocate shared burdens only after raw physical closure; product-specific burdens stay with that product. Fractions leaving at different intermediate/final states use values at that exact shared gate, never final retail prices uncorrected for later processing. Allocation shares sum to one for the shared pool. Separate wastes, recirculation and co-products; no double avoided-product credit. Preserve both allocated and unallocated ledgers. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation column states only the final report basis. Every collection_method retains unnormalised raw numerators and inventory/carried burdens. Only normalize_dispatch performs A_j / Q; the card expression and this report-basis label refer to that same operation.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | albumin_supply | Terminal product and inventory gate | foreground_record | Quality and warehouse data owners: product/specification; anonymised batch/cohort; P new release; unique net dispatch receipts Q; returns; mass; density/volume if converted; opening/closing WIP and finished goods; carried burden vectors; destination; acceptance status | Owners retain raw unreduced receipts, weighing and inventory/carried-burden records. Reconcile production-to-store transfers P and store-to-dispatch movements separately, cancel internal transfers; establish Q from accepted unique net supplied wet mass, excluding undelivered stocks, duplicate acceptance and unresolved returns. No division here. | kg | Each batch/event and period close | One matched closed raw reporting period plus traced opening/closing carry-over | Declared collection/supplier/manufacturing and storage sites; no donor personal data | per 1 kg reference flow | Calibrated measurements; invoices; environmental batch ledger; stock reconciliation; full provider boundary and uncertainty |
| cp_material | albumin_supply | Actual material and consumable exchanges | foreground_record | Manufacturing/environmental data owner: each actual purchased formulation; supplied mass; assay; supplier; receipts; opening/closing raw stock; opening/closing WIP; carried burdens; rejected and zero-output batches; returns/rework; recovery; losses | Reconcile all raw-period actual consumptions and full supplied formulations with invoices, batch environmental records and stocks; constituent assays are subledgers. Include zero-output, rework and QC burdens, upstream collection and testing coverage. No enrichment or manufacturing procedure is recorded. Retain unnormalised numerators only. | kg | Each batch/event and period close | One matched closed raw reporting period plus traced opening/closing carry-over | Declared collection/supplier/manufacturing and storage sites; no donor personal data | per 1 kg reference flow | Calibrated measurements; invoices; environmental batch ledger; stock reconciliation; full provider boundary and uncertainty |
| cp_utilities | albumin_supply | Energy water and refrigeration | foreground_record | Utilities owner: separate meter readings and unit conversions; carrier; calorific value; rates/duration or integrated volume flag; water source; utility returns; refrigeration service and charge/recovery; site/time; allocation drivers | Collect raw full-period meters including idle/startup, failed batches, water preparation, clean-area services, QC, cold chain and actual finished-store/loading loads. Separate purchased utilities from internal generation; maintain disaggregated units and actual attribution records. No normalisation in collection. | kWh; MJ; m3; kg | Each batch/event and period close | One matched closed raw reporting period plus traced opening/closing carry-over | Declared collection/supplier/manufacturing and storage sites; no donor personal data | per 1 kg reference flow | Calibrated measurements; invoices; environmental batch ledger; stock reconciliation; full provider boundary and uncertainty |
| cp_packaging | albumin_supply | Packaging consumption | foreground_record | Packaging owner: each material/component; mass per item measured; purchased/used counts; reject/breakage; stock movements; formulation mass excluded from tare | Keep unreduced component totals for the matched cohort, including scrap, tests, rework and returned packaging. Count-to-mass needs actual weighed component mass. Document complete supplier composition; no default pack mass. | kg | Each batch/event and period close | One matched closed raw reporting period plus traced opening/closing carry-over | Declared collection/supplier/manufacturing and storage sites; no donor personal data | per 1 kg reference flow | Calibrated measurements; invoices; environmental batch ledger; stock reconciliation; full provider boundary and uncertainty |
| cp_waste | albumin_supply | Wastewater and individual wastes | foreground_record | Environmental/waste owner: individual stream; wet mass/volume; independently measured composition/density; treatment destination; off-spec/expiry; sludge; recovery; inventory and provider coverage | Retain complete raw transfers, sampling and treatment manifests for each waste with its actual handling burden. Reconcile mass, water and constituents without COD-to-mass inference. Include failed/zero-output and return disposal; avoid double treatment with provider datasets. No treatment operations protocol is supplied. | kg; m3 | Each batch/event and period close | One matched closed raw reporting period plus traced opening/closing carry-over | Declared collection/supplier/manufacturing and storage sites; no donor personal data | per 1 kg reference flow | Calibrated measurements; invoices; environmental batch ledger; stock reconciliation; full provider boundary and uncertainty |
| cp_emissions | albumin_supply | Individual elementary exchanges | foreground_record | Environmental owner: species; medium; actual measured mass or independently supported factor inputs; control boundary; time; uncertainty; water balance; fuel carbon; refrigerant balance | Keep raw species-specific monitoring or factor calculations before division, including control and cold-chain losses. Total VOC, COD and closure residuals cannot identify an unknown species. Separate reaction-water evidence from independent physical mass/element closure; never solve two unknowns from one residual. | kg | Each batch/event and period close | One matched closed raw reporting period plus traced opening/closing carry-over | Declared collection/supplier/manufacturing and storage sites; no donor personal data | per 1 kg reference flow | Calibrated measurements; invoices; environmental batch ledger; stock reconciliation; full provider boundary and uncertainty |
| cp_allocation | albumin_supply | Shared burdens and co-products | foreground_record | LCI accounting owner: all actual co-products; exact shared gate and state; raw physical outputs; causal driver; same-period quantities and gate prices; allocated/unallocated burdens; WIP/finished inventory carry vectors | Collect underlying records without division by Q. Preserve actual co-product states and the complete common burden pool, then apply the disclosed a_hierarchy decision and trace inventory/carried burdens to the same final supplied cohort. Record actual driver and price uncertainty. | kg; declared currency | Each batch/event and period close | One matched closed raw reporting period plus traced opening/closing carry-over | Declared collection/supplier/manufacturing and storage sites; no donor personal data | per 1 kg reference flow | Calibrated measurements; invoices; environmental batch ledger; stock reconciliation; full provider boundary and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| carry_dispatch | all inventory rows | For each exchange/burden j, retain A_j = raw-period attributable burden + opening WIP burden + opening finished-goods burden - closing WIP burden - closing finished-goods burden, with same-product/route/state cohort tracking and explicit returned-material reversal/carry adjustments. This is burden matching, not raw physical output accounting. Keep product-specific and allocated shared burdens identifiable; cancel internal transfers and do not divide here. | raw_period_burdens; opening_wip_burdens; closing_wip_burdens; opening_finished_burdens; closing_finished_burdens; return_adjustments; cp_output; cp_allocation | A_j | jrc-ilcd-2010 |
| normalize_dispatch | all inventory rows | x_j = A_j / Q. Q is the positive unique accepted net dispatched wet-solution mass at the selected plant gate in kg. This is the sole reporting division after raw conversions and carry_dispatch; flow-card amount and protocol aggregation are references to this same operation, not extra divisions. No numeric dataset can be reported when Q is zero, negative or unresolved. | A_j; Q; cp_output; cp_material; cp_utilities; cp_packaging; cp_waste; cp_emissions; cp_allocation | x_j | jrc-ilcd-2010 |
| physical_closure | albumin_supply | Reconcile complete raw physical inputs plus opening raw/WIP/finished stocks against unique dispatched solution, actual co-products, other actual external Product outlets and utility returns, wastes/emissions and closing raw/WIP/finished stocks before allocation. Keep a separate complete physical packaging ledger, including packaging carried out with dispatched goods, rejects and opening/closing packaging stocks; packaging mass remains outside solution Q. Use only actual physical masses in each applicable balance and cancel internal transfers between material, utility and packaging ledgers once. P production release is an internal transfer and is cancelled, never added again as external output. Measure total wet mass, water and independently supported protein/solvent/element balances; reaction water and actual species require independent evidence. Do not fit unknown water and another unknown outlet to a residual. | cp_output; cp_material; cp_utilities; cp_packaging; cp_waste; cp_emissions; cp_allocation | unallocated_physical_ledger | ifc-pharma-biotech-2007; jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | reference product | Match human origin, exact formulation/strength, full wet supplied state and plant gate; native family UUID alone cannot define any of these qualifiers. Site and supply geography must be measured, not inferred from the native blank geography or historical label. | Original supplier specification and anonymised batch release/dispatch records |
| q_complete | all inventory rows | Retain complete actual black-box manufacturing, upstream collection/testing, energy/water, packaging, QC, storage/loading, failure and rework burdens. Never claim packaging-only records cover manufacturing. Ordinary auxiliary UUID/provider matching is disclosed separately from final-reference identity. | Complete material/utility/waste ledger and upstream coverage matrix |
| q_inventory | all inventory rows | Opening stocks carry prior burdens, closing undelivered stocks carry burdens forward. Returns remain linked to original batch/dispatch; reverse prior dispatch and burdens when required, carry subsequent rework/storage, and count final net supplied mass once. Reacceptance does not create new production or a second delivery. | Separate production, store and dispatch reconciliations with transaction linkage and burden vectors |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_solution | Require one terminal Product output finished_solution, 1 kg complete wet solution, with the declared UUID and at-plant gate in both languages. Other real intermediates/co-products stay separate; no renaming or UUID hiding to imply another reference. No efficacy or generic blood-unit conversion. | csl-albuminar25-label-2013 |
| v_period | albumin_supply | Require positive Q, matched full raw period/cohort, complete failed/zero-output and rework burdens, physical closure and opening/closing WIP/finished-goods carry-over. Prove one normalize_dispatch division only. Do not equate P release with Q dispatch or include undelivered finished stock in Q. | jrc-ilcd-2010 |
| v_inventory | all inventory rows | Every actually present exchange must be represented atomically with complete native restrictions where selected, compatible provider boundaries, real amounts/units and a protocol owner. Missing material burdens, unresolved physical closure, unsupported species or omitted carry-over prevent a complete foreground dataset; unknowns cannot be zero-filled. | ifc-pharma-biotech-2007; jrc-ilcd-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Environmental modelling of the exactly specified human albumin solution supplied at plant |
| allowed_use | Matched formulation, human source, strength, route, site, gate and period with complete upstream and carry-over accounting |
| excluded_use | Clinical dosing, therapeutic equivalence, generic blood units, other species/fractions, recombinant route or packaging-only representation of manufacture |
| required_metadata | Product formulation and assay; original supply specification; period; site/geography; plant dispatch gate; Q and P distinction; upstream boundary; allocation; temperatures; all actual protocols and provider identities |
| required_quality_disclosure | Uncertainty, sampling, exclusions, native broad-identity/classification limits, auxiliary UUID/provider gaps, zero-output/rework and inventory carry-over; no methodology approval implied |
| update_trigger | Change in human source, formulation/strength, route, site, supply state, temperature chain, provider boundary, allocation, reference gate or inventory method |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| csl-albuminar25-label-2013 | official_guidance | CSL Behring, Albuminar-25 prescribing information, revised June2013; https://labeling.cslbehring.com/pi/us/albuminar25/en/albuminar25-prescribing-information.pdf ; retrieved 2026-10-16 | Original manufacturer label pp1-2: human plasma origin, 25 g/100mL aqueous supplied state, vial presentations and controlled-room-temperature storage. Historical US example only; no current-market guarantee, global-site assumption, environmental factor, recipe, clinical use or efficacy conversion. |
| ifc-pharma-biotech-2007 | official_guidance | World Bank Group/IFC, EHS Guidelines Pharmaceuticals and Biotechnology Manufacturing, 30April2007, pp4-5,12,19-20; https://www.ifc.org/content/dam/ifc/doc/2000/2007-pharma-biotech-ehs-guidelines-en.pdf ; retrieved/reverified 2026-10-16 | Sector environmental boundary: actual wastewater, waste, clean utilities, water preparation and monitoring. General applicability only; no product-specific yield, emission factor, operating parameter or mandatory chemical recipe. |
| jrc-ilcd-2010 | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March2010, section7.9, PDF pp275-277,283-284; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ; retrieved/reverified 2026-10-16 | Attributional subdivision, physical causality and justified exact-gate economic allocation. PCR-specific raw-period, return and carry-over rules operationalise mass/burden consistency; no blood-specific fixed share, clinical value or physiological burden factor is derived. |
