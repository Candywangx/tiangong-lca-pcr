---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.heat-molded-butyl-bicycle-inner-tubes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Heat-molded butyl bicycle inner tube manufacture

## 1. Scope and Applicability

This PCR covers closed-ring, valve-equipped bicycle inner tubes made predominantly from non-halogenated butyl rubber (IIR), by onsite ingredient mixing, milling/straining, tube extrusion and cooling, end splicing, valve attachment, heated-mold vulcanization, individual acceptance inspection and supply preparation. A bicycle inner tube is an air-retaining component used inside a separate tyre casing. Its manufacture needs tube-wall, splice and valve-joint controls distinct from carcass, bead, cord and tread construction. Sources support this technical synthesis across independent manufacturers; they do not describe one common SKU or a universal recipe.

Complete pneumatic tyres, tubeless tyre inner liners, solid/cushion tyres, interchangeable treads, flaps, curing bladders, industrial hoses, open-ended repair tubes, latex and TPU tubes, autoclave-cured tubes, halobutyl-based tubes, reclaimed-rubber-feed routes and purchase-and-pack-only operations are excluded. No claim is made to all CPC 36114 products or to tyre service equivalence.

`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.heat-molded-butyl-bicycle-inner-tubes |
| classification_refs | CPC 3.0 36114 (narrower product subset) |
| covered_products | Valve-equipped heat-molded IIR bicycle inner tubes from onsite virgin-rubber compounding |
| excluded_products | Complete pneumatic tyres, tubeless tyre inner liners, solid/cushion tyres, interchangeable treads, flaps, curing bladders, industrial hoses, open-ended repair tubes, latex and TPU tubes, autoclave-cured tubes, halobutyl-based tubes, reclaimed-rubber-feed routes and purchase-and-pack-only operations are excluded. No claim is made to all CPC 36114 products or to tyre service equivalence. |
| representative_product | One declared tube size/wall and valve configuration, supplied complete |
| production_route | Ingredient mixing and filtration → extrusion/cooling → splicing/valving → heated-mold cure and inspection → storage/packing/loading |
| market_state | New, cured, accepted tube with declared valve/fittings; net product mass at net delivery |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the air-retaining inner component for a separately supplied bicycle tyre |
| How much | 1 kg net accepted delivered complete inner tube |
| How well | Declared size/wall, valve compatibility, splice integrity and leak-test acceptance |
| How long or cycle | One manufacturing-to-delivery cycle; no riding-distance or service-life equivalence |
| reference_flow_link | delivered_tube |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Inner tubes, solid or cushion tyres, interchangeable tyre treads and tyre flaps, of rubber `362630fe-314f-443f-b191-f8bed8eec674` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | tube size and compatible tyre/rim dimensions; IIR grade and complete supplier/recipe identity; wall thickness and heat-molded route; valve type and complete supplied fittings; site geography and actual utility supply; acceptance tests and hold conditions; net delivery gate and reporting period; net mass excluding packaging and test air; WIP and finished-stock quantities with carried burdens; packaging and storage/loading scope |

The native Product identity is a broad manufactured rubber-article family, production mix at plant; no geography, recipe or size is specified and its only property is Mass. This card restricts it to complete heat-molded IIR bicycle inner tubes including the declared valve/fittings. It is neither a piece-count identity nor evidence for a supplier/background dataset. Match the declared configuration and net supplied mass; do not infer density, a unit weight or a service lifetime.

The terminal reference gate is actual net accepted delivery at the manufacturing site after the declared storage, packaging and loading operations, before external outbound transport. Q is the positive net delivered mass of the same product/configuration, route, period and supplied state, excluding packaging and test air. Production release P is a separate ledger quantity. Count each physical delivery once after matched return/cancellation corrections; reinspection or reshipment does not create new production. Undelivered finished goods are excluded from Q and retain their carried burdens.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net supplied complete-tube mass including declared valve/fittings and excluding packaging/test air. Preserve native Mass as the reference; counts are auxiliary QC records and cannot substitute without measured configuration-specific net mass. No universal piece weight is supplied. |
| delivery_basis | all inventory rows | Mass | kg | Use actual positive net delivery Q, not production release P. Preserve unnormalized raw records and stocks/burden vectors. normalize_delivery is the sole reporting division; the card and aggregation fields describe that same operation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separately acquired dry virgin IIR and declared actual ingredients/whole supplied formulations, valve assemblies and utilities at named site |
| starting_condition_role | Foreground manufacturing with linked upstream production and inbound transport |
| product_classification_scope | Narrow heat-molded bicycle inner-tube subset of CPC 36114 |
| recursive_input_rule | Purchased complete inner tubes cannot replace onsite production. Returned/reworked tubes retain traced previous burdens without a recursive new-tube purchase; separately declare any true external returned product and its carried burdens. |
| upstream_dataset_requirement | Match each acquired physical form, recipe/supplier, geography, supply state and actual transport; generic identity alone is insufficient provider evidence |
| disclosure | Declare production/delivery gates, actual utility technology, raw and stock period, tests, packaging, excluded downstream transport/use/end of life and all remaining data/provider gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | all processes | Include material production through linked upstream datasets, inbound transport, all actual onsite ingredient mixing/filtration, extrusion/cooling, splicing/valving, mold curing, inspection, failures, rework, storage, packaging and loading through the declared net-delivery gate. The listed cards are a minimum for the declared route, not permission to omit an actual exchange: add each additional ingredient, supplied formulation, fuel, refrigerant, packaging component, waste or elementary species as a separate card and protocol entry. A conditional row is not_applicable only with evidence of absence; unknown is not zero. | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008` |
| boundary_terminal | all processes | The terminal reference gate is actual net accepted delivery at the manufacturing site after the declared storage, packaging and loading operations, before external outbound transport. Q is the positive net delivered mass of the same product/configuration, route, period and supplied state, excluding packaging and test air. Production release P is a separate ledger quantity. Count each physical delivery once after matched return/cancellation corrections; reinspection or reshipment does not create new production. Undelivered finished goods are excluded from Q and retain their carried burdens. | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017` |
| boundary_internal | all processes | Match compound_out/compound_in, green_out/green_in and released_tubes/released_in by batch, physical quantity and carried burdens. Cancel each internal handoff once in the consolidated dataset, including internal steam or recovered offcut loops. Opening/closing WIP and finished stock are physical stocks with burden vectors, not purchased intermediates or extra terminal outputs. Returned products retain their identity and prior burdens. |  |
| boundary_evidence | all processes | Schwalbe 2015 supports heat-molded bicycle butyl tubes, filtration, valve bonding and individual inspection. Its seven filters and 24-hour test hold are manufacturer case conditions, not universal defaults. Innovative 2017 supports the separate tube mixing-to-dispatch route; adjacent tyre-only recipe prose is excluded. EPA 2008 is a historical DRAFT generic process account, not a current legal rule or inner-tube factor source; tyre bladder/liner recipes and their factors are not adopted. No universal recipe, cure temperature/time, yield, service life or emission factor is prescribed. | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_compound | Ingredient preparation, mixing and filtration | required | Actual declared route and supplied configuration | foreground manufacturing stage | per reference flow |
| p_form | Tube extrusion, cooling, splicing and valve fitting | required | Actual declared route and supplied configuration | foreground manufacturing stage | per reference flow |
| p_cure | Heated-mold curing and acceptance inspection | required | Actual declared route and supplied configuration | foreground manufacturing stage | per reference flow |
| p_delivery | Finished storage, packaging and net delivery | required | Actual declared route and supplied configuration | foreground manufacturing stage | per reference flow |

### Process: Ingredient preparation, mixing and filtration (`p_compound`)

#### Inputs

##### Product flows

###### Virgin IIR feed (`iir_feed`)

Record the actual separately acquired dry IIR grade, lot, net mass and supplier evidence. A butadiene/styrene route is incompatible. The polymer is acquired; its polymerization is upstream, while all onsite compounding remains inside this boundary.

- Selected flow: Isobutylene-isoprene rubber, non-halogenated
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `schwalbe-tube-tech-2015`; `epa-rubber-process-2008`

###### Separately supplied reinforcing carbon black (`carbon_black`)

Use only for separately acquired carbon black. Native CAS 1333-86-4, solid commercial carbon reinforcing rubber; no grade, route or geography is fixed. The native CPC 37950 graphite-family assignment is a disclosed classification defect; consistent name, CAS and comment support the physical identity, without proving supplier grade or production technology. Carbon black already inside a purchased formulation remains its constituent subledger.

- Selected flow: Carbon Black `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

