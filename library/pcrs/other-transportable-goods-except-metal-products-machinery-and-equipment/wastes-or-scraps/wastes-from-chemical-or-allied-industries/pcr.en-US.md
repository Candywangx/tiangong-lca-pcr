---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wastes-from-chemical-or-allied-industries
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Unneutralised hydrolysis mother liquor from ilmenite sulphate titanium dioxide manufacture

## 1. Scope and Applicability

This PCR covers one source-traced unneutralised liquid mother liquor formed after hydrolysis and initial filtration in dry-ilmenite sulphate titanium dioxide manufacture, first released as feed to an identified acid-reconcentration receiving gate. The physical route ends before evaporation, salt recovery or neutralisation. The reference is the whole residual liquor, not pure sulfuric acid, a treatment service or a cross-chemical selector. Source formation is retained from whole ore/acid/reductant receipts. JRC figures3.4/3.5 and §3.3 establish this sequence and distinguish hydrate, copperas, weak acid and subsequent acid-recovery/gypsum routes. This is transparent qualitative technical synthesis, not one contemporary same-factory mass balance.

Exclude sewage sludge, municipal and clinical/pharmaceutical waste, organic-solvent waste, oil-rich fluids, metal pickling liquor, iron/steel slag, metal/precious-metal recovery residues, copperas or gypsum as the reference, pigment/hydrate products, slag-route or mixed-source liquors, post-wash weak effluent, neutralised sludges, regenerated/concentrated acid and historic mixed storage dumps. No universal acid strength, composition, density, yield, reaction emission, danger classification, legal threshold, receiver grade or recovery credit is supplied.

Sources: `un-cpc3-2025`; `un-cpc21-hs2017`; `wco-hs2022-38`; `wco-hs2022-26`; `jrc-lvic-s-2007`.

## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wastes-from-chemical-or-allied-industries |
| classification_refs | CPC 3.0 39950; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | One unneutralised inorganic strong-acid hydrolysis mother-liquor stream from the declared ilmenite route for acid reconcentration feed |
| excluded_products | Exclude sewage sludge, municipal and clinical/pharmaceutical waste, organic-solvent waste, oil-rich fluids, metal pickling liquor, iron/steel slag, metal/precious-metal recovery residues, copperas or gypsum as the reference, pigment/hydrate products, slag-route or mixed-source liquors, post-wash weak effluent, neutralised sludges, regenerated/concentrated acid and historic mixed storage dumps. No universal acid strength, composition, density, yield, reaction emission, danger classification, legal threshold, receiver grade or recovery credit is supplied. |
| representative_product | Unneutralised hydrolysis mother liquor from ilmenite sulphate titanium dioxide manufacture |
| production_route | Whole source feeds → grinding/digestion → iron reduction → clarification/copperas crystallisation → hydrolysis → first filtration → actual cooling/necessary polishing → first reconcentration-feed quality release |
| market_state | Whole as-released acidic liquid with measured dissolved/suspended phases and thermal state; signed value/fee, ownership and legal status declared independently |

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Supply one specified whole mother-liquor lot for the named reconcentration feed function |
| How much | 1 kg net whole liquid at first quality release; use measured Q for the complete new-production cohort |
| How well | Receiver-confirmed suitability at the actual inlet based on measured free acid, salts, suspended solids, water and temperature; no default acceptance threshold |
| How long or cycle | One declared source production/release cohort and period; later service retains original cohort Q_c |
| reference_flow_link | released_acid |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Acidic Leaching Liquor `cae33063-dfce-4ac0-b82c-d6d58846c897` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | ilmenite provenance and mineral phases; dry-feed state and whole source receipt history; sulphate digestion and iron-reduction route; source lot and original cohort; hydrolysis and initial filtration gate; unneutralised whole liquid identity; free acidity and validated matrix-specific assay; dissolved salt identities and assays; suspended solids and settling state; independently measured water and phase evidence; sampling and homogenisation method; temperature and actual density when volume converted; net first-release mass Q and release time; named receiver inlet and feed acceptance; actual value or fee at the declared gate; ownership and inherited exchange vector; opening and closing WIP and FG histories; native Product locator compatibility; packaging and container event histories; site and temporal coverage |

Declare every qualifier in dataset metadata, reference comments or equivalent package fields. The Product reference denotes only the source-qualified spent acid-leach liquor remaining after ilmenite-sulphate hydrolysis and initial filtration: the separated hydrate leaves while free acid, water and dissolved salts remain in the whole liquid. Preserve actual residual Ti, other dissolved constituents and suspended phases without assuming complete removal or fixed speciation. The specified first reconcentration-feed gate is before evaporation, salt recovery or neutralisation. Pre-hydrolysis TiOSO4 stock, pure/fresh acid, recovered concentrated acid, Waste and treatment services remain different objects. The locator does not establish a particular lot's composition, receiver acceptance or allocation.

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use whole net liquid at first release under cp_release; measured free acid, salts and water are subledgers, never alternative reference denominators. |
| raw_units | all inventory rows | actual row property | actual row unit | Preserve raw units; use raw_to_inventory before allocation and normalize_once. kWh × 3.6 = MJ follows the verified native energy unit group; steam remains kg with independent thermal-state evidence. |
| liquid_volume | liquid rows | Mass | kg | Mass from a measured integrated volume requires independent density of that same liquor at its measured state/temperature; do not multiply an integrated volume by time. Integrate only a true rate. Never use water density for acid or slurry. |
| water_phases | material balance rows | Mass | kg | Separate free, structurally retained, reaction and phase-transfer water by independent evidence; do not fit two unknowns with one residual or use a fixed hydrate formula. |
| pack_mass | each component | Mass | kg | Weigh each actual component; count records need independently measured configuration-specific component mass, not a seed-bag or generic item conversion. Preserve number and mass as separate observations until reconciled. |
| service_basis | released cohort service | original reference Mass | kg | Preserve original Q_c and inherited vector; exposure H describes storage/handling duration or intensity only. Normalize any separate service result once on original Q_c under normalize_once; never add new production. |

## 5. System Boundary

### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Whole dry ilmenite and actual externally supplied digestion acid, reductant and auxiliaries at source receipts, carrying compatible upstream histories |
| starting_condition_role | Foreground raw-source formation boundary; no burden-free bought finished mother liquor |
| product_classification_scope | The single source-qualified inorganic liquid residual described in section1; CPC39950 is the narrower source-qualified scope |
| recursive_input_rule | No recursively burden-free same-category input; separate original-cohort internal transfers, actual returns and external regenerated acid with original exchange vectors and actual added service |
| upstream_dataset_requirement | Compatible actual supplied whole materials and utilities with route/state/grade/geography and included scope verified; every original/current burden represented once |
| disclosure | Source and receiver gates, physical process modules, real package topology, ownership/cohorts, allocation, stocks, assays, native restrictions, excluded stages, service accounts and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_chain | source_formation; acid_release | Include whole source receipts and their upstream burden, preparation/grinding, digestion, iron reduction, clarification and actual aid use, copperas crystallisation, liquor concentration where actually before hydrolysis, hydrate precipitation, initial filtration, actual mother-liquor cooling/necessary polishing, sampling, storage, handling and delivery to the specified regeneration-feed inlet. This is a qualitative technical synthesis of one route, not a measured same-factory recipe. Supplied dry ilmenite, imported steam and external waste treatment define this configuration. Wet-ore combustion drying, slag blends, on-site boilers, on-site neutralisation, calcination/finishing and acid reconcentration are not hidden inside it; actual such operations require explicit additional scope and atomic records. | `jrc-lvic-s-2007` |
| b_reference_gate | released_acid | Q is the summed net whole-liquid mass of uniquely identified newly formed mother-liquor lots at their first documented quality release to a named reconcentration-feed specification. State the actual inlet/tank and receiver; qualification is not an invented market grade or legal clearance. Exclude packaging, circulating inventory, off-spec/sampled losses, historical opening FG, reinspection, re-delivery and already released returns. A first-release lot still in closing FG is already in Q. Do not add closing FG again as new output. A merely planned receiver with no actual feed-compatibility evidence leaves the concrete package incomplete. | `jrc-lvic-s-2007` |
| b_history | all inventory rows | Retain opening/closing raw stock, WIP and FG by physical lot and every exchange-specific inherited burden vector, original supplier included scope and parent allocation decision. Carry original forming inputs into residual/hydrate/copperas destinations once. Real internal source/release transfers and own seed/acid/water reuse cancel in the combined boundary without erasing their history; external returned regenerated acid needs its real prior-cohort/provider boundary and measured new service, not a new fresh-acid purchase. No waste label, ownership transfer or missing assay implies zero inherited load. | `jrc-ilcd-2010` |
| b_physical_gates | source_formation; acid_release | Before allocation, close each measured physical gate: source opening raw stock and WIP plus whole external feeds including direct steam and any actual reactant-gas receipts equals closing raw stock and WIP plus gross mother-liquor transfer plus hydrate/copperas/residue/effluent and actual species losses. The release gate uses opening unreleased liquid plus the one internal mother transfer plus actual added liquid equals closing unreleased liquid plus Q plus rejected/sampled/cleaning losses. The FG/service gate uses opening released FG plus Q plus genuine returned original lots equals closing FG plus gross outward dispatch plus external returns-out plus FG wastes. Combining gates cancels the internal transfer and the release-to-FG Q; it never counts Q and closing FG as two final production outputs. Preserve separate physical mass and relevant Fe/Ti/S and water/phase evidence, without allocation scaling of gross quantities. Reaction/phase-water transformation stays within its independently evidenced subledger and is never added as new mass to the whole physical gate. | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| b_composition | all material rows | Measure whole solutions/formulations once at the actual supply state. Free acidity is not a pure-H2SO4 purchase; dissolved iron/sulfate, water and impurity assays are non-additive subledgers. Use representative mixing/settling-aware sampling, validated matrix-specific free-acid and elemental/species tests, separate suspended solids and independent free/structural/reaction-water evidence. Do not assume all non-acid mass is water, all iron is FeSO4, or one hydrate formula. No universal reaction equation, concentration, yield, density, toxicity or permit threshold is prescribed. A balance residual cannot determine two unknown species or reaction-water terms. | `jrc-lvic-s-2007` |
| b_species | emission and waste rows | Keep actual final H2, SO2, SO3, H2SO4, H2O and escaped particulate identities and destinations separate. Carrier-air inlet/outlet mass is recorded for the gas physical ledger and unchanged carrier mass cancels; it is not invented reaction gas. Pre-abatement gas, captured material and final release are distinct gates. Retained liquid/solid waste is not an elementary emission. COD, acidity, total SOx or total solids do not establish an individual chemical mass. Actual additional species, liquid outlets and treatment reagents require their own rows and measurements before completeness. | `jrc-lvic-s-2007` |
| b_utilities | utility rows | Split actual utility supply by substance and gate. Preserve imported direct and indirect steam mass, thermal state and supplier water/energy convention; actual condensate and external cooling-water return are independent Product interfaces with their own quantities and enthalpy. Internal loops cancel; neither a return nor a boiler is presumed. Meter allocation covers failed batches, zero-output periods, startup/shutdown, idle, cleanup, leaks and rework; none disappear solely because Q is zero or the stream is called waste. | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| b_atomic_receipts | packaging and attached components | For every actual packaging/container/attached component, establish material, form, flow type, direction and an atomic measured receipt interface. Purchase cards below collect P only. The separate N_ext interfaces collect first external non-purchase receipts, including supplier-accompanied, first entrusted, borrowed or rented items. ER is only a genuine return with an earlier outward dispatch record. P, N_ext and ER are mutually exclusive; a component already paid in the whole supply price is P even without a separate invoice. Opening stock is not current receipt. Actual missing components/interfaces/quantities make that concrete package incomplete; symbols and a copied purchase UUID do not repair it. | `jrc-ilcd-2010` |
| b_pack_balance | each component physical gate | For each individual component and the same gate/period, opening empty plus attached-WIP/FG plus reusable stock + P + N_ext + ER = closing empty plus attached-WIP/FG plus reusable stock + grossS + EO + W. grossS is all actual outward physical dispatch, including attachments on failed/replacement/returned-lot movements; it is not net acid Q. EO is genuine outward return; W is actual discard. Internal warehouse/WIP/FG issues and reuse cancel. Component production/fabrication F and incorporation X may be added only for an evidenced exact non-overlapping same-side event: add F only if not already in P/N_ext and X only if not already in closing attachment or grossS; no generic OTHER plug closes a missing receipt. | `jrc-ilcd-2010` |
| b_pack_burden | each packaging event | Independently retain ownership, original component/cohort identity, each inherited exchange vector, real purchase burden, supplier already-included scope and actual incremental rental/return/cleaning/repair service. Assign each real burden once under section7. Physical non-purchase is not zero burden, and ER is not a new purchase, new Q or credit. Allocate jointly carried mother-liquid/material burdens once, not as full mixture plus full constituent partitions or several providers for the same supplied component. | `jrc-ilcd-2010` |
| b_later_service | released cohorts | After first release, preserve actual storage, packaging, handling, dispatch, original-delivery reverse movements and additional measured rework/cleaning/rental-return service in the original released cohort account. Keep original Q_c and inherited vector; measure service exposure H separately, never as a production denominator. Reinspection/re-delivery/return does not create new Q. Resolve historical FG burden and actual returned-lot provenance, even when production uses first release rather than net delivery. Service records require specific material/utility/waste interfaces; do not relabel a service as the reference Product. | `jrc-ilcd-2010` |
| b_classification | scope and receiver | The narrower CPC3.0 39950 association applies only to the specified inorganic chemical-manufacturing liquid residue supplied for acid reconcentration. UN gives a heading, not an explicit TiO2 mother-liquor example. The official CPC2.1–HS2017 relation links 3825.69 to 39950 historically; HS2022 retains the inorganic other-chemical-waste branch and separate solvent/sewage/clinical categories. This is a reasoned scope interpretation, not a current crosswalk or customs ruling. Acceptance of the classification association does not approve scientific methodology, translation or actual providers. Exclude a material supplied for metal/precious-metal recovery or manufacture of metal compounds under the chapter26 exclusion, regardless of the generating industry. If actual receiver purpose or physical classification fails this scope, stop applicability rather than filling coverage. | `un-cpc3-2025`; `un-cpc21-hs2017`; `wco-hs2022-38`; `wco-hs2022-26` |


