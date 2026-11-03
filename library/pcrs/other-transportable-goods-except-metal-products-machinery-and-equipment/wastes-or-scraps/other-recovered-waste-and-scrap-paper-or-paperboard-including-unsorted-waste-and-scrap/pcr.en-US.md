---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-recovered-waste-and-scrap-paper-or-paperboard-including-unsorted-waste-and-scrap
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Mixed recovered paper and paperboard supply to a repulping receiver

## 1. Scope and Applicability

This PCR covers one actual mixed used-paper/board supply lot that remains mixed across paper grades after collection, removal of prohibited or non-paper matter, dry handling and actual compaction/baling. The endpoint is its first unconditional net-material quality release by an identified repulping receiver, before entry to the pulper. Collection may be municipal or private, but the recovered paper is a specified material supply; collection of mixed residual refuse or provision of a waste-treatment service alone does not satisfy this product function. JRC reports actual mixed-paper plant outputs distinct from corrugated and graphic-paper outputs; Smurfit provides an independent mixed-packaging supply example. These sources are a transparent process synthesis, not one contemporary factory, SKU, order or recipe.

New paper; pulp including deinked pulp; finished recycled paper; textile fibres; medical or hazardous waste; material extracted from mixed residual refuse; separately traded single grades of unbleached kraft/corrugated paper (39241), bleached chemical-pulp paper not coloured in the mass (39242), or predominantly mechanical-pulp paper (39243). Constituent occurrence in a genuinely premixed lot does not make three separate purchases. A pure grade routed out of sorting is a separately accounted output under its applicable methodology, never this reference product.

The representative route uses mechanical dry contaminant removal and a wire-bound bale; it does not prescribe grade ratios, bale density, moisture, yield or utility quantities. Heating, washing of paper, chemical decontamination, shredding to a new product or pulping require additional route evidence and methodology. Cleanup water is conditional and is not paper washing. Every actual additional purchased formulation, fuel, packaging component, waste and emitted species must be added as its own atomic exchange; absent records are not zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-recovered-waste-and-scrap-paper-or-paperboard-including-unsorted-waste-and-scrap |
| classification_refs | CPC 3.0:39249; proposed narrower mixed-paper supply scope; classification acceptance governed separately |
| covered_products | Real unrepulped mixed used-paper/board supply lots; paper grades remain mixed after foreign-matter removal |
| excluded_products | New paper; pulp including deinked pulp; finished recycled paper; textile fibres; medical or hazardous waste; material extracted from mixed residual refuse; separately traded single grades of unbleached kraft/corrugated paper (39241), bleached chemical-pulp paper not coloured in the mass (39242), or predominantly mechanical-pulp paper (39243). Constituent occurrence in a genuinely premixed lot does not make three separate purchases. A pure grade routed out of sorting is a separately accounted output under its applicable methodology, never this reference product. |
| representative_product | One weighed mixed-paper bale lot accepted as feedstock by its named repulping receiver |
| production_route | Original-holder handover → collection/transport → reception and negative sorting → dry compaction/baling → actual receiver transport and unconditional release before repulping |
| market_state | A mixed paper material Product supply at the receiver gate; legal waste status disclosed separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide mixed recovered paper feedstock accepted for the receiver's specified repulping use |
| How much | 1 kg net mixed paper material at actual measured release moisture; exclude bale wire and transport packaging |
| How well | Meet the identified receiver contract and measured composition/contaminant/moisture specification; no universal grade or numerical target |
| How long or cycle | One identified supply/release cohort; repeat inspection and delivery do not create new production |
| reference_flow_link | mixed_paper_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Waste paper `d1008171-2d06-4e14-b107-7e510875203f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | lot and original holder; source paper history and inherited burden vector; actual paper-grade composition and moisture basis; mixed status and excluded-grade test; collection and transport legs; contaminant identities and dispositions; receiver and acceptance specification; first unconditional quality-release timestamp and Q; gross physical mass V and packaging tare; opening and closing WIP by exchange vector; opening and closing FG by original cohort; failed and zero-output periods; rework and returns linked to original release; actual utility supply and provider boundary; wire composition and packaging ledger; attributional allocation/value gate and residual shares; native UUID property/unit compatibility; uncertainty and unresolved rows |

Declare every qualifier in dataset metadata or equivalent process/reference-flow notes. The Product identity is a generic ELCD-reconstructed waste-paper material, not a certificate of this supplier or grade. Its Mass reference is used; secondary net/gross calorific factors of 14 and 16.4750000852581 are retained identity context only, not density, recipe, moisture, energy input or measured heating value.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use one net mixed-paper mass basis. Q is the sum of unique first unconditional receiver releases, excluding wire/packaging and duplicate reinspection; weigh actual moisture and report oven-dry paper solids separately. Commercial moisture deductions are not silently substituted for physical mass. |
| numerator_units | all inventory rows | row-specific | row-specific | Collect raw totals before division. Convert kWh to MJ with 3.6; tonne-km to kg*km with 1000. Oil uses Volume/m3; convert L to m3 with 0.001 and weigh or measure that oil's density at stated temperature only for its physical mass ledger. Integrated volumes are not multiplied by time again; integrate only genuine rates. |
| no_invented_conversion | all inventory rows | measured physical basis | declared | No assumed kg per bale or default water/oil density. Item counts require measured net mass for the same configuration. Supplied mixtures cross once as whole consignments with non-additive composition subledgers; actual on-site formulation requires each purchased ingredient and its losses. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual source-paper lot at original-holder handover, with its origin-specific prior production/recycling burden identified; not burden-free by name |
| starting_condition_role | Explicit foreground observation boundary; upstream history remains modelled and disclosed |
| product_classification_scope | Mixed paper remaining mixed, proposed subset of CPC3 39249; no coverage claim for all other paper waste |
| recursive_input_rule | Externally acquired premixed paper is recorded once with one provider/burden vector; retrieve upstream preparation and source histories without counting the same collection/baling leg twice |
| upstream_dataset_requirement | Origin-specific paper production and prior recovery inventories at actual handover state; utilities/materials/transport and waste treatment with explicit provider cut; no invented recovery rate or avoided credit |
| disclosure | Sites and period; paper-source partition; value/status transitions; transport ownership; release/WIP/FG gates; actual emissions and treatment fate; missing source history prevents a complete dataset |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_full_route | all foreground processes | Include original-holder handover, all collection and receiver transport, unloading, receiving inspection, actual removal of hazardous/non-paper intrusions, conveyors, dry compaction, wire binding, dust control, receiver unloading and final unconditional release before pulping. Reject suspected hazardous lots to the actual controlled handler; this PCR does not supply hazardous-waste treatment methodology. | jrc-paper-bref-2015; cepi-quality-control; smurfit-mixed-packaging |
| boundary_operations | recovery and cohort services | Retain all start/stop, failed loads, zero-output, idle, cleanup, rework, maintenance, losses and opening/closing WIP. Retain actual post-release storage/packaging/handling through the declared pre-pulper handover, attributed to original release cohort Qc; H is a service activity and never a production denominator. No fictitious steam or boiler is introduced. | jrc-paper-bref-2015; ilcd-attributional-2010 |
| boundary_provider | all exchanges | For each outsourced freight or treatment leg choose its explicit provider boundary once; do not add its fuel/emissions again as own operations. Own fuelled handling uses separate diesel and species exchanges. Preparation stops before repulping/deinking/papermaking; no displacement credit for those products. | jrc-paper-bref-2015; ilcd-attributional-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery | Source handover through receiver release | required | Actual source-separated mixed paper material supply; no pulping | Complete route observation with internal stage/lot ledgers | Unique first-release net mass Q |
| cohort_service | Post-release cohort services to pre-pulper handover | conditional | Actual storage or handling after first release | Service increments assigned to original cohort | Original release cohort Qc; H is service exposure only |

Every card is one actual boundary exchange. An incoming real premixed consignment and an outgoing whole mixed lot are single physical supplies, not future-choice collections. A waste outlet with several origins is counted once; its source partitions are non-additive. Chemical ingredients, source-paper fractions and water assay within one purchased lot are not additional purchases. Conditional rows require recorded presence/absence; unlisted actual exchanges must be added, not hidden in an “other” pool.

### Process: Source handover through receiver release (`recovery`)

#### Inputs

##### Product flows

###### Previously prepared mixed-paper purchase (`prepared_mixed_paper`)

Conditional actual external Product purchase replacing the corresponding quantity of mixed_paper_feed, never an extra purchase of the same paper. Generic ELCD-reconstructed Waste paper Product/Mass/kg with unspecified grade, form, route and geography; 14 net and 16.4750000852581 gross calorific conversions are not used. Document upstream sorting/baling and one provider; source grades and water remain composition subledgers.

- Selected flow: Waste paper `d1008171-2d06-4e14-b107-7e510875203f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_lots.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_lots`
- Sources: jrc-paper-bref-2015; ilcd-attributional-2010

###### Low-voltage purchased electricity (`electricity`)

Meter conveyors, baler, extraction and actual auxiliaries, including idle/start/cleanup and failed loads. Native Product is <1 kV grid-average consumption mix to user, locationOfSupply CN, with Net calorific value/MJ: only apply to matching Chinese low-voltage grid supply; different voltage, country or generation contract needs another verified flow/provider. kWh readings are converted once before allocation; no thermal fuel is inferred from the property label.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_utilities.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: jrc-paper-bref-2015; smurfit-mixed-packaging

###### Own collection and handling diesel (`diesel`)

Conditional measured diesel for owned collection vehicles and material handlers; exclude legs already covered by a complete freight provider. Native Product/Mass/kg is foreground diesel identity with grade, formulation, density, heating value, refinery route, geography and provider all unspecified; measure and disclose these where needed, never import a default density or emission factor. Fossil fraction and actual blend determine species attribution.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_utilities.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: smurfit-mixed-packaging; ilcd-attributional-2010

###### Purchased road collection and receiver freight (`freight`)

Conditional purchased road-freight service for each actual collection-to-yard and yard-to-receiver leg, including actual return/empty movements in the provider inventory. Native Product is road freight production mix at plant, reference transport performance/kg*km; no truck class, geography or provider is fixed. Use real cargo mass and distance, convert tonne-km by 1000, and match provider load/empty-trip conventions without inventing payload or counting own fuel for this leg again.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Transport performance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_transport.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_transport`
- Sources: smurfit-mixed-packaging; jrc-paper-bref-2015

