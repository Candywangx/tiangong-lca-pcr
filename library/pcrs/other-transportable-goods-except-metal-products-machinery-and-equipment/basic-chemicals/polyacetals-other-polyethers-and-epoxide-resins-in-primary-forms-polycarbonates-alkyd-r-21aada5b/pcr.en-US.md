---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polyacetals-other-polyethers-and-epoxide-resins-in-primary-forms-polycarbonates-alkyd-r-21aada5b
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# PTA-route cobalt-toned, phosphonate-stabilized amorphous PET chips

## 1. Scope and Applicability

This method covers one nominal PET homopolyester grade made on site from virgin purified terephthalic acid (PTA) and monoethylene glycol (MEG): Sb2O3-fed polycondensation catalyst, cobalt acetate tetrahydrate colour correction, and triethylphosphonoacetate (TEPA) stabilization. The route is batch/cyclic direct esterification, vacuum melt polycondensation, glycol condensation/distillation and internal return, melt filtration, water quenching, strand cutting and mechanical surface-water removal. The terminal reference is newly accepted, bulk-supplied amorphous chips, released to a declared melt-stage customer specification; it is not a claim of bottle-grade or food-contact conformity. A plant that only produces these chips as internal feed to SSP has no supplied reference output at this gate.

Exclude DMT transesterification; deliberately added IPA, CHDM or other co-monomers; recycled flakes/BHET feed; purchased PET blending, remelting or compounding; PETG, PBT, other polyesters, polyacetals, polyethers, epoxy and alkyd resins; solutions, liquid prepolymers and formulated coating/curing systems; MTR-conditioned or crystallized/SSP pellets; fibres, film, bottles and cured articles. In-situ DEG units, oligomers and catalyst residues are measured constituents, not authority to assume an intentional co-monomer recipe.