### Atomic non-purchase and return interfaces

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_pack_interfaces | each actual component interface | Each row below is a required concrete event interface only when that event actually occurs; it is not a surrogate purchase. Record raw measured kg before any division, event date/ID, exact material/form, counterparty, ownership, original cohort, inherited exchange vector, provider included scope and new service. P is collected by its purchase card and W by its waste card. Components already attached to incoming materials are included at their real external receipt. Add the same complete interfaces for every additional real component; a missing interface is an incomplete data package. | `jrc-ilcd-2010` |

| interface_id | specific_material_form | flow_type | direction | event_class | raw_quantity_field | event_evidence | unit | collection_protocol_id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| pp_sack_first_nonpurchase | Woven polypropylene supply sack | product | inputs | N_ext | N_ext_pp_sack | First external non-purchase receipt; prove outside purchase price and no previous outward event | kg | cp_pack |
| pp_sack_true_return_in | Woven polypropylene supply sack | product | inputs | ER | ER_pp_sack | Genuine return; link original outward dispatch and same component/cohort | kg | cp_pack |
| pp_sack_gross_dispatch | Woven polypropylene supply sack | product | outputs | grossS | grossS_pp_sack | All real outward attached or empty dispatch; not net acid Q | kg | cp_pack |
| pp_sack_return_out | Woven polypropylene supply sack | product | outputs | EO | EO_pp_sack | Actual outward return to owner/supplier; preserve ownership and original receipt | kg | cp_pack |
| pe_liner_first_nonpurchase | Polyethylene film liner | product | inputs | N_ext | N_ext_pe_liner | First external non-purchase receipt; prove outside purchase price and no previous outward event | kg | cp_pack |
| pe_liner_true_return_in | Polyethylene film liner | product | inputs | ER | ER_pe_liner | Genuine return; link original outward dispatch and same component/cohort | kg | cp_pack |
| pe_liner_gross_dispatch | Polyethylene film liner | product | outputs | grossS | grossS_pe_liner | All real outward attached or empty dispatch; not net acid Q | kg | cp_pack |
| pe_liner_return_out | Polyethylene film liner | product | outputs | EO | EO_pe_liner | Actual outward return to owner/supplier; preserve ownership and original receipt | kg | cp_pack |
| wood_pallet_first_nonpurchase | Wood-board/slat supply pallet | product | inputs | N_ext | N_ext_wood_pallet | First external non-purchase receipt; prove outside purchase price and no previous outward event | kg | cp_pack |
| wood_pallet_true_return_in | Wood-board/slat supply pallet | product | inputs | ER | ER_wood_pallet | Genuine return; link original outward dispatch and same component/cohort | kg | cp_pack |
| wood_pallet_gross_dispatch | Wood-board/slat supply pallet | product | outputs | grossS | grossS_wood_pallet | All real outward attached or empty dispatch; not net acid Q | kg | cp_pack |
| wood_pallet_return_out | Wood-board/slat supply pallet | product | outputs | EO | EO_wood_pallet | Actual outward return to owner/supplier; preserve ownership and original receipt | kg | cp_pack |

## 6. Process Inventory Structure

### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source_formation | Ilmenite sulphate source formation and separation | required | Declared dry-ilmenite route through hydrolysis and initial filtration | Whole joint forming process with separated hydrate and copperas companions | Measured source lots; final inventory per 1 kg reference flow |
| acid_release | Mother-liquor conditioning and first feed release | required | Actual cooling/necessary polishing and receiving feed acceptance | Preserve source vector and define unique Q | released_acid; 1 kg reference flow |

The cards are a measured atomic baseline. Conditional auxiliaries are not a prescribed recipe. Every additional actual purchased formulation, chemical, fuel, refrigerant, filter, packaging part, waste or species needs its own specific row and actual quantity/interface. A relevant actual operation cannot be hidden in zero, OTHER or a broad collective label. Unbound rows retain a specific physical identity; they do not authorize an arbitrary family UUID. Physical V and inherited/attributable A ledgers remain distinct under section7.


### Process: Source formation (`source_formation`)

#### Inputs

##### Product flows

###### Dry ilmenite concentrate (`ilmenite`)

Record the whole externally supplied ilmenite concentrate, including measured moisture and gangue. Establish mineral phases, total Ti/Fe and relevant impurities from representative lot samples; do not substitute titano-magnetite, synthetic titanium slag or pure TiO2. Grinding, actual capture/reuse of ore dust and feed handling remain inside.

- Selected flow: Dry ilmenite concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Fresh digestion acid (`fresh_acid`)

Use this Product identity only for externally supplied liquid H2SO4 of measured 93–98% concentration, industrial-grade chemical/contact synthesis, production mix at plant, delivered in sealed containers or pipelines; CAS 7664-93-9. The formal concentration/route restrictions prevail over broader synonyms and the general comment. Count the whole solution once, with its independently measured water and impurity subledger. This is fresh input, never the mother-liquor reference or recycled acid. Other actual acid strengths require their own specific row/identity.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Scrap-iron reductant (`reductant_iron`)

Measure the actual qualified metallic iron scrap entering the reduction vessel; retain supplier composition, metal form and Cr/Ni contamination checks. It is an original reductant input, not newly purchased iron inferred from iron in mother liquor or copperas. Do not use a scrap identity requiring an incompatible melting route.

- Selected flow: Uncoated low-alloy iron scrap for ferric-ion reduction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Municipal process water (`process_water`)

Only treated municipal/public potable water supplied by plumbing, production mix at factory; record its actual supply and quality. Measure dissolution, washing, water scrubbing and cooling makeup separately before summing the same provider/gate. Internal recirculation is not another purchase. The native secondary volume coefficient is not an independently measured site density; do not apply it to acid, slurry or condensate.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Deionised makeup water (`deionised_water`)

Conditional external pure water, CAS 7732-18-5, production mix at plant, with the formal ion-exchange or reverse-osmosis route. The broader comment also mentions distillation, which does not waive that formal route. Collect supplier quality and actual amount; internally produced water carries its measured treatment inputs once rather than an additional bought-water provider.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Direct-injection steam (`injection_steam`)