###### Iron or steel bale binding wire (`wire`)

Measure one actual flexible iron/steel baling wire supplied for this bale, including breakage and retained wire stocks. Native Product/Mass/kg is Baling wire, production mix at plant; the comment explicitly includes binding paper/cardboard and typically iron/steel, while a fencing classification is an isolated taxonomic anomaly, not a physical barbed-wire requirement. Use only this physical binding article; actual coating/composition/provider are declared and no bale mass is guessed.

- Selected flow: Baling wire `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Purchased hydraulic-fluid formulation (`hydraulic_oil`)

Conditional replenishment/change of the baler hydraulic-fluid formulation, bought once as the whole base-oil-plus-additive product; components are composition subledgers. Native Product is Hydraulic Fluid with mineral or synthetic base oil plus additives, Volume/m3, without a fixed grade/location/provider; match the actual formulation and measure its volume. Physical oil mass requires independent density at recorded temperature or direct weighing; never use water density or lubricant energy factors.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_utilities.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: smurfit-mixed-packaging

###### Purchased tap water for actual cleanup (`cleanup_water`)

Conditional cleanup water, not a default washing or pulping step. Native Product/Mass/kg is treated piped municipal/potable water supplied at plant/to consumer, with local treatment variation; no raw/surface water or steam substitution. The secondary 0.001 Volume conversion is not a site density measurement; weigh supplied water or independently measure its density/state when converting a meter reading, then follow actual wastewater, retained moisture and evaporation fates.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_utilities.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: jrc-paper-bref-2015

###### Conditional LDPE protective sheet (`ldpe_cover`)

Only actual separately supplied LDPE protective film used to protect this lot; weigh it independently of paper and wire. Polymer, thickness, additives, reuse and provider are declared; no resin-pellet, food-contact recycled-polymer or another formulation UUID is substituted.

- Selected flow: Low-density polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: cepi-quality-control

##### Waste flows

###### Original-holder premixed paper consignment (`mixed_paper_feed`)

One actual incoming mixed-paper consignment, with incidental moisture and contamination in a measured non-additive composition subledger. Native Waste flow, unspecified waste paper, Mass/kg with no fixed grade/route/location: use only for the original-holder waste handover; not Product release, municipal refuse, pulp or three separately purchased paper grades. Its legal status and inherited source-paper burden are separate attributes; waste identity never makes burden zero.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_lots.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_lots`
- Sources: jrc-paper-bref-2015; jrc-recycling-2020; ilcd-attributional-2010