US7297721B2 Example 1 (homopolymer without post-consumer flakes), printed column 8, supports the particular PTA/MEG/Sb2O3/cobalt-acetate/TEPA combination and strand granulation. Its later SSP, example charge, elemental ppm, product limits, recycled examples and IPA copolymer example are not a default recipe, measured yield, industry range or this supplied gate. EPA describes TPA reaction water, glycol recovery, vacuum losses and the chip-supply alternative. The BREF distinguishes polymerization from spinning-chip drying/crystallization and SSP. UIF describes a different MTR conditioning/crystallization route; its claimed savings and co-monomer-containing bottle process are not transferred. All production quantities and acceptance specifications must be collected for the actual grade.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polyacetals-other-polyethers-and-epoxide-resins-in-primary-forms-polycarbonates-alkyd-r-21aada5b |
| classification_refs | CPC 3.0 34740; narrower semantic subset; no mapping acceptance is implied |
| covered_products | Bulk amorphous PTA/MEG PET homopolyester chips with separately charged Sb2O3, cobalt acetate tetrahydrate and TEPA |
| excluded_products | Exclude DMT transesterification; deliberately added IPA, CHDM or other co-monomers; recycled flakes/BHET feed; purchased PET blending, remelting or compounding; PETG, PBT, other polyesters, polyacetals, polyethers, epoxy and alkyd resins; solutions, liquid prepolymers and formulated coating/curing systems; MTR-conditioned or crystallized/SSP pellets; fibres, film, bottles and cured articles. In-situ DEG units, oligomers and catalyst residues are measured constituents, not authority to assume an intentional co-monomer recipe. |
| representative_product | PTA-route cobalt-toned, phosphonate-stabilized amorphous PET chips |
| production_route | Batch/cyclic PTA direct esterification and vacuum melt polycondensation; internal glycol recovery; filtration, quench, cutting and surface dewatering; no SSP |
| market_state | Solid amorphous chips, bulk, as supplied including measured residual moisture and additives; transport vessel tare excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply PET chips of this one melt-polymerized grade for subsequent polymer processing |
| How much | 1 kg accepted supplied chips, net of transport vessel tare |
| How well | Declared customer specification and test method for IV, DSC amorphous state/crystallinity, moisture, chip size, colour, carboxyl ends, DEG, acetaldehyde and Sb/Co/P; measured as-supplied composition; no universal numeric default |
| How long or cycle | One matched actual production campaign/reporting period including every batch, shutdown and failed run contributing burdens to the accepted output |
| reference_flow_link | pet_chips |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | polyethylene terephthalate (PET) granulate `4f19f119-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PTA rather than DMT; batch/cyclic melt route; no deliberately added co-monomers or recycled feed; separately charged Sb2O3/cobalt acetate tetrahydrate/TEPA; amorphous supplied chips and no SSP; actual acceptance specification and methods; moisture and full composition; IV/DSC/DEG/acetaldehyde/Sb/Co/P; site and supply geography; actual period and unique release lots; Q denominator and WIP burden ledger; upstream providers and utility boundary |

The reference UUID is a broad Product flow for PET granulate. Its native record does not declare CAS, intrinsic viscosity, crystallinity, formulation, grade certification, production route, supply geography, mix type or provider. Those absent qualifiers are not invented: the reference is qualified by the route, amorphous state and independently measured release data here. No generic UUID establishes an actual supplier dataset or a food-grade certificate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net accepted as-supplied chips; residual water and retained additives are part of product mass. Exclude vessel tare, stored old product, internal chips and duplicate rework releases. |
| wet_and_active | all material rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the whole purchased chemical or formulation once; assay dry/active constituents, free water and hydrate water as subledgers. Onsite dissolution uses actual separate feeds already counted; never add active-equivalent procurement a second time. |
| volume_and_energy | utility and liquid rows | Mass; energy | kg; MJ | Convert measured liquid or gas volumes using the matching independently supported density/composition and stated temperature/pressure. Integrate a rate over its duration; do not multiply an already integrated volume by time. Record kWh and convert to MJ using 3.6 MJ/kWh before normalize_period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separately acquired PTA powder, MEG liquid, Sb2O3 powder, cobalt acetate tetrahydrate and neat TEPA at material receipt; onsite catalyst/additive solution preparation and all manufacturing/recovery operations included |
| starting_condition_role | foreground unit-process starting condition; upstream chemical production remains linked background |
| product_classification_scope | Only the stated PET homopolyester grade within CPC 3.0 34740 |
| recursive_input_rule | Internal same-campaign PET rework and recovered glycol are internal loops with mass/quality/burden tracking, not new purchases or new accepted output. Purchased PET, externally returned product requiring a new boundary decision and recycled feed are outside this virgin monomer synthesis scope. |
| upstream_dataset_requirement | Verified providers for each whole chemical, water, electricity, imported heat and steam, nitrogen and packaging if used; external wastewater/waste treatment. Utility generation is a separately linked provider module, with its fuels/emissions counted there once. |
| disclosure | Declare actual site/geography, feed grades, cycle/heel, utility network interfaces, thermal carrier/temperature, steam conditions, condensate destination, water circuits, recovery returns/purges, dewatering and actual independent supply gate. No default country, energy mix or coproduct credit. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| manufacturing_gate | pet_resin | Include receipt/storage/paste preparation, separate additive dosing, esterification, vacuum melt polycondensation, all condenser/distillation/reflux and purge duties, melt filtering, quench, cutting, surface dewatering, bulk storage and acceptance. Exclude deliberate crystallization, SSP and downstream fabrication. | epa-ap42-pet-1991; ec-polymers-bref-2007; futura-pet-homopolymer-2007; uif-pet-technology |
| complete_exchanges | pet_resin | Record each actual chemical, utility, packaging component, waste outlet and elementary species as its own atomic exchange. Add a missing actual species/stream with its measurement/protocol; absence of an example card never authorizes omission. Offsite effluent is a whole waste transfer, with constituent subledgers, not a simultaneous direct water emission. | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| utility_interfaces | pet_resin | Imported heat is the measured non-steam thermal duty delivered through the heat-transfer circuit. Steam is a separate physical kg input, including ejector steam when used. Do not also assign that steam duty to imported_heat. Include actual utility generation through one linked provider, even for an onsite boiler, and disclose the module boundary rather than dropping fuels, losses or emissions. | epa-ap42-pet-1991; ec-polymers-bref-2007 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pet_resin | PTA esterification, PET melt polycondensation, recovery and amorphous chip finishing | required | This method covers one nominal PET homopolyester grade made on site from virgin purified terephthalic acid (PTA) and monoethylene glycol (MEG): Sb2O3-fed polycondensation catalyst, cobalt acetate tetrahydrate colour correction, and triethylphosphonoacetate (TEPA) stabilization. The route is batch/cyclic direct esterification, vacuum melt polycondensation, glycol condensation/distillation and internal return, melt filtration, water quenching, strand cutting and mechanical surface-water removal. The terminal reference is newly accepted, bulk-supplied amorphous chips, released to a declared melt-stage customer specification; it is not a claim of bottle-grade or food-contact conformity. A plant that only produces these chips as internal feed to SSP has no supplied reference output at this gate. | integrated foreground manufacturing process | pet_chips |

The integrated process preserves separate operation meters and stream/species ledgers; it does not add internal oligomer, melt, reflux, recovered glycol or reworked chips as external exchanges. Add a separately measured operation process only with explicit internal transfers and identical gate accounting.

### Process: PTA esterification, PET melt polycondensation, recovery and amorphous chip finishing (`pet_resin`)

#### Inputs

##### Product flows

###### PTA monomer (`pta_feed`)

Weigh whole supplied PTA; retain purity, free moisture and impurity assays. PTA is not DMT, polymer, or an elementary emission.

- Selected flow: Purified terephthalic acid powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using pta_feed raw numerator from cp_feeds and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feeds`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Fresh MEG including onsite solution solvent (`meg_feed`)

