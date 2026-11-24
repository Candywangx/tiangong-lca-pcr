---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-parings-and-scrap-of-plastics
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Segregated baled LDPE cast-film production edge-trim feedstock

## 1. Scope and Applicability

This method covers one known LDPE supplied formulation as natural-colour, unprinted, uncoated, single-layer noncellular cast-film production edge strips. Source manufacture starts at actual pellet receipt and includes actual conveying, melt filtration, flat-die forming, chill-roll cooling and edge cutting; then segregated collection, necessary dry negative sorting, actual conveying and cold compression/tying to first quality release against an actual receiver specification. Reference feedstock is unwashed, unground, unagglomerated and unpelletised. Retain real additive, contaminant and moisture assays; clean never establishes pure LDPE or absolute dryness.

LYB cast-edge capture, Greenview production-trim buyer interface and BOA compaction equipment support a transparent technical synthesis, not one SKU, factory or contemporary order. No output, recipe, default density, contamination fraction or recycling credit is transferred. ReMA Grade A/B explicitly refers to commercially used film and cannot certify this pre-consumer stream. Exclude new film as reference, virgin/recycled pellets, post-use film, mixed polymers/multilayers/coatings/print, whole conforming articles, startup purge, washed/ground/thermally densified/pelletised or chemically depolymerised new endpoints and hazardous mixtures.

Rules are limited to attributional studies requiring partitioning. Establish legal waste/by-product state and actual receiver acceptance separately; name, UUID or recycling destination establishes neither zero history nor automatic avoided-product credit. The reference commodity and intermediate edge-strip identities remain unbound: a generic raw-material Polyethylene record does not establish a formed production scrap or accepted recycling handover. New film, agricultural film, collected packaging waste and extrusion services do not establish this commodity either. Keep its exact physical name and unresolved UUID until a compatible native record is verified.

`lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`; `ilcd-handbook-2010`

The frozen June 2025 CPC text identifies 39270; the October 2026 explanation links it to HS 2022 heading 3915. Chapter 39 notes 6–7 exclude a single thermoplastic transformed to primary forms. This method therefore excludes pellets and primary-form flakes (34710) and conforming saleable film rolls (36330); it also excludes rubber scrap/used tyres (39250/39260), wood residues (39281–39283), post-use packaging and mixed/multilayer routes. The narrower association for this defined scope is accepted under docs/adr/2026-11-21-accept-cpc-39270-baled-ldpe-cast-film-edge-trim.md. Actual positive purchase by a recycler and customer-owned toll reprocessing are separate ownership histories; this method selects first supply of unprocessed scrap, not the later pellet output or toll service. Transfers and resale add no new production. Verify any outsourced operator, title changes, physical receipt and unique first release from linked source-to-receiver records.

`unsd-cpc3`; `wco-hs39-2022`; `3g-scrap-interface`; `rpi-scrap-interface`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-parings-and-scrap-of-plastics |
| classification_refs | CPC 3.0:39270, accepted narrower association under docs/adr/2026-11-21-accept-cpc-39270-baled-ldpe-cast-film-edge-trim.md |
| covered_products | Unprocessed production-edge-strip feedstock from one known LDPE cast-film formulation |
| excluded_products | Post-use or other-polymer mixtures; new film/pellets; purge; washed-ground-pelletised/depolymerised new endpoints |
| representative_product | Segregated baled LDPE cast-film production edge-trim feedstock |
| production_route | Pellet receipt through electrical cast-film edge cutting then dry segregation and cold-bale first release |
| market_state | Separately accepted unwashed unground pre-consumer flexible LDPE strip bales at actual handover state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply accepted known-origin LDPE edge-trim feedstock |
| How much | 1 kg net feedstock |
| How well | Actual receiver composition/cleanliness/moisture/form/bale-integrity and legal handover requirements |
| How long or cycle | One first quality release; later services retain original cohort Qc |
| reference_flow_link | released_trim |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Baled unprocessed LDPE cast-film edge-trim feedstock |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | known LDPE grade and complete supplied formulation; actual additive and contaminant assays; single-layer noncellular unreinforced unsupported uncoated unprinted film origin; electric flat-die chill-roll casting route; pre-consumer edge-cutting origin and source lot; unwashed unground unagglomerated unpelletised flexible-strip state; no free liquid and measured retained moisture; segregated natural colour and actual receiver cleanliness limits; exact cold-bale and tie specification; legal transfer status and receiver acceptance; source manufacturing allocation and inherited per-flow vector; unique first release and reversal link; geography and period; actual supply voltage and provider boundary; cooling circuit and actual water states; raw/WIP/FG opening and closing stocks; each packaging component and reuse history; gross outward mass and separate original-cohort services |

Declare every qualifier in data-package metadata, process/reference comments or equivalent fields. First-release net material Q includes actual retained moisture/additives but excludes ties/tags/containers; water and solids have separate subledgers. Kilograms do not establish functional equivalence or legal product identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg net feedstock at first quality release; cp_release calibrated weighing excludes actual package tare; same-cohort closing FG is not additional production. |
| raw_units | all inventory rows | actual reference property | declared row unit | Collect unnormalised raw quantities. Integrate true rates first; integrated volume is not multiplied by time again. kWh ×3.6 = MJ; litre ×0.001 = m3; tonne ×1000 = kg; execute report_once once after attribution. |
| material_states | all physical ledgers | Mass / Volume | kg / m3 | Independently measure moisture, polymer, real contaminants and oxidation species; never fit two unknowns from one residual. Hydraulic Volume/m3 to mass requires independent measured density of that formulation/temperature; no water-density or secondary-property inference. |