###### Separately supplied sulfur curative (`sulfur`)

Include only the actual separately acquired elemental-sulfur input to the declared cure system; retain purity and commercial form.

- Selected flow: Sulfur
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

###### Separately supplied zinc oxide activator (`zinc_oxide`)

Include the separately acquired zinc oxide only when the actual recipe uses it; a dispersed supplier product is recorded as its entire supplied formulation instead.

- Selected flow: Zinc oxide
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

###### Separately supplied stearic acid (`stearic_acid`)

Conditional recipe row for separately purchased stearic acid; do not impose a generic phr recipe.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

###### Separately supplied MBTS accelerator (`mbts`)

Conditional specific accelerator row, only if the actual recipe confirms MBTS. Resolve its commercial form; do not use it as a selector for other accelerators.

- Selected flow: 2,2-dibenzothiazyl disulfide
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

###### Separately supplied paraffinic process oil (`process_oil`)

Conditional actual oil input, measured as the whole commercial oil rather than its aromatic or hydrocarbon fractions.

- Selected flow: Paraffinic rubber process oil
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

###### Purchased aqueous sulfur dispersion (`curative_dispersion`)

Conditional one supplied sulfur dispersion, not a collection of curatives. Record net supplied wet mass, supplier composition, active sulfur and carrier water as a non-additive subledger. Suppress duplicate separately purchased sulfur/water for these same constituents. Other actual commercial formulations each require their own atomic card.

