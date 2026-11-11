---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.crystalline-hexamine-by-liquid-phase-ammoniation
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Crystalline hexamine by liquid-phase ammoniation

## 1. Scope and Applicability

This PCR covers unstabilized crystalline hexamethylenetetramine (hexamine, CAS100-97-0, C6H12N4) made by liquid-phase reaction of an aqueous formaldehyde feed with anhydrous liquid ammonia, followed by reaction-heat control, evaporation/crystallization, centrifugation, drying and first finished-product acceptance. Product has no intentionally added stabilizer, dust suppressant or other formulation ingredient. Actual assay, residual water, particle form and impurities are declared; no universal numerical grade, purity, feed concentration, recipe, yield or operating condition is assigned.

Exclude gas-phase formaldehyde feed routes, intentional stabilized/formulated grades, solutions sold as product, fuel tablets, resin manufacture, melamine and other heterocycles, and simple repacking of purchased finished hexamine. Purchased feedstocks and external utilities retain their actual compatible production and logistics burdens. This bounded route uses genuine externally supplied steam and, when present, cooling-water service; an onsite boiler, burner, upstream formaldehyde plant or materially different reaction route requires explicit additional unit operations and atomic exchanges before use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.crystalline-hexamine-by-liquid-phase-ammoniation |
| classification_refs | CPC 3.0 35230; narrower product and route boundary |
| covered_products | Unstabilized solid crystalline hexamine CAS100-97-0 from the declared liquid-phase synthesis |
| excluded_products | Stabilized or compounded grades; sold solutions; tablets; resins; melamine; repacking-only and gas-feed routes |
| representative_product | Actual accepted industrial crystal/granular powder without intentional additives; no food/pharmaceutical claim |
| production_route | Aqueous formaldehyde plus liquid anhydrous ammonia; heat control, evaporation/crystallization, centrifugation and drying |
| market_state | First accepted whole net crystalline product, excluding packaging; actual free-water/assay conventions retained |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply chemically identified unstabilized industrial hexamine |
| How much | 1 kg reference flow |
| How well | Actual approved lot assay, impurity and moisture methods; specified particle state; no functional equivalence to other heterocycles |
| How long or cycle | One unique first finished-lot acceptance and its original production cohort; later handling retains that basis |
| reference_flow_link | finished_hexamine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hexamethylenetetramine `6968b0c9-fa93-43e1-8171-224bc2ed91e5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS100-97-0 and unstabilized identity; actual assay and impurity methods; crystalline particle state; net whole-product mass and water convention; aqueous-formaldehyde composition and assay basis; anhydrous liquid-ammonia feed; liquid-phase reaction and drying route; site and continuous interval; unique first-acceptance gate and cohort; actual utility/provider interfaces; packaging and filter configuration; stock and burden genealogy; actual coupled on-site treatment producer and matched phase interfaces |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole accepted net product at the fixed gate; measure gross minus actual tare. Dry assay, nitrogen content and later delivered mass are companion bases, never substitute denominators. |
| feed_basis | aqueous_formaldehyde, liquid_ammonia, process_water | Mass | kg | Whole feed mass once. CH2O-equivalent assay is not free-HCHO species fraction or free-water mass. Retain actual hydrates/oligomers, stabilizer/methanol and carrier-water conventions independently. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The actual native AC flow uses this MJ property; convert measured kWh by 1 kWh = 3.6 MJ as an electrical unit conversion, without inferring fuel, combustion or a generation mix. |
| utility_mass | steam_in, condensate_return, cooling_water_in, cooling_water_return | Mass | kg | Record actual fluid mass and thermodynamic state on both sides. Heat/provider conversion needs measured compatible enthalpies and units; kg and MJ are not interchangeable. Do not purchase both mass steam and its embedded heat twice. |
| pack_tare | sack_in, sack_delivered, sack_returned, liner_in, liner_delivered, liner_returned | Mass | kg | Measure actual packaging component tare and configuration; count conversion uses measured same-configuration mass. Retained product/water are separate nested contents. |
| whole_waste | mother_liquor_purge, offspec_hexamine, spent_centrifuge_cloth, spent_dust_filter_bag, sack_scrap, liner_scrap, evaporator_condensate_to_treatment, evaporator_gas_to_treatment | Mass | kg | One actual whole receiver transfer Qt includes all substrate, chemical and water components once. Model only evidenced non-overlapping cohort treatment demand A_c in compatible provider units / original Q_c; Qt/Q_c is analytical only. Unknown shares stay unresolved. |
| air_species | formaldehyde_air, ammonia_air, methanol_air, hexamine_air, water_vapour_air | Mass | kg | Species and medium are explicit; preserve analytical-equivalent conversions, gas conditions and non-detect bounds. Total VOC/PM/COD is not a species mass or permission to assign all residue to hexamine. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased aqueous formaldehyde, anhydrous liquid ammonia, make-up water and externally supplied utilities at the synthesis site |
| starting_condition_role | Foreground entry interface; actual upstream formaldehyde/ammonia manufacture and logistics remain linked burdens |
| product_classification_scope | Only named unstabilized crystalline hexamine within proposed35230 subset |
| recursive_input_rule | Internal mother liquor, separated dust and rework retain genealogy and inherited burdens once; imported same-product material needs its actual upstream history and is not new onsite synthesis |
| upstream_dataset_requirement | Match actual composition, phase, grade, geography/time, provider unit and return/recovery boundary for each raw material, utility, component and treatment service |
| disclosure | Actual process diagram, stock/cohort events, raw quantities, impurity/speciation and water conventions, utility closure, packaging/filter histories, provider gaps and measurement coverage |

### Complete normative scope and accounting context

This PCR covers unstabilized crystalline hexamethylenetetramine (hexamine, CAS100-97-0, C6H12N4) made by liquid-phase reaction of an aqueous formaldehyde feed with anhydrous liquid ammonia, followed by reaction-heat control, evaporation/crystallization, centrifugation, drying and first finished-product acceptance. Product has no intentionally added stabilizer, dust suppressant or other formulation ingredient. Actual assay, residual water, particle form and impurities are declared; no universal numerical grade, purity, feed concentration, recipe, yield or operating condition is assigned.

Exclude gas-phase formaldehyde feed routes, intentional stabilized/formulated grades, solutions sold as product, fuel tablets, resin manufacture, melamine and other heterocycles, and simple repacking of purchased finished hexamine. Purchased feedstocks and external utilities retain their actual compatible production and logistics burdens. This bounded route uses genuine externally supplied steam and, when present, cooling-water service; an onsite boiler, burner, upstream formaldehyde plant or materially different reaction route requires explicit additional unit operations and atomic exchanges before use.

Native admission is a whole Product: Hexamethylenetetramine CAS100-97-0, white crystalline compound, factory production mix, without hard grade, synthesis-route or geography restrictions. Actual unstabilized crystalline grade must match independently; the UUID supplies no provider, quantity, food/pharmaceutical approval or safety claim. Its Chinese baseName 六亚甲基四胺 is retained exactly, but polluted Chinese aliases in comments are not adopted as chemical identity. The native34150 classification is a disclosed source discrepancy. Current CPC3.0 PDF170 names the specified35230 heterocycle family; WCO2022 Chapter29 PDF18 defines2933.69 under its triazine heading, and USITC2025 explicitly places named hexamine at2933.69.50. These primary distinctions support a narrower proposal, not automatic mapping acceptance or relabeling every heterocycle.

USITC documents industrial reaction, crystallization, centrifugation, drying and distinct pure versus stabilized grades; its producer-derived quantities and operating examples are not defaults. ATEC independently identifies a liquid aqueous-formaldehyde/anhydrous-liquid-ammonia variant and separately a gas-feed variant. Only the liquid-feed variant is included. Integrated formaldehyde production in the USITC example remains actual upstream production: a purchased-feed interface must retain a genuine compatible producer dataset, not erase methanol oxidation or other supplier operations.

Receive and meter whole liquid feeds → controlled liquid-phase synthesis → evaporation/crystallization → centrifuge → drying → sampling/packing and first acceptance → actual accepted storage/dispatch. Keep actual mother-liquor return, reaction cooling, vacuum/condensation, washing, abatement and cleaning. No actual duty disappears because the starting card set lacks it. Each additional actual reagent, lubricant, sorbent, utility, packaging component, waste, recovered product or environmental species needs its own atomic card before a complete study is claimed.

The balanced theoretical relation 6CH2O + 4NH3 → C6H12N4 + 6H2O is a species/element check on the stated anhydrous-equivalent convention, not a recipe, conversion, yield, purchased-feed amount or water-generation factor. Aqueous formaldehyde analysis often reports CH2O-equivalent and can include hydrated/oligomeric forms; that assay is not automatically a free molecular HCHO fraction or free-water mass. Keep whole feed kg, actual stabilizer/methanol, formaldehyde-equivalent assay, molecular speciation and water conventions separately. Do not assume reacting HCHO or NH3 is conserved, complete reaction, zero side products or a universal reaction-water amount. Use actual reaction extent/species evidence, independently checked C/H/N/O and total mass, with unresolved residuals exposed rather than fitted.

The water ledger distinguishes actual carrier/free/chemically associated water, reaction formation/consumption on the declared speciation convention, washing and cooling make-up, product moisture, mother liquor, wet wastes, condensates, vapour, drains and stock changes. Do not add solution carrier water or methanol as a second purchased input when already in the whole feed. Never count hydration water both in a component convention and again as newly generated water. Loss on drying is not a chemically specific water measurement when other volatiles are possible. Raw evaporation and condensation remain physical phase transfers, not evidence of reaction water or a closure flow.

Actual externally supplied steam and cooling fluid retain inlet/return mass, temperature, pressure, phase/dryness, enthalpy and provider conditions. A measured heat balance distinguishes reaction heat, recovered internal heat, imported heat, heat rejection, storage and loss. Preserve actual fluid transfers separately from compatible modeled provider demand; do not count mass steam and its already embedded heat twice or invent a mass-to-MJ factor. Outside utility producers retain real energy, fuel, water and emission burdens. An onsite combustion route requires its real fuel, air/O2, formed water, species and heat interfaces and is not covered by hiding it behind this purchased-utility card.

Use three linked production accounts. The complete physical ledger contains external receipts/returns/dispatches, raw/WIP/FG/rejected stocks, mother liquor, dust, samples, packaging, filter fleets and all actual waste/releases. Equal internal transfers cancel only at the aggregate boundary. The reference-event ledger independently sums Q = sum(m_e) over unique first finished-lot acceptances at one fixed gate, locking original event ID, net mass, moisture and cohort. The attributed burden ledger carries own opening WIP vectors once, new disjoint foreground/upstream vectors, closing carried vectors and terminal assignments. Provider aggregates and their embedded decomposition are alternatives, never additive duplicates. Q is a reference-event account, not another external physical output.

For every original accepted cohort, reconcile Q0 to disjoint net remaining deliveries, all actual onsite accepted states, irreversible losses and other terminal dispositions on the original acceptance basis. Returns/retests/rework/recycled dust never create a second first-acceptance event. Use delivered-plus-closing-new-FG only when all other postgate states/exits are proven absent; opening FG dispatch is not new acceptance. Do not restore lost solid or water into surviving product and also count that loss. Later external water/additions are physical inputs and removed from original-cohort equivalents without inventing closure. Later handling, service and treatment use the original cohort basis; zero/unknown Q leaves raw records intact and normalized results unresolved.

For each actually used woven-polypropylene sack and polyethylene liner, retain separate component IDs, actual tare/construction, received/delivered/serviceable-return/customer-return/scrap quantities and opening/closing empty and filled stocks. These are concrete conditional components, not default packaging or a permission to omit other real components. Net hexamine excludes every packaging component. Reuse does not create another manufacture, reference product, co-function or recovery credit. Retained product/liquor/water on a contaminated item are nested contents, not empty tare or a fictitious extra stream.

Each actual centrifuge cloth and actual polyester dust-filter bag retains its own material, dimensions, substrate mass/count, installation/removal/cleaning history, opening/closing physical fleet, retained chemicals/water and receiver. Supplier manufacturing/service demand requires actual compatible units and actual history across all served original cohorts. No guessed component mass, lifetime, replacement rate or annualization is permitted. Do not shrink a whole spent-filter export because only part of its service burden belongs to the current cohort.

For each waste transfer, the receiver ledger records one whole actual Qt, its actual composition and full total provider treatment quantity/unit once. Substrate, chemical, water and observed physical-cohort origins are nested provenance accounts only where known. A separate modeled ledger assigns evidenced non-overlapping treatment demand A_c or burden vectors to actually served cohorts in compatible provider units, then divides by each original Q_c. Qt/Q_c is an analytical ratio, not a second modeled exchange or a full Qt charge to every cohort. Unknown shares/history/provider basis stay unresolved. Shared bag/liner attribution applies only with actual shared recipient/service history. Never split physical export using burden shares; never add attached-powder/liquor exchanges or extra treatment demand unless physical separation occurred before the boundary and distinct actual streams reconcile once.

The chosen liquid-waste interface is measured export to a qualified actual receiver, not assumed zero wastewater or a disguised direct discharge. Mother liquor, condensates and scrubber liquor keep actual destinations and internal returns distinct. Direct environmental liquid releases, recovered saleable products, treatment chemicals or extra species require their own actual atomic rows and supported provider/compartment checks before study completion. Captured dust is internal recycle or measured exported residue; it is not also an air release.

IS4306:1987 with included1990 amendment is a retained historical industrial hexamine method source: its nonaqueous potentiometric assay and defined loss-on-drying/ammonia tests keep their own sample, reagent, endpoint, blank and reporting conventions. JECFA is a distinct acid-decomposition/back-titration assay on its stated dried sample; do not mix its equivalence with the nonaqueous assay or silently replace as-received whole-product mass by dried assay mass. The complete IS scan and complete JECFA monograph are retained; numerical grade/purity limits, food use, certification and clinical claims are not adopted. Actual laboratory method selection, sampling, interference/recovery and uncertainty must match the real unstabilized solid matrix. A drying loss does not establish water alone or plant effluent/air species.

CWW2016 supplies chemical-stream inventory and monitoring-quality context, not hexamine-specific emission factors or a validated factory test. Establish actual post-control species, gas flow/moisture/temperature/pressure, sampling recovery/interferences, detection limits, startup/bypass/fugitive paths and uncertainty. CH2O-equivalent analytical reports, total VOC, ammonia-N, total nitrogen, COD/TOC or total dust require explicit species-basis/non-overlap decisions; never assign all to one retrievable UUID. A source-specific analytical procedure not established for the actual matrix leaves the affected scope unresolved; a future SOP promise or finite checker cannot close it. Include actual laboratory reagent/waste burdens as separate atomic exchanges when within the study boundary.

Whole-waste cards follow actual physical assemblies. If a woven sack and its liner leave together, sack_scrap is one whole contaminated assembly including the liner and all retained contents, with liner/substrate/chemicals/water nested; liner_scrap is used only for an actually separate discarded liner stream. Apply the same rule to actual filter assemblies and their components. Do not invent separation, export both an intact assembly and its nested components, or duplicate provider treatment. Analytical CH2O-equivalent, ammonia-N or other equivalent quantities are companion observations, not additional physical constituents to sum with hydrates, molecules or water; component/element closure uses an explicitly disjoint consistent chemical basis.

USITC Figure1.2 explicitly shows First Effect → Stripper/Catalytic Oxidizer System → Distillate. This known operation is not replaced by the separate mother-liquor-purge card, presumed offsite or assigned zero burden. For that configuration, retain a complete, actual, separately modeled on-site treatment producer with its real source/owner, process boundary, site/time and provider reference unit. Match actual sender/receiver transfer IDs, whole mass, phase, composition, temperature/pressure and fate on both sides. The schematic alone does not establish whether the selected interface is condensed aqueous liquor, overhead gas or distinct real streams: establish actual phase boundaries; do not invent a phase split or count one stream twice across an internal condensation. Conditional condensate and gas cards are used only for the physically real streams. The distillate-receipt card is used only if that actual treated mixture returns to this unit; other producer outlets keep their real destination and are not assumed pure water, freshwater discharge or a credit.

The linked stripper/CatOx producer must retain every genuine reagent, fuel, air/O2, water, utility, emission, residue, heat and return interface of its actual configuration, with independent reaction/species/water conservation and complete source-supported inventory. There is no generic-disposal substitute, assumed oxidation recipe, available qualified background claim or permission to omit an actual operation. Qualify the real complete producer and its matched source evidence before complete study use; this PCR does not supply that plant dataset. Represent its actual joint demand/burden vector once across all its inlet/outlet interfaces and all served original cohorts, with evidenced compatible provider units and non-overlapping A_c/Q_c. Do not recharge the full producer separately for each phase card or again for a returned distillate. Paired internal flows cancel only on consolidation while full producer burdens remain once. Unknown producer, phase/composition, control/matrix or units leave the affected result unresolved and block a complete LCI claim; a future SOP or finite checker does not resolve them. A genuinely different documented plant variant must explicitly establish its own actual control boundary, not infer absence from ATEC’s abbreviated description.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | hexamine_production | Include the declared liquid reaction through first acceptance and all actual control/storage/handling duties; no repacking substitution. | usitc-hexamine-2025; atec-hexamine-process |
| boundary_upstream | all inputs | Preserve real compatible producer burdens and actual interfaces; do not add provider aggregate and embedded decomposition twice. | jrc-cww-2016 |
| boundary_species | all outputs | Actual chemical/water formation, capture, recycle and receiver/environment destinations remain distinct; no zero or closure default. | usitc-hexamine-2025; jrc-cww-2016 |
| boundary_complete | all inventory rows | Add each additional actual atomic exchange and disclose every missing scope before complete LCI use. | jrc-cww-2016 |
| boundary_identity | finished_hexamine | Require actual whole unstabilized crystalline CAS100-97-0 Product fit and declared source discrepancies. Named HS evidence plus current CPC-family context supports only a proposed narrower relation, not automatic mapping. | usitc-hexamine-2025; jecfa-hexamine; unsd-cpc3-2025; wco-hs29-2022 |
| boundary_methods | cp_accept | Retain complete selected solid-sample assay/quality procedures and their distinct matrix/sample/equivalence limits; technical use of IS/JECFA is not a numerical grade, food or certification claim. | bis-is4306-1987; jecfa-hexamine |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hexamine_production | Liquid-phase hexamine synthesis and finishing | required | Actual declared route and complete included duties | foreground production | 1 kg reference flow |

### Process: Liquid-phase synthesis and finishing (`hexamine_production`)

#### Inputs

##### Product flows

###### Aqueous formaldehyde feed (`aqueous_formaldehyde`)

Weigh whole actual feed and measure CH2O-equivalent assay, actual molecular/hydrate and water conventions, stabilizer/methanol and impurity content; no pure gas or fixed-methanol formalin substitution.

- Selected flow: Industrial aqueous formaldehyde feed solution
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_feed. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_feed
- Sources: atec-hexamine-process; usitc-hexamine-2025

###### Anhydrous liquid-ammonia feed (`liquid_ammonia`)

Actual industrial liquid feed; internal ammonia return is not fresh purchase. Record vaporization/pumping and actual supplier phase/basis.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_feed. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_feed
- Sources: atec-hexamine-process

###### Fresh process make-up water (`process_water`)

Actual separately purchased make-up/cleaning water only; feed carrier water, internal mother liquor and return condensate are not this fresh input.

- Selected flow: Process make-up water
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_feed. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_feed
- Sources: jrc-cww-2016

###### Electric drives and controls (`electricity`)

Meter actual reactor-loop, cooling/vacuum pumps, centrifuge, dryer, extraction, packing and attributable idle/rework states; provider/voltage remain actual requirements.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_power. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_power
- Sources:

###### Imported process steam (`steam_in`)

Actual steam fluid with measured pressure/temperature/dryness and inlet enthalpy; compatible genuine producer burden mandatory. No assumed heat factor or on-site burner deletion.

- Selected flow: Imported process steam
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_utilities. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources: usitc-hexamine-2025; jrc-cww-2016

###### External cooling-water inlet (`cooling_water_in`)

Conditional real cooling-service interface; retain inlet mass/state and same-return closure, distinguish fresh water consumption and actual producer service.

- Selected flow: External recirculating cooling water
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_utilities. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources: usitc-hexamine-2025

###### Centrifuge filter cloth (`centrifuge_cloth`)

Conditional actual centrifuge cloth; actual material/dimensions/history and compatible provider unit required; this is a whole cloth, not bare polymer or a default lifetime.

- Selected flow: Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_asset. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources:

###### Polyester dust-filter bag (`dust_filter_bag`)

Conditional actual polyester dust bag, with its own stock/service history distinct from centrifuge cloth; other actual media need separate cards.

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_asset. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources: jrc-cww-2016

###### Woven polypropylene sack (`sack_in`)

Conditional actual sack construction, tare and upstream manufacture; no seed-specific bag UUID or prescribed package size.

- Selected flow: Woven polypropylene packaging sack
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_pack. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: usitc-hexamine-2025

###### Polyethylene inner liner (`liner_in`)

Conditional actual polyethylene liner, separately weighed and traced; IS historical packing context is not a universal liner mandate.

- Selected flow: Polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_pack. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: bis-is4306-1987


###### Actual treated hexamine-process distillate received (`treated_distillate_received`)

Conditional actual whole treated mixture received back from the qualified on-site stripper/CatOx producer. Match its real outlet event, phase and measured composition; no assumed return, pure-water identity or second embedded producer demand.

- Selected flow: Actual treated hexamine-process distillate received
- Flow property / unit: Mass / kg
- Amount rule: Actual paired received distillate mass attributable to original cohort / positive original Q_c; cancel internal paired transfer on consolidation, with no new purchase or second treatment burden. cp_accept; cp_treatment. Unknown phase/provider/basis remains unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_treatment
- Sources: usitc-hexamine-2025; jrc-cww-2016

#### Outputs

##### Product flows

###### First accepted unstabilized crystal (`finished_hexamine`)

Whole net accepted solid at unique first gate; Q is not an additional physical dispatch and excludes every packaging component.

- Selected flow: Hexamethylenetetramine `6968b0c9-fa93-43e1-8171-224bc2ed91e5`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_accept
- Sources: usitc-hexamine-2025; atec-hexamine-process

###### Steam condensate return (`condensate_return`)

Actual measured return mass, phase/state and provider treatment boundary; no automatic heat or water credit.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_utilities. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources: jrc-cww-2016

###### External cooling-water return (`cooling_water_return`)

Actual return paired with its inlet, with measured enthalpy/temperature and loss or blowdown separately accounted.

- Selected flow: Returned external cooling water
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_utilities. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources: jrc-cww-2016

###### sack delivered with product (`sack_delivered`)

Actual delivered component tare, not product mass or a second co-function; retained contents keep nested product genealogy.

- Selected flow: Woven polypropylene packaging sack
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_pack. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

###### sack returned for reuse (`sack_returned`)

Only actual serviceable component returned outside the site; internal reuse is not another purchase and discarded contaminated material is waste.

- Selected flow: Woven polypropylene packaging sack
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_pack. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

###### liner delivered with product (`liner_delivered`)

Actual delivered component tare, not product mass or a second co-function; retained contents keep nested product genealogy.

- Selected flow: Polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_pack. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

###### liner returned for reuse (`liner_returned`)

Only actual serviceable component returned outside the site; internal reuse is not another purchase and discarded contaminated material is waste.

- Selected flow: Polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_pack. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

##### Waste flows

###### Exported mother-liquor purge (`mother_liquor_purge`)

One actual whole aqueous mixture to a real external receiver, with measured hexamine/formaldehyde-equivalent/ammonia/methanol/water and impurities as nested composition; internal recycle is not export and this is not direct freshwater discharge.

- Selected flow: Hexamine-synthesis aqueous mother-liquor purge
- Flow property / unit: Mass / kg
- Amount rule: Modeled non-overlapping whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_accept; cp_waste. Actual whole Qt and full total receiver demand recorded once; Qt/Q_c analytical only. Unknown attribution or units remain unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: usitc-hexamine-2025; jrc-cww-2016

###### Separated off-spec hexamine residue (`offspec_hexamine`)

A physically distinct measured solid residue; caught or spilled product retained internally is not export, and material attached to a cloth/bag/liner is nested in that whole contaminated item unless actually separated before the boundary.

- Selected flow: Discarded crystalline hexamine residue
- Flow property / unit: Mass / kg
- Amount rule: Modeled non-overlapping whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_accept; cp_waste. Actual whole Qt and full total receiver demand recorded once; Qt/Q_c analytical only. Unknown attribution or units remain unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-cww-2016

###### Contaminated spent centrifuge filter cloth (`spent_centrifuge_cloth`)

Actual whole contaminated receiver transfer includes substrate, retained hexamine/liquor and water once. Component/fleet/tare records are nested or separate physical ledgers; service shares never shrink actual export.

- Selected flow: Contaminated spent centrifuge filter cloth
- Flow property / unit: Mass / kg
- Amount rule: Modeled non-overlapping whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_accept; cp_asset. Actual whole Qt and full total receiver demand recorded once; Qt/Q_c analytical only. Unknown attribution or units remain unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources: jrc-cww-2016

###### Contaminated spent polyester dust-filter bag (`spent_dust_filter_bag`)

Actual whole contaminated receiver transfer includes substrate, retained hexamine/liquor and water once. Component/fleet/tare records are nested or separate physical ledgers; service shares never shrink actual export.

- Selected flow: Contaminated spent polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Modeled non-overlapping whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_accept; cp_asset. Actual whole Qt and full total receiver demand recorded once; Qt/Q_c analytical only. Unknown attribution or units remain unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources: jrc-cww-2016

###### Contaminated discarded woven polypropylene sack (`sack_scrap`)

Actual whole contaminated receiver transfer includes substrate, retained hexamine/liquor and water once. Component/fleet/tare records are nested or separate physical ledgers; service shares never shrink actual export.

- Selected flow: Contaminated discarded woven polypropylene sack assembly
- Flow property / unit: Mass / kg
- Amount rule: Modeled non-overlapping whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_accept; cp_pack. Actual whole Qt and full total receiver demand recorded once; Qt/Q_c analytical only. Unknown attribution or units remain unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: jrc-cww-2016

###### Contaminated discarded polyethylene liner (`liner_scrap`)

Actual whole contaminated receiver transfer includes substrate, retained hexamine/liquor and water once. Component/fleet/tare records are nested or separate physical ledgers; service shares never shrink actual export.

- Selected flow: Physically separate contaminated discarded polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Modeled non-overlapping whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_accept; cp_pack. Actual whole Qt and full total receiver demand recorded once; Qt/Q_c analytical only. Unknown attribution or units remain unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: jrc-cww-2016


###### Hexamine-evaporator aqueous condensate to on-site treatment (`evaporator_condensate_to_treatment`)

Only a documented actual condensed inlet phase to the named on-site treatment producer; source schematic identifies the branch but does not establish this phase boundary. Match sender/receiver whole mixture and do not duplicate the same overhead as both liquid and gas.

- Selected flow: Hexamine-evaporator aqueous condensate to on-site treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual paired whole transfer Qt retained once; modeled share A_c in verified compatible whole-mixture provider kg-equivalent / positive original Q_c only as part of one qualified joint treatment-producer demand, never a full producer charge for each phase. Nonmass producer units or burden vectors remain separately labeled in the joint ledger, not silently expressed as kg. cp_accept; cp_treatment. Unknown phase/provider/basis remains unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_treatment
- Sources: usitc-hexamine-2025; jrc-cww-2016

###### Hexamine-evaporator overhead gas mixture to on-site treatment (`evaporator_gas_to_treatment`)

Only a documented actual gaseous inlet stream, with water vapour, actual species and T/P/moisture conditions measured as one whole mixture. Internal condensation is not a second independently exported stream or another full treatment charge.

- Selected flow: Hexamine-evaporator overhead gas mixture to on-site treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual paired whole transfer Qt retained once; modeled share A_c in verified compatible whole-mixture provider kg-equivalent / positive original Q_c only as part of one qualified joint treatment-producer demand, never a full producer charge for each phase. Nonmass producer units or burden vectors remain separately labeled in the joint ledger, not silently expressed as kg. cp_accept; cp_treatment. Unknown phase/provider/basis remains unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_treatment
- Sources: usitc-hexamine-2025; jrc-cww-2016

##### Elementary flows

###### Formaldehyde to air (`formaldehyde_air`)

Actual post-control molecular-species mass to outdoor air, unspecified subcompartment; CH2O-equivalent analytical response needs documented conversion/recovery before species assignment.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_air. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### Ammonia to air (`ammonia_air`)

Actual post-control NH3 mass to outdoor air, unspecified; ammonia-N is a companion analytical basis, not the same mass.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_air. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### Methanol to air (`methanol_air`)

Conditional actual methanol release when present in real feed/control history; no assumed stabilizer fraction or emission factor.

- Selected flow: Methanol to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_air. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### Hexamine particulate to air (`hexamine_air`)

Actual measured chemical mass and compartment; total dust or captured mass cannot be assigned wholly to hexamine or duplicated as another particulate total without a justified non-overlap basis.

- Selected flow: Hexamethylenetetramine particulate to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_air. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### Net water-vapour release (`water_vapour_air`)

Actual incremental water vapour, separating ambient carrier moisture, evaporation/condensation and documented reaction-water convention; no stoichiometric emission default.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable row numerator / positive original Q; cp_accept; cp_air. Preserve complete actual physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: usitc-hexamine-2025; jrc-cww-2016

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | hexamine_production | Trace actual dedicated feeds and separately metered duties before allocation; conditional real co-products require actual quality/use and determining physical causality, with a disclosed justified alternative for residual joint burdens. No universal shares or avoided-production credit. | jrc-ilcd-2010 |
| allocation_physical | all outputs | Keep actual physical co-product, waste and utility-return quantities complete independently of burden shares; internal mother liquor/heat is not a sale or an extra purchase. | jrc-ilcd-2010 |
| allocation_inherited | all inventory rows | Own-WIP and supplier embedded histories enter once; actual later stock/asset/treatment services retain original cohorts and non-overlapping vectors, not full repeated Qt for each cohort. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | hexamine_production | finished_hexamine | first acceptance and sampling | event_id; cohort; lot; gross/tare/net m_e; moisture/speciation convention; assay method/sample basis; grade; impurities; sampling plan; later returns/states/losses | Calibrated whole-product weighing and representative sealed samples; keep IS or JECFA procedure/endpoint/sample basis distinct and laboratory QA traceable. Lock each first acceptance once and reconcile original-cohort states. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | kg | each first lot acceptance and subsequent state transfer | complete continuous interval and original cohorts | same declared product, route and site | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_feed | hexamine_production | aqueous_formaldehyde, liquid_ammonia, process_water | whole feed and stocks | row_id; whole mass; provider; assay and method; free HCHO/hydrates/oligomers; CH2O-equivalent basis; methanol/stabilizer; water convention; impurities; raw/WIP stocks; receipts/charges/returns; inherited vectors | Calibrated weighing/flow metering with actual density if needed; qualified composition and stock balance; separate whole feed from its nested analytical constituents and attributable demand. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | kg | each receipt/charge/return and stock boundary | complete continuous interval and original cohorts | actual feed interfaces and all reaction units | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_power | hexamine_production | electricity | electricity meters | meter; equipment; kWh; times; idle/rework; provider; voltage; delivery/loss boundary; shared driver | Submeter actual drives, controls and attributable ancillary duties; reconcile totals and measured causal drivers; convert electrical units only. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | MJ | meter intervals and equipment states | complete continuous interval and original cohorts | all included electrical equipment | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_utilities | hexamine_production | steam_in, condensate_return, cooling_water_in, cooling_water_return | physical utility and provider basis | row_id; inlet/return mass; temperature; pressure; phase/dryness; enthalpy; actual heat/reaction/recovery/rejection; losses/blowdown; provider unit; production boundary; raw stock; original cohorts | Measure paired physical fluid interfaces and actual thermodynamic states; close water/heat accounts. Match genuine producer units; document actual enthalpy conversion instead of adding mass and heat background demand twice. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | kg | each utility interval and change of state | complete continuous interval and original cohorts | actual external suppliers and all included thermal/cooling units | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_pack | hexamine_production | sack_in, sack_delivered, sack_returned, liner_in, liner_delivered, liner_returned, sack_scrap, liner_scrap | packaging transfer and attribution | component_id; construction/tare/count; received/delivered/returned/scrapped; empty/filled stocks; whole waste Qt; substrate/product/liquor/water; receiver/provider quantity/unit; observed physical provenance; actual shared history; evidenced shares; A_c; original Q_c | Weigh each actual packaging component/transfer and stock by genealogy; whole contaminated waste and full actual receiver demand recorded once. Nest contents; separately model only evidenced compatible cohort service/treatment A_c, never repeat full Qt across cohorts or infer a shared sack history. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | kg | each packing/return/disposal and stock boundary | complete continuous interval and actual histories | actual separate sack/liner configurations and receivers | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_asset | hexamine_production | centrifuge_cloth, dust_filter_bag, spent_centrifuge_cloth, spent_dust_filter_bag | physical filter fleet and service | component_id; actual material/dimensions/substrate mass/count; installed/removed/cleaned; opening/closing fleet; actual life history; original served cohorts; whole contaminated Qt; nested chemical/water; receiver/provider quantity/unit; observed provenance; evidenced shares; A_c | Measure actual components/fleet and whole spent transfers separately; no assumed mass or life. Use real served-cohort histories and compatible provider units for disjoint service/treatment vectors; physical Qt and full receiver quantity once, unknown shares unresolved. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | kg | each installation/removal/service and stock boundary | complete actual history across original cohorts | actual centrifuge/dust-filter components and receivers | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_waste | hexamine_production | mother_liquor_purge, offspec_hexamine | whole waste transfer | transfer_id; whole Qt; actual species/equivalent basis; wet/dry/phase water; impurities; origin; internal return; receiver/provider acceptance and unit; original cohorts; physical provenance; evidenced shares; A_c | Weigh each physically distinct whole mixture; retain stocks/destination and nested composition. Record actual receiver/provider total once; allocate modeled treatment A_c only with real non-overlapping cohort evidence and compatible units. No invented extra solute/water export. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | kg | each actual transfer and stock boundary | complete continuous interval and original cohorts | actual residue/aqueous purge and receiver interface | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_air | hexamine_production | formaldehyde_air, ammonia_air, methanol_air, hexamine_air, water_vapour_air | post-control species monitoring | row_id; outlet/compartment; method and matrix; species/equivalent; concentration; gas flow; moisture/T/P; duration; calibration/blanks/recovery; detection limit; startup/bypass/fugitive; carrier-water increment; uncertainty | Use source-appropriate validated sampling/analysis and compatible concentration-flow conditions; integrate actual post-control releases, separately address unmeasured paths and species conversion. Never infer a substance from total VOC/PM or set unmeasured to zero. Aggregation procedure: attributable numerator or A_c / original Q_c; raw physical totals retained separately. | kg | representative tests and all operating-state records | complete continuous interval including actual bypass/cleaning | all actual outlets and fugitive pathways | per 1 kg reference flow | Calibration, original records, method/basis evidence, complete stock/provenance and uncertainty checks |
| cp_treatment | hexamine_production | treated_distillate_received, evaporator_condensate_to_treatment, evaporator_gas_to_treatment | actual linked on-site treatment-producer interfaces | treatment_run_id; actual source/owner/dataset; unit boundary; site/time; reference unit; paired send/receive events; whole mass/phase/composition/T/P; actual fuel/air/O2/reagent/water/utility/emission/residue/heat records; all outlets/destinations; actual joint producer demand; non-overlapping served cohorts; original Q_c; unavailable scopes | Establish the complete genuine source-supported stripper/CatOx producer, not a generic disposal proxy. Match actual paired physical interfaces and all producer inventory/burdens. Count its joint demand once across all phases/outlets/cohorts; internal flows cancel only on consolidation. No available qualified dataset is asserted; missing actual producer/phase/matrix/basis blocks complete study use. | kg | every real producer run and paired interface event | same actual continuous site interval and original cohorts | actual named on-site producer and complete sender/receiver boundary | per 1 kg reference flow | Genuine source/owner, full matched producer records, composition/phase closure, compatible units, actual burdens and independent qualification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_Q | finished_hexamine | Q = sum of whole net m_e over unique first-acceptance events at the fixed gate; retain original event/cohort and moisture basis once. Loops and returns create no new event. | event_id; m_e; cp_accept | Q kg |  |
| normalize_cohort | all inventory rows | Modeled row exchange = its evidenced non-overlapping attributable numerator / positive original cohort Q_c. Waste-treatment numerator is compatible A_c or a separately assigned vector, not full shared Qt for every cohort. Unknown basis leaves raw totals and unresolved results. | row attributable numerator; Q_c; cp_accept | row original unit per 1 kg reference flow |  |
| cohort_bridge | cp_accept | Q0 = disjoint net remaining deliveries + all actual onsite accepted states + irreversible losses + other terminal dispositions on original acceptance basis, separately excluding later external additions; do not restore loss into survivors and count it again. | Q0; actual states; genealogy; additions/losses | original-cohort bridge and residual |  |
| physical_and_burden | hexamine_production | Physical opening + external inputs = physical closing + external outputs with actual reaction/speciation and equal internal links; separately reconcile opening own-WIP vectors + disjoint new vectors = closing carried + terminal attributed vectors. Allocation never creates physical closure. | physical stocks/flows; species/elements/water; own/provider vectors | separate physical and burden residuals |  |
| assay_companion | cp_accept, cp_feed | Convert actual method result to its documented as-received/dried/CH2O-equivalent convention only; do not mix IS nonaqueous and JECFA decomposition equivalences, infer free water from nominal assay, or replace whole-product Q by analyte mass. | actual method and sample basis; laboratory records | documented companion assay quantities | bis-is4306-1987; jecfa-hexamine |
| utility_and_electricity | cp_utilities, cp_power | Electrical MJ = measured kWh × 3.6. Steam/cooling heat = measured mass × compatible actual enthalpy difference with declared sign/state; match provider units explicitly, without a default factor or duplicate mass-and-heat burden. | actual meter/mass/state/enthalpy; provider reference unit | compatible actual utility quantity |  |
| species_load | cp_air | Species load = integral of actual compatible concentration × gas flow × time, with explicit species/equivalent and unit conversion. Preserve carrier moisture and actual post-control/fugitive coverage; unknown conversion is unresolved. | actual concentration; flow; time; species basis | species mass kg | jrc-cww-2016 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Check complete whole-product/component identity, actual phase/composition/CAS/route, property/UG and provider basis; source classification or polluted aliases alone cannot establish fit. | Full native records, actual grade and compatible providers |
| dq_chemistry | hexamine_production | Independently reconcile actual total mass/C/H/N/O, reacting species and water conventions; no theoretical yield or equation-based water default. | Actual assays/speciation, reaction extent, phase and stock records |
| dq_original_cohorts | all inventory rows | Preserve unique gate Q, all later states, inherited own/provider vectors once and complete failed/rework/idle periods. | Acceptance genealogy, physical and disjoint burden ledgers |
| dq_waste_service | cp_pack, cp_asset, cp_waste | Actual whole receiver/provider total once; known physical provenance separate from evidenced modeled A_c/Q_c. Unknown sharing/unit compatibility remains unresolved; no life/fraction/default credit. | Whole-mixture tickets, component stocks, actual service history and provider units |
| dq_methods | cp_accept, cp_air | Use actual complete applicable procedures, sampling, recovery/blanks/calibration and uncertainty. IS/JECFA do not establish food approval, all industrial impurities or stack/effluent methodology. | Method editions, actual matrix validation and laboratory QA |
| dq_completeness | dataset | Disclose unresolved inputs/providers/species and every measurement/pathway gap; methodological/schema success does not approve a scientific study. | Continuous site records and explicit completeness assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_hexamine | Require one whole unstabilized crystalline Product output, 1 kg net gate basis and all ordered qualifiers; no melamine, resin, lactam or generic heterocycle proxy. | usitc-hexamine-2025; atec-hexamine-process |
| validate_basis | all inventory rows | Check reference/collection/amount agreement, original positive Q, no duplicate acceptance and full original-cohort fate bridge; zero/unknown basis preserves raw totals. |  |
| validate_water_species | hexamine_production | Separate whole aqueous feed, CH2O-equivalent assay, actual free/hydrate/oligomer species, methanol and water conventions; theoretical equation is not a mass/recipe/water default or conservation of reacting HCHO. | usitc-hexamine-2025 |
| validate_whole_waste | all waste outputs | Check one actual whole contaminated transfer and receiver/provider total, nested composition, known physical provenance and distinct evidenced modeled cohort shares/units. No full Qt charged again to each cohort or fictitious separate attached-liquid export. | jrc-ilcd-2010 |
| validate_upstream_utility | all inputs | Require genuine matched raw-material/utility producer histories and actual return/enthalpy interfaces; no hidden onsite boiler or double provider aggregate/decomposition. | jrc-cww-2016 |
| validate_completion | dataset | Close actual identity, provider and matrix-method gaps before complete study use; retain unmeasured/inconclusive scope, source limits and independent scientific/translation/study states. | bis-is4306-1987; jecfa-hexamine; jrc-cww-2016 |
| validate_onsite_treatment | cp_treatment | Preserve the actual FirstEffect–stripper/CatOx–distillate source branch and full complete producer linkage. Unknown physical phase/composition, source/owner/unit or genuine treatment inventory is unresolved; no omitted operation, offsite assumption, generic disposal or duplicated full producer demand passes study completeness. | usitc-hexamine-2025; jrc-cww-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground liquid-phase hexamine production after qualification |
| downstream_use | secondary_dataset or background_dataset with actual compatible chemical/grade/provider/basis |
| allowed_use | Supply of the declared unstabilized crystalline hexamine route and gate |
| excluded_use | Full35230 coverage; melamine, NMP/lactams, stabilized grades, solutions or downstream formulations; food/pharmaceutical/certification or method-approval claims |
| required_metadata | CAS/grade; actual feed assay/speciation/water; first gate/cohort; continuous site interval; source/projection identity; utility/provider units; stock/burden history; packaging/filter/receiver records |
| required_quality_disclosure | All identity/provider/method and quantity gaps, non-overlap/residuals, actual analytical and environmental coverage, uncertainty, independent review/scientific/study states |
| update_trigger | Changed grade/additive/phase/feed/route/gate, provider/utility integration, method, stock/asset/receiver allocation or material native identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usitc-hexamine-2025 | official_guidance | USITC Publication5660, Hexamine (Hexamethylenetetramine) from China, September2025, PDF34 and73–77/printed1.13–1.17. https://www.usitc.gov/publications/701_731/pub5660.pdf | Named CAS/formula/crystalline identity,2933.69.50 classification and actual liquid synthesis/crystallizer/centrifuge/dryer, pure versus stabilized cases and explicitly preserved stripper/CatOx-to-distillate branch. Producer-derived case evidence; no tariffs, numerical recipe, yield, conditions, purity, plant burden or environmental benefit adopted. |
| atec-hexamine-process | literature | ATEC, Hexamine Product/Process Overview, undated page snapshot2026-11-08, liquid versus vapour-phase description and stabilized/un-stabilized product table. https://atec.co.in/ProcessTechnologies_subab1f.html?val=8 | Independent engineering-source liquid aqueous-formaldehyde/anhydrous-ammonia variant and commercial unstabilized crystalline state; gas variant excluded; tabulated grade, mesh and composition values are not defaults. |
| bis-is4306-1987 | standard | Bureau of Indian Standards, IS4306:1987, Second Revision with Amendment1 February1990, scope1.1; AppendixA2/A5/A7 and AppendixB, scan PDF5–13. https://archive.org/details/gov.in.is.4306.1987 | Historical industrial-solid analytical/sampling methods, full scan retained and visually read. Method-specific conventions and referenced dependencies remain; no current legal/certification claim or grade limit adopted; visual source map is not OCR/full transcription. |
| jecfa-hexamine | official_guidance | FAO/WHO JECFA, Hexamethylenetetramine monograph, prepared1973/published1978 and1992, metals revision2004; complete2-page definition and assay. https://www.fao.org/fileadmin/user_upload/jecfa_additives/docs/Monograph1/Additive-224.pdf | CAS/formula/crystalline definition and distinct dried-sample acid-decomposition/back-titration procedure; no food approval, clinical limit, purity specification or industrial/vent matrix waiver. |
| jrc-cww-2016 | official_guidance | European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector,2016, BAT2–5, PDF573–574/printed543–544. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Chemical-stream/reaction/emission inventory, destination and monitoring-quality context; not source-specific validated testing, mandatory local frequencies or hexamine emission factors. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook Detailed Guidance, first editionMarch2010, §7.9.3, PDF277–278/printed257–258. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Virtual subdivision/determining physical causality and bounded residual economic relationships; no universal allocation/service share, recovery credit or claim of literal cohort-ledger prescription. |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025, PDF159–160 and170. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current35230 specified heterocycle labels and neighbouring residual/amides classes; named-chemical narrower relation remains inference pending independent acceptance. |
| wco-hs29-2022 | official_guidance | WCO Harmonized System2022 Chapter29, PDF18,2933 triazine/lactam headings. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0629_2022e.pdf?la=en | Current heading-family distinction together with named USITC hexamine evidence; neither ring intuition, native34150 nor historical correspondence is treated as automatic currentCPC mapping. |