Metered electricity is a collected Energy quantity, not a fuel heating-value measurement. The adopted native electricity record explicitly references Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Energy `f6811440-ee37-11de-8a39-0800200c9a66` is a distinct property. Both reference Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` with MJ and kWh (3.6 MJ). Shared units alone never establish a provider property; recheck the selected supplier record before use.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual known LDPE pellet receipt with upstream resin manufacture linked once |
| starting_condition_role | Manufacturing/burden-handover fact; no zero-history waste cut-off |
| product_classification_scope | Narrow known-origin LDPE edge-strip supply within CPC3.0:39270 |
| recursive_input_rule | Carry opening/closing raw/WIP and every intermediate or returned lot with full inherited per-flow vectors. Same-category external trim needs actual source condition/history and justified allocation before handover; no recursive PCR copy or automatic waste cut-off. Internal transfers cancel physically and financially without destroying inherited burden. |
| upstream_dataset_requirement | Complete actual LDPE pellet-to-cast-film manufacture through edge cutting, source capture, segregation and necessary cold-bale supply. Link original resin upstream production once; do not purchase a finished bale or charge the same history again at trim handover. Dedicated roll winding/core increments remain separately attributable to the roll. |
| disclosure | Source manufacture/allocation; actual acceptance state; WIP/FG per-flow vectors; Q versus V; all species/packaging and service cutoff |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_origin | source manufacturing | Complete actual LDPE pellet-to-cast-film manufacture through edge cutting, source capture, segregation and necessary cold-bale supply. Link original resin upstream production once; do not purchase a finished bale or charge the same history again at trim handover. Dedicated roll winding/core increments remain separately attributable to the roll. | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| b_gate | first release | Q is net material newly first-quality-released after required preparation and receiver-specific acceptance. Same-cohort closing FG is inside Q already. Reinspection, shipment and linked old returns add no new Q. A genuine release reversal reverses that unique lot once with its whole vector; restoring it cannot create more original output. Preserve real incremental rework. | `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |
| b_complete | all stages and states | Retain receiving, actual handling/conveying, heating/cooling, negative sorting, compression, tying, inspection, maintenance and waste transfer with startup, stop, idle, failures, cleanup, rework and Q=0 periods. Conditional absence needs evidence. Add every actual cleaner, formulated aid, fuel, refrigerant, packaging article, residue and emission species as its own atomic card; no other-material zero or hidden bundle. | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |
| b_cooling | actual water/energy interface | The chosen casting branch uses real chill-roll cooling and measured on-site circulation/chilling; circulation is not fresh supply. If cooling crosses an external Product boundary, add distinct actual inlet and Product-return cards with constituent mass, temperature/pressure, inlet/outlet enthalpy and supplier water/energy/net-service convention. Do not double-count water production or cooling energy. No assumed steam, condensate or boiler. Additional route evidence is needed for an actual different supply. | `lyb-film-extrusion` |
| b_history | stocks and recursive inputs | Carry opening/closing raw/WIP and every intermediate or returned lot with full inherited per-flow vectors. Same-category external trim needs actual source condition/history and justified allocation before handover; no recursive PCR copy or automatic waste cut-off. Internal transfers cancel physically and financially without destroying inherited burden. | `ilcd-handbook-2010` |
| b_service | postrelease original cohorts | After first release retain actual warehouse storage, packaging repair, handling, loading, return and rework increments by original cohort. Qc is that cohort original first-release mass; handling count H and gross outward V are service/physical observations, never a new production denominator. Old FG is not attributed using current new Q; closing FG has its original production vector and actual service increment. | `ilcd-handbook-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cast_origin | LDPE cast-film manufacture and edge generation | required | Actual selected route or occurred original-cohort service | foreground | First feedstock Q; separate joint manufacture and original Qc services |
| trim_supply | Segregated trim preparation and first release | required | Actual selected route or occurred original-cohort service | foreground | First feedstock Q; separate joint manufacture and original Qc services |
| fg_service | Original-cohort finished-stock services | required | Actual selected route or occurred original-cohort service | foreground | First feedstock Q; separate joint manufacture and original Qc services |

Cards are a minimum atomic set, not proof of occurrence or inventory completeness. Purchase each actual whole formulation once; retain source-cohort internal receipts/issues and cancel on consolidation. Whole article/mixture and component-origin partitions are non-additive with one real provider. Each non-reference card displays the same report_once result only; raw physical V, stocks and component ledgers are never scaled by burden shares.

### Process: LDPE cast-film manufacture and edge generation (`cast_origin`)

#### Inputs

##### Product flows

###### polyethylene low density granulate (PE-LD) (`resin`)

Actual purchased whole known LDPE pellet formulation once. Native Product/Mass/kg specifies low-density granulate but no CAS, grade, additive recipe, route or geography. Require a compatible actual supplier; ingredient assay is a child composition account, not another purchase. Source formation is resin production through a compatible upstream dataset, then actual cast-film manufacture here.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`

###### Electricity, alternating current (`cast_power`)

Native Product; CN; grid-average consumption mix to user; alternating current below 1 kV; reference Net calorific value/MJ. No hydropower-only, at-generator or medium-voltage substitution. Actual site/year/provider boundary must match; transform/distribution increments are included once. Meter all operating states including cooling and failed runs; convert kWh to MJ before attribution.

- Selected flow: Electricity, alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_cast`
- Sources: `lyb-film-extrusion`

###### Tap water (`water`)

Conditional actual treated municipal makeup for the measured on-site cooling loop and equipment cleaning. Native Product/Mass/kg; potable/public supply with variable local treatment, no fixed source/geography. The second native Volume property is not used as a density default. Do not count internal recirculation as a fresh input or assume film washing. Separate makeup, cleaning and other uses in raw records; no duplicate water production in the cooling energy provider.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`

###### Silicone lubricating grease formulation (`silicone_grease`)

Conditional actual whole grease supply used for extruder maintenance. Identify oil, thickener and additives in the supplied formulation and compatible provider; no wax-solvent lubricant proxy or separate repurchase of constituents. Actual different cleaners or purge formulations require distinct cards.

- Selected flow: Silicone lubricating grease formulation
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`

###### Wire Mesh (`screen`)

Actual one supplied steel screen article at its measured composition and service history. A whole screen is one physical article; retained polymer on the spent screen is a source partition of that whole outlet. Reusable manufacture follows the persistent asset ledger, not a fresh screen purchase each cycle. Native Product/Mass/kg identifies interlocked woven or welded metal wire mesh at plant; steel, stainless steel, aluminium and galvanised examples are not an alloy selector. Use only the actual known steel melt-filter mesh article; supplier alloy, aperture, pack construction, route and geography remain measured/qualified. No plate substitution.

- Selected flow: Wire Mesh `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`

###### Cardboard tube or Paper core (`core`)

Conditional actual core supporting the separate conforming film roll. Keep full physical core mass and component stocks; subdivision assigns this exclusive roll-packaging burden to the roll, not automatically to trim. Supplier packaging already embedded upstream is not purchased twice. Native Product/Mass/kg is a cylindrical paperboard tube/core at plant, without fixed coating, adhesive, grade, strength, dimensions or geography. Qualify the actual uncoated winding core and included constituents/provider; no assumed per-item mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_cast`
- Sources: `lyb-film-extrusion`

##### Waste flows

##### Elementary flows