- Selected flow: Aqueous sulfur dispersion
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

###### Talc anti-tack powder (`talc`)

Measure actual anti-tack talc issued and its residual, captured and emitted destinations; do not count recycled dust as a new purchase.

- Selected flow: Talc
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `innovative-tube-process-2017`

###### Metered process electricity (`compound_electricity`)

Native identity is CN supply, 1–35 kV alternating current, grid-average consumption mix delivered to the user, referenced by Net calorific value in MJ. Use this UUID only for that matching supply. Other geographies, voltages or dedicated supply require a matching identity before dataset delivery; retain their measured electricity rather than dropping it. Convert metered kWh to MJ once using the exact unit chain factor 3.6; this energy coefficient is not density.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

#### Outputs

##### Product flows

###### Internal unvulcanized tube compound (`compound_out`)

Weigh compound transferred after all productive mixing and straining. This is an internal handoff, reconciled with compound_in and canceled in consolidation; it is not finished-tube Q.

- Selected flow: Unvulcanized butyl inner-tube compound
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### Waste flows

###### Rejected rubber strainer residue (`filter_residue`)

Measure rejected strainer residue with retained rubber/filler composition and actual treatment. Returned clean uncured rubber is an internal loop, not this waste or a fresh virgin input.

- Selected flow: Rubber strainer residue
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### Elementary flows

###### Uncaptured carbon black to air (`carbon_black_air`)

Measure only the uncaptured actual carbon black air emission; captured filter dust is a separate material/waste destination. Do not identify total dust as pure carbon black without composition evidence. Add talc and other actual dust species as separate cards.

- Selected flow: Carbon black particulate to air
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compound`
- Sources: `epa-rubber-process-2008`

### Process: Tube extrusion, cooling, splicing and valve fitting (`p_form`)

#### Inputs

##### Product flows

###### Internal tube compound received (`compound_in`)

Match compound_out mass, lot and carried burdens without another upstream purchase.

- Selected flow: Unvulcanized butyl inner-tube compound
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_form`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Complete supplied bicycle tube valve (`valve`)

Record one complete supplied valve assembly including its actual base, core, nut and cap configuration; separately supplied fittings get separate rows. Do not add embedded metal/rubber masses as duplicate purchases. Retain supplier composition for the physical mass ledger.

- Selected flow: Bicycle inner-tube valve assembly
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_form`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Fresh cooling-water make-up (`cooling_water`)

Record only boundary-crossing cooling make-up and actual purge; internal recirculation is separately metered and not repurchased. Water added inside a supplied formulation is not counted here again.

- Selected flow: Fresh process water
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_form`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Metered process electricity (`form_electricity`)