##### Elementary flows

###### Atmospheric oxygen for own engines (`oxygen_air_in`)

Conditional actual atmospheric molecular species crossing owned-engine boundaries, measured independently with gas state, humidity and composition for the physical balance. This is not purchased industrial gas, NOx, created paper output, a fixed air ratio or an emissions-factor default; reconcile actual inlet/outlet nitrogen, oxygen and water with fuel C/H/S and measured exhaust species.

- Selected flow: Oxygen from air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010

###### Atmospheric nitrogen throughput (`nitrogen_air_in`)

Conditional actual atmospheric molecular species crossing owned-engine boundaries, measured independently with gas state, humidity and composition for the physical balance. This is not purchased industrial gas, NOx, created paper output, a fixed air ratio or an emissions-factor default; reconcile actual inlet/outlet nitrogen, oxygen and water with fuel C/H/S and measured exhaust species.

- Selected flow: Nitrogen from air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010

###### Inlet atmospheric water vapour (`humidity_air_in`)

Conditional actual atmospheric molecular species crossing owned-engine boundaries, measured independently with gas state, humidity and composition for the physical balance. This is not purchased industrial gas, NOx, created paper output, a fixed air ratio or an emissions-factor default; reconcile actual inlet/outlet nitrogen, oxygen and water with fuel C/H/S and measured exhaust species.

- Selected flow: Water vapour from air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010

#### Outputs

##### Product flows

###### First receiver-released mixed-paper supply (`mixed_paper_release`)

The single reference output is one actual mixed-paper lot, still unrepulped and mixed across grades, newly unconditionally accepted for the named receiver; net paper excludes wire and protective film. Native generic ELCD-reconstructed Waste paper is Product/Mass/kg without a fixed composition, route, location or grade; the secondary net/gross calorific factors 14 and 16.4750000852581 supply no measured heating value, density or moisture. Source partitions of this whole lot are non-additive and share one upstream provider; the identity is not supplier certification, a reviewed LCA process or proof of end-of-waste status.