###### oxygen (`oxygen`)

Conditional independently established oxygen uptake in actual oxidation during melt exposure/startup/cleaning. Ambient ventilation volume is not oxygen consumption. Keep actual species and C/H/O balances; do not infer both oxygen and unknown oxidation products from one residual. Native Elementary/Mass/kg, CAS 7782-44-7, renewable element resource from air; not purchased industrial oxygen or an emission. Broad liquid/ion synonyms do not change this molecular-oxygen resource identity; actual uptake only, not whole air throughput.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_cast`
- Sources: `lyb-film-extrusion`

#### Outputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Separate conforming film-roll co-output from the same actual monolayer noncellular unsupported unreinforced nonadhesive LDPE casting lot. Native Product/Mass/kg leaves CAS, grade, route, geography and performance unspecified; do not infer supplier equivalence. This roll is not the trim reference Q. Record actual gross roll formation/net film and its exclusive finishing/core burden separately before resolving remaining common exchanges.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`; `ilcd-handbook-2010`

###### Unprocessed LDPE cast-film edge trim (`trim_out`)

Known source-lot natural single-formulation LDPE long flexible edge strips from unprinted uncoated single-layer flat-die chill-roll casting; pre-consumer, segregated, unwashed, unground, not agglomerated or pelletised. Actual additive/contaminant/water fractions remain measured child accounts; nominal single polymer never proves absolute purity. No incompatible cleaned-recycling, microplastic, optical-assembly or regenerated-polymer UUID is bound. Internal handover carries full physical mass and the attributed original per-flow burden vector once; cancel with trim_in on consolidation. No new purchase or release. All actual diverted-to-internal-reuse quantities need their own transfer/history and real extra processing; do not subtract their mass from raw input a second time.

Exact edge-trim commodity UUID remains unresolved. The whole actual strip/bale includes its measured retained constituents; do not replace it with generic resin or repurchase constituents. Preserve original pellet-to-film manufacture and the inherited burden vector.

- Selected flow: Unprocessed LDPE cast-film edge trim
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`; `ilcd-handbook-2010`

##### Waste flows

###### Oxidised LDPE extrusion purge (`purge`)

Actual oxidised/off-spec melt and startup dollies; keep distinct from accepted clean edge strips and film co-output. Measure additives and oxidation; actual treatment receiver, no presumed recycling credit.

- Selected flow: Oxidised LDPE extrusion purge
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`

###### Polymer-coated spent steel melt-filter screen (`spent_screen`)

One actual spent screen article with measured steel/polymer/grease partitions. Whole mass and source partitions are non-additive and have one receiver/provider; distinguish reuse from final disposal.

- Selected flow: Polymer-coated spent steel melt-filter screen
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`

###### Silicone-grease-contaminated extruder-cleaning residue (`cleaning_residue`)

Conditional actual collected cleaning solid with measured whole composition and one destination. Split any physically separate wipe, liquid or different residue; this is not an other-wastes bundle.

- Selected flow: Silicone-grease-contaminated extruder-cleaning residue
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cast`
- Sources: `lyb-film-extrusion`

###### Chill-loop aqueous blowdown (`cooling_blowdown`)

Conditional actual whole aqueous discharge with measured water and each additive/contaminant; one receiver. It is not washed plastic feedstock or an unspecified wastewater surrogate. Cleaning effluent, if separate, receives its own named card; actual treatment increments and downstream boundaries are linked once.

- Selected flow: Chill-loop aqueous blowdown
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`

##### Elementary flows

###### Particulate matter, particle size unspecified (`cast_dust`)

Conditional measured particles to air/unspecified subcompartment with unspecified size only. Native reference Mass/kg; no fixed particle chemistry, stack height, size distribution or LCIA factor. The clinker example and its factor are context only, not this process or a route restriction. Distinguish actual size-resolved emissions and captured waste; never also add the whole dust total.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_cast`
- Sources: `lyb-film-extrusion`

###### formaldehyde (`formaldehyde`)

Conditional measured formaldehyde species CAS 50-00-0 emitted to air/unspecified subcompartment, Mass/kg. Broad native synonyms include formalin and polymers; those synonyms do not identify solution/polymer mass as emitted monomer. A complete actual fume survey determines presence, speciation and missed routes; this example is neither a positive default nor a complete emission list.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_cast`
- Sources: `lyb-film-extrusion`

###### acetaldehyde (`acetaldehyde`)

Conditional actual acetaldehyde CAS 75-07-0 to air/unspecified subcompartment, Mass/kg. Native synonyms include acetyl-group and polymer labels but reference identity is the CAS-defined emitted monomer, not those materials. Survey all real thermal states and controls and add every actual species individually; do not replace total VOC by this species.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_cast`
- Sources: `lyb-film-extrusion`

###### Water (`water_vapour`)

Conditional independently measured phase-change moisture from actual cooling/cleaning. No assumed reaction water: extrusion is physical melt processing; actual oxidation requires separate chemistry evidence. Water retained in film and blowdown is not counted again here. Native Elementary reference Volume/m3, CAS 7732-18-5, emission to air/unspecified subcompartment; no mass property. This card is actual ordinary H2O vapour only, not the heavy/isotopic/ice synonyms. Retain actual vapour volume at declared T/P and moisture basis; physical mass closure needs independently established same-state H2O-vapour density, not liquid-water density, a native secondary coefficient or assumed pressure/temperature.

- Selected flow: Water `0342f5e5-b53e-4cec-9e67-fb197f24fff0`
- Flow property / unit: Volume / m3
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`

### Process: Segregated trim preparation and first release (`trim_supply`)

#### Inputs

##### Product flows

###### Electricity, alternating current (`bale_power`)

Native Product; CN; grid-average consumption mix to user; alternating current below 1 kV; reference Net calorific value/MJ. No hydropower-only, at-generator or medium-voltage substitution. Actual site/year/provider boundary must match; transform/distribution increments are included once. Meter all operating states including cooling and failed runs; convert kWh to MJ before attribution.

- Selected flow: Electricity, alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`

###### Unprocessed LDPE cast-film edge trim (`trim_in`)

Known source-lot natural single-formulation LDPE long flexible edge strips from unprinted uncoated single-layer flat-die chill-roll casting; pre-consumer, segregated, unwashed, unground, not agglomerated or pelletised. Actual additive/contaminant/water fractions remain measured child accounts; nominal single polymer never proves absolute purity. No incompatible cleaned-recycling, microplastic, optical-assembly or regenerated-polymer UUID is bound. Match trim_out mass, source cohort and inherited vector; no purchase of already finished bales. Include actual transfer/conveying and weigh/sort before cold compression.