Actual steam used in chemical manufacture, measured as Mass/kg at the external supply gate. Record pressure, temperature, dryness/enthalpy, supplier water-energy convention and actual injection. Direct injection joins the material/water balance and is not also a heat purchase. No boiler or fuel is assumed inside the site.

- Selected flow: Steam `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Indirect-heating steam (`indirect_steam`)

Actual separately metered steam for indirect heating in chemical manufacture, Mass/kg. Declare inlet and outlet thermal states and supplier treatment of return condensate; retain the enthalpy difference as an energy diagnostic. It remains outside the process-liquid water balance unless a measured leak crosses it. Exclude steam already counted as direct injection and do not add a parallel heat provider.

- Selected flow: Steam `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Source-section electricity (`source_electricity`)

Only CN grid-average consumption-mix electricity delivered to the user at 1–35 kV under this UUID. Preserve its native Net calorific value property and MJ unit; convert actual meter kWh using the verified unit-group factor. Record grinding, pumps, vacuum filtration, crystallisation, scrubbing, controls, idle/start-stop and cleanup; stage and shared-meter shares must reconcile without double counting. Different voltage, geography or supply route needs a compatible identity/provider.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Diatomite clarification aid (`diatomite`)

Conditional only when actual supplier/process records identify this single mineral aid as suitable for the acidic liquor. Measure the whole supplied material including moisture; retain its grade and destination in clarification residue. Oil/fat- or beverage-specific native candidates do not establish compatibility. A different real aid requires its own atomic row.

- Selected flow: Diatomaceous earth clarification filter aid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Non-ionic PAM flocculant (`pam`)

Conditional only if the actual acidic-clarification recipe and supplier confirm non-ionic polyacrylamide powder and its performance. Measure the whole purchased powder once. An aqueous supplied formulation is a different whole formulation row, not powder plus a second purchase of its carrier water. No dosage or generic polymer choice is prescribed.

- Selected flow: Non-ionic polyacrylamide powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Polypropylene source filter cloth (`source_filter_cloth`)

Conditional replacement cloth only when polymer and acid-compatible construction are documented. Weigh new cloth and used cloth separately; distinguish retained liquid/solids from the cloth substrate. Recirculating an installed cloth is not new receipt. Different polymers or attached components require independent rows.

- Selected flow: Polypropylene filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### External hydrate seed (`external_seed`)

Only a genuinely external, separately supplied whole seed suspension used for hydrolysis. Measure its whole mass and independently determine solids/water and physical form. Own-process seed recycle carries its inherited exchange vector and cancels internally; it is not this purchase. Finished rutile/anatase pigment does not establish the hydrate-seed identity.

- Selected flow: Hydrated titanium dioxide seed suspension
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Separated strong-acid mother liquor (`raw_mother_liquor`)

Whole liquid mother liquor separated after titanyl-sulphate hydrolysis, before hydrate washing, neutralisation or reconcentration; measure free acidity, dissolved salts, suspended solids, water and temperature. Internal transfer to acid_release uses one shared measured event and the same exchange-specific inherited vector; cancel both sides in the combined system. This intermediate is not the released reference Q.

- Selected flow: Unneutralised ilmenite-sulphate hydrolysis mother liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Hydrated titanium dioxide companion (`hydrate_cake`)

Measure the actual wet precipitated hydrate at the first filtration gate, including independently assessed free and structurally bound water; do not impose a fixed hydrate formula or finished pigment grade. Carry its assigned source vector into later washing/bleaching/calcining/finishing, which are dedicated companion operations outside the mother-liquor gate. This is a whole physical co-output diagnostic, never an additional purchase or avoided pigment credit.

- Selected flow: Hydrated titanium dioxide filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Crystallised copperas companion (`copperas`)

Record actual separated copperas crystals and adhering liquor as one supplied lot, with phase verification, moisture and Fe/S assays. Do not infer a pure anhydrous salt from total iron or bind a native row with an anhydrous CAS and contradictory ferric-phosphate synonyms. Retain subsequent dedicated treatment separately. This whole physical co-output is not an automatic credit.

- Selected flow: Ferrous sulfate heptahydrate crystals with measured adhering liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### External condensate return (`condensate_return`)

Only actual condensate crossing outward to its supplier from indirect steam use. Record mass, temperature, pressure, enthalpy and water quality together with the matched steam provider convention. Internal condensate reuse cancels inside; no return is fabricated for consumed direct-injection steam and no separate recovery credit follows automatically.

- Selected flow: Liquid steam condensate returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### External cooling-water return (`cooling_return`)

Conditional actual external return from a supplied cooling-water circuit. The bound Product is H2O cooling water with native Mass/kg and no fixed geography, grade, route or temperature; verify real liquid quality and thermal-state compatibility. It does not authorize polluted optical-assembly groundwater. Record matched input identity, gross flow and thermal state. Internal circulation is not an external return; blowdown sent to treatment is an aqueous waste, not a supplier Product return.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

##### Waste flows

###### Acidic clarification residue (`clarification_residue`)

Measure the whole wet separated unreacted-mineral/aid residue, including retained acidic liquor, and its documented off-site treatment destination. It is not the liquid reference and not an emission to soil. Retained aid and solutes are subledgers of this cake; do not add them again as separate wastes. On-site neutralisation requires actual reagent/species rows and additional treatment scope before the package is complete.

- Selected flow: Unneutralised ilmenite-digestion clarification filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Separate weak-acid effluent (`weak_acid_effluent`)

Actual separate washing/scrubber blowdown or cleaning liquid transferred for treatment, measured as a whole stream with free acidity, sulfate, metals and suspended solids. Do not relabel it strong mother liquor, sewage sludge or an immediate water emission. Where it is recycled into digestion, cancel internal transfers and retain actual purge only.

- Selected flow: Dilute sulfuric-acid source-section washwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Used polypropylene cloth (`used_filter_cloth`)

Actual removed cloth substrate with its measured attached residue and declared treatment. Partition attached liquid/solid quantities against clarification_residue to prevent counting the same wet material twice.

- Selected flow: Used acid-contaminated polypropylene filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_source`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

##### Elementary flows

###### Reduction hydrogen to air (`hydrogen_air`)

Measure actual H2 leaving the iron-reduction vent, including startup and unsuccessful batches; retain sampling/reaction-evidence uncertainty and the receiving air compartment. Acid as H+ and coal-methanol-route Product hydrogen are not hydrogen-to-air identities. No historical per-tonne factor is imposed.

- Selected flow: Hydrogen to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Source sulfur dioxide to air (`so2_air`)

Only actual final SO2 emission to air, unspecified subcompartment under this native record; CAS 7446-09-5, Elementary flow, Mass/kg. Rock-ilmenite digestion may have no SO2, but absence must be evidenced rather than inferred from a table minimum. Upstream untreated scrubber gas is not a second environmental release.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Source sulfur trioxide to air (`so3_air`)

Actual final SO3 species only, CAS 7446-11-9, Elementary flow to unspecified air, Mass/kg. Verify species before binding; a synonym mentioning sulfite radical does not change the formal SO3 identity. Do not apply it to sulfate ions, H2SO4 mist or reported total SOx.

- Selected flow: sulfur trioxide `4d9a8790-3ddd-11dd-96ec-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Source sulfuric acid to air (`acid_air`)