- Selected flow: Waste paper `d1008171-2d06-4e14-b107-7e510875203f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: `cp_release`
- Sources: jrc-recycling-2020; cepi-quality-control; un-cpc-2025

##### Waste flows

###### Separated unsuitable wet-strength paper (`rejected_paper`)

Conditional actual separated wet-strength paper rejected by this receiver; retain its whole measured moist mass and composition. Record distinct treatment or another evidenced receiver, never credit it as accepted mixed paper.

- Selected flow: Rejected wet-strength recovered paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Captured paper fines (`paper_fines`)

Weigh captured paper fines after extraction/sweeping, with moisture and mineral content sampled separately. Internal return is an internal transfer, external waste is one fate; neither a kiln-dust UUID nor atmospheric particulate mass is substituted for the captured solid.

- Selected flow: Captured dry paper fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Separated PET contamination (`pet_reject`)

Only measured separated PET articles, not all plastic rejects or recycled resin. Native Waste flow/Mass/kg is waste polyethylene terephthalate, production mix at plant, no grade or recycling percentage; match PET chemistry and keep its actual handler and additives/composition.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Separated polyethylene film (`pe_reject`)

Record separately identified polyethylene film actually removed from feed or damaged packaging; origin partitions do not duplicate the whole outlet. No PET or unspecified plastic-family binding; another polymer requires its own row.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Separated container glass (`glass_reject`)

Conditional chemically identified soda-lime container-glass contamination, weighed to the actual handler. Wafer-production glass, photovoltaic glass or glass manufacture residue is not this exchange.

- Selected flow: Separated soda-lime container glass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Separated unagglomerated wood (`wood_reject`)

Conditional untreated wood pieces removed from paper; coated/treated wood requires its own chemically specific row and fate. Agglomerated wood/briquette flows are physically incompatible and not used.

- Selected flow: Separated untreated non-agglomerated wood pieces
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Separated iron wire scrap (`iron_reject`)

One actual iron wire waste outlet, including detached incoming wire or failed new wire as non-additive source partitions. Record actual coating and fate; separately removed aluminium/steel items need their own physical rows, not a scrap-metal/battery collection binding.

- Selected flow: Discarded iron baling wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Separated food contamination (`food_reject`)

One actual contaminated paper reject consignment with its own paper, food solids and water assay subledger; not a generic all-residue pool. Hazardous contamination is quarantined and separately named, and the real treatment fate is retained.

- Selected flow: Separated food-contaminated paper residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Separated sandy soil (`soil_reject`)

Conditional actual physically sampled sandy soil; weigh moisture and retained organic matter, record real treatment. Do not map it to an agricultural elementary input or use it as a balancing residual for unmeasured paper and water.

- Selected flow: Separated sandy soil contamination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Spent hydraulic oil (`spent_oil`)

Only an actual mineral-oil hydraulic charge disposed after use, with measured contamination; synthetic-fluid waste requires its own row. Do not adopt a 50% oil/25% water/15% additive waste-oil recipe or a metal-machining cutting-fluid identity without compatibility.

- Selected flow: Spent mineral-based hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Collected cleanup effluent (`cleanup_effluent`)

Conditional actual whole cleanup washwater consignment to its named treatment provider, measured mass and density/state if metered volumetrically. Dissolved/suspended species are composition subledgers for an outsourced whole stream; an actual direct discharge instead requires individual measured elementary species and medium, not COD/VOC as one chemical mass.

- Selected flow: Collected paper-yard cleanup washwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_residues.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015; cepi-quality-control

##### Elementary flows

###### Own-engine fossil carbon dioxide to air (`co2_fossil`)

Only actual fossil CO2 from own fuel use, CAS124-38-9, Mass/kg, emissions to unspecified air. The ILCD generic synonym list includes broad carbon-dioxide/isotopic/ionic variants; binding here is strictly neutral gaseous fossil CO2 matching the principal name/CAS, never those other species. No combustion of paper or biogenic carbon is assumed; use measured fuel-carbon and independent species completeness evidence.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Own-engine fossil carbon monoxide to air (`co_fossil`)

Only actual gaseous fossil CO, CAS630-08-0, Mass/kg, unspecified air; native synonyms include broader cryogenic/exhaust wording, which does not alter this principal chemical identity. Use measured CO and fossil attribution; it is neither total exhaust nor a proxy for VOC or CO2.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Measured nitrogen dioxide to air (`no2`)

Conditional actual NO2 gas, CAS10102-44-0; direct candidate synonyms ambiguously include N2O4, so UUID remains unresolved pending chemical-identity review. An aggregate NOx result expressed as NO2 equivalent does not establish the mass of actual NO2.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Measured nitrogen monoxide to air (`no`)

Conditional actual NO, CAS10102-43-9; a candidate synonym list also includes nitroxyl/HNO, so no UUID is adopted without resolving that chemistry. Quantify separately from NO2; no invented NOx speciation.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Measured sulfur dioxide to air (`so2`)

Conditional real SO2 from actual fuel sulfur and measured oxidation/speciation; do not substitute purchased sulfur dioxide or total SOx. No default sulfur content, factor or removal efficiency.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Measured water evaporation to air (`water_vapour`)

Actual moisture evaporation and separately evidenced combustion-formed H2O, with independent measurements and non-additive origin partition. A water-vapour candidate classified as freshwater emission is not adopted; do not solve both water and solids losses from one residual, or infer reaction water in this dry paper route.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Paper dust below 2.5 micrometres to air (`paper_pm25`)

Only uncaptured actual paper particulate below 2.5 micrometres; measure composition and distinguish from captured paper_fines. This physical size class is disjoint from paper_pmcoarse; do not add total PM10 to PM2.5.

- Selected flow: Paper dust PM2.5 to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Paper dust 2.5–10 micrometres to air (`paper_pmcoarse`)

Only measured disjoint coarse paper-dust fraction in this size interval, with real air medium and fate. Coarser particles and each other actual emitted chemical are added separately; no fixed dust composition or collection efficiency.

- Selected flow: Paper dust above 2.5 and up to 10 micrometres to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010; jrc-paper-bref-2015

###### Residual molecular oxygen to air (`oxygen_air_out`)

Conditional actual atmospheric molecular species crossing owned-engine boundaries, measured independently with gas state, humidity and composition for the physical balance. This is not purchased industrial gas, NOx, created paper output, a fixed air ratio or an emissions-factor default; reconcile actual inlet/outlet nitrogen, oxygen and water with fuel C/H/S and measured exhaust species.

- Selected flow: Oxygen to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010

###### Molecular nitrogen to air (`nitrogen_air_out`)

Conditional actual atmospheric molecular species crossing owned-engine boundaries, measured independently with gas state, humidity and composition for the physical balance. This is not purchased industrial gas, NOx, created paper output, a fixed air ratio or an emissions-factor default; reconcile actual inlet/outlet nitrogen, oxygen and water with fuel C/H/S and measured exhaust species.

- Selected flow: Nitrogen to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_species.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: ilcd-attributional-2010

### Process: Post-release cohort services (`cohort_service`)

#### Inputs

##### Product flows

###### Low-voltage purchased electricity after release (`service_electricity`)

Meter conveyors, baler, extraction and actual auxiliaries, including idle/start/cleanup and failed loads. Native Product is <1 kV grid-average consumption mix to user, locationOfSupply CN, with Net calorific value/MJ: only apply to matching Chinese low-voltage grid supply; different voltage, country or generation contract needs another verified flow/provider. kWh readings are converted once before allocation; no thermal fuel is inferred from the property label. This card is exclusively the measured post-release service increment attached to original cohort Qc, excluding recovery-stage totals; use the original cohort's stored denominator and never create another production output.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: jrc-paper-bref-2015; smurfit-mixed-packaging

###### Own collection and handling diesel after release (`service_diesel`)

Conditional measured diesel for owned collection vehicles and material handlers; exclude legs already covered by a complete freight provider. Native Product/Mass/kg is foreground diesel identity with grade, formulation, density, heating value, refinery route, geography and provider all unspecified; measure and disclose these where needed, never import a default density or emission factor. Fossil fraction and actual blend determine species attribution. This card is exclusively the measured post-release service increment attached to original cohort Qc, excluding recovery-stage totals; use the original cohort's stored denominator and never create another production output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: smurfit-mixed-packaging; ilcd-attributional-2010

###### Purchased tap water for actual cleanup after release (`service_cleanup_water`)

Conditional cleanup water, not a default washing or pulping step. Native Product/Mass/kg is treated piped municipal/potable water supplied at plant/to consumer, with local treatment variation; no raw/surface water or steam substitution. The secondary 0.001 Volume conversion is not a site density measurement; weigh supplied water or independently measure its density/state when converting a meter reading, then follow actual wastewater, retained moisture and evaporation fates. This card is exclusively the measured post-release service increment attached to original cohort Qc, excluding recovery-stage totals; use the original cohort's stored denominator and never create another production output.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: jrc-paper-bref-2015

###### Iron or steel bale binding wire after release (`service_wire`)

Measure one actual flexible iron/steel baling wire supplied for this bale, including breakage and retained wire stocks. Native Product/Mass/kg is Baling wire, production mix at plant; the comment explicitly includes binding paper/cardboard and typically iron/steel, while a fencing classification is an isolated taxonomic anomaly, not a physical barbed-wire requirement. Use only this physical binding article; actual coating/composition/provider are declared and no bale mass is guessed. This card is exclusively the measured post-release service increment attached to original cohort Qc, excluding recovery-stage totals; use the original cohort's stored denominator and never create another production output.

- Selected flow: Baling wire `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: jrc-paper-bref-2015; cepi-quality-control

###### Purchased hydraulic-fluid formulation after release (`service_hydraulic_oil`)