Exact edge-trim commodity UUID remains unresolved. The whole actual strip/bale includes its measured retained constituents; do not replace it with generic resin or repurchase constituents. Preserve original pellet-to-film manufacture and the inherited burden vector.

- Selected flow: Unprocessed LDPE cast-film edge trim
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_supply`
- Sources: `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### Hydraulic Fluid (`hydraulic`)

Conditional one actual whole mineral-or-synthetic-base hydraulic formulation with additives used in the electric hydraulic baler. Native Product reference is Volume/m3, not Mass; no CAS, recipe, grade, route or geography fixed. State which actual formulation is used and preserve its supply volume; mass balance requires independently measured density at that formulation and temperature, never water density or an inferred secondary coefficient.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`

###### Steel strip, thread (`tie`)

Conditional one actual hot-dip-galvanised, quenched and drawn steel bale tie wire, not a steel plate or generic packaging bundle. Native Product/Mass/kg; official English Steel strip, thread and Chinese 镀锌钢丝 have a stranded-wire classification label, but no native text requires a stranded rope. Use only the explicitly matching galvanised drawn wire form and route; unresolved grade, coating mass, corrosion fitness and supplier need actual specification. Keep physical tie mass and zinc/steel composition separate from Q in the component ledger.

- Selected flow: Steel strip, thread `6bebb982-c6c5-4250-88da-6607f8899574`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

###### Label, paper (`tag`)

Conditional one actual uncoated paper tag; identify attachment method and any separate ink/fastener as its own actual supply or included supplied-article constituent. Preserve full physical component ledger. Post-release replacement counts only real increment. Native Product/Mass/kg leaves paper grade, adhesive/printing, dimensions, supply route and geography unspecified. Actual exchange is the one qualified uncoated paper identification tag; retained legacy classification is provenance, not a different physical product. No item-to-kg assumption.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Baled unprocessed LDPE cast-film edge-trim feedstock (`released_trim`)

Known source-lot natural single-formulation LDPE long flexible edge strips from unprinted uncoated single-layer flat-die chill-roll casting; pre-consumer, segregated, unwashed, unground, not agglomerated or pelletised. Actual additive/contaminant/water fractions remain measured child accounts; nominal single polymer never proves absolute purity. No incompatible cleaned-recycling, microplastic, optical-assembly or regenerated-polymer UUID is bound. Reference output is 1 kg net as-released film-strip feedstock including only its measured retained material/moisture and excluding wire, tag and containers. First quality release after necessary compression and receiver-specific acceptance creates Q once; closing FG of that cohort is already inside Q. Reinspection, dispatch and returned old material create no new production. Actual density and receiver limits are measured/agreed, not imported from postcommercial Grade A.

Exact edge-trim commodity UUID remains unresolved. The whole actual strip/bale includes its measured retained constituents; do not replace it with generic resin or repurchase constituents. Preserve original pellet-to-film manufacture and the inherited burden vector.

- Selected flow: Baled unprocessed LDPE cast-film edge-trim feedstock
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`; `ilcd-handbook-2010`

##### Waste flows

###### Rejected LDPE cast-film edge trim (`reject_trim`)

Actual rejected edge-strip supply with measured contamination, source allocation and unique receiver. Keep distinct from purge, separate polymers and any hazardous waste. No assumed positive value, waste exemption or automatic credit.

- Selected flow: Rejected LDPE cast-film edge trim
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### Spent baler hydraulic fluid (`spent_hydraulic`)

Actual one spent whole hydraulic formulation; measure retained oil/additives/water and its supply state. The actual waste type and treatment provider need confirmation; do not bind a fixed 50-percent-oil formulation.

- Selected flow: Spent baler hydraulic fluid
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### Waste galvanised steel bale tie (`wire_waste`)

Actual offcuts or removed tie; weigh whole wire with measured coating and one receiver. Whole quantity and source steel/zinc partitions do not add. Removed reusable wire and externally returned wire stay separate stock movements.

- Selected flow: Waste galvanised steel bale tie
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### Waste paper bale-identification tag (`tag_waste`)

Actual removed/rejected tag with its retained constituents and one receiver. Do not combine it with steel wire or polymer rejection.

- Selected flow: Waste paper bale-identification tag
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

##### Elementary flows

###### Particulate matter, particle size unspecified (`bale_dust`)

Conditional measured particles to air/unspecified subcompartment with unspecified size only. Native reference Mass/kg; no fixed particle chemistry, stack height, size distribution or LCIA factor. The clinker example and its factor are context only, not this process or a route restriction. Distinguish actual size-resolved emissions and captured waste; never also add the whole dust total.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_supply`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`

### Process: Original-cohort finished-stock services (`fg_service`)

#### Inputs

##### Product flows

###### Electricity, alternating current (`service_power`)

Native Product; CN; grid-average consumption mix to user; alternating current below 1 kV; reference Net calorific value/MJ. No hydropower-only, at-generator or medium-voltage substitution. Actual site/year/provider boundary must match; transform/distribution increments are included once. Meter all operating states including cooling and failed runs; convert kWh to MJ before attribution.