Native identity is CN supply, 1–35 kV alternating current, grid-average consumption mix delivered to the user, referenced by Net calorific value in MJ. Use this UUID only for that matching supply. Other geographies, voltages or dedicated supply require a matching identity before dataset delivery; retain their measured electricity rather than dropping it. Convert metered kWh to MJ once using the exact unit chain factor 3.6; this energy coefficient is not density.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_form`
- Sources: `epa-rubber-process-2008`

#### Outputs

##### Product flows

###### Internal spliced valved green tube (`green_out`)

Match size, extrusion length/wall, splice and valve lot after cooling, cutting and assembly; cancel against green_in after consolidation.

- Selected flow: Unvulcanized closed-ring butyl inner tube with valve
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_form`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### Waste flows

###### Discarded uncured tube offcut (`uncured_scrap`)

Only material actually sent for treatment leaves as waste. Weigh internal returned offcuts separately with carried burdens and retain all failed extrusion/splice energy.

- Selected flow: Uncured butyl rubber offcut
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_form`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Discharged cooling-water purge (`cooling_purge`)

Record discharged water mass and measured pollutants separately from freshwater and evaporation. A treatment-service input is not a second mass outlet.

- Selected flow: Cooling-circuit wastewater
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_form`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

### Process: Heated-mold curing and acceptance inspection (`p_cure`)

#### Inputs

##### Product flows

###### Internal green tube received (`green_in`)

Match green_out and preserve its carried burdens; no finished-tube purchase can replace the forming/curing inventory.

- Selected flow: Unvulcanized closed-ring butyl inner tube with valve
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Purchased curing steam (`steam`)

Conditional externally supplied steam at its declared pressure, temperature, dryness and return-condensate convention. Use actual metered enthalpy delivery and return. For onsite steam, expand the generator with each real fuel, water, chemical and emission, and cancel internal steam; do not buy steam and count its own generator fuel again.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Purchased aqueous silicone mold-release dispersion (`release_dispersion`)

Conditional one actual purchased formulation measured as supplied wet mass. Record silicone, carrier water and additives in the supplier subledger, not as additional procurement. Different actual release products need separate cards.

- Selected flow: Aqueous silicone mold-release dispersion
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Metered process electricity (`cure_electricity`)

Native identity is CN supply, 1–35 kV alternating current, grid-average consumption mix delivered to the user, referenced by Net calorific value in MJ. Use this UUID only for that matching supply. Other geographies, voltages or dedicated supply require a matching identity before dataset delivery; retain their measured electricity rather than dropping it. Convert metered kWh to MJ once using the exact unit chain factor 3.6; this energy coefficient is not density.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `epa-rubber-process-2008`

#### Outputs

##### Product flows

###### Quality-released tubes to finished storage (`released_tubes`)

This is production-release mass P, not delivery Q. The native Product identity is a broad manufactured rubber-article family, production mix at plant; no geography, recipe or size is specified and its only property is Mass. This card restricts it to complete heat-molded IIR bicycle inner tubes including the declared valve/fittings. It is neither a piece-count identity nor evidence for a supplier/background dataset. Match the declared configuration and net supplied mass; do not infer density, a unit weight or a service lifetime. Match released_in and cancel the internal handoff in consolidation; retain production testing, rejects and any destructive samples.

- Selected flow: Inner tubes, solid or cushion tyres, interchangeable tyre treads and tyre flaps, of rubber `362630fe-314f-443f-b191-f8bed8eec674`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

###### Exported steam condensate (`condensate`)

Conditional actual return/discharge of steam condensate; preserve its heat and water destination without duplicating a steam-provider return credit. Closed-loop mold water is not a purchased output.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

##### Waste flows

###### Scrapped cured inner tube (`cured_reject`)

Measure complete reject mass, including its valve if retained. Split valve recovery and remaining rubber only at the actual separation step with conserved mass; no sale credit by default.

- Selected flow: Rejected cured butyl inner tube with valve
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

##### Elementary flows

###### Measured evaporated process water (`water_vapour`)

Air compartment only; independently quantify moisture/steam evaporation with state and measurement evidence. No generic stoichiometric reaction-water factor is imposed for rubber crosslinking.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

###### Toluene emission if analytically present (`toluene_air`)

Conditional actual species-specific air emission from confirmed formulation/aid and monitoring. It is not a generic VOC remainder; add every other identified emitted species separately. Unidentified significant organics remain an explicit measurement gap, never zero or a closure fit.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