Conditional replenishment/change of the baler hydraulic-fluid formulation, bought once as the whole base-oil-plus-additive product; components are composition subledgers. Native Product is Hydraulic Fluid with mineral or synthetic base oil plus additives, Volume/m3, without a fixed grade/location/provider; match the actual formulation and measure its volume. Physical oil mass requires independent density at recorded temperature or direct weighing; never use water density or lubricant energy factors. This card is exclusively the measured post-release service increment attached to original cohort Qc, excluding recovery-stage totals; use the original cohort's stored denominator and never create another production output.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: smurfit-mixed-packaging

###### Conditional LDPE protective sheet after release (`service_ldpe_cover`)

Only actual separately supplied LDPE protective film used to protect this lot; weigh it independently of paper and wire. Polymer, thickness, additives, reuse and provider are declared; no resin-pellet, food-contact recycled-polymer or another formulation UUID is substituted. This card is exclusively the measured post-release service increment attached to original cohort Qc, excluding recovery-stage totals; use the original cohort's stored denominator and never create another production output.

- Selected flow: Low-density polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: cepi-quality-control

###### Purchased road collection and receiver freight after release (`service_freight`)

Conditional purchased road-freight service for each actual collection-to-yard and yard-to-receiver leg, including actual return/empty movements in the provider inventory. Native Product is road freight production mix at plant, reference transport performance/kg*km; no truck class, geography or provider is fixed. Use real cargo mass and distance, convert tonne-km by 1000, and match provider load/empty-trip conventions without inventing payload or counting own fuel for this leg again. This card is exclusively the measured post-release service increment attached to original cohort Qc, excluding recovery-stage totals; use the original cohort's stored denominator and never create another production output.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Transport performance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: A_i,c / Q_c; use the single calculation in section 8 for this row, after raw-unit conversion and attribution; retain raw totals in cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: smurfit-mixed-packaging; jrc-paper-bref-2015

All post-release waste and emission outlets use the corresponding explicitly identified recovery cards as whole-route outlets with non-additive stage/cohort partitions in cp_residues/cp_species. Add a separate row if chemistry, medium or provider differs. These outlet cards retain all actual service quantities; no service burden or physical outlet disappears.

## 7. Allocation and Co-product Handling