Native CAS 107-21-1; pure industrial Product, production and industrial input mix at plant. Its route label includes electrolyte solvent use; its complete comment explicitly also supports polyester/PET precursor use and ethylene-oxide hydration from ethylene. No geography, assay limit or provider is fixed. Verify actual monomer grade and upstream hydration-route compatibility; this does not identify antifreeze, purchased catalyst formulation or recycled glycol. Count all externally acquired MEG used for paste, catalyst/additive solutions and make-up once; internal recovered glycol stays a separate gross-return subledger.

- Selected flow: Ethylene glycol `3685eaf5-415b-46b2-a350-8b8cf548abbf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using meg_feed raw numerator from cp_feeds and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feeds`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Separately purchased catalyst precursor (`sb2o3_feed`)

Native CAS 1309-64-4, Sb2O3, Product production mix at plant; comment discusses production from antimony/minerals and flame-retardant use, not an exclusive use restriction. No fixed geography, catalyst grade or provider is supplied. Weigh actual powder and assay Sb/oxide/free water; onsite dissolution/complexation in already counted MEG does not create another purchased glycolate solution. Retain actual catalyst-preparation water/species evidence separately.

- Selected flow: Antimony(III) oxide `846c44a9-426c-4f77-ab68-c52c894a4213`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using sb2o3_feed raw numerator from cp_additives and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_additives`
- Sources: `futura-pet-homopolymer-2007`; `ec-polymers-bref-2007`

###### Separately charged colour-control salt (`co_acetate_feed`)

Use whole supplied Co(CH3COO)2·4H2O mass and assay Co, acetate, structural and free water independently. Do not substitute anhydrous acetate, cobalt metal or a commercial toner formulation by elemental-equivalent procurement.

- Selected flow: Cobalt(II) acetate tetrahydrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using co_acetate_feed raw numerator from cp_additives and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_additives`
- Sources: `futura-pet-homopolymer-2007`

###### Separately purchased TEPA stabilizer (`tepa_feed`)

Use actual whole liquid supply and assay; TEPA is triethyl phosphonoacetate, not triethyl phosphate, orthophosphoric acid or an elemental-phosphorus feed. Do not copy patent ppm as an amount or impose its supplier.

- Selected flow: Triethyl phosphonoacetate, neat liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using tepa_feed raw numerator from cp_additives and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_additives`
- Sources: `futura-pet-homopolymer-2007`

###### Quench and recovery water make-up (`process_water`)

Native Product mass identity has no CAS, geography, treatment route, mix or provider qualification. Its broad natural-water classification does not turn purchased de-ionised water into an elementary abstraction. Meter fresh make-up, not internal recirculation; assay incoming water and record each circuit.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using process_water raw numerator from cp_water and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Manufacturing electricity (`electricity`)

Meter actual user-side voltage and geography for all included drives, vacuum, recovery, water circulation and dewatering. No country mix is assumed. Preserve raw kWh and network/provider boundary.

- Selected flow: Medium-voltage grid electricity
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q once only, using electricity raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Non-steam heat supplied (`imported_heat`)

Measure actual non-steam enthalpy duty and carrier temperatures for reaction/recovery. The heat-generation module owns its carrier make-up, leakage, fuel and combustion inventory; include that module once.

- Selected flow: Imported thermal energy through a heat-transfer circuit
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q once only, using imported_heat raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Steam including vacuum ejector use (`steam_feed`)

When actually used, meter physical steam mass and pressure/temperature/quality, with enthalpy only as a conversion subledger. Track condenser liquid, vapour and return destinations; never double count its heat in imported_heat. A pump-only vacuum system needs documented non-applicability of ejector steam, not an assumed zero total heat.

- Selected flow: Process steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using steam_feed raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Inerting nitrogen (`nitrogen_feed`)

Record actual gas supply purity/state and metered mass, or integrated volume with supported gas conditions. A liquid nitrogen identity cannot stand for gaseous delivery without its vaporization boundary. Internal circulation is not purchased make-up.

- Selected flow: Gaseous nitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using nitrogen_feed raw numerator from cp_utilities and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Incoming chemical sack component (`kraft_sack`)

Conditional physical packaging component at receipt; record actual measured sack composition/tare and keep chemical net mass separate. Assign upstream packaging burden here only if excluded from the linked whole chemical provider; never add it twice. Additional liner or closure components need separate actual rows. Bulk supplied PET itself uses no assumed sack.

- Selected flow: Kraft paper chemical sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using kraft_sack raw numerator from cp_solids and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solids`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted supplied amorphous PET chips (`pet_chips`)