### Process: Finished storage, packaging and net delivery (`p_delivery`)

#### Inputs

##### Product flows

###### Quality-released tubes received (`released_in`)

Match released_tubes and opening finished lots with their carried burdens. The native Product identity is a broad manufactured rubber-article family, production mix at plant; no geography, recipe or size is specified and its only property is Mass. This card restricts it to complete heat-molded IIR bicycle inner tubes including the declared valve/fittings. It is neither a piece-count identity nor evidence for a supplier/background dataset. Match the declared configuration and net supplied mass; do not infer density, a unit weight or a service lifetime. Do not recreate P when a returned tube passes reinspection.

- Selected flow: Inner tubes, solid or cushion tyres, interchangeable tyre treads and tyre flaps, of rubber `362630fe-314f-443f-b191-f8bed8eec674`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Corrugated shipping carton (`carton`)

Actual separately supplied single carton mass, composition and reuse cycles; exclude it from net tube Q. Include packaging losses and returned/replaced cartons in this ledger.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Polyethylene tube bag (`pe_bag`)

Conditional one actual separately supplied polyethylene bag. Do not use this card for other polymers, labels or mixed packaging.

- Selected flow: Polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Paper product label (`label`)

Conditional one supplied printed paper label; include its supplied adhesive in supplier composition rather than duplicate raw input unless actually separately applied.

- Selected flow: Printed paper label
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### Metered process electricity (`delivery_electricity`)

Native identity is CN supply, 1–35 kV alternating current, grid-average consumption mix delivered to the user, referenced by Net calorific value in MJ. Use this UUID only for that matching supply. Other geographies, voltages or dedicated supply require a matching identity before dataset delivery; retain their measured electricity rather than dropping it. Convert metered kWh to MJ once using the exact unit chain factor 3.6; this energy coefficient is not density.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `epa-rubber-process-2008`

#### Outputs

##### Product flows

###### Net accepted supplied inner tube (`delivered_tube`)

The native Product identity is a broad manufactured rubber-article family, production mix at plant; no geography, recipe or size is specified and its only property is Mass. This card restricts it to complete heat-molded IIR bicycle inner tubes including the declared valve/fittings. It is neither a piece-count identity nor evidence for a supplier/background dataset. Match the declared configuration and net supplied mass; do not infer density, a unit weight or a service lifetime. The terminal reference gate is actual net accepted delivery at the manufacturing site after the declared storage, packaging and loading operations, before external outbound transport. Q is the positive net delivered mass of the same product/configuration, route, period and supplied state, excluding packaging and test air. Production release P is a separate ledger quantity. Count each physical delivery once after matched return/cancellation corrections; reinspection or reshipment does not create new production. Undelivered finished goods are excluded from Q and retain their carried burdens.