The following rules apply to attributional modelling only. Physical stock balances and gross mass are established independently before allocating exchange burdens. A positive price, a waste label and legal end-of-waste are different facts; none alone establishes a zero-burden boundary.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | each exchange and operation | First assign dedicated source lots, operations and service increments directly, or use evidenced actual/virtual subdivision. Preserve the source-paper production and prior-recycling inventory vector by origin, actual grade/quality and handover state; never discard history simply because paper is recovered. Do not assign all historical product use/conversion burdens indiscriminately: identify the technically comparable true co-producing stage and the actual upstream allocation boundary. | ilcd-attributional-2010 |
| allocation_physical | remaining shared exchange | After subdivision test the determining physical causal relationship for this particular exchange and each co-function; use measured causally relevant material throughput, equipment operation or service exposure only where that exchange is determined by it. Mass is not automatically a determinant of every motor, building, separation or treatment burden; no arbitrary choice between physical and economic shares. | ilcd-attributional-2010 |
| allocation_residual | genuinely inseparable residual | Only the remaining common-process residual without an established determinant uses actual contemporaneous market values of the co-functions at the same physical condition and gate. Record quantities, currency, period, delivered state and net price/gate-fee basis; shares sum to one for that residual. No fixed yield, allocation percentage, scrap credit or avoided virgin-paper credit. | ilcd-attributional-2010 |
| allocation_value_gate | source paper and recovery service | For positive-value source paper identify prior true co-production and quality loss with documented upstream inventories; do not assume indefinite equal-quality loops or a default recycling rate. For negative-value handover distinguish prior waste-management stages from the actual process step producing valuable secondary paper; apply subdivision/causality and only then residual value allocation at that step, including the treatment-service function and actual absolute fee value. Model all prior stages in the responsible first system and retain their bridge inventory; do not transfer all preceding treatment to this secondary good or make it disappear. Zero/unknown value needs explicit methodological resolution; record an upstream evidence hold until resolved. | ilcd-attributional-2010 |
| allocation_outputs | paper lots and separated matter | Mixed-paper output is one whole supply with non-additive source fractions and one provider. A separately sold OCC, graphic grade, metal or polymer outlet has its own physical row, quality/state and actual status; route it under the appropriate method and allocate only shared burdens after the hierarchy above. Mere internal reuse, detached wire, collection service or payment does not create an automatic co-product. | un-cpc-2025; ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Retain original unnormalized records and a stage/lot/exchange ledger. Separate physical amounts, background burden vectors and allocation shares. A record-only reading is not a measured factory result; this PCR supplies protocols and no invented site values.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | recovery | mixed_paper_feed; prepared_mixed_paper | weighbridge and source genealogy | lot; holder; supplier; waste_or_product_state; net_wet_mass; dry_solids; moisture; grade_fractions; contaminants; prior_production_vector; prior_recycling_vector; value_and_fee; provider_stage_coverage | Weigh calibrated gross/tare; sample real composition/moisture and preserve original-holder transfer and upstream inventory records; track one real premixed consignment once. Store raw incoming wet/solid masses and inherited exchange vectors; composition partitions sum to the whole without new purchases; no division. | kg | each handover and lot | complete campaign including failed loads and opening lots | all original holders and preparation sites | per 1 kg reference flow | weighbridge calibration; chain of custody; assays; upstream source/value receipts |
| cp_release | recovery | mixed_paper_release | receiver quality release register | cohort; lot; first_release_time; receiver; specification; gross_mass; wire_tare; film_tare; net_mixed_paper_mass; measured_moisture; dry_solids; conditional_or_final; prior_release_id; withdrawn_acceptance | Use calibrated net weighing with independent packaging tare and representative moisture/contaminant sampling; reconcile receiver acceptance, rejection and reinspection records, including whole/partial rejection. Sum unique newly unconditionally released net paper as Q; closing FG includes any such Q still stored; do not add it again. Store Q and dry solids separately; no per-unit exchange calculation here. | kg | every load and decision | all first releases and zero-release campaigns | named receiver before the pulper | per 1 kg reference flow | signed receiver results; sampling plan; mass/tare calibration; unique release genealogy |
| cp_utilities | recovery | electricity; diesel; hydraulic_oil; cleanup_water | meters and stock changes | exchange_id; phase; lot; opening_stock; receipts; closing_stock; external_returns; meter_start; meter_end; original_unit; rate_or_integrated; time; oil_density_temperature; fuel_carbon_sulfur_hydrogen; fossil_fraction; supply_voltage_country_provider | Read calibrated meters and tank/stock ledgers for actual process, idle, cleanup, start/stop and failures; measure the individual material density/state if a mass conversion is required. Store unnormalized meter/stock deltas in their original units by phase; convert_units later; no division by Q, bales or run count. | MJ; kg; m3 | continuous meters and each receipt/change | complete campaign and opening/closing stocks | owned recovery operations only; outsourced leg excluded | per 1 kg reference flow | meter certificates; fuel assays; invoices; operator logs; density test conditions |
| cp_transport | recovery | freight | route and provider ledger | leg; lot; actual_cargo_kg; loaded_km; empty_km; return_km; vehicle_and_load; outsourced_provider_cut; original_unit; fuel_coverage | Record collection and receiver delivery routes with cargo weights and distance evidence; provider represents actual load/empty-return convention; own-vehicle fuel stays in cp_utilities. Retain raw cargo kg, km and service invoice units per leg; form physical transport service before allocation; no product normalization here. | kg*km | every leg including failed/returned load | whole declared route and campaign | original holder to yard to receiver | per 1 kg reference flow | weigh tickets; route logs; freight invoices; provider boundary map |
| cp_packaging | recovery | wire; ldpe_cover | component stock and movement ledger | component; actual_composition; empty_opening; attached_WIP_opening; attached_FG_opening; reusable_opening; purchases_P; nonpurchase_external_receipt_I; external_receipt_id; physical_origin; ownership; inherited_burden_owner; external_return_received_ER; empty_closing; attached_WIP_closing; attached_FG_closing; reusable_closing; gross_shipments_S; external_return_out_EO; waste_W; internal_reuse | Weigh each packaging component separately in empty, attached and reusable states. Record purchases P, actual first non-purchase external receipts I (including incoming supplier-attached wire or cover and first borrowed/leased packaging), external returns ER, gross shipments and breakage. Detached incoming old wire is physically received in I, not purchased again. P, I and ER are mutually exclusive for the same receipt; internal reuse is none of them. Retain raw component masses for opening + P + I + ER = closing + S + EO + W, and link actual receipt/ownership and inherited exchange vectors once. Packaging stays outside net paper Q; collect without division. Add a concrete atomic physical component interface when an existing interface does not represent an actual receipt; a physical subledger is not a second procurement or an additional copy of a whole supplied load. | kg | each receipt/packing/shipment and stocktake | whole campaign with opening/closing attached stocks | all yards, transit and receiver stock within declared handover | per 1 kg reference flow | component scales; composition/specification; stock and return tickets |
| cp_residues | recovery | each named waste outlet | weighed disposition and assay ledger | outlet_id; chemistry; source_partition; stage; cohort; wet_mass; dry_mass; water; carbon; actual_handler; treatment; legal_state; outward_returns; opening_closing_stock; offspec_load | Weigh each actual separated waste by chemistry and fate; sample mixed residue consignments and effluent whole streams. Identify new contaminants separately rather than calling them other; require actual handler/treatment records. Store raw whole-outlet mass once with disjoint non-additive origin/stage partitions and assay subledgers; all actual post-release increments retained by cohort; no division. | kg | every separation and shipment | complete campaign including cleanup, failed loads and service stages | all stages to final declared handover and named waste handler | per 1 kg reference flow | scale tickets; chemistry tests; disposal manifests; fate certificates |
| cp_species | recovery | each named elementary species | species measurement and fuel/air material balance | species; CAS; medium; particle_size; stage; cohort; source; fossil_biogenic_split; concentration; gas_volume_or_rate; duration; temperature; pressure; moisture_basis; water_formed; oxygen_in; nitrogen_in_out; captured_and_uncaptured_dust | Measure species and actual gas flow/state independently, or use a fully evidenced fuel-specific calculation with independent closure checks. Separate real NO/NO2, fossil/biogenic carbon, evaporation/combustion water and disjoint particles; add each actual emitted chemical and each required physical oxygen/nitrogen exchange. Store raw species quantities or concentration and integrated gas volume; integrate rates only once. Preserve gross physical mass before allocation; no division by product Q. | kg | each emitting operation and representative tests | whole campaign including failures, start/stop and service stages | actual owned emission points and air media | per 1 kg reference flow | laboratory method; CAS/media confirmation; fuel assay; uncertainty; independent C/H/O closure |
| cp_stock | recovery | WIP and FG genealogy | physical stock and inherited-exchange ledger | stage; lot; original_cohort; opening_WIP_mass; closing_WIP_mass; opening_WIP_exchange_vector; closing_WIP_exchange_vector; opening_FG_mass; closing_FG_mass; original_FG_burden; new_first_Q; gross_release_V; returns; rework_increment; losses; internal_transfers | Reconcile each physical stage, transit, receiving hold and FG stock with calibrated weighing and cohort genealogy; carry every exchange's inherited burden, not a single average burden or mass-only adjustment. Keep separate raw physical mass and unnormalized exchange vectors by stage/cohort; cancel internal transfers only after both sides match; no division. | kg; original exchange units | each movement and period close | opening to closing, including unsuccessful and Q=0 campaigns | all controlled sites and transit before pre-pulper handover | per 1 kg reference flow | stocktakes; movement genealogy; original burden receipts; reconciliation residuals |
| cp_service | cohort_service | service_electricity; service_diesel; service_cleanup_water; service_wire; service_hydraulic_oil; service_ldpe_cover; service_freight | post-release cohort service ledger | original_cohort; stored_first_release_Qc; service_H; stage; raw_exchange; original_unit; opening_closing_FG; packaging; loss; return; original_delivery_reversal; rework_increment; first_release_id | Measure post-release storage/handling/packing increments by actual cohort and operation. Preserve original FG burden; reverse original delivery only for the actual return and add real rework once, without a second first release. Store raw service exchange totals and H by original cohort, with the stored Qc; H is not production and no normalization occurs here. Route service wastes/emissions to cp_residues/cp_species once. | MJ; kg; m3; kg*km; original exchange units | each service operation and period close | from first release through declared pre-pulper handover | named original release cohorts and receiver storage | per 1 kg reference flow | service meters; original release register; FG genealogy; return/rework records |
| cp_allocation | recovery | each shared exchange | attribution and value-gate evidence | exchange; source_origin; dedicated_assignment; subdivision; determinant; physical_test; common_residual; outputs_and_service; quantities; same_gate_state; currency; price_period; actual_prices_fees; upstream_recycling_model; shares_and_uncertainty | Obtain metered causality/subdivision and contemporaneous same-condition market/gate-fee evidence; independently locate the prior true co-producing stage and actual recycling-value crossing. Retain dedicated/causal/residual allocations of raw exchange totals with shares summing to one at each relevant gate; no normalization here. | original exchange units; documented currency | each route/value transition and reporting period | same inventory period and actual source history | source paper, actual recovery step and all co-functions | per 1 kg reference flow | physical causal test; price/fee receipts; upstream model and scope; sensitivity record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_units | all inventory rows | Convert each raw numerator to its card unit before allocation: electricity_MJ = electricity_kWh * 3.6; oil_m3 = oil_L * 0.001; freight_kgkm = freight_tkm * 1000 or sum(actual_cargo_kg * actual_leg_km). A genuine rate is integrated once; a measured integrated volume is already total. Density is independently measured for the actual substance/state where needed, not derived from a secondary flow factor. | raw_amount; raw_unit; actual_cargo_kg; actual_leg_km; measured_density; measured_state; cp_utilities; cp_transport | converted_raw_exchange | jrc-paper-bref-2015; ilcd-attributional-2010 |
| physical_gates | all physical stages | For each physical stage and constituent: opening + real external receipts = closing + actual outward transfers + real wastes + actual emissions; internal transfers cancel between stages. Manufacturing V is gross real outgoing candidate paper, including accepted and rejected portions; Q is only unique first accepted net paper, not V. At the final receiver FG gate: opening_FG + Q + actual_external_returns = closing_FG + gross_outward_paper + external_return_out + losses + rework_to_WIP. Closing_FG already contains the still-stored portion of Q; it is not another manufacturing output. Combine the stage gates by cancelling the same internal Q/transfer exactly once. Do not add a new correction X unless it removes a proven exact duplicate already on the same side and in the same OTHER entry. | cp_lots; cp_release; cp_stock; cp_residues; cp_species | independent_stage_and_combined_physical_balances | jrc-paper-bref-2015; cepi-quality-control |
| packaging_balance | wire; ldpe_cover; service_wire | For each packaging component separately, opening_empty + opening_attached_WIP + opening_attached_FG + opening_reusable + purchases_P + nonpurchase_external_receipt_I + external_return_received_ER = closing_empty + closing_attached_WIP + closing_attached_FG + closing_reusable + gross_physical_shipments_S + external_return_out_EO + waste_W. Include transit in its actual stock gate. Internal reuse cancels, does not create a new purchase, net-paper Q or co-product. One whole waste outlet may have non-additive packaging/feed partitions; never sum them again.  I is independently measured non-purchase external ingress, including supplier-attached components and first borrowed/leased packaging; exclude receipts already in P or ER. Physical receipt and stock remain even when the upstream provider already owns the burden. Preserve the actual incoming history and ownership once; procurement burden follows verified actual supply scope and eligible use/withdrawal, not P+I as a new purchase quantity. Do not invent a second provider or charge upstream-included components again. | cp_packaging; cp_service; cp_residues | component_physical_reconciliation | jrc-paper-bref-2015; cepi-quality-control |
| attribute_exchange | all inventory rows | For every raw exchange vector, A_i,c = inherited_opening_WIP_i,c + actual_current_dedicated_i,c + causally_assigned_i,c + residual_assigned_i,c - inherited_closing_WIP_i,c. Reconcile each inherited vector with source history and the stage/lot ledger; no mass-only carryover. Keep FG original production burden with its original cohort c; post-release service increments accumulate once to that same cohort separately. Actual failed/start/stop/idle/cleanup/rework burdens are retained; they are not erased by absence of accepted output. Physical gross flows remain separate from allocated A. | converted_raw_exchange; cp_lots; cp_stock; cp_allocation; cp_service | attributable_raw_exchange_vector_A | ilcd-attributional-2010 |
| calculate_inventory | all inventory rows | For the selected release cohort c with Q_c > 0, a_i,c = A_i,c / Q_c, performed once only after convert_units and attribute_exchange. Q_c is the stored unique first-release net paper mass; this is the only product normalization. For service increments use the same original stored Q_c and accumulate raw A_i,c before this single calculation; H is never a denominator. Cards and collection aggregation refer to this result without another division. The reference Product output is 1 kg. At Q_c = 0 retain every actual raw burden and physical balance, report no per-unit result, and require explicit documented carry/assignment to a later actual cohort without inventing output. | attributable_raw_exchange_vector_A; Q_c; cp_release; cp_service | a_i,c per 1 kg reference flow | ilcd-attributional-2010 |
| independent_constituents | paper solids; water; carbon and actual species | Establish paper/filler/contaminant solids and total physical mass separately from water and relevant element balances. Independently measure at least one quantity for each independent unknown; a residual cannot fit both water and solids losses. Dry paper preparation has no assumed chemical water generation, structural-water release or combustion. For actual engines independently track fuel C/H/S, atmospheric O2/N2 throughput and real exhaust species/water; free moisture, evaporated moisture and combustion-formed water are separate origins, not extra copies of one H2O outlet. COD, BOD, TOC, VOC and NOx equivalents are indicators, not masses of invented specific species. | cp_lots; cp_utilities; cp_residues; cp_species; cp_stock | independent_mass_water_element_and_species_checks | jrc-paper-bref-2015; ilcd-attributional-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | mixed paper and receiver | Document true mixed-paper supply and receiver compatibility; no classification label, generic UUID, producer page or initial conditional acceptance establishes the actual lot's release. Test exclusions and trace one whole purchased lot/provider. | source history; representative samples; buyer specification; final release register |
| quality_temporal | all operations | Collect a representative complete reporting campaign with opening/closing stocks and service cohorts; retain failures and all nonproduction periods. Quantify uncertainty by meter, sample, allocation and provider scope; do not substitute generic producer ratios. | raw logs; calibration; sampling variance; stock genealogy; sensitivity |
| quality_sources | upstream and shared burdens | Missing source-paper inherited burden, unresolved treatment/value gate or unknown core receiver compatibility is a real dataset completeness hold. Unknown future plant quantities, an ordinary provider choice or unresolved auxiliary UUID is not a fabricated zero, methodology approval or automatic reason to discard these collection rules. | explicit gap register; lineage and source scope; unnormalized records |
| quality_native | every UUID and unit | Match principal name, all language names, synonyms/comments, CAS, route, form, geography, medium, type and every property against actual exchange; use the exact reference property/unit group chain and official Chinese basename. Unresolved auxiliary identities remain specific atomic names; they are not family bindings. | complete native identity and property/unit evidence; supplier compatibility; localized display audit |