Actual H2SO4 mass in final acid-mist/air release only, CAS 7664-93-9, Elementary flow to unspecified air, Mass/kg. Broad spent-acid/ester synonyms do not license liquid waste, a pure-solution purchase, SO3 or total aerosol-water mass. Measure aerosol water independently and avoid overlap with so3_air.

- Selected flow: sulphuric acid `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Source water vapour to air (`source_vapour`)

Only actual H2O vapour emitted to unspecified air, CAS 7732-18-5, Elementary flow, Mass/kg. Measure or independently substantiate evaporation/steam loss, excluding retained hydrate water, liquid droplets and returned condensate. Broad isotope/ice synonyms do not authorize those different physical identities.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Ilmenite dust to air (`ore_dust_air`)

Measure actual escaped mineral dust after capture, with size distribution, composition and air compartment. Recovered dust is internal material, not an emission. Total particulate mass and its measured chemical constituents/size partitions are non-additive diagnostics; do not invent a pure metal/oxide or assume a PM fraction.

- Selected flow: Ilmenite mineral particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`


### Process: Acid-feed first release (`acid_release`)

#### Inputs

##### Product flows

###### Internal mother-liquor receipt (`mother_liquor_in`)

The exact counter-event to raw_mother_liquor, including temperature, gross mass, composition and each inherited exchange amount. Do not attach another purchased-acid provider or treat the measured H2SO4/FeSO4/water assays as new inputs.

- Selected flow: Unneutralised ilmenite-sulphate hydrolysis mother liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Acid-release electricity (`release_electricity`)

Same verified CN 1–35 kV grid-average user-consumption mix and native Net calorific value/MJ restriction as source_electricity. Meter actual transfer, cooling-control, optional polishing, testing, tank agitation, idle/cleanup and first-feed delivery; reconcile stage shares with source_electricity. Later released-cohort services go to their original cohort account.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_release`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Acid-release cleaning water (`release_water`)

Only actual treated potable municipal/public plumbed supply, production mix at factory. Independently measure release-area washing and external cooling makeup; do not include process_water amounts twice or assume washwater joins the accepted acid.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_release`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Woven polypropylene supply sack (`pp_sack_purchase`)

Conditional actual new purchase P of this one component received across the source/release boundary, including components paid for within the whole material price even without a separate invoice. Weigh it independently; record provider included scope and exclude first non-purchase N_ext and verified return ER from this purchase card. No seed-specific bag capacity or count-to-kg factor is adopted; verify actual industrial sack construction.

- Selected flow: Woven polypropylene supply sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Polyethylene supply liner (`pe_liner_purchase`)

Conditional actual new purchase P of this one component received across the source/release boundary, including components paid for within the whole material price even without a separate invoice. Weigh it independently; record provider included scope and exclude first non-purchase N_ext and verified return ER from this purchase card. Native identity is production-mix polyethylene film, CAS 9002-88-4; no PET or unspecified polymer substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Wooden supply pallet (`wood_pallet_purchase`)

Conditional actual new purchase P of this one component received across the source/release boundary, including components paid for within the whole material price even without a separate invoice. Weigh it independently; record provider included scope and exclude first non-purchase N_ext and verified return ER from this purchase card. Native identity is a wooden board/slat pallet, production mix in a lumber mill; declare actual construction.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### First-released acid-regeneration feed (`released_acid`)

One whole acidic liquid residual, newly separated by the declared ilmenite route and first accepted against a named reconcentration-feed specification, before neutralisation, evaporation or salt recovery. Confirm actual receiving inlet/tank, feed function, sampling, free acid, salts, solids, water, temperature and compatibility. Only this row defines Q. The Product is the source-qualified spent subset of acidic leaching liquor after hydrolysis and initial filtration, not the pre-hydrolysis TiOSO4 stock. Retain the entire acid/water/dissolved-salt mixture and independently measured residual Ti and suspended phases; its assays are non-additive subledgers, not additional providers or a pure-acid denominator. No Waste or service identity is converted to Product.

- Selected flow: Acidic Leaching Liquor `cae33063-dfce-4ac0-b82c-d6d58846c897`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

##### Waste flows

###### Rejected or sampled acid (`rejected_acid`)

Actual rejected/off-spec liquid and destructively sampled material leaving this gate for treatment, with separate event quantities and destination records. Do not count it in first-release Q or fabricate a sale, neutralisation product or water emission. Internal rework retains its original vector; repeated inspection never creates new production.

- Selected flow: Rejected ilmenite-sulphate hydrolysis mother liquor for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_release`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Acid-release washwater (`release_washwater`)

Actual separately collected tank/line cleaning liquid sent off site for treatment, including failed campaigns and spill cleanup. Measure whole liquid and constituents; exclude liquor already counted in rejected_acid. The supplier treatment burden follows its assigned original cohort once.

- Selected flow: Sulfuric-acid-contaminated release-area washwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_release`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Discarded woven polypropylene supply sack (`pp_sack_waste`)

Actual discarded woven polypropylene supply sack leaving for the named recovery/treatment destination; measure substrate and attached contamination separately. It is W in the component ledger, never a negative purchase or automatic recovered-product credit. Reconcile attached acid with liquid-waste rows.

- Selected flow: Discarded woven polypropylene supply sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Discarded polyethylene supply liner (`pe_liner_waste`)

Actual discarded polyethylene supply liner leaving for the named recovery/treatment destination; measure substrate and attached contamination separately. It is W in the component ledger, never a negative purchase or automatic recovered-product credit. Reconcile attached acid with liquid-waste rows.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### Discarded wooden supply pallet (`wood_pallet_waste`)

Actual discarded wooden supply pallet leaving for the named recovery/treatment destination; measure substrate and attached contamination separately. It is W in the component ledger, never a negative purchase or automatic recovered-product credit. Reconcile attached acid with liquid-waste rows.