- Selected flow: Inner tubes, solid or cushion tyres, interchangeable tyre treads and tyre flaps, of rubber `362630fe-314f-443f-b191-f8bed8eec674`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_gate`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### Waste flows

###### Discarded corrugated carton (`waste_carton`)

Conditional actual damaged carton waste before the terminal gate. Record destination and avoid treating delivered packaging as site waste.

- Selected flow: Waste corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: n_i, the single normalized exchange defined in section 8 after raw-unit conversion and stock/burden attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | all processes | Separate sites, products, valve configurations, routes and periods first. Directly meter or trace batches before allocating shared electricity, steam, ventilation, cooling, warehouse and loading burdens using documented causal machine/occupancy records. Declare the driver, units, scope and conservation of total shared burden. Never divide shared burdens by all-tyre output while the reference cohort is inner tubes. | jrc-ilcd-2010-allocation |
| allocation_stock | all processes | The same-product delivery ledger carries opening WIP/finished-stock burden vectors forward and closing vectors out, with all actual failed/zero-output, return, repeat-test and rework burdens retained. No scrap/recycling substitution credit is automatic. A genuine separately delivered coproduct requires its own mass, destination and justified allocation; internal uncured-rubber reuse is not a coproduct. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_compound | p_compound | Atomic exchanges and batch operations | Foreground raw period ledger | batch IDs; recipe and supplied form; ingredient wet/dry masses; ingredient assay and water subledger; start/end meter readings; runtime; stage handoff IDs and masses; failures and zero-output runs; offcut return and rework; opening/closing WIP and finished lots; carried burden vector; wastes and species results | Owner: the named process production engineer, with metrology and quality sign-off. Preserve unnormalized complete raw-period numerators, failed/zero-output runs, return/rework increments and opening/closing carried burden vectors. Reconcile calibrated scales, recipe issue/return records, utility meters and internal handoffs. Preserve timestamps and actual units. Do not execute A_i/Q here. | kg; MJ; kWh; m3; h; species-specific kg | Each batch and meter interval | Complete declared period including start-up, shutdown and failures | Named site and same tube/configuration/route cohort | per reference flow | Calibration; recipe issue/return sheets; batch genealogy; meter boundaries; stock/burden reconciliation; signed dispositions |
| cp_form | p_form | Atomic exchanges and batch operations | Foreground raw period ledger | batch IDs; recipe and supplied form; ingredient wet/dry masses; ingredient assay and water subledger; start/end meter readings; runtime; stage handoff IDs and masses; failures and zero-output runs; offcut return and rework; opening/closing WIP and finished lots; carried burden vector; wastes and species results | Owner: the named process production engineer, with metrology and quality sign-off. Preserve unnormalized complete raw-period numerators, failed/zero-output runs, return/rework increments and opening/closing carried burden vectors. Reconcile calibrated scales, recipe issue/return records, utility meters and internal handoffs. Preserve timestamps and actual units. Do not execute A_i/Q here. | kg; MJ; kWh; m3; h; species-specific kg | Each batch and meter interval | Complete declared period including start-up, shutdown and failures | Named site and same tube/configuration/route cohort | per reference flow | Calibration; recipe issue/return sheets; batch genealogy; meter boundaries; stock/burden reconciliation; signed dispositions |
| cp_cure | p_cure | Atomic exchanges and batch operations | Foreground raw period ledger | batch IDs; recipe and supplied form; ingredient wet/dry masses; ingredient assay and water subledger; start/end meter readings; runtime; stage handoff IDs and masses; failures and zero-output runs; offcut return and rework; opening/closing WIP and finished lots; carried burden vector; wastes and species results | Owner: the named process production engineer, with metrology and quality sign-off. Preserve unnormalized complete raw-period numerators, failed/zero-output runs, return/rework increments and opening/closing carried burden vectors. Reconcile calibrated scales, recipe issue/return records, utility meters and internal handoffs. Preserve timestamps and actual units. Do not execute A_i/Q here. | kg; MJ; kWh; m3; h; species-specific kg | Each batch and meter interval | Complete declared period including start-up, shutdown and failures | Named site and same tube/configuration/route cohort | per reference flow | Calibration; recipe issue/return sheets; batch genealogy; meter boundaries; stock/burden reconciliation; signed dispositions |
| cp_delivery | p_delivery | Atomic exchanges and batch operations | Foreground raw period ledger | batch IDs; recipe and supplied form; ingredient wet/dry masses; ingredient assay and water subledger; start/end meter readings; runtime; stage handoff IDs and masses; failures and zero-output runs; offcut return and rework; opening/closing WIP and finished lots; carried burden vector; wastes and species results | Owner: the named process production engineer, with metrology and quality sign-off. Preserve unnormalized complete raw-period numerators, failed/zero-output runs, return/rework increments and opening/closing carried burden vectors. Reconcile calibrated scales, recipe issue/return records, utility meters and internal handoffs. Preserve timestamps and actual units. Do not execute A_i/Q here. | kg; MJ; kWh; m3; h; species-specific kg | Each batch and meter interval | Complete declared period including start-up, shutdown and failures | Named site and same tube/configuration/route cohort | per reference flow | Calibration; recipe issue/return sheets; batch genealogy; meter boundaries; stock/burden reconciliation; signed dispositions |
| cp_delivery_gate | p_delivery | Reference product and stock reconciliation | Net acceptance/delivery ledger | lot and configuration; net tube mass; valve/fittings included; packaging tare; dispatch/receipt IDs and times; cancellations/returns/reshipments; P; opening/closing finished-stock mass and burden vectors; unique supplied Q | Owner: dispatch custodian and quality manager. Weigh accepted supplied tubes on calibrated scales, subtract measured packaging tare and exclude test air. Reconcile net accepted deliveries and matched cancellations/returns by identity, not by assumption P=Q. Preserve raw delivery and stock records plus carried burdens; perform no input normalization. | kg | Each delivery and period close | Same complete period and cohort as production and stocks | Declared manufacturing-site net-delivery gate | per reference flow | Signed delivery/acceptance; calibrated tare/net weighing; stock genealogy; return corrections |
| cp_acceptance | p_cure | Mold, tube and valve acceptance | Quality and disposition record | mold and batch; actual time/temperature/pressure; wall and splice results; valve bond; air-retention test pressure/hold/temperature; pass/fail; retest; sample loss; final disposition | Owner: quality manager. Retain mold-cycle and cooling records and individual visual/leak acceptance, including failed, repeated and destructive tests. Support test conditions from the actual product specification. Record test air as an internal utility balance, not shipped product mass. | kg; actual test units | Each cycle and individual tube test | Complete matched period | Same declared bicycle tube and valve configuration | per reference flow | Test specification; equipment calibration; signed acceptance and reject trail |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert each raw quantity into its row unit once before burden attribution. Electricity MJ = measured kWh × 3.6. A rate requires its matched duration; an already integrated gas/liquid volume receives no extra time factor. A volume-to-mass conversion requires independent fluid-specific density at declared state and calibration. Formulation wet mass and assays are not additive procurement. | raw_readings; calibration; supplied_form | converted_raw |  |
| delivery_attribution | all inventory rows | For each exchange i, A_i = opening carried WIP/finished-stock burden_i + converted raw-period burden_i + traced incoming return burden_i - closing carried WIP/finished-stock burden_i - separately justified non-reference burden_i. Cancel internal transfers once. Retain all actual failed, zero-output, return, rework, storage, packing and loading increments. Use batch genealogy for stock burden vectors, not just stock mass or an assumed production/delivery ratio; do not add P and closing finished mass as two delivered outputs. The raw-period term contains only newly incurred burdens; the incoming-return term contains prior carried burdens once, excluding new reinspection/rework already recorded in raw-period increments. Reverse the matched prior delivery and restore its traced carried burdens before any redelivery; do not add both the reversal and the same return burden twice. Track actual physical stock balance separately from this burden ledger. | converted_raw; opening_burden; closing_burden; return_burden; non_reference_burden; cp_delivery_gate | A_i |  |
| normalize_delivery | all inventory rows | n_i = A_i / Q. Q is strictly positive net accepted delivered tube mass in kg after matched returns/cancellations for the same product, configuration, route, period and supplied state. This is the sole normalization operation, executed once after raw conversion and burden attribution. Amount cards and protocol aggregation refer to this same reporting operation, not subsequent divisions. If Q is zero, retain the unresolved campaign and its burdens without a normalized result. | A_i; Q; cp_delivery_gate | n_i |  |
| physical_balance | all inventory rows | Physical balance uses complete as-supplied masses and independent constituent/element ledgers, including valve/fittings, fillers, moisture, steam/condensate, wastes, measured species and opening/closing stocks. Crosslinking does not justify an invented reaction-water quantity. Determine any actual chemical water formation/consumption from a separate reaction/species evidence chain; evaporation is a separate phase transfer, not fitted reaction water. | raw_mass; composition; opening_stock; closing_stock; measured_species | mass_and_element_reconciliation | `epa-rubber-process-2008` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | Reference and every native flow | Retain native names, route, geography, medium, all properties and exact reference-unit chain. The reference family is narrowed by configuration. Carbon-black classification debt does not authorize a different material; the CN medium-voltage electricity identity is supply-limited. | Native identity and supplier specification |
| quality_complete | All raw and carried burdens | Cover the full declared period, failures, WIP, finished stocks, returns and rework. Keep independent owners and calibrated evidence; disclose missing quantities, provider matches and significant species without assuming zero. | Signed stock, batch, utility and delivery reconciliation |
| quality_evidence | Applicability of industrial sources | Independent manufacturers establish compatible process modules, not a single plant recipe. Actual mass, recipe, energy, cure cycle and acceptance conditions require foreground measurement; document every substituted condition and temporal/geographical limitation. | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all processes | Require the exact reference Product UUID, native Mass/kg chain and terminal link delivered_tube, consistent with both language renderings. Respect all native scope limits in inventory descriptions. Reject the IIR candidate whose fixed route is butadiene/styrene; do not relabel a piece-count flow as mass or infer a density from a secondary property. |  |
| validate_inventory | all processes | Check all atomic rows and raw-period batch/meter records, actual recipe and supplied-formulation subledgers, internal handoff cancellation, stocks and burden carryover, positive net delivery Q and normalization exactly once. If Q is zero or attribution remains unresolved, retain records and do not issue a normalized dataset. Do not delete rejected campaigns to improve a ratio. |  |
| validate_mass_species | all processes | Close physical total mass and relevant elemental ledgers separately: actual whole purchased inputs plus opening stocks equal net delivered product, packaging carried out with dispatched goods, other actual external Product outlets, closing stocks, actual waste/recovery and measured releases, with internal transfers canceled. Keep a separate complete packaging physical subledger of actual receipts, exports, losses and opening/closing stocks outside Q; do not add packaging mass to Q or duplicate its procurement. Retain valve metals, fillers, cure-system constituents, supplied carrier water, condensate, moisture and air balances. Identify actual emitted species using independent analysis and time-integrated monitoring. Do not fit unknown reaction water and an unknown outlet to the same residual, assume every dust is carbon black, use COD as a species mass, or manufacture a crosslinking water factor. Investigate unexplained residuals. | `epa-rubber-process-2008` |
| validate_quality | all processes | Require individual tube acceptance tied to wall/splice/valve integrity, declared leak-test conditions and disposition of rejects, plus actual mold cure and cooling records. Count sampling/destructive inspection burdens. Manufacturer case hold time or filter count cannot be used without applicability evidence. Record missing data and test-method uncertainty explicitly; identity/schema checks do not establish scientific approval. | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Upstream supply modelling of the declared tube configuration and net-delivery gate |
| excluded_use | Full tyre service comparison, all-CPC coverage, use-phase air loss, riding lifetime, or unknown configuration substitution |
| required_metadata | All required qualifiers; source IDs; raw period; gates; allocation drivers; exact provider and utility matches; recipe/commercial-form identities |
| required_quality_disclosure | Actual foreground coverage, inventory carryover, missing exchanges/species, native scope/classification debt, evidence applicability and scientific review state |
| update_trigger | Changed recipe, route, mold/valve configuration, utilities, measured losses, delivery gate, provider identity or source applicability |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| schwalbe-tube-tech-2015 | handbook | Schwalbe Technical Information Bicycle Tires, Edition 3, 2015, p.28. https://www.schwalbe.com/media/32/85/58/1694006374/Schwalbe-TechInfo-2015_GB.pdf | Butyl bicycle inner-tube identity, heat-mold route, filtration, valve bonding and individual inspection; seven-filter/24-hour conditions are manufacturer-specific, not universal. |
| innovative-tube-process-2017 | literature | Innovative Tyres & Tubes Limited, Prospectus, September 2017, printed pp.157–158 (PDF 158–159), tube process only. https://www.sebi.gov.in/sebi_data/attachdocs/oct-2017/1509101010348.pdf | Industrial tube mixing, filtering, extrusion/cooling, splicing/valve fitting, mold curing and inspection-to-packing route, distinct from adjacent tyre process; no transfer of tyre-only recipe or a common SKU claim. |
| epa-rubber-process-2008 | official_guidance | US EPA AP-42, section 4.12 Manufacture of Rubber Products, November 2008 DRAFT Final, pp.4.12-1–2. https://www.epa.gov/sites/default/files/2020-10/documents/d04s12.pdf | Historical qualitative rubber-compounding stages and additive roles only. No numerical recipe, temperature or emission factor adopted; bladder/liner cases and excluded solvent aids cannot establish an inner-tube factor; a later 2026 draft exists. |
| jrc-ilcd-2010-allocation | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March 2010, section 7.9.3, PDF pp277–278 / printed pp257–258; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional direct assignment, virtual subdivision and determining physical causality for actual shared manufacturing/storage/loading service burdens only. No product-specific recipe, quantity, yield, intensity, fixed allocation share, recycling credit or full PEF conformity; stock and normalization rules are PCR-specific consistency reasoning. |