- Selected flow: Electricity, alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-handbook-2010`

###### Steel strip, thread (`service_tie`)

Conditional one actual hot-dip-galvanised, quenched and drawn steel bale tie wire, not a steel plate or generic packaging bundle. Native Product/Mass/kg; official English Steel strip, thread and Chinese 镀锌钢丝 have a stranded-wire classification label, but no native text requires a stranded rope. Use only the explicitly matching galvanised drawn wire form and route; unresolved grade, coating mass, corrosion fitness and supplier need actual specification. Keep physical tie mass and zinc/steel composition separate from Q in the component ledger. Only actual extra replacement wire after original release; do not repurchase the intact original tie.

- Selected flow: Steel strip, thread `6bebb982-c6c5-4250-88da-6607f8899574`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

###### Label, paper (`service_tag`)

Conditional one actual uncoated paper tag; identify attachment method and any separate ink/fastener as its own actual supply or included supplied-article constituent. Preserve full physical component ledger. Post-release replacement counts only real increment. Native Product/Mass/kg leaves paper grade, adhesive/printing, dimensions, supply route and geography unspecified. Actual exchange is the one qualified uncoated paper identification tag; retained legacy classification is provenance, not a different physical product. No item-to-kg assumption.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

###### Baled unprocessed LDPE cast-film edge-trim feedstock (`fg_receipt`)

Known source-lot natural single-formulation LDPE long flexible edge strips from unprinted uncoated single-layer flat-die chill-roll casting; pre-consumer, segregated, unwashed, unground, not agglomerated or pelletised. Actual additive/contaminant/water fractions remain measured child accounts; nominal single polymer never proves absolute purity. No incompatible cleaned-recycling, microplastic, optical-assembly or regenerated-polymer UUID is bound. Internal receipt/old stock retains unique original release Qc and every inherited exchange vector; this is not a new purchase. Cancel the new-cohort transfer with released_trim in combined physical accounting. Old-cohort history never divides by the current new Q.

Exact edge-trim commodity UUID remains unresolved. The whole actual strip/bale includes its measured retained constituents; do not replace it with generic resin or repurchase constituents. Preserve original pellet-to-film manufacture and the inherited burden vector.

- Selected flow: Baled unprocessed LDPE cast-film edge-trim feedstock
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-handbook-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Baled unprocessed LDPE cast-film edge-trim feedstock (`gross_shipment`)

Known source-lot natural single-formulation LDPE long flexible edge strips from unprinted uncoated single-layer flat-die chill-roll casting; pre-consumer, segregated, unwashed, unground, not agglomerated or pelletised. Actual additive/contaminant/water fractions remain measured child accounts; nominal single polymer never proves absolute purity. No incompatible cleaned-recycling, microplastic, optical-assembly or regenerated-polymer UUID is bound. Actual outward net film V is a gross physical movement, including later returns where dispatched again; it is not new Q or the production denominator. Retain original production vector and real incremental warehouse/loading/rebaling service separately. Returns link original outward movement/reversal, receive the original vector and only real new rework; do not subtract them from production twice.

Exact edge-trim commodity UUID remains unresolved. The whole actual strip/bale includes its measured retained constituents; do not replace it with generic resin or repurchase constituents. Preserve original pellet-to-film manufacture and the inherited burden vector.

- Selected flow: Baled unprocessed LDPE cast-film edge-trim feedstock
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-handbook-2010`

##### Waste flows

###### LDPE edge-trim storage loss (`fg_loss`)

Known source-lot natural single-formulation LDPE long flexible edge strips from unprinted uncoated single-layer flat-die chill-roll casting; pre-consumer, segregated, unwashed, unground, not agglomerated or pelletised. Actual additive/contaminant/water fractions remain measured child accounts; nominal single polymer never proves absolute purity. No incompatible cleaned-recycling, microplastic, optical-assembly or regenerated-polymer UUID is bound. Conditional real damaged/lost cohort film; preserve original burdens and receiver. A rejected old lot does not reverse unrelated new production. Separate actual service wire/tag waste with the same complete component ledger.