- Selected flow: Discarded wooden pallets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single already normalised attributable result from section 8; preserve the raw numerator, unallocated gross V and original history separately and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | source_formation; acid_release | Use an explicitly declared attributional allocation-required study. First assign dedicated acid-transfer/testing/polishing activities directly and physically subdivide measured source operations wherever possible; then perform justified virtual subdivision. Downstream hydrate/copperas finishing is dedicated to those outputs and does not become acid conditioning. | `jrc-ilcd-2010` |
| a_causality | remaining individual exchanges | For each remaining exchange identify the determining physical causal relationship: demonstrate how a change in each delivered function changes that exchange, separating product-contained atoms from process-related utilities/emissions. An Fe/Ti/S balance constrains physical fate but does not automatically allocate electricity, water or every upstream burden by one mass ratio. Retain the actual derivation, counterfactual scope and measurement evidence. | `jrc-ilcd-2010` |
| a_residual | genuinely unresolved common-process exchanges | Only the demonstrated residual after those steps may use justified actual contemporaneous market values of the co-functions at one common process gate in their actual wet state. Record quantities, price basis, currency, geography/period, costs included and fee/service interpretation. Do not combine future finished-pigment or recovered-acid prices with unfinished hydrate/mother liquor, choose arbitrarily between physical/economic shares, prescribe a fixed ratio or clamp a signed waste fee into zero. Nonpositive/ambiguous values require an explicit reviewed treatment of the remaining multifunctionality; until then that concrete package is incomplete. | `jrc-ilcd-2010` |
| a_once | all inventory and physical co-outputs | Allocate each upstream/current inherited exchange vector exactly once among actual functions; retain totals and closure. Whole physical gross quantities V remain separate from attributable inventory amounts A. Hydrate/copperas co-output cards retain physical diagnostics and their assigned histories: in an allocated acid dataset they are not additive avoided-product exchanges or extra full-burden providers. A joint source dataset may retain them with explicit allocation metadata; never publish both representations additively. Internal transfers cancel without a second allocation or full provider. | `jrc-ilcd-2010` |
| a_no_automatic_credit | residual, returns and services | Waste status, ownership, a non-purchase first receipt, internal reuse, true return, a gate fee or intended recovery gives no automatic zero burden, displacement credit or negative purchase. Keep original cohort loads and actual incremental service separately; any later recovery benefits belong to an explicitly scoped separate study and cannot be inserted here. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source_formation | source inputs | supplier_batch_and_meter | lot_id; material_form; supplier; supplied_whole_mass; moisture; assay_method; mineral_phase; Ti; Fe; S; impurities; inherited_vector; included_scope | Weigh each whole input with calibrated instruments and trace actual digestion/reduction/crystallisation/hydrolysis logs; sample the actual supplied mixture and independently measured component/phase data. per reference flow; collect unnormalised raw totals, preserve histories, then refer to normalize_once without another division. | kg | each receipt and batch | complete campaign including failures and Q zero | declared source site | per reference flow | calibration; supplier certificate; whole-mixture trace; assay uncertainty |
| cp_balance | source_formation | gross physical gates and inherited vector | lot_stock_and_transfer | gate_id; event_id; opening_raw; closing_raw; opening_WIP; closing_WIP; gross_V; mother_transfer_id; hydrate_mass; copperas_mass; water_phases; Fe; Ti; S; inherited_vector; allocation_decision | Match counter-events and stocks by lot; independently weigh wet output and test liquid/solid phases; retain full original and destination exchange vectors before allocation. per reference flow; keep gross V unscaled for physical_gates and assign A before the one normalize_once result. | kg | each transfer and stock cutoff | same source/release period with historical bridge | source and release gates | per reference flow | scale logs; paired events; independent phase assays; vector closure |
| cp_utilities_source | source_formation | utility input and real returns | meter_and_supplier_contract | meter_id; stage; raw_unit; raw_total; rate_interval; voltage; geography; supply_route; steam_mass; pressure; temperature; dryness; enthalpy_in; enthalpy_out; return_mass; return_state; density_method; supplier_included_scope | Read stage/parent meters and actual contracts; partition without overlapping meters. Measure direct/indirect steam and actual condensate/cooling returns independently; retain actual thermal states and supplier water-energy convention. This protocol owns only source_formation events; reconcile the other stage without overlapping its quantities. per reference flow; collect unnormalised readings, convert in raw_to_inventory, assign A and reuse normalize_once. | kg; kWh; MJ | continuous meters and campaign reconciliation | full operating and nonproducing period | actual site supply gates | per reference flow | meter calibration; invoices; return contract; thermal evidence |
| cp_utilities_release | acid_release | utility input and real returns | meter_and_supplier_contract | meter_id; stage; raw_unit; raw_total; rate_interval; voltage; geography; supply_route; steam_mass; pressure; temperature; dryness; enthalpy_in; enthalpy_out; return_mass; return_state; density_method; supplier_included_scope | Read stage/parent meters and actual contracts; partition without overlapping meters. Measure direct/indirect steam and actual condensate/cooling returns independently; retain actual thermal states and supplier water-energy convention. This protocol owns only acid_release events; reconcile the other stage without overlapping its quantities. per reference flow; collect unnormalised readings, convert in raw_to_inventory, assign A and reuse normalize_once. | kg; kWh; MJ | continuous meters and campaign reconciliation | full operating and nonproducing period | actual site supply gates | per reference flow | meter calibration; invoices; return contract; thermal evidence |
| cp_emissions | source_formation | final species emission | species_stack_and_fugitive_test | species; CAS_if_known; medium; stage; concentration; wet_dry_basis; gas_state; integrated_volume; true_rate; interval; carrier_in; carrier_out; capture_mass; aerosol_water; particle_partition; uncertainty | Measure representative final emissions including cyclic digestion peaks and reduction vents; pair concentration with actual gas state/volume and collect carrier air/capture separately. Preserve species identity and detection limits without treating nondetect as exact zero. per reference flow; raw mass/rate conversion precedes assignment, then use normalize_once once. | kg; mg/m3; m3 | source-specific sampling plus full event coverage | all campaigns including startup cleanup and failures | final air boundaries and separate capture gates | per reference flow | sampling plan; species method; gas-state evidence; uncertainty |
| cp_release | acid_release | reference whole liquid | weighing_and_receiver_acceptance | source_lot; cohort_id; first_release_id; release_time; receiver_inlet; net_liquid_mass; free_acid; salt_assays; suspended_solids; water; temperature; density_if_used; original_Qc; opening_FG; closing_FG; gross_dispatch; true_returns; original_delivery_reverse | Use calibrated net weighing or a traceable mass-flow total; representative homogenisation/settling-aware samples and validated free-acid/elemental/phase methods. Match receiver specification and signed feed decision to each unique first release; independently trace returned original lots. per reference flow; collect Q as unnormalised unique net first-release mass and refer only to normalize_once. | kg | each first release and stock cutoff | declared release cohort and historical FG bridge | named source and receiving inlet | per reference flow | scale calibration; sample plan; receiver test; signed decision; FG history |
| cp_waste_source | source_formation | specific whole waste | transfer_and_treatment | event_id; stage; lot; whole_wet_mass; material_form; free_acid; salts; solids; water; attached_substrate; destination; provider_scope; original_cohort; inherited_vector | Weigh whole individual waste and independently sample constituents; trace actual receiving treatment and partition overlapping attached liquids/solids. No untreated-transfer amount is renamed an environmental emission. This protocol owns only source_formation events; reconcile the other stage without overlapping its quantities. per reference flow; raw gross V and assigned A stay separate, then reuse normalize_once. | kg | each removal and transfer | full period including cleanup failures and Q zero | specific waste transfer gate | per reference flow | weigh tickets; transfer receipts; composition; treatment scope |
| cp_waste_release | acid_release | specific whole waste | transfer_and_treatment | event_id; stage; lot; whole_wet_mass; material_form; free_acid; salts; solids; water; attached_substrate; destination; provider_scope; original_cohort; inherited_vector | Weigh whole individual waste and independently sample constituents; trace actual receiving treatment and partition overlapping attached liquids/solids. No untreated-transfer amount is renamed an environmental emission. This protocol owns only acid_release events; reconcile the other stage without overlapping its quantities. per reference flow; raw gross V and assigned A stay separate, then reuse normalize_once. | kg | each removal and transfer | full period including cleanup failures and Q zero | specific waste transfer gate | per reference flow | weigh tickets; transfer receipts; composition; treatment scope |
| cp_pack | acid_release | each packaging component interface | component_event_ledger | component_material; form; type; direction; event_id; opening_empty; opening_attached_WIP_FG; opening_reusable; purchase_P; first_nonpurchase_N_ext; return_ER; closing_empty; closing_attached_WIP_FG; closing_reusable; grossS; return_out_EO; waste_W; owner; original_cohort; earlier_dispatch; inherited_vector; provider_included_scope; new_service | Weigh every actual component and event, including first supplier-accompanied/entrusted/borrowed/rented receipts. Prove price coverage and prior dispatch separately; use the explicit individual interfaces and matched component physical gate. per reference flow; keep raw component ledger before division, perform pack_ledger and reuse the one normalize_once result. | kg | each receipt dispatch return discard and stock cutoff | same component gate/period plus original history | source and release packaging boundary | per reference flow | scales; priced-scope evidence; custody/dispatch links; component ledger closure |
| cp_service | acid_release | original cohort post-release service | cohort_service_records | original_cohort; original_Qc; inherited_vector; opening_FG; closing_FG; gross_dispatch; actual_return; original_delivery_reverse; H; actual_incremental_material; actual_electricity; actual_water; actual_waste; rental_return_scope; provider_included_scope | Trace each actual storage/handling/return/rework/cleanup/rental-return event to its original release. Create specific measured utility/material/waste interfaces for actual service events and preserve real reverse-delivery amounts, rather than repeating the production inventory. per reference flow; collect unnormalised service totals, keep original Q_c and use normalize_once once for a separate service result. | kg; kWh; MJ; h | each real service event | original released cohort lifetime in declared service period | actual cohort storage and dispatch gates | per reference flow | cohort provenance; service meters; actual return and custody receipts |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_to_inventory | all inventory rows | Convert actual raw units and only genuine rates to unnormalised row units. Integrated liquid/gas totals are not multiplied by time again. Use independently measured same-substance/state density for volume-to-mass, native kWh-to-MJ factor 3.6 for electricity, and measured steam mass plus separate enthalpy-state evidence. Keep free-acid/salt/water assays as subledgers; no double purchase or invented reaction-water closure. | cp_source; cp_utilities_source; cp_utilities_release; cp_emissions; cp_waste_source; cp_waste_release | unnormalised_V | `jrc-lvic-s-2007` |
| physical_gates | all inventory rows | Apply b_physical_gates to whole gross V before allocation, preserving independent Fe/Ti/S and water-phase evidence and actual carrier-gas inlet/outlet cancellation. Pair raw_mother_liquor with mother_liquor_in. Keep Q release and FG/service movement ledgers distinct, then cancel their internal interfaces in the combined physical gate. | unnormalised_V; cp_balance; cp_release; cp_service | physical_closure | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| inherit_and_assign | all inventory rows | Reconcile opening/closing lots and each inherited/current exchange vector; cancel internal events once. Execute section7 dedicated/subdivision, determining-causality and only justified residual common-gate value assignment. Produce unnormalised A_i attributable to the new first-release cohort. Keep physical companion diagnostics V separate, with explicit joint-versus-allocated representation and no avoided output credit. Retain all failed/Q-zero burdens and original service vectors. | unnormalised_V; cp_balance; cp_source; cp_release; cp_pack; cp_service | A_i | `jrc-ilcd-2010` |
| pack_ledger | all packaging component interfaces | For each specific component and same physical gate apply opening + P + N_ext + ER = closing + grossS + EO + W, where opening/closing each include empty, attached WIP/FG and reusable stocks. P is real new purchase; N_ext is first external non-purchase outside the paid supply scope; ER needs earlier dispatch. Events are mutually exclusive; internal issues/reuse cancel. Apply b_pack_balance to any evidenced non-overlapping F/X event, and b_pack_burden to each original/current vector and real incremental service. Missing actual interfaces or quantities remain incomplete, never a balancing plug. | cp_pack; cp_service | component_physical_and_burden_ledger | `jrc-ilcd-2010` |
| normalize_once | all inventory rows | a_i = A_i / Q for Q > 0; A_i is the unnormalised attributable row amount after raw_to_inventory, stock/inherited-vector reconciliation and section7 assignment; Q is the unique whole-liquid first-release net mass from cp_release. This is the only normalisation division. Cards and protocol aggregation refer to this same result. For a separate later-service result use original Q_c as that same denominator, never H or a newly invented production quantity. Q = 0 retains all raw inherited/current loads and produces no unit result. The reference output is 1 kg by definition. | A_i; Q; Q_c; cp_release; cp_service | a_i | `jrc-ilcd-2010` |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Retain one actual physical identity/type and complete native restrictions per bound row; distinguish source synthesis, identity evidence and future factory measurements. | supplier specification; full native records; actual configuration |
| dq_measurement | all gates | Record calibration, sampling coverage, phase separation, actual state-dependent density where used, true rate/integrated-volume distinction, uncertainty and detection limits. No fabricated factory values. | meter/scale log; laboratory method and uncertainty; representative samples |
| dq_history | stocks and services | Keep raw/WIP/FG and component event histories plus each inherited exchange vector across cutoffs; retain failures, idle, cleanup and actual original-cohort service. | lot ledger; allocation derivation; ownership/provider scope; event bridge |
| dq_completeness | atomic receipts and outlets | No actual chemical, utility, species, packaging receipt or outlet may remain in a collective placeholder. A missing measured interface or unverified receiver/core identity is explicit incompleteness; ordinary auxiliary identity gaps stay specific. | atomic row/interface inventory; source/receiver comparison; unresolved register |
| dq_relevance | sources and assignment | Qualitative historic industrial evidence supports route structure only; contemporaneous measurements and common-gate market evidence support concrete quantities/allocation. Do not reuse pigment-site averages per kg mother liquor. | source context; time/geography/technology match; sensitivity and gaps |

