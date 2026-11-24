---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.articles-of-apparel-and-clothing-accessories-including-gloves-of-vulcanized-rubber-othe-10c410dd
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Chlorinated powder-free natural-rubber gloves from compounded latex

## 1. Scope and Applicability

Applies to nonsterile, unsupported chlorinated powder-free natural-rubber gloves, produced from received matured compounded aqueous latex. Fix one product specification, size, conditioned mass and declared industrial protection performance per dataset. The process route is based on the producer’s branch B, not its powder or acrylic-coating branches (`topglove-manufacture-2016`). This production reference does not establish equivalent protective service across materials or certify regulatory conformity.


The finished vulcanized glove is within the apparel/accessory heading, rather than an uncured compound or textile sheet. Exclude reclaimed rubber (36210), uncured compound and rubber stock shapes (36220), hoses (36230), belts (36240), rubberized textile fabric (36250), and non-apparel/hard-rubber articles (36270). Plastic gloves belong to 28243 and knitted textile accessories to 28229; these are excluded. Other rubber glove materials may also fall within 36260 but are outside this specific route. UNSD provides no additional explanatory paragraph for 36260 on p.177; these exclusions follow the neighboring headings, not an invented note (`un-cpc3-2025`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.articles-of-apparel-and-clothing-accessories-including-gloves-of-vulcanized-rubber-othe-10c410dd |
| classification_refs | CPC 3.0 36260; accepted narrower scope under docs/adr/2026-11-22-accept-cpc-36260-chlorinated-natural-rubber-gloves.md |
| covered_products | Nonsterile unsupported chlorinated powder-free natural-rubber gloves of one declared grade |
| excluded_products | Other rubber apparel/accessories; hard rubber; nitrile/CR/PVC gloves; textile-supported gloves; powdered or polymer-coated gloves; sterile gloves; on-site latex compounding; solvent cement dipping |
| representative_product | Chlorinated powder-free natural-rubber gloves from compounded latex |
| production_route | Received mature compound → former cleaning → coagulant dip → latex dip → pre-leach/bead → vulcanize/post-leach → chlorinate/rinse → dry/strip/pack → quality release |
| market_state | Conditioned finished gloves, unpackaged net reference mass; packaging recorded separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Declared natural-rubber glove barrier product at the quality-release gate |
| How much | 1 kg conditioned net newly quality-released gloves |
| How well | Specified size, thickness, tensile/elongation and leak/barrier acceptance criteria; customer specification and actual test method identified |
| How long or cycle | One production-release cohort; actual shelf life and intended use cycle declared, no generic durability equivalence |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Chlorinated powder-free vulcanized natural-rubber gloves |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | natural-rubber compound identity; unsupported construction; nonsterile state; powder-free chlorination route; SKU/size/thickness; test acceptance and conditioned moisture; release cohort/gate; supplied solution assays; upstream compounding provider; utilities and external treatment boundary |

All required qualifiers must be declared in the foreground package. A missing qualifier or incompatible reference identity blocks data-package completion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is newly quality-released conditioned net glove mass measured by cp_release. Weigh accepted gloves with calibrated scales excluding packaging; use measured count and lot-specific sampled net mass only when direct weighing is impractical. No invented unit weight. |
| `solution_basis` | supplied liquid feeds | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep delivered preparation mass, active-species mass and carrier water as separate analytical ledgers. One purchased preparation crosses the inventory once. Density/assay and hydration state are measured, not defaulted. |
| `gas_volume` | natural_gas | Volume | m3 | Reconcile meter and supplier reference temperature, absolute pressure, dry/wet state, composition and compressibility before linkage; unknown compatibility remains pending. |
| `electricity_basis` | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | Meter electrical energy; use the verified energy unit group `93a60a57-a3c8-11da-a746-0800200c9a66`, reference MJ and 1 kWh = 3.6 MJ. Meter energy does not establish a supplier flow or its native reference property. Verify actual geography, voltage, mix, interface and provider native property independently before linkage; never infer fuel demand or efficiency. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received matured natural-rubber compound, separate coagulant/cleaner/chlorination feeds and utilities |
| starting_condition_role | Foreground received-material gate; upstream compound production is inherited through a compatible provider |
| product_classification_scope | Only the defined glove subset within CPC36260 |
| recursive_input_rule | No same-category finished glove is assumed as a feed. Returned goods retain origin and inherited burdens; do not reclassify them as virgin latex or count repeat release as new production. |
| upstream_dataset_requirement | Provider must cover actual wet formulation and maturity, natural-rubber origin, compounding, supply grade, transport and reference amount; raw latex alone is incomplete |
| disclosure | Declare all site stages and exact handovers; imported steam/heat, on-site compounding or treatment require an expanded separate inventory before use |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_route` | Aggregate dipping and finishing as one foreground unit while retaining stage meters. Include cleaning, baths, leaching, curing, chlorination/rinsing, drying, stripping, quality testing and packaging, including rejects and start/stop losses. | `topglove-manufacture-2016` |
| `boundary_waste` | External wastewater treatment and solid-waste management burdens remain required upstream/downstream links. Do not model sewer transfer as a direct freshwater emission or omit treatment. | `epa-latex-1974` |
| `boundary_utilities` | Only actual on-site gas combustion and purchased electricity are represented. Internal heat/water recirculation is a physical internal ledger, not a second external exchange. Real external steam/condensate transfers require independent product rows and enthalpy/pressure/provider reconciliation. | `epa-gas-combustion` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| glove_manufacture | Dipping, curing, chlorination and finishing | required | Declared received-compound route only | foreground | reference_product |

### Process: Dipping and finishing (`glove_manufacture`)

#### Inputs

##### Product flows

###### Purchased matured compound (`latex_feed`)

Receive one specified wet compound with supplier composition, rubber dry content, total solids, water, stabilizer and curing-system declaration. Include upstream compounding burdens; unfilled latex or dry tyre compound is not equivalent. No on-site compounding is represented.

- Selected flow: Matured compounded natural-rubber latex, aqueous
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `topglove-manufacture-2016`; `vaisala-bath`

###### Nitric-acid former cleaner (`nitric_cleaner`)

Record delivered solution mass and assay separately from bath dilution water. The actual supplied grade must be verified; neither a 40% nor a 50% database grade supplies a default concentration.

- Selected flow: Aqueous nitric acid former-cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `topglove-manufacture-2016`

###### Alkaline former cleaner (`alkaline_cleaner`)

One purchased formulation per row, identified by SKU and component declaration. Do not infer sodium hydroxide, phosphate or detergent composition from the generic process description; split additional purchased preparations into separate rows.

- Selected flow: Aqueous alkaline former-cleaning preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `topglove-manufacture-2016`

###### Calcium-nitrate coagulant feed (`calcium_nitrate`)

Specify hydration state, calcium-nitrate assay and delivered water. Record solution as received; active salt is an analytical subledger and not a second purchased exchange. A nitrate/ammonium-nitrate fertilizer mixture is excluded.

- Selected flow: Calcium nitrate aqueous solution for glove coagulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `topglove-manufacture-2016`; `vaisala-bath`

###### Calcium-carbonate release aid (`calcium_carbonate`)

Use only actual calcium carbonate solid for the coagulant/release bath; verify grade, particle size, purity and provider. Physical identity does not establish natural versus precipitated production. If supplied as slurry, preserve water and the supplier reference basis before linkage.

- Selected flow: Calcium carbonate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `topglove-manufacture-2016`

###### Chlorination solution (`chlorine_solution`)

Identify dissolved Cl2, active-chlorine analytical basis and any acid or hypochlorite reagent separately. Pure chlorine gas and sodium hypochlorite are not the whole supplied solution. Additional real reagent feeds require their own rows; no standard recipe is prescribed.

- Selected flow: Aqueous chlorine solution for glove surface chlorination
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `topglove-manufacture-2016`

###### Purchased electricity (`electricity`)

Measure electrical energy at the declared meter/interface, converting kWh to MJ once. Include boundary transformation losses once. No supply geography, voltage or mix is assumed. Meter Energy is a physical measurement basis; the electricity product UUID, provider and native reference property remain independently unresolved until compatible original records are verified.

- Selected flow: Alternating current
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `topglove-manufacture-2016`

###### Purchased process-water makeup (`process_water`)

Account for external makeup used in washing, bath dilution, leaching and rinsing; keep meter branches and recycled circulation distinct. Convert measured volume only with measured density and temperature. Carrier water already in purchased solutions is excluded from this input.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `topglove-manufacture-2016`; `vaisala-bath`

###### Conditional on-site gas heat (`natural_gas`)

Include only if pipeline gas is actually consumed inside the boundary for ovens or hot-water heat. Reference property is Volume; document absolute pressure, temperature, dry/wet composition and compressibility and reconcile supplier/background m3. Secondary mass coefficients are not density. No default calorific value or efficiency.

- Selected flow: natural gas in the gaseous state
- Flow property / unit: Volume / m3
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-gas-combustion`

###### Corrugated shipping carton (`carton`)

This row records actual purchases only, with each separately supplied grade/preparation kept distinct. First non-purchase receipts and genuine returns use the separate material-specific rows below; do not include them in purchases. Weigh the actual single carton and specify fibre composition, coatings and provider. The candidate with a fixed 16.6% primary/83.4% recycled fibre mixture is not assigned without matching evidence. Generic packaging collections are excluded.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `topglove-manufacture-2016`

###### Conditional PE inner wrapping (`pe_film`)

This row records actual purchases only, with each separately supplied grade/preparation kept distinct. First non-purchase receipts and genuine returns use the separate material-specific rows below; do not include them in purchases. Use only actual polyethylene film; verify grade, thickness, additives, converted-bag burdens and provider. Source classification CPC29220 conflicts with name/CAS9002-88-4/film description and remains a metadata clarification debt. This is not PET. If absent, document not applicable.

- Selected flow: Polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `topglove-manufacture-2016`

###### First non-purchase receipt of corrugated shipping carton (`carton_first_receipt`)

Record the first external non-purchase receipt, whether attached to incoming material or independently loaned or supplied free of charge. Include the physical receipt even when upstream burdens are already included in a material provider. Without proof that this same article previously left this site, it is not a return. Keep ownership and embedded upstream burden evidence separately. If absent, retain evidence of absence.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation`

###### Traceable return of corrugated shipping carton (`carton_true_return`)

Record only an actual return linked to a prior external dispatch of the same physical article from this site. Retain article/lot genealogy and prior dispatch evidence, free versus attached state and inherited burden vector. A new loan, free receipt or incoming-material wrapper without that genealogy is a first receipt. Return is not a new purchase and does not recreate virgin-production burdens. Actual return transport, cleaning and repair remain separately measured loads. If absent, retain evidence of absence.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation`

###### First non-purchase receipt of polyethylene film (`pe_film_first_receipt`)

Record the first external non-purchase receipt, whether attached to incoming material or independently loaned or supplied free of charge. Include the physical receipt even when upstream burdens are already included in a material provider. Without proof that this same article previously left this site, it is not a return. Keep ownership and embedded upstream burden evidence separately. If absent, retain evidence of absence.

- Selected flow: Polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation`

###### Traceable return of polyethylene film (`pe_film_true_return`)

Record only an actual return linked to a prior external dispatch of the same physical article from this site. Retain article/lot genealogy and prior dispatch evidence, free versus attached state and inherited burden vector. A new loan, free receipt or incoming-material wrapper without that genealogy is a first receipt. Return is not a new purchase and does not recreate virgin-production burdens. Actual return transport, cleaning and repair remain separately measured loads. If absent, retain evidence of absence.

- Selected flow: Polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation`

##### Waste flows

No additional exchange declared for this route.

##### Elementary flows

No additional exchange declared for this route.

#### Outputs

##### Product flows

###### Newly quality-released gloves (`reference_product`)

Reference output: 1 kg of newly quality-released conditioned net glove mass, excluding all packaging. Q is new release mass for the aligned production cohort; count every lot once, and never add closing finished-goods stock to Q.

- Selected flow: Chlorinated powder-free vulcanized natural-rubber gloves
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `topglove-manufacture-2016`

##### Waste flows

###### Rejected vulcanized gloves (`glove_reject`)

Actual non-saleable rejects and test-consumed gloves; declare natural rubber, chlorination state, contamination and receiving treatment. A generic waste-rubber label does not verify composition or treatment compatibility. Saleable downgraded goods require a distinct product output and allocation reassessment.

- Selected flow: Waste rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `topglove-manufacture-2016`; `ilcd-allocation`

###### Separated latex skins and coagulum (`latex_solid`)

One separated latex-solid stream from dip baths or spills, if actually removed. Record wet mass, dry solids, additives, contamination and receiver. Exclude solids still contained in wastewater; do not relabel this as digested municipal sludge.

- Selected flow: Unvulcanized natural-rubber latex coagulum
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `epa-latex-1974`

###### Mixed process effluent to external treatment (`process_effluent`)

Actual mixed drain stream at the treatment handover, with volume, density, pH, solids, COD, nitrogen species, residual chlorine and composition-based metals. Preserve each source drain before mixing. This is a waste transfer, not an elementary water emission. Require a compatible external treatment dataset and its emissions.

- Selected flow: Mixed latex-glove washing and leaching wastewater to external treatment
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `epa-latex-1974`; `topglove-manufacture-2016`

##### Elementary flows

###### Ammonia loss (`ammonia`)

Latex stabilization or other actual ammonia source; reconcile actual nitrogen inputs, vent and fugitive loss. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: ammonia
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `vaisala-bath`

###### Chlorine loss (`chlorine_air`)

Actual chlorination vent/fugitive Cl2 crossing outdoors after capture; distinguish chloride and hypochlorite. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: chlorine
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `topglove-manufacture-2016`

###### Fossil CO2 (`co2_fossil`)

Use measured fossil carbon balance, including noncombustion carbonate reaction where relevant; separate natural-rubber biogenic carbon. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: carbon dioxide (fossil)
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Biogenic CO2 (`co2_biogenic`)

Record actual biogenic oxidation or degradation only; carbon remaining in glove or waste is not immediate CO2. No GHG reporting exclusion may remove a real LCI release. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: carbon dioxide (biogenic)
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ilcd-allocation`

###### Fossil methane (`methane`)

Actual gas leakage and incomplete combustion; do not treat total VOC as methane. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: methane (fossil)
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Nitrous oxide (`n2o`)

Actual combustion N2O; exclude it from NOx totals. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: nitrous oxide
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Fossil carbon monoxide (`co`)

Actual fossil CO from on-site combustion; separate any proven biogenic CO into another row. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: carbon monoxide (fossil)
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Nitrogen monoxide (`no`)

Actual NO mass, not nitrogen mass and not NO2-equivalent. Unspeciated NOx does not establish this quantity. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: nitrogen monoxide
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Nitrogen dioxide (`no2`)

Actual NO2 species mass. Do not add a NOx aggregate to separately reported NO and NO2. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Sulfur dioxide (`so2`)

Actual combustion SO2 or other proven source; reconcile sulfur in fuel/odorant and retained sulfur. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Fine particulate discharge (`pm25`)

Only particles up to 2.5 micrometres leaving the boundary after collection, including applicable combustion fractions. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: particles (PM2.5)
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Intermediate particulate discharge (`pm25_10`)

Only the nonoverlapping 2.5–10 micrometre fraction from actual handling/release; not total PM10. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: particles (PM2.5 - PM10)
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Coarse particulate discharge (`pm_over10`)

Only the greater-than-10 micrometre fraction. Collected calcium-carbonate dust returned internally is not an outdoor emission. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: particles (> PM10)
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `topglove-manufacture-2016`

###### Water vapour (`water_vapour`)

Net actual evaporation from baths and ovens plus applicable combustion water; distinguish solution carrier water, internal condensate and external wastewater. This row applies only if the species is present; retain measurement and non-detect evidence. Outdoor air, subcompartment unspecified. No positive default. For a known different receiving subcompartment use a matching verified flow.

- Selected flow: water vapour
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `topglove-manufacture-2016`

###### Formaldehyde emission (`formaldehyde`)

Conditional actual formaldehyde (CAS 50-00-0) in outdoor air, unspecified subcompartment; measured species mass only. Speciate VOC where relevant and do not add a total VOC row to its constituents.

- Selected flow: formaldehyde
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### Benzene emission (`benzene`)

Conditional actual benzene (CAS 71-43-2) in outdoor air, unspecified subcompartment; measured species mass only. Speciate VOC where relevant and do not add a total VOC row to its constituents.

- Selected flow: benzene
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_order` | Use subdivision and direct assignment first. For genuinely inseparable shared utilities, establish determining physical causality per exchange (measured heat, duty/time, throughput with evidence). Residual burdens without a causal driver use documented process-gate economic values and sensitivity analysis in this attributional model. Do not freely choose mass or revenue shares. | `ilcd-allocation` |
| `physical_ledger` | Keep the unallocated physical wet/solid/water/carbon ledger separate from attributed environmental burdens. Never multiply actual coproduct mass, internal links or wastewater handover by allocation shares. Treat ordinary non-saleable rejects as waste; no avoided-product credit is assumed. Any marketed downgraded glove triggers a separate output and allocation assessment. | `ilcd-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | glove_manufacture | reference_product | batch acceptance | lot_id; release_event_id; size; conditioned_net_mass; accepted_count; sampled_piece_mass; moisture; scale_id; acceptance_results; WIP_open; WIP_close; FG_open; FG_close; dispatch; returns; writeoffs | Calibrated net weighing or traceable count and lot-specific mass sampling; identify one release event per physical lot | kg; Item(s) | Each lot | Complete matched production cohort | All contributing stages and inventory stores | Retain raw release, WIP, FG and movement records only; no normalized values | Scale calibration, acceptance report, lot genealogy |
| cp_materials | glove_manufacture | latex_feed; nitric_cleaner; alkaline_cleaner; calcium_nitrate; calcium_carbonate; chlorine_solution | stock and assay | material_id; SKU; supplier; formulation; assay_basis; dry_rubber_content; total_solids; density; water; opening; receipts; closing; returned; transfers; lot_id | Calibrated weighing/stock records and validated chemical assays; keep baths and external feed separately Original raw aggregation constraint (collection remains undivided): Raw receipts, stock changes and assays only; no per-kg factors. The aggregation_rule reporting basis denotes the sole downstream normalize_release result, not collection-stage normalization. | kg; kg/kg | Each delivery/batch and bath change | Same cohort including start/stop and carryover | Received feeds and bath/WIP stores | per 1 kg reference flow | CoA/SDS, wet/dry assay, inventory reconciliation |
| cp_utilities | glove_manufacture | electricity; process_water; natural_gas | metering | meter_id; opening; closing; branch; timestamp; voltage; kWh; water_volume; water_density; gas_volume; T; absolute_P; wet_dry; gas_composition; Z; heating_value_basis; heat_duty; operating_time | Read calibrated submeter logs and supply specifications; reconcile shared meter branches and actual causal drivers. Retain raw meter increments and operating records without normalization or assumed conversion factors; the reporting basis is obtained only downstream by normalize_release. | kWh; m3; kg; MJ | Continuous or each shift with start/stop | Matched cohort and WIP carryover | Site utility handovers and internal distribution | per 1 kg reference flow | Calibration, gas standard-volume definition, provider specification |
| cp_packaging | glove_manufacture | carton; pe_film; carton_first_receipt; carton_true_return; pe_film_first_receipt; pe_film_true_return | weighing and stock | material_id; SKU; article_or_lot_id; composition; unit_mass; free_open; free_close; attached_WIP_open_close; attached_FG_open_close; purchase_in; first_nonpurchase_in_free_attached; true_return_in_free_attached; prior_site_dispatch_id; ownership; upstream_burden_included; inherited_burden_vector; newly_attached; detached_to_free; gross_dispatch_attached; other_out_free_attached; scrap_free_attached; lot_id | Weigh each actual material and separate purchase, first non-purchase receipt and proven same-article return, each in free/attached state. No movement is inferred from payment or burden inclusion. Retain raw movements undivided; normalize_release alone produces the reporting basis. | kg; Item(s) | Each receipt, dispatch, attachment and stock close | Matched release cohort and movement period | Free stock and attached WIP/FG; external handovers | per 1 kg reference flow | Calibrated weights, BOM, prior dispatch genealogy, loan/free-receipt records, upstream burden boundary |
| cp_wastes | glove_manufacture | glove_reject; latex_solid; process_effluent | waste handover | stream_id; source; wet_mass; dry_solids; volume; density; pH; COD; nitrogen_species; residual_chlorine; metals; date; receiver; treatment; stock_change | Weigh separate solids and meter/sample each drain before actual mixing; link receiver documentation Original raw aggregation constraint (collection remains undivided): Retain raw masses, concentrations and volume/time only. The aggregation_rule reporting basis denotes the sole downstream normalize_release result, not collection-stage normalization. | kg; m3; mg/L | Each load; flow-proportional effluent sampling | Same cohort and waste-store movement period | Manufacturing boundary to external treatment | per 1 kg reference flow | Scale/weighbridge, sampling QA and treatment acceptance |
| cp_air | glove_manufacture | individual air emission rows | stack/fugitive monitoring | species; CAS; carbon_origin; source; concentration; gas_flow; sampling_time; temperature; pressure; moisture; oxygen_correction; capture; detection_limit; particle_cut; fossil_biogenic_carbon; boundary_location | Measure post-control outdoor discharge with validated species/particle methods; separately assess fugitive loss and carbon/water closure Original raw aggregation constraint (collection remains undivided): Raw concentration, gas volume, state, time and detection data only. The aggregation_rule reporting basis denotes the sole downstream normalize_release result, not collection-stage normalization. | mg/m3; m3; h; kg | Representative operating/load and start/stop states | Same cohort with operating coverage disclosed | Each emitting source and outdoor boundary | per 1 kg reference flow | Method, calibration, blanks, uncertainty and non-detect bounds |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `release_gate` | reference_product | Q = sum of unique newly released conditioned net glove masses. Do not add FG closing stock or gross shipments. Failed/tested gloves do not enter Q. Track release cohorts through WIP; do not divide an unmatched calendar utility total by another cohort’s release. | cp_release | Q | `topglove-manufacture-2016` |
| `normalize_release` | all inventory rows | x_i = A_i / Q; A_i is the exchange amount for the matched release cohort after stock/WIP reconciliation; retain its unallocated physical amount and separately attributed burden amount where allocation applies; x_i is the exchange per 1 kg reference flow. Normalize once only. | A_i; Q; cp_release | x_i in row unit per kg gloves | `ilcd-allocation` |
| `wet_material_balance` | physical material ledger | Opening + external receipts = physical outputs + closing + measured losses. Close dry rubber, additive solids, water, carbon and relevant elements separately including bath and WIP stores. Carrier water is included once in its supplied mixture; internal recycle cancels at both ends with equal physical amount. No default yield or purity. | cp_materials; cp_wastes; cp_air; cp_release | unallocated physical ledger and residuals | `vaisala-bath`; `epa-latex-1974` |
| `stock_burden_carryover` | WIP and FG | Match material and full inherited upstream/utility burdens of opening WIP to its released cohort, retain closing WIP burdens for later release, and exclude previously released FG from Q. Separately reconcile FG opening + new release + physical returns = gross dispatch + writeoffs + FG closing. Returns retain prior burdens and are not new production by relabelling. | cp_release; cp_materials; cp_utilities | matched cohort burden ledger | `ilcd-allocation` |
| `packaging_ledger` | carton; pe_film; carton_first_receipt; carton_true_return; pe_film_first_receipt; pe_film_true_return | For each material separately, free opening + purchase_in_free + first_nonpurchase_in_free + true_return_in_free + detached_to_free = free closing + newly_attached + scrap_free + other_out_free. Attached opening on WIP/FG + purchase_in_attached + first_nonpurchase_in_attached + true_return_in_attached + newly_attached = attached closing on WIP/FG + gross_dispatch_attached + detached_to_free + scrap_attached + other_out_attached. Receipt categories are disjoint; attachment/detachment are internal and cancel. First non-purchase receipts remain physical inflows regardless of upstream burden inclusion. Preserve inherited burden vectors on true returns; do not add new production burdens. Identify each burden owner once, including any burdens already in the incoming-material provider. Internal reuse is neither purchase nor external receipt. Missing actual outward/waste exchanges require separate material-specific inventory cards before a completed dataset. Exclude packaging from Q; normalize once. | cp_packaging; cp_release | separate material/state physical and inherited burden ledgers | `ilcd-allocation` |
| `air_species_mass` | individual air emission rows | Integrate concentration times gas volume on identical temperature/pressure/wet-dry/oxygen bases, convert to species mass and add separately measured fugitive mass. Preserve detection uncertainty. Keep NO and NO2 separate; unknown NOx-as-NO2 equivalence is pending. Split cumulative PM only using compatible measured cuts: never sum PM2.5, total PM10 and total PM as independent fractions. | cp_air | A_i | `epa-gas-combustion` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | each supplied exchange | Verify original identity and provider quantity basis independently; a broad flow is usable only without contradictory material/route restrictions. | Native records, CoA/SDS, supplier reference amount |
| coverage | all stages | Record actual present, absent, below-detection and unmeasured states separately. Add each additional chemical, packaging component, consumable, waste and emission as an atomic row. Missing measurement is not zero. | Site process survey, meter/drain maps, uncertainty |
| representativeness | foreground cohort | Declare site, period, shift/load, formulation and stock coverage; historical or single-plant publications supply no general recipe, quantitative range, yield or utility factor. | Actual records and source-specific limitations |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require one unique reference_product Product output consistent with the verified final product UUID, Mass/kg and required qualifiers. Impact-indicator units do not establish a physical production quantity. | `topglove-manufacture-2016` |
| `validate_balances` | Validate physical solids/water/carbon closure, WIP/FG and both packaging ledgers separately from burden allocation. Require positive Q and once-only normalization with matched cohort coverage; unexplained residuals require investigation, not an invented balancing emission. | `ilcd-allocation` |
| `validate_native` | Each assigned UUID must match type, physical identity, CAS where provided, reference property/unit and receiving medium. Recheck provider compatibility, official Chinese name and quantity definitions; unresolved relationships remain explicit and block a completed foreground package. | `vaisala-bath` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A completed, independently assessed gate-specific glove production inventory with inherited upstream compound and external treatment links |
| excluded_use | Other glove materials/routes, whole CPC36260 coverage, medical compliance certification or equal-service comparisons without functional assessment |
| required_metadata | Exact product, cohort, physical scope, compound/provider, wet/dry basis, gate, stock inheritance and actual utilities |
| required_quality_disclosure | Measurement coverage, non-detect bounds, balances, allocation drivers, unresolved identities/provider limitations |
| update_trigger | Change to material, formulation, finishing, utility, gate, supplier, treatment or acceptance specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [UNSD CPC 3.0 Explanatory Notes, 30 June 2025, p.177](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Classification boundary only, no process method |
| `topglove-manufacture-2016` | literature | [Top Glove Introductory Document, 24 June 2016, printed pp.103–105/PDF104–106](https://links.sgx.com/FileOpen/Top%20Glove%20Corporation%20Bhd%20-%20Introductory%20Document%20%2824%20June%202016%29.ashx?App=IPO&FileID=5179) | Historical producer route B and qualitative feed/stage roles; no numeric defaults |
| `vaisala-bath` | extension_guidance | [Vaisala, Rubber Gloves Manufacturing Process, undated application note](https://www.vaisala.com/nl/node/120711) | Bath concentration monitoring and leaching makeup; diagram sequence is taken from producer, not this note; TDS not dry rubber assay |
| `epa-latex-1974` | official_guidance | [EPA440/1-74/030-a, December1974, Latex-Based Dipped Goods, printed pp.52–55](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=00000P72.TXT) | Historical qualitative latex/coagulant residue screening; no old solvent recipe, limits or quantity transferred |
| `epa-gas-combustion` | official_guidance | [EPA AP-42 1.4, Natural Gas Combustion, §1.4.3 pp.1.4-2–3, edition marked10/26, accessed2026-11-20](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf) | Conditional gas-boiler/furnace species screening only; no emission, efficiency, composition or heating-value defaults |
| `ilcd-allocation` | official_guidance | [EC JRC ILCD Handbook, Detailed Guidance, First edition March2010, §7.9.3 pp.257–258/PDF277–278](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | Attributional allocation hierarchy and virtual subdivision; no fixed shares or automatic waste credit |