- Selected flow: LDPE edge-trim storage loss
- Flow property / unit: Mass / kg
- Amount rule: Display the already calculated attributable exchange quantity on the stated reference basis; no additional normalization here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-handbook-2010`

##### Elementary flows

For every packaging component, N includes first non-purchased external receipt with incoming materials or separately loaned/free-transferred articles, whether or not listed in the supplier inventory. Assign all physical stocks and crossings. Record actual purchase, freight and service burdens once only against the party actually bearing them; absent supplier history remains a disclosed data gap.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | all multifunctionality | Restrict these provisions to attributional cases requiring partitioning consistent with the declared goal/context. Determine actual waste/by-product and economic/legal states; a recyclable destination or positive/negative price alone does not choose a convention. No free choice of allocation versus substitution and no avoided-resin or avoided-disposal credit. | `ilcd-handbook-2010` |
| a_subdivide | cast source and later preparation | First separate actually exclusive operations and inventories, including roll winding/cores and trim capture/compaction. Use justified virtual subdivision where full subdivision cannot be done. The incoming resin/material history and real source losses must be assigned once, not set to zero merely because trim is residual. Do not burden trim with exclusive finished-roll services or erase shared source manufacturing. | `ilcd-handbook-2010` |
| a_physical | each remaining common exchange | For every remaining exchange test the determining physical causal relationship independently using real process/measurement evidence. Polymer/material partition uses measured source composition and actual fate; it is not a universal rule for heaters, chillers or overhead. Keep full physical outflows/stock gates independent from burden fractions. Reconcile all assigned co-output/beneficiary vectors back to the whole pre-allocation inventory with real losses retained; no unassigned or double-assigned source burden. | `ilcd-handbook-2010` |
| a_residual | genuinely inseparable remainder | Only genuinely remaining indivisible inventory uses justified economic allocation. Measure contemporaneous representative market values at the common source-process gate and each actual state. Back-calculate later baled/shipped prices by removing actual later handling, preparation, packaging and transport costs consistently for all outputs. Preserve volumes, time, market, negative/zero prices, uncertainty and sensitivity; no fixed ratio or arbitrary physical/economic selection. | `ilcd-handbook-2010` |
| a_recycling_state | source co-production versus waste recovery | Do not infer a recycling allocation from the feedstock label. Independently identify the actual source co-production and any true joint process; this gate alone does not prove a full multi-cycle recycling system. If the incoming waste has negative market value, identify actual initial treatment and the point/state where the first valuable function is formed before applying the ILCD recycling-specific provisions; do not force the same simple source-gate price split. A nonnegative price alone does not waive inherent-property/cycle information needed for a broader recycling claim. Unknown route/status or necessary recycling evidence leaves that quantitative interpretation unavailable, without erasing actual manufacturing and preparation burdens. | `ilcd-handbook-2010` |
| a_assets | included reusable manufacture | Where manufacture of an already included asset or reusable article is attributed across uses, retain one persistent same-asset original burden vector B and whole installed-service denominator D covering all realised historical and supported remaining service. Match beneficiary use u to D units; all prior plus new shares u/D must total at most one. Period output, remaining-only capacity and bare asset mass are not D. Custody, period or provider changes never restart the ledger. Unknown D/history means the attributed result remains unavailable; actual repair/replacement/service increments remain real and separate. Full physical mass and stock movements are never amortised. | `ilcd-handbook-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | trim_supply | released_trim | release | lot; source grade/formulation; receiver specification; legal transfer; tests; calibrated gross/tare/net mass; first-release event; unique reversal; original Qc; opening/closing FG | Weigh net accepted feedstock on a calibrated scale excluding each actual packaging component. Preserve raw first-release masses and event links; moisture and contaminants are independent assays, not presumed zero. | kg | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_material_cast | cast_origin | resin; silicone_grease; screen; film; trim_out; purge; spent_screen; cleaning_residue | material_stock | row_id; lot; full supply formulation; material state; measured composition; supplier; issue/receipt/return; opening/closing raw/WIP/in-use auxiliary stock; per-flow inherited vectors; source partitions; receiver; density and T/P if needed | Custodian and lab weigh each actual single material/article and its physical fate. Retain all failed/start-stop/idle/cleaning/rework states and full per-flow stock history. Hydraulic volume is collected in m3 with independent same-fluid density when mass reconciliation needs it. No raw normalization. | kg; m3; kg/m3; C; Pa | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_material_supply | trim_supply | trim_in; hydraulic; reject_trim; spent_hydraulic | material_stock | row_id; lot; full supply formulation; material state; measured composition; supplier; issue/receipt/return; opening/closing raw/WIP/in-use auxiliary stock; per-flow inherited vectors; source partitions; receiver; density and T/P if needed | Custodian and lab weigh each actual single material/article and its physical fate. Retain all failed/start-stop/idle/cleaning/rework states and full per-flow stock history. Hydraulic volume is collected in m3 with independent same-fluid density when mass reconciliation needs it. No raw normalization. | kg; m3; kg/m3; C; Pa | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_energy_cast | cast_origin | cast_power | energy_meter | row_id; meter; actual provider boundary; voltage; period; stage; integrated kWh; true power rate/time if applicable; idle/failure/cleanup; subgroup exclusivity | Meter source manufacture, cooling/chilling and trim preparation separately where feasible. Collect untouched readings and validated coverage with startup/idle/failure; no division by throughput or Q in collection. | kWh; kW; h; MJ | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_energy_supply | trim_supply | bale_power | energy_meter | row_id; meter; actual provider boundary; voltage; period; stage; integrated kWh; true power rate/time if applicable; idle/failure/cleanup; subgroup exclusivity | Meter source manufacture, cooling/chilling and trim preparation separately where feasible. Collect untouched readings and validated coverage with startup/idle/failure; no division by throughput or Q in collection. | kWh; kW; h; MJ | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_water | cast_origin | water; cooling_blowdown; water_vapour | water_state | row_id; purpose; actual inlet/outlet mass; integrated volume or true flow rate; T/P; density; constituents; moisture; enthalpy; loop inventory; supplier convention; discharge receiver | Measure actual makeup, cooling/cleaning and each real return/loss independently. Use actual loop/thermal records and water assays; no assumed steam or reaction water. External Product return is separate from waste discharge and requires its own card. | kg; m3; m3/h; h; C; Pa; MJ | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_pack_cast | cast_origin | core | component_stock | component_id; composition; tare; lot; opening/closing empty; attached WIP/FG; reusable; purchased P; first external non-purchased receipts N; external returns ER_in/ER_out; matched earlier outward crossing id/date/quantity; outstanding return quantity; gross shipment component mass; waste; original manufacture vector; asset history; whole-service D; matched use u; all prior shares | Independently weigh each component and preserve full empty/attached/reusable stocks and every external crossing, distinguishing P, N and ER_in/ER_out as pack_balance requires. Match every return received to its earlier external outward movement and outstanding quantity; retain the original provider/manufacture history for non-purchased receipts and returns. Internal reattachments/reuse cancel. For included manufacture across uses retain same-asset full physical mass/acquisition/retirement plus original vector and all beneficiaries; unknown history remains unresolved. | kg; actual matched service unit | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_pack_supply | trim_supply | tie; tag; wire_waste; tag_waste | component_stock | component_id; composition; tare; lot; opening/closing empty; attached WIP/FG; reusable; purchased P; first external non-purchased receipts N; external returns ER_in/ER_out; matched earlier outward crossing id/date/quantity; outstanding return quantity; gross shipment component mass; waste; original manufacture vector; asset history; whole-service D; matched use u; all prior shares | Independently weigh each component and preserve full empty/attached/reusable stocks and every external crossing, distinguishing P, N and ER_in/ER_out as pack_balance requires. Match every return received to its earlier external outward movement and outstanding quantity; retain the original provider/manufacture history for non-purchased receipts and returns. Internal reattachments/reuse cancel. For included manufacture across uses retain same-asset full physical mass/acquisition/retirement plus original vector and all beneficiaries; unknown history remains unresolved. | kg; actual matched service unit | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_species_cast | cast_origin | oxygen; cast_dust; formaldehyde; acetaldehyde | speciated_survey | row_id; species/CAS; particle fraction; medium; stage/state; stack/fugitive path; concentration; integrated volume or actual flow/time; T/P; wet/dry; composition; capture; blanks; recovery; detection limit; uncertainty | Competent lab surveys actual resin, thermal handling, maintenance and baling outlets and representative startup/idle/failure states before deciding absence. Add every real species and captured-residue outlet atomically; retain uncaptured paths. Integrated volume is not a rate; COD/VOC is not a named chemical. | kg; kg/m3; m3; m3/h; h | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_species_supply | trim_supply | bale_dust | speciated_survey | row_id; species/CAS; particle fraction; medium; stage/state; stack/fugitive path; concentration; integrated volume or actual flow/time; T/P; wet/dry; composition; capture; blanks; recovery; detection limit; uncertainty | Competent lab surveys actual resin, thermal handling, maintenance and baling outlets and representative startup/idle/failure states before deciding absence. Add every real species and captured-residue outlet atomically; retain uncaptured paths. Integrated volume is not a rate; COD/VOC is not a named chemical. | kg; kg/m3; m3; m3/h; h | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |
| cp_fg | fg_service | fg_receipt; gross_shipment; fg_loss; service_power; service_tie; service_tag | cohort_service | original cohort; Qc; complete production vector; opening/closing FG; gross V; returned lot/original dispatch/reversal; real rework; service date/cutoff; integrated power; added wire/tag; component stocks; P/N/ER_in/ER_out; earlier outward crossing and outstanding return links; H; causal allocation evidence; asset history/D/u/prior shares | Custodian links every service and physical movement to the original released cohort including old FG and closing stock. Keep original production history separate from real new increments; no use of current new Q for old cohorts. Record service and physical mass unnormalised; preserve full packaging and reusable asset histories as cp_pack, including first non-purchased external receipts and the prior outward link for every ER_in. | kg; kWh; MJ; actual service unit | each event/lot and representative operating state | complete manufacture and later original-Qc service periods | actual origin through supply and original-cohort services | per 1 kg reference flow | raw records; tests; calibration; supplier/receiver evidence; complete historical vectors |