## 9. Validation Rules
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference and source | Fail applicability if source is not the declared ilmenite sulphate hydrolysis route, liquid mother-liquor state/receiver purpose is unproven, or excluded sewage/solvent/clinical/metal-recovery scope is selected. Verify the bound Product as this actual source-qualified spent acid-leach-liquor subset with its whole composition and first reconcentration-feed gate. Do not substitute a physically pre-hydrolysis TiOSO4 feed, Waste, service, fresh concentrated acid, recovered acid or pigment. A generic Product identity alone cannot establish source, state or receiving function. | `un-cpc3-2025`; `wco-hs2022-38`; `wco-hs2022-26`; `jrc-lvic-s-2007` |
| v_qualifiers | released_acid | Require every reference qualifier and actual first-release receiver test/decision, lot trace, net weighing and stated liquid thermal/composition condition. Source averages, an invoice label or a signed transport receipt alone do not establish accepted regeneration-feed compatibility. | `jrc-lvic-s-2007` |
| v_balance | physical gates | Check each source/release/FG/component gate on unallocated gross V, separate elemental and water evidence, and explicit uncertainty. Fail on missing streams, unresolved two-unknown residual fitting, duplicated internal transfers or missing opening/closing WIP/FG histories. Do not invent a tolerance or use allocation to force physical closure. | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| v_single_denominator | all inventory rows | Reference output is 1 kg whole wet liquid. Collect raw totals before division; perform raw unit/rate conversion and evidenced allocation/stock reconciliation first, then normalize_once only. Cards and collection aggregation reuse that one result. Q zero retains all raw current and inherited burdens without a unit result. Closing FG is not added to Q and service H is never the production divisor. | `jrc-ilcd-2010` |
| v_native | every bound UUID | Require complete native name, type, route/form, CAS, geography/grade, all comments/synonyms and every flow property, plus the exact referenced property-to-unit-group/reference-unit chain. All native restrictions in the card apply before provider selection; a broad name or classification label cannot waive a hard physical contradiction. Keep unresolved ordinary auxiliary and internal-transfer identities specific in metadata; each actual exchange still requires compatible identity/provider evidence. | `jrc-lvic-s-2007` |
| v_pack_receipts | each actual component | Require actual atomic P, first non-purchase N_ext and true ER quantities/interfaces with mutually exclusive events, plus closing/dispatch/EO/W quantities at the same gate. Non-purchase includes first entrusted/borrowed/rented and supplier-accompanied components outside a real purchase price. ER needs earlier dispatch. Missing actual interface or measurement fails completeness; an old P+ER-only equation, opening stock substitution, copied purchase UUID or invented return cannot pass. | `jrc-ilcd-2010` |
| v_burden_once | all parent and component histories | Require original ownership/cohort, each inherited exchange vector, supplier included scope, one provider per non-overlapping supplied object and actual incremental service. Check mixture-versus-constituent and parent-versus-residual representation for duplication. No missing burden is silently set zero, including Q zero or non-purchase receipts. | `jrc-ilcd-2010` |
| v_methods | allocation and evidence | Require dedicated/subdivision and exchange-specific causal analysis before any justified residual common-gate value allocation, with actual market state/period and fees disclosed. Industrial process evidence is not allocation evidence. Reject fixed mass ratios, cherry-picked current/future price mixtures and unreviewed signed-value handling. | `jrc-ilcd-2010` |
| v_species_utility | material, energy and outlet records | Check actual species/outlet type and native medium; actual mass-versus-rate conversion; independently measured density at the substance state; aerosol/condensate/structural water separation; steam supplier convention and actual return quantities. Integrated volumes are not multiplied by time again. An assay indicator is not a chemical exchange. Missing additional real reagents/outlets/containers requires explicit atomic extension before completeness. | `jrc-lvic-s-2007` |
| v_services | original released cohorts | Check retained post-release storage/handling/dispatch/reverse-delivery and real rework/cleanup/rental-return records against original Q_c and inherited history. Count only evidenced incremental service once. Never replace original burden with current production, invent new first release from a return or divide by exposure H. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to a specified mother-liquor reconcentration process before its treatment; use one verified joint or allocated representation with explicit original-cohort service links |
| allowed_use | Source- and receiver-qualified attributional feed inventory after the stated identity, completeness and review requirements are satisfied |
| excluded_use | Generic chemical-waste selector; pure/recovered sulfuric acid; wastewater treatment service; legal/hazard declaration; metal recovery feed; automatic credit or burden-free waste input |
| required_metadata | All section3 qualifiers; source/receiving physical gates; supplied state and actual type; stock/cohort vectors; upstream included scope; allocation and package interfaces; actual service and return topology |
| required_quality_disclosure | Measured versus assigned loads; whole V versus attributable A; method evidence versus factory records; source-qualified Product applicability and remaining ordinary auxiliary/internal-transfer identities; assay and density uncertainty; market/fee applicability; excluded operations and Q-zero handling |
| update_trigger | Changed ore/route, salt/phase or receiver specification, conditioning operation, native identity restrictions, actual package/custody topology, supplier included scope, allocation evidence or emission treatment |

## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Ver.3.0 Structure CSV and complete Explanatory Notes, 30 June 2025, pp203–205; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39950 heading and neighbouring 39920/39940/393 exclusions; no named mother-liquor example or accepted mapping. |
| un-cpc21-hs2017 | official_guidance | UNSD, CPC2.1–HS2017 official correspondence CSV, online snapshot 27 October 2026; https://unstats.un.org/unsd/classifications/Econ/tables/CPC/CPCv21_HS2017/CPC21-HS2017.csv | Historical 3825.69/39950 association only; not represented as a CPC3.0–HS2022 crosswalk. |
| wco-hs2022-38 | official_guidance | WCO, HS Nomenclature 2022, Chapter38 notes1(d),4–6 and subheading note4, heading3825 pp7–8; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf?la=en | Inorganic chemical-industry waste reasoning; distinct sewage/solvent/clinical categories and metal-residue exclusion. |
| wco-hs2022-26 | official_guidance | WCO, HS Nomenclature 2022, Chapter26 note3 and exclusions; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | Exclude residues supplied for metal extraction or manufacture of metal compounds and precious-metal recovery; receiver purpose is required. |
| jrc-lvic-s-2007 | official_guidance | European Commission, LVIC-S BREF, August2007, §3.3.2–3.3.3, printed pp142–160, figures3.4/3.5, PDF pp187–205; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic-s_bref_0907.pdf | Qualitative ilmenite digestion/reduction/crystallisation/hydrolysis/filtration and acid-recovery feed interface; companion and emission separation; historic case figures and broad averages are not defaults or allocation evidence. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March2010, §7.9 especially pp257–268 and Annex14; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality and justified residual market-value allocation; stock/cohort and service interpretation; no automatic waste cut-off or credit. |