## 9. Validation Rules

Assess both declared-method consistency and actual evidence completeness. A syntactically valid projection or a finite measurement check is not scientific, translation, supplier or classification approval.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Verify the actual mixed-paper lot remains mixed, unrepulped and compatible with its named receiver before pulping; reject residual-refuse-only/service-only cases and separately traded 39241/42/43 grades. Confirm final unconditional receiver acceptance rather than mere delivery or collection. | un-cpc-2025; jrc-recycling-2020; cepi-quality-control |
| validate_complete_route | all rows and stages | All actual inputs, losses, returns, failures, cleanup and service emissions/wastes are included as atomic identities with real fates. Check provider cuts for overlaps and omissions; upstream source history and original-cohort burdens remain explicit. Missing evidence is unknown, not zero or pass. | jrc-paper-bref-2015; ilcd-attributional-2010 |
| validate_mass | physical and packaging gates | Independently close stage, FG and combined gross physical mass, water, solids and relevant elements; trace every WIP inherited exchange and original FG burden. Closing FG already contains Q; cancel internal Q exactly once when combining gates. Check each packaging equation independently, actual external returns and gross movements, and no arbitrary X residual adjustment. | cepi-quality-control; jrc-paper-bref-2015; ilcd-attributional-2010 |
| validate_normalization | all inventory rows | Verify raw unit conversion, direct/subdivision/causal/residual attribution and vector carryover precede the one A/Q calculation; Q is first release only, services retain original Qc and H never becomes production. Q=0 preserves actual raw loads without a unit result; reinspection/returns/rework create no duplicate release. | ilcd-attributional-2010 |
| validate_native | adopted and unresolved identities | Recheck all native identity restrictions and unit dimensions, real provider compatibility, official Chinese names and required qualifiers. A chemically inconsistent synonym or wrong air/water medium requires review, not an automatic classifier exemption. UUID-free auxiliary rows remain unresolved and cannot masquerade as verified platform identities. | ilcd-attributional-2010 |
| validate_allocation | all multifunctional gates | Verify the attributional hierarchy and actual prior-life/value transition against the selected source evidence; do not use an industrial sorting paper as authority for LCA allocation, infer a fixed recovery rate, or add displacement credits. Report actual checks, skipped scope, uncertainties and holds separately. | ilcd-attributional-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual mixed-paper input before receiver repulping, with original cohort and upstream burden model |
| allowed_use | Matching mixed-paper supply, actual composition/state, accepted receiver specification and declared attributional boundary |
| excluded_use | Pulp or new paper; single separated paper grades; residual-refuse treatment; hazardous waste; universal recycling credits or assumed zero-burden feed |
| required_metadata | All §3 qualifiers; exact physical and provider gates; source origins; Q/WIP/FG/cohort genealogy; measured utility/property units; allocation/value evidence; all actual atomic flows and fates |
| required_quality_disclosure | Temporal/site representativeness; uncertainty and unknowns; measured versus calculated data; unresolved auxiliary identities; source-history/value-gate holds; scientific and translation review state |
| update_trigger | Change of source mix, receiver specification, preparation route, value/status gate, upstream provider boundary, utility supply, emission fate or measurement configuration |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes (30 June 2025), pp.201–202; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39249 includes unsorted recovered paper; adjacent 39241/42/43 boundaries; no process quantities. |
| jrc-recycling-2020 | literature | Grant, Cordle and Bridgwater; Quality of recycling: Towards an operational definition, JRC122293 (2020), §4.2 pp.57–61 and Table 4-3; doi:10.2760/225236; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC122293/final_quality_of_recycling_report.pdf | Observed source-separated mixed-paper input and mixed-paper output; receiver-specific quality and contrary ungraded output. Site observations do not establish a universal composition or numerical acceptance limit. |
| jrc-paper-bref-2015 | official_guidance | JRC Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), §6.1.1–6.1.2 printed pp.550–551 (PDF pp.588–589); https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Source handover; collection yards; removal of non-paper matter; traceability; bale wire; downstream repulping exclusion. No LCA allocation or recovery-rate evidence. |
| cepi-quality-control | extension_guidance | CEPI Paper for Recycling Quality Control Guidelines, retained publisher document, pp.2–9 and 12; https://www.cepi.org/wp-content/uploads/2022/02/PaperforRecyclingQuality-Control-GuidelinesWITHANNEX.pdf | Delivery documentation; bale integrity; moisture sampling; acceptance/conditional acceptance/refusal; contamination testing. Recommendations and commercial corrections are not universal physical yields or this PCR's mass denominator. |
| smurfit-mixed-packaging | extension_guidance | Smurfit Kappa, 5.02 Mixed packaging, publisher page snapshot 2026-10-26; https://www.smurfitkappa.com/products-and-services/recycling/502-mixed-packaging | Independent producer example of a mixed used paper/board supply and collection equipment; this particular grade excludes newspapers/magazines. It does not prove another mixed lot is 5.02 or certified, and supplies no site recipe. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §7.9.2–7.9.3 and Annex14.4 (PDF pp.275–292 and 369–374); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and exchange-specific determining physical causality; remaining market-value allocation; actual prior-life recycling/value boundary. Illustrative recycling rates and infinite-loop formulas are not defaults for heterogeneous paper. |