aggregation_rule declares the final presentation basis and refers to the same report_once result; collection methods retain undivided raw records and perform no division.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_convert | all inventory rows | Convert actual raw units and independently justified states first. E_MJ = 3.6 × E_kWh; V_m3 = 0.001 × V_litre; mass = measured V × independently measured same-fluid rho. Integrate only a true rate. Species mass = sum(c × integrated V) on a matched basis or integral(c × flow_rate × dt); do not combine both. | raw readings; compatible units; T/P; independently measured density; speciation | converted raw ledger |  |
| attributed_vector | all inventory rows | For each source-cohort exchange i retain its full inherited opening-WIP vector plus actual period increments less the supported vector remaining in closing WIP and independent exclusive other-beneficiary work. Apply a_subdivide then exchange-specific a_physical and only residual a_residual. Transfer history once. A_i is the resulting undivided attributable numerator in the row unit; never a scalar LCIA score or arbitrary shared fraction. Released closing FG stays in completed production and is not subtracted. | cp_material_cast; cp_material_supply; cp_release; cp_energy_cast; cp_energy_supply; cp_water; cp_species_cast; cp_species_supply; cp_pack_cast; cp_pack_supply; cp_fg | A_i | `ilcd-handbook-2010` |
| physical_gates | raw manufacture; supply; FG; combined | Independently close whole mass and relevant C/H/O and actual contaminant/metal elements on measured composition bases. Origin opening raw/WIP/in-use auxiliary and packaging stocks + real external materials + real rework in = matching closing stocks + actual net conforming film + its outward attached core/packaging + trim transfer + waste/species + actual external Product returns. Supply opening WIP/in-use auxiliary and empty/attached/reusable packaging stocks + trim receipt + actual external materials/returns = matching closing stocks excluding new-release FG + new net Q + packaging attached to that new FG + actual rejected/lost outlets and external returns sent. Packaging attached to new FG appears here once only and is excluded from the matching closing-stock term; the component ledger and consolidated stocks still retain its full physical mass. Same-cohort closing FG is already part of Q; never add it again as production. FG opening net film + new Q receipt + linked external returns + real rework receipt = closing net film + gross outward V + losses + transfers to rework. Add each complete packaging/service material subledger for full physical FG closure. Combined gate cancels all internal trim/Q/rework/attached-package transfers. Keep physical gates independent of A_i and burden shares. | cp_material_cast; cp_material_supply; cp_release; cp_water; cp_species_cast; cp_species_supply; cp_pack_cast; cp_pack_supply; cp_fg | independent raw physical gates | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| pack_balance | each packaging component | For each core, wire, tag and actual added component independently: opening empty + opening attached WIP/FG + opening reusable + actual purchases P + first external non-purchased receipts N + external returns received ER_in = closing empty + closing attached WIP/FG + closing reusable + component with gross outward physical shipments + external returns sent ER_out + waste. P, N and ER_in are mutually exclusive physical receipt classes; first loaned, customer-owned or freely supplied components are N, not assumed purchases or returns. Record each crossing once only, including outward shipment versus ER_out. Each ER_in must link the same component's earlier evidenced external outward crossing, including a pre-period crossing where applicable. Each return quantity must not exceed the unmatched outward quantity immediately before that return; cumulative returns must not exceed the original matched outward quantity. Preserve original manufacture/provider history through N and returns; a missing purchase price never means zero burden or a new provider charge. Internal reuse/reattachment cancels; it is not new procurement, net product Q or an automatic coproduct. Whole component masses and source partitions are non-additive with one provider. | cp_pack_cast; cp_pack_supply; cp_fg | complete component ledgers | `ilcd-handbook-2010` |
| fg_cohort | fg_service | Maintain original Qc, complete production vector and physical gross V separately from actual incremental service vector A_service. Assign actual services exclusively first then apply the same hierarchy for genuine common service exchanges. H may evidence service causality but never replaces Qc as final production normalization. Old FG/returns keep original history and linked delivery reversals; add only real rework. Current-period new Q does not absorb an old cohort. Service supplements carry an explicit cutoff and never recreate inherited manufacture. | cp_fg; cp_pack_cast; cp_pack_supply; original Qc; original production vector | original-cohort service increment | `ilcd-handbook-2010` |
| asset_share | included asset manufacture attribution | For one original manufacture vector B attribute f × B only after the persistent ledger verifies f = matched use u / evidenced whole installed service D and prior shares + all new shares <= 1. D/history unknown leaves final manufacture attribution unavailable. Original physical mass and stock crossings remain full; actual repairs/replacements have separate real increments and identities. Perform this attribution before the single report_once normalization. | cp_pack_cast; cp_pack_supply; cp_fg; B; u; D; all prior shares | conserved manufacture attribution | `ilcd-handbook-2010` |
| report_once | all non-reference exchanges | x_i = A_i / Q; A_i is the complete undivided attributable numerator in the declared row unit; Q is original first-quality-released net feedstock kg of that target cohort. Execute this division once only after raw conversion and actual attribution; cards and aggregation reference that same result. Service-only results use original cohort Qc in place of Q and keep incremental A_service separate from inherited production; H, gross V and current-period unrelated Q are never that denominator. Preserve all real burdens when Q = 0 and issue no unit result. | A_i; Q; cp_release; cp_fg | x_i | `ilcd-handbook-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_raw | all exchanges | Require actual site/lot/state records, complete startup/idle/failure/cleanup coverage, calibrated units, matched periods and uncertainty; no factory or grade numbers are invented. | raw records; calibrated meters; full operations |
| dq_identity | all selected identities | Review full native basename/synonyms/comments, CAS, grade, route, form, geography, medium, type and every property plus exact referenced chain. Unknown provider/grade and missing auxiliary UUID remain specific requirements, not automatic core failure. A real core contradiction remains unresolved. | full native records; exact support chain; supplier specification |
| dq_species | all real outlets | A complete species/water/composition survey is required for a numerical package. Conditional aldehydes and dust cards are examples, not a closed list or permission for zeros. COD/VOC indicators never replace chemical mass; captured waste and emitted species must not overlap. | lab methods; blanks; recovery; limits; actual receiver records |
| dq_history | stocks and services | Keep every per-flow WIP/FG inherited vector, original Qc, linked returns/reversals and full component/asset histories across periods. Report production and service completeness separately; later service supplement does not revise physical production twice. | cohort histories; gate reconciliation; complete component ledgers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference | Verify actual single LDPE formulation, cast-film source and unprocessed flexible-strip cold-bale state, actual acceptance/legal handover and unique first release. Do not generalise to all CPC39270 or use postcommercial Grade A proof. | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026` |
| v_native | each exchange | A UUID requires complete compatible native identity and exact property/unit chain. An unresolved edge-strip/reference commodity must not borrow the generic raw-material Polyethylene identity; independently verify formed scrap state, formulation, receiver function and actual provider. A broad basename or taxonomy alone is insufficient. It cannot borrow <=5 mm debris, cleaned waste-mixture, optical-assembly or regenerated PE. Preserve all adopted limits in the consumed row context and actual provider matching. | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |
| v_balances | all gates | Check independent whole mass and relevant elements/species/water, actual source partitions and inherited WIP vectors, full FG and each packaging component gate. Internal handovers cancel. Released closing FG is already in Q; full gross V remains physical and not multiplied by allocation shares. A residual cannot identify two unknown species or fabricate reaction water. | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| v_normalization | all records | Audit raw unit/rate conversions and actual attribution before the single A_i/Q calculation. Raw collection never divides. Q0 preserves real burdens with no unit result. Old-cohort services use original Qc, never H/current Q/dispatch, and do not add inherited production again. | `ilcd-handbook-2010` |
| v_evidence | applicability and completeness | Source scope and actual foreground evidence must support the route, exclusions and any quantitative claim. Industrial manufacturing evidence does not justify allocation by itself. Unknown native core, actual emissions or physical conversions are disclosed rather than passed; a finite engineering result is not scientific, translation, mapping or publication approval. | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to later physical recovery at compatible acceptance state with actual composition and burden handover |
| allowed_use | Specified-origin LDPE trim supply after core identity, actual values, provider and method are verified |
| excluded_use | Whole-leaf coverage; new-film/recycled-pellet substitution; unproven zero history; automatic credit; methodology or translation approval |
| required_metadata | known LDPE grade and complete supplied formulation; actual additive and contaminant assays; single-layer noncellular unreinforced unsupported uncoated unprinted film origin; electric flat-die chill-roll casting route; pre-consumer edge-cutting origin and source lot; unwashed unground unagglomerated unpelletised flexible-strip state; no free liquid and measured retained moisture; segregated natural colour and actual receiver cleanliness limits; exact cold-bale and tie specification; legal transfer status and receiver acceptance; source manufacturing allocation and inherited per-flow vector; unique first release and reversal link; geography and period; actual supply voltage and provider boundary; cooling circuit and actual water states; raw/WIP/FG opening and closing stocks; each packaging component and reuse history; gross outward mass and separate original-cohort services |
| required_quality_disclosure | Unresolved exact reference-commodity identity and pending independent review; unresolved auxiliary/waste identities; actual value/species coverage; source applicability/counterevidence; allocation sensitivity; WIP/FG and service cutoff |
| update_trigger | Polymer/formulation, origin route, particle form, washing/grinding/pelletising, contamination/moisture, acceptance/legal state, energy/provider, Q gate or allocation evidence change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| lyb-film-extrusion | handbook | LyondellBasell. A Guide to Polyolefin Film Extrusion. Printed identifier 6047/1004; PDF metadata 2015. https://www.lyondellbasell.com/globalassets/lyb/our-solutions/products/documents/polymers-technical-literature/A_Guide_to_Polyolefin_Film_Extrusion.pdf | Printed pp. 9-13 and 20-30: pellet handling; distinct cast/blown and multilayer routes; flat-die/chill-roll formation; edge-cutting capture; start/stop and cleaning. No default quantities or recycling allocation. |
| greenview-ldpe-scrap | literature | Greenview Waste Management. Sell Scrap LDPE Film and Polythene. Publisher HTML, accessed 2026-11-21. https://www.greenview-wm.co.uk/materials/sell-ldpe-scrap | Production scrap and preparation sections: clean extrusion/conversion edge trim is distinct from startup dollies; separated consistent grades; covered storage and real buyer/transfer interface. Ratios advertised for other grades are not adopted. |
| boa-plastic-baling | literature | BOA Recycling. Efficient Processing of Plastic Waste. Publisher HTML, accessed 2026-11-21. https://www.boarecycling.com/en/solutions/plastic-waste/ | Production-film scrap and trim; horizontal compression and external processor handoff; configuration depends on actual feed. Whole-roll cutting and PET perforation are adjacent excluded branches. |
| rema-plastics-2026 | standard | ReMA. ISRI Specifications, January 2026. Plastic Scrap P-2025, printed pp. 39-40 and 45-46. https://www.isrispecs.org/wp-content/uploads/2026/01/2026-January-ReMA_ISRI_Specifications.pdf | Baled versus densified/flake definitions; dry condition; tying/integrity and documented contract variation. Grade A/B is explicitly post-use commercial film and does not certify this pre-consumer stream; its density and contamination numbers are not transferred. |
| ilcd-handbook-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance. First edition March 2010. Sections 7.9.2–7.9.3, printed pp. 255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional cases requiring partitioning: subdivision/virtual subdivision; exchange-specific determining physical causality; residual economic value at common process gate and actual state. Not a universal allocation/substitution choice. |
| unsd-cpc3 | official_guidance | UNSD. CPC Version 3.0 explanatory notes, 30 June 2025, PDF p.202; 23 October 2026 explanation table CPC3!A1901:D1901. https://unstats.un.org/unsd/econstats/classifications/cpc | 39270 classification and later HS3915 linkage; no change to frozen denominator. |
| wco-hs39-2022 | official_guidance | WCO. HS 2022 Chapter 39, notes 6–7, 3915.10. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0739_2022e.pdf | Primary-form exclusion; ethylene-polymer scrap classification. No lot acceptance or default quality limits. |
| 3g-scrap-interface | literature | 3G Plastics. Products/services and FAQ, accessed 2026-11-21. https://www.3gplastics.com/ | Actual recycler distinguishes purchased postindustrial trim/baled film from customer-owned toll reprocessing and resulting pellets; no proof of the selected casting lot. |
| rpi-scrap-interface | literature | Recovering Polymers Inc. Plastics We Buy, accessed 2026-11-21. https://recovering-polymers.com/plastics-we-buy-and-sell.php | Edge/roll trim purchasing and sample-specific acceptance. Also lists LDPE/nylon and laminates: PE label does not prove monolayer LDPE. No universal fractions or quantities. |