The reference UUID is a broad Product flow for PET granulate. Its native record does not declare CAS, intrinsic viscosity, crystallinity, formulation, grade certification, production route, supply geography, mix type or provider. Those absent qualifiers are not invented: the reference is qualified by the route, amorphous state and independently measured release data here. No generic UUID establishes an actual supplier dataset or a food-grade certificate.

- Selected flow: polyethylene terephthalate (PET) granulate `4f19f119-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-ap42-pet-1991`; `futura-pet-homopolymer-2007`

###### Externally supplied recovered glycol (`export_glycol`)

Conditional output only when actually transferred as a separate product with a specification, measured mass/composition and destination. Internal reflux/reuse is not this exchange. A recovered mixture cannot silently use the fresh pure EO-hydration glycol identity. Its appearance requires the explicit coproduct assessment in section 7.

- Selected flow: Recovered ethylene glycol liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using export_glycol raw numerator from cp_recovery and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

##### Waste flows

###### Exported off-spec PET chips (`pet_reject`)

Native Waste flow, production mix at plant, Mass. Comment describes non-degradable single-use PET, disposal/recycling, containers, packaging and textiles; it supplies no fixed geography, grade, contamination limit or provider. Use only physically identified PET scrap; it does not identify polymer/catalyst filter cake. Weigh actual exported rejects including unrecoverable start-up output; returned/reworked chips stay internal until genuinely discarded.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using pet_reject raw numerator from cp_solids and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solids`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Aqueous transfer to treatment (`aqueous_effluent`)

One actual combined aqueous outlet at the treatment handoff, measured as whole wet effluent. Retain separately assayed water, EG, DEG, acetaldehyde, dissolved oligomers, Sb, Co and P; COD is a quality indicator, not chemical mass, carbon speciation or reaction-water determination. Physically separate outlets need separate rows.

- Selected flow: Aqueous PET esterification and glycol-recovery effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using aqueous_effluent raw numerator from cp_water and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Glycol distillation purge (`glycol_bottoms`)

Weigh the actual whole wet bottoms; assay EG/DEG, oligomer, water and additive-derived constituents independently. Do not represent this mixed stream as pure glycol, methanol or an oil-refinery residue.

- Selected flow: PET glycol-recovery distillation bottoms
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using glycol_bottoms raw numerator from cp_recovery and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Filter-retained PET and catalyst residue (`melt_filter_cake`)

Measure one physical filter cake stream and its polymer, Sb/Co/P and moisture content; filter medium replacement is a distinct input/waste component when actually used. Do not infer this amount from unexplained mass loss.

- Selected flow: PET melt-filtration cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using melt_filter_cake raw numerator from cp_solids and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solids`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Empty incoming sack after dosing (`spent_sack`)

Conditional counterpart of actual incoming sack; measure residual contamination and tare without recording retained chemicals again as consumption. A contaminated sack and its treatment differ from clean paper recycling.

- Selected flow: Empty kraft paper chemical sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using spent_sack raw numerator from cp_solids and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solids`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

##### Elementary flows

###### EG vapour release (`eg_air`)

Quantify EG after actual condensers and recovery, including storage/vacuum and cooling-circuit losses. State the actual air compartment and species assay; an unmeasured value is not zero.

- Selected flow: Ethylene glycol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using eg_air raw numerator from cp_air and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Acetaldehyde release (`aa_air`)

Measure actual acetaldehyde separately; retain actual degradation/speciation evidence, not total VOC or ideal monomer conversion. State the actual air compartment and species assay; an unmeasured value is not zero.

- Selected flow: Acetaldehyde to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using aa_air raw numerator from cp_air and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Water vapour outlet (`water_air`)

Measure vapour/evaporation by actual outlet humidity and flow or independent condensate/utility records; distinguish incoming free/hydrate/steam water and reaction water. State the actual air compartment and species assay; an unmeasured value is not zero.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using water_air raw numerator from cp_air and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### PTA dust release (`pta_air`)

Measure escaped PTA dust after capture, separately from collected dust internally returned to paste. State the actual air compartment and species assay; an unmeasured value is not zero.

- Selected flow: Terephthalic acid particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using pta_air raw numerator from cp_air and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### PET dust release (`pet_air`)

Measure actual PET dust at cutting, surface dewatering, transfer and storage; captured fines returned internally are not air emissions. State the actual air compartment and species assay; an unmeasured value is not zero.

- Selected flow: PET particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using pet_air raw numerator from cp_air and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Nitrogen vent (`nitrogen_air`)

Track purchased inert gas leaving the boundary, with any ambient-air carrier balance separately documented; never infer organic contaminant mass from nitrogen closure. State the actual air compartment and species assay; an unmeasured value is not zero.

- Selected flow: Dinitrogen to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using nitrogen_air raw numerator from cp_air and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

###### Catalyst precursor dust (`sb2o3_air`)

When actual powder handling releases Sb2O3, measure it after capture separately from polymer dust and retained catalyst. Other actual Co/P-bearing particulate species require individual rows. State the actual air compartment and species assay; an unmeasured value is not zero.

- Selected flow: Antimony trioxide particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q once only, using sb2o3_air raw numerator from cp_air and cp_carry after raw unit conversion; the sole period reporting division is defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-pet-1991`; `ec-polymers-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | pet_resin | Retain independently metered operations and internal recovery once. Internal glycol reflux, heel and PET rework are not coproducts; do not award avoided-virgin-production or waste-treatment credits. Assign failed/unrecoverable output burdens to the matched actual production cohort. | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| actual_coproduct | export_glycol | If a marketable recovered glycol output exists, disclose specification, quantities, prices, destination, separate purification duties and any shared burdens. Prefer justified subdivision. This single-main-product profile supplies no default economic/mass split: unresolved joint allocation blocks the concrete dataset, and requires a documented physically or otherwise justified study allocation and review before use. Do not hide that output in Q or silently treat it as waste. | epa-ap42-pet-1991; ec-polymers-bref-2007 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocol collection_method fields retain undivided raw period numerators and stock/burden carry data. aggregation_rule is the target reporting basis of normalize_period only; it performs no second A/Q. Failure, zero-output, returns, rework and WIP records remain complete even when Q is zero. These are prospective collection requirements, not claims that factory measurements already exist.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feeds | pet_resin | external monomer receipts/charges | foreground_record | lot; supplier; route; net supplied mass; feed assay; free water; issue/return; opening/closing stock; timestamp | Owner: materials custodian and production accountant. Use calibrated receipt/charge weights and tank/silo reconciliation for the complete period; keep actual fresh feed and internal recovery/rework ledgers distinct. Preserve undivided raw kg and all failed-run feed; no A/Q here. | kg | each receipt/charge/return and period endpoints | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | calibration; receipt/issue tickets; monomer COA; tank reconciliation |
| cp_additives | pet_resin | whole additive feeds and species subledgers | foreground_record | lot; whole feed mass; Sb2O3 assay; cobalt acetate hydration/free water; TEPA assay; carrier; onsite preparation batch; stock/returns; product/residue Sb/Co/P | Owner: dosing operator and analytical laboratory. Weigh each separately purchased compound and trace onsite solution ingredients to cp_feeds/cp_water without duplicate purchasing. Retain raw actual period kg, free/structural water, elemental and species assays, including dosing failures; no prescribed ppm or normalizing at collection. An externally purchased formulation needs its whole commercial flow, not replacement by these active-equivalent rows. | kg | each preparation/dose and release assay | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | balance calibration; full recipe; compound COA; preparation records; lab QA |
| cp_output | pet_resin | accepted supplied chips and Q | foreground_record | unique batch/release ID; same route/grade; net supplied mass; tare; acceptance; IV/method; DSC; moisture; colour; DEG; AA; Sb/Co/P; stock/rework flags | Owner: quality release officer and weighbridge custodian. Weigh genuinely new accepted supplied chips once, excluding transport tare and prior finished stock; reconcile production, acceptance, stock transfers and shipment. Record failure/zero-output/rework runs and do not count intermediate chips feeding SSP. The supply gate is factory quality release of independently deliverable chips, not the shipment date: count newly accepted finished stock at this gate once even if dispatched later; old finished stock drawdown never creates Q. Released finished-stock silos are outside the manufacturing stock boundary; unreleased chips remain in the closing WIP/stock and burden ledger. Q is the unique positive accepted supplied net kg matching the complete numerator scope; record Q but do not divide here. | kg | each batch/release and period closure | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | signed acceptance; buyer specification; unique lot ledger; IV/DSC and chemical methods |
| cp_carry | pet_resin | period and WIP burden ownership | foreground_record | every run; failure; zero output; heel; WIP lot; opening/closing physical stock; per-exchange opening/closing carried burdens; linkage to output Q; returns/rework lineage | Owner: production accountant. Retain the complete undivided raw period numerators, failed batches, startup/shutdown, cleaning and standing losses. Trace opening burdens into released material and closing recoverable WIP into the next period once, by each exchange; do not park failed unrecoverable burdens in closing WIP or reset rework history. This is a raw stock/burden reconciliation, not normalization. | kg; MJ | every run and period opening/closing | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | run completeness register; WIP physical count; per-exchange burden carry ledger |
| cp_utilities | pet_resin | actual utilities | foreground_record | meter ID; opening/closing readings; timestamps; kWh; heat MJ; steam kg/P/T/quality; nitrogen mass/volume/P/T; integrated-volume flag; provider boundary | Owner: utilities engineer. Retain undivided actual meters for every included operation and failed/standby period. Convert supported raw units before reporting; retain dedicated or justified shared-meter allocation and losses. Already integrated volumes receive no second time factor; steam enthalpy does not create a second heat purchase. | kg; MJ; kWh; m3 | continuous meters and each actual supply event | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | meter calibration; density/enthalpy evidence; provider/network statement; load allocation |
| cp_water | pet_resin | physical and species water balance | foreground_record | fresh/free/hydrate/steam water; quench/reflux loops; condensate weights and assays; EG/DEG/AA; reaction conversion/end groups; independent water formation/consumption evidence; vapour; effluent; inventory | Owner: process chemist and water operator. Meter independent physical inputs and outlets as whole streams, sampling actual species. Independently substantiate water formation/consumption from actual reaction progress, feed/product end groups and validated chemical/species methods, separating catalyst preparation, hydrolysis and hydrate/free-water changes. Neither ideal 2 mol water per repeat unit, COD nor mass residual measures actual reaction water. Do not solve an unknown reaction-water term and an unknown outlet from the same closure residual. | kg | each batch/condensate transfer; representative time-resolved sampling; period closure | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | calibrated water/condensate meters; lab method and sampling QA; independent reaction evidence |
| cp_recovery | pet_resin | glycol gross recovery, return, purge and export | foreground_record | condensate/column stream IDs; whole mass; EG/DEG/water/oligomer/additive assays; reflux; return; purge; external transfer; inventories; duties | Owner: recovery-unit operator. Preserve undivided raw stream totals and composition for the full matched campaign; reconcile all gross recovery/returns and opening/closing inventories. Only boundary transfers become inventory exchanges. Internal recirculation never becomes new monomer procurement or a sale credit. Exported glycol needs actual quality/destination and coproduct review. | kg; MJ | each transfer and column campaign; opening/closing | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | flow/scale calibration; column logs; sampled composition; transfer and destination evidence |
| cp_solids | pet_resin | solid losses, rejected resin and packaging | foreground_record | separate stream ID; net/tare; PET; filter cake; additive/water assay; internal rework; actual packaging composition; upstream included flag; waste destination | Owner: finishing operator and waste custodian. Weigh each actual solid stream separately, retain moisture/composition and return/export disposition; use scale records and manifests rather than residual closure. Keep packaging components and product net mass distinct; preserve their raw period amounts including failed output. | kg | each cut/filter change/waste transfer and period endpoints | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | scale QA; component composition; scrap/rework ledger; waste manifests |
| cp_air | pet_resin | individual final atmospheric releases | foreground_record | actual outlet/compartment; species; concentration; dry/wet basis; flow rate or integrated volume; duration; P/T/humidity; control status; batch/run; recovery | Owner: environmental monitoring lead. Sample representative startup, normal, failed, purge and shutdown conditions after actual controls. Retain raw concentration and gas throughput; rate times duration is allowed but integrated volume is not multiplied again. Speciate releases and independently assay water; total VOC and COD cannot apportion unknown species or close carbon/water balances. Actual unlisted species, such as additive-derived acetic acid or ethanol when demonstrated, require separate rows. | kg; mg/m3; m3; h | actual runs with representative/continuous sampling | same actual matched campaign; include failed/zero-output/rework runs and opening/closing inventories | one stated site and recipe/route/state cohort; provider modules identified | per 1 kg reference flow | laboratory and flow/humidity calibration; sampling plan; detection limits; control logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | Convert raw masses and supported integrated volumes to the row unit before normalization; kWh * 3.6 = MJ. If a rate is recorded, integrate over actual time; an integrated volume receives no further duration factor. Use matched measured density and conditions, never a secondary native flow-property coefficient as density. | raw_readings; density; temperature; pressure; duration | raw_period_amount | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| burden_carry | all inventory rows | A_i = raw_period_amount_i + opening_carried_burden_i - closing_recoverable_WIP_burden_i, after documented stock/return reconciliation and justified shared-meter attribution; maintain the same product/route/state cohort. Include failed, zero-output, startup, shutdown, rework and cleaning burdens. Prior released finished stock is excluded from both Q and its already assigned burden. Carry each WIP burden once; this rule does not divide by Q. | raw_period_amount_i; opening_carried_burden_i; closing_recoverable_WIP_burden_i; cp_carry | A_i | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| accepted_output | pet_chips | Q = sum of unique newly accepted supplied net chip masses at factory quality release matching the numerator cohort, including newly accepted finished stock once irrespective of later dispatch; exclude transport tare, internal intermediates/loops, coproducts, failed output, old finished stock and repeated rework releases. Require Q > 0; a zero-output period retains its burdens for an evidenced disposition/carry, never division by zero or deletion. | accepted_release_mass; unique_lot_id; cp_output; cp_carry | Q | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| normalize_period | all inventory rows | q_i = A_i / Q, once only, in row units per 1 kg reference flow. For pet_chips the reported amount is exactly 1 kg. Collection protocols retain undivided raw numerators; flow-card references and protocol aggregation labels describe this same single reporting operation and are not sequential divisions. Never average batch ratios or substitute theoretical yield/nameplate output for Q. | A_i; Q; cp_output; cp_carry | q_i | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| physical_and_species | pet_resin | Reconcile physical mass: external input mass plus opening unreleased physical stocks equals all physical output masses crossing the declared quality-release/transfer gate plus closing unreleased stocks, with measured ambient carrier-air throughput separately reconciled. Then independently reconcile C/H/O/Sb/Co/P and actual species. Generated/consumed reaction water is an internal species transformation of already counted feed mass, not an added external input; free, hydrate, steam, retained and vapour water remain distinct. DEG incorporation, EG release, oligomers, acetaldehyde and additive chemistry require independent assay/reaction evidence. Do not fit unknown water or outlet species to the physical residual; report uncertainty and unresolved closure. | cp_feeds; cp_additives; cp_output; cp_water; cp_recovery; cp_solids; cp_air; cp_carry | physical_and_species_reconciliation | epa-ap42-pet-1991; ec-polymers-bref-2007 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_route | pet_resin | Require actual separately purchased compounds, batch recipe, synthesis logs, amorphous supplied state, IV/DSC methods and signed release; verify no recycled/co-monomer feed, deliberate crystallization or SSP inside the supplied gate. Any contrary route/grade is outside scope. | COA; full recipe; synthesis and IV/DSC records; acceptance |
| period_completeness | all inventory rows | Reconcile every raw-period record, failed/zero-output/rework run, inventories and carried burdens with unique Q; do not drop bad runs or count recycled material again. Preserve uncertainty, detection limits and original units. | run census; calibrated meters; cp_carry; unique output ledger |
| species_and_water | pet_resin | Independent physical mass, elemental and water/species evidence is mandatory; a mass closure residual, total VOC, COD, formula or ideal stoichiometry is insufficient to invent actual water, loss or yield. Hydrate water and retained moisture are not new purchases. | stream scales and assays; reaction/end-group evidence; analytical QA |
| background_identity | all inventory rows | Verify native complete identity and exact property-unit chain plus actual provider/geography/route/state. UUID identity does not establish site activity or background quantities. Unresolved ordinary auxiliary IDs are disclosed linkage debts; unresolved measurements or final-reference incompatibility prevent use of the concrete dataset. | complete native records; exact support chain; provider/activity evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_gate | pet_chips | Require one terminal Product output linked by reference_flow_link to pet_chips with the same PET UUID and 1 kg basis in both languages. An intermediate or genuinely separate coproduct must retain its physical identity even if it shares a generic UUID; never rename or hide it to pass this check. |  |
| single_normalization | all inventory rows | Require complete matched raw records, Q > 0, explicit run/WIP/return burden ownership and one application of normalize_period after conversions. If no independent accepted supply exists, or balances/actual species remain unresolved, the concrete dataset is incomplete. | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| chemical_and_native | all inventory rows | Reject true compound/CAS, grade, state, route, type, compartment or reference-property contradictions. Whole commercial formulations, onsite preparations and elemental/hydration subledgers must not be double procurement. Additional actual exchanges need atomic rows and complete protocol evidence. | epa-ap42-pet-1991; ec-polymers-bref-2007 |
| evidence_limits | pet_resin | Retain source-specific limitations: the patent is an illustrative batch case with later SSP and other recycled/copolymer examples; EPA is a historical US continuous-process description, not a site factor; BREF fibre/spinning operations are excluded here; UIF MTR is a different conditioning route. Scientific review, mapping acceptance and publication are separate decisions. | epa-ap42-pet-1991; ec-polymers-bref-2007; futura-pet-homopolymer-2007; uif-pet-technology |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground PET manufacturing unit process with independently linked upstream and treatment modules |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified supply of this amorphous PTA-route PET grade as an input to later polymer processing |
| excluded_use | Exclude DMT transesterification; deliberately added IPA, CHDM or other co-monomers; recycled flakes/BHET feed; purchased PET blending, remelting or compounding; PETG, PBT, other polyesters, polyacetals, polyethers, epoxy and alkyd resins; solutions, liquid prepolymers and formulated coating/curing systems; MTR-conditioned or crystallized/SSP pellets; fibres, film, bottles and cured articles. In-situ DEG units, oligomers and catalyst residues are measured constituents, not authority to assume an intentional co-monomer recipe. |
| required_metadata | Actual product and separately charged ingredients; full recipe; route; IV and DSC methods; grade specification; moisture and Sb/Co/P/DEG/acetaldehyde; site/geography; period and Q; WIP burden ownership; heat/steam/provider interfaces; recovery and outlets; source limitations |
| required_quality_disclosure | Measurements versus calculated values; missing auxiliary identities/providers; actual balances and species/water evidence; failed/zero-output runs; raw burden carry and uncertainty; coproduct assessment if needed; no food-grade or science-approval claim |
| update_trigger | Changed monomer/catalyst/additive identity, commercial formulation or supplier route, coproduct disposition, physical supplied state, crystallization/SSP gate, utilities, tests or measured loss/species behaviour |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-ap42-pet-1991 | official_guidance | US EPA, AP-42 §6.6.2 Poly(ethylene Terephthalate), September 1991 (reformatted January 1995), pp. 6.6.2-1, 4, 6-7, 10-11. https://www.epa.gov/sites/default/files/2020-10/documents/c06s06-2.pdf | TPA water versus DMT methanol; esterification/vacuum/glycol recovery and shipped-chip alternative; species/outlet inspection. Historical US continuous plants, unlike the selected batch/cyclic process; no plant quantities, emission factors, spray-condenser assumptions or default yield are adopted. |
| ec-polymers-bref-2007 | official_guidance | European Commission, Reference Document on Best Available Techniques in the Production of Polymers, August 2007, §10.2.1-10.2.6, printed pp. 161-168. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | PET polymerization and recovery context; distinction from crystallization, SSP and spinning-chip drying. DMT catalyst discussion is not a PTA recipe, and fibre/bottle/co-monomer operations and historical European values are not transferred to this gate. |
| futura-pet-homopolymer-2007 | literature | S. T. Kulkarni / Futura Polyesters Ltd., US7297721B2, Process for controlled polymerization of a mixed polymer, 2007-11-20, printed cols. 3-4, 7-8, Example 1. https://patents.google.com/patent/US7297721B2/en | Primary patent Example 1: PTA/MEG homopolymer without recycled flakes, Sb2O3, cobalt acetate and TEPA; specification table identifies cobalt acetate tetrahydrate; amorphous strand/chip stage precedes SSP. Illustrative batch case, not an industrial recipe/actual yield or an independently supplied output measurement. No example dosage, quoted limits, SSP, IPA or recycled-flake example is adopted as a default. |
| uif-pet-technology | literature | Uhde Inventa-Fischer / thyssenkrupp, PET technology brochure, undated, pp. 3-4, official snapshot accessed 2026-10-16. https://ucpcdn.thyssenkrupp.com/_binary/UCPthyssenkruppUhde/bc07c4d7-2ab3-4cd6-bf79-e8f90568ec3a/brochure_pet.pdf | Counterevidence limiting transfer: MTR bottle-resin process conditions pellets above glass transition, partly crystallizes and removes low boilers; it differs from quenched amorphous chips. Promotional energy claims, co-monomers, optional recycled-flake integration and SSP comparisons are not quantitative factors for this method. |
